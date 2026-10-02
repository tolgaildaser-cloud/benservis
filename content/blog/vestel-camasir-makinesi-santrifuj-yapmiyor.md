---
title: "Vestel çamaşır makinesi santrifüj yapmıyor"
description: "Vestel çamaşır makinesi sıkmaya geçmiyorsa önce göstergedeki devre bak: '- - -' sıkma iptal demek. Dengesiz yük ve ek sıkma için Vestel'in sırası."
slug: "vestel-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Vestel grubu). Beş belge bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alan adından
#   (statik.vestel.com.tr) yeniden indirildi, hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 5/5 birebir.
#   Okuma pdftotext -layout -f N -l N; sayfa = PDF sayfası (pdfinfo). Web araması KULLANILMADI (adresler yayındaki vestel-camasir-* provenanslarından).
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  40 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  40 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  43 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c  (kurutmalı)
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  43 s.  md5 c7607ad9886b39d7be76043a5285bfba
# Ana satır, "KÜÇÜK ARIZALARIN GİDERİLMESİ" (A s.31 · B s.31 · C s.34 · D s.40 · E s.34, beşinde aynı):
#   "Sıkma işlemi yapılmıyor ya da geç başlıyor. | Hata yok. Dengesiz yük kontrol sistemi devreye girdi. | Dengesiz yük kontrol sistemi çamaşırlarınızı
#    homojen bir şekilde dağıtmayı deneyecek. Çamaşırlarınız dağıtıldıktan sonra sıkma işlemine geçilecek. Bir sonraki yıkama işleminde çamaşırlarınız
#    makinenizin içine dengeli bir şekilde koyun."
# Sıkma devri: A s.20 (5.7/2 "Sıkma hızı seçimi") "Devir hızı ayar tuşu ile çamaşırlarınızın sıkma işleminin devir ayarını yapabilirsiniz. Yeni bir program
#   seçtiğinizde, devir hızı göstergesinde seçmiş olduğunuz programın maksimum sıkma devir hızı görülür. Devir hızını; devir hızı ayar tuşuna basarak seçilen
#   programın maksimum sıkma devri ile sıkma iptal (- - -) seçenekleri arasında kademeli olarak azaltabilirsiniz. Eğer ayarlamak istediğiniz sıkma devrini
#   atladıysanız, devir hızı ayar tuşuna sürekli basarak istediğiniz devire tekrar gelebilirsiniz." (C/D/E s.23)
# Yükleme: A s.18 "Çamaşırlarınızı makinenizin içerisine iyi yayılmış olarak yerleştiriniz. Makine içerisine yükleyeceğiniz yorgan, battaniye gibi eşyaları
#   aşağıdaki şekilde görüldüğü gibi katlayarak koyunuz." / "Her çamaşırı ayrı yerleştiriniz." / "Yıkama programları için program tablosunda belirtilen
#   maksimum kuru yük kapasitelerini aşmayın." · A s.5 "seçtiğiniz yıkama programında belirtilen azami çamaşır miktarını aşmayacak kadar çamaşır koymalısınız."
# Ek sıkma: A s.23 program tablosu "Sıkma-Tahliye" → "Çamaşırlarınıza yıkama işleminden sonra ek bir sıkma işlemi yaptırmak istediğinizde, her türlü
#   çamaşırlarınız için bu programı kullanabilirsiniz." (B s.23 · C/E s.26 · D s.30 "Sıkma/Tahliye")
# Program süresi: A s.24 (***) Süper Hızlı 15 dk. notu "Makineniz dengesiz yük algıladı takdirde program süresi artar." (D s.31 aynı cümle)
# Titreşim satırı A s.30: "Makinenize aşırı çamaşır konulmuş ya da çamaşırlar dengesiz yerleştirilmiş." (D'de bu satır ayrı sayfada, kontrol edilmedi)
# Servis: A s.30 tablo girişi "Makinenizde yapılması gereken tüm tamiratlar yetkili servisler tarafından yapılmalıdır." + fiş/musluk.
# ALET KURALI: adımların hiçbiri alet istemiyor (tuş, program düğmesi, yerleştirme).
# BİLEREK YAZILMAYANLAR: "su boşaltmadığı için sıkmıyor" çıkarımı (belgede bu bağ yok; E03 yalnız ayrı belirti olarak anıldı) · motor/kömür/kart teşhisi
#   (belgede yok, #31) · program başına seçilebilir devir listesi (yalnız D'nin tablosunda) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Program seçtikten sonra devir hızı göstergesine bak; '- - -' görünüyorsa sıkma iptal seçilidir."
  - "Devir hızı ayar tuşuna basarak istediğin sıkma devrine gel."
  - "Makine sıkmadan önce bekliyorsa programı bölme; dengesiz yük kontrol sisteminin çamaşırı dağıtmasını bekle."
  - "Bir sonraki yıkamada çamaşırları tambura iyi yayılmış ve dengeli yerleştir."
  - "Yorgan, battaniye gibi büyük parçaları kılavuzdaki şekildeki gibi katlayarak koy."
  - "Seçtiğin programın maksimum kuru çamaşır kapasitesini aşma."
  - "Çamaşırlar ıslak kaldıysa Sıkma-Tahliye programıyla ek bir sıkma yaptır."
