---
title: "Samsung çamaşır makinesi UC hatası"
description: "Samsung çamaşır makinesi UC hatası: gelen elektrik voltajı uygun değil. Fiş, çoklu priz, uzatma kablosu ve boş deneme çalıştırması adım adım."
slug: "samsung-camasir-makinesi-uc-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  T4) Samsung TR SSS "UC hatası verdiğinde ne yapabilirim?" (Son güncelleme 2024-06-04)
#      https://www.samsung.com/tr/support/home-appliances/camasir-makinem-uc-hatasi-veriyor-ne-yapabilirim/
#      md5 82cb663b700b3aff18fb2753ee02afb0
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K2) WW4000T TR md5 2a8fa3df96d4d49f5da7294316f4a2ae (UC satırı s.59) · K3) WW5000T TR md5 402b21c11194758ab81d7af5f78ffd4d (UC satırı s.56) — birebir aynı
#  U1) Samsung UK "What do the codes on my washing machine mean?" (Updated 19 Feb 2025)
#      https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/  md5 703e8a9b09d5950e5fce8318c856f30f
# Birebir alıntılar:
#   T4: "Çamaşır makinesine gelen elektrik voltajının çamaşır makineniz için uygun olmadığı durumlarda UC bilgi kodu görüntülenir."
#   T4 adımlar: "Çoklu prize bağlı olmasını önermiyoruz. Çamaşır makinenizi doğrudan prize bağlayarak kontrol edin." ·
#       "Voltaj dalgalanmaları yaşanıyorsa voltaj düzelene kadar bekleyin veya herhangi bir elektrik teknisyeninden destek alın." ·
#       "...herhangi bir programda çamaşır ve deterjan olmadan çalıştırarak kontrol edin." · "Hata kodu görünmüyor ise makinenizi kullanmaya devam edin.
#       Yaşanılan durum elektrik voltajındaki anlık değişim ile ilgili olabilir."
#   K1 s.59 UC: "Elektronik kontrolün kontrol edilmesi gerekiyor." · "Gücün düzgün sağlandığını kontrol edin." · "Düşük voltaj algılandı." ·
#       "Güç kablosunun fişinin takılı olduğunu kontrol edin." · "Bilgi kodu kalırsa, bir müşteri servis merkezine başvurun."
#   K1 s.6: "Yalnızca bu cihaz için olan soketi kullanın ve bir uzatma kablosu kullanmayın." · s.16 "Uzatma kablosu KULLANMAYIN." · "Yalnızca çamaşır makineniz için ayrı bir şebeke devresi kullanın."
#   K1 s.6: fiş terminallerindeki toz ve suyu kuru bezle düzenli temizle (fişi prizden çıkararak)
#   K1 s.55-56: "Çamaşır makinesine yeterince güç sağlanmazsa, çamaşır makinesi geçici olarak boşaltmaz veya sıkmaz. ... yeniden yeterince gücü aldığında, normal çalışacaktır."
#   U1 "UC — Fluctuation in the supply voltage": fiş düzgün takılı · 1 dk güç kes · "not connected to any other apparatus or to an extension cable" · yeni program
# Bilerek YAZILMAYANLAR: voltaj ölçümü (multimetre), priz/sigorta/tesisat müdahalesi, regülatör önerisi (belgede yok), kart (PBA) teşhisi, kesin volt değeri.
# Alıntı denetim tablosu: samsung-camasir-makinesi-uc-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez"]
steps:
  - "Makineyi kapat, fişini prizden çek ve 1 dakika bekle."
  - "Fişin uçlarında toz ya da nem varsa kuru bir bezle sil."
  - "Makine çoklu prize ya da uzatma kablosuna bağlıysa oradan çıkar."
  - "Fişi doğrudan duvardaki prize sıkıca tak."
  - "Evde voltaj dalgalanması yaşanıyorsa elektrik düzelene kadar bekle."
  - "Makineyi çamaşırsız ve deterjansız herhangi bir programda çalıştırarak dene."
  - "Kod görünmüyorsa kullanmaya devam et; UC sürerse Samsung servisine, tesisat için elektrik teknisyenine başvur."
faq:
  - q: "Samsung çamaşır makinesi UC hatası ne demek?"
    a: "Samsung Türkiye'ye göre UC, çamaşır makinesine gelen elektrik voltajının makine için uygun olmadığı durumlarda görünür. Kılavuzdaki tabloda UC'nin karşılıkları 'Elektronik kontrolün kontrol edilmesi gerekiyor.' ve 'Düşük voltaj algılandı.' olarak geçiyor."
  - q: "Çamaşır makinesini çoklu prize takabilir miyim?"
    a: "Samsung önermiyor. UC için destek sayfasındaki ilk adım, makinenin çoklu prize bağlı olmaması ve doğrudan prize bağlanarak kontrol edilmesi. Kılavuz da yalnızca bu cihaz için olan soketin kullanılmasını ve uzatma kablosu kullanılmamasını istiyor."
  - q: "UC bir kez çıktı, sonra kayboldu. Sorun var mı?"
    a: "Samsung'a göre kontrollerden sonra hata kodu görünmüyorsa makineyi kullanmaya devam edebilirsin; yaşanan durum elektrik voltajındaki anlık bir değişimle ilgili olabilir."
  - q: "Elektrik zayıfken makine su boşaltmadı, arıza mı?"
    a: "Samsung kılavuzuna göre makineye yeterince güç sağlanmazsa makine geçici olarak boşaltmaz ya da sıkmaz; yeniden yeterince güç aldığında normal çalışır."
