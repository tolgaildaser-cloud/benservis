---
title: "Hoover çamaşır makinesi resetleme nasıl yapılır?"
description: "Hoover çamaşır makinesinde program iptali, fişi çekip yeniden başlatma, tuş kilidi ve dil ayarı: kılavuzun anlattığı resetleme yolları adım adım."
slug: "hoover-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0 content/blog'da slug/başlık/gövde "hoover" grep 0 sonuç.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "hoover çamaşır makinesi r" → 1. resetleme, 2. resetleme nasıl yapılır, 3. rezistansı;
#   "hoover çamaşır makinesi" → 4. resetleme. GSC: satır yok.
# Belge: Hoover H3WPS294TAM6-17 kullanım kılavuzu (TR), hoover-home.com ürün sayfası → page-data.json → cloudfront PDF, bu koşuda HTTP 200,
#   md5 4d86c3b978d0d1ed45b37241e6926c27.
# BİLEREK YAZILMAYANLAR: gizli fabrika sıfırlama ya da servis menüsü tuş kombinasyonu (belgede yok) · kart teşhisi · fiyat (#46).
#   Alıntı denetimi: hoover-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ne sıfırlamak istediğine karar ver: çalışan program mı, takılan bir kod mu, kilitli tuşlar mı, yanlış dil mi."
  - "Çalışan programı iptal etmek için program seçicisini KAPALI (OFF) konumuna çevir."
  - "Kapağı açmadan önce KAPAK KİLİDİ ışığının sönmesini bekle."
  - "Bir kodda takıldıysan makineyi kapat, fişi çek, bir dakika bekle; fişi takarken düğmelere dokunmadan yeni bir program başlat."
  - "Tuşlar tepki vermiyorsa SICAKLIK SEÇME ve SIKMA HIZI SEÇME düğmelerine birlikte basıp tuş kilidini kaldır ya da makineyi kapat."
  - "Ekran yabancı dildeyse SICAKLIK SEÇME ve GECİKMELİ BAŞLATMA düğmelerine birlikte basılı tutup dili yeniden seç."
  - "Aynı sorun bu adımlardan sonra da dönüyorsa kodu not edip yetkili servise bildir."
faq:
  - q: "Hoover çamaşır makinesinde reset tuşu var mı?"
    a: "İncelediğimiz H3WPS294TAM6-17 kılavuzunda 'reset' adlı bir düğme yok. Programı iptal etmenin yolu program seçicisini KAPALI (OFF) konumuna getirmek. Bir hata kodunda ise kılavuz makineyi kapatıp fişini çekmeyi, bir dakika bekleyip yeniden başlatmayı öneriyor."
  - q: "Fişi çekip taktıktan sonra düğmeler çalışmıyor, neden?"
    a: "Kılavuz, makine sistemleri ilk saniyelerde kalibre olduğu için fişi takarken düğmelere dokunmamanı söylüyor. Dokunursan makine düzgün çalışmayabilir; bu durumda fişi çıkarıp işlemi tekrarla."
  - q: "Elektrik kesilince program baştan mı başlar?"
    a: "Kılavuza göre makine çalışırken güç kesilirse, elektrik geri geldiğinde makine kesintinin olduğu aşamanın başından itibaren tekrar başlar. Programı baştan seçmen gerekmez."
  - q: "Kapak program bitince hemen açılmıyor, arıza mı?"
    a: "Değil. Kılavuz programın bittiği ve KAPAK KİLİDİ ışığının söndüğü gösterildiğinde kapağın açılabileceğini, bazı aşamalarda kapağın yalnızca su seviyesi düşük ve sıcaklık 45 °C altındayken açıldığını yazıyor. Işığın sönmesini bekle."
images:
  coverAlt: "Önden yüklemeli bir çamaşır makinesinin döner program seçicisi ve dokunmatik düğmeleri"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Hoover çamaşır makinen bir programda takıldı, tuşlar tepki vermiyor ya da ekran birden İngilizce konuşmaya başladı. Akla ilk gelen "resetleme" oluyor. Hoover'ın H3WPS294TAM6-17 modeline ait Türkçe kullanım kılavuzunda "reset" adlı bir düğme yok; ama programı iptal etmenin, bir koddan sonra makineyi yeniden başlatmanın, tuş kilidini kaldırmanın ve dili sıfırlamanın yollarını ayrı ayrı anlatıyor. Bu yazıda bunları sırayla topladık. Kılavuz bu modele ait; senin makinende düğme adları ve yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Programı iptal etmek için seçiciyi KAPALI (OFF) konumuna çevir. Bir kodda takıldıysan kapat, fişi çek, bir dakika bekle, yeniden başlat. Fişi takarken düğmelere dokunma. Tuş kilidi ve dil için iki düğmeye birlikte basılır. Sorun dönüyorsa servis.

## Hangi "reset" sana lazım

| Durum | Kılavuzdaki yol |
|---|---|
| **Program yanlış seçildi ya da iptal edilecek** | Seçiciyi KAPALI (OFF) konumuna getir |
| **Makine bir kodda durdu** | Kapat, fişi çek, bir dakika bekle, yeniden başlat |
| **Tuşlar çalışmıyor** | Tuş kilidini kaldır ya da makineyi kapat |
| **Ekran yanlış dilde** | Dil değiştirme kombinasyonu |
| **Elektrik kesildi** | Makine kesintinin olduğu aşamanın başından devam eder |

