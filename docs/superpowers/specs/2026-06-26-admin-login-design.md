# Admin Basit Giriş (şifre) — Tasarım (Spec)

- **Tarih:** 2026-06-26
- **Durum:** Tasarım onaylandı → spec inceleme bekliyor
- **Kapsam:** `/admin` rapor sayfasına **şifre ekranı + hatırlama** — uzun `?token=` URL'si gerekmesin.
- **Kapsam DIŞI:** Çok kullanıcılı login, rol/yetki, oturum süresi/JWT, parola sıfırlama. (Tek paylaşılan admin şifresi yeterli.)

---

## 1. Bağlam

Faz 1 rapor sayfası (`/admin`) şu an `?token=ADMIN_TOKEN` URL'siyle açılıyor — her seferinde uzun token yapıştırmak zahmetli. Kullanıcı **kolay bir şifreyle giriş** istiyor. Güvenlik **sunucuda** (`/api/admin/rapor` Bearer kontrol) — bu DEĞİŞMEZ; sadece istemci girişi kolaylaşır.

## 2. Karar özeti

- **Şifre ekranı + localStorage hatırlama** (URL token derdi biter).
- **Ayrı, akılda kalır `ADMIN_PASSWORD`** (kullanıcı Vercel'e ekler) — `ADMIN_TOKEN`'ın yanında ikinci geçerli sır.
- Eski `?token=…` URL'si **çalışmaya devam eder** (geriye uyumlu).

## 3. Mimari

### 3a. Endpoint — `api/admin/rapor.js` (tek satır değişiklik)
`yetkiKontrol` artık iki sırdan birini kabul eder:
```js
function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}
```
- Güvenlik aynı: yalnız doğru sır → 200; aksi → 401. Paylaşılan admin şifresi (per-user değil), düz karşılaştırma — bu iç araç için yeterli.

### 3b. Sayfa — `src/RaporPaneli.jsx` (giriş katmanı)
- **Aktif sır kaynağı (öncelik):** `localStorage["benservis_admin"]` → yoksa URL `?token=` → yoksa boş.
- **Giriş YOKSA:** rapor yerine **giriş ekranı** — şifre kutusu (`type=password`) + "Giriş". "Giriş" → şifreyi state'e al → varsayılan aralıkla (`son 30 gün`) `/api/admin/rapor` çağır:
  - **200:** şifreyi `localStorage`'a kaydet → rapor göster (giriş yapıldı).
  - **401:** "Şifre hatalı" → kaydetme, giriş ekranında kal.
- **Giriş VARSA (localStorage/URL):** açılışta otomatik rapor çek → tablolar. (Saklı şifre artık geçersizse → 401 → localStorage temizle → giriş ekranı.)
- **"Çıkış" butonu** (rapor başlığında): `localStorage` temizle → giriş ekranı. Ortak cihaz için.
- Tüm `/api/admin/rapor` çağrıları `Authorization: Bearer <aktif sır>`.

### 3c. Veri akışı
`/admin → (localStorage'da sır var mı?) → varsa otomatik rapor · yoksa şifre ekranı → Giriş → 200 ise kaydet+rapor / 401 ise hata`

## 4. Env / kurulum
- Yeni: **`ADMIN_PASSWORD`** — kullanıcı Vercel (project-83ils) → Settings → Environment Variables → Production'a kolay bir şifre ekler. (Ben görmem; sır.)
- `ADMIN_TOKEN` kalır (eski URL + endpoint hâlâ geçerli).

## 5. Hata yönetimi
- Yanlış şifre → 401 → "Şifre hatalı, tekrar dene"; localStorage'a yazılmaz.
- Saklı şifre sonradan geçersiz (env değişti) → ilk çekişte 401 → localStorage temizlenir → giriş ekranı.
- `ADMIN_PASSWORD` Vercel'e eklenmemişse → şifre 401 verir (kullanıcı önce env eklemeli); `ADMIN_TOKEN` yine çalışır.

## 6. Kabul kriterleri
- [ ] `ADMIN_PASSWORD` eklendikten sonra `/admin` → şifre ekranı → doğru şifre → rapor; yanlış → "Şifre hatalı".
- [ ] Doğru giriş sonrası sayfa yenilense/tekrar açılsa → otomatik rapor (tekrar şifre sorulmaz).
- [ ] "Çıkış" → localStorage temizlenir → şifre ekranı.
- [ ] Eski `/admin?token=ADMIN_TOKEN` URL'si hâlâ çalışır.
- [ ] Endpoint tokensız/yanlış → 401; doğru ADMIN_TOKEN **veya** ADMIN_PASSWORD → 200.
- [ ] `vite build` temiz; mevcut akışlar etkilenmez.

## 7. Test yaklaşımı
- **Endpoint:** lokal handler — `ADMIN_TOKEN`+`ADMIN_PASSWORD` set; Bearer token→200, Bearer password→200, yanlış→401, sırsız→401.
- **Sayfa:** preview — `/admin` (sırsız) → şifre ekranı; yanlış → hata; (doğru şifre prod env gerektirir → kullanıcı kendi şifresiyle canlıda doğrular); localStorage hatırlama + Çıkış.
- **Regresyon:** `?token=` URL hâlâ açıyor; kök teşhis akışı değişmedi.
