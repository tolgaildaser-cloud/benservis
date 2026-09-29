---
title: "Vestel çamaşır makinesi titriyor"
description: "Vestel çamaşır makinesi titriyorsa Vestel'in kılavuzundaki sıra: nakliye vidaları, ayak ayarı, duvar boşluğu ve yük dengesi; servis sınırı."
slug: "vestel-camasir-makinesi-titriyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Beş belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200;
#   md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 5/5 birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (-f/-l).
# Web araması KULLANILMADI: belge adresleri yayındaki vestel-camasir-makinesi-e01-hatasi provenansından alındı.
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  40 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  40 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  43 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  43 s.  md5 c7607ad9886b39d7be76043a5285bfba
# "Küçük arızaların giderilmesi" tablosu — "Makineniz titreşim yapıyor." satırı beş belgede aynı (A s.30, B s.30, C s.33, D s.39, E s.33);
#   satır sınırları A s.30 sayfa görüntüsünden doğrulandı (pdftoppm): titreşim satırının beş sebebi:
#   "Makinenizin ayakları ayarlanmamış. | Makinenizin ayaklarını ayarlayın. (**)"
#   "Nakliye için uygulanan emliyet düzenekleri çıkarılmamış. | Makinenizin emniyet düzeneklerini çıkartın. (**)"
#   "Cihaz içinde az çamaşır var. | Makinenizin çalışmasını engellemez."
#   "Makinenize aşırı çamaşır konulmuş ya da çamaşırlar dengesiz yerleştirilmiş. | Makinenize önerilen çamaşır miktarından fazla çamaşır koymayın ve çamaşırlarınızı makineniz içerisine dengeli bir şekilde koyun."
#   "Makineniz sert bir yere dayanıyor. | Makinenizin sert bir yerlere dayanmasını engelleyin. Makinenizin yerleşimini yaparken duvar ya da sert yerlerden 2 cm boşluk vererek yerleştirin."
#   Tablo girişi (A s.30): "Makinenizin fişini prizden çekiniz. • Su musluğunu kapatınız." + "tüm tamiratlar yetkili servisler tarafından yapılmalıdır."
# Kurulum: nakliye vidaları + ayak ayarı A s.13 · "Makinenizi sadece yetkili servislere kurdurunuz." + nakliye vidası garanti notu A s.9 ·
#   yükleme A s.18 · gürültü/sıkma hızı A s.24 · "Sıkma işlemi yapılmıyor ya da geç başlıyor" (dengesiz yük kontrol sistemi) A s.31.
# BİLEREK YAZILMAYANLAR: amortisör/rulman/kazan/motor teşhisi (belgede yok) · nakliye vidasını kullanıcının anahtarla sökmesi talimatı
#   (Vestel kurulumu yetkili servise bırakıyor; #31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-titriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makinenin fişini prizden çek ve su musluğunu kapat."
  - "Makinenin arkasındaki nakliye emniyet vidalarının çıkarılmış olduğunu kontrol et; hâlâ takılıysa makineyi çalıştırma."
  - "Makinenin düz, kaygan olmayan ve sert bir zeminde durduğunu, altında halı olmadığını kontrol et."
  - "Plastik ayar somununu gevşet, ayakları çevirerek makineyi dengele ve somunu yeniden yukarı doğru sıkıştır."
  - "Makinenin duvara ya da sert bir yere dayanmadığından emin ol; arada 2 cm boşluk bırak."
  - "Yükün programın azami çamaşır miktarını aşmadığından emin ol ve çamaşırları dengeli dağıt."
  - "Fişi tak, musluğu aç ve programı yeniden başlat; titreşim sürerse yetkili servise başvur."
