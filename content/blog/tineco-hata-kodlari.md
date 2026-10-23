---
title: "Tineco hata kodları ve uyarı işaretleri: anlamları"
description: "Tineco Floor One ve Pure One kılavuzlarında sayısal hata kodu yok; yanıp sönen simge ve sesli uyarı var. Anlamları ve Tineco'nun çözümleri tek yerde."
slug: "tineco-hata-kodlari"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco). origin/main 75980e0'da "tineco" geçen yazı/başlık/gövde yok (git grep; yalnız src/constants.js ve src/kullanim-kilavuzlari.js).
# OT (#164, bu koşu, _kaynak/ot-tineco.log) "tineco hata": 1. **tineco hata kodları** (tek öneri) · "tineco uyarı": 1. **tineco uyarı işaretleri** · 2. tineco max uyarısı. GSC: "tineco" satırı yok (www-2…7).
# Bağlantı zinciri (#88): https://www.tineco.com.tr/support/instruction-manual (HTTP 200) → www.tineco.com.tr/upload/support/*.pdf, hepsi HTTP 200 application/pdf:
#  (S3) FLOOR ONE S3 TR, 28 s.  md5 f213a3039964fd79aaabfc1bc20bf959 · (S5) FLOOR ONE S5, 108 s. (TR s.94-104)  md5 37b04f8b9c111a75db10822fdb0bc240
#  (S7) FLOOR ONE S7 FlashDry, 214 s. (TR s.192-214)  md5 0f90da188c09fc019572fe2f34860afe · (IF3) iFLOOR 3 TR, 24 s.  md5 793240c7de9e5b322b7f625ddfbf9de4
#  (P12) PURE ONE S12 TR, 28 s.  md5 eca9713bd1240e0e3a0cbb12f5cf4140
# Sayfa = PDF sayfası. Belgelerde sayısal hata kodu (E1 vb.) YOK; yazı bunu açıkça söylüyor, gösterge/sesli uyarı/sorun giderme tablolarından kuruldu.
# BİLEREK YAZILMAYANLAR: motor/pil/kart teşhisi · uygulamadaki kod listeleri (belgede yok) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: tineco-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Cihazla gelen temizleme fırçası", "Nemli bez", "Musluk suyu"]
steps:
  - "Cihazı dik konuma getir, kapat ve hangi simgenin yandığını ya da hangi sesli uyarının çaldığını not et."
  - "Temiz su deposu boş uyarısında depoyu Max çizgisine kadar 60°C'nin altındaki suyla doldur."
  - "Kirli su deposu dolu ya da tıkalı uyarısında depoyu boşalt, filtresini ve şamandırasını suyla durula."
  - "Fırça silindiri ya da yıkama başlığı uyarısında başlığı çıkar, dolanan saçı temizle ve yerine oturt."
  - "Kir sensörü uyarısında sensörü nemli bezle sil ve kendi kendini temizleme döngüsünü başlat."
  - "Düşük emişte kuru filtreyi takılı olup olmadığına bak, durula ve tamamen kurut."
  - "Tüm ışıklar söndüyse cihazın soğumasını bekleyip yeniden başlat; motor arızası göstergesi sürüyorsa Tineco desteğini ara."
faq:
  - q: "Tineco'da E1, E2 gibi hata kodları var mı?"
    a: "Tineco'nun Türkiye sitesindeki Floor One S3, S5, S7 FlashDry, iFloor 3 ve Pure One S12 kılavuzlarında sayısal hata kodu yok. Cihaz sorunu ekrandaki simgenin yanıp sönmesiyle ve İngilizce sesli uyarıyla bildiriyor. Kılavuzdaki Gösterge ve Sorun Giderme tabloları bu işaretlerin anlamını veriyor."
  - q: "LED halkası kırmızı yanıp sönüyor, ne demek?"
    a: "Floor One S3 kılavuzuna göre yanıp sönen kırmızı gösterge kir sensörü arızası ya da tıkanıklık demek. Kirli su deposunu çıkarıp kir sensörünü nemli bir bezle ya da temizleme fırçasıyla temizle; sorun giderme tablosu tıkanıklığı kaldırmayı, gider kanalını temizlemeyi ya da yeniden başlatmayı öneriyor. S5'te bu durum sabit kırmızı, S7 FlashDry'da sabit mavi ışıkla gösteriliyor."
  - q: "Sesli uyarılar İngilizce, Türkçe anlamı nerede?"
    a: "S3 kılavuzu sesli uyarıların İngilizce olduğunu, tablodaki karşılıkların Türkçe çeviri olduğunu yazıyor. Dil değiştirme seçenekleri modele göre değişiyor; ayrıntısı Tineco dil değiştirme yazımızda."
  - q: "Hangi uyarıda servise gitmeliyim?"
    a: "S3'te güç göstergesinin, iFloor 3'te MAX simgesinin yanıp sönmesi motor arızası; kılavuz bu durumda Müşteri Hizmetleri ile iletişime geçmeni söylüyor. Pure One S12'de güç göstergesi yanıp sönüyorsa önce tıkanıklığı gider ve yeniden başlat."
