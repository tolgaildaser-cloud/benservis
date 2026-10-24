---
title: "Dijitsu TV sinyal yok diyor: kılavuza göre kontrol"
description: "Dijitsu televizyon sinyal yok diyorsa ne yapmalı? Kılavuza göre kaynak seçimi, DTV/ATV tuşu, anten kablosu, uydu ve karasal girişleri ve servis sınırı."
slug: "dijitsu-tv-sinyal-yok"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "dijitsu" geçen slug/başlık/blog gövdesi YOK. Genel "sinyal yok" yazıları: vestel-televizyon-sinyal-yok, panasonic-tv-sinyal-yok, tv-hdmi-sinyal-yok (marka × sorun ayrı; metin kopyası değil).
# GSC: "dijitsu" satırı yok. OT (bu koşu): "dijitsu tv s" → 2. "dijitsu tv sinyal yok diyor ne yapmalıyım" · 4. "…sinyal yok sorunu çözümü".
# Belge zinciri (#88): dijitsu.com.tr ürün sayfası → "Ürün Kullanım Formu" PDF (200 application/pdf), görüntü tabanlı, tesseract tur OCR + sayfa görüntüsü:
#  (D) dijitsu.com.tr/32-d-18000 (200) → storage/pdfs/info_32-d-18000_2025_09_04_06_11_13_396.pdf "LED TV Kullanım Kılavuzu 32D15000/32D18000", 10 s., md5 cabc09b7d5de7ca98a7e9107ce243ad5 (s.5 sorun giderme, s.7 girişler, s.8 tuşlar, s.9 kumanda)
#  (G) dijitsu.com.tr/43-dg-27000 (200) → storage/pdfs/info_43-dg-27000_2025_09_04_06_15_05_878.pdf "43DG27000/50DG27000/55DQ33000/65DQ33000", 10 s., md5 939f190ea4c87d41134d811d203450d7 (s.5, 7, 9)
# Belgede "Sinyal Yok" mesajı geçmiyor; sorun giderme "Görüntü yok, ses yok" ve "Kötü görüntü" satırlarıyla eşlendi (çıkarım, yazıda belirtildi). Belgede kanal tarama menüsü YOK; tarama adımı yazılmadı.
# BİLEREK YAZILMAYANLAR: kanal tarama/frekans/TKGS adımları (belgede yok) · çanak yönlendirme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası"]
steps:
  - "Televizyonun güç kablosunun takılı olduğuna ve gösterge ışığının açık konumda yandığına bak."
  - "SOURCE ya da Girişler tuşuyla doğru giriş kaynağını seç."
  - "Uydu alıcılı modelde DTV/ATV tuşuyla uydu ve karasal yayın arasında geçiş yap."
  - "Anten ya da uydu kablosunun arka paneldeki doğru girişe sıkıca takılı olduğunu kontrol et."
  - "Başka bir kanal dene; yalnız bir kanalda sorun varsa yayın kaynaklı olabilir."
  - "Şifreli yayın izliyorsan kartın CI IN yuvasında takılı olduğunu kontrol et."
  - "Sorun sürüyorsa model koduyla Dijitsu danışma hattına ya da yetkili servise başvur."
faq:
  - q: "Dijitsu televizyonda sinyal yok yazıyorsa ilk ne yapmalıyım?"
    a: "Dijitsu kılavuzunun sorun giderme tablosu görüntü ve ses gelmediğinde kumandadaki SOURCE tuşuna basıp TV kaynağını seçmeni, televizyon ile anten ya da kablo TV arasındaki kabloyu kontrol etmeni istiyor. Kılavuzda Sinyal Yok mesajı ayrıca geçmiyor; bu satırları bu uyarıya biz uyguladık."
  - q: "DTV/ATV tuşu ne işe yarar?"
    a: "Dijitsu'nun uydu alıcılı 32D15000/32D18000 kılavuzuna göre kumandadaki DTV/ATV tuşu uydu yayını ile karasal yayın arasında geçiş yapıyor. Çanak bağlıyken karasal modda kalmış bir televizyonda kanal görünmeyebilir; bu bizim çıkarımımız."
  - q: "Kablo hangi girişe takılır?"
    a: "Kılavuzda arka paneldeki ATN(S2)/ATN(T2) girişleri anteninden ya da kablondan koaksiyel kabloyla sinyal almak için gösteriliyor. S2 uydu, T2 karasal yayın standardını ifade ediyor; çanak kablosunun S2, çatı anteninin T2 girişine gitmesi gerekiyor. Bu eşleme kılavuzdaki adlardan yapılmış bir çıkarım."
  - q: "Kanal tarama nasıl yapılır?"
    a: "Dijitsu'nun ürün sayfasındaki kullanım formlarında kanal tarama menüsü anlatılmıyor. Bu yüzden menü adımı yazmadık; tarama menüsünü bulamıyorsan Dijitsu danışma hattından modeline özel bilgi al."
  - q: "Yalnız bir kanalda görüntü bozuk, televizyon mu arızalı?"
    a: "Büyük olasılıkla değil. Dijitsu kılavuzu kötü görüntüde başka bir kanal denemeni, istasyonun yayın zorlukları olabileceğini yazıyor. Görüntü menüsündeki parlaklık ve kontrast ayarlarına da bakmanı öneriyor."
