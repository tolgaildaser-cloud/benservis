---
title: "Bosch bulaşık makinesi leke bırakıyor"
description: "Bosch bulaşık makinesi bardaklarda iz, beyaz tortu ya da su lekesi bırakıyorsa Bosch'un sırası: parlatıcı, su sertliği, tuz ve deterjan."
slug: "bosch-bulasik-makinesi-leke-birakiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu"  https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
# Arıza tablosu satırları: K s.43 "Cam bardaklar, metalik görünen cam bardaklar ve çatal bıçaklar üzerinde giderilebilen izler var." → çok fazla parlatıcı → daha düşük kademe · parlatıcı yok/ayar düşük
#   → "Parlatıcı doldurunuz ve dozajı kontrol ediniz (önerilen Kademe 4-5)." · deterjan bölmesi kapağı bloke → tablet kabına bulaşık/koku verici koyma · fazla ön temizleme → sensör
#   · K s.43 "…değişmez (eski haline döndürülemez) cam bulanıklığı." → dayanıklı bardak; uzun buhar aşamasını önle; daha düşük ısılı program; su sertliği ayarı (gerekirse bir kademe düşük); cam koruma bileşenli deterjan
#   · K s.41 "Plastik parçalar üzerinde su lekeleri var." → daha güçlü program; eğik yerleştir; parlatıcı; kireç giderme ayarını gerekirse yükselt
#   · K s.41 "Kabın içinde veya cihaz kapağında silinebilen veya suda çözünebilen tortular." → deterjan markası; "beyaz tortu" → su sertliği giderme ayarını yükselt; tuz kabı kapağını doğru kapat; camlarda başlangıç korozyonu
#   · K s.42 "Bulaşıklarda, kaplarda veya kapaklarda zor yok edilebilen beyaz tortular." → sertlik aralığı yanlış/50°dH üstü; 3'ü 1 arada yetersiz → ayrı maddeler; düşük doz; güçlü program
# Diğer: K s.14-15 su sertliği (7°dH üstünde kireç giderme; sertliği yerel su işletmesinden öğren; tuz göstergesi yanınca, çalıştırmadan hemen önce özel tuz; yemeklik tuz/tablet kullanma; kaba deterjan koyma)
#   · K s.16 parlatıcı (izler → daha düşük kademe; su lekeleri → daha yüksek kademe; yalnız iz/leke kalırsa değiştir) · K s.17 cam hasarları (sebepler + öneriler; kristal birçok yıkamadan sonra körelebilir)
#   · B s.1 alt sepeti önce boşalt; deterjan tipi değişimi/arıtma kurulumu → tuz ve parlatıcı ayarlarını gözden geçir · B s.2 hepsi bir arada tablet + tuz birlikte cam bulaşıklara hasar verebilir; camlar için yüksek sıcaklıktan kaçın.
# BİLEREK YAZILMAYANLAR: sirke/limon tuzu gibi ev yöntemleri (B s.1 sirke ve tuz ruhu kullanımını yasaklıyor) · yumuşatıcı reçine/ünite teşhisi (belgede yok) · sertlik ayar kodları (sembol okunmuyor)
#   · çatal bıçak pas lekesi (ayrı satır, bu yazının konusu değil) · renkli (mavi/sarı/kahverengi) tabakalar (K s.42; kapsam dışı bırakıldı).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-leke-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bulaşık makinesi özel tuzu", "Kuru bir bez"]
steps:
  - "Lekeli bir bardağı kuru bezle sil; iz çıkıyorsa parlatıcı, tuz ve deterjan adımlarına geç, çıkmıyorsa kalıcı cam bulanıklığı olabilir."
  - "Parlatıcı kabını kontrol et; eksikse max işaretine kadar doldur, taşanı bezle sil."
  - "Parlatıcı ayarını lekeye göre değiştir: iz ve çizgide bir kademe düşür, su lekesinde bir kademe yükselt."
  - "Musluk suyunun sertliğini yerel su idaresinden öğren ve makinenin su sertliği ayarını kılavuzdaki tabloya göre yap."
  - "Tuz göstergesi yanıyorsa programı başlatmadan hemen önce özel tuz doldur ve tuz kabının kapağını tam kapat."
  - "Tablet tutma kabına ya da üstüne bulaşık koyma; deterjan bölmesinin kapağının serbest açılmasını sağla."
  - "Hepsi bir arada tablet yetmiyorsa ayrı deterjan, özel tuz ve parlatıcı kullan."
  - "Program bitince bardakları çok bekletmeden çıkar; önce alt sepeti boşalt."
