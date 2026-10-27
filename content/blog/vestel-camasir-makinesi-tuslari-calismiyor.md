---
title: "Vestel çamaşır makinesi tuşları çalışmıyor: CL ve çözümü"
description: "Vestel çamaşır makinesinde tuşlar ya da dokunmatik panel tepki vermiyorsa çocuk kilidi, bekleme, gecikmeli başlatma ve Wi-Fi uzaktan kontrolüne bak."
slug: "vestel-camasir-makinesi-tuslari-calismiyor"
date: "2026-10-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-28 PAZ alt ajanı (YK #189 günlük yazı, tür: hata/belirti; koşu 27 Eki 16:31). origin/main b930c112 content/blog/ altında bu slug ve "tuşları çalışmıyor"
#   başlıklı Vestel çamaşır sayfası YOK (yalnız vestel-firin-tuslari-calismiyor). Yakın sayfalar: vestel-camasir-makinesi-calismiyor (çalışmaya başlamıyor tablosu),
#   vestel-camasir-makinesi-sembolleri-ve-anlamlari (CL satırı). Hub vestel-camasir-makinesi-hata-kodlari yalnız E01-E04; bu yazı kod sayfası değil, belirti sayfası (#164).
# GSC (www-9, 7 gün): "vestel çamaşır makinesi ışıkları yanıyor ama çalışmıyor" 24 · "…dokunmatik çalışmıyor" 15 · "…elektrik var ama çalışmıyor" 12 · "…başlat düğmesi çalışmıyor" 10 gösterim.
# OT (27 Eki 16:35, hl=tr gl=tr): "vestel çamaşır makinesi tuşları" → 1. …tuşları çalışmıyor · "vestel çamaşır makinesi dokunmatik" → 1. …dokunmatik çalışmıyor · 2. …dokunmatik başlat düğmesi çalışmıyor.
# Belge (#88) bu koşuda curl ile statik.vestel.com.tr'den indirildi (5/5 HTTP 200); zincir "üretici alan adı + kapak ibaresi (VESTEL)":
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf md5 c7607ad9886b39d7be76043a5285bfba (sayfa atıfları bu belgeye göre)
#  A) CMI 86201 20264687_k.pdf 7a5f38c8ae4890b1b1e7e691f2de1950 · B) CMI 106221 20264677_k.pdf 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI 20265394_k.pdf 609c99fc8bc6b4bc3d75f8c31017b37f · D) KCMI 98142 WIFI 20263189_k.pdf 9e654374ff661c2fb154e0c548526d7c
# Çocuk kilidi metni 5/5 aynı ("4. ve 5. tuşlarının ikisine aynı anda 3 sn"); çizim A, D, E sayfa görüntüsünden doğrulandı: Başlat/Beklet'in solundaki iki tuş.
# Wi-Fi uzaktan kontrol metni C, D, E'de aynı (TR-18).
# BİLEREK YAZILMAYANLAR: "fişi çekip bekle" reseti (belgede yok) · düşük enerji modunda ekranın nasıl uyanacağı (belgede yok) · kart, tuş takımı, dokunmatik panel
#   arızası teşhisi (belgede yok; #31) · E19, E09, "EL" kodları (Vestel çamaşır tablosu E01-E04) · fiyat (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-tuslari-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Göstergeye bak; CL sembolü yanıyor ya da tuşa basınca yanıp sönüyor mu kontrol et."
  - "CL varsa çocuk kilidini kapat: kilidi açan iki tuşa aynı anda 3 saniyeden uzun bas."
  - "Kapağı kilitlendiğini duyana kadar it; kapı tam kapalı değilse makine başlamaz."
  - "Başlat/Beklet ledi yanıp sönüyorsa makine beklemededir; Başlat/Beklet tuşuna dokun."
  - "Göstergede gecikmeli başlatma simgesi varsa makine bekliyordur; gecikmeyi iptal et ya da süreyi bekle."
  - "Wi-Fi'li modelde ekran kapandıysa ya da uygulama programı değiştiremiyorsa uzaktan kontrol ayarını ve çocuk kilidini kontrol et."
  - "Tuşlar hâlâ tepki vermiyorsa fişi çek, musluğu kapat ve Vestel yetkili servisine başvur."
