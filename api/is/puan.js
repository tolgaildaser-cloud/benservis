// api/is/puan.js
// POST /api/is/puan
// Body: { is_no, puan (1-5), yorum? }
// Auth yok — is_no + durum=tamamlandi + puan IS NULL kontrolleriyle güvenlik sağlanır.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { is_no, puan, yorum } = req.body || {};

  if (!is_no) return res.status(400).json({ error: "is_no gerekli" });
  if (!puan || puan < 1 || puan > 5) return res.status(400).json({ error: "puan 1–5 arası olmalı" });

  const isNoTemiz = String(is_no).trim().toUpperCase();

  // İşi bul, durum + mevcut puan kontrol et
  const { data: is, error: fetchErr } = await supabase
    .from("is_talepleri")
    .select("id, durum, puan")
    .eq("is_no", isNoTemiz)
    .single();

  if (fetchErr || !is) return res.status(404).json({ error: "İş bulunamadı" });
  if (is.durum !== "tamamlandi") return res.status(409).json({ error: "Yalnızca tamamlanmış işler değerlendirilebilir" });
  if (is.puan !== null) return res.status(409).json({ error: "Bu iş zaten değerlendirildi" });

  const { error: updateErr } = await supabase
    .from("is_talepleri")
    .update({
      puan: parseInt(puan, 10),
      yorum: yorum?.trim() || null,
    })
    .eq("id", is.id);

  if (updateErr) return res.status(500).json({ error: updateErr.message });

  return res.status(200).json({ ok: true });
}
