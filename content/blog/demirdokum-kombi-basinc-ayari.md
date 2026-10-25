---
title: "DemirDöküm kombi basınç ayarı: kaç bar olmalı?"
description: "DemirDöküm kombi basınç ayarı: basıncı ekrandan oku, modelinin bar aralığıyla karşılaştır, düşükse kılavuzdaki adımlarla doldur; yüksekse servis."
slug: "demirdokum-kombi-basinc-ayari"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan B). origin/main'de demirdokum-kombi-basinc-* / -bar-* yok; başlık grep'i boş.
#   Yakın sayfalar: demirdokum-kombi-f22-hatasi (noktalı ailede F.22 kod sorgusu, bar tablosu yalnız Nitromix/ademiX/vintomiX),
#   demirdokum-kombi-f10-hatasi (noktasız aile F10 kod sorgusu), kombi-basinci-kac-olmali (marka bağımsız). Bu yazı kodsuz "bar ayarı" sorgusunu
#   iki aileyi birlikte ele alarak karşılar; basıncı okuma, yüksek basınç ve emniyet ventili sınırı ekli. Kod sayfalarına bağlanıldı.
# Arama kanıtı (25 Eki 08:47/08:49 +03, suggestqueries hl=tr gl=tr): "demirdöküm kombi b" → 1. "…bar ayarı nasıl düşürülür", 3. "…bar ayarı kaç olmalı";
#   "demirdöküm kombi bar" → 1. "…bar ayarı nasıl düşürülür", 2. "…bar ayarı kaç olmalı", 3. "…bar ayarı"; "demirdöküm kombi basınç" → 1. "…basınç ayarı".
#   GSC (www-5 3 ay / www-6 7 gün): DemirDöküm basınç satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile demirdokum.com.tr'den indirildi (HTTP 200 application/pdf); pdftotext -layout, sayfa = PDF sayfası.
#  (N) Nitromix 0020309468_01  md5 3340a11b923b7332f8eb8685297970b6 · (A) ademiX AS/2 8000037599_01  md5 49d7b83510651364a8bf6cc1fd7b654b
#  (V) vintomiX 8000023884_01  md5 44582ead51f15270f17023c715827c61 · (T) Atron Condense 0020281171_00  md5 7746b6a9d980072b5109b1b27926bd81
#  (P) Nitron Plus 0020193908_03  md5 51e63dec4da2dcf111d41350fa586e65
# N: 1,0–1,5 bar soğuk, <1,0 doldur, <0,4 kapanır F.22, çok kat servis, ilk dolum bayi, doldurma adımları s.12; sembol yanıp söner s.8; emniyet ventili değişiklik yok s.4–5
# A/V: <0,5 bar doldur, gerekli 1,0–1,4 bar, adımlar ve hava alma s.9–10 (V: tuşa üç kere s.9) · T/P: 1,0–2,0 bar, <0,8 doldur, F10, vana sola/sağa s.7–8 / s.11; PMS P s.8.
# BİLEREK YAZILMAYANLAR: basıncı düşürme tarifi (DemirDöküm kullanma kılavuzlarında yok) · petek boşaltma · genleşme tankı/emniyet ventili teşhisi
#   · "en sık neden" · musluk yönü Nitromix/ademiX/vintomiX için (kılavuz yalnız "yavaşça açın" diyor) · fiyat (#46).
# Alıntı denetim tablosu: demirdokum-kombi-basinc-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa basınçla uğraşma; kapı ve pencereleri aç, elektrik şalterlerine dokunma, binayı terk et ve gaz şirketini dışarıdan ara."
  - "Kılavuzun kapağından kombinin modelini öğren; bar aralığı modele göre değişiyor."
  - "Basıncı ekrandan oku ve basınç sembolünün sürekli mi yanıp sönerek mi yandığına bak."
  - "Okuduğun değeri modelinin kılavuzdaki aralığıyla karşılaştır."
  - "Basınç düşükse ve kılavuzun bu adımları tesisatına uygunsa radyatör vanalarını aç, doldurma vanasını yavaşça açıp hedef değere gelince kapat."
  - "Kılavuzun sırasıyla radyatörlerin havasını al ve basıncı yeniden kontrol et."
  - "Basınç yüksekse ya da emniyet ventilinden su geliyorsa kendin düşürmeye çalışma; yetkili servisi ara."
  - "Basınç sık düşüyorsa ya da kod geri geliyorsa okuduğun değerleri not edip yetkili servise bildir."
