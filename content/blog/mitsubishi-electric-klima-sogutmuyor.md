---
title: "Mitsubishi Electric klima soğutmuyor"
description: "Mitsubishi Electric klima odayı soğutmuyorsa kılavuzun sırası: sıcaklık ve fan ayarı, gece modu, açık pencere, hava yolu, filtre temizliği."
slug: "mitsubishi-electric-klima-sogutmuyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 30 Eyl belirti damarı). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Mitsubishi Electric Türkiye'nin kendi alan adı; ABD kaynağı kullanılmadı.
# #88: web araması YALNIZ belgenin yerini bulmak için. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ · pdftotext -layout, sayfa = PDF sayfası (basılı TR-numarası iki eksik).
#  M) Mitsubishi Electric "Duvar tipi split klimalar iç ünite MSZ-AP25VG/35VG/42VG/50VG · Çalıştırma talimatları" (English/Türkçe)
#     https://klima.mitsubishielectric.com.tr/Guide/20220324182219_msz-ap_25-50vg_kullanma_k_lavuzu.pdf  28 s.  md5 43435dae68b08714f849fb3768360849
# M s.16 "BİR ARIZA OLDUĞUNU DÜŞÜNDÜĞÜNÜZDE" · "Soğutmaz ya da ısıtmaz":
#   "Oda etkin bir şekilde soğutulup ısıtılamıyor. • Sıcaklık ayarı doğru mu? • Fan ayarı uygun mu? Fan hızını Yüksek ya da Süper Yüksek olarak değiştirin. • Filtreler temiz mi? • Fan ya da iç ünitenin ısı değiştiricisi temiz mi? • İç ya da dış ünitenin hava giriş ya da çıkışını tıkayan herhangi bir engel var mı? • Açık bir pencere ya da kapı var mı? • Ayar sıcaklığına erişim biraz zaman alabilir ya da oda boyutu, ortam sıcaklığı, vb. nedenlerle buna hiç erişilemeyebilir. • NIGHT MODE (GECE MODU) çalıştırma etkin mi?"
#   "Oda yeterince soğutulamıyor. • Bir oda içerisinde havalandırma vantilatörü ya da gaz ocağı kullanılırsa, soğutma yükü artar ve yetersiz bir soğutma etkinliği ile sonuçlanır. • Dışarıdaki sıcaklığın yüksek olması durumunda, soğutma işlemi yeterli olmayabilir."
#   Tablo başı: "Bu öğeler kontrol edilse bile, ünitedeki sorun giderilmezse, klimayı kullanmayı bırakın ve satıcınıza danışın."
#   "Ünite, tekrar başlatıldığında yaklaşık 3 dakika çalıştırılamaz. • Bu, mikroişlemcideki talimatlara göre üniteyi korur. Lütfen bekleyin."
#   "İç ünitenin hava çıkışından buğu çıkıyor. • Üniteden gelen soğutma hava hızla oda içerisindeki nemi alır ve buğuya dönüşür."
#   "SOĞUTMA/KURUTMA modunda, oda sıcaklığı belirlenen sıcaklığa yaklaştığında, dış mekan ünitesi durur ve ardından iç ünite alçak hızda çalışır." (açıklama: normal)
# M s.9 Fan hızı: "Odayı daha hızlı şekilde soğutmak/ısıtmak için yüksek fan hızını kullanın. Oda soğuduktan/ısındıktan sonra fan hızının düşürülmesi önerilir."
# M s.11 GECE MODU: "Not: • Soğutma/ısıtma kapasitesi düşebilir." · iptal için aynı düğmeye tekrar basılır.
# M s.14 TEMİZLEME: "Temizlemeden önce güç kaynağını kapatın veya şalteri indirin." / "Metal parçalara ellerinizle dokunmamaya dikkat edin." / "Ovma fırçası, sert sünger veya benzer bir alet kullanmayın." / "50°C'den daha sıcak su kullanmayın." / "Parçaları kuruması için doğrudan güneş ışığına, sıcağa veya ateşe maruz bırakmayın."
#   Hava filtresi: "2 haftada bir temizleyin • Tozu elektrikli süpürgeyle temizleyin veya suyla yıkayın. • Suyla yıkadıktan sonra gölgede iyice kurutun." · ön panel: "Bir "tık" sesi duyulana kadar ön paneli kaldırın." · "İyi performans elde etmek ve güç tüketimini azaltmak için filtreyi düzenli olarak temizleyin."
# M s.17: "Aşağıdaki durumlarda, klimayı kullanmayı bırakın ve bayiinize başvurun. • İç üniteden su sızıntısı veya damlaması olduğunda. • Çalışma gösterge lambası yanıp söndüğünde. • Devre kesici sık sık kapandığında. ... • Anormal bir ses duyulduğunda. • Soğutucu akışkan kaçağı olduğunda."
# M s.4 GÜVENLİK: "Klima soğutmadığı ya da ısıtmadığı zaman, soğutucu madde sızıntısı olasılığı vardır. Soğutucu madde sızıntısı tespit edilirse çalıştırmayı durdurun, odayı iyice havalandırın ve derhal bayinizle iletişime geçin." / "Kullanıcı iç ünitenin iç kısmını yıkamaya hiçbir zaman çalışmamalıdır." / "Uzmanlaşmış bilgi ve yetenekler gerektiren muayene ve bakım için satıcınıza danışın." / "Dış ünitenin üstüne basmayın veya herhangi bir nesne yerleştirmeyin." / "Ünite kullanıcı tarafından ... parçalanmamalı, üzerinde değişiklik yapılmamalı ya da tamir edilmemelidir."
# BİLEREK YAZILMAYANLAR: fan ya da ısı değiştiricisi temizliğini kullanıcıya verme (M s.4 iç kısmı kullanıcıya yasaklıyor; SSS/servis tablosunda "satıcıya/servise" diye anıldı) · V Blocking filtre yıllık değişimi (parça değişimi, #31) · gaz dolumu yönlendirmesi · dış üniteye çıkma/temizleme · fiyat.
# Alıntı denetim tablosu: mitsubishi-electric-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Sağlam bir tabure"]
steps:
  - "Kumandada sıcaklık ayarının doğru olduğunu kontrol et."
  - "Fan hızını Yüksek ya da Süper Yüksek'e getir."
  - "NIGHT MODE (Gece Modu) açıksa kapat."
  - "Açık pencere ya da kapı varsa kapat."
  - "İç ünitenin hava giriş ve çıkışını tıkayan bir engel varsa kaldır; dış ünitenin önünü yalnızca bulunduğun yerden kontrol et."
  - "Soğutma sırasında odada havalandırma vantilatörü ya da gaz ocağı kullanıyorsan kapat."
  - "Güç kaynağını kapat ya da şalteri indir, ön paneli kaldırıp hava filtresini çıkar, süpürgeyle ya da suyla temizle ve gölgede kurutup tak."
  - "Oda yine soğumuyorsa ya da çalışma gösterge lambası yanıp sönüyorsa klimayı kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına ya da servisine başvur."
