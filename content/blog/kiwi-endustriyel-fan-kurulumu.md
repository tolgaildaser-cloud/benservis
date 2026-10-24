---
title: "Kiwi endüstriyel fan kurulumu: KFAN-7473 montajı"
description: "Kiwi KFAN-7473 endüstriyel fan kurulumu kılavuza göre: tabanı boruya vidala, yüksekliği sabitle, arka ızgara, kanat ve ön ızgarayı tak, hızı sıfırdan aç."
slug: "kiwi-endustriyel-fan-kurulumu"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X5, çatal D). origin/main 7481159'da "endüstriyel fan", "kfan", "7473" geçen slug ya da başlık yok;
#   kiwi-vantilator-kurulumu KFAN-7417L/7421/7426/7691/7692'yi kapsıyor, KFAN-7473'ü değil (grep boş). O yazıya bağlantı verildi, modelleri tekrarlanmadı.
# OT (#164, bu koşu 24 Eki, suggestqueries hl=tr gl=tr, _kaynak/ot.tsv): "kiwi kfan 7473" → 2. "kiwi kfan 7473 kurulum";
#   "kiwi endüstriyel fan" → 2. "kiwi endüstriyel fan kurulumu"; "kfan 7473" → 4. "kfan 7473 kurulum". GSC: Sorgular.csv'lerde "kiwi"/"kfan" satırı yok.
# Belge zinciri (#88): https://kiwi.com.tr/tr/iklimlendirme-17-c/fanlar-35-c/kfan-7473-274-pt (HTTP 200, PDF dosya adı sayfa HTML'inde)
#   → https://static.kiwi.com.tr/media/media/1049/files/media_kfan-7473-im-tr_13082025022850_689c76f246851.pdf (HTTP 200 application/pdf)
#  (A) Kiwi KFAN-7473 Endüstriyel Fan kullanım kılavuzu, çok dilli, 28 s. md5 b4bfe625fff23f08ea00fd8fa771586e — TR s.20 (güvenlik), s.21 (parçalar, montaj, kullanım, temizlik), s.23 (güvenlik bilgileri)
# BİLEREK YAZILMAYANLAR: duvar braketiyle montaj adımları (parça listesinde var, tarifi yok) · masa üstü ayağının takılışı (tarifi yok) · salınım düğmesinin kullanımı (yalnız parça adı) · vida ölçüsü/alet tarifi · motor/kablo arızası teşhisi · fiyat (#46).
# Alıntı denetim tablosu: kiwi-endustriyel-fan-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Tornavida", "Yumuşak nemli bez", "Fanın kullanım kılavuzu"]
steps:
  - "Fanı ve parçalarını kutudan çıkar, parça listesine göre say, prizin voltajını etiketle karşılaştır."
  - "Fan tabanını vidayla boruya sabitle."
  - "Boruyu istediğin yüksekliğe getir ve yükseklik ayar somununu sık."
  - "Hız seçici koruma tutucusunu stand borusuna vidala."
  - "Arka ızgarayı motor gövdesine vidala, kanadı motor piminin üzerine yerleştirip sık."
  - "Ön ızgarayı arka ızgaranın üzerine oturt ve bağlantı elemanlarıyla kilitle."
  - "Hız düğmesini sıfıra al, fişi tak, birinci, ikinci ya da üçüncü hızı seç ve gövdeyi eğerek açıyı ayarla."
faq:
  - q: "Kiwi KFAN-7473 ızgarasız çalıştırılabilir mi?"
    a: "Hayır. Kiwi kılavuzu büyük harfle ön ve arka kapaklar olmadan fanın çalıştırılmamasını yazıyor. Cihazı ancak kurulum bitince açman, kısmen monte edilmiş hâlde çalıştırmaman da isteniyor."
  - q: "KFAN-7473 duvara asılabilir mi?"
    a: "Parça listesinde bir duvara montaj braketi ve bir masa üstü kullanım ayağı var. Ama kılavuzun montaj bölümü yalnız stand ayağıyla kurulumu anlatıyor; braketin duvara nasıl bağlanacağı yazmıyor. Duvar montajında emin değilsen Kiwi müşteri hizmetlerine ya da yetkili servise danış."
  - q: "Fanı açtım, kanatlar hemen dönmüyor; arıza mı?"
    a: "Kılavuza göre bir, iki ya da üç tuşuyla fanı açtıktan birkaç saniye sonra kanatlar seçilen kademenin en yüksek hızında dönmeye başlıyor. Kısa bir bekleme normal. Hiç dönmüyorsa fişi çek, güç kaynağını kapat ve yetkili servise başvur."
  - q: "Endüstriyel fanı dışarıda, balkonda kullanabilir miyim?"
    a: "Kiwi kılavuzu ürünün yalnız iç mekânda kullanılmasını, doğrudan güneş ışığı ve yağmur gibi koşullara bırakılmamasını ve nemli ortamda kullanılmamasını yazıyor."