## Adım adım: makineyi sıfırlamak

**1. Neyi sıfırlayacağını belirle.** "Reset" diye aradığın şey çoğu zaman dört ayrı durumdan biri: çalışan programı durdurmak, bir hata kodundan çıkmak, kilitlenmiş tuşları açmak ya da yanlış seçilmiş dili düzeltmek. Hangisi olduğunu bilmek, gereksiz yere fiş çekip programı yarıda bırakmanı önler. Ekranda bir kod varsa önce onu not et; ekransız modelde ışıkların kaç kez yanıp söndüğünü say. Kılavuza göre ekransız modellerde tüm ışıklar hata numarası kadar yanıp söner, sonra 5 saniye durur.

**2. Programı iptal et.** Kılavuzun "Ayarlanan programı iptal etme" başlığı tek cümle: **programı iptal etmek için program seçicisini KAPALI (OFF) konumuna getirin.** Gecikmeli başlatmayı da aynı şekilde, seçiciyi KAPALI konumuna getirerek iptal edebilirsin. Programı yalnız durdurmak istiyorsan BAŞLAT/DURAKLAT düğmesine bas; tekrar bastığında program kaldığı aşamadan devam eder.

**3. Kapak kilidi ışığını bekle.** Kılavuz kapağı açmadan önce **KAPAK KİLİDİ ışığının söndüğünden emin olmanı** istiyor. Güvenlik nedeniyle bazı aşamalarda kapak yalnız su seviyesi alt kenarın altındayken ve sıcaklık 45 °C'den düşükken açılır. Işık sönmeden kapağı zorlama. Kapak uzun süre açılmıyorsa [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bak.

**4. Koddan sonra yeniden başlat.** Hata tablosunun "diğer kodlar" satırı şöyle: **çamaşır makinesini kapatın ve fişini çekin, bir dakika bekleyin. Makineyi açın ve bir program başlatın.** Fişi geri takarken bir noktaya dikkat et: kılavuz, makine sistemleri **ilk saniyelerde kalibre ettiği için fişi takarken düğmelere dokunmamanı** söylüyor. Dokunursan makine düzgün çalışmayabilir; o zaman fişi çıkarıp işlemi tekrarla. Kodların anlamı [Hoover çamaşır makinesi hata kodları](/blog/hoover-camasir-makinesi-hata-kodlari/) yazısında.

**5. Tuş kilidini kaldır.** Düğmeler hiç tepki vermiyorsa çocuk kilidi açık olabilir. Kılavuza göre **SICAKLIK SEÇME ve SIKMA HIZI SEÇME düğmelerine aynı anda 3 saniye basıldığında** tuşlar kilitlenir ve panelde tuş kilidi göstergesi yanar. Kilit, **bu iki düğmeye tekrar aynı anda basarak ya da cihaz kapatılarak** iptal edilir.

**6. Dili sıfırla.** Ekran yabancı dildeyse kılavuzun tarifi: **SICAKLIK SEÇME ve GECİKMELİ BAŞLATMA düğmelerine aynı anda 5 saniye bas.** Ekranda ENGLISH görünür; SICAKLIK SEÇME ya da SIKMA HIZI SEÇME düğmeleriyle yeni dili bul ve BAŞLAT/DURAKLAT ile onayla.

**7. Dönüyorsa servis.** Aynı kod fişi çekip bekledikten sonra da geliyorsa kılavuzun son cümlesi geçerli: hata tekrar meydana gelirse Yetkili Müşteri Hizmetleri Merkezi ile iletişime geç. Bunun ötesinde bir gizli sıfırlama tuşu kombinasyonu kılavuzda yok; internette dolaşan servis menüsü tariflerini deneme.

## Elektrik kesilirse ne olur

Kılavuza göre makine çalışırken güç kaynağında bir kesinti olursa, güç geri geldiğinde makine **güç kaybolduğunda olduğu aşamanın başlangıcından itibaren** tekrar başlar. Yani kısa bir kesintiden sonra programı yeniden seçmek zorunda değilsin. Wi-Fi özellikli modellerde seçici UZAKTAN KONTROL konumundayken panel tuşları devre dışı kalır; kılavuz seçiciyi başka bir konuma çevirince panelin tekrar çalışacağını yazıyor. Tuşlar tepki vermiyorsa önce seçicinin hangi konumda olduğuna bak.

## Ne zaman servis

- Fişi çekip bekledikten sonra aynı kod geri geliyorsa
- Seçici KAPALI konumdayken bile ekran ya da ışıklar sönmüyorsa
- Tuş kilidi kalktığı hâlde düğmeler çalışmıyorsa
- Sigorta makineyi her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Seçici, düğmeler, fiş ve kapak sende; kart, kablo bağlantıları, rezistans ve kasanın içi yetkili servisin. Kılavuz da makineyi kendi başına tamir etmemeni yazıyor.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (tip etiketinde yazar)?
2. Ekranda hangi kod ya da hangi ışık var?
3. Fişi çekip bir dakika bekledin mi?
4. Tuş kilidi göstergesi yanıyor mu?
5. Sorun hangi program ve aşamada başlıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Işıklar yanıp sönüyorsa [çamaşır makinesi ışık yanıp sönüyor](/blog/camasir-makinesi-isik-yanip-sonuyor/) yazısına da bak. Bil, gör, çağır.
