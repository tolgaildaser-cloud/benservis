---
title: "Vestel bulaşık makinesi hata kodları: F serisinin tamamı"
description: "Vestel bulaşık makinesi kılavuzundaki on iki F kodunun anlamı, Vestel'in kendi çözüm sütunu, nesil farkı ve evde yapılacak kontroller."
slug: "vestel-bulasik-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — YAZI BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Eski hâli E1/E2/E3/E4/E5 üzerine kuruluydu ve altı satırın beşi dayanaksızdı.
# BEŞ resmî Vestel bulaşık makinesi kılavuzu indirildi: E ile başlayan kod sayısı = 0.
# Vestel bulaşık makinesinde E serisi YOK, F serisi var. Üstelik eski tablo E3'ü
# "ısıtma" sayıyordu; Vestel'de F3 = "Sürekli su girişi" — taban tabana zıt.
#
# Kaynak (bu koşuda indirildi, pdftotext ile okundu):
#   statik.vestel.com.tr/webfiles/20264050_k.pdf  (BM 8402 GI Pro WIFI)
#   statik.vestel.com.tr/webfiles/20263192_k.pdf  (BM 10502 X GI WIFI)  → ikisi BİREBİR aynı
#   static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf (BM-401) → eski nesil
#
# 📌 NESİL FARKI BELGELENDİ (yazının eski "seriye göre değişir" iddiası nihayet kanıtlı):
#   eski nesil F5 = "Su girişi yetersiz"  ·  yeni nesil F5 = "Basınç sistemi arızası"
#   yeni nesilde su girişi ayrı bir koda taşınmış: FF
#   eski nesil FE = "Elektronik kart parametre tanıma hatası" (voltaj düşmesi kaynaklı)
#   yeni nesil FE = "Arızalı elektronik kart"
# 📌 Vestel on iki kodun ONUNDA doğrudan "servisle iletişime geçin" diyor; kullanıcı
#    tarafında iş olan yalnız FF ve F2. Yazı artık bunu olduğu gibi aktarıyor.
# ⛔ `guide` ve `steps` DEĞİŞTİRİLMEDİ — yedi adım kod-bağımsız (musluk, hortum, filtre,
#    tahliye) ve F tablosunda da birebir doğru; gövdedeki **1.–**7. paragraflar korundu.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Küçük fırça", "Sünger"]
steps:
  - "Kodu aynen not al. Ekranda yanıp sönen kodu olduğu gibi yaz ya da fotoğrafla; model bilgisiyle birlikte işine yarayacak."
  - "Makineyi kapat ve fişini çek. Ekranda F1 varsa musluğu da kapat — taşma kodunda ilk iki hamle budur."
  - "Musluğu ve basıncı doğrula. Makine musluğu tam açık mı? Evdeki genel basıncı başka bir musluktan test et."
  - "Giriş hortumunu ve süzgecini kontrol et. Tezgâh altındaki hortumda bükülme ya da ezilme olmasın; musluğu kapatıp bağlantı ağzındaki küçük süzgeci akan suyun altında temizle."
  - "Filtre grubunu çıkar ve temizle. Alt sepeti çıkar, tabandaki silindirik filtre grubunu çevirip sök, yemek artıklarını temizle ve ince süzgeci fırçala; körlemesine elini sokma, önce bak."
  - "Filtreyi ve tahliye hattını yerine oturt. Filtre grubunu kilitlenene kadar çevir; tahliye hortumunda bükülme olmasın ve bağlandığı lavabo gideri hızlı aksın."
  - "Fişi tak ve kısa bir programla dene. Kod tekrar geliyorsa deneme yapmayı bırak; ısıtıcı, sensör, pompa ve valf tarafı servise aittir."
