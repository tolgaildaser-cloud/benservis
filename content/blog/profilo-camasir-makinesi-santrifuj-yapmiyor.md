---
title: "Profilo çamaşır makinesi santrifüj yapmıyor"
description: "Profilo çamaşır makinesi sıkmıyor, çamaşır ıslak çıkıyorsa Profilo'nun sırası: sıkma devri, Kırışık Azaltma, çamaşırı dağıtma ve Sıkma programı."
slug: "profilo-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200.
# Belge adresleri Profilo'nun kendi ürün sayfalarından (www.profilo.com/tr/tr/product/...) alındı; titleKey "user-manuals". #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Bosch/Siemens'in yayındaki belirti sayfaları açılmadı, metin Profilo belgesinden yeniden yazıldı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (A) Profilo CGK264Z0TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002013778_F.pdf  48 s.  md5 e8d78fecbda5478f066c2a5a79daf68d
#  (B) Profilo CGA242X3TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002022851_B.pdf  44 s.  md5 26e5f99b6a19ecada2fa682a657b7d76
# Arıza tablosu (A s.40-41 · B s.37): "Sıkma işleminden sonra çamaşırlar çok ıslak." → "Düşük sıkma devir sayısı ayarlanmış." → "Programı Sıkma başlatınız." + "Bir sonraki yıkamada yüksek bir sıkma devir sayısı ayarlayınız."
#   · "Cihaz, sıkma devrini düşürerek dengesizliği telafi eder." → "1. Tamburun içindeki çamaşırları yeniden dağıtınız. 2. Programı Sıkma başlatınız." · "Kırışık Azaltma etkinleştirildi." → "Uygun bir program ayarlayınız."
#   · (A s.40 · B s.36) "Yüksek sıkma devir sayısına ulaşılamadı." → Kırışık Azaltma → "Kumaş türüne uygun bir program seçiniz." / dengesizlik telafisi → "Herhangi bir işlem uygulamaya gerek yoktur."
#   · (A s.37 · B s.34) "H:32 — Cihaz, çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal etti." → "Tamburun içindeki çamaşırları yeniden dağıtınız."
#   · (A s.40) "Birden fazla kez sıkma." → "Hata yoktur. Cihaz, çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler."
# Diğer: A s.21 / B s.20 Sıkma Devri tuşu "Sıkma devir sayısını ayarlama veya sıkmayı devre dışı bırakma." + "...seçimiyle su boşaltılır ve sıkma devre dışı bırakılır. Çamaşırlar ıslak halde tamburda kalır."
#   · A s.19 ekran: "Son sıkma yok, sadece boşaltma" / "Durulama suyunda bekletme, boşaltma yok" · A s.29 13.10 durulama suyunda bekletmede devam: Sıkma ya da tahliye programı + Başlat Beklet
#   · A s.21 / B s.20 Kırışık Azaltma: "Sıkma işlemi ve sıkma devri uygun hale getirilir. Çamaşırlar yıkandıktan sonra daha yüksek artık nem içeriğine sahiptir."
#   · A s.23 / B s.22 program "Sıkma/Boşaltma — Sıkma ve su boşaltma." · A s.22-23 programların maks. devirleri (ör. Sentetikler maks. 1200) · A s.38 / B s.35 "Diğer tüm hata kodları" (yeniden başlat → 30 sn güç kes → müşteri hizmetleri)
#   · A s.36-37 / B s.33 uyarı "Sadece bunun eğitimini almış uzman personel cihazda onarımlar yapabilir."
# BİLEREK YAZILMAYANLAR: motor/kömür/kart teşhisi (belgede yok) · titreşimdeki ayak ayarı ve nakliye emniyeti sökümü (A s.12-15: 13 ve 17 numara anahtar gerekir → adım değil) ·
#   dolum miktarının sıkmaya etkisi (belgede kırışıklıkla ilişkilendirilmiş, sıkmayla değil) · A'daki yeniden başlatma tuş kombinasyonu (B'de farklı; modele göre) · pompa temizliği (su boşaltma konusu, bu sayfada değil).
# Alıntı denetim tablosu: profilo-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekrandaki sıkma devri değerine bak; sıkma kapalı ya da yalnız boşaltma seçiliyse Sıkma Devri tuşuyla bir devir seç."
  - "Program durulama suyunda bekletmede durduysa Sıkma ya da tahliye programını ayarlayıp Başlat Beklet'e bas."
  - "Kırışık Azaltma seçeneği açıksa kapat ya da kumaş türüne uygun bir program seç."
  - "Kapağı açıp tamburdaki çamaşırları elle yeniden dağıt."
  - "Program seçme düğmesini Sıkma/Boşaltma programına getirip programı başlat."
  - "Bir sonraki yıkamada Sıkma Devri tuşuyla daha yüksek bir devir ayarla."
