---
title: "Carrier klima çalışmıyor: evde kontrol"
description: "Carrier split klima açılmıyorsa Alarko Carrier kılavuzunun çözümleri: elektrik ve fiş, tuş kilidi, pil ve menzil, 3 dakika, zamanlayıcı, güç döngüsü."
slug: "carrier-klima-calismiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı alarko-carrier.com.tr (Carrier markasının Türkiye'deki üretici/ortak şirketi Alarko Carrier'ın kendi alan adı; adres yalnız yer bulmak için web aramasından).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası (CK'de basılı "Sayfa N" ile aynı).
#  CK) "CARRIER SPLIT KLİMA KULLANIM KILAVUZU QHA009DS, QHA012DS, QHA018DS, QHA024DS" (XPower Fresh), 17 s., md5 4972ac8cac45c5428a453789de2a5a51
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kk.pdf
#      s.15 "Cihaz çalışmıyor" Muhtemel Nedenleri | Çözüm → "Güç kesintisi | Gücün yeniden sağlanmasını bekleyin." / "Güç bağlantısı kesilmiştir. | Gücü tekrar sağlayın." / "Sigorta yanmıştır. | Sigortayı yenileyin." / "Uzaktan kumanda pilleri tükenmiştir. | Pilleri yenileyin." / "Cihazın 3 dakikalık koruması aktif hale gelmiştir. | Cihazı yeniden başlattıktan sonra üç dakika bekleyin." / "Zamanlayıcı aktifleştirilmiştir. | Zamanlayıcıyı kapatın."
#      s.15 "Gösterge lambaları yanmaya devam ediyor. İç ünitenin gösterge ekranında hata kodu görünüyor: • E0, E1, E2… • P1, P2, P3… • F1, F2, F3…" → "Cihaz çalışmayı sonlandırabilir veya güvenli şekilde çalışmaya devam edebilir. Eğer gösterge lambaları yanmaya devam ederse veya hata kodları oluşursa, yaklaşık 10 dakika bekleyin. Problem kendinden çözülebilir. Eğer çözülmezse, güç bağlantısını kesin ve sonra yeniden bağlayın. Cihazı açın. Eğer problem devam ederse, güç bağlantısını kesin ve en yakındaki müşteri hizmet merkezinizi arayın." · "NOT: Eğer yukarıdaki kontrolleri ve teşhisleri gerçekleştirdikten sonra problem devam ederse, hemen cihazı kapatın ve yetkili hizmet merkeziyle temasa geçin."
#      s.15 "Cihaz sık açılıp kapanıyor." → soğutucu fazla/az, sıkıştırılamayan gaz veya rutubet, "Kompresör kırılmıştır. | Kompresörü yenileyin.", "Voltaj çok yüksek veya çok düşüktür. | Voltajı düzenlemek için bir manostat yerleştirin."
#      s.13 "Çalışma değişken veya cihaz yanıt vermiyorsa | Cep telefon kulelerinden veya baz istasyonlarından olabilir. Bu durumda şunları deneyin: • Güç bağlantısını kesin ve sonra yeniden bağlayın. • Tekrar çalıştırmak için uzaktan kumandadaki Açma/Kapama düğmesine basın." / "NOT: Eğer problem devam ederse, yerel bir bayiyle veya en yakın müşteri hizmet merkezinizle temasa geçin. Onlara cihazınızın işlev bozukluğunu detaylı izah edip model numaranızı verin."
#      s.12 "Açma/Kapama düğmesi basılıyken ünite çalışmıyorsa | Ünitenin 3 dakikalık koruma özelliği vardır ve bu cihazın fazla zorlanmasını engeller. Cihaz kapatıldıktan sonra üç dakika içinde yeniden çalışmaya başlayamaz." · GÜVENLİK TEDBİRLERİ: "Eğer aşağıda durumların herhangi biri oluşursa, cihazınızı hemen kapatın! • Güç kablosu hasarlıysa veya anormal şekilde ısınmışsa • Yanık kokusu alıyorsanız • Cihaz anormal olan yüksek sesler çıkartıyorsa • Güç sigortası patlarsa veya devre kesici sık olarak hata verirse • Su veya diğer nesneler ünite içine veya dışına düşerse BUNLARI KENDİNİZ YAPMAYA KALKMAYIN! HEMEN YETKİLİ BİR HİZMET SAĞLAYICISI İLE TEMASA GEÇİN!"
#      s.9 "Manuel Çalıştırma" DİKKAT "Manuel düğme sadece test amaçları ve acil durumlar içindir. Lütfen uzaktan kumanda kaybolmadan ve gerekli olmadan bu fonksiyonu kullanmayın." / "1. Cihazın içinin ön panelini açın. 2. MANUEL KONTROL düğmesini ünitenin sağ tarafında konumlandırılmıştır. 3. Otomatik modun aktifleşmesi için MANUEL KONTROL düğmesine bir kez basın. 4. Soğutma modunun aktifleşmesi için MANUEL KONTROL düğmesine yine basın. 5. Cihazı kapatmak için MANUEL KONTROL düğmesine üçüncü kez basın."
#      s.7 "Otomatik yeniden başlatma(bazı cihazlar) Eğer cihaz gücü kesilirse, güç yeniden geldiğinde otomatik olarak önceki ayarlara göre yeninden çalışmaya başlayacaktır."
#      s.5 gösterge penceresi: "“Timer” zamanlayıcı ayarlandığında"
#      s.8 "Klima aşağıda belirtilen ısı aralıkları dışında kullanılırsa, belli güvenlik koruma özellikleri aktifleşecektir ve cihazı etkisiz hale getirecektir."
#  CR) "UZAKTAN KUMANDA KULLANIM KILAVUZU" (Carrier XPower Fresh kumandası), 12 s., md5 b9bd8c2723f9e92eb0f12719248e0a83
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kumanda-kk.pdf
#      s.2 "Uzaktan kumanda iki alkali pil (1,5 Volt) kullanır." / "Eski piller ile yeni pilleri veya farklı tiplerde pilleri birlikte kullanmayın, aksi takdirde uzaktan kumanda arızalanabilir." / "Normal kullanımda ortalama pil ömrü yaklaşık 6 aydır Eğer iç üniteden bip sesi gelmiyorsa ya da uzaktan kumanda üzerindeki göstergesi yanmıyorsa pilleri değiştirin." / "Uzaktan kumandanın maksimum çalışma mesafesi yaklaşık 8 metredir." / "... uzaktan kumandanın ileticisinin iç cihazın alıcısına doğru tutulması gereklidir. Sesli bir onaylama mesajı (bip) sinyalin alındığını gösterecektir." / "Perdeler, kapılar veya uzaktan kumanda ile iç cihaz arasında bulunabilecek başka eşyaların ... engelleyebileceği için, arada bu tür engeller bulunmaması gereklidir." / "... iç ünitenin alıcısının doğrudan güneş ışınına maruz kalmaması gereklidir, aksi takdirde klima düzgün çalışmayabilir. Doğrudan güneş ışığını önlemek üzere perdeleri kapatın." / "Eğer diğer elektrikli cihazlar uzaktan kumandayı olumsuz etkilerse, bu cihazları uzaklaştırın."
#      s.6 "DİKKAT Çalıştırmadan önce, cihazın fişinin takıldığından ve enerji olduğundan emin olun."
#      s.7 "Her iki fonksiyonu da zaman ayarını 0.0h değerine getirerek iptal edebilirsiniz."
#      s.10 "Kilit modu 1 sırasında, kilit açmak için bu iki tuşa birlikte yeniden basılmadığı sürece hiçbir tuş çalışmayacaktır." / "Kilit modu 2 için ZAMANLAYICI ile X-ECO tuşlarına aynı anda 2 saniyeden uzun süreyle basın. Kilit modu 2 sırasında, kilit açmak için bu iki tuşa birlikte yeniden basılmadığı sürece, AÇMA/KAPATMA, AÇMA ZAMANLAYICISI ve KAPATMA ZAMANLAYICISI dışında hiçbir tuş çalışmayacaktır." / "Kilit sembolü gösterilir"
#      s.9 "LED ... İç ünitenin göstergesini açmak ve kapatmak için bu tuşa basın."
# YAKIN KOPYA: Carrier'ın yayında klima sayfası yok. CK tablosu yayındaki airfel-klima-calismiyor'un kaynağıyla (Airfel AF1) aynı OEM metnini taşıyor (Airfel ayrı grup ama metin benzer) → bu sayfa kumanda kilidi, manuel kontrol düğmesi, alkali pil/6 ay ve elektrikli cihaz girişimi satırlarını öne alıyor; ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: sigorta yenileme (kılavuz "Sigortayı yenileyin" diyor; #31 → yetkili servis) · manostat (yalnız kılavuzun önerisi olarak) · soğutucu ve kompresör (servis) · hata kodlarının tek tek anlamı (kılavuzda yok) · Kilit modu 1'in tuş çifti (metin katmanında simge, okunmuyor) · fiyat.
# Alıntı denetim tablosu: carrier-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet 1,5 V alkali pil"]
steps:
  - "Evde elektrik kesintisi varsa gücün yeniden gelmesini bekle."
  - "Klimanın fişinin takılı ve prizde enerji olduğundan emin ol."
  - "Kumanda ekranında kilit sembolü varsa kılavuzdaki iki tuşa birlikte 2 saniyeden uzun basarak kilidi aç."
  - "İç üniteden bip sesi gelmiyor ya da kumanda göstergesi yanmıyorsa iki alkali pili birlikte yenisiyle değiştir."
  - "Kumandayı en fazla 8 metreden, arada perde ya da eşya olmadan iç ünitenin alıcısına doğru tut."
  - "Klimayı kapatıp yeniden açtıysan 3 dakika bekle."
  - "Açma ya da kapatma zamanlayıcısı kuruluysa süreyi 0.0h'ye getirerek iptal et."
  - "Ünite yanıt vermiyorsa güç bağlantısını kesip yeniden bağla ve kumandadaki Açma/Kapama düğmesine bas."
