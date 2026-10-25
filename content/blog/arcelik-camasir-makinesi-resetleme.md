---
title: "Arçelik çamaşır makinesi resetleme nasıl yapılır"
description: "Arçelik çamaşır makinesinde reset, kılavuzdaki adıyla programı iptal etmek. Tuşlu ve düğmeli modelde adımlar, çocuk kilidi, kapak ve servis sınırı."
slug: "arcelik-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de arcelik-camasir-makinesi-resetleme yok,
#   repoda "reset" geçen hiçbir slug yok. arcelik-camasir-makinesi-calismiyor bir adımda programı iptal etmeyi anıyor, ama "resetleme" sorgusuna ayrılmış sayfa değil.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "arçelik çamaşır makinesi" → 3. öneri "arçelik çamaşır makinesi resetleme";
#   "arçelik çamaşır makinesi resetleme" → "…yapmıyor", "…eski model", "…nasıl yapılır". GSC (https___www-5/6): bu sorguda satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den yeniden indirildi, ikisi de HTTP 200, md5 yerel kopyayla aynı.
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Çocuk kilidi A s.28, B s.27 · kapak kilidi A s.30 · iptal A s.31, B s.28-29 · sorun giderme A s.35, B s.33 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: "gizli tuş kombinasyonu"/servis menüsü (belgede yok) · fişi çekip bekleyerek reset (belgede reset yöntemi olarak yok)
#   · hata kodu silme hilesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda Con yazıyorsa çocuk kilidi açıktır; önce kılavuzdaki tuşlarla kilidi kapat."
  - "Tuşlu modelde Başla / Bekle / İptal tuşunu 3 saniye basılı tut; ekranda End görününce program iptal olmuştur."
  - "Düğmeli modelde Program Seçim düğmesini başka bir programa çevir; Bitti / İptal ışığı yanıp sönerek iptali bildirir."
  - "İptalden sonra pompanın suyu boşaltmasını bekle; bu sırada kapağı zorlama."
  - "Kapak hâlâ açılmıyorsa Pompa+Sıkma programını seçip suyu tahliye et, kapak ışığının açılabilir konuma gelmesini bekle."
  - "Yeni programı seç, gerekiyorsa deterjan ve yumuşatıcıyı yeniden koy, Başla / Bekle ile başlat."
  - "Program yine başlamıyor ya da aynı uyarı tekrar ediyorsa Arçelik yetkili servisine haber ver."
faq:
  - q: "Arçelik çamaşır makinesinde reset tuşu var mı?"
    a: "Arçelik'in 7103 D ve 9103 HE kılavuzlarında Reset adında ayrı bir tuş yok. Kılavuzdaki karşılığı Programın iptal edilmesi bölümü. 9103 HE'nin sorun giderme tablosu, program başlatılamadığında Başla / Bekle / İptal düğmesine 3 saniye basarak makineyi fabrika ayarlarına getirmeyi söylüyor; 7103 D'de aynı satırın çözümü Program Seçim düğmesini çevirip başka bir program seçmek."
  - q: "Arçelik çamaşır makinesi resetleme yapmıyor, neden?"
    a: "En sık engel çocuk kilidi. Kılavuza göre çocuk kilidi açıkken Program Seçim düğmesiyle başka bir program seçilse bile önceki program çalışmaya devam eder ve ekranda Con görünür. Önce kilidi kapat, sonra iptal adımını tekrarla. Kilit kapalıyken de iptal olmuyorsa yetkili servis."
  - q: "Fişi çekip takınca makine sıfırlanır mı?"
    a: "Kılavuzlar bunu bir sıfırlama yöntemi olarak anlatmıyor. 7103 D kılavuzunun notu tersini söylüyor: elektrik kesintilerinde ya da fiş prizden çıkarıldığında çocuk kilidi devreden çıkmaz. Programı bitirmek için kılavuzdaki iptal adımını kullan."
  - q: "İptalden sonra kapak neden açılmıyor?"
    a: "Kapak kilidi su seviyesine bağlı. Arçelik'e göre makinenin içindeki su sıcaklığı yüksekse ya da su seviyesi kapak hizasının üzerindeyse kapak açılmaz. 9103 HE kılavuzunun çözümü program düğmesini Pompa+Sıkma programına getirip suyu tahliye etmek. Program bittikten sonra da kapak kilidinin devreden çıkması birkaç dakika sürebilir."
  - q: "İptal ettikten sonra deterjanı yeniden koymam gerekir mi?"
    a: "Gerekebilir. 7103 D kılavuzuna göre programın iptal edildiği adıma bağlı olarak yeni seçtiğin program için tekrar deterjan ve yumuşatıcı koyman gerekebilir."
images:
  coverAlt: "Çamaşır odasında beyaz, ön yüklemeli bir çamaşır makinesi ve sönük kumanda paneli"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Program takıldı, ekran tepki vermiyor ya da yanlış programı başlattın; ilk akla gelen "makineyi resetlemek". Arçelik'in çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok**. Kılavuzdaki karşılığı **"Programın iptal edilmesi"** bölümü; 9103 HE kılavuzunun sorun giderme tablosu bu işi açıkça **"makineyi fabrika ayarlarına getirmek"** diye tarif ediyor. Bu yazıda Arçelik'in iki kılavuzundan, tuşlu 9103 HE ile Program Seçim düğmesiyle çalışan 7103 D'den, sıfırlamanın doğru yolunu sırayla çıkardık. Tuş yerleri modelden modele değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda Con varsa önce çocuk kilidini kapat. Tuşlu modelde Başla / Bekle / İptal'e 3 saniye bas, ekranda End görünsün. Düğmeli modelde Program Seçim düğmesini başka programa çevir. Pompa suyu boşaltsın, kapak açılmıyorsa Pompa+Sıkma. Sonra yeni programı başlat. Olmuyorsa Arçelik yetkili servisi.

