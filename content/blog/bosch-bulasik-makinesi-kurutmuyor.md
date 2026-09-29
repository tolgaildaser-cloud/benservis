---
title: "Bosch bulaşık makinesi kurutmuyor"
description: "Bosch bulaşık makinesi kurutmuyorsa Bosch'un sırası: parlatıcı, kurutmalı program, ekstra kurutma, eğik yerleştirme ve 30 dakika bekleme."
slug: "bosch-bulasik-makinesi-kurutmuyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu"  https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
# Arıza tablosu satırı (K s.39) "Bulaşıklar kuru değil.": parlatıcı yok/çok az → ilave et · kurutmasız program → kurutma fonksiyonlu program · çukur kısımlarda su → mümkün olduğunca eğik yerleştir
#   · kombine temizleyicinin kurutma performansı yetersiz → başka kombine madde; "Ek parlatıcı kullanılması kurutma performansını yükseltir." · ekstra kurutma aktif değil → aktifleştir
#   · "Bulaşıklar cihazdan çok erken çıkarıldı..." → "Program sonunu bekleyiniz ya da bulaşıkları program sona erdikten ancak 30 dakika sonra cihazdan çıkarınız." · ekolojik parlatıcı sınırlı → marka parlatıcı
#   · "Plastik bulaşıkları kurutmayınız." (satır başlığı, K'deki ifadeyle) → "Plastik daha az ısı depolama özelliğine sahiptir ve bu nedenle daha kötü kurur."
#   · "Çatal bıçaklar kuru değil." → ayrık yerleştir, temas yeri olmasın · "Yıkama işleminden sonra cihazın iç kısmı ıslak." → "Cihaz hatası yok." (kondansasyon kurutma)
# Diğer: K s.16 parlatıcı ilave etme (kapaktaki dile bastır, kaldır; max işaretine kadar; kapak duyulur şekilde oturur; taşanı bezle sil → aşırı köpük önlenir) · K s.16 parlatıcı miktarı kurutmayı etkiler
#   · K s.43 "önerilen Kademe 4-5" · K s.30 ekstra kurutma (hassas bulaşıklarda dikkat, süre biraz uzayabilir) · K s.28 ek fonksiyon Ekstra kurutma/Parlak kurutma (modele göre)
#   · K s.22 "Program sonunda cihazın iç kısmında daha su damlaları görünüyor olabilir. Bu, bulaşıkların kurumasını hiçbir şekilde etkilemez." · K s.25 kombine deterjan 21°dH sınırı
#   · B s.1 önce alt sepet, sonra üst sepet, sonra çatal-kaşık çekmecesi boşaltılır (üstteki damlalar alttakilerde leke yapabilir) · K s.46 yetkili servis.
# BİLEREK YAZILMAYANLAR: fan/rezistans/ısıtıcı teşhisi (belgede yok) · kapağı program sonunda aralamak tavsiyesi (bu kılavuzda kurutma için yok; K s.33 yalnız uzun süre kullanılmayınca koku için) ·
#   parlatıcı/ekstra kurutma ayar kodları (sembol metin katmanında okunmuyor).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Kuru bir bez"]
steps:
  - "Parlatıcı göstergesine bak; kabın kapağını açıp parlatıcıyı max işaretine kadar doldur, taşanı bezle sil."
  - "Parlatıcı miktarı ayarını kontrol et; Bosch'un önerisi kademe 4-5."
  - "Bir sonraki yıkamada kurutma aşaması olan bir program seç."
  - "Modelinde varsa Ekstra kurutma ya da Parlak kurutma fonksiyonunu aç."
  - "Çukur ve derin parçaları suyu akıtacak şekilde mümkün olduğunca eğik yerleştir."
  - "Çatal bıçakları birbirine değmeyecek şekilde ayrık yerleştir."
  - "Program bittikten sonra bulaşıkları hemen değil, yaklaşık 30 dakika sonra çıkar; önce alt sepeti boşalt."
