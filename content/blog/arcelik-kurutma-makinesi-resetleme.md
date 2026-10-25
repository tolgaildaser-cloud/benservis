---
title: "Arçelik kurutma makinesi resetleme nasıl yapılır"
description: "Arçelik kurutma makinesinde reset, kılavuzdaki adıyla programın iptali: tuşa 3 saniye ya da düğmeyi çevirmek. Çocuk kilidi, sıcak çamaşır ve servis."
slug: "arcelik-kurutma-makinesi-resetleme"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de arcelik-kurutma-makinesi-resetleme yok, repoda "reset" geçen slug yok;
#   Arçelik kurutmada calismiyor / kurutmuyor / hata-kodlari / sembolleri var, resetlemeye ayrılmış sayfa yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "arçelik kurutma makinesi r" → 1. "arçelik kurutma makinesi resetleme";
#   "arçelik kurutma makinesi resetleme" → "…nasıl yapılır", "arçelik 2772 kurutma makinesi resetleme", "arçelik çamaşır kurutma makinesi resetleme nasıl yapılır".
#   GSC (https___www-5/6): bu sorguda satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) 3886 KT / KTS / KTR  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180102154833_User%20Manual%20-%20Filetr_TR.pdf  36 s.  md5 62fe5d46146e92058583492074c9d509
#  (B) 2772 KT / KTS / KTİ  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201801031501235_User%20Manual%20-%20Filetr_TR.pdf  32 s.  md5 af5f6e8ada2c00d238838e438d29edb3
# Su tankı uyarısı / çocuk kilidi A s.24-25 · program değiştirme, iptal A s.25 · çocuk kilidi, iptal B s.23-24 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · hata kodu silme hilesi · ısıtıcı/kart teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: arcelik-kurutma-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda kilit simgesi ya da CL görünüyorsa önce çocuk kilidini kapat."
  - "Su tankı uyarısı yanıp sönüyorsa makine bu yüzden beklemeye geçmiştir; tankı boşaltıp Başla / Bekle ile devam et."
  - "Programı iptal etmek için iptal tuşuna yaklaşık 3 saniye bas ya da Başla / Bekle ile durdurup program düğmesini çevir."
  - "İptalden sonra içerideki çamaşır sıcaktır; kılavuzdaki Tazeleme ya da havalandırma programıyla soğut."
  - "Yeni programı seç ve Başla / Bekle ile başlat."
  - "İptal ve kontrollerden sonra da program başlamıyor ya da bir uyarı tekrar ediyorsa Arçelik yetkili servisine haber ver."
faq:
  - q: "Arçelik kurutma makinesinde reset tuşu var mı?"
    a: "Arçelik'in 3886 KT ve 2772 KT kılavuzlarında Reset adında bir tuş yok. Karşılığı Programın iptal edilmesi bölümü. 3886 KT'de Açma / Kapama / İptal düğmesine 3 saniye basılarak, 2772 KT'de Başla / Bekle / İptal tuşuna yaklaşık 3 saniye basılarak program iptal edilir."
  - q: "Arçelik 2772 kurutma makinesi resetleme nasıl yapılır?"
    a: "2772 KT kılavuzuna göre Başla / Bekle / İptal tuşuna yaklaşık 3 saniye bas. Bu süre sonunda hatırlatma için Filtre temizleme, Su tankı ve Son / Kırışık önleme ışıkları yanar. Makine çalışırken program seçme anahtarını herhangi bir yöne çevirmek de programı sonlandırır; bu yolda uyarı ışıkları yanmaz, yalnız kurutma ışığı yanar ve yeni program beklenir."
  - q: "Arçelik kurutma makinesi resetleme yapmıyor, neden?"
    a: "Çocuk kilidi açık olabilir. 2772 KT kılavuzuna göre iki iptal yolunun da çalışması için çocuk kilidinin aktif olmaması gerekir. 3886 KT'de kilit açıkken Açma / Kapama / İptal ve çocuk kilidi düğmesi dışındaki tüm düğmeler devre dışıdır; düğme çevrilince ekranda CL uyarısı görülür."
  - q: "İptal ettikten sonra çamaşırlar çok sıcak, ne yapmalıyım?"
    a: "Kılavuzların uyarısı bu: makine çalışırken programı iptal ettiğinde içindeki çamaşırlar aşırı sıcak olur. 3886 KT Tazeleme programını, 2772 KT havalandırma programını çalıştırarak soğumalarını sağlamanı söylüyor. Tambur yüzeyine ve içindeki sıcak havaya temas etme."
  - q: "Su tankı uyarısı yanıyor, resetlemek gerekir mi?"
    a: "Hayır. 3886 KT kılavuzuna göre program sürerken su tankı dolarsa uyarı sembolü yanıp söner ve makine beklemeye geçer. Tanktaki suyu boşaltıp Başla / Bekle düğmesine basarsan uyarı söner ve program kaldığı yerden devam eder."
