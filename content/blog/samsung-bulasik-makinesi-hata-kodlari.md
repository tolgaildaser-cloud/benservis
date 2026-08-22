---
title: "Samsung bulaşık makinesi hata kodları: 4C, 5C, LC ve HE ne demek"
description: "Samsung bulaşık makinesinde 4C su temini, 5C tahliye, LC kaçak, HE ısıtma devresi sorunu demek. Özellikle 4C için evde yapılacak kontroller ve servis sınırı burada."
slug: "samsung-bulasik-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — HE'nin KESİNLİĞİ YUMUŞATILDI (kod tablosu denetimi, TARAMA-1).
# Yazı HE'yi "rezistans arızası" kesinliğiyle veriyordu. Samsung kendi bölge
# sayfaları arasında ÇELİŞİYOR: AE sayfası "heating element" derken CA sayfası
# HE'yi "incorrect temperature detection", HC'yi "overheating" diye tanımlıyor;
# TR sayfası ölü. Doğru ifade "ısıtma devresi" — hangi parça olduğu koda bakarak
# söylenemez. Bunu okura da açıkça yazdık.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Küçük fırça", "Sünger"]
steps:
  - "Kodu aynen not al. 4C ile 4E, 5C ile 5E, LC ile LE aynı anlama gelir; ekranda hangisi varsa onu yaz."
  - "Makineyi kapat ve fişini çek. Ekranda LC / LE varsa musluğu da kapat ve makineyi kurumaya bırak."
  - "Musluğu ve şebekeyi kontrol et. Eviyenin altındaki makine musluğu tam açık mı? Evde su var mı — başka bir musluğu açıp bak."
  - "Giriş hortumuna bak. Dolabın arkasında bükülmüş, ezilmiş ya da kıvrılmış olmasın; rahatlat ve düzelt."
  - "Giriş filtresini temizle. Musluğu kapat, giriş hortumunu makine tarafından elinle sök (altına havlu ser) ve girişteki küçük süzgeci akan suda küçük bir fırçayla temizle."
  - "İç filtreyi temizle. Alt sepeti çıkar, tabandaki filtreyi sök, yemek artıklarını temizle ve yerine sıkıca tak; tabandaki su ılık olabilir, elini yavaş daldır."
  - "Tahliye hortumunu ve gideri kontrol et. Hortumda bükülme var mı, gider bağlantısı tıkalı mı bak; eviye gideri de yavaş akıyorsa sorun makinede değil giderde olabilir."
  - "Hortumu tak, musluğu aç ve kısa bir programla dene. Bağlantıdan damlama olmadığını kontrol et, fişi tak ve dene; kod tekrar geliyorsa valf, pompa ve rezistans tarafı servis işidir."
faq:
  - q: "Samsung bulaşık makinesinde 4C hatası ne demek?"
    a: "4C, makinenin ihtiyaç duyduğu suya ulaşamadığını gösteren su temini hatasıdır; aynı durum bazı modellerde 4E olarak görünür — Samsung bunu eski/yeni ayrımı değil, model varyantı olarak veriyor. Sebep çoğu zaman makinenin dışındadır: kapalı ya da kısık musluk, su kesintisi, bükülmüş giriş hortumu veya tıkanmış giriş filtresi. Bu dış kontroller temizken 4C sürüyorsa su giriş valfi tarafına servisin bakması gerekir."
  - q: "LC hatası geldi ama ortada su görünmüyor — makine yanlış mı algılıyor?"
    a: "LC (bazı modellerde LE), kaçak sensörünün makinenin alt bölümünde nem ya da su algıladığını gösterir; makine bu durumda güvenlik gereği kendini tahliye etmeye çalışır. Zeminde su görünmemesi kaçak olmadığı anlamına gelmez — az miktarda sızıntı yalnızca alt tavada birikebilir. Fişi çek, musluğu kapat ve makineyi kurumaya bırak; kod tekrar geliyorsa sızıntının kaynağını servis bulmalıdır."
  - q: "5C tahliye hatasında evde ne yapabilirim?"
    a: "5C, makinenin suyu boşaltamadığını gösterir. İlk bakılacak yer makinenin içindeki filtredir: çıkar, yemek artıklarından arındır, yerine tak. Sonra tahliye hortumunun bükülmediğini ve gider bağlantısının tıkalı olmadığını kontrol et. Bu üçü temizken hata sürüyorsa tahliye pompası tarafında sorun vardır ve o bölge servise aittir."
  - q: "HE hatası kendiliğinden düzelir mi?"
    a: "HE, ısıtma devresinde bir sorun olduğunu gösterir: su hedef sıcaklığa getirilemiyordur. Hangi parçanın sorumlu olduğu koda bakarak söylenemez, çünkü Samsung'un bölge sayfaları bu kodda kendi içinde çelişiyor — biri ısıtıcı elemanı, diğeri sıcaklığın yanlış ölçülmesini gösteriyor. Bir kez resetleyip normal bir programla denemek makul bir ilk adımdır; kod geçici bir okumadan gelmiş olabilir. Ama tekrar geliyorsa rezistans ya da sıcaklık ölçüm tarafında gerçek bir arıza vardır; bu parçalar gövde içindedir ve onarımı kesin olarak servis işidir."
