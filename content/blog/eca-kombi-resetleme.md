---
title: "ECA kombi resetleme: reset düğmesi ve E/F kodları"
description: "ECA kombi resetleme: Proteus, Confeo ve Citius Premix'te reset düğmesi hangisi, hangi kodu siler, AP modunda neden basılmaz ve eco moduna geçirmesi."
slug: "eca-kombi-resetleme"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan B). origin/main'de eca-kombi-reset* yok; başlık grep'i boş.
#   Yakın sayfa: eca-kombi-ariza-kodlari (kod tabloları + E/F ayrımı + "Reset tuşuna kaç kez basabilirim?" SSS + AP). Bu yazı kod tablosunu
#   KOPYALAMAZ; marka düzeyindeki "resetleme / reset düğmesi" sorgusunu karşılar: düğmenin yeri ve numarası, kodsuz basışta Eco/Comfort geçişi
#   (hub'da yok), E03 resetinden sonra AP, "resetleme yapmıyor" durumu. Kod ayrıntısı için hub'a ve E01/E03/F37/F40 sayfalarına bağlanıldı.
# Arama kanıtı (25 Eki 08:47/08:49 +03, suggestqueries hl=tr gl=tr): "eca kombi" → 3. "eca kombi resetleme"; "eca kombi r" → 1. "…resetleme",
#   2. "…reset düğmesi", 3. "…resetleme yapmıyor"; "eca kombi reset" → 1. "…resetleme", 2. "…reset düğmesi", 3. "…resetleme nasıl yapılır".
#   GSC (www-5 3 ay / www-6 7 gün): ECA reset satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200 application/pdf); zincir eca.com.tr/urun/<aile> (200) → DÖKÜMANLAR PDF.
#  (P) Proteus Premix kullanma ve montaj kılavuzu  eca.com.tr/uploads/documents//aff/a1a45d25-….pdf  md5 28a5d7565ffbc9c1faaf1e97e45553d9
#  (C) Confeo Premix 7006991302-5.0  eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-….pdf  md5 4ef56163ac14c46f9cb1dcb9ea189681
#  (T) Citius Premix  eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-….pdf  md5 023164f7b7cebedc931411900edd72b0
# Gaz kokusu P s.5, T s.4 · reset düğmesi, E/F, Eco/Comfort P s.26, C s.23, T s.22 · AP ve E03 P s.28, C s.26, T s.24 · F13 P s.30, C s.28, T s.25
#   · ilk doldurma, AP'de reset'e basma P s.25 · garanti: reset kullanıcı seviyesi işlemi P s.46.
# BİLEREK YAZILMAYANLAR: reset tuşuna kaç saniye basılacağı (kılavuzlar "1 kez" diyor) · kod tablosu (hub'da) · kart/fan/sensör teşhisi
#   · F13'ün nasıl silindiği (kılavuz yalnız "yetkili servise haber veriniz") · fiyat (#46).
# Alıntı denetim tablosu: eca-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetlemeyi bırak; gaz vanalarını kapat, kapı ve pencereleri aç, elektrik düğmelerine dokunma ve gaz şirketine haber ver."
  - "Kılavuzun kapağından modelini öğren ve kumanda panelinde reset düğmesini bul."
  - "Ekrandaki kodun E ile mi F ile mi başladığına bak; F kodu reset ile silinmez."
  - "E kodunda önce kılavuzun o kod için verdiği kontrolü yap."
  - "Reset düğmesine bir kez bas ve kombinin normal çalışmaya dönmesini izle."
  - "Ekranda AP yazıyorsa düğmeye dokunma ve modun bitmesini bekle."
  - "Kod geri geliyorsa art arda basma; kodu ve modeli not edip yetkili servise bildir."
