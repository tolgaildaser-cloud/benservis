---
title: "Dikey süpürge çalışmıyor: Bosch ve Fakir kılavuzlarına göre"
description: "Şarjlı dikey süpürge hiç çalışmıyorsa sırayla bak: akü, şarj, ısınma, dolu hazne ve tıkanıklık. Bosch ve Fakir kılavuzlarındaki kontroller burada."
slug: "dikey-supurge-calismiyor"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P33 (YK #197 boşluk, BOSLUK.md #213). Slug origin/main'de yok. Yakın yazılar: supurge-calismiyor (kablolu süpürge), sarjli-supurge-sarj-tutmuyor (şarj tutmama), fakir-sarjli-supurge-cekmiyor ve bosch-sarjli-supurge-cekmiyor (emiş gücü) — "dikey süpürge hiç çalışmıyor" genel yazısı yok.
# Kaynak (#88): Bosch BBS61/BCS61/BSS61 kullanma kılavuzu 8001346487_B (s.73-74), Fakir Purevac Ultra kullanım kılavuzu 41005129 (s.65, 73-75). Alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · akü sökme/değiştirme, gövde açma, motor ve kart onarımı (servis işi) · marka dışı modeller için genelleme · "ışık kodu şu arıza" tablosu (yalnız Fakir belgesindeki üç ışık durumu özetlendi).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Orijinal şarj cihazı"]
steps:
  - "Aküyü yerine doğru oturt; cihazın göstergesinde hiçbir ışık yanmıyorsa ilk bakılacak yer burası."
  - "Aküyü cihazla gelen orijinal şarj cihazıyla şarj et ve şarj ışıklarının tamamlandığını bekle."
  - "Cihazı kapat, elektrikten ayır ve akü ile cihazın oda sıcaklığına gelmesini bekle."
  - "Toz haznesini boşalt ve filtreyi kuru olarak temizle."
  - "Başlıktaki ve borudaki tıkanıklığı, sarılmış saçı ve yabancı cismi temizle."
  - "Cihazı yeniden aç; göstergedeki ışık durumunu kılavuzdaki tabloyla karşılaştır."
  - "Hâlâ çalışmıyorsa yetkili servise bırak; aküyü ya da gövdeyi kendin açma."
faq:
  - q: "Dikey süpürgenin göstergesinde hiçbir ışık yanmıyorsa ne yapmalıyım?"
    a: "Bosch kılavuzu bu durumda iki neden sayıyor: akü doğru takılmamış olabilir ya da şarj edilmemiş olabilir. Önce aküyü yerine tam oturt, sonra orijinal şarj cihazıyla şarj et."
  - q: "Süpürge çalışırken kendiliğinden durdu, bozulmuş mu demektir?"
    a: "Her zaman değil. Fakir kılavuzuna göre iç sıcaklık çok yükselirse aşırı ısınma koruması devreye girer ve makine otomatik kapanır; gövde soğuyunca yeniden başlatılabilir. Ana ünite motoru yabancı cisimle tıkanırsa da makine kendini kapatır."
  - q: "Akü zamanla çalışma süresini kaybeder mi?"
    a: "Evet. Bosch kılavuzu, akü kapasitesinin ve çalışma süresinin zamanla azalmasını doğal yıpranma olarak anlatıyor. Aküyü yalnız 0 ile 45 derece arasında şarj etmek ve uzun süre tam dolu ya da tam boş saklamamak bu yıpranmayı geciktirir."
images:
  coverAlt: "Duvar yanında duran şarjlı dikey süpürge ve yanında şarj kablosu çizimi"
  steps:
    - "Aküyü cihazın içine tık sesiyle iten beyaz eldivenli sade siluet el"
    - "Şarj kablosunu cihazın şarj girişine takan beyaz eldivenli sade siluet el"
    - "Kapalı duran dikey süpürgenin yanında bekleyen beyaz eldivenli sade siluet el ve küçük saat simgesi"
    - "Toz haznesini çöp kutusunun üstünde boşaltan beyaz eldivenli sade siluet el"
    - "Süpürge başlığının altındaki fırçadan sarılı saçı çeken beyaz eldivenli sade siluet el"
    - "Açma kapama düğmesine basan beyaz eldivenli sade siluet el ve yanan gösterge"
    - "Dikey süpürgenin yanında telefon simgesi olan servis çağırma çizimi"
---

Düğmeye basıyorsun, dikey süpürge hiç ses vermiyor. Ya da bir süre çalışıp kendiliğinden duruyor. Bu yazıda iki üreticinin kendi kullanma kılavuzlarına baktık: Bosch BBS61, BCS61 ve BSS61 serisi ile Fakir Purevac Ultra. Aşağıdaki kontroller bu belgelerin "Arızaları giderme" ve "Sorun giderme" bölümlerinden geliyor. Kılavuzlarda olmayan bir adımı yazmadık.

> ⚠️ **Önce şu sınırı bil:** akü, motor ve kart onarımı servis işidir. Bosch kılavuzu cihazda onarımı yalnızca bunun eğitimini almış uzman personelin yapabileceğini yazıyor. Aküyü sökmeye, gövdeyi açmaya çalışma. Cihaz sıvı çektiyse ya da ısındıysa elektrikten ayır.

## Adım adım: dikey süpürge çalışmıyorsa

**1. Aküyü yerine doğru oturt.** Bosch kılavuzuna göre cihaz çalışmıyorsa ve akü durum göstergesinde hiçbir ışık yoksa nedenlerden biri aküdür: doğru takılmamış olabilir. Çözüm de aynı satırda yazıyor, aküyü doğru şekilde takmak.

**2. Orijinal şarj cihazıyla şarj et.** Aynı tabloda ikinci neden aküyü şarj etmemiş olman. Bosch aküyü yalnızca orijinal hızlı şarj cihazıyla şarj etmeni ve yalnızca 0 ile 45 derece arasında şarj etmeni istiyor. Fakir Purevac Ultra'da şarj cihazı pil takımındaki şarj girişine bağlanır, üç gösterge de mavi olunca şarj tamamdır ve şarj 4 ile 5 saat sürer. Fakir de orijinal 30 V 0,5 A şarj cihazını kullanmanı istiyor.

**3. Isındıysa soğumasını bekle.** Bosch'ta kırmızı akü durum göstergesi 10 saniye yanıyorsa akü ya da cihaz aşırı ısınmış ya da aşırı soğumuştur. Cihazı kapat, elektrik beslemesinden ayır ve oda sıcaklığına gelmesini bekle. Fakir'de uzun süre kullanım sonrası makine duruyorsa çözüm aynı: soğumaya bırak ve yeniden başlat.

**4. Toz haznesini boşalt.** Fakir tablosunda makine çalışmıyor satırının nedenlerinden biri "toz kabı tozla dolu". Çözüm tozu dökmek. Filtreyi de unutma; Bosch filtre ünitesinin sıvıyla kesinlikle temas etmemesini istiyor, yani kuru temizle.

**5. Tıkanıklığı ve sarılmış saçı temizle.** Fakir'e göre ana ünite motoru yabancı cisimle tıkanırsa makine otomatik kapanır; cismi çıkarıp tekrar başlat. Zemin fırçası tıkandığında makine kapanmaz ama pil takımındaki üç ışık yanıp söner. Makineyi kapatıp fırçadaki cisimleri çıkarmak gerekir. Bosch da başlık bloke olduysa hava kanalının başlıktan cihaza kadar tıkalı olup olmadığına bakmanı, hazneyi boşaltmanı ve filtreyi temizlemeni istiyor.

**6. Işık durumunu tabloyla karşılaştır.** Cihazı soğuduktan sonra yeniden aç. Fakir kılavuzunda pil takımındaki üç ışığın yanıp sönmesi aşırı ısınma, tıkanıklık ya da pil gücünün bitmesi anlamına gelebilir. Makine sıvı çektikten sonra kısa devre yapıp kapanırsa kılavuz cihazı tekrar tekrar açıp kapatmamanı söylüyor.

**7. Çözülmediyse servise bırak.** Tüm bunlar bittiği hâlde cihaz açılmıyorsa Bosch'un da Fakir'in de önerdiği yol aynı: yetkili servis. Fakir tablosunun başında ürünü yetkili servise göndermeden önce sorunları bu tabloyla çözmeye çalışabileceğini yazıyor.

## İki kılavuzun farkı

Bosch göstergede hiç ışık olmaması durumunu akü takılması ve şarj üzerinden anlatıyor. Fakir ise tabloyu makinenin nedenleri üzerinden kuruyor: düşük pil, dolu toz kabı, uzun kullanım. Fakir ayrıca pil takımındaki üç ışığın yanıp sönmesine bağlı ayrı durumlar listeliyor. Bosch ise tek bir ışık durumunu anlatıyor: akü durum göstergesinin 10 saniye yanması.

## Kısa sürede duruyorsa

Bazen cihaz açılıyor ama birkaç dakikada duruyor. Bu her zaman arıza değildir; çalışma süresi moda göre çok değişir. Bosch kılavuzu elektrikli zemin başlığı ve normal modda 18 V 2,5 Ah akü için en fazla 25 dakika, turbo modda en fazla 8 dakika veriyor. Fakir Purevac Ultra'da Eco modu 55 ile 60 dakika, Power modu ise 11 ile 15 dakika sürüyor. Yani turbo ya da Power modunda süpürgenin çabuk durması beklenen bir durum.

Fakir ayrıca pil gücü düşük ya da tamamen bitmişse pil takımındaki üç ışığın yanıp söneceğini yazıyor ve hemen şarj etmeni istiyor. Bosch ise akünün uzun süre tam dolu ya da tam boş saklanmamasını öneriyor.

## Yerleştirme istasyonlu modeller

Fakir tablosunda otomatik temizleme istasyonu için ayrı bir bölüm var. İstasyonda makine çalışmıyorsa nedenler şunlar: güç yok, toz torbası dolu ya da elektrikli süpürge yerinde değil. Çözümler sırayla gücü bağlamak, toz torbasını boşaltmak ve süpürgeyi yerine yerleştirmek. Bosch ise cihazın donanımına göre ana istasyonda, şarj kablosuyla ya da hızlı şarj cihazındaki akü ile şarj edilebileceğini yazıyor.

## Çalışıyor ama zayıfsa

Cihaz açılıyor ama çekmiyorsa sorun başka. Bosch emme gücü azaldığında filtre ve başlık tıkanıklığına bakmanı istiyor. Bu konuyu ayrıca [Bosch şarjlı süpürge çekmiyor](/blog/bosch-sarjli-supurge-cekmiyor/) ve [Fakir şarjlı süpürge çekmiyor](/blog/fakir-sarjli-supurge-cekmiyor/) yazılarında anlattık. Akü şarj tutmuyorsa [şarjlı süpürge şarj tutmuyor](/blog/sarjli-supurge-sarj-tutmuyor/) yazısına bak. Kablolu modelin açılmaması için [süpürge çalışmıyor](/blog/supurge-calismiyor/) yazısı var.

## Servis çağırmadan önce üç not

1. Süpürgenin marka ve modelini yaz.
2. Göstergede hangi ışığın yandığını ya da hiç yanmadığını not et.
3. Aküyü en son ne kadar şarj ettiğini ve cihazın ne yaparken durduğunu yaz.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
