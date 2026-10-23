---
title: "Immergas kombi ısıtmıyor: petekler soğuksa kontrol sırası"
description: "Immergas kombi ısıtmıyorsa kılavuzun sırası: kış modu, ısıtma sıcaklığı, kumanda ve dış sensör, petek vanaları, 1–1,2 bar, 10, 27 ve 45 kodları, servis."
slug: "immergas-kombi-isitmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork B). Konu seçimi: origin/main'de Immergas sayfası yok (slug + başlık + gövde grep'i: 0 sonuç); Dalga 3 klasörlerinde yok.
#   Genel petekler-isinmiyor marka belirtmiyor; bu yazı Immergas'ın kendi kılavuzundaki mod/ayar/kod sırası.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr; tohum yankısı sayılmadı): "immergas kombi ısı" → 1. "immergas kombi ısıtmıyor", 2. "…ısı sensörü", 3. "…ısı ayarı";
#   "immergas kombi ısıtmıyor" → 1. "…su ısıtmıyor", 2. "…petekleri ısıtmıyor", 3. "…neden ısıtmıyor".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Immergas sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi:
#  (HU) Immergas Victrix Tera 28 1 - 32 1 kezelési útmutató 1.040295 (Macarca, Immergas Macaristan alan adı), 56 s.
#       https://rendeles.immergas.hu/sites/rendeles.immergas.hu/files/Victrix-Tera-28-1_32-1-1040295_001_HU.pdf  HTTP 200 application/pdf  md5 0199fe879b56f18e6bf175715252c954
#  (TR) Immergas Türkiye "Ürün Arıza Kodlarının Tanımları" https://www.immergas.com.tr/urun-ariza-kodlari/  HTTP 200 text/html  md5 c7814f5fc62e80e219d2e318286c01e2
# HU alıntıları PAZ çevirisi (asılları KAYNAK.md'de): panel s.24 · kış modu, ısıtma ayarı, yalnız pompa, dış sensör eğrisi 0–9, AmicoV2 s.25 · 02/10/27 s.26 · 31/45/60/61 s.27
#   · 1–1,2 bar, 3 bar, sık basınç kaybı s.28 · ısıtma ayar aralığı 20–85°C s.43. Petek vanası talimatı TR sayfasından (02, 10, 45).
# BİLEREK YAZILMAYANLAR: pompa milini döndürme (60, kılavuz anlatıyor; servise bırakıldı) · pompa ve tesisat havası alma (61; servise) · su doldurma (#31) · petek hava alma adımı
#   (kılavuz yalnız 3 bar durumunda anlatıyor; SSS'de alıntı) · sensör/kart/pompa teşhisi · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Kombinin kış modunda olduğunu kontrol et; yaz ya da bekleme modundaysa mod tuşuyla kışa geç."
  - "Isıtma sıcaklığını ısıtma artırma tuşuyla yükselt ve ekranda ısıtma işaretinin yandığını kontrol et."
  - "Kombiye uzaktan kumanda bağlıysa ısıtma ayarını kumandadan kontrol et."
  - "Dış hava sensörü bağlıysa ekranda sensör işaretine bak ve ısıtma tuşlarıyla seçilen eğri değerini kontrol et."
  - "Peteklerin vanalarının açık olduğunu tek tek kontrol et."
  - "Kombi soğukken manometrenin 1 ile 1,2 bar arasını gösterdiğini kontrol et; düşükse yetkili servise haber ver."
  - "Ekranda 27 varsa reset tuşuna bir kez bas; 60 ya da 61 varsa yetkili servisi ara."
  - "Sorun sürerse modeli, kodu ve basıncı not edip Immergas yetkili servisini ara."
