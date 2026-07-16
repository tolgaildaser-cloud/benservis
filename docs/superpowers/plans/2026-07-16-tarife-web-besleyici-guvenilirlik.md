# Tarife Web Besleyici + Güvenilirlik — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elle-kalibre statik SEED'i, web'den beslenen + insan-onaylı + güvenilirliği ölçülen **kalıcı Supabase tarife veri motoruna** dönüştürmek — mevcut deterministik fiyat hattına (markaKademe/seedBeklenen/A2) dokunmadan.

**Architecture:** 17 Haz "Tarife Veri Motoru" tasarımını canlandırır (Supabase `tarife_veri` ham → `tarife` Onaylı, `onerTarife` harmanlama, ADMIN_TOKEN'lı API, `/tarife` admin UI). Üstüne 3 delta: (1) **web besleyici** `scripts/tarife-topla.mjs` (`kaynak='web'`, çok-kaynak mutabakat + güven); (2) **güvenilirlik** `scripts/tarife-rapor.mjs` (web-vs-mevcut % sapma); (3) **wiring = baked-snapshot** — SEED `src/tarife-seed.js` modülüne çıkarılır, `scripts/tarife-snapshot.mjs` onu Supabase Onaylı tarifeden yeniden üretir; App.jsx modülü import eder, fiyat hattı değişmez.

**Tech Stack:** React 18 + Vite, Vercel serverless (`api/*.js`, ESM), Supabase Postgres (`@supabase/supabase-js` ^2.107, service-role server-side), Anthropic Claude (`claude-sonnet-4-6`) web-extraction için, Firecrawl (opsiyonel, JS/anti-bot siteler). Test: vitest (saf mantık).

**Spec:** `docs/superpowers/specs/2026-07-16-tarife-web-besleyici-guvenilirlik-design.md`
**Temel plan (yeniden kullanılır):** `docs/superpowers/plans/2026-06-17-tarife-veri-motoru.md` — Slice 2-3 kodu oradan alınır; aşağıda yalnız **delta**'lar tam yazılır.

---

## Test & Doğrulama Stratejisi (bu projeye özgü — oku)

- **Saf mantık (vitest, lokal):** `onerTarife()` I/O'suz → TDD. `npm test`.
- **Uçlar/UI (entegrasyon):** `vite.config.js` lokalde `/api`'yi **prod'a proxy'ler** (`https://www.benservis.com`) → yeni uçlar lokal vite'ta çalışmaz. **Branch preview deploy** ile doğrulanır: `git push` → Vercel `feat/tarife-veri-motoru-web` preview URL'si → orada `curl` + tarayıcı.
- **Yerel scriptler (topla/rapor/snapshot/migrate):** `serbis-match.mjs` gibi lokal çalışır. Supabase yazan scriptler API üzerinden gider (`Bearer ADMIN_TOKEN`) → service-role anahtarı lokalde tutulmaz (moat + güvenlik). Env'i **`node --env-file=.env.local scripts/…`** ile yükle (Node 20.6+). `.env.local`'da (gitignored) yalnız `ADMIN_TOKEN` + `ANTHROPIC_API_KEY` (+ ops. `TARGET_BASE`, `FIRECRAWL_API_KEY`). (`migrate-sql` env'siz çalışır — sadece SEED okur.)
- **DB:** Supabase tek proje (prod+preview aynı DB). `supabase/*.sql` SQL editöründe bir kez çalışır. Yeni tablolar RLS-kilitli + prod okumadığı için (Slice 5'e dek) güvenli.
- **Commit:** Her task sonunda, yalnız dokunulan dosyalar (`git add -A` YOK). Branch: `feat/tarife-veri-motoru-web`. Slice 1-4 canlıyı etkilemez; Slice 5 davranış-korumalı (round-trip == mevcut SEED).

---

## Slice 1 — SEED modülü + Şema + Migration

### Task 1: SEED'i `src/tarife-seed.js`'e çıkar (davranış-identik)

**Files:**
- Create: `src/tarife-seed.js`
- Modify: `src/App.jsx` (satır 29-41 SEED bloğu → import)

- [ ] **Step 1: `src/tarife-seed.js` yaz** (App.jsx'teki güncel SEED'i BİREBİR)

```js
// src/tarife-seed.js — referans tarife (SEED). App.jsx + scripts/tarife-topla.mjs okur.
// KAYNAK: başta App.jsx'ten çıkarıldı; scripts/tarife-snapshot.mjs bunu Supabase ONAYLI
// tarifeden YENİDEN ÜRETİR (aynı şekil: cihaz → [[arıza, parça_min, parça_max, işçilik], …]).
// Elle düzenleme yerine tarife'yi onayla + snapshot'ı çalıştır.
export const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,1200,600],["Gaz kaçağı/dolum",900,2000,1400],["Kompresör değişimi",2500,5500,2400],["Fan motoru (no-frost)",400,1200,600]],
  "Çamaşır Makinesi": [["Su giriş valfi",200,1500,600],["Tahliye pompası",200,1200,600],["Rulman/keçe",600,3500,2000],["Elektronik kart",1000,5000,1300],["Kapı kilidi",250,900,500]],
  "Bulaşık Makinesi": [["Tahliye pompası",300,1100,600],["Su giriş valfi",230,1100,600],["Rezistans/ısıtıcı",350,1400,800],["Sirkülasyon (yıkama) motoru",700,2500,900]],
  "Fırın / Ocak / Aspiratör": [["Rezistans",300,800,500],["Termostat",250,500,450],["Fan motoru",350,900,500],["Aspiratör motoru",450,2200,600],["Aspiratör anahtar/kart/lamba",200,700,400]],
  "Klima": [["Gaz dolumu",900,2200,700],["Kapasitör",150,400,350],["Kompresör",2500,6000,2000]],
  "Kombi / Termosifon": [["3 yollu vana",700,1400,800],["Sirkülasyon pompası",1750,4600,900],["Eşanjör",2000,6000,1200],["Rezistans (termosifon)",400,1100,600],["Termostat",300,900,400]],
  "Televizyon / Monitör": [["Backlight LED bar",200,1500,700],["Besleme kartı",400,1500,500],["Anakart",500,3000,700],["Monitör paneli",1000,6000,900],["TV paneli",3000,20000,1500]],
  "Mikrodalga / Air Fryer": [["Magnetron (mikrodalga)",700,1500,600],["Rezistans (air fryer)",250,700,400],["Fan/termostat/kart",300,900,400]],
  "Süpürge": [["Motor",600,2000,500],["Batarya (şarjlı)",500,3000,400],["Fırça/sensör/anakart",200,2500,500]],
  "Su Sebili / Arıtma": [["Filtre seti",350,1200,300],["Pompa/membran",600,1800,600]],
  "Bilgisayar / Yazıcı": [["Güç kaynağı / şarj soketi",50,2700,900],["Ekran kartı/RAM/disk",1000,6000,400],["Anakart",1500,5000,1300],["Ekran/menteşe (laptop)",1200,6000,850],["Yazıcı kafa/kartuş",100,4000,500],["Kağıt besleme/merdane",100,500,500]],
};
```

- [ ] **Step 2: `src/App.jsx`'i güncelle**

`src/App.jsx` satır 29-41'deki `const SEED = { … };` bloğunu SİL. Dosyanın en üstündeki importların yanına ekle (satır ~1-5 civarı):
```js
import { SEED } from "./tarife-seed.js";
```
`refMetni` (satır 43) ve `seedBeklenen` (satır 63) fonksiyonları AYNEN kalır — artık import edilen `SEED`'i kullanırlar.

- [ ] **Step 3: Build + davranış-identik doğrula**

Run: `npm run build`
Beklenen: hata yok. SEED yalnız yer değiştirdi (inline → modül); değerler birebir aynı → fiyat çıktısı değişmez.

- [ ] **Step 4: Commit**

```bash
git add src/tarife-seed.js src/App.jsx
git commit -m "refactor(tarife): SEED'i src/tarife-seed.js modülüne çıkar (davranış-identik)"
```

### Task 2: Şema — `tarife_veri` (+`kaynak_url`) + `tarife` (+`guven`) + RLS

**Files:**
- Create: `supabase/tarife.sql`

- [ ] **Step 1: Şema dosyasını yaz** (17 Haz şeması + `kaynak_url` + `guven` eklentileri)

```sql
-- supabase/tarife.sql — Tarife Veri Motoru tabloları. Supabase SQL editöründe çalıştır.

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
  kaynak_url    text,                                  -- web besleyici denetim izi (YENİ)
  tarih         date not null default current_date,
  notlar        text,
  created_at    timestamptz not null default now()
);
create index if not exists tarife_veri_key_idx on tarife_veri (cihaz, marka, ariza);
alter table tarife_veri enable row level security;   -- anon policy YOK → yalnız service-role

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
  guven               text check (guven in ('yuksek','orta','dusuk')),  -- güvenilirlik sinyali (YENİ)
  veri_noktasi_sayisi int not null default 0,
  onaylayan           text,
  guncelleme          timestamptz not null default now(),
  created_at          timestamptz not null default now(),
  unique (cihaz, marka, ariza)
);
alter table tarife enable row level security;        -- anon policy YOK → yalnız service-role
```

- [ ] **Step 2: Supabase'de çalıştır + RLS doğrula**

Supabase Dashboard → SQL Editor → içeriği yapıştır → Run. Table Editor'da `tarife` + `tarife_veri` görünür, ikisinde de "RLS enabled" (anon policy yok).

- [ ] **Step 3: Commit**

```bash
git add supabase/tarife.sql
git commit -m "feat(tarife): tarife_veri (+kaynak_url) + tarife (+guven) tabloları, RLS açık"
```

### Task 3: Migration — güncel SEED'den `supabase/tarife-seed.sql` üret

17 Haz planı Task 2'nin SQL'i **bayat** (eski taksonomi/değerler). Bunun yerine SEED modülünden **üreteç** ile türetiriz (DRY + güncel).

**Files:**
- Create: `scripts/tarife-migrate-sql.mjs`
- Generate: `supabase/tarife-seed.sql`

- [ ] **Step 1: Üreteç scriptini yaz**

```js
// scripts/tarife-migrate-sql.mjs — src/tarife-seed.js → supabase/tarife-seed.sql (Onaylı baseline).
// Çalıştır: node scripts/tarife-migrate-sql.mjs > supabase/tarife-seed.sql
import { SEED } from "../src/tarife-seed.js";

const esc = (s) => String(s).replace(/'/g, "''");
const satirlar = [];
for (const [cihaz, arizalar] of Object.entries(SEED)) {
  for (const [ariza, pmin, pmax, isc] of arizalar) {
    satirlar.push(
      `  ('${esc(cihaz)}','Genel','${esc(ariza)}',${pmin},${pmax},${isc},'onayli','yuksek','seed',0)`
    );
  }
}
console.log(`-- supabase/tarife-seed.sql — ÜRETİLDİ (scripts/tarife-migrate-sql.mjs). Elle düzenleme.
-- Gömülü SEED'i ilk ONAYLI tarife olarak içe al (baseline). marka='Genel'. Idempotent.
insert into tarife (cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik, durum, guven, onaylayan, veri_noktasi_sayisi)
values
${satirlar.join(",\n")}
on conflict (cihaz, marka, ariza) do nothing;`);
```

- [ ] **Step 2: Üret + satır say**

Run: `node scripts/tarife-migrate-sql.mjs > supabase/tarife-seed.sql`
Beklenen: `supabase/tarife-seed.sql` oluşur, **45 values satırı** (11 cihaz).
Doğrula: `grep -c "^  ('" supabase/tarife-seed.sql` → `45`.

- [ ] **Step 3: Supabase'de çalıştır + doğrula**

SQL Editor'da `supabase/tarife-seed.sql` çalıştır. Sonra: `select count(*) from tarife;` → **45**. `select cihaz, count(*) from tarife group by cihaz;` → 11 cihaz.

- [ ] **Step 4: Commit**

```bash
git add scripts/tarife-migrate-sql.mjs supabase/tarife-seed.sql
git commit -m "feat(tarife): SEED→Onaylı migration üreteci + güncel tarife-seed.sql (45 satır)"
```

---

## Slice 2 — Harmanlama (+güven) + API

### Task 4: `onerTarife()` + güven (TDD, vitest)

17 Haz planı Task 3'ün `onerTarife`'sini temel al; **`guven` alanı ekle**.

**Files:**
- Create: `api/_tarife-hesap.js`, `api/_tarife-hesap.test.js`
- Modify: `package.json` (vitest devDep + `"test": "vitest run"`)

- [ ] **Step 1: vitest ekle**

Run: `npm install -D vitest` → `package.json` `scripts`'e `"test": "vitest run"` ekle.

- [ ] **Step 2: Failing test yaz** (17 Haz testleri + güven testleri)

```js
// api/_tarife-hesap.test.js
import { describe, it, expect } from "vitest";
import { onerTarife, medyan, yuzdelik, guvenSeviyesi } from "./_tarife-hesap.js";

describe("yuzdelik/medyan", () => {
  it("medyan tek/çift", () => { expect(medyan([10,20,30])).toBe(20); expect(medyan([10,20,30,40])).toBe(25); });
  it("boş → null", () => { expect(medyan([])).toBe(null); expect(yuzdelik([],25)).toBe(null); });
});

describe("guvenSeviyesi", () => {
  it("3+ nokta düşük varyans → yuksek", () => expect(guvenSeviyesi([1000,1100,1200])).toBe("yuksek"));
  it("2 nokta → orta", () => expect(guvenSeviyesi([1000,1200])).toBe("orta"));
  it("1 nokta → dusuk", () => expect(guvenSeviyesi([1000])).toBe("dusuk"));
  it("3+ nokta yüksek varyans → orta", () => expect(guvenSeviyesi([500,1200,6000])).toBe("orta"));
});

describe("onerTarife", () => {
  it("3+ noktada parça P25–P75, işçilik medyan, güven", () => {
    const r = onerTarife([
      { parca_tl:1000, iscilik_tl:500 }, { parca_tl:1200, iscilik_tl:600 },
      { parca_tl:1400, iscilik_tl:500 }, { parca_tl:1600, iscilik_tl:700 },
    ]);
    expect(r.onayli_parca_min).toBe(1150);
    expect(r.onayli_parca_max).toBe(1450);
    expect(r.onayli_iscilik).toBe(550);
    expect(r.veri_noktasi_sayisi).toBe(4);
    expect(r.guven).toBe("yuksek");
  });
  it("<3 nokta → parça min/max, güven dusuk/orta", () => {
    const r = onerTarife([{ parca_tl:1000 }, { parca_tl:2000 }]);
    expect(r.onayli_parca_min).toBe(1000); expect(r.onayli_parca_max).toBe(2000); expect(r.guven).toBe("orta");
  });
  it("aşırı aykırıyı eler", () => {
    const r = onerTarife([{ parca_tl:1000 },{ parca_tl:1100 },{ parca_tl:1200 },{ parca_tl:50000 }]);
    expect(r.onayli_parca_max).toBeLessThan(2000);
  });
  it("toplam_tl verilirse onu kullanır", () => {
    const r = onerTarife([{ toplam_tl:3000 },{ toplam_tl:3000 },{ toplam_tl:3000 }]);
    expect(r.onayli_beklenen).toBe(3000);
  });
});
```

- [ ] **Step 3: Testi çalıştır → FAIL** (`npm test` → "Cannot find module './_tarife-hesap.js'").

- [ ] **Step 4: `api/_tarife-hesap.js` yaz** (17 Haz + güven)

```js
// api/_tarife-hesap.js — saf harmanlama/öneri mantığı (I/O yok, test edilebilir).

export function yuzdelik(arr, p) {
  const v = arr.filter((x) => x != null && !isNaN(x)).map(Number).sort((a, b) => a - b);
  if (!v.length) return null;
  if (v.length === 1) return v[0];
  const idx = (p / 100) * (v.length - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  return lo === hi ? v[lo] : v[lo] + (v[hi] - v[lo]) * (idx - lo);
}
export function medyan(arr) { return yuzdelik(arr, 50); }

function aykiriEle(arr) {
  const m = medyan(arr);
  if (m == null) return arr;
  return arr.filter((x) => x >= m * 0.4 && x <= m * 2.5);
}

// Güven: nokta sayısı + dağılım. yuksek = 3+ & düşük varyans; orta = 2 veya 3+ yüksek varyans; dusuk = ≤1.
export function guvenSeviyesi(parcalar) {
  const n = parcalar.length;
  if (n <= 1) return "dusuk";
  if (n === 2) return "orta";
  const m = medyan(parcalar);
  const yayilim = m ? (yuzdelik(parcalar, 75) - yuzdelik(parcalar, 25)) / m : 99;
  return yayilim <= 0.5 ? "yuksek" : "orta";
}

// Ham noktalardan önerilen tarife. points: [{parca_tl, iscilik_tl, toplam_tl}]
export function onerTarife(points) {
  const n = points.length;
  const parcalar  = aykiriEle(points.map((p) => Number(p.parca_tl)).filter((x) => x > 0));
  const isciler   = points.map((p) => Number(p.iscilik_tl)).filter((x) => x > 0);
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
    guven: guvenSeviyesi(parcalar),
  };
}
```

- [ ] **Step 5: Testi çalıştır → PASS** (`npm test`).

- [ ] **Step 6: Commit**

```bash
git add api/_tarife-hesap.js api/_tarife-hesap.test.js package.json package-lock.json
git commit -m "feat(tarife): onerTarife harmanlama + güven seviyesi (vitest)"
```

### Task 5: API uçları — veri / gruplar / onayla

**17 Haz planı Task 4'teki 3 dosyayı BİREBİR uygula** (`api/tarife/veri.js`, `api/tarife/gruplar.js`, `api/tarife/onayla.js`) — importlar (`../_supabase.js` default, `../_verimor.js` setCorsHeaders), `Bearer ADMIN_TOKEN` auth, `onerTarife` çağrısı doğrulandı (dosyalar mevcut). Aşağıdaki **3 delta** ile:

**Files:**
- Create: `api/tarife/veri.js`, `api/tarife/gruplar.js`, `api/tarife/onayla.js` (17 Haz Task 4 kodu + delta)

- [ ] **Step 1: `veri.js`** — 17 Haz kodu + `temizle()`'ye `kaynak_url` ekle:
```js
    kaynak_url: p.kaynak_url?.trim() || null,
```
(diğer alanların yanına; `gecerli()` + auth + insert aynı.)

- [ ] **Step 2: `gruplar.js`** — 17 Haz kodu AYNEN (öneri artık `oneri.guven` de döner çünkü `onerTarife` güven ekliyor; ekstra kod gerekmez).

- [ ] **Step 3: `onayla.js`** — 17 Haz kodu + `satir`'a `guven` ekle:
```js
    guven: ["yuksek","orta","dusuk"].includes(b.guven) ? b.guven : null,
```

- [ ] **Step 4: Push + preview'da doğrula**

```bash
git add api/tarife/
git commit -m "feat(tarife): veri/gruplar/onayla uçları (+kaynak_url, +guven)"
git push -u origin feat/tarife-veri-motoru-web
```
`$PREVIEW` = Vercel branch preview URL, `$TOK` = ADMIN_TOKEN:
```bash
curl -s -X POST "$PREVIEW/api/tarife/veri" -H "content-type: application/json" -d '{}'; echo   # → 401
curl -s -X POST "$PREVIEW/api/tarife/veri" -H "authorization: Bearer $TOK" -H "content-type: application/json" \
  -d '{"cihaz":"Buzdolabı","ariza":"Kompresör değişimi","parca_tl":4200,"kaynak":"web","kaynak_url":"https://cimri.com/x","bolge":"İstanbul"}'; echo  # → {"eklenen":1}
curl -s "$PREVIEW/api/tarife/gruplar" -H "authorization: Bearer $TOK" | head -c 600; echo  # Buzdolabı/Kompresör → oneri + guven + nokta:1
```
Beklenen: 401; `{"eklenen":1}`; gruplarda öneri + `guven`.

---

## Slice 3 — Admin UI

### Task 6: `TarifeAdmin.jsx` + `/tarife` rotası (+güven rozeti)

**17 Haz planı Task 5'i BİREBİR uygula** (`src/TarifeAdmin.jsx` + `src/main.jsx` rotası; auth `?token=`, marka paleti, Veri Gir + Onayla + CSV). Aşağıdaki delta ile.

**Files:**
- Create: `src/TarifeAdmin.jsx` (17 Haz Task 5 kodu + güven rozeti)
- Modify: `src/main.jsx`

- [ ] **Step 1: `main.jsx` rotası** — 17 Haz gibi, mevcut path deseniyle uyumlu:
```js
import TarifeAdmin from "./TarifeAdmin.jsx";      // importlar arasına
const isTarife = path === "/tarife";              // path tespitleri arasına
isTarife        ? <TarifeAdmin /> :               // render zincirine (isAdmin satırından önce)
```

- [ ] **Step 2: `TarifeAdmin.jsx`** — 17 Haz Task 5 kodu; `Onayla` grubunun durum rozetinin yanına **güven rozeti** ekle:
```jsx
{g.oneri?.guven && (
  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, marginLeft: 6,
    background: g.oneri.guven === "yuksek" ? "#DCFCE7" : g.oneri.guven === "orta" ? "#FEF9C3" : "#FEE2E2",
    color: g.oneri.guven === "yuksek" ? "#166534" : g.oneri.guven === "orta" ? "#854D0E" : "#991B1B" }}>
    güven: {g.oneri.guven}
  </span>
)}
```
`onayla()` gövdesine `guven: g.oneri?.guven` ekle (POST body'ye).

- [ ] **Step 3: Build + push + preview**

Run: `npm run build` → hata yok.
```bash
git add src/TarifeAdmin.jsx src/main.jsx
git commit -m "feat(tarife): admin giriş+onay arayüzü /tarife (+güven rozeti)"
git push
```
`$PREVIEW/tarife?token=$TOK`: token'sız → "Yetkisiz"; Veri Gir → ekle; Onayla → grup aç → öneri + güven rozeti → düzenle → Onayla → "ONAYLI".

---

## Slice 4 — Web Besleyici + Rapor (YENİ)

> **Not:** Kaynak seçimi + extraction ampiriktir. Bu dilim **scaffold + Buzdolabı ile kanıt**; sonra `tarife-rapor.mjs` ile bakıp diğer cihazlara genişletilir (iteratif). Cron YOK — insan onayı şart.

### Task 7: `scripts/tarife-topla.mjs` — çok-kaynak → mutabakat → güven → POST

**Files:**
- Create: `scripts/tarife-topla.mjs`
- Create: `scripts/kaynaklar.json` (cihaz→arıza→[kaynak URL/arama] haritası; Buzdolabı ile başla)

- [ ] **Step 1: `scripts/kaynaklar.json`** (Buzdolabı ilk; pilot kaynakları)

```json
{
  "Buzdolabı": {
    "Kompresör değişimi": ["https://www.cimri.com/buzdolabi-kompresor-fiyatlari", "https://buzdolabimotordegisimfiyati.com.tr/"],
    "Termostat/sensör": ["https://www.hizmetgo.app/fiyatlari/buzdolabi-termostat-degisimi", "https://www.cimri.com/buzdolabi-termostat"],
    "Gaz kaçağı/dolum": ["https://www.ucretii.com/buzdolabi-gaz-dolum-ucreti_19.html"]
  }
}
```

- [ ] **Step 2: `scripts/tarife-topla.mjs`** (fetch → Claude extract → consensus → POST)

```js
// scripts/tarife-topla.mjs — web'den tarife noktası toplar (kaynak='web'), API'ye POST'lar.
// Çalıştır: node scripts/tarife-topla.mjs Buzdolabı   (arg yoksa kaynaklar.json'daki tüm cihazlar)
// Env (.env.local): ADMIN_TOKEN, ANTHROPIC_API_KEY, TARGET_BASE (vars. https://www.benservis.com)
import fs from "node:fs";
import { onerTarife } from "../api/_tarife-hesap.js";

const KAYNAKLAR = JSON.parse(fs.readFileSync(new URL("./kaynaklar.json", import.meta.url)));
const BASE = process.env.TARGET_BASE || "https://www.benservis.com";
const ADMIN = process.env.ADMIN_TOKEN, ANTH = process.env.ANTHROPIC_API_KEY;
if (!ADMIN || !ANTH) { console.error("ADMIN_TOKEN + ANTHROPIC_API_KEY gerekli (.env.local)"); process.exit(1); }

// Bir sayfadan (cihaz, arıza) için parça/işçilik/toplam çıkar — Claude ile (kırılgan selektör yok).
async function sayfadanCek(url, cihaz, ariza) {
  let html = "";
  try {
    const r = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
    html = (await r.text()).replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 12000);
  } catch (e) { console.warn(`  ✗ fetch ${url}: ${e.message}`); return null; }
  const prompt = `Aşağıdaki Türkçe sayfa metninden "${cihaz} — ${ariza}" için fiyat çıkar. SADECE bu arıza/parça.
Yanıt SADECE JSON: {"parca_min":sayı|null,"parca_max":sayı|null,"iscilik":sayı|null,"toplam":sayı|null}
Marka bazlı aralık varsa parca_min=en ucuz marka, parca_max=en pahalı. Emin değilsen null. TL, sayı (nokta/virgül yok).
METİN: ${html}`;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": ANTH, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 300, messages: [{ role: "user", content: prompt }] }),
    });
    const d = await r.json();
    const t = (d?.content?.[0]?.text || "").replace(/```json|```/g, "");
    const j = JSON.parse(t.slice(t.indexOf("{"), t.lastIndexOf("}") + 1));
    return { parca_min: j.parca_min, parca_max: j.parca_max, iscilik: j.iscilik, toplam: j.toplam, url };
  } catch (e) { console.warn(`  ✗ extract ${url}: ${e.message}`); return null; }
}

async function postVeri(kayit) {
  const r = await fetch(`${BASE}/api/tarife/veri`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${ADMIN}` },
    body: JSON.stringify(kayit),
  });
  if (!r.ok) console.warn(`  ✗ POST: ${(await r.json().catch(()=>({}))).error || r.status}`);
  return r.ok;
}

