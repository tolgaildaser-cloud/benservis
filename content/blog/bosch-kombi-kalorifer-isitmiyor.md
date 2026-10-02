---
title: "Bosch kombi kalorifer ısıtmıyor"
description: "Bosch kombi petekleri ısıtmıyorsa Bosch kılavuzlarının sırası: yaz işletimi, ısıtma işletmesi, gidiş suyu sıcaklığı, termostatik vanalar ve basınç."
slug: "bosch-kombi-kalorifer-isitmiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:1x · Kaynak denetimi: bosch-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile bosch-tr-tr-b.boschhc-documents.com'dan yeniden indirildi (hepsi HTTP 200, application/pdf);
# md5'lerin hepsi 28 Eyl yerel kopyasıyla (kaynak-bosch-kombi-sprint/MD5SUMS-2026-09-28.txt) birebir. pdftotext -layout, sayfa = PDF sayfası.
# Web araması KULLANILMADI; adresler yayındaki bosch-kombi-ea-hatasi provenansından. Kullanma kılavuzlarında ayrı bir "belirti tablosu" YOK;
# adımlar kılavuzların Kullanım / Enerji tasarrufu / Arızalar / Bakım bölümlerindeki kullanıcı talimatlarından.
# K1) Condens 2500 W · 6721835246 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246
#     HTTP 200 · 1.789.580 B · 16 sf · md5 81853ab2ff146ad75d9398dc0c9832b0
#     s.3 gaz kokusu · s.8 "Çalışma basıncı normal şartlarda 1 ile 2 bar arasıdır." · "Basınç çok düşük olduğunda ısıtma suyu ilave edin."
#     · doldurma vanası 1–2 bar, sonra kapat · s.10 maks. gidiş 30–yakl. 82 °C · "Yaz işletiminde ısıtma işletmesi kilitlidir" · radyatör yakl. 75 °C
#     · s.11 4.6 "Sirkülasyon pompası ve dolayısıyla da ısıtma kapanmıştır." · termostat kılavuzu · s.12 termostatik vanalar → "Uzun bir süre
#     geçmesine rağmen arzu edilen oda sıcaklığına ulaşılamadığı takdirde kontrol elemanındaki sıcaklık ayarını yükseltin."
#     · s.13 H ve ! / yalnız H → reset; "Bir arıza giderilemediğinde: Yetkili servisi veya müşteri hizmetlerini arayın, arıza kodunu ve cihaz bilgilerini belirtin."
# K2) Condens 1200W · 6721835940 (2023/04) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835940
#     HTTP 200 · 958.521 B · 12 sf · md5 a22315e51db093d2642aeb55bcbc8c02
#     s.5 maks. gidiş 30–82 °C, "Maksimum değer, servis teknikeri tarafından düşürülmüş olabilir." · yaz işletimi kilit · s.6 3.6 manuel işletim,
#     3.7 manuel yaz işletimi, termostatik vanalar · s.7 H sembolü, kapat-aç ya da tuşlar · 1–2 bar · "0,6 bar ile 3 bar" + 0,6–1,1 bar sıcaklık
#     sınırlama tablosu · "yetkili servisinizden, ısıtma suyunun nasıl ilave edildiğini göstermesini isteyin." · radyatör havası
# K3) Condens 2200i W · 6721839341 (2023/04) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721839341
#     HTTP 200 · 1.137.334 B · 12 sf · md5 e06a7d8792003fe41f2a63b08204887b · s.6 maks. gidiş, yaz kilit, servis teknikeri notu · s.7 manuel işletim,
#     manuel yaz · s.8 termostatik vanalar · s.9 arıza reset, "göstermesini isteyin", radyatör havası
# K4) Condens 2300i W · 6721830375 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721830375
#     HTTP 200 · 1.286.203 B · 16 sf · md5 167bfab2336acd938ef5e1d26bd5dec9 · s.8 maks. gidiş, yaz kilit · s.9 manuel işletim/yaz · s.10 termostatik
#     · s.11 arıza reset, "göstermesini isteyin"
# K5) Condens 7000iW · 6721835270 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835270
#     HTTP 200 · 1.119.714 B · 16 sf · md5 a485d15ed4c4466367fc4daa73fa1afb · s.9 3.4.1 ısıtma işletmesi aç/kapa ("Isıtma işletmesi yok" →
#     "ısıtma işletmesi, bağlanmış olan kumanda sistemi aracılığıyla etkinleştirilemez."), maks. gidiş 30–82, tablo · s.10 manuel yaz işletimi
#     · s.11 termostatik · s.12 kapat-aç ya da "Sıfırla gösterilene kadar reset tuşuna basın." · s.13 "göstermesini isteyin"
# K6) Condens 5700i W · 6721852676 (2023/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721852676
#     HTTP 200 · 1.756.949 B · 12 sf · md5 83780734e13a538386cd9f5cabc88c86 · s.5 "Isıtma açık/kapalı", teslimatta yaklaşık 65 °C, Oda ısıtma
#     ayarı Açık/Oto/Kapalı · s.6 menü "Isıtma işletmesi" Açık/Oto/Bir kez/Kapalı · s.7 "termostatik vanaları tamamen açın" · s.8 7.2 sıfırlama,
#     "arıza kodu 2980" blokajı, LoPr, "Doldurma cihazını açın ve ısıtma sistemini doldurun." · s.9 radyatör havası
# ⛔ Bilerek YAZILMAYANLAR: gaz vanası aç/kapa (görev talimatı; kılavuzların "Arızalar" bölümünde ilk madde) · radyatör hava alma adım olarak
#    (kılavuz kullanıcıya veriyor ama alet gerektirebilir → ALET KURALI; gövdede numarasız anıldı) · 2500 W dışındaki modellerde kullanıcı su
#    doldurma tarifi (kılavuz servise gösterttiriyor) · Bosch web sitesindeki 1,2–1,5 bar değeri (kılavuzlar 1–2 bar diyor; CE sayfasına link)
#    · tuş sembolleri (PDF'de simge, metinde okunmuyor) · manuel işletimin tuş süresi · güneş enerjisi sıvısı · maliyet (#46) · dış sac/kapak (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının kullanma kılavuzu"]
steps:
  - "Ekranda H ya da arıza sembolüyle bir kod görünüyorsa kodu ve tip etiketindeki cihaz bilgilerini not et."
  - "Ekranda yaz işletimi sembolü sürekli görünüyorsa yaz işletimini kılavuzundaki tuşla kapat."
  - "Condens 7000iW ve 5700i W'de ısıtma işletmesinin kapalı ya da yok ayarlanmadığını kontrol et."
  - "Maksimum gidiş suyu sıcaklığını kontrol et; çok düşükse kılavuzundaki tuşlarla yükselt ve kaydet."
  - "Termostatik vanaları uygun kademeye aç; oda yine ısınmazsa oda termostatındaki sıcaklık ayarını yükselt."
  - "Manometreden çalışma basıncını oku; normal şartlarda 1 ile 2 bar arasında olmalı."
  - "Basınç düşükse kendi kılavuzunun tarifine uy; tarif servise bırakıyorsa suyun nasıl ilave edildiğini yetkili servise gösterttir."
  - "Arızayı kılavuzundaki yöntemle bir kez sıfırla; giderilmiyorsa yetkili servisi ara ve kodu bildir."