faq:
  - q: "Vestel çamaşır makinesi neden sıkmaya geçmiyor?"
    a: "Vestel'in kullanım kılavuzlarındaki küçük arızalar tablosunda 'Sıkma işlemi yapılmıyor ya da geç başlıyor' satırının karşılığı 'Hata yok. Dengesiz yük kontrol sistemi devreye girdi.' Sistem çamaşırları homojen biçimde dağıtmayı dener, dağıtınca sıkmaya geçer. Bir de devir hızı göstergesine bak: sıkma iptal seçeneği '- - -' olarak görünür."
  - q: "Göstergede '- - -' ne demek?"
    a: "Vestel kılavuzuna göre devir hızı ayar tuşuyla sıkma devri, seçilen programın maksimum devri ile sıkma iptal (- - -) arasında kademeli olarak azaltılabilir. Yani '- - -' sıkmanın kapalı olduğunu gösterir. İstediğin devri atladıysan tuşa basmaya devam ederek yeniden gelebilirsin."
  - q: "Yıkama bitti ama çamaşırlar ıslak, tekrar mı yıkamalıyım?"
    a: "Gerek yok. Vestel'in program tablosundaki Sıkma-Tahliye programı, yıkamadan sonra ek bir sıkma yaptırmak istediğinde her türlü çamaşır için kullanılabiliyor. Kurutmalı KCMI 98142 kılavuzunda aynı programın adı Sıkma/Tahliye."
  - q: "Program neden uzadı?"
    a: "Vestel'in program tablosu notunda makinenin dengesiz yük algıladığında program süresinin arttığı yazıyor. Dengesiz yük kontrol sistemi çamaşırı dağıtmaya çalışırken sıkma geç başlar; tablo bunu bir arıza olarak değil, 'Hata yok' diye tanımlıyor."
images:
  coverAlt: "Kapağı kapalı bir çamaşır makinesinin camının ardında tamburun bir yanında toplanmış ıslak bir yorgan"
---

Yıkama bitti, kapağı açtın ve çamaşırlar sırılsıklam; ya da makine durulamadan sonra uzun süre bekliyor, bir türlü hızlanmıyor. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki küçük arızalar tablosunda bunun ayrı bir satırı var: **"Sıkma işlemi yapılmıyor ya da geç başlıyor."** Tablonun cevabı şaşırtıcı biçimde sakin: **"Hata yok. Dengesiz yük kontrol sistemi devreye girdi."** Aynı kılavuzların ek fonksiyonlar bölümü de ikinci bir ihtimali açıkça gösteriyor: sıkma devri panelden kapatılmış olabilir. İkisi de birkaç dakikada kontrol edilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Göstergede "- - -" varsa sıkma iptal seçilidir; devir hızı ayar tuşuyla devri geri getir. Gösterge doğruysa makine dengesiz yükü dağıtmaya çalışıyordur; bekle. Sonraki yıkamada çamaşırı dengeli yay, büyük parçaları katla, kapasiteyi aşma. Islak kalan çamaşır için Sıkma-Tahliye programı var.

## Adım adım: evde denenecekler

**1. Göstergeye bak.** Vestel kılavuzuna göre yeni bir program seçtiğinde devir hızı göstergesinde o programın **maksimum sıkma devri** görünür. Göstergede **"- - -"** varsa bu, **sıkma iptal** seçeneğidir; makine o programda sıkma yapmaz.

**2. Devri geri getir.** Vestel'e göre sıkma devri **devir hızı ayar tuşuyla**, programın maksimum devri ile sıkma iptal arasında kademeli olarak ayarlanır. İstediğin devri atladıysan tuşa basmayı sürdür; kılavuza göre istediğin devre yeniden gelirsin.

