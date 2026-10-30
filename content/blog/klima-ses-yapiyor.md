---
title: "Klima ses yapıyor: normal sesler ve sessiz çalıştırma"
description: "Klimadan su akışı, çatırtı, tıkırtı ya da ıslık sesi mi geliyor? Hangi ses normal, hangisi servis işi ve sessiz çalıştırma nasıl yapılır, kılavuzlardan."
slug: "klima-ses-yapiyor"
date: "2026-10-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P04 #86). origin/main'de genel "klima ses yapıyor / sesli çalışıyor / sessiz mod" yazısı yok.
#   Yakın sayfalar: klima-fan-donmuyor, klima-su-damlatiyor, klima-calismiyor, klima-ariza-kodlari (belirti/kod yazıları; ses konusu yok).
# Arama kanıtı: BOSLUK.md #86, Google otomatik tamamlama hl=tr: "klima ses" → 1., 2., 3., 6. sıra; "klima neden" → 10. sıra.
# Belgeler (curl -sL -A "Mozilla/5.0", PDF; sayfa = PDF sayfası):
#  (D) Daikin Sensira FTXF20~42E5V1B kullanım kılavuzu  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  (M) Mitsubishi Electric MSZ-AP15VG/20VG çalıştırma talimatları  https://klima.mitsubishielectric.com.tr/Guide/20230616103431_envirome_kullanma_k_lavuzu_msz-ap___15-20_.pdf  md5 316d4b0a5247a29f2406014e0deb0608
# Sayfalar: D s.12 (8.1.1-8.1.6 ses belirtileri, UYARI) · D s.8 (hava debisi, iç ünite sessiz işletimi) · M s.15 (Ses satırları) · M s.9 (fan hızı, sessiz çalışma) · M s.11 (gece modu) · M s.4 (anormal durum).
# BİLEREK YAZILMAYANLAR: forum/tamirci "ses = gaz bitti / kompresör bozuk" yorumları (belgede yok) · parça söküm ya da değişimi · dış ünite montajı kaynaklı titreşim yorumları.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Telefon (sesi kaydetmek için)"]
steps:
  - "Sesin türünü belirle: su akışı, çatırtı, tık tak, üfleme, ıslık, tıklama, el çırpma ya da mekanik ses; ne zaman çıktığını not et."
  - "Su akışı gibi bir ses duyuyorsan soğutucu akışkanın ya da yoğuşma suyunun aktığını bil; bu ses normaldir."
  - "Çatırtı ve tık tak seslerinin sıcaklık değişiminden kaynaklandığını bil; panel ve gövde genleşip daralır."
  - "Üfleme, tıslama ve ıslık seslerini mod değişimi ve buz çözme sırasında akan soğutucu akışkana bağla."
  - "Tıklama ve mırıltı seslerini valf, fan ya da kompresörün devreye girmesine ve boşaltma hortumundaki hava akımına bağla."
  - "El çırpma sesi duyuyorsan kapı ve pencere kapalıyken davlumbaz ya da aspiratör gibi bir cihaz çalışıyor mu diye bak."
  - "Daha sessiz çalışması için fan hızını düşür; Mitsubishi tipi kumandada gece modunu aç."
  - "Kılavuzda olmayan, yanık kokulu ya da sürekli artan bir ses varsa klimayı durdur, gücü kes ve servisi ara."
faq:
  - q: "Klima neden su akıyormuş gibi ses yapıyor?"
    a: "Daikin kılavuzu bu sesi ünitenin içinde akan soğutucu akışkana bağlıyor ve soğutma ya da kurutma sırasında üniteden su akıp gittiğinde de çıkabileceğini yazıyor. Mitsubishi Electric kılavuzu da su akma sesini soğutucunun ya da yoğuşma suyunun sesi olarak açıklıyor."
  - q: "Klimadan gelen çatırdama sesi normal mi?"
    a: "Her iki kılavuza göre normal. Daikin tık tak sesini ünite boyutundaki hafif genleşme ve daralmaya, Mitsubishi Electric çatırdamayı ön panelin sıcaklık değişimiyle genleşmesine ve kısalmasına bağlıyor."
  - q: "Klimayı sessiz çalıştırmak mümkün mü?"
    a: "Kılavuzlara göre iki yol var. Daikin'de hava debisini iç ünite sessiz işletimi konumuna alınca ünitenin gürültüsü azalıyor. Mitsubishi Electric'te düşük fan hızı sessiz çalışma için öneriliyor; gece modu ise dış ünitenin ses seviyesini sınırlıyor."
  - q: "Hangi ses klimanın bozulduğunu gösterir?"
    a: "İncelediğimiz kılavuzlar normal sesleri tek tek sayıyor ama arıza sesi diye bir liste vermiyor. Sayılanların dışında bir ses, yanık kokusu ya da beklenmedik bir durum varsa Daikin gücü kapatmayı ve satıcıyla görüşmeyi, Mitsubishi Electric klimayı durdurup güç fişini çekmeyi söylüyor."
