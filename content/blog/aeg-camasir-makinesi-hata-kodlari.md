---
title: "AEG çamaşır makinesi hata kodları: E10, E20, E40, EF0"
description: "AEG çamaşır makinesinde E10 su almıyor, E20 boşaltmıyor, E40 kapak, E91 iletişim, EH0 voltaj, EF0 taşma koruması demek. Kılavuzdaki kontrol sırası."
slug: "aeg-camasir-makinesi-hata-kodlari"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W2 AEG). origin/main (08904bf) content/blog/'da AEG slug'ı ya da başlığı yok; "aeg" yalnız electrolux-firin-isinmiyor.md provenans yorumunda geçiyor (fırın ısınmıyor sorgusu bu kümede açılmadı).
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "aeg çamaşır makinesi h" → 2. "…hata kodlari ef0", 3. "aeg camasir makinesi hata kodlari"; "aeg çamaşır makinesi hata" → 1. "…hata kodlari ef0", 2. "…hata kodlari"; "aeg çamaşır makinesi e" → 2. "…e10 hatası", 3. "…e20 hatası". GSC: satır yok.
# Belge (#88). Zincir: https://www.aeg.co.uk/support/user-manuals/ (200) → "L7FEE945R" araması → PNC 914 550 524 (?q=914550524, 200) → en-GB User Manual (onay 2025-09-27)
#   → https://electrolux.bynder.com/asset/f59f0dd4-2098-4a05-a66e-b2a21165bb5c/9a54852a-a1da-412d-9554-4c128f1baa33-pdf.pdf (200, application/pdf, 1.162.503 bayt)
#  (W) AEG 7000 ProSteam L7FEE945R çamaşır makinesi kullanım kılavuzu, EN, 48 s., md5 b376496cb1bc885d8f2430be0d1c1acd — s.34, s.35, s.36, s.37, s.38
#  aeg.com.tr electrolux.com.tr'ye yönleniyor; AEG markalı Türkçe kılavuz yok. Kılavuzun İngilizce baskısı kullanıldı; alıntılar Türkçeye çevrildi, orijinaller KAYNAK'ta.
# Hub kuralı: E10 ve E20 bu sayfada tablo satırı. Tekil "e10 hatası" sayfası açılmadı; belirti sorguları ayrı yazılar (su almıyor / su boşaltmıyor).
# BİLEREK YAZILMAYANLAR: kılavuzda olmayan kodlara anlam (yalnız "diğer kodlar" kuralı) · valf, pompa motoru, kart teşhisi · "EFO" yazımının EF0 ile aynı olduğu iddiası yerine yalnız ekrandaki EF0 · fiyat (#46).
# Alıntı denetimi: aeg-camasir-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Geniş, alçak bir kap", "Emici bir bez", "Eski bir diş fırçası"]
steps:
  - "Ekrandaki kodu not al; Başlat/Duraklat düğmesinin yanıp söndüğüne bak, kontrole başlamadan makineyi kapat."
  - "E10 görüyorsan musluğun açık ve tıkalı olmadığını, su basıncının düşük olmadığını, giriş hortumunun bükülmediğini kontrol et."
  - "E10 sürüyorsa giriş hortumunu musluktan ve makineden sökerek hortum filtresini ve valf filtresini temizle."
  - "E20 görüyorsan gider ağzının tıkalı olmadığını, tahliye hortumunun bükülmediğini kontrol et ve pompa filtresini temizle."
  - "Suyla biten bir program ya da seçenek kullandıysan su boşaltma programını başlat."
  - "E40 görüyorsan kapağı tam kapat; E91'de makineyi kapatıp aç, EH0'da şebekenin düzelmesini bekle."
  - "EF0 görüyorsan fişi çek, musluğu kapat ve yetkili servisi ara."
