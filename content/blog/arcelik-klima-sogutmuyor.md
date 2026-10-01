---
title: "Arçelik klima soğutmuyor: evde kontrol"
description: "Arçelik klima etkili soğutmuyorsa kılavuzun sırası: sıcaklık ve enerji tasarruflu soğutma, ilk çalıştırma, güneş ve hava yolu, filtre temizliği."
slug: "arcelik-klima-sogutmuyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Arçelik'in kendi alan adı (download.arcelik.com.tr).
# Web araması YALNIZ belgenin yerini bulmak için. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-sprint/ · pdftotext -layout -f N -l N, PDF sayfası = basılı "N TR".
#  A1) Arçelik "Eco Ionizer Inverter serisi ev tipi klima kullanma kılavuzu" 182410 A / 232410 A (Doküman 5400721583 Rev.:c), 28 s., md5 cef5414dfc998a5217f8be6310bd2be3
#      https://download.arcelik.com.tr/download.usagemanuals/182410-a-eco-ionizer-inverter-serisi-ev-tipi-klima-kullanim-kilavuzu-tr_TR_20151106181318_User20Manual20-20Filetur-A.pdf
#      s.25 "7 Problemler için çözüm önerileri" · "Klima etkili olarak soğutmuyor veya ısıtmıyor." → "• Filtre kirli olabilir. >>> Filtrenin kirli olup olmadığını kontrol edin." / "• Uygun sıcaklık seçilmemiş olabilir. >>> Sıcaklık ayarının doğru yapılıp yapılmadığını kontrol edin." / "• Klimayı ilk çalıştırdığınızda oda çok sıcak olabilir. >>> Klimayı ilk çalıştırdığınızda oda çok sıcak ise soğutma için biraz bekleyin." / "• Ünite dışarıdan hava alamıyor olabilir. >>>> Ünitenin hava giriş ve çıkış pencerelerinin önünde bir engel olup olmadığını kontrol edin."
#      s.25 "Klima sis üflüyor. C Ortam çok nemliyse klimadan çıkan hava akımının sıcak havayı soğutması ile buğulanma oluşacaktır. Bu, klimanın yanlış çalışmasından kaynaklanmaz ve bir arıza değildir." / "Klima tekrar çalıştırıldığında 3 dakika kadar çalışmıyor. C Bu, klimanın korunması için geliştirilmiş bir önlemdir. 3 dakika sonunda klima çalışmaya başlayacaktır." / "A Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
#      s.24 "Hava filtresinin temizliği" "Klimanın temizliğindeki en önemli bölüm, hava filtresinin temizlenmesidir. Aksi takdirde, soğutma-ısıtma kapasitesi düşer" / "(en az 15 günde bir) ön panel hava giriş menfezlerinin arkasında bulunan sürgülü hava filtrelerini çekip, tıkanıp tıkanmadığını kontrol edin." / "1. Ürüne gelen elektriği kesin. 2. Hava filtresini çıkartmak için ön paneli sağ ve sol alt köşe noktalarından ve ortadan kendinize doğru çekerek açın. 3. Hava filtresinin alt kısımlarından çekerek çıkartın. 4. Hava filtrelerini vakum ya da ılık suyla temizleyin. Hava filtresi çok kirli ise deterjan ile ılık suda yıkayın. 5. Temizleme bitince gölgede kurutun ve hava filtrelerini tekrar yerine takın." / "C Klimayı kesinlikle hava filtresiz çalıştırmayın." / "Hava filtresinin hasar görmesi halinde, Yetkili Servisten yeni bir hava filtresi temin edebilirsiniz."
#      s.23 bakım tablosu "Hava filtresi ... 2 Hafta" / "Eşanjörü temizleyin. Yılda bir kez" / "Isı eşanjör bobinlerini ve panel deliklerini temizlemek için buhar kullanın.(Yetkili servise danışın.)" / "Ürünü temizlerken ya da bakımını yaparken sağlam bir tabure ya da merdiven kullanın." / "Hava filtresini çıkarırken metal parçalara dokunmayın. Yaralanabilirsiniz." / "Klimayı suyla yıkamayın."
#      s.19 "Enerji tasarruflu soğutma fonksiyonu" "Soğutma veya nem giderme modu çalışması sırasında enerji tüketimini minimuma indirir ve ... ayarlanmış sıcaklık değerini optimum düzeye kadar yükseltir." / "$ sembolü ekranda belirecektir." / "... tuşuna tekrar basarak fonksiyonu devreden çıkartabilirsiniz." / "ayarlanan sıcaklık kademeli olarak arttırılarak en son 26 °C'ye otomatik olarak set edilecektir." / "Bu fonksiyon bazı ürünlerde olmayabilir veya çalışmayabilir."
#      s.10 "Klima çalışırken, güneş ışınlarının doğrudan içeri girmesine engel olun, güneşlik ve perdeleri kapalı tutun." / "kapı ve pencereleri mümkün olduğunca kapalı tutun." / "Yıkanabilir toz filtrede tıkanma hava akışını, soğutmayı ve nem giderme olayını azaltır"
#      s.9 "Üründen garip bir ses, duman ve koku gelirse ürünü sigortadan kapatın ve Yetkili Servisi arayın."
#  A2) Arçelik klima kullanma kılavuzu (FACELIFT, 40 s.), md5 5c0752d55f11d6a00efc0770d77f4897 · https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201803231541778_User%20Manual%20-%20Filetr_TR.pdf · s.37 "Problemler için çözüm önerileri" aynı dört madde (çapraz doğrulama; metnin bir kısmı font kodlaması nedeniyle okunamıyor).
# YAKIN KOPYA KAPISI: aynı grubun Beko klima belirti sayfası yayında YOK (ls-tree origin/main f6bc46b); Beko için bu taslakla aynı metni taşıyacağından ayrıca yazılmadı → bulunamadi-klima.md.
# BİLEREK YAZILMAYANLAR: eşanjör/su tahliye tavası/hortum temizliği (servis işi ya da söküm) · gaz/kompresör teşhisi (belgede yok) · tuş harfleri (font glifleri okunmuyor) · fiyat ve "garanti dışı bakım" cümlesi.
# Alıntı denetim tablosu: arcelik-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Sağlam bir tabure"]
steps:
  - "Kumandada soğutma modunun seçili olduğunu ve sıcaklık ayarının doğru yapıldığını kontrol et."
  - "Ekranda enerji tasarruflu soğutmanın $ simgesi varsa aynı tuşa yeniden basarak işlevi kapat."
  - "Klimayı yeni çalıştırdıysan ve oda çok sıcaksa soğutma için biraz bekle."
  - "Güneşlik ve perdeleri kapat, kapı ve pencereleri kapalı tut."
  - "Ünitenin hava giriş ve çıkış pencerelerinin önünde bir engel olup olmadığını kontrol et."
  - "Ürüne gelen elektriği kes."
  - "Ön paneli aç, hava filtresini alt kısmından çekerek çıkar, vakumla ya da ılık suyla temizle, gölgede kurutup tak."
  - "Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur."
