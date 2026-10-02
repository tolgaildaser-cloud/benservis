---
title: "Arçelik kurutma makinesi kurutmuyor"
description: "Arçelik kurutma makinesinde çamaşır nemli çıkıyorsa: lif filtresi, filtre çekmecesi ya da yoğuşturucu, nem sensörü ve havalandırma."
slug: "arcelik-kurutma-makinesi-kurutmuyor"
date: "2026-10-02"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Arçelik+Beko belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, HTTP 200, application/pdf.
# Web araması YALNIZ belgelerin yerini bulmak için kullanıldı (download.arcelik.com.tr adresleri); hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı (#88).
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-beko-2eki/ (dl.log, urls.txt) · okuma pdftotext; sayfa = PDF sayfası (\f ile sayıldı).
#  (A) 3886 KT / 3886 KTS / 3886 KTR  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180102154833_User%20Manual%20-%20Filetr_TR.pdf  36 s.  md5 62fe5d46146e92058583492074c9d509  (sayfa atıfları esas olarak A)
#  (B) 2772 KT / 2772 KTS / 2772 KTİ  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201801031501235_User%20Manual%20-%20Filetr_TR.pdf  32 s.  md5 af5f6e8ada2c00d238838e438d29edb3
#  (indirildi, aynı satırlar, bu yazıda atıf yok: 3870 KT md5 3b75cd9720a263fd7b6dc70dfcf18659 · 3880 KT md5 ce6e2d89de594e27b8ac4f71e863a2d1)
# Belirti satırları (A s.30): "Kurutma işlemi uzun sürüyor." → lif filtresi gözenekleri tıkanmış >>> "Filtreyi ılık suyla yıkayın." · filtre çekmecesi tıkanmış >>> süngeri temizleyin
#   · havalandırma ızgaraları kapalı >>> önündeki eşyayı kaldırın · kurulduğu alan çok küçük >>> "Oda sıcaklığının çok yükselmemesi için kapı veya pencereleri açın."
#   · "Nem sensöründe kireç tabakası oluşmuş olabilir. >>> Nem sensörünü temizleyin." · aşırı çamaşır >>> aşırı yüklemeyin · "Çamaşırlar yeterli derecede sıkılmamış olabilir. >>> Çamaşır makinesinde daha yüksek devirde sıkma yapın."
#   "Kurutma sonunda çamaşırlar nemli çıkıyor." → çamaşır cinsine uygun program yok >>> bakım etiketine uygun program "veya ilave olarak zaman programlarını kullanın" + filtre, çekmece, aşırı yük, sıkma.
#   B s.27: aynı iki satırda filtre çekmecesi yerine "Yoğuşturucu tıkanmış olabilir. >>> Yoğuşturucuyu yıkayın." + not: "Kurutma sonunda çıkan sıcak çamaşırlar gerçekte olduklarından daha nemli hissedilirler."
# Diğer: A s.5 bakım/temizlikte fişi prizden çek · A s.26 lif filtresi (yukarı çek, aç, elle/yumuşak bez; tabaka → ılık su, kurut; filtre yuvası elektrikli süpürge; kapak iç yüzeyi ve conta nemli bez)
#   · A s.26 nem sensörü (makine sıcaksa soğumasını bekle; metal yüzeyler sirkeyle ıslatılmış yumuşak bez; yılda 4 kez; metal alet yok; çözelti/temizleme maddesi yok — yangın ve patlama tehlikesi)
#   · A s.27-29 filtre çekmecesi (tekmelik düğmesi, kapağı ok yönünde çevir, kırmızı düğme, sünger elde yıka, elle sıkıp ıslaklığını al, dikkatli yerleştir; süngersiz kurutma zarar verir; ıslak sünger hata)
#   · A s.29 evaporatör kanatçıkları elektrik süpürgesiyle ya da eldivenle; çıplak elle değil · A s.14 +5°C ile +35°C arası çalışma; mobilya kenarlarına en az 1 cm boşluk
#   · A s.17 en yüksek devirde sıkma, çamaşırları cinsine/kalınlığına göre ayırma, kapağı gerekmedikçe açmama · A s.18 çalışırken ıslak çamaşır ekleme yok; ortamı iyi havalandır; kapasite tablosu
#   · A s.25 program başladıktan sonra çamaşır ekleme bazı çamaşırların nemli kalmasına neden olabilir · B s.26 yoğuşturucu: her 30 kurutmada ya da ayda bir; kapak kilitleri, duş ile basınçlı su, süzülme, kilitleri kapat
#   · A s.31 uyarı: sorun giderilemezse bayi ya da Yetkili Servis; çalışmayan ürünü kendiniz onarmayı asla denemeyin.
# BİLEREK YAZILMAYANLAR: ısıtıcı/kompresör/fan/kart teşhisi (belgede yok) · "ısı pompalı / yoğuşturmalı" model sınıflaması (belgeler bu adla ayırmıyor; "filtre çekmeceli" ve "yoğuşturuculu modeller" denildi)
#   · evaporatör temizliği adım yapılmadı (kanatçık el yaralanma uyarısı; gövdede kılavuza yönlendirildi) · Beko kurutma makinelerine genelleme · fiyat.
# Alıntı denetim tablosu: arcelik-kurutma-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~40 dakika"
  totalTime: "PT40M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bir bez", "Ilık su", "Sirke", "Elektrikli süpürge"]
