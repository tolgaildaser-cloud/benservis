---
title: "Vestel buzdolabı soğutmuyor"
description: "Vestel buzdolabı soğutmuyorsa Vestel'in sorun giderme sırası: ayar, kapı, arka duvar, doluluk, duvar mesafesi ve ortam sıcaklığı; servis sınırı."
slug: "vestel-buzdolabi-sogutmuyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Dört belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200;
#   md5'ler 27 Eyl yerel kopyalarıyla birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (-f/-l).
# Web araması KULLANILMADI: adresler yayındaki vestel-buzdolabi-e10-hatasi ve buzdolabi-altinda-su-birikiyor provenanslarından alındı.
#  R1) NF52001 / NF52001 S        https://statik.vestel.com.tr/webfiles/20263682_k.pdf  48 s.  md5 686a18210032057be328243bd73f033b  (sayfa atıfları bu belgeye göre)
#  R2) NFK52002 E / ES / EX WIFI  https://statik.vestel.com.tr/webfiles/20263704_k.pdf  48 s.  md5 70b85e8c382ca01b421f743d8117c15a
#  R3) NFK64012 E GI WIFI / EX GI https://statik.vestel.com.tr/webfiles/20264529_k.pdf  52 s.  md5 3315ec7d9a3a928facd0f2d7df92092a
#  R4) R 5402 NF (eski)           https://static.vestel.com.tr/kullanimkilavuzlari/52028600.pdf  28 s.  md5 59b1a670570aa68dfcf1f1d808fa724b
# "Sorun Giderme" — "Buzdolabınız yeterli soğutma yapmıyor." satırı R1 s.38, R2 s.39, R3 s.41'de birebir; R4 s.22 "Servis çağırmadan önce"
#   listesinde aynı maddeler soru biçiminde ("Termostat ayarı doğru yapılmış mı?" ...). Sebep | çözüm (R1 s.38):
#   "Sıcaklık ayarları doğru yapılmamış olabilir. | Sıcaklık ayarlarını daha soğuk konuma getirin."
#   "Buzdolabınızın kapıları sık açılıyor veya uzun süreli açık kalıyor olabilir. | Kapıları sık açıp kapatmayın. Özellikle bu durumda birkaç saat kapıları açıp kapatmayın."
#   "Buzdolabınızın kapıları tam olarak kapanmamış olabilir. | Dolabın içine yüklenen yiyecekler kapıya temas ediyor olabilir. Bu durumu düzelttiğiniz halde kapılar kapanmıyorsa yetkili teknik servisten yardım talep ediniz."
#   "...hava dolaşımını engelleyecek şekilde arka duvarına temas eden kap veya yiyecek yerleştirilmiş olabilir. | Dolabınızın içine yiyecekleri yerleştirirken bu duruma dikkat ediniz."
#   "Buzdolabınız aşırı derecede dolu olabilir. | Fazla yüklenmiş yiyecekleri dolaptan çıkartmalısınız."
#   "Buzdolabınız ile arka duvar arasında yeterli mesafe olmayabilir. | 'Buzdolabınızı kullanmadan önce' kısmında açıklanan mesafe ayar plastiği ile gerekli boşluğu bırakabilirsiniz."
#   "Çalışma ortam sıcaklığı ürününüzün standartlarına uygun olmayabilir. | Çalışma ortam sıcaklığının kılavuzda belirtilen limitler içinde olduğundan emin olun."
# "Buzdolabınız çalışmıyor." satırı (fiş, sigorta, priz, elektrik) R1 s.38. Kapı düzgün kapanmıyor satırı (paketler, raflar, conta → servis, düz zemin) R1 s.40.
# Kurulum: fişi takılıyken kurulum yapılmaz, ısı kaynağından 50 cm / elektrikli fırından 5 cm, üstte 15 cm R1 s.13 · 75 mm, halı/kilim, ayak ayarı R1 s.14
#   · mesafe ayar plastiği R3 s.15, R4 s.8 · ayar tablosu (+4 normal, 2 °C sıcak ortam/çok kapı açma) + 5 dk gecikme + T/SN 10-43 °C R1 s.21 · iklim sınıfları R1 s.22
#   · yerleştirme (hava kanalı, sensör, sıcak yiyecek) R1 s.27-28 · kapı açık alarmı 2 dk R1 s.21 · 5-10 dk termik notu R1 s.40.
# FİŞ KURALI İSTİSNASI: ilk adım "fişi çek" değil (çözüm buzdolabının çalışmasını gerektiriyor; E09/E10/E11 emsali). Taşıma adımında Vestel'in
#   "kurulum esnasında fiş prize takılı olmamalı" uyarısı verildi.
# BİLEREK YAZILMAYANLAR: gaz/kompresör/fan/sensör/defrost teşhisi (belgede yok) · conta değişimi (belgede "yetkili teknik servis") ·
#   buzdolabının içini sökme, arka kapak açma (#31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Buzdolabı hiç çalışmıyorsa fişin prize sıkıca takılı olduğunu ve sigortanın atmadığını kontrol et."
  - "Soğutucu bölmenin sıcaklık ayarını daha soğuk konuma getir."
  - "Kapıları birkaç saat açıp kapatma."
  - "Kapıya temas eden yiyecekleri ve düzgün oturmamış rafları düzelt; kapının tam kapandığını kontrol et."
  - "Arka duvara temas eden kapları ve hava kanalının önünü kapatan yiyecekleri çek."
  - "Dolap aşırı doluysa fazla yiyecekleri çıkar."
  - "Fişi çekerek buzdolabının duvara, ısı kaynaklarına ve üstteki dolaba olan mesafesini kontrol et."
  - "Odanın sıcaklığının buzdolabının iklim sınıfına uygun olduğunu kontrol et; sorun sürerse Vestel İletişim Merkezi'ni ara."
