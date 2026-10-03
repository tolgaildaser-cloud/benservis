---
title: "Siemens davlumbaz filtre uyarısı yanıyor"
description: "Siemens davlumbazda filtre sembolü yanıp sönüyor mu? Bu dolum göstergesi: yağ filtresini temizle ya da koku filtresini değiştir, sonra göstergeyi sıfırla."
slug: "siemens-davlumbaz-filtre-uyarisi"
date: "2026-10-03"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile BSH'nin kendi alan adından (media3.bsh-group.com — BSH için
#   kabul, 2 Eki alan adı kapısı) indirildi, HTTP 200, yönlendirme 0. Belgelerde "My Siemens" ve siemens-home.bsh-group.com bağlantıları var. Web araması yalnız
#   belge yerini bulmak için. Sayfa = PDF sayfası (pdftotext -f N -l N).
#  S1) Siemens LC97FMR60, LC98KMR60 davlumbaz kullanım kılavuzu ve kurulum talimatları  https://media3.bsh-group.com/Documents/9001618322_H.pdf  24 s.  md5 d16e30b13911d03940d037ddb3037ab5
#  S2) Siemens LC.6KPJ.0. davlumbaz kullanım kılavuzu ve kurulum talimatları            https://media3.bsh-group.com/Documents/9001922507_I.pdf  20 s.  md5 6e8ebcd7c02a1054392bc7be4ff3a262
# Ana satırlar: S1 s.6 ekran: "Yağ filtresi dolum göstergesi" / "Koku filtresi dolum göstergesi" · S1 s.7 "7.16 Dolum göstergesi Yağ filtresi veya koku filtresi
#   doymuşsa, cihaz kapatıldıktan sonra ilgili semboller yanıp söner." · "Bu kılavuzdaki temizleme uyarılarını izleyerek doymuş yağ filtresini temizleyiniz."
#   · "Ekteki kılavuzda yer alan uyarıları izleyerek doymuş koku filtresini değiştiriniz." · "7.17 Dolum göstergesi kullanılan filtreye göre ayarlanmalıdır.
#   Gereklilik: Cihaz kapatılmıştır." · "7.18 Yağ filtresi temizlendikten sonra veya koku filtresi değiştirildikten sonra dolum göstergesi sıfırlanabilir." ·
#   "Cihaz kapatıldıktan sonra göstergede yağ filtresine yönelik ... görüntülenir." · "... üzerine basılmalıdır. a Dolum göstergesi sıfırlanır."
#   S1 s.10 "Filtre kapağı yavaşça açılmalıdır." · "Filtre kapağını ortasından tutunuz ve tamamen açınız." · "Yağ filtresi alttan elle tutulmalıdır." · "Yağ
#   filtresindeki kilidi açınız ve yağ filtresini aşağı doğru döndürerek açınız." · "Yağ damlamasını önlemek için yağ filtresi yere paralel tutulmalıdır." ·
#   "Yağ filtresini en az 2 ayda bir temizlemenizi öneririz." · "Yağ filtresi sıcak deterjanlı suda yumuşatılmalıdır." · "bir fırçayla temizlenmelidir." ·
#   "iyice durulanmalıdır." · "yağların akması beklenmelidir." · S1 s.11 "Yağ filtresi serbest şekilde bulaşık makinesine yerleştirilmelidir. Çok kirli yağ
#   filtreleri bulaşıklarla yıkanmamalıdır." · "Sıcaklık ayarında maksimum 70 C seçilmelidir." · "hafif renk değişimi ... çalışmasına bir etkisi yoktur." ·
#   "Yağ filtresini yerleştiriniz. 2. Yağ filtresindeki kilidi yuvasına takın." · s.11-12 "Cihaz çalışmıyor." satırları.
#   S2 s.6 "7.9 Dolum göstergesi Dolum göstergesi, yağ filtresini ne zaman temizlemeniz gerektiğini bildirir. Yağ filtresinin temizlenmei gerektiğinde ... yanar.
#   Yağ filtresini temizledikten sonra dolum göstergesini sıfırlamanız gerekir." · "Dolum göstergesinin sıfırlanması Gereklilik: Cihaz açık. ... tuşuna yakl.
#   3 saniye boyunca basılı tutunuz. a Dolum göstergesi sıfırlanır. a ... söner." · S2 s.6 kumanda: "Dolum göstergesi / Yağ filtresinin temizlenmesi" tuşu.
#   S2 s.7 "Temizleme işleminden önce fiş çekilmeli veya sigorta kutusundan sigorta kapatılmalıdır." · "Temizlemeden önce cihazın soğumasını bekleyiniz." ·
#   "Yağ filtresi alttan elle tutulmalıdır. Yağ filtresindeki kilitler açılmalıdır." · "Yağ filtresi tutuculardan çıkarılmalıdır." · S2 s.8 "Koku filtreleri normal
#   işletimde, yani günde yaklaşık bir saat kullanıldığında her 6 ayda bir değiştirilmelidir. Koku filtresi temizlenemez veya rejenere edilemez." · "Eski koku
#   filtresi döndürülmeli ve tutucudan çekerek çıkarılmalıdır" · "Yeni koku filtresi tutucuya bastırılmalı ve döndürülmelidir." · "Yağ filtresi yukarı kaldırılmalı
#   ve kilitler yerine oturtulmalıdır. 3. Kilitlerin yerine oturduğundan emin olunmalıdır." · "Sadece orijinal koku filtreleri kullanınız."
# NOT: PDF'te tuş simgeleri glif olarak kaybolduğu için tuşlar adla değil kılavuz bölüm numarasıyla anıldı (S1 7.18, S2 7.9).
# BİLEREK YAZILMAYANLAR: Home Connect üzerinden dolum göstergesi ayarı (adım yok, yalnız anıldı) · sensör hassasiyeti · LED değişimi (S1 s.12: yalnız
#   üretici/servis; S2 s.9 belgede var ama parça değişimi → #31) · Bosch/Profilo kardeş belirti (grup kuralı: bu sayfa "çekmiyor" değil filtre uyarısı) · fiyat (#46).
# Alıntı denetim tablosu: siemens-davlumbaz-filtre-uyarisi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (+ kuruma)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Bulaşık deterjanı", "Fırça", "Yumuşak bez"]
steps:
  - "Davlumbazı kapat ve yanıp sönen ya da yanan sembolün yağ filtresine mi koku filtresine mi ait olduğuna bak."
  - "Fişi çek ya da sigorta kutusundan sigortayı kapat; cihazın soğumasını bekle."
  - "Yağ filtresini alttan elinle tutarak kilidini aç ve tutucudan çıkar; yağ damlamasın diye yere paralel tut."
  - "Filtreyi sıcak deterjanlı suda yumuşat, fırçala ve iyice durula ya da bulaşık makinesine serbest yerleştirip en çok 70 °C'de yıka."
  - "Koku filtresi doymuşsa eskisini döndürüp çek, yeni orijinal filtreyi tutucuya bastırıp döndür."
  - "Yağ filtresini alttan tutarak yerleştir ve kilitlerin yerine oturduğundan emin ol."
  - "Enerjiyi geri ver ve dolum göstergesini kılavuzundaki tuşla sıfırla."
