---
title: "Samsung bulaşık makinesi AC hatası ne demek?"
description: "Samsung bulaşık makinesinde AC kodu, kılavuza göre ana kart ile alt kart arasındaki iletişim sorunu. Evde denenecek güvenli adımlar ve servis sınırı."
slug: "samsung-bulasik-makinesi-ac-hatasi"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork A). Konu seçimi: origin/main'de samsung-bulasik-makinesi-ac-hatasi yok
#   (Samsung bulaşıkta 4C, 5C, LC, HC, BC2 tek kod sayfaları ve hata-kodlari merkezi var; AC yalnız 5C yazısında bir kez geçiyor).
# GSC (~/Downloads/https___www-5/Sorgular.csv, son 3 ay): "samsung bulaşık makinesi ac hatası" 20 gösterim, 0 tık, poz 4,25.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung bulaşık makinesi ac":
#   1. "…ac hatası" · 2. "…açılıp kapanıyor" · 3. "…açılmıyor".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adı org.downloadcenter.samsung.com'dan indirildi: HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-samsung-bulasik-sprint/2026-09-30/) aynı. #88: üçüncü taraf kullanılmadı. pdftotext -layout, sayfa = PDF sayfası.
#  (A) DW8500AM / DW60A8050FS kılavuzu (EN+TR, 172 s.)  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60A8050FS&CttFileID=9233776&CDCttType=UM&VPath=UM%2F202306%2F20230628135053892%2FDW8500AM_DW60A8050FS_TR_DD81-03206J-04_EN_TR.pdf  md5 0bac38bffb63954fc975765ab1c13167
#  (M) DW5500MM kılavuzu (KA+TR+EN, 200 s.)  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf  md5 2ad54a56734b93dbaeefbcd4fdc3b385
# AC satırı A s.156, M s.120 · uzatma/çoklu fiş yasağı A s.94 · başlamıyor/göstergeler yanmıyor tablosu A s.153, s.155 · güç kaynağı + başka program M s.119
#   · yetkili servis dışı müdahale garantiyi bozar A s.153.
# BİLEREK YAZILMAYANLAR: kart (PCB) ya da kablo demeti kontrolü (servis) · "reset kombinasyonu" (belgede yok) · AC'nin en sık nedeni iddiası · fiyat/süre (#46).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-ac-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesinin kullanma kılavuzu"]
steps:
  - "Ekrandaki kodu tam oku; AC, kılavuzda PCB iletişim kontrolü satırıdır ve 4C ile karıştırılmamalı."
  - "Bulaşık makinesini kapat, kısa bir süre bekle ve yeniden açarak kodun sürüp sürmediğine bak."
  - "Fişin doğrudan duvar prizine takılı olduğunu, araya çoklu fiş ya da uzatma kablosu girmediğini kontrol et."
  - "Kapağın tam kapalı, kontrol kilidinin kapalı ve su vanasının açık olduğundan emin olup başka bir program dene."
  - "AC tekrar ediyorsa modeli ve kodu not al, kapağın içini sökmeden Samsung yetkili servisine haber ver."
