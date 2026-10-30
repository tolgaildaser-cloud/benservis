---
title: "Yazdırma kuyruğu takıldı: işleri iptal etme ve temizleme"
description: "Belge kuyrukta takıldıysa işleri iptal et, Yazdırma Biriktiricisi'ni yeniden başlat, gerekirse spool klasörünü temizle. Microsoft ve Epson belgelerinden."
slug: "yazici-yazdirma-kuyrugu-takildi"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P45 (YK #197 boşluk, BOSLUK.md #105). Slug origin/main'de yok. Yakın yazılar: yazici-cevrimdisi-gorunuyor, yazici-kagit-sikisti.
# Kaynak (#88): Microsoft Destek "Windows'ta yazdırma işi kuyrukta takılı kaldı hatalarını düzeltme" (kuyruk Windows bileşeni; üretici Microsoft) ve Epson L200 çevrimiçi kılavuz "Yazdırmayı İptal Etme". URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · komut satırı (net stop/del) ve kayıt defteri yöntemleri (belgede yok) · HP ve Canon'un kuyruk iptal belgeleri (indirilmedi; 2 belge sınırı) · Mac ve mobil.
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Yazdırma sürerken bilgisayardaki ilerleme göstergesinde Durdur düğmesine tıkla."
  - "İş yazıcıya tamamen gönderildiyse işi yazıcıdan durdur."
  - "Windows ayarlarında yazdırma kuyruğunu aç ve her işi tek tek iptal et."
  - "Kuyruk temizlenmediyse Yazdırma Biriktiricisi hizmetini yeniden başlat."
  - "Hâlâ takılıysa biriktiriciyi durdur ve spool klasöründeki dosyaları sil."
  - "Biriktirici hizmetini yeniden başlat."
  - "Yazıcıyı kapat, en az 60 saniye bekle, aç ve bilgisayarı yeniden başlat."
  - "Tek bir belgeyle yazdırmayı yeniden dene."
faq:
  - q: "Yazdırma kuyruğu neden takılır?"
    a: "Microsoft'un belgesine göre belgeler kuyrukta takıldığında ya da yeni işler takılan görevler yüzünden devam etmediğinde aynı adımlar uygulanıyor. Belgede ayrı bir neden listesi yok; çözüm sırası iptal, biriktirici ve spool klasörü."
  - q: "İptal ettim ama iş kuyruktan gitmiyor, ne yapmalıyım?"
    a: "Microsoft, işleri iptal etme işlemi kuyruğu temizlemezse biriktiriciyi durdurup spool klasöründeki dosyaları silmeni ve hizmeti yeniden başlatmanı söylüyor."
  - q: "Yazıcıya tamamen gönderilmiş işi bilgisayardan iptal edebilir miyim?"
    a: "Epson kılavuzuna göre hayır. Tamamı yazıcıya gönderilmiş bir yazdırma işini bilgisayardan iptal edemezsin; işi yazıcıdan iptal edersin."
images:
  coverAlt: "Bilgisayar ekranında takılı kalmış bekleyen belge listesi ve yanında yazıcı, listeye uzanan beyaz eldivenli sade siluet el"
  steps:
    - "Ekrandaki ilerleme penceresinde durdur düğmesine basan beyaz eldivenli sade siluet el"
    - "Yazıcının üstündeki durdurma düğmesine basan beyaz eldivenli sade siluet el"
    - "Bekleyen işler listesinde bir işe sağ tıklayıp iptal eden beyaz eldivenli sade siluet el"
    - "Hizmetler penceresinde biriktirici satırına sağ tıklayan beyaz eldivenli sade siluet el"
    - "Dosya penceresindeki geçici belge dosyalarını silen beyaz eldivenli sade siluet el"
    - "Hizmetler penceresinde biriktiriciyi yeniden başlatan beyaz eldivenli sade siluet el"
    - "Yazıcının fişini prizden çeken beyaz eldivenli sade siluet el ve yanında saat çizimi"
    - "Bilgisayardan tek sayfalık belgeyi yazdırmaya gönderen beyaz eldivenli sade siluet el"
---

Yazdır'a bastın, belge kuyruğa girdi ama bir türlü çıkmıyor. Üstüne yeni belge gönderince onlar da bekliyor. Kuyruktaki işi silmeye çalışıyorsun, iş yerinden kıpırdamıyor. Microsoft bu duruma "yazdırma işi kuyrukta takılı kaldı" diyor ve çözümü dört adımda veriyor. Epson'un kendi kılavuzu ise yazdırmayı yazıcı tarafından nasıl iptal edeceğini gösteriyor. İkisini bir araya getirdik.

> ⚠️ **Önce şu sınırı bil:** burada yazıcının içine dokunmak yok. Tek "sil" işlemi, Windows'un geçici yazdırma klasöründeki dosyalar. Microsoft'un belgesi yalnız C:\Windows\System32\spool\PRINTERS klasöründeki dosyaları silmeni söylüyor. Başka klasöre dokunma.

## Adım adım: kuyruğu temizleme

**1. İlerleme göstergesinden durdur.** Epson kılavuzuna göre yazdırmaya başladığında ekranda bir ilerleme göstergesi çıkar. Yazdırmayı iptal etmek için Durdur düğmesine tıkla.

**2. Yazıcıdan durdur.** Epson, yürütülmekte olan bir işi iptal etmek için yazıcıdaki durdurma/bakım düğmesine basmanı söylüyor. Kılavuz bir ayrıntıyı özellikle belirtiyor: tamamı yazıcıya gönderilmiş bir işi bilgisayardan iptal edemezsin. Bu durumda işi yazıcıdan iptal edersin.

**3. Windows'ta kuyruğu aç ve iptal et.** Microsoft'a göre Başlat, Ayarlar, Bluetooth ve cihazlar, Yazıcılar ve tarayıcılar yolundan yazıcını seç, ardından Yazdırma kuyruğunu aç'ı seç. Her yazdırma işine sağ tıkla ve kaldırmak için İptal'i seç. Windows 10'da yol Ayarlar, Cihazlar, Yazıcılar ve Tarayıcılar şeklinde. Epson sürücüsü kuruluysa EPSON Status Monitor 3'ü açıp Print Queue düğmesine tıklayarak da aynı kuyruğa ulaşırsın; işe sağ tıklayıp Cancel (İptal) seçilir.

**4. Biriktiriciyi yeniden başlat.** Microsoft'a göre yazdırma işlerini Yazdırma Biriktiricisi hizmeti yürütür ve hizmeti yeniden başlatmak geçici sorunları çözebilir. Windows tuşu ve R'ye bas, services.msc yaz, Enter'a bas. Listede Yazdırma Biriktiricisi'ni bul, sağ tıkla ve Yeniden Başlat'ı seç.

**5. Spool klasörünü temizle.** Microsoft bu adımı yalnız işleri iptal etmek kuyruğu temizlemezse öneriyor. Önce services.msc'den Yazdırma Biriktiricisi'ne sağ tıklayıp Durdur'u seç. Dosya Gezgini'ni aç, C:\Windows\System32\spool\PRINTERS konumuna git ve klasördeki tüm dosyaları sil.

**6. Biriktiriciyi başlat.** Aynı services.msc penceresinde Yazdırma Biriktiricisi'ne sağ tıkla ve Başlat'ı seç.

**7. Yazıcıyı ve bilgisayarı yeniden başlat.** Microsoft yazıcıyı kapatmanı, en az 60 saniye beklemeni ve yeniden açmanı söylüyor. Ardından Güç, Yeniden Başlat ile bilgisayarı yeniden başlat.

**8. Yeniden dene.** Yazdırmayı yeniden dene. İlk denemeyi tek sayfalık bir belgeyle yapmak, kuyruğun gerçekten temizlendiğini görmeni sağlar.

## Microsoft'un sırası

Microsoft belgeyi iki durum için yazmış: belgeler yazdırma kuyruğunda takılmış ve yazdırılmıyorsa, ya da yeni yazdırma işleri takılan görevler yüzünden devam etmiyorsa. Çözüm dört adım: Windows ayarlarından tüm yazdırma işlerini iptal et, biriktirici hizmetini yeniden başlat, biriktirme klasörünü elle temizle, bilgisayarı ve yazıcıyı yeniden başlat. Üçüncü adımın başında bir not var: işleri iptal etme işlemi kuyruğu temizlemezse bu yöntemi kullan. Yani elle silme, ilk değil son çare.

Belge bu adımları Windows 11 ve Windows 10 için veriyor. Windows 10 için yol biraz farklı: Ayarlar, Cihazlar, Yazıcılar ve Tarayıcılar, ardından yazıcını seçip Sırayı aç. Windows 10 desteğinin sona erdiğini de Microsoft aynı sayfada hatırlatıyor.

## Sırayı bozma

Microsoft adımları belli bir sırayla veriyor. Spool klasörüne dokunmadan önce Yazdırma Biriktiricisi'ni durdurman gerekiyor; klasördeki dosyalar silindikten sonra hizmet yeniden başlatılıyor. Bu yüzden "Durdur, sil, Başlat" sırasını değiştirme. Yazıcıyı kapatıp açma ve bilgisayarı yeniden başlatma adımı en sonda duruyor. Microsoft yazıcının en az 60 saniye kapalı kalmasını istiyor.

Epson kılavuzu ise iki ayrı iptal yolu tarif ediyor: bilgisayardaki ilerleme göstergesi ve yazıcıdaki durdurma/bakım düğmesi. Kılavuzdaki not açık: tamamı yazıcıya gönderilmiş bir işi bilgisayardan iptal edemezsin, bu durumda işi yazıcıdan iptal edersin. Bu yüzden önce hangi aşamada olduğuna bak. İş hâlâ bilgisayarın kuyruğundaysa üçüncü adım, yazıcıya geçtiyse ikinci adım işe yarar.

## Takılma başka bir sorunun belirtisiyse

Microsoft aynı yardım bölümünde yazdırmayla ilgili ayrı başlıklar da tutuyor: çevrimdışı yazıcı, yazıcı bulunamadı ya da tanınmadı, kâğıt sıkışması nedeniyle yazıcı durdu, yazdırma biriktiricisi hizmeti çalışmıyor ve yavaş yazdırma. Kuyruğu temizledikten sonra sorun geri geliyorsa bu başlıklardan biri senin durumunu daha iyi anlatıyor olabilir.

## Epson'un yolu, Microsoft'un yolu

Epson'un anlattığı yöntem yazıcı sürücüsünün kendi araçlarına dayanıyor: ilerleme göstergesi, durdurma düğmesi, Status Monitor. Bunlar yalnız Epson yazıcılarda var ve kılavuz Windows için yazılmış. Microsoft'un yolu ise hangi marka yazıcın olursa olsun Windows'un kendi ayarlarından yürüyor. Markan Epson değilse üçüncü adımdan başla.

Kuyruk temizlendikten sonra yazıcı "çevrimdışı" diyorsa [yazıcı çevrimdışı görünüyor](/blog/yazici-cevrimdisi-gorunuyor/) yazısına bak. Kuyruğun takılma sebebi kâğıt sıkışması olabilir; o durumda [yazıcı kâğıt sıkıştı](/blog/yazici-kagit-sikisti/) yazısındaki adımlar gerekir.

## Servise giderken not al

1. Yazıcının marka ve modelini yaz.
2. Kuyruğun hangi adımda temizlendiğini not et.
3. Hangi belgenin takılma başlattığını yaz.

Cihazının belirtisine göre yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
