---
title: "Grundig buzdolabı hiç durmuyor"
description: "Grundig buzdolabı çok sık ya da çok uzun çalışıyorsa önce Grundig'in normal saydığı durumlara, sonra kapı, conta ve sıcaklık ayarına bak."
slug: "grundig-buzdolabi-hic-durmuyor"
date: "2026-10-01"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Grundig belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf.
#   download.grundig.com https'te bağlantı kurmadı (curl 000); aynı yol http ile 200. www.grundig.com.tr arşivi Akamai 403. Web araması yalnız PDF adresini bulmak için.
#   Okuma pdftotext -layout; sayfa = PDF sayfası. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-grundig-sprint/
#  (A) GRND 6101 I  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202108241628726_User%20Manual%20-%20File%20(Long)tr_TR.pdf  53 s.  md5 7cf3488e82cda67daa084bfe19423e45  (sayfa atıfları esas olarak A; PDF = basılı)
#  (B) GSND6384S    http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_20210824114384_User%20Manual%20-%20File%20(Long)tr_TR.pdf  41 s.  md5 a93764708e38aca9522b672a87cbb545  (PDF s.31-33 = basılı 30-32)
# Sorun giderme satırı (A s.44-45 · B s.31-32): "Buzdolabı çok sık ya da çok uzun süre çalışıyor." → yeni ürün daha geniş (normal) / oda sıcaklığı yüksek (normal) / fiş yeni takılmış ya da yeni yiyecek (normal)
#   / fazla sıcak yemek / kapılar sık açılmış ya da uzun açık / kapı aralık / çok düşük sıcaklık ayarı (daha yüksek dereceye ayarla) / conta kirli, eskimiş, kırık, tam oturmamış (temizle ya da değiştir).
# Diğer: A s.44 kompresör satırı (6 dk termik, buz çözme normal) ve "çalışma sesi artıyor" (ortam sıcaklığı, normal) · A s.45 dondurucu/soğutucu çok soğuk satırları, sarsılma (ayak ayarı)
#   · A s.46 "Kapı kapanmıyor" (paketler kapıyı engelliyor, ayak, zemin) · A s.43 temizlikten önce elektrik bağlantısını kes; ılık su ve yumuşak bez; aşındırıcı alet, sabun, deterjan yok.
# BİLEREK YAZILMAYANLAR: conta DEĞİŞİMİ adımı (#31 parça değişimi; A s.47 "Kendim tamir etmek istiyorum" listesinde olsa da rehberde servis yönlendirmesi) · gaz/kompresör/termostat arızası teşhisi (belgede bu satırda yok)
#   · duvar mesafesi ile çalışma süresi bağlantısı (belgede bu satırda kurulmuyor) · derece önerisi (model ayar aralığı farklı) · fiyat.
# Yakın kopya notu: yayındaki arcelik-buzdolabi-sogutmuyor aynı grup tablosunun kapı/conta/sıcak yemek satırlarını kullanıyor; bu yazı ayrı belirtiye (çok uzun çalışma) ve
#   Grundig'in "normal" saydığı durumlara, sıcaklığı DAHA YÜKSEK dereceye alma yönüne ve kapı kapanmama satırına dayanıyor.
# Alıntı denetim tablosu: grundig-buzdolabi-hic-durmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Ilık su"]
steps:
  - "Fişi yeni taktıysan ya da yeni yiyecek koyduysan buzdolabının ayarlanan sıcaklığa ulaşmasını bekle."
  - "Buzdolabına sıcak yemek koyma."
  - "Kapıları çok sık açma ve uzun süre açık bırakma."
  - "Kapıyı engelleyen paketlerin yerini değiştir ve iki kapının da tamamen kapalı olduğunu kontrol et."
  - "Sıcaklık çok düşük ayarlıysa daha yüksek bir dereceye ayarla ve buzdolabının o sıcaklığa ulaşmasını bekle."
  - "Kapı contası kirliyse fişi çekip ılık su ve yumuşak bezle temizle, sonra kurula."
