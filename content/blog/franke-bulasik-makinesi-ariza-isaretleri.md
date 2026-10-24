---
title: "Franke bulaşık makinesi arıza işaretleri: F3, F6, F9, F15"
description: "Franke bulaşık makinesi arıza işaretleri ve hata kodları: F3, F6, F9, F12, F15, su musluğu, tuz ve parlatıcı ışığı, dOF ve END ne demek. Kılavuzdaki çözüm."
slug: "franke-bulasik-makinesi-ariza-isaretleri"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X3). origin/main b4098f8'de "franke" slug/başlık yok; genel bulasik-makinesi-hata-kodlari hub'ında Franke satırı yok.
# Arama kanıtı (bu koşu 12:44, hl=tr gl=tr): "franke bulaşık makinesi a" → 1. "…arıza işaretleri"; "franke bulaşık makinesi h" → 1. "…hata kodları". GSC: satır yok.
# Hub kuralı: Franke kodları tek sayfada; tekil kod sayfası açılmadı.
# Belge zinciri: franke.com/tr/tr ürün sayfası (200) → "Kullanım Kılavuzu" → hana.ondemand.com PDF (200).
#  (F1) FDWS 614 D8P DOS E (117.0612.358), TR PDF s.25–36, md5 a6dbab00014a8325ae104e0f532032d5
#  (F2) FDW 614 D6P DOS E (117.0629.499), TR PDF s.36–47, md5 def5e5f8688e8a95f6aeac74505432ce
# BİLEREK YAZILMAYANLAR: E1/E3/E4/H3 gibi otomatik tamamlamada görülen ama bu iki kılavuzda olmayan kodlar · kart/pompa teşhisi · fiyat (#46).
# Alıntı denetimi: franke-bulasik-makinesi-ariza-isaretleri.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Metal olmayan küçük fırça"]
steps:
  - "Ekrandaki kodu ve yanıp sönen LED'leri not et, modelini veri plakasından oku."
  - "F6 ya da H ile 6 varsa musluğu, bükülmüş giriş hortumunu ve hortum süzgecini kontrol et."
  - "F3 ya da 3 varsa çevrimin bitmesini bekle, tahliye hortumunu ve lavabo giderini kontrol et."
  - "Tahliye sorununda filtre donanımını çıkarıp akan suyun altında temizle."
  - "F15 ya da 15 varsa tahliye hortumunun yüksekliğini ve sifonlamayı kontrol et."
  - "F9 ya da F12 varsa makineyi kapat, bir dakika sonra aç; sürerse fişi bir dakika çek."
  - "Kod geri geliyorsa model ve seri numarasıyla Franke yetkili servisini ara."
faq:
  - q: "Franke bulaşık makinesinde F6 ne demek?"
    a: "FDWS 614 D8P kılavuzunda F6, Açık/Kapalı ve BAŞLAT/Duraklat LED'lerinin hızlı yanıp sönmesiyle birlikte 'bulaşık makinesi su almıyor' satırında. Sebepler: şebekede su yok ya da musluk kapalı, giriş hortumu bükülmüş, giriş hortumundaki süzgeç tıkalı. FDW 614 D6P'de aynı durumda ekranda H ve 6 görünüyor."
  - q: "F3 hatası nasıl giderilir?"
    a: "F3 'boşaltma işlemi yapmıyor' satırında. Önce çevrimin gerçekten bitip bitmediğine bak, sonra tahliye hortumunun bükülmediğini, lavabo boşaltma borusunun tıkalı olmadığını kontrol et ve filtreyi temizle. FDW 614 D6P'de bu kod ekranda yalnız 3 olarak görünüyor."
  - q: "F15 hatası neden çıkar?"
    a: "Kılavuzda F15, makinenin çevrimi vaktinden önce sonlandırdığı satırda. Olası sebepler boşaltma hortumunun çok alçakta olması ya da ev atık su sistemine sifonlama yapması, bir de su şebekesinde hava olması. Kılavuz gerekirse hava giriş valfi takılmasını öneriyor; bu montaj işi tesisatçının ya da servisin."
  - q: "Ekranda E1, E3 ya da H3 görüyorum, anlamı ne?"
    a: "Bu kodlar incelediğimiz iki Franke kılavuzunda (FDWS 614 D8P ve FDW 614 D6P) geçmiyor. Kendi modelinin kılavuzuna bak; orada da yoksa kodu ve model numarasını Franke yetkili servisine bildir. Anlam tahmin etmiyoruz."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin üst kenarında yanan gösterge ışıkları"
  steps:
    - "Bulaşık makinesi kapağının iç kenarındaki veri plakası"
    - "Lavabo altında açık konumdaki su musluğu ve giriş hortumu"
    - "Lavabo altındaki gider borusuna bağlı tahliye hortumu"
    - "Bulaşık makinesinin tabanından çıkarılmış silindirik filtre"
    - "Tezgâh altından duvardaki gidere yükselen tahliye hortumu"
    - "Gösterge ışıkları yanıp sönen bir bulaşık makinesi paneli"
    - "Tezgâh üzerinde duran bir telefon ve yanında kullanım kılavuzu"
