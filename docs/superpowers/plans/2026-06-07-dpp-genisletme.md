# DPP Genişletme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tamamlanan Benservis işlerini DPP'ye otomatik yaz; garanti/fatura alanları ekle; servis panelinde zenginleştir modalı ve BenservisRozet bileşeni oluştur.

**Architecture:** `PATCH /api/is/:id?action=tamamla` artık seri_no varsa `cihazlar` upsert + `tamir_kayitlari` insert yapıyor ve `dpp_tamir_id` döndürüyor. Panel yeni `ZenginleştirModal` ile parça/fotoğraf/maliyet ekleyebilir (`PATCH /api/dpp/tamir/:id`). `BenservisRozet.jsx` bağımsız SVG bileşeni olarak DPPEkrani ve ileride Faz 4'te kullanılır.

**Tech Stack:** React + Vite, Vercel serverless (Node 20), Supabase PostgreSQL + Storage, Supabase Auth JWT

---

## Dosya Haritası

| Dosya | İşlem | Sorumluluk |
|-------|-------|-----------|
| `supabase/schema.sql` | Güncelle | 4 ALTER TABLE (seri_no, garanti alanları, dpp_tamir_id) |
| `api/is/liste.js` | Güncelle | SELECT'e seri_no + dpp_tamir_id ekle |
| `api/is/[id].js` | Güncelle | tamamla → DPP auto-write + dpp_tamir_id güncelle |
| `api/dpp/tamir/[id].js` | Yeni | PATCH zenginleştir (JWT korumalı) |
| `src/BenservisRozet.jsx` | Yeni | SVG rozet bileşeni (sm/md/lg) |
| `src/ServisCaldir.jsx` | Güncelle | seri_no opsiyonel alan |
| `src/ServisPanel.jsx` | Güncelle | ZenginleştirModal + DPP durumu |
| `src/DPPEkrani.jsx` | Güncelle | garanti/fatura form + pasaport görünümü + BenservisRozet |

---

## Task 1: DB Schema Migration

**Files:**
- Modify: `supabase/schema.sql`

Bu task sadece SQL çalıştırmaktır. Supabase Dashboard → SQL Editor'da çalıştır.

- [ ] **Step 1: SQL'i Supabase Dashboard'da çalıştır**

Supabase Dashboard → SQL Editor → yeni sorgu:

```sql
-- DPP Genişletme — Faz 3 güncellemesi
-- is_talepleri: seri_no + dpp_tamir_id
ALTER TABLE is_talepleri
  ADD COLUMN IF NOT EXISTS seri_no      text,
  ADD COLUMN IF NOT EXISTS dpp_tamir_id uuid;

-- cihazlar: garanti + fatura
ALTER TABLE cihazlar
  ADD COLUMN IF NOT EXISTS garanti_baslangic_tarihi  date,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti         boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti_bitis   date,
  ADD COLUMN IF NOT EXISTS fatura_url                text;

-- tamir_kayitlari: servis izlenebilirliği
ALTER TABLE tamir_kayitlari
  ADD COLUMN IF NOT EXISTS servis_id text;
```

Çalıştır → `Success. No rows returned` görmelisin.

- [ ] **Step 2: schema.sql referans dosyasını güncelle**

`supabase/schema.sql` dosyasındaki `is_talepleri` CREATE TABLE'ın hemen ardından (79. satırdan sonra) ekle:

```sql
-- DPP Genişletme eklentileri
ALTER TABLE is_talepleri
  ADD COLUMN IF NOT EXISTS seri_no      text,
  ADD COLUMN IF NOT EXISTS dpp_tamir_id uuid;

ALTER TABLE cihazlar
  ADD COLUMN IF NOT EXISTS garanti_baslangic_tarihi  date,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti         boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti_bitis   date,
  ADD COLUMN IF NOT EXISTS fatura_url                text;

ALTER TABLE tamir_kayitlari
  ADD COLUMN IF NOT EXISTS servis_id text;
```

- [ ] **Step 3: Commit**

```bash
git add supabase/schema.sql
git commit -m "feat: DPP genisletme schema — seri_no, garanti, fatura, dpp_tamir_id"
```

---

## Task 2: api/is/liste.js + api/is/[id].js — seri_no + auto DPP

**Files:**
- Modify: `api/is/liste.js`
- Modify: `api/is/[id].js`

### Bağlam

`liste.js`: panel tüm işleri yüklerken `seri_no` ve `dpp_tamir_id` lazım (DPP durumu göstermek için).

`[id].js`: `tamamla` action'ında seri_no varsa → `cihazlar` upsert → `tamir_kayitlari` insert → `is_talepleri.dpp_tamir_id` güncelle.

- [ ] **Step 1: api/is/liste.js — SELECT'e seri_no + dpp_tamir_id ekle**

`api/is/liste.js` dosyasında `.select(...)` satırını bul ve değiştir:

```js
// ESKİ (satır ~29):
.select("id, is_no, servis_id, servis_ad, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, gelis_penceresi, twilio_numara, created_at")

// YENİ:
.select("id, is_no, servis_id, servis_ad, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, gelis_penceresi, twilio_numara, seri_no, dpp_tamir_id, created_at")
```

- [ ] **Step 2: api/is/[id].js — SELECT'e seri_no, cihaz, belirti ekle**

`api/is/[id].js` dosyasında (satır ~37) `.select(...)` satırını bul:

```js
// ESKİ:
.select("id, durum, servis_ad, is_no, musteri_tel, servis_id")

// YENİ:
.select("id, durum, servis_ad, is_no, musteri_tel, servis_id, seri_no, cihaz, belirti")
```

- [ ] **Step 3: api/is/[id].js — tamamla action'ı güncelle**

