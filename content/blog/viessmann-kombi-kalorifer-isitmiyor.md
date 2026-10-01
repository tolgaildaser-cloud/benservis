---
title: "Viessmann kombi ısıtmıyor, oda soğuk kalıyor"
description: "Viessmann kombi odayı ısıtmıyorsa kılavuzun 'Ortam çok soğuk' tablosuna bak: şebeke anahtarı, sıcaklık ayarı, sıcak su önceliği, tatil programı."
slug: "viessmann-kombi-kalorifer-isitmiyor"
date: "2026-10-01"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 07:0x · Kaynak denetimi: viessmann-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.viessmann-climatesolutions.com'dan yeniden indirildi (hepsi HTTP 200,
# application/pdf); md5'lerin hepsi 27 Eyl yerel kopyasıyla (kaynak-viessmann-sprint/) birebir. pdftotext -layout ile sayfa sayfa
# okundu; sayfa = PDF sayfası (bu altı kılavuzda basılı sayfa numarasıyla aynı). Web araması KULLANILMADI.
# ÇEKİRDEK SATIR: "Ne yapmalı? — Ortam çok soğuk" tablosu (Nedeni / Giderilmesi), altı kılavuzun hepsinde var.
# P) Vitopend 100-W · 5791986 TR 4/2019
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5791986VBA00002_1.pdf
#    HTTP 200 · 810.669 B · 44 sf · md5 5806d06b45d167c0b6e7ebe1ce6c0721 · tablo s.32
#    "Isıtma sistemi kapalı." → şebeke anahtarı / ana şalter (eğer varsa) / "Elektrik dağıtım kutusunda (ev sigortası) bulunan sigortayı
#    kontrol edin." · ayar → "Mahal ısıtması serbest bırakılmalıdır." + işletme programı, oda sıcaklığı, saat, zaman programı, ısıtma
#    tanım eğrisi · F02/F03/F04/F05/F07/F08 → "Aynı anda MODE ve OK tuşlarına ... basın (Reset)." · 0C, A0, CC, F10 ... F98 → servis
# Z) Vitodens 050-W · 5837977 TR 1/2019
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5837977VBA00001_1.pdf
#    HTTP 200 · 1.133.215 B · 28 sf · md5 96822ea6c393f0cdf728bcf3554afd5a · tablo s.21
#    oda sıcaklığı kontrol cihazı → istenen oda sıcaklığı · ısıtma kapalı → şebeke/ana şalter/ev sigortası · panel → oda termostatıyla
#    "Daha yüksek bir kazan suyu sıcaklığı", dış havaya bağlı "Daha yüksek bir oda sıcaklığı" · arıza kodu (ör. F2) → servis
# H) Vitodens 100-W/111-W/111-F · 6135864 TR 03/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf
#    HTTP 200 · 2.171.321 B · 44 sf · md5 5513c22c39f416336369c7d3cbe6d0fe · tablo s.33 · gaz kokusu bölümü s.3
#    ısıtma kapalı · ayar (gidiş/oda) · sıcak su önceliği "Kombi tip ısıtma cihazında su alımı ile sona erer." · sembol → kodu servise
#    · brülör kilidi + Tehlike kutusu · "Isıtma sisteminde hava var" → "Radyatörlerin havasını atın." · baca/yakma havası → servis
#    · ViCare "Tatil programı", ekranda "E 3"
# C) Vitodens Connect / Trend · 6171780 TR 10/2023
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6171780VBA00004_1.pdf
#    HTTP 200 · 1.851.908 B · 36 sf · md5 17765afa670bf200fd39032c21714795 · tablo s.27 (H ile aynı satırlar; öncelik:
#    "Sürekli akış tipi ısıtıcılı işletimde sıcak su alımını durdurun."; CL → kilit s.23)
# T) Vitodens Connect / Trend · 6173992 TR 05/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf
#    HTTP 200 · 1.787.756 B · 36 sf · md5 5c0d0900f6f66d9eb9dc09855ae7cb04 · tablo s.27 (H ile aynı satırlar; CL → s.24)
# D) Vitodens 200-W/222-W/222-F/242-F · 6172120 TR 06/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6172120VBA00009_1.pdf
#    HTTP 200 · 3.981.854 B · 68 sf · md5 3d0e404231424e9a8ce2e4347c1d992b · tablo s.48
#    "Isı üreticisi kapatılmıştır." → şebeke anahtarı + güç kaynağı (ayrı sigorta / ana şalter) · ayar → "Oda ısıtması serbest
#    bırakılmalıdır." + işletme programı, oda/gidiş sıcaklığı, saat, zaman programı, ısıtma eğrisi, "Tatil" fonksiyonu · "Boyler
#    ısıtılır." → bekle · "brülör arızası" → kilit s.42 · "Arıza" → sorgula, not al, onayla s.41 · "Şap kurutma" → önlem gerekmez
# ⛔ Bilerek YAZILMAYANLAR: "Yakıt gelmiyor" satırının tedbiri (gaz kapatma vanasını açma — görev talimatı: gaz müdahalesi yok;
#    yalnız "gaz dağıtım şirketine danış" anıldı) · gaz kokusunda vana kapatma ve binanın elektriğini kesme (aynı gerekçe; kılavuzun
#    bölümüne yönlendirildi) · radyatör hava alma yöntemi (kılavuz tedbiri yazıyor, yöntemi anlatmıyor; numaralı adıma alınmadı) ·
#    su doldurma (bu tablonun satırı değil; yalnız "tekrar devreye alma" bölümünde geçiyor) · baca/yakma havası (servis) ·
#    tuş sırası ve sembol şekilleri (PDF metninde sembol yok; kilit açma CL yazısına bırakıldı) · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının kullanma kılavuzu (varsa)"]
steps:
  - "Ekranda arıza sembolü ve bir kod görünüyorsa kodu not et; kılavuz bu kodun yetkili teknik servise bildirilmesini istiyor."
  - "Brülör arızası görünüyorsa (Vitodens'te CL, Vitopend 100-W'de F02–F08) kilidi kılavuzundaki tuşlarla bir kez aç; arıza tekrar gelirse yetkili servise haber ver."
  - "Kombinin şebeke anahtarının, varsa kazan dairesi dışındaki ana şalterin ve ev sigortasının açık olduğunu kontrol et."
  - "Oda termostatıyla çalışıyorsan kombide daha yüksek bir gidiş sıcaklığı, dış hava sıcaklığına bağlı çalışıyorsan daha yüksek bir oda sıcaklığı ayarla."
  - "İşletme programında oda ısıtmasının açık olduğunu, saatin ve ısıtma zaman programının doğru olduğunu kontrol et."
  - "Musluktan sıcak su akıyorsa ısıtma bekler; sıcak su alımını bitir ve ekrandaki sıcak su göstergesinin sönmesini bekle."
  - "ViCare uygulamasını kullanıyorsan tatil programının açık olup olmadığına bak; açıksa ayarını değiştir ya da kapat."
  - "Bunlar yerindeyse ve oda hâlâ soğuksa yetkili teknik servise haber ver."
