---
title: "Samsung klima su damlatıyor: ne yapılır?"
description: "Samsung klimadan su damlıyorsa Samsung'un sırası: suyun nereden geldiğini ayırt et, tahliye hortumuna bak, sürerse kullanmayı bırak ve servise başvur."
slug: "samsung-klima-su-damlatiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF md5'leri 28 Eyl kopyalarıyla birebir aynı. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (PDF sayfası = basılı sayfa).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  F) Samsung TR "Samsung Klima Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-air-conditioner/  md5 36a4765704f8dc63766879d1c8ea93c7 (2026-09-30, HTML dinamik)
#      "S. Klimam neden su sızdırıyor?" → "Sızıntıların çoğu tıkanmış veya bükülmüş bir tahliye hortumundan ya da yanlış eğimden kaynaklanır. Hortumun temiz ve doğru şekilde yönlendirilmiş olduğundan emin olun. Su hâlâ damlıyorsa üniteyi kullanmayı bırakın ve hasarı önlemek için profesyonel inceleme/onarım planlayın."
#  M1) Samsung TR kılavuz AR9500T WindFree, 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.35 "Dış ünitedeki boru bağlantılarından su damlıyor." → "Ortam sıcaklığı veya nem önemli ölçüde değiştiğinde yoğuşma oluşabilir. Bu normaldir." / "Dış üniteden duman geliyor." → "Kışın bu muhtemelen Buz Çözme işlevi açıkken dış ısı eşanjöründen gelen buhardır." / koku satırı: "Tahliye hatlarının temiz olup olmadığını kontrol edin. Bunları düzenli olarak temizleyin."
#      s.16 "Klima uzun süre çok nemli bir ortamda Soğut modunda çalışırsa yoğuşma meydana gelebilir." (Soğut çalışma aralığı: iç ortam nemi "Bağıl nem %80 veya daha az")
#      s.6 "Gider hortumunu suyun düzgün boşalabileceği şekilde takın." / "Bu yapılmazsa şu basmasına ve maddi zarara neden olabilir." / "Dış ünite tarafından ısıtma işlemi sırasında üretilen su taşabilir ve maddi hasara neden olabilir."
#      s.7 "Cihaz su içinde kalırsa, lütfen size en yakın servis merkezine başvurun."
#  M2) Samsung TR kılavuz AR09/12JSFSCWK (AR3050), 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.28 "Dış ünitenin boru bağlantılarından su damlaları." → "Ortam sıcaklığı aşırı değiştiğinde yoğuşma oluşabilir. Bu normal bir işlemdir." / "Dış ünitede buhar oluşuyor." → buz çözme buharı
#      s.13 "Klima uzun süre çok nemli bir ortamda Soğutma modunda çalıştırılıyorsa, yoğuşma oluşabilir."
#      s.5 "Tahliye hortumunu, suyun düzgün bir şekilde tahliye edilebileceği biçimde kurun." / "Aksi takdirde su taşabilir ve maddi zarar meydana gelebilir."
# NOT: Samsung TR'nin "Samsung Klimamdan su damlaları düştüğünde ne yapabilirim?" sayfası (arama sonucunda görünen URL) curl ile indirilemedi (destek ana sayfasına yönleniyor / 404); bu sayfadan HİÇBİR cümle kullanılmadı.
# BİLEREK YAZILMAYANLAR: tahliye hortumunu sökme, üfleme, içine tel sokma; iç ünitenin eğimini düzeltme (montaj/servis işi, #31); "gaz eksikliği damlatır" gibi belgede olmayan teşhis; filtre temizliğinin damlamayı çözdüğü iddiası (Samsung'un su sızıntısı cevabında filtre geçmiyor); otomatik temizleme önerisi (kaynağı indirilemedi).
# Alıntı denetim tablosu: samsung-klima-su-damlatiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez ya da havlu"]
steps:
  - "Suyun iç üniteden mi, dış ünitenin boru bağlantılarından mı geldiğine bak; dış ünitenin boru bağlantılarındaki damlalar yoğuşmadır ve normaldir."
  - "Tahliye hortumunun güvenle görebildiğin kısmında bükülme ya da ezilme olup olmadığını kontrol et."
  - "Hortumun ucunun tıkalı olmadığını ve suyun düzgün boşalabileceği şekilde yönlendiğini, yalnız erişebildiğin yerden kontrol et."
  - "İç üniteden su damlamaya devam ediyorsa klimayı Güç düğmesiyle kapat ve kullanmayı bırak."
  - "Model numarası ve belirtiyle Samsung yetkili servisinden inceleme iste."
