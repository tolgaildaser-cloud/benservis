# Teşhis Loglama (Faz 0) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Her geçerli teşhisi **anonim** `teshis_log` tablosuna kaydet + servis arayanlarda il/ilçe iliştir — 31 Temmuz raporu için veri biriksin.

**Architecture:** Client teşhis sonucu gelince `/api/teshis/log`'a anonim alanları POST'lar (→ id); kullanıcı "Servis Bul"da konum verince aynı id'ye il/ilçe iliştirilir. Sunucu service-role ile yazar (RLS kilitli). `api/diagnose.js` ve teşhis akışı DEĞİŞMEZ; tüm log çağrıları best-effort.

**Tech Stack:** React+Vite (inline stil), Vercel serverless (ESM), Supabase (service-role `api/_supabase.js`), `withRateLimit` (Upstash).

> **NOT — test:** Proje test runner'ı YOK; doğrulama = `node --check` + `vite build` + curl + Supabase sorgusu + preview (projenin yöntemi).
> **PII YOK:** hiçbir adımda ad/tel/IP/tam adres saklanmaz.

---

## File Structure
- **Create `api/teshis/log.js`** — anonim log ucu (insert + konum-update modları, rate-limit'li).
- **Modify `src/App.jsx`** — `teshisLogId` state + teşhis sonrası log + ServisEkrani'ye prop + `sifirla` reset.
- **Modify `src/ServisEkrani.jsx`** — `teshisLogId` prop + `konumIl` state + GPS/manuel konumda il/ilçe yakala + konum POST effect.
- **Supabase** — `teshis_log` tablosu + RLS (SQL Editor'da elle).

---

### Task 1: Supabase — `teshis_log` tablosu + RLS

**Files:** yok (Supabase SQL Editor — kullanıcı çalıştırır)

- [ ] **Step 1: Tabloyu + RLS'i oluştur**

Supabase → proje **benservis** (`qzwueckmignbsirffoap`) → SQL Editor → çalıştır:
```sql
create table if not exists public.teshis_log (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  cihaz       text,
  marka       text,
  ariza       text,
  maliyet_min int,
  maliyet_max int,
  karar       text,
  aciliyet    text,
  yas         text,
  garanti     boolean default false,
  il          text,
  ilce        text
);
alter table public.teshis_log enable row level security;
-- Policy EKLENMEZ → anon erişimi kapalı. Sunucu service-role ile yazar (RLS bypass).
create index if not exists teshis_log_created_idx on public.teshis_log (created_at);
```

- [ ] **Step 2: Doğrula (anon kapalı / tablo var)**

SQL Editor'da: `select count(*) from public.teshis_log;` → `0` döner (tablo var, boş). RLS doğrulaması Task 5'te (anon key ile select → engel).

---

### Task 2: `api/teshis/log.js` — anonim log ucu

**Files:** Create `api/teshis/log.js`

- [ ] **Step 1: Ucu yaz**

`api/teshis/log.js`:
```js
// api/teshis/log.js — Teşhis istatistiği (ANONİM, PII YOK). İki mod:
//  insert: {cihaz,marka,ariza,maliyet_min,maliyet_max,karar,aciliyet,yas,garanti} → {ok,id}
//  konum : {id, il, ilce} → o satırın il/ilce'sini BİR KEZ doldurur (üzerine yazmaz) → {ok}
// Sunucu service-role ile yazar (RLS bypass). Best-effort: hata 200 {ok:false}, akışı bozma.
import supabase from "./_supabase.js";
import { withRateLimit } from "./_ratelimit.js";

const IZIN = ["benservis.com", "vercel.app", "localhost"];
function originOk(req) {
  const raw = req.headers.origin || req.headers.referer || "";
  if (!raw) return true;
  try { const h = new URL(raw).hostname; return IZIN.some((a) => h === a || h.endsWith("." + a)); }
  catch { return true; }
}
const str = (v, n = 120) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);
const num = (v) => (v == null || isNaN(Number(v)) ? null : Math.round(Number(v)));

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!originOk(req)) return res.status(403).json({ ok: false });
  const b = req.body || {};
  try {
    // Konum modu — id varsa o satırı güncelle (yalnız il null iken → bir kez)
    if (b.id) {
      const il = str(b.il, 64), ilce = str(b.ilce, 64);
      if (!il && !ilce) return res.status(400).json({ ok: false });
      await supabase.from("teshis_log").update({ il, ilce }).eq("id", b.id).is("il", null);
      return res.status(200).json({ ok: true });
    }
    // Insert modu — anonim teşhis kaydı
    const kayit = {
      cihaz: str(b.cihaz, 60), marka: str(b.marka, 60), ariza: str(b.ariza, 120),
      maliyet_min: num(b.maliyet_min), maliyet_max: num(b.maliyet_max),
      karar: str(b.karar, 20), aciliyet: str(b.aciliyet, 20),
      yas: str(b.yas, 20), garanti: b.garanti === true,
    };
    const { data, error } = await supabase.from("teshis_log").insert(kayit).select("id").single();
    if (error) return res.status(200).json({ ok: false }); // best-effort
    return res.status(200).json({ ok: true, id: data.id });
  } catch {
    return res.status(200).json({ ok: false });
  }
}

export default withRateLimit(handler, { prefix: "teshislog", limits: [{ tokens: 40, window: "1 h" }] });
```

- [ ] **Step 2: Syntax doğrula**

Run: `cd ~/Downloads/arizam-ne-app && node --check api/teshis/log.js && echo OK`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add api/teshis/log.js
git commit -m "feat: /api/teshis/log — anonim teşhis istatistiği (insert + konum), rate-limit'li"
```

---

### Task 3: `App.jsx` — teşhis sonrası loglama

**Files:** Modify `src/App.jsx`

- [ ] **Step 1: `teshisLogId` state ekle**

`App.jsx`'te `const [showServisler, setShowServisler] = useState(false);` satırının ALTINA ekle:
```jsx
  const [teshisLogId, setTeshisLogId] = useState(null); // anonim teşhis log id (konum iliştirmek için)
```

- [ ] **Step 2: Teşhis sonucu gelince logla**

`App.jsx`'te şu bloğu BUL:
```jsx
      setSonuc(teshis);
      // Girdi geçerli bir arıza tarifi değilse (anlamsız/alakasız) → teşhis/fiyat/Servis Bul GÖSTERME.
      setAdim(teshis && teshis.gecerliAriza === false ? "gecersiz" : "sonuc");
```
ŞUNUNLA değiştir:
```jsx
      setSonuc(teshis);
      // Girdi geçerli bir arıza tarifi değilse (anlamsız/alakasız) → teşhis/fiyat/Servis Bul GÖSTERME.
      const gecerli = !(teshis && teshis.gecerliAriza === false);
      setAdim(gecerli ? "sonuc" : "gecersiz");
      // Anonim istatistik logu (best-effort; akışı ASLA bloklamaz; PII yok)
      if (gecerli && teshis) {
        fetch("/api/teshis/log", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cihaz, marka,
            ariza: teshis.olasiArizalar?.[0]?.ad || null,
            maliyet_min: teshis.tahminiMaliyet?.min ?? null,
            maliyet_max: teshis.tahminiMaliyet?.max ?? null,
            karar: teshis.kararOnerisi || null,
            aciliyet: teshis.aciliyet || null,
            yas: yas || null,
            garanti: !!garantiAltinda,
          }),
        }).then((r) => (r.ok ? r.json() : null)).then((d) => { if (d?.id) setTeshisLogId(d.id); }).catch(() => {});
      }
