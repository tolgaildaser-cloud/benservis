---
title: "Fırın sigorta attırıyor: kılavuzlara göre güvenli kontroller"
description: "Fırın sigorta attırıyorsa zorlama. Bosch, Arçelik ve Samsung kılavuzlarına göre sigorta kutusu, fiş, ortak hat kontrolü ve servise bırakılacak sınır."
slug: "firin-sigorta-atiriyor"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P19 #119). origin/main'de fırın + sigorta yazısı yok. Yakın: firin-isinmiyor, bosch-firin-isinmiyor, arcelik-firin-isinmiyor,
#   firin-ne-kadar-elektrik-harcar, camasir-makinesi-sigorta-attiriyor (başka cihaz).
# Arama kanıtı: BOSLUK.md #119 (OT "fırın neden" #1; "fırın sigorta attırıyor" tam liste). Rakip başlık metni kaynak değil, yalnız kanıt.
# Belgeler (yerel kopyalar blog-taslaklar/kaynak-firin-sprint/, 1 Eki 2026 indirildi, HTTP 200; bu koşuda yeni indirme yok; pdftotext, sayfa = PDF sayfası):
#  (B) Bosch HBF512B.1T ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001944574_A.pdf  md5 3fac75fc8fb8bbef288fcc478b030ece
#  (A) Arçelik 9658 serisi tek bölmeli 60 cm ankastre fırın kılavuzu  https://download.arcelik.com.tr/download.usagemanuals/9658-syti-tek-bolmeli-60-cm-ankastre-firinlar-kullanim-kilavuzu-tr_TR_201505070836921_User20Manual20-20Filetur-A.pdf  md5 cc4cfd75c500496d1ee5ade673f5bff5
#  (S) Samsung NV7B442/NV7B452 ankastre fırın kılavuzu  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV7B4420ZAK&CttFileID=10050757&CDCttType=UM&VPath=UM%2F202501%2F20250124222105993%2FO_DG68_01413G_03_IB_FULL_NV7B4420ZAK_TR_250113.pdf  md5 776e6d02867f930dbda6362c94ea2db8
# Sayfalar: B s.3 güvenlik · B s.17 arıza tablosu · A s.4 elektrik güvenliği · A s.9 teknik özellik · A s.31 sorun giderme · S s.50 sorun giderme.
# BİLEREK YAZILMAYANLAR: sigorta nedeni teşhisi (kılavuzlarda yok) · sigorta/kablo değişimi ve bağlantısı · rezistans, kart · Kumtel, Beko, Simfer, mini fırın (belge yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Fırını kapat ve fişini çek; sigortayı art arda kaldırıp fırını zorlama."
  - "Hangi sigortanın attığına bak: fırının hattı mı, evin genel sigortası mı?"
  - "Fırının fişinin topraklı prize tam takılı olduğunu ve elektriğin gelip gelmediğini kontrol et."
  - "Aynı hatta ya da prizde başka bir cihazın çalışıp çalışmadığına bak."
  - "Kablo, fiş ve fırın içinde ıslaklık ya da hasar olup olmadığına gözle bak, dokunma."
  - "Kılavuzdaki sigorta değerini kendi modelin için kontrol et; değişikliği elektrikçiye bırak."
  - "Sigorta yine atıyorsa fırını fişten çekili bırak ve yetkili servisi çağır."
faq:
  - q: "Fırın neden sigorta attırır?"
    a: "İncelediğimiz kılavuzlar nedeni söylemiyor. Bosch ve Arçelik yalnızca arıza tablosunda sigortanın atmış olabileceğini yazıp sigorta kutusunun kontrol edilmesini istiyor. Tekrar eden atmanın nedenini bulmak servisin işi."
  - q: "Fırının sigortası kaç amper olmalı?"
    a: "Modele göre değişir. Arçelik 9658 serisi kılavuzunun teknik özellikler tablosunda kullanılacak sigorta için en az 16 A yazıyor ve sigorta akımının ürün akımıyla uyumlu olmasını istiyor. Kendi modelinin değeri için kendi kılavuzuna ve tip etiketine bak."
  - q: "Sigorta attığında fırını tekrar tekrar açabilir miyim?"
    a: "Kılavuzlar bunu bir çözüm olarak vermiyor. Arçelik arızalı ürünün yetkili servis onarmadan çalıştırılmamasını, Bosch ise arıza hâlinde müşteri hizmetlerinin aranmasını istiyor."
  - q: "Mini fırın ya da başka marka için de geçerli mi?"
    a: "Bu yazı yalnızca Bosch HBF512B, Arçelik 9658 serisi ve Samsung NV7B442 kılavuzlarına dayanıyor. Başka markanın kılavuzu farklı bir şey söylüyorsa kendi kılavuzun esastır."