images:
  coverAlt: "Çamaşır makinesinin üstüne yerleştirilmiş beyaz bir kurutma makinesi"
  steps:
    - "Çizim: solda kurutma makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda kurutma makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda telefon ve kullanım kılavuzu"
---

Kurutma programı yarıda kaldı, yanlış programı seçtin ya da makine tuşlara tepki vermiyor; Arçelik kurutma makinesini "resetlemek" istiyorsun. Arçelik'in kurutma makinesi kılavuzlarında **Reset adında bir tuş yok.** Karşılığı **"Programın iptal edilmesi"** bölümü. Bu yazıda Arçelik'in 3886 KT ve 2772 KT kullanma kılavuzlarından sıfırlamanın iki yolunu, onu engelleyen çocuk kilidini ve iptalden sonra unutulmaması gereken sıcak çamaşır uyarısını çıkardık. Düğme adları iki modelde farklı; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çocuk kilidi açıkken iptal çalışmaz; önce kilidi kapat. Su tankı uyarısıysa tankı boşaltıp devam et, sıfırlamaya gerek yok. İptal için 3886 KT'de Açma / Kapama / İptal'e, 2772 KT'de Başla / Bekle / İptal'e yaklaşık 3 saniye bas. Sonra çamaşırı Tazeleme ya da havalandırma ile soğut. Olmuyorsa Arçelik yetkili servisi.

## İki modelde sıfırlama

| | 3886 KT | 2772 KT |
|---|---|---|
| **3 saniyelik yol** | Açma / Kapama / İptal düğmesi | Başla / Bekle / İptal tuşu |
| **Düğme yolu** | Başla / Bekle'ye 1 saniye bas, program düğmesini çevir | Çalışırken program seçme anahtarını çevir |
| **Çocuk kilidi** | Çocuk Kilidi düğmesi, 3 saniye; ekranda kilit simgesi, CL | Başla / Bekle / İptal + Sesli uyarı iptal, 3 saniye |
| **İptal sonrası** | Tazeleme programı | Havalandırma programı |

## Adım adım: Arçelik kurutma makinesini sıfırlama

**1. Çocuk kilidini kapat.** 2772 KT kılavuzunun notu açık: iki iptal yolunun da yapılabilmesi için **çocuk kilidi özelliğinin aktif olmaması gerekir;** kilit aktifse önce kilit iptal edilmelidir. Bu modelde kilit **Başla / Bekle / İptal ve Sesli uyarı iptal tuşlarına aynı anda 3 saniye** basılarak açılıp kapanır; kapanırken tek bip sesi duyulur. 3886 KT'de **Çocuk Kilidi düğmesine 3 saniye** basılır; kilit açıkken ekranda kilit sembolü yanar, **Açma / Kapama / İptal ve çocuk kilidi düğmesi dışındaki tüm düğmeler devre dışı kalır,** program düğmesi çevrilince ekranda **CL** uyarısı görülür. İki kılavuza göre makine Açma / Kapama ile kapatılıp yeniden açıldığında da çocuk kilidi devreden çıkar.