```

- [ ] **Step 3: `sifirla`'da log id'yi sıfırla**

`App.jsx`'te `sifirla` fonksiyonunda `setShowServisler(false);` ifadesinin yanına `setTeshisLogId(null);` ekle. BUL:
```jsx
  const sifirla = () => { setSonuc(null); setBelirti(""); setMarka(""); setGarantiAltinda(false); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setShowDPP(false); setDppInitialSeriNo(""); window.scrollTo(0, 0); };
```
DEĞİŞTİR (yalnız `setShowServisler(false);` → `setShowServisler(false); setTeshisLogId(null);`):
```jsx
  const sifirla = () => { setSonuc(null); setBelirti(""); setMarka(""); setGarantiAltinda(false); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setTeshisLogId(null); setShowDPP(false); setDppInitialSeriNo(""); window.scrollTo(0, 0); };
```

- [ ] **Step 4: `teshisLogId`'yi ServisEkrani'ye geçir**

`App.jsx`'te ServisEkrani render'ında `onAnaSayfa={sifirla}` satırının ALTINA ekle:
```jsx
          teshisLogId={teshisLogId}
```
(Sonuç: `<ServisEkrani cihaz={cihaz} marka={marka} garantiAltinda={garantiAltinda} belirti={belirti} onKapat={...} onAnaSayfa={sifirla} teshisLogId={teshisLogId} />`)

- [ ] **Step 5: Build doğrula**

Run: `cd ~/Downloads/arizam-ne-app && npx vite build 2>&1 | tail -3`
Expected: `✓ built in ...` (hata yok).

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx
git commit -m "feat: teşhis sonrası anonim log (/api/teshis/log) + teshisLogId ServisEkrani'ye"
```

---

### Task 4: `ServisEkrani.jsx` — konum iliştirme

**Files:** Modify `src/ServisEkrani.jsx`

