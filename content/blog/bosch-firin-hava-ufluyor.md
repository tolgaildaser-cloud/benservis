---
title: "Bosch fırın hava üflüyor: soğutma fanı normal mi?"
description: "Bosch fırının kapağın üstünden hava üflemesi soğutma fanıdır; kapattıktan sonra da bir süre çalışır. Kılavuzdaki kurallar, kapanmayan fan ve servis sınırı."
slug: "bosch-firin-hava-ufluyor"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork C). Konu seçimi: origin/main'de bosch-firin-hava-ufluyor yok.
#   Yakın slug'lar: bosch-firin-buhar-yapiyor (yoğuşma ve kapaktaki su damlaları; soğutma fanını tek cümleyle anıyor), bosch-firin-isinmiyor (ısıtma arızası).
#   Bosch'ta fan davranışını anlatan sayfa yok.
# GSC: bu sorgu için gösterim yok (https___www-3…6).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "bosch fırın ha" → 1. "bosch fırın hava üflüyor";
#   tohum "bosch fırın hava" → 1. "…hava üflüyor", 3. "…soğuk hava üflüyor", 4. "…dışarı hava veriyor"; tohum "bosch fırın so" → 1. "…soğutma fanı sürekli çalışıyor".
# Belgeler: yerel kopyalar blog-taslaklar/kaynak-firin-sprint/ (1 Eki 2026, curl -sL -A "Mozilla/5.0", HTTP 200, media3.bsh-group.com; dl.log).
#   md5 bu koşuda yeniden alındı, MD5.txt ile aynı. #88: forum/servis sitesi kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (F) Bosch HBF512B.1T ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001944574_A.pdf  md5 3fac75fc8fb8bbef288fcc478b030ece
#  (H) Bosch HBB23C.. ankastre fırın kullanma kılavuzu  https://media3.bsh-group.com/Documents/9000728669_B.pdf  md5 5544858a428c91894c15726616c53729
#  (J) Bosch HBJN10Y..R ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001930148_F.pdf  md5 73afa0ad2328c7fe9bcbe06cc6d29177
# KAYNAK DÜZELTMESİ 2026-10-27 (#88): önceki (D) 9001771866_D ve (G) 9001627929_B Profilo kılavuzu çıktı; kaynaktan çıkarıldı. F, H, J bu koşuda yeniden indirildi (HTTP 200, md5 aynı).
# Soğutma fanı F s.8, J s.7, H s.5 · arka panel fanı F s.6 · kapak açılınca çalışma sürer F s.8 · yoğuşma F s.8
#   · "süre dolduktan sonra tamamen kapanmıyor" F s.17 · hata mesajı F s.18 · arıza giderme girişi/uzman F s.17 · ara rafta havalandırma F s.23.
# BİLEREK YAZILMAYANLAR: "soğuk hava" üflediği iddiası ya da açıklaması (kılavuzlarda yok) · fan süresinin dakika olarak değeri (Bosch belgelerinde yok)
#   · fan motoru, termostat, kart teşhisi · dolaptan söküp montaj düzeltme (montaj uzman işi) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-firin-hava-ufluyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (soğuma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu"]
steps:
  - "Havanın nereden geldiğine bak; kapağın üst kısmından dışarı çıkıyorsa bu Bosch'un soğutma fanıdır ve cihaz sıcaklığına göre kendiliğinden açılıp kapanır."
  - "Fırını kapattıktan sonra fan bir süre daha çalışıyorsa bekle; Bosch'a göre cihaz soğuduktan sonra soğutma fanı otomatik olarak kapanır."
  - "Süre dolduğu hâlde lamba ve fan kapanmıyorsa fonksiyon seçme düğmesini sıfır konumuna çevir."
  - "Kapaktaki havalandırma yarıklarının önünü kontrol et; havlu, bez ya da başka bir şey asılıysa kaldır ve yarıkları açık bırak."
  - "Pişirme bölümünün içinde dönen fan sesi geliyorsa seçtiğin ısıtma türüne bak; sıcak hava türlerinde arka paneldeki fanın çalışması normaldir."
  - "Ekranda bir hata mesajı varsa kılavuzdaki tuşa bas; mesaj yeniden çıkıyor ya da fan soğuk fırında da durmuyorsa Bosch müşteri hizmetlerinden servis iste."
