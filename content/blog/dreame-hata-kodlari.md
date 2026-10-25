---
title: "Dreame hata kodları: dikey süpürge uyarıları ve E0–E4"
description: "Dreame hata kodları: R20 dikey süpürgede sıcaklık, fırça, hava kanalı ve filtre uyarıları, E0–E4 kodları, batarya ışıkları ve robotun turuncu ışığı."
slug: "dreame-hata-kodlari"
date: "2026-10-25"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z2). origin/main (829cec5) content/blog/ altında "dreame" slug/başlık yok; Dreame hata kodları hub sayfası yok. Bu yazı Dreame'in hub sayfası; aynı pakette tekil Dreame kod sayfası açılmadı.
# Arama kanıtı (#164, bu koşu 25 Eki 08:47, hl=tr gl=tr): "dreame hata" → 1. "dreame hata kodları", 3. "dreame filtre hatası"; "dreame hata kodları" → 1., 2. "dreame r20 hata kodları", 3. "dreame dikey süpürge hata kodları". GSC: "dreame" satırı yok.
# Belge (#88). Zincir: global.dreametech.com/pages/user-manuals-and-faqs (curl 429; yerleşik tarayıcıda açıldı) → /pages/r20-user-manual (tarayıcıda yüklendi) → cdn.shopify.com …/V2312_R20_EN_DE_FR_IT_ES_RU_PL_NL_AR_HE_KK_UA_UZ.pdf (curl 200 application/pdf, 161 s.) md5 6755c6ac4ebbbedafa8cf67a738c0f78 — ekran PDF s.17, batarya s.18, bakım s.19-21, SSS s.23, sorun giderme s.24 (simgeler s.24 sayfa görüntüsünden). Robot ışıkları: D10 Plus Gen 2 kılavuzu md5 ca9dda12f51653a939ae9e0de7ecd4d2, s.8-9.
# Dil: kılavuzun İngilizce baskısı; alıntılar çevrildi.
# Robot süpürgelerin uygulamadaki hata mesajları ("dahili hata", "tampon hatası" vb.) kılavuzlarda listelenmiyor; yazılmadı, yalnız bu sınır belirtildi.
# BİLEREK YAZILMAYANLAR: E0–E4'ün tek tek anlamı (kılavuzda yok) · batarya sökümü dışında söküm (#31) · fiyat (#46).
# Alıntı denetimi: dreame-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Süpürgenin kullanım kılavuzu", "Kuru bez", "Makas"]
steps:
  - "Ekrandaki simgeyi ve renginin sabit mi yanıp sönen mi olduğunu not al."
  - "Kırmızı yanıp sönen sıcaklık uyarısında süpürgeyi kapat ve motorun soğumasını bekle."
  - "Turuncu fırça uyarısında fırça rulosunu çıkar ve dolanan saçları makasla kes."
  - "Turuncu hava kanalı uyarısında toz haznesini, karbon çubuğu ve başlığı tıkanıklığa karşı kontrol et."
  - "Filtre uyarısında filtrenin takılı olduğunu kontrol et; süresi dolduysa değiştirip tetik kilidiyle sıfırla."
  - "Kırmızı sabit hata ya da E0–E4 kodlarından biri görünüyorsa satış sonrası servise başvur."
faq:
  - q: "Dreame dikey süpürgede filtre hatası nasıl sıfırlanır?"
    a: "R20 kılavuzuna göre ekranda filtre simgesi turuncu yanıp sönüyorsa filtrenin süresi doluyor; filtreyi zamanında değiştir. Değiştirdikten sonra tetik kilidine üç saniye basılı tutarak filtre uyarısını sıfırla. Filtre simgesi sabit turuncuysa filtre ya da ön filtre takılı değil; ikisinin de doğru takıldığından emin ol."
  - q: "Dreame ekranında E0, E1, E2, E3 ya da E4 yazıyor, ne yapmalıyım?"
    a: "R20 kılavuzu E0 ile E4 arasındaki kodlardan biri ekranda görünürse onarım için satış sonrası servis ekibiyle iletişime geçmeni istiyor. Kılavuz bu kodların tek tek anlamını vermiyor; kendin onarmaya çalışma."
  - q: "Dreame robot süpürgenin ışığı turuncu yanıp sönüyor, ne demek?"
    a: "D10 Plus Gen 2 ve L10s Ultra kılavuzlarında robotun durum ışığının turuncu yanıp sönmesi hata anlamına geliyor; istasyondaki ışığın turuncu yanıp sönmesi ise istasyonda bir hata olduğunu gösteriyor. Kılavuzlarda robot hata mesajlarının listesi yok; ayrıntı için Dreamehome uygulamasına bakabilirsin."
  - q: "Süpürge açılınca ilk ışık kırmızı yanıyor, neden?"
    a: "R20 kılavuzunun SSS tablosuna göre süpürge açıldığında ilk gösterge kırmızı yanıyorsa batarya hasarlı olabilir; bakım için satış sonrası servise başvur. Şarj sırasında ilk gösterge kırmızı yanıp sönüyorsa şarj aleti uyumsuz; yalnız orijinal şarj aletini kullan."
