---
title: "Airfel klima çalışmıyor: evde kontrol"
description: "Airfel klima açılmıyorsa kılavuzun çözümleri: elektrik ve fiş, kumanda pili ve 8 metrelik menzil, 3 dakika, zamanlayıcı, fişten çekip açma, yanıp sönen lamba."
slug: "airfel-klima-calismiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belge bu koşuda (10:53) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Airfel'in kendi alan adı (airfel.com; adres Airfel'in ürün sayfasındaki doküman bağlantısından, web araması kullanılmadı).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/airfel-klima-kullanim-kilavuzu1.pdf · pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı "◄Sayfa N►" numarası iki eksik; kumanda kılavuzu s.41-53 kendi numarasıyla 2-14). Satır gruplaması İngilizce eş sayfa s.71 ile doğrulandı.
#  AF1) Airfel "Duvar Tipi Split Klima · Kullanım ve Kurulum Kılavuzu" LTXM25/35/50/71NV1B · LRXM25/35/50/71NV1B (kumanda RG57A3/BGEF, RG57A2/BGEF, RG57B/BGE, RG57D/BGE, RG57Y1/BGEF), 108 s., md5 b4650da08d110b4a7001a401bb303284
#      https://airfel.com/uploads/files/Airfel_Klima_Kullan%C4%B1m_K%C4%B1lavuzu1.pdf (ürün sayfası: https://airfel.com/tr/tr/detail/sezonsal-inverter-split-klima/duvar-tipi-inverter-klima-ltxm25n-9000-btuh-a)
#      s.17 "Ünite çalışmıyor" Olası Nedenler | Çözüm → "Güç kesintisi | Elektriğin gelmesini bekleyin" / "Güç kapatılmış | Gücü açın" / "Sigorta yanmış | Sigortayı değiştirin" / "Uzaktan kumandanın pilleri bitmiş | Pilleri değiştirin" / "Ünitenin 3 dakikalık koruma özelliği etkinleştirilmiş | Üniteyi yeniden başlattıktan sonra üç dakika bekleyin" / "Zamanlayıcı etkinleştirilmiş | Zamanlayıcıyı kapatın"
#      s.17 "Ünite sık sık açılıp duruyor" → soğutucu akışkan fazla/az, sıkıştırılamayan gaz veya rutubet, "Kompresör bozuk | Kompresörü değiştirin", "Voltaj çok yüksek veya çok düşük | Gerilimi düzenlemek için bir manostat kurun"
#      s.17 "Gösterge lambaları sürekli yanıp sönüyor" / hata kodları "E(x), P(x), F(x) • EH(xx), EL(xx), EC(xx) • PH(xx), PL(xx), PC(xx)" → "Ünite çalışmayı durdurulabilir veya güvenli bir şekilde çalışmaya devam edebilir. Gösterge lambaları yanıp sönmeye devam ederse veya hata kodu gösterilirse, yaklaşık 10 dakika bekleyin. Problem kendiliğinden çözülebilir. Çözülmezse gücü kesip yeniden bağlayın. Üniteyi açın. Sorun düzelmezse gücü kesin ve en yakın müşteri servis merkeziyle irtibata geçin." / "NOT: Yukarıda anlatılan kontroller ve arıza tespitleri yapıldıktan sonra sorun devam ederse ünitenizi derhal kapatın ve yetkili servis merkeziyle irtibata geçin."
#      s.16 "Ünite birden bire, öngörülmedik şekilde veya tepki vermeden çalışıyor" → "Cep telefonu vericileri ve uzak güçlendiricilerden kaynaklanan girişimler ünitenin arızalanmasına neden olabilir. Bu durumda şunları deneyin: • Cihazı fişten çekip yeniden takın. • Üniteyi yeniden çalıştırmak için AÇMA/KAPAMA düğmesine basın." / "Sorun düzelmezse bölgenizdeki bir satıcı veya en yakın müşteri servis merkeziyle irtibata geçin. Ünitedeki arızayı ayrıntılı bir şekilde açıklayın ve cihazınızın model numarasını belirtin."
#      s.15 "AÇMA/KAPATMA düğmesine basıldığında ünite açılmıyor" → "Ünitede aşırı yüklenmeyi önleyen 3 dakikalık koruma özelliği bulunur. Kapatıldıktan sonraki üç dakika içinde ünite yeniden çalıştırılamaz." · GÜVENLİK TEDBİRLERİ: "Sıklıkla sigorta atarsa veya devre kesici açılırsa" / "Güç kablosu zarar görürse veya anormal şekilde ısınırsa" / "Yanık kokusu alırsanız" ... "BU SORUNLARI KENDİ BAŞINIZA DÜZELTMEYE ÇALIŞMAYIN! DERHAL YETKİLİ SERVİS SAĞLAYICISINA HABER VERİN!"
#      s.11 "• Otomatik Yeniden Başlatma (bazı üniteler) Ünitenin gücü kesilirse güç geri geldiğinde önceki ayarlarla otomatik olarak yeniden başlatılacaktır."
#      s.10 "Klimanız aşağıdaki sıcaklık aralıklarının dışında kullanıldığında belirli güvenlik koruma özellikleri etkinleşebilir ve ünitenin devre dışı kalmasına sebep olabilir." (İnverter: SOĞUTMA oda 16-32°C, ISITMA oda 0-30°C, dış ısıtma -15-24°C)
#      s.9 iç ünite ekranı: "ZAMANLAYICI kurulduğunda." (gösterge) / "AÇILMA ZAMANLAYICISI ayarlandığında (ünite KAPALI ise AÇILMA ZAMANLAYICISI ayarlandığında “ ” göstergesi açık kalır)"
#      s.41 "Anma Gerilimi 3,0 V(Kuru pil R03/LR03 X 2)" / "Sinyal Alma Aralığı 8m"
#      s.43 "TIMER ON Düğmesi ... Otomatik zamanlamalı programı iptal etmek için otomatik açılma zamanını 0.0 olarak ayarlayın." / "TIMER OFF Düğmesi ... Otomatik zamanlamalı programı iptal etmek için otomatik kapanma zamanını 0.0 olarak ayarlayın."
#      s.44 "LED Düğmesi İç ünite Gösterge ekranı devre dışı bırakır/etkinleştirir. Bu düğmeye basıldığında iç ünite gösterge ekranı temizlenir, gösterge ekranının ışığını yakmak için bu düğmeye tekrar basın."
#      s.46 "Ünitenin fişe takılı olduğundan ve elektriğe bağlı olduğundan emin olun." / "4. Klimayı başlatmak için ON/OFF düğmesine basın."
#      s.52 "Uzaktan kumandayı üniteden 8 metre uzakta ve alıcıya doğru tutarak kullanın. Sinyalin alındığı bip sesiyle onaylanır." / "Uzaktan kumandadan iç üniteye giden sinyaller perde, kapı veya başka malzemeler tarafından engellenirse klima çalışmayacaktır." / "İç ünite üzerindeki kızılötesi sinyal alıcı doğrudan güneş ışığına maruz kalırsa klima düzgün çalışmayabilir. Alıcıyı güneş ışığından korumak için perde kullanın." / "Diğer elektrikli cihazlar uzaktan kumandayla etkileşime girerse bu cihazların yerini değiştirin veya bölgenizdeki satıcıyla irtibata geçin."
#      s.53 "Aşağıdaki durumlar pillerin tükendiğini gösterir. Eski pilleri yenileriyle değiştirin. • Sinyal iletildiği zaman sinyal alınma sesi duyulmuyor. • Gösterge soluk yanıyor." / "(1) Uzaktan kumandanın arka tarafındaki kapağı çıkarın. (2) Eski pilleri çıkarın ve (+) ve (-) uçlarına dikkat ederek yeni pilleri takın. (3) Kapağı yerine takın." / "NOT: Pilleri çıkardığınızda uzaktan kumandanın tüm programları silinir. Yeni piller takıldıktan sonra uzaktan kumanda yeniden programlanmalıdır." / "Eski ve yeni pilleri veya farklı türdeki pilleri bir arada kullanmayın."
# YAKIN KOPYA: Airfel'in yayında klima sayfası yok. Aynı belirtinin yayındaki başka marka sayfalarıyla (vestel/toshiba/daikin/lg/samsung/mitsubishi-electric-klima-calismiyor) ve bugünkü kardeşlerle (arcelik/baymak-klima-calismiyor) gövde ölçümü .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: sigorta değiştirme (kılavuz "Sigortayı değiştirin" diyor; elektrik müdahalesi, #31 → kullanıcıya verilmedi) · manostat kurulumu (elektrik tesisatı; yalnız kılavuzun önerisi olarak anıldı) · soğutucu akışkan ve kompresör (servis) · hata kodlarının tek tek anlamı (kılavuz bu sayfada vermiyor) · fiyat.
# Alıntı denetim tablosu: airfel-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet R03/LR03 pil"]
steps:
  - "Evde elektrik kesintisi varsa elektriğin gelmesini bekle."
  - "Klimanın fişinin takılı ve elektriğe bağlı olduğundan emin ol, sonra kumandanın ON/OFF düğmesine bas."
  - "Kumandada sinyal sesi duyulmuyor ya da gösterge soluksa arka kapağı çıkar, 2 yeni R03/LR03 pili artı-eksi yönüne dikkat ederek tak."
  - "Kumandayı en fazla 8 metreden iç ünitenin alıcısına doğru tut; arada perde, kapı gibi engel bırakma."
  - "Klimayı kapatıp yeniden başlattıysan 3 dakika bekle."
  - "Kumandada TIMER ON ya da TIMER OFF kuruluysa süreyi 0.0'a getirerek iptal et."
  - "Ünite tepki vermiyorsa fişini çekip yeniden tak ve AÇMA/KAPAMA düğmesine bas."
  - "Gösterge lambaları yanıp sönüyor ya da ekranda hata kodu varsa 10 dakika bekle; düzelmezse gücü kesip yeniden bağla, yine sürerse gücü kes ve model numarasıyla Airfel yetkili servisine başvur."
