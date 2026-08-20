// hata-kodlari.js — TAMİR MERKEZİ ① KATMAN: HATA KODU / BELİRTİ GİRİŞİ (YK Kararı #35, 3 Ağu 2026)
//
// NE İŞE YARAR: kullanıcı `/tamir/<cihaz>/` sayfasına elindeki **hata kodu** ya da **belirti**
// ile girer; sayfa ona sırasıyla "bu ne demek" ve "ne yapmalı"yı gösterir, sonra ya
// **kendi rehberimize** ya da **servis çağırma yoluna** çıkarır.
//
// ⛔ NEDEN BU DOSYA VAR (YK #35 gerekçesi): en çok gösterim alan üç sayfamızın hiçbiri DIY
// içeriği değil — `bosch-camasir-makinesi-hata-kodlari` (624), `ocak-atesleme-yapmiyor` (601),
// `derin-dondurucu-kac-derece-olmali` (499). Talep hata kodu / arıza teşhisi / ayar tarafında;
// Tamir Merkezi "kendin-yap kütüphanesi" değil, **üç katmanlı teşhis merkezi** olarak kuruldu.
//
// ⛔ İÇERİK ÜRETİLMEDİ (rol sınırı — metin PAZ'ın işi):
//   · Buradaki her kayıt, ZATEN YAYINDA olan kendi yazımıza bağlanır. Yeni yazı/rehber YOK.
//   · `anlam` alanı yazının kendi frontmatter'ındaki özetten damıtılmış TEK satırlık
//     gezinme etiketidir — yeni iddia, yeni bilgi, yeni tavsiye içermez.
//   · Yazıların `description` alanı sayfaya BASILMAZ: o metinler fiyat/maliyet ifadesi
//     içeriyor, ① katman ise fiyat geçmeyen bir katman (aşağıya bak).
//
// ⛔ FİYAT YASAĞI (YK #35, bağlayıcı — MALİYET KATMANI KİLİTLİ):
//   `/tamir/` altındaki hiçbir sayfada TL/₺/fiyat/ücret/maliyet ifadesi geçmez ve "yakında"
//   da yazılmaz. Bu dosyadaki metinler de o kurala tabidir; `scripts/build-blog.mjs` içindeki
//   `fiyatDenetimi()` üretilen HTML'i tarar ve ihlalde build'i DURDURUR (elle gözle kontrol yok).
//   Gerekçe (Rıza şerhi): tarife verisi 19 Haz'dan donmuş, bilinen bir kalemde piyasadan
//   %20-40 sapıyor; yayınlanırsa tahmin değil, kurumsal fiyat vaadi olur.
//
// ⛔ KAPSAM (YK #31): `rehber: true` yalnız ücretsiz/bakım seviyesi işlere konur. Parça
//   değişimi/söküm gerektiren bir kayıt buraya rehber olarak GİRMEZ — o kayıt servis yoluna çıkar.
//
// ALAN SÖZLÜĞÜ
//   giris  → kullanıcının elindeki şey: hata kodu ("E22", "F.28") ya da belirti ("Su almıyor")
//   tip    → "kod" | "belirti" | "ayar"   (sayfada bu üç başlık altında gruplanır)
//   anlam  → tek satır "bu ne demek" (fiyat/ücret/maliyet kelimesi YASAK)
//   yazi   → kendi blog yazımızın slug'ı (URL DEĞİŞMEZ: /blog/<slug>/). Boşsa servis yoluna çıkar.
//   rehber → true ise bu kayıt aynı zamanda KENDİ bakım rehberimizdir (② kendin-çöz katmanı);
//            kartın zorluk/süre/adım meta'sı `src/onarim-rehberleri.js`'ten okunur, burada tekrarlanmaz.

