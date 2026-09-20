---
title: "Buderus kombi arıza kodları"
description: "Buderus kombi arıza kodları model model: 227, 1017, 6A, 4C, 2E ve EP'nin anlamı, basınç ve reset adımları, servis sınırı; Buderus'un kendi belgelerinden."
slug: "buderus-kombi-ariza-kodlari"
date: "2026-09-17"
category: "Kombi"
faq:
  - q: "Buderus kombide 6A kodu ne demek?"
    a: "Buderus'un 6A sayfasına göre 6A bir ateşleme sorunudur. İlk kontrol gaz vanasının açık olup olmadığıdır: doğalgazlı ocağın varsa ocağı açmayı dene; ocak yanmıyorsa daire dışındaki gaz vanasına bak, ocak çalışıyorsa kombinin yanındaki gaz vanasının boruyla aynı hizada, yani açık olduğundan emin ol. Vana açık olduğu hâlde kod sürüyorsa sayfa kombiyi resetlemeyi öneriyor. Reset sonrası da sürüyorsa Buderus yetkili servisine ulaşılması gerekiyor."
  - q: "Buderus kombide 4C kodu ne demek, ne yapmalıyım?"
    a: "Buderus'un 4C sayfasına göre 4C, tesisattaki su sıcaklığının maksimum değeri aşıp aşırı ısınmaya yol açtığını gösterir; kombi kendini güvenlik moduna alıp çalışmayı durdurur. Sayfanın önerdiği sıra: su basıncına bak, 1 bar'ın altındaysa su basıp 1,2-1,5 bar'a getir; basınç normalse kalorifer vanalarına bak, kapalıysa aç; sonra kombiyi resetle. Bu adımlara rağmen kod sürüyorsa yetkili servis gerekir."
  - q: "Buderus kombide 1017, 2971, 2E ve 4L kodlarının farkı ne?"
    a: "Dördü de basınçla ilgili ama farklı modellerde çıkıyor. GB122i ve GB022i listesindeki 1017 su basıncının çok düşük olduğunu, 2971 çalışma basıncının çok düşük olduğunu gösterir; ikisinde de çözüm basıncı kontrol edip gerekirse öngörülen basınca kadar su eklemektir, 2971 için ayrıca ısıtma tesisatının havasının alınması isteniyor. 2E (U022, U072) ve 4L (GB172i, GB062, GB012, GB072, GB042) tesisat su basıncının düşük olduğunu gösterir; Buderus basıncın 1,2 bar'a yükseltilmesini ve yetkili servise başvurulmasını söylüyor."
  - q: "Buderus kombinin basıncı kaç bar olmalı?"
    a: "GB022i ve GB072 kullanma kılavuzları işletme basıncının normal durumlarda 1 ila 2 bar arasında olması gerektiğini yazıyor; GB172i.2 kılavuzu da normal şartlarda çalışma basıncını 1 ile 2 bar arası veriyor. Üç kılavuz da ısıtma suyunun en yüksek sıcaklığında 3 bar'ın aşılmamasını istiyor. Buderus'un 4C sayfası ideal aralığı 1,2-1,5 bar olarak veriyor; 2E ve 4L sayfaları basıncın 1,2 bar'a yükseltilmesini söylüyor."
  - q: "Buderus kombi nasıl resetlenir?"
    a: "Kılavuzlara göre iki yol var: cihazı kapatıp tekrar çalıştırmak ya da kombinin kendi tuşuyla sıfırlamak. GB072 kılavuzu reset tuşunu ekranda Reset yazısı görünene kadar basılı tutmayı, GB022i kılavuzu H ve ! sembolleri kaybolana kadar kılavuzda gösterilen iki tuşu aynı anda basılı tutmayı tarif ediyor. Reset tuşuna uzun süre basmak EP ya da Fd kodu olarak görünüyor; Buderus tuşa 30 saniyeyi aşmayacak şekilde basılmasını istiyor. GB172i.2 kılavuzu, arızayı sıfırlamak için tekrarlanan girişimlerin cihazı güvenlik nedeniyle bloke edebileceğini (arıza kodu 2980) yazıyor."
  - q: "Aynı kod her Buderus kombide aynı anlama mı gelir?"
    a: "Buderus'un arıza kodları sayfası kodları model başlıkları altında listeliyor ve kod düzeni modele göre değişiyor: GB122i ve GB022i 227, 1017 gibi rakamlı kodlar kullanırken GB172i, GB062, GB072 ve Logamax U serisi 6A, 4C, CL gibi harfli kodlar kullanıyor. Aynı ailede bile fark var: 3A fan devir sayısının düşük olduğunu, 3 A-Y ise fanın çalışmadığını gösteriyor. Kodu yorumlamadan önce modelini tip etiketinden öğren."
  - q: "Kombiden gaz kokusu gelirse ne yapmalıyım?"
    a: "GB022i kullanma kılavuzunun güvenlik bölümüne göre: sigara içme, çakmak ve kibrit kullanma; herhangi bir elektrikli şalter kullanma, elektrik fişini çekme; telefonu kullanma ya da kapı zilini çalma; ana kapama tertibatından ya da gaz sayacındaki vanadan gaz beslemesini kes; pencere ve kapıları aç; tüm apartman sakinlerini uyar ve binayı terk et; binaya üçüncü şahısların girmesine engel ol; binanın dışında itfaiyeyi, polisi ve gaz dağıtım şirketini ara."
