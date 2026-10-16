// src/AdminSiparisPaneli.jsx — /admin "Siparişler" sekmesi (16 Eki 2026).
// Tolga: "buldum en alttaymış, onu ayrı bir sekme olarak koy, ürün sayısı artınca nasıl bulacağız?"
// Önceden Pazar sekmesinin en altındaydı (108+ ürünün ardından) ve yalnız havale bekleyen siparişte İptal vardı.
// • Durum süzgeci (ödeme bekliyor · ödendi · iptal · tümü) + sipariş no / alıcı adı araması, en yeni üstte, sayfalı.
// • "Havale bekleyenler" kutusu buraya taşındı (YK #174 akışı aynen: Ödeme geldi / İptal).
// • Ödenmemiş HER siparişte İptal (kart, havale, test); ödenmiş siparişte iptal yok.
// • Telefon "0532 123 45 67" biçiminde ve aranabilir bağlantı; saklanan veri değişmez.
// Uç: /api/admin/pazar?islem=siparisler · ?islem=iptal · ?islem=havale. Alıcı verisi analitiğe yazılmaz.
import React, { useState, useEffect } from "react";
import { NAVY as INK, BLUE, SLATE, HAIR as LINE, GREEN_DEEP, RED } from "./theme.js";
import { havaleSonu } from "./havale.js";
import { telBicimle, telHref } from "./telefon.js";

