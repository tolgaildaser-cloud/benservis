---
title: "Siemens fırın hava üflüyor: fan süresi ayarı"
description: "Siemens fırında kapağın üstünden gelen hava soğutma fanıdır; kapattıktan sonra da çalışır. Ek çalışma süresini temel ayarlardan kısaltma ve servis sınırı."
slug: "siemens-firin-hava-ufluyor"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork C). Konu seçimi: origin/main'de siemens-firin-hava-ufluyor yok.
#   Yakın slug'lar: siemens-firin-kapagi-acilmiyor (kilit/çocuk emniyeti), bosch-firin-hava-ufluyor (bu dalgada, Bosch; aynı BSH paragrafı, bu yazı Siemens'e
#   özgü "soğutma fanı ilave çalışma süresi" temel ayarı ve HB976GM'nin kapak davranışı üzerine kuruldu).
# GSC: bu sorgu için gösterim yok (https___www-3…6).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "siemens fırın hava" → 1. "siemens fırın hava üflüyor", 2. "…soğuk hava üflüyor",
#   3. "…dışarı hava üflüyor"; tohum "siemens fırın ha" → 2. "…hava üflüyor"; tohum "siemens fırın so" → 1. "…soğuk üflüyor".
# Belgeler: yerel kopyalar blog-taslaklar/kaynak-firin-3eki/ (3 Eki 2026, curl -sL -A "Mozilla/5.0", HTTP 200, media3.bsh-group.com; dl.log).
#   md5 bu koşuda yeniden alındı, MD5-2026-10-03 ile aynı. #88: forum/servis sitesi kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (J) Siemens HB557JY..T ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001661370_H.pdf  md5 9ebc5c6a23a82faef58b1153062bf463
#  (B) Siemens HB012FB.1T ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001944586_C.pdf  md5 7b49a4cce1f1740c675dba04081dc900
#  (M) Siemens HB976GM.1 ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002029846_B.pdf  md5 21906424cc4a8f5ca70eae9b869c27f2
# Soğutma fanı J s.8, B s.7, M s.7-8 · artık nem, ilave süre, nemli yiyecekte daha uzun M s.8 · kapak açılınca durur M s.8 / devam eder J s.8
#   · temel ayar listesi J s.12, M s.18 · temel ayar değiştirme J s.13, M s.19 · elektrik kesintisinde fabrikaya dönüş J s.13, M s.19
#   · kapanmıyor satırı J s.20, B s.17 · elektronik hatası J s.20 · hata kodu M s.31 · arka panel fanı J s.6-7, M s.8.
# BİLEREK YAZILMAYANLAR: "soğuk hava" açıklaması (kılavuzlarda yok) · ilave sürelerin dakika değeri (belgede yok) · fan motoru/termostat/kart teşhisi
#   · ankastre montaj değişikliği · HB012FB'de temel ayar menüsü olduğu iddiası (bu belgede ilave süre ayarı bulunmadı) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: siemens-firin-hava-ufluyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (soğuma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu"]
steps:
  - "Havanın kapağın üst kısmından dışarı çıktığını kontrol et; Siemens'e göre bu, sıcaklığa göre açılıp kapanan soğutma fanıdır."
  - "Fırını kapattıktan sonra fan çalışmaya devam ediyorsa bekle; fan cihazı soğutur, artık nemi giderir ve cihaz soğuyunca kendiliğinden kapanır."
  - "Süre dolduğu hâlde lamba ve fan kapanmıyorsa fonksiyon seçme düğmesini sıfır konumuna çevir."
  - "Kapaktaki havalandırma yarıklarının önünü boşalt; yarıkların üzeri örtülürse cihaz aşırı ısınır."
  - "Fanın ek çalışma süresi sana uzun geliyorsa fırın kapalıyken temel ayarlara gir ve soğutma fanı ilave çalışma süresini daha kısa bir seçeneğe al."
  - "Elektrik kesintisinden sonra fan yine uzun çalışıyorsa temel ayarlara tekrar bak; kesinti sonrasında temel ayarlar fabrika ayarına döner."
  - "Ekranda bir hata kodu görünüyorsa cihazı kapatıp aç; kod yeniden çıkarsa Siemens müşteri hizmetlerine kodu eksiksiz bildir."
