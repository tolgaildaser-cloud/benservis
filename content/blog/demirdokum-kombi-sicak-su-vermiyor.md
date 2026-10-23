---
title: "DemirDöküm kombi sıcak su vermiyor: ne kontrol edilir"
description: "DemirDöküm kombi sıcak su vermiyorsa kılavuz önce ayara bakıyor: çalışma konumu, sıcak su düğmesi, sıcaklık, regler, soğuk su vanası ve basınç."
slug: "demirdokum-kombi-sicak-su-vermiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme D, fork A). Konu seçimi: origin/main'de demirdokum-kombi-sicak-su-vermiyor yok
#   (DemirDöküm'de calismiyor = "sıcak su da yok", kalorifer-isitmiyor = "sıcak su veriyor, ısıtmıyor", ariza-kodlari, F04/F10/F22/F28, sembolleri,
#   demirdokum-termosifon-suyu-isitmiyor var). Bu yazı ayrı belirti: kombi sıcak su vermiyor, petekler ısınabiliyor.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "demirdöküm kombi sıcak su" → 1. "…vermiyor ama petekler ısınıyor", 2. "demirdöküm kombi sıcak su vermiyor";
#   "demirdöküm kombi sıcak su vermiyor" → "…ama petekler ısınıyor", "…neden", "…ama petekler ısınmıyor", "…f5", "…ne yapmalıyım". GSC 7 gün: bu sorgu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile demirdokum.com.tr'den yeniden indirildi: dördü de HTTP 200 application/pdf, md5 28 Eyl yerel kopyalarla aynı.
#  (N) Nitromix 0020309468_01  https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf  16 s.  md5 3340a11b923b7332f8eb8685297970b6
#  (A) ademiX 8000037599_01  https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf  16 s.  md5 49d7b83510651364a8bf6cc1fd7b654b
#  (V) vintomiX 0020313925_01  https://www.demirdokum.com.tr/downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf  16 s.  md5 8f95c967c9b46f5954feb833fd596467
#  (AT) Atron Condense 0020281171_00  https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf  12 s.  md5 7746b6a9d980072b5109b1b27926bd81
# Gaz kokusu N s.4 · semboller N s.9, A s.7 · mode/kış/yaz/bekleme N s.10 · sıcak su ayarı N s.11, A s.8, V s.8 · lejyoner A s.8 · aralık N s.14 (35-65), AT s.10 (35-64)
#   · regler N s.11, A s.8 · kapatma vanaları N s.10 · arıza tablosu N s.15, A s.13, V s.12, AT s.10 · basınç N s.12 · F.28/reset N s.15 · hava alma N s.15 yetkili servis.
# BİLEREK YAZILMAYANLAR: "F5" önerisi (kılavuzlarda F5 sıcak su kodu yok, yazılmadı) · "yalnız sıcak su yok" için parça teşhisi (3 yollu vana, akış sensörü,
#   eşanjör, kart; kılavuzlarda yok) · bekleme konumunun sıcak suyu kestiği iddiası (belgede açık değil) · derece önerisi · #46 kapsamı.
# Alıntı denetim tablosu: demirdokum-kombi-sicak-su-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, gaz sayacı vanasını kapat, binayı terk et ve gaz şirketinin acil durum birimini dışarıdan ara."
  - "Ekran kapalıysa kombiyi açma tuşuyla çalıştır, binadaki sigortayı kontrol et."
  - "Nitromix'te mode tuşuyla ekranda kış ya da yaz konumunun göründüğünü kontrol et."
  - "ademiX'te sıcak su ayar düğmesinin OFF konumunda olmadığını kontrol et."
  - "Sıcak su sıcaklığını kılavuzdaki tuş ya da düğmeyle yükselt; lejyoner uyarısı nedeniyle yetkili bayiye danışmadan 60 °C'nin altına indirme."
  - "Kombiye regler bağlıysa üründe en yüksek sıcak su değerini seç, istediğin sıcaklığı reglerden ayarla."
  - "Kombinin altındaki soğuk su kesme vanasının açık olduğunu kontrol et."
  - "F.22 ya da F.28 görüyorsan kılavuzdaki tedbiri uygula; ayarlar doğru olduğu hâlde sıcak su gelmiyorsa DemirDöküm yetkili servisini ara."