faq:
  - q: "Carrier klima neden hiç açılmaz?"
    a: "Alarko Carrier kılavuzunun 'Cihaz çalışmıyor' satırı altı neden sayıyor: güç kesintisi, güç bağlantısının kesilmesi, yanmış sigorta, tükenmiş kumanda pilleri, devredeki 3 dakikalık koruma ve etkin zamanlayıcı. Sigorta dışındakileri evde kontrol edebilirsin; sigorta için yetkili servise başvur."
  - q: "Kumandanın hiçbir tuşu çalışmıyor ama ekranı açık. Neden?"
    a: "Kumanda kilitlenmiş olabilir. Carrier kumanda kılavuzuna göre kilit modunda ekranda kilit sembolü görünür ve iki tuşa birlikte yeniden basılmadıkça tuşlar çalışmaz. Kilit modu 2'de yalnız açma/kapatma ve zamanlayıcı tuşları çalışır; bu kilit ZAMANLAYICI ve X-ECO tuşlarına birlikte 2 saniyeden uzun basılarak açılıp kapanır."
  - q: "Kumandam kayboldu. Klimayı çalıştırabilir miyim?"
    a: "Evet, kılavuz acil durumlar için iç ünitenin sağ tarafındaki MANUEL KONTROL düğmesini gösteriyor; düğmeye ulaşmak için iç ünitenin ön panelini açarsın. Bir kez basınca otomatik mod, ikinci basışta soğutma çalışır, üçüncü basış cihazı kapatır. Kılavuz bu düğmenin yalnız test ve acil durum için kullanılmasını istiyor."
  - q: "İç ünite ekranında E, P ya da F ile başlayan bir kod var. Ne yapmalıyım?"
    a: "Kılavuz önce yaklaşık 10 dakika beklemeni söylüyor; sorun kendiliğinden çözülebilir. Çözülmezse güç bağlantısını kesip yeniden bağla ve cihazı aç. Kod yine görünürse gücü kes ve yetkili servisi ara."
  - q: "Yeni pil taktım, kumanda yine ara ara çalışmıyor. Neden?"
    a: "Kumanda kılavuzu eski ve yeni pilin ya da farklı tip pillerin birlikte kullanılmamasını istiyor. Alıcıya doğrudan güneş geliyorsa perdeyi kapat; yakındaki başka elektrikli cihazlar kumandayı etkiliyorsa onları uzaklaştır."
