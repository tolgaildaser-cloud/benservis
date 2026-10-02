---
title: "Uğur derin dondurucu ses yapıyor"
description: "Uğur derin dondurucu çok ses yapıyorsa Uğur'un tablosu: ayakları yere oturt, duvar ve eşyayla temasını kes, içerideki kapları ayır; uğultu ve tıklama normal."
slug: "ugur-derin-dondurucu-ses-yapiyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, ek-1051). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Uğur'un KENDİ alan adından (ugur.com.tr) indirildi,
#   hepsi HTTP 200, yönlendirme 0 (ürün sayfası bağlantısı ugur.tsoftstatic.com'u gösteriyor; kaynak olarak YALNIZ ugur.com.tr adresi kullanıldı).
#   Web araması KULLANILMADI. Sayfa = PDF sayfası.
#  D1) UED 200 G / 250 / 290 / 375 D/S R65 (sandık)  https://ugur.com.tr/Data/EditorFiles/docs/T1301_KK.pdf  28 s.  md5 46ff7502fb7a47b3da8943fd2057e59b
#  D2) UED 100 R65 (sandık)                         https://ugur.com.tr/Data/EditorFiles/docs/100992_KK.pdf  28 s.  md5 fad072c83b0e537447ba0b4cb4fc2d61
#  D3) UED 3060 DTK R65 (dikey)                     https://ugur.com.tr/Data/EditorFiles/docs/T1304_KK.pdf  32 s.  md5 38fbc147873c82b3f6a48f2865468ec3
# Tablo "Cihaz çok ses yapıyor." (D1 s.19 · D2 s.19 · D3 s.20): "Cihazın ayakları yere tam oturmamış." / "Cihazın oturduğu zeminin düz olduğundan emin olunuz.
#   Cihaz ayaklarını destekleyerek yere tam oturmasını sağlayınız." · "Cihaz duvara ya da başka bir nesneye temas ediyor." / "Cihazınızın titreşim yaptığı nesne ya
#   da duvar ile temasını kesiniz. Temas söz konusu olan nesne ya da duvar ile arasına 20 cm mesafe bırakınız." (D1: 20 cm · D2: 10 cm · D3: mesafe yazmıyor) ·
#   "Cihaz içindeki kaplar birbirine temas ediyor." / "Cihaz içindeki nesnelerin birbiriyle temasını kesiniz."
# "Cihaz Çalışma Sesleri" (D1 s.21 · D2 s.21 · D3 s.21): "Uğultu sesi — Soğutma sistemi çalışıyor." · "Şırıltı, hışırtı sesleri — Borulardan soğutma gazı geçiyor."
#   · "Tıklama — Kompresör devreye girip çıkıyor." · D3 ek: "Cihazın açılması sırasında tıklama — İç aydınlatma şalter açılıyor."
#   ÖNERİ: "Cihazınız standartlara uygun ses seviyesi şartlarını sağlamaktadır. Cihazınızı dinlenme alanlarında (yatak odası, oturma odası) kullandığınız takdirde
#   cihazınızın çalışma seslerinden rahatsız olabilirsiniz. Cihazı konumlandırırken bu hususu göz önünde bulundurunuz."
# İlk çalıştırma: D1 s.11 "Güç kablosu prize takıldığında kontrol panel üzerindeki ışık yanacak, hafif bir kompresör sesi duyulacaktır" · D3 s.11 "Cihazınız çalıştığında
#   hafif bir miktarda kompresör sesi duyulacaktır. Bu ses, soğutma sisteminin çalışmaya başladığını göstermektedir."
# Yerleşim: D1 s.8 / D2 s.8 "Cihaz için eğimsiz, düz ve sağlam bir zemin seçilmelidir."
# Güvenlik: Uğur belgelerinde "garip ses" satırı yok (grep "garip" = 0); "Ürün üzerinde bulunan hiçbir dış koruma kapağını sökmeyiniz." (D2 s.11)
# BİLEREK YAZILMAYANLAR: fan/kompresör arızası teşhisi, "takırtı = rulman" gibi belgesiz eşleştirme · ayak ayarı için alet (belge "destekleyerek" diyor, alet yok) ·
#   fiyat/süre (#46).
# Alıntı denetim tablosu: ugur-derin-dondurucu-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Sesi tanı: uğultu, şırıltı, hışırtı ve kısa tıklama Uğur'un tablosuna göre normal çalışma sesidir."
  - "Zeminin düz olduğundan emin ol ve cihazın ayaklarını destekleyerek yere tam oturt."
  - "Cihazın duvara ya da başka bir eşyaya değip değmediğine bak; temasını kes."
  - "Duvar ya da eşyayla arasına kılavuzundaki mesafeyi bırak (UED 200 G–375 D/S'de 20 cm, UED 100'de 10 cm)."
  - "İçerideki kapları ve poşetleri birbirine değmeyecek şekilde yerleştir."
  - "Cihaz yatak odası ya da oturma odasındaysa yerini bu sese göre yeniden düşün."
