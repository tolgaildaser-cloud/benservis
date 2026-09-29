---
title: "Samsung çamaşır makinesi çalışmıyor"
description: "Samsung çamaşır makinesi başlamıyor ya da program ortasında duruyorsa Samsung kılavuzunun sırası: fiş, sigorta, kapak, musluk, çocuk kilidi ve servis sınırı."
slug: "samsung-camasir-makinesi-calismiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Samsung çamaşır BELİRTİ). K2 ve K1 bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5 28 Eyl kopyasıyla birebir.
# #88: web araması YALNIZ belgenin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da ABD/İngiltere Samsung sayfasından alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-camasir-sprint/ · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  K2) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae  (sayfa atıfları esas olarak bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a (aynı satırlar s.54 ve s.56)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K3) Kılavuz WW5000T TR, 68 s., md5 402b21c11194758ab81d7af5f78ffd4d (yerel kopya; aynı satırlar s.51 ve s.53)
# Birebir alıntılar (K2):
#   s.54 "Başlamıyor.": "Çamaşır makinesinin prize takılı olduğunu kontrol edin." · "Kapağın düzgün bir şekilde kapalı olduğundan emin olun." · "Su musluklarının açık olduğundan emin olun."
#     · "Çamaşır makinesini başlatmak için Başlat/Duraklat düğmesine bastığınızdan veya dokunduğunuzdan emin olun." · "Çocuk Kilidi öğesinin etkin olmadığından emin olun."
#     · "Çamaşır makineniz dolmaya başlamadan önce, kapağın kilitli olduğunu kontrol etmek ve hızlı bir boşaltma işlemi gerçekleştirmek için bir dizi tık sesi çıkarır." · "Sigortayı kontrol edin veya devre kesiciyi sıfırlayın."
#   s.56 "Duruyor.": "Güç kablosunu elektrik olan bir prize takın." · "Programda duraklatma ya da suda bekletme olabilir. Kısa bir süre bekleyin, çamaşır makinesi başlar."
#     · "Su musluklarındaki su kaynağı hortumunun tel filtresinin tıkanmamış olduğundan emin olun." · "Çamaşır makinesine yeterince güç sağlanmazsa, çamaşır makinesi geçici olarak boşaltmaz veya sıkmaz. ..."
#   s.44 Çocuk Kilidi: "Çocuk Kilidi Güç hariç tüm düğmeleri kilitler." · Sıcaklık ve Sıkma 3 saniye (K3'te Sıcaklık ve Durulama) · "Makineyi yeniden başlattıktan sonra bile ayarınız korunacaktır."
#   s.38 "Gecikmeli Bitir geçerli programın bitiş zamanını ayarlamanızı sağlar. Ayarlarınıza göre, programın başlangıç zamanı makinenin dahili mantığıyla belirlenecektir."
#   s.58 dC: "Kapağın düzgün bir şekilde kapalı olduğundan emin olun." · "Kapağa çamaşır sıkışmadığından emin olun."
#   s.57 "Sorun devam bir servis merkezine danışın. Servis merkezi numarası ürüne takılı etiket üzerindedir."
# BİLEREK YAZILMAYANLAR: kart/kapak kilidi/motor teşhisi (belgede yok) · sigorta tekrar atarsa ne yapılacağı (Samsung metni yok, uydurulmadı) ·
#   çocuk kilidi tuşları yalnız K2/K1 ve K3 için verildi, diğer modeller için "kendi kılavuzundaki iki tuş" dendi · reset/fişi çekip bekleme yordamı (belgede bu belirti için yok).
# Alıntı denetim tablosu: samsung-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makinenin fişinin elektrik olan bir prize takılı olduğunu kontrol et."
  - "Evdeki sigortayı kontrol et; atmışsa devre kesiciyi yeniden kaldır."
  - "Kapağı, kapakla conta arasında çamaşır kalmayacak şekilde düzgünce kapat."
  - "Su musluklarını tamamen aç."
  - "Programı seçtikten sonra Başlat/Duraklat düğmesine bas ya da dokun."
  - "Ekranda çocuk kilidi göstergesi varsa kılavuzundaki iki düğmeyi aynı anda 3 saniye basılı tutarak kilidi kaldır."
  - "Program başlayıp durduysa kısa bir süre bekle; programda duraklatma ya da suda bekletme adımı olabilir."
  - "Sorun sürerse ya da ekranda bilgi kodu varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet."
