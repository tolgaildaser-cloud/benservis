---
title: "Vaillant kombi çalışmıyor: sıcak su da yok"
description: "Vaillant kombi hiç çalışmıyorsa kılavuzun sırası: gaz kesme vanaları, binadaki sigorta, soğuk su vanası, açma düğmesi ve sıcaklık ayarı."
slug: "vaillant-kombi-calismiyor"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 08:28 · Kaynak denetimi: vaillant-kombi-calismiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200, application/pdf), pdftotext -layout ile
# sayfa sayfa okundu. Sayfa = PDF sayfası. Web araması KULLANILMADI; adresler 27 Eyl F28 koşusunda vaillant.com.tr
# ürün sayfalarının "Dokümanlar" bölümünden alınmıştı, bu koşuda yeniden indirilip md5'leri birebir tuttu.
# KULLANMA KILAVUZLARI (tek kaynak — "Ürün çalışmıyor (sıcak su yok, ısıtma soğuk kalıyor)" satırı dördünde de var):
# A) ecoTEC intro VUW 24/24 · 28/28 AS/2-1 (H-TR) · 8000037574_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf
#    HTTP 200 · 236.350 B · 16 sf · md5 2ad2ae698770f850da164d67e3ac3637
#    Ek B s.12: "Ürün çalışmıyor (sıcak su yok, ısıtma soğuk kalıyor)" → her iki gaz kesme vanası · binadaki sigorta
#    ("Ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar.") · soğuk su devresi kapatma musluğu
#    · ürün kapalı → 6.2 · sıcaklık çok düşük/kapalı → ayarla · ısıtma sisteminde hava → "havasını aldırmak için, bir yetkili servise"
#    · s.3-4 gaz kokusu · s.10 6. "Arızayı belirtilen önlemlerle gideremiyorsanız, yetkili servise başvurun." · s.11 8 Tekrar devreye alma
# B) ecoTEC plus / exclusive · 0020282305_07
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf
#    HTTP 200 · 196.382 B · 20 sf · md5 7019a6c065efd6227ebac697dc91f175
#    Ek D s.17: aynı satır; ürün kapalı → "Ürünü tekrar devreye alın. (→ Bölüm 8)" · hava → "kendi başınıza alamıyorsanız, yetkili servise"
#    · s.12 8 Tekrar devreye alma: ana şalter → gaz kesme vanası → tuş → soğuk su kesme vanası
# C) ecoTEC pure VUW 236/7-2 · 286/7-2 (H-TR) · 0020250679_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf
#    HTTP 200 · 458.267 B · 20 sf · md5 f48176844c2865cf7cd48c96cd902121
#    C.1 s.17: aynı satır (sigorta maddesi YOK) · hava → "Yetkili bayi tarafından ısıtma sisteminin havası alınmalıdır."
#    · s.10 4.2 vanaların yeri tesisatçıya sorulur, "Ürünün hemen altında veya yakınında bulunan gaz kesme vanası" · s.10 4.3
#    "Ürünü sadece kapak tamamen kapalı olduğunda işletime alın." / "3 saniyeden az süre ile tuşuna basın"
# D) ecoTEC pro VUW TR 236/5-3 · 286/5-3 · 0020228720_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf
#    HTTP 200 · 297.230 B · 12 sf · md5 5958d4db9b178710d1bf7c4ef3147f2e
#    Ek B s.11: aynı satır + "Sistem basıncı yeterli değil ... (arıza mesajı: F.22)" + F.28 · hava → yetkili bayi
#    · s.9 5.1 "arıza mesajları (F.xx) tekrar ortaya çıkıyorsa, bir yetkili bayiye danışın."
# ⛔ Bilerek YAZILMAYANLAR: ısıtma sistemini doldurma adımı (#31 kombi su doldurma YK kararı bekliyor; F.22 yazısına link verildi)
#    · petek/tesisat hava alma adımı (intro/pure/pro servise bırakıyor; plus'ta kullanıcıya açık ama modeller arası tutarsız → servis)
#    · sigortanın neden attığına dair teşhis (belgede yok) · sigorta panosu/elektrik müdahalesi · kapak açma · "fişi çek bekle" reseti
#    (belgede yok) · maliyet/süre tahmini (#46) · pure'da sigorta satırı yok, bu yüzden sigorta adımı "üç kılavuz" diye yazıldı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil hattını dışarıdan ara."
  - "Ekrana bak; bir F kodu görünüyorsa o kodun rehberine geç, ekran tamamen kapalıysa bir sonraki adıma geç."
  - "Binadaki sigortanın açık olduğunu kontrol et; elektrik geri geldiğinde kombi kendiliğinden çalışmaya başlar."
  - "Kombinin altındaki gaz kesme vanası ile dışarıdaki gaz kesme vanasının ikisinin de açık olduğunu kontrol et."
  - "Kombinin soğuk su kesme vanasının açık olduğunu kontrol et."
  - "Kombi kapalıysa kendi kılavuzundaki yöntemle aç; bunu yalnız ön kapak tamamen kapalıyken yap."
  - "Gidiş suyu ve sıcak su sıcaklığının çok düşük ya da kapalı (OFF) ayarlanmadığını kontrol et, gerekirse ayarla."
  - "Bunların hepsi yerindeyse ve kombi hâlâ çalışmıyorsa yetkili servise başvur."
