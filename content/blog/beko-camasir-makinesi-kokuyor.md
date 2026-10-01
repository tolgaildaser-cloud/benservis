---
title: "Beko çamaşır makinesi kokuyor"
description: "Beko çamaşır makinesi ya da çamaşırlar kötü kokuyorsa kılavuzdaki sıra: çekmece temizliği, Kazan Temizleme ve aralık bırakılan kapak."
slug: "beko-camasir-makinesi-kokuyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Beko belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan yeniden indirildi, HTTP 200;
# md5'ler 30 Eyl yerel kopyalarıyla birebir. #88: web araması bu belgeler için kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb  (sayfa atıfları bu belgeye göre)
#  (B) D4 9122 E  http://download.beko.com/Download.UsageManualsBeko/d4-9122-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820522537.pdf  37 s.  md5 89ab7801f624fc4f2a85f358033baa58  (koku satırı s.31; kazan s.26; program s.19)
#  (C) D4 8102 E  http://download.beko.com/Download.UsageManualsBeko/32636_2820522712.pdf  37 s.  md5 eea66a69dc2384321a6f7227d0fe81f2  (koku satırı s.31; kazan s.26)
#  (D) D3 5061 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f  (koku satırı s.30; kazan s.25)
# Sorun giderme (A s.34): "Yıkama performansı kötü: Çamaşırlar kötü kokuyor. (**)"
#   "• Devamlı düşük sıcaklıkta ve / veya kısa programlarda yıkama nedeniyle, kazanda koku ve bakteri tabakaları oluşabilir. >>> Deterjan çekmecesini ve makinenin kapağını her yıkamadan sonra aralık bırakın.
#    Böylece içerde bakteriler için elverişli, nemli bir ortam oluşmamış olur."
#   Dipnot (**) (A s.35): "Düzenli kazan temizliği uygulanmamış olabilir.>>> Kazanı düzenli olarak temizleyin. Bkz. 7.2"
# A s.29 7.2 "Yükleme kapağı ve kazanın temizlenmesi": "Yumuşatıcı, deterjan ve kir artıkları zamanla makinenizde birikerek koku ve yıkama şikayetlerine neden olabilir. Bunu önlemek için Kazan Temizleme programını kullanın.
#   Makinenizde Kazan Temizleme programı yoksa İlave Su veya İlave Durulama yardımcı fonksiyonunu da seçerek Pamuklu-90 programını kullanın. Bu işlemleri, kesinlikle çamaşırsız olarak ve makine boşken çalıştırın.
#   Programı başlatmadan önce ana yıkama deterjan gözüne ("2" no'lu göz) 1 çay bardağı (maks. 100 gr) toz kireç önleyici koyun. Kireç önleyici tablet şeklinde ise 2 no'lu göze bir adet tablet koyun.
#   Program bittikten sonra körüğün içini temiz bir bezle kurulayın." · "Kazan temizleme işlemini 2 ayda bir tekrarlayın." · "Çamaşır makinelerine uygun bir kireç önleyici kullanın."
#   · "Her yıkamadan sonra kazanın içinde yabancı cisim kalmadığını kontrol edin." · "Şekilde gösterilen körükteki delikler tıkalı ise kürdan yardımıyla delikleri açın." (ALET → numaralı adım DEĞİL)
# A s.21 program: "Kazan Temizleme: Bu programı, kazanın temizlenmesi ve gerekli hijyenin sağlanması için belli bir sıklıkta (1-2 ayda bir) çalıştırın. ... Program sona erdikten sonra yükleme kapağını aralık bırakarak makinenin içinin kurumasını sağlayın."
#   · A s.21 "Refresh: Bu programı, sadece bir kez kullanılmış, üzerinde leke veya kir bulunmayan çamaşırların kokusunu gidermek amacıyla kullanın." (A, B, C'de var; D'de yok)
# A s.29 7.1 deterjan çekmecesi (4-5 yıkamada bir): "1 Yumuşatıcı gözündeki sifonun işaretli noktasına bastırarak, deterjan çekmecesini kendinize doğru çekip çıkarın."
#   "2 Çekmeceyi ve sifonu lavaboda, bol ılık suyla yıkayın. Çekmecedeki kalıntıların cildinize temasını önlemek için, temizliği eldiven ya da uygun bir fırçayla yapın." "3 Temizledikten sonra sifonu yerine iyice oturtarak çekmeceyi geri takın."
#   · "Yumuşatıcı bölmesinde normalden daha çok su ve yumuşatıcı karışımı kalmaya başlarsa sifon temizliği de yapın."
# A s.4 "Kurulum, bakım, temizlik ve tamir işlemleri sırasında ürünün fişi prizden çekin." · A s.29 "Kesinlikle bulaşık süngeri ya da ovalama malzemeleri kullanmayın."
# A s.34 "Çamaşırlar yumuşatıcı kokmuyor." → deterjan yanlış göze / deterjanla yumuşatıcı karışmış → "Çekmeceyi sıcak suyla yıkayıp temizleyin." (SSS)
# A s.35 kapanış UYARI: bayi ya da Yetkili Servis; "Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
# BİLEREK YAZILMAYANLAR: tahliye hortumu/gider kaynaklı koku (bu satırda yok) · "daha yüksek sıcaklıkta yıka" önerisi (koku satırında yok; yalnız sebep olarak düşük sıcaklık anılıyor)
#   · körük contasını silme/kurulama dışında conta temizliği iddiası · sirke, karbonat gibi ev yöntemleri (belgede yok) · körük deliklerini kürdanla açma (alet; gövdede numarasız anıldı) · marka/ürün adı.
# Alıntı denetim tablosu: beko-camasir-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (kazan temizliği programı hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Eldiven ya da uygun bir fırça", "Temiz bir bez", "Çamaşır makinesine uygun toz kireç önleyici"]
steps:
  - "Makinenin fişini çek."
  - "Yumuşatıcı gözündeki sifonun işaretli noktasına bastırarak deterjan çekmecesini kendine doğru çekip çıkar."
  - "Çekmeceyi ve sifonu lavaboda bol ılık suyla, eldivenle ya da fırçayla yıka."
  - "Sifonu yerine iyice oturtup çekmeceyi geri tak."
  - "Fişi tak; makine boş ve çamaşırsızken ana yıkama gözüne çamaşır makinesine uygun toz kireç önleyici koyup Kazan Temizleme programını çalıştır."
  - "Program bitince körüğün içini temiz bir bezle kurula ve kazanda yabancı cisim kalmadığını kontrol et."
  - "Bundan sonra her yıkamadan sonra deterjan çekmecesini ve yükleme kapağını aralık bırak."
