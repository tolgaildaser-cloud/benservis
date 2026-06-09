// api/is/[id].js
// PATCH /api/is/:id
// Header: Authorization: Bearer <supabase-jwt>
// Body: { action: "kabul" | "ret" | "tamamla", gelis_penceresi?: string }
import supabase from "../_supabase.js";
import { sendSMS, setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });

  // JWT doğrulama
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_id = user.user_metadata?.servis_id;
  if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "İş ID gerekli" });

  const { action, gelis_penceresi } = req.body || {};

  if (!["kabul", "ret", "tamamla", "havuz_kabul"].includes(action)) {
    return res.status(400).json({ error: "action: kabul | ret | tamamla | havuz_kabul" });
  }

  // ── Havuz kabul: henüz servis_id atanmamış talep, ilk kabul eden alır ──────────
  if (action === "havuz_kabul") {
    const servis_ad_meta = user.user_metadata?.servis_ad || "Servis";

    // Atomik claim: servis_id NULL ve durum=havuzda ise güncelle
    // Aynı anda iki servis talep ederse sadece biri başarılı olur
    const updateData = { servis_id, servis_ad: servis_ad_meta, durum: "bekliyor" };
    if (gelis_penceresi) updateData.gelis_penceresi = gelis_penceresi;

    const { data: claimed, error: claimErr } = await supabase
      .from("is_talepleri")
      .update(updateData)
      .eq("id", id)
      .is("servis_id", null)
      .eq("durum", "havuzda")
      .select("id, musteri_tel, is_no, servis_ad")
      .single();

    if (claimErr || !claimed) {
      return res.status(409).json({ error: "Bu talep başka bir servis tarafından alındı veya bulunamadı" });
    }

    try {
      await sendSMS(
        claimed.musteri_tel,
        `İyi haber! Talebiniz ${claimed.servis_ad} tarafından alındı. ` +
        `İş No: #${claimed.is_no}. Takip: benservis.com/takip/${claimed.is_no}`
      );
    } catch (e) { console.error("SMS hatası (havuz_kabul):", e.message); }

    return res.status(200).json({ durum: "bekliyor" });
  }

  // İşin bu servise ait olduğunu doğrula
  const { data: is, error: fetchErr } = await supabase
    .from("is_talepleri")
    .select("id, durum, servis_ad, is_no, musteri_tel, servis_id, seri_no, cihaz, belirti")
    .eq("id", id)
    .eq("servis_id", servis_id)
    .single();

  if (fetchErr || !is) return res.status(404).json({ error: "İş bulunamadı" });
  if (is.durum !== "bekliyor" && action !== "tamamla") {
    return res.status(409).json({ error: `İş zaten ${is.durum} durumunda` });
  }

  if (action === "kabul") {
    if (!gelis_penceresi) return res.status(400).json({ error: "gelis_penceresi zorunlu" });

    const { error: updateErr } = await supabase
      .from("is_talepleri")
      .update({
        durum: "onaylandi",
        gelis_penceresi,
        verimor_source: process.env.VERIMOR_SOURCE,
      })
      .eq("id", id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    try {
      await sendSMS(
        is.musteri_tel,
        `İyi haber! ${is.servis_ad} talebinizi kabul etti. ` +
        `Geliş: ${gelis_penceresi}. ` +
        `İş No: #${is.is_no}`
      );
    } catch (e) { console.error("SMS hatası (kabul):", e.message); }

    return res.status(200).json({ durum: "onaylandi" });
  }

  if (action === "ret") {
    const { error: updateErr } = await supabase
      .from("is_talepleri")
      .update({ durum: "reddedildi" })
      .eq("id", id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    try {
      await sendSMS(
        is.musteri_tel,
        `${is.servis_ad} bu sefer uygun değil. ` +
        `Yeni servis seçmek için uygulamaya dönün. İş No: #${is.is_no}`
      );
    } catch (e) { console.error("SMS hatası (ret):", e.message); }

    return res.status(200).json({ durum: "reddedildi" });
  }

  if (action === "tamamla") {
    if (is.durum !== "onaylandi") {
      return res.status(409).json({ error: "Sadece onaylanan işler tamamlanabilir" });
    }
    const { error: updateErr } = await supabase
      .from("is_talepleri")
      .update({ durum: "tamamlandi" })
      .eq("id", id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    // DPP otomatik yazma (seri_no varsa)
    let dpp_tamir_id = null;
    if (is.seri_no) {
      try {
        // cihazlar'da seri_no'ya bak veya oluştur
        let cihaz_id = null;
        const { data: cihazRow, error: cihazErr } = await supabase
          .from("cihazlar")
          .upsert(
            { seri_no: is.seri_no, kategori: is.cihaz || null },
            { onConflict: "seri_no", ignoreDuplicates: false }
          )
          .select("id")
          .single();
        if (!cihazErr && cihazRow) cihaz_id = cihazRow.id;

        if (cihaz_id) {
          const { data: tamir, error: tamirErr } = await supabase
            .from("tamir_kayitlari")
            .insert({
              cihaz_id,
              tarih: new Date().toISOString().split("T")[0],
              yapilan_islem: is.belirti || "Benservis tamir kaydı",
              servis_adi: is.servis_ad,
              servis_id: is.servis_id,
              servis_turu: "benservis",
              benservis_is_id: is.id,
              degistirilen_parcalar: [],
              maliyet: null,
            })
            .select("id")
            .single();

          if (!tamirErr && tamir) {
            dpp_tamir_id = tamir.id;
            // dpp_tamir_id'yi is_talepleri'ne geri yaz
            const { error: linkErr } = await supabase
              .from("is_talepleri")
              .update({ dpp_tamir_id: tamir.id })
              .eq("id", id);
            if (linkErr) {
              console.error("DPP link yazma hatası (tamir oluştu ama is_talepleri güncellenmedi):", linkErr.message, "tamir_id:", tamir.id, "is_id:", id);
            }
          }
        }
      } catch (dppErr) {
        console.error("DPP yazma hatası:", dppErr.message);
        // DPP hatası işi durdurmaz
      }
    }

    // SMS bildirimi (non-blocking)
    try {
      await sendSMS(
        is.musteri_tel,
        `İşiniz tamamlandı! Memnun kaldınız mı? Değerlendirin: benservis.com/takip/${is.is_no}`
      );
    } catch (e) { console.error("SMS hatası (tamamla):", e.message); }

    return res.status(200).json({ durum: "tamamlandi", dpp_tamir_id });
  }
}
