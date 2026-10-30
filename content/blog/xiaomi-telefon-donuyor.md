---
title: "Xiaomi telefon donuyor: Xiaomi'nin önerdiği çözüm sırası"
description: "Xiaomi ya da Redmi telefon donuyor, dokunuşa yanıt vermiyor mu? Xiaomi Türkiye destek adımlarıyla zorla yeniden başlatmadan kurtarma moduna sıra."
slug: "xiaomi-telefon-donuyor"
date: "2026-11-02"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (telefon YK #192, Pzt 2 Kas kuyruğu). Slug origin/main'de yok (doğrulayıcı). xiaomi-telefon-pil-cabuk-bitiyor PR #413'te (merge değil) → bağlantı verilmedi.
# Kaynak (#88, tek izinli kaynak): mi.com/tr/support/faq/details/KA-03342/ — sayfa JS kabuğu; metin HTML içindeki window.__PRELOADED_STATE__ JSON'undan okundu (pagedata.faq_details.content + seo FAQPage, ikisi aynı). md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · "çıkarılabilir pili fişten çekin" cümlesi (belirsiz) · loglama kategori tablosu (servis içi) · kaynakta olmayan güvenli mod / önbellek tüyoları · cihaz içi müdahale.
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Yedekleme için bilgisayar ya da bulut hesabı", "Mi hesabı şifresi"]
steps:
  - "Bir uygulama açıkken donduysa bir süre bekle; 'program yanıt vermiyor, kapatılsın mı?' benzeri uyarı çıkınca uygulamayı kapat ya da yeniden aç."
  - "Telefon uzun süre yanıt vermezse home tuşuna dokun ya da ekranı yukarı kaydır; görev yöneticisinden arka plandaki uygulamaları sonlandır."
  - "Hâlâ yanıt yoksa güç düğmesini 10 saniyeden uzun basılı tutarak zorla yeniden başlat."
  - "Hep aynı uygulama çöküyorsa sorunun o uygulamadan olup olmadığını kontrol et; uygulamayı kaldır ya da aynı işi gören başka bir uygulama kullan."
  - "Telefonun rootlu olup olmadığını kontrol et."
  - "Donma sık oluyor ve tek bir uygulamaya bağlı değilse verilerini yedekle, sonra telefonu fabrika ayarlarına geri yükle."
  - "Bunlar sonuç vermezse telefonu en son sürüme güncelle; sorun sürerse teknik servise başvur."
  - "Telefon Mi logosunda kalıyor ya da yeniden başlatma döngüsüne giriyorsa verilerin silineceğini kabul ederek kurtarma modundan Wipe data > Wipe all data yolunu izle."
faq:
  - q: "Xiaomi telefonun ara sıra takılması arıza mı?"
    a: "Xiaomi'nin Türkçe destek sayfasına göre telefonun ara sıra takılması ya da donması normal bir durumdur. Uygulama yanıt vermiyorsa bir süre beklemek ve çıkan uyarıdan uygulamayı kapatmak ya da yeniden açmak ilk adımdır."
  - q: "Xiaomi telefonu zorla nasıl yeniden başlatırım?"
    a: "Xiaomi, telefon yanıt vermezse güç düğmesini 10 saniyeden uzun basılı tutmanı öneriyor. Bu, zorla yeniden başlatma adımıdır."
  - q: "Kurtarma modundan veri silince ne olur?"
    a: "Xiaomi'ye göre veriler başarıyla temizlendiğinde telefon fabrika ayarlarına döner. Telefonda Mi hesabı oturumu açıksa telefonun açılabilmesi için o Mi hesabının şifresini girmen gerekir. Bu yüzden şifreni önceden bildiğinden emin ol."
  - q: "Sorun geçtiyse Xiaomi'ye nasıl bildiririm?"
    a: "Xiaomi, sorun bir kez yaşandıysa ya da çözüldüyse Ayarlar'ı açıp en alttaki Hizmetler&Geri Bildirim bölümünden sorunu seçerek geri bildirim göndermeni rica ediyor. Geri bildirim, geliştirme ekibinin sistemi iyileştirmesi için kullanıcı günlüklerini içerir."
images:
  coverAlt: "Masada duran, ekranı donmuş görünen bir akıllı telefonun sade çizimi"
  steps:
    - "Ekranında boş bir uyarı kutusu ve iki düğme görünen telefon çizimi"
    - "Ekranı alttan yukarı kaydıran buğday tenli sade siluet el"
    - "Telefonun yan güç düğmesine basılı tutan buğday tenli sade siluet el ve yanında kum saati simgesi"
    - "Ekranında çarpı işaretli tek bir uygulama simgesi görünen telefon çizimi"
    - "Ekranında kilit ve kalkan simgesi görünen telefon çizimi"
    - "Telefondan buluta giden yedek oku ve yanında sıfırlama simgesi çizimi"
    - "Ekranında aşağı ok simgeli güncelleme çubuğu olan telefon çizimi"
    - "Siyah ekranda yazısız menü satırları görünen ve yan tuşlarına iki parmakla basılan telefonu tutan buğday tenli sade siluet el"
---

Telefon bir anda takılıyor, ekran dokunuşa yanıt vermiyor ya da açılışta logoda kalıyor. "Xiaomi telefon donuyor" ya da "Redmi telefon donuyor" diye arayanlar için Xiaomi Türkiye'nin destek sayfasında tek bir SSS makalesi var. Xiaomi, makalenin tüm modeller için geçerli olduğunu belirtiyor. Aşağıdaki adımların hepsi bu makaleden alındı. Kendi tahminimizi eklemedik. Makalenin son bölümü servis çalışanına hitap eden bir dille yazılmış; o kısmı sana göre sadeleştirdik, anlamı değiştirmedik.

Telefonun içini açmak ya da parça değiştirmek bu listenin parçası değildir. O kısım servis işidir. Yakınındaki servisi Benservis'te bulabilirsin.

> 📱 **Önce şu ayrımı yap:** telefon **ara sıra mı** takılıyor, **sık sık mı** donuyor, yoksa **Mi logosunda mı kalıyor**? Ara sıra takılıyorsa 1–3. adımlar yeter. Sık sık donuyorsa 4–7. adımlara geç. Telefon logoda kalıyor ya da sürekli yeniden başlıyorsa 8. adıma bak.

## Adım adım: donan Xiaomi telefon için sıra

**1. Uygulama yanıt vermiyorsa bekle.** Bir uygulamayı kullanırken telefon donarsa Xiaomi'nin ilk önerisi **bir süre beklemek**. Ardından ekranda "… programı yanıt vermiyor, kapatılsın mı?" benzeri bir uyarı belirir. Uygulamayı kapatmak ya da yeniden açmak için uyarıya dokun.

**2. Ana ekrana dön, arka plandaki uygulamaları kapat.** Telefon uzun süre donup yanıt vermezse önce **home tuşuna** dokun. Telefonu yardımcı tuşlar olmadan, tam ekran kullanıyorsan ekranı **yukarı kaydır**. Ana ekrana dönebiliyorsan **görev yöneticisini** aç ve arka plandaki uygulamaları sonlandır. Sonra uygulamayı yeniden açıp kullanmayı dene.

**3. Yanıt yoksa zorla yeniden başlat.** Telefon hâlâ yanıt vermiyorsa Xiaomi zorla yeniden başlatmayı öneriyor. Bunun için **güç düğmesini 10 saniyeden uzun** basılı tut.

**4. Hep aynı uygulama çöküyorsa onu ele al.** Belirli bir uygulama sürekli çöküyorsa sorunun **uygulamanın kendisinden** kaynaklanıp kaynaklanmadığını kontrol et. Xiaomi bu durumda o uygulamayı kaldırmayı ya da aynı işi gören başka bir uygulama indirmeyi öneriyor.

**5. Telefon rootlu mu, bak.** Xiaomi'ye göre root işleminden sonra sistem en yüksek yetkiye sahip olur. Bu yetki de sistemin **kararsız davranmasına** yol açabilir.

**6. Sık donuyorsa yedekle ve fabrika ayarlarına dön.** Donma ve çökmeler sık oluyor ve sorun belirli bir uygulamadan kaynaklanmıyorsa Xiaomi'nin önerisi net: önce **verilerini yedekle**, sonra telefonu **fabrika ayarlarına geri yükle**. ⚠️ Yedek almadan bu adıma geçme.

**7. Güncelle, sürerse servise başvur.** Yukarıdaki yöntemler sonuç vermezse telefonu **en son sürüme** güncelle. Sorun hâlâ devam ediyorsa Xiaomi teknik servise başvurmanı öneriyor.

**8. Mi logosunda kalıyorsa kurtarma modu.** Çökme ya da yeniden başlatmadan sonra telefon **Mi logosu** ekranında takılı kalıyor ya da **yeniden başlatma döngüsüne** giriyorsa Xiaomi kurtarma modunu tarif ediyor. ⚠️ Bu yol telefondaki **tüm verileri siler**. Xiaomi bu adımdan önce verilerin silinmesine onay verilip verilmediğinin teyit edilmesini istiyor. Kabul ediyorsan: **ses açma** ve **güç** düğmelerine uzun basarak **Kurtarma Modu**'na gir. Ses açma ve ses kısma tuşlarıyla seçenekler arasında geç. **Wipe data** seçeneğini **güç düğmesiyle** seç. Gelen ekranda **Wipe all data**'ya dokun.

## Ara sıra takılma neden normal sayılıyor?

Xiaomi'nin sayfası işe bu cümleyle başlıyor: telefonun ara sıra takılması ya da donması normal bir durumdur. Sayfa sorunu üç bölüme ayırıyor. Birincisi nadiren yaşanan çökmeler ve takılmalar; çözümü beklemek, uygulamayı kapatmak ve zorla yeniden başlatmak. İkincisi sık yaşanan donmalar; burada uygulama kontrolü, root kontrolü, fabrika ayarları ve güncelleme devreye giriyor. Üçüncüsü telefonun Mi logosunda kalması ya da yeniden başlatma döngüsüne girmesi; burada kurtarma modu anlatılıyor.

Bu ayrım önemli. Xiaomi fabrika ayarlarına dönmeyi yalnız ikinci durumda öneriyor: donma ve çökmeler sık oluyorsa ve sorun belirli bir uygulamadan kaynaklanmıyorsa. Ara sıra takılan bir telefonda ilk üç adımla başla.

## Kurtarma modundan önce bilmen gereken iki şey

Birincisi, Xiaomi'ye göre veriler başarıyla temizlendiğinde telefon **fabrika ayarlarına döner**. Yani 8. adım telefondaki verileri temizler.

İkincisi, telefonda **Mi hesabı oturumu açıksa** telefonun yeniden açılabilmesi için o Mi hesabının **şifresini girmen** gerekir. Bu yüzden şifreni önceden hazır tut.

Kurtarma moduna giremiyorsan ya da kurtarma modunda veri temizleme işlemi olmuyorsa Xiaomi teknik servise başvurmanı öneriyor.

## Sorun geçtiyse geri bildirim gönder

Xiaomi, sorun yalnız bir kez yaşandıysa ya da çözüldüyse geri bildirim göndermeni rica ediyor. Yol: ana ekranda **Ayarlar**'ı aç, en alttaki **Hizmetler&Geri Bildirim** bölümünde sorununu seç ve gönder. Xiaomi'ye göre bu geri bildirim, geliştirme ekibinin sistemi iyileştirmesi için kullanıcı günlüklerini içerir.

## İlgili yazı

Telefon donmanın yanında çabuk şarj bitiriyorsa: [Xiaomi telefon pili çabuk bitiyor: Xiaomi'nin kontrol sırası](/blog/xiaomi-telefon-pil-cabuk-bitiyor/)

## Buradan sonrası servis işi

Beklemek, uygulamaları kapatmak, zorla yeniden başlatmak, uygulama ve root kontrolü, fabrika ayarları ve güncelleme kullanıcı seviyesindeki işlerdir. Bunlara rağmen telefon donmaya devam ediyorsa ya da kurtarma moduna girilemiyorsa Xiaomi teknik servise başvurmanı öneriyor. Telefonun içini açmak bu listenin parçası değildir. Parça değişimi gerekiyorsa üreticinin resmî servis sayfasına bak.

## Servis çağırmadan önce üç dakika

1. Telefon **ara sıra mı**, **sık sık mı** donuyor, not et.
2. Donma **hep aynı uygulamada** mı oluyor, yaz.
3. Telefon **Mi logosunda** kalıyorsa Mi hesabı şifreni hazır tut.

Bu notlarla servise gitmek işi hızlandırır. Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