faq:
  - q: "Kombi çalışıyor ama brülör yanmıyor, petekler ılık. Arıza mı?"
    a: "Her zaman değil. Victrix Tera kılavuzuna göre ısıtma modunda tesisattaki su petekler için yeterince sıcaksa kombi yalnız pompayı çalıştırır, brülörü yakmaz. Ayarı biraz yükseltip ekranda alev işaretinin yanıp yanmadığına bak."
  - q: "Immergas kombide ısıtma sıcaklığı nasıl ayarlanır?"
    a: "Kış modunda paneldeki ısıtma artırma ve azaltma tuşlarıyla. Ayarlanan değer ekranda görünüyor, yanında bir seviye göstergesi var. Teknik verilere göre ayar aralığı 20–85°C. Dış hava sensörü bağlıysa aynı tuşlarla 0 ile 9 arasında bir eğri seçiliyor."
  - q: "Ekranda 31 var, kombi ısıtmıyor. Neden?"
    a: "31 uzaktan kumanda ile iletişim kaybı. Kılavuz kombinin elektriğini kesip yeniden vermeni istiyor. Kumanda yine görülmezse kombi kendi paneliyle çalışmaya geçiyor ve kılavuz bu durumda ısıtma işlevinin açılamadığını yazıyor. Kod sürüyorsa yetkili servisi ara."
  - q: "Basınç 3 bara yaklaştı. Ne yapmalıyım?"
    a: "Kılavuza göre basınç 3 bara yaklaşınca emniyet ventili açılabilir. Kılavuz bu durumda bir peteğin hava alma vanasından, basınç 1 bar civarına dönene kadar su boşaltılmasını ya da yetkili servisin çağrılmasını söylüyor. Emin değilsen servisi çağır."
  - q: "45 kodu ne demek?"
    a: "Immergas'ın listesinde 45 yüksek ΔT. Kılavuza göre kombi gidiş ve dönüş sensörleri arasındaki sıcaklık farkında ani bir artış görünce brülör gücünü kısıyor, fark normale dönünce normal çalışmaya geçiyor. Immergas petek vanalarını kontrol etmeni istiyor."
images:
  coverAlt: "Kış akşamı bir salonda pencere altındaki beyaz petek ve önünde katlı bir battaniye"
  steps:
    - "Kombi panelinde küçük simgeli bir ekran ve yanında tek bir tuş"
    - "Kombi panelinde yan yana duran iki küçük ayar tuşu"
    - "Duvarda asılı sade bir oda kumandası"
    - "Evin dış duvarında küçük beyaz bir sensör kutusu"
    - "Duvar önünde beyaz bir petek ve ucundaki küçük vana"
    - "Kombinin ön panelinde ibreli yuvarlak bir basınç göstergesi"
    - "Kombi panelinde diğerlerinden ayrı duran yuvarlak bir tuş"
    - "Tezgâhta duran bir telefon ve yanında katlanmış bir kullanma kılavuzu"
---

Hava soğudu, kombiyi açtın ama petekler soğuk ya da ancak ılık. Immergas'ın Victrix Tera 28 1 - 32 1 kılavuzunda "ısıtmıyor" diye ayrı bir arıza satırı yok. Kullanıcıya bıraktığı kontroller şunlar: kombinin modu, ısıtma ayarı, bağlıysa kumanda ve dış sensör, basınç ve ekrandaki kodlar. Petek vanaları için Immergas Türkiye'nin kod sayfasındaki talimatları kullandık. Kılavuzun Türkçesine ulaşamadık; alıntıları Macarca sürümden biz çevirdik. Senin modelin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod kış mı? Isıtma ayarı düşük mü? Kumanda ya da dış sensör bağlıysa ayar orada mı? Petek vanaları açık mı, basınç 1–1,2 bar mı? 27 görürsen bir kez reset; 10, 45, 60 ya da 61 görürsen kılavuzun dediğini yap, sürerse servis.

## Adım adım: Immergas kombi ısıtmıyorsa

**1. Kış modunu kontrol et.** Victrix Tera'da mod tuşuna her bastığında kombi bekleme, yaz ve kış modları arasında geçiyor. Kılavuza göre **yaz modunda** kombi yalnız sıcak su üretiyor, petekleri ısıtmıyor. Isıtma ve sıcak su birlikte yalnız **kış modunda** çalışıyor. Bekleme modunda yalnız donma koruması gibi koruma işlevleri açık kalıyor.

**2. Isıtma ayarını yükselt.** Kış modunda ısıtma sıcaklığı paneldeki iki ayrı tuşla artırılıp azaltılıyor. Ayarlanan değer ekranda görünüyor, yanında bir seviye göstergesi de var. Teknik verilerde ayar aralığı **20–85°C**. Panelde ısıtmanın aktif olduğunu gösteren ayrı bir işaret var. Kılavuz bir noktayı ayrıca anlatıyor: tesisattaki su petekler için yeterince sıcaksa kombi yalnız pompayı çalıştırıyor, brülörü yakmıyor. Kombi çalışıp alev yanmıyorsa ayarı biraz yükselt ve alev işaretini izle.

