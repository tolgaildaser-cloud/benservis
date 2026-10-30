---
title: "Buzdolabı buzluk soğutmuyor: üretici kılavuzlarına göre sıra"
description: "Buzluk dondurmuyor ama alt bölme soğuyor mu? Beko ve Bosch kılavuzlarındaki kontrol sırası: ayar, kapı, yükleme, hava yolu, buz çözme ve servis sınırı."
slug: "buzdolabi-buzluk-sogutmuyor"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, grup D). BOSLUK.md #52: "buzdolabı buzluk soğutmuyor / buzluk dondurmuyor" AC "b" #10, "buzluk" #2, #7.
# Envanter: origin/main'de "buzluk soğutmuyor" genel yazısı yok. Yakınlar: no-frost-buzdolabi-alt-bolme-sogutmuyor (ters belirti), derin-dondurucu-dondurmuyor (ayrı cihaz),
#   buzdolabi-sogutmuyor-nedenleri, marka "soğutmuyor" yazıları.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile üreticinin kendi alan adından indirildi, ikisi de HTTP 200 application/pdf. Okuma pdftotext (-layout ve -raw), sayfa = PDF sayfası.
#  (B) Beko 9554 NF / 970470 MB ... Buzdolabı Kullanma Kılavuzu  http://download.beko.com/Download.UsageManualsBeko/970470-mb-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_201805251100833_User-20Manual-20-20File-20-28Long-29en_US.pdf  25 s.  md5 7e6d6c015ce85f83200d4b23c535f251
#  (K) Bosch KGN76.. Soğutucu/Dondurucu kombine cihazı kullanım kılavuzu  https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
# Ayar B s.16, K s.17 · soğutucu ayarının dondurucuya etkisi B s.20 · kapı/conta B s.20, K s.26 · taze yük B s.20, K s.20/26 · dış hava açıklıkları K s.26 · içeri itme K s.20
#   · fiş yeni takıldı B s.20, K s.17 · kapat-aç K s.27 · NoFrost evaporatör buzlanması K s.27 · hata göstergesi B s.13 · servis uyarısı B s.21, K s.25.
# BİLEREK YAZILMAYANLAR: ücret (#46) · fan/sensör/defrost ısıtıcısı/gaz teşhisi (belgede kullanıcı adımı yok) · sergileme modu (Bosch'ta "cihaz soğutmuyor" satırı, yalnız buzluk belirtisine değil)
#   · fişi çekip bekleme süresi (belgede yok; yalnız Bosch'un "yaklaşık 5 saniye" kapat-aç adımı var) · Vestel tablosu (bölme ayırmıyor, eklenmedi).
# Alıntı denetim tablosu: buzdolabi-buzluk-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (bekleme hariç)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Sünger", "Serin bir yer ya da soğuk çanta"]
steps:
  - "Dondurucu ayarını kontrol et; iki üreticinin de önerdiği değer -18 °C. Beko'da soğutucu ayarının da dondurucuyu etkilediğini unutma."
  - "Dondurucu kapısının tam kapandığından ve contanın temiz, yerine oturmuş olduğundan emin ol."
  - "Yakın zamanda çok miktarda taze ya da sıcak yiyecek koyduysan dondurma kapasitesini aşmışsın olabilir; bekle ve bir sonraki sefer süper dondurmayı önceden aç."
  - "Cihazın dış hava açıklıklarının önündeki engelleri kaldır; dondurucudaki kapları havanın dolaşacağı şekilde içeri it."
  - "Fiş yeni takıldıysa ya da cihaz yeni çalıştırıldıysa ayarlanan sıcaklığa birkaç saat içinde ulaşacağını bil ve bekle."
  - "Sıcaklık ayardan çok farklıysa Bosch'un önerdiği gibi cihazı kapat, yaklaşık 5 saniye sonra yeniden aç ve birkaç saat sonra kontrol et."
  - "NoFrost cihazda kapı uzun süre açık kaldıysa ve ayarlanan sıcaklığa ulaşılamıyorsa kılavuzdaki sırayla buzu çözdür."
  - "Ekranda hata göstergesi yanıyorsa ya da adımlara rağmen buzluk soğumuyorsa yetkili servise başvur; cihazı kendin onarmayı deneme."