images:
  coverAlt: "Duvara yaslanmış, gövdesinde küçük ekran bulunan kablosuz dikey bir süpürge"
  steps:
    - "Dikey süpürgenin gövdesindeki küçük renkli ekranın yakın planı"
    - "Zemine bırakılmış, kapalı bir dikey süpürge"
    - "Başlıktan çıkarılmış, kılları kesilen bir fırça rulosu"
    - "Gövdeden ayrılmış toz haznesi ve uzatma çubuğu"
    - "Süpürge gövdesinden çıkarılmış silindir biçimli filtre"
    - "Servis için kutusuna konmuş bir dikey süpürge"
---

Dreame süpürgenin ekranında bir simge yanıp sönüyor, bir E kodu çıktı ya da robotun ışığı turuncuya döndü. Dreame dikey süpürgelerde uyarılar ekranda **simge ve renkle** veriliyor; robotlarda ise durum ışığı yanıyor, ayrıntı uygulamada görünüyor. Bu yazı Dreame'in global sitesindeki kullanım kılavuzları sayfasından bağlanan **Dreame R20** dikey süpürge kılavuzuna ve robot ışıkları için **Dreame D10 Plus Gen 2** kılavuzuna dayanıyor. Türkçe kılavuz bulunmadığı için **kılavuzların İngilizce baskısını** kullandık, alıntıları Türkçeye çevirdik. Başka bir Dreame modelin varsa simgeler ve renkler farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kırmızı yanıp sönen = motor ısındı, bekle. Turuncu yanıp sönen = fırçaya bir şey dolandı, hava kanalı tıkandı ya da filtrenin süresi doluyor. Turuncu sabit = filtre takılı değil. Kırmızı sabit ya da E0–E4 = servis.

## R20 ekran uyarıları tablosu

| Simge | Durum | Uyarı | Kılavuzun çözümü |
|---|---|---|---|
| Termometre | Kırmızı yanıp sönüyor | Yüksek sıcaklık | Motor sıcaklığı normale dönünce kullanmaya devam et |
| Fırça rulosu | Turuncu yanıp sönüyor | Fırça rulosu sıkıştı | Bakım bölümündeki gibi ruloya dolanan lif ve saçları temizle |
| Hava kanalı | Turuncu yanıp sönüyor | Hava kanalı tıkalı | Toz haznesini, karbon çubuğu ve başlığı tıkanıklığa karşı kontrol et |
| Filtre | Turuncu yanıp sönüyor | Filtrenin süresi doluyor | Filtreyi değiştir; sonra tetik kilidine 3 sn basarak sıfırla |
| Filtre | Turuncu sabit | Filtre takılı değil | Filtre ve ön filtrenin doğru takıldığından emin ol |
| Uyarı üçgeni | Kırmızı sabit | Hata | Satış sonrası servise başvur |
| E0–E4 | Ekranda kod | — | Onarım için satış sonrası servise başvur |

## Adım adım: uyarıyı gidermek

**1. Simgeyi ve rengi oku.** Kılavuz, süpürge düzgün çalışmadığında ekranın bir hata mesajı gösterdiğini söylüyor. Simgenin ne olduğunu ve ışığın sabit mi yanıp sönen mi olduğunu not al; çözüm buna göre değişiyor.

**2. Sıcaklık uyarısında bekle.** Termometre simgesi kırmızı yanıp sönüyorsa süpürgeyi kapat ve motorun soğumasını bekle. Kılavuza göre batarya aşırı ısınırsa süpürge kendiliğinden kapanıyor; sıcaklık normale dönünce yeniden çalışıyor. Tıkanıklık aşırı ısınma korumasını tetikleyebiliyor; emiş ağzını ve hava kanalını da temizle.