images:
  coverAlt: "Bulaşık makinesinin üst kenarındaki kumanda şeridi"
---

Makine programın başında bekliyor, su sesi yok ve panelde **4C** yazıyor. Ya da yıkama bitti ama taban su dolu, ekranda **5C** var. Samsung bulaşık makineleri arıza durumunu harf-rakam kodlarıyla bildirir ve bu kodların mantığı öğrenilince oldukça okunaklıdır: 4'lü kodlar su girişini, 5'liler tahliyeyi, LC kaçağı, HE ısıtmayı anlatır. Bu yazıda en yaygın dört kodu tek tek açıyoruz — en geniş yeri, en çok görülen 4C alıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ℹ️ Samsung aynı durumu model kuşağına göre farklı harflerle gösterebilir: 4C ile 4E, 5C ile 5E, LC ile LE aynı anlama gelir. Ekranda hangisini görürsen gör, aşağıdaki karşılıklar geçerlidir; yine de kendi modelinin kılavuzuyla teyit etmek en sağlamıdır.

## Adım adım: 4C ve 5C için evde denenecekler

**1. Kodu aynen not al.** 4C ile 4E, 5C ile 5E, LC ile LE aynı anlama gelir; ekranda hangisi varsa onu yaz.

**2. Makineyi kapat ve fişini çek.** Ekranda **LC / LE** varsa musluğu da kapat ve makineyi kurumaya bırak.

**3. Musluğu ve şebekeyi kontrol et.** Eviyenin altındaki makine musluğu tam açık mı? Evde su var mı — başka bir musluğu açıp bak.

**4. Giriş hortumuna bak.** Dolabın arkasında bükülmüş, ezilmiş ya da kıvrılmış olmasın; rahatlat ve düzelt.

**5. Giriş filtresini temizle.** **Musluğu kapat**, giriş hortumunu makine tarafından elinle sök (altına havlu ser) ve girişteki küçük süzgeci akan suda küçük bir fırçayla temizle.

**6. İç filtreyi temizle.** Alt sepeti çıkar, tabandaki filtreyi sök, yemek artıklarını temizle ve yerine sıkıca tak; tabandaki su ılık olabilir, elini yavaş daldır.

**7. Tahliye hortumunu ve gideri kontrol et.** Hortumda bükülme var mı, gider bağlantısı tıkalı mı bak; eviye gideri de yavaş akıyorsa sorun makinede değil giderde olabilir.

**8. Hortumu tak, musluğu aç ve kısa bir programla dene.** Bağlantıdan damlama olmadığını kontrol et, fişi tak ve dene; kod tekrar geliyorsa valf, pompa ve rezistans tarafı servis işidir.

## 4C — su temini hatası (en yaygın kod)

**4C**, makinenin ihtiyacı olan suya ulaşamadığını söyler: su hiç gelmiyor, yavaş geliyor ya da basınç yetersiz. Program başlamaz ya da başladıktan kısa süre sonra durur. Bu kodun güzel tarafı şu: sebeplerin büyük kısmı makinenin dışındadır ve evde bulunur.

**Kendin kontrol et — sırayla:**

1. **Musluk:** Eviyenin altındaki makine musluğu tam açık mı? Temizlik ya da tadilat sonrası kısılmış olabilir.
2. **Şebeke:** Evde su var mı? Mahalle kesintisi 4C'nin en masum sebebidir; başka bir musluğu açıp bak.
3. **Hortum:** Su giriş hortumu dolabın arkasında bükülmüş, ezilmiş ya da kıvrılmış mı? Rahatlat ve düzelt.
4. **Giriş filtresi:** Musluğu kapat, giriş hortumunu makine tarafından elinle sök (altına havlu ser) ve girişteki küçük süzgeci akan suda küçük bir fırçayla temizle. Kireçli bölgelerde bu süzgeç zamanla tıkanır ve suyu kısar.
5. **Reset:** Hortumu geri tak, musluğu aç, makineyi kapatıp birkaç dakika fişten çek ve yeniden dene.

Beş adım da temiz çıktıysa ve 4C sürüyorsa, şüphe makinenin **su giriş valfine** kayar: valf açılma komutunu alamıyor ya da yerine getiremiyor olabilir. Valf gövde içindedir; ölçümü ve değişimi **servis işidir**.