export const HATA_KODU_KATMANI = {
  "Çamaşır Makinesi": [
    { giris: "Bosch · Siemens · Neff — E ve F kodları", tip: "kod",
      anlam: "E16, E17, E18, F21, F23, F63… hangi kod ne demek, hangisi evde çözülür hangisi servis ister.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    { giris: "Arçelik · Beko · Grundig kodları", tip: "kod",
      anlam: "Su alma, tahliye, ısıtma, kapı ve motor arızalarının kod karşılıkları.",
      yazi: "arcelik-camasir-makinesi-hata-kodlari" },
    { giris: "LG — IE, OE, UE, dE", tip: "kod",
      anlam: "LG panelindeki iki harfli kodların anlamı ve hangisini kendin çözebilirsin.",
      yazi: "lg-camasir-makinesi-hata-kodlari" },
    { giris: "Samsung — 4E/4C, 5E/5C, UE", tip: "kod",
      anlam: "Samsung'un su alma, tahliye ve denge kodlarının karşılığı.",
      yazi: "samsung-camasir-makinesi-hata-kodlari" },
    { giris: "Marka fark etmeksizin en sık kodlar", tip: "kod",
      anlam: "Markası listede yoksa buradan bak: en sık kodların ortak anlamı.",
      yazi: "camasir-makinesi-hata-kodlari" },
    { giris: "Kod yok, ışıklar yanıp sönüyor", tip: "kod",
      anlam: "Ekranı olmayan modellerde yanıp sönen ışık dizilimi de bir hata bildirimidir.",
      yazi: "camasir-makinesi-isik-yanip-sonuyor" },
    { giris: "Su atmıyor / çamaşırlar ıslak çıkıyor", tip: "belirti",
      anlam: "Çoğu durumda tahliye filtresi tıkalıdır; filtreyi kendin temizleyebilirsin.",
      yazi: "camasir-makinesi-tahliye-filtresi-temizleme", rehber: true },
    { giris: "Su almıyor", tip: "belirti",
      anlam: "Önce musluk, giriş filtresi ve hortum kontrol edilir.",
      yazi: "camasir-makinesi-su-almiyor" },
    { giris: "Sıkarken ses ve titreşim", tip: "belirti",
      anlam: "Nakliye cıvatası, dengesizlik, yabancı cisim ve rulman ayrımı nasıl yapılır.",
      yazi: "camasir-makinesi-ses-titresim" },
    { giris: "Küf / rutubet kokusu", tip: "belirti",
      anlam: "Kapı contası, deterjan çekmecesi, filtre ve kireç kaynaklı kokunun nedenleri.",
      yazi: "camasir-makinesi-kokuyor", rehber: true },
    { giris: "Hangi çamaşır kaç derecede yıkanır", tip: "ayar",
      anlam: "30-40-60-90 derece seçimi ve makinede koku yapmaması için tek kural.",
      yazi: "camasir-kac-derecede-yikanir" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Beko — E ve H kodları", tip: "kod",
      anlam: "E01, E02, E03, E10, E17, E18 ve H1, H4, H5 kodlarının karşılığı; evde bakılacaklar ve servis sınırı.",
      yazi: "beko-camasir-makinesi-hata-kodlari" },
    { giris: "Beko — E10 (su alamıyor)", tip: "kod",
      anlam: "Su alamama demek; musluk, hortum ve giriş süzgeci kontrolüyle çoğu zaman evde çözülür.",
      yazi: "beko-camasir-makinesi-e10-hatasi" },
    { giris: "Siemens — E18, F21, E23", tip: "kod",
      anlam: "Her kodun anlamı, hangisinin evde çözüldüğü ve hangi noktada servis gerektiği.",
      yazi: "siemens-camasir-makinesi-hata-kodlari" },
    { giris: "Profilo — E17, E18, F21, E23", tip: "kod",
      anlam: "BSH ailesindeki bu kodların anlamı; evde çözülebilenler ve servis gerektirenler.",
      yazi: "profilo-camasir-makinesi-hata-kodlari" },
    { giris: "Vestel — E01, E02, E03", tip: "kod",
      anlam: "Kapı, su alma ve tahliye kodlarının anlamı ve evde yapılacak kontroller.",
      yazi: "vestel-camasir-makinesi-hata-kodlari" },
    { giris: "Kurutma makinesi — Arçelik ve Beko kodları", tip: "kod",
      anlam: "Arçelik E01-E05 ve Beko F01-F07 kodlarının anlamı; kod vermeyen modellerde ışık dili.",
      yazi: "kurutma-makinesi-hata-kodlari" },
    { giris: "Çalışmıyor / start almıyor", tip: "belirti",
      anlam: "Çoğu zaman priz, sigorta, kapak kilidi ya da çocuk kilididir; servisten önce bakılacak 5 nokta.",
      yazi: "camasir-makinesi-calismiyor" },
    { giris: "Sigorta attırıyor", tip: "belirti",
      anlam: "Elektrik güvenliği uyarısıdır: fişi çek, tekrar deneme; teşhis servise aittir.",
      yazi: "camasir-makinesi-sigorta-attiriyor" },
    { giris: "Su kaçırıyor / alttan su sızdırıyor", tip: "belirti",
      anlam: "Kaynak çoğu zaman deterjan çekmecesi, hortum bağlantıları ya da filtre kapağıdır; güvenli kontrol sırası.",
      yazi: "camasir-makinesi-su-kaciriyor" },
    { giris: "Çamaşırlarda leke bırakıyor", tip: "belirti",
      anlam: "Siyah-gri leke ve pas izinin kaynağı makinenin kendisidir: conta küfü, kirli tambur ya da içeride kalmış cisim.",
      yazi: "camasir-makinesi-camasirlarda-leke-birakiyor" },
    { giris: "Deterjanı almıyor / çekmecede su kalıyor", tip: "belirti",
      anlam: "Çoğu zaman su basıncı ya da tıkanmış çekmecedir; temizliği kendin yapabilirsin, giriş valfi servis işidir.",
      yazi: "camasir-makinesi-deterjan-almiyor" },
    { giris: "İçine cisim kaçtı (sütyen teli, madeni bozukluk)", tip: "belirti",
      anlam: "Cismin nereye gittiği, filtreden güvenle nasıl çıkarılacağı ve hangi durumda servisin şart olduğu.",
      yazi: "camasir-makinesine-cisim-kacti" },
    { giris: "Kurutma makinesi ısıtmıyor / soğuk üflüyor", tip: "belirti",
      anlam: "Sorun çoğu zaman hava akışında başlar: filtre, kondenser, güvenlik termiği sırasıyla izlenir.",
      yazi: "kurutma-makinesi-isitmiyor" },
    { giris: "Kurutma makinesi su tankı dolu uyarısı", tip: "belirti",
      anlam: "Tank boşken de uyarı verebilir; tankın oturuşu, şamandıra ve kondenser tıkanıklığı kontrol edilir.",
      yazi: "kurutma-makinesi-su-tanki-dolu-uyarisi" },
    { giris: "Deterjan çekmecesi: hangi göz ne için", tip: "ayar",
      anlam: "I, II ve çiçek sembollerinin anlamı, sıvı deterjanın konacağı göz ve yumuşatıcının taşma sebebi.",
      yazi: "camasir-makinesi-deterjan-cekmecesi-hangi-goz" },
    { giris: "Ne kadar elektrik harcar", tip: "ayar",
      anlam: "Enerjinin çoğu suyu ısıtmaya gider: 30-40-60 derece farkı, eko program gerçeği ve tüketimi düşüren alışkanlıklar.",
      yazi: "camasir-makinesi-ne-kadar-elektrik-harcar" },
    { giris: "Kurutma makinesi filtre ve kondenser temizliği", tip: "ayar",
      anlam: "Kurutma süresi uzadıysa ilk bakılacak yer: kapak filtresi her kurutmada, kondenser ayda bir temizlenir.",
      yazi: "kurutma-makinesi-filtre-ve-kondenser-temizligi" },
    { giris: "Kurutma makinesi ne kadar elektrik harcar", tip: "ayar",
      anlam: "Isı pompalı ve kondenserli modellerin farkı; tıkalı filtre tüketimi artırır.",
      yazi: "kurutma-makinesi-ne-kadar-elektrik-harcar" },
  ],

  "Bulaşık Makinesi": [
    { giris: "E15 (musluk işareti)", tip: "kod",
      anlam: "Tabanda su var, AquaStop taşma güvenliği devrede. Suyu boşaltmayı kendin yapabilirsin.",
      yazi: "bosch-bulasik-makinesi-e15-hatasi", rehber: true },
    { giris: "E22", tip: "kod",
      anlam: "İç (taban) filtre tıkalı, su süzülemiyor. Filtreyi çıkarıp temizleyebilirsin.",
      yazi: "bosch-bulasik-makinesi-e22-hatasi", rehber: true },
    { giris: "E24", tip: "kod",
      anlam: "Makine suyu atamıyor; genelde tıkalı filtre ya da bükük tahliye hortumu.",
      yazi: "bosch-bulasik-makinesi-e24-hatasi", rehber: true },
    { giris: "Bosch · Siemens · Profilo · Neff — tüm kodlar", tip: "kod",
      anlam: "E15, E22, E24 ve diğer kodların tek tek karşılığı.",
      yazi: "bosch-bulasik-makinesi-hata-kodlari" },
    { giris: "Marka fark etmeksizin en sık kodlar", tip: "kod",
      anlam: "Arçelik, Beko ve diğer markalarda en sık kodların ortak anlamı.",
      yazi: "bulasik-makinesi-hata-kodlari" },
    { giris: "Su atmıyor / tabanda su kalıyor", tip: "belirti",
      anlam: "En sık sebep tıkalı filtre ya da pompa; kendin bakabileceğin noktalar var.",
      yazi: "bulasik-makinesi-su-atmiyor" },
    { giris: "Su almıyor", tip: "belirti",
      anlam: "Musluk, giriş filtresi ve valf sırayla kontrol edilir.",
      yazi: "bulasik-makinesi-su-almiyor" },
    { giris: "Kurutmuyor / bulaşıklar ıslak çıkıyor", tip: "belirti",
      anlam: "Parlatıcıdan rezistansa 6 olası neden ve hangisini kendin çözebilirsin.",
      yazi: "bulasik-makinesi-kurutmuyor" },
    { giris: "Temiz yıkamıyor", tip: "belirti",
      anlam: "Püskürtme kolu, filtre, kireç ve yerleştirme kaynaklı 6 neden.",
      yazi: "bulasik-makinesi-temiz-yikamiyor" },
    { giris: "Kötü koku", tip: "belirti",
      anlam: "Tıkalı filtre, yemek artığı, kireç, kapı contası ve tahliye kaynaklı koku.",
      yazi: "bulasik-makinesi-kokuyor", rehber: true },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Arçelik — E01'den E09'a", tip: "kod",
      anlam: "Taşma, su kesik, ısıtıcı, sensör, vana ve kart hatalarının kod karşılıkları.",
      yazi: "arcelik-bulasik-makinesi-hata-kodlari" },
    { giris: "Beko — E01'den E06'ya", tip: "kod",
      anlam: "E01 taşma, E02 su kesik, E03 ısıtıcı, E04 sensör, E05 vana, E06 NTC; hangi kodda ne yapılır.",
      yazi: "beko-bulasik-makinesi-hata-kodlari" },
    { giris: "Samsung — 4C, 5C, LC, HE", tip: "kod",
      anlam: "4C su temini, 5C tahliye, LC kaçak, HE ısıtıcı demek; özellikle 4C için evde yapılacak kontroller.",
      yazi: "samsung-bulasik-makinesi-hata-kodlari" },
    { giris: "Vestel — E1, E2, E3, F1", tip: "kod",
      anlam: "Su alma, tahliye, ısıtma ve taşma kodlarının anlamı ve evde kontrol adımları.",
      yazi: "vestel-bulasik-makinesi-hata-kodlari" },
    { giris: "Siemens — E15 (musluk işareti)", tip: "kod",
      anlam: "Taban tavasına su kaçtı, AquaStop devrede; suyu güvenle boşaltma adımları ve servis sınırı.",
      yazi: "siemens-bulasik-makinesi-e15-hatasi" },
    { giris: "Alttan su kaçırıyor", tip: "belirti",
      anlam: "Sebep çoğu zaman kapı contası, hortum bağlantısı ya da taşma emniyetidir; kendin kontrol edeceklerin belli.",
      yazi: "bulasik-makinesi-su-kaciriyor" },
    { giris: "Programı bitirmiyor / sürekli çalışıyor", tip: "belirti",
      anlam: "Isıtma, su alma-boşaltma döngüsü ya da sensör kaynaklı olabilir; hangi ses normal, ne zaman servis gerekir.",
      yazi: "bulasik-makinesi-programi-bitirmiyor" },
    { giris: "Tableti eritmiyor", tip: "belirti",
      anlam: "Çoğu zaman yükleme hatası, kapağı engelleyen bir parça ya da ısınmayan sudur.",
      yazi: "bulasik-makinesi-tableti-eritmiyor" },
    { giris: "Bardakları bulanık bırakıyor", tip: "belirti",
      anlam: "Tuz-parlatıcı ayarı, kireç ya da cam korozyonu olabilir; hangisi düzelir, hangisi kalıcı.",
      yazi: "bulasik-makinesi-bardaklari-bulanik-birakiyor" },
    { giris: "Tuz lambası sönmüyor", tip: "belirti",
      anlam: "Çoğu zaman sensör gecikmesi ya da haznede kalıplaşan tuzdur; tuzun doğru konuluşu ve lambanın mantığı.",
      yazi: "bulasik-makinesi-tuz-lambasi-sonmuyor" },
    { giris: "Filtre nasıl temizlenir", tip: "ayar",
      anlam: "Alt filtreyi elle çıkarıp temizlemek 10 dakikalık iş; püskürtme kolu delikleriyle birlikte adım adım.",
      yazi: "bulasik-makinesi-filtresi-nasil-temizlenir" },
    { giris: "Tuz, sertlik ve parlatıcı ayarı", tip: "ayar",
      anlam: "Beyaz lekeli bardak ve mat tabakların çözümü deterjan değil: tuz, sertlik ayarı ve parlatıcı kademesi.",
      yazi: "bulasik-makinesi-tuzu-ve-parlatici-ayari" },
    { giris: "Makineye neler konmaz", tip: "ayar",
      anlam: "Teflon, ahşap, kristal, döküm, alüminyum ve keskin bıçak; girmemesi gerekenler ve sebepleri.",
      yazi: "bulasik-makinesine-neler-konmaz" },
    { giris: "Ne kadar elektrik ve su harcar", tip: "ayar",
      anlam: "Program başına kWh ve litre değerleri, elde yıkamayla litre kıyası ve eko programın uzun-ama-az-harcayan gerçeği.",
      yazi: "bulasik-makinesi-ne-kadar-elektrik-harcar" },
  ],

  "Kombi / Termosifon": [
    { giris: "Vaillant — F.22, F.28, F.29, F.75", tip: "kod",
      anlam: "Vaillant panelindeki F kodlarının tam listesi ve karşılıkları.",
      yazi: "vaillant-kombi-ariza-kodlari" },
    { giris: "DemirDöküm — F.22, F.28, F.29", tip: "kod",
      anlam: "Düşük su basıncı, ateşleme ve alev sönmesi kodlarının anlamı.",
      yazi: "demirdokum-kombi-ariza-kodlari" },
    { giris: "Baymak — E01, E04, E05", tip: "kod",
      anlam: "Ateşleme, düşük su basıncı ve fan kodlarının anlamı.",
      yazi: "baymak-kombi-ariza-kodlari" },
    { giris: "Marka fark etmeksizin en sık kodlar", tip: "kod",
      anlam: "Markası listede yoksa buradan bak; hangi kodda güvenle ne yapabilirsin.",
      yazi: "kombi-ariza-kodlari" },
    { giris: "Yanmıyor / ateşleme yapmıyor", tip: "belirti",
      anlam: "Gaz, su basıncı, ateşleme elektrodu ve fan sırasıyla değerlendirilir.",
      yazi: "kombi-yanmiyor" },
    { giris: "Su basıncı sürekli düşüyor", tip: "belirti",
      anlam: "Tesisat kaçağı, genleşme tankı ve emniyet ventili ayrımı.",
      yazi: "kombi-basinc-dusuyor" },
    { giris: "Sıcak su vermiyor (ısıtma çalışıyor)", tip: "belirti",
      anlam: "Plakalı eşanjör kireci, 3 yollu vana ve akış sensörü nedenleri.",
      yazi: "kombi-sicak-su-vermiyor" },
    { giris: "Yazın kapatılır mı, yaz modu nedir", tip: "ayar",
      anlam: "Yaz modu ne yapar, uzun süre kapalı kombide pompa sıkışması riski nedir.",
      yazi: "kombi-yazin-kapatilir-mi" },
  ],

  "Buzdolabı": [
    { giris: "Çalışıyor ama soğutmuyor", tip: "belirti",
      anlam: "6 olası neden ve servis çağırmadan önce kendin bakabileceğin noktalar.",
      yazi: "buzdolabi-sogutmuyor-nedenleri" },
    { giris: "Buzluk soğuk, alt bölme soğumuyor (no-frost)", tip: "belirti",
      anlam: "No-frost modellerin klasik sebebi fan ve buz çözme tarafındadır.",
      yazi: "no-frost-buzdolabi-alt-bolme-sogutmuyor" },
    { giris: "Buz tutuyor / buzlanma yapıyor", tip: "belirti",
      anlam: "Kapı contası, buz çözme arızası, tıkalı tahliye kanalı ve kapı alışkanlıkları.",
      yazi: "buzdolabi-buzlanma-yapiyor" },
    { giris: "Altında ya da sebze gözünde su birikiyor", tip: "belirti",
      anlam: "En sık sebep tıkalı tahliye deliğidir.",
      yazi: "buzdolabi-altinda-su-birikiyor" },
    { giris: "Ses yapıyor (vızıltı, tıkırtı)", tip: "belirti",
      anlam: "Hangi ses normal, hangisi arıza işareti — sesten ayrım tablosu.",
      yazi: "buzdolabi-ses-yapiyor" },
    { giris: "Kaç dereceye ayarlanmalı", tip: "ayar",
      anlam: "Soğutucu +4°C, dondurucu -18°C; yaz-kış ayar ve 1-5 kademeli düğme karşılığı.",
      yazi: "buzdolabi-kac-derece-olmali" },
    { giris: "Derin dondurucu kaç derece olmalı", tip: "ayar",
      anlam: "-18°C kuralı, şoklama ne zaman açılır, kesintide gıda kaç saat dayanır.",
      yazi: "derin-dondurucu-kac-derece-olmali" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Marka fark etmeksizin ekran kodları", tip: "kod",
      anlam: "No-frost modellerde kod mantığı; Beko E0-E4 ve Vestel E1/E5/88 kodlarının anlamı, servis noktası.",
      yazi: "buzdolabi-hata-kodlari" },
    { giris: "Samsung — 5E, 6E, 22E, 84E, OF OF", tip: "kod",
      anlam: "Kodların doğrulanmış anlamları ve OF OF demo modu tuzağı.",
      yazi: "samsung-buzdolabi-hata-kodlari" },
    { giris: "Motor çalışmıyor / tık sesi geliyor", tip: "belirti",
      anlam: "Lamba yanıyor ama motor kalkmıyorsa elektrik, başlatma rölesi ya da kompresör; tık döngüsü ne anlatır.",
      yazi: "buzdolabi-motoru-calismiyor" },
    { giris: "Çok soğutuyor, sebzeler donuyor", tip: "belirti",
      anlam: "Çoğu zaman ayar kademesi, arka duvara değen yiyecek ya da kapalı hava kanalıdır.",
      yazi: "buzdolabi-cok-sogutuyor" },
    { giris: "Gaz kaçağı şüphesi", tip: "belirti",
      anlam: "Gerçek belirtiler soğutma kaybı, hiç durmayan motor ve borulardaki yağlı iz; koku çoğu zaman başka şeydir.",
      yazi: "buzdolabi-gaz-kacagi-nasil-anlasilir" },
    { giris: "Kapısı tam kapanmıyor", tip: "belirti",
      anlam: "Çoğu zaman conta, denge ayağı ya da taşan raflardır; kâğıt testiyle contayı yokla.",
      yazi: "buzdolabi-kapisi-tam-kapanmiyor" },
    { giris: "Kapı contası bakımı", tip: "ayar",
      anlam: "Dolap çok çalışıyor, içi terliyorsa şüpheli conta: kâğıt testi ve ılık su-sabunla temizlik, 15 dakikalık iş.",
      yazi: "buzdolabi-kapi-contasi-bakimi" },
    { giris: "Nasıl temizlenir (sirke + karbonat)", tip: "ayar",
      anlam: "Kimyasalsız temizliğin adım adım yolu: raflar, conta ve arka ızgara.",
      yazi: "buzdolabi-nasil-temizlenir" },
    { giris: "Raf düzeni ve duvar mesafesi", tip: "ayar",
      anlam: "Süt neden kapı rafına konmaz, et hangi rafta durur, dolap duvardan kaç santim açık olmalı.",
      yazi: "buzdolabi-raf-duzeni-ve-duvar-mesafesi" },
    { giris: "Ne kadar elektrik harcar", tip: "ayar",
      anlam: "Günde ve yılda kaç kWh; enerji etiketi okuma ve contadan sıcak yemeğe tüketimi artıran hatalar.",
      yazi: "buzdolabi-ne-kadar-elektrik-harcar" },
    { giris: "Derin dondurucuda kalın buz — buz çözme", tip: "ayar",
      anlam: "Yiyecekleri soğuk zincirde koruyarak, sivri alet kullanmadan güvenli buz çözme uygulaması.",
      yazi: "derin-dondurucu-buz-cozme" },
  ],

  "Klima": [
    { giris: "Az üflüyor / hava akışı zayıf", tip: "belirti",
      anlam: "En sık sebep kirli filtredir; filtreyi kendin temizleyebilirsin.",
      yazi: "klima-filtresi-temizleme", rehber: true },
    { giris: "Soğutmuyor", tip: "belirti",
      anlam: "Kirli filtreden gaz kaçağına kadar 6 olası neden ve ayrım yöntemi.",
      yazi: "klima-sogutmuyor-nedenleri" },
    { giris: "Hiç açılmıyor / çalışmıyor", tip: "belirti",
      anlam: "Elektrik, kumanda, kapasitör ve elektronik kart kaynaklı nedenler.",
      yazi: "klima-calismiyor" },
    { giris: "İç ünite su damlatıyor", tip: "belirti",
      anlam: "En sık sebep tıkalı tahliye hattıdır.",
      yazi: "klima-su-damlatiyor" },
    { giris: "Küf, rutubet ya da yanık kokusu", tip: "belirti",
      anlam: "Hangi koku neyin işareti; kendin ne yapabilirsin, ne zaman servis gerekir.",
      yazi: "klima-koku-yapiyor" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Vestel · Arçelik · Daikin — E2, E5, 88, U4", tip: "kod",
      anlam: "Split klimalarda kod okuma mantığı, üç markanın doğrulanmış kodları ve servis sınırı.",
      yazi: "klima-ariza-kodlari" },
    { giris: "Dış ünite temizliği", tip: "ayar",
      anlam: "Sökmeden, dışarıdan temizliğin yolu; hortumla yıkamanın neden yasak olduğu ve yükseklik uyarısı.",
      yazi: "klima-dis-unite-temizligi" },
  ],

  "Fırın / Ocak / Aspiratör": [
    { giris: "Ocak ateşleme yapmıyor / kıvılcım yok", tip: "belirti",
      anlam: "Çakmak çakıyor ama ocak yanmıyorsa önce başlık temizliği, buji ve gaz akışı.",
      yazi: "ocak-atesleme-yapmiyor" },
    { giris: "Ateşleme bujisi değişmeli mi", tip: "belirti",
      anlam: "Bujiyi değiştirmeden önce denenecek 3 şey ve bu işin neden servis işi olduğu.",
      yazi: "ocak-atesleme-bujisi-degisimi" },
    { giris: "Fırın ısınmıyor ya da geç ısınıyor", tip: "belirti",
      anlam: "Rezistans, termostat, fan ve kart ayrımı; servis çağırmadan önce kontroller.",
      yazi: "firin-isinmiyor" },
    { giris: "Aspiratör çekmiyor ya da koku yapıyor", tip: "belirti",
      anlam: "Bu arıza için kendin-çöz adımı yayınlamadık; ölçüm ve yetki isteyen bir iş." },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Fırın eşit pişirmiyor (altı çiğ, üstü yanık)", tip: "belirti",
      anlam: "Tepsi konumu, dönmeyen fan ya da alt rezistans olabilir; kızarma testiyle ayrımı kendin yaparsın.",
      yazi: "firin-esit-pisirmiyor" },
    { giris: "Fırın kapağı açılmıyor / kilitli kaldı", tip: "belirti",
      anlam: "Çoğu zaman piroliz sonrası soğuma süresi ya da çocuk kilididir; kapıyı zorlamadan kontrol sırası.",
      yazi: "firin-kapagi-acilmiyor" },
    { giris: "Ocak alevi sarı ya da turuncu yanıyor", tip: "belirti",
      anlam: "Eksik yanma işaretidir, karbonmonoksit riski taşır; hangi durumda ocak kapatılır, ne güvenle temizlenir.",
      yazi: "ocak-alevi-sari-yaniyor" },
    { giris: "Elini çekince ocak sönüyor", tip: "belirti",
      anlam: "Çoğu zaman arıza değil, gaz emniyeti devrededir; termokupl mantığı ve 10-15 saniye basılı tutma tekniği.",
      yazi: "ocak-gaz-emniyeti-sonduruyor" },
    { giris: "Davlumbaz yağ filtresi temizliği", tip: "ayar",
      anlam: "Alüminyum filtre elde ya da makinede yıkanır; karbon filtre yıkanmaz, değiştirilir.",
      yazi: "davlumbaz-yag-filtresi-nasil-temizlenir" },
    { giris: "Fırın ne kadar elektrik harcar", tip: "ayar",
      anlam: "Saatte kaç kWh; sıcaklık-süre etkisi, ön ısıtma, turbo/fan modu ve kapak açma alışkanlığı.",
      yazi: "firin-ne-kadar-elektrik-harcar" },
  ],

  "Televizyon / Monitör": [
    { giris: "Açılmıyor / standby ışığı yanıp sönüyor", tip: "belirti",
      anlam: "Güç kaynağı, kondansatör ve anakart ayrımı + kendin yapabileceğin kontroller.",
      yazi: "tv-acilmiyor" },
    { giris: "Ses var, görüntü yok", tip: "belirti",
      anlam: "Kaynak/kablo, arka ışık (backlight), panel ve güç kartı kaynaklı nedenler.",
      yazi: "televizyon-goruntu-gelmiyor" },
    { giris: "Ekranda çizgi, leke ya da kırık panel", tip: "belirti",
      anlam: "Dikey ve yatay çizgi farklı yerleri işaret eder; kablo ve kaynak elemeleri evde yapılır, panel işi serviste.",
      yazi: "tv-ekraninda-cizgi-var" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Ekran kendiliğinden kararıyor", tip: "belirti",
      anlam: "Çoğu zaman güç tasarrufu ayarı ya da ortam ışığı sensörüdür; kontrol sırası belli.",
      yazi: "tv-ekrani-karariyor" },
    { giris: "HDMI girişinde sinyal yok", tip: "belirti",
      anlam: "Sorun çoğu zaman TV'de değil, kabloda ya da kaynak cihazdadır; doğru eleme sırasıyla evde bulunur.",
      yazi: "tv-hdmi-sinyal-yok" },
    { giris: "Monitör sinyal yok diyor, bilgisayar açık", tip: "belirti",
      anlam: "Kablo, yanlış giriş ya da ekran kartı çıkışı olabilir; eleme sırasıyla sorunu evde bul.",
      yazi: "monitor-sinyal-yok" },
  ],

  "Mikrodalga / Air Fryer": [
    { giris: "Çalışıyor ama ısıtmıyor", tip: "belirti",
      anlam: "Magnetron, yüksek voltaj kapasitörü, kapı arızası ve düşük voltaj nedenleri.",
      yazi: "mikrodalga-isitmiyor" },
    { giris: "Hiç çalışmıyor / düğme-ekran tepki vermiyor", tip: "belirti",
      anlam: "Cihazın içi yüksek voltaj taşır; kapağı açmak kendin-çöz kapsamına girmez." },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Mikrodalga kıvılcım çıkarıyor", tip: "belirti",
      anlam: "Önce cihazı durdur; metal kap, yaldızlı tabak ve mika plakadaki yağ birikmesi en sık sebepler.",
      yazi: "mikrodalga-kivilcim-cikariyor" },
    { giris: "Airfryer — fan çalışıyor, ısıtmıyor", tip: "belirti",
      anlam: "Suçlu çoğu zaman rezistans değil, tam oturmamış sepettir; güvenlik anahtarı ısıtıcıyı kilitler.",
      yazi: "airfryer-isitmiyor" },
  ],

  "Süpürge": [
    { giris: "Çekmiyor / emiş zayıf", tip: "belirti",
      anlam: "Dolu hazne, tıkalı filtre, tıkanan hortum, aşınmış fırça ve motor ayrımı.",
      yazi: "supurge-cekmiyor" },
    { giris: "Şarj tutmuyor", tip: "belirti",
      anlam: "Batarya döngü ömrü ve tıkalı filtrenin süreye etkisi; gerçekçi beklenti ve değişim yolu.",
      yazi: "sarjli-supurge-sarj-tutmuyor" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Robot süpürge şarj olmuyor", tip: "belirti",
      anlam: "Çoğu zaman temas pinlerindeki kir ya da istasyonun yeridir; batarya ne zaman servise kalır.",
      yazi: "robot-supurge-sarj-olmuyor" },
    { giris: "Robot süpürgenin fırçası dönmüyor", tip: "belirti",
      anlam: "Çoğu zaman dolanan saç ve iptir, motor arızası nadirdir; hangi temizliği güvenle kendin yaparsın.",
      yazi: "robot-supurge-firca-donmuyor" },
    { giris: "Robot süpürge haritayı karıştırıyor / kayboluyor", tip: "belirti",
      anlam: "Sensör kiri, ayna-cam etkisi ya da taşınan dock olabilir; sıfırlamadan önce denenecekler.",
      yazi: "robot-supurge-haritalama-sorunu" },
  ],

  // ——— SU SEBİLİ / ARITMA (20 Ağu 2026) ———
  // Yazılar 19 Ağu'da yayına alınmıştı (PR #52) ama /tamir/ blog yazısından DEĞİL bu
  // dosyadan besleniyor; kayıt açılmadığı için hub'da "İçerik yok" görünüyordu.
  // `anlam` satırları yazıların KENDİ ilk bölüm başlıklarından türetildi, uydurulmadı.
  "Su Sebili / Arıtma": [
    { giris: "Soğuk su vermiyor / üstü buz tutuyor", tip: "belirti",
      anlam: "Çoğu durumda ayar kademesi düşüktür ya da arka havalandırma kapalıdır; ikisini de kendin kontrol edebilirsin.",
      yazi: "su-sebili-sogutmuyor" },
    { giris: "Altında su birikiyor", tip: "belirti",
      anlam: "En yaygın sebep dolan damlama tepsisi ve tam kapanmayan musluktur; damacananın oturuşunu da kontrol et.",
      yazi: "su-sebili-altinda-su-birikiyor" },
    { giris: "Arıtmadan su gelmiyor", tip: "belirti",
      anlam: "Önce giriş vanasına ve şebeke basıncına bak; tortu filtresi tıkalıysa akış durur.",
      yazi: "su-aritma-su-gelmiyor" },
  ],
  // ——— BİLGİSAYAR / YAZICI (20 Ağu 2026) ———
  "Bilgisayar / Yazıcı": [
    { giris: "Yazıcı çevrimdışı görünüyor", tip: "belirti",
      anlam: "Genellikle yazıcı uykudadır ya da bilgisayar yanlış yazıcıya gönderiyordur; kuyruğu sıfırlamak çoğu vakayı çözer.",
      yazi: "yazici-cevrimdisi-gorunuyor" },
    { giris: "Kâğıt çekmiyor", tip: "belirti",
      anlam: "Kâğıt nemli ya da yapraklar birbirine yapışmış olabilir; tepsi kılavuzlarını ve deste yüksekliğini de kontrol et.",
      yazi: "yazici-kagit-cekmiyor" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Bilgisayar açılıyor ama ekran gelmiyor", tip: "belirti",
      anlam: "Önce monitör ve kablo elenir, sonra bip ve ışık sinyalleri okunur; hangi kontrol sana ait, hangisi servise.",
      yazi: "bilgisayar-acilmiyor-ekran-gelmiyor" },
    { giris: "Laptop ısınıyor, fan sesi kesilmiyor", tip: "belirti",
      anlam: "Çoğu zaman tıkalı hava kanalı ya da arka plan programlarıdır; hangi iş servise kalır.",
      yazi: "laptop-isiniyor-fan-sesi" },
    { giris: "Laptop şarj olmuyor", tip: "belirti",
      anlam: "Önce adaptör, kablo ve priz elenir; yüzde 80'de duran şarj çoğu zaman batarya koruma modudur.",
      yazi: "laptop-sarj-olmuyor" },
    { giris: "Yazıcı kartuşu tanımıyor", tip: "belirti",
      anlam: "Çoğu zaman temas noktası kirli ya da çip sorunludur; çıkar-tak, kuru bezle temizlik ve sürücü sıfırlama.",
      yazi: "yazici-kartus-tanimiyor" },
    { giris: "Yazıcı silik basıyor", tip: "belirti",
      anlam: "İlk şüpheli tıkalı püskürtme başlığıdır ve temizliği yazılımdan güvenle yapılır; nozzle check okuma.",
      yazi: "yazici-silik-basiyor" },
    { giris: "Yazıcı Wi-Fi'a bağlanmıyor", tip: "belirti",
      anlam: "Sıra önemli: önce modem, sonra yazıcı; çoğu yazıcı yalnız 2.4GHz destekler, WPS ve port kontrolüyle eleme.",
      yazi: "yazici-wifi-baglanmiyor" },
  ],
};

/**
 * Bir cihazın ① katman kayıtlarını döndürür. Sıra sabittir: önce KOD, sonra BELİRTİ, sonra AYAR
 * (kullanıcı elindeki kodla gelir; kodu yoksa belirtiye, o da yoksa ayara bakar).
 * Kaydı olmayan cihazda boş dizi döner → sayfa basılmaz, hub'da dürüst "yok" kartı kalır.
 */
export const HATA_KODU_SIRA = ["kod", "belirti", "ayar"];

export function hataKoduKayitlari(cihaz) {
  const liste = HATA_KODU_KATMANI[cihaz] || [];
  return HATA_KODU_SIRA.flatMap((t) => liste.filter((k) => k.tip === t));
}

/** Sayfada grup başlığı olarak basılan etiketler (tip → görünen ad). */
export const TIP_BASLIK = {
  kod: "Hata kodundan başla",
  belirti: "Belirtiden başla",
  ayar: "Ayar ve kullanım",
};

/** Kart üstündeki küçük etiket. Kendi rehberimiz varsa o öne çıkar (② kendin-çöz katmanı). */
export const TIP_ETIKET = { kod: "Hata kodu", belirti: "Belirti", ayar: "Ayar" };
