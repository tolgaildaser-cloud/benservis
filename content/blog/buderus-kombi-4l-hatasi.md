---
title: "Buderus kombi 4L ve 2E hatası"
description: "Buderus kombide 4L ve 2E tesisat su basıncı düşük demek. Basıncı okuma, soğukken su ekleme ve servis sınırı adım adım; Buderus belgelerinden."
slug: "buderus-kombi-4l-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext -layout ile okundu, sayfa no \f ayracına göre.
# Web araması yalnız U072 kılavuzunun YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan / üçüncü taraf siteden alınmadı.
# Alıntı denetim tablosu: buderus-kombi-4l-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: 4L ve 2E sayfalarının "Arıza Tanımı" ve "Çözüm" metni birebir aynı (farklı model aileleri) → mükerrer açılmadı.
# K1) Buderus TR "4L Arıza Kodu" · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4l-ariza-kodu/
#     HTTP 200 · 123.899 B · md5 65e0394f91c93fae8616f2df80090f41
#     Birebir: "Tesisat su basıncı düşük." | "Tesisat su basıncı 1.2 bar'a yükseltilmeli. Yetkili servise başvurun."
# K2) Buderus TR "2E Arıza Kodu" · .../2e-ariza-kodu/ · HTTP 200 · 123.899 B · md5 6c4c0cb755e0225c6a9b3bdb7ef61449
#     Birebir: "Tesisat su basıncı düşük." | "Tesisat su basıncı 1.2 bar'a yülseltilmeli. Yetkili servise başvurun." (yazım hatası normalize edildi)
# K3) Dizin sayfası md5 ff763f86f479cd5ba6b5c8935ee0960a — 4L: GB172i, GB062, GB012, GB072, GB042 · 2E: U022, U072
# B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf
#     HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     Tesisat kaçakları s.3 · "İşletme basıncı normal durumlarda 1 ila 2 bar" + doldurma tesisata göre farklı/servisten göstermesini iste +
#     "Isıtma suyunu sadece cihaz soğuk durumdayken ilave edin" + "Doldurma vanasını açın … 1 ila 2 bar … tekrar kapatın" + 3 bar s.5 ·
#     manometre = kumanda elemanı [9] s.6 · reset + servis + tip etiketi s.12
# B2) Logamax U072 Kullanma Kılavuzu 6720813734 (2015/02)
#     https://buderus-tr-tr-c.boschhc-documents.com/download/file/file/6720813734.pdf
#     HTTP 200 · 746.828 B · 12 s. · md5 0f67df9c94f4db798d5c3ce9c8b462b8
#     "Çalışma basıncı normal şartlarda 1 ile 2 bar arasıdır" + manometre + kumanda paneli kapağı açık s.4 ·
#     soğukken + doldurma ünitesinin yeri + doldurma vanası 1–2 bar + 3 bar s.5 · servis + tip etiketi s.7
# B3) Logamax plus GB172i.2 Kullanım Kılavuzu 6721852623 (2023/12)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf
#     HTTP 200 · 1.744.938 B · 16 s. · md5 e2c3f95692c0e3c1e3a2ea3b59997420
#     LoPr mesajı, 0,3 bar altında blokaj, "Isıtma tesisatını doldurun" s.7 · "Gerekli çalışmaların, sadece yetkili bir servis" s.3
# BİLEREK yazılmayanlar:
#  - "Emniyet ventilinden su geliyorsa servis" tetikleyicisi: kılavuz yalnız 3 bar aşılırsa ventilin açıldığını söylüyor; servis tetikleyicisi olarak uydurulmadı.
#  - Basıncın NEDEN düştüğü (kaçak, genleşme tankı, emniyet ventili): Buderus'un 4L/2E sayfaları sebep saymıyor.
#    Yalnız kılavuzun "sık su ekleniyorsa kaçak vardır" cümlesi verildi.
#  - GB172i.2'nin 4L kullandığı: o kılavuz düşük basıncı LoPr mesajıyla gösteriyor; ayrı not olarak verildi, eşitlik kurulmadı.
#  - GB062/GB012/GB042/GB172i (.2 olmayan)/U022 kullanma kılavuzları bu koşuda indirilmedi; bu modellerde yalnız kod sayfası esas.
#  - Reset'in 4L/2E'yi çözdüğü: sayfalar reset demiyor; reset adımı konmadı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin soğumasını bekle; ısıtma suyu yalnız cihaz soğukken eklenir."
  - "Basıncı kombinin manometresinden oku."
  - "Doldurma vanasının yerini kılavuzundan bul; bilmiyorsan servisten göstermesini iste."
  - "Doldurma vanasını aç ve manometrede basınç yükselirken izle."
  - "Basınç 1,2 bar'a ulaşınca, 2 bar'ı geçmeden doldurma vanasını kapat."
  - "Kodu ve ne kadar sürede su eklediğini not edip Buderus yetkili servisine bildir."