⚠️ Hortumu sökerken musluk mutlaka kapalı olsun; bağlantılar el gücüyle çözülecek şekilde tasarlanmıştır, alet kullanma.

## 5C — tahliye hatası

**5C**, makinenin kirli suyu boşaltamadığını gösterir. Program sonunda tabanda su kalır, makine tahliye denemesi yaparken uğultu duyulabilir.

**Kendin kontrol et:** Önce iç filtre: alt sepeti çıkar, tabandaki filtreyi sök, yemek artıklarını temizle ve yerine sıkıca tak. Sonra tahliye hortumu: bükülme var mı, gider bağlantısı (sifon ağzı) tıkalı mı? Gideri kontrol etmenin pratik yolu, eviye giderinin de yavaş akıp akmadığına bakmaktır — sorun makinede değil giderde olabilir. Bunlar temizken 5C sürüyorsa tahliye pompası tarafına servisin bakması gerekir.

⚠️ Filtre kontrolünden önce makineyi kapat; tabandaki su ılık olabilir, elini yavaş daldır.

## LC / LE — kaçak algılandı

**LC** (bazı modellerde **LE**), makinenin alt bölümündeki kaçak sensörünün nem ya da su algıladığını gösterir. Makine bu durumda güvenlik gereği kendini tahliye etmeye çalışır ve programı durdurur. Zeminde su görünmese bile kod ciddiye alınmalıdır: az miktarda sızıntı yalnızca makinenin alt tavasında birikmiş olabilir.

**Kendin kontrol et:** Makineyi kapat, **fişini çek ve musluğu kapat**. Yakın zamanda makine taşındıysa, hortum bağlantıları söküldüyse ya da aşırı köpük yapan bir deterjan kullanıldıysa bunu not et — bu durumlar sensörü tetikleyebilir. Makineyi kurumaya bırak ve sonra bir kez dene. Kod tekrar geliyorsa içeride aktif bir sızıntı vardır; kaynağını (conta, hortum, bağlantı) bulmak **servis işidir**.

⛔ Kaçak kodunda makineyi tekrar tekrar çalıştırmaya zorlama: sızıntı sürerken çalışan makine hem zemine hem kendi elektroniğine zarar verebilir.

## HE — ısıtıcı hatası

**HE**, ısıtma devresinde bir sorun olduğunu gösterir: su hedef sıcaklığa getirilemiyordur.

⚠️ Burada dürüst olmak gerekiyor: **Samsung'un bölge sayfaları bu kodda kendi içinde çelişiyor.** Bir sayfa HE'yi doğrudan ısıtıcı elemana bağlarken, bir diğeri "sıcaklığın yanlış ölçülmesi" diyor ve aşırı ısınmayı ayrı bir koda (HC) veriyor. Bu yüzden HE'ye bakarak "rezistans bozuldu" demiyoruz — söylenebilecek kesin şey, sorunun ısıtma devresinde olduğudur. Belirtisi sessizdir — makine çalışır ama bulaşıklar soğuk yıkanır, yağ çözülmez, kurutma zayıflar.

**Kendin kontrol et:** Bir kez resetleyip normal bir programla dene; kod geçici bir okumadan gelmiş olabilir. Tekrar geliyorsa gözlemini not et (buhar yok, bulaşık soğuk) ve orada dur: rezistans ve sensör gövde içindedir, **onarımı servis işidir**.

## Kodların özeti

| Kod | Anlamı | Kendin bakılır mı |
|---|---|---|
| 4C / 4E | Su temini | ✅ Musluk, kesinti, hortum, giriş filtresi |
| 5C / 5E | Tahliye | ✅ İç filtre, tahliye hortumu, gider |
| LC / LE | Kaçak algılandı | ⚠️ Fişi ve musluğu kapat, kurut; tekrarlarsa servis |
| HE | Isıtma devresi (parça koda göre belirlenemez) | ⛔ Reset dene, sürerse servis |

## Hangi noktadan sonra servis işi

Musluk, hortumlar, giriş süzgeci, iç filtre ve gider — bunların hepsi kapak ve bağlantı seviyesindedir, senin alanındır. Su giriş valfi, tahliye pompası, kaçak kaynağı, rezistans ve elektronik ise gövdenin içindedir; hem elektrik hem su barındırır ve ölçü aleti ister. Evdeki kontrollerden sonra aynı kod ikinci-üçüncü kez geliyorsa artık deneme yapma: kodu, ne zaman geldiğini ve gözlemlerini not et — bu kısa not, servisin doğru parçayla gelmesini sağlar.

Diğer markaların kod listeleri için bulaşık makinesi hata kodları rehberimize bakabilirsin. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
