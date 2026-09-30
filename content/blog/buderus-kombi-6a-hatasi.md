---
title: "Buderus kombi 6A hatası"
description: "Buderus kombide 6A bir ateşleme sorunu. Ocakla gaz testi, gaz vanası kontrolü, reset ve servis sınırı adım adım; Buderus'un kendi belgelerinden."
slug: "buderus-kombi-6a-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext -layout ile okundu, sayfa no \f ayracına göre.
# Web araması yalnız U072 kılavuzunun YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan / üçüncü taraf siteden alınmadı.
# Alıntı denetim tablosu: buderus-kombi-6a-hatasi.KAYNAK.md
# K1) Buderus TR "6a Arıza Kodu" sayfası
#     https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/6a-ariza-kodu/
#     HTTP 200 · 126.343 B · md5 37b9f9e083b4ed3c4a05a2e8d79e9b77 (dinamik sayfa; md5 indirme anına ait)
#     Birebir: "Buderus 6a arıza kodu, kombinizde oluşan bir ateşleme sorunudur." · ocak testi · daire dışı vana ·
#     "Gaz vanası boru ile aynı hizada ise gaz vananız açık demektir." · "Kombinizi açıp kapatarak ya da resetleme tuşuna
#     birkaç saniye basılı tutarak" · reset sonrası sürerse "Buderus'un uzman yetkili servis ekiplerine ulaşabilir"
# K2) Buderus TR "Arıza Kodları ve Çözümleri" dizini
#     https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-cozumleri/
#     HTTP 200 · 178.337 B · md5 ff763f86f479cd5ba6b5c8935ee0960a — 6A'nın geçtiği modeller: GB172i, GB062, GB012, GB072, GB042, U022, U072, U052, U062
# K3) EP / Fd kod sayfaları (30 saniye sınırı)
#     .../ep-ariza-kodu/ HTTP 200 md5 0f4991fe2a78afb35b78a04b24ae26ec · .../fd-ariza-kodu/ HTTP 200 md5 8a03ca4fe9343798913b698d8c9b43b6
# B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf
#     HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     Çiğ gaz kokusu listesi s.3 · vana kolu akış yönünde = açık s.5 · "Bir arıza kodu yanıp söndüğünde … Reset yazısı gösterilene
#     kadar reset tuşunu basılı tutun" + "Arıza giderilemiyorsa: Yetkili servisi arayın, arıza kodunu ve cihaz bilgilerini belirtin" s.12
# B2) Logamax U072 Kullanma Kılavuzu 6720813734 (2015/02)
#     https://buderus-tr-tr-c.boschhc-documents.com/download/file/file/6720813734.pdf
#     HTTP 200 · 746.828 B · 12 s. · md5 0f67df9c94f4db798d5c3ce9c8b462b8
#     Gaz kokusu listesi s.3 · "bir arıza kodu (örn. 6A) yanıp söner" + iki reset yolu + tip etiketi s.7
# B3) Logamax plus GB172i.2 Kullanım Kılavuzu 6721852623 (2023/12)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf
#     HTTP 200 · 1.744.938 B · 16 s. · md5 e2c3f95692c0e3c1e3a2ea3b59997420
#     Gaz vanası açma/kapama + tekrarlanan reset → 2980 s.7 (YALNIZ bu kılavuzun uyarısı olarak verildi)
# BİLEREK yazılmayanlar:
#  - 6A'nın arkasındaki parça (elektrot, gaz valfi, kart vb.): sayfa yalnız "bazı parçalarında arıza yaşanmış olabilir" diyor.
#  - "En sık görülen kod" iddiası (sayfa "sıklıkla karşılaşılan" diyor, oran yok).
#  - Reset tuşuna kaç saniye basılacağı için tek rakam: 6A sayfası "birkaç saniye", EP/Fd sayfaları "30 saniyeyi aşmayacak";
#    ikisi yan yana verildi.
#  - GB172i.2'nin 6A kullandığı (kılavuz rakamlı kod örneği veriyor); 2980 uyarısı yalnız o kılavuza atfedildi.
#  - Buderus müşteri hattı numarası (sayfada var; yayın politikası gereği gövdeye alınmadı).
#  - Gaz bağlantı basıncı, gaz tesisatı kontrolü, kombinin içi: servis işi (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin çevresinde gaz kokusu olmadığından emin ol; koku varsa kombiye dokunma, kılavuzdaki gaz kokusu adımlarını uygula."
  - "Doğalgazlı ocağın varsa bir gözü yakmayı dene."
  - "Ocak yanmıyorsa daire dışındaki gaz vanasına bak."
  - "Ocak yanıyorsa kombinin yanındaki gaz vanasının boruyla aynı hizada, yani açık olduğunu kontrol et."
  - "Vana açıksa kombiyi kapatıp aç ya da reset tuşuyla bir kez resetle; tuşu 30 saniyeden uzun basılı tutma."
  - "Reset sonrası 6A geri geliyorsa kod ve model bilgisiyle Buderus yetkili servisini ara."
