---
title: "DemirDöküm kombi çalışmıyor: sıcak su da yok"
description: "DemirDöküm kombi hiç çalışmıyorsa kılavuzun sırası: binadaki sigorta, soğuk su vanası, açma düğmesi, sıcaklık ayarı ve tesisat basıncı."
slug: "demirdokum-kombi-calismiyor"
date: "2026-09-29"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 06:3x · Kaynak denetimi: demirdokum-kombi-calismiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi (hepsi HTTP 200, application/pdf); md5'ler 28 Eyl yerel
# kopyalarıyla (blog-taslaklar/kaynak-demirdokum-sprint/) birebir. pdftotext -layout ile okundu; sayfa = PDF sayfası (\f ayracı).
# Web araması KULLANILMADI; URL'ler yayındaki DemirDöküm F22/F28/F10/F04 yazılarının provenansından.
# KULLANMA KILAVUZLARI (tek kaynak — "Ürün çalışmıyor (sıcak su yok, ısıtma soğuk kalıyor)" satırı beşinde de var):
# N) Nitromix P 24/28/35 NG (HEP) · 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 401.645 B · 16 sf · md5 3340a11b923b7332f8eb8685297970b6
#    Ek D s.15: satır → sigorta ("Ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar.") · soğuk su kesme
#    vanası · ürün kapalı → "Ürünü çalıştırın. (→ sayfa 10)" · sıcaklık çok düşük → ayarla · hava → "Yetkili servis tarafından ısıtma
#    sisteminin havası alınmalıdır." · s.10 4.2 vana konumunu yetkili servisten öğren, 4.3 aç/kapa, 4.4 mode · s.11 4.5 regler bağlıysa
#    üründe maksimum + regler · s.12 5.3 dolum 1,0–1,5 bar, <0,4 bar F.22, "Yetkili bayi ilk dolumdan sorumludur." · s.13 6.1/6.2, 7.1 tatil
# A) ademiX P24/24-AS/2 · P28/28-AS/2 (H-TR) · 8000037599_01
#    https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf
#    HTTP 200 · 203.592 B · 16 sf · md5 49d7b83510651364a8bf6cc1fd7b654b
#    Ek B s.13: aynı satır; ürün kapalı → "Ürün arızasını giderin. (→ Bölüm 6.2)" · hava → "havasını aldırmak için, bir yetkili servise
#    başvurun." · s.11 6.2 açma/kapatma düğmesine 5 sn'den uzun · s.8 4.2 regler · s.9 5.3.1 <0,5 bar doldur, 1,0–1,4 bar · s.11 7.1 tatil
# V) vintomiX P18/24-AS/1 · P24/28-AS/1 (H-TR) · 0020313925_01
#    https://www.demirdokum.com.tr/downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf
#    HTTP 200 · 231.344 B · 16 sf · md5 8f95c967c9b46f5954feb833fd596467
#    Ek B s.12: aynı satır (A ile aynı tedbirler) · s.10 6.2 reset 3 sn'den uzun, en fazla beş kez, rE · s.7 4.2 regler on/oF · s.10 7.1 tatil
# AT) Atron Condense P 20-FC/3 · P 24-FC/3 (H-TR) · 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 412.097 B · 12 sf · md5 7746b6a9d980072b5109b1b27926bd81
#    Ek B s.10: "Ürün çalışmıyor: – Sıcak su yok – Isıtma soğuk" + "Sistem basıncı yeterli değil … (Arıza mesajı: F10)" → doldur
#    + F04 → reset + F05 → yetkili servis · s.7 4.4 vana konumu yetkili servisten, 4.5 "Ürünü sadece kapak tamamen kapalı olduğunda
#    işletime alın.", 4.6 ayar düğmesini sağa çevir, 4.7 1,0–2,0 bar / <0,80 bar doldur · s.8 4.8 doldurma · s.9 6.1, 7.1 tatil
# NP) Nitron Plus · 0020193908_03
#    https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 975.777 B · 20 sf · md5 51e63dec4da2dcf111d41350fa586e65
#    Ek B s.15-16: AT ile aynı satırlar; hava → "Yetkili bayi tarafından" · s.10 4.4 vana konumu "uzman tesisatçıdan", 4.5 döner düğme
#    sağa · s.11 4.6-4.7 basınç ve doldurma
# ⛔ Bilerek YAZILMAYANLAR: gaz kesme vanası satırı ve gaz kokusu talimatı (29 Eyl görev talimatı: gaz vanası/gaz kokusu/brülör/kapak
#    açma bu rehberlerde yok) · F.28/F04 satırlarındaki gaz vanası adımı (yalnız kod yazılarına link) · ısıtma sisteminin hava alma
#    adımı (tablo bu satırda yetkili servis/bayi diyor) · doldurmanın adım adım tarifi (F22/F10 yazılarında; burada tekrar edilmedi)
#    · sigortanın neden attığı / pano müdahalesi (belgede yok, #31) · "fişi çek bekle" reseti (belgede yok) · maliyet/süre (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekrana bak; F ile başlayan bir kod görünüyorsa o kodun rehberine geç, ekran tamamen kapalıysa bir sonraki adıma geç."
  - "Binadaki sigortanın açık olduğunu kontrol et; elektrik geri geldiğinde kombi kendiliğinden çalışmaya başlar."
  - "Kombinin soğuk su kesme vanasının açık olduğunu kontrol et."
  - "Kombi kapalıysa kendi kılavuzundaki yöntemle aç ya da resetle."
  - "Gidiş suyu ve sıcak su sıcaklığının çok düşük ya da kapalı ayarlanmadığını kontrol et, gerekirse ayarla."
  - "Ekranda tesisat basıncını oku; kılavuzundaki aralığın altındaysa ısıtma sistemini kılavuzun tarifiyle doldur."
  - "Bunların hepsi yerindeyse ve kombi hâlâ çalışmıyorsa yetkili servise başvur."