export const SUZGECLER = [["bekliyor", "Ödeme bekliyor"], ["odendi", "Ödendi"], ["iptal", "İptal"], ["tumu", "Tümü"]];
export const IPTAL_EDILEBILIR = ["odeme_bekleniyor", "odeme_basarisiz"];
const DURUM_AD = {
  odeme_bekleniyor: "Ödeme bekliyor", odeme_basarisiz: "Ödeme başarısız", odendi: "Ödendi",
  teslim_onaylandi: "Teslim onaylandı", iptal: "İptal",
};
const DURUM_RENK = { odendi: GREEN_DEEP, teslim_onaylandi: GREEN_DEEP, iptal: SLATE, odeme_basarisiz: RED };
const tl = (n) => `${Number(n || 0).toLocaleString("tr-TR")} TL`;
const trTarih = (iso) => (iso ? new Date(iso).toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" }) : "");

function Tel({ no }) {
  const href = telHref(no);
  const metin = telBicimle(no);
  return href ? <a href={href} style={{ color: BLUE, textDecoration: "none", whiteSpace: "nowrap" }}>{metin}</a> : <span>{metin}</span>;
}

export default function AdminSiparisPaneli({ sir, onYetkisiz }) {
  const [durum, setDurum] = useState("bekliyor");
  const [araMetni, setAraMetni] = useState("");
  const [ara, setAra] = useState("");
  const [sayfa, setSayfa] = useState(1);
  const [veri, setVeri] = useState(null);
  const [havale, setHavale] = useState([]);
  const [yuk, setYuk] = useState(false);
  const [hata, setHata] = useState("");

  const istek = async (yol, secenek = {}) => {
    const r = await fetch(yol, {
      ...secenek,
      headers: { Authorization: `Bearer ${sir}`, "Content-Type": "application/json", ...(secenek.headers || {}) },
    });
    if (r.status === 401) { onYetkisiz?.(); throw new Error("Şifre hatalı"); }
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(d.error || `Hata ${r.status}`);
    return d;
  };

  const getir = async () => {
    setYuk(true); setHata("");
    try {
      const q = new URLSearchParams({ islem: "siparisler", durum, sayfa: String(sayfa) });
      if (ara) q.set("ara", ara);
      const [liste, bekleyen] = await Promise.all([
        istek(`/api/admin/pazar?${q}`),
        istek("/api/admin/pazar?islem=siparisler&durum=bekliyor&sayfa=1"),
      ]);
      setVeri(liste);
      setHavale((bekleyen.siparisler || []).filter((s) => s.odeme_saglayici === "havale" && s.odeme_durumu === "odeme_bekleniyor"));
    } catch (e) { setHata(e.message); }
    finally { setYuk(false); }
  };
  useEffect(() => { getir(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durum, ara, sayfa]);

  const islem = async (soru, yol, govde) => {
    if (!window.confirm(soru)) return;
    setHata("");
    try {
      await istek(yol, { method: "PATCH", body: JSON.stringify(govde) });
      await getir();
    } catch (e) { setHata(e.message); }
  };
  const havaleSonuc = (s, sonuc) => islem(
    sonuc === "geldi"
      ? `${s.siparis_no} · ${tl(s.tutar)} hesaba geçti mi? Sipariş ödendi olarak işaretlenecek.`
      : `${s.siparis_no} iptal edilsin mi? İkinci el ayırması kalkar.`,
    "/api/admin/pazar?islem=havale", { siparis_id: s.id, sonuc },
  );
  const iptal = (s) => islem(
    `${s.siparis_no || s.id.slice(0, 8)} · ${tl(s.tutar)} iptal edilsin mi? İkinci el ayırması kalkar. Bu işlem geri alınmaz.`,
    "/api/admin/pazar?islem=iptal", { siparis_id: s.id },
  );

  const aramaGonder = (e) => { e.preventDefault(); setSayfa(1); setAra(araMetni.trim()); };
  const suzgecSec = (k) => { setSayfa(1); setDurum(k); };

  const siparisler = veri?.siparisler || [];
  const toplam = veri?.toplam ?? null;
  const boy = veri?.sayfa_boyu || 50;
  const sonSayfa = toplam == null ? sayfa : Math.max(1, Math.ceil(toplam / boy));

  const kartS = { background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16 };
  const kucukBtn = { background: "none", border: `1px solid ${LINE}`, borderRadius: 7, padding: "6px 11px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit" };
  const h2S = { fontFamily: "'Fraunces',serif", fontSize: 18, color: INK, margin: 0 };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 16 }}>
      {/* ── HAVALE BEKLEYENLER (YK #174) — süzgeçten bağımsız, hep üstte ── */}
      {havale.length > 0 && (
        <div style={{ ...kartS, borderColor: BLUE }}>
          <h2 style={{ ...h2S, marginBottom: 4 }}>Havale bekleyenler <span style={{ color: SLATE, fontSize: 14 }}>({havale.length})</span></h2>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 10px" }}>Banka hesabında açıklamadaki sipariş numarasını ve tutarı kontrol et.</p>
          {havale.map((s) => (
            <div key={s.id} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, padding: "9px 0", borderTop: `1px solid ${LINE}` }}>
              <div style={{ flex: "1 1 220px", fontSize: 13, color: INK }}>
                <strong>{s.siparis_no}</strong> · {tl(s.tutar)}<br />
                <span style={{ color: SLATE }}>{s.alici_ad} · <Tel no={s.alici_tel} /> · son ödeme {trTarih(havaleSonu(s.created_at).toISOString())}</span>
              </div>
              <button type="button" onClick={() => havaleSonuc(s, "geldi")} style={{ padding: "7px 14px", background: GREEN_DEEP, color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Ödeme geldi</button>
              <button type="button" onClick={() => havaleSonuc(s, "iptal")} style={{ ...kucukBtn, color: RED }}>İptal</button>
            </div>
          ))}
        </div>
      )}

      {/* ── SİPARİŞ LİSTESİ ── */}
      <div style={kartS}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          <h2 style={h2S}>Siparişler {toplam != null && <span style={{ color: SLATE, fontSize: 14 }}>({toplam})</span>}</h2>
          <button type="button" onClick={getir} disabled={yuk} style={kucukBtn}>{yuk ? "Yükleniyor…" : "Yenile"}</button>
        </div>

        <div role="group" aria-label="Durum süzgeci" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
          {SUZGECLER.map(([k, ad]) => (
            <button key={k} type="button" aria-pressed={durum === k} onClick={() => suzgecSec(k)}
              style={{ ...kucukBtn, ...(durum === k ? { color: BLUE, border: `1px solid ${BLUE}`, background: "rgba(37,99,235,.08)" } : {}) }}>{ad}</button>
          ))}
        </div>
        <form onSubmit={aramaGonder} role="search" style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          <input type="search" value={araMetni} onChange={(e) => setAraMetni(e.target.value)} maxLength={60}
            placeholder="Sipariş no ya da alıcı adı" aria-label="Siparişlerde ara"
            style={{ flex: 1, minWidth: 0, padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 16, fontFamily: "inherit", color: INK }} />
          <button type="submit" style={{ ...kucukBtn, color: INK }}>Ara</button>
          {ara && <button type="button" onClick={() => { setAraMetni(""); setAra(""); setSayfa(1); }} style={kucukBtn}>Temizle</button>}
        </form>

        {hata && <div style={{ color: RED, fontSize: 13, marginBottom: 8 }}>{hata}</div>}
        {siparisler.length === 0 ? (
          <div style={{ color: SLATE, fontSize: 14, padding: "8px 0" }}>{yuk ? "Yükleniyor…" : "Bu süzgeçte sipariş yok."}</div>
        ) : (
          <div style={{ display: "grid" }}>
            {siparisler.map((s) => (
              <div key={s.id} data-siparis={s.siparis_no || s.id} style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", alignItems: "flex-start", padding: "10px 0", borderTop: `1px solid ${LINE}`, fontSize: 13, color: INK }}>
                <div style={{ flex: "1 1 160px", minWidth: 0 }}>
                  <strong>{s.siparis_no || s.id.slice(0, 8)}</strong>
                  {s.odeme_test && <span style={{ marginLeft: 6, fontSize: 11, color: SLATE, border: `1px solid ${LINE}`, borderRadius: 5, padding: "1px 5px" }}>test</span>}
                  <div style={{ color: SLATE }}>{trTarih(s.created_at)}</div>
                </div>
                <div style={{ flex: "1 1 160px", minWidth: 0 }}>
                  {s.alici_ad}<br /><Tel no={s.alici_tel} />
                </div>
                <div style={{ flex: "2 1 220px", minWidth: 0 }}>
                  {(s.urunler || []).map((k, i) => (
                    <div key={i}>{k.baslik} <span style={{ color: SLATE }}>· {k.satici_tur === "benservis" ? "Benservis" : k.servis_ad || "servis"}</span></div>
                  ))}
                </div>
                <div style={{ flex: "0 0 170px", textAlign: "right", marginLeft: "auto" }}>
                  <b>{tl(s.tutar)}</b>
                  <div style={{ color: DURUM_RENK[s.odeme_durumu] || SLATE, fontWeight: 600 }}>
                    {DURUM_AD[s.odeme_durumu] || s.odeme_durumu}{s.odeme_saglayici === "havale" ? " · havale" : ""}
                  </div>
                  {IPTAL_EDILEBILIR.includes(s.odeme_durumu) && (
                    <button type="button" onClick={() => iptal(s)} style={{ ...kucukBtn, color: RED, marginTop: 6 }}>İptal</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {sonSayfa > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginTop: 12, fontSize: 13, color: SLATE }}>
            <button type="button" disabled={sayfa <= 1 || yuk} onClick={() => setSayfa((x) => x - 1)} style={kucukBtn}>‹ Önceki</button>
            <span>{sayfa} / {sonSayfa}</span>
            <button type="button" disabled={sayfa >= sonSayfa || yuk} onClick={() => setSayfa((x) => x + 1)} style={kucukBtn}>Sonraki ›</button>
          </div>
        )}
      </div>
    </div>
  );
}
