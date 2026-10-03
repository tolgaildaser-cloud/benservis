---
title: "Haier bulaşık makinesi çalışmıyor"
description: "Haier bulaşık makinesi hiç program başlatmıyorsa Haier kılavuzundaki sebepler: fiş, AÇMA/KAPATMA, açık kapak, elektrik, çocuk kilidi ve gecikmeli başlatma."
slug: "haier-bulasik-makinesi-calismiyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu ek iş, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/bulasik-makineleri/32002551/xf-6c2m1pw/  md5 bc901fec25571c5bac2c34d61689b1f9
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2024/12/17339313/MAN-000188921_000  52 s.  md5 d7eb6eaf5e86d8bc40af5485fe50a9d9
#   ⚠ PDF metadata başlığı "XF 5C7M0W-17 TR (70060910)"; metinde XF-6C2M1PW geçmiyor. Sayfa = PDF sayfası. s.46 tablo düzeni sayfa görüntüsünden doğrulandı.
# Ana satır (s.46, Diğer arızalar 1 "Hiç program çalışmıyor"): "Fiş prize takılmamıştır → Elektrik fişini takın" · "AÇMA/KAPATMA (O/I) düğmesine basılmamıştır → Düğmeye basın" · "Kapak açıktır → Kapağı kapatın" · "Elektrik kesilmiştir → Kontrol edin"
# Diğer: s.37 ""AÇMA/KAPATMA" düğmesini yaklaşık 3 saniye basılı tutarak bulaşık makinesini açın." · s.29 "Makineyi açmak için AÇMA/KAPATMA düğmesini basılı tutun" · s.29 Bir Programın Kesilmesi "kapak açılırsa makine otomatik olarak durur. Herhangi bir tuşa basmadan kapağı kapatın. Program kaldığı yerden başlayacaktır."
#   · s.36 Çocuk kilidi: ""ÇOCUK KİLİDİ" düğmesine yaklaşık 5 saniye basın." · "Ekranda "ÇOCUK KİLİDİ AÇIK" yazısı görünecek" · "Yalnızca "AÇMA/KAPAMA" düğmesi aktif kalacaktır." · devre dışı: "yaklaşık 5 saniye basın" · "Ekranda "KİLİT KAPALI" görünecek"
#   · s.36-37 Gecikmeli başlatma: "0:30 ile 24 saat arasında bir gecikmeyle yıkama programının başlangıcını programlamanıza olanak tanır." · iptal: ""BAŞLAT/SIFIRLA" düğmesini 3 saniye basılı tutun. Ekranda "SIFIRLA" gösterilecek" · "Gecikmeli başlatma ve seçilen program iptal edilecektir."
#   · s.37 "Elektrik kesintisi veya kapanma durumunda, bulaşık makinesi çalıştırmadan önce kalan süreyi saklar ve bu süre, elektrik geri gelir gelmez veya makine tekrar açılır açılmaz kesildiği noktadan devam eder."
#   · s.38 DEMO MODU: ""DEMO ON" mesajı ekranda iki kez kaydırılarak" · devre dışı: "DAİMA işlemi bulaşık makinesi kapalıyken başlatın." · ""AÇMA/KAPATMA" düğmesine ve "YARIM YÜK" düğmelerine aynı anda 10 saniye boyunca basın." · ""DEMO OFF" mesajı ekranda iki kez kayar." · "(Sadece satış noktalarında kullanılacak tanıtım programı)"
#   · s.46 göstergesiz modeller: ışık hızla yanıp söner → kapat, kontrol, programı yeniden ayarla · s.45 Diğer kodlar: "kapatın ve fişini çekin, bir dakika bekleyin. Makineyi açın ve bir program başlatın."
# BİLEREK YAZILMAYANLAR: priz/sigorta/kablo müdahalesi · kart/kapı kilidi teşhisi · Wi-Fi uzaktan kontrol ayrıntısı · fiyat. Not: çocuk kilidi, gecikmeli başlatma ve demo modu panel/model donanımına bağlı (kılavuz "yalnızca bazı modellerde" ayrımı yapıyor); yazıda "panelinde varsa" diye verildi.
# Alıntı denetim tablosu: haier-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Makinenin fişinin prize takılı olduğunu kontrol et."
  - "Evde elektrik kesintisi olup olmadığını kontrol et."
  - "AÇMA/KAPATMA düğmesini yaklaşık 3 saniye basılı tutarak makineyi aç."
  - "Kapağı tam kapat; program sırasında açtıysan hiçbir tuşa basmadan kapatman yeterli."
  - "Ekranda ÇOCUK KİLİDİ AÇIK yazıyorsa ÇOCUK KİLİDİ düğmesine yaklaşık 5 saniye basarak kilidi kapat."
  - "Gecikmeli başlatma ayarlı kaldıysa BAŞLAT/SIFIRLA düğmesini 3 saniye basılı tutarak iptal et ve programı yeniden seç."
