---
title: "Panasonic klima timer ışığı yanıp sönüyor: ne yapmalı?"
description: "Panasonic klimada TIMER ışığı yanıp sönüyor ve ünite durduysa kılavuz kodu kumandadan okumayı söylüyor. Sabit yanan ve yanıp sönen ışığın farkı."
slug: "panasonic-klima-timer-isigi-yanip-soniyor"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0'da "panasonic" geçen slug/başlık/gövde yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "panasonic klima timer" → 1. panasonic klima timer ışığı yanıp sönüyor, 2. panasonic klima timer
#   arızası, 3. panasonic klima timer blinking. "panasonic klima ı" → 2. sırada aynı sorgu. GSC: panasonic satırı yok.
# Belge: Panasonic CS-TZ..ZKEW kullanım kılavuzu (TR, WEB-ACXF55-35140-TR), bu koşuda HTTP 200, md5 644a0a7789a6d5d38ed511829c6fe515.
# BİLEREK YAZILMAYANLAR: kod tablosunun tamamı (panasonic-klima-hata-kodlari sayfasında) · kart/sensör teşhisi · fiyat (#46).
#   Alıntı denetimi: panasonic-klima-timer-isigi-yanip-soniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda"]
steps:
  - "TIMER ışığının sabit mi yandığını, yanıp mı söndüğünü ve klimanın çalışıp çalışmadığını ayır."
  - "Işık sabit yanıyorsa kumandada kurulu bir zamanlayıcı olup olmadığına bak; gerekirse iptal et."
  - "Klima durmuş ve TIMER ışığı yanıp sönüyorsa kumandadan hata kontrolünü aç."
  - "Bip sesini duyana kadar ikinci düğmeye bas ve ekrandaki kodu not et."
  - "Hata kontrolünden çık, klimayı kapat ve filtrelerin temiz olduğunu kontrol et."
  - "Kodu ve klimanın modelini yetkili Panasonic servisine bildir."
faq:
  - q: "Panasonic klimada timer ışığı neden yanıp söner?"
    a: "TZ serisi kılavuzunda bu durum için tek cümle var: ünite durduysa ve ZAMANLAYICI göstergesi yanıp sönüyorsa hata kodunu almak için uzaktan kumandayı kullanın. Yani ışık, klimanın hafızaya bir hata kaydettiğini gösteriyor."
  - q: "Timer ışığı sürekli yanıyor ama klima normal çalışıyor, sorun var mı?"
    a: "Kılavuzun arıza olmayan durumlar tablosunda 'ZAMANLAYICI göstergesi sürekli aktiftir' satırı var. Sebebi, zamanlayıcı ayarlandıktan sonra ayarın her gün tekrar etmesi. Zamanlayıcıyı kullanmıyorsan kumandadan iptal et."
  - q: "Timer ışığı yanıp sönerken klimayı kapatıp açsam düzelir mi?"
    a: "Kılavuz bu durumda kapatıp açmayı değil, önce kodu okumayı ve ürünü kapatıp kodu yetkili satıcıya bildirmeyi söylüyor. Bazı hatalarda başlangıçta 4 bip duyulursa ünite kısıtlı özelliklerle çalıştırılabilir; bu geçici bir durumdur."
  - q: "Kumandam yok, kodu nasıl okurum?"
    a: "Kılavuzdaki kod okuma yöntemi kumandayla yapılıyor. Kumanda yoksa iç ünitedeki AUTO OFF/ON düğmesiyle klima otomatik modda çalıştırılabilir, ama kod okunmaz. Kumanda gelene kadar ya da servis gelene kadar klimayı zorlamamak daha doğru (çıkarım)."