faq:
  - q: "Airfel klima neden çalışmaz?"
    a: "Airfel kılavuzunun sorun giderme tablosu 'Ünite çalışmıyor' satırında altı olası neden sayıyor: güç kesintisi, gücün kapalı olması, sigortanın yanması, kumanda pillerinin bitmesi, 3 dakikalık korumanın devrede olması ve zamanlayıcının etkin olması. Sigorta dışındakileri evde kontrol edebilirsin; sigortayı kendin değiştirme, yetkili servisten destek iste."
  - q: "Pilleri değiştirdim, kumandadaki ayarlar silindi. Normal mi?"
    a: "Evet. Airfel kumanda kılavuzuna göre piller çıkarıldığında kumandanın tüm programları silinir ve yeni pillerden sonra kumandanın yeniden programlanması gerekir. Kılavuz eski ve yeni pilleri ya da farklı türdeki pilleri birlikte kullanmamanı da istiyor."
  - q: "Klima çalışıyor ama iç ünitenin ekranı karanlık. Neden?"
    a: "Kumandadaki LED düğmesine basılmış olabilir. Airfel kumanda kılavuzuna göre bu düğme iç ünitenin gösterge ekranını kapatır; ekranın ışığını yakmak için düğmeye yeniden basılır."
  - q: "Klima bazen kendi kendine açılıp kapanıyor ya da tepki vermiyor. Ne yapmalıyım?"
    a: "Airfel kılavuzu cep telefonu vericileri ve uzak güçlendiricilerden gelen girişimlerin üniteyi beklenmedik şekilde çalıştırabileceğini yazıyor; önce fişi çekip yeniden takmanı ve AÇMA/KAPAMA'ya basmanı öneriyor. Ünite sık sık açılıp duruyorsa tablodaki nedenler soğutucu akışkan, sistemdeki gaz ya da rutubet, kompresör ve voltajdır; bunlar servisin bakacağı işler."
  - q: "Elektrik gidip geldi, klima eski ayarlarıyla açılır mı?"
    a: "Bazı Airfel ünitelerinde otomatik yeniden başlatma var: güç geri geldiğinde ünite önceki ayarlarla kendiliğinden yeniden başlar."
