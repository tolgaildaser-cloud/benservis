---
title: "Beko çamaşır makinesi çalışmıyor"
description: "Beko çamaşır makinesi çalışmıyor ya da ekranı hiç yanmıyorsa Beko kılavuzundaki sıra: fiş, sigorta, elektrik, açma tuşu, kapak, su ve çocuk kilidi."
slug: "beko-camasir-makinesi-calismiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Beko çamaşır belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb  (sayfa atıfları esas olarak bu belgeye göre)
#  (B) D4 9122 E  http://download.beko.com/Download.UsageManualsBeko/d4-9122-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820522537.pdf  37 s.  md5 89ab7801f624fc4f2a85f358033baa58
#  (C) D4 8102 E  http://download.beko.com/Download.UsageManualsBeko/32636_2820522712.pdf  37 s.  md5 eea66a69dc2384321a6f7227d0fe81f2
#  (D) D3 5061 B / D3 5062 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f  (bu belgede "Makine çalışmıyor" satırı YOK)
# Sorun giderme satırları (A s.35, B s.34, C s.34):
#   "Makine çalışmıyor. Ekranda hiçbir şey görünmüyor. Fiş prize takılı olmayabilir. >>> Fişi kontrol edip prize takın. Sigorta arızalı olabilir. >>> Sigortayı kontrol edin ve gerekirse
#    ehliyetli bir elektrikçiye değiştirtin. Elektrik kesik olabilir. >>> Elektriği kontrol edin. Açma / Kapama tuşuna basılmamış olabilir. >>> Açma / Kapama tuşuna basın."
#   "Programı seçtikten ve Başla / Bekle / İptal tuşuna basıldığında makine çalışmıyor. Yükleme kapağı kapanmamış olabilir. >>> Yükleme kapağını kapatın."
#   "Durulama sembolü yanıp sönüyor. ... Su kesik olabilir. >>> Suyun kesik olmadığından emin olduktan sonra Başla / Beklet / İptal tuşuna basarak makinenizi tekrar çalıştırabilirsiniz."
#   A s.32 / B s.29 / C s.29 / D s.28: "Program başlatılamıyor veya program seçimi yapılamıyor. • Altyapı kaynaklı problemler (şebeke voltajı, su basıncı vb.) nedeniyle makine kendini
#    korumaya almış olabilir. >>> Başla / Bekle / İptal tuşuna 3 saniye süreyle basarak makineyi fabrika ayarlarına getirin." · "Makine, program başladıktan bir süre sonra durdu. • Voltaj düşüklüğü ... kaldığı yerden devam eder."
#   Kapanış A s.35: "Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
# Diğer: A s.15 kapağı kilitlenme sesini duyana kadar iterek kapa · A s.26-27 çocuk kilidi (A'da 2. ve 4. yardımcı fonksiyon tuşu 3 sn; "Con"/"COFF"; program sonunda çıkarılmazsa yeni program seçimine izin vermez)
#   · A s.27 enerji tasarrufu modu (yaklaşık 2 dk sonra ışıklar kısılır, ekranlı üründe ekran kapanır; düğmeyi çevir ya da tuşa dokun) · A s.12 uzatma kablosu / çoklu priz yok · A s.28 musluğu tamamen aç.
# BİLEREK YAZILMAYANLAR: kart, kapak kilidi, kablo teşhisi (belgede yok) · sigortayı kullanıcının değiştirmesi (Beko "ehliyetli bir elektrikçiye" diyor) · çocuk kilidi tuşu yalnız A için verildi.
# Alıntı denetim tablosu: beko-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Fişin prize takılı olduğunu kontrol et; uzatma kablosu ya da çoklu priz varsa makineyi doğrudan prize tak."
  - "Evdeki sigortayı ve elektriğin gelip gelmediğini kontrol et."
  - "Açma / Kapama tuşuna bas; ekran sönükse program düğmesini çevir ya da bir tuşa dokun."
  - "Yükleme kapağını kilitlenme sesini duyana kadar iterek kapat."
  - "Durulama sembolü yanıp sönüyorsa musluğun açık ve suyun kesik olmadığını kontrol et, sonra Başla / Bekle / İptal tuşuna bas."
  - "Tuşlar tepki vermiyorsa çocuk kilidinin açık olup olmadığına bak ve kılavuzundaki tuşlarla kapat."
  - "Program yine başlamıyorsa Başla / Bekle / İptal tuşuna 3 saniye basarak makineyi fabrika ayarlarına getir ve programı yeniden seç."