faq:
  - q: "Vaillant kombi hiç çalışmıyor, ne yapmalıyım?"
    a: "Vaillant'ın ecoTEC intro, ecoTEC plus, ecoTEC pure ve ecoTEC pro kullanma kılavuzlarındaki arıza giderme tablosunda bu durumun ayrı bir satırı var: ürün çalışmıyor, sıcak su yok, ısıtma soğuk kalıyor. Tablonun saydığı olası nedenler şunlar: gaz kesme vanalarından biri kapalı, binadaki elektrik kesilmiş, soğuk su vanası kapalı, ürün kapalı, sıcaklıklar çok düşük ya da ısıtma/sıcak su kapalı ayarlanmış, ısıtma sisteminde hava var. İlk beşine kendin bakabilirsin; hava için modeline göre yetkili servis gerekir."
  - q: "Elektrik kesildi, geldi ama kombi çalışmıyor. Normal mi?"
    a: "ecoTEC intro, ecoTEC plus ve ecoTEC pro kılavuzlarına göre binadaki elektrik kesildiyse önce binadaki sigorta kontrol edilir; kılavuzların cümlesi şöyle: ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar. Elektrik geldiği hâlde kombi açılmıyorsa gaz kesme vanalarına, soğuk su vanasına ve kombinin açık olup olmadığına sırayla bak; sonuç alamazsan yetkili servise başvur."
  - q: "Tatilden döndüm, kombiyi nasıl yeniden çalıştırırım?"
    a: "ecoTEC intro ve ecoTEC plus kılavuzlarının tekrar devreye alma bölümü sırayı veriyor: gaz kesme vanası kapatılmışsa üründeki gaz kesme vanasını aç, kombiyi açma tuşuyla çalıştır, soğuk su kesme vanasını aç. ecoTEC plus'ta cihaz ana şalteri kapatılmışsa önce ana şalter açılır. ecoTEC pure ve ecoTEC pro kılavuzları kombinin yalnız kapak tamamen kapalıyken çalıştırılmasını istiyor."
  - q: "Kılavuzda ısıtma sisteminde hava var yazıyor, bunu kendim yapabilir miyim?"
    a: "Modele göre değişiyor. ecoTEC intro kılavuzu ısıtma sisteminin havasını aldırmak için yetkili servise başvurmanı, ecoTEC pure ve ecoTEC pro kılavuzları havanın yetkili bayi tarafından alınmasını istiyor. Bu yüzden bu yazıda hava almayı adım olarak vermedik; kendi modelinin kılavuzunda ne yazdığına bak, emin değilsen yetkili servise bırak."
  - q: "Ekranda F.22 ya da F.28 var, bu yazı bana uyar mı?"
    a: "Ekranda bir arıza kodu varsa kodun kendi tedbiri önce gelir. ecoTEC pro kılavuzunun aynı satırı yetersiz sistem basıncını F.22'ye, arka arkaya üç başarısız ateşleme denemesini F.28'e bağlıyor. F.22 için Vaillant kombi F22 hatası, F.28 için Vaillant kombi F28 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombi, ekranı kapalı; altındaki borularda sarı kollu gaz vanası ve mavi kollu su vanası görünüyor"