faq:
  - q: "Samsung bulaşık makinesinde AC ne demek?"
    a: "Samsung'un DW8500AM ve DW5500MM kılavuzlarındaki bilgi kodları tablosunda AC, PCB iletişim kontrolü olarak geçiyor: ana PCB ile alt PCB arasında anormal iletişim. Yani makinenin iki elektronik kartı birbiriyle düzgün haberleşemiyor. Kılavuzun bu satırdaki tek talimatı, sorun devam ederse yetkili bir Samsung servis merkezine başvurmak."
  - q: "AC hatası kendiliğinden geçer mi?"
    a: "Kılavuz bunu söylemiyor. Tabloda yalnız 'sorun devam ederse' servis çağrılması isteniyor. Kodun sürüp sürmediğini anlamanın yolu makineyi kapatıp yeniden açmak ve bir program başlatmak. Kod geri gelmiyorsa makineyi izlemeye devam et; geri geliyorsa servis."
  - q: "Bulaşık makinesini uzatma kablosuyla kullanabilir miyim?"
    a: "Hayır. DW8500AM kılavuzu cihazın ana elektrik şebekesine çoklu fiş birimi ya da uzatma kablosu ile bağlanmamasını istiyor; bunların cihazın gerekli güvenliğini garanti etmediğini, örneğin aşırı ısınma tehlikesi yarattığını yazıyor."
  - q: "AC kodunda kartı kendim kontrol edebilir miyim?"
    a: "Hayır. Kartlar ve aradaki bağlantılar makinenin içinde; bu iş yetkili servisin. Samsung kılavuzu, yetkili servis dışında bir kişinin müdahalesiyle oluşan arızaların garanti kapsamından çıkacağını da açıkça yazıyor."
  - q: "Samsung çamaşır makinesindeki AC ile aynı şey mi?"
    a: "Adı benzer ama cihaz farklı. Bu yazı bulaşık makinesinin AC kodunu anlatıyor. Çamaşır makinesi kodları için Samsung çamaşır makinesi hata kodları sayfasına bak."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı ankastre bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda kapak"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Bulaşık makinesi çalışmaya başlamadan ya da program ortasında durdu, ekranda **AC** yazıyor. Samsung'un DW8500AM ve DW5500MM kullanma kılavuzlarında bu kodun karşılığı kısa: **PCB iletişim kontrolü**. Yani makinenin iki elektronik kartı arasında bir haberleşme sorunu var. Bu yazıda kodun anlamını, evde güvenle deneyebileceğin adımları ve servise ne zaman haber vermen gerektiğini kılavuzlardan topladık. Senin modelinde tablo biraz farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** AC, ana kart ile alt kart arasında anormal iletişim demek. Makineyi kapatıp yeniden aç, fişin doğrudan duvar prizinde olduğuna bak, başka bir program dene. Kod geri geliyorsa kartlara dokunma; modeli ve kodu not alıp Samsung yetkili servisine haber ver.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **AC** | PCB iletişim kontrolü: ana PCB ile alt PCB arasında anormal iletişim | 🛠️ Kapat-aç, priz, program; sürerse servis |
| **4C** | Su besleme kontrolü | 🛠️ Vana, hortum; ayrı yazıda |
| **5C** | Filtre ve drenaj borusu | 🛠️ Filtre, hortum; ayrı yazıda |
| **LC** | Sızıntı kontrolü | ⛔ Vanayı ve sigortayı kapat, servis |
| **HC** | Yüksek sıcaklık ısıtma kontrolü | 🛠️ Boş program; sürerse servis |

Tablonun altında iki kılavuzda da aynı not var: herhangi bir bilgi kodu ekranda görünmeye devam ederse yerel bir Samsung servis merkezine başvurun.

## Adım adım: evde denenecekler

**1. Kodu doğru oku.** Ekrandaki iki harf **AC** ise bu yazı senin için. Samsung bulaşık makinelerinde su almayla ilgili kod **4C**, tahliyeyle ilgili kod **5C**; bunlar evde çok daha fazla şey yapabileceğin kodlar ve ayrı yazılarda anlatılıyor: [Samsung bulaşık makinesi 4C hatası](/blog/samsung-bulasik-makinesi-4c-hatasi/) ve [5C hatası](/blog/samsung-bulasik-makinesi-5c-hatasi/). AC ise doğrudan elektronik tarafı ilgilendiriyor; kılavuz bu satırda kullanıcıya bir temizlik ya da ayar adımı vermiyor.

**2. Makineyi kapat ve yeniden aç.** Kılavuz servis çağrısını "sorun devam ederse" koşuluna bağlıyor. Devam edip etmediğini görmenin yolu, makineyi kapatıp kısa bir süre sonra yeniden açmak ve bir program başlatmak. Kapağı zorlamadan aç, içerideki bulaşıklara dokunmadan önce makinenin durmasını bekle. Kod bir daha görünmüyorsa makine normal çalışmaya dönmüş olabilir; yine de birkaç yıkama boyunca ekranı takip et.

