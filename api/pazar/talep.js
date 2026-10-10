// api/pazar/talep.js — YK #166 PR-4 (10 Eki 2026): "Henüz ürün yok, talep bırak" formu.
// POST /api/pazar/talep  { parca_turu, cihaz_turu, marka_model?, il, telefon, kaynak? }
//
// Yazılan yer `parca_talepleri` (#165 PR-1 migration; RLS açık, politika yok → yalnız
// service key). SMS yok, satıcıya iletim yok: talepler admin'de okunur.
// ⛔ Telefon ve marka/model analitiğe yazılmaz (#166 ölçüm kuralı); `kaynak` yalnız
//    `blog-<slug>` / `pazar` gibi kişisel olmayan bir etiket olabilir.
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";
import { PAZAR_CIHAZLARI, PARCA_TURLERI } from "../../src/pazar-sozluk.js";
import { TR_IL_ILCE } from "../../src/tr-iller.js";

// `KvkkNotu` bileşeninin metin sürümü. Metin değişirse bu sayı artar.
export const KVKK_METIN_V = 1;

export function talepDogrula(g = {}) {
  if (!PARCA_TURLERI.some((p) => p.slug === g.parca_turu)) return { hata: "Parça türünü seçin" };
  if (!PAZAR_CIHAZLARI.some((c) => c.slug === g.cihaz_turu)) return { hata: "Cihazı seçin" };
  if (!Object.prototype.hasOwnProperty.call(TR_IL_ILCE, g.il)) return { hata: "İli seçin" };
  const rakam = String(g.telefon || "").replace(/\D/g, "");
  if (rakam.length < 10 || rakam.length > 12) return { hata: "Geçerli bir telefon girin" };
  const marka = typeof g.marka_model === "string" && g.marka_model.trim()
    ? g.marka_model.trim().slice(0, 120) : null;
  const kaynak = typeof g.kaynak === "string" && /^[a-z0-9-]{1,80}$/.test(g.kaynak) ? g.kaynak : null;
  return {
    satir: {
      parca_turu: g.parca_turu,
      cihaz_turu: g.cihaz_turu,
      marka_model: marka,
      il: g.il,
      telefon: `+90${rakam.slice(-10)}`,
      kvkk_metin_v: KVKK_METIN_V,
      kaynak,
    },
  };
}

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { satir, hata } = talepDogrula(req.body);
  if (hata) return res.status(400).json({ error: hata });

  const { error } = await supabase.from("parca_talepleri").insert(satir);
  if (error) return res.status(500).json({ error: "Talep kaydedilemedi" });
  return res.status(201).json({ ok: true });
}

export default withRateLimit(handler, {
  prefix: "pazar-talep",
  limits: [{ tokens: 3, window: "10 m" }, { tokens: 10, window: "1 d" }],
});
