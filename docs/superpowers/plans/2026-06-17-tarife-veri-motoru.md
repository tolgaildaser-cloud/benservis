# Tarife Veri Motoru — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sahadan toplanan tamir/arıza/maliyet verisini girip onaylayacağımız ve AI maliyet tahmininin referansı olarak gömülü `SEED`'in yerine koyacağımız veri motorunu kurmak.

**Architecture:** İki katmanlı Supabase modeli (`tarife_veri` ham noktalar → `tarife` onaylı kanonik). App içi admin arayüzü (saha web formu + CSV import) ham nokta yazar; sunucu bunlardan tarife önerir, insan onaylar. `/api/diagnose` sunucu-tarafına çekilir: onaylı tarifeyi DB'den çekip prompt referansını kurar (yoksa SEED fallback). Tarife verisi ağa çıkmaz (moat koruması).

**Tech Stack:** React 18 + Vite, Vercel serverless (`api/*.js`, ESM), Supabase Postgres (service-role server-side), Anthropic Claude (`claude-sonnet-4-6`). Test: vitest (yalnız saf mantık).

**Spec:** `docs/superpowers/specs/2026-06-17-tarife-veri-motoru-design.md`

---

## Test & Doğrulama Stratejisi (oku — bu projeye özgü)

- **Saf mantık (vitest, lokal):** Harmanlama fonksiyonu `onerTarife()` I/O'suz, TDD edilir.
- **Uçlar/UI/diagnose (entegrasyon):** `vite.config.js` lokalde `/api`'yi **production'a proxy'ler**; vercel CLI yok. Bu yüzden yeni uçlar lokal vite'ta çalışmaz → **branch preview deploy** ile doğrulanır: `git push` → Vercel `feat/tarife-veri-motoru` için otomatik preview URL üretir → orada test edilir (preview araçları + `curl`).
- **DB:** Supabase tek proje (prod + preview aynı DB'yi paylaşır). `supabase/tarife.sql` Supabase SQL editöründe bir kez çalıştırılır. Yeni tablolar RLS-kilitli + prod bunları okumadığı için (slice 5 deploy olana dek) güvenli.
- **Commit:** Her task sonunda. Branch: `feat/tarife-veri-motoru` (zaten açık). Slice 1-4 canlıyı etkilemez; slice 5 SEED fallback'li olduğu için davranış-korumalı.

---

## Slice 1 — Şema + SEED migration

### Task 1: Tarife tabloları (DDL + RLS)

**Files:**
- Create: `supabase/tarife.sql`

- [ ] **Step 1: Şema dosyasını yaz**

```sql
-- supabase/tarife.sql — Tarife Veri Motoru tabloları. Supabase SQL editöründe çalıştır.

-- Ham veri noktaları: her saha ziyareti / import satırı = 1 kayıt
create table if not exists tarife_veri (
  id            bigint generated always as identity primary key,
  cihaz         text not null,
  marka         text not null default 'Genel',
  ariza         text not null,
  belirtiler    text,
  hata_kodu     text,
  parca_tl      numeric,
  iscilik_tl    numeric,
  toplam_tl     numeric,
  bolge         text,
  kaynak        text not null default 'saha'
                  check (kaynak in ('saha','web','gercek_is','seed')),
  kaynak_servis text,
  tarih         date not null default current_date,
  notlar        text,
  created_at    timestamptz not null default now()
);
create index if not exists tarife_veri_key_idx on tarife_veri (cihaz, marka, ariza);
alter table tarife_veri enable row level security;  -- anon policy YOK → yalnız service-role

-- Onaylı kanonik tarife: (cihaz+marka+ariza) başına tek satır. AI YALNIZ bunu okur.
create table if not exists tarife (
  id                  bigint generated always as identity primary key,
  cihaz               text not null,
  marka               text not null default 'Genel',
  ariza               text not null,
  onayli_parca_min    numeric,
  onayli_parca_max    numeric,
  onayli_iscilik      numeric,
  onayli_beklenen     numeric,
  durum               text not null default 'taslak'
                        check (durum in ('taslak','onayli')),
  veri_noktasi_sayisi int not null default 0,
  onaylayan           text,
  guncelleme          timestamptz not null default now(),
  created_at          timestamptz not null default now(),
  unique (cihaz, marka, ariza)
);
alter table tarife enable row level security;       -- anon policy YOK → yalnız service-role
```

- [ ] **Step 2: Supabase'de çalıştır + RLS doğrula**

Supabase Dashboard → SQL Editor → `supabase/tarife.sql` içeriğini yapıştır → Run.
Sonra Table Editor'da `tarife` ve `tarife_veri` görünür; her ikisinde "RLS enabled" rozeti olmalı (anon policy yok).
Beklenen: 2 tablo oluşur, RLS açık.

- [ ] **Step 3: Commit**

```bash
git add supabase/tarife.sql
git commit -m "feat(tarife): tarife_veri + tarife tabloları (RLS açık)"
```

### Task 2: SEED → onaylı tarife migration

**Files:**
- Create: `supabase/tarife-seed.sql`

- [ ] **Step 1: Migration SQL'ini yaz** (kaynak: `src/App.jsx` SEED nesnesi, birebir)

```sql
-- supabase/tarife-seed.sql — gömülü SEED'i ilk ONAYLI tarife olarak içe al (baseline).
-- marka='Genel'. Tekrar çalıştırılırsa çakışanları atlar.
insert into tarife (cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik, durum, onaylayan, veri_noktasi_sayisi)
values
  ('Buzdolabı','Genel','Termostat/sensör',250,600,500,'onayli','seed',0),
  ('Buzdolabı','Genel','Gaz kaçağı/dolum',800,1500,900,'onayli','seed',0),
  ('Buzdolabı','Genel','Kompresör değişimi',2500,5000,1200,'onayli','seed',0),
  ('Çamaşır Makinesi','Genel','Su giriş valfi',350,700,600,'onayli','seed',0),
  ('Çamaşır Makinesi','Genel','Tahliye pompası',400,900,600,'onayli','seed',0),
  ('Çamaşır Makinesi','Genel','Rulman/keçe',600,1500,1200,'onayli','seed',0),
  ('Çamaşır Makinesi','Genel','Elektronik kart',1000,2500,800,'onayli','seed',0),
  ('Bulaşık Makinesi','Genel','Tahliye pompası',400,900,700,'onayli','seed',0),
  ('Bulaşık Makinesi','Genel','Su giriş valfi',350,700,600,'onayli','seed',0),
  ('Bulaşık Makinesi','Genel','Rezistans/ısıtıcı',600,1400,800,'onayli','seed',0),
  ('Fırın / Ocak','Genel','Rezistans',350,800,600,'onayli','seed',0),
  ('Fırın / Ocak','Genel','Termostat',300,700,500,'onayli','seed',0),
  ('Fırın / Ocak','Genel','Fan motoru',500,1200,700,'onayli','seed',0),
  ('Klima','Genel','Gaz dolumu',600,1200,700,'onayli','seed',0),
  ('Klima','Genel','Kapasitör',300,700,500,'onayli','seed',0),
  ('Klima','Genel','Kompresör',2500,5500,1500,'onayli','seed',0),
  ('Kombi','Genel','3 yollu vana',700,1400,800,'onayli','seed',0),
  ('Kombi','Genel','Sirkülasyon pompası',1200,2500,900,'onayli','seed',0),
  ('Kombi','Genel','Eşanjör',1500,4000,1200,'onayli','seed',0),
  ('Televizyon','Genel','Backlight LED bar',700,1800,900,'onayli','seed',0),
  ('Televizyon','Genel','Besleme kartı',600,1500,800,'onayli','seed',0),
  ('Televizyon','Genel','Panel',3000,8000,1500,'onayli','seed',0),
  ('Termosifon / Şofben','Genel','Rezistans',400,900,500,'onayli','seed',0),
  ('Termosifon / Şofben','Genel','Termostat',300,600,400,'onayli','seed',0),
  ('Termosifon / Şofben','Genel','Anot/temizlik',300,700,500,'onayli','seed',0),
  ('Mikrodalga / Air Fryer','Genel','Magnetron (mikrodalga)',700,1500,600,'onayli','seed',0),
  ('Mikrodalga / Air Fryer','Genel','Rezistans (air fryer)',300,700,400,'onayli','seed',0),
  ('Mikrodalga / Air Fryer','Genel','Fan/termostat/kart',300,900,400,'onayli','seed',0),
  ('Süpürge','Genel','Motor',600,1500,500,'onayli','seed',0),
  ('Süpürge','Genel','Batarya (şarjlı)',500,1500,400,'onayli','seed',0),
  ('Süpürge','Genel','Fırça/sensör/anakart',400,2500,500,'onayli','seed',0),
  ('Su Sebili / Arıtma','Genel','Filtre seti',400,1200,300,'onayli','seed',0),
  ('Su Sebili / Arıtma','Genel','Pompa/membran',700,1800,600,'onayli','seed',0),
  ('Air Fryer','Genel','Rezistans',300,700,400,'onayli','seed',0),
  ('Air Fryer','Genel','Fan motoru',300,800,400,'onayli','seed',0),
  ('Air Fryer','Genel','Termostat/kart',300,900,400,'onayli','seed',0),
  ('Bilgisayar','Genel','Güç kaynağı / şarj soketi',300,2000,400,'onayli','seed',0),
  ('Bilgisayar','Genel','Ekran kartı/RAM/disk',1000,6000,400,'onayli','seed',0),
  ('Bilgisayar','Genel','Anakart',1500,5000,600,'onayli','seed',0),
  ('Bilgisayar','Genel','Ekran/menteşe (laptop)',1200,4000,600,'onayli','seed',0),
  ('Yazıcı','Genel','Kafa/kartuş sistemi',400,1500,400,'onayli','seed',0),
  ('Yazıcı','Genel','Kağıt besleme/merdane',300,900,500,'onayli','seed',0),
  ('Yazıcı','Genel','Anakart/elektronik',500,1500,600,'onayli','seed',0)
on conflict (cihaz, marka, ariza) do nothing;
```

- [ ] **Step 2: Supabase'de çalıştır + doğrula**

SQL Editor'da çalıştır. Sonra: `select cihaz, count(*) from tarife group by cihaz;`
Beklenen: 13 cihaz (Diğer hariç), toplam 43 onaylı satır.

- [ ] **Step 3: Commit**

```bash
git add supabase/tarife-seed.sql
git commit -m "feat(tarife): gömülü SEED'i ilk onaylı tarife olarak içe al"
```

---

## Slice 2 — Harmanlama mantığı + API uçları

### Task 3: `onerTarife()` saf harmanlama fonksiyonu (TDD)

**Files:**
- Create: `api/_tarife-hesap.js`
- Test: `api/_tarife-hesap.test.js`
- Modify: `package.json` (vitest devDep + test script)

- [ ] **Step 1: vitest'i ekle**

Run:
```bash
npm install -D vitest
```
Sonra `package.json` → `scripts` içine ekle: `"test": "vitest run"` (mevcut dev/build/preview yanına).
Beklenen: `vitest` devDependencies'e eklenir.

- [ ] **Step 2: Failing test yaz**

```js
// api/_tarife-hesap.test.js
import { describe, it, expect } from "vitest";
import { onerTarife, medyan, yuzdelik } from "./_tarife-hesap.js";

describe("yuzdelik/medyan", () => {
  it("medyan tek/çift dizide doğru", () => {
    expect(medyan([10, 20, 30])).toBe(20);
    expect(medyan([10, 20, 30, 40])).toBe(25);
  });
  it("boş dizi null", () => {
    expect(medyan([])).toBe(null);
    expect(yuzdelik([], 25)).toBe(null);
  });
});

describe("onerTarife", () => {
  it("3+ noktada parça P25–P75, işçilik medyan, toplam medyan", () => {
    const points = [
      { parca_tl: 1000, iscilik_tl: 500 },
      { parca_tl: 1200, iscilik_tl: 600 },
      { parca_tl: 1400, iscilik_tl: 500 },
      { parca_tl: 1600, iscilik_tl: 700 },
    ];
    const r = onerTarife(points);
    expect(r.onayli_parca_min).toBe(1150); // P25
    expect(r.onayli_parca_max).toBe(1450); // P75
    expect(r.onayli_iscilik).toBe(550);    // medyan(500,500,600,700)=550
    expect(r.veri_noktasi_sayisi).toBe(4);
  });
  it("<3 noktada parça min/max kullanır", () => {
    const r = onerTarife([{ parca_tl: 1000, iscilik_tl: 500 }, { parca_tl: 2000, iscilik_tl: 500 }]);
    expect(r.onayli_parca_min).toBe(1000);
    expect(r.onayli_parca_max).toBe(2000);
  });
  it("aşırı aykırı değeri eler (medyanın 2.5x üstü)", () => {
    const r = onerTarife([
      { parca_tl: 1000 }, { parca_tl: 1100 }, { parca_tl: 1200 }, { parca_tl: 50000 },
    ]);
    expect(r.onayli_parca_max).toBeLessThan(2000); // 50000 elendi
  });
  it("toplam_tl verildiğinde onu kullanır, yoksa parça+işçilik", () => {
    const r = onerTarife([{ toplam_tl: 3000 }, { toplam_tl: 3000 }, { toplam_tl: 3000 }]);
    expect(r.onayli_beklenen).toBe(3000);
  });
});
```

- [ ] **Step 3: Testi çalıştır, başarısız olduğunu gör**

Run: `npm test`
Beklenen: FAIL — "Cannot find module './_tarife-hesap.js'" / export yok.

- [ ] **Step 4: Saf fonksiyonu yaz**

```js
// api/_tarife-hesap.js — saf harmanlama/öneri mantığı (I/O yok, test edilebilir).

// p. yüzdelik (lineer interpolasyon). Geçersizleri atar. Boşsa null.
export function yuzdelik(arr, p) {
  const v = arr.filter((x) => x != null && !isNaN(x)).map(Number).sort((a, b) => a - b);
  if (!v.length) return null;
  if (v.length === 1) return v[0];
  const idx = (p / 100) * (v.length - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  return lo === hi ? v[lo] : v[lo] + (v[hi] - v[lo]) * (idx - lo);
}

export function medyan(arr) {
  return yuzdelik(arr, 50);
}

// Medyanın 0.4x–2.5x bandı dışındaki değerleri eler (kaba aykırı koruması).
function aykiriEle(arr) {
  const m = medyan(arr);
  if (m == null) return arr;
  return arr.filter((x) => x >= m * 0.4 && x <= m * 2.5);
}

// Ham noktalardan önerilen tarife. points: [{parca_tl, iscilik_tl, toplam_tl}]
// v1: tüm noktalar eşit ağırlık (saha ağırlıklı). Kaynak ağırlığı = v2.
export function onerTarife(points) {
  const n = points.length;
  const parcalar = aykiriEle(points.map((p) => Number(p.parca_tl)).filter((x) => x > 0));
  const isciler  = points.map((p) => Number(p.iscilik_tl)).filter((x) => x > 0);
  const toplamlar = aykiriEle(points.map((p) =>
    p.toplam_tl != null ? Number(p.toplam_tl) : (Number(p.parca_tl || 0) + Number(p.iscilik_tl || 0))
  ).filter((x) => x > 0));
  const az = parcalar.length < 3;
  const R = (x) => (x == null ? null : Math.round(x));
  return {
    onayli_parca_min: parcalar.length ? R(az ? Math.min(...parcalar) : yuzdelik(parcalar, 25)) : null,
    onayli_parca_max: parcalar.length ? R(az ? Math.max(...parcalar) : yuzdelik(parcalar, 75)) : null,
    onayli_iscilik:   isciler.length ? R(medyan(isciler)) : null,
    onayli_beklenen:  toplamlar.length ? R(medyan(toplamlar)) : null,
    veri_noktasi_sayisi: n,
  };
}
```

- [ ] **Step 5: Testi çalıştır, geçtiğini gör**

Run: `npm test`
Beklenen: PASS (tüm testler yeşil).

- [ ] **Step 6: Commit**

```bash
git add api/_tarife-hesap.js api/_tarife-hesap.test.js package.json package-lock.json
git commit -m "feat(tarife): onerTarife harmanlama fonksiyonu + vitest"
```

### Task 4: API uçları — veri / gruplar / onayla

**Files:**
- Create: `api/tarife/veri.js`, `api/tarife/gruplar.js`, `api/tarife/onayla.js`
- Referans desen: `api/admin/sifre-reset.js` (CORS + OPTIONS + `Bearer ADMIN_TOKEN` + supabase)

- [ ] **Step 1: `POST /api/tarife/veri` yaz** (tekil veya dizi/toplu import)

```js
// api/tarife/veri.js — ham veri noktası ekler (tekil obje veya dizi). Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

function gecerli(p) {
  if (!p || typeof p !== "object") return "geçersiz kayıt";
  if (!p.cihaz?.trim()) return "cihaz gerekli";
  if (!p.ariza?.trim()) return "ariza gerekli";
  if (p.parca_tl == null && p.iscilik_tl == null && p.toplam_tl == null)
    return "parca_tl / iscilik_tl / toplam_tl'den en az biri gerekli";
  return null;
}
function temizle(p) {
  return {
    cihaz: p.cihaz.trim(),
    marka: p.marka?.trim() || "Genel",
    ariza: p.ariza.trim(),
    belirtiler: p.belirtiler?.trim() || null,
    hata_kodu: p.hata_kodu?.trim() || null,
    parca_tl: p.parca_tl != null && p.parca_tl !== "" ? Number(p.parca_tl) : null,
    iscilik_tl: p.iscilik_tl != null && p.iscilik_tl !== "" ? Number(p.iscilik_tl) : null,
    toplam_tl: p.toplam_tl != null && p.toplam_tl !== "" ? Number(p.toplam_tl) : null,
    bolge: p.bolge?.trim() || null,
    kaynak: ["saha", "web", "gercek_is", "seed"].includes(p.kaynak) ? p.kaynak : "saha",
    kaynak_servis: p.kaynak_servis?.trim() || null,
    notlar: p.notlar?.trim() || null,
  };
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const body = req.body || {};
  const kayitlar = Array.isArray(body) ? body : [body];
  if (!kayitlar.length) return res.status(400).json({ error: "kayıt yok" });
  for (const k of kayitlar) {
    const hata = gecerli(k);
    if (hata) return res.status(400).json({ error: hata });
  }
  const { data, error } = await supabase.from("tarife_veri").insert(kayitlar.map(temizle)).select("id");
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ eklenen: data.length });
}
```

- [ ] **Step 2: `GET /api/tarife/gruplar` yaz** (grup + öneri + mevcut onay)

```js
// api/tarife/gruplar.js — (cihaz|marka|ariza) gruplarını öneri + durumla döner. Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { onerTarife } from "../_tarife-hesap.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Yalnızca GET" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const { data: veriler, error: e1 } = await supabase
    .from("tarife_veri").select("cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl, kaynak");
  if (e1) return res.status(500).json({ error: e1.message });

  const { data: onaylar, error: e2 } = await supabase
    .from("tarife").select("cihaz, marka, ariza, durum, onayli_parca_min, onayli_parca_max, onayli_iscilik, onayli_beklenen, veri_noktasi_sayisi, guncelleme");
  if (e2) return res.status(500).json({ error: e2.message });

  const map = new Map();
  for (const v of (veriler || [])) {
    const key = `${v.cihaz}|${v.marka}|${v.ariza}`;
    if (!map.has(key)) map.set(key, { cihaz: v.cihaz, marka: v.marka, ariza: v.ariza, points: [] });
    map.get(key).points.push(v);
  }
  const onayMap = new Map((onaylar || []).map((o) => [`${o.cihaz}|${o.marka}|${o.ariza}`, o]));

  // Hem veri noktası olan gruplar hem de yalnız onaylı (SEED) olanlar listelensin
  const keys = new Set([...map.keys(), ...onayMap.keys()]);
  const gruplar = [...keys].map((key) => {
    const g = map.get(key);
    const mevcut = onayMap.get(key) || null;
    const [cihaz, marka, ariza] = key.split("|");
    return {
      cihaz, marka, ariza,
      oneri: g ? onerTarife(g.points) : null,
      mevcut,
      durum: mevcut?.durum || "yok",
      nokta: g ? g.points.length : 0,
    };
  }).sort((a, b) => (a.cihaz + a.ariza).localeCompare(b.cihaz + b.ariza, "tr"));

  return res.status(200).json({ gruplar });
}
```

- [ ] **Step 3: `POST /api/tarife/onayla` yaz** (upsert onaylı)

```js
// api/tarife/onayla.js — onaylı tarifeyi upsert eder. Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const b = req.body || {};
  if (!b.cihaz?.trim() || !b.ariza?.trim()) return res.status(400).json({ error: "cihaz ve ariza gerekli" });
  const sayi = (x) => (x != null && x !== "" ? Number(x) : null);

  const satir = {
    cihaz: b.cihaz.trim(),
    marka: b.marka?.trim() || "Genel",
    ariza: b.ariza.trim(),
    onayli_parca_min: sayi(b.onayli_parca_min),
    onayli_parca_max: sayi(b.onayli_parca_max),
    onayli_iscilik: sayi(b.onayli_iscilik),
    onayli_beklenen: sayi(b.onayli_beklenen),
    veri_noktasi_sayisi: sayi(b.veri_noktasi_sayisi) || 0,
    durum: "onayli",
    onaylayan: b.onaylayan?.trim() || "admin",
    guncelleme: new Date().toISOString(),
  };
  const { error } = await supabase.from("tarife").upsert(satir, { onConflict: "cihaz,marka,ariza" });
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ ok: true });
}
```

- [ ] **Step 4: Push + branch preview'da doğrula**

```bash
git add api/tarife/
git commit -m "feat(tarife): veri/gruplar/onayla API uçları"
git push -u origin feat/tarife-veri-motoru
```
Vercel branch preview URL'sini al (`vercel ls` yerine GitHub PR/Vercel panosundan ya da `list_deployments`). `$PREVIEW` = o URL, `$TOK` = ADMIN_TOKEN.
```bash
# Yetkisiz → 401
curl -s -X POST "$PREVIEW/api/tarife/veri" -H "content-type: application/json" -d '{}' ; echo
# Geçerli ekleme
curl -s -X POST "$PREVIEW/api/tarife/veri" -H "authorization: Bearer $TOK" -H "content-type: application/json" \
  -d '{"cihaz":"Buzdolabı","ariza":"Kompresör değişimi","parca_tl":2600,"iscilik_tl":1200,"kaynak_servis":"Test Servis","bolge":"İstanbul"}' ; echo
# Gruplar (öneri görünmeli)
curl -s "$PREVIEW/api/tarife/gruplar" -H "authorization: Bearer $TOK" | head -c 800 ; echo
```
Beklenen: 401 (token yok); `{"eklenen":1}`; gruplar listesinde Buzdolabı/Kompresör grubunda `oneri` + `nokta:1`.

---

## Slice 3 — Admin arayüzü

### Task 5: `TarifeAdmin.jsx` + `/tarife` rotası

**Files:**
- Create: `src/TarifeAdmin.jsx`
- Modify: `src/main.jsx` (rota ekle)
- Referans: `src/ServisAdmin.jsx` (auth deseni: token URL `?token=`, `Bearer` header, marka renkleri)
- Sabitler: `src/constants.js` (`CIHAZLAR` listesi — cihaz dropdown için)

- [ ] **Step 1: Rotayı ekle** (`src/main.jsx`)

`main.jsx` mevcut path-tabanlı routing kullanıyor. Şu değişiklikleri yap:
1. Import ekle (diğer importların yanına): `import TarifeAdmin from "./TarifeAdmin.jsx";`
2. Path tespitleri arasına ekle: `const isTarife = path === "/tarife";`
3. Render zincirine ekle (örn. `isServisAdmin` satırından sonra): `isTarife ? <TarifeAdmin /> :`

- [ ] **Step 2: `TarifeAdmin.jsx`'i yaz**

```jsx
// src/TarifeAdmin.jsx — Tarife veri giriş + onay paneli. /tarife?token=ADMIN_TOKEN
import React, { useState, useEffect } from "react";
import { CIHAZLAR } from "./constants.js";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", GREEN = "#22C55E",
      SLATE = "#64748B", HAIR = "#E2E8F0", WHITE = "#fff";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

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
      setF({ ...bos, cihaz: f.cihaz, marka: f.marka }); // cihaz/marka'yı koru (seri giriş)
    } catch (e) { setMesaj("✗ " + e.message); }
  };

  // CSV import: başlık satırı = alan adları (cihaz,marka,ariza,parca_tl,iscilik_tl,toplam_tl,bolge,kaynak_servis,notlar)
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
function Onayla() {
  const [gruplar, setGruplar] = useState(null);
  const [hata, setHata] = useState("");
  const [acik, setAcik] = useState(null); // açık grubun key'i
  const [duzen, setDuzen] = useState({}); // düzenlenen öneri alanları

  const yukle = async () => {
    setHata("");
    try { const r = await api("gruplar"); setGruplar(r.gruplar); }
    catch (e) { setHata(e.message); }
  };
  useEffect(() => { yukle(); }, []);

  const grupKey = (g) => `${g.cihaz}|${g.marka}|${g.ariza}`;
  const ac = (g) => {
    const k = grupKey(g);
    setAcik(acik === k ? null : k);
    const o = g.oneri || g.mevcut || {};
    setDuzen({ ...duzen, [k]: {
      onayli_parca_min: o.onayli_parca_min ?? "", onayli_parca_max: o.onayli_parca_max ?? "",
      onayli_iscilik: o.onayli_iscilik ?? "", onayli_beklenen: o.onayli_beklenen ?? "",
    }});
  };
  const onayla = async (g) => {
    const k = grupKey(g);
    try {
      await api("onayla", { method: "POST", body: JSON.stringify({
        cihaz: g.cihaz, marka: g.marka, ariza: g.ariza, veri_noktasi_sayisi: g.nokta, ...duzen[k],
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
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                background: g.durum === "onayli" ? "#DCFCE7" : "#F1F5F9", color: g.durum === "onayli" ? "#166534" : SLATE }}>
                {g.durum === "onayli" ? "ONAYLI" : g.durum === "taslak" ? "TASLAK" : "YENİ"}
              </span>
            </div>
            {acik === k && (
              <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                {g.oneri && <div style={{ fontSize: 12, color: SLATE }}>Öneri: parça {g.oneri.onayli_parca_min}–{g.oneri.onayli_parca_max}, işçilik {g.oneri.onayli_iscilik}, beklenen {g.oneri.onayli_beklenen}</div>}
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="Parça min" value={d.onayli_parca_min} onChange={set("onayli_parca_min")} />
                  <input style={inp} type="number" placeholder="Parça max" value={d.onayli_parca_max} onChange={set("onayli_parca_max")} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="İşçilik" value={d.onayli_iscilik} onChange={set("onayli_iscilik")} />
                  <input style={inp} type="number" placeholder="Beklenen toplam" value={d.onayli_beklenen} onChange={set("onayli_beklenen")} />
                </div>
                <button style={btn} onClick={() => onayla(g)}>Onayla</button>
              </div>
            )}
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
      <style>{FONT}</style>
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>Tarife Veri Motoru</h1>
      <p style={{ color: SLATE, fontSize: 14, marginTop: 0 }}>Saha verisi gir · harmanlanan tarifeyi onayla</p>
      <div style={{ display: "flex", gap: 10, margin: "16px 0 22px" }}>{tabBtn("gir", "Veri Gir")}{tabBtn("onay", "Onayla")}</div>
      {tab === "gir" ? <VeriGir /> : <Onayla />}
    </div>
  );
}
```

- [ ] **Step 3: Build + push + preview doğrulama**

Run: `npm run build` → Beklenen: hata yok.
```bash
git add src/TarifeAdmin.jsx src/main.jsx
git commit -m "feat(tarife): admin giriş + onay arayüzü (/tarife)"
git push
```
Branch preview'da `$PREVIEW/tarife?token=$TOK` aç (preview araçları / tarayıcı):
- Token'sız → "Yetkisiz" mesajı.
- "Veri Gir": form ile bir kayıt ekle → "✓ Eklendi".
- "Onayla": gruplar listelenir; bir grup aç → öneri görünür → değerleri düzenle → "Onayla" → durum "ONAYLI" olur.
Beklenen: tam akış çalışır, marka paletinde.

---

## Slice 4 — CSV import doğrulama (UI'de Task 5'te kuruldu)

### Task 6: CSV import uçtan uca testi

**Files:** (yeni dosya yok — Task 5'teki `importCSV` doğrulanır)

- [ ] **Step 1: Örnek CSV hazırla**

```
cihaz,marka,ariza,parca_tl,iscilik_tl,bolge,kaynak_servis,notlar
Klima,Genel,Gaz dolumu,700,650,İstanbul,Test A,
Klima,Genel,Gaz dolumu,800,700,İstanbul,Test B,
Klima,Genel,Gaz dolumu,750,600,Ankara,Test C,
```

- [ ] **Step 2: Preview'da import et + öneriyi doğrula**

`$PREVIEW/tarife?token=$TOK` → Veri Gir → CSV seç → "✓ 3 kayıt eklendi".
Onayla sekmesi → Klima/Gaz dolumu grubu → `nokta: 3`, öneri parça ~700–800, işçilik medyan 650 görünür.
Beklenen: import çalışır, öneri 3 noktadan hesaplanır.

- [ ] **Step 3: Commit** (değişiklik yoksa atla)

Bu task doğrulama; kod değişikliği yoksa commit gerekmez.

---

## Slice 5 — AI'a bağlama (diagnose refactor, davranış-korumalı)

### Task 7: SEED + prompt + referans'ı sunucuya taşı

**Files:**
- Create: `api/_seed.js`, `api/_tarife.js`
- Modify: `api/diagnose.js`

- [ ] **Step 1: `api/_seed.js` yaz** (SEED'i `src/App.jsx`'ten birebir taşı + refMetni)

`src/App.jsx`'teki `SEED` nesnesini (satır ~29-45) ve `refMetni` fonksiyonunu birebir kopyala; `refMetni`'yi DB referansı kabul edecek şekilde uyarla:

```js
// api/_seed.js — gömülü referans tarife (App.jsx'ten taşındı). DB'de onaylı tarife
// yoksa fallback. (SEED nesnesini App.jsx'ten BİREBİR kopyala.)
export const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,600,500],["Gaz kaçağı/dolum",800,1500,900],["Kompresör değişimi",2500,5000,1200]],
  // ... App.jsx'teki tüm cihazlar birebir ...
  "Diğer": [],
};

// Referans satırlarını (DB veya SEED) prompt metnine çevirir.
// dbReferans: [{ariza, parca_min, parca_max, iscilik}] | []
export function refMetni(cihaz, dbReferans) {
  const arr = (dbReferans && dbReferans.length)
    ? dbReferans.map((r) => [r.ariza, r.parca_min, r.parca_max, r.iscilik])
    : (SEED[cihaz] || []);
  if (!arr.length) return "Bu cihaz için referans tarife yok; Türkiye 2026 piyasasına göre makul tahmin yürüt, uydurma.";
  return arr.map(([ad, pmin, pmax, isc]) => `- ${ad}: parça ${pmin}-${pmax} TL, işçilik ~${isc} TL`).join("\n");
}
```

- [ ] **Step 2: `api/_tarife.js` yaz** (onaylı tarife okuma — moat, sunucuda kalır)

```js
// api/_tarife.js — diagnose için onaylı tarife referansı (sunucu içi; ağa çıkmaz).
import supabase from "./_supabase.js";

export async function getReferans(cihaz, marka = "Genel") {
  const { data, error } = await supabase
    .from("tarife")
    .select("ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik")
    .eq("cihaz", cihaz)
    .in("marka", [marka || "Genel", "Genel"])
    .eq("durum", "onayli");
  if (error || !data?.length) return [];
  return data.map((r) => ({
    ariza: r.ariza, parca_min: r.onayli_parca_min, parca_max: r.onayli_parca_max, iscilik: r.onayli_iscilik,
  }));
}
```

- [ ] **Step 3: `api/diagnose.js`'i refactor et** (yapılandırılmış param al, prompt'u sunucuda kur)

`api/diagnose.js`'i şu şekilde değiştir: `{prompt}` yerine `{cihaz, marka, hataKodu, yas, belirti}` al; `src/App.jsx` `tesisEt`'teki prompt şablonunu (satır ~152-184) buraya BİREBİR taşı, tek fark `${refMetni(cihaz)}` → `${refMetni(cihaz, dbReferans)}`. Anahtar/Claude çağrısı kısmı aynı kalır.

```js
// api/diagnose.js — sunucu-tarafı teşhis. Onaylı tarifeyi referans alır (yoksa SEED).
import { getReferans } from "./_tarife.js";
import { refMetni } from "./_seed.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "ANTHROPIC_API_KEY tanımlı değil" });

  try {
    const { cihaz, marka, hataKodu, yas, belirti } = req.body || {};
    if (!cihaz || !belirti) return res.status(400).json({ error: "cihaz ve belirti gerekli" });

    const dbReferans = await getReferans(cihaz, marka);   // moat: sunucuda kalır
    // ↓↓↓ App.jsx tesisEt'ten BİREBİR taşınan prompt şablonu (refMetni çağrısı DB-aware) ↓↓↓
    const prompt = `Sen Türkiye'deki ev/elektronik cihazları için deneyimli bir arıza teşhis uzmanısın. ...
Cihaz: ${cihaz}
Marka: ${marka || "belirtilmedi"}
Ekrandaki hata kodu: ${hataKodu || "yok"}
Cihaz yaşı: ${yas || "belirtilmedi"}
Belirti: "${belirti}"

REFERANS TARİFE (...):
${refMetni(cihaz, dbReferans)}

... (App.jsx'teki ACİLİYET ÖLÇÜTÜ + JSON şeması + Kurallar bölümleri birebir) ...`;
    // ↑↑↑ şablonun tamamını App.jsx'ten kopyala ↑↑↑

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: prompt }] }),
    });
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data?.error?.message || "Claude hatası" });
    return res.status(200).json({ text: data?.content?.[0]?.text || "" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
```

> NOT: `api/diagnose.js`'in mevcut Claude çağrısı gövdesini (messages/model) bozmamak için önce mevcut dosyayı oku; yalnız "prompt'u req'ten alma" kısmını "sunucuda kurma" ile değiştir, gerisini koru.

- [ ] **Step 4: `src/App.jsx`'i sadeleştir** (yapılandırılmış payload gönder; SEED/refMetni kaldır)

`src/App.jsx`'te:
1. `SEED` nesnesini (satır ~29-45) ve `refMetni` fonksiyonunu (satır ~47-51) SİL (artık `api/_seed.js`'te).
2. `tesisEt` içinde `const prompt = ...` bloğunu SİL.
3. Fetch çağrısını şu gövdeyle değiştir:

```js
const res = await fetch("/api/diagnose", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ cihaz, marka, hataKodu, yas, belirti }),
});
```
`extractJSON` ve `normalizeMaliyet` AYNEN kalır (dönen `data.text` üzerinde çalışır).

- [ ] **Step 5: Build + push + davranış-koruma doğrulaması**

Run: `npm run build` → hata yok.
```bash
git add api/_seed.js api/_tarife.js api/diagnose.js src/App.jsx
git commit -m "feat(tarife): diagnose sunucu-tarafı + onaylı tarife referansı (SEED fallback)"
git push
```
Branch preview'da iki senaryo:
1. **DB tarife VAR (Buzdolabı — SEED migration'dan onaylı):** `$PREVIEW`'da Buzdolabı + "soğutmuyor" teşhisi → geçerli `tahminiMaliyet` döner (DB referansı kullanıldı).
2. **Regresyon yok:** Aynı teşhis, eski davranışla tutarlı makul aralık (±%10 + 1000 TL gidiş bedeli korunur — `normalizeMaliyet` değişmedi).
Doğrula (sunucu logu): `getReferans` boşsa SEED'e düşmeli — onaylı tarifesi olmayan bir cihazda da teşhis çalışmalı.
Beklenen: her iki senaryoda geçerli tahmin; moat verisi yanıtta görünmez (yalnız nihai aralık).

---

## Self-Review Notları (yazım sonrası kontrol edildi)

- **Spec kapsamı:** 2 tablo (T1), SEED migration (T2), harmanlama (T3), API (T4), admin UI+import (T5/T6), diagnose+SEED fallback (T7) → tüm spec bölümleri karşılandı.
- **Tip tutarlılığı:** `onayli_parca_min/max/iscilik/beklenen`, `veri_noktasi_sayisi`, `durum`, `kaynak` adları şema (T1) ↔ API (T4) ↔ UI (T5) ↔ getReferans (T7) boyunca aynı.
- **Placeholder:** Yalnız diagnose prompt şablonu "App.jsx'ten birebir taşı" talimatıyla bırakıldı (mevcut kodun taşınması — uydurma değil; T7 Step 3 net kaynak satırı veriyor). SEED nesnesi de aynı şekilde birebir kopyalanacak (T7 Step 1).
- **Güvenlik:** yeni tablolar RLS açık + anon policy yok; tüm yazma uçları `Bearer ADMIN_TOKEN`; tarife verisi sunucuda kalır.
```
