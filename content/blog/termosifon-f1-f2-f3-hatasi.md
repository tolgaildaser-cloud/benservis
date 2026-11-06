---
title: "Termosifon F1, F2, F3 hatası: Arçelik kılavuzuna göre"
description: "Termosifon ekranında F1, F2 ya da F3 mü var? Arçelik T 7350 SM E kılavuzuna göre kodların anlamı, Vestel E kodlarıyla farkı ve servis sınırı."
slug: "termosifon-f1-f2-f3-hatasi"
date: "2026-11-10"
category: "Kombi/Termosifon"
updated: "2026-11-10"
kisaCevap: "Arçelik T 7350 SM E kılavuzunda F1 termosifonun içinde su olmadığını, F2 sıcaklık sensörü ya da bağlantı hatasını, F3 emniyet termostatı arızasını gösterir. Tablodaki yedi kodun (F1–F7) hepsinde çözüm servis; F3'te kılavuz önce ürünü kapatmanı istiyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 4; BOSLUK.md sürüm 4 #337 "termosifon F1 / F2 / F3 hatası ne demek", ⚠ marka doğrulanmamıştı). Marka bu koşuda belgeyle doğrulandı: F1–F7 tablosu Arçelik T 7350 / 7365 / 7380 SM E kılavuzunda. Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: termosifon-suyu-isitmiyor (E kodları bölümü), termosifon-isigi-yanmiyor, vestel-termosifon-suyu-isitmiyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-detay.txt): "termosifon hata" #3 "termosifon f3 hatası", #4 "…f2 hatası", #5 "…f1 hatası", #10 "arçelik termosifon hata kodları"; "termosifon ne demek" #3 "termosifon f3 ne demek", #5 "termosifon f1 ne demek". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arçelik T 7350 SM E / T 7365 SM E / T 7380 SM E elektrikli termosifon kullanma kılavuzu (20 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201701250927303_User%20Manual%20-%20Filetr_TR.pdf md5 284ff9d02e4e70d3947c1ee13a56df29 — PDF s.4, 10, 14, 15, 17, 18 · (B) Vestel elektrikli termosifon kullanım kılavuzu 20214615_k (24 s. PDF) https://statik.vestel.com.tr/webfiles/20214615_k.pdf md5 5b2d7d441b5c5d5fc6b34451d428e8e0 — PDF s.14, 15, 18.
# BİLEREK YAZILMAYANLAR: başka markaların F kodları (belge yok; Baymak, DemirDöküm kodları farklı) · sensör, emniyet termostatı, kart değişimi (servis) · F2'deki "çok uzun gündüz konumu" ifadesinin yorumu (belgede açıklama yok) · fiyat (#46).
# Alıntı denetimi: termosifon-f1-f2-f3-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu", "Kâğıt ve kalem"]
steps:
  - "Ekrandaki kodu ve arıza simgesini not et."
  - "Termosifonun modelini etiketten doğrula."
  - "Termostat düğmesini kapatma konumuna getir."
  - "Şalteri kapalı konuma getir."
  - "F1'de sıcak su musluğundan su gelip gelmediğine bak."
  - "Elektrik kesintisinden sonraki kısa görüntüyü kalıcı koddan ayır."
  - "Kod sürüyorsa modeli ve kodu servise bildir."
faq:
  - q: "Termosifon F1 hatası ne demek?"
    a: "Arçelik T 7350 SM E kılavuzunda F1, ürünün içinde su bulunmadığını gösterir. Kılavuz bu arızada servis çağırılmasını istiyor. Kılavuza göre termosifonun tamamen su ile dolu olduğundan emin olmadan cihazı çalıştırmamalısın."
  - q: "Termosifon F3 hatası ne demek?"
    a: "Aynı kılavuzda F3 emniyet termostatı arızasıdır. Çözüm sütunu ürünü kapatmanı ve servis çağırmanı söylüyor. Emniyet termostatı kullanıcının değiştireceği bir parça değil."
  - q: "Termosifon F2 hatası ne demek?"
    a: "Arçelik tablosu F2 için çok uzun gündüz konumu hatası yazıyor; sıcaklık sensörü arızalıdır ya da bağlantı hatası vardır. Bu arızada da servis çağırılmalıdır."
  - q: "Her termosifonda F kodları aynı mı?"
    a: "Hayır. Vestel 20214615 kılavuzu benzer durumlar için E kodları kullanıyor: E1 termistör hatası, E2 düşük voltaj uyarısı, E3 susuz çalıştırma. Kodun anlamı için kendi modelinin kılavuzuna bakmalısın."