faq:
  - q: "Samsung klimadan neden su damlar?"
    a: "Samsung Türkiye'nin klima SSS sayfasına göre sızıntıların çoğu tıkanmış ya da bükülmüş bir tahliye hortumundan veya yanlış eğimden kaynaklanır. Samsung kılavuzları ayrıca klima uzun süre çok nemli bir ortamda Soğut modunda çalışırsa yoğuşma meydana gelebileceğini yazıyor."
  - q: "Dış ünitenin borularından su damlıyor, sorun mu?"
    a: "Hayır. Samsung kılavuzuna göre ortam sıcaklığı ya da nem önemli ölçüde değiştiğinde dış ünitenin boru bağlantılarında yoğuşma oluşabilir; bu normaldir. Kışın dış üniteden çıkan buhar da buz çözme işlevi sırasında dış ısı eşanjöründen gelir."
  - q: "Hortumu kontrol ettim, hâlâ damlıyor. Kullanmaya devam edebilir miyim?"
    a: "Samsung'un önerisi hayır: su hâlâ damlıyorsa üniteyi kullanmayı bırakmanı ve hasarı önlemek için profesyonel inceleme ya da onarım planlamanı istiyor. Samsung yetkili servisine başvur."
  - q: "Tahliye hortumunu kendim söküp temizleyebilir miyim?"
    a: "Bu rehber bunu önermiyor. Samsung kılavuzları tahliye hortumunun kurulum sırasında suyun düzgün boşalabileceği şekilde takılmasını istiyor; hortumun sökülüp yeniden bağlanması montaj işidir. Görebildiğin kısımdaki bükülme ve tıkanıklık dışındaki kontrolleri Samsung yetkili servisine bırak."
images:
  coverAlt: "Duvardaki beyaz split klimanın iç ünitesinin altında parkede birkaç su damlası ve yanında katlanmış bir havlu"
---

Klimanın altında damlalar ya da duvarda ıslaklık fark ettin. Samsung Türkiye'nin klima SSS sayfası bu belirtinin en yaygın nedenini açıkça yazıyor: **"Sızıntıların çoğu tıkanmış veya bükülmüş bir tahliye hortumundan ya da yanlış eğimden kaynaklanır."** Samsung'un kullanım kılavuzları da damlamanın normal sayıldığı durumları ayrıca sayıyor. Bu yazıda önce hangi damlanın normal olduğunu, sonra evde güvenle kontrol edebileceklerini ve servis sınırını Samsung'un kendi belgelerinden anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce suyun kaynağını ayırt et: dış ünitenin boru bağlantılarındaki damlalar yoğuşmadır, normaldir. İç üniteden damlıyorsa tahliye hortumunun görebildiğin kısmında bükülme ya da tıkanıklık var mı bak. Su hâlâ damlıyorsa klimayı kapat, kullanmayı bırak → Samsung yetkili servisi.

## Normal olan damlama hangisi?

Samsung kılavuzları şu durumları normal çalışma olarak sayıyor:

| Gördüğün | Samsung'un açıklaması |
|---|---|
| Dış ünitenin boru bağlantılarından su damlıyor | Ortam sıcaklığı ya da nem önemli ölçüde değiştiğinde yoğuşma oluşabilir; bu normaldir |
| Kışın dış üniteden buhar ya da duman gibi bir görüntü | Buz çözme işlevi açıkken dış ısı eşanjöründen gelen buhar |

