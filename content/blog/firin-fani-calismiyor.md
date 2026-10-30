---
title: "Fırın fanı çalışmıyor mu? Ne işe yarar, nasıl kapanır"
description: "Fırında iki ayrı fan var: sıcak hava fanı ve soğutma fanı. Bosch, Arçelik ve Samsung kılavuzlarına göre ne zaman çalışır, ne zaman durur, servis sınırı."
slug: "firin-fani-calismiyor"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P19 #121). origin/main'de genel fırın fanı yazısı yok. Yakın: bosch-firin-hava-ufluyor (yalnız Bosch soğutma fanı), siemens-firin-hava-ufluyor,
#   firin-isinmiyor, firin-esit-pisirmiyor. Bu yazı iki fanı birlikte ve üç üreticiyle anlatır; Bosch soğutma fanı ayrıntısı için o yazıya bağlanır.
# Arama kanıtı: BOSLUK.md #121 (OT "fırın fanı" #2,#4,#5,#6; "fırın fanı çalışmıyor" tam liste). Rakip başlık metni kaynak değil, yalnız kanıt.
# Belgeler (yerel kopyalar blog-taslaklar/kaynak-firin-sprint/, 1 Eki 2026, HTTP 200; bu koşuda yeni indirme yok; pdftotext, sayfa = PDF sayfası):
#  (B) Bosch HBF512B.1T kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001944574_A.pdf  md5 3fac75fc8fb8bbef288fcc478b030ece
#  (A) Arçelik 9658 serisi ankastre fırın kılavuzu  https://download.arcelik.com.tr/download.usagemanuals/9658-syti-tek-bolmeli-60-cm-ankastre-firinlar-kullanim-kilavuzu-tr_TR_201505070836921_User20Manual20-20Filetur-A.pdf  md5 cc4cfd75c500496d1ee5ade673f5bff5
#  (S) Samsung NV7B442/NV7B452 kılavuzu  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV7B4420ZAK&CttFileID=10050757&CDCttType=UM&VPath=UM%2F202501%2F20250124222105993%2FO_DG68_01413G_03_IB_FULL_NV7B4420ZAK_TR_250113.pdf  md5 776e6d02867f930dbda6362c94ea2db8
# Sayfalar: B s.8 soğutma fanı · B s.17 kapanmıyor tablosu · A s.13 soğutma fanı · A s.20-21 fan motoru, fanlı çalışma · S s.11 güvenlik mekanizması · S s.50 sorun giderme.
# BİLEREK YAZILMAYANLAR: fan motoru teşhisi/değişimi, kart, termostat · "kapatma" için gizli düğme (belgede yok) · Bosch fan süresi dakikası (Bosch belgesinde yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika (soğuma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Hangi fanın çalışmadığına karar ver: fırının içindeki sıcak hava fanı mı, kapağın üstünden hava veren soğutma fanı mı?"
  - "Seçili pişirme fonksiyonuna bak; yalnız fanlı ya da sıcak hava fonksiyonlarında içerideki fan çalışır."
  - "Kapağın tam kapalı olduğundan emin ol; bazı fırınlarda kapak açılınca fan durur."
  - "Fırını kapattıktan sonra soğutma fanını hemen durdurmaya çalışma; kılavuzlar bir süre çalışmasını normal sayıyor."
  - "Fan hâlâ durmuyorsa fonksiyon düğmesini sıfır konumuna getir ve fırının soğumasını bekle."
  - "Kapaktaki havalandırma yarıklarını ve fırının çevresindeki boşlukları kontrol et."
  - "Fanın sesi hiç gelmiyorsa ya da fırın kendiliğinden kapanıyorsa kullanmayı bırak ve yetkili servisi çağır."