faq:
  - q: "Grundig buzdolabımın uzun çalışması normal mi?"
    a: "Bazı durumlarda evet. Grundig'in sorun giderme tablosu üç durumu açıkça normal sayıyor: yeni ürünün eskisinden daha geniş olması, oda sıcaklığının yüksek olması ve fişin yeni takılmış ya da yeni yiyecek konmuş olması. Kılavuza göre daha büyük ürünler daha uzun çalışır, sıcak ortamlarda daha uzun çalışma normaldir."
  - q: "Fişi çekip taktıktan sonra motor hemen çalışmıyor, arıza mı?"
    a: "Grundig'e göre değil. Ani elektrik kesilmesinde ya da fişin çıkarılıp takılmasında soğutma sistemindeki gazın basıncı henüz dengelenmediği için kompresör koruyucu termiği atar ve ürün yaklaşık 6 dakika sonra çalışmaya başlar. Bu süre sonunda çalışmazsa kılavuz servis çağırmanı istiyor. Tam otomatik buz çözme yapan ürünlerde buz çözme döngüsü sırasında kompresörün durması da normal."
  - q: "Buzdolabı çalışırken sesi artıyor, sorun var mı?"
    a: "Grundig'in tablosuna göre ortam sıcaklığı değiştikçe ürünün çalışma performansı değişebilir; bu normaldir ve arıza değildir. Sarsılma ya da gürültü varsa kılavuz zeminin düz ve dayanıklı olmasına, ürün sallanıyorsa ayaklarının ayarlanmasına ve üzerindeki eşyaların kaldırılmasına bakmanı istiyor."
  - q: "Kapı contası yıpranmışsa ne yapmalıyım?"
    a: "Grundig'in tablosuna göre hasarlı ya da kopuk kapı contası ürünün sıcaklığı korumak için daha uzun çalışmasına neden olur; kılavuz contanın temizlenmesini ya da değiştirilmesini söylüyor. Temizlik senin işin; conta eskimiş, kırılmış ya da yerine oturmuyorsa değişim için yetkili servise başvur."
images:
  coverAlt: "Mutfakta kapıları kapalı duran iki kapılı bir buzdolabı, alt kapının kenarında içerideki bir paketin kapıyı hafifçe araladığı görülüyor"
---

Buzdolabının sesi neredeyse hiç kesilmiyor ya da çok sık devreye giriyor. Grundig'in buzdolabı kullanma kılavuzlarındaki sorun giderme tablosunda bu durumun kendi satırı var: **"Buzdolabı çok sık ya da çok uzun süre çalışıyor."** Grundig bu satırda sekiz madde sayıyor; üçünü **normal** kabul ediyor, geri kalan beşi kapı, conta, sıcak yemek ve sıcaklık ayarıyla ilgili. Yani ilk iş, uzun çalışmanın gerçekten bir sorun olup olmadığını anlamak. Bu yazı Grundig'in GRND 6101 I ve GSND6384S kılavuzlarına dayanıyor; iki belgede de satır aynı içerikte. Tuş ve ayar adları modeline göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yeni ve daha büyük bir buzdolabı, sıcak bir oda ya da yeni takılmış fiş Grundig'e göre uzun çalışmanın normal sebepleri. Bunlar değilse: sıcak yemek koyma, kapıyı sık açma, paketlerin kapıyı aralık bırakmadığından emin ol, sıcaklık çok soğuksa daha yüksek bir dereceye al, kirli contayı ılık suyla temizle.

## Önce: Grundig'in normal saydığı durumlar

**Yeni ürün eskisinden daha geniş olabilir.** Grundig'e göre **daha büyük ürünler daha uzun süre çalışır.**

**Oda sıcaklığı yüksek olabilir.** Kılavuz: **sıcak ortamlarda daha uzun süre çalışması normaldir.** Aynı tablonun "çalışma sesi artıyor" satırı da ortam sıcaklığı değiştikçe çalışma performansının değişebileceğini ve bunun **arıza olmadığını** yazıyor.

**Kompresörün durup kalkması.** Tablonun kompresör satırına göre **tam otomatik buz çözme** yapan ürünlerde buz çözme döngüsü periyodik olarak gerçekleşir; bu sırada kompresörün çalışmaması **normaldir.** Elektrik kesintisinden ya da fişi çıkarıp taktıktan sonra ise kompresör koruyucu termiği atar ve ürün **yaklaşık 6 dakika sonra** çalışmaya başlar.

Bunların hiçbiri senin durumuna uymuyorsa aşağıdaki adımlara geç.

## Adım adım: evde denenecekler

