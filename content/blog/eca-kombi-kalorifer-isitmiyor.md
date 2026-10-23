---
title: "ECA kombi sıcak su veriyor, petekleri ısıtmıyor"
description: "ECA kombi petekleri ısıtmıyorsa kılavuz önce ayara bakıyor: yaz modu, OFF, kalorifer sıcaklığı, oda termostatı, basınç ve radyatör vanaları."
slug: "eca-kombi-kalorifer-isitmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı. Konu seçimi (YK #179 kombi "ısıtmıyor" kümesi): origin/main'de eca-kombi-kalorifer-isitmiyor yok
#   (ECA'da yalnız eca-kombi-ariza-kodlari + E01/E03/F37/F40 tek kod sayfaları var; Baymak, Bosch, Buderus, DemirDöküm, Vaillant, Viessmann "kalorifer ısıtmıyor" var).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "eca kombi ısıtmıyor" → "eca kombi petekleri ısıtmıyor",
#   "eca kombi ısıtmıyor ne yapmalıyım", "eca kombi kalorifer ısıtmıyor", "eca proteus kombi ısıtmıyor", "eca kombi evi ısıtmıyor";
#   "eca kombi kalorifer ısıtmıyor" → "eca proteus kombi kalorifer ısıtmıyor", "eca kombi kalorifer çalışmıyor".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile ECA'nın kendi alan adı eca.com.tr'den yeniden indirildi: üçü de HTTP 200 application/pdf,
#   md5 yerel kopyalarla (kaynak-eca-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (P) E.C.A. Proteus Premix Kullanma ve Montaj Kılavuzu  https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf  48 s.  md5 28a5d7565ffbc9c1faaf1e97e45553d9
#  (C) E.C.A. Confeo Premix Kullanma ve Montaj Kılavuzu  https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf  44 s.  md5 4ef56163ac14c46f9cb1dcb9ea189681
#  (T) E.C.A. Citius Premix Kullanma ve Montaj Kılavuzu  https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf  40 s.  md5 023164f7b7cebedc931411900edd72b0
# Gaz kokusu P s.5 · konum seçme/bekleme P s.26, T s.22 · Confeo 6 no'lu yaz/kış butonu C s.24 · kalorifer sıcaklık düğmeleri P s.27, C s.24
#   · OFF modu P s.27, T s.23 · AP/kış/yaz/Eco/ASE P s.28, C s.26, T s.24 · su doldurma 1,5-2 bar P s.25 · E03 P s.29, C s.27, T s.25
#   · F37 P s.30, C s.29, T s.25 · F49 oda termostatı yalnız C s.29 · radyatör önü/vanalar P s.31 · oda termostatı montajı yetkili servis P s.24.
# BİLEREK YAZILMAYANLAR: radyatör purjöründen hava alma (kılavuzda yalnız ilk çalıştırma/doldurma bölümünde; ilk çalıştırma yetkili servis işi)
#   · oda termostatı bağlantı köprüsü/kablolama (montaj, yetkili servis) · 3 yollu vana, pompa, kart gibi parça teşhisi · "en sık neden" sıralaması
#   · reset ile kod silme yöntemi dışında hiçbir "sıfırlama hilesi" · Eco modun ısıtmayı kestiği iddiası (belgede yok) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: eca-kombi-kalorifer-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının kullanma kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, gaz kokusu olmayan bir yerden 187'yi ara."
  - "Kombinin ekranında OFF yazıyorsa kombi bekleme modundadır; konum seçme düğmesine bir kez basarak çalışma konumuna al."
  - "Ekranda yalnız musluk simgesi görünüyorsa kombi yaz modundadır; konum seçme düğmesiyle kış moduna al ve musluk ile petek simgesinin birlikte göründüğünü kontrol et."
  - "Kalorifer devresi sıcaklığı çok düşük bırakılmışsa kalorifer sıcaklık artırma düğmesiyle yükselt."
  - "Kombiye oda termostatı bağlıysa termostatın ısıtma istediğini kontrol et; istek varken kombinin ekranında petek simgesi yanıp söner."
  - "Ekrandaki basınç göstergesine bak; sistem soğukken 1,5 ile 2 bar arasında olmalı, F37 görüyorsan kılavuzdaki su doldurma adımlarını uygula."
  - "Radyatör vanalarının açık olduğunu ve radyatörlerin önünün mobilyayla kapatılmadığını kontrol et."
  - "Ayarlar doğru olduğu hâlde petekler ısınmıyorsa ya da ekranda bir E veya F kodu tekrar ediyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "ECA'nın Proteus, Confeo ve Citius Premix kılavuzlarına göre ilk bakılacak yer çalışma modu. Yaz modunda kombi yalnız kullanım suyu taleplerine cevap verir; ekranda musluk simgesi sabit görünür, petek simgesi görünmez. Kış moduna alındığında ekranda musluk ve petek simgesi birlikte görünür ve kombi kalorifer devresini de ısıtır. Mod doğruysa sırada kalorifer sıcaklık ayarı, oda termostatı, su basıncı ve radyatör vanaları var."
  - q: "ECA kombi yaz modundan kış moduna nasıl alınır?"
    a: "Proteus ve Citius Premix kılavuzlarına göre konum seçme düğmesine birer kez basarak kış ve yaz modu arasında geçiliyor. Confeo Premix'te bu iş 6 numaralı açma/kapama ve yaz/kış modu değiştirme butonunda. Kış modunda ekranda hem musluk hem petek simgesi görünür."
  - q: "Musluktan sıcak su açınca petekler soğuyor, bu arıza mı?"
    a: "Tek başına arıza işareti değil. ECA kılavuzları kış modunu şöyle tarif ediyor: kombi, kullanım suyu ihtiyacı olana kadar kalorifer devresindeki suyu ısıtır. Kullanım suyu talebi oluşunca musluk simgesi yanıp söner, petek simgesi sabit kalır. Sıcak su kapandıktan sonra ısıtma yeniden başlamıyorsa yazıdaki adımlara geç."
  - q: "ECA kombide Eco modu petekleri ısıtmayı keser mi?"
    a: "Kılavuzlarda böyle bir bilgi yok. ECA'ya göre Eco ve Comfort modları yalnız kalorifer devresi içindir ve Reset tuşuyla aralarında geçilir. Comfort modunda kombi modülasyonlu çalışıp hızlı ısıtma taleplerine cevap verir, Eco modunda on-off çalışarak yakıt tasarrufu sağlar."
  - q: "Ekranda AP yazıyor, petekler ısınmıyor; ne yapmalıyım?"
    a: "Beklemelisin. AP, kombinin merkezi ısıtma tesisatındaki havayı boşaltmak için 160 saniye boyunca otomatik uyguladığı hava tahliye modu. Kılavuz bu mod çalışırken Reset'e kesinlikle basılmamasını istiyor. AP; kombiye ilk kez elektrik verildiğinde, E03 sonrasındaki Reset'ten sonra ve F37 ya da F40 basınç hatası geçtikten sonra devreye giriyor."
  - q: "Oda termostatını kendim bağlayabilir miyim?"
    a: "Hayır. ECA kılavuzları oda termostatı, dış hava sensörü ve zamanlayıcı montajlarının E.C.A. yetkili servisi tarafından yapılmasını ve yalnız yetkili servisin uygun gördüğü termostatların kullanılmasını istiyor. Confeo Premix'te F49 kodu oda termostatı haberleşme hatasıdır; kılavuz kombiyi kapatıp açmayı, Reset'e basmayı, hata sürerse yetkili servise bildirmeyi söylüyor."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve önünde soğuk görünen beyaz bir panel radyatör"
  steps:
    - "Açık duran bir pencere ve önünde boş, sakin bir mutfak"
    - "Duvara asılı beyaz bir kombinin karanlık ekranının yakın planı"
    - "Kombi ekranında yan yana duran bir musluk simgesi ve bir petek simgesi"
    - "Kombinin kumanda panelinde yukarı ve aşağı ok biçimli sıcaklık düğmeleri"
    - "Salon duvarında asılı, ekranı boş, beyaz ve sade bir oda termostatı"
    - "Kombinin altında borular arasında duran küçük bir su doldurma vanası"
    - "Önü boş bırakılmış beyaz bir panel radyatör ve yan tarafındaki radyatör vanası"
    - "Duvardaki kombinin yanında tezgâhta duran kapalı bir alet çantası ve katlanmış bir kullanma kılavuzu"
