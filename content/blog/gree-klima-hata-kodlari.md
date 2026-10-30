---
title: "Gree klima hata kodları: E1, E6 ve diğer kodlar"
description: "Gree klimada E1, E6, E7 gibi kodlar ne demek? Gree'nin kendi sayfalarına göre kod anlamları, evde bakılacak yerler ve servise bırakılacak kodlar."
slug: "gree-klima-hata-kodlari"
date: "2026-10-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P04 #87). origin/main'de "gree-klima-hata-kodlari" yok; yakın: gree-klima-isitma-modu (mod), klima-ariza-kodlari (genel).
# Arama kanıtı: BOSLUK.md #87, Google otomatik tamamlama hl=tr: "klima hata kodları " → 7. sıra; web aramasında Gree kodları (E1, E6, H6) sık geçiyor.
# Belgeler (üretici Gree'nin kendi ABD sitesi greecomfort.com; Türkçe kılavuz bulunamadı, 3 aramada). curl -sL -A "Mozilla/5.0":
#  (G1) "GREE Mini-Split Error Codes: Understanding What They Mean & How to Resolve Them" (Source: GREE, 01-30-2024), HTML  https://www.greecomfort.com/news-and-events/understanding-gree-mini-split-error-codes/  md5 bkz. KAYNAK.md
#  (G2) "GREE Mini-Split E6 Error Code Troubleshooting: The Complete Guide", PDF  https://www.greecomfort.com/assets/documents/resource-materials/tech-tips/e6-error-code-troubleshooting-guide.pdf  md5 bkz. KAYNAK.md
# Sayfalar: G1 tek sayfa, başlıklar "High & Low-Pressure…", "Mode Conflicts and Overcurrent…", "Sensor Malfunctions…", "Defrost Mode and Power Module…", "Additional GRE Error Codes" · G2 s.2 (E6 tanımı), s.3 (en sık neden), s.7 (zamanlama: açılışta / 3-4 dk sonra), s.8 (kod sorun giderilmeden silinmez).
# BİLEREK YAZILMAYANLAR: H6 (iki belgede de geçmiyor; tamamlamada ve aramada sık geçen "H6 = iç fan motoru" iddiası üretici belgesinde doğrulanamadı) · E2, E4, E8, P serisi, L serisi kodlar (belgede yok) · multimetre/servis aleti adımları (servis işi) · üçüncü taraf kod listeleri.
# NOT: Belgeler ABD pazarı mini-split sayfalarıdır; Türkiye'de satılan modellerde kod listesi farklı olabilir. Yazıda açık uyarı var.
guide:
  difficulty: "Orta"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Klimanın kullanma kılavuzu", "Kâğıt ve kalem"]
steps:
  - "Ekrandaki kodu fotoğrafla, model etiketini de çek; kodun anlamı için önce kendi kılavuzuna bak."
  - "E1 ya da E3 görüyorsan iç ünite filtrelerinin kirli olup olmadığına bak; temizse servisi ara."
  - "E7 görüyorsan iç ve dış ünitenin aynı moda ayarlı olduğunu kontrol et."
  - "E6 görüyorsan iletişim hatası olduğunu bil; kodun açılışta mı yoksa birkaç dakika sonra mı geldiğini not et."
  - "E5, F1 ile F5 arası, H5, U3, L9 ve C5 kodlarını evde çözmeye çalışma; bunlar teknisyen işidir."
  - "H1 kodunun hata değil, buz çözme durum kodu olduğunu bil."
  - "Kod, model ve notlarını servise ilet; kod sorun giderilene kadar kendiliğinden silinmez."
