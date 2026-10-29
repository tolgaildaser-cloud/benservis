---
title: "BenQ monitör açılmıyor: güç ışığına göre ne yapmalı?"
description: "BenQ monitör açılmıyorsa güç ışığına bak: sönükse priz ve adaptör, turuncuysa uyku modu ve kablo, beyazsa çözünürlük. Kılavuza göre adım adım eleme."
slug: "benq-monitor-acilmiyor"
date: "2026-10-29"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-29 PAZ alt ajanı (Apple+BenQ dalgası, grup D). origin/main'de "benq" geçen slug yok. Genel monitor-sinyal-yok (açılan bilgisayar, görüntü yok) var; bu yazı monitörün kendi güç ışığı tablosunu anlatıyor ve oraya bağlantı veriyor.
# Arama kanıtı (#164, 29 Eki 10:43, hl=tr gl=tr): "benq monitör açılmıyor" → 1. "benq monitör açılmıyor"; "benq monitör s" → 2. "benq monitor signal not detected".
# Belge (#88): (G) BenQ GW2490 User Manual (İngilizce), esupportdownload.benq.com …/GW2490/UM_EN_260819133840.pdf (200) md5 40e775405dca25f4f5cb226eca6dbcc9
#  (Q) BenQ Türkiye PV3200PT Soru-Cevap (Türkçe), benq.com/tr-tr/business/support/products/monitor/pv3200pt/qa.html (200) md5 e95d766631b2b29e88e2903872a14a01
# BİLEREK YAZILMAYANLAR: adaptör/kart onarımı · ekran kartı sürücüsü · fiyat (#46).
# Alıntı denetimi: benq-monitor-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yedek görüntü kablosu (varsa)"]
steps:
  - "Monitörün güç ışığına bak: sönük mü, turuncu mu, beyaz mı."
  - "Işık sönükse prizi, varsa harici güç adaptörünü ve şebeke anahtarını kontrol et."
  - "Güç kablosunun monitöre ve topraklı bir prize tam takılı olduğundan emin ol, sonra güç tuşuna bas."
  - "Işık turuncuysa klavyede bir tuşa bas ya da fareyi oynat."
  - "Turuncu sürüyorsa görüntü kablosunun uçlarını kontrol et; eğik ya da kırık pin varsa satıcıya başvur."
  - "Monitörün menüsünden doğru giriş kaynağını elle seç, olmazsa başka bir kabloyla dene."
  - "Işık beyaz ve ekranda Out of Range yazıyorsa bilgisayarın çözünürlüğünü ve yenileme hızını düşür."
  - "Kötü koku, anormal ses ya da hasarlı adaptör varsa kullanmayı bırak ve BenQ servisine başvur."
faq:
  - q: "BenQ monitörde turuncu ışık ne demek?"
    a: "GW2490 kılavuzuna göre turuncu ışık monitörün güç yönetimi moduna geçtiğini gösteriyor; monitör çalışıyor ama bilgisayardan görüntü gelmediği için uyuyor. Klavyede bir tuşa basmak ya da fareyi oynatmak genelde yeterli. Olmazsa görüntü kablosunun uçlarını kontrol et."
  - q: "Işık beyaz yanıyor ama ekran siyah. Monitör bozuk mu?"
    a: "Beyaz ışık monitörün açık olduğunu gösteriyor. Ekranda Out of Range yazısı varsa bilgisayar monitörün desteklemediği bir görüntü modu gönderiyor demektir. Kılavuz, desteklenen çözünürlük ve yenileme hızını seçmeni söylüyor. Yazı açılış sırasında çıkıyorsa işletim sistemi yüklenene kadar beklemek yeterli olabilir."
  - q: "Hiç ışık yok, monitör tamamen ölü görünüyor."
    a: "Kılavuz bu durumda prizi, harici güç kaynağını ve şebeke anahtarını kontrol etmeni istiyor. Adaptör kullanan modellerde yalnız monitörle gelen adaptör kullanılmalı. Adaptör hasar görmüşse ya da ıslanmışsa kılavuza göre onarılmaz, değiştirilir; bunun için BenQ müşteri hizmetlerine başvur."
