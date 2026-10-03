---
title: "Siemens indüksiyon ocak tencereyi algılamıyor"
description: "Siemens indüksiyonlu ocak tencereyi tanımıyor ya da zayıf ısıtıyorsa: mıknatıs, taban malzemesi ve çapı, adaptör plakası ve ocağın kendi pişirme kabı testi."
slug: "siemens-induksiyon-ocak-tencereyi-algilamiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ocak). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, yönlendirme 0, application/pdf.
#   Adresler siemens-home.bsh-group.com/tr ürün sayfalarındaki technicalDocuments "user-manuals" bağlantısından. Web araması yok. Sayfa = PDF sayfası.
#  S1) Siemens EH9..LV... indüksiyonlu ocak, TR  https://media3.bsh-group.com/Documents/9001906458_F.pdf  20 s.  md5 0db02262c1b3cbbc8042fa546acf9a22  (ürün: …/induksiyonlu-ocaklar/EH975LVC1E)
#  S2) Siemens ED..HQB.. indüksiyonlu ocak, TR  https://media3.bsh-group.com/Documents/9001975506_E.pdf  24 s.  md5 4d60dc0eeae245d550f9340e16655b7d  (ürün: …/ED65KHQB1E)
#   Pişirme kabı ve test bölümleri iki belgede aynı (S1 s.5 / s.13 · S2 s.5 / s.13).
# Ana satırlar (S1 s.5 "4 Uygun pişirme kapları"): "İndüksiyonlu pişirmeye uygun pişirme kabı ferromanyetik tabana sahip olmalı, mıknatısla çekilmeli ve taban pişirme alanının
#   boyutuna uygun olmalıdır. Bir pişirme alanı üzerindeki kap algılanmazsa, daha düşük çaptaki bir pişirme alanına yerleştiriniz." · "Tüm kapların tabanlarının tamamen düz ve
#   pürüzsüz olması gerekir." · "Uygun değil: Normal ince çelik, cam, kil, bakır veya alüminyumdan yapılmış pişirme kapları." · "Alüminyum kısımları olan pişirme kabı tabanları."
#   "...yeterince algılanmayabilir veya hiç algılanmayabilir" · "Ocak ile pişirme kabı arasında kesinlikle adaptör plakaları kullanılmamalıdır."
#   S1 s.13 "17.1 Pişirme kabı testi yürütülmesi": "1. Oda sıcaklığında, yaklaşık 200 ml su içeren pişirme kabını, pişirme kabı tabanının boyutuna en iyi uyan pişirme alanının
#   merkezine yerleştiriniz." · "10 saniye sonra pişirme alanları göstergesinde sonuç gösterilir." · "Not: Kötü sonuçlar elde edilmesi durumunda, eğer mevcutsa pişirme kabını daha
#   küçük bir pişirme alanına yerleştiriniz."
# BİLEREK YAZILMAYANLAR: test sonuç sembolleri ve temel ayar göstergelerinin glifleri (PDF'te simge) · "tencere üreticisi ağız çapını verir" ipucu (okura yanıltıcı okunabilir, alınmadı)
#   · güç sınırlaması ayar değerleri ve amper önerileri (elektrik tesisatı konusu) · marka tencere önerisi · fiyat.
# Alıntı denetim tablosu: siemens-induksiyon-ocak-tencereyi-algilamiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mutfak mıknatısı", "Bir bardak su", "Ocağın kullanım kılavuzu"]
steps:
  - "Mıknatısı tencerenin tabanına tut; tabanı mıknatısı çekmiyorsa o tencere indüksiyonda algılanmaz."
  - "İnce çelik, cam, kil, bakır ya da alüminyum tencere yerine ferromanyetik tabanlı bir kap kullan."
  - "Tencerenin tabanının tamamen düz ve pürüzsüz olduğunu kontrol et."
  - "Tencereyi tabanına en uygun boydaki pişirme alanının ortasına koy; algılanmazsa daha küçük çaplı bir alana taşı."
  - "Ocakla tencere arasında adaptör plakası kullanıyorsan kaldır."
  - "Temel ayarlardaki pişirme kabı testini, içinde yaklaşık 200 ml oda sıcaklığında su olan tencereyle çalıştır."
faq:
  - q: "Siemens indüksiyon ocağım tencereyi neden görmüyor?"
    a: "Siemens'in kılavuzuna göre indüksiyonda kullanılacak kabın tabanı ferromanyetik olmalı, mıknatısla çekilmeli ve pişirme alanının boyutuna uymalı. Normal ince çelik, cam, kil, bakır ya da alüminyum kaplar uygun değil. Kap bir alanda algılanmıyorsa kılavuz onu daha küçük çaplı bir alana koymanı öneriyor."
  - q: "Tencerem mıknatısı tutuyor ama yine zayıf ısınıyor."
    a: "Kılavuz bu durumu 'Uygun' sütununda anlatıyor: tabanı tamamen ferromanyetik olmayan ya da alüminyum kısımları olan kaplarda yalnız ferromanyetik alan ısınır ve kaba daha düşük güç aktarılır. Bu kaplar yeterince algılanmayabilir ya da hiç algılanmayabilir. Ocağın pişirme kabı testiyle kabın uygun, optimum değil ya da uygun değil olduğunu görebilirsin."
  - q: "Pişirme kabı testi ne kadar sürüyor?"
    a: "Kılavuza göre içinde yaklaşık 200 ml oda sıcaklığında su olan kabı, tabanına en uygun pişirme alanının ortasına koyup testi temel ayarlardan başlatıyorsun; 10 saniye sonra sonuç pişirme alanının göstergesinde görünüyor. Sonuç kötüyse varsa daha küçük bir alanı dene."
  - q: "Eski tencerelerimle adaptör plakası kullanabilir miyim?"
    a: "Hayır. Siemens'in kılavuzu ocak ile pişirme kabı arasında kesinlikle adaptör plakası kullanılmamasını yazıyor."
