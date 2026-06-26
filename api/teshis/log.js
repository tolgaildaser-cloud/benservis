// api/teshis/log.js — Teşhis istatistiği (ANONİM, PII YOK). İki mod:
//  insert: {cihaz,marka,ariza,maliyet_min,maliyet_max,karar,aciliyet,yas,garanti} → {ok,id}
//  konum : {id, il, ilce} → o satırın il/ilce'sini BİR KEZ doldurur (üzerine yazmaz) → {ok}
// Sunucu service-role ile yazar (RLS bypass). Best-effort: hata 200 {ok:false}, akışı bozma.
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";

const IZIN = ["benservis.com", "vercel.app", "localhost"];
function originOk(req) {
  const raw = req.headers.origin || req.headers.referer || "";
  if (!raw) return true;
  try { const h = new URL(raw).hostname; return IZIN.some((a) => h === a || h.endsWith("." + a)); }
  catch { return true; }
}
const str = (v, n = 120) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);
const num = (v) => (v == null || isNaN(Number(v)) ? null : Math.round(Number(v)));

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!originOk(req)) return res.status(403).json({ ok: false });
  const b = req.body || {};
  try {
    // Konum modu — id varsa o satırı güncelle (yalnız il null iken → bir kez)
    if (b.id) {
      const il = str(b.il, 64), ilce = str(b.ilce, 64);
      if (!il && !ilce) return res.status(400).json({ ok: false });
      await supabase.from("teshis_log").update({ il, ilce }).eq("id", b.id).is("il", null);
      return res.status(200).json({ ok: true });
    }
    // Insert modu — anonim teşhis kaydı
    const kayit = {
      cihaz: str(b.cihaz, 60), marka: str(b.marka, 60), ariza: str(b.ariza, 120),
      maliyet_min: num(b.maliyet_min), maliyet_max: num(b.maliyet_max),
      karar: str(b.karar, 20), aciliyet: str(b.aciliyet, 20),
      yas: str(b.yas, 20), garanti: b.garanti === true,
    };
    const { data, error } = await supabase.from("teshis_log").insert(kayit).select("id").single();
    if (error) return res.status(200).json({ ok: false }); // best-effort
    return res.status(200).json({ ok: true, id: data.id });
  } catch {
    return res.status(200).json({ ok: false });
  }
}

export default withRateLimit(handler, { prefix: "teshislog", limits: [{ tokens: 40, window: "1 h" }] });