const hedefCihaz = process.argv[2];
const cihazlar = hedefCihaz ? [hedefCihaz] : Object.keys(KAYNAKLAR);
for (const cihaz of cihazlar) {
  for (const [ariza, urller] of Object.entries(KAYNAKLAR[cihaz] || {})) {
    console.log(`\n${cihaz} — ${ariza}`);
    const ornekler = (await Promise.all(urller.map((u) => sayfadanCek(u, cihaz, ariza)))).filter(Boolean);
    if (!ornekler.length) { console.log("  (veri yok)"); continue; }
    // Her kaynak = bir veri noktası (parça-merkezli; toplam varsa onu da taşı)
    for (const o of ornekler) {
      const parca = o.parca_max != null ? (o.parca_min != null ? (o.parca_min + o.parca_max) / 2 : o.parca_max) : null;
      await postVeri({
        cihaz, ariza, marka: "Genel", kaynak: "web", kaynak_url: o.url,
        parca_tl: parca, iscilik_tl: o.iscilik, toplam_tl: o.toplam,
        notlar: `web-topla; parca_min=${o.parca_min} parca_max=${o.parca_max}`,
      });
    }
    const oneri = onerTarife(ornekler.map((o) => ({
      parca_tl: o.parca_max != null ? (o.parca_min != null ? (o.parca_min + o.parca_max) / 2 : o.parca_max) : null,
      iscilik_tl: o.iscilik, toplam_tl: o.toplam,
    })));
    console.log(`  → ${ornekler.length} kaynak, güven=${oneri.guven}, parça ${oneri.onayli_parca_min}-${oneri.onayli_parca_max}, işçilik ${oneri.onayli_iscilik}`);
  }
}
console.log("\nBitti. Onay: /tarife?token=… → Onayla. Sapma: node scripts/tarife-rapor.mjs");
```

- [ ] **Step 3: Buzdolabı'nda çalıştır (Slice 1-2 preview'da canlıyken)**

Run: `node --env-file=.env.local scripts/tarife-topla.mjs Buzdolabı`
Beklenen: her arıza için kaynaklardan çekim + güven + `{"eklenen":1}` POST'lar. Supabase `tarife_veri`'de `kaynak='web'` satırlar. (Bazı kaynaklar fetch'i engellerse `✗` log'lar — kalanlar yeter; kaynak listesi iteratif genişler.)

- [ ] **Step 4: Commit**

```bash
git add scripts/tarife-topla.mjs scripts/kaynaklar.json
git commit -m "feat(tarife): web besleyici tarife-topla.mjs (çok-kaynak, Claude extract, güven)"
```

### Task 8: `scripts/tarife-rapor.mjs` — web-vs-mevcut % sapma

**Files:**
- Create: `scripts/tarife-rapor.mjs`

- [ ] **Step 1: Scripti yaz** (gruplar API'sinden öneri vs mevcut Onaylı → % sapma)

```js
// scripts/tarife-rapor.mjs — her (cihaz,arıza) için WEB önerisi vs mevcut ONAYLI → % sapma tablosu.
// Çalıştır: node scripts/tarife-rapor.mjs   (Env: ADMIN_TOKEN, TARGET_BASE)
const BASE = process.env.TARGET_BASE || "https://www.benservis.com";
const ADMIN = process.env.ADMIN_TOKEN;
if (!ADMIN) { console.error("ADMIN_TOKEN gerekli"); process.exit(1); }

