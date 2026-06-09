// api/servis/urunler/[id].js
// PATCH  /api/servis/urunler/:id  — durum veya fiyat güncelle (JWT auth)
// DELETE /api/servis/urunler/:id  — ürünü sil (JWT auth)
import supabase from "../../_supabase.js";
import { setCorsHeaders } from "../../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  // JWT doğrulama
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_id = user.user_metadata?.servis_id;
  if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Ürün ID gerekli" });

  // Sahiplik kontrolü
  const { data: urun, error: fetchErr } = await supabase
    .from("servis_urunler")
    .select("id, servis_id")
    .eq("id", id)
    .single();

  if (fetchErr || !urun) return res.status(404).json({ error: "Ürün bulunamadı" });
  if (urun.servis_id !== servis_id) return res.status(403).json({ error: "Bu ürünü düzenleyemezsiniz" });

  // ── PATCH: güncelle ───────────────────────────────────────────────
  if (req.method === "PATCH") {
    const { durum, fiyat, baslik, aciklama, gorsel_url } = req.body || {};

    const guncelleme = {};
    if (durum !== undefined) {
      const gecerli = ["aktif", "pasif", "satildi"];
      if (!gecerli.includes(durum)) return res.status(400).json({ error: "durum: aktif | pasif | satildi" });
      guncelleme.durum = durum;
    }
    if (fiyat !== undefined) {
      if (isNaN(Number(fiyat)) || Number(fiyat) < 0) return res.status(400).json({ error: "Geçersiz fiyat" });
      guncelleme.fiyat = Number(fiyat);
    }
    if (baslik !== undefined) {
      if (!baslik?.trim()) return res.status(400).json({ error: "Başlık boş olamaz" });
      guncelleme.baslik = baslik.trim();
    }
    if (aciklama !== undefined) guncelleme.aciklama = aciklama?.trim() || null;
    if (gorsel_url !== undefined) guncelleme.gorsel_url = gorsel_url?.trim() || null;

    if (Object.keys(guncelleme).length === 0) {
      return res.status(400).json({ error: "En az bir alan gerekli" });
    }

    const { data, error } = await supabase
      .from("servis_urunler")
      .update(guncelleme)
      .eq("id", id)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── DELETE: sil ───────────────────────────────────────────────────
  if (req.method === "DELETE") {
    const { error } = await supabase
      .from("servis_urunler")
      .delete()
      .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
