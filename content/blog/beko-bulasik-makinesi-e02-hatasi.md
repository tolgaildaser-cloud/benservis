---
title: "Beko bulaşık makinesi E02 hatası: su kesik"
description: "Beko bulaşık makinesi E02: şebeke suyu kesik ya da su giriş musluğu kapalı. Beko'nun kontrol sırası, hortum filtresi ve servis sınırı."
slug: "beko-bulasik-makinesi-e02-hatasi"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144, ek koşu 08:20). #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı;
# hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/
#  (W) Beko TR blog "Bulaşık Makinesi Hata Kodları Kılavuzu" https://www.beko.com.tr/blog/bulasik-makinesi-hata-kodlari-rehberi
#      HTML md5 b68dce2a69b3b62ff835543f98e91c80 · yayın 30 Oca 2025, güncelleme 29 Oca 2025 (sayfadaki tarih)
#      NOT: beko.com.tr yalın `curl -sL -A "Mozilla/5.0"` isteğine Akamai 403 veriyor; tam tarayıcı başlık setiyle (Safari UA + Accept/Accept-Language/Sec-Fetch-*) HTTP 200 çekildi (hub'daki 22 Ağu notuyla aynı yöntem).
#      "E02: Su Kesik … Program göstergesinde E02 ikonu yanıp sönmeye başladığı durumda şebeke suyu kesilmiş veya bulaşık makinesinin su giriş musluğu açılmadığı için makine su almıyor olabilir. Bu hata, şebeke suyunun kesilmesinden kaynaklı ortaya çıktıysa, kesinti sona erdiğinde makine tekrar su alır ve hata kodu ortadan kalkar."
#      "Şebekede su kesintisi olmamasına rağmen E02 kodu ikonunu görüyorsanız … elektriği ve suyu kestiğinizden emin olun. Ardından makinenin su giriş hortumunu çıkarmalısınız. Su giriş hortumundaki filtreyi temizleyip kontrol ettikten sonra makinenin su bağlantısını tekrar sağlayabilirsiniz. … Fakat hata kodu sönmüyorsa … makineyi kapatıp yetkili servis ile iletişime geçebilirsiniz."
#  (A) Kullanma kılavuzu BM 5005 / BM 5005 I  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4
#      s.25 "Su Kesik Uyarısı … P2 ikonu yanıp sönecektir. Hata devam ettiği sürece yıkama programı durdurulur ve belirli aralıklarla suyun gelip gelmediği kontrol edilir, su geldiğinde belirli bir süre sonra P2 ikonu söner yıkama kaldığı yerden devam eder."
#      s.25 "Su Taşma Uyarısı … P1 ikonu yanıp sönecektir … P1 ikonu sönmüyorsa hata kalıcıdır ve servis çağırılması gerekir."
#      s.27 "Hortum filtresinin temizlenmesi: 1. Musluğu kapayın ve hortumu sökün. 2. Filtreyi hortumdan çıkardıktan sonra musluk altında temizleyin. 3. … yeniden hortum içindeki yerine yerleştirin. 4. Hortumu musluğa takın."
#      s.9 "Musluktan gelen basınç en az 0,3 en fazla 10 bar olmalıdır." · "su giriş ve tahliye hortumlarının katlanmaması, sıkışmaması ve kırılmamasına dikkat edin."
#      s.10 "Bağlantıları yaptıktan sonra musluğu sonuna kadar açın ve su sızıntısı olup olmadığını kontrol edin."
#      s.26 "Makineyi temizlemeden önce fişini çekin ve musluğu kapayın."
#  (B) Kullanma kılavuzu BM 4004 / BM 4004 I  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b
#      A ile aynı cümleler aynı sayfalarda (P2/P1 s.25, hortum filtresi s.27, basınç s.9).
#  (C) Kullanma kılavuzu 3938 IL / 3938 ILS  http://download.beko.com/Download.UsageManualsBeko/34758_1728766176_AA_BEKO_3938-IL.pdf  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975
#      s.8 Aquasafe+: "Sistemin valf kutusuna, su teması engellenmelidir." · "hortumu hiçbir şekilde kısaltmayın ya da ek parçalarla uzatmayın."
#      s.6 "elektrik tesisatı, temiz su tesisatı ve su giderinin uygun olduğundan emin olun. Değilse ehliyetli bir elektrikçi ve tesisatçı çağırarak gerekli düzenlemeleri yaptırın."
#      s.29 hortum filtresi yordamı A ile birebir · s.31 Sorun giderme "Su gelmiyor olabilir. >>> Su giriş musluğunun açık olduğundan emin olun."
# BİLEREK YAZILMAYANLAR: su giriş valfi / akış ölçer / kart teşhisi (Beko'nun E02 metninde yok) · basınç ölçümü (kullanıcıya ölçüm yöntemi
#   verilmiyor; 0,3–10 bar yalnız kurulum şartı olarak anıldı) · "fişi çekip bekle, reset at" yordamı (belgede yok) · E02 ile P2'nin
#   aynı modelde geçtiği iddiası (P2 yalnız BM 4004/5005 kılavuzunda; "bazı modellerin kılavuzunda" diye verildi).
# Adım sırası: Beko'nun kendi sırası (önce kesinti/musluk, sonra elektrik ve suyu kesip hortum filtresi). Müdahale içeren ilk adım (3) güvenlik adımıdır.
# Alıntı denetim tablosu: beko-bulasik-makinesi-e02-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez"]
steps:
  - "Evdeki başka bir musluğu açıp şebeke suyu gelip gelmediğine bak; kesinti varsa su gelene kadar bekle."
  - "Makinenin bağlı olduğu su giriş musluğunun açık olduğundan emin ol."
  - "Su geldiği ve musluk açık olduğu hâlde E02 sürüyorsa makineyi kapat, fişini çek ve musluğu kapat."
  - "Su giriş hortumunu musluktan sök."
  - "Hortumun ucundaki filtreyi çıkar ve musluk altında temizle."
  - "Filtreyi hortumdaki yerine yerleştir ve hortumu katlanmadan musluğa tak."
  - "Musluğu sonuna kadar aç ve bağlantıda su sızıntısı olup olmadığını kontrol et."
  - "Fişi tak ve programı başlat; E02 sönmüyorsa makineyi kapat ve yetkili servisle iletişime geç."