faq:
  - q: "Fırın fanı ne işe yarar?"
    a: "İki ayrı fan var. Bosch kılavuzuna göre hava dolaşımlı ısıtma türlerinde pişirme bölümünün arka panelindeki fan ısıyı eşit dağıtır. Arçelik'in soğutma fanı ise hem ankastre dolabını hem de fırının ön kısmını soğutur."
  - q: "Fırın fanı nasıl kapatılır?"
    a: "İçerideki sıcak hava fanı, fonksiyonu değiştirerek ya da fırını kapatarak durur. Soğutma fanı için kılavuzlarda ayrı bir kapatma düğmesi yok; Bosch fonksiyon düğmesinin sıfıra çevrilmesini, cihaz soğuyunca fanın kendiliğinden kapanmasını yazıyor."
  - q: "Fırın kapandı ama fan çalışıyor, normal mi?"
    a: "Evet. Bosch fanın cihazın hızlı soğuması için belirli bir süre çalıştığını yazıyor. Arçelik 9658 serisinde bu süre fırın kapandıktan sonra yaklaşık 20-30 dakika olarak veriliyor."
  - q: "Kapak açılınca fan durması arıza mı?"
    a: "Markaya göre değişir. Arçelik ısının kaçmaması için kapak açılınca fan motorunun çalışmadığını, Samsung kapak açılınca fan ve ısıtma elemanlarının durduğunu ve kapak kapanınca devam ettiğini yazıyor. Bosch'ta kapak açılsa da çalışma sürüyor."
images:
  coverAlt: "Mutfak dolabına gömülü ankastre bir fırın; kapağın üst kenarından çıkan hava okları"
  steps:
    - "Ankastre fırının kapağını gösteren, üstte hava oku olan çizim"
    - "Fonksiyon düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Fırın kapağını sonuna kadar kapatan beyaz eldivenli sade siluet el"
    - "Kapalı fırının önünde bekleyen beyaz eldivenli sade siluet el"
    - "Fonksiyon düğmesini sıfır konumuna getiren beyaz eldivenli sade siluet el"
    - "Kapağın üstündeki havalandırma yarığına bakan beyaz eldivenli sade siluet el"
    - "Fırının yanında alet çantasıyla bekleyen servis teknisyeni silueti, yüz yok"
---

Fırının fanını duymuyorsun ya da tam tersine fırın kapandığı hâlde fan sürekli dönüyor. İki durum için de aynı soruyu soruyoruz: hangi fan? Fırınlarda iki ayrı fan olabiliyor ve **Bosch** HBF512B, **Arçelik** 9658 serisi ve **Samsung** NV7B442 kılavuzları bu iki fanı ve davranışlarını birbirinden farklı yazıyor. Aşağıda kılavuzların ortak ve ayrışan noktalarını topladık. Kendi fırınının kılavuzu farklı bir şey diyorsa **kendi kılavuzun esastır.**

## İki fan, iki iş

**Sıcak hava fanı** pişirme bölümünün içinde, arka panelde çalışır. Bosch'a göre hava dolaşımlı ısıtma türlerinde arka paneldeki fan, yuvarlak ısıtıcının ısısını pişirme bölümüne eşit biçimde dağıtır. Arçelik'te "fanlı çalışma" fonksiyonunda fırın ısıtılmaz, yalnızca arka duvardaki fan çalışır; donmuş yiyecekler oda sıcaklığında yavaş yavaş çözülür. Samsung da ısı yayma fanından söz ediyor: arka ısıtma elemanının ürettiği ısıyı fan pişirme bölümüne dağıtır. Yani üç markada da içerideki fanın işi ısıyı eşit yaymak.

**Soğutma fanı** ise fırının dışını korur. Bosch'ta cihaz sıcaklığına göre devreye girer ve devre dışı kalır, sıcak hava kapağın üzerinden dışarı çıkar. Arçelik'te ürüne takılı soğutma fanı hem ankastre dolabı hem de ürünün ön kısmını soğutur. Bosch'un bu fan için ayrı yazısı var: [Bosch fırın hava üflüyor](/blog/bosch-firin-hava-ufluyor/).

## Adım adım: fan çalışmıyor ya da kapanmıyorsa

**1. Hangi fan?** İçeride, arka panelden fan sesi gelmiyorsa sorun sıcak hava fanındadır. Kapağın üstünden hava çıkmıyorsa soğutma fanını arıyorsun. İkisini ayrı değerlendir; çünkü ikisinin çalışma kuralı farklı.

**2. Seçili fonksiyon.** Bosch, hava dolaşımlı ısıtma türlerinde arka paneldeki fanın çalıştığını yazıyor. Yani yalnız alt ve üst ısıtma seçiliyse içerideki fanın dönmemesi arıza değildir. Fonksiyon düğmesini kılavuzdaki sıcak hava ya da fanlı simgeye çevirip tekrar dene.

