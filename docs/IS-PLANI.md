# Benservis — İş Planı (public özet)

> **Bu dosya public repoda duran, bilerek sadeleştirilmiş özettir.** Tam iş planı ve strateji
> (hedefler, takvim, finansman, çıkış) **private** repodadır:
> `tolgaildaser-cloud/benservis-plan` → `BENSERVIS-IS-PLANI-VE-STRATEJI.md`.
> Çelişkide sıra: `KARAR-DEFTERI.md` (YK, lokal) > private strateji dosyası > bu özet.
>
> Bulut oturumu stratejiye ihtiyaç duyarsa private repoyu session'a ekleyip oradan okur;
> içeriğini **bu dosyaya ya da public repoya kopyalamaz** (#137: public metinlerde trafik/
> kullanıcı rakamı, TL ve kurucunun iş durumu yok).
>
> Son güncelleme: **26 Eylül 2026** (23 Tem sürümünün yerine; eski sürüm git geçmişinde).

---

## 1 · Ne yapıyoruz

**Benservis**, evdeki cihaz arızasında *"önce öğren, sonra çağır"* diyen ücretsiz bir
**AI teşhis + tahmini maliyet + yakın servis** aracıdır.

- **Problem:** Cihaz bozulunca kullanıcı arızanın ne olduğunu, kaça mal olacağını ve kime
  güveneceğini bilmiyor. Düşman *belirsizlik*, servisler değil — suçlayıcı dil yasak.
- **Çözüm (canlı):** benservis.com — AI teşhis + **deterministik** tahmini maliyet (fiyatı AI
  değil, insan onaylı tarife belirler) + Google puanlı en yakın servis listesi + doğrudan arama.
- **Kullanıcı:** Türkiye'de ev cihazı arızası yaşayan tüketici; ağırlıkla mobil. Giriş yok, ücretsiz.
- **Neden şimdi:** AB Onarım Hakkı + Dijital Ürün Pasaportu, Türkiye'de YÜBİS ve SERBİS
  altyapıları, COP31 / sıfır atık gündemi. Benservis bu altyapıların üstündeki tüketici katmanı.

## 2 · Faz mimarisi

| Faz | İçerik | Durum |
|---|---|---|
| **1** | AI teşhis + maliyet + servis dizini + içerik motoru | **Canlı** |
| **2** | Havuz / take-rate (servis kaydolur, iş ve ödeme platformdan geçer) | **Dormant** (kod yazılı, gizli) |
| **2.5** | Kendin tamir et rehberleri (iFixit tarzı) | Canlı (içerik) |
| **3** | DPP / "Cihazların Tramer'i" + garanti hatırlatıcısı | **Yarı açık** — garanti hatırlatıcısı canlı, DPP paneli dormant |
| **3.5 / 4** | Servis mağazası + ikinci el pazaryeri | Dormant |
| **5** | Perakende entegrasyonu (satın alınca DPP otomatik) | Vizyon |

**Kural (26 Eyl 2026): yeni faz açılmaz.** Dormant kod silinmez ama vitrine çıkmaz; hacim
yetersizken Faz 2/4'ü açmak boş vitrin olur. Öncelik Faz 1 hacmi + ölçüm kapıları.

## 3 · Ürün ve fiyat ilkeleri

- Kullanıcıya fiyat **yalnız teşhis ekranında** gösterilir; içerikte (blog, rehber, kılavuz)
  **TL yok** (#46/#48).
- Tarife **insan onaylı**, üretici/servis belgesine dayanır; tek kaynakla fiyat değişmez
  (#7, #15, #35, #88). Web verisi hep **Taslak** girer, uygulama yalnız **Onaylı** kullanır.
- İçerikte kaynak kuralı: **üreticinin kendi belgesi** (#88); okur odaklı yazım (#89).
- Sayı/iddia şişirilmez (#77): sitede gösterilen sayılar kaynağına bağlı kalır.

## 4 · Pazara gidiş ilkeleri

- **Birincil kanal organik arama.** Öncelik sırası: tıklama oranı (başlık/meta) → pozisyon →
  içerik.
- Sosyal: carousel + Reels (IG, YT Shorts, TikTok) + rehber; Shorts ilgili blog sayfasına gömülür.
- **Yapılmayanlar:** ücretli reklam, fiyat endeksi, toplu servis e-postası, **şehir sayfaları**,
  mobil app (kapı kararı YK'da).

## 5 · Veri ve savunulabilirlik

1. **Tarife motoru:** web-beslenen ham veri → insan onayı → snapshot → teşhis.
2. **Servis dizini:** Google puanlı servis listesi + SERBİS eşleşme rozeti.
3. **Cihaz sahipliği verisi:** garanti hatırlatıcısı (KVKK rızalı) — Faz 3'ün tohumu.
4. **İçerik külliyatı:** blog + rehber + tamir + kılavuz sayfaları.
5. **Güvenlik:** RLS + rate-limit, KVKK metinleri yayında; API anahtarları yalnız sunucu env'inde.

## 6 · Organizasyon

Tek kurucu + AI rolleri (pazarlama, grafik, front-end, kontrolör, IT, YK). Kararlar
`KARAR-DEFTERI.md` üzerinden dağılır; yayın, tarife onayı ve tüm harcamalar kurucu onayındadır.

## İlgili Dokümanlar

- **Private:** `tolgaildaser-cloud/benservis-plan` — tam iş planı ve strateji.
- `CLAUDE.md` — teknik devir dokümanı (tarihsel; orijinal 5-fazlı vizyon).
- `docs/DURUM.md` — faz durum özeti (eski).
- `docs/superpowers/specs/` + `plans/` — her fazın spec + uygulama planı.
