---
title: "Mitsubishi Electric klima koku yapıyor"
description: "Mitsubishi Electric klimadan koku geliyorsa kılavuzun sırası: yanık kokusunda durdur, odaya bak, filtreyi temizle, içini kurut, nemde uzun çalıştırma."
slug: "mitsubishi-electric-klima-koku-yapiyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki belirti damarı). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200; md5 30 Eyl yerel kopyasıyla birebir.
# Web araması KULLANILMADI. pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı TR-numarası iki eksik: s.16 = TR-14).
#  M) Mitsubishi Electric "Duvar tipi split klimalar iç ünite MSZ-AP25VG/35VG/42VG/50VG · Çalıştırma talimatları" (English/Türkçe)
#     https://klima.mitsubishielectric.com.tr/Guide/20220324182219_msz-ap_25-50vg_kullanma_k_lavuzu.pdf  28 s.  md5 43435dae68b08714f849fb3768360849
# M s.16 "Hava akımı" · "İç üniteden gelen hava garip kokuyor. • Filtreler temiz mi? • Fan veya iç ünitenin ısı değiştiricisi temiz mi? • Ünite; duvar, halı, mobilya, elbise vb. üzerine sinmiş bir kokuyu emip havayla beraber dışarıya verebilir."
#   Tablo başı: "Bu öğeler kontrol edilse bile, ünitedeki sorun giderilmezse, klimayı kullanmayı bırakın ve satıcınıza danışın."
# M s.4 UYARI: "Anormal bir durumda (yanık kokusu gibi), klimayı durdurun ve güç fişini çıkarın ya da şalteri KAPATIN. • Anormal durumda devamlı çalıştırma arıza, yangın veya elektrik şokuna neden olabilir. Bu durumda, satıcınıza danışın."
#   "Klima birkaç mevsim kullanıldıktan sonra, normal temizlemeye ek olarak muayene ve bakım yapın. • Ünitedeki kir ya da toz nahoş bir koku oluşturabilir, küf gibi mantarların oluşumunu sağlayabilir ya da boşaltma kanalında tıkanıklık oluşturabilir ve iç üniteden suyun sızmasına neden olabilir. Uzmanlaşmış bilgi ve yetenekler gerektiren muayene ve bakım için satıcınıza danışın."
#   "Kullanıcı iç ünitenin iç kısmını yıkamaya hiçbir zaman çalışmamalıdır. Ünitenin iç kısmının temizlenmeye ihtiyaç duyulması durumunda, satıcınızla iletişime geçin."
#   "Üniteyi yüksek nemde (%80 RH ya da daha fazla) ve/veya pencere ya da kapi açik halde 4 saatten daha uzun bir süre çalistirmayin. • Bu durum klimada yoğunlaşmaya neden olabilir ... • Klimadaki yoğunlaşma küf gibi mantarların oluşmasına neden olabilir."
#   "Üniteyi temizlemeden önce, KAPATIN ve güç fişini çıkarın veya şalteri KAPATIN." / DİKKAT: "Ünitede böcek öldürücüler veya yanıcı spreyler kullanmayın." / "Üniteyi çalıştırmak ya da temizlemek için dengesiz bir banka çıkmayın." / "Hava girişi veya iç/dış ünitenin alüminyum kanatlarına dokunmayın."
#   ÖNEMLİ: "Kirli filtreler, klimada yoğunlaşmaya ve sonuç olarak küf gibi mantarların oluşmasına neden olur. Bu nedenle hava filtrelerinin 2 haftada bir temizlenmesi tavsiye edilir."
# M s.3: "İç ünite uzaktan kumandayla KAPATILDIKTAN sonra, şalterin KAPATTIĞINIZDAN veya güç fişini çıkardığınızdan emin olun." / "Çalıştırma esnasında Şalteri KAPATMAYIN/AÇMAYIN veya güç fişini çıkarmayın/takmayın."
# M s.14 TEMİZLEME: "Temizlemeden önce güç kaynağını kapatın veya şalteri indirin." / "Metal parçalara ellerinizle dokunmamaya dikkat edin." / "Benzin, tiner, cilalama tozları veya böcek öldürücü kullanmayın." / "Ovma fırçası, sert sünger veya benzer bir alet kullanmayın." / "50°C'den daha sıcak su kullanmayın." / "Parçaları kuruması için doğrudan güneş ışığına, sıcağa veya ateşe maruz bırakmayın."
#   Hava filtresi: "2 haftada bir temizleyin • Tozu elektrikli süpürgeyle temizleyin veya suyla yıkayın. • Suyla yıkadıktan sonra gölgede iyice kurutun." / "1. Bir "tık" sesi duyulana kadar ön paneli kaldırın."
#   Hava temizleme filtresi (V Blocking Filtre): "Her 3 ayda bir: • Tozu bir elektrikli süpürgeyle alın. Tozun elektrikli süpürgeyle alınamaması durumunda: • Filtreyi ve çerçevesini ılık suya batırıp yıkayın. • Yıkadıktan sonra gölgede iyice kurutun." · "Her yıl: • İyi performans için filtreyi yenisiyle değiştirin."
# M s.18 "KLİMA UZUN SÜRE KULLANILMAYACAK İSE": "1 En yüksek sıcaklık ayarıyla SOĞUTMA modunda veya FAN modunda 3 ila 4 saat çalıştırın. • Bu, ünitenin içinde kurur. • Klimada bulunan nem, mantar ve küf gibi maddelerin oluşumu için uygun koşullar yaratır." / "2 Çalıştırmayı durdurmak için ... basın." / "3 Şalteri kapatın ve/veya güç kablosunun fişini prizden çıkartın." / "4 Uzaktan kumandanın içerisindeki tüm pilleri çıkartın." / "Klimayı tekrar kullanırken: 1 Hava filtresini temizleyin."
# BİLEREK YAZILMAYANLAR: fan ve ısı değiştiricisi temizliği (s.4 iç kısım kullanıcıya yasak → satıcı) · V Blocking filtrenin yıllık değişimi (parça değişimi, #31) · koku giderici/dezenfektan sprey önerisi (belgede yok; s.4 yanıcı sprey yasağı uyarı olarak verildi) · "odadaki kaynağı temizle" önerisi (Mitsubishi bunu yazmıyor, yalnız emip verebileceğini söylüyor) · kokunun türüne göre teşhis (belgede yok).
# Alıntı denetim tablosu: mitsubishi-electric-klima-koku-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma ve kurutma çalıştırması hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Sağlam bir tabure"]
steps:
  - "Yanık kokusu gibi anormal bir koku varsa klimayı durdur, fişini çek ya da şalteri kapat ve satıcına danış."
  - "Kokunun odadaki duvar, halı, mobilya ya da giysilerde de olup olmadığını kontrol et."
  - "Klimayı kumandayla kapat, ardından şalteri indir ya da fişini çek."
  - "Ön paneli tık sesi gelene kadar kaldır ve hava filtresini çıkar."
  - "Filtreyi süpürgeyle ya da 50 derecenin altındaki suyla temizle, gölgede iyice kurutup yerine tak."
  - "Klimayı yüksek nemde ya da pencere veya kapı açıkken 4 saatten uzun çalıştırma."
  - "Klimayı uzun süre kullanmayacaksan önce en yüksek sıcaklıkta SOĞUTMA ya da FAN modunda 3-4 saat çalıştırıp içini kurut."
  - "Koku sürerse fan ve ısı değiştiricisinin temizliği için Mitsubishi Electric yetkili satıcısına ya da servisine başvur."
