---
title: "Süpürge çalışmıyor: açma tuşuna basınca hiçbir şey olmuyorsa"
description: "Süpürge hiç açılmıyorsa önce ücretsiz eleme: priz, kablo sarma, termik koruma ve tıkanıklık. Anahtar onarımının neden servis işi olduğu da burada."
slug: "supurge-calismiyor"
date: "2026-08-23"
category: "Süpürge"
# 23 Ağu 2026 — YENİ YAZI (YK #31, seçenek c).
# Sebep: "açılmıyor" / "anahtar" / "düğme" sorgusu bugüne kadar iFixit'in İngilizce,
# Moderate, 13 adımlık "Arızalı açma/kapama anahtarı onarımı" rehberine düşüyordu —
# yani gövde sökümü + ŞEBEKE BESLEME ANAHTARINA elektriksel müdahale. Kendi yazımız
# yoktu; şimdi var ve anahtarlar buraya bağlandı.
# ⛔ YK #31 sınırı: bu yazı onarım tarif etmez. Adımların tamamı priz, kablo, filtre ve
#    gözlem seviyesindedir; gövde açma, vida, kablo ve anahtar müdahalesi YOKTUR.
# 📌 "açılmıyor" anahtarı bilerek geniş bırakıldı: kullanıcı bu kelimeyi kullanıyor ve
#    artık iFixit'e değil buraya geliyor.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Başka bir çalışan cihaz (prizi test etmek için)"]
steps:
  - "Prizi başka bir cihazla test et. Şarjı biten bir telefon adaptörü ya da lamba yeterli; priz ölüyse süpürgede sorun yok demektir."
  - "Sigorta panosuna bak. Bir sigorta düşmüşse kaldır; tekrar düşüyorsa süpürgeyi bir daha takma ve servisle konuş."
  - "Kabloyu boydan boya gözden geçir. Ezilme, kesik, yanık iz ya da fişin dibinde sertleşme var mı bak; kabloyu çekiştirerek değil, elinle kaydırarak kontrol et."
  - "Kabloyu sonuna kadar çek ve tekrar sar. Otomatik sarmalı modellerde kablo yarım kalınca iç kontak tam oturmayabilir; bir kez tamamen çekip bırakmak bunu düzeltir."
  - "Şarjlı modelde şarj göstergesini kontrol et. Cihazı doğrudan adaptöre bağlayıp göstergenin yanıp yanmadığına bak; gösterge hiç yanmıyorsa sorun süpürgede değil adaptörde olabilir."
  - "Termik koruma ihtimalini ele. Süpürge kısa süre önce zorlanarak ya da tıkalı hâlde çalıştıysa koruma devreye girmiş olabilir; fişi çek ve en az yarım saat soğumaya bırak."
  - "Soğuma sonrası hazneyi, filtreleri ve hortumu temizle. Tıkalı hava akışı korumanın tekrar devreye girmesine yol açar; temizlemeden yeniden denemek aynı yere çıkar."
  - "Tekrar dene ve sonucu not et. Hâlâ hiç açılmıyorsa, hangi adımların denendiğini ve cihazın en son ne yaparken durduğunu yazıp servisle konuş."
