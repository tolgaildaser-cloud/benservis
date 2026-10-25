---
title: "Hoover bulaşık makinesi resetleme nasıl yapılır?"
description: "Hoover bulaşık makinesinde çalışan programı iptal etme, SIFIRLA düğmesi, gecikmeli başlatmayı silme ve tuz göstergesini sıfırlama: kılavuzdaki adımlar."
slug: "hoover-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0 content/blog'da slug/başlık/gövde "hoover" grep 0 sonuç.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "hoover bulaşık makinesi" → 1. kendisi, 2. yorumlar, 3. resetleme. GSC: satır yok.
# Belge: Hoover HF 3E53E0W-17 ve HF 6C7F0X-17 kullanım kılavuzları (TR), hoover-home.com ürün sayfası → page-data.json → cloudfront PDF,
#   bu koşuda HTTP 200, md5 5f6058c164d737e0b2b1bd76de17483d ve 255d0c8bda1be774bc49b056d46103d0.
# BİLEREK YAZILMAYANLAR: gizli servis menüsü / fabrika sıfırlama kombinasyonu (belgede yok) · kart teşhisi · fiyat (#46).
#   Alıntı denetimi: hoover-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Panelinde SIFIRLA ya da BAŞLAT/SIFIRLA yazan düğmeyi bul; adı modele göre değişir."
  - "Çalışan programı iptal etmek için bu düğmeyi en az 3 saniye basılı tut ve sesli sinyalleri bekle."
  - "Program ışıkları sırayla yanıp sönüp durunca yeni programı seç ve deterjan bölmesini kontrol et."
  - "Gecikmeli başlatmayı silmek için geri sayım bitmeden aynı düğmeyi 3 saniye basılı tut."
  - "Tuz haznesini doldurduktan sonra tuz göstergesi sönene kadar SIFIRLA düğmesine birkaç saniye bas."
  - "Bir kodda takıldıysan makineyi kapat, fişi çek, bir dakika bekle ve yeniden bir program başlat."
  - "Aynı kod dönüyorsa kodu not edip yetkili servise bildir."
faq:
  - q: "Hoover bulaşık makinesi nasıl resetlenir?"
    a: "HF 3E53E0W-17 kılavuzuna göre çalışan bir programı değiştirmek ya da iptal etmek için SIFIRLA düğmesini en az 3 saniye basılı tutuyorsun. Birkaç sesli sinyal duyulur, program ışıkları sırayla yanıp söner; ardından yeni bir program seçebilirsin. Ekranlı HF 6C7F0X-17'de aynı işlem BAŞLAT/SIFIRLA düğmesiyle yapılıyor ve ekranda geri sayım görünüyor."
  - q: "Elektrik kesilirse program kaybolur mu?"
    a: "Kılavuza göre makine çalışırken elektrik kesilirse seçilen program özel bir hafızaya kaydedilir ve elektrik gelince kaldığı yerden devam eder."
  - q: "Tuz ışığı tuz koyduğum hâlde sönmüyor, ne yapmalıyım?"
    a: "Tuz sıfırlama düğmesi olan modellerde kılavuz tuz haznesini doldurduktan sonra ilgili ışık sönene kadar bu düğmeye birkaç saniye basmanı söylüyor. Hazneyi doldurmadan sıfırlarsan tuz ışığı doğru çalışmaz; hazneyi her zaman tamamen doldur."
  - q: "Ekransız modelde ışıklar hızla yanıp sönüyor, reset işe yarar mı?"
    a: "Kılavuza göre bu, program sırasında bir arıza olduğunu gösteriyor. Makineyi açma/kapatma düğmesiyle kapat, su musluğunun açık, boşaltma borusunun bükülmemiş, sifon ve filtrelerin temiz olduğunu kontrol et, sonra seçili programı yeniden ayarla. Sorun sürerse servis."
images:
  coverAlt: "Bulaşık makinesi kapağının üst kenarındaki düğmeler ve küçük gösterge ışıkları"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda deterjan bölmesi"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda tuz haznesinin vidalı kapağı"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Hoover bulaşık makinende yanlış programı başlattın, gecikmeli başlatma kurulu kaldı ya da makine bir hata kodunda takıldı. Çoğu kişi bu durumda "reset" arıyor. Hoover'ın HF 3E53E0W-17 ve HF 6C7F0X-17 modellerine ait Türkçe kullanım kılavuzları sıfırlamayı ayrı bir düğmeyle anlatıyor: çalışan programı iptal etmek, gecikmeli başlatmayı silmek ve tuz göstergesini sıfırlamak için. Bu yazıda bu yolları ve hata kodunda takılırsan ne yapacağını topladık. Kılavuzlar bu iki modele ait; senin makinende düğmenin adı ve yeri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çalışan programı iptal etmek için SIFIRLA ya da BAŞLAT/SIFIRLA düğmesini en az 3 saniye basılı tut. Gecikmeli başlatma da aynı yolla silinir. Tuz göstergesi, hazne dolunca ayrıca sıfırlanır. Bir kodda takıldıysan kapat, fişi çek, bir dakika bekle, yeniden başlat.

## Hangi sıfırlama sana lazım

