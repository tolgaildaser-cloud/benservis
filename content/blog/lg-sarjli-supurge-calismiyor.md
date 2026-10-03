---
title: "LG şarjlı süpürge çalışmıyor (açılmıyor)"
description: "LG CordZero A9 şarjlı süpürge açılmıyorsa LG'nin sırası: pil seviyesi, pilin tık sesiyle takılması, adaptör ve kablo, şarj portundaki toz ve oda sıcaklığı."
slug: "lg-sarjli-supurge-calismiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Kaynak LG Türkiye'nin KENDİ alan adındaki resmî destek sayfası (www.lg.com/tr, Yardım Kütüphanesi); bu koşuda
#   curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, yönlendirme 0. Sayfa metni HTML içindeki "troubleshootDetailHTML" alanında base64 olarak duruyor; çözülüp düz metne çevrildi.
#   Web araması yalnız sayfa adresini bulmak için. Yerel: blog-taslaklar/kaynak-supurge-3eki/lg-cordzero-acilmiyor.html (+ .txt çözülmüş metin).
#  L1) "[LG CordZero A9] Açılmıyor"  https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153510075839/
#      HTML md5 a867dd6a1bb0faf297321d8bb3d08921 (sayfa dinamik; her indirmede değişebilir) · çözülmüş metin md5 f8ef004f045fdd0c49b976f0d33d1430
# Birebir: "Pil seviyesi düşükse, elektrikli süpürge açılmayabilir." · "Modele bağlı olarak, pilin tamamen şarj olması yaklaşık 3 ila 9 saat sürer" · Nedenler: "Pil seviyesi düşük." "Adaptör şarj
#   istasyonuna bağlı değil veya güç kablosu takılı değil." "Pil şarj portuna sıkışmış yabancı cisimler var." "Pil boşaldı veya uzun süre kullanıldı ve değiştirme zamanı geldi."
#   "Bir tık sesi duyana kadar pili doğru şekilde taktığınızdan emin olun ve kullanmadan önce şarj edin." · Gövde şarjı "(1) ... kapatmak ve şarj istasyonuna takmak için [Güç] düğmesine basın.
#   (2) ... üç ışığın tümü yanıp söner ve şarj olmaya başlar. (3) Şarj işlemi tamamlandığında tüm ışıklar yanar." · Pil şarjı "(1) Pili ... ayırmak için pilin her iki ucundaki düğmelere basın.
#   (2) Pili, şarj istasyonunun şekline göre takın." · "Elektrikli süpürgeyi iç mekanda şarj edin. 5°C'nin altındaki sıcaklıklarda şarj edilirse şarj mümkün olmayabilir." · "5°C'nin altındaki veya
#   38°C'nin üzerindeki sıcaklıklarda uzun süre kullanılırsa pil ömrü kısalabilir." · "Adaptörü şarj istasyonunun arkasına takabilirsiniz" · "Kuru bir havluyla silin veya kalıntıları temizlemek
#   için bir fırça kullanın. Hasar görebileceğinden şarj portuna çok fazla kuvvet uygulamamaya dikkat edin." · "Pil tam olarak şarj edilmiş olsa bile, elektrikli süpürgenin kullanım süresi çok
#   kısaysa, pil ömrünün sonuna gelmiştir." · "LG Electronics Çağrı Merkezi 444 6 543" · "Bu kılavuz tüm modeller için oluşturulmuştur"
# BİLEREK YAZILMAYANLAR: pil ömrü yıl/döngü rakamı (sayfada yok) · pilin servis dışı değişimi önerisi (sayfa yalnız "değiştirin" diyor; pil takılıp çıkarılan parça, satın alma kanalı yazılmadı) ·
#   model genellemesi (sayfanın "tüm modeller için" notu aynen aktarıldı) · fiyat (#46).
# Alıntı denetim tablosu: lg-sarjli-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (sonrasında şarj süresi)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru havlu", "Yumuşak fırça"]
steps:
  - "Pil durumu göstergesine bak; tek ışık yanıyorsa ya da hiç yanmıyorsa süpürgeyi şarj et."
  - "Pili, bir tık sesi duyana kadar doğru şekilde tak."
  - "Adaptörün şarj istasyonunun arkasına, güç kablosunun adaptöre doğru takılı olduğunu kontrol et."
  - "Süpürgeyi Güç düğmesiyle kapat ve şarj istasyonuna tak; üç ışığın yanıp sönmeye başladığını gör."
  - "Gerekirse pili iki ucundaki düğmelere basarak çıkar ve şarj istasyonuna ayrı tak."
  - "Şarj istasyonundaki ve süpürgedeki şarj portunu kuru havlu ya da fırçayla temizle; kuvvet uygulama."
  - "Süpürgeyi iç mekânda şarj et; 5°C altında şarj olmayabilir."
