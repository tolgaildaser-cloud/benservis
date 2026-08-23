---
title: "Arçelik bulaşık makinesi hata kodları: üreticinin yayımladığı beş kod"
description: "Arçelik bulaşık makinesinde E01, E02, E06, E07 ve E26 ne demek? Üreticinin listesi, E03-E05'in neden bu listede olmadığı ve servis sınırı."
slug: "arcelik-bulasik-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — TABLO BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Üreticinin yayımladığı bulaşık makinesi listesi BEŞ koddur: E01 · E02 · E06 · E07 · E26.
# Yazıdaki E03, E04, E05, E08 ve E09 bu listede YOK.
# En keskin bulgu: E03 ve E04 aslında Arçelik KOMBİ kodlarıdır —
#   E03 = baca sigortası · E04 = düşük su basıncı. Yani tablo yanlış CİHAZDAN kopyalanmış.
#   (Aynı desen çamaşırda da çıktı: kombi kodları çamaşır sayfasına taşınmıştı, bkz. #105.)
# E05 "üç yollu vana", E08 "kart hafıza", E09 "haberleşme" hiçbir üretici yayınında yok.
# Kaynak (bu koşuda tarayıcı başlık setiyle 200 çekildi):
#   arcelik.com.tr/blog/bulasik-makinesi-hata-kodlari
#   beko.com.tr/blog/bulasik-makinesi-hata-kodlari-rehberi   → ikisi BİREBİR aynı liste
# 📌 Eksik yayındı, eklendi: E07 (sürekli su alma) ve E26.
# 📌 E26 tartışmalı görünüyor ama üreticinin KENDİ metni: "15°C Üstü Kompresör Arızalı".
#    Beko'nun sayfası "kompresör veya ısı pompasında bir problem" diyor — yani ısı pompalı
#    modelleri anlatıyor. Bu nüansla yayımlandı, uydurulmadı.
# ⛔ guide ve steps DEĞİŞMEDİ — sekiz adım kod-bağımsız (musluk, filtre, pervane, gözlem).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kullanım kılavuzu", "Küçük fırça", "Kürdan", "Kuru bez"]
steps:
  - "Ekrandaki kodu yaz ve kendi makinenin kullanım kılavuzundan anlamını teyit et."
  - "Makineyi kapat, fişini çek ve su musluğunu kapat; su ile elektrikle aynı anda uğraşma."
  - "Zemine bak: makinenin önünde ya da altında ıslaklık, birikintide köpük izi var mı not et."
  - "Musluğun tam açık olduğunu, evde su olduğunu ve giriş hortumunun bükülmediğini kontrol et."
  - "Tabandaki filtreyi çıkar, fırçayla akan suda yıka ve yerine tak."
  - "Alt ve üst pervaneyi yerinden al, deliklerini kürdanla açıp akan suda durula, serbest döndüklerinden emin ol."
  - "Program sonunda kapaktan buhar çıkıyor mu, bulaşıklar sıcak mı çıkıyor gözle ve bunu not et."
  - "Fişi tak, birkaç dakika bekleyip kısa bir programla dene; aynı kod tekrar geliyorsa makineyi zorlama, kodu ve gözlemlerini servise aktar."
faq:
  - q: "Arçelik bulaşık makinesinde E01 hatası ne anlama geliyor?"
    a: "E01, taşma korumasının devreye girdiğini gösterir: makine fazla su almış ya da bir yerden sızan su şasiye inmiştir. Makine bu durumda güvenlik gereği durur ve içindeki suyu tahliye etmeye çalışır. Tek seferlik taşmadan geldiyse kuruma sonrası tekrarlamayabilir; kısa sürede yeniden geliyorsa içeride aktif sızıntı vardır ve kaynağını servisin bulması gerekir."
  - q: "E02 su kesik hatası geldiğinde ilk ne yapmalıyım?"
    a: "Önce eviyenin altındaki makine musluğunun tam açık olduğunu, sonra evde su olup olmadığını kontrol et — şebeke kesintisi bu kodun en yaygın sebebidir. Giriş hortumunun dolap içinde bükülmediğine de bak. Bu üçü temizken kod sürüyorsa giriş hattının makine tarafında bir sorun vardır ve servisin bakması gerekir."
  - q: "Makine sürekli su alıp duruyor ve E07 veriyor — tehlikeli mi?"
    a: "E07 sürekli su alma durumudur ve genelde su giriş vanası ya da akış ölçer kaynaklıdır. Makinenin güvenlik algoritması fazla suyu tahliye ederek durumu dengelemeye çalışır. Yine de hata sürüyorsa riski büyütmemek için makineyi kapatıp fişini çek ve su musluğunu kapat; bu tablo kullanıcı müdahalesiyle çözülmez, servis gerektirir."
