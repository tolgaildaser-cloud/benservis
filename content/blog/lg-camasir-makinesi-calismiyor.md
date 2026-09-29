---
title: "LG çamaşır makinesi çalışmıyor"
description: "LG çamaşır makinesi çalışmıyorsa LG'nin kılavuzundaki sıra: fiş, sigorta, musluk, kapak, Güç ve Başlat/Durdur, çocuk kilidi; servis sınırı."
slug: "lg-camasir-makinesi-calismiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, 29 Eyl belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5'ler 28 Eyl yerel kopyalarıyla birebir.
# #88: web araması YALNIZ belgelerin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. ABD LG kaynağı kullanılmadı; hepsi LG Türkiye.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
# PDF'ler lg.com/tr ürün destek sayfalarındaki "Kılavuzlar" bağlantısından (gscs-b2c.lge.com, LG'nin kendi alan adı):
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları esas olarak C)
# LG Türkiye yardım kütüphanesi (www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-<id>/):
#  H1) 20154848215689 "Güç/başlat düğmesi pek iyi çalışmıyor"  md5 8ace3af9268c2dd9ca9e974e42664d64
#  H2) 20153390167896 "Düğmelere basamıyorum (Düğme kilidi kontrollü)"  md5 4e2f0ef9d3e2c14025ddff127fb14a4d
# "Cihaz çalışmıyor." satırı (C s.47-48 · A s.55 · B s.45-46), üç belgede aynı:
#   "Faaliyetsizlik nedeniyle kontrol panelinin gücü kesilmiştir. • Bu normal. Cihazı çalıştırmak için Güç düğmesine basın. · Cihaz elektrik prizine takılı değil.
#    • Kablonun çalışan prize takılmış olduğundan emin olun. · Su beslemesi kapalı. · Kontroller düzgün ayarlanmamış. • ... Kapağı kapatın ve Başlat/Durdur düğmesine basın.
#    · Kapı açık. • Kapağı kapatın ve kapının altına tamamen kapanmasını engelleyen hiçbir şeyin sıkışmadığından emin olun. · Devre kesici/sigorta attı/patladı.
#    • Ev devre kesicilerini/sigortalarını kontrol edin. ... Cihaz, özel bir devrede olmalıdır. Cihaz, elektrik geldiğinde programı kaldığı yerden devam ettirecektir.
#    · Kontrolün sıfırlanması gerekiyor. · Program ayarlandıktan sonra Başlat/Durdur düğmesine basılmadı. ... Başlat/Durdur düğmesine basılmazsa cihaz belirli bir süre içinde kapatılır.
#    · Aşırı derecede düşük su basıncı. • ... başka bir musluğu kontrol edin. · Cihaz suyu ısıtıyor veya buhar yapıyor. • ... tambur belirli döngülerde geçici olarak çalışmayı durdurabilir."
#   ⚠️ Çeviri hatası: "Su beslemesi kapalı." satırının çözümü üç belgede de "Su besleme musluğunu tamamen kapatın." yazıyor. Yazıda bu cümle ALINTILANMADI;
#      musluk adımı 1E satırındaki "Su besleme musluğu tamamen açık değil ... • Musluğu tamamen açın." (C s.44) cümlesine dayandırıldı.
# Diğer: C s.48 / B s.46 "Cihaz birkaç dakika durur ve ardından yeniden başlar" (motor koruma, normal) · C s.48 "Düğmeler düzgün çalışmıyor olabilir. Çocuk Kilidi seçeneği etkin."
#   · C s.36-37 çocuk kilidi (Güç hariç tüm düğmeler kilitlenir, CL, Güç kapatılınca sıfırlanmaz; C'de Zaman Erteleme + Kazan Temizleme 3 sn; A s.41/B s.35'te Zaman Erteleme + Öğe Ekle 3 sn)
#   · C s.6 "Cihazı çoklu priz çıkışlarına, güç panolarına veya uzatma güç kablosuna takmayın." · C s.46 PF satırı · C s.51 "Kendi kendine tamir etmek ... önerilmez."
#   · H1: dokunmatik modellerde Güç kapatma ve Başlat 1 saniye; ıslak elle dokunma tanımayı bozabilir · H2: CL, Güç dışında düğme çalışmaz, en az 3 sn iki düğme.
# BİLEREK YAZILMAYANLAR: kart/kapı kilidi/motor arızası teşhisi (belgede yok) · "sigortayı değiştir" (tesisat/elektrik müdahalesi, #31 — yalnız "kontrol et" verildi)
#   · "fişi çek, bekle" reseti (Cihaz çalışmıyor satırında yok) · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Fişin çalışan bir prize doğrudan takılı olduğundan emin ol; çoklu priz ya da uzatma kablosu kullanma."
  - "Evdeki sigortaları ve devre kesicileri kontrol et."
  - "Su musluğunu tamamen aç ve evdeki başka bir musluktan su basıncına bak."
  - "Kapağı kapat; kapıyla gövde arasında hiçbir şeyin sıkışmadığından emin ol."
  - "Güç düğmesine bas, programı seç ve Başlat/Durdur düğmesine bas."
  - "Dokunmatik panelde Başlat düğmesini 1 saniye basılı tut ve panele kuru elle dokun."
  - "Ekranda CL görünüyorsa çocuk kilidini kılavuzundaki iki düğmeye 3 saniye basarak kapat."
  - "Tambur yıkama sırasında birkaç dakika durup yeniden başlıyorsa bekle; ekranda kod varsa not et."
