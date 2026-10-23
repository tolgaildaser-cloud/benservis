---
title: "Tineco suyu çekmiyor: emiş düştüyse ne yapmalı?"
description: "Tineco Floor One suyu çekmiyor, zeminde su bırakıyorsa kılavuzun sırası: kirli su deposu, filtre ve şamandıra, kuru filtre, gider kanalı, fırça silindiri."
slug: "tineco-suyu-cekmiyor"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco). origin/main 75980e0'da "tineco" geçen yazı/başlık/gövde yok. Genel supurge-cekmiyor var; Tineco ıslak kuru sorgusunu karşılamıyor.
# OT (#164, bu koşu) "tineco suyu": 1. **tineco suyu çekmiyor** (tek öneri) · "tineco çekmiyor": 1. tineco suyu çekmiyor · "tineco su": 2. tineco suyu çekmiyor · 4. tineco su bırakıyor ne yapmalıyım.
#   GSC: "tineco" satırı yok.
# Bağlantı zinciri (#88): https://www.tineco.com.tr/support/instruction-manual (HTTP 200) → PDF'ler HTTP 200 application/pdf:
#  (S3) md5 f213a3039964fd79aaabfc1bc20bf959 · (S5) md5 37b04f8b9c111a75db10822fdb0bc240 · (S7) md5 0f90da188c09fc019572fe2f34860afe · (IF3) md5 793240c7de9e5b322b7f625ddfbf9de4
# BİLEREK YAZILMAYANLAR: motor/pompa teşhisi · boru içi söküm (belge anlatmıyor) · fırça silindiri değişim dışı parça değişimi · fiyat (#46) · pazar.
# Alıntı denetim tablosu: tineco-suyu-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (kurutma süresi ayrı)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Cihazla gelen temizleme fırçası", "Musluk suyu", "Nemli bez veya mendil"]
steps:
  - "Cihazı kapat ve dik konuma getir."
  - "Kirli su deposunu çıkar, boşalt, temizleme fırçasıyla birikintiyi al ve içini durula."
  - "Depo kapağındaki filtreyi ve şamandırayı çıkarıp suyla durula."
  - "Kuru filtreyi iki yanından tutup çıkar, akan suyla durula ve tamamen kurut."
  - "Fırça silindirini çıkar, dolanan saçı al; haznesini ve açıklığını nemli bezle temizle."
  - "Bütün parçaları doğru yerine oturt; kirli su deposunu ve fırça kapağını tık sesiyle tak."
  - "Cihazı 142 dereceden fazla yatırmadan, gerekiyorsa emme modunda yeniden dene."
faq:
  - q: "Tineco neden zeminde su bırakıyor?"
    a: "Tineco kılavuzları emişin düşmesini en çok iki nedene bağlıyor: kuru filtrenin takılmamış ya da kirli olması (S3, S5, S7) ve gider kanalının tıkanması (iFloor 3). Kirli su deposu doluysa ya da kanal tıkalıysa ekrandaki kirli su göstergesi yanıp söner. Deposu, filtresi ve kanalı temiz bir cihazda S5'in seçili modellerindeki ve S7'nin emme modu ıslak zeminler için öneriliyor."
  - q: "Kuru filtreyi takmadan kullanabilir miyim?"
    a: "Hayır. S7 FlashDry kılavuzu kuru filtrenin kullanmadan önce takılmasını, aksi takdirde zayıf emişe neden olabileceğini yazıyor. S5 kılavuzunun güvenlik bölümü de filtresiz kullanmamanı istiyor."
  - q: "Cihazı kapattığımda biraz daha çalışıyor, normal mi?"
    a: "Evet. S5 ve S7 FlashDry kılavuzlarına göre cihaz, yüzeyde kalan suyu emmek için güç kapatıldıktan sonra 3 saniye daha çalışmaya devam eder."
  - q: "Köpüklü suyu çekebilir mi?"
    a: "Hayır. Floor One kılavuzları köpüklü sıvı emdirmemeni istiyor. Temiz su deposuna yalnızca bir şişe kapağı kadar Tineco solüsyonu konuyor."
images:
  coverAlt: "Islak fayans zeminde duran ıslak kuru dikey süpürge"
  steps:
    - "Dik konumda kapatılmış ıslak kuru süpürge"
    - "Lavabo üzerinde boşaltılan kirli su deposu"
    - "Akan su altında durulanan depo kapağı filtresi ve şamandıra"
    - "Havlu üzerinde kurumaya bırakılmış kuru filtre"
    - "Gövdeden çıkarılmış fırça silindiri ve temizleme fırçası"
    - "Gövdesine yeniden takılan şeffaf kirli su deposu"
    - "Hafif eğik tutulan süpürgenin fayans zeminde ilerlemesi"
---

Zeminden geçiyorsun ama arkanda ince bir su tabakası kalıyor; kirli su deposuna da pek bir şey gelmiyor. Tineco'nun Türkiye sitesindeki **Floor One S3, S5, S7 FlashDry** ve **iFloor 3** kılavuzları bunun için kısa bir liste veriyor: kirli su deposu, depo kapağındaki filtre ve şamandıra, kuru filtre, gider kanalı ve fırça silindiri. Bu yazı listeyi kılavuzdaki sırayla izliyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapat → kirli su deposunu boşalt ve durula → filtre ve şamandırayı durula → kuru filtreyi yıka, tamamen kurut → fırça silindirindeki saçı al → her parçayı doğru tak → yeniden dene. Kuru filtresiz çalıştırma; köpüklü sıvı çekme.

## Kılavuz ne diyor

