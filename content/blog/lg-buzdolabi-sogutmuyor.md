---
title: "LG buzdolabı soğutmuyor: evde kontrol"
description: "LG buzdolabı yeterince soğutmuyorsa LG Türkiye'nin sırası: sıcaklık ayarı, doluluk, kapı ve conta, duvar mesafesi, kurulum yeri ve servis sınırı."
slug: "lg-buzdolabi-sogutmuyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr). ABD LG kaynağı KULLANILMADI.
# Metin, sayfaların gömülü "support-help-article-schema" JSON-LD'sindeki articleBody alanından çıkarıldı (ext.py). Tek sayfalık HTML makaleler; PDF değil.
# HTML her istekte değişen dinamik parçalar taşıyor → tekrar üretilebilir kanıt çıkarılan metnin md5'i.
# Web araması YALNIZ sayfaların YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  S1) "[LG buzdolabı soğutma] Soğutma zayıf." (datePublished 2025-09-24)  1 sayfa (HTML)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392157364/
#      html md5 c2cece60bc6b57c8a0515dc31cae2c18 · metin md5 ce5a5ecc376089129ee98c593362f368  (ana kaynak)
#  S2) "[LG buzdolabı kurulumu] Buzdolabını duvardan ne kadar mesafeye kurmalıyım?" (2025-09-27)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153397151196/
#      html md5 670439e91b5b7897598d3e400b95d015 · metin md5 bfca092b8e9713fcfbd99af6e47c9638
#  S3) "[LG buzdolabı hata kodları] Ekranda [ER(E), CH veya CL] yazan bir metin belirir." (2025-09-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392534839/  (28 Eyl'de indirildi, HTTP 200) · metin md5 8edf8eacf3fd9494e07cdb3b6711f0b2
#      S3 alıntı: "[ER(E) CH/CL] hata kodu, … soğutma gücünde azalma tespit edildiğinde … bir inceleme kodudur." / "Döngüde bir sorun olabilir (soğutucu sızıntısı, kompresör arızası, valf arızası vb.), bu nedenle bir LG servis teknisyeni tarafından kontrol edilmesi önerilir."
#      "Ürünün gücünü kapatın veya devre kesiciyi açın ve ardından yaklaşık 5 dakika sonra devre kesiciyi sıfırlayın.※ Gücü sıfırladıktan sonra bile aynı belirtiler tekrarlanırsa, bir LG servis teknisyenine kontrol ettirin."
# Birebir alıntılar:
#   S1: "Buzdolabında ayarlanan sıcaklık uygun değil. Buzdolabı gıda ürünleri ile dolu. Buzdolabının kapısı düzgün kapatılmamış. Buzdolabının kurulu olduğu yer uygun değil. Buzdolabı yakın zamanda kuruldu."
#   S1: "➔ Sıcaklığı [1-2°C] daha düşük ayarlayın. İlk kurulduğunda soğutma sıcaklığı 3 °C'ye ayarlanmıştır."
#   S1: "➔ Soğuk havanın eşit şekilde dolaşabilmesi için buzdolabını yiyecek kapasitesinin yalnızca yaklaşık %60'ına kadar doldurun."
#   S1: "Kapı contası aşınmışsa ve kapı ile buzdolabı gövdesi arasında bir boşluğa neden oluyorsa rehberlik için LG Electronics servis merkeziyle iletişime geçin."
#   S1: "➔ Buzdolabının arkası ve yanları ile duvarlar arasında 10 cm mesafe bırakın." / "➔ Buzdolabı, ortam sıcaklığının 5-43°C olduğu yerlerde en iyi şekilde çalışacaktır. Kurulum yerini iç mekana taşıyın."
#   S1: "Elektrik fişini prize taktıktan sonra buzdolabının ayarlanan sıcaklığa ulaşması yaklaşık 1-2 saat sürer." / "Yaz aylarında, buzdolabının soğuk hava ile iyice doldurulması 2-3 gün bile sürebilir."
#   S2: "Buzdolabı kapısının üst kısmı ile buzdolabının kurulu olduğu dolap arasında en az 2.5 cm boşluk bırakın."
# BİLEREK YAZILMAYANLAR: S1'deki "Kore Enerji Ajansı" atfı (Türkiye okuruna yönelik değil) · gaz/kompresör teşhisi (belgede kullanıcıya adım yok, #31) ·
#   LG "Buzdolabı Soğutmuyor" sayfası (cs-…20153354370880) articleBody'si yalnız başlık → kaynak olarak KULLANILMADI · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: lg-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (soğumayı bekleme hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Deterjanlı su", "Mezura (varsa)"]
steps:
  - "Ekrandaki kilidi aç ve buzdolabı bölmesinin sıcaklığını 1-2 °C düşür."
  - "Buzdolabını kapasitesinin yaklaşık %60'ına kadar doldur, soğuk hava çıkışlarının önünü yiyecekle kapatma."
  - "Temizlikten sonra yanlış takılmış çekmece ve rafları çıkarıp doğru yerlerine yerleştir."
  - "Kapı rafı çok doluysa ve kapı gevşek kapanıyorsa yiyeceklerin bir kısmını çıkar."
  - "Kapı contası kirden yapışıyorsa temizle."
  - "Buzdolabının arkası ve yanlarıyla duvar arasında 10 cm boşluk bırak."
  - "Buzdolabı balkon gibi sıcaklığın çok değiştiği bir yerdeyse ortam sıcaklığı 5-43 °C olan bir iç mekâna taşı."
  - "Conta aşınıp kapıyla gövde arasında boşluk kalıyorsa ya da ekranda Er CH / Er CL çıkıyorsa LG servisine başvur."
