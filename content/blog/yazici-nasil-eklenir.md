---
title: "Yazıcı nasıl eklenir: Windows'ta USB ve kablosuz kurulum"
description: "Yazıcıyı Windows'a eklemek: USB, ağ ve kablosuz yazıcı için ayar yolu, listede çıkmazsa elle ekleme ve sürücü. Microsoft ve Brother belgelerine göre."
slug: "yazici-nasil-eklenir"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P48 (YK #197 boşluk, BOSLUK.md #199). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: yazici-wifi-baglanmiyor (ağ sorunu), yazici-cevrimdisi-gorunuyor — "yazıcı nasıl eklenir/kurulur" genel yazı olarak yok.
# Kaynak (#88): Microsoft Support "Add or install a printer in Windows" (USB/ağ/kablosuz yolu, elle ekleme, sürücü, ARM notu) + Brother Support FAQ faq00100429_021 (üreticinin yazılım paketi, Windows kablosuz kurulum). URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · markaya özel kablosuz kurulum menüleri (Brother videosu metinde yok; HP/Canon/Epson belgesi alınmadı) · IP adresiyle ekleme ayrıntısı (belgede yalnız "elle ekle" var) · Bluetooth yazıcı eşleştirme adımları (Microsoft ayrı makaleye yönlendiriyor) · yazıcı iç onarımı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Yazıcıyı aç; USB'liyse kabloyu bilgisayara tak."
  - "Ağ ya da kablosuz yazıcıysa yazıcının bilgisayarla aynı ağda olduğundan emin ol."
  - "Başlat, Ayarlar, Bluetooth ve cihazlar, Yazıcılar ve tarayıcılar yolunu aç."
  - "Yazıcının yüklü yazıcılar listesinde zaten olup olmadığına bak."
  - "Yazıcı ve tarayıcı ekle bölümünden Cihaz ekle'ye bas, listede yazıcının yanındaki Cihaz ekle'yi seç."
  - "Yazıcı bulunamazsa Aradığım yazıcı listede yok yanındaki yeni aygıtı elle ekle seçeneğini kullan."
  - "Kurulumdan sonra Windows Update'te yazıcı sürücüsü var mı bak."
  - "Hâlâ eklenmediyse üreticinin kendi yazılım paketini kur ya da Microsoft'un yazıcı sorun gidericisini çalıştır."
faq:
  - q: "Yazıcı için ayrıca sürücü indirmem gerekir mi?"
    a: "Çoğu zaman gerekmez. Microsoft'un belgesi Windows'un yazıcıların çoğunu hazır desteklediğini ve özel sürücü ya da yazılım kurmanın genellikle gerekmediğini yazıyor. Yazıcı eklendikten sonra Windows Update'te daha yeni sürücü olup olmadığına bakman öneriliyor."
  - q: "Yazıcı listede çıkmıyorsa ne yapmalıyım?"
    a: "Microsoft'a göre önce listenin dolması için birkaç dakika bekle. Yine çıkmazsa Aradığım yazıcı listede yok seçeneğinin yanındaki yeni aygıtı elle ekle bağlantısını kullan, açılan Yazıcı Ekle penceresindeki yönergeleri izle. Elle de olmuyorsa Microsoft'un yazıcı bağlantı sorunlarını giderme makalesine yönlendiriyor."
  - q: "Yeni Windows bilgisayarlarda üreticinin yükleyicisi çalışmıyor, neden?"
    a: "Microsoft, bazı ARM işlemcili bilgisayarlarda yazıcı üreticisinin yükleyicisiyle yazıcı eklenemediğini biliyor. Böyle bir bilgisayarda yükleyici yerine Windows'un kendi ekleme adımlarını izlemeni, üreticinin farklı bir yönergesi varsa o yönergeye uymanı yazıyor."
images:
  coverAlt: "Masada duran sade yazıcıdan çıkan kablo, yanındaki dizüstü bilgisayarın ekranında yazıcı listesi çizimi"
  steps:
    - "Yazıcının arkasındaki yuvaya kablo takan beyaz eldivenli sade siluet el"
    - "Aynı sinyal halkasının içinde duran sade yazıcı ve dizüstü bilgisayar çizimi"
    - "Ayarlar penceresinde yazıcılar bölümünü açan beyaz eldivenli sade siluet el"
    - "Ekranda yüklü yazıcılar listesine bakan beyaz eldivenli sade siluet el"
    - "Ayar listesinde yazıcı satırını seçen beyaz eldivenli sade siluet el"
    - "Listede yazıcı yokken elle ekle bağlantısına dokunan beyaz eldivenli sade siluet el"
    - "Ekranda güncelleme okları dönen sade sürücü penceresi ve yanında onay işareti"
    - "Yazıcı önünde kutu ve yükleme çubuğu olan sade bilgisayar ekranı çizimi"
---

Yeni bir yazıcı aldın ya da bilgisayarı yeniledin; yazıcıyı bilgisayara tanıtman gerekiyor. "Yazıcı nasıl eklenir" diye arayanlar için Microsoft'un Windows yazıcı belgesini ve bir yazıcı üreticisinin, Brother'ın, destek sayfasını okuduk. Aşağıdaki adımlar bu belgelerden alındı; belgelerde olmayan hiçbir adımı yazmadık.

> ⚠️ **Önce şu sınırı bil:** bu yazı bilgisayara yazıcı tanıtmayı anlatıyor. Yazıcının içini açmak, kartuş ya da parça sökmek burada yok. Yazıcı eklendiği halde bağlantı kopuyorsa [yazıcı Wi-Fi'a bağlanmıyor](/blog/yazici-wifi-baglanmiyor/) ya da [yazıcı çevrimdışı görünüyor](/blog/yazici-cevrimdisi-gorunuyor/) yazılarına bak.

## Adım adım: yazıcıyı Windows'a ekle

**1. Yazıcıyı aç.** Microsoft'a göre bilgisayara USB gibi bir kabloyla doğrudan bağlanan yazıcı, takılıp açılınca çoğu zaman kendiliğinden kurulur ve hemen yazdırabilirsin. Kendiliğinden kurulmadıysa kabloyu ve yazıcının açık olduğunu kontrol et, sonraki adımlara geç.

**2. Ağ yazıcısıysa aynı ağı kontrol et.** Ağ ya da kablosuz yazıcı için Microsoft'un şartı net: yazıcı açık olacak ve Windows bilgisayarla aynı ağa bağlı olacak. Kablosuz yazıcıda bu, aynı kablosuz ağ demek. Yazıcıyı ağa bağlama ayrıntısı için Microsoft yazıcının kendi belgesine ve üreticinin sitesine bakmanı istiyor.

**3. Yazıcılar ve tarayıcılar sayfasını aç.** Başlat, Ayarlar, Bluetooth ve cihazlar (Bluetooth & devices), Yazıcılar ve tarayıcılar (Printers & scanners) yolunu izle. Windows 10'da yol biraz farklı: Başlat, Ayarlar, Aygıtlar (Devices), Yazıcılar ve tarayıcılar. Microsoft bu sayfada iki sürümü ayrı ayrı anlatıyor; sende hangi sürüm varsa onun yolunu izle.

**4. Yazıcı listede var mı bak.** Microsoft, önce yüklü yazıcılar listesine bakmanı istiyor. Yazıcı zaten oradaysa tekrar eklemene gerek yok.

**5. Cihaz ekle'ye bas.** Yazıcı yüklü değilse "Yazıcı ve tarayıcı ekle" bölümüne git, Cihaz ekle'yi seç. Yazıcı listesinin dolması birkaç dakika sürebilir; listenin dolmasını bekle. Listede yazıcının yanındaki Cihaz ekle düğmesine bas. Belge, bazen yazıcının düğmeye basmadan kendiliğinden eklenebileceğini de not ediyor.

**6. Bulunamazsa elle ekle.** Windows yazıcıyı bulamazsa "Aradığım yazıcı listede yok" yanındaki "Yeni aygıtı elle ekle" seçeneğini kullan. Açılan Yazıcı Ekle penceresindeki yönergeleri izle. Microsoft burada IP adresi gibi bir ayrıntı vermiyor; pencere seni yönlendirir.

**7. Sürücüyü kontrol et.** Yazıcı eklendikten sonra Windows Update'te yazıcı için daha yeni sürücü olup olmadığına bak. Yazıcının yanında "Sürücü bul" düğmesi çıkabilir; Microsoft'a göre yazıcı çalışır ama sürücü tamamlanana kadar işlevleri kısıtlı olabilir. Sürücü almanın en iyi yolu da belgeye göre Windows Update.

**8. Olmadıysa üreticinin paketine ya da sorun gidericiye geç.** Brother'ın destek sayfasında Windows için kablosuz kurulum şöyle başlıyor: sitenin indirme bölümünden "Full Driver & Software Package" paketini indir, indirme sayfasındaki kurulum yönergesini izle, dil seçimi penceresi gelince sonraki adıma geç. Bu paket markaya özel; senin yazıcının markası farklıysa kendi üreticinin sitesinde karşılığını ara. Ters yönde bir uyarı da var: Microsoft, bazı ARM işlemcili bilgisayarlarda üreticinin yükleyicisiyle yazıcının eklenemediğini söylüyor ve bu bilgisayarlarda yükleyici yerine Windows'un adımlarını öneriyor. Bu da olmazsa Microsoft'un "Fix printer connection and printing problems in Windows" makalesine yönlendiriyor.

## Windows 10 kullanıyorsan

Microsoft'un sayfasında Windows 10 için ayrı bir bölüm var ve ekleme mantığı aynı. Fark menü adlarında: yazıcı ve tarayıcı ekleme düğmesi Windows 10'da "Yazıcı veya tarayıcı ekle" adını taşıyor, elle ekleme bağlantısı ise "Aradığım yazıcı listede yok" yazısına tıklanarak açılıyor. Belge ayrıca Windows 10 desteğinin 14 Ekim 2025'te bittiğini, bu tarihten sonra Windows Update'ten yazılım güncellemesi, teknik yardım ve güvenlik düzeltmesi gelmediğini yazıyor. Bilgisayar çalışmaya devam eder ama Microsoft Windows 11'e geçmeyi öneriyor. Sürücü güncellemesi için Windows Update'e güveneceğin için bu not yazıcı kurulumunu da ilgilendiriyor.

## USB, ağ ve Bluetooth arasındaki fark

USB'li yazıcıda en önemli şey kablo ve yazıcının açık olması; ağ yazıcısında aynı ağa bağlı olmak. İkisinde de ekleme yolu aynı: Yazıcılar ve tarayıcılar sayfası. Bluetooth yazıcı için Microsoft ayrı bir makaleye ("Pair a Bluetooth printer or scanner") yönlendiriyor; bu yazı o eşleştirmeyi anlatmıyor.

## İki belge ne diyor, nerede ayrılıyor?

Microsoft yazıcı markasından bağımsız, Windows'un kendi ekleme yolunu anlatıyor. Brother ise kendi paketini indirmeni ve kurulumunu izlemeni istiyor. İkisi çelişmiyor: önce Windows yolunu dene, çalışmazsa üreticinin yazılımına geç. ARM işlemcili bilgisayarda sıra tersine dönüyor. Hangisi olduğunu Microsoft'un belgesine göre Başlat, Ayarlar, Sistem, Hakkında bölümünde "Sistem türü" satırından anlarsın; ARM cihazlarda orada "ARM tabanlı işlemci" yazar.

## Servis çağırmadan önce üç not

1. Yazıcının marka ve model adını yaz.
2. Bağlantı türünü not et: USB mi, kablosuz mu?
3. Windows'un yazıcıyı listede gösterip göstermediğini ve hangi adımda takıldığını yaz.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
