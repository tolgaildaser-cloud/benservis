---
title: "Termosifon emniyet ventili su damlatıyor: normal mi?"
description: "Termosifonun emniyet ventilinden su damlaması çoğu zaman normaldir. Üretici kılavuzlarına göre ne zaman normal, ne zaman tesisatçı ya da servis gerekir."
slug: "termosifon-emniyet-ventili-su-damlatiyor"
date: "2026-10-23"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de termosifon-emniyet-ventili-su-damlatiyor yok; termosifonda yalnız
#   termosifon-suyu-isitmiyor, vestel- ve demirdokum-termosifon-suyu-isitmiyor var. Ventil/damlama sorgusu karşılanmıyor.
# Arama kanıtı: GSC son 7 gün (https___www-6) "termosifon emniyet ventili" 5 gösterim (poz. 46). Otomatik tamamlama (bu koşu,
#   hl=tr gl=tr): "termosifon emniyet ventili" → "... nereye takılır", "... fiyat", "termosifon emniyet ventili su damlatıyor ne
#   yapmalıyım"; "termosifon su akıtıyor" → "... ne yapmalıyım", "termosifon üstten su akıtıyor ne yapmalıyım", "... alttan ...".
# Belgeler: Vestel elektrikli termosifon kılavuzu 20214615_k (statik.vestel.com.tr, bu koşuda HTTP 200, md5 5b2d7d441b5c5d5fc6b34451d428e8e0,
#   yerel kopyayla aynı) · Arçelik T 7350 B termosifon kılavuzu (yerel kopya, 3 Eki 2026 indirme, md5 51d9eda80694c637271a099e175a0722;
#   üretici URL'si yerel kayıtta yok). Alıntı denetimi: termosifon-emniyet-ventili-su-damlatiyor.KAYNAK.md
# BİLEREK YAZILMAYANLAR: ventil değiştirme/ayar · basınç düşürücü montajı (tesisatçı) · alttan/üstten akıtma için kazan delinmesi
#   teşhisi · fiyat (#46). Küçük ev aleti değil (termosifon), teşhis cümlesi kalıptaki gibi kaldı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu", "Kova veya kap", "El feneri"]
steps:
  - "Suyun nereden geldiğine bak; emniyet ventilinin boşaltma ucundan mı, yoksa boru bağlantısından ya da termosifonun gövdesinden mi damladığını ayır."
  - "Damlama termosifon ısıtırken ventilin boşaltma ucundan geliyorsa bunun basınç artışına bağlı normal bir durum olduğunu bil."
  - "Ventilin boşaltma ucuna ürünle birlikte verilen hortumun takılı olduğunu, hortumun aşağı baktığını ve gidere ya da açık bir yere indiğini kontrol et."
  - "Ventilin ayar mekanizmasına dokunma ve ventili başka biriyle değiştirme."
  - "Damlama ısıtma dışında da sürekli akışa dönüşüyorsa şebeke su basıncını yöneticiye ya da tesisatçıya sordur; yüksekse ventilden önce basınç düşürücü taktır."
  - "Kılavuzun önerdiği aylık kontrolü yap; mandalı dik konuma getirince suyun aktığını gör, sonra mandalı eski konumuna al."
  - "Su bağlantılardan ya da gövdeden sızıyorsa ya da ventil ses yapıyorsa termosifonun elektriğini kes, suyunu kapat ve yetkili servisi çağır."
faq:
  - q: "Termosifonun emniyet ventilinden su damlaması normal mi?"
    a: "Evet, çoğu durumda. Vestel kılavuzu termosifonun çalışmasıyla birlikte basınç artışı meydana geleceğini ve emniyet ventilinden su damlamasının normal olduğunu yazıyor. Arçelik de emniyet ventilinin tahliye borusundan su damlayabileceğini, bunun arıza olmayıp güvenlik standardı gereği olduğunu belirtiyor."
  - q: "Emniyet ventili ne işe yarar?"
    a: "Vestel kılavuzuna göre emniyet ventili termosifonun soğuk su girişine takılır. Su kesilmelerinde kazandaki suyun boşalmasını önler, kazan iç basıncı yükselirse boşaltma ucundan su akıtarak iç basıncı dengeler."
  - q: "Damlayan su yere akıyor, ne yapmalıyım?"
    a: "Kılavuzlar ventille birlikte verilen drenaj hortumunun kullanılmasını istiyor. Arçelik'e göre hortum atmosfere açık ve donma olmayan bir yere, Vestel'e göre damlayan suyun ortama zarar vermemesi için atık su giderine bağlanabilir. Boşaltma ucu aşağı doğru olmalı."
  - q: "Su sürekli akıyor, sadece damlamıyor?"
    a: "Şebeke basıncı yüksek olabilir. Vestel kılavuzu ventilin şebeke giriş basıncı 8 barı geçtiğinde tahliye bölümünden sızıntı yapabileceğini, basınç azalınca duracağını yazıyor; 8 barın üzerinde ventilden önce soğuk su hattına basınç düşürücü bağlanmasını istiyor. Arçelik'te bu sınır 6 bar. Basınç düşürücü tesisatçı işidir."
  - q: "Ventilden ses geliyor, neden?"
    a: "Vestel'in sorun giderme tablosunda termosifonun sesli çalışmasının bir nedeni emniyet ventili içinde kireç ya da kum parçası bulunması; çözüm servis çağırmak. Diğer neden şebeke basıncının düzensiz olması; bunun için basınç regülatörü öneriliyor."