faq:
  - q: "Bosch kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Bosch'un Condens 1200W, 2200i W, 2300i W, 2500 W ve 7000iW kullanma kılavuzlarında yaz işletimi bunu yapıyor: yaz işletiminde sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır, sıcak kullanım suyu beslemesi sürer. Bu modda ekranda yaz işletimi sembolü sürekli görünür. Yaz işletimini kılavuzundaki tuşla kapatıp maksimum gidiş suyu sıcaklığını ayarlaman gerekir."
  - q: "Kombiye oda termostatı bağlı ama ısıtma açılmıyor; neden?"
    a: "Condens 7000iW kılavuzunda kombide 'Isıtma işletmesi yok' ayarlıysa ısıtma işletmesinin bağlı kumanda sistemi aracılığıyla etkinleştirilemeyeceği yazıyor. Önce kombinin kendi ekranında ısıtma işletmesini aç, sonra oda termostatını kendi kullanma kılavuzuna göre ayarla. Condens 5700i W'de de ısıtma menüsünde Açık, Oto, Bir kez ve Kapalı seçenekleri var; Oto seçiliyse ısıtma programlanan sürelere göre açılıp kapanır."
  - q: "Basınç 1 barın biraz altında; petekler daha az mı ısınır?"
    a: "Condens 1200W kılavuzuna göre cihazın çalışma basıncı 0,6 ile 3 bar arasında olmalı ve eşanjörü korumak için 0,6–1,1 bar aralığında ısıtma çıkış suyunda bir sıcaklık sınırlaması devreye giriyor. Kılavuzun tablosunda 1,1 barda 86 °C olan sınır, 0,6 barda 50 °C'ye iniyor. Bu tablo yalnız Condens 1200W kılavuzunda var; diğer Bosch kılavuzları normal şartlarda 1–2 bar veriyor."
  - q: "Arızayı sıfırladım, yine geliyor; tekrar tekrar sıfırlayabilir miyim?"
    a: "Hayır. Condens 5700i W kılavuzu, bir arızayı sıfırlamak için tekrarlanan girişimlerin cihazın güvenlik nedeniyle bloke olmasına yol açabileceğini yazıyor (arıza kodu 2980); bu blokajı ancak yetkili firma ya da müşteri hizmetleri arızanın nedenini yerinde giderdikten sonra kaldırabiliyor. Tüm kılavuzların ortak talimatı: arıza giderilemiyorsa yetkili servisi ya da müşteri hizmetlerini ara, arıza kodunu ve cihaz bilgilerini bildir."
