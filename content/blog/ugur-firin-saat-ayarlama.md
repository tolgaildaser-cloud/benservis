---
title: "Uğur fırın saat ayarlama nasıl yapılır"
description: "Uğur ankastre fırında saat ayarı: 12:00 yanıp sönerken dakika ve saat, OK ile onay, elektrik kesintisinden sonra yeniden ayar ve Ayarlar Modu'nda CL."
slug: "ugur-firin-saat-ayarlama"
date: "2026-10-24"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 3 F yedeği). origin/main'de "uğur fırın saat" başlıklı/slug'lı sayfa yok;
#   ugur-firin-isinmiyor yalnız bir adımda saat ayarına değiniyor (ayrı sorgu: ısınmıyor).
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "uğur fırın s" → 1. "uğur fırın saat ayarlama"; "uğur fırın saat" → 1. "…saat ayarlama", 2. "uğur ankastre fırın saat ayarlama".
#   GSC: "uğur fırın saat ayarlama" www-5 (3 ay) 12 gösterim, poz 8,25 · www-6 (7 gün) 11 gösterim · www-4 4 · www-3 2.
# Belge (#88), bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf:
#  (U1) UAF serisi kullanım kılavuzu  ürün sayfası https://ugur.com.tr/uaf-608m-bcen (200) → https://ugur.com.tr/Data/EditorFiles/docs/101177_KK.pdf  44 s.  md5 05a07ab38914cbc3bcfd36c1ecfdecdf — PDF s.13, 15, 16, 17, 19, 20, 22
#  (U2) UAF serisi  https://ugur.com.tr/uaf-6011db-bcpst (200) → .../100876_KK.pdf  md5 6ff1ee0839d2c952d470441b11b451f7 — s.16 aynı saat ayarı metni (çapraz kontrol)
# Tuş adları s.16'daki gösterge tablosundan (Geri, Tamam/OK, Süre artırma +, Süre azaltma −); hangi tuşa basıldığı s.17, 19, 22 görsellerinden okundu.
# BİLEREK YAZILMAYANLAR: dokunmatik/diğer seri panelleri · saat ayarlanmazsa fırın hiç çalışmaz iddiası (belge yalnız "ayar ekranı olarak kalır" diyor) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu"]
steps:
  - "Fırının mekanik mi dijital zamanlayıcılı mı olduğuna bak; saat ayarı yalnız dijital kontrol panelinde var."
  - "Elektrik geldiğinde ekranda yanıp sönen saati gör; − ve + tuşlarıyla önce dakikayı seç, OK ile onayla."
  - "Saat hanesine geçince − ve + ile saati seç, OK ile onayla; saat göstergesi kaybolunca ayar tamam."
  - "Yanlış haneye geçtiysen Geri tuşuna kısa bas; dakika yanıp sönerken Geri'ye basmak ayarı kaydetmeden bitirir."
  - "Saati sonradan değiştirmek için Geri ve OK tuşlarına birlikte uzun bas, CL seçeneğine gel ve OK ile gir."
  - "CL ekranında − ve + ile dakikayı ve saati seç, OK ile onayla."
  - "Elektrik kesintisinden sonra saati yeniden ayarla; ekranda durdurma sembolü varsa OK'a kısa basarak durdurma modundan çık."
faq:
  - q: "Uğur fırında saat ayarı neden gerekli?"
    a: "Uğur'un kılavuzu dijital zamanlayıcılı fırınlarda ilk iş olarak saati ayarlamanı istiyor. Saat verileri onaylanmadıkça ekran ayar ekranı olarak kalıyor; otomatik pişirme ve bitiş saati ayarları da günün saatine göre hesaplanıyor."
  - q: "Elektrik kesilince saat neden sıfırlanıyor?"
    a: "Kılavuza göre elektrik kesintisinde günün saati iptal oluyor ve fırın devre dışı kalıyor. Elektrik geldiğinde saati yeniden ayarlaman gerekiyor."
  - q: "Saati ayarladım ama fırın ısıtmıyor, neden?"
    a: "Ekranda durdurma sembolü görüyorsan fırın durdurma modunda olabilir; bu modda pişirme yapılmıyor. OK tuşuna kısa basınca devam sembolü geliyor ve mod kapanıyor. Ayrıca fonksiyon ve sıcaklık düğmesinin ikisinin de bir değere getirilmiş olması gerekiyor."
  - q: "Mekanik zamanlayıcılı Uğur fırında saat ayarı var mı?"
    a: "Hayır. Mekanik zamanlayıcı yalnız pişirme süresi belirlemek için. Süreyi saat yönünde çevirerek ayarlıyorsun; modelin adında M varsa M konumunda süre seçmeden pişirebiliyorsun."
  - q: "Saati daha hızlı nasıl değiştiririm?"
    a: "Kılavuza göre − ve + tuşlarına uzun basınca rakamlar daha hızlı ilerliyor."
