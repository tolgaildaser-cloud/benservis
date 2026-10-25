---
title: "Arçelik çamaşır makinesi su boşaltma programı nasıl yapılır"
description: "Arçelik'te su boşaltma programının adı Sıkma+Pompa. Yalnız suyu atmak için Sıkma Yok seçilir. Yarıda kalan yıkama, kapak kilidi ve suda bırakma."
slug: "arcelik-camasir-makinesi-su-bosaltma-programi"
date: "2026-10-25"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z3). Konu seçimi küme ajanının; origin/main'de slug yok, başlıkta "boşaltma programı" geçen yazı yok.
#   Ayrım: origin/main'deki arcelik-camasir-makinesi-su-bosaltmiyor tıkalı hortum/pompa filtresi arızasını anlatır; bu yazı programın KULLANIMI, oraya bağlantı verir.
# GSC: "arçelik çamaşır makinesi su boşaltma programı" 3 ay 51 gösterim (poz 10.06) · 7 gün 45 gösterim (poz 10.11).
# OT (bu koşu, hl=tr gl=tr): 1. "arçelik çamaşır makinesi su boşaltma programı" 2. "arçelik 4450 çamaşır makinesi su boşaltma programı".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, HTTP 200, md5 yerel kopyalarla (kaynak-arcelik-camasir-sprint m3/m12) birebir.
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sıkma+Pompa A s.26 · B s.22 · iptal A s.31 · B s.28 · kapak kilidi A s.30 · B s.27 · sorun tablosu A s.35 · B s.33 · suda bırakma A s.26 · B s.28 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: 4450 modeli (belgesi bu koşuda yok) · kapağı zorlama / ip çekme hileleri · pompa motoru, kart teşhisi · fiyat (#46).
# Alıntı denetim tablosu: arcelik-camasir-makinesi-su-bosaltma-programi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Başla / Bekle ile makineyi beklemeye al ve kapak ışığına bak; su seviyesi uygunsa kapak 1-2 dakikada açılır."
  - "Kapak açılmıyorsa program seçim düğmesini Sıkma+Pompa konumuna getir; önceki program iptal olur."
  - "Yalnız suyu atmak için Sıkma Devri Ayar tuşuyla Sıkma Yok'u seç ve Başla / Bekle'ye bas."
  - "Çamaşırı da sıkmak istiyorsan önce sıkma devrini seç, sonra Başla / Bekle'ye bas."
  - "Program suda bırakma ile beklemedeyse Başla / Bekle'ye basman suyu tahliye etmeye yeter."
  - "Program bitince kapak ışığı sabit yanana kadar bekle; kapağı zorlama."
  - "Program çalıştığı hâlde su gitmiyorsa hortum ve pompa filtresine bak; olmuyorsa Arçelik yetkili servisi."
faq:
  - q: "Arçelik çamaşır makinesinde su boşaltma programı hangisi?"
    a: "Arçelik'in 7103 D ve 9103 HE kılavuzlarında bu programın adı Sıkma+Pompa. Kılavuza göre çamaşır üzerindeki suyun uzaklaştırılması ya da makinenin içindeki suyun tahliyesi için kullanılır."
  - q: "Çamaşırı sıkmadan yalnız suyu nasıl boşaltırım?"
    a: "Sıkma+Pompa programını seç, Sıkma Devri Ayar tuşuna basarak kademeleri azalt ve Sıkma Yok seçeneğine getir, sonra Başla / Bekle tuşuna bas. 7103 D kılavuzuna göre Sıkma Yok seçildiğinde sıkma seviyesi ışıkları yanmaz."
  - q: "Yıkama yarıda kaldı, kapak açılmıyor. Ne yapmalıyım?"
    a: "Arçelik'in sorun giderme tablosundaki çözüm: kapak kilidi su seviyesi yüzünden devredeyse Pompa ya da Sıkma programını çalıştırarak suyu tahliye et. Makine suyu ısıtıyor ya da sıkma adımındaysa programın bitmesini, program bittiyse kilidin çözülmesi için birkaç dakika bekle."
  - q: "Programı iptal edince su kendiliğinden boşalır mı?"
    a: "7103 D kılavuzuna göre program seçim düğmesi çevrilerek program iptal edildiğinde, makinede su olup olmamasına bakılmaksızın Pompa fonksiyonu 1-2 dakika çalışır. 9103 HE'de iptal için Başla / Bekle / İptal tuşu 3 saniye basılı tutulur; iptalden sonra su kapak hizasından fazlaysa kılavuz düğmeyi Pompa+Sıkma programına getirmeni söylüyor."
  - q: "Sıkma+Pompa çalıştı ama su gitmiyor, neden?"
    a: "O zaman sorun programda değil tahliye yolundadır. Arçelik'in tablosu iki sebep sayıyor: su gideri hortumu tıkanmış ya da kıvrılmış olabilir, pompa filtresi tıkanmış olabilir. Temizlik adımları Arçelik çamaşır makinesi su boşaltmıyor yazısında."
images:
  coverAlt: "Kapağı kapalı beyaz önden yüklemeli çamaşır makinesi, camın ardında suda bekleyen çamaşırlar"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
---

Program yarıda kaldı, elektrik gidip geldi ya da çamaşırı yanlış programa attın; tambur su dolu ve kapak açılmıyor. Arçelik çamaşır makinesinde bu iş için ayrı bir **su boşaltma programı** var: kılavuzdaki adı **Sıkma+Pompa**. Bu yazıda Arçelik'in 7103 D ve 9103 HE kullanma kılavuzlarından programın nasıl çalıştırılacağını, **çamaşırı sıkmadan yalnız suyu atmanın** yolunu ve kapak kilidiyle ilişkisini çıkardık. Tuş adları iki modelde biraz farklı; kendi panelinle karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Düğmeyi **Sıkma+Pompa**'ya getir. Yalnız su için Sıkma Devri Ayar tuşuyla **Sıkma Yok**'u seç, Başla / Bekle'ye bas. Çamaşırı da sıkmak istiyorsan devri seçip başlat. Program çalıştığı hâlde su gitmiyorsa sorun hortumda ya da pompa filtresindedir.

## Sıkma+Pompa ne yapar?

7103 D kılavuzu programı şöyle tanımlıyor: **çamaşır üzerinde bulunan suyun uzaklaştırılması veya makinanın içindeki suyu tahliye etmek** için kullanılır. Makine **önce içerisindeki suyu tahliye eder,** ardından ayarlanmış sıkma devriyle çamaşırı sıkar ve çıkan suyu da atar. 9103 HE'de program aynı adla geçiyor; sıkma sonrası suyun tahliye edildiği yazıyor.

| Ne istiyorsun? | Seçim |
|---|---|
| Yalnız suyu atmak | Sıkma+Pompa + **Sıkma Yok** |
| Suyu atıp çamaşırı sıkmak | Sıkma+Pompa + istediğin devir |
| Suda bırakılmış programı bitirmek | Başla / Bekle (sıkmak için önce devir) |

## Adım adım: Arçelik'te suyu boşaltma

**1. Önce beklemeye al, kapak ışığına bak.** 7103 D kılavuzuna göre makine **Başla / Bekle** ile bekleme durumuna alındığında yükleme kapağı ışığı yanıp söner ve makine içindeki su seviyesini kontrol eder. **Seviye uygunsa 1-2 dakika içinde** ışık sabit yanar ve kapak açılabilir. Bu durumda suyu boşaltmana gerek yok. Işık sönüyorsa seviye uygun değildir ve kapak açılmaz; kılavuz bu durumda mevcut programın iptal edilmesini söylüyor.

**2. Düğmeyi Sıkma+Pompa'ya getir.** 7103 D'de program, Program Seçim düğmesi çevrilerek başka bir program seçildiğinde iptal olur; **Bitti / İptal** ışığı yanıp söner. Kılavuzun notu önemli: program adımına ve içeride su olup olmamasına bakılmaksızın **Pompa fonksiyonu 1-2 dakika** çalışır. 9103 HE'de iptal için **Başla / Bekle / İptal tuşu 3 saniye** basılı tutulur, ekranda **End** görünür. Bu modelin kılavuzu iptalden sonra su kapak hizasından fazlaysa düğmenin **Pompa+Sıkma** programına getirilmesini istiyor.

**3. Yalnız su için Sıkma Yok'u seç.** Kılavuzun cümlesi: çamaşırları sıktırmadan sadece suyu tahliye etmek istiyorsan Pompa+Sıkma programını seçtikten sonra **Sıkma Devri Ayar tuşu** yardımıyla **Sıkma Yok** fonksiyonunu seç ve Başla / Bekle'ye bas. Tuşa her basışta devir kademeyle azalır; en sonda Suda Bırakma ve Sıkma Yok seçenekleri çıkar. 7103 D'de Sıkma Yok seçilince sıkma seviyesi ışıkları **yanmaz.**

**4. Çamaşırı da sıkmak istiyorsan devri seç.** Kılavuz, programı seçmeden önce istediğin sıkma devrinin ayarlanmasını söylüyor. Narin çamaşırda kılavuzun önerisi **düşük devir.** Makine sıkma adımına geçmiyorsa 7103 D'ye göre **Suda Bırakma** açık kalmış olabilir ya da çamaşırlar dengesiz dağılmıştır. Ayrıntı [Arçelik çamaşır makinesi santrifüj yapmıyor](/blog/arcelik-camasir-makinesi-santrifuj-yapmiyor/) yazısında.

**5. Suda bırakma ile beklediyse tek tuş yeter.** Suda Bırakma, çamaşırı son durulama suyunda bekletir. 7103 D'ye göre bu adımdan sonra sıkmadan suyu atmak için **Başla / Bekle** tuşuna basman yeterli; program su tahliye edilerek tamamlanır. Sıkmak istiyorsan önce sıkma devrini ayarla, sonra başlat. 9103 HE'de bu modda **Sıkma sembolü yanıp söner;** Başla / Bekle / İptal'e basınca program yalnız suyu tahliye eder.

**6. Kapak ışığını bekle, kapağı zorlama.** Program bitince ekranda **End** görünür. 7103 D'nin sırası: **yükleme kapağı ışığı sabit yanana kadar bekle,** sonra makineyi kapat ve çamaşırı çıkar. Kılavuzun güvenlik uyarısı açık: içeride hâlâ su varken kapağı açma, **kilitli kapağı zorla açmaya çalışma;** kapak ve kilit mekanizması zarar görebilir. 9103 HE'ye göre su sıcaksa ya da seviye kapak hizasının üzerindeyse kapak açılmaz. Kapakla ilgili diğer durumlar [Arçelik çamaşır makinesi kapağı açılmıyor](/blog/arcelik-camasir-makinesi-kapagi-acilmiyor/) yazısında.

**7. Program çalıştı, su gitmiyorsa tahliye yoluna bak.** Sıkma+Pompa çalıştığı hâlde tambur hâlâ doluysa sorun programda değildir. Arçelik'in sorun giderme tablosu iki sebep yazıyor: **su gideri hortumu tıkanmış veya kıvrılmış olabilir, pompa filtresi tıkanmış olabilir.** Hortum ve filtre temizliği [Arçelik çamaşır makinesi su boşaltmıyor](/blog/arcelik-camasir-makinesi-su-bosaltmiyor/) yazısında adım adım anlatılıyor. Onlar da temizse **Arçelik yetkili servisine** haber ver.

## İptalden sonra deterjan

7103 D kılavuzunun notu: programın iptal edildiği adıma bağlı olarak yeni seçtiğin program için **tekrar deterjan ve yumuşatıcı koyman gerekebilir.** Suyu boşaltıp yeniden yıkayacaksan çekmeceye bak. Program başlamadan sıfırlamak istiyorsan [Arçelik çamaşır makinesi resetleme](/blog/arcelik-camasir-makinesi-resetleme/) yazısı da işine yarar.

## Ne zaman servis

- Sıkma+Pompa çalışıyor ama hortum ve filtre temizken su hiç gitmiyorsa
- Su boşaldığı, program bittiği hâlde kapak açılmıyorsa
- Ekranda bir hata kodu çıkıyorsa: liste [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Program seçimi, sıkma devri, tahliye hortumu ve pompa filtresi sende; pompa motoru, kapak kilit mekanizması ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne?
2. Sıkma+Pompa çalıştı mı, pompa sesi geliyor mu?
3. Hortum kıvrık mı, pompa filtresi temiz mi?
4. Ekranda End ya da bir kod var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
