---
title: "Arçelik buzdolabı soğutmuyor"
description: "Arçelik buzdolabı soğutmuyorsa Arçelik'in sorun giderme sırası: fiş ve sigorta, 6 dakika bekleme, sıcaklık ayarı, kapı, sıcak yemek ve conta."
slug: "arcelik-buzdolabi-sogutmuyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, hepsi HTTP 200.
# Web araması YALNIZ belgenin adresini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-buzdolabi-bulasik-sprint/ · okuma pdftotext, sayfa = PDF sayfası.
#  (A) 5845 NFEY / 8541 NFEY / 5850 NFY / 5847 NFEY ... Buzdolabı Kullanma Kılavuzu
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7289120181_tr_TR20190724-090854-735.pdf  44 s.  md5 15ab677d45027c5992101461a78df4fa
#  (B) 570505 EB / 570505 MB / 570430 MI / 570430 MB Buzdolabı Kullanma Kılavuzu
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201803081621592_User%20Manual%20-%20Filetr_TR.pdf  34 s.  md5 dbf5bff00aa31600445189281816a3ac
#  (C) 5223NHEY / 5233NHEY / 5237 NHIY ... Buzdolabı Kullanma Kılavuzu
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180612084684_User%20Manual%20-%20File%20(Long)tr_TR.pdf  34 s.  md5 f58aa953db4718baff35819ea1ba743a
# Sorun giderme (A s.39-41; aynı satırlar B s.30-31, C s.30-31):
#   "Soğutucu ya da dondurucudaki sıcaklık çok yüksek." → sıcaklık ayarı çok yüksek: "Soğutucu ya da dondurucu bölme sıcaklığını değiştirerek ilgili bölmelerin sıcaklığı yeterli seviyeye gelene kadar bekleyin."
#     · kapılar sık açılmış → "Kapıları çok sık açmayın." · kapı aralık → "Kapıyı tamamen kapayın." · fiş yeni takılmış / yeni yiyecek → "Bu normaldir..." · sıcak yemek → "Ürüne sıcak yemek koymayın."
#   "Buzdolabı çalışmıyor." → fiş prize tam oturmamış · sigorta atmış (A s.39)
#   "Kompresör çalışmıyor" → termik: "Yaklaşık 6 dakika sonra ürün çalışmaya başlayacaktır. Bu süre sonunda ürün çalışmaya başlamazsa servis çağırın." · buz çözme devresi normal · elektrik kesilmiş (A s.39)
#   "Buzdolabı çok sık ya da çok uzun süre çalışıyor." → conta: "Contayı temizleyin ya da değiştirin." (A s.40)
#   UYARI: "...sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı denemeyin." (A s.41)
#   Hata durumu göstergesi: "Buzdolabınız yeterli soğutma yapmıyorsa ya da bir sensör arızası meydana gelirse..." E + 1,2,3 → servis personeline bilgi (A s.16)
# BİLEREK YAZILMAYANLAR: gaz/kompresör/fan/sensör teşhisi (belgede yok) · conta değişimi kullanıcı adımı olarak (parça değişimi → yetkili servis, #31) ·
#   kurulum mesafeleri (sorun giderme tablosunda bu belirti için yok) · fiyat/süre/parça (#46).
# FİŞ KURALI İSTİSNASI: ilk adım "fişi çek" değil; çözüm buzdolabının çalışmasını gerektiriyor (vestel-buzdolabi-sogutmuyor emsali).
# Alıntı denetim tablosu: arcelik-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika (bekleme süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Yumuşak bez"]
steps:
  - "Buzdolabı hiç çalışmıyorsa fişin prize tam oturduğunu ve sigortanın atmadığını kontrol et."
  - "Elektrik kesintisinden ya da fişi çıkarıp taktıktan sonra yaklaşık 6 dakika bekle."
  - "Soğutucu ya da dondurucu bölmenin sıcaklık ayarını değiştir ve bölmeler yeterli soğukluğa gelene kadar bekle."
  - "Kapının aralık kalmadığını kontrol et ve tamamen kapat."
  - "Kapıları çok sık açma."
  - "Buzdolabına sıcak yemek koyma."
  - "Kapı contası kirliyse ılık su ve yumuşak bezle temizle; eskimiş ya da kırıksa yetkili servise bildir."