faq:
  - q: "DemirDöküm kombi basıncı kaç bar olmalı?"
    a: "Modele göre değişiyor. Nitromix kılavuzu soğuk ısıtma sisteminde 1,0 ile 1,5 bar veriyor. ademiX ve vintomiX'te gerekli sistem basıncı 1,0 ile 1,4 bar. Atron Condense ve Nitron Plus'ta sistem basıncı 1,0 ile 2,0 bar. Isıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebilir; bunu yetkili servise sor."
  - q: "DemirDöküm kombide bar ayarı nasıl düşürülür?"
    a: "DemirDöküm'ün kullanma kılavuzlarında kullanıcı için bir basınç düşürme tarifi yok. Basınç kılavuzdaki aralığın üstündeyse ya da emniyet ventilinden su geliyorsa yetkili servisi ara. Nitromix kılavuzu emniyet ventilinde değişiklik yapılmamasını açıkça istiyor."
  - q: "Kombiye su doldurmayı kendim yapabilir miyim?"
    a: "DemirDöküm kılavuzları doldurma adımlarını kullanıcıya gösteriyor, ama iki şart koyuyor: ilk dolumdan yetkili bayi sorumlu ve adımlar tesisatına uygun değilse yetkili bayiye başvurulmalı. Kılavuzunda adımlar varsa yalnız o adımları uygula; vananın yerini bilmiyorsan yetkili servise bırak."
  - q: "Basınç düşünce kombi kapanır mı?"
    a: "Nitromix kılavuzuna göre dolum basıncı 0,4 barın altına düşerse ürün kapanır ve ekranda F.22 görünür. Atron Condense ve Nitron Plus'ta tesisat basıncı izin verilen aralığın dışındaysa ekranda F10 görüntülenir."
  - q: "Basıncı nereden görürüm?"
    a: "Ekrandan. Nitromix'te ana ekranda tesisat basıncı görünür; basınç sembolü sürekli yanıyorsa değer izin verilen aralıkta, yanıp sönüyorsa aralık dışında. vintomiX'te ana ekranda ilgili tuşa üç kez basınca güncel dolum basıncı gösterilir. Atron Condense ve Nitron Plus'ta dijital basınç göstergesi ana ekranda."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin ekranında basınç birimiyle gösterilen kısa bir değer"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Tezgâhta açık duran bir kombi kullanma kılavuzunun kapak sayfası"
    - "Kombi ekranında yanıp sönen bir basınç simgesinin yakın planı"
    - "Kombi ekranındaki değerin yanında açık duran bir kullanma kılavuzu sayfası"
    - "Kombinin altında soğuk su borusu üzerinde küçük bir doldurma vanası"
    - "Bir peteğin üst köşesindeki küçük hava alma tapası"
    - "Duvardaki kombinin altında borular arasında duran bir emniyet ventili"
    - "Kombinin yanında duvara asılı not kâğıdı ve kalem"
---

Kombinin ekranındaki basınç değeri gözüne takıldı: düşük mü, yüksek mi, ne yapmalı? DemirDöküm kombilerde "bar ayarı" diye ayrı bir düğme yok; basınç, ısıtma sistemindeki su miktarıyla değişiyor (çıkarım). Kullanma kılavuzları ise üç şey söylüyor: basıncı nerede okuyacağını, modelin hangi aralıkta çalıştığını ve basınç düşükse sistemin nasıl doldurulduğunu. Bu yazıda Nitromix, ademiX, vintomiX, Atron Condense ve Nitron Plus kılavuzlarından bunları topladık. Senin modelin farklıysa kendi kılavuzunla karşılaştır. Ekranda bir kod varsa önce [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) sayfasına bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Basıncı ekrandan oku. Nitromix 1,0–1,5 bar (soğukken), ademiX ve vintomiX 1,0–1,4 bar, Atron Condense ve Nitron Plus 1,0–2,0 bar. Düşükse kılavuzunun doldurma adımları; yüksekse kendin düşürme, yetkili servis.

## Modeline göre değerler

| Model | Olması gereken | Doldurma işareti | Kod |
|---|---|---|---|
| **Nitromix** | Soğuk sistemde 1,0–1,5 bar | 1,0 barın altı | 0,4 barın altında kapanır, F.22 |
| **ademiX (AS/2)** | 1,0–1,4 bar | 0,5 barın altı | F.22 |
| **vintomiX** | 1,0–1,4 bar | 0,5 barın altı | F.22 |
| **Atron Condense** | 1,0–2,0 bar | 0,8 barın altı | Aralık dışında F10 |
| **Nitron Plus** | 1,0–2,0 bar | 0,8 barın altı | Aralık dışında F10 |

## Adım adım: evde denenecekler

**1. Gaz kokusu var mı?** Nitromix kılavuzuna göre doğal gaz kokusunda gaz kokusu olan mekanlarda bulunma, kapı ve pencereleri aç, açık alevden kaçın, elektrik şalterlerini, zilleri ve telefonu kullanma. Gaz sayacı kapatma düzeneğini kapat, binayı terk et, gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara. Basınç bekler.