images:
  coverAlt: "Siyah indüksiyonlu ocağın üzerinde duran bir tencerenin tabanına tutulmuş küçük mutfak mıknatısı"
---

İndüksiyonlu ocağı açtın, tencereyi koydun ama göz ısıtmaya başlamıyor ya da çok yavaş ısıtıyor. İndüksiyonda ısı tencerenin tabanında oluştuğu için ocak önce kabı **tanımak** zorunda. Siemens'in EH9 ve ED serisi indüksiyonlu ocak kılavuzları bunu tek cümleyle özetliyor: uygun kap **"ferromanyetik tabana sahip olmalı, mıknatısla çekilmeli ve taban pişirme alanının boyutuna uygun olmalıdır."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mıknatıs tabana yapışıyor mu → taban düz mü → kap doğru boy alanın ortasında mı (olmuyorsa daha küçük alan) → adaptör plakası var mı → ocağın pişirme kabı testi ne diyor. Uygun kapla da hiçbir alan çalışmıyorsa → müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Mıknatıs testi yap.** Siemens'in tarifinde ilk şart tabanın **mıknatısla çekilmesi.** Mutfak mıknatısını tencerenin dış tabanına tut; çekmiyorsa ocak o kabı ısıtmaz.

**2. Malzemeye bak.** Kılavuzun tablosunda "Uygun değil" satırı net: **"Normal ince çelik, cam, kil, bakır veya alüminyumdan yapılmış pişirme kapları."** Önerilen kaplar ise ısıyı eşit dağıtan sandviç tabanlı paslanmaz çelik ve paslanmaz çelikten ya da özel indüksiyon kabı gibi **ferromanyetik** kaplar.

**3. Tabanın düzlüğünü kontrol et.** Kılavuza göre kabın doğru tanınması için boyutu ve malzemesi önemli ve **tüm kapların tabanlarının tamamen düz ve pürüzsüz olması gerekir.**

**4. Doğru alanı seç.** Tabanın pişirme alanının boyutuna uyması gerekiyor. Kap bir alanda algılanmıyorsa Siemens'in önerisi: **daha düşük çaptaki bir pişirme alanına yerleştir.** Kabı alanın **ortasına** koymak testin de ilk adımı.

**5. Adaptör plakasını kaldır.** Kılavuzun notu: **ocak ile pişirme kabı arasında kesinlikle adaptör plakaları kullanılmamalıdır.**

**6. Pişirme kabı testini çalıştır.** Siemens ocaklarında temel ayarların içinde bir **pişirme kabı testi** var. Kılavuza göre içinde **yaklaşık 200 ml oda sıcaklığında su** olan kabı, tabanına en iyi uyan alanın merkezine koy ve testi temel ayarlardan başlat; **10 saniye sonra** sonuç alanın göstergesinde görünür. Üç sonuç var: kap **uygun değil** ve ısınmıyor, kap beklenenden **yavaş ısınıyor**, ya da kap doğru ısındı. Kötü sonuçta, varsa **daha küçük bir pişirme alanını** dene. Temel ayarlara giriş tuşları simgeyle gösterildiği için kılavuzundaki "Temel ayarlar" bölümüne bak.

## Mıknatıs tutuyor ama ısıtma zayıfsa

Siemens'in tablosundaki "Uygun" satırı en çok karıştırılan durumu anlatıyor:

| Kap | Kılavuzda ne oluyor |
|---|---|
| Tabanı tamamen ferromanyetik değil | Ferromanyetik alan tabandan küçükse **yalnız o alan ısınır**, ısı eşit dağılmaz |
| Tabanında alüminyum kısımlar var | Ferromanyetik yüzey küçülür, kaba **daha düşük güç** aktarılır; kap yeterince ya da hiç algılanmayabilir |

Kılavuz ayrıca aşırı ısınmayı önlemek için **boş kapların ısıtılmamasını** ve **ince tabanlı kapların kullanılmamasını** istiyor. Kabı göstergelerin ve sensörlerin yakınına koymamak da kılavuzdaki bir not; elektronik parçalar aşırı ısınabilir.

Ocak hiç açılmıyor ya da göstergeler yanıp sönüyorsa sorun tencerede değildir; markadan bağımsız kontrol listesi için [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Mıknatısı tutan, düz tabanlı ve testten "uygun" sonucu alan bir kapla da **hiçbir alan ısıtmıyorsa.**
- Yalnız bir alan, uygun kap ve doğru boyda olduğu hâlde **sürekli algılamıyorsa.**
- Göstergede kılavuzun tablosunda olmayan bir arıza kodu kalıcı olarak görünüyorsa: kılavuz bu durumda **müşteri hizmetleriyle irtibat kurup ilgili arıza kodunu bildirmeni** istiyor.

Siemens'in kılavuzuna göre cihazda onarımları yalnız eğitimini almış uzman personel yapabilir; arıza halinde müşteri hizmetlerini ara.

⛔ **Kendin-çöz sınırı burada biter.** Kap seçimi, alan seçimi ve pişirme kabı testi kullanıcıya; bobin, elektronik kart ve elektrik bağlantısı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