`api/is/[id].js` dosyasında `if (action === "tamamla")` bloğunu (satır ~92'den itibaren) şununla değiştir:

```js
  if (action === "tamamla") {
    if (is.durum !== "onaylandi") {
      return res.status(409).json({ error: "Sadece onaylanan işler tamamlanabilir" });
    }
    const { error: updateErr } = await supabase
      .from("is_talepleri")
      .update({ durum: "tamamlandi" })
      .eq("id", id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    // DPP otomatik yazma (seri_no varsa)
    let dpp_tamir_id = null;
    if (is.seri_no) {
      try {
        // cihazlar'da seri_no'ya bak veya oluştur
        let cihaz_id = null;
        const { data: mevcutCihaz } = await supabase
          .from("cihazlar")
          .select("id")
          .eq("seri_no", is.seri_no)
          .single();

        if (mevcutCihaz) {
          cihaz_id = mevcutCihaz.id;
        } else {
          const { data: yeniCihaz, error: cihazErr } = await supabase
            .from("cihazlar")
            .insert({ seri_no: is.seri_no, kategori: is.cihaz || null })
            .select("id")
            .single();
          if (!cihazErr && yeniCihaz) cihaz_id = yeniCihaz.id;
        }

        if (cihaz_id) {
          const { data: tamir, error: tamirErr } = await supabase
            .from("tamir_kayitlari")
            .insert({
              cihaz_id,
              tarih: new Date().toISOString().split("T")[0],
              yapilan_islem: is.belirti || "Benservis tamir kaydı",
              servis_adi: is.servis_ad,
              servis_id: is.servis_id,
              servis_turu: "benservis",
              benservis_is_id: is.id,
              degistirilen_parcalar: [],
              maliyet: null,
            })
            .select("id")
            .single();

          if (!tamirErr && tamir) {
            dpp_tamir_id = tamir.id;
            // dpp_tamir_id'yi is_talepleri'ne geri yaz
            await supabase
              .from("is_talepleri")
              .update({ dpp_tamir_id: tamir.id })
              .eq("id", id);
          }
        }
      } catch (dppErr) {
        console.error("DPP yazma hatası:", dppErr.message);
        // DPP hatası işi durdurmaz
      }
    }

    // SMS bildirimi (non-blocking)
    try {
      await sendSMS(
        is.musteri_tel,
        `İşiniz tamamlandı! ${is.servis_ad} tamir kaydınızı oluşturdu. İş No: #${is.is_no}`
      );
    } catch (e) { console.error("SMS hatası (tamamla):", e.message); }

    return res.status(200).json({ durum: "tamamlandi", dpp_tamir_id });
  }
```

- [ ] **Step 4: Manuel test**

```bash
# Önce Vercel dev başlat
cd ~/Downloads/arizam-ne-app
npx vercel dev
```

Ayrı terminal'de:
```bash
# 1) Önce bir iş oluştur (seri_no ile)
curl -X POST http://localhost:3000/api/is/yeni \
  -H "Content-Type: application/json" \
  -d '{"servis_id":"test","servis_ad":"Test Servis","musteri_ad":"Test Kişi","musteri_tel":"05551234567","adres":"Test Adres","seri_no":"TEST-001","cihaz":"Klima","belirti":"Soğutmuyor"}'

# Dönen is.id'yi not al, is_no'yu not al

# 2) Supabase Dashboard'da bu işi önce onaylandi yap:
# UPDATE is_talepleri SET durum='onaylandi', gelis_penceresi='Yarın' WHERE is_no='BS-0002';

# 3) Tamamla (JWT token lazım — panel'den oturum aç, token al)
curl -X PATCH http://localhost:3000/api/is/<IS_ID> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"action":"tamamla"}'
# Beklenen: { "durum": "tamamlandi", "dpp_tamir_id": "<uuid>" }

# 4) DPP kaydı oluştu mu kontrol et:
curl "http://localhost:3000/api/dpp/cihaz?seri_no=TEST-001"
# Beklenen: { cihaz: {...}, tamirler: [{benservis_is_id: "<IS_ID>", ...}], ... }
```

- [ ] **Step 5: Commit**

```bash
git add api/is/liste.js api/is/[id].js
git commit -m "feat: tamamla → DPP auto-write + dpp_tamir_id"
```

---

## Task 3: api/dpp/tamir/[id].js — PATCH zenginleştir

**Files:**
- Create: `api/dpp/tamir/[id].js`

### Bağlam

Vercel'de `api/dpp/tamir.js` mevcut → `/api/dpp/tamir` path'ini karşılar.
Yeni dosya `api/dpp/tamir/[id].js` → `/api/dpp/tamir/:id` path'ini karşılar.
JWT ile servis kimliği doğrulanır: `tamir_kayitlari.servis_id` === JWT `servis_id`.

- [ ] **Step 1: Dizini oluştur ve dosyayı yaz**

```bash
mkdir -p ~/Downloads/arizam-ne-app/api/dpp/tamir
```

`api/dpp/tamir/[id].js` dosyasını oluştur:

```js
// api/dpp/tamir/[id].js
// PATCH /api/dpp/tamir/:id — Tamir kaydını zenginleştir
// Yetki: JWT'deki servis_id === tamir_kayitlari.servis_id
import supabase from "../../_supabase.js";
import { setCorsHeaders } from "../../_twilio.js";

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
  if (!id) return res.status(400).json({ error: "Tamir ID gerekli" });

  // Tamir kaydını getir, sahiplik kontrol et
  const { data: tamir, error: fetchErr } = await supabase
    .from("tamir_kayitlari")
    .select("id, servis_id")
    .eq("id", id)
    .single();

  if (fetchErr || !tamir) return res.status(404).json({ error: "Tamir kaydı bulunamadı" });
  if (tamir.servis_id !== servis_id) return res.status(403).json({ error: "Bu kaydı düzenleyemezsiniz" });

  const {
    yapilan_islem,
    degistirilen_parcalar,
    maliyet,
    fotograflar,
    notlar,
  } = req.body || {};

  // En az bir alan zorunlu
  if (
    yapilan_islem === undefined &&
    degistirilen_parcalar === undefined &&
    maliyet === undefined &&
    fotograflar === undefined &&
    notlar === undefined
  ) {
    return res.status(400).json({ error: "En az bir alan gerekli" });
  }

  // Güncelleme objesi — sadece gönderilen alanlar
  const guncelleme = {};
  if (yapilan_islem !== undefined) guncelleme.yapilan_islem = yapilan_islem;
  if (degistirilen_parcalar !== undefined) guncelleme.degistirilen_parcalar = degistirilen_parcalar;
  if (maliyet !== undefined) guncelleme.maliyet = maliyet === null ? null : Number(maliyet);
  if (fotograflar !== undefined) guncelleme.fotograflar = fotograflar;
  if (notlar !== undefined) guncelleme.notlar = notlar;

  const { data: guncellendi, error: updateErr } = await supabase
    .from("tamir_kayitlari")
    .update(guncelleme)
    .eq("id", id)
    .select()
    .single();

  if (updateErr) return res.status(500).json({ error: updateErr.message });
  return res.status(200).json(guncellendi);
}
```

- [ ] **Step 2: Manuel test**

```bash
# Önceki task'tan dpp_tamir_id kullan
curl -X PATCH http://localhost:3000/api/dpp/tamir/<DPP_TAMIR_ID> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"yapilan_islem":"Kompresör değişimi","degistirilen_parcalar":["Kompresör"],"maliyet":3200}'
# Beklenen: güncellenmiş tamir kaydı JSON