| Belirti | Olası neden | Tineco'nun çözümü | Kaynak |
|---|---|---|---|
| Düşük emiş | Kuru filtre takılmamış ya da kirli | Kuru filtreyi tak ya da temizle, tamamen kurusun | S3, S5, S7, iFloor 3 |
| Düşük emiş | Gider kanalı tıkanmış | Gider kanalını ve kirli su deposunu temizle | iFloor 3 |
| Kirli su göstergesi yanıp sönüyor | Depo Max çizgisinde ya da kanal tıkalı | Boşalt, yeniden tak | S3, S5, S7 |
| Fırça silindiri göstergesi | Silindir engellenmiş | Tıkanıklığı gider | S5, S7 |

S3 ve iFloor 3 kılavuzlarının bakım notu, optimum performans ve kokuları önlemek için kirli su deposunu, şamandırayı, filtreleri, yıkama başlığını ve kapağını **her kullanımdan sonra** tamamen temizleyip kurulamanı istiyor. Emişi koruyan en kısa yol bu düzenli bakım.

## Adım adım: emişi geri getir

**1. Kapat.** Kılavuzların bakım bölümü yaralanma riskini azaltmak için bakımdan önce cihazı kapatmanı istiyor. Floor One dik konuma getirilince çalışmayı zaten durdurur.

**2. Kirli su deposunu boşalt.** Kirli su Max çizgisine ulaştığında cihaz çalışmayı durdurur, ekranda uyarı görünür ve sesli uyarı çalar. Depoyu çıkar, kapağını yukarı çekip boşalt, kalan birikintiyi **temizleme fırçasıyla** al ve içini durula. Tineco bunu yalnız uyarıda değil, koku oluşmaması için **her kullanımdan sonra** istiyor.

**3. Filtre ve şamandırayı durula.** S3 ve iFloor 3 kılavuzları: filtre ve şamandıra tıkanmışsa **suyla durula**; filtreyi depo kapağından, sonra şamandırayı çıkar ve ikisini de yıka. S5'te kirli su deposu kapağı ve içindeki filtre tıkanmışsa ikisini de çıkarıp suyla durula. S7 FlashDry'da kuru filtrenin yanında bir **atık ayırıcı** var; çıkarılıp akan suyun altında durulanabiliyor. Kılavuza göre işlevi katı atıkları ayırmak ve cihaz onsuz da normal çalışabiliyor.

**4. Kuru filtreyi yıka ve kurut.** Sorun giderme tablolarındaki "düşük emiş" satırının ortak nedeni bu. Kuru filtrenin iki yanındaki girintili alanı tutup yukarı çek, **akan su altında** durula ve kirli su deposu kapağıyla birleştirmeden önce **tamamen kuru** olsun. Kutudan yedek bir kuru filtre çıkıyor; biri kururken ötekini kullanabilirsin. Ayrıntılar [Tineco filtre temizliği](/blog/tineco-filtre-temizligi/) yazısında.

**5. Fırça silindirini temizle.** Silindiri tırnağından tutup çek, etrafına dolanan saçı ve birikintiyi temizleme fırçasıyla al, suyla durula. Silindir haznesindeki ve **açıklıktaki** kılları bir mendille ya da nemli bezle sil. Silindiri takmadan önce tamamen kurumasını bekle. iFloor 3 kılavuzu gider kanalının tıkanmasını düşük emiş nedeni sayıyor; kanalın kendisini temizleme yöntemini ayrıca anlatmıyor, açıklığa erişebildiğin kadarını temizle (çıkarım). Kendi kendini temizleme döngüsü de silindiri ve boruyu yıkıyor: [Tineco kendini temizleme](/blog/tineco-kendini-temizleme/).

**6. Doğru tak.** Kılavuzun bakım notu açık: her parçanın doğru takıldığından emin ol, **aksi takdirde cihaz düzgün çalışmayabilir.** Kirli su deposunu tık sesiyle yerine oturt; fırça silindiri kapağını sızıntıya karşı her zaman yerine bastır.

**7. Doğru açıyla ve doğru modda dene.** Floor One'ı **142 dereceden fazla yatırma**; S7 kılavuzu bunun suyun motora girmesini önlemek için olduğunu yazıyor. S7 FlashDry'da ve S5'in seçili modellerinde bir **emme modu** var: cihaz yalnız su çeker, püskürtme yapmaz ve bu mod ıslak zeminde öneriliyor. Cihazı kapattığında 3 saniye daha çalışması yüzeyde kalan suyu emmek içindir.

## Neleri çekme

Kılavuzların kuralları: **köpüklü sıvı** emdirme; benzin gibi yanıcı sıvıları toplama; yalnızca iç mekânda, vinil, fayans, sızdırmaz ahşap gibi halısız sert zeminlerde kullan. Temiz su deposuna yalnızca 60°C'nin altında su ve bir şişe kapağı kadar solüsyon koy.

Markadan bağımsız kontrol listesi için [süpürge çekmiyor](/blog/supurge-cekmiyor/), ekrandaki işaretler için [Tineco hata kodları](/blog/tineco-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

- Depo, filtre, şamandıra ve silindir temizken emiş dönmüyorsa.
- Motor arızası göstergesi yanıp sönüyorsa.
- Gövdeden su sızıyorsa ya da cihaz suya düştüyse.

⛔ **Kendin-çöz sınırı burada biter.** Depo, filtre, şamandıra ve silindir temizliği senin; motor, pompa ve elektronik Tineco yetkili servisinin. Gövdeyi açma, cihazı suya batırma.

## Servisi aramadan önce iki dakikalık özet

1. Model adı ne?
2. Kirli su göstergesi yanıp sönüyor mu?
3. Kuru filtre takılı, temiz ve kuru mu?
4. Fırça silindiri en son ne zaman temizlendi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