faq:
  - q: "Bosch fırın kapağın üstünden sıcak hava üflüyor, arıza mı?"
    a: "Hayır. Bosch'un HBF512B ve HBJN10Y kılavuzlarına göre soğutma fanı cihaz sıcaklığına göre devreye girer ve devre dışı kalır, sıcak hava da kapağın üzerinden dışarı çıkar. Bu, fırının kendini aşırı ısınmaya karşı soğutma biçimi."
  - q: "Fırını kapattım, fan hâlâ çalışıyor; ne zaman durur?"
    a: "Bosch kılavuzları bunun bilerek yapıldığını yazıyor: cihaz çalışmadan sonra hızlı soğusun diye soğutma fanı belirli bir süre daha çalışır. HBB23C kılavuzunda da fan, fırın kapandıktan sonra bir süre dönmeye devam eder. Arıza tablosuna göre cihaz soğuduktan sonra soğutma fanı otomatik olarak kapanır. Kılavuzlarda dakika olarak bir süre verilmiyor."
  - q: "Soğutma fanı sürekli çalışıyor, fırını nasıl tamamen kapatırım?"
    a: "HBF512B arıza tablosunda bu durum var: süre dolduktan sonra cihaz ısınmayı durdurur ama lamba ve soğutma fanı kapanmaz. Sebep fonksiyon seçme düğmesinin sıfırda olmaması. Düğmeyi sıfır konumuna çevirince cihaz, lamba ve arka paneldeki fan kapanır; soğutma fanı da cihaz soğuyunca kendiliğinden durur."
  - q: "Kapaktaki yarıkları kapatırsam ne olur?"
    a: "Bosch bunu açıkça yasaklıyor: cihaz kapağındaki havalandırma yarıklarının üzeri örtülürse cihaz aşırı ısınır. Kapak koluna havlu asmak ya da yarıkların önüne bir şey koymak bu yüzden önerilmez."
  - q: "Fırının içinden de fan sesi geliyor, bu ikinci bir fan mı?"
    a: "Evet. Kılavuzlarda 3D sıcak hava gibi ısıtma türlerinde arka paneldeki fan, yuvarlak ısıtıcının ısısını pişirme bölümüne eşit biçimde dağıtır. Bu fan pişirme bölümünün içinde çalışır; kapağın üstünden dışarı hava veren soğutma fanından ayrıdır."
images:
  coverAlt: "Mutfak dolabına gömülü, kapağı kapalı ankastre bir fırın ve üstündeki boş tezgâh"
  steps:
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
    - "Çizim: solda ankastre fırın, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
---

Fırını açtın ya da yemeği çıkarıp kapattın, kapağın üstünden yüzüne doğru hava geliyor ve bir motor sesi sürüyor. Çoğu zaman bu bir arıza değil, Bosch'un **soğutma fanı**. HBF512B, HBJN10Y ve HBB23C kullanım kılavuzları bu fanın ne zaman çalıştığını, neden kapattıktan sonra da döndüğünü ve hangi durumda kapanmadığını aynı dille anlatıyor. Bu yazıda o kuralları ve servis sınırını sırayla topladık. Tuşlar ve göstergeler modele göre değişiyor; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapağın üstünden çıkan hava soğutma fanıdır; sıcaklığa göre açılıp kapanır ve fırın kapandıktan sonra da bir süre çalışır, soğuyunca kendi durur. Lamba ve fan hiç kapanmıyorsa fonksiyon seçme düğmesi sıfırda değildir. Kapaktaki yarıkları asla örtme. Hata mesajı tekrarlıyorsa servis.

## Hangi fan, ne zaman


| Ne fark ediyorsun | Kılavuza göre | Ne yapılır |
|---|---|---|
| Kapağın üstünden sıcak hava | Soğutma fanı, sıcaklığa göre açılıp kapanır | Normal |
| Fırın kapandı, fan dönüyor | Hızlı soğuma için belirli süre çalışır | ⏳ Bekle |
| Süre bitti, lamba ve fan kapanmıyor | Fonksiyon seçme düğmesi sıfırda değil | 🛠️ Düğmeyi sıfıra çevir |
| Pişirme bölümünün içinde fan sesi | Sıcak hava türlerinde arka panel fanı | Normal |
| Ekranda hata mesajı | Elektronik arızası | 🛠️ Tuşa bas; tekrarsa servis |

## Adım adım: evde kontrol

**1. Havanın kaynağını bul.** Bosch'un HBF512B ve HBJN10Y kılavuzlarında aynı paragraf var: **soğutma fanı, cihaz sıcaklığına göre devreye girer ve devre dışı kalır; sıcak hava kapağın üzerinden dışarı çıkar.** Eski HBB23C kılavuzu görevini de söylüyor: fan, fırının **aşırı ısınmasını önler** ve gerektiğinde çalışıp kesilir. Yani pişirme sırasında kapağın üst kenarından gelen sıcak hava, tasarımın parçası.

