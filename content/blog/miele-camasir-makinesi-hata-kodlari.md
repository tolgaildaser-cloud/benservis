---
title: "Miele çamaşır makinesi hata kodları: F 10, F 11, F 34"
description: "Miele çamaşır makinesinde süre göstergesinde F ve bir sayı dönüşümlü yanıyorsa: F 10, F 11, F 34, F 35 ve F 138 ne demek, evde ne yapılır."
slug: "miele-camasir-makinesi-hata-kodlari"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler, Miele fork'u). Dalga 4 M2 TESLIM'inde "belge var, sonraki dalgaya aday" diye bırakılan konu.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "miele çamaşır makinesi h" → 2. "miele çamaşır makinesi hata kodları". GSC: satır yok.
# Belge (#88, zincir: ürün sayfası https://www.miele.com.tr/product/12707770/nden-doldurmali-w1-camasir-makinesi-wwa120-wcs-8kg-active (tarayıcıda 200; curl 403) → sayfa altı "İndirmeler · Kullanıcı kılavuzu PDF"
#   → https://media.miele.com/downloads/86/90/01_C7F1282812F01FE090BCEF45E10E8690.pdf (curl 200, application/pdf)):
#  (W) WWA 120 WCS 8kg Active çamaşır makinesi kullanım kılavuzu tr-TR, M.-Nr. 12 710 970, 68 s., md5 -q 4c6bcd02399b440258dadec127e8b0bc — s.39, s.40, s.41, s.43, s.44, s.46
#  WWD 120 ürün sayfası sitede yok; en yakın güncel model WWA 120 seçildi. Kodlar PUA glif; s.39, s.40, s.43 pdftoppm ile görüntüye çevrilip okundu.
# Çakışma: F 11 ayrıntısı origin/main miele-camasir-makinesi-su-tahliyesi-uyarisi, F 35 ayrıntısı miele-camasir-makinesi-kapak-kilidi-nasil-acilir; bu sayfa hub, ikisine bağlanır.
# BİLEREK YAZILMAYANLAR: kodların belgede olmayan iç nedenleri · servis/test menüsü · pompa sökümü · fiyat (#46).
# Alıntı denetimi: miele-camasir-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Düz bir kap", "Kuru bez"]
steps:
  - "Süre göstergesinde F ile dönüşümlü yanan sayıyı ve yanan kontrol lambasını not et."
  - "F 34 görüyorsan kapağı yeniden sıkıca kapat ve programı tekrar başlat."
  - "F 10 görüyorsan musluğun yeterince açık olduğuna, giriş hortumunun bükülmediğine bak; su girişindeki süzgeci temizle."
  - "F 11 görüyorsan yıkama suyu filtresini ve pompayı temizle; tahliye hortumunun bir metreden yüksek olmadığını kontrol et."
  - "F 138 görüyorsan su koruma sistemi devreye girmiştir; musluğu kapat ve yetkili servisi çağır."
  - "Listede olmayan bir F kodunda makinenin elektriğini kes, en az iki dakika bekle, gücü açıp programı yeniden başlat."
  - "Kod geri gelirse tip etiketindeki model ve seri numarasını not edip Miele yetkili servisine başvur."
