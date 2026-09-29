---
title: "LG çamaşır makinesi kapağı açılmıyor"
description: "LG çamaşır makinesi kapağı açılmıyorsa LG'nin açıklaması: kilit simgesi, tamburdaki su, sıcaklık, elektrik kesintisi. Evde güvenli adımlar."
slug: "lg-camasir-makinesi-kapagi-acilmiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, 29 Eyl belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; PDF md5'leri 28 Eyl yerel kopyalarıyla birebir.
# #88: web araması YALNIZ belgelerin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. ABD LG kaynağı kullanılmadı; hepsi LG Türkiye.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları esas olarak C)
# LG TR yardım kütüphanesi (www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-<id>/; dinamik HTML, md5 bu koşudaki indirme):
#  H7) 20154774032659 "[LG Önden Yüklemeli Çamaşır Makinesi] [İmza] Kapı Açılmıyor"  md5 b67d4650dbd637e7bda41ed27f93a356 ("Bu kılavuz tüm modeller için oluşturulmuştur")
#  H8) 20153390360772 "[Ankastre modeller] Kapak program bitiminde hemen açılmıyor."  md5 60f3ccb063fa51110ab4d15f29933b46
#  H2) 20153390167896 "Düğmelere basamıyorum (Düğme kilidi kontrollü)"  md5 4e2f0ef9d3e2c14025ddff127fb14a4d
# "Kapak açılmıyor." satırı (C s.48 · A s.56 · B s.46), üç belgede aynı:
#   "Cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz. • Bu normaldir. [kilit] simgesi söndükten sonra kapağı güvenli şekilde açabilirsiniz."
#   (simge PDF metninde "H"/"H/Ã" olarak bozuk çıkıyor; C s.23 "Program başladığında ve kapak kitlendiğinde [simge] yanar." → yazıda "kapı kilidi simgesi" dendi)
# C s.21 NOT: "Çamaşır makinesi bir yıkama programına başladığında ve tamburda su olduğunda, su basmasını önlemek için makine suyu tamamen boşaltana kadar kapı açılmaz."
#   (yıkama programını duraklatsanız ya da çamaşır makinesini kapatsanız da) · A s.40 NOT: "Güvenlik için tambur içindeki su seviyesi veya sıcaklığı yüksekse kapı kilitli kalır."
#   · A s.40 Öğe Ekle (A/B'de): "Kendiliğinden kilidi açıldıktan sonra kapıyı açın" · C s.35 Sadece Sıkma: Güç → program seçme, deterjan ekleme → Sıkma düğmesi → Başlat/Durdur
#   · C s.36 "Çamaşır yıkama programı seçerseniz sıkma döngüsü seçemezsiniz. Bu durumda makineyi kapatıp tekrar açmak için Güç düğmesine iki kez basın."
#   · C s.22 Başlat/Durdur "Yıkama programının geçici olarak durdurulması gerekiyorsa bu düğmeye basın." · C s.36-37 çocuk kilidi (Güç hariç düğmeler kilitli; CL)
#   · C s.42 tahliye pompası filtresi bölümü: "Kapıyı acil durumlarda açın veya acil su tahliyesi işlemini gerçekleştirin." (yordam OE sayfasında; burada iç link)
#   · C s.8 "Çalışırken asla içine doğru uzanmayın. Tambur tamamen durana kadar bekleyin." · "Yüksek sıcaklık programı sırasında kapıya dokunmayın."
# H7: kapı yıkama sırasında kilitli; duraklatılsa bile tamburda su olduğu sürece kilitli; elektrik kesintisi ya da fiş çekilmesinde kilitli kalır → güç kablosunu bağla, makineyi aç;
#   açıldıktan sonra kilitliyse tambur yüksek sıcaklık döngüsünden sıcak olabilir, soğuyana kadar bekle; çalışırken duraklat, kilit açılma sesini duyunca aç;
#   su varsa iptal edip Yalnızca Sıkma ile boşalt; kilit açılınca çamaşırı çıkar; sürerse LG teknisyeni. (H7'deki dokunmatik menü adımları İmza serisine özgü → yazıya alınmadı.)
# H8: bazı ankastre modellerde kapak program bitiminden yaklaşık 1-2 dakika sonra açılır; ortam sıcaklığı yüksekse daha geç; müşteri güvenliği için, hata değil.
# BİLEREK YAZILMAYANLAR: kapı kilidi/switch/kart arızası teşhisi · kapağı zorlayarak ya da aletle açma · acil açma ipi/mandal (bu koşudaki belgelerde yok) · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-kapagi-acilmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (sıkma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekrandaki kapı kilidi simgesine bak; yanıyorsa simge sönene kadar bekle."
  - "Program sürüyorsa Başlat/Durdur düğmesine basarak durdur ve kilidin açılma sesini bekle."
  - "Düğmeler tepki vermiyorsa ekranda CL var mı bak ve çocuk kilidini kapat."
  - "Yüksek sıcaklıkta yıkadıysan tamburun soğuması için bir süre bekle."
  - "Elektrik kesildiyse ya da fiş çekildiyse fişi tak ve makineyi Güç düğmesiyle aç."
  - "Tamburda su varsa Güç düğmesine iki kez basıp makineyi yeniden aç, Sıkma düğmesine ve ardından Başlat/Durdur'a bas."
  - "Sıkma bitip kilit simgesi sönünce kapağı aç ve çamaşırı çıkar."
