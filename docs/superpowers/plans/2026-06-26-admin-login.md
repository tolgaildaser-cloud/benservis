# Admin Basit Giriş (şifre) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/admin` rapor sayfasına şifre ekranı + localStorage hatırlama — uzun `?token=` URL'si gerekmesin.

**Architecture:** Endpoint hem `ADMIN_TOKEN` hem `ADMIN_PASSWORD`'ü Bearer kabul eder (güvenlik sunucuda, değişmez). `RaporPaneli.jsx` sır yoksa şifre ekranı gösterir; doğru şifre → `localStorage` → rapor; sonraki ziyaretlerde otomatik. Eski `?token=` geriye uyumlu.

**Tech Stack:** React+Vite (inline stil), Vercel serverless (ESM), Supabase service-role.

> **NOT — test:** Doğrulama = `node --check` + `vite build` + lokal handler testi (iki sahte sır) + preview. Gerçek şifre prod env (`ADMIN_PASSWORD`) gerektirir → kullanıcı kendi şifresiyle canlıda doğrular.

---

## File Structure
- **Modify `api/admin/rapor.js`** — `yetkiKontrol` hem ADMIN_TOKEN hem ADMIN_PASSWORD kabul etsin (tek fonksiyon).
- **Modify `src/RaporPaneli.jsx`** — giriş katmanı (şifre ekranı + localStorage + çıkış + otomatik çek).
- **Vercel** — yeni env `ADMIN_PASSWORD` (kullanıcı ekler).

---

### Task 1: `api/admin/rapor.js` — iki sırrı kabul et

**Files:** Modify `api/admin/rapor.js`

- [ ] **Step 1: `yetkiKontrol`'ü güncelle**

BUL:
```js
function yetkiKontrol(req) {
  const t = process.env.ADMIN_TOKEN;
  return !!t && (req.headers["authorization"] || "") === `Bearer ${t}`;
}
```
DEĞİŞTİR:
```js
function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}
```

- [ ] **Step 2: Syntax doğrula**