faq:
  - q: "Uğur derin dondurucudan gelen uğultu normal mi?"
    a: "Uğur'un kılavuzlarındaki 'Cihaz Çalışma Sesleri' tablosuna göre uğultu sesi soğutma sisteminin çalıştığını gösterir. Aynı tabloda şırıltı ve hışırtı sesleri borulardan soğutma gazının geçmesiyle, tıklama ise kompresörün devreye girip çıkmasıyla açıklanıyor. Kılavuz bu seslerin normal olabileceğini yazıyor."
  - q: "Kapağı açarken tık sesi geliyor, neden?"
    a: "Uğur UED 3060 DTK dikey modelin kılavuzuna göre cihazın açılması sırasında duyulan tıklama, iç aydınlatma şalterinin açılmasıdır."
  - q: "Yeni aldığım derin dondurucu ilk çalıştırınca ses yaptı, sorun mu?"
    a: "Uğur'un kılavuzlarına göre cihaz prize takıldığında hafif bir kompresör sesi duyulur; dikey model kılavuzu bu sesin soğutma sisteminin çalışmaya başladığını gösterdiğini yazıyor."
  - q: "Ses titreşim gibi, cihaz sallanıyor mu?"
    a: "Uğur'un arıza tablosunda 'Cihaz çok ses yapıyor' satırının ilk nedeni ayakların yere tam oturmaması: zeminin düz olduğundan emin olup ayakları destekleyerek yere tam oturtman isteniyor. Diğer iki neden cihazın duvara ya da bir eşyaya değmesi ve içerideki kapların birbirine değmesi."
images:
  coverAlt: "Duvardan bir karış uzağa çekilmiş beyaz bir sandık tipi derin dondurucu ve yanındaki eşyayla arasında açık bırakılmış boşluk"
---

Gece sessizlikte derin dondurucudan gelen ses dikkatini çekiyor: bazen uğultu, bazen tık, bazen titreşim. Uğur'un derin dondurucu kılavuzları bu konuyu iki tabloyla ele alıyor. Arıza tablosunda **"Cihaz çok ses yapıyor."** satırı üç nedene ayrılıyor; hemen ardından gelen **"Cihaz Çalışma Sesleri"** tablosu ise hangi seslerin normal olduğunu sayıyor. Kılavuzun cümlesi: **cihaz çalışırken birtakım sesler çıkartacaktır, bu sesler normal olabilir.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce sesi tanı (uğultu, şırıltı, tık normal) → zemin düz mü, ayaklar yere tam oturuyor mu → cihaz duvara ya da eşyaya değiyor mu, aradaki mesafe yeterli mi → içerideki kaplar birbirine değiyor mu → cihaz yatak odasındaysa yerini düşün.

## Adım adım: evde denenecekler