faq:
  - q: "ECA kombide reset düğmesi hangisi?"
    a: "Proteus Premix ve Citius Premix kılavuzlarının kumanda paneli şeklinde 2 numaralı düğme reset düğmesi; 1 numara konum seçme düğmesi. Confeo Premix'te reset, kumanda panelindeki 1 numaralı buton. Kendi kombinin kılavuzundaki şekille karşılaştır."
  - q: "ECA kombi resetleme yapmıyor, neden?"
    a: "Ekrandaki kod F ile başlıyorsa reset onu silmez. ECA kılavuzlarına göre F kodları geçici arızadır; hata durumu düzeldiğinde kod ekrandan kendiliğinden kaybolur. E kodlarında ise önce hatanın düzelmesi gerekir, sonra Reset'e bir kez basılır. 1 saat içinde 5'ten fazla basıldıysa ekranda F13 çıkar ve kılavuz yetkili servise haber verilmesini istiyor."
  - q: "Kod yokken reset düğmesine bastım, ekranda Eco yazıyor. Bozdum mu?"
    a: "Hayır. Üç kılavuza göre reset düğmesinin bir işi de Eco ve Comfort modları arasında geçiştir. Comfort modunda çalışırken bir kez basınca Eco'ya, tekrar basınca Comfort'a dönülür. Bu modlar yalnız kalorifer devresi için; kullanım suyuna etkisi yok."
  - q: "Ekranda AP yazarken reset'e basabilir miyim?"
    a: "Basmamalısın. AP, kombinin 160 saniye boyunca tesisattaki havayı boşalttığı moddur ve kılavuzlar bu sırada kesinlikle RESET'e basılmamasını istiyor. AP; cihaza elektrik verildiğinde, E03 sonrasındaki resetten sonra ve F37 ya da F40 geçtikten sonra devreye girer."
  - q: "Reset için servis çağırmam gerekir mi?"
    a: "Kural olarak hayır. Proteus Premix kılavuzunun garanti bölümü reset işlemini kullanıcı seviyesinde yapılması gereken işlemler arasında sayıyor. Kod resetten sonra sürüyor ya da tekrarlıyorsa ise kılavuz E.C.A. yetkili servisine haber verilmesini istiyor."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin kumanda panelinde yan yana dizili küçük düğmeler ve bir ekran"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombinin ekranında bir kod yanıp sönüyor ve reset düğmesini arıyorsun. ECA'nın yoğuşmalı kombilerinde reset düğmesi tek bir iş yapmıyor: arızadan çıkarıyor, ama kod yokken basarsan kombiyi Eco moduna da geçiriyor. Bir de hangi kodu silip hangisini silmediği önemli. Bu yazıda ECA'nın **Proteus Premix**, **Confeo Premix** ve **Citius Premix** kullanma kılavuzlarından resetlemeyi topladık. Kodların tek tek anlamı [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) sayfasında.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Reset düğmesi Proteus ve Citius'ta panelde 2 numara, Confeo'da 1 numara. E ile başlayan kod: önce sorunu gider, sonra bir kez bas. F ile başlayan kod: reset silmez, sorun düzelince kendiliğinden gider. Ekranda AP varken basma. 1 saatte 5'ten fazla basarsan F13 çıkar, servis.

## Reset düğmesi ne yapar

| Durum | Reset'e bir kez basınca | Kılavuzun notu |
|---|---|---|
| **E ile başlayan kod** | Hata düzeldiyse kombi normal çalışmaya döner | Kalıcı arıza |
| **F ile başlayan kod** | Kod silinmez | Geçici arıza; düzelince kendiliğinden kaybolur |
| **Kod yok, Comfort modu** | Eco moduna geçer; tekrar basınca Comfort | Yalnız kalorifer devresi |
| **Ekranda AP** | Basılmaz | 160 saniyelik hava boşaltma |

## Adım adım: evde denenecekler

**1. Gaz kokusu var mı?** Üç kılavuzun emniyet bölümü aynı: cihazın ve gazla çalışan diğer cihazların gaz vanalarını kapat, ocak ve fırın gibi cihazların alevini söndür, kibrit ve çakmak yakma. Kapı ve pencereleri açıp havalandır, elektrikli cihazların düğmelerine ve fişlerine dokunma, gaz kokusu olan ortamda telefon kullanma. Daire ve bina girişindeki gaz vanalarını kapat, **187**'yi arayıp gaz şirketine haber ver. Bu durumda reset yapılmaz.