images:
  coverAlt: "Duvara monte beyaz bir kombi ve yanında duvardaki oda termostatı; önde termostatik vanası görünen beyaz bir panel radyatör"
---

Musluktan sıcak su geliyor ama petekler soğuk. Bosch'un Condens serisi kullanma kılavuzlarında bu belirtinin karşılığı bir arıza kodu değil, büyük ihtimalle önce bir **ayar**: kılavuzların her birinde ısıtmayı kapatıp sıcak suyu çalışır bırakan bir **yaz işletimi** anlatılıyor ve cümle açık: **"Yaz işletiminde sirkülasyon pompası ve dolayısıyla da ısıtma kapalıdır."** Bosch'un kılavuzlarında ayrı bir "petekler ısınmıyor" tablosu yok; bu yazıda Condens 1200W, 2200i W, 2300i W, 2500 W, 5700i W ve 7000iW kılavuzlarının kullanım, enerji tasarrufu, arıza ve bakım bölümlerinde kullanıcıya verilen talimatları belirtiye göre sıralıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kod var mı, not et. Yaz işletimi açık mı; açıksa kapat. 7000iW ve 5700i W'de ısıtma işletmesi açık mı. Maksimum gidiş suyu sıcaklığı düşük mü. Termostatik vanalar açık mı, oda termostatı ne gösteriyor. Basınç 1–2 bar mı; düşükse modelinin tarifine uy. Arızayı bir kez sıfırla, gitmiyorsa yetkili servis.

⛔ Gaz kokusu alıyorsan bu yazıyı bırak ve kılavuzunun "Gaz kokusu alındığında yapılması gerekenler" bölümüne uy. Bölüm alev ve kıvılcımı önlemeni ister: sigara, çakmak ve kibrit kullanma; elektrikli şalterlere ve fişlere dokunma, telefonu ve kapı zilini kullanma. Pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et; binanın dışından itfaiyeyi, polisi ve gaz dağıtım şirketini ara, yetkili servise ve yerel gaz dağıtım firmasına haber ver.

## Adım adım: evde denenecekler