faq:
  - q: "Beko bulaşık makinesi E02 hatası ne demek?"
    a: "Beko'nun kendi hata kodları rehberinde E02'nin adı su kesik. Bu kod yanıp sönüyorsa şebeke suyu kesilmiş ya da makinenin su giriş musluğu açılmadığı için makine su almıyor olabilir."
  - q: "Su kesintisi bitince E02 kendiliğinden gider mi?"
    a: "Evet. Beko'ya göre hata şebeke suyunun kesilmesinden kaynaklandıysa, kesinti sona erdiğinde makine tekrar su alır ve hata kodu ortadan kalkar. Bazı Beko modellerinin kılavuzunda aynı uyarı için program durdurulup suyun gelip gelmediğinin belirli aralıklarla kontrol edildiği ve su gelince yıkamanın kaldığı yerden devam ettiği yazıyor."
  - q: "Evde su var, musluk açık ama E02 gitmiyor. Ne yapmalıyım?"
    a: "Beko bu durumda makinenin su beslemesinin kontrol edilmesini istiyor: önce elektriği ve suyu kes, sonra su giriş hortumunu çıkar, hortumdaki filtreyi temizleyip kontrol et ve su bağlantısını yeniden yap. Makine su almaya başlarsa bir süre sonra E02 söner. Sönmüyorsa su alma sorunu devam ediyordur; makineyi kapatıp yetkili servisle iletişime geç."
  - q: "Hortumda Aquasafe+ yazıyor, filtreyi yıkarken nelere dikkat etmeliyim?"
    a: "Beko'nun kılavuzuna göre Aquasafe+ hortumunda elektrik bağlantıları ve aksamları bulunur; sistemin valf kutusuna su teması engellenmelidir. Bu yüzden yalnız hortum ucundaki filtreyi musluk altına tut, valf kutusunu ıslatma. Hortumu kısaltma ya da ek parçalarla uzatma. Aquasafe+ sistemi zarar görmüşse Beko fişi çekip yetkili servisi aramanı istiyor."
  - q: "Ekranda E02 değil P2 yanıp sönüyor, aynı şey mi?"
    a: "Beko'nun BM 4004 ve BM 5005 kılavuzlarında su kesik uyarısı P2 ikonuyla anlatılıyor: şebeke suyu kesikse ya da su giriş musluğu açılmamışsa makine su almaz ve P2 yanıp söner. Kontroller aynıdır. Hangi göstergenin senin makinende kullanıldığını kendi kullanma kılavuzundan teyit et."
