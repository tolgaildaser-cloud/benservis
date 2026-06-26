# Admin Rapor Sayfası (Faz 1) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** İstenildiği zaman çalıştırılan, tarih-aralıklı teşhis raporu — `/api/admin/rapor` ucu + `/admin` sayfası (`RaporPaneli.jsx`).

**Architecture:** ADMIN_TOKEN korumalı GET ucu `teshis_log`'u tarih aralığında çeker → JS ile toplar (en çok marka/arıza/il-ilçe/maliyet/karar) → JSON. `/admin` sayfası `?token=` ile açılır, tarih seç → "Raporu çek" → tablolar. Mevcut `/servis-admin` + ADMIN_TOKEN deseni birebir.

**Tech Stack:** React+Vite (inline stil), Vercel serverless (ESM), Supabase service-role (`api/_supabase.js`).

> **NOT — test:** Proje test runner'ı YOK; doğrulama = `node --check` + `vite build` + lokal handler testi (sahte ADMIN_TOKEN) + preview. Gerçek ADMIN_TOKEN ile canlı authed kontrolü kullanıcı yapar (token sır → sohbete girmez).

---

## File Structure
- **Create `api/admin/rapor.js`** — GET rapor ucu (ADMIN_TOKEN, tarih aralığı, JS-aggregate).
- **Create `src/RaporPaneli.jsx`** — rapor sayfası (tarih seçici + tablolar).
- **Modify `src/main.jsx`** — `/admin` route.

---

### Task 1: `api/admin/rapor.js` — rapor ucu

**Files:** Create `api/admin/rapor.js`

- [ ] **Step 1: Ucu yaz**

`api/admin/rapor.js`:
```js
// api/admin/rapor.js — Teşhis raporu (tarih aralıklı toplamlar). ADMIN_TOKEN korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Anonim teshis_log üzerinden JS-aggregate (v1).
import supabase from "../_supabase.js";

function yetkiKontrol(req) {
  const t = process.env.ADMIN_TOKEN;
  return !!t && (req.headers["authorization"] || "") === `Bearer ${t}`;
}
const top = (rows, key, n = 15) => {
  const m = {};
  for (const r of rows) { const v = r[key]; if (v) m[v] = (m[v] || 0) + 1; }
  return Object.entries(m).map(([ad, adet]) => ({ ad, adet })).sort((a, b) => b.adet - a.adet).slice(0, n);
};

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
      .select("cihaz,marka,ariza,maliyet_min,maliyet_max,karar,aciliyet,il,ilce")
      .gte("created_at", `${fromQ}T00:00:00.000Z`)
      .lte("created_at", `${toQ}T23:59:59.999Z`)
      .limit(50000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const rows = data || [];

    const dagit = (key) => rows.reduce((a, r) => { const v = r[key] || "—"; a[v] = (a[v] || 0) + 1; return a; }, {});
    const mins = rows.map((r) => r.maliyet_min).filter((x) => x != null);
    const maxs = rows.map((r) => r.maliyet_max).filter((x) => x != null);
    const ort = (a) => (a.length ? Math.round(a.reduce((s, x) => s + x, 0) / a.length) : null);
    const maliyet = mins.length
      ? { ortMin: ort(mins), ortMax: ort(maxs), min: Math.min(...mins), max: Math.max(...maxs) }
      : null;

    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: rows.length,
      marka: top(rows, "marka"),
      ariza: top(rows, "ariza"),
      cihaz: top(rows, "cihaz", 20),
      il: top(rows, "il"),
      ilce: top(rows, "ilce"),
      karar: dagit("karar"),
      aciliyet: dagit("aciliyet"),
      maliyet,
      kismi: rows.length >= 50000,
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
git commit -m "feat: /api/admin/rapor — tarih aralıklı teşhis raporu (ADMIN_TOKEN, JS-aggregate)"
```

---

### Task 2: `src/RaporPaneli.jsx` — rapor sayfası

**Files:** Create `src/RaporPaneli.jsx`

- [ ] **Step 1: Sayfayı yaz**

