---
title: "Miele bulaşık makinesi hata kodları: F11, F13, F70, F78"
description: "Miele bulaşık makinesinde F11 su tahliyesi, F12/F13 su girişi, F70 Waterproof, F78 sirkülasyon pompası demek. Kılavuzdaki anlamlar ve evde yapılacaklar."
slug: "miele-bulasik-makinesi-hata-kodlari"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M2 Miele+Candy). origin/main'de "miele" geçen blog sayfası yok (slug + başlık + gövde grep'i boş; yalnız src/ marka listeleri).
# Arama kanıtı (#164, bu koşu, Google otomatik tamamlama hl=tr gl=tr): "miele bulaşık makinesi h" → 1. "miele bulaşık makinesi hata kodları"; "miele bulaşık makinesi f" → 2. "…f70 hatası", 3. "…f24 hatası". GSC: satır yok.
# Belgeler (#88, Miele Türkiye kılavuz portalı; zincir https://www.miele.com.tr/f/tr/manuals-tr.aspx (200) → model araması → PDF ?mNo=…&asDownload=1 (200, application/pdf)).
#  (G5) G 5000 Active kullanım kılavuzu tr-TR M.-Nr. 11 520 981, 92 s., md5 26a94e72ea5df277275c219bf7ad810c
#  (G7) G 7110 SC Front AutoDos kullanım kılavuzu tr-TR M.-Nr. 11 837 701, 120 s., md5 77158481c5a6b1aa7ed5a74f7ad45a4b
#  Not: miele.com.tr curl'e 403 veriyor (bot engeli); PDF'ler bu koşuda tarayıcıdan indirildi, md5 tarayıcıda SparkMD5 ile ölçüldü.
#  Kod okuması: G5 tablolarındaki kodlar ekran yazı tipinde (PUA glif); sayfalar görüntü olarak açılıp okundu (s.73 F70, F78 · s.74 F/13, F12, F13, F18 · s.75 F11). G7'de aynı kodlar düz metin (s.94, s.96).
# BİLEREK YAZILMAYANLAR: F14, F24 vb. için anlam (belgede yok; genel kural verildi) · parça teşhisi (valf, pompa motoru, kart) · su giderini havalandırma işi (kurulum, uzman) · fiyat (#46).
# Alıntı denetimi: miele-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Pense", "Küçük bir kap", "Bulaşık fırçası", "Havlu"]
steps:
  - "Ekrandaki kodu not al ve bulaşık makinesinin gücünü açma/kapama tuşuyla kapat."
  - "Ekranda F ile 13 dönüşümlü yanıyorsa makineye su veren musluğu sonuna kadar aç."
  - "F12 ya da F13 sürüyorsa fişi çek, musluğu kapat, su giriş valfini sök ve vidalı bağlantıdaki süzgeci sıcak suyla yıka."
  - "F11 görüyorsan yıkama kabininin tabanındaki süzgeç kombinasyonunu ve mikro filtreyi çıkarıp akan sıcak suyla temizle."
  - "F11 sürüyorsa fişi çek, kabindeki suyu küçük bir kapla al, boşaltma pompası kapağını çıkar ve pompadaki yabancı maddeleri dikkatle temizle."
  - "Listede olmayan bir kod ya da F78 görüyorsan makineyi kapat, birkaç saniye sonra aç ve programı yeniden başlat."
  - "F70, Waterproof ya da F18 görüyorsan veya kod geri geliyorsa makineyi kapat, musluğu kapat ve Miele yetkili servisini çağır."
