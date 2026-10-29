---
title: "BenQ monitör ses gelmiyor: hoparlör ve ses çıkışı ayarı"
description: "BenQ monitörden ses gelmiyorsa hoparlör var mı, kablo sesi taşıyor mu, bilgisayar doğru çıkışı seçmiş mi, monitör menüsünde hoparlör açık mı adım adım bak."
slug: "benq-monitor-ses-gelmiyor"
date: "2026-10-29"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-29 PAZ alt ajanı (Apple+BenQ dalgası, grup D). origin/main'de "benq" geçen slug yok; monitörde ses konulu yazı yok (genel monitor-sinyal-yok var, bağlantı verildi).
# Arama kanıtı (#164, 29 Eki 10:43, hl=tr gl=tr): "benq monitör ses" → 1. "benq monitör ses gelmiyor"; "benq monitör s" → 6. "benq monitor sound not working".
# Belge (#88): BenQ resmî belgeleri (İngilizce; BenQ Türkiye monitör sayfalarında Türkçe kullanım kılavuzu ve Türkçe SSS bulunamadı):
#  (G) GW2490 User Manual, esupportdownload.benq.com …/GW2490/UM_EN_260819133840.pdf (200) md5 40e775405dca25f4f5cb226eca6dbcc9
#  (F) BenQ SSS monitor-faq-kn-00022, benq.eu/en-cee (200) md5 f8ed8657279f53afc42890c37379d380
# BİLEREK YAZILMAYANLAR: ses kartı sürücüsü kurulumu · hoparlör onarımı · fiyat (#46).
# Alıntı denetimi: benq-monitor-ses-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Monitörün güç ve görüntü kablosu"]
steps:
  - "Monitör modelinin dahili hoparlörü olup olmadığını teknik özelliklerinden kontrol et."
  - "Sesi taşıyan bir bağlantı kullandığından emin ol: HDMI, DisplayPort ya da USB-C."
  - "Monitöre takılı kulaklık ya da harici hoparlör varsa çıkar."
  - "Bilgisayarın ses ayarlarında çıkış aygıtı olarak monitörü seç ve sesi aç."
  - "Monitör listede yoksa görüntü kablosunu çıkarıp yeniden tak."
  - "Monitörün menüsünde Ses bölümünden hoparlörü aç ve ses seviyesini artır."
  - "Ses kısık ya da boğuksa hoparlörün gürültü filtresini kapat."
  - "Harici hoparlör kullanıyorsan kulaklık çıkışını, USB beslemesini ve hoparlörün kendi sesini kontrol et."
faq:
  - q: "BenQ monitörümde hoparlör var mı, nasıl anlarım?"
    a: "BenQ'nun ses sorunu için yayımladığı destek sayfasındaki ilk adım bu: monitörünün teknik özelliklerine bakıp dahili hoparlörü olup olmadığını öğrenmek. Hoparlörü olmayan bir modelde sesi monitörün kulaklık çıkışına bağlanan bir kulaklık ya da hoparlörle alabilirsin."
  - q: "Kulaklık takınca monitörün hoparlörü neden susuyor?"
    a: "Bu bir arıza değil. GW2490 kılavuzuna göre monitöre kulaklık ya da harici hoparlör bağlandığında dahili hoparlörler otomatik olarak susturuluyor. Sesi monitörün hoparlöründen almak için kulaklığı çıkarman yeterli."
  - q: "Görüntü geliyor ama ses yok, kablo mu bozuk?"
    a: "Olabilir ama önce ayarlara bak. BenQ'ya göre HDMI, DisplayPort ve USB-C kullanıldığında ses görüntüyle aynı kablodan taşınıyor. Bilgisayarın çıkış aygıtı monitör değilse ya da monitör menüsünde hoparlör kapalıysa görüntü gelir, ses gelmez. Monitör ses aygıtları listesinde görünmüyorsa kabloyu çıkarıp yeniden takmak BenQ'nun önerdiği ilk adım."
