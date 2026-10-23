---
title: "Profilo çamaşır makinesi E18 hatası: su boşalmıyor"
description: "Profilo çamaşır makinesinde E:18, suyun pompalanıp boşaltılamadığını söyler. Hortum, gider, pis su pompası temizliği ve servis sınırı adım adım."
slug: "profilo-camasir-makinesi-e18-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork A). Konu seçimi: origin/main'de profilo-camasir-makinesi-e18-hatasi yok.
#   Yakın slug'lar: profilo-camasir-makinesi-hata-kodlari (hub, E18 yalnız SSS satırı), profilo-camasir-makinesi-e17-hatasi,
#   profilo-camasir-makinesi-kapak-acilmiyor, profilo-camasir-makinesi-santrifuj-yapmiyor; Profilo'da E18 tekil sayfası ve "su boşaltmıyor" sayfası yok.
# GSC kanıtı (https___www-5, Sorgular, son 3 ay, 19 Eki dışa aktarımı): "profilo çamaşır makinesi e18 hatası" 89 gösterim poz 10,73 ·
#   "profilo e18 hatası" 53 · "profilo e 18 hatası" 44 · "profilo e 18 hata kodu" 43 · "e 18 profilo çamaşır makinesi" 36 ·
#   "profilo e18 hatası çamaşır makinesi" 23 · "profilo e18" 21 · "e18 profilo çamaşır makinesi hatası" 20 · "profilo çamaşır makinesi e18" 19
#   (ve 9 küçük varyant; toplam ~500). 7 gün (https___www-6): "profilo e 18 hata kodu" 2, "profilo e18 hatası" 2.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "profilo çamaşır makinesi e18" → 1. "profilo çamaşır makinesi e18 hatası nedir",
#   2. "… e18 arızası", 3. "… e18 arıza", 4. "… e18 ne demek"; tohum "profilo çamaşır makinesi e" → 4. "profilo çamaşır makinesi e18 hatası nedir".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, ikisi de HTTP 200; md5 yerel kopyalarla
#   (blog-taslaklar/kaynak-profilo-sprint/) birebir aynı. #88: forum/servis sitesi kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (B) Profilo CGA242X3TR kullanım kılavuzu ve kurulum talimatları  https://media3.bsh-group.com/Documents/9002022851_B.pdf  44 s.  md5 26e5f99b6a19ecada2fa682a657b7d76
#  (F) Profilo CGK264Z0TR kullanım kılavuzu ve kurulum talimatları  https://media3.bsh-group.com/Documents/9002013778_F.pdf  48 s.  md5 e8d78fecbda5478f066c2a5a79daf68d
# E:18 satırı B s.34 (F s.37'de aynı arıza E:36 -10 / E:30 -80 başlığıyla, E:18 yazmadan) · E:36 -25 -26 B s.34 · tahliye bağlantısı, 100 cm, kelepçe 24-40 mm B s.13
#   · tahliye hortumu uzatması 2,20 m aksesuarı B s.24 · pis su pompasının temizlenmesi ve boşaltılması B s.30-32, F s.34-36 · sonraki yıkamadan önce tahliye programı B s.33
#   · arıza giderme girişi ve uyarı B s.33 · acil kilit açma, "camdan su görünüyorsa" B s.38.
# BİLEREK YAZILMAYANLAR: pompa, motor, kart, seviye sensörü teşhisi ya da değişimi (kılavuz onarımı uzman personele bırakıyor) · makineyi yatırma ya da hortumu ağızla
#   üfleme gibi "hileler" · E:18'in Bosch/Siemens'te de aynı olduğu iddiası (bu yazının belgelerinde yok) · reset ile kod silme yöntemi (Profilo kılavuzunda E:18 için yok)
#   · kaç dakikada çözüleceği · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-camasir-makinesi-e18-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Sığ bir kap ya da tepsi", "Havlu", "Makinenin kullanım kılavuzu"]
steps:
  - "Su tahliye hortumunu makinenin arkasından gidere kadar izle; bükülmüş, ezilmiş ya da bir şeyin altında sıkışmış yer varsa düzelt."
  - "Hortumun bağlandığı yüksekliğe ve uzunluğuna bak; kılavuza göre en fazla pompalama yüksekliği 100 cm, hortum izin verilmeyen şekilde uzatılmamalı."
  - "Hortumun bağlandığı sifonu, lavaboyu ya da tahliye borusunu kontrol et; tıkanıklık varsa temizle, sifon bağlantısının kelepçeyle sabit olduğuna bak."
  - "Musluğu kapat, makineyi kapat, fişini çek; bakım kapağını açıp altına bir kap koy ve pis su pompasındaki suyu kısa hortumdan boşalt."
  - "Pompa kapağını yavaşça çıkar; kapağın iç kısmını, vida dişli bölümü ve pompa gövdesini temizle, kanatlı çarkın dönebildiğinden emin ol."
  - "Pompa kapağını dayanağa kadar çevirerek tak; tutamak dik durmalı. Bakım kapağını yerine oturtup kapat."
  - "Sonraki yıkamadan önce musluğu aç, fişi tak, bölme II'ye yaklaşık bir litre su koy ve bir tahliye programı çalıştır; deterjanı bir sonraki yıkamada azalt."
  - "Hortum, gider ve pompa temiz olduğu hâlde E:18 geri geliyorsa Profilo müşteri hizmetlerinden servis iste."
