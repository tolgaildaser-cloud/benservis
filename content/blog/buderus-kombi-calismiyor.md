---
title: "Buderus kombi çalışmıyor: açılıyor ama devreye girmiyor"
description: "Buderus kombi açık ama çalışmıyorsa Buderus'un listesi: ekrandaki kod, düşük basınç, yaz modu, oda termostatı ve güvenlik kilidi için tek reset."
slug: "buderus-kombi-calismiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:1x · Kaynak denetimi: buderus-kombi-calismiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200). PDF'ler pdftotext -layout, sayfa = PDF sayfası.
# Web araması KULLANILMADI: rehber adresleri buderus.com/tr/tr/bilgiler/kombi-rehberi/ dizininden, kod sayfaları 27 Eyl kod-linkleri.txt'den;
# PDF ve kod sayfası md5'leri 27 Eyl yerel kopyasıyla birebir.
# R1) Buderus TR "Kombi Nasıl Açılır? İlk Kez Kullananlar İçin Adım Adım Rehber" (buderus.com, resmî site)
#     https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/kombi-nasil-acilir-ilk-kez-kullananlar-icin-rehber/
#     HTTP 200 · 153.973 B · md5 c993c71c435ecd46709dc33522d2202e (dinamik sayfa; md5 indirme anına ait)
#     "Kombi Çalışmıyorsa Olası Nedenler": gaz gelmiyor (ocakla test, yoksa gaz dağıtım şirketi) · elektrik kesintisi (sigorta) · basınç çok düşük ·
#     "Yanlış mod seçilmiş olabilir. Yaz modunda kaloriferler ısınmaz." · "Kombi güvenlik nedeniyle kendini kilitlemiş olabilir. Bu durumda reset atmak
#     çözüm olabilir." · kodu not alıp servise ilet · "Reset tuşunu sık sık kullanmak" → "Tekrarlayan arıza durumlarında yetkili servis çağırın."
# R2) Buderus TR "Kombi Arızası Karşısında Onarım İpuçları" · .../kombi-arizasi-karsisinda-kendi-yapabileceginiz-onarim-ipuclari/
#     HTTP 200 · 136.892 B · md5 7cb3d81cb62d156b38b499b6d527f6f1 · "Kombinin Çalışmaması / Kombi Ekranında Arıza Kodu Görünmesi" → kılavuzdaki
#     hata kodları incelenmeli · "ilk olarak su basıncının kontrol edilmesi gerekir. Su basıncının ideal oranı 1-2 bar arasıdır." · doldurma musluğu
# R3) Buderus TR "Kombi Ateşleme Yapmıyor" · .../kombi-atesleme-yapmiyor-en-yaygin-nedenleri/ · HTTP 200 · 154.523 B · md5 bcd35159580781113713227e9b78e758
#     "Eğer ortam sıcaklığı ayarlanan değerin üzerindeyse kombi ateşleme denemesi yapmaz." · yaz modu · "sürekli reset ihtiyacı ya da tekrarlayan
#     hata kodu varsa mutlaka teknik destek" · balkon dolabında hava giriş/çıkış noktaları kapatılmamalı
# R4) Buderus TR "Buderus Kombi Resetleme İşlemi Nasıl Yapılır?" · .../buderus-kombi-resetleme-islemi-nasil-yapilir/
#     HTTP 200 · 140.916 B · md5 17466773741bea96aa9d929111153912 · 3 sn · reset tuşu yoksa aşağı+yukarı tuşları · "en fazla 2 defa"
# K1) Buderus TR "EP Arıza Kodu" https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/ep-ariza-kodu/ · HTTP 200 · 123.922 B ·
#     md5 0f4991fe2a78afb35b78a04b24ae26ec · "Reset tuşuna 30 saniyeyi aşmayacak şekilde basınız."
# K2) Buderus TR "Fd Arıza Kodu" .../fd-ariza-kodu/ · HTTP 200 · 123.487 B · md5 8a03ca4fe9343798913b698d8c9b43b6
# B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf · HTTP 200 · 1.305.490 B · 16 s. · md5 e90532810ee5ec5e8414b1c01e659a75
#     s.12 kod yanıp söndüğünde kapat-aç / Reset yazısı · tip etiketi · s.5 1–2 bar, doldurma, servisten göstermesini iste · s.11 manuel yaz işletmesi
# B2) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf · HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     s.11 "Bazı arızalar, ısıtma tesisatının kapanmasına neden olur ve ısıtma tesisatı sıfırlanmadan tekrar çalışmaz" + iki yol + servis + tip etiketi ·
#     s.8 yaz işletiminde ısıtma kilitli · s.12 1–2 bar, servisten göstermesini iste · s.4 dış sacı asla sökmeyin
# B3) Logamax Plus GB122i.2-24 KD H Kullanma Kılavuzu 6721843895 (2023/04)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721843895.pdf · HTTP 200 · 974.060 B · 12 s. · md5 14a8d326f557827c9670b4d367e65098 · s.8 aynı metin
# B4) Logamax plus GB172i.2 Kullanım Kılavuzu 6721852623 (2023/12)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf · HTTP 200 · 1.744.938 B · 16 s. · md5 e2c3f95692c0e3c1e3a2ea3b59997420
#     s.7 LoPr / 0,3 bar blokaj / "Isıtma tesisatını doldurun" · 2980 tekrarlanan reset blokajı
# ⛔ Bilerek YAZILMAYANLAR: gaz kontrolü ve sigorta kontrolü numaralı adım olarak (görev talimatı: gaz/elektrik adımı yok; Buderus listesindeki yerleri
#    numarasız anıldı) · ateşleme elektrodu/gaz valfi/iyonizasyon/fan teşhisi (R3 parça adı veriyor ama kullanıcıya adım yok → servis) · reset süresi için tek
#    rakam (R4 3 sn, EP/Fd 30 sn sınırı; kılavuzlar süre vermiyor; ikisi yan yana) · "manuel işletim" (GB022i s.9, teknik sorun içindir, kullanıcıya
#    sınırlı süre — yanlış kullanıma açık, yazılmadı) · rehber sayfalarındaki farklı bar aralıkları adım hedefi olarak (kılavuz 1–2 bar izlendi) · maliyet (#46) · kapak (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekrana bak; yanıp sönen bir arıza kodu ya da arıza sembolü varsa kodu ve kombinin modelini not et."
  - "Kodun anlamına Buderus'un arıza kodları listesinden bak ve o kodun kendi tedbirini uygula."
  - "Kombi soğukken basıncı manometreden oku; 1 bar'ın altındaysa kılavuzunun tarif ettiği yolla su ekle ya da servisten göstermesini iste."
  - "Isıtma bekliyorsan kombinin yaz modunda olmadığını kontrol et; yaz modundaysa kılavuzundaki tuşla kapatıp kaydet."
  - "Oda termostatı bağlıysa ayarlı sıcaklığın o anki oda sıcaklığının üzerinde olduğunu kontrol et."
  - "Arıza kodu sürüyorsa kombiyi kılavuzundaki yolla bir kez sıfırla; reset tuşuna 30 saniyeden uzun ve art arda basma."
  - "Sıfırlamadan sonra kod geri geliyorsa kodu ve cihaz bilgilerini Buderus yetkili servisine bildir."