faq:
  - q: "Mitsubishi Electric klimadan neden kötü koku geliyor?"
    a: "Mitsubishi Electric'in Türkçe kılavuzu \"İç üniteden gelen hava garip kokuyor\" durumunda filtrelerin ve fanla iç ünitenin ısı değiştiricisinin temiz olup olmadığını soruyor. Kılavuza göre ünite duvar, halı, mobilya ya da giysilere sinmiş bir kokuyu da emip havayla birlikte dışarı verebilir. Güvenlik bölümü ayrıca ünitedeki kir ya da tozun nahoş bir koku oluşturabileceğini yazıyor."
  - q: "Klimadan yanık kokusu geliyor, ne yapmalıyım?"
    a: "Kılavuz bunu anormal durum sayıyor: klimayı durdur, güç fişini çıkar ya da şalteri kapat ve satıcına danış. Anormal durumda çalıştırmaya devam etmenin arıza, yangın ya da elektrik çarpmasına yol açabileceği yazıyor."
  - q: "Klimanın içini kendim temizleyebilir miyim?"
    a: "Hayır. Kılavuz kullanıcının iç ünitenin iç kısmını hiçbir zaman yıkamaya çalışmamasını, iç kısmın temizlenmesi gerekiyorsa satıcıyla iletişime geçilmesini istiyor. Kullanıcıya bırakılan iş hava filtresinin temizliği; kılavuz bunu 2 haftada bir öneriyor. Klima birkaç mevsim kullanıldıktan sonra normal temizliğe ek olarak uzman muayene ve bakımı için de satıcıya danışılmasını istiyor."
  - q: "Klimayı sezon sonunda kapatırken koku olmaması için ne yapmalıyım?"
    a: "Kılavuzun uzun süre kullanmama talimatı: önce en yüksek sıcaklık ayarıyla SOĞUTMA ya da FAN modunda 3-4 saat çalıştırarak ünitenin içini kurut, sonra durdur, şalteri kapat ya da fişi çek ve kumandadaki pilleri çıkar. Kılavuza göre klimadaki nem küf gibi mantarların oluşmasına uygun koşul yaratıyor. Tekrar kullanmaya başlarken önce hava filtresini temizle."