faq:
  - q: "Bosch bulaşık makinesinden çıkan bardaklarda beyaz iz var, neden?"
    a: "Bosch'un kullanma kılavuzundaki arıza tablosu önce izin silinip silinmediğine bakıyor. Cam bardaklar ve çatal bıçaklar üzerinde giderilebilen izler için sayılan nedenler: çok fazla parlatıcı, eksik parlatıcı ya da çok düşük parlatıcı ayarı, deterjan bölmesinin kapağının bir bulaşık yüzünden tam açılamaması ve fazla ön temizleme yüzünden sensörün zayıf program seçmesi. Önerilen parlatıcı ayarı kademe 4-5."
  - q: "Bardaklar sütümsü, buğulu görünüyor ve silince geçmiyor. Makine mi bozdu?"
    a: "Bosch'un tablosu bunu 'değişmez (eski haline döndürülemez) cam bulanıklığı' olarak tanımlıyor ve nedenini bardakların bulaşık makinesinde yıkanmaya dayanıklı olmamasına bağlıyor. Bosch'un önerileri: bulaşık makinesinde yıkanmaya dayanıklı bardak kullanmak, durulamadan sonra uzun buhar aşamasından kaçınmak, daha düşük ısılı bir program seçmek, su sertliği ayarını suya göre (gerekirse bir kademe düşük) yapmak ve cam koruma bileşenli deterjan kullanmak. Bosch'a göre bazı cam türleri, örneğin kristal, birçok yıkamadan sonra körelebilir."
  - q: "Makinenin tabanında ve kaplarda beyaz bir tortu birikiyor. Ne yapmalıyım?"
    a: "Bosch'un tablosuna göre tabanda beyaz tortu varsa su sertliğini giderme sistemi sınır değere ayarlanmış olabilir; çözüm su sertliği ayarını yükseltmek ve gerekirse deterjanı değiştirmek. Tuz kabının kapağı doğru kapatılmamışsa kapatılmalı. Zor çıkan beyaz tortularda Bosch sertlik ayarının yanlış olabileceğini, 3'ü 1 arada deterjanın yeterince etkili olmayabileceğini ve deterjan dozajının düşük olabileceğini sayıyor."
  - q: "Evime su arıtma sistemi taktırdım, bulaşık makinesinde bir şey değiştirmem gerekir mi?"
    a: "Bosch'un bilgilendirme kılavuzu deterjan tipini değiştirdiğinde ya da binana arıtma sistemi kurulması gibi su sertliğini değiştirecek durumlarda makinenin tuz ve parlatıcı ayarlarının gözden geçirilmesini öneriyor. Su sertliği ayarı için kılavuzdaki sertlik tablosunu kullan."
images:
  coverAlt: "Bulaşık makinesinden yeni çıkmış, üzerinde beyaz iz ve lekeler görünen cam bardaklar; arka planda açık makinenin üst sepeti"
---

Bardaklar makineden temiz ama lekeli çıkıyor: beyaz izler, su damlası lekeleri ya da sütümsü bir buğu. Bosch'un bulaşık makinesi kullanma kılavuzundaki arıza tablosunda bu şikâyetler için birden fazla satır var ve Bosch bunları iki gruba ayırıyor: **giderilebilen izler** ve **eski haline döndürülemez cam bulanıklığı.** İlk grubun nedenleri çoğunlukla **parlatıcı, su sertliği ayarı, tuz ve deterjan;** ikinci grup ise bardağın kendisiyle ilgili. Bu yazıda Bosch'un listesini adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce lekeyi sil: çıkıyorsa parlatıcıyı doldur ve ayarla (iz → düşür, su lekesi → yükselt), su sertliği ayarını suya göre yap, tuzu eksik bırakma, tablet kabının önünü açık tut. Çıkmıyorsa kalıcı cam bulanıklığı olabilir; Bosch'un önerisi dayanıklı bardak, daha düşük ısılı program ve cam koruyuculu deterjan.