images:
  coverAlt: "Oturma odasında ekranı boş kalmış televizyon ve önündeki sehpa"
  steps:
    - "Televizyonun alt kenarında yanan gösterge ışığı"
    - "Kanepenin kolunda duran televizyon kumandası"
    - "Televizyon ekranında açık duran giriş kaynağı listesi"
    - "Televizyonun arka panelinde anten girişine takılı koaksiyel kablo"
    - "Televizyon ekranında açık duran bir haber kanalı"
    - "Televizyonun yan tarafındaki modül yuvası"
    - "Masada duran bir telefon ve yanında not kâğıdı"
---

Dijitsu televizyonunu açtın, ekranda yayın yok ve sinyal uyarısı görüyorsun. Bu uyarı çoğu zaman televizyon arızası değil: yanlış giriş, yanlış yayın modu ya da gevşek bir anten kablosu yeterli. Bu yazıda Dijitsu'nun kendi sitesinde ürün sayfalarına bağladığı "Ürün Kullanım Formu" kılavuzlarını temel aldık: uydu alıcılı 32D15000/32D18000 ile Google TV'li 43DG27000/50DG27000 ve 55/65DQ33000 kılavuzları. Kılavuzlar görüntü tabanlı olduğu için tuş ve giriş adlarını sayfa görüntülerinden okuduk. Bir uyarı: bu kılavuzlarda "Sinyal Yok" mesajı ayrı bir satır olarak geçmiyor; aşağıdaki adımlar kılavuzun "görüntü yok, ses yok" ve "kötü görüntü" satırlarına dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** SOURCE ya da Girişler tuşuyla TV kaynağını seç. Uydu alıcılı modelde DTV/ATV tuşuyla uydu ve karasal arasında geç. ATN(S2)/ATN(T2) girişindeki kabloyu kontrol et. Başka kanal dene. Sürerse servis.

## Kılavuzun sorun giderme tablosu

| Belirti | Dijitsu kılavuzuna göre kontrol |
|---|---|
| **TV açılmıyor** | Güç kablosu takılı mı, kumanda pilleri bitmiş olabilir |
| **Görüntü yok, ses yok** | Televizyon ile anten ya da kablo TV arasındaki kablo, kumandadaki güç tuşu, SOURCE tuşuyla kaynak seçimi ve ENTER |
| **Kötü görüntü, ses iyi** | Anten ya da kablo bağlantısı, başka kanal dene, istasyonun yayın zorluğu, parlaklık ve kontrast |
| **Görüntü iyi, kötü ses** | Ses kısılmış olabilir, VOL+ ile aç, MUTE tuşu |

## Adım adım: Dijitsu TV sinyal yok uyarısı

**1. Gücü ve göstergeyi kontrol et.** Kılavuzun tablosu televizyon hiç açılmıyorsa güç kablosunun takılı olduğundan emin olmanı ve kumanda pillerini değiştirmeni, görüntü ve ses yoksa kumandadaki güç tuşuna basmanı istiyor. Dijitsu kılavuzlarına göre güç göstergesi bekleme modunda kırmızı, televizyon açıldığında yeşil yanıyor. Uyarı ekranda yazıyorsa televizyon açık demektir; o zaman sorun büyük olasılıkla girişte ya da sinyalde.

