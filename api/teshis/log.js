// api/teshis/log.js — Teşhis istatistiği (ANONİM, PII YOK). İki mod:
//  insert: {cihaz,marka,ariza,maliyet_min,maliyet_max,karar,aciliyet,yas,garanti} → {ok,id,il}
//  konum : {id, il, ilce} → o satırın il/ilce'sini doldurur (ilçe dolana kadar) → {ok}
// Sunucu service-role ile yazar (RLS bypass). Best-effort: hata 200 {ok:false}, akışı bozma.
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";
import { TR_IL_ILCE } from "../../src/tr-iller.js";

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
// ——— YK #67 ① — İÇ GEÇİŞ ÖLÇÜMÜ (Tamir Merkezi → teşhis) ———
// Kör nokta: blog CTA'ları parametresiz `/` idi; blogdan gelip teşhis alan kullanıcı
// logda KAYNAKSIZ görünüyordu → "bloglardan siteye geçiş yok" hükmünün oranı hiç
// hesaplanamıyordu. Yazı CTA'ları artık `?k=blog-<slug>` taşıyor; bu işaret dış UTM ile
// AYNI boruya girer ama kendi adıyla ayrışır: `kaynak=blog-ici` · `cins=ic` · `kampanya=<slug>`.
// Böylece hangi YAZININ dönüştürdüğü tek tek sayılabilir (ölçüt: 31 Ağu okuması).
// ⛔ DIŞ UTM ÜSTÜNDÜR: bu fonksiyon yalnız hiçbir dış sinyal (utm_*/gclid) yokken çağrılır —
// reklamdan gelip sonra blog CTA'sına basan kullanıcıda atıf reklamda KALIR, ödenmiş
// trafiğin kaynağı iç tıkla silinmez.
// ⛔ `cins=ic` organik sayılır (şemada yalnız cpc/paid-social ödenmiştir) — iç geçiş
//   ödenmiş trafik gibi raporlanmaz.
// Serbest metin ALINMAZ: `utmTemiz` deseni (a-z0-9._-) dışına çıkan değer sessizce atılır;
// en uzun slug `blog-` önekiyle 48 karakter, desenin 60 sınırının altında.
function icKaynak(q) {
  const ham = utmTemiz(q.get("k"), 60);
  if (!ham || !ham.startsWith("blog-")) return {};
  const slug = ham.slice(5);
  return slug ? { kaynak: "blog-ici", cins: "ic", kampanya: slug, gclid: null } : {};
}
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
    if (!kaynak && !cins && !kampanya && !gclid) return icKaynak(q);
    return { kaynak, cins, kampanya, gclid };
  } catch { return {}; }
}
// Kolonlar canlı şemaya eklenmeden deploy edilirse insert'i düşürmemek için:
// bilinmeyen kolon hatasında (PostgREST PGRST204) kayıt UTM'siz tekrar denenir.
const kolonYok = (e) => e?.code === "PGRST204" || /column .* does not exist|Could not find the/i.test(e?.message || "");

// ——— KONUM KÖPRÜSÜ (13 Ağu YK hacim analizi ②) — IP'DEN İL ÖN-DOLUMU ———
// Sorun: `il`/`ilce` YALNIZ kullanıcı "Servis Bul"a basıp ServisEkrani'na girince
// doluyordu; teşhis alıp orada durmayan herkeste NULL kalıyor → "yakın servis"
// köprüsü hem veride hem UX'te kopuk.
// ⛔ Zorunlu alan / ısrarcı istem YAPILMADI: teşhis için konum GEREKMİYOR, akışa
// sürtünme eklemek asıl KPI'yı (teşhis sayısı) riske atardı. Onun yerine kullanıcıya
// hiç dokunmayan sunucu tarafı tahmin — UTM'deki ilkeyle aynı çizgi (kaynak SUNUCUDAN
// okunur, client'tan alınmaz; çerez YOK · izin istemi YOK · ek istek YOK).
// Vercel her isteğe coğrafi başlık ekler; IP'nin kendisi OKUNMAZ ve SAKLANMAZ, yalnız
// şehir adı il listemizle eşleşirse yazılır (gizlilik metni: "yaklaşık konum (ilçe)" —
// il ondan daha kaba, taahhüdün altında kalır).
// Tek kaynak: `src/tr-iller.js` (81 il) — ikinci bir il listesi tutulmaz.
const norm = (s) =>
  String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").toLowerCase().trim();