faq:
  - q: "Siemens davlumbazda yanıp sönen filtre sembolü ne demek?"
    a: "Bu bir arıza kodu değil, dolum göstergesi. LC97FMR60 / LC98KMR60 kılavuzuna göre yağ filtresi ya da koku filtresi doymuşsa cihaz kapatıldıktan sonra ilgili semboller yanıp söner. LC.6KPJ.0 modellerinde gösterge yalnız yağ filtresi için var ve temizlik gerektiğinde yanıyor."
  - q: "Filtreyi temizledim ama sembol hâlâ yanıyor?"
    a: "Göstergeyi senin sıfırlaman gerekiyor; temizlik onu kendiliğinden söndürmüyor. LC.6KPJ.0 kılavuzunda cihaz açıkken dolum göstergesi tuşuna yaklaşık 3 saniye basılı tutulduğunda gösterge sıfırlanıyor ve sembol sönüyor. LC97FMR60'ta ise cihaz kapatıldıktan sonra göstergede ilgili filtrenin sembolü görünürken kılavuzun 7.18 bölümündeki tuşa basılıyor."
  - q: "Koku filtresi yıkanabilir mi?"
    a: "LC.6KPJ.0 kılavuzuna göre hayır: koku filtresi temizlenemez ya da rejenere edilemez. Günde yaklaşık bir saatlik normal kullanımda her 6 ayda bir değiştirilmesi gerekiyor ve yalnız orijinal koku filtresi kullanılması isteniyor. LC97FMR60 kılavuzu ise yenilenebilir koku filtreleri için ayrı bir kılavuzdaki uyarılara uyulmasını söylüyor."
  - q: "Yağ filtresini ne sıklıkla temizlemeliyim?"
    a: "İki Siemens kılavuzu da yağ filtresinin en az 2 ayda bir temizlenmesini öneriyor. Kılavuzlar ayrıca yağ filtresindeki yağ birikintilerinin alev alabileceği uyarısını yapıyor; bu yüzden göstergeyi beklemeden düzenli temizlik isteniyor."