faq:
  - q: "Profilo çamaşır makinesi çamaşırları ıslak bırakıyor, arıza mı?"
    a: "Önce Profilo'nun listesine bak. Kullanım kılavuzundaki arıza tablosu 'Sıkma işleminden sonra çamaşırlar çok ıslak' satırında üç neden sayıyor: düşük bir sıkma devri ayarlanmış olması, makinenin dengesizliği telafi etmek için devri düşürmesi ve Kırışık Azaltma seçeneğinin açık olması. Üçü de kullanıcı tarafında düzeltilir: Sıkma programını başlatmak, çamaşırları yeniden dağıtmak ya da uygun bir program seçmek."
  - q: "Ekranda H:32 yazıyor, ne demek?"
    a: "Profilo'nun tablosuna göre H:32, makinenin çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal ettiğini gösterir. Profilo'nun çözümü tamburun içindeki çamaşırları yeniden dağıtmak. Sonra Sıkma programını başlatarak sıkmayı tamamlayabilirsin."
  - q: "Makine sıkmaya başlıyor, duruyor, tekrar deniyor. Normal mi?"
    a: "Evet. Profilo'nun tablosu 'birden fazla kez sıkma' için 'Hata yoktur' diyor: makine çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler. Yüksek sıkma devrine ulaşılamaması da aynı nedenle olabilir; makine dengesizliği telafi etmek için devri düşürür ve bu durumda Profilo herhangi bir işlem gerekmediğini yazıyor."
  - q: "Kırışık Azaltma açıkken neden çamaşırlar daha ıslak çıkıyor?"
    a: "Profilo'nun tuş açıklamasına göre Kırışık Azaltma açıldığında sıkma işlemi ve sıkma devri buna göre uyarlanır; çamaşırlar yıkamadan sonra daha yüksek artık nem içerir. Profilo bu durumda çamaşırların yıkamadan hemen sonra asılmasını öneriyor. Daha kuru çıkmasını istiyorsan bu seçeneği kapatıp kumaş türüne uygun bir program seç."
images:
  coverAlt: "Kapağı açık çamaşır makinesinin tamburunda bir yana toplanmış ıslak çamaşırlar, bir el onları tambura yayıyor"
---

Program bitti ama çamaşırlar sırılsıklam, ya da makine sıkmaya hiç geçmedi. Profilo'nun çamaşır makinesi kullanım kılavuzundaki arıza tablosunda bu durum için ayrı bir satır var: **"Sıkma işleminden sonra çamaşırlar çok ıslak."** Profilo'nun bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **ayarlanan sıkma devri, çamaşırların tamburdaki dağılımı ve Kırışık Azaltma seçeneği.** Bu yazıda Profilo'nun listesini sırayla açıyoruz; arıza sanılan ama arıza olmayan durumlara da bakıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma devri kapalı mı bak → durulama suyunda bekletme seçiliyse Sıkma programını başlat → Kırışık Azaltma'yı kapat → çamaşırları elle dağıt → Sıkma/Boşaltma programını çalıştır → sonraki yıkamada daha yüksek devir seç. Birkaç kez sıkma denemesi Profilo'ya göre arıza değil.

## Adım adım: evde denenecekler

**1. Sıkma devrine bak.** Profilo'nun tablosundaki ilk neden: **düşük bir sıkma devir sayısı ayarlanmış.** Makinede **Sıkma Devri** tuşu hem devri ayarlamaya hem de **sıkmayı devre dışı bırakmaya** yarıyor. Profilo'ya göre sıkmasız seçim yapıldığında su boşaltılır, sıkma yapılmaz ve **çamaşırlar ıslak halde tamburda kalır.** Ekranda "son sıkma yok, sadece boşaltma" seçeneği görünüyorsa bir devir seç.

**2. Durulama suyunda bekletmeyi bitir.** Ekrandaki devir alanında bir seçenek daha var: **durulama suyunda bekletme, boşaltma yok.** Bu seçenekte çamaşırlar son durulamadan sonra durulama suyunda bekler. Profilo'nun tarifine göre devam etmek için **Sıkma programını ya da bir tahliye programını ayarla** ve **Başlat Beklet** tuşuna bas.

