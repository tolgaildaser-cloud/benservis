---
title: "Samsung çamaşır makinesi dC hatası"
description: "Samsung çamaşır makinesi dC (dE) hatası: makine kapak açıkken çalıştırılmaya çalışılıyor. Conta kenarı, küçük parçalar ve AddWash kapağı kontrolü."
slug: "samsung-camasir-makinesi-dc-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K2) Kılavuz WW4000T (WW90T4020CE, AddWash'lı), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  K3) WW5000T TR md5 402b21c11194758ab81d7af5f78ffd4d (dC satırı s.55, birebir aynı)
#  U1) Samsung UK "What do the codes on my washing machine mean?" (Updated 19 Feb 2025)
#      https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/  md5 703e8a9b09d5950e5fce8318c856f30f
# Birebir alıntılar:
#   K1 s.58 dC: "Çamaşır makinesi kapak açık olarak çalıştırılıyor." · "Kapağın düzgün bir şekilde kapalı olduğundan emin olun." · "Kapağa çamaşır sıkışmadığından emin olun."
#   K2 s.59 DDC, ddC: "Başlat/Duraklat düğmesine basmadan AddWash Kapağı öğesini açtığınızda bu mesaj görünür." + iki çözüm yolu
#   K2 s.59 DC1: "Ana Kapak kilitleme/kilidi açma işlemi düzgün çalışmıyor." · DC3: "AddWash Kapağı kilitleme/kilidi açma işlemi düzgün çalışmıyor." →
#       "Makineyi kapatın ve programı yeniden başlatın." · "Bilgi kodu kalırsa, yerel bir Samsung servis merkezine başvurun."
#   U1 "dC, DC, DC1, dE, dE1 — Door issues": "Check that the door is fully closed and that nothing is trapped in the door." + yükleme için kılavuza bak
#   K1 s.29: "Çoraplar, eldivenler, mendiller gibi küçük, hafif giysiler kapağın etrafına takılabilirler. Bu tür çamaşırları çamaşır filesine koyun."
#   K1 s.57: "Kapı ile diyafram arasında sıkışmış bir şey varsa diyaframda sızıntıya veya hasara neden olabilir."
#   K1 s.54 Başlamıyor: kapak düzgün kapalı · Başlat/Duraklat · Çocuk Kilidi etkin değil · dolmadan önce kapak kilidini kontrol için "bir dizi tık sesi"
#   K1 s.55 Kapak açılmıyor: kilit açılması birkaç dakika · durduktan/kapatıldıktan sonra 3 dakika içinde açılmaz · kazanda su varsa açılmayabilir · kapak kilidi ışığı
#   K1 s.43 Çocuk Kilidi: Güç hariç tüm düğmeleri kilitler; Sıcaklık + Sıkma 3 saniye (bu model) · s.12 kapağı kapatırken çocuk parmakları
# Bilerek YAZILMAYANLAR: "bazı modellerde dC = dengesiz yük" (bu koşuda indirilen Samsung belgelerinde yok; hub'daki çekince bulunamadı listesine) ·
#   kapak kilidi/menteşe/kilit mekanizması teşhisi ve değişimi · kapağı zorla açma · kapak kapanırken "klik" sesi (ana kapak için belgede yok; yalnız AddWash için var).
# Alıntı denetim tablosu: samsung-camasir-makinesi-dc-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Çamaşır filesi (varsa)"]
steps:
  - "Kapağı aç ve kapak ile conta (diyafram) arasına takılmış çamaşır olup olmadığına bak."
  - "Dışarı taşan kol, çorap ya da havlu ucunu kazanın içine it."
  - "Çorap, eldiven, mendil gibi küçük parçaları çamaşır filesine koy."
  - "Kapağı düzgün bir şekilde kapat."
  - "Programı Başlat/Duraklat düğmesiyle başlat."
  - "AddWash'lı modelde DDC ya da ddC görürsen AddWash kapağına bastırıp kapat, sonra Başlat/Duraklat'a bas."
  - "Kod sürerse makineyi kapat ve programı yeniden başlat; yine sürerse Samsung servisine başvur."
