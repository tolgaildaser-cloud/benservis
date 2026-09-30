---
title: "Siemens bulaşık makinesi E:92-40 hatası"
description: "Siemens bulaşık makinesi E:92-40 hatası: Siemens'e göre süzgeçler kirlenmiş ya da tıkanmış. Süzgeç sistemini çıkarma, yıkama ve doğru takma adım adım."
slug: "siemens-bulasik-makinesi-e92-40-hatasi"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144; 29 Eyl notunda "E:92-40 tekil sayfa adayı" olarak kayıtlı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200; md5'leri 29 Eyl kopyalarıyla birebir.
# #88: kaynak YALNIZ Siemens'in kendi kullanım kılavuzları (media3.bsh-group.com, Siemens TR ürün sayfalarındaki bağlantılar). Forum/servis sitesi kullanılmadı. Siemens TR'de kod bazlı tekil destek sayfası bulunmadı (29 Eyl: e24/e25/hata-kodlari yolları 404).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-bulasik-sprint/2026-09-30/ · pdftotext -layout · sayfa = basılı sayfa (bu kılavuzlarda PDF sayfasıyla aynı).
#  (K1) SN23HW62MT  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627  · E:92-40 s.42 · Süzgeç sistemi s.38
#  (K2) SN45EB01NT  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c  · E:92-40 s.43 · Süzgeç sistemi s.40
#  (K3) SN25EI83CT  https://media3.bsh-group.com/Documents/9002038027_A.pdf  56 s.  md5 d4a5a736e405a027d5f2230f9a841418  · E:92-40 s.47 · Süzgeç sistemi s.42-43  (adım atıfları esas olarak K3)
#  (K4) SN63HX62MT  https://media3.bsh-group.com/Documents/9002017437_B.pdf  52 s.  md5 2379b88f4e313307fdeb303ce8eda0b5  · E:92-40 s.42 · Süzgeç sistemi s.38
# Kod satırı (dört kılavuzda aynı): "E:92-40 değişimli olarak yanıyor. | Süzgeçler pislenmiş veya tıkanmış. Süzgeçleri temizleyiniz. → 'Süzgeçlerin temizlenmesi'"
# Süzgeç yordamı (K3 s.42-43, K1 s.38): "Yıkama suyundaki kirlilikler, süzgeçlerin tıkanmasına neden olabilir. 1. Her durulama işleminden sonra süzgeçlerdeki artıkları kontrol edin.
#   2. Kaba süzgeci saat yönünün tersine çevirin ve süzgeç sistemini çıkarın. Pompa kabına yabancı cisimlerin düşmemesine dikkat edin. 3. Mikro süzgeci aşağı doğru çekerek çıkarın.
#   4. Kilit tırnaklarını birbirine bastırın ve kaba süzgeci yukarı doğru çıkarın. 5. Süzgeç elemanlarını musluk suyunun altında temizleyin. Kaba süzgeç ve ince süzgeç arasındaki kirli kenarı titiz bir şekilde temizleyin.
#   6. Süzgeç sisteminin parçalarını birleştirin. Kaba süzgeçte kilit tırnaklarının yerine oturmasına dikkat edin. 7. Süzgeç sistemini cihaza yerleştirin ve kaba süzgeci saat yönünde çevirin. Ok işaretlerinin karşı karşıya durmasına dikkat edin."
# Süzgeç sistemi: "Süzgeç sistemi, yıkama döngüsünde kaba kirleri filtreler." (Mikro süzgeç / İnce süzgeç / Kaba süzgeç)
# Temizleme memesi (K1, K2, K4'te var; K3'te YOK): "Temizleme memesi, bakım gerektirmez, böylece elek için manuel temizleme ihtiyacı azalır." · "…yılda üç kereye indirebilirsiniz: Gereklilik: Kaba yemek artıkları, yıkama işleminden önce manuel olarak çıkartıldı. Temizleme memesini Temel ayarlar altında etkinleştirin."
# K1-K4 İpucu (K3 s.43): "Cihazınızı bir mobil cihaza bağlayınız. Home Connect uygulaması, süzgeçlerin temizlenmesi gerektiğinde sizi bilgilendirir."
# K1 s.39 "Arızaları giderme" girişi: "UYARI Elektrik çarpması tehlikesi! Usulüne uygun olmayan onarımlar tehlikelidir. Sadece bunun eğitimini almış uzman personel cihazda onarımlar yapabilir."
# BİLEREK YAZILMAYANLAR: "Tüm LED'ler yanıyor" satırındaki Ana şalter 4 sn sıfırlama (E:92-40 satırında değil; eşleme kurulmadı) · atık su pompası temizliği (E:61 satırı; kapak/pompa işi) ·
#   Bosch E:92-40 eşlemesi (Siemens belgesi dışında) · "süzgeçsiz çalıştırma" uyarısı (bu kılavuzlarda bulunamadı) · temizleme memesinin hangi modelde olduğu genellemesi · fiyat.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-e92-40-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Makinenin tabanındaki süzgeçlerde biriken artıkları kontrol et."
  - "Kaba süzgeci saat yönünün tersine çevir ve süzgeç sistemini çıkar; pompa kabına bir şey düşürme."
  - "Mikro süzgeci aşağı doğru çekerek çıkar."
  - "Kilit tırnaklarını birbirine bastır ve kaba süzgeci yukarı doğru çıkar."
  - "Süzgeç parçalarını musluk suyunun altında yıka, kaba ve ince süzgeç arasındaki kirli kenarı özenle temizle."
  - "Süzgeç parçalarını birleştir, kaba süzgeçteki kilit tırnaklarının yerine oturduğundan emin ol."
  - "Süzgeç sistemini yerine koy, kaba süzgeci saat yönünde çevir ve ok işaretlerini karşı karşıya getir."
