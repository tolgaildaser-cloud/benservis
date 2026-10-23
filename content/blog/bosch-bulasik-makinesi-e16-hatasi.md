---
title: "Bosch bulaşık makinesi E16 hatası: su alma sistemi"
description: "Bosch bulaşık makinesinde E16 ya da E17, su alma sisteminde hata demek. Bosch'un sırası: musluk, giriş hortumu, su debisi, süzgeç ve servis sınırı."
slug: "bosch-bulasik-makinesi-e16-hatasi"
date: "2026-10-23"
category: "Bulaşık Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork B). Konu seçimi: origin/main'de bosch-bulasik-makinesi-e16-hatasi yok.
#   Yakın slug'lar: bosch-bulasik-makinesi-hata-kodlari (hub), -e15-, -e18-, -e22-, -e24-, -e25-, -e12-, -e61-03-hatasi, -calismiyor; Bosch bulaşıkta E16/E17 tekil sayfası ve "su almıyor" sayfası yok.
# GSC kanıtı: https___www-5 (3 ay, 18 Tem–17 Eki): "bosch bulaşık makinesi e16 hatası" 37 gösterim, poz 8,86 · https___www-6 (7 gün, 11–17 Eki): 4 gösterim, poz 9,75.
# Arama kanıtı (#164, 23 Eki Google otomatik tamamlama, hl=tr gl=tr): "bosch bulaşık makinesi e16" → 1. "…e16 hatası", 2. "…e16 hatası nedir", 3. "…e16 arızası".
# Belgeler (#88, yalnız üretici; yerel kopyalar, md5 -q ile 23 Eki'de ölçüldü). Okuma: HTML gövde metni; PDF için pdftotext -layout, sayfa = PDF sayfası (\f).
#  (W) Bosch TR destek sayfası "Bosch bulaşık makinesi hata kodu E16 veya E17" (dinamik HTML) md5 f607bad54bba83c982d7c5f069aa2f21
#      https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e16-e17 · yerel: kaynak-bosch-bulasik-sprint/bulasik-makinesi-hata-kodu-e16-e17.html
#  (M) Bosch TR destek sayfası "Bulaşık makinemin ekranında temiz su musluğu hatası veriyor" (dinamik HTML) md5 ec824c71ef99eb691d60d9ee87136cc0
#      https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/ekranda-su-muslugu-hatasi · yerel: kaynak-bosch-bulasik-sprint/ekranda-su-muslugu-hatasi.html
#  (S) Bosch Serie 4 bulaşık makinesi kullanım kılavuzu 9002038173_A.pdf md5 0582a2049b417ff2449f79ea3574fc40 (media3.bsh-group.com/Documents/9002038173_A.pdf; yerel kaynak-bosch-2eki/)
# E16/E17 tanımı W · su musluğu sembolü üç adım M · gösterge S s.15 · su beslemesi göstergesi yanıp sönüyor + fiş/2 dk S s.41 · su girişi satırı, debi 10 l/dk, süzgeç 11 adım S s.42
#   · hortum bükme/eski hortum S s.9, s.11 · su basıncı 0,5–10 bar S s.9, s.49 · onarım uyarısı S s.41.
# BİLEREK YAZILMAYANLAR: E16'nın E:32-00 ile aynı kod olduğu iddiası (belgede yok; yalnız "su girişi kontrolleri" olarak anlatıldı) · su giriş valfi, debimetre, kart teşhisi
#   · AquaStop hortumunu değiştirme/kesme · cihazı yatırma ya da kapak içi işlemler (#31) · "en sık sebep" sıralaması · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-bulasik-makinesi-e16-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kova", "Küçük bir fırça", "Havlu", "Makinenin kullanım kılavuzu"]
steps:
  - "Makineye su veren musluğun sonuna kadar açık olduğunu kontrol et; sıkışmış ya da kireçlenmiş musluğu aç."
  - "Makineyi hafifçe öne çekip su giriş hortumunda ve atık su hortumunda bükülme ya da dolanma var mı bak, varsa düzelt."
  - "Musluğu kapat, hortumu sök, musluğun altına bir kova koyup musluğu tam aç; dakikada yaklaşık on litre su akmalı."
  - "Makineyi kapat, fişini çek, musluğu kapat; su bağlantısını söküp hortum ucundaki süzgeci akan suyla ve küçük bir fırçayla temizle."
  - "Süzgeci yerine tak, su bağlantısını vidala, sızıntı olmadığını kontrol et, fişi takıp makineyi aç."
  - "Kod sürüyorsa fişi çek ya da sigortayı kapat, en az iki dakika bekle, sonra makineyi yeniden çalıştır."
  - "Musluk, hortum, debi ve süzgeç tamam olduğu hâlde E16 ya da E17 sık sık çıkıyorsa musluğu kapat ve Bosch müşteri hizmetlerinden servis iste."