images:
  coverAlt: "Kombi dolabının içinde duvara asılı beyaz bir kombi; kombinin altındaki borulara ve sarı kollu bir vanaya uzanan bir el, yanda tezgâhta açık duran bir kullanma kılavuzu"
# --- Provenans (yayında görünmez) ---
# 2026-09-17, curl -sL -A "Mozilla/5.0" ile indirildi; PDF'ler pdftotext (düz ve -layout) ile okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan ya da üçüncü taraf siteden alınmadı.
# 1) Buderus Türkiye — "Arıza Kodları ve Çözümleri"
#    https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-cozumleri/
#    HTTP 200, 178.337 B, md5 bfbdb618b5276aa71deaabeca20b6d31 (dinamik sayfa; md5 indirme anına aittir)
#    Model başlıkları (GB122i, GB022i, GB172i, GB062, GB012, GB072, GB042, U022, U072, U052, U062) ve kod listeleri bu sayfadan.
#    Sayfadaki 36 kod bağlantısının 36'sı indirildi, 36/36 HTTP 200
#    (https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/<kod>-ariza-kodu/).
#    Çıkarılan gövde metinlerinin birleşik md5'i: cde29171cac5ab9ebca6747b5bb7d550.
#    Uzun metinli sayfalar: 4c · 6a. Diğerleri "Arıza Tanımı / Çözüm" kalıbında. U052/U062'deki "-" kodu "--ariza-kodu" sayfası.
# 2) Buderus Logamax plus GB022i-20 KD H Kullanma Kılavuzu, doküman 6721835260 (2021/03)
#    https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf
#    HTTP 200, 577.309 B, 16 sayfa, md5 285eeb793f4a256196ab942d187cff31
#    (bağlantı buderus.com GB022i ürün sayfasındaki "Dokümanları göster" → td/?query=7736902005 listesinden)
#    Gaz kokusu: s.3 · gaz vanası açma/kapama, H sembolü + örnek kod 214, reset iki yolu, Tab. 3 cihaz bilgileri,
#    tip etiketi = kumanda paneli kapağı: s.11 · basınç 1-2 bar, manometre, doldurma "tesisata göre farklılık gösterir /
#    servisten göstermesini isteyin", soğukken maks. 40 °C, 3 bar üst sınır, radyatör havası: s.12
# 3) Buderus Logamax plus GB072-24 | GB072-24K Kullanma Kılavuzu, doküman 6721835150 (2021/03)
#    https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf
#    HTTP 200, 1.305.490 B, 16 sayfa, md5 e90532810ee5ec5e8414b1c01e659a75
#    (bağlantı buderus.com GB072 ürün sayfasındaki "Dokümanları göster" → td/?query=7736900564 listesinden)
#    Çiğ gaz kokusu + tesisat kaçakları: s.3 · basınç 1-2 bar, doldurma vanası/manometre 1-2 bar, soğukken, 3 bar: s.5 ·
#    reset tuşu, "Reset yazısı gösterilene kadar", tip etiketi / ön kapaktaki cihaz tipi çıkartması: s.12
# 4) Buderus Logamax plus GB072-24 | GB072-24K Montaj Kılavuzu, doküman 6721835147 (2022/11)
#    https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835147.pdf
#    HTTP 200, 5.056.422 B, 32 sayfa, md5 10fff43981a512e39cb0b0037019605a
#    Bloke edici arıza (sürekli gösterilir, kendiliğinden tekrar çalışır) / kilitleyici arıza (yanıp söner, reset gerekir): s.25
# 5) Buderus Logamax plus GB172i.2 Kullanım Kılavuzu, doküman 6721852623 (2023/12)
#    https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf
#    HTTP 200, 1.744.938 B, 16 sayfa, md5 e2c3f95692c0e3c1e3a2ea3b59997420
#    Gaz kokusu: s.3 · H sembolü + örnek kod 228, tekrarlanan reset → 2980 blokajı, basınç 1-2 bar, ok tuşu ile ekranda basınç,
#    LoPr mesajı ve 0,3 bar altında blokaj: s.7 · su ekleme soğukken maks. 40 °C, 3 bar, "Doldurma cihazını açın": s.8
# İncelenip kaynak olarak kullanılmayanlar: GB022i Montaj 6721835259 (md5 b36a3cefaa75cb4d53b97da3bac92b45),
#   GB122i.2 Kullanma 6721843895 (md5 14a8d326f557827c9670b4d367e65098) ve Montaj 6721843894 (md5 21789363485d75945f8ba63d4ccfdb75)
#   — kullanıcı bölümleri GB022i kılavuzuyla aynı içerikte; ek olgu vermediği için künyeye alınmadı.
# BİLEREK yazılmayanlar:
#  - "En sık görülen kod" iddiası (4C ve 6A sayfaları "sıklıkla karşılaş..." diyor ama sıralama/oran yok).
#  - KIM, Logamatic BC20, gaz armatürü, kod anahtarı gibi parça adlarının ne olduğu (belgeler kullanıcıya açıklamıyor).
#  - Sensör/kablo/termostat kablosu/yoğuşma gideri/baca montajı/gaz bağlantı basıncı kontrolleri (CC, EC, "-", 5L, B3, 3A, 9C):
#    kod sayfaları "kontrol edin/edilmeli" diyor; kombinin içi, elektrik ve gaz tarafı olduğu için servis işi olarak verildi.
#  - 356'daki "en az 196 VAC" değerinin evde nasıl ölçüleceği; 3A/3C/C7'deki "voltaj düşük olabilir" için kullanıcı adımı.
#  - 9C'de tanım (kod anahtarı) ile çözüm (gaz vanası/gaz bağlantı basıncı) arasındaki ilişki: sayfa açıklamıyor, olduğu gibi aktarıldı.
#  - Su takviye musluğunun her modelde aynı yerde/aynı yönde olduğu (yalnız 4C sayfasının tarifi, kılavuzların
#    "servisten göstermesini isteyin" cümlesiyle yan yana verildi).
#  - Reset tuşunun GB022i'deki ikinci tuşunun adı (kılavuzda simge olarak basılı, metinde okunmuyor).
#  - GB172i.2'nin sayfadaki GB172i kod listesini kullandığı (sayfa GB172i.2 başlığı açmıyor; kılavuz rakamlı örnek veriyor).
#  - GB122i.2 / GB022i.2'nin sayfadaki GB122i / GB022i listesiyle aynı olduğu.
#  - Buderus müşteri hattı numarası, tamir süresi, parça adı, fiyat.
# Belgeler arası farklar (gövdede yan yana verildi):
#  - Basınç: kılavuzlar 1-2 bar · 4C sayfası ideal 1,2-1,5 bar · 2E/4L sayfaları "1,2 bar'a yükseltilmeli".
#  - Su ekleme: 4C sayfası "su takviye musluğunu saat yönünün tersine" · GB022i "servisten göstermesini isteyin" ·
#    GB072 aynı cümle + "doldurma vanasını açın, manometrede 1-2 bar, kapatın" · GB172i.2 "Doldurma cihazını açın".
#  - Reset: 6A sayfası "resetleme tuşuna birkaç saniye basılı" · GB072 "Reset yazısı gösterilene kadar" · GB022i iki tuş, H ve ! kaybolana kadar ·
#    EP/Fd/7 C-L sayfaları "30 saniyeyi aşmayacak şekilde" · GB172i.2 tekrarlanan girişim → 2980.
#  - Gaz kokusu: GB022i ve GB172i.2 aynı uzun liste · GB072 daha kısa liste.
#  - Kod sayfasındaki yazım hataları normalize edildi: "Defransiyel" → "Diferansiyel", "tipii" → "tipi", "yülseltilmeli" → "yükseltilmeli".
---