faq:
  - q: "Miele çamaşır makinesinde F 10 ne demek?"
    a: "Kılavuza göre su girişi engellenmiş ya da kısıtlanmış olabilir. Musluğun yeterince açık olup olmadığını, giriş hortumunun bükülüp bükülmediğini ve su basıncının çok düşük olup olmadığını kontrol etmen, gerekirse su girişindeki süzgeci temizlemen isteniyor."
  - q: "F 11 ile F 10 arasındaki fark ne?"
    a: "F 11 suyun dışarı atılamadığını, F 10 suyun içeri alınamadığını anlatıyor. İkisinde de hata kontrol lambası yanıyor ve sinyal sesi duyuluyor. F 11 için yıkama suyu filtresi ve pompası temizlenir, azami pompalama yüksekliği bir metredir."
  - q: "F 138 çıkınca ne yapmalıyım?"
    a: "Miele bu kodu su koruma sisteminin tepki vermesi olarak açıklıyor. Yapılacak iki şey var: su musluğunu kapatmak ve yetkili servisi çağırmak. Bu kodda evde başka bir onarım önerilmiyor."
  - q: "Ekranda F ve üç haneli bilinmeyen bir sayı görüyorum."
    a: "Kılavuz bunu genel bir arıza olarak veriyor: makinenin elektrik bağlantısını kes, en az iki dakika bekle, gücü aç ve programı tekrar başlat. Hata bildirimi yeniden görüntülenirse yetkili servisi çağır."
  - q: "Ekranda yalnızca -0- yanıyor, bu bir arıza mı?"
    a: "Hayır. Kılavuza göre program başladıktan sonra program seçim düğmesi başka bir konuma çevrilmiştir. Düğmeyi önceki konumuna geri çevirmen yeterli."
images:
  coverAlt: "Önden yüklemeli bir çamaşır makinesinin kumanda panelinde dijital süre göstergesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda not defteri ve kalem"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda su giriş musluğu"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Miele çamaşır makinen programı yarıda kesti, süre göstergesinde **F** harfiyle bir sayı dönüşümlü yanıyor ve sinyal sesi duyuluyor. Miele bu kodları kullanım kılavuzunun "Ne yapmalı, eğer ...?" bölümünde tek tek açıklıyor. Bu yazıda Miele'nin Türkiye sitesindeki WWA 120 ürün sayfasından indirdiğimiz kullanım kılavuzunu kullandık. Kod adları ve "ne yap" cümleleri o kılavuzdan. Senin modelin farklıysa kodu kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F 34 kapak, F 10 su girişi, F 11 su çıkışı, F 138 su koruma sistemi. F 10 ve F 11 evde çözülebilir; F 138 ve F 35 doğrudan servis. Listede olmayan kodda elektriği kes, en az iki dakika bekle, yeniden başlat.

## Kod tablosu

Kılavuz kodları "süre göstergesinde dönüşümlü olarak F ve 11 görülüyorsa" biçiminde yazıyor. Tablodaki karşılıklar WWA 120 kılavuzundan.

| Kod | Kılavuzdaki anlamı | Senin yapacağın |
|---|---|---|
| **F 34** | Kapak düzgün kapanmamış, kapak kilidi kenetlenememiş | Kapağı tekrar kapat, programı yeniden başlat |
| **F 10** | Su girişi engellenmiş veya kısıtlanmış | Musluk, giriş hortumu, su basıncı, giriş süzgeci |
| **F 11** | Su çıkışı engellenmiş veya kısıtlanmış | Yıkama suyu filtresi ve pompası, hortum yüksekliği |
| **F 138** | Su koruma sistemi tepki vermiş | Musluğu kapat, servis |
| **F 35** | Kapak kilidi bloke olmuş | Servis |
| **F ve başka sayı** | Bir arıza söz konusu | Elektriği kes, en az iki dakika bekle, yeniden başlat |
| **-0-** | Program başladıktan sonra seçim düğmesi çevrilmiş | Düğmeyi önceki konumuna getir |

Program sonunda yanan iki lamba da kod değil, hatırlatma: köpük lambası yıkamada çok köpük oluştuğunu söylüyor, bir sonraki yıkamada daha az deterjan koy. Hijyen lambası ise uzun süredir 60 °C'nin üzerinde bir program çalıştırılmadığını söylüyor; kılavuz Miele makine temizleyici ya da standart bir toz deterjanla **Pamuklu 90 °C** programını öneriyor.

## Adım adım: Miele çamaşır makinesinde hata kodu çıkınca

