---
title: "Bosch bulaşık makinesi E:61-03 hatası"
description: "Bosch Serie 4 bulaşık makinesinde E:61-03: su boşaltılmıyor. Bosch kılavuzundaki üç sebep: tahliye hortumu, sifon bağlantısı ve pompa kapağı."
slug: "bosch-bulasik-makinesi-e61-03-hatasi"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/
#  (K) Bosch kısa kılavuz SMS4IKW61T (9001626280, Serie 4) https://media3.bosch-home.com/Documents/9001626280_A.pdf  2 s.  md5 8392c0fbccf9c23bb06945067b41989d
#      s.2 "Arızaları giderme" (tablo sayfa görüntüsünden de okundu; pdftotext sütunları karıştırıyor):
#      "E:61-03 değişimli olarak yanıyor. Su boşaltılmıyor. | Atık su hortumu tıkanmış veya bükülmüş. 1. Atık su hortumunu bükülme olmadan döşeyiniz. 2. Artıkları temizleyiniz.
#       | Sifon bağlantısı hala kapalı. ▶ Sifon bağlantısını kontrol ediniz ve gerekirse açınız. | Atık su pompasının kapağı gevşek. ▶ Atık su pompasının kapağını doğru şekilde oturtunuz."
#      s.2 "Atık su pompasının temizlenmesi": "1. Cihazı elektrik şebekesinden ayırınız. 2. Süzgeç sistemini çıkartınız. 3. Mevcut suyu boşaltınız. 4. Pompa kapağını bir kaşık yardımıyla kaldırınız ve çıkıntıdan tutunuz.
#       5. Pompa kapağını eğik şekilde içeri doğru kaldırınız ve çıkartınız. 6. Kanat çarkı bölgesindeki yemek artıklarını ve yabancı cisimleri temizleyiniz. 7. Pompa kapağını yerleştiriniz ve aşağı bastırınız.
#       a Pompa kapağı duyulur şekilde yerine oturur. 8. Süzgeç sistemini takınız."
#      s.2 "Süzgeçlerin temizlenmesi" 7: "Süzgeç sistemini cihaza yerleştiriniz ve kaba süzgeci saat yönünde çeviriniz. Ok işaretlerinin karşı karşıya durmasına dikkat ediniz."
#  (M) Bosch TR "Bulaşık makinemin ekranında temiz su musluğu hatası veriyor" https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/ekranda-su-muslugu-hatasi
#      HTML md5 ec824c71ef99eb691d60d9ee87136cc0 (dinamik) · gövde metni md5 d81cfb00321cef3237236eeed44ea546 (iki indirmede aynı)
#      "Cihazı hafifçe öne doğru çekerek soğuk su giriş hortumunda ve atık su hortumunda bükülme olup olmadığını kontrol edin. Görünürde bükülme veya dolanma varsa düzeltin."
#  (D) Bosch kullanma kılavuzu SM.../SB... https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#      s.36 Uyarı "Kesilme tehlikesi! Keskin ve sivri cisimler veya cam parçaları su boşaltma pompasını bloke edebilir. Yabancı cisimleri daima dikkatli çıkarınız." · s.35 "Onarım çalışmalarını daima uzman kişilere yaptırınız."
#      s.38 eski nesil tabloda aynı üç sebep "Hata kodu E:24" satırında: atık su hortumu tıkanmış veya katlanmış · sifon bağlantısı henüz kapalı · atık su pompasının kapağı gevşek.
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu" https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
#      "Makinenizi hareket ettirdiğinizde boşaltma hortumunun sıkışmamasına/katlanmamasına ve güç kablosunun çıkmamasına özen gösteriniz."
# BİLEREK YAZILMAYANLAR: "E:61-03 = E24'ün yeni adı" denklemi (Bosch eşleme yayımlamıyor; yazı yalnız sebeplerin aynı olduğunu söylüyor) · tahliye pompası/motor teşhisi (belgede yok) ·
#   hortumun makineden sökülüp içinin açılması (#31; kılavuzun "artıkları temizleyiniz" adımı yalnız ulaşılabilen kısım için anlatıldı) · sifon içini açma/tesisat işi (kılavuz yalnız "kontrol edip gerekirse açınız" diyor).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-e61-03-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bir çay kaşığı", "Sünger", "Koruyucu eldiven"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Makineyi hafifçe öne çekip atık su (tahliye) hortumunda bükülme ya da dolanma var mı bak."
  - "Atık su hortumunu bükülme olmadan döşe; ulaşabildiğin yerdeki artıkları temizle."
  - "Hortumun bağlandığı sifon bağlantısını kontrol et; hâlâ kapalıysa aç."
  - "Süzgeç sistemini çıkar ve tabanda kalan suyu süngerle boşalt."
  - "Pompa kapağını kaşıkla kaldırıp çıkar, kanat çarkı bölgesindeki artıkları dikkatle temizle."
  - "Pompa kapağını yerleştir ve duyulur şekilde oturana kadar aşağı bastır."
  - "Süzgeç sistemini ok işaretleri karşı karşıya gelecek şekilde tak, fişi tak ve makineyi çalıştır."
