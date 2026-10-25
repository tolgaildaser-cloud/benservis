---
title: "Skytech TV sinyal yok diyor: ne yapmalıyım?"
description: "Skytech TV'de Sinyal Yok uyarısı: SOURCE ile doğru kaynak, gizlenen giriş, LNB ve anten girişi, LNB Gücü, HDMI bağlantısı. Kılavuzun sorun giderme tablosu."
slug: "skytech-tv-sinyal-yok"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y5-A; Dalga 6 X1 yedeği). origin/main 26ffd7d'de "skytech-tv-sinyal-yok" slug'ı ve Skytech × sinyal başlığı yok.
# Arama kanıtı (Y5 ot.tsv, 13:46, hl=tr gl=tr): "skytech tv s" → 1. "skytech tv sinyal yok diyor ne yapmalıyım", 4. "skytech tv sinyal yok diyor". GSC: satır yok.
# Belge zinciri: skytech.com.tr/kullanim-kilavuzu (200) → skytech.com.tr/uploads/files/
#  (SA) 1416ca625b69fc9be0c8a7b1808ef831.pdf Android, 116 s., md5 3af25fd7a8c420524b14640c5060ddba
#  (SU) b0e4fd5cf81044a1f42d5c6ad2aac60e.pdf uydu alıcılı, 82 s., md5 2d3908abea7de815642634c8645a3b3e
#  (SG) 9e8e348a4be6e7163701110a54425c40.pdf Google TV, 73 s., md5 ed3fda5ebad54e6308eb94d0276104bc
#  (SW) fcf9b843cb47bf4e5933f0c6b134456b.pdf webOS, 102 s., md5 0de744cf430e0af4416a34df110399fd
#  (SH) 666758210ab9d3abadaf020bdfa9620a.pdf Whale, 62 s., md5 dd17972f798f0636a519f7b982921092 — hepsi 200 application/pdf.
# BİLEREK YAZILMAYANLAR: Türksat frekansı, TKGS, uydu/LNB/DiSEqC ayar adımları (skytech-tv-uydu-ayarlama'da), tarama adımları (skytech-tv-kanal-ayarlama'da), çanak çevirme ve LNB değişimi (#31), fiyat (#46).
# Alıntı denetimi: skytech-tv-sinyal-yok.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Televizyonun kullanım kılavuzu"]
steps:
  - "Modelinin hangi kılavuz grubunda olduğunu ve kaynak tuşunun adını öğren."
  - "Kaynak menüsünden çanak için uydu, çatı anteni için karasal, alıcı için doğru HDMI girişini seç."
  - "Aradığın giriş listede yoksa Gelişmiş menüsündeki Kaynak Ayarı'nda gizlenmiş olup olmadığına bak."
  - "Çanak kablosunun LNB girişine, anten kablosunun anten girişine takılı olduğunu kontrol et."
  - "Uydu menüsünde LNB Gücü'nün açık olduğuna ve Sinyal Bilgisi ekranına bak."
  - "HDMI ya da AV cihazında sinyal giriş bağlantılarını kontrol et."
  - "Çanak ayarı ya da LNB şüphesinde uzman ya da yetkili servis çağır."
faq:
  - q: "Skytech TV sinyal yok diyor, kılavuz ne diyor?"
    a: "Skytech kılavuzlarının sorun giderme tablosunda Sinyal Yok uyarısı için iki olası neden var: çanak anten tam olarak ayarlanmamış (doğru şekilde ayarlanmalı) ya da LNB hasarlı (LNB değiştirilmeli). Ses veya görüntü yoksa tablo ayrıca kablo bağlantılarını, LNB ve diğer araçların bağlantısını kontrol etmeni istiyor."
  - q: "Kaynak menüsünde uydu ya da HDMI seçeneği görünmüyor. Neden?"
    a: "Android kılavuzunun Gelişmiş menüsünde Kaynak Ayarı diye bir satır var: giriş kaynaklarının Kaynak menüsünde görüntülenmesini ya da gizlenmesini sağlıyor. Bir giriş daha önce gizlendiyse listede çıkmaz; aynı menüden yeniden görünür yap."
  - q: "Skytech TV'de sinyal yokken ekran neden mavi oluyor?"
    a: "Mavi Ekran ayarı açıksa televizyon sinyal yokken ekranı mavi gösteriyor. Uydu alıcılı kılavuza göre bu ayar kapalıyken ekran siyah kalıyor. Bu bir arıza değil, seçilen bir görünüm. webOS modellerinde benzer ayarın adı Sinyal Yok Görseli."
  - q: "Kumandadaki TV tuşu ne işe yarıyor?"
    a: "Uydu alıcılı kılavuzdaki bazı kumandalarda TV tuşu, yayın modundayken anten türleri (hava, kablo, uydu) arasında geçiş yapıyor. Yanlış anten türünde kaldıysan televizyon kanal bulamayabilir (çıkarım); tuşa basıp doğru türe geç."