images:
  coverAlt: "Şarj tabanında dik duran ıslak kuru dikey süpürgenin dijital ekranı"
  steps:
    - "Dik konumda kapatılmış ıslak kuru süpürgenin üst kısmı"
    - "Musluk altında doldurulan şeffaf temiz su deposu"
    - "Lavabo üzerinde boşaltılan kirli su deposu ve çıkarılmış filtresi"
    - "Gövdeden çıkarılmış yumuşak fırça silindiri ve yanında temizleme fırçası"
    - "Nemli bezle silinen süpürge gövdesindeki sensör bölgesi"
    - "Akan su altında durulanan kuru filtre"
    - "Şarj tabanında bekleyen, ekranı sönük ıslak kuru süpürge"
---

Tineco süpürgen bir şeye itiraz ediyor ama ekranda bir kod yok: yalnızca bir simge yanıp sönüyor ve İngilizce bir ses konuşuyor. Tineco'nun Türkiye sitesindeki **Floor One S3, S5, S7 FlashDry, iFloor 3** ve **Pure One S12** kullanım kılavuzlarına baktık: hiçbirinde E1, E2 gibi **sayısal hata kodu yok**. Cihaz sorunu üç yolla bildiriyor: dijital ekrandaki simge, LED kir izleme halkasının rengi ve sesli uyarı. Bu yazı, "Tineco hata kodları" diye aranan işaretlerin kılavuzdaki anlamını ve Tineco'nun önerdiği çözümü bir araya getiriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Simgeyi ya da sesli uyarıyı not et → temiz su boşsa doldur → kirli su doluysa boşalt, filtreyi durula → fırça silindirine dolanan saçı al → kir sensörünü sil, kendi kendini temizlemeyi başlat → düşük emişte kuru filtreye bak → tüm ışıklar söndüyse soğut ve yeniden başlat. Motor arızası göstergesi servise gider.

## Floor One uyarı tablosu

| Ekranda ne var | Sesli uyarı (Türkçe karşılığı) | Anlamı | Tineco'nun çözümü |
|---|---|---|---|
| TSD boş göstergesi yanıp sönüyor | Temiz Su Deposu boş, suyu ve solüsyonu tekrar doldurun | Temiz su deposu boş | Depoyu doldur |
| KSD dolu göstergesi yanıp sönüyor | Kirli Su Deposunu temizleyin | Kirli su Max çizgisinde ya da kanal tıkalı | Boşalt, yeniden tak |
| Yıkama başlığı / fırça silindiri göstergesi | Yıkama başlığını temizleyin | Yabancı cisim dolanmış ya da başlık takılı değil | Tıkanıklığı gider, doğru tak |
| LED halkası kırmızı yanıp sönüyor (S3) | Kendi kendini temizleme döngüsüne başlayın | Kir sensörü arızası ya da tıkanıklık | Tıkanıklığı kaldır, gider kanalını temizle ya da yeniden başlat |
| Kendi kendini temizleme simgesi yanıp sönüyor | Kendi kendini temizleme döngüsünü başlatın | Yıkama başlığı kirli | Döngüyü başlat |
| Pil göstergesi yanıp sönüyor | Düşük pil, lütfen şarj edin | Pil düşük | Şarj et ya da yeniden başlat |
| Çalışırken tüm ışıklar kapalı | — | Pilin aşırı ısınması ya da arızası | Soğumasını bekle, yeniden başlat |
| Güç göstergesi (S3) / MAX simgesi (iFloor 3) yanıp sönüyor | — | Motor arızası | Müşteri Hizmetleri |

TSD temiz su deposu, KSD kirli su deposu demek; S5 ve S7 kılavuzları aynı parçalara TSH ve KSH diyor.

## Adım adım: uyarıyı söndür