images:
  coverAlt: "Tezgâh altındaki su musluğuna bağlı bulaşık makinesi giriş hortumu; hortum ucundan çıkarılmış küçük süzgeç ve yanında kuru bir bez"
---

Bulaşıkları yerleştirdin, programı başlattın; makine bir süre sessiz kaldı ve ekranda **E02** yanıp sönmeye başladı. Beko'nun kendi hata kodları rehberinde bu kodun adı kısa: **"Su Kesik."** Beko'ya göre E02 yanıp sönüyorsa **"şebeke suyu kesilmiş veya bulaşık makinesinin su giriş musluğu açılmadığı için makine su almıyor olabilir."** Beko'nun saydığı iki sebep de makineye gelen suyla ilgili. Bu yazıda Beko'nun verdiği kontrol sırasını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E02 = Beko'ya göre su kesik. Sıra şu: evde su var mı → makinenin musluğu açık mı → su varken kod sürüyorsa fişi çek, musluğu kapat → hortumu sök, uçtaki filtreyi musluk altında temizle → hortumu katlanmadan tak, musluğu sonuna kadar açıp sızıntıya bak → programı başlat. E02 hâlâ sönmüyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Şebekede su var mı, bak.** Mutfakta ya da banyoda başka bir musluğu aç. Su gelmiyorsa E02'nin sebebi büyük ihtimalle kesintidir. Beko'ya göre bu durumda **kesinti sona erdiğinde makine tekrar su alır ve hata kodu ortadan kalkar.** Beklemek yeterli.

**2. Makinenin musluğunu kontrol et.** Makinenin su giriş hortumunun bağlı olduğu musluk çoğu mutfakta tezgâh altındadır. Beko'nun sorun giderme bölümündeki öneri net: **su giriş musluğunun açık olduğundan emin ol.**

**3. Güvenliği al.** Evde su var, musluk açık ve E02 hâlâ yanıp sönüyorsa sıradaki kontrol hortumda. Beko, bundan önce **elektriği ve suyu kestiğinden emin olmanı** istiyor: makineyi kapat, **fişini çek** ve musluğu kapat.

**4. Hortumu musluktan sök.** Su giriş hortumunu musluğa bağlandığı yerden çıkar.

**5. Hortum filtresini temizle.** Beko'nun kılavuzlarına göre şehir şebekesinden ya da tesisattan gelebilecek kum, kil, pas gibi kirlerin makineye zarar vermesini **su giriş hortumundaki filtre** engeller. Filtreyi hortumdan çıkar ve **musluk altında** temizle.

⚠️ **Aquasafe+ uyarısı:** Hortumunda Aquasafe+ sistemi varsa Beko'nun kılavuzu, sistemin **valf kutusuna su teması engellenmelidir** diyor; hortumda elektrik bağlantıları bulunduğu için hortum **kısaltılmaz ve ek parçalarla uzatılmaz.** Yalnız hortum ucundaki filtreyi yıka, valf kutusunu ıslatma.

