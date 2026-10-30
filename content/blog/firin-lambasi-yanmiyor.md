---
title: "Fırın lambası yanmıyor: kılavuzlara göre kontroller"
description: "Fırın lambası yanmıyorsa önce fonksiyon, kapak ve elektriği kontrol et. Bosch, Arçelik, Samsung ve Vestel kılavuzlarındaki lamba değerleri."
slug: "firin-lambasi-yanmiyor"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P19 #122). origin/main'de fırın lambası yazısı yok. Yakın: firin-isinmiyor, vestel-firin-tuslari-calismiyor, bosch-firin-isinmiyor.
# Arama kanıtı: BOSLUK.md #122 (OT "fırın lambası" #3,#4; konu "neden yanmaz / nasıl değişir / 25W-40W"). Rakip başlık metni kaynak değil, yalnız kanıt.
# Belgeler (yerel kopyalar blog-taslaklar/kaynak-firin-sprint/, 1 Eki 2026, HTTP 200; bu koşuda yeni indirme yok; pdftotext, sayfa = PDF sayfası):
#  (B) Bosch HBF512B.1T kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001944574_A.pdf  md5 3fac75fc8fb8bbef288fcc478b030ece
#  (A) Arçelik 9658 serisi ankastre fırın kılavuzu  https://download.arcelik.com.tr/download.usagemanuals/9658-syti-tek-bolmeli-60-cm-ankastre-firinlar-kullanim-kilavuzu-tr_TR_201505070836921_User20Manual20-20Filetur-A.pdf  md5 cc4cfd75c500496d1ee5ade673f5bff5
#  (S) Samsung NV7B442/NV7B452 kılavuzu  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV7B4420ZAK&CttFileID=10050757&CDCttType=UM&VPath=UM%2F202501%2F20250124222105993%2FO_DG68_01413G_03_IB_FULL_NV7B4420ZAK_TR_250113.pdf  md5 776e6d02867f930dbda6362c94ea2db8
#  (B2) Bosch HBB23C.. kılavuzu  https://media3.bsh-group.com/Documents/9000728669_B.pdf  md5 5544858a428c91894c15726616c53729 (yalnız lamba değeri, s.11)
#  (V) Vestel AF-8685 YS/YB fırın kılavuzu  https://statik.vestel.com.tr/webfiles/20262709_k.pdf  md5 661a6252730fb17d5e49dff36223aaff
# Sayfalar: B s.8 aydınlatma · B s.18 lamba · A s.29 lamba · A s.31 sorun giderme · S s.6, s.11 lamba davranışı · S s.49 ampul · V s.5 uyarı · V s.28 ampul değeri.
# BİLEREK YAZILMAYANLAR: lamba değiştirme adımları (elektrik parçası; yazı güvenlik sınırında bırakıldı, kılavuz bölümüne yönlendirir) · "40 W her fırına uyar" gibi genel değer · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Fırının başka işlevleri çalışıyor mu bak; ekran, ısınma ve düğmeler çalışıyorsa sorun büyük olasılıkla yalnız lambada."
  - "Fonksiyon düğmesinde lamba konumu varsa seç ve lambanın o konumda yanıp yanmadığına bak."
  - "Kapağı açıp kapat; bazı fırınlarda lamba kapak açılınca yanar, pişirme sırasında kendiliğinden söner."
  - "Evde elektriğin gelip gelmediğini ve sigorta kutusunu kontrol et."
  - "Hâlâ yanmıyorsa kılavuzdaki lamba türünü ve değerini not et; farklı lamba takma."
  - "Fırın kapalı, fişi çekili ve soğumadan lambaya dokunma; lamba yine yanmıyorsa ya da emin değilsen yetkili servisi çağır."
