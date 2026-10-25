---
title: "Altus çamaşır makinesi resetleme nasıl yapılır"
description: "Altus çamaşır makinesinde reset, kılavuzdaki adıyla programı iptal etmek. Program düğmesi, Açma/Kapama, çocuk kilidi, kapak kilidi ve servis sınırı."
slug: "altus-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de altus-camasir-makinesi-resetleme yok, repoda "reset" geçen slug yok;
#   Altus çamaşırda yalnız altus-camasir-makinesi-iyi-durulamiyor var.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "altus çamaşır makinesi r" → 1. "altus çamaşır makinesi resetleme";
#   "altus çamaşır makinesi resetleme" → "…nasıl olur", "…nasıl yapılır", "arçelik altus çamaşır makinesi resetleme". GSC (https___www-5/6): satır yok.
# Belge: Altus'un kendi alan adındaki kullanma kılavuzu. Bu koşuda curl -sL -A "Mozilla/5.0" HTTP 403 döndü (sunucu bot engeli);
#   yerel kopya 30 Eyl sprint'inde aynı adresten HTTP 200 ile indirilmişti, md5 yayındaki altus-camasir-makinesi-iyi-durulamiyor provenansıyla aynı.
#  (A) AL CM 81050  https://www.altus.com.tr/content/dam/altus-rainbow-tr-aem/altus-rainbow-tr-aemProductCatalog/product-documents/457100031500-AL-CM-81050/tr-TR-457100031500-MDM2-USER-MANUAL-FILE-tr-TR.pdf
#      44 s.  md5 a62b93e9d38a9cdd63b1bcc8c749b41e  · yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-altus-regal-sprint/altus-cm-81050.pdf
# Çocuk kilidi s.28 · elektrik kesintisinde kapak, çamaşır ekleme, program değiştirme s.30 · iptal, program sonu s.31 · pompa filtresi/sorun giderme s.33 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · hata kodu silme hilesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: altus-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda çocuk kilidi simgesi varsa önce ilgili yardımcı fonksiyon düğmesine 3 saniye basarak kilidi kapat."
  - "Program seçim düğmesini başka bir programa çevir; çalışan program iptal olur."
  - "Modeline göre aynı işi Açma / Kapama tuşunu 3 saniye basılı tutup başka bir program seçerek de yapabilirsin."
  - "Kapak açılmıyorsa program seçim düğmesini Pompa+Sıkma programına getirip suyu tahliye et."
  - "Kapak kilidi simgesi kaybolana kadar bekle; su sıcakken kapağı zorlama."
  - "Yeni programı seç, gerekiyorsa deterjanı yeniden koy ve Başlat / Duraklat ile başlat."
  - "İptal yapıldığı hâlde program başlamıyorsa ya da aynı uyarı tekrar ediyorsa Altus yetkili servisine haber ver."
faq:
  - q: "Altus çamaşır makinesinde reset tuşu var mı?"
    a: "AL CM 81050 kılavuzunda Reset adında ayrı bir tuş yok. Karşılığı Programı İptal Etme bölümü: program seçim düğmesi başka bir programa çevrildiğinde ya da yine bu düğmeyle makine kapatılıp tekrar açıldığında program iptal olur."
  - q: "Altus çamaşır makinesi resetleme yapmıyor, neden?"
    a: "En sık sebep çocuk kilidi. Kılavuza göre çocuk kilidi devredeyken program seçim düğmesini çevirirsen program iptal edilmez; önce çocuk kilidinin iptal edilmesi gerekir. Kilit, ilgili yardımcı fonksiyon düğmesine 3 saniye basılarak kapanır; ekrandaki 3-2-1 geri sayımı bitince kilit simgesi kaybolur."
  - q: "Program başlamıyor, makine kendini mi korumaya aldı?"
    a: "Olabilir. Altus'un sorun giderme tablosuna göre şebeke voltajı ya da su basıncı gibi altyapı kaynaklı problemler yüzünden ürün kendini korumaya almış olabilir. Çözüm, ürün modeline bağlı olarak Program Seçim düğmesini çevirerek ya da Açma / Kapama tuşuna 3 saniye basılı tutarak başka bir program seçmek; bir önceki program iptal olur."
  - q: "Elektrik kesildi, kapak açılmıyor; ne yapmalıyım?"
    a: "Kılavuza göre elektrik kesintisinde pompa filtresi kapağı altındaki yükleme kapağı acil durum tutacağıyla kapak elle açılabilir. Önce cihazı kapatıp fişini çek ve su taşmasını önlemek için makinede su kalmadığından emin ol. Suyu boşaltırken su 90 °C'ye kadar sıcak olabilir; kılavuz filtre işini su soğuduktan sonra yapmanı istiyor."
  - q: "Ekran kapandı, makine kendini sıfırladı mı?"
    a: "Hayır. Kılavuza göre program tamamlandıktan sonra 10 dakika boyunca hiçbir düğmeye basılmazsa makine OFF moduna girer, ekran ve göstergeler kapanır. Herhangi bir tuşa basınca tamamlanan program adımları görüntülenir."
images:
  coverAlt: "Aydınlık bir banyoda beyaz, ön yüklemeli bir çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Program takıldı, makine tepki vermiyor ya da yanlış programı başlattın; "resetleme" burada akla gelen ilk çözüm. Altus'un AL CM 81050 kullanma kılavuzunda **Reset adında ayrı bir tuş yok.** Kılavuzdaki karşılığı **"Programı İptal Etme"** bölümü ve sorun giderme tablosundaki "program başlatılamıyor" satırı. Bu yazıda o kılavuzdan, programı doğru biçimde sıfırlamanın yolunu sırayla çıkardık. Kaynak tek bir modelin kılavuzu; senin makinende düğme yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çocuk kilidi açıkken düğme çevirmek programı iptal etmez; önce kilidi kapat. Sonra program seçim düğmesini başka bir programa çevir ya da modeline göre Açma / Kapama'ya 3 saniye basıp yeni program seç. Kapak açılmıyorsa Pompa+Sıkma. Olmuyorsa Altus yetkili servisi.