faq:
  - q: "LG çamaşır makinesinin kapağı neden açılmıyor?"
    a: "LG'nin Türkçe kullanım kılavuzlarına göre cihaz çalışmaya başladıktan sonra kapı güvenlik nedeniyle açılamaz; bu normaldir ve kapı kilidi simgesi söndükten sonra kapak güvenle açılır. Tamburda su varken, program duraklatılsa ya da makine kapatılsa bile kapı su tamamen boşalana kadar açılmaz. Tambur içindeki sıcaklık yüksekse de kapı kilitli kalır."
  - q: "Program bitti ama kapak hemen açılmıyor, arıza mı?"
    a: "LG Türkiye'nin destek sayfasına göre bazı ankastre modellerde kapak, yıkama bittikten yaklaşık 1-2 dakika sonra açılır; makinenin etrafındaki sıcaklık yüksekse daha geç açılabilir. LG bunun müşteri güvenliği için olduğunu ve üründe bir hata olmadığını yazıyor."
  - q: "Elektrik kesildi, çamaşır içeride kaldı. Kapağı nasıl açarım?"
    a: "LG Türkiye'nin destek sayfasına göre elektrik kesintisinde ya da yıkama sırasında fiş çekildiğinde kapı kilitli kalır. Önerisi: güç kablosunu bağla ve makineyi aç. Açıldıktan sonra kapak hâlâ kilitliyse tambur yüksek sıcaklıktan dolayı sıcak olabilir; soğuması için bir süre bekle. Tamburda su varsa önce suyun boşaltılması gerekir."
  - q: "Yıkama başladıktan sonra çamaşır eklemek istiyorum, ne yapmalıyım?"
    a: "LG'nin F4V5RGP2T ve F4V3VYW3WE kılavuzlarında bunun için Öğe Ekle seçeneği var: program başladıktan sonra Öğe Ekle düğmesine bas, kapının kilidi kendiliğinden açıldıktan sonra kapağı aç. LG'ye göre tambur içindeki su seviyesi ya da sıcaklık yüksekse kapı kilitli kalır ve o sırada kıyafet eklenemez. Senin modelinde bu seçenek olmayabilir; kendi kılavuzuna bak."
images:
  coverAlt: "Kapağı kapalı ön yüklemeli çamaşır makinesinin kontrol panelinde yanan kapı kilidi simgesi; camın ardında ıslak çamaşırlar"
---

Program bitti ya da yarıda kaldı, çamaşırlar içeride ve kapak açılmıyor. LG'nin Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun kendi satırı var: **"Kapak açılmıyor."** LG'nin açıklaması: **"Cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz."** Yani kilit çoğu zaman bir arıza değil, bir güvenlik önlemi: tamburda su varken, tambur sıcakken ya da elektrik kesildiğinde kapı kilitli kalıyor. Bu yazıda kilidin ne zaman ve nasıl kendiliğinden açıldığını LG'nin kılavuzu ve Türkiye destek sayfalarıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kapı kilidi simgesi yanıyorsa sönmesini bekle → program sürüyorsa Başlat/Durdur ile durdur → düğmeler tepki vermiyorsa CL (çocuk kilidi) kapat → sıcak yıkamadan sonra tambur soğusun → elektrik kesildiyse fişi tak, makineyi aç → tamburda su varsa Sadece Sıkma ile boşalt. Su boşalmıyorsa ya da kapı yine açılmıyorsa → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Kilit simgesine bak.** LG'nin kılavuzuna göre **program başladığında ve kapak kilitlendiğinde** ekranda kapı kilidi simgesi yanar. Tablodaki çözüm: **bu normaldir, simge söndükten sonra kapağı güvenli şekilde açabilirsin.** LG Türkiye'nin destek sayfasına göre bazı **ankastre** modellerde kapak program bitiminden **yaklaşık 1-2 dakika** sonra açılır; makinenin etrafı sıcaksa biraz daha geç açılabilir.

**2. Programı durdur, kilidin açılmasını bekle.** Program hâlâ sürüyorsa kılavuza göre **Başlat/Durdur** düğmesi yıkamayı geçici olarak durdurmak için kullanılır. LG Türkiye'nin destek sayfasına göre makineyi duraklattıktan sonra **kapı kilidinin açılma sesini duyunca** kapağı açabilirsin. LG'nin güvenlik uyarısı: makine çalışırken **asla içine uzanma, tambur tamamen durana kadar bekle.**