**6. Filtreyi ve hortumu yerine tak.** Temizlediğin filtreyi hortum içindeki yerine yerleştir, sonra hortumu musluğa tak. Beko, su giriş ve tahliye hortumlarının **katlanmaması, sıkışmaması ve kırılmamasına** dikkat edilmesini istiyor; makineyi yerine iterken hortumun kıvrılmadığına bak.

**7. Musluğu aç, sızıntıya bak.** Kılavuzdaki sıra şu: bağlantıları yaptıktan sonra **musluğu sonuna kadar aç** ve su sızıntısı olup olmadığını kontrol et.

**8. Programı başlat ve izle.** Fişi tak ve programı başlat. Beko'ya göre bu işlemden sonra makine su almaya başlarsa **bir süre sonra E02 söner.** Kod sönmüyorsa su alma sorunu devam ediyordur: makineyi kapat ve yetkili servisle iletişime geç.

## E02 neden "arıza" değil, "uyarı" gibi davranır?

Beko'nun anlatımına göre E02, makinenin su alamadığını gösterir. Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarında aynı durum **"Su Kesik Uyarısı"** başlığıyla anlatılıyor: uyarı sürdüğü sürece **yıkama programı durdurulur ve belirli aralıklarla suyun gelip gelmediği kontrol edilir**; su geldiğinde bir süre sonra uyarı söner ve **yıkama kaldığı yerden devam eder.** Bu kılavuzlarda uyarı ekranda E02 yerine **P2** ikonuyla gösteriliyor. Hangi göstergenin senin makinende kullanıldığını kendi kılavuzundan teyit et.

Aynı kılavuzlarda **P1**, su taşma uyarısıdır: makine fazla su almışsa ya da bir parçada sızıntı olmuşsa P1 yanıp söner ve makine içerideki suyu atmaya çalışır; P1 sönmüyorsa Beko'ya göre hata kalıcıdır ve servis çağrılması gerekir. Beko'nun hata kodları rehberinde taşma kodu E01 olarak geçiyor; ayrıntısı [Beko bulaşık makinesi E01 hatası](/blog/beko-bulasik-makinesi-e01-hatasi/) yazısında.

## Musluk basıncı ve tesisat

Beko'nun kurulum şartına göre musluktan gelen basınç **en az 0,3, en fazla 10 bar** olmalıdır; 10 barın üzerindeyse araya basınç düşürücü vana takılır. Evdeki basıncı ölçmek kullanıcının işi değil. Beko'nun kılavuzu, temiz su tesisatının uygun olmadığı durumda **ehliyetli bir tesisatçı çağırarak** gerekli düzenlemelerin yaptırılmasını istiyor.

Beko ayrıca şebekeden gelebilecek kirin makineye zarar vermemesi için evin ya da apartmanın **su girişine filtre takılmasını** tavsiye ediyor.

## Sınır nerede biter

Evde su var, musluk sonuna kadar açık, hortum düz, filtre temiz ve E02 yine sönmüyorsa Beko kullanıcıya başka adım vermiyor: **makineyi kapat ve yetkili servisle iletişime geç.** Kılavuzun genel kuralı da aynı: sorun giderme adımlarına rağmen sorun sürerse ürünü kendin onarmayı asla deneme.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum ve hortum filtresi kullanıcıya; makinenin gövdesi ve içindeki su alma düzeneği servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Evde şebeke suyu var mıydı?
2. Makinenin musluğu sonuna kadar açık mıydı?
3. Hortum filtresi temizlendi mi, hortumda katlanma var mı?
4. Hortum Aquasafe+ mı?
5. Filtre temizlendikten sonra E02 bir süre içinde söndü mü?

Bu beşine cevabın varsa servise "makine su almıyor" yerine somut bir tablo anlatabilirsin. Beko'nun yayımladığı diğer bulaşık makinesi kodları için [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/) yazısına, markadan bağımsız kontroller için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısına bakabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