## Adım adım: evde denenecekler

**1. Lekeyi tanı.** Bosch'un tablosu **giderilebilen izleri** ve **değişmez cam bulanıklığını** ayrı satırlarda veriyor. Lekeli bir bardağı kuru bir bezle sil. İz silinip gidiyorsa Bosch'un "giderilebilen izler" satırı geçerli; aşağıdaki ayar ve ürün adımlarıyla devam et. Silinmiyorsa Bosch'un "değişmez cam bulanıklığı" satırı geçerli olabilir; bu durum için aşağıdaki "Silinmeyen buğu" bölümüne bak. Bosch'un bir notu var: camlardaki **başlangıç aşamasındaki korozyon silinebilir gibi algılanabilir.**

**2. Parlatıcıyı kontrol et.** Tablodaki neden: **parlatıcı doldurulmamış veya ayar çok düşük.** Bosch'a göre parlatıcı, bulaşıkların lekesiz ve bardakların parlak olması için gerekli. Panelde parlatıcı göstergesi yanıyorsa kabın kapağındaki dile bastırıp kapağı kaldır, parlatıcıyı **max işaretine kadar** doldur ve kapağı kapat. Taşan parlatıcıyı **bir bezle sil;** Bosch'a göre bu, bir sonraki yıkamada aşırı köpük oluşmasını önler.

**3. Parlatıcı ayarını lekeye göre değiştir.** Bosch'un kuralı net: parlatıcı miktarını **yalnız bulaşıklarda iz ya da su lekesi kalıyorsa** değiştir. **İz oluşuyorsa daha düşük** bir kademe, **su lekesi oluşuyorsa daha yüksek** bir kademe ayarla. Arıza tablosu da cam bardaklarda ve metalik görünen camlarda izin bir nedeni olarak **çok fazla parlatıcı** sayıyor. Tabloda önerilen dozaj **kademe 4-5.** Ayarı kılavuzundaki "Ayarların değiştirilmesi" bölümündeki tuşlarla yap.

**4. Su sertliği ayarını suya göre yap.** Bosch'a göre iyi temizlik için makinenin yumuşak suya ihtiyacı var; aksi halde bulaşıklarda ve makinenin içinde **kireç tortuları** birikir. **7°dH'den** sert suda kireç giderme gerekir. Bosch'un sırası: musluk suyunun sertliğini **yerel su işletmesinden öğren**, gereken ayar değerini kılavuzdaki sertlik tablosundan bul ve makinede ayarla. Arıza tablosunda tabanda **beyaz tortu** için çözüm su sertliği ayarını **yükseltmek**; plastiklerdeki su lekeleri için de kireç giderme ayarını gerekirse yükseltmek öneriliyor.

**5. Özel tuzu eksik bırakma.** Bosch'a göre tuz göstergesi yandığında **özel tuz** doldurulmalı; tuzu **makineyi çalıştırmadan hemen önce** doldur ki taşan tuz çözeltisi hemen yıkansın. İlk kullanımda kaba su da doldurulur. **Yemeklik tuz ya da tablet** koyma; tuz kabına kesinlikle **deterjan** doldurma. Bosch'un tablosunda bir madde daha var: **tuz kabının kapağı doğru kapatılmamışsa** beyaz tortu oluşabilir; kapağı doğru kapat.

