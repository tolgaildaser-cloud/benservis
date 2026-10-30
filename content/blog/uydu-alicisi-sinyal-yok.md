---
title: "Uydu alıcısı sinyal yok: kılavuza göre kontrol sırası"
description: "Uydu alıcısı sinyal yok diyorsa Vestel ve Botech alıcı kılavuzlarına göre sıra: alıcı ve kablo, sinyal çubukları, LNB ayarları, arama ve servis sınırı."
slug: "uydu-alicisi-sinyal-yok"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P36 satır #192). Satır jenerik + Magbox, Sunplus, Sencrom, Wellbox, Fobem; en güçlü tek konu jenerik "uydu alıcısı sinyal yok" (OT #1-#3), genel yazı. origin/main'de genel uydu alıcısı yazısı yok. Yakın sayfalar: skytech-tv-sinyal-yok, skytech-tv-uydu-ayarlama, sunny-tv-uydu-kurulumu, skytech-kendinden-uydulu-tv-kurulumu (kendinden uydulu TV'ler, harici alıcı değil), tv-hdmi-sinyal-yok, vestel-televizyon-sinyal-yok.
# Arama kanıtı (30 Eki, Google otomatik tamamlama hl=tr gl=tr): "uydu alıcısı sinyal yok" → 1. …sinyal yok diyor · 2. …sinyal yok · 3. …sinyal yok sorunu · 4. …sinyal yok tamiri · 5. magbox · 6. sunplus · 7. sencrom · 8. wellbox · 9. harici · 10. fobem. BOSLUK.md #192.
# Belgeler (iki üreticinin belgesi, curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf):
#  (V) Vestel DVB 5840R FTA dijital uydu alıcısı kullanım kılavuzu, 33 s.  https://static.vestel.com.tr/kullanimkilavuzlari/10049649.pdf  md5 feeada7a5eace2c2b39bd01082a13388
#  (B) Botech FTA uydu alıcısı kullanma kılavuzu, 14 s. (taranmış, harfleri aralıklı metin katmanı)  https://mail.botech.com.tr/html/wed/1000.pdf  md5 5524a74b064c0d9ffe5a923da57fc6c5
# Sayfalar (PDF sayfası; Vestel'de basılı numara 1 eksik): V s.5 (güvenlik) · s.6 (LNB IN) · s.8 (kullanım, LED, uydu anteni) · s.9 (sinyal kalitesi tablosu) · s.16-17 (Anten Kurulumu) · s.25 (mesajlar) · s.30 (sorun giderme). B s.9 (Uydu Ekleme), s.11 (NIT Arama).
# Magbox, Sunplus, Sencrom, Wellbox, Fobem kılavuzları indirilmedi; yazı bunları adıyla anmıyor, "menü adları marka ve modele göre değişir" notu var.
# BİLEREK YAZILMAYANLAR: çanak ince ayarının adım adım anlatımı (yüksekte çalışma; servis işi, kılavuz tarif etse de) · LNB/kablo değişimi · kalitede "yüzde X'in altı" gibi üçüncü taraf eşikleri (yalnız Vestel'in tablosu) · fiyat (#46).
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Alıcının kumandası", "Alıcının kullanma kılavuzu"]
steps:
  - "Alıcının açık olduğunu ve televizyonla bağlantısını kontrol et."
  - "Alıcıyı prizden çekip uydu kablosunun LNB IN girişine takılı olduğuna bak."
  - "Anten kurulumu menüsünde sinyal seviyesi ve kalitesi çubuklarını oku."
  - "Uydu adı, LNB frekansları, LNB beslemesi ve DiSEqC ayarının kablolamaya uyduğunu kontrol et."
  - "Elle kanal araması yap ve sinyal seviyesini izle."
  - "Ekranda LNB aşırı yük uyarısı varsa fişi çek, bağlantıları kontrol et."
  - "Çanak, LNB ve kablo işini anten servisine bırak."