const r = await fetch(`${BASE}/api/tarife/gruplar`, { headers: { authorization: `Bearer ${ADMIN}` } });
const { gruplar } = await r.json();

const orta = (mn, mx) => (mn != null && mx != null ? (Number(mn) + Number(mx)) / 2 : null);
const satirlar = [];
for (const g of gruplar || []) {
  if (!g.oneri || !g.mevcut) continue;              // hem web önerisi hem mevcut Onaylı olanlar
  const web = orta(g.oneri.onayli_parca_min, g.oneri.onayli_parca_max);
  const mev = orta(g.mevcut.onayli_parca_min, g.mevcut.onayli_parca_max);
  if (web == null || mev == null || !mev) continue;
  const sapma = Math.round(((web - mev) / mev) * 100);
  satirlar.push({ ad: `${g.cihaz} — ${g.ariza}`, mevcut: Math.round(mev), web: Math.round(web), sapma, guven: g.oneri.guven, nokta: g.nokta });
}
satirlar.sort((a, b) => Math.abs(b.sapma) - Math.abs(a.sapma));

console.log("# Tarife Sapma Raporu (web parça-ortası vs mevcut Onaylı)\n");
console.log("| Cihaz — Arıza | Mevcut | Web | Sapma | Güven | Nokta | Durum |");
console.log("|---|--:|--:|--:|:--:|--:|:--|");
for (const s of satirlar) {
  const bayrak = Math.abs(s.sapma) > 20 ? "⚠️ KALİBRASYON" : "✓ ±%20 içinde";
  console.log(`| ${s.ad} | ${s.mevcut} | ${s.web} | %${s.sapma > 0 ? "+" : ""}${s.sapma} | ${s.guven} | ${s.nokta} | ${bayrak} |`);
}
console.log(`\nHedef: |sapma| ≤ %20. ⚠️ satırlar için kaynakları/Onaylı değeri gözden geçir.`);
```

- [ ] **Step 2: Çalıştır**

Run: `node --env-file=.env.local scripts/tarife-rapor.mjs > /tmp/tarife-sapma.md && cat /tmp/tarife-sapma.md`
Beklenen: markdown tablo; web-beslenen arızalar için mevcut-vs-web % sapma, ±%20 dışı ⚠️ işaretli.

- [ ] **Step 3: Commit**

```bash
git add scripts/tarife-rapor.mjs
git commit -m "feat(tarife): sapma raporu (web vs mevcut Onaylı, ±%20 hedef)"
```

---

## Slice 5 — Snapshot Wiring (17 Haz Task 7 REPLACE — davranış-korumalı)

### Task 9: `scripts/tarife-snapshot.mjs` — Supabase Onaylı → `src/tarife-seed.js` + round-trip

**Files:**
- Create: `scripts/tarife-snapshot.mjs`
- Regenerate: `src/tarife-seed.js` (Supabase Onaylı'dan)

- [ ] **Step 1: Snapshot scriptini yaz** (Onaylı tarife → SEED şekli → `src/tarife-seed.js`)

```js
// scripts/tarife-snapshot.mjs — Supabase ONAYLI tarife → src/tarife-seed.js (App.jsx'in okuduğu modül).
// Çalıştır: node scripts/tarife-snapshot.mjs   (Env: ADMIN_TOKEN, TARGET_BASE)
// gruplar API'si mevcut ONAYLI satırları (marka=Genel) SEED şekline çevirir. Round-trip: baseline == çıktı.
import fs from "node:fs";
const BASE = process.env.TARGET_BASE || "https://www.benservis.com";
const ADMIN = process.env.ADMIN_TOKEN;
if (!ADMIN) { console.error("ADMIN_TOKEN gerekli"); process.exit(1); }

