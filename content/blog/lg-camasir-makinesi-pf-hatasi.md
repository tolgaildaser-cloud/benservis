---
title: "LG çamaşır makinesi PF hatası ne demek?"
description: "LG çamaşır makinesinde PF kodu, LG kılavuzuna göre çalışma sırasında güç arızası. Başlat/Durdur, fiş, priz ve uzatma kablosu kontrolü, servis sınırı."
slug: "lg-camasir-makinesi-pf-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork C). Konu seçimi: origin/main'de lg-camasir-makinesi-pf-hatasi yok
#   (PF yalnız lg-camasir-makinesi-calismiyor'da 4, sembolleri-ve-anlamlari'nda 1 kez tablo satırı olarak geçiyor; tek kod sayfası yok).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) Sorgular.csv'de "lg" + "pf" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "lg çamaşır makinesi pf":
#   1. "…pf hatası" · 2. "…pf hatası ne demek" · 3. "…pf hata kodu".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-lg-camasir-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. pdftotext -layout.
#  (A) F4V5RGP2T kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  (B) F4V3VYW3WE kullanma kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw  52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  (C) F4Y5EYW0W kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
# PF satırı A s.53, B s.44, C s.46 · fiş tam girsin, çoklu priz/uzatma yok, priz değiştirme, topraklama, hasarlı kablo A s.5
#   · uzatma/çift adaptör yok, priz 1 m, kolay erişim A s.6 · "Cihaz çalışmıyor" satırları (faaliyetsizlik, priz, kontrol sıfırlama, elektrik gelince devam) A s.55.
# BİLEREK YAZILMAYANLAR: sigorta/devre kesici değiştirme ya da sıfırlama tarifi (kılavuzda var, ama #31 gereği yazılmadı; elektrik panosu kullanıcı işi değil)
#   · gerilim ölçümü · kart arızası tahmini · regülatör önerisi (belgede yok) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: lg-camasir-makinesi-pf-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu"]
steps:
  - "Elektriğin geri geldiğinden emin ol, sonra Başlat/Durdur düğmesine basarak programı yeniden başlat."
  - "Ekran tamamen kararmışsa önce Güç düğmesine bas; kullanılmadığında panelin kapanması normaldir."
  - "Fişin prize tam oturduğunu kontrol et."
  - "Araya çoklu priz, uzatma kablosu ya da çift adaptör girmişse kaldır ve makineyi doğrudan duvardaki prize tak."
  - "Prizin topraklı olduğundan emin değilsen kendin uğraşma, yetkili bir elektrikçiye kontrol ettir."
  - "Kabloda ya da fişte hasar görürsen makineyi çalıştırma."
  - "PF elektrik kesintisi olmadan sık tekrarlıyorsa LG yetkili servisini ara."
faq:
  - q: "LG çamaşır makinesinde PF hatası ne demek?"
    a: "LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında PF, güç arızası başlığıyla geçiyor: çalışma sırasında güç arızası veya elektrik hizmetinde yetersizlik meydana gelmiş olabilir. Kısacası yıkama sürerken makinenin elektriği kesilmiş ya da yetersiz kalmış."
  - q: "PF hatası nasıl silinir?"
    a: "LG'nin tek talimatı: programı yeniden başlatmak için Başlat/Durdur düğmesine basın. Elektrik geri geldiyse bu çoğu zaman yeterli. Kod elektrik kesilmeden sık sık geliyorsa priz ve kablo düzenine bak, sürerse servis çağır."
  - q: "Elektrik gidip gelince yıkama baştan mı başlar?"
    a: "LG kılavuzunun Cihaz çalışmıyor satırında, cihazın elektrik geldiğinde programı kaldığı yerden devam ettireceği yazıyor. Ekranda PF görüyorsan Başlat/Durdur ile programı yeniden başlat."
  - q: "Çamaşır makinesini uzatma kablosuyla kullanabilir miyim?"
    a: "Hayır. LG, cihazın çoklu priz çıkışlarına, güç panolarına ya da uzatma kablosuna takılmamasını, uzatma kablosu ve çift adaptör kullanılmamasını istiyor. Makine topraklı ve kolay erişilebilen bir duvar prizine takılmalı."
  - q: "Fiş prize uymuyor, fişi değiştirebilir miyim?"
    a: "LG cihazla birlikte verilen fişin değiştirilmemesini, prize uymuyorsa yetkili bir elektrikçiye doğru bir priz taktırılmasını istiyor."
images:
  coverAlt: "Çamaşır odasında ekranı yanan beyaz bir önden yüklemeli çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
---

Yıkama durdu, ekranda **PF** yazıyor. LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında bu kodun başlığı **güç arızası**: çalışma sırasında güç arızası veya elektrik hizmetinde yetersizlik meydana gelmiş olabilir. LG'nin bu kod için verdiği çözüm tek adım: programı yeniden başlatmak için Başlat/Durdur düğmesine basın. PF, LG tablosunda servis çağırmanı istemeyen kodlardan biri; yine de sık tekrarlıyorsa kılavuzun güç uyarılarına göre bakılacak yerler var.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** PF, yıkama sırasında elektriğin kesildiğini ya da yetersiz kaldığını söyler. Elektrik geldiyse Başlat/Durdur'a bas. Sık tekrarlıyorsa fişin tam oturduğuna, araya uzatma kablosu ya da çoklu priz girmediğine bak. Kablo veya fiş hasarlıysa makineyi çalıştırma; sorun sürerse servis.

## Ekran ne söylüyor