Buderus kombinin ekranında bir kod yanıp sönüyor: 227, 1017, belki 6A ya da 4C. Kodun ne dediğini bilmek, servisi aramadan önce yapabileceğin birkaç basit kontrolü de gösterir.

Bu yazıdaki kodlar Buderus Türkiye sitesindeki **arıza kodları ve çözümleri** sayfasından ve Buderus'un **Logamax plus GB022i, GB072 ve GB172i.2** kombilerinin kullanma kılavuzlarından alındı. Buderus kodları model başlıkları altında veriyor, çünkü kod düzeni modele göre değişiyor. Tablolar da bu yüzden modele göre ayrıldı.

> ⚠️ **Bu yazı kullanım ve kontrol rehberidir, tamir değil.** Gaz, baca, fan, sensör, kart ve kombinin iç kısmı yetkili servis işidir. Kod listeleri modele göre değişir; **kendi kombinin kılavuzu esastır.**

## Gaz kokusu alıyorsan önce bunu yap

Kod okumaya geçmeden önce: kombinin çevresinde gaz kokusu varsa GB022i ve GB172i.2 kılavuzlarının güvenlik bölümü şunları istiyor.

- Sigara içme, çakmak ve kibrit kullanma.
- Herhangi bir elektrikli şalter kullanma, elektrik fişini çekme.
- Telefonu kullanma, kapı zilini çalma.
- Ana kapama tertibatından ya da gaz sayacındaki vanadan **gaz beslemesini kes**.
- Pencere ve kapıları aç.
- Tüm apartman sakinlerini uyar ve binayı terk et.
- Binaya üçüncü şahısların girmesine engel ol.
- **Binanın dışında:** itfaiyeyi, polisi ve gaz dağıtım şirketini ara.