images:
  coverAlt: "Banyo duvarına asılı beyaz silindir biçimli bir termosifon ve altındaki boru bağlantıları"
  steps:
    - "Termosifonun altındaki boru bağlantıları ve küçük pirinç bir vananın yakın planı"
    - "Emniyet ventilinin boşaltma ucundan tek bir su damlası düşerken"
    - "Ventilin ucundan aşağı doğru inen ve gidere uzanan şeffaf ince bir hortum"
    - "Termosifon altındaki vananın üzerinde kapalı küçük bir ayar kapağı"
    - "Banyo duvarındaki su sayacı ve yanında soğuk su borusu üzerinde ek bir vana"
    - "Emniyet ventilinin küçük mandalı dik konumda ve altında boş bir kap"
    - "Kapatılmış bir termosifon şalteri ve kapalı bir su vanası"
---

Banyoda termosifonun altında küçük bir su birikintisi ya da borudan düzenli düşen damlalar. İlk akla gelen "termosifon delindi" oluyor. Çoğu zaman öyle değil: damla, **emniyet ventilinden** geliyor ve üreticilerin kılavuzlarına göre bu bir arıza değil, güvenlik özelliği. Vestel'in elektrikli termosifon kılavuzu ve Arçelik'in T 7350 B kılavuzu bu durumu açıkça "normal" olarak tanımlıyor, ama hangi durumda normal olmadığını da yazıyor. Bu yazıda ikisini yan yana koyduk. Senin termosifonunun kılavuzu farklı basınç değerleri verebilir, kendininkiyle karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Termosifon ısıtırken kazandaki basınç artar ve emniyet ventili fazlasını damla damla boşaltır; bu normal. Ventilin ucuna ürünle verilen hortumu takıp gidere indir. Ventilin ayarına dokunma, değiştirme. Sürekli akıyorsa şebeke basıncı yüksek olabilir, tesisatçı basınç düşürücü takar. Su bağlantıdan ya da gövdeden geliyorsa yetkili servis.

## Ne normal, ne değil

| Gördüğün | Kılavuza göre | Kim ne yapar |
|---|---|---|
| **Isıtma sırasında ventil ucundan damla** | Basınç artışı, normal | 🛠️ Hortumu gidere bağla |
| **Ventil ucundan sürekli akış** | Şebeke basıncı yüksek olabilir | 🔧 Tesisatçı: basınç düşürücü |
| **Ventilden ses** | Kireç ya da kum parçası olabilir | 📞 Yetkili servis |
| **Bağlantı ya da gövdeden su** | Ventille ilgisi yok | 📞 Yetkili servis |

## Adım adım: evde denenecekler

**1. Suyun kaynağını bul.** El fenerini termosifonun altındaki bağlantılara tut. Emniyet ventili, termosifonun **soğuk su girişine** takılan küçük vanadır ve bir boşaltma ucu vardır. Damla bu uçtan mı düşüyor, yoksa boru birleşim yerlerinden ya da termosifonun gövdesinden mi süzülüyor? İkisinin anlamı tamamen farklı.

**2. Isınırken damlıyorsa normal.** Vestel kılavuzu net: **termosifonun çalışması ile birlikte basınç artışı meydana gelecektir. Emniyet ventilinden su damlaması normal bir durumdur.** Sorun giderme tablosunda da "emniyet ventilinden su damlıyor" satırının sebebi "normal bir durumdur". Arçelik aynı şeyi söylüyor: emniyet ventilinin tahliye borusundan su damlayabilir, yüksek su basınçlarında güvenlik amacıyla su akar; bu **arıza olmayıp güvenlik standardı gereğidir**. Vestel'e göre ventil, kazan iç basıncı yükselince boşaltma ucundan su akıtarak iç basıncı dengeler ve su kesilmelerinde kazanın boşalmasını önler.

