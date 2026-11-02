// api/admin/servis-dizin.js — pano Servis sekmesi: dizin özeti + başvuru durumu. ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET. Kaynak: src/services-data.json (build zamanı) + servis_basvurulari (yalnız il, durum). Çıktı toplanmış sayıdır.
import fs from "node:fs";
import path from "node:path";
import supabase from "../_supabase.js";
import { KAPSAM_ILLER } from "../../src/kapsam-iller.js";
import { dizinOzet, basvuruOzet } from "../../src/servis-dizin-ozet.js";

function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}

let dizin = null; // sıcak çağrıda 22 MB dosya yeniden okunmaz

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Yalnızca GET" });
  if (!yetkiKontrol(req)) return res.status(401).json({ ok: false, error: "Yetkisiz — ADMIN_TOKEN hatalı" });
  try {
    dizin ||= dizinOzet(JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/services-data.json"), "utf8")), KAPSAM_ILLER);
    const { data, error } = await supabase.from("servis_basvurulari").select("il,durum").limit(20000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    res.setHeader("Cache-Control", "private, max-age=60");
    return res.status(200).json({ ok: true, dizin, basvurular: basvuruOzet(data || []) });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