images:
  coverAlt: "Çamaşır makinesinin elektrik fişi doğrudan duvardaki topraklı prize takılı; yerde kullanılmayan bir çoklu priz duruyor"
---

Makine çalışırken durdu ya da hiç başlamadı ve ekranda **UC** yazıyor. Samsung Türkiye'nin destek sayfasına göre bu kod, **"çamaşır makinesine gelen elektrik voltajının çamaşır makineniz için uygun olmadığı durumlarda"** görüntülenir. Kullanım kılavuzundaki bilgi kodları tablosunda UC için iki karşılık yazıyor: **"Elektronik kontrolün kontrol edilmesi gerekiyor"** ve **"Düşük voltaj algılandı."**

Samsung'un UC için kullanıcıya verdiği kontrollerin hepsi fiş, priz ve elektrik düzeyindedir; tesisata dokunmak bu rehberin konusu değildir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** UC = Samsung'a göre makineye gelen voltaj uygun değil. Sıra şu: fişi çek, 1 dakika bekle → fişi kuru bezle sil → çoklu priz ya da uzatma kablosu varsa çıkar → doğrudan duvar prizine tak → dalgalanma varsa bekle → çamaşırsız ve deterjansız dene. Kod sürerse Samsung servisi; tesisat için elektrik teknisyeni.

## Adım adım: evde denenecekler

**1. Fişi çek, 1 dakika bekle.** Samsung'un UK destek sayfası UC için makinenin elektriğini kesip **1 dakika** beklemeyi öneriyor.

**2. Fişi sil.** Samsung kılavuzu, fiş uçlarındaki ve temas noktalarındaki toz ve su gibi yabancı maddelerin **fiş prizden çıkarılarak kuru bir bezle** düzenli olarak temizlenmesini istiyor.

**3. Çoklu prizi ve uzatma kablosunu devreden çıkar.** Samsung Türkiye'nin UC sayfasındaki ilk kontrol elektrik bağlantısı: **çoklu prize bağlı olmasını önermiyoruz.** Kılavuz da açık: **uzatma kablosu kullanma**; bir prizin uzatma kablosu kullanan diğer cihazlarla paylaşılması elektrik çarpmasına ya da yangına neden olabilir.

**4. Doğrudan prize tak.** Fişi, yalnızca makine için kullanılan duvar prizine **sıkıca** tak. Kılavuzun UC satırındaki kontrol de budur: güç kablosunun fişinin takılı olduğunu kontrol et. Kılavuz ayrıca çamaşır makinesi için **ayrı bir şebeke devresi** kullanılmasını istiyor.

**5. Dalgalanma varsa bekle.** Samsung'a göre makineye gelen voltajın **sabit** olması gerekir. Evde voltaj dalgalanmaları yaşanıyorsa Samsung'un önerisi **voltaj düzelene kadar beklemek** ya da bir **elektrik teknisyeninden** destek almaktır.

**6. Boş dene.** Kontrollerden sonra makineyi **çamaşır ve deterjan olmadan**, herhangi bir programda çalıştırarak dene. Bu Samsung'un UC sayfasındaki üçüncü adımdır.

**7. Sonuca göre karar ver.** Samsung'a göre hata kodu görünmüyorsa makineyi **kullanmaya devam et**; yaşanan durum elektrik voltajındaki **anlık bir değişimle** ilgili olabilir. Kod kalırsa kılavuzun önerisi bir müşteri servis merkezine başvurmaktır. Priz, sigorta ya da tesisatla ilgili bir şüphen varsa bu iş elektrik teknisyeninindir.

## Güç yetmeyince makine ne yapar?

Samsung kılavuzuna göre çamaşır makinesine **yeterince güç sağlanmazsa** makine geçici olarak **boşaltmaz ya da sıkmaz**; yeniden yeterince güç aldığında normal çalışır. Makinenin hiç başlamadığı durumlarda kılavuzun "Başlamıyor" listesi prizi, sigortayı ya da devre kesiciyi kontrol etmeyi de sayıyor; markadan bağımsız kontroller için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bakabilirsin.

Samsung'un diğer kodları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis, ne zaman elektrikçi

İki ayrı durum var. Evde voltaj dalgalanması yaşanıyorsa Samsung'un önerisi bir elektrik teknisyeninden destek almak; topraklamadan emin değilsen kılavuzun önerisi **kalifiye bir elektrikçiye** kontrol ettirmek; fiş prize uymuyorsa da uygun prizi elektrikçinin takması gerekiyor. Makine doğrudan sağlam bir prize takılı, elektrik düzgün ve UC hâlâ geliyorsa kılavuzun önerisi bir **müşteri servis merkezine** başvurmaktır.

⛔ **Kendin-çöz sınırı burada biter.** Fişi değiştirme, prizi sökme, voltaj ölçme gibi işler bu rehberin dışındadır. Kural basit: **fiş ve priz seçimi kullanıcıya; tesisat elektrikçiye, makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Makine çoklu prize ya da uzatma kablosuna mı bağlıydı?
2. Doğrudan duvar prizine takınca UC geçti mi?
3. Evde voltaj dalgalanması yaşanıyor mu?
4. Çamaşırsız ve deterjansız denemede kod çıktı mı?
5. UC hangi anda geliyor: açılışta mı, program ortasında mı?

Bu beşine cevabın varsa servise ya da elektrikçiye "voltaj hatası" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