images:
  coverAlt: "Ankastre fırının üst kısmında dijital saat ekranı ve düğmeler"
  steps:
    - "Ankastre fırının ön panelinde döner düğmeler ve ortada küçük bir ekran"
    - "Fırın ekranında yanıp sönen saat haneleri"
    - "Fırın ekranında saat haneleri ve yanında küçük bir saat simgesi"
    - "Fırın panelinde geri ok simgeli bir tuş"
    - "Fırın panelinde yan yana dizilmiş dokunmatik tuşlar"
    - "Fırın ekranında kısa bir menü kısaltması"
    - "Fırın ekranında dikey çizgilerden oluşan duraklatma sembolü"
---

Uğur ankastre fırını yeni taktırdın ya da elektrik kesildi ve ekranda saat yanıp sönüyor. "Uğur fırın saat ayarlama nasıl yapılır" sorusunun cevabı Uğur'un kendi kullanım kılavuzunda dört tuşla anlatılıyor: **Geri**, **−**, **+** ve **OK**. Bu yazıda Uğur'un sitesindeki UAF serisi ankastre fırın kılavuzunu kullandık; aynı seri için yayımlanan ikinci bir kılavuzda saat ayarı metni birebir aynı. Panel düzenin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda saat yanıp sönerken − ve + ile dakikayı seç, OK. Sonra saati seç, OK. Sonradan değiştirmek için Geri ve OK'a birlikte uzun bas, CL'ye gel. Elektrik kesilirse saat silinir, yeniden ayarla. Ekranda durdurma sembolü varsa OK'a kısa bas.

## Tuşlar ve göstergeler

Kılavuzun dijital kontrol paneli tablosunda tuşların adı şöyle:

| Tuş / gösterge | Kılavuzdaki adı | Saat ayarında işi |
|---|---|---|
| **↩** | Geri tuşu | Bir haneye geri dön ya da ayarı kaydetmeden çık |
| **−** | Süre azaltma tuşu | Rakamı azalt |
| **+** | Süre artırma tuşu | Rakamı artır |
| **OK** | Tamam tuşu | Haneyi onayla |
| **Saat simgesi** | Saat ayarı göstergesi | Ayar bitince kaybolur |
| **‖** | Duraklatma göstergesi | Fırın durdurma modunda |

## Adım adım: Uğur fırında saati ayarlamak

**1. Zamanlayıcının tipine bak.** Uğur'un UAF serisinde iki tip zamanlayıcı var. **Mekanik zamanlayıcı** yalnız pişirme süresi belirliyor: süreyi saat yönünde çeviriyorsun, süre dolunca çınlama sesi geliyor. Bu tipte saat ayarı yok. Kılavuza göre modelin adında **M** varsa düğmeyi M konumuna getirip süre seçmeden pişirebiliyorsun. Saat ayarı yalnız **dijital kontrol paneli** olan fırında yapılıyor ve kılavuzun kuralı açık: fırını kullanmaya başlamadan önce saat ayarını yap.

**2. Önce dakikayı ayarla.** Güç bağlantısından sonra ekrandaki bütün rakamlar iki saniye yanıp sönüyor, ardından ekranda **12:00** beliriyor. Kılavuzun sırası önce dakika: **−** ve **+** tuşlarıyla dakikayı seç, **OK** ile onayla. Onaylayınca ayar saat hanesine geçiyor. Tuşlara uzun basarsan rakamlar daha hızlı ilerliyor.