images:
  coverAlt: "Mutfak dolabına gömülü ankastre bir fırın ve yanında kapağı açık bir sigorta kutusu"
  steps:
    - "Fırın fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Sigorta kutusundaki sigortalardan birine işaret eden beyaz eldivenli sade siluet el"
    - "Fırın fişinin prize tam oturduğunu kontrol eden beyaz eldivenli sade siluet el"
    - "Aynı prize bağlı fırın, su ısıtıcısı ve ütü çizimi"
    - "Fırın kablosuna el feneriyle uzaktan bakan beyaz eldivenli sade siluet el"
    - "Fırının arkasındaki tip etiketini okumaya çalışan beyaz eldivenli sade siluet el"
    - "Fırının yanında alet çantasıyla bekleyen servis teknisyeni silueti, yüz yok"
---

Fırını açıyorsun, sigorta atıyor. Bir daha kaldırıyorsun, yine atıyor. "Fırın sigorta attırıyor" diye arayanların çoğu burada sigortayı defalarca kaldırıp indiriyor. Bu bir elektrik güvenliği konusu. Bu yazıda **Bosch** HBF512B, **Arçelik** 9658 serisi ve **Samsung** NV7B442 kullanım kılavuzlarının bu konuda gerçekten ne söylediğini topladık. Kılavuzlar atmanın nedenini anlatmıyor; yalnız ne kontrol edilebileceğini ve nerede servise gidileceğini yazıyor. Kendi fırınının kılavuzu farklı bir şey diyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik:** Fırının içine, kablosuna ya da elektrik bağlantısına müdahale etme. Arçelik kılavuzu ürünün kendiniz onarılmasını açıkça yasaklıyor, Bosch onarımı eğitimli uzman personele bırakıyor.

## Kılavuzlar ne diyor

| Konu | Bosch HBF512B | Arçelik 9658 serisi |
|---|---|---|
| Arıza tablosunda | Sigorta kutusundaki sigorta atmış olabilir (s.17) | Sigorta bozuk veya atmış olabilir (s.31) |
| Önerilen kontrol | İlgili sigortayı kontrol et | Sigorta kutusunu kontrol et |
| Sigorta değeri | Belirtilmemiş | En az 16 A (s.9) |
| Onarım | Yalnız uzman personel (s.17) | Kendin onarmayı deneme (s.31) |

## Adım adım: sigorta atınca güvenli sıra

**1. Fırını kapat, fişini çek.** Bosch kılavuzu cihaz ya da bağlantı kablosu arızalıysa fişin derhal çekilmesini ya da sigorta kutusundan sigortanın kapatılmasını istiyor. Arçelik de herhangi bir hasarda ürünü kapatıp elektrik bağlantısını kesmeni, bunun için evin sigortasını kapatmanı söylüyor. Kılavuzların hiçbiri sigortayı art arda kaldırıp denemeyi bir yöntem olarak vermiyor.

**2. Hangi sigorta attı?** Bosch'un arıza tablosunda "Cihaz çalışmıyor" satırının nedenlerinden biri sigorta kutusundaki sigortanın atması ve istenen şey ilgili sigortanın kontrol edilmesi. Atanın fırının hattı mı yoksa evin genel sigortası mı olduğunu not et; servise söyleyeceğin ilk bilgi bu.