**3. Çocuk kilidine bak.** Başlat/Durdur'a basınca hiçbir şey olmuyorsa ekranda **CL** var mı bak. LG'ye göre çocuk kilidi açıkken **Güç düğmesi hariç tüm düğmeler kilitlenir.** Kapatmak için kılavuzundaki iki düğmeye **3 saniye** basılı tut: F4Y5EYW0W'de **Zaman Erteleme + Kazan Temizleme**, F4V5RGP2T ve F4V3VYW3WE'de **Zaman Erteleme + Öğe Ekle.** Senin modelinde düğmeler farklı olabilir; kendi kılavuzuna bak.

**4. Tamburun soğumasını bekle.** LG'nin kılavuzuna göre **tambur içindeki sıcaklık yüksekse kapı kilitli kalır.** LG Türkiye'nin destek sayfası da aynı şeyi söylüyor: yüksek sıcaklık programından sonra tambur hâlâ çok sıcaksa kapak **tambur soğuduktan sonra** açılır; sıcaklığın düşmesi için bir süre bekle. LG ayrıca **yüksek sıcaklık programı sırasında kapıya dokunulmamasını** istiyor.

**5. Elektrik kesildiyse makineyi aç.** LG Türkiye'nin destek sayfasına göre **elektrik kesintisinde** ya da yıkama sırasında **fiş çekildiğinde** kapı kilitli kalır. Önerisi: **güç kablosunu bağla ve çamaşır makinesini aç.** Aynı sayfaya göre makine açıldıktan sonra kapak kilitli kalırsa tambur yüksek sıcaklık döngüsünden hâlâ sıcak olabilir; 4. adımdaki gibi soğumasını bekle.

**6. Tamburda su varsa Sadece Sıkma çalıştır.** LG'nin kılavuzundaki kural açık: tamburda su varken, **programı duraklatsan ya da makineyi kapatsan da** kapı, su basmasını önlemek için **makine suyu tamamen boşaltana kadar açılmaz.** LG Türkiye'nin destek sayfası bu durumda programı iptal edip **Yalnızca Sıkma** ile suyu boşaltmayı öneriyor. Kılavuzdaki sıra: **Güç** düğmesine bas, program seçme, **Sıkma** düğmesine bas ve **Başlat/Durdur** ile başlat. LG'nin notu: bir yıkama programı seçiliyse sıkma seçilemez; bu durumda makineyi kapatıp açmak için **Güç düğmesine iki kez** bas.

**7. Kilit sönünce kapağı aç.** Sıkma bitip su boşaldığında ve kilit simgesi söndüğünde kapağı aç ve çamaşırı çıkar. Kılavuza göre çamaşırları alırken kapak lastiğine kaçmış **küçük nesneleri** de kontrol et.

## Su boşalmıyorsa

Sadece Sıkma çalıştı ama su gitmiyor, ya da ekranda **OE** çıkıyorsa kilidin sebebi tamburdaki sudur ve su boşalmadıkça kapı açılmaz. LG'nin kılavuzu bu durum için tahliye pompası filtresinden **acil su tahliyesini** tarif ediyor; yordamın tamamı [LG çamaşır makinesi OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/) yazısında adım adım var. Suyun sıcak olabileceğini unutma; LG, filtreyi açmadan önce **suyun soğumasının beklenmesini** istiyor.

Kapak açılıyor ama **kapanmıyorsa** ya da ekranda **dE** görüyorsan bu ayrı bir konu: [LG çamaşır makinesi dE hatası](/blog/lg-camasir-makinesi-de-hatasi/) yazısına bak.

## Sınır nerede biter

Beklemek, programı durdurmak, çocuk kilidini kapatmak ve suyu sıkma programıyla boşaltmak kullanıcıya aittir; kapı kilidinin kendisi değildir. LG'nin uyarısı açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışma.** LG Türkiye'nin destek sayfasına göre bu adımlardan sonra sorun sürüyorsa profesyonel bir inceleme gerekebilir; LG teknisyeninden servis ziyareti iste.

⛔ **Kendin-çöz sınırı burada biter.** Kilit simgesi söndü, tamburda su yok, tambur soğudu ve kapak hâlâ açılmıyor: kapağı zorlama, yetkili LG servisine başvur. Markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına, diğer kodlar için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda kapı kilidi simgesi hâlâ yanıyor mu?
2. Tamburda su görünüyor mu?
3. Son program yüksek sıcaklıkta mıydı, üzerinden ne kadar geçti?
4. Elektrik kesildi mi, fiş çekildi mi?
5. Ekranda CL, OE ya da başka bir kod var mı?

Bu beşine cevabın varsa servise "kapak açılmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