GB072 kılavuzu aynı durum için daha kısa bir liste veriyor: gaz vanasını kapat, pencere ve kapıları aç, elektrik düğmelerine dokunma, açık alevleri söndür, evin dışına çıkarak gaz dağıtım şirketine ve yetkili servise telefon et.

## Önce modeli öğren

Aynı Buderus logosunun altında iki ayrı kod düzeni var:

- **Rakamlı kodlar:** Logamax plus GB122i ve GB022i için Buderus'un listesi 227, 356, 1017, 2971, 2972. GB022i kullanma kılavuzu da arızayı ekranda **H sembolü** ve rakamlı bir kodla gösteriyor (kılavuzdaki örnek 214). Daha yeni GB172i.2 kılavuzu da H sembolü ve rakamlı kod kullanıyor (kılavuzdaki örnek 228).
- **Harfli kodlar:** Logamax plus GB172i, GB062, GB012, GB072, GB042 ve Logamax U022, U072, U052, U062 için liste 6A, 4C, CL gibi rakam ve harften oluşan kodlar.

Kombinin model adı ve seri numarası, GB022i kılavuzuna göre **kumanda paneli kapağındaki tip etiketinde** yazıyor; GB072 kılavuzu **tip etiketini ya da ön kapaktaki cihaz tipi çıkartmasını** gösteriyor. Servisi ararken de bu bilgiler istenecek.

## GB122i ve GB022i kodları (rakamlı)