images:
  coverAlt: "Duvardaki beyaz split klimanın ön paneli kaldırılmış; çıkarılmış hava filtresi gölgede bir havlunun üzerinde kuruyor"
---

Klima çalışınca odaya hoş olmayan bir koku yayılıyor. Mitsubishi Electric'in Türkçe çalıştırma talimatları bu belirtiyi arıza tablosunda **"İç üniteden gelen hava garip kokuyor"** diye anıyor ve ilk soruyu filtreye ayırıyor: **"Filtreler temiz mi?"** Aynı satır kokunun her zaman klimanın içinden çıkmadığını da hatırlatıyor. Bu yazıda kılavuzun koku satırını, güvenlik bölümünü ve uzun süre kullanmama talimatını bir araya getiriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yanık kokusu varsa klimayı durdur, gücünü kes, satıcına danış. Değilse kokunun odadaki eşyalarda da olup olmadığına bak. Gücü kesip hava filtresini temizle ve gölgede kurut. Nemli havada ya da pencere açıkken uzun süre çalıştırma; uzun ara vereceksen içini 3-4 saat kurut. Koku sürerse fan ve ısı değiştiricisi temizliği → Mitsubishi Electric yetkili satıcısı ya da servisi.

## Kılavuz kokuyu neye bağlıyor?

| Kılavuzdaki madde | Ne anlama geliyor | Kimin işi |
|---|---|---|
| Filtreler temiz mi? | Kirli filtre yoğunlaşmaya, o da küf gibi mantarlara yol açabiliyor | Senin, 2 haftada bir |
| Fan ya da iç ünitenin ısı değiştiricisi temiz mi? | İç kısım; kullanıcı yıkamamalı | Mitsubishi Electric yetkili satıcısı ya da servisi |
| Ünite duvar, halı, mobilya, elbise vb. üzerine sinmiş kokuyu emip verebilir | Koku odadan geliyor olabilir | Kontrol senin |
| Ünitedeki kir ya da toz nahoş koku oluşturabilir | Birkaç mevsim sonra uzman muayene ve bakım | Yetkili satıcı ya da servis |
| Yanık kokusu gibi anormal durum | Çalıştırmaya devam etme | Durdur, gücü kes, satıcıya danış |

## Adım adım: evde denenecekler

**1. Yanık kokusu mu?** Yanık kokusu gibi anormal bir koku varsa klimayı durdur, fişini çek ya da şalteri kapat ve satıcına danış; sonraki adımlara geçme. Mitsubishi Electric'e göre anormal durumda çalıştırmaya devam etmek arıza, yangın ya da elektrik çarpmasına yol açabilir.

**2. Odaya bak.** Kokunun odadaki duvar, halı, mobilya ya da giysilerde de olup olmadığını kontrol et. Kılavuz ünitenin bu yüzeylere sinmiş bir kokuyu emip havayla birlikte dışarı verebileceğini yazıyor.