---

Vaillant kombin hiç çalışmıyor: musluktan sıcak su gelmiyor, petekler soğuk, belki ekranda hiçbir şey yok. Vaillant'ın ecoTEC kullanma kılavuzlarının dördünde de bu durumun kendi satırı var: **"Ürün çalışmıyor (sıcak su yok, ısıtma soğuk kalıyor)."** Tablo olası nedenleri tek tek sayıyor ve çoğu kullanıcının kendi bakabileceği şeyler: kapalı kalmış bir vana, kesilmiş elektrik, kapalı kalmış kombi ya da çok düşük bırakılmış bir ayar. Bu yazıda o satırı sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu var mı → ekranda F kodu var mı → binadaki sigorta → iki gaz kesme vanası → soğuk su vanası → kombi açık mı → sıcaklık ayarı OFF'ta mı. Hepsi yerindeyse yetkili servis. Gaz kokusu varsa hiçbir düğmeye dokunma.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Vaillant kullanma kılavuzlarının ilk güvenlik başlığı gaz kokusu. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevle yaklaşma, sigara içme; binadaki elektrik şalterlerini, prizleri, zili, telefonu kullanma. Binayı terk et, diğer sakinleri uyar; gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Ekrana bak.** Ekranda **F.** ile başlayan bir kod varsa kombi sana nedenini zaten söylüyor; o kodun tedbiri önce gelir. En çok görülen iki kod için [Vaillant kombi F22 hatası](/blog/vaillant-kombi-f22-hatasi/) ve [Vaillant kombi F28 hatası](/blog/vaillant-kombi-f28-hatasi/) yazılarına bak. Ekran tamamen kapalıysa ya da kod yoksa bir sonraki adıma geç.

**3. Binadaki sigorta.** ecoTEC intro, ecoTEC plus ve ecoTEC pro kılavuzları binadaki elektrik beslemesi kesildiyse **binadaki sigortanın kontrol edilmesini** istiyor ve ekliyor: *"Ürün, elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar."*

**4. İki gaz kesme vanası.** Dört kılavuzun tablosu da aynı tedbiri veriyor: **her iki gaz kesme vanasını açın** — tesisata (ürünün dışına) monte edilmiş olan ve üründeki. ecoTEC pure kılavuzu üründeki vananın **ürünün hemen altında veya yakınında** bulunduğunu yazıyor. Vanaların yerini bilmiyorsan ecoTEC pure ve ecoTEC pro kılavuzlarının tavsiyesi: kapatma vanalarının konumunu ve kullanımını **montajı yapan tesisatçıya sor.**

**5. Soğuk su kesme vanası.** Tablonun bir sonraki nedeni: soğuk su devresi kapatma vanası kapalı. Tedbir: **soğuk su kesme vanasını aç.** Kılavuzlar uzun süreli kapatmada (örneğin tatil) bu vananın da kapatılmasını istediği için dönüşte açık olup olmadığına mutlaka bak.

**6. Kombi kapalı olabilir.** Tablodaki bir neden de düpedüz **ürünün kapalı** olması. Ne yapılacağı modele göre değişiyor: ecoTEC intro kılavuzu bu satırda ürün arızasının giderilmesini, yani açma/kapatma düğmesine 3 saniyeden uzun basarak (en fazla beş kez) yapılan reseti gösteriyor; ecoTEC pro'da açma/kapatma düğmesine basılır; ecoTEC pure'da ekran kapalıysa tuşa **3 saniyeden az** basılır (3 saniyeden uzun basış reset anlamına gelir); ecoTEC plus'ta cihaz ana şalteri kapatılmışsa önce ana şalter açılır. ecoTEC pure ve ecoTEC pro kılavuzları şartı da koyuyor: **ürünü sadece kapak tamamen kapalı olduğunda işletime alın.**