images:
  coverAlt: "Duvarda sade termosifon ve yanında kontrol paneli çizimi"
  steps:
    - "Termosifonun ekranına bakıp not alan beyaz eldivenli sade siluet el"
    - "Termosifonun yanındaki etikete bakan beyaz eldivenli sade siluet el"
    - "Termosifonun yuvarlak ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Duvardaki şalteri aşağı indiren beyaz eldivenli sade siluet el"
    - "Lavabo bataryasının sıcak tarafını açan beyaz eldivenli sade siluet el"
    - "Termosifon ekranını izleyen beyaz eldivenli sade siluet el"
    - "Telefonu ve kılavuzu tutan beyaz eldivenli sade siluet el"
---

Termosifonun ekranında F1, F2 ya da F3 yazıyorsa önce markana bak, çünkü bu kodlar her markada aynı değil. Bu yazı Arçelik T 7350, T 7365 ve T 7380 SM E elektrikli termosifon kullanma kılavuzundaki tabloyu anlatıyor. Bu kılavuza göre F1 ürünün içinde su bulunmadığını, F2 sıcaklık sensörü arızasını ya da bağlantı hatasını, F3 emniyet termostatı arızasını gösterir. Tabloda F1'den F7'ye yedi kod var ve hepsinin çözümü servis.

Vestel'in 20214615 numaralı elektrikli termosifon kılavuzu benzer durumlar için F değil E harfi kullanıyor: E1 termistör hatası, E2 düşük voltaj uyarısı, E3 susuz çalıştırma. Ekrandaki harf ve rakamı okumadan önce cihazın etiketindeki modeli öğren. Kendi termosifonunun kılavuzu farklı bir tablo veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kodu okumayı ve cihazı güvenle kapatmayı anlatıyor. Arçelik kılavuzu kurulum, bakım, temizlik ve tamir sırasında ürünün elektrik bağlantısını mutlaka kesmeni istiyor. Sensör, emniyet termostatı, rezistans ve elektronik kart yetkili servis işidir.

## Arçelik termosifonda F kodları ne anlama gelir?

| Kod | Arçelik T 7350 SM E kılavuzundaki anlam | Kılavuzun istediği |
|---|---|---|
| F1 | Ürünün içinde su bulunmuyor | Servis çağır |
| F2 | Çok uzun gündüz konumu hatası; sıcaklık sensörü arızalı ya da bağlantı hatası var | Servis çağır |
| F3 | Emniyet termostatı arızası | Ürünü kapat, servis çağır |
| F4 | Sıcaklık sensörü arızası | Servis çağır |
| F5 | Elektronik kart hatası | Servis çağır |
| F6 | Elektronik kart bağlantı hatası | Servis çağır |
| F7 | Sınıflandırılmamış bir hata | Servis çağır |

Kılavuzun ekran bölümüne göre arıza uyarısı ekrandaki 4 numaralı semboldür. Bu sembol yanıp sönerken dijit gösterge bir arıza kodu gösterir.

## Adım adım: termosifon F1, F2 ya da F3 hatası verirse ne yapılır?

**1. Ekrandaki kodu ve arıza simgesini not et.** Arçelik SM E kılavuzu bir arıza olması halinde ekranda bir arıza kodu gösterildiğini yazıyor. Kodu, yanıp sönen arıza simgesiyle birlikte bir kâğıda yaz; servisle konuşurken ilk sorulan bilgi budur.

