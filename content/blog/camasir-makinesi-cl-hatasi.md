---
title: "Çamaşır makinesi CL hatası ne demek? Vestel, LG, Arçelik"
description: "Çamaşır makinesinde CL arıza değil, çocuk kilidi göstergesidir. Vestel ve LG kılavuzlarına göre kilidi kapatma tuşları; Arçelik'te kilit Con yazar."
slug: "camasir-makinesi-cl-hatasi"
date: "2026-11-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-11-02 Pzt PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK-TUM.md #200 [HK] "çamaşır makinesi CL hatası / CL ne demek"). Slug origin/main content/blog/'da yok; yakın yazılar: camasir-makinesi-kapak-kilidi-arizasi, camasir-makinesi-programi-iptal-etme, vestel-/lg-camasir-makinesi-sembolleri-ve-anlamlari (CL'yi ayrı yazı olarak anlatan yok).
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (bu koşu, ham: _kaynak/OT-2026-11-03.txt): "çamaşır makinesi c" #2 "cl hatası", #5 "cl ne demek", #8 "cl hatası nasıl düzeltilir vestel"; "çamaşır makinesi cl" #1 "cl hatası", #2 "cl ne demek", #4 "cl hatası vestel", #9 "cl hatası lg". GSC kanıt sayılmadı.
# Belgeler (#88), hepsi curl -sL (özel başlık yok), HTTP 200, ham dosyalar _kaynak/camasir-makinesi-cl-ne-demek/:
#  (V) Vestel CMI 86201 çamaşır makinesi kullanım kılavuzu, 40 s., md5 7a5f38c8ae4890b1b1e7e691f2de1950 — PDF s.21 (5.8 Çocuk Kilidi) https://statik.vestel.com.tr/webfiles/20264687_k.pdf
#  (L) LG F4V5RGP* kullanım kılavuzu (TR), 64 s., md5 2281c4e9b4f42dcd592ca465a4b4c739 — PDF s.41 (Çocuk Kilidi, Kontrol Panelinin Kilitlenmesi/Açılması), s.55 (sorun giderme) https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA
#  (LY) LG Türkiye yardım kütüphanesi "Düğmelere basamıyorum (Düğme kilidi kontrollü)", web sayfası, md5 8aa9eed453912d99d6876249332069c2 https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153390167896/
#  (A) Arçelik 9103 HE çamaşır makinesi kullanma kılavuzu, 40 s., md5 6610815f28099c1c73ea3a5681c20c0d — PDF s.27 (5.17), s.29 (6.7), "Con" ve "COFF" https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf
#  elendi: Profilo BM6380MA kullanım kılavuzu 9001951966_E — "CL" geçiyor ama BULAŞIK makinesi kılavuzu; çamaşır makinesi yazısına kaynak olmaz https://media3.bsh-group.com/Documents/9001951966_E.pdf
# BİLEREK YAZILMAYANLAR: Bosch/Siemens/Profilo/Beko/Samsung çamaşır makinelerinde kilit göstergesinin adı (bu koşuda ilgili çamaşır kılavuzu okunmadı; Beko Arçelik ile aynı "Con" yazdığı için ayrıca anılmadı) · LG'de kilit açılınca CL'nin kaybolduğu (LG yalnız tuşları ve süreyi yazıyor) · Regal/Finlux/Seg adları (kendi kılavuzları okunmadı) · kapak kilidi onarımı · fiyat (#46).
# Alıntı denetimi: camasir-makinesi-cl-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekrandaki yazıya bak: CL ya da Con sabit yanıyorsa çocuk kilidi açıktır; yanıp sönüyorsa kilitliyken bir tuşa basmışsındır."
  - "Programın sürdüğünü kontrol et: kilit makineyi bozmaz, yalnızca tuşları devre dışı bırakır."
  - "Vestel'de elektronik göstergedeki 4. ve 5. tuşa aynı anda 3 saniyeden uzun bas."
  - "LG'de makineyi çalıştır, Zaman Erteleme ve Öğe Ekle düğmelerine 3 saniye birlikte basılı tut."
  - "Arçelik'te 2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye bas; ekranda COFF görünür."
  - "Kendi modelindeki tuş çiftini kullanma kılavuzundan kontrol et; LG, tuşların modele göre değiştiğini yazıyor."
  - "Kilit kalkmıyorsa ya da başka bir kod geliyorsa üreticinin servisine haber ver."