**7. Sıcaklık ayarı OFF'ta mı?** Kılavuzların tablosuna göre gidiş suyu sıcaklığı ya da sıcak su sıcaklığı **çok düşük ayarlanmış** ya da ısıtma/sıcak su devresi **kapatılmış** olabilir. ecoTEC pure'da gidiş suyu sıcaklığı 10 °C'nin altına indirilirse OFF sayılıyor. Kendi kılavuzundaki tuşla gidiş suyu ve sıcak su sıcaklığını kontrol et, gerekiyorsa yükselt ve onayla. Kombine bir oda termostatı (regler) bağlıysa kılavuzlar istenen sıcaklığın reglerden ayarlanmasını istiyor.

**8. Hepsi yerindeyse servis.** Tablodaki son neden **ısıtma sisteminde hava.** ecoTEC intro kılavuzu bunun için yetkili servise başvurmanı, ecoTEC pure ve ecoTEC pro kılavuzları havanın yetkili bayi tarafından alınmasını istiyor. Kılavuzların genel kuralı da aynı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## Kılavuzun tablosu — dört model yan yana

| Olası neden (kılavuzdan) | Kılavuzun tedbiri | Hangi kılavuzda |
|---|---|---|
| Dışarıdaki ve/veya üründeki gaz kesme vanası kapalı | Her iki gaz kesme vanasını aç | intro · plus · pure · pro |
| Binadaki elektrik beslemesi kesildi | Binadaki sigortayı kontrol et; elektrik gelince ürün kendiliğinden çalışır | intro · plus · pro |
| Soğuk su kesme vanası kapalı | Soğuk su kesme vanasını aç | intro · plus · pure |
| Ürün kapalı | intro: ürün arızasını gider (reset) · plus: tekrar devreye al · pure ve pro: ürünü çalıştır | intro · plus · pure · pro |
| Sıcaklıklar çok düşük ya da ısıtma/sıcak su kapalı ayarlanmış | Gidiş suyu ve sıcak su sıcaklığını ayarla | intro · plus · pure · pro |
| Sistem basıncı yeterli değil (F.22) | Isıtma sistemini doldur | pro |
| Isıtma sisteminde hava var | intro: yetkili servis · pure ve pro: yetkili bayi · plus: kendin alamıyorsan yetkili servis | intro · plus · pure · pro |

📌 Tablodaki nedenlerin çoğu arıza değil, **kapalı kalmış bir şey.** Bu yüzden servisi aramadan önce vana, sigorta ve ayar turunu atmaya değer.

## Sıcak su var, sadece petekler soğuksa

Bu yazı kombinin **hiç** çalışmadığı durumu anlatıyor. Sıcak su geliyor ama petekler ısınmıyorsa kılavuzun satırı farklı ve cevabı genellikle bir ayarda; onu [Vaillant kombi kalorifer ısıtmıyor](/blog/vaillant-kombi-kalorifer-isitmiyor/) yazısında ayrıca anlattık.

## Ne zaman servis

- Vanalar açık, sigorta yerinde, kombi açık, ayarlar doğru ve kombi yine de çalışmıyorsa.
- Kılavuzun "ısıtma sisteminde hava var" satırı için; modeline göre bu iş yetkili servis ya da yetkili bayinin.
- ecoTEC pro kılavuzunun cümlesiyle: arızayı öngörülen önlemlerle gideremiyorsan **veya arıza mesajları (F.xx) tekrar ortaya çıkıyorsa.**

⛔ Kılavuzların genel uyarısı da unutulmasın: güvenlik tertibatları çıkarılmaz, köprülenmez; üründe, gaz, hava, su ve elektrik hatlarında değişiklik yapılmaz. Kapağın arkası servisin işi.

Vaillant'ın diğer kodları için [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) listesine, ekrandaki şey kod değil sembol ise [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasına bak. Marka bağımsız olarak kombinin neden yanmadığını [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
