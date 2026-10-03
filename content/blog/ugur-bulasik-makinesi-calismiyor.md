---
title: "Uğur bulaşık makinesi çalışmıyor"
description: "Uğur bulaşık makinesi çalışmıyor ya da program başlamıyorsa: kapak, gecikmeli başlatma, fiş, çocuk kilidi ve bekleme modu. Uğur kılavuzundaki sıra."
slug: "ugur-bulasik-makinesi-calismiyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adres ugur.com.tr ürün sayfasındaki "Kullanım Kılavuzu" bağlantısından (göreli /Data/EditorFiles/docs/). Okuma pdftotext -layout; sayfa = PDF sayfası.
#  B1) UBL 21014 G301 / B301  https://ugur.com.tr/Data/EditorFiles/docs/101103_KK.pdf  40 s.  md5 4251945165193e42f7e88a187e40b54d
# Ana tablo (B1 s.31) "Cihaz başlamıyor veya çalışırken duruyor" → "Program başlamıyor.":
#   "Cihazın kapağı açık." / "Cihazın kapağını kapatınız." · "Gecikmeli başlatma ayarlanmış." / "Görüntülenen zamana bakınız."
#   · "Fiş prize takılı değil." / "Fişi prize takınız." · "Ev devresindeki sigorta arızalı." / "Sigortayı değiştiriniz." (YAZILMADI, #31)
#   Tablo üstü: "Bakım işlemine geçmeden önce cihazı kapatınız ve güç fişini prizden çekiniz." · "Elektrikli ekipmanlar yalnızca nitelikli elektrik uzmanları tarafından servis işlemine alınmalıdır"
# Diğer: s.14 Çocuk Kilidi: "Çocuk kilidini etkinleştirmek / pasifleştirmek için tuşa 5 saniye basılır. Bu fonksiyon aktif iken ayar tuşları çalışmaz ve kilit simgesi yanıp söner."
#   · s.13 Gecikme göstergesi: "Eğer gösterge ışığı yanıyorsa, gecikmeli başlatma fonksiyonu etkinleşmiştir."
#   · s.27 Programı Başlatma: "1. Kapağı kapatınız." ... "5. Programı veya gecikmeli başlatmayı etkinleştirmek için [başlat] tuşuna basınız. Program başlar."
#   · s.27 kesinti/devam: "Kapıyı kapatınız ve programı kesintiye uğradığı noktadan devam ettirmek için tuşuna basınız."
#   · s.28 "Gecikmeli Başlatma Programını İptal Et: [tuş] tuşuna yaklaşık 1 saniye basınız. Gecikmeli başlatma iptal edilir. Program durdurulur. Cihaz kapatılır."
#   · s.28 Bekleme Modu: "Cihaz açıldıktan sonra, bir program başlatılmadan önce 2 dakika içinde etkinleştirilmezse veya bir programın sonunda bekleme moduna geçer. ... Ekran kapanır."
#   · s.32 "Ekran paneli iletişim hatası." → "Cihazı kapatmak için güç tuşuna basılı tutun." · motor hatası / sızıntı → musluğu kapat, elektrikten ayır, servis. · s.36 444 84 87.
# BİLEREK YAZILMAYANLAR: "Sigortayı değiştiriniz." (elektrik müdahalesi, #31; gövdede elektrik uzmanına yönlendirildi) · su alma/E10 satırları (kardeş yayında: ugur-bulasik-makinesi-su-almiyor) · tuş simgeleri metin katmanında yok, tuş adları s.13 listesinden ("Başlatma/duraklatma tuşu", "Geciktirmeli başlatma tuşu", "Açma-kapatma tuşu") · fiyat.
# Alıntı denetim tablosu: ugur-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kapağı tam kapat; açık kapakla program başlamaz."
  - "Gecikme göstergesi yanıyorsa ekrandaki zamana bak; beklemek istemiyorsan gecikmeli başlatmayı iptal edip programı yeniden kur."
  - "Fişin prize takılı olduğunu kontrol et."
  - "Tuşlar tepki vermiyor ve kilit simgesi yanıp sönüyorsa çocuk kilidi tuşuna 5 saniye basarak kilidi kapat."
  - "Ekran kapandıysa makineyi açma-kapatma tuşuyla aç; 2 dakika içinde program başlatılmazsa makine bekleme moduna geçer."
  - "Kapağı kapat, programı seç ve başlatma/duraklatma tuşuna bas; ekranda kalan sürenin geri saydığını gör."
faq:
  - q: "Uğur bulaşık makinem tuşlara basınca hiçbir şey yapmıyor, neden?"
    a: "Uğur'un UBL kılavuzuna göre çocuk kilidi etkinken ayar tuşları çalışmaz ve kilit simgesi yanıp söner. Kilidi açmak için çocuk kilidi tuşuna 5 saniye basılır."
  - q: "Programı seçtim ama makine başlamadı, ekranda saat görünüyor."
    a: "Gecikmeli başlatma ayarlanmış olabilir. Uğur'un tablosu bu durumda görüntülenen zamana bakmanı söylüyor; gecikme göstergesi yanıyorsa fonksiyon etkindir. Geri sayım bitince program kendiliğinden başlar."
  - q: "Ekran kendiliğinden kapandı, makine bozuldu mu?"
    a: "Kılavuza göre makine açıldıktan sonra 2 dakika içinde program başlatılmazsa ya da program bittiğinde bekleme moduna geçer ve ekran kapanır. Bu enerji tasarrufu içindir; makineyi yeniden açıp programı başlatabilirsin."
  - q: "Evde sigorta attıysa ne yapmalıyım?"
    a: "Uğur'un tablosu ev devresindeki sigorta arızasını da bir neden olarak sayıyor. Elektrik tesisatıyla ilgili işlemleri nitelikli bir elektrik uzmanına bırak; kılavuz elektrikli ekipmanların yalnızca nitelikli elektrik uzmanlarınca servis işlemine alınmasını istiyor."
