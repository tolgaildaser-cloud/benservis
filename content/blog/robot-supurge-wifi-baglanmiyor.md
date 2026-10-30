---
title: "Robot süpürge Wi-Fi'ye bağlanmıyor: Vestel ve Samsung"
description: "Robot süpürge Wi-Fi'ye bağlanmıyorsa sırayla bak: 2,4 GHz ağ, parola, sinyal, telefon izinleri ve Wi-Fi sıfırlama. Vestel ve Samsung kılavuzlarına göre."
slug: "robot-supurge-wifi-baglanmiyor"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P33 (YK #197 boşluk, BOSLUK.md #214). Slug origin/main'de yok. Yakın yazılar: ecovacs-deebot-wifi-baglanmiyor (markalı), xiaomi-robot-supurge-wifi-degistirme (markalı), robot-supurge-haritalama-sorunu — genel "robot süpürge Wi-Fi'ye bağlanmıyor" yazısı yok.
# Kaynak (#88): Vestel V-Bot Pro kullanım kılavuzu 20264632 (s.16-18, 25), Samsung POWERbot-E VR5000 kullanıcı kılavuzu (s.9-10, 14). PDF sayfa numarasıyla KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · modem arayüzünden ayar adımları (kılavuzlarda yok; yalnız "yönlendiriciyi yeniden başlat" ve belgede geçen ayarlar) · uygulama menü yolları (sürümle değişiyor) · 5 GHz'i açma/kapama anlatımı (belgede yok).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "Modemin Wi-Fi adı ve parolası"]
steps:
  - "Robotu bağlayacağın ağın 2,4 GHz olduğundan emin ol; 5 GHz ağa bağlanmaz."
  - "Wi-Fi adını ve parolasını doğru girdiğini kontrol et."
  - "Robotu ve şarj istasyonunu Wi-Fi sinyalinin güçlü olduğu yere al."
  - "Telefonu aynı Wi-Fi ağına bağla, mobil veriyi kapat ve uygulamayı güncelle."
  - "Robotun Wi-Fi ayarını sıfırla ve göstergenin yavaş yanıp sönmesini bekle."
  - "Modemi yeniden başlat ve robotu uygulamaya yeniden ekle."
  - "Hâlâ bağlanmıyorsa internet sağlayıcına ve üreticinin müşteri hattına başvur."
faq:
  - q: "Robot süpürge 5 GHz Wi-Fi'ye bağlanır mı?"
    a: "Bu yazıda baktığımız iki kılavuz da hayır diyor. Vestel kılavuzu 5GHz Wi-Fi'ın desteklenmediğini, Samsung POWERbot-E kılavuzu ise cihazın yalnızca Wi-Fi 2.4 GHz'i desteklediğini yazıyor."
  - q: "Robot süpürge uygulamada çevrimdışı görünüyorsa ne yapmalıyım?"
    a: "Samsung kılavuzuna göre önce telefonun ağa erişip erişmediğine ve yönlendiricinin normal çalışıp çalışmadığına bak. Temizleyici açık olmalı. Wi-Fi parolası ya da ağ değiştiyse cihazın Wi-Fi yapılandırması silinmiş olabilir; bu durumda cihazı uygulamaya yeniden eklemen gerekir."
  - q: "Uygulama çok yavaş çalışıyorsa sorun robotta mı?"
    a: "Samsung kılavuzu bunu ağ bağlantısı sorunu olarak listeliyor: ağ meşgul olabilir, telefonda sinyal zayıf olabilir ya da bant genişliği yetersiz olabilir. Yönlendiriciyi yeniden başlatmayı ve erişen kullanıcı sayısını sınırlamayı öneriyor."
images:
  coverAlt: "Robot süpürge, yanında modem ve ikisi arasında Wi-Fi sinyali çizimi"
  steps:
    - "Modemin Wi-Fi ayarına bakan telefon ve onu işaret eden beyaz eldivenli sade siluet el"
    - "Telefon ekranındaki parola alanına yazan beyaz eldivenli sade siluet el"
    - "Robot süpürgeyi modemin yakınına taşıyan beyaz eldivenli sade siluet el"
    - "Telefonda mobil veri anahtarını kapatan beyaz eldivenli sade siluet el"
    - "Robot süpürgenin üstündeki düğmeye basılı tutan beyaz eldivenli sade siluet el ve yavaş yanıp sönen ışık"
    - "Modemin fişini çeken beyaz eldivenli sade siluet el"
    - "Robot süpürgenin yanında telefon simgesi olan servis çağırma çizimi"
---

Robot süpürge uygulamada çevrimdışı görünüyor, eşleştirme bir türlü bitmiyor ya da telefon robotu hiç bulamıyor. Bu yazıda iki üreticinin kendi kılavuzuna baktık: Vestel V-Bot Pro ve Samsung POWERbot-E. İkisi de aynı yerde birleşiyor: robot süpürgeler genellikle 2,4 GHz ağla çalışıyor. Aşağıdaki kontroller bu kılavuzların bağlantı ve sorun giderme bölümlerinden geliyor.

> ⚠️ **Önce şu sınırı bil:** bu yazıdaki işlemler telefon, modem ve robotun düğmeleriyle sınırlı. Robotun gövdesini açmak, bataryayı çıkarmak ya da kartına müdahale etmek servis işidir.

## Adım adım: Wi-Fi bağlantısını düzeltme

**1. Ağın 2,4 GHz olduğundan emin ol.** Vestel kılavuzu yalnızca 2.4GHz Wi-Fi'ın desteklendiğini yazıyor ve sorun giderme tablosunda 5GHz Wi-Fi'ın desteklenmediğini tekrarlıyor. Samsung POWERbot-E de yalnızca Wi-Fi 2.4 GHz'i destekliyor. Modemin 2,4 GHz ağ adını bul ve robotu o ağa bağla.

**2. Adı ve parolayı kontrol et.** Vestel tablosunda bağlanamamanın nedenlerinden biri Wi-Fi kullanıcı adı ya da parolasının yanlış girilmesi. Büyük küçük harfe ve boşluklara dikkat ederek yeniden gir. Samsung kılavuzu yönlendiricinin benzersiz bir ağ adı ve parolası olduğunu doğrulamanı istiyor.

**3. Sinyalin güçlü olduğu yere al.** Vestel kılavuzu, robot süpürgenin ve şarj istasyonunun Wi-Fi kapsama alanı içinde olmasını istiyor. Tabloda da neden olarak zayıf Wi-Fi sinyali yazılı. Robot çok uzaktaysa sinyal zayıf kalır ve bağlantı kurulamaz.

**4. Telefon ayarlarını kontrol et.** Samsung telefonunu ev Wi-Fi'ına bağlamanı ve cihaz eklerken mobil veriyi devre dışı bırakmanı istiyor. Vestel tablosunda konum izninin açık olması gerektiği ve Akıllı Yaşam uygulamasının son sürümünün kullanılması gerektiği yazıyor.

**5. Robotun Wi-Fi'ını sıfırla.** Vestel'de kılavuzdaki iki düğmeye aynı anda "Ağ yapılandırması bekleniyor" sesini duyana kadar basılı tutulur; gösterge yavaş yanıp sönüyorsa sıfırlama tamamdır. Yavaş yanıp sönme robotun bağlanmaya hazır olduğunu gösterir, hızlı yanıp sönme bağlantının kurulduğunu, sürekli yanma ise Wi-Fi'ın bağlı olduğunu. Samsung'da gösterge yanıp sönmüyorsa kılavuzda belirtilen tuşa 3 saniye basıp bırakırsın ve bir tıklama sesi duyarsın.

**6. Modemi yeniden başlat.** Samsung'un çözüm tablosu, bağlantı koptuğunda yönlendiriciyi yeniden açmayı, temizleyiciyi bir kez daha açmayı ve cihazı uygulamaya yeniden eklemeyi söylüyor. Wi-Fi parolası ya da ağ değiştiyse ekipmanın Wi-Fi yapılandırması silinmiş olabilir.

**7. Çözülmediyse destek al.** Samsung kılavuzu, internet sağlayıcının verdiği prosedürü denedikten sonra hâlâ bağlanılamıyorsa yetkili servise başvurmanı istiyor. Vestel de cihaz normal çalışmaya devam etmiyorsa Vestel İletişim Merkezi'ni öneriyor.

## İlk kurulumda ne olur?

Vestel'de uygulamayı indirip kayıt olduktan sonra ana sayfadan V-Bot Pro robot süpürgeyi ekler ve uygulamadaki talimatları izlersin. Kılavuz, telefon robota başarıyla bağlanmıyorsa Wi-Fi'ı sıfırlayıp cihazı yeniden eklemeni söylüyor. Samsung'da POWERbot-E uygulamasında Cihaz Ekle'ye dokunursun. Wi-Fi gösterge ışığı yavaş yanıp söndüğünde robot ağ erişim yapılandırmasına girmiştir; o sırada uygulamada Sonraki Adım'a dokunup ekrandaki yönergeleri izlersin. Kılavuz, kurulumdan sonra telefonun ev Wi-Fi'ına bağlı olduğundan emin olmanı da istiyor.

## Yönlendirici ayarlarında bakılacaklar

Samsung kılavuzu ağ ayarlarını da sayıyor. Cihaz IEEE 802.11b/g/n destekliyor ve 802.11n öneriliyor. Yönlendiricide DHCP sunucusunun açık olması gerekir. Desteklenen şifreleme WEP-OPEN, WPA-PSK/TKIP ve WPA2-PSK/AES; WPA2-PSK/AES önerilen seçenek. Kılavuza göre internet sağlayıcın MAC adresini kalıcı olarak kaydettirdiyse ya da bağlantı için kimlik ve şifre istiyorsa robot internete bağlanamayabilir. Güvenlik duvarı sorunları da aynı sonuca yol açabilir. Bunlar için internet sağlayıcınla görüşmen gerekir.

## Daha önce bağlıydı, şimdi çevrimdışı

Robot eskiden çalışıyordu ve uygulama artık bağlantının kesildiğini gösteriyorsa Samsung kılavuzu sırayla şunları kontrol etmeni istiyor. Telefonun ağa erişip erişmediğine bak. Yönlendiricinin normal çalışıp çalışmadığına bak. Temizleyicinin açık olduğundan emin ol. Wi-Fi parolasını ya da ağı değiştirdiysen robotun kayıtlı ayarı artık geçersizdir; tüm Wi-Fi yapılandırmalarını silip cihazı uygulamaya yeniden eklemen gerekir. Uygulama bağlı ama yavaşsa kılavuz ağın meşgul olabileceğini, telefonda sinyalin zayıf olabileceğini ya da bant genişliğinin yetmediğini söylüyor. Önerisi yönlendiriciyi yeniden başlatmak ve ağa erişen kullanıcı sayısını sınırlamak.

## İki kılavuzun farkı

Vestel, sıfırlamayı ve bağlantı göstergesinin üç durumunu anlatıyor. Samsung ise yönlendirici tarafını ayrıntılı veriyor. Konum izni yalnızca Vestel tablosunda geçiyor. Samsung'da ise akıllı telefon uyumluluğu ayrı bir not: kılavuz SmartThings'in tabletler ve bazı mobil cihazlarla uyumlu olmadığını, Android 6.0 ya da üstünün önerildiğini yazıyor.

## Bağlanıyor ama başka sorun varsa

Robot bağlandıktan sonra haritayı kaybediyorsa [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/) yazısına bak. Markalı yazılarımız da var: [Ecovacs Deebot Wi-Fi bağlanmıyor](/blog/ecovacs-deebot-wifi-baglanmiyor/) ve [Xiaomi robot süpürge Wi-Fi değiştirme](/blog/xiaomi-robot-supurge-wifi-degistirme/).

## Servis çağırmadan önce üç not

1. Robotun marka ve modelini yaz.
2. Robotun Wi-Fi göstergesinin ne yaptığını not et: yavaş yanıp sönüyor, hızlı yanıp sönüyor ya da hiç yanmıyor.
3. Hangi adımları denediğini ve modemin 2,4 GHz ağ adını yaz.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
