---
title: "Siemens çamaşır makinesi E18 hatası: ne yapmalı?"
description: "Siemens çamaşır makinesinde E:18, deterjanlı suyun boşaltılamadığını gösterir. Kılavuzdaki sırayla hortum, gider, pompa temizliği ve servis sınırı."
slug: "siemens-camasir-makinesi-e18-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork A). Konu seçimi: origin/main'de siemens-camasir-makinesi-e18-hatasi yok.
#   Yakın slug'lar: siemens-camasir-makinesi-hata-kodlari (hub, E18 SSS satırı), siemens-camasir-makinesi-su-bosaltmiyor (belirti sayfası, kod sorgusunu hedeflemiyor),
#   siemens-camasir-makinesi-e36-25-hatasi (pompa tıkalı), siemens-camasir-makinesi-e30-20-hatasi, siemens-camasir-makinesi-hata-kodu-sifirlama. E18 tekil sayfası yok.
# GSC kanıtı (https___www-5, Sorgular, son 3 ay, 19 Eki dışa aktarımı): "siemens çamaşır makinesi f18 hatası" 32 gösterim poz 8,47 · "siemens e18 hata kodu" 32 poz 9,09 ·
#   "siemens çamaşır makinesi hata kodları e18" 30 · "siemens çamaşır makinesi e18 hata kodu" 30 · "siemens çamaşır makinesi e18" 26 · "siemens e 18 hata" 16 (toplam 166).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "siemens çamaşır makinesi e18" → 1. "siemens çamaşır makinesi e18 hatası",
#   2. "… e18 hatası çözümü", 3. "… e18 arızası nedir"; tohum "siemens çamaşır makinesi e" → 1. "siemens çamaşır makinesi e18 hatası", 5. "… e18 hatası çözümü".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, ikisi de HTTP 200; md5 yerel kopyalarla
#   (blog-taslaklar/kaynak-siemens-camasir-sprint/) birebir aynı. #88: forum/servis sitesi kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (A) Siemens WG52A203TR kullanım kılavuzu ve kurulum talimatları  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  (K) Siemens WG54K2Y0TR kullanım kılavuzu ve kurulum talimatları  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5
# E:18 satırı A s.34 (K s.39-40'ta aynı arıza E:36 -10 / E:30 -80 başlığıyla, E:18 yazmadan; akıllı dozajlama notu yalnız K s.40) · E:36 -25 -26 A s.34
#   · tahliye bağlantısı, 100 cm, kelepçe 24-40 mm, geri akma uyarısı A s.14 · pis su pompası boşaltma ve temizleme A s.31-33, renk ve kir tutucu kağıt uyarısı A s.32
#   · sonraki yıkamadan önce tahliye programı A s.33 · arıza giderme girişi ve uyarı A s.34 · acil kilit açma, "camdan su görünüyorsa" A s.39.
# BİLEREK YAZILMAYANLAR: pompa, motor, kart, seviye sensörü teşhisi ya da değişimi (kılavuz onarımı uzman personele bırakıyor) · makineyi yatırma, hortuma üfleme gibi
#   "hileler" · E18 ile F18'in aynı olduğu iddiası (bu yazının belgelerinde F18 geçmiyor; GSC'de aranıyor ama kaynaksız yazılmadı) · E18 için reset kombinasyonu
#   · süre/fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: siemens-camasir-makinesi-e18-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Sığ bir kap", "Havlu", "Makinenin kullanım kılavuzu"]
steps:
  - "Camdan su görünüyorsa kapağı açmaya çalışma; Siemens'e göre kapak ancak pis su pompası boşaldıktan sonra açılmalı."
  - "Tahliye hortumunun bükülmediğini, sıkışmadığını, 100 cm'den yükseğe bağlanmadığını ve izin verilmeyen şekilde uzatılmadığını kontrol et."
  - "Hortumun bağlı olduğu sifonu, lavaboyu ya da tahliye borusunu kontrol et; tıkalıysa temizle ve suyun hızla aktığından emin ol."
  - "Musluğu kapat, makineyi kapat ve fişini çek; bakım kapağının altına bir kap koyup pis su pompasındaki suyu boşalt."
  - "Pompa kapağını dikkatlice çıkar, kapağın içini, vida dişlerini ve pompa gövdesini temizle; kanatlı çarkın döndüğünü kontrol et."
  - "Pompa kapağını dayanağa kadar çevirerek tak, tutamağın dik durduğuna bak ve bakım kapağını kapat."
  - "Deterjan dozunu gözden geçir, ardından bölme II'ye yaklaşık bir litre su koyup bir tahliye programı çalıştır."
  - "Bütün kontrollerden sonra E:18 tekrar ediyorsa Siemens müşteri hizmetlerinden servis randevusu al."
