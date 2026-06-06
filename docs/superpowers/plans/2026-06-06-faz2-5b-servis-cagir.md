# Faz 2.5b — Servis Çağır + İş Yönetimi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** "Ara" ve "Haritada Gör" butonlarını kaldırıp "Servis Çağır" akışını ekle — müşteri form doldurur, is_talepleri DB'ye yazılır, servis /panel'den kabul/ret yapar, 30dk yanıt gelmezse otomatik düşer, iş onaylanınca 850 hat üzerinden Twilio köprüsüyle gizli arama yapılır.

**Architecture:** Vercel serverless API endpoints (mevcut api/ paterni) + Supabase (is_talepleri + servis_performans tabloları) + Twilio (SMS bildirimleri + Voice TwiML köprüsü) + React components (ServisCaldir form + ServisPanel). Panel `/panel` path'inde, main.jsx pathname kontrolüyle yönlendirilir. Tek Twilio sanal numarası tüm işler için kullanılır; callback `From` numarasıyla müşteri eşleştirilir.

**Tech Stack:** React 18, Vite, Supabase JS v2 (zaten kurulu), Twilio Node SDK (yeni), Vercel serverless + cron

---

## Dosya Yapısı

| Dosya | Eylem | Sorumluluk |
|-------|-------|------------|
| `supabase/schema.sql` | Modify | is_talepleri + servis_performans tabloları |
| `api/_twilio.js` | Create | Twilio client + sendSMS + sendTwiML yardımcıları |
| `api/is/yeni.js` | Create | POST: iş oluştur + müşteriye SMS |
| `api/is/liste.js` | Create | GET: panel için JWT doğrula → servisin işlerini döndür |
| `api/is/[id].js` | Create | PATCH: kabul/ret/tamamla + SMS + Twilio numara ata |
| `api/cron/expire.js` | Create | 5dk'da bir: süresi dolan işleri kapat + puan düşür + SMS |
| `api/twilio/callback.js` | Create | POST: Twilio Voice webhook → TwiML köprüsü |
| `vercel.json` | Create | cron konfigürasyonu + /panel rewrite |
| `src/ServisCaldir.jsx` | Create | Müşteri talep formu (bottom sheet overlay) |
| `src/ServisPanel.jsx` | Create | Servis paneli: giriş + talep listesi + kabul/ret |
| `src/ServisEkrani.jsx` | Modify | ServisKarti butonunu değiştir + ServisCaldir entegre et |
| `src/main.jsx` | Modify | /panel path'ini ServisPanel'e yönlendir |
| `src/App.jsx` | Modify | belirti prop'unu ServisEkrani'ya ilet |

---

## Task 1: DB Schema — is_talepleri + servis_performans

**Files:**
- Modify: `supabase/schema.sql`