images:
  coverAlt: "Geniş bir atölye köşesinde duran, metal ızgaralı büyük ayaklı bir fan"
  steps:
    - "Zeminde açılmış bir karton kutu ve yanına dizilmiş fan parçaları"
    - "Fan tabanına sabitlenmiş dikey stand borusu"
    - "Stand borusundaki yükseklik ayar somunu"
    - "Stand borusunun üst kısmına takılmış hız seçici bölümü"
    - "Motor gövdesine takılmış arka tel ızgara ve öne geçirilmiş metal kanat"
    - "Ön ve arka ızgarası birleşmiş, klipsleri kapalı fan başlığı"
    - "Kurulumu bitmiş, açısı hafifçe yukarı eğilmiş çalışan bir ayaklı fan"
---

Kiwi'nin **KFAN-7473** endüstriyel fanı kutudan parça parça çıkar: motor, taban ve boru, iki ızgara, kanat ve küçük bağlantı parçaları. Kurulum kılavuzda tek paragraf; ama sıra karışırsa ızgara yerine oturmuyor ya da kanat sallanıyor. Bu yazı Kiwi'nin KFAN-7473 için yayımladığı çok dilli kullanım kılavuzunun Türkçe bölümüne dayanıyor. Türkçe metinde kanat bir yerde "bıçak" diye geçiyor; ikisi aynı parça.

Kiwi'nin standlı ve soğuk buharlı küçük vantilatörlerini kuruyorsan [Kiwi vantilatör kurulumu](/blog/kiwi-vantilator-kurulumu/) yazısı o modelleri anlatıyor.

> ⚡ **Kısa özet:** Parçaları say, voltajı kontrol et. Tabanı boruya vidala, yüksekliği somunla sabitle. Hız seçici tutucuyu boruya, arka ızgarayı motora vidala; kanadı pime geçirip sık, ön ızgarayı kilitle. Hız düğmesi sıfırdayken fişi tak, sonra kademe seç. Izgarasız çalıştırma.

## Kutudan çıkanlar

Kılavuzun parça tanımlarına göre KFAN-7473'te şunlar var:

| No | Parça |
|---|---|
| 1 | Motor |
| 2 | Salınım düğmesi |
| 3 | Hız seçme düğmesi |
| 4 | Fiş kablosu |
| 5 | Stand ayağı |
| 6 | Duvara montaj braketi |
| 7 | Masa üstü kullanım ayağı |
| 8 | Vantilatör kanadı |
| 9 | Izgara koruması |

Teknik veriler: 220–240 V, 50/60 Hz, 52 W, kanat çapı 46 cm (18 inç). Listede duvar braketi ve masa üstü ayağı da yer alıyor, ama kılavuzun montaj bölümü yalnız stand ayağıyla kurulumu anlatıyor. Aşağıdaki adımlar o kurulum için.

## Adım adım: KFAN-7473'ü stand ayağıyla kurmak

**1. Parçaları çıkar ve kontrol et.** Fanı ve parçaları kutudan çıkar, yukarıdaki listeyle karşılaştır. Kiwi, cihazı satın aldığın yerden hasarsız ve eksiksiz teslim aldığından emin olmanı, aksesuar eksikliği ya da kırık varsa bunu hemen satıcıya bildirmeni istiyor. Açmadan önce evdeki şebeke voltajının cihazın etiketinde yazan değerle aynı olduğunu kontrol et.

**2. Tabanı boruya vidala.** Kılavuzun ilk montaj cümlesi bu: fan tabanını vidayı kullanarak boruya vidala. Tabanı düz bir zemine yatırıp boruyu dik tutarak çalışmak işini kolaylaştırır (çıkarım). Yalnız kutudan çıkan orijinal montaj parçalarını kullan; Kiwi bunu güvenlik maddesi olarak yazıyor.