faq:
  - q: "Siemens bulaşık makinesinde E:92-40 ne demek?"
    a: "Siemens'in Türkçe kullanım kılavuzlarına göre ekranda değişimli olarak yanan E:92-40, süzgeçlerin kirlendiğini ya da tıkandığını bildirir. Kılavuzun çözümü süzgeçlerin temizlenmesidir."
  - q: "Süzgeçleri ne sıklıkla kontrol etmeliyim?"
    a: "Siemens her durulama işleminden sonra süzgeçlerdeki artıkların kontrol edilmesini öneriyor. Kılavuza göre yıkama suyundaki kirlilikler süzgeçlerin tıkanmasına neden olabilir."
  - q: "Süzgeci taktım ama kod geri geldi, ne yapmalıyım?"
    a: "Önce süzgeç sisteminin doğru takıldığına bak: Siemens, kaba süzgeçteki kilit tırnaklarının yerine oturmasını ve süzgeç yerleştirilip saat yönünde çevrildiğinde ok işaretlerinin karşı karşıya durmasını istiyor. Süzgeçler temiz ve doğru takılı olduğu hâlde kod sürüyorsa Siemens müşteri hizmetlerine başvur."
  - q: "Süzgeç temizliğini azaltmanın bir yolu var mı?"
    a: "Siemens'in bazı kılavuzlarında (ör. SN23HW62MT, SN45EB01NT, SN63HX62MT) temizleme memesi özelliği anlatılıyor. Bu kılavuzlara göre kaba yemek artıkları yıkamadan önce elle alınır ve temizleme memesi temel ayarlardan etkinleştirilirse gerekli süzgeç temizliği yılda üç kereye inebilir. Özellik her modelde yok; kendi kılavuzuna bak."
images:
  coverAlt: "Açık bir bulaşık makinesinin tabanında, alt sepet çıkarılmış hâlde süzgeç parçalarını musluk suyunun altında yıkayan bir el"
---

Siemens bulaşık makinenin ekranında **E:92-40** değişimli olarak yanıyor. Siemens'in Türkçe kullanım kılavuzlarındaki arıza tablosunda bu kodun karşılığı tek cümle: "**Süzgeçler pislenmiş veya tıkanmış.**" Çözüm de kılavuzda yazıyor: "**Süzgeçleri temizleyiniz.**" Bu, kullanıcının kendi yapabileceği bir bakım işi; alet gerektirmiyor. Aşağıda Siemens'in süzgeç temizleme sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:92-40 = Siemens'e göre süzgeçler kirlenmiş ya da tıkanmış. Sıra şu: kaba süzgeci saat yönünün tersine çevirip süzgeç sistemini çıkar → mikro ve kaba süzgeci ayır → musluk suyu altında yıka → birleştir → yerine koy, saat yönünde çevir, okları karşı karşıya getir. Temiz ve doğru takılı süzgeçle kod sürüyorsa Siemens müşteri hizmetleri.

## E:92-40 tam olarak ne söylüyor?

Siemens'in dört Türkçe kılavuzunda (SN23HW62MT, SN45EB01NT, SN25EI83CT, SN63HX62MT) kod satırı aynı: **E:92-40 değişimli olarak yanıyor → süzgeçler pislenmiş veya tıkanmış → süzgeçleri temizle.** Siemens'e göre süzgeç sistemi yıkama sırasında **kaba kirleri filtreler** ve üç parçadan oluşur: **mikro süzgeç, ince süzgeç ve kaba süzgeç.** Yıkama suyundaki kirlilikler zamanla süzgeçlerin tıkanmasına neden olabilir.