faq:
  - q: "Buderus kombide 4L hatası ne demek?"
    a: "Buderus'un 4L sayfasına göre 4L, tesisat su basıncının düşük olduğunu gösterir. Sayfanın çözümü iki cümle: tesisat su basıncı 1,2 bar'a yükseltilmeli ve yetkili servise başvurulmalı. 4L, Buderus'un listesinde Logamax plus GB172i, GB062, GB012, GB072 ve GB042 modellerinde geçiyor."
  - q: "2E ile 4L aynı şey mi?"
    a: "Buderus'un 2E ve 4L sayfalarındaki tanım ve çözüm aynı: tesisat su basıncı düşük, basınç 1,2 bar'a yükseltilmeli, yetkili servise başvurulmalı. Fark modelde: 2E, Logamax U022 ve U072'nin listesinde; 4L ise GB serisinde. Buderus'un listesinde 2 E-Y adında ayrı bir kod da var; o kod kalorifer tesisatındaki sirkülasyon problemlerini gösteriyor ve doğrudan servis işi."
  - q: "Buderus kombinin basıncı kaç bar olmalı?"
    a: "GB072 ve U072 kullanma kılavuzları normal şartlarda çalışma basıncını 1 ile 2 bar arası veriyor; daha yüksek bir basınç gerekiyorsa değeri yetkili servis verir. 4L ve 2E sayfaları basıncın 1,2 bar'a yükseltilmesini söylüyor. Kılavuzlara göre ısıtma suyunun en yüksek sıcaklığında 3 bar aşılmamalı; aşılırsa emniyet ventili açılır."
  - q: "Su ekledim, kod gitti; yine de servisi aramalı mıyım?"
    a: "Buderus'un 4L ve 2E sayfaları basıncı yükselttikten sonra da yetkili servise başvurulmasını söylüyor. Kılavuzlar ayrıca sisteme sık su ekleniyorsa bunun sistemde su kaçağı olduğunu gösterdiğini ve kaçakların giderilmesi gerektiğini yazıyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin ön panelinde yuvarlak bir basınç göstergesi, altındaki borular arasında küçük bir doldurma vanası"
---

Ekranda **4L** ya da **2E** görüyorsan Buderus'un tanımı ikisi için de aynı: **"Tesisat su basıncı düşük."** Çözüm de aynı iki cümle: **tesisat su basıncı 1,2 bar'a yükseltilmeli** ve **yetkili servise başvurulmalı.** İlk yarısı, yani basıncı okumak ve su eklemek, Buderus'un kullanma kılavuzlarının kullanıcıya verdiği bir iş. Bu yazı o işi adım adım anlatıyor ve servisin neden hâlâ listede olduğunu açıklıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 4L / 2E = Buderus'a göre tesisat su basıncı düşük. Sıra şu: kombi soğusun → manometreden basıncı oku → doldurma vanasını aç → 1,2 bar'a gelince (2 bar'ı geçmeden) kapat → durumu yetkili servise bildir. Basınç sık düşüyorsa sistemde kaçak vardır.

## 4L mi, 2E mi: modeline göre

Buderus'un arıza kodları sayfasına göre:

| Kod | Modeller | Tanım | Çözüm |
|---|---|---|---|
| **4L** | Logamax plus GB172i, GB062, GB012, GB072, GB042 | Tesisat su basıncı düşük | Basınç 1,2 bar'a yükseltilmeli; yetkili servise başvur |
| **2E** | Logamax U022, U072 | Tesisat su basıncı düşük | Basınç 1,2 bar'a yükseltilmeli; yetkili servise başvur |