faq:
  - q: "Uydu alıcısı sinyal yok diyor, ne anlama geliyor?"
    a: "Vestel kılavuzuna göre alıcıya hiçbir sinyal gelmiyorsa, örneğin anten kablosu bağlı değilse, ekrana SİNYAL YOK mesajı gelir. Sorun giderme tablosu aynı belirtiyi 'sinyal yoktur veya zayıftır' diye veriyor ve LNB ile SCART bağlantılarını kontrol edip elle aramada sinyal seviyelerine bakmanı istiyor."
  - q: "Sinyal seviyesi ve kalitesi ne demek?"
    a: "Vestel kılavuzuna göre seviye çubuğu sinyal gücünü, kalite çubuğu sinyal/gürültü oranını gösterir. Kalite yüzde 50 ile 80 arasında iyi, 80 ile 100 arasında mükemmel sayılır; yüzde 20'nin altı kötü sinyaldir ve görüntü zaman zaman kareleşir."
  - q: "Magbox, Sunplus, Sencrom, Wellbox, Fobem alıcıda aynı adımlar geçerli mi?"
    a: "Bu yazı Vestel ve Botech alıcı kılavuzlarına dayanıyor; sayılan markaların kılavuzlarını incelemedik. Sinyal seviyesi, kalite, LNB frekansı ve DiSEqC kavramları alıcılarda ortak, ama menü adları ve yolları markaya ve modele göre değişir. Kendi alıcının kılavuzu esastır."
  - q: "LNB aşırı yüklendi uyarısı çıkıyor. Ne yapmalıyım?"
    a: "Vestel kılavuzunda LNB'de kısa devre olduğunda 'LNB çıkışı aşırı yüklendi, lütfen cihazınızın fişini çekiniz' mesajı çıkıyor. Sorun giderme tablosu bağlantıların kontrol edilmesini, sorun sürüyorsa en yakın servise başvurulmasını istiyor."
images:
  coverAlt: "Oturma odasında televizyonun yanındaki uydu alıcısı, ekranda düz siyah zemin, sehpada kumanda"
  steps:
    - "Uydu alıcısının ön panelindeki ışığı gösteren beyaz eldivenli sade siluet el"
    - "Alıcının fişini prizden çeken beyaz eldivenli sade siluet el, arkadaki uydu kablosu girişi"
    - "Televizyon ekranında iki yatay çubuk gösteren sinyal ekranı çizimi, kumandaya uzanan beyaz eldivenli sade siluet el"
    - "Kumandayla alıcı menüsünde gezinen beyaz eldivenli sade siluet el, ekranda ayar listesi çizimi, okunur yazı yok"
    - "Kumandanın düğmesine basan beyaz eldivenli sade siluet el, ekranda ilerleyen arama çubuğu çizimi"
    - "Alıcının fişini prizden çeken beyaz eldivenli sade siluet el, ekranda uyarı simgesi çizimi"
    - "Çatıdaki çanak anteni uzaktan işaret eden beyaz eldivenli sade siluet el, yanında telefon çizimi"
---

Uydu alıcısının ekranında "sinyal yok" yazıyor. Kanallar gelmiyor, görüntü kareleşiyor ya da hiç yok. Bu yazı Vestel DVB 5840R ve Botech FTA uydu alıcılarının kendi Türkçe kılavuzlarına dayanıyor; Magbox, Sunplus, Sencrom, Wellbox, Fobem gibi alıcılarda aynı kavramlar geçer, menü adları değişir. Hangi adımı kimin yapacağı da belli: kablo, ayar ve menü senin, çanak ve LNB servisin. Alıcının menüsündeki seviye ve kalite çubukları, sorunun hangi tarafta olduğunu anlamak için ilk bakacağın yer.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Alıcı açık mı, televizyona bağlı mı? Uydu kablosu LNB IN'e takılı mı? Anten kurulumu menüsünde seviye ve kalite çubuklarına bak. Uydu adı ve LNB ayarları (Universal LNB için 9750 ve 10600) doğru mu? Elle arama yap. Çubuklar hâlâ sıfırsa → anten servisi.

## Mesaj ne diyor?

| Ekrandaki mesaj ya da belirti | Vestel kılavuzu |
|---|---|
| SİNYAL YOK | Alıcıya hiçbir sinyal gelmiyor, örneğin kablo bağlı değil |
| Görüntü ve/veya ses yok | Sinyal yoktur veya zayıftır; LNB ve SCART bağlantılarını ve sinyal seviyelerini kontrol et |
| Şifreli kanal | Kanal şifreli, görüntü ve ses göndermiyor |
| LNB çıkışı aşırı yüklendi | LNB'de kısa devre; fişi çek |

## Adım adım: sinyal yok için kontrol sırası

