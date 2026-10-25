---
title: "Zanussi çamaşır makinesi resetleme nasıl yapılır"
description: "Zanussi çamaşır makinesinde program düğmesinin Reset konumu ya da ON/OFF tuşuyla program iptal edilir. Kılavuza göre resetleme, kilit ve gecikme iptali."
slug: "zanussi-camasir-makinesi-resetleme"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W3). origin/main 08904bf'de "zanussi" geçen slug/başlık/gövde YOK.
# GSC: "zanussi" satırı yok. OT (bu koşu): "zanussi çamaşır makinesi r" → 1. "zanussi çamaşır makinesi resetleme" (tek öneri); "zanussi çamaşır makinesi reset" → 1.; "zanussi çamaşır makinesi" → 7.
# Belge zinciri (#88): zanussi.co.uk/support/user-manuals (model araması, /api/usermanual/search 200) → electrolux.bynder.com PDF, HTTP 200.
#  (A) Zanussi ZWF845B4PW User Manual EN, 32 s., md5 cb7f26377d9c9ea726117d6042958425
#  (B) Zanussi ZWF143A2DG User Manual EN, 32 s., md5 b7752d096bfaf6ebba8de51c03b96410 ("Reset" konumu s.20)
# İngilizce baskı, alıntılar çevrildi, orijinali KAYNAK.md'de.
# Belgede fabrika ayarına dönüş YOK; "Reset" yalnız B'deki program düğmesi konumu (program iptali).
# BİLEREK YAZILMAYANLAR: servis test modu / gizli tuş kombinasyonu · kart sıfırlama · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Yalnız bir seçeneği değiştireceksen başlat/duraklat tuşuyla duraklat."
  - "Programı iptal etmek için ON/OFF tuşuyla ya da program düğmesini kapalı konuma çevirerek makineyi kapat."
  - "Program düğmesinde Reset konumu varsa düğmeyi oraya çevir ve ekranda çizgiler çıkana kadar bekle."
  - "Ekranda çocuk kilidi simgesi varsa kilidi kaldır."
  - "Gecikmeli başlatma kurduysan gecikmeyi iptal et."
  - "Tamburda su kaldıysa boşaltma programını çalıştır."
  - "Deterjan gözünü kontrol edip yeni programı seç ve başlat."
faq:
  - q: "Zanussi çamaşır makinesinde reset tuşu var mı?"
    a: "Ayrı bir reset tuşu yok. Zanussi ZWF143A2DG kılavuzunda program düğmesinde Reset konumu var: düğmeyi bu konuma çevirip 1 saniye beklediğinde ekranda çizgiler çıkar ve yeni program kurabilirsin. ZWF845B4PW'de karşılığı program düğmesini kapalı konuma çevirmek."
  - q: "Resetleme fabrika ayarlarına döndürür mü?"
    a: "Hayır. Kılavuzlardaki Reset ve iptal adımları yalnız çalışan programı iptal eder. Fabrika ayarına dönüş adımı belgede yok. Kalıcı ekstra durulama ya da sesli uyarı gibi ayarlar kılavuzdaki tuş kombinasyonlarıyla ayrıca açılıp kapanıyor."
  - q: "İptalden sonra makine suyu boşaltır mı?"
    a: "ZWF845B4PW kılavuzuna göre yeni program başlamadan önce makine suyu boşaltabilir; deterjanın gözde durduğunu kontrol etmen öneriliyor. ZWF143A2DG'de su alma başladıysa su ve deterjan boşaltılmaz, yeni program bu suyla devam eder."
  - q: "Reset konumunda bırakırsam ne olur?"
    a: "ZWF143A2DG kılavuzuna göre program düğmesi Reset konumuna çevrilirse makine 30 saniye içinde kendiliğinden kapanır. Yeni program kurmak için düğmeyi istediğin programa çevir."
  - q: "Tuşlar tepki vermiyor, makine bozuldu mu?"
    a: "Önce çocuk kilidine bak. Kilit açıkken tuşlar ve program düğmesi kilitlenir. ZWF143A2DG'de Easy Iron tuşunu kilit simgesi sönene kadar basılı tutarak kilidi kaldırırsın. ZWF845B4PW'de kılavuzda gösterilen iki tuşa aynı anda basman gerekiyor."
images:
  coverAlt: "Çevirmeli program düğmesi ve dokunmatik tuşları görünen çamaşır makinesi kontrol paneli"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda tambur ve içindeki çamaşır"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
---

Zanussi çamaşır makinen yanlış programda kaldıysa, tuşlar tepki vermiyorsa ya da programı baştan kurmak istiyorsan aradığın şey makineyi temiz bir başlangıca döndürmek. Zanussi'nin ZWF845B4PW ve ZWF143A2DG kullanım kılavuzlarında (kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) ayrı bir reset tuşu yok. ZWF143A2DG'nin program düğmesinde bir **Reset** konumu var; iki modelde de ON/OFF ya da program düğmesiyle iptal yolu anlatılıyor. Senin modelinde tuşlar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Seçenek değiştireceksen duraklat. Programı iptal etmek için makineyi kapatıp aç ya da düğmeyi Reset konumuna çevir. Çocuk kilidini ve gecikmeyi kaldır, su kaldıysa boşalt, sonra yeni programı başlat.

## Hangi durumda hangi yol

| Durum | Kılavuzdaki karşılığı | Sonuç |
|---|---|---|
| **Seçenek değiştirmek** | Başlat/duraklat | Program bekler, bazı seçenekler değişir |
| **Programı iptal etmek** | ON/OFF ya da düğme kapalı konumda | Program iptal, makine kapanır |
| **Hızlı sıfırlama (ZWF143A2DG)** | Düğme Reset konumunda | Ekranda çizgiler, yeni program kurulur |
| **Tuşlar kilitli** | Çocuk kilidini kaldır | Panel yeniden çalışır |
| **Makine geç başlayacak** | Gecikmeyi iptal et | Program hemen başlatılabilir |