**3. Kumanda bağlıysa ayarı orada ara.** Kombiye AmicoV2 uzaktan kumanda bağlıysa kılavuza göre ayarlar kumandadan yapılıyor. Kombinin panelinde yalnız reset ve kapatma tuşu çalışıyor. Ekranda **31** görürsen kumanda ile iletişim kopmuş demektir. Kılavuz bu durumda kombinin elektriğini kesip yeniden vermeni istiyor. Kumanda yine görülmezse kombi kendi paneliyle çalışmaya geçiyor ve kılavuz bu durumda ısıtma işlevinin açılamadığını yazıyor. Kod sürerse servisi ara.

**4. Dış sensör bağlıysa eğriye bak.** Kombiye dış hava sensörü bağlıysa ekranda bunu gösteren bir işaret yanıyor. Kılavuza göre bu durumda peteklere giden suyun sıcaklığını dışarıdaki sıcaklığa göre sensör belirliyor. Isıtma tuşlarıyla **0 ile 9** arasında bir eğri değeri seçiliyor. Değer çok düşük seçildiyse petekler ılık kalabilir; bu bizim çıkarımımız, kılavuz ayrıca yazmıyor.

**5. Petek vanalarını kontrol et.** Immergas Türkiye'nin kod sayfası birkaç kodda aynı talimatı veriyor: **02** aşırı ısı termostatı için nedeni "tesisat ve petek vanaları" diye yazıyor, **10** ve **45** için de petek vanalarını kontrol etmeni istiyor. Kapalı bir vana o peteğin ısınmamasının en basit sebebi. Hepsini tek tek kontrol et.

**6. Basıncı oku.** Kılavuz kombi soğukken manometrenin **1 ile 1,2 bar** arasını göstermesini istiyor. Basınç düşükse Immergas listesinde **10** "tesisat basıncı yetersiz" çıkar. Kılavuz suyun kombinin altındaki musluktan eklenmesini anlatıyor. Biz bu işi yetkili servise bırakmanı öneriyoruz. Kılavuz basınç sık sık düşüyorsa servisi çağırmanı da istiyor, çünkü tesisatta kaçak olabilir. Ayrıntılar [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısında.

**7. Kodlara bak.** **27** yetersiz su sirkülasyonu. Ana devrede su yeterince dolaşmadığı için kombi aşırı ısınmış demek. Kılavuz tesisatın bir yerde kapanıp kapanmadığına bakmanı, sonra reset tuşuna basmanı söylüyor. **45** yüksek ΔT; kombi brülör gücünü kısıyor ve fark normale dönünce normal çalışıyor. **60** pompa sıkışması, **61** pompada hava. Kılavuz ikisi için de pompa üzerinde işlem tarif ediyor. Bu işi yetkili servise bırak. Bütün kodlar [Immergas kombi hata kodları](/blog/immergas-kombi-hata-kodlari/) sayfasında.

**8. Sürerse servisi ara.** Kılavuzun tablo notu, arıza sürerse Immergas yetkili servisine başvurmanı istiyor. Immergas Türkiye'nin kod sayfasında verilen numara 444 88 22.

## Bekleme modunda kombi neden arada yanıyor

Bekleme modunda kombi petekleri ısıtmaz, ama tamamen kapalı da değildir. Victrix Tera kılavuzuna göre kombinin donma koruması var: sıcaklık **4°C**'nin altına inince brülörü kendiliğinden yakıyor. Standart donma koruması **-5°C**'ye kadar koruyor. Bu yüzden bekleme modunda kısa süreli yanmalar normal. Kombiyi tuşla tamamen kapatırsan kılavuza göre güvenlik işlevleri garanti edilmiyor. Bu yüzden kışın kombiyi tamamen kapatmak yerine bekleme modunda bırakmak daha güvenli; bu son cümle bizim çıkarımımız.

## Ne zaman servis

- Kış modu, ayar ve vanalar doğru olduğu halde petekler soğuksa
- 27 bir resetten sonra geri geliyorsa
- Ekranda 60 ya da 61 varsa
- 31 elektrik kesip açtıktan sonra da sürüyorsa
- Basınç 1 barın altındaysa ya da sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Mod tuşu, ısıtma ayarı, kumanda, ekran, reset tuşu, manometre ve petek vanaları sende. Su doldurma, pompa, gaz hattı, yanma odası, sensörler ve elektronik kart yetkili servisin işi.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Mod kış mı, ısıtma ayarı kaç derece?
3. Kumanda ya da dış sensör bağlı mı?
4. Ekranda bir kod var mı?
5. Basınç soğukken kaç bar, petek vanaları açık mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Markadan bağımsız kontrol listesi [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında. Bil, gör, çağır.
