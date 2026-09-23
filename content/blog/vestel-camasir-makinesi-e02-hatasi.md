---
title: "Vestel çamaşır makinesi E02 hatası"
description: "Vestel çamaşır makinesi E02 hatası: Vestel'e göre su basıncı ya da kazan su seviyesi düşük. Musluk, hortum ve su giriş filtresi kontrolü adım adım."
slug: "vestel-camasir-makinesi-e02-hatasi"
date: "2026-09-22"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-22, curl ile indirildi; pdftotext -layout ile okundu. Sayfa numaraları \f sayfa ayracıyla sayıldı.
# Web araması bu koşuda HİÇ kullanılmadı: belgelerin yeri 18-20 Eyl koşularından biliniyordu, beşi de bu koşuda yeniden indirildi.
# Beş resmî Vestel kılavuzu, hepsi statik.vestel.com.tr, hepsi HTTP 200; md5'ler 20 Eyl denetimiyle 5/5 BİREBİR:
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  40 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  40 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  43 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  43 s.  md5 c7607ad9886b39d7be76043a5285bfba
# E02 satırı ("10. OTOMATİK ARIZA UYARILARI VE YAPILMASI GEREKENLER") beş belgede BİREBİR aynı (A s.32, B s.32, C s.35, D s.41, E s.35):
#   "E02 | Makinenizin su basıncı veya kazan su seviyesi düşük. | Musluğu sonuna kadar açın. Su kesik olabilir
#    kontrol edin. Hala sorun devam ediyorsa makineniz belli bir süre sonra kendiliğinden duracaktır.
#    Makinenizin fişini çekip, musluğunuzu kapatın ve yetkili servise başvurun."
# Su giriş filtreleri bölümü (7.2) beş belgede de var; "2 ayda bir temizlenmesi gerekmektedir" ifadesi 5/5.
# Su basıncı aralığı (0,1-1 Mpa) ve "0,1 Mpa = tam açılmış musluktan 1 dakikada 8 litreden fazla su" ifadesi 5/5.
# YAZILMAYANLAR: "E02 = su giriş valfi arızası" teşhisi (belgede yok) · basınç şalteri/seviye sensörü yorumu (belgede yok)
#   · valf ya da hortum DEĞİŞİMİ (#31: yalnız ücretsiz/bakım seviyesi) · süre/fiyat/parça tahmini (#46).
# Alıntı denetim tablosu: 2026-09-22-vestel-camasir-makinesi-e02-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Pense", "Küçük bir fırça", "Kuru bir bez"]
steps:
  - "Musluğu sonuna kadar aç; yarım açık bir musluk makinenin beklediği suyu vermez."
  - "Evde su kesintisi olup olmadığını başka bir musluktan kontrol et."
  - "Makinenin arkasındaki su giriş hortumunun bükülmüş ya da kıvrılmış olmadığına bak."
  - "Hata sürüyorsa makinenin fişini prizden çek ve su musluğunu kapat."
  - "Su giriş hortumunu çıkar; musluk tarafındaki filtreyi contasıyla birlikte elinle çıkarıp temizle."
  - "Su giriş valfinin ucundaki filtreyi bir pense yardımıyla çıkar, fırçayla suya tutarak iyice temizle ve çıkardığın gibi tak."
  - "Hortumu tak, musluğu tamamen açıp bağlantı yerlerinin sızdırmazlığını kontrol et ve programı yeniden başlat."
  - "E02 sürüyorsa makineyi kapat, fişini çek, musluğu kapat ve yetkili servise başvur."
faq:
  - q: "Vestel çamaşır makinesi E02 hatası ne demek?"
    a: "Vestel'in kullanım kılavuzlarındaki otomatik arıza uyarıları tablosunda E02'nin karşılığı tek cümle: makinenizin su basıncı veya kazan su seviyesi düşük. Kılavuz koda bir süre ya da parça adı bağlamıyor; yalnızca bu durumu bildiriyor."
  - q: "E02 hatasında ne yapmalıyım?"
    a: "Vestel'in tablosundaki talimat sırayla şu: musluğu sonuna kadar aç, su kesik olabilir kontrol et. Sorun sürerse makine belli bir süre sonra kendiliğinden duracaktır; bu noktada fişi çek, musluğu kapat ve yetkili servise başvur."
  - q: "Musluk açık ama E02 gitmiyor, neye bakmalıyım?"
    a: "Vestel'in küçük arızalar tablosu, makinenin su almaması için üç sebep daha sayıyor: su giriş hortumunun bükülmüş olması, hortumun tıkalı olması ve valf giriş filtresinin tıkalı olması. İlkinde hortum kontrol edilir, diğer ikisinde kılavuzun bakım bölümündeki su giriş filtreleri temizlenir."
  - q: "Su giriş filtresi nerede ve ne sıklıkla temizlenir?"
    a: "Vestel kılavuzlarına göre iki ayrı yerde filtre vardır: su giriş hortumunun musluk tarafında ve su giriş valflerinin uçlarında. Kılavuz bu filtrelerin 2 ayda bir temizlenmesini istiyor; musluk açık olduğu hâlde makine yeterince su almıyorsa da temizlenmesi gerektiğini söylüyor."
  - q: "Makinenin çalışması için su basıncı ne olmalı?"
    a: "Vestel kılavuzlarında verilen aralık 0,1 ile 1 Mpa arasıdır. Kılavuzun kendi açıklamasına göre 0,1 Mpa basınç, tam açılmış bir musluktan 1 dakikada 8 litreden fazla su akması demektir; bu aralıkta makine daha verimli çalışır."