---

Franke bulaşık makinenin ekranında bir harf ve sayı yanıp sönüyor, yanında da bir ya da iki LED hızla yanıp sönüyor. Bu işaretlerin anlamı Franke'nin Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda yazıyor. Bu yazı FDWS 614 D8P DOS E ve FDW 614 D6P DOS E kılavuzlarına dayanıyor. İki modelde aynı arıza ekranda farklı yazılıyor; senin modelin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F6 (ya da H, 6): su yok, musluk, hortum, süzgeç. F3 (ya da 3): su boşalmıyor, hortum, gider, filtre. F15 (ya da 15): hortum çok alçak ya da sifonlama. F9, F12 (ya da 9, 12): kapat, bir dakika bekle, aç. END: program bitti.

## Kodlar ve ışıklar tek tabloda

FDWS 614 D8P'de kodla birlikte hem Açık/Kapalı hem BAŞLAT/Duraklat LED'leri hızlı yanıp sönüyor. FDW 614 D6P'de kod harfsiz yazılıyor ve yalnız Açık/Kapalı LED'i yanıp sönüyor.

| FDWS 614 D8P | FDW 614 D6P | Kılavuzdaki anlam | Kim |
|---|---|---|---|
| **F6** | **H, 6** | Su almıyor | 🛠️ Sen |
| **F3** | **3** | Boşaltma yapmıyor | 🛠️ Sen |
| **F15** | **15** | Çevrimi vaktinden önce bitiriyor | 🛠️ Sen / 🔧 Tesisat |
| **F9, F12** | **9, 12** | Komutlara yanıt vermiyor | ⏳ Bekle |
| **END** | Program numarası yanıp söner | Yıkama bitti | ✅ Normal |
| Su musluğu kapalı ışığı | – | Su yok ya da musluk kapalı | 🛠️ Sen |
| Tuz, parlatıcı ışığı | Tuz, parlatıcı ışığı | Hazne boş | 🛠️ Sen |

## Adım adım: Franke arıza işaretini çözme

**1. Kodu ve modeli not et.** Hangi kodun göründüğünü, hangi LED'lerin yanıp söndüğünü yaz. Modelini ve seri numaranı kapağın iç kenarındaki veri plakasından oku. Hangi satıra bakacağın buna göre değişiyor.

**2. F6 ya da H, 6: su gelmiyor.** Kılavuzun sırası: şebekede su olduğundan ya da **musluğun çalıştığından emin olun**; giriş hortumunun bükülmediğine bak; giriş hortumundaki süzgeç tıkalıysa temizle. Ardından makineyi kapatıp aç ve yeni bir program başlat. FDWS 614 D8P'de ayrıca bir **su musluğu kapalı** gösterge ışığı var; giriş suyu olmadığında ya da musluk kapalıyken yanıp sönüyor.