const r = await fetch(`${BASE}/api/tarife/gruplar`, { headers: { authorization: `Bearer ${ADMIN}` } });
const { gruplar } = await r.json();

const seed = {};
for (const g of gruplar || []) {
  if (g.durum !== "onayli" || (g.marka && g.marka !== "Genel")) continue;
  const m = g.mevcut;
  if (!m || m.onayli_parca_min == null || m.onayli_parca_max == null || m.onayli_iscilik == null) continue;
  (seed[g.cihaz] ||= []).push([g.ariza, Number(m.onayli_parca_min), Number(m.onayli_parca_max), Number(m.onayli_iscilik)]);
}
if (!Object.keys(seed).length) { console.error("Onaylı tarife bulunamadı — migration çalıştı mı?"); process.exit(1); }

const govde = Object.entries(seed).map(([cihaz, satirlar]) =>
  `  ${JSON.stringify(cihaz)}: [${satirlar.map((s) => JSON.stringify(s)).join(",")}],`
).join("\n");
const cikti = `// src/tarife-seed.js — ÜRETİLDİ (scripts/tarife-snapshot.mjs, Supabase Onaylı tarife).
// Elle düzenleme; /tarife'de onayla + snapshot'ı yeniden çalıştır. Şekil: cihaz → [[arıza, parça_min, parça_max, işçilik], …].
export const SEED = {
${govde}
};
`;
fs.writeFileSync(new URL("../src/tarife-seed.js", import.meta.url), cikti);
console.log(`✓ src/tarife-seed.js üretildi (${Object.keys(seed).length} cihaz).`);
```

- [ ] **Step 2: Round-trip doğrula** (davranış-koruma kanıtı)

Baseline'ı yedekle, snapshot çalıştır, **değerleri sıra-bağımsız** karşılaştır (snapshot alfabetik döner; seedBeklenen ada göre `.find()` yapar → sıra fiyatı etkilemez, önemli olan değer kümesi):
```bash
cp src/tarife-seed.js /tmp/tarife-seed.baseline.js
node --env-file=.env.local scripts/tarife-snapshot.mjs
node -e "const norm=S=>JSON.stringify(Object.entries(S).sort().map(([k,v])=>[k,[...v].map(r=>JSON.stringify(r)).sort()]));Promise.all([import('./src/tarife-seed.js'),import('/tmp/tarife-seed.baseline.js')]).then(([a,b])=>{const ok=norm(a.SEED)===norm(b.SEED);console.log(ok?'✓ ROUND-TRIP: değerler identik (sıra önemsiz)':'✗ DEĞER FARKI VAR — canlıya ALMA');})"
```
Beklenen: **`✓ ROUND-TRIP: değerler identik`** — migration güncel SEED'den dolduğu için snapshot aynı değer kümesine döner (fiyat hattı bozulmaz). Değer farkı varsa: migration/onerTarife değerlerini gözden geçir, canlıya alma. (İlk snapshot dosyayı el-sırasından alfabetiğe çevirebilir = kozmetik diff; değerler korunduğu sürece sorun yok.)

- [ ] **Step 3: Build + commit**

Run: `npm run build` → hata yok (App.jsx zaten `src/tarife-seed.js` import ediyor — Task 1).
```bash
git add scripts/tarife-snapshot.mjs src/tarife-seed.js
git commit -m "feat(tarife): snapshot (Supabase Onaylı → src/tarife-seed.js), round-trip identik"
```

> **Kullanım döngüsü (bundan sonra):** web besleyici (`topla`) → `/tarife` Onayla → `node scripts/tarife-snapshot.mjs` → `src/tarife-seed.js` değişir → **diff'i gözden geçir** → commit → deploy. Yani tarife her güncellemesi bir insan-onaylı commit. Snapshot build'e bağlı DEĞİL (hermetik build; commit'li dosya kullanılır).

---

## Self-Review Notları

- **Spec kapsamı:** §3 (17 Haz Slice1-3 canlandır: T2/T5/T6) + §4 web besleyici (T7) + §5 rapor/güven (T4/T8) + §6 snapshot wiring (T1/T9) + §7 migration fix (T3) → tüm spec bölümleri karşılandı. Kapsam-dışı (full server-side moat, gercek_is, saha, arıza-doğruluğu) plana dahil edilmedi ✓.
- **Tip tutarlılığı:** `onayli_parca_min/max/iscilik/beklenen`, `guven('yuksek'|'orta'|'dusuk')`, `kaynak_url`, `veri_noktasi_sayisi`, `durum` adları şema (T2) ↔ onerTarife (T4) ↔ API (T5) ↔ UI (T6) ↔ topla/rapor/snapshot (T7-9) boyunca aynı.
- **Placeholder:** 17 Haz Task 4/5 kodu "birebir uygula + şu delta" ile referanslandı (mevcut committed doküman; uydurma değil, delta'lar tam yazıldı). Diğer tüm kod tam.
- **Davranış-koruma:** SEED çıkarma (T1) identik; migration güncel SEED'den (T3); snapshot round-trip == baseline (T9 Step 2 kanıtı). Canlı fiyat hattı (markaKademe/seedBeklenen/A2/normalizeMaliyet) HİÇ değişmez.
- **Güvenlik:** yeni tablolar RLS + anon policy yok; yazma uçları Bearer ADMIN_TOKEN; scriptler API üzerinden (service-role lokalde değil); web verisi hep Taslak/Genel, insan onayı şart (karar #7).
- **Risk (T7 scraper):** ampirik — bazı kaynaklar fetch'i engelleyebilir (403/JS). Azaltma: Claude-extraction (selektörsüz) + çok-kaynak + Buzdolabı-önce + iteratif kaynak genişletme; gerekirse `sayfadanCek`'e Firecrawl backend eklenir (FIRECRAWL_API_KEY).
