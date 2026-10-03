---
title: "Haier bulaşık makinesi su almıyor"
description: "Haier bulaşık makinesi su almıyor, SU YOK ya da E2 gösteriyorsa Haier kılavuzundaki sebepler: musluk, hortum bükülmesi, kum filtresi, boşaltma borusu."
slug: "haier-bulasik-makinesi-su-almiyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu ek iş, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/bulasik-makineleri/32002551/xf-6c2m1pw/  md5 bc901fec25571c5bac2c34d61689b1f9
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2024/12/17339313/MAN-000188921_000  52 s.  md5 d7eb6eaf5e86d8bc40af5485fe50a9d9
#   ⚠ PDF metadata başlığı "XF 5C7M0W-17 TR (70060910)"; metinde XF-6C2M1PW geçmiyor, "göstergeli / göstergesiz modeller" diye genel. Sayfa = PDF sayfası (basılı no farklı). s.45-46 tablo düzeni sayfa görüntüsünden de doğrulandı.
# Ana satır (s.45, Yalnızca göstergeli modeller): "SU YOK" (yalnızca bazı modellerde) / "HATA E2 (ekranlı)" → "Bulaşık makinesine su dolmuyor" · "Su beslemesinin açık olduğundan emin olun." · "Su besleme hortumunun bükülmediğinden ve ezilmediğinden emin olun."
#   · "Boşaltma borusunun uygun yükseklikte olduğundan emin olun (kurulum bölümüne bakın)." · "Su beslemesini kapatın, bulaşık makinesinin arkasından su besleme hortumunun vidasını sökün ve "kum" filtresinin tıkanmadığını kontrol edin."
#   s.46 Diğer arızalar 2 "Bulaşık makinesine su dolmuyor": "Nokta 1'e bakın" · "Su musluğu kapalıdır → Su musluğunu açın" · "Su besleme hortumu eğilmiştir → Hortumdaki bükülmeleri giderin" · "Su besleme hortumu filtresi tıkalıdır → Hortumun ucundaki filtreyi temizleyin"
#   s.46 Göstergesiz modeller: "gösterge ışığı hızla yanıp söner ve kesik kesik bir ses sinyali duyulur" · ""AÇMA/KAPATMA" düğmesine basarak bulaşık makinesini kapatın." · "Su kaynağının açık olduğunu, boşaltma borusunun bükülmediğini ve sifon veya filtrelerin tıkalı olmadığını kontrol ettikten sonra, seçili programı yeniden ayarlayın."
# Diğer: s.7 "Suyun basıncı 0.08 MPa ile 1 MPa arasında olmalıdır." · "giriş hortumunu bağlamadan önce musluktan birkaç dakika boşa su akıtın. Bu şekilde kum veya pas kalıntılarının su girişi filtresini tıkaması önlenmiş olur." · "Eski hortumlar tekrar kullanılmamalıdır."
#   · s.8 SU DURDURMA "Tüp hasar görürse su akışını durduran ... kırmızı bir işaret pencere "B" da görünecektir ve tüp değiştirilmelidir." · SU BLOĞU "musluk tamamen açık olsa bile suyu engeller" · "kutu "A" hasar görürse fişi prizden hemen çıkarın" · "su besleme hortumu kesilmemelidir"
#   · s.9 "Gider borusu zemin seviyesinin en az 40 cm kadar üzerinde" · "zeminden en fazla 85 cm" · "Giriş ve çıkış hortumlarında herhangi bir kıvrılma olmadığından emin olacak şekilde hortumları kontrol edin." · s.38 "Su sağlama kapalı gösterge ışığı" "Musluk ve bulaşık makinesi arasında su akışında herhangi bir hata varsa gösterir" · s.45 "Diğer kodlar" kapat-fişi çek-1 dk-yeniden başlat.
# BİLEREK YAZILMAYANLAR: boşaltma borusunu yeniden konumlama (kurulum) · SU DURDURMA/SU BLOĞU hortumunun değişimi (servis; hortum kesilmez) · valf teşhisi · E21 (s.45 acil: musluğu kapat, gücü kes) · fiyat.
# Alıntı denetim tablosu: haier-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bez", "Küçük bir kap"]
steps:
  - "Ekranda SU YOK, HATA E2 ya da su sağlama kapalı ışığı var mı bak; göstergesiz modelde ışıklar hızla yanıp sönüyorsa makineyi AÇMA/KAPATMA ile kapat."
  - "Makinenin bağlı olduğu su musluğunun açık olduğunu kontrol et."
  - "Su besleme hortumunun bükülmediğini ve makinenin arkasında ezilmediğini kontrol et."
  - "Boşaltma borusunun ucunun zeminden en az 40, en çok 85 cm yükseklikte olduğunu kontrol et."
  - "Musluğu kapat, su besleme hortumunun makine arkasındaki bağlantısını elle çöz ve uçtaki kum filtresinin tıkalı olup olmadığına bak; kirliyse temizle."
  - "Hortumu yerine sağlam takıp musluğu aç, bağlantıda sızıntı olmadığını kontrol et."
  - "Programı yeniden ayarlayıp başlat."
