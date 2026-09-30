---
title: "Samsung buzdolabı kapısı tam kapanmıyor"
description: "Samsung buzdolabı kapısı tam kapanmıyor mu? Samsung Türkiye'nin sırası: kapıya değen yiyecek, kapı raflarındaki yük, raf yerleşimi, conta ve düz zemin."
slug: "samsung-buzdolabi-kapisi-kapanmiyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 29 Eyl'de kota nedeniyle bekletilen konu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200.
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi belgelerinden (samsung.com/tr destek sayfası + org.downloadcenter.samsung.com UNI_TR kılavuzları). ABD Samsung kaynağı KULLANILMADI.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-buzdolabi-sprint/2026-09-30/ · PDF'ler pdftotext -layout; sayfa = basılı sayfa (bu iki kılavuzda PDF sayfasıyla aynı).
#  (S8) Samsung TR destek "Samsung Buzdolabımın kapıları düzgün kapanmadığında ne yapabilirim?" (Son güncelleme 2025-01-23)
#       https://www.samsung.com/tr/support/home-appliances/buzdolabimin-kapilari-duzgun-kapanmadiginda-ne-yapabilirim/
#       html md5 c0ec11e0f12efed1dead2d4532205560 (sayfa dinamik; düz metin md5 838a1fb6ac394577edea608aab331376)
#  (G) Samsung TR kılavuz RB52DS****, 71 s.  md5 edae9a5819b091bc55152ce19142f777 (29 Eyl ile birebir)
#       https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf
#  (A) Samsung TR kılavuz RB6000D (BMF_RB6000D_DA68-04780M-02_TR), 84 s.  md5 46c445aa7e37c25159e8d24902d1e2d6 (29 Eyl ile birebir)
#       https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB50DG601ES9&CttFileID=9578531&CDCttType=UM&VPath=UM%2F202404%2F20240410150912065%2FBMF_RB6000D_DA68-04780M-02_TR.pdf
# Birebir alıntılar:
#   S8: "1 Buzdolabının içerisinde kapının kapanmasını engelleyen herhangi bir cisim olup olmadığını kontrol edin. Ürünler kapıdaki raflara değerek kapının kapanmasını engelliyor olabilir. Gıdaların kapı raflarına temas etmediğinden emin olun."
#   S8: "2 Buzdolabı kapısındaki raflar fazla yüklendiyse yükü hafifletin. … Kapıda yer alan bölmeleri boşaltıp tekrar deneyin."
#   S8: "3 Kapı ve contasında deforme olup olmadığını kontrol edin. Buzdolabı lastikleriniz gevşemiş olabilir. Buzdolabı lastiklerinizi ılık veya sıcak su ile dikkatli şekilde silerek tekrar deneyin."
#   G s.56 "Kapılar düzgün bir biçimde açılıp kapanmıyor": "Yiyecek paketleri kapıların kapanmasını engelliyor olabilir." · "Kapı bölmeleri, raflar e çekmeceler düzgün yerleştirilmemiş olabilir. → Rafların e bölmelerin düzgün yerleşmesini sağlayın." · "Kapı contaları bozuk veya yırtılmış olabilir. → Bu durumda yetkili teknik servisten yardım talep edin." · "Buzdolabınız düz bir zeminde olmayabilir. → Buzdolabınızın kurulumunu ve çalışmasını düz bir zeminde gerçekleştirin."
#   G s.55: "Dolabın içine yüklenen yiyecekler kapıya temas ediyor olabilir. Bu durumu düzelttiğiniz halde kapılar kapanmıyorsa yetkili teknik servisten yardım talep ediniz."
#   G s.43: "Cihazın temizlik ve bakımına başlamadan önce mutlaka cihazın fişini prizden çekin." · "Cihazınızı su dökerek yıkamayın." · G s.44 "…temizledikten sonra iyice kurulayıp … kuru olduğundan emin olun."
#   G s.58: "Kapı contası temiz ve esnek olmalıdır. Kapı contası deforme olmuşsa; * Contalar değişebilen tipteyse contaları değiştirin. * Contalar değişemeyen tipteyse dolabın kapısını değiştirmeniz gerekiyor."
#   A s.24: "…contalarda cam spreyleri, aşındırıcı temizleyiciler, … ağartıcılar veya petrol ürünleri içeren temizleyiciler gibi aşındırıcı veya sert temizleyiciler kullanmayın."
#   A s.67: "Kapı contasında boşluk kalması durumlarında 6 ayda bir periyodik conta yüzeyine pudra sürülme işlemi yapılmalıdır."
#   A s.69: "Kapılar ters çevrildikten sonra kapı contası ters çevrilmediği için kapı düzgün kapanmıyordur. → Kapı contasını çıkarın ve ardından 180° döndürdükten sonra takın."
# NOT: G s.56'daki "e" harfleri kılavuzdaki dizgi hatası ("ve"). G s.56 "ayarlı ayaklar" ses satırındadır; ayak ayarı alet gerektirebildiği için adım yazılmadı.
# BİLEREK YAZILMAYANLAR: conta çıkarıp 180° çevirme (A s.69, söküm → servis) · conta/kapı değişimi (G s.58, parça → servis) · ayak ayarı (ALET KURALI) · kapı yönü değiştirme · fiyat.
# Alıntı denetim tablosu: samsung-buzdolabi-kapisi-kapanmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Ilık su", "Kuru havlu"]
steps:
  - "İçerideki yiyeceklerin ve paketlerin kapı raflarına ya da kapıya değmediğini kontrol et."
  - "Kapı raflarındaki yükü hafiflet; kapı bölmelerini boşaltıp kapıyı yeniden kapatmayı dene."
  - "Kapı bölmelerinin, rafların ve çekmecelerin yerine düzgün oturduğundan emin ol."
  - "Fişi çek, kapıda ve contada şekil bozukluğu olup olmadığına bak, lastikleri ılık suyla dikkatlice sil ve kurula."
  - "Buzdolabının düz bir zeminde durduğunu kontrol et."