images:
  coverAlt: "Sabah ışığında bir çalışma odasında masanın üzerinde arka kapağı açık klima kumandası ve iki yeni kalem pil, arkada duvarda kapalı beyaz split klima"
---

Kumandaya basıyorsun ama klimadan ne bip sesi geliyor ne hava. Airfel'in Türkçe kullanım kılavuzu bu durumu sorun giderme tablosunda **"Ünite çalışmıyor"** satırıyla veriyor ve her nedenin karşısına kısa bir çözüm yazıyor: **"Elektriğin gelmesini bekleyin"**, **"Gücü açın"**, **"Pilleri değiştirin"**, **"Üniteyi yeniden başlattıktan sonra üç dakika bekleyin"**, **"Zamanlayıcıyı kapatın"**. Kılavuz ayrıca tepki vermeyen ünite için fişten çekip yeniden takmayı, yanıp sönen gösterge lambaları için de 10 dakika beklemeyi öneriyor. Bu yazıda Airfel'in sırasını kumanda kılavuzunun pil ve menzil notlarıyla birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı, fiş takılı mı? Kumandadan bip sesi gelmiyor ya da ekranı soluksa iki yeni R03 pil tak; 8 metreden yakın ve engelsiz kullan. Kapatıp açtıysan 3 dakika bekle. TIMER'ı 0.0'a al. Tepki yoksa fişi çekip tak. Lambalar yanıp sönüyorsa 10 dakika bekle. Sürerse → Airfel yetkili servisi.