`src/RaporPaneli.jsx`:
```jsx
// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin?token=ADMIN_TOKEN
// Tarih aralığı seç → "Raporu çek" → en çok marka/arıza/il-ilçe/maliyet/karar tabloları.
import React, { useState } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const bugun = () => new Date().toISOString().slice(0, 10);
const gunOnce = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

function Tablo({ baslik, satirlar, toplam }) {
  const max = Math.max(1, ...satirlar.map((s) => s.adet));
  return (
    <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16, marginBottom: 14 }}>
      <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: INK, margin: "0 0 10px" }}>{baslik}</h3>
      {satirlar.length === 0 ? <div style={{ color: SLATE, fontSize: 13 }}>—</div> :
        satirlar.map((s) => (
          <div key={s.ad} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, color: INK, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.ad}</div>
              <div style={{ height: 5, background: "#EFF6FF", borderRadius: 3, marginTop: 3 }}>
                <div style={{ height: "100%", width: `${(s.adet / max) * 100}%`, background: BLUE, borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: BLUE, minWidth: 44, textAlign: "right" }}>
              {s.adet}{toplam ? <span style={{ color: SLATE, fontWeight: 400, fontSize: 11 }}> ·%{Math.round((s.adet / toplam) * 100)}</span> : null}
            </div>
          </div>
        ))}
    </div>
  );
}

export default function RaporPaneli() {
  const adminToken = new URLSearchParams(window.location.search).get("token") || "";
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  const cek = async () => {
    setDurum("yukleniyor"); setHata("");
    try {
      const r = await fetch(`/api/admin/rapor?from=${from}&to=${to}`, { headers: { Authorization: `Bearer ${adminToken}` } });
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || (r.status === 401 ? "Yetkisiz — admin token hatalı" : "Rapor alınamadı"));
      setRapor(d); setDurum("bosta");
    } catch (e) { setHata(e.message); setDurum("hata"); }
  };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", marginTop: 3 };
  const dagitSatir = (obj) => Object.entries(obj || {}).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join("  ·  ") || "—";

  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
        <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Anonim teşhis istatistikleri · tarih aralığı seç, çek.</p>

        {!adminToken && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", borderRadius: 10, padding: 12, fontSize: 13.5 }}>
            Erişim için URL'ye token ekleyin: <code>/admin?token=ADMIN_TOKEN</code>
          </div>
        )}

        {adminToken && (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 18px" }}>
              <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Başlangıç
                <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={inputS} /></label>
              <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Bitiş
                <input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={inputS} /></label>
              <button onClick={cek} disabled={durum === "yukleniyor"} style={{ padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                {durum === "yukleniyor" ? "Çekiliyor…" : "Raporu çek"}
              </button>
            </div>

            {durum === "hata" && <div style={{ color: "#DC2626", fontSize: 13.5, marginBottom: 12 }}>{hata}</div>}

            {rapor && (
              <>
                <div style={{ background: INK, color: "#fff", borderRadius: 12, padding: "14px 16px", marginBottom: 14 }}>
                  <div style={{ fontSize: 13, opacity: .8 }}>{rapor.aralik.from} → {rapor.aralik.to}</div>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: 28, fontWeight: 700 }}>{rapor.toplam} <span style={{ fontSize: 14, fontWeight: 400, opacity: .8 }}>teşhis</span></div>
                </div>
                {rapor.toplam === 0 ? (
                  <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24 }}>Bu aralıkta kayıt yok.</div>
                ) : (
                  <>
                    <Tablo baslik="En çok marka" satirlar={rapor.marka} toplam={rapor.toplam} />
                    <Tablo baslik="En çok arıza" satirlar={rapor.ariza} toplam={rapor.toplam} />
                    <Tablo baslik="Cihaz dağılımı" satirlar={rapor.cihaz} toplam={rapor.toplam} />
                    <Tablo baslik="En çok il" satirlar={rapor.il} toplam={rapor.toplam} />
                    <Tablo baslik="En çok ilçe" satirlar={rapor.ilce} toplam={rapor.toplam} />
                    <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16, marginBottom: 14 }}>
                      <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: INK, margin: "0 0 8px" }}>Karar / Aciliyet / Maliyet</h3>
                      <div style={{ fontSize: 13.5, color: INK, marginBottom: 6 }}><b>Karar:</b> {dagitSatir(rapor.karar)}</div>
                      <div style={{ fontSize: 13.5, color: INK, marginBottom: 6 }}><b>Aciliyet:</b> {dagitSatir(rapor.aciliyet)}</div>
                      <div style={{ fontSize: 13.5, color: INK }}><b>Maliyet:</b> {rapor.maliyet ? `ort. ${rapor.maliyet.ortMin}–${rapor.maliyet.ortMax} TL · genel ${rapor.maliyet.min}–${rapor.maliyet.max} TL` : "—"}</div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/RaporPaneli.jsx
git commit -m "feat: RaporPaneli — /admin teşhis rapor sayfası (tarih aralığı + tablolar)"
```

---

### Task 3: `src/main.jsx` — `/admin` route

**Files:** Modify `src/main.jsx`

- [ ] **Step 1: Import ekle**

BUL: `import ServisAdmin from "./ServisAdmin.jsx";`
ALTINA EKLE: `import RaporPaneli from "./RaporPaneli.jsx";`

- [ ] **Step 2: Route bayrağı ekle**

BUL: `const isServisAdmin = path === "/servis-admin";`
ALTINA EKLE: `const isAdmin       = path === "/admin";`

- [ ] **Step 3: Render zincirine ekle**

BUL:
```jsx
     isServisAdmin  ? <ServisAdmin />                   :
```
ALTINA EKLE:
```jsx
     isAdmin        ? <RaporPaneli />                   :
```

- [ ] **Step 4: Build doğrula**

Run: `cd ~/Downloads/arizam-ne-app && npx vite build 2>&1 | tail -3`
Expected: `✓ built in ...` (hata yok).

- [ ] **Step 5: Commit**

```bash
git add src/main.jsx
git commit -m "feat: /admin route → RaporPaneli"
```

