---
title: "DemirDöküm kombi F10 hatası"
description: "DemirDöküm Atron Condense ve Nitron Plus'ta F10 ısıtma sisteminde yetersiz su demek. Basıncı okuma, 1,0–2,0 bar ve doldurma adımları; kılavuzdan."
slug: "demirdokum-kombi-f10-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi HTTP 200); pdftotext ve pdftotext -layout ile okundu.
# Sayfa = PDF sayfası (\f ayracıyla sayıldı). Web araması bu yazı için kullanılmadı; adresler hub'ın 17 Eyl provenansından,
# md5'ler 2/2 BİREBİR (belgeler değişmemiş). Alıntı denetim tablosu: demirdokum-kombi-f10-hatasi.KAYNAK.md
# A) Atron Condense P 20/24-FC/3 (H-TR) Kullanma Kılavuzu 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 12 s. · md5 7746b6a9d980072b5109b1b27926bd81
#    "Tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülenir." + çok katlı → yetkili servis s.7
#    sistem basıncı 1,0-2,0 bar · <0,80 bar doldur s.7 · doldurma: termostatik vanalar → soğuk su borusundaki doldurma vanası
#    (sola çevir) → takviye → kapat (sağa çevir) → radyatör havası → kontrol → ilk beş adımı tekrarla s.8
#    arıza tablosu: "Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su (Arıza mesajı: F10)." → doldur s.10
#    "Isıtma sisteminde hava var." → yetkili servis s.10 · FXX ana ekran yerine yanıp söner s.6 · ana ekranda sistem basıncı s.7
#    "Ürün sorunsuz çalışmıyorsa yetkili servise başvurun." s.9 · tamir ve bakım DemirDöküm teknik servisi s.5
# B) Nitron Plus Kullanma Kılavuzu 0020193908_03
#    https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 20 s. · md5 51e63dec4da2dcf111d41350fa586e65
#    F10 aralık dışı + çok katlı → yetkili bayi · 1,0-2,0 bar · <0,80 bar doldur · doldurma (soğuk su borusundaki geliş vanası,
#    sola aç / sağa kapat) s.11 · arıza tablosu F10 s.16 · ana ekranda tesisat basıncı s.10 · "Ürün sorunsuz çalışmıyorsa,
#    yetkili bayiye başvurun." s.13
# BİLEREK yazılmayanlar:
#  - Basıncın aralığın ÜSTÜNDE olduğu durum için kullanıcı adımı: iki kılavuzda da yok; yalnız genel "sorunsuz çalışmıyorsa servis" kuralı verildi.
#  - Kaçak / genleşme tankı / emniyet ventili teşhisi: belgede yok.
#  - F10 için reset: kılavuzların F10 tedbirinde reset yok.
#  - Nitromix/ademiX'te düşük basınç kodu F.22; ayrı yazı (demirdokum-kombi-f22-hatasi).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Radyatör hava tahliye anahtarı"]
steps:
  - "Ekrandaki kodun F10 olduğunu ve kombinin model adını not et."
  - "Ana ekranda sistem basıncını oku."
  - "Isıtma sistemindeki tüm radyatörlerin termostatik vanalarını aç."
  - "Soğuk su borusundaki doldurma vanasını sola çevirerek aç."
  - "Basınç 1,0–2,0 bar aralığına gelince vanayı sağa çevirerek kapat."
  - "Tüm radyatörlerin havasını al ve sistem basıncını ekrandan yeniden kontrol et; gerekirse doldurma adımlarını tekrarla."
  - "F10 bu adımlarla gitmiyorsa yetkili servise başvur."