**1. Yeni takıldıysa bekle.** Grundig'in tablosundaki madde: **ürünün fişi daha yeni takılmış ya da yeni yiyecek konmuş** olabilir. Kılavuza göre bu durumda ürünün **ayarlanan sıcaklığa ulaşması daha uzun zaman alır;** bu **normaldir.**

**2. Sıcak yemek koyma.** Tablodaki madde: ürüne yakın zamanda **fazla miktarlarda sıcak yemek** konmuş olabilir. Grundig'in çözümü kısa: **ürüne sıcak yemek koyma.**

**3. Kapıyı sık açma.** Tablodaki madde: kapılar **sık sık açılmış ya da uzun süre açık** kalmış olabilir. Grundig'in açıklaması: **içeri giren sıcak hava** ürünün daha uzun çalışmasına neden olur. Çözüm: kapıları **çok sık açma.**

**4. Kapıları tam kapat.** Tablodaki madde: **dondurucu ya da soğutucu kapısı aralık** kalmış olabilir; Grundig kapıların **tamamen kapalı olup olmadığını** kontrol etmeni istiyor. Kılavuzun "Kapı kapanmıyor" satırındaki ilk sebep: **yiyecek paketleri kapının kapanmasını engelliyor** olabilir; çözüm **kapıları engelleyen paketlerin yerini değiştirmek.** Aynı satıra göre ürün zeminde **tamamen dik durmuyorsa** kapı yine kapanmayabilir; o durumda kılavuz **ayakları ayarlayarak** ürünü dengelemeni istiyor.

**5. Çok soğuksa ayarı yükselt.** Tablodaki madde: ürün **çok düşük bir sıcaklığa ayarlanmış** olabilir. Grundig'in çözümü: sıcaklığı **daha yüksek bir dereceye** ayarla ve ürünün **bu sıcaklığa ulaşmasını bekle.** Tablonun ayrı satırları da aynı yönde: dondurucu çok soğuk ama soğutucu yeterliyse **dondurucu bölme**, soğutucu çok soğuk ya da çekmecedeki yiyecekler donuyorsa **soğutucu bölme** sıcaklığını daha yüksek bir değere alıp kontrol et.

**6. Kirli contayı temizle.** Tablodaki son madde: soğutucu ya da dondurucu **kapı contası kirlenmiş, eskimiş, kırılmış ya da tam oturmamış** olabilir. Grundig'e göre **hasarlı ya da kopuk kapı contası** ürünün mevcut sıcaklığı korumak için **daha uzun süre çalışmasına** neden olur; çözüm **contayı temizlemek ya da değiştirmek.** Temizlikten önce kılavuzun uyarısına uy: **elektrik bağlantısını kes.** Grundig plastik parçalar için **ılık su ile yumuşak bez** öneriyor; **keskin ve aşındırıcı aletler, sabun, ev temizlik maddeleri, deterjan** kullanmamanı istiyor. Temizledikten sonra kurula.

## Ne zaman servis

Grundig'in tablosundaki kullanıcı adımları burada bitiyor. Kapılar tam kapanıyor, conta temiz, sıcak yemek yok, sıcaklık ayarı makul ve oda sıcak değilken buzdolabı hâlâ hiç durmuyorsa durumu yetkili servise anlat. Conta **eskimiş, kırılmış ya da yerine oturmuyorsa** değişimini de servise bırak. Kompresör, fişi taktıktan **6 dakika sonra** hâlâ çalışmıyorsa Grundig'in kendi talimatı **servis çağırmak.** Kılavuzun genel uyarısı: talimatları uygulamana rağmen sorunu gideremezsen ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Kapı, ayar, yükleme ve conta temizliği sana; soğutma sistemi ve parça değişimi yetkili servise aittir. Markadan bağımsız anlatım için [buzdolabı hiç durmuyor](/blog/buzdolabi-hic-durmuyor/), conta için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) ve ayar için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazılarına bakabilirsin.

## Servisi aramadan önce kısa özet

1. Buzdolabı yeni mi, eskisinden büyük mü?
2. Mutfak ne kadar sıcak?
3. Sıcaklık ayarları kaçta?
4. Kapı contasında yırtık, kırık ya da oturmayan bir yer var mı?
5. İçerisi yeterince soğuk mu, yoksa hem uzun çalışıp hem soğutmuyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