images:
  coverAlt: "Duvara asılı beyaz split klima iç ünitesi, çevresinde yumuşak ses dalgası çizgileri"
  steps:
    - "Telefonunu klimaya doğru tutup sesi kaydeden beyaz eldivenli sade siluet el"
    - "Klima iç ünitesinin içinden akan suyu ve boruyu gösteren kesit çizim, yanında dalga çizgileri"
    - "Duvar panelinin ısınıp soğurken hafifçe genleşmesini gösteren ok çizimi"
    - "Soğutucu akışın yön değiştirdiği boru çizimi, yanında ince ıslık çizgileri"
    - "Klima içinde küçük bir valf ve fan, yanında kısa tık işaretleri"
    - "Kapalı pencere ve çalışan davlumbaz aspiratörü çizimi, aralarında hava akım okları"
    - "Kumandada fan hızı tuşuna basan beyaz eldivenli sade siluet el"
    - "Gücü kapatmak için duvar prizindeki fişi çeken beyaz eldivenli sade siluet el"
---

Klima çalışırken akan su gibi, çatlayan ahşap gibi ya da tık diye bir ses çıkarıyor ve "bozuldu mu?" diye endişeleniyorsun. Çoğu zaman hayır: üreticiler bu seslerin birçoğunu kullanma kılavuzunda **normal** olarak sayıyor. Bu yazıda iki üreticinin Türkçe kılavuzuna baktık: **Daikin** Sensira (sorun giderme bölümü) ve **Mitsubishi Electric** MSZ-AP. İkisinin saydığı sesler büyük ölçüde örtüşüyor; farkı ayrıca yazdık. Kendi klimanın kılavuzu başka bir şey söylüyorsa **kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Akan su, çatırtı, tık tak, üfleme, tıslama ve tıklama sesleri iki kılavuzda da normal sesler arasında. Kılavuzda olmayan ses, yanık kokusu ya da sürekli artan gürültü varsa klimayı durdur ve servise haber ver.

## Kılavuzlarda hangi ses ne anlama geliyor?

| Ses | Kılavuzdaki açıklama |
|---|---|
| Su akışı, su akma sesi | Soğutucu akışkan ya da yoğuşma suyu akıyor (Daikin s.12, Mitsubishi s.15) |
| Çatırdama, tık tak | Sıcaklık değişince panel ve gövde genleşip daralıyor (Daikin s.12, Mitsubishi s.15) |
| Üfleme, tıslama | Soğutucunun akış yönü değişiyor, örneğin soğutmadan ısıtmaya geçişte (Daikin s.12, Mitsubishi s.15) |
| Islık | Buz çözme sırasında akan soğutucu akışkan (Daikin s.12) |
| Tıklama, mekanik ses | Valf ya da elektrik parçası, fan veya kompresör devreye giriyor (Daikin s.12, Mitsubishi s.15) |
| El çırpma | Kapalı odada bir cihaz hava emiyor (Daikin s.12) |

## Adım adım: sesi tanı, sonra sessize al

**1. Sesin türünü ve zamanını not et.** Sesi tarif et: akıyor mu, çatlıyor mu, tıklıyor mu, ıslık mı çalıyor? Klimanın ilk açıldığı anda mı, mod değişince mi, durunca mı çıktığını yaz. Telefonla kısa bir kayıt almak servise anlatırken işine yarar. Bu adım kılavuzdaki tabloyu doğru satırla eşleştirmek içindir.