faq:
  - q: "Profilo çamaşır makinesinde E18 ne demek?"
    a: "Profilo CGA242X3TR kılavuzunun arıza tablosunda E:18, deterjanlı suyun cihazdan pompalanıp boşaltılamadığını gösteriyor. Kılavuzun saydığı nedenler: tahliye hortumunun çok yükseğe bağlanması, bükülmesi, sıkışması ya da izin verilmeyen şekilde uzatılması; tahliye borusunun ya da hortumun tıkanması; tahliye pompasının tıkalı ya da pompa kapağının yanlış takılı olması; aşırı deterjan."
  - q: "Ekranımda E18 değil E:36 -10 yazıyor, aynı şey mi?"
    a: "Profilo kılavuzlarında aynı satır üç kodla başlıyor: E:36 -10 / E:30 -80 / E:18. CGK264Z0TR kılavuzunda bu arıza E:18 yazılmadan yalnız E:36 -10 / E:30 -80 olarak geçiyor. Hangisi görünürse görünsün kılavuzun önerdiği kontroller aynı."
  - q: "Tamburda su var, kapağı açabilir miyim?"
    a: "Hayır. Profilo kılavuzu acil kilit açmanın şartını pis su pompasının boş olması olarak veriyor ve camdan su görünüyorsa kapağın açılmaması gerektiğini, dışarı akan suyun maddi hasara yol açabileceğini yazıyor. Önce pompadaki suyu bakım kapağının arkasındaki kısa hortumdan boşalt."
  - q: "Pis su pompası ne sıklıkla temizlenmeli?"
    a: "Kılavuza göre tıkanma ya da tıkırtı sesi gibi arıza durumlarında ve düzenli olarak en az yılda bir kez. Yıkama sıcak suyla yapıldıysa boşaltılan su da sıcak olur; kılavuz haşlanma tehlikesine karşı sıcak deterjanlı suya dokunulmamasını istiyor."
  - q: "Fazla deterjan E18'e yol açar mı?"
    a: "Profilo kılavuzu E:18 nedenleri arasında çok fazla deterjan dozajını da sayıyor. Önerisi, aynı miktarda çamaşırla yapılacak bir sonraki yıkamada deterjan miktarını azaltmak."
images:
  coverAlt: "Banyo köşesinde beyaz önden yüklemeli bir çamaşır makinesi ve tamburunun camında görünen suyla dolu çamaşırlar"
  steps:
    - "Çamaşır makinesinin arkasından duvara doğru uzanan gri, kıvrımsız bir tahliye hortumu"
    - "Lavabo kenarına asılmış tahliye hortumunun ucu ve yanında duran bir şerit metre"
    - "Lavabonun altındaki beyaz plastik sifon ve ona hortum kelepçesiyle bağlanmış hortum"
    - "Çamaşır makinesinin alt ön köşesinde açılmış küçük bakım kapağı ve önünde sığ bir kap"
    - "Elde tutulan, tüy ve küçük bir düğmeyle kirlenmiş yuvarlak pompa kapağı filtresi"
    - "Çamaşır makinesinin alt köşesinde yerine takılmış, tutamağı dik duran pompa kapağı"
    - "Deterjan çekmecesinin ikinci bölmesine bir sürahiden su dökülmesi"
    - "Çalışma tezgâhında kapalı duran bir alet çantası ve açık bir kullanım kılavuzu"
