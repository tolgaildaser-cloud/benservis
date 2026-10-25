---
title: "Alarko kombi petekleri ısıtmıyor: kontrol sırası"
description: "Alarko kombi petekleri ısıtmıyorsa kılavuzun sırası: çalışma konumu, kalorifer sıcaklığı, oda termostatı, 1,2 bar basınç, gaz ve radyatör vanaları."
slug: "alarko-kombi-kalorifer-isitmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork B). Bu konu siemens-bulasik-makinesi-e22-hatasi'nin YERİNE yazıldı: Siemens'in kendi
#   belgelerinde E22 bulunamadı (yerel 4 Siemens kılavuzu yeni kod biçiminde, E:92-40; siemens-home.bsh-group.com/tr kod sayfaları ve eski model
#   ürün sayfaları bu koşuda 404).
# Konu seçimi (YK #179 kombi "ısıtmıyor" kümesi): origin/main'de alarko-kombi-kalorifer-isitmiyor yok; Alarko'da yalnız alarko-kombi-e04-hatasi ve
#   alarko-kombi-e47-hatasi var. Baymak, Bosch, Buderus, DemirDöküm, ECA, Vaillant, Viessmann "kalorifer ısıtmıyor" sayfaları var.
# GSC: son 3 ay ve son 7 gün dışa aktarımlarında Alarko "ısıtmıyor" sorgusu yok.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "alarko kombi ısıtmıyor" → 1. "alarko kombi su ısıtmıyor",
#   2. "alarko kombi petekleri ısıtmıyor", 3. "alarko kombi kalorifer ısıtmıyor", 4. "… su ısıtmıyor ne yapmalıyım", 5. "alarko kombi neden ısıtmıyor".
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Alarko Carrier'ın kendi alan adından yeniden indirildi: HTTP 200 application/pdf, md5 yerel kopyayla aynı.
#   #88: forum/servis sitesi kullanılmadı. pdftotext -layout, sayfa = PDF sayfası (bu belgede basılı sayfa no ile aynı).
#  (A) Alarko "SERADENS SUPER SRS 20/24/28/36 PREMİKS YOĞUŞMALI KOMBİ MONTAJ ve KULLANIM KILAVUZU" Kod No A.1.4.8, Rev. 31/10/2024, 59 s.
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/kombi-alarko-srs-kk.pdf  md5 1d7022ad1322561828a456f621227d10
# Gaz sızıntısı s.10-11 · kumanda paneli s.13 · info menüsü/ı00 s.14 · su ekleme 1.2 bar s.14-15 · çalışma konumları s.16 · çalıştırma, ısıtma sıcaklığı s.17
#   · E01 s.18 · E04/E47 s.18-19 · uzun süre kullanılmama s.20 · otomatik kontrol cihazları s.20-21 · verimli kullanım (≤50 °C, radyatör vanası, termostatik vana,
#   radyatör önü, yıllık bakım) s.55 · yoğuşma ve 50 °C s.10.
# BİLEREK YAZILMAYANLAR: oda termostatı kablolaması/klemens köprüsü (montaj işi) · E02, E03, E05, E16, E22 vb. (yalnız "yetkili servisi arayın") · pislik tutucu
#   temizliği (kılavuz yetkili servise bırakıyor) · radyatör purjöründen hava alma (belgede yok) · sıcak su önceliği iddiası (belgede yok) · "en sık neden"
#   sıralaması · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: alarko-kombi-kalorifer-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu", "Oda termostatının kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, dışarıdan 187'yi ara."
  - "Ekranda OFF yazıyorsa ya da yalnız musluk sembolü yanıyorsa konum düğmesine basarak KIŞ ya da SADECE ISITMA konumunu seç."
  - "Radyatör sembolünün ekranda sürekli yandığını kontrol et; kalorifer ihtiyacı olduğunda bu sembol yanıp söner."
  - "Kalorifer sıcaklığı çok düşük ayarlandıysa kalorifer suyu sıcaklığı artırma düğmesiyle yükselt."
  - "Oda termostatı bağlıysa ısıtma istediğini, termostatik vanalı radyatörlerde vananın kapalı kalmadığını kontrol et."
  - "Bilgi düğmesine 2 saniye basıp ı00 değerinden basıncı oku; soğukken 1,2 bar olmalı, E04 varsa doldurma musluğuyla 1,2 bara tamamla."
  - "Ekranda E01 varsa gaz sayacını ve kombinin gaz vanasını kontrol et, konum düğmesiyle kombiyi kapatıp yeniden aç."
  - "Radyatör vanalarının açık, radyatörlerin önünün perde ve mobilyayla kapalı olmadığını kontrol et; sorun sürerse yetkili servisi ara."
