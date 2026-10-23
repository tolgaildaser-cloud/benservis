---
title: "Arçelik fırın saat ayarlama nasıl yapılır"
description: "Arçelik ankastre fırında saat ayarı: ilk kullanımda 00.00 ekranı, sonradan değiştirme, elektrik kesintisi, tuş kilidi ve saatin neden ayarlanamadığı."
slug: "arcelik-firin-saat-ayarlama"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de arcelik-firin-saat-ayarlama yok; Arçelik fırında yalnız arcelik-firin-isinmiyor var
#   (saat ayarını bir ön koşul olarak anıyor, ayar adımlarına ayrılmış sayfa değil).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "arçelik fırın s" → 1. öneri "arçelik fırın saat ayarlama";
#   "arçelik fırın saat ayarlama" → "…ayarlaması nasıl yapılır", "…ayarlaması", "…ayarlama dokunmatik". GSC (https___www-5/6): Arçelik fırın saat satırı yok.
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı (kaynak-firin-sprint/arcelik-9658.pdf).
#  (A) 9658 SYTİ tek bölmeli 60 cm ankastre fırın kullanma kılavuzu
#      https://download.arcelik.com.tr/download.usagemanuals/9658-syti-tek-bolmeli-60-cm-ankastre-firinlar-kullanim-kilavuzu-tr_TR_201505070836921_User20Manual20-20Filetur-A.pdf
#      32 s.  md5 cc4cfd75c500496d1ee5ade673f5bff5
# İlk saat ayarı s.15 · kesinti notu s.16 · ekran/tuşlar s.18 · saat ayarlanamaz notları s.19 · otomatik programlama s.22-23 · tuş kilidi, alarm s.23-24 · günün saati değişikliği s.27 (sayfa = PDF sayfası).
# Tek modelin kılavuzu: düğmeli/mekanik saatli Arçelik fırınlar için ayrı yöntem yazılmadı (belge yok).
# BİLEREK YAZILMAYANLAR: başka modele özel tuş kombinasyonu · fırın kartı/saat modülü teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: arcelik-firin-saat-ayarlama.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Fırının fişini tak ve sigortasını aç; saat ekranında sıfırlar belirir ve saat sembolü yanıp söner."
  - "Yukarı ve aşağı tuşlarıyla günün saatini ayarla; tuşa basılı tutarsan zaman daha hızlı ilerler."
  - "Kılavuzda gösterilen onay tuşuna dokunarak ayarı onayla; ekran stand-by görünümüne döner ve yalnız günün saati görünür."
  - "Saati sonradan değiştirmek için fırını kapat, ekranda saat sembolü görünene kadar kılavuzdaki tuşa kısa aralıklarla dokun."
  - "Saat alanı yanıp sönerken yukarı ve aşağı tuşlarıyla yeni saati ayarla ve onayla."
  - "Saat ayarlanmıyorsa fırının kapalı olduğundan, kurulu bir pişirme programı ve açık tuş kilidi olmadığından emin ol."
  - "Elektrik kesintisinden sonra saat ekranı yeniden gelirse saati onaylayarak ya da yeniden ayarlayarak devam et."
faq:
  - q: "Arçelik fırında saat ayarlanmazsa fırın çalışır mı?"
    a: "Hayır. Arçelik'in 9658 ankastre fırın kılavuzuna göre fırını kullanmadan önce saat ayarı yapılmalıdır; saat ayarı yapılmazsa fırın çalışmaz. Fırın ısınmıyorsa ilk bakılacak yerlerden biri bu."
  - q: "Arçelik fırının saati elektrik kesilince sıfırlanır mı?"
    a: "Kılavuza göre elektrik kesintisinde ya da fiş çıkarılıp tekrar takıldığında saat ayarlama ekranı tekrar gelir. Kısa süreli kesintilerde ayarlanmış günün saati korunur; bu durumda saat değerini onaylayarak ilerleyebilirsin. Kesintide kurulu pişirme programı ise iptal olur, yeniden programlaman gerekir."
  - q: "Arçelik fırında saat neden değişmiyor?"
    a: "Kılavuza göre günün saati ayarı yalnız fırın kapalıyken yapılabilir. Fırın herhangi bir fonksiyonda çalışırken ya da saat üzerinde yarı otomatik veya tam otomatik programlama yapılmışsa saat ayarlanamaz. Tuş kilidi açıksa da fırın düğmeleri kullanılamaz."
  - q: "Arçelik fırının tuş kilidi nasıl açılır?"
    a: "9658 kılavuzuna göre tuş kilidini devreden çıkarmak için ilgili tuşa iki kez dokunulur; tuş kilidi iptal olur ve ekrandaki kilit sembolü kaybolur. Kılavuzun notu: elektrik kesintisi halinde tuş kilidi iptal olmaz."
  - q: "Fırın saatini alarm olarak kullanabilir miyim?"
    a: "Evet. Kılavuza göre ürün saatini pişirme programı dışında bir hatırlatma için kullanabilirsin; alarmın fırın fonksiyonları üzerinde etkisi yoktur. Alarm süresi en fazla 23 saat 59 dakika olabilir ve süre dolunca sesli uyarı verir."
