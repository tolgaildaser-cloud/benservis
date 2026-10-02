---
title: "Bosch buzdolabı kokuyor"
description: "Bosch buzdolabı kötü kokuyorsa Bosch kılavuzundaki 8 maddelik sıra: kapat, boşalt, içini ve contayı temizle, kokan besini paketle, 24 saat sonra kontrol et."
slug: "bosch-buzdolabi-kokuyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Bosch belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, üçü de HTTP 200;
#   md5'ler 30 Eyl yerel kopyalarıyla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-siemens-buzdolabi-sprint/
# #88: bu belgeler için web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (E) Soğutucu/Dondurucu kombine cihazı KGE..  https://media3.bosch-home.com/Documents/9000942062_D.pdf  31 s.  md5 fe03b1c8098c2a98f81913dd32feeca2  (sayfa atıfları esas olarak bu belgeye göre)
#  (V) Soğutucu/Dondurucu kombine cihazı KDV..  https://media3.bosch-home.com/Documents/9000603944_I.pdf  24 s.  md5 10776a2524a3e73d76e96699fac2ec33
#  (N) Soğutucu/Dondurucu kombine cihazı KGN76.. https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
# "Kokular" bölümü (E s.21, V s.16 birebir): "Eğer rahatsız edici kokular fark ediliyorsa: 1. Cihazı Açma/Kapama tuşu ile kapatınız. 2. Cihazın içindeki tüm besinleri dışarı çıkarınız.
#   3. Cihaz içi temizlenmelidir (cihazın temizlenmesi bölümüne bakınız). 4. Tüm ambalajları temizleyiniz. 5. Çok kokan besinleri, hava geçirmeyecek şekilde ambalajlayarak, koku oluşmasını önleyiniz.
#   6. Cihazı tekrar devreye sokunuz. 7. Besinleri yerleştiriniz. 8. 24 saat sonra, yeniden koku oluşup oluşmadığını kontrol ediniz."
# "Cihazın temizlenmesi" (E s.20): kum/klor/asit içeren madde ve çözücü yok · ovalama gerektiren/çizen sünger yok · raflar ve kaplar bulaşık makinesinde yıkanmaz · 1. cihazı kapat 2. fişi çek ya da sigortayı kapat
#   3. dondurulmuş besinleri çıkar, serin yerde sakla, varsa soğutma akülerini üstlerine koy 4. kırağının erimesini bekle 5. yumuşak bez, ılık su, pH nötr bulaşık deterjanı; deterjanlı su aydınlatmaya girmesin
#   6. kapı contası yalnız temiz su, sonra iyice silinip kurulanmalı 7. cihazı bağla, devreye sok 8. dondurulmuş besinleri yerleştir · yeri değiştirilebilen parçalar temizlik için çıkarılabilir.
# Diğer: N s.8 (Sağlık tehlikesi DİKKAT): yiyeceklerle temas eden yüzeyler düzenli temizlenmeli · çiğ et ve balık uygun kaplarda, diğer yiyeceklere temas etmeden ve damlamadan · uzun süre boş kalacaksa küflenmeyi önlemek için kapat, buzunu çöz, temizle, kapağı açık bırak.
#   · E s.25 yetkili servis: E-Nr. ve FD tip levhasında.
# BİLEREK YAZILMAYANLAR: karbonat/sirke/kahve telvesi/koku giderici (belgede yok) · tahliye deliği/oluk temizliği koku adımı olarak (belge kokuyla ilişkilendirmiyor; ayrı sayfa: bosch-buzdolabi-icinde-su-birikiyor) · filtre/fan/gaz teşhisi (belgede yok) · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-buzdolabi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~45 dakika (24 saatlik kontrol hariç)"
  totalTime: "PT45M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Ilık su", "pH nötr bulaşık deterjanı", "Hava geçirmez saklama kapları"]