faq:
  - q: "LG CordZero süpürgem Güç düğmesine basınca açılmıyor, neden?"
    a: "LG'nin destek sayfasına göre pil seviyesi düşükse süpürge açılmayabilir. Sayfadaki diğer nedenler adaptörün şarj istasyonuna bağlı olmaması ya da güç kablosunun takılı olmaması, pil şarj portunda yabancı cisim bulunması ve pilin ömrünü doldurmuş olması. Önce pilin tık sesiyle takıldığından emin olup süpürgeyi şarj etmen isteniyor."
  - q: "LG şarjlı süpürgenin şarjı ne kadar sürer?"
    a: "LG'ye göre modele bağlı olarak pilin tamamen şarj olması yaklaşık 3 ila 9 saat sürüyor. Gövdeyle şarjda üç ışık yanıp söner ve şarj başlar; şarj tamamlanınca tüm ışıklar yanar."
  - q: "Soğuk bir yerde şarj etmek sorun olur mu?"
    a: "Evet. LG süpürgenin iç mekânda şarj edilmesini istiyor; 5°C'nin altında şarj edilirse şarj mümkün olmayabilir. Ayrıca 5°C'nin altında ya da 38°C'nin üzerinde uzun süre kullanılırsa pil ömrü kısalabilir."
  - q: "Pil tam dolu ama süpürge çok çabuk bitiyor, ne yapmalıyım?"
    a: "LG'nin sayfasına göre piller sarf malzemesidir ve kullanım ömürleri sınırlıdır. Pil tam şarjlı olduğu hâlde kullanım süresi çok kısaysa pil ömrünün sonuna gelmiştir ve değiştirilmesi gerekir. Sorun sürerse LG Electronics Çağrı Merkezi 444 6 543 aranabilir."
images:
  coverAlt: "Duvara monte şarj istasyonunda duran kablosuz dikey süpürge ve pil göstergesindeki ışıklar"
---

Süpürgeyi istasyondan alıp Güç düğmesine basıyorsun, hiçbir şey olmuyor. LG Türkiye'nin destek kütüphanesinde bu durum için ayrı bir sayfa var: **"[LG CordZero A9] Açılmıyor"**. Sayfanın ilk cümlesi nedeni de söylüyor: **"Pil seviyesi düşükse, elektrikli süpürge açılmayabilir."** Kalan nedenler pilin takılışı, adaptör ve şarj portu; hepsi evde kontrol edilebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Pil göstergesine bak → pili tık sesiyle tak → adaptör ve kabloyu kontrol et → süpürgeyi ya da pili istasyonda şarj et → şarj portunu kuru havluyla temizle → iç mekânda şarj et. Pil doluyken süre çok kısaysa pil ömrünü doldurmuştur.

## Adım adım: evde denenecekler

**1. Pil göstergesine bak.** LG'nin ilk sorusu: süpürge pil bittiği için mi durdu, **pil durumu LED göstergesinde yalnızca bir ışık mı yanıyor?** Öyleyse önce şarj. LG'ye göre modele bağlı olarak pilin tamamen dolması **yaklaşık 3 ila 9 saat** sürüyor; bu yüzden önceden şarj etmen isteniyor.