faq:
  - q: "Süpürge hiç açılmıyorsa ilk ne yapmalıyım?"
    a: "Cihazı suçlamadan önce prizi test et. Başka bir cihazı aynı prize takmak beş saniye sürer ve vakaların küçümsenmeyecek bir kısmını daha baştan kapatır. Priz çalışıyorsa sırada sigorta panosu, ardından kablo ve fişin gözle kontrolü var. Bunların hepsi ücretsiz ve tamamen kullanıcı seviyesidir."
  - q: "Süpürge çalışırken durdu ve bir daha açılmıyor, ne oldu?"
    a: "Bu tablo genelde termik korumayı işaret eder. Elektrikli süpürgelerde motorun aşırı ısınmasını önleyen bir koruma vardır; hava akışı tıkandığında motor kendini soğutamaz ve koruma cihazı keser. Fişi çekip en az yarım saat soğumaya bırak, sonra hazneyi, filtreleri ve hortumu temizle. Temizlemeden yeniden denemek aynı sonuca çıkar, çünkü tıkanıklık duruyorsa koruma tekrar devreye girer."
  - q: "Açma düğmesi arızalıysa kendim tamir edebilir miyim?"
    a: "Hayır, bu yazıda onarım tarif etmiyoruz. Açma-kapama anahtarı, cihazın şebeke beslemesinin geçtiği noktadır ve ona ulaşmak gövdenin sökülmesini gerektirir. Yani hem elektrik riski taşır hem de yanlış müdahale basit bir anahtar işini kart arızasına çevirebilir. Ayrıca cihazın hiç açılmaması her zaman anahtar demek değildir: kablo, sarma mekanizmasındaki kontak, termik koruma ve motor da aynı belirtiyi verir."
  - q: "Şarjlı süpürgemde hiçbir ışık yanmıyor, pil mi bitti?"
    a: "Öyle olabilir ama önce adaptörü ele. Cihazı doğrudan adaptöre bağla ve şarj göstergesinin yanıp yanmadığına bak. Gösterge hiç yanmıyorsa sorun cihazda değil adaptörde ya da prizde olabilir. Gösterge yanıyor ama cihaz uzun şarjdan sonra da çalışmıyorsa pil paketi ömrünü tamamlamış olabilir; pil değişimi servis işidir."
images:
  coverAlt: "Elektrikli süpürge çizimi, sönük güç düğmesi ve prizden ayrı duran fiş"
---

Fişi taktın, ayağınla açma tuşuna bastın — hiçbir şey olmadı. Ses yok, ışık yok, tıkırtı bile yok.

> ⚠️ **Baştan söyleyelim: bu iş uzmanlık gerektirir.**
>
> Aşağıdaki adımlar cihazı **tamir etmez** — sorunun süpürgenin dışında mı (priz, sigorta, kablo) yoksa içinde mi olduğunu **ücretsiz olarak eler**. Açma-kapama anahtarı **cihazın şebeke beslemesinin geçtiği noktadır** ve ona ulaşmak gövdenin sökülmesini gerektirir; bu yazıda onarım tarif etmiyoruz ve tarif eden kaynaklara da yönlendirmiyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

## "Hiç açılmıyor" tek bir arıza değil

Aynı belirtinin arkasında birbirinden çok farklı durumlar olabilir ve bunların bir kısmı **cihazla hiç ilgili değil**:

| Kaynak | Nerede |
|---|---|
| Priz ya da sigorta | 🛠️ Cihazın **dışında** — ücretsiz elenir |
| Kablo ya da fiş hasarı | 🛠️ Gözle görülür — ücretsiz elenir |
| Kablo sarma mekanizmasındaki kontak | 🛠️ Kabloyu tam çekip sarmak çoğu zaman çözer |
| Termik koruma devrede | 🛠️ Soğutma + temizlik ile açılır |
| Açma-kapama anahtarı | 🔧 Gövde içi, şebeke besleme hattı |
| Motor ya da elektronik | 🔧 Gövde içi |

Bu listenin **ilk dördü** senin alanın ve hiçbiri alet gerektirmiyor. Alttaki ikisi servise ait. Aşağıdaki eleme tam olarak bu ayrımı yapmak için var.

## Adım adım: ücretsiz eleme

**1. Prizi başka bir cihazla test et.** Bir telefon adaptörü ya da lamba yeterli. Priz ölüyse süpürgede sorun yok demektir — ve bu, vakaların küçümsenmeyecek bir kısmıdır.

**2. Sigorta panosuna bak.** Bir sigorta düşmüşse kaldır.
⚠️ Sigorta **tekrar düşüyorsa** süpürgeyi bir daha takma. Bu, cihazda gerçek bir elektriksel sorun olduğunun işaretidir ve zorlamak tehlikelidir.

**3. Kabloyu boydan boya gözden geçir.** Ezilme, kesik, yanık iz ya da **fişin dibinde sertleşme** var mı bak. Kabloyu çekiştirerek değil, elinle kaydırarak kontrol et. Fiş dibindeki yorulma en sık gözden kaçan noktadır.

**4. Kabloyu sonuna kadar çek ve tekrar sar.** Otomatik sarmalı modellerde kablo yarım kalınca iç kontak tam oturmayabilir; bir kez **tamamen** çekip bırakmak bunu düzeltir. Basit ama işe yarayan bir adım.