steps:
  - "Makinenin fişini çek; kurutma yeni bittiyse kapağı açıp makinenin soğumasını bekle."
  - "Lif filtresini yukarı çekerek çıkar, tüyleri al; gözeneklerde tabaka varsa ılık suyla yıka ve iyice kurutup tak."
  - "Yükleme kapağının iç yüzeylerini ve contasını yumuşak nemli bir bezle sil."
  - "Filtre çekmeceli modelde tekmeliği aç, süngeri elde yıka, elinle suyunu al ve dikkatle yerine tak."
  - "Yoğuşturuculu modelde yoğuşturucuyu çıkar, duşla yıka, suyunu süzdür ve kilitleri kapatarak yerine tak."
  - "Nem sensörünün metal yüzeylerini sirkeyle ıslatılmış yumuşak bir bezle sil ve kurula."
  - "Makinenin önündeki havalandırma ızgaralarını açık bırak, oda dar ve sıcaksa kapı ya da pencereyi aç."
  - "Çamaşırı yıkarken daha yüksek devirde sık, kurutucuyu aşırı yükleme ve bakım etiketine uygun programı seç."
faq:
  - q: "Arçelik kurutma makinesi çalışıyor ama çamaşırlar nemli çıkıyor, neden?"
    a: "Arçelik'in sorun giderme tablosu 'Kurutma sonunda çamaşırlar nemli çıkıyor.' satırında şu nedenleri sayıyor: çamaşır cinsine uygun program kullanılmamış olabilir, lif filtresinin gözenekleri tıkanmış olabilir, filtre çekmecesi (yoğuşturuculu modellerde yoğuşturucu) tıkanmış olabilir, makineye aşırı çamaşır yüklenmiş olabilir ya da çamaşırlar yeterli derecede sıkılmamış olabilir. 2772 KT kılavuzu bir not da ekliyor: kurutma sonunda çıkan sıcak çamaşırlar gerçekte olduklarından daha nemli hissedilir."
  - q: "Lif filtresini her seferinde temizlemem gerekiyor mu?"
    a: "Evet. Arçelik'in 3886 KT kılavuzuna göre her kurutma işleminden sonra lif filtresi ve yükleme kapağının iç yüzeyleri mutlaka temizlenmeli. Kılavuz ayrıca, makine bir süre kullanıldıktan sonra filtre gözeneklerinde tıkanıklığa neden olacak bir tabaka oluşabileceğini, bu tabakanın ılık suyla yıkanarak temizlenmesini ve filtrenin yerine takılmadan önce iyice kurutulmasını istiyor. Arçelik'e göre lif filtresi ve filtre çekmecesinin kirlenmesi daha uzun kurutma süresine ve daha fazla enerji harcanmasına yol açar."
  - q: "Nem sensörü nedir, ne sıklıkla temizlenir?"
    a: "Arçelik'in kılavuzuna göre makinenin içinde çamaşırın kuru olup olmadığını algılayan nem sensörleri bulunur. Tablodaki nedenlerden biri sensörde kireç tabakası oluşması. Kılavuz sensörün metal yüzeylerinin sirkeyle ıslatılmış yumuşak bir bezle silinip kurulanmasını ve bunun yılda 4 kez yapılmasını istiyor. Temizlerken metal alet kullanılmaz; yangın ve patlama tehlikesi nedeniyle çözelti maddesi, temizleme maddesi ya da benzeri maddeler de kullanılmaz."
  - q: "Kurutma sırasında çamaşır ekleyebilir miyim?"
    a: "Arçelik bunu önermiyor. Kılavuza göre kurutma işlemi başladıktan sonra çamaşır eklemek, kurumuş çamaşırların ıslak çamaşırlarla karışmasına ve işlem sonunda bazı çamaşırların nemli kalmasına neden olabilir; sık sık ekleme ya da çıkarma da program süresini uzatır ve enerji tüketimini artırır. Arçelik çamaşır eklemenin program başlamadan önce yapılmasını tavsiye ediyor."