faq:
  - q: "Bosch bulaşık makinesinde E16 ne demek?"
    a: "Bosch'un Türkiye destek sayfasına göre E16 ve E17, su alma sisteminde ya da temiz su girişinde bir hata tespit edildiği anlamına geliyor. Bosch'un ilk önerisi temiz su girişini kontrol etmek: köşe akış vanası açık mı, temiz su giriş hortumu bükülmüş mü."
  - q: "E16 ile E17 arasında fark var mı?"
    a: "Bosch'un destek sayfası iki kodu aynı başlık altında, aynı açıklamayla veriyor: su alma sisteminde ya da temiz su girişinde hata. Kontrol sırası ikisi için de aynı."
  - q: "E16 sürekli tekrar ediyor, ne yapmalıyım?"
    a: "Bosch'a göre bu hatayla sık sık karşılaşıyorsan cihazda büyük ihtimalle bir hata vardır ve bu hata yalnız deneyimli bir teknisyen tarafından giderilebilir. Musluğu kapat, makineyi kapat ve Bosch müşteri hizmetlerinden randevu al."
  - q: "Su basıncım düşükse ne olur?"
    a: "Bosch'un Serie 4 kılavuzu su besleme basıncının en az 0,5 bar, en fazla 10 bar olmasını ve musluktan dakikada en az 10 litre su akmasını istiyor. Kova testinde debi düşük çıkarsa Bosch'un önerisi su tesisatını bir tesisatçıya kontrol ettirmek."
  - q: "Eski su giriş hortumunu kullanabilir miyim?"
    a: "Hayır. Kılavuza göre cihaz su şebekesine bağlanırken daima cihazla birlikte verilen yeni su giriş hortumu kullanılmalı, kullanılmış hortumlar tekrar kullanılmamalı. Su hortumları asla bükülmemeli, ezilmemeli, değiştirilmemeli ya da kesilmemeli."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin açık kapağı ve içinde boş, kuru duran sepetler"
  steps:
    - "Bulaşık makinesinin yanındaki dolap içinde duvara bağlı küçük bir köşe musluğu"
    - "Tezgâh altından hafifçe öne çekilmiş bulaşık makinesinin arkasında uzanan düz bir hortum"
    - "Mutfak tezgâhı altında bir musluğun altında duran boş, plastik bir kova"
    - "Akan suyun altında tutulan küçük, yuvarlak bir hortum süzgeci ve yanında küçük bir fırça"
    - "Musluğa yeniden vidalanmış bir su giriş hortumu ve altına serilmiş kuru bir havlu"
    - "Duvardaki prizden çekilmiş bir bulaşık makinesi fişi"
    - "Kapalı bir bulaşık makinesinin önünde tezgâhta duran katlanmış bir kullanım kılavuzu"
---

Bulaşık makinesi programa başladı, sonra durdu ve ekranda **E16** ya da **E17** belirdi. Belki gösterge panelindeki su musluğu sembolü de yanıyor. Bosch'un Türkiye destek sayfası bu iki kodu tek cümleyle açıklıyor: su alma sisteminde ya da temiz su girişinde bir hata tespit edildi. Yani makine istediği suyu alamamış. Bu yazıda Bosch'un destek sayfalarındaki ve Serie 4 kullanım kılavuzundaki su girişi kontrollerini sırayla topladık. Tuş adları ve göstergeler modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E16 ve E17, Bosch'a göre su alma sisteminde hata. Musluk açık mı, giriş hortumu bükülmüş mü, musluk dakikada yaklaşık 10 litre su veriyor mu, hortum ucundaki süzgeç temiz mi? Bunlar tamamsa ve kod sık sık geliyorsa musluğu kapat, servis iste.

## Ekran ne söylüyor

| Gördüğün | Bosch'a göre anlamı | Kim ne yapar |
|---|---|---|
| **E16 / E17** | Su alma sisteminde veya temiz su girişinde hata | 🛠️ Musluk, hortum, debi, süzgeç |
| **Su musluğu sembolü** | Su girişinde veya çıkışında bir arıza | 🛠️ Aynı kontroller |
| **Su beslemesi göstergesi yanıp sönüyor** | Serie 4 kılavuzuna göre teknik bir arıza | 🛠️ Fiş, 2 dakika bekle; sürerse servis |
| **Kod sık sık tekrar ediyor** | Büyük ihtimalle cihazda bir hata | 🔧 Bosch yetkili servisi |

## Adım adım: evde denenecekler