**2. Düğmeyi bul.** Model adı kılavuzun kapağında yazıyor. Proteus Premix ve Citius Premix'te kumanda paneli şeklinde **1 numara konum seçme düğmesi, 2 numara reset düğmesi**. Confeo Premix'te reset, panelin **1 numaralı butonu**. Konum seçme düğmesini karıştırma: Proteus ve Citius'ta ona 3 saniye basılı tutunca kombi bekleme konumuna geçer, yani bu bir reset değil.

**3. Kod E mi, F mi?** Kılavuzlar iki tip arıza tanımlıyor. **E ile başlayan kodlar kalıcı arızadır:** kodun ekrandan gitmesi için önce hatanın düzelmesi gerekir, sonra Reset'e **1 kez** basılır. **F ile başlayan kodlar geçici arızadır:** Reset tuşu bunları ekrandan silmez, hata durumu düzeldiğinde kod kendiliğinden kaybolur. "Resetleme yapmıyor" diye düşündüğün durumların bir kısmı budur (çıkarım). Proteus ve Citius'ta kod ekranda yanıp söner; Confeo'da kodla birlikte tanımı görünür ve cihaz periyodik olarak sesli uyarı verir.

**4. Önce kodun kontrolünü yap.** Kılavuzun tablosu çoğu E kodunda reset'ten önce bir kontrol veriyor. Ateşleme hatası E01'de önce gaz vanasının açık olduğuna ve hatta gaz olup olmadığına bakılır; ayrıntı [ECA kombi E01 hatası](/blog/eca-kombi-e01-hatasi/) yazısında. Aşırı ısınma E03 için [ECA kombi E03 hatası](/blog/eca-kombi-e03-hatasi/) sayfasına bak.

**5. Bir kez bas.** Kontrolü yaptıktan sonra Reset düğmesine **bir kez** bas. Kılavuzlar basma süresi vermiyor; yalnız "1 kez" diyor. Kombi normal çalışmaya dönerse iş bitmiştir.

**6. AP görürsen bekle.** Reset'ten sonra ekranda **AP** belirebilir. Kılavuzlara göre AP, kombinin 160 saniye boyunca tesisattaki havayı otomatik boşalttığı mod; cihaza elektrik verildiğinde, **E03 sonrasındaki reset işleminin ardından** ve F37 ya da F40 hatası geçtikten sonra devreye girer. Kılavuzun uyarısı büyük harfle: AP modu çalışırken kesinlikle RESET'e basma.

**7. Geri geliyorsa servis.** Kılavuzun cümlesi her E satırında aynı: reset sonrası hata devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber ver. Art arda basmanın da sınırı var: **1 saat içinde 5'ten fazla** Reset'e basılırsa kombi **F13 fazla resetleme hatası** verir. Bu kodun tek tedbiri yetkili servise haber vermek.

## Kod yokken reset: Eco ve Comfort

Üç kılavuzda da reset düğmesinin ikinci işi mod geçişi. Kombi ilk çalıştığında **Comfort** modunda başlıyor. Comfort'tayken Reset'e bir kez basınca **Eco** moduna, tekrar basınca Comfort'a dönülüyor; ekranda ilgili simge görünüyor. Kılavuza göre iki mod da **yalnız kalorifer devresi** için, kullanım suyuna etkisi yok. Comfort'ta cihaz modülasyonlu çalışarak hızlı ısıtma taleplerine cevap veriyor, Eco'da ise on-off çalışarak yakıt tasarrufu sağlıyor. Kod yokken düğmeye bastıysan ve petekler farklı ısınıyor gibi geliyorsa ekrandaki simgeye bak.

Ekranda **ASE** yazıyorsa bu da arıza değil: yıllık bakım hatırlatıcısı. Cihaz ısıtmayı aksatmadan çalışır; kılavuz bakım için yetkili servisle iletişime geçilmesini istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Reset düğmesi, ekran ve gaz vanasının konumu sende; kombinin kapağının içi, kart, fan, gaz valfi, baca ve yanma bölümü yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Proteus, Confeo, Citius)?
2. Ekranda hangi kod var, E mi F mi?
3. Kaç kez Reset'e bastın, ekranda F13 var mı?
4. Gaz vanası açık mı?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Basınç kodları için [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/) ve [F40 hatası](/blog/eca-kombi-f40-hatasi/), sıcak su sorunu için [ECA kombi sıcak su vermiyor](/blog/eca-kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