## Adım adım: Zanussi çamaşır makinesini resetlemek

**1. Önce duraklatmayı dene.** Küçük bir değişiklik için iptal gerekmez. Kılavuza göre başlat/duraklat tuşuna basınca tuşun göstergesi yanıp söner; seçeneği değiştirip yeniden basınca program sürer. Kılavuz, program çalışırken **yalnız bazı** seçeneklerin değiştirilebildiğini hatırlatıyor.

**2. Programı iptal et.** ZWF143A2DG kılavuzuna göre ON/OFF tuşuna basmak programı iptal eder ve makineyi kapatır; tuşa yeniden basınca makine açılır. ZWF845B4PW'de aynı iş program düğmesini kapalı konuma çevirerek yapılır; düğmeyi yeniden bir programa çevirince makine açılır ve yeni program kurabilirsin.

**3. Reset konumunu kullan.** ZWF143A2DG'de kılavuz ikinci bir iptal yolu veriyor: program düğmesini **Reset** konumuna çevir, **1 saniye** bekle. Ekranda üç çizgi görünür; artık yeni bir program kurabilirsin. Düğmeyi Reset'te bırakırsan makine 30 saniye içinde kendiliğinden kapanır.

**4. Çocuk kilidini kaldır.** Tuşlar ve düğme tepkisizse çocuk kilidi açık olabilir; ekranda kilit simgesi yanar. ZWF143A2DG'de **Easy Iron** tuşunu simge sönene kadar basılı tut. Kılavuz, bu modelin makineyi kapatınca kilide geri döndüğünü ve açılıştan sonraki birkaç saniye kilidin kullanılamayabileceğini yazıyor. ZWF845B4PW'de kılavuzda gösterilen iki tuşa aynı anda, gösterge sönene kadar basarsın.

**5. Gecikmeyi iptal et.** Makine çalışmıyor ama ekranda bir süre sayıyorsa gecikmeli başlatma kuruludur. ZWF845B4PW kılavuzuna göre başlat/duraklat ile duraklat, gecikme tuşuna ekranda sıfır görünene kadar bas, sonra başlat/duraklat ile programı hemen başlat. ZWF143A2DG'de duraklatıp gecikme tuşuna gecikme göstergesi sönene kadar basarsın.

**6. Kalan suyu boşalt.** İptalden sonra tamburda su kalabilir. ZWF845B4PW kılavuzu yeni program başlamadan önce makinenin suyu boşaltabileceğini söylüyor. Su kendiliğinden gitmiyorsa program düğmesinden **Spin/Drain** (sıkma/boşaltma) programını seç ve başlat. Rinse Hold ya da Night seçeneğiyle biten programlarda da kapak, su boşalana kadar kilitli kalır.

**7. Deterjanı kontrol et ve yeniden başlat.** ZWF845B4PW kılavuzu, makine iptalden sonra suyu boşalttıysa deterjanın hâlâ gözde olup olmadığına bakmanı, yoksa yeniden koymanı istiyor. ZWF143A2DG'de su alma başladıktan sonra iptal edersen su ve deterjan israf edilmez, yeni program aynı suyla başlar. Programı seç, başlat/duraklat tuşuna bas. Kılavuza göre başlat/duraklat tuşunun ışığı sönük ve yanıp sönmüyorsa (örneğin düğme yanlış konumdaysa) program başlamaz; düğmenin seçtiğin programın üzerinde durduğunu kontrol et.

## Makine kendiliğinden kapandıysa

Bu bir arıza değil, bekleme işlevi. ZWF143A2DG kılavuzuna göre program bittikten 5 dakika sonra ya da program başlatılmazsa makine enerji tasarrufu için kendiliğinden kapanır. ON/OFF tuşuyla yeniden açtığında ekran önceki programın sonunu gösterir; yeni program için düğmeyi çevirmen yeterli. ZWF845B4PW'de bekleme durumunda bütün göstergeler söner; herhangi bir seçenek tuşuna basınca makine uyanır. Sesli uyarıları kapatıp açmak da ayrı bir ayar: ZWF143A2DG'de Temp ve Spin tuşlarına birlikte yaklaşık 2 saniye basılır.

## Kod varken resetleme

Ekranda bir alarm kodu varsa kılavuz, kodun anlamına göre kontrolü yaptıktan sonra makineyi kapatıp açmanı istiyor; tabloda olmayan kodlarda da ilk adım aynı. Kontrolden sonra makine açılınca program kaldığı yerden sürer. Kod tekrar çıkıyorsa resetlemek çözüm değil. Kodların listesi [Zanussi çamaşır makinesi arıza kodları](/blog/zanussi-camasir-makinesi-ariza-kodlari/) yazısında.

## Ne zaman servis

- İptalden sonra makine hiç açılmıyorsa
- Çocuk kilidi kalktığı hâlde tuşlar tepki vermiyorsa
- Boşaltma programına rağmen su tamburda kalıyorsa
- Aynı kod kapatıp açtıktan sonra yine çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Duraklatma, iptal, Reset konumu, çocuk kilidi, gecikme ve boşaltma sende; elektronik kart, kapak kilidi ve tahliye devresi Zanussi yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Program hangi aşamada takıldı?
3. Ekranda kilit simgesi ya da bir kod var mı?
4. Tamburda su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kapak açılmıyorsa [Zanussi çamaşır makinesi kapağı açılmıyor](/blog/zanussi-camasir-makinesi-kapagi-acilmiyor/), makine hiç çalışmıyorsa [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bak. Bil, gör, çağır.