# Yanlış JWT → 403 kontrolü
curl -X PATCH http://localhost:3000/api/dpp/tamir/<DPP_TAMIR_ID> \
  -H "Authorization: Bearer yanlis_token" \
  -d '{}'
# Beklenen: 401
```

- [ ] **Step 3: Commit**

```bash
git add api/dpp/tamir/[id].js
git commit -m "feat: PATCH /api/dpp/tamir/:id — zenginleştir endpoint"
```

---

## Task 4: src/BenservisRozet.jsx — SVG Rozet

**Files:**
- Create: `src/BenservisRozet.jsx`

### Bağlam

Marka varlığı olarak tasarlanmış SVG rozet. `size` prop'u: `"sm"` (tamir kartı), `"md"` (ilan kartı — Faz 4), `"lg"` (pasaport başlığı). Renkler: amber `#C8632B`, green `#3A7D44`, cream `#F5EFE2`.

- [ ] **Step 1: Bileşeni oluştur**

`src/BenservisRozet.jsx` dosyasını oluştur:

```jsx
// src/BenservisRozet.jsx
// Benservis Doğrulanmış Tamir rozeti — SVG tabanlı marka varlığı.
// Props:
//   size    "sm" | "md" | "lg"   (varsayılan: "sm")
//   tarih   string | null         ISO tarih, sm'de gizlenir

const AMBER = "#C8632B";
const GREEN = "#3A7D44";
const CREAM = "#F5EFE2";
const INK   = "#22302A";

const BOYUTLAR = {
  sm: { w: 72,  h: 72,  r: 30, checkSize: 14, titleSize: 7,  subSize: 5.5, tarihSize: 5  },
  md: { w: 96,  h: 96,  r: 40, checkSize: 18, titleSize: 9,  subSize: 7,   tarihSize: 6  },
  lg: { w: 128, h: 128, r: 53, checkSize: 24, titleSize: 12, subSize: 9,   tarihSize: 7.5},
};

export default function BenservisRozet({ size = "sm", tarih = null }) {
  const d = BOYUTLAR[size] || BOYUTLAR.sm;
  const cx = d.w / 2;
  const cy = d.h / 2;

  // Tarih formatla
  const tarihStr = tarih
    ? new Date(tarih).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" })
    : null;

  return (
    <svg
      width={d.w}
      height={d.h}
      viewBox={`0 0 ${d.w} ${d.h}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Benservis Doğrulanmış Tamir"
      role="img"
    >
      {/* Dış daire — amber kenarlık */}
      <circle cx={cx} cy={cy} r={d.r} fill={AMBER} />

      {/* Dış daire — dashed iç çizgi */}
      <circle
        cx={cx} cy={cy}
        r={d.r - 4}
        fill="none"
        stroke={CREAM}
        strokeWidth={1}
        strokeDasharray="3 2"
        opacity={0.7}
      />

      {/* İç alan — cream */}
      <circle cx={cx} cy={cy} r={d.r - 7} fill={CREAM} />

      {/* Checkmark */}
      <text
        x={cx}
        y={cy - (size === "sm" ? 5 : size === "md" ? 7 : 9)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={d.checkSize}
        fill={GREEN}
        fontWeight="bold"
      >
        ✓
      </text>

      {/* "BENSERVİS" */}
      <text
        x={cx}
        y={cy + (size === "sm" ? 6 : size === "md" ? 8 : 11)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={d.titleSize}
        fill={INK}
        fontWeight="800"
        letterSpacing="0.08em"
        fontFamily="'Hanken Grotesk', sans-serif"
      >
        BENSERVİS
      </text>

      {/* "DOĞRULANMIŞ" */}
      {size !== "sm" && (
        <text
          x={cx}
          y={cy + (size === "md" ? 17 : 22)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={d.subSize}
          fill={AMBER}
          fontWeight="700"
          letterSpacing="0.06em"
          fontFamily="'Hanken Grotesk', sans-serif"
        >
          DOĞRULANMIŞ
        </text>
      )}

      {/* Tarih — sadece md ve lg'de */}
      {tarihStr && size !== "sm" && (
        <text
          x={cx}
          y={cy + (size === "md" ? 26 : 33)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={d.tarihSize}
          fill="#9A9384"
          fontFamily="'Hanken Grotesk', sans-serif"
        >
          {tarihStr}
        </text>
      )}
    </svg>
  );
}
```

- [ ] **Step 2: Görsel kontrol**

`src/App.jsx`'e geçici olarak import ekle ve sayfada gör:

```jsx
// App.jsx üstüne geçici ekle:
import BenservisRozet from "./BenservisRozet.jsx";
// render içinde herhangi bir yere:
<div style={{display:"flex",gap:16,padding:16}}>
  <BenservisRozet size="sm" />
  <BenservisRozet size="md" tarih="2024-03-22" />
  <BenservisRozet size="lg" tarih="2024-03-22" />
</div>
```

`npm run dev` → localhost'ta 3 rozet boyutu görünmeli.

Kontrol sonrası geçici kodu App.jsx'ten kaldır.

- [ ] **Step 3: Commit**

```bash
git add src/BenservisRozet.jsx
git commit -m "feat: BenservisRozet SVG bileşeni (sm/md/lg)"
```

---

## Task 5: src/ServisCaldir.jsx — Seri No Alanı

**Files:**
- Modify: `src/ServisCaldir.jsx`

### Bağlam

137 satırlık form bileşeni. Müşteri "Servis Çağır" formuna opsiyonel seri no alanı ekleniyor. State, validasyon ve POST body güncelleniyor.

- [ ] **Step 1: seriNo state ve alanı ekle**

`src/ServisCaldir.jsx` dosyasında:

**a) State ekle** — `const [tarih, setTarih] = useState("");` satırından hemen sonra:
```js
const [seriNo, setSeriNo] = useState("");
```

**b) Form reset'e ekle** — `setTarih("")` satırından sonra:
```js
setSeriNo("");
```

**c) POST body'ye ekle** — `tarih_tercihi: tarih.trim() || null,` satırından sonra:
```js
seri_no: seriNo.trim() || null,
```

**d) Tarih alanından sonra seri no alanı ekle** — `{hata && ...}` div'inden hemen önce:
```jsx
<label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
  Seri No <span style={{ fontWeight: 400, color: "#888", fontSize: 12 }}>(opsiyonel)</span>
</label>
<input
  value={seriNo}
  onChange={e => setSeriNo(e.target.value)}
  placeholder="SN1234567890"
  style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 2, boxSizing: "border-box" }}