**3. Sonra saati ayarla.** Saat hanesinde yine **−** ve **+** ile saati seç, **OK** ile onayla. Ekranda günün saati görünüyor ve **saat ayarı göstergesi** kayboluyor. Kılavuza göre ayardan bir dakika sonra ekranın parlaklığı azalıyor; bu bir arıza değil, ekranı yeniden ayarlamana gerek yok. Parlaklığı değiştirmek istersen aşağıdaki Ayarlar Modu'nda ayrı bir SC seçeneği var. Saat verileri onaylanmadıkça ekran ayar ekranı olarak kalıyor, yani OK'a basmadan bırakırsan ayar bitmiş sayılmıyor.

**4. Yanlış haneye geçtiysen Geri tuşu.** Saat ayarlarken dakikaya dönmek istersen **Geri** tuşuna kısa bas. Dikkat: dakika kısmı yanıp sönerken Geri tuşuna kısa basarsan saat ayarı **hiçbir veri kaydedilmeden** sonlanıyor. Böyle olursa ayarı baştan yap.

**5. Saati sonradan değiştirmek için Ayarlar Modu'na gir.** Kılavuz günün saatini sonradan **Ayarlar Modu**'ndan değiştirmeni söylüyor. Bunun için **Geri** ve **OK** tuşlarına **birlikte uzun bas**, menüye gir. **−** ve **+** tuşlarıyla **CL** seçeneğine gel ve **OK** ile onayla. Aynı menüde ses tonu (SO), ekran parlaklığı (SC) ve alarm melodisi (AL) seçenekleri de var; bunlarla karıştırma.

**6. CL ekranında dakikayı ve saati gir.** CL'ye girince **−** ve **+** ile önce dakikayı, sonra saati seç ve **OK** ile onayla. Ekranda yeni saat görünüyor.

**7. Elektrik kesintisinden sonra yeniden ayarla, durdurma modunu kontrol et.** Kılavuz iki yerde aynı uyarıyı yapıyor: elektrik kesilirse günün saati iptal oluyor, fırın devre dışı kalıyor ve elektrik geldiğinde saat yeniden ayarlanmalı. Saat doğruysa ama fırın pişirmiyorsa ekrana bak. Günün saati görünürken **Geri** tuşuna uzun basılırsa fırın **durdurma moduna** geçiyor ve ekranda **‖** sembolü çıkıyor; bu modda pişirme yapılmıyor. Çıkmak için **OK** tuşuna kısa bas; devam sembolü gelince mod kapanıyor.

## Saat ayarı neden önemli

Uğur'un dijital zamanlayıcısı otomatik pişirmede süreyi geri sayıyor, "pişirme bitiş saatini ileri bir saate ayarlama" programında ise **bitiş saatinden günün saatini çıkararak** kalan süreyi hesaplıyor. Günün saati yanlışsa gecikmeli pişirme de yanlış saatte başlar (çıkarım). Kılavuz ayrıca saat ayarlıyken bile fonksiyon ve sıcaklık düğmesinin ikisinin de bir değere getirilmesini istiyor; yalnız fonksiyon düğmesi açıkken fırın ısıtmaya başlamıyor.

## Ne zaman servis

- Saat ayarlandığı hâlde tuşlar tepki vermiyorsa
- Ekran hiç yanmıyorsa, sigorta ve fiş de yerindeyse
- Elektrik kesintisi olmadan saat sık sık sıfırlanıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Saat, menü ve durdurma modu sende; elektronik kart, ekran ve fırının elektrik bağlantısı Uğur yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Fırının modeli ve zamanlayıcının tipi (mekanik / dijital) ne?
2. Saat ayarını OK ile onayladın mı?
3. Ekranda durdurma sembolü var mı?
4. Son günlerde elektrik kesintisi oldu mu?

Fırın saat ayarlıyken de ısınmıyorsa [Uğur fırın ısınmıyor](/blog/ugur-firin-isinmiyor/) sayfasındaki sırayla devam et. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