**1. Musluğa bak.** Bosch'un E16/E17 sayfasındaki ilk kontrol köşe akış vanasının, yani makineye su veren musluğun açık olması. Serie 4 kılavuzunun su girişi satırı iki ihtimal daha sayıyor: musluk **kapalı** olabilir ya da **sıkışmış veya kireçlenmiş** olabilir. İkisinde de çözüm musluğu açmak. Mutfakta tesisatla ilgili bir iş yapıldıysa vananın kapalı kalmış olması da mümkün.

**2. Giriş hortumunu izle.** Bosch'un su musluğu hatası sayfası, makineyi **hafifçe öne doğru çekerek** soğuk su giriş hortumunda ve atık su hortumunda bükülme olup olmadığını kontrol etmeni istiyor. Görünürde bükülme ya da dolanma varsa düzelt. Kılavuzun güvenli kurulum bölümü de net: su hortumları asla bükülmemeli, ezilmemeli, değiştirilmemeli ya da kesilmemeli; yalnız ürünle birlikte verilen ya da orijinal yedek hortumlar kullanılmalı.

**3. Su debisini ölç.** Bosch'a göre musluk tamamen açıldığında dakikada **yaklaşık 10 litre** su akmalı. Destek sayfasındaki test basit: musluğu kapat, hortumu çıkar, musluğun altına bir kova koy ve musluğu aç. Serie 4 kılavuzunun teknik verileri de aynı değeri veriyor: su giriş miktarı en az 10 litre/dakika, su basıncı en az 0,5 bar ve en fazla 10 bar. Debi düşükse sorun makinede değil tesisatta olabilir; Bosch'un önerisi tesisatçınla iletişime geçmek.

**4. Süzgeci temizle.** Temiz su bağlantısının ucundaki süzgeç ya da AquaStop hortumundaki süzgeç tıkanmışsa makine yeterince su alamaz. Kılavuzdaki sıra şöyle: cihazı kapat, fişini prizden çek, musluğu kapat, su bağlantısını sök, süzgeci giriş hortumundan çıkar ve temizle. Bosch'un destek sayfası süzgeci **akan temiz suyla** ve **küçük bir fırçayla** temizlemeyi öneriyor. Hortumun ucunda biraz su kalabilir; altına bir havlu sermek işini kolaylaştırır.

**5. Yerine tak ve sızıntıya bak.** Süzgeci giriş hortumuna yerleştir, su bağlantısını vidala ve sızdırmazlığını kontrol et. Kılavuzun son iki adımı elektrik beslemesini sağlamak ve cihazı açmak. Musluğu açtıktan sonra bağlantının çevresinde birkaç dakika damla olup olmadığına bak.

**6. Kısa bir elektrik kesintisi ver.** Serie 4 kılavuzunda su beslemesi göstergesi yanıp sönüyorsa teknik bir arıza olduğu yazıyor ve şu sıra veriliyor: açma/kapama tuşuna bas, fişi çek ya da sigortayı kapat, **en az 2 dakika** bekle, fişi tak ya da sigortayı aç, cihazı çalıştır. Sorun yeniden ortaya çıkarsa makineyi kapat, musluğu kapat ve fişi çek.

**7. Sık tekrar ediyorsa servis.** Bosch'un E16/E17 sayfası bu noktada açık konuşuyor: bu hatayla sık sık karşılaşıyorsan cihazında büyük ihtimalle bir hata vardır ve bu hata yalnız deneyimli bir teknisyen tarafından giderilebilir. Musluğu ve makineyi kapat, Bosch müşteri hizmetlerinden randevu al.

## Ne zaman servis

- Musluk açık, hortum düz, debi yeterli, süzgeç temiz olduğu hâlde kod geri geliyorsa
- Elektrik kesintisinden sonra su beslemesi göstergesi yeniden yanıp sönüyorsa
- Su bağlantısında süzgeci taktıktan sonra da sızıntı varsa
- Ekranda E16 ya da E17 sık sık beliriyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun dışı, debi testi ve süzgeç sende; makinenin içindeki su alma parçaları uzmanın. Kılavuzun uyarısı: usulüne uygun olmayan onarımlar tehlikelidir, cihazda yalnız eğitimini almış uzman personel onarım yapabilir.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var: E16, E17, yoksa yalnız su musluğu sembolü mü?
2. Kova testinde dakikada kaç litre su aktı?
3. Süzgeç temizlendi mi?
4. Kod her programda mı, arada bir mi çıkıyor?
5. Tip plaketindeki ürün numarası (E-Nr.) ne? Kılavuza göre plaket cihaz kapağının iç tarafında.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bosch'un diğer kodları [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) sayfasında, su koruma tarafındaki kod [Bosch bulaşık makinesi E15 hatası](/blog/bosch-bulasik-makinesi-e15-hatasi/) yazısında, makine hiç çalışmıyorsa [Bosch bulaşık makinesi çalışmıyor](/blog/bosch-bulasik-makinesi-calismiyor/) rehberinde. Bil, gör, çağır.