faq:
  - q: "Arçelik klima neden etkili soğutmaz?"
    a: "Arçelik kılavuzunun 'Klima etkili olarak soğutmuyor veya ısıtmıyor' maddesi dört neden sayıyor: filtre kirli olabilir, uygun sıcaklık seçilmemiş olabilir, klimayı ilk çalıştırdığında oda çok sıcak olabilir ve ünite dışarıdan hava alamıyor olabilir."
  - q: "Ekranda $ simgesi var, klima ayarladığım dereceden sıcak üflüyor gibi. Neden?"
    a: "Arçelik kılavuzuna göre enerji tasarruflu soğutma açıkken ayarlanan sıcaklık kademeli olarak artırılır ve en son 26°C'ye otomatik ayarlanır. İşlev açıkken ekranda $ simgesi görünür; aynı tuşa yeniden basarak kapatabilirsin. Kılavuz bu işlevin bazı ürünlerde olmayabileceğini de yazıyor."
  - q: "Klima sis üflüyor, bozuk mu?"
    a: "Hayır. Arçelik kılavuzuna göre ortam çok nemliyse klimadan çıkan hava akımının sıcak havayı soğutmasıyla buğulanma oluşur; bu bir arıza değildir."
  - q: "Arçelik klima filtresi ne sıklıkla temizlenir?"
    a: "Arçelik'in bakım tablosu hava filtresi için 2 haftalık aralık veriyor; filtre bölümünde de ortamın kirliliğine göre en az 15 günde bir filtrelerin çekilip tıkanıp tıkanmadığının kontrol edilmesini istiyor. Klimayı kesinlikle hava filtresiz çalıştırma."
images:
  coverAlt: "Öğle güneşinin girdiği bir salonda tabure üzerinde duran bir kişinin duvardaki beyaz split klimanın ön panelini açması"
---

Klima açık, ama beklediğin serinlik yok. Arçelik'in Türkçe kullanma kılavuzu bu durumu "Problemler için çözüm önerileri" bölümünde **"Klima etkili olarak soğutmuyor veya ısıtmıyor."** başlığıyla veriyor ve dört olası neden sayıyor. Bunlardan biri çoğu zaman gözden kaçıyor: **"Klimayı ilk çalıştırdığınızda oda çok sıcak olabilir."** Kılavuzun yanıtı da sade: soğutma için biraz bekle. Bu yazıda Arçelik'in dört maddesini, kılavuzun enerji tasarruflu soğutma ve filtre bölümleriyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kumanda: mod soğutma mı, sıcaklık doğru mu, ekranda $ (enerji tasarruflu soğutma) var mı? Oda çok sıcakken yeni açtıysan biraz bekle. Güneşlik-perde ve kapı-pencere kapalı mı, ünitenin önü açık mı? Sonra elektriği kes ve hava filtresini temizle. Sürerse → bayi ya da Arçelik yetkili servisi.