faq:
  - q: "Bosch bulaşık makinesi bulaşıkları ıslak bırakıyor, arıza mı?"
    a: "Önce Bosch'un listesine bak. Kullanma kılavuzundaki arıza tablosu 'Bulaşıklar kuru değil' satırında şunları sayıyor: parlatıcı bölmesi boş ya da çok az dolu, kurutmasız bir program seçilmiş, bulaşıkların çukur kısımlarında su toplanmış, kombine tabletin kurutma performansı yetersiz, ekstra kurutma açık değil veya bulaşıklar cihazdan çok erken çıkarılmış. Bunların hepsi kullanıcı tarafında düzeltilebilir."
  - q: "Cam ve porselen kuruyor ama plastik kaplar hep ıslak çıkıyor, neden?"
    a: "Bosch'a göre bu plastiğin özelliği: plastik daha az ısı depolar ve bu nedenle daha kötü kurur. Bosch'un Ekstra kurutma fonksiyonu, parlatma sırasında daha yüksek sıcaklık ve daha uzun kurutma süresiyle plastik parçaların daha iyi kurumasını sağlıyor; enerji tüketimi biraz daha yüksek oluyor."
  - q: "Program bitince makinenin iç duvarları ıslak, normal mi?"
    a: "Evet. Bosch'un arıza tablosu bu durum için 'Cihaz hatası yok' diyor: makinenin kullandığı kondansasyon kurutma prensibinde havadaki nem makinenin iç yüzlerinde yoğuşur, aşağı akar ve pompalanıp boşaltılır. Bosch'a göre iç kısımdaki su damlaları bulaşıkların kurumasını hiçbir şekilde etkilemez."
  - q: "Hepsi bir arada tablet kullanıyorum, yine de parlatıcı koymam gerekir mi?"
    a: "Bosch'un ayar tablosu çok aşamalı tablet kullanıldığında parlatıcı kademesinin 0 seçilmesini söylüyor. Kurutma yine de yetersiz kalırsa arıza tablosu iki yol veriyor: daha iyi kurutan başka bir kombine madde kullanmak ya da ek parlatıcı kullanmak; Bosch'a göre ek parlatıcı kurutma performansını yükseltir. Bosch ayrıca kombine deterjanların genelde 21°dH su sertliğine kadar çalıştığını, bu sınır aşıldığında tuz ve parlatıcı ilave edilmesi gerektiğini yazıyor."
images:
  coverAlt: "Program sonunda açılmış bulaşık makinesinin üst sepetinde üzerinde su damlaları kalmış plastik kaplar ve bardaklar"
---

Program bitti, kapağı açtın ve bulaşıklar hâlâ ıslak. Bosch'un bulaşık makinesi kullanma kılavuzundaki arıza tablosunda bu durum için ayrı bir satır var: **"Bulaşıklar kuru değil."** Bosch'un bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **parlatıcı, seçilen program, ekstra kurutma, yerleştirme ve bulaşıkları çıkarma zamanı.** Bu yazıda Bosch'un listesini sırayla açıyoruz; plastik kaplar ve makinenin iç duvarındaki damlalar için de Bosch'un ne dediğine bakıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcıyı doldur ve ayarını kontrol et → kurutmalı program seç → varsa ekstra kurutmayı aç → çukur parçaları eğik koy, çatal bıçakları ayır → bulaşıkları program bittikten 30 dakika sonra çıkar. Plastiklerin daha geç kuruması ve iç duvarlarda damla kalması Bosch'a göre arıza değil.

## Adım adım: evde denenecekler

**1. Parlatıcıyı doldur.** Bosch'un tablosundaki ilk neden: **ilgili bölmede parlatıcı yok veya çok az var.** Bosch'a göre panelde parlatıcı göstergesi yandığında **1-2 yıkama için yetecek kadar parlatıcı kalmış** demektir. Kabın kapağındaki dile bastırıp kapağı kaldır, parlatıcıyı **max işaretine kadar** doldur ve kapağı duyulur şekilde oturana kadar kapat. Taşan parlatıcıyı **bir bezle sil;** Bosch'a göre bu, bir sonraki yıkamada aşırı köpük oluşmasını önler. Yalnız evde kullanılan bulaşık makineleri için uygun parlatıcı kullan.

**2. Parlatıcı ayarını kontrol et.** Bosch'a göre **parlatıcı miktarı kurutmayı etkiler.** Bosch'un arıza tablosunda parlatıcı dozajı için önerilen değer **kademe 4-5.** Ayarı kılavuzundaki "Ayarların değiştirilmesi" bölümündeki tuşlarla kontrol edebilirsin. Çok aşamalı tablet kullanıyorsan bir ayrıntı var: Bosch'un ayar tablosu bu durumda parlatıcı kademesinin **0** seçilmesini söylüyor; aynı kılavuzun arıza tablosu ise kombine temizleyicinin kurutması yetersiz kalırsa **ek parlatıcı kullanmanın kurutma performansını yükselttiğini** yazıyor.

