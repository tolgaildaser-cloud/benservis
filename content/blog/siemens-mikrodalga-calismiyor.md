---
title: "Siemens mikrodalga çalışmıyor"
description: "Siemens mikrodalga çalışmıyorsa: fişi ve elektriği kontrol et, kapak arasını temizle, çocuk kilidini aç, D ya da E mesajında cihazı tuşla sıfırla."
slug: "siemens-mikrodalga-calismiyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile BSH'nin kendi alan adından (media3.bsh-group.com)
#   indirildi, HTTP 200, application/pdf, yönlendirme 0. Web araması yalnız belgelerin yerini bulmak için. Sayfa = PDF sayfası. Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  K1) Siemens BF722.1.1. / BF922.1.1. ankastre mikrodalga (dokunmatik ekranlı)  https://media3.bsh-group.com/Documents/9001700744_E.pdf  28 s.  md5 f5a30082f15d58bf7666b6eaf4794f26
#  K2) Siemens FF023LM... / FF053LM... mikrodalga                               https://media3.bsh-group.com/Documents/9001626436_E.pdf  24 s.  md5 49dd2a7966f7d204843bd8923828d36a
# Ana satırlar: K1 s.16 · K2 s.15 "Cihaz çalışmıyor." → "Şebeke bağlantı kablosunun elektrik fişi takılı değil." / "Cihazı elektrik şebekesine bağlayınız." · "Elektrik
#   beslemesi kesildi." / "Oda aydınlatmasının veya odadaki diğer cihazların çalışıp çalışmadığını kontrol ediniz." · K1 s.16 "Mikrodalga fırın çalışmıyor." · K2 s.15 aynı
#   satır altında: "Kapak tamamen kapalı değil." / "Cihaz kapağının arasına yemek artıklarının veya yabancı bir maddenin girip girmediği kontrol ediniz."
#   · K1 s.16 "Mikrodalga çalışması duruyor." → "Fonksiyonel arıza 1. Cihaz sıfırlanmalıdır. ‒ Bunun için birinci seçenek [⏻] tuşunun en az 10 saniye basılı tutulmasıdır.
#   ... 2. Mesaj yeniden görüntülenirse müşteri hizmetlerini arayınız. Aradığınızda hata mesajını eksiksiz olarak belirtiniz." (simge PDF görüntüsünden okundu; s.7 tabloda
#   ⏻ = "Cihazın açılması veya kapatılması.") · K1 s.17 "14.2 Gösterge alanındaki uyarılar": "Ekranda "D" veya "E" ile mesaj görüntüleniyor." → "1. Cihaz sıfırlanmalıdır.
#   ‒ Bunun için birinci seçenek [⏻] tuşunun en az 6 saniye basılı tutulmasıdır." · K1 s.17 "Cihaz kapalıyken saat görüntülenmiyor." / "Ekran kısa bir süre sonra kapanır.
#   Herhangi bir işlem uygulamaya gerek yoktur." · K2 s.15 "Mikrodalga çalışması duruyor." / "Cihazda arıza var." / "Bu hata tekrar meydana gelirse, müşteri hizmetlerini arayınız."
#   · K2 s.15 "Göstergede bir [sembol] görünüyor." / "Demo modu aktiftir." / "Demo modunu devre dışı bırakınız." (Temel ayarlar s.13)
# Kapak/başlatma: K1 s.7 4.4 "Çalışma sırasında cihaz kapağını açarsanız, çalışma durur." "Cihaz kapağını kapattığınızda, çalışma otomatik olarak devam etmez. Çalışmayı
#   başlatınız." "Elektrik kesintisi durumunda, otomatik kapı açma düzeneği çalışmaz. Kapağı elle açabilirsiniz." · K1 s.7 ⊸ "Çocuk kilidinin etkinleştirilmesi veya devre dışı
#   bırakılması." · K1 s.13 "10.2 Çocuk kilidinin devre dışı bırakılması 1. Tuşa [⊸] yakl. 4 saniye basılı tutulmalıdır. 2. Kumanda elemanlarının kilidi açılır."
# Bilerek yazılmayanlar: sigorta kutusu adımları (sigortayı kapatıp 10 sn sonra açma; K1'de demo modu çıkışı da sigortayla — brif: elektrik panosu yok) · D/E kodlarının
#   tek tek anlamı (belgede yok) · Bosch kardeş kılavuzunun ısıtma satırları (Bosch ayrı belirtiyle yazıldı) · kasa açma · fiyat.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım kılavuzu"]
steps:
  - "Elektrik fişinin prize takılı olduğunu kontrol et."
  - "Odadaki ışığın ve diğer cihazların çalışıp çalışmadığına bakarak elektrik kesintisi olup olmadığını anla."
  - "Kapağın arasına yemek artığı ya da yabancı bir madde girip girmediğini kontrol et ve kapağı tam kapat."
  - "Kapağı çalışma sırasında açtıysan, kapattıktan sonra çalışmayı yeniden başlat."
  - "Tuşlar tepki vermiyorsa çocuk kilidi açık olabilir; kilit tuşuna yaklaşık 4 saniye basılı tutarak kilidi aç."
  - "Ekranda D ya da E ile başlayan bir mesaj varsa veya mikrodalga çalışırken duruyorsa, cihazı açma/kapama tuşunu basılı tutarak sıfırla."