faq:
  - q: "Vestel buzdolabım yeterince soğutmuyor, ilk neye bakmalıyım?"
    a: "Vestel'in no-frost buzdolabı kılavuzlarındaki sorun giderme tablosu 'Buzdolabınız yeterli soğutma yapmıyor' başlığında şu sebepleri sayıyor: sıcaklık ayarının doğru yapılmamış olması, kapıların sık açılması ya da uzun süre açık kalması, kapıların tam kapanmaması, arka duvara temas eden kap ya da yiyecek, aşırı doluluk, arka duvarla arasında yeterli mesafe olmaması ve ortam sıcaklığının ürünün standartlarına uygun olmaması."
  - q: "Buzdolabı kaç dereceye ayarlanmalı?"
    a: "Vestel'e göre normal çalışma koşulları için soğutucu bölmenin +4 °C'ye ayarlanması yeterlidir. Soğutucunun çalışma aralığı 0 ile 8 °C arasıdır. NF52001 kılavuzundaki ayar tablosunda 2 °C ayarı, ortam sıcak olduğunda ya da çok kapı açılıp kapandığı için soğutucunun yeterince soğuk olmadığı düşünüldüğünde kullanılmak üzere veriliyor."
  - q: "Buzdolabı ile duvar arasında ne kadar boşluk olmalı?"
    a: "Vestel kılavuzlarına göre buzdolabının arkası ile duvar arasındaki boşluk 75 mm'yi aşmamalıdır; en yakın mesafeyi buzdolabıyla verilen mesafe ayar plastiği belirler. Girintili bir alana yerleştirilecekse sağ, sol ve arkada 50 mm, üstte 100 mm boşluk bırakılır. Ocak, fırın, kalorifer peteği ve soba gibi ısı kaynaklarından en az 50 cm, elektrikli fırınlardan en az 5 cm uzakta olmalıdır."
  - q: "Fişi takınca buzdolabı hemen çalışmadı, arıza mı?"
    a: "Vestel'e göre fiş çekilip yeniden takıldığında ya da elektrik kesilip geldiğinde buzdolabı, kompresörün zarar görmesini engellemek için 5 dakika gecikmeyle çalışır. Kılavuzun önemli notlarında ani kesinti ya da fişi takıp çıkarma sonrasında 5-10 dakika sonra çalışmaya başlayacağı ve endişe edilecek bir durum olmadığı yazıyor."
  - q: "Göstergede E09 ya da E10 yazıyor, bu yazı mı geçerli?"
    a: "Kod görüyorsan önce kodun kendi satırına bak. Vestel'in kontrol uyarıları tablosunda E09 dondurucunun, E10 soğutucu bölmenin yeterince soğuk olmadığını gösterir ve her birinin kendi adımları vardır; bu kodların ayrı yazıları var."
images:
  coverAlt: "Mutfakta duvara yakın duran iki kapılı no-frost buzdolabı; açık soğutucu bölmesinde arka duvara değmeyecek şekilde dizilmiş kaplar"
---