**1. Ekranda kod var mı?** Bosch kılavuzlarına göre bir arıza oluştuğunda ekranda **H** sembolü (Condens 2500 W'de bazı durumlarda **!** ile birlikte) ve bir arıza kodu görünür. Kodu ve cihaz bilgilerini not et; kılavuzlar arıza durumunda bildirilecek bilgilerin (cihaz adı, seri numarası) kumanda paneli kapağındaki **tip etiketinde** yazılı olduğunu söylüyor.

**2. Yaz işletimi açık mı?** Condens 1200W, 2200i W, 2300i W, 2500 W ve 7000iW kılavuzlarına göre yaz işletiminde **sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır**; sıcak kullanım suyu beslemesi ve kumanda sisteminin enerji beslemesi ise sürer. Bu modda ekranda yaz işletimi sembolü sürekli görünür. Kapatmak için:

- **Condens 1200W, 2200i W, 2300i W:** ısıtma tuşuna bas, okla istediğin maksimum gidiş suyu sıcaklığını seç ve ok tuşuyla kaydet (kaydetmezsen ayar 3 saniye sonra kendiliğinden kaydedilir). Ekranda ısıtma sembolü sürekli görünür.
- **Condens 7000iW:** ekranda ısıtma sembolü yanıp sönene kadar yaz işletimi tuşunu basıp bırak ve ok tuşuyla kaydet.
- **Condens 2500 W:** yaz işletimi, gidiş suyu sıcaklık tuşuna basıp – tuşuyla ekranda yaz sembolü belirene kadar inerek açılıyor; kılavuz kapatmayı ayrıca tarif etmiyor. Gidiş suyu sıcaklık ayarından (kılavuzda bölüm 4.3) yeniden bir değer seç; ayar 3 saniye sonra kaydedilir. Emin değilsen yetkili servise sor.

**3. Isıtma işletmesi açık mı?** İki modelde ısıtma ayrıca kapatılabiliyor:

- **Condens 7000iW:** ısıtma tuşuna, ısıtma sembolü yanıp sönene kadar bas; + ya da – ile **"Isıtma işletmesi"** ile **"Isıtma işletmesi yok"** arasında seç ve ok tuşuyla kaydet. Kılavuzun uyarısı önemli: "Isıtma işletmesi yok" ayarlıysa ısıtma, **bağlı oda termostatı üzerinden de açılamaz.**
- **Condens 5700i W:** ısıtma tuşuna basınca ayarlı maksimum gidiş suyu sıcaklığı görünür; ok tuşuyla ısıtma açık ile kapalı arasında geçilir. Menüdeki "Isıtma işletmesi" seçenekleri **Açık, Oto, Bir kez, Kapalı**; Oto seçiliyse ısıtma programlanan sürelere göre açılıp kapanır.

**4. Maksimum gidiş suyu sıcaklığı.** Kılavuzlara göre bu değer 30 °C ile yaklaşık 82 °C arasında ayarlanabiliyor ve tablolar radyatörlü ısıtma için örnek değer olarak **yaklaşık 75 °C** veriyor (Condens 5700i W kılavuzu radyatörlü sistem için yaklaşık 65 °C diyor ve cihazın teslimatta bu değere ayarlı geldiğini yazıyor). Isıtma tuşuna basınca ayarlı değer yanıp söner; + / – ya da ok tuşlarıyla değiştirip kaydet. Bir not: Condens 1200W, 2200i W, 2300i W, 5700i W ve 7000iW kılavuzlarına göre maksimum değer **servis teknikeri tarafından düşürülmüş olabilir**; ayar yükselmiyorsa sebebi bu olabilir, yetkili servise sor.

**5. Termostatik vanalar ve oda termostatı.** Kılavuzların enerji tasarrufu bölümünün talimatı: tercih edilen oda sıcaklığına ulaşmak için **termostatik vanaları uygun ayar kademesine kadar aç** (Condens 5700i W kılavuzu "tamamen açın" diyor). Condens 1200W, 2200i W, 2300i W, 2500 W ve 7000iW kılavuzları devamını da veriyor: uzun süre geçmesine rağmen istenen oda sıcaklığına ulaşılamıyorsa **kontrol elemanındaki sıcaklık ayarını yükselt.** Kombiye oda termostatı bağlıysa ayarlar için o termostatın kendi kullanma kılavuzuna bak.

**6. Basıncı oku.** Kılavuzlara göre çalışma basıncı normal şartlarda **1 ile 2 bar** arasıdır; ısıtma tesisatın için daha yüksek bir değer gerekiyorsa bunu yetkili servis söyler. Condens 1200W kılavuzu ayrıca bir tablo veriyor: 0,6–1,1 bar aralığında eşanjörü korumak için ısıtma çıkış suyunda sıcaklık sınırlaması devreye giriyor; 1,1 barda 86 °C olan sınır 0,6 barda 50 °C'ye iniyor. Yani bu modelde basınç düştükçe petekler daha az ısınabilir. Condens 5700i W'de basınç ayarlı minimumun altına düşünce ekranda **LoPr** mesajı çıkar; 0,3 barın altında ısıtma tesisatı bloke edilir.

**7. Basınç düşükse modelinin tarifine uy.** Burada kılavuzlar ikiye ayrılıyor:

- **Condens 2500 W:** doldurma ünitesi cihazın alt tarafında; doldurma vanasını aç, manometrede 1 ile 2 bar arası görünene kadar doldur ve vanayı tekrar kapat.
- **Condens 5700i W:** doldurma cihazını aç ve ısıtma sistemini doldur.
- **Condens 1200W, 2200i W, 2300i W, 7000iW:** kılavuzun cümlesi: *"Isıtma devresinin doldurulması işlemi, ısıtma tesisatına göre farklılık gösterir. Bu nedenle yetkili servisinizden, ısıtma suyunun nasıl ilave edildiğini göstermesini isteyin."*

Condens 1200W, 2200i W, 2300i W, 5700i W ve 7000iW kılavuzlarının uyarısı: tesisatı **yalnız soğukken** doldur. Hepsinde, Condens 2500 W dahil, 3 bar aşılmamalı; aşılırsa emniyet ventili açılır. Basınç kodlarının Bosch karşılığı için [Bosch kombi CE hatası](/blog/bosch-kombi-ce-hatasi/) ve [Bosch kombi 1017 hatası](/blog/bosch-kombi-1017-hatasi/) sayfalarına bak.

**8. Bir kez sıfırla, gitmiyorsa servis.** Kılavuzlar iki yol veriyor: cihazı kapatıp tekrar çalıştırmak ya da kılavuzdaki reset tuşunu kullanmak (Condens 7000iW'de ekranda "Sıfırla" görünene kadar). Condens 5700i W kılavuzu, tekrarlanan sıfırlama girişimlerinin cihazı güvenlik nedeniyle bloke edebileceğini yazıyor (kod 2980). Arıza giderilemiyorsa yetkili servisi ya da müşteri hizmetlerini ara; arıza kodunu ve cihaz bilgilerini bildir.

## Bosch kılavuzlarında ısıtmayı kapatan ayarlar

| Ayar | Kılavuzdaki etkisi | Hangi kılavuzda |
|---|---|---|
| Yaz işletimi | Sirkülasyon pompası ve ısıtma kapalı; sıcak su sürer | 1200W · 2200i W · 2300i W · 2500 W · 7000iW |
| "Isıtma işletmesi yok" | Isıtma bağlı oda termostatıyla da açılamaz | 7000iW |
| Isıtma Kapalı / Oto | Kapalı: ısıtıcı kapalı · Oto: zaman programına göre | 5700i W |
| Maksimum gidiş suyu sıcaklığı | Servis teknikeri tarafından düşürülmüş olabilir | 1200W · 2200i W · 2300i W · 5700i W · 7000iW |
| Düşük basınç (0,6–1,1 bar) | Isıtma çıkış suyu sıcaklığı sınırlanır | 1200W |
| LoPr (0,3 bar altı) | Isıtma tesisatı bloke edilir | 5700i W |

📌 Radyatörlerden yalnız bazıları dengesiz ısınıyorsa kılavuzların bakım bölümü radyatörlerin havasının alınmasını söylüyor. Bunu nasıl yapacağından emin değilsen yetkili servise bırak; hava aldıktan sonra basıncı yeniden kontrol etmek gerekir. Genel bilgi [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında.

## Ne zaman servis

- Ekranda kod var ve kapat-aç ya da reset işe yaramıyorsa; kodu ve tip etiketindeki cihaz bilgilerini hazırla.
- Maksimum gidiş suyu sıcaklığını yükseltemiyorsan; değer servis teknikeri tarafından düşürülmüş olabilir.
- Modelin kılavuzu su ilavesini servise bırakıyorsa (1200W, 2200i W, 2300i W, 7000iW) ve basınç düşükse.
- Yaz işletimi kapalı, ısıtma açık, sıcaklık ve basınç doğru olduğu hâlde petekler soğuksa.

Kodların tam listesi için [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasına, basıncın neden önemli olduğu için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bak.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
