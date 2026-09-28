---
title: "Bosch kombi CE ve 0Y-A1 hatası"
description: "Bosch kombide CE, Bosch'a göre tesisat su basıncının düşük olduğunu söyler; 0Y-A1'in çözümü de aynı. Basıncı 1,2 bar'a getirme adım adım."
slug: "bosch-kombi-ce-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext (-raw ve -layout) ile okundu, sayfa no -f/-l ile.
# Web araması kullanılmadı; belgelerin yeri Bosch'un kendi dizin sayfası ve bosch-tr-tr-b.boschhc-documents.com/td arama sayfasından bulundu.
# Alıntı denetim tablosu: bosch-kombi-ce-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: CE ve 0Y-A1'in Bosch çözüm metni birebir aynı ("Tesisat su basıncı 1.2 bar'a yülseltilmeli. Yetkili servise
#   başvurun."); CE harfli listelerde, 0Y-A1 yalnız Condens 7000i W listesinde. İki ayrı sayfa birbirinin tekrarı olurdu.
# K1) Bosch TR "CE Arıza Kodu" · https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/ce/
#     HTTP 200 · 143.314 B · md5 89333e2b31f72b27a280effd2839d4be
#     Birebir: "Tesisat su basıncı düşük." | "Tesisat su basıncı 1.2 bar'a yülseltilmeli. Yetkili servise başvurun." (yazım Bosch'un)
# K2) Bosch TR "0Y-A1 Arıza Kodu" · .../ariza-kodlari-ve-cozumleri/0y-a1/ · HTTP 200 · 143.316 B · md5 56ee1552ba867b0eaadc0251cf9138cd
#     Birebir: "Tesisat ile ilgili hata var." | "Tesisat su basıncı 1.2 bar'a yülseltilmeli. Yetkili servise başvurun."
# K3) Bosch TR dizin · .../ariza-kodlari-ve-cozumleri/ · HTTP 200 · md5 92d4b4cafaffae97b4a3b4f58851a8ee
#     CE → Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver, ClassicPlus · 0Y-A1 → Condens 7000i W
# B1) Condens 2500 W Kullanma Kılavuzu 6721835246 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246
#     HTTP 200 · 1.789.580 B · 16 s. · md5 81853ab2ff146ad75d9398dc0c9832b0
#     "3.2 Isıtma tesisatının çalışma basıncının kontrol edilmesi": 1–2 bar, en uygun basıncı yetkili servisten öğren, manometreden oku,
#     düşükse ısıtma suyu ilave et · "3.3 Isıtma suyunun ilave edilmesi": doldurma ünitesinin yeri, 3 bar + emniyet ventili,
#     doldurma vanasını aç / 1–2 bar / tekrar kapat (s.8) · sık su = kaçak s.4 · reset + servis + tip etiketi s.13
# B2) Condens 7000i W Kullanma Kılavuzu 6721835270 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835270
#     HTTP 200 · 1.119.714 B · 16 s. · md5 a485d15ed4c4466367fc4daa73fa1afb
#     Manometre Res.1 [7] s.8 · reset s.12 · basınç 1–2 bar, doldurma tesisata göre farklı / servisten göstermesini iste, yalnız soğukken,
#     maks. gidiş 40 °C, 3 bar, radyatör havası s.13 · sık su = kaçak s.5
# BİLEREK yazılmayanlar:
#  - 0Y-A1'deki "tesisat ile ilgili hata"nın ne olduğu: Bosch yalnız bu cümleyi ve basınç çözümünü veriyor → başka anlam yüklenmedi.
#  - Condens 2500 W doldurma vanasının dönüş yönü (resimde gösteriliyor, metinde yok).
#  - Class, Classic Silver, ClassicPlus ve Comfort Condense kılavuzları bu koşuda bulunamadı/indirilmedi; bu modellere doldurma tarifi
#    taşınmadı, "kendi kılavuzuna bak / servisten göstermesini iste" denildi.
#  - Tamir süresi, parça, maliyet.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin soğumasını bekle; ısıtma suyu yalnız soğukken, gidiş suyu en fazla 40 °C iken eklenir."
  - "Kombinin manometresinden güncel basıncı oku."
  - "Doldurma vanasının yerini kılavuzundan bul; bilmiyorsan yetkili servisten göstermesini iste."
  - "Doldurma vanasını aç ve manometreyi izleyerek basıncı 1,2 bar'a getir."
  - "Doldurma vanasını tekrar kapat."
  - "Kombiyi bir kez sıfırla: kapatıp aç ya da kılavuzundaki reset yolunu kullan."
  - "CE ya da 0Y-A1 sürüyorsa ya da basınç yine düşüyorsa kodu ve cihaz bilgisini not al, Bosch yetkili servisini ara."