images:
  coverAlt: "Masa üstünde video oynatan bir monitör ve yanında ses simgesi üstü çizili bir hoparlör işareti"
  steps:
    - "Çizim: solda monitör, sağda teknik özellik listesi ve hoparlör simgesi"
    - "Çizim: solda monitörün arka bağlantı paneli, sağda ses dalgası taşıyan bir görüntü kablosu"
    - "Çizim: solda monitörün alt kenarındaki kulaklık çıkışı, sağda çıkarılan kulaklık"
    - "Çizim: solda dizüstü bilgisayar, sağda ses çıkışı listesinde seçili monitör simgesi"
    - "Çizim: solda monitörün arka paneli, sağda çıkarılıp yeniden takılan kablo"
    - "Çizim: solda monitör, sağda ekrandaki menüde açık konumda hoparlör ayarı"
    - "Çizim: solda hoparlör simgesi, sağda kapalı konumda bir filtre anahtarı"
    - "Çizim: solda monitör, sağda kablolu harici hoparlör çifti"
---

Video oynuyor, görüntü yerinde, ama ses yok. Monitörün hoparlöründen çıt çıkmıyor ya da ses çok kısık. BenQ monitörlerde bu durumun sebebi çoğu zaman bir ayardır: bilgisayar sesi başka bir aygıta gönderiyordur, monitörün hoparlörü menüden kapatılmıştır ya da takılı bir kulaklık hoparlörü susturuyordur. Bu yazı BenQ'nun monitör ses sorunu için yayımladığı destek sayfasına ve **GW2490** kullanım kılavuzundaki sorun giderme bölümüne dayanıyor. İki belge de İngilizce; BenQ Türkiye'nin monitör sayfalarında Türkçe kılavuz bulamadık.

> 💡 **Önce şunu bil:** Her BenQ monitörde hoparlör yoktur. Hoparlörsüz bir modelde sesi ancak monitörün kulaklık çıkışından alabilirsin.

## Adım adım: BenQ monitörde ses elemesi

**1. Hoparlör var mı?** BenQ'nun destek sayfasındaki ilk adım monitörünün teknik özelliklerine bakıp dahili hoparlörü olup olmadığını öğrenmek. Modelinin teknik özelliklerini BenQ Türkiye sitesindeki ürün sayfasında bulabilirsin.

**2. Doğru bağlantıyı kullan.** BenQ'ya göre HDMI, DisplayPort ya da USB-C kullanıldığında ses görüntüyle aynı kablodan taşınır. Kablonun monitörde doğru girişe takılı olduğundan emin ol. USB-C kullanıyorsan GW2490 kılavuzu kablonun hem monitöre hem dizüstü bilgisayara düzgün takıldığını ve monitörün giriş kaynağı olarak USB-C'nin seçildiğini kontrol etmeni istiyor.

**3. Kulaklığı çıkar.** Kılavuz açık: monitöre kulaklık ya da harici hoparlör bağlıysa dahili hoparlörler otomatik olarak susturulur. Takılı bir kulaklık varsa çıkar ve yeniden dene.

**4. Bilgisayarda çıkışı seç.** Windows'ta **Ayarlar > Sistem > Ses** bölümüne gir, çıkış aygıtı olarak monitörü seç ve sesi aç. Mac'te **Sistem Ayarları > Ses** bölümünden çıkış aygıtı olarak monitörü seç ve sesi ayarla. Görüntü monitöre gitse bile bilgisayar sesi hâlâ başka bir aygıta, örneğin dizüstünün kendi hoparlörüne gönderiyor olabilir.

**5. Listede yoksa kabloyu yeniden tak.** BenQ'ya göre monitör çıkış aygıtları listesinde görünmüyorsa kabloyu çıkarıp yeniden takman gerekiyor. Bundan sonra 4. adımı tekrarla.

**6. Monitörün menüsüne bak.** BenQ'nun destek sayfası monitörün kendi ses ayarını da kontrol etmeni istiyor: **Menü > Ses (Audio) > Hoparlör (Speaker)**. GW2490'da bu bölümde hoparlörü **açıp kapatan** bir seçenek ve **0 ile 100** arasında hoparlör ses seviyesi var. Hoparlör kapalıysa aç, ses seviyesi düşükse artır.

