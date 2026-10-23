---
title: "LG çamaşır makinesi tE hatası: kontrol hatası"
description: "LG çamaşır makinesinde tE kodu, LG kılavuzuna göre kontrol hatası: fişi çek, servisi ara. tcL ve CL ile farkı, içerideki su ve servis sınırı."
slug: "lg-camasir-makinesi-te-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork C). Konu seçimi: origin/main'de lg-camasir-makinesi-te-hatasi yok
#   (LG çamaşırda IE, OE, UE, dE, LE tek kod sayfaları ve hata-kodlari merkezi var; tE için tek kod sayfası yok).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) Sorgular.csv'de "lg" + "te hatası" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "lg çamaşır makinesi te":
#   1. "…te hatası" · 2. "…temizleme" · 3. "…teknik servis".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-lg-camasir-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. pdftotext -layout.
#  (A) F4V5RGP2T kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  (B) F4V3VYW3WE kullanma kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw  52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  (C) F4Y5EYW0W kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
# tE satırı A s.52, B s.43, C s.45 · Çocuk Kilidi / CL A s.41 · tcL + Kazan Temizleme ayda bir A s.48 · fişi çek, panelleri sökme A s.47
#   · kullanımdan sonra fiş + su takviyesi kapat, tamir yalnız yetkili personel A s.6 · acil su tahliyesi A s.49 · kapak güvenlik kilidi A s.56.
# BİLEREK YAZILMAYANLAR: tE'nin hangi kartı/sensörü gösterdiği (belgede yalnız "kontrol hatası") · "reset" kombinasyonu · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: lg-camasir-makinesi-te-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (suyun soğuması için bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu", "Sığ bir kap ve bez"]
steps:
  - "Ekrandaki yazıyı tam oku; tE, tcL ve CL birbirinden farklı mesajlardır."
  - "Ekranda tcL varsa bu arıza değil, Kazan Temizleme önerisidir; uygun bir zamanda programı çalıştır."
  - "Ekranda CL varsa Çocuk Kilidi açıktır; kılavuzdaki düğme ikilisini birkaç saniye basılı tutarak kapat."
  - "Ekranda tE varsa LG'nin talimatına uy ve güç fişini prizden çek."
  - "Makineye su veren musluğu kapat."
  - "Tamburda su varsa soğumasını bekle, gerekirse kılavuzdaki acil su tahliyesini yap ve çamaşırları çıkar."
  - "Kontrol panelini ya da makinenin kapaklarını açmaya çalışmadan LG yetkili servisini ara."
faq:
  - q: "LG çamaşır makinesinde tE hatası ne demek?"
    a: "LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında tE, kontrol hatası başlığıyla geçiyor ve açıklaması tek cümle: bu kontrol hatasıdır. Kılavuz hangi parçanın etkilendiğini yazmıyor; bunu servis tespit eder."
  - q: "tE hatasını evde kendim düzeltebilir miyim?"
    a: "Hayır. LG'nin bu kod için verdiği çözüm: güç prizini çıkarın ve servisi arayın. Kılavuz ayrıca cihazın panellerinin sökülmemesini ve tamirin yalnız yetkili personel tarafından yapılmasını istiyor."
  - q: "Ekranda tcL yazıyor, bu tE ile aynı mı?"
    a: "Değil. LG'ye göre tcL, Kazan Temizleme programını çalıştırma önerisi. Kılavuz bu programın deterjan ve yumuşatıcı birikintilerini azaltmak için ayda bir (gerekirse daha sık) çalıştırılmasını istiyor. Arıza kodu değil."
  - q: "Ekranda CL yazıyor ve düğmeler çalışmıyor, arıza mı?"
    a: "Büyük ihtimalle Çocuk Kilidi açık. LG'ye göre bu işlev açıkken Güç düğmesi hariç tüm düğmeler kilitlenir ve Güç düğmesi kapatıldığında sıfırlanmaz. F4V5RGP2T kılavuzunda kilit, makine açıkken Zaman Erteleme ve Öğe Ekle düğmelerine birlikte 3 saniye basılarak açılıp kapanıyor; senin modelin için kendi kılavuzuna bak."
  - q: "tE verdi, makinede su ve çamaşır kaldı; ne yapmalıyım?"
    a: "Fiş çekiliyken suyun soğumasını bekle. Kapak güvenlik nedeniyle kilitliyse zorlama. Kılavuzdaki acil su tahliyesiyle suyu tahliye borusundan bir kaba boşalt, kalan suyu tahliye pompası filtresini sökerek al, filtreyi sızdırmayacak şekilde geri tak. Çamaşırları çıkarıp kapağı kuruması için aralık bırak."
