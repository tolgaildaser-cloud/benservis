---
title: "Samsung çamaşır makinesi OC hatası"
description: "Samsung çamaşır makinesi OC (OE) hatası: su seviyesi fazla algılandı. Sıkma ile boşaltma, acil boşaltma hortumu ve deterjan kontrolü adım adım."
slug: "samsung-camasir-makinesi-oc-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  T5) Samsung TR SSS "OE veya OC hatası verdiğinde ne yapabilirim?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/camasir-makinesi-oe-veya-oc-hatasi-veriyor-ne-yapabilirim/
#      md5 875ce6238370f12ab74175e7daa6dbaf
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K2) WW4000T TR md5 2a8fa3df96d4d49f5da7294316f4a2ae (OC satırı s.58) · K3) WW5000T TR md5 402b21c11194758ab81d7af5f78ffd4d (OC satırı s.55) — birebir aynı
#  U1) Samsung UK "What do the codes on my washing machine mean?" (Updated 19 Feb 2025)
#      https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/  md5 703e8a9b09d5950e5fce8318c856f30f
# Birebir alıntılar:
#   T5: "Makinenizdeki su seviyesi fazla algılandığında OE/OC hata mesajı ile karşılaşılır." · "Su seviyesini azaltmak için, Sıkma programında makinenizi başlatın."
#   T5: tahliye olmazsa 5 adım: fiş çek · kapağı aç · acil tahliye hortumu, geniş kap · "Tahliye hortumu 5 cm kadar dışarı uzayacaktır. Tahliye hortumunu daha fazla çekmeyin." ·
#       tıpayı tak, yerine yerleştir · koruyucu kapağı kapat
#   K1 s.58 OC: "Su taşıyor." · "Sıktıktan sonra yeniden başlatın." · "Bilgi kodu ekranda kalırsa, yerel bir Samsung servis merkezine başvurun."
#   U1 "OC, OE, OF — Overflow error": "Too much washing powder/liquid may have been added." + 1 dk güç kesip açma, "The drain pump should drain the washing machine."
#   K1 s.55 Aşırı köpük: önerilen deterjan türü · HE deterjan · yumuşak su/az yük/az kirli çamaşırda deterjanı azalt · "HE olmayan deterjan önerilmez."
#   K1 s.49 Acil durum boşaltma: büyük kap, "Kazandaki su beklenenden fazla olabileceğinden büyük bir kap kullanın."
# Bilerek YAZILMAYANLAR: su seviyesi sensörü/basınç şalteri/valf teşhisi (Samsung OC için kullanıcıya teşhis vermiyor) · "OF" kodunu TR metnine taşıma (yalnız UK'de) ·
#   su sızıntısı iddiası (TR metni "su seviyesi fazla algılandı / su taşıyor" diyor).
# Alıntı denetim tablosu: samsung-camasir-makinesi-oc-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Geniş, boş bir kap"]
steps:
  - "Suyu azaltmak için makineyi sıkma programında başlat."
  - "Su tahliye olmuyorsa makineyi kapat ve fişini prizden çek."
  - "Filtre kapağını aç ve önüne boş, geniş bir kap koy."
  - "Acil boşaltma hortumunu en fazla 5 cm dışarı çek ve kazandaki suyu kaba boşalt."
  - "Tıpayı tak, hortumu yerine yerleştir ve koruyucu kapağı kapat."
  - "Kullandığın deterjanın türünü ve miktarını kontrol et; gerekirse azalt."
  - "Fişi tak ve makineyi yeniden başlat; OC ekranda kalırsa Samsung servisine başvur."
faq:
  - q: "Samsung çamaşır makinesi OC hatası ne demek?"
    a: "Samsung Türkiye'ye göre OE/OC hata mesajı, makinedeki su seviyesi fazla algılandığında görünür. Kullanım kılavuzundaki bilgi kodları tablosunda OC'nin karşılığı 'Su taşıyor.' şeklindedir."
  - q: "OC hatasında ilk ne yapmalıyım?"
    a: "Samsung'un ilk önerisi, su seviyesini azaltmak için makineyi sıkma programında başlatmak. Kılavuzun tablosu da sıktıktan sonra yeniden başlatmayı söylüyor. Su tahliye edilemiyorsa fişi çekip acil boşaltma hortumuyla suyu boşaltabilirsin."
  - q: "Fazla deterjan OC hatasına yol açar mı?"
    a: "Samsung'un UK destek sayfası OC, OE ve OF kodları için olası sebep olarak fazla çamaşır tozu ya da sıvı deterjan eklenmiş olabileceğini yazıyor. Kılavuz da aşırı köpüğü önlemek için yüksek etkililiğe (HE) sahip deterjan kullanılmasını ve yumuşak su, az yük ya da az kirli çamaşırda deterjan miktarının azaltılmasını öneriyor."
  - q: "Yeniden başlattım, OC gitmiyor. Ne yapmalıyım?"
    a: "Samsung kılavuzuna göre bilgi kodu ekranda kalırsa yerel bir Samsung servis merkezine başvurulur. Bu noktadan sonra kullanıcıya verilen başka bir adım yok."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin kapak camının ardında normalden yüksek duran köpüklü su"