steps:
  - "Cihazı Açma/Kapama tuşuyla kapat ve fişini çek ya da sigortasını kapat."
  - "İçindeki bütün yiyecekleri çıkar; dondurulmuşları serin bir yerde sakla."
  - "Rafları ve kapları çıkar, cihazın içini yumuşak bez, ılık su ve pH nötr bulaşık deterjanıyla temizle."
  - "Kapı contasını yalnız temiz suyla sil ve iyice kurula."
  - "Tüm ambalajları temizle; çok kokan yiyecekleri hava geçirmeyecek şekilde paketle."
  - "Cihazı yeniden çalıştır ve yiyecekleri yerleştir."
  - "24 saat sonra kokunun yeniden oluşup oluşmadığını kontrol et."
faq:
  - q: "Bosch buzdolabımdaki kokuyu gidermek için ne kullanmalıyım?"
    a: "Bosch'un kılavuzu yalnız yumuşak bir bez, ılık su ve pH değeri nötr bir bulaşık deterjanı öneriyor. Kum, klor ya da asit içeren temizlik maddeleri ve çözücüler kullanılmamalı; ovalama gerektiren ya da çizen süngerler de yok. Kapı contası yalnız temiz suyla silinip iyice kurulanmalı."
  - q: "Rafları bulaşık makinesinde yıkayabilir miyim?"
    a: "Hayır. Bosch'un temizlik bölümüne göre raflar ve kaplar kesinlikle bulaşık makinesinde yıkanmamalı; aksi hâlde bu parçalar deforme olabilir. Yeri değiştirilebilen parçalar temizlik için çıkarılabilir; elde yıkaman gerekiyor."
  - q: "Temizledim ama koku geri geldi. Ne yapmalıyım?"
    a: "Bosch'un sırasındaki son madde tam bu durum için: cihazı yeniden çalıştırıp yiyecekleri yerleştirdikten 24 saat sonra kokunun yeniden oluşup oluşmadığını kontrol et. Koku geri geliyorsa çok kokan yiyeceklerin hava geçirmeyecek şekilde paketlenip paketlenmediğine bak; Bosch'a göre böylece koku oluşması önleniyor. Bunlara rağmen sürerse yetkili servise başvur."
  - q: "Buzdolabını uzun süre kullanmayacağım, koku yapmasın diye ne yapmalıyım?"
    a: "Bosch'un KGN76.. kılavuzuna göre soğutucu ya da dondurucu uzun süre boş kalacaksa küflenmeyi önlemek için cihaz kapatılmalı, buzu çözülmeli, temizlenmeli ve kapağı açık bırakılmalı."
images:
  coverAlt: "Rafları çıkarılmış, kapısı açık boş bir buzdolabının içini bezle silen bir el; tezgâhta kapakları kapalı saklama kapları"
---

Buzdolabının kapağını açınca rahatsız edici bir koku geliyor ve bir kez silmek işe yaramadı. Bosch'un kombi buzdolabı kılavuzlarında bu durum için ayrı bir bölüm var, adı da kısa: **"Kokular."** Bosch burada sekiz maddelik bir sıra veriyor ve sıranın sonunda bir kontrol koyuyor: **"24 saat sonra, yeniden koku oluşup oluşmadığını kontrol ediniz."** Bu yazıda Bosch'un KGE.. ve KDV.. serisi kılavuzlarındaki sırayı, aynı kılavuzların temizlik kurallarıyla birlikte açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapat ve fişi çek → bütün yiyecekleri çıkar → içini ılık su ve pH nötr deterjanla temizle → contayı yalnız temiz suyla sil, kurula → ambalajları temizle, kokan yiyecekleri hava geçirmez paketle → yeniden çalıştır → 24 saat sonra kokuyu kontrol et.

## Adım adım: evde denenecekler

**1. Cihazı kapat ve elektriği kes.** Bosch'un "Kokular" sırasındaki ilk madde: **cihazı Açma/Kapama tuşu ile kapat.** Temizlik bölümü buna bir şey ekliyor: **elektrik fişini çek ya da cihazın bağlı olduğu sigortayı kapat.**