images:
  coverAlt: "Türk mutfağında kapağı açık bulaşık makinesi ve alt sepetteki temiz tabaklar"
---

Program yarıda kesildi, makine bip'liyor ve panelde E ile başlayan bir kod var. Arçelik bulaşık makinelerinde bu kodlar arızanın adresini verir: kimi musluğu işaret eder, kimi gövdenin içini. Aradaki farkı bilmek önemli, çünkü kodların bir kısmı iki dakikalık bir kontrolle çözülürken bir kısmında yapılacak en doğru şey makineye hiç dokunmamaktır. Bu rehberde üreticinin **kendi sayfasında yayımladığı beş kodu** tek tek açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ℹ️ Kod-anlam eşleşmeleri model serisine göre değişebilir; bu liste yaygın serilerde geçerlidir. Ekrandaki kodu kendi makinenin kullanım kılavuzuyla teyit etmek her zaman en sağlamıdır.

## Adım adım: kod geldiğinde evde denenecekler

Aşağıdaki sıra, hangi kod gelirse gelsin önce denenecek **ücretsiz ve aletsiz** kontrollerdir. Kodun kendi bölümüne inmeden önce bu listeyi yürütmek, çoğu vakada telefonu eline almadan cevabı verir.

**1. Kodu yaz ve kılavuzdan teyit et.** Ekrandaki kodu bir yere not et; kod-anlam eşleşmeleri model serisine göre değiştiği için kendi makinenin kullanım kılavuzundan doğrula.

**2. Güvenliği al.** Makineyi kapat, **fişini çek ve su musluğunu kapat**. Su ve elektrikle aynı anda uğraşma.

**3. Zemini kontrol et.** Makinenin önünde ya da altında ıslaklık var mı? Birikintide köpük ya da beyaz kuruma izi var mı? Bunu not et — taşma kodlarında en değerli bilgi budur.

**4. Musluk, su ve hortum üçlüsüne bak.** Musluk tam açık mı, evde su var mı, giriş hortumu dolap içinde bükülmüş mü? Su alamama kodlarının en yaygın sebebi bu üçünden biridir.

**5. Filtreyi çıkar ve yıka.** Tabandaki filtreyi çıkar, küçük bir fırçayla akan suda temizle ve yerine tak. Tıkalı filtre hem yıkamayı hem ölçümü bozar.

**6. Pervaneleri temizle.** Alt ve üst pervaneyi elinle yerinden al, deliklerini kürdanla açıp akan suda durula, serbestçe döndüklerinden emin ol.

**7. Isıtmayı gözle.** Program sonunda kapağı açtığında buhar çıkıyor mu, bulaşıklar sıcak mı çıkıyor? Bu gözlem tek başına ısıtma tarafındaki kodları ayırt ettirir; not et.

**8. Resetleyip dene.** Fişi tak, birkaç dakika bekle ve kısa bir programla dene. Aynı kod tekrar geliyorsa makineyi zorlamayı bırak: kodu ve yukarıdaki gözlemlerini not ederek servisle konuş.

⛔ Bu listede sökme yok. Gövde içi — rezistans, sensörler, vana, akış ölçer ve elektronik kart — kullanıcı alanı değildir.

## E01 — taşma

Makine fazla su almış ya da bir yerden sızan su şasiye inmiştir; taşma koruması cihazı durdurur.