images:
  coverAlt: "Mutfak dolabına yerleştirilmiş, dokunmatik ekranlı paslanmaz çelik ankastre bir fırın"
  steps:
    - "Duvardaki bir prize takılı fırın fişi ve yanındaki kapalı sigorta kutusu"
    - "Ankastre fırının dokunmatik panelinde yukarı ve aşağı ok biçimli tuşlar"
    - "Ankastre fırının karanlık ekranında sakin duran saat göstergesi"
    - "Kapalı bir ankastre fırının dokunmatik kontrol panelinin yakın planı"
    - "Fırın ekranında yanıp sönen saat alanının bulanık görüntüsü"
    - "Dokunmatik fırın panelinde küçük bir kilit simgesi"
    - "Mutfakta tezgâh üstünde katlanmış bir fırın kullanma kılavuzu"
---

Fırını yeni taktın, elektrik gitti geldi ya da saat ileri geri alındı; ekranda sıfırlar yanıp sönüyor ve fırın çalışmıyor. Arçelik fırınlarda saat sadece bir gösterge değil: Arçelik'in 9658 ankastre fırın kılavuzu açıkça **"Fırını kullanmadan önce saat ayarı yapılmalıdır. Saat ayarı yapılmazsa fırın çalışmayacaktır"** diyor. Bu yazıda o kılavuzdan, dokunmatik panelli Arçelik ankastre fırında saati ilk kez ayarlamayı, sonradan değiştirmeyi ve saatin neden ayarlanamadığını sırayla çıkardık. Kaynak tek bir modelin kılavuzu; düğmeli ya da mekanik saatli modellerde yol farklıdır, kendi kılavuzuna bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi tak, sigortayı aç; ekranda sıfırlar belirir. Yukarı / aşağı tuşlarıyla saati ayarla, onay tuşuyla onayla. Sonradan değiştirmek için fırın kapalıyken saat sembolü görünene kadar kılavuzdaki tuşa kısa aralıklarla dokun. Fırın çalışırken, kurulu bir program varken ya da tuş kilidi açıkken saat ayarlanmaz.

## Panelde ne nerede

| Tuş ya da alan | Kılavuza göre işi |
|---|---|
| **Güncel saat göstergesi alanı** | Günün saati; stand-by ekranında yalnız bu görünür |
| **Saat ve ayarlar tuşu** | Kılavuzun panel listesinde ayrı bir tuş; ayarlar menüsüne buradan girilir |
| **Yukarı / Aşağı tuşları** | Değeri artırma ve azaltma; basılı tutunca hızlanır |
| **Alarm tuşu** | Fırından bağımsız hatırlatma, en fazla 23 saat 59 dakika |
| **Tuş kilidi sembolü** | Kilit açık; fırın düğmeleri kullanılamaz |

## Adım adım: Arçelik fırında saat ayarı

**1. Fişi tak, sigortayı aç.** Kılavuzun ilk kullanım bölümüne göre saat ayarı, **elektrik kablosunu prize takıp cihazın sigortasını açmakla** başlar. Ardından saat ekranında **"00.00"** belirir ve saat sembolü yanıp söner. Bu görüntü bir arıza değil; fırın saat ayarı bekliyor.

**2. Saati ayarla.** **Yukarı ve aşağı tuşlarıyla** günün saatini ayarla. Kılavuzun notu: tuşa **basılı tutarak** zamanı daha hızlı ilerletebilirsin.