| Ekranda gördüğün | LG kılavuzuna göre anlamı | Kim ne yapar |
|---|---|---|
| **PF** | Çalışma sırasında güç arızası ya da elektrik yetersizliği | 🛠️ Başlat/Durdur ile yeniden başlat |
| **Ekran tamamen kapalı** | Uzun süre işlem yapılmayınca panelin gücü kesilir | 🛠️ Güç düğmesine bas |
| **Düğmeler tepki vermiyor** | Çocuk Kilidi etkin olabilir | 🛠️ Çocuk Kilidi'ni kapat |
| **tE** | Kontrol hatası | 🔧 Fişi çek, servis |

LG'nin tanımına göre PF bir parçanın adı değil, elektrik beslemesiyle ilgili bir durum: program sürerken güç kesilmiş ya da yetersiz kalmış olabilir.

## Adım adım: evde denenecekler

**1. Elektrik geldiyse Başlat/Durdur.** LG'nin PF satırındaki tek talimat bu: programı yeniden başlatmak için **Başlat/Durdur** düğmesine bas. Evde kısa bir kesinti olduysa çoğu zaman bu kadarı yeter. Kılavuzun "Cihaz çalışmıyor" satırına göre cihaz, elektrik geldiğinde programı kaldığı yerden devam ettirir.

**2. Ekran kararmışsa Güç düğmesi.** Ekranda hiçbir şey yoksa bu PF değil, başka bir durum olabilir. LG'ye göre makine uzun süre işlem görmezse kontrol panelinin gücü kesilir; bu normal ve **Güç** düğmesine basınca geri gelir. Programı seçip Başlat/Durdur'a basmazsan makine bir süre sonra kendini yine kapatır. Düğmeler tepki vermiyorsa **Çocuk Kilidi** açık olabilir. Aynı tabloda bir neden daha var: evdeki su basıncı aşırı düşükse makine çalışmayabilir; LG bunu anlamak için evdeki başka bir musluğu kontrol etmeni öneriyor.

**3. Fiş tam oturuyor mu?** LG'nin güvenlik bölümü, elektrik fişinin prize tamamen girdiğinden emin olunmasını istiyor. Fişi bir kez çekip prize sonuna kadar yeniden tak.

**4. Uzatma kablosu ve çoklu priz yok.** Kılavuz bu konuda iki yerde açık: cihazı çoklu priz çıkışlarına, güç panolarına veya uzatma güç kablosuna takmayın; uzatma kablosu veya çift adaptör kullanmayın. Makine şu an böyle bir düzenle çalışıyorsa doğrudan duvardaki prize tak. LG prizin cihazın bir yanında bir metre mesafede ve kolay erişilebilir olmasını istiyor.

**5. Topraklı priz.** LG'ye göre makinenin fişi topraklama pimli ve yerel düzenlemelere uygun kurulmuş, topraklanmış bir prize takılmalı. Prizin topraklı olduğundan emin değilsen kendin açıp kurcalama; kılavuz bu durumda yetkili bir elektrikçiye ya da servis personeline kontrol ettirmeni söylüyor. Fiş prize uymuyorsa da fişi değiştirme, elektrikçiye doğru prizi taktır.

**6. Hasarlı kablo varsa çalıştırma.** LG, kablosu ya da fişi hasarlı, eksik ya da kırık parçası olan bir cihazın asla çalıştırılmamasını istiyor. Kabloda ya da fişte bir hasar görürsen makineyi fişten çekili bırak ve servisi ara.

**7. Sık tekrarlıyorsa servis.** Evde başka bir cihaz etkilenmeden, elektrik kesilmeden PF sürekli geliyorsa sorun artık prizin ötesinde olabilir. Tesisat elektrikçinin, makinenin içi LG yetkili servisinin işi. Kılavuz cihaz tamirinin yalnız yetkili personel tarafından yapılmasını istiyor.

## Kesinti uzun sürerse kapak ve çamaşır

Elektrik uzun süre gelmezse kapağı zorlama. LG'ye göre cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz; kapı kilidi simgesi söndükten sonra güvenle açılır. Çamaşırları alabildiğinde fazla bekletme: LG, nemli çamaşırın makinede kalmasının buruşma, renk değişimi ve koku yapabileceğini yazıyor. Kapağı ve kapak lastiğini silip kapağı kuruması için hafif aralık bırak.

## Ne zaman servis

- Elektrik kesintisi olmadan PF sık sık tekrarlıyorsa
- Başlat/Durdur'a bastığın hâlde program devam etmiyorsa
- Kabloda ya da fişte hasar varsa (makineyi çalıştırmadan)
- PF'nin yanında tE gibi başka bir kod çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Başlat/Durdur, Güç düğmesi, fişin oturması ve uzatma kablosunu kaldırmak sende. Priz, topraklama ve ev tesisatı elektrikçinin; makinenin kartı, kablo bağlantıları ve panelleri LG yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. PF ne sıklıkla çıkıyor, evde elektrik kesintisi oldu mu?
3. Makine doğrudan duvar prizine mi takılı?
4. Başlat/Durdur'a basınca program devam ediyor mu?
5. Ekranda başka bir kod görüyor musun?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç açılmıyorsa [LG çamaşır makinesi çalışmıyor](/blog/lg-camasir-makinesi-calismiyor/) yazısına, diğer kodlar için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) sayfasına, ekran simgeleri için [LG çamaşır makinesi sembolleri ve anlamları](/blog/lg-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına bak. Bil, gör, çağır.