images:
  coverAlt: "Bir lavabonun üstünde akan suyun altında küçük bir fırçayla temizlenen elek dokulu su giriş filtresi; tezgâhın kenarında sökülmüş su giriş hortumu halka yapılmış duruyor"
---

Programı seçtin, makine başladı ama kısa süre sonra durdu ve ekranda **E02** yazıyor. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki otomatik arıza uyarıları tablosunda bu kodun karşılığı tek cümledir: **"Makinenizin su basıncı veya kazan su seviyesi düşük."** Tablonun önerdiği işlem de kısadır: musluğu sonuna kadar aç, su kesik olabilir kontrol et; sorun sürerse makine bir süre sonra kendiliğinden durur, fişi çek, musluğu kapat ve yetkili servise başvur. Bu yazıda o kısa talimatı, aynı kılavuzların su bağlantısı, bakım ve küçük arıza bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E02 = Vestel'e göre su basıncı ya da kazandaki su seviyesi düşük. Sıra şu: musluğu tam aç → su kesintisi var mı bak → giriş hortumu bükülmüş mü kontrol et → fişi çek, musluğu kapat → musluk ve valf tarafındaki iki filtreyi temizle → yeniden dene. Kod sürüyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Musluğu sonuna kadar aç.** Vestel'in E02 talimatı buradan başlıyor. Yarım açık bir musluk, makinenin beklediği debiyi vermeyebilir.

**2. Su kesintisine bak.** Kılavuzun kendi ifadesi net: "su kesik olabilir kontrol edin." Mutfaktaki ya da banyodaki başka bir musluktan test et; bina genelinde bir kesinti ya da düşük basınç varsa makinede yapılacak bir şey yok.

**3. Giriş hortumunu kontrol et.** Vestel'in küçük arızalar tablosunda "makineniz su almıyor" şikâyetinin ilk sebeplerinden biri **su giriş hortumunun bükülmüş olması**. Makineyi yerinden oynatmadan arkasına bak; hortum duvarla makine arasında kıvrılmış olabilir.

**4. Makineyi güvene al.** Filtrelere bakmadan önce kılavuzun bakım bölümündeki iki uyarı zorunlu: **fişi prizden çek** ve **su musluğunu kapat**.

**5. Musluk tarafındaki filtreyi temizle.** Su giriş hortumunu çıkar. Kılavuza göre hortumun musluk tarafındaki filtre **contasıyla beraber elinle** çıkarılıp temizlenir.

**6. Valf tarafındaki filtreyi temizle.** Su giriş valflerinin üzerinde bulunan filtreler kılavuzda **bir pense yardımıyla** çıkarılıp **bir fırça ile suya tutularak** temizleniyor. Filtreleri temizledikten sonra çıkardığın gibi geri tak.

**7. Bağla ve dene.** Hortumları yerine tak, musluğu tamamen açarak bağlantı yerlerinin sızdırmazlığını kontrol et, sonra programı yeniden başlat.

**8. Hata sürüyorsa dur.** Vestel'in E02 talimatı bu noktada nettir: makine belli bir süre sonra kendiliğinden duracaktır; makinenin fişini çek, musluğu kapat ve yetkili servise başvur.

## E02 tam olarak neyi söylüyor?

Vestel kılavuzları, makinenin yıkama sırasında kendini sürekli kontrol ettiğini ve bir arıza oluştuğunda hem gerekli önlemleri alıp hem de kullanıcıyı uyaran sistemlerle donatıldığını yazıyor. E02 bu uyarıların su girişiyle ilgili olanıdır ve metni yalnızca **basıncın ya da kazandaki su seviyesinin düşük olduğunu** söyler.

Kod bir parçayı işaret etmez. Kılavuzda E02'nin karşısında "şu parça arızalı" diyen bir cümle yok; olan tek şey bir durum tespiti ve iki adımlık talimat. Bu yüzden evde yapılacak kontroller de parçaya değil, **suyun makineye kadar gelen yoluna** bakar: musluk, hortum, filtreler.