images:
  coverAlt: "Çamaşır odasında ekranı yanan, kapağı kapalı beyaz bir önden yüklemeli çamaşır makinesi"
  steps:
    - "Çamaşır makinesinin kontrol panelindeki küçük ekranın yakın planı"
    - "Kapağı açık, içi boş ve temiz görünen bir çamaşır makinesi tamburu"
    - "Çamaşır makinesinin kontrol panelinde yan yana duran iki düğme"
    - "Prizden çekilmiş, zeminde duran bir çamaşır makinesi fişi"
    - "Duvardaki su musluğunun kapalı konuma getirilmiş kolu"
    - "Çamaşır makinesinin önünde açılmış küçük tahliye kapağı ve önünde sığ bir kap"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve garanti kartı"
---

Makine durdu, ekranda **tE** yazıyor. LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında bu kodun başlığı **kontrol hatası**, açıklaması da tek cümle: bu kontrol hatasıdır. Çözüm satırı: güç prizini çıkarın ve servisi arayın. Kodun kendisi evde çözülmüyor; ama ekrandaki yazının gerçekten tE olup olmadığını ayırmak, içerideki suyu ve çamaşırı güvenle almak senin elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** tE, LG'ye göre kontrol hatası; tek çözüm fişi çekip servisi aramak. Önce ekrandakinin tcL (Kazan Temizleme önerisi) ya da CL (Çocuk Kilidi) olmadığından emin ol. Gerçekten tE ise fişi çek, musluğu kapat, su soğuyunca gerekirse acil tahliye yap ve LG yetkili servisini ara.

## Ekran ne söylüyor

| Ekranda gördüğün | LG kılavuzuna göre anlamı | Kim ne yapar |
|---|---|---|
| **tE** | Kontrol hatası | 🛠️ Fişi çek → 🔧 servis |
| **tcL** | Kazan Temizleme programını çalıştırma önerisi | 🛠️ Programı çalıştır |
| **CL** | Çocuk Kilidi etkin; Güç hariç düğmeler kilitli | 🛠️ Kilidi kapat |
| **PF** | Çalışma sırasında güç arızası | 🛠️ Başlat/Durdur ile yeniden başlat |
| **PE** | Su seviyesi sensörü hatalı | 🛠️ Musluk kapat, fiş çek → 🔧 servis |

Küçük ekranda harfler birbirine benzeyebilir. tE ile tcL'yi karıştırıp gereksiz yere servis çağırmak da, CL'yi arıza sanmak da sık yaşanan bir şey; ilk adım bu yüzden okumak.

## Adım adım: evde yapılacaklar

**1. Yazıyı tam oku.** Ekrana yakından bak ve harfleri tek tek say. LG tablosunda **tE** kontrol hatası. Üç harfli **tcL** ve iki harfli **CL** ise arıza kodu değil, birer bilgi mesajı. Gördüğünü not al; servis bunu soracak.

**2. tcL ise Kazan Temizleme.** LG kılavuzuna göre tcL, Kazan Temizleme işlevini çalıştırma önerisini belirtmek için görüntülenir. Bu program deterjan ve yumuşatıcı birikintilerini azaltmak için ayda bir, gerekirse daha sık çalıştırılmalı. Tamburu boşalt, kılavuzdaki gibi ana yıkama bölmesine kireç çözücü koy, Kazan Temizleme'yi seç ve Başlat/Durdur'a bas.

