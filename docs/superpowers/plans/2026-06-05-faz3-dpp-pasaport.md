# Benservis Faz 3 — DPP Pasaport Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Seri numara tabanlı dijital ürün pasaportu — cihaz kaydı, tamir geçmişi ve fotoğraf desteği.

**Architecture:** Supabase PostgreSQL (cihazlar + tamir_kayitlari) + Supabase Storage (fotoğraflar). Üç Vercel serverless endpoint (GET/POST cihaz, POST tamir). Frontend'de `DPPEkrani` tam ekran bileşeni; iki giriş noktası: teşhis sonrası CTA + ana ekran banner. Auth yok — seri no giren herkes pasaport oluşturur/görür.

**Tech Stack:** React 18 + Vite (ESM), @supabase/supabase-js v2, Vercel serverless (ES module), Supabase PostgreSQL + Storage

---

## Dosya Yapısı

| Dosya | İşlem | Sorumluluk |
|-------|-------|------------|
| `supabase/schema.sql` | Yeni | Referans şema (tablolar + index) |
| `api/_supabase.js` | Yeni | Supabase admin client (service key) — API fonksiyonları paylaşır |
| `src/lib/supabase.js` | Yeni | Supabase anon client — frontend Storage upload için |
| `src/constants.js` | Yeni | Paylaşılan `CIHAZLAR` dizisi (App.jsx'ten taşınır) |
| `api/dpp/cihaz.js` | Yeni | GET ?seri_no + POST upsert — cihaz oluştur/getir |
| `api/dpp/tamir.js` | Yeni | POST — tamir kaydı ekle |
| `src/DPPEkrani.jsx` | Yeni | Tam DPP UI: arama → yeni cihaz → pasaport → tamir ekle |
| `src/App.jsx` | Güncelle | showDPP state + 2 giriş noktası |

---

## Task 1: Supabase Kurulumu

**Files:**
- Create: `supabase/schema.sql`

> Bu task manuel adımlar içerir. Kod yazmadan önce Supabase hazır olmalı.

- [ ] **Step 1: Supabase projesi oluştur**

  1. [supabase.com](https://supabase.com) → "New Project"
  2. Name: `benservis`, Region: **EU West 1 (Ireland)** (KVKK/GDPR için), güçlü şifre seç
  3. Proje oluşturulana kadar bekle (~2 dakika)

- [ ] **Step 2: Şemayı çalıştır**

  Supabase Dashboard → SQL Editor → New Query → aşağıdaki SQL'i çalıştır:

  ```sql
  -- Cihaz kaydı
  CREATE TABLE cihazlar (
    id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    seri_no               text UNIQUE NOT NULL,
    kategori              text,
    marka                 text,
    model                 text,
    renk                  text,
    uretim_yili           int,
    satin_alma_tarihi     date,
    garanti_bitis_tarihi  date,
    fotograflar           text[] DEFAULT '{}',
    notlar                text,
    created_at            timestamptz DEFAULT now()
  );

  -- Tamir geçmişi
  CREATE TABLE tamir_kayitlari (
    id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    cihaz_id              uuid REFERENCES cihazlar(id) ON DELETE CASCADE,
    tarih                 date NOT NULL,
    yapilan_islem         text NOT NULL,
    degistirilen_parcalar text[] DEFAULT '{}',
    maliyet               int,
    servis_adi            text,
    servis_turu           text NOT NULL DEFAULT 'harici',
    benservis_is_id       text,
    fotograflar           text[] DEFAULT '{}',
    notlar                text,
    created_at            timestamptz DEFAULT now()
  );

  CREATE INDEX ON tamir_kayitlari(cihaz_id);
  ```

  Run → "Success" mesajını gör.

- [ ] **Step 3: Storage bucket oluştur**

  Dashboard → Storage → New Bucket
  - Name: `dpp-fotograflar`
  - Public bucket: ✅ açık
  - File size limit: 5 MB
  - Allowed MIME types: `image/jpeg, image/png, image/webp`

- [ ] **Step 4: Kimlik bilgilerini al**

  Dashboard → Settings → API:
  - **Project URL** → `SUPABASE_URL` olarak kopyala
  - **anon / public** key → `VITE_SUPABASE_ANON_KEY` olarak kopyala
  - **service_role** key → `SUPABASE_SERVICE_KEY` olarak kopyala (GİZLİ — frontend'e gitme)

- [ ] **Step 5: schema.sql dosyasını kaydet**

  ```bash
  mkdir -p supabase
  ```

  `supabase/schema.sql` dosyası oluştur (referans için):

  ```sql
  -- Benservis DPP Şeması — Faz 3
  -- Bu dosya referans amaçlıdır. Canlı şema Supabase Dashboard'da yönetilir.

  CREATE TABLE cihazlar (
    id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    seri_no               text UNIQUE NOT NULL,
    kategori              text,
    marka                 text,
    model                 text,
    renk                  text,
    uretim_yili           int,
    satin_alma_tarihi     date,
    garanti_bitis_tarihi  date,
    fotograflar           text[] DEFAULT '{}',
    notlar                text,
    created_at            timestamptz DEFAULT now()
  );

  CREATE TABLE tamir_kayitlari (
    id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    cihaz_id              uuid REFERENCES cihazlar(id) ON DELETE CASCADE,
    tarih                 date NOT NULL,
    yapilan_islem         text NOT NULL,
    degistirilen_parcalar text[] DEFAULT '{}',
    maliyet               int,
    servis_adi            text,
    servis_turu           text NOT NULL DEFAULT 'harici',
    benservis_is_id       text,
    fotograflar           text[] DEFAULT '{}',
    notlar                text,
    created_at            timestamptz DEFAULT now()
  );

  CREATE INDEX ON tamir_kayitlari(cihaz_id);
  ```

- [ ] **Step 6: Commit**

  ```bash
  git add supabase/schema.sql
  git commit -m "feat: Supabase DPP şeması — cihazlar + tamir_kayitlari"
  ```

---

## Task 2: Bağımlılıklar + İstemci Modülleri

**Files:**
- Create: `api/_supabase.js`
- Create: `src/lib/supabase.js`
- Create: `src/constants.js`
- Modify: `src/App.jsx` (CIHAZLAR import)
- Modify: `package.json` (bağımlılık)

- [ ] **Step 1: @supabase/supabase-js yükle**

  ```bash
  npm install @supabase/supabase-js
  ```

  Beklenen: `package.json` dependencies'e `"@supabase/supabase-js": "^2.x.x"` eklenir.

- [ ] **Step 2: Yerel env dosyası oluştur**

  `.env.local` dosyası oluştur (git'e girmez):

  ```
  VITE_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
  VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
  SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```

  Task 1 Step 4'te kopyalanan değerleri yerine yaz.

  `.gitignore`'a `.env.local` zaten var mı kontrol et:
  ```bash
  grep -q ".env.local" .gitignore || echo ".env.local" >> .gitignore
  ```

- [ ] **Step 3: `api/_supabase.js` oluştur**

  ```javascript
  // api/_supabase.js
  // Supabase admin client — yalnız serverless API fonksiyonlarında kullanılır.
  // SUPABASE_SERVICE_KEY frontend'e asla gitmez.
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  export default supabase;
  ```

- [ ] **Step 4: `src/lib/supabase.js` oluştur**

  ```bash
  mkdir -p src/lib
  ```

  ```javascript
  // src/lib/supabase.js
  // Supabase anon client — yalnız frontend Storage upload için.
  // Anon key public'tir; DB erişimi RLS ile korunur.
  import { createClient } from "@supabase/supabase-js";

  export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  ```

- [ ] **Step 5: `src/constants.js` oluştur**

  `App.jsx`'teki `CIHAZLAR` dizisini paylaşılan dosyaya taşı:

  ```javascript
  // src/constants.js
  export const CIHAZLAR = [
    "Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Fırın / Ocak", "Klima",
    "Kombi", "Televizyon", "Termosifon / Şofben", "Mikrodalga", "Elektrik Süpürgesi",
    "Su Sebili / Arıtma", "Cep Telefonu", "Robot Süpürge", "Air Fryer",
    "Masaüstü Bilgisayar", "Notebook", "Yazıcı", "Diğer",
  ];
  ```

- [ ] **Step 6: `src/App.jsx`'i güncelle**

  `App.jsx` başına import ekle, `CIHAZLAR` tanımını kaldır:

  ```javascript
  // Dosyanın başındaki mevcut import satırlarından sonra ekle:
  import { CIHAZLAR } from "./constants.js";
  ```

  `App.jsx` içindeki şu satırı **sil:**
  ```javascript
  const CIHAZLAR = [
    "Buzdolabı","Çamaşır Makinesi","Bulaşık Makinesi","Fırın / Ocak","Klima",
    "Kombi","Televizyon","Termosifon / Şofben","Mikrodalga","Elektrik Süpürgesi",
    "Su Sebili / Arıtma","Cep Telefonu","Robot Süpürge","Air Fryer",
    "Masaüstü Bilgisayar","Notebook","Yazıcı","Diğer",
  ];
  ```

- [ ] **Step 7: Build kontrolü**

  ```bash
  npm run build
  ```

  Beklenen: `✓ built in ...ms` — hata yok.

- [ ] **Step 8: Commit**

  ```bash
  git add api/_supabase.js src/lib/supabase.js src/constants.js src/App.jsx package.json package-lock.json
  git commit -m "feat: Supabase istemci modülleri + paylaşılan CIHAZLAR sabiti"
  ```

---

## Task 3: `api/dpp/cihaz.js`

**Files:**
- Create: `api/dpp/cihaz.js`

Tek dosya, iki method: `GET ?seri_no=X` (pasaport getir) ve `POST` (upsert — var ise getir, yok ise oluştur).

- [ ] **Step 1: Dizin oluştur**

  ```bash
  mkdir -p api/dpp
  ```

- [ ] **Step 2: `api/dpp/cihaz.js` yaz**

  ```javascript
  // api/dpp/cihaz.js
  import supabase from "../_supabase.js";

  export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();

    // GET ?seri_no=SN123 → pasaport getir
    if (req.method === "GET") {
      const { seri_no } = req.query;
      if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });

      const { data: cihaz, error: ce } = await supabase
        .from("cihazlar")
        .select("*")
        .eq("seri_no", seri_no)
        .single();

      if (ce) {
        if (ce.code === "PGRST116") return res.status(404).json({ error: "Cihaz bulunamadı" });
        return res.status(500).json({ error: ce.message });
      }

      const { data: tamirler, error: te } = await supabase
        .from("tamir_kayitlari")
        .select("*")
        .eq("cihaz_id", cihaz.id)
        .order("tarih", { ascending: false });

      if (te) return res.status(500).json({ error: te.message });

      const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
      return res.status(200).json({ cihaz, tamirler: tamirler || [], toplam_maliyet });
    }

    // POST → upsert (var ise getir, yok ise oluştur)
    if (req.method === "POST") {
      const {
        seri_no, kategori, marka, model, renk,
        uretim_yili, satin_alma_tarihi, garanti_bitis_tarihi,
        fotograflar, notlar,
      } = req.body || {};

      if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });

      // Var mı kontrol et
      const { data: existing } = await supabase
        .from("cihazlar")
        .select("*")
        .eq("seri_no", seri_no)
        .single();

      if (existing) {
        const { data: tamirler } = await supabase
          .from("tamir_kayitlari")
          .select("*")
          .eq("cihaz_id", existing.id)
          .order("tarih", { ascending: false });
        const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
        return res.status(200).json({ cihaz: existing, tamirler: tamirler || [], toplam_maliyet, created: false });
      }

      // Yeni oluştur
      const { data: cihaz, error } = await supabase
        .from("cihazlar")
        .insert({
          seri_no,
          kategori: kategori || null,
          marka: marka || null,
          model: model || null,
          renk: renk || null,
          uretim_yili: uretim_yili || null,
          satin_alma_tarihi: satin_alma_tarihi || null,
          garanti_bitis_tarihi: garanti_bitis_tarihi || null,
          fotograflar: fotograflar || [],
          notlar: notlar || null,
        })
        .select()
        .single();

      if (error) return res.status(500).json({ error: error.message });
      return res.status(201).json({ cihaz, tamirler: [], toplam_maliyet: 0, created: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  }
  ```

- [ ] **Step 3: Yerel sunucu başlat**

  ```bash
  npx vercel dev
  ```

  Beklenen: `Ready! Available at http://localhost:3000`

- [ ] **Step 4: GET — bulunamayan seri no testi**

  ```bash
  curl "http://localhost:3000/api/dpp/cihaz?seri_no=TEST001"
  ```

  Beklenen: `{"error":"Cihaz bulunamadı"}` ve HTTP 404.

- [ ] **Step 5: POST — yeni cihaz oluşturma testi**

  ```bash
  curl -X POST http://localhost:3000/api/dpp/cihaz \
    -H "Content-Type: application/json" \
    -d '{"seri_no":"TEST001","kategori":"Klima","marka":"Daikin","model":"FTXB35C","uretim_yili":2021}'
  ```

  Beklenen: HTTP 201, `{"cihaz":{"id":"...","seri_no":"TEST001",...},"tamirler":[],"toplam_maliyet":0,"created":true}`

- [ ] **Step 6: POST — aynı seri no ile tekrar çağır (upsert)**

  ```bash
  curl -X POST http://localhost:3000/api/dpp/cihaz \
    -H "Content-Type: application/json" \
    -d '{"seri_no":"TEST001"}'
  ```

  Beklenen: HTTP 200, `"created":false` — var olan kaydı döndürür.

- [ ] **Step 7: GET — mevcut cihazı getir**

  ```bash
  curl "http://localhost:3000/api/dpp/cihaz?seri_no=TEST001"
  ```

  Beklenen: HTTP 200, `{"cihaz":{...},"tamirler":[],"toplam_maliyet":0}`

- [ ] **Step 8: Commit**

  ```bash
  git add api/dpp/cihaz.js
  git commit -m "feat: /api/dpp/cihaz — GET pasaport + POST upsert"
  ```

---

## Task 4: `api/dpp/tamir.js`

**Files:**
- Create: `api/dpp/tamir.js`

- [ ] **Step 1: `api/dpp/tamir.js` yaz**

  ```javascript
  // api/dpp/tamir.js
  import supabase from "../_supabase.js";

  export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const {
      cihaz_id, tarih, yapilan_islem,
      degistirilen_parcalar, maliyet, servis_adi,
      servis_turu, benservis_is_id, fotograflar, notlar,
    } = req.body || {};

    if (!cihaz_id || !tarih || !yapilan_islem) {
      return res.status(400).json({ error: "cihaz_id, tarih ve yapilan_islem gerekli" });
    }

    // cihaz_id geçerli mi kontrol et
    const { data: cihaz, error: ce } = await supabase
      .from("cihazlar")
      .select("id")
      .eq("id", cihaz_id)
      .single();

    if (ce || !cihaz) return res.status(404).json({ error: "Cihaz bulunamadı" });

    const { data: tamir, error } = await supabase
      .from("tamir_kayitlari")
      .insert({
        cihaz_id,
        tarih,
        yapilan_islem,
        degistirilen_parcalar: degistirilen_parcalar || [],
        maliyet: maliyet || null,
        servis_adi: servis_adi || null,
        servis_turu: servis_turu || "harici",
        benservis_is_id: benservis_is_id || null,
        fotograflar: fotograflar || [],
        notlar: notlar || null,
      })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(tamir);
  }
  ```

- [ ] **Step 2: Geçersiz cihaz_id testi**

  ```bash
  curl -X POST http://localhost:3000/api/dpp/tamir \
    -H "Content-Type: application/json" \
    -d '{"cihaz_id":"00000000-0000-0000-0000-000000000000","tarih":"2024-01-15","yapilan_islem":"Test"}'
  ```

  Beklenen: HTTP 404, `{"error":"Cihaz bulunamadı"}`

- [ ] **Step 3: Geçerli tamir kaydı ekle (Task 3'te oluşturulan cihazın ID'sini kullan)**

  Önce cihaz ID'sini al:
  ```bash
  curl "http://localhost:3000/api/dpp/cihaz?seri_no=TEST001" | python3 -m json.tool | grep '"id"' | head -1
  ```

  Sonra tamir ekle (`CIHAZ_ID` yerine gerçek UUID yaz):
  ```bash
  curl -X POST http://localhost:3000/api/dpp/tamir \
    -H "Content-Type: application/json" \
    -d '{
      "cihaz_id": "CIHAZ_ID",
      "tarih": "2024-06-01",
      "yapilan_islem": "Gaz dolumu",
      "degistirilen_parcalar": [],
      "maliyet": 850,
      "servis_adi": "Klima Pro",
      "servis_turu": "harici"
    }'
  ```

  Beklenen: HTTP 201, tam tamir objesi.

- [ ] **Step 4: Pasaport GET ile tamirin göründüğünü doğrula**

  ```bash
  curl "http://localhost:3000/api/dpp/cihaz?seri_no=TEST001"
  ```

  Beklenen: `"tamirler":[{"yapilan_islem":"Gaz dolumu","maliyet":850,...}]`, `"toplam_maliyet":850`

- [ ] **Step 5: Commit**

  ```bash
  git add api/dpp/tamir.js
  git commit -m "feat: /api/dpp/tamir — POST tamir kaydı ekle"
  ```

---

## Task 5: `src/DPPEkrani.jsx` — İskelet + Arama Ekranı

**Files:**
- Create: `src/DPPEkrani.jsx`

Bileşen state machine'i ve arama ekranı. Sonraki tasklarda diğer ekranlar eklenir.

- [ ] **Step 1: `src/DPPEkrani.jsx` oluştur**

  ```jsx
  // src/DPPEkrani.jsx
  import React, { useState } from "react";

  // Tasarım token'ları (App.jsx ile tutarlı)
  const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

  // ─── Arama Ekranı ────────────────────────────────────────────────────────────
  function AramaEkrani({ onBulundu, onYeni, initialSeriNo }) {
    const [seriNo, setSeriNo] = useState(initialSeriNo || "");
    const [yukleniyor, setYukleniyor] = useState(false);
    const [hata, setHata] = useState("");

    const ara = async () => {
      const sn = seriNo.trim().toUpperCase();
      if (!sn) { setHata("Seri numarası girin."); return; }
      setHata("");
      setYukleniyor(true);
      try {
        const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(sn)}`);
        if (res.status === 404) {
          onYeni(sn);
          return;
        }
        if (!res.ok) throw new Error("Sunucu hatası");
        const data = await res.json();
        onBulundu(data);
      } catch (e) {
        setHata("Bir sorun oluştu, tekrar dene.");
      } finally {
        setYukleniyor(false);
      }
    };

    return (
      <div style={s.ekran}>
        <h2 style={s.baslik}>📋 Cihaz Pasaportu</h2>
        <p style={s.aciklama}>Seri numarasını gir — mevcut pasaportu getir veya yeni oluştur.</p>
        <input
          style={s.input}
          value={seriNo}
          onChange={(e) => setSeriNo(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && ara()}
          placeholder="örn. SN1234567890"
          autoFocus
        />
        {hata && <p style={s.hata}>{hata}</p>}
        <button style={s.cta} onClick={ara} disabled={yukleniyor}>
          {yukleniyor ? "Aranıyor…" : "Pasaportu Getir →"}
        </button>
      </div>
    );
  }

  // ─── Placeholder ekranlar (sonraki tasklarda doldurulacak) ────────────────────
  function YeniCihazForm({ seriNo, teshisContext, onOlusturuldu }) {
    return <div style={s.ekran}><p>Yeni Cihaz Formu — Task 6'da gelecek</p></div>;
  }

  function PasaportGorunum({ pasaport, onTamirEkle, onYenile }) {
    return <div style={s.ekran}><p>Pasaport Görünümü — Task 7'de gelecek</p></div>;
  }

  function TamirEkleForm({ cihazId, onEklendi, onIptal }) {
    return <div style={s.ekran}><p>Tamir Ekle Formu — Task 8'de gelecek</p></div>;
  }

  // ─── Ana Bileşen ──────────────────────────────────────────────────────────────
  export default function DPPEkrani({ initialSeriNo, teshisContext, onKapat }) {
    // ekran: "arama" | "yeni_cihaz" | "pasaport" | "tamir_ekle"
    const [ekran, setEkran] = useState("arama");
    const [bekleyenSeriNo, setBekleyenSeriNo] = useState("");
    const [pasaport, setPasaport] = useState(null); // { cihaz, tamirler, toplam_maliyet }

    const handleBulundu = (data) => { setPasaport(data); setEkran("pasaport"); };
    const handleYeni = (sn) => { setBekleyenSeriNo(sn); setEkran("yeni_cihaz"); };
    const handleOlusturuldu = (data) => { setPasaport(data); setEkran("pasaport"); };
    const handleTamirEklendi = async () => {
      // Pasaportu yenile
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(pasaport.cihaz.seri_no)}`);
      if (res.ok) setPasaport(await res.json());
      setEkran("pasaport");
    };

    return (
      <div style={s.overlay}>
        <div style={s.panel}>
          {/* Sticky header */}
          <div style={s.header}>
            <span style={s.headerTitle}>DPP Pasaport</span>
            <button style={s.kapat} onClick={onKapat}>✕</button>
          </div>
          <div style={s.icerik}>
            {ekran === "arama" && (
              <AramaEkrani
                onBulundu={handleBulundu}
                onYeni={handleYeni}
                initialSeriNo={initialSeriNo}
              />
            )}
            {ekran === "yeni_cihaz" && (
              <YeniCihazForm
                seriNo={bekleyenSeriNo}
                teshisContext={teshisContext}
                onOlusturuldu={handleOlusturuldu}
              />
            )}
            {ekran === "pasaport" && pasaport && (
              <PasaportGorunum
                pasaport={pasaport}
                onTamirEkle={() => setEkran("tamir_ekle")}
                onYenile={() => {}}
              />
            )}
            {ekran === "tamir_ekle" && pasaport && (
              <TamirEkleForm
                cihazId={pasaport.cihaz.id}
                onEklendi={handleTamirEklendi}
                onIptal={() => setEkran("pasaport")}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── Stiller ──────────────────────────────────────────────────────────────────
  const s = {
    overlay: {
      position: "fixed", inset: 0, background: "rgba(34,48,42,.55)",
      zIndex: 100, display: "flex", alignItems: "flex-end",
      justifyContent: "center",
    },
    panel: {
      width: "100%", maxWidth: 640, maxHeight: "92vh",
      background: CREAM, borderRadius: "20px 20px 0 0",
      display: "flex", flexDirection: "column", overflow: "hidden",
    },
    header: {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "16px 20px", borderBottom: "1px solid #E5DCC9",
      background: "#FFFDF8", flexShrink: 0,
    },
    headerTitle: { fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: INK },
    kapat: {
      background: "none", border: "none", fontSize: 18, color: "#9A9384",
      padding: "4px 8px", borderRadius: 6,
    },
    icerik: { overflowY: "auto", flex: 1, padding: "20px" },
    ekran: {},
    baslik: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: INK },
    aciklama: { fontSize: 14, color: "#5C6660", margin: "0 0 18px", lineHeight: 1.5 },
    input: {
      width: "100%", padding: "12px 14px", borderRadius: 11,
      border: "1.5px solid #DDD3BE", background: "#FFFDF8",
      fontSize: 15, fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
      letterSpacing: "0.05em",
    },
    hata: { color: "#B23A2E", fontSize: 13, margin: "8px 0 0" },
    cta: {
      marginTop: 14, width: "100%", padding: "13px", borderRadius: 12,
      border: "none", background: AMBER, color: "#fff",
      fontSize: 15, fontWeight: 700, fontFamily: "'Hanken Grotesk', sans-serif",
    },
  };
  ```

- [ ] **Step 2: App.jsx'e geçici import + test**

  `src/App.jsx` başına (ServisEkrani import'unun hemen altına) ekle:

  ```javascript
  import DPPEkrani from "./DPPEkrani.jsx";
  ```

  `App` fonksiyonunun state'lerine ekle (showServisler satırından sonra):

  ```javascript
  const [showDPP, setShowDPP] = useState(false);
  const [dppInitialSeriNo, setDppInitialSeriNo] = useState("");
  ```

  Return bloğunda, `ServisEkrani` conditional'ının altına ekle:

  ```jsx
  {showDPP && (
    <DPPEkrani
      initialSeriNo={dppInitialSeriNo}
      teshisContext={adim === "sonuc" ? { cihaz, marka } : null}
      onKapat={() => { setShowDPP(false); setDppInitialSeriNo(""); }}
    />
  )}
  ```

  `sifirla` fonksiyonuna `setShowDPP(false)` ekle:

  ```javascript
  const sifirla = () => {
    setSonuc(null); setBelirti(""); setHataKodu(""); setMarka("");
    setYas(""); setCihaz(""); setAdim("form");
    setShowServisler(false); setShowDPP(false);
  };
  ```

- [ ] **Step 3: Geçici test butonu ekle**

  `faz2` div'inin hemen altına (altBtns div'inden önce) geçici buton:

  ```jsx
  <button
    style={{ ...s.reset, marginTop: 8 }}
    onClick={() => { setDppInitialSeriNo(""); setShowDPP(true); }}
  >
    [TEST] DPP Aç
  </button>
  ```

- [ ] **Step 4: Dev sunucusunda test et**

  ```bash
  npm run dev
  ```

  Tarayıcıda: `http://localhost:5173`
  - Teşhis yap → sonuç ekranı çık
  - "[TEST] DPP Aç" butonuna bas
  - Panel açılıyor mu? ✅
  - Seri no yazıp Enter/buton — 404 → "Yeni Cihaz Formu" placeholder ✅
  - Mevcut seri no (TEST001 Task 3'te oluşturuldu) → "Pasaport Görünümü" placeholder ✅
  - ✕ butonu paneli kapatıyor ✅

- [ ] **Step 5: Geçici test butonunu kaldır (App.jsx)**

  Adım 3'te eklenen geçici butonu sil.

- [ ] **Step 6: Commit**

  ```bash
  git add src/DPPEkrani.jsx src/App.jsx
  git commit -m "feat: DPPEkrani iskelet — arama ekranı + state machine"
  ```

---

## Task 6: `src/DPPEkrani.jsx` — Yeni Cihaz Formu

**Files:**
- Modify: `src/DPPEkrani.jsx` (YeniCihazForm doldurulur)

- [ ] **Step 1: `YeniCihazForm` bileşenini yaz**

  `DPPEkrani.jsx`'te `YeniCihazForm` placeholder'ını şununla değiştir:

  ```jsx
  function YeniCihazForm({ seriNo, teshisContext, onOlusturuldu }) {
    const [form, setForm] = useState({
      kategori: teshisContext?.cihaz || "",
      marka: teshisContext?.marka || "",
      model: "",
      renk: "",
      uretim_yili: "",
      satin_alma_tarihi: "",
      garanti_bitis_tarihi: "",
    });
    const [yukleniyor, setYukleniyor] = useState(false);
    const [hata, setHata] = useState("");

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const olustur = async () => {
      setHata("");
      setYukleniyor(true);
      try {
        const body = {
          seri_no: seriNo,
          kategori: form.kategori || null,
          marka: form.marka || null,
          model: form.model || null,
          renk: form.renk || null,
          uretim_yili: form.uretim_yili ? parseInt(form.uretim_yili) : null,
          satin_alma_tarihi: form.satin_alma_tarihi || null,
          garanti_bitis_tarihi: form.garanti_bitis_tarihi || null,
        };
        const res = await fetch("/api/dpp/cihaz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("Sunucu hatası");
        const data = await res.json();
        onOlusturuldu(data);
      } catch {
        setHata("Pasaport oluşturulamadı, tekrar dene.");
      } finally {
        setYukleniyor(false);
      }
    };

    return (
      <div style={s.ekran}>
        <h2 style={s.baslik}>Yeni Cihaz</h2>
        <p style={{ ...s.aciklama, marginBottom: 4 }}>
          Seri no: <strong style={{ color: INK, letterSpacing: "0.05em" }}>{seriNo}</strong>
        </p>
        <p style={{ ...s.aciklama, fontSize: 13, color: "#9A9384" }}>
          Kayıtlı pasaport bulunamadı. Cihaz bilgilerini gir.
        </p>

        <label style={s.label}>Cihaz türü</label>
        <div style={s.chipWrap}>
          {CIHAZLAR.map((c) => (
            <button
              key={c}
              onClick={() => set("kategori", c)}
              style={{ ...s.chip, ...(form.kategori === c ? s.chipActive : {}) }}
            >
              {c}
            </button>
          ))}
        </div>

        <div style={s.row}>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Marka</label>
            <input style={s.input} value={form.marka} onChange={(e) => set("marka", e.target.value)} placeholder="Daikin" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Model</label>
            <input style={s.input} value={form.model} onChange={(e) => set("model", e.target.value)} placeholder="FTXB35C" />
          </div>
        </div>

        <div style={s.row}>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Renk <span style={s.opt}>(opsiyonel)</span></label>
            <input style={s.input} value={form.renk} onChange={(e) => set("renk", e.target.value)} placeholder="Beyaz" />
          </div>
          <div style={{ width: 100 }}>
            <label style={s.label}>Üretim yılı</label>
            <input style={s.input} type="number" value={form.uretim_yili} onChange={(e) => set("uretim_yili", e.target.value)} placeholder="2021" />
          </div>
        </div>

        <div style={s.row}>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Satın alma tarihi <span style={s.opt}>(opsiyonel)</span></label>
            <input style={s.input} type="date" value={form.satin_alma_tarihi} onChange={(e) => set("satin_alma_tarihi", e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Garanti bitişi <span style={s.opt}>(opsiyonel)</span></label>
            <input style={s.input} type="date" value={form.garanti_bitis_tarihi} onChange={(e) => set("garanti_bitis_tarihi", e.target.value)} />
          </div>
        </div>

        {hata && <p style={s.hata}>{hata}</p>}
        <button style={{ ...s.cta, marginTop: 18 }} onClick={olustur} disabled={yukleniyor}>
          {yukleniyor ? "Oluşturuluyor…" : "Pasaport Oluştur →"}
        </button>
      </div>
    );
  }
  ```

  Dosyanın başına (AramaEkrani'nden önce) `CIHAZLAR` import'unu ekle:

  ```javascript
  import { CIHAZLAR } from "./constants.js";
  ```

  `s` objesine stil ekle:

  ```javascript
  // Mevcut s objesine şunları ekle:
  label: { display: "block", fontSize: 13.5, fontWeight: 700, margin: "14px 0 7px", color: INK },
  opt: { fontWeight: 500, color: "#9A9384", fontSize: 12 },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { fontSize: 12.5, padding: "7px 12px", borderRadius: 999, border: "1.5px solid #DDD3BE", background: "#FFFDF8", color: "#5C6660", fontWeight: 600 },
  chipActive: { background: INK, color: CREAM, borderColor: INK },
  row: { display: "flex", gap: 12 },
  ```

- [ ] **Step 2: Dev sunucusunda test et**

  `npm run dev` → Teşhis yap (Klima seç) → sonuç → "[TEST] DPP Aç" → yeni seri no gir → Enter
  - Yeni Cihaz Formu açılıyor ✅
  - Teşhis bağlamından kategori otomatik seçili (Klima) ✅
  - Formu doldur → "Pasaport Oluştur" → placeholder pasaport ekranına geçiyor ✅
  - Supabase Dashboard → Table Editor → `cihazlar` → yeni kayıt görünüyor ✅

- [ ] **Step 3: Commit**

  ```bash
  git add src/DPPEkrani.jsx
  git commit -m "feat: DPPEkrani — yeni cihaz formu + teşhis bağlamı"
  ```

---

## Task 7: `src/DPPEkrani.jsx` — Pasaport Görünümü

**Files:**
- Modify: `src/DPPEkrani.jsx` (PasaportGorunum doldurulur)

- [ ] **Step 1: `PasaportGorunum` bileşenini yaz**

  Placeholder'ı şununla değiştir:

  ```jsx
  function PasaportGorunum({ pasaport, onTamirEkle }) {
    const { cihaz, tamirler, toplam_maliyet } = pasaport;

    const garantiDurumu = () => {
      if (!cihaz.garanti_bitis_tarihi) return null;
      const bitis = new Date(cihaz.garanti_bitis_tarihi);
      const bugun = new Date();
      const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
      if (fark > 0) return { label: `Garanti: ${fark} gün kaldı`, renk: GREEN };
      return { label: "Garanti süresi dolmuş", renk: "#B23A2E" };
    };

    const garanti = garantiDurumu();

    return (
      <div style={s.ekran}>
        {/* Cihaz başlığı */}
        <div style={s.pasaportKart}>
          <div style={s.pasaportBaslik}>
            {cihaz.marka && cihaz.model
              ? `${cihaz.marka} ${cihaz.model}`
              : cihaz.marka || cihaz.kategori || "Cihaz"}
          </div>
          <div style={s.pasaportAlt}>
            {cihaz.kategori && <span style={s.rozet}>{cihaz.kategori}</span>}
            {cihaz.uretim_yili && <span style={s.metaBilgi}>{cihaz.uretim_yili}</span>}
            {garanti && (
              <span style={{ ...s.metaBilgi, color: garanti.renk, fontWeight: 700 }}>
                {garanti.label}
              </span>
            )}
          </div>
          <div style={s.seriNo}>SN: {cihaz.seri_no}</div>
          {toplam_maliyet > 0 && (
            <div style={s.toplamMaliyet}>
              Toplam tamir maliyeti:{" "}
              <strong>{toplam_maliyet.toLocaleString("tr-TR")} TL</strong>
            </div>
          )}
          {/* Cihaz fotoğrafları */}
          {cihaz.fotograflar?.length > 0 && (
            <div style={s.fotoGaleri}>
              {cihaz.fotograflar.map((url, i) => (
                <img key={i} src={url} alt={`Cihaz ${i + 1}`} style={s.fotoKucuk} />
              ))}
            </div>
          )}
        </div>

        {/* Tamir zaman çizelgesi */}
        <div style={s.secBaslik}>
          Tamir Geçmişi
          <span style={s.tamirSayisi}>{tamirler.length} kayıt</span>
        </div>

        {tamirler.length === 0 ? (
          <p style={s.bosMetin}>Henüz tamir kaydı yok.</p>
        ) : (
          tamirler.map((t) => (
            <div key={t.id} style={s.tamirKart}>
              <div style={s.tamirUst}>
                <span style={s.tamirTarih}>
                  {new Date(t.tarih).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                {t.servis_turu === "benservis" && (
                  <span style={s.dogrulanmisRozet}>✓ Doğrulanmış</span>
                )}
                {t.servis_turu === "harici" && <span style={s.hariciRozet}>Harici Servis</span>}
                {t.servis_turu === "sahip" && <span style={s.sahipRozet}>Sahip</span>}
              </div>
              <div style={s.tamirIslem}>{t.yapilan_islem}</div>
              {t.servis_adi && <div style={s.tamirServis}>{t.servis_adi}</div>}
              {t.degistirilen_parcalar?.length > 0 && (
                <div style={s.parcalar}>
                  {t.degistirilen_parcalar.map((p, i) => (
                    <span key={i} style={s.parcaChip}>{p}</span>
                  ))}
                </div>
              )}
              {t.maliyet != null && (
                <div style={s.tamirMaliyet}>{t.maliyet.toLocaleString("tr-TR")} TL</div>
              )}
              {t.fotograflar?.length > 0 && (
                <div style={s.fotoGaleri}>
                  {t.fotograflar.map((url, i) => (
                    <img key={i} src={url} alt={`Tamir ${i + 1}`} style={s.fotoKucuk} />
                  ))}
                </div>
              )}
            </div>
          ))
        )}

        <button style={{ ...s.cta, marginTop: 16 }} onClick={onTamirEkle}>
          + Tamir Kaydı Ekle
        </button>
      </div>
    );
  }
  ```

  `s` objesine stil ekle:

  ```javascript
  pasaportKart: {
    background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14,
    padding: "16px 18px", marginBottom: 18,
  },
  pasaportBaslik: { fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK },
  pasaportAlt: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6, alignItems: "center" },
  rozet: { fontSize: 12, fontWeight: 700, background: INK, color: CREAM, padding: "3px 9px", borderRadius: 999 },
  metaBilgi: { fontSize: 12.5, color: "#5C6660" },
  seriNo: { fontSize: 12, color: "#9A9384", marginTop: 8, letterSpacing: "0.05em" },
  toplamMaliyet: { fontSize: 13, color: "#5C6660", marginTop: 6 },
  fotoGaleri: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 },
  fotoKucuk: { width: 64, height: 64, objectFit: "cover", borderRadius: 8, border: "1px solid #E5DCC9" },
  secBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600,
    color: INK, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  tamirSayisi: { fontSize: 12, color: "#9A9384", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400 },
  bosMetin: { fontSize: 14, color: "#9A9384", textAlign: "center", padding: "24px 0" },
  tamirKart: {
    background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 12,
    padding: "12px 14px", marginBottom: 10,
  },
  tamirUst: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  tamirTarih: { fontSize: 12.5, color: "#9A9384" },
  dogrulanmisRozet: { fontSize: 11, fontWeight: 700, color: GREEN, background: "rgba(58,125,68,.1)", padding: "2px 8px", borderRadius: 999 },
  hariciRozet: { fontSize: 11, color: "#5C6660", background: "#F0EAD8", padding: "2px 8px", borderRadius: 999 },
  sahipRozet: { fontSize: 11, color: AMBER, background: "rgba(200,99,43,.1)", padding: "2px 8px", borderRadius: 999 },
  tamirIslem: { fontSize: 14.5, fontWeight: 700, color: INK },
  tamirServis: { fontSize: 12.5, color: "#5C6660", marginTop: 2 },
  parcalar: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 },
  parcaChip: { fontSize: 11.5, background: "#F0EAD8", color: "#6E6450", padding: "3px 8px", borderRadius: 6 },
  tamirMaliyet: { fontSize: 13, fontWeight: 700, color: AMBER, marginTop: 6 },
  ```

- [ ] **Step 2: Dev sunucusunda test et**

  - Mevcut cihazın seri no'sunu gir (TEST001) → Pasaport görünümü açılıyor ✅
  - Cihaz başlığı, seri no görünüyor ✅
  - Tamir kayıtları (Task 4'te eklenen "Gaz dolumu") zaman çizelgesinde görünüyor ✅
  - "Harici Servis" rozeti doğru görünüyor ✅
  - "+ Tamir Kaydı Ekle" butonuna bas → TamirEkleForm placeholder açılıyor ✅

- [ ] **Step 3: Commit**

  ```bash
  git add src/DPPEkrani.jsx
  git commit -m "feat: DPPEkrani — pasaport görünümü + tamir zaman çizelgesi"
  ```

---

## Task 8: `src/DPPEkrani.jsx` — Tamir Ekle Formu

**Files:**
- Modify: `src/DPPEkrani.jsx` (TamirEkleForm doldurulur)

- [ ] **Step 1: `TamirEkleForm` bileşenini yaz**

  Placeholder'ı şununla değiştir:

  ```jsx
  function TamirEkleForm({ cihazId, onEklendi, onIptal }) {
    const [form, setForm] = useState({
      tarih: new Date().toISOString().split("T")[0],
      yapilan_islem: "",
      parcaGiris: "",
      degistirilen_parcalar: [],
      maliyet: "",
      servis_adi: "",
      servis_turu: "harici",
      notlar: "",
    });
    const [yukleniyor, setYukleniyor] = useState(false);
    const [hata, setHata] = useState("");

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const parcaEkle = () => {
      const p = form.parcaGiris.trim();
      if (!p || form.degistirilen_parcalar.includes(p)) return;
      set("degistirilen_parcalar", [...form.degistirilen_parcalar, p]);
      set("parcaGiris", "");
    };

    const parcaKaldir = (p) =>
      set("degistirilen_parcalar", form.degistirilen_parcalar.filter((x) => x !== p));

    const kaydet = async () => {
      if (!form.tarih || !form.yapilan_islem.trim()) {
        setHata("Tarih ve yapılan işlem zorunlu.");
        return;
      }
      setHata("");
      setYukleniyor(true);
      try {
        const res = await fetch("/api/dpp/tamir", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cihaz_id: cihazId,
            tarih: form.tarih,
            yapilan_islem: form.yapilan_islem,
            degistirilen_parcalar: form.degistirilen_parcalar,
            maliyet: form.maliyet ? parseInt(form.maliyet) : null,
            servis_adi: form.servis_adi || null,
            servis_turu: form.servis_turu,
            notlar: form.notlar || null,
          }),
        });
        if (!res.ok) throw new Error("Sunucu hatası");
        onEklendi();
      } catch {
        setHata("Kayıt eklenemedi, tekrar dene.");
      } finally {
        setYukleniyor(false);
      }
    };

    return (
      <div style={s.ekran}>
        <h2 style={s.baslik}>Tamir Kaydı Ekle</h2>

        <label style={s.label}>Servis türü</label>
        <div style={s.chipWrap}>
          {[["harici", "Harici Servis"], ["benservis", "Benservis"], ["sahip", "Kendim Yaptım"]].map(([v, l]) => (
            <button key={v} onClick={() => set("servis_turu", v)}
              style={{ ...s.chip, ...(form.servis_turu === v ? s.chipActive : {}) }}>
              {l}
            </button>
          ))}
        </div>

        <div style={s.row}>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Tarih</label>
            <input style={s.input} type="date" value={form.tarih} onChange={(e) => set("tarih", e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={s.label}>Servis adı <span style={s.opt}>(opsiyonel)</span></label>
            <input style={s.input} value={form.servis_adi} onChange={(e) => set("servis_adi", e.target.value)} placeholder="Klima Pro" />
          </div>
        </div>

        <label style={s.label}>Yapılan işlem</label>
        <textarea style={{ ...s.input, resize: "vertical", lineHeight: 1.5 }} rows={3}
          value={form.yapilan_islem}
          onChange={(e) => set("yapilan_islem", e.target.value)}
          placeholder="Gaz dolumu yapıldı, filtreler temizlendi" />

        <label style={s.label}>Değiştirilen parçalar <span style={s.opt}>(opsiyonel)</span></label>
        <div style={{ display: "flex", gap: 8 }}>
          <input style={{ ...s.input, flex: 1 }} value={form.parcaGiris}
            onChange={(e) => set("parcaGiris", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), parcaEkle())}
            placeholder="Parça adı yaz, Enter ile ekle" />
          <button style={s.parcaEkleBtn} onClick={parcaEkle}>+ Ekle</button>
        </div>
        {form.degistirilen_parcalar.length > 0 && (
          <div style={{ ...s.parcalar, marginTop: 8 }}>
            {form.degistirilen_parcalar.map((p) => (
              <span key={p} style={{ ...s.parcaChip, cursor: "pointer" }} onClick={() => parcaKaldir(p)}>
                {p} ✕
              </span>
            ))}
          </div>
        )}

        <div style={s.row}>
          <div style={{ width: 130 }}>
            <label style={s.label}>Maliyet <span style={s.opt}>(TL)</span></label>
            <input style={s.input} type="number" value={form.maliyet}
              onChange={(e) => set("maliyet", e.target.value)} placeholder="850" />
          </div>
        </div>

        <label style={s.label}>Notlar <span style={s.opt}>(opsiyonel)</span></label>
        <textarea style={{ ...s.input, resize: "vertical" }} rows={2}
          value={form.notlar} onChange={(e) => set("notlar", e.target.value)} />

        {hata && <p style={s.hata}>{hata}</p>}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button style={s.iptalBtn} onClick={onIptal}>İptal</button>
          <button style={{ ...s.cta, flex: 1, marginTop: 0 }} onClick={kaydet} disabled={yukleniyor}>
            {yukleniyor ? "Kaydediliyor…" : "Kaydet →"}
          </button>
        </div>
      </div>
    );
  }
  ```

  `s` objesine stil ekle:

  ```javascript
  parcaEkleBtn: {
    padding: "0 14px", borderRadius: 11, border: `1.5px solid ${AMBER}`,
    background: "rgba(200,99,43,.06)", color: AMBER, fontWeight: 700, fontSize: 13,
    whiteSpace: "nowrap", fontFamily: "'Hanken Grotesk', sans-serif",
  },
  iptalBtn: {
    padding: "13px 20px", borderRadius: 12, border: "1.5px solid #DDD3BE",
    background: "transparent", color: INK, fontSize: 14.5, fontWeight: 600,
    fontFamily: "'Hanken Grotesk', sans-serif",
  },
  ```

- [ ] **Step 2: Dev sunucusunda test et**

  - Pasaport görünümünden "+ Tamir Kaydı Ekle" → form açılıyor ✅
  - Tarih ve işlem boş bırak → "Tarih ve yapılan işlem zorunlu" hatası ✅
  - Parça ekle (Enter ile) → chip görünüyor, ✕ ile kaldırılıyor ✅
  - Formu doldur → "Kaydet" → pasaport görünümüne dönüyor, yeni tamir listede ✅
  - Toplam maliyet güncellenmiş ✅

- [ ] **Step 3: Commit**

  ```bash
  git add src/DPPEkrani.jsx
  git commit -m "feat: DPPEkrani — tamir ekle formu + API entegrasyonu"
  ```

---

## Task 9: Fotoğraf Yükleme

**Files:**
- Modify: `src/DPPEkrani.jsx` (FotoYukle bileşeni + YeniCihazForm + TamirEkleForm entegrasyonu)

- [ ] **Step 1: `FotoYukle` bileşeni ve `uploadPhoto` fonksiyonu ekle**

  `DPPEkrani.jsx`'te `CIHAZLAR` import'unun hemen altına ekle:

  ```javascript
  import { supabase } from "./lib/supabase.js";

  async function uploadPhoto(file, folder) {
    const ext = file.name.split(".").pop().toLowerCase();
    const allowed = ["jpg", "jpeg", "png", "webp"];
    if (!allowed.includes(ext)) throw new Error("Desteklenmeyen format (jpg, png, webp)");
    if (file.size > 5 * 1024 * 1024) throw new Error("Maksimum dosya boyutu 5 MB");

    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const path = `${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from("dpp-fotograflar")
      .upload(path, file, { contentType: file.type, upsert: false });
    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from("dpp-fotograflar").getPublicUrl(path);
    return data.publicUrl;
  }
  ```

  Ardından `FotoYukle` bileşenini ekle (AramaEkrani'nden önce):

  ```jsx
  function FotoYukle({ urls, onUrls, maxAdet = 3, label = "Fotoğraf ekle" }) {
    const [yukleniyor, setYukleniyor] = useState(false);
    const [hata, setHata] = useState("");
    const inputRef = React.useRef(null);

    const dosyaSec = async (e) => {
      const dosyalar = Array.from(e.target.files || []);
      if (!dosyalar.length) return;
      if (urls.length + dosyalar.length > maxAdet) {
        setHata(`En fazla ${maxAdet} fotoğraf eklenebilir.`);
        return;
      }
      setHata("");
      setYukleniyor(true);
      try {
        const folder = `gecici/${Date.now()}`;
        const yeniUrls = await Promise.all(dosyalar.map((f) => uploadPhoto(f, folder)));
        onUrls([...urls, ...yeniUrls]);
      } catch (e) {
        setHata(e.message);
      } finally {
        setYukleniyor(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    };

    const kaldir = (url) => onUrls(urls.filter((u) => u !== url));

    return (
      <div>
        <div style={s.fotoGaleri}>
          {urls.map((url) => (
            <div key={url} style={{ position: "relative" }}>
              <img src={url} alt="Fotoğraf" style={s.fotoKucuk} />
              <button
                onClick={() => kaldir(url)}
                style={{ position: "absolute", top: -6, right: -6, background: "#B23A2E", color: "#fff", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >✕</button>
            </div>
          ))}
          {urls.length < maxAdet && (
            <button
              onClick={() => inputRef.current?.click()}
              disabled={yukleniyor}
              style={{ width: 64, height: 64, border: "1.5px dashed #DDD3BE", borderRadius: 8, background: "#FFFDF8", color: "#9A9384", fontSize: 22, cursor: "pointer" }}
            >
              {yukleniyor ? "⏳" : "+"}
            </button>
          )}
        </div>
        {hata && <p style={{ ...s.hata, marginTop: 4 }}>{hata}</p>}
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple style={{ display: "none" }} onChange={dosyaSec} />
      </div>
    );
  }
  ```

- [ ] **Step 2: `YeniCihazForm`'a fotoğraf ekle**

  `YeniCihazForm` state'ine ekle:
  ```javascript
  const [fotograflar, setFotograflar] = useState([]);
  ```

  `olustur` içindeki `body` objesine ekle:
  ```javascript
  fotograflar,
  ```

  Form JSX'inde garanti_bitis_tarihi alanından sonra ekle:
  ```jsx
  <label style={s.label}>Fotoğraf <span style={s.opt}>(opsiyonel, max 3)</span></label>
  <FotoYukle urls={fotograflar} onUrls={setFotograflar} maxAdet={3} />
  ```

- [ ] **Step 3: `TamirEkleForm`'a fotoğraf ekle**

  `TamirEkleForm` state'ine ekle:
  ```javascript
  const [fotograflar, setFotograflar] = useState([]);
  ```

  `kaydet` içindeki `JSON.stringify` body'sine ekle:
  ```javascript
  fotograflar,
  ```

  Form JSX'inde Notlar alanından önce ekle:
  ```jsx
  <label style={s.label}>Fotoğraf <span style={s.opt}>(öncesi/sonrası, max 5)</span></label>
  <FotoYukle urls={fotograflar} onUrls={setFotograflar} maxAdet={5} />
  ```

- [ ] **Step 4: Dev sunucusunda test et**

  Yeni cihaz oluştururken fotoğraf yükle:
  - "+" butonuna bas → dosya seçici açılıyor ✅
  - JPG/PNG seçilince → küçük önizleme görünüyor ✅
  - 5 MB'ı aşan dosya → hata mesajı ✅
  - Cihaz oluştur → Supabase Storage `dpp-fotograflar/gecici/` klasörüne dosya düşüyor ✅
  - Pasaport görünümünde fotoğraf görünüyor ✅

  Tamir eklerken fotoğraf yükle:
  - Tamir formu → fotoğraf ekle → kaydet → pasaport tamir kartında fotoğraf görünüyor ✅

- [ ] **Step 5: Storage path'ini düzelt**

  Fotoğraflar şu an `gecici/{timestamp}/` klasörüne gidiyor. Cihaz ID'si oluşturulduktan sonra doğru yola taşımalıyız. Bu Faz 3'ün kapsamı dışında (yeterince iyi, sonraki fazda auth ile birlikte düzeltilecek). Şimdilik bir TODO notunu koda yaz:

  `uploadPhoto` fonksiyonunun başına yorum ekle:
  ```javascript
  // TODO (Faz 3+): Cihaz ID'si bilinince dosyaları cihazlar/{id}/ altına taşı.
  // Auth geldiğinde storage path'ler RLS ile kısıtlanacak.
  ```

- [ ] **Step 6: Commit**

  ```bash
  git add src/DPPEkrani.jsx
  git commit -m "feat: DPPEkrani — fotoğraf yükleme (Supabase Storage)"
  ```

---

## Task 10: `src/App.jsx` Entegrasyonu

**Files:**
- Modify: `src/App.jsx`

İki giriş noktası: teşhis sonrası "Cihazı Kaydet" butonu + ana ekran pasaport banner'ı.

- [ ] **Step 1: `src/App.jsx`'i oku ve giriş noktalarını belirle**

  Değiştirilecek yerler:
  1. `faz2` div'i (satır ~297–305) → "Servis Bul" yanına "Cihazı Kaydet" butonu
  2. Form kartının hemen üstü → pasaport banner

- [ ] **Step 2: `faz2` div'ine "Cihazı Kaydet" butonu ekle**

  Mevcut:
  ```jsx
  <div style={s.faz2}>
    <div>
      <div style={s.faz2Head}>Tamir ettirmek ister misin?</div>
      <div style={s.faz2Sub}>Konumuna göre sıralar · Direkt arama</div>
    </div>
    <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => setShowServisler(true)}>
      📍 Servis Bul
    </button>
  </div>
  ```

  Şununla değiştir:
  ```jsx
  <div style={s.faz2}>
    <div>
      <div style={s.faz2Head}>Tamir ettirmek ister misin?</div>
      <div style={s.faz2Sub}>Konumuna göre sıralar · Direkt arama</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => setShowServisler(true)}>
        📍 Servis Bul
      </button>
      <button
        style={{ ...s.faz2Btn, background: "rgba(255,255,255,.15)", fontSize: 12.5 }}
        onClick={() => { setDppInitialSeriNo(""); setShowDPP(true); }}
      >
        📋 Cihazı Kaydet
      </button>
    </div>
  </div>
  ```

- [ ] **Step 3: Ana ekrana pasaport banner'ı ekle**

  Form kartının (`{(adim === "form" || adim === "hata") && (`) hemen ÖNÜNE ekle:

  ```jsx
  {/* DPP Banner — form ekranında her zaman görünür */}
  {adim === "form" && (
    <div style={s.dppBanner}>
      <span style={s.dppBannerText}>📋 Cihaz Pasaportu</span>
      <div style={s.dppBannerSag}>
        <input
          style={s.dppBannerInput}
          value={dppInitialSeriNo}
          onChange={(e) => setDppInitialSeriNo(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && setShowDPP(true)}
          placeholder="Seri no ile ara"
        />
        <button
          style={s.dppBannerBtn}
          onClick={() => setShowDPP(true)}
        >
          Ara
        </button>
      </div>
    </div>
  )}
  ```

- [ ] **Step 4: `s` objesine banner stilleri ekle**

  ```javascript
  dppBanner: {
    position: "relative", zIndex: 1, marginBottom: 12,
    background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14,
    padding: "12px 16px", display: "flex", justifyContent: "space-between",
    alignItems: "center", gap: 12, flexWrap: "wrap",
  },
  dppBannerText: { fontSize: 13.5, fontWeight: 700, color: INK },
  dppBannerSag: { display: "flex", gap: 8, flex: 1, maxWidth: 280 },
  dppBannerInput: {
    flex: 1, padding: "8px 11px", borderRadius: 9,
    border: "1.5px solid #DDD3BE", background: CREAM, fontSize: 13,
    fontFamily: "'Hanken Grotesk', sans-serif", color: INK, letterSpacing: "0.04em",
  },
  dppBannerBtn: {
    padding: "8px 14px", borderRadius: 9, border: "none",
    background: INK, color: CREAM, fontSize: 13, fontWeight: 700,
    fontFamily: "'Hanken Grotesk', sans-serif", whiteSpace: "nowrap",
  },
  ```

- [ ] **Step 5: Build kontrolü**

  ```bash
  npm run build
  ```

  Beklenen: `✓ built in ...ms` — hata yok.

- [ ] **Step 6: Dev sunucusunda uçtan uca test**

  ```bash
  npm run dev
  ```

  Test senaryoları:
  - Ana ekranda pasaport banner görünüyor ✅
  - Banner'da seri no yaz → "Ara" → DPP paneli açılıyor ✅
  - Teşhis yap (Klima, belirti) → sonuç çık → "📋 Cihazı Kaydet" görünüyor ✅
  - "Cihazı Kaydet" → kategori (Klima) önceden dolu geliyor ✅
  - Yeni cihaz oluştur → pasaport görünümü ✅
  - Tamir ekle → pasaport güncelleniyor ✅
  - Fotoğraf yükle → görünüyor ✅
  - "↺ Yeni arıza" → DPP paneli kapanıyor ✅

- [ ] **Step 7: Commit**

  ```bash
  git add src/App.jsx
  git commit -m "feat: App.jsx — DPP banner + teşhis sonrası Cihazı Kaydet butonu"
  ```

---

## Task 11: Vercel Env Vars + Deploy

**Files:** Vercel Dashboard (tarayıcı)

- [ ] **Step 1: Vercel Dashboard'da env var'ları ekle**

  [vercel.com](https://vercel.com) → `project-83ils` → Settings → Environment Variables

  Şu değişkenleri ekle (Production + Preview + Development):
  - `SUPABASE_URL` → `https://xxxxxxxxxxx.supabase.co`
  - `SUPABASE_SERVICE_KEY` → `eyJ...` (service_role key — gizli)
  - `VITE_SUPABASE_URL` → `https://xxxxxxxxxxx.supabase.co`
  - `VITE_SUPABASE_ANON_KEY` → `eyJ...` (anon/public key)

- [ ] **Step 2: Build + push**

  ```bash
  npm run build
  git add -A
  git push origin main
  ```

  Vercel otomatik deploy başlatacak.

- [ ] **Step 3: Deploy tamamlandı mı kontrol et**

  ```bash
  gh api repos/tolgaildaser-cloud/benservis/deployments --jq '.[0]' 
  ```

  Beklenen: `"environment":"Production"`, `"state":"success"`

- [ ] **Step 4: Canlıda uçtan uca test**

  benservis.com'da:
  - Ana ekran banner görünüyor ✅
  - Seri no ile pasaport ara → bulunamayan → yeni cihaz formu ✅
  - Cihaz oluştur → pasaport sayfası ✅
  - Tamir ekle → pasaport güncelleniyor ✅
  - Teşhis → "Cihazı Kaydet" → kategori dolu geliyor ✅

- [ ] **Step 5: Final commit (başarı kriteri işaretle)**

  ```bash
  git commit --allow-empty -m "feat: Faz 3 DPP canlıya alındı — Supabase + pasaport UI + fotoğraf"
  ```

---

## Özet

| Task | Dosya | Kapsam |
|------|-------|--------|
| 1 | `supabase/schema.sql` | Supabase kurulum + şema |
| 2 | `api/_supabase.js`, `src/lib/supabase.js`, `src/constants.js` | İstemciler + sabitler |
| 3 | `api/dpp/cihaz.js` | GET pasaport + POST upsert |
| 4 | `api/dpp/tamir.js` | POST tamir kaydı |
| 5 | `src/DPPEkrani.jsx` | İskelet + arama ekranı |
| 6 | `src/DPPEkrani.jsx` | Yeni cihaz formu |
| 7 | `src/DPPEkrani.jsx` | Pasaport görünümü |
| 8 | `src/DPPEkrani.jsx` | Tamir ekle formu |
| 9 | `src/DPPEkrani.jsx` | Fotoğraf yükleme |
| 10 | `src/App.jsx` | 2 giriş noktası |
| 11 | Vercel Dashboard | Env vars + deploy |
