// src/IkinciElDetay.jsx — `/ikinci-el/BS-2E-000123` ikinci el ürün sayfası (YK #171 İE-3, 11 Eki 2026).
// Tolga (11 Eki 10:2x): "ürünün detayı, ürünün açılmış hali değişen kısmı varsa gösterilecek biçimde".
// Tarif: benservis-icerik/pazar/IKINCI-EL-HEDEF-GORUNUM.md bölüm 2, 3, 7, 8 (DOD ürün detayı).
//
// Sıra: kırıntı → galeri (Dış | Açılmış hal) + fiyat kutusu (garanti, teslim seçimi, sepete
// ekle) → satıcı kartı → bilgi tablosu → "Benservis kontrolü" (cihaz şeması + kontrol listesi +
// değişen parçalar) → açıklama → benzer ürünler.
//
// ⛔ DPP ön yüzde HİÇ geçmez (Tolga 11:4x): ad, bağlantı, QR, sayfa yolu yok. Değişen parça
//    listesi arkada cihazın tamir kayıtlarından gelir; seri no yalnız maskeli (`****1234`).
// ⛔ Teslim: depo ücretsiz; nakliye ve montaj "ayrıca hesaplanır" — tutar yazılmaz, ödemeye
//    girmez (Tolga 11:4x). Sepete teslim seçimi kalemle gider; sunucu ilanın seçeneklerine bakar.
// ⛔ Boş alan yazılmaz; fotoğraf yoksa ikon (genel cihaz fotoğrafı ürünün yerine konmaz).
// ⛔ Satır içi stile `display` yazılmaz (PR #175 dersi).
import React, { useEffect, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { sepetOku, sepeteEkle } from "./sepet.js";
import CihazIkon from "./cihaz-ikonlari.jsx";
import { ilanTeslimSecenekleri } from "./ikinci-el-teslim.js";
import { SATICI } from "../scripts/pazar-hukuk.mjs";
import {
  Kabuk, IlanKarti, useIlanlar, useNoindex, garantiEtiketi, kullanimMetni, cihazAdi, tl,
} from "./IkinciElVitrin.jsx";
import { NAVY as INK, BLUE, GREEN_DEEP, HAIR, SLATE, TINT } from "./theme.js";

const TURUNCU = "#EA580C";
const kucult = (t) => String(t || "").toLocaleLowerCase("tr");
const tarih = (t) => (t ? new Date(t).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "");

// ── Cihaz şeması (DOD ekspertiz şemasının beyaz eşya karşılığı) ──────────────────────────
// Her bölge, değişen parça adında geçen anahtar kelimelerle eşleşir; eşleşen bölge "D" ile
// işaretlenir. Şemada olmayan parça yine listede görünür (şema yalnız özet).
export const SEMALAR = {
  buzdolabi: {
    viewBox: "0 0 160 220",
    govde: <rect x="30" y="10" width="100" height="200" rx="8" />,
    bolgeler: [
      { slug: "kapilar",   ad: "Kapılar ve contalar",   anahtar: ["kapı", "kapak", "conta", "menteşe"], sekil: <><rect x="36" y="16" width="88" height="78" rx="4" /><rect x="36" y="100" width="88" height="104" rx="4" /></>, etiket: [80, 58] },
      { slug: "sogutma",   ad: "Kompresör ve gaz",      anahtar: ["kompresör", "gaz", "kondenser"], sekil: <rect x="96" y="176" width="26" height="22" rx="3" />, etiket: [109, 191] },
      { slug: "fan",       ad: "Fan ve termostat",      anahtar: ["fan", "termostat", "sensör", "ntc"], sekil: <circle cx="60" cy="140" r="14" />, etiket: [60, 144] },
      { slug: "kart",      ad: "Elektronik kart",       anahtar: ["kart", "röle"], sekil: <rect x="44" y="24" width="30" height="14" rx="2" />, etiket: [59, 35] },
    ],
  },
  "televizyon-monitor": {
    viewBox: "0 0 220 160",
    govde: <><rect x="10" y="10" width="200" height="118" rx="6" /><path d="M95 128h30l8 22H87z" /></>,
    bolgeler: [
      { slug: "panel",     ad: "Panel (ekran)",         anahtar: ["panel", "ekran", "lcd", "oled"], sekil: <rect x="18" y="18" width="184" height="102" rx="3" />, etiket: [110, 52] },
      { slug: "aydinlatma",ad: "Arka aydınlatma",       anahtar: ["led", "aydınlatma", "backlight"], sekil: <rect x="30" y="66" width="160" height="10" rx="2" />, etiket: [110, 75] },
      { slug: "anakart",   ad: "Ana kart",              anahtar: ["ana kart", "anakart", "t-con", "tcon"], sekil: <rect x="40" y="90" width="50" height="22" rx="2" />, etiket: [65, 105] },
      { slug: "besleme",   ad: "Besleme kartı",         anahtar: ["besleme", "power", "güç"], sekil: <rect x="130" y="90" width="50" height="22" rx="2" />, etiket: [155, 105] },
    ],
  },
  "camasir-makinesi": {
    viewBox: "0 0 160 190",
    govde: <rect x="20" y="10" width="120" height="170" rx="8" />,
    bolgeler: [
      { slug: "kapak",     ad: "Kapak ve körük",        anahtar: ["kapak", "körük", "conta", "kilit"], sekil: <circle cx="80" cy="100" r="38" />, etiket: [80, 70] },
      { slug: "kazan",     ad: "Kazan, rulman, amortisör", anahtar: ["rulman", "kazan", "amortisör", "keçe"], sekil: <circle cx="80" cy="100" r="22" />, etiket: [80, 104] },
      { slug: "pompa",     ad: "Pompa",                 anahtar: ["pompa", "filtre", "hortum"], sekil: <rect x="104" y="150" width="26" height="18" rx="3" />, etiket: [117, 163] },
      { slug: "motor",     ad: "Motor",                 anahtar: ["motor", "kömür", "kayış"], sekil: <rect x="30" y="150" width="34" height="18" rx="3" />, etiket: [47, 163] },
      { slug: "kart",      ad: "Elektronik kart",       anahtar: ["kart", "panel", "tuş"], sekil: <rect x="30" y="20" width="100" height="22" rx="3" />, etiket: [80, 35] },
    ],
  },
};

// Değişen parça adlarından şemada işaretlenecek bölgeler.
export function degisenBolgeler(sema, degisen) {
  const adlar = (degisen || []).flatMap((d) => [...(d.parcalar || []), d.islem]).map(kucult);
  return new Set((sema?.bolgeler || [])
    .filter((b) => b.anahtar.some((a) => adlar.some((ad) => ad.includes(a))))
    .map((b) => b.slug));
}

export default function IkinciElDetay({ dosya }) {
  const { ilanlar, hata } = useIlanlar(dosya);
  const ilan = ilanlar?.[0];
  useNoindex(ilan ? `${ilan.marka || ""} ${ilan.model || ilan.baslik} · İkinci El · Benservis`.trim() : `${dosya} · İkinci El · Benservis`);

  useEffect(() => {
    if (ilan) { try { track("ikinci_el_detay_goruntule", { ilan: ilan.id }); } catch { /* ölçüm akışı bozmaz */ } }
  }, [ilan?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Kabuk>
      <style>{CSS}</style>
      <nav className="ied-kirinti" aria-label="Konum">
        <a href="/pazar">Pazaryeri</a> › <a href="/ikinci-el">İkinci El</a>
        {ilan && <> › {cihazAdi(ilan.cihaz_turu)}{ilan.marka ? ` › ${ilan.marka}` : ""}</>}
      </nav>
      {hata && <div className="ie-hata">{hata}</div>}
      {!hata && ilanlar === null && <div className="ie-yukleniyor">Yükleniyor…</div>}
      {ilanlar && !ilan && (
        <div className="ie-bos">Bu dosya numarasıyla satışta ürün yok (satılmış olabilir). <a href="/ikinci-el">Tüm ikinci el ürünler →</a></div>
      )}
      {ilan && <Detay ilan={ilan} />}
    </Kabuk>
  );
}

function Detay({ ilan }) {
  const g = garantiEtiketi(ilan);
  const sema = SEMALAR[ilan.cihaz_turu] || null;
  const isaretli = useMemo(() => degisenBolgeler(sema, ilan.degisen_parcalar), [sema, ilan.degisen_parcalar]);
  const kontrol = Array.isArray(ilan.kontrol_listesi) ? ilan.kontrol_listesi : [];
  const degisen = ilan.degisen_parcalar || [];

  const bilgi = [
    ["Marka", ilan.marka], ["Model", ilan.model], ["Cihaz", cihazAdi(ilan.cihaz_turu)],
    ["Üretim yılı", ilan.uretim_yili], ["Kullanım", kullanimMetni(ilan.kullanim_suresi_ay)],
    ["Garanti", g.metin], ["Konum", ilan.konum], ["Dosya no", ilan.dosya_no],
    ["Seri no", ilan.seri_maskeli], ["İlan tarihi", tarih(ilan.created_at)],
  ].filter(([, v]) => v !== null && v !== undefined && v !== "");

  return (
    <>
      <section className="ied-ust">
        <Galeri ilan={ilan} />
        <FiyatKutusu ilan={ilan} garanti={g} />
      </section>

      <section className="ied-iki">
        <div className="ied-kutu">
          <h2>Ürün bilgileri</h2>
          <table className="ied-tablo"><tbody>
            {bilgi.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody></table>
        </div>
        <div className="ied-kutu ied-satici">
          <h2>Satıcı</h2>
          <b>Benservis</b>
          <span>Fatura: {SATICI.unvan}</span>
          <span>{SATICI.adres}</span>
          <span>Telefon: <a href={`tel:${SATICI.telefon.replace(/\s/g, "")}`}>{SATICI.telefon}</a></span>
          <span className="ied-not">Görüşmede dosya numarasını söyleyin: <b>{ilan.dosya_no}</b></span>
        </div>
      </section>

      <section className="ied-kutu ied-kontrol" aria-label="Benservis kontrolü">
        <h2>Benservis kontrolü</h2>
        <div className="ied-kontrol-ic">
          <div className="ied-sema">
            {sema ? (
              <svg viewBox={sema.viewBox} role="img" aria-label="Cihaz şeması; değişen bölgeler D ile işaretli">
                <g fill="none" stroke="#94A3B8" strokeWidth="2">{sema.govde}</g>
                {sema.bolgeler.map((b) => {
                  const d = isaretli.has(b.slug);
                  return (
                    <g key={b.slug}>
                      <g fill={d ? "rgba(234,88,12,.14)" : "rgba(37,99,235,.06)"} stroke={d ? TURUNCU : "#93C5FD"} strokeWidth="1.6">{b.sekil}</g>
                      {d && <text x={b.etiket[0]} y={b.etiket[1]} textAnchor="middle" fontSize="12" fontWeight="800" fill={TURUNCU}>D</text>}
                    </g>
                  );
                })}
              </svg>
            ) : (
              <div className="ied-sema-bos"><CihazIkon cihaz={cihazAdi(ilan.cihaz_turu)} size={64} /></div>
            )}
            <div className="ied-lejant"><span className="d">D</span> Değişen parça <span className="k" /> Kontrol edildi</div>
            {sema && (
              <ul className="ied-bolgeler">
                {sema.bolgeler.map((b) => (
                  <li key={b.slug} className={isaretli.has(b.slug) ? "d" : ""}>{b.ad}: {isaretli.has(b.slug) ? "değişti" : "orijinal"}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="ied-kontrol-sag">
            <h3>Kontrol listesi</h3>
            {kontrol.length ? (
              <ul className="ied-liste">
                {kontrol.map((m, i) => (
                  <li key={i} className={m.sonuc === "uygun" ? "ok" : "uyari"}>
                    <span className="ied-isaret" aria-hidden="true">{m.sonuc === "uygun" ? "✓" : "!"}</span>
                    <span><b>{m.madde}</b>{m.sonuc !== "uygun" && m.sonuc ? ` · ${m.sonuc}` : ""}{m.not ? <em> · {m.not}</em> : null}</span>
                  </li>
                ))}
              </ul>
            ) : <p className="ied-gri">Kontrol listesi bu ürün için henüz girilmedi.</p>}

            <h3>Değişen parçalar</h3>
            {degisen.length ? (
              <table className="ied-tablo ied-degisen"><thead><tr><th>Tarih</th><th>Parça</th><th>İşlem</th></tr></thead><tbody>
                {degisen.map((d, i) => (
                  <tr key={i}><td>{tarih(d.tarih)}</td><td>{d.parcalar.join(", ") || "—"}</td><td>{d.islem}</td></tr>
                ))}
              </tbody></table>
            ) : <p className="ied-gri">Kayıtlı parça değişimi yok.</p>}
            {ilan.seri_maskeli && <p className="ied-gri">Kayıtlar bu cihazın seri numarasına (<b>{ilan.seri_maskeli}</b>) bağlıdır; tam numara teslimde verilir.</p>}
          </div>
        </div>
      </section>

      {ilan.aciklama && (
        <section className="ied-kutu"><h2>Açıklama</h2><p className="ied-aciklama">{ilan.aciklama}</p></section>
      )}

      <Benzerler ilan={ilan} />
    </>
  );
}

function Galeri({ ilan }) {
  const dis = Array.isArray(ilan.fotograflar) ? ilan.fotograflar : [];
  const ic = Array.isArray(ilan.ic_fotograflar) ? ilan.ic_fotograflar : [];
  const [sekme, setSekme] = useState("dis");
  const [secili, setSecili] = useState(0);
  const liste = sekme === "ic" ? ic : dis;
  const foto = liste[secili];
  return (
    <div className="ied-galeri">
      <div className="ied-buyuk">
        {foto
          ? <img src={foto} alt={`${ilan.baslik}${sekme === "ic" ? " — açılmış hali" : ""}`} />
          : <div className="ie-foto-bos"><CihazIkon cihaz={cihazAdi(ilan.cihaz_turu)} size={96} /><span>Fotoğraf yakında</span></div>}
      </div>
      {(dis.length > 0 || ic.length > 0) && (
        <div className="ied-sekmeler">
          <button type="button" className={sekme === "dis" ? "on" : ""} onClick={() => { setSekme("dis"); setSecili(0); }}>Dış görünüm ({dis.length})</button>
          {ic.length > 0 && <button type="button" className={sekme === "ic" ? "on" : ""} onClick={() => { setSekme("ic"); setSecili(0); }}>Açılmış hali ({ic.length})</button>}
        </div>
      )}
      {liste.length > 1 && (
        <div className="ied-kucukler">
          {liste.map((u, i) => (
            <button key={u} type="button" className={i === secili ? "on" : ""} onClick={() => setSecili(i)} aria-label={`Fotoğraf ${i + 1}`}>
              <img src={u} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FiyatKutusu({ ilan, garanti }) {
  const secenekler = ilanTeslimSecenekleri(ilan);
  const [teslim, setTeslim] = useState("depo");
  const [sepette, setSepette] = useState(() => sepetOku().some((k) => k.id === ilan.id));
  const ekle = () => {
    const eklendi = sepeteEkle({
      id: ilan.id, baslik: ilan.baslik, fiyat: ilan.fiyat, gorsel_url: ilan.fotograflar?.[0] || null,
      servis_ad: "Benservis", tip: "ikinci-el", dosya_no: ilan.dosya_no, teslim,
    });
    if (eklendi) { try { track("ikinci_el_sepete_ekle", { ilan: ilan.id, teslim }); } catch { /* ölçüm akışı bozmaz */ } }
    setSepette(true);
  };
  return (
    <div className="ied-fiyat">
      <span className={`ie-garanti g-${garanti.sinif} ied-rozet`}>{garanti.metin}</span>
      <h1>{ilan.marka ? <>{ilan.marka} <b>{ilan.model}</b></> : ilan.baslik}</h1>
      {ilan.marka && <div className="ied-altbaslik">{ilan.baslik}</div>}
      <div className="ied-tutar">{tl(ilan.fiyat)} <small>KDV dahil</small></div>

      <fieldset className="ied-teslim">
        <legend>Teslim şekli</legend>
        {secenekler.map((t) => (
          <label key={t.slug} className={teslim === t.slug ? "on" : ""}>
            <input type="radio" name="teslim" value={t.slug} checked={teslim === t.slug} onChange={() => setTeslim(t.slug)} disabled={sepette} />
            <span>{t.ad}</span><em>{t.ek}</em>
          </label>
        ))}
        {teslim !== "depo" && <p className="ied-gri">Nakliye ve montaj ücreti adrese göre ayrıca hesaplanır; karttan yalnız ürün bedeli çekilir.</p>}
        {teslim === "depo" && <p className="ied-gri">Depo adresi sipariş sonrası telefonla bildirilir.</p>}
      </fieldset>

      {sepette
        ? <a href="/sepet" className="ied-dugme ied-sepette">Sepette · Sepete git →</a>
        : <button type="button" className="ied-dugme" onClick={ekle}>Sepete ekle</button>}
      <div className="ied-mini">Dosya no <b>{ilan.dosya_no}</b> · Stokta 1 adet · Ödeme kart ile (PayTR)</div>
    </div>
  );
}

function Benzerler({ ilan }) {
  const { ilanlar } = useIlanlar(null);
  const liste = (ilanlar || []).filter((i) => i.id !== ilan.id)
    .sort((a, b) => (b.cihaz_turu === ilan.cihaz_turu) - (a.cihaz_turu === ilan.cihaz_turu))
    .slice(0, 4);
  if (!liste.length) return null;
  return (
    <section className="ied-benzer">
      <h2>Benzer ürünler</h2>
      <div className="ie-izgara">{liste.map((i) => <IlanKarti key={i.id} ilan={i} />)}</div>
    </section>
  );
}

const CSS = `
.ied-kirinti{margin:16px 0 12px;color:${SLATE};font-size:13px}
.ied-kirinti a{color:${BLUE}!important;font-weight:600}
.ied-ust{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:16px;margin-bottom:16px}
.ied-galeri{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:12px;min-width:0}
.ied-buyuk{position:relative;aspect-ratio:4/3;background:${TINT};border-radius:10px;overflow:hidden}
.ied-buyuk img{width:100%;height:100%;object-fit:contain;display:block;background:#fff}
.ied-sekmeler{display:flex;gap:6px;margin-top:10px}
.ied-sekmeler button{border:1.5px solid ${HAIR};background:#fff;border-radius:999px;padding:7px 12px;font-weight:700;font-size:12.5px;color:${INK}}
.ied-sekmeler button.on{border-color:${BLUE};color:${BLUE}}
.ied-kucukler{display:flex;gap:8px;margin-top:10px;overflow-x:auto}
.ied-kucukler button{flex:none;width:72px;height:54px;border:2px solid transparent;border-radius:8px;padding:0;overflow:hidden;background:${TINT}}
.ied-kucukler button.on{border-color:${BLUE}}
.ied-kucukler img{width:100%;height:100%;object-fit:cover}
.ied-fiyat{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:20px;display:flex;flex-direction:column;gap:10px;min-width:0}
.ied-rozet{position:static;width:max-content}
.ied-fiyat h1{font-family:'Fraunces',serif;font-size:26px;line-height:1.2;margin:0;font-weight:500}
.ied-fiyat h1 b{font-weight:700}
.ied-altbaslik{color:${SLATE};font-size:14px}
.ied-tutar{font-size:30px;font-weight:800}
.ied-tutar small{font-size:12.5px;font-weight:600;color:${SLATE}}
.ied-teslim{border:1px solid ${HAIR};border-radius:12px;padding:10px 12px 8px;margin:0}
.ied-teslim legend{font-weight:800;font-size:13px;padding:0 4px}
.ied-teslim label{display:flex;align-items:center;gap:8px;padding:8px 6px;border-radius:8px;cursor:pointer;font-size:14px}
.ied-teslim label.on{background:#EFF6FF}
.ied-teslim label span{flex:1;font-weight:600}
.ied-teslim label em{font-style:normal;color:${SLATE};font-size:12.5px;font-weight:600}
.ied-teslim input{accent-color:${BLUE}}
.ied-dugme{border:0;background:${BLUE};color:#fff!important;border-radius:10px;padding:14px;font-weight:800;font-size:15px;text-align:center}
.ied-sepette{background:${GREEN_DEEP}}
.ied-mini{color:${SLATE};font-size:12px}
.ied-gri{color:${SLATE};font-size:12.5px;line-height:1.45;margin:6px 0 0}
.ied-iki{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:16px;margin-bottom:16px}
.ied-kutu{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:18px;margin-bottom:16px;min-width:0}
.ied-iki .ied-kutu{margin-bottom:0}
.ied-kutu h2{font-family:'Fraunces',serif;font-size:19px;margin:0 0 12px}
.ied-kutu h3{font-size:14px;margin:4px 0 8px}
.ied-tablo{width:100%;border-collapse:collapse;font-size:13.5px}
.ied-tablo th,.ied-tablo td{text-align:left;padding:8px 6px;border-bottom:1px solid #F1F5F9;vertical-align:top}
.ied-tablo th{color:${SLATE};font-weight:600;width:38%}
.ied-degisen th{width:auto}
.ied-satici{display:flex;flex-direction:column;gap:6px;font-size:13.5px;color:${SLATE}}
.ied-satici b{color:${INK};font-size:16px}
.ied-satici a{color:${BLUE}!important;font-weight:700}
.ied-not{margin-top:6px;background:${TINT};border-radius:8px;padding:8px 10px}
.ied-kontrol-ic{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:20px}
.ied-sema svg{width:100%;max-height:260px}
.ied-sema-bos{height:200px;display:grid;place-items:center;color:#94A3B8;background:${TINT};border-radius:10px}
.ied-lejant{display:flex;align-items:center;gap:8px;font-size:12.5px;color:${SLATE};margin-top:8px;flex-wrap:wrap}
.ied-lejant .d{display:inline-grid;place-items:center;width:20px;height:20px;border-radius:5px;background:rgba(234,88,12,.14);color:${TURUNCU};font-weight:800;border:1.5px solid ${TURUNCU}}
.ied-lejant .k{display:inline-block;width:20px;height:14px;border-radius:4px;background:rgba(37,99,235,.06);border:1.5px solid #93C5FD;margin-left:8px}
.ied-bolgeler{list-style:none;padding:0;margin:10px 0 0;font-size:12.5px;color:${SLATE}}
.ied-bolgeler li{padding:3px 0}
.ied-bolgeler li.d{color:${TURUNCU};font-weight:700}
.ied-liste{list-style:none;padding:0;margin:0 0 14px;display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:13.5px}
.ied-liste li{display:flex;gap:8px;align-items:flex-start}
.ied-isaret{flex:none;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:800;background:#DCFCE7;color:${GREEN_DEEP}}
.ied-liste li.uyari .ied-isaret{background:#FFEDD5;color:${TURUNCU}}
.ied-liste em{color:${SLATE};font-style:normal}
.ied-aciklama{margin:0;line-height:1.6;white-space:pre-line}
.ied-benzer h2{font-family:'Fraunces',serif;font-size:19px;margin:8px 0 12px}
.ied-benzer{margin-bottom:22px}
@media (max-width:900px){
  .ied-ust,.ied-iki,.ied-kontrol-ic{grid-template-columns:1fr}
}
@media (max-width:640px){
  .ied-fiyat{padding:16px}
  .ied-fiyat h1{font-size:22px}
  .ied-tutar{font-size:25px}
  .ied-liste{grid-template-columns:1fr}
}
`;