---

Musluktan sıcak su geliyor, ama petekler soğuk. Kombi çalışıyor gibi görünüyor, sadece ısıtma yapmıyor. ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kullanma kılavuzlarında bu durumun tek bir satırı yok; ama üç kılavuz da kombinin çalışma modlarını, ekran simgelerini ve ısıtmayı ilgilendiren hata kodlarını aynı mantıkla anlatıyor. Bu yazıda, servisi çağırmadan önce evde bakabileceğin her şeyi bu üç kılavuzdan sırayla topladık. Kaynaklar üç modelin kılavuzu; senin kombinde tuş yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var, ısıtma yoksa ilk şüpheli ayar. Ekranda OFF varsa bekleme modu; yalnız musluk simgesi varsa yaz modu. Kış moduna al, kalorifer sıcaklığına bak, oda termostatı varsa ısıtma istiyor mu kontrol et. Basınç soğukken 1,5–2 bar olmalı, radyatör vanaları açık olmalı. Bunlar doğruysa E.C.A. yetkili servisi.

## Ekran ne söylüyor


| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **OFF** | Bekleme modu; kalorifer ve kullanım suyu talebi yapılmaz | 🛠️ Konum seçme düğmesine bir kez bas |
| **Yalnız musluk simgesi** | Yaz modu; yalnız kullanım suyu ısıtılır | 🛠️ Kış moduna al |
| **Musluk + petek simgesi** | Kış modu; kalorifer devresi de ısıtılır | 🛠️ Sıcaklık, termostat, basınç, vanalar |
| **Petek simgesi yanıp sönüyor** | Kalorifer devresinde ısıtma isteği var | Kombi ısıtmaya çalışıyor |
| **AP** | 160 saniyelik hava tahliye modu | ⏳ Bekle, Reset'e basma |
| **ASE** | Yıllık bakım hatırlatıcısı; ısıtma aksamaz | 🔧 Bakım için yetkili servis |
| **E03** | Aşırı sıcaklık uyarısı | 🛠️ Vanalar, sonra Reset; sürerse servis |
| **F37** | Düşük su basıncı | 🛠️ Su doldurma; sürerse servis |

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** ECA kılavuzlarının emniyet bölümü gaz kokusuyla başlıyor: kombinin ve gazla çalışan diğer cihazların gaz vanalarını kapat, ocak ve fırın gibi cihazların alevlerini söndür, kibrit ve çakmak yakma, kapı ve pencereleri açıp havalandır, elektrikli cihazların düğme ve fişlerine dokunma, daire ve bina girişindeki gaz vanalarını kapat. Gaz kokusu olan ortamda telefon kullanma; **187**'yi arayıp gaz şirketine haber ver, durumu yetkili servise bildir. Bu durumda aşağıdaki adımlara geçilmez.