faq:
  - q: "Buzluk soğutmuyor ama alt bölme soğuyorsa ilk neye bakmalıyım?"
    a: "Önce ayara. Beko ve Bosch kılavuzlarının ikisi de dondurucu için -18 °C öneriyor. Beko'nun sorun giderme tablosuna göre soğutucu bölme ayarı da dondurucu bölme sıcaklığını etkiliyor; bu yüzden iki ayara birlikte bak."
  - q: "Dondurucuya çok yiyecek koyunca neden ısınıyor?"
    a: "Bosch'a göre cihaza çok fazla taze besin yerleştirilirse sıcaklık alarmı devreye girebilir ve dondurma kapasitesini aşmamak gerekir. Bosch, taze yiyecekleri koymadan yaklaşık 24 saat önce süper dondurmanın açılmasını ve yiyeceklerin en alttaki hazneye yerleştirilmesini öneriyor. Beko da sıcak yemek konmamasını istiyor."
  - q: "NoFrost buzdolabında buzluk neden soğutmayı bırakır?"
    a: "Bosch KGN76 kılavuzunun arıza tablosuna göre dondurucu kapısı çok uzun süre açık kalırsa NoFrost sistemindeki evaporatör çok fazla buzlanabilir. O zaman ayarlanan sıcaklığa ulaşılamaz. Kılavuz bu durumda cihazı kapatıp elektrikten ayırarak buzu çözdürmeyi tarif ediyor."
  - q: "Ekranda E harfi ve rakam görünüyorsa ne yapmalıyım?"
    a: "Beko kılavuzuna göre buzdolabı yeterli soğutma yapmıyorsa ya da sensör arızası olursa hata göstergesi devreye girer ve dondurucu göstergesinde 'E', soğutucu göstergesinde rakamlar görünür. Kılavuz bu rakamların servis personeline hata hakkında bilgi verdiğini yazıyor; bu durumda servise başvur."
images:
  coverAlt: "Üst kapağı açık, içi buzsuz ve soğuk buharı olmayan dondurucu bölmeli bir buzdolabının sade çizimi"
  steps:
    - "Buzdolabının dondurucu bölmesindeki sıcaklık ayar tuşuna dokunan beyaz eldivenli sade siluet el; ekran yazısız"
    - "Dondurucu kapısının kenarındaki contayı nemli bezle silen beyaz eldivenli sade siluet el"
    - "Dondurucu bölmesine üst üste yığılmış çok sayıda yiyecek paketi ve yanında bekleme simgesi olarak kum saati"
    - "Buzdolabının dibindeki hava açıklığının önünden bir kutuyu çeken beyaz eldivenli sade siluet el"
    - "Yeni prize takılmış buzdolabı ve yanında güneşten aya geçen gün dönümü simgesi"
    - "Buzdolabı panelindeki açma kapama tuşuna basılı tutan beyaz eldivenli sade siluet el"
    - "Kapağı açık bırakılmış boş dondurucu ve arka taraftaki kaptan eriyen suyu süngerle alan beyaz eldivenli sade siluet el"
    - "Buzdolabının yanında alet çantalı bir servis teknisyeninin yüzsüz siluet çizimi"
---

Buzdolabının alt bölmesi soğuk, ama buzluk dondurmuyor: dondurmalar yumuşamış, buz kalıbı su kalmış. "Buzluk soğutmuyor" ya da "buzluk dondurmuyor" diye arayanlar için bu yazıda iki üreticinin kendi Türkçe kullanma kılavuzlarını yan yana koyduk: **Beko** no-frost kombi buzdolabı kılavuzu ve **Bosch KGN76** kombi soğutucu/dondurucu kılavuzu. Adımların hepsi bu iki belgeden. İki kılavuzun farklı yazdığı yerde hangisinin ne dediğini ayrıca belirttik.