faq:
  - q: "Haier bulaşık makinem neden hiç program başlatmıyor?"
    a: "Haier'in XF-6C2M1PW ürün sayfasından bağlanan kılavuzunda 'Hiç program çalışmıyor' satırı dört sebep sayıyor: fiş prize takılmamış, AÇMA/KAPATMA düğmesine basılmamış, kapak açık ya da elektrik kesilmiş. Çözümler sırasıyla fişi takmak, düğmeye basmak, kapağı kapatmak ve elektriği kontrol etmek."
  - q: "Ekranda DEMO ON yazıyor, ne demek?"
    a: "Kılavuza göre demo modu yalnız satış noktalarında kullanılacak bir tanıtım programı. Kapatmak için işleme makine kapalıyken başla, AÇMA/KAPATMA ve YARIM YÜK düğmelerine aynı anda 10 saniye bas; ekranda DEMO OFF yazısı iki kez kayar ve makine kapanır. Bundan sonra makine normal modda açılır."
  - q: "Elektrik gidip gelince program baştan mı başlar?"
    a: "Hayır. Haier'e göre elektrik kesintisi ya da kapanma durumunda makine kalan süreyi saklıyor ve elektrik gelir gelmez ya da makine tekrar açılır açılmaz kaldığı noktadan devam ediyor."
  - q: "Tuşlara basıyorum ama yalnız AÇMA/KAPATMA çalışıyor, neden?"
    a: "Bu çocuk kilidinin belirtisi. Kılavuza göre çocuk kilidi açıkken yalnız AÇMA/KAPAMA düğmesi aktif kalıyor. ÇOCUK KİLİDİ düğmesine yaklaşık 5 saniye basınca ekranda KİLİT KAPALI yazıyor ve kısa bir bip sesi duyuluyor."
images:
  coverAlt: "Kapağı kapalı bir bulaşık makinesinin üst kenarındaki kontrol paneli ve AÇMA/KAPATMA düğmesine uzanan bir parmak"
---

Bulaşıkları yerleştirdin, programı seçtin ama makine başlamıyor. Haier'in XF-6C2M1PW ürün sayfasından bağlanan bulaşık makinesi kılavuzundaki "Diğer arızalar" tablosunun ilk satırı tam bu durum: **"Hiç program çalışmıyor."** Haier burada dört sebep sayıyor: **fiş prize takılmamıştır**, **AÇMA/KAPATMA (O/I) düğmesine basılmamıştır**, **kapak açıktır** ve **elektrik kesilmiştir.** Kılavuzun kontrol paneli bölümü bunlara üç ihtimal daha ekliyor: devrede unutulan **çocuk kilidi**, ayarlı kalmış **gecikmeli başlatma** ve mağazadan kalma **demo modu.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı, elektrik var mı, AÇMA/KAPATMA 3 saniye basılı tutuldu mu, kapak tam kapalı mı? Çocuk kilidi, gecikmeli başlatma ya da ekranda DEMO ON varsa onları kapat.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Haier'in ilk sebebi: **fiş prize takılmamıştır** → **elektrik fişini takın.**

**2. Elektriği kontrol et.** Tablodaki dördüncü sebep: **elektrik kesilmiştir**; Haier'in çözümü kısa: **kontrol edin.** Kesinti bittiğinde endişelenme; kılavuza göre makine **kalan süreyi saklar** ve elektrik gelir gelmez **kesildiği noktadan devam eder.**