faq:
  - q: "Buderus kombi açılıyor ama çalışmıyor, neden?"
    a: "Buderus'un 'Kombi nasıl açılır?' rehberindeki 'Kombi çalışmıyorsa olası nedenler' listesi beş madde sayıyor: gaz gelmiyor olabilir, elektrik kesintisi yaşanmış olabilir, basınç çok düşük olabilir, yanlış mod seçilmiş olabilir (yaz modunda kaloriferler ısınmaz) ya da kombi güvenlik nedeniyle kendini kilitlemiş olabilir. Son madde için sayfanın önerisi reset; sorun sürerse yetkili servis."
  - q: "Kombi kendini kilitlemiş ne demek?"
    a: "GB022i ve GB122i.2 kullanma kılavuzları bunu açıkça yazıyor: bazı arızalar ısıtma tesisatının kapanmasına neden olur ve tesisat sıfırlanmadan tekrar çalışmaz. Kılavuzların iki yolu var: kombiyi kapatıp tekrar çalıştırmak ya da arıza sembolleri kaybolana kadar iki ok tuşunu aynı anda basılı tutmak. GB072'de kombiyi kapatıp açmak ya da ekranda Reset yazısı görünene kadar reset tuşunu basılı tutmak."
  - q: "Reset tuşuna ne kadar basmalıyım, kaç kez deneyebilirim?"
    a: "Buderus'un kaynakları farklı ayrıntı veriyor. Resetleme rehberi reset tuşuna 3 saniye basılı tutmayı, art arda basmamayı ve resetin en fazla 2 defa tekrarlanmasını öneriyor. EP ve Fd kod sayfalarına göre reset tuşuna 30 saniyeyi aşmayacak şekilde basılmalı; daha uzun basmak ekranda EP ya da Fd kodu olarak görünür. GB172i.2 kılavuzu tekrarlanan sıfırlama girişimlerinin cihazı güvenlik nedeniyle bloke edebileceğini (2980) yazıyor. Kendi kılavuzunun yolunu izle, bir kez dene."
  - q: "Kombi çalışmıyor ama ekranda hiçbir şey yok. Ne yapmalıyım?"
    a: "Buderus'un listesinde bu durumun karşılığı elektrik kesintisi; sayfa sigortaların kontrol edilmesini söylüyor. Bu yazı elektrik tarafına girmiyor. Evde elektrik varsa ve kombinin ekranı yine de açılmıyorsa Buderus yetkili servisine başvur."
  - q: "Oda sıcak, kombi yine de hiç yanmıyor. Arıza mı?"
    a: "Olmayabilir. Buderus'un 'Kombi ateşleme yapmıyor' rehberine göre oda termostatı kullanılıyorsa kombi ihtiyaç oluşmadıkça devreye girmez; ortam sıcaklığı ayarlanan değerin üzerindeyse kombi ateşleme denemesi yapmaz. Önce termostattaki ayara ve sıcaklık talebine bak."