faq:
  - q: "Viessmann kombi çalışıyor ama oda ısınmıyor, ne yapmalıyım?"
    a: "Viessmann'ın Vitopend 100-W, Vitodens 050-W, 100-W, Connect, Trend ve 200-W kullanma kılavuzlarında bu durumun kendi tablosu var: Ortam çok soğuk. Tablonun ilk satırları arıza değil ayar: ısıtma sistemi kapalı olabilir (şebeke anahtarı, ana şalter, ev sigortası) ya da kontrol panelindeki veya oda termostatındaki sıcaklık düşük ayarlanmış olabilir. Ekranda arıza sembolü ve kod varsa kılavuz kodun yetkili teknik servise bildirilmesini istiyor."
  - q: "Sıcak suyu açınca petekler soğuyor, bu normal mi?"
    a: "Vitodens 100-W, Connect ve Trend kılavuzlarının tablosuna göre sıcak su hazırlama önceliği etkinken ekranda bir gösterge görünür ve ısıtma bekler. Kılavuzun cümlesiyle bu durum kombi tip cihazda su alımı ile sona erer; Connect/Trend kılavuzunun 10/2023 baskısı da sıcak su alımını durdurmanı söylüyor. Vitodens 200-W kılavuzu boyler ısıtılırken beklemeni, gerekirse sıcak su çıkışını azaltmanı yazıyor."
  - q: "Ekranda E 3 var ve ısıtma çalışmıyor, neden?"
    a: "Vitodens 100-W kılavuzunun Ortam çok soğuk tablosunda bu satır var: tatil programı fonksiyonu ViCare uygulaması üzerinden açılmış ve ekranda E 3 gösteriliyor. Tedbir, ViCare'de tatil programının açık olup olmadığını kontrol etmek, gerekirse ayarını değiştirmek ya da kapatmak. Connect ve Trend kılavuzlarında aynı satır var."
  - q: "Kılavuz radyatörlerde hava olabileceğini söylüyor, ne yapmalıyım?"
    a: "Vitodens 100-W, Connect ve Trend kılavuzlarının tablosunda 'Isıtma sisteminde hava var' satırı var ve tedbir olarak radyatörlerin havasının atılmasını yazıyor. Kılavuz bunun nasıl yapılacağını ayrıca anlatmıyor. Nasıl yapılacağını bilmiyorsan bu işi yetkili servise bırak."