**2. Su akışı: normal.** Daikin, bu sesi ünitenin içinde akan **soğutucu akışkana** bağlıyor; soğutma ya da kurutma sırasında üniteden su akıp gittiğinde de çıkabiliyor. Mitsubishi Electric su akma sesini soğutucunun ya da ünitede akan **yoğuşma suyunun** sesi olarak açıklıyor. Sesle birlikte iç üniteden su damlıyorsa konu değişir; o zaman [klima su damlatıyor](/blog/klima-su-damlatiyor/) yazısına bak.

**3. Çatırdama ve tık tak: normal.** Daikin "tık tak" sesini sıcaklık değişimlerinden dolayı ünite boyutunda **hafif genleşme veya daralmaya** bağlıyor. Mitsubishi Electric çatırdamayı ön panelin sıcaklık değişimi sonucu genleşmesine ve kısalmasına bağlıyor. Klima açılıp kapanırken ve mod değişirken bu ses beklenir.

**4. Üfleme, tıslama ve ıslık: soğutucu akışı.** Daikin üfleme sesini soğutucu akışın yönü değiştiğinde, örneğin **soğutmadan ısıtmaya geçerken**, ıslık sesini ise **buz çözme** sırasında akan soğutucu akışkana bağlıyor. Mitsubishi Electric de tıslama sesini soğutucu sıvının akış yönü değişimine bağlıyor. Kış aylarında dış ünite buz çözerken bu seslerin sık duyulması bu yüzden şaşırtıcı değil. Isıtma ayarı için [klima ısıtma modu kaç derece olmalı](/blog/klima-isitma-modu-kac-derece-olmali/) yazısı yardımcı olur.

**5. Tıklama ve mırıltı: valf, fan ve kompresör.** Daikin, çalışma ya da boşta kalma sırasındaki tıklamayı **soğutucu akışkan kontrol valfleri veya elektrik parçaları** çalıştığında oluşan ses olarak tanımlıyor. Mitsubishi Electric iç üniteden gelen mekanik sesi fan ya da kompresörün açılıp kapanma sesi olarak yazıyor. "Mırıltı" sesi ise boşaltma hortumundan dışarıdaki havanın emilmesiyle, özellikle dışarıda güçlü rüzgâr varken duyulabiliyor.

**6. El çırpma sesi: kapı ve pencere.** Bu madde yalnız Daikin kılavuzunda var. Oda kapıları ve pencereleri kapalıyken davlumbaz aspiratörü ya da tahliye fanı gibi harici bir cihaz oda dışına hava emerse bu ses çıkıyor. Kılavuz **kapıları veya pencereleri açmanı ya da o cihazı kapatmanı** söylüyor.

**7. Daha sessiz çalıştır.** Daikin'de hava debisini **iç ünite sessiz işletimi** konumuna aldığında üniteden gelen gürültü azalıyor. Mitsubishi Electric kılavuzu sessiz çalışma için **düşük fan hızını** öneriyor; oda soğuduktan ya da ısındıktan sonra fan hızının düşürülmesini de tavsiye ediyor. Mitsubishi'nin **gece modu** ek olarak dış ünitenin ses seviyesini sınırlıyor ve çalışma ışığını kısıyor; kılavuza göre gece modunda güçlü çalışma kullanırsan dış ünitenin sesi artar.

**8. Listede olmayan sesi ciddiye al.** İki kılavuz da normal sesleri sayıyor; bir "arıza sesleri" listesi vermiyor. Ama ikisi de beklenmedik durum için aynı şeyi söylüyor: Daikin, **yanık kokusu** gibi beklenmedik bir şey olursa işletimi durdurup gücü kapatmanı ve satıcıyla görüşmeni istiyor; Mitsubishi Electric anormal durumda klimayı durdurup **güç fişini çekmeni** ya da şalteri kapatmanı söylüyor.

## Ne zaman servis

- Ses yukarıdaki normal sesler arasında yok ya da gün geçtikçe artıyorsa
- Ses yanık kokusuyla, duman ya da kıvılcımla birlikte geliyorsa
- Sigorta sık sık atıyorsa ya da ünite su sızdırıyorsa
- Hata kodu görüyorsan; kod için [klima arıza kodları](/blog/klima-ariza-kodlari/) yazısına bak

⛔ Sesi dinlemek, kumandadan fan hızını değiştirmek ve gücü kesmek senin; gaz, kompresör, elektrik bağlantısı ve iç parçalar yetkili servisin işidir.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
