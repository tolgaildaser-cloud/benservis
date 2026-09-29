---
title: "Samsung buzdolabı su sızdırıyor: ne yapmalı?"
description: "Samsung buzdolabı su sızdırıyorsa Samsung'un sırası: güvenlik, sızıntının kaynağı, kapı ve conta, sıcaklık ayarı ve denge."
slug: "samsung-buzdolabi-su-sizdiriyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200.
# Yerel kopya: blog-taslaklar/kaynak-samsung-buzdolabi-sprint/2026-09-29/ (MD5-2026-09-29.txt).
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi belgelerinden. Web araması kullanılmadı; sayfaların yeri Samsung TR destek sayfalarındaki iç linklerden.
# (S13) Samsung TR destek "Samsung Buzdolabımdan su sızması durumunda ne yapmalıyım?" (Son Güncelleme 2026-08-21)
#      https://www.samsung.com/tr/support/home-appliances/what-to-do-when-the-body-of-the-samsung-refrigerator-shows-leaking-water/  md5 3c73fd56539c24b78b63f74a6585c8f0 (HTML, dinamik)
#      Güvenlik: "Buzdolabının fişini prizden çekin." / "Gerekirse sigorta kutusundan devreyi kapatın." / "Buzdolabının etrafındaki suyu dikkatlice kurulayın." / "Elektrikli parçalara ıslak elle dokunmaktan kaçının."
#      Nedenler: yanlış soğutma sıcaklığı, kapının açık kalması, sıcak yiyecek, yanlış yerleştirme, doğrudan güneş ışığı.
#      Sıcaklık: "Buzdolabı sıcaklığını 3°C'ye ayarlayın." / "Dondurucu sıcaklığını -19°C'ye ayarlayın." / "cihazın sıcaklığının dengelenmesi için buzdolabına biraz zaman tanıyın."
#      Kapı: "Kapı contasında (fitilinde) boşluk veya kir olup olmadığını inceleyin." Konum: yanlarda/arkada boşluk, ısı kaynağı, güneş, "düz ve dengeli bir zeminde".
#      Servis: "Sorun giderme adımlarını uyguladıktan sonra su sızıntısı devam ediyorsa Samsung Destek ile iletişime geçin." / "Su sürahisi bölümünden sürekli su damlıyorsa Samsung Müşteri Hizmetleriyle ile iletişime geçin."
# (S12) Samsung TR destek "Samsung Buzdolabımın su sızdırdığından şüpheleniyorum ne yapmalıyım?" (Son Güncelleme 2026-08-21)
#      https://www.samsung.com/tr/support/home-appliances/what-should-i-do-if-i-suspect-my-samsung-fridge-freezer-is-leaking-water/  md5 0f7229fd334bb069c99db9a54eda40a6 (HTML, dinamik)
#      Kapı: hizalama/engel; "Hava kaçağı testi yapın: ... elinizi kapı kenarlarında gezdirin." / kağıt testi / conta işlevini yitirdiyse "onarılması veya değiştirilmesi gerekir".
#      Tahliye: "vidaları sökülerek çıkarılabilen plastik veya metal bir panelin arkasında olabilir" · buharlaşma kabı: "metal kapağı çıkararak damlama tepsisine ulaşın" (İKİSİ DE söküm → yazıda servise bırakıldı).
#      Bağlantılar: "Hiçbir bağlantının gevşek veya hasarlı olmadığından emin olmak için her birini dikkatlice kontrol edin."
#      Denge: "Cihaz tamamen düz veya öne doğru eğik olduğunda su doğru şekilde akamaz ve zemine sızabilir." / "ön ayaklarını ayarlayarak cihazın hafifçe arkaya doğru eğik konumda kalmasını sağlayın." / "kapı bırakıldığında kendi kendine kapanmalıdır."
#      Kaynak: "Cihazın altına düşüp eriyen buz küplerini veya mutfaktaki diğer kaynaklardan dökülmüş olabilecek sıvıları kontrol edin."
# (S10) Samsung TR destek "...buzlanma veya su sızıntısı varsa ne yapmalıyım?" (2026-08-21) https://www.samsung.com/tr/support/home-appliances/why-does-my-refrigerator-have-frost-or-a-leak/  md5 9640826497653f4687ce49d23f8fb599
#      Tahliye: "gücü kapatın ve buzların erimesini bekleyin. Kalıntıların etrafını temizleyin. Buz çözme tahliyesine veya buzdolabının içine doğrudan sıcak su dökmeyin." / "arıza tespiti için Samsung Müşteri Hizmetleri ile iletişime geçmeniz önerilir." / Enerji Tasarrufu modu ve kapı yoğuşması.
# (F) Samsung TR kılavuz RF9000D (RF65D**/RF71D**), 88 s. md5 b09495aa6935267bd5147dbda8b1d1ad (URL KAYNAK dosyasında) — su hattı: "Su hattı yetkili bir profesyonel tarafından onarılmalıdır."
# BİLEREK YAZILMAYANLAR: tahliye kanalına ılık su dökme (S12'de var ama panel/vida sökme bağlamında; S10 "doğrudan sıcak su dökmeyin" diyor → yazıda su dökme tarifi yok); buharlaşma kabına erişim (metal kapak sökme, #31); su hattı/filtre onarımı; conta değişimi.
# Alıntı denetim tablosu: samsung-buzdolabi-su-sizdiriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (sıcaklık dengelenmesi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "A4 kâğıt"]
steps:
  - "Buzdolabının fişini prizden çek, gerekirse sigortadan devreyi kapat ve etraftaki suyu kurula."
  - "Suyun gerçekten buzdolabından geldiğini doğrula; altına düşüp eriyen buz ya da dökülmüş başka bir sıvı olmadığına bak."
  - "Kapının tam kapandığını, önünde engel olmadığını kontrol et ve elini kapı kenarlarında gezdirerek soğuk hava kaçağı ara."
  - "Kapının arasına bir kâğıt koyup çek; kâğıt direnç görmeden çıkıyorsa kapı tam kapanmıyordur."
  - "Fişi yeniden tak; soğutucuyu 3 °C'ye, dondurucuyu -19 °C'ye ayarla ve sıcaklığın dengelenmesini bekle."
  - "Sıcak yiyecekleri soğumadan buzdolabına koyma."
  - "Buzdolabını güneşten ve ısı kaynaklarından uzak tut, yanlarında ve arkasında yeterli boşluk bırak."
  - "Ön ayakları ayarlayarak buzdolabını hafifçe arkaya eğik konuma getir; kapı bırakıldığında kendiliğinden kapanmalı."
