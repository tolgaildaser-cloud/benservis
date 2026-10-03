---
title: "Haier bulaşık makinesi temiz yıkamıyor"
description: "Haier bulaşık makinesi tabakları kısmen yıkıyorsa Haier kılavuzundaki sebepler: program, deterjan, yerleşim, filtreler, püskürtme kolları ve tuz kabı kapağı."
slug: "haier-bulasik-makinesi-temiz-yikamiyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/bulasik-makineleri/32002551/xf-6c2m1pw/  md5 bc901fec25571c5bac2c34d61689b1f9
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2024/12/17339313/MAN-000188921_000  52 s.  md5 d7eb6eaf5e86d8bc40af5485fe50a9d9
#   ⚠ PDF metadata başlığı "XF 5C7M0W-17 TR (70060910)"; metinde XF-6C2M1PW model adı GEÇMİYOR, kılavuz "göstergeli / göstergesiz modeller" diye genel yazılmış. Belge XF-6C2M1PW ürün sayfasının kılavuz bağlantısı olduğu için kullanıldı.
#   Sayfa = PDF sayfası (basılı numaralar PDF sayfasından farklı; atıflar pdftotext -f/-l ile doğrulandı). Web araması yok.
# Ana satır (s.47, "Diğer arızalar" 7): "Tabaklar kısmen yıkanıyor" · "Kulplu tencerelerin altı/kenarı düzgün tıkanmıyor" → yanmış kalıntıları suda bekletin / yerini değiştirin · "Püskürtme kolları kısmen engellenmiştir → Halka somunlarının vidasını saat yönünde çözerek ve akan su altında yıkayarak püskürtme kollarını çıkarın"
#   · "Bulaşıklar düzgün yüklenmemiştir → Bulaşıkları çok yakın yerleştirmeyin" · "Boşaltma borusunun ucu su içine batmıştır → Boşaltma borusunun ucu taşma suyuyla temas etmemelidir" · "Yanlış miktarda deterjan ölçülmüştür veya deterjan bayat ve katıdır → Bulaşıkların kirlilik derecesine göre ölçüyü artırın veya deterjanı değiştirin"
#   · "Tuz kabının kapağı düzgün kapatılmamıştır → İyice sıkın" · "Yıkama programı yeterli değildir → Daha güçlü bir program seçin"
#   s.46 5: "Püskürtme kollarının dönüşü duyulmuyor" → aşırı deterjan → "Deterjan miktarını azaltın Uygun deterjan kullanın" · "Parça kolların dönmesini engelliyordur → Kontrol edin" · "Filtre plakası ve filtre çok kirlidir → Filtre plakası ve filtreyi temizleyin"
#   s.48 Not Bloğu: kötü yıkama/yetersiz durulamada "kir kalıntılarını bulaşıklardan elinizle çıkarın."
# Bakım: s.21 10. Filtreleri temizleme ("Filtre ünitesini çıkarmak için, kolu saat yönünün tersine çevirmeniz ve yukarı doğru çekerek çıkarmanız yeterlidir." · orta hazne "yanlardaki iki düğmeye basılarak" · "musluk altında yıkayın" · "küçük bir fırça kullanılabilir" · "her yıkamadan sonra kontrol edilip temizlenmesi gerekir")
#   · s.22 "Filtrenin saat ibreleri yönünde döndürülerek ... yerine tespit edilmiş olduğundan emin olun." · "Bulaşık makinesini filtreleri yerlerine takılı değilken kesinlikle çalıştırmayın."
#   · s.23 11. Pratik ipuçları (kalıntıları temizleyin · "durulamaya gerek yoktur" · yanmış yiyecekleri suda bekletin · "yüzleri aşağıya bakacak şekilde" · "birbirlerine değmeyecek şekilde" · "yıkama kollarının serbestçe dönebildiklerinden emin olacak şekilde")
#   · s.25-26 12. püskürtme delikleri ("Halka somunu sağdan sola çevirerek üst rotor kolunu çıkarın" · "Alt rotor kolunu basitçe yukarı doğru çekerek çıkarın" · "bir su jeti altında yıkayın" · "Püskürtme başlığını bozabilecek aletler kullanmayın." · "oku yeniden hizalamayı ve yerine vidalamayı unutmadan")
#   · s.16 deterjan ("çok az deterjan konulmasının bulaşıkları iyi temizlemeyeceğini" · "Tablet kullanıyorsanız, bir tanesi yeterli olacaktır." · alt sepette deterjan dağıtıcısının engellenmemesi)
# BİLEREK YAZILMAYANLAR: boşaltma borusu ucunun yeniden konumlanması adım olarak (kurulum işi) · rezistans/pompa teşhisi (E8 vb. servis) · püskürtme kolu için alet (kılavuz alet kullanma diyor) · fiyat.
# Alıntı denetim tablosu: haier-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça"]
steps:
  - "Bulaşıkların kirliliğine göre daha güçlü bir program seç."
  - "Deterjan ölçüsünü kirlilik derecesine göre ayarla; deterjan bayat ve katılaşmışsa değiştir."
  - "Bulaşıkları yüzleri aşağı bakacak ve birbirine değmeyecek şekilde yerleştir; deterjan kabının açılmasını engelleme."
  - "Yükledikten sonra püskürtme kollarını elle çevirip serbestçe döndüklerini kontrol et."
  - "Filtre ünitesini kolu saat yönünün tersine çevirip yukarı çekerek çıkar, musluk altında yıka ve saat yönünde çevirerek yerine tam oturt."
  - "Püskürtme kollarını elle çıkar (üst kolun halka somununu sağdan sola çevir, alt kolu yukarı çek), deliklerini su altında yıka ve okları hizalayarak geri tak."
  - "Tuz kabının kapağını iyice sık."
  - "Yanmış ya da yapışmış kalıntılı tencere ve tavaları makineye koymadan önce suda beklet."
