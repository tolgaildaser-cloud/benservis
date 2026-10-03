---
title: "Bosch şarjlı süpürge çekmiyor"
description: "Bosch Unlimited şarjlı süpürgenin emme gücü azaldıysa: cihazı ayır, hazneyi boşalt, filtre ünitesini temizle, başlıktan cihaza hava kanalını kontrol et."
slug: "bosch-sarjli-supurge-cekmiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile BSH'nin kendi alan adından (media3.bsh-group.com — 2 Eki
#   alan adı kapısında BSH için kabul) indirildi, HTTP 200, yönlendirme 0. Belge numaraları bosch-home.com.tr/urun-listesi/BCS611AM ve /BCS711XXL ürün sayfalarından alındı.
#   Yerel: blog-taslaklar/kaynak-supurge-3eki/ · okuma pdftotext, sayfa = PDF sayfası (= basılı sayfa no). İki belge çok dilli; Türkçe bölüm B1 s.70-75, B2 s.75-80.
#  B1) Bosch BBS61 / BCS61 / BSS61 (Unlimited 6) kullanım kılavuzu  https://media3.bsh-group.com/Documents/8001346487_B.pdf  104 s.  md5 81a8fc2229796b82ccf82a7d3e5ef11e
#  B2) Bosch BBS71 / BCS71 / BKS71 (Unlimited 7) kullanım kılavuzu  https://media3.bsh-group.com/Documents/8001346490_B.pdf  116 s.  md5 7fff194750c06c3053e23dd3a3d9151e
# Tablo (B1 s.74 · B2 s.79) "Emme gücünde azalma var." → "Filtre tıkanmıştır." / "1. Cihazı kapatınız ve cihazı elektrik beslemesinden ayırınız. 2. Filtre ünitesini temizleyiniz." ·
#   "Başlık bloke olmuştur." / "1. Cihazı kapatınız ve cihazı elektrik beslemesinden ayırınız. 2. Hava kanalının başlıktan cihaza kadar tıkalı olup olmadığını kontrol ediniz. 3. Toz haznesini
#   boşaltınız. 4. Filtre ünitesini temizleyiniz. 5. Cihaz soğuduktan sonra cihazı tekrar açınız."
#   "Toz haznesi takılamıyor." → "Filtre ünitesinde eksik parça vardır." / "Filtre ünitesinde eksik parça olmadığından emin olunuz." · "Filtre ünitesi veya toz haznesi tam olarak oturmuyor." /
#   "Filtre ünitesinin veya toz haznesinin doğru takılıp takılmadığını kontrol ediniz."
# B1 s.73 · B2 s.78: "Filtre kesinlikle sıvıyla temas etmemelidir." (Şek. 21-27) · "Başlıkların temizlenmesi Şek. 28 - 30" · "Toz haznesinin boşaltılması Şek. 17 - 20" · "Emme borusunu cihazın
#   bağlantı parçasından veya süpürge başlığından çıkarmak için kilit açma tuşuna basınız." · "Cihaz ve aksesuar yumuşak bir bezle ve piyasada bulunan bir plastik temizleyiciyle temizlenmelidir."
# B1 s.72 · B2 s.77: "Bağlı cisimler kontrol edilmeli ve temizlenmelidir." "Hasarlı cisimler değiştirilmelidir." "Başlık, rulo fırça takılmadan kesinlikle kullanılmamalıdır." "Cihaz kesinlikle filtre ünitesi olmadan çalıştırılmamalıdır."
# Çalışmıyor satırı (B1 s.73 · B2 s.78-79): "Akü doğru şekilde takılmamıştır."/"Aküyü doğru şekilde takınız." · "Akü şarj edilmemiştir."/"Aküyü şarj ediniz." · kırmızı gösterge 10 sn: aşırı ısınma/soğuma →
#   kapat, ayır, oda sıcaklığına gelmesini bekle · B2 "Şarj fonksiyonu yok."/"Yalnızca birlikte teslim edilen şarj cihazı kullanılmalıdır." · B1 s.73 akü süreleri: Mod 3 (turbo) maks. 8/10 dk.
# Grup kuralı: Siemens (BSH) aynı belge ailesi → bugün YALNIZ Bosch yazıldı.
# BİLEREK YAZILMAYANLAR: filtreyi yıkama (belge sıvıyı yasaklıyor) · şekil numaralı adımların görsel ayrıntısı (metinde yok; "kılavuzdaki şekil" diye anıldı) · motor/akü iç teşhisi · fiyat (#46).
# Alıntı denetim tablosu: bosch-sarjli-supurge-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Süpürgenin kullanım kılavuzu"]
steps:
  - "Cihazı kapat ve elektrik beslemesinden ayır."
  - "Toz haznesini kılavuzdaki şekillere göre boşalt."
  - "Filtre ünitesini kılavuzdaki şekillere göre temizle; filtreyi sıvıyla temas ettirme."
  - "Emme borusunu kilit açma tuşuyla ayır ve hava kanalının başlıktan cihaza kadar tıkalı olup olmadığını kontrol et."
  - "Süpürge başlığını ve rulo fırçayı temizle; dolanan cisimleri çıkar."
  - "Filtre ünitesini eksik parçası olmadan, toz haznesini tam oturacak şekilde geri tak."
  - "Cihaz soğuduktan sonra tekrar aç."