faq:
  - q: "Samsung buzdolabı neden su sızdırır?"
    a: "Samsung Türkiye'nin destek sayfasına göre su sızıntısı yanlış sıcaklık ayarları, kapının açık kalması, dolaba sıcak yiyecek konması, cihazın uygun olmayan bir yere yerleştirilmesi ya da doğrudan güneş ışığı gibi nedenlerle oluşabilir. Samsung ayrıca tıkanan buz çözme tahliyesini ve buzdolabının düz ya da öne eğik durmasını da sızıntı nedenleri arasında sayıyor."
  - q: "Buzdolabı düz durmalı değil mi? Neden arkaya eğik olmalı?"
    a: "Samsung'a göre yoğuşma suyunun cihazın altındaki damlama tepsisine akabilmesi için buzdolabının duruşu çok önemlidir. Cihaz tamamen düz ya da öne doğru eğikse su doğru akamaz ve zemine sızabilir. Samsung, ön ayakların ayarlanarak cihazın hafifçe arkaya eğik durmasını ve kapının bırakıldığında kendiliğinden kapanmasını istiyor."
  - q: "Tahliye deliğini kendim temizleyebilir miyim?"
    a: "Samsung'a göre tahliye kanalı dondurucunun iç arka kısmında, çoğu zaman vidaları sökülerek çıkarılan bir panelin arkasında olabilir. Panel sökmeyi gerektiren bu iş yetkili servisindir. Samsung'un buzlanma sayfası tahliyeye ya da buzdolabının içine doğrudan sıcak su dökülmemesini ve arıza tespiti için müşteri hizmetleriyle iletişime geçilmesini öneriyor."
  - q: "Su sebilinden sürekli su damlıyor. Ne yapmalıyım?"
    a: "Samsung'un destek sayfası su sürahisi bölümünden sürekli su damlıyorsa doğrudan Samsung Müşteri Hizmetleri ile iletişime geçilmesini istiyor."
images:
  coverAlt: "Mutfak zemininde gri bir buzdolabının ön ayakları dibinde küçük bir su birikintisi ve yanında katlanmış kuru bir bez"
---