faq:
  - q: "Çamaşır makinesinde CL yazıyor ve tuşlar çalışmıyor, ne yapmalıyım?"
    a: "CL çocuk kilidinin açık olduğunu gösterir. Vestel kılavuzuna göre kilit, göstergedeki 4. ve 5. tuşa aynı anda 3 saniyeden uzun basılarak kapanır; LG kılavuzuna göre Zaman Erteleme ve Öğe Ekle düğmelerine 3 saniye basmak gerekir. Tuş çifti modele göre değişir."
  - q: "Vestel çamaşır makinesinde CL hatası nasıl düzeltilir?"
    a: "Vestel CMI 86201 kılavuzu CL'yi arıza olarak değil, Çocuk Kilidi bölümünde göstergede yanan bir sembol olarak anlatır. Kilit devredeyken CL yanar ve herhangi bir tuşa basıldığında yanıp söner. Aynı tuşlara 3 saniyeden uzun basınca kilit devreden çıkar ve CL söner."
  - q: "LG çamaşır makinesinde CL ne demek?"
    a: "LG'nin yardım sayfasına göre CL işareti, çocukların çamaşır makinesini çalıştırmasını önleyen düğme kilididir. Kilit açıkken güç düğmesi dışında hiçbir düğme çalışmaz ve güç kapatılıp açılsa da kilit sürer."
  - q: "CL ile kapak kilidi aynı şey mi?"
    a: "Hayır. Arçelik 9103 HE kılavuzu yükleme kapağını kilitleyen sistemi ayrı anlatır ve bunun için Kapak Kilitli sembolü yanar. Çocuk kilidi ise tuşları kilitler. Kapak açılmıyorsa kapak kilidi yazısına bak."
  - q: "Çocuk kilidi açıkken makineyi kapatıp açarsam program devam eder mi?"
    a: "Arçelik kılavuzuna göre çocuk kilidi devredeyken Açma/Kapama tuşuyla makineyi kapatıp açabilirsin ve makine, çocuk kilidi devrede olacak şekilde programa kaldığı yerden devam eder. LG'de güç düğmesi kapatıldığında kilit sıfırlanmaz."
images:
  coverAlt: "Beyaz bir çamaşır makinesinin sade çizimi"
  steps:
    - "Çamaşır makinesinin panelindeki kilit yazısına bakan beyaz eldivenli sade siluet el çizimi"
    - "Çalışmaya devam eden çamaşır makinesinin panelini gösteren beyaz eldivenli sade siluet el çizimi"
    - "Panelde iki tuşa aynı anda basan beyaz eldivenli sade siluet el çizimi"
    - "Panelde iki düğmeye birlikte basılı tutan beyaz eldivenli sade siluet el çizimi"
    - "Yardımcı işlev tuşlarına birlikte basan beyaz eldivenli sade siluet el çizimi"
    - "Kullanma kılavuzunun kontrol paneli sayfasını tutan beyaz eldivenli sade siluet el çizimi"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el çizimi"
---

Çamaşır makinesi ekranındaki CL, arıza kodu değil, çocuk kilidinin açık olduğunu gösteren bir göstergedir. Vestel CMI 86201 kılavuzu CL'yi "Çocuk Kilidi" bölümünde anlatıyor; LG'nin kılavuzu ve yardım sayfası da CL'yi düğme kilidine bağlıyor. İki üreticide de kilit, tuşlara 3 saniye basılarak açılıp kapanıyor.

Bu yazıda üç belgeyi karşılaştırıyoruz: **Vestel CMI 86201** kullanım kılavuzu, **LG F4V5RGP\*** kullanım kılavuzu ile LG Türkiye'nin "Düğmelere basamıyorum" yardım sayfası ve **Arçelik 9103 HE** kullanma kılavuzu. Arçelik aynı kilidi CL değil "Con" olarak gösteriyor; farkı aşağıda ayrıca yazdık.

> ⚠️ **Kısa cevap:** CL yanıyorsa makine bozuk değildir, tuşlar kilitlidir. Kilidi kendi kılavuzundaki tuş çiftiyle 3 saniye basarak kapatırsın.

## CL çamaşır makinesinde arıza kodu mu?

Hayır. Vestel'in kılavuzuna göre çocuk kilidi, yıkama sırasında tuşlara basılınca ya da program düğmesi çevrilince program akışı etkilenmesin diye vardır. Kilit devreye girdiğinde elektronik göstergede CL yanar. Kilit devredeyken herhangi bir tuşa basılırsa CL yanıp söner.

LG'nin yardım sayfası aynı şeyi şöyle söylüyor: Kontrol kilidi için CL işareti, çocukların çamaşır makinesini çalıştırmasını önleyen bir düğme kilitleme özelliğidir. Kilit açıkken güç düğmesi dışında hiçbir düğme çalışmaz. LG'nin kılavuzundaki sorun giderme tablosu da "düğmeler düzgün çalışmıyor" belirtisinin nedeni olarak Çocuk Kilidi seçeneğinin etkin olmasını yazıyor.

Arçelik 9103 HE kılavuzunda aynı kilit CL olarak değil "Con" olarak görünür. Kilitliyken herhangi bir tuşa basılınca ekranda aynı ifade yanar; kilidi kapatınca "COFF" yazar. Yani ekranında Con ya da COFF gören bir Arçelik kullanıcısı da aynı konuya bakıyor: çocuk kilidi. Kapak kilidi ise ayrı bir sistemdir ve Arçelik'te kapak kilitliyken Kapak Kilitli sembolü yanar.

