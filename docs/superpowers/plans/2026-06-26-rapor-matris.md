# Teşhis Raporu Matris — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/admin` raporunu "en çok" özetlerinden **ham veri matrisine** (Excel benzeri tablo + CSV export) çevir.

**Architecture:** Endpoint aralıktaki ham satırları (tarih desc, ≤5000) döndürür; sayfa bir `<table>` matrisinde gösterir + istemci-tarafı CSV indirir. Giriş/şifre/tarih filtresi/auth değişmez.

**Tech Stack:** React+Vite (inline stil), Vercel serverless (ESM), Supabase service-role.

> **NOT — test:** `node --check` + `vite build` + lokal handler testi (sahte sır + örnek satır) + preview (giriş ekranı). Authed happy-path (gerçek şifre) + dolu matris → kullanıcı canlıda doğrular (sır bende yok).

---

## File Structure
- **Modify `api/admin/rapor.js`** — ham satır döndür (top-N kaldır).
- **Modify `src/RaporPaneli.jsx`** — matris tablo + CSV (Tablo özet bileşeni kaldır).

---

### Task 1: `api/admin/rapor.js` — ham satır

**Files:** Modify `api/admin/rapor.js` (tam içerik değişimi)

- [ ] **Step 1: Dosyayı yeni içerikle değiştir**

`api/admin/rapor.js` TAMAMINI şununla değiştir:
```js
// api/admin/rapor.js — Teşhis raporu HAM VERİ matrisi (tarih aralıklı satırlar). ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Her teşhis = 1 satır, tarihe göre (yeni→eski), tavan 5000.
import supabase from "../_supabase.js";

function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Yalnızca GET" });
  if (!yetkiKontrol(req)) return res.status(401).json({ ok: false, error: "Yetkisiz — ADMIN_TOKEN hatalı" });

  const q = req.query || {};
  const today = new Date().toISOString().slice(0, 10);
  const def30 = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);
  const fromQ = isDate(q.from) ? q.from : def30;
  const toQ = isDate(q.to) ? q.to : today;

  try {
    const { data, error } = await supabase
      .from("teshis_log")
      .select("created_at,cihaz,marka,ariza,il,ilce,maliyet_min,maliyet_max,karar,aciliyet")
      .gte("created_at", `${fromQ}T00:00:00.000Z`)
      .lte("created_at", `${toQ}T23:59:59.999Z`)
      .order("created_at", { ascending: false })
      .limit(5000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const satirlar = data || [];
    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: satirlar.length,
      satirlar,
      kismi: satirlar.length >= 5000,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
```

- [ ] **Step 2: Syntax doğrula**

Run: `cd ~/Downloads/arizam-ne-app && node --check api/admin/rapor.js && echo OK`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add api/admin/rapor.js
git commit -m "feat: /api/admin/rapor ham satır matrisi döndürür (top-N kaldırıldı, tarih desc ≤5000)"
```

---

### Task 2: `src/RaporPaneli.jsx` — matris tablo + CSV

**Files:** Modify `src/RaporPaneli.jsx` (tam içerik değişimi)

- [ ] **Step 1: Dosyayı yeni içerikle değiştir**

`src/RaporPaneli.jsx` TAMAMINI şununla değiştir:
```jsx
// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin
// Şifre ile giriş (localStorage hatırlar) → tarih aralığı → "Raporu çek" → HAM VERİ MATRİSİ (Excel benzeri) + CSV.
// Sır = localStorage ya da ?token=. Sunucu Bearer (ADMIN_TOKEN/ADMIN_PASSWORD) kontrol eder.
import React, { useState, useEffect } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const LS_KEY = "benservis_admin";
const bugun = () => new Date().toISOString().slice(0, 10);
const gunOnce = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
const trTarih = (iso) => { if (!iso) return ""; const d = new Date(iso); return `${d.toLocaleDateString("tr-TR")} ${d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`; };