faq:
  - q: "Siemens fırın kapattıktan sonra neden hava üflemeye devam ediyor?"
    a: "Siemens HB976GM kılavuzuna göre soğutma fanı, çalışma tamamlandıktan sonra cihazı soğutmak ve pişirme bölümündeki artık nemi gidermek için belirli bir süre daha çalışır. HB557JY ve HB012FB kılavuzları da fanın hızlı soğuma için çalıştığını ve cihaz soğuduktan sonra otomatik olarak kapandığını yazıyor."
  - q: "Soğutma fanının çalışma süresini kısaltabilir miyim?"
    a: "Bazı modellerde evet. HB557JY'nin temel ayarlarında 'Soğutma fanı ilave çalışma süresi' için kısa, orta, uzun ve ekstra uzun seçenekleri var; fabrika ayarı uzun. HB976GM'de 'Fan ilave çalışma süresi' asgari, önerilen, uzun ve çok uzun olarak seçiliyor; fabrika ayarı önerilen. Kılavuzlar dakika değeri vermiyor."
  - q: "Fan süresini uzatmak ne zaman iyi olur?"
    a: "HB976GM kılavuzu, sık sık çok nemli yiyecekler hazırlıyorsan ya da yemeği pişirme bölümünde sıcak tutuyorsan daha uzun bir ilave çalışma süresi ayarlamanı öneriyor. Fanın görevlerinden biri pişirme bölümündeki artık nemi gidermek."
  - q: "Kapağı açınca fırın neden durdu?"
    a: "HB976GM kılavuzuna göre bu modelde çalışma sırasında kapak açılınca çalışma durur, kapak kapanınca otomatik olarak devam eder. HB557JY kılavuzunda ise kapak açıldığında çalışma devam ediyor. Kendi modelinin kılavuzuna bak."
  - q: "Ayarladığım fan süresi kendiliğinden değişti, neden?"
    a: "HB557JY ve HB976GM kılavuzlarına göre bir elektrik kesintisinden sonra temel ayarlar fabrika ayarlarına geri döner. Kesintiden sonra fan süresini yeniden seçmen gerekebilir."
images:
  coverAlt: "Mutfak dolabına göz hizasında yerleştirilmiş, kapağı kapalı ankastre bir fırın"
  steps:
    - "Ankastre fırının kapağı ile kumanda paneli arasındaki ince yatay havalandırma aralığı"
    - "Işığı sönmüş, kapağı kapalı, pişirme sonrası soğumaya bırakılmış bir fırın"
    - "Fırın kumanda panelinde kapalı konuma çevrilmiş yuvarlak bir seçim düğmesi"
    - "Önü tamamen boş bırakılmış bir fırın kapağı ve kapak kolunda asılı hiçbir şey olmayan görüntü"
    - "Fırının dokunmatik ekranında açılmış sade bir ayarlar menüsü"
    - "Mutfakta sigorta kutusunun kapağı ve yanında duran sönük bir fırın ekranı"
    - "Fırın ekranının yanında tezgâhta duran bir not kâğıdı ve kalem"
---

Fırını kapattın, yemeği çıkardın, ama kapağın üstünden hâlâ hava geliyor ve fan sesi dakikalarca sürüyor. Siemens'in HB557JY, HB012FB ve HB976GM kullanım kılavuzlarına göre bu sesin sahibi **soğutma fanı** ve çoğu durumda tam olarak yapması gerekeni yapıyor. Siemens'i ayıran nokta şu: bazı modellerde fanın kapattıktan sonra ne kadar çalışacağını **temel ayarlardan seçebiliyorsun**. Bu yazıda fanın davranışını, ayarını ve servis sınırını bu üç kılavuzdan topladık. Menüler modele göre değişiyor; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapağın üstünden çıkan hava soğutma fanıdır; fırın kapandıktan sonra cihazı soğutmak ve içerideki nemi atmak için çalışır, soğuyunca kendi durur. Lamba ve fan kapanmıyorsa düğme sıfırda değildir. Süre uzun geliyorsa temel ayarlardan kısalt. Yarıkları örtme. Hata kodu tekrarlıyorsa servis.

## Siemens'te fan nasıl çalışır


| Durum | Kılavuza göre | Ne yapılır |
|---|---|---|
| Pişirirken kapağın üstünden sıcak hava | Soğutma fanı, cihaz sıcaklığına göre açılıp kapanır | Normal |
| Fırın kapandı, fan sürüyor | Soğutma ve artık nemi giderme | ⏳ Bekle ya da süreyi ayarla |
| Süre doldu, lamba ve fan açık | Fonksiyon seçme düğmesi sıfırda değil | 🛠️ Düğmeyi sıfıra çevir |
| Fan süresi değişti | Elektrik kesintisinde temel ayarlar fabrikaya döner | 🛠️ Ayarı yeniden yap |
| Ekranda örn. E0111 | Elektronik sistem bir hata tespit etti | 🛠️ Kapat-aç; tekrarsa servis |

## Adım adım: fanı anlamak ve ayarlamak

**1. Kaynağı gör.** Siemens'in üç kılavuzunda da aynı tanım var: **soğutma fanı, cihaz sıcaklığına göre devreye girer ve devre dışı kalır; sıcak hava kapağın üzerinden dışarı çıkar.** Pişirme sırasında yüzüne doğru gelen ılık ya da sıcak hava bu yüzden beklenen bir şey. Pişirme bölümünün içinde de ayrı bir fan var: 4D ya da 3D sıcak hava gibi türlerde **arka paneldeki ısıtıcının ısısını** pişirme bölümüne eşit dağıtır. Bu iç fan dışarı hava vermez.

**2. Kapattıktan sonra bekle.** HB976GM kılavuzu fanın neden kapattıktan sonra da döndüğünü açıkça yazıyor: soğutma fanı, çalışma tamamlandıktan sonra **cihazı soğutmak ve pişirme bölümündeki artık nemi gidermek için** belirli bir süre daha çalışır. HB557JY ve HB012FB'nin arıza tablolarına göre **cihaz soğuduktan sonra soğutma fanı otomatik olarak kapanır.** Kılavuzlarda bu süre dakika olarak verilmiyor.