Vestel'in yayımladığı çamaşır makinesi tablosunda E02'nin yanında E01, E03 ve E04 de yer alır. Kapıyla ilgili kod için [Vestel çamaşır makinesi E01 hatası](/blog/vestel-camasir-makinesi-e01-hatasi/), tahliye tarafı için [Vestel çamaşır makinesi E03 hatası](/blog/vestel-camasir-makinesi-e03-hatasi/), kodların tamamı için [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## İki filtre, iki ayrı yer

E02'nin evde çözülebilen en yaygın tarafı burası. Vestel kılavuzuna göre makinede **iki ayrı su giriş filtresi** vardır:

- **Su giriş hortumunun musluk kısmında** bir filtre — contasıyla beraber elle çıkarılıp temizlenir.
- **Su giriş valflerinin uçlarında** bir filtre — pense ile çıkarılıp fırçayla suya tutularak temizlenir.

Kılavuzun bu filtreler için verdiği iki ölçüt var. Birincisi zamana bağlı: **2 ayda bir** temizlenmeleri gerekiyor. İkincisi belirtiye bağlı: **musluk açık olduğu hâlde makine yeterince su almıyorsa** bu filtreler temizlenmelidir. E02 ile uğraşan biri tam olarak ikinci durumdadır.

⚠️ Kılavuzun buradaki uyarısı kaydedilmeye değer: musluk suyunun kirliliğinden ya da gerekli bakım yapılmadığından dolayı su giriş valflerinin filtreleri tıkanabilir, valfler arızalanıp makine sürekli su alabilir. Vestel, bu sebeplerle oluşabilecek arızaların **garanti kapsamının dışında** olduğunu yazıyor. İki ayda bir yapılan beş dakikalık temizlik, bu yüzden yalnızca bir arıza çözümü değil.

## Basınç gerçekten düşük mü?

Vestel kılavuzlarında su bağlantısı için verilen aralık **0,1 ile 1 Mpa** arasıdır ve kılavuz bunu ölçülebilir bir cümleyle açıklıyor: **0,1 Mpa basınç, tam açılmış bir musluktan 1 dakikada 8 litreden fazla su akması demektir.**

Bu, evde manometre olmadan yapılabilecek bir kontrol. Makinenin musluğunu tamamen aç, altına litresi belli bir kova ya da büyük bir şişe tut ve bir dakika doldur. Bir dakikada 8 litreden az su geliyorsa sorun makinede değil, **tesisatın o noktaya getirdiği suda** olabilir; bu durumda filtreleri temizlemek de sonucu değiştirmez.

Makine su almama belirtisini başka markalarda da aynı sırayla veriyor; marka bağımsız kontrol listesi için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına bakabilirsin.

## Küçük arızalar tablosu ne diyor?

Vestel'in "makineniz su almıyor" satırı, E02'nin evde bakılacak tarafını dört maddede topluyor:

| Muhtemel hata | Kılavuzun giderme yöntemi |
|---|---|
| Musluğunuz kapalı | Musluğunuzu açın |
| Su giriş hortumu bükülmüş olabilir | Su giriş hortumunu kontrol edin |
| Su giriş hortumu tıkalı | Su giriş hortumunun filtrelerini temizleyin |
| Valf giriş filtresi tıkalı | Valf giriş filtrelerini temizleyin |
| Makinenin kapısı tam olarak kapalı değil | Makinenin kapısını kapatın |

Son satır şaşırtıcı görünebilir ama kılavuz kapıyı da su almama sebepleri arasında sayıyor: kapı tam kapanmazsa makine yıkamayı başlatmaz. Ekranda önce E01 gördüysen sıra oradan başlar.

## Sınır nerede biter

Musluk tam açık, su kesintisi yok, hortum düzgün, iki filtre de temiz ve E02 hâlâ geliyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor. O noktada talimat tek: makineyi kapat, **fişini çek, musluğunu kapat** ve yetkili servise başvur.

⛔ **Kendin-çöz sınırı burada biter.** Vestel, makinede yapılması gereken tüm tamiratların yetkili servislerce yapılmasını istiyor ve arıza durumunda kullanıcının **kendi tamir etmeye çalışmamasını** söylüyor. Kural basit: **musluk, hortum ve filtreler kullanıcıya; valf, basınç düzeneği ve elektronik kart servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Musluk sonuna kadar açık mı?
2. Evde su kesintisi ya da düşük basınç var mı — başka musluktan denendi mi?
3. Giriş hortumu bükülmüş ya da kıvrılmış mı?
4. Musluk tarafındaki filtre temizlendi mi?
5. Valf ucundaki filtre temizlendi mi?
6. Bir dakikada gelen su 8 litrenin üstünde mi?

Bu altısına cevabın varsa servise "makine su almıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
