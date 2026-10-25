---
title: "Smeg bulaşık makinesi su almıyor: musluk, hortum, filtre"
description: "Smeg bulaşık makinesi su almıyorsa: musluk ve su basıncı, bükülmüş giriş hortumu, giriş filtresi temizliği, Aquastop, E5 ve E9 alarmı. Kılavuza göre."
slug: "smeg-bulasik-makinesi-su-almiyor"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X3). origin/main b4098f8'de "smeg" slug/başlık yok; genel bulasik-makinesi-su-almiyor başka sorgu (markasız).
# Arama kanıtı (bu koşu 12:44, hl=tr gl=tr): "smeg bulaşık makinesi s" → 1. "…su almıyor"; "smeg bulaşık makinesi" → 9. "…su almıyor". GSC: satır yok.
# Hub kuralı: Smeg kod sayfası (smeg-bulasik-makinesi-hata-kodlari) ayrı; bu sayfa belirti sorgusu, başka bir sayfa karşılamıyor.
# Belge zinciri: smeg.com/tr/info/download-manuals (200; ürün kodu araması) → doc.smeg.it/qr/<id>/EN (GET 200; HEAD 405; TR 404).
#  (S1) ST4512IN · User Manual EN, 28 s., doc.smeg.it/qr/914779936/EN, md5 0334e6a480bbaa42d6dd351d029bc9e9
#  (S2) STL323BL · User instructions EN, 21 s., doc.smeg.it/qr/19293008204/EN, md5 00c487dbaba6df67355aeb95d743e41c
# Kılavuzların İngilizce baskısı; alıntılar Türkçeye çevrildi, orijinali KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: elektrovana ve su giriş ventili değişimi · Aquastop hortumunu kesme · tesisat basıncı ayarı · fiyat (#46).
# Alıntı denetimi: smeg-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Küçük bir kap ve bez"]
steps:
  - "Göstergenin kaç kez yanıp söndüğünü ya da ekrandaki kodu not et."
  - "Musluğun tamamen açık ve tıkalı olmadığını, evde suyun aktığını kontrol et."
  - "Giriş hortumu boyunca bükülme, ezilme ya da gergin çekilme olup olmadığına bak."
  - "Makinenin fişini çek, musluğu kapat ve hortum ucundaki giriş filtresini akan suyun altında temizle."
  - "Hortumu elle sıkıca geri tak, musluğu aç ve sızıntı olmadığını kontrol et."
  - "Kapağın kapalı ve gecikmenin kapalı olduğundan emin olup programı yeniden başlat."
  - "Alarm sürerse ya da Aquastop devreye girdiyse yetkili servisi ara."
faq:
  - q: "Smeg bulaşık makinesi su almıyorsa hangi alarm çıkar?"
    a: "ST4512IN gibi ekransız modellerde gösterge aralıklı olarak 1 kez yanıp sönüyor ve 1 kez sesli sinyal geliyor. STL323BL'de su girişi arızası E5, su giriş sistemi arızası E9 olarak gösteriliyor. E1 ise Aquastop arızası ve doğrudan servis gerektiriyor."
  - q: "Smeg bulaşık makinesinin su giriş filtresi nerede?"
    a: "STL323BL kılavuzuna göre filtre, giriş hortumunun musluğa bağlanan ucunda. Musluğu kapatıp hortum ucunu söküyor, filtreyi çıkarıp akan suyun altında temizliyor ve yerine takıp hortumu dikkatle geri vidalıyorsun. Aquastop'lu modellerde filtre zaten dişli halkanın içinde."
  - q: "Su basıncı ne kadar olmalı?"
    a: "ST4512IN kılavuzunun teknik bilgiler tablosunda şebeke basıncı en az 0,5 bar (0,05 MPa), en çok 10 bar (1,0 MPa). Basıncın çok düşük olup olmadığını öğrenmek için kılavuz yerel su idaresine danışmanı öneriyor."
  - q: "Program başlamıyor ama su da gelmiyor, neden olabilir?"
    a: "ST4512IN'in sorun giderme tablosuna göre program başlamıyorsa kapağın kapalı olduğuna, gecikme kuruluysa iptal edip etmediğine ya da geri sayımın bitip bitmediğine bak. Makine ayrıca su yumuşatıcısının reçinesini yeniliyor olabilir; bu yaklaşık 5 dakika sürüyor."
images:
  coverAlt: "Tezgâh altında kapağı kapalı paslanmaz bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda not defteri ve kalem"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda bulaşık makinesi, sağda kapak"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Smeg bulaşık makinen programa başlıyor ama içeriden su sesi gelmiyor, bir süre sonra da bir ışık art arda yanıp sönüp sesli uyarı veriyor. Çoğu zaman sebep makinenin dışında: musluk, hortum ya da hortumun ucundaki küçük filtre. Bu yazı Smeg'in ST4512IN ve STL323BL bulaşık makineleri için yayımladığı kullanım kılavuzlarına dayanıyor. Smeg'in Türkiye sitesindeki indirme sayfasında Türkçe dil seçeneği yok; kılavuzun İngilizce baskısını kullandık ve alıntıları Türkçeye çevirdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk açık mı, tıkalı mı? Su basıncı çok düşük mü? Giriş hortumu bükülü mü? Hortum ucundaki filtre tıkalı mı? Kapak kapalı, gecikme kapalı mı? Ekransız modelde 1 kez yanıp sönme, STL323BL'de E5 ya da E9. E1 Aquastop: servis.

## Hangi alarm su girişini gösterir

