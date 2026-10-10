// src/PazarVitrin.jsx — `/pazar` pazaryeri vitrini.
// 10 Eki 2026 (Tolga: "pazaryerine girince bu ekran olmayacaktı, hepsiburada.com benzeri bir sayfa
// tasarla" → taslak onayı: "güzel oldu devam et"). Taslak:
// benservis-icerik/pazar/2026-10-10-PAZAR-TASLAK-hepsiburada-tipi.html
//
// İki görünüm, tek bileşen:
//   • ANA   (/pazar, filtre yok): arama + sepet başlığı, kategori menüsü, kampanya alanı, güven
//           şeridi, cihaz yuvarlakları, ürün rafları, en altta parça talebi.
//   • LİSTE (?kategori= | ?cihaz= | ?parca= | ?ara=): sol filtre paneli + sıralama + ızgara.
// Liste, kategori bazında API'den gelir; cihaz/parça/fiyat/arama süzgeci istemcide (sayaçlar
// için). API sınırı 60 ürün — katalog 60'ı geçince süzgeç sunucuya taşınır.
//
// ⛔ Sayfa `noindex`, sitemap'te YOK (Tolga "aç" diyene kadar; "aç" ayrı PR).
// ⛔ Fiyat her zaman KDV dahil; etiketin yanında "kargo hariç" zorunlu (Tolga, 10 Eki).
// ⛔ Kargo vaadi tek cümle: "Tahmini 3 iş gününde kargoda" (Tolga: dropship, 3 iş günü).
// ⛔ Analitiğe kişisel veri / serbest metin yazılmaz: arama metni ölçülmez, yalnız slug'lar.
// ⛔ Satır içi stile `display` yazılmaz: duyarlı açılıp kapanma CSS'in işi (PR #175 dersi).
import React, { useEffect, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { PAZAR_KATEGORILERI, PAZAR_CIHAZLARI, PARCA_TURLERI, kategoriBul } from "./pazar-sozluk.js";
import { TR_IL_ILCE } from "./tr-iller.js";
import { sepetAdet, sepeteEkle } from "./sepet.js";
import KvkkNotu from "./KvkkNotu.jsx";
import BenservisLogo from "./BenservisLogo.jsx";
import CihazIkon from "./cihaz-ikonlari.jsx";
import { NAVY as INK, BLUE, GREEN_DEEP, HAIR, SLATE, TINT, RED } from "./theme.js";

const IL_LISTESI = Object.keys(TR_IL_ILCE);
const adBul = (liste, slug) => liste.find((x) => x.slug === slug)?.ad || null;
// Menü ve yuvarlaklarda kısa ad: "Kombi / Termosifon" → "Kombi".
const kisaAd = (ad) => ad.split(" / ")[0];
const tl = (n) => `${Math.round(Number(n)).toLocaleString("tr-TR")} TL`;
const kucult = (t) => String(t || "").toLocaleLowerCase("tr");

// URL ↔ filtre. Sözlükte olmayan değer yok sayılır; kategori yoksa Yedek Parça.
// `ana`: hiçbir süzgeç yoksa vitrin ana sayfası basılır.
export function filtreOku(search) {
  const q = new URLSearchParams(search);
  const kategoriVar = !!kategoriBul(q.get("kategori"));
  const kategori = kategoriBul(q.get("kategori"))?.slug || "yedek-parca";
  const cihaz = PAZAR_CIHAZLARI.some((c) => c.slug === q.get("cihaz")) ? q.get("cihaz") : "";
  const parca = kategori === "yedek-parca" && PARCA_TURLERI.some((p) => p.slug === q.get("parca")) ? q.get("parca") : "";
  const ara = (q.get("ara") || "").trim().slice(0, 80);
  const k = q.get("k");
  return {
    kategori, cihaz, parca, ara,
    ana: !kategoriVar && !cihaz && !parca && !ara,
    kaynak: k && /^[a-z0-9-]{1,80}$/.test(k) ? k : "",
  };
}

function filtreYaz(f) {
  const q = new URLSearchParams();
  if (!f.ana && !f.aramaTum) q.set("kategori", f.kategori);
  if (f.cihaz) q.set("cihaz", f.cihaz);
  if (f.parca) q.set("parca", f.parca);
  if (f.ara) q.set("ara", f.ara);
  if (f.kaynak) q.set("k", f.kaynak);
  const s = q.toString();
  return s ? `/pazar?${s}` : "/pazar";
}

const SIRALAR = [
  { slug: "onerilen", ad: "Önerilen" },
  { slug: "artan", ad: "En düşük fiyat" },
  { slug: "azalan", ad: "En yüksek fiyat" },
  { slug: "yeni", ad: "En yeni" },
];

export default function PazarVitrin() {
  const [f, setF] = useState(() => filtreOku(window.location.search));
  const [urunler, setUrunler] = useState(null);
  const [hata, setHata] = useState("");
  const [adet, setAdet] = useState(sepetAdet());
  const [aramaMetni, setAramaMetni] = useState(f.ara);

  // noindex — sayfa açılana kadar arama motoruna girmez (sunucuda X-Robots-Tag de var).
  useEffect(() => {
    document.title = "Pazaryeri · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, nofollow";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  useEffect(() => {
    const s = (e) => setAdet(e.detail);
    const geri = () => { const y = filtreOku(window.location.search); setF(y); setAramaMetni(y.ara); };
    window.addEventListener("bs-sepet-degisti", s);
    window.addEventListener("popstate", geri);
    return () => { window.removeEventListener("bs-sepet-degisti", s); window.removeEventListener("popstate", geri); };
  }, []);

  useEffect(() => {
    try { track("pazar_goruntule", { kategori: f.ana ? "ana" : f.kategori }); } catch { /* ölçüm akışı bozmaz */ }
  }, [f.ana, f.kategori]);

  // Ana sayfa ve arama: tüm kategoriler; liste: seçili kategori.
  const tumKategoriler = f.ana || (!!f.ara && !new URLSearchParams(window.location.search).has("kategori"));
  useEffect(() => {
    let iptal = false;
    setUrunler(null); setHata("");
    const q = new URLSearchParams();
    if (!tumKategoriler) q.set("kategori", f.kategori);
    fetch(`/api/pazar/liste?${q}`)
      .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
      .then(({ ok, d }) => { if (!iptal) ok ? setUrunler(d.urunler || []) : setHata(d.error || "Liste okunamadı."); })
      .catch(() => { if (!iptal) setHata("Bağlantı hatası."); });
    return () => { iptal = true; };
  }, [f.kategori, tumKategoriler]);

  const git = (yeni) => {
    const s = { ...f, ana: false, aramaTum: false, ...yeni };
    if (s.kategori !== "yedek-parca") s.parca = "";
    if (!s.cihaz && !s.parca && !s.ara && yeni.ana) s.ana = true;
    window.history.pushState(null, "", filtreYaz(s));
    setF(s);
    setAramaMetni(s.ara || "");
    window.scrollTo(0, 0);
  };

  const ara = (e) => {
    e.preventDefault();
    const t = aramaMetni.trim().slice(0, 80);
    if (!t) return;
    try { track("pazar_ara", {}); } catch { /* metin ölçülmez */ }
    // Başlıktaki arama tüm kategorilerde arar (URL'ye kategori yazılmaz).
    git({ ara: t, cihaz: "", parca: "", aramaTum: true });
  };

  return (
    <div className="pz">
      <style>{CSS}</style>
      <header className="pz-ust">
        <div className="pz-kap pz-bas">
          <a href="/" className="pz-logo" aria-label="Benservis ana sayfası">
            <BenservisLogo style={{ height: 36, width: "auto" }} showMotto={false} />
          </a>
          <a href="/pazar" className="pz-etiket" onClick={(e) => { e.preventDefault(); git({ ana: true, kategori: "yedek-parca", cihaz: "", parca: "", ara: "" }); }}>Pazaryeri</a>
          <form className="pz-ara" onSubmit={ara} role="search">
            <input
              type="search" value={aramaMetni} onChange={(e) => setAramaMetni(e.target.value)} maxLength={80}
              placeholder="Parça, cihaz ya da marka ara (ör. kombi NTC, buzdolabı contası)" aria-label="Pazaryerinde ara"
            />
            <button type="submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <span className="pz-yazi">Ara</span>
            </button>
          </form>
          <a href="/sepet" className="pz-sepet" aria-label={`Sepetim, ${adet} ürün`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" /><circle cx="10" cy="20.5" r="1.3" /><circle cx="17" cy="20.5" r="1.3" /></svg>
            <span className="pz-yazi">Sepetim</span>
            {adet > 0 && <span className="pz-rozet">{adet}</span>}
          </a>
        </div>
        <nav className="pz-katnav" aria-label="Kategoriler">
          <div className="pz-kap pz-katnav-ic">
            <a href="/pazar" className={f.ana ? "on" : ""} onClick={(e) => { e.preventDefault(); git({ ana: true, kategori: "yedek-parca", cihaz: "", parca: "", ara: "" }); }}>Tüm kategoriler</a>
            {PAZAR_KATEGORILERI.map((k) => (
              <a key={k.slug} href={`/pazar?kategori=${k.slug}`} className={!f.ana && !f.cihaz && !f.ara && f.kategori === k.slug ? "on" : ""}
                onClick={(e) => { e.preventDefault(); git({ kategori: k.slug, cihaz: "", parca: "", ara: "" }); }}>{k.ad}</a>
            ))}
            {PAZAR_CIHAZLARI.map((c) => (
              <a key={c.slug} href={`/pazar?kategori=yedek-parca&cihaz=${c.slug}`} className={f.cihaz === c.slug ? "on" : ""}
                onClick={(e) => { e.preventDefault(); git({ kategori: "yedek-parca", cihaz: c.slug, parca: "", ara: "" }); }}>{kisaAd(c.ad)}</a>
            ))}
          </div>
        </nav>
      </header>

      <main className="pz-kap">
        {hata && <div className="pz-hata">{hata}</div>}
        {f.ana
          ? <AnaGorunum urunler={urunler} git={git} filtre={f} />
          : <ListeGorunum urunler={urunler} f={f} git={git} />}
      </main>

      <footer className="pz-alt">
        <div className="pz-kap pz-alt-ic">
          <span><b>benservis</b> Pazaryeri · Bil, gör, çağır.</span>
          <span><a href="/">Ana sayfa</a> · <a href="/blog/">Bilgi Merkezi</a> · <a href="/servis-kayit?kaynak=pazar-alt">Servis Kaydı</a></span>
          <span className="pz-yasal">
            <a href="/on-bilgilendirme-formu/">Ön Bilgilendirme Formu</a> · <a href="/mesafeli-satis-sozlesmesi/">Mesafeli Satış Sözleşmesi</a> ·{" "}
            <a href="/iade-ve-cayma/">İade, Cayma ve Teslimat</a> · <a href="/pazaryeri-aydinlatma-metni/">Aydınlatma Metni</a> · <a href="/gizlilik/">Gizlilik</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function AnaGorunum({ urunler, git, filtre }) {
  // Raflar: öne çıkanlar + en çok ürünü olan üç cihaz. Ürün yoksa raf basılmaz.
  // Görselli ürün rafta önce gelir; "öne çıkanlar" cihazlar arasında sırayla seçilir
  // (toplu eklenen katalogda created_at aynı, "yeni" sırası anlamsız kalıyor).
  const raflar = useMemo(() => {
    if (!urunler?.length) return [];
    const sirali = [...urunler].sort((a, b) => (b.gorsel_url ? 1 : 0) - (a.gorsel_url ? 1 : 0));
    const grup = {};
    for (const u of sirali) if (u.cihaz_turu) (grup[u.cihaz_turu] ||= []).push(u);
    const enCok = Object.keys(grup).sort((a, b) => grup[b].length - grup[a].length);
    const one = [];
    for (let i = 0; one.length < 10 && i < 10; i++) for (const s of enCok) if (grup[s][i] && one.length < 10) one.push(grup[s][i]);
    return [
      { baslik: "Öne çıkanlar", liste: one, git: { kategori: "yedek-parca", cihaz: "", parca: "" } },
      ...enCok.slice(0, 3).map((s) => ({
        baslik: `${adBul(PAZAR_CIHAZLARI, s)} parçaları`,
        liste: grup[s].slice(0, 10),
        git: { kategori: "yedek-parca", cihaz: s, parca: "" },
      })),
    ];
  }, [urunler]);

  return (
    <>
      <section className="pz-hero">
        <div className="pz-banner">
          <span className="pz-banner-et">Kış hazırlığı</span>
          <h1>Kombinin yedek parçası kapında</h1>
          <p>NTC sensör, emniyet ventili, genleşme tankı. Parçayı al, takmayı yakındaki servise bırak.</p>
          <button type="button" onClick={() => git({ kategori: "yedek-parca", cihaz: "kombi-termosifon", parca: "", ara: "" })}>Kombi parçalarına bak →</button>
          <span className="pz-banner-ikon" aria-hidden="true"><CihazIkon cihaz="Kombi / Termosifon" size={260} /></span>
        </div>
        <div className="pz-yan">
          <a href="/" className="pz-mini pz-mini-1">
            <b>Takmayı servise bırak</b>
            <span>Parçanı al, yakındaki servisi Benservis'ten tek dokunuşla bul.</span>
            <u>Yakın servisler</u>
          </a>
          <a href="#parca-talebi" className="pz-mini pz-mini-2">
            <b>Parçanı bulamadın mı?</b>
            <span>Cihazını ve parçayı yaz, bulduğumuzda seni arayalım.</span>
            <u>Parça talebi bırak</u>
          </a>
        </div>
      </section>

      <section className="pz-guven" aria-label="Alışveriş bilgileri">
        <div><GuvenIkon tur="kargo" /><span><b>Tahmini 3 iş günü</b>Siparişin 3 iş gününde kargoda</span></div>
        <div><GuvenIkon tur="fiyat" /><span><b>KDV dahil fiyat</b>Kargo ücreti ayrıca bildirilir</span></div>
        <div><GuvenIkon tur="satici" /><span><b>Satıcı Benservis</b>Parça tedarikçiden doğrudan gönderilir</span></div>
        <div><GuvenIkon tur="konum" /><span><b>Taktır</b>Yakındaki servise Benservis'ten ulaş</span></div>
      </section>

      <section className="pz-bolum">
        <div className="pz-bolum-bas"><h2>Cihazına göre alışveriş</h2></div>
        <div className="pz-yuvarlak">
          {PAZAR_CIHAZLARI.map((c) => (
            <a key={c.slug} href={`/pazar?kategori=yedek-parca&cihaz=${c.slug}`} className="pz-yuv"
              onClick={(e) => { e.preventDefault(); git({ kategori: "yedek-parca", cihaz: c.slug, parca: "", ara: "" }); }}>
              <span className="pz-yuv-d"><img src={`/anasayfa/cihaz/${c.slug}.webp`} alt="" loading="lazy" /></span>
              {kisaAd(c.ad)}
            </a>
          ))}
        </div>
      </section>

      {urunler === null && <div className="pz-yukleniyor">Ürünler yükleniyor…</div>}
      {raflar.map((r) => (
        <section className="pz-bolum" key={r.baslik}>
          <div className="pz-bolum-bas">
            <h2>{r.baslik}</h2>
            <a href={filtreYaz({ ...r.git, ara: "" })} onClick={(e) => { e.preventDefault(); git({ ...r.git, ara: "" }); }}>Tümünü gör →</a>
          </div>
          <div className="pz-serit">{r.liste.map((u) => <UrunKarti key={u.id} urun={u} />)}</div>
        </section>
      ))}

      <section className="pz-bolum" id="parca-talebi">
        <div className="pz-bolum-bas"><h2>Aradığın parçayı bulamadın mı?</h2></div>
        <TalepFormu filtre={filtre} />
      </section>
    </>
  );
}

function ListeGorunum({ urunler, f, git }) {
  const [sira, setSira] = useState("onerilen");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [panel, setPanel] = useState(false);

  // Süzgeç sırası: arama → cihaz → parça → fiyat. Sayaçlar bir önceki kademeden sayılır.
  const aranan = useMemo(() => {
    if (!urunler) return null;
    if (!f.ara) return urunler;
    const kelimeler = kucult(f.ara).split(/\s+/).filter(Boolean);
    return urunler.filter((u) => {
      const metin = kucult([u.baslik, adBul(PAZAR_CIHAZLARI, u.cihaz_turu), adBul(PARCA_TURLERI, u.parca_turu)].join(" "));
      return kelimeler.every((k) => metin.includes(k));
    });
  }, [urunler, f.ara]);
  const cihazli = useMemo(() => aranan && (f.cihaz ? aranan.filter((u) => u.cihaz_turu === f.cihaz) : aranan), [aranan, f.cihaz]);
  const sonuc = useMemo(() => {
    if (!cihazli) return null;
    let l = f.parca ? cihazli.filter((u) => u.parca_turu === f.parca) : cihazli;
    const a = Number(min) || 0, b = Number(max) || Infinity;
    l = l.filter((u) => Number(u.fiyat) >= a && Number(u.fiyat) <= b);
    if (sira === "onerilen") l = [...l].sort((x, y) => (y.gorsel_url ? 1 : 0) - (x.gorsel_url ? 1 : 0));
    if (sira === "artan") l = [...l].sort((x, y) => x.fiyat - y.fiyat);
    if (sira === "azalan") l = [...l].sort((x, y) => y.fiyat - x.fiyat);
    if (sira === "yeni") l = [...l].sort((x, y) => String(y.created_at).localeCompare(String(x.created_at)));
    return l;
  }, [cihazli, f.parca, min, max, sira]);

  const sayac = (liste, alan) => {
    const s = {};
    for (const u of liste || []) if (u[alan]) s[u[alan]] = (s[u[alan]] || 0) + 1;
    return s;
  };
  const cihazSay = sayac(aranan, "cihaz_turu");
  const parcaSay = sayac(cihazli, "parca_turu");
  const kat = adBul(PAZAR_KATEGORILERI, f.kategori);
  const cihazAd = adBul(PAZAR_CIHAZLARI, f.cihaz);
  const baslik = f.ara ? `"${f.ara}" için sonuçlar` : [cihazAd, kat].filter(Boolean).join(" · ");

  return (
    <>
      <div className="pz-yol">
        <a href="/pazar" onClick={(e) => { e.preventDefault(); git({ ana: true, kategori: "yedek-parca", cihaz: "", parca: "", ara: "" }); }}>Pazaryeri</a>
        {" › "}{kat}{cihazAd && <> › <b>{cihazAd}</b></>}
      </div>
      <div className="pz-liste">
        <aside className={`pz-panel${panel ? " acik" : ""}`} aria-label="Filtreler">
          <div className="pz-fgrup">
            <h4>Kategori</h4>
            {PAZAR_KATEGORILERI.map((k) => (
              <label key={k.slug}><input type="radio" name="pz-kat" checked={f.kategori === k.slug} onChange={() => git({ kategori: k.slug, parca: "" })} /> {k.ad}</label>
            ))}
          </div>
          <div className="pz-fgrup">
            <h4>Cihaz</h4>
            <label><input type="radio" name="pz-cihaz" checked={!f.cihaz} onChange={() => git({ cihaz: "", parca: "" })} /> Tümü</label>
            {PAZAR_CIHAZLARI.filter((c) => cihazSay[c.slug] || c.slug === f.cihaz).map((c) => (
              <label key={c.slug}><input type="radio" name="pz-cihaz" checked={f.cihaz === c.slug} onChange={() => git({ cihaz: c.slug, parca: "" })} /> {kisaAd(c.ad)}<span>{cihazSay[c.slug] || 0}</span></label>
            ))}
          </div>
          {f.kategori === "yedek-parca" && Object.keys(parcaSay).length > 0 && (
            <div className="pz-fgrup">
              <h4>Parça türü</h4>
              <label><input type="radio" name="pz-parca" checked={!f.parca} onChange={() => git({ parca: "" })} /> Tümü</label>
              {PARCA_TURLERI.filter((p) => parcaSay[p.slug] || p.slug === f.parca).map((p) => (
                <label key={p.slug}><input type="radio" name="pz-parca" checked={f.parca === p.slug} onChange={() => git({ parca: p.slug })} /> {p.ad}<span>{parcaSay[p.slug] || 0}</span></label>
              ))}
            </div>
          )}
          <div className="pz-fgrup">
            <h4>Fiyat aralığı <small>KDV dahil</small></h4>
            <div className="pz-fiyatara">
              <input inputMode="numeric" placeholder="En az" value={min} onChange={(e) => setMin(e.target.value.replace(/\D/g, ""))} aria-label="En az fiyat" />
              <input inputMode="numeric" placeholder="En çok" value={max} onChange={(e) => setMax(e.target.value.replace(/\D/g, ""))} aria-label="En çok fiyat" />
            </div>
          </div>
          <button type="button" className="pz-panel-kapat" onClick={() => setPanel(false)}>Sonuçları göster{sonuc ? ` (${sonuc.length})` : ""}</button>
        </aside>

        <div>
          <div className="pz-sonuc-bas">
            <h1>{baslik} {sonuc && <small>({sonuc.length} ürün)</small>}</h1>
            <button type="button" className="pz-filtre-ac" onClick={() => setPanel(true)}>Filtrele</button>
            <select className="pz-sirala" value={sira} onChange={(e) => setSira(e.target.value)} aria-label="Sırala">
              {SIRALAR.map((s) => <option key={s.slug} value={s.slug}>{s.ad}</option>)}
            </select>
          </div>
          {(f.cihaz || f.parca || f.ara) && (
            <div className="pz-secili">
              {f.ara && <button type="button" onClick={() => git({ ara: "" })}>Arama: {f.ara} ×</button>}
              {f.cihaz && <button type="button" onClick={() => git({ cihaz: "", parca: "" })}>{kisaAd(cihazAd)} ×</button>}
              {f.parca && <button type="button" onClick={() => git({ parca: "" })}>{adBul(PARCA_TURLERI, f.parca)} ×</button>}
            </div>
          )}
          {sonuc === null && <div className="pz-yukleniyor">Yükleniyor…</div>}
          {sonuc && (
            <div className="pz-izgara">
              {sonuc.map((u) => <UrunKarti key={u.id} urun={u} />)}
              {f.kategori === "yedek-parca"
                ? <div className="pz-talep-kutu"><TalepFormu filtre={f} /></div>
                : sonuc.length === 0 && (
                  <div className="pz-bos">
                    Bu kategoride şu an ürün yok.{" "}
                    <button type="button" onClick={() => git({ kategori: "yedek-parca", cihaz: "", parca: "" })}>Yedek parçalara bak →</button>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function GuvenIkon({ tur }) {
  const yol = {
    kargo: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
    fiyat: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
    satici: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
    konum: <><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
  }[tur];
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{yol}</svg>;
}

function UrunKarti({ urun }) {
  const [eklendi, setEklendi] = useState(false);
  const benservis = urun.satici?.tur === "benservis";
  const parcaAd = adBul(PARCA_TURLERI, urun.parca_turu);
  const cihazAd = adBul(PAZAR_CIHAZLARI, urun.cihaz_turu);
  const durum = urun.parca_durum === "cikma" ? "Çıkma" : null;
  const ekle = (e) => {
    e.preventDefault();
    sepeteEkle({ ...urun, servis_ad: urun.satici?.ad || null, kargo_haric: true });
    try { track("pazar_sepete_ekle", { kategori: urun.kategori || "", cihaz: urun.cihaz_turu || "" }); } catch { /* ölçüm akışı bozmaz */ }
    setEklendi(true);
  };
  return (
    <a href={`/urun/${urun.id}`} className="pz-kart">
      <div className="pz-gorsel">
        {urun.gorsel_url
          ? <img src={urun.gorsel_url} alt={urun.baslik} loading="lazy" referrerPolicy="no-referrer" />
          : <span className="pz-gorsel-yer" aria-hidden="true"><CihazIkon cihaz={cihazAd || "Diğer"} size={64} /></span>}
        {durum && <span className="pz-etk">{durum}</span>}
      </div>
      <div className="pz-kart-ic">
        <div className="pz-satici">Satıcı: <b>{benservis ? "Benservis" : urun.satici?.ad || "—"}</b></div>
        <div className="pz-ad">{urun.baslik}</div>
        {(cihazAd || parcaAd) && <div className="pz-uyum">{[cihazAd && kisaAd(cihazAd), parcaAd].filter(Boolean).join(" · ")}</div>}
        <div className="pz-fiyat"><b>{tl(urun.fiyat)}</b><span>KDV dahil · kargo hariç</span></div>
        <div className="pz-kargo">Tahmini 3 iş gününde kargoda</div>
        <button type="button" className={`pz-ekle${eklendi ? " tamam" : ""}`} onClick={ekle}>{eklendi ? "Sepette ✓" : "Sepete ekle"}</button>
      </div>
    </a>
  );
}

// Stil — taslakla aynı dil; marka renkleri theme.js ile birebir. Duyarlı kırılımlar: 1000 ve 640 px.
// (JS şablon dizesi: bu blokta yoruma ters tırnak YAZILMAZ, dizeyi kapatır.)
const CSS = `
.pz{min-height:100vh;background:#F5F7FA;color:${INK};font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px}
.pz a{color:inherit;text-decoration:none}
.pz button{font-family:inherit;cursor:pointer}
.pz-kap{max-width:1240px;margin:0 auto;padding:0 16px}
.pz-ust{background:#fff;border-bottom:1px solid ${HAIR};position:sticky;top:0;z-index:50}
.pz-bas{display:flex;align-items:center;gap:16px;padding-top:12px;padding-bottom:12px}
.pz-logo{display:flex;flex:none}
.pz-etiket{font-weight:800;font-size:13px;color:${BLUE}!important;background:#EFF6FF;border-radius:8px;padding:5px 9px;white-space:nowrap}
.pz-ara{flex:1;display:flex;border:2px solid ${BLUE};border-radius:10px;overflow:hidden;background:#fff;min-width:0}
.pz-ara input{flex:1;min-width:0;border:0;outline:0;padding:11px 14px;font-size:14.5px;font-family:inherit;color:${INK}}
.pz-ara button{border:0;background:${BLUE};color:#fff;padding:0 20px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:6px}
.pz-sepet{position:relative;display:flex;align-items:center;gap:8px;background:${INK};color:#fff!important;border-radius:10px;padding:10px 14px;font-weight:700;white-space:nowrap}
.pz-rozet{position:absolute;top:-7px;right:-7px;background:#EA580C;color:#fff;font-size:11px;font-weight:800;border-radius:999px;min-width:20px;height:20px;display:grid;place-items:center;border:2px solid #fff;padding:0 4px}
.pz-katnav{border-top:1px solid ${HAIR}}
.pz-katnav-ic{display:flex;gap:2px;overflow-x:auto;scrollbar-width:none}
.pz-katnav-ic::-webkit-scrollbar{display:none}
.pz-katnav-ic a{padding:11px 12px;font-weight:600;font-size:13.5px;white-space:nowrap;border-bottom:3px solid transparent}
.pz-katnav-ic a:hover,.pz-katnav-ic a.on{border-bottom-color:${BLUE};color:${BLUE}}
.pz-hata{color:${RED};font-weight:600;margin:16px 0}
.pz-yukleniyor{color:${SLATE};margin:18px 0}

.pz-hero{display:grid;grid-template-columns:2fr 1fr;gap:14px;margin:18px 0}
.pz-banner{position:relative;overflow:hidden;border-radius:16px;padding:30px 32px;color:#fff;min-height:240px;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(120deg,#1E3A8A 0%,${BLUE} 60%,#3B82F6 100%)}
.pz-banner-et{display:inline-block;width:max-content;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);padding:4px 11px;border-radius:999px;font-size:12px;font-weight:700;margin-bottom:12px}
.pz-banner h1{font-family:'Fraunces',serif;font-size:30px;line-height:1.15;max-width:440px;margin:0}
.pz-banner p{margin:10px 0 0;opacity:.92;max-width:420px;line-height:1.5}
.pz-banner button{margin-top:18px;width:max-content;background:#fff;color:#1D4ED8;font-weight:800;border:0;border-radius:10px;padding:11px 18px;font-size:14px;position:relative;z-index:1}
.pz-banner-ikon{position:absolute;right:-20px;bottom:-40px;opacity:.16;color:#fff;pointer-events:none}
.pz-yan{display:grid;grid-template-rows:1fr 1fr;gap:14px}
.pz-mini{border-radius:16px;padding:18px 20px;display:flex;flex-direction:column;justify-content:center;gap:5px}
.pz-mini b{font-size:16.5px}
.pz-mini span{font-size:12.5px;line-height:1.45}
.pz-mini u{font-weight:700;font-size:12.5px;margin-top:4px}
.pz-mini-1{background:#ECFDF5;color:#065F46!important;border:1px solid #A7F3D0}
.pz-mini-2{background:#FFF7ED;color:#9A3412!important;border:1px solid #FED7AA}

.pz-guven{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
.pz-guven div{background:#fff;border:1px solid ${HAIR};border-radius:12px;padding:12px 14px;display:flex;gap:10px;align-items:center;font-size:12.5px;color:${SLATE}}
.pz-guven b{display:block;color:${INK};font-size:13.5px}
.pz-guven svg{flex:none;color:${BLUE}}

.pz-bolum{background:#fff;border:1px solid ${HAIR};border-radius:16px;padding:18px 20px;margin-bottom:18px}
.pz-bolum-bas{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:14px}
.pz-bolum-bas h2{font-size:19px;margin:0}
.pz-bolum-bas a{color:${BLUE};font-weight:700;font-size:13px;white-space:nowrap}
.pz-yuvarlak{display:flex;gap:16px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.pz-yuvarlak::-webkit-scrollbar{display:none}
.pz-yuv{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:84px;font-size:12.5px;font-weight:600;text-align:center}
.pz-yuv-d{width:74px;height:74px;border-radius:50%;overflow:hidden;border:2px solid #BFDBFE;background:#EFF6FF}
.pz-yuv-d img{width:100%;height:100%;object-fit:cover}
.pz-yuv:hover .pz-yuv-d{border-color:${BLUE}}

.pz-serit{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 4*14px)/5);gap:14px;overflow-x:auto;scrollbar-width:none;scroll-snap-type:x mandatory}
.pz-serit::-webkit-scrollbar{display:none}
.pz-serit .pz-kart{scroll-snap-align:start}
.pz-izgara{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.pz-kart{background:#fff;border:1px solid ${HAIR};border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .15s,border-color .15s;min-width:0}
.pz-kart:hover{box-shadow:0 10px 30px -14px rgba(15,23,42,.35);border-color:#CBD5E1}
.pz-gorsel{position:relative;aspect-ratio:1/1;background:#fff;display:grid;place-items:center;border-bottom:1px solid #F1F5F9}
.pz-gorsel img{width:100%;height:100%;object-fit:contain;padding:10px;box-sizing:border-box}
.pz-gorsel-yer{width:100%;height:100%;display:grid;place-items:center;color:#94A3B8;background:linear-gradient(160deg,#F8FAFC,#EEF2F7)}
.pz-etk{position:absolute;top:8px;left:8px;font-size:10.5px;font-weight:800;padding:3px 7px;border-radius:6px;background:${TINT};color:${SLATE}}
.pz-kart-ic{padding:11px 12px 12px;display:flex;flex-direction:column;gap:6px;flex:1}
.pz-satici{font-size:11.5px;color:${SLATE}}
.pz-satici b{color:${BLUE}}
.pz-ad{font-size:13.5px;line-height:1.35;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:36px}
.pz-uyum{font-size:11.5px;color:${SLATE}}
.pz-fiyat{margin-top:auto;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}
.pz-fiyat b{font-size:18px}
.pz-fiyat span{font-size:11px;color:${SLATE}}
.pz-kargo{font-size:11.5px;color:${GREEN_DEEP};font-weight:600}
.pz-ekle{margin-top:4px;border:1.5px solid ${BLUE};background:#fff;color:${BLUE};border-radius:9px;padding:8px;font-weight:700;font-size:13px}
.pz-ekle:hover,.pz-ekle.tamam{background:${BLUE};color:#fff}

.pz-yol{font-size:12.5px;color:${SLATE};margin:16px 0 10px}
.pz-yol b{color:${INK}}
.pz-liste{display:grid;grid-template-columns:250px 1fr;gap:18px;align-items:start;margin-bottom:30px}
.pz-panel{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:4px 16px;position:sticky;top:120px;max-height:calc(100vh - 140px);overflow-y:auto}
.pz-fgrup{padding:13px 0;border-bottom:1px solid ${HAIR}}
.pz-fgrup:last-of-type{border-bottom:0}
.pz-fgrup h4{font-size:13.5px;margin:0 0 8px}
.pz-fgrup h4 small{font-weight:500;color:${SLATE};font-size:11px;margin-left:4px}
.pz-fgrup label{display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;color:#334155;cursor:pointer}
.pz-fgrup label span{margin-left:auto;color:#94A3B8;font-size:12px}
.pz-fgrup input[type=radio]{accent-color:${BLUE}}
.pz-fiyatara{display:flex;gap:6px}
.pz-fiyatara input{width:100%;min-width:0;border:1px solid ${HAIR};border-radius:8px;padding:8px;font-size:13px;font-family:inherit}
.pz-panel-kapat{display:none}
.pz-sonuc-bas{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:12px 16px;margin-bottom:12px}
.pz-sonuc-bas h1{font-size:17px;margin:0;flex:1;min-width:180px}
.pz-sonuc-bas h1 small{font-weight:500;color:${SLATE};font-size:13px}
.pz-filtre-ac{display:none}
.pz-sirala{border:1px solid ${HAIR};border-radius:9px;padding:8px 10px;font-size:13px;background:#fff;font-family:inherit;color:${INK}}
.pz-secili{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.pz-secili button{background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;border-radius:999px;padding:4px 10px;font-size:12px;font-weight:600}
.pz-talep-kutu{grid-column:1/-1}
.pz-talep-kutu form{max-width:none}
.pz-bos{grid-column:1/-1;background:#fff;border:1px solid ${HAIR};border-radius:12px;padding:30px 18px;text-align:center;color:${SLATE}}
.pz-bos button{border:0;background:none;color:${BLUE};font-weight:700;font-size:14px}
.pz-alt{background:${INK};color:#CBD5E1;margin-top:20px;padding:24px 0;font-size:12.5px}
.pz-alt-ic{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.pz-alt b{color:#fff}
.pz-yasal{flex-basis:100%;font-size:12px}
.pz-alt a{color:#CBD5E1!important;text-decoration:underline!important}

@media (max-width:1000px){
  .pz-serit{grid-auto-columns:calc((100% - 2*14px)/3)}
  .pz-izgara{grid-template-columns:repeat(3,1fr)}
  .pz-liste{grid-template-columns:1fr}
  .pz-panel{display:none;position:fixed;inset:0;top:0;z-index:80;border-radius:0;max-height:none;padding:8px 18px 90px}
  .pz-panel.acik{display:block}
  .pz-panel-kapat{display:block;position:fixed;left:16px;right:16px;bottom:16px;border:0;background:${BLUE};color:#fff;border-radius:10px;padding:13px;font-weight:700;font-size:15px}
  .pz-filtre-ac{display:block;border:1px solid ${HAIR};background:#fff;border-radius:9px;padding:8px 14px;font-weight:700;font-size:13px}
  .pz-guven{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:640px){
  .pz-bas{flex-wrap:wrap;gap:10px;padding-top:10px;padding-bottom:10px}
  .pz-logo svg{height:30px!important}
  .pz-sepet{margin-left:auto;padding:9px 12px}
  .pz-yazi{display:none}
  .pz-ara{order:3;flex-basis:100%}
  .pz-ara input{padding:10px 12px;font-size:16px}
  .pz-ara button{padding:0 14px}
  .pz-hero{grid-template-columns:1fr;margin:14px 0}
  .pz-banner{min-height:200px;padding:22px}
  .pz-banner h1{font-size:23px}
  .pz-yan{grid-template-columns:1fr 1fr;grid-template-rows:auto}
  .pz-mini{padding:14px}
  .pz-mini b{font-size:14px}
  .pz-serit{grid-auto-columns:44%}
  .pz-izgara{grid-template-columns:repeat(2,1fr);gap:10px}
  .pz-bolum{padding:14px 12px;border-radius:12px}
  .pz-guven{gap:8px}
  .pz-guven div{padding:10px;font-size:11.5px}
  .pz-fiyat b{font-size:16px}
  .pz-ekle{padding:7px;font-size:12.5px}
  .pz-sonuc-bas h1{font-size:15px}
}
`;

function TalepFormu({ filtre }) {
  const [form, setForm] = useState({ parca_turu: filtre.parca, cihaz_turu: filtre.cihaz, marka_model: "", il: "", telefon: "" });
  const [durum, setDurum] = useState(""); // "" | gonderiyor | tamam
  const [hata, setHata] = useState("");
  useEffect(() => { setForm((x) => ({ ...x, parca_turu: filtre.parca || x.parca_turu, cihaz_turu: filtre.cihaz || x.cihaz_turu })); }, [filtre.parca, filtre.cihaz]);

  const aciklama = useMemo(() => {
    const p = adBul(PARCA_TURLERI, filtre.parca), c = adBul(PAZAR_CIHAZLARI, filtre.cihaz);
    return [c, p].filter(Boolean).join(" · ");
  }, [filtre.parca, filtre.cihaz]);

  const gonder = async (e) => {
    e.preventDefault();
    setHata("");
    setDurum("gonderiyor");
    try {
      const r = await fetch("/api/pazar/talep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, kaynak: filtre.kaynak || "pazar" }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "Talep gönderilemedi.");
      try { track("parca_talep_gonder", { cihaz: form.cihaz_turu, parca: form.parca_turu }); } catch { /* ölçüm akışı bozmaz */ }
      setDurum("tamam");
    } catch (err) { setHata(err.message); setDurum(""); }
  };

  const inp = { width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${HAIR}`, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box", background: "#fff", color: INK };
  const lbl = { display: "block", fontSize: 12.5, fontWeight: 700, margin: "10px 0 5px" };

  if (durum === "tamam") {
    return (
      <div style={{ background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, padding: "30px 18px", textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>✅</div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Talebiniz alındı</div>
        <div style={{ fontSize: 13.5, color: SLATE }}>Parça bulunduğunda sizi arayacağız.</div>
      </div>
    );
  }

  return (
    <form onSubmit={gonder} style={{ background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, padding: "18px 18px 14px", maxWidth: 520 }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>Aradığınız parça yok mu? Talep bırakın</div>
      <div style={{ fontSize: 13, color: SLATE, margin: "4px 0 4px" }}>
        {aciklama ? `${aciklama} için` : "Aradığınız parça için"} talep bırakın; bulunduğunda sizi arayalım.
      </div>
      <label style={lbl} htmlFor="pt-cihaz">Cihaz *</label>
      <select id="pt-cihaz" required value={form.cihaz_turu} onChange={(e) => setForm({ ...form, cihaz_turu: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {PAZAR_CIHAZLARI.map((c) => <option key={c.slug} value={c.slug}>{c.ad}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-parca">Parça türü *</label>
      <select id="pt-parca" required value={form.parca_turu} onChange={(e) => setForm({ ...form, parca_turu: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {PARCA_TURLERI.map((p) => <option key={p.slug} value={p.slug}>{p.ad}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-model">Marka / model <span style={{ fontWeight: 400, color: "#94A3B8" }}>(biliyorsanız)</span></label>
      <input id="pt-model" maxLength={120} value={form.marka_model} onChange={(e) => setForm({ ...form, marka_model: e.target.value })} style={inp} />
      <label style={lbl} htmlFor="pt-il">İl *</label>
      <select id="pt-il" required value={form.il} onChange={(e) => setForm({ ...form, il: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {IL_LISTESI.map((il) => <option key={il} value={il}>{il}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-tel">Telefon *</label>
      <input id="pt-tel" type="tel" required inputMode="tel" placeholder="0555 123 45 67" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} style={inp} />
      {hata && <div style={{ color: RED, fontSize: 13, fontWeight: 600, marginTop: 10 }}>{hata}</div>}
      <button type="submit" disabled={durum === "gonderiyor"}
        style={{ width: "100%", marginTop: 14, padding: 13, borderRadius: 8, border: "none", background: BLUE, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", opacity: durum === "gonderiyor" ? 0.7 : 1 }}>
        {durum === "gonderiyor" ? "Gönderiliyor…" : "Talep bırak"}
      </button>
      <KvkkNotu amac="parça talebinize dönüş yapmak" />
    </form>
  );
}