export default function RaporPaneli() {
  const urlToken = new URLSearchParams(window.location.search).get("token") || "";
  const [sir, setSir] = useState(() => localStorage.getItem(LS_KEY) || urlToken || "");
  const [girisInput, setGirisInput] = useState("");
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  const cek = async (token = sir, f = from, t = to) => {
    if (!token) return false;
    setDurum("yukleniyor"); setHata("");
    try {
      const r = await fetch(`/api/admin/rapor?from=${f}&to=${t}`, { headers: { Authorization: `Bearer ${token}` } });
      if (r.status === 401) {
        localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setDurum("bosta");
        setHata("Şifre hatalı, tekrar dene"); return false;
      }
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || "Rapor alınamadı");
      setRapor(d); setDurum("bosta"); return true;
    } catch (e) { setHata(e.message); setDurum("hata"); return false; }
  };

  useEffect(() => { if (sir) cek(sir); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giris = async () => {
    const t = girisInput.trim(); if (!t) return;
    setSir(t); const ok = await cek(t); if (ok) localStorage.setItem(LS_KEY, t);
  };
  const cikis = () => { localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setGirisInput(""); setHata(""); setDurum("bosta"); };

  const csvIndir = () => {
    if (!rapor?.satirlar?.length) return;
    const esc = (v) => { const s = v == null ? "" : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
    const head = ["Tarih", "Cihaz", "Marka", "Arıza", "İl", "İlçe", "MaliyetMin", "MaliyetMax", "Karar", "Aciliyet"];
    const lines = [head.join(",")];
    for (const s of rapor.satirlar) lines.push([trTarih(s.created_at), s.cihaz, s.marka, s.ariza, s.il, s.ilce, s.maliyet_min, s.maliyet_max, s.karar, s.aciliyet].map(esc).join(","));
    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `teshis-raporu_${rapor.aralik.from}_${rapor.aralik.to}.csv`;
    a.click(); URL.revokeObjectURL(a.href);
  };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", marginTop: 3 };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const thS = { padding: "8px 10px", color: SLATE, fontWeight: 700, whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}`, textAlign: "left" };
  const tdS = { padding: "7px 10px", color: INK, whiteSpace: "nowrap", borderBottom: "1px solid #F1F5F9" };

  // ── GİRİŞ EKRANI (sır yok) ──
  if (!sir) {
    return (
      <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
        <style>{FONT}</style>
        <div style={{ maxWidth: 340, margin: "70px auto 0", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: 24 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 16px" }}>Giriş için şifre.</p>
          <input type="password" value={girisInput} autoFocus
            onChange={(e) => setGirisInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && giris()}
            placeholder="Şifre"
            style={{ ...inputS, width: "100%", boxSizing: "border-box", marginTop: 0, marginBottom: 12 }} />
          <button onClick={giris} disabled={durum === "yukleniyor"} style={{ ...btnS, width: "100%" }}>
            {durum === "yukleniyor" ? "Kontrol ediliyor…" : "Giriş"}
          </button>
          {hata && <div style={{ color: "#DC2626", fontSize: 13, marginTop: 10, textAlign: "center" }}>{hata}</div>}
        </div>
      </div>
    );
  }

  // ── RAPOR EKRANI (sır var) ──
  const basliklar = ["Tarih", "Cihaz", "Marka", "Arıza", "İl", "İlçe", "Maliyet", "Karar", "Aciliyet"];
  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
            <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Ham veri matrisi · tarih aralığı seç, çek, Excel'e aktar.</p>
          </div>
          <button onClick={cikis} style={{ background: "none", border: `1px solid ${LINE}`, borderRadius: 8, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>Çıkış</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 16px" }}>
          <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Başlangıç
            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={inputS} /></label>
          <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Bitiş
            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={inputS} /></label>
          <button onClick={() => cek()} disabled={durum === "yukleniyor"} style={btnS}>
            {durum === "yukleniyor" ? "Çekiliyor…" : "Raporu çek"}
          </button>
        </div>

        {durum === "hata" && <div style={{ color: "#DC2626", fontSize: 13.5, marginBottom: 12 }}>{hata}</div>}

        {rapor && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
              <div style={{ fontSize: 14, color: INK }}><b>{rapor.toplam}</b> teşhis · <span style={{ color: SLATE }}>{rapor.aralik.from} → {rapor.aralik.to}</span></div>
              {rapor.toplam > 0 && (
                <button onClick={csvIndir} style={{ ...btnS, background: "#fff", color: BLUE, border: `1.5px solid ${BLUE}` }}>📥 Excel'e aktar (CSV)</button>
              )}
            </div>
            {rapor.kismi && <div style={{ fontSize: 12.5, color: "#9A3412", marginBottom: 10 }}>İlk 5000 satır gösteriliyor — daha fazlası için tarih aralığını daralt.</div>}
            {rapor.toplam === 0 ? (
              <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12 }}>Bu aralıkta kayıt yok.</div>
            ) : (
              <div style={{ overflowX: "auto", border: `1px solid ${LINE}`, borderRadius: 12, background: "#fff" }}>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: "#F1F5F9" }}>{basliklar.map((h) => <th key={h} style={thS}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {rapor.satirlar.map((s, i) => (
                      <tr key={i}>
                        <td style={tdS}>{trTarih(s.created_at)}</td>
                        <td style={tdS}>{s.cihaz || "—"}</td>
                        <td style={tdS}>{s.marka || "—"}</td>
                        <td style={tdS}>{s.ariza || "—"}</td>
                        <td style={tdS}>{s.il || "—"}</td>
                        <td style={tdS}>{s.ilce || "—"}</td>
                        <td style={tdS}>{s.maliyet_min != null ? `${s.maliyet_min}–${s.maliyet_max}` : "—"}</td>
                        <td style={tdS}>{s.karar || "—"}</td>
                        <td style={tdS}>{s.aciliyet || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Build doğrula**

Run: `cd ~/Downloads/arizam-ne-app && npx vite build 2>&1 | tail -3`
Expected: `✓ built in ...` (hata yok).

- [ ] **Step 3: Commit**

```bash
git add src/RaporPaneli.jsx
git commit -m "feat: rapor ham veri matrisi (tablo: Tarih/Cihaz/Marka/Arıza/İl/İlçe/Maliyet/Karar/Aciliyet) + CSV export"
```

---

### Task 3: Doğrulama + deploy

**Files:** yok

- [ ] **Step 1: Lokal endpoint testi (sahte sır + örnek satır → satirlar)**

```bash
cd ~/Downloads/arizam-ne-app
cat > _m.mjs <<'EOF'
import { readFileSync } from "fs";
readFileSync(".env.local","utf8").split("\n").forEach(l=>{const m=l.match(/^([A-Z_]+)=(.+)$/);if(m)process.env[m[1]]=m[2].trim();});
process.env.ADMIN_TOKEN="TEST-TOKEN";
const {createClient}=await import("@supabase/supabase-js");
const srv=createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const samples=[
 {cihaz:"Buzdolabı",marka:"Bosch",ariza:"MATRIS-TEST gaz kaçağı",maliyet_min:3000,maliyet_max:3500,karar:"tamir",aciliyet:"orta",il:"İstanbul",ilce:"Kadıköy"},
 {cihaz:"Çamaşır Makinesi",marka:"Arçelik",ariza:"MATRIS-TEST su almıyor",maliyet_min:2000,maliyet_max:2400,karar:"tamir",aciliyet:"düşük",il:"İzmir",ilce:"Konak"},
];
const ins=await srv.from("teshis_log").insert(samples).select("id"); const ids=(ins.data||[]).map(r=>r.id);
const h=(await import("./api/admin/rapor.js")).default;
const t=new Date().toISOString().slice(0,10);
const req={method:"GET",headers:{authorization:"Bearer TEST-TOKEN"},query:{from:t,to:t}};
const res={s:0,b:null,status(c){this.s=c;return this;},json(o){this.b=o;return this;},setHeader(){}};
await h(req,res);
console.log("HTTP:",res.s,"toplam:",res.b?.toplam);
console.log("ilk satır:",JSON.stringify(res.b?.satirlar?.[0]));
console.log("alanlar:",Object.keys(res.b?.satirlar?.[0]||{}).join(","));
await srv.from("teshis_log").delete().in("id",ids); console.log("temizlendi:",ids.length);
EOF
node _m.mjs 2>&1 | grep -v "NotOpenSSLWarning\|warnings.warn"; rm -f _m.mjs
```
Expected: `HTTP: 200 toplam: 2`; ilk satır `created_at,cihaz,marka,ariza,il,ilce,maliyet_min,maliyet_max,karar,aciliyet` alanlarını taşır; `temizlendi: 2`.

- [ ] **Step 2: Preview — giriş ekranı render**

Preview (`Vite Dev Server`) → `/admin` (localStorage temiz) → şifre ekranı görünür (matris kodu derlendi). (Dolu matris authed gerektirir → kullanıcı canlıda kendi şifresiyle görür.)

- [ ] **Step 3: Deploy (merge → main)**

```bash
cd ~/Downloads/arizam-ne-app
git checkout main && git merge --ff-only feat-rapor-matris && git push origin main
```

- [ ] **Step 4: Canlı kontrol (kullanıcı)**

`benservis.com/admin` → şifre → "Raporu çek" → **matris tablo** (veri varsa satırlar; yoksa "kayıt yok") → "📥 Excel'e aktar" → CSV iner, Excel'de Türkçe doğru. (Veri yoksa: 1 gerçek teşhis yap → tekrar çek.)

- [ ] **Step 5: Branch temizliği**

```bash
git branch -d feat-rapor-matris
```

---

## Kabul (spec ile)
- Her teşhis 1 satır, sütunlar Tarih/Cihaz/Marka/Arıza/İl/İlçe/Maliyet/Karar/Aciliyet, tarih desc ✓ Task 1-2, 3/Step 1
- "En çok" özet YOK ✓ Task 1-2
- CSV export (BOM, min/max ayrı) ✓ Task 2 (csvIndir)
- Boş → "kayıt yok"; >5000 → kısmi ✓ Task 2
- Giriş/şifre/tarih/auth değişmemiş ✓ Task 1 (auth), Task 2 (giriş korundu)
- vite build temiz ✓ Task 2/Step 2
