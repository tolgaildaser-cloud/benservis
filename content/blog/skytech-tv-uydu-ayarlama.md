---
title: "Skytech TV uydu ayarlama: LNB, DiSEqC ve uydu ekleme"
description: "Skytech televizyonda uydu ayarı nasıl yapılır? Kılavuza göre LNB tipi, DiSEqC portu, otomatik ve transponder araması, listede olmayan uyduyu ekleme."
slug: "skytech-tv-uydu-ayarlama"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "skytech" geçen slug/başlık/blog gövdesi YOK.
# GSC: "skytech" satırı yok. OT (bu koşu): "skytech tv u" → 1. "skytech tv uydu ayarlama" · 2. "…uydu frekans ayarlama" · 3. "…uydu güncelleme"; "skytech uydu" → 1. "skytech uydu ayarlama"; "skytech tv " → 4. "…uydu ayarlama".
# Belge zinciri (#88): skytech.com.tr/kullanim-kilavuzu (200) → uploads/files PDF (200 application/pdf):
#  (A) Android Tv Kullanma Kılavuzu 1416ca625b69fc9be0c8a7b1808ef831.pdf, 116 s., md5 3af25fd7a8c420524b14640c5060ddba (s.27-28, 67-68)
#  (U) Uydu Alıcılı Tv Kullanma Kılavuzu b0e4fd5cf81044a1f42d5c6ad2aac60e.pdf, 82 s., md5 2d3908abea7de815642634c8645a3b3e (s.19-20, 35-36)
#  (W) WebOS Tv Kullanma Kılavuzu fcf9b843cb47bf4e5933f0c6b134456b.pdf, 102 s., md5 0de744cf430e0af4416a34df110399fd (s.41)
# Türkçe, metin tabanlı. BİLEREK YAZILMAYANLAR: Türksat frekans/sembol oranı değerleri (belgede yok) · TKGS (belgede yok) · çanak yönlendirme/LNB değişimi (uzman işi) · fiyat (#46).
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Uydu çanağından gelen kablo"]
steps:
  - "Uydu kablosunu televizyonun uydu alıcı anten girişine (LNB) tak ve anten tipini Uydu yap."
  - "Kanal menüsünde uydunu seç; listede yoksa yeni uydu ekle."
  - "Çanak ya da LNB ayarlarında LNB tipini, LNB gücünü ve 22KHz değerini kontrol et."
  - "Birden fazla çanak ya da uydu kullanıyorsan DiSEqC portunu uydunun bağlı olduğu LNB'ye göre ayarla."
  - "Tarama modunu, kanal türünü ve servis tipini seçip otomatik aramayı başlat."
  - "Eksik kalan yayınlar için transponder listesinden frekans seçerek elle arama yap."
  - "Arama bitince sinyal bilgisi ekranından yayının gücüne ve kalitesine bak."
faq:
  - q: "Skytech TV'de uydu ayarı hangi menüde?"
    a: "Skytech'in Android TV kılavuzunda uydu ayarı Kanal Menüsü'nde, anten tipi Uydu seçildiğinde açılıyor. Kendinden uydu alıcılı modellerde ise MENU, KANAL, Otomatik Arama ve Çanak Anten Ayarı satırlarından yapılıyor."
  - q: "Hangi LNB tipini seçmeliyim?"
    a: "Kılavuzun bir model grubunda Türksat ve Hotbird uyduları için Universal LNB seçeneğinin seçilmesi gerektiği, Türkiye'de yaygın kullanılan LNB tipinin de 9750/10600 olduğu yazıyor. Bina sistemin farklıysa değeri anten tesisatını kuran firmadan öğren."
  - q: "DiSEqC ne zaman ayarlanır?"
    a: "Aynı anda birden fazla çanak ya da uydu kullanıyorsan. Kılavuzdaki örnekte DiSEqC 1.0 ile LNB1 Türksat, LNB2 Hotbird olarak tanımlanıyor; DiSEqC 1.0 dört uyduya kadar, DiSEqC 1.1 daha fazla uydu için kullanılıyor. Motorlu çanakta konum ayarı DiSEqC 1.2 ve 1.3'ten yapılıyor."
  - q: "Listede olmayan bir uyduyu nasıl eklerim?"
    a: "Uydu alıcılı modellerde Çanak Anten Ayarı ekranında kumandadaki sarı tuşla yeni uydu ekleniyor. webOS'lu Skytech modellerinde kılavuz önce Uydu Ayarlarını Değiştir'i, sonra sağ üst köşedeki artı simgesini seçip uyduyu arama listesine eklemeyi tarif ediyor."
  - q: "Tek bir frekansı nasıl ararım?"
    a: "Android kılavuzundaki Manuel Tarama'da uyduyu seçip Transponder satırında ENTER'a basarak aramak istediğin frekansı yazıyorsun. Uydu alıcılı modellerde EPG tuşu seçili uydunun transponder listesini açıyor; bir ya da birden fazla frekans seçip yalnız onlarda arama yapabiliyorsun."