faq:
  - q: "Gree klimada E6 hatası ne demek?"
    a: "Gree'nin yayımladığı E6 rehberine göre E6, iç ve dış ünitenin düzgün haberleşemediğini gösteren bir iletişim hatasıdır ve Gree'nin konut ürünlerinde en sık görülen kodlardan biridir. Rehber, E6'nın otomatik olarak ana kart değişimi anlamına gelmediğini, sık nedenin yanlış kablo ya da kablo ekinin olduğunu yazıyor."
  - q: "Gree klimada H6 hatası ne demek?"
    a: "İncelediğimiz Gree sayfalarında H6 diye bir kod geçmiyor, bu yüzden anlamını yazmıyoruz. İnternette H6 için dolaşan açıklamalar Gree'nin belgesinde doğrulanamadı. Ekranında H6 görüyorsan kendi modelinin kullanma kılavuzundaki arıza tablosuna bak ya da servise kodu ilet."
  - q: "E1 hatasını kendim giderebilir miyim?"
    a: "Gree, E1 ve E3 için ev sahibinin kirli filtreleri kontrol edebileceğini, filtreler sorunsuzsa nitelikli bir teknisyen çağırmak gerektiğini yazıyor. E1 yüksek basınç, E3 düşük basınç koruma kodudur; gaz şarjı ve basınç anahtarı kontrolü teknisyen işidir."
  - q: "E7 hatası nedir, evde çözülür mü?"
    a: "Gree'ye göre E7, iç ve dış ünite farklı modlara ayarlandığında çıkan mod çakışması kodudur. İki ünitenin istenen aynı moda ayarlandığından emin olmak yeterli olabilir; Gree bunu ev sahibinin çoğu zaman kendi başına halledebileceği bir durum olarak anlatıyor."
images:
  coverAlt: "Duvara asılı beyaz split klima iç ünitesi, yanında kodu gösteren sade bir ekran çizimi"
  steps:
    - "Klima ekranını telefonla fotoğraflayan beyaz eldivenli sade siluet el"
    - "Klima iç ünitesinin filtre kapağını kaldırıp kirli filtreyi gösteren beyaz eldivenli sade siluet el"
    - "Kumandada mod tuşuna basan beyaz eldivenli sade siluet el, yanında iç ve dış ünite çizimi"
    - "İç ünite ile dış üniteyi birbirine bağlayan kablo çizimi, ortasında kesik işareti"
    - "Elektrik kartı çizimi üzerinde uyarı üçgeni, yanında servis çantası simgesi"
    - "Dış ünitede karlı bir kanat ve buz çözme buharı çizimi"
    - "Not defterine kod ve model bilgisini yazan beyaz eldivenli sade siluet el"
---

Gree klimanın ekranında ya da ışıklarında bir kod belirdi: E1, E6, belki H6. İnternetteki listeler birbirini tutmuyor. Biz bu yazıda yalnız **Gree'nin kendi yayımladığı** iki sayfaya baktık: hata kodları rehberi ve E6 sorun giderme rehberi. Türkçe bir Gree kodu kılavuzuna ulaşamadık; bu iki sayfa Gree'nin ABD sitesinde (mini-split ürünleri için) yayımlanıyor. **Türkiye'de satılan modelde kod listesi farklı olabilir, kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Kısa özet:** E1 yüksek, E3 düşük basınç; E6 iç ve dış ünite arasında iletişim hatası; E7 mod çakışması; F1–F5 sensör arızaları. Evde yalnız filtre bakmak ve modları eşitlemek senin; gerisi teknisyenin.

## Gree'nin sayfalarındaki kodlar

| Kod | Gree'nin açıklaması | Evde yapılabilir mi? |
|---|---|---|
| E1 | Yüksek basınç (kirli eşanjör, tıkanıklık ya da fazla gaz olabilir) | Yalnız filtre bakımı |
| E3 | Düşük basınç | Yalnız filtre bakımı |
| E5 | Aşırı akım koruması, yüksek ya da dengesiz şebeke gerilimi | Hayır, teknisyen |
| E6 | İç ve dış ünite arası iletişim hatası | Hayır, teknisyen |
| E7 | İç ve dış ünite farklı modda, mod çakışması | Çoğu zaman evet |
| F1–F5 | İç ortam, iç evaporatör, dış ortam, dış boru ve deşarj sensörleri | Hayır, teknisyen |
| H1 | Buz çözme durum kodu | Beklenir |
| H5, U3, L9 | Güç modülü ve gerilim koruması | Hayır, teknisyen |
| C5 | Jumper (köprü) ile ilgili, kart değişiminden sonra | Hayır, teknisyen |

## Adım adım: kodu okuyup doğru yere gitmek

**1. Kodu fotoğrafla, modeli not et.** Harfle rakam panelde kolay karışır. İncelediğimiz belgeler ABD ürünlerine ait; bu yüzden kendi modelinin kılavuzundaki arıza tablosunu esas al. İç ünitenin etiketindeki model numarasını da fotoğrafla.