faq:
  - q: "Mitsubishi Electric klima odayı neden soğutmuyor?"
    a: "Mitsubishi Electric'in Türkçe kılavuzu bu durumda şunları soruyor: sıcaklık ayarı doğru mu, fan ayarı uygun mu, filtreler temiz mi, fan ya da iç ünitenin ısı değiştiricisi temiz mi, iç ya da dış ünitenin hava giriş-çıkışını tıkayan engel var mı, açık pencere ya da kapı var mı ve NIGHT MODE (Gece Modu) açık mı. Odada havalandırma vantilatörü ya da gaz ocağı kullanmak da soğutma yükünü artırır."
  - q: "Gece modu soğutmayı etkiler mi?"
    a: "Evet, etkileyebilir. Kılavuza göre NIGHT MODE çalışma göstergesinin parlaklığını azaltır, bip sesini kapatır ve dış ünitenin ses seviyesini sınırlar; bu modda soğutma ya da ısıtma kapasitesi düşebilir. Kapatmak için aynı düğmeye tekrar basman yeterli."
  - q: "Klimayı kapatıp açtım, hemen çalışmıyor. Arıza mı?"
    a: "Hayır. Mitsubishi Electric kılavuzuna göre ünite yeniden başlatıldığında yaklaşık 3 dakika çalışmaz; bu, mikroişlemcinin üniteyi koruma önlemidir ve beklemen yeterlidir."
  - q: "Kontrollerden sonra da soğutmuyorsa ne yapmalıyım?"
    a: "Kılavuz, bu maddeler kontrol edildiği hâlde sorun sürerse klimayı kullanmayı bırakmanı ve satıcına danışmanı istiyor. Güvenlik bölümü ayrıca klimanın soğutmaması ya da ısıtmaması durumunda soğutucu madde sızıntısı olasılığı bulunduğunu yazıyor; sızıntı tespit edilirse çalıştırmayı durdurup odayı iyice havalandırman ve derhal bayine başvurman gerekir."