images:
  coverAlt: "Mutfak duvarındaki beyaz bir kombinin ekranına bakan bir kişi; yanında duvara asılı küçük bir oda termostatı"
---

Kombinin ekranı açık, belki bir şey yanıp sönüyor, ama ne petekler ısınıyor ne de kombi devreye giriyor. Buderus'un "Kombi Nasıl Açılır?" rehberinde bu durumun ayrı bir başlığı var: **"Kombi Çalışmıyorsa Olası Nedenler."** Sayfanın yaklaşımı sakin: basit nedenlere bağlı olarak da kombi açıldığı hâlde çalışmayabilir; yapılacak şey temel birkaç kontrol, sorun sürerse yetkili servis. Listenin dikkat çeken maddesi şu: kombi **güvenlik nedeniyle kendini kilitlemiş** olabilir. Bu yazıda o listeyi, Buderus kılavuzlarının arıza ve sıfırlama bölümleriyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kod ya da arıza sembolü var mı → kodun tedbiri → basınç 1 bar'ın altında mı → ısıtma bekliyorsan yaz modu açık mı → oda termostatı ısı istiyor mu → kod sürüyorsa bir kez sıfırla. Kod geri geliyorsa kodu ve cihaz bilgilerini yetkili servise bildir.

## Adım adım: evde denenecekler