**3. Fişe ve prize bak.** Bu adım AC satırında yazmıyor, ama kılavuzun güvenlik bölümünde çok açık bir kural var: cihazı ana elektrik şebekesine **çoklu fiş birimi veya uzatma kablosu ile bağlamayın**; bunlar cihazın gerekli güvenliğini garanti etmez, örneğin aşırı ısınma tehlikesi yaratır. Makinen bir uzatma kablosuna ya da çoklu prize takılıysa bunu düzelt; fişin doğrudan duvar prizine tam oturduğundan emin ol. Kılavuzun sorun giderme tablosu da "göstergeler yanmıyor" ve "başlamıyor" durumlarında ilk iş olarak güç kablosunun bağlı olup olmadığına ve güç kaynağının mevcut olup olmadığına bakmanı istiyor. Prizin içini, kabloyu ya da sigorta kutusunun içini açmak senin işin değil.

**4. Başka bir program dene.** DW5500MM kılavuzunun sorun giderme bölümünde şu not var: yıkama performansı sorunu bir **güç kaynağı sorunundan** kaynaklanabilir; servisi aramadan önce başka bir program deneyin. Bunu yaparken makinenin başlaması için gereken temel koşulları da kontrol et. Kılavuzun "başlamıyor" satırına göre kapak tam kapalı ve kilitli olmalı, üst sepet püskürtücüyle düzgün birleşmiş ve doğru yerleştirilmiş olmalı, su besleme vanası açık olmalı, kontrol paneli kilitliyse kontrol kilidi devre dışı bırakılmalı. Bunlar AC'yi açıklamaz, ama servis gelmeden önce başka bir sebebin araya girmediğini gösterir.

**5. Kod geri geliyorsa servis.** AC tekrar ediyorsa evdeki iş bitmiştir. Ana kart, alt kart ve aradaki bağlantılar makinenin içinde; bunlar yetkili servis işi. Samsung kılavuzu, ürüne yetkili servis dışında bir kişinin müdahale etmesiyle oluşan arızaların garanti kapsamından çıkacağını da yazıyor. Servisi aramadan önce modeli ve ekrandaki kodu not al.

## AC neden "ev işi" bir kod değil

Samsung'un bilgi kodları tablosundaki satırların çoğu sana bir şey yaptırır: 4C'de vanayı ve hortumu, 5C'de filtreyi ve drenaj borusunu kontrol edersin. AC satırında böyle bir adım yok; yalnız anlamı ve "sorun devam ederse servis" talimatı var. Bu yüzden evdeki rolün sınırlı ve net: makineyi yeniden başlatmak, elektrik bağlantısının kılavuza uygun olduğundan emin olmak ve kodun tekrar edip etmediğini görmek.

## Ne zaman servis

- Makineyi kapatıp açtıktan sonra AC yeniden çıkıyorsa
- Fiş doğrudan duvar prizinde olduğu, başka bir program denendiği hâlde kod sürüyorsa
- Ekranda AC ile birlikte başka kodlar da dönüşümlü görünüyorsa
- Göstergeler hiç yanmıyor ve güç kablosu bağlı olduğu hâlde makine tepki vermiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kontrol paneli, fiş, program seçimi ve kapak sende; kartlar, kablo bağlantıları ve makinenin iç aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne (kapağın kenarındaki etikette yazar)?
2. AC hangi anda çıktı: program başında mı, ortasında mı?
3. Kapatıp açınca kod geri geldi mi?
4. Fiş doğrudan duvar prizine mi takılı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Samsung'un bütün bulaşık makinesi kodları [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) sayfasında, makine hiç çalışmıyorsa [Samsung bulaşık makinesi çalışmıyor](/blog/samsung-bulasik-makinesi-calismiyor/) yazısında. Bil, gör, çağır.