faq:
  - q: "Alarko kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Alarko Seradens Super kılavuzuna göre ilk bakılacak yer çalışma konumu. YAZ konumunda kombi yalnız kullanım suyu için çalışır ve ekranda yalnız musluk sembolü sürekli yanar. KIŞ konumunda musluk ve radyatör sembolleri birlikte, SADECE ISITMA konumunda yalnız radyatör sembolü sürekli yanar; bu iki konumda kombi kalorifer sistemi için de çalışır."
  - q: "Alarko kombide kış konumuna nasıl geçilir?"
    a: "Kılavuza göre kumanda panelindeki 1 numaralı çalışma konumu ayar düğmesine basarak sırasıyla YAZ, KIŞ, SADECE ISITMA ve KAPALI konumları arasında geçilir. Aynı düğme kombi hata durumundayken sıfırlama (reset) düğmesi olarak da çalışır."
  - q: "Alarko kombinin basıncı kaç bar olmalı?"
    a: "Kılavuz sistemin 1,2 bar basınçtaki suyla doldurulmasını ve su soğukken basıncın 1,2 bar olduğundan emin olunmasını istiyor. Basınç düşerse ekranda E04, sistem fazla doldurulursa E47 görünür. Basınç, bilgi düğmesine 2 saniye basınca ekranda ı00 satırında okunur."
  - q: "Radyatör sembolü sürekli yanıp sönüyor, bu arıza mı?"
    a: "Tek başına değil. Kılavuza göre kalorifer ısınma ihtiyacında radyatör sembolü yanıp söner. Sistemde oda termostatı yoksa ya da bağlantı köprülüyse pompa KIŞ ve SADECE ISITMA konumlarında durmadan döner ve sembol sürekli yanıp söner."
  - q: "Kalorifer sıcaklığını kaç dereceye ayarlamalıyım?"
    a: "Kılavuzda kalorifer suyu ayarı 30 ile 85 °C arasında, düşük sıcaklıkta çalışma ayarında 30 ile 45 °C arasında. Alarko, yoğuşmalı kombiden en yüksek verimi almak için ısıtma suyunu 50 °C ya da daha düşük bir değere ayarlamayı öneriyor. Kış ayları için 20 °C oda sıcaklığının yeterli olduğunu da yazıyor."
images:
  coverAlt: "Mutfak duvarında beyaz bir kombi ve önünde soğuk görünen beyaz bir panel radyatör"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda su giriş musluğu"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Musluktan sıcak su geliyor ama petekler soğuk. Kombi çalışıyor gibi görünüyor, yalnız ısıtma yapmıyor. Alarko'nun Seradens Super kullanım ve montaj kılavuzunda bu belirtinin tek bir satırı yok; ama kılavuz kombinin çalışma konumlarını, ekran sembollerini, basınç ayarını ve ısıtmayı ilgilendiren hata kodlarını adım adım anlatıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi o kılavuzdan sırayla topladık. Kaynak tek bir model ailesinin kılavuzu; senin kombinde düğme düzeni farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var, ısıtma yoksa ilk şüpheli çalışma konumu. OFF ya da yalnız musluk sembolü varsa kombi kalorifere çalışmaz; KIŞ ya da SADECE ISITMA'ya al. Sonra kalorifer sıcaklığı, oda termostatı, soğukken 1,2 bar basınç, gaz ve radyatör vanaları. Bunlar doğruysa Alarko Carrier yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **OFF** | Kombi kapalı; kullanım suyu ya da kalorifer ihtiyacında çalışmaz | 🛠️ Konum düğmesiyle KIŞ ya da SADECE ISITMA |