Buzdolabı çalışıyor ama içerisi yeterince soğuk değil; süt çabuk bozuluyor, içecekler serinlemiyor. Vestel'in no-frost buzdolabı kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun ayrı bir satırı var: **"Buzdolabınız yeterli soğutma yapmıyor."** Altında sayılan yedi sebebin hepsi kullanıcının kontrol edebileceği şeyler: **sıcaklık ayarı, kapıların sık açılması, kapıların tam kapanmaması, arka duvara dayanan kaplar, aşırı doluluk, duvar mesafesi ve ortam sıcaklığı.** Göstergesi olmayan eski bir Vestel no-frost modelinin kılavuzu da "servis çağırmadan önce" listesinde aynı maddeleri soruyor. Bu yazıda Vestel'in sırasını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çalışıyor mu (fiş, sigorta) → ayarı daha soğuğa al → kapıları birkaç saat açma → kapı tam kapanıyor mu → arka duvara ve hava kanalına dayanan kapları çek → fazlasını çıkar → duvar ve ısı kaynağı mesafesi → oda sıcaklığı. Kapı kapanmıyorsa ya da sorun sürüyorsa → yetkili servis / Vestel İletişim Merkezi.

## Adım adım: evde denenecekler

**1. Çalıştığından emin ol.** İç lamba ve gösterge hiç yanmıyorsa tablonun "Buzdolabınız çalışmıyor" satırına geç: **fişi prize sıkıca tak**, fişin takıldığı prizin **sigortası ya da ana sigorta** atmışsa çalışır konuma getirilmesini sağla. Prizden şüpheleniyorsan Vestel'in önerisi, fişi **çalıştığından emin olduğun başka bir prize** takıp denemek. Elektrik tesisatında arıza varsa Vestel **uzman bir elektrikçiyle** iletişime geçilmesini istiyor. Fişi yeniden taktıysan acele etme: Vestel'e göre buzdolabı kompresörü korumak için **5 dakika gecikmeyle** çalışır.

**2. Ayarı daha soğuğa al.** Tablodaki ilk sebep: **sıcaklık ayarları doğru yapılmamış olabilir**; çözüm **sıcaklık ayarlarını daha soğuk konuma getirmek.** Vestel'e göre normal çalışma koşullarında soğutucu için **+4 °C** yeterlidir. NF52001 kılavuzunun ayar tablosunda **2 °C** ayarı, ortam sıcak olduğunda ya da çok kapı açılıp kapandığı için soğutucunun yeterince soğuk olmadığı düşünüldüğünde kullanılmak üzere veriliyor.

**3. Kapıları açma.** Tablodaki sebep: **kapılar sık açılıyor ya da uzun süre açık kalıyor olabilir.** Vestel'in çözümü: kapıları sık açıp kapatma, özellikle bu durumda **birkaç saat kapıları açıp kapatma.** Vestel ayrıca sıcak yiyecek ve içeceklerin buzdolabına konmadan önce **oda sıcaklığına soğutulmasını** istiyor.

**4. Kapının tam kapandığını kontrol et.** Tablodaki sebep: **kapılar tam olarak kapanmamış olabilir.** Vestel'e göre dolaba yüklenen yiyecekler **kapıya temas ediyor** olabilir. Kapı düzgün kapanmıyorsa tablonun ilgili satırı şunlara bakmanı istiyor: yiyecek paketleri kapının kapanmasını engelliyor mu, **kapı bölmeleri, raflar ve çekmeceler** düzgün yerleşmiş mi, buzdolabı **düz bir zeminde** mi?

**5. Arka duvarı ve hava kanalını aç.** Tablodaki sebep: **hava dolaşımını engelleyecek şekilde arka duvara temas eden kap ya da yiyecek.** Yiyecekleri yerleştirirken buna dikkat et. Vestel'in yerleştirme bölümüne göre soğutucu **hava kanalı** bölmeye soğuk hava dağıtır; kanalların önü yiyeceklerle kapatılmamalı. Yiyeceklerin **sıcaklık sensörünün** bulunduğu bölgeye temas etmesi de engellenmeli.

**6. Fazlasını çıkar.** Tablodaki sebep: **buzdolabı aşırı derecede dolu olabilir**; çözüm **fazla yüklenmiş yiyecekleri dolaptan çıkarmak.**

