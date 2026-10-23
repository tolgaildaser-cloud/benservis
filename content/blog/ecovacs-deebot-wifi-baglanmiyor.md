---
title: "Ecovacs Deebot Wi-Fi'ye bağlanmıyor: ne yapmalı?"
description: "Ecovacs Deebot uygulamaya ya da Wi-Fi'ye bağlanmıyorsa: 2,4 GHz ağ, doğru şifre, ECOVACS HOME, RESET ile kurulum modu, mobil veri kapalı."
slug: "ecovacs-deebot-wifi-baglanmiyor"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco, YK #185). origin/main 75980e0'da "ecovacs/deebot" geçen yazı/başlık yok; robot süpürge Wi-Fi yazısı yok
#   (vestel-televizyon-wifi-baglanmiyor ve yazici-wifi-baglanmiyor başka cihaz).
# OT (#164, bu koşu, _kaynak/ot-ecovacs-2.log): "ecovacs wifi bağlanmıyor" 1. **ecovacs wifi bağlanmıyor** · "ecovacs bağlantı" 1. **ecovacs bağlantı sorunu** ·
#   "ecovacs bağlan" 1. ecovacs bağlantı sorunu, 2. ecovacs wifi bağlanmıyor.
# GSC: Ecovacs/Deebot satırı yok.
# Belgeler (#88) bu koşuda indirildi. Zincir: https://help.ecovacs.com/tr/support/owners-manuals (200) → site-static.ecovacs.com PDF (200):
#  (E1) DEEBOT N8 TR md5 c7d95850a37a2c9459336a4323994919 · (E3) N10 TR md5 4d3038e4aa426f4b80cfbad1ee4769fe · (E4) T9 TR md5 eac99b51616a1bf7a7719154bc191d92
#  (E5) DEEBOT X1 OMNI TR, 30 s. md5 51c33e7e296c4437c669ffc1fea782d0
#  (W) help.ecovacs.com/tr/support/app-wifi-connection (200) → global/support/app-wifi-connection/ Troubleshooting-for-home-Wi-Fi-connection-failure,
#      why-is-my-deebot-is-offline, Initial-Robot-Connection (200, İngilizce; alıntılar çevrildi) · us/support/app-wifi-connection/Network-error-codes-and-solutions (200)
# Ana satır: E1 s.19 · E3 s.18 · E4 s.20 "DEEBOT, Wi-Fi ağına bağlanamıyor." · E5 s.23 "DEEBOT, ECOVACS HOME Uygulamasına bağlanamıyor." · gereksinimler E1 s.20 · E4 s.10 · E5 s.10.
# BİLEREK YAZILMAYANLAR: modem ayar menüsü adımları (markaya göre değişir) · Wi-Fi modülü onarımı · 1000 kodu (belgede yok) · fiyat (#46) · pazar.
# Alıntı denetim tablosu: ecovacs-deebot-wifi-baglanmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "ECOVACS HOME uygulaması", "Ev Wi-Fi ağının adı ve şifresi"]
steps:
  - "Robotu tam şarj et ve güç anahtarını aç."
  - "Telefona ECOVACS HOME uygulamasını kur; telefonun mobil verisini kurulum boyunca kapat."
  - "Evdeki ağın 2,4 GHz ya da 2,4/5 GHz karma ağ olduğunu, gizli olmadığını, VPN ya da proxy kullanmadığını kontrol et."
  - "Robotu modemin kapsama alanına getir."
  - "RESET düğmesine bas, Wi-Fi ışığı yavaşça yanıp sönünce kurulum moduna geçtiğini anla."
  - "Uygulamada ev ağının adını ve şifresini doğru gir, adımları sonuna kadar izle."
  - "Işık sabit yanınca bağlantı tamam; olmuyorsa robotu ve modemi yeniden başlatıp tekrar dene."