## Arçelik'in dört maddesi

| Arçelik'in olası nedeni | Kılavuzun önerisi |
|---|---|
| Filtre kirli olabilir | Filtrenin kirli olup olmadığını kontrol edin |
| Uygun sıcaklık seçilmemiş olabilir | Sıcaklık ayarının doğru yapılıp yapılmadığını kontrol edin |
| Klimayı ilk çalıştırdığınızda oda çok sıcak olabilir | Soğutma için biraz bekleyin |
| Ünite dışarıdan hava alamıyor olabilir | Hava giriş ve çıkış pencerelerinin önünde engel var mı kontrol edin |

Aynı bölüm iki durumu arıza saymıyor: klima tekrar çalıştırıldığında korunma amacıyla **3 dakika kadar** çalışmaz; ortam çok nemliyse klimanın **sis üflemesi** buğulanmadır.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada soğutma modunun seçili olduğunu ve sıcaklık ayarının doğru yapıldığını kontrol et. Arçelik kılavuzu klimanın ihtiyacından daha düşük değerlere ayarlanmasının konfor etkisini azalttığını, ihtiyaca göre uygun sıcaklıkta kullanılmasını öneriyor.

**2. Enerji tasarruflu soğutma.** Ekranda enerji tasarruflu soğutmanın $ simgesi varsa aynı tuşa yeniden basarak işlevi kapat. Kılavuza göre bu işlev açıkken ayarlanan sıcaklık kademeli olarak artırılır ve en son 26°C'ye ayarlanır; bazı ürünlerde bu işlev bulunmayabilir.

**3. İlk çalıştırma.** Klimayı yeni çalıştırdıysan ve oda çok sıcaksa soğutma için biraz bekle. Kapatıp hemen açtıysan Arçelik'in 3 dakikalık koruma süresini de hesaba kat.

**4. Güneş ve kapı-pencere.** Güneşlik ve perdeleri kapat, kapı ve pencereleri kapalı tut. Arçelik kılavuzu klima çalışırken güneş ışınlarının doğrudan içeri girmesinin engellenmesini istiyor.

**5. Hava yolu.** Ünitenin hava giriş ve çıkış pencerelerinin önünde bir engel olup olmadığını kontrol et. Kılavuzun sözüyle ünite dışarıdan hava alamıyor olabilir. Dış üniteye yalnız güvenle erişebildiğin kadar bak; Arçelik çocukların dış üniteye tırmanmamasını ve darbe yapmamasını da ayrıca hatırlatıyor.

**6. Önce elektrik.** Ürüne gelen elektriği kes. Arçelik'in filtre temizliği tarifi bu adımla başlıyor.

**7. Filtreyi temizle.** Ön paneli aç, hava filtresini alt kısmından çekerek çıkar, vakumla ya da ılık suyla temizle, gölgede kurutup tak. Kılavuz ön panelin sağ ve sol alt köşe noktalarından ve ortadan kendine doğru çekilerek açılmasını, çok kirli filtrenin deterjanlı ılık suda yıkanmasını istiyor. Filtreyi çıkarırken metal parçalara dokunma; uzanmak için sağlam bir tabure ya da merdiven kullan. Klimayı hava filtresiz çalıştırma. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur. Kılavuz çalışmayan ürünü kendin onarmayı asla denememeni istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Sıcaklık, enerji tasarruflu soğutma, ilk çalıştırma beklemesi, güneş-kapı-pencere, hava yolu, hava filtresi | Senin, bu rehberdeki adımlar |
| Eşanjör, ısı eşanjör bobinleri ve panel deliklerinin temizliği | Arçelik'in bakım tablosuna göre yetkili servise danış |
| Hasar görmüş hava filtresi | Yetkili servisten yenisi |
| Bu kontrollerden sonra hâlâ etkili soğutmuyor | Bayi ya da Arçelik yetkili servisi |
| Üründen garip ses, duman ve koku | Ürünü sigortadan kapat, yetkili servisi ara |

⛔ Klimayı suyla yıkama, iç ünitenin içine ve gaz hattına dokunma. Arçelik kılavuzu klimanın suyla yıkanmamasını istiyor; elektrik çarpma tehlikesi var.

Ekranda CH ile başlayan bir kod görüyorsan [Arçelik klima hata kodları](/blog/arcelik-klima-hata-kodlari/) yazısına bak. Markadan bağımsız sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısını okuyabilirsin.

---

**Kaynak künyesi.** Çözüm önerileri, enerji tasarruflu soğutma, filtre temizliği ve bakım tablosu Arçelik'in download.arcelik.com.tr'deki Türkçe kullanma kılavuzlarından (Eco Ionizer Inverter 182410 A / 232410 A; çözüm önerileri aynı biçimde Arçelik'in 2018 tarihli klima kılavuzunda da var) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