faq:
  - q: "Bosch Unlimited süpürgemin emme gücü neden düştü?"
    a: "Bosch'un Unlimited 6 ve Unlimited 7 kılavuzlarındaki arıza tablosunda 'Emme gücünde azalma var.' satırının karşısında iki neden yazıyor: filtrenin tıkanması ve başlığın bloke olması. Filtre için çözüm cihazı kapatıp elektrik beslemesinden ayırmak ve filtre ünitesini temizlemek; başlık için ayrıca hava kanalının başlıktan cihaza kadar kontrol edilmesi, toz haznesinin boşaltılması ve cihaz soğuduktan sonra yeniden açılması isteniyor."
  - q: "Filtreyi suyla yıkayabilir miyim?"
    a: "Hayır. İki kılavuz da filtrenin kesinlikle sıvıyla temas etmemesi gerektiğini yazıyor. Filtre ünitesinin nasıl temizleneceği kılavuzdaki şekillerde (Unlimited 6 ve 7 kılavuzlarında Şek. 21-27) gösteriliyor."
  - q: "Toz haznesi yerine oturmuyor, ne yapmalıyım?"
    a: "Tabloya göre filtre ünitesinde eksik bir parça olabilir ya da filtre ünitesi veya toz haznesi tam oturmuyor olabilir. Filtre ünitesinde eksik parça olmadığından emin ol ve parçaların doğru takılıp takılmadığını kontrol et. Kılavuz cihazın filtre ünitesi olmadan kesinlikle çalıştırılmamasını istiyor."
  - q: "Turbo modda süpürge çok çabuk bitiyor, normal mi?"
    a: "Unlimited 6 kılavuzundaki akü süreleri tablosuna göre elektrikli zemin başlığıyla turbo modda çalışma süresi 18 V 2,5 Ah aküyle en fazla 8, 3,0 Ah aküyle en fazla 10 dakika. Kılavuz ayrıca akü kapasitesinin ve çalışma süresinin zamanla azalmasının doğal bir yıpranma olduğunu yazıyor."
images:
  coverAlt: "Emme borusu ayrılmış şarjlı bir dikey süpürge, yanında çıkarılmış toz haznesi ve filtre ünitesi"
---

Süpürge eskisi gibi çekmiyor; halıdan geçtikten sonra kırıntılar yerinde kalıyor. Bosch'un Unlimited 6 ve Unlimited 7 şarjlı süpürge kılavuzlarının arıza giderme bölümünde bu belirti **"Emme gücünde azalma var."** diye geçiyor. Bosch iki neden sayıyor, **"Filtre tıkanmıştır."** ve **"Başlık bloke olmuştur."**, ve her biri için numaralı bir sıra veriyor. Aşağıdaki adımlar bu iki sıranın birleşimi.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Cihazı kapat, elektrikten ayır → hazneyi boşalt → filtre ünitesini temizle (sıvı yok) → boruyu ayır, başlıktan cihaza hava kanalına bak → başlık ve rulo fırçayı temizle → filtre ve hazneyi tam oturt → cihaz soğuyunca aç.

## Adım adım: evde denenecekler

**1. Cihazı kapat ve ayır.** Bosch'un iki sırası da aynı maddeyle başlıyor: **"Cihazı kapatınız ve cihazı elektrik beslemesinden ayırınız."** Cihaz istasyonda ya da şarj kablosuna bağlıysa onu ayır.