**7. Mesafeyi kontrol et.** Tablodaki sebep: **buzdolabı ile arka duvar arasında yeterli mesafe olmayabilir**; çözüm, kurulum bölümünde anlatılan **mesafe ayar plastiğiyle** gerekli boşluğu bırakmak. Vestel'in kurulum ölçüleri: arka ile duvar arasındaki boşluk **75 mm'yi aşmamalı**; girintili bir alanda sağ, sol ve arkada **50 mm**, üstte **100 mm**; ocak, fırın, kalorifer peteği ve soba gibi ısı kaynaklarından **en az 50 cm**, elektrikli fırınlardan **en az 5 cm** uzaklık; buzdolabının altında hava dolaşımını engelleyecek **halı ya da kilim** olmamalı. Buzdolabını yerinden oynatman gerekirse önce **fişini çek**: Vestel'in uyarısına göre kurulum sırasında fiş prize takılı olmamalıdır.

**8. Oda sıcaklığına bak.** Tablodaki son sebep: **çalışma ortam sıcaklığı ürünün standartlarına uygun olmayabilir**; çözüm ortam sıcaklığının **kılavuzda belirtilen limitler** içinde olduğundan emin olmak. Vestel'e göre buzdolabı **bilgi etiketindeki iklim sınıfına** göre tasarlanmıştır; NF52001 kılavuzundaki model **T/SN** sınıfında, yani **10-43 °C** ortam sıcaklıkları arasında çalışacak şekilde tasarlanmış. Bu adımlardan sonra sorun sürüyorsa Vestel'in tablosu seni **Vestel İletişim Merkezi**'ne yönlendiriyor.

## İklim sınıfı ne demek?

Vestel kılavuzlarındaki tabloya göre iklim sınıfı, buzdolabının hangi oda sıcaklıklarında çalışacak şekilde tasarlandığını gösterir:

| Sınıf | Ortam sıcaklığı |
|---|---|
| SN | 10 °C - 32 °C |
| N | 16 °C - 32 °C |
| ST | 16 °C - 38 °C |
| T | 16 °C - 43 °C |

Kendi buzdolabının sınıfı bilgi etiketinde yazar. Vestel'e göre buzdolabının belirtilen sıcaklıkların dışındaki ortamlarda çalıştırılması **soğutma verimliliği açısından tavsiye edilmez.**

## Kapı kapanmıyorsa ya da conta yırtıksa

Tablonun kapı satırında bir madde doğrudan servise gidiyor: **kapı contaları bozuk ya da yırtılmış olabilir**; bu durumda **yetkili teknik servisten** yardım iste. Kapıya temas eden yiyecekleri düzelttiğin hâlde kapılar kapanmıyorsa da Vestel'in önerisi aynı: yetkili teknik servis. Contanın temizliği için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısına bakabilirsin.

Bir not: Vestel'e göre özellikle yaz aylarında kompresör çalışırken **contanın temas ettiği kabin kenarının ısınması normaldir**; ürün çalışırken **yan panellerde** yüksek sıcaklık görülmesi de normal bir durumdur.

## Göstergede kod varsa

Yeni nesil Vestel no-frost buzdolaplarında gösterge bir uyarı kodu veriyorsa önce o kodun yazısına bak: soğutucu için [Vestel buzdolabı E10 hatası](/blog/vestel-buzdolabi-e10-hatasi/), dondurucu için [Vestel buzdolabı E09 hatası](/blog/vestel-buzdolabi-e09-hatasi/). Markadan bağımsız sebepler için [buzdolabı soğutmuyor](/blog/buzdolabi-sogutmuyor-nedenleri/), ayar değerleri için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin. Buzdolabı soğutuyor ama ses yapıyorsa: [Vestel buzdolabı ses yapıyor](/blog/vestel-buzdolabi-ses-yapiyor/).

## Sınır nerede biter

Ayar daha soğukta, kapılar tam kapanıyor ve birkaç saat açılmadı, arka duvar ve hava kanalı açık, dolap aşırı dolu değil, mesafe ve oda sıcaklığı uygun ve buzdolabı hâlâ soğutmuyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor: **Vestel İletişim Merkezi ile irtibata geç.** Kılavuzun kurulum bölümü de aynı çizgide: **kurulum ve tamir işlemlerini her zaman yetkili servise yaptır.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kapı, yerleştirme ve konum kullanıcıya; soğutma sisteminin içi ve conta değişimi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Soğutmayan bölme soğutucu mu, dondurucu mu, ikisi mi?
2. Göstergede bir kod var mı?
3. Ayar kaç derecede, en son ne zaman değişti?
4. Kapı tam kapanıyor mu, conta sağlam mı?
5. Buzdolabı duvara, ısı kaynağına ne kadar yakın, oda ne kadar sıcak?

Bu beşine cevabın varsa servise "buzdolabı soğutmuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