**2. Ekranda OFF var mı?** Kılavuzlara göre OFF, kombinin **bekleme modu**: bu modda kalorifer ve kullanım suyu ısıtma talepleri yapılmaz. Proteus ve Citius'ta bekleme modu konum seçme düğmesine 3 saniye basılı tutularak açılıyor; çalışma konumuna dönmek için **düğmeye bir kez basmak yeterli**. Confeo'da kombi açma/kapama butonuna 5 saniye basılı tutularak kapatılıyor. Bekleme modunda bile donma koruması açık kalıyor, yani ekranın sönük olması kombinin elektriğinin kesik olduğu anlamına gelmiyor.

**3. Yaz modu mu açık?** Kılavuzlara göre yaz modunda kombi **yalnız kullanım suyu taleplerine cevap verir**; ekranda musluk simgesi sabit görünür, **petek simgesi görünmez**. Proteus ve Citius'ta konum seçme düğmesine birer kez basarak yaz ve kış modu arasında geçiliyor; Confeo'da bu iş **6 numaralı açma/kapama ve yaz/kış modu değiştirme butonunda**. Kış modunda ekranda **musluk ve petek simgesi birlikte** görünür.

**4. Kalorifer sıcaklığını kontrol et.** Kumanda panelinde kalorifer devresi için ayrı artırma ve azaltma düğmeleri var. Kılavuzlara göre radyatörlü sistemde kalorifer devre sıcaklığı **30–80 °C**, yerden ısıtmada **30–45 °C** arasında ayarlanıyor. Değer en alta indirilmişse petekler ılık bile olmayabilir; artırma düğmesiyle yükselt. Confeo'da dokunmatik kaydırmalı bir kalorifer sıcaklık ayarı da var.

**5. Oda termostatı ısıtma istiyor mu?** Kombiye oda termostatı bağlıysa kombi, termostat istemedikçe petekleri ısıtmaz. Kılavuzların kış modu tarifine göre kalorifer devresinde **ısıtma isteği oluştuğunda petek simgesi yanıp söner**. Termostatı açıp sıcaklığı yükselttiğin hâlde simge yanıp sönmüyorsa termostatın kendi kılavuzuna bak. Termostatın kablosu ya da bağlantısı senin işin değil: ECA, oda termostatı montajlarının **yetkili servis** tarafından yapılmasını istiyor. Confeo'da ekranda **F49** görürsen bu, oda termostatı haberleşme hatası; kılavuz kombiyi kapatıp açmayı, Reset'e basmayı, sürerse yetkili servise bildirmeyi söylüyor.