images:
  coverAlt: "Kapağı açık bir kurutma makinesinin önünde lavabo başında ılık suyla yıkanan ince gözenekli lif filtresi ve tezgâhta katlanmış yumuşak bir bez"
---

Program bitti ama havlular hâlâ nemli ya da kurutma her seferinde biraz daha uzun sürüyor. Arçelik'in kurutma makinesi kılavuzlarındaki sorun giderme tablosunda bu şikâyetin iki ayrı satırı var: **"Kurutma işlemi uzun sürüyor."** ve **"Kurutma sonunda çamaşırlar nemli çıkıyor."** İki satırda sayılan nedenlerin neredeyse hepsi kullanıcının erişebildiği yerlerde: **lif filtresi, filtre çekmecesi ya da yoğuşturucu, nem sensörü, makinenin önündeki hava yolu ve çamaşırın kendisi.** Arçelik'in kurutucularında hava yolu modele göre farklı bir parçadan geçiyor: 3886 KT gibi modellerde tekmeliğin arkasında **filtre çekmecesi**, 2772 KT gibi modellerde **yoğuşturucu** var. Aşağıdaki sırada iki tip de ayrı ayrı anılıyor; kendi makinende hangisi olduğunu tekmeliği açınca ya da kılavuzunun bakım bölümünde görürsün.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, makine soğusun → lif filtresinin tüyünü al, gözenekler kapanmışsa ılık suyla yıka → kapak içini ve contayı sil → filtre çekmecesi süngerini ya da yoğuşturucuyu yıka → nem sensörünü sirkeli bezle sil → ızgaraların önünü aç, odayı havalandır → çamaşırı yüksek devirde sık, aşırı yükleme, doğru programı seç. Çamaşır sıcakken olduğundan nemli hissedilebilir.

## Adım adım: evde denenecekler

**1. Fişi çek, soğumasını bekle.** Arçelik'in güvenlik kuralı: **bakım ve temizlik sırasında kurutma makinesinin fişini prizden çek.** Fişi kablosundan değil, fişin kendisinden tutarak çek. Kurutma yeni bittiyse içerisi sıcaktır; kılavuz sensör temizliğinde makine hâlâ sıcaksa **soğumasını beklemeyi** istiyor.

