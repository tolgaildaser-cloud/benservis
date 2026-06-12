// src/IlanListesi.jsx
// İkinci el ilan listesi — /ikinci-el
// sahibinden.com formatı: sol kategori menüsü + satır-liste (foto | başlık | konum | tarih | fiyat)
import React, { useState, useEffect } from "react";
import { CIHAZLAR } from "./constants.js";
import { sepetAdet } from "./sepet.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;
const INK = "#22302A", AMBER = "#C8632B", GREEN = "#3A7D44";
const LINK = "#1A4FB4";          // sahibinden alışkanlığı: mavi ilan başlığı
const HOVER_BG = "#FFF8DF";      // satır hover — sarımsı
const BORDER = "#E0DCD2";

const CIHAZ_EMOJI = {
  "Buzdolabı": "🧊", "Çamaşır Makinesi": "🫧", "Bulaşık Makinesi": "🍽️",
  "Fırın / Ocak": "🔥", "Klima": "❄️", "Kombi": "♨️", "Televizyon": "📺",
  "Termosifon / Şofben": "🚿", "Mikrodalga": "📡", "Elektrik Süpürgesi": "🌀",
  "Su Sebili / Arıtma": "💧", "Cep Telefonu": "📱", "Robot Süpürge": "🤖",
  "Air Fryer": "✨", "Masaüstü Bilgisayar": "🖥️", "Notebook": "💻",
  "Yazıcı": "🖨️", "Diğer": "📦",
};

const DURUM_CFG = {
  "çalışıyor": { bg: "#E6F4EC", color: "#2A7040", label: "Çalışıyor" },
  "arızalı":   { bg: "#FEF3E2", color: "#A85B0E", label: "Arızalı"   },
  "hurda":     { bg: "#FDECEA", color: "#B23A2E", label: "Hurda"     },
};

const SIRALAMA = [
  { value: "yeni",       label: "Gelişmiş sıralama: En yeni" },
  { value: "fiyat_asc",  label: "Fiyat: Düşükten yükseğe"    },
  { value: "fiyat_desc", label: "Fiyat: Yüksekten düşüğe"    },
];