faq:
  - q: "Vestel bulaşık makinesinde E1, E2 gibi kodlar var mı?"
    a: "Vestel bulaşık makinesinin kod tablosu F serisidir: FF, F1, F2, F3, F5, F6, F7, F8, F9, FE, HI ve LO. Ekranındaki kodu kendi modelinin kullanım kılavuzundan teyit et; Vestel tabloyu nesiller arasında değiştirmiştir ve ayrıntısı bu yazıda var."
  - q: "Vestel bulaşık makinesi F2 hatası nasıl çözülür?"
    a: "F2, kılavuzda 'Su tahliye edilmiyor' demektir ve Vestel'in kendi çözümü şu: su tahliye hortumu ve filtreler tıkanmış olabilir, programı iptal edin. Pratikte alt sepetin altındaki filtre grubunu çıkarıp yıkamak, tahliye hortumunun bükülmediğini ve lavabo giderinin tıkalı olmadığını kontrol etmek çoğu vakayı kapatır. Arıza devam ederse tahliye pompası servis işidir."
  - q: "Vestel bulaşık makinesinde F1 hatası ciddi mi?"
    a: "F1 kılavuzda 'Taşma' olarak geçer ve Vestel'in verdiği talimat nettir: makinenizi ve musluğu kapatın, servisle iletişime geçin. Yani bu kodda evde denenecek bir adım tarif edilmemiştir. Tek seferlik aşırı köpükten de kaynaklanabilir ama tekrar ediyorsa içeride aktif bir sızıntı vardır ve kaynağını servis bulmalıdır."
  - q: "Kod tablom bu yazıdakiyle uyuşmuyor, neden?"
    a: "Çünkü Vestel tabloyu nesiller arasında gerçekten değiştirmiş ve bunu kendi kılavuzlarından doğrulayabiliyoruz. Eski nesil kılavuzlarda F5 'Su girişi yetersiz' demek; yeni nesilde F5 'Basınç sistemi arızası' oldu ve su girişi ayrı bir koda, FF'ye taşındı. FE de eski nesilde voltaj düşmesine bağlı parametre hatasıyken yeni nesilde doğrudan arızalı elektronik kart olarak tanımlanıyor. Bu yüzden kendi modelinin kılavuzu her zaman son sözü söyler."
images:
  coverAlt: "Bulaşık makinesi kapağındaki gösterge alanı"
---

Program bitmesine yakın makine durdu, ekranda bir kod yanıp sönüyor ve açtığında tabanda kirli su bekliyor.

Vestel bulaşık makinesinin kod tablosu **F serisidir**. Beş resmî kullanım kılavuzunda yayımlanan liste on iki koddan oluşur: `FF` `F1` `F2` `F3` `F5` `F6` `F7` `F8` `F9` `FE` `HI` `LO`.

Karışıklığın sebebi de tahmin edilebilir: **Vestel çamaşır makinesi** gerçekten E01, E02, E03 kullanır. İki cihazın tabloları birbirine karışmış görünüyor.

Bu yazıda kılavuzdaki on iki F kodunu, Vestel'in kendi çözüm sütunuyla birlikte veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ Vestel kod tablosunu nesiller arasında değiştirmiş ve bunu kendi kılavuzlarından doğrulayabiliyoruz — ayrıntısı aşağıda. Ekranındaki kodun kesin karşılığı için kendi modelinin kılavuzuna bak.

## Adım adım: kod görünce evde denenecekler

**1. Kodu aynen not al.** Ekranda yanıp sönen kodu olduğu gibi yaz ya da fotoğrafla; model bilgisiyle birlikte işine yarayacak.

**2. Makineyi kapat ve fişini çek.** Ekranda **F1** varsa musluğu da kapat — taşma kodunda ilk iki hamle budur.

**3. Musluğu ve basıncı doğrula.** Makine musluğu tam açık mı? Evdeki genel basıncı başka bir musluktan test et.

**4. Giriş hortumunu ve süzgecini kontrol et.** Tezgâh altındaki hortumda bükülme ya da ezilme olmasın; musluğu kapatıp bağlantı ağzındaki küçük süzgeci akan suyun altında temizle.

**5. Filtre grubunu çıkar ve temizle.** Alt sepeti çıkar, tabandaki silindirik filtre grubunu çevirip sök, yemek artıklarını temizle ve ince süzgeci fırçala; körlemesine elini sokma, önce bak.

**6. Filtreyi ve tahliye hattını yerine oturt.** Filtre grubunu kilitlenene kadar çevir; tahliye hortumunda bükülme olmasın ve bağlandığı lavabo gideri hızlı aksın.

**7. Fişi tak ve kısa bir programla dene.** Kod tekrar geliyorsa deneme yapmayı bırak; ısıtıcı, sensör, pompa ve valf tarafı servise aittir.

## Vestel bulaşık makinesi kod tablosu

Aşağıdaki "Vestel ne diyor" sütunu kılavuzdaki çözüm sütununun özetidir — bizim yorumumuz değil.

🛠️ = kılavuz kullanıcıya bir iş tarif ediyor · 🔧 = kılavuz doğrudan servise yönlendiriyor