**2. Su tankı uyarısıysa sıfırlama gerekmez.** 3886 KT kılavuzuna göre program sürerken **su tankı dolarsa uyarı sembolü yanıp söner ve kurutma makinesi beklemeye geçer.** Bu durumda tanktaki suyu boşaltıp **Başla / Bekle** düğmesine basman yeterli; uyarı söner ve program **kaldığı yerden devam eder.** Bu belirti çoğu zaman "makine takıldı" diye okunuyor. Ayrıntı [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) yazısında.

**3. Programı iptal et.** 3886 KT'de iki yol var: **Başla / Bekle düğmesine 1 saniye basarak** programı bekleme moduna alıp program düğmesini çevirmek, ya da **Açma / Kapama / İptal düğmesine 3 saniye** basmak. Bekleme durumunda program seçme düğmesiyle yeni bir program seçilirse **çalışan program sonlanır** ve yeni programın bilgileri ekranda görülür. 2772 KT'de **Başla / Bekle / İptal tuşuna yaklaşık 3 saniye** basılır; süre sonunda hatırlatma için **Filtre temizleme, Su tankı ve Son / Kırışık önleme** ışıkları yanar. Makine çalışırken **program seçme anahtarını herhangi bir yöne çevirmek** de programı sonlandırır; bu yolda uyarı ışıkları yanmaz, yalnız kurutma ışığı yanar ve yeni bir program seçilip başlatılması beklenir.

**4. Çamaşırı soğut.** İki kılavuzun da altını çizdiği uyarı: makine çalışırken programı iptal ettiğinde **içerideki çamaşırlar ve makinenin içi aşırı sıcak** olur. 3886 KT **Tazeleme programını,** 2772 KT **havalandırma programını** çalıştırarak soğumalarını sağlamanı söylüyor. 3886 KT'nin ayrı bir uyarısı da var: devam eden bir program sırasında çamaşır eklerken ya da çıkarırken **tamburun iç yüzeyine temas etme;** tambur yüzeyi ve içindeki kurutma havası sıcaktır.

**5. Yeni programı başlat.** Çamaşırın türüne uygun programı seç ve Başla / Bekle ile başlat. 2772 KT kılavuzuna göre kurutma başladıktan sonra çamaşır eklemek, kurumuş çamaşırların ıslaklarla karışmasına ve işlem sonunda **nemli çıkmasına** sebep olabilir; eklenecek çamaşırı program başlamadan koy.

**6. Olmuyorsa servis.** Kilit kapalı, tank boş, iptal yapıldı, program yine başlamıyor ya da aynı uyarı geri geliyorsa ev ayar turu bitmiştir; **Arçelik yetkili servisine** haber ver. Makine hiç tepki vermiyorsa önce [Arçelik kurutma makinesi çalışmıyor](/blog/arcelik-kurutma-makinesi-calismiyor/) yazısındaki kontrollere bak.

## Program bitince

3886 KT'ye göre program sona erdiğinde program takip göstergesindeki **Lif Filtresi Temizliği** ve **Su Tankı** uyarı sembolleri yanar; bu bir arıza değil, her kurutmadan sonra yapılacak bakımın hatırlatması. 2772 KT'de program bitince Son / Kırışık önleme, Filtre temizleme ve Su tankı ışığı yanar; kapak açılabilir ve makine ikinci çalışmaya hazırdır.

## Ne zaman servis

- Kilit kapalıyken de düğmeler tepki vermiyorsa
- Su tankı boşaltıldığı hâlde uyarı sönmüyorsa
- Ekranda bir hata kodu tekrar ediyorsa: liste [Arçelik kurutma makinesi hata kodları](/blog/arcelik-kurutma-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, çocuk kilidi, su tankı ve lif filtresi sende; gövdenin içi, ısıtma sistemi ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne?
2. Ekranda kilit simgesi, CL ya da bir kod var mı?
3. Su tankı ve lif filtresi temiz mi?
4. İptali hangi yolla denedin?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Çamaşır nemli çıkıyorsa [Arçelik kurutma makinesi kurutmuyor](/blog/arcelik-kurutma-makinesi-kurutmuyor/) yazısına bak. Bil, gör, çağır.