faq:
  - q: "Samsung çamaşır makinesi hiç başlamıyor, ilk neye bakmalıyım?"
    a: "Samsung'un Türkçe kullanım kılavuzundaki sorun giderme tablosu 'Başlamıyor' başlığında şu kontrolleri sayıyor: makinenin prize takılı olması, kapağın düzgün kapalı olması, su musluklarının açık olması, Başlat/Duraklat düğmesine basılmış olması, Çocuk Kilidi'nin etkin olmaması ve sigortanın ya da devre kesicinin kontrolü."
  - q: "Başlat'a basınca makineden tık tık sesler geliyor, arıza mı?"
    a: "Hayır. Samsung kılavuzuna göre çamaşır makinesi dolmaya başlamadan önce kapağın kilitli olduğunu kontrol etmek ve hızlı bir boşaltma yapmak için bir dizi tık sesi çıkarır."
  - q: "Makineyi kapatıp açtım, çocuk kilidi hâlâ duruyor. Normal mi?"
    a: "Evet. Samsung kılavuzuna göre Çocuk Kilidi, Güç hariç tüm düğmeleri kilitler ve ayar makine yeniden başlatıldıktan sonra da korunur. Kaldırmak için kılavuzundaki iki düğmeyi aynı anda 3 saniye basılı tut; WW4000T ve WW5000C kılavuzlarında bu düğmeler Sıcaklık ve Sıkma, WW5000T kılavuzunda Sıcaklık ve Durulama."
  - q: "Program yarıda durdu, bir süre hiçbir şey olmuyor. Bozuldu mu?"
    a: "Samsung'un 'Duruyor' satırına göre programda bir duraklatma ya da suda bekletme adımı olabilir; kısa bir süre bekleyince makine devam eder. Aynı satır su hortumunun tel filtresinin tıkalı olmamasını ve makineye yeterli güç gelmesini de kontrol listesine koyuyor: güç yetersizse makine geçici olarak boşaltma ya da sıkma yapmaz, yeterli güç gelince normal çalışır."
  - q: "Programı başlattım ama makine hemen çalışmadı. Neden?"
    a: "Gecikmeli Bitir seçili olabilir. Samsung kılavuzuna göre bu seçenek programın bitiş zamanını ayarlar ve programın başlangıç zamanı ayarına göre makinenin kendisi tarafından belirlenir. Paneldeki Gecikmeli Bitir göstergesini kontrol et."
images:
  coverAlt: "Banyoda önden yüklemeli beyaz Samsung çamaşır makinesi; kapağı kapalı, kontrol panelinin ekranı sönük"
---

Çamaşırı koydun, programı seçtin ve makine başlamadı; ya da başladı ama bir yerde durdu. Samsung'un Türkçe kullanım kılavuzundaki sorun giderme tablosunda bu iki durumun ayrı satırları var: **"Başlamıyor."** ve **"Duruyor."** Altında sayılanların çoğu makinenin dışından ya da ön panelden kontrol edilebilecek şeyler: **fiş, sigorta, kapak, su muslukları, Başlat/Duraklat düğmesi ve çocuk kilidi.** Bu yazıda Samsung'un sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş prizde mi, sigorta atmış mı? Kapak düzgün kapalı mı, musluklar açık mı? Başlat/Duraklat'a basıldı mı, çocuk kilidi açık mı? Program başlayıp durduysa kısa bir süre bekle; duraklatma ya da suda bekletme olabilir. Hâlâ çalışmıyorsa ya da ekranda bir kod varsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

Kılavuzun iki satırında sayılanlar:

