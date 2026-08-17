// src/TarifeAdmin.jsx — Tarife veri giriş + onay paneli. /tarife?token=ADMIN_TOKEN
import React, { useState, useEffect } from "react";
import { CIHAZLAR } from "./constants.js";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", GREEN = "#22C55E",
      SLATE = "#64748B", HAIR = "#E2E8F0", WHITE = "#fff";

function authToken() {
  return new URLSearchParams(window.location.search).get("token") || "";
}
async function api(path, opts = {}) {
  const res = await fetch(`/api/tarife/${path}`, {
    ...opts,
    headers: { "content-type": "application/json", authorization: `Bearer ${authToken()}`, ...(opts.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

const inp = { width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${HAIR}`, fontSize: 15, boxSizing: "border-box", fontFamily: "inherit" };
const btn = { background: BLUE, color: WHITE, border: "none", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, cursor: "pointer" };

// ── Veri giriş formu ──
function VeriGir() {
  const bos = { cihaz: "", marka: "", ariza: "", parca_tl: "", iscilik_tl: "", bolge: "", kaynak_servis: "", notlar: "" };
  const [f, setF] = useState(bos);
  const [mesaj, setMesaj] = useState("");
  const [importMesaj, setImportMesaj] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const gonder = async () => {
    setMesaj("");
    try {
      await api("veri", { method: "POST", body: JSON.stringify(f) });
      setMesaj("✓ Eklendi");
      setF({ ...bos, cihaz: f.cihaz, marka: f.marka });
    } catch (e) { setMesaj("✗ " + e.message); }
  };

  const importCSV = async (file) => {
    setImportMesaj("");
    const text = await file.text();
    const satirlar = text.split(/\r?\n/).filter((s) => s.trim());
    const basliklar = satirlar[0].split(",").map((s) => s.trim());
    const kayitlar = satirlar.slice(1).map((satir) => {
      const hucreler = satir.split(",");
      const o = {};
      basliklar.forEach((b, i) => { o[b] = (hucreler[i] || "").trim(); });
      return o;
    });
    try {
      const r = await api("veri", { method: "POST", body: JSON.stringify(kayitlar) });
      setImportMesaj(`✓ ${r.eklenen} kayıt eklendi`);
    } catch (e) { setImportMesaj("✗ " + e.message); }
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 460 }}>
      <select style={inp} value={f.cihaz} onChange={set("cihaz")}>
        <option value="">Cihaz seç…</option>
        {CIHAZLAR.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <input style={inp} placeholder="Marka (boş = Genel)" value={f.marka} onChange={set("marka")} />
      <input style={inp} placeholder="Arıza / parça (örn. Kompresör değişimi)" value={f.ariza} onChange={set("ariza")} />
      <div style={{ display: "flex", gap: 10 }}>
        <input style={inp} type="number" placeholder="Parça TL" value={f.parca_tl} onChange={set("parca_tl")} />
        <input style={inp} type="number" placeholder="İşçilik TL" value={f.iscilik_tl} onChange={set("iscilik_tl")} />
      </div>
      <input style={inp} placeholder="Bölge (örn. İstanbul)" value={f.bolge} onChange={set("bolge")} />
      <input style={inp} placeholder="Hangi servis" value={f.kaynak_servis} onChange={set("kaynak_servis")} />
      <input style={inp} placeholder="Not (ops.)" value={f.notlar} onChange={set("notlar")} />
      <button style={btn} onClick={gonder}>Ekle</button>
      {mesaj && <div style={{ color: mesaj[0] === "✓" ? GREEN : "#DC2626", fontWeight: 600 }}>{mesaj}</div>}

      <div style={{ borderTop: `1px solid ${HAIR}`, marginTop: 8, paddingTop: 14 }}>
        <div style={{ fontSize: 13, color: SLATE, marginBottom: 8 }}>
          CSV import (başlık: cihaz,marka,ariza,parca_tl,iscilik_tl,toplam_tl,bolge,kaynak_servis,notlar)
        </div>
        <input type="file" accept=".csv" onChange={(e) => e.target.files[0] && importCSV(e.target.files[0])} />
        {importMesaj && <div style={{ marginTop: 8, color: importMesaj[0] === "✓" ? GREEN : "#DC2626", fontWeight: 600 }}>{importMesaj}</div>}
      </div>
    </div>
  );
}

// ── Onay ekranı ──
// Alan adları — hem farkı göstermek hem de zorunluluk denetimi için tek kaynak.
const ALAN_ADI = {
  onayli_parca_min: "Parça min", onayli_parca_max: "Parça max",
  onayli_iscilik: "İşçilik", onayli_beklenen: "Beklenen toplam",
};
// ⛔ SNAPSHOT ZORUNLULARI: scripts/tarife-snapshot.mjs bu üçünden biri null olan satırı ATLAR
// → kayıt src/tarife-seed.js'ten tamamen düşer ve teşhis motoru o arıza için fiyat gösteremez.
// (3 Ağu 2026 IT bulgusu; "Buzdolabı · Kompresör değişimi" tam bu tuzağa düşüyordu.)
const ZORUNLU = ["onayli_parca_min", "onayli_parca_max", "onayli_iscilik"];
// YK #15 (23 Tem 2026): her düzeltme ÇOK KAYNAK + insan onayı ister — tek kaynakla asla.
// Kayda yazılacak nokta sayısı bu ifadeyle belirlenir (onayla() ile birebir aynı olmalı).
const noktaSayisi = (g) => g.nokta || g.mevcut?.veri_noktasi_sayisi || 0;
const TEK_KAYNAK_ESIGI = 2;
const bosMu = (v) => v == null || String(v).trim() === "";
const sayi = (v) => (bosMu(v) ? null : Number(v));
const formDegerleri = (kaynak) => ({
  onayli_parca_min: kaynak?.onayli_parca_min ?? "", onayli_parca_max: kaynak?.onayli_parca_max ?? "",
  onayli_iscilik: kaynak?.onayli_iscilik ?? "", onayli_beklenen: kaynak?.onayli_beklenen ?? "",
});
const eksikler = (d) => ZORUNLU.filter((k) => bosMu(d[k])).map((k) => ALAN_ADI[k]);
const farklar = (mevcut, d) =>
  Object.keys(ALAN_ADI)
    .filter((k) => sayi(mevcut?.[k]) !== sayi(d[k]))
    .map((k) => ({ alan: ALAN_ADI[k], eski: sayi(mevcut?.[k]), yeni: sayi(d[k]) }));

function Onayla() {
  const [gruplar, setGruplar] = useState(null);
  const [hata, setHata] = useState("");
  const [acik, setAcik] = useState(null);
  const [duzen, setDuzen] = useState({});

  const yukle = async () => {
    setHata("");
    try { const r = await api("gruplar"); setGruplar(r.gruplar); }
    catch (e) { setHata(e.message); }
  };
  useEffect(() => { yukle(); }, []);

  const grupKey = (g) => `${g.cihaz}|${g.marka}|${g.ariza}`;
  // ⛔ Form DAİMA mevcut onaylı bantla açılır — web önerisi forma OTOMATİK basılmaz.
  // Eski davranış (`g.oneri || g.mevcut`) kullanıcıya "bandı gözden geçiriyorum" dedirtirken
  // aslında web taslağını onaylatıyordu (3 Ağu IT bulgusu).
  const ac = (g) => {
    const k = grupKey(g);
    setAcik(acik === k ? null : k);
    setDuzen({ ...duzen, [k]: formDegerleri(g.mevcut) });
  };
  const oneriyiUygula = (g) => {
    const k = grupKey(g);
    setDuzen({ ...duzen, [k]: formDegerleri(g.oneri) });
  };
  const onayla = async (g) => {
    const k = grupKey(g);
    const d = duzen[k] || {};
    // Düğme zaten pasif, ama kayıt kaybı geri alınamaz — ikinci kapı burada.
    if (eksikler(d).length) return setHata("Zorunlu alan boş: " + eksikler(d).join(", "));
    try {
      await api("onayla", { method: "POST", body: JSON.stringify({
        cihaz: g.cihaz, marka: g.marka, ariza: g.ariza,
        // Ham veri yoksa öneri de yok — mevcut kaydın güveni/nokta sayısı sıfırlanmasın.
        veri_noktasi_sayisi: noktaSayisi(g),
        guven: g.oneri?.guven || g.mevcut?.guven || undefined,
        ...d,
      })});
      await yukle();
      setAcik(null);
    } catch (e) { setHata(e.message); }
  };

  if (hata) return <div style={{ color: "#DC2626" }}>{hata}</div>;
  if (!gruplar) return <div style={{ color: SLATE }}>Yükleniyor…</div>;

  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 620 }}>
      {gruplar.map((g) => {
        const k = grupKey(g);
        const d = duzen[k] || {};
        const set = (key) => (e) => setDuzen({ ...duzen, [k]: { ...d, [key]: e.target.value } });
        return (
          <div key={k} style={{ background: WHITE, border: `1px solid ${HAIR}`, borderRadius: 10, padding: "12px 14px" }}>
            <div onClick={() => ac(g)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 8 }}>
              <div>
                <strong style={{ color: INK }}>{g.cihaz}</strong> · {g.ariza}
                {g.marka !== "Genel" && <span style={{ color: SLATE }}> ({g.marka})</span>}
                <div style={{ fontSize: 12, color: SLATE }}>{g.nokta} veri noktası</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {g.oneri?.guven && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                    background: g.oneri.guven === "yuksek" ? "#DCFCE7" : g.oneri.guven === "orta" ? "#FEF9C3" : "#FEE2E2",
                    color: g.oneri.guven === "yuksek" ? "#166534" : g.oneri.guven === "orta" ? "#854D0E" : "#991B1B" }}>
                    güven: {g.oneri.guven}
                  </span>
                )}
                <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                  background: g.durum === "onayli" ? "#DCFCE7" : "#F1F5F9", color: g.durum === "onayli" ? "#166534" : SLATE }}>
                  {g.durum === "onayli" ? "ONAYLI" : g.durum === "taslak" ? "TASLAK" : "YENİ"}
                </span>
              </div>
            </div>
            {acik === k && (() => {
              const eksik = eksikler(d);
              const fark = farklar(g.mevcut, d);
              const nokta = noktaSayisi(g);
              const tekKaynak = nokta < TEK_KAYNAK_ESIGI;
              const yaz = (v) => (v == null ? "—" : v);
              // İkisi de boşken "———" gibi okunmaz bir bant basmayalım.
              const bant = (min, max) => (min == null && max == null ? "yok" : `${yaz(min)}–${yaz(max)}`);
              return (
              <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                <div style={{ fontSize: 12, color: SLATE }}>
                  {g.mevcut
                    ? <>Form <strong style={{ color: INK }}>mevcut onaylı bantla</strong> dolu: parça {bant(g.mevcut.onayli_parca_min, g.mevcut.onayli_parca_max)}, işçilik {yaz(g.mevcut.onayli_iscilik)}, beklenen {yaz(g.mevcut.onayli_beklenen)}</>
                    : <>Bu grubun <strong style={{ color: INK }}>onaylı kaydı yok</strong> — form boş açıldı.</>}
                </div>

                {/* YK #15: tek kaynakla bant düzeltilmez. Kaydı teknik olarak engellemiyoruz
                    (kararı kurucu verir) ama körlemesine onay için görünür kapı koyuyoruz. */}
                {tekKaynak && (
                  <div style={{ fontSize: 12.5, color: "#9A3412", background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 8, padding: "8px 11px" }}>
                    <strong>⚠ Tek kaynak ({nokta} veri noktası) — YK #15 gereği onaylanmaz.</strong>{" "}
                    Bant düzeltmesi çok kaynaklı veri ister; tek kaynakla ne yükseltilir ne düşürülür.
                    {fark.length > 0
                      ? " Aşağıdaki değişikliği kaydetmeden önce 2. bağımsız kaynağı bul."
                      : " Bandı olduğu gibi bırak; 2. bağımsız kaynak gelene kadar bu kaydı açma."}
                  </div>
                )}

                {/* Web önerisi SALT OKUNUR — forma ancak düğmeyle taşınır (3 Ağu düzeltmesi). */}
                {g.oneri && (
                  <div style={{ background: PAPER, border: `1px solid ${HAIR}`, borderRadius: 8, padding: "9px 11px", display: "grid", gap: 7 }}>
                    <div style={{ fontSize: 12, color: SLATE }}>
                      <strong style={{ color: INK }}>Web diyor ki</strong> ({g.nokta} veri noktası): parça {bant(g.oneri.onayli_parca_min, g.oneri.onayli_parca_max)}, işçilik {yaz(g.oneri.onayli_iscilik)}, beklenen {yaz(g.oneri.onayli_beklenen)}
                    </div>
                    <button
                      onClick={() => oneriyiUygula(g)}
                      style={{ ...btn, background: WHITE, color: BLUE, border: `1px solid ${HAIR}`, padding: "7px 12px", fontSize: 13, justifySelf: "start" }}
                    >Öneriyi forma uygula</button>
                  </div>
                )}

                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="Parça min" value={d.onayli_parca_min} onChange={set("onayli_parca_min")} />
                  <input style={inp} type="number" placeholder="Parça max" value={d.onayli_parca_max} onChange={set("onayli_parca_max")} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="İşçilik" value={d.onayli_iscilik} onChange={set("onayli_iscilik")} />
                  <input style={inp} type="number" placeholder="Beklenen toplam" value={d.onayli_beklenen} onChange={set("onayli_beklenen")} />
                </div>

                {/* Kaydetmeden önce mevcut → yeni farkı. */}
                {fark.length > 0 && (
                  <div style={{ fontSize: 12.5, color: INK, background: "#FEF9C3", border: "1px solid #FDE68A", borderRadius: 8, padding: "8px 11px" }}>
                    <div style={{ fontWeight: 700, marginBottom: 3 }}>Kaydedilecek değişiklik</div>
                    {fark.map((f) => (
                      <div key={f.alan}>{f.alan}: <span style={{ color: SLATE }}>{yaz(f.eski)}</span> → <strong>{yaz(f.yeni)}</strong></div>
                    ))}
                  </div>
                )}

                {eksik.length > 0 && (
                  <div style={{ fontSize: 12.5, color: "#991B1B", background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: 8, padding: "8px 11px" }}>
                    <strong>{eksik.join(", ")}</strong> boş bırakılamaz — bu hâliyle kaydedilirse kayıt snapshot'ta düşer ve teşhis motoru bu arıza için fiyat gösteremez. Bedelsiz iş için <strong>0</strong> yaz.
                  </div>
                )}

                <button
                  style={{ ...btn, ...(eksik.length ? { background: HAIR, color: SLATE, cursor: "not-allowed" } : {}) }}
                  disabled={eksik.length > 0}
                  onClick={() => onayla(g)}
                >Onayla</button>
              </div>
              );
            })()}
          </div>
        );
      })}
    </div>
  );
}

export default function TarifeAdmin() {
  const [tab, setTab] = useState("gir");
  if (!authToken()) return <div style={{ padding: 40, fontFamily: "sans-serif" }}>Yetkisiz — URL'ye ?token=… ekleyin.</div>;
  const tabBtn = (id, label) => (
    <button onClick={() => setTab(id)} style={{
      ...btn, background: tab === id ? INK : WHITE, color: tab === id ? WHITE : INK,
      border: `1px solid ${tab === id ? INK : HAIR}`,
    }}>{label}</button>
  );
  return (
    <div style={{ minHeight: "100vh", background: PAPER, color: INK, fontFamily: "'Hanken Grotesk', sans-serif", padding: "28px 20px" }}>
      
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>Tarife Veri Motoru</h1>
      <p style={{ color: SLATE, fontSize: 14, marginTop: 0 }}>Saha verisi gir · harmanlanan tarifeyi onayla</p>
      <div style={{ display: "flex", gap: 10, margin: "16px 0 22px" }}>{tabBtn("gir", "Veri Gir")}{tabBtn("onay", "Onayla")}</div>
      {tab === "gir" ? <VeriGir /> : <Onayla />}
    </div>
  );
}
