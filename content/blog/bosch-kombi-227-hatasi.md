---
title: "Bosch kombi 227 hatası: alev algılanmıyor"
description: "Bosch kombi 227 hatası: Bosch'a göre alev algılanmıyor. Gaz vanası kontrolü, kılavuzdaki reset yolu, gaz kokusu kuralı ve servis sınırı adım adım."
slug: "bosch-kombi-227-hatasi"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork C). Konu seçimi: origin/main'de bosch-kombi-227-hatasi yok; Bosch tarafında yalnız
#   bosch-kombi-ariza-kodlari (227 tek satır) + 1017/CE/E9/EA tek kod sayfaları ve bosch-kombi-kalorifer-isitmiyor var. Buderus'ta buderus-kombi-227-hatasi
#   var (ayrı marka, ayrı sorgu); bağlantı verildi, içerik yalnız Bosch belgelerinden.
# GSC (Sorgular.csv): 3 ay (https___www-5) "bosch kombi 227 hatası" 21 gösterim poz 11,81; 7 gün (https___www-6) "bosch kombi 227 hatası" 20 gösterim poz 10,2,
#   "bosch 227 hatası" 9, "bosch 1200 kombi 227 hatası" 3, "bosch kombi 227 arızası" 3 ve beş varyant daha (2'şer).
# Otomatik tamamlama (#164, bu koşuda, hl=tr gl=tr) tohum "bosch kombi 227" → 1. "bosch kombi 227 hatası", 2. "bosch kombi 227 hatası nedir",
#   3. "bosch kombi 227 arızası", 4. "bosch kombi 227 arıza kodu".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Bosch'un kendi alan adlarından yeniden indirildi. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (K) Bosch Home Comfort "227 Arıza Kodu" sayfası  https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/227/
#      HTTP 200. HTML dinamik: bu koşu md5 74f5686792a12b4bf3e62ee0f5d0106e, yerel kopya (kaynak-bosch-kombi-sprint/kod-227.html) md5 6ef3349cc49752692c4a58735cd51d8c;
#      ana metin iki kopyada birebir aynı: "Arıza Tanımı: Alev Algılanmıyor Çözüm: Gaz vanasının açık olup olmadığını kontrol edin."
#  (D) Aynı sitenin arıza kodları dizini (…/ariza-kodlari-ve-cozumleri/): 227, "Condens 2300i W Arıza Kodları" başlığı altında (227 356 1017 2971 2972).
#  (W) Condens 2300i W kullanma kılavuzu 6721830375 (2021/03), 16 s.  https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721830375.pdf
#      HTTP 200 application/pdf, md5 167bfab2336acd938ef5e1d26bd5dec9 (yerel kopyayla aynı)
#  (V) Condens 2200i W kullanma kılavuzu 6721839341 (2023/04), 12 s.  https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839341.pdf
#      HTTP 200 application/pdf, md5 e06a7d8792003fe41f2a63b08204887b (yerel kopyayla aynı)
# Sayfa eşlemesi: gaz kokusu W s.3 · atık gaz kokusu W s.4 · tesisat kaçakları W s.5 · K tuşu ile çalıştırma, 15 dk sifon dolumu, donma uyarısı, ekran göstergeleri W s.7
#   · 6.1 gaz vanası açma/kapama, 6.2 H sembolü + reset + servise bildirilecek cihaz bilgileri (tip etiketi), bakım yılda bir, basınç 1–2 bar W s.11 · aynı H/reset metni V s.9.
# BİLEREK YAZILMAYANLAR: alevin neden algılanmadığına dair teknik neden (iyonizasyon elektrodu, ateşleme, gaz basıncı vb. — belgelerde yok, servis işi)
#   · gaz sayacı/kartlı sayaç ya da şebeke gaz kesintisi yorumu (227 sayfasında yok) · reset sayısı sınırı (Bosch belgelerinde yok, uydurulmadı)
#   · 227'nin 2200i W ya da 1200 W'de geçtiği iddiası (Bosch 227'yi yalnız Condens 2300i W başlığında listeliyor) · kapak açma · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-kombi-227-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; ana kapama tertibatından ya da sayaçtaki vanadan gazı kes, pencereleri aç, binanın dışından gaz şirketini ara."
  - "Ekranda H sembolüyle birlikte 227 kodunu gör ve not et; Bosch'a göre 227, alevin algılanmadığı anlamına gelir."
  - "Kombinin altındaki gaz vanasının kolunun akış yönünde, yani açık konumda durduğunu kontrol et; kapalıysa kolu bastırıp sola sonuna kadar çevir."
  - "Kombiyi kapatıp yeniden çalıştırarak ya da iki ok tuşunu H ve ünlem sembolü kaybolana kadar birlikte basılı tutarak arızayı sıfırla."
  - "Kombi yeniden çalışınca ekranda gidiş suyu sıcaklığının göründüğünü ve ısıtmanın başladığını izle."
  - "227 sıfırlamadan sonra geri geliyorsa kumanda paneli kapağındaki tip etiketinden cihaz adını ve seri numarasını not et, arıza kodunu da ekleyip yetkili servisi ara."