## Airfel'in tablosu

| Olası neden | Airfel'in çözümü | Kimin işi |
|---|---|---|
| Güç kesintisi | Elektriğin gelmesini bekle | Senin |
| Güç kapatılmış | Gücü aç | Senin |
| Uzaktan kumandanın pilleri bitmiş | Pilleri değiştir | Senin |
| 3 dakikalık koruma devrede | Yeniden başlattıktan sonra üç dakika bekle | Senin |
| Zamanlayıcı etkin | Zamanlayıcıyı kapat | Senin |
| Sigorta yanmış | Sigortayı değiştirin | Kendin yapma, yetkili servis |
| Ünite sık sık açılıp duruyor (soğutucu akışkan, gaz ya da rutubet, kompresör, voltaj) | Dolum, kompresör, manostat | Yetkili servis |

Kılavuz, klimanın çalışma sıcaklık aralıklarının dışında kullanıldığında güvenlik koruma özelliklerinin etkinleşip üniteyi devre dışı bırakabileceğini de yazıyor; inverter modellerde bu aralık soğutmada oda için 16-32°C, ısıtmada 0-30°C.

## Adım adım: evde denenecekler

**1. Elektrik kesintisi.** Evde elektrik kesintisi varsa elektriğin gelmesini bekle. Bazı Airfel ünitelerinde otomatik yeniden başlatma var; güç geri gelince ünite önceki ayarlarla kendiliğinden çalışır.

**2. Fiş ve güç.** Klimanın fişinin takılı ve elektriğe bağlı olduğundan emin ol, sonra kumandanın ON/OFF düğmesine bas. Airfel kumanda kılavuzu her çalıştırma tarifini bu kontrolle başlatıyor.