**2. Termosifonun modelini etiketten doğrula.** Yukarıdaki tablo yalnız T 7350, T 7365 ve T 7380 SM E modelleri için geçerli. Ekranında E1, E2 ya da E3 görüyorsan kodu Vestel 20214615 kılavuzundaki gibi E tablosuyla karşılaştır; o kılavuzda E3 susuz çalıştırma, E2 düşük voltaj demektir. Modeli bilmeden kodu yorumlama.

**3. Termostat düğmesini kapatma konumuna getir.** Arçelik kılavuzu ürünü kapatmak için termostat ayar düğmesini saat ibresinin tersi yönünde döndürüp kılavuzdaki kapalı konuma getirmeni istiyor. F3 satırı da açıkça ürünü kapatmanı ve servis çağırmanı söylüyor.

**4. Şalteri kapalı konuma getir.** Kılavuzdaki kapatma sırasının ikinci adımı şalteri kapalı konuma getirmek. Termosifonu uzun süre kullanmayacaksan içindeki suyu boşaltmanı da yazıyor; bu işin ayrıntısı [termosifon nasıl boşaltılır](/blog/termosifon-nasil-bosaltilir/) yazısında.

**5. F1'de sıcak su musluğundan su gelip gelmediğine bak.** Arçelik kılavuzu termosifonun tamamen su ile dolu olduğundan emin olmadan cihazı çalıştırmamanı istiyor. Sıcak su musluğunu açtığında su geliyorsa termosifon su ile dolu demektir. Binada su kesintisi olup olmadığını not et; F1 satırının çözümü yine de servis. Vestel'de susuz çalışma E3 olarak görünür ve kılavuz kazana su doldurulduktan sonra enerjinin kesilip yeniden verilmesini yazıyor.

**6. Elektrik kesintisinden sonraki kısa görüntüyü kalıcı koddan ayır.** Arçelik kılavuzu gerilim söz konusu olduğunda kısa süreliğine tüm sembollerin ekranda göründüğünü yazıyor. Elektrik kesintisinden sonra ürün ilk çalıştırma durumuna gelir. Vestel'de düşük voltaj uyarısı E2, voltaj normale döndüğünde kendiliğinden kalkar. Kod birkaç dakika sonra da ekrandaysa kalıcıdır.

**7. Kod sürüyorsa modeli ve kodu servise bildir.** Arçelik tablosunda F1'den F7'ye her satırın çözümü servis çağırmak. Kılavuz Arçelik Çağrı Merkezi'nin 444 0 888 numarasından haftanın 7 günü 24 saat hizmet verdiğini yazıyor. Kodu, modeli ve kodun ne zaman çıktığını aynı anda söyle.

## F2 ile F4 arasındaki fark nedir?

İkisi de sıcaklık sensörüyle ilgili, ama tablo onları ayrı yazıyor. F2 satırı çok uzun gündüz konumu hatası diyor ve sensörün arızalı olduğunu ya da bağlantı hatası bulunduğunu ekliyor. F4 ise doğrudan sıcaklık sensörü arıza hatası. Kılavuz iki kod için de kullanıcıya bir işlem tarif etmiyor, yalnız servis çağırmanı istiyor. Sensörü sökmek ya da kablosuna bakmak elektrik çarpması riski taşır.

## Kod yoksa ama su ısınmıyorsa hangi yazıya bakılır?

Ekranda kod yok ama su soğuksa [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısındaki sırayla ilerle. Isıtma ışığı hiç yanmıyorsa [termosifon ışığı yanmıyor](/blog/termosifon-isigi-yanmiyor/), düğme ve mod ayarları için [termosifon nasıl kullanılır](/blog/termosifon-nasil-kullanilir/) sayfasına bak.

---

**Kaynak künyesi.** F1–F7 kod tablosu, ekran sembolleri, kapatma sırası ve çağrı merkezi bilgisi Arçelik T 7350 / T 7365 / T 7380 SM E elektrikli termosifon kullanma kılavuzundan; E1, E2 ve E3 kodları Vestel 20214615 elektrikli termosifon kullanım kılavuzundan alınmıştır. Kendi termosifonunun kılavuzu farklı bir tablo veriyorsa **kendi kılavuzun esastır.**

Kod silinmiyorsa modeli ve kodu benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