| **Yalnız musluk sembolü** | YAZ konumu; yalnız kullanım suyu | 🛠️ KIŞ ya da SADECE ISITMA |
| **Musluk + radyatör sembolü** | KIŞ konumu; kullanım suyu ve kalorifer | 🛠️ Sıcaklık, termostat, basınç, vanalar |
| **Yalnız radyatör sembolü** | SADECE ISITMA konumu | 🛠️ Sıcaklık, termostat, basınç, vanalar |
| **Radyatör sembolü yanıp sönüyor** | Kalorifer ısınma ihtiyacı var | Kombi ısıtmaya çalışıyor |
| **E04** | Düşük tesisat suyu basıncı | 🛠️ 1,2 bara kadar su ekle |
| **E47** | Yüksek tesisat suyu basıncı | 🛠️ 1,2 bara kadar su tahliye et |
| **E01** | Alev yok veya sahte alev | 🛠️ Gaz sayacı ve gaz vanası, kapat-aç |

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Alarko'nun gaz sızıntısı talimatı şöyle: sakin ol, yanan ateşleri söndür, bütün kapı ve pencereleri aç, bütün gazlı cihazların vanalarını ve daire ile apartman girişindeki gaz vanalarını kapat. Kibrit ya da çakmak yakma, elektrik düğmeleriyle oynama, fişleri çekme ya da takma, zil ve gaz bulunan ortamdaki telefonları kullanma. Yöneticiye haber ver, **187** ile gaz şirketini, **110** ile itfaiyeyi ara. Bu durumda aşağıdaki adımlara geçilmez.

**2. Çalışma konumunu kontrol et.** Kılavuza göre **KAPALI (OFF)** konumunda kombi kullanım suyu ya da kalorifer ihtiyacında çalışmaz. **YAZ** konumunda yalnız kullanım suyu sistemi için çalışır ve ekranda yalnız musluk sembolü sürekli yanar. Kalorifer için **KIŞ** (musluk ve radyatör sembolleri sürekli yanar) ya da **SADECE ISITMA** (yalnız radyatör sembolü sürekli yanar) gerekir. Geçiş, kumanda panelindeki **1 numaralı çalışma konumu düğmesiyle** sırasıyla YAZ, KIŞ, SADECE ISITMA ve KAPALI arasında yapılır.

**3. Radyatör sembolüne bak.** Doğru konumda radyatör sembolü sürekli yanar; kalorifer ısınma ihtiyacı oluştuğunda yanıp söner ve yanma odasında alev oluşumu ekranda ayrı bir sembolle gösterilir. Kılavuzun bir notu: sistemde oda termostatı yoksa ya da bağlantı köprülüyse pompa KIŞ ve SADECE ISITMA konumlarında durmadan döner, bu yüzden radyatör sembolü sürekli yanıp söner.

**4. Kalorifer sıcaklığını kontrol et.** Isıtma sıcaklığı **5 numaralı düğmeyle artırılır, 6 numaralıyla azaltılır**. Kılavuzdaki ayar aralığı **30–85 °C**, düşük sıcaklıkta çalışma ayarında **30–45 °C**. Ekran ışığı sönükken bu düğmelerden birine bir kez basınca o anki ayar görünür. Alarko, yoğuşmalı kombiden yüksek verim için ısıtma suyunu **50 °C ya da altına** ayarlamayı öneriyor; ama değer en alta indirilmişse petekler ılık bile olmayabilir.

