// api/ikinci-el/kilit.js — POST { id, anahtar, birak? } (YK #171, 11 Eki 2026).
// Sepete ekleme ilanı bu sepete 5 dk kilitler; süre dolarsa kilit kalkar, ürün sepette kalır
// (Tolga, 11 Eki 12:4x). `birak: true` → sepetten çıkarılan ilanın kilidi bırakılır.
// Cevapta kilit anahtarı ya da başka sepete dair bilgi yok; yalnız ok + bitiş anı.
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";
import { anahtarGecerli, ilanKilitle, ilanKilidiBirak } from "../_kilit.js";
import { SEPET_KILIT_DK } from "../../src/ikinci-el-kilit.js";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { id, anahtar, birak } = req.body || {};
  if (!UUID_RE.test(String(id || "")) || !anahtarGecerli(anahtar)) {
    return res.status(400).json({ error: "Geçersiz istek" });
  }

  if (birak === true) {
    await ilanKilidiBirak(supabase, [id], anahtar);
    return res.status(200).json({ ok: true });
  }

  const { kilitlenen, bitis, hata } = await ilanKilitle(supabase, [id], anahtar, SEPET_KILIT_DK);
  if (hata) return res.status(500).json({ error: "Kilit alınamadı" });
  if (!kilitlenen.includes(id)) {
    return res.status(409).json({ error: "Bu ürün şu an başka bir müşterinin sepetinde. Birkaç dakika sonra tekrar deneyin." });
  }
  return res.status(200).json({ ok: true, kilit_bitis: bitis });
}

export default withRateLimit(handler, {
  prefix: "ikinci-el-kilit",
  limits: [{ tokens: 20, window: "60 s" }, { tokens: 120, window: "1 h" }],
});
