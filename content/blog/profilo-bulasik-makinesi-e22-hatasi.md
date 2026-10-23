---
title: "Profilo bulaşık makinesi E22 hatası: süzgeçler tıkalı"
description: "Profilo bulaşık makinesinde E:22 süzgeçlerin kirlendiğini ya da tıkandığını söyler. Süzgeç sistemini söküp temizleme ve kod geri gelirse yapılacaklar."
slug: "profilo-bulasik-makinesi-e22-hatasi"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork B). Konu seçimi: origin/main'de profilo-bulasik-makinesi-e22-hatasi yok; yakın slug'lar
#   profilo-bulasik-makinesi-su-bosaltmiyor / -temiz-yikamiyor / -calismiyor / -kurutmuyor / -leke-birakiyor (belirti sayfaları, E22 kod sorgusunu karşılamıyor);
#   Profilo'da bulaşık makinesi kod sayfası yok.
# GSC kanıtı (~/Downloads/https___www-5/Sorgular.csv, son 3 ay): "profilo bulaşık makinesi e22 hatası" 36 gösterim, ort. poz 8,75 (kendi sayfası yok).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "profilo bulaşık makinesi e22" → 1. "profilo bulaşık makinesi e22 hatası",
#   2. "… e22 hatası çözümü", 3. "… e22 ne demek", 4. "… e22 hatası nasıl giderilir".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan (Profilo'nun ürün sayfalarındaki kılavuz bağlantısı) yeniden indirildi:
#   ikisi de HTTP 200 application/pdf, md5 yerel kopyalarla (kaynak-profilo-sprint/) aynı. #88: forum/servis sitesi kullanılmadı. pdftotext -layout, sayfa = basılı sayfa.
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (D) Profilo BMS623V5 kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# E:22 satırı C s.38 · aynı satır D s.41'de "E:92-40 değişimli olarak yanıyor" · süzgeç sistemi ve temizliği C s.35-36 (D s.37-38)
#   · programın iptali C s.32 · haşlanma uyarısı C s.7 · "uzman personel" uyarısı C s.37 · E:24/E:25 C s.38-39 · "başka bir hata kodu E:01-E:30" C s.39
#   · "Program sona erdikten sonra cihazın içinde su kalıyor" C s.46 · "Bulaşıklarda yemek artıkları var" + süzgeç C s.41 · E-Nr./FD ve tip plaketi C s.50.
# BİLEREK YAZILMAYANLAR: atık su pompasının sökülmesi/pompa kapağının kaşıkla açılması (E:24/E:25 satırı; alet işi, burada adım değil) · E:22'nin teknik nedeni
#   (belgede yalnız "süzgeçler pislenmiş veya tıkanmış") · Bosch/Siemens kod eşitliği (bu belgelerde yok) · süzgeçsiz çalıştırma uyarısı (belgede bulunamadı)
#   · fırça/sünger/deterjan önerisi (belgede yalnız "musluk suyunun altında") · "en sık neden" sıralaması · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-bulasik-makinesi-e22-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Program çalışıyorsa kapağı hemen açma; Reset tuşuna yaklaşık 3 saniye basarak programı iptal et ve tamamlanmasını bekle."
  - "Kaba süzgeci saat yönünün tersine çevirip süzgeç sistemini çıkar; pompa kabına yabancı cisim düşmemesine dikkat et."
  - "Mikro süzgeci aşağı doğru çekerek çıkar."
  - "Kilit tırnaklarını birbirine bastırıp kaba süzgeci yukarı doğru çıkar."
  - "Süzgeç parçalarını musluk suyunun altında temizle; kaba süzgeç ile ince süzgeç arasındaki kirli kenara özellikle bak."
  - "Parçaları birleştir; kaba süzgeçteki kilit tırnaklarının yerine oturduğundan emin ol."
  - "Süzgeç sistemini cihaza yerleştirip kaba süzgeci saat yönünde çevir; ok işaretleri karşı karşıya gelsin."
  - "Kod geri gelirse Reset tuşuna bas, fişi en az 2 dakika çekip yeniden tak; yine çıkarsa musluğu kapat, fişi çek ve yetkili servise kodu bildir."