**3. Kırışık Azaltma'yı kapat.** Tablodaki diğer neden: **Kırışık Azaltma etkinleştirilmiş.** Profilo'nun açıklamasına göre bu seçenek açıkken sıkma işlemi ve devri uyarlanır, çamaşırlar yıkamadan sonra **daha yüksek artık nem** içerir. Profilo'nun çözümü **kumaş türüne uygun bir program** seçmek. Programın izin verdiği en yüksek devir de programa göre değişir; örneğin kılavuzdaki program tablosunda Sentetikler için sınır **maks. 1200 dev/dak.**

**4. Çamaşırları yeniden dağıt.** Profilo'ya göre makine, çamaşırlar tamburda dengesiz dağılmışsa **sıkma devrini düşürerek dengesizliği telafi eder.** Ekranda **H:32** görüyorsan makine aynı nedenle, yani **çamaşırların eşit olmayan dağılımı** yüzünden sıkmayı iptal etmiş demektir. Kapağı açıp tamburdaki çamaşırları elle yay; bir yana toplanmış çamaşır kalmasın.

**5. Sıkma programını başlat.** Profilo'nun hem düşük devir hem dengesizlik satırında verdiği ortak adım: **Sıkma programını başlat.** Program seçme düğmesini **Sıkma/Boşaltma** programına getir; kılavuzdaki tabloya göre bu program sıkma ve su boşaltma yapar. Programı başlat ve bitmesini bekle.

**6. Sonraki yıkamada devri yükselt.** Profilo'nun tablodaki son önerisi: **bir sonraki yıkamada yüksek bir sıkma devir sayısı ayarla.** Programı seçtikten sonra Sıkma Devri tuşuyla ekrandaki değeri kontrol et; Profilo'ya göre program ayarları programa kalıcı olarak kaydedilmez, bu yüzden her yıkamada bir bakmak işe yarar.

## Arıza olmayan üç durum

**Makine birkaç kez sıkmaya kalkıyor.** Profilo'nun tablosu bunun için **"Hata yoktur"** diyor: makine çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler.

**Yüksek devre çıkmıyor.** Kırışık Azaltma kapalıysa ve devir yine yükselmiyorsa Profilo'ya göre makine dengesizliği telafi etmek için devri düşürüyor olabilir; Profilo bu durumda **herhangi bir işlem gerekmediğini** yazıyor.

**Program süresi yıkama sırasında değişiyor.** Profilo'ya göre bu da hata değil: program akışı elektronik olarak optimize edilir, yoğun köpük olduğunda ek durulama açılır ya da dengesizlik telafi edilir.

Sıkma sırasında makine yerinde yürüyor ya da çok sallanıyorsa Profilo'nun tablosu hizalama, ayak sabitleme ve taşıma emniyetlerini sayıyor. Kılavuzdaki bu işler anahtar gerektiriyor; kılavuzundaki "Kurma ve bağlama" bölümüne bak ya da yetkili servise bırak. Kodlar için [Profilo çamaşır makinesi hata kodları](/blog/profilo-camasir-makinesi-hata-kodlari/) sayfasına, markadan bağımsız anlatım için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısına bakabilirsin.

## Ne zaman servis

Devir doğru, Kırışık Azaltma kapalı, çamaşırlar dağıtılmış ve Sıkma programı da çamaşırı ıslak bırakıyorsa ya da ekranda başka bir kod çıkıyorsa Profilo'nun tablosu sırayı şöyle veriyor: **cihazı yeniden başlat; arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır; arıza devam ederse müşteri hizmetlerini ara.** Profilo, ararken **hata mesajını eksiksiz** belirtmeni ve mümkünse arızayı fotoğraf ya da videoyla belgelemeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Profilo'nun uyarısı açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ayar, program ve yükleme kullanıcıya; makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Çamaşırlar hangi programdan ıslak çıktı, sıkma devri kaç seçiliydi?
2. Kırışık Azaltma açık mıydı?
3. Ekranda H:32 ya da başka bir kod var mı?
4. Sıkma/Boşaltma programı tek başına çalışınca da sıkmıyor mu?
5. Tamburda tek bir büyük parça mı vardı, yoksa karışık yük mü?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