**1. Dur ve oku.** Floor One modelleri dik konuma getirilince çalışmayı durdurur. Bakım yapmadan önce cihazı **kapat**; S3 kılavuzu bunu yaralanma riskine karşı istiyor. Hangi simgenin yanıp söndüğünü ya da hangi cümlenin duyulduğunu yukarıdaki tabloyla eşleştir.

**2. Temiz su deposunu doldur.** Çıkarma düğmesine basıp depoyu kendine doğru çek, kapağı aç ve **Max çizgisine kadar** musluk suyuyla doldur. Kılavuzun kuralı: yalnızca **60°C'nin altında** su, kaynar su yok. Depoyu yerine tık sesiyle oturt.

**3. Kirli su deposunu boşalt.** Kirli su Max çizgisine ulaştığında cihaz çalışmayı durdurur, ekranda uyarı gösterir ve sesli uyarı çalar. Depo kapağını yukarı çekip boşalt, birikintiyi temizleme fırçasıyla al ve içini durula. S3 ve iFloor 3'te filtre ve şamandıra tıkanmışsa ikisini de suyla durula; S5'te kapağı ve içindeki filtreyi çıkarıp durula.

**4. Fırça silindirine bak.** Başlık tırnağını tutup yukarı çekerek çıkar, temizleme fırçasıyla dolanan saçı ve birikintiyi al, suyla durula. Haznesindeki tüyleri nemli bir bezle sil. Takmadan önce tamamen kurumasını bekle; kapağı sızıntıya karşı her zaman yerine oturt.

**5. Kir sensörünü temizle.** S3'te LED döngüsü kırmızı yanıp söndüğünde kirli su deposunu çıkar ve kir sensörünü **nemli bir bezle ya da temizleme fırçasıyla** temizle. Ardından cihazı şarj tabanına koyup kendi kendini temizleme düğmesine bas. Ayrıntısı [Tineco kendini temizleme](/blog/tineco-kendini-temizleme/) yazısında.

**6. Emiş düştüyse kuru filtre.** Sorun giderme tablolarının "düşük emiş" satırındaki tek neden: **kuru filtre takılmamış ya da kirli.** Filtreyi iki yanındaki girintiden tutup çek, akan suyla durula ve tamamen kurumadan geri takma. iFloor 3 kılavuzu buna gider kanalının tıkanmasını da ekliyor. Ayrıntı: [Tineco filtre temizliği](/blog/tineco-filtre-temizligi/), [Tineco suyu çekmiyor](/blog/tineco-suyu-cekmiyor/).

**7. Işıklar söndüyse soğut.** Çalışırken tüm ışıklar kapandıysa neden pilin aşırı ısınması ya da arızası; cihazın soğumasını bekle ve yeniden başlat. S7 FlashDry kılavuzu bu satıra orijinal adaptörü kullanmayı da ekliyor. Güç ya da MAX göstergesi yanıp sönmeye devam ediyorsa bu motor arızası: Tineco Türkiye'nin kılavuzdaki destek hattını ara.

## Pure One S12'de uyarılar

Kuru dikey süpürge Pure One S12'nin ekranı farklı: **fırça arıza** göstergesi fırçaya yabancı cisim dolandığını, **hava kanalı tıkalı** göstergesi cihazda, filtrede ya da toz haznesinde tıkanıklık olduğunu, **toz sensörü arıza** göstergesi toz haznesindeki sensörün engellendiğini ya da haznenin takılı olmadığını gösterir. Çalışırken pil göstergesi kırmızı yanıp sönüyorsa pil aşırı ısınmıştır; kılavuz pil paketini çıkarıp soğumaya bırakmanı istiyor. Şarjla ilgili işaretler [Tineco şarj olmuyor](/blog/tineco-sarj-olmuyor/) yazısında.

Markadan bağımsız kontrol listesi için [süpürge çalışmıyor](/blog/supurge-calismiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Motor arızası göstergesi yeniden başlatmaya rağmen yanıp sönüyorsa.
- Soğuduktan sonra da cihaz açılmıyorsa.
- Kablo, adaptör ya da gövde hasarlıysa.

⛔ **Kendin-çöz sınırı burada biter.** Depo, filtre, fırça ve sensör temizliği senin; motor, pil ve elektronik Tineco yetkili servisinin. Gövdeyi açma.

## Servisi aramadan önce iki dakikalık özet

1. Model adı ne (Floor One S3, S5, S7, iFloor 3, Pure One)?
2. Hangi simge yanıp sönüyor, sesli uyarı ne diyor?
3. Depolar, filtre ve fırça silindiri temizlendi mi?
4. Soğuduktan sonra yeniden başlattın mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
