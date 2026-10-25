---
title: "Vestfrost çamaşır makinesi E01 hatası: kapak kapanmıyor"
description: "Vestfrost çamaşır makinesi E01 hatası kapağın tam kapanmadığını gösteriyor. Kılavuza göre klik sesine kadar kapatma, yeniden başlatma ve servis sınırı."
slug: "vestfrost-camasir-makinesi-e01-hatasi"
date: "2026-10-25"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z2). origin/main (829cec5) content/blog/ altında vestfrost yalnız vestfrost-buzdolabi-ayari ve vestfrost-buzdolabi-sogutmuyor; çamaşır makinesi yazısı yok. Vestfrost hata kodları hub sayfası yok. vestel-camasir-makinesi-e01-hatasi başka marka sorgusu.
# Arama kanıtı (#164, bu koşu 25 Eki 08:47, hl=tr gl=tr): "vestfrost çamaşır makinesi e" → 2. "vestfrost çamaşır makinesi e01 hatası"; "vestfrost çamaşır makinesi e01" → 1. GSC www-6 (7 gün, 19 Eki): "vestfrost çamaşır makinesi e01 hatası" 2 gösterim, 0 tık, sıra 7.
# Belge (#88). Zincir: vestfrost.dk/vwm-22148-bm-34037 (200, sayfa verisinde UserManualFile perfion/7c4ee9aa-…pdf, "Brugervejledning") → api.eico.dk/files/<base64>/eA== (200, PDF, 32 s.), md5 4f02731796a576b231fcf5d47e0f4152. Karşılaştırma: VWM 11148 BM (md5 1bc17366b3c56fb1739ddca0b9e3887b) aynı E01 satırı.
# Dil: Türkçe ve İngilizce baskı yok, yalnız Danca. PAZ kararı (Ariston/Baxi İtalyanca emsali): Danca baskı kullanıldı, alıntılar çevrildi, orijinal KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: kapak kilidi (kilit mekanizması) sökümü, kart, kablo (#31) · fiyat (#46) · E02–E04 için ayrı sayfa (bu yazıda yalnız kısa tablo).
# Alıntı denetimi: vestfrost-camasir-makinesi-e01-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekrandaki kodu ya da yanıp sönen ışık düzenini not al; çocuk kilidi uyarısıyla karıştırma."
  - "Kapak contasının çevresini kontrol et; kapağın arasına sıkışmış çamaşır kalmasın."
  - "Kapağı klik sesini duyana kadar tamamen kapat."
  - "Başlat/Duraklat tuşuna basarak programı yeniden başlat."
  - "Hata sürerse program seçiciyi STOP konumuna getir, makineyi kapat ve fişini prizden çek."
  - "Musluğu kapat ve en yakın yetkili servisle iletişime geç."
faq:
  - q: "Vestfrost çamaşır makinesinde E01 ne demek?"
    a: "Vestfrost'un çamaşır makinesi kılavuzunda E01 için tek bir olası arıza yazıyor: makinenin kapağı tam kapanmamış. Çözüm olarak kapağı klik sesini duyana kadar kapatman isteniyor."
  - q: "Kapağı kapattım ama E01 gitmiyor, ne yapmalıyım?"
    a: "Kılavuza göre makine hata vermeyi sürdürürse makineyi kapat, fişini prizden çek ve hemen en yakın yetkili servisle iletişime geç. Kapak kilidi ya da kilit bağlantısı servis işidir; kendin açmaya çalışma."
  - q: "Ekranda CL yazıyor, bu da kapak hatası mı?"
    a: "Hayır. Kılavuzda CL çocuk kilidinin göstergesi. Çocuk kilidi açıkken bir tuşa basarsan ya da program seçiciyi çevirirsen CL iki saniye yanıp sönüyor. Kapatmak için ilgili iki tuşa en az üç saniye birlikte basılıyor."
  - q: "Bu bilgiler Türkiye'de satılan Vestfrost makineler için de geçerli mi?"
    a: "Yazı Vestfrost'un Danimarka sitesindeki VWM 22148 BM kılavuzuna dayanıyor. Türkiye'de satılmış modellerde panel ve kod tablosu farklı olabilir; kendi kılavuzunla karşılaştır."
images:
  coverAlt: "Kapağı aralık duran beyaz bir önden yüklemeli çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda su giriş musluğu"
---

Vestfrost çamaşır makinen programın başında durdu, ekranda **E01** var ya da ışıklar tuhaf bir düzende yanıp sönüyor. Vestfrost kılavuzunda bu kodun tek bir anlamı var: **makinenin kapağı tam kapanmamış**. Bu yazıda Vestfrost'un Danimarka'daki resmî sitesinden bağlanan **VWM 22148 BM** kullanım kılavuzunu kullandık. Vestfrost'un Türkiye sitesi açılmıyor ve Türkçe ya da İngilizce kılavuz bulunmuyor; bu yüzden **kılavuzun Danca baskısını** kullandık, alıntıları Türkçeye çevirdik. **Türkiye'de satılmış Vestfrost modellerinde panel, tuş yerleşimi ve kod tablosu farklı olabilir**; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01 = kapak tam kapanmamış. Kapağı klik sesini duyana kadar kapat, programı yeniden başlat. Hata sürüyorsa makineyi kapat, fişini çek ve yetkili servisi ara.

## E01 ne anlatıyor?

Kılavuzun "otomatik hata uyarıları" bölümüne göre makinenin içinde bir hata algılama sistemi var ve hatalar yanıp sönen ışıkların bir birleşimiyle gösteriliyor. Ekranlı modellerde kod doğrudan görünüyor. Tablodaki ilk satır E01:

| Kod | Olası arıza (kılavuz) | Ne yapmalı (kılavuz) |
|---|---|---|
| E01 | Makinenin kapağı tam kapanmamış. | Kapağı klik sesini duyana kadar tamamen kapat. Hata sürerse makineyi kapat, fişini çek, hemen en yakın yetkili servise başvur. |
| E02 | Su basıncı ya da makinedeki su seviyesi düşük olabilir. | Musluğun tam açık olduğuna bak; sürerse fişi çek, musluğu kapat, servise başvur. |
| E03 | Pompa arızalı, pompa filtresi tıkalı ya da pompanın elektrik bağlantısında hata var. | Pompa filtresini temizle; sürerse servise başvur. |
| E04 | Makinede çok fazla su var. | Makine suyu kendisi boşaltır; sonra kapat, fişi çek, musluğu kapat, servise başvur. |

Aynı tablo Vestfrost'un VWM 11148 BM kılavuzunda da birebir aynı. Kılavuz bunların "en yaygın hata kodları" olduğunu söylüyor; tabloda olmayan bir kod görürsen kendi modelinin kılavuzuna bak ya da servise sor. E01'de kılavuzun ilk istediği şey her zaman aynı: kapağı düzgün kapatmak.

## Adım adım: E01'i gidermek

**1. Kodu doğru oku.** Ekranda E01 mi, yoksa **CL** mi yazıyor? Kılavuza göre CL çocuk kilidinin işareti: kilit açıkken bir tuşa basarsan ya da program seçiciyi çevirirsen CL iki saniye yanıp sönüyor. Bu bir kapak hatası değil. Çocuk kilidini kapatmak için VWM 22148 BM kılavuzu 2. ve 3. tuşlara CL kaybolana kadar en az üç saniye birlikte basmanı istiyor; başka modellerde tuş numaraları farklı.

**2. Kapağın arasına bak.** Kapak contasıyla cam kapak arasına sıkışmış bir çorap, kemer ucu ya da havlu köşesi kapağın tam oturmasını engelleyebilir (çıkarım: kılavuz yalnız "kapak tam kapanmamış" diyor, nedenini saymıyor). Çamaşırı tamburun içine it, contanın üstünde bir şey kalmadığından emin ol.

**3. Klik sesine kadar kapat.** Kılavuzun çözüm cümlesi açık: kapağı **klik sesini duyana kadar** tamamen kapat. Kapağı yavaşça yaslamak yetmeyebilir; kilidin oturduğunu sesten anla.

**4. Programı yeniden başlat.** Başlat/Duraklat tuşuna bas. Kılavuz, makine çalışmadığında da aynı listeyi veriyor: fişin takılı olması, sigortanın sağlam olması, Başlat/Duraklat'a basılmış olması, program seçicinin "Stop" konumunda olmaması ve kapağın tam kapalı olması gerekiyor.

**5. Sürüyorsa makineyi kapat.** Kapak klik sesiyle kapandığı hâlde E01 geri geliyorsa programı iptal et: program seçiciyi **STOP** konumuna getir. Ardından makineyi kapat ve fişini prizden çek. Kılavuz hata sürdüğünde bunu açıkça istiyor.

**6. Musluğu kapat, servisi ara.** Kılavuzun arıza giderme bölümüne göre onarım gerekiyorsa ya da sorunu tablodaki bilgilerle çözemiyorsan fişi çekip musluğu kapatman ve yetkili servisle iletişime geçmen gerekiyor. Vestfrost kılavuzu onarımların yalnız yetkili servis tarafından yapılmasını istiyor.

## E01'le karıştırılan durumlar

- **Program bitti, kapak açılmıyor.** Kılavuza göre program bitince makine kendiliğinden duruyor ve kapağı açıp çamaşırı alabiliyorsun. Program bittiği hâlde kapak açılmıyorsa bu E01 değil; genel nedenler için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bak.
- **Makine su almıyor.** Kılavuzun "su almıyor" satırında musluğun kapalı olması, giriş hortumunun bükülmesi, filtrenin tıkanması yanında yine "kapak tam kapanmamış" var. Önce kapağı kontrol et, sonra hortuma bak.
- **E03.** Pompa filtresi tıkanmışsa çıkıyor; temizlik için [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısı yol gösterir. Vestfrost kılavuzu pompadaki suyun sıcak olabileceğini, temizlikten önce soğumasını beklemeni hatırlatıyor.

Makineyi baştan başlatmak istiyorsan sıra [Vestfrost çamaşır makinesi resetleme](/blog/vestfrost-camasir-makinesi-resetleme/) yazısında.

## Ne zaman servis

- Kapak klik sesiyle kapandığı hâlde E01 sürüyorsa
- Kapak hiç kilitlenmiyor ya da kapak kolu boşta dönüyorsa
- E01 her yıkamada ve farklı programlarda tekrar ediyorsa
- Kapakta ya da contada görünür bir hasar varsa

⛔ **Kendin-çöz sınırı burada biter.** Kapağı kontrol etmek, kapatmak, programı yeniden başlatmak ve fişi çekmek sende. Kapak kilidi, kilit kablosu ve elektronik kart yetkili servisin işi; makinenin gövdesini açma.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne (etiketi kapağın çevresinde ya da arkada)?
2. Ekranda E01 mi var, yoksa ışıklar mı yanıp sönüyor?
3. Kapak klik sesiyle kapanıyor mu?
4. Hata hangi programda ve programın hangi anında çıkıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