Buzdolabının önünde ya da altında su birikintisi var, ya da sebzeliğin altında su toplanıyor. Samsung Türkiye'nin destek sayfası konuya net bir cümleyle giriyor: **"Samsung buzdolabınızın soğutucu veya dondurucu bölümlerinde su sızıntısı olmamalıdır."** Samsung'a göre bu sızıntıların birkaç yaygın nedeni var ve birçoğu evde çözülebilir. Bu yazıda Samsung'un iki destek sayfasındaki sırayı birlikte açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce güvenlik: fişi çek, suyu kurula, ıslak elle elektrikli parçalara dokunma. Sonra kaynak: su gerçekten buzdolabından mı geliyor? Sonra kapı (kâğıt testi), sıcaklık ayarı (soğutucu 3 °C, dondurucu -19 °C), yerleşim ve denge (hafif arkaya eğik). Tahliye kanalı ve damlama tepsisi panel sökmeyi gerektirir → Samsung yetkili servisi.

## Samsung'a göre nedenler

| Neden | Samsung'un açıklaması | Evde kontrol |
|---|---|---|
| Yanlış sıcaklık ayarı | Buzun erimesine ve içeride ya da dışarıda sızıntıya neden olabilir | Evet |
| Kapının açık kalması | Soğutmayı etkiler, yoğuşmaya ya da sızıntıya yol açar | Evet |
| Sıcak yiyecek | İç sıcaklığı artırır, aşırı nem oluşur | Evet |
| Yanlış yerleşim, güneş ışığı | Havalandırma azalır, sıcaklık artar | Evet |
| Buzdolabı düz ya da öne eğik | Yoğuşma suyu damlama tepsisine akamaz, zemine sızar | Evet, ön ayaklar |
| Buz çözme tahliyesinin tıkanması | Kalıntılar tahliyeyi tıkar, su sızar ya da donar | Kısmen; panel sökme servis işi |

## Adım adım: evde denenecekler

**1. Önce güvenlik.** Samsung'un ilk talimatı: buzdolabının **fişini prizden çek**, gerekirse sigorta kutusundan devreyi kapat ve buzdolabının etrafındaki suyu dikkatlice kurula. Su elektriği iletebileceği için **elektrikli parçalara ıslak elle dokunma.**

**2. Kaynağı doğrula.** Samsung'a göre bazen dış etkenler cihaz sızıntısıyla karıştırılır. Buzdolabının altını ve çevresini incele: **altına düşüp eriyen bir buz küpü** ya da mutfakta başka bir yerden dökülmüş sıvı olabilir.

**3. Kapıyı kontrol et.** Samsung'a göre kapı tam kapanmadığında cihaz içerideki ısıyı koruyamaz ve **su sızıntısına neden olan yoğuşma** başlar. Kapının kapanmasını engelleyen bir cisim olmadığından ve kapının tam oturduğundan emin ol. Sonra **elini kapı kenarlarında gezdir**; soğuk hava kaçağı hissediyorsan kapı ya da conta tam kapatmıyordur. Samsung, contada boşluk ya da kir olup olmadığının da incelenmesini istiyor.

**4. Kâğıt testi yap.** Kapının arasına bir kâğıt parçası koy ve çekmeyi dene. Samsung'a göre **kâğıt hiç direnç görmeden kolayca çekiliyorsa kapı düzgün kapanmıyor** demektir.

**5. Sıcaklığı ayarla.** Fişi yeniden tak. Samsung'un önerisi: **soğutucu 3 °C, dondurucu -19 °C.** Ayarı değiştirdikten sonra sıcaklığın dengelenmesi için buzdolabına zaman tanı, sonra sızıntının durup durmadığını kontrol et.

**6. Sıcak yiyeceği bekle.** Samsung'a göre sıcak yiyecek iç sıcaklığı artırarak aşırı nem oluşturur. Yiyecekleri buzdolabına koymadan önce oda sıcaklığında soğumalarını bekle.

**7. Yerleşime bak.** Samsung buzdolabının yanlarında ve arkasında **yeterli boşluk** bırakılmasını, ısı kaynaklarının yakınına ve doğrudan güneş alan yerlere konmamasını istiyor. Samsung'un soğutma sayfası bu boşluğu en az 5 cm olarak veriyor.