faq:
  - q: "Samsung buzdolabımın kapısı neden tam kapanmıyor?"
    a: "Samsung Türkiye üç durumu kontrol etmeni istiyor: içerideki ürünler kapı raflarına değiyor olabilir, kapı rafları fazla yüklenmiş olabilir ya da kapı ve contasında şekil bozukluğu, lastiklerde gevşeme olabilir. Samsung'un kılavuzu buna yanlış yerleşmiş raf ve çekmeceleri, bozuk ya da yırtık contayı ve düz olmayan zemini ekliyor."
  - q: "Kapı contasını neyle temizlemeliyim?"
    a: "Samsung'un destek sayfası lastikleri ılık ya da sıcak suyla dikkatlice silmeyi öneriyor. Kılavuz, contalarda cam spreyi, aşındırıcı temizleyici, ağartıcı ya da petrol ürünü içeren temizleyici gibi sert maddeler kullanılmamasını istiyor. Temizlikten önce fişi çek, sonra iyice kurula."
  - q: "Kapının yönünü değiştirdikten sonra kapı kapanmıyor, neden?"
    a: "Samsung'un RB6000D kılavuzuna göre kapılar ters çevrildikten sonra kapı contası da ters çevrilmediyse kapı düzgün kapanmaz; çözüm contanın çıkarılıp 180° döndürülerek takılmasıdır. Bu işlem contanın sökülmesini gerektirdiği için yetkili servise bırak."
  - q: "Conta yırtıksa ne yapmalıyım?"
    a: "Samsung'un RB52DS kılavuzuna göre kapı contaları bozuk ya da yırtıksa yetkili teknik servisten yardım talep et. Kılavuzun notu: conta değişebilen tipteyse conta, değişemeyen tipteyse kapı değiştirilir. Bu bir parça işidir."
images:
  coverAlt: "Kapısı aralık kalmış bir buzdolabı; kapı rafında sıkışık duran şişeler ve kavanozlar, bir el rafı hafifletiyor"
---

Buzdolabının kapısını kapatıyorsun ama kapı tam oturmuyor, aralık kalıyor. Samsung Türkiye'nin destek sayfası bu durum için şunu söylüyor: "**Buzdolabınızın dondurucu veya soğutucu kapısı tam kapanmıyorsa lütfen aşağıdaki durumları kontrol edin.**" Samsung'un sıraladığı durumların çoğu evde kontrol edilebilecek türden: kapıya değen yiyecek, fazla yüklenmiş kapı rafları ve conta. Samsung'un Türkçe kullanım kılavuzu buna raf yerleşimini ve zemini ekliyor. Bu yazıda Samsung'un kendi sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapıya değen yiyecek ya da paket var mı → kapı raflarını hafiflet → raf, bölme ve çekmeceler yerine oturmuş mu → fişi çek, contayı kontrol et ve ılık suyla sil → buzdolabı düz zeminde mi. Conta bozuk ya da yırtıksa, düzelttiğin hâlde kapı kapanmıyorsa yetkili teknik servis.

## Adım adım: evde denenecekler

**1. Kapıya değen bir şey var mı?** Samsung'un ilk kontrolü: buzdolabının içinde **kapının kapanmasını engelleyen bir cisim** olup olmadığına bak. Samsung'a göre ürünler **kapıdaki raflara değerek** kapının kapanmasını engelliyor olabilir. Kılavuz da **yiyecek paketlerinin** kapıların kapanmasını engelleyebileceğini yazıyor. Gıdaların kapı raflarına temas etmediğinden emin ol.