- [ ] **Step 1: `useRef` import et**

BUL: `import React, { useState, useEffect } from "react";`
DEĞİŞTİR: `import React, { useState, useEffect, useRef } from "react";`

- [ ] **Step 2: `teshisLogId` prop + `konumIl` state ekle**

BUL: `export default function ServisEkrani({ cihaz, marka, garantiAltinda, belirti, onKapat, onAnaSayfa }) {`
DEĞİŞTİR: `export default function ServisEkrani({ cihaz, marka, garantiAltinda, belirti, onKapat, onAnaSayfa, teshisLogId }) {`

BUL: `  const [konumIlce, setKonumIlce] = useState(null);`
ALTINA EKLE: `  const [konumIl, setKonumIl] = useState(null); // rapor için il (anonim log'a iliştirilir)`

- [ ] **Step 3: GPS yolunda il'i yakala**

BUL (GPS useEffect içinde):
```jsx
        // Bölge bilgisi (konumIlce): en yakın servisin ilçesi; yoksa ters geokod.
        const bolgeIlce = kmSiraliTum.find((s) => s.km != null && s.ilce)?.ilce;
        if (bolgeIlce) {
          setKonumIlce(bolgeIlce);
        } else {
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr&zoom=12`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
              const a = d?.address || {};
              const ilce = a.city_district || a.town || a.county || a.district || a.suburb || null;
              if (ilce) setKonumIlce(ilce);
            })
            .catch(() => {});
        }