**2. Pili tık sesiyle tak.** Sayfanın çözümü: **bir tık sesi duyana kadar pili doğru şekilde taktığından emin ol** ve kullanmadan önce şarj et. Sayfa pilin yanlış takılıp takılmadığını kontrol etmeni ayrıca istiyor.

**3. Adaptörü ve kabloyu kontrol et.** Pil gösterge ışığı hiç yanmıyorsa LG'nin sorusu **adaptör şarj istasyonuna, güç kablosu da adaptöre takılı mı?** Sayfaya göre adaptör ya da güç kablosu istasyondan çıkmışsa ve güç yoksa süpürge **düzgün şarj olmaz.** Adaptör **şarj istasyonunun arkasına** takılıyor; oradaki bağlantıyı da kontrol et.

**4. Gövdeyle şarj et.** LG'nin sırası: süpürgeyi kapatmak ve şarj istasyonuna takmak için **[Güç] düğmesine bas.** Pil göstergesinde **üç ışığın tümü yanıp söner** ve şarj başlar; şarj tamamlanınca **tüm ışıklar yanar.**

**5. Gerekirse pili ayrı şarj et.** Pili çıkarmak için **pilin her iki ucundaki düğmelere bas**, pili şarj istasyonunun şekline göre tak. Şarj başlayınca pil gösterge ışığı yanıp söner, tamamlanınca tüm ışıklar yanar.

**6. Şarj portunu temizle.** Sayfaya göre şarj istasyonunun ya da süpürgenin şarj portunda **toz veya saç gibi yabancı cisimler** varsa şarj cihazı algılanmayabilir. **Kuru bir havluyla** sil ya da kalıntıları **bir fırçayla** temizle. LG'nin uyarısı: port hasar görebileceği için **çok fazla kuvvet uygulama.**

**7. İç mekânda şarj et.** LG süpürgenin **iç mekânda** şarj edilmesini istiyor: **5°C'nin altında** şarj edilirse şarj mümkün olmayabilir. Ayrıca 5°C'nin altında ya da 38°C'nin üzerinde uzun süre kullanmak pil ömrünü kısaltabilir.

## Pil ömrünü doldurduysa

LG'nin sayfası pili **sarf malzemesi** olarak tanımlıyor: kullanım ömrü sınırlıdır ve belirli bir kullanımdan sonra değiştirilmesi gerekir. Ölçüt de verilmiş: **pil tam şarj edilmiş olsa bile kullanım süresi çok kısaysa, pil ömrünün sonuna gelmiştir.** LG sayfanın sonunda bu rehberin **tüm modeller için** hazırlandığını, görsellerin ve içeriğin senin ürününden farklı olabileceğini de belirtiyor.

Markadan bağımsız kontrol listeleri için [süpürge çalışmıyor](/blog/supurge-calismiyor/) ve [şarjlı dikey süpürge şarj tutmuyor](/blog/sarjli-supurge-sarj-tutmuyor/) yazılarına bakabilirsin.

## Ne zaman servis

- Pil tık sesiyle takılı, adaptör ve kablo bağlı, port temiz olduğu hâlde **göstergede hiç ışık yanmıyorsa.**
- LG'nin önerisi: sorun devam ederse **LG Electronics Çağrı Merkezi 444 6 543** ile iletişime geç.

⛔ **Kendin-çöz sınırı burada biter.** Pilin takılışı, şarj ve port temizliği kullanıcıya; şarj devresi, motor ve elektronik servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (A9 ile başlayan kod, ürün etiketinde)?
2. Pil göstergesinde kaç ışık yanıyor, şarjda yanıp sönüyor mu?
3. Pil tık sesiyle yerine oturuyor mu?
4. Süpürgeyi nerede şarj ediyorsun (balkon, soğuk oda)?
5. Süpürge en son ne zaman tam şarj edildi, şarj ne kadar sürdü?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