**2. Lif filtresini temizle.** Tablodaki ilk neden: **lif filtresinin gözenekleri tıkanmış olabilir.** Yükleme kapağını aç, lif filtresini **yukarı doğru çekerek** çıkar ve aç. Tüyleri, lifleri ve pamuk topaklarını **elle ya da yumuşak bir bezle** al. Arçelik'e göre makine bir süre kullanıldıktan sonra filtrenin yüzeyinde gözenekleri tıkayan bir **tabaka** oluşabilir; bu tabakayı **ılık suyla yıkayarak** temizle ve filtreyi yerine takmadan önce **iyice kurut.** Filtrenin oturduğu yuvayı da elektrikli süpürgeyle temizleyebilirsin.

**3. Kapağın içini sil.** Arçelik lif filtresiyle birlikte **yükleme kapağının tüm iç yüzeylerinin ve contasının** yumuşak nemli bir bezle temizlenmesini istiyor. Tabloya göre kapak ve conta yüzeylerinde biriken lif, kapaktan su akmasına da yol açabiliyor.

**4. Filtre çekmecesinin süngerini yıka.** Bu adım 3886 KT gibi tekmeliğin arkasında filtre çekmecesi olan modeller içindir. Tablodaki neden: **filtre çekmecesi tıkanmış olabilir.** Tekmelik düğmesine basarak tekmeliği aç, filtre çekmecesi kapağını üzerindeki **ok yönünde** çevir ve çekmeceyi dışarı çek. **Kırmızı düğmeye** basarak çekmeceyi aç ve süngeri çıkar. Süngeri **elde yıkayarak** tüy ve liflerden arındır, ardından **elinle sıkarak** ıslaklığını al. Süngeri, kasete sıkışmaması için okla gösterilen yönde dikkatle yerleştir, çekmeceyi kırmızı düğme kilitlenecek şekilde kapat, yerine takıp kapağını ok yönünde sıkıca çevir ve tekmeliği kapat. Arçelik'in iki uyarısı var: **sünger takılmadan kurutma yapılması makineye zarar verir** ve sünger ıslaklığı azaltılmadan takılırsa hataya neden olabilir.

**5. Yoğuşturucuyu yıka.** Bu adım 2772 KT gibi yoğuşturuculu modeller içindir; bu modellerin tablosunda filtre çekmecesinin yerinde **"Yoğuşturucu tıkanmış olabilir. >>> Yoğuşturucuyu yıkayın."** satırı var. Kurutma yeni yapıldıysa kapağı açıp makinenin soğumasını bekle. Tekmeliği aç, **2 adet yoğuşturucu kapak kilidini** açıp yoğuşturucuyu dışarı çek. **Duş yardımıyla basınçlı su** uygulayarak temizle ve suyun süzülmesini bekle. Yerine yerleştir, iki kilidi kapat, **tam oturduğundan** emin ol ve tekmeliği kapat. Arçelik yoğuşturucunun **her 30 kurutmada ya da ayda bir** temizlenmesini istiyor.

**6. Nem sensörünü sil.** Tablodaki bir başka neden: **nem sensöründe kireç tabakası oluşmuş olabilir.** Makinenin içinde çamaşırın kuru olup olmadığını algılayan sensörler var. Kapağı aç, sensörün **metal yüzeylerini sirkeyle ıslatılmış yumuşak bir bezle** sil ve kurula. Arçelik bunu **yılda 4 kez** yapmanı istiyor. Metal alet kullanma; yangın ve patlama tehlikesi nedeniyle çözelti ya da temizleme maddesi de kullanma.

**7. Hava yolunu ve odayı aç.** Tablodaki iki neden kurulumla ilgili: makinenin önündeki **havalandırma ızgaraları kapalı** olabilir; önlerinde havalandırmayı engelleyen eşya varsa kaldır. Makinenin kurulduğu alan **çok küçük** olduğu için havalandırma yetersiz olabilir; Arçelik **oda sıcaklığının çok yükselmemesi için kapı ya da pencereleri açmanı** öneriyor. 3886 KT kılavuzuna göre makine **+5°C ile +35°C** arasında çalışmaya uygun ve mobilyaların kenarlarına en az 1 cm boşluk kalacak şekilde yerleştirilmeli.

