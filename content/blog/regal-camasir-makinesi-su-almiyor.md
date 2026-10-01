---
title: "Regal çamaşır makinesi su almıyor"
description: "Regal çamaşır makinesi su almıyorsa Regal kılavuzundaki sıra: musluk, kapı, hortum, su akışı ve hortum filtresi. E02 uyarısı ve servis sınırı."
slug: "regal-camasir-makinesi-su-almiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Altus/Regal belirti koşusu). İki belge, bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, ikisi de HTTP 200.
#   Adresler regal-tr.com ürün sayfalarındaki "Kullanım Kılavuzu" bağlantısından alındı (Regal ürün sayfası → statik.vestel.com.tr; Regal, Vestel çatısındaki marka).
#  (A) CMI 100122 / CMI 100122 G  https://statik.vestel.com.tr/webfiles/20268729_k.pdf  40 s.  md5 2c4393417f13bb73b069981ab6a4ef32  (sayfa atıfları esas A)
#      ürün sayfası: https://www.regal-tr.com/regal-cmi-100122-camasir-makinesi-p-3825
#  (B) CMI 71101                  https://statik.vestel.com.tr/webfiles/20350104_k.pdf  40 s.  md5 09852f9fd5d5735589cc98944b2779a3
#      ürün sayfası: https://www.regal-tr.com/regal-cmi-71101-7-kg-1000-devir-camasir-makinesi-p-4151
# #88: web araması kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
# "9. KÜÇÜK ARIZALARIN GİDERİLMESİ" (A s.30 · B s.30) "Makineniz su almıyor." → Musluğunuz kapalı → Musluğunuzu açın · Su giriş hortumu bükülmüş olabilir →
#   Su giriş hortumunu kontrol edin · Su giriş hortumu tıkalı → Su giriş hortumunu filtrelerini temizleyin (*) · Valf giriş filtresi tıkalı → Valf giriş
#   filtrelerini temizleyin (*) · Makinenizin kapısı tam olarak kapalı değil → Makinenizin kapısı kapatın.
# "10. OTOMATİK ARIZA UYARILARI" (A s.32 · B s.32) E02: "Makinenizin su basıncı veya kazan su seviyesi düşük." → "Musluğu sonuna kadar açın. Su kesik olabilir
#   kontrol edin. Hala sorun devam ediyorsa makineniz belli bir süre sonra kendiliğinden duracaktır. Makinenizin fişini çekip, musluğunuzu kapatın ve yetkili servise başvurun."
# Diğer: 7.2 Su Giriş Filtreleri A s.27 · B s.27 (2 ayda bir; musluk tarafı filtre "elinizle"; valf filtresi "pense yardımıyla") · 3.4 Su Bağlantısı A s.14-15 · B s.15
#   (0,1-1 MPa; 0,1 MPa = tam açık musluktan 1 dakikada 8 litreden fazla; plastik kısımları elle sık; musluğu tamamen açıp sızdırmazlık; hortum katlanmasın/kırılmasın/ezilmesin;
#   eski hortum kullanma) · kapı A s.19 · B s.20 ("kilitlendiğini duyana kadar itin") · güvenlik A s.5 · B s.5.
# FİŞ KURALI İSTİSNASI: ilk adımlar (musluk, kapı, hortum) makineye dokunmadan yapılan kontroller; filtre temizliğinden önce "fişi çek, musluğu kapat" adımı var.
# ALET KURALI: valf girişindeki filtrenin pense ile çıkarılması numaralı adımlara girmedi; gövdede numarasız anıldı.
# YAKIN KOPYA: Regal kılavuzu Vestel kılavuzuyla aynı metni taşıyor. Yayındaki vestel-camasir-makinesi-e02-hatasi KOD sayfası; bu sayfa BELİRTİ sayfası:
#   giriş "su almıyor" satırından, sıra farklı (kapı adımı ve 8 litre/dakika akış ölçüsü öne alındı, pense adımı yok), E02 ikincil bölüm. Yayında Vestel "su almıyor" sayfası yok.
# BİLEREK YAZILMAYANLAR: valf/su seviye sensörü/kart teşhisi (belgede yok) · musluk değiştirme, tesisat işi (belgede "ehliyetli bir tesisatçı") · fiyat (#46).
# Alıntı denetim tablosu: regal-camasir-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bez"]
steps:
  - "Makinenin bağlı olduğu su musluğunun açık olduğunu kontrol et."
  - "Makinenin kapısını kilitlendiğini duyana kadar iterek tam kapat."
  - "Makinenin arkasındaki su giriş hortumunun katlanmadığını, kırılmadığını ve ezilmediğini kontrol et."
  - "Musluğu sonuna kadar aç ve suyun kesik olup olmadığını kontrol et."
  - "Filtreye geçmeden önce makinenin fişini çek ve su musluğunu kapat."
  - "Su giriş hortumunu çıkar; musluk tarafındaki filtreyi contasıyla birlikte elinle çıkarıp temizle."
  - "Filtreyi çıkardığın gibi tak, hortumu musluğa elle bağla, musluğu tamamen açıp bağlantı yerinin sızdırmazlığını kontrol et."