faq:
  - q: "LG çamaşır makinesi hiç açılmıyor, ilk neye bakmalıyım?"
    a: "LG'nin Türkçe kullanım kılavuzlarındaki 'Cihaz çalışmıyor' satırı önce elektriği soruyor: kablonun çalışan bir prize takılı olduğundan emin ol ve evdeki devre kesicileri ya da sigortaları kontrol et. LG'ye göre cihaz çoklu prize, güç panosuna ya da uzatma kablosuna takılmaz ve özel bir devrede olmalıdır."
  - q: "Makine bir süre sonra kendiliğinden kapandı, bozuldu mu?"
    a: "Büyük ihtimalle hayır. LG'nin tablosuna göre faaliyetsizlik nedeniyle kontrol panelinin gücü kesilebilir; bu normaldir, Güç düğmesine basman yeterli. Program seçip Başlat/Durdur düğmesine basmazsan da cihaz belirli bir süre içinde kapanır."
  - q: "Ekran yanıyor ama düğmeler tepki vermiyor, neden?"
    a: "LG'nin kılavuzuna göre çocuk kilidi etkinse Güç düğmesi dışındaki tüm düğmeler kilitlenir ve ekranda CL görünür. Kilit makine kapatılıp açılınca kendiliğinden kalkmaz. F4Y5EYW0W kılavuzunda Zaman Erteleme ve Kazan Temizleme, F4V5RGP2T ve F4V3VYW3WE kılavuzlarında Zaman Erteleme ve Öğe Ekle düğmelerine 3 saniye basılı tutarak kapatılır."
  - q: "Yıkama sırasında tambur duruyor, sonra yeniden dönüyor. Normal mi?"
    a: "LG'ye göre iki durumda normal. Su ayarlanan sıcaklığa ısıtılırken tambur belirli döngülerde geçici olarak durabilir. Ayrıca motorun aşırı ısınmasını önleyen koruma devreye girerse cihaz birkaç dakika durur ve ardından yeniden başlar."
  - q: "Elektrik kesildi, program ne olacak?"
    a: "LG'nin tablosuna göre cihaz, elektrik geldiğinde programı kaldığı yerden devam ettirir. Ekranda PF (güç arızası) görüyorsan LG, programı yeniden başlatmak için Başlat/Durdur düğmesine basılmasını söylüyor."
images:
  coverAlt: "Çamaşır odasında ekranı kapalı, kapağı kapalı beyaz ön yüklemeli çamaşır makinesi; üstünde açık duran kullanım kılavuzu"
---

Çamaşırları yerleştirdin, düğmeye bastın ve makine çalışmıyor: ekran hiç yanmıyor, ya da yanıyor ama program başlamıyor. LG'nin Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun kendi satırı var: **"Cihaz çalışmıyor."** Altında sayılan sebeplerin çoğu makinenin dışında ya da ön panelde: **priz, sigorta, su musluğu, kapak, Güç ve Başlat/Durdur düğmeleri.** Bu yazıda LG'nin sırasını, aynı kılavuzların çocuk kilidi bölümü ve LG Türkiye destek sayfalarıyla birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce fiş (doğrudan duvar prizine) ve evdeki sigortalar → musluk tamamen açık mı → kapak tam kapalı mı → Güç, program, Başlat/Durdur → düğmeler tepki vermiyorsa ekranda CL (çocuk kilidi) var mı. Tambur birkaç dakika durup yeniden dönüyorsa LG'ye göre bu normal. Hepsi yerinde ve makine hâlâ çalışmıyorsa → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Prize bak.** LG'nin tablosundaki sebeplerden biri: **cihaz elektrik prizine takılı değil.** Kablonun **çalışan bir prize** takılı olduğundan emin ol. LG'nin güvenlik bölümüne göre makine **çoklu prize, güç panosuna ya da uzatma kablosuna** takılmaz; fiş bunlardan birindeyse bunu not et.

**2. Sigortalara bak.** Tablodaki bir başka sebep: **devre kesici ya da sigorta atmış.** LG'nin önerisi **evdeki devre kesicileri ve sigortaları kontrol etmen.** LG ayrıca makinenin **özel bir devrede** olması gerektiğini yazıyor. İyi haber: LG'ye göre cihaz, **elektrik geldiğinde programı kaldığı yerden devam ettirir.**

**3. Musluğu tamamen aç.** Su beslemesi kapalıysa makine çalışmaz. LG'nin 1E satırındaki çözüm açık: **musluğu tamamen aç.** Aynı tabloya göre **aşırı düşük su basıncı** da makineyi durdurabilir; evdeki su basıncının yeterli olup olmadığını anlamak için **başka bir musluğu kontrol et.**