**8. Çamaşırı ve programı düzelt.** Son nedenler çamaşırın kendisinde. **Çamaşırlar yeterli derecede sıkılmamış** olabilir: Arçelik çamaşır makinesinde **daha yüksek devirde sıkma** yapmanı istiyor. **Aşırı çamaşır yüklenmiş** olabilir: kılavuzdaki program tablosunda belirtilen kapasiteden fazla yükleme. **Çamaşır cinsine uygun program** seçilmemiş olabilir: bakım etiketlerine bakıp cinsine uygun programı seç, gerekirse **ilave olarak zaman programlarını** kullan. Arçelik'in enerji önerisine göre ince mutfak havlusu ve masa örtüsü kalın banyo havlusundan önce kurur; aynı cins çamaşırları birlikte kurut.

## Arıza olmayan durumlar

**Çamaşır sıcakken nemli geliyor.** 2772 KT kılavuzunun notu: kurutma sonunda çıkan **sıcak çamaşırlar gerçekte olduklarından daha nemli hissedilir.**

**Program ortasında çamaşır ekledin.** Arçelik'e göre kurutma başladıktan sonra çamaşır eklemek kurumuş çamaşırlarla ıslak çamaşırların karışmasına ve **bazı çamaşırların nemli kalmasına** neden olabilir; sık sık kapak açmak da program süresini uzatır. Kılavuz kapağın gerekmedikçe açılmamasını, çamaşır eklemenin program başlamadan önce yapılmasını istiyor.

**Program bitti, Kırışık Önleme sembolü yanıyor.** 3886 KT kılavuzuna göre program tamamlandıktan sonra çamaşırlar çıkarılmazsa 2 saat süren **Kırışık Önleme** programı devreye girer. Tablodaki çözüm: makineyi kapat ve çamaşırları çıkar.

## Kılavuzdaki ek bakım

3886 KT kılavuzu filtre çekmecesinin arkasındaki **evaporatörün kanatçıklarında** birikmiş liflerin elektrik süpürgesiyle temizlenmesini de tarif ediyor. Kılavuzun uyarısına göre kanatçıklar ele zarar verebilir; elle temizlenecekse koruyucu eldiven şart, çıplak elle denenmez. Bu bölümü modelinin kılavuzundan oku; emin değilsen yetkili servise bırak.

Paneldeki filtre ve su tankı uyarılarının anlamı için [Arçelik kurutma makinesi sembolleri ve anlamları](/blog/arcelik-kurutma-makinesi-sembolleri-ve-anlamlari/) sayfasına, markadan bağımsız bakım anlatımı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) rehberine bakabilirsin. Genel nedenler [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) yazısında; makine hiç ısıtmıyorsa [kurutma makinesi ısıtmıyor](/blog/kurutma-makinesi-isitmiyor/) yazısına geç.

## Ne zaman servis

Filtreler ve sünger ya da yoğuşturucu temiz, sensör silinmiş, ızgaraların önü açık, çamaşır iyi sıkılmış ve doğru programla yüklenmiş; buna rağmen çamaşır nemli çıkıyorsa Arçelik'in tablosu kullanıcıya başka neden göstermiyor. Kılavuzun yönlendirmesi: **bu bölümdeki talimatları uygulamana rağmen sorunu gideremezsen ürünü satın aldığın bayiye ya da Yetkili Servise başvur.** Aynı uyarının devamı: **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Filtreler, sünger, yoğuşturucu, sensör yüzeyi, havalandırma ve program seçimi kullanıcıya; makinenin içindeki ısıtma ve soğutma parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Makinende filtre çekmecesi mi, yoğuşturucu mu var?
2. Lif filtresi ve sünger ya da yoğuşturucu en son ne zaman yıkandı?
3. Hangi programı seçtin, makineye ne kadar çamaşır koydun?
4. Çamaşır makinesinde hangi devirde sıkma yaptın?
5. Panelde yanan ya da yanıp sönen bir uyarı sembolü var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