**3. CL ise Çocuk Kilidi.** LG'ye göre Çocuk Kilidi açıkken Güç düğmesi hariç bütün düğmeler kilitlenir ve makine kapatılıp açılınca bu kilit sıfırlanmaz. F4V5RGP2T kılavuzunda kilit, makine açıkken **Zaman Erteleme** ve **Öğe Ekle** düğmelerine birlikte 3 saniye basılarak açılıp kapanıyor; senin modelindeki düğme ikilisi kendi kılavuzunda yazar.

**4. tE ise fişi çek.** Ekrandaki gerçekten tE ise LG'nin talimatı net: güç prizini çıkarın. Kılavuzun bakım bölümü de cihazla ilgili bir iş yapmadan önce elektrik çarpması riskine karşı fişin çekilmesini istiyor.

**5. Musluğu kapat.** LG, kullanımdan sonra cihazın fişinin çekilmesini ve su takviyesinin kapatılmasını öneriyor. Makine servis bekleyecekse musluğu kapalı tut.

**6. İçerideki su ve çamaşır.** LG'ye göre makine çalışmaya başladıktan sonra kapı güvenlik nedeniyle açılmaz, kapı kilidi simgesi sönünce açılır; kapağı zorlama. Tamburda su varsa önce soğumasını bekle, sonra kılavuzdaki acil su tahliyesini uygula: tahliye kapağının başlığını aç, tahliye borusundan suyu sığ bir kaba boşalt, kalan suyu tahliye pompası filtresini sökerek al ve filtreyi sızdırmayacak şekilde dikkatle geri tak. Ayrıntılı tarif [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısında. Çamaşırları çıkar; LG nemli çamaşırın makinede kalmasının koku yapabileceğini yazıyor.

**7. Paneli açma, servisi ara.** tE için LG'nin son talimatı servisi aramak. Kılavuz cihazın üzerindeki panelleri ya da cihazın kendisini sökmeye çalışmamanı, kontrol paneline keskin nesnelerle müdahale etmemeni ve tamirin yalnız yetkili personel tarafından yapılmasını istiyor.

## tcL'yi neden ertelememeli

tcL arıza değil ama görmezden gelinecek bir mesaj da değil. LG, Kazan Temizleme programını deterjan ve yumuşatıcı birikintilerinin ve diğer kalıntıların oluşumunu azaltmak için ayda bir çalıştırmanı istiyor. Makinenin içinde kötü bir koku ya da küf varsa kılavuzun önerisi, bu programı belirlenen aralıklara ek olarak üç hafta boyunca haftada bir kez çalıştırmak. Program bitince kapağı kuruması için açık bırak; kılavuza göre içi tamamen kurumayan makine kötü koku ya da küf yapabilir. Kapağı açık bırakırken evde çocuk varsa gözetim altında olsun.

## Ne zaman servis

- Ekranda tE gördüğün her durumda (LG'nin tek çözümü servis)
- CL kapatıldığı hâlde düğmeler tepki vermiyorsa
- tE ile birlikte makinenin altında su varsa
- Su boşaltıldıktan ve kilit simgesi söndükten sonra da kapak açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekranı okumak, Kazan Temizleme, Çocuk Kilidi, fiş, musluk, acil su tahliyesi ve çamaşırlar sende. Kontrol kartı, kablolar ve makinenin panelleri LG yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. Ekranda tam olarak tE mi yazıyor (tcL ya da CL değil)?
3. Kod yıkamanın hangi aşamasında çıktı?
4. Tamburda su kaldı mı, acil tahliye yaptın mı?
5. Ekranda başka bir kod görüyor musun?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. LG'nin bütün kodları [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) sayfasında, ekran simgeleri [LG çamaşır makinesi sembolleri ve anlamları](/blog/lg-camasir-makinesi-sembolleri-ve-anlamlari/) yazısında, makine hiç açılmıyorsa [LG çamaşır makinesi çalışmıyor](/blog/lg-camasir-makinesi-calismiyor/) yazısında. Bil, gör, çağır.