**3. Makineyi aç.** Haier'e göre sebep **AÇMA/KAPATMA (O/I) düğmesine basılmamıştır** olabilir → **düğmeye basın.** Gecikmeli başlatma bölümündeki sıra, makineyi **"AÇMA/KAPATMA" düğmesini yaklaşık 3 saniye basılı tutarak** açmanı söylüyor; kısa bir dokunuş yetmeyebilir.

**4. Kapağı kapat.** Tablodaki sebep: **kapak açıktır** → **kapağı kapatın.** Program sırasında kapağı açtıysan Haier'e göre makine **otomatik olarak durur**; **herhangi bir tuşa basmadan kapağı kapat**, **program kaldığı yerden başlayacaktır.**

**5. Çocuk kilidini kapat.** Panelinde ÇOCUK KİLİDİ düğmesi olan modellerde kilit açıkken Haier'e göre **yalnızca "AÇMA/KAPAMA" düğmesi aktif kalıyor.** Ekranda **"ÇOCUK KİLİDİ AÇIK"** görüyorsan **"ÇOCUK KİLİDİ" düğmesine yaklaşık 5 saniye** bas; ekranda **"KİLİT KAPALI"** yazacak ve **kısa bir bip sesi** duyulacak.

**6. Gecikmeli başlatmayı iptal et.** Kılavuza göre gecikmeli başlatma programın başlangıcını **0:30 ile 24 saat arasında** ileri atıyor; yani makine aslında bekliyor olabilir. İptal için Haier'in yolu: **"BAŞLAT/SIFIRLA" düğmesini 3 saniye basılı tut**; ekranda **"SIFIRLA"** görünür ve **gecikmeli başlatma ve seçilen program iptal edilir.** Ardından istediğin programı yeniden seç.

## Ekranda DEMO ON ya da yanıp sönen ışıklar

Makine açıldığında ekranda **"DEMO ON"** mesajı kayıyorsa demo modu açık; Haier bunu **sadece satış noktalarında kullanılacak tanıtım programı** olarak tanımlıyor. Kapatmak için işleme **daima bulaşık makinesi kapalıyken** başla, **"AÇMA/KAPATMA" ve "YARIM YÜK" düğmelerine aynı anda 10 saniye** bas; ekranda **"DEMO OFF"** iki kez kayar ve makine kapanır. Bundan sonra makine **normal modda** açılır.

Göstergesiz modellerde program sırasında **gösterge ışığı hızla yanıp söner** ve **kesik kesik ses** gelirse Haier makineyi **AÇMA/KAPATMA ile kapatmanı**, su kaynağını, boşaltma borusunu, sifonu ve filtreleri kontrol edip **seçili programı yeniden ayarlamanı** istiyor. Ekranlı modellerde listede olmayan bir kod görürsen genel kural: **kapatın ve fişini çekin, bir dakika bekleyin**, makineyi açıp **bir program başlatın.**

Makine açılıyor ama su almıyorsa [Haier bulaşık makinesi su almıyor](/blog/haier-bulasik-makinesi-su-almiyor/), suyu boşaltmıyorsa [Haier bulaşık makinesi su boşaltmıyor](/blog/haier-bulasik-makinesi-su-bosaltmiyor/) yazısına bak. Markadan bağımsız anlatım için [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) yazısı var.

## Ne zaman servis

Haier'in "Diğer kodlar" satırına göre makineyi kapatıp fişini çektikten, bir dakika bekleyip yeniden başlattıktan sonra **hata tekrar meydana gelirse Yetkili Müşteri Hizmetleri Merkezi ile iletişime geç.** Kılavuz, yedek parça listesi dışında **cihazı kendi başına tamir etmemeni** öneriyor.

⛔ **Kendin-çöz sınırı burada biter.** Fiş takılı, elektrik var, kapak kapalı, çocuk kilidi ve gecikmeli başlatma kapalı olduğu hâlde makine hiçbir programı başlatmıyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