**Kendin kontrol et:** Makineyi kapat, **fişini çek** ve **su musluğunu kapat**. Zemine bak — makinenin önünde ya da altında ıslaklık var mı? Son yıkamada aşırı köpük ya da yanlış deterjan kullandıysan not et; tek seferlik taşmaların klasik sebebidir. Kod kısa sürede yeniden geliyorsa içeride aktif bir sızıntı vardır ve kaynağını servis bulmalıdır.

⛔ Şasiye inen suya ulaşmak için alt paneli sökme; orası hem elektrikli hem sulu bir bölgedir.

## E02 — su kesik

Üreticinin tanımı doğrudan: şebeke suyu kesilmiş ya da makinenin su giriş musluğu açılmamıştır.

**Kendin kontrol et:** Önce evyenin altındaki makine musluğunun **tam açık** olduğunu, sonra evde su olup olmadığını kontrol et — şebeke kesintisi bu kodun en yaygın sebebidir. Giriş hortumunun dolap içinde bükülmediğine de bak. Bu üçü temizken kod sürüyorsa giriş hattının makine tarafında bir sorun vardır.

## E06 — NTC (ısı sensörü)

Makinenin ısı sensörü arızalıdır. Belirtisi nettir: makine **düzgün ve sürekli ısıtma yapmaz**, bulaşıklar soğuk ve yağlı çıkar, deterjan tam çözülmez.

**Kendin kontrol et:** Yalnızca gözlem: program sonunda kapaktan buhar çıkıyor mu, bulaşıklar sıcak mı? Bu bilgiyi servise aktarmak teşhisi kısaltır.

⛔ Sensör ve rezistans gövdenin içindedir; ölçümü ve değişimi servis işidir.

## E07 — sürekli su alma

Makine su almayı durduramıyor. Üreticinin gösterdiği sebep **akış ölçerdeki arızadır**: akış ölçer makinedeki su miktarını ölçüp maksimum seviyeyi kontrol eder; görevini yapamayınca su girişi kesilmez.

**Kendin kontrol et:** Burada beklemek doğru değil, çünkü kontrol edilemeyen su girişi taşmaya varır. Yapılacak tek şey durumu güvenliğe almaktır: **makineyi kapat, fişini çek ve musluğu kapat.** Sonrası servis alanıdır — akış ölçer ve vana gövdenin içindedir.

## E26 — kompresör (ısı pompalı modeller)

Üreticinin tanımı: **15°C üstü kompresör arızası.** Kompresörde yeterli soğutucu akışkan olmadığında sıcaklık yükselir ve makinenin performansı düşer. Bu kod **ısı pompalı** modelleri ilgilendirir — üreticinin kendi ifadesiyle "kompresör veya ısı pompasında bir problem" işaretidir.

**Kendin kontrol et:** Bu kodda evde yapılacak bir şey yok. Üreticinin talimatı net: **makineyi durdur ve yetkili servise başvur.** Kapalı soğutucu devresi basınçlıdır; açmak da doldurmak da yetki ve ekipman ister.

## Kodların özeti

| Kod | Üreticinin karşılığı | Kendin bakılır mı |
|---|---|---|
| **E01** | Taşma | ⚠️ Fişi çek, musluğu kapat, zemini kurut; tekrarlarsa servis |
| **E02** | Su kesik | ✅ Musluk açık mı, evde su var mı, hortum bükülmüş mü |
| **E06** | NTC (ısı sensörü) arızası | ⛔ Servis |
| **E07** | Sürekli su alma | ⛔ Fişi ve musluğu kapat, servis |
| **E26** | 15°C üstü kompresör arızası (ısı pompalı modeller) | ⛔ Makineyi durdur, servis |

## Hangi noktadan sonra servis işi

Çizgi net: musluk, hortum, filtre, pervane ve iç temizlik kapak seviyesindedir ve sana aittir. Rezistans, sensörler, vana, akış ölçer ve elektronik kart gövde içindedir; hem elektrik hem su barındırır ve ölçü aleti ister. Evdeki kontrollerden sonra aynı kod ikinci-üçüncü kez geldiyse makineyi tekrar tekrar zorlamak yalnızca zaman kaybettirir — kodu ve gözlemlerini not et, öyle ara.

Markadan bağımsız genel bakış için bulaşık makinesi hata kodları rehberimizde tüm markaların listesi var. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