images:
  coverAlt: "Duvara monte edilmiş düz ekran televizyonda düz renkli boş ekran"
  steps:
    - "Kapağı açık duran bir televizyon kullanım kılavuzu"
    - "Televizyon ekranında açılmış giriş kaynağı listesi"
    - "Televizyon ayarlar menüsünde gelişmiş seçenekler ekranı"
    - "Televizyonun arka panelindeki anten ve uydu girişleri"
    - "Ekranında sinyal gücü çubukları görünen bir televizyon menüsü"
    - "Televizyonun yan tarafındaki giriş yuvasına takılı bir HDMI kablosu"
    - "Çatıdaki bir çanak antenin ucundaki LNB başlığı"
---

Skytech televizyonun ekranında "Sinyal Yok" yazıyor. Önce şunu bil: Skytech'in tek bir kılavuzu yok. Üreticinin sitesinde Android, uydu alıcılı, Google TV, webOS ve Whale işletim sistemli modeller için ayrı kılavuzlar duruyor ve kaynak tuşunun adı bile aralarında değişiyor. Ortak olan ise sorun giderme tablosu: Sinyal Yok uyarısı için aynı iki satır beş kılavuzun dördünde birebir var. Bu yazı o tabloya ve kılavuzların kaynak, giriş ve uydu menülerine dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kaynak tuşu (SOURCE, Inputs ya da Input/Kaynak) ile doğru giriş. Giriş listede yoksa Kaynak Ayarı'nda gizlenmiş olabilir. Çanak kablosu LNB girişine, anten kablosu anten girişine. LNB Gücü açık mı. HDMI cihazında bağlantıyı kontrol et. Çanak ayarı ve LNB uzmanın işi.

## Kılavuzun tablosu

| Problem | Olası neden | Ne yapılmalı | Kim |
|---|---|---|---|
| **Ses veya görüntü yok** | Çanak anten tam ayarlanmamış | Çanak doğru ayarlanmalı | 🔧 Uzman |
| **Ses veya görüntü yok** | Sinyal yok ya da zayıf | Kablo, LNB ve diğer bağlantılar; gerekirse çanağı ayarlat | 🛠️ Sen → 🔧 Uzman |
| **Sinyal Yok uyarısı** | Çanak anten tam ayarlanmamış | Çanak doğru ayarlanmalı | 🔧 Uzman |
| **Sinyal Yok uyarısı** | LNB hasarlı | LNB değiştirilmeli | 🔧 Uzman |
| **Görüntü yok (webOS)** | — | Sinyal giriş bağlantıları (HDMI, AV) | 🛠️ Sen |

Tablodaki satırların çoğu çanağa çıkıyor. Ama oraya gitmeden önce televizyonun yanlış girişte kalmadığından emin olmak gerekiyor; çoğu "sinyal yok" orada çözülür (çıkarım).

## Adım adım: Skytech TV sinyal yok uyarısı

**1. Kılavuz grubunu ve kaynak tuşunu bul.** Model kodunu arka etiketten oku ve kılavuzlarda kendi grubunu bul. Android ve uydu alıcılı kumandalarda tuşun adı **SOURCE** ("Giriş Kaynağını değiştirir"). Google TV kumandasında **Inputs**, Whale kumandasında **Input / Kaynak**, webOS kumandasında **giriş kaynağı tuşu**.

**2. Doğru kaynağı seç.** Android kılavuzunun 1104/1105 serisi bölümünde kaynak listesi şöyle: **Analog, DVB-T (Dijital Karasal), DVB-C (Kablo), DVB-S (Uydu), AV, HDMI1, HDMI2, HDMI3**. Çanak doğrudan televizyona bağlıysa DVB-S, çatı anteni için DVB-T seçilmeli. Whale modellerde MENU'den **Kaynak (Source)** menüsüne girip DTV, ATV, AV ya da HDMI seçiyorsun. Google TV'de yol **Ayarlar → Kanal ve girişler → Girişler**. Uydu alıcılı kılavuzdaki bazı kumandalarda **TV** tuşu yayın modundayken hava, kablo ve uydu arasında geçiş yapıyor.