faq:
  - q: "Regal çamaşır makinem neden su almıyor?"
    a: "Regal'in çamaşır makinesi kılavuzlarındaki küçük arızalar tablosu 'Makineniz su almıyor' satırında beş sebep sayıyor: musluğun kapalı olması, su giriş hortumunun bükülmesi, su giriş hortumunun tıkalı olması, valf giriş filtresinin tıkalı olması ve makinenin kapısının tam kapalı olmaması."
  - q: "Su giriş filtreleri ne sıklıkla temizlenmeli?"
    a: "Regal'in bakım bölümüne göre su giriş filtrelerinin 2 ayda bir temizlenmesi gerekiyor. Kılavuz, musluk açık olduğu hâlde makine yeterince su almazsa bu filtrelerin temizlenmesini de istiyor."
  - q: "Ekranda E02 yazıyor, bu su almamakla mı ilgili?"
    a: "Regal'in otomatik arıza uyarıları tablosunda E02, makinenin su basıncının ya da kazan su seviyesinin düşük olduğunu gösteriyor. Çözüm sırası: musluğu sonuna kadar aç, su kesik mi kontrol et. Sorun sürerse makine belli bir süre sonra kendiliğinden durur; fişini çek, musluğu kapat ve yetkili servise başvur."
  - q: "Musluktaki su basıncı yeterli mi, nasıl anlarım?"
    a: "Regal kılavuzuna göre musluktan 0,1-1 MPa basınçlı su akması makinenin daha verimli çalışmasını sağlar. Kılavuzun kendi ölçüsüyle 0,1 MPa basınç, tam açılmış bir musluktan 1 dakikada 8 litreden fazla su akması demek."
images:
  coverAlt: "Çamaşır makinesinin arkasında duvardaki musluğa bağlı beyaz başlıklı su giriş hortumu, hortumun yanında katlanmış bir bez"
---

Program seçildi, makine çalışıyor gibi ama tambura su gelmiyor. Regal'in çamaşır makinesi kılavuzlarındaki küçük arızalar tablosunda bu belirti **"Makineniz su almıyor."** satırında geçiyor ve sebeplerin beşi de kullanıcının görebileceği yerde: **musluğunuz kapalı**, **su giriş hortumu bükülmüş olabilir**, **su giriş hortumu tıkalı**, **valf giriş filtresi tıkalı** ve **makinenizin kapısı tam olarak kapalı değil.** Bu yazıda Regal'in tablosunu makineye dokunmadan yapılan kontrollerden filtre temizliğine doğru sıralıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk açık mı, kapı kilitlendiğini duyana kadar kapandı mı, arkadaki hortum katlanmış mı bak. Musluğu sonuna kadar açıp suyun gelip gelmediğini kontrol et. Hâlâ su almıyorsa fişi çek, musluğu kapat, hortumun musluk tarafındaki filtreyi elle çıkarıp temizle.

## Adım adım: evde denenecekler

**1. Musluğu kontrol et.** Regal'in tablosundaki ilk sebep: **musluğunuz kapalı.** Çözüm: **musluğunuzu açın.**

**2. Kapıyı tam kapat.** Tablodaki son sebep: **makinenizin kapısı tam olarak kapalı değil.** Regal'in çamaşır yükleme bölümüne göre kapının kapanması için onu **kilitlendiğini duyana kadar it.** Aynı tablo, kapının tam kapanmamasını **"Makineniz çalışmaya başlamıyor"** satırında da sayıyor.

**3. Hortumu kontrol et.** İkinci sebep: **su giriş hortumu bükülmüş olabilir.** Çözüm: **su giriş hortumunu kontrol edin.** Regal'in su bağlantısı bölümü, su giriş hortumlarının **katlanmamasına, kırılmamasına, ezilmemesine ve boyutlarıyla oynanmamasına** dikkat edilmesini istiyor.