**1. Ekrana bak.** Buderus'un onarım ipuçları sayfası kombinin çalışmaması ile ekranda arıza kodu görünmesini aynı başlıkta topluyor ve kodların çoğunlukla gaz girişi, su basıncı ve ateşleme sorunlarına dair olduğunu söylüyor. Kılavuzlara göre GB072'de arıza yanıp sönen bir kodla, GB022i ve GB122i.2'de bir arıza sembolü ve kodla gösterilir. Ekranda kod varsa yaz; ileride servise bu kodu ve modeli söyleyeceksin.

**2. Kodun tedbirini oku.** Aynı sayfanın tavsiyesi: kılavuzdaki hata kodlarına bak ve **kodun gösterdiği hataya odaklan.** Buderus'un kodları ve modellere göre dağılımı [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) listesinde. Sık görülen kodların kendi rehberleri var: ateşleme için [6A](/blog/buderus-kombi-6a-hatasi/) ve [227](/blog/buderus-kombi-227-hatasi/), aşırı ısınma için [4C](/blog/buderus-kombi-4c-hatasi/).

**3. Basınç 1 bar'ın altında mı?** Onarım ipuçları sayfasına göre kombi çalışmıyorsa **ilk olarak su basıncı** kontrol edilmeli; sayfanın verdiği ideal aralık 1–2 bar, kullanma kılavuzlarının normal işletme basıncı da **1 ile 2 bar.** Basıncı kombi **soğukken** manometreden oku. GB172i.2 kılavuzuna göre basınç ayarlı alt değerin altına inince ekranda **LoPr** mesajı çıkar, 0,3 bar'ın altında ısıtma tesisatı bloke edilir. Su ekleme modele göre farklı: GB072 kılavuzu doldurma vanasını açıp 1–2 bar'da kapatmayı tarif ediyor; GB022i ve GB122i.2 kılavuzları ise doldurmanın tesisata göre farklı olduğunu söyleyip nasıl yapıldığını **yetkili servisinden göstermesini istemeni** öneriyor (GB072 aynı notu taşıyor). Basınç kodları için [Buderus kombi 4L ve 2E hatası](/blog/buderus-kombi-4l-hatasi/) ve [Buderus kombi 1017 ve 2971 hatası](/blog/buderus-kombi-1017-hatasi/).

**4. Yaz modu açık mı?** Buderus'un listesinin dördüncü maddesi: **yanlış mod seçilmiş olabilir; yaz modunda kaloriferler ısınmaz.** Kombi aslında çalışıyordur, sadece ısıtma yapmaz. GB022i ve GB122i.2 kılavuzlarına göre yaz işletiminde ısıtma işletmesi kilitlidir. Ekrandaki mod sembolüne bak; yaz modundaysa kılavuzunun "manuel yaz işletmesinin kapatılması" bölümündeki tuşla kapatıp kaydet. Ayrıntılı ayar sırası [Buderus kombi kalorifer ısıtmıyor](/blog/buderus-kombi-kalorifer-isitmiyor/) yazısında.

**5. Oda termostatı ısı istiyor mu?** Buderus'un "Kombi ateşleme yapmıyor" rehberine göre oda termostatı kullanılıyorsa kombi ihtiyaç oluşmadıkça devreye girmez: **ortam sıcaklığı ayarlanan değerin üzerindeyse kombi ateşleme denemesi yapmaz.** Termostattaki ayarı ve sıcaklık talebini kontrol et; ayarlı değer odanın sıcaklığının üzerinde değilse kombinin beklemesi normal.

**6. Kod sürüyorsa bir kez sıfırla.** Listenin son maddesi bu: kombi güvenlik nedeniyle kendini kilitlemişse **reset atmak çözüm olabilir.** GB022i ve GB122i.2 kılavuzları nedenini de yazıyor: bazı arızalar ısıtma tesisatının kapanmasına yol açar ve tesisat **sıfırlanmadan tekrar çalışmaz.** Kılavuzların yolu:

- **GB072:** kombiyi kapatıp aç **ya da** ekranda **Reset** yazısı görünene kadar reset tuşunu basılı tut; kombi tekrar çalışır ve gidiş suyu sıcaklığı görünür.
- **GB022i ve GB122i.2:** kombiyi kapatıp tekrar çalıştır **ya da** arıza sembolleri artık görünmeyene kadar kılavuzdaki iki ok tuşunu aynı anda basılı tut.

Sınırlar: EP ve Fd kod sayfalarına göre reset tuşuna **30 saniyeyi aşmayacak** şekilde basılmalı; Buderus'un resetleme rehberi art arda basmamayı ve resetin **en fazla 2 defa** tekrarlanmasını öneriyor; GB172i.2 kılavuzu tekrarlanan sıfırlama girişimlerinin cihazı güvenlik nedeniyle **bloke edebileceğini (2980)** yazıyor. Bir kez dene.

**7. Kod geri geliyorsa servis.** Kılavuzların cümlesi aynı: arıza giderilemiyorsa yetkili servisi ara, **arıza kodunu ve cihaz bilgilerini** bildir. GB022i ve GB122i.2'de bu bilgiler kumanda paneli kapağındaki tip etiketinde, GB072'de tip etiketinde ya da ön kapaktaki cihaz tipi çıkartmasında yazılı. Buderus'un "Kombi nasıl açılır?" sayfası da "reset tuşunu sık sık kullanmak" hatasının çözümünü böyle veriyor: tekrarlayan arıza durumlarında yetkili servis çağır.

## Buderus'un listesi: beş neden, kimin işi

| Neden (Buderus "Kombi nasıl açılır?" sayfası) | Sayfanın önerisi | Bu yazıda |
|---|---|---|
| Gaz gelmiyor olabilir | Mutfaktaki ocakla gaz var mı bak; yoksa gaz dağıtım şirketini ara | Numaralı adım değil; aşağıdaki nota bak |
| Elektrik kesintisi yaşanmış olabilir | Sigortaları kontrol et | Numaralı adım değil; aşağıdaki nota bak |
| Basınç çok düşük olabilir | Ekrandaki bar değerine bak | 3. adım |
| Yanlış mod seçilmiş olabilir | Yaz modunda kaloriferler ısınmaz | 4. adım |
| Güvenlik nedeniyle kendini kilitlemiş olabilir | Reset atmak çözüm olabilir | 6. adım |

📌 Gaz ve elektrik tarafına bu yazıda girmiyoruz. Buderus'un sayfası ocakta gaz yoksa **gaz dağıtım şirketini** aramanı, ekran tamamen kapalıysa elektrik kesintisini ve sigortaları düşünmeni söylüyor. Gaz kokusu alıyorsan kombiye ve elektrik düğmelerine dokunma; kılavuzunun gaz kokusu bölümüne uy.

## Ne zaman servis

- Bir kez sıfırladıktan sonra arıza kodu geri geliyorsa; Buderus'un "ateşleme yapmıyor" sayfasına göre **sürekli reset ihtiyacı ya da tekrarlayan hata kodu** teknik destek gerektirir.
- Basınç sık düşüyorsa: GB072 ve GB022i kılavuzlarına göre sisteme sık su ekleniyorsa bu, sistemde su kaçağı olduğunu gösterir.
- Basınç normal, mod doğru, termostat ısı istiyor ve kombi yine de devreye girmiyorsa.
- Yanma kokusu varsa; "ateşleme yapmıyor" sayfası bunu da teknik destek listesine koyuyor.

⛔ GB022i kılavuzu kombinin dış sacının asla sökülmemesini, Buderus'un kılavuzları gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

Kombi çalışıyor ama musluktan sıcak su gelmiyorsa [Buderus kombi sıcak su vermiyor](/blog/buderus-kombi-sicak-su-vermiyor/) yazısına bak. Markadan bağımsız olarak kombinin neden yanmadığını [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