faq:
  - q: "Buderus kombide 6A hatası ne demek?"
    a: "Buderus'un 6A kod sayfasına göre 6A, kombide oluşan bir ateşleme sorunudur. Sayfanın ilk önerdiği kontrol gaz vanasının açık olup olmadığıdır; vanalar açık olduğu hâlde kod sürüyorsa bir sonraki adım kombiyi resetlemektir."
  - q: "Gaz vanasının açık olduğunu nasıl anlarım?"
    a: "Buderus'un 6A sayfası, kombinin yanındaki gaz vanası boruyla aynı hizadaysa vananın açık olduğunu söylüyor. Kullanma kılavuzları da aynı şeyi yazıyor: vana kolu akış yönündeyse açık, akış yönünün enine duruyorsa kapalıdır. Sayfa ayrıca doğalgazlı bir ocakla test önerir: ocak yanmıyorsa önce daire dışındaki gaz vanasına bakılır."
  - q: "Buderus kombi 6A hatasında reset nasıl yapılır?"
    a: "6A sayfası iki yol veriyor: kombiyi açıp kapatmak ya da resetleme tuşuna birkaç saniye basılı tutmak. GB072 kılavuzunda reset tuşu ekranda Reset yazısı görünene kadar basılı tutulur. Buderus'un EP ve Fd sayfaları reset tuşuna 30 saniyeyi aşmayacak şekilde basılmasını istiyor; daha uzun basmak ekranda EP ya da Fd koduna yol açıyor."
  - q: "Resetten sonra 6A yine çıkarsa ne yapmalıyım?"
    a: "Buderus'a göre resetleme sonrasında 6A sürüyorsa kombinin bazı parçalarında arıza olabilir ve Buderus yetkili servisine ulaşılması gerekir. Kılavuzlar servise arıza kodunun ve cihaz bilgilerinin bildirilmesini istiyor; bu bilgiler tip etiketinde yazılıdır. GB172i.2 kılavuzu ayrıca arızayı sıfırlamak için tekrarlanan girişimlerin cihazı güvenlik nedeniyle bloke edebileceğini yazıyor."
images:
  coverAlt: "Mutfakta duvara asılı beyaz bir kombinin altındaki borular; sarı kollu gaz vanası boruyla aynı hizada duruyor, yanda tezgâhta yanan bir ocak gözü"
video:
  youtubeId: "1m8TT6lAIKQ"
  title: "Buderus kombi 6A hatası: servisi aramadan önce 4 kontrol"
  description: "Buderus kombide 6A ateşleme kodunda gaz kokusu, ocakla gaz testi, vana konumu ve tek reset kontrolleri."
  uploadDate: "2026-09-30T03:39:08Z"
  duration: "PT52S"
---

Kombi çalışmıyor ve ekranda **6A** yanıp sönüyor. Buderus'un kendi kod sayfasındaki tanım kısa: **"kombinizde oluşan bir ateşleme sorunudur."** Aynı sayfa bir sıra da veriyor: önce gaz vanalarının açık olup olmadığına bak, vanalar açıksa kombiyi resetle, kod yine de sürüyorsa yetkili servise ulaş. Bu yazı o sırayı Buderus'un kullanma kılavuzlarıyla birlikte adım adım açıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 6A = Buderus'a göre ateşleme sorunu. Sıra şu: gaz kokusu yok mu → ocakla gazı test et → daire dışı vana → kombinin yanındaki gaz vanası boruyla aynı hizada mı → bir kez reset (tuşa 30 saniyeden uzun basma) → kod geri geliyorsa yetkili servis.

## Önce: gaz kokusu varsa bu yazıyı bırak

6A bir ateşleme kodudur, gaz kaçağı kodu değildir. Ama kombinin çevresinde gaz kokusu alıyorsan kod okumanın sırası değil. Buderus'un U072 ve GB172i.2 kılavuzlarındaki liste şu:

- Sigara içme, çakmak ve kibrit kullanma.
- Herhangi bir elektrikli şalter kullanma, elektrik fişini çekme.
- Telefonu kullanma, kapı zilini çalma.
- Ana kapama tertibatından ya da gaz sayacındaki vanadan **gaz beslemesini kes**.
- Pencere ve kapıları aç.
- Tüm apartman sakinlerini uyar ve binayı terk et; binaya üçüncü şahısların girmesine engel ol.
- **Binanın dışında:** itfaiyeyi, polisi ve gaz dağıtım şirketini ara.

## Hangi Buderus kombilerde 6A var