Karıştırmaman gereken bir kod var: **2 E-Y** (GB172i listesinde) başka bir koddur. Buderus'a göre kalorifer tesisatındaki sirkülasyon problemlerini gösterir ve tek çözümü yetkili servistir.

Daha yeni **GB172i.2** kullanıyorsan ekranda harfli kod yerine başka bir mesaj görebilirsin: o modelin kılavuzu, çalışma basıncı ayarlı alt değerin altına düşünce ekranda **LoPr** mesajı çıktığını, 0,3 bar'ın altında ısıtma tesisatının bloke edildiğini yazıyor; iki durumda da istenen ısıtma tesisatını doldurmak.

## Adım adım: evde denenecekler

**1. Kombinin soğumasını bekle.** GB072 ve U072 kılavuzları aynı uyarıyı yapıyor: ısıtma suyunu **yalnız cihaz soğuk durumdayken** ilave et. U072 kılavuzuna göre sıcak ısı bloğuna soğuk su eklenirken gerilme nedeniyle çatlaklar oluşabilir.

**2. Basıncı oku.** Buderus'un kılavuzlarında basınç **manometreden** okunur. GB072'de manometre kumanda elemanlarının arasındadır. U072'de manometre, kılavuzun resmine göre kumanda panelinin kapağı açıldığında görünür; bu kumanda panelinin kapağıdır, kombinin dış sacı değildir.

**3. Doldurma vanasının yerini bil.** U072 kılavuzuna göre doldurma ünitesi **cihazın alt tarafında**, ısıtma tesisatı gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasındadır. GB072 kılavuzu ise önemli bir not düşüyor: ısıtma devresinin doldurulması **tesisata göre farklılık gösterir**; bu yüzden yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini iste.** Vanayı bulamıyorsan ya da emin değilsen bu adımda dur.

**4. Doldurma vanasını aç.** İki kılavuzun tarifi aynı: **doldurma vanasını aç** ve basıncı manometreden izle.

**5. Hedefte kapat.** Buderus'un 4L ve 2E sayfaları basıncın **1,2 bar'a** yükseltilmesini istiyor; GB072 ve U072 kılavuzları doldururken manometrede **1 ile 2 bar** arasını gösteriyor. Basınç bu aralığa gelince **doldurma vanasını tekrar kapat.** Üst sınır: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.

**6. Servise bildir.** 4L ve 2E sayfalarının ikinci cümlesi **yetkili servise başvurmak.** Kod gitse bile basıncın neden düştüğünü servisin bilmesi gerekir. Kodu ve ne kadar süre önce su eklediğini not et.

## Basınç sık düşüyorsa: kaçak uyarısı

GB072 kılavuzunun "tesisat kaçakları" uyarısı açık: sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir. Her doldurmada sisteme oksijen girer, korozyon artar ve cihazda hasara yol açabilir; **kaçakların giderilmesi gerekir.** Kılavuz bu tür hasarların garanti dışı sayıldığını da yazıyor. Kısacası su eklemek basıncı geri getirir, kaçağı gidermez; Buderus'un kılavuzları gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor. Markadan bağımsız anlatım için: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ne zaman doğrudan servis

- Doldurma vanasını bulamıyorsan ya da nasıl kullanıldığından emin değilsen.
- Su ekledikten kısa süre sonra 4L / 2E yine çıkıyorsa.
- Ekranda 4L değil **2 E-Y** yazıyorsa.

Kılavuzlar servisi ararken **arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor. GB072'de bu bilgiler tip etiketinde ya da ön kapaktaki cihaz tipi çıkartmasında, U072'de kumanda paneli kapağındaki tip etiketinde yazılıdır.

## Servisi aramadan önce kısa kontrol

1. Kombi soğukken basınç kaç bar?
2. Su ekledikten sonra basınç kaça çıktı?
3. Son su eklemenin üzerinden ne kadar geçti?
4. Model adı tip etiketinden okundu mu?

Diğer Buderus kodları için [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) yazısına bakabilirsin. Aşırı ısınma kodu 4C'de de ilk adım basınçtır: [Buderus kombi 4C hatası](/blog/buderus-kombi-4c-hatasi/).

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