faq:
  - q: "Beko çamaşır makinesi neden kokar?"
    a: "Beko'nun D4 9101 E, D4 9122 E, D4 8102 E ve D3 5061 B kullanma kılavuzlarına göre devamlı düşük sıcaklıkta ve/veya kısa programlarda yıkama nedeniyle kazanda koku ve bakteri tabakaları oluşabilir. Bakım bölümü ayrıca yumuşatıcı, deterjan ve kir artıklarının zamanla makinede birikerek koku ve yıkama şikayetlerine neden olabileceğini yazıyor."
  - q: "Makinemde Kazan Temizleme programı yok, ne yapmalıyım?"
    a: "Beko'nun bakım bölümüne göre Kazan Temizleme programı olmayan makinelerde İlave Su ya da İlave Durulama yardımcı fonksiyonu da seçilerek Pamuklu-90 programı kullanılır. Bu işlem kesinlikle çamaşırsız ve makine boşken yapılır; programdan önce 2 no'lu göze 1 çay bardağı (en çok 100 gr) toz kireç önleyici ya da bir adet kireç önleyici tablet konur."
  - q: "Kazan temizliğini hangi aralıkla yapmalıyım?"
    a: "Beko'nun bakım bölümü kazan temizleme işleminin 2 ayda bir tekrarlanmasını istiyor; Kazan Temizleme programının tanımında ise programın 1-2 ayda bir çalıştırılması yazıyor. Deterjan çekmecesinin temizliği için Beko'nun önerdiği aralık 4-5 yıkamada bir."
  - q: "Çamaşırlar yumuşatıcı kokmuyor, bu da aynı sorun mu?"
    a: "Beko'nun tablosunda bunun ayrı bir satırı var. Sebepler: ön yıkama seçilmediği hâlde ön yıkama gözüne deterjan konmuş olması ya da deterjanla yumuşatıcının karışması. Beko'nun çözümü çekmeceyi sıcak suyla yıkayıp temizlemek, deterjanı doğru göze koymak ve yumuşatıcıyı deterjanla karıştırmamak."
