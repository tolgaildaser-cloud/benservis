---
title: "Arçelik buzdolabı resetleme: fişten yeniden başlatma"
description: "Arçelik buzdolabı nasıl sıfırlanır? Kılavuza göre fişi çekme, 5 dakika bekleme, tuş kilidi ve fonksiyonları yeniden ayarlama, hata göstergesini okuma."
slug: "arcelik-buzdolabi-resetleme"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları, 2. dalga P07 (#43). Slug origin/main'de yok (ls-tree). Genel yazı buzdolabi-resetleme (Samsung/Bosch/Beko) var; Arçelik'e özel reset yazısı yok. Yakın Arçelik yazıları: arcelik-buzdolabi-hata-kodlari, arcelik-buzdolabi-sembolleri-ve-anlamlari, arcelik-buzdolabi-sogutmuyor.
# Konu kanıtı: Google otomatik tamamlama "buzdolabı sıfırlama" #2 (BOSLUK.md #43). GSC kanıt sayılmadı.
# Belge (#88): Arçelik buzdolabı kullanma kılavuzu 7289120181 (44 PDF sayfası), curl -sL -A "Mozilla/5.0", HTTP 200; ham dosya _kaynak/arcelik-buzdolabi-resetleme/. URL, md5 ve alıntılar KAYNAK.md'de. Sayfa = PDF sayfası.
# BİLEREK YAZILMAYANLAR: "gizli reset tuşu", servis menüsü, kart sıfırlama · kılavuzda olmayan "birkaç saat fişte beklet" süreleri · hata göstergesindeki rakamların anlamı (kılavuz yalnız "servise bilgi verir" diyor) · ücret (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Arçelik kullanma kılavuzu", "Telefon kamerası", "Saat ya da zamanlayıcı"]
steps:
  - "Resetlemeden önce hata göstergesini ve ekrandaki rakamları telefonla fotoğrafla."
  - "Tuş kilidi, tatil, hızlı soğut ya da hızlı dondur açıksa kapat."
  - "Kapı açık uyarısı çalıyorsa kapıyı kapat ya da ekrandaki bir düğmeye bas."
  - "Fişi prizden çek."
  - "Termostatlı modelde fişi takmadan önce 5 dakika bekle."
  - "Fişi tak, kompresörün devreye girmesi için yaklaşık 6 dakika tanı."
  - "Sıcaklık ve fonksiyon ayarlarını yeniden seç, sonra soğumasını bekle."
faq:
  - q: "Arçelik buzdolabında reset tuşu var mı?"
    a: "Kullandığımız kılavuzda reset ya da sıfırlama diye bir tuş ya da menü geçmiyor. Kılavuzdaki karşılığı fişi çekip yeniden takmak, açık fonksiyonları kapatmak ve sıcaklık ayarlarını yeniden seçmek."
  - q: "Arçelik buzdolabının fişi kaç dakika çekili kalmalı?"
    a: "Kılavuza göre mekanik kontrollü, yani termostatlı ürünlerde fişi çıkardıktan sonra yeniden takmak için 5 dakika beklemelisin. Dijital göstergeli modeller için ayrı bir süre yazmıyor; aynı süreyi uygulamak güvenli taraf."
  - q: "Elektrik kesilince ayarlarım silinir mi?"
    a: "Hızlı soğut ve hızlı dondur gibi fonksiyonlar için kılavuz açık: elektrik kesintisi sonrası bu fonksiyon hatırlanmaz. Gerekirse yeniden seçmen gerekir."
  - q: "Fişi taktım, buzdolabı çalışmıyor, ne yapmalıyım?"
    a: "Kılavuza göre ani elektrik kesilmesinde ya da fiş çıkarılıp takılınca gaz basıncı dengelenmediği için kompresör koruyucu termiği atar. Yaklaşık 6 dakika sonra çalışmaya başlamalı. Başlamazsa kılavuz servis çağırmanı söylüyor."
  - q: "Ekranda e harfi ve bir rakam görüyorum, bu ne demek?"
    a: "Kılavuza göre hata durumu göstergesi yeterli soğutma yapılamadığında ya da sensör hatasında yanar. Dondurucu göstergesinde e harfi, soğutucu göstergesinde 1, 2, 3 gibi rakamlar çıkar ve bu rakamlar servise hata bilgisi verir."
images:
  coverAlt: "Prizden çekilmiş fişi ve yanında kum saati bulunan sade bir buzdolabı çizimi"
  steps:
    - "Buzdolabı ekranının fotoğrafını telefonla çeken beyaz eldivenli sade siluet el"
    - "Kontrol paneli üzerindeki bir tuşa basılı tutan beyaz eldivenli sade siluet el"
    - "Hafif aralık kalmış buzdolabı kapısını kapatan beyaz eldivenli sade siluet el"
    - "Buzdolabı fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Prizden çekilmiş fişin yanında kum saati simgesi"
    - "Fişi prize takan beyaz eldivenli sade siluet el ve arka alt köşede çalışmaya başlayan kompresörü gösteren ses dalgası"
    - "Sıcaklık ayar tuşuna basan beyaz eldivenli sade siluet el ve yanında soğuma ilerlemesini gösteren sade çizgi"
---

Buzdolabı garip davranıyor: ekranda bir işaret yanıyor, ses susmuyor ya da tuşlar cevap vermiyor. İlk akla gelen "resetlemek" oluyor. Arçelik'in 7289120181 numaralı kullanma kılavuzunu baştan sona taradık ve yalnız orada yazanları sıraya koyduk.

Bir şeyi baştan söyleyelim: kılavuzda reset ya da sıfırlama adıyla bir tuş yok. Kılavuzun anlattığı yol fişten yeniden başlatma, açık fonksiyonları kapatma ve ayarları yeniden seçmek. Tuş adları modele göre değişir; kendi kılavuzunla karşılaştır.

> 🧊 **Önce bil:** Arçelik'e göre termostatlı ürünlerde fişi çektikten sonra yeniden takmak için 5 dakika beklemelisin. Fiş takıldıktan sonra da kompresör yaklaşık 6 dakika sonra çalışır. Bu bekleme normal, arıza değil.

## Adım adım: Arçelik buzdolabını yeniden başlatmak

**1. Önce göstergeyi fotoğrafla.** Hata durumu göstergesi, buzdolabı yeterli soğutma yapamadığında ya da sensör hatası olduğunda yanar. Dondurucu göstergesinde e harfi, soğutucu göstergesinde 1, 2, 3 gibi rakamlar belirir. Kılavuza göre bu rakamlar hata hakkında servise bilgi verir, yani anlamı kılavuzda açıklanmıyor. Resetten önce fotoğrafını çek, servis gerekirse işine yarar.

**2. Açık fonksiyonları kapat.** Bazen sorun arıza değil, açık kalmış bir fonksiyondur. Tuş kilidi aktifken hiçbir buton işlevini yapmaz; kılavuza göre tuş kilidi butonuna 3 saniye basınca devreye girer, çıkmak için aynı butona 3 saniye tekrar basılır. Bazı modellerde kilit için soğutucu ve dondurucu ayar butonlarına birlikte 3 saniye basılıyor. Tatil, hızlı soğut ve hızlı dondur fonksiyonları da ilgili butona tekrar basılarak iptal edilir.

**3. Kapı açık uyarısını sustur.** Kılavuza göre kapı 1 dakika açık kalırsa uyarı sesi duyulur. Kapıyı kapatınca ya da varsa ekran düğmelerinden birine basınca ses kesilir. Alarm çalıyorsa önce kapının tam kapandığından emin ol.

**4. Fişi prizden çek.** Fişi çekerken kablodan değil fişten tut. Kılavuz, ürünün temizliği ve bakımı sırasında da fişin çekilmesini istiyor.

**5. 5 dakika bekle.** Arçelik, mekanik kontrollü (termostatlı) ürünlerde fişi yeniden takmak için 5 dakika beklemeni yazıyor. Dijital göstergeli modeller için kılavuzda ayrı bir süre yok. Bu yüzden aynı 5 dakikayı bir telefon zamanlayıcısıyla uygulamak mantıklı, ama bunu kılavuz modele göre ayırmıyor diye not düşelim.

**6. Fişi tak ve kompresörü bekle.** Kılavuzun sorun giderme bölümü şöyle diyor: ani elektrik kesilmesinde ya da fiş çıkarılıp takılınca soğutma sistemindeki gaz basıncı henüz dengelenmediği için kompresör koruyucu termiği atar. Yaklaşık 6 dakika sonra ürün çalışmaya başlar. Bu süre sonunda çalışmazsa kılavuz servis çağırmanı söylüyor.

**7. Ayarları yeniden seç ve soğumasını bekle.** Kılavuzda hızlı soğut için açıkça yazıyor: elektrik kesintisi sonrası bu fonksiyon hatırlanmaz. Hızlı dondur için de aynı not var. Dondurucu ve soğutucu sıcaklığını ayar butonlarıyla yeniden seç. Kılavuza göre fiş yeni takıldığında ürünün ayarlanan sıcaklığa ulaşması daha uzun zaman alır ve bu normaldir. Bu sürede kapıyı sık açma, sıcak yemek koyma.

## Bazı fonksiyonlar kendiliğinden kapanır

Ayarların "kayboldu" sanılması çoğu zaman bununla ilgili. Kılavuza göre hızlı soğut fonksiyonu iptal edilmezse, panele göre 2 ya da 4 saat sonra ya da soğutucu bölme yeterli soğukluğa ulaşınca otomatik olarak iptal olur. Hızlı dondur fonksiyonu için kılavuz panele göre 4 ya da 8 saat, ya da dondurucunun yeterli soğukluğa ulaşmasını yazıyor. Yani bu fonksiyonların kapanması reset gerektiren bir sorun değil, tasarım gereği.

Ekranın sönmesi de arıza sayılmaz. Kılavuza göre bazı modellerde gösterge paneli kapı kapandıktan 5 dakika sonra otomatik olarak söner; kapı açılınca ya da herhangi bir tuşa basılınca yeniden aktif olur. Enerji tasarrufu fonksiyonu devredeyken de enerji tasarrufu simgesi dışındaki simgeler söner. Bu fonksiyon kılavuzda fabrika çıkışı aktif bir fonksiyon olarak geçiyor ve iptal edilemiyor.

## Reset ne zaman işe yaramaz

Fişten yeniden başlatma yalnızca geçici sorunlarda işe yarar. Kılavuz, sorun giderme listesindeki adımları uygulamana rağmen sorun sürüyorsa ürünü aldığın bayiye ya da yetkili servise başvurmanı söylüyor. Aynı kılavuz, arızalı ürünün onarılmadan çalıştırılmamasını ve hasarlı elektrik kablosunun yetkili serviste değiştirilmesini istiyor. Yani kablo, ampul ya da elektronik kart gibi konularda kendin müdahale etme.

## Daha fazla bilgi

Panelde yanan simgeler için [Arçelik buzdolabı sembolleri ve anlamları](/blog/arcelik-buzdolabi-sembolleri-ve-anlamlari/) yazısına bak. Hata göstergesi için [Arçelik buzdolabı hata kodları](/blog/arcelik-buzdolabi-hata-kodlari/), soğutma sorunu için [Arçelik buzdolabı soğutmuyor](/blog/arcelik-buzdolabi-sogutmuyor/) sayfası var. Markadan bağımsız adımlar için [buzdolabı resetleme](/blog/buzdolabi-resetleme/) rehberini aç.

## Servis çağırmadan önce üç dakika

1. Fiş prize tam oturuyor mu, prizin sigortası atmış mı?
2. Tuş kilidi, tatil ya da hızlı fonksiyonlardan biri açık kalmış mı?
3. Fişi taktıktan sonra yaklaşık 6 dakika beklendi mi?
4. Hata göstergesinde e harfi ve rakam var mı, fotoğrafı çekildi mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