**1. Kodu ve lambayı not et.** Hangi sayının F ile dönüşümlü yandığına, kumanda panelindeki hata kontrol lambasının yanıp yanmadığına ve sinyal sesi olup olmadığına bak. Kılavuz F 10, F 11 ve F 138'de üçünün birlikte görüldüğünü yazıyor.

**2. F 34: kapağı yeniden kapat.** Bu kod programın hiç başlamadığı durumda çıkıyor. Miele'ye göre kapak düzgün kapanmamış ve kapak kilidi kenetlenememiş. Kapağı tekrar kapat ve programı yeniden başlat. Kılavuzun bu satırdaki son cümlesi: hata bildirimi tekrar görüntülenirse yetkili servisi çağır.

**3. F 10: su girişine bak.** Kılavuz üç kontrol sayıyor: musluk yeterli miktarda açık mı, su giriş hortumu bükülmüş mü, su basıncı çok düşük mü. Bunlar doğruysa su girişindeki süzgeç tıkanmış olabilir; Miele'nin çözümü süzgeci temizlemek.

**4. F 11: su çıkışını aç.** Su çıkışı engellenmiş ya da tahliye hortumu çok yüksekte olabilir. Kılavuz yıkama suyu filtresini ve pompasını temizlemeni istiyor ve azami pompalama yüksekliğinin **bir metre** olduğunu hatırlatıyor. Makinenin içinde çok su kalmış olabilir ve sıcak yıkamadan sonra su yakabilir; filtreyi yavaş yavaş açıp suyu bir kaba boşaltma sırası [Miele çamaşır makinesi su tahliyesi uyarısı](/blog/miele-camasir-makinesi-su-tahliyesi-uyarisi/) yazısında.

**5. F 138: musluğu kapat.** Bu kodda Miele evde onarım önermiyor. Su koruma sistemi tepki vermiştir; su musluğunu kapat ve yetkili servisi çağır.

**6. Başka bir kodda elektriği kes, iki dakika bekle.** Tabloda adı geçmeyen bir F kodu görüyorsan kılavuz bunu genel arıza sayıyor. Makinenin elektrik bağlantısını kes; fişi prizden çek ya da sigortayı kapat. Bağlantıyı yeniden yapmadan önce **en az iki dakika** bekle. Sonra gücü aç ve programı tekrar başlat.

**7. Kod geri gelirse servis.** Hata bildirimi yeniden görüntülenirse Miele yetkili servisi çağırmanı istiyor. Servis model kodunu ve seri numarasını soracak; ikisi de tip etiketinde. Kılavuza göre tip etiketi kapak açıldığında kapak camının üstünde.

## Kapakla ilgili iki kod

F 34 kapağın kapanmadığını, F 35 ise kapak kilidinin bloke olduğunu söylüyor. F 35'te Miele doğrudan servis istiyor. Programı iptal ettikten sonra süre göstergesinde çubuklar yanıp sönüyorsa bu bir arıza değil: haşlanmayı önlemek için kazan suyu 55 °C'nin üzerindeyken kapak açılmıyor, çubuklar sönene kadar bekle. Elektrik kesintisinde kapağı açma sırası [Miele çamaşır makinesi kapak kilidi nasıl açılır](/blog/miele-camasir-makinesi-kapak-kilidi-nasil-acilir/) yazısında.

## Ne zaman servis

- F 138 ya da F 35 görüyorsan
- F 10 veya F 11, kontrol ve temizlikten sonra geri geliyorsa
- Bilinmeyen F kodu, elektriği kesip iki dakika bekledikten sonra yeniden çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, giriş süzgeci ve yıkama suyu filtresi sende; su koruma sistemi, kapak kilidi ve elektronik Miele yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var, hangi lamba yanıyor?
2. Kod hangi programda ve hangi aşamada çıktı?
3. Elektriği kesip iki dakika bekledin mi?
4. Tip etiketindeki model ve seri numarası ne?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka fark etmeksizin genel kontroller [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) ve [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) sayfalarında. Bil, gör, çağır.