faq:
  - q: "Haier bulaşık makinem neden temiz yıkamıyor?"
    a: "Haier'in XF-6C2M1PW ürün sayfasından bağlanan kılavuzun 'Tabaklar kısmen yıkanıyor' satırı birçok sebep sayıyor: kulplu tencerelerin yanlış yerleşimi, kısmen engellenmiş püskürtme kolları, birbirine çok yakın yerleştirilen bulaşıklar, suya batmış boşaltma borusu ucu, yanlış miktarda ya da bayatlamış deterjan, düzgün kapatılmamış tuz kabı kapağı ve yetersiz yıkama programı."
  - q: "Filtreleri ne sıklıkla temizlemeliyim?"
    a: "Kılavuz, mükemmel sonuç için filtrelerin her yıkamadan sonra kontrol edilip temizlenmesi gerektiğini yazıyor. Kendi kendini temizleyen mikro filtre sayesinde filtre bölümünün iki haftada bir kontrolünün yeterli olduğunu, ama merkez kap ile düz ince tel kafesli filtrenin her yıkamadan sonra kontrol edilmesini öneriyor. Makine filtreler takılı değilken kesinlikle çalıştırılmamalı."
  - q: "Püskürtme kollarını çıkarmak için alet gerekir mi?"
    a: "Hayır. Haier'e göre üst kol halka somunu sağdan sola çevrilerek, alt kol basitçe yukarı çekilerek çıkıyor. Kılavuz püskürtme başlığını bozabilecek aletler kullanılmamasını açıkça istiyor."
  - q: "Bulaşıkları makineye koymadan önce durulamalı mıyım?"
    a: "Haier'e göre gerek yok; bu su ve enerji tüketimini artırır ve önerilmez. Bunun yerine kemik, kabuk, kahve telvesi gibi kalıntıları temizlemeni ve yanmış ya da kızarmış tabaka oluşmuş tencereleri yıkamadan önce suda bekletmeni istiyor."
  - q: "Ne kadar deterjan koymalıyım?"
    a: "Kılavuz deterjan bölmesine 20 ila 30 g deterjan konulmasını öneriyor ve tablet kullanıyorsan bir tanesinin yeterli olduğunu yazıyor. Haier çok az deterjanın bulaşıkları iyi temizlemeyeceğini, fazlasının da daha iyi sonuç vermeyip israf olacağını hatırlatıyor."
images:
  coverAlt: "Açık bir bulaşık makinesinin alt sepetinde, yüzleri aşağı bakacak şekilde aralıklı dizilmiş tabaklar ve altında görünen püskürtme kolu"
---

Program bitti ama tabaklarda yemek kalıntısı var, bardaklar lekeli. Haier'in XF-6C2M1PW bulaşık makinesi ürün sayfasından bağlanan kullanım kılavuzunda bu durumun satırı **"Tabaklar kısmen yıkanıyor."** Haier bu satırda yerleşimden deterjana kadar uzun bir liste veriyor: **püskürtme kolları kısmen engellenmiştir**, **bulaşıklar düzgün yüklenmemiştir**, **yanlış miktarda deterjan ölçülmüştür veya deterjan bayat ve katıdır**, **tuz kabının kapağı düzgün kapatılmamıştır** ve **yıkama programı yeterli değildir.** Bunların hepsi elle, aletsiz düzeltilebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Daha güçlü program, kirliliğe uygun ve taze deterjan, aralıklı ve yüzü aşağı yerleşim, serbest dönen kollar. Filtreleri ve püskürtme kollarının deliklerini elle temizle, tuz kabı kapağını sık, yanmış tencereyi önce beklet.

## Adım adım: evde denenecekler

**1. Daha güçlü bir program seç.** Haier'in satırındaki sebeplerden biri: **yıkama programı yeterli değildir** → **daha güçlü bir program seçin.**

**2. Deterjanı ayarla.** Tablodaki sebep: **yanlış miktarda deterjan ölçülmüştür veya deterjan bayat ve katıdır.** Çözüm: **bulaşıkların kirlilik derecesine göre ölçüyü artırın veya deterjanı değiştirin.** Kılavuz deterjan bölmesine **20 ila 30 g** deterjan konulmasını öneriyor; **tablet kullanıyorsan bir tanesi yeterli.** Haier'in hatırlatması: **çok az deterjan** bulaşıkları iyi temizlemez, **aşırı miktarda** deterjan da daha iyi sonuç vermez.