---

### Task 4: Doğrulama + deploy

**Files:** yok

- [ ] **Step 1: Lokal endpoint testi (sahte ADMIN_TOKEN + örnek satır)**

```bash
cd ~/Downloads/arizam-ne-app
cat > _r.mjs <<'EOF'
import { readFileSync } from "fs";
readFileSync(".env.local","utf8").split("\n").forEach(l=>{const m=l.match(/^([A-Z_]+)=(.+)$/);if(m)process.env[m[1]]=m[2].trim();});
process.env.ADMIN_TOKEN="TEST-RAPOR-TOKEN"; // test için sahte; gerçek token gerekmez
const {createClient}=await import("@supabase/supabase-js");
const srv=createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const samples=[
 {cihaz:"Buzdolabı",marka:"Bosch",ariza:"RAPOR-TEST soğutmuyor",maliyet_min:3000,maliyet_max:3500,karar:"tamir",aciliyet:"orta",il:"İstanbul",ilce:"Kadıköy"},
 {cihaz:"Buzdolabı",marka:"Arçelik",ariza:"RAPOR-TEST soğutmuyor",maliyet_min:2000,maliyet_max:2400,karar:"tamir",aciliyet:"orta",il:"İstanbul",ilce:"Üsküdar"},
 {cihaz:"Çamaşır Makinesi",marka:"Bosch",ariza:"RAPOR-TEST su almıyor",maliyet_min:1500,maliyet_max:1800,karar:"yenisi",aciliyet:"düşük",il:"İzmir",ilce:"Konak"},
];
const ins=await srv.from("teshis_log").insert(samples).select("id"); const ids=(ins.data||[]).map(r=>r.id);
const h=(await import("./api/admin/rapor.js")).default;
const mk=(headers,query)=>{const req={method:"GET",headers,query};const res={s:0,b:null,status(c){this.s=c;return this;},json(o){this.b=o;return this;},setHeader(){}};return{req,res};};
let {req,res}=mk({},{}); await h(req,res); console.log("tokensız :",res.s);
({req,res}=mk({authorization:"Bearer YANLIS"},{})); await h(req,res); console.log("yanlış   :",res.s);
const t=new Date().toISOString().slice(0,10);
({req,res}=mk({authorization:"Bearer TEST-RAPOR-TOKEN"},{from:t,to:t})); await h(req,res);
console.log("doğru    :",res.s,"toplam:",res.b?.toplam,"marka:",JSON.stringify(res.b?.marka),"maliyet:",JSON.stringify(res.b?.maliyet),"il:",JSON.stringify(res.b?.il));
await srv.from("teshis_log").delete().in("id",ids); console.log("temizlendi:",ids.length);
EOF
node _r.mjs 2>&1 | grep -v "NotOpenSSLWarning\|warnings.warn"; rm -f _r.mjs
```
Expected: `tokensız: 401` · `yanlış: 401` · `doğru: 200 toplam: 3 marka: [{Bosch,2},{Arçelik,1}] maliyet: {ortMin~2167,...} il: [{İstanbul,2},{İzmir,1}]` · `temizlendi: 3`. (Sahte token gerçek olanı gerektirmez; mantık aynı.)

- [ ] **Step 2: Preview — sayfa render + durumlar**

Preview (`Vite Dev Server`) → `/admin` (tokensız) → "URL'ye token ekleyin" uyarısı. `/admin?token=DENEME` → tarih seçici + "Raporu çek" görünür; çekince prod 401 → "Yetkisiz — admin token hatalı" (sayfa düzgün çalışıyor). Snapshot ile doğrula.

- [ ] **Step 3: Deploy (merge → main)**

```bash
cd ~/Downloads/arizam-ne-app
git checkout main && git merge --ff-only feat-admin-rapor && git push origin main
```
project-83ils otomatik deploy → READY.

- [ ] **Step 4: Canlı authed kontrol (kullanıcı yapar — token sır)**

Kullanıcı: `https://www.benservis.com/admin?token=GERÇEK_ADMIN_TOKEN` aç → tarih aralığı seç → "Raporu çek" → tablolar gelir. (Veri henüz azsa son 30 günde gerçek teşhisler görünür.)

- [ ] **Step 5: Branch temizliği**

```bash
git branch -d feat-admin-rapor
```

---

## Kabul (spec ile)
- `/admin?token` sayfası + tokensız uyarı ✓ Task 2, 4/Step 2
- Tarih aralığı → toplam + en çok marka/arıza/il-ilçe + karar/aciliyet + maliyet ✓ Task 1-2, 4/Step 1
- Varsayılan son 30 gün ✓ Task 1 (def30) + Task 2 (gunOnce(30))
- Boş aralık → "kayıt yok" ✓ Task 2 (toplam===0)
- Yalnız ADMIN_TOKEN (tokensız 401) ✓ Task 1, 4/Step 1
- Mevcut akışlar etkilenmez ✓ (yeni dosyalar + tek route satırı)
- vite build temiz ✓ Task 3/Step 4