**2. Kapattıktan sonra bekle.** En sık şaşırtan durum bu. Kılavuzlara göre cihazın çalışmadan sonra **hızlı bir şekilde soğuması için** soğutma fanı **belirli bir süre** daha çalışır. HBB23C'de de fan, fırın kapandıktan sonra bir süre dönmeye devam eder. Arıza tablosunun son cümlesi bunu bağlıyor: **cihaz soğuduktan sonra soğutma fanı otomatik olarak kapanır.** Bosch belgelerinde bu süre dakika olarak verilmiyor; fırın ne kadar ısındıysa fanın o kadar uzun çalışması beklenir.

**3. Düğme sıfırda mı?** HBF512B arıza tablosunda ayrı bir satır var: **"Cihaz süre dolduktan sonra tamamen kapanmıyor."** Açıklama: cihaz bir süre sonra ısınmayı durduruyor, ama **fırın lambası ve soğutma fanı kapanmıyor**; hava dolaşımlı ısıtma türlerinde pişirme bölümündeki arka panel fanı da çalışmaya devam ediyor. Çözüm: **fonksiyon seçme düğmesini sıfır konumuna çevirmek.** Cihaz kapanır, lamba ve arka paneldeki fan kapanır, soğutma fanı da cihaz soğuyunca kendiliğinden durur.

**4. Yarıkları açık bırak.** Bosch'un uyarısı kesin: **cihaz kapağındaki havalandırma yarıklarının üzerini örtmeyin, cihaz aşırı ısınır.** HBB23C kılavuzu aynı uyarıyı havalandırma açıklığı için yapıyor. Kapak koluna asılan havlu, yarıkların önüne dayanan bir tepsi ya da dolap kapağı soğutma havasının yolunu keser. Önünü boşalt; fan bu yarıklardan nefes alıp verir.

**5. İçerideki fanı ayırt et.** Kılavuzlarda **3D sıcak hava** ve **hassas sıcak hava** türlerinde fan, **arka panelde bulunan yuvarlak ısıtıcının ısısını eşit biçimde pişirme bölümüne dağıtır**; hava dolaşımlı ızgarada da ızgara ısıtıcısıyla dönüşümlü çalışıp sıcak havayı yemeğin etrafında döndürür. Bu fan pişirme bölümünün içindedir, dışarı hava vermez. HBF512B kılavuzuna göre çalışma sırasında kapağı açarsan çalışma devam eder; kapak açıkken içeriden gelen sıcak hava bu yüzden normal.

**6. Hata mesajı varsa.** Ekranda bir hata mesajı görünüyorsa HBF512B'deki sıra: kılavuzda gösterilen tuşa bas, gerekirse saati yeniden ayarla. Arıza bir defalıksa mesaj kaybolur. **Mesaj tekrar belirirse müşteri hizmetlerini ara** ve hata mesajını, cihazın E numarasıyla birlikte eksiksiz bildir.

## Kapakta su ve buhar

Fanla birlikte kapakta damlacık görüyorsan o başka bir konu: HBF512B kılavuzuna göre pişirme sırasında pişirme bölümünde ve kapakta **yoğuşma suyu oluşabilir, bu normaldir** ve cihazın fonksiyonunu etkilemez; pişirmeden sonra silinmesi yeterli. Ayrıntılar [Bosch fırın buhar yapıyor](/blog/bosch-firin-buhar-yapiyor/) yazısında.

## Ne zaman servis

- Fırın tamamen soğuduğu ve düğme sıfırda olduğu hâlde soğutma fanı durmuyorsa
- Pişirme sırasında soğutma fanı hiç çalışmıyor ve kumanda paneli olağandışı ısınıyorsa
- Hata mesajı tuşa bastıktan sonra yeniden çıkıyorsa
- Fan sesi bir anda değiştiyse ya da sürtünme sesi geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, ısıtma türü seçimi, yarıkların önü ve hata mesajındaki tuş sende; fan motoru, termostat, elektronik ve ankastre montaj (Bosch'a göre ara rafta havalandırma bölümü bulunmalı) uzman personelin. Bosch'un kuralı: onarımları yalnız eğitimli uzman personel yapabilir.

## Servisi aramadan önce kısa özet

1. Fırının model kodu ve E numarası ne?
2. Hava kapağın üstünden mi geliyor, pişirme bölümünün içinden mi?
3. Fan, fırın kapandıktan ne kadar sonra hâlâ çalışıyor?
4. Fonksiyon seçme düğmesi sıfırda mı?
5. Ekranda bir hata mesajı var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isınmayan fırın için [Bosch fırın ısınmıyor](/blog/bosch-firin-isinmiyor/), marka bağımsız temizlik için [fırın nasıl temizlenir](/blog/firin-nasil-temizlenir/) rehberine bak. Bil, gör, çağır.
