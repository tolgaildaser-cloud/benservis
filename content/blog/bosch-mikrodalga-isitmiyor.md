---
title: "Bosch mikrodalga ısıtmıyor"
description: "Bosch ankastre mikrodalga ısıtmıyorsa: demo modunu kapat, kapağı kontrol et, gücü ve süreyi artır, yemeği karıştır, kabı test et. Bosch kılavuzuna göre."
slug: "bosch-mikrodalga-isitmiyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile BSH'nin kendi alan adından (media3.bsh-group.com,
#   1 Eki alan adı kapısında BSH için kabul) indirildi, HTTP 200, application/pdf, yönlendirme 0. Web araması yalnız belgenin yerini bulmak için. Sayfa = PDF sayfası.
#   Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  B1) Bosch BEL623M... / BEL653M... ankastre mikrodalga kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001626541_M.pdf  28 s.  md5 010304164c4664df12f2641846d4134d
# Ana satırlar: B1 s.15 "14.1 Fonksiyon arızaları": "Yemekler eskiye oranla daha yavaş ısınıyor." → "Mikrodalga gücü çok düşük ayarlanmış." / "Daha yüksek bir mikrodalga
#   gücünü ayarlayınız." · "Cihazın içine olması gerekenden daha fazla miktarda yemek konulmuş." / "Daha uzun bir süre ayarlayınız. İki katı miktar, iki katı süre
#   gerektirir." · "Yemekler öncekilere göre daha soğuktu." / "Yiyecekleri ters çeviriniz veya ara sıra karıştırınız." · "Cihaz çalışmıyor." altında "Kapak tamamen kapalı
#   değil." / "Cihaz kapağının arasına yemek artıklarının veya yabancı bir maddenin girip girmediği kontrol ediniz." · "Göstergede bir [sembol] görünüyor." / "Demo modu aktiftir."
#   / "Demo modunu devre dışı bırakınız. "Temel ayarlar", Sayfa12" · "Mikrodalga çalışması duruyor." / "Cihazda arıza var." / "Bu hata tekrar meydana gelirse, müşteri hizmetlerini arayınız."
# Demo: B1 s.12 "Demo modu ... = açık  Tuşlar çalışmaz, bu yüzden örneğin mikrodalga fonksiyonunda cihaz güç vermez. Yetkili satıcılar ağırlıklı olarak Demo modunu kullanır.
#   Demo modu etkinken ekranda [sembol] görüntülenir." · 12.2 "Temel ayarın değiştirilmesi — Gereklilik: Cihaz kapatılmıştır." (tuş simgeleri metin katmanında yok → adımda "kılavuzdaki 12.2")
# Kap: B1 s.9 "Metal kaplar — Metal mikrodalgaları geçirmez. Yemekler iyi ısınmaz." · 7.3 kap testi: "1. Boş kabı pişirme bölümüne yerleştiriniz. 2. Cihazı ½ - 1 dakika
#   boyunca maksimum mikrodalga gücüne ayarlayınız. 3. İşletimi başlatınız. 4. ... Kap soğuk veya el yakmayacak sıcaklıkta ise, mikrodalgaya uygundur. – Kap sıcaksa veya
#   kıvılcım oluşuyorsa, kap testi iptal edilmelidir. Kap mikrodalgaya uygun değildir." · "Cihazı içinde yiyecek olmadan mikrodalga modunda yalnızca kap testi sırasında
#   çalıştırabilirsiniz." · UYARI haşlanma "Kesinlikle sıcak yerlere dokunulmamalıdır." · s.9 kademeler: 600 "Yiyecekleri ısıtma ve pişirme.", 800 "Sıvıları ısıtma."
#   · s.6 "Cihazdaki alüminyum kaplar kıvılcım oluşumuna neden olabilir." "Cihazda alüminyum kaplar kullanılmamalıdır."
# Bilerek yazılmayanlar: "Cihaz çalışmıyor" satırındaki sigorta kutusu adımları (sigortayı kapatıp açma — brif: elektrik panosu yok) · magnetron teşhisi · kasa/mikrodalga
#   besleme kapağı açma (belge de yasaklıyor) · Siemens kardeş kılavuzlarıyla genelleme (Siemens ayrı belirtiyle yazıldı) · fiyat.
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım kılavuzu", "Mikrodalgaya uygun bir kap"]
steps:
  - "Göstergede demo modu sembolü var mı bak; varsa kılavuzdaki Temel ayarlar bölümüne göre demo modunu kapat."
  - "Kapağın arasına yemek artığı ya da yabancı bir madde girip girmediğini kontrol et, kapağı tam kapat."
  - "Mikrodalga gücü düşük ayarlandıysa daha yüksek bir güç seç."
  - "Fırına fazla yemek koyduysan süreyi uzat: iki katı miktar, iki katı süre ister."
  - "Isıtma sırasında yiyeceği ters çevir ya da ara sıra karıştır."
  - "Metal ve alüminyum kap kullanma; emin değilsen kılavuzdaki kap testini yap."
