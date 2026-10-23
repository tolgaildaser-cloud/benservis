---
title: "Ferroli kombi petekleri ısıtmıyor: kontrol sırası"
description: "Ferroli kombi petekleri ısıtmıyorsa kılavuz önce ayara bakıyor: açma/kapama, yaz modu, ısıtma sıcaklığı, oda termostatı, basınç ve reset."
slug: "ferroli-kombi-kalorifer-isitmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork E). Konu seçimi (#179 kombi "ısıtmıyor" kümesi): origin/main'de ferroli-kombi-kalorifer-isitmiyor yok
#   (Ferroli'de yalnız ferroli-kombi-ariza-kodlari var; Baymak, Bosch, Buderus, DemirDöküm, ECA, Vaillant, Viessmann "kalorifer ısıtmıyor" var).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında "ferroli" içeren sorgu YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "ferroli kombi ısıtmıyor":
#   1. "ferroli kombi su ısıtmıyor" · 2. "ferroli kombi petekleri ısıtmıyor" · 3. "…su ısıtmıyor ne yapmalıyım" · 4. "…banyo suyunu ısıtmıyor" · 5. "…çalışıyor ama ısıtmıyor".
# Belgeler: 6 Eki 2026'da curl -sL -A "Mozilla/5.0" ile Ferroli'nin kendi alan adı ferroli.com.tr'den indirilen yerel kopyalar
#   (blog-taslaklar/2026-10-06/kaynak-ferroli/, ferroli-kombi-ariza-kodlari künyesi). Bu koşuda (23 Eki) aynı URL'ler HTTP 404 döndü; ürün sayfaları
#   (bluehelix-tech-69902, bluehelix-trio-d729b5, leone-31040) HTTP 200 ama artık yalnız ürün bilgi formu/enerji etiketi/AB beyanı bağlıyor.
#   Yerel kopyaların md5'i 6 Eki künyesiyle aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. T pdftotext, R ve L OCR (ocr/). Sayfa = PDF sayfası.
#  (T) Bluehelix Tech C kullanım kılavuzu, cod. 3541F561 Rev. 00 07/2015, 16 s.  https://www.ferroli.com.tr/docs/bluehelix-tech-kullanim-kilavuzu-28d5d.pdf  md5 3d412e0af94e4984b90f7a9b39a80761
#  (R) Bluehelix Trio C kullanım kılavuzu, Rev. 00 03/2022, 12 s.  https://www.ferroli.com.tr/docs/bluehelix-trio-kullanim-kilavuzu-715g5.pdf  md5 54bd7ef868a276481ccf00001fc25e40
#  (L) Leone C kullanım kılavuzu, Rev. 00 03/2023, 12 s.  https://www.ferroli.com.tr/docs/leone-kullanim-kilavuzu-cg9a8.pdf  md5 77bf558a6f96c12f7405e88b61d0e733
# Panel ve ısıtma talebi göstergesi T s.2, R s.2, L s.2 · açma/kapama R s.3, L s.3 · yaz/kış R s.3 (2 sn), T s.3, L s.3 (1 sn) · ısıtma 20–80 °C R s.3, T s.3, L s.3
#   · oda termostatı / uzaktan zamanlayıcı R s.3, L s.3 · ECO/COMFORT R s.3 · Sıcaklık Akışı/eğri R s.3–4, L s.4 · basınç ~1,0 bar, F37, doldurma düğmesi, FH 300 sn R s.4, T s.4
#   · AP 180 sn L s.3 · gaz valfını açma R s.3, L s.3 · A/F kuralı ve RESET 1 sn R s.8, T s.8 · Leone E01/E06/E08/E09 L s.8 · "Cihazı tamir etmeye kalkışmayınız" R s.2, L s.2.
# BİLEREK YAZILMAYANLAR: gaz kokusu talimatı (bu üç kılavuzda yok; başka markadan taşınmadı) · radyatör vanası/purjör (belgede yok) · 3 yollu vana, pompa, sensör, kart teşhisi
#   · Leone "Petekleri kontrol ediniz" satırının yorumu (kılavuz ayrıntı vermiyor, yalnız cümle aktarıldı) · ECO modun ısıtmayı kestiği iddiası (belgede yok) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: ferroli-kombi-kalorifer-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının kullanma kılavuzu (varsa)"]
steps:
  - "Kombinin açık olduğunu kontrol et; kapalıysa açma/kapama tuşuna kılavuzdaki süre kadar basılı tutarak aç."
  - "Ekranda yaz sembolü ya da yalnız musluk sembolü görünüyorsa kombi yaz modundadır; yaz/kış tuşuna basarak yaz modunu kapat."
  - "Isıtma sıcaklığı çok düşük ayarlıysa ısıtma artırma tuşuyla yükselt; Ferroli'de ayar aralığı 20 ile 80 °C."
  - "Oda termostatı ya da uzaktan kumanda varsa istediğin oda sıcaklığına ayarla ve ekranda radyatör simgesinin yanıp söndüğünü kontrol et."
  - "Sistem soğukken basınç göstergesine bak; yaklaşık 1,0 bar olmalı. F37 ya da E08 görüyorsan doldurma düğmesiyle basıncı geri getir ve düğmeyi kapat."
  - "Basınç geri gelince ekranda FH ya da AP yazarsa hava tahliye döngüsü bitene kadar bekle."
  - "Ekranda A ile başlayan bir kod ya da Leone'de E01 varsa gaz valfının açık olduğunu kontrol et ve RESET tuşuna 1 saniye bas."
  - "Kod tekrar ediyorsa ya da ayarlar doğru olduğu hâlde petekler ısınmıyorsa kombiyi kapat ve Ferroli yetkili servisine haber ver."