Run: `cd ~/Downloads/arizam-ne-app && node --check api/admin/rapor.js && echo OK`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add api/admin/rapor.js
git commit -m "feat: /api/admin/rapor ADMIN_PASSWORD'ü de kabul eder (ADMIN_TOKEN yanında)"
```

---

### Task 2: `src/RaporPaneli.jsx` — giriş katmanı

**Files:** Modify `src/RaporPaneli.jsx` (tam içerik değişimi)

- [ ] **Step 1: Dosyayı yeni içerikle değiştir**

`src/RaporPaneli.jsx` içeriğinin TAMAMINI şununla değiştir:
```jsx
// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin
// Şifre ile giriş (localStorage hatırlar) → tarih aralığı → "Raporu çek" → tablolar.
// Sır = localStorage ya da ?token= (geriye uyumlu). Sunucu Bearer (ADMIN_TOKEN/ADMIN_PASSWORD) kontrol eder.
import React, { useState, useEffect } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const LS_KEY = "benservis_admin";
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
  const urlToken = new URLSearchParams(window.location.search).get("token") || "";
  const [sir, setSir] = useState(() => localStorage.getItem(LS_KEY) || urlToken || "");
  const [girisInput, setGirisInput] = useState("");
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  // Verilen sırla rapor çek; 401 → çıkış (sırrı temizle). Başarı → true.
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

  // Açılışta sır varsa otomatik çek (hatırlanan giriş)
  useEffect(() => { if (sir) cek(sir); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giris = async () => {
    const t = girisInput.trim();
    if (!t) return;
    setSir(t);
    const ok = await cek(t);
    if (ok) localStorage.setItem(LS_KEY, t);
  };
  const cikis = () => { localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setGirisInput(""); setHata(""); setDurum("bosta"); };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", marginTop: 3 };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const dagitSatir = (obj) => Object.entries(obj || {}).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join("  ·  ") || "—";

  // ── GİRİŞ EKRANI (sır yok) ──
  if (!sir) {
    return (
      <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
        <style>{FONT}</style>
        <div style={{ maxWidth: 340, margin: "70px auto 0", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: 24 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 16px" }}>Giriş için şifre.</p>
          <input
            type="password" value={girisInput} autoFocus
            onChange={(e) => setGirisInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && giris()}
            placeholder="Şifre"
            style={{ ...inputS, width: "100%", boxSizing: "border-box", marginTop: 0, marginBottom: 12 }}
          />
          <button onClick={giris} disabled={durum === "yukleniyor"} style={{ ...btnS, width: "100%" }}>
            {durum === "yukleniyor" ? "Kontrol ediliyor…" : "Giriş"}
          </button>
          {hata && <div style={{ color: "#DC2626", fontSize: 13, marginTop: 10, textAlign: "center" }}>{hata}</div>}
        </div>
      </div>
    );
  }

  // ── RAPOR EKRANI (sır var) ──
  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
            <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Anonim teşhis istatistikleri · tarih aralığı seç, çek.</p>
          </div>
          <button onClick={cikis} style={{ background: "none", border: `1px solid ${LINE}`, borderRadius: 8, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>Çıkış</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 18px" }}>
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
git commit -m "feat: /admin şifre ekranı + localStorage hatırlama + çıkış (URL token geriye uyumlu)"
```

---

### Task 3: Doğrulama + deploy

**Files:** yok

- [ ] **Step 1: Lokal endpoint testi (iki sır)**

```bash
cd ~/Downloads/arizam-ne-app
cat > _l.mjs <<'EOF'
import { readFileSync } from "fs";
readFileSync(".env.local","utf8").split("\n").forEach(l=>{const m=l.match(/^([A-Z_]+)=(.+)$/);if(m)process.env[m[1]]=m[2].trim();});
process.env.ADMIN_TOKEN="TEST-TOKEN"; process.env.ADMIN_PASSWORD="kolay-sifre-123";
const h=(await import("./api/admin/rapor.js")).default;
const mk=(auth)=>{const req={method:"GET",headers:auth?{authorization:auth}:{},query:{}};const res={s:0,status(c){this.s=c;return this;},json(){return this;},setHeader(){}};return{req,res};};
for(const [ad,auth] of [["sırsız",null],["yanlış","Bearer XXX"],["token","Bearer TEST-TOKEN"],["şifre","Bearer kolay-sifre-123"]]){
  const {req,res}=mk(auth); await h(req,res); console.log(ad.padEnd(8),"→",res.s);
}
EOF
node _l.mjs 2>&1 | grep -v "NotOpenSSLWarning\|warnings.warn"; rm -f _l.mjs
```
Expected: `sırsız → 401` · `yanlış → 401` · `token → 200` · `şifre → 200`.

- [ ] **Step 2: Preview — giriş ekranı + yanlış şifre**

Preview (`Vite Dev Server`) → `/admin` (localStorage temizken) → **şifre ekranı** (kutu + "Giriş"). Yanlış şifre yaz → Giriş → (prod'da ADMIN_PASSWORD yok/yanlış → 401) → **"Şifre hatalı"**. localStorage'a yazılmadığını doğrula (`localStorage.getItem("benservis_admin")===null`). Snapshot.

- [ ] **Step 3: Deploy (merge → main)**

```bash
cd ~/Downloads/arizam-ne-app
git checkout main && git merge --ff-only feat-admin-login && git push origin main
```

- [ ] **Step 4: Kullanıcı — ADMIN_PASSWORD ekler (canlı şifre çalışması için)**

Kullanıcı: Vercel → **project-83ils** → Settings → Environment Variables → **`ADMIN_PASSWORD`** = kolay bir şifre (Production) → Save. (Env değişikliği için redeploy gerekir — boş commit ya da Vercel "Redeploy".) Sonra `benservis.com/admin` → şifre yaz → giriş.

- [ ] **Step 5: Branch temizliği**

```bash
git branch -d feat-admin-login
```

---

## Kabul (spec ile)
- Şifre ekranı + localStorage + otomatik giriş ✓ Task 2
- Çıkış ✓ Task 2 (cikis)
- Endpoint iki sırrı kabul ✓ Task 1, 3/Step 1
- Eski `?token=` çalışır ✓ Task 2 (urlToken fallback) + Task 1 (ADMIN_TOKEN korunur)
- Yanlış şifre → "Şifre hatalı", kaydetmez ✓ Task 2 (cek 401), 3/Step 2
- vite build temiz ✓ Task 2/Step 2