faq:
  - q: "Samsung çamaşır makinesi dC hatası ne demek?"
    a: "Samsung kılavuzundaki bilgi kodları tablosunda dC'nin karşılığı: çamaşır makinesi kapak açık olarak çalıştırılıyor. Önerilen iki kontrol, kapağın düzgün kapalı olduğundan ve kapağa çamaşır sıkışmadığından emin olmaktır."
  - q: "dC ile dE aynı mı?"
    a: "Samsung'un UK destek sayfası dC, DC, DC1, dE ve dE1 kodlarını aynı satırda kapakla ilgili sorunlar olarak veriyor ve kapağın tam kapalı olduğunun, kapağa bir şey takılmadığının kontrol edilmesini istiyor. Ekranda hangisinin görüneceği modele göre değişir."
  - q: "Ekranda DDC ya da ddC yazıyor, bu nedir?"
    a: "Samsung'a göre bu mesaj, Başlat/Duraklat düğmesine basmadan AddWash kapağı açıldığında görünür. AddWash kapağına bastırıp düzgünce kapat ve Başlat/Duraklat'a bas; çamaşır eklemek istiyorsan AddWash kapağını açıp çamaşırı ekle, kapağı kapat ve Başlat/Duraklat ile devam et."
  - q: "DC1 ya da DC3 görüyorum, kapağı mı kapatmadım?"
    a: "Hayır, bunlar farklı kodlar. Samsung kılavuzuna göre DC1 ana kapağın, DC3 AddWash kapağının kilitleme ya da kilit açma işleminin düzgün çalışmadığını gösterir. Makineyi kapatıp programı yeniden başlat; kod kalırsa yerel Samsung servis merkezine başvur."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin yarı açık kapağında, cam ile gri lastik conta arasından dışarı sarkan bir çorap ucu"
---

Çamaşırları koydun, kapağı kapattın ve başlat'a bastın; makine çalışmadı ve ekranda **dC** yazıyor. Samsung'un kullanım kılavuzundaki bilgi kodları tablosunda bu kodun karşılığı: **"Çamaşır makinesi kapak açık olarak çalıştırılıyor."** Samsung'un UK destek sayfası aynı durumu modele göre **dE** olarak da gösterebilen kapı kodlarını birlikte veriyor.

Kılavuzun bu kod için istediği iki kontrol var: kapağın **düzgün kapalı** olması ve kapağa **çamaşır sıkışmaması.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** dC / dE = Samsung'a göre kapak açıkken çalıştırılmaya çalışılıyor. Sıra şu: kapağı aç → conta kenarına takılan çamaşırı içeri it → küçük parçaları fileye koy → kapağı düzgün kapat → Başlat/Duraklat. AddWash'lı modelde DDC/ddC ayrı bir mesajdır. Kod sürerse makineyi kapatıp yeniden başlat; sürerse Samsung servisi.

## Adım adım: evde denenecekler

