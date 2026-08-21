---
title: "Robot süpürge haritalama sorunu: harita silindi, karıştı ya da robot kayboluyor"
description: "Robot süpürgenin haritası silindi ya da odalar üst üste bindiyse sebep çoğu zaman sensör kiri, ayna-cam etkisi veya taşınan dock. Sıfırlamadan önce şunları dene."
slug: "robot-supurge-haritalama-sorunu"
date: "2026-08-20"
category: "Süpürge"
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, kuru, tüy bırakmayan bez"]
steps:
  - "Robotu kapat."
  - "Üstteki lazer kulesinin çevresindeki şeffaf pencereyi yumuşak kuru bezle sil; kuleyi elinle zorla döndürme."
  - "Varsa kamera merceğini, ön tampondaki sensör gözlerini ve alttaki düşme sensörlerini sil; ıslak bez, deterjan ya da sivri cisim kullanma."
  - "Haritanın hep aynı bölgede bozulup bozulmadığına bak; o bölgede boy aynası ya da camlı yüzey var mı kontrol et."
  - "Yanıltıcı yüzeyin olduğu bölgeyi uygulamadan yasak bölge yap; kameralı modelde gece temizliğinde odada ışık bırak."
  - "İstasyonu sabit tut ve robotu temizlik sırasında elle taşıma."
  - "Uygulamayı ve robot yazılımını güncelle."
  - "Kapıları açık, yerdeki kablo ve çoraplar kaldırılmış hâlde tam bir tur yaptır; robotun istasyona kendi dönmesini bekle."
faq:
  - q: "Robot süpürgenin haritası neden silindi?"
    a: "En sık sebep, robotun temizliği kendi başına tamamlayıp istasyona dönememesidir; birçok modelde harita ancak tur eksiksiz bitip robot dock'a kendisi döndüğünde kaydedilir. Yarıda kesilen, elle taşınarak bitirilen ya da robotun kaybolduğu turlar haritayı kaydettirmez. İstasyonun yerinin değiştirilmesi ve bazı yazılım güncellemeleri de kayıtlı haritayı geçersiz kılabilir."
  - q: "Robotu elle alıp başka odaya taşımak haritayı bozar mı?"
    a: "Bozabilir. Robot konumunu, istasyondan başlayarak kat ettiği yolu sensörleriyle izleyerek bilir; havada taşındığında bu zincir kopar ve robot kendini haritada yanlış yere koyabilir. Sonuç, üst üste binen odalar ya da duvarların içinden geçen rotalar olarak görünür. Robotu başka noktaya götürmek gerekiyorsa temizliği bitirmesini bekleyip uygulamadan yönlendirmek daha sağlıklıdır."
  - q: "Haritayı sıfırlamak her sorunu çözer mi?"
    a: "Hayır, sıfırlama son çaredir ve altta yatan sebebi çözmez. Sensörler kirliyse ya da ortamda boy aynası gibi yanıltıcı yüzeyler varsa, yeni harita da aynı şekilde bozulur. Sıfırlama; taşınma, köklü mobilya değişikliği ya da onarılamayacak kadar parçalanmış harita gibi durumlarda anlamlıdır ve öncesinde sensör temizliği yapılmış olmalıdır."
  - q: "Robot süpürge karanlık odada çalışır mı?"
    a: "Modeline bağlıdır. Üstünde dönen lazer kulesi olan lidarlı modeller kendi ışığını ürettiği için karanlıktan etkilenmez. Kamerayla navigasyon yapan modeller ise ortam ışığına muhtaçtır; karanlık ya da loş odada yönünü kaybedebilir veya haritayı bozabilir. Kameralı bir modelin gece temizliğinde odada bir miktar ışık bırakmak gerekir."
images:
  coverAlt: "Parke zeminde duran robot süpürge"
---