faq:
  - q: "DemirDöküm kombi sıcak su vermiyor ama petekler ısınıyor, neden?"
    a: "DemirDöküm'ün Nitromix, ademiX, vintomiX ve Atron Condense kılavuzlarındaki arıza tablosunda yalnız sıcak suyun kesildiği ayrı bir satır yok. Sıcak suyla ilgili kullanıcı maddeleri şunlar: sıcak su sıcaklığının çok düşük ayarlanması, sıcak su işletiminin kapatılması ve soğuk su devresi kapatma vanasının kapalı olması. Üçü de doğruysa ve kalorifer çalışırken musluk soğuksa sorun kullanıcı ayarlarının dışında; yetkili servis."
  - q: "DemirDöküm kombide sıcak su nasıl açılır?"
    a: "Modele göre değişir. Nitromix'te mode tuşuyla kış ya da yaz konumu seçilir, sıcaklık ayar düğmesiyle değiştirilir, kaydetmek için düğmeye iki kez basılır ya da birkaç saniye beklenir. ademiX'te sıcak su sıcaklığı ayar düğmesiyle değiştirilir; düğmenin skalasında OFF, min ve max işaretleri var. vintomiX'te ana ekranda sıcaklık tuşuna iki kez basılınca sıcak su değeri görünür."
  - q: "DemirDöküm kombide sıcak su kaç derece olmalı?"
    a: "Nitromix'te sıcak su sıcaklığı 35 ile 65 °C, Atron Condense'te 35 ile 64 °C arasında ayarlanıyor. ademiX kılavuzu lejyoner bakterisi 60 °C'nin altında geliştiği için yetkili bayiye danışmadan su sıcaklığının 60 °C'nin altına ayarlanmamasını istiyor."
  - q: "Ekranda F.28 var, sıcak su gelmiyor; ne yapmalıyım?"
    a: "F.28 ateşleme arızası. Nitromix kılavuzuna göre önce gaz kesme vanasının açık olup olmadığı kontrol edilir, sonra reset tuşuna 1 saniye basılır; en fazla 3 deneme. Üç denemede gitmiyorsa yetkili bayiye başvurulur."
  - q: "Regler bağlıyken sıcak su ayarı nasıl yapılır?"
    a: "Nitromix ve ademiX kılavuzlarına göre regler bağlıysa önce üründe mümkün olan en yüksek sıcak su sıcaklığı ayarlanır, istenen sıcaklık regler üzerinden seçilir. Reglerin kendi kullanma kılavuzuna bak."
images:
  coverAlt: "Banyo lavabosunda açık duran bir musluk ve duvarda asılı beyaz bir kombi"
  steps:
    - "Pencereleri açık, sakin ve boş bir mutfak"
    - "Ekranı karanlık duran beyaz bir kombinin yakın planı"
    - "Kombi kumanda panelinde yan yana dizili sade tuşlar"
    - "Kombi panelinde yuvarlak bir ayar düğmesi"
    - "Banyo lavabosunda buhar yükselen açık bir musluk"
    - "Salon duvarında asılı, sade, beyaz bir oda termostatı"
    - "Kombinin altında borular arasında duran küçük bir kesme vanası"
    - "Kombinin yanında tezgâhta duran kapalı bir alet çantası ve katlanmış bir kullanma kılavuzu"
---

Petekler ısınıyor, ama musluktan sıcak su gelmiyor. Ya da kombi açık görünüyor, banyoda su hep soğuk. DemirDöküm'ün Nitromix, ademiX, vintomiX ve Atron Condense kullanma kılavuzlarında bu durumun ayrı bir satırı yok; ama dördü de sıcak su ayarını, çalışma konumlarını ve arıza tablosunu aynı mantıkla anlatıyor. Aşağıda servisi çağırmadan önce evde bakabileceğin her şeyi bu kılavuzlardan sırayla topladık. Tuş düzeni modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su yoksa ilk şüpheli ayar. Kombi açık mı, çalışma konumu doğru mu, sıcak su düğmesi OFF'ta mı, sıcaklık düşük mü, regler bağlı mı, soğuk su vanası açık mı? Ekranda F.22 ya da F.28 varsa önce onun tedbiri. Bunlar doğruysa DemirDöküm yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **Ekran kapalı** | Ürün kapalı ya da elektrik yok | 🛠️ Aç, sigortaya bak |
| **Musluk simgesi sürekli** | Sıcak su konumu devrede | Kombi hazır |
| **Musluk simgesi yanıp sönüyor** | Sıcak su konumu etkin ve musluk talebi var | Kombi suyu ısıtıyor |
| **F.22** | Tesisat basıncı çok düşük | 🛠️ Basınca bak, doldur |
| **F.28** | Ateşleme başarısız | 🛠️ Gaz vanası, reset; sürerse servis |

## Adım adım kontrol