faq:
  - q: "Arçelik buzdolabım yeterince soğutmuyor, ilk neye bakmalıyım?"
    a: "Arçelik kılavuzlarındaki sorun giderme listesinde bu durumun satırı 'Soğutucu ya da dondurucudaki sıcaklık çok yüksek.' Arçelik bu satırda beş neden sayıyor: soğutucu bölme sıcaklığının çok yüksek bir değere ayarlanmış olması, kapıların sık açılması ya da uzun süre açık kalması, kapının aralık kalması, fişin yeni takılmış ya da yeni yiyecek konmuş olması ve yakın zamanda fazla miktarda sıcak yemek konması."
  - q: "Elektrik gidip geldi, buzdolabı çalışmıyor. Bozuldu mu?"
    a: "Arçelik'e göre ani elektrik kesilmesinde ya da fişin çıkarılıp takılmasında, soğutma sistemindeki gazın basıncı henüz dengelenmediği için kompresör koruyucu termiği atar ve ürün yaklaşık 6 dakika sonra çalışmaya başlar. Kılavuzun ifadesiyle, bu süre sonunda ürün çalışmaya başlamazsa servis çağırılır."
  - q: "Soğutucu ayarını değiştirdim ama dondurucu da etkilendi, neden?"
    a: "Arçelik kılavuzu bunu açıkça yazıyor: soğutucu bölme sıcaklık ayarının dondurucu bölme sıcaklığı üzerinde etkisi vardır. Bu yüzden Arçelik'in önerisi, soğutucu ya da dondurucu bölme sıcaklığını değiştirip ilgili bölmelerin sıcaklığı yeterli seviyeye gelene kadar beklemek."
  - q: "Panelde E harfi ve bir rakam çıktı, bu yazı mı geçerli?"
    a: "Hayır, o bir hata göstergesi. Arçelik'in 5845 NFEY kılavuzuna göre buzdolabı yeterli soğutma yapmıyorsa ya da bir sensör arızası meydana gelirse hata durumu göstergesi devreye girer; dondurucu göstergesinde 'E', soğutucu göstergesinde 1, 2, 3 gibi rakamlar görünür. Kılavuz bu rakamların servis personeline hata hakkında bilgi verdiğini yazıyor."
images:
  coverAlt: "Mutfakta kapısı açık duran no-frost buzdolabının önünde, soğutucu bölmenin sıcaklık panelini kontrol eden bir el"
---

Buzdolabının içi eskisi kadar soğuk değil ya da dondurucu yumuşamaya başladı. Arçelik'in buzdolabı kullanma kılavuzlarındaki sorun giderme listesinde "soğutmuyor" diye bir başlık yok; bu durumun karşılığı şu satır: **"Soğutucu ya da dondurucudaki sıcaklık çok yüksek."** Arçelik'in bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **sıcaklık ayarı, kapı, yeni konan yiyecek ve sıcak yemek.** Buzdolabı hiç çalışmıyorsa aynı listenin "Buzdolabı çalışmıyor" ve "Kompresör çalışmıyor" satırlarına bakmak gerekiyor. Bu yazıda üç satırı Arçelik'in kendi sırasıyla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş ve sigortayı kontrol et → elektrik gidip geldiyse 6 dakika bekle → sıcaklık ayarını değiştirip bölmelerin soğumasını bekle → kapıyı tamamen kapat, sık açma → sıcak yemek koyma → contayı temizle. Panelde "E" ve rakam görüyorsan bu bir hata göstergesidir, servis işidir.

## Adım adım: evde denenecekler

**1. Fişi ve sigortayı kontrol et.** Buzdolabı hiç çalışmıyorsa Arçelik'in "Buzdolabı çalışmıyor" satırındaki iki neden şunlar: **fiş prize tam oturmamıştır** ve **ürünün bağlandığı prizin sigortası ya da ana sigorta atmıştır.** Fişi prize tam oturacak şekilde tak, sigortayı kontrol et. Arçelik'in listesine göre elektrik kesilmişse elektrik geldiğinde ürün normal şekilde çalışmaya devam eder.

**2. Elektrik gidip geldiyse 6 dakika bekle.** Arçelik'in "Kompresör çalışmıyor" satırı bu durumu açıklıyor: ani elektrik kesilmesinde ya da fişin çıkarılıp takılmasında soğutma sistemindeki gazın basıncı henüz dengelenmediği için **kompresör koruyucu termiği atar.** Kılavuza göre ürün **yaklaşık 6 dakika sonra** çalışmaya başlar. Aynı satırdaki bir not daha var: tam otomatik buz çözme yapan bir üründe **buz çözme devresi** periyodik olarak gerçekleşir ve bu normaldir.

**3. Sıcaklık ayarını değiştir ve bekle.** "Sıcaklık çok yüksek" satırındaki ilk neden: **soğutucu bölme sıcaklığı çok yüksek bir değere ayarlanmış olabilir.** Arçelik burada önemli bir ayrıntı veriyor: **soğutucu bölme sıcaklık ayarının dondurucu bölme sıcaklığı üzerinde etkisi vardır.** Çözüm, soğutucu ya da dondurucu bölme sıcaklığını değiştirip ilgili bölmelerin sıcaklığı **yeterli seviyeye gelene kadar beklemek.** Fiş yeni takıldıysa ya da içeri yeni yiyecek koyduysan Arçelik'e göre ürünün ayarlanan sıcaklığa ulaşması normalden daha uzun zaman alır; bu da normaldir.