faq:
  - q: "Miele bulaşık makinesinde F70 ne demek?"
    a: "Miele'nin G 5000 kılavuzuna göre F70, su kontrol (Waterproof) sisteminin tetiklendiği anlamına geliyor. Bu sırada su boşaltma pompası kapak açıkken de çalışıyor olabilir. Kılavuzun talimatı net: makinenin gücünü kapat, su musluğunu kapat ve Miele yetkili servisini çağır."
  - q: "F11 hatası neden çıkar?"
    a: "F11, su tahliyesinde hata demek ve yıkama kabininde su kalmış olabilir. Kılavuz üç şey sayıyor: süzgeç kombinasyonunu temizle, su boşaltma pompasını temizle, gerekirse su boşaltma hortumundaki bükülmeyi ya da düğümü gider."
  - q: "F12 ile F13 arasında fark var mı?"
    a: "G 5000 kılavuzu iki kodu aynı satırda veriyor: su girişinde sorun. Kontrol sırası da aynı: musluğu sonuna kadar aç, su girişindeki süzgeci temizle, su basıncının 50 kPa'nın altında olup olmadığını bir tesisatçıya kontrol ettir."
  - q: "Ekranımdaki kod bu listede yok, ne yapmalıyım?"
    a: "Miele kılavuzları yalnız kendi başına giderebileceğin hataları listeliyor, diğerlerini Hata XX başlığında topluyor. Önerilen sıra: gücü kapat, birkaç saniye sonra aç, programı yeniden başlat. Kod tekrar gelirse gücü kapat, musluğu kapat ve servisi ara."
  - q: "Waterproof yazısı ne anlama geliyor?"
    a: "Ekranlı G 7110 modelinde aynı durum kod yerine Waterproof bildirimiyle gösteriliyor: su kontrol sistemi tetiklenmiş. Yapılacak iş F70 ile aynı; gücü kapat, musluğu kapat, servis çağır."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin kontrol paneli ve kapalı ön kapağı"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Bulaşık makinesi programın ortasında durdu ve süre göstergesinde **F** ile bir sayı dönüşümlü yanıp sönüyor. Miele bu kodları kullanım kılavuzunun "Ne yapmalı, eğer…?" bölümünde topluyor ve her biri için kendi başına yapabileceklerini yazıyor. Bu yazıda Miele Türkiye'nin kılavuz portalından indirdiğimiz iki Türkçe kılavuzu (G 5000 ve G 7110 serisi) temel aldık. Tuş adları ve göstergeler modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F/13 musluk kapalı, F12 ve F13 su girişi, F11 su tahliyesi, F70 Waterproof su koruma, F78 sirkülasyon pompası, F18 teknik hata. Musluk, süzgeçler ve pompa sende; F70, F18 ve geri gelen kodlar Miele yetkili servisinde.

## Ekran ne söylüyor

| Gördüğün | Miele'ye göre anlamı | Kim ne yapar |
|---|---|---|
| **F ve 13 dönüşümlü** | Su musluğu kapalı | 🛠️ Musluğu sonuna kadar aç |
| **F12 / F13** | Su girişinde sorun | 🛠️ Musluk, giriş süzgeci, su basıncı |
| **F11** | Su tahliyesinde hata, kabinde su olabilir | 🛠️ Süzgeç, pompa, hortum |
| **F78** | Sirkülasyon pompasında hata | 🛠️ Kapat, aç, yeniden başlat; tekrar ederse servis |
| **F70 / Waterproof** | Su kontrol sistemi tetiklendi | 🔧 Musluğu kapat, servis |
| **F18** | Teknik bir hata | 🔧 Musluğu kapat, servis |
| **Listede olmayan kod** | Belli koşullarda teknik arıza | 🛠️ Kapat, aç; tekrar ederse servis |

F14 ya da F24 gibi bu iki kılavuzda tek tek yazmayan bir kod görüyorsan son satır geçerli. Kılavuz bunu açıkça söylüyor: yalnız kendi başına giderebileceğin hatalar listelenmiş, tüm diğer hatalar Hata XX başlığı altında.

## Adım adım: evde denenecekler

**1. Kodu not al, makineyi kapat.** Kılavuzdaki hemen her satır aynı cümleyle başlıyor: arızayı gidermeden önce bulaşık makinesinin gücünü açma/kapama tuşuyla kapat. Kapatmadan önce ekrandaki harfi ve sayıyı bir kenara yaz; servisi araman gerekirse ilk soru bu olacak.

**2. Musluğa bak.** Süre göstergesinde **F** ile **13** dönüşümlü görünüyor ve su girişi kontrol göstergesi bir yanıp sönüp bir sürekli yanıyorsa kılavuzun teşhisi tek satır: su musluğu kapalı. Çözüm de öyle: musluğu sonuna kadar aç. Ekranlı G 7110'da aynı durum "Su musluğunu açın" yazısıyla çıkıyor.