faq:
  - q: "Bosch bulaşık makinesinde E:61-03 ne demek?"
    a: "Bosch'un Serie 4 kısa kılavuzundaki arıza tablosunda satır şöyle: E:61-03 değişimli olarak yanıyor, su boşaltılmıyor. Kılavuz üç sebep veriyor: atık su hortumu tıkanmış veya bükülmüş, sifon bağlantısı hâlâ kapalı, atık su pompasının kapağı gevşek."
  - q: "E:61-03 hatasında ne yapmalıyım?"
    a: "Kılavuzun çözümleri sırasıyla: atık su hortumunu bükülme olmadan döşeyin ve artıkları temizleyin; sifon bağlantısını kontrol edip gerekirse açın; atık su pompasının kapağını doğru şekilde oturtun. Pompa kapağı için kılavuzda ayrı bir temizlik bölümü var; kapak bir kaşıkla kaldırılıyor ve yerine takılırken duyulur şekilde oturuyor."
  - q: "Sifon bağlantısı kapalı ne demek?"
    a: "Bosch'un kılavuzu E:61-03 sebeplerinden biri olarak sifon bağlantısının hâlâ kapalı olmasını sayıyor ve sifondaki bağlantının kontrol edilip gerekirse açılmasını istiyor. Kılavuz bunun ötesinde sifon üzerinde bir iş tarif etmiyor."
  - q: "E:61-03 ile E:61-02 farkı ne?"
    a: "İkisi de Bosch'un Serie 4 kısa kılavuzunda. E:61-03 suyun boşaltılamadığını söyler ve sebepleri hortum, sifon ve gevşek pompa kapağıdır. E:61-02'nin sebepleri ise atık su pompasının bloke olması ve pompa kapağının gevşek olmasıdır. Pompa kapağı ikisinde de ortak."
  - q: "Hepsini kontrol ettim, E:61-03 sürüyor. Ne yapmalıyım?"
    a: "Hortum düz, sifon bağlantısı açık, pompa kapağı temiz ve klik sesiyle oturmuşsa Bosch'un kılavuzunun kullanıcıya verdiği adımlar tükenmiş demektir. Bosch'un kılavuzu onarım çalışmalarının daima uzman kişilere yaptırılmasını söylüyor; makineyi kapatıp Bosch yetkili servisinden randevu al."
images:
  coverAlt: "Hafifçe öne çekilmiş bir bulaşık makinesinin arkasında düz uzanan gri tahliye hortumu ve evye altındaki sifon bağlantısı"
---

Bosch bulaşık makinenin ekranında **E:61-03** yazıyor; makinenin içinde su kalmış olabilir. Bu, yeni nesil Bosch Serie 4 modellerin kod biçimi: iki parçalı, arada tire. Bosch'un Serie 4 kısa kılavuzundaki arıza tablosunda bu kodun satırı şöyle: **"E:61-03 değişimli olarak yanıyor. Su boşaltılmıyor."** Kılavuz üç sebep ve her biri için bir çözüm veriyor. Bu yazıda o sırayı adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:61-03 = Bosch'a göre su boşaltılmıyor. Kılavuzdaki üç sebep: atık su hortumu tıkanmış ya da bükülmüş → sifon bağlantısı hâlâ kapalı → atık su pompasının kapağı gevşek. Sırayla kontrol et; sürerse yetkili servis.

## Adım adım: evde denenecekler