faq:
  - q: "DemirDöküm kombi hiç çalışmıyor, sıcak su da yok; ne yapmalıyım?"
    a: "DemirDöküm'ün Nitromix, ademiX, vintomiX, Atron Condense ve Nitron Plus kullanma kılavuzlarındaki arıza giderme tablosunda bu durumun ayrı bir satırı var: ürün çalışmıyor, sıcak su yok, ısıtma soğuk kalıyor. Tablonun kullanıcıya bıraktığı kontroller şunlar: binadaki sigorta, soğuk su kesme vanası, kombinin açık olup olmadığı ve sıcaklık ayarları. Atron Condense ve Nitron Plus'ta aynı satırda tesisat basıncı da var. Bunlar yerindeyse ve kombi yine çalışmıyorsa yetkili servise başvurulur."
  - q: "Elektrik kesildi, geri geldi; DemirDöküm kombiyi yeniden açmam gerekir mi?"
    a: "Beş kılavuzun tablosu da aynı cümleyi kuruyor: binadaki elektrik beslemesi kesildiyse binadaki sigorta kontrol edilir ve ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar. Kombi elektrik geldiği hâlde çalışmıyorsa kapalı konumda kalmış olabilir; o zaman modelinin kılavuzundaki açma yöntemine bak."
  - q: "ademiX ya da vintomiX'te kombi kapalı görünüyorsa ne yapılır?"
    a: "ademiX ve vintomiX kılavuzlarının tablosu 'ürün kapalı' satırında ürün arızasının giderilmesini, yani reseti gösteriyor. ademiX'te ana ekranda açma/kapatma düğmesine 5 saniyeden uzun basılır. vintomiX'te açma/kapatma tuşuna 3 saniyeden uzun basılır, en fazla beş kez; ekranda rE görünür. Beş denemeden sonra rE hızla yanıp sönerse kılavuzun tarifine göre tuşa basılarak ürün yeniden başlatılır."
  - q: "DemirDöküm kombide tesisat basıncı kaç bar olmalı?"
    a: "Modele göre değişiyor. Nitromix kılavuzu soğuk sistemde 1,0–1,5 bar veriyor ve basınç 0,4 barın altına düşerse ürünün kapanıp F.22 gösterdiğini yazıyor. ademiX ve vintomiX'te basınç 0,5 barın altındaysa doldurulur, gerekli basınç 1,0–1,4 bar. Atron Condense ve Nitron Plus'ta aralık 1,0–2,0 bar, 0,80 barın altında doldurulur ve aralık dışında ekranda F10 görünür. Isıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebilir; bunun için kılavuzlar yetkili servise yönlendiriyor."
images:
  coverAlt: "Duvara monte beyaz bir kombi; ekranı kapalı, altında borular ve vanalar görünüyor"
---