images:
  coverAlt: "Yükleme kapağı ve deterjan çekmecesi aralık bırakılmış ön yüklemeli çamaşır makinesi; lavabonun yanında yıkanmış çekmece ve sifon parçası"
---

Yıkamadan yeni çıkan çamaşırlar temiz kokmuyor ya da makinenin kapağını açınca içeriden ağır bir koku geliyor. Beko'nun D4 9101 E, D4 9122 E, D4 8102 E ve D3 5061 B kullanma kılavuzlarındaki sorun giderme tablosunda bu durumun kendi satırı var: **"Yıkama performansı kötü: Çamaşırlar kötü kokuyor."** Beko'nun açıklamasına göre **devamlı düşük sıcaklıkta ve/veya kısa programlarda yıkama nedeniyle kazanda koku ve bakteri tabakaları oluşabilir.** Beko bunun için üç şey öneriyor: **deterjan çekmecesinin temizliği, düzenli kazan temizliği ve her yıkamadan sonra aralık bırakılan kapak ile çekmece.** Bu yazıda üçünü sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → deterjan çekmecesini sifonla birlikte çıkar, lavaboda ılık suyla yıka, yerine tak → fişi tak, boş makinede kireç önleyiciyle Kazan Temizleme (yoksa İlave Su/İlave Durulama ile Pamuklu-90) çalıştır → körüğü bezle kurula → bundan sonra her yıkamadan sonra kapağı ve çekmeceyi aralık bırak. Koku sürüyorsa bayi ya da yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi çek.** Beko'nun güvenlik kuralı: **kurulum, bakım, temizlik ve tamir işlemleri sırasında ürünün fişini prizden çek.** Çekmece temizliği bir bakım işi; makine boşken fişi çekerek başla.

**2. Çekmeceyi çıkar.** Beko'nun bakım bölümüne göre yumuşatıcı, deterjan ve kir artıkları **zamanla makinede birikerek koku** yapabilir. İlk durak deterjan çekmecesi. **Yumuşatıcı gözündeki sifonun işaretli noktasına bastır** ve çekmeceyi **kendine doğru çekip çıkar.** Sifonu, arkasından kaldırarak çekmeceden ayır.

**3. Çekmeceyi yıka.** Çekmeceyi ve sifonu **lavaboda, bol ılık suyla** yıka. Beko, çekmecedeki kalıntıların cildine temas etmemesi için temizliği **eldivenle ya da uygun bir fırçayla** yapmanı istiyor. Bulaşık süngeri ya da ovalama malzemesi kullanma; Beko'ya göre bunlar boyalı ve plastik yüzeylere zarar verir.

**4. Çekmeceyi geri tak.** Temizledikten sonra **sifonu yerine iyice oturt** ve çekmeceyi geri tak. Beko çekmecenin, içinde toz deterjan birikmemesi için **4-5 yıkamada bir** temizlenmesini istiyor.