faq:
  - q: "Bosch kombide CE hatası ne demek?"
    a: "Bosch'un CE sayfasına göre CE, tesisat su basıncının düşük olduğunu gösterir. Bosch'un çözümü iki cümle: tesisat su basıncı 1,2 bar'a yükseltilmeli ve yetkili servise başvurulmalı. CE, Bosch'un listesinde Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver ve ClassicPlus modellerinde geçiyor."
  - q: "0Y-A1 kodu ne demek?"
    a: "Bosch'un 0Y-A1 sayfası kodu \"tesisat ile ilgili hata var\" diye tanımlıyor ve CE ile aynı çözümü veriyor: tesisat su basıncı 1,2 bar'a yükseltilmeli, yetkili servise başvurulmalı. 0Y-A1, Bosch'un listesinde Condens 7000i W modelinde geçiyor."
  - q: "Bosch Condens 2500 W'de su nereden basılır?"
    a: "Condens 2500 W kullanma kılavuzuna göre doldurma ünitesi cihazın alt tarafında, ısıtma tesisatı gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasında yer alıyor. Kılavuz doldurma vanasını açıp manometre 1 ile 2 bar arası gösterene kadar doldurmayı, sonra vanayı tekrar kapatmayı söylüyor."
  - q: "CE için basınç kaç bar olmalı?"
    a: "Bosch'un CE sayfası basıncın 1,2 bar'a yükseltilmesini istiyor. Condens 2500 W ve 7000i W kılavuzlarına göre çalışma basıncı normal durumlarda 1 ile 2 bar arasıdır; tesisatın için en uygun değeri yetkili servis verir. Isıtma suyunun en yüksek sıcaklığında 3 bar aşılmamalı; aşılırsa emniyet ventili açılır."
images:
  coverAlt: "Beyaz bir kombinin alt tarafında borular arasında küçük bir doldurma vanası; üstte kumanda panelindeki basınç göstergesi 1 bar civarında"
---

Bosch kombinin ekranında **CE** yanıp sönüyor. Bosch'un CE sayfasındaki tanım kısa: **"Tesisat su basıncı düşük."** Çözüm de iki cümle: **tesisat su basıncı 1,2 bar'a yükseltilmeli** ve **yetkili servise başvurulmalı.** Condens 7000i W'de aynı çözüm **0Y-A1** koduyla geliyor; Bosch bu kodu "tesisat ile ilgili hata var" diye tanımlıyor ve çözüm metni CE ile birebir aynı.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** CE / 0Y-A1 = Bosch'a göre tesisat su basıncı düşük. Sıra şu: kombi soğusun → manometreden basıncı oku → doldurma vanasını aç → 1,2 bar'da kapat → bir kez reset → kod sürüyor ya da basınç yine düşüyorsa Bosch yetkili servis.

## CE ve 0Y-A1 hangi Bosch kombilerde çıkar

Bosch'un arıza kodları sayfasına göre:

- **CE:** Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver ve ClassicPlus listelerinde.
- **0Y-A1:** Condens 7000i W listesinde.

Bu yazıdaki doldurma ve reset ayrıntıları iki modelin kullanma kılavuzundan: CE'li **Condens 2500 W** ve 0Y-A1'li **Condens 7000i W.** Class, Classic ve Comfort Condense kullanıyorsan doldurma vanasının yeri için kendi kılavuzuna bak; bilmiyorsan servisten göstermesini iste.

## Adım adım: evde denenecekler

**1. Kombinin soğumasını bekle.** Condens 7000i W kılavuzunun uyarısı: sıcak kombiye soğuk ısıtma suyu eklemek termik gerilme nedeniyle hasara yol açabilir. Isıtma tesisatını **yalnız soğuk durumdayken** doldur; gidiş suyu en fazla **40 °C** olmalı.