**2. Bütün yiyecekleri çıkar.** İkinci madde: **cihazın içindeki tüm besinleri dışarı çıkar.** Bosch'un temizlik bölümüne göre dondurulmuş besinleri **serin bir yerde** sakla; varsa **soğutma akülerini** üstlerine koy. Dondurucu bölmede kırağı varsa önce **erimesini bekle.**

**3. İçini temizle.** Üçüncü madde **cihaz içinin temizlenmesi.** Bosch'un tarifi: cihazı **yumuşak bir bez, ılık su ve pH değeri nötr bir bulaşık deterjanı** ile temizle; deterjanlı su **aydınlatmaya girmesin.** Yeri değiştirilebilen raf ve kapları temizlik için çıkarabilirsin; ancak Bosch'a göre **raflar ve kaplar kesinlikle bulaşık makinesinde yıkanmamalı,** deforme olabilirler. **Kum, klor ya da asit içeren** temizlik maddeleri, **çözücüler** ve **ovalama gerektiren ya da çizen süngerler** kullanma.

**4. Kapı contasını ayrı sil.** Bosch'un temizlik sırasında conta için ayrı bir kural var: **kapı contası sadece temiz su ile silinmeli, ardından iyice silinip kurulanmalı.** Deterjan contaya gitmiyor. Contanın genel bakımı [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısında.

**5. Ambalajları temizle, kokan yiyecekleri paketle.** "Kokular" sırasının dördüncü ve beşinci maddeleri: **tüm ambalajları temizle** ve **çok kokan besinleri hava geçirmeyecek şekilde ambalajlayarak koku oluşmasını önle.** Bosch'un KGN76.. kılavuzundaki sağlık uyarısı da aynı yere işaret ediyor: **çiğ et ve balık uygun kaplarda saklanmalı, diğer yiyeceklere temas etmemeli ve damlamamalı.**

**6. Yeniden çalıştır ve yiyecekleri yerleştir.** Altıncı ve yedinci maddeler: **cihazı tekrar devreye sok, besinleri yerleştir.** Fişi taktıysan cihazı aç; dondurulmuş yiyecekleri yerine koy.

**7. 24 saat sonra kontrol et.** Bosch'un son maddesi: **24 saat sonra, yeniden koku oluşup oluşmadığını kontrol et.** Bu kontrol, temizliğin işe yarayıp yaramadığını gösteren ölçü.

## Kokunun geri gelmemesi için

Bosch'un KGN76.. kılavuzu iki alışkanlık daha yazıyor: **yiyeceklerle temas eden yüzeyler düzenli olarak temizlenmeli,** ve buzdolabı **uzun süre boş kalacaksa küflenmeyi önlemek için** cihaz **kapatılmalı, buzu çözülmeli, temizlenmeli ve kapağı açık bırakılmalı.**

Genel temizlik sırası için [buzdolabı nasıl temizlenir](/blog/buzdolabi-nasil-temizlenir/) yazısına bak. Dondurucuda buz birikmişse önce [Bosch buzdolabı buzlanma yapıyor](/blog/bosch-buzdolabi-buzlanma-yapiyor/), içeride su görüyorsan [Bosch buzdolabında su birikiyor](/blog/bosch-buzdolabi-icinde-su-birikiyor/) yazısına geç.

## Ne zaman servis

Bosch'un sekiz maddesi uygulanmış, kokan yiyecekler paketlenmiş ve 24 saat sonra koku yine geri gelmişse kullanıcı tarafında kılavuzun verdiği başka adım yok; yetkili servise başvur. Bosch'un kılavuzu servisi çağırırken cihazın **ürün numarasını (E-Nr.) ve imalat numarasını (FD)** bildirmeni istiyor; ikisi de **tip levhasında** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Temizlik ve paketleme kullanıcıya; arka panel ve soğutma sistemi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Koku soğutucu bölmede mi, dondurucuda mı?
2. Bosch'un 8 maddelik sırası uygulandı mı?
3. 24 saat sonra koku geri geldi mi?
4. Cihaz düzgün soğutuyor mu?
5. E-Nr. ve FD numarası elinde mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