## Adım adım: evde denenecekler

**1. Süzgeçlere bak.** Siemens, süzgeçlerdeki artıkların **her durulama işleminden sonra** kontrol edilmesini öneriyor. Makinenin tabanındaki süzgeçlerde biriken yemek artıklarına bak.

**2. Süzgeç sistemini çıkar.** **Kaba süzgeci saat yönünün tersine** çevir ve süzgeç sistemini dışarı al. Siemens'in uyarısı: bu sırada **pompa kabına yabancı cisim düşürme.**

**3. Mikro süzgeci ayır.** Mikro süzgeci **aşağı doğru çekerek** çıkar.

**4. Kaba süzgeci ayır.** Kaba süzgeçteki **kilit tırnaklarını birbirine bastır** ve kaba süzgeci **yukarı doğru** çıkar.

**5. Musluk suyunda yıka.** Süzgeç parçalarını **musluk suyunun altında** temizle. Siemens özellikle **kaba süzgeç ile ince süzgeç arasındaki kirli kenarın** titizlikle temizlenmesini istiyor.

**6. Parçaları birleştir.** Süzgeç sisteminin parçalarını birleştir; kaba süzgeçteki **kilit tırnaklarının yerine oturmasına** dikkat et.

**7. Yerine tak.** Süzgeç sistemini makineye yerleştir ve kaba süzgeci **saat yönünde** çevir. Siemens'e göre **ok işaretleri karşı karşıya** durmalı.

Süzgeç temizliğinin markadan bağımsız anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

## Kodun geri gelmemesi için

- **Artıkları önceden al:** Siemens'in bazı kılavuzlarında (SN23HW62MT, SN45EB01NT, SN63HX62MT) **temizleme memesi** özelliği anlatılıyor. Bu kılavuzlara göre kaba yemek artıkları yıkamadan önce elle alınır ve temizleme memesi **Temel ayarlar** altında etkinleştirilirse gerekli süzgeç temizliği **yılda üç kereye** inebilir. SN25EI83CT kılavuzunda bu özellik yok; kendi modelinin kılavuzuna bak.
- **Hatırlatma:** Siemens'in dört kılavuzundaki ipucuna göre cihaz bir mobil cihaza bağlanırsa **Home Connect** uygulaması, süzgeçlerin temizlenmesi gerektiğinde bilgi veriyor.

## Ne zaman servis?

⛔ Siemens'in E:92-40 satırı kullanıcıya süzgeç temizliğinden başka bir adım vermiyor. Süzgeçler **temiz ve doğru takılı** olduğu hâlde kod sürüyorsa **Siemens müşteri hizmetlerine** başvur. Siemens'in kılavuzundaki uyarı açık: usulüne uygun olmayan onarımlar tehlikelidir; cihazda onarımı yalnızca eğitimli uzman personel yapabilir.

Makine suyu boşaltmıyorsa ya da ekranda E:61 kodları görünüyorsa Siemens'in sırası [Siemens bulaşık makinesi su boşaltmıyor](/blog/siemens-bulasik-makinesi-su-bosaltmiyor/) yazısında. Bulaşıklarda yemek artığı kalıyorsa [Siemens bulaşık makinesi temiz yıkamıyor](/blog/siemens-bulasik-makinesi-temiz-yikamiyor/) yazısına bak. Diğer kodlar için [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) yazısından başla.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda tam olarak hangi kod yanıyor (E:92-40 mı, başka bir E kodu mu)?
2. Süzgeçler en son ne zaman temizlendi?
3. Süzgeç sistemi takılırken ok işaretleri karşı karşıya geldi mi?
4. Kilit tırnakları yerine oturdu mu?
5. Makinenin modeli (tip etiketindeki E-Nr.) ne?

Bu beşine cevabın varsa servise "E:92-40 veriyor" yerine somut bir tablo anlatabilirsin. Siemens'e göre ürün numarası (E-Nr.) tip etiketinde, cihaz kapağının iç tarafında yazıyor.

---

**Kaynak künyesi.** Kodun anlamı ve süzgeç temizleme adımları Siemens'in Türkçe SN23HW62MT, SN45EB01NT, SN25EI83CT ve SN63HX62MT bulaşık makinesi kullanım kılavuzlarından alınmıştır. Kılavuza özgü notlar hangi modele ait olduğu belirtilerek verilmiştir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve bulaşık makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