const IL_INDEX = Object.fromEntries(Object.keys(TR_IL_ILCE).map((il) => [norm(il), il]));
function ilTahmin(req) {
  try {
    if (String(req.headers["x-vercel-ip-country"] || "").toUpperCase() !== "TR") return null;
    let sehir = String(req.headers["x-vercel-ip-city"] || "");
    try { sehir = decodeURIComponent(sehir); } catch { /* zaten çözülmüş */ }
    // Eşleşmezse (ör. başlık ilçe adı taşıyorsa) sessizce null — yanlış il yazmaktansa boş bırak.
    return IL_INDEX[norm(sehir)] || null;
  } catch { return null; }
}

// ——— İL/İLÇE YAZIMINI TEKİLLEŞTİR (14 Ağu, canlı veriden çıkan bulgu) ———
// `teshis_log`'da İstanbul İKİYE BÖLÜNMÜŞTÜ: 32 kayıt "istanbul", 2 kayıt "İstanbul".
// Sebep: servis dizini `sehir` alanını küçük harfli tutuyor (istanbul/izmir/ankara) ve
// konum akışı onu ham hâliyle yazıyordu. Gruplayan her rapor İstanbul'u iki ayrı il
// sanardı — konum verisini toplamanın amacı tam da bu gruplamaydı.
// Çözüm: yazmadan önce kanonik yazıma çevir (tek kaynak: src/tr-iller.js).
// Eşleşmezse gelen değer AYNEN korunur — tanımadığımız yeri silmek veri kaybı olurdu.
const ilceKanonik = (il, ilce) => {
  const liste = (il && TR_IL_ILCE[il]) || [];
  return liste.find((x) => norm(x) === norm(ilce)) || ilce;
};

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!originOk(req)) return res.status(403).json({ ok: false });
  const b = req.body || {};
  try {
    // Konum modu — id varsa o satırı güncelle.
    // ⚠️ Şart `il is null` DEĞİL `ilce is null`: IP ön-dolumu artık il'i insert anında
    // yazıyor, eski şart bıraksaydık kullanıcının GERÇEK konumu bir daha yazılamazdı.
    // IP yalnız il üretir (ilce NULL kalır) → gerçek konum ikisini birden yazıp kapıyı
    // kapatır; kesin veri tahmini her zaman ezer, tersi olmaz.
    if (b.id) {
      const ilHam = str(b.il, 64), ilceHam = str(b.ilce, 64);
      if (!ilHam && !ilceHam) return res.status(400).json({ ok: false });
      // Kanonik yazıma çevir: servis dizininden gelen "istanbul" ile IP'den gelen
      // "İstanbul" aynı satırda toplansın (yoksa rapor İstanbul'u ikiye böler).
      const il = ilHam ? IL_INDEX[norm(ilHam)] || ilHam : null;
      const ilce = ilceHam ? ilceKanonik(il, ilceHam) : null;
      // Yalnız DOLU alanlar yazılır — boş ilçeyle gelen çağrı IP'nin bulduğu ili silmesin.
      const yama = {};
      if (il) yama.il = il;
      if (ilce) yama.ilce = ilce;
      await supabase.from("teshis_log").update(yama).eq("id", b.id).is("ilce", null);
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
    const ilIp = ilTahmin(req); // konum köprüsü — kullanıcıya sorulmadan, IP saklanmadan
    const temel = { ...kayit, ...(ilIp ? { il: ilIp } : {}) };
    let { data, error } = await supabase.from("teshis_log").insert({ ...temel, ...utm }).select("id").single();
    if (error && kolonYok(error)) {
      // Kolonlar henüz yok → teşhis kaydı UTM'siz de olsa DÜŞMEZ (ölçüm ikincil, kayıt birincil).
      // (`il` kolonu şemada zaten var — bu dal yalnız UTM kolonlarını düşürür.)
      console.warn("[teshis/log] UTM kolonlari yok — kayit UTM'siz yazildi (supabase/teshis-log-utm.sql)");
      ({ data, error } = await supabase.from("teshis_log").insert(temel).select("id").single());
    }
    if (error) return res.status(200).json({ ok: false }); // best-effort
    // `il` client'a DÖNER: servis ekranındaki il seçicisi ön-seçili gelsin, kullanıcı
    // konum izni vermediğinde iki seçim yerine tek seçimle (yalnız ilçe) devam etsin.
    return res.status(200).json({ ok: true, id: data.id, il: ilIp });
  } catch {
    return res.status(200).json({ ok: false });
  }
}

export default withRateLimit(handler, { prefix: "teshislog", limits: [{ tokens: 40, window: "1 h" }] });