faq:
  - q: "Vestel çamaşır makinesinin tuşları neden çalışmıyor?"
    a: "Vestel kılavuzlarında en sık sebep çocuk kilidi. Kilit devredeyken göstergede CL yanar ve herhangi bir tuşa basınca CL yanıp söner; tuşlar ve program düğmesi programı değiştirmez. Bunun dışında makine beklemede olabilir, gecikmeli başlatma kurulmuş olabilir ya da kapak tam kapanmamış olabilir."
  - q: "Vestel çamaşır makinesinde CL nasıl kapatılır?"
    a: "Kilidi devreye sokan aynı iki tuşa aynı anda 3 saniyeden uzun basılır; kilit kalkınca CL söner. İncelenen beş Vestel kılavuzunda bu iki tuş göstergedeki 4. ve 5. tuş, çizimde Başlat/Beklet tuşunun hemen solundaki iki tuş. Tuş sırası modelden modele değişebilir; kendi kılavuzunun Çocuk Kilidi bölümüne bak."
  - q: "Program düğmesini çeviriyorum ama program değişmiyor, neden?"
    a: "Kılavuza göre bir program çalışırken çocuk kilidi devredeyse, program düğmesi İPTAL konumuna getirilip başka bir program seçilse bile önceki program kaldığı yerden devam eder. Önce çocuk kilidini kapat, sonra programı İPTAL konumundan iptal et."
  - q: "Wi-Fi'li Vestel çamaşır makinesinde ekran neden kapanıyor?"
    a: "Kılavuza göre uzaktan kontrolü aktif hale getirilmiş makine, hiçbir işlem yapılmazsa belli bir süre sonra düşük enerji tüketimi moduna geçer ve ekranı kapanır. Bu bir arıza uyarısı değil, kılavuzun tarif ettiği bir çalışma durumu."
  - q: "Uygulamadan programı değiştiremiyorum, ne yapmalıyım?"
    a: "Kılavuza göre her kullanımdan önce Sıcaklık Ayar ve Devir Ayar tuşlarına aynı anda 3 saniye basarak uzaktan kontrolü aktif etmen gerekir. Bu adım atlanırsa uygulamadan yalnız görüntüleme yapılır. Makinede çocuk kilidi açıksa uzaktan kontrol de çalışmaz."
images:
  coverAlt: "Beyaz, önden yüklemeli bir çamaşır makinesinin program düğmesi ve dokunmatik tuşları olan kontrol paneli"
  steps:
    - "Çamaşır makinesinin dijital göstergesinde yanan iki harfli bir sembol"
    - "Kontrol panelinde Başlat/Beklet tuşunun yanındaki iki dokunmatik tuş"
    - "Tamamen kapatılmış çamaşır makinesi kapağı ve çevresindeki conta"
    - "Kontrol panelinde Başlat/Beklet tuşu ve üstündeki küçük gösterge ışığı"
    - "Dijital göstergede saat biçiminde bir gecikme simgesi"
    - "Çamaşır makinesinin yanında masada duran bir akıllı telefon"
    - "Duvardaki prizden çekilmiş bir çamaşır makinesi fişi"
---

Programı seçtin, tuşlara basıyorsun ama makine tepki vermiyor. Ya da ışıklar yanıyor, dokunmatik panel duruyor, Başlat tuşu hiçbir şey yapmıyor. Vestel çamaşır makinelerinde bunun çoğu zaman bir arıza değil, kılavuzda adı geçen bir **çalışma durumu** olduğunu görüyoruz: çocuk kilidi, bekleme modu, gecikmeli başlatma ya da Wi-Fi'li modellerde uzaktan kontrol. Bu yazı Vestel'in kendi sitesinde yayımlanan beş çamaşır makinesi kılavuzuna dayanıyor (CMI 86201, CMI 106221, CMI 87302 WIFI, KCMI 98142 WIFI, CMI 128222 WIFI). Senin modelin farklıysa tuş sırası değişebilir; kendi kılavuzuna bak.

## Önce göstergeye bak

Kılavuza göre elektronik gösterge yıkama suyu sıcaklığını, sıkma devrini ve makinenin ne kadar sonra çalışmaya başlayacağını gösteriyor. Bir hata oluştuğunda hata sembolüyle uyarıyor, program bitince "End" yazıyor. Yani tuşlar tepki vermiyorsa ilk ipucu ekranda.