images:
  coverAlt: "Modern bir mutfakta ocak üstündeki koyu renk davlumbazın kumanda alanında yanan küçük bir filtre sembolü ve altında tezgâhta duran metal yağ filtresi"
---

Davlumbazı kapattın, fan durdu ama kumanda alanında bir sembol yanıp sönmeye devam ediyor. Siemens davlumbazlarda bu çoğu zaman bir arıza değil: kılavuzun adıyla **dolum göstergesi.** LC97FMR60 / LC98KMR60 kılavuzunun cümlesi açık: **yağ filtresi veya koku filtresi doymuşsa, cihaz kapatıldıktan sonra ilgili semboller yanıp söner.** Yapılacak iş de belli: filtreyi temizlemek ya da değiştirmek, ardından göstergeyi sıfırlamak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Cihazı kapat, hangi sembol yanıyor bak → fişi çek, soğumasını bekle → yağ filtresini alttan tutarak çıkar → elde ya da makinede (en çok 70 °C) yıka → koku filtresi doymuşsa yenisini tak → yağ filtresini kilitleyerek yerleştir → göstergeyi sıfırla.

## Hangi model, hangi gösterge?

Bu yazı iki Siemens kılavuzuna dayanıyor ve iki göstergenin davranışı farklı:

| Model | Gösterge | Ne zaman | Sıfırlama |
|---|---|---|---|
| **LC97FMR60 / LC98KMR60** | Yağ filtresi **ve** koku filtresi için ayrı sembol | Filtre doymuşsa **cihaz kapatıldıktan sonra yanıp söner** | Cihaz kapatıldıktan sonra sembol görünürken kılavuzun **7.18** bölümündeki tuşa basılır |
| **LC.6KPJ.0.** | Yalnız **yağ filtresi** | Temizlik gerektiğinde **yanar** | **Cihaz açıkken** dolum göstergesi tuşu **yaklaşık 3 saniye** basılı tutulur |

Siemens kılavuzlarına göre ürün numarası (E-Nr.) ve imalat numarası (FD) cihazın tip etiketinde yazıyor; LC97FMR60 kılavuzu etiketin yerinin modele göre değiştiğini belirtiyor.

## Adım adım: evde denenecekler

**1. Hangi filtre uyarıyor, bak.** LC97FMR60'ın ekranında iki ayrı simge var: **yağ filtresi dolum göstergesi** ve **koku filtresi dolum göstergesi.** Cihazı kapat ve hangisinin yanıp söndüğünü not et; yapılacak iş buna göre değişiyor. LC.6KPJ.0'da gösterge yalnız yağ filtresi için.

**2. Enerjiyi kes, soğumasını bekle.** Siemens'in temizlik uyarıları: temizlemeden önce **fiş çekilmeli ya da sigorta kutusundan sigorta kapatılmalı**; cihaz çalışırken çok ısındığı için **soğuması beklenmeli.**

**3. Yağ filtresini çıkar.** Kılavuzun iki uyarısı var: düşen yağ filtresi altındaki **ocağa zarar verebilir**, bu yüzden filtre **alttan elle tutulmalı.** LC.6KPJ.0'da filtredeki **kilitler açılıyor** ve filtre **tutuculardan çıkarılıyor.** LC97FMR60'ta önce **filtre kapağı ortasından tutularak yavaşça** açılıyor; kapak sallanabildiği için açıldıktan sonra **sallanmayana kadar tutuluyor.** Ardından filtredeki **kilit açılıp** filtre **aşağı doğru döndürülerek** açılıyor. İki modelde de çıkan filtre **yağ damlamasın diye yere paralel** tutuluyor.

**4. Filtreyi yıka.** Siemens iki yol veriyor:
- **Elde:** filtreyi **sıcak deterjanlı suda yumuşat**, bir **fırçayla** temizle, **iyice durula** ve **yağların akmasını bekle.** İnatçı kirde yağ çözücü kullanılabiliyor.
- **Bulaşık makinesinde:** filtreyi makineye **serbest şekilde, sıkıştırmadan** yerleştir; sıcaklık ayarında **en çok 70 °C** seç. **Çok kirli** filtreyi bulaşıklarla birlikte yıkama.