faq:
  - q: "LG buzdolabı neden yeterince soğutmaz?"
    a: "LG Türkiye'nin yardım sayfası beş neden sayıyor: ayarlanan sıcaklık uygun değil, buzdolabı gıdayla çok dolu, kapı düzgün kapanmamış, kurulum yeri uygun değil ya da buzdolabı yakın zamanda kurulmuş. Bu beşinin hepsi evde kontrol edilebilir."
  - q: "LG buzdolabı kaç dereceye ayarlı gelir?"
    a: "LG'ye göre buzdolabı ilk kurulduğunda soğutma sıcaklığı 3 °C'ye ayarlıdır. Sıcak yaz aylarında kapı sık açılıp kapanıyorsa LG sıcaklığın 1-2 °C daha düşük ayarlanmasını öneriyor. Sıcaklık tuşunun yeri modele göre değişir; kendi kılavuzuna bakabilirsin."
  - q: "Yeni aldığım LG buzdolabı soğutmuyor, arıza mı?"
    a: "LG'ye göre fiş takıldıktan sonra buzdolabının ayarlanan sıcaklığa ulaşması yaklaşık 1-2 saat sürer; yaz aylarında buzdolabının soğuk havayla iyice dolması 2-3 gün bile sürebilir. LG, yiyecekleri buzdolabı ayarlanan sıcaklığa ulaştıktan sonra koymayı öneriyor."
  - q: "Buzdolabını duvara ne kadar yakın koyabilirim?"
    a: "LG buzdolabının arkası ve yanlarıyla duvarlar arasında 10 cm mesafe istiyor. Buzdolabı bir dolabın içine kuruluysa kapının üst kısmıyla dolap arasında en az 2,5 cm boşluk bırakılmalı. Arkadaki sıcak hava dışarı çıkamazsa soğutma zayıflar."
  - q: "Ekranda Er CH ya da Er CL yazıyor, ne yapmalıyım?"
    a: "LG'ye göre bu kod soğutma gücünde azalma tespit edildiğinde çıkan bir inceleme kodudur. Kullanım sırasında çıktıysa gücü kapatıp yaklaşık 5 dakika sonra yeniden açmak deneniyor; aynı belirti tekrarlanırsa LG servis teknisyenine kontrol ettirilmesi gerekiyor. Ayrıntısı Er CH / CL rehberimizde."
images:
  coverAlt: "Mutfakta duvardan biraz uzakta duran gri bir LG buzdolabı; kapısı açık, raflar yarı dolu ve yiyecekler arasında boşluk var"
---

Buzdolabı çalışıyor ama içi eskisi kadar soğuk değil. LG Türkiye'nin yardım sayfası bu belirtiyi **"Soğutma zayıf"** başlığıyla anlatıyor ve beş neden sayıyor: **ayarlanan sıcaklık uygun değil, buzdolabı gıdayla dolu, kapı düzgün kapanmamış, kurulum yeri uygun değil ya da buzdolabı yakın zamanda kurulmuş.** Beşi de evde kontrol edilebilir. Bu yazıda LG'nin kendi sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ayar: kilidi aç, sıcaklığı 1-2 °C düşür. Sonra hava yolu: buzdolabını yaklaşık %60 doldur, çıkışları kapatma. Sonra kapı: raflar doğru takılı mı, kapı rafı çok mu dolu, conta temiz mi? Sonra yer: duvardan 10 cm, ortam 5-43 °C. Conta aşınmışsa ya da ekranda Er CH / Er CL varsa → LG servisi.

## LG'ye göre nedenler

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Ayarlanan sıcaklık uygun değil | Evet, ön paneldeki sıcaklık tuşundan |
| Buzdolabı gıda ürünleriyle çok dolu | Evet, yiyecekleri yeniden düzenleyerek |
| Kapı düzgün kapanmıyor | Evet, raf, kapı rafı ve conta kontrolü |
| Kurulum yeri uygun değil | Evet, duvar mesafesi ve ortam sıcaklığı |
| Buzdolabı yakın zamanda kuruldu | Evet, beklemek yeterli |
| Conta aşınmış, kapıyla gövde arasında boşluk var | Hayır, LG servisi |

LG bir noktanın altını çiziyor: buzdolabının içinde üretilen soğuk hava **eşit dolaşmazsa**, buzdolabı normal çalışsa bile içerisi daha az soğuk hissedilir. Aşağıdaki adımların çoğu bu dolaşımı geri açmakla ilgili.

