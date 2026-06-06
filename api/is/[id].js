// api/is/[id].js
// PATCH /api/is/:id
// Header: Authorization: Bearer <supabase-jwt>
// Body: { action: "kabul" | "ret" | "tamamla", gelis_penceresi?: string }
import supabase from "../_supabase.js";
import { sendSMS, setCorsHeaders } from "../_twilio.js";

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
  const { action, gelis_penceresi } = req.body || {};

  if (!["kabul", "ret", "tamamla"].includes(action)) {
    return res.status(400).json({ error: "action: kabul | ret | tamamla" });
  }

  // İşin bu servise ait olduğunu doğrula
  const { data: is, error: fetchErr } = await supabase
    .from("is_talepleri")
    .select("*")
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
        twilio_numara: process.env.TWILIO_PHONE_NUMBER,
      })
      .eq("id", id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    try {
      await sendSMS(
        is.musteri_tel,
        `İyi haber! ${is.servis_ad} talebinizi kabul etti. ` +
        `Geliş: ${gelis_penceresi}. ` +
        `Aramak için: ${process.env.TWILIO_PHONE_NUMBER}. İş No: #${is.is_no}`
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
    return res.status(200).json({ durum: "tamamlandi" });
  }
}