Makinede **hafif renk değişimi** olabilir; kılavuza göre bunun filtrenin çalışmasına etkisi yok. Yoğun yakıcı alkali ya da asit içerikli temizlik maddesini alüminyum filtreyle kullanma; Siemens bunun bulaşık makinesinde patlamaya yol açabileceği uyarısını yapıyor.

**5. Koku filtresi doymuşsa değiştir.** Koku filtresi yalnız **havalandırma (dolaşımlı hava) modunda** kullanılıyor. LC.6KPJ.0 kılavuzunun kuralı: koku filtresi **temizlenemez veya rejenere edilemez**, günde yaklaşık bir saatlik normal kullanımda **her 6 ayda bir değiştirilir.** Değişim yağ filtresi çıkarılmışken yapılıyor: **eski filtre döndürülüp tutucudan çekilerek** çıkarılıyor, **yenisi tutucuya bastırılıp döndürülüyor.** Siemens yalnız **orijinal koku filtresi** kullanılmasını istiyor. LC97FMR60'ta koku filtresi değişimi cihazla gelen **ayrı kılavuzda** anlatılıyor; yenilenebilir filtre kullanıyorsan da o kılavuzun uyarıları geçerli.

**6. Yağ filtresini kilitleyerek tak.** Filtre yine **alttan elle tutularak** yerleştiriliyor. LC.6KPJ.0'da filtre **yukarı kaldırılıp kilitler yerine oturtuluyor** ve **kilitlerin oturduğundan emin olunuyor.** LC97FMR60'ta filtre yerleştirilip **kilit yuvasına takılıyor**; yanlış oturduysa kilit dikkatle öne bastırılıp filtre çıkarılıyor ve doğru yerleştiriliyor.

**7. Göstergeyi sıfırla.** Kılavuzlara göre temizlik ya da değişimden sonra gösterge **senin sıfırlamanla** sönüyor:
- **LC.6KPJ.0:** cihaz **açıkken** kumanda alanındaki dolum göstergesi tuşunu **yaklaşık 3 saniye** basılı tut; gösterge sıfırlanır ve sembol söner.
- **LC97FMR60:** cihaz **kapatıldıktan sonra** göstergede ilgili filtrenin sembolü görünür; bu sırada kılavuzun **7.18 Dolum göstergesinin sıfırlanması** bölümünde gösterilen tuşa bas.

## Gösterge gereğinden erken ya da geç yanıyorsa

LC97FMR60 kılavuzuna göre dolum göstergesi **kullanılan filtreye göre ayarlanmalı**: yenilenebilir olmayan filtre, yenilenebilir filtre ve kirli hava işletimi için ayrı ayarlar var. Ayar **cihaz kapalıyken** yapılıyor ve tuş kombinasyonları kılavuzun **7.17** bölümünde. Filtre tipini değiştirdiysen göstergeyi de ona göre ayarla. Home Connect uygulaması kullanılıyorsa gösterge oradan da ayarlanabiliyor.

## Neden ertelenmemeli?

İki Siemens kılavuzu da yağ filtresinin **en az 2 ayda bir** temizlenmesini öneriyor ve aynı yerde bir yangın uyarısı yapıyor: **yağ filtrelerindeki yağ birikintileri alev alabilir.** Dolum göstergesi bu temizliği hatırlatmak için var.

Filtre temizliğinin markadan bağımsız ayrıntısı için [davlumbaz yağ filtresi nasıl temizlenir](/blog/davlumbaz-yag-filtresi-nasil-temizlenir/), çekiş şikâyeti için [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/), ses şikâyeti için [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/).

## Ne zaman servis

- Davlumbaz **hiç çalışmıyorsa:** Siemens tablosu fişin takılı olup olmadığına, sigorta kutusundaki ilgili sigortaya ve **oda aydınlatması ile diğer cihazların** çalışıp çalışmadığına bakmanı istiyor. Bunlar yerindeyse servis.
- **LED aydınlatma çalışmıyorsa:** LC97FMR60 kılavuzuna göre bozuk LED lambalar yalnız **üretici, yetkili servis ya da ehliyetli bir elektronik tesisatçı** tarafından değiştirilir.
- Kılavuzların genel kuralı: usulüne uygun olmayan onarımlar tehlikelidir, cihazda yalnız **eğitimli uzman personel** onarım yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Filtre temizliği, koku filtresi değişimi ve gösterge sıfırlama kullanıcıya; elektrik, LED ve motor servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