**3. Kapak kapalı mı?** Arçelik, ısının dışarıya kaçmaması için fırın kapağı açıldığında fan motorunun çalışmadığını yazıyor. Samsung kapak açıldığında fırının lambasının yandığını, fan ve ısıtma elemanlarının durduğunu, bunun arıza olmadığını ve kapak kapanınca çalışmanın sürdüğünü söylüyor. Bosch ise kapak açılsa da çalışmanın devam ettiğini yazıyor. Yani aynı davranış markadan markaya değişiyor.

**4. Kapattıktan sonra çalışan fan.** Bosch, cihazın çalışmadan sonra hızlı soğuması için soğutma fanının belirli bir süre çalıştığını, dakikasını vermeden yazıyor. Arçelik 9658 serisi bu süreyi fırın kapandıktan sonra yaklaşık 20-30 dakika olarak veriyor. Samsung da temizleme işlemi bittikten sonra soğutma fanı çalışırken fırını kapatmamanı istiyor. Bu süre içinde fan sesi arıza değil.

**5. Fan durmuyorsa.** Bosch'un arıza tablosunda tam bu belirti var: cihaz bir süre sonra ısınmayı durduruyor ama lamba ve soğutma fanı kapanmıyor. Çözüm fonksiyon düğmesinin **sıfır konumuna** çevrilmesi; cihaz kapanır, cihaz soğuduktan sonra soğutma fanı otomatik olarak kapanır.

**6. Havalandırma.** Bosch kapaktaki havalandırma yarıklarının üzerinin örtülmemesini, aksi hâlde cihazın aşırı ısınacağını yazıyor. Samsung'un sorun giderme tablosunda fırın çalışırken kapanıyorsa nedenlerden biri havalandırması iyi olmayan bir yere kurulum; çözüm kurulum kılavuzundaki boşlukları bırakmak. Havlu ya da bez asma, yarıkların önünü açık tut.

**7. Servis.** Samsung'un tablosunda fırın çalışırken kapanıyorsa nedenlerden biri soğutma fanının çalışmaması; öneri fanın sesini dinlemek. Fan sesi hiç yoksa ve fırın kendiliğinden kapanıyorsa kullanmayı bırak. Fan motoru ve kart elektrikli parçalardır; sökmek ve değiştirmek yetkili servisin işi.

## Sesi duymamak her zaman arıza değil

Fan sesi fırından fırına çok değişiyor. Bosch soğutma fanının cihaz sıcaklığına göre devreye girip devre dışı kaldığını yazıyor; yani fırın soğukken fanın çalışmaması normal olabilir. İçerideki sıcak hava fanı ise yalnızca ilgili fonksiyonda dönüyor. Bu yüzden önce fırını bir sıcak hava fonksiyonuyla çalıştırıp kapağı kapalı tutarak dinlemek, "fan bozuk" sonucuna varmak için doğru ilk adım. Vestel kılavuzunda da fanın (varsa) gürültülü çalışması için ayrı bir satır var; nedeni rafların titreşmesi ve arka panele temas etmesi olabiliyor, çözüm rafları ve içindeki pişirilenleri kontrol etmek. Yani fan sesi bazen arıza değil, rafın titreşimidir.

## Hangi belirti ne anlama gelir

Fan çalışıyor ama fırın ısınmıyorsa konu fan değil ısıtmadır; o durumda [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısına geç. Fan hiç çalışmıyor ama fırın ısınıyorsa içeride sıcak hava fonksiyonunun seçili olup olmadığına bak. Fan çalışmıyor ve fırın çalışırken kapanıyorsa Samsung tablosundaki kapanma satırı devreye girer: soğutma fanı, havalandırma ve aynı prizdeki birden fazla fiş birlikte kontrol edilir. Fan hiç durmuyorsa Bosch tablosundaki fonksiyon düğmesi adımı geçerlidir.

## Ne zaman servis

- Soğutma fanı fırın tamamen soğuduktan sonra bile durmuyorsa
- Fırın çalışırken kendiliğinden kapanıyor ve fan sesi gelmiyorsa
- Yanık kokusu, duman ya da ısınma şikâyeti birlikteyse ([fırın ısınmıyor](/blog/firin-isinmiyor/) yazısındaki kontroller de sonuç vermediyse)

⛔ **Kendin-çöz sınırı burada biter.** Fonksiyonu seçmek, kapağı ve havalandırmayı kontrol etmek, beklemek sende; fan motoru ve elektrik parçası yetkili servisin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