**6. Su basıncına bak.** Ekranda bir basınç göstergesi var. ECA kılavuzlarına göre sistem soğukken basınç **1,5–2 bar** arasında olmalı. Basınç 0,4 bara düştüğünde ekranda **F37** düşük su basıncı hatası çıkar; kılavuzun çözümü basıncı kontrol etmek, 1,5–2 bara ulaşana kadar sisteme su doldurmak (0,8 barın üzerinde kombi arızadan çıkar) ve vanaları, tesisatı kaçaklara karşı kontrol etmek. Ayrıntılı tarif [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/) yazısında. Kılavuzun uyarısı: basınç sık sık düşüyorsa sistemde su kaçağı vardır ve tesisatçı çağırmak gerekir. Basınç geri gelince ekranda **AP** yazabilir; o 160 saniye boyunca Reset'e basma.

**7. Radyatör vanaları ve önü.** ECA'nın faydalı bilgiler bölümü, radyatörlerin üstünün ve önünün mobilya benzeri şeylerle kapatılmasının sıcak hava sirkülasyonunu bozduğunu ve ortamın ısınmasını engellediğini yazıyor. Tek bir oda soğuksa önce o peteğin vanasının açık olup olmadığına bak. Ekranda **E03** aşırı sıcaklık uyarısı görürsen kılavuzun ilk iki kontrolü de vanalar: kombinin tesisat su vanalarının açık olması ve kombi kış modundaysa **en az bir radyatör vanasının açık** olması. Sonra Reset'e bas. Ayrıntılar [ECA kombi E03 hatası](/blog/eca-kombi-e03-hatasi/) yazısında.

**8. Ayarlar doğruysa servis.** Mod, sıcaklık, termostat, basınç ve vanalar doğru, yine de petekler ısınmıyorsa ev ayar turu bitmiştir. ECA kılavuzlarının her hata satırındaki son cümle aynı: sorun devam ediyor ya da tekrarlıyorsa **E.C.A. yetkili servisine haber verin.**

## Sıcak su açınca ısıtma neden duruyor

Kılavuzlar kış modunu şöyle tarif ediyor: kombi, **kullanım suyu ihtiyacı olana kadar** kalorifer devresindeki suyu ısıtır. Yani musluktan sıcak su çektiğin sırada kombi önce suya döner; ekranda musluk simgesi yanıp söner, petek simgesi sabit kalır. Banyo sırasında peteklerin kısa süre soğuması bu yüzden tek başına arıza değil. Musluk kapandıktan sonra petek simgesi yeniden yanıp sönmüyor ve petekler ısınmıyorsa yukarıdaki adımlara dön.

**Eco ve Comfort ne değiştirir?** İkisi de yalnız kalorifer devresi içindir ve Reset tuşuyla aralarında geçilir. Comfort modunda kombi modülasyonlu çalışıp hızlı ısıtma taleplerine cevap verir, Eco modunda on-off çalışarak yakıt tasarrufu sağlar. Kılavuzlarda Eco modunun ısıtmayı kestiğine dair bir bilgi yok.

## Ne zaman servis

- Mod, sıcaklık ve termostat doğru olduğu hâlde petek simgesi yanıp sönüyor ama petekler soğuk kalıyorsa
- Basınç sık sık düşüyorsa (kılavuza göre kaçak; tesisatçı)
- E03, F37 ya da başka bir kod Reset ve kontrollerden sonra geri geliyorsa
- Ekranda **F13** varsa: 1 saat içinde 5'ten fazla Reset'e basılmış demektir, çözümü doğrudan yetkili servis
- Ekranda **ASE** varsa: yıllık bakım zamanı; ısıtma aksamasa da bakım için yetkili servis

⛔ **Kendin-çöz sınırı burada biter.** Ekran, düğmeler, termostatın ayarı, basınç göstergesi ve radyatör vanaları sende; kombinin kapağının içi, gaz hattı, termostat kablosu ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Proteus, Confeo, Citius ya da başka)?
2. Ekranda OFF, yalnız musluk simgesi ya da bir kod var mı?
3. Petek simgesi yanıp sönüyor mu?
4. Basınç soğukken kaç bar?
5. Bütün odalar mı soğuk, yoksa tek bir oda mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. ECA'nın bütün kodları [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) sayfasında, marka bağımsız nedenler [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında, basınç değerleri [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasında. Bil, gör, çağır.
