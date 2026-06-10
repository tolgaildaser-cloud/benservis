// api/admin/sms-test.js
// POST /api/admin/sms-test — { tel } — Verimor entegrasyon teşhisi
// Güvenlik: Authorization: Bearer $ADMIN_TOKEN
// Ham Verimor yanıtını/hatasını döner — SMS gitmiyor sorunlarını teşhis için.
import { sendSMS, setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken || (req.headers["authorization"] || "") !== `Bearer ${adminToken}`) {
    return res.status(401).json({ error: "Yetkisiz" });
  }

  // source: opsiyonel başlık override — "" gönderilirse source_addr payload'a
  // hiç konmaz, Verimor hesabın varsayılan başlığını kullanır.
  const { tel, source } = req.body || {};
  if (!tel) return res.status(400).json({ error: "tel gerekli" });

  const env_durum = {
    VERIMOR_USERNAME: process.env.VERIMOR_USERNAME ? "✓ set" : "✗ EKSİK",
    VERIMOR_PASSWORD: process.env.VERIMOR_PASSWORD ? "✓ set" : "✗ EKSİK",
    VERIMOR_SOURCE:   process.env.VERIMOR_SOURCE || "(boş — source_addr gönderilmez)",
    kullanilan_source: source !== undefined ? (source || "(omit — hesap defaultu)") : "(env)",
  };

  try {
    const sonuc = await sendSMS(tel, "Benservis SMS testi — entegrasyon çalışıyor ✓", source);
    return res.status(200).json({ ok: true, env_durum, verimor_yanit: sonuc });
  } catch (e) {
    return res.status(500).json({ ok: false, env_durum, hata: e.message });
  }
}