**1. Conta kenarına bak.** Kapağı aç ve cam ile lastik conta (Samsung'un deyişiyle diyafram) arasına bak. Samsung'un tablo önerisi: **kapağa çamaşır sıkışmadığından** emin ol.

**2. Taşan ucu içeri it.** Bir kol, çorap ya da havlu ucu conta ile kapak arasına taşmışsa kazanın içine it. Kılavuz, kapı ile diyafram arasında bir şey sıkışırsa bunun **diyaframda sızıntıya ya da hasara** yol açabileceği uyarısını da yapıyor.

**3. Küçük parçaları fileye koy.** Samsung'a göre **çorap, eldiven, mendil** gibi küçük ve hafif giysiler kapağın etrafına takılabilir. Kılavuzun önerisi, bu tür çamaşırları bir **çamaşır filesine** koymak.

**4. Kapağı düzgün kapat.** Kapağı tam olarak kapat. Kapatırken çocukların parmaklarının kapağa sıkışmamasına dikkat et; kılavuz bunu ayrıca uyarıyor.

**5. Başlat.** Programı **Başlat/Duraklat** düğmesiyle başlat. Kılavuza göre makine dolmaya başlamadan önce kapağın kilitli olduğunu kontrol etmek için **bir dizi tık sesi** çıkarır; bu normaldir.

**6. AddWash kapağına bak.** Makinende çalışırken çamaşır eklemeye yarayan **AddWash** kapağı varsa ve ekranda **DDC** ya da **ddC** görüyorsan, Samsung'a göre bu kapak Başlat/Duraklat'a basmadan açılmıştır. AddWash kapağına bastırıp düzgünce kapat, sonra Başlat/Duraklat'a basıp yeniden dene.

**7. Sürerse yeniden başlat, sonra servis.** Kapak kapalı, contada bir şey yok ve kod hâlâ geliyorsa makineyi kapatıp programı yeniden başlat. Samsung kılavuzunun genel kuralı: ekranda bir bilgi kodu görüntülenmeye devam ediyorsa **yerel Samsung servis merkezi** ile iletişime geç.

## dC, DDC ve DC1: benzer ama farklı üç mesaj

Samsung kılavuzlarında kapakla ilgili birkaç ayrı kod var ve anlamları aynı değil:

- **dC (bazı modellerde dE):** makine kapak açık olarak çalıştırılıyor. Kapağı düzgün kapat, çamaşır sıkışmasına bak.
- **DDC / ddC:** AddWash kapağı Başlat/Duraklat'a basılmadan açılmış. AddWash kapağını kapatıp Başlat/Duraklat'a bas; çamaşır eklemek istiyorsan AddWash kapağını açıp çamaşırı ekle, kapağı düzgünce kapat ve Başlat/Duraklat ile devam et.
- **DC1 / DC3:** ana kapağın (DC1) ya da AddWash kapağının (DC3) kilitleme veya kilit açma işlemi düzgün çalışmıyor. Samsung'un önerisi makineyi kapatıp programı yeniden başlatmak; bilgi kodu kalırsa yerel Samsung servis merkezine başvurmak.

Diğer Samsung kodları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Makine başlamıyor ama kod yok: çocuk kilidi

Ekranda kod yoksa ve düğmeler tepki vermiyorsa kılavuzun "Başlamıyor" listesine bak: makinenin prize takılı olması, kapağın düzgün kapalı olması, muslukların açık olması ve **Çocuk Kilidi'nin etkin olmaması** gerekiyor. Samsung'a göre Çocuk Kilidi, Güç hariç tüm düğmeleri kilitler. Kılavuzu incelediğimiz modelde kilit, **Sıcaklık ve Sıkma** düğmelerine aynı anda **3 saniye kadar** basılı tutularak kaldırılıyor; tuş ikilisi modele göre değişebilir, kendi kılavuzuna bak. Markadan bağımsız kontroller için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısı var.

## Kapak açılmıyorsa zorlama

dC'nin tersi de olur: program bitmiş ama kapak açılmıyor. Samsung'a göre kapak kilidinin açılması **birkaç dakika** sürebilir ve makine durduktan ya da kapatıldıktan sonraki **3 dakika** içinde kapak açılmaz. Kazanda su kalırsa kapak açılamayabilir; kapak kilidi ışığı, makine boşaldıktan sonra söner. Ayrıntılı sıra [çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısında.

## Ne zaman servis

Kapak düzgün kapalı, conta kenarı boş, AddWash kapağı kapalı ve makineyi kapatıp yeniden başlattığın hâlde dC ya da DC1/DC3 sürüyorsa kullanıcıya verilen kontroller bitmiş demektir. Samsung'un yönlendirmesi yerel Samsung servis merkezidir.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **kapağı kapatmak ve conta kenarı kullanıcıya; kapak kilidi ve makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Ekrandaki kod dC mi, DDC mi, DC1/DC3 mü?
2. Conta ile kapak arasında çamaşır var mıydı?
3. Makinede AddWash kapağı var mı, kapalı mı?
4. Makineyi kapatıp yeniden başlatınca kod geçti mi?
5. Küçük parçalar fileye kondu mu?

Bu beşine cevabın varsa servise "kapak hatası" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