---

Makine yıkamanın ortasında durdu ve ekranda **OC** yazıyor. Modeline göre aynı durum **OE** olarak da görünebilir. Samsung Türkiye'nin destek sayfasına göre bu mesaj **"makinenizdeki su seviyesi fazla algılandığında"** çıkar. Kullanım kılavuzundaki bilgi kodları tablosunda OC'nin karşılığı iki kelimedir: **"Su taşıyor."**

Samsung'un bu kod için kullanıcıya verdiği iş, fazla suyu makineden almaktır: önce sıkma programıyla, o olmazsa acil boşaltma hortumuyla.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** OC / OE = Samsung'a göre su seviyesi fazla algılandı. Sıra şu: sıkma programını başlat → su gitmezse fişi çek → filtre kapağının önüne geniş kap → acil boşaltma hortumuyla suyu al → deterjan miktarını gözden geçir → yeniden başlat. Kod ekranda kalırsa Samsung servisi.

## Adım adım: evde denenecekler

**1. Sıkma programını başlat.** Samsung'un ilk önerisi: **su seviyesini azaltmak için** makineyi **sıkma programında** başlat. Kılavuzun tablosundaki ifade de aynı yönde: sıktıktan sonra yeniden başlat.

**2. Su gitmiyorsa fişi çek.** Sıkma programı suyu tahliye edemezse Samsung'un prosedürü başlar: makineyi **kapat ve fişini prizden çek.**

**3. Filtre kapağını aç, kabı hazırla.** Filtre kapağını aç ve önüne **boş, geniş bir kap** koy. Kılavuz, kazandaki su beklenenden fazla olabileceği için büyük bir kap kullanılmasını istiyor; OC'de kazanda normalden fazla su olduğunu unutma.

**4. Suyu acil boşaltma hortumuyla al.** Tahliye filtresinin yanındaki tahliye hortumunu dışarı doğru çek ve ucunu kaba yönelt. Samsung'un uyarısı: hortum **5 cm kadar** dışarı uzar, **daha fazla çekme.** Tıpasını açıp suyun kaba akmasını bekle.

**5. Her şeyi yerine koy.** Kazandaki su tamamen boşalınca **tıpayı tak**, hortumu yerine yerleştir ve **koruyucu kapağı kapat.**

**6. Deterjana bak.** Samsung'un UK destek sayfası OC için olası sebeplerden biri olarak **fazla çamaşır tozu ya da sıvı deterjan** eklenmiş olmasını sayıyor. Kılavuzun aşırı köpük önerileri: önerilen deterjan türünü uygun şekilde kullan, **yüksek etkililiğe (HE) sahip deterjan** tercih et ve yumuşak su, az yük ya da az kirli çamaşırda **deterjan miktarını azalt.** Kılavuza göre HE olmayan deterjan önerilmez.

**7. Yeniden başlat.** Fişi tak ve makineyi yeniden başlat. Samsung kılavuzuna göre bilgi kodu **ekranda kalırsa** yerel bir Samsung servis merkezine başvurulur.

## OC ve OE: aynı uyarının model varyantları

Samsung Türkiye'nin destek sayfası iki kodu birlikte, **OE/OC** olarak veriyor. Hangisinin görüneceği modele göre değişir. Samsung'un diğer kodları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## OC ile 5C'yi karıştırma

İki kodda da kazanda su kalır ama anlamları farklıdır. **OC**, su seviyesinin **fazla algılandığını**; **5C** ise makinenin suyu **tahliye edemediğini** söyler. 5C'de Samsung'un çözümü tahliye hortumu ve kalıntı filtresi temizliğidir; o adımlar [Samsung çamaşır makinesi 5C hatası](/blog/samsung-camasir-makinesi-5c-hatasi/) yazısında. Acil boşaltma hortumuyla suyu alma adımı iki kodda da aynıdır.

## Ne zaman servis

Sıkma ile ya da acil boşaltma hortumuyla su alındı, deterjan kullanımı düzeltildi ve makine yeniden başlatıldığında OC hâlâ ekranda kalıyorsa kullanıcıya verilen kontroller bitmiş demektir. Samsung'un yönlendirmesi yerel Samsung servis merkezidir.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **suyu boşaltmak ve deterjan miktarı kullanıcıya; su seviyesinin neden fazla algılandığının teşhisi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Sıkma programı suyu boşaltabildi mi?
2. Acil boşaltma hortumundan ne kadar su çıktı?
3. Hangi deterjanı, ne kadar kullandın?
4. Kazanda aşırı köpük var mıydı?
5. Yeniden başlatınca OC hemen mi geldi, program ilerledikten sonra mı?

Bu beşine cevabın varsa servise "su taşıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