faq:
  - q: "AEG çamaşır makinesinde E10 ne demek?"
    a: "AEG'nin kullanım kılavuzuna göre E10, makinenin düzgün su alamadığı anlamına geliyor. Kılavuz musluğun açık ve tıkalı olmadığını, su basıncının düşük olmadığını, giriş hortumunun bükülmediğini, hortum bağlantısının doğru olduğunu ve hortum ile valf filtrelerinin tıkalı olmadığını kontrol etmeni istiyor."
  - q: "E20 hatası neden çıkar?"
    a: "E20, makinenin suyu boşaltamadığını gösteriyor. Sırayla gider ağzına, tahliye hortumunun bükülüp bükülmediğine, pompa filtresine ve hortum bağlantısına bakılıyor. Suyla biten bir program ya da seçenek kullandıysan kılavuz su boşaltma programını başlatmanı söylüyor."
  - q: "EF0 kodu tehlikeli mi?"
    a: "EF0, taşma önleme düzeneğinin devreye girdiğini gösteriyor. AEG bu kodda evde çözüm önermiyor: makinenin fişini çek, musluğu kapat ve yetkili servisle iletişime geç."
  - q: "Kılavuzda olmayan bir kod görürsem ne yapmalıyım?"
    a: "AEG'nin kuralı tüm diğer kodlar için aynı: makineyi kapatıp yeniden aç. Sorun sürerse yetkili servise başvur. Servis için gereken bilgiler makinenin bilgi etiketinde yazıyor."
  - q: "Kontrolden sonra program baştan mı başlar?"
    a: "Hayır. Kılavuza göre kontrolden sonra makineyi yeniden açtığında program kesildiği yerden devam ediyor. Sorun tekrar ederse yetkili servise başvurman gerekiyor."
images:
  coverAlt: "Önden yüklemeli bir çamaşır makinesinin dijital ekranlı kontrol paneli"
  steps:
    - "Çamaşır makinesi kontrol panelinde yanıp sönen başlatma düğmesi"
    - "Çamaşır makinesinin arkasındaki duvarda bir su musluğu ve bağlı giriş hortumu"
    - "Musluktan sökülmüş giriş hortumunun ucundaki küçük süzgeç"
    - "Çamaşır makinesinin alt ön köşesindeki açık pompa kapağı ve önüne konmuş alçak bir kap"
    - "Çamaşır makinesinin program düğmesi ve panel üzerindeki seçenek tuşları"
    - "Kapalı bir çamaşır makinesi kapağının kenarı"
    - "Prizden çekilmiş bir fiş ve kapatılmış bir su musluğu"
---

AEG çamaşır makinesi çalışırken durdu, ekranda **E** ile başlayan bir kod var ve Başlat/Duraklat düğmesi yanıp sönüyor. AEG bu kodları kullanım kılavuzunun sorun giderme bölümünde tek tabloda topluyor. AEG'nin Türkiye adresi Electrolux sitesine yönlendiği için bu yazıda AEG'nin İngiltere sitesindeki kılavuz sayfasından indirdiğimiz 7000 ProSteam (L7FEE945R) kılavuzunun İngilizce baskısını kullandık; alıntılar bizim çevirimiz. Kodlar modele göre değişebilir; kendi kılavuzunla karşılaştır.

Olası arızayı benservis.com'daki ücretsiz teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** E10 su almıyor, E20 su boşaltmıyor, E40 kapak açık ya da tam kapanmamış, E91 elektronik parçalar arasında iletişim yok, EH0 şebeke dengesiz, EF0 taşma önleme düzeneği devrede. Listede olmayan bir kodda makineyi kapatıp aç; sürerse yetkili servis.

## Kodlar ve anlamları

Kılavuz, bazı sorunlarda ekranın bir uyarı kodu gösterdiğini ve Başlat/Duraklat düğmesinin sürekli yanıp sönebileceğini yazıyor. Kontrole başlamadan önce makineyi kapatmanı istiyor.

| Kod | AEG'ye göre anlamı | Kim ne yapar |
|---|---|---|
| **E10** | Makine düzgün su almıyor | 🛠️ Musluk, basınç, hortum, filtreler |
| **E20** | Makine suyu boşaltmıyor | 🛠️ Gider, tahliye hortumu, pompa filtresi |
| **E40** | Kapak açık ya da doğru kapanmamış | 🛠️ Kapağı tam kapat |
| **E91** | Elektronik parçalar arasında iletişim yok | 🛠️ Kapat-aç; tekrar ederse servis |
| **EH0** | Şebeke elektriği dengesiz | 🛠️ Şebekenin düzelmesini bekle |
| **EF0** | Taşma önleme düzeneği devrede | 🔧 Fişi çek, musluğu kapat, servis |
| **Diğer kodlar** | Belirtilmemiş | 🔧 Kapat-aç; sürerse servis |

## Adım adım: evde denenecekler

**1. Kodu oku, makineyi kapat.** Ekrandaki kodu bir yere yaz. Kılavuzun ilk uyarısı, herhangi bir kontrolden önce makineyi kapatman. Servisi araman gerekirse ilk soru bu kod olacak.