faq:
  - q: "Haier bulaşık makinemde SU YOK ya da E2 ne demek?"
    a: "Haier'in XF-6C2M1PW ürün sayfasından bağlanan kılavuzunda, ekranlı modellerde HATA E2 ve bazı modellerdeki SU YOK uyarısı 'Bulaşık makinesine su dolmuyor' anlamında. Kılavuz dört kontrol veriyor: su beslemesi açık mı, besleme hortumu bükülmüş ya da ezilmiş mi, boşaltma borusu uygun yükseklikte mi ve hortum ucundaki kum filtresi tıkalı mı."
  - q: "Su basıncı ne kadar olmalı?"
    a: "Haier'in su bağlantısı bölümüne göre su basıncı 0,08 MPa ile 1 MPa arasında olmalı. Makine soğuk suya ya da 60 °C'yi geçmeyen sıcak suya bağlanabiliyor."
  - q: "Kum filtresi neden tıkanır?"
    a: "Kılavuz, makine yeni tesisat borularına ya da uzun süre kullanılmamış borulara bağlanacaksa hortumu bağlamadan önce musluktan birkaç dakika boşa su akıtmanı istiyor; böylece kum veya pas kalıntılarının su girişi filtresini tıkaması önleniyor."
  - q: "Hortumdaki pencerede kırmızı işaret görüyorum, ne demek?"
    a: "Bazı modellerdeki SU DURDURMA cihazı, besleme tüpü hasar görürse su akışını durduruyor; bu durumda pencerede kırmızı işaret görünüyor ve Haier'e göre tüpün değiştirilmesi gerekiyor. Su bloğu sistemli hortum elektrikli parça içerdiği için kesilmemeli; değişim için yetkili servise başvur."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin yanında, tezgah altındaki musluğa bağlı beyaz su besleme hortumu"
---

Program başladı ama makineden su sesi gelmiyor, ekranda **SU YOK** ya da **HATA E2** yazıyor. Haier'in XF-6C2M1PW ürün sayfasından bağlanan bulaşık makinesi kılavuzunda bu iki uyarının anlamı aynı: **"Bulaşık makinesine su dolmuyor."** Haier bu satırda dört kontrol sıralıyor: **su beslemesinin açık olduğundan**, **su besleme hortumunun bükülmediğinden ve ezilmediğinden**, **boşaltma borusunun uygun yükseklikte olduğundan** emin olmak ve hortumun arkasındaki **"kum" filtresinin tıkanmadığını** kontrol etmek.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Uyarıyı oku, musluğu aç, hortumun bükülmediğine bak, boşaltma borusu yüksekliğini kontrol et. Musluğu kapatıp hortumu elle çöz, uçtaki kum filtresini temizle, hortumu takıp programı yeniden başlat.

## Adım adım: evde denenecekler

**1. Uyarıyı oku.** Haier'e göre ekranlı modellerde hatalar **"E" harfi ve ardından bir sayıyla** ve **kısa bir sesli sinyalle** bildiriliyor; **HATA E2** ve bazı modellerdeki **"SU YOK"** su dolmadığını gösteriyor. Panelde bir de **su sağlama kapalı gösterge ışığı** var; kılavuza göre bu ışık **musluk ve bulaşık makinesi arasında su akışında herhangi bir hata varsa** yanıyor. Göstergesiz modellerde ise **seçili programa karşılık gelen gösterge ışığı hızla yanıp söner ve kesik kesik bir ses sinyali duyulur**; Haier bu durumda makineyi **"AÇMA/KAPATMA" düğmesine basarak kapatmanı** istiyor.