images:
  coverAlt: "Kapağı kapalı ankastre bulaşık makinesinin üst kenarındaki kontrol paneline uzanan bir el"
---

Bulaşıkları dizdin, programı seçtin ama makine sessiz: ne su sesi var ne geri sayım. Uğur'un UBL serisi bulaşık makinesi kılavuzunda bu durumun satırı **"Program başlamıyor."** ve tablonun başlığı **"Cihaz başlamıyor veya çalışırken duruyor"**. Nedenlerin çoğu kapak, ayar ve elektrik bağlantısıyla ilgili; birkaç dakikada elenebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapak tam kapalı mı → gecikme göstergesi yanıyor mu → fiş takılı mı → kilit simgesi yanıp sönüyor mu → ekran bekleme modunda mı → programı seçip başlat tuşuna bas. Ekran iletişim hatası, motor hatası ya da sızıntı alarmı varsa → servis.

## Adım adım: evde denenecekler

**1. Kapağı tam kapat.** Tablonun ilk nedeni **"Cihazın kapağı açık."**, çözümü **"Cihazın kapağını kapatınız."** Uğur'un programı başlatma sırası da **"1. Kapağı kapatınız."** diye başlıyor.

**2. Gecikmeli başlatmaya bak.** Neden: **"Gecikmeli başlatma ayarlanmış."** Çözüm: **"Görüntülenen zamana bakınız."** Kılavuzun gösterge listesine göre gecikme göstergesi yanıyorsa **gecikmeli başlatma fonksiyonu etkinleşmiştir**; geri sayım bitince program kendiliğinden başlar. Beklemek istemiyorsan kılavuzun "Gecikmeli Başlatma Programını İptal Et" bölümünde gösterilen tuşa yaklaşık **1 saniye** bas; kılavuza göre gecikme iptal edilir, program durur ve cihaz kapanır. Sonra programı yeniden kur.

**3. Fişi kontrol et.** Neden: **"Fiş prize takılı değil."** Çözüm: **"Fişi prize takınız."**

**4. Çocuk kilidini kapat.** Uğur'un kontrol paneli bölümüne göre çocuk kilidi etkinken **ayar tuşları çalışmaz ve kilit simgesi yanıp söner.** Kilidi açmak ya da kapatmak için çocuk kilidi tuşuna **5 saniye** basılır.

**5. Ekranı uyandır.** Kılavuza göre makine açıldıktan sonra **2 dakika içinde** bir program başlatılmazsa ya da program bittiğinde **bekleme moduna** geçer ve **ekran kapanır.** Açma-kapatma tuşuyla makineyi yeniden aç.

**6. Programı baştan başlat.** Kapağı kapat, makineyi aç, program tuşuyla programı seç ve başlatma/duraklatma tuşuna bas. Kılavuza göre program başladığında ekran **kalan çalışma süresinin geri sayımını** gösterir. Programı yarıda durdurduysan: kapağı kapat ve aynı tuşla **kesintiye uğradığı noktadan** devam ettir.

## Ekranda hata kodu varsa

Uğur'un tablosunda sesli alarmla birlikte ekranda kod görünen satırlar ayrı yazılmış. Makine su almadığı için duruyorsa [Uğur bulaşık makinesi su almıyor](/blog/ugur-bulasik-makinesi-su-almiyor/) yazısındaki musluk, hortum ve filtre sırasını izle. Ekran paneli iletişim hatası satırında kılavuzun çözümü **cihazı kapatmak için güç tuşuna basılı tutmak.**

Programı tamamlayıp bulaşıkları kirli bırakan makine için [Uğur bulaşık makinesi temiz yıkamıyor](/blog/ugur-bulasik-makinesi-temiz-yikamiyor/), program bitmiyorsa markadan bağımsız [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- **Evdeki elektrik devresinde sorun varsa:** tablo ev devresindeki sigorta arızasını bir neden olarak sayıyor. Elektrik tesisatı işini nitelikli bir elektrik uzmanına bırak; kılavuz elektrikli ekipmanların **yalnızca nitelikli elektrik uzmanları** tarafından servis işlemine alınmasını istiyor.
- **Motor hatası** satırındaki kod görünüyorsa: kılavuza göre **su musluğunu kapat, cihazı elektrik beslemesinden ayır ve servisle iletişime geç.**
- **Sızıntı** alarmı varsa ve tahliye pompası sürekli çalışıyorsa: yine **musluğu kapat, elektrikten ayır, Uğur Yetkili Servisi'ni ara.**
- Kapak kapalı, fiş takılı, kilit kapalı ve gecikme yokken program hâlâ başlamıyorsa.

Uğur Çağrı Merkezi: **444 84 87.**

⛔ **Kendin-çöz sınırı burada biter.** Kapak, ayar, kilit ve fiş kullanıcıya; elektrik tesisatı, kart ve motor servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