**5. Kazanı temizle.** Koku satırının dipnotu: **düzenli kazan temizliği uygulanmamış olabilir.** Fişi tak. Makine **kesinlikle çamaşırsız ve boşken** ana yıkama gözüne (2 no'lu göz) **1 çay bardağı (en çok 100 gr) toz kireç önleyici** koy; kireç önleyici tablet şeklindeyse **bir adet tablet** koy. Sonra **Kazan Temizleme** programını çalıştır. Makinende bu program yoksa **İlave Su** ya da **İlave Durulama** yardımcı fonksiyonunu da seçerek **Pamuklu-90** programını kullan. Beko çamaşır makinelerine uygun bir kireç önleyici kullanılmasını istiyor.

**6. Körüğü kurula.** Program bittikten sonra **körüğün içini temiz bir bezle kurula.** Beko ayrıca **her yıkamadan sonra kazanın içinde yabancı cisim kalmadığını** kontrol etmeni istiyor.

**7. Kapağı ve çekmeceyi aralık bırak.** Beko'nun koku satırındaki asıl çözüm bu: **deterjan çekmecesini ve makinenin kapağını her yıkamadan sonra aralık bırak.** Beko'ya göre böylece içeride **bakteriler için elverişli, nemli bir ortam** oluşmaz. Kazan Temizleme programının tanımı da aynı şeyi istiyor: program sona erdikten sonra yükleme kapağını aralık bırakarak makinenin içinin kurumasını sağla.

## Ne sıklıkla

Beko'nun bakım bölümü kazan temizleme işleminin **2 ayda bir** tekrarlanmasını istiyor; Kazan Temizleme programının tanımında ise programın **1-2 ayda bir** çalıştırılması yazıyor. Deterjan çekmecesi için önerilen aralık **4-5 yıkamada bir.** Yumuşatıcı bölmesinde normalden daha çok su ve yumuşatıcı karışımı kalmaya başlarsa Beko **sifon temizliğini** de istiyor.

Beko'nun bakım bölümünde körükteki deliklerin tıkalı olması durumu da var; bunun için alet gerekiyor. Delikleri tıkalı görüyorsan kılavuzundaki "Yükleme kapağı ve kazanın temizlenmesi" bölümüne bak ya da işi yetkili servise bırak.

## Bir kez giyilmiş çamaşırın kokusu için

Beko'nun D4 9101 E, D4 9122 E ve D4 8102 E kılavuzlarında **Refresh** adlı bir program var. Beko'ya göre bu program **sadece bir kez kullanılmış, üzerinde leke veya kir bulunmayan çamaşırların kokusunu gidermek** için. Makinenin kendisindeki kokuyu gidermek için değil; makine kokuyorsa yukarıdaki adımlar geçerli.

Markadan bağımsız anlatım için [çamaşır makinesi kokuyor](/blog/camasir-makinesi-kokuyor/) yazısına, kazan temizliğinin genel anlatımı için [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazısına bakabilirsin. Makinen kokunun yanında fazla köpük de yapıyorsa [Beko çamaşır makinesi köpük yapıyor](/blog/beko-camasir-makinesi-kopuk-yapiyor/) yazısı Beko'nun köpük satırını anlatıyor.

## Ne zaman servis

Çekmece temiz, kazan Beko'nun yöntemiyle temizlendi, kapak ve çekmece her yıkamadan sonra aralık bırakılıyor ve koku hâlâ sürüyorsa Beko'nun koku satırı kullanıcıya başka bir sebep göstermiyor. Beko'nun kapanış uyarısı geçerli: talimatları uygulamana rağmen sorunu gideremezsen **ürünü satın aldığın bayi ya da Yetkili Servise başvur;** çalışmayan ürünü kendin onarmayı deneme.

⛔ **Kendin-çöz sınırı burada biter.** Çekmece, kazan programı, körüğün kurulanması ve aralık kapak kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Koku çamaşırlarda mı, makinenin içinde mi?
2. Genellikle hangi sıcaklıkta ve hangi programlarla yıkıyorsun?
3. Deterjan çekmecesi en son ne zaman temizlendi?
4. Kazan Temizleme ya da Pamuklu-90 ile kazan temizliği en son ne zaman yapıldı?
5. Kapak ve çekmece yıkamalardan sonra kapalı mı kalıyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