**2. Modelini öğren.** Model adı kılavuzun kapağında yazıyor. Aralık modele göre değiştiği için Nitromix'in 1,5 barı ile Atron Condense'in 2,0 barını karıştırma.

**3. Basıncı oku.** Nitromix'te ana ekranda tesisat basıncı ve çalışma konumu görünür. Basınç sembolü **sürekli yanıyorsa** tesisat basıncı izin verilen aralıkta, **yanıp sönüyorsa** izin verilmeyen aralıkta. vintomiX'te ana ekranda ilgili tuşa **üç kere** basınca güncel dolum basıncı gösterilir. ademiX'te güncel dolum basıncı ana ekrandan görüntülenir. Atron Condense ve Nitron Plus'ta ürünün bir basınç sensörü ve dijital basınç göstergesi var; değer ana ekranda.

**4. Aralıkla karşılaştır.** Okuduğun değeri yukarıdaki tabloyla karşılaştır. Kılavuzların ortak notu: ısıtma sistemi **birçok kata** uzanıyorsa dolum basıncı için daha yüksek değerler gerekebilir; bunun için yetkili servise başvur. Değer aralıktaysa yapacak bir şey yok.

**5. Düşükse kılavuzun adımlarıyla doldur.** DemirDöküm kılavuzları bu adımları kullanıcıya gösteriyor, ama iki şartla: **ilk dolumdan yetkili bayi sorumlu** ve ademiX ile vintomiX kılavuzlarına göre adımlar tesisatına uygun değilse yetkili bayiye başvurulmalı. Sisteme yalnız **uygun ısıtma suyu** doldurulmalı. Sıra şu: tüm radyatör vanalarını (termostatik vanalar) aç, doldurma vanasını **yavaşça** aç ve gerekli basınca ulaşınca kapat. Atron Condense ve Nitron Plus'ta vana soğuk su borusunda; **sola** çevirince açılıyor, **sağa** çevirince kapanıyor. Vananın yerini bilmiyorsan bu işi yetkili servise bırak.

**6. Havayı al, yeniden bak.** Kılavuzların doldurma sırasındaki bir sonraki adımı tüm radyatörlerin havasını almak. ademiX ve vintomiX kılavuzları bunun radyatörün üst sol ya da sağ tarafındaki bağlantı noktasından yapıldığını yazıyor. Ardından basıncı yeniden kontrol et, gerekirse adımları tekrarla. Nitromix kılavuzuna göre yeterince su ilave edildiğinde basınç göstergesi kendiliğinden söner.

**7. Yüksekse dokunma.** DemirDöküm'ün kullanma kılavuzlarında basınç düşürme için kullanıcıya verilmiş bir adım yok. Basınç aralığın üstündeyse ya da emniyet ventilinden su geliyorsa yetkili servisi ara. Nitromix kılavuzu emniyet ventilinde **değişiklik yapılmamasını** açıkça istiyor. Nitron Plus kılavuzuna göre ısıtma devresinin çalışma basıncı tip etiketinde **PMS** olarak yazılı.

**8. Sık düşüyorsa servis.** Doldurduktan kısa süre sonra basınç yine düşüyorsa ya da kod geri geliyorsa okuduğun değerleri ve tarihleri not et. Kılavuzların kuralı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## Hava ve yüksek basınç hakkında

Nitromix ve Atron Condense kılavuzlarının arıza tablosunda ayrı bir satır var: **ısıtma sisteminde hava** varsa havanın yetkili servis tarafından alınması isteniyor. Yani doldurma sırasındaki hava alma dışında, petek havası sorunlarını servise bırakmak daha doğru. Basıncın neden sık düştüğü kılavuzlarda yazmıyor; genel nedenler [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısında, ventil için [kombi emniyet ventili ve presostat](/blog/kombi-emniyet-ventili-ve-presostat/) yazısında.

⛔ **Kendin-çöz sınırı burada biter.** Ekran, radyatör vanaları ve kılavuzun gösterdiği doldurma vanası sende; kombinin kapağının içi, emniyet ventili, genleşme tankı, gaz hattı ve baca yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Ekranda basınç kaç bar, sembol yanıp sönüyor mu?
3. Ekranda kod var mı (F.22 ya da F10)?
4. Ne zaman doldurdun, ne kadar sürede düştü?

Değeri ve kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kod yazılarına [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) ve [F10 hatası](/blog/demirdokum-kombi-f10-hatasi/) sayfalarından, marka bağımsız değerlere [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısından ulaşabilirsin. Bil, gör, çağır.