**8. Dengeyi ayarla.** Samsung'a göre yoğuşma suyunun cihazın altındaki damlama tepsisine akabilmesi için duruş çok önemlidir: buzdolabı **tamamen düz ya da öne doğru eğik** durursa su doğru akamaz ve zemine sızabilir. Ön ayakları ayarlayarak cihazın **hafifçe arkaya eğik** durmasını sağla. Samsung'un testi: kapıyı açıp bırak; doğru açıda kurulmuş bir buzdolabında kapı kendiliğinden kapanır.

## Tahliye kanalı ve damlama tepsisi

Samsung'a göre yiyecek parçacıkları ya da kalıntılar buz çözme tahliye kanalını tıkayarak su sızıntısına ya da donmaya neden olabilir. Ancak Samsung'un tarifine göre bu kanal dondurucunun iç arka kısmında, çoğu zaman **vidaları sökülerek çıkarılan bir panelin arkasında** olabilir; damlama tepsisine ulaşmak için de cihazın alt arka kısmındaki **metal kapağın çıkarılması** gerekir. Panel ve kapak sökme işini yetkili servise bırak.

Evde yapabileceğin tek şey Samsung'un buzlanma sayfasındaki tariftir: tahliyenin tıkalı olduğunu düşünüyorsan **gücü kapat ve buzların erimesini bekle**, sonra görünen kalıntıların etrafını temizle. Samsung, **tahliyeye ya da buzdolabının içine doğrudan sıcak su dökülmemesini** istiyor ve arıza tespiti için müşteri hizmetleriyle iletişime geçilmesini öneriyor.

Buzdolabının arkasındaki hortum ve bağlantılar için Samsung'un talimatı, her birinin gevşek ya da hasarlı olmadığının dikkatlice kontrol edilmesi. Bu kontrol gözle yapılır; su hattında hasar görürsen Samsung'un RF9000D kılavuzuna göre su hattı yetkili bir profesyonel tarafından onarılmalıdır.

## Ne zaman servis

Samsung'un destek sayfası sınırı kendisi çiziyor:

| Durum | Kimin işi |
|---|---|
| Kapı, sıcaklık ayarı, sıcak yiyecek, yerleşim, ön ayaklar | Senin, bu rehberdeki adımlar |
| Adımlardan sonra su sızıntısı devam ediyor | Samsung Destek |
| Soğutma performansı zayıfladı | Samsung Müşteri Hizmetleri |
| Su sürahisi bölümünden sürekli su damlıyor | Samsung Müşteri Hizmetleri |
| Tahliye kanalı paneli, damlama tepsisi kapağı | Söküm işi: yetkili servis |
| Kapı contası işlevini yitirmiş | Samsung'a göre onarım ya da değişim: yetkili servis |
| Su hattında hasar | Yetkili profesyonel |

⛔ **Kendin-çöz sınırı burada biter.** Sıcaklık ve yerleşim koşullarını kontrol ettikten sonra buzdolabı su sızdırmaya devam ediyorsa Samsung'a göre servis incelemesi gerekebilir.

Suyla birlikte içeride buz da birikiyorsa kardeş yazı: [Samsung buzdolabı buzlanma yapıyor](/blog/samsung-buzdolabi-buzlanma-yapiyor/). Soğutma da zayıfladıysa [Samsung buzdolabı soğutmuyor](/blog/samsung-buzdolabi-sogutmuyor/) yazısına bak. Markadan bağımsız sebepler için [buzdolabının altında su birikiyor](/blog/buzdolabi-altinda-su-birikiyor/) yazısı var. Ekranda bir kod görüyorsan [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısından başla.

## Servisi aramadan önce iki dakikalık özet

1. Su nerede: buzdolabının içinde, sebzeliğin altında, önünde, zeminde?
2. Kâğıt testinde kâğıt direnç görüyor mu?
3. Sıcaklık ayarı kaç derecede?
4. Kapıyı açıp bıraktığında kendiliğinden kapanıyor mu?
5. Su sebilli bir model mi, damlama sebilden mi geliyor?

Bu beşine cevabın varsa servise somut bir tablo anlatabilirsin.

Buzdolabının modelini ve belirtisini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Adımlar ve servis sınırı Samsung Türkiye'nin "Buzdolabımdan su sızması durumunda ne yapmalıyım?", "Buzdolabımın su sızdırdığından şüpheleniyorum ne yapmalıyım?" ve "Buzdolabımda buzlanma veya su sızıntısı varsa ne yapmalıyım?" destek sayfalarından; su hattı notu Samsung'un Türkçe RF9000D kullanım kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