**3. Gizlenmiş giriş.** Aradığın giriş listede hiç yoksa Android kılavuzunun **Gelişmiş Menüsü**'ndeki **Kaynak Ayarı** satırına bak. Kılavuza göre bu menüyle giriş kaynaklarının Kaynak menüsünde görüntülenmesini ya da **gizlenmesini** sağlayabiliyorsun; aynı yerde kaynağın adı da değiştirilebiliyor. Ayar kişiye göre yapılmış olabilir; evde başkası menüyle oynadıysa ilk bakılacak yer burası (çıkarım).

**4. Kablo doğru girişte mi?** Arka panelde iki ayrı yuva var: Android kılavuzundaki bağlantı tablosunda **LNB Girişi** ve **RF,C/T2 Anten Girişi** ayrı satırlar; Google TV ve Whale kılavuzlarında anten yuvasının adı **ANT 75** ("Anten/kablo TV girişi"). Çanak kablosu anten yuvasına takılırsa uydu kaynağında sinyal gelmez (çıkarım). Tablonun istediği gibi kablo bağlantılarını ve LNB'ye giden bağlantıyı da kontrol et.

**5. LNB Gücü ve Sinyal Bilgisi.** Android kılavuzunun Uydu Yayını Modu kanal menüsünde **LNB Gücü** satırı var; kılavuza göre varsayılan değeri **"Açık"**. Kapatıldıysa çanaktaki LNB beslenmez ve sinyal gelmeyebilir (çıkarım). Uydu alıcılı kılavuzun KANAL menüsündeki **Sinyal Bilgisi** satırı seyrettiğin kanalın sinyal bilgilerini gösteriyor; Whale menüsünde de aynı adlı bir satır var. uydu menüsünün geri kalanı [Skytech TV uydu ayarlama](/blog/skytech-tv-uydu-ayarlama/) yazısında.

**6. HDMI ya da AV cihazı.** Uyarı alıcı, konsol ya da başka bir cihazın girişindeyse webOS kılavuzunun tablosu "Görüntü yok" için **sinyal giriş bağlantılarını (HDMI, AV)** kontrol etmeni istiyor. Ekran hiç açılmıyorsa aynı tablo fişi prizden çıkarıp **30 saniye** sonra yeniden takmanı söylüyor.

**7. Çanak ve LNB uzmana.** Kaynak, giriş ve kablo doğruyken uyarı sürüyorsa tablonun kalan satırları çanak antenin doğru ayarlanmasını ya da **hasarlı LNB'nin değiştirilmesini** istiyor. Çatıya çıkmak ve LNB söküp takmak uzmanın işi. Kanal listesi boşaldıysa yeniden tarama için [Skytech TV kanal ayarlama](/blog/skytech-tv-kanal-ayarlama/) yazısına bak.

## Mavi ekran, siyah ekran, ekran koruyucu

Sinyal yokken ekranın nasıl göründüğü de bir ayar. Android kılavuzuna göre **Mavi Ekran** açıksa ekranda sinyal yokken ekran mavi görünüyor; uydu alıcılı kılavuz bu ayar kapalıyken ekranın **siyah** kaldığını yazıyor. webOS modellerinde benzer ayarın adı **Sinyal Yok Görseli**: sinyal olmadığında görüntülenen görseli açıp kapatıyorsun. Android kılavuzundaki **Ekran Koruyucu** da televizyon kumandadan komut almadığında ya da yayında sinyal almadığında ekran koruyucu görüntülerinin ne kadar sonra çıkacağını belirliyor. Yani ekranın mavi olması ya da resimler gelmesi tek başına arıza değil.

## Ne zaman servis

- Doğru kaynakta, doğru girişte ve LNB Gücü açıkken uyarı sürüyorsa
- Aynı çanağa bağlı başka bir cihazda yayın var, televizyonda yoksa
- Tablo hasarlı LNB'yi gösteriyorsa (uzman)
- Ekran fiş çekilip takıldıktan sonra da açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kaynak, giriş, kablo ve menü ayarı sende; çanak ayarı, LNB değişimi ve televizyonun içi uzmanın ya da Skytech yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Model kodu ve işletim sistemi ne?
2. Uyarı hangi kaynakta çıkıyor?
3. Çanak doğrudan mı, alıcı üzerinden mi bağlı?
4. LNB Gücü açık mı?
5. Sinyal Bilgisi ekranında ne görünüyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