**2. E10'da su tarafına bak.** AEG'nin sırası şu: su musluğu açık mı, musluk tıkalı mı, su basıncı çok düşük mü? Basınç için kılavuz yerel su idaresine danışmanı öneriyor; evdeki diğer musluklarda da su zayıf akıyorsa sorun büyük olasılıkla şebekede (bu son cümle çıkarım). Ardından giriş hortumunda ezilme, hasar ya da bükülme olmadığını ve hortum bağlantısının doğru olduğunu kontrol et.

**3. E10 sürüyorsa filtreleri temizle.** Kılavuz giriş hortumunun filtresini ve valfin filtresini ayrı ayrı sayıyor. Hortumu musluktan söküp ucundaki filtreyi temizle. Sonra hortumu makinenin arkasından, rakor somununu gevşeterek çıkar ve arkadaki valf filtresini eski bir diş fırçasıyla temizle. Hortumu geri takarken dik konumda değil, musluğun yerine göre sola ya da sağa döndürerek bağla.

**4. E20'de gidere ve pompa filtresine bak.** E20, makinenin suyu boşaltamadığını gösteriyor. Önce lavabo altındaki gider ağzının tıkalı olmadığını ve tahliye hortumunun bükülmediğini kontrol et. Sonra makinenin fişini çek, su soğuduysa pompa kapağını aç, altına alçak bir kap koy ve filtreyi saat yönünün tersine yarım tur çevirerek suyu boşalt. Su bitince filtreyi çıkar, yuvasındaki hav ve cisimleri temizle, saat yönünde sıkıca geri tak. Ayrıntılı anlatım [AEG çamaşır makinesi su boşaltmıyor](/blog/aeg-camasir-makinesi-su-bosaltmiyor/) yazısında.

**5. Suyla biten bir program seçtiysen boşalt.** Kılavuz iki durumu ayrıca anıyor: boşaltma aşaması olmayan bir program ya da kazanda su bırakarak biten bir seçenek kullandıysan makine kodu bu yüzden gösterebilir. Bu durumda su boşaltma programını başlatman yeterli.

**6. E40, E91 ve EH0'da kısa kontroller.** E40'ta kapağın düzgün kapandığından emin ol; kazandaki bir çamaşır kapağı engelliyor olabilir. E91, programın düzgün bitmediğini ya da makinenin erken durduğunu gösteriyor: makineyi kapatıp yeniden aç. EH0'da şebeke dengesiz; kılavuzun tek önerisi elektriğin düzelmesini beklemek.

**7. EF0'da dur ve servisi ara.** EF0, taşma önleme düzeneğinin devrede olduğunu gösteriyor. AEG burada evde onarım önermiyor: makinenin fişini çek, musluğu kapat ve yetkili servisle iletişime geç. Makineyi bu kodla yeniden çalıştırmayı deneme.

## Kontrolden sonra

AEG'ye göre kontrolü bitirip makineyi yeniden açtığında program kesildiği yerden devam ediyor. Tabloda olmayan bir kod görürsen makineyi kapatıp aç; sorun sürerse yetkili servise başvur. Kod gösterilmeyen ama sık karşılaşılan iki belirtinin de kılavuzda karşılığı var: makine su alıp hemen boşaltıyorsa tahliye hortumu fazla alçakta olabilir, sıkma çalışmıyorsa pompa filtresi tıkalı olabilir ya da kazandaki yük dengesiz kalmış olabilir.

## Ne zaman servis

- EF0 göründüğünde, deneme yapmadan
- E91 makineyi kapatıp açtıktan sonra yeniden geliyorsa
- Filtreler ve hortumlar temiz olduğu hâlde E10 ya da E20 sürüyorsa
- Pompa filtresini çıkardığında pervane elle dönmüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumlar, hortum ve valf filtreleri, pompa filtresi sende; su giriş valfi, pompa motoru, elektronik kart ve taşma düzeneği AEG yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var?
2. Kod hangi aşamada çıktı: su alırken mi, boşaltırken mi?
3. Hortum ve pompa filtreleri temizlendi mi?
4. Bilgi etiketindeki model kodu ve ürün numarası (PNC) ne? AEG servis için bu bilgileri istiyor.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Su almama sorunu için [AEG çamaşır makinesi su almıyor](/blog/aeg-camasir-makinesi-su-almiyor/), kapak açılmıyorsa [AEG çamaşır makinesi kapak kilidi nasıl açılır](/blog/aeg-camasir-makinesi-kapak-kilidi-nasil-acilir/) rehberine bak. Bil, gör, çağır.