**7. Gürültü filtresini kapat.** Ses geliyor ama kısık ya da boğuksa, GW2490 gibi bazı modellerde hoparlörün **gürültü filtresi** açık olabilir. Kılavuz bu işlevi çevrim içi görüşmelerde arka plan gürültüsünü süzmek için tanımlıyor; yalnız konferans görüşmeleri için öneriyor, müzik ve film için önermiyor. Kapatmak için gürültü filtresi tuşuna basıp açılan menüden kapalı seçeneğini seç. Kılavuz arka plan gürültüsü yokken filtre açıkken genel sesin beklenenden düşük olabileceğini de not ediyor.

**8. Harici hoparlörü kontrol et.** Sesi monitöre bağlı harici hoparlörden alıyorsan kılavuz şunları sıralıyor: monitörde takılı kulaklık varsa çıkar, kulaklık çıkışına takılan fişin yerine oturduğunu kontrol et, hoparlörler USB'den besleniyorsa USB bağlantısının sağlam olduğuna bak ve hoparlörlerin kendi ses seviyesini aç.

## Menü seçeneği gri görünüyorsa

GW2490'da menüye ulaşmak için kumanda tuşuna basıp Hızlı Menü'yü açıyor, oradan **Menu**'yü ve ardından **Audio** bölümünü seçiyorsun. Bazen aradığın seçenek orada gri görünür ya da hiç görünmez. Kılavuz bunun sebebini açıklıyor: menüdeki seçenekler giriş kaynağına, işlevlere ve ayarlara göre değişir; kullanılamayan seçenekler gri görünür. Bir işlevi olmayan modelde o işlevin ayarı menüde hiç yer almaz. Yani menüde hoparlör ayarı yoksa modelinde dahili hoparlör olmayabilir; 1. adıma geri dön.

Aynı bölümde bir de **Ses Senaryosu** (Audio Scenario) ayarı var. Kılavuza göre Standart genel kullanım için dengeli ayardır, Diyalog konuşmanın netliği için gürültüyü azaltır, Müzik ise müzikle vokali dengede tutar. Ses geliyor ama tınısı garipse bu ayarı Standart'a almayı dene.

## Mikrofon da çalışmıyorsa

Bazı BenQ modellerinde dahili mikrofon da var. GW2490 kılavuzu mikrofon bilgisayara bağlıyken yanıt vermiyorsa üç şeye bakmanı istiyor: USB-C'li modellerde veri ve güç taşıyan sertifikalı USB-C kablosunun düzgün takılı olması, mikrofonun MIC tuşuyla açılması ve Ses menüsünden mikrofon ses seviyesinin artırılması.

## Görüntü de yoksa

Bu yazı görüntünün geldiği ama sesin gelmediği durum içindir. Monitör "sinyal yok" diyorsa ya da ekran tamamen karanlıksa sorun ses ayarında değildir. BenQ Türkiye'nin destek sayfası bu durumda ilk olarak monitörün ekran menüsünden doğru giriş kaynağını elle seçmeni, olmazsa başka bir kabloyla denemeni öneriyor. Bu durum için [monitörde sinyal yok rehberimize](/blog/monitor-sinyal-yok/) bak.

## Buradan sonrası servis işi

Yukarıdaki adımların hepsini denedin, hoparlör menüde açık, bilgisayar doğru çıkışı seçmiş ve yine de ses yoksa sorun ayarın ötesindedir. GW2490 kılavuzu monitörün sökülmemesini ve kendin onarmaya çalışmamanı istiyor; içeride tehlikeli gerilim olabilir. Monitörden kötü bir koku ya da anormal bir ses gelirse kılavuz derhal BenQ servis merkezine başvurmanı söylüyor. Garanti süresi içindeysen yerel müşteri hizmetlerine ulaş.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin. Bil, gör, çağır.
