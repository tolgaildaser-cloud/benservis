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
      yazi: "camasir-makinesi-kokuyor" },
    { giris: "Hangi çamaşır kaç derecede yıkanır", tip: "ayar",
      anlam: "30-40-60-90 derece seçimi ve makinede koku yapmaması için tek kural.",
      yazi: "camasir-kac-derecede-yikanir" },
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
      yazi: "bulasik-makinesi-kokuyor" },
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
  ],

  "Televizyon / Monitör": [
    { giris: "Açılmıyor / standby ışığı yanıp sönüyor", tip: "belirti",
      anlam: "Güç kaynağı, kondansatör ve anakart ayrımı + kendin yapabileceğin kontroller.",
      yazi: "tv-acilmiyor" },
    { giris: "Ses var, görüntü yok", tip: "belirti",
      anlam: "Kaynak/kablo, arka ışık (backlight), panel ve güç kartı kaynaklı nedenler.",
      yazi: "televizyon-goruntu-gelmiyor" },
    { giris: "Ekranda çizgi, leke ya da kırık panel", tip: "belirti",
      anlam: "Panel işi kendin-çöz kapsamına girmez; yerinde bakılması gerekir." },
  ],

  "Mikrodalga / Air Fryer": [
    { giris: "Çalışıyor ama ısıtmıyor", tip: "belirti",
      anlam: "Magnetron, yüksek voltaj kapasitörü, kapı arızası ve düşük voltaj nedenleri.",
      yazi: "mikrodalga-isitmiyor" },
    { giris: "Hiç çalışmıyor / düğme-ekran tepki vermiyor", tip: "belirti",
      anlam: "Cihazın içi yüksek voltaj taşır; kapağı açmak kendin-çöz kapsamına girmez." },
  ],

  "Süpürge": [
    { giris: "Çekmiyor / emiş zayıf", tip: "belirti",
      anlam: "Dolu hazne, tıkalı filtre, tıkanan hortum, aşınmış fırça ve motor ayrımı.",
      yazi: "supurge-cekmiyor" },
    { giris: "Şarj tutmuyor", tip: "belirti",
      anlam: "Şarjlı modellerde batarya işi; kendin-çöz adımı yayınlamadık." },
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