```
DEĞİŞTİR:
```jsx
        // Bölge bilgisi: en yakın servisin il/ilçesi; yoksa ters geokod. (konumIl/konumIlce → anonim log)
        const bolgeServis = kmSiraliTum.find((s) => s.km != null && s.ilce);
        const bolgeIl = (kmSiraliTum.find((s) => s.km != null && (s.sehir || s.il)) || {});
        if (bolgeIl.sehir || bolgeIl.il) setKonumIl(bolgeIl.sehir || bolgeIl.il);
        if (bolgeServis?.ilce) {
          setKonumIlce(bolgeServis.ilce);
        } else {
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr&zoom=12`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
              const a = d?.address || {};
              const ilce = a.city_district || a.town || a.county || a.district || a.suburb || null;
              const il = a.province || a.state || a.city || null;
              if (ilce) setKonumIlce(ilce);
              if (il) setKonumIl(il);
            })
            .catch(() => {});
        }
```

- [ ] **Step 4: Manuel yolda il'i FallbackIlce'den yukarı taşı**

`FallbackIlce` bileşeninde (il değişince ve ilçe seçilince `onSec` çağrıları):

BUL: `          onChange={(e) => { setIl(e.target.value); onSec(""); }}`
DEĞİŞTİR: `          onChange={(e) => { setIl(e.target.value); onSec("", e.target.value); }}`

BUL: `          onChange={(e) => onSec(e.target.value)}`
DEĞİŞTİR: `          onChange={(e) => onSec(e.target.value, il)}`

Sonra ana bileşendeki `FallbackIlce` kullanımının `onSec`'ini BUL:
```jsx
            onSec={async (ilce) => {
              if (!ilce) return;
              setFallbackIlce(ilce);
              setKonumIlce(ilce); // bölge bilgisi — seçilen ilçe kesin doğru
```
DEĞİŞTİR:
```jsx
            onSec={async (ilce, il) => {
              if (!ilce) return;
              setFallbackIlce(ilce);
              setKonumIlce(ilce); // bölge bilgisi — seçilen ilçe kesin doğru
              if (il) setKonumIl(il); // rapor için il (anonim log)
```

- [ ] **Step 5: Konum POST effect'i ekle**

`ServisEkrani` ana bileşeninde, GPS useEffect'inin HEMEN ALTINA (yani `// İl → ilçe haritası` satırından önce) ekle:
```jsx
  // Servis arama konumu belli olunca anonim teşhis loguna il/ilçe iliştir (BİR KEZ, best-effort).
  const konumPostRef = useRef(false);
  useEffect(() => {
    if (konumPostRef.current || !teshisLogId || (!konumIl && !konumIlce)) return;
    konumPostRef.current = true;
    fetch("/api/teshis/log", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: teshisLogId, il: konumIl, ilce: konumIlce }),
    }).catch(() => {});
  }, [teshisLogId, konumIl, konumIlce]);
```

- [ ] **Step 6: Build doğrula**

Run: `cd ~/Downloads/arizam-ne-app && npx vite build 2>&1 | tail -3`
Expected: `✓ built in ...` (hata yok).

- [ ] **Step 7: Commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: servis aramada konum (il/ilçe) anonim teşhis loguna iliştirilir"
```

---

### Task 5: Doğrulama + deploy

**Files:** yok

- [ ] **Step 1: Endpoint lokal — insert + konum (gerçek Supabase)**

`.env.local`'de SUPABASE_SERVICE_KEY var. Lokal test (handler'ı import edip mock req/res ile çağır):
```bash
cd ~/Downloads/arizam-ne-app
cat > _t.mjs <<'EOF'
import { readFileSync } from "fs";
readFileSync(".env.local","utf8").split("\n").forEach(l=>{const m=l.match(/^([A-Z_]+)=(.+)$/);if(m)process.env[m[1]]=m[2].trim();});
const h = (await import("./api/teshis/log.js")).default;
const mk = (body) => { const req={method:"POST",headers:{},body}; const res={s:0,b:null,status(c){this.s=c;return this;},json(o){this.b=o;return this;},setHeader(){}}; return {req,res}; };
let {req,res} = mk({cihaz:"Buzdolabı",marka:"Bosch",ariza:"Soğutmuyor",maliyet_min:3100,maliyet_max:3600,karar:"tamir",aciliyet:"orta",yas:"3-5 yıl",garanti:false});
await h(req,res); console.log("insert:",res.s,JSON.stringify(res.b));
const id=res.b?.id;
if(id){ ({req,res}=mk({id,il:"İstanbul",ilce:"Kadıköy"})); await h(req,res); console.log("konum:",res.s,JSON.stringify(res.b)); }
EOF
node _t.mjs 2>&1 | grep -v "NotOpenSSLWarning\|warnings.warn"; rm -f _t.mjs
```
Expected: `insert: 200 {"ok":true,"id":"..."}` ve `konum: 200 {"ok":true}`. (Supabase'de bir satır oluşur — Step 3'te silinebilir.)

- [ ] **Step 2: RLS doğrula (anon kapalı)**

```bash
cd ~/Downloads/arizam-ne-app
node --input-type=module -e '
import {readFileSync} from "fs";
const env={};readFileSync(".env.local","utf8").split("\n").forEach(l=>{const m=l.match(/^([A-Z_]+)=(.+)$/);if(m)env[m[1]]=m[2].trim();});
const {createClient}=await import("@supabase/supabase-js");
const anon=createClient(env.SUPABASE_URL||env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);
const {data,error}=await anon.from("teshis_log").select("id").limit(1);
console.log("anon select →", error?("ENGELLENDİ ✓ ("+error.message+")"):("rows:"+(data?.length||0)+(data?.length?" ✗ AÇIK":" (RLS ile boş)")));
' 2>&1 | grep -v "NotOpenSSLWarning\|warnings.warn"
```
Expected: anon select RLS ile engellenir/boş döner (0 satır). Service-role (Step 1) yazabildi → doğru.

- [ ] **Step 3: Test satırını temizle (opsiyonel)**

Supabase SQL Editor: `delete from public.teshis_log where ariza = 'Soğutmuyor' and marka = 'Bosch';` (Step 1 test kaydını sil.)

- [ ] **Step 4: Preview — uçtan uca (gerçek teşhis → satır)**

`vite-dev`/`Vite Dev Server` preview başlat → kök → cihaz+marka seç + belirti yaz → "Teşhis et" → sonuç gelince Supabase'de `teshis_log`'a 1 satır düşmeli (cihaz/marka/ariza/maliyet/karar dolu, il/ilce null). Sonra "Servis Bul" → konum izni ver/ilçe seç → o satırın `il/ilce`'si dolmalı. Geçersiz girdi ("asdf") → satır YOK.
Kontrol (Supabase SQL): `select cihaz,marka,ariza,maliyet_min,maliyet_max,karar,il,ilce,created_at from public.teshis_log order by created_at desc limit 5;`

- [ ] **Step 5: Deploy (merge → main)**

```bash
cd ~/Downloads/arizam-ne-app
git checkout main && git merge --ff-only feat-teshis-loglama && git push origin main
```
project-83ils otomatik deploy → READY. Canlı son kontrol: gerçek bir teşhis yap → Supabase'de satır düştü mü.

- [ ] **Step 6: Branch temizliği**

```bash
git branch -d feat-teshis-loglama
```

---

## Kabul (spec ile)
- Tablo + RLS (anon kapalı) ✓ Task 1, 5/Step 2
- Geçerli teşhis → anonim satır (PII yok) ✓ Task 3, 5/Step 4
- Servis aramada il/ilçe iliştirilir (bir kez) ✓ Task 4, 5/Step 4
- Geçersiz teşhis loglanmaz ✓ Task 3/Step 2 (gecerli guard)
- Rate-limit ✓ Task 2
- diagnose.js/akış değişmedi, best-effort ✓ (diagnose.js'e dokunulmadı; tüm log .catch)