**3. Fırça uyarısında ruloyu temizle.** Kilidi saat yönünün tersine sonuna kadar çevir ve fırça rulosunu başlıktan çıkar. Takılan saç ve lifleri makasla kes; yuvadaki ve şeffaf kapaktaki tozu kuru bezle sil. Kılavuza göre dönen bir parça sıkışırsa süpürge kendiliğinden kapanabiliyor.

**4. Hava kanalı uyarısında tıkanıklığı bul.** Toz haznesini, karbon fiber çubuğu ve akıllı başlığı tek tek kontrol et. Kılavuz, filtre ya da emiş ağzı tıkanırsa süpürgenin açıldıktan kısa süre sonra durduğunu ve filtreyle emiş ağzını temizleyince normale döndüğünü söylüyor.

**5. Filtre uyarısını sıfırla.** Filtre simgesi sabit turuncuysa filtre ya da ön filtre takılı değil; ikisini de doğru tak. Yanıp sönen turuncuysa filtrenin süresi doluyor: filtreyi değiştir, ardından **tetik kilidini üç saniye basılı tutarak** uyarıyı sıfırla. Filtre temizliği için [Dreame dikey süpürge temizliği](/blog/dreame-dikey-supurge-temizligi/) yazısına bak.

**6. Kırmızı sabit ya da E kodu: servis.** Uyarı üçgeni kırmızı sabit yanıyorsa ya da ekranda E0 ile E4 arasında bir kod görünüyorsa kılavuz satış sonrası servise başvurmanı istiyor. Kodların tek tek anlamı kılavuzda yazmıyor.

## Batarya ışıkları ve diğer belirtiler

R20 kılavuzunun SSS tablosuna göre:

- **Süpürge açılınca ilk gösterge kırmızı:** batarya hasarlı olabilir; servis.
- **Şarjda ilk gösterge kırmızı yanıp sönüyor:** şarj aleti uyumsuz; yalnız orijinal şarj aletini kullan.
- **Şarjda batarya ışığı yanmıyor:** şarj aleti iyi takılmamış olabilir ya da batarya dolmuş ve uyku moduna geçmiş. Kılavuza göre tam şarjdan beş dakika sonra gösterge sönüyor.
- **Yavaş şarj:** batarya sıcaklığı çok düşük ya da çok yüksek; normale dönmesini bekle.
- **Emiş zayıf:** toz haznesi dolu ya da filtre tıkalı olabilir; hazneyi boşalt, filtreyi temizle.

Emiş tamamen kaybolduysa genel nedenler [süpürge çekmiyor](/blog/supurge-cekmiyor/) yazısında.

## Robot süpürgede turuncu ışık

D10 Plus Gen 2 ve L10s Ultra kılavuzlarında robotun durum ışığı **turuncu yanıp sönüyorsa hata** var. D10 Plus Gen 2'de istasyondaki ışığın turuncu yanıp sönmesi istasyonda bir hata olduğunu gösteriyor. Kılavuzlarda robotun hata mesajlarının listesi yok; hatanın ayrıntısı için Dreamehome uygulamasına bak (çıkarım: robot uygulamadan yönetiliyor). Robot donduysa önce [Dreame robot süpürge resetleme](/blog/dreame-robot-supurge-resetleme/) yazısındaki sırayı dene.

## Ne zaman servis

- Kırmızı sabit hata simgesi ya da E0–E4 kodu görünüyorsa
- Açılışta ilk batarya göstergesi kırmızı yanıyorsa
- Başlığın ışıkları çalışmıyorsa (kılavuz bunu ışık arızası olarak servise yönlendiriyor)

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, fırça ve tıkanıklık temizliği sende. Motor, elektronik ve batarya içi Dreame yetkili servisinin işi; kılavuz garantinin geçerli kalması için her zaman orijinal parça kullanmanı istiyor.

## Servisi aramadan önce kısa özet

1. Model adı ne (R20, başka)?
2. Hangi simge, hangi renkte, sabit mi yanıp sönüyor mu?
3. Hazne, filtre ve fırça temizlendi mi?
4. Orijinal şarj aleti mi kullanılıyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