Kombinin ekranı kapalı, musluktan sıcak su gelmiyor, petekler de soğuk. DemirDöküm'ün kullanma kılavuzlarında bu durumun kendi satırı var: **"Ürün çalışmıyor (sıcak su yok, ısıtma soğuk kalıyor)."** Nitromix, ademiX ve vintomiX kılavuzları satırı bu sözlerle; Atron Condense ve Nitron Plus kılavuzları "Ürün çalışmıyor: Sıcak su yok, Isıtma soğuk" diye veriyor. Tablonun saydığı nedenlerin çoğu bir arıza değil, kapalı kalmış ya da yanlış ayarlanmış bir şey. Bu yazıda o satırı beş DemirDöküm kılavuzundan, kullanıcıya bırakılan kontroller sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda F kodu varsa önce o kodun rehberi. Kod yoksa → binadaki sigorta, soğuk su kesme vanası, kombi açık mı, sıcaklık ayarı kapalı mı, tesisat basıncı yeterli mi. Hepsi yerindeyse ve kombi hâlâ çalışmıyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Önce ekrana bak.** Ekranda F ile başlayan bir kod görünüyorsa sıra değişir: DemirDöküm kılavuzları bir arıza mesajı çıktığında ekteki arıza kodu tablosuna göre hareket edilmesini istiyor. Nitromix, ademiX ve vintomiX'te kodlar noktalı yazılır (F.22, F.28); Atron Condense ve Nitron Plus'ta noktasız (F10, F04, F05). Tesisat basıncı için [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) ve [DemirDöküm kombi F10 hatası](/blog/demirdokum-kombi-f10-hatasi/), ateşleme için [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) ve [DemirDöküm kombi F04 hatası](/blog/demirdokum-kombi-f04-hatasi/) yazılarına bak. Ekran tamamen kapalıysa ya da kod yoksa bir sonraki adıma geç.

**2. Binadaki sigorta.** Beş kılavuzun tablosunda da olası nedenlerden biri binadaki elektrik beslemesinin kesilmesi; tedbir **binadaki sigortayı kontrol etmek.** Kılavuzlar hemen ekliyor: *"Ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar."*

**3. Soğuk su kesme vanası.** Tablonun bir sonraki nedeni: soğuk su devresi kapatma vanası kapalı. Tedbir: **soğuk su kesme vanasını aç.** Kılavuzlar uzun süreli kapatmada (örneğin tatilde) bu vananın da kapatılmasını istediği için, dönüşte açık olup olmadığına mutlaka bak. Vananın yerini bilmiyorsan Nitromix ve Atron Condense kılavuzlarının tavsiyesi: kapatma vanalarının konumunu ve kullanımını **ürünün montajını yapan yetkili servisten öğren**; Nitron Plus kılavuzu bunun için montajı yapan tesisatçıyı gösteriyor.

**4. Kombi kapalı olabilir.** Tablodaki bir neden de düpedüz **ürünün kapalı** olması. Ne yapılacağı modele göre değişiyor:

- **Nitromix:** kontrol panelindeki açma/kapatma sembolüne bas; ekranda ana ekran görünür.
- **Atron Condense ve Nitron Plus:** ayar düğmesini sağa çevir; ekranda ana ekran görünür. Atron Condense kılavuzunun şartı: **ürünü sadece kapak tamamen kapalı olduğunda işletime al.**
- **ademiX:** tablo bu satırda ürün arızasının giderilmesini, yani reseti gösteriyor: ana ekranda açma/kapatma düğmesine **5 saniyeden uzun** bas.
- **vintomiX:** aynı şekilde reset; açma/kapatma tuşuna **3 saniyeden uzun** bas, en fazla beş kez. Ekranda rE görünür.