faq:
  - q: "Bosch kombide 227 hatası ne demek?"
    a: "Bosch Home Comfort'un arıza kodları sayfasına göre 227 alevin algılanmadığını bildirir. Bosch'un aynı sayfadaki tek çözüm önerisi gaz vanasının açık olup olmadığını kontrol etmek; arıza düzelmezse en yakın yetkili servise başvurmak."
  - q: "227 kodu hangi Bosch kombilerde çıkar?"
    a: "Bosch'un arıza kodları dizini 227'yi Condens 2300i W başlığı altında, 356, 1017, 2971 ve 2972 ile birlikte listeliyor. Condens 2500 W, Class ve Comfort serileri gibi diğer modeller harfli kodlar kullanıyor. Kodun senin modelinde ne anlama geldiğini kendi kullanma kılavuzunla karşılaştır."
  - q: "Bosch kombide reset nasıl atılır?"
    a: "Condens 2300i W ve 2200i W kılavuzlarına göre bazı arızalar kombiyi kapatır ve kombi sıfırlanmadan tekrar çalışmaz. İki yol var: cihazı kapatıp tekrar çalıştırmak ya da H ve ünlem sembolleri gösterilmeyene kadar iki ok tuşunu aynı anda basılı tutmak. Ardından cihaz tekrar çalışmaya başlar ve ekranda gidiş suyu sıcaklığı görünür."
  - q: "Reset attım, kombi uzun süre düşük güçte çalışıyor; bu normal mi?"
    a: "Condens 2300i W kılavuzuna göre kombi çalıştırıldığında ekranda değişmeli olarak sembol ve gidiş suyu sıcaklığı görünüyorsa cihaz, yoğuşma suyu sifonunu doldurmak için yaklaşık 15 dakika en düşük ısıl güçte kalır. Bu bir arıza işareti değil."
  - q: "Gaz vanası açık, 227 yine geliyor; ne yapmalıyım?"
    a: "Kılavuzun talimatı açık: bir arıza giderilemediğinde servisi ya da müşteri hizmetlerini ara, gösterilen arıza kodunu ve cihaz bilgilerini bildir. Cihaz adı ve seri numarası kumanda paneli kapağındaki tip etiketinde yazıyor. Kombinin kapağını açmak, gaz hattına ya da atık gaz parçalarına dokunmak kullanıcının işi değil."