**2. Musluğu aç.** Kılavuzun ilk kontrolü: **su beslemesinin açık olduğundan emin olun.** "Diğer arızalar" tablosu daha da sade: **su musluğu kapalıdır** → **su musluğunu açın.**

**3. Hortumda bükülme var mı bak.** Haier'in ikinci kontrolü: **su besleme hortumunun bükülmediğinden ve ezilmediğinden emin olun.** Tablodaki karşılığı: **su besleme hortumu eğilmiştir** → **hortumdaki bükülmeleri giderin.** Kurulum bölümü de **giriş ve çıkış hortumlarında herhangi bir kıvrılma olmadığından** emin olmanı istiyor.

**4. Boşaltma borusunun yüksekliğini kontrol et.** Su dolmamasıyla ilgisiz görünse de Haier E2 listesine bunu da koymuş: **boşaltma borusunun uygun yükseklikte olduğundan emin olun.** Kurulum bölümüne göre gider borusu **zemin seviyesinin en az 40 cm** üzerinde olmalı; hortum uzatılmışsa **zeminden en fazla 85 cm** yükseklikte kalmalı. Ölçü tutmuyorsa hortumu yeniden konumlamak kurulum işi; yetkili servise bırak.

**5. Kum filtresini kontrol et.** Haier'in son kontrolü: **su beslemesini kapatın, bulaşık makinesinin arkasından su besleme hortumunun vidasını sökün ve "kum" filtresinin tıkanmadığını kontrol edin.** Tablodaki çözüm: **hortumun ucundaki filtreyi temizleyin.** Bağlantı elle çözülmüyorsa zorlama.

**6. Hortumu tak, sızıntıya bak.** Kurulum bölümü giriş hortumunun **uygun şekilde sıkıldığından** emin olmanı istiyor. Musluğu açtıktan sonra bağlantıda damla olmadığını kontrol et. Haier **eski hortumların tekrar kullanılmamasını** da istiyor.

**7. Programı yeniden ayarla.** Göstergesiz modeller için kılavuzun sırası: **su kaynağının açık olduğunu**, **boşaltma borusunun bükülmediğini** ve **sifon veya filtrelerin tıkalı olmadığını** kontrol ettikten sonra **seçili programı yeniden ayarlayın.** Ekranlı modellerde listede olmayan bir kod çıkarsa Haier'in genel kuralı: makineyi **kapatın ve fişini çekin, bir dakika bekleyin**, makineyi açıp **bir program başlatın.**

## Su basıncı ve yeni tesisat

Haier'e göre **suyun basıncı 0.08 MPa ile 1 MPa arasında** olmalı. Makine **yeni tesisat borularına ya da uzun süredir kullanılmayan borulara** bağlanacaksa giriş hortumunu bağlamadan önce **musluktan birkaç dakika boşa su akıt**; kılavuza göre bu, **kum veya pas kalıntılarının su girişi filtresini tıkamasını** önlüyor.

Bulaşık makinesi hiç açılmıyorsa [Haier bulaşık makinesi çalışmıyor](/blog/haier-bulasik-makinesi-calismiyor/), su alıyor ama boşaltmıyorsa [Haier bulaşık makinesi su boşaltmıyor](/blog/haier-bulasik-makinesi-su-bosaltmiyor/) yazısına bak. Markadan bağımsız anlatım için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısı var.

## Ne zaman servis

Bazı modellerde hortumda **SU DURDURMA** cihazı var: tüp hasar görürse su akışını durduruyor, pencerede **kırmızı bir işaret** çıkıyor ve Haier'e göre **tüp değiştirilmelidir.** **SU BLOĞU** sistemli modellerde hortum **elektrikli parçalar içerdiğinden kesilmemelidir**; kutu **"A" hasar görürse fişi prizden hemen çıkar.** Ekranda **E21** görürsen kılavuza göre bu **açık solenoid valf ile kontrolsüz su beslemesi**: **su musluğunu hemen kapat ve cihazın güç bağlantısını kes.** Bu üç durumda yetkili servise başvur.

⛔ **Kendin-çöz sınırı burada biter.** Musluk açık, hortum düz, kum filtresi temiz ve basınç yeterli olduğu hâlde E2 ya da SU YOK sürüyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