**1. Sesi tanı.** Uğur'un "Cihaz Çalışma Sesleri" tablosu üç sesi açıklıyor: **uğultu** → soğutma sistemi çalışıyor; **şırıltı, hışırtı** → borulardan soğutma gazı geçiyor; **tıklama** → kompresör devreye girip çıkıyor. Dikey UED 3060 DTK'de bir satır daha var: **kapı açılırken tıklama** → iç aydınlatma şalteri açılıyor. Duyduğun ses bunlardan biriyse kılavuza göre normal olabilir.

**2. Ayakları yere oturt.** Arıza tablosunun ilk nedeni **"Cihazın ayakları yere tam oturmamış."** Çözüm: **zeminin düz olduğundan emin ol** ve cihazın **ayaklarını destekleyerek yere tam oturmasını sağla.** Uğur kurulum bölümünde de cihaz için **eğimsiz, düz ve sağlam bir zemin** istiyor.

**3. Temasını kes.** İkinci neden: cihaz **duvara ya da başka bir nesneye temas ediyor.** Sandık kılavuzunun çözümü: cihazın **titreşim yaptığı nesne ya da duvar ile temasını kes.**

**4. Arada mesafe bırak.** Uğur temas kesildikten sonra bir mesafe de veriyor ve bu mesafe modele göre değişiyor: UED 200 G / 250 / 290 / 375 D/S sandık kılavuzunda nesne ya da duvarla arasına **20 cm**, UED 100 kılavuzunda **10 cm** bırakılması isteniyor. Kendi kılavuzundaki değeri esas al.

**5. İçerideki kapları ayır.** Üçüncü neden içeride: **cihaz içindeki kaplar birbirine temas ediyor.** Çözüm: **cihaz içindeki nesnelerin birbiriyle temasını kes.**

**6. Yerini düşün.** Uğur'un ses tablosunun altındaki öneri açık: cihaz **standartlara uygun ses seviyesi** şartlarını sağlıyor, ama **yatak odası, oturma odası** gibi dinlenme alanlarında kullanılırsa çalışma seslerinden rahatsız olabilirsin. Kılavuz cihazı konumlandırırken bunu göz önünde bulundurmanı istiyor.

## İlk çalıştırmada duyulan ses

Uğur'un kılavuzlarına göre cihaz prize takıldığında **hafif bir kompresör sesi** duyulur. Dikey UED 3060 DTK kılavuzu bunun anlamını da yazıyor: bu ses **soğutma sisteminin çalışmaya başladığını** gösterir.

Markadan bağımsız ses rehberi için [buzdolabı ses yapıyor](/blog/buzdolabi-ses-yapiyor/) yazısına bakabilirsin. Ses yapan cihaz aynı zamanda iyi dondurmuyorsa: [Uğur derin dondurucu dondurmuyor](/blog/ugur-derin-dondurucu-dondurmuyor/).

## Ne zaman servis

Ses yukarıdaki normal sesler tablosuna uymuyorsa ve ayak, temas, mesafe ve kap düzenini kontrol ettiğin hâlde sürüyorsa Uğur'un genel kuralı geçerli: öneriler sorunu çözmüyorsa **444 84 87** numaralı Çağrı Merkezi'ne ya da Uğur Yetkili Servisi'ne başvur. Kılavuzun hatırlatması: cihazın fişi takılıyken **hiçbir tamir/servis işlemi** yapılmaz; ürün üzerindeki dış koruma kapaklarını da sökme.

⛔ **Kendin-çöz sınırı burada biter.** Zemin, ayak, mesafe ve iç düzen kullanıcıya; kompresör, fan ve soğutma sistemi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ses ne tür: uğultu, tıklama, şırıltı, titreşim, vuruntu?
2. Ses sürekli mi, kompresör devreye girip çıkarken mi?
3. Cihaz düz zeminde mi, duvara ya da eşyaya değiyor mu?
4. İçerideki kaplar ayrıldığında ses azaldı mı?
5. Cihaz normal donduruyor mu?

Bu beşine cevabın varsa servise "ses yapıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