**3. F3 ya da 3: su boşalmıyor.** İlk ihtimal sade: yıkama çevrimi henüz bitmemiş, kılavuz bitmesini beklemeni söylüyor. Bitmişse tahliye hortumunun bükülü olmadığını ve lavabo boşaltma borusunun tıkalı olmadığını kontrol et.

**4. Filtreyi temizle.** F3 satırının son sebebi yiyecek artıklarıyla tıkanmış filtre. Kılavuza göre filtre donanımı üç parçadan oluşuyor; silindirik filtreyi saat yönünün tersine çevirip çıkarıyor, tas şeklindeki filtreyi ve paslanmaz çelik plaka filtreyi ayırıyorsun. Metal olmayan bir fırçayla akan suyun altında yıka. Kılavuzun uyarısı açık: **Yıkama çevrimi pompa korumasını (siyah ayrıntı) ASLA ÇIKARMAYIN.**

**5. F15 ya da 15: çevrim erken bitiyor.** Kılavuzdaki olası sebep, boşaltma hortumunun çok alçak konuma yerleştirilmesi ya da ev atık su sistemine sifonlama yapması. Hortum ucunun doğru yükseklikte olup olmadığına bak; montaj bölümünde çıkış bağlantısının zeminden 40 ila 80 cm yükseklikte olması isteniyor. Kılavuz gerekirse hava giriş valfi takılmasını öneriyor; bu iş tesisatçının ya da servisin. Şebekedeki hava ve sızıntılar da bu satırda.

**6. F9, F12 ya da 9, 12: makine yanıt vermiyor.** Çözüm: **AÇIK/KAPALI düğmesine basarak cihazı kapatın, yaklaşık bir dakika sonra tekrar açın ve programı yeniden başlatın.** Sorun sürerse fişi bir dakika çekip tak. Ayrıntılı sıfırlama sırası [Franke bulaşık makinesi resetleme](/blog/franke-bulasik-makinesi-resetleme/) yazısında.

**7. Geri geliyorsa servis.** Kılavuz bu listede olmayan hatalar için garanti kitapçığındaki yetkili Satış Sonrası Servisi gösteriyor. Ararken arızanın türünü, modeli (Art./Cod.) ve seri numarasını (S.N.) bildir.

## Arıza sanılan diğer işaretler

**END** ya da yanıp sönen program numarası yıkamanın bittiğini gösteriyor. FDWS 614 D8P'de ekranda **dOF** görüyorsan makine demo modundan çıkıyor; **oOF** ya da **oOn** CoolDry kurutma işlevinin kapatıldığını ya da açıldığını gösteriyor.

Bir seçeneğe bastığında ilgili LED **3 kez hızlı yanıp sönüp** bip sesi geliyorsa o seçenek seçtiğin programla uyumlu değil, etkinleşmiyor. FDWS 614 D8P'de Hijyenik Durulama seçiliyken kapağı açarsan gösterge lambası yanıp sönmeye başlıyor; bu da arıza değil.

Tuz ve parlatıcı ışıkları hazne boşaldığında yanıyor. Kılavuza göre doldurduktan sonra birkaç yıkama boyunca yanmaya devam edebiliyorlar. Doz ayarları için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bakabilirsin.

## Ne zaman servis

- Musluk, hortum ve süzgeç temizken F6 sürüyorsa
- Filtre ve gider temizken F3 sürüyorsa
- Bir dakika ve fiş denemesinden sonra F9 ya da F12 geri geliyorsa
- Makine sigorta attırıyorsa ya da altından su geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, süzgeç ve filtre sende; pompa, ventil, kart ve tesisat değişikliği servisin işi.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var, hangi LED'ler yanıp sönüyor?
2. Modelin ve seri numaran ne?
3. Musluk açık mı, giriş hortumu bükülü mü?
4. Filtreyi temizledin mi, tahliye hortumu düzgün mü?
5. Bir dakika kapatıp açtın mı, fişi çektin mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