images:
  coverAlt: "Gündüz bir çalışma odasında masada ekranı yanan beyaz klima kumandası, yanında iki alkali pil ve arkada duvarda kapalı split klima"
---

Klimaya kumandayla komut veriyorsun ama iç ünite sessiz. Alarko Carrier'ın Carrier split klima kullanım kılavuzu bu durumu "Problemlerin Çözümü" bölümünde **"Cihaz çalışmıyor"** satırıyla veriyor ve her nedenin yanına bir çözüm yazıyor: **"Gücün yeniden sağlanmasını bekleyin."**, **"Pilleri yenileyin."**, **"Cihazı yeniden başlattıktan sonra üç dakika bekleyin."**, **"Zamanlayıcıyı kapatın."** Kumandanın ayrı kılavuzu ise bu listeye iki önemli not ekliyor: kilitli bir kumandanın tuşları çalışmaz ve kumandanın menzili yaklaşık 8 metredir. Aşağıdaki sıra bu iki kılavuzdan.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik ve fiş. Kumandada kilit sembolü varsa kilidi aç. Bip sesi yoksa iki alkali pili birlikte değiştir; 8 metreden, engelsiz kullan. Kapatıp açtıysan 3 dakika. Zamanlayıcıyı 0.0h'ye al. Yanıt yoksa gücü kesip bağla. Sürerse → yetkili servis.