| Belirti | Samsung'un kontrol listesi | Evde bakılır mı? |
|---|---|---|
| Başlamıyor | Prize takılı mı, sigorta ya da devre kesici | Evet |
| Başlamıyor | Kapak düzgün kapalı mı | Evet |
| Başlamıyor | Su muslukları açık mı | Evet |
| Başlamıyor | Başlat/Duraklat'a basıldı mı, Çocuk Kilidi etkin mi | Evet, panelden |
| Duruyor | Programda duraklatma ya da suda bekletme | Evet, beklemek yeterli |
| Duruyor | Su hortumunun tel filtresi tıkalı mı | Tel filtre temizliği için [4C hatası](/blog/samsung-camasir-makinesi-4c-hatasi/) yazısına bak |
| Duruyor | Makineye yeterli güç geliyor mu | Güç yetersizse makine geçici olarak boşaltma ya da sıkma yapmaz |

Bir not: Başlat'a bastıktan sonra gelen **tık sesleri normaldir.** Samsung'a göre makine dolmaya başlamadan önce kapağın kilitli olduğunu kontrol eder ve hızlı bir boşaltma yapar.

## Adım adım: evde denenecekler

**1. Fiş.** Makinenin fişinin elektrik olan bir prize takılı olduğunu kontrol et. Samsung'un "Duruyor" satırı da ilk olarak güç kablosunun elektrik olan bir prize takılmasını istiyor.

**2. Sigorta.** Evdeki sigortayı kontrol et; atmışsa devre kesiciyi yeniden kaldır. Kılavuz bunu "Sigortayı kontrol edin veya devre kesiciyi sıfırlayın" diye yazıyor.

**3. Kapak.** Kapağı, kapakla conta arasında çamaşır kalmayacak şekilde düzgünce kapat. Kapak açık algılanıyorsa ekranda dC kodu görünebilir; ayrıntısı [Samsung çamaşır makinesi dC hatası](/blog/samsung-camasir-makinesi-dc-hatasi/) yazısında.

**4. Musluklar.** Su musluklarını tamamen aç. Samsung'un bilgi kodu tablosunda "Su sağlanmıyor." durumunun kodu 4C'dir.

**5. Başlat.** Programı seçtikten sonra Başlat/Duraklat düğmesine bas ya da dokun. Kılavuz makineyi başlatmak için bu düğmeye basılmasını ya da dokunulmasını istiyor.

**6. Çocuk kilidi.** Ekranda çocuk kilidi göstergesi varsa kılavuzundaki iki düğmeyi aynı anda 3 saniye basılı tutarak kilidi kaldır. Samsung'a göre Çocuk Kilidi, Güç hariç tüm düğmeleri kilitler ve makine kapatılıp açılsa da ayar korunur. WW4000T ve WW5000C kılavuzlarında bu iki düğme Sıcaklık ve Sıkma, WW5000T kılavuzunda Sıcaklık ve Durulama; kendi modelinde hangi iki düğme olduğunu kılavuzundan kontrol et.

**7. Bekle.** Program başlayıp durduysa kısa bir süre bekle. Samsung'a göre programda bir duraklatma ya da suda bekletme adımı olabilir ve makine kendiliğinden devam eder.

**8. Sürerse servis.** Sorun sürerse ya da ekranda bilgi kodu varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet. Samsung kılavuzuna göre servis merkezi numarası ürüne takılı etiketin üzerinde.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, sigorta, kapak, musluk, Başlat düğmesi, çocuk kilidi | Senin, bu rehberdeki adımlar |
| Ekranda bir bilgi kodu (4C, 5C, dC, UE…) | Önce o kodun yazısındaki adımlar, kod kalırsa servis |
| Bütün kontrollere rağmen makine başlamıyor ya da duruyor | Samsung yetkili servisi |

⛔ Makinenin arka panelini ya da üst kapağını açma, elektrik bağlantılarına müdahale etme. Samsung kılavuzu, bakım ve onarımların ürünün kullanım ömrü boyunca yetkili servisler tarafından yapıldığını belirtiyor.

Ekranda bir kod görüyorsan Samsung Türkiye tablosu [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısında. Kapak kilitli kaldıysa [Samsung çamaşır makinesi kapağı açılmıyor](/blog/samsung-camasir-makinesi-kapagi-acilmiyor/) yazısına bak. Markadan bağımsız diğer sebepler için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısı var.

---

**Kaynak künyesi.** Kontrol listesi, çocuk kilidi ve Gecikmeli Bitir bilgileri Samsung'un Türkçe kullanım kılavuzlarından (WW4000T, WW5000C ve WW5000T serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