faq:
  - q: "Siemens çamaşır makinesi E18 ne demek?"
    a: "Siemens WG52A203TR kullanım kılavuzunun arıza tablosuna göre E:18, deterjanlı suyun cihazdan pompalanıp boşaltılamadığını gösteriyor. Kılavuzun saydığı nedenler dört başlıkta: tahliye hortumunun yanlış bağlanması ya da uzatılması, tahliye borusu veya hortumun tıkanması, tahliye pompasının tıkalı ya da pompa kapağının yanlış takılı olması ve aşırı deterjan."
  - q: "Siemens makinemde E:36 -10 yazıyor, E18 ile aynı mı?"
    a: "Siemens kılavuzlarında aynı arıza satırı E:36 -10 / E:30 -80 / E:18 başlığıyla geçiyor. WG54K2Y0TR kılavuzunda bu satır E:18 yazılmadan yalnız E:36 -10 / E:30 -80 olarak duruyor. Kontroller aynı: hortum, gider, pompa ve deterjan."
  - q: "E18 çıktı, tamburda su var; kapağı nasıl açarım?"
    a: "Kılavuzun acil kilit açma bölümünde şart, pis su pompasının boş olması. Camdan su görünüyorsa kapak açılmamalı, çünkü dışarı akan su maddi hasara yol açabilir. Önce bakım kapağının arkasındaki kısa hortumdan pompadaki suyu bir kaba boşalt."
  - q: "Renk tutucu mendiller pompayı tıkar mı?"
    a: "Siemens WG52A203TR kılavuzu bu konuda açık: renk ve kir tutan örtüler gider pompasını tıkayabilir. Kılavuz, renk ve kir tutucu kağıtların yalnız bir çamaşır filesinin içinde kullanılmasını öneriyor."
  - q: "Akıllı dozajlamalı modelde deterjanı nasıl azaltırım?"
    a: "WG54K2Y0TR kılavuzuna göre akıllı dozajlama aktifse temel dozaj miktarı azaltılıyor; manuel dozajlama yapıyorsan aynı miktarda çamaşırla yapılacak bir sonraki yıkamada deterjanı azaltman isteniyor."
images:
  coverAlt: "Çamaşır odasında duran beyaz bir çamaşır makinesi ve kapak camının ardında suyun içinde bekleyen çamaşırlar"
  steps:
    - "Önden yüklemeli bir çamaşır makinesinin kapalı kapağı ve camda görünen su seviyesi"
    - "Makinenin arkasından çıkıp duvar dibinde düzgünce uzanan gri tahliye hortumu"
    - "Banyo lavabosunun altında hortum kelepçesiyle sifona bağlanmış tahliye hortumu"
    - "Makinenin alt köşesindeki açık bakım kapağı ve altında duran sığ plastik bir kap"
    - "Akan musluk suyu altında yıkanan, iki parçaya ayrılmış yuvarlak pompa kapağı"
    - "Yerine takılmış pompa kapağının dik duran tutamağının yakın planı"
    - "Açık deterjan çekmecesinin önünde duran ölçü kabı ve küçük bir sürahi su"
    - "Mutfak tezgâhında yanyana duran bir telefon ve kapalı bir kullanım kılavuzu"