| Durum | Kılavuzdaki yol |
|---|---|
| **Çalışan program değişecek ya da iptal edilecek** | SIFIRLA düğmesi en az 3 saniye |
| **Gecikmeli başlatma iptal edilecek** | Geri sayım bitmeden SIFIRLA en az 3 saniye |
| **Tuz ışığı yanıyor, hazne doldu** | Işık sönene kadar sıfırlama düğmesine birkaç saniye |
| **Makine bir kodda durdu** | Kapat, fişi çek, bir dakika bekle, yeniden başlat |
| **Elektrik kesildi** | Program hafızada, kaldığı yerden devam eder |

## Adım adım: makineyi sıfırlamak

**1. Düğmeyi bul.** HF 3E53E0W-17 kılavuzunda bu iş için **"SIFIRLA"** ve **"BAŞLAT/SIFIRLA"** adları geçiyor; ekranlı HF 6C7F0X-17'de ise **"BAŞLAT/SIFIRLA"** düğmesi kullanılıyor. Kendi panelinde benzer adlı düğmeyi bul. Bazı seçenekler ve düğmeler yalnız belirli modellerde var.

**2. Programı iptal et.** Kılavuzun "Çalışan bir programı değiştirme" bölümü: **"SIFIRLA" düğmesini en az 3 saniye basılı tutun. Birkaç sesli sinyal duyulacak ve program gösterge ışıkları ayrı ayrı ve sırayla açılıp kapanacaktır.** Ardından "EKO" programının ya da kayıtlı programın ışığı yanıp söner ve yeni bir program ayarlanabilir. Ekranlı modelde düğme basılıyken ekranda **"3-2-1" geri sayımı** görünür, sonra ekranda "SIFIRLA" yazar ve bip sesleri duyulur.

**3. Yeni programı başlat.** Kılavuzun uyarısı: **yeni bir program başlatmadan önce bölmede hâlâ deterjan olup olmadığını kontrol etmelisin; gerekirse dağıtıcıyı doldur.** İptal edilen program deterjanı çoktan kullanmış olabilir. Programı seçip başlat düğmesine bastıktan sonra kapak kapatılınca sesli bir sinyal duyulur ve program kendiliğinden başlar.

**4. Gecikmeli başlatmayı sil.** Kılavuza göre geri sayım bitmemiş ve program henüz başlamamışsa gecikmeli başlatma değiştirilebilir ya da iptal edilebilir: **SIFIRLA düğmesini en az 3 saniye basılı tut.** Sesli sinyaller duyulur, gecikmeli başlatma ve seçilen program iptal edilir, program ışıkları yanıp söner ve makine yeni programa hazır olur.

**5. Tuz göstergesini sıfırla.** Tuz sıfırlama düğmesi olan modellerde kılavuzun tarifi: **tuz haznesini yeniden doldurduktan sonra ilgili gösterge ışığı sönene kadar bu düğmeye birkaç saniye bas.** Uyarı da açık: hazneyi doldurmadan sıfırlarsan **tuz gösterge ışığı doğru çalışmaz**. Doğru çalışması için tuz kabını her zaman tamamen doldur.

**6. Koddan sonra yeniden başlat.** Hata tablosunun "diğer kodlar" satırı: **bulaşık makinesini kapatın ve fişini çekin, bir dakika bekleyin. Makineyi açın ve bir program başlatın.** Ekransız modelde program sırasında seçili programın ışığı hızla yanıp sönüyor ve kesik bir ses duyuluyorsa, makineyi açma/kapatma düğmesiyle kapat; su kaynağının açık, boşaltma borusunun bükülmemiş, sifon ve filtrelerin tıkalı olmadığını kontrol edip programı yeniden ayarla. Kodların anlamı [Hoover bulaşık makinesi hata kodları](/blog/hoover-bulasik-makinesi-hata-kodlari/) yazısında.

**7. Dönüyorsa servis.** Aynı satırın son cümlesi: **hata tekrar meydana gelirse Yetkili Müşteri Hizmetleri Merkezi ile iletişime geçin.** Kılavuzda bunun ötesinde gizli bir sıfırlama ya da servis menüsü tarifi yok; internette dolaşan tuş kombinasyonlarını deneme.

## Elektrik kesilirse ve ayarlar

HF 3E53E0W-17 kılavuzuna göre makine çalışırken elektrik kesilirse **seçilen programı özel bir hafızaya kaydeder ve elektrik geldiğinde kaldığı yerden devam eder**. Yani kısa bir kesintiden sonra programı yeniden seçmen gerekmez. Ayarlar menüsü ise ayrı bir konu: kireç sökücü seviyesi, sesli uyarı ve hafıza fonksiyonu buradan değişiyor. Kılavuz bu menüye girmeden önce makinenin daima kapalı olmasını istiyor. Çocuk kilidi açıksa yalnız açma/kapatma düğmesi aktif kalır; kilit, ilgili düğmeye yaklaşık 5 saniye basılarak kaldırılır.

## Ne zaman servis

- SIFIRLA'dan sonra program ışıkları hiç tepki vermiyorsa
- Fişi çekip bekledikten sonra aynı kod geri geliyorsa
- Makinenin içinde su kalmış ve boşaltmıyorsa
- Sigorta makineyi her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, fiş, filtreler ve tuz haznesi sende; kart, pompa, ısıtma elemanı ve kasanın içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (tip etiketinde yazar)?
2. Ekranda hangi kod ya da hangi ışık var?
3. SIFIRLA düğmesini 3 saniye basılı tuttun mu?
4. Fişi çekip bir dakika bekledin mi?
5. Filtreleri ve hortumları kontrol ettin mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Su gelmiyorsa [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısına bak. Bil, gör, çağır.