## Carrier'ın "Cihaz çalışmıyor" satırı

| Muhtemel neden | Kılavuzdaki çözüm | Kimin işi |
|---|---|---|
| Güç kesintisi | Gücün yeniden gelmesini bekle | Senin |
| Güç bağlantısı kesilmiş | Gücü tekrar sağla | Senin |
| Kumanda pilleri tükenmiş | Pilleri yenile | Senin |
| 3 dakikalık koruma devrede | Yeniden başlattıktan sonra üç dakika bekle | Senin |
| Zamanlayıcı etkin | Zamanlayıcıyı kapat | Senin |
| Sigorta yanmış | Sigortayı yenileyin | Kendin yapma, yetkili servis |

Kılavuz ayrıca klimanın belirtilen sıcaklık aralıklarının dışında kullanıldığında güvenlik koruma özelliklerinin devreye girip cihazı etkisiz hale getireceğini yazıyor.

## Adım adım: evde denenecekler

**1. Elektrik kesintisi.** Evde elektrik kesintisi varsa gücün yeniden gelmesini bekle. Bazı Carrier cihazlarında otomatik yeniden başlatma var; güç geri geldiğinde cihaz önceki ayarlarla kendiliğinden çalışır.

**2. Fiş.** Klimanın fişinin takılı ve prizde enerji olduğundan emin ol. Kumanda kılavuzu her çalıştırmadan önce bu kontrolü istiyor.

**3. Tuş kilidi.** Kumanda ekranında kilit sembolü varsa kılavuzdaki iki tuşa birlikte 2 saniyeden uzun basarak kilidi aç. Kilit modu 1'de hiçbir tuş çalışmaz; kilit modu 2'de yalnız açma/kapatma ve zamanlayıcı tuşları çalışır. Kilit modu 2, ZAMANLAYICI ve X-ECO tuşlarına birlikte basılarak açılıp kapanır.