Tersi bir durum yaşıyorsan, yani buzluk soğuk ama alt bölme ılıksa, [no-frost buzdolabı alt bölme soğutmuyor](/blog/no-frost-buzdolabi-alt-bolme-sogutmuyor/) yazısına bak. Sandık ya da çekmeceli derin dondurucu için ayrı yazı var: [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/).

> ⚠️ **Güvenlik sınırı:** Bu listede yalnız ayar, kapı, yerleşim ve buz çözme var. Cihazın arka panelini açmak, fan, sensör ya da soğutucu gaz tarafına müdahale etmek servis işidir. Bosch kılavuzu da usulüne uygun olmayan onarımların tehlikeli olduğunu ve onarımı yalnız eğitimli uzman personelin yapabileceğini yazıyor.

## Adım adım: buzluk soğutmuyorsa kontrol sırası

**1. Dondurucu ayarına bak.** İki kılavuz da aynı değeri öneriyor: dondurucu bölmesi için **-18 °C**. Beko'ya göre bölme en az -18 °C'ye ayarlı olmalı; ortam sıcaklığı 30 °C'yi geçtiğinde -20, -22 ya da -24 °C ayarları tavsiye ediliyor. Beko'nun sorun giderme tablosunda önemli bir not var: **soğutucu bölme ayarının dondurucu bölme sıcaklığı üzerinde etkisi vardır.** Bu yüzden yalnız buzluk ayarına değil, alt bölmenin ayarına da bak ve ilgili bölmenin sıcaklığı yeterli seviyeye gelene kadar bekle.

**2. Kapıyı ve contayı kontrol et.** Beko tablosunda dondurucu ya da soğutucu kapısının **aralık kalmış** olabileceği yazıyor; çözüm kapıların tamamen kapalı olduğunu kontrol etmek. Conta **kirlenmiş, eskimiş, kırılmış ya da tam oturmamış** olabilir; Beko contayı temizlemeyi ya da değiştirmeyi söylüyor. Bosch'ta dondurucu kapağı açık kalınca ikaz sesi duyulur ve dondurucu göstergesi yanıp söner; çözüm kapağı kapatmak. Conta bakımı için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısına bakabilirsin.

**3. Son yüklemeyi düşün.** Beko'ya göre yakın zamanda **fazla miktarda sıcak yemek** konduysa ya da **yeni yiyecek** yerleştirildiyse cihazın ayarlanan sıcaklığa ulaşması normalden uzun sürer. Bosch'ta da cihaza çok fazla taze besin konunca **sıcaklık alarmı** devreye girebilir; kılavuz **dondurma kapasitesini aşmamayı** istiyor. Bosch'un önerisi: büyük miktarda yiyecek koymadan **yaklaşık 24 saat önce süper dondurmayı aç** ve yiyeceği önce **en alttaki dondurucu haznesine** yerleştir.

**4. Hava yolunu aç.** Bosch'un arıza tablosunda sıcaklık alarmının bir nedeni de **dış hava açıklıklarının üzerinin kapanması**; çözüm önündeki engelleri gidermek. Dondurucu içinde de Bosch, havanın serbestçe dolaşabilmesi için dondurulacak yiyecek kabını **gidebildiği yere kadar içeri itmeni** öneriyor. Beko da buzdolabını aşırı doldurmamayı, hava akımı engellendiğinde soğutma kapasitesinin düştüğünü yazıyor.

**5. Yeni çalıştırıldıysa bekle.** Bosch'a göre cihazı çalıştırdığında ayarlanan sıcaklığa **ancak birkaç saat sonra** ulaşılır ve o sıcaklığa ulaşılmadan yiyecek yerleştirilmemeli. Beko da fiş yeni takıldığında bu gecikmenin normal olduğunu söylüyor. Beko'ya göre ani elektrik kesintisinde ya da fiş çıkarılıp takıldığında kompresörün koruyucu termiği atar ve ürün **yaklaşık 6 dakika** sonra çalışmaya başlar; başlamazsa servis çağrılmalı.