**3. Su girişi süzgecini temizle.** **F12** ya da **F13** görüyorsan sorun su girişinde. Önce musluğu sonuna kadar açıp programı yeniden başlat. Sürüyorsa vidalı bağlantıdaki süzgece bak; kılavuza göre bu süzgeç kirlendiğinde makinenin içine çok az su akar. Sıra şöyle: gücü kapat, fişi çek, musluğu kapat, su giriş valfini sök, contayı çıkar, süzgecin kulağını bir penseyle tutup çek ve süzgeci akan sıcak suyun altında yıka. Su bağlantısının plastik muhafazasında elektrikli bir valf var; bu parçayı suya daldırma. Süzgeci geri takıp rakoru musluğa sıkıca vidala, musluğu yavaşça aç; sızıntı varsa rakoru biraz daha sık. Su basıncı 50 kPa'nın altındaysa kılavuzun önerisi bir tesisatçıya başvurmak.

**4. Süzgeç kombinasyonunu yıka.** **F11** su tahliyesinde hata demek ve kabinde su kalmış olabilir. Gücü kapat, alt püskürtme kolunu çıkar, kaba kirleri süzgeçten al, süzgeç kombinasyonunu dışarı çıkar. Mikro filtreyi plastik halkasından tutup aşağı çekerek ayır ve tüm parçaları akan sıcak suyun altında, gerekirse bir bulaşık fırçasıyla yıka. Süzgeci kabin tabanıyla aynı hizada olacak şekilde yerleştir, alt püskürtme kolunu tak ve dişli bağlantıyı kilit sembolüne kadar saat yönünde çevir. Miele'nin uyarısı: alt püskürtme kolu ve süzgeç takılı değilken bulaşık yıkama.

**5. Boşaltma pompasını kontrol et.** Süzgeç temiz ama F11 sürüyorsa pompa yabancı bir parçayla tıkanmış olabilir. Fişi çek, süzgeç kombinasyonunu çıkar, kabindeki suyu küçük bir kapla boşalt. Pompa kapağının kilidini içeri bastır, kapağı çıkarılabilene kadar eğ ve akan suyla yıka. Kapağın altındaki pompada kalan yabancı maddeleri dikkatle çıkar; kılavuz cam kırıklarının burada zor görüldüğünü özellikle hatırlatıyor. Kapağı yukarıdan dik olarak tak ve kilidini mutlaka kenetle. Son olarak su boşaltma hortumunda bükülme ya da düğüm var mı bak.

**6. Kapat ve yeniden aç.** **F78** sirkülasyon pompasında hata demek. Kılavuzun sırası: gücü kapat, tekrar aç, istediğin programı yeniden başlat. Listede olmayan bir kod için de aynı sıra geçerli; gücü birkaç saniye sonra yeniden açman yeterli.

**7. Gerekirse servis.** **F70** ya da Waterproof bildirimi su kontrol sisteminin devreye girdiğini gösteriyor; F70'te boşaltma pompası kapak açıkken bile çalışıyor olabilir. **F18** teknik bir hata. Bu iki durumda ve kapatıp açtıktan sonra geri gelen her kodda Miele'nin talimatı aynı: gücü kapat, su musluğunu kapat, Miele yetkili servisini çağır.

## Ne zaman servis

- Ekranda F70, Waterproof ya da F18 varsa
- F78 ya da listede olmayan bir kod kapatıp açtıktan sonra geri geliyorsa
- Süzgeçler ve pompa temiz olduğu hâlde F11 ya da F12/F13 sürüyorsa
- Elektrik sigortası tekrar tekrar atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, giriş süzgeci, kabin süzgeci ve pompa kapağı kılavuzun sana bıraktığı işler. Valf, pompa motoru, elektronik ve su giderini havalandırma işi uzmanın.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var: F11, F12, F13, F18, F70, F78, başka bir kod?
2. Kod hangi aşamada çıktı: su alırken mi, yıkarken mi, boşaltırken mi?
3. Süzgeçler ve pompa temizlendi mi?
4. Kod kapatıp açtıktan sonra geri geldi mi?
5. Makinenin model adı ve fabrika numarası ne?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Kapak kilidiyle ilgili sorunlar [Miele bulaşık makinesi kapak kilidi nasıl açılır](/blog/miele-bulasik-makinesi-kapak-kilidi-nasil-acilir/) yazısında, programı sıfırlamak için [Miele bulaşık makinesi resetleme](/blog/miele-bulasik-makinesi-resetleme/) rehberinde, marka fark etmeksizin su girişi sorunları [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) sayfasında. Bil, gör, çağır.