faq:
  - q: "Vestel çamaşır makinem çok titriyor, ilk neye bakmalıyım?"
    a: "Vestel'in kullanım kılavuzlarındaki küçük arızalar tablosu 'Makineniz titreşim yapıyor' başlığında beş sebep sayıyor: ayakların ayarlanmamış olması, nakliye emniyet düzeneklerinin çıkarılmamış olması, makinede az çamaşır olması, aşırı ya da dengesiz yükleme ve makinenin sert bir yere dayanması."
  - q: "Makinede az çamaşır varken titriyor, arıza mı?"
    a: "Vestel'in tablosuna göre cihaz içinde az çamaşır olması titreşim sebeplerinden biridir ve karşısındaki açıklama şudur: makinenizin çalışmasını engellemez."
  - q: "Nakliye vidalarını kendim çıkarabilir miyim?"
    a: "Vestel kılavuzları nakliye emniyet vidalarının ilk kullanımdan önce mutlaka çıkarılmasını istiyor ve vidalarla çalıştırılmış makinelerde oluşacak arızaların garanti kapsamı dışında olduğunu yazıyor. Aynı kılavuzlar makinenin yalnızca yetkili servislere kurdurulmasını istiyor. Vidalar hâlâ takılıysa makineyi çalıştırma ve kurulumu yetkili servise yaptır."
  - q: "Sıkma başlamıyor, makine çamaşırları döndürüp duruyor. Bozuldu mu?"
    a: "Vestel'e göre bu, dengesiz yük kontrol sisteminin devreye girdiğini gösterir ve bir hata değildir. Sistem çamaşırları homojen dağıtmayı dener, dağıttıktan sonra sıkmaya geçer. Bir sonraki yıkamada çamaşırları makineye dengeli yerleştirmek gerekir."
  - q: "Sıkmada ses artıyor, normal mi?"
    a: "Vestel kılavuzlarına göre gürültü seviyesi sıkma hızından etkilenir: sıkma adımında hız ne kadar yüksekse gürültü o kadar yüksek, kalan nem o kadar düşük olur."
images:
  coverAlt: "Düz, sert bir zeminde duran beyaz ön yüklemeli çamaşır makinesinin alt kısmı; ayarlanabilir ön ayaklar ve duvarla arasında bırakılmış boşluk görünüyor"
---

Makine sıkmaya geçince yerinde duramıyor, sarsılıyor ya da yürüyor. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki küçük arızalar tablosunda bu durumun ayrı bir satırı var: **"Makineniz titreşim yapıyor."** Altında sayılan beş sebebin hepsi kurulum ve yüklemeyle ilgili: **ayaklar, nakliye emniyet vidaları, az çamaşır, aşırı ya da dengesiz yük ve makinenin sert bir yere dayanması.** Bu yazıda Vestel'in sırasını, aynı kılavuzların kurulum ve yükleme bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, musluğu kapat → nakliye vidaları çıkarılmış mı → zemin düz ve sert mi → ayakları dengele → duvarla 2 cm boşluk → yükü azami miktarın altında ve dengeli koy → yeniden başlat. Az çamaşırda titreşim Vestel'e göre çalışmayı engellemez. Sürerse yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi çek, musluğu kapat.** Vestel'in küçük arızalar tablosu iki adımla başlıyor: **makinenin fişini prizden çek, su musluğunu kapat.** Makinenin çevresinde çalışmadan önce bunu yap.

**2. Nakliye vidalarına bak.** Tablodaki sebeplerden biri: **nakliye için uygulanan emniyet düzenekleri çıkarılmamış.** Vestel'e göre bu vidalar makinenin **arka tarafında** bulunur ve çamaşır makinesini çalıştırmadan önce **kesinlikle çıkarılması** gerekir. Çıkarıldıkları yerlere aksesuar torbasındaki plastik tapalar takılır. Arkada vida başı görüyorsan makineyi çalıştırma; Vestel, nakliye vidasıyla çalıştırılmış makinelerde oluşacak arızaların **garanti kapsamı dışında** olduğunu yazıyor ve makinenin **yalnızca yetkili servislere kurdurulmasını** istiyor.

**3. Zemine bak.** Vestel'in kurulum bölümüne göre makinenin sessiz ve titreşimsiz çalışması için **düz, kaygan olmayan ve sert bir zemine** oturtulması gerekir. Makineyi tabanının havalandırılmasını engelleyecek **halı ya da benzeri yüzeylerin** üzerine kurma.