**5. Şarjlı modelde göstergeye bak.** Cihazı doğrudan adaptöre bağla ve şarj göstergesinin yanıp yanmadığını kontrol et. Gösterge hiç yanmıyorsa sorun cihazda değil **adaptörde** olabilir.

**6. Termik koruma ihtimalini ele.** Süpürge kısa süre önce **zorlanarak ya da tıkalı hâlde** çalıştıysa koruma devreye girmiş olabilir. Fişi çek ve **en az yarım saat** soğumaya bırak.

**7. Soğuma sonrası hazneyi, filtreleri ve hortumu temizle.** Bu adım atlanırsa yukarıdaki bekleme boşa gider: tıkanıklık duruyorsa koruma tekrar devreye girer. Ayrıntılı temizlik için [süpürge çekmiyor](/blog/supurge-cekmiyor/) ve [süpürge hortumu tıkandı](/blog/supurge-hortumu-tikandi/) yazıları.

**8. Tekrar dene ve sonucu not et.** Hâlâ hiç açılmıyorsa hangi adımların denendiğini ve cihazın **en son ne yaparken durduğunu** yaz.

## Termik koruma: arıza değil, koruma

Bu ayrım kullanıcılar için genelde sürpriz olur. Elektrikli süpürgelerde motorun aşırı ısınmasını önleyen bir koruma bulunur. Hava akışı tıkandığında — dolu hazne, kirli filtre, tıkalı hortum — motor kendini **soğutamaz**, çünkü onu soğutan şey zaten çektiği havadır.

Koruma devreye girdiğinde cihaz aniden susar ve tekrar açılmaz. Bu bir **arıza değil**, cihazın kendini kurtarmasıdır.

**Kendin kontrol et:** Cihaz "çalışırken durdu ve bir daha açılmadı" tablosundaysa önce bu ihtimali ele. Soğutma + temizlik adımı, bu vakada gerçekten çözüm üretir.

⚠️ Korumayı tekrar tekrar tetiklemek motoru yıpratır. Süpürge soğuduktan sonra açılıyor ama kısa sürede yine kesiyorsa, temizlenmesi gereken bir tıkanıklık duruyor demektir.

## Neden anahtar işi servise ait?

⛔ **Açma-kapama anahtarı, şebeke beslemesinin cihaza girdiği noktadır.** Ona ulaşmak gövdenin açılmasını gerektirir; orada fiş takılı olmasa bile dikkat isteyen bir hat vardır ve yanlış müdahale, basit bir anahtar işini kart arızasına çevirebilir.

Bir de teşhis meselesi var: **cihazın hiç açılmaması her zaman anahtar demek değildir.** Kablo, sarma mekanizmasındaki kontak, termik koruma ve motor da aynı belirtiyi verir. Hangisi olduğu gövde açılıp ölçüm yapılarak belirlenir.

Yukarıdaki sekiz adımı yaptıysan, servise "hiç açılmıyor" değil şunu söyleyebilirsin: *"priz çalışıyor, sigorta sağlam, kablo gözle temiz, kabloyu tam sardım, yarım saat soğuttum ve filtreleri temizledim — yine hiç açılmıyor."* Bu cümle, teşhisi yarı yarıya bitirir.

## Tahmini tamir maliyeti

Cihazın belirtisine göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı servisi ara.

İlgili: [Süpürge çekmiyor](/blog/supurge-cekmiyor/) · [Süpürge hortumu tıkandı](/blog/supurge-hortumu-tikandi/)

## Sık sorulan sorular

**İlk ne yapmalıyım?**
Prizi başka bir cihazla test et; beş saniye sürer ve vakaların bir kısmını daha baştan kapatır.

**Çalışırken durdu, bir daha açılmıyor?**
Büyük ihtimalle termik koruma. Fişi çek, yarım saat soğut, sonra hazne-filtre-hortumu temizle.

**Düğmeyi kendim tamir edebilir miyim?**
Hayır. Anahtar şebeke besleme hattındadır ve belirtinin kaynağı da ölçümle belirlenir.

**Şarjlımda hiç ışık yanmıyor?**
Önce adaptörü ele: cihazı doğrudan bağlayıp göstergenin yanıp yanmadığına bak.