**5. Termostat ve termostatik vanalar.** Kılavuza göre KIŞ ya da SADECE ISITMA seçildiğinde kombi, **bir oda termostatı bağlı olması ya da bağlantının köprülenmesi koşuluyla** otomatik olarak yanar. Termostat bağlıysa ısıtma istediğinden emin ol. Radyatörlerde termostatik vana varsa Alarko bu vanaların **küçük adımlarla** açılıp kapatılmasını istiyor; ani ve tam kapatma sıcaklık dalgalanmasına yol açar. Programlı termostatta evde olmayacağın saatler ayarlıysa onları da kontrol et.

**6. Su basıncını oku.** Bilgi (info) düğmesine **2 saniye** bas; ekranda **ı00** satırı kalorifer suyu basıncını gösterir. Kılavuz sistemin **1,2 bar** suyla doldurulmasını ve bu değerin su soğukken kontrol edilmesini istiyor. Basınç düşerse ekranda **E04** görünür; doldurma işlemi kombi soğuk ve kapalıyken, kombinin sol altındaki doldurma musluğuyla ekranda "b1.2" görünene kadar yapılır. Fazla doldurma **E47**'ye yol açar. Ayrıntılar [Alarko kombi E04 hatası](/blog/alarko-kombi-e04-hatasi/) ve [Alarko kombi E47 hatası](/blog/alarko-kombi-e47-hatasi/) yazılarında.

**7. Gaz geliyor mu?** Ekranda **E01** varsa yakıcıda alev görülmemiş demektir. Kılavuzun sırası: **gaz sayacını ve kombi üzerindeki gaz vanasını** kontrol et, şebekeden gaz geldiğinden emin ol. Sonra 1 numaralı düğmeyle kombiyi kapatıp aç ve ateşlemeyi bekle; E01 yine görünürse bir kez daha kapatıp aç. Kılavuza göre bu hata daha çok uzun süre gaz girişi olmayan cihazlarda görülür.

**8. Radyatörler ve servis.** Alarko'nun verimli kullanım önerileri arasında havalandırma sırasında o odanın **radyatör vanalarının kapatılması** var; havalandırma bitince vanayı yeniden açmayı unutma. Radyatörlerin **üstünü ve önünü perde ya da mobilyayla kapatma**. Bunlar doğru, yine de petekler ısınmıyorsa kılavuzun her hata kodunun sonundaki cümle geçerli: problem devam ederse **yetkili servisi ara**.

## Ne zaman servis

- Konum, sıcaklık, termostat ve basınç doğru olduğu hâlde radyatör sembolü yanıp sönüyor ama petekler soğuk kalıyorsa
- E04 ya da E47 doldurma veya tahliyeden sonra geri geliyorsa
- E01 iki kez kapatıp açmaya rağmen sürüyorsa
- Ekranda E02, E03, E05, E16, E22, E35 ya da benzeri bir kod sürekli yanıyorsa (kılavuzun talimatı doğrudan yetkili servis)

Alarko ayrıca yılda en az bir kez yetkili serviste bakım yaptırılmasını ve yetkisiz kişilerin cihaza müdahale etmesine izin verilmemesini istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Konum düğmesi, sıcaklık ayarı, bilgi menüsü, doldurma musluğu, gaz vanası ve radyatör vanaları sende; kombinin kapağının içi, gaz hattı, termostat kablosu ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Seradens Super ya da başka)?
2. Ekranda OFF, yalnız musluk sembolü ya da bir hata kodu var mı?
3. Radyatör sembolü yanıp sönüyor mu?
4. Basınç (ı00) soğukken kaç bar?
5. Bütün odalar mı soğuk, yoksa tek bir oda mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında, basınç değerleri [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasında, kodların genel rehberi [kombi arıza kodları](/blog/kombi-ariza-kodlari/) sayfasında. Bil, gör, çağır.