images:
  coverAlt: "Duvara monte beyaz bir kombi, yanında dijital bir oda termostatı ve önde soğuk görünen beyaz bir panel radyatörün olduğu sade bir oda köşesi"
---

Kombi duvarda sessizce duruyor ya da çalışıyor gibi görünüyor ama oda bir türlü ısınmıyor. Viessmann'ın kullanma kılavuzlarında bunun için ayrı bir tablo var, adı da tam olarak bu: **"Ortam çok soğuk."** Tablo Vitopend 100-W, Vitodens 050-W, Vitodens 100-W/111-W/111-F, Vitodens Connect, Vitodens Trend ve Vitodens 200-W/222-W/222-F/242-F kılavuzlarının "Ne yapmalı?" bölümünde, her satırda bir neden ve karşısında giderilmesi yazıyor. Bu yazıda o tablonun evde bakabileceğin satırlarını sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ekrana bak; arıza kodu varsa not et. Brülör arızasıysa kilidi bir kez aç. Sonra şebeke anahtarı, ana şalter ve ev sigortası. Ardından sıcaklık ayarı ve işletme programı. Sıcak su kullanılıyorsa ısıtma bekler. ViCare'de tatil programı açık kalmış olabilir. Hepsi yerindeyse yetkili teknik servis.

⛔ Gaz kokusu alıyorsan bu yazıyı bırak ve kılavuzunun "Gaz kokusu alındığında" bölümüne uy: sigara içme, ışık açma, elektrikli cihaz çalıştırma; kapı ve pencereleri aç, tehlike alanındaki kişileri dışarı çıkar ve bina dışından gaz ve elektrik dağıtım şirketlerine ve yetkili servise haber ver.

## Adım adım: evde denenecekler

**1. Ekranda kod var mı?** Tablonun bir satırı ekranda arıza sembolünün görünmesi. Vitodens 100-W, Connect ve Trend kılavuzlarının tedbiri: **gösterilen arıza kodunu yetkili teknik servise bildir.** Vitodens 050-W kılavuzu örnek olarak F2'yi veriyor ve arıza giderildiğinde göstergenin silineceğini yazıyor. Vitodens 200-W'de ekranda "Arıza" yazısı görünüyorsa kılavuz arıza türünü sorgulamanı, mesajı not alıp onaylamanı, gerekirse yetkili servisi bilgilendirmeni istiyor. Kodların anlamı için [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) sayfasına bak.