images:
  coverAlt: "Aydınlık bir yatak odasında duvardaki beyaz split klima, kapalı pencere ve klimaya doğrultulmuş uzaktan kumanda"
---

Klima çalışıyor ama oda bir türlü serinlemiyor. Mitsubishi Electric'in Türkçe çalıştırma talimatları bu durumu **"Oda etkin bir şekilde soğutulup ısıtılamıyor"** başlığıyla ele alıyor ve yedi soru soruyor; ilki **"Sıcaklık ayarı doğru mu?"** Ardından fan ayarı, filtreler, hava yolu, açık pencere ya da kapı ve gece modu geliyor. Bu yazıda kılavuzun sırasını evde güvenle yapılabilecek adımlara çeviriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcaklık ayarını kontrol et, fanı Yüksek'e al, gece modunu kapat. Pencere ve kapıyı kapat, iç ünitenin önünü aç, havalandırma vantilatörü ya da gaz ocağı kullanma. Gücü kesip filtreyi temizle. Sürerse ya da gösterge lambası yanıp sönüyorsa klimayı kullanmayı bırak → Mitsubishi Electric yetkili satıcısı ya da servisi.

## Kılavuzun kontrol soruları

| Kılavuzdaki soru ya da durum | Ne yapmalı |
|---|---|
| Sıcaklık ayarı doğru mu? | Kumandadaki ayarı kontrol et |
| Fan ayarı uygun mu? | Fan hızını Yüksek ya da Süper Yüksek'e getir |
| NIGHT MODE (Gece Modu) açık mı? | Kapat; bu modda soğutma kapasitesi düşebilir |
| Açık bir pencere ya da kapı var mı? | Kapat |
| Hava giriş ya da çıkışını tıkayan engel var mı? | İç ünitenin önündeki engeli kaldır |
| Havalandırma vantilatörü ya da gaz ocağı kullanılıyor mu? | Soğutma yükünü artırır; kapat |
| Filtreler temiz mi? | 2 haftada bir temizle |
| Fan ya da iç ünitenin ısı değiştiricisi temiz mi? | İç kısım kullanıcı işi değil; satıcıya danış |

Kılavuz, ayar sıcaklığına ulaşmanın biraz zaman alabileceğini ya da oda boyutu ve ortam sıcaklığı gibi nedenlerle hiç ulaşılamayabileceğini, dışarısı çok sıcakken soğutmanın yetersiz kalabileceğini de yazıyor. Oda ayar sıcaklığına yaklaşınca dış ünitenin durup iç ünitenin düşük hızda çalışması ve hava çıkışından buğu gelmesi normal.

## Adım adım: evde denenecekler

**1. Sıcaklık ayarı.** Kumandada sıcaklık ayarının doğru olduğunu kontrol et. Ayarın ayrıntısı için kendi kılavuzundaki sıcaklık ayarı bölümüne bak.

