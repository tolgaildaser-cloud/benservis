---
title: "Uydu kanal sıralaması bozuldu: nasıl düzeltilir?"
description: "Uydu kanal sıralaması bozulduysa Vestel ve Grundig kılavuzlarına göre kanal listesini, TKGS çalışma modunu, kanal taşımayı ve LCN ayarını kontrol et."
slug: "uydu-kanal-siralamasi-bozuldu"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P37 (YK #197 boşluk, 2. dalga; PAKETLER.md P37 #193). Slug origin/main'de yok (doğrulayıcı). Satırda üç ifade var (sıralama bozuldu / kanallar gitti / az kanal buluyor); en güçlü tek konu sıralama seçildi, kanal eksikliği tek adım ve SSS olarak belgedeki karşılığıyla işlendi. Yakın markalı: skytech-tv-kanal-tasima, sunny-tv-uydu-kurulumu, skytech-tv-uydu-ayarlama; jenerik "uydu kanal sıralaması" yazısı yok.
# Kaynak (#88): Vestel 43UA9600 Android TV kullanım kılavuzu (20275679_k; TKGS Çalışma Modu, Kanal Sıralama/Taşıma, LCN, Kanal Kurulum Modu, Kanal Listesini Silme) + Grundig 65 GGU 8960 B kılavuzu (Kanal Düzenleyici, kanal taşıma, uydu güncellemesi, kanal sayısı eksikliği notu). Sayfa, alıntı ve md5 KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · Türksat frekans/transponder değerleri (belgede güncel değer yok) · çanak yönü, LNB ve DiSEqC donanımı (uzman) · "operatör sıralaması şudur" gibi belgede olmayan sıra bilgisi.
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası"]
steps:
  - "Düzenleyeceğin yayın kaynağının ve kanal kurulum modunun doğru seçili olduğuna bak."
  - "Kanal sıralama ve taşıma seçeneklerinin gri olup olmadığını kontrol et."
  - "Gri ise TKGS çalışma modunu Özelleştirilebilir ya da TKGS Kapalı yap."
  - "Kanalı kanal taşıma ya da kanal düzenleyiciyle istediğin konuma taşı."
  - "LCN ayarına bak; kanal numaralarının yayıncının sırasına göre dizildiğini bil."
  - "Uydu güncellemesinden sonra yeni kanalları listenin sonunda ara."
  - "Kanallar eksikse kablo, sinyal seviyesi ve LNB seçimini kontrol et; en son listeyi silip yeniden ara."
faq:
  - q: "Kanal sıralama ve kanal taşıma seçenekleri neden gri?"
    a: "Vestel'in kılavuzuna göre TKGS Çalışma Modu Otomatik olduğunda Kanal Sıralama, Kanal Taşıma ve Kanal Düzenleme kullanılamıyor ve gri görünüyor. Kısıtlamayı kaldırmak için modu TKGS Kapalı ya da Özelleştirilebilir yapmak gerekiyor. Operatör seçimine bağlı olarak bazı seçenekler yine de gri kalabilir."
  - q: "Kanal numaraları taşıyınca neden değişiyor?"
    a: "Grundig'in kılavuzu kanal sırasını değiştirirsen yayıncının yollamış olduğu kanal numaralarının değişeceğini yazıyor. Yani taşıma, listedeki numaraları senin sıranla değiştiriyor."
  - q: "Uydu güncellemesinden sonra yeni kanallar nerede çıkıyor?"
    a: "Grundig'e göre uydu güncelleme özelliği yalnız yeni eklenen kanalları buluyor ve program listesinin sonuna kaydediyor. Vestel'de Uydu Güncelleme önceki aramayı aynı ayarlarla tekrarlayarak güncellemeleri arıyor."
  - q: "Aramada çok az kanal bulunuyorsa ne yapmalıyım?"
    a: "Grundig bulunan kanal sayısında belirgin bir eksiklik ya da sinyal bulunamama durumunda kablo bağlantısını, sinyal seviyesini, DiSEqC A/B/C/D ve LNB seçimlerinin doğruluğunu kontrol etmeni istiyor."
images:
  coverAlt: "Ekranında karışık sırada kanal listesi görünen televizyon ve yanında kumanda"
  steps:
    - "Kumandada kaynak tuşuna basan beyaz eldivenli sade siluet el"
    - "Ekrandaki gri renkli kanal taşıma satırına bakan beyaz eldivenli sade siluet el"
    - "Kumandayla ayar menüsünde bir seçeneği değiştiren beyaz eldivenli sade siluet el"
    - "Kumandadaki yön tuşuyla listede bir kanalı yukarı taşıyan beyaz eldivenli sade siluet el"
    - "Kumandayla ekrandaki açık-kapalı anahtarına basan beyaz eldivenli sade siluet el"
    - "Kanal listesinin en altındaki yeni kanal satırına bakan beyaz eldivenli sade siluet el"
    - "Çanaktan televizyona uzanan kabloyu tutan beyaz eldivenli sade siluet el"
---

Sıraya alıştığın kanallar yer değiştirmiş, favorin başka numaraya geçmiş ya da sıralama seçenekleri tıklanmıyor. Uydu yayınında bu çoğu zaman bir ayarın sonucu: yanlış kanal listesi, kilitli sıralama modu ya da güncelleme sonrası eklenen kanallar. Vestel ve Grundig'in kullanım kılavuzlarını okuduk. Aşağıdaki adımlar bu iki kılavuzdan geliyor; menü adları modele ve operatör seçimine göre değişebilir.

> ⚠️ **Önce şu sınırı bil:** kanal listesini düzenlemek menüden yapılan bir işlem ve sende. Çanak yönü, LNB ve kablo ayarı ise uzman işi. Kanal sayısı çok eksikse bile çanağa kendin müdahale etme; önce aşağıdaki menü kontrollerini yap.

## Sıra neden bozulmuş görünür

Kılavuzlara göre dört neden öne çıkıyor. Baktığın liste farklı olabilir, çünkü her yayın kaynağı için ayrı tablo tutuluyor. TKGS Çalışma Modu sıralamayı kilitlemiş olabilir. Uydu güncellemesi yeni kanalları listenin sonuna eklemiş olabilir. Taşıdığın bir kanalın numarası da değişmiş olabilir. "Bozuldu" demeden önce hangisinin olduğuna bak.

## Adım adım: kanal sırasını düzeltme

**1. Doğru listede olduğundan emin ol.** Grundig'e göre arama sonunda bulunan kanallar her yayın kaynağı için ayrı saklanıyor: uydu (Standart), uydu (Operatör), kablo ve anten tabloları ayrı. Vestel'de aynı ayarın adı **Kanal Kurulum Modu** ve seçenekleri Anten, Kablo, Tercih Edilen Uydu ve Genel Uydu. Düzenlemeden önce doğru kaynağı seç; başka bir listeye bakıyor olabilirsin.

**2. Sıralama seçenekleri gri mi bak.** Vestel'e göre TKGS **Çalışma Modu** Otomatik ise Kanal Sıralama, Kanal Taşıma ve Kanal Düzenleme kullanılamıyor. Bu durumda kanal yerlerini değiştiremez, kanalı silemez, numarasını ya da adını değiştiremezsin.

**3. Çalışma modunu değiştir.** Vestel, kanal listesindeki kısıtlamaları kaldırmak için bu seçeneği **TKGS Kapalı** ya da **Özelleştirilebilir** yapmanı istiyor. Yol: TV seçenekleri, Gelişmiş Seçenekler, TKGS, Çalışma Modu. Vestel operatör seçimine bağlı olarak bazı seçeneklerin yine de gri kalabileceğini ekliyor.

**4. Kanalı taşı.** Vestel'de **Kanal Taşıma** için taşımak istediğin kanalı seçip OK'e basarsın, sonra ikinci bir kanal seçersin; ilk kanal ikincinin konumuna gider. **Kanal Sıralama** ise seçilen iki kanalın yerini değiştirir. Grundig'de **Kanal Düzenleyici** uygulamasında kanalı seçip yeşil düğmeye basarsın, sonra yeni konumu seçip onaylarsın. Grundig'in **Kanal Yeri Değiştirme** seçeneği iki kanalı karşılıklı değiştiriyor; kılavuzdaki örnek, 2 numaralı kanalla 20 numaralı kanalın yer değiştirmesi. Vestel'de **Kanal Atlama** ise program tuşlarıyla kanal değiştirirken atlanacak kanalları ayarlıyor. Grundig bir uyarı ekliyor: kanal sırasını değiştirirsen yayıncının yolladığı kanal numaraları değişir.

**5. LCN ayarına bak.** Vestel, LCN'i mevcut yayınları tanınabilir bir kanal numarası sırasına göre düzenleyen Mantıklı Kanal Numarası sistemi olarak tanımlıyor ve tercihini **LCN** seçeneğinden ayarlatıyor. Grundig'in kanallar menüsünde LCN **Açık** ya da **Kapalı** seçiliyor. LCN açıkken kanallar, varsa, yayıncının tanınabilir numara sırasına göre dizilir.

**6. Güncellemeden sonra sona bak.** Grundig'e göre uydu güncelleme yalnız yeni eklenen kanalları bulup program listesinin sonuna kaydediyor. Sıra bozuldu sandığın şey, listenin sonuna eklenen yeni kanal olabilir. Vestel'de ayrıca **Otomatik Kanal Güncelleme** açılıp kapatılabiliyor; **Kanal Güncelleme Mesajı** ise güncelleme olduğunda gösterilen mesajı açıp kapatıyor. Kanal Kurulum Modu Tercih Edilen Uydu ise Vestel, mevcut servislere bağlı olarak Uydu Güncelleme seçeneğinin farklı adlandırılabileceğini yazıyor.

**7. Kanal eksikse sinyale bak.** Grundig, bulunan kanal sayısında belirgin bir eksiklik varsa kablo bağlantısını, sinyal seviyesini, DiSEqC A/B/C/D ve LNB seçimlerinin doğruluğunu kontrol etmeni istiyor. Hâlâ düzelmiyorsa son çare kanal listesini silip yeniden aramak. Vestel'in **Kanal Listesini Silme** seçeneği seçilen kurulum modunun kayıtlı tüm kanallarını siliyor ve onay soruyor. Grundig'de aynı işlem **Kanal Listesini Temizle**.

## Kendi sıranı favori listesiyle kur

Yayıncının sırasına dokunmadan kendi sıranı istiyorsan favori listesi kullan. Grundig favori kanallarını 4 ayrı liste halinde kaydetmene izin veriyor ve favori listelerinin uydu, kablo ve anten kaynaklarının her biri için ayrı oluşturulması gerektiğini yazıyor. Listedeki kanalları yine Kanal Düzenleyici'de yeşil düğmeyle taşıyabilirsin. Vestel de favori kanalların için dört farklı liste oluşturmana izin veriyor.

## İki kılavuz yan yana

| Konu | Vestel | Grundig |
|---|---|---|
| Kanal taşıma | Kanal Taşıma, Kanal Sıralama | Kanal Düzenleyici, yeşil düğme |
| Kanal listeleri | Kanal Kurulum Modu | Her yayın kaynağı için ayrı |
| Silme | Kanal Listesini Silme | Kanal Listesini Temizle |

Taşıma ayrıntısı için [Skytech TV kanal taşıma](/blog/skytech-tv-kanal-tasima/) yazısına, uydunun baştan kurulumu için [Sunny TV uydu kurulumu](/blog/sunny-tv-uydu-kurulumu/) yazısına bakabilirsin. Bütün kanallar gittiyse [Vestel televizyon sinyal yok](/blog/vestel-televizyon-sinyal-yok/) yazısı da işe yarar.

## Servisi aramadan önce dört not

1. Televizyonun marka ve model kodu.
2. Kanal kurulum modu: Tercih Edilen Uydu, Genel Uydu ya da operatör.
3. TKGS Çalışma Modu'nun hangisi olduğu.
4. Sıranın ne zaman bozulduğu: güncelleme, elektrik kesintisi ya da yeniden arama sonrası mı.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
