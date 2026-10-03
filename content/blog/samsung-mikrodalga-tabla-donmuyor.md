---
title: "Samsung mikrodalga tabla dönmüyor"
description: "Samsung mikrodalgada tabla dönmüyor ya da takılıyorsa: döner halkayı yerine oturt, yükü ve kabı küçült, altta yapışan yemeği temizle. Samsung kılavuzuna göre."
slug: "samsung-mikrodalga-tabla-donmuyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi:
#   org.downloadcenter.samsung.com → 302 → downloadcenter.samsung.com, HTTP 200, application/pdf. Sayfa = PDF sayfası. Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  S1) MS23K3555ES (solo)     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MS23K3555ES&CttFileID=10050739&CDCttType=UM&VPath=UM%2F202501%2F20250124214349803%2FO_DE68_04422C_09_IB_FULL_MW3500K_MS23K3555ES_ND_TR_250113.pdf  36 s.  md5 f6807838775fcda408d8b59dd9004d70
#  S2) MG22M8074AT (ankastre) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MG22M8074AT&CttFileID=10050745&CDCttType=UM&VPath=UM%2F202501%2F20250124215510421%2FO_DE68_04500A_05_IB_FULL_MQ8000M_MG22M8074AT_TR_250113.pdf  44 s.  md5 9fa416f0c1553481e0291524183ee472
# Ana satırlar ("Döner Tabla" bölümü): S1 s.28 · S2 s.37 "Dönerken, döner tabla yerinden çıkıyor veya dönmeyi durduruyor." → "Döner halka yoktur veya döner halka
#   yerine düzgün oturmamıştır." / "Döner halkayı takın ve sonra yeniden deneyin." · "Döner tabla dönerken sürükleniyor." → "Döner halka yerine düzgün oturmamıştır,
#   çok fazla yiyecek vardır veya kap çok büyüktür ve mikrodalganın içine değiyordur." / "Yiyecek miktarını ayarlayın ve çok geniş kaplar kullanmayın."
#   · "Döner tabla dönerken tıkırdıyor ve çok gürültülü." → "Yiyecek atığı fırının altına yapışmıştır." / "Fırının altına yapışan yiyecek atığını çıkarın."
#   · S2 s.37 (ankastre) "Döner tabla dönerken tıkırdıyor ve gürültü çıkarıyor." → "Fırın için yeterince havalandırma alanı yoktur." / "Ürün kurulum kılavuzunda
#   belirtilen havalandırma boşluğunu koruyun."
# Aksesuar/kurulum: S1 s.8 "01 Döner halka, fırının ortasına yerleştirilecektir." "Döner halka döner tablayı destekler." "02 Döner tabla, ortadan bağlayıcıya oturtulacak
#   şekilde döner halka üzerine yerleştirilecektir." "temizlenmek için kolayca çıkarılabilir." "Döner halka ve döner tabla takılı olmadan mikrodalga fırını ÇALIŞTIRMAYIN."
#   · S1 s.9 "Döner halkayı ve döner tablayı monte edin. Döner tablanın serbestçe dönüp dönemediğini kontrol edin." · S1 s.9 bakım: "döner tabla ve döner halkaya ...
#   da özellikle dikkat edin." "sabunlu suyla yumuşak bir bez", "aşındırıcı veya kimyasal maddeler kullanmayın", "fırının soğumasını bekledikten sonra"
#   · S1 s.28 NOT Samsung Müşteri Hizmetleri.
# Bilerek yazılmayanlar: tabla motoru/kuplör teşhisi (belgede yok) · alt kapağı açma · fiyat.
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Sabunlu su"]
steps:
  - "Fırın soğukken cam tablayı çıkar; döner halkanın fırının ortasında, yerinde olduğunu kontrol et ve takılı değilse tak."
  - "Cam tablayı ortadaki bağlayıcıya oturacak şekilde döner halkanın üzerine yerleştir ve elle serbestçe dönüp dönmediğine bak."
  - "Yiyecek miktarını azalt ve fırının iç duvarlarına değen geniş kapları kullanma."
  - "Fırının tabanına yapışmış yemek artığını sabunlu suyla ıslatılmış yumuşak bir bezle temizle, sonra kurula."
  - "Tablayı ve halkayı yerine takıp fırını yeniden dene; sorun sürerse Samsung Müşteri Hizmetleri'ne başvur."
faq:
  - q: "Samsung mikrodalgamda tabla neden dönmüyor?"
    a: "Samsung'un sorun giderme tablosuna göre döner tabla yerinden çıkıyor ya da dönmeyi durduruyorsa neden döner halkanın olmaması ya da yerine düzgün oturmamasıdır; çözüm döner halkayı takıp yeniden denemek. Tabla sürükleniyorsa halka yerine oturmamış olabilir, çok fazla yiyecek olabilir ya da kap çok büyük olup fırının içine değiyor olabilir."
  - q: "Tabla dönerken tıkırdıyor, ne yapmalıyım?"
    a: "Samsung tablosunda bu satırın nedeni fırının altına yapışmış yiyecek atığı; çözüm o atığı çıkarmak. Ankastre MG22M8074AT kılavuzunda aynı belirti için ikinci bir neden daha var: yetersiz havalandırma alanı; çözüm kurulum kılavuzundaki havalandırma boşluğunu korumak."
  - q: "Tablayı takmadan mikrodalgayı çalıştırabilir miyim?"
    a: "Hayır. Samsung kılavuzu döner halka ve döner tabla takılı olmadan mikrodalga fırının çalıştırılmamasını istiyor. Kurulumda halkanın fırının ortasına, tablanın da ortadaki bağlayıcıya oturacak şekilde halkanın üzerine konması ve tablanın serbestçe dönüp dönmediğinin kontrol edilmesi isteniyor."