**3. Onayla.** Kılavuzdaki şekilde gösterilen **onay tuşuna** dokunarak ayarı onayla. Fırın **stand-by ekranına** döner ve ekranda **yalnız günün saati** görünür. Kılavuza göre ekran bu durumdayken yalnız belirli tuşlar çalışır ve ayarlar menüsündeki işlemleri buradan yapabilirsin.

**4. Sonradan değiştirmek için fırını kapat.** Yaz ve kış saati değişiminde ya da saat kaydığında kılavuzun "Günün saati ayarı" bölümü geçerli. İlk kural: **günün saati ayarı sadece fırın kapalıyken yapılabilir.** Fırın kapalıyken ekranda saat sembolü görünene kadar kılavuzun bu adımda gösterdiği **tuşa kısa aralıklarla dokun;** saat alanı ve sembol yanıp sönmeye başlar.

**5. Yeni saati gir.** Saat alanı yanıp sönerken **yukarı ve aşağı tuşlarıyla** saati ayarla, basılı tutarak hızlandırabilirsin. Onay tuşuna dokunarak onayla; fırın stand-by ekranına döner.

**6. Saat ayarlanmıyorsa sebebe bak.** Kılavuzda saati kilitleyen üç durum var. Birincisi **fırının çalışıyor olması:** fırın herhangi bir fonksiyonda çalışırken saat ayarlanamaz. İkincisi **kurulu bir pişirme programı:** saat üzerinde **yarı otomatik ya da tam otomatik programlama** yapılmışsa saat ayarlanamaz. Kılavuza göre bu programı iptal etmek için **pişirme süresini sıfırlaman** gerekir ya da kılavuzun dediği gibi fırını kapatabilirsin. Üçüncüsü **tuş kilidi:** kilit devredeyken fırın düğmeleri kullanılamaz ve bir tuşa basınca ekranda **"Tuş kilidi aktif"** uyarısı çıkar. Kilidi kapatmak için ilgili tuşa **iki kez** dokun; kilit iptal olur ve sembol kaybolur.

**7. Elektrik kesintisinden sonra.** Kılavuza göre **elektrik kesintisinde ya da fiş çıkarılıp tekrar takıldığında saat ayarlama ekranı tekrar gelir.** Kısa süreli kesintilerde ayarlanmış günün saati korunur; bu durumda **saat değerini onaylayarak** ilerleyebilirsin. Uzun bir kesintiden sonra saati baştan ayarla. İki not daha: kesintide **yapılmış pişirme programı iptal olur,** yeniden programlaman gerekir; **tuş kilidi ise iptal olmaz.**

## Saat neden bu kadar önemli

Bu fırında saat, pişirmenin parçası. Kılavuza göre yarı otomatik modda fırının **ne kadar süre** çalışacağını, tam otomatik modda **pişirme süresi ve bitiş saatini** ayarlıyorsun; fırın, bitiş saatinden pişirme süresini çıkararak **başlangıç saatini kendisi hesaplıyor.** Saat yanlışsa yemek yanlış saatte pişer. Güvenlik notu da var: "sıcak tutma" dışındaki konumlarda ayarlanabilecek en uzun pişirme süresi **6 saatle** sınırlı.

Saati fırından bağımsız bir hatırlatıcı olarak da kullanabilirsin. Kılavuza göre **alarmın fırın fonksiyonları üzerinde etkisi yoktur;** süre en fazla **23 saat 59 dakika** olabilir, dolunca sesli uyarı verir ve herhangi bir tuşa basınca susar.

## Ne zaman servis

- Saat ayarlandığı hâlde fırın hiçbir fonksiyonda ısınmıyorsa: önce [Arçelik fırın ısınmıyor](/blog/arcelik-firin-isinmiyor/) yazısındaki kontroller
- Ekran hiç yanmıyor, fiş ve sigorta tamamsa
- Fırın kapalı, program ve tuş kilidi yokken de saat tuşlara tepki vermiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Dokunmatik panel, tuş kilidi, fiş ve sigorta sende; fırının gövdesinin içi, elektronik kart ve kablo bağlantıları yetkili servisin.

## Servisi aramadan önce kısa özet

1. Fırının modeli ne?
2. Ekranda sıfırlar, kilit sembolü ya da bir kod var mı?
3. Saat ayarı hangi adımda takılıyor?
4. Son zamanda elektrik kesintisi oldu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısında. Bil, gör, çağır.