faq:
  - q: "Siemens mikrodalgam hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Siemens'in arıza tablosunda 'Cihaz çalışmıyor' satırının kullanıcıya dönük ilk iki maddesi şunlar: elektrik fişi takılı değilse cihazı şebekeye bağlamak ve elektrik beslemesinin kesilip kesilmediğini anlamak için oda aydınlatmasının ya da odadaki diğer cihazların çalışıp çalışmadığını kontrol etmek. Mikrodalga fonksiyonu çalışmıyorsa tablo kapak arasına yemek artığı ya da yabancı madde girip girmediğine bakılmasını istiyor."
  - q: "Ekranda D veya E ile başlayan bir mesaj var, ne yapmalıyım?"
    a: "BF722 / BF922 kılavuzuna göre bu bir fonksiyonel arıza mesajı ve cihaz sıfırlanmalı: açma/kapama tuşunu en az 6 saniye basılı tut. Arıza bir defaya mahsussa mesaj kaybolur. Mesaj yeniden görüntülenirse müşteri hizmetlerini ara ve hata mesajını eksiksiz olarak belirt. Kılavuz kodların tek tek anlamını vermiyor."
  - q: "Kapağı kapattım ama mikrodalga devam etmiyor, bozuk mu?"
    a: "Hayır. BF722 / BF922 kılavuzuna göre çalışma sırasında kapak açılırsa çalışma durur ve kapak kapatıldığında çalışma otomatik olarak devam etmez; çalışmayı yeniden başlatman gerekir."
  - q: "Cihaz kapalıyken saat görünmüyor, normal mi?"
    a: "BF722 / BF922 tablosuna göre ekran kısa bir süre sonra kapanır ve herhangi bir işlem yapmaya gerek yoktur."
images:
  coverAlt: "Fırının üstüne yerleştirilmiş, dokunmatik ekranı kapalı duran ankastre bir mikrodalga ve önünde kapağı tam kapanmış cam yüzey"
---

Mikrodalgaya dokunuyorsun, ekran tepki vermiyor; ya da program başlıyor ve birkaç saniyede duruyor. Siemens'in BF722 / BF922 ve FF023LM / FF053LM mikrodalga kılavuzlarındaki arıza tablosu bu durumu üç satıra ayırıyor: **"Cihaz çalışmıyor."**, **"Mikrodalga fırın çalışmıyor."** ve **"Mikrodalga çalışması duruyor."** Dokunmatik ekranlı BF722 / BF922'de buna ekrandaki **"D" veya "E" ile başlayan mesaj** ekleniyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı bak → odadaki ışık ve diğer cihazlar çalışıyor mu kontrol et → kapak arasını temizle → kapağı açtıysan çalışmayı yeniden başlat → çocuk kilidini aç → D/E mesajında açma/kapama tuşuyla sıfırla. Mesaj geri geliyorsa müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Tablonun ilk nedeni **"Şebeke bağlantı kablosunun elektrik fişi takılı değil."**, çözüm **"Cihazı elektrik şebekesine bağlayınız."**