Aylardır sorunsuz çalışan robot süpürge bir sabah eve yeni gelmiş gibi davranıyor: harita silinmiş, oda isimleri gitmiş, yasak bölgeler uçmuş. Ya da harita duruyor ama içi karışmış — salon mutfağın üstüne binmiş, robot koridorda "kaybolduğunu" söylüyor. Haritalama şikâyetleri robot süpürgenin en sinir bozucu arızası gibi görünür, çünkü cihaz fiziksel olarak sapasağlamdır. Gerçekte ise bu vakaların önemli bölümü sensör kiri, ortam etkisi ya da kullanım alışkanlığından kaynaklanır ve evde çözülür. Sırayla gidelim; harita sıfırlamayı da doğru yerine koyalım — çünkü çoğu kişinin ilk yaptığı şey, aslında en son yapılması gerekendir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

## Adım adım: harita bozulduğunda evde yapılacaklar

**1. Robotu kapat.** Sensör temizliğine başlamadan önce cihazı kapat; kapalıyken çalış.

**2. Lazer kulesini sil.** Üstteki dönen kulenin çevresindeki **şeffaf pencereyi** yumuşak, kuru, tüy bırakmayan bezle sil. Kuleyi elinle zorla döndürme, içine sıvı sıkma.

**3. Diğer sensörleri sil.** Varsa kamera merceğini, ön tampondaki sensör gözlerini ve alttaki düşme sensörlerini aynı bezle sil. ⚠️ Sensör pencerelerine **ıslak bez, deterjan ya da sivri cisim** kullanma; çizilen pencere kalıcı görüş bozukluğu demektir.

**4. Bozulmanın yerini bul.** Harita hep aynı bölgede mi bozuluyor? O bölgede boy aynası, camlı vitrin ya da parlak metal yüzey olup olmadığına bak — lazer bunlardan yansır ve robot olmayan bir açıklık görür.

**5. Ortamı düzelt.** Yanıltıcı yüzeyin olduğu bölgeyi uygulamadan **yasak bölge** yap ya da temizlik sırasında aynanın robot boyu hizasını geçici bir örtüyle kapat. Kameralı bir modelde gece temizliği yapıyorsan odada bir miktar ışık bırak.

**6. İstasyonu ve alışkanlığı sabitle.** Robot konumunu istasyona göre bilir: istasyonun yerini sabit tut ve robotu temizlik sırasında elle alıp başka odaya taşıma.

**7. Yazılımı güncelle.** Uygulamayı ve robot yazılımını güncel tut; çok katlı kullanıyorsan kat değişiminde doğru haritanın seçildiğini kontrol et.

**8. Tam tur yaptır.** Kapıları açık, yerdeki kablo ve çorapları kaldırılmış bir evde robotu hiç ellemeden çalıştır ve **turu bitirip istasyona kendi dönmesini** bekle — birçok modelde harita ancak o zaman kaydedilir.

## 1) Sensör temizliği: önce buradan başla

Lidarlı modellerde robotun üstündeki dönen kule, çevresine lazer gönderip yansımasını okuyarak harita çıkarır. Bu kulenin penceresi tozlanır ya da parmak iziyle lekelenirse robot çevresini bulanık görür: duvarlar kayar, mesafeler şaşar, harita "titrer". Aynı şey kameralı modellerin merceği, öndeki duvar sensörü ve alttaki düşme sensörleri için de geçerlidir. Marka destek sayfalarının haritalama başlığındaki ilk önerisi budur: navigasyon sensörlerini yumuşak kuru bezle düzenli sil.

**Kendin kontrol et:** Robotu kapat. Üstteki lazer kulesinin çevresindeki şeffaf pencereyi, varsa kamera merceğini, ön tampondaki sensör gözlerini ve alttaki düşme sensörlerini **yumuşak, kuru, tüy bırakmayan bezle** sil. Kuleyi elinle zorla döndürme, içine sıvı sıkma.

⚠️ Temizlik sırasında sensör pencerelerine **ıslak bez, deterjan ya da sivri cisim** kullanma; çizilen pencere kalıcı görüş bozukluğu demektir. Cihaz kapalıyken çalış.

## 2) Ayna, cam ve ışık: ortam robotu yanıltıyor olabilir