**6. Kapat ve yeniden aç.** Bosch tablosunda sıcaklığın **yapılan ayardan çok farklı** olması için ilk öneri kısa bir yeniden başlatma: cihazı kapat, **yaklaşık 5 saniye sonra** yeniden aç. KGN76'da cihaz, açma/kapama tuşu **3 saniye** basılı tutularak kapanır. Sıcaklık çok yüksekse birkaç saat sonra yeniden kontrol et. Beko kılavuzunda böyle bir adım yok; bu adım yalnız Bosch'a ait.

**7. NoFrost'ta buzlanmayı çöz.** Bosch'a göre dondurucu kapısı **çok uzun süre açık** kaldıysa NoFrost sistemindeki evaporatör aşırı buzlanabilir; ayarlanan sıcaklığa ulaşılamaz. Kılavuzun sırası şöyle: donmuş besinleri çıkarıp serin, izole bir yerde sakla. Cihazı kapat, fişini çek ya da sigortayı kapat. Cihazı duvardan uzaklaştır ve kapağı açık bırak. Yaklaşık 20 dakika sonra eriyen su arka yüzdeki buharlaşma kabına akmaya başlar; kabın taşmaması için suyu süngerle al. Kaba su akmayı bırakınca buz çözülmüştür. İçini temizle ve cihazı yeniden aç.

**8. Hata göstergesi varsa servise başvur.** Beko'da **hata durumu göstergesi**, buzdolabı yeterli soğutma yapmıyorsa ya da bir sensör arızası olursa devreye girer: dondurucu göstergesinde **"E"**, soğutucu göstergesinde rakamlar görünür. Kılavuza göre bu rakamlar servis personeline hata hakkında bilgi verir. Beko, talimatlara rağmen sorun sürerse bayiye ya da yetkili servise başvurmanı ve çalışmayan ürünü kendin onarmayı denememeni istiyor.

## İki kılavuz nerede ayrışıyor?

Beko'nun tablosu daha çok kullanım kaynaklı nedenlere odaklanıyor: ayar, kapı, conta, sıcak yemek ve yeni yükleme. Bosch ise buna iki somut adım ekliyor: kapat-aç ile kısa yeniden başlatma ve NoFrost evaporatörünün elle buzunun çözülmesi. Beko'nun belgesinde bu ikisi yok. Kendi buzdolabının kılavuzu farklı bir tuş ya da sıra veriyorsa **kendi kılavuzun esastır.**

## Donmuş yiyecekler ne olacak?

Bosch'a göre buz çözme sırasında bakteriler çoğalabilir. Buzu çözülmeye başlamış ya da çözülmüş yiyecekler **tekrar dondurulmamalı**; ancak pişirildikten ya da kızartıldıktan sonra yeniden dondurulabilir. Beko da çözülen gıdaların derhal kullanılması ve tekrar dondurulmaması gerektiğini yazıyor. Dondurucu sıcaklığı hakkında daha fazlası için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

## Ne zaman servis

- Beko'da hata göstergesi yanıyor, dondurucu göstergesinde "E" görünüyorsa
- Buz çözdükten kısa süre sonra buzluk yine soğutmayı bırakıyorsa
- Fiş takıldıktan sonra kompresör hiç çalışmaya başlamıyorsa
- Ayar, kapı ve yükleme normal olduğu hâlde buzluk günlerce dondurmuyorsa

⛔ Fan, sensör, buz çözme ısıtıcısı ve soğutucu gaz tarafı kasanın içindedir; bunlar yetkili servisin işidir.

## Servisi aramadan önce kısa özet

1. Buzdolabının modeli ve dondurucu ayarı ne?
2. Ekranda bir harf ya da rakam görünüyor mu?
3. Son günlerde çok yiyecek kondu mu, kapı açık kaldı mı?
4. Buz çözme denedin mi, ne kadar süre sonra sorun geri geldi?

Belirtiyi ve modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