- [ ] **Step 1: Supabase Dashboard'u aç**

  Tarayıcıda [app.supabase.com](https://app.supabase.com) → proje `qzwueckmignbsirffoap` → sol menü **SQL Editor** → **New query**.

- [ ] **Step 2: SQL'i çalıştır**

  Aşağıdaki SQL'i kopyala ve **Run** ile çalıştır:

  ```sql
  -- Faz 2.5b — İş Talepleri

  CREATE SEQUENCE IF NOT EXISTS is_no_seq START 1;

  CREATE TABLE IF NOT EXISTS is_talepleri (
    id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    is_no             text UNIQUE NOT NULL
                      DEFAULT 'BS-' || LPAD(nextval('is_no_seq')::text, 4, '0'),
    servis_id         text NOT NULL,
    servis_ad         text NOT NULL,
    musteri_ad        text NOT NULL,
    musteri_tel       text NOT NULL,
    adres             text NOT NULL,
    tarih_tercihi     text,
    cihaz             text,
    belirti           text,
    durum             text NOT NULL DEFAULT 'bekliyor'
                      CHECK (durum IN ('bekliyor','onaylandi','reddedildi','suresi_doldu','tamamlandi')),
    son_kabul_tarihi  timestamptz NOT NULL,
    gelis_penceresi   text,
    twilio_numara     text,
    puan              int CHECK (puan BETWEEN 1 AND 5),
    odeme_durumu      text NOT NULL DEFAULT 'bekliyor',
    created_at        timestamptz DEFAULT now()
  );

  CREATE INDEX IF NOT EXISTS is_talepleri_servis_id_idx ON is_talepleri(servis_id);
  CREATE INDEX IF NOT EXISTS is_talepleri_durum_idx ON is_talepleri(durum);
  CREATE INDEX IF NOT EXISTS is_talepleri_son_kabul_idx
    ON is_talepleri(son_kabul_tarihi) WHERE durum = 'bekliyor';

  -- Servis performans takibi (puan düşüş sistemi)
  CREATE TABLE IF NOT EXISTS servis_performans (
    servis_id         text PRIMARY KEY,
    yanitlamamis      int NOT NULL DEFAULT 0,
    puan_carpani      numeric(3,2) NOT NULL DEFAULT 1.00,
    guncelleme_tarihi timestamptz DEFAULT now()
  );
  ```

  Beklenen: `Success. No rows returned`

- [ ] **Step 3: Doğrula**

  ```sql
  SELECT table_name FROM information_schema.tables
  WHERE table_schema = 'public'
    AND table_name IN ('is_talepleri', 'servis_performans');
  ```

  Beklenen: 2 satır.

  ```sql
  INSERT INTO is_talepleri
    (servis_id, servis_ad, musteri_ad, musteri_tel, adres, son_kabul_tarihi)
  VALUES
    ('test-id', 'Test Servis', 'Test Kullanıcı', '+905550000000', 'Kadıköy', NOW() + INTERVAL '30 minutes')
  RETURNING is_no;
  ```

  Beklenen: `BS-0001`

  ```sql
  DELETE FROM is_talepleri WHERE servis_id = 'test-id';
  ```

- [ ] **Step 4: schema.sql'i güncelle**

  `supabase/schema.sql` dosyasının sonuna ekle:

  ```sql

  -- Faz 2.5b — Servis Çağır İş Yönetimi
  CREATE SEQUENCE IF NOT EXISTS is_no_seq START 1;

  CREATE TABLE IF NOT EXISTS is_talepleri (
    id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    is_no             text UNIQUE NOT NULL
                      DEFAULT 'BS-' || LPAD(nextval('is_no_seq')::text, 4, '0'),
    servis_id         text NOT NULL,
    servis_ad         text NOT NULL,
    musteri_ad        text NOT NULL,
    musteri_tel       text NOT NULL,
    adres             text NOT NULL,
    tarih_tercihi     text,
    cihaz             text,
    belirti           text,
    durum             text NOT NULL DEFAULT 'bekliyor'
                      CHECK (durum IN ('bekliyor','onaylandi','reddedildi','suresi_doldu','tamamlandi')),
    son_kabul_tarihi  timestamptz NOT NULL,
    gelis_penceresi   text,
    twilio_numara     text,
    puan              int CHECK (puan BETWEEN 1 AND 5),
    odeme_durumu      text NOT NULL DEFAULT 'bekliyor',
    created_at        timestamptz DEFAULT now()
  );

  CREATE INDEX IF NOT EXISTS is_talepleri_servis_id_idx ON is_talepleri(servis_id);
  CREATE INDEX IF NOT EXISTS is_talepleri_durum_idx ON is_talepleri(durum);
  CREATE INDEX IF NOT EXISTS is_talepleri_son_kabul_idx
    ON is_talepleri(son_kabul_tarihi) WHERE durum = 'bekliyor';

  CREATE TABLE IF NOT EXISTS servis_performans (
    servis_id         text PRIMARY KEY,
    yanitlamamis      int NOT NULL DEFAULT 0,
    puan_carpani      numeric(3,2) NOT NULL DEFAULT 1.00,
    guncelleme_tarihi timestamptz DEFAULT now()
  );
  ```

- [ ] **Step 5: Commit**

  ```bash
  cd /Users/tolgaildaser/Downloads/arizam-ne-app
  git add supabase/schema.sql
  git commit -m "feat: is_talepleri + servis_performans schema (Faz 2.5b)"
  ```

---

## Task 2: Twilio SDK + _twilio.js yardımcısı

**Files:**
- Create: `api/_twilio.js`

- [ ] **Step 1: Twilio'yu yükle**

  ```bash
  cd /Users/tolgaildaser/Downloads/arizam-ne-app
  npm install twilio
  ```

  Beklenen: `added N packages`

- [ ] **Step 2: api/_twilio.js oluştur**

  ```js
  // api/_twilio.js
  // Twilio yardımcı fonksiyonları — API endpoint'lerinden import edilir.
  // TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER env değişkenlerinden alınır.
  import twilio from "twilio";

  function getClient() {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    if (!sid || !token) throw new Error("Twilio env değişkenleri eksik");
    return twilio(sid, token);
  }

  /**
   * Müşteriye SMS gönder.
   * @param {string} to   E.164 formatında telefon (+905551234567)
   * @param {string} body Mesaj metni
   */
  export async function sendSMS(to, body) {
    const client = getClient();
    return client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
      body,
    });
  }

  /**
   * Twilio'nun CORS header'larını ayarla (webhook endpoint'leri için).
   */
  export function setCorsHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
  ```

- [ ] **Step 3: Import test (derleme hatası yok mu?)**

  ```bash
  cd /Users/tolgaildaser/Downloads/arizam-ne-app
  node --input-type=module <<'EOF'
  import "./api/_twilio.js";
  console.log("import ok");
  EOF
  ```

  Beklenen: `import ok` (hata yok)

- [ ] **Step 4: Commit**

  ```bash
  git add api/_twilio.js package.json package-lock.json
  git commit -m "feat: Twilio SDK + _twilio.js yardımcısı"
  ```

---

## Task 3: api/is/yeni.js — İş Oluştur + SMS

**Files:**
- Create: `api/is/yeni.js`

- [ ] **Step 1: api/is/ dizinini oluştur**

  ```bash
  mkdir -p /Users/tolgaildaser/Downloads/arizam-ne-app/api/is
  ```

- [ ] **Step 2: api/is/yeni.js oluştur**

  ```js
  // api/is/yeni.js
  // POST /api/is/yeni
  // Body: { servis_id, servis_ad, musteri_ad, musteri_tel, adres, tarih_tercihi?, cihaz?, belirti? }
  // Yeni is_talepleri kaydı oluşturur, müşteriye SMS gönderir.
  import supabase from "../_supabase.js";
  import { sendSMS, setCorsHeaders } from "../_twilio.js";

  export default async function handler(req, res) {
    setCorsHeaders(res);
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const {
      servis_id, servis_ad,
      musteri_ad, musteri_tel,
      adres, tarih_tercihi,
      cihaz, belirti,
    } = req.body || {};

    // Zorunlu alan kontrolü
    if (!servis_id || !servis_ad || !musteri_ad || !musteri_tel || !adres) {
      return res.status(400).json({
        error: "servis_id, servis_ad, musteri_ad, musteri_tel, adres zorunludur",
      });
    }

    // Telefon formatı: +90 ile başlaması gerekir (Twilio E.164)
    const tel = musteri_tel.startsWith("+") ? musteri_tel : `+9${musteri_tel.replace(/^0/, "")}`;

    // son_kabul_tarihi = şimdi + 30 dakika
    const son_kabul_tarihi = new Date(Date.now() + 30 * 60 * 1000).toISOString();

    const { data: is, error } = await supabase
      .from("is_talepleri")
      .insert({
        servis_id,
        servis_ad,
        musteri_ad,
        musteri_tel: tel,
        adres,
        tarih_tercihi: tarih_tercihi || null,
        cihaz: cihaz || null,
        belirti: belirti || null,
        son_kabul_tarihi,
      })
      .select("id, is_no, durum, son_kabul_tarihi")
      .single();

    if (error) return res.status(500).json({ error: error.message });

    // Müşteriye SMS gönder (hata oluşursa iş yine de oluşmuş sayılır)
    try {
      await sendSMS(
        tel,
        `Talebiniz ${servis_ad}'e iletildi. İş No: #${is.is_no}. ` +
        `30 dakika içinde yanıt gelecek, SMS ile bildirileceksiniz.`
      );
    } catch (smsErr) {
      console.error("SMS gönderilemedi:", smsErr.message);
    }

    return res.status(201).json({ is });
  }
  ```

- [ ] **Step 3: Yerel test (dev server çalışıyorsa)**

  ```bash
  curl -s -X POST http://localhost:5173/api/is/yeni \
    -H "Content-Type: application/json" \
    -d '{
      "servis_id": "test-places-id",
      "servis_ad": "Test Servis",
      "musteri_ad": "Tolga Test",
      "musteri_tel": "+905550000000",
      "adres": "Kadıköy Test Sok 1"
    }' | python3 -m json.tool
  ```

  Beklenen: `{ "is": { "is_no": "BS-000X", "durum": "bekliyor", ... } }`

  (SMS gerçek ortamda gidecektir; test için TWILIO_* env yoksa SMS hatası loglanır ama HTTP 201 döner)

- [ ] **Step 4: Supabase'de doğrula**

  SQL Editor'da:
  ```sql
  SELECT is_no, servis_ad, musteri_ad, durum, son_kabul_tarihi
  FROM is_talepleri ORDER BY created_at DESC LIMIT 3;
  ```

- [ ] **Step 5: Commit**

  ```bash
  git add api/is/yeni.js
  git commit -m "feat: api/is/yeni — iş oluştur + müşteriye SMS"
  ```

---

## Task 4: api/is/liste.js + api/is/[id].js — Panel API

**Files:**
- Create: `api/is/liste.js`
- Create: `api/is/[id].js`

- [ ] **Step 1: api/is/liste.js oluştur**

  JWT ile korunan endpoint: servisin kendi işlerini döndürür, `musteri_tel` hariç.

  ```js
  // api/is/liste.js
  // GET /api/is/liste
  // Header: Authorization: Bearer <supabase-jwt>
  // Servisin kendi is_talepleri kayıtlarını döndürür. musteri_tel dahil edilmez.
  import supabase from "../_supabase.js";
  import { setCorsHeaders } from "../_twilio.js";

  export default async function handler(req, res) {
    setCorsHeaders(res);
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    // JWT doğrulama
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) return res.status(401).json({ error: "Token gerekli" });

    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

    const servis_id = user.user_metadata?.servis_id;
    if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

    const { data: isler, error } = await supabase
      .from("is_talepleri")
      .select("id, is_no, servis_id, servis_ad, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, gelis_penceresi, twilio_numara, created_at")
      .eq("servis_id", servis_id)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ isler: isler || [] });
  }
  ```

- [ ] **Step 2: api/is/[id].js oluştur**

  Kabul (saat penceresi seçimi + Twilio numara atama + SMS), ret, tamamla.

  ```js
  // api/is/[id].js
  // PATCH /api/is/:id
  // Header: Authorization: Bearer <supabase-jwt>
  // Body: { action: "kabul" | "ret" | "tamamla", gelis_penceresi?: string }
  import supabase from "../_supabase.js";
  import { sendSMS, setCorsHeaders } from "../_twilio.js";

  export default async function handler(req, res) {
    setCorsHeaders(res);
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });

    // JWT doğrulama
    const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
    if (!token) return res.status(401).json({ error: "Token gerekli" });

    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

    const servis_id = user.user_metadata?.servis_id;
    if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

    const { id } = req.query;
    const { action, gelis_penceresi } = req.body || {};

    if (!["kabul", "ret", "tamamla"].includes(action)) {
      return res.status(400).json({ error: "action: kabul | ret | tamamla" });
    }

    // İşin bu servise ait olduğunu doğrula
    const { data: is, error: fetchErr } = await supabase
      .from("is_talepleri")
      .select("*")
      .eq("id", id)
      .eq("servis_id", servis_id)
      .single();

    if (fetchErr || !is) return res.status(404).json({ error: "İş bulunamadı" });
    if (is.durum !== "bekliyor" && action !== "tamamla") {
      return res.status(409).json({ error: `İş zaten ${is.durum} durumunda` });
    }

    if (action === "kabul") {
      if (!gelis_penceresi) return res.status(400).json({ error: "gelis_penceresi zorunlu" });

      const { error: updateErr } = await supabase
        .from("is_talepleri")
        .update({
          durum: "onaylandi",
          gelis_penceresi,
          twilio_numara: process.env.TWILIO_PHONE_NUMBER,
        })
        .eq("id", id);

      if (updateErr) return res.status(500).json({ error: updateErr.message });

      try {
        await sendSMS(
          is.musteri_tel,
          `İyi haber! ${is.servis_ad} talebinizi kabul etti. ` +
          `Geliş: ${gelis_penceresi}. ` +
          `Aramak için: ${process.env.TWILIO_PHONE_NUMBER}. İş No: #${is.is_no}`
        );
      } catch (e) { console.error("SMS hatası (kabul):", e.message); }

      return res.status(200).json({ durum: "onaylandi" });
    }

    if (action === "ret") {
      const { error: updateErr } = await supabase
        .from("is_talepleri")
        .update({ durum: "reddedildi" })
        .eq("id", id);

      if (updateErr) return res.status(500).json({ error: updateErr.message });

      try {
        await sendSMS(
          is.musteri_tel,
          `${is.servis_ad} bu sefer uygun değil. ` +
          `Yeni servis seçmek için uygulamaya dönün. İş No: #${is.is_no}`
        );
      } catch (e) { console.error("SMS hatası (ret):", e.message); }

      return res.status(200).json({ durum: "reddedildi" });
    }

    if (action === "tamamla") {
      if (is.durum !== "onaylandi") {
        return res.status(409).json({ error: "Sadece onaylanan işler tamamlanabilir" });
      }
      const { error: updateErr } = await supabase
        .from("is_talepleri")
        .update({ durum: "tamamlandi" })
        .eq("id", id);

      if (updateErr) return res.status(500).json({ error: updateErr.message });
      return res.status(200).json({ durum: "tamamlandi" });
    }
  }
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add api/is/liste.js api/is/[id].js
  git commit -m "feat: api/is/liste + api/is/[id] — panel API (kabul/ret/tamamla)"
  ```

---

## Task 5: api/cron/expire.js + vercel.json

**Files:**
- Create: `api/cron/expire.js`
- Create: `vercel.json`

- [ ] **Step 1: api/cron/ dizinini oluştur**

  ```bash
  mkdir -p /Users/tolgaildaser/Downloads/arizam-ne-app/api/cron
  ```

- [ ] **Step 2: api/cron/expire.js oluştur**

  ```js
  // api/cron/expire.js
  // GET /api/cron/expire  — Vercel cron tarafından her 5 dakikada çağrılır.
  // Authorization: Bearer CRON_SECRET
  // 30dk yanıt vermeyen işleri kapatır, servis puanını düşürür, müşteriye SMS gönderir.
  import supabase from "../_supabase.js";
  import { sendSMS } from "../_twilio.js";

  export default async function handler(req, res) {
    // Cron güvenliği
    const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
    if (token !== process.env.CRON_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Süresi dolan işleri bul
    const { data: dolmus, error: fetchErr } = await supabase
      .from("is_talepleri")
      .select("id, is_no, servis_id, servis_ad, musteri_tel")
      .eq("durum", "bekliyor")
      .lt("son_kabul_tarihi", new Date().toISOString());

    if (fetchErr) return res.status(500).json({ error: fetchErr.message });
    if (!dolmus || dolmus.length === 0) {
      return res.status(200).json({ islem: 0, mesaj: "Süresi dolan iş yok" });
    }

    let islenenSayisi = 0;

    for (const is of dolmus) {
      // Durumu güncelle
      await supabase
        .from("is_talepleri")
        .update({ durum: "suresi_doldu" })
        .eq("id", is.id);

      // servis_performans güncelle
      const { data: perf } = await supabase
        .from("servis_performans")
        .select("yanitlamamis, puan_carpani")
        .eq("servis_id", is.servis_id)
        .single();

      const mevcutYanitlamamis = perf ? perf.yanitlamamis : 0;
      const mevcutCarpani = perf ? Number(perf.puan_carpani) : 1.00;
      const yeniYanitlamamis = mevcutYanitlamamis + 1;
      // Her 3 yanıtsız işte puan_carpani -0.10 (minimum 0.50)
      const yeniCarpani = yeniYanitlamamis % 3 === 0
        ? Math.max(0.50, mevcutCarpani - 0.10)
        : mevcutCarpani;

      await supabase
        .from("servis_performans")
        .upsert({
          servis_id: is.servis_id,
          yanitlamamis: yeniYanitlamamis,
          puan_carpani: yeniCarpani,
          guncelleme_tarihi: new Date().toISOString(),
        }, { onConflict: "servis_id" });

      // Müşteriye SMS
      try {
        await sendSMS(
          is.musteri_tel,
          `${is.servis_ad} 30 dakika içinde yanıt vermedi. ` +
          `Yeni bir servis seçmek için uygulamaya dönün. İş No: #${is.is_no}`
        );
      } catch (e) { console.error("SMS hatası (expire):", e.message); }

      islenenSayisi++;
    }

    return res.status(200).json({ islem: islenenSayisi, kapatilan: dolmus.map(i => i.is_no) });
  }
  ```

- [ ] **Step 3: vercel.json oluştur**

  ```json
  {
    "rewrites": [
      { "source": "/panel", "destination": "/index.html" },
      { "source": "/panel/(.*)", "destination": "/index.html" }
    ],
    "crons": [
      { "path": "/api/cron/expire", "schedule": "*/5 * * * *" }
    ]
  }
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add api/cron/expire.js vercel.json
  git commit -m "feat: cron/expire — 30dk otomatik iş kapatma + puan düşüşü"
  ```

---

## Task 6: api/twilio/callback.js — Voice TwiML Köprüsü

**Files:**
- Create: `api/twilio/callback.js`

- [ ] **Step 1: api/twilio/ dizinini oluştur**

  ```bash
  mkdir -p /Users/tolgaildaser/Downloads/arizam-ne-app/api/twilio
  ```

- [ ] **Step 2: api/twilio/callback.js oluştur**

  Twilio bu webhook'u çağırınca `From` (arayan müşteri tel) ile aktif işi bulur, servisin gerçek numarasına köprü kurar.

  ```js
  // api/twilio/callback.js
  // POST /api/twilio/callback
  // Twilio Voice webhook — müşteri 850 numarasını çevirince tetiklenir.
  // TwiML ile servisin gerçek numarasına köprü kurar.
  import { readFileSync } from "fs";
  import { fileURLToPath } from "url";
  import { dirname, join } from "path";
  import supabase from "../_supabase.js";
  import twilio from "twilio";

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const SERVISLER = JSON.parse(
    readFileSync(join(__dirname, "../../src/services-data.json"), "utf8")
  );

  export default async function handler(req, res) {
    // Twilio imza doğrulama (isteğe bağlı ama önerilen — prod'da etkinleştir)
    // const twilioSig = req.headers["x-twilio-signature"];
    // const valid = twilio.validateRequest(process.env.TWILIO_AUTH_TOKEN, twilioSig, fullUrl, req.body);
    // if (!valid) return res.status(403).send("Forbidden");

    const arayanTel = req.body?.From || req.query?.From;
    if (!arayanTel) {
      return res.status(400).send(
        '<Response><Say language="tr-TR">Arayan numara bulunamadı.</Say></Response>'
      );
    }

    // Arayan müşteri telefonu ile onaylanan aktif işi bul
    const { data: is } = await supabase
      .from("is_talepleri")
      .select("servis_id")
      .eq("musteri_tel", arayanTel)
      .eq("durum", "onaylandi")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (!is) {
      const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say language="tr-TR">Aktif bir iş bulunamadı. Lütfen servisinizle iletişime geçin.</Say>
  </Response>`;
      res.setHeader("Content-Type", "text/xml");
      return res.status(200).send(twiml);
    }

    const servis = SERVISLER.find(s => s.id === is.servis_id);
    if (!servis?.telefon) {
      const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say language="tr-TR">Servis telefonu bulunamadı.</Say>
  </Response>`;
      res.setHeader("Content-Type", "text/xml");
      return res.status(200).send(twiml);
    }

    // Servisin gerçek numarasına köprüle
    // Servisin arayanı göreceği numara: Twilio sanal numarası (müşterinin gerçek numarası değil)
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Dial callerId="${process.env.TWILIO_PHONE_NUMBER}">
      <Number>${servis.telefon}</Number>
    </Dial>
  </Response>`;

    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(twiml);
  }
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add api/twilio/callback.js
  git commit -m "feat: twilio/callback — Voice TwiML köprüsü (musteri ↔ servis)"
  ```

---

## Task 7: src/ServisPanel.jsx — Servis Paneli

**Files:**
- Create: `src/ServisPanel.jsx`

- [ ] **Step 1: ServisPanel.jsx oluştur**

  ```jsx
  // src/ServisPanel.jsx
  // Servis sağlayıcı paneli — /panel path'inde gösterilir.
  // Supabase Auth ile giriş, iş listesi, kabul/ret/tamamla.
  import React, { useState, useEffect } from "react";
  import { supabase } from "./lib/supabase.js";

  const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
  const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

  const DURUM_LABEL = {
    bekliyor: { label: "Bekliyor", color: AMBER },
    onaylandi: { label: "Onaylandı", color: GREEN },
    reddedildi: { label: "Reddedildi", color: "#B23A2E" },
    suresi_doldu: { label: "Süresi Doldu", color: "#888" },
    tamamlandi: { label: "Tamamlandı", color: GREEN },
  };

  function GirisFormu({ onGiris }) {
    const [email, setEmail] = useState("");
    const [sifre, setSifre] = useState("");
    const [hata, setHata] = useState("");
    const [yukleniyor, setYukleniyor] = useState(false);

    const girisYap = async (e) => {
      e.preventDefault();
      setHata("");
      setYukleniyor(true);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: sifre });
      setYukleniyor(false);
      if (error) { setHata(error.message); return; }
      if (!data.user.user_metadata?.servis_id) {
        setHata("Bu hesaba servis_id atanmamış. Supabase Dashboard'dan user_metadata.servis_id ekleyin.");
        await supabase.auth.signOut();
        return;
      }
      onGiris(data.session);
    };

    return (
      <div style={{ minHeight: "100vh", background: INK, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <style>{FONT}</style>
        <div style={{ background: "#2d3e35", borderRadius: 18, padding: 32, width: "100%", maxWidth: 360 }}>
          <div style={{ fontFamily: "'Fraunces', serif", color: CREAM, fontSize: 22, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
            🔧 Benservis Panel
          </div>
          <form onSubmit={girisYap}>
            <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>E-posta</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 14, boxSizing: "border-box" }}
            />
            <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>Şifre</label>
            <input
              type="password" value={sifre} onChange={e => setSifre(e.target.value)} required
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 20, boxSizing: "border-box" }}
            />
            {hata && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 14 }}>{hata}</div>}
            <button
              type="submit" disabled={yukleniyor}
              style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
            >
              {yukleniyor ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  function KabulModal({ is, onKapat, onKabul }) {
    const [pencere, setPencere] = useState("");
    const [yukleniyor, setYukleniyor] = useState(false);

    const kabul = async () => {
      if (!pencere.trim()) return;
      setYukleniyor(true);
      await onKabul(is.id, pencere);
      setYukleniyor(false);
    };

    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
        <div style={{ background: CREAM, borderRadius: 16, padding: 24, width: "90%", maxWidth: 360, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: INK, marginBottom: 16 }}>
            Talebi Kabul Et
          </div>
          <div style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
            <strong>{is.musteri_ad}</strong> — {is.adres}<br />
            {is.cihaz && <>{is.cihaz} · {is.belirti}</>}
          </div>
          <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>
            Geliş Saati Penceresi
          </label>
          <input
            value={pencere} onChange={e => setPencere(e.target.value)}
            placeholder="örn. Yarın 10:00–12:00"
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", marginBottom: 16 }}
          />
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={onKapat} style={{ flex: 1, padding: 11, borderRadius: 10, border: "1.5px solid #DDD3BE", background: "white", fontSize: 14, cursor: "pointer" }}>
              İptal
            </button>
            <button onClick={kabul} disabled={!pencere.trim() || yukleniyor}
              style={{ flex: 2, padding: 11, borderRadius: 10, border: "none", background: GREEN, color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              {yukleniyor ? "Onaylanıyor..." : "✓ Onayla + SMS Gönder"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  function IsKarti({ is, jwtToken, onGuncelle }) {
    const [kabulModal, setKabulModal] = useState(false);
    const [yukleniyor, setYukleniyor] = useState(false);
    const { label, color } = DURUM_LABEL[is.durum] || { label: is.durum, color: "#888" };

    const islemYap = async (action, gelis_penceresi) => {
      setYukleniyor(true);
      try {
        const res = await fetch(`/api/is/${is.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
          body: JSON.stringify({ action, gelis_penceresi }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        onGuncelle(is.id, data.durum);
      } catch (e) { alert("Hata: " + e.message); }
      setYukleniyor(false);
    };

    return (
      <>
        {kabulModal && (
          <KabulModal
            is={is}
            onKapat={() => setKabulModal(false)}
            onKabul={async (id, pencere) => { await islemYap("kabul", pencere); setKabulModal(false); }}
          />
        )}
        <div style={{ background: "white", border: "1px solid #E5DCC9", borderRadius: 12, padding: 16, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: INK }}>#{is.is_no}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color, background: `${color}18`, padding: "2px 8px", borderRadius: 4 }}>● {label}</span>
          </div>
          <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>
            👤 {is.musteri_ad}<br />
            📍 {is.adres}<br />
            {is.cihaz && <>{is.cihaz}{is.belirti ? ` · ${is.belirti}` : ""}<br /></>}
            {is.tarih_tercihi && <>📅 {is.tarih_tercihi}<br /></>}
            {is.gelis_penceresi && <><strong>🕐 Geliş: {is.gelis_penceresi}</strong><br /></>}
            {is.twilio_numara && <><small style={{ color: GREEN }}>📞 {is.twilio_numara}</small><br /></>}
          </div>
          {is.durum === "bekliyor" && (
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button onClick={() => setKabulModal(true)} disabled={yukleniyor}
                style={{ flex: 1, padding: 9, borderRadius: 8, border: "none", background: GREEN, color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                ✓ Kabul Et
              </button>
              <button onClick={() => islemYap("ret")} disabled={yukleniyor}
                style={{ flex: 1, padding: 9, borderRadius: 8, border: "1.5px solid #B23A2E", background: "white", color: "#B23A2E", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                ✕ Reddet
              </button>
            </div>
          )}
          {is.durum === "onaylandi" && (
            <button onClick={() => islemYap("tamamla")} disabled={yukleniyor}
              style={{ width: "100%", marginTop: 12, padding: 9, borderRadius: 8, border: "none", background: INK, color: CREAM, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ✓ İşi Tamamla
            </button>
          )}
        </div>
      </>
    );
  }

  export default function ServisPanel() {
    const [session, setSession] = useState(null);
    const [isler, setIsler] = useState([]);
    const [yukleniyor, setYukleniyor] = useState(false);

    useEffect(() => {
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) setSession(data.session);
      });
    }, []);

    useEffect(() => {
      if (!session) return;
      setYukleniyor(true);
      fetch("/api/is/liste", { headers: { "Authorization": `Bearer ${session.access_token}` } })
        .then(r => r.json())
        .then(d => { setIsler(d.isler || []); setYukleniyor(false); });
    }, [session]);

    const cikisYap = async () => { await supabase.auth.signOut(); setSession(null); setIsler([]); };

    const onGuncelle = (id, yeniDurum) => {
      setIsler(prev => prev.map(is => is.id === id ? { ...is, durum: yeniDurum } : is));
    };

    if (!session) return <GirisFormu onGiris={setSession} />;

    const bekleyenler = isler.filter(i => i.durum === "bekliyor");
    const digerler = isler.filter(i => i.durum !== "bekliyor");

    return (
      <div style={{ minHeight: "100vh", background: "#F5EFE2", fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <style>{FONT}</style>
        <div style={{ background: INK, color: CREAM, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>🔧 Benservis Panel</span>
          <button onClick={cikisYap} style={{ background: "none", border: "1px solid #ffffff44", color: CREAM, borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>
            Çıkış
          </button>
        </div>
        <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
          {yukleniyor && <p style={{ textAlign: "center", color: "#888" }}>Yükleniyor...</p>}

          {bekleyenler.length > 0 && (
            <>
              <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 8 }}>
                Yeni Talepler <span style={{ background: AMBER, color: "white", borderRadius: 99, padding: "1px 7px", fontSize: 11 }}>{bekleyenler.length}</span>
              </div>
              {bekleyenler.map(is => (
                <IsKarti key={is.id} is={is} jwtToken={session.access_token} onGuncelle={onGuncelle} />
              ))}
            </>
          )}

          {digerler.length > 0 && (
            <>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#888", margin: "16px 0 8px" }}>Geçmiş</div>
              {digerler.map(is => (
                <IsKarti key={is.id} is={is} jwtToken={session.access_token} onGuncelle={onGuncelle} />
              ))}
            </>
          )}

          {!yukleniyor && isler.length === 0 && (
            <p style={{ textAlign: "center", color: "#888", marginTop: 40 }}>Henüz talep yok.</p>
          )}
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add src/ServisPanel.jsx
  git commit -m "feat: ServisPanel — servis giriş + talep listesi + kabul/ret/tamamla"
  ```

---

## Task 8: src/ServisCaldir.jsx — Müşteri Talep Formu

**Files:**
- Create: `src/ServisCaldir.jsx`

- [ ] **Step 1: ServisCaldir.jsx oluştur**

  ```jsx
  // src/ServisCaldir.jsx
  // Müşteri talep formu — full-screen bottom sheet overlay.
  // Props:
  //   servis   {object}   ServisKarti'nın servis objesi (servis_id, servis_ad için)
  //   cihaz    {string}   Teşhisten gelen cihaz kategorisi (örn. "Klima")
  //   belirti  {string}   Teşhisten gelen belirti metni
  //   onKapat  {Function} Formu kapat
  import React, { useState } from "react";

  const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
  const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

  export default function ServisCaldir({ servis, cihaz, belirti, onKapat }) {
    const [ad, setAd] = useState("");
    const [tel, setTel] = useState("");
    const [adres, setAdres] = useState("");
    const [tarih, setTarih] = useState("");
    const [hata, setHata] = useState("");
    const [yukleniyor, setYukleniyor] = useState(false);
    const [tamamlandi, setTamamlandi] = useState(null); // { is_no }

    const gonder = async (e) => {
      e.preventDefault();
      setHata("");

      if (!ad.trim() || !tel.trim() || !adres.trim()) {
        setHata("Ad soyad, telefon ve adres zorunludur.");
        return;
      }
      if (tel.replace(/\D/g, "").length < 10) {
        setHata("Geçerli bir telefon numarası girin.");
        return;
      }

      setYukleniyor(true);
      try {
        const res = await fetch("/api/is/yeni", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            servis_id: servis.id,
            servis_ad: servis.ad,
            musteri_ad: ad.trim(),
            musteri_tel: tel.trim(),
            adres: adres.trim(),
            tarih_tercihi: tarih.trim() || null,
            cihaz: cihaz || null,
            belirti: belirti || null,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Bir hata oluştu");
        setTamamlandi({ is_no: data.is.is_no });
      } catch (err) {
        setHata(err.message);
      }
      setYukleniyor(false);
    };

    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end", fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <style>{FONT}</style>
        <div style={{ background: CREAM, borderRadius: "20px 20px 0 0", padding: "20px 16px 36px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>

          {/* Başlık */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <button onClick={onKapat} style={{ background: "none", border: "none", color: INK, fontSize: 20, cursor: "pointer", lineHeight: 1 }}>←</button>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, color: INK }}>
              {servis.ad}
            </span>
          </div>

          {/* Başarı ekranı */}
          {tamamlandi ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK, marginBottom: 8 }}>
                Talebiniz İletildi
              </div>
              <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 24 }}>
                {servis.ad} talebinizi inceliyor.<br />
                30 dakika içinde SMS ile bildirim alacaksınız.
              </div>
              <div style={{ background: "white", borderRadius: 10, padding: "12px 16px", display: "inline-block", marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "#888" }}>İş No</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: INK }}>#{tamamlandi.is_no}</div>
              </div>
              <br />
              <button onClick={onKapat} style={{ padding: "12px 32px", borderRadius: 12, border: "none", background: INK, color: CREAM, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Kapat
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={gonder}>
              {cihaz && (
                <div style={{ background: "#F0EAD8", borderRadius: 8, padding: "8px 12px", marginBottom: 16, fontSize: 12, color: "#666" }}>
                  📋 <strong>{cihaz}</strong>{belirti ? ` — ${belirti.slice(0, 60)}${belirti.length > 60 ? "…" : ""}` : ""}
                  <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>Teşhisten otomatik aktarıldı</div>
                </div>
              )}

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Ad Soyad</label>
              <input value={ad} onChange={e => setAd(e.target.value)} placeholder="Adınız Soyadınız" required
                style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 14, boxSizing: "border-box" }} />

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Telefon</label>
              <input value={tel} onChange={e => setTel(e.target.value)} placeholder="0555 123 45 67" type="tel" required
                style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 2, boxSizing: "border-box" }} />
              <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Servis numaranızı görmez. Yalnızca SMS bildirimi için.</div>

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Adres / Semt</label>
              <input value={adres} onChange={e => setAdres(e.target.value)} placeholder="Kadıköy, Moda Cad. 12/3" required
                style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 14, boxSizing: "border-box" }} />

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
                Tarih Tercihi <span style={{ fontWeight: 400, color: "#888", fontSize: 12 }}>(opsiyonel)</span>
              </label>
              <input value={tarih} onChange={e => setTarih(e.target.value)} placeholder="örn. Yarın öğleden sonra"
                style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 20, boxSizing: "border-box" }} />

              {hata && <div style={{ color: "#B23A2E", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>{hata}</div>}

              <button type="submit" disabled={yukleniyor}
                style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", background: AMBER, color: "white", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
                {yukleniyor ? "Gönderiliyor..." : "Talebi Gönder →"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add src/ServisCaldir.jsx
  git commit -m "feat: ServisCaldir — müşteri talep formu + başarı ekranı"
  ```

---

## Task 9: ServisEkrani.jsx + App.jsx + main.jsx — Entegrasyon

**Files:**
- Modify: `src/ServisEkrani.jsx`
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: ServisEkrani.jsx — ServisKarti butonunu değiştir**

  `ServisKarti` fonksiyonunda (satır ~25–88) şu değişiklikleri yap:

  **a) Props'a `onCaldir` ekle:**

  ```jsx
  // ÖNCE:
  function ServisKarti({ servis, onSec }) {

  // SONRA:
  function ServisKarti({ servis, onSec, onCaldir }) {
  ```

  **b) "Ara" butonunu "Servis Çağır" ile değiştir (satır ~71–85):**

  ```jsx
  // ÖNCE (tüm bu blok):
        {servis.telefon ? (
          <a
            href={`tel:${servis.telefon}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#C8632B", color: "white",
              borderRadius: 10, padding: "10px 14px",
              fontSize: 15, textDecoration: "none", fontWeight: 700,
              whiteSpace: "nowrap", flexShrink: 0,
            }}
          >📞 Ara</a>
        ) : (
          <span style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>Telefon yok</span>
        )}

  // SONRA:
        <button
          onClick={(e) => { e.stopPropagation(); onCaldir(servis); }}
          style={{
            background: "#22302A", color: "#F5EFE2",
            borderRadius: 10, padding: "10px 14px",
            fontSize: 13, border: "none", fontWeight: 700,
            whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer",
          }}
        >🔧 Servis Çağır</button>
  ```

  **c) ServisEkrani default export'a `caldirServis` state + ServisCaldir import ekle:**

  Dosyanın başına import:
  ```jsx
  import ServisCaldir from "./ServisCaldir.jsx";
  ```

  `ServisEkrani` fonksiyonunun state bölümüne (satır ~219–223):
  ```jsx
  const [caldirServis, setCaldirServis] = useState(null);
  ```

  `ServisEkrani` Props imzasına `belirti` ekle:
  ```jsx
  // ÖNCE:
  export default function ServisEkrani({ cihaz, servisler, onKapat }) {

  // SONRA:
  export default function ServisEkrani({ cihaz, belirti, servisler, onKapat }) {
  ```

  **d) ServisCaldir overlay'i render et** — `return (` bloğunun hemen içine, en başa:
  ```jsx
    return (
      <div style={{ position: "fixed", inset: 0, ... }}>
        {caldirServis && (
          <ServisCaldir
            servis={caldirServis}
            cihaz={cihaz}
            belirti={belirti}
            onKapat={() => setCaldirServis(null)}
          />
        )}
        {/* Üst bar */}
  ```

  **e) ServisKarti çağrısına `onCaldir` prop'u ilet** (satır ~302):
  ```jsx
  // ÖNCE:
  <ServisKarti key={servis.id} servis={servis} onSec={(s) => { setSeciliServis(s); setEkran("profil"); }} />

  // SONRA:
  <ServisKarti
    key={servis.id}
    servis={servis}
    onSec={(s) => { setSeciliServis(s); setEkran("profil"); }}
    onCaldir={setCaldirServis}
  />
  ```

- [ ] **Step 2: App.jsx — belirti prop'unu ServisEkrani'ya ilet**

  `App.jsx` içinde `ServisEkrani` çağrısını bul (satır ~172–178) ve `belirti` prop'u ekle:

  ```jsx
  // ÖNCE:
  <ServisEkrani
    cihaz={cihaz}
    servisler={SERVISLER}
    onKapat={() => setShowServisler(false)}
  />

  // SONRA:
  <ServisEkrani
    cihaz={cihaz}
    belirti={belirti}
    servisler={SERVISLER}
    onKapat={() => setShowServisler(false)}
  />
  ```

- [ ] **Step 3: main.jsx — /panel routing**

  `src/main.jsx` dosyasını aç ve değiştir:

  ```jsx
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App.jsx";
  import ServisPanel from "./ServisPanel.jsx";

  const isPanel = window.location.pathname.startsWith("/panel");

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {isPanel ? <ServisPanel /> : <App />}
    </React.StrictMode>
  );
  ```

- [ ] **Step 4: Yerel test**

  ```bash
  cd /Users/tolgaildaser/Downloads/arizam-ne-app
  npm run dev
  ```

  - `http://localhost:5173` → normal uygulama, Klima seç → "Servis Çağır" butonu görünüyor mu?
  - Bir servise tıkla → ServisCaldir bottom sheet açılıyor mu?
  - `http://localhost:5173/panel` → ServisPanel giriş ekranı görünüyor mu?

- [ ] **Step 5: Commit**

  ```bash
  git add src/ServisEkrani.jsx src/App.jsx src/main.jsx
  git commit -m "feat: ServisCaldir entegrasyonu — Servis Çağır butonu + panel routing"
  ```

---

## Task 10: Deploy + Vercel Env Vars

**Files:**
- Vercel Dashboard (env vars)

- [ ] **Step 1: Twilio hesabı hazır mı kontrol et**

  [twilio.com/console](https://console.twilio.com) → şunları not al:
  - Account SID (`AC...`)
  - Auth Token
  - Twilio Phone Number (veya yeni satın al — Türkiye için +90 başlangıçlı ya da mevcut bir test numarası)

- [ ] **Step 2: Supabase'de servis hesabı oluştur**

  [app.supabase.com](https://app.supabase.com) → Authentication → Users → **Add user** (Invite):
  - Email: servis test e-postası (örn. `bogazi@benservis.com`)
  - Şifre belirle

  Sonra o kullanıcıyı bul → **Edit** → User Metadata'ya ekle:
  ```json
  { "servis_id": "ChIJ..." }
  ```
  (`servis_id` değeri `services-data.json`'daki ilgili servisin `id` alanı olmalı)

- [ ] **Step 3: Vercel env değişkenlerini ekle**

  [vercel.com](https://vercel.com) → `project-83ils` → Settings → Environment Variables:

  | Name | Value | Environment |
  |------|-------|-------------|
  | `TWILIO_ACCOUNT_SID` | `ACxxxxxxxx` | Production + Preview |
  | `TWILIO_AUTH_TOKEN` | `xxxxxxxx` | Production + Preview |
  | `TWILIO_PHONE_NUMBER` | `+90850xxxxxxx` | Production + Preview |
  | `CRON_SECRET` | (rastgele 32 char string) | Production + Preview |

  CRON_SECRET üretmek için:
  ```bash
  node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
  ```

- [ ] **Step 4: Twilio webhook URL ayarla**

  Twilio Console → Phone Numbers → [numaranı seç] → Voice Configuration:
  - **A call comes in**: Webhook
  - URL: `https://www.benservis.com/api/twilio/callback`
  - HTTP Method: POST

- [ ] **Step 5: Deploy et**

  ```bash
  cd /Users/tolgaildaser/Downloads/arizam-ne-app
  git push
  ```

  Vercel'in build'i tamamlamasını bekle (1-2 dakika).

- [ ] **Step 6: Production'da smoke test**

  ```bash
  # is_talepleri API çalışıyor mu?
  curl -s -X POST https://www.benservis.com/api/is/yeni \
    -H "Content-Type: application/json" \
    -d '{"servis_id":"test","servis_ad":"Test","musteri_ad":"Test User","musteri_tel":"+905550000000","adres":"Test Adres"}' \
    | python3 -m json.tool
  ```

  Beklenen: `{ "is": { "is_no": "BS-000X", ... } }`

  ```bash
  # Cron koruması çalışıyor mu?
  curl -s https://www.benservis.com/api/cron/expire
  ```

  Beklenen: `{ "error": "Unauthorized" }`

  ```bash
  # Panel açılıyor mu?
  curl -s -o /dev/null -w "%{http_code}" https://www.benservis.com/panel
  ```

  Beklenen: `200`

- [ ] **Step 7: Final commit**

  ```bash
  git tag faz-2-5b-deploy
  git push --tags
  git commit --allow-empty -m "chore: Faz 2.5b deploy tag"
  ```

---

## Self-Review Notları

**Spec coverage kontrol:**
- ✅ Servis Çağır butonu → Task 9
- ✅ Form (ad, tel, adres, tarih) → Task 8
- ✅ is_talepleri DB → Task 1
- ✅ Müşteri SMS (talep + kabul + ret + expire) → Task 3, 4, 5
- ✅ Servis paneli + auth → Task 7
- ✅ Kabul: gelis_penceresi + SMS → Task 4, 7
- ✅ 30dk otomatik kapatma + puan düşüşü → Task 5
- ✅ 850 hat Voice köprüsü → Task 6
- ✅ musteri_tel panel'de gösterilmez → Task 4 (liste endpoint'i musteri_tel dışarıda)
- ✅ vercel.json cron + /panel rewrite → Task 5
- ✅ main.jsx routing → Task 9

**Tip tutarlılığı:**
- `servis.id` → services-data.json'da `id` alanı olarak mevcut
- `is.id` (uuid) vs `is.is_no` (BS-XXXX) — her yerde tutarlı kullanılmış
- `musteri_tel` her zaman E.164 formata dönüştürülüyor (yeni.js'de)
- `durum` değerleri schema CHECK ile sınırlı, API'da da aynı string'ler