Haritayı bozan şey her zaman robot değildir; bazen odanın kendisidir. Boy aynası ve yere kadar inen cam yüzeyler lazeri yansıtır; robot aynada "açık alan" görür, olmayan bir odaya girmeye çalışır ya da duvarı olduğundan uzakta sanır. Kameralı modellerde ise sorun tersinden gelir: bu modeller ortam ışığına muhtaçtır, karanlık ya da loş odada yönlerini kaybedebilirler. Lidarlı modeller kendi ışığını ürettiği için karanlıktan etkilenmez — ama aynadan etkilenir.

**Kendin kontrol et:** Harita hep aynı bölgede mi bozuluyor? O bölgede boy aynası, camlı vitrin ya da parlak metal yüzey var mı? Varsa temizlik sırasında aynanın alt kısmını (robot boyu hizasını) geçici olarak bir örtüyle kapat ya da o bölgeyi uygulamadan yasak bölge yap ve haritanın davranışını izle. Kameralı modelde gece temizliği yapıyorsan odada ışık bırak.

## 3) Dock'un yeri ve haritanın kaydedilme şartı

Kullanıcıların en az bildiği kural şudur: birçok modelde harita, ancak robot **turu eksiksiz tamamlayıp istasyona kendi başına döndüğünde** kaydedilir. Yarıda kesilen, elle taşınarak bitirilen ya da robotun sıkışıp kaldığı turlar haritayı kaydettirmez — "harita silindi" şikâyetlerinin bir kısmı aslında "harita hiç kaydedilmedi" vakasıdır. İkinci kural: robot konumunu istasyona göre bilir. İstasyonun yeri değiştirilirse ya da robot temizlik sırasında elle alınıp başka odaya konursa konum zinciri kopar; odalar üst üste biner, robot kaybolur.

**Kendin kontrol et:** İstasyonun yerini yakın zamanda değiştirdin mi? Robotu temizlik sırasında elle taşıma alışkanlığın var mı? İlk haritalama turunu kapıları açık, yerdeki kablo ve çorapları kaldırılmış bir evde, robotu hiç ellemeden, tur bitip istasyona dönene kadar sabırla tamamlat. İstasyonu bundan sonra sabit tut.

## 4) Harita sıfırlama: ne zaman doğru, ne zaman erken

Sıfırlama cazip görünür ama altta yatan sebebi çözmez: sensör kirliyse ya da ayna yanıltıyorsa yeni harita da bozulur. Doğru sıra şudur — önce sensör temizliği, sonra ortam düzeltmesi, sonra eksiksiz bir tam tur. Sıfırlama şu durumlarda anlamlıdır: eve yeni taşındın, mobilya düzeni köklü değişti, ya da harita üst üste binmiş ve uygulamadaki düzenleme araçlarıyla kurtarılamayacak kadar parçalanmış. Sıfırlama uygulamanın harita yönetimi bölümünden yapılır ve sonrasında yasak bölgeler ile oda isimlerini yeniden tanımlaman gerekir — bu yüzden son çaredir.

## 5) Uygulama ve yazılım tarafı

Haritalama davranışı yazılımla iç içedir: bazı sürüm güncellemeleri harita formatını değiştirir, çok katlı ev desteği modelden modele farklıdır ve eski uygulama sürümleri yeni robot yazılımıyla uyumsuz kalabilir. Uygulamayı ve robot yazılımını güncel tut; çok katlı kullanıyorsan modelinin çoklu harita desteğini ve kat değişiminde doğru haritayı seçtiğini kontrol et. Güncelleme sonrası tek seferlik harita bozulması biliniyor bir durumdur; yeni bir tam turla harita yeniden oturur.

## Nereden sonra servis işi

Sensörler temiz, ortam düzeltildi, istasyon sabit, yazılım güncel, harita sıfırlanıp eksiksiz turla yeniden çıkarıldı — ve robot hâlâ kayboluyorsa, düz duvarda zigzag çiziyorsa ya da lazer kulesi dönmüyor / anormal ses çıkarıyorsa iş donanıma gelmiştir: lidar motoru, kule mekanizması ya da sensör kartı.

⛔ **Kule ve sensör bloğu sökülmez.** Bu parçalar kalibrasyonla çalışır; kullanıcı müdahalesi arızayı büyütür. Robotu kapat, belirtiyi not et ("kule dönmüyor", "hep şu köşede kayboluyor" gibi) ve servise bu tarifle git.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