images:
  coverAlt: "Yatak odası duvarında asılı beyaz bir split klima ve ön panelindeki küçük lambalar"
  steps:
    - "Klima iç ünitesinin ön yüzünde yan yana dizilmiş gösterge lambaları"
    - "Komodinin üstünde ekranı aydınlanmış beyaz bir klima kumandası"
    - "Kanatçığı kapalı, durmuş hâlde bir split klima iç ünitesi"
    - "Kumandanın yanında açık duran bir not defteri"
    - "Banyo lavabosunda durulanmış ince ağlı klima filtreleri"
    - "Masada katlanmış bir klima kullanma kılavuzu ve yanında kumanda"
---

Panasonic klimada ön paneldeki **TIMER** ışığı yanıp sönmeye başladı ve klima soğutmayı ya da ısıtmayı bıraktı. Panasonic bu ışığı iki ayrı anlamda kullanıyor: sabit yanması zamanlayıcının kurulu olduğunu, klima dururken yanıp sönmesi ise hafızada bir hata kaydı olduğunu gösteriyor. Bu yazıda farkı, Panasonic'in TZ serisi (CS-TZ..ZKEW) Türkçe kullanım kılavuzundan derledik. Kılavuz bu seriye ait; senin modelinde lamba sırası ya da düğme simgeleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** TIMER ışığı **sabit** yanıyor ve klima çalışıyorsa kurulu bir zamanlayıcı var, arıza değil. Klima **durmuş** ve ışık **yanıp sönüyorsa** kumandadan hata kodunu oku, not et, klimayı kapat ve kodu yetkili servise bildir.

## Işık ne söylüyor

Kılavuzun kumanda sayfasında iç ünitenin göstergeleri **POWER**, **TIMER** ve **nanoeX** olarak sıralanıyor.

| Gördüğün | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|
| **TIMER sabit, klima çalışıyor** | Zamanlayıcı ayarlı, her gün tekrar ediyor | Normal; istemiyorsan iptal et |
| **TIMER yanıp sönüyor, ünite durdu** | Hafızada hata kaydı var | 🛠️ Kodu kumandadan oku |
| **POWER, klima açılmadan önce yanıp sönüyor** | Zamanlayıcıya hazırlık | ⏳ Bekle |
| **POWER, ısıtmada yanıp sönüyor** | Buz çözme ya da bekleme | Ayrı yazıya bak |

## Adım adım: ışığı ayır, kodu oku

**1. Hangi durum?** Önce klimanın çalışıp çalışmadığına bak. Kılavuzdaki kod okuma bölümü yalnız bir koşulda başlıyor: **ünite durduysa ve ZAMANLAYICI göstergesi yanıp sönüyorsa**. Klima çalışıyor ve ışık sabitse bu bölüm seni ilgilendirmiyor.

**2. Sabitse zamanlayıcıya bak.** Kılavuzun "arıza değildir" tablosunda iki satır var. Birincisi: **ZAMANLAYICI göstergesi sürekli aktiftir**, çünkü zamanlayıcı ayarlandıktan sonra ayar **günlük olarak tekrarlar**. İkincisi: **GÜÇ göstergesi cihaz açılmadan önce yanıp söner**; bu, zamanlayıcı AÇIK kurulduğunda klimanın istenen sıcaklığa zamanında ulaşmak için ayarlanan saatten **35 dakikaya kadar** önce çalışmaya başlamasıyla ilgili. Kılavuza göre zamanlayıcı, kumandadaki zamanlayıcı düğmeleriyle iptal ediliyor; ayrıntı [Panasonic klima kumandası nasıl kullanılır](/blog/panasonic-klima-kumandasi-nasil-kullanilir/) yazısında.

**3. Yanıp sönüyorsa hata kontrolünü aç.** Kılavuzdaki birinci adım: kumandadaki ilgili düğmeye **5 saniye basın**. Düğmenin simgesi kılavuzda resimle gösteriliyor.

