---
title: "Bosch kombi E9 hatası"
description: "Bosch kombi E9 verip ateşleme yapmıyorsa Bosch'a göre ilk bakılacak yer su basıncı. Basınç okuma, su basma, reset ve servis sınırı adım adım."
slug: "bosch-kombi-e9-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext (-raw ve -layout) ile okundu, sayfa no -f/-l ile.
# Web araması kullanılmadı; belgelerin yeri Bosch'un kendi dizin sayfası ve bosch-tr-tr-b.boschhc-documents.com/td arama sayfasından bulundu.
# Alıntı denetim tablosu: bosch-kombi-e9-hatasi.KAYNAK.md
# K1) Bosch TR "Bosch Kombi E9 Arızası" · https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/e9/
#     HTTP 200 · 147.034 B · md5 1885d07e2166a39c37f4979a9f6a11c8
#     Birebir: "Bosch yoğuşmalı kombiniz e9 arızası veriyor ve ateşleme yapmıyorsa" · nedenler: tesisat kaçağı, emniyet ventilinin
#     açık kalması, eşanjör ya da hidrolik grupta kaçak · "evde sizin de kontrol edebileceğiniz en önemli nokta kombinizin su seviyesinin
#     düşük olup olmadığına bakmaktır" · "Kombinizin içinde su kalmadığında ateşleme yapmaz" · "kombi paneli üzerinde yer alan yuvarlak
#     basınç göstergesi" · "1 bar'ın altında ... su basmanız gerekebilir" · musluk saat yönünün tersine, "ideal olan 1,2 – 1,5 bar
#     seviyesine gelince musluğu kapatınız" · sıcaklık sensörü, pompa, bağlantı kabloları · Müşteri İletişim Merkezi 444 2 474
# K2) Bosch TR dizin · .../ariza-kodlari-ve-cozumleri/ · HTTP 200 · md5 92d4b4cafaffae97b4a3b4f58851a8ee
#     E9 → Condens 7000i W, Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver, ClassicPlus, Exclusive, Comfort
# B1) Condens 2500 W Kullanma Kılavuzu 6721835246 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246
#     HTTP 200 · 1.789.580 B · 16 s. · md5 81853ab2ff146ad75d9398dc0c9832b0
#     Sık su = kaçak, garanti dışı s.4 · basınç 1–2 bar, manometreden oku, doldurma ünitesinin yeri, doldurma vanası aç/kapat, 3 bar s.8 ·
#     H ve ! / yalnız H reset ayrımı + servis + kod ve cihaz bilgisi + tip etiketi s.13
# B2) Condens 7000i W Kullanma Kılavuzu 6721835270 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835270
#     HTTP 200 · 1.119.714 B · 16 s. · md5 a485d15ed4c4466367fc4daa73fa1afb
#     Kapat-aç ya da "Sıfırla" görünene kadar reset s.12 · basınç 1–2 bar, doldurma tesisata göre farklı/servisten göstermesini iste,
#     yalnız soğukken, maks. gidiş 40 °C, 3 bar s.13 · sık su = kaçak s.5
# BİLEREK yazılmayanlar:
#  - Emniyet ventilinden su gelip gelmediğinin kullanıcı tarafından nasıl kontrol edileceği: Bosch'un E9 sayfası yalnız neden olarak sayıyor.
#  - Sensör, pompa, kablo kontrolü: kombinin içi → servis.
#  - Condens 2500 W kılavuzundaki doldurma vanasının dönüş yönü (resimde gösteriliyor, metinde yok).
#  - "E9 en sık görülen kod" sıralaması (Bosch "sıklıkla karşılaşılan" diyor, oran vermiyor); tamir süresi, parça, maliyet.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin soğumasını bekle; ısıtma suyu yalnız soğukken, gidiş suyu en fazla 40 °C iken eklenir."
  - "Kombi panelindeki yuvarlak basınç göstergesinden basıncı oku."
  - "Basınç 1 bar'ın altındaysa kombinin altındaki su takviye musluğunu saat yönünün tersine çevir."
  - "Basınç 1,2–1,5 bar'a gelince musluğu kapat."
  - "Kombiyi bir kez sıfırla: kapatıp aç ya da kılavuzundaki reset yolunu kullan."
  - "E9 sürüyorsa ya da basınç kısa sürede yine düşüyorsa kodu ve cihaz bilgisini not al, Bosch yetkili servisini ara."