| Kod | Kılavuzdaki tanım | Vestel ne diyor |
|-----|-------------------|-----------------|
| **FF** | Su giriş sistemi arızası | 🛠️ Musluğun açık ve suyun aktığından emin ol; giriş hortumunu musluktan ayırıp filtresini temizle. Sürerse servis. |
| **F2** | Su tahliye edilmiyor | 🛠️ Tahliye hortumu ve filtreler tıkanmış olabilir; programı iptal et. Sürerse servis. |
| **F1** | Taşma | 🔧 Makineyi ve musluğu kapat, servisle iletişime geç. |
| **F3** | Sürekli su girişi | 🔧 Musluğu kapatıp servisle iletişime geç. |
| **F5** | Basınç sistemi arızası | 🔧 Servis |
| **F6** | Hatalı ısıtma sensörü | 🔧 Servis |
| **F7** | Aşırı ısınma | 🔧 Servis |
| **F8** | Isıtıcı hatası | 🔧 Servis |
| **F9** | Ayırıcı konumu hatası | 🔧 Servis |
| **FE** | Arızalı elektronik kart | 🔧 Servis |
| **HI** | Yüksek voltaj arızası | 🔧 Servis |
| **LO** | Düşük voltaj arızası | 🔧 Servis |

> 📌 **On iki kodun onunda Vestel doğrudan "servisle iletişime geçin" diyor.** Kullanıcı tarafında iş tarif edilen yalnız iki kod var: **FF** ve **F2**. Bu, evde hiçbir şey yapılamayacağı anlamına gelmiyor — aşağıdaki kontrollerin çoğu kodun sebebini ortadan kaldırmayı hedefler — ama kılavuzun ne dediğini olduğu gibi bilmek işe yarar.

## Nesil farkı: F5 ve FE iki farklı şey anlatıyor

Bu markada "kod tablosu seriye göre değişir" cümlesi çok tekrarlanır ama nadiren kanıtlanır. Vestel'in kendi kılavuzları bunu doğruluyor:

| Kod | Eski nesil kılavuz | Yeni nesil kılavuz |
|---|---|---|
| **F5** | Su girişi yetersiz | Basınç sistemi arızası |
| **FF** | *(tabloda yok)* | Su giriş sistemi arızası |
| **FE** | Elektronik kart parametre tanıma hatası — ani ve sürekli voltaj düşmeleri sonucu kart, yazılım değişkenlerini hafızada tutamıyor | Arızalı elektronik kart |

Pratik sonucu şu: **eski bir Vestel'de F5 gördüysen bu bir su girişi meselesidir** ve kılavuz sana musluğu-hortumu-filtreyi kontrol ettirir. Yeni bir modelde aynı kod basınç sistemini işaret eder ve doğrudan servisliktir. Aynı numara, iki farklı iş.

Eski nesil **FE** için de kılavuz umut verici bir şey söylüyor: *"Program tekrar çalıştırıldığında devam edecektir. Şebeke voltajı kontrol edilmeli."* Yani her FE bir kart değişimi demek değildir.

## FF — Su giriş sistemi: en çok kendin çözülen kod

Makine programı başlatmış ama içeri su girmemiş ya da çok yavaş girmiştir. Kılavuzun tarif ettiği iki adım tamamen kullanıcı seviyesindedir.

**Kendin kontrol et:** Musluğun tam açık olduğundan ve suyun kesik olmadığından emin ol; evdeki genel basıncı başka bir musluktan test et. Tezgâh altındaki giriş hortumunun bükülmediğine, ezilmediğine bak. Sonra musluğu kapatıp hortumu musluk tarafından sök — bağlantı ağzında küçük bir filtre görürsün; tortu bağladıysa akan suyun altında temizle.

Bunların hepsi temizken kod sürüyorsa Vestel servisi işaret ediyor; su giriş valfi tablanın altındadır.

## F2 — Su tahliye edilmiyor

Kirli su gereken sürede atılamamıştır; tabanda su birikir. Kılavuz iki şüpheli sayıyor: **tahliye hortumu ve filtreler.**

**Kendin kontrol et — filtre temizliği:**

1. Makineyi kapat ve fişini çek.
2. Alt sepeti çıkar; yıkama bölmesinin tabanındaki silindirik filtre grubunu çevirip çıkar.
3. Kaba filtrede biriken yemek artıklarını, kürdanı, zeytin çekirdeğini, kırık cam parçasını temizle; ince süzgeci akan suyun altında fırçala.
4. Filtre yuvasında görünür bir cisim varsa al; yuvada bekleyen su varsa süngerle boşalt.
5. Filtre grubunu hizasına oturtup kilitlenene kadar çevir — gevşek filtre hem yıkama kalitesini düşürür hem pompaya cisim kaçırır.