**1. Alıcıyı ve televizyonu kontrol et.** Vestel kılavuzuna göre fişi taktıktan sonra ön panelde kırmızı LED yanar (bekleme); kumandadaki Standby tuşuyla açınca ışık yeşile döner. Alıcı SCART kablosuyla televizyonun SCART girişine bağlı olmalı. SCART yoksa video ve ses çıkışından oluşan RCA çıkışı kullanılır. Işık hiç yanmıyorsa Vestel'in sorun giderme tablosu ana kablonun bağlı olup olmadığına bakmanı istiyor. Kumanda alıcıyı açmıyorsa kumandayı doğrudan alıcının ön paneline tut; kılavuz bu durumda büyük olasılıkla pillerin bittiğini, yenilerini takmanı söylüyor.

**2. Uydu kablosunu kontrol et.** Önce alıcıyı prizden çek. Kılavuza göre uydu anteni kablosunun konnektörü alıcının arkasındaki **LNB IN** girişine takılı olmalı. Kılavuz aynı zamanda anten kablosunda, LNB'li alıcılarda kısa devre olmadığından emin olmanı istiyor. Alıcının kapağını kendin açma; Vestel "lütfen kapağı kendiniz açmayın" diyor.

**3. Sinyal çubuklarını oku.** Vestel'de Kurulum menüsünden **Anten Kurulumu**'na gir; menü penceresinde Sinyal Seviyesi ve Sinyal Kalitesi göstergesi bulunur. Seviye çubuğu sinyal gücünü, kalite çubuğu sinyal/gürültü oranını gösterir. Kılavuzun tablosuna göre yüzde 0 ile 20 arası kötü sinyal (görüntü bazen kareleşir), yüzde 20 ile 50 arası kabul edilebilir, yüzde 50 ile 80 arası iyi, yüzde 80 ile 100 arası mükemmel. Botech'in menüsünde de Sinyal Gücü, Sinyal Kalitesi ve Sinyal Durumu alanları var; "Sinyal Yok" burada yazıyor.

**4. Uydu ve LNB ayarlarını kontrol et.** Anten Kurulumu'nda doğru uyduyu seç. Vestel, Universal LNB için düşük osilatör frekansını 9750, yüksek osilatör frekansını 10600 olarak veriyor. LNB beslemesi, alıcı başka bir cihaza bağlı değilse **Açık** olmalı. LNB doğrudan alıcıya bağlıysa DiSEqC **Kapalı** seçilir; Botech de DiSEqC'in anteninin bağlı olduğu girişe göre belirlenmesini istiyor ve LNB beslemesi için 13V, 18V ya da 13/18V seçeneklerini sunuyor.

**5. Elle arama yap.** Vestel'in sorun giderme tablosu "Görüntü ve/veya ses yok" için LNB ve SCART bağlantılarını kontrol etmeni ve **elle aramada sinyal seviyelerini** izlemeni istiyor. Anten Kurulumu'ndaki Kanal Arama, alıcının o uydudaki önceden belirlenmiş frekanslarda kanal aramasını başlatır.

**6. LNB uyarısına bak.** Vestel kılavuzu LNB'de kısa devre varsa "LNB çıkışı aşırı yüklendi, lütfen cihazınızın fişini çekiniz" mesajını verdiğini yazıyor. Fişi çek, bağlantıları kontrol et. Problem sürüyorsa kılavuz en yakın servise başvurmanı istiyor.

**7. Çanağı servise bırak.** Vestel çanağın ince ayarını anlatıyor: Anten Kurulumu, DiSEqC 1.2 menüsü, bir referans frekans ve anteni yavaşça çevirmek. Bu iş çanağın başında, çoğu zaman çatıda ya da balkon dışında yapılır; kılavuz anteni yavaşça çevirirken sinyal çubuklarındaki değerin sıfırdan farklı olmasını bekliyor. Anten, çanak, LNB ve kablo tesisatı anten servisinin işi.

## Ne zaman servis?

- Kablo ve ayarlar doğruyken seviye ve kalite çubukları sıfırda kalıyorsa
- LNB aşırı yük uyarısı fişi çekince de sürüyorsa
- Çanak yönü ya da LNB şüphesi varsa

⛔ Çatıya ya da balkon dışına çıkıp çanakla uğraşma; alıcının kapağını açma.

Televizyonun kendisi sinyal yok diyorsa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) ya da [Vestel televizyon sinyal yok](/blog/vestel-televizyon-sinyal-yok/) yazısına bak.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Mesajlar, sorun giderme tablosu, sinyal kalitesi tablosu ve LNB ayarları Vestel DVB 5840R ve Botech FTA uydu alıcılarının Türkçe kılavuzlarından alınmıştır. Menü adları markaya ve modele göre değişir; kendi kılavuzun farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