faq:
  - q: "Fırın lambası kaç watt olmalı: 25 W mı 40 W mı?"
    a: "Modele göre değişir. Bosch HBF512B kılavuzu 25 Watt'lık, 230 V halojen aydınlatma yazıyor. Samsung NV7B442 için 25-40 W, 220-240 V ve 300 derece ısıya dayanıklı ampul isteniyor. Vestel AF-8685 için 230 V, 15-25 Watt, E14 tip yazıyor. Kendi modelinin değeri için kendi kılavuzuna bak."
  - q: "Fırın lambası neden pişirme sırasında kendiliğinden sönüyor?"
    a: "Samsung kılavuzuna göre fırın lambası enerji tasarrufu için pişirme programı başladıktan birkaç dakika sonra kapatılır; fırın lambası düğmesiyle kendin de kapatıp açabilirsin. Bu bir arıza değil."
  - q: "Fırın lambasını evdeki ampulle değiştirebilir miyim?"
    a: "Hayır. Arçelik fırın lambasının 300 derece ısıya dayanıklı özel bir ampul olduğunu, Vestel de bu lambanın elektrikli ev eşyaları için tasarlandığını ve ev aydınlatması için uygun olmadığını yazıyor."
  - q: "Lamba yandı ama fırın da çalışmıyor, ne yapmalıyım?"
    a: "O zaman sorun lambada değil elektriktedir. Arçelik kılavuzu elektrik gelip gelmediğine ve sigorta kutusuna bakmanı istiyor; sorun sürerse servis."
images:
  coverAlt: "Mutfak dolabına gömülü ankastre fırın; içi karanlık, kapağı aralık"
  steps:
    - "Ekranı ve düğmeleri çalışan ama içi karanlık fırın çizimi"
    - "Fonksiyon düğmesinde lamba simgesine bakan beyaz eldivenli sade siluet el"
    - "Fırın kapağını açıp içine bakan beyaz eldivenli sade siluet el"
    - "Sigorta kutusundaki sigortalardan birine işaret eden beyaz eldivenli sade siluet el"
    - "Kılavuzdaki lamba bilgisini parmağıyla gösteren beyaz eldivenli sade siluet el"
    - "Fırının yanında alet çantasıyla bekleyen servis teknisyeni silueti, yüz yok"
---

Fırının içini görmek istiyorsun, lamba yanmıyor. Çoğu kullanıcı hemen "nasıl değişir, kaç watt" diye arıyor. Ama önce lambanın gerçekten bozuk olup olmadığını anlamak gerekiyor; kılavuzlarda lambanın yanmamasının birkaç sıradan nedeni var. Bu yazıda **Bosch** HBF512B, **Arçelik** 9658 serisi, **Samsung** NV7B442 ve **Vestel** AF-8685 kullanım kılavuzlarının lambayla ilgili yazdıklarını topladık. Kendi fırınının kılavuzu farklı bir şey diyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik:** Fırın lambası elektrikli bir parçadır ve çok sıcak olur. Bosch lamba değişirken duy kontaklarının gerilim altında kalabileceğini ve lambaların kapatıldıktan sonra da bir süre yanık tehlikesi taşıdığını yazıyor. Arçelik de elektrik bağlantısını kesip fırının soğumasını bekletiyor.

## Adım adım: lamba yanmıyorsa