images:
  coverAlt: "Masa üstünde kapalı duran bir monitör ve alt kenarında küçük bir güç ışığı"
  steps:
    - "Çizim: solda monitörün alt kenarındaki güç ışığı, sağda sönük, turuncu ve beyaz üç nokta"
    - "Çizim: solda duvar prizi ve anahtarı, sağda güç adaptörü"
    - "Çizim: solda monitörün arkasındaki güç girişi, sağda topraklı priz"
    - "Çizim: solda monitör, sağda klavye ve fare"
    - "Çizim: solda görüntü kablosunun ucu, sağda büyüteç altında pinler"
    - "Çizim: solda monitör, sağda ekrandaki menüde giriş kaynağı listesi"
    - "Çizim: solda bilgisayar ekranı, sağda çözünürlük ayarı ve aşağı ok"
    - "Çizim: solda monitör, sağda uyarı işareti ve servis simgesi"
---

Bilgisayar açık, masada her şey yerinde, ama BenQ monitör kapkara. Ya hiç ışık yok ya da alt kenarda küçük turuncu bir ışık yanıp duruyor. "Monitör açılmıyor" dediğimiz durum aslında üç farklı tablodan biridir ve hangisi olduğunu monitörün **güç ışığı** söyler. Işık sönükse sorun elektrik tarafındadır, turuncuysa monitör uyuyordur, beyazsa monitör açıktır ama görüntüyle ilgili bir sorun vardır.

Bu yazı BenQ'nun **GW2490** kullanım kılavuzundaki güç ışığı ve sorun giderme bölümlerine ve BenQ Türkiye'nin monitör destek sayfasına dayanıyor. Kılavuz İngilizce; BenQ Türkiye'nin monitör sayfalarında Türkçe kılavuz bulamadık.

## Güç ışığı ne söylüyor?

| Işık | GW2490 kılavuzuna göre anlamı |
|---|---|
| Sönük | Elektrik gelmiyor: priz, harici güç kaynağı ya da şebeke anahtarı |
| Turuncu | Güç yönetimi modu etkin; monitör görüntü beklerken uyuyor |
| Beyaz | Monitör açık |
| Beyaz ve ekranda Out of Range | Bilgisayar desteklenmeyen bir görüntü modu gönderiyor |

## Adım adım: BenQ monitör açılmıyor elemesi

**1. Işığa bak.** Monitörün güç ışığı sönük mü, turuncu mu, beyaz mı? Bu tek gözlem sonraki adımların hangisinin sana ait olduğunu belirler.

**2. Işık sönükse elektriği kontrol et.** Kılavuz ışık yanmıyorsa prizi, harici güç kaynağını ve şebeke anahtarını kontrol etmeni istiyor. Uzatma kablosu ya da çoklu priz kullanıyorsan kılavuz toplam elektrik yüküne dikkat etmeni de hatırlatıyor.

**3. Kabloyu oturt, güç tuşuna bas.** Güç kablosunun monitörün arkasındaki güç girişine ve topraklı bir prize tam takılı olduğunu kontrol et. Kılavuz yalnız BenQ'nun verdiği güç kablosunun kullanılmasını, hasarlı ya da yıpranmış kablonun hiç kullanılmamasını istiyor. Adaptörlü modellerde yalnız monitörle gelen adaptör kullanılmalı. Ardından monitörün **güç tuşuna** basarak aç ve bilgisayarı da aç.

**4. Işık turuncuysa uyandır.** Turuncu ışık, kılavuza göre güç yönetimi modunun etkin olduğunu gösterir. Klavyede herhangi bir tuşa bas ya da fareyi oynat.

**5. Kablonun uçlarına bak.** Turuncu ışık sürüyorsa kılavuz görüntü kablosunun konnektörlerini kontrol etmeni istiyor. Uçlardaki pinlerden biri eğilmiş ya da kırılmışsa kabloyu zorlama; kılavuza göre satıcına başvurman gerekiyor.