---

Siemens çamaşır makinen programı yarıda kesti, tamburda su duruyor ve ekranda **E:18** var. Siemens'in kullanım kılavuzu bu kodu net tarif ediyor: deterjanlı su cihazdan pompalanıp boşaltılamıyor. Kodun nedenleri arasında senin evde bakabileceğin dört şey var: tahliye hortumu, gider, pis su pompası ve deterjan miktarı. Aşağıdaki sıra Siemens WG52A203TR ve WG54K2Y0TR kılavuzlarından derlendi; senin makinende düğme ve kapak yerleri farklıysa kendi kılavuzuna bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:18 = su atılamıyor. Camda su varken kapağı zorlama. Hortumu (bükülme, sıkışma, 100 cm sınırı, uzatma) ve gideri kontrol et. Sonra musluğu kapat, fişi çek, pompayı boşaltıp temizle, kapağını dayanağa kadar tak. Deterjanı azalt, tahliye programı çalıştır. Kod dönüyorsa servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:18** | Deterjanlı su pompalanıp boşaltılamıyor | 🛠️ Hortum, gider, pompa, deterjan |
| **E:36 -10 / E:30 -80** | Aynı arıza; bazı Siemens modellerinde E:18 yerine görünür | 🛠️ Aynı kontroller |
| **E:36 -25 -26** | Deterjanlı su pompası tıkanmış | 🛠️ Pis su pompasını temizle |
| **Ekran karanlık, Başlat / Reload yanıp sönüyor** | Enerji tasarrufu modu; arıza değil | 🛠️ Başlat / Reload tuşuna bas |

## Adım adım: evde denenecekler

**1. Kapağı zorlama.** E:18 çıktığında tamburda su kalmış olması beklenen bir durum. Siemens'in acil kilit açma bölümünün şartı, **pis su pompasının boş** olması. Kılavuzun uyarısı: **camdan su görünüyorsa kapak açılmamalıdır**, dışarı akan su maddi hasara yol açabilir. Kapağı açmayı 4. adımdan sonraya bırak.

**2. Tahliye hortumunu incele.** Kılavuz E:18'in ilk nedenini tek satırda veriyor: su tahliye hortumu **çok yükseğe bağlanmış, bükülmüş, sıkışmış ya da izin verilmeyen şekilde uzatılmış**. Kurulum bölümüne göre **en fazla pompalama yüksekliği 100 cm**. Makineyi biraz öne çekip hortumun gidere kadar düzgün uzandığına, arkada bir kıvrım ya da ezilme olmadığına bak.

**3. Gideri kontrol et.** İkinci neden, **tahliye borusunun ya da su tahliye hortumunun tıkanması**; çözüm ikisini de temizlemek. Hortum sifona bağlıysa bağlantı 24–40 mm'lik bir hortum kelepçesiyle emniyete alınmalı, lavaboya asılıysa bir manifoldla sabitlenmeli. Siemens, çıkış tıkalı ya da kapalıysa biriken atık suyun cihaza geri akabileceğini yazıyor; makineyi çalıştırmadan önce suyun hızla gittiğinden emin ol.

**4. Pompadaki suyu boşalt.** Hortum ve gider temizse sıradaki şüpheli tahliye pompası. Siemens'in sırası: **musluğu kapat, cihazı kapat, fişini çek.** Bakım kapağını açıp çıkar ve açıklığın altına uygun bir kap koy. Kısa su boşaltma hortumunu tutma düzeneğinden çıkar, kapatma kapağını çekerek suyu kaba akıt. Sıcak programdan sonra bu su sıcaktır; kılavuz **haşlanma tehlikesi** nedeniyle suya dokunulmamasını istiyor. Su bitince kapağa bastır ve hortumu tutma düzeneğine geri tak.