| Model | Gösterge | Kılavuzdaki anlam |
|---|---|---|
| **ST4512IN** | Gösterge 1 kez aralıklı yanıp söner, 1 sesli sinyal | Makine su almıyor |
| **ST4512IN** | 3 kez yanıp sönme | Taşma önleyici düzenek devrede |
| **STL323BL** | **E5** | Su girişi arızası |
| **STL323BL** | **E9** | Su giriş sistemi arızası |
| **STL323BL** | **E1** | Aquastop arızası (bazı modellerde) |

Kodların tam listesi [Smeg bulaşık makinesi hata kodları](/blog/smeg-bulasik-makinesi-hata-kodlari/) yazısında.

## Adım adım: Smeg bulaşık makinesi su almıyorsa

**1. Alarmı oku.** Göstergenin kaç kez yanıp söndüğünü say ya da ekrandaki kodu not et. 1 kez yanıp sönme, E5 ya da E9 su girişini gösteriyor. 3 kez yanıp sönme ya da E1 varsa sebep taşma önleyici düzenek; o durumda kılavuz önce **musluğu kapatmanı** istiyor ve doğrudan son adıma geç.

**2. Musluk ve su basıncı.** ST4512IN tablosunun sırası: **musluğun açık olduğundan emin olun**, şebeke basıncının çok düşük olmadığına bak, **musluğun tıkalı olmadığından emin olun.** Teknik tabloda basınç aralığı en az 0,5 bar, en çok 10 bar. Evde başka musluklarda da su zayıfsa sorun şebekede olabilir; kılavuz bu bilgi için yerel su idaresine danışmanı öneriyor.

**3. Giriş hortumu.** Tablonun son maddesi: **giriş hortumunda bükülme ya da kıvrılma olmadığından emin olun.** STL323BL'nin kurulum bölümü de hortumların bükülmemesini, ezilmemesini ve çok gergin çekilmemesini istiyor. Makinenin arkasında ya da dolap içinde sıkışmış bir hortum su girişini kesebilir. Hortuma ulaşmak için makineyi nişinden çıkarman gerekiyorsa bunu servise bırak.

**4. Giriş filtresini temizle.** Kılavuzun bakım bölümüne göre giriş hortumunun musluk tarafında bir filtre var. STL323BL'nin tarifi: **su musluğunu kapatın, giriş hortumunun ucunu sökün, A filtresini çıkarın ve akan suyun altında temizleyin.** Bakımdan önce makinenin fişini çek ya da sigortayı kapat. Altına küçük bir kap ve bez koy; hortumda kalan su akabilir.

**5. Geri tak ve sızıntıya bak.** Kılavuzun tarifiyle filtreyi yerine oturt ve hortumu **dikkatle geri vida**. Bağlantı elle tam oturmuyorsa ya da dişte bir sorun varsa zorlama; bu tesisatçının işi. Musluğu açıp bağlantıda sızıntı olmadığını kontrol et. Aquastop'lu modellerde filtre dişli halkanın içinde; hortumda bir elektrovana bulunduğu için kılavuz hortumu kesmemeni ve elektrovanayı suya düşürmemeni istiyor.

**6. Kapak ve gecikme.** Su sorunu sanılan bir durum da programın hiç başlamaması. ST4512IN tablosuna göre program başlamıyorsa kapağın kapalı olduğuna bak; gecikme kuruluysa iptal et ya da geri sayımın bitmesini bekle. Makine su yumuşatıcısının reçinesini yeniliyorsa yaklaşık 5 dakika beklemen gerekiyor. Ardından makineyi kapatıp aç ve programı yeniden başlat.

**7. Alarm sürerse servis.** Musluk, basınç, hortum ve filtre tamamsa ve alarm geri geliyorsa yetkili servisi ara, kodu ve model numarasını bildir. Aquastop devreye girdiyse STL323BL kılavuzu arızayı nitelikli bir teknisyenin bulup onarmasını istiyor.

## Sıcak su bağlantısı ve ilk kurulum

STL323BL kılavuzu makinenin soğuk su hattına, ¾ inç dişli bağlantıyla ve verilen A filtresi takılarak bağlanmasını anlatıyor. Sıcak suya bağlanacaksa su 60 °C'yi geçmemeli. ST4512IN tablosunda da su sıcaklığı alarmı (6 kez yanıp sönme) için gelen suyun 60 °C'yi geçmediğinden emin olman isteniyor. Kurulumun sonunda kılavuz kısa bir deneme yapmayı, musluğu açıp sızıntı olmadığını kontrol etmeyi öneriyor. Yeni kurulmuş bir makinede su gelmiyorsa ilk bakacağın yer, musluğun gerçekten açık olup olmadığı.

Markadan bağımsız genel kontrol listesi [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısında.

## Ne zaman servis

- Musluk, hortum ve filtre temizken alarm geri geliyorsa
- E1 ya da 3 kez yanıp sönme (taşma önleyici) görünüyorsa
- Makinenin altında su birikiyorsa
- Giriş hortumu hasarlıysa ya da çatlamışsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum bükülmesi ve giriş filtresi sende; elektrovana, Aquastop, su giriş ventili ve tesisat değişikliği Smeg yetkili servisinin ya da tesisatçının işi.

## Servisi aramadan önce kısa özet

1. Modelin ne (kapak kenarındaki etikette yazar)?
2. Hangi kod ya da kaç kez yanıp sönme?
3. Musluk açık mı, evde su basıncı normal mi?
4. Giriş filtresini temizledin mi?
5. Hortumda bükülme ya da hasar var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