faq:
  - q: "Profilo bulaşık makinesi E22 ne demek?"
    a: "Profilo'nun BM6380MA kullanım kılavuzundaki arıza tablosuna göre E:22, süzgeçlerin pislenmiş veya tıkanmış olduğunu gösterir. Kılavuzun çözümü tek cümle: süzgeçleri temizleyin. Yani bu kod tek başına bir parça arızası bildirmiyor; önce süzgeç sistemine bakılır."
  - q: "E22 ile E24 arasındaki fark ne?"
    a: "E:22 süzgeçlerle ilgili. E:24 ise suyun boşaltılmadığını bildirir; kılavuz burada cihaz hatası olmadığını, sifon bağlantısının kapalı ya da atık su hortumunun bükülmüş veya tıkanmış olabileceğini, ya da atık su pompasının bloke olmuş veya kapağının gevşek olabileceğini yazıyor. E:25 de pompa bloke ya da pompa kapağı gevşek anlamına geliyor."
  - q: "Benim makinemde E22 yok, E:92-40 yazıyor; aynı şey mi?"
    a: "Profilo'nun BMS623V5 kılavuzunda aynı satır 'E:92-40 değişimli olarak yanıyor' diye geçiyor ve neden de çözüm de aynı: süzgeçler pislenmiş veya tıkanmış, süzgeçleri temizleyin. Yeni nesil panellerde kod bu biçimde görünebilir; kendi kılavuzunun arıza tablosuna bak."
  - q: "Süzgeçleri ne sıklıkla kontrol etmeliyim?"
    a: "Kılavuz, yıkama suyundaki kirliliklerin süzgeçleri tıkayabileceğini yazıyor ve süzgeçlerdeki artıkların her yıkama işleminden sonra kontrol edilmesini istiyor."
  - q: "Süzgeçleri temizledim, kod yine çıkıyor; ne yapmalıyım?"
    a: "Önce süzgeçlerin doğru takıldığından ve oturduğundan emin ol; kılavuz yanlış takılmış ya da yerine oturmamış süzgeçleri ayrı bir sorun olarak sayıyor. Kod sürerse arıza tablosundaki genel adımı uygula: Reset tuşuna bas, fişi çek ya da sigortayı kapat, en az 2 dakika bekle, yeniden çalıştır. Sorun yine ortaya çıkarsa musluğu kapat, fişi çek ve müşteri hizmetlerine hata kodunu bildir."
images:
  coverAlt: "Kapağı açık bir bulaşık makinesinin tabanında yerinde duran silindir biçimli süzgeç"
  steps:
    - "Bulaşık makinesinin kumanda panelinde parmakla basılı tutulan bir tuş"
    - "Bulaşık makinesinin tabanından çevrilerek çıkarılan silindir biçimli bir süzgeç"
    - "Elde tutulan düz, ince delikli metal bir mikro süzgeç"
    - "İki parmakla birbirine bastırılan plastik süzgeç tırnaklarının yakın planı"
    - "Mutfak musluğunun akan suyu altında tutulan süzgeç parçaları"
    - "Birleştirilmiş, temiz bir bulaşık makinesi süzgecinin yakın planı"
    - "Bulaşık makinesinin tabanına yerleştirilip çevrilen süzgeç ve yan yana gelmiş iki ok işareti"
    - "Prizden çekilmiş bir fiş ve yanında kapalı bir su musluğu"
---

Bulaşık makinesi programın ortasında durdu ve ekranda **E:22** yanıp sönüyor. İlk akla gelen pompa ya da kart olur; ama Profilo'nun kendi kılavuzu bu kod için çok daha sade bir şey söylüyor: süzgeçler pislenmiş veya tıkanmış. Bu yazıda Profilo'nun BM6380MA ve BMS623V5 kullanım kılavuzlarına dayanarak, servisi aramadan önce evde yapabileceğin her şeyi sırasıyla topladık. Senin modelinde tuş adları ya da kodun yazılışı farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:22 = süzgeçler kirli ya da tıkalı. Programı iptal et, süzgeç sistemini çıkar, parçaları musluk suyu altında temizle, doğru birleştirip oklar karşı karşıya gelecek şekilde yerine tak. Kod geri gelirse Reset ve 2 dakikalık elektrik kesme; yine çıkarsa musluğu kapat, fişi çek, servise kodu bildir.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:22** | Süzgeçler pislenmiş veya tıkanmış | 🛠️ Süzgeçleri temizle |
| **E:92-40** (yeni panel) | Süzgeçler pislenmiş veya tıkanmış | 🛠️ Süzgeçleri temizle |
| **E:24** | Su boşaltılmıyor; sifon bağlantısı kapalı ya da atık su hortumu bükülmüş, tıkanmış | 🛠️ Sifon bağlantısı ve hortum |
| **E:25** | Atık su pompası bloke ya da kapağı gevşek | 🔧 Pompa temizliği; emin değilsen servis |
| **E:18 / su girişi** | Besleme hortumu bükülmüş, musluk kapalı ya da süzgeci tıkalı | 🛠️ Musluk ve hortum |
| **E:01–E:30 arası başka kod** | Teknik bir arıza | 🛠️ Reset ve elektrik kesme; sürerse servis |

## Adım adım: evde denenecekler

**1. Programı güvenle durdur.** Profilo'nun güvenlik bölümü, program devam ederken cihaz kapısı açılırsa cihazdan **sıcak su sıçrayabileceği** konusunda uyarıyor. Bu yüzden kapağı hemen açma. Kılavuza göre bir programı zamanından önce sonlandırmak için **Reset tuşuna yaklaşık 3 saniye** basılıyor; program iptal ediliyor ve yaklaşık 1 dakika sonra tamamlanıyor. Bu süreyi bekle.

