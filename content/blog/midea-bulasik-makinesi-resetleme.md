---
title: "Midea bulaşık makinesi resetleme nasıl yapılır"
description: "Midea bulaşık makinesinde reset: Başlat/Duraklat'a 3 saniye basarak iptal, program değiştirme, çocuk kilidi, şalter ve uygulama bağını sıfırlama."
slug: "midea-bulasik-makinesi-resetleme"
date: "2026-10-25"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı C (YK #182 Dalga 8, küme Z5 — Dalga 7 yedeği). origin/main 829cec5'te Midea bulaşık makinesi slug'ı/başlığı yok; midea-camasir-makinesi-resetleme var (çamaşır, ayrı sorgu).
# Arama kanıtı (25 Eki 08:50 +03, ham: Z5/_kaynak/ot.tsv): "midea bulaşık makinesi r" → 1. "…resetleme"; "midea bulaşık makinesi" → 5. GSC: satır yok (www-5, www-6 Sorgular.csv'de "midea" 0).
# Belge zinciri (bu koşu 25 Eki): Midea UK resmî ürün sayfaları (200) → www.midea.com/content/dam/midea-aem/uk/... PDF (200 application/pdf).
#  (B1) MDWEF1034D(W)-WG-UK kullanım kılavuzu EN, 48 s., md5 781d6848e00fc64d0520687a8f1b054e
#  (B2) MDWEF1034D(SS)-WG-UK kullanım kılavuzu EN, 48 s., md5 6b3fbfe86b2a2b1e977dd10a0c83ca83 (metin B1 ile aynı)
#  PDF s.6–8 (kablo, kapak, kumanda, bekleme), s.13 (uzatma kablosu), s.17–18 (kontrol paneli, çocuk kilidi, Bağlan, Başlat/Duraklat), s.19 (ekran), s.30 (parlatıcı ayar modu), s.32 (program değiştirme/reset), s.33 (unutulan tabak), s.35 (uygulama yeniden ekleme), s.39 (makine çalışmıyor), s.42 (hata tablosu)
# BİLEREK YAZILMAYANLAR: servis/test modu (kılavuzda yok) · "reset yazılımı" (yalnız yedek parça listesinde geçiyor, kullanıcı işlemi değil) · kart teşhisi (#31) · fiyat (#46) · Türkiye modeli ayrıntısı.
# Alıntı denetimi: midea-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Telefon (uygulama bağlantısı için)"]
steps:
  - "Düğmeler tepki vermiyorsa Program sol ve sağ düğmelerine aynı anda basılı tutarak çocuk kilidini aç."
  - "Ekran kapalıysa Güç düğmesine bas; açılmıyorsa fiş, kapak ve şalteri kontrol et."
  - "Çalışan programı Başlat/Duraklat ile duraklat."
  - "Başlat/Duraklat düğmesini 3 saniyeden uzun basılı tutarak program seçim moduna geç."
  - "Deterjan bölmesi açıldıysa yeniden doldur, yeni programı seç ve Başlat/Duraklat'a bas."
  - "Yalnız unutulan tabağı eklemek istiyorsan programı iptal etmeden duraklat, ekle ve devam ettir."
  - "Uygulama bağlantısı sorunluysa Bağlan düğmesiyle bağı çöz ve cihazı uygulamaya yeniden ekle."
faq:
  - q: "Midea bulaşık makinesinin reset düğmesi var mı?"
    a: "MDWEF1034D kılavuzundaki kontrol paneli tablosunda ayrı bir reset düğmesi yok. Kılavuz resetlemeyi program değiştirme bölümünde Başlat/Duraklat düğmesiyle anlatıyor: duraklat, sonra 3 saniyeden uzun bas."
  - q: "Programı yarıda nasıl iptal ederim?"
    a: "Kapak açılarak duraklatılan programda Başlat/Duraklat düğmesini 3 saniye basılı tutmak, kılavuza göre o anki programı ve işlevi iptal ediyor."
  - q: "Düğmelere basıyorum, hiçbir şey olmuyor. Neden?"
    a: "Çocuk kilidi açık olabilir. Kılavuza göre kilit açıkken yalnız Güç düğmesi çalışıyor. Program sol ve sağ düğmelerine aynı anda 3 saniye basmak kilidi açıp kapatıyor."
  - q: "Makine kendi kendine kapandı, arıza mı?"
    a: "Kılavuza göre enerji tasarrufu için makine bekleme modunda 15 dakika işlem yapılmazsa kendiliğinden kapanıyor. Güç düğmesine basman yeterli."
  - q: "Reset hata kodunu siler mi?"
    a: "Kılavuz reseti hata kodu çözümü olarak vermiyor. Kodun nedeni giderilmezse geri gelmesi beklenir (çıkarım); çözülemeyen kodda kılavuz profesyonel yardım istiyor."
images:
  coverAlt: "Mutfakta tezgâh yanında duran, kapak üstünde düğme sırası görünen solo bulaşık makinesi"
  steps:
    - "Bulaşık makinesinin kapak üstündeki program seçme düğmeleri ve kilit simgesi"
    - "Prize takılı fiş ve kapağı tam kapanmış bulaşık makinesi"
    - "Bulaşık makinesi kapak üstündeki başlatma düğmesi"
    - "Bulaşık makinesi ekranında yanıp sönen program göstergeleri"
    - "Bulaşık makinesi kapağının iç yüzündeki açık deterjan bölmesi"
    - "Kapağı açık bulaşık makinesinin alt sepetine yerleştirilen tabak"
    - "Tezgâh üzerinde duran telefon ve yanında bulaşık makinesi"
---

Midea bulaşık makinende yanlış programı başlattın, düğmeler tepki vermiyor ya da makine bir hata kodundan sonra takılı kaldı. Midea'nın kılavuzunda bunun için ayrı bir reset düğmesi yok; kontrol paneli tablosundaki düğmeler Güç, Bağlan, Program, Çocuk kilidi, Gecikme, Alt, Otomatik açma, Power Wash, Ion Dishfresh ve Başlat/Duraklat. Sıfırlama, program değiştirme bölümünde anlatılan Başlat/Duraklat yöntemiyle yapılıyor. Bu yazı Midea'nın İngiltere sitesinde yayımlanan MDWEF1034D(W)-WG-UK ve MDWEF1034D(SS)-WG-UK kullanım kılavuzuna dayanıyor (kılavuzun İngilizce baskısı, alıntılar ve düğme adları Türkçeye çevrildi). Türkiye'deki modelinde panel farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Reset = Başlat/Duraklat. Önce kısa basışla duraklat, sonra 3 saniyeden uzun bas; makine program seçim moduna geçer. Yeni programı seç, gerekirse deterjanı yenile, yeniden Başlat/Duraklat. Düğmeler tepkisizse çocuk kilidini aç. Ekran kararıksa Güç düğmesi, fiş, kapak ve şalter.

## Kılavuzda reset nerede

| Durum | Kılavuzdaki yol |
|---|---|
| Program yeni başladı, değiştirmek istiyorsun | Duraklat, Başlat/Duraklat'a 3 saniyeden uzun bas, yeni programı seç |
| Kapak açılarak duraklatılan programı bitirmek | Başlat/Duraklat'ı 3 saniye basılı tut: program ve işlev iptal |
| Düğmeler tepki vermiyor | Çocuk kilidi: Program sol + sağ düğmeleri birlikte 3 saniye |
| Ekran kapalı | Güç düğmesi; açılmazsa fiş, kapak, şalter |
| Uygulama bağlantısı kopuk | Bağlan düğmesi: açıkken 15 saniye bağı çözer |

Kılavuzun program değiştirme notu önemli: bir program ancak kısa süredir çalışıyorsa değiştirilebilir. Aksi hâlde deterjan bırakılmış ya da deterjanlı yıkama suyu boşaltılmış olabilir. Bu durumda kılavuz makinenin resetlenmesini ve deterjan bölmesinin yeniden doldurulmasını istiyor.

## Adım adım: Midea bulaşık makinesini resetlemek

**1. Çocuk kilidini kontrol et.** Düğmeler tepki vermiyorsa ilk bakılacak yer burası. Kılavuza göre çocuk kilidi devredeyken kontrol paneli kilitleniyor ve yalnız Güç düğmesi çalışıyor. Kilidi açmak ya da kapatmak için Program sol ve sağ düğmelerine **aynı anda 3 saniye** basılı tut. Ekranda ayrıca çocuk kilidi göstergesi var; yanıyorsa kilit büyük ihtimalle devrede (çıkarım).

**2. Ekran kapalıysa gücü kontrol et.** Kılavuz, enerji tasarrufu için makinenin bekleme modunda **15 dakika** işlem yapılmazsa kendiliğinden kapandığını yazıyor; kararmış ekran her zaman arıza değil. Güç düğmesine bas. Makine yine açılmıyorsa sorun giderme tablosundaki sıra şu: makinenin açık ve kapağın sıkıca kapalı olduğundan, fişin prize tam oturduğundan emin ol; şalter düştüyse kaldır ve aynı hattı paylaşan başka cihazları çıkar. Kılavuz uzatma kablosu ya da adaptör kullanılmamasını da istiyor.

**3. Programı duraklat.** Çalışan programda Başlat/Duraklat düğmesine kısa bas. Kapağı açarak da duraklatabilirsin, ama kılavuz makine çalışırken kapağın çok dikkatli açılmasını istiyor: su fışkırabilir, program ortasında sıcak buhar yakabilir.

**4. Başlat/Duraklat'a 3 saniyeden uzun bas.** Kılavuzun reset sırasındaki ikinci adım bu: düğme 3 saniyeden uzun basılı tutulunca makine **program seçim moduna** geçiyor. Kontrol paneli tablosu aynı işlemi kapak açılarak duraklatılan program için de tarif ediyor; bu uzun basış o anki programı ve seçilen işlevi iptal ediyor.

**5. Deterjanı yenile, yeni programı seç.** Program bir süredir çalışıyorsa deterjan bölmesi açılmış olabilir; kılavuz bu durumda bölmenin yeniden doldurulmasını istiyor. Deterjanı programdan hemen önce koy; kılavuz deterjanın makine çalıştırılmaya hazır olana kadar bölmeye konmamasını öneriyor. Program sol ya da sağ düğmesiyle istediğin programı seç, Başlat/Duraklat'a bas. Makine birkaç saniye sonra başlıyor.

**6. Unutulan tabak için reset gerekmez.** Bir tabağı unuttuysan programı iptal etmene gerek yok. Kılavuza göre deterjan bölmesi açılmadan önce: Başlat/Duraklat ile duraklat, püskürtme kolları durduktan sonra kapağı tamamen aç, tabağı ekle, kapağı kapat ve Başlat/Duraklat'a bas; makine kaldığı yerden devam ediyor.

**7. Uygulama bağını sıfırla.** Kılavuzdaki model SmartHome uygulamasıyla çalışıyor. Bağlantı takıldıysa iki yol var: makine açıkken Bağlan düğmesine **15 saniye** basmak cihazın uygulamayla bağını çözüyor; makine kapalıyken **10 saniye** basmak kablosuz bağlantıyı kapatıyor, aynı işlem yeniden açıyor. Bağlantı kurulamazsa erişim noktası ve Bağlan göstergesi 10 dakika sonra kendiliğinden kapanıyor. Ardından uygulamanın ana sayfasında "+" ile cihazı kategori ve modeline göre yeniden ekle.

## Ayar modunda kaldıysan

Parlatıcı miktarı ayrı bir ayar modundan değiştiriliyor: kapak kapalıyken makineyi aç, ilk 60 saniye içinde Program sağ düğmesine 5 saniyeden uzun, ardından Gecikme düğmesine bas; parlatıcı göstergesi yanıp sönmeye başlıyor ve seçenekler d1 ile d5 arasında dönüyor. Kılavuza göre 5 saniye işlem yapmazsan ya da Güç düğmesine basarsan ayar tamamlanıyor ve moddan çıkılıyor. Bu moda yanlışlıkla girdiysen Güç düğmesine basman yeterli.

## Hata kodu görüyorsan

Kılavuz reseti hata kodu çözümü olarak vermiyor; nedeni giderilmeyen kodun geri gelmesi beklenir (çıkarım). Tablodaki E1 için [Midea bulaşık makinesi E1 hatası](/blog/midea-bulasik-makinesi-e1-hatasi/), E4 için [Midea bulaşık makinesi E4 hatası](/blog/midea-bulasik-makinesi-e4-hatasi/) yazısına bak. E3, E8 ve Ed satırlarının çözümleri ısıtıcı, dağıtım valfi ve kartlar arasındaki kablolamayla ilgili; bunlar servis işi.

## Ne zaman servis

- Çocuk kilidi kapalı, güç normal olduğu hâlde düğmeler tepki vermiyorsa
- Şalter makineyi her çalıştırdığında düşüyorsa
- Resetten sonra aynı hata kodu dönüyorsa
- Ekranda E3, E8 ya da Ed görüyorsan

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, kilit, fiş ve şalter sende; kart, kablolama, elektrik tesisatı ve makinenin içi yetkili servisin. Kılavuz kumandalarla oynanmamasını, hasarlı besleme kablosunun yalnız üretici, servis temsilcisi ya da benzer yetkin biri tarafından değiştirilmesini istiyor.

## Servisi aramadan önce kısa özet

1. Modelin ne (tanıtım etiketinde yazar)?
2. Ekranda ne yazıyor ya da hangi gösterge yanıyor?
3. Çocuk kilidi göstergesi yanıyor mu?
4. Başlat/Duraklat'a uzun basınca ne oldu?
5. Şalter düştü mü?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