## Vestel, LG ve Arçelik'te kilit nasıl çalışıyor?

| Marka ve model | Ekranda | Kilidi açıp kapatan tuşlar | Not |
|---|---|---|---|
| Vestel CMI 86201 | CL | Elektronik göstergedeki 4. ve 5. tuş, aynı anda 3 saniyeden uzun | Kilitliyken tuşa basınca CL yanıp söner |
| LG F4V5RGP* | CL | Zaman Erteleme ve Öğe Ekle, 3 saniye | Güç düğmesi hariç tüm düğmeler kilitlenir |
| Arçelik 9103 HE | Con (kapatınca COFF) | 2. ve 4. yardımcı fonksiyon tuşu, 3 saniye | Kilitliyken tuşa basınca ekranda aynı ifade görünür |

## Kilit açıkken hangi tuşlar çalışmaz?

Vestel'de kilit, yıkama sırasında tuşlara basılınca ya da program düğmesi çevrilince programın bozulmaması için devreye giriyor; kilitliyken bir tuşa basarsan yalnızca CL yanıp söner. LG'nin kılavuzunda kontroller kilitlendiğinde Güç düğmesi hariç tüm düğmeler kilitleniyor ve yıkama sırasında ekranda CL ile kalan süre dönüşümlü gösteriliyor. LG ayrıca Güç düğmesi kapatıldığında bu işlevin sıfırlanmadığını, diğer işlevlere erişmeden önce çocuk kilidinin devre dışı bırakılması gerektiğini yazıyor. Yani güç düğmesini kapatıp açmak LG'de kilidi kaldırmaz.

## Adım adım: CL nasıl kapatılır?

**1. Ekrandaki yazıyı oku.** CL ya da Con sabit yanıyorsa çocuk kilidi açıktır. Vestel'de CL yanıp sönüyorsa kilitliyken bir tuşa basmışsın demektir. Başka bir kod ya da yazı görünüyorsa bu yazı o kodu çözmez.

**2. Programın bozulmadığını bil.** Vestel'e göre çocuk kilidi devredeyken program düğmesi İPTAL konumuna getirilip başka bir program seçilse bile daha önce çalışan program kaldığı yerden devam eder. Arçelik'te kilitliyken Açma/Kapama tuşuyla makineyi kapatıp açabilirsin; makine kilitli şekilde programa kaldığı yerden devam eder. Kilit programı bozmaz, yalnız tuşları devre dışı bırakır.

**3. Vestel'de iki tuşa birlikte bas.** Elektronik göstergedeki 4. ve 5. tuşa aynı anda 3 saniyeden uzun bas. Kilit devreden çıkınca CL söner.

**4. LG'de iki düğmeye birlikte bas.** Makineyi çalıştır, Zaman Erteleme ve Öğe Ekle düğmelerine 3 saniye boyunca basılı tut. Kilidi devreden çıkarmak için LG kılavuzu aynı iki düğmeyi gösteriyor. Kilit devreye girerken bir sinyal sesi duyulur ve ekranda CL mesajı görünür; LG ayrıca Güç düğmesi kapatılsa da kilidin sıfırlanmadığını ve diğer işlevlere geçmeden önce kilidin kapatılması gerektiğini yazıyor.

**5. Arçelik'te yardımcı fonksiyon tuşlarına bas.** 2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye bas. Kilit devreye girerken ekranda Con, devreden çıkarken COFF görünür.

**6. Kendi modelindeki tuş çiftini kontrol et.** LG'nin yardım sayfası, düğme kilidini nasıl açıp kapatacağının modele göre değiştiğini ve sayfadaki resimlerin ürününden farklı olabileceğini yazıyor. Kılavuzdaki kontrol paneli sayfasına bak.

**7. Kilit kalkmıyorsa servise haber ver.** Tuşlara 3 saniye basmana rağmen kilit kalkmıyorsa ya da ekranda başka bir kod görünüyorsa LG'nin yardım sayfası üreticinin çağrı merkeziyle iletişime geçmeyi söylüyor. Diğer markalarda yetkili servise başvur. Makinenin kapağını zorlama.

## CL kalktıktan sonra hâlâ sorun varsa?

Tuşlar çalıştı ama kapak açılmıyorsa sorun kilit değil, kapak kilididir; [Çamaşır makinesi kapak kilidi arızası](/blog/camasir-makinesi-kapak-kilidi-arizasi/) yazısına bak. Programı bırakmak için [Çamaşır makinesi programı iptal etme](/blog/camasir-makinesi-programi-iptal-etme/) yazısındaki tuşları kullan. Ekrandaki diğer işaretler için [Vestel çamaşır makinesi sembolleri ve anlamları](/blog/vestel-camasir-makinesi-sembolleri-ve-anlamlari/) ve [LG çamaşır makinesi sembolleri ve anlamları](/blog/lg-camasir-makinesi-sembolleri-ve-anlamlari/) yazıları var.

Belirtiyi benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
