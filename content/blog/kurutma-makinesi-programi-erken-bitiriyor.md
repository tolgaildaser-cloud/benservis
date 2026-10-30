---
title: "Kurutma makinesi programı erken bitiriyor: kılavuza göre"
description: "Kurutma makinesi programı erken bitiriyor, çamaşır nemli kalıyor. Arçelik ve Samsung kılavuzlarına göre program, kuruluk seviyesi, yük, filtre ve sensör."
slug: "kurutma-makinesi-programi-erken-bitiriyor"
date: "2026-10-30"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları 2. dalga, P18 / BOSLUK.md #37. Slug origin/main'de yok (ls-tree). Genel yazı yok; yakın: kurutma-makinesi-kurutmuyor (kurutmama), kurutma-makinesi-isitmiyor, kurutma-makinesi-filtre-ve-kondenser-temizligi. Bu yazı "program bitti ama çamaşır nemli" belirtisine odaklanır; "bitmeden durma" ayrı yazıda (bu paket: kurutma-makinesi-programi-bitmeden-duruyor).
# Konu kanıtı: Google otomatik tamamlama "kurutma makinesi program" #3 (BOSLUK.md #37). GSC kanıt sayılmadı.
# Belgeler (#88/#89), curl -sL -A "Mozilla/5.0", HTTP 200, ham dosyalar _kaynak/kurutma-makinesi-programi-erken-bitiriyor/:
#  (AR) Arçelik 3886 KT çamaşır kurutma makinesi kullanma kılavuzu, 36 s., md5 62fe5d46146e92058583492074c9d509 — s.19, 21, 22, 26, 30
#  (SA) Samsung DV5000T kurutma makinesi kullanıcı kılavuzu DC68-04209V-02 TR, 68 s., md5 af744046e6c457b037ef2e270349d072 — s.33, 34, 37, 39, 51
#  Sayfa = PDF sayfası.
# BİLEREK YAZILMAYANLAR: sensör değişimi ya da söküm (belgede yok, servis işi) · Samsung'da sensör temizliği (kılavuzda yok) · program süreleri (ayrı yazı) · fiyat (#46).
# Alıntı denetimi: kurutma-makinesi-programi-erken-bitiriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu", "Sirkeyle nemlendirilmiş yumuşak bez", "Elektrikli süpürge"]
steps:
  - "Seçtiğin programın çamaşırı nemli bırakmak için tasarlanıp tasarlanmadığına bak."
  - "Kuruluk seviyesini yükselt ya da dolap kuruluğu gibi daha kuru bir program seç."
  - "Çamaşırın bakım etiketine bak; gerekirse programın sonuna zaman programı ekle."
  - "Yükü kontrol et: tambur ne aşırı dolu ne de neredeyse boş olsun."
  - "Tiftik ya da lif filtresini ve varsa filtre çekmecesini temizle."
  - "Arçelik'te nem sensörünün metal yüzeylerini sirkeli bezle sil."
  - "Çamaşırı yıkama makinesinde daha yüksek devirde sık; sorun sürerse servisi ara."
faq:
  - q: "Kurutma makinesi kalan süreyi neden değiştiriyor?"
    a: "Arçelik kılavuzu ekranda görünen sürenin programın bitmesi için kalan zamanı gösterdiğini ve çamaşırın nemine göre değiştiğini yazıyor. Samsung da tam kurutma süresinin yükün nemine göre değiştiğini söylüyor. Yani süre sabit bir söz değil, bir tahmin."
  - q: "Ütü kuruluğu programı çamaşırı neden nemli bırakıyor?"
    a: "Bu program özellikle öyle tasarlanmış. Arçelik'te ütülenecek çamaşırlar hafif nemli kurutuluyor, Samsung'un Ütü Kuruluğu programı da ütülemeyi kolaylaştırmak için nemli bir durumda bitiriyor. Çamaşırı dolaba koyacaksan Dolap Kuruluğu ya da daha kuru bir seviye seç."
  - q: "Zaman programı seçince makine ne zaman duruyor?"
    a: "Arçelik'te zaman programı, çamaşır kuruluğundan bağımsız olarak ayarlanan süre kadar kurutuyor. Süre dolunca program, çamaşır nemli bile olsa biter."
  - q: "Nem sensörünü her zaman ben mi temizleyeceğim?"
    a: "Arçelik kılavuzu sensörün metal yüzeylerini yılda 4 kez, sirkeyle ıslatılmış yumuşak bezle silmeni istiyor. Metal alet ve çözücü kullanma. Samsung kılavuzunda böyle bir adım yok."