**1. Makineyi kapat ve fişini çek.** Bosch'un pompa temizliği yordamının ilk adımı cihazı elektrik şebekesinden ayırmak.

**2. Tahliye hortumuna bak.** Bosch'un destek sayfasındaki yöntem: cihazı **hafifçe öne doğru çekerek** atık su hortumunda bükülme olup olmadığını kontrol et. Bosch'un bilgilendirme kılavuzu da makine hareket ettirildiğinde boşaltma hortumunun sıkışmamasına ve katlanmamasına dikkat edilmesini istiyor.

**3. Hortumu düz döşe, artıkları temizle.** Kılavuzun çözümü iki adım: atık su hortumunu **bükülme olmadan döşe** ve **artıkları temizle**. Hortumun ulaşabildiğin kısmındaki tıkanıklığı temizle; hortumu makineden sökmeyi gerektiren bir iş için yetkili servise danış.

**4. Sifon bağlantısını kontrol et.** Kılavuzun ikinci sebebi: **"Sifon bağlantısı hala kapalı."** Hortumun bağlandığı sifondaki bağlantıyı kontrol et ve gerekirse aç.

**5. Süzgeci çıkar, suyu al.** Üçüncü sebep pompa kapağıyla ilgili; ona ulaşmak için önce süzgeç sistemini çıkar ve tabanda kalan suyu bir süngerle boşalt.

**6. Pompa kapağını çıkar ve temizle.** Kılavuzun tarifi: pompa kapağını **bir kaşık yardımıyla** kaldır, çıkıntısından tut, eğik şekilde içeri doğru kaldırarak çıkar. Ardından kanat çarkı bölgesindeki yemek artıklarını ve yabancı cisimleri temizle. Bosch'un uyarısı: keskin ve sivri cisimler veya **cam parçaları** pompayı bloke edebilir, yabancı cisimleri daima dikkatli çıkar.

**7. Kapağı doğru oturt.** Kılavuzun çözümü "atık su pompasının kapağını doğru şekilde oturtunuz". Kapağı yerleştir ve aşağı bastır; kılavuza göre kapak **duyulur şekilde** yerine oturur.

**8. Süzgeci tak ve dene.** Süzgeç sistemini yerleştir, kaba süzgeci saat yönünde çevir ve **ok işaretlerinin karşı karşıya** durmasına dikkat et. Fişi tak ve makineyi çalıştır.

## E:61-03, E:61-02 ve eski E24

Serie 4 kısa kılavuzunda pompa kapağı iki satırda geçiyor. **E:61-03** suyun boşaltılamadığını söyler; **E:61-02**'nin sebepleri ise atık su pompasının bloke olması ve kapağın gevşek olması. Pompa temizliğinin ayrıntıları için kardeş rehber: [Bosch bulaşık makinesi E25 hatası](/blog/bosch-bulasik-makinesi-e25-hatasi/) (orada E:61-02'yi de ele alıyoruz).

Eski nesil Bosch modellerde iki haneli kodlar kullanılıyor. Bosch'un eski bir kullanma kılavuzunda **E:24** satırında aynı üç sebep sayılıyor: atık su hortumu tıkanmış veya katlanmış, sifon bağlantısı henüz kapalı, atık su pompasının kapağı gevşek. Ekranında E24 görüyorsan: [Bosch bulaşık makinesi E24 hatası](/blog/bosch-bulasik-makinesi-e24-hatasi/).

Serie 4'ün diğer kodları ve göstergeleri: [Bosch Serie 4 bulaşık makinesi sembolleri ve anlamları](/blog/bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari/).

## Ne zaman servis

Hortum düz ve açık, sifon bağlantısı açık, pompa kapağı temiz ve klik sesiyle oturmuş, E:61-03 hâlâ çıkıyorsa kılavuzun kullanıcıya verdiği adımlar tükenmiş demektir. Bosch'un kılavuzundaki genel uyarı açık: **onarım çalışmalarını daima uzman kişilere yaptır.**

⛔ **Kendin-çöz sınırı burada biter.** Hortumun döşenişi, sifon bağlantısı, süzgeç ve pompa kapağı senin alanın; pompanın kendisi ve makinenin içi yetkili servisin.

Tüm Bosch kodları: [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/). Markadan bağımsız kontrol sırası: [Bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/).

Ekrandaki kodu ve cihaz modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