images:
  coverAlt: "Mutfak duvarında asılı beyaz bir kombi ve ekranında yanıp sönen bir uyarı sembolü"
  steps:
    - "Ardına kadar açılmış bir mutfak penceresi ve önünde boş, sakin bir tezgâh"
    - "Duvara asılı kombinin küçük dijital ekranının yakın planı"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Bir elin kombi kumanda panelindeki iki ok tuşuna aynı anda bastığı yakın plan"
    - "Kombi ekranında beliren iki haneli bir sıcaklık değeri"
    - "Kombinin kumanda paneli kapağının arkasındaki tip etiketi ve yanında bir not defteri"
---

Kombi bir anda sustu, ekranda **H** sembolü ve yanında **227** var. Evde sıcak su yok, petekler soğumaya başlamış. Bosch'un arıza kodları sayfası bu kodu tek cümleyle tanımlıyor: **alev algılanmıyor.** Aynı sayfa sana tek bir kontrol bırakıyor, kombinin kullanma kılavuzu da bu kontrolün nasıl yapılacağını ve arızanın nasıl sıfırlanacağını anlatıyor. Bu yazıda, servisi aramadan önce evde güvenle bakabileceğin her şeyi Bosch'un kendi sayfası ile Condens 2300i W ve Condens 2200i W kullanma kılavuzlarından sırayla topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 227, Bosch'a göre alevin algılanmadığı anlamına gelir. Gaz kokusu varsa hiçbir düğmeye dokunma. Koku yoksa kombinin gaz vanasının açık olduğuna bak, sonra kılavuzdaki yolla arızayı sıfırla. Kod geri geliyorsa cihaz bilgilerini not et ve Bosch yetkili servisini ara.

## Ekran ne söylüyor

| Ekranda gördüğün | Bosch'a göre anlamı | Kim ne yapar |
|---|---|---|
| **H + 227** | Alev algılanmıyor | 🛠️ Gaz vanası kontrolü, sonra sıfırlama |
| **H sembolü** | Bir arıza meydana geldi; nedeni kodla gösterilir | 🛠️ Kodu not et |
| **Sembol ve sıcaklık değişmeli** | Yaklaşık 15 dakika sifon dolumu, en düşük güç | ⏳ Bekle |
| **Gidiş suyu sıcaklığı** | Cihaz tekrar çalışıyor | ✅ Normal |
| **227 sıfırlamadan sonra yine** | Arıza giderilemedi | 🔧 Yetkili servis |

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Bosch kılavuzunun emniyet bölümü gaz kokusu için net kurallar veriyor: sigara içme, çakmak ve kibrit kullanma; hiçbir elektrikli şalteri kullanma, fiş çekme; telefonu kullanma, kapı zilini çalma. Ana kapama tertibatından ya da gaz sayacındaki vanadan gaz beslemesini kes, pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et. **Binanın dışından** itfaiyeyi, polisi ve gaz dağıtım şirketini ara. Atık gaz kokusu alıyorsan kılavuz ısıtma cihazını kapatmanı istiyor. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kodu oku ve not et.** Kılavuza göre **H sembolü** bir arıza meydana geldiğini gösterir; arızanın nedeni yanındaki kodla verilir. Bosch'un arıza kodları sayfasında **227 = alev algılanmıyor.** Bosch bu kodu arıza kodları dizininde **Condens 2300i W** başlığı altında listeliyor; Condens 2200i W kılavuzu da arızaları aynı biçimde, H sembolü ve rakamlı bir kodla gösteriyor. Kodu fotoğrafla ya da bir kâğıda yaz; servis de bunu soracak.

**3. Gaz vanası açık mı?** Bosch'un 227 için yazdığı çözüm tek cümle: **gaz vanasının açık olup olmadığını kontrol edin.** Kılavuzun "Gaz vanasının açılması/kapatılması" bölümü vanayı şöyle tarif ediyor: kol **akış yönündeyse açık**, akış yönünün **enine** duruyorsa kapalı. Kapalıysa kolu bastır ve **sola doğru sonuna kadar** çevir. Vanayı kapatmak ise kolu bastırıp sağa sonuna kadar çevirmekle oluyor. Vana zaten açıksa dokunmana gerek yok, bir sonraki adıma geç.