images:
  coverAlt: "Kapağı açık bir kurutma makinesinde hâlâ nemli duran çamaşırların sade çizimi"
  steps:
    - "Program düğmesinde ütü kuruluğu konumunu gösteren beyaz eldivenli sade siluet el"
    - "Kuruluk seviyesi tuşuna basan beyaz eldivenli sade siluet el ve panelde üç çubuk"
    - "Bir gömleğin bakım etiketini inceleyen beyaz eldivenli sade siluet el"
    - "Yarısı dolu tambur ve yanında çok dolu bir tamburun karşılaştırması"
    - "Tiftik filtresini çekip çıkaran beyaz eldivenli sade siluet el"
    - "Tamburun içindeki metal sensör şeritlerini bezle silen beyaz eldivenli sade siluet el"
    - "Çamaşır makinesinin hız düğmesini yüksek konuma çeviren beyaz eldivenli sade siluet el"
---

Program bitti, kapağı açtın, çamaşır hâlâ nemli. İlk akla gelen "makine bozuldu" oluyor. Oysa Arçelik 3886 KT ve Samsung DV5000T kılavuzlarına bakınca çoğu zaman sebep daha sade: seçilen program, kuruluk seviyesi, yük ya da tıkalı filtre. Bu yazıdaki her adım bu iki belgeden geliyor. Bir yerde iki üretici farklıysa onu da yazdık.

> ⚠️ **Sıcak tambur:** Program ortasında çamaşıra el atarken tambur yüzeyi ve içindeki hava sıcaktır. Arçelik bunu açıkça uyarıyor. Sensör temizliğinden önce makinenin soğumasını bekle ve temizlik için çözücü ya da temizleyici kullanma: Arçelik yangın ve patlama tehlikesi nedeniyle bunu yasaklıyor.

## Önce bilmen gereken: süre bir tahmin

Arçelik ekranda görünen sürenin programın bitmesi için kalan zamanı gösterdiğini, bunun çamaşırın nemine göre değiştiğini yazıyor. Samsung da tam kurutma süresinin yükün nemine göre değiştiğini söylüyor. Kalan sürenin beklenenden hızlı azalması ya da program süresinin kısa çıkması, tek başına arıza belirtisi değil. Asıl ölçü, çamaşırın program sonunda ne kadar kuru olduğu.

## Süre farkı normal olabilir

Arçelik 3886 KT'nin program tablosunda sürelerin ne kadar ayrıştığı görülüyor. Pamuklu Dolap Kuruluğu programı 8 kg yükte 174 dakika, Pamuklu Ütü Kuruluğu 139 dakika, Sentetik Ütü Kuruluğu ise 59 dakika olarak yazılmış. Yani aynı pamuklu yükü Ütü Kuruluğu'nda kurutursan makine dolap kuruluğuna göre çok daha önce durur ve çamaşır bilerek nemli kalır. Aynı tabloda sıkma devri de var: kılavuz, kurutma programlarından iyi sonuç için çamaşırın yıkama makinesinde önerilen devirde sıkılmış olmasını istiyor.

## Adım adım: program erken bitiyorsa

**1. Programın amacına bak.** Bazı programlar çamaşırı bilerek nemli bırakır. Arçelik'in Pamuklu Ütü Kuruluğu ve Sentetik Ütü Kuruluğu programları çamaşırı ütü kolaylığı için hafif nemli kurutuyor. Samsung'un Ütü Kuruluğu programı da ütülemeyi kolaylaştırmak için nemli bir durumda bitiriyor. Arçelik ayrıca program sonunda gömleklerde çok az da olsa nem kalabileceğini yazıyor. Çamaşırı dolaba koyacaksan bu programları seçme.