**4. Piller.** İç üniteden bip sesi gelmiyor ya da kumanda göstergesi yanmıyorsa iki alkali pili birlikte yenisiyle değiştir. Kumanda 1,5 voltluk iki alkali pil kullanır ve kılavuz normal kullanımda pil ömrünü yaklaşık 6 ay olarak veriyor. Eski ve yeni pili ya da farklı tip pilleri birlikte kullanma.

**5. Menzil ve engel.** Kumandayı en fazla 8 metreden, arada perde ya da eşya olmadan iç ünitenin alıcısına doğru tut. Sinyal alınınca klima bip sesiyle onaylar. Alıcıya doğrudan güneş geliyorsa perdeyi kapat; başka elektrikli cihazlar kumandayı etkiliyorsa onları uzaklaştır.

**6. Üç dakika.** Klimayı kapatıp yeniden açtıysan 3 dakika bekle. Carrier bunu cihazın fazla zorlanmasını önleyen bir koruma olarak anlatıyor ve arıza saymıyor.

**7. Zamanlayıcı.** Açma ya da kapatma zamanlayıcısı kuruluysa süreyi 0.0h'ye getirerek iptal et. İç ünite ekranında zamanlayıcı göstergesi ("Timer") yanıyorsa zamanlayıcı kuruludur.

**8. Güç döngüsü.** Ünite yanıt vermiyorsa güç bağlantısını kesip yeniden bağla ve kumandadaki Açma/Kapama düğmesine bas. Kılavuz cihazın değişken çalışmasını ya da yanıt vermemesini cep telefonu kuleleri ve baz istasyonlarıyla ilişkilendiriyor ve bu iki adımı öneriyor.

## Ekranda kod ya da yanan lambalar

İç ünite ekranında E0, E1, P1, F1 gibi bir kod görünüyor ya da gösterge lambaları yanmaya devam ediyorsa kılavuzun sırası şu: yaklaşık 10 dakika bekle, sorun kendiliğinden çözülebilir. Çözülmezse güç bağlantısını kesip yeniden bağla ve cihazı aç. Kod sürerse gücü kes ve yetkili servisi ara. Kodların tek tek anlamı bu kılavuzda yok; genel liste için [klima arıza kodları](/blog/klima-ariza-kodlari/) yazısına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Elektrik, fiş, kilit, pil, menzil, 3 dakika, zamanlayıcı, güç döngüsü | Senin, bu rehberdeki adımlar |
| Sigorta yanmış | Kendin yenileme, yetkili servis |
| Cihaz sık açılıp kapanıyor (soğutucu, kompresör, voltaj) | Yetkili servis |
| Güç döngüsünden sonra da süren hata kodu | Gücü kes, yetkili servis |
| Hasarlı ya da ısınan güç kablosu, yanık kokusu, anormal yüksek ses, sık atan sigorta, üniteye su ya da cisim kaçması | Cihazı hemen kapat, kendin uğraşma, yetkili servis |

⛔ Kılavuzun güvenlik listesi açık: bu durumlarda cihazı hemen kapat ve düzeltmeye kalkma. Servisi ararken model numaranı ve sorunu ayrıntılı anlat.

Klima açılıyor ama serinletmiyorsa [Carrier klima soğutmuyor](/blog/carrier-klima-sogutmuyor/), kışın ısıtmıyorsa [Carrier klima ısıtmıyor](/blog/carrier-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında.

---

**Kaynak künyesi.** Sorun giderme tabloları, güvenlik tedbirleri, manuel çalıştırma ve otomatik yeniden başlatma Alarko Carrier'ın alarko-carrier.com.tr'deki "Carrier Split Klima Kullanım Kılavuzu"ndan (QHA009DS-QHA024DS), pil, menzil, kilit ve zamanlayıcı bilgileri aynı serinin "Uzaktan Kumanda Kullanım Kılavuzu"ndan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