**2. Fan hızı.** Fan hızını Yüksek ya da Süper Yüksek'e getir. Kılavuz, oda soğuduktan sonra fan hızının düşürülmesini öneriyor.

**3. Gece modu.** NIGHT MODE (Gece Modu) açıksa kapat. Mitsubishi Electric'e göre bu modda soğutma ya da ısıtma kapasitesi düşebilir; kapatmak için aynı düğmeye tekrar basılır.

**4. Pencere ve kapı.** Açık pencere ya da kapı varsa kapat.

**5. Hava yolu.** İç ünitenin hava giriş ve çıkışını tıkayan bir engel varsa kaldır; dış ünitenin önünü yalnızca bulunduğun yerden kontrol et. Dış ünitede bir engel görürsen balkona ya da cepheye çıkma; kılavuz dış ünitenin üstüne basılmamasını istiyor.

**6. Ek ısı yükü.** Soğutma sırasında odada havalandırma vantilatörü ya da gaz ocağı kullanıyorsan kapat. Kılavuza göre bunlar soğutma yükünü artırır.

**7. Filtre.** Güç kaynağını kapat ya da şalteri indir, ön paneli kaldırıp hava filtresini çıkar, süpürgeyle ya da suyla temizle ve gölgede kurutup tak. Ön paneli "tık" sesi gelene kadar kaldır. 50 derecenin üzerinde su, ovma fırçası ya da sert sünger kullanma; parçaları güneşte ya da ısıtıcı yanında kurutma, metal parçalara elinle dokunma. Ön panele uzanırken sağlam bir tabure kullan. Kılavuz hava filtresinin 2 haftada bir temizlenmesini istiyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Oda yine soğumuyorsa ya da çalışma gösterge lambası yanıp sönüyorsa klimayı kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına ya da servisine başvur.

## Ne zaman servis?

Kılavuz, kontrol maddelerine rağmen sorun giderilmezse **klimayı kullanmayı bırakmanı ve satıcına danışmanı** istiyor. Güvenlik bölümü de önemli bir not düşüyor: **klima soğutmadığı ya da ısıtmadığı zaman soğutucu madde sızıntısı olasılığı vardır;** sızıntı tespit edilirse çalıştırmayı durdurmak, odayı iyice havalandırmak ve derhal bayiye başvurmak gerekir.

| Durum | Kimin işi |
|---|---|
| Sıcaklık, fan hızı, gece modu, pencere-kapı, hava yolu, filtre | Senin, bu rehberdeki adımlar |
| Fan ya da iç ünitenin ısı değiştiricisinin temizliği | Mitsubishi Electric yetkili satıcısı ya da servisi |
| Çalışma gösterge lambası yanıp sönüyor | Klimayı kullanmayı bırak, yetkili satıcı ya da servis |
| Devre kesici sık sık kapanıyor ya da anormal ses var | Klimayı kullanmayı bırak, yetkili satıcı ya da servis |
| Soğutucu madde sızıntısından şüpheleniyorsun | Çalıştırmayı durdur, odayı havalandır, derhal yetkili satıcı ya da servis |

⛔ İç ünitenin içini yıkamaya, kapağını açmaya ya da dış üniteye çıkmaya çalışma. Mitsubishi Electric kılavuzu kullanıcının iç ünitenin iç kısmını hiçbir zaman yıkamaya çalışmamasını ve ünitenin kullanıcı tarafından parçalanmamasını, tamir edilmemesini istiyor.

Markadan bağımsız anlatım için [klima soğutmuyor: nedenleri](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin. LG kullanıyorsan [LG klima soğutmuyor](/blog/lg-klima-sogutmuyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Kontrol soruları, gece modu notu, filtre temizliği, servis durumları ve soğutucu madde uyarısı Mitsubishi Electric'in MSZ-AP25VG/35VG/42VG/50VG duvar tipi split klima Türkçe çalıştırma talimatlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
