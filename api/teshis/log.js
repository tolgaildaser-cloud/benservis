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

// ——— YK #58 ⑴ — ÇEREZSİZ DÖNÜŞÜM ÖLÇÜMÜ (Ads + YouTube + Instagram, tek boru) ———
// Kaynak etiketi SUNUCU tarafında okunur: tarayıcının bu POST'a eklediği `Referer`
// başlığı, teşhisin yapıldığı sayfanın TAM adresidir (aynı-origin istekte sorgu dizesi
// de gelir — varsayılan `strict-origin-when-cross-origin` politikası buna izin verir).
// ⛔ Çerez YOK · gtag/Ads script'i YOK · localStorage/sessionStorage YOK · client'tan
// veri ALINMAZ (gövdeden kaynak kabul edilseydi sahte etiket basılabilirdi).
// Şema: benservis-icerik/2026-08-08-UTM-SEMASI-VE-YT-ACIKLAMA-SABLONU.md
//   utm_source → kaynak · utm_medium → cins (cpc/paid-social = ödenmiş, gerisi organik) ·
//   utm_campaign → kampanya · gclid → Ads oto-etiketlemesi (UTM'siz de gelebilir).
// ⛔ Serbest metin ALINMAZ: `kaynak` desenine uymayan değer sessizce atılır (App.jsx'teki
// `kaynak=` parametresinin GELIS kuralıyla aynı çizgi) — analitiğe çöp/kişisel veri sızmasın.
const utmTemiz = (v, n = 60) => {
  if (typeof v !== "string") return null;
  const s = v.trim().toLowerCase().slice(0, n);
  return /^[a-z0-9._-]{1,60}$/.test(s) ? s : null;
};
function kaynakOku(req) {
  try {
    const ref = req.headers.referer || req.headers.referrer || "";
    if (!ref) return {};
    const q = new URL(ref).searchParams;
    const gclidHam = (q.get("gclid") || "").trim().slice(0, 100);
    const gclid = /^[A-Za-z0-9_-]{5,100}$/.test(gclidHam) ? gclidHam : null;
    // Ads oto-etiketlemesi UTM koymadan yalnız gclid gönderebilir → kaynak/cins tamamlanır.
    const kaynak = utmTemiz(q.get("utm_source")) || (gclid ? "google" : null);
    const cins = utmTemiz(q.get("utm_medium")) || (gclid ? "cpc" : null);
    const kampanya = utmTemiz(q.get("utm_campaign"), 80);
    if (!kaynak && !cins && !kampanya && !gclid) return {};
    return { kaynak, cins, kampanya, gclid };
  } catch { return {}; }
}
// Kolonlar canlı şemaya eklenmeden deploy edilirse insert'i düşürmemek için:
// bilinmeyen kolon hatasında (PostgREST PGRST204) kayıt UTM'siz tekrar denenir.
const kolonYok = (e) => e?.code === "PGRST204" || /column .* does not exist|Could not find the/i.test(e?.message || "");

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
    const utm = kaynakOku(req); // YK #58 ⑴ — sunucu tarafı, çerezsiz
    let { data, error } = await supabase.from("teshis_log").insert({ ...kayit, ...utm }).select("id").single();
    if (error && kolonYok(error)) {
      // Kolonlar henüz yok → teşhis kaydı UTM'siz de olsa DÜŞMEZ (ölçüm ikincil, kayıt birincil).
      console.warn("[teshis/log] UTM kolonlari yok — kayit UTM'siz yazildi (supabase/teshis-log-utm.sql)");
      ({ data, error } = await supabase.from("teshis_log").insert(kayit).select("id").single());
    }
    if (error) return res.status(200).json({ ok: false }); // best-effort
    return res.status(200).json({ ok: true, id: data.id });
  } catch {
    return res.status(200).json({ ok: false });
  }
}

export default withRateLimit(handler, { prefix: "teshislog", limits: [{ tokens: 40, window: "1 h" }] });