**2. Süzgeç sistemini çıkar.** Kılavuz süzgeç sistemini üç parça olarak tarif ediyor: kaba süzgeç, ince süzgeç ve mikro süzgeç; görevi yıkama döngüsünde kaba kirleri filtrelemek. Kaba süzgeci **saat yönünün tersine** çevir ve süzgeç sistemini çıkar. Kılavuzun buradaki uyarısı önemli: **pompa kabına yabancı cisimlerin düşmemesine** dikkat et.

**3. Mikro süzgeci ayır.** Mikro süzgeci **aşağı doğru çekerek** çıkar.

**4. Kaba süzgeci ayır.** **Kilit tırnaklarını birbirine bastır** ve kaba süzgeci yukarı doğru çıkar.

**5. Parçaları yıka.** Süzgeç elemanlarını **musluk suyunun altında** temizle. Kılavuz özellikle bir noktayı işaret ediyor: **kaba süzgeç ile ince süzgeç arasındaki kirli kenarı** titizlikle temizle.

**6. Doğru birleştir.** Süzgeç sisteminin parçalarını birleştir ve kaba süzgeçte **kilit tırnaklarının yerine oturmasına** dikkat et. Kılavuzun arıza tablosu, yanlış takılmış ya da yerine oturmamış süzgeçleri ayrı bir sorun olarak sayıyor; temizlik kadar takma da önemli.

**7. Yerine tak.** Süzgeç sistemini cihaza yerleştir ve kaba süzgeci **saat yönünde** çevir. Son kontrol: **ok işaretleri karşı karşıya** durmalı.

**8. Kod geri gelirse.** Kılavuzun arıza tablosu E:01 ile E:30 arasındaki başka kodlar için bir genel sıra veriyor: Reset tuşuna bas, cihazın **fişini çek ya da sigortayı kapat**, **en az 2 dakika** bekle, yeniden tak ve cihazı çalıştır. Sorun yeniden ortaya çıkarsa **musluğu kapat**, **fişi prizden çek** ve müşteri hizmetlerine **hata kodunu** bildir.

## E:22 neden çıkar, nasıl önlenir

Kılavuzun cümlesi açık: **yıkama suyundaki kirlilikler süzgeçlerin tıkanmasına** neden olabilir. Bu yüzden Profilo, süzgeçlerdeki artıkların **her yıkama işleminden sonra** kontrol edilmesini istiyor. Tıkalı süzgeç yalnız E:22 ile görünmez; aynı kılavuz, **program bittikten sonra makinenin içinde su kalmasını** ve **bulaşıklarda yemek artıkları kalmasını** da kirli veya yanlış oturmuş süzgeçlerle ilişkilendiriyor. Bu belirtiler de varsa ayrıntılar [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) ve [Profilo bulaşık makinesi temiz yıkamıyor](/blog/profilo-bulasik-makinesi-temiz-yikamiyor/) yazılarında.

**Yeni panelde kod farklı görünebilir.** Profilo'nun BMS623V5 kılavuzunda aynı satır **E:92-40 değişimli olarak yanıyor** diye yazılmış; neden ve çözüm birebir aynı: süzgeçleri temizle.

**E:24 ve E:25 ile karıştırma.** E:24'te su boşaltılmıyor; kılavuz cihaz hatası olmadığını, sifon bağlantısının kapalı ya da atık su hortumunun bükülmüş veya tıkanmış olabileceğini yazıyor. E:25'te atık su pompası bloke ya da pompa kapağı gevşek. Pompa tarafı, süzgeç temizliğinden bir adım daha derin bir iş; emin değilsen servise bırak.

## Ne zaman servis

- Süzgeçler temiz ve doğru oturmuş olduğu hâlde E:22 geri geliyorsa
- Reset ve 2 dakikalık elektrik kesmeden sonra kod tekrar ediyorsa
- Kaba süzgeçteki kilit tırnakları yerine oturmuyorsa

Kılavuzun arıza bölümündeki uyarı net: usulüne uygun olmayan onarımlar tehlikelidir ve cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, süzgeç sistemi, musluk ve fiş sende; pompa, kart ve makinenin içi uzmanın.

## Servisi aramadan önce kısa özet

1. Ekranda tam olarak ne yazıyor: E:22 mi, E:92-40 mı, başka bir kod mu?
2. Süzgeçleri temizledin mi, doğru oturttun mu?
3. Kod Reset ve elektrik kesmeden sonra geri geldi mi?
4. Makinenin içinde su kalıyor mu?
5. Ürün numarası (E-Nr.) ve imalat numarası (FD) ne? Kılavuza göre ikisi de cihaz kapağının iç tarafındaki tip plaketinde.

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Süzgeç temizliğinin genel anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında, markalar arası kod rehberi [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