| Göstergede ne var? | Ne demek | Ne yapmalı |
|---|---|---|
| **CL** yanıyor ya da tuşa basınca yanıp sönüyor | Çocuk kilidi devrede | Aynı iki tuşa 3 saniyeden uzun bas |
| **Başlat/Beklet ledi** yanıp sönüyor | Makine bekleme modunda | Başlat/Beklet tuşuna dokun |
| **Gecikmeli başlatma** simgesi ve süre | Makine sonra başlamak üzere bekliyor | Süreyi bekle ya da gecikmeyi iptal et |
| **E01, E02, E03, E04** | Otomatik arıza uyarısı | [Vestel hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/) |
| Ekran tamamen kapalı (Wi-Fi'li model) | Düşük enerji tüketimi modu olabilir | Uzaktan kontrol ayarına bak |

## Adım adım: tuşlar tepki vermiyorsa

**1. CL sembolüne bak.** Kılavuza göre çocuk kilidi, yıkama sırasında tuşlara basıldığında ya da program düğmesi çevrildiğinde program akışı etkilenmesin diye var. Kilit devreye girince göstergede **"CL"** yanıyor. Kilit devredeyken herhangi bir tuşa bastığında CL **yanıp sönüyor**. Yani CL yanıp sönüyorsa tuş bozuk değil, kilit devrede (çıkarım: kılavuz bunu tuş arızası olarak değil, kilidin işareti olarak anlatıyor).

**2. Çocuk kilidini kapat.** Kılavuz kilidi açmanın ve kapatmanın yolunu aynı veriyor: göstergedeki **4. ve 5. tuşa aynı anda 3 saniyeden uzun** bas. İncelediğimiz beş kılavuzun çiziminde bu iki tuş, **Başlat/Beklet tuşunun hemen solundaki** iki tuş. Kilit kalkınca CL söner. Önemli bir ayrıntı: kılavuza göre program çalışırken kilit açıksa, program düğmesini İPTAL konumuna getirip başka bir program seçsen bile önceki program kaldığı yerden devam ediyor. "Düğme çalışmıyor" hissinin sebebi çoğu zaman bu.

**3. Kapağı tam kapat.** Kılavuz açık: makinenin kapısı tam olarak kapatılmazsa makine yıkama işlemini başlatmıyor. Kapağı, **kilitlendiğini duyana kadar** it. Kapak ile conta arasında çamaşır kalmadığına bak. Göstergede E01 çıkıyorsa kapı uyarısıdır; ayrıntısı hata kodları sayfasında.

**4. Başlat/Beklet ledine bak.** Kılavuza göre Başlat/Beklet tuşu seçtiğin programı başlatıyor ya da çalışan programı beklemeye alıyor. Makine bekleme modundayken **Başlat/Beklet ledi yanıp sönüyor**. Ledi yanıp sönüyorsa makine bozuk değil, bekliyor; Başlat/Beklet tuşuna dokun. Küçük arızalar tablosunda da "Başlat/beklet tuşuna basılmamış" sebebi var.

**5. Gecikmeli başlatmayı kontrol et.** Bu fonksiyonla makine yıkamaya **1 ile 23 saat** arasında geç başlıyor. Göstergede gecikme simgesi ve süre görünüyorsa makine sayıyor, henüz yıkamıyor. Kılavuza göre gecikmeyi iptal etmek için: Başlat/Beklet'e basıp makineyi çalıştırdıysan gecikme tuşuna bir kez bas; basmadıysan simge sönene kadar gecikme tuşuna basmaya devam et.

**6. Wi-Fi'li modelde uzaktan kontrole bak.** Kılavuza göre uzaktan kontrolü aktif edilmiş makine, hiçbir işlem yapılmazsa belli bir süre sonra **düşük enerji tüketimi moduna** geçiyor ve **ekranı kapanıyor**. Uzaktan kontrolü açmak ve kapatmak için **Sıcaklık Ayar ve Devir Ayar** tuşlarına aynı anda 3 saniye basılıyor. Bu adım atlanırsa uygulamadan yalnız görüntüleme yapılıyor, program değiştirilemiyor. Makinede çocuk kilidi açıksa uzaktan kontrol çalışmıyor. Bir de kılavuzun notu: kapak açıkken Wi-Fi kurulumu yapılmıyor.

**7. Hâlâ tepki yoksa servise başvur.** CL yok, kapak kilitli, Başlat/Beklet'e dokundun, gecikme ve uzaktan kontrol kapalı ve tuşlar hâlâ tepki vermiyorsa sıra kullanıcıda değil. Kılavuzun genel talimatı net: herhangi bir arıza durumunda önce cihazın fişini çek, musluğu kapat, kendin tamir etmeye çalışma.

## Işıklar yanıyor ama hiç başlamıyor mu?

Tuşlar değil de makinenin kendisi hiç başlamıyorsa Vestel'in küçük arızalar tablosundaki "Makineniz çalışmaya başlamıyor" satırı devreye giriyor: fiş, sigorta, elektrik, açma/kapama butonu, Başlat/Beklet tuşu ve kapı. Bu sırayı [Vestel çamaşır makinesi çalışmıyor](/blog/vestel-camasir-makinesi-calismiyor/) yazısında adım adım anlattık. Göstergedeki diğer simgelerin anlamı için [Vestel çamaşır makinesi sembolleri](/blog/vestel-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına bak.

## Ne zaman servis

- CL yokken tuşlara basıldığında göstergede hiçbir değişiklik olmuyorsa
- Bazı tuşlar çalışıp bazıları hiç tepki vermiyorsa
- Göstergede E01-E04 dışında, kılavuzda olmayan bir kod görünüyorsa
- Kapak kilitli kaldı ve program bitmediği hâlde makine durduysa ([kapak açılmıyor](/blog/vestel-camasir-makinesi-kapak-acilmiyor/))

⛔ **Kendin-çöz sınırı burada biter.** Çocuk kilidi, Başlat/Beklet, gecikmeli başlatma, uzaktan kontrol ve kapak senin. Kontrol kartı, tuş takımı, kapı kilidi ve elektrik bağlantıları Vestel yetkili servisinin. Kılavuz da makinedeki bütün tamiratların yetkili servisçe yapılmasını istiyor.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Çocuk kilidi, Başlat/Beklet, gecikmeli başlatma, Wi-Fi uzaktan kontrol, kapı ve servis bilgileri Vestel'in statik.vestel.com.tr adresinde yayımladığı CMI 86201, CMI 106221, CMI 87302 WIFI, KCMI 98142 WIFI ve CMI 128222 WIFI çamaşır makinesi kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