**5. Sıcaklık ayarı kapalı mı?** Kılavuzların tablosuna göre gidiş suyu (kalorifer) sıcaklığı ya da sıcak su sıcaklığı **çok düşük ayarlanmış** ya da ısıtma / sıcak su işletimi **kapatılmış** olabilir; ademiX ve vintomiX tablosu ilkini oda sıcaklığı diye yazıyor. Tedbir: gidiş suyu (ademiX ve vintomiX'te oda) sıcaklığını ve kullanma suyu sıcaklığını ayarla. ademiX ve vintomiX'te her değer değişikliği onaylanmalı; kılavuzlara göre yeni ayar ancak onaydan sonra devralınır. Kombine bir oda termostatı (regler) bağlıysa Nitromix, ademiX ve vintomiX kılavuzları istenen sıcaklığın **reglerden** ayarlanmasını istiyor.

**6. Tesisat basıncına bak.** Atron Condense ve Nitron Plus tablosunun aynı satırında bir neden daha var: *"Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su (Arıza mesajı: F10)."* Tedbir: ısıtma sistemini doldurmak. Nitromix, ademiX ve vintomiX'te aynı durum F.22 koduyla görünüyor ve tedbiri yine doldurmak. Basıncı ekrandan oku ve kendi modelinin aralığıyla karşılaştır: Nitromix'te soğuk sistemde 1,0–1,5 bar; ademiX ve vintomiX'te 0,5 barın altındaysa doldurulur, hedef 1,0–1,4 bar; Atron Condense ve Nitron Plus'ta 1,0–2,0 bar, 0,80 barın altında doldurulur. Kılavuzlar doldurmayı kullanıcıya tarif ediyor; adım adım tarif [F22](/blog/demirdokum-kombi-f22-hatasi/) ve [F10](/blog/demirdokum-kombi-f10-hatasi/) yazılarında. İki not da unutulmasın: Nitromix, Atron Condense ve Nitron Plus kılavuzlarına göre **ilk dolumdan yetkili bayi sorumlu**; ısıtma sistemi birçok kata uzanıyorsa da daha yüksek basınç gerekebilir ve kılavuzlar bunun için yetkili servise ya da bayiye yönlendiriyor.

**7. Hepsi yerindeyse servis.** Tablodaki son neden **ısıtma sisteminde hava.** Nitromix ve Atron Condense kılavuzlarına göre bu havayı yetkili servis alır; ademiX ve vintomiX havayı aldırmak için yetkili servise başvurulmasını, Nitron Plus yetkili bayiyi gösteriyor. Kılavuzların genel kuralı da aynı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## Kılavuzun tablosu — beş model yan yana

| Olası neden (kılavuzdan) | Kılavuzun tedbiri | Hangi kılavuzda |
|---|---|---|
| Binadaki elektrik beslemesi kesildi | Binadaki sigortayı kontrol et; elektrik gelince ürün kendiliğinden çalışır | Nitromix · ademiX · vintomiX · Atron Condense · Nitron Plus |
| Soğuk su devresi kapatma vanası kapalı | Soğuk su kesme vanasını aç | Nitromix · ademiX · vintomiX · Atron Condense · Nitron Plus |
| Ürün kapalı | Nitromix, Atron Condense, Nitron Plus: ürünü çalıştır/aç · ademiX, vintomiX: ürün arızasını gider (reset) | Beşi de |
| Gidiş suyu (ademiX, vintomiX: oda) / sıcak su sıcaklığı çok düşük ya da kapatılmış | Bu sıcaklıkları ayarla | Beşi de |
| Sistem basıncı yeterli değil (F10) | Isıtma sistemini doldur | Atron Condense · Nitron Plus |
| Doğalgazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra arıza konumu (F04) | Reset tuşuna bas; üç denemede geçmezse yetkili servis/bayi | Atron Condense · Nitron Plus |
| Atık gaz hattında arıza (F05) | Yetkili servis/bayi gidersin | Atron Condense · Nitron Plus |
| Isıtma sisteminde hava var | Yetkili servis ya da yetkili bayi alsın | Beşi de |

📌 Tablodaki nedenlerin çoğu arıza değil, **kapalı kalmış bir şey.** Bu yüzden servisi aramadan önce sigorta, vana ve ayar turunu atmaya değer.

## Sıcak su var, sadece petekler soğuksa

Bu yazı kombinin **hiç** çalışmadığı durumu anlatıyor. Musluktan sıcak su geliyor ama petekler ısınmıyorsa kılavuzun satırı farklı ve cevabı genellikle bir ayarda; onu [DemirDöküm kombi kalorifer ısıtmıyor](/blog/demirdokum-kombi-kalorifer-isitmiyor/) yazısında ayrıca anlattık.

## Ne zaman servis

- Sigorta yerinde, soğuk su vanası açık, kombi açık, ayarlar doğru, basınç aralıkta ve kombi yine de çalışmıyorsa.
- Kılavuzun "ısıtma sisteminde hava var" satırı için; bu iş modeline göre yetkili servisin ya da yetkili bayinin.
- F05 gibi tedbiri doğrudan yetkili servis olan bir kod görünüyorsa.
- Isıtma sistemi birçok kata uzanıyor ve doğru basınç değerinden emin değilsen.

⛔ Kılavuzların genel uyarısı da unutulmasın: güvenlik tertibatları çıkarılmaz, köprülenmez, üzerlerinde değişiklik yapılmaz; üründe ve tesisat hatlarında değişiklik yapılmaz. Kapağın arkası servisin işi.

DemirDöküm'ün iki kod ailesini ve diğer kodları [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) listesinde bulabilirsin. Marka bağımsız olarak kombinin neden yanmadığını [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