**5. Pompa kapağını temizle.** İçeride su kalmış olabileceği için **pompa kapağını dikkatlice** çıkar. Kılavuza göre yoğun kir pompa haznesindeki filtre ünitesini sıkıştırabilir; kirleri gider. Kapak iki parçaya ayrılıyor. **Kapağın iç kısmını, vida dişli bölümünü ve pompa gövdesini** temizle, ardından **kanatlı çarkın dönebildiğini** kontrol et. Siemens burada ayrıca uyarıyor: renk ve kir tutan örtüler gider pompasını tıkayabilir, bu kağıtları yalnız bir çamaşır filesinin içinde kullan.

**6. Kapağı doğru yerleştir.** Yanlış takılmış pompa kapağı da E:18 nedenleri arasında. Bileşenlerin doğru oturduğundan emin ol, kapağı **dayanağa kadar çevir**; tutamak dik durmalı. Sonra bakım kapağını takıp kapat.

**7. Deterjanı azalt, tahliye programı çalıştır.** Kılavuzun son E:18 nedeni **çok fazla deterjan**. Manuel dozajda aynı miktarda çamaşırla yapılacak bir sonraki yıkamada deterjanı azalt; WG54K2Y0TR gibi akıllı dozajlamalı modellerde kılavuz temel dozaj miktarının azaltılmasını öneriyor. Pompa boşaltıldıktan sonra deterjanın kullanılmadan çıkış borusuna akmaması için musluğu aç, fişi tak, cihazı çalıştır, **bölme II'ye yaklaşık bir litre su** koy ve tahliye için uygun bir program seç.

**8. Kod dönüyorsa servis.** Bütün bunlardan sonra E:18 yine geliyorsa evde yapılacak iş kalmadı. Siemens'in arıza giderme bölümü, onarımların yalnız bunun eğitimini almış uzman personel tarafından yapılabileceğini yazıyor. Siemens müşteri hizmetlerinden servis randevusu al.

## Bakımla önlemek

Siemens pis su pompasının tıkanma ya da tıkırtı sesi gibi durumlarda ve **düzenli olarak en az yılda bir kez** temizlenmesini istiyor. Aynı bakım bölümünde lastik manşonun da düzenli temizlenmesi var: kapağı aç, manşondaki yabancı cisimleri ve tüyleri al, içini ve dışını nemli bezle silip kurula. Kod çıktıktan sonra makine yeniden başlamıyorsa [Siemens çamaşır makinesi hata kodu sıfırlama](/blog/siemens-camasir-makinesi-hata-kodu-sifirlama/) yazısına bak.

## Ne zaman servis

- Hortum, gider ve pompa temiz olduğu hâlde E:18 ya da E:36 -10 / E:30 -80 her yıkamada çıkıyorsa
- Pompa kapağı temizlendikten sonra kanatlı çark dönmüyorsa
- Tahliye hortumu hasarlıysa (kılavuz hasarlı hortumun değiştirilmesini istiyor)
- Ekranda E:30 -20 gibi kritik fonksiyon arızası görüyorsan (ayrıntı [E30-20 yazısında](/blog/siemens-camasir-makinesi-e30-20-hatasi/))

⛔ **Kendin-çöz sınırı burada biter.** Hortum, gider, pompa kapağı, filtre ünitesi ve deterjan dozu sende; pompanın kendisi, motor, kart ve elektrik tesisatı yetkili serviste.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda E:18 mi, E:36 -10 mu yazıyor?
3. Hortum ve gider kontrol edildi mi?
4. Pompa kapağı temizlendi mi, çark dönüyor mu?
5. Kod programın hangi aşamasında çıkıyor?

Belirtiyi ve kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Siemens'in bütün kodları [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) sayfasında, kod görünmeden su atmayan makineler için [Siemens çamaşır makinesi su boşaltmıyor](/blog/siemens-camasir-makinesi-su-bosaltmiyor/) yazısında, pompa tıkanıklığı kodu [Siemens E36-25 hatası](/blog/siemens-camasir-makinesi-e36-25-hatasi/) sayfasında. Bil, gör, çağır.