**3. Fiş ve elektrik gelişi.** Bosch tablosu ilk satırda fişin takılı olmadığını, ardından elektrik beslemesinin kesilmiş olabileceğini sayıyor ve oda aydınlatmasının ya da odadaki diğer cihazların çalışıp çalışmadığına bakmanı istiyor. Arçelik de ürünün fişinin topraklı prize takılı olup olmadığını kontrol ettiriyor.

**4. Aynı hatta başka cihaz.** Kılavuzlarda fırın için "aynı hatta cihaz çalıştırma" kuralı yok; ama Samsung kılavuzunun sorun giderme tablosunda fırın çalışırken kapanıyorsa bir neden olarak aynı prizde birden fazla fişin kullanılması sayılıyor ve çözüm olarak tek fiş kullanmak öneriliyor. Fırınla aynı prizi paylaşan başka cihaz varsa ayır.

**5. Gözle kontrol, dokunma.** Kabloda, fişte ya da gövdede ıslaklık, hasar ya da koku varsa fırını kullanma. Arçelik'e göre hasarlı elektrik kablosu yalnızca ehliyetli bir elektrikçi tarafından değiştirilir; Bosch da kablonun üretici, müşteri hizmetleri ya da benzer yeterlilikteki kişi tarafından değiştirilmesini istiyor.

**6. Sigorta değeri.** Arçelik 9658 serisi için kılavuz, kullanılacak sigortanın **en az 16 A** olduğunu ve sigorta akımının ürün akımıyla uyumlu olması gerektiğini yazıyor. Bosch bu kılavuzda değer vermiyor. Kendi modelin için tip etiketine ve kılavuza bak. Sigorta seçimi ve bağlantısı elektrikçinin işidir; burada değişiklik adımı vermiyoruz.

**7. Yine atıyorsa servis.** Bu kontrollerden sonra sigorta yeniden atıyorsa fırını fişten çekili bırak. Arçelik arızalı ürünün yetkili servis tarafından onarılmadan çalıştırılmamasını, Bosch müşteri hizmetlerinin aranmasını istiyor. Nedenini bulmak, ısıtıcı ve iç elektrik dahil, servisin işi.

## Kılavuzlar neden atma nedenini yazmıyor?

Sigorta atması, fırının kendisinden değil elektrik hattından da kaynaklanabilen bir belirti. Bu yüzden üretici kılavuzları tek bir neden vermek yerine arıza tablosunda "çalışmıyor" satırının altında sigortayı olası nedenlerden biri olarak sayıyor ve kontrolü kullanıcıya bırakıyor. Bosch tablosu sırasıyla fişi, sigorta kutusunu ve elektrik beslemesini sıralıyor; Arçelik de fişi, sigortayı ve tuş kilidini. Bunların hiçbiri "sigorta atıyorsa şu parça bozuktur" demiyor. Biz de bu yazıda böyle bir teşhis yazmıyoruz.

## Servise giderken söyleyeceklerin

Servise ya da müşteri hizmetlerine şunları söylemek işi hızlandırır: atan sigortanın fırının mı yoksa evin genel sigortası mı olduğu, sigortanın fırını ilk açtığında mı yoksa belli bir fonksiyonda mı attığı, o sırada aynı hatta başka cihaz çalışıp çalışmadığı ve fırının marka ile modeli. Model bilgisi fırın kapağı açıldığında tip etiketinde bulunur; Arçelik kılavuzu etiketin ön kapak açılınca görüldüğünü yazıyor. Bu bilgileri not alıp fırını fişten çekili bırak.

## Ne zaman servis

- Sigorta **tekrar tekrar** atıyorsa
- Fırının kablosunda, fişinde ya da içinde hasar, ıslaklık ya da koku varsa
- Fırın hiç çalışmıyorsa ve ısınmıyorsa ([fırın ısınmıyor](/blog/firin-isinmiyor/) yazısındaki kontroller sonuç vermediyse)

⛔ **Kendin-çöz sınırı burada biter.** Fişi ve sigorta kutusunu kontrol etmek, aynı hattaki cihazları ayırmak ve gözle bakmak sende; sigorta ya da kablo değişimi, bağlantı ve iç elektrik yetkili kişinin işidir.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