Sonra **tahliye hortumuna** bak: bükülme, ezilme, tezgâh arkasında sıkışma olmasın. Hortumun bağlandığı **lavabo gideri** yavaş akıyorsa su makineye geri teper; önce gideri aç.

⚠️ Kırık cam ve kürdan filtre bölgesinde sık çıkar; filtreyi temizlerken körlemesine elini sokma, önce bak.

Filtre ve hortum temizken F2 tekrar ediyorsa tahliye pompası zayıflamış ya da pervanesine cisim kaçmış olabilir; pompa, tablanın altında kalan servis alanıdır.

## F1 — Taşma: makinenin panik düğmesi

F1, makinenin tabanına su indiğini ve taşma güvenliğinin devreye girdiğini bildirir. Kılavuzun talimatı iki cümledir ve evde denenecek bir adım içermez: **makineyi ve musluğu kapat, servisle iletişime geç.**

**Kendin kontrol et:** Bu iki hamleden sonra yapabileceğin tek şey gözlem: makinenin altında ve çevresinde görünür ıslaklık var mı bak. Son yıkamada aşırı köpük ya da yanlış deterjan kullandıysan not et — tek seferlik taşmaların klasik sebebidir.

⛔ Tabandaki suya ulaşmak için alt paneli sökme; sızıntının kaynağını bulmak servis işidir. Kod tek seferlik çıkıp bir daha gelmiyorsa mesele kapanmış olabilir; tekrar ediyorsa içeride aktif sızıntı vardır.

## F3 — Sürekli su girişi: F1'in yakın akrabası

F3 "sürekli su girişi" demektir: makine su almayı durduramıyor. Kılavuzun talimatı da buna göre keskin — **musluğu kapat ve servisle iletişime geç.** Bu kodda beklemek doğru değil, çünkü kontrol edilemeyen su girişi taşmaya varır.

## Isıtma tarafı: F6, F7, F8

Üçü de ısıtma hattına bakar ve üçünde de kılavuz doğrudan servisi gösterir.

- **F8** — Isıtıcı hatası: su hedef sıcaklığa getirilemiyor. Bulaşıklar soğuk suyla yıkanır, deterjan tam çözülmez, tabaklar yağlı çıkar.
- **F6** — Hatalı ısıtma sensörü: sıcaklık doğru ölçülemiyor.
- **F7** — Aşırı ısınma: makine içindeki sıcaklık çok yüksek.

**Kendin kontrol et:** Burada yapılabilecek tek şey dürüst bir gözlemdir: kodun hangi programda çıktığını ve bulaşıkların soğuk mu çıktığını not et. Bu bilgi servise teşhisi kısaltır.

⛔ Rezistans ölçümü ve değişimi kesin servis işidir; ısıtıcıya erişim tablanın altındadır ve elektrikli bir bölgedir.

## Voltaj ve elektronik: HI, LO, FE, F9

**HI** ve **LO**, şebeke geriliminin makinenin çalışma bandının dışına çıktığını bildirir. Bunlar makinenin arızası değil, beslemenin durumudur — ama Vestel yine de servisi işaret ediyor, çünkü tekrarlayan voltaj sorunları elektronik kartı yıpratır. Evde bakılacak şey, aynı hatta çalışan başka cihazların ve sigorta panosunun durumudur.

**FE** arızalı elektronik kartı, **F9** ise ayırıcı konumu hatasını bildirir. İkisi de doğrudan servis konusudur. Eski nesil bir makinede FE gördüysen yukarıdaki nesil farkı tablosuna bak: o kuşakta FE voltaj kaynaklı olabiliyor ve kılavuz programı yeniden çalıştırmayı öneriyor.

## Hangi noktadan sonra servis işi?

Musluk-hortum-süzgeç hattı, filtre grubu temizliği, gider kontrolü ve reset senin alanın; **FF ve F2** vakalarının çoğu burada kapanır. Isıtıcı, sensörler, tahliye pompası, su giriş valfi ve elektronik kart ise tablanın altındadır ve servise aittir — kılavuz da zaten on kodda doğrudan orayı gösteriyor. Tabloyu zorlamak yerine belirtiyi iyi tarif etmek, hem doğru parçayla gelinmesini hem işin tek seferde bitmesini sağlar.

Markalar arası karşılaştırma için sitemizdeki marka marka bulaşık makinesi hata kodları rehberi bu yazının kardeşidir. Belirtini ve model bilgini benservis.com'a yaz, olası arızayı ve tahmini maliyeti ücretsiz gör, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