**2. Basıncı oku.** Condens 2500 W kılavuzu çalışma basıncının **manometreden** okunmasını istiyor; 7000i W kılavuzunda manometre kumanda panelinin bir parçası olarak gösteriliyor. İki kılavuza göre normal çalışma basıncı **1 ile 2 bar** arası.

**3. Doldurma vanasının yerini bul.** **Condens 2500 W** kılavuzu yeri tarif ediyor: doldurma ünitesi cihazın **alt tarafında**, ısıtma tesisatı gidiş suyu ile sıcak kullanım suyu çıkış bağlantısının **arasında.** **Condens 7000i W** kılavuzu ise ısıtma devresinin doldurulmasının **tesisata göre farklılık gösterdiğini** yazıyor ve yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini istemeni** öneriyor. Vanayı bulamıyorsan bu adımda dur.

**4. Basıncı 1,2 bar'a getir.** Doldurma vanasını aç ve manometreyi izle. Bosch'un CE ve 0Y-A1 sayfalarındaki hedef **1,2 bar.** Condens 2500 W kılavuzu doldurmayı manometre **1 ile 2 bar** arası gösterene kadar sürdürmeyi söylüyor; 1,2 bar bu aralığın içinde. Tesisatın için farklı bir değer gerekiyorsa kılavuza göre onu yetkili servis verir.

**5. Vanayı kapat.** Condens 2500 W kılavuzunun son adımı: doldurma vanasını **tekrar kapat.** Üst sınırı unutma: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.

**6. Bir kez sıfırla (reset).** Kılavuzlardaki reset yolu modele göre değişiyor:

- **Condens 2500 W:** ekranda **H ve !** varsa kılavuzda gösterilen tuşa, iki sembol kaybolana kadar basılı tut; **yalnız H** varsa cihazı açma-kapama tuşuyla kapatıp yeniden çalıştır.
- **Condens 7000i W:** cihazı kapatıp aç ya da ekranda **"Sıfırla"** görünene kadar **reset tuşuna** bas.

**7. Kod sürüyorsa servisi ara.** Bosch'un CE ve 0Y-A1 çözümü basıncı yükseltmenin yanında **yetkili servise başvurmayı** da söylüyor. Basınç 1,2 bar'da olduğu hâlde kod geri geliyorsa ya da basınç yine düşüyorsa servisi ara. Kılavuzlar servise **gösterilen arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor.

## Basınç neden düşer, ne zaman endişelenmeli

Condens 2500 W ve 7000i W kılavuzlarının "tesisat kaçakları" uyarısı açık: sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir. Her doldurmada sisteme oksijen girer, korozyon artar ve cihaz hasar görebilir. **Kaçakların giderilmesi gerekir** ve kılavuzlar bu tür hasarları garanti dışı sayıyor. Su eklemek kodu bir kez susturur; basınç tekrar tekrar düşüyorsa kaçağın bulunup giderilmesi yetkili servis işidir. Markadan bağımsız anlatım: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ne zaman doğrudan servis

- Doldurma vanasının yerini bilmiyorsan.
- Basınç 1,2 bar'a geldiği hâlde CE ya da 0Y-A1 sürüyorsa.
- Su ekledikten kısa süre sonra basınç yine düşüyorsa.
- Kombinin dış sacını açma: Bosch kılavuzları dış sacın **asla sökülmemesini** istiyor.

Servise bildireceğin cihaz adı ve seri numarası, kılavuzlara göre **kumanda paneli kapağındaki tip etiketinde** yazılı.

## Servisi aramadan önce kısa kontrol

1. Ekrandaki kod CE mi, 0Y-A1 mi?
2. Kombi soğukken manometre kaç bar?
3. Doldurmadan sonra basınç 1,2 bar'da kaldı mı?
4. Son su eklemenin üzerinden kaç gün geçti?
5. Model adı tip etiketinden okundu mu?

Aynı modellerde ateşleme yapmama koduyla gelen basınç düşüklüğü için [Bosch kombi E9 hatası](/blog/bosch-kombi-e9-hatasi/), bütün modellerin kodları için [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) yazısına bakabilirsin.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