faq:
  - q: "Ferroli kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Ferroli'nin Bluehelix Tech C, Bluehelix Trio C ve Leone C kılavuzlarına göre ilk bakılacak yer yaz/kış ayarı. Yaz modunda kombi yalnız sıhhi su dağıtımı yapar; ekranda yaz sembolü (Leone'de musluk sembolü) görünür. Yaz modunu kapatmak için yaz/kış tuşuna yeniden basılır. Mod doğruysa sırada ısıtma sıcaklığı, oda termostatı, su basıncı ve ekrandaki kod var."
  - q: "Ferroli kombide yaz modu nasıl kapatılır?"
    a: "Panelin 6 numaralı tuşu hem reset hem yaz/kış seçimi tuşu. Bluehelix Tech C ve Trio C'de bu tuşa 2 saniye, Leone C'de 1 saniye basılarak yaz modu açılıp kapatılıyor. Aynı tuşa 5 saniye basarsan Sıcaklık Akışı menüsü açılır ve ekranda yanıp sönen CU görünür; aynı tuşa yeniden 5 saniye basınca menüden çıkılır."
  - q: "ECO modu petekleri ısıtmayı keser mi?"
    a: "Kılavuzlarda böyle bir bilgi yok. Ferroli ECO/COMFORT seçimini sıcak su konforuyla anlatıyor: COMFORT modunda kombideki su sıcak tutulur, böylece musluğu açınca beklemeden sıcak su gelir; ECO modunda bu işlev kapanır ve ekranda ECO sembolü görünür."
  - q: "Ekranda FH ya da AP yazıyor, petekler ısınmıyor; arıza mı?"
    a: "Hayır. Bluehelix kılavuzlarına göre FH, ısıtma sisteminin hava tahliye döngüsü; kombiye elektrik verildikten sonra ve basınç geri yüklendikten sonra 300 saniye boyunca görünür. Leone C'de aynı döngü AP mesajıyla ve 180 saniye sürüyor. Mesaj kaybolunca kombi ısıtma talebinde otomatik çalışmaya hazırdır."
  - q: "Oda termostatı yoksa kombi nasıl ısıtır?"
    a: "Ferroli kılavuzlarına göre ortam termostatı monte edilmemişse kombi, sistemi ayarlanmış olan sistem çıkış sıcaklığı değerinde tutar. Termostat varsa ısıtma talebi termostattan gelir ve ekranda üzerinde sıcak hava olan radyatör simgesinin yanıp sönmesiyle gösterilir."
  - q: "Dış hava sensörü takılı, odalar yeterince ısınmıyor; ne yapılır?"
    a: "Harici sonda takılıysa kombi Sıcaklık Akışı moduyla, dış hava sıcaklığına göre ısıtma sıcaklığını ayarlıyor. Kılavuz, ortam sıcaklığı istenen değerin altına düşerse daha yüksek dereceden bir eğri seçilmesini, bir derece artırıp ortamdaki değişikliği kontrol etmeyi öneriyor. Eğri ayarı, 6 numaralı tuşa 5 saniye basılınca açılan menüde yapılıyor; kurulum ayarlarını ise kalifiye personel yapmalı."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve önünde soğuk görünen beyaz bir panel radyatör"
  steps:
    - "Duvara asılı beyaz bir kombinin kumanda panelindeki tuşların yakın planı"
    - "Kombi ekranında tek başına duran bir musluk simgesi"
    - "Kombinin kumanda panelinde artı ve eksi biçimli sıcaklık tuşları"
    - "Salon duvarında asılı, ekranı boş, beyaz ve sade bir oda termostatı"
    - "Kombinin altında borular arasında duran küçük bir doldurma düğmesi"
    - "Kombi ekranında iki harfli bir mesaj ve yanında bekleyen bir kahve fincanı"
    - "Kombinin altındaki sarı kollu gaz vanasının yakın planı"
    - "Duvardaki kombinin yanında tezgâhta duran katlanmış bir kullanma kılavuzu ve bir telefon"