**3. Bulaşıkları doğru yerleştir.** Haier'e göre **bulaşıklar düzgün yüklenmemiş** olabilir → **bulaşıkları çok yakın yerleştirmeyin.** Pratik ipuçları bölümü bulaşıkları **yüzleri aşağıya bakacak şekilde** ve **birbirlerine değmeyecek şekilde** yerleştirmeni istiyor. Alt sepete yerleştirirken **tabakların ve diğer bulaşıkların deterjan dağıtıcısını engellemediğinden** emin ol; kılavuzun "Deterjan boşaltılmamış" satırı da aynı sebebe işaret ediyor.

**4. Kolların döndüğünü kontrol et.** Haier'in ipucu: bulaşıkları yerleştirdikten sonra **yıkama kollarının serbestçe dönebildiklerinden** emin ol. Tablonun "Püskürtme kollarının dönüşü duyulmuyor" satırında sebep **parça kolların dönmesini engelliyordur.** Aynı satıra göre **aşırı miktarda deterjan** da buna yol açabilir; çözüm **deterjan miktarını azaltın, uygun deterjan kullanın.**

**5. Filtreleri temizle.** "Püskürtme kollarının dönüşü duyulmuyor" satırının bir sebebi de **filtre plakası ve filtre çok kirlidir.** Haier'in yordamı: **filtre ünitesini çıkarmak için kolu saat yönünün tersine çevirmen ve yukarı doğru çekerek çıkarman yeterli.** Orta hazne **yanlardaki iki düğmeye basılarak** çıkıyor. Düz ince tel kafesli filtreyi çıkar ve **bütün filtre bölümünü bir musluk altında yıka**; gerekirse **küçük bir fırça** kullanılabilir. Takarken filtreyi **saat ibreleri yönünde döndürerek** yerine tespit et; Haier'e göre filtre bölümü **yerine tam oturmazsa cihazın verimi olumsuz etkilenir.** Makineyi **filtreler takılı değilken kesinlikle çalıştırma.**

**6. Püskürtme kollarının deliklerini aç.** Tablonun ana çözümlerinden biri: **püskürtme kolları kısmen engellenmiştir.** Kılavuzun bakım bölümü, filtreler düzenli temizlendiği hâlde bulaşıklar iyi yıkanmıyorsa **döner püskürtme kolları üzerindeki bütün püskürtme deliklerinin** tıkalı olup olmadığına bakmanı istiyor. Haier'in sırası: **halka somunu sağdan sola çevirerek üst rotor kolunu çıkar**, **alt rotor kolunu basitçe yukarı doğru çekerek çıkar**, kolları **bir su jeti altında yıka**, işin bitince **oku yeniden hizalayıp** kolları **aynı konuma** geri tak. Kılavuzun uyarısı: **püskürtme başlığını bozabilecek aletler kullanmayın.**

**7. Tuz kabının kapağını sık.** Haier'in satırındaki sebep: **tuz kabının kapağı düzgün kapatılmamıştır** → **iyice sıkın.**

**8. Yanmış kalıntıyı önce beklet.** Tablodaki ilk sebep kulplu tencerelerle ilgili: altları düzgün temizlenmiyorsa Haier'in çözümü **yanmış yiyecek kalıntılarının** makineye koymadan önce **suda bekletilmesi**, kenarları temizlenmiyorsa **tencerelerin yerini değiştirmek.** Pratik ipuçları da **yanmış veya kızarmış** tabaka oluşmuş tencere ve fırın kaplarını **yıkamadan önce su içerisinde bekletmeni** öneriyor. Bulaşıkları önceden **durulamaya gerek yok**; Haier bunun **su ve enerji tüketimini artırdığını** yazıyor.

## Boşaltma borusu ve kalan kir

Haier'in satırındaki bir sebep daha var: **boşaltma borusunun ucu su içine batmıştır**; kılavuza göre boşaltma borusunun ucu **taşma suyuyla temas etmemelidir.** Bu bir kurulum ayarı; emin değilsen yetkili servise bırak. Kılavuzun not bloğu da önemli: kötü yıkama ya da yetersiz durulama olduysa son durulama kiri sertleştirdiği için sonraki yıkamalarda çıkması zorlaşır; bu yüzden **kir kalıntılarını bulaşıklardan elinle çıkar.**

Markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazıları var.

## Ne zaman servis

Ekranlı modellerde **E8** Haier'in tablosunda **su ısıtma elemanı düzgün çalışmıyor veya filtre plakası tıkalı** anlamında; filtre plakasını temizledikten sonra kod sürüyorsa servis işidir. Kılavuz, yedek parça listesi dışında **cihazı kendi başına tamir etmemeni** ve **yetkili teknik yardım merkezleriyle** iletişime geçmeni öneriyor. Arıza sürerse servise **bulaşık makinesinin modelini** bildir; Haier bu bilginin **kapağın içindeki plakada** ya da garanti belgesinde bulunduğunu yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Program, deterjan ve yerleşim doğru, filtreler ve püskürtme kolları temiz olduğu hâlde bulaşıklar hâlâ kısmen yıkanıyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