---

Program bitmek üzereyken makine durdu, tamburda su kaldı ve ekranda **E:18** yazıyor. Profilo bu kodu kullanım kılavuzunda tek bir cümleyle tarif ediyor: deterjanlı su cihazdan pompalanıp boşaltılamıyor. İyi haber şu ki kılavuzun bu satır için verdiği kontrollerin çoğu senin yapabileceğin işler: hortum, gider ve pis su pompasının temizliği. Bu yazı Profilo CGA242X3TR ve CGK264Z0TR kullanım kılavuzlarına dayanıyor; senin modelinde kapak ve düğme yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:18 = su boşaltılamıyor. Önce tahliye hortumunu izle (bükük, sıkışık, çok yüksek, uzatılmış mı), sonra gideri kontrol et. Hâlâ geçmiyorsa musluğu kapat, fişi çek, pis su pompasını boşaltıp temizle, kapağını doğru tak. Kod temizlikten sonra geri geliyorsa servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:18** | Deterjanlı su pompalanıp boşaltılamıyor | 🛠️ Hortum, gider, pompa temizliği |
| **E:36 -10 / E:30 -80** | Aynı arıza; bazı modellerde E:18 yerine bu kodlar görünür | 🛠️ Aynı kontroller |
| **E:36 -25 -26** | Deterjanlı su pompası tıkanmış | 🛠️ Pis su pompasını temizle |
| **Camdan su görünüyor** | Pompa boşaltılmadan kapak açılmamalı | ⏳ Önce pompadaki suyu boşalt |

## Adım adım: evde denenecekler

**1. Hortumu baştan sona izle.** Kılavuzun E:18 satırındaki ilk neden hortumun kendisi: su tahliye hortumu **bükülmüş ya da sıkışmış** olabilir. Makineyi hafifçe öne çekip hortumu arkadan gidere kadar takip et. Bir dolabın, ayağın ya da makinenin kendi gövdesinin altında ezilmiş bir yer varsa düzelt. Kılavuz kurulum bölümünde de hortumların asla bükülmemesini istiyor.

**2. Yüksekliğe ve uzunluğa bak.** E:18'in ikinci nedeni, hortumun **çok yükseğe bağlanmış ya da izin verilmeyen şekilde uzatılmış** olması. Profilo kılavuzuna göre **en fazla pompalama yüksekliği 100 cm**. Hortum bundan yüksek bir noktaya asıldıysa pompa suyu oraya çıkaramayabilir. Kılavuzun aksesuar listesinde 2,20 m'lik bir tahliye hortumu uzatması var; araya başka bir parça eklenerek uzatılmış bir hortum görüyorsan bunu kurulumu yapan kişiye sor.

**3. Gideri kontrol et.** Kılavuz, **tahliye borusunun ya da su tahliye hortumunun tıkanmasını** ayrı bir neden olarak sayıyor ve çözümü ikisini temizlemek. Hortum bir sifona bağlıysa bağlantının bir hortum kelepçesiyle (24–40 mm) emniyete alınmış olması gerekiyor; lavaboya asılıysa bir manifoldla sabitlenmeli. Profilo'nun uyarısı da önemli: çıkış tıkalıysa biriken atık su cihaza geri akabilir. Makineyi yeniden çalıştırmadan önce suyun hızlıca aktığından emin ol.

**4. Pis su pompasını boşalt.** Sorun hortumda ve giderde değilse sıra pompada. Kılavuzun sırası şöyle: **musluğu kapat, cihazı kapat, fişini prizden çek.** Bakım kapağını açıp çıkar, açıklığın altına uygun bir kap koy. Kısa su boşaltma hortumunu tutma düzeneğinden çıkar, kapatma kapağını çekip suyu kaba akıt. Dikkat: yıkama sıcak yapıldıysa su da sıcaktır, kılavuz **haşlanma tehlikesine** karşı uyarıyor. Su bitince kapağa bastır ve hortumu yerine tak.