faq:
  - q: "Deebot 5 GHz Wi-Fi'ye bağlanır mı?"
    a: "Hayır. Ecovacs'ın N8, N10 ve T9 Türkçe kılavuzları DEEBOT'un 5 GHz Wi-Fi'yi desteklemediğini yazıyor. Ağ gereksinimlerine göre 2,4 GHz ya da 2,4/5 GHz karma ağ kullanmalısın."
  - q: "Wi-Fi ışığı ne anlatıyor?"
    a: "Kılavuzlara göre yavaşça yanıp sönmesi Wi-Fi bağlantısının kesildiğini ya da bağlantı beklendiğini, hızlı yanıp sönmesi Wi-Fi'ye bağlanmakta olduğunu, sabit yanması bağlı olduğunu gösterir."
  - q: "Uygulamada 406 ya da 10017 gibi bir kod çıktı. Ne demek?"
    a: "Ecovacs'ın global yardım sayfası bu iki kodu cihaz yapılandırmasının zaman aşımına uğraması başlığı altında örnek veriyor. Çözüm: telefonun mobil verisini kapat, telefonun robotun ECOVACS ile başlayan Wi-Fi ağına bağlı olduğundan emin ol. Bu ağ görünmüyorsa robotu ve modemi yeniden başlat, uygulamadan çık ve tekrar dene."
  - q: "Robot bağlıydı, şimdi uygulamada çevrimdışı görünüyor. Neden?"
    a: "Ecovacs'ın yardım sayfası robotun kapalı ya da pilinin bitmiş olmasını, modemin ya da internetin çalışmamasını, robotun ağ kapsamı dışında kalmasını ve Wi-Fi adı ya da şifresi değiştiği hâlde kurulumun tekrarlanmamasını sayıyor. Şifreyi değiştirdiysen bağlantı adımlarını baştan yap."
images:
  coverAlt: "Masada duran bir akıllı telefon ve arka planda yere park etmiş robot süpürge"
  steps:
    - "Şarj istasyonunda tam şarj olan robot süpürge"
    - "Telefon ekranında açılmış robot süpürge uygulamasının ilk sayfası"
    - "Rafın üzerinde duran ev tipi kablosuz modem"
    - "Modemin bulunduğu odaya getirilmiş robot süpürge"
    - "Üst kapağı açık robot süpürgenin düğme bölümü"
    - "Telefon ekranında kablosuz ağ şifresinin yazıldığı kurulum sayfası"
    - "Gösterge ışığı sabit yanan robot süpürge"
---

Robot süpürüyor ama telefondan başlatılamıyor, harita görünmüyor ya da uygulama kurulumu yarıda kalıyor. Ecovacs'ın Türkçe kılavuzlarında bunun karşılığı sorun giderme tablosundaki **"DEEBOT, Wi-Fi ağına bağlanamıyor."** satırı. Tablo beş neden sayıyor; hepsi kullanıcının elinde. Bu yazı Ecovacs'ın **DEEBOT N8**, **N10**, **T9** ve **X1 OMNI** Türkçe kılavuzlarına ve Ecovacs'ın uygulama ve Wi-Fi bağlantısı yardım sayfalarına dayanıyor. Yardım sayfalarının bir kısmı yalnız İngilizce; alıntıları Türkçeye çevirdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Robotu şarj et ve aç → ECOVACS HOME'u kur, mobil veriyi kapat → ağ 2,4 GHz olsun → robotu modeme yaklaştır → RESET ile kurulum moduna al → şifreyi doğru gir → ışık sabit yanınca bitti.

## Kılavuzun tablosu: beş neden

| Olası neden | Ecovacs'ın çözümü |
|---|---|
| Wi-Fi kullanıcı adı ya da şifresi yanlış | Doğru adı ve şifreyi gir |
| Yanlış uygulama yüklenmiş | ECOVACS HOME uygulamasını indir ve kur |
| Robot ev Wi-Fi'sinin kapsama alanında değil | Robotu sinyal menziline getir |
| Ağ kurulumu robot hazır olmadan başlamış | Güç anahtarını aç, RESET'e bas; ışık yavaşça yanıp sönünce robot hazır |
| DEEBOT 5 GHz Wi-Fi'yi desteklemiyor | Robotu 2,4 GHz ağa bağla |

## Adım adım: robot ağa bağlansın

**1. Şarj et ve aç.** Kılavuzun kurulum öncesi listesi: **DEEBOT tamamen şarj olmuş ve güç düğmesi açık** olmalı. Ecovacs'ın yardım sayfası robotu şarj istasyonundayken de kurabileceğini, açılış müziği bitmeden, yani yaklaşık 20 saniye dolmadan kuruluma başlamamanı yazıyor.

**2. Doğru uygulama, mobil veri kapalı.** Tablonun ikinci satırı **ECOVACS HOME** uygulamasını istiyor. Aynı listede bir madde daha var: **cep telefonunun hücresel verisini kapat**, kurulumdan sonra tekrar açabilirsin. Yardım sayfası uygulamaya konum izni vermeni de istiyor; izin yoksa ağ adı **bilinmeyen SSID** olarak görünebiliyor.