faq:
  - q: "Beko çamaşır makinemin ekranında hiçbir şey görünmüyor, ne yapmalıyım?"
    a: "Beko'nun kullanma kılavuzlarındaki 'Makine çalışmıyor. Ekranda hiçbir şey görünmüyor.' satırı dört sebep sayıyor: fiş prize takılı olmayabilir, sigorta arızalı olabilir, elektrik kesik olabilir ya da Açma / Kapama tuşuna basılmamış olabilir. Önce bu dördünü kontrol et. Beko'ya göre sigorta arızalıysa değişimini ehliyetli bir elektrikçi yapmalı."
  - q: "Programı seçip Başla'ya bastım ama makine çalışmıyor, neden?"
    a: "Beko'nun tablosuna göre bu durumda yükleme kapağı kapanmamış olabilir; çözüm kapağı kapatmak. Beko kapağın kilitlenme sesini duyana kadar iterek kapatılmasını ve giysilerin kapağa sıkışmamasına dikkat edilmesini istiyor."
  - q: "Ekran bir süre sonra kararıyor, makine bozuk mu?"
    a: "Hayır. Beko'nun D4 9101 E kılavuzuna göre makine açıldıktan sonra program başlatılmaz ya da program bittikten sonra yaklaşık 2 dakika işlem yapılmazsa enerji tasarrufu moduna geçer; ışıklar kısılır, ekranlı üründe ekran tamamen kapanır. Program düğmesini çevirdiğinde ya da bir tuşa dokunduğunda ışıklar ve ekran eski hâline döner. Beko bu sırada seçimlerin değişebileceğini, programı başlatmadan önce kontrol edilmesini yazıyor."
  - q: "Makine program başladıktan bir süre sonra durdu, ne oldu?"
    a: "Beko'nun tablosuna göre voltaj düşüklüğü nedeniyle makine bir süre durmuş olabilir; voltaj normal seviyeye geldiğinde makine kaldığı yerden devam eder."
images:
  coverAlt: "Kapağı kapalı ön yüklemeli çamaşır makinesinin önünde prizdeki fişi kontrol eden bir el; kontrol panelinin ışıkları sönük"
---

Programı seçtin, tuşa bastın ve hiçbir şey olmuyor; belki ekran bile yanmıyor. Beko'nun çamaşır makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bunun iki ayrı satırı var: **"Makine çalışmıyor. Ekranda hiçbir şey görünmüyor."** ve **"Programı seçtikten ve Başla / Bekle / İptal tuşuna basıldığında makine çalışmıyor."** Beko'nun bu satırlarda saydığı sebeplerin hepsi evde kontrol edilebiliyor: fiş, sigorta, elektrik, açma tuşu ve kapak. Bu yazıda Beko'nun sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran tamamen karanlıksa fiş, sigorta, elektrik ve Açma / Kapama tuşu. Ekran yanıyor ama program başlamıyorsa kapak. Durulama sembolü yanıp sönüyorsa su. Tuşlar tepki vermiyorsa çocuk kilidi. Hiçbiri değilse Başla / Bekle / İptal tuşuna 3 saniye bas.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Beko'nun tablosundaki ilk sebep: **fiş prize takılı olmayabilir.** Çözüm: **fişi kontrol edip prize tak.** Beko'nun kurulum bölümüne göre makine **uzatma kabloları ya da çoklu prizlerle** bağlanmamalı; öyle bağlıysa fişi doğrudan prize tak.

**2. Sigortayı ve elektriği kontrol et.** Tablonun sonraki iki sebebi: **sigorta arızalı olabilir** ve **elektrik kesik olabilir.** Evdeki sigortaya ve elektriğin gelip gelmediğine bak. Beko'nun uyarısı: sigorta arızalıysa **ehliyetli bir elektrikçiye değiştirt.**

