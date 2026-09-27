---
title: "Viessmann kombi E10 hatası"
description: "Viessmann kombide E10, WLAN kurulurken ana ağa bağlanılamadı demek. Modem bağlantısı, 2,4 GHz ağ ve şifre kontrolü; E12 farkı. Viessmann kılavuzlarından."
slug: "viessmann-kombi-e10-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 · curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi, hepsi HTTP 200; pdftotext -layout ile sayfa sayfa okundu.
# Yer: Viessmann'ın kendi ViBooks veritabanı (api.viessmann-climatesolutions.com arama uç noktası). Web araması yalnız yer bulmak için.
# A) Vitodens 100-W/111-W/111-F · 6135864 TR 03/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf
#    44 s. · md5 5513c22c39f416336369c7d3cbe6d0fe · WLAN kurulumu + E10/E12 s.25
# B) Vitodens Connect / Trend · 6173992 TR 05/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf
#    36 s. · md5 5c0d0900f6f66d9eb9dc09855ae7cb04 · 2,4 GHz + etiket s.19 · E10/E12 + "önce „E1" ve sonra „0"" s.20
# C) Vitodens Connect / Trend · 6171780 TR 10/2023
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6171780VBA00004_1.pdf
#    36 s. · md5 17765afa670bf200fd39032c21714795 · E10/E12 + parçalı gösterim s.20
# D) Vitodens 200-W/222-W/222-F/242-F (3,5 inç siyah/beyaz ekranlı kontrol paneli) · 6172120 TR 06/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6172120VBA00009_1.pdf
#    68 s. · md5 3d0e404231424e9a8ce2e4347c1d992b · OK ~3 sn + E10/E12 s.36
# Birebir (dört belgede aynı): "„E10" Ana ağ bağlantısı kurulamadı." + "Ekranda „E10" gösterilirse yönlendirici bağlantısını
#   ve ağ şifresinin doğruluğunu kontrol edin." · "„E12" Sunucu bağlantısı kurulamadı." + "Ekranda „E12" gösterilirse
#   bağlantıyı daha sonra tekrar kurun."
# Bilerek YAZILMAYANLAR: modemi yeniden başlat / kanal değiştir / modemi yaklaştır (belgede yok) · E10'un ısıtmayı etkileyip
#  etkilemediği (belgede yok) · fabrika ayarlarına dönüş (kılavuzda var ama E10 için önerilmiyor) · E12'nin parçalı gösterimi
#  (belge yalnız E10 örneğini veriyor).
# Alıntı denetim tablosu: viessmann-kombi-e10-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["ViCare uygulaması yüklü telefon", "Wi-Fi ağ adı ve şifresi"]
steps:
  - "Kodu doğru oku: ekranda önce E1, ardından 0 görünüyorsa kod E10'dur."
  - "Ev modeminin (yönlendiricinin) açık olduğunu ve bağlantısını kontrol et."
  - "Kombiyi bağladığın ağın 2,4 GHz ağı olduğundan emin ol."
  - "Wi-Fi şifresini doğru girdiğini kontrol et."
  - "Kontrol ünitesindeki etiketten uygulama için gereken erişim bilgilerini hazırla."
  - "Kılavuzundaki düğmeyle bağlantı kurulumunu yeniden başlat ve ViCare uygulamasındaki talimatları izle."
  - "Ekranda E12 görünürse bağlantıyı bir süre sonra yeniden kur."
faq:
  - q: "Viessmann kombide E10 hatası ne demek?"
    a: "Viessmann'ın Vitodens 100-W/111-W/111-F, Vitodens Connect/Trend ve 3,5 inç ekranlı Vitodens 200-W ailesi kullanma kılavuzlarında E10, WLAN bağlantısı kurulurken çıkan bir hata olarak veriliyor: ana ağ bağlantısı kurulamadı. Kılavuzun önerisi yönlendirici bağlantısını ve ağ şifresinin doğruluğunu kontrol etmek."
  - q: "E10 ile E12 arasındaki fark ne?"
    a: "Kılavuzlara göre E10'da kombi ana ağa, yani evdeki kablosuz ağa bağlanamıyor. E12'de ise sunucu bağlantısı kurulamıyor. E12 için önerilen işlem bağlantıyı daha sonra tekrar kurmak."
  - q: "Ekranda E1 ve 0 sırayla yanıp sönüyor, bu ne?"
    a: "Vitodens Connect ve Trend kılavuzlarına göre hata kodu parçalar hâlinde, önce E1 ve sonra 0 olacak şekilde gösterilir. Yani ekranda gördüğün E10'dur."
  - q: "Viessmann kombi 5 GHz Wi-Fi'ye bağlanır mı?"
    a: "Kılavuzlar internet bağlantısının WLAN üzerinden 2,4 Gigahertz ile kurulmasını söylüyor. Kombiyi evdeki 2,4 GHz ağına bağla."
  - q: "Wi-Fi şifresi dışında hangi bilgiler gerekiyor?"
    a: "Kılavuzlara göre uygulama üzerinden internet erişimi için gerekli erişim bilgileri kontrol ünitesindeki bir etikette bulunuyor. Kurulum ViCare uygulaması üzerinden yapılıyor ve uygulamadaki talimatlar izleniyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin yanında rafta duran ev tipi bir kablosuz modem ve kombiye doğru tutulmuş bir akıllı telefon; ekranlarda okunabilir yazı yok"
---