**2. Kapı raflarını hafiflet.** Samsung'a göre **kapı bölmesindeki rafları çok doldurmak** kapının tam kapanmamasına yol açabilir. Kapı rafları fazla yüklendiyse yükü hafiflet; **kapıdaki bölmeleri boşaltıp** kapıyı yeniden kapatmayı dene.

**3. Raf, bölme ve çekmeceleri yerine oturt.** Samsung'un RB52DS kılavuzuna göre **kapı bölmeleri, raflar ve çekmeceler düzgün yerleştirilmemişse** kapı düzgün kapanmayabilir. Hepsinin yerine düzgün oturduğundan emin ol. Raf düzeni için genel bilgi [buzdolabı raf düzeni ve duvar mesafesi](/blog/buzdolabi-raf-duzeni-ve-duvar-mesafesi/) yazısında.

**4. Contayı kontrol et ve sil.** Samsung'un destek sayfası **kapı ve contasında şekil bozukluğu** olup olmadığını kontrol etmeni istiyor; lastikler **gevşemiş** olabilir. Samsung'un önerisi: lastikleri **ılık ya da sıcak suyla dikkatlice silerek** kapıyı yeniden dene. Kılavuza göre temizlik ve bakıma başlamadan önce **fişi prizden çek,** cihazı **su dökerek yıkama** ve temizlikten sonra **iyice kurula.** Samsung, contalarda **cam spreyi, aşındırıcı temizleyici, ağartıcı** ya da petrol ürünü içeren sert temizleyiciler kullanılmamasını istiyor. Kurulama bitince fişi yeniden tak.

**5. Zemin düz mü?** Samsung'un RB52DS kılavuzuna göre buzdolabı **düz bir zeminde değilse** kapılar düzgün açılıp kapanmayabilir. Kılavuzun önerisi: buzdolabının **kurulumunu ve çalışmasını düz bir zeminde** gerçekleştir. Buzdolabı eğik duruyorsa ve ayak ayarı gerekiyorsa bunu kılavuzunun kurulum bölümüne göre yap; alet gerektiriyorsa ya da emin değilsen yetkili servise bırak.

## Samsung'un iki ek notu

- **Kapı yönü değiştirildiyse:** RB6000D kılavuzuna göre kapılar ters çevrildikten sonra **kapı contası ters çevrilmediyse** kapı düzgün kapanmaz. Kılavuzdaki çözüm contanın çıkarılıp **180° döndürülerek** takılmasıdır; bu işlem contanın sökülmesini gerektirdiği için yetkili servise bırak.
- **Contada boşluk kalıyorsa:** RB6000D kılavuzunun bakım bölümü, kapı contasında boşluk kalması durumunda **6 ayda bir** conta yüzeyine **pudra sürülmesini** öneriyor.

Conta bakımıyla ilgili markadan bağımsız anlatım [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısında.

## Ne zaman servis?

⛔ Samsung'un RB52DS kılavuzu iki yerde net: **kapı contaları bozuk ya da yırtıksa** yetkili teknik servisten yardım talep et; kapıya değen yiyecekleri **düzelttiğin hâlde kapılar kapanmıyorsa** yine yetkili teknik servis. Kılavuza göre conta deforme olmuşsa, conta değişebilen tipteyse conta, değişemeyen tipteyse **kapı değiştirilir**; bu bir parça işidir, kendin yapma.

Kapı uzun süre aralık kaldıysa içeride karlanma ya da soğutma sorunu görülebilir; Samsung'un kontrol sıraları [Samsung buzdolabı buzlanma yapıyor](/blog/samsung-buzdolabi-buzlanma-yapiyor/) ve [Samsung buzdolabı soğutmuyor](/blog/samsung-buzdolabi-sogutmuyor/) yazılarında. İçeride koku da varsa kardeş yazı: [Samsung buzdolabı koku yapıyor](/blog/samsung-buzdolabi-koku-yapiyor/). Markadan bağımsız anlatım için [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısına, ekranda bir kod görüyorsan [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Hangi kapı tam kapanmıyor: soğutucu mu, dondurucu mu?
2. Kapı rafları boşaltılınca kapı kapanıyor mu?
3. Contada yırtık, ezik ya da gevşek bir yer var mı?
4. Kapının yönü sonradan değiştirildi mi?
5. Buzdolabı düz bir zeminde mi duruyor?

Bu beşine cevabın varsa servise "kapı kapanmıyor" yerine somut bir tablo anlatabilirsin.

---

**Kaynak künyesi.** Adımlar Samsung Türkiye'nin "Samsung Buzdolabımın kapıları düzgün kapanmadığında ne yapabilirim?" destek sayfasından ve Samsung'un Türkçe RB52DS ile RB6000D kullanım kılavuzlarından alınmıştır. Kılavuza özgü notlar hangi modele ait olduğu belirtilerek verilmiştir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