function tarihStr(t) {
  return new Date(t).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function IlanSatir({ ilan, onClick }) {
  const dpp = ilan.dpp;
  const dc  = dpp?.mevcut_durum ? (DURUM_CFG[dpp.mevcut_durum] || null) : null;
  const [il, ilce] = (() => {
    if (!ilan.konum) return ["—", ""];
    const p = ilan.konum.split(",").map(x => x.trim());
    return p.length >= 2 ? [p[1], p[0]] : [p[0], ""];
  })();

  return (
    <div className="srow" onClick={onClick} role="button" tabIndex={0}>
      {/* Foto */}
      <div className="srow-foto">
        {ilan.fotograflar?.[0]
          ? <img src={ilan.fotograflar[0]} alt={ilan.baslik} loading="lazy" />
          : <div className="srow-foto-bos">{CIHAZ_EMOJI[ilan.kategori] || "📦"}</div>}
      </div>

      {/* Başlık + rozetler */}
      <div className="srow-orta">
        <div className="srow-baslik">{ilan.baslik}</div>
        <div className="srow-rozetler">
          {ilan.kaynak === "servis" && (
            <span
              className="rozet rozet-firma"
              style={{ background: "#EBF1FB", color: LINK, cursor: "pointer" }}
              title={`${ilan.servis_ad} mağazasını aç`}
              onClick={e => { e.stopPropagation(); window.location.href = `/servis/${ilan.servis_id}`; }}>
              🏪 {ilan.servis_ad}
            </span>
          )}
          {dpp?.benservis_dogrulanmis && (
            <span className="rozet" style={{ background: "#E6F4EC", color: GREEN }}>✓ Benservis Doğrulandı</span>
          )}
          {dpp && !dpp.benservis_dogrulanmis && ilan.seri_no && (
            <span className="rozet" style={{ background: "#F0EAD8", color: "#6E6450" }}>📋 DPP'li</span>
          )}
          {dc && <span className="rozet" style={{ background: dc.bg, color: dc.color }}>{dc.label}</span>}
        </div>
        {/* Mobilde konum+tarih buraya iner */}
        <div className="srow-mobilalt">
          <span>{il}{ilce ? ` / ${ilce}` : ""}</span>
          <span> · {tarihStr(ilan.created_at)}</span>
        </div>
      </div>

      {/* Konum (masaüstü) */}
      <div className="srow-konum">
        <div>{il}</div>
        {ilce && <div className="srow-konum-alt">{ilce}</div>}
      </div>

      {/* Tarih (masaüstü) */}
      <div className="srow-tarih">{tarihStr(ilan.created_at)}</div>

      {/* Fiyat */}
      <div className="srow-fiyat">{ilan.fiyat.toLocaleString("tr-TR")} TL</div>
    </div>
  );
}

export default function IlanListesi() {
  const [ilanlar, setIlanlar]         = useState([]);
  const [yukleniyor, setYukleniyor]   = useState(true);
  const [kategori, setKategori]       = useState("");
  const [sadeceDogru, setSadeceDogru] = useState(false);
  const [siralama, setSiralama]       = useState("yeni");
  const [aramaMetni, setAramaMetni]   = useState("");

  useEffect(() => {
    setYukleniyor(true);
    const p = new URLSearchParams({ durum: "aktif", limit: "50" });
    if (kategori) p.set("kategori", kategori);
    fetch(`/api/ilan/liste?${p}`)
      .then(r => r.json())
      .then(d => setIlanlar(d.ilanlar || []))
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  }, [kategori]);

  let filtreli = [...ilanlar];
  if (aramaMetni.trim()) {
    const q = aramaMetni.trim().toLowerCase();
    filtreli = filtreli.filter(i =>
      i.baslik.toLowerCase().includes(q) ||
      (i.dpp?.marka || "").toLowerCase().includes(q) ||
      (i.dpp?.model || "").toLowerCase().includes(q) ||
      (i.kategori   || "").toLowerCase().includes(q) ||
      (i.servis_ad  || "").toLowerCase().includes(q)
    );
  }
  if (sadeceDogru)               filtreli = filtreli.filter(i => i.dpp?.benservis_dogrulanmis);
  if (siralama === "fiyat_asc")  filtreli.sort((a, b) => a.fiyat - b.fiyat);
  if (siralama === "fiyat_desc") filtreli.sort((a, b) => b.fiyat - a.fiyat);

  // Kategori sayaçları (yalnız müşteri ilanları kategorili)
  const sayilar = {};
  ilanlar.forEach(i => { if (i.kategori) sayilar[i.kategori] = (sayilar[i.kategori] || 0) + 1; });

  // Servis ürünü → ürün detayı (satın al/sepet); müşteri ilanı → ilan detayı.
  // Firma rozetine tıklanırsa (IlanSatir içinde) mağaza sayfası açılır.
  const goster = ilan => {
    window.location.href = ilan.kaynak === "servis"
      ? `/urun/${ilan.id}`
      : `/ikinci-el/${ilan.id}`;
  };

  return (
    <div className="sah-wrap">
      <style>{FONT}</style>
      <style>{CSS}</style>

      {/* ── HEADER: logo | arama | ilan ver ── */}
      <header className="sah-header">
        <div className="sah-header-ic">
          <a href="/" className="sah-logo">
            <span className="sah-logo-mark">◑</span> Benservis
            <span className="sah-logo-alt">ikinci el</span>
          </a>
          <div className="sah-arama">
            <input
              type="text"
              placeholder="Kelime, ilan no veya mağaza adı ile ara"
              value={aramaMetni}
              onChange={e => setAramaMetni(e.target.value)}
            />
            <button type="button">Ara</button>
          </div>
          <a href="/sepet" className="sah-sepet" title="Sepetim">
            🛒{sepetAdet() > 0 && <span className="sah-sepet-adet">{sepetAdet()}</span>}
          </a>
          <a href="/ikinci-el/yeni" className="sah-ilanver">Ücretsiz İlan Ver</a>
        </div>
      </header>

      {/* ── GÖVDE: sol menü + liste ── */}
      <div className="sah-govde">
        {/* SOL KATEGORİ MENÜSÜ */}
        <aside className="sah-sol">
          <div className="sah-sol-baslik">Kategoriler</div>
          <button
            className={"sah-kat" + (kategori === "" ? " aktif" : "")}
            onClick={() => setKategori("")}>
            Tüm İlanlar <span className="sah-kat-sayi">({ilanlar.length})</span>
          </button>
          {CIHAZLAR.map(c => (
            <button
              key={c}
              className={"sah-kat" + (kategori === c ? " aktif" : "")}
              onClick={() => setKategori(kategori === c ? "" : c)}>
              {c} {sayilar[c] ? <span className="sah-kat-sayi">({sayilar[c]})</span> : null}
            </button>
          ))}
          <div className="sah-sol-ayrac" />
          <label className="sah-check">
            <input type="checkbox" checked={sadeceDogru} onChange={e => setSadeceDogru(e.target.checked)} />
            ✓ Benservis Doğrulanmış
          </label>
        </aside>

        {/* SAĞ ANA ALAN */}
        <main className="sah-ana">
          {/* Breadcrumb + sıralama */}
          <div className="sah-ust">
            <div className="sah-crumb">
              <a href="/">Benservis</a> › <strong>{kategori || "İkinci El Tüm İlanlar"}</strong>
              {!yukleniyor && <span className="sah-adet"> — {filtreli.length} ilan</span>}
            </div>
            <select value={siralama} onChange={e => setSiralama(e.target.value)} className="sah-sira">
              {SIRALAMA.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Mobil kategori şeridi */}
          <div className="sah-mobilkat">
            <button className={"mk" + (kategori === "" ? " aktif" : "")} onClick={() => setKategori("")}>Tümü</button>
            {CIHAZLAR.map(c => (
              <button key={c} className={"mk" + (kategori === c ? " aktif" : "")}
                onClick={() => setKategori(kategori === c ? "" : c)}>
                {CIHAZ_EMOJI[c]} {c}
              </button>
            ))}
          </div>

          {/* Liste başlık satırı (masaüstü) */}
          <div className="sah-liste-baslik">
            <div className="lb-foto" />
            <div className="lb-baslik">İlan Başlığı</div>
            <div className="lb-konum">İl / İlçe</div>
            <div className="lb-tarih">İlan Tarihi</div>
            <div className="lb-fiyat">Fiyat</div>
          </div>

          {/* Satırlar */}
          {yukleniyor ? (
            <div className="sah-bos">Yükleniyor…</div>
          ) : filtreli.length === 0 ? (
            <div className="sah-bos">
              <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
              {aramaMetni ? `"${aramaMetni}" için sonuç yok.` : "Bu kategoride ilan yok."}
              <div style={{ marginTop: 14 }}>
                <a href="/ikinci-el/yeni" className="sah-ilanver" style={{ display: "inline-block" }}>Ücretsiz İlan Ver</a>
              </div>
            </div>
          ) : (
            <div className="sah-liste">
              {filtreli.map(ilan => (
                <IlanSatir key={(ilan.kaynak || "ilan") + ilan.id} ilan={ilan} onClick={() => goster(ilan)} />
              ))}
            </div>
          )}

          <a href="/ariza" className="sah-cta">◑ Cihazın mı arızalı? Ücretsiz AI teşhisi →</a>
        </main>
      </div>

      <footer className="sah-footer">© 2026 Benservis · İkinci El Pazaryeri · DPP destekli güvenli alışveriş</footer>
    </div>
  );
}

/* ───────────── sahibinden-tarzı CSS ───────────── */
const CSS = `
* { box-sizing: border-box; }
.sah-wrap { min-height: 100vh; background: #F5F3EE; font-family: 'Hanken Grotesk', sans-serif; color: ${INK}; }

/* HEADER */
.sah-header { background: #fff; border-bottom: 3px solid ${AMBER}; position: sticky; top: 0; z-index: 100; }
.sah-header-ic { max-width: 1150px; margin: 0 auto; display: flex; align-items: center; gap: 14px; padding: 12px 16px; }
.sah-logo { font-family: 'Fraunces', serif; font-weight: 700; font-size: 22px; color: ${INK}; text-decoration: none; white-space: nowrap; display: flex; align-items: baseline; gap: 6px; }
.sah-logo-mark { color: ${AMBER}; }
.sah-logo-alt { font-family: 'Hanken Grotesk', sans-serif; font-size: 11px; font-weight: 700; color: #9A9384; text-transform: uppercase; letter-spacing: .06em; }
.sah-arama { flex: 1; display: flex; max-width: 560px; }
.sah-arama input { flex: 1; min-width: 0; border: 2px solid ${BORDER}; border-right: none; border-radius: 6px 0 0 6px; padding: 9px 12px; font-size: 13.5px; font-family: inherit; outline: none; }
.sah-arama input:focus { border-color: ${AMBER}; }
.sah-arama button { border: none; background: ${INK}; color: #fff; font-weight: 700; font-size: 13.5px; padding: 0 20px; border-radius: 0 6px 6px 0; cursor: pointer; font-family: inherit; }
.sah-ilanver { background: ${AMBER}; color: #fff; font-weight: 700; font-size: 13.5px; padding: 10px 16px; border-radius: 6px; text-decoration: none; white-space: nowrap; }
.sah-sepet { position: relative; font-size: 21px; text-decoration: none; padding: 4px 6px; }
.sah-sepet-adet { position: absolute; top: -4px; right: -6px; background: ${AMBER}; color: #fff; border-radius: 99px; font-size: 10px; font-weight: 700; padding: 1px 5px; }

/* GÖVDE */
.sah-govde { max-width: 1150px; margin: 14px auto 0; padding: 0 16px 30px; display: flex; gap: 16px; align-items: flex-start; }

/* SOL MENÜ */
.sah-sol { width: 215px; flex-shrink: 0; background: #fff; border: 1px solid ${BORDER}; border-radius: 6px; padding: 12px 0 14px; position: sticky; top: 76px; }
.sah-sol-baslik { font-size: 13px; font-weight: 700; padding: 2px 14px 10px; border-bottom: 1px solid ${BORDER}; margin-bottom: 6px; }
.sah-kat { display: block; width: 100%; text-align: left; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 12.5px; color: ${LINK}; padding: 5px 14px; line-height: 1.45; }
.sah-kat:hover { text-decoration: underline; }
.sah-kat.aktif { color: ${INK}; font-weight: 700; background: ${HOVER_BG}; }
.sah-kat-sayi { color: #9A9384; font-size: 11.5px; }
.sah-sol-ayrac { border-top: 1px solid ${BORDER}; margin: 10px 0; }
.sah-check { display: flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 600; color: ${GREEN}; padding: 2px 14px; cursor: pointer; }

/* ANA ALAN */
.sah-ana { flex: 1; min-width: 0; }
.sah-ust { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
.sah-crumb { font-size: 12.5px; color: #6E6450; }
.sah-crumb a { color: ${LINK}; text-decoration: none; }
.sah-adet { color: #9A9384; }
.sah-sira { font-size: 12.5px; font-family: inherit; padding: 7px 10px; border: 1px solid ${BORDER}; border-radius: 6px; background: #fff; cursor: pointer; color: ${INK}; }

/* MOBİL KATEGORİ ŞERİDİ */
.sah-mobilkat { display: none; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 8px; scrollbar-width: none; }
.sah-mobilkat::-webkit-scrollbar { display: none; }
.sah-mobilkat .mk { flex-shrink: 0; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 999px; border: 1.5px solid ${BORDER}; background: #fff; color: #5C6660; cursor: pointer; font-family: inherit; white-space: nowrap; }
.sah-mobilkat .mk.aktif { background: ${AMBER}; border-color: ${AMBER}; color: #fff; }

/* LİSTE */
.sah-liste-baslik { display: grid; grid-template-columns: 110px 1fr 130px 120px 120px; gap: 12px; align-items: center; background: #EFEBE2; border: 1px solid ${BORDER}; border-bottom: none; border-radius: 6px 6px 0 0; padding: 8px 12px; font-size: 11.5px; font-weight: 700; color: #6E6450; }
.lb-fiyat { text-align: right; }
.sah-liste { background: #fff; border: 1px solid ${BORDER}; border-radius: 0 0 6px 6px; overflow: hidden; }

.srow { display: grid; grid-template-columns: 110px 1fr 130px 120px 120px; gap: 12px; align-items: center; padding: 10px 12px; border-bottom: 1px solid #ECE8DE; cursor: pointer; background: #fff; }
.srow:last-child { border-bottom: none; }
.srow:hover { background: ${HOVER_BG}; }
.srow-foto { width: 110px; height: 82px; border-radius: 4px; overflow: hidden; background: #EDE6D6; flex-shrink: 0; }
.srow-foto img { width: 100%; height: 100%; object-fit: cover; display: block; }
.srow-foto-bos { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 30px; }
.srow-orta { min-width: 0; }
.srow-baslik { color: ${LINK}; font-size: 14px; font-weight: 600; line-height: 1.35; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.srow:hover .srow-baslik { text-decoration: underline; }
.srow-rozetler { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px; }
.rozet { font-size: 10.5px; font-weight: 700; border-radius: 4px; padding: 2px 7px; white-space: nowrap; }
.srow-mobilalt { display: none; font-size: 11.5px; color: #8A7B6A; margin-top: 5px; }
.srow-konum { font-size: 12.5px; color: ${INK}; }
.srow-konum-alt { color: #8A7B6A; font-size: 12px; }
.srow-tarih { font-size: 12px; color: #6E6450; }
.srow-fiyat { font-size: 14.5px; font-weight: 700; color: ${INK}; text-align: right; white-space: nowrap; }

/* DİĞER */
.sah-bos { background: #fff; border: 1px solid ${BORDER}; border-radius: 6px; text-align: center; padding: 50px 16px; font-size: 14px; color: #6E6450; }
.sah-cta { display: block; text-align: center; margin-top: 16px; padding: 13px; border-radius: 8px; background: ${INK}; color: #F5EFE2; font-weight: 700; font-size: 13.5px; text-decoration: none; }
.sah-footer { text-align: center; font-size: 11.5px; color: #A59E8E; padding: 10px 16px 26px; }

/* ── MOBİL ── */
@media (max-width: 900px) {
  .sah-sol { display: none; }
  .sah-mobilkat { display: flex; }
  .sah-liste-baslik { display: none; }
  .sah-header-ic { flex-wrap: wrap; gap: 8px; }
  .sah-arama { order: 3; min-width: 100%; }
  .srow { grid-template-columns: 96px 1fr auto; grid-template-rows: auto; }
  .srow-konum, .srow-tarih { display: none; }
  .srow-mobilalt { display: block; }
  .srow-foto { width: 96px; height: 72px; }
  .srow-fiyat { align-self: start; font-size: 14px; }
}
`;
