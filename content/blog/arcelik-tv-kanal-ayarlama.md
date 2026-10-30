---
title: "Arçelik TV kanal ayarlama: uydu arama ve kanal taşıma"
description: "Arçelik TV kanal ayarlama nasıl yapılır? Kılavuza göre uydu kolay kurulum, anten ve kablo taraması, program tablosunda kanal silme ve kanal taşıma."
slug: "arcelik-tv-kanal-ayarlama"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları, paket P34 (#180). Slug origin/main'de yok (ls-tree). Main'de Arçelik TV kanal yazısı yok; en yakın: sharp-tv-kanal-ayarlama, skytech-tv-kanal-tasima, panasonic-tv-kanal-arama, sunny-tv-kanallar-silindi.
# Belge (#88): Arçelik "Televizyon Kullanma kılavuzu A55-LS-9378" Türkçe, 33 s., md5 902b96338a8abdfbdb832ed9bc16b361. https://download.arcelik.com.tr/download.usagemanuals/28682_tr_TR_201411190914870_Kullanma-K%C4%B1lavuzu-Dosyatur__A.pdf (curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf). pdftotext; sayfa = PDF sayfası (basılı "N / 29 TR" numarası iki eksik).
#  s.6 anten bağlama · s.10 kurulum ve uydu kolay kurulum · s.11 karasal/kablolu arama, program tablosu, kanal silme · s.12 kanal taşıma · s.27 sorun giderme
# Belge eski (2014 baskı) tek model kılavuzu; yazıda model numarası belirtildi ve kendi kılavuzunu bulma yolu verildi. Arçelik destek siteleri 403 verdiği için başka belge indirilmedi.
# BİLEREK YAZILMAYANLAR: Gelişmiş uydu kurulumu (kılavuz web sitesindeki ayrıntılı kılavuza yolluyor) · Türksat frekans/transponder değerleri (belgede yok) · TKGS (belgede yok) · çanak yönlendirme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Uydu, anten ya da kablo bağlantısı"]
steps:
  - "Uydu kablosunu SATELLITE girişine, anten ya da kablo yayını kablosunu ANT IN girişine tak."
  - "Televizyonu açıp Kurulum Rehberi'nde dili, Ev Modu'nu ve ülkeyi seç."
  - "Kaynak Ayarları ekranında Bağlantı Tipi olarak Uydu, Anten ya da Kablo'yu seç."
  - "Uyduda Standart Mod ile Kolay kurulumu seç ve yeşil düğmeyle aramayı başlat."
  - "Anten ya da kabloda tarama tipini seç, kabloda Hızlı ya da Tam taramayı belirle ve yeşil düğmeyle ara."
  - "MENU, Kaynak Ayarı, Program Tablosu yolundan kanal listesini aç; istemediğin kanalı kırmızı ve sarı düğmeyle sil."
  - "Uydu kanalını kırmızı düğmeyle seçip OK ile yeni konumuna taşı."
faq:
  - q: "Arçelik TV'de kanal arama nereden yapılır?"
    a: "Kılavuza göre televizyon ilk açıldığında Kurulum Rehberi çıkar ve kanalları bu rehberdeki Bağlantı Tipi seçimiyle aratırsın. Rehber görünmüyorsa kılavuz, televizyonu fabrika ayarlarına döndürme talimatı için web sitesindeki ayrıntılı kılavuza bakmanı söylüyor."
  - q: "Arçelik TV'de kanalları nasıl taşırım?"
    a: "Kılavuzun 4.6.3 bölümüne göre Program Tablosu'nda kırmızı düğmeyle değişiklik moduna girer, taşınacak kanalı seçip kırmızı düğmeyle onaylar, yön tuşlarıyla yeni konuma götürüp OK'e basarsın. Kılavuz bu işlemin yalnız uydu kanalları için olduğunu yazıyor."
  - q: "Kanallar bozuk ya da gölgeli geliyorsa ne yapmalıyım?"
    a: "Sorun giderme bölümü kanal ayarının bozulmuş olabileceğini ve yeniden kanal ayarı ya da hassas ayar yapmanı söylüyor. Anten kablosu kopuk ya da anten ayarı bozuksa kablo ve anten sistemini yetkili bir kişiye kontrol ettirmelisin."
  - q: "Şifreli kanallar neden görünmüyor?"
    a: "Kılavuz bazı kanallarda görüntü olmamasının nedenini şifreli yayın olarak gösteriyor ve bu kanalları izlemek için abone olman gerekebileceğini yazıyor. Program Tablosu'nda kanal adının yanında CI işareti varsa kanalı izlemek için CI modülü ve akıllı kart gerekir."
images:
  coverAlt: "Oturma odasında televizyonun ekranında program tablosu açık, yanında uydu kablosu"
  steps:
    - "Televizyonun arkasındaki uydu girişine kabloyu takan beyaz eldivenli sade siluet el"
    - "Televizyon ekranında dil seçim listesi, kumandayı tutan beyaz eldivenli sade siluet el"
    - "Ekrandaki bağlantı tipi listesinde uydu satırını seçen beyaz eldivenli sade siluet el"
    - "Kumandada yeşil tuşa basan beyaz eldivenli sade siluet el, ekranda arama çubuğu doluyor"
    - "Ekrandaki tarama tipi listesinde bir satırı seçen beyaz eldivenli sade siluet el"
    - "Kanal listesinde bir kanalı işaretleyip kumandada sarı tuşa basan beyaz eldivenli sade siluet el"
    - "Listede bir kanalı yukarı oklarla yeni satırına taşıyan beyaz eldivenli sade siluet el"
---

Arçelik televizyonda kanallar gitti, yeni televizyon geldi ya da kanalların sırası karışık. Bu yazı Arçelik'in kendi kullanma kılavuzundan geliyor: A55-LS-9378 numaralı televizyon kılavuzu. Menü adları modele ve yazılım sürümüne göre değişir. Kendi modelinin kılavuzunu download.arcelik.com.tr adresinden model numarasıyla bulabilirsin; modelin numarası kutunun ve televizyonun etiketinde yazar.

> ⚠️ **Önce şunu bil:** Kılavuzun sorun giderme bölümü, uydu anteni ayarı doğru değilse anten ayarını yetkili bir kişiye yaptırmanı istiyor. Çanağı çevirmek, kabloyu uzatmak ya da anten sistemine müdahale etmek bu yazının dışında. Bu rehberde yalnız televizyonun kendi menüsündeki kanal ayarı var.

## Adım adım: Arçelik TV'de kanal ayarlama

**1. Kabloyu doğru girişe tak.** Kılavuza göre dijital uydu kanalları için uydu antenini televizyon üzerindeki SATELLITE anten girişine takarsın. Karasal dijital kanallar için çatı ya da iç mekan antenini, kablolu yayın için kablo ağının anten kablosunu ANT IN girişine takarsın. İç mekan anteninde yayın en iyi alınana kadar anteni farklı konumlarda denemen gerekebiliyor.

**2. Kurulum Rehberi'ni başlat.** Televizyon ilk açıldığında Kurulum Rehberi menüsü görünür. Dili seç. Ev Modu'nu seç; kılavuza göre bu, enerji tasarruflu önceden ayarlı moddur, Mağaza Modu ise mağazadaki tanıtım içindir. Ardından ülkeni seçip OK'e bas. Rehber çıkmıyorsa kılavuz, fabrika ayarlarına döndürme talimatı için web sitesindeki ayrıntılı kılavuzu gösteriyor.

**3. Bağlantı Tipi'ni seç.** Kaynak Ayarları menüsünde Bağlantı Tipi satırı seçili gelir. Sol ve sağ yön düğmeleriyle Uydu, Anten ya da Kablo'dan birini seç. Uydu kanalları ayrı, anten ve kablo kanalları ayrı kaydedilir; kılavuz her kaynağın program tablosunun ve favori listelerinin ayrı saklandığını yazıyor.

**4. Uyduda Kolay kurulumu çalıştır.** Mod seçiminde üç seçenek var: Digitürk Eutelsat, Digitürk Türksat ve Standart Mod. Kılavuz Digitürk üyeliği varsa Digitürk seçeneklerini, standart kurulum için Standart Mod'u gösteriyor. Standart Mod'da seçili uydu TURKSAT 42 Doğu olur. Kolay kurulumu seçip OK'e bas, ardından yeşil düğmeyle aramayı başlat. Arama birkaç dakika sürebilir. Program Tablosu görününce arama bitmiştir. Gelişmiş kurulum için kılavuz web sitesindeki ayrıntılı kılavuza yolluyor.

**5. Anten ya da kabloda tarama tipini seç.** Antende tarama tipi olarak DTV, ATV ya da DTV & ATV var; DTV yalnız dijital, ATV yalnız analog kanalları arar. Kabloda Kablo Tarama Tipi için Hızlı ya da Tam seçersin. Hızlı tarama kanalları kablo operatörü bilgisine göre ayarlar, Tam tarama seçili tüm frekans aralığını tarar. Kılavuz, bazı kablo sağlayıcılarının Hızlı taramayı desteklemediğini söylüyor. Yeşil düğmeyle başlat, MENU ile bitir.

**6. Kanalları sil.** MENU'ye bas, Kaynak Ayarı'nı, ardından Program Tablosu'nu seç. Kırmızı düğme değişiklik modunu açar. Silinecek kanalı seç ve sarı düğmeyle onayla. Tüm kanalları silmek için mavi düğme var; silmeyi yeşil düğmeyle onaylar, kırmızı düğmeyle iptal edersin.

**7. Uydu kanalını taşı.** Aynı Program Tablosu'nda kırmızı düğmeyle değişiklik moduna gir. Taşınacak kanalı seçip kırmızı düğmeyle onayla, yön tuşlarıyla yeni konumuna götür ve OK'e bas. Kılavuz bu işlemin yalnız uydu kanalları için olduğunu yazıyor. Favori listelerinde sıralama için ayrı bir bölüm var; en çok dört liste ve her listede 250 kanal tutulur.

## Sıralama ve favori listesi

Uydu kanallarını Program Tablosu'nda mavi düğmeyle sıralama moduna alıp uyduya, alfabeye ya da şifreli ve şifresiz olmasına göre dizebilirsin. Sık izlediğin kanallar için Program Tablosu'nda sarı düğmeyle liste görünümüne geç, kanalı seç ve yön düğmesiyle FAV1 ile FAV4 arasındaki listelerden birine ekle. Aynı kanal birden fazla listeye girebilir. Kılavuz favori listesinden kanal silindiğinde listedeki sıralamanın güncellendiğini yazıyor. Her favori listesine en fazla 250 kanal eklenebiliyor.

## Gölge, kopukluk ve şifreli kanal

Sorun giderme bölümü gölgeli görüntüde kanal ayarının bozulmuş olabileceğini söylüyor ve yeniden kanal ayarı yapmanı istiyor. Anten kablosunda kopukluk ya da anten ayarı bozuksa kablo ve anten sistemini yetkili bir kişiye kontrol ettirirsin. Bazı kanallarda görüntü yoksa yayın şifreli olabilir ya da kanal yalnız veri iletimi içindir.

## Ne zaman servis

- Kablo sağlam, tarama tekrarlanmış ama kanal bulunamıyorsa
- Aynı kablo başka bir cihazda kanal veriyor ama bu televizyonda vermiyorsa
- Menü açılmıyor ya da tarama yarıda kesiliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menüdeki tarama, silme ve taşıma sende; çanak, anten tesisatı ve televizyonun içi uzman ya da yetkili servistir.

## İlgili yazılar

Görüntü hiç gelmiyorsa [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/), kanal taşıma menüsünü başka bir markada görmek istersen [Skytech TV kanal taşıma](/blog/skytech-tv-kanal-tasima/) yazısına bak.

## Servisi aramadan önce kısa özet

1. Bağlantı uydu mu, anten mi, kablo mu?
2. Hangi tarama tipini denedin?
3. Aynı kablo başka cihazda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