**4. Musluğu sonuna kadar aç, akışa bak.** Regal'in kodlu uyarılar tablosundaki E02 çözümü de musluktan başlıyor: **musluğu sonuna kadar açın. Su kesik olabilir kontrol edin.** Kılavuzun su bağlantısı bölümü bir ölçü veriyor: musluktan **0,1-1 MPa** basınçlı su akması makinenin daha verimli çalışmasını sağlar; **0,1 MPa basınç, tam açılmış bir musluktan 1 dakikada 8 litreden fazla su akması** demektir.

**5. Fişi çek, musluğu kapat.** Filtreye geçmeden önce Regal'in bakım bölümündeki iki uyarı: bakım ve temizliğe başlamadan önce **mutlaka fişi prizden çek** ve **mutlaka su musluğunu kapat.**

**6. Hortumun filtresini elle temizle.** Tablodaki üçüncü sebep: **su giriş hortumu tıkalı.** Regal'e göre makinenin su giriş hortumunun musluk kısmında, suyun içindeki pislik ve yabancı maddelerin makineye girmesini önleyen **filtreler** var; **su musluğun açık olduğu hâlde makine yeterince su almazsa** bu filtreler temizlenmeli. Kılavuzun tarifi: **su giriş hortumlarını çıkar**, hortumların **musluk tarafında bulunan filtreleri contasıyla beraber elinle çıkarıp temizle.**

**7. Tak ve sızdırmazlığı kontrol et.** Regal'e göre filtreleri temizledikten sonra **çıkardığın gibi takabilirsin.** Su bağlantısı bölümüne göre bağlantıların **plastik kısımlarını elinle sık**; bağlantı yapıldıktan sonra **musluğu tamamen açarak bağlantı yerlerinin sızdırmazlığını** kontrol et.

## Valf filtresi ve E02

Tablodaki dördüncü sebep, makinenin arkasındaki **valf giriş filtresi.** Regal'in bakım bölümüne göre su giriş valflerinin üzerindeki filtreler **bir pense yardımıyla** çıkarılıp bir fırçayla suya tutularak temizleniyor. Bu adım alet gerektirdiği için yukarıya koymadık; kendin yapmayacaksan yetkili servise bırak. Kılavuz filtrelerin **2 ayda bir** temizlenmesini istiyor ve bir uyarı ekliyor: musluk suyunun kirliliğinden ya da gerekli bakım yapılmadığı için valf filtreleri tıkanabilir, valfler arızalanıp makine **sürekli su alabilir**; bu nedenlerle oluşan arızalar **garanti kapsamının dışında.**

Ekranda **E02** görüyorsan Regal'in kodlu uyarılar tablosuna göre **makinenizin su basıncı veya kazan su seviyesi düşük.** Musluğu sonuna kadar açıp suyun kesik olup olmadığına baktıktan sonra sorun sürüyorsa kılavuzun cümlesi açık: makine **belli bir süre sonra kendiliğinden duracaktır**; **fişini çek, musluğu kapat ve yetkili servise başvur.**

Su giriş hortumunu değiştiren biri varsa Regal'in notu: su giriş bağlantısında **makinenin içinden çıkan yeni su giriş hortumunu** kullan; **eski, kullanılmış ya da hasarlı** su giriş hortumlarını kullanma. Markadan bağımsız anlatım için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına, diğer kodlar için [çamaşır makinesi hata kodları](/blog/camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Sınır nerede biter

Musluk, kapı, hortum ve hortumun musluk tarafındaki filtre kullanıcıya aittir. Regal'in tablosunun girişindeki cümle açık: **makinende yapılması gereken tüm tamiratlar yetkili servisler tarafından yapılmalıdır**; tablodaki bilgilerle arızayı gideremediğinde yetkili servise başvur. Güvenlik bölümü de aynı çizgide: herhangi bir arıza durumunda önce **fişi prizden çıkar ve musluğu kapat**, **kendin tamir etmeye çalışma** ve danışma hattını ara. Bağlantıdan emin olmadığın durumlar için kılavuzun önerisi **ehliyetli bir tesisatçı.**

⛔ **Kendin-çöz sınırı burada biter.** Musluk açık, su geliyor, kapı kilitli, hortum düz ve filtresi temiz olduğu hâlde makine su almıyorsa yetkili servise başvur.

## Servisi aramadan önce iki dakikalık özet

1. Musluk sonuna kadar açık mı, evde su var mı?
2. Kapı kapanırken kilit sesi geliyor mu?
3. Ekranda E02 ya da başka bir kod var mı?
4. Hortumun musluk tarafındaki filtrede ne çıktı?
5. Makine su almadan mı duruyor, yoksa az su alıp mı bekliyor?

Bu beşine cevabın varsa servise "su almıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