**2. Kuruluk seviyesini yükselt.** Samsung kuruluğu üç seviyede ayarlatıyor. Seviye 1 serilerek ya da asılarak kurutulan öğeleri kısmen kurutmak için, seviye 3 daha büyük ya da hacimli yükler için. Seviye düğmesi yalnız Gömlek, Pamuklu, Karışık Yükleme ve Sentetik programlarında çalışıyor. Arçelik'te aynı iş program seçimiyle yapılıyor: Pamuklu Dolap Kuruluğu, Dolap Kuruluğu + ya da Ekstra Kuru.

**3. Bakım etiketine ve zaman programına bak.** Arçelik, kurutma sonunda çamaşırlar nemli çıkıyorsa çamaşır cinsine uygun programı seçmeni ya da ilave olarak zaman programlarını kullanmanı öneriyor. Dikkat: Arçelik'te zaman programı çamaşır kuruluğundan bağımsız olarak ayarlanan süre kadar kurutur. Süre bitince biter.

**4. Yükü ayarla.** Samsung'un sorun giderme tablosunda "yük kurumadan önce kapanıyor" satırı var. Yük çok azsa daha fazla öğe eklemeni, çok fazlaysa öğeleri çıkarmanı istiyor. Arçelik de aşırı çamaşır yüklenmesini nemli çıkmanın nedenlerinden sayıyor. Tambura tek seferde bir yıkama yükü koy.

**5. Filtreleri temizle.** Arçelik'e göre lif filtresinin ve filtre çekmecesinin tıkanması çamaşırın nemli çıkmasına yol açabilir. Lif filtresini ılık suyla yıka, filtre çekmecesindeki süngeri temizle. Samsung her yükten önce tiftik filtresini temizlemeni istiyor. Ayrıntı için: [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/).

**6. Nem sensörünü sil (Arçelik).** Arçelik kurutma makinelerinde çamaşırın kuru olup olmadığını algılayan nem sensörleri var. Kılavuz sensörün metal yüzeylerini sirkeyle ıslatılmış yumuşak bezle silmeni, makine sıcaksa önce soğumasını beklemeni, yılda 4 kez temizlemeni istiyor. Metal alet kullanma. Samsung kılavuzunda bu adım yok.

**7. Sıkmayı artır, sonra servise bak.** Arçelik yeterince sıkılmamış çamaşırın da nemli çıkmasına yol açabileceğini ve çamaşır makinesinde daha yüksek devirde sıkma yapmanı yazıyor. Tüm bunlara rağmen çamaşır sürekli nemli çıkıyorsa kılavuzların ortak sonucu aynı: servis. Kendi başına onarmaya kalkma.

## Kısa karşılaştırma

| Ne yapıldı | Arçelik 3886 KT | Samsung DV5000T |
|---|---|---|
| Nemli bırakan program | Ütü Kuruluğu programları | Ütü Kuruluğu programı |
| Kuruluk ayarı | Program seçimiyle | Kuruluk seviyesi 1–3 |
| Sabit süre | Zaman programları | Süre seçeneği |
| Sensör temizliği | Yılda 4 kez | Kılavuzda yok |

## Bu hâlâ sürüyorsa

Karar verirken ekrandaki süreye değil, program sonunda çamaşırın durumuna bak. Hâlâ nemliyse Arçelik'in 10 dakikadan 160 dakikaya kadar zaman programlarından birini ya da Samsung'un 30, 60, 90, 120 ve 150 dakikalık Kurutma Süresi seçeneklerini kullanabilirsin.

Ekranda su tankı uyarısı yanıyorsa bak: [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/). Makine hiç kurutmuyorsa: [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/).

## Servis çağırmadan önce üç dakika

1. Hangi programı ve hangi kuruluk seviyesini seçtin?
2. Filtreler ve varsa filtre çekmecesi temiz mi?
3. Yük aşırı mıydı, çamaşırlar yeterince sıkılmış mıydı?

Bunlar tamamsa yetkili servis zamanı. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
