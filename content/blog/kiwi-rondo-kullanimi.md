---
title: "Kiwi rondo kullanımı: KC-8215 ve KC-8209 doğrayıcı"
description: "Kiwi KC-8215 rondo ve KC-8209 doğrayıcı kılavuzuna göre bıçak ve kapak takma, iki hız, 15 saniye kuralı, aşırı yük ve temizlik; şarjlı KC-8232 notu."
slug: "kiwi-rondo-kullanimi"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ yazı alt ajanı (YK #182 Dalga 7, küme Y2, çatal B). Konu: origin/main 26ffd7d'de slug grep'i "rondo" boş, başlık grep'i "rondo" boş.
#   origin/main'deki kiwi-sarjli-dograyici-kullanimi yalnız şarjlı KC-8202/8203/8204'ü işliyor; provenansında "KC-8209 kablolu doğrayıcı (şarjsız) kapsam dışı bırakıldı; KC-8232 indirilmedi" yazıyor. Bu yazı o boşluğu kapatıyor, aynı modelleri işlemiyor.
# GSC: Sorgular.csv (www-2..7) içinde "kiwi", "rondo", "doğrayıcı" satırı YOK.
# Arama kanıtı (#164, bu koşuda suggestqueries.google.com, hl=tr gl=tr): "kiwi rondo" → 1. kendisi · 2. …fiyatları · 3. …a101 · 4. …şarjlı · 5. …yedek parça · 6. …doğrayıcı;
#   "kiwi kc 8209" → 1. …doğrayıcı · 2. kiwi kc 8209 doğrayıcı rondo 500ml · 6. …doğrayıcı bıçağı.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf; ürün sayfaları 200. #88: yalnız üretici belgesi.
#  (A) KC-8215 Rondo, A2 föy 2 s., md5 4a4ade176d5420755dcef10a43b8ee73 (TR sütunu s.2)
#  (B) KC-8209 Doğrayıcı, 12 s., md5 9e18af7ac7f4068e8f41aaca44255ac6 (TR s.6-7, garanti s.10)
#  (C) KC-8232 2'si 1 Arada Şarjlı Mikser ve Doğrayıcı, 12 s., md5 7c6482311682d76ea6240f23dd4ddc00 (TR s.6-7, garanti s.10)
# A ve B'nin Türkçe kullanım ve temizlik metni güç değeri dışında aynı (250W / 350W max).
# BİLEREK YAZILMAYANLAR: bıçak bileme ya da değişimi · motor/kömür teşhisi · pil sökümü (KC-8232: "Pili asla kendiniz söküp takmaya çalışmayın") · kase hacmi (A ve B kılavuzunda yok) · tarif · fiyat (#46).
# Alıntı denetim tablosu: kiwi-rondo-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Nemli bez", "Sabunlu su", "Bıçak ve kesme tahtası"]
steps:
  - "Cihazı kutudan çıkar, etiket ve folyoları sök, parçaları nemli bezle sil ve prizin voltajını kontrol et."
  - "Doğrama bıçağını kasenin eksenine oturt ve yiyeceği kaseye ekle."
  - "Büyük yiyecekleri önceden küçük parçalara böl; kahve çekirdeği ve sert kabuklu yiyecek koyma."
  - "Kapağı, yuvaları kasenin kenarına oturacak şekilde yerleştir; kapak doğru takılmazsa cihaz çalışmaz."
  - "Motor ünitesini kapağın üstüne koy, fişi tak ve düşük ya da yüksek hız düğmesine kısa kısa bas."
  - "Bir seferde en fazla 15 saniye çalıştır, her çalışmadan sonra 1 dakika soğumaya bırak; aşırı yükte bir kısmını çıkar."
  - "Fişi çek, motor ünitesini ve kapağı kaldır, bıçağı dikkatle çıkar; parçaları sabunlu suda elde yıka."
faq:
  - q: "Kiwi rondo çalışmıyor, düğmeye basınca dönmüyor. Neden?"
    a: "KC-8215 ve KC-8209 kılavuzlarına göre kapak doğru konuma takılmadıkça cihaz çalışmaz. Kapağın yuvalarının kasenin kenarına oturduğundan ve motor ünitesinin kapağın üstünde olduğundan emin ol. Buna rağmen çalışmıyorsa kılavuz güç kaynağını kapatıp yetkili servise başvurmanı istiyor."
  - q: "Rondo ne kadar süre aralıksız çalıştırılabilir?"
    a: "Doğrayıcıyı sürekli olarak 15 saniyeden fazla çalıştırmayın; her 15 saniyelik çalışma arasında 1 dakika soğumaya bırakın. Bu iki kablolu modelde (KC-8215 ve KC-8209) aynı."
  - q: "Rondoda buz ya da kahve çekirdeği çekilir mi?"
    a: "Kahve çekirdeği için hayır. Kılavuz kahve çekirdeği gibi çok sert yiyeceklerin ve sert kabuklu yiyeceklerin kesilmemesini, aksi halde bıçaklara zarar verileceğini yazıyor. Buz için ayrı bir cümle yok; sert yiyecek uyarısı gereği koymamak en güvenlisi (çıkarım)."
  - q: "Kiwi rondo parçaları bulaşık makinesine girer mi?"
    a: "Hayır. Üç kılavuz da gıda ile temas eden bileşenlerin sabunlu suyla temizlenebileceğini, bulaşık makinesinde yıkanmaya uygun olmadığını yazıyor. Motor ünitesi suya batırılmaz, nemli bezle silinir."
  - q: "Şarjlı Kiwi rondo hangisi, nasıl şarj edilir?"
    a: "Doğrayıcı ailesinde şarjlı ve mikserli model KC-8232. Kılavuza göre şarj sırasında ışıklar yanıp söner, tam dolunca bütün ışıklar sabit yanar; şarj 3-4 saat sürer. Bütün ışıklar yanıp sönüyorsa pil zayıftır, cihazı yeniden şarj et."
images:
  coverAlt: "Mutfak tezgâhında şeffaf kaseli küçük bir rondo, kasede doğranmış soğan ve maydanoz"
  steps:
    - "Kutudan çıkarılmış rondo parçaları tezgâhta yan yana: motor ünitesi, kapak, bıçak ve kase"
    - "Şeffaf kasenin ortasındaki eksene oturtulmuş doğrama bıçağı"
    - "Kesme tahtasında küçük küpler halinde doğranmış soğan ve havuç"
    - "Kasenin kenarına oturmuş kapak, yakından"
    - "Kapağın üstüne yerleştirilmiş motor ünitesi ve üstündeki iki hız düğmesi"
    - "Kasede ince doğranmış sebzeler ve yanında duran rondo"
    - "Lavaboda sabunlu suyla yıkanan şeffaf kase ve kapak"
---

"Rondo" mutfakta küçük, kaseli elektrikli doğrayıcının yerleşik adı. Kiwi'de bu iş için iki kablolu model var: adı da "Rondo" olan KC-8215 ve "Doğrayıcı" diye satılan KC-8209. İkisinin Türkçe kılavuz metni güç değeri dışında aynı, kullanım sırası da tek: bıçak, yiyecek, kapak, motor. Kılavuzun en çok gözden kaçan cümlesi şu: **"Kapak doğru konuma takılmadıkça cihaz çalışmayacaktır."** Şarjlı mikser ve doğrayıcı KC-8232 için ayrı bir bölüm aşağıda.

> ⚡ **Kısa özet:** Bıçağı kase eksenine oturt, yiyeceği küçük parçalara bölüp ekle, kapağı yuvaları kasenin kenarına oturacak şekilde tak, motor ünitesini üstüne koy. Kısa basışlarla doğra; püre ve sos için yüksek hız. Bir çalışma en fazla 15 saniye, arada 1 dakika soğuma. Parçalar elde, sabunlu suyla yıkanır; bulaşık makinesine girmez.

## Modeller ve kılavuzdaki değerler

| | KC-8215 | KC-8209 | KC-8232 |
|---|---|---|---|
| Ürün adı | Rondo | Doğrayıcı | 2'si 1 Arada Şarjlı Mikser ve Doğrayıcı |
| Besleme | AC220-240V, 250W max | AC220-240V, 350W max | Li-ion 1500 mAh pil, giriş 5V 1A |
| Hız | Düşük ve yüksek hız | Düşük ve yüksek hız | Hızlı, orta, düşük |
| Sürekli çalışma | En fazla 15 saniye | En fazla 15 saniye | 10 dakikadan uzun değil |
| Parçalar | Motor ünitesi, kapak, doğrama bıçağı, kase | Aynı | Doğrayıcı kase, çırpma çubuğu, yumurta sarısı ayırıcı, USB kablosu |

Kablolu iki modelde motor ünitesinin üstünde iki ayrı düğme var: düşük hız ve yüksek hız.

## Adım adım: kurulum, doğrama, temizlik

**1. İlk kullanımdan önce hazırla.** Cihazı ve aksesuarları kutusundan çıkar, etiketleri, koruyucu folyoyu ve plastiği sök. İlk kullanımdan önce çıkarılabilir bütün parçaları nemli bir bezle sil; aşındırıcı ürün kullanma. Bağlamadan önce cihaz üzerinde yazan voltajın yerel voltajla aynı olduğundan emin ol; kılavuzdaki değer 220V-240V 50/60Hz. Cihazı sabit, düz bir yüzeye koy.

**2. Bıçağı eksene oturt.** Doğrama bıçağını kasenin eksenine oturt ve yiyeceği ekle. Kılavuz bıçakların çok keskin olduğunu, boşaltırken ve temizlerken bıçağa temas edilmemesini, aksi halde ciddi yaralanma olabileceğini yazıyor.

**3. Yiyeceği küçük parçalara böl.** Büyük yiyecek parçalarını 1-2 cm olacak şekilde kes. Kahve çekirdeği gibi çok sert yiyecekleri ve sert kabuklu yiyecekleri koyma; kılavuza göre bıçaklara zarar verir.

**4. Kapağı tam oturt.** Kapağı, yuvalarının kasenin kenarına oturduğundan emin olarak kasenin üstüne yerleştir. Kapak doğru konuma takılmadıkça cihaz çalışmaz. "Rondo çalışmıyor" şikâyetinde ilk bakılacak yer burası.

**5. Motoru üstüne koy ve kısa kısa çalıştır.** Güç ünitesini üst tarafa, kapağın üstüne koy ve fişi prize tak. Kılavuz, malzemelerin aşırı işlenmesini önleyen bir darbe hareketi için güç ünitesini kısa sürelerle aşağı bastırmanı istiyor. Püre ya da sos yapmak için yüksek hız düğmesini kullan.

**6. Süreye ve yüke dikkat et.** Doğrayıcıyı sürekli olarak 15 saniyeden fazla çalıştırma. Her 15 saniyelik çalışmanın arasında 1 dakika soğumaya bırak. Cihaz aşırı yüklenmişse karışımın bir kısmını çıkar ve işi birkaç parti halinde sürdür.

**7. Fişi çek, sök ve temizle.** Kullandıktan sonra önce fişi çek, sonra sök: motor ünitesini kaldır, kapağı çıkar, yiyeceği boşalt. Bıçakları çıkarırken dikkatli ol. Motor ünitesini nemli bezle sil; kase, kapak ve bıçağı sabunlu suda yıka.

## Temizlikte dikkat

- Temizlemeden önce fişi mutlaka prizden çek. Aksesuar değiştirmeden ya da hareketli parçaya yaklaşmadan önce de cihazı kapatıp güçten ayır.
- Elektrikli motor ünitesini asla suya ya da başka bir sıvıya daldırma.
- Bileşenler bulaşık makinesinde yıkanmaya uygun değil.
- Gıda ile doğrudan temas ettiği için kılavuz cihazın her zaman temiz tutulmasının kesinlikle gerekli olduğunu yazıyor.
- Cihazı kablosundan çekerek taşıma; kablonun dolaşmamasına dikkat et.
- Cihazı sobadan ve diğer ısı kaynaklarından uzak tut; ısı plastik ve metal parçaları deforme edebilir.

## Şarjlı model: KC-8232

KC-8232 hem doğrayıcı hem çırpıcı olarak çalışır. Şarj kablosunu cihazın soketine, adaptörü (ya da bir telefon şarj adaptörünü) kablonun diğer ucuna tak ve prize bağla. Işıklar yanıp sönüyorsa şarj oluyor; tam dolunca bütün ışıklar yanık kalır. Şarj 3-4 saat sürer, bu sırada cihaz kullanılmaz. Bütün ışıklar yanıp sönerken çalışmıyorsa pil düşüktür.

ON/OFF düğmesine bir kez basınca hızlı modda çalışır. Tekrar basınca orta, bir daha basınca düşük hıza geçer, bir kez daha basınca durur. Doğrama bıçağını kasedeki merkezleme şaftına tak, yiyeceği maksimum çizgisinin altında tut. Kılavuz cihazı 10 dakikadan uzun süre sürekli çalıştırmamanı, sonra 2 dakika soğutmanı istiyor. Pili kendin sökmeye çalışma.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Düğmeye basınca çalışmıyor | Önce senin: kapak yuvalara oturdu mu, motor ünitesi üstte mi |
| Bıçak zorlanıyor, motor yavaşladı | Senin; yükü azalt, parti parti çalış, 1 dakika soğut |
| Besleme kablosu hasarlı | Kullanma; üretici, servis ya da benzer nitelikli kişi değiştirir |
| Cihaz düzgün çalışmıyor | Gücü kapat; yetkili servis |

⛔ Motor ünitesini açma. Kılavuz cihazın tamiri ve kablo değişimi için yetkili servisi gösteriyor.

Kiwi'nin küçük şarjlı doğrayıcıları (KC-8202, KC-8203, KC-8204) için [Kiwi şarjlı doğrayıcı kullanımı](/blog/kiwi-sarjli-dograyici-kullanimi/), el blenderinin doğrayıcı haznesi için [Kiwi el blenderi nasıl sökülür](/blog/kiwi-el-blenderi-nasil-sokulur/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Parça adları, güç değerleri, takma sırası, çalışma süreleri, şarj talimatı ve temizlik kuralları Kiwi'nin Türkçe KC-8215 Rondo, KC-8209 Doğrayıcı ve KC-8232 Şarjlı Mikser ve Doğrayıcı kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