**6. Girişi elle seç.** BenQ Türkiye'nin destek sayfası, kabloyu bağladığın hâlde görüntü gelmiyorsa ilk olarak monitörün ekran menüsünden doğru **giriş kaynağını** elle seçmeni öneriyor. İşe yaramazsa başka bir kabloyla dene ve giriş kaynağını yeniden seç. Monitör başka bir bilgisayarla çalışıyorsa BenQ'ya göre sorun büyük ihtimalle bilgisayarın grafik kartındadır.

**7. Beyaz ışık ve Out of Range.** Işık beyaz ve ekranda **Out of Range** yazıyorsa bilgisayar monitörün desteklemediği bir görüntü modu kullanıyor. Kılavuz desteklenen çözünürlük ve yenileme hızını seçmeni istiyor; bunun için BenQ'nun sitesinden çözünürlük dosyasını indirmeni öneriyor. Mesaj bilgisayar açılırken çıkıyorsa kılavuza göre sistem yenileme hızını kendisi ayarlar; işletim sistemi yüklenene kadar bekle.

**8. Güvenlik işaretinde dur.** Monitörden kötü bir koku ya da anormal bir ses geliyorsa kılavuz hemen en yakın BenQ servis merkezine başvurmanı istiyor. Güç adaptörü hasar görmüş ya da ıslanmışsa onu açmaya çalışma; kılavuza göre içinde onarılacak parça yok, adaptör değiştirilir.

## Menü tuşları çalışmıyorsa

Monitör açık ama menü tuşlarına basınca hiçbir şey olmuyorsa ekran menüsü kilitlenmiş olabilir. GW2490 kılavuzuna göre kilitli menüyü açmak için herhangi bir tuşu **5 saniye** basılı tutman yeterli. Giriş kaynağını elle seçmek için önce bu kilidi açman gerekebilir.

## Turuncu ışık neden iyi bir işaret?

Turuncu ışığı görünce endişelenme. Bu, monitörün elektrik aldığını ve kendi güç yönetimiyle beklemeye geçtiğini gösterir. GW2490 kılavuzu bu özelliği kapatmanı değil, kullanmanı öneriyor: ürünün ömrünü uzatmak için bilgisayarın güç yönetimi işlevinin kullanılmasını tavsiye ediyor. Aynı kılavuz, ekranda sabit görüntüden kalan soluk gölgelere karşı da güç yönetimini ve ekran koruyucuyu öneriyor.

Fişi çekmeden önce de bir kurala dikkat et. Kılavuz güç kablosunu prizden çıkarmadan önce monitörü her zaman kapatmanı istiyor. Elektriğin sık gidip geldiği yerlerde ise monitörün zarar görebileceğini, bu tür yerlerde kullanılmamasını yazıyor. Sık kesinti yaşanan bir evde monitör aniden açılmamaya başladıysa bunu servise mutlaka söyle.

## Görüntü geliyor ama sorun bilgisayardaysa

Monitör başka bir cihazda sorunsuz çalışıyorsa monitör sağlamdır; şüphe bilgisayara döner. Kasanın ışıkları yanıyor ama ekrana görüntü gitmiyorsa kablonun doğru çıkışa takılı olup olmadığını ve diğer olasılıkları [monitörde sinyal yok rehberimizde](/blog/monitor-sinyal-yok/) sırayla anlattık.

## Buradan sonrası servis işi

Elektrik geliyor, kablo sağlam, giriş doğru seçili ve monitör hâlâ açılmıyorsa sorun monitörün içindedir. Kılavuz elektrik çarpması riskine karşı monitörün sökülmemesini ve onarılmaya çalışılmamasını açıkça istiyor. Garanti süresi içindeysen yerel BenQ müşteri hizmetlerine başvur.

Servise giderken güç ışığının rengini ve denediğin adımları not et; teşhisi hızlandırır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin. Bil, gör, çağır.