**2. Toz haznesini boşalt.** Başlık bloke olduğunda Bosch'un üçüncü maddesi **"Toz haznesini boşaltınız."** Haznenin nasıl boşaltılacağı kılavuzun "Toz haznesinin boşaltılması" bölümündeki şekillerde (Şek. 17-20) gösteriliyor.

**3. Filtre ünitesini temizle.** Filtre tıkalıysa çözüm **"Filtre ünitesini temizleyiniz."** Temizliğin nasıl yapılacağı kılavuzdaki şekillerde (Şek. 21-27). Bosch'un tek cümlelik kuralı kesin: **filtre kesinlikle sıvıyla temas etmemelidir.**

**4. Hava kanalını başlıktan cihaza kadar kontrol et.** İkinci madde: **"Hava kanalının başlıktan cihaza kadar tıkalı olup olmadığını kontrol ediniz."** Emme borusunu cihazdan ya da süpürge başlığından ayırmak için **kilit açma tuşuna** basman yeterli; böylece borunun ve bağlantı ağızlarının içine bakabilirsin.

**5. Başlığı ve rulo fırçayı temizle.** Başlıkların temizliği kılavuzun ayrı bölümünde şekillerle (Şek. 28-30) anlatılıyor. Kullanım uyarılarında da şu maddeler var: **"Bağlı cisimler kontrol edilmeli ve temizlenmelidir."**, **"Hasarlı cisimler değiştirilmelidir."** ve **başlık, rulo fırça takılmadan kesinlikle kullanılmamalıdır.**

**6. Parçaları eksiksiz ve tam oturacak şekilde tak.** Bosch cihazın **filtre ünitesi olmadan kesinlikle çalıştırılmamasını** istiyor. Toz haznesi yerine oturmuyorsa tablonun ayrı satırına göre **filtre ünitesinde eksik parça** olabilir ya da filtre ünitesi veya hazne **tam oturmuyordur**; ikisinin de doğru takıldığını kontrol et.

**7. Cihaz soğuyunca aç.** Başlık sırasının son maddesi: **"Cihaz soğuduktan sonra cihazı tekrar açınız."**

## Süpürge hiç çalışmıyorsa

Aynı tablonun "Cihaz çalışmıyor." satırına göre:

- **Akü durum göstergesinde hiçbir şey yoksa:** akü doğru takılmamış ya da şarj edilmemiştir; **aküyü doğru tak** ve **şarj et.**
- **Kırmızı gösterge 10 saniye yanıyorsa:** akü ya da cihaz aşırı ısınmış veya aşırı soğumuştur; cihazı kapat, elektrik beslemesinden ayır ve **oda sıcaklığına gelmesini bekle.**
- **Şarj olmuyorsa (Unlimited 7):** tabloya göre yanlış şarj cihazı kullanılmış olabilir; **yalnızca birlikte teslim edilen şarj cihazını** kullan.

Unlimited 6 kılavuzuna göre turbo modda elektrikli zemin başlığıyla çalışma süresi aküye göre en fazla **8 ya da 10 dakika**; akü kapasitesinin zamanla azalması da kılavuza göre **doğal bir yıpranma**.

Markadan bağımsız kontrol listeleri için [süpürge çekmiyor](/blog/supurge-cekmiyor/), [süpürge hortumu tıkandı](/blog/supurge-hortumu-tikandi/) ve [şarjlı dikey süpürge şarj tutmuyor](/blog/sarjli-supurge-sarj-tutmuyor/) yazılarına bakabilirsin.

## Ne zaman servis

- Filtre temizlendiği, kanal açıldığı hâlde emme gücü dönmüyorsa.
- Bosch'un kuralı açık: **cihazda onarımları yalnızca bunun eğitimini almış uzman personel yapabilir** ve onarımda yalnız **orijinal yedek parça** kullanılır. Kılavuza göre fonksiyonel açıdan uygun orijinal yedek parçalar, cihazın piyasaya sunulmasını takiben **10 yıla kadar** müşteri hizmetlerinden temin edilebiliyor.

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, boru ve başlık temizliği kullanıcıya; motor, akü ve elektronik servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (BCS61, BCS71 gibi; ürün etiketinde)?
2. Filtre ünitesini en son ne zaman temizledin?
3. Emme gücü tüm aparatlarda mı düşük, yalnız zemin başlığında mı?
4. Akü durum göstergesinde kırmızı ışık var mı?
5. Hangi akü ve şarj cihazını kullanıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