---

Musluktan sıcak su geliyor, ama petekler soğuk. Kombi çalışıyor gibi görünüyor, sadece ısıtma yapmıyor. Ferroli'nin Bluehelix Tech C, Bluehelix Trio C ve Leone C kullanım kılavuzlarında "petekler ısınmıyor" diye tek bir satır yok; ama üç kılavuz da kombinin açılıp kapanmasını, yaz/kış ayarını, ısıtma sıcaklığını, basıncı ve arıza kodlarını aynı mantıkla anlatıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi bu üç kılavuzdan sırayla topladık. Senin kombinde tuş süreleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var, ısıtma yoksa ilk şüpheli ayar. Kombi açık mı, yaz modunda mı? Isıtma sıcaklığı 20–80 °C arasında, oda termostatı ısıtma istiyor mu? Basınç soğukken yaklaşık 1,0 bar olmalı. A ile başlayan kodda gaz valfına bak, RESET'e 1 saniye bas. Bunlar doğruysa Ferroli yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **Yaz sembolü / yalnız musluk** | Yaz modu; yalnız sıhhi su | 🛠️ Yaz/kış tuşuyla kapat |
| **Radyatör simgesi yanıp sönüyor** | Isıtma talebi var | Kombi ısıtmaya çalışıyor |
| **FH (Bluehelix) · AP (Leone)** | Hava tahliye döngüsü | ⏳ Bekle |
| **d2** | Isıtma bekleme süresi | ⏳ Bekle |
| **F37 · E08** | Su basıncı düşük | 🛠️ Doldurma düğmesi |
| **A ile başlayan kod · E01** | Kombi bloke oldu | 🛠️ Gaz valfı, RESET 1 sn |
| **Diğer F ve E kodları** | Sensör, fan, kart, elektrik | 🔧 Yetkili servis |

## Adım adım: evde denenecekler

**1. Kombi açık mı?** Panelin 7 numaralı tuşu hem ECO/COMFORT seçimi hem açma/kapama tuşu. Bluehelix Trio C kılavuzuna göre kombi bu tuşa **5 saniye** basılarak kapatılıyor ve yeniden açmak için tuşa tekrar 5 saniye basılıyor. Kombi kapalıyken elektronik kartta hâlâ elektrik var, ama **sıhhi su ve ısıtma işletimi devre dışı**; yalnız antifriz sistemi aktif kalıyor. Yani ekranın yanması kombinin ısıtmaya hazır olduğu anlamına gelmiyor.

**2. Yaz modu mu açık?** Kılavuzlara göre yaz modunda kombi **yalnız sıhhi su** dağıtımı yapıyor; Bluehelix'te ekranda yaz sembolü, Leone'de musluk sembolü görünüyor. Yaz modunu kapatmak için 6 numaralı **yaz/kış tuşuna** yeniden bas: Bluehelix Tech C ve Trio C'de **2 saniye**, Leone C'de **1 saniye**. Dikkat: aynı tuşa 5 saniye basarsan ekranda yanıp sönen **CU** ile Sıcaklık Akışı menüsü açılır; çıkmak için tuşa yeniden 5 saniye bas.

**3. Isıtma sıcaklığını kontrol et.** Panelde ısıtma sistemi için ayrı azaltma ve artırma tuşları var (3 ve 4 numara). Üç kılavuzda da ısıtma sıcaklığı **en az 20 °C, en çok 80 °C** arasında ayarlanıyor. Değer alta indirilmişse petekler ılık bile olmayabilir; artırma tuşuyla yükselt.

**4. Oda termostatı ısıtma istiyor mu?** Kılavuzlara göre ısıtma talebi ortam termostatından ya da uzaktan krono-kumandadan gelir ve ekranda **üzerinde sıcak hava olan radyatör simgesinin yanıp sönmesiyle** gösterilir. Termostat varsa sıcaklığı oda için istediğin değere ayarla; simge yanıp sönmüyorsa termostatın kendi kılavuzuna bak. Termostat monte edilmemişse kombi sistemi ayarlanmış çıkış sıcaklığında tutar. Bluehelix'te ekranda **d2** görürsen bu, ısıtma bekleme süresi.

