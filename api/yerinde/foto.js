// api/yerinde/foto.js — YK #183 PR-3 · seri no fotoğrafı (private bucket `yerinde-seri`, istemci politikası YOK)
// POST /api/yerinde/foto  { isId, tip }  → imzalı YÜKLEME adresi (tarayıcı dosyayı doğrudan bucket'a koyar)
// GET  /api/yerinde/foto?isId=…          → o işin fotoğrafları için kısa ömürlü imzalı GÖRME adresleri
// Header: Authorization: Bearer <supabase-jwt>
// Yetki: koordinatör her işte; teknisyen yalnız kendi koduna atanmış işte. Dosya yolu sunucuda üretilir
// (`<is_id>/<zaman>-<rastgele>.<uzantı>`), istemcinin verdiği ad kullanılmaz. Fotoğraf kişisel veri değildir
// ama yine de public URL verilmez; görme adresi 15 dk geçerli.
import crypto from "node:crypto";
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { yerindeKimlik } from "../_yerinde.js";
import { FOTO_TIPLERI } from "../../src/yerinde-cekirdek.js";

const BUCKET = "yerinde-seri";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const GORME_SN = 15 * 60;

export function fotoYolu(isId, tip, simdi = Date.now(), rastgele = crypto.randomBytes(6).toString("hex")) {
  const uzanti = FOTO_TIPLERI[tip];
  if (!UUID.test(String(isId)) || !uzanti) return null;
  return `${isId}/${simdi}-${rastgele}.${uzanti}`;
}

async function isErisimi(kim, isId) {
  const { data: is } = await supabase.from("yerinde_isler").select("id, teknisyen_kod").eq("id", isId).maybeSingle();
  if (!is) return null;
  if (kim.rol === "yerinde_teknisyen" && (!kim.teknisyenKod || is.teknisyen_kod !== kim.teknisyenKod)) return null;
  return is;
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!["GET", "POST"].includes(req.method)) return res.status(405).json({ error: "Method not allowed" });
  const kim = await yerindeKimlik(req, res);
  if (!kim) return;

  const isId = String((req.method === "GET" ? req.query?.isId : req.body?.isId) || "");
  if (!UUID.test(isId)) return res.status(400).json({ error: "İş kimliği geçersiz" });
  if (!(await isErisimi(kim, isId))) return res.status(404).json({ error: "İş bulunamadı" });

  if (req.method === "GET") {
    const { data: dosyalar, error } = await supabase.storage.from(BUCKET).list(isId, { limit: 20, sortBy: { column: "name", order: "asc" } });
    if (error) return res.status(500).json({ error: "Fotoğraflar okunamadı" });
    const yollar = (dosyalar || []).filter((d) => d.name && !d.name.startsWith(".")).map((d) => `${isId}/${d.name}`);
    if (!yollar.length) return res.status(200).json({ fotolar: [] });
    const { data: imzali, error: iErr } = await supabase.storage.from(BUCKET).createSignedUrls(yollar, GORME_SN);
    if (iErr) return res.status(500).json({ error: "Fotoğraf adresi üretilemedi" });
    return res.status(200).json({ fotolar: (imzali || []).filter((x) => x.signedUrl).map((x) => ({ yol: x.path, url: x.signedUrl })) });
  }

  const yol = fotoYolu(isId, req.body?.tip);
  if (!yol) return res.status(400).json({ error: "Yalnız JPEG, PNG, WEBP ya da HEIC fotoğraf yüklenir" });
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUploadUrl(yol);
  if (error || !data?.token) return res.status(500).json({ error: "Yükleme adresi üretilemedi" });
  // Log: yalnız sabit etiket (dosya adı ve kişisel veri yazılmaz). Yükleme tarayıcıda bitmese de deneme kayda geçer.
  await supabase.from("yerinde_is_log").insert({ is_id: isId, olay: "foto", yazan: kim.user.id });
  return res.status(200).json({ yol: data.path || yol, token: data.token, bucket: BUCKET });
}
