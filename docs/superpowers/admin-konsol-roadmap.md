# Benservis Admin Konsolu — Vizyon & Faz Yol Haritası

> **Not (26 Haz 2026):** Kullanıcı direktifi. ŞİMDİ inşa edilmiyor — sonraki fazlar için referans.
> Her faz kendi **brainstorming → spec → plan → build** döngüsünü alır. YAGNI: dormant akışlara erken admin yapma.

## Vizyon
`benservis.com/admin` altında **tüm sistemi yöneten birleşik back-office**: girişler, raporlar, tüm onaylar (servis/müşteri/ürün), DPP düzeltmeleri, görsel/resim yönetimi, izinler. Raporlar için **tüm veriyi tek bir "matris"te** (birleşik raporlama katmanı) tut; admin istediği raporu, istediği tarih aralığı/filtreyle çeker. Onay ve izinleri buradan ver.

## Yapıldı (temel)
- **Faz 0 — Teşhis loglama** ✅ (anonim `teshis_log`; her teşhis cihaz/marka/arıza/maliyet/karar/aciliyet + servis aramada il/ilçe).
- **Faz 1 — Teşhis raporu + şifre girişi** ✅ (`/admin`, `ADMIN_PASSWORD` + localStorage; `/api/admin/rapor` tarih aralıklı).

## Mevcut dağınık parçalar (Faz 2'de çatıya taşınacak)
- `/servis-admin` (`ServisAdmin.jsx`) — servis başvuru onay/red.
- `/ikinci-el/admin` (`AdminOdemePaneli.jsx`) — IBAN ödeme.
- `api/admin/*` (odemeler, servis-basvurulari, sifre-reset, sms-test, panel-kurulum).

---

## Sonraki fazlar

### Faz 2 — Birleşik çatı + gerçek auth
- Tek `/admin` kabuk: sol menü + modül sayfaları; mevcut panelleri (servis onay, ödeme, sistem araçları) içeri al.
- **Auth yükseltme:** tek paylaşılan şifreden → çok-kullanıcılı admin (Supabase Auth) + **roller** (sahip / operatör / sadece-rapor). İzin matrisi: kim neyi görür/onaylar.
- Audit log (kim ne onayladı/değiştirdi — zaman damgalı).

### Faz 3 — Onay / moderasyon modülleri
- **Servis/bayi onayları** (mevcut ServisAdmin → entegre): başvuru → belge → onay/red → hesap.
- **Müşteri onayları/yönetimi:** talep/iş kayıtları (is_talepleri), şüpheli/şikayet moderasyonu, KVKK talep (sil/dışa aktar).
- **Ürün/ilan onayları:** ikinci-el ilan + servis ürün moderasyonu (uygunsuz içerik/fiyat).
- **İzinler:** rol-bazlı erişim uygulama.

### Faz 4 — Raporlama matrisi + rapor kataloğu
- **"Matris" = birleşik raporlama katmanı:** kaynak tablolar (`teshis_log`, `is_talepleri`, `servis_basvurulari`, `siparisler`, `tamir_kayitlari`, `ilanlar`…) üzerine Postgres **view/materialized view** ya da rapor başına **RPC**; admin tarih + filtre ile çeker. (v1 JS-aggregate → ölçekte RPC/MV.)
- Rapor kataloğu aşağıda.

### Faz 5 — DPP düzeltmeleri + görsel yönetimi (DORMANT akışlar)
- **DPP düzeltmeleri:** seri-no kayıtlarını düzenle/birleştir/iptal.
- **Görsel/resim yönetimi:** servis foto, ürün foto, **fatura (Faturalar bucket — private + signed URL)** yükleme + moderasyon.
- Bu akışlar pivotta uyuyor → ilgili fazlar (DPP/ikinci-el) canlanınca.

---

## Rapor kataloğu (hedef)
| Rapor | İçerik | Kaynak |
|---|---|---|
| **Teşhis raporu** ✅ | en çok marka/arıza/cihaz/il-ilçe, karar/aciliyet, maliyet özeti | `teshis_log` |
| **Ödeme raporu** | gelir + komisyon, bekleyen/yapılan ödeme, dönem bazlı | `siparisler`, ödeme tabloları |
| **Servis kalite raporu** | tamamlama oranı, no-show/iptal, ortalama süre, şikayet | `is_talepleri` (durumlar) |
| **Servis puan ligi** | servisleri puan + iş sayısı + tamamlama oranıyla sırala (leaderboard/teşvik) | `is_talepleri`, `servis_basvurulari` |
| Bölgesel talep | il/ilçe bazında teşhis + servis araması yoğunluğu (ısı haritası) | `teshis_log` |
| Cihaz/marka trend | zaman serisi (haftalık/aylık) en çok arızalananlar | `teshis_log` |
| Dönüşüm hunisi | teşhis → "Servis Bul" → talep → tamamlanan iş oranları | `teshis_log` + `is_talepleri` |
| Maliyet sapması | SEED tahmini vs gerçekleşen tutar (matris kalibrasyon geri-besleme) | `teshis_log` + gerçek tutar |

Hepsi **tarih aralıklı + filtreli**, admin tarafından tek tıkla çekilebilir.

---

## Kararlar / kısıtlar
- **Güvenlik sunucuda:** her admin ucu rol/sır kontrol eder; raporlar anonim/aggregate kalmaya çalışır (PII yalnız gerektiğinde + izinle).
- **Geriye uyumlu:** her yeni modül mevcut akışları bozmaz; eski erişimler (URL token) korunur.
- **Veri "matrisi"** asıl moat verisini (gerçek tarife + servis performansı) raporlanabilir kılar — [[project-benservis]] karar #6.
- Her faz bağımsız teslim edilebilir; sıra: çatı/auth → onaylar → raporlar → dormant modüller.