**4. Kodu not et.** İkinci adım: **bip sesini duyana kadar** ikinci düğmeye bas, sonra ekrandaki **hata kodunu not et**. H 00 çıkarsa kılavuza göre bellekte arıza yoktur. Başka bir kod çıkarsa anlamını [Panasonic klima arıza kodları](/blog/panasonic-klima-hata-kodlari/) tablosunda bulabilirsin.

**5. Çık, kapat, filtreye bak.** Üçüncü adım: hata kontrolünden çıkmak için yine **5 saniye** bas. Dördüncü adım: ürünü kapat. Kılavuzun temizlik bölümü, kirli bir ünitenin arızaya yol açabileceğini ve **H 99** kodu alınabileceğini yazıyor; filtreleri **2 haftada bir** yıkamayı öneriyor. Temizlikten önce güç kaynağını kapat ve fişi çek. Yöntem [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**6. Servise bildir.** Kılavuz son adımda **hata kodunu yetkili satıcına bildirmeni** istiyor. Bazı hatalarda klima açılırken **4 bip** duyulursa ünite **kısıtlı özelliklerle** çalıştırılabiliyor; bu servis gelene kadar geçici bir çözüm. İç ünitenin içi, dış ünite, gaz ve elektrik tarafı yetkili servisindir.

## Kumanda olmadan ne yapılır

Kılavuzun "Uzaktan kumanda yoksa veya bir arıza meydana geldiyse" bölümüne göre ön paneli kaldırıp iç ünitedeki **AUTO OFF/ON** düğmesine basarak klimayı otomatik modda çalıştırabilirsin; aynı düğmeye tekrar basmak üniteyi kapatır. Aynı bölümdeki zorla soğutma ve zorla ısıtma adımları için kılavuz açıkça **"Bu işlem servis personeli tarafından gerçekleştirilmelidir"** diyor; bunlara dokunma. Kod okuma ise yalnız kumandayla yapılıyor.

## Başka hangi ışık yanıp sönebilir

Yanıp sönen her ışık TIMER değildir; önce lambanın hangisi olduğundan emin ol. Kılavuz üç durumu daha anlatıyor. **Kablosuz LAN** göstergesi sürekli yanıp sönüyorsa ve uygulamayı kullanmak istemiyorsan, kılavuza göre kumandadaki Kablosuz LAN düğmesine basarak bu işlevi kapatabilirsin. Ünite KAPALIYKEN Kablosuz LAN göstergesinin AÇIK olması da arıza değil; ünitenin yönlendiriciyle kablosuz bağlantısı etkin demektir. **Uyku** işlemi açıldığında iç ünite göstergesinin ışığı kısılır, bu da ışık zayıfladı diye arıza sanılabilir. Göstergeler sana çok parlak ya da çok soluk geliyorsa kumandadaki ilgili düğmeye **5 saniye** basarak parlaklığı azaltabilir ya da eski hâline getirebilirsin. Bu üç durumda klima normal çalışmaya devam eder; kod okumaya gerek yoktur.

## Ne zaman servis

- Klima durdu ve TIMER ışığı yanıp sönüyorsa
- Kumandadan H 00 dışında bir kod okunduysa
- Filtre temizliğinden sonra da ışık yanıp sönmeye devam ediyorsa
- Kılavuzdaki "bakım yapılamayan durumlar" listesinden biri varsa: anormal gürültü, iç ünitenin su akıtması, sık atan sigorta, ısınan güç kablosu

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, zamanlayıcı ve filtre sende; iç ünitenin içi, kart, dış ünite ve gaz bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. İç ünitenin etiketindeki model ne?
2. Işık sabit mi, yanıp mı sönüyor?
3. Klima o sırada çalışıyor mu, durmuş mu?
4. Kumandadan hangi kod okundu?
5. Açılırken 4 bip duydun mu?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Yanıp sönen POWER ışığıysa [Panasonic klima POWER ışığı yanıp sönüyor](/blog/panasonic-klima-power-isigi-yanip-soniyor/) yazısına bak. Bil, gör, çağır.