images:
  coverAlt: "Mikrodalga fırının tabanında ortadaki bağlayıcının çevresine yerleştirilmiş tekerlekli döner halka ve yanında çıkarılmış cam tabla"
---

Cam tabla yerinde duruyor ama dönmüyor, ya da dönerken sekiyor, tıkırdıyor. Samsung'un MS23K3555ES ve ankastre MG22M8074AT kılavuzlarının sorun giderme tablosunda tablaya ayrılmış bir bölüm var: **"Döner Tabla."** Orada üç ayrı belirti yazıyor: tabla **"yerinden çıkıyor veya dönmeyi durduruyor"**, **"dönerken sürükleniyor"**, **"dönerken tıkırdıyor ve çok gürültülü."** Üçünün de ilk çözümü elle yapılıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tablayı çıkar, döner halkayı ortaya oturt → tablayı bağlayıcıya oturtup elle çevir → yükü ve kabı küçült → tabana yapışan yemeği temizle → yeniden dene. Sürüyorsa Samsung Müşteri Hizmetleri.

## Adım adım: evde denenecekler

**1. Döner halkayı kontrol et.** Tablonun ilk satırında tabla yerinden çıkıyor ya da duruyorsa neden **"Döner halka yoktur veya döner halka yerine düzgün oturmamıştır."** İşlem: **"Döner halkayı takın ve sonra yeniden deneyin."** Kılavuzun aksesuar bölümüne göre döner halka **fırının ortasına** yerleştirilir ve tablayı taşır. Fırın soğukken cam tablayı kaldır, halkanın ortada, düz durduğuna bak.

**2. Tablayı bağlayıcıya oturt.** Samsung'un tarifiyle döner tabla, **ortadan bağlayıcıya oturtulacak şekilde** döner halkanın üzerine konur. Kurulum bölümü sonrasında bir kontrol de istiyor: **döner tablanın serbestçe dönüp dönemediğini** kontrol et. Elle hafifçe çevirdiğinde takılmadan dönmeli.

**3. Yükü ve kabı küçült.** Tabla dönerken sürükleniyorsa Samsung üç neden sayıyor: halka yerine oturmamıştır, **çok fazla yiyecek vardır** ya da **kap çok büyüktür ve mikrodalganın içine değiyordur.** İşlem: **yiyecek miktarını ayarla ve çok geniş kaplar kullanma.** Kap fırının yan duvarına sürtüyorsa tabla döndüremez.

**4. Tabana yapışan yemeği temizle.** Tıkırtı satırının nedeni **"Yiyecek atığı fırının altına yapışmıştır."**, işlemi **yapışan atığı çıkarmak.** Samsung'un bakım bölümü temizlik için **sabunlu suyla yumuşak bir bez** kullanmanı, **aşındırıcı ya da kimyasal madde** kullanmamanı ve işe **fırın soğuduktan sonra** başlamanı istiyor. Kılavuz döner tabla ve halkaya özellikle dikkat edilmesini de yazıyor; tabla temizlik için kolayca çıkarılıyor.

**5. Yeniden dene.** Halkayı ve tablayı yerine takıp fırını çalıştır. Samsung'un kuralı net: **döner halka ve döner tabla takılı olmadan mikrodalga fırını çalıştırma.** Önerilen çözüm sorunu çözmezse **yerel Samsung Müşteri Hizmetleri Merkezi'ne** başvur.

## Ankastre modelde tıkırtı

Ankastre MG22M8074AT kılavuzunda tıkırtı satırına bir neden daha ekleniyor: **"Fırın için yeterince havalandırma alanı yoktur."** Çözüm, **ürün kurulum kılavuzunda belirtilen havalandırma boşluğunu korumak.** Tabla ve taban temizken tıkırtı sürüyorsa bunu servise ilet.

Markadan bağımsız kontrol listesi için [mikrodalgada tabla dönmüyor](/blog/mikrodalga-tabla-donmuyor/) yazısına bakabilirsin. Tabla dönüyor ama yemek ısınmıyorsa: [Samsung mikrodalga ısıtmıyor](/blog/samsung-mikrodalga-isitmiyor/).

## Ne zaman servis

- Halka yerinde, tabla bağlayıcıya oturmuş, taban temiz ve yük hafifken **tabla yine dönmüyorsa.**
- **Döner halka ya da cam tabla eksikse:** Samsung'un kuralına göre ikisi takılı olmadan fırın çalıştırılmaz; parça için Samsung Müşteri Hizmetleri'ne başvur.

⛔ **Kendin-çöz sınırı burada biter.** Tablayı, halkayı çıkarmak ve tabanı silmek kullanıcıya; tablayı döndüren motor ve fırının içindeki parçalar servise aittir. Mikrodalganın kasası ya da alt kapağı açılmaz.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde)? Solo mu, ankastre mi?
2. Tabla hiç mi dönmüyor, yoksa sürükleniyor ya da tıkırdıyor mu?
3. Döner halka yerinde ve sağlam mı?
4. Boş tablayla da aynı mı?

Bu dördüne cevabın varsa servise "tabla dönmüyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