**3. Ağı kontrol et.** Kılavuzun Wi-Fi ağ gereksinimleri:
- **2,4 GHz ya da 2,4/5 GHz karma ağ** kullan.
- Modem **802.11b/g/n ve IPv4** desteklemeli.
- **VPN ya da proxy sunucusu** kullanma.
- **Gizli bir ağ** kullanma.
- Şifreleme TKIP, PSK ya da AES/CCMP kullanan WPA ve WPA2 olmalı; kurumsal kimlik doğrulama desteklenmez.
- Ağ genişletici kullanıyorsan ağ adı ve parolası ana ağınla aynı olmalı.

Modemin iki bandı ayrı adlarla yayınlıyorsa yardım sayfası **2,4 GHz olanı seçmeni** istiyor.

**4. Robotu modeme yaklaştır.** Tablonun üçüncü satırı kapsama alanı. Ecovacs'ın hata kodu sayfası kurulum sırasında robotun ev Wi-Fi'sinin **3 metre yakınında** olmasını öneriyor.

**5. RESET ile kurulum moduna al.** Tablonun dördüncü satırı en sık atlanan adım: kurulum robot hazır olmadan başlamışsa **güç anahtarını aç, RESET düğmesine bas**; **Wi-Fi gösterge ışığı yavaşça yanıp söndüğünde** robot ağ kurulumuna hazırdır. X1 OMNI kılavuzunda kapağı açıp RESET'e basınca sesli bir uyarı duyulur. N8 kılavuzu ayrıca **AUTO Modu Düğmesini üç bip sesi gelene kadar 20 saniye basılı tutarak** Wi-Fi özelliğinin kapatılıp açılabileceğini yazıyor.

**6. Şifreyi doğru gir.** Uygulamada ev ağının adını ve şifresini gir. Yardım sayfası şifrede İngilizce harf ve rakam kullanmanı öneriyor. iPhone'da istenince telefonun Wi-Fi ayarlarından **ECOVACS ile başlayan ağı** seç, sonra uygulamaya dön ve kurulumun bitmesini bekle.

**7. Işığı izle, gerekirse baştan al.** Işık **hızlı yanıp sönüyorsa** robot bağlanıyor, **sabit yanıyorsa** bağlı. Bağlanmıyorsa yardım sayfasının tarifi: robotu ve modemi yeniden başlat, uygulamadan çık, kurulumu tekrar dene.

## Uygulamada kod çıkıyorsa

Ecovacs'ın yardım sayfası, cihaz yapılandırmasının zaman aşımına uğramasını **406 ve 10017** gibi kodlarla örnekliyor; ABD yardım sayfasında aynı başlıkta **10016 ve 10017** var. Çözüm: telefonun **mobil verisini kapat**, telefon **ECOVACS_xxxx** ağına bağlı kalsın. Bu ağ görünmüyorsa RESET düğmesini açılış sesi gelene kadar basılı tutarak robotu, sonra modemi yeniden başlat. **10010, 10018, 10025** robotun ağa bağlanamadığını gösteriyor; çözüm yukarıdaki adımlarla aynı: kapsama, RESET, doğru şifre, 2,4 GHz ve telefonla robotun aynı ağda olması.

## Bağlıydı, şimdi çevrimdışı

Yardım sayfasının listesi: robot kapalı ya da pili bitmiş, modem ya da internet çalışmıyor, robot kapsama dışında, ağın adı ya da şifresi değişmiş ama kurulum tekrarlanmamış. Şifreyi ya da modemi değiştirdiysen bağlantıyı baştan kur. Aynı ad ve şifreyle yeni modem takıldıysa robot kendiliğinden bağlanır.

Robot şarj olmuyorsa önce [Ecovacs Deebot şarj olmuyor](/blog/ecovacs-deebot-sarj-olmuyor/) yazısına bak.

## Ne zaman servis

- Ağ uygun, şifre doğru, RESET'ten sonra Wi-Fi ışığı hiç yanıp sönmüyorsa.
- Başka cihazlar aynı ağa bağlanırken robot tüm adımlara rağmen bağlanmıyorsa; Ecovacs müşteri hizmetleri.

⛔ **Kendin-çöz sınırı burada biter.** Ağ ayarı, uygulama ve RESET senin; robotun Wi-Fi modülü ve kartı yetkili servisin.

## Servisi aramadan önce iki dakikalık özet

1. Model ne (robotun altındaki etikette)?
2. Ağın 2,4 GHz mi, iki bant aynı adla mı yayınlanıyor?
3. RESET'ten sonra Wi-Fi ışığı nasıl yanıyor?
4. Uygulamada hangi kod çıkıyor?
5. Wi-Fi şifresi yakın zamanda değişti mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