**6. Tablet kabının önünü açık tut.** İzlerin bir nedeni de durulama aşamasında kalan **deterjan artıkları:** Bosch'a göre deterjan bölmesinin kapağı bir bulaşık parçası yüzünden bloke olursa tam açılamıyor. Bosch'un çözümü: tablet tutma kabına **bulaşık parçası ya da koku verici koyma,** üstünde bulaşık bırakma.

**7. Gerekirse ayrı ürünlere geç.** Zor çıkan beyaz tortularda Bosch'un saydığı nedenlerden biri: **3'ü 1 arada deterjan ya da biyolojik/ekolojik deterjan yeterince etkili değil.** Çözüm, su sertliğini giderme sistemini kılavuza göre ayarlamak ya da **ayrı ayrı ürünler** (deterjan, tuz, parlatıcı) kullanmak. Bosch'un bilgilendirme kılavuzunun uyarısı: **hepsi bir arada tablet ile tuzun birlikte kullanımı cam bulaşıklara hasar verebilir.** Deterjan dozajı düşükse Bosch dozajı yükseltmeyi ya da deterjanı değiştirmeyi öneriyor.

**8. Bardakları bekletmeden çıkar.** Bosch'un cam hasarlarıyla ilgili önerilerinden biri: cam malzemeleri ve çatal bıçakları **program sonunda mümkün olduğu kadar çabuk** çıkar. Boşaltırken bilgilendirme kılavuzundaki sırayı izle: **önce alt sepet, sonra üst sepet;** üst sepette kalan damlalar alttaki bulaşıklarda leke oluşturabilir.

## Silinmeyen buğu: kalıcı cam bulanıklığı

Bosch'un tablosuna göre **başlamakta olan ya da mevcut, eski haline döndürülemez cam bulanıklığının** nedeni bardakların bulaşık makinesinde yıkanmaya dayanıklı olmaması. Bosch'un önerileri:

- Bulaşık makinesinde yıkanmaya **dayanıklı bardak** kullan.
- Durulama bittikten sonraki **uzun buhar aşamasından** (bekleme süresinden) kaçın.
- **Daha düşük ısılı** bir yıkama programı kullan.
- Su sertliği ayarını suya göre yap, **gerekirse bir kademe düşük** ayarla.
- **Cam veya bardak koruma** bileşeni olan bir deterjan kullan.

Bosch'a göre bazı cam türleri, örneğin **kristal cam parçalar,** birçok kez yıkandıktan sonra körelebilir ve sütümsü bir renk alabilir. Bosch'un bilgilendirme kılavuzu da camların zamanla bozulmaması için **yüksek sıcaklıktaki programlardan kaçınmayı** öneriyor.

Beyaz film ile kalıcı matlaşmanın farkını markadan bağımsız olarak [bulaşık makinesi bardakları bulanık bırakıyor](/blog/bulasik-makinesi-bardaklari-bulanik-birakiyor/) yazısında anlattık. Tuz ve parlatıcı ayarının ayrıntısı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında, paneldeki tuz ve parlatıcı simgeleri [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasında. Leke değil de yemek artığı kalıyorsa [Bosch bulaşık makinesi temiz yıkamıyor](/blog/bosch-bulasik-makinesi-temiz-yikamiyor/) rehberine bak.

## Ne zaman servis

Parlatıcı ve tuz dolu, su sertliği ve parlatıcı ayarı suya göre yapılmış, deterjan uygun ve lekeler hâlâ sürüyorsa Bosch'un kılavuzu şunu söylüyor: **hatayı veya arızayı gidermeyi başaramazsan yetkili servisine başvur.** Servisi ararken cihaz kapısındaki tip etiketindeki **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** bildir.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, tuz, deterjan ve ayarlar kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Leke silince çıkıyor mu, çıkmıyor mu?
2. Parlatıcı ve tuz göstergeleri yanıyor mu, kaplar dolu mu?
3. Su sertliği ayarı en son ne zaman yapıldı, suyun sertliğini biliyor musun?
4. Hepsi bir arada tablet mi, ayrı ürünler mi kullanıyorsun?
5. Lekeler yalnız camlarda mı, plastik ve porselende de mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