**2. Brülör kilitlendiyse bir kez aç.** Vitodens 100-W, Connect ve Trend kılavuzlarına göre ekranda arıza simgesi ve **CL** yanıp sönüyor, brülör de devreye girmiyorsa tedbir brülörün kilidini açmak; Vitodens 200-W'de ekranda "brülör arızası" yazar. Vitopend 100-W'de F02, F03, F04, F05, F07 ya da F08 yanıp sönüyorsa **MODE ve OK** tuşlarına aynı anda basılarak reset yapılır. Kılavuzların hepsi aynı sınırı koyuyor: arıza tekrar gelirse yetkili servise haber ver. Vitodens kılavuzlarındaki uyarıya göre kilidi **kısa aralıklarla birkaç kez açma.** Vitopend 100-W'de 0C, A0, CC, F10, F18, F30 gibi kodlar için ise tedbir doğrudan yetkili teknik servis. Tuş sırası [Viessmann kombi CL hatası](/blog/viessmann-kombi-cl-hatasi/) ve [Viessmann Vitopend hata kodları](/blog/viessmann-vitopend-kombi-hata-kodlari/) yazılarında.

**3. Şebeke anahtarı, ana şalter, ev sigortası.** Tablonun ilk satırı: **ısıtma sistemi kapalı.** Kılavuzların tedbiri üç parça: kombinin şebeke anahtarını aç; varsa ana şalteri aç (Vitodens 100-W, Connect ve Trend kılavuzları bunun kazan dairesi dışında olduğunu yazıyor); elektrik dağıtım kutusundaki ev sigortasını kontrol et. Vitodens 200-W kılavuzu sistemin güç kaynağının ayrı bir sigortadan ya da ana şalterden açılmasından söz ediyor.

**4. Sıcaklık ayarını yükselt.** Tablonun ikinci satırı kontrol panelinin ya da oda termostatının ayarının yanlış olması. Vitodens 100-W, Connect ve Trend kılavuzlarına göre oda termostatıyla çalışıyorsan **daha yüksek bir gidiş sıcaklığı**, dış hava sıcaklığına bağlı çalışıyorsan **daha yüksek bir oda sıcaklığı** ayarlanır. Vitodens 050-W kılavuzu aynı şeyi "kazan suyu sıcaklığı" diye yazıyor ve oda sıcaklığı kontrol cihazı varsa istenen oda sıcaklığının orada ayarlanmasını istiyor. Oda termostatının ayarı için onun kendi kullanma kılavuzuna bak.

**5. İşletme programı, saat, zaman programı.** Vitopend 100-W ve Vitodens 200-W kılavuzları bu satırda bir şart daha koyuyor: **oda ısıtması serbest bırakılmış olmalı.** Kontrol edilecekler: işletme programı, oda sıcaklığı, saat, oda ısıtması için zaman programı ve dış hava sıcaklığına bağlı işletmede ısıtma tanım eğrisi. Vitodens 200-W'de dış hava kompanzasyonlu ya da sabit işletmede **"Tatil" fonksiyonunun açık** olup olmadığına da bakılır.

**6. Sıcak su kullanılıyorsa bekle.** Vitodens 100-W, Connect ve Trend kılavuzlarında bir satır var: **sıcak su hazırlama önceliği etkin** ve ekranda bunun göstergesi görünüyor. Bu sırada ısıtma bekler. Vitodens 100-W kılavuzu ve Connect/Trend kılavuzunun 05/2026 baskısı bu durumun kombi tip cihazda su alımı ile sona erdiğini yazıyor; Connect/Trend kılavuzunun 10/2023 baskısı sürekli akış tipi işletimde sıcak su alımını durdurmanı söylüyor. Boylerli kurulumda boyler ısınana kadar beklenir; Vitodens 200-W kılavuzu gerekirse sıcak su çıkışını azaltmayı ya da ayarlı sıcak su sıcaklığını geçici olarak düşürmeyi ekliyor.