**3. Düğmeyi sıfırla.** HB557JY ve HB012FB'de bir satır daha var: **cihaz süre dolduktan sonra tamamen kapanmıyor.** Cihaz bir süre sonra ısınmayı durduruyor, ama fırın lambası ve soğutma fanı kapanmıyor; sıcak hava türlerinde arka paneldeki fan da dönmeye devam ediyor. Çözüm **fonksiyon seçme düğmesini sıfır konumuna çevirmek.** Cihaz, lamba ve arka panel fanı kapanır; soğutma fanı soğuyunca durur.

**4. Yarıkları açık bırak.** HB976GM'nin uyarısı: **havalandırma deliklerinin kapatılması cihazın aşırı ısınmasına neden olur.** HB557JY ve HB012FB aynı şeyi kapaktaki havalandırma yarıkları için söylüyor ve yarıkların açık bırakılmasını istiyor. Kapak koluna asılan havlu ya da önüne dayanan bir eşya soğutma havasının yolunu keser.

**5. Fan süresini kısalt ya da uzat.** HB557JY'nin temel ayarlar tablosunda **"Soğutma fanı ilave çalışma süresi"** için dört seçenek var: **kısa, orta, uzun, ekstra uzun**; fabrika ayarı uzun. Değiştirmek için cihaz kapalıyken kılavuzdaki tuşu **yaklaşık 4 saniye** basılı tut, ekranda ilk temel ayar görününce ilerle, değeri değiştir ve kaydetmek için tuşu yine yaklaşık 4 saniye basılı tut. HB976GM'de ayar **"Fan ilave çalışma süresi"** adıyla; seçenekler **asgari, önerilen, uzun, çok uzun**, fabrika ayarı önerilen. Bu modelde ekranın durum satırındaki ayar simgesinden temel ayarlara girilip istenen seçime basılıyor. Kılavuz bir öneri de yapıyor: **sık sık çok nemli yiyecekler** hazırlıyor ya da yemeği fırında **sıcak tutuyorsan** daha uzun bir süre seç. HB012FB kılavuzunda bu ayarı bulamadık; o modelde fan cihaz soğuyunca kendiliğinden durur.

**6. Kesintiden sonra ayarı kontrol et.** HB557JY ve HB976GM kılavuzlarına göre **bir elektrik kesintisinden sonra temel ayarlar fabrika ayarlarına geri döner.** Fanı kısa süreye aldıysan ve bir kesintiden sonra yine uzun çalışıyorsa sebep büyük ihtimalle bu; ayarı yeniden yap.

**7. Hata kodu varsa.** HB976GM'de ekranda harf ve rakamlardan oluşan bir kod (örneğin **E0111**) elektronik sistemin bir hata tespit ettiğini gösterir. Kılavuzun sırası: **cihazı kapatıp tekrar aç**; arıza bir defalıksa mesaj kaybolur. Mesaj yeniden görünürse müşteri hizmetlerini ara ve hata mesajını eksiksiz bildir. HB557JY'de elektronik hatası için kılavuzun önerisi, sigortayı kapatarak cihazı **en az 30 saniye** elektrik şebekesinden ayırmak ve temel ayarları fabrika ayarlarına döndürmek.

## Kapak açılınca ne olur

Modeller arasında küçük ama kafa karıştıran bir fark var. HB557JY kılavuzuna göre çalışma sırasında kapağı açarsan **çalışma devam eder**. HB976GM'de ise kapak açılınca **çalışma durur**, kapağı kapatınca otomatik olarak devam eder. Kapağı açınca fanın ya da ısıtmanın kesilmesi bu modelde arıza değil.

## Ne zaman servis

- Fırın soğuduğu ve düğme sıfırda olduğu hâlde soğutma fanı durmuyorsa
- Pişirme sırasında soğutma fanı hiç çalışmıyorsa
- Hata kodu kapatıp açtıktan sonra yeniden çıkıyorsa
- Temel ayarı değiştirdiğin hâlde fanın davranışı değişmiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, temel ayarlar, yarıkların önü ve kapat-aç sende; fan motoru, elektronik ve ankastre montaj Siemens servisinin.

## Servisi aramadan önce kısa özet

1. Fırının model kodu ne (HB557JY, HB012FB, HB976GM ya da başka)?
2. Fan, fırın kapandıktan sonra ne kadar çalışıyor?
3. Temel ayarlarda fan süresi hangi seçenekte?
4. Fonksiyon seçme düğmesi sıfırda mı?
5. Ekranda bir hata kodu var mı, varsa tam olarak ne yazıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kilitli kalan kapak için [Siemens fırın kapağı açılmıyor](/blog/siemens-firin-kapagi-acilmiyor/), ısınmayan fırın için [fırın ısınmıyor](/blog/firin-isinmiyor/) rehberine bak. Bil, gör, çağır.