**2. E1 ve E3: önce filtreye bak.** Gree, E1'i yüksek, E3'ü düşük basınç koruması olarak anlatıyor. İkisinde de **ev sahibinin kirli filtreleri kontrol edebileceğini**, filtreler sorunsuzsa nitelikli bir teknisyen çağırması gerektiğini yazıyor. Filtre bakımı için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısına bak. Basınç anahtarı, gaz şarjı ve kaçak kontrolü servis işidir.

**3. E7: modları eşitle.** Gree'ye göre E7, iç ve dış ünite farklı modlara ayarlı olduğunda çıkar. İki ünitenin **aynı moda** ayarlandığından emin ol. Gree bunu ev sahibinin çoğu zaman kendi başına halledebileceği bir durum sayıyor. Mod mantığı için [Gree klima ısıtma modu](/blog/gree-klima-isitma-modu/) yazısı işine yarar.

**4. E6: iletişim hatası, zamanı not et.** Gree'nin E6 rehberi, bu kodun iç ve dış ünitenin düzgün haberleşmediği anlamına geldiğini ve konut ürünlerinde en sık görülen kodlardan biri olduğunu yazıyor. E6 **kendiliğinden ana kart arızası demek değil**; rehbere göre en sık neden yanlış kablo ya da kablo eki. Rehber ayrıca zamanlamayı ipucu sayıyor: kod sistem enerjilenir enerjilenmez geliyorsa iç üniteye, birkaç dakika (yaklaşık üç ila dört dakika) sonra geliyorsa dış üniteye bakılıyor. Sen bu zamanı not et; kablo ve gerilim ölçümü teknisyenin işi.

**5. Sensör, güç ve koruma kodları: servise bırak.** Gree, F1 ile F5 arasındaki sensör arızalarında genellikle teknisyenin parça değiştirmesi gerektiğini yazıyor. E5 aşırı akım koruması, H5 güç modülü (IPM) koruması, U3 DC bara gerilim düşüşü ve L9 güç koruması için de profesyonel değerlendirme gerekiyor. C5 ise kontrol kartı değiştiğinde jumper'ın yeni karta taşınması gerektiğini anlatan bir koddur.

**6. H1 hata değil.** Gree H1'i buz çözme modunda olduğunu bildiren bir durum kodu olarak tanımlıyor. Buz çözme düzgün çalışmıyorsa sensör ya da ısı değiştirici sorunu olabilir; bu durumda servis gerekir.

**7. Servise tam bilgiyle git.** Kodu, model numarasını ve kodun ne zaman geldiğini ilet. E6 rehberi bir şeyi net söylüyor: kod, altındaki sorun tam giderilmeden **silinmez ya da sıfırlanmaz**. Sorunu bulup gidermek gerekiyor.

## Kodu servise nasıl anlatmalı?

Servis çağırırken kodu söylemek yetmez; şu bilgiler işi hızlandırır: kodun harfi ve rakamı, klimanın hangi modda çalıştığı, kodun açılışta mı yoksa birkaç dakika sonra mı geldiği ve filtreye baktığın bilgisi. Gree'nin E6 rehberi de zamanlamanın hangi üniteden başlanacağını gösterdiğini söylüyor. Genel arıza belirtileri için [klima çalışmıyor](/blog/klima-calismiyor/) ve markadan bağımsız kod listesi için [klima arıza kodları](/blog/klima-ariza-kodlari/) yazılarına da bakabilirsin.

## H6 neden yok?

Aramalarda "Gree H6" çok geçiyor. İki Gree sayfasında da H6 kodu yok. Üçüncü taraf listelerdeki açıklamaları doğrulayamadığımız için yazmıyoruz; H6'yı kendi kılavuzundan kontrol et.

## Ne zaman servis

- E5, E6, F serisi, H5, U3, L9 ya da C5 görüyorsan
- E1 ya da E3 filtre temizliğinden sonra da geliyorsa
- Klima ne soğutuyor ne ısıtıyorsa ya da dış ünite hiç çalışmıyorsa

⛔ Kodu okumak, filtreyi temizlemek ve modu eşitlemek senin; kablo, gerilim ölçümü, gaz ve kart işleri yetkili servisin. Paneli açmaya çalışma.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