faq:
  - q: "Bosch kombide E9 hatası ne demek?"
    a: "Bosch'un E9 sayfasına göre yoğuşmalı kombi E9 verip ateşleme yapmıyorsa bunun birçok nedeni olabilir: tesisatta kaçak, emniyet ventilinin açık kalması, eşanjör ya da hidrolik grupta kaçak. Bosch'a göre kombinin içinde su kalmadığında kombi ateşleme yapmaz ve bu kod görülebilir. Su dışında sıcaklık sensörü, pompa ya da bağlantı kablolarında da sorun olabilir."
  - q: "E9 hatasında evde ne kontrol edebilirim?"
    a: "Bosch'a göre servisi çağırmadan önce evde kontrol edilebilecek en önemli nokta kombinin su seviyesidir. Basıncı kombi paneli üzerindeki yuvarlak basınç göstergesinden oku. Gösterge 1 bar'ın altındaysa basınç düşüktür ve kombiye su basmak gerekebilir."
  - q: "Bosch kombiye nasıl su basılır?"
    a: "Bosch'un E9 sayfasındaki tarif: kombinin altındaki su takviye musluğunu saat yönünün tersine çevir, basınç ideal olan 1,2–1,5 bar'a gelince musluğu kapat. Condens 2500 W kılavuzu doldurma ünitesinin cihazın alt tarafında olduğunu yazıyor ve doldurma vanasının manometre 1 ile 2 bar arası gösterince kapatılmasını istiyor. Condens 7000i W kılavuzu ise doldurmanın tesisata göre değiştiğini, nasıl yapıldığını yetkili servisin göstermesini istiyor."
  - q: "Su bastım ama E9 yine geliyor, ne yapmalıyım?"
    a: "Basınç normalken E9 sürüyorsa Bosch'a göre sorun su eksikliği değil; sıcaklık sensörü, pompa ya da bağlantı kabloları olabilir ve yetkili servis gerekir. Basınç kısa sürede yine düşüyorsa Bosch kılavuzlarının uyarısı geçerli: sisteme sık su ekleniyorsa tesisatta kaçak vardır ve kaçağın giderilmesi gerekir."
images:
  coverAlt: "Beyaz bir kombinin kumanda panelinde yuvarlak basınç göstergesi, ibre 1 bar'ın altında; kombinin alt tarafında borular ve küçük bir musluk"
---

Bosch kombi ekranda **E9** gösteriyor ve ateşleme yapmıyor. Bosch'un E9 sayfası bu kodu kendi sayfasında şöyle anlatıyor: kombi E9 veriyor ve **ateşleme yapmıyorsa** nedeni tek değil; tesisatta bir kaçak, **emniyet ventilinin açık kalması**, eşanjör ya da hidrolik grupta kaçak olabilir. Ama servisi çağırmadan önce evde bakılacak **en önemli nokta** belli: kombinin su seviyesi. Bosch'a göre **kombinin içinde su kalmadığında kombi ateşleme yapmaz.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E9 = Bosch'a göre kombi ateşleme yapmıyor; evde bakılacak ilk şey su basıncı. Sıra şu: kombi soğusun → yuvarlak göstergeden basıncı oku → 1 bar'ın altındaysa su takviye musluğunu aç → 1,2–1,5 bar'da kapat → bir kez reset → kod sürüyor ya da basınç yine düşüyorsa Bosch yetkili servis.

## E9 hangi Bosch kombilerde çıkar

Bosch'un arıza kodları sayfasında E9, harfli kod kullanan bütün model listelerinde geçiyor: **Condens 7000i W, Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver, ClassicPlus, Exclusive** ve **Comfort.** Rakamlı kod kullanan Condens 2300i W'nin listesinde E9 yok; o modelde düşük basıncı 1017 ve 2971 gösterir.

Bu yazıdaki adımlar Bosch'un E9 sayfasından; basınç aralığı, doldurma ve reset ayrıntıları E9 listesindeki iki modelin, **Condens 2500 W** ve **Condens 7000i W** kombilerin kullanma kılavuzlarından.

## Adım adım: evde denenecekler

**1. Kombinin soğumasını bekle.** Condens 7000i W kılavuzu, sıcak kombiye soğuk ısıtma suyu eklenirken termik gerilmelerin hasara yol açabileceğini yazıyor. Isıtma tesisatını **yalnız soğuk durumdayken** doldur; gidiş suyu sıcaklığı en fazla **40 °C** olmalı.