**1. Gaz kokusu varsa hiçbir şeye dokunma.** Nitromix kılavuzunun emniyet bölümü açık: gaz kokusu olan yerde bulunma, kapı ve pencereleri aç, açık alevden uzak dur, sigara içme, elektrik şalterini, prizi, zili ve telefonu kullanma. Gaz sayacındaki kapatma düzeneğini kapat, diğer sakinleri uyar, binayı hemen terk et ve gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara.

**2. Kombi açık mı?** Arıza tablolarının ilk maddeleri basit: ürün kapalı olabilir ya da binadaki elektrik kesilmiş olabilir. Kılavuzun tedbiri ürünü çalıştırmak ve binadaki sigortayı kontrol etmek; elektrik gelince kombi kendiliğinden çalışmaya başlar.

**3. Çalışma konumu doğru mu? (Nitromix)** Nitromix'te **mode** tuşu çalışma konumunu seçer: **kış konumu, yaz konumu, bekleme**. Kılavuz kış konumunu gidiş suyu sıcaklığıyla, yaz konumunu **sıcak su sıcaklığıyla** tarif ediyor. Ekranda istediğin konum görünene kadar mode tuşuna bas.

**4. Sıcak su düğmesi OFF'ta mı? (ademiX)** ademiX'te sıcak su sıcaklığı bir ayar düğmesiyle değiştiriliyor ve düğmenin skalasında **OFF, min ve max** işaretleri var. Arıza tablosu da "sıcak su işletimi kapatılmış" durumunu ayrı bir neden sayıyor. Düğme OFF'taysa ya da en alttaysa yükselt.

**5. Sıcak su sıcaklığını kontrol et.** vintomiX'te ana ekranda sıcaklık tuşuna **iki kez** basınca ayarlı sıcak su değeri görünür; değiştirip onaylarsın, değer iki kez hızla yanıp söner. Nitromix'te ayar düğmesiyle değiştirip kaydetmek için düğmeye iki kez basıyor ya da birkaç saniye bekliyorsun. Ayar aralığı Nitromix'te **35–65 °C**, Atron Condense'te **35–64 °C**. ademiX kılavuzunun uyarısı: lejyoner bakterisi 60 °C'nin altında gelişir; yetkili bayiye danışmadan suyu 60 °C'nin altına ayarlama.

**6. Regler bağlı mı?** Kombiye bir oda termostatı ya da regler bağlıysa Nitromix ve ademiX kılavuzlarının tarifi aynı: üründe mümkün olan **en yüksek** sıcak su sıcaklığını ayarla, istediğin sıcaklığı reglerden seç. Reglerin kendi ayarı için onun kılavuzuna bak.

**7. Soğuk su vanası açık mı?** Arıza tablolarında "soğuk su devresi kapatma vanası kapalı" ayrı bir neden; tedbiri vanayı açmak. Nitromix kılavuzu vanaların yerini ve kullanımını kombiyi kuran yetkili servise sormanı öneriyor.

**8. Basınç, kodlar ve servis.** Nitromix'te soğuk sistemde basınç **1,0–1,5 bar** olmalı; 0,4 barın altına düşerse kombi kapanır ve ekranda **F.22** görünür, 1,0 barın altında sistem doldurulur. Ayrıntı [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) yazısında. **F.28** ateşleme arızasında önce gaz kesme vanasına bakılır, sonra reset tuşuna 1 saniye basılır; en fazla 3 deneme. Ayrıntı [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) yazısında. Ayarlar doğru, kalorifer çalışıyor, yine de musluk soğuksa ev turu bitmiştir.

## Ne zaman servis

- Çalışma konumu, sıcaklık, regler ve vana doğru olduğu hâlde musluğa sıcak su gelmiyorsa
- F.28 üç resetten sonra geri geliyorsa
- Basınç sık sık düşüyorsa
- Isıtma sisteminde hava varsa: Nitromix kılavuzu hava almayı yetkili servise bırakıyor

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, ayar düğmesi, regler ayarı, soğuk su vanası ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Nitromix, ademiX, vintomiX, Atron ya da başka)?
2. Ekranda bir F kodu var mı?
3. Petekler ısınıyor mu?
4. Regler bağlı mı?
5. Basınç soğukken kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ne sıcak su ne ısıtma varsa [DemirDöküm kombi çalışmıyor](/blog/demirdokum-kombi-calismiyor/) yazısına, ekran simgeleri için [DemirDöküm kombi sembolleri](/blog/demirdokum-kombi-sembolleri-ve-anlamlari/) sayfasına, marka bağımsız nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