**3. Dengesiz yükte bekle.** Tablodaki satırın açıklaması: dengesiz yük kontrol sistemi çamaşırlarını **homojen biçimde dağıtmayı dener**; çamaşırlar dağıtıldıktan sonra **sıkma işlemine geçilir.** Bu sırada programı bölmene gerek yok. Kılavuzun program tablosu notuna göre makine dengesiz yük algıladığında **program süresi de artar.**

**4. Sonraki yıkamada dengeli yerleştir.** Tablonun son cümlesi: **bir sonraki yıkamada çamaşırlarını makinenin içine dengeli bir şekilde koy.** Kılavuzun yükleme bölümü aynı şeyi iki kuralla söylüyor: çamaşırları **iyi yayılmış** olarak yerleştir ve **her çamaşırı ayrı** yerleştir.

**5. Büyük parçaları katla.** Vestel'e göre makineye yükleyeceğin **yorgan, battaniye gibi eşyalar** kılavuzdaki şekilde gösterildiği gibi **katlanarak** konur.

**6. Kapasiteyi aşma.** Kılavuz program tablosunda her program için yazan **maksimum kuru yük kapasitesinin** aşılmamasını istiyor; güvenlik bölümü de seçilen programda belirtilen **azami çamaşır miktarının** aşılmamasını söylüyor. Kapasite programdan programa değişir; tabloyu kendi modelinin kılavuzundan oku.

**7. Ek sıkma yaptır.** Çamaşırlar ıslak çıktıysa yeniden yıkamaya gerek yok. Vestel'in program tablosundaki **Sıkma-Tahliye** programı, yıkamadan sonra **ek bir sıkma** yaptırmak istediğinde her türlü çamaşır için kullanılabiliyor. Kurutmalı KCMI 98142 kılavuzunda bu programın adı **Sıkma/Tahliye.**

## Sıkma iptal neden seçili kalır?

Kılavuza göre devir hızı göstergesi her yeni programda o programın maksimum devrini gösterir; devir, tuşa basıldıkça **maksimum devir ile sıkma iptal (- - -) arasında kademeli olarak** azalır. Program başlamadan önce göstergedeki değere bir kez bakmak, hangi devrin seçili olduğunu görmenin en kısa yoludur.

Sıkma iptal seçeneğinin kılavuzda bir de bilinçli kullanımı geçiyor: **tahliye.** Vestel'in program tablosuna göre makinenin içinde biriken suyun boşaltılması gereken durumlarda (çamaşır ekleme, çamaşır çıkarma gibi) program düğmesi Sıkma-Tahliye programına getirilir ve ek fonksiyon düğmesinden **sıkma iptal** seçilir; program bundan sonra çalışmaya başlar.

## Sıkmayla birlikte görülen öteki durumlar

- **Sıkmada makine sallanıyor:** Vestel'in tablosunda titreşimin sebepleri arasında **aşırı çamaşır** ya da **dengesiz yerleştirilmiş çamaşır** da var. Ayrıntısı [Vestel çamaşır makinesi titriyor](/blog/vestel-camasir-makinesi-titriyor/) yazısında.
- **Kazanda su kalmış ve ekranda E03 var:** Bu ayrı bir uyarı; Vestel'in kod tablosundaki karşılığı pompa filtresi ya da pompayla ilgili. Adımları [Vestel çamaşır makinesi E03 hatası](/blog/vestel-camasir-makinesi-e03-hatasi/) yazısında.
- **Makine hiç başlamıyor:** [Vestel çamaşır makinesi çalışmıyor](/blog/vestel-camasir-makinesi-calismiyor/).

Markadan bağımsız sebepler için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısına da bakabilirsin.

## Ne zaman servis

Göstergede sıkma devri seçili, çamaşır dengeli yerleştirilmiş, kapasite aşılmamış ve makine yine de sıkmaya hiç geçmiyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor. Tablonun girişindeki kural geçerli: makinede yapılması gereken **tüm tamiratlar yetkili servisler tarafından** yapılmalı; arızayı tablodaki bilgilerle gideremediğinde **fişi prizden çek, musluğu kapat** ve yetkili servise başvur.

⛔ **Kendin-çöz sınırı burada biter.** Devir ayarı, yerleştirme ve program seçimi kullanıcıya; motor ve gövdenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Göstergede hangi devir yazıyordu, "- - -" mü?
2. Makine sıkmaya hiç mi geçmiyor, yoksa geç mi geçiyor?
3. Tamburda tek büyük parça (yorgan, battaniye gibi) var mıydı?
4. Programın kapasitesine göre ne kadar çamaşır yüklendi?
5. Sıkma-Tahliye programıyla ek sıkma denendi mi?

Bu beşine cevabın varsa servise "santrifüj yapmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