**2. Basıncı oku.** Bosch'un E9 sayfasına göre kombinin bar değerine **kombi paneli üzerindeki yuvarlak basınç göstergesinden** bakarsın. Kılavuzlar bu göstergeye manometre diyor. Bosch'un E9 sayfası ideal seviyeyi **1,2–1,5 bar** olarak veriyor; Condens 2500 W ve 7000i W kılavuzlarında normal çalışma basıncı **1 ile 2 bar** arası. Gösterge **1 bar'ın altındaysa** Bosch'a göre basınç düşüktür ve kombiye su basman gerekebilir.

**3. Su takviye musluğunu aç.** Bosch'un E9 sayfasındaki tarif: kombinin **altındaki su takviye musluğunu saat yönünün tersine** çevir; basıncın yükseldiğini göreceksin. Condens 2500 W kılavuzuna göre doldurma ünitesi cihazın **alt tarafında**, ısıtma gidiş suyu ile sıcak kullanım suyu çıkış bağlantısının **arasında** duruyor. Musluğun yerini bilmiyorsan zorlama: Condens 7000i W kılavuzu doldurmanın **tesisata göre farklılık gösterdiğini** yazıyor ve yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini istemeni** öneriyor.

**4. Doğru seviyede kapat.** Basınç **1,2–1,5 bar**'a gelince musluğu kapat (Bosch E9 sayfası). Condens 2500 W kılavuzunun tarifi de aynı yönde: manometre **1 ile 2 bar** arası gösterince doldurma vanasını **tekrar kapat.** Üst sınır: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.

**5. Bir kez sıfırla (reset).** Kılavuzlardaki reset yolu modele göre değişiyor:

- **Condens 2500 W:** ekranda **H ve !** varsa kılavuzda gösterilen tuşa, iki sembol kaybolana kadar basılı tut; **yalnız H** varsa cihazı açma-kapama tuşuyla kapatıp yeniden çalıştır.
- **Condens 7000i W:** cihazı kapatıp aç ya da ekranda **"Sıfırla"** görünene kadar **reset tuşuna** bas.

Kombi yeniden çalışınca ekranda gidiş suyu sıcaklığı görünür.

**6. Kod sürüyorsa servisi ara.** Basınç normal olduğu hâlde E9 geri geliyorsa Bosch'a göre sorun su değil: **sıcaklık sensörü, pompa ya da bağlantı kabloları** olabilir. Bosch bu durumda yetkili servisine ya da **Müşteri İletişim Merkezi**ne (444 2 474) başvurmanı istiyor. Kılavuzlar servise **gösterilen arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor.

## Basınç yine düşüyorsa

Su basıp E9'u bir kez susturmak mümkün. Ama Bosch'un E9 sayfasının saydığı nedenlerin çoğu **kaçak**: tesisatta, emniyet ventilinde, eşanjörde ya da hidrolik grupta. Condens 2500 W ve 7000i W kılavuzlarının "tesisat kaçakları" uyarısı da bunu destekliyor: sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir; her doldurmada sisteme oksijen girer, korozyon artar ve cihazda hasara yol açabilir. **Kaçakların giderilmesi gerekir**; kılavuzlara göre bu tür hasarlar garanti dışı sayılıyor. Kaçağın yerini bulmak ve gidermek yetkili servis işidir. Markadan bağımsız anlatım: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/).

## Ne zaman doğrudan servis

- Su bastıktan sonra basınç kısa sürede yine 1 bar'ın altına iniyorsa.
- Basınç normal olduğu hâlde E9 geri geliyorsa.
- Su takviye musluğunun yerini bulamıyorsan: servisten nasıl yapıldığını göstermesini iste.
- Kombinin dış sacını açma: Bosch kılavuzları dış sacın **asla sökülmemesini** istiyor.

Servise bildireceğin cihaz adı ve seri numarası, kılavuzlara göre **kumanda paneli kapağındaki tip etiketinde** yazılı.

## Servisi aramadan önce kısa kontrol

1. Ekranda E9 mu var, yanında H ya da ! var mı?
2. Kombi soğukken gösterge kaç bar?
3. Son su basmanın üzerinden ne kadar geçti?
4. Su bastıktan sonra reset denendi mi?
5. Kombinin model adı tip etiketinden okundu mu?

Aynı modellerde alev kodu için [Bosch kombi EA ve 227 hatası](/blog/bosch-kombi-ea-hatasi/), düşük basıncı doğrudan söyleyen kod için [Bosch kombi CE hatası](/blog/bosch-kombi-ce-hatasi/), bütün modellerin kodları için [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) yazısına bakabilirsin. Basınç aralığının mantığı: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