## Ekran ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Con** | Çocuk kilidi açık; program ve ayar değişmez | 🛠️ Önce kilidi kapat |
| **COF / COFF** | Çocuk kilidi kapandı | İptal adımına geç |
| **End** (iptalden sonra) | Program iptal edildi | Yeni program seç |
| **Bitti / İptal ışığı yanıp sönüyor** | Düğmeli modelde iptal kabul edildi | ⏳ Pompanın bitmesini bekle |
| **Kapak ışığı sönük** | Su seviyesi uygun değil, kapak kilitli | 🛠️ Pompa+Sıkma |

## Adım adım: Arçelik çamaşır makinesini sıfırlama

**1. Önce çocuk kilidine bak.** Reset denemeleri çoğu zaman burada takılıyor. 7103 D kılavuzuna göre çocuk kilidi açıkken Program Seçim düğmesi çevrilirse ekranda **"Con"** görünür ve **başka bir program seçilse bile daha önce seçilmiş program çalışmaya devam eder.** 7103 D'de kilit, program çalışırken **2. Yardımcı Fonksiyon tuşuna 3 saniye** basılarak kapanır; ekranda "COF" görünür. 9103 HE'de aynı iş **2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye** basılarak yapılır; ekranda "COFF" çıkar. 9103 HE kılavuzunun uyarısı: kilidi program bitince kapatmazsan makine **yeni bir program seçimine izin vermez.**

**2. Tuşlu modelde: 3 saniye.** 9103 HE kılavuzundaki iptal tarifi kısa: **Başla / Bekle / İptal tuşunu 3 saniye basılı tut.** Başla sembolü yanıp söner, program hangi adımda iptal edildiyse o adımın sembolü yanık kalır, ekranda **"End"** görünür ve program iptal edilmiş olur. Aynı kılavuzun sorun giderme tablosu, program başlatılamadığında ya da program seçilemediğinde bu tuşa 3 saniye basmayı **"makineyi fabrika ayarlarına getirmek"** olarak anlatıyor. Arçelik'e göre bu durumun sebebi şebeke voltajı ya da su basıncı gibi **altyapı kaynaklı problemler yüzünden makinenin kendini korumaya alması** olabilir.

**3. Düğmeli modelde: düğmeyi çevir.** 7103 D'de iptal için **Program Seçim düğmesini başka bir programa çevirmek** yeterli; bir önceki program iptal olur ve **Bitti / İptal ışığı sürekli yanıp sönerek** bunu bildirir. Sorun giderme tablosunda da "program başlatılamıyor veya program seçimi yapılamıyor" satırının çözümü aynı.

**4. Pompayı bekle.** 7103 D kılavuzuna göre iptalden sonra, programın hangi adımda olduğuna ve içeride su olup olmadığına bakılmaksızın **Pompa fonksiyonu 1-2 dakika çalışır.** Bu süre sonunda makine yeni seçilen programın ilk adımından çalışmaya hazır hale gelir. Bu arada düğmelere art arda basmak işi hızlandırmaz.

**5. Kapak açılmıyorsa suyu boşalt.** Kapak kilidi su seviyesine bağlı. Arçelik'e göre makinenin içindeki **su sıcaklığı yüksekse ya da su seviyesi kapak hizasının üzerindeyse kapak açılmaz.** 9103 HE kılavuzunun çözümü: program düğmesini **Pompa+Sıkma** programına getirip suyu tahliye et. Kapak kilitli sembolü söndükten sonra kapağı açabilirsin; bu aşamada kapağı zorlama. Ayrıntılar [Arçelik çamaşır makinesi kapağı açılmıyor](/blog/arcelik-camasir-makinesi-kapagi-acilmiyor/) yazısında.

**6. Yeni programı başlat.** İstediğin programı, sıcaklığı ve devri seç, **Başla / Bekle** tuşuna bas. 7103 D kılavuzunun notu: programın iptal edildiği adıma bağlı olarak **yeni program için tekrar deterjan ve yumuşatıcı koyman gerekebilir.**

**7. Olmuyorsa servis.** Çocuk kilidi kapalı, iptal yapıldı, yine de program başlamıyor ya da aynı uyarı geri geliyorsa ev ayar turu bitmiştir. Bu noktada **Arçelik yetkili servisine** haber ver.

## Fişi çekmek sıfırlar mı

Kılavuzlarda fişi çekip beklemek bir sıfırlama yöntemi olarak geçmiyor. 7103 D'nin notu tam tersini söylüyor: **elektrik kesintilerinde veya fiş prizden çıkarıldığında çocuk kilidi devreden çıkmaz.** Voltaj düştüğünde ise kılavuza göre makine bir süre durabilir ve **voltaj normale gelince kaldığı yerden devam eder.** Yani doğru yol tuş ya da düğmeyle iptal.

## Ne zaman servis

- İptal adımı uygulandığı hâlde ekran ya da tuşlar tepki vermiyorsa
- Program sürekli kendini korumaya alıyor, her denemede başlamıyorsa
- Su boşaltıldığı hâlde kapak uzun süre kilitli kalıyorsa
- Ekranda bir hata kodu tekrar ediyorsa: kodların listesi [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi ve pompa filtresi kapağı sende; makinenin gövdesinin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda Con, End ya da bir kod var mı?
3. İptal adımını hangi yolla denedin?
4. İçeride su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç çalışmıyorsa [Arçelik çamaşır makinesi çalışmıyor](/blog/arcelik-camasir-makinesi-calismiyor/) yazısına bak. Bil, gör, çağır.