Viessmann kombini ViCare uygulamasına bağlamaya çalışırken ekranda **E10** gördüysen kombide bir ısıtma arızası değil, bir bağlantı sorunu var. Viessmann'ın kullanma kılavuzları bu kodu WLAN bağlantısı kurulurken çıkan hatalar arasında veriyor ve karşılığını tek cümleyle yazıyor: **„E10" Ana ağ bağlantısı kurulamadı.** Önerilen işlem de kılavuzda: **yönlendirici bağlantısını ve ağ şifresinin doğruluğunu kontrol edin.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E10 = kombi evdeki Wi-Fi ağına bağlanamadı. Modemi, 2,4 GHz ağını ve şifreyi kontrol et → kurulumu ViCare'den yeniden başlat. E12 = sunucuya bağlanılamadı → bir süre sonra tekrar dene.

## Bu kod hangi kombilerde geçiyor

E10 ve E12, aynı cümlelerle şu Viessmann kullanma kılavuzlarında yer alıyor:

- **Vitodens 100-W / 111-W / 111-F** (siyah/beyaz yeni kontrol panel ekranlı)
- **Vitodens Connect / Vitodens Trend** (siyah/beyaz ekranlı)
- **Vitodens 200-W / 222-W / 222-F / 242-F** (3,5 inç siyah/beyaz ekranlı kontrol paneli)

Vitotronic kontrol üniteli eski Vitodens 200-W ve 300-W serilerinin kod listesi farklıdır; onu [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) yazısında topladık.

## Adım adım: evde denenecekler

**1. Kodu doğru oku.** Vitodens Connect ve Trend kılavuzlarına göre hata kodu ekranda **parçalar hâlinde** gösteriliyor: önce **E1**, sonra **0**. Ekranda bu ikisini sırayla görüyorsan kod E10'dur.

**2. Modeme bak.** Kılavuzun ilk isteği yönlendirici bağlantısının kontrol edilmesi. Modemin açık olduğundan ve bağlantısının kurulu olduğundan emin ol.

**3. Doğru bandı seç.** Kılavuzlar internet bağlantısının WLAN üzerinden **2,4 Gigahertz** ile kurulmasını söylüyor. Kombiyi evdeki 2,4 GHz ağına bağla.

**4. Şifreyi kontrol et.** Kılavuzun ikinci isteği ağ şifresinin doğruluğu. Şifreyi kontrol ederek yeniden gir.

**5. Etiketi hazırla.** Uygulama üzerinden internet erişimi için gerekli erişim bilgileri, kılavuzlara göre **kontrol ünitesindeki etikette** bulunuyor. Kurulumdan önce bu bilgileri elinin altına al.

**6. Kurulumu yeniden başlat.** Kılavuzlardaki sıra modele göre biraz değişiyor:

- **Vitodens 100-W/111-W/111-F, Connect ve Trend:** „OK" düğmesini **4 saniye** basılı tut. Ekranın sol kenarında WLAN sembolü yanana kadar dönen bir çubuk görürsün. Ardından ViCare uygulamasını aç ve uygulamadaki talimatları izle.
- **Vitodens 200-W ailesi (3,5 inç ekran):** giriş ekranını aç, OK düğmesini **yaklaşık 3 saniye** basılı tut; bir uyarı gösterilir. Uygulamadaki talimatları izle ve kılavuzdaki sırayla OK ile onayla.

**7. WLAN sembolünü izle.** Kılavuzlara göre sembol yanıp sönüyor ya da sönük yanıyorsa yerel ağ ile bağlantı kuruluyor; parlak (açık renk) yanıyorsa sunucu ile bağlantı kuruluyor.

## Ekranda E12 görürsen

E12 aynı tabloda yer alıyor ama başka bir bağlantıyı gösteriyor: **„E12" Sunucu bağlantısı kurulamadı.** Kılavuzun önerisi kısa: **bağlantıyı daha sonra tekrar kur.**

## WLAN'ı açıp kapatmak

Kılavuzlarda WLAN bağlantısını ayrıca açıp kapatmak için bir menü yolu da var. Vitodens Connect ve Trend kılavuzuna göre sıra şöyle: ana menüye gitmek için menü düğmesini 4 saniye basılı tut, yukarı/aşağı oklarla **P.7** menü noktasını seç, „OK" ile onayla, WLAN'ı **ON** ile aç ya da **OF** ile kapat, „OK" ile onayla ve menüden çıkmak için menü düğmesine birkaç kez dokun. Düğme sembolleri ve menü numaraları modele göre değişebildiği için kendi kılavuzundaki sayfaya bakman en güvenlisi.

## Ne zaman servis

Kılavuzlar E10 ve E12 için servis adımı vermiyor; ikisini de kullanıcının yapacağı bağlantı kontrolleriyle bitiriyor. Bununla birlikte:

- Ekranda **uyarı üçgeni** varsa durum farklıdır. Kılavuza göre üçgen sembolü göründüğünde yapılacak iş, gösterilen arıza kodunu yetkili teknik servise bildirmek. Üçgen ve kod yanıp sönüyor, brülör devreye girmiyorsa [Viessmann kombi CL hatası](/blog/viessmann-kombi-cl-hatasi/) yazısına bak.
- Ekranda **E3** görüyorsan bu bir bağlantı kodu değil; [Viessmann kombi E3 hatası](/blog/viessmann-kombi-e3-hatasi/) yazısı ViCare'deki tatil fonksiyonlarını anlatıyor.

⛔ **Kendin-çöz sınırı burada biter.** Bu yazıdaki her adım modem, şifre ve uygulama tarafındadır; kombinin kapağını açmayı, gaz ya da elektrik tarafına dokunmayı gerektiren hiçbir iş yok.

Kombin koddan bağımsız olarak ısıtmıyorsa [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına bak.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