images:
  coverAlt: "Bir apartman balkonuna monte edilmiş uydu çanağı ve LNB başlığı"
  steps:
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda telefon ve kullanım kılavuzu"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda panel ekranındaki uyarı"
---

Skytech televizyonunda uydu kanalları gelmiyor, yeni bir uydu eklemen gerekiyor ya da bina sistemini değiştirdin. Uydu ayarı Skytech'te kanal menüsünden yapılıyor ama satır adları modele göre değişiyor: bazı Android modellerinde "LNB Ekle", bazılarında "Çanak Kurulumu", kendinden uydu alıcılı modellerde "Çanak Anten Ayarı". Bu yazıda Skytech'in kendi sitesinde yayımladığı Android TV, uydu alıcılı TV ve webOS TV kılavuzlarındaki uydu adımlarını bir araya getirdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Anten tipini Uydu yap, uyduyu seç, LNB tipini kontrol et (kılavuza göre Türksat ve Hotbird için Universal LNB), birden fazla uydu varsa DiSEqC portunu ayarla, sonra otomatik aramayı başlat. Eksik yayın için transponderden elle ara.

## Uydu ayarındaki satırlar

| Satır | Kılavuza göre görevi | Varsayılan ya da öneri |
|---|---|---|
| **LNB Seçimi / LNB Ayarı** | Kullanılan LNB tipini belirler | Türksat ve Hotbird için Universal LNB; yaygın tip 9750/10600 |
| **LNB Gücü** | LNB'ye besleme verir | Açık |
| **22KHz** | 22KHz sinyalinin durumu | Otomatik |
| **Tone Burst** | Tone Burst sinyali | Devre Dışı |
| **DiSEqC 1.0 / 1.1** | Uydunun hangi LNB'ye bağlı olduğu | Tek çanakta gerekmez |
| **DiSEqC 1.2 / 1.3** | Motorlu çanakta konum | Yalnız motorlu çanakta |

## Adım adım: Skytech TV'de uydu ayarlama

**1. Kabloyu tak, anten tipini seç.** Çanaktan gelen kabloyu televizyonun uydu alıcı anten girişine (LNB) tak. Kanal Menüsü'nde **Anten Tipi**'ni Uydu yap; kılavuza göre uydu yayınlarını izlemek için ilk adım bu. Kumandadaki TV tuşu da yayın modunda anten türleri arasında geçiş yapıyor.

**2. Uyduyu seç ya da ekle.** Android modellerin bir grubunda **LNB Ekle** menüsünden taramak istediğin uyduyu seçip OK'a basıyorsun. Başka bir grupta **Otomatik Tarama** içindeki **Uydu Seçimi** listesinden uyduyu yön tuşlarıyla değiştiriyorsun. Uydu alıcılı modellerde **Çanak Anten Ayarı** ekranında kumandadaki **sarı tuş** yeni uydu ekliyor. webOS'lu modellerde ise kılavuz, listede olmayan uydu için önce **Uydu Ayarlarını Değiştir**'i, sonra sağ üst köşedeki artı simgesini seçip uyduyu arama listesine eklemeyi tarif ediyor; webOS kılavuzuna göre Türksat uydusu televizyonda yüklü geliyor.