**3. Gücü kes.** Klimayı kumandayla kapat, ardından şalteri indir ya da fişini çek. Kılavuz şalterin ya da fişin klima çalışırken değil, kumandayla kapatıldıktan sonra kapatılmasını istiyor; temizlikten önce de gücün kesilmesi gerekiyor, çünkü çalışırken içteki fan yüksek hızla dönüyor.

**4. Filtreyi çıkar.** Ön paneli "tık" sesi gelene kadar kaldır ve hava filtresini çıkar. Ön panele uzanırken sağlam bir tabure kullan; kılavuz dengesiz bir yere çıkılmamasını istiyor. Metal parçalara ve alüminyum kanatlara elinle dokunma.

**5. Temizle ve kurut.** Filtreyi süpürgeyle ya da 50 derecenin altındaki suyla temizle, gölgede iyice kurutup yerine tak. Ovma fırçası, sert sünger, benzin, tiner ya da böcek öldürücü kullanma; parçaları güneşte ya da ısıtıcı yanında kurutma. Kılavuz hava filtresinin 2 haftada bir temizlenmesini öneriyor. Klimanda V Blocking hava temizleme filtresi varsa onun tozu 3 ayda bir süpürgeyle alınıyor; çıkmazsa filtre çerçevesiyle ılık suda yıkanıp gölgede kurutuluyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**6. Nem ve açık pencere.** Klimayı yüksek nemde (yüzde 80 ve üzeri bağıl nem) ya da pencere veya kapı açıkken 4 saatten uzun çalıştırma. Kılavuza göre bu klimada yoğunlaşmaya, yoğunlaşma da küf gibi mantarların oluşmasına neden olabilir.

**7. İçini kurut.** Klimayı uzun süre kullanmayacaksan önce en yüksek sıcaklıkta SOĞUTMA ya da FAN modunda 3-4 saat çalıştırıp içini kurut; sonra durdur, şalteri kapat ya da fişi çek ve kumandanın pillerini çıkar. Kılavuza göre klimadaki nem, mantar ve küf oluşumu için uygun koşul yaratıyor. Yeniden kullanmaya başlarken ilk iş hava filtresini temizlemek.

**8. Sürerse servis.** Koku sürerse fan ve ısı değiştiricisinin temizliği için Mitsubishi Electric yetkili satıcısına ya da servisine başvur.

## Ne zaman servis?

Kılavuzun tablosu, kontrol maddelerine rağmen sorun giderilmezse **klimayı kullanmayı bırakıp satıcına danışmanı** istiyor. Güvenlik bölümü de klima birkaç mevsim kullanıldıktan sonra normal temizliğe ek olarak muayene ve bakım yaptırılmasını, uzmanlık gerektiren bu iş için satıcıya danışılmasını söylüyor.

| Durum | Kimin işi |
|---|---|
| Odadaki koku kaynağını kontrol, hava filtresi temizliği, nem ve pencere düzeni, kurutma çalıştırması | Senin, bu rehberdeki adımlar |
| Fan ya da ısı değiştiricisinin temizliği, iç kısmın yıkanması | Mitsubishi Electric yetkili satıcısı ya da servisi |
| Yanık kokusu gibi anormal durum | Durdur, gücü kes, yetkili satıcı ya da servis |
| Birkaç mevsimlik kullanımdan sonra muayene ve bakım | Yetkili satıcı ya da servis |

⛔ İç ünitenin içine su, deterjan ya da sprey sıkma. Mitsubishi Electric kılavuzu iç kısmın kullanıcı tarafından hiçbir zaman yıkanmamasını, ünitede böcek öldürücü ya da yanıcı sprey kullanılmamasını istiyor; uygun olmayan deterjanın plastik parçalara zarar verip su sızıntısına, elektrikli parçalara temas ederse arızaya yol açabileceğini yazıyor.

Markadan bağımsız anlatım için [klima koku yapıyor](/blog/klima-koku-yapiyor/) yazısına bakabilirsin. Klima koku yapmıyor ama serinletmiyorsa [Mitsubishi Electric klima soğutmuyor](/blog/mitsubishi-electric-klima-sogutmuyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Koku satırı, güvenlik uyarıları, filtre temizliği ve uzun süre kullanmama talimatı Mitsubishi Electric'in MSZ-AP25VG/35VG/42VG/50VG duvar tipi split klima Türkçe çalıştırma talimatlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
