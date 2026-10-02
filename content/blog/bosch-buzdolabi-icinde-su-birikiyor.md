---
title: "Bosch buzdolabında su birikiyor"
description: "Bosch buzdolabının içinde, sebze kabında ya da tabanında su birikiyorsa Bosch kılavuzundaki sıra: yoğuşmayı sil, kapağı kısa aç, nem ayarı ve erimiş su oluğu."
slug: "bosch-buzdolabi-icinde-su-birikiyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Bosch belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, dördü de HTTP 200;
#   md5'ler 30 Eyl yerel kopyalarıyla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-siemens-buzdolabi-sprint/
# #88: bu belgeler için web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (N) KGN76..  https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec  (yoğuşma satırı)
#  (G) KGN..    https://media3.bosch-home.com/Documents/8001038528_C.pdf  31 s.  md5 cd247570369e116c3fa12d0168a87b0c
#  (V) KDV..    https://media3.bosch-home.com/Documents/9000603944_I.pdf  24 s.  md5 10776a2524a3e73d76e96699fac2ec33  (taban ıslak satırı)
#  (E) KGE..    https://media3.bosch-home.com/Documents/9000942062_D.pdf  31 s.  md5 fe03b1c8098c2a98f81913dd32feeca2  (oluk temizliği)
# Arıza satırları: N s.28 "Cihaz yüzeyinde ve cihazdaki gözlerde yoğuşma suyu birikiyor. — Sıcak ve nemli havada bulunan su, cihazın daha soğuk yüzeylerinde yoğunlaşır. 1. Temiz ve kuru bir bez kullanarak suyu siliniz.
#   2. Cihaz kapağını mümkün olduğunca kısa süreli açınız. 3. Cihaz kapağının her zaman doğru şekilde kapatılmış olmasına dikkat ediniz."
#   V s.18 "Soğutma bölmesinin tabanı ıslak. — Erimiş su akma olukları veya akıp boşalma deliği tıkanmıştır. — Erimiş suyun akma oluklarını ve akıp boşalma deliğini temizleyiniz (cihazın temizlenmesi bölümüne bakınız)."
# Diğer: N s.15 / G s.15 sebze kabında yoğuşma → kuru bezle sil, nem ayarını düşür · E s.20 erimiş su boşalma panosu: cam rafı çıkar, panoyu kaldır; oluk ve deliği pamuk uçlu çubuk ya da benzeri cisimle düzenli temizle
#   · V s.15 aynı ("uygun bir çubuk veya benzeri cisim") · N s.17 / G s.11 gövde alın yüzleri hafif ısıtılır, conta kısmında yoğuşma önlenir
#   · E s.20 temizlikten önce cihazı kapat, fişi çek · E s.25 E-Nr./FD.
# BİLEREK YAZILMAYANLAR: buzdolabının altına/zemine su sızması (bu belgelerde kullanıcıya dönük satır yok; markasız buzdolabi-altinda-su-birikiyor sayfasına link) · tahliye kanalını tel/iğne/şırınga ya da sıcak suyla açma (belgede yok; alet kuralı)
#   · buharlaşma kabına müdahale (arka panel; servis) · su sebili/buz yapıcı sızıntısı (bu modellerde yok) · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-buzdolabi-icinde-su-birikiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Temiz ve kuru bez", "Pamuk uçlu çubuk"]
steps:
  - "Yüzeylerde ve gözlerde biriken suyu temiz, kuru bir bezle sil."
  - "Kapağı mümkün olduğunca kısa süreli aç."
  - "Kapağın her seferinde doğru şekilde kapandığına dikkat et."
  - "Sebze kabında su varsa kuru bezle sil ve nem ayarını düşük konuma al."
  - "Soğutma bölmesinin tabanı ıslaksa cihazı kapat, sebze kabının üstündeki cam rafı ve erimiş su boşalma panosunu çıkar."
  - "Erimiş su akma oluğunu ve boşalma deliğini pamuk uçlu bir çubukla temizle, parçaları yerine tak."
faq:
  - q: "Bosch buzdolabımın içinde neden su damlacıkları oluşuyor?"
    a: "Bosch'un KGN76.. kılavuzundaki arıza satırına göre sıcak ve nemli havada bulunan su, cihazın daha soğuk yüzeylerinde yoğunlaşır. Bosch'un çözümü suyu temiz, kuru bir bezle silmek, kapağı mümkün olduğunca kısa açmak ve kapağın her zaman doğru şekilde kapanmasına dikkat etmek."
  - q: "Sebze çekmecesinde su birikiyor, arıza mı?"
    a: "Bosch'a göre depolanan yiyeceğin türüne ve miktarına bağlı olarak meyve ve sebze kabında yoğuşma suyu oluşabilir. Çözüm yoğuşan suyu kuru bir bezle silmek ve nem ayarlayıcıyla daha düşük bir nem seçmek. Kılavuz ağırlıklı meyve depolama, karışık ya da yüksek miktarda depolama için düşük nem öneriyor."
  - q: "Buzdolabının tabanında su göletleniyor. Ne yapmalıyım?"
    a: "Bosch'un KDV.. kılavuzundaki arıza satırına göre soğutma bölmesinin tabanı ıslaksa erimiş su akma olukları ya da akıp boşalma deliği tıkanmıştır. Bosch bu oluğun ve deliğin düzenli aralıklarla temizlenmesini istiyor; KGE.. kılavuzu bunun için pamuk uçlu bir çubuk ya da benzeri bir cisim öneriyor."
  - q: "Buzdolabının kapı çevresindeki ön kenarları hafif ılık, arıza mı?"
    a: "Bosch'un kılavuzlarına göre gövdenin alın yüzleri bazen hafif ısıtılıyor; böylece kapı contası kısmında yoğuşma suyu ya da terleme suyu oluşması önleniyor. Bu bir arıza değil."
