// src/AdminTeshisPaneli.jsx — yönetim panosu Teşhis sekmesi (YK #195). Canlı veri (≤60 sn önbellek),
// her tablo .xlsx + CSV. Hesap sunucuda (api/admin/teshis-pano.js), burada yalnız gösterim.
// Grafikler düz SVG/CSS: kütüphane yok. xlsx-yaz yalnız düğmeye basılınca yüklenir.
import React, { useState, useEffect, useCallback } from "react";
import { NAVY as INK, BLUE, SLATE, HAIR as LINE } from "./theme.js";
import { apiSorgu } from "./pano-suzgec.js";

const HAM_BASLIK = ["Tarih", "Cihaz", "Marka", "Yaş", "Arıza", "İl", "İlçe", "Maliyet min", "Maliyet max", "Karar", "Aciliyet", "Kaynak", "Cins", "Kampanya"];
const hamSatir = (s) => [new Date(s.created_at), s.cihaz, s.marka, s.yas, s.ariza, s.il, s.ilce, s.maliyet_min, s.maliyet_max, s.karar, s.aciliyet, s.kaynak, s.cins, s.kampanya];
const trTarih = (iso) => { const d = new Date(iso); return `${d.toLocaleDateString("tr-TR")} ${d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`; };

const kart = { background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 14 };
const thS = { padding: "8px 10px", color: SLATE, fontWeight: 700, whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}`, textAlign: "left" };
const tdS = { padding: "7px 10px", color: INK, whiteSpace: "nowrap", borderBottom: "1px solid #F1F5F9" };
const dugme = { padding: "5px 10px", background: "#fff", color: BLUE, border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };

async function excel(sayfalar, ad) { const { xlsxIndir } = await import("./xlsx-yaz.js"); xlsxIndir(sayfalar, ad); }
async function csv(tablo, ad) { const { csvIndir } = await import("./xlsx-yaz.js"); csvIndir(tablo, ad); }

function Tablo({ t, dosya }) {
  const [hepsi, setHepsi] = useState(false);
  const gorunen = hepsi ? t.satirlar : t.satirlar.slice(0, 15);
  return (
    <section style={{ ...kart, padding: 0, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, padding: "10px 12px", flexWrap: "wrap" }}>
        <b style={{ color: INK, fontSize: 14 }}>{t.ad} <span style={{ color: SLATE, fontWeight: 500 }}>({t.satirlar.length})</span></b>
        <span style={{ display: "flex", gap: 6 }}>
          <button style={dugme} onClick={() => excel([t], `${dosya}_${t.ad}`)}>Excel</button>
          <button style={dugme} onClick={() => csv(t, `${dosya}_${t.ad}`)}>CSV</button>
        </span>
      </div>
      {t.satirlar.length === 0 ? <div style={{ color: SLATE, fontSize: 13, padding: "0 12px 12px" }}>Bu süzgeçte kayıt yok.</div> : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
            <thead><tr style={{ background: "#F1F5F9" }}>{t.basliklar.map((h) => <th key={h} style={thS}>{h}</th>)}</tr></thead>
            <tbody>{gorunen.map((r, i) => <tr key={i}>{r.map((v, c) => <td key={c} style={tdS}>{v ?? "—"}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {t.satirlar.length > 15 && <button onClick={() => setHepsi(!hepsi)} style={{ ...dugme, border: "none", width: "100%", borderRadius: 0 }}>{hepsi ? "Daralt" : `Tümünü göster (${t.satirlar.length})`}</button>}
    </section>
  );
}

function GunlukGrafik({ veri }) {
  const max = Math.max(1, ...veri.map((d) => d.sayi));
  const G = 720, Y = 150, b = G / Math.max(veri.length, 1);
  return (
    <svg viewBox={`0 0 ${G} ${Y + 20}`} role="img" aria-label="Günlük teşhis sayısı" style={{ width: "100%", display: "block" }}>
      {veri.map((d, i) => {
        const h = (d.sayi / max) * Y;
        return <g key={d.gun}><title>{`${d.gun}: ${d.sayi} teşhis`}</title><rect x={i * b + 1} y={Y - h} width={Math.max(b - 2, 1)} height={h} rx="2" fill={BLUE} /></g>;
      })}
      <text x="0" y={Y + 15} fontSize="11" fill={SLATE}>{veri[0]?.gun}</text>
      <text x={G} y={Y + 15} fontSize="11" fill={SLATE} textAnchor="end">{veri[veri.length - 1]?.gun}</text>
      <text x={G} y="11" fontSize="11" fill={SLATE} textAnchor="end">en çok {max}</text>
    </svg>
  );
}

function Cubuklar({ baslik, veri }) {
  const max = Math.max(1, ...veri.map((d) => d[1]));
  return (
    <section style={kart}>
      <b style={{ color: INK, fontSize: 14 }}>{baslik}</b>
      {veri.length === 0 && <div style={{ color: SLATE, fontSize: 13, marginTop: 8 }}>Kayıt yok.</div>}
      {veri.map(([ad, n]) => (
        <div key={ad} style={{ marginTop: 8, fontSize: 13, color: INK }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ad}</span><b>{n}</b></div>
          <div style={{ height: 6, background: "#F1F5F9", borderRadius: 3, marginTop: 3 }}><div style={{ height: 6, width: `${(n / max) * 100}%`, background: BLUE, borderRadius: 3 }} /></div>
        </div>
      ))}
    </section>
  );
}

const Kutu = ({ ad, deger, alt }) => (
  <div style={kart}>
    <div style={{ fontSize: 12.5, color: SLATE, fontWeight: 600 }}>{ad}</div>
    <div style={{ fontSize: 26, color: INK, fontWeight: 800, fontFamily: "'Fraunces',serif" }}>{deger}</div>
    {alt && <div style={{ fontSize: 12.5, color: SLATE }}>{alt}</div>}
  </div>
);

export default function AdminTeshisPaneli({ sir, suzgec, onYetkisiz, onSecenek, yenile }) {
  const [v, setV] = useState(null);
  const [sayfa, setSayfa] = useState(1);
  const [durum, setDurum] = useState("yukleniyor");
  const [hata, setHata] = useState("");

  const cek = useCallback(async (ek) => {
    const r = await fetch(`/api/admin/teshis-pano?${apiSorgu(suzgec, ek)}`, { headers: { Authorization: `Bearer ${sir}` } });
    if (r.status === 401) { onYetkisiz?.(); return null; }
    const d = await r.json();
    if (!r.ok || !d.ok) throw new Error(d.error || "Veri alınamadı");
    return d;
  }, [sir, suzgec, onYetkisiz]);

  useEffect(() => { setSayfa(1); }, [suzgec]);
  useEffect(() => {
    let iptal = false;
    setDurum("yukleniyor"); setHata("");
    cek({ sayfa }).then((d) => { if (iptal || !d) return; setV(d); setDurum("bosta"); onSecenek?.(d.secenekler, d.okundu); })
      .catch((e) => { if (!iptal) { setHata(e.message); setDurum("hata"); } });
    return () => { iptal = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cek, sayfa, yenile]);

  if (durum === "hata") return <div style={{ color: "#DC2626", fontSize: 13.5 }}>{hata}</div>;
  if (!v) return <div style={{ color: SLATE, fontSize: 14 }}>Yükleniyor…</div>;

  const o = v.ozet, fark = o.toplam - o.onceki;
  const dosya = `teshis_${v.aralik.from}_${v.aralik.to}`;
  const tumSekme = async () => {
    const d = await cek({ hepsi: 1 });
    if (!d) return;
    excel([
      { ad: "Özet", basliklar: ["Ölçü", "Değer"], satirlar: [["Teşhis", o.toplam], ["Önceki dönem", o.onceki], ["Konumlu", o.konumlu], ["Konumsuz", o.konumsuz], ["Tamir önerisi", o.tamir], ["Yenisi önerisi", o.yenisi]] },
      { ad: "Günlük", basliklar: ["Gün", "Teşhis"], satirlar: v.gunluk.map((g) => [g.gun, g.sayi]) },
      ...v.pivotlar,
      { ad: "Listede olmayan markalar", basliklar: ["Marka", "Teşhis"], satirlar: v.listedeOlmayan },
      { ad: "Ham satırlar", basliklar: HAM_BASLIK, satirlar: d.hamHepsi.map(hamSatir) },
    ], dosya);
  };
  const hamTablo = async (tur) => {
    const d = await cek({ hepsi: 1 });
    if (!d) return;
    const t = { ad: "Ham satırlar", basliklar: HAM_BASLIK, satirlar: d.hamHepsi.map(hamSatir) };
    if (tur === "csv") csv(t, `${dosya}_ham`); else excel([t], `${dosya}_ham`);
  };
  const sonSayfa = Math.max(1, Math.ceil(v.ham.toplam / v.ham.boy));

  return (
    <div style={{ display: "grid", gap: 14, opacity: durum === "yukleniyor" ? 0.6 : 1 }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}><button style={{ ...dugme, fontSize: 14, padding: "8px 14px", background: BLUE, color: "#fff", border: "none" }} onClick={tumSekme}>Tüm sekmeyi Excel'e aktar</button></div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 10 }}>
        <Kutu ad="Teşhis" deger={o.toplam} alt={`Önceki dönem ${o.onceki} (${fark >= 0 ? "+" : ""}${fark})`} />
        <Kutu ad="Konumlu / konumsuz" deger={`${o.konumlu} / ${o.konumsuz}`} alt="İl bilgisi olan teşhisler" />
        <Kutu ad="Tamir / yenisi" deger={`${o.tamir} / ${o.yenisi}`} alt={o.tamirOran == null ? "Karar yok" : `Tamir oranı %${o.tamirOran}`} />
      </div>

      <section style={kart}><b style={{ color: INK, fontSize: 14 }}>Günlük teşhis</b><GunlukGrafik veri={v.gunluk} /></section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 10 }}>
        <Cubuklar baslik="İlk 10 marka" veri={v.ilk10Marka} />
        <Cubuklar baslik="İlk 10 arıza" veri={v.ilk10Ariza} />
      </div>

      <Tablo dosya={dosya} t={{ ad: "Listede olmayan markalar", basliklar: ["Marka", "Teşhis"], satirlar: v.listedeOlmayan }} />
      {v.pivotlar.map((t) => <Tablo key={t.ad} t={t} dosya={dosya} />)}

      <section style={{ ...kart, padding: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, padding: "10px 12px", flexWrap: "wrap" }}>
          <b style={{ color: INK, fontSize: 14 }}>Ham satırlar <span style={{ color: SLATE, fontWeight: 500 }}>({v.ham.toplam})</span></b>
          <span style={{ display: "flex", gap: 6 }}><button style={dugme} onClick={() => hamTablo("xlsx")}>Excel</button><button style={dugme} onClick={() => hamTablo("csv")}>CSV</button></span>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
            <thead><tr style={{ background: "#F1F5F9" }}>{["Tarih", "Cihaz", "Marka", "Yaş", "Arıza", "İl", "İlçe", "Maliyet", "Karar", "Aciliyet"].map((h) => <th key={h} style={thS}>{h}</th>)}</tr></thead>
            <tbody>{v.ham.satirlar.map((s, i) => (
              <tr key={i}>
                <td style={tdS}>{trTarih(s.created_at)}</td><td style={tdS}>{s.cihaz || "—"}</td><td style={tdS}>{s.marka || "—"}</td><td style={tdS}>{s.yas || "—"}</td><td style={tdS}>{s.ariza || "—"}</td>
                <td style={tdS}>{s.il || "—"}</td><td style={tdS}>{s.ilce || "—"}</td><td style={tdS}>{s.maliyet_min != null ? `${s.maliyet_min}–${s.maliyet_max}` : "—"}</td><td style={tdS}>{s.karar || "—"}</td><td style={tdS}>{s.aciliyet || "—"}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        {sonSayfa > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, padding: 10, fontSize: 13, color: SLATE }}>
            <button style={dugme} disabled={sayfa <= 1} onClick={() => setSayfa(sayfa - 1)}>Önceki</button>
            {sayfa} / {sonSayfa}
            <button style={dugme} disabled={sayfa >= sonSayfa} onClick={() => setSayfa(sayfa + 1)}>Sonraki</button>
          </div>
        )}
      </section>
    </div>
  );
}