## Adım adım: evde denenecekler

**1. Sıcaklığı 1-2 °C düşür.** LG'ye göre buzdolabı ilk kurulduğunda soğutma sıcaklığı **3 °C**'ye ayarlıdır; sıcak yaz aylarında kapı sık açılıp kapanıyorsa bu yetmeyebilir. Ön paneldeki kilit tuşuna basarak kilidi aç, sonra buzdolabı sıcaklığını bir ya da iki derece düşür. Tuşun yeri modele göre değişir; kendi kılavuzuna bakabilirsin.

**2. Yaklaşık %60 doldur.** LG, soğuk havanın eşit dolaşabilmesi için buzdolabının kapasitesinin **yalnızca yaklaşık %60'ına** kadar doldurulmasını öneriyor. Yiyecekler soğuk hava çıkışını kapatırsa buzdolabı normal çalışsa bile iç kısım eskisi kadar soğuk hissedilmez.

**3. Rafları doğru tak.** Temizlikten sonra çekmece ya da raf yanlış takıldıysa kapı tam kapanmaz. Çekmeceleri ve rafları çıkarıp doğru yerlerine yerleştir.

**4. Kapı rafını hafiflet.** Kapı rafında çok fazla yiyecek varsa kapı gevşer. Yiyeceklerin bir kısmını çıkar.

**5. Contayı temizle.** Kapı contası kirden yapışıyorsa kapı düzgün kapanmaz. LG contanın temizlenmesini ve bunun düzenli yapılmasını istiyor. Conta bakımının ayrıntısı [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısında.

**6. Duvardan 10 cm uzaklaştır.** LG buzdolabının arkası ve yanlarıyla duvarlar arasında **10 cm** mesafe istiyor. Buzdolabı bir dolabın içindeyse kapının üst kısmıyla dolap arasında **en az 2,5 cm** boşluk bırak. Arkadaki fandan çıkan sıcak hava kaçamazsa soğutma sonunda zayıflar.

**7. Kurulum yerini kontrol et.** LG'ye göre buzdolabı ortam sıcaklığının **5-43 °C** olduğu yerlerde en iyi çalışır. Balkon gibi sıcaklığın çok değiştiği bir yerdeyse iç mekâna taşı.

**8. Sınırı bil.** Kapı contası aşınmışsa ve kapıyla gövde arasında boşluk kalıyorsa LG, servis merkeziyle iletişime geçilmesini istiyor. Ekranda **Er CH** ya da **Er CL** görünüyorsa [LG buzdolabı Er CH / CL hatası](/blog/lg-buzdolabi-er-ch-cl-hatasi/) yazısındaki sırayı izle.

## Buzdolabı yeni mi kuruldu?

LG'ye göre yiyeceklerin saklanabileceği sıcaklığa ulaşmak için yeterli soğuk hava üretmek zaman gerektirir; ilk kurulumdan sonra soğutma zayıf hissedilebilir. LG'nin verdiği süreler:

- Fiş takıldıktan sonra buzdolabının ayarlanan sıcaklığa ulaşması **yaklaşık 1-2 saat** sürer.
- Yaz aylarında buzdolabının soğuk havayla iyice dolması **2-3 gün** bile sürebilir.

LG, yiyecekleri buzdolabı ayarlanan çalışma sıcaklığına ulaştıktan sonra koymayı öneriyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Sıcaklık ayarı, doluluk, raflar, conta temizliği, duvar mesafesi, kurulum yeri | Senin, bu rehberdeki adımlar |
| Conta aşınmış, kapıyla gövde arasında boşluk | LG servis merkezi |
| Ekranda Er CH / Er CL (soğutma gücünde azalma) | Önce Er CH / CL rehberindeki güç sıfırlama; tekrarlarsa LG servisi |
| Ekranda Er FF ya da başka bir kod | İlgili kod rehberi, sonra LG servisi |

⛔ Buzdolabının arkasındaki mekanik bölmenin kapağını açma, gaz hattına ve kompresöre dokunma. LG'nin Er CH / CL sayfası soğutma döngüsündeki sorunları (soğutucu sızıntısı, kompresör ya da valf arızası) servis teknisyeninin kontrol etmesi gereken durumlar olarak sayıyor.

Ekranda fan kodu varsa [LG buzdolabı Er FF hatası](/blog/lg-buzdolabi-er-ff-hatasi/), diğer kodlar için [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısına bakabilirsin. Markadan bağımsız diğer sebepler [buzdolabı soğutmuyor](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısında.

---

**Kaynak künyesi.** Nedenler, adımlar ve süreler LG Türkiye'nin "[LG buzdolabı soğutma] Soğutma zayıf." yardım sayfasından; dolap içi kurulum boşluğu LG Türkiye'nin duvar mesafesi sayfasından alınmıştır. LG'nin kendi notuna göre bu içerik tüm modeller için hazırlanmıştır; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