İç ünitenin kendisinden damlama bu listede yok. Samsung'un SSS sayfası bunun en yaygın nedenlerini **tıkanmış ya da bükülmüş tahliye hortumu** ve **yanlış eğim** olarak sayıyor. Kılavuzlar ayrıca klima uzun süre çok nemli bir ortamda Soğut modunda çalışırsa yoğuşma meydana gelebileceğini yazıyor; Soğut modu için iç ortam nemi sınırı yüzde 80 bağıl nem.

## Adım adım: evde denenecekler

**1. Kaynağı ayırt et.** Suyun iç üniteden mi, dış ünitenin boru bağlantılarından mı geldiğine bak; dış ünitenin boru bağlantılarındaki damlalar yoğuşmadır ve normaldir. Yukarıdaki tabloya bak.

**2. Hortumda bükülme.** Tahliye hortumunun güvenle görebildiğin kısmında bükülme ya da ezilme olup olmadığını kontrol et. Samsung'a göre bükülmüş hortum sızıntıların en yaygın nedenlerinden biri.

**3. Hortumun ucu.** Hortumun ucunun tıkalı olmadığını ve suyun düzgün boşalabileceği şekilde yönlendiğini, yalnız erişebildiğin yerden kontrol et. Samsung hortumun temiz ve doğru şekilde yönlendirilmiş olduğundan emin olmanı istiyor. Hortum dış cephede ya da ulaşılamayan bir yerdeyse bu kontrolü servise bırak; pencereden sarkma, dış üniteye tırmanma.

**4. Kullanmayı bırak.** İç üniteden su damlamaya devam ediyorsa klimayı Güç düğmesiyle kapat ve kullanmayı bırak. Samsung'un SSS sayfası su hâlâ damlıyorsa üniteyi kullanmayı bırakmanı istiyor.

**5. Servise başvur.** Model numarası ve belirtiyle Samsung yetkili servisinden inceleme iste. Samsung hasarı önlemek için profesyonel inceleme ya da onarım planlanmasını öneriyor.

## Ne zaman servis?

Samsung'un sınırı net: hortumun temiz ve doğru yönlendirildiğinden emin olduktan sonra su hâlâ damlıyorsa üniteyi kullanmayı bırak ve profesyonel inceleme planla. Samsung kılavuzları tahliye hortumunun suyun düzgün boşalabileceği şekilde takılmamasının su basmasına ve maddi zarara yol açabileceğini yazıyor.

| Durum | Kimin işi |
|---|---|
| Dış ünitenin boru bağlantılarında damla, kışın dış üniteden buhar | Kimsenin; normal çalışma |
| Kaynağı ayırt etmek, hortumun görünen kısmına bakmak, klimayı kapatmak | Senin, bu rehberdeki adımlar |
| Hortum kontrolünden sonra iç üniteden damlama sürüyor | Samsung yetkili servisi |
| Hortumun eğimi, yeniden bağlanması, iç ünitenin konumu | Montaj işi, yetkili servis |
| Cihaz su içinde kaldı | Kılavuza göre en yakın servis merkezi |

⛔ Tahliye hortumunu sökmeye, içine tel sokmaya, üflemeye ya da iç ünitenin eğimini değiştirmeye çalışma. Bunlar montaj ve servis işidir.

Markadan bağımsız anlatım için [klima su damlatıyor](/blog/klima-su-damlatiyor/) yazısına bakabilirsin. Soğutma da zayıfladıysa [Samsung klima soğutmuyor](/blog/samsung-klima-sogutmuyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Sızıntı nedenleri, hortum kontrolü ve kullanmayı bırakma talimatı Samsung Türkiye'nin klima SSS sayfasından; normal yoğuşma, nemli ortam notu, tahliye hortumu uyarısı ve su içinde kalma uyarısı Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