**3. LNB ayarlarını kontrol et.** **Çanak Kurulumu** ekranında sağdaki listeden uyduyu seçip ENTER'a bas, parametreleri düzenlemek için sağ yön tuşuna geç. **LNB Ayarı**'nda sağ ve sol tuşlarla LNB tipini değiştirebilirsin; kılavuz Türkiye'de yaygın tipin 9750/10600 olduğunu, Türksat ve Hotbird için Universal LNB seçilmesi gerektiğini yazıyor. **LNB Gücü** varsayılan olarak Açık, **22KHz** Otomatik, **Tone Burst** Devre Dışı. Bunları neden değiştirdiğini bilmiyorsan varsayılanda bırak.

**4. DiSEqC portunu ayarla.** Aynı anda birden fazla çanak ya da uydu kullanıyorsan uydunun hangi LNB'ye bağlı olduğunu **DiSEqC 1.0** ya da **1.1** satırında belirle. Kılavuzdaki örnek: DiSEqC 1.0'da LNB1 Türksat, LNB2 Hotbird. DiSEqC 1.0 dört uyduya kadar seçim yapıyor. **DiSEqC 1.2 ve 1.3** yalnız motorlu çanakta konum ayarı için. Bina sisteminde hangi portun hangi uyduya gittiğini bilmiyorsan bunu tesisatı kuran kişiden öğren; yanlış port seçimi kanal bulunmasını engeller.

**5. Otomatik aramayı başlat.** Tarama modunda Ağ, Tam Tarama ya da kör tarama seçenekleri var; varsayılan seçenek kılavuza göre daha önce kayıtlı transponderleri tarıyor. **Kanal Türü**'nde şifresiz, şifreli ya da tümü, **Servis Tipi**'nde radyo, TV ya da tümü seçilir. Android'in bir grubunda **Tüm LNB'ler İçin Otomatik Ayarlamayı Başlat**, öbüründe "Arama" satırında ENTER aramayı başlatıyor; bulunan kanallar otomatik kaydediliyor.

**6. Elle transponder araması.** Bir yayın eksik kaldıysa **Manuel Tarama**'da uyduyu seç, **Transponder** satırında ENTER'a basıp aramak istediğin frekansı yaz ve aramayı başlat. Uydu alıcılı modellerde Çanak Anten Ayarı ekranında **EPG** tuşu seçili uydunun transponder listesini açıyor; bir ya da birden fazla frekans seçerek yalnız onlarda arama yapabiliyor, renkli tuşlarla frekans düzenleyip ekleyip silebiliyorsun. Güncel frekans değerleri kılavuzda yok; yayıncının ya da uydu operatörünün duyurusundan al.

**7. Sinyali kontrol et.** Uydu alıcılı modellerde KANAL menüsündeki **Sinyal Bilgisi**, izlediğin kanalın sinyal bilgilerini gösteriyor. Sinyal yoksa ya da zayıfsa kılavuzun sorun giderme tablosu iki olası neden yazıyor: çanak anten tam ayarlanmamış ya da LNB hasarlı.

## Ne zaman servis

- LNB tipi, DiSEqC portu ve kablo doğruyken hiçbir uydu kanalı gelmiyorsa
- Sinyal bilgisi ekranında sinyal hiç görünmüyorsa
- Aynı kablo başka bir alıcıda çalışıyor ama Skytech'te çalışmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menü ayarları sende. Çanak yönlendirme, LNB değişimi ve çatı ya da balkon işi uzmanın; kılavuz da çanağın ayarlatılmasını ve hasarlı LNB'nin değiştirilmesini öneriyor. Televizyonun alıcı devresi Skytech yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun model kodu ne?
2. Tek çanak mı, birden fazla uydu ya da merkezi sistem mi?
3. Hangi LNB tipi ve DiSEqC portu seçili?
4. Sinyal bilgisi ekranında ne görünüyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Karasal ve kablo taraması için [Skytech TV kanal ayarlama](/blog/skytech-tv-kanal-ayarlama/), kendinden uydu alıcılı modelin ilk kurulumu için [Skytech kendinden uydulu TV kurulumu](/blog/skytech-kendinden-uydulu-tv-kurulumu/) yazısına bak. Bil, gör, çağır.