**4. Kapağı tam kapat.** LG'nin maddesi: **kapı açık.** Kapağı kapat ve **kapının tamamen kapanmasını engelleyen hiçbir şeyin sıkışmadığından** emin ol. LG'nin kullanım bölümü, kapatmadan önce tüm kıyafetlerin kazanın içinde olmasını ve kapak lastiğinden sarkmamasını istiyor.

**5. Güç, program, Başlat/Durdur.** LG'nin tablosunda üç ayrı satır aynı yere çıkıyor: panelin gücü faaliyetsizlikten kesilmiş olabilir, kontrollerin sıfırlanması gerekebilir ya da program seçildikten sonra Başlat/Durdur'a basılmamış olabilir. Çözüm her üçünde aynı: **Güç düğmesine bas, istediğin programı seç ve Başlat/Durdur düğmesine bas.** LG'ye göre Başlat/Durdur'a basılmazsa cihaz **belirli bir süre içinde kendiliğinden kapanır.**

**6. Dokunmatik panelde bir saniye bekle.** LG Türkiye'nin destek sayfasına göre dokunmatik kontrollü modellerde **Güç'ü kapatma ve Başlat düğmeleri ancak 1 saniye basılı tutulunca** çalışır; bu, kısa dokunuşlarla düğmelerin istemeden çalışmasını önlemek için. Açmak için Güç'e hafifçe basmak yeter. Aynı sayfanın uyarısı: panelin üzerinde su varken ya da **ıslak elle** dokunursan tanıma düzgün çalışmayabilir; ellerini kurulayıp tekrar dene.

**7. Çocuk kilidine bak.** LG'nin tablosundaki satır: **düğmeler düzgün çalışmıyor olabilir, çocuk kilidi etkin.** Kilit açıkken **Güç düğmesi hariç tüm düğmeler kilitlenir** ve ekranda **CL** görünür. Kilit, makineyi kapatıp açınca **sıfırlanmaz.** Kapatmak için makineyi aç ve kılavuzundaki iki düğmeye **3 saniye** basılı tut: F4Y5EYW0W kılavuzunda **Zaman Erteleme + Kazan Temizleme**, F4V5RGP2T ve F4V3VYW3WE kılavuzlarında **Zaman Erteleme + Öğe Ekle.** Senin modelinde düğmeler farklı olabilir; kendi kılavuzuna bak.

**8. Tambur durup yeniden dönüyorsa bekle.** Program başladı ama tambur ara ara duruyorsa LG iki normal durum sayıyor: su ayarlanan sıcaklığa **ısıtılırken** tambur belirli döngülerde geçici olarak durabilir; **motor koruma** devreye girerse cihaz **birkaç dakika durur ve ardından yeniden başlar.** Ekranda bir hata kodu varsa kodu not et.

## Ekranda kod varsa

Makine çalışmıyor ve ekranda bir kod yanıyorsa belirti yerine kodun anlamından başla. LG'nin tablosundaki kodların bir kısmı için ayrı rehberimiz var: su girmiyorsa [LG çamaşır makinesi IE hatası](/blog/lg-camasir-makinesi-ie-hatasi/), su boşalmıyorsa [OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/), kapak kapanmıyorsa [dE hatası](/blog/lg-camasir-makinesi-de-hatasi/), motor zorlanıyorsa [LE hatası](/blog/lg-camasir-makinesi-le-hatasi/). Tüm liste [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısında.

Ekranda **PF** görüyorsan LG'ye göre çalışma sırasında bir güç kesintisi olmuştur; programı yeniden başlatmak için **Başlat/Durdur** düğmesine bas.

## Sınır nerede biter

Fiş duvar prizinde, sigortalar yerinde, musluk açık, kapak tam kapalı, çocuk kilidi kapalı ve makine hâlâ çalışmıyorsa LG'nin tablosu kullanıcıya başka adım vermiyor. LG'nin kılavuzu açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışma**; kendi kendine tamir, cihaza daha fazla zarar verebileceği ve garantiyi geçersiz kılabileceği için önerilmez. Elektrik kablosu hasarlıysa LG'ye göre üretici, servis temsilcisi ya da yetkili kişiler tarafından değiştirilmelidir.

Sigorta makineyi her çalıştırdığında atıyorsa bu bir tesisat ya da cihaz sorunudur; markadan bağımsız anlatım için [çamaşır makinesi sigorta attırıyor](/blog/camasir-makinesi-sigorta-attiriyor/) yazısına bakabilirsin.

⛔ **Kendin-çöz sınırı burada biter.** Priz, sigorta kontrolü, musluk, kapak ve panel kullanıcıya; makinenin içi ve elektrik tesisatı uzmana aittir. Markadan bağımsız genel liste için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Ekran hiç yanıyor mu, yanıyorsa ne yazıyor (CL, PF ya da bir kod)?
2. Fiş doğrudan duvardaki prize mi takılı?
3. Evdeki sigortalarda inmiş olan var mıydı?
4. Musluk tamamen açık, kapak tam kapalı mıydı?
5. Program hiç başlamıyor mu, yoksa başlayıp yarıda mı duruyor?

Bu beşine cevabın varsa servise "makine çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