**5. Pompa kapağını temizle.** Pompada hâlâ su olabileceği için **pompa kapağını dikkatlice** çıkar. Kılavuza göre yoğun kir, pompa haznesindeki filtre ünitesini sıkıştırabilir; kirleri gider. Pompa kapağı temizlik için iki parçaya ayrılıyor. Kapağın iç kısmını, vida dişli bölümünü ve pompa gövdesini temizle, sonra **kanatlı çarkın dönebildiğinden** emin ol.

**6. Kapağı doğru tak.** Kılavuz, yanlış takılmış pompa kapağını da E:18 nedenleri arasında sayıyor. Kapağı takarken bileşenlerinin doğru oturduğuna bak, **dayanağa kadar çevir**; tutamak dik konumda durmalı. Ardından bakım kapağını takıp kapat.

**7. Sonraki yıkamadan önce tahliye programı.** Profilo, pompa boşaltıldıktan sonra deterjanın kullanılmadan çıkış borusuna akmaması için bir tahliye programı çalıştırılmasını istiyor: musluğu aç, fişi tak, cihazı aç, **bölme II'ye yaklaşık bir litre su** koy ve tahliye için uygun bir program seç. Kılavuzun son E:18 nedeni de deterjan: dozaj çok fazlaysa aynı miktarda çamaşırla yapılacak bir sonraki yıkamada deterjanı azalt.

**8. Kod geri geliyorsa servis.** Hortum düz, gider açık, pompa temiz ve kapak yerinde, ama E:18 yine çıkıyorsa ev turu bitmiştir. Profilo'nun arıza giderme bölümü onarımların yalnız bunun eğitimini almış uzman personel tarafından yapılabileceğini yazıyor; Profilo müşteri hizmetlerinden servis iste.

## Tamburda su kaldıysa kapak

Kod çıktığında tamburda su kalması normal, çünkü makine suyu atamamış. Kılavuzun acil kilit açma bölümü bunun için açık: kapak kilidini açmanın şartı **pis su pompasının boş** olması ve **camdan su görünüyorsa kapak açılmamalı**, dışarı akan su maddi hasara yol açabilir. Yani sıra her zaman aynı: önce 4. adımdaki gibi pompadan suyu boşalt, sonra kapağa uğraş. Kapakla ilgili ayrıntı [Profilo çamaşır makinesi kapağı açılmıyor](/blog/profilo-camasir-makinesi-kapak-acilmiyor/) yazısında.

**Pompa ne sıklıkla temizlenmeli?** Profilo'ya göre tıkanma ya da tıkırtı sesi gibi durumlarda ve düzenli olarak **en az yılda bir kez**. Ceplerde unutulan küçük eşyalar da pompaya gidebilir; kılavuz çalıştırmadan önce ceplerin boşaltılmasını istiyor.

## Ne zaman servis

- Hortum, gider ve pompa temizlendiği hâlde E:18 (ya da E:36 -10 / E:30 -80) her yıkamada geri geliyorsa
- Pompa kapağını açınca kanatlı çark dönmüyorsa
- Tahliye hortumu hasarlıysa (kılavuz hasarlı hortumun değiştirilmesini istiyor)
- Ekranda E:18 dışında başka bir kod da varsa

⛔ **Kendin-çöz sınırı burada biter.** Hortum, gider, pompa kapağı ve deterjan dozu sende; pompanın kendisi, motor, elektronik ve kabloyla ilgili her şey yetkili serviste.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda tam olarak ne yazıyor: E:18 mi, E:36 -10 mu?
3. Hortum ve gider kontrol edildi mi?
4. Pompa kapağı temizlendi mi, çark dönüyor mu?
5. Kod hangi programda, hangi aşamada çıkıyor?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Profilo'nun bütün kodları [Profilo çamaşır makinesi hata kodları](/blog/profilo-camasir-makinesi-hata-kodlari/) sayfasında, su alma tarafındaki kod [Profilo çamaşır makinesi E17 hatası](/blog/profilo-camasir-makinesi-e17-hatasi/) yazısında, marka bağımsız pompa temizliği [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) rehberinde. Bil, gör, çağır.