**2. Giriş kaynağını seç.** Kılavuz görüntü ve ses gelmediğinde kumandadaki **SOURCE** tuşuna basıp TV kaynaklarını seçmeni, sonra **ENTER** ile onaylamanı istiyor. Google TV'li modellerin kumandasında bu tuşun adı **Girişler**: sinyal kaynağı seçeneklerini gösteriyor. Aynı kumandadaki bir tuş da doğrudan Live TV'ye geçiyor. HDMI ya da AV girişinde kalmış televizyon, o girişe bağlı cihaz kapalıysa sinyal göstermez; HDMI tarafı için [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısına bak.

**3. Yayın modunu değiştir.** Uydu alıcılı 32D15000/32D18000 kılavuzunda kumandadaki **DTV/ATV** tuşu uydu yayını ile karasal yayın arasında geçiş yapıyor. Evine çanak geliyorsa uydu, çatı anteni geliyorsa karasal modda olman gerekiyor; yanlış moddayken kanal görünmeyebilir. Bu son cümle bizim çıkarımımız. Aynı kumandadaki **TV/RADIO** tuşu da TV ile radyo arasında geçiyor; yanlışlıkla radyoya geçtiysen ekranda görüntü olmaz.

**4. Kabloyu ve girişi kontrol et.** Kılavuz televizyon ile anten ya da kablo TV arasındaki arayüz kablosunu kontrol etmeni istiyor. Arka paneldeki **ATN(S2)/ATN(T2)** girişleri kılavuza göre anteninden ya da kablondan koaksiyel kabloyla sinyal almak için. Adlardaki S2'nin uydu, T2'nin karasal yayın standardını gösterdiğini, yani çanak kablosunun S2, çatı anteni kablosunun T2 girişine gitmesi gerektiğini düşünüyoruz; bu, giriş adlarından yaptığımız bir çıkarım, arka paneldeki etikete bakarak doğrula. Kabloyu çıkarıp yeniden, sıkıca tak.

**5. Başka kanal dene.** Uyarı ya da bozuk görüntü yalnız bir kanaldaysa kılavuz başka bir kanal denemeni ve istasyonun yayın zorlukları olabileceğini yazıyor. Görüntü geliyor ama kötüyse görüntü menüsündeki parlaklık ve kontrast ayarlarına da bak. Bütün kanallarda aynı uyarı varsa sorun televizyona gelen sinyalde olabilir.

**6. Şifreli yayında kartı kontrol et.** Arka paneldeki **CI IN** yuvası kılavuza göre DTV sinyallerini alma izni almak için bir kart bağlamaya yarıyor. Şifreli bir platformu televizyonun kendi alıcısıyla izliyorsan modül ve kartın yuvaya doğru takılı olduğuna bak; kart çıkmışsa o kanallar açılmaz.

**7. Destek al.** Kablo, kaynak ve mod doğruyken uyarı sürüyorsa televizyonun model kodunu not edip Dijitsu'nun kılavuzun kapağında yazan danışma hattına ya da yetkili servise başvur. Kılavuz cihazın içinde kullanıcının onarabileceği parça olmadığını, kapağın açılmamasını ve servis işlemleri için yetkili servise başvurulmasını açıkça yazıyor.

## Kılavuzda olmayanlar

İncelediğimiz Dijitsu kullanım formlarında kanal tarama, frekans girişi ya da TKGS menüsü anlatılmıyor. Bu yüzden bu yazıda tarama adımı vermedik. Televizyonun menüsünde tarama seçeneğini bulamıyorsan rastgele ayar değiştirmek yerine model koduyla Dijitsu'dan bilgi al. Markadan bağımsız temel kontroller [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/) yazısında.

## Ne zaman servis

- Kaynak, yayın modu ve kablo doğruyken bütün kanallarda uyarı sürüyorsa
- Aynı kablo başka bir televizyonda yayın veriyor ama Dijitsu'da vermiyorsa
- Televizyon kumandaya ve üstündeki tuşlara hiç tepki vermiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kaynak, mod, kablo ve kart sende. Çanak ayarı ve bina anten tesisatı uzmanın; kapak açmak ve iç arıza Dijitsu yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun model kodu ne?
2. Yayın uydu mu, karasal mı, kablo mu?
3. Uyarı bütün kanallarda mı, birkaçında mı?
4. Aynı kablo başka televizyonda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