**5. Su basıncına bak.** Ferroli'ye göre sistem soğukken kombinin hidrometresinden okunan basınç **yaklaşık 1,0 bar** olmalı. Basınç minimumun altına düşerse kombi durur ve ekranda **F37** görünür. Kılavuzun çözümü: **doldurma düğmesini** açarak basıncı başlangıç değerine getir ve işlem bitince düğmeyi **daima geri kapat**. Leone C'nin arıza tablosu düşük basıncı **E08** olarak veriyor (0,4 barın altı; 0,8 bar ve üstünde kendiliğinden düzelir) ve çözüm sütununda 1,5 bar yazıyor. Basınç sık düşüyorsa nedenini [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısında anlattık.

**6. FH ya da AP görürsen bekle.** Basınç geri yüklendikten sonra Bluehelix kombiler ekranda **FH** ile gösterilen **300 saniyelik** hava tahliye döngüsünü başlatır. Leone C'de aynı döngü **AP** mesajıyla **180 saniye** sürüyor. Mesaj kaybolduğunda kombi, ortam termostatından ısıtma talebi geldiğinde otomatik çalışmaya hazırdır. Bu süre içinde petekler ısınmıyorsa bu arıza değil.

**7. A kodu varsa gaz ve RESET.** Bluehelix kılavuzları kodları ikiye ayırıyor: **A** ile başlayanlar kombiyi bloke eder, **F** ile başlayanlar değerler normale dönünce kendiliğinden kalkar. A kodunda kombinin çalışmaya devam etmesi için **RESET tuşuna 1 saniye** basmak yeterli. Kılavuzun kombiyi çalıştırma adımlarından biri de *kombi sistem girişindeki gaz valfını açmak*; Leone'nin E01 alev algılama hatası için ilk çözümü de **gazı kontrol etmek**. Valfı açık bulursan dokunma, sadece resetle.

**8. Kod tekrar ediyorsa servis.** Reset sonrası kombi yine çalışmıyorsa kılavuzun cümlesi açık: önce arızanın giderilmesi gerekir. Ferroli'nin genel uyarısı da aynı: cihazda arıza ya da yetersiz çalışma varsa cihaz kapatılmalı, **tamir etmeye kalkışılmamalı**, yalnız mesleki olarak kalifiye personele başvurulmalı. Leone'de **E06** ya da **E09** aşırı ısınma kodu görürsen tablonun çözümü *"Petekleri kontrol ediniz"* ve servise başvurmak.

## Ekrandaki simgeleri okumak

Kombinin o an hangi talebe çalıştığını ekrandan okuyabilirsin. Kılavuzlar musluktan sıcak su çekildiğinde oluşan sıhhi su talebini **musluk simgesinin yanıp sönmesiyle**, ısıtma talebini **radyatör simgesinin yanıp sönmesiyle** ayrı ayrı gösteriyor; Bluehelix'te bekleme sürelerinde sıhhi su için **d1**, ısıtma için **d2** yazıyor. Musluk kapalıyken radyatör simgesi hiç yanıp sönmüyorsa kombiye ısıtma talebi gitmiyordur: yaz modu, sıcaklık ayarı ve termostat adımlarına dön.

**ECO ve COMFORT ne değiştirir?** Kılavuz bu seçimi sıcak su konforuyla anlatıyor: COMFORT'ta kombideki su sıcak tutulur, ECO'da bu işlev kapanır. ECO'nun ısıtmayı kestiğine dair bir bilgi yok.

## Ne zaman servis

- Mod, sıcaklık ve termostat doğru olduğu hâlde radyatör simgesi yanıp sönüyor ama petekler soğuk kalıyorsa
- Basınç sık sık düşüyorsa
- A kodu RESET'ten sonra geri geliyorsa
- Ekranda sensör, fan, kart ya da elektrik kodu varsa (F10, F15, F34 gibi)

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, termostatın ayarı, basınç göstergesi, doldurma düğmesi ve gaz valfının konumu sende; kombinin kapağının içi, gaz hattı, sifon ve elektrik aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Bluehelix Tech C, Trio C, Leone C ya da başka)?
2. Ekranda yaz sembolü, FH, AP ya da bir kod var mı?
3. Radyatör simgesi yanıp sönüyor mu?
4. Basınç soğukken kaç bar?
5. Bütün odalar mı soğuk, yoksa tek bir oda mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ferroli'nin bütün kodları [Ferroli kombi arıza kodları](/blog/ferroli-kombi-ariza-kodlari/) sayfasında, marka bağımsız nedenler [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında, basınç değerleri [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasında. Bil, gör, çağır.