**3. Hortumu kontrol et.** Damlanın yere değil gidere gitmesi gerekiyor. Arçelik kılavuzu emniyet ventiliyle birlikte verilen **drenaj hortumunun birlikte kullanılmasını**, hortumun **atmosfere açık** ve **donma olmayan** bir yere çıkmasını istiyor. Vestel de damlayan suların ortama zarar vermemesi için bir hortumla **atık su giderine** bağlanabileceğini, ventil bağlanırken **boşaltma ucunun aşağı doğru** olmasına özen gösterilmesini yazıyor. Hortum çıkmış, kıvrılmış ya da hiç takılmamışsa bunu düzelt; boşaltma ucunu tıkamaya çalışma.

**4. Ventile dokunma.** İki kılavuz da aynı uyarıyı yapıyor: emniyet ventili **fabrikada ayarlanmıştır**, ayar mekanizması kurcalanmamalıdır. Arçelik ayrıca cihazla birlikte verilen emniyet ventilinin **kesinlikle değiştirilmemesini** istiyor. Damlayı durdurmak için ventili sıkmak ya da tapa takmak, basıncın boşalacağı tek yolu kapatmak demektir.

**5. Sürekli akıyorsa basınca bak.** Damla değil de ince bir akış varsa ve termosifon ısıtmıyorken de sürüyorsa şebeke basıncı yüksek olabilir. Vestel kılavuzuna göre ventil, şebeke giriş basıncı **8 barı** geçtiğinde tahliye bölümünden sızıntı yapabilir; bu da normaldir ve basınç azalınca sızıntı durur. Basınç sürekli **8 barın** üzerindeyse ventilden önce soğuk su hattına bir **basınç düşürücü** bağlanmalı; düşürücü olabildiğince cihazdan uzakta, sayaca yakın olmalı. Arçelik'te bu sınır **6 bar**. Basıncı bina yöneticisine ya da tesisatçıya sordur; düşürücüyü **tesisatçı** takar.

**6. Aylık kontrolü yap.** Vestel kılavuzu ventilin çalıştığını kontrol etmek için **ayda bir** mandalın **dik konuma** getirilip suyun aktığının görülmesini öneriyor; kazanın suyu da bu mandalla tahliye ediliyor. Altına bir kap koy, mandalı kaldır, suyun aktığını gör ve mandalı eski konumuna getir. Vestel'in uyarısı: emniyet ventilinden boşaltma yapıldıysa **sıcak su musluğundan suyun aktığını görmeden** sistemi çalıştırma. Kılavuz ayrıca cihazın kireç birikimini önlemek ve bloke olmadığını doğrulamak için ventilin aralıklarla çalıştırılmasını istiyor.

**7. Başka yerden sızıyorsa servis.** Su ventilin ucundan değil de bağlantılardan, termosifonun altından ya da gövdesinden geliyorsa bu emniyet ventilinin işi değil. Termosifonun **şalterini kapat**, soğuk su vanasını kapat ve **yetkili servisi** çağır. Vestel'in sorun giderme tablosunda termosifonun **sesli çalışmasının** bir nedeni de emniyet ventili içinde **kireç ya da kum parçası** bulunması; çözüm yine servis. Kılavuz kurulum ve tamirin her zaman yetkili servise yaptırılmasını istiyor.

## Ventil damlıyor ama su da ısınmıyorsa

Damlama ile ısıtma sorunu ayrı konular. Vestel kılavuzuna göre termosifon çalışmıyorsa şalter kapalı, elektrik kesik ya da bina ana sigortası atmış olabilir; su geç ısınıyorsa gerilim düşük ya da rezistans kireçlenmiş olabilir. Rezistans temizliği ve magnezyum çubuk değişimi yetkili kişiler tarafından yapılmalı. Ayrıntılar [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) ve [Vestel termosifon suyu ısıtmıyor](/blog/vestel-termosifon-suyu-isitmiyor/) yazılarında.

## Ne zaman servis

- Su ventilin ucundan değil, bağlantılardan ya da gövdeden geliyorsa
- Ventilden ses geliyorsa
- Aylık kontrolde mandal kaldırıldığında su akmıyorsa
- Basınç düşürücü takıldığı hâlde ventil sürekli akıtıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Drenaj hortumu, mandal kontrolü ve şalter sende; ventil, basınç düşürücü, boru bağlantıları, rezistans ve elektrik bağlantısı tesisatçının ya da yetkili servisin.

## Servisi aramadan önce kısa özet

1. Termosifonun markası ve modeli ne?
2. Su tam olarak nereden geliyor?
3. Damlama yalnız ısınırken mi, sürekli mi?
4. Ventilin ucunda hortum var mı?
5. Binanın su basıncı biliniyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