**3. Yüksekliği ayarla ve sabitle.** Boruyu istediğin yüksekliğe getir, ardından fan yükseklik ayar somununu sık. Somun gevşek kalırsa fan çalışırken başlık aşağı kayabilir (çıkarım); bu yüzden son kez elinle sıkılığını dene.

**4. Hız seçici koruma tutucusunu tak.** Kılavuz bir sonraki adımda hız seçici koruma tutucusunun stand borusuna vidalanmasını istiyor. Hız seçme düğmesi ve fiş kablosu bu bölümün çevresinde; kabloyu boru boyunca sıkıştırmadan bırak.

**5. Arka ızgarayı ve kanadı tak.** Arka korumayı (arka ızgarayı) motor mahfazasına vidala. Sonra kanadı motor piminin üzerine yerleştir ve sık. Kanat pimde boşluklu duruyorsa ön ızgaraya geçme; önce yerine tam oturduğundan emin ol (çıkarım).

**6. Ön ızgarayı kilitle.** Ön fan kanadı korumasını arka korumanın üzerine yerleştir ve bağlantı elemanlarını kullanarak kilitle. Kiwi'nin uyarısı açık: ön ve arka kapaklar olmadan fanı çalıştırma. Cihazı da ancak kurulum bittikten sonra aç; kısmen monte edilmiş bir fan güvenli kullanımı garanti etmiyor.

**7. İlk çalıştırma ve açı.** Fanı perdelerden ve çalışırken içeri çekebileceği nesnelerden uzağa koy. Hız düğmesinin "0"da olduğundan emin ol, sonra fişi prize tak. Kontrol panelinden bir, iki ya da üç tuşuna bas; birkaç saniye sonra kanatlar seçtiğin kademenin en yüksek hızında dönmeye başlar. Fanın dikey açısını gövdeyi eğerek ayarlarsın.

## Yerini seçerken

Kiwi'nin güvenlik bölümü kurulum yerini doğrudan ilgilendiren maddeler içeriyor:

- Ürün yalnız iç mekânda kullanılır; doğrudan güneş ışığı ya da yağmur altında, nemli ortamda kullanılmaz.
- Fanı sıcak yüzeylerin, elektrikli fırın ya da gazlı ocak gibi aletlerin üzerine veya yakınına koyma; yanıcı maddelerin yakınında kullanma.
- Birden fazla cihazı tek prize bağlamak güvenlik nedeniyle uygun değil; uzatma kablosu da önerilmiyor.
- Kablo tezgâh kenarından sarkmasın, sıcak yüzeye değmesin. Fanın kapağına hiçbir nesne sokma.
- Ek koruma için güç devresine 30 mA'yı aşmayan bir kaçak akım cihazı takılması öneriliyor; bunun için profesyonel bir elektrikçiye başvur.

## Temizlik

Temizlikten önce fişi çek. Motor kısmının ya da düğmelerin ıslanmasına izin verme. Motor gövdesi, stand borusu ve taban az deterjanlı nemli bir bezle silinir. Deliklerdeki toz için ızgara ara sıra fırçayla silinip suyla durulanabilir, ardından iyice kurutulur. Kılavuz kanadın söküldükten sonra deterjanlı nemli bezle silinebileceğini de yazıyor; söküm sırası montajın tersi (çıkarım). Fanı kuru bir yerde sakla, kullanmadığında fişini çek.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Montaj, yükseklik, açı, temizlik | Senin, bu yazıdaki adımlar |
| Duvar braketiyle montaj | Kılavuzda tarif yok; Kiwi müşteri hizmetlerine sor |
| Fan düzgün çalışmıyor, düştü ya da hasar gördü | Kullanma; güç kaynağını kapat, yetkili servis |
| Güç kablosu hasarlı | Üretici ya da yetkili servis değiştirir |

⛔ Arızalı fanı kendin onarmaya çalışma; Kiwi bunun elektrik çarpmasına yol açabileceğini ve tüm onarımların yetkili servis uzmanlarınca yapılması gerektiğini yazıyor. Sıcak yaz günlerinde serinlemek için evaporatif bir cihaz kullanıyorsan [Kiwi hava soğutucu nasıl kullanılır](/blog/kiwi-hava-sogutucu-nasil-kullanilir/) yazısına da bakabilirsin.

---

**Kaynak künyesi.** Parça listesi, montaj, kullanım, temizlik ve güvenlik bilgileri Kiwi'nin KFAN-7473 Endüstriyel Fan kullanım kılavuzunun Türkçe bölümünden alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