| Kod | Buderus'un tanımı | Buderus'un çözümü |
|---|---|---|
| **227** | Alev algılanmamaktadır | Gaz vanasının açık olup olmadığını kontrol et ✅ |
| **1017** | Su basıncının çok düşük olması | Su basıncını kontrol et, gerekirse öngörülen basınca ulaşılana kadar su ilave et ✅ |
| **2971** | Çalışma basıncının çok düşük olması | Isıtma tesisatının havasını al; su basıncını kontrol et, gerekirse su ilave et ✅ |
| **356** | Kombi için besleme gerilimi çok düşüktür | En az 196 VAC besleme gerilimi oluşturulmalı 🔧 |
| **2972** | Şebeke gerilimi çok düşüktür | Olması gereken gerilim beslemesi oluşturulmalı 🔧 |

✅ evde kontrol edilebilir · 🔧 yetkili servis. Gerilim kodlarında elektrik beslemesinin ölçülmesi ve düzeltilmesi kullanıcıya tarif edilmedi; burada servise bırakıldı.

## Harfli kodlar: model model hangi kod var

Buderus'un sayfası her modelin altında şu kodları listeliyor:

| Model | Listelenen kodlar |
|---|---|
| **Logamax plus GB172i** | 0Y · 2 E-Y · 3 A-Y · 4L · 4Y · 5L · 6A · 6C · 7 C-L · 9 U-L · H11 · EL-8Y |
| **Logamax plus GB062 · GB042** | 3C · 4L · 4Y · 5L · 6A · 6C · CC · CL · EP |
| **Logamax plus GB012** | 3C · 4L · 4Y · 5L · 6A · 6C · B3 · C7 · CL · EP · EC |
| **Logamax plus GB072** | 3C · 4L · 4Y · 5L · 6A · 6C · 9P · CC · CL · EL · EP |
| **Logamax U022 · U072** | 2E · 3A · 3C · 3Y · 4C · 6A · 6C · CL · C7 · d7 · Fd · P · I I |
| **Logamax U052** | 3A · 3C · 3Y · 4C · 4Y · 5L · 6A · 6C · CL · EC · EL · EP · "-" |
| **Logamax U062** | 3A · 3C · 3Y · 4C · 4Y · 5L · 6A · 6C · 9C · CL · EL · EP · "-" |

## Harfli kodların anlamı

Buderus her kod için tek bir açıklama sayfası kullanıyor; aynı kod birden fazla modelde geçiyorsa aynı sayfaya bağlanıyor.

**Evde kontrol edilebilenler ✅**