faq:
  - q: "DemirDöküm kombide F10 hatası ne demek?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus kullanma kılavuzlarına göre tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülenir. Arıza tablosunda nedeni 'Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su' olarak yazılı; tedbir ısıtma sistemini doldurmak."
  - q: "Atron Condense ve Nitron Plus'ta basınç kaç bar olmalı?"
    a: "İki kılavuz da sistem basıncını 0,1–0,2 MPa (1,0–2,0 bar) veriyor ve basınç 0,08 MPa'nın (0,80 bar) altındaysa ısıtma sistemini doldurmanı istiyor. Isıtma sistemi birden fazla kata dağıldığında daha yüksek sistem basıncı gerekebilir; kılavuzlar bunun için yetkili servise ya da bayiye danışmanı söylüyor."
  - q: "Doldurma vanası nerede, hangi yöne çevrilir?"
    a: "Atron Condense kılavuzu vanayı 'soğuk su borusundaki doldurma vanası', Nitron Plus kılavuzu 'soğuk su borusundaki geliş vanası' diye tarif ediyor. İki kılavuzda da vana sola çevrilerek açılıyor, gerekli basınca gelince sağa çevrilerek kapatılıyor. Vanaların yerini bilmiyorsan kılavuzlar kapatma vanalarının konumunu montajı yapan yetkili servise ya da tesisatçıya sormanı istiyor."
  - q: "F10'da resetlemem gerekir mi?"
    a: "Kılavuzların F10 için verdiği tedbir ısıtma sistemini doldurmak; bu satırda reset adımı yok. Reset tuşu kılavuzlarda ateşleme arızası F04 için verilmiş. Doldurma sonrası sorun sürüyorsa kılavuzun genel kuralı ürün sorunsuz çalışmıyorsa yetkili servise başvurmak."
  - q: "Kombimin ekranında F10 değil F.22 yazıyor, ne fark var?"
    a: "DemirDöküm'ün Nitromix, ademiX ve vintomiX gibi noktalı kod kullanan modellerinde düşük basınç F.22 olarak görünür ve basınç aralıkları farklıdır. O modeller için DemirDöküm kombi F22 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmında soğuk su borusu üzerinde küçük bir vana ve kombinin ön panelinde rakamsız, soyut bir dijital ekran"
---

DemirDöküm Atron Condense ya da Nitron Plus kombinin ekranında **F10** yanıp sönüyorsa DemirDöküm'ün kullanma kılavuzu bunun anlamını tek cümleyle veriyor: **"Tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülenir."** Arıza tablosunda nedeni de yazılı: **"Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su."** Tedbir kullanıcıya bırakılmış bir iş: ısıtma sistemini doldurmak. Bu yazıda o işi iki DemirDöküm kılavuzunun tarifiyle adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F10 = ısıtma sisteminde su yetersiz, basınç aralık dışında. Sıra şu: ekrandaki basıncı oku → radyatör vanalarını aç → soğuk su borusundaki doldurma vanasını sola çevirerek aç → 1,0–2,0 bara gelince sağa çevirip kapat → radyatörlerin havasını al, basıncı yeniden kontrol et. Kod gitmiyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Kodu ve modeli not et.** DemirDöküm'de iki ayrı kod ailesi var. F10, Atron Condense ve Nitron Plus gibi **noktasız kod** kullanan modellerin kodudur. Kılavuzlara göre arıza mesajı ekranda ana ekran yerine **yanıp sönerek** gösterilir. Kombin Nitromix, ademiX ya da vintomiX ise aynı durum F.22 olarak görünür; o durumda [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) yazısına geç.

**2. Basıncı ekrandan oku.** Kılavuzlara göre bu kombilerde bir basınç sensörü ve **dijital basınç göstergesi** var; ana ekranda sistem basıncı, çalışma konumu ve ek bilgiler görünür. İki kılavuzun ölçüsü aynı: **1,0–2,0 bar** aralığındaysa basınç öngörülen aralıktadır, **0,80 barın altındaysa** ısıtma sistemini doldur.

**3. Radyatör vanalarını aç.** Doldurma tarifinin ilk adımı: ısıtma sistemindeki **tüm radyatör vanalarını (termostatik vanalar)** aç.

**4. Doldurma vanasını aç.** Atron Condense kılavuzu bunu **soğuk su borusundaki doldurma vanası**, Nitron Plus kılavuzu **soğuk su borusundaki geliş vanası** diye tarif ediyor. İkisinde de vana **sola çevrilerek** açılır. Vanaların yerini bilmiyorsan kılavuzların tavsiyesi: kapatma vanalarının konumunu ve kullanımını **montajı yapan yetkili servise ya da tesisatçıya sor.**