**3. Kurutmalı bir program seç.** Tablodaki ikinci neden: **kurutmasız bir program seçilmiş.** Bosch'un çözümü **kurutma fonksiyonlu bir program** seçmek. Kılavuzdaki programlara genel bakış tablosunda her programın akışı yazıyor; akışında "Kurutma" aşaması olan bir program seç.

**4. Ekstra kurutmayı aç.** Tablodaki bir diğer neden: **kurutmayı yoğunlaştırmak için ekstra kurutma fonksiyonu aktifleştirilmemiş.** Bosch'a göre ekstra kurutmada parlatma daha yüksek bir sıcaklıkla yapılır ve daha iyi bir kurutma sonucu elde edilir; çalışma süresi biraz uzayabilir ve **hassas bulaşıklarda dikkatli olman** gerekir. Bazı modellerde **Parlak kurutma** ek fonksiyonu da var; Bosch bu fonksiyon için, kombine tablet kullanılıyor olsa bile parlatıcı eklenmesini tavsiye ediyor.

**5. Çukur parçaları eğik yerleştir.** Tablodaki neden: **bulaşıkların çukur kısımlarında su toplanmış.** Bosch'un çözümü bulaşıkları **mümkün olduğunca eğik** yerleştirmek. Yerleştirme bölümündeki kural da aynı: çukur ya da derin parçalar yanlamasına konarak suyun akıp boşalması sağlanmalı.

**6. Çatal bıçakları ayır.** Bosch'un tablosunda **"Çatal bıçaklar kuru değil"** için ayrı satır var: çatal bıçaklar sepete ya da çekmeceye uygun yerleştirilmemiş. Çözüm, parçaların **birbirinden ayrık** olmasına dikkat etmek ve **temas yerleri** olmasını önlemek.

**7. Çıkarmak için 30 dakika bekle.** Tablodaki son neden: **bulaşıklar cihazdan çok erken çıkarıldı veya kurutma süreci henüz sona ermemişti.** Bosch'un önerisi program sonunu beklemek ya da bulaşıkları **program sona erdikten ancak 30 dakika sonra** çıkarmak. Boşaltırken Bosch'un bilgilendirme kılavuzundaki sırayı izle: **önce alt sepet, sonra üst sepet,** en son varsa çatal-kaşık çekmecesi. Üst sepette kalan damlalar alttaki bulaşıkların üzerinde leke oluşturabilir.

## Arıza olmayan iki durum

**Plastik kaplar daha geç kurur.** Bosch'un tablosu bunu bir özellik olarak açıklıyor: **plastik daha az ısı depolama özelliğine sahiptir ve bu nedenle daha kötü kurur.** Ekstra kurutma bu konuda yardımcı olur.

**İç duvarlarda su damlaları.** Bosch'a göre **cihaz hatası yok.** Makine "kondansasyon kurutma" prensibiyle çalışıyor: havadaki nem iç yüzlerde yoğuşur, aşağı akar ve pompalanıp boşaltılır. Bosch'un kullanma kılavuzuna göre program sonunda iç kısımda görünen su damlaları **bulaşıkların kurumasını hiçbir şekilde etkilemez.**

Parlatıcı ve tuz ayarının ayrıntısı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına, paneldeki parlatıcı simgesi için [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasına bakabilirsin. Markadan bağımsız anlatım: [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/).

## Ne zaman servis

Parlatıcı dolu ve ayarı uygun, kurutmalı program seçili, yerleştirme doğru ve bulaşıkları 30 dakika bekleyip çıkardığın hâlde cam ve porselen de ıslak çıkıyorsa Bosch'un kılavuzu şunu söylüyor: **hatayı veya arızayı gidermeyi başaramazsan yetkili servisine başvur.** Servisi ararken cihaz kapısındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** bildir.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, program, ayar ve yerleştirme kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Islak kalan hangi bulaşıklar: plastik mi, cam ve porselen de mi?
2. Parlatıcı göstergesi yanıyor mu, kap dolu mu?
3. Hangi programı seçiyorsun, kurutma aşaması var mı?
4. Kombine tablet mi, ayrı deterjan mı kullanıyorsun?
5. Bulaşıkları program bittikten ne kadar sonra çıkarıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