| Kod | Buderus'un tanımı | Buderus'un çözümü |
|---|---|---|
| **6A** | Ateşleme sorunu | Gaz vanasını kontrol et (aşağıda), sonra kombiyi resetle. İkisinden sonra sürüyorsa servis |
| **4C** | Su sıcaklığı maksimum değeri aşmış, aşırı ısınma; kombi kendini bloke eder | Su basıncına bak (1 bar'ın altındaysa su bas), basınç normalse kalorifer vanalarını kontrol et, kapalıysa aç, sonra resetle. Sürüyorsa servis |
| **2E · 4L** | Tesisat su basıncı düşük | Tesisat su basıncı 1,2 bar'a yükseltilmeli; yetkili servise başvur |
| **EP** | Uzun süreli olarak reset butonuna basılmış | Reset tuşuna 30 saniyeyi aşmayacak şekilde bas; sürüyorsa servis |
| **Fd** | Reset tuşuna yanlışlıkla 30 saniyeden uzun süre basılmış | Reset tuşuna 30 saniyeyi aşmayacak şekilde basılı tut |
| **7 C-L** | Elektrik voltaj düşüklüğü hataları | Reset tuşuna 30 saniyeyi aşmayacak şekilde basılı tut; sürüyorsa servis |

6A için Buderus'un tarif ettiği gaz vanası kontrolü şöyle: doğalgazlı ocağın varsa ocağı açmayı dene. Ocak yanmıyorsa önce **daire dışındaki gaz vanasına** bak. Ocak çalışıyorsa **kombinin yanındaki gaz vanasına** bak: vana boruyla aynı hizadaysa açıktır. GB022i kılavuzuna göre de gaz vanasının kolu akış yönündeyse vana açık, akış yönünün enine duruyorsa kapalıdır.

**Doğrudan yetkili servis 🔧**

| Kod | Buderus'un tanımı |
|---|---|
| **0Y** | Sensör sıcaklık artışı yüksek |
| **2 E-Y** | Kalorifer tesisatı sirkülasyon problemleri |
| **3 A-Y · C7** | Fan çalışmıyor (voltaj düşük olabilir) |
| **3A** | Fan devir sayısı düşük (voltaj düşük olabilir, baca montajı kontrol edilmeli) |
| **3C** | Diferansiyel basınç şalteri kapatmıyor (voltaj düşük olabilir) |
| **3Y** | Diferansiyel basınç kapalı durumdayken açılmıyor |
| **4Y** | Gidiş suyu sensörü kontrol edilmeli |
| **5L** | BUS iletişiminde kesinti (termostat kablosu kontrol edilmeli) |
| **6C** | Gaz kesildikten sonra alev algılanıyor |
| **9 U-L** | KIM algılanmadı, gaz armatürü hatası |
| **9P** | KIM algılanmadı |
| **9C** | Kod anahtarı algılanmıyor (sayfa ayrıca gaz vanasının açık olup olmadığının ve gaz bağlantı basıncının kontrol edilmesini söylüyor) |
| **B3** | Yoğuşma eşanjöründe su seviye sensörü hatası (yoğuşma gideri kontrol edilmeli) |
| **CC · EC · "-"** | Dış hava sensörü algılanmıyor |
| **CL · H11** | Kullanım suyu sensörü kontrol edilmeli |
| **d7** | Gaz grubu kontrol edilmeli |
| **EL** | KIM veya Logamatic BC20 arızalı |
| **EL-8Y** | Dahili arıza |
| **I I** | Fan devir ayarı seçilmemiş |
| **P** | Cihaz tipi tanımlanmamış |

Sensör, kablo ve gider kodlarında Buderus'un sayfası "kontrol edin" diyor. Bu parçalar kombinin içinde, elektrik ya da gaz tarafında durduğu için burada **servis işi** olarak verildi.

## Basınç düşükse: Buderus ne diyor

Basınç kodlarının (1017, 2971, 2E, 4L ve 4C'nin ilk adımı) ortak çözümü su eklemek. Rakamlar Buderus'un belgelerinde iki farklı biçimde geçiyor:

- **GB022i, GB072 ve GB172i.2 kılavuzları:** işletme basıncı normal durumlarda **1 ila 2 bar** arasında olmalı. Daha yüksek bir basınç gerekiyorsa değeri yetkili servis verir. Isıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.
- **Buderus'un 4C sayfası:** ideal aralık **1,2–1,5 bar**. 2E ve 4L sayfaları basıncın **1,2 bar'a** yükseltilmesini söylüyor.

Basıncı GB022i ve GB072'de **manometreden** okursun. GB172i.2'de **ok tuşuna** basınca çalışma basıncı ekranda görünür; basınç ayarlı alt değerin altına düşünce ekranda **LoPr** mesajı çıkar, 0,3 bar'ın altında ısıtma tesisatı bloke edilir. Kılavuzun iki durumda da istediği aynı: ısıtma tesisatını doldur.

Su eklemenin tarifi belgelerde farklı:

- **Buderus'un 4C sayfası:** kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevirerek basıncı 1,2–1,5 bar'a yükselt.
- **GB072 kılavuzu:** doldurma vanasını aç, manometrede **1 ila 2 bar** görünene kadar doldur, **vanayı tekrar kapat**.
- **GB022i ve GB072 kılavuzları:** doldurma işlemi **tesisata göre farklılık gösterir**, bu yüzden yetkili servisten nasıl yapıldığını göstermesini iste.
- **GB022i ve GB172i.2 kılavuzları:** tesisatı **yalnız soğukken** doldur (gidiş suyu en fazla 40 °C). Sıcak kombiye soğuk su eklemek çatlaklara yol açabilir.

Kendi kombinde musluğun yerini bilmiyorsan kılavuza bak ya da ilk servis ziyaretinde gösterilmesini iste. GB072 kılavuzunun uyarısı net: sisteme **sık su ekleniyorsa** bu, tesisatta su kaçağı olduğunu gösterir ve kaçağın giderilmesi gerekir. Basıncın arkasındaki mantık için: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) · [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/).

2971'in çözümünde ısıtma tesisatının havasının alınması da var. GB022i ve GB172i.2 kılavuzlarının bakım bölümü kullanıcıya şunu söylüyor: radyatör dengesiz ısınıyorsa **radyatörlerin havasını al**. Ayrıntı için: [petekler ısınmıyor](/blog/petekler-isinmiyor/).

## Reset: yollar ve sınırlar

GB072 montaj kılavuzu arızaları ikiye ayırıyor:

- **Bloke edici arıza:** kod ekranda sürekli görünür. Arıza ortadan kalkınca cihaz kendiliğinden tekrar çalışır.
- **Kilitleyici arıza:** kod ekranda yanıp söner. Cihaz resetlenmeden tekrar çalışmaz.

Resetin yolu modele göre değişiyor:

1. **Her üç kılavuzda:** cihazı kapat ve tekrar çalıştır.
2. **GB072:** ekranda **Reset** yazısı görünene kadar reset tuşunu basılı tut. Cihaz tekrar çalışır, gidiş suyu sıcaklığı görünür.
3. **GB022i:** ekranda **H** ve **!** sembolleri kaybolana kadar kılavuzda gösterilen iki tuşu aynı anda basılı tut.

İki sınır var. Reset tuşuna uzun süre basmak **EP** ya da **Fd** kodu olarak görünüyor; Buderus tuşa **30 saniyeyi aşmayacak** şekilde basılmasını istiyor. GB172i.2 kılavuzu da uyarıyor: arızayı sıfırlamak için **tekrarlanan girişimler** cihazı güvenlik nedeniyle bloke edebilir (arıza kodu **2980**). Bu blokajı ancak uzman bir şirket ya da müşteri hizmetleri, arızanın nedenini yerinde bulup giderdikten sonra kaldırabilir. Bir kez dene; kod geri geliyorsa tekrar tekrar basma.

## Ne zaman doğrudan servis

- Tablolarda yalnız 🔧 olan kodlarda.
- Gaz vanası açık olduğu hâlde 227 ya da 6A sürüyorsa. Belirti tarafı için: [kombi yanmıyor](/blog/kombi-yanmiyor/).
- Basınç ekledikten sonra kısa sürede yine düşüyorsa.
- Reset sonrası kod geri geliyorsa ya da ekranda 2980 çıktıysa.

Kılavuzlar, arıza giderilemediğinde servisi ya da müşteri hizmetlerini aramayı ve **arıza kodunu ve cihaz bilgilerini** bildirmeyi istiyor. Başka markaların kodları için: [kombi arıza kodları](/blog/kombi-ariza-kodlari/).

## Servisi aramadan önce üç kontrol

1. Kombinin **modeli** tip etiketinden okundu mu?
2. Basınç soğukken normal aralıkta, **gaz vanası** açık mı?
3. Kılavuzdaki **reset** bir kez denendi mi?

Üçüne de "evet" diyorsan servise anlatacağın cümle hazır: "Buderus Logamax plus GB072, ekranda 6A; gaz vanası açık, basınç 1,5 bar, bir kez resetledim, kod geri geldi."

Kombinin koduna göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

---

**Kaynak künyesi.** Bu yazıdaki kodlar ve alıntılar Buderus'un (Bosch Termoteknik) kendi belgelerinden alınmıştır: buderus.com/tr "Arıza Kodları ve Çözümleri" sayfası ve her kodun açıklama sayfası; **Logamax plus GB022i** Kullanma Kılavuzu (6721835260, 2021/03), **Logamax plus GB072** Kullanma Kılavuzu (6721835150, 2021/03) ve Montaj Kılavuzu (6721835147, 2022/11), **Logamax plus GB172i.2** Kullanım Kılavuzu (6721852623, 2023/12). Kod listeleri modele ve belge sürümüne göre değişebilir; kendi kombinin kılavuzu farklı bir şey yazıyorsa **kendi kılavuzun esastır.**