**1. Yalnız lamba mı bozuk?** Fırının ekranı, düğmeleri ve ısıtması çalışıyorsa sorun büyük olasılıkla yalnız lambada. Hiçbir şey çalışmıyorsa konu lamba değil elektriktir; o durumda [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısındaki kontrollere geç.

**2. Fonksiyon konumu.** Bosch, fonksiyon seçme düğmesindeki fırın lambası konumunda lambanın ısıtma olmadan da açılabildiğini yazıyor. Çoğu ısıtma türünde lamba çalışma sırasında açık; çalışma düğmeyle sonlandırılınca kapanıyor. Düğmeyi lamba konumuna getirip dene.

**3. Kapak ve otomatik kapanma.** Samsung kılavuzuna göre fırın çalışırken kapak açıldığında lamba yanar. Aynı kılavuz pişirme sırasında lamba düğmesine basarak lambayı kapatabileceğini ve lambanın enerji tasarrufu için pişirme programı başladıktan birkaç dakika sonra kapandığını yazıyor. Yani pişirme sırasında sönen lamba arıza olmayabilir.

**4. Elektrik ve sigorta.** Arçelik'in sorun giderme tablosunda "Fırın ışığı yanmıyor" satırı iki neden sayıyor: lambanın bozuk olması ve elektriğin gelmiyor olması. İkincisi için evde elektrik olup olmadığına ve sigorta kutusuna bakmanı istiyor. Sigorta sürekli atıyorsa fırını fişten çekili bırakıp servisi çağır.

**5. Lamba türü ve değeri.** Lamba gerçekten bozulduysa aşağıdaki değerlere dikkat et; kılavuzlar birbirinden farklı:

| Marka | Kılavuzdaki lamba |
|---|---|
| Bosch HBF512B | Isıya dayanıklı 230 V halojen, 25 Watt (s.18) |
| Samsung NV7B442 | 25-40 W, 220-240 V, 300 derece dayanıklı (s.49) |
| Vestel AF-8685 | 230 V, 15-25 Watt, tip E14, 300 derece dayanıklı (s.28) |
| Bosch HBB23C |  220-240 V, tip E14, 25 W, 300 derece dayanıklı (s.11) |
| Arçelik 9658 | Teknik özelliklerde iç aydınlatma 15/25 W (s.9); 300 derece dayanıklı özel ampul (s.29) |

Yani "25 W mı 40 W mı" sorusunun tek cevabı yok; kendi modelinin kılavuzundaki değer geçerli. Arçelik, Samsung ve Bosch lambayı yetkili servisten ya da müşteri hizmetlerinden almanı öneriyor; evde kullandığın normal ampul uygun değil.

**6. Değişim ve sınır.** Dört kılavuz da lambanın değiştirilebilir olduğunu yazıyor ve hepsi önce cihazın kapatılmasını, elektrik bağlantısının kesilmesini istiyor; Bosch, Arçelik ve Vestel ayrıca fırının soğumasını bekletiyor. Bosch halojen lambaya yalnızca temiz, kuru bir bezle dokunulmasını istiyor; Samsung da kuru bez kullanmanı söylüyor. Değişim adımları modele göre farklı; biz burada adım vermiyoruz. Kılavuzundaki "lamba değişimi" bölümünü oku; kendinden emin değilsen ya da lamba değişince de yanmıyorsa yetkili servisi çağır.

## Lamba yanmıyor diye ne zaman şüphelenmeli?

Kılavuzlar lambanın ömrü konusunda tek bir süre vermiyor, ama lambanın zamanla devre dışı kalabileceğini yazıyor. Bosch "pişirme bölümündeki aydınlatma devre dışı kaldıysa fırın lambasını değiştiriniz" diyor. Vestel'in sorun giderme tablosunda "Fırının lambası (varsa) çalışmıyor" belirtisinin altında lambanın arızalanması ve elektrik beslemesinin kesilmiş olması yan yana duruyor. Yani önce elektriğin olup olmadığına, ardından lambaya bakmak kılavuzların kendi sırası. Bu sırayı atlayıp doğrudan yeni lamba aramak, sorun elektrikteyse hem zaman hem emek kaybettirir.

Bosch halojen lambaya dokunurken temiz, kuru bez kullanmayı öneriyor çünkü parmak izi lambanın ömrünü kısaltıyor. Samsung da ter ve parmak izinin ampule zarar verdiğini yazıyor. Bu yüzden lambaya çıplak elle dokunma.

## Lamba değerleri nasıl okunur?

Tabloda gördüğün V gerilimi, W gücü, E14 ise lambanın duyuna oturan taban tipini gösteriyor. Üç değerin de kılavuzdakiyle aynı olması gerekiyor; çünkü aynı markanın bile farklı modelleri farklı lamba istiyor. Örneğin Bosch'un HBF512B kılavuzu halojen aydınlatma ve 25 Watt yazarken, aynı markanın HBB23C kılavuzu 220-240 V, E14 tabanlı, 25 W ve sıcaklığa dayanıklı (300 derece) yedek lamba diyor. Yanlış güçte bir lamba hem parlaklığı hem de ısı dayanımını etkiler; bu yüzden kılavuzlar yalnızca uygun lambaların kullanılmasını istiyor.

## Ne zaman servis

- Lambayı doğru değerde yenilemene rağmen yanmıyorsa
- Duy kontaklarında kararma, yanık kokusu ya da cam kapakta çatlak varsa
- Fırının başka işlevleri de bozulduysa

⛔ **Kendin-çöz sınırı burada biter.** Kontrol ve kılavuzdaki değerleri okumak sende; duy, kablo ve elektrik parçaları yetkili servisin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