**4. Ayakları dengele.** Tablodaki ilk sebep: **makinenin ayakları ayarlanmamış.** Kılavuzdaki sıra şu: **plastik ayar somununu gevşet**, ayakları çevirerek yukarı ya da aşağı ayarla, denge sağlanınca **plastik ayar somununu tekrar yukarı doğru sıkıştır.** Vestel iki uyarı ekliyor: zemindeki bozuklukları dengelemek için makinenin altına **karton, tahta ya da benzeri malzemeler kesinlikle konmaz**; zemin temizliği sırasında da ayak ayarları bozulabilir.

**5. Duvardan uzaklaştır.** Tablodaki bir sebep: **makineniz sert bir yere dayanıyor.** Vestel'in çözümü: makinenin sert yerlere dayanmasını engelle, yerleşimini yaparken **duvar ya da sert yerlerden 2 cm boşluk** bırak.

**6. Yüke bak.** Tablodaki sebep: **aşırı çamaşır konmuş ya da çamaşırlar dengesiz yerleştirilmiş.** Makineye önerilen miktardan fazla çamaşır koyma ve çamaşırları **dengeli** yerleştir. Vestel'in yükleme bölümüne göre programın **azami kuru yük kapasitesi** aşılmaz, çamaşırlar **iyi yayılmış** olarak yerleştirilir, **yorgan ve battaniye** gibi eşyalar katlanarak konur.

**7. Yeniden başlat, sürerse dur.** Fişi tak, musluğu aç ve programı yeniden başlat. Bu adımlardan sonra titreşim sürüyorsa Vestel'in kuralı açık: **makinede yapılması gereken tüm tamiratlar yetkili servisler tarafından yapılmalıdır.**

## Titreşim her zaman arıza değil

Vestel'in tablosunda iki durum özellikle "arıza yok" diye geçiyor:

- **Makinede az çamaşır var:** titreşim sebebi olarak sayılıyor ama karşısındaki açıklama **"Makinenizin çalışmasını engellemez."**
- **Sıkma yapılmıyor ya da geç başlıyor:** Vestel'e göre bu bir hata değil; **dengesiz yük kontrol sistemi** devreye girmiştir. Sistem çamaşırları homojen dağıtmayı dener, dağıttıktan sonra sıkmaya geçer. Bir sonraki yıkamada çamaşırları dengeli yerleştir.

Ses için de bir not: Vestel kılavuzlarına göre **gürültü seviyesi sıkma hızından etkilenir**; sıkma adımında hız ne kadar yüksekse gürültü o kadar yüksek, kalan nem o kadar düşük olur.

Sıkma hiç yapılmıyorsa sırayla denenecekler [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısında; markadan bağımsız ses ve titreşim sebepleri için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısına bakabilirsin.

## Sınır nerede biter

Nakliye vidaları çıkarılmış, zemin düz ve sert, ayaklar dengeli, duvarla arada boşluk var, yük uygun ve makine hâlâ sarsılıyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor: **yetkili servise başvur.** Kılavuzun genel uyarısı da aynı yönde: herhangi bir arıza durumunda önce fişi prizden çıkar ve musluğu kapat, **kendin tamir etmeye çalışma.**

⛔ **Kendin-çöz sınırı burada biter.** Zemin, ayaklar ve yükleme kullanıcıya; nakliye vidası sökümü dahil kurulum ve makinenin içi yetkili servise aittir.

Ekranda bir kod görüyorsan önce kodun anlamına bak: [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/).

## Servisi aramadan önce iki dakikalık özet

1. Titreşim yıkamada mı, yalnız sıkmada mı oluyor?
2. Makinenin arkasında nakliye vidası var mı?
3. Makine düz ve sert zeminde, ayakları dengeli mi?
4. Duvarla ya da dolapla arasında boşluk var mı?
5. Yük az mıydı, fazla mıydı, dengeli miydi?

Bu beşine cevabın varsa servise "makine titriyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