**5. Değere gelince kapat.** Gerekli tesisat basıncına ulaşana kadar su takviyesi yap; hedef **0,1–0,2 MPa (1,0–2,0 bar).** Değere gelince vanayı **sağa çevirerek** kapat.

**6. Havayı al, basıncı yeniden kontrol et.** Tüm radyatörlerin havasını al, sonra sistem basıncını ekranda yeniden kontrol et. Basınç yine düşükse kılavuzun tarifi: su takviyesi yap ve **ilk beş adımı tekrarla.**

**7. Gitmiyorsa servis.** Kılavuzların genel kuralı açık: ürün sorunsuz çalışmıyorsa **yetkili servise başvur.**

## F10 tam olarak ne diyor

Atron Condense ve Nitron Plus kılavuzlarının arıza tablosu F10'u "sıcak su yok / ısıtma soğuk" şikâyetinin nedenlerinden biri olarak veriyor:

| Arıza | Nedeni | Tedbir |
|---|---|---|
| Sıcak su yok · Isıtma soğuk | Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su (**Arıza mesajı: F10**) | Isıtma sistemini doldur |

Aynı tabloda F10'un çevresindeki satırlar da senin kontrol edebileceğin şeyler: kapalı bir **gaz kesme vanası** ya da **soğuk su kesme vanası**, binadaki **sigorta**, kapalı duran ürün ya da çok düşük ayarlanmış gidiş suyu ve kullanım suyu sıcaklıkları. Kombi ısıtmıyor ama ekranda kod yoksa önce bu satırlara bak.

## Çok katlı tesisat ve su kalitesi

📌 İki kılavuz da ısıtma sistemi **birden fazla kata** dağıldığında daha yüksek sistem basıncı gerekebileceğini yazıyor. Bu durumda doğru değeri yetkili servise ya da bayiye sor.

Kılavuzlar ayrıca ısıtma sistemine yalnız **uygun ısıtma suyu** doldurulmasını istiyor: çok kireçli, aşırı korozif ya da kimyasal içeren su contalara ve diyaframlara zarar verir, su geçen parçaları tıkar ve ses yapar. Kılavuza göre **ilk dolumdan yetkili bayi sorumludur.**

## F10 ile karışan durumlar

- **Isıtma sisteminde hava:** arıza tablosunda "ısıtma sisteminde hava var" ayrı bir satır olarak yer alıyor; kılavuz bunun için sistemin havasının **yetkili servis tarafından** alınmasını istiyor.
- **Ekranda F04 varsa:** bu kod basınç değil, ateşleme arızasıdır; adımları [DemirDöküm kombi F04 hatası](/blog/demirdokum-kombi-f04-hatasi/) yazısında.
- **Ekranda F05 varsa:** kılavuza göre atık gaz hattında bir arıza vardır ve yetkili servis tarafından giderilmesi gerekir.
- **Basınç 2,0 barın üstündeyse:** kılavuz bu durum için kullanıcıya ayrı bir adım vermiyor; ürün sorunsuz çalışmıyorsa yetkili servise başvur.

## Sınır nerede biter

Atron Condense kılavuzunun cümlesi net: ürünün **tamir ve bakımı DemirDöküm teknik servisi** tarafından yapılmalıdır. Kılavuz ayrıca kullanıcının hiçbir şekilde kendi başına üründe bakım çalışması ya da onarım yapmamasını, ürünün yalnız **kapak tamamen kapalıyken** işletime alınmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter:** basıncı okumak, radyatör vanaları, doldurma vanası ve radyatör havası sende; kombinin kapağının arkası servisin.

## Servisi aramadan önce iki dakikalık özet

- Ekrandaki kod F10 mu, model adı ne?
- Ekranda okunan basınç kaç bar?
- Doldurma sonrası basınç 1,0–2,0 bar aralığına geldi mi?
- Radyatörlerin havası alındı mı, ardından basınç yeniden kontrol edildi mi?
- Tesisat birden fazla kata yayılıyor mu?

DemirDöküm'ün diğer kodları ve iki kod ailesi arasındaki farklar için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) yazısına bakabilirsin. Basınç konusunun genel çerçevesi [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