**4. Kapıyı tamamen kapat.** Aynı satırdaki neden: **kapı aralık olabilir.** Arçelik'in çözümü tek cümle: kapıyı tamamen kapayın. Arçelik'in "Kapı kapanmıyor" satırındaki ilk neden, kapının kapanmasını engelleyen **yiyecek paketleri**; onların yerini değiştir. Aynı satıra göre ürün zeminde tamamen dik durmuyorsa ayaklarını ayarlayarak dengelenir; kılavuzun kurulum bölümü bunu ön ayakları döndürerek yapmayı ve bu sırada dolabı hafifçe kaldırması için birinden yardım almayı anlatıyor.

**5. Kapıları çok sık açma.** Tablodaki neden: **kapılar sık açılmış ya da uzun süre açık kalmıştır.** Arçelik'in "çok uzun çalışıyor" satırı bunun nedenini de yazıyor: içeri giren sıcak hava ürünün daha uzun çalışmasına neden olur.

**6. Sıcak yemek koyma.** Satırdaki son neden: **ürüne yakın zamanda fazla miktarlarda sıcak yemek konmuş olabilir.** Arçelik'in çözümü açık: ürüne sıcak yemek koymayın.

**7. Kapı contasına bak.** Arçelik bu nedeni "Buzdolabı çok sık ya da çok uzun süre çalışıyor" satırında sayıyor: soğutucu ya da dondurucu **kapı contası kirlenmiş, eskimiş, kırılmış ya da tam oturmamış** olabilir. Kılavuza göre hasarlı ya da kopuk conta, ürünün mevcut sıcaklığı korumak için daha uzun süre çalışmasına neden olur. Kirliyse contayı ılık su ve yumuşak bir bezle sil. Eskimiş ya da kırıksa değişim parça işidir; yetkili servise bırak.

## Arıza olmayan durumlar

Arçelik'in listesinde soğutmayla karıştırılabilecek ama arıza olmayan birkaç satır var:

- **Yüzeyde sıcaklık:** ürün çalışırken iki kapı arasında, yan panellerde ve arka ızgara bölgesinde yüksek sıcaklık görülebilir. Kılavuza göre bu normaldir ve servis ihtiyacı yoktur.
- **Uzun çalışma:** yeni ürün eskisinden daha genişse daha uzun süre çalışır; oda sıcaklığı yüksekse daha uzun çalışması normaldir.
- **Dondurucu kapısı açılınca fanın dönmesi:** Arçelik'e göre dondurucu kapısı açıldığında fan çalışmaya devam edebilir.

Markadan bağımsız anlatım için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına, conta kontrolü için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) sayfasına bakabilirsin. Paneldeki göstergeler için [Arçelik buzdolabı sembolleri ve anlamları](/blog/arcelik-buzdolabi-sembolleri-ve-anlamlari/), kodlar için [Arçelik buzdolabı hata kodları](/blog/arcelik-buzdolabi-hata-kodlari/) sayfası var.

## Ne zaman servis

İki durumda Arçelik'in kılavuzu doğrudan servisi gösteriyor:

- Elektrik gidip geldikten sonra **yaklaşık 6 dakika geçtiği hâlde ürün çalışmaya başlamadıysa** Arçelik'in ifadesi: servis çağırın.
- Panelde **hata durumu göstergesi** yanıyorsa. 5845 NFEY kılavuzuna göre bu gösterge buzdolabı yeterli soğutma yapmıyorsa ya da bir sensör arızası meydana gelirse devreye girer; dondurucu göstergesinde **"E"**, soğutucu göstergesinde **1, 2, 3 gibi rakamlar** görünür ve bu rakamlar servis personeline hata hakkında bilgi verir.

Bunların dışında, yukarıdaki adımları uyguladığın hâlde sorun sürüyorsa Arçelik'in uyarısı şöyle: **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kapı, conta temizliği ve yerleştirme kullanıcıya; soğutma sistemi, kompresör ve conta değişimi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Buzdolabı hiç çalışmıyor mu, yoksa çalışıyor ama yeterince soğutmuyor mu?
2. Sorun soğutucuda mı, dondurucuda mı, ikisinde de mi?
3. Yakın zamanda elektrik kesintisi oldu mu, sıcak yemek ya da çok miktarda yeni yiyecek kondu mu?
4. Kapı tam kapanıyor mu, conta sağlam mı?
5. Panelde "E" harfi ve bir rakam var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