**7. ViCare'de tatil programı.** Vitodens 100-W, Connect ve Trend kılavuzlarına göre tatil programı **ViCare uygulaması üzerinden** açılmış olabilir; Vitodens 100-W kılavuzu bu durumda ekranda **E 3** gösterildiğini yazıyor. Tedbir: ViCare'de tatil programının açık olup olmadığını kontrol et, gerekirse ayarını değiştir ya da kapat. Ayrıntı [Viessmann kombi E3 hatası](/blog/viessmann-kombi-e3-hatasi/) yazısında.

**8. Hepsi yerindeyse servis.** Tablonun kalan satırları senin ayarlayabileceğin şeyler değil. Vitodens 100-W, Connect ve Trend kılavuzlarında brülörün kapalı olduğu, yakma havası beslemesinde ya da baca bağlantı ağzında tıkanma olduğu satırın tedbiri **yetkili teknik servise haber vermek.** Kilit tekrar tekrar geliyorsa da aynı yol geçerli.

## Kılavuzun tablosu — altı kılavuz yan yana

| Neden (kılavuzdan) | Giderilmesi (kılavuzdan) | Hangi kılavuzda |
|---|---|---|
| Isıtma sistemi kapalı | Şebeke anahtarı, varsa ana şalter, ev sigortası | Hepsi |
| Kontrol paneli ya da oda termostatı ayarı yanlış | Gidiş ya da oda sıcaklığını yükselt; işletme programı, saat, zaman programı | Hepsi |
| Sıcak su hazırlama önceliği etkin / boyler ısıtılıyor | Sıcak su alımı bitince ya da boyler ısınınca ısıtma sürer | Vitodens 100-W · Connect · Trend · 200-W |
| Ekranda arıza sembolü ve kod | Kodu yetkili teknik servise bildir | Hepsi (200-W'de "Arıza" yazısı) |
| Brülör arızası (CL ya da F02–F08) | Kilidi bir kez aç; tekrar gelirse servis | Vitopend 100-W · Vitodens 100-W · Connect · Trend · 200-W |
| Isıtma sisteminde hava var | Radyatörlerin havasını at | Vitodens 100-W · Connect · Trend |
| Brülör kapalı, yakma havası ya da baca ağzında tıkanma | Yetkili teknik servis | Vitodens 100-W · Connect · Trend |
| ViCare'de tatil programı açık (E 3) | Kontrol et, değiştir ya da kapat | Vitodens 100-W · Connect · Trend |
| "Şap kurutma" açık | Önlem gerekmez; süre dolunca ayarlı program açılır | Vitodens 200-W |

📌 Tablolarda bir de yakıtın gelmemesiyle ilgili satır var. Bu yazı gaz tarafına girmiyor; doğalgazın geldiğinden emin değilsen kılavuzun dediği gibi gaz dağıtım şirketine danış.

📌 "Radyatörlerin havasını atın" tedbiri kılavuzda yazıyor ama yöntemi anlatılmıyor. Nasıl yapılacağını bilmiyorsan bu işi yetkili servise bırak.

## Ne zaman servis

- Ekranda arıza sembolü ve kod varsa; kılavuz kodun yetkili teknik servise bildirilmesini istiyor.
- Brülör kilidini açtıktan sonra arıza tekrar geliyorsa. Vitodens kılavuzlarının uyarısıyla: giderilmeyen arızalar hayati tehlike oluşturabilir; kilidi kısa aralıklarla birkaç kez açma.
- Vitopend 100-W'de 0C, A0, CC, F10, F18, F30, F38, F51, F59, F70, F78, F80, F88, F90 ya da F98 görüyorsan.
- Ayarlar doğru, kombi açık ve oda yine de soğuksa.

⛔ Kılavuzların emniyet bölümü de açık: cihazın içini açma, kaplamaları sökme, boru bağlantılarını açma. Cihaz üzerinde yalnız kullanma kılavuzundaki ayarlar yapılır; gerisi yetkili teknik servisin işi.

Sorun sıcak suda ise [Viessmann kombi sıcak su vermiyor](/blog/viessmann-kombi-sicak-su-vermiyor/) yazısına bak. Marka bağımsız olarak peteklerin neden ısınmadığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