images:
  coverAlt: "Açık bir buzdolabının soğutucu bölmesinde arka duvardaki erimiş su oluğu ve tabanda küçük su birikintisi, yanında katlanmış kuru bez"
---

Buzdolabını açtığında rafların üstünde su damlacıkları, sebze çekmecesinin dibinde su ya da soğutucu bölmenin tabanında küçük bir gölet görüyorsun. Bosch'un buzdolabı kılavuzlarında bu üç durumun her biri ayrı yerde anlatılıyor ve sebepleri farklı: raflardaki damlalar için **yoğuşma**, sebze kabındaki su için **nem ayarı**, tabandaki su için **tıkanmış erimiş su oluğu.** Bosch'un KDV.. kılavuzundaki arıza satırı tabandaki suyu tek cümleyle açıklıyor: **"Erimiş su akma olukları veya akıp boşalma deliği tıkanmıştır."** Bu yazıda Bosch'un dört kılavuzundaki sırayı açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yüzeydeki suyu kuru bezle sil → kapağı kısa aç, her seferinde doğru kapat → sebze kabındaki suyu sil, nem ayarını düşür → taban ıslaksa cam rafı ve boşalma panosunu çıkar, erimiş su oluğunu ve deliğini pamuk uçlu çubukla temizle.

## Adım adım: evde denenecekler

**1. Yoğuşan suyu sil.** Bosch'un KGN76.. arıza tablosundaki satır: **"Cihaz yüzeyinde ve cihazdaki gözlerde yoğuşma suyu birikiyor."** Açıklama: **sıcak ve nemli havada bulunan su, cihazın daha soğuk yüzeylerinde yoğunlaşır.** İlk adım: **temiz ve kuru bir bez kullanarak suyu sil.**

**2. Kapağı kısa aç.** Aynı satırın ikinci adımı: **cihaz kapağını mümkün olduğunca kısa süreli aç.** Bosch'un sağlık uyarısı da kapağın uzun süre açık kalmasının bölmelerde önemli bir ısı artışına neden olabileceğini yazıyor.

**3. Kapağın doğru kapandığından emin ol.** Satırın üçüncü adımı: **cihaz kapağının her zaman doğru şekilde kapatılmış olmasına dikkat et.** Kapak tam oturmuyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısına bak.

**4. Sebze kabını sil ve nem ayarını düşür.** Bosch'a göre **depolama miktarına ve depolanan yiyeceğe göre meyve ve sebze kabı içinde yoğuşma suyu oluşabilir.** Çözüm: **yoğuşan suyu kuru bir bezle sil ve nem ayarlayıcıyla daha düşük bir nem ayarla.** KGN76.. kılavuzu **ağırlıklı meyve depolama, karışık ya da yüksek miktarda depolama** için **düşük nem**, ağırlıklı sebze ya da az miktar için **yüksek nem** öneriyor.

**5. Taban ıslaksa erimiş su panosunu çıkar.** KDV.. kılavuzundaki satır: **"Soğutma bölmesinin tabanı ıslak."** Sebep: **erimiş su akma olukları ya da akıp boşalma deliği tıkanmış.** Bosch'un temizlik bölümüne göre önce **cihazı kapat ve fişini çek.** Oluğa ulaşmak için KGE.. kılavuzundaki sıra: **sebze çekmecesinin üstündeki cam rafı cihazdan çıkar,** sonra **erimiş su boşalma panosunu yukarı kaldırıp çıkar.**

**6. Oluğu ve deliği temizle.** Bosch'un talimatı: **erimiş su akma oluğunu ve boşalma deliğini, erimiş suyun akıp boşalabilmesi için pamuk uçlu bir çubuk ya da benzeri bir cisim yardımıyla düzenli aralıklarla temizle.** Bitince panoyu ve cam rafı yerine tak, cihazı yeniden çalıştır.

## Arıza sanılan normal durumlar

Bosch'un kılavuzlarına göre **gövdenin alın yüzleri bazen hafif ısıtılıyor;** böylece **kapı contası kısmında yoğuşma suyu ya da terleme suyu oluşması önleniyor.** Kapı çevresinde gövdenin ön kenarlarının hafif ılık olması bu yüzden.

Su buzdolabının içinde değil de **altında, zeminde** birikiyorsa bu kılavuzlarda kullanıcıya dönük bir satır yok; markadan bağımsız [buzdolabı altında su birikiyor](/blog/buzdolabi-altinda-su-birikiyor/) yazısına bak.

Dondurucuda buz birikmişse [Bosch buzdolabı buzlanma yapıyor](/blog/bosch-buzdolabi-buzlanma-yapiyor/), içeride koku da varsa [Bosch buzdolabı kokuyor](/blog/bosch-buzdolabi-kokuyor/) yazısına geç.

## Ne zaman servis

Yüzeyler silinmiş, kapak düzgün kapanıyor, nem ayarı düşürülmüş, oluk ve delik temizlenmiş ve taban yine ıslanıyorsa yetkili servise başvur. Bosch'un kılavuzu servisi çağırırken cihazın **ürün numarasını (E-Nr.) ve imalat numarasını (FD)** bildirmeni istiyor; ikisi de **tip levhasında** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Bez, kapak, nem ayarı ve oluk temizliği kullanıcıya; arka panel, buharlaşma kabı ve soğutma sistemi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Su nerede: raflarda, sebze kabında, tabanda mı, yoksa buzdolabının altında mı?
2. Kapak ne sıklıkla ve ne kadar süre açılıyor?
3. Erimiş su oluğu ve deliği temizlendi mi?
4. Cihaz düzgün soğutuyor mu?
5. E-Nr. ve FD numarası elinde mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