faq:
  - q: "Bosch mikrodalgam çalışıyor ama yemek ısınmıyor, neden?"
    a: "Bosch kılavuzunun arıza tablosunda 'Yemekler eskiye oranla daha yavaş ısınıyor' satırının üç nedeni var: mikrodalga gücünün çok düşük ayarlanması, cihaza olması gerekenden fazla yemek konması ve yemeklerin öncekinden daha soğuk olması. Çözümleri sırasıyla daha yüksek güç ayarlamak, daha uzun süre ayarlamak (iki katı miktar iki katı süre ister) ve yiyeceği ters çevirmek ya da ara sıra karıştırmak."
  - q: "Ekranda bir sembol var ve tuşlara basınca ısıtmıyor, demo modu ne?"
    a: "Bosch kılavuzuna göre demo modu açıkken tuşlar çalışmaz ve örneğin mikrodalga fonksiyonunda cihaz güç vermez; yetkili satıcılar ağırlıklı olarak bu modu kullanır. Demo modu etkinken ekranda bir sembol görünür. Çözüm, demo modunu kılavuzun Temel ayarlar bölümündeki adımlarla kapatmak; bu ayar cihaz kapalıyken yapılır."
  - q: "Kabım mikrodalgaya uygun mu, nasıl anlarım?"
    a: "Bosch kap testi tarif ediyor: boş kabı pişirme bölümüne koy, cihazı yarım ile bir dakika arası maksimum mikrodalga gücüne ayarla ve başlat; kabı birkaç kez kontrol et. Kap soğuk ya da el yakmayacak sıcaklıktaysa uygundur. Kap ısınıyorsa ya da kıvılcım oluşuyorsa testi iptal et; kap mikrodalgaya uygun değildir. Kılavuz cihazın içinde yiyecek olmadan yalnız kap testi sırasında çalıştırılabileceğini yazıyor."
  - q: "Metal kapta yemek neden ısınmıyor?"
    a: "Bosch kılavuzuna göre metal mikrodalgaları geçirmez, bu yüzden metal kaptaki yemekler iyi ısınmaz. Alüminyum kaplar ayrıca kıvılcım oluşumuna neden olabilir ve kılavuz bunların cihazda kullanılmamasını istiyor."
images:
  coverAlt: "Mutfak dolabına gömülü ankastre bir mikrodalga fırının kapağı açık, içinde cam kapta duran bir tabak yemek"
---

Mikrodalgayı her zamanki süreye kurdun ama yemek ortası buz gibi çıkıyor. Bosch'un BEL623M / BEL653M ankastre mikrodalga kılavuzunun arıza tablosunda bu belirti şöyle geçiyor: **"Yemekler eskiye oranla daha yavaş ısınıyor."** Tablo bunun üç nedenini sayıyor ve üçü de ayarla ilgili: güç, miktar ve yemeğin başlangıç sıcaklığı. Aynı tabloda gözden kaçabilecek bir neden daha var: **demo modu.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Göstergede demo sembolü varsa demo modunu kapat → kapak arasını temizle, tam kapat → gücü yükselt → miktar fazlaysa süreyi uzat → çevir, karıştır → metal kap kullanma, şüphede kap testi yap. Mikrodalga çalışırken duruyorsa ve bu tekrarlıyorsa müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Demo modunu kontrol et.** Bosch tablosunda göstergede bir sembol görünüyorsa neden **"Demo modu aktiftir."** Kılavuzun Temel ayarlar bölümü sonucu açıkça yazıyor: demo modu açıkken **tuşlar çalışmaz, bu yüzden örneğin mikrodalga fonksiyonunda cihaz güç vermez.** Kılavuza göre bu modu ağırlıklı olarak yetkili satıcılar kullanıyor. Kapatmak için kılavuzdaki **"12.2 Temel ayarın değiştirilmesi"** adımlarını izle; ayar **cihaz kapalıyken** yapılıyor.