**2. Elektrik geliyor mu anla.** İkinci neden **"Elektrik beslemesi kesildi."** Siemens'in önerdiği kontrol basit: **oda aydınlatmasının veya odadaki diğer cihazların** çalışıp çalışmadığına bak. BF722 / BF922'de elektrik kesintisinde **otomatik kapı açma düzeneği de çalışmaz**; kapağı elle açabilirsin.

**3. Kapak arasını temizle.** Cihaz açık ama mikrodalga fonksiyonu çalışmıyorsa tablodaki neden **"Kapak tamamen kapalı değil."** Siemens'in istediği kontrol: **cihaz kapağının arasına yemek artıklarının veya yabancı bir maddenin girip girmediği.** Bulduğun artığı temizle ve kapağı tam kapat.

**4. Kapağı açtıysan yeniden başlat.** BF722 / BF922 kılavuzuna göre **çalışma sırasında kapağı açarsan çalışma durur** ve kapağı kapattığında **otomatik olarak devam etmez.** Çalışmayı başlat tuşuyla yeniden başlatman gerekir.

**5. Çocuk kilidini aç.** Tuşlar hiçbir dokunuşa yanıt vermiyorsa kumanda elemanları kilitli olabilir. BF722 / BF922'de çocuk kilidi, kumanda panelindeki **anahtar simgeli tuşla** açılıp kapanıyor. Kılavuza göre kilidi açmak için bu tuşa **yaklaşık 4 saniye basılı tut**; kumanda elemanlarının kilidi açılır.

**6. D/E mesajında cihazı sıfırla.** BF722 / BF922'nin gösterge uyarıları tablosunda ekranda **"D" veya "E" ile mesaj** görünüyorsa neden **"Fonksiyonel arıza"** ve ilk adım **cihazı sıfırlamak:** açma/kapama tuşunu **en az 6 saniye** basılı tut. Mikrodalga çalışırken duruyorsa aynı sıfırlama, aynı tuşla **en az 10 saniye** basılı tutarak yapılıyor. Arıza bir defaya mahsussa **mesaj kaybolur.**

## Arıza sanılan durumlar

- **Cihaz kapalıyken saat görünmüyor:** BF722 / BF922 tablosuna göre ekran kısa bir süre sonra kapanır; **herhangi bir işlem gerekmez.**
- **FF023LM / FF053LM'de göstergede bir sembol var ve cihaz çalışmıyor:** tabloya göre **demo modu aktif**; kılavuzun Temel ayarlar bölümünden demo modunu devre dışı bırak.

Mikrodalga çalışıyor ama ısıtmıyorsa markadan bağımsız kontrol listesi: [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/). Tabla dönmüyorsa: [mikrodalgada tabla dönmüyor](/blog/mikrodalga-tabla-donmuyor/).

## Ne zaman servis

- **D ya da E mesajı sıfırlamadan sonra yeniden görünüyorsa:** Siemens müşteri hizmetlerini ara ve **hata mesajını eksiksiz olarak** belirt.
- **Mikrodalga çalışması tekrar tekrar duruyorsa:** FF023LM / FF053LM tablosuna göre neden **"Cihazda arıza var."**; hata tekrar meydana gelirse müşteri hizmetleri.
- **Pişirme bölümü aydınlatması çalışmıyorsa:** tablo bunun için doğrudan müşteri hizmetlerini gösteriyor.
- Fiş takılı, odada elektrik var ve kapak temizken **cihaz hiç açılmıyorsa.** Siemens'in tablosunda bu satırda sigorta kutusuyla ilgili adımlar da var; sigorta kutusu bu rehberin kapsamı dışında.

Siemens'in uyarısı: usulüne aykırı onarımlar tehlikelidir; cihazda onarımı **yalnız eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, kapak, çocuk kilidi ve tuşla sıfırlama kullanıcıya; elektrik tesisatı, sigorta kutusu ve cihazın içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (tip etiketinde, ör. BF722... ya da FF023LM...)?
2. Ekran hiç mi yanmıyor, yoksa bir mesaj mı gösteriyor? Mesajı harfi ve rakamıyla not et.
3. Sıfırlamadan sonra mesaj geri geldi mi?
4. Mikrodalga hiç mi başlamıyor, yoksa çalışırken mi duruyor?

Bu dördüne cevabın varsa servise "çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