/>
<div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>
  Cihazın arkasında veya faturasında yazar. Tamir geçmişi için kullanılır.
</div>
```

- [ ] **Step 2: Manuel test**

```bash
npm run dev
```

- benservis.com'da bir servise git → "🔧 Servis Çağır"
- Formda "Seri No" alanı görünüyor mu?
- Seri no girerek formu gönder
- Supabase Table Editor'da `is_talepleri` → seri_no kolonu dolu mu?

- [ ] **Step 3: Commit**

```bash
git add src/ServisCaldir.jsx
git commit -m "feat: ServisCaldir — seri_no opsiyonel alanı"
```

---

## Task 6: src/ServisPanel.jsx — ZenginleştirModal + DPP Durumu

**Files:**
- Modify: `src/ServisPanel.jsx`

### Bağlam

248 satırlık panel bileşeni. `IsKarti` şunları yapıyor: tamamla butonu → `islemYap("tamamla")` → API'den `dpp_tamir_id` alıyor → "DPP Kaydı Oluşturuldu" + "Zenginleştir" butonu gösteriyor. Yeni `ZenginleştirModal` bileşeni parça/maliyet/fotoğraf form içeriyor.

- [ ] **Step 1: supabase importunu kontrol et**

`src/ServisPanel.jsx` başında `import { supabase } from "./lib/supabase.js";` var. Fotoğraf upload için `supabase.storage` kullanacağız. Bu import zaten mevcut — dokunma.

- [ ] **Step 2: ZenginleştirModal bileşenini ekle**

`KabulModal` fonksiyonundan hemen önce (satır 70 öncesi) yeni bileşeni ekle:

```jsx
function ZenginleştirModal({ is, dppTamirId, jwtToken, onKapat, onZenginlesti }) {
  const [yapilanIslem, setYapilanIslem] = useState(is.belirti || "");
  const [parcaGiris, setParcaGiris] = useState("");
  const [parcalar, setParcalar] = useState([]);
  const [maliyet, setMaliyet] = useState("");
  const [fotograflar, setFotograflar] = useState([]);
  const [fotoYukleniyor, setFotoYukleniyor] = useState(false);
  const [notlar, setNotlar] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");
  const inputRef = React.useRef(null);

  const parcaEkle = () => {
    const p = parcaGiris.trim();
    if (!p || parcalar.includes(p)) return;
    setParcalar(prev => [...prev, p]);
    setParcaGiris("");
  };

  const dosyaSec = async (e) => {
    const dosyalar = Array.from(e.target.files || []);
    if (!dosyalar.length) return;
    if (fotograflar.length + dosyalar.length > 5) {
      setHata("En fazla 5 fotoğraf eklenebilir.");
      return;
    }
    setFotoYukleniyor(true);
    setHata("");
    try {
      const urls = await Promise.all(dosyalar.map(async (f) => {
        const ext = f.name.split(".").pop().toLowerCase();
        const path = `tamirler/${dppTamirId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error } = await supabase.storage.from("dpp-fotograflar").upload(path, f, { contentType: f.type });
        if (error) throw new Error(error.message);
        return supabase.storage.from("dpp-fotograflar").getPublicUrl(path).data.publicUrl;
      }));
      setFotograflar(prev => [...prev, ...urls]);
    } catch (err) {
      setHata("Fotoğraf yüklenemedi: " + err.message);
    } finally {
      setFotoYukleniyor(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const kaydet = async () => {
    if (!yapilanIslem.trim()) { setHata("Yapılan işlem boş olamaz."); return; }
    setYukleniyor(true);
    setHata("");
    try {
      const res = await fetch(`/api/dpp/tamir/${dppTamirId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
        body: JSON.stringify({
          yapilan_islem: yapilanIslem.trim(),
          degistirilen_parcalar: parcalar,
          maliyet: maliyet !== "" ? parseInt(maliyet, 10) : null,
          fotograflar,
          notlar: notlar.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Sunucu hatası");
      onZenginlesti();
    } catch (e) {
      setHata(e.message);
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
      <div style={{ background: CREAM, borderRadius: 16, padding: 24, width: "92%", maxWidth: 400, maxHeight: "85vh", overflowY: "auto", fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: INK, marginBottom: 4 }}>
          DPP Kaydını Zenginleştir
        </div>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>#{is.is_no}</div>

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Yapılan işlem</label>
        <textarea
          value={yapilanIslem}
          onChange={e => setYapilanIslem(e.target.value)}
          rows={2}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", resize: "vertical", marginBottom: 14 }}
        />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Değiştirilen parçalar</label>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            value={parcaGiris}
            onChange={e => setParcaGiris(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); parcaEkle(); } }}
            placeholder="Parça adı, Enter ile ekle"
            style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif" }}
          />
          <button onClick={parcaEkle} type="button"
            style={{ padding: "0 14px", borderRadius: 8, border: `1.5px solid ${AMBER}`, background: "transparent", color: AMBER, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            + Ekle
          </button>
        </div>
        {parcalar.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {parcalar.map(p => (
              <button key={p} type="button" onClick={() => setParcalar(prev => prev.filter(x => x !== p))}
                style={{ fontSize: 12, background: "#DDD3BE", border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
                {p} ✕
              </button>
            ))}
          </div>
        )}

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Maliyet (TL)</label>
        <input
          type="number" min="0" value={maliyet}
          onChange={e => { const v = e.target.value; if (v === "" || /^\d+$/.test(v)) setMaliyet(v); }}
          placeholder="3200"
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", marginBottom: 14 }}
        />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>
          Fotoğraf <span style={{ fontWeight: 400, color: "#888" }}>(öncesi/sonrası, max 5)</span>
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {fotograflar.map((url, i) => (
            <div key={url} style={{ position: "relative" }}>
              <img src={url} alt={`foto ${i+1}`} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 6, border: "1px solid #DDD3BE" }} />
              <button type="button" onClick={() => setFotograflar(prev => prev.filter(u => u !== url))}
                style={{ position: "absolute", top: -6, right: -6, background: "#B23A2E", color: "#fff", border: "none", borderRadius: "50%", width: 16, height: 16, fontSize: 9, cursor: "pointer" }}>✕</button>
            </div>
          ))}
          {fotograflar.length < 5 && (
            <button type="button" onClick={() => inputRef.current?.click()} disabled={fotoYukleniyor}
              style={{ width: 56, height: 56, border: "1.5px dashed #DDD3BE", borderRadius: 6, background: "#FFFDF8", color: "#9A9384", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {fotoYukleniyor ? "⏳" : "+"}
            </button>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple style={{ display: "none" }} onChange={dosyaSec} />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Notlar</label>
        <textarea
          value={notlar}
          onChange={e => setNotlar(e.target.value)}
          rows={2}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", resize: "vertical", marginBottom: 14 }}
        />

        {hata && <div style={{ color: "#B23A2E", fontSize: 12, marginBottom: 12 }}>{hata}</div>}

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onKapat} type="button"
            style={{ flex: 1, padding: 11, borderRadius: 10, border: "1.5px solid #DDD3BE", background: "white", fontSize: 13, cursor: "pointer" }}>
            İptal
          </button>
          <button onClick={kaydet} disabled={yukleniyor} type="button"
            style={{ flex: 2, padding: 11, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer", opacity: yukleniyor ? 0.7 : 1 }}>
            {yukleniyor ? "Kaydediliyor..." : "📋 DPP'ye Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: IsKarti bileşenini güncelle**

`IsKarti` fonksiyonunda şu değişiklikler:

**a) State ekle** — `const [yukleniyor, setYukleniyor] = useState(false);` satırından sonra:
```js
const [dppTamirId, setDppTamirId] = useState(is.dpp_tamir_id || null);
const [zenginleştirAcik, setZenginleştirAcik] = useState(false);
const [dppZenginlesti, setDppZenginlesti] = useState(false);
```

**b) islemYap fonksiyonunu güncelle** — `onGuncelle(is.id, data.durum);` satırını şununla değiştir:
```js
onGuncelle(is.id, data.durum);
if (data.dpp_tamir_id) setDppTamirId(data.dpp_tamir_id);
```

**c) Return'deki `<>` içine, tamamlandi durumu için DPP bilgisini ekle** — `{is.durum === "onaylandi" && (` bloğundan hemen sonra:
```jsx
{is.durum === "tamamlandi" && (
  <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "#F0EAD8", fontSize: 12 }}>
    {dppZenginlesti ? (
      <span style={{ color: GREEN, fontWeight: 700 }}>✓ DPP Kaydı Zenginleştirildi</span>
    ) : dppTamirId ? (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: GREEN, fontWeight: 600 }}>✓ DPP Kaydı Oluşturuldu</span>
        <button
          onClick={() => setZenginleştirAcik(true)}
          style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>
          📋 Zenginleştir
        </button>
      </div>
    ) : (
      <span style={{ color: "#9A9384" }}>— Seri no girilmedi, DPP kaydı yok</span>
    )}
  </div>
)}
```

**d) ZenginleştirModal'ı render'a ekle** — `{kabulModal && (` satırından hemen önce:
```jsx
{zenginleştirAcik && dppTamirId && (
  <ZenginleştirModal
    is={is}
    dppTamirId={dppTamirId}
    jwtToken={jwtToken}
    onKapat={() => setZenginleştirAcik(false)}
    onZenginlesti={() => { setZenginleştirAcik(false); setDppZenginlesti(true); }}
  />
)}
```

- [ ] **Step 4: Görsel test**

```bash
npm run dev
```

Panel'e gir → tamamlanmış iş varsa (seri_no ile) → "✓ DPP Kaydı Oluşturuldu" + "Zenginleştir" butonu görünüyor mu?

"Zenginleştir" tıkla → modal açılıyor mu? → Parça ekle + kaydet → "✓ DPP Kaydı Zenginleştirildi" yazıyor mu?

- [ ] **Step 5: Commit**

```bash
git add src/ServisPanel.jsx
git commit -m "feat: ServisPanel — ZenginleştirModal + DPP durumu"
```

---

## Task 7: src/DPPEkrani.jsx — Garanti/Fatura + BenservisRozet

**Files:**
- Modify: `src/DPPEkrani.jsx`

### Bağlam

686 satırlık bileşen. 3 değişiklik yapacağız:
1. `YeniCihazForm` — garanti başlangıç + uzatılmış garanti + fatura upload
2. `PasaportGorunum` — garanti kartı + fatura linki + BenservisRozet
3. Import ekle

`api/dpp/cihaz.js` yeni alanları kabul edecek şekilde zaten hazır (insert'e ekliyoruz), oraya dokunmaya gerek yok çünkü `api/dpp/cihaz.js` insert'te `garanti_baslangic_tarihi` etc. alanlara undefined geçerse null olarak insert edilir. **YeniCihazForm POST body'sine** bu alanları eklemeliyiz.

- [ ] **Step 1: BenservisRozet import ekle**

`src/DPPEkrani.jsx` dosyasının en üstüne (1. satırdan sonra):

```js
import BenservisRozet from "./BenservisRozet.jsx";
```

- [ ] **Step 2: YeniCihazForm — fatura upload helper ekle**

`uploadPhoto` fonksiyonundan hemen sonra (24. satırdan sonra) fatura upload helper'ı ekle:

```js
async function uploadFatura(file, cihazId) {
  const ext = file.name.split(".").pop().toLowerCase();
  const allowed = ["jpg", "jpeg", "png", "pdf"];
  if (!allowed.includes(ext)) throw new Error("Desteklenmeyen format (jpg, png, pdf)");
  if (file.size > 10 * 1024 * 1024) throw new Error("Maksimum dosya boyutu 10 MB");

  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `${cihazId || "gecici"}/${fileName}`;

  const { error } = await supabase.storage
    .from("dpp-faturalar")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("dpp-faturalar").getPublicUrl(path);
  return data.publicUrl;
}
```

- [ ] **Step 3: YeniCihazForm state'ini güncelle**

`YeniCihazForm` içinde `useState` çağrısında `form` state'ine yeni alanlar ekle:

```js
// ESKİ form state:
const [form, setForm] = useState({
  kategori: teshisContext?.cihaz || "",
  marka: teshisContext?.marka || "",
  model: "",
  renk: "",
  uretim_yili: "",
  satin_alma_tarihi: "",
  garanti_bitis_tarihi: "",
});

// YENİ form state:
const [form, setForm] = useState({
  kategori: teshisContext?.cihaz || "",
  marka: teshisContext?.marka || "",
  model: "",
  renk: "",
  uretim_yili: "",
  satin_alma_tarihi: "",
  garanti_baslangic_tarihi: "",
  garanti_bitis_tarihi: "",
  uzatilmis_garanti: false,
  uzatilmis_garanti_bitis: "",
});
```

Mevcut `const [fotograflar, setFotograflar] = useState([]);` satırından sonra ekle:
```js
const [faturaUrl, setFaturaUrl] = useState(null);
const [faturaYukleniyor, setFaturaYukleniyor] = useState(false);
const [faturaHata, setFaturaHata] = useState("");
const faturaRef = React.useRef(null);
```

- [ ] **Step 4: Fatura upload handler ekle**

`YeniCihazForm` içinde `const set = (k, v) => ...` satırından sonra:

```js
const faturaYukle = async (e) => {
  const f = e.target.files?.[0];
  if (!f) return;
  setFaturaHata("");
  setFaturaYukleniyor(true);
  try {
    const url = await uploadFatura(f, null);
    setFaturaUrl(url);
  } catch (err) {
    setFaturaHata(err.message);
  } finally {
    setFaturaYukleniyor(false);
    if (faturaRef.current) faturaRef.current.value = "";
  }
};
```

- [ ] **Step 5: olustur fonksiyonuna yeni alanları ekle**

`olustur` fonksiyonunda `body` objesine ekle (mevcut alanlardan sonra):

```js
// ESKİ body (satır ~176-187):
const body = {
  seri_no: seriNo,
  kategori: form.kategori || null,
  marka: form.marka || null,
  model: form.model || null,
  renk: form.renk || null,
  uretim_yili: form.uretim_yili ? parseInt(form.uretim_yili, 10) : null,
  satin_alma_tarihi: form.satin_alma_tarihi || null,
  garanti_bitis_tarihi: form.garanti_bitis_tarihi || null,
  fotograflar,
};

// YENİ body:
const body = {
  seri_no: seriNo,
  kategori: form.kategori || null,
  marka: form.marka || null,
  model: form.model || null,
  renk: form.renk || null,
  uretim_yili: form.uretim_yili ? parseInt(form.uretim_yili, 10) : null,
  satin_alma_tarihi: form.satin_alma_tarihi || null,
  garanti_baslangic_tarihi: form.garanti_baslangic_tarihi || null,
  garanti_bitis_tarihi: form.garanti_bitis_tarihi || null,
  uzatilmis_garanti: form.uzatilmis_garanti,
  uzatilmis_garanti_bitis: form.uzatilmis_garanti_bitis || null,
  fatura_url: faturaUrl || null,
  fotograflar,
};
```

`api/dpp/cihaz.js`'deki POST handler'ına da yeni alanları eklemek gerekiyor:

`api/dpp/cihaz.js` dosyasında destructuring satırını güncelle:

```js
// ESKİ (satır ~26):
const {
  seri_no, kategori, marka, model, renk,
  uretim_yili, satin_alma_tarihi, garanti_bitis_tarihi,
  fotograflar, notlar,
} = req.body || {};

// YENİ:
const {
  seri_no, kategori, marka, model, renk,
  uretim_yili, satin_alma_tarihi, garanti_baslangic_tarihi,
  garanti_bitis_tarihi, uzatilmis_garanti, uzatilmis_garanti_bitis,
  fatura_url, fotograflar, notlar,
} = req.body || {};
```

Ve insert objesine ekle:

```js
// ESKİ insert (satır ~62-73):
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

// YENİ insert:
.insert({
  seri_no,
  kategori: kategori || null,
  marka: marka || null,
  model: model || null,
  renk: renk || null,
  uretim_yili: uretim_yili || null,
  satin_alma_tarihi: satin_alma_tarihi || null,
  garanti_baslangic_tarihi: garanti_baslangic_tarihi || null,
  garanti_bitis_tarihi: garanti_bitis_tarihi || null,
  uzatilmis_garanti: uzatilmis_garanti ?? false,
  uzatilmis_garanti_bitis: uzatilmis_garanti_bitis || null,
  fatura_url: fatura_url || null,
  fotograflar: fotograflar || [],
  notlar: notlar || null,
})
```

- [ ] **Step 6: YeniCihazForm'a garanti ve fatura alanlarını ekle**

Mevcut `garanti_bitis_tarihi` alanı satırı bulun (iki date inputlu `s.row` div'i, satır ~248-256):

```jsx
// ESKİ (iki alanlı row):
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

// YENİ (garanti başlangıç + bitiş + uzatılmış + fatura):
<div style={s.row}>
  <div style={{ flex: 1 }}>
    <label style={s.label}>Satın alma tarihi <span style={s.opt}>(opsiyonel)</span></label>
    <input style={s.input} type="date" value={form.satin_alma_tarihi} onChange={(e) => set("satin_alma_tarihi", e.target.value)} />
  </div>
  <div style={{ flex: 1 }}>
    <label style={s.label}>Garanti başlangıç <span style={s.opt}>(opsiyonel)</span></label>
    <input style={s.input} type="date" value={form.garanti_baslangic_tarihi} onChange={(e) => set("garanti_baslangic_tarihi", e.target.value)} />
  </div>
</div>
<div style={s.row}>
  <div style={{ flex: 1 }}>
    <label style={s.label}>Garanti bitişi <span style={s.opt}>(opsiyonel)</span></label>
    <input style={s.input} type="date" value={form.garanti_bitis_tarihi} onChange={(e) => set("garanti_bitis_tarihi", e.target.value)} />
  </div>
  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
    <label style={{ ...s.label, display: "flex", alignItems: "center", gap: 8 }}>
      <input
        type="checkbox"
        checked={form.uzatilmis_garanti}
        onChange={e => set("uzatilmis_garanti", e.target.checked)}
        style={{ width: 16, height: 16, cursor: "pointer" }}
      />
      Uzatılmış garanti
    </label>
    {form.uzatilmis_garanti && (
      <input
        style={s.input}
        type="date"
        value={form.uzatilmis_garanti_bitis}
        onChange={(e) => set("uzatilmis_garanti_bitis", e.target.value)}
        placeholder="Bitiş tarihi"
      />
    )}
  </div>
</div>
```

Fatura alanını `<label style={s.label}>Fotoğraf ...` satırından hemen önce ekle:

```jsx
<label style={s.label}>Fatura <span style={s.opt}>(PDF veya fotoğraf, max 10 MB, opsiyonel)</span></label>
{faturaUrl ? (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
    <a href={faturaUrl} target="_blank" rel="noopener noreferrer"
      style={{ fontSize: 13, color: AMBER, fontWeight: 600 }}>📄 Fatura Görüntüle</a>
    <button type="button" onClick={() => setFaturaUrl(null)}
      style={{ fontSize: 11, color: "#B23A2E", background: "none", border: "none", cursor: "pointer" }}>Kaldır</button>
  </div>
) : (
  <div style={{ marginBottom: 14 }}>
    <button type="button" onClick={() => faturaRef.current?.click()} disabled={faturaYukleniyor}
      style={{ padding: "9px 16px", borderRadius: 8, border: "1.5px dashed #DDD3BE", background: "#FFFDF8", color: "#5C6660", fontSize: 13, cursor: "pointer" }}>
      {faturaYukleniyor ? "⏳ Yükleniyor..." : "📎 Fatura Yükle"}
    </button>
    {faturaHata && <p style={s.hata}>{faturaHata}</p>}
  </div>
)}
<input ref={faturaRef} type="file" accept="image/jpeg,image/png,application/pdf" style={{ display: "none" }} onChange={faturaYukle} />
```

- [ ] **Step 7: PasaportGorunum'da garanti kartı + fatura linki + BenservisRozet**

`PasaportGorunum` içinde `garantiDurumu` fonksiyonunu güncelle ve yeni bilgiler ekle.

Mevcut `garantiDurumu` fonksiyonunu (satır ~274-282) şununla değiştir:

```js
const garantiDurumu = () => {
  const bugun = new Date();
  const sonuclar = [];

  if (cihaz.garanti_baslangic_tarihi) {
    sonuclar.push({ tip: "baslangic", tarih: cihaz.garanti_baslangic_tarihi });
  }
  if (cihaz.garanti_bitis_tarihi) {
    const bitis = new Date(cihaz.garanti_bitis_tarihi);
    const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
    sonuclar.push({
      tip: "bitis",
      tarih: cihaz.garanti_bitis_tarihi,
      kalan: fark,
      aktif: fark > 0,
    });
  }
  if (cihaz.uzatilmis_garanti && cihaz.uzatilmis_garanti_bitis) {
    const bitis = new Date(cihaz.uzatilmis_garanti_bitis);
    const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
    sonuclar.push({ tip: "uzatilmis", tarih: cihaz.uzatilmis_garanti_bitis, kalan: fark, aktif: fark > 0 });
  }
  return sonuclar;
};
const garantiBilgileri = garantiDurumu();
```

`hasBenservis` değişkenini `return (` öncesine ekle:
```js
const hasBenservis = tamirler.some(t => t.servis_turu === "benservis");
```

Mevcut `{garanti && (...)}` satırını (satır ~297-301) şununla değiştir:

```jsx
{garantiBilgileri.length > 0 && (
  <div style={{ marginTop: 10, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 8, padding: "10px 12px", fontSize: 12 }}>
    {garantiBilgileri.map((g, i) => (
      <div key={i} style={{ marginBottom: i < garantiBilgileri.length - 1 ? 4 : 0, color: "#5C6660" }}>
        {g.tip === "baslangic" && `📅 Alındı: ${new Date(g.tarih).toLocaleDateString("tr-TR")}`}
        {g.tip === "bitis" && (
          <span style={{ color: g.aktif ? GREEN : "#B23A2E", fontWeight: 600 }}>
            🛡️ Garanti: {new Date(g.tarih).toLocaleDateString("tr-TR")}
            {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
          </span>
        )}
        {g.tip === "uzatilmis" && (
          <span style={{ color: g.aktif ? GREEN : "#B23A2E", fontWeight: 600 }}>
            ➕ Uzatılmış: {new Date(g.tarih).toLocaleDateString("tr-TR")}
            {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
          </span>
        )}
      </div>
    ))}
    {cihaz.fatura_url && (
      <div style={{ marginTop: 6 }}>
        <a href={cihaz.fatura_url} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: AMBER, fontWeight: 600 }}>📄 Fatura Görüntüle</a>
      </div>
    )}
  </div>
)}
```

Cihaz başlığının hemen yanına (`<div style={s.pasaportAlt}>` içine) BenservisRozet ekle:

```jsx
// pasaportAlt div'inin içinde, diğer span'lardan sonra:
{hasBenservis && (
  <div style={{ marginLeft: "auto" }}>
    <BenservisRozet size="lg" tarih={tamirler.find(t => t.servis_turu === "benservis")?.tarih} />
  </div>
)}
```

Tamir kartındaki mevcut `dogrulanmisRozet` satırını (satır ~336) şununla değiştir:

```jsx
{t.servis_turu === "benservis" && (
  <BenservisRozet size="sm" tarih={t.tarih} />
)}
```

- [ ] **Step 8: Görsel test**

```bash
npm run dev
```

- DPP Pasaport → seri no ara (yoksa yeni oluştur)
- Yeni cihaz formunda garanti başlangıç/bitiş + uzatılmış garanti checkbox + fatura yükle görünüyor mu?
- "Uzatılmış garanti" checkbox'ı işaretle → tarih alanı açılıyor mu?
- Bir Benservis tamir kaydı olan cihazda pasaport görünümünde BenservisRozet lg görünüyor mu?
- Tamir kartlarında sm rozet görünüyor mu?

- [ ] **Step 9: Commit**

```bash
git add src/DPPEkrani.jsx api/dpp/cihaz.js
git commit -m "feat: DPPEkrani — garanti/fatura/BenservisRozet"
```

---

## Task 8: Deploy + Supabase Storage Bucket

**Files:**
- Supabase Dashboard (manuel)
- Git push

### Bağlam

`dpp-faturalar` adında yeni Supabase Storage bucket lazım. Vercel'e yeni env var yok — mevcut `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `SUPABASE_ANON_KEY`, `VITE_SUPABASE_ANON_KEY` yeterli.

- [ ] **Step 1: dpp-faturalar bucket'ı oluştur**

Supabase Dashboard → Storage → New bucket:
- Name: `dpp-faturalar`
- Public bucket: ✅ (açık)
- File size limit: 10 MB
- Allowed MIME types: `image/jpeg, image/png, application/pdf`

"Save" tıkla.

- [ ] **Step 2: Push ve deploy**

```bash
git push origin main
```

Vercel otomatik deploy başlar. ~1-2 dakika bekle.

- [ ] **Step 3: Production test**

**Test A — Servis Çağır + Tamamla + DPP:**

1. `benservis.com` → bir servis seç → "🔧 Servis Çağır"
2. Formda seri no gir: `PROD-TEST-001`
3. Gönder → `#BS-000X` iş no geldi
4. Supabase SQL: `UPDATE is_talepleri SET durum='onaylandi', gelis_penceresi='Test' WHERE is_no='BS-000X';`
5. Panel'e gir (`benservis.com/panel`) → tamamla
6. Response'da `dpp_tamir_id` var mı?
7. `benservis.com` → DPP → seri no: `PROD-TEST-001` → tamir geçmişinde Benservis kaydı var mı?

**Test B — Garanti + Fatura:**
1. DPP → seri no: `GARANTI-001` → yeni cihaz oluştur
2. Garanti başlangıç + bitiş gir + uzatılmış garanti checkbox + fatura yükle
3. Pasaport görünümünde garanti kartı + fatura linki var mı?

**Test C — BenservisRozet:**
1. Benservis tamir kaydı olan pasaport aç
2. Cihaz başlığı yanında büyük rozet görünüyor mu?
3. Tamir kartında küçük rozet görünüyor mu?

- [ ] **Step 4: Final commit (gerekirse)**

```bash
git add -A
git commit -m "chore: DPP genisletme deploy sonrası düzeltmeler (varsa)"
git push origin main
```

---

## Self-Review Notları

**Spec coverage kontrolü:**
- ✅ seri_no → is_talepleri (Task 1 + 5)
- ✅ dpp_tamir_id → is_talepleri (Task 1 + 2)
- ✅ garanti alanları → cihazlar (Task 1 + 7)
- ✅ fatura_url → cihazlar (Task 1 + 7)
- ✅ servis_id → tamir_kayitlari (Task 1 + 2)
- ✅ tamamla → auto DPP write (Task 2)
- ✅ PATCH /api/dpp/tamir/:id (Task 3)
- ✅ BenservisRozet sm/md/lg (Task 4)
- ✅ ServisCaldir seri_no alanı (Task 5)
- ✅ ZenginleştirModal (Task 6)
- ✅ DPP durumu panel kartında (Task 6)
- ✅ YeniCihazForm garanti/fatura (Task 7)
- ✅ PasaportGorunum garanti kartı (Task 7)
- ✅ PasaportGorunum fatura linki (Task 7)
- ✅ BenservisRozet DPPEkrani'da (Task 7)
- ✅ dpp-faturalar bucket (Task 8)

**Kapsam dışı (bu planda yok):**
- Ödeme sistemi
- Müşteri auth / "Cihazlarım" listesi
- Garanti bildirimleri