**4. Arızayı sıfırla.** Kılavuza göre bazı arızalar ısıtma tesisatının kapanmasına neden olur ve tesisat **sıfırlanmadan tekrar çalışmaz.** İki yol var: cihazı **K tuşu** ile kapatıp tekrar çalıştırmak ya da **H ve ünlem sembolleri artık gösterilmeyene kadar iki ok tuşunu aynı anda basılı tutmak.** Condens 2200i W kılavuzu da aynı iki yolu veriyor. Gaz vanasını yeni açtıysan sıfırlamayı ondan sonra yap.

**5. Kombinin yeniden başladığını izle.** Sıfırlamadan sonra cihaz tekrar çalışmaya başlar ve ekranda **gidiş suyu sıcaklığı** gösterilir. Ekranda bir sembol ile gidiş suyu sıcaklığı değişmeli olarak görünüyorsa telaşlanma: kılavuza göre kombi bu sırada yoğuşma suyu sifonunu doldurmak için **yaklaşık 15 dakika en düşük ısıl güçte** kalır.

**6. Kod geri geliyorsa servis.** Kılavuzun talimatı: bir arıza giderilemediğinde **servisi veya müşteri hizmetlerini ara**, gösterilen arıza kodunu ve cihaz bilgilerini bildir. Cihaz adı ve seri numarası **kumanda paneli kapağındaki tip etiketinde** yazılı. Bosch'un 227 sayfası da arıza düzelmezse en yakın yetkili servise başvurmanı söylüyor.

## Kombiyi kapalı bırakma

227 çıktıktan sonra kombiyi günlerce kapalı bırakmak başka bir sorun açabilir. Kılavuzun uyarısı: ısıtma tesisatı uzun süreli elektrik kesintilerinde, besleme geriliminin uzun süre kapatılmasında, hatalı yakıt beslemesinde ya da **kombi arızasında donabilir**. Don tehlikesi varsa tesisatın sürekli devrede olduğundan emin olman isteniyor. Bu yüzden 227 geri geliyorsa beklemek yerine servisi erken ara.

**Basınç da bak.** Kılavuza göre işletme basıncı normal durumda **1 ila 2 bar** arasında olmalı; güncel değeri manometreden okuyabilirsin. Isıtma suyu eklemenin yolunu yetkili servisin göstermesi isteniyor. Sisteme sık su ekleniyorsa bu, tesisatta kaçak olduğunu gösterir ve kaçağın giderilmesi gerekir. Değerler için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bakabilirsin.

## Ne zaman servis

- Gaz vanası açık, sıfırlamayı yaptın ve 227 yine geldiyse
- Gaz ya da atık gaz kokusu aldıysan (önce emniyet kuralları, sonra servis)
- Ekranda 227 dışında başka bir kod da çıkıyorsa
- Yıllık muayene yapılmadıysa: kılavuz ısıtma tesisatının yılda en az bir defa yetkili servis tarafından muayene edilmesini istiyor

⛔ **Kendin-çöz sınırı burada biter.** Gaz vanasının kolu, ekran, tuşlar ve manometre sende; kombinin kapağının içi, gaz hattı, atık gaz parçaları ve alevin neden algılanmadığının teşhisi yetkili servisin işi.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tip etiketindeki cihaz adı)?
2. Ekranda tam olarak hangi kod var, yanında H sembolü var mı?
3. Gaz vanasının kolu akış yönünde mi?
4. Sıfırlamadan sonra kombi çalıştı mı, kod kaç dakika sonra geri geldi?
5. Evde gaz ya da atık gaz kokusu var mı?

Ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bosch'un diğer kodları [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasında, Buderus kombin varsa [Buderus kombi 227 hatası](/blog/buderus-kombi-227-hatasi/) yazısına bak, koddan bağımsız nedenler [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında. Bil, gör, çağır.