Buderus'un arıza kodları sayfası 6A'yı şu modellerin listesinde veriyor: **Logamax plus GB172i, GB062, GB012, GB072, GB042** ve **Logamax U022, U072, U052, U062**. GB122i ve GB022i'nin rakamlı kodları arasında 6A yok; o ailede alevle ilgili kod **227**'dir (bkz. [Buderus kombi 227 hatası](/blog/buderus-kombi-227-hatasi/)).

U072 kılavuzu arızanın ekranda nasıl göründüğünü de örnekle anlatıyor: bir arıza oluştuğunda ekranda arıza sembolü görünür ve bir arıza kodu, **örneğin 6A, yanıp söner.**

## Adım adım: evde denenecekler

**1. Gaz kokusunu dışla.** Yukarıdaki listeyi oku. Koku yoksa devam et.

**2. Ocakla gazı test et.** Buderus'un 6A sayfası bu kontrolün evdeki doğalgazlı cihazlarla yapılabileceğini söylüyor: doğalgazlı bir ocağın varsa **bir gözü yakmayı dene.**

**3. Ocak yanmıyorsa: daire dışındaki gaz vanası.** Sayfaya göre bu durumda önce **daire dışındaki gaz vanasını** kontrol et ve vanayı açık duruma getir.

**4. Ocak yanıyorsa: kombinin yanındaki gaz vanası.** Gaz daireye geliyor demektir; sıradaki yer kombinin yanındaki gaz vanası. Buderus'un ölçütü: **vana boruyla aynı hizadaysa açıktır.** Aynı hizada değilse sayfa, vanayı boruyla aynı hizaya getirerek açmanı söylüyor. Kılavuzlar da aynı ölçütü kullanıyor: **vana kolu akış yönündeyse açık**, akış yönünün enine duruyorsa kapalıdır.

**5. Vanalar açıksa bir kez resetle.** Buderus'un 6A sayfası iki yol veriyor: **kombiyi açıp kapatmak** ya da **resetleme tuşuna birkaç saniye basılı tutmak.** Modele göre tuş farklı:

- **GB072:** ekranda **Reset** yazısı görünene kadar reset tuşunu basılı tut. Cihaz tekrar çalışır ve gidiş suyu sıcaklığı görünür.
- **U072:** kılavuz iki durumu ayırıyor. Ekranda iki arıza sembolü birlikte görünüyorsa **ok** tuşuna basıp semboller kaybolana kadar basılı tut. Tek sembol görünüyorsa cihazı **Stand-by (bekleme modu)** tuşuyla kapatıp tekrar çalıştır.

Bir sınır var: Buderus'un **EP** ve **Fd** sayfalarına göre reset tuşuna **30 saniyeyi aşmayacak** şekilde basılmalı; tuşa bundan uzun basmak ekranda EP ya da Fd kodu olarak görünür.

**6. Kod geri geliyorsa dur.** Reset sonrası 6A sürüyorsa Buderus'un sayfası açık: kombinin bazı parçalarında arıza yaşanmış olabilir ve çözüm için **Buderus yetkili servisine** ulaşılmalı.

## Neden tekrar tekrar resetlememelisin

Reset, sebep ortadan kalkmışsa kombiyi yeniden çalıştırır; sebebi gidermez. Buderus'un GB172i.2 kılavuzu bunu açıkça uyarıyor: bir arızayı sıfırlamak için **tekrarlanan girişimler cihazın güvenlik nedeniyle bloke olmasına** yol açabilir (arıza kodu **2980**). Bu blokaj ancak uzman bir şirket ya da müşteri hizmetleri arızanın nedenini yerinde bulup giderdikten sonra kaldırılabilir. Bir kez dene; kod geri geliyorsa servise geç.

## Ne zaman doğrudan servis

- Gaz vanaları açık olduğu hâlde 6A resetten sonra geri geliyorsa.
- Ekranda 6A değil **6C** yazıyorsa: Buderus'un tanımına göre 6C, gaz kesildikten sonra alev algılandığını gösterir; sayfanın tek çözümü yetkili servise başvurmaktır.
- Gaz kokusu varsa: önce yukarıdaki liste, sonra gaz dağıtım şirketi.

Kılavuzlar servisi ararken **arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor. U072 kılavuzuna göre bu bilgiler **kumanda paneli kapağındaki tip etiketinde** yazılıdır; GB072 kılavuzu tip etiketini ya da ön kapaktaki cihaz tipi çıkartmasını gösteriyor. Kombinin dış sacını açma: Buderus'un kılavuzları dış sacın asla sökülmemesini ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

## Servisi aramadan önce kısa kontrol

1. Gaz kokusu yok mu?
2. Ocak yanıyor mu?
3. Kombinin yanındaki gaz vanası boruyla aynı hizada mı?
4. Reset bir kez denendi mi, kod geri geldi mi?
5. Model adı tip etiketinden okundu mu?

Diğer Buderus kodları için [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) yazısına, markadan bağımsız ateşleme belirtileri için [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına bakabilirsin.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
