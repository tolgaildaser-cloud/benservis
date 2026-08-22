---
title: "Bulaşık makinesi hata kodları ne demek? (marka marka)"
description: "Bulaşık makinende E15, E24 gibi bir hata kodu mu var? Bosch, Siemens, Arçelik, Beko en sık kodların anlamı, kendin çözebileceklerin ve servis sınırı. Bil, gör, çağır."
slug: "bulasik-makinesi-hata-kodlari"
# 🚨 22 Ağu 2026 — GÜVENLİK DÜZELTMESİ (kod tablosu denetimi, TARAMA-1).
# "E15'te makineyi ~30° yana yatır, taban suyunu boşalt" tavsiyesi KALDIRILDI:
# SSS'de, images.checks alt metninde, tabloda ve numaralı listede olmak üzere dört
# yerde geçiyordu ve kontrol-03.png bu hamleyi ÇİZİYORDU. Bosch'un kendi E15 sayfası:
#   "Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi
#    öneririz. Şebeke suyunu kesin ve cihazı kapatın."
# kontrol-03 karesi yeniden çizildi (makine artık dik); png + webp yenilendi → SW v11.
# 📌 Beko/Arçelik bloğundaki "H5" notasyonu da çıkarıldı: üreticide H kodu yok,
#    su alma kodu E8. (bkz. #105 çamaşır kod ailesi düzeltmesi, aynı desen.)
date: "2026-06-19"
category: "Bulaşık makinesi"
faq:
  - q: "En sık çıkan bulaşık makinesi hata kodu hangisi?"
    a: "Bosch/Siemens'te E15 (su koruma sistemi devrede) ve E24 (pompa tıkanıklığı) en sıktır. E24 çoğu zaman evde çözülür. E15'te ise Bosch'un talimatı net ve evde denenecek bir adım içermiyor: şebeke suyunu kes, cihazı kapat ve teknisyenden randevu al. İnternette yayılan 'makineyi yana yatırıp suyu boşalt' tavsiyesi üreticinin talimatına aykırıdır."
  - q: "Bosch bulaşık E15 ne demek?"
    a: "Makinenin tabanındaki tavada su birikmiş ve taşma şamandırası (flotör) güvenliği devreye girmiştir. Genelde küçük bir sızıntı sebebidir; suyu boşaltmak hatayı geçici kapatır, kalıcı çözüm için sızıntı onarılmalıdır."
  - q: "Hata kodunu nasıl sıfırlarım?"
    a: "Çoğu modelde başlat düğmesini birkaç saniye basılı tutmak ya da makineyi fişten 1 dakika çekmek kodu sıfırlar. Arıza sürüyorsa kod tekrar çıkar."
  - q: "Kodun anlamından emin değilim?"
    a: "Kodlar model/seriye göre değişebilir. Markanı, modelini ve kodu Benservis'e yaz; olası arızayı ve tahmini maliyeti saniyede söyler."
images:
  checks:
    - "Taban filtresinin çevrilip çıkarılıp yıkanışını ve filtre hata kodunu gösteren çizim"
    - "Tahliye hortumunun bükülmemiş, düz olması gerektiğini ve tahliye hata kodunu gösteren çizim"
    - "E15 kodunda makinenin su musluğunun kapatılıp cihazın kapatılışını ve makineyi eğmemek gerektiğini gösteren çizim"
    - "Başlat tuşunun basılı tutulması ya da fişin bir dakika çekilmesiyle kodun sıfırlanışını gösteren çizim"
  coverAlt: "Bulaşık makinesi çizimi, panelinde yanıp sönen hata göstergesi ve yanında kod listesi"
---

Bulaşık makinen bir **hata kodu** gösteriyor (E15, E24, H5…) ve ne demek olduğunu çözmeye çalışıyorsun. İyi haber: en sık çıkan kodların çoğu **filtre, tahliye ve taban suyu** gibi basit sebepleri işaret eder — bir kısmı evde ücretsiz çözülür. Bu rehberde marka marka en yaygın kodları, **kendin çözebileceklerini** ve hangisinin servis işi olduğunu topladık. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ Önemli: Kodların anlamı **model ve seriye göre değişebilir**. Aşağıdakiler en yaygın anlamlardır; kesin teşhis için kılavuzuna bak ya da kodu Benservis'e yaz.

## Bosch / Siemens (E kodları)
Bu iki marka aynı platformu paylaşır; kodlar ortaktır.

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| E15 | Su koruma sistemi devrede, tabanda su | Şebeke suyunu kes, cihazı kapat, servisle konuş — **makineyi eğme** |
| E22 | Filtre tıkalı | Taban filtresini çıkar, temizle |
| E24 | Su atamıyor (tahliye) | Tahliye hortumu/filtresini kontrol et, temizle |
| E09 | Isıtıcı (rezistans) arızası | Servis (rezistans/kart) |
| E25 | Tahliye pompası tıkalı / kapağı gevşek | Pompa kapağını aç, yabancı cismi al (eldivenle) |

## Beko / Arçelik
Bu markalarda kodlar model serisine göre değişir (genelde su alma, tahliye ve ısıtma sembolleri / H kodları). En sık karşılaşılanlar:

| Belirti / Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| Su alma hatası | Makine su alamıyor | Musluğu aç, giriş filtresi/hortumu kontrol et |
| Tahliye hatası | Su atamıyor | Filtre + tahliye hortumunu temizle |
| Isıtma hatası | Su ısınmıyor | Servis (rezistans/sensör) |

> Beko/Arçelik modelinde kod yerine yanıp sönen ışık deseni de olabilir; kesin anlamı kılavuzdan ya da Benservis'ten doğrula.
>
> ⚠️ İnternette bu markalar için dolaşan **H1/H4/H5** notasyonunun üreticide karşılığı yok.

## Kendin çözebileceğin kodlar
Filtre (E22), tahliye (E24) ve taban suyu (E15) en sık ve en kolay çözülenlerdir:
1. **Filtreyi temizle** (taban filtresi).
2. **Tahliye hortumunu** kontrol et (bükük/tıkalı olmasın).
3. **E15'te:** şebeke suyunu kes ve cihazı kapat. (Bosch bu kodda evde çözüm denenmesini önermiyor.)
4. **Resetle:** başlat tuşunu basılı tut ya da fişi 1 dakika çek.

## Tahmini tamir maliyeti
Hangi işin ne kadar tuttuğunu belirleyen faktörler: [Bulaşık makinesi tamirinde fiyatı ne belirler?](/blog/bulasik-makinesi-tamiri-kac-para/)

İlgili rehberler: [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) · [Bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) · [Bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/)

## Sık sorulan sorular

**En sık çıkan kod hangisi?**
Bosch/Siemens'te E15 (taban su) ve E24 (tahliye); çoğu basit sebeptir.

**Bosch E15 ne demek?**
Tabanda su birikmiş, taşma güvenliği devrede; suyu boşalt, sızıntıyı bul.

**Kodu nasıl sıfırlarım?**
Başlat tuşunu basılı tut ya da fişi 1 dakika çek; arıza sürüyorsa kod geri gelir.

**Emin değilim?**
Markanı, modelini ve kodu Benservis'e yaz; tahmini arıza+maliyeti gör.
