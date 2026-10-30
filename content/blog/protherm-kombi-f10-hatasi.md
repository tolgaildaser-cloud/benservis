---
title: "Protherm kombi F10 hatası: sistem basıncı ve su doldurma"
description: "Protherm Gepard kombide F10, ısıtma sisteminde yetersiz su demek. Kılavuza göre basınç kontrolü, su doldurma, hava alma adımları ve servis sınırı."
slug: "protherm-kombi-f10-hatasi"
date: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P02 (YK #197 boşluk 2. dalga, BOSLUK.md #80: "Protherm kombi F1 arızası / F10 / F14 hatası"). Satırdan tek konu seçildi: F10. F1 ve F14 yazılmadı: Gepard Condens ve Puma Condens kılavuzlarında bu kodlar yok. Slug origin/main'de yok. Yakın yazılar: protherm-kombi-ariza-kodlari (F10 yalnız SSS'de), protherm-kombi-f22-hatasi (Puma/Lynx karşılığı).
# Kaynak (#88): Protherm Gepard Condens 20/24 KTV-FC/3 (H-TR) kullanma kılavuzu 0020281180_03, 16 s., md5 e007ac08696eee927eb59ddd827dfb63 (F10: s.9, 10, 13). Karşılaştırma: Puma Condens 24/24, 28/28 kullanma kılavuzu 8000037577_02, 16 s., md5 a132a92b1c90a1fe3a04fb6af89ea575 (F.22: s.10, 12). Dosyalar protherm.com.tr'den 5 Eki 2026'da indirilmiş yerel kopyadan alındı, md5 doğrulandı. URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: yüksek basınç için adım (Gepard kılavuzu F10'u "aralığın dışında" diye tanımlıyor, çözüm tablosu yalnız yetersiz suyu veriyor) · hava almanın kılavuzdaki iki farklı anlatımı dışında yorum · kaçak, genleşme tankı, emniyet ventili (servis) · ücret (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bez"]
steps:
  - "Ekrandaki kodu ve sistem basıncını not et; basınç göstergesi ana ekranda görünür."
  - "Basıncı kılavuzdaki aralıkla karşılaştır; aralığın altındaysa su doldurmaya geç."
  - "Isıtma sisteminin tüm radyatör vanalarını, termostatik vanalar dahil, aç."
  - "Soğuk su borusundaki doldurma vanasını sola çevirerek aç ve gerekli basınca gelene kadar su ekle."
  - "Doldurma vanasını sağa çevirerek kapat."
  - "Tüm radyatörlerin havasını al."
  - "Ekranda basıncı yeniden kontrol et; gerekirse su takviyesini tekrarla."
faq:
  - q: "Protherm kombide F10 ne demek?"
    a: "Protherm Gepard Condens kullanma kılavuzunun arıza tablosunda F10, ısıtma sisteminde yetersiz su anlamına geliyor. Kılavuz ayrıca tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülendiğini yazıyor."
  - q: "Protherm kombide F1 ve F14 hatası var mı?"
    a: "Gepard Condens ve Puma Condens kullanma kılavuzlarında F1 ve F14 kodu yok. Gepard'daki kodlar F10, F04 ve F05; Puma'da F.22 ve F.28. Ekranında başka bir kod görüyorsan kodu ve kombinin modelini yetkili servise bildir."
  - q: "F10 ile F.22 aynı şey mi?"
    a: "İkisi de kılavuzlarda sistem basıncı sorunu olarak geçiyor. Gepard kılavuzu F10'u, Puma kılavuzu F.22'yi tanımlıyor; F.22 Puma'da tesisat basıncı çok düşük anlamına geliyor. Model farkına göre ekranda hangi kodun çıktığına bak."
  - q: "Su doldurduktan sonra F10 gitmezse ne yapmalıyım?"
    a: "Kılavuz bu durum için yeni bir adım vermiyor. Genel kural, arıza giderilemiyorsa yetkili servise başvurmak. Kılavuzun bakım bölümü kendi başına bakım ve onarım yapmamanı da istiyor."
images:
  coverAlt: "Duvara asılı jenerik beyaz kombinin dijital ekranında bir arıza kodu, altında yuvarlak basınç göstergesi ve mavi doldurma vanası"
  steps:
    - "Kombinin dijital ekranını gösteren beyaz eldivenli sade siluet el, ekranda soyut bir kod ve basınç çubuğu"
    - "Yuvarlak basınç göstergesini işaret eden beyaz eldivenli sade siluet el, ibre alt bölgede"
    - "Radyatörün yan tarafındaki termostatik vanayı açık konuma çeviren beyaz eldivenli sade siluet el"
    - "Soğuk su borusundaki mavi doldurma vanasını sola çeviren beyaz eldivenli sade siluet el, yanında yükselen ibreli gösterge"
    - "Mavi doldurma vanasını sağa çevirerek kapatan beyaz eldivenli sade siluet el, gösterge yeşil bölgede"
    - "Radyatörün üst köşesindeki hava alma vidasının altında bez tutan beyaz eldivenli sade siluet el"
    - "Kombi ekranındaki basınç değerine yeniden bakan beyaz eldivenli sade siluet el"
---

Protherm kombinin ekranında **F10** görüyorsan Protherm'in kullanma kılavuzundaki karşılığı net: **ısıtma sisteminde yetersiz su.** Yani asıl konu bir elektronik arıza değil, tesisat basıncı. Bu yazı Protherm Gepard Condens kullanma kılavuzuna dayanıyor. Karşılaştırma için Puma Condens kılavuzuna da baktık. Kılavuzdaki adımlar kullanıcıya su doldurmayı bırakıyor; bu yazıda o adımları sırasıyla veriyoruz.

> ⚠️ **Sınır:** Su doldurmak kullanıcı işidir. Kılavuza göre ürün üzerinde, gaz, hava, su ve elektrik hatlarında, atık gaz sisteminde ve emniyet ventilinde değişiklik yapılmaz; kendi başına bakım ya da onarım da yapılmaz. Atık gaz kokusu varsa erişebildiğin tüm kapı ve pencereleri aç, ürünü kapat ve yetkili servisi bilgilendir.

## F10 ne demek?

Gepard Condens kılavuzunun arıza giderme tablosunda F10'un nedeni "sistem basıncı yeterli değil", yani ısıtma sisteminde yetersiz su. Tedbir sütunu tek cümle: ısıtma sistemini doldurun. Kılavuzun işletim bölümü de aynı konuyu başka yerden anlatıyor: ürünün basınç sensörü ve dijital basınç göstergesi var, tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görünür.

Kılavuzdaki sayılar şöyle:

| Durum | Gepard kılavuzundaki değer |
|---|---|
| Öngörülen basınç aralığı | 1,0 ile 2,0 bar |
| Doldurma gerektiren değer | 0,80 barın altı |

Ayrıca kılavuz, ısıtma sistemi birden fazla kata dağıldığında daha yüksek sistem basıncı gerekebileceğini ve bu konuda yetkili servise danışılmasını söylüyor.

## Adım adım: basıncı kontrol et ve su doldur

**1. Kodu ve basıncı not et.** Gepard kılavuzuna göre ana ekranda sistem basıncı, çalışma konumu ve ilave bilgiler görünür; arıza mesajı varsa ana ekranda arıza kodu çıkar. Ekranda F10 ve basınç değerini yaz.

**2. Basıncı karşılaştır.** Kılavuz iki sonuç veriyor: basınç 1,0 ile 2,0 bar arasındaysa öngörülen aralıktadır; 0,80 barın altındaysa ısıtma sistemini doldurman gerekir.

**3. Radyatör vanalarını aç.** Kılavuzun doldurma bölümü, ısıtma sisteminin tüm radyatör vanalarının, termostatik vanalar dahil, açılmasıyla başlıyor.

**4. Doldurma vanasını aç.** Soğuk su borusundaki doldurma vanasını sola çevir ve gerekli tesisat basıncına ulaşana kadar su takviyesi yap. Kılavuz hedef olarak yine 1,0 ile 2,0 barı veriyor. Kılavuzda ilk dolumdan yetkili bayinin sorumlu olduğu da yazıyor.

**5. Doldurma vanasını kapat.** Soğuk su borusundaki doldurma vanasını sağa çevirerek kapat.

**6. Radyatörlerin havasını al.** Doldurma bölümünün beşinci maddesi bu: tüm radyatörlerin havasını al. Arıza giderme tablosundaki "ısıtma sisteminde hava var" satırında ise havanın yetkili servis tarafından aldırılması isteniyor. İki yerde farklı anlatılıyor; kendin almak istiyorsan radyatör için [petek havası nasıl alınır](/blog/petek-havasi-nasil-alinir/) yazısındaki adımlara bak, emin değilsen servise bırak.

**7. Basıncı yeniden kontrol et.** Ekranda sistem basıncına bak. Kılavuz gerekirse su takviyesi yapmanı ve ilk beş adımı tekrarlamanı istiyor.

## Hangi su doldurulur?

Gepard kılavuzu ısıtma sistemine yalnız uygun ısıtma suyu doldurulmasını istiyor. Gerekçesi yazılı: çok kireçli, aşırı korozif ya da kimyasal içeren su contalara ve diyaframlara zarar verir, su geçen parçaları tıkar ve ses yapar. Hangi suyun uygun olduğundan emin değilsen yetkili bayiye sor.

## Puma'da kod farklı

Puma Condens kılavuzunda aynı durumun adı **F.22**: tesisat basıncı çok düşük. Tedbir sırası da benzer: dolum basıncını kontrol et, ısıtma sistemini doldur. Puma modelinde F.22 görüyorsan [Protherm kombi F22 hatası](/blog/protherm-kombi-f22-hatasi/) yazısına bak. Diğer Protherm kodları için [Protherm kombi arıza kodları](/blog/protherm-kombi-ariza-kodlari/) listesi var.

## Gepard'da öteki iki kod

Aynı tabloda iki kod daha var. **F04**: doğalgazda üç başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer; kılavuz Reset tuşuna basmanı söylüyor ve ateşleme arızasını üç arıza giderme denemesiyle gideremiyorsan yetkili servise başvurmanı istiyor. **F05**: atık gaz hattında arıza var; kılavuz burada kullanıcıya adım vermiyor, arızanın yetkili servisçe giderilmesini istiyor. Yani F10'dan farklı olarak bu ikisinde su doldurmak çözüm değil.

## Yıllık kontrol ve bakım

Gepard kılavuzu, ürünün sürekli çalışmaya hazır olması ve çalışma güvenliği için yetkili teknik servisin yıllık kontrol ve iki yılda bir bakım yapmasını ön şart sayıyor. Basınç sorunlarını sık yaşıyorsan bu kontrolü ertelememek mantıklı.

## F10 gitmiyorsa

Su doldurduktan sonra F10 geri geliyor ya da basınç sürekli düşüyorsa kılavuz yeni bir adım vermiyor; kendi başına bakım ve onarım yapmamanı, arıza ve hasarların hemen yetkili bir teknik servise giderttirilmesini istiyor. Kılavuza göre ürünün yetkili servis seviyesini yalnız yetkili servis kullanabilir ve bu seviye bir kodla korunur; yani arızanın derin ayarları kullanıcıya açık değildir. Basıncın neden düştüğünü [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısında ayrıca anlattık. Servisi aramadan önce şunları not et: kombinin modeli, ekrandaki kod, soğukken okuduğun basınç ve en son ne zaman su eklediğin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