**3. Kumanda pilleri.** Kumandada sinyal sesi duyulmuyor ya da gösterge soluksa arka kapağı çıkar, 2 yeni R03/LR03 pili artı-eksi yönüne dikkat ederek tak. Kılavuz bu iki belirtiyi pillerin tükendiğinin işareti olarak veriyor. Pilleri çıkarınca kumandanın programları silinir; yeni pillerden sonra ayarlarını yeniden yap.

**4. Menzil ve engel.** Kumandayı en fazla 8 metreden iç ünitenin alıcısına doğru tut; arada perde, kapı gibi engel bırakma. Airfel'e göre sinyal engellenirse klima çalışmaz; alıcıya doğrudan güneş geliyorsa klima düzgün çalışmayabilir, kılavuz alıcıyı perdeyle korumanı öneriyor. Sinyal alındığında klima bip sesiyle onaylar.

**5. Üç dakika.** Klimayı kapatıp yeniden başlattıysan 3 dakika bekle. Kılavuza göre ünite, aşırı yüklenmeyi önlemek için kapatıldıktan sonraki üç dakika içinde yeniden çalıştırılamaz.

**6. Zamanlayıcı.** Kumandada TIMER ON ya da TIMER OFF kuruluysa süreyi 0.0'a getirerek iptal et. İç ünite ekranındaki zamanlayıcı göstergesi de zamanlayıcının kurulu olduğunu gösterir.

**7. Fişten çekip açma.** Ünite tepki vermiyorsa fişini çekip yeniden tak ve AÇMA/KAPAMA düğmesine bas. Airfel bunu, cep telefonu vericileri ve uzak güçlendiricilerden gelen girişimlerin ünitenin beklenmedik çalışmasına yol açtığı durum için öneriyor.

**8. Yanıp sönen lamba.** Gösterge lambaları yanıp sönüyor ya da ekranda hata kodu varsa 10 dakika bekle; düzelmezse gücü kesip yeniden bağla, yine sürerse gücü kes ve model numarasıyla Airfel yetkili servisine başvur. Kılavuz E, P, F, EH, EL, EC, PH, PL ve PC ile başlayan kodlar için bu sırayı veriyor ve sorunun kendiliğinden çözülebileceğini yazıyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Elektrik, fiş, pil, kumanda menzili, 3 dakika, zamanlayıcı, fişten çekip açma, 10 dakika bekleme | Senin, bu rehberdeki adımlar |
| Sigorta yanmış | Kendin değiştirme, yetkili servis |
| Ünite sık sık açılıp duruyor | Airfel yetkili servisi |
| Gücü kesip bağladıktan sonra da hata kodu ya da yanıp sönen lamba | Gücü kes, Airfel yetkili servisi |
| Sık atan sigorta ya da açılan devre kesici, hasarlı ya da ısınan güç kablosu, yanık kokusu | Üniteyi hemen kapat, kendin düzeltmeye çalışma, yetkili servis |

⛔ Airfel kılavuzu güvenlik listesindeki sorunlar için açık konuşuyor: bunları kendi başına düzeltmeye çalışma, derhal yetkili servise haber ver.

Klima açılıyor ama serinletmiyorsa [Airfel klima soğutmuyor](/blog/airfel-klima-sogutmuyor/), kışın ısıtmıyorsa [Airfel klima ısıtmıyor](/blog/airfel-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında; ekrandaki kodlar için genel liste [klima arıza kodları](/blog/klima-ariza-kodlari/) yazısında.

---

**Kaynak künyesi.** Sorun giderme tabloları, güvenlik tedbirleri, otomatik yeniden başlatma ve kumanda kılavuzu (pil, menzil, zamanlayıcı, LED düğmesi) Airfel'in airfel.com'daki "Duvar Tipi Split Klima Kullanım ve Kurulum Kılavuzu"ndan (LTXM/LRXM 25-71 NV1B) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
