// api/cron/expire.js
// GET /api/cron/expire  — Vercel cron tarafından her 5 dakikada çağrılır.
// Authorization: Bearer CRON_SECRET
// 30dk yanıt vermeyen işleri kapatır, servis puanını düşürür, müşteriye SMS gönderir.
import supabase from "../_supabase.js";
import { sendSMS } from "../_twilio.js";

export default async function handler(req, res) {
  // Cron güvenliği
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (token !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Süresi dolan işleri bul
  const { data: dolmus, error: fetchErr } = await supabase
    .from("is_talepleri")
    .select("id, is_no, servis_id, servis_ad, musteri_tel")
    .eq("durum", "bekliyor")
    .lt("son_kabul_tarihi", new Date().toISOString())
    .limit(50);

  if (fetchErr) return res.status(500).json({ error: fetchErr.message });
  if (!dolmus || dolmus.length === 0) {
    return res.status(200).json({ islem: 0, mesaj: "Süresi dolan iş yok" });
  }

  let islenenSayisi = 0;

  for (const is of dolmus) {
    // Durumu güncelle
    const { error: updateErr } = await supabase
      .from("is_talepleri")
      .update({ durum: "suresi_doldu" })
      .eq("id", is.id);
    if (updateErr) {
      console.error("is_talepleri güncelleme hatası:", updateErr.message);
      continue;
    }

    // servis_performans güncelle
    const { data: perf } = await supabase
      .from("servis_performans")
      .select("yanitlamamis, puan_carpani")
      .eq("servis_id", is.servis_id)
      .single();

    const mevcutYanitlamamis = perf ? perf.yanitlamamis : 0;
    const mevcutCarpani = perf ? Number(perf.puan_carpani) : 1.00;
    const yeniYanitlamamis = mevcutYanitlamamis + 1;
    // Her 3 yanıtsız işte puan_carpani -0.10 (minimum 0.50)
    const yeniCarpani = yeniYanitlamamis % 3 === 0
      ? Math.max(0.50, mevcutCarpani - 0.10)
      : mevcutCarpani;

    const { error: upsertErr } = await supabase
      .from("servis_performans")
      .upsert({
        servis_id: is.servis_id,
        yanitlamamis: yeniYanitlamamis,
        puan_carpani: yeniCarpani,
        guncelleme_tarihi: new Date().toISOString(),
      }, { onConflict: "servis_id" });
    if (upsertErr) console.error("servis_performans upsert hatası:", upsertErr.message);

    // Müşteriye SMS
    try {
      await sendSMS(
        is.musteri_tel,
        `${is.servis_ad} 30 dakika içinde yanıt vermedi. ` +
        `Yeni bir servis seçmek için uygulamaya dönün. İş No: #${is.is_no}`
      );
    } catch (e) { console.error("SMS hatası (expire):", e.message); }

    islenenSayisi++;
  }

  // musteri_tel dolmus dizisinde bulunur ama yanıta dahil edilmez; yalnızca SMS için kullanılır.
  return res.status(200).json({ islem: islenenSayisi, kapatilan: dolmus.map(i => i.is_no) });
}