## Ekranda ve panelde ne görürsün

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Çocuk kilidi simgesi** | Kilit açık; düğme çevirmek programı iptal etmez | 🛠️ Önce kilidi kapat |
| **3-2-1 geri sayımı** | Kilit açılıyor ya da kapanıyor | ⏳ Geri sayım bitene kadar bas |
| **Kapak kilidi simgesi** | Su seviyesi ya da sıcaklık uygun değil | 🛠️ Pompa+Sıkma, bekle |
| **End** | Program tamamlandı | Kapağı aç |
| **Ekran tamamen kapalı** | Program bitti, 10 dakika tuşa basılmadı | Herhangi bir tuşa bas |

## Adım adım: Altus çamaşır makinesini sıfırlama

**1. Çocuk kilidini kapat.** Sıfırlama denemelerinin en sık takıldığı yer burası. Altus kılavuzunun notu açık: **çocuk kilidi devredeyken program seçim düğmesini çevirirsen program iptal edilmez; öncelikle çocuk kilidinin iptal edilmesi gerekir.** Kilit, **ilgili yardımcı fonksiyon düğmesine 3 saniye basılı tutularak** açılıp kapanır; ekrandaki "3-2-1" geri sayımı bitince simge belirir ya da kaybolur. Kilit açıkken düğmelere basılırsa makine sesli uyarı verir; kılavuza göre düğmelere arka arkaya beş kez basılırsa bu sesli uyarı iptal olur.

**2. Program düğmesini çevir.** Kılavuzun "Programı İptal Etme" bölümüne göre **program seçim düğmesi başka bir programa çevrildiğinde ya da yine bu düğme kullanılarak makine kapatılıp tekrar açıldığında program iptal olur.** Çocuk kilidi kapalıyken çalışan program da değiştirilebilir; bu işlem mevcut programı iptal eder ve **seçilen program baştan başlar.**

**3. Ya da Açma / Kapama ile.** Sorun giderme tablosundaki satır: program başlatılamıyor ya da program seçimi yapılamıyorsa şebeke voltajı, su basıncı gibi **altyapı kaynaklı problemler yüzünden ürün kendini korumaya almış** olabilir. Çözüm, ürün modeline bağlı olarak **Program Seçim düğmesini çevirerek ya da Açma / Kapama tuşuna 3 saniye basılı tutarak başka bir program seçmek**; bir önceki program iptal olur.

**4. Kapak açılmıyorsa suyu boşalt.** Kılavuza göre makinenin içindeki **su sıcaklığı yüksekse ya da su seviyesi kapak hattının üzerindeyse yükleme kapağı açılmaz.** Programı iptal ettikten sonra kapağı açamıyorsan **program seçim düğmesini Pompa+Sıkma programına getirip** makinedeki suyu tahliye et.

**5. Kapak kilidini bekle.** Program sürerken Başlat / Duraklat'a bastığında su seviyesi uygunsa kapak kilidi devre dışı kalır ve ekrandaki kapak kilidi simgesi kaybolur. Kılavuzun güvenlik notu: içerideki **su sıcaklığı 50 °C'nin üzerindeyse** su seviyesi uygun olsa bile kapak kilidi devre dışı bırakılamaz. Bu aşamada kapağı zorlama.

**6. Yeni programı başlat.** Programı, sıcaklığı ve devri seç, **Başlat / Duraklat** düğmesine bas. Önceki program hangi adımda kesildiyse deterjanı yeniden koyman gerekebilir.

**7. Olmuyorsa servis.** Kilit kapalı, iptal yapıldı, program hâlâ başlamıyor ya da aynı uyarı geri geliyorsa ev ayar turu bitmiştir; **Altus yetkili servisine** haber ver.

## Kapatıp açmak, elektrik kesintisi

Çocuk kilidi devredeyken makineyi Açma / Kapama ile kapatıp açabilirsin; kılavuza göre makine tekrar çalıştığında **program kaldığı yerden devam eder.** Yani kilit açıkken kapat-aç sıfırlama yerine geçmez. Elektrik kesildiyse kılavuz kapağı **pompa filtresi kapağı altındaki acil durum tutacağıyla** açmayı anlatıyor: önce cihazı kapatıp fişini çek ve su taşmasını önlemek için **makinede su kalmadığından emin ol.** Suyu boşaltırken dikkat: Altus'a göre ürünün içindeki su **90 °C'ye kadar** çıkabilir; filtre işini su soğuduktan sonra yap. Ekranın kararması da sıfırlama değil: program bittikten sonra **10 dakika** tuşa basılmazsa makine OFF moduna girer.

## Ne zaman servis

- Kilit kapalı ve iptal yapıldığı hâlde tuşlar tepki vermiyorsa
- Makine her denemede kendini korumaya alıyorsa
- Su boşaltılıp soğuduğu hâlde kapak açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, çocuk kilidi, pompa filtresi kapağı ve kılavuzdaki acil durum tutacağı sende; gövdenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda kilit simgesi ya da bir kod var mı?
3. İptali hangi yolla denedin?
4. İçeride su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Durulama sorunu için [Altus çamaşır makinesi iyi durulamıyor](/blog/altus-camasir-makinesi-iyi-durulamiyor/), kapak için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bak. Bil, gör, çağır.