**3. Açma / Kapama tuşuna bas.** Dördüncü sebep: **Açma / Kapama tuşuna basılmamış olabilir.** Beko'nun D4 9101 E kılavuzuna göre makine açıldıktan sonra işlem yapılmazsa yaklaşık 2 dakika içinde **enerji tasarrufu moduna** geçiyor; ışıklar kısılıyor, ekranlı üründe ekran tamamen kapanıyor. Bu durumda **program düğmesini çevirmen ya da herhangi bir tuşa dokunman** ışıkları ve ekranı geri getiriyor. Beko'nun notu: bu sırada seçimler değişebilir, programı başlatmadan önce kontrol et.

**4. Kapağı iyice kapat.** Ekran yanıyor ama Başla / Bekle / İptal tuşuna bastığında makine çalışmıyorsa Beko'nun tablosundaki sebep: **yükleme kapağı kapanmamış olabilir.** Beko'nun tarifi: kapağı **kilitlenme sesini duyana kadar iterek** kapat ve **giysilerin kapağa sıkışmamasına** dikkat et.

**5. Durulama sembolüne bak.** Beko'nun tablosunda ayrı bir satır var: program gösterge sembolleri arasında **Durulama sembolü yanıp sönüyorsa** (modele bağlı olarak **su kesik sembolü** de yanabilir) **su kesik olabilir.** Musluğun açık olduğunu ve evde suyun geldiğini kontrol et. Beko'ya göre suyun kesik olmadığından emin olduktan sonra **Başla / Bekle / İptal tuşuna basarak** makineyi yeniden çalıştırabilirsin.

**6. Çocuk kilidini kontrol et.** Beko'nun kılavuzuna göre çocuk kilidi devam eden programda değişiklik yapılmasını engelliyor ve program bittikten sonra çocuk kilidinden çıkarılmayan makine **yeni bir program seçimine izin vermiyor.** D4 9101 E'de kilit **2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye** basılarak açılıp kapanıyor; açıkken tuşa basınca ekranda **"Con"**, kapatınca **"COFF"** görünüyor. Başka modellerde tuşlar farklı olabilir; kendi kılavuzundaki "Çocuk kilidi" bölümüne bak.

**7. Makineyi fabrika ayarlarına getir.** Beko'nun tablosundaki **"Program başlatılamıyor veya program seçimi yapılamıyor"** satırına göre makine, **altyapı kaynaklı problemler (şebeke voltajı, su basıncı vb.) nedeniyle kendini korumaya almış olabilir.** Çözüm: **Başla / Bekle / İptal tuşuna 3 saniye süreyle basarak** makineyi fabrika ayarlarına getir, sonra programı yeniden seç.

## Arıza sanılan durumlar

- **Program başladıktan sonra makine durdu:** Beko'nun tablosuna göre **voltaj düşüklüğü** nedeniyle makine bir süre durmuş olabilir; voltaj normale döndüğünde **kaldığı yerden devam eder.**
- **Ekran kısıldı ya da kapandı:** Enerji tasarrufu modu (3. adım).

Markadan bağımsız anlatım için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bakabilirsin. Ekranında bir hata kodu varsa [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) yazısı var.

## Sınır nerede biter

Fiş takılı, sigorta ve elektrik yerinde, kapak kapalı, su geliyor, çocuk kilidi kapalı ve fabrika ayarına dönüş denendiği hâlde makine çalışmıyorsa Beko'nun tablosu kullanıcıya başka adım vermiyor. Beko'nun uyarısı açık: talimatları uygulamana rağmen sorun sürüyorsa **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta, kapak ve ayar kullanıcıya; makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekran tamamen karanlık mı, yoksa ışıklar yanıyor ama program mı başlamıyor?
2. Aynı prize başka bir cihaz takınca çalışıyor mu?
3. Makine uzatma kablosuna ya da çoklu prize mi bağlı?
4. Durulama ya da su kesik sembolü yanıp sönüyor mu?
5. Ekranda "Con" ya da bir hata kodu görünüyor mu?

Bu beşine cevabın varsa servise "makine çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