**2. Kapak arasını kontrol et.** Bosch, kapak tam kapanmadığında ilk olarak **cihaz kapağının arasına yemek artıklarının veya yabancı bir maddenin girip girmediğini** kontrol etmeni istiyor. Bulduğun artığı temizle ve kapağı tam kapat.

**3. Gücü yükselt.** Tablonun ilk nedeni **"Mikrodalga gücü çok düşük ayarlanmış."**, çözümü **"Daha yüksek bir mikrodalga gücünü ayarlayınız."** Bosch'un kademe tablosuna göre **600 W** yiyecekleri ısıtma ve pişirme, **800 W** sıvıları ısıtma için öneriliyor. Daha düşük kademeler buz çözme (90, 180 W) ile et, balık ve hassas yiyecekler (360 W) için.

**4. Miktar fazlaysa süreyi uzat.** İkinci neden: cihaza **olması gerekenden daha fazla miktarda yemek** konmuş. Bosch'un formülü kısa: **"İki katı miktar, iki katı süre gerektirir."**

**5. Çevir ve karıştır.** Üçüncü neden **"Yemekler öncekilere göre daha soğuktu."** Bosch'un çözümü: **yiyecekleri ters çevir ya da ara sıra karıştır.**

**6. Kabı kontrol et.** Bosch'un kap tablosu açık: **metal mikrodalgaları geçirmez, yemekler iyi ısınmaz.** Alüminyum kaplar ayrıca **kıvılcım oluşumuna** neden olabilir; kılavuz bunların cihazda kullanılmamasını istiyor. Emin değilsen Bosch'un **kap testini** yap: boş kabı pişirme bölümüne koy, cihazı **½–1 dakika maksimum güce** ayarla ve başlat, kabı birkaç kez kontrol et. Kap soğuk ya da el yakmayacak sıcaklıktaysa uygundur; **kap ısınıyorsa ya da kıvılcım oluşuyorsa testi iptal et**, o kap mikrodalgaya uygun değildir. Kılavuza göre cihaz içinde yiyecek olmadan yalnız kap testi sırasında çalıştırılabilir.

## Arıza tablosunun diğer satırları

- **Mikrodalga çalışması duruyor:** Bosch'a göre neden **"Cihazda arıza var."** Hata tekrar meydana gelirse müşteri hizmetlerini ara.
- **Döner tabla çiziliyor ya da sürtünüyor:** döner tabla tahrikinde kir ya da yabancı cisim var; **çevirme halkasını ve pişirme bölümündeki oyuğu** temizle.

Markadan bağımsız kontrol listesi için [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/) yazısına, kap seçimi için [mikrodalgada hangi kaplar kullanılır](/blog/mikrodalgada-hangi-kaplar-kullanilir/) yazısına bakabilirsin. Kapta kıvılcım gördüysen: [mikrodalga kıvılcım çıkarıyor](/blog/mikrodalga-kivilcim-cikariyor/).

## Ne zaman servis

- Demo modu kapalı, kapak temiz, güç ve süre doğru ve kap uygunken **yemek yine ısınmıyorsa.**
- **Mikrodalga çalışırken duruyor ve bu tekrarlıyorsa.**
- Bosch'un uyarısı: usulüne aykırı onarımlar tehlikelidir; cihazda onarımı **yalnız eğitimini almış uzman personel** yapabilir. Arıza hâlinde müşteri hizmetlerini ara; başvururken cihazın **ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır tut, tip etiketi kapağı açınca görünür.

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kap, kapak temizliği kullanıcıya; elektrik, sigorta kutusu ve cihazın içi servise aittir. Bosch'un kılavuzu pişirme bölümündeki **mikrodalga beslemesinin kapağının asla çıkarılmamasını** ve kapağın içindeki **şeffaf folyoya dokunulmamasını** istiyor.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (tip etiketindeki E-Nr., ör. BEL623M...)?
2. Göstergede bir sembol var mı?
3. Hangi güç ve süreyle, ne kadar yemek ısıttın?
4. Mikrodalga hiç mi ısıtmıyor, yoksa çalışırken mi duruyor?

Bu dördüne cevabın varsa servise "ısıtmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
