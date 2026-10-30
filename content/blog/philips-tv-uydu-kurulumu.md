---
title: "Philips TV uydu kurulumu: anten türü, tam ve hızlı tarama"
description: "Philips TV uydu kurulumu nasıl yapılır? Kılavuza göre Arama Tipi'nde Uydu seçimi, Doğrudan, Tek kablolu ve DiSEqC anten türü, tam ve hızlı tarama."
slug: "philips-tv-uydu-kurulumu"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları, paket P34 (#181: satırdaki üç ifadeden belgede tanımlı olan tek konu = uydu kurulumu). Slug origin/main'de yok (ls-tree). Main'de Philips televizyon yazısı yok; en yakın: skytech-tv-uydu-ayarlama, sunny-tv-uydu-kurulumu.
# Belge (#88): Philips Türkçe kısa kullanım kılavuzu, dosya adı "04_[TR]_mb95_4100uk_DVBT_C_S2_PVR_32188LED", © 2012 TP Vision Netherlands, 10 s., md5 259924bb409869eed88d7a445f5a85b3. https://www.documents.philips.com/assets/20230224/07127eaaa6254799a65fafb300973035.pdf (curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf). pdftotext; sayfa = PDF sayfası (basılı "Türkçe- N -" numarası bir eksik).
#  s.3 uzaktan kumanda (mavi/yeşil tuş) · s.4 açma ve İlk Kurulum · s.5 Uydu kurulumu
# Belge tek model ailesi (DVB-T/C/S2) kısa kılavuzu; yazıda belirtildi. Türksat frekansı, kanallar silindi ve yeniden kurulum menüsü bu belgede YOK; yazılmadı. İkinci Philips PDF'i (DE SAT HDTV, Almanca/İngilizce) konuyla ilgisiz çıktığı için kullanılmadı.
# BİLEREK YAZILMAYANLAR: Türksat 4A frekans/transponder/sembol oranı (belgede yok) · kanalların silinme nedeni (belgede yok) · kanal taşıma (belgede yok) · çanak yönlendirme, LNB (uzman işi) · fiyat (#46).
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Uydu çanağından gelen kablo"]
steps:
  - "Televizyonu aç; ilk açılışta çıkan ekranda Ev Modu ya da Mağaza Modu'nu ve dili seçip OK'e bas."
  - "İlk Kurulum ekranındaki seçimleri izleyerek kuruluma devam et."
  - "Arama Tipi ekranında Uydu'yu seç."
  - "Anten Türü menüsünde Doğrudan, Tek kablolu ya da DiSEqC'ten çanak düzenine uyanı seç."
  - "Doğrudan'da uyduyu listeden seç; OK'ten sonra yeşil tuşla Hayır ile tam tarama, Evet ile hızlı kurulumu başlat."
  - "DiSEqC'te dört seçeneği ayarla; yeşil tuşla tüm uyduları, sarı tuşla yalnız vurgulanan uyduyu tara."
  - "OK ile kaydedip çık, sonra mavi tuşla kanal listesini düzenle."
faq:
  - q: "Philips TV'de uydu kurulumu nerede başlıyor?"
    a: "Philips'in bu kılavuzuna göre kurulum ilk açılışta çıkan İlk Kurulum ekranında yapılır; Arama Tipi ekranında Uydu'yu seçersen uydu ayarlanır ve uydu kanalları izlenir. Kılavuz, kurulumu sonradan yeniden başlatma menüsünü tarif etmiyor."
  - q: "Doğrudan, Tek kablolu ve DiSEqC arasındaki fark nedir?"
    a: "Kılavuza göre tek bir alıcın ve doğrudan çanağın varsa Doğrudan'ı seçersin. Birden çok alıcın ve tek kablolu sistemin varsa Tek kablolu, birden çok çanağın ve bir DiSEqC anahtarın varsa DiSEqC seçilir."
  - q: "Tam tarama ile hızlı kurulum ne demek?"
    a: "Kılavuz Doğrudan seçeneğinde iki yol veriyor. Tam tarama seçilen uydudaki mevcut servislerin hepsini arar. Hızlı kurulum ise her ülke için ana servislerden oluşan önceden belirlenmiş kanal listesini yükler."
  - q: "Türksat frekansını bu kılavuzdan girebilir miyim?"
    a: "Hayır. Bu Philips kılavuzu Türksat için frekans ya da sembol oranı vermiyor. Çanağını kuran firmadan ya da uydu operatöründen bilgiyi al."
images:
  coverAlt: "Oturma odasında duvardaki televizyonun ekranında uydu kurulum menüsü, balkonda çanak"
  steps:
    - "Kumandanın güç tuşuna basan beyaz eldivenli sade siluet el, ekranda dil seçim listesi"
    - "Kumandada OK tuşuna basan beyaz eldivenli sade siluet el, ekranda kurulum adımları listesi"
    - "Ekrandaki arama tipi listesinde uydu satırını seçen beyaz eldivenli sade siluet el"
    - "Ekrandaki anten türü listesinde bir satırı seçen beyaz eldivenli sade siluet el"
    - "Kumandada yeşil tuşa basan beyaz eldivenli sade siluet el, ekranda onay penceresi"
    - "Kumandada sarı tuşa basan beyaz eldivenli sade siluet el, ekranda uydu listesi"
    - "Kumandada mavi tuşa basan beyaz eldivenli sade siluet el, ekranda kanal listesi"
---

Philips televizyonda uydu kanallarını kurmak istiyorsun. Bu yazı Philips'in Türkçe kısa kullanım kılavuzundaki Uydu kurulumu bölümünden geliyor. Kılavuz DVB-T, DVB-C ve DVB-S2 alıcılı bir model ailesini anlatıyor; senin modelinin menüsü farklı olabilir. Kılavuz Türksat için frekans ya da sembol oranı vermiyor. Bu yüzden bu rehber hangi seçimin ne işe yaradığını anlatır, çanağa özel değerleri çanağı kuran firmadan almalısın.

> ⚠️ **Önce şunu bil:** Çanağı yönlendirmek, LNB'yi değiştirmek ya da kablo tesisatına dokunmak uzman işi; bu yazıda anlatılmıyor. Burada yalnız televizyonun menüsündeki seçimler var. Televizyonu tamamen kapatmak istersen kılavuza göre fişini prizden çekmen gerekir.

## Adım adım: Philips TV'de uydu kurulumu

**1. Televizyonu aç ve dili seç.** Televizyonu ilk açtığında dil seçim ekranı gelir. Kılavuza göre önce Ev Modu ya da Mağaza Modu'nu seçer, sonra dili seçip OK'e basarsın. Bekleme modundan çıkmak için kumandadaki güç tuşuna, CH- ya da CH+ tuşuna veya bir sayı tuşuna basabilirsin.

**2. İlk Kurulum ekranını izle.** Kılavuz, televizyonun kurulumunu İlk Kurulum ekranındaki seçimleri izleyerek yapmanı söylüyor. Bu ekran anten, kablolu yayın ve uydu seçeneklerini sunar. Antenle karasal yayın aramak istiyorsan Arama Tipi'nde Anten, kablolu yayın için Kablo seçilir. Biz uydunun yolunu izleyeceğiz.

**3. Arama Tipi'nde Uydu'yu seç.** Kılavuza göre Arama Tipi ekranında Uydu seçeneğini seçersen bir uydu ayarlayıp uydu kanallarını izleyebilirsin. Uydu kurulumunu seçince Anten Türü menüsü görünür.

**4. Anten türünü seç.** Anten Türü menüsünde üç seçenek var. Sol ve sağ yön tuşlarıyla Doğrudan, Tek kablolu ya da DiSEqC'i seçersin. Tek bir alıcın ve doğrudan çanağın varsa Doğrudan'ı, birden çok alıcın ve tek kablolu sistemin varsa Tek kablolu'yu, birden çok çanağın ve bir DiSEqC anahtarın varsa DiSEqC'i seç. Hangisine sahip olduğunu bilmiyorsan çanağı kuran firmaya sor.

**5. Doğrudan'da tam ya da hızlı kurulum.** Doğrudan'ı seçince yeni bir menü açılır. İmleci sola ya da sağa götürerek mevcut uydu listesinden uyduyu seç. Sonra iki yol var. Tam tarama için OK'e bas ve yeşil tuşla Hayır'ı seç; televizyon seçilen uydudaki mevcut servislerin hepsini arar. Hızlı kurulum için OK'e bas ve yeşil tuşla Evet'i seç; televizyon önceden belirlenmiş kanal listesini yükler. Kılavuz bu listeyi her ülke için ana servislerin hızlı kurulumu diye tarif ediyor. Kılavuzdaki not: arama süresi seçilen arama adımlarına göre değişir.

**6. DiSEqC'te dört seçeneği ayarla.** DiSEqC anahtarı seçince başka bir menü ekranı gelir. Kılavuz dört DiSEqC seçeneğini (varsa) ayarlamanı söylüyor. Tüm uyduları taramak için yeşil tuşa, yalnız vurgulanan uyduyu taramak için sarı tuşa bas. Tek kablolu sistemde OK'e basıp ekrandaki talimatları izle; tam ve hızlı kurulum için Doğrudan altındaki talimatlar geçerli.

**7. Kaydet ve kanal listesini düzenle.** Kaydedip çıkmak için OK'e bas. Kanal listesini sonradan düzenlemek için kumandadaki mavi düğmeyi kullanırsın; kılavuza göre bu düğme Kanal Listesini Düzenle işlevini de taşıyor. Yeşil düğme Program Listesi'ni (EPG) açar. Kumandaya ihtiyaç duymadan kanal değiştirmek için televizyonun yanındaki kaydırma düğmesinin ortasına bas; ekranda kanal bilgisi sembolü çıkar ve yukarı ve aşağı düğmeyle kayıtlı kanallar arasında gezinirsin.

## Anten ve kablo için kısa not

Aynı İlk Kurulum ekranı karasal ve kablolu yayını da kurar. Karasal dijital yayın için Arama Tipi'nde Anten'i seçersin. Televizyon LCN'e göre bir kanal listesi oluşturur ve arama bitince listeyi gösterir; kaydetmek için Evet'i seçip OK'e basarsın. LCN, kılavuza göre yayınları tanınabilir bir kanal sırasına göre düzenleyen Mantıklı Kanal Sayı sistemidir. Kablolu yayında KABLO'yu seçip OK'e basarsın. Sağlayıcın Network-ID temelli kurulumu destekliyorsa ekranda Evet'i seç, desteklemiyorsa Hayır'ı seçip ekrandaki talimatları izle. Frekans aralığını sayı tuşlarıyla elle de girebilirsin.

## Kurulumu sonradan nasıl yenilersin

Bu kısa kılavuz kurulumu ilk açılış için anlatıyor. Sonradan yeniden kurulum menüsünün yolunu vermiyor. Kılavuzun ilk sayfası destek için www.philips.com/welcome adresini gösteriyor; modelinin ayrıntılı kılavuzunu orada model numarasıyla ara.

## Ne zaman servis

- Çanak ve kablo sağlamken hiç uydu kanalı bulunmuyorsa
- Aynı çanak ve kablo başka bir alıcıda kanal veriyor ama Philips'te vermiyorsa
- Kurulum menüsü açılmıyor ya da arama yarıda kesiliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menüdeki seçimler sende; çanak, LNB ve kablo tesisatı ile televizyonun alıcı devresi uzman ya da yetkili servistir.

## İlgili yazılar

Uydu kurulumunu başka bir markada görmek istersen [Skytech TV uydu ayarlama](/blog/skytech-tv-uydu-ayarlama/) yazısına bak. Görüntü hiç gelmiyorsa [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/) sayfasına geç.

## Servisi aramadan önce kısa özet

1. Çanağın tek alıcılı, tek kablolu mu, DiSEqC'li mi?
2. Tam tarama mı, hızlı kurulum mu denedin?
3. Aynı çanak başka alıcıda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
