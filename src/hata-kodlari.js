import { tabloBul } from "./constants.js";
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
    // ——— 23 Ağu 2026, YK #31 seçenek (c): yeni rehber ———
    { giris: "Çamaşırlar soğuk yıkanıyor / makine ısıtmıyor", tip: "belirti",
      anlam: "Makine kod vermeden soğuk yıkar; rezistans, sensör ve kart ayrımı ile ücretsiz eleme.",
      yazi: "camasir-makinesi-isitmiyor", rehber: true },
    { giris: "Bosch · Siemens · Neff — E ve F kodları", tip: "kod",
      // 22 Ağu (TARAMA-1): F21 ve F63 çıkarıldı — ikisi de 5 BSH bölge sitesinde ve
      // 5 kılavuzda yok. BSH'nin tahrik kodu E80. (Yazının gövdesi ayrıca ele alınacak.)
      anlam: "E16, E17, E18, E23, E80… hangi kod ne demek, hangisi evde çözülür hangisi servis ister.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // 22 Ağu 2026 (TARAMA-1): kod ailesi düzeltildi. Üreticinin çamaşır makinesi listesi
    // TEK HANELİ (E5·E8·E12·E17·E18·E27·E29·E84·Err·SC); E01–E11 bandı ve H1/H4/H5 yok.
    // Listede ayrı bir KAPI KİLİDİ ve ayrı bir ISITMA kodu da yok — eski giriş ikisini
    // de sayıyordu. Grundig kendi kod tablosunu yayımlamadığı için başlıktan çıkarıldı.
    { giris: "Arçelik · Beko — E5, E8, E12, E17, E18", tip: "kod",
      anlam: "Üreticinin yayımladığı on kodun karşılığı; hangisi evde çözülür, hangisi servis ister.",
      yazi: "arcelik-camasir-makinesi-hata-kodlari" },
    { giris: "LG — IE, OE, UE, dE", tip: "kod",
      anlam: "LG panelindeki iki harfli kodların anlamı ve hangisini kendin çözebilirsin.",
      yazi: "lg-camasir-makinesi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): "C yeni / E eski" kronolojisi yazıdan kaldırıldı — Samsung
    // bunu model VARYANTI olarak veriyor ("modeline bağlı olarak NF veya 1 4C").
    { giris: "Samsung — 4E/4C, 5E/5C, UE (TR'de E1, E2, E4)", tip: "kod",
      anlam: "Samsung'un su alma, tahliye ve denge kodlarının karşılığı ve model varyantları.",
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
      yazi: "camasir-makinesi-su-almiyor", rehber: true },
    { giris: "Sıkarken ses ve titreşim", tip: "belirti",
      anlam: "Nakliye cıvatası, dengesizlik, yabancı cisim ve rulman ayrımı nasıl yapılır.",
      yazi: "camasir-makinesi-ses-titresim", rehber: true },
    { giris: "Küf / rutubet kokusu", tip: "belirti",
      anlam: "Kapı contası, deterjan çekmecesi, filtre ve kireç kaynaklı kokunun nedenleri.",
      yazi: "camasir-makinesi-kokuyor", rehber: true },
    { giris: "Hangi çamaşır kaç derecede yıkanır", tip: "ayar",
      anlam: "30-40-60-90 derece seçimi ve makinede koku yapmaması için tek kural.",
      yazi: "camasir-kac-derecede-yikanir" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Beko — E5, E8, E12, E27, E29, Err, SC", tip: "kod",
      anlam: "Beko'nun yayımladığı on kodun karşılığı; evde bakılacaklar ve servis sınırı.",
      yazi: "beko-camasir-makinesi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): Beko listesinde E10 YOK — su alma kodu E8. Yazının adresi
    // korundu (arama gerçek), girişi doğrusuna çevrildi.
    { giris: "Beko — su alamıyor (aranan kod E10, doğrusu E8)", tip: "kod",
      anlam: "Musluk, hortum ve giriş süzgeci kontrolüyle çoğu zaman evde çözülür.",
      yazi: "beko-camasir-makinesi-e10-hatasi" },
    { giris: "Siemens — E18, F21, E23", tip: "kod",
      anlam: "Her kodun anlamı, hangisinin evde çözüldüğü ve hangi noktada servis gerektiği.",
      yazi: "siemens-camasir-makinesi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): F21 çıkarıldı — BSH'nin hiçbir bölge sitesinde ve kılavuzunda
    // yok. Tahrik/motor kodu E80. Bosch TR'nin yayımladığı liste: E16-E20, E23, E25-E28.
    { giris: "Profilo — E17, E18, E23 (F21 yok)", tip: "kod",
      anlam: "BSH ailesindeki bu kodların anlamı; evde çözülebilenler ve servis gerektirenler.",
      yazi: "profilo-camasir-makinesi-hata-kodlari" },
    // 22 Ağu (TARAMA-1 kalan tur): E04 eklendi — 5 resmî kılavuzda var, bizde eksikti.
    // Vestel'in çamaşır tablosu bu dört kodla sınırlı; E05+ resmî kılavuzda yok.
    { giris: "Vestel — E01, E02, E03, E04", tip: "kod",
      anlam: "Kapı, su alma, tahliye ve aşırı su kodlarının anlamı ve evde yapılacak kontroller.",
      yazi: "vestel-camasir-makinesi-hata-kodlari" },
    { giris: "Çalışmıyor / start almıyor", tip: "belirti",
      anlam: "Çoğu zaman priz, sigorta, kapak kilidi ya da çocuk kilididir; servisten önce bakılacak 5 nokta.",
      yazi: "camasir-makinesi-calismiyor" },
    { giris: "Sigorta attırıyor", tip: "belirti",
      anlam: "Elektrik güvenliği uyarısıdır: fişi çek, tekrar deneme; teşhis servise aittir.",
      yazi: "camasir-makinesi-sigorta-attiriyor" },
    { giris: "Su kaçırıyor / alttan su sızdırıyor", tip: "belirti",
      anlam: "Kaynak çoğu zaman deterjan çekmecesi, hortum bağlantıları ya da filtre kapağıdır; güvenli kontrol sırası.",
      yazi: "camasir-makinesi-su-kaciriyor", rehber: true },
    { giris: "Çamaşırlarda leke bırakıyor", tip: "belirti",
      anlam: "Siyah-gri leke ve pas izinin kaynağı makinenin kendisidir: conta küfü, kirli tambur ya da içeride kalmış cisim.",
      yazi: "camasir-makinesi-camasirlarda-leke-birakiyor" },
    { giris: "Deterjanı almıyor / çekmecede su kalıyor", tip: "belirti",
      anlam: "Çoğu zaman su basıncı ya da tıkanmış çekmecedir; temizliği kendin yapabilirsin, giriş valfi servis işidir.",
      yazi: "camasir-makinesi-deterjan-almiyor" },
    { giris: "İçine cisim kaçtı (sütyen teli, madeni bozukluk)", tip: "belirti",
      anlam: "Cismin nereye gittiği, filtreden güvenle nasıl çıkarılacağı ve hangi durumda servisin şart olduğu.",
      yazi: "camasir-makinesine-cisim-kacti" },
    { giris: "Deterjan çekmecesi: hangi göz ne için", tip: "ayar",
      anlam: "I, II ve çiçek sembollerinin anlamı, sıvı deterjanın konacağı göz ve yumuşatıcının taşma sebebi.",
      yazi: "camasir-makinesi-deterjan-cekmecesi-hangi-goz" },
    { giris: "Ne kadar elektrik harcar", tip: "ayar",
      anlam: "Enerjinin çoğu suyu ısıtmaya gider: 30-40-60 derece farkı, eko program gerçeği ve tüketimi düşüren alışkanlıklar.",
      yazi: "camasir-makinesi-ne-kadar-elektrik-harcar" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    { giris: "Bosch · Siemens — E18", tip: "kod",
      anlam: "Makine suyu atamıyor: tahliye pompası, filtre ve hortum sırasıyla eleniyor; çoğu evde çözülüyor.",
      yazi: "bosch-camasir-makinesi-e18-hatasi" },
    { giris: "Vestel — E03", tip: "kod",
      anlam: "Tahliye süresi aşıldı demek; pompa filtresi ve gider hortumu kontrolüyle başlıyorsun.",
      yazi: "vestel-camasir-makinesi-e03-hatasi" },
    { giris: "Su alıyor ama tambur dönmüyor", tip: "belirti",
      anlam: "Kayış, motor kömürü, kapı kilidi ve program ayrımı; hangisi evde bakılır hangisi servis işi.",
      yazi: "camasir-makinesi-tambur-donmuyor" },
    { giris: "Hızlı program ne zaman kullanılır", tip: "ayar",
      anlam: "Hızlı program hangi kirde işe yarar, hangisinde yıkamayı yarım bırakır.",
      yazi: "camasir-makinesi-hizli-program-ne-zaman" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    // 22 Ağu (TARAMA-1): Grundig kendi kod tablosunu YAYIMLAMIYOR; kılavuzlarında kod
    // değil belirti tablosu var. Eski giriş doğrulanmamış altı kod sayıyordu.
    { giris: "Grundig — kod tablosu yok, belirti tablosu var", tip: "kod",
      anlam: "Grubun yayımladığı ortak liste, kılavuzdaki belirti-sebep tablosu ve evdeki kontroller.",
      yazi: "grundig-camasir-makinesi-hata-kodlari" },
    { giris: "Kireç ve tambur temizliği (planlı bakım)", tip: "ayar",
      anlam: "Boş bakım yıkaması ne sıklıkta, kapak lastiğinin katları ve suyun sertliğiyle ilişkisi.",
      yazi: "camasir-makinesi-kirec-ve-tambur-temizligi" },
  // ——— 14 Eyl 2026 (FE, PAZ bulgusu): bu 22 kayıt 21 Ağu genişletmesinde YANLIŞLIKLA
  // "Kurutma Makinesi" dizisine girmişti — hepsinin yazısı `camasir-makinesi-*`. Sonuç:
  // /tamir/kurutma-makinesi/ 22 çamaşır girişi listeliyordu, 4 çamaşır yazısı çamaşır
  // sayfasında hiç yoktu, çamaşır yazılarının alt bağı kurutma hub'ına gidiyordu.
  // METİN AYNEN taşındı; yalnız hangi cihazın altında durdukları değişti.
    { giris: "Program bitti ama kapak açılmıyor", tip: "belirti",
      anlam: "Kilit program bitiminden 1-3 dakika sonra çözülür; kazanda su varsa makine kapağı bilerek açmaz.",
      yazi: "camasir-makinesi-kapagi-acilmiyor", rehber: true },
    { giris: "Sıkma yapmıyor, çamaşırlar sırılsıklam çıkıyor", tip: "belirti",
      anlam: "Çoğu zaman makinenin kendini koruma davranışıdır: yük dengesi, seçili devir, kalan su ve makinenin terazisi sırayla bakılır.",
      yazi: "camasir-makinesi-santrifuj-yapmiyor" },
    { giris: "Tambur suyla dolu kaldı, program bitmiyor", tip: "belirti",
      anlam: "Makine suyu boşaltamazsa son adıma geçemez; ilk durak alt kapaktaki tahliye filtresidir.",
      yazi: "camasir-makinesi-su-atmiyor" },
    { giris: "Program kaç saat sürer (pamuklu 60, sentetik 40)", tip: "ayar",
      anlam: "Üretici kılavuzlarından derlenen gerçekçi süre bantları; ekrandaki ilk süre bir tahmindir, makine yükü tartınca güncellenir.",
      yazi: "camasir-makinesi-program-sureleri" },
    { giris: "Suyu boşaltmadan durdu", tip: "belirti",
      anlam: "Tahliye tarafında tıkanıklık işareti: filtre, hortum ve yük dengesi kontrol edilir.",
      yazi: "camasir-makinesi-su-atmiyor" },
    { giris: "Filtreyi temizledim ama su yine gitmiyor", tip: "belirti",
      anlam: "Filtre temiz ve hortum açıkken su hâlâ boşalmıyorsa sıra tahliye pompasına gelir; burası servis sınırıdır.",
      yazi: "camasir-makinesi-su-atmiyor" },
    { giris: "Tek parça yıkarken sıkmıyor (yorgan, halı, kot)", tip: "belirti",
      anlam: "Tek büyük parça dönerken bir tarafta toplanır, makine bunu dengesizlik okur ve devri düşürür; yanına birkaç havlu eklemek yükü dağıtır.",
      yazi: "camasir-makinesi-santrifuj-yapmiyor" },
    { giris: "Hızlanmaya çalışıyor, vazgeçip tekrar deniyor", tip: "belirti",
      anlam: "Klasik dengesizlik davranışıdır, arıza sesi değil; yükü elle dağıtıp sıkma programını tekrarlamak çoğu vakayı bitirir.",
      yazi: "camasir-makinesi-santrifuj-yapmiyor" },
    { giris: "Elektrik kesildi, kapak kilitli kaldı", tip: "belirti",
      anlam: "Kilit elektrikle çözülür; çoğu ön yüklemeli modelde alt kapağın arkasında mekanik acil açma kolu bulunur.",
      yazi: "camasir-makinesi-kapagi-acilmiyor" },
    { giris: "Göstergedeki kilit simgesi sönmüyor", tip: "belirti",
      anlam: "Simge yanarken kapak açılmaz; kazanda kalan su ya da yüksek sıcaklık kilidi tutar. Kapağı zorlamak kilit dilini ve menteşeyi kırar.",
      yazi: "camasir-makinesi-kapagi-acilmiyor" },
    { giris: "Sıkma sırasında yerinden oynuyor / yürüyor", tip: "belirti",
      anlam: "Önce nakliye cıvatası, zemin ve ayak ayarı; hangi noktadan sonra rulman tarafına geçildiği yazıda.",
      yazi: "camasir-makinesi-ses-titresim" },
    { giris: "Tamburdan tak tak sesi geliyor", tip: "belirti",
      anlam: "Yabancı cisim, dengesizlik ve rulman ayrımının nasıl yapılacağı.",
      yazi: "camasir-makinesi-ses-titresim" },
    { giris: "Musluk açık ama tambur dolmuyor", tip: "belirti",
      anlam: "Musluk, su giriş süzgeci ve hortum sırayla aklanır; sonrası servis sınırıdır.",
      yazi: "camasir-makinesi-su-almiyor" },
    { giris: "Program başında uzun süre bekliyor, su yavaş geliyor", tip: "belirti",
      anlam: "Su yeterince hızlı gelmiyorsa kısık musluk ya da kireçlenmiş giriş süzgeci akla gelir.",
      yazi: "camasir-makinesi-su-almiyor" },
    { giris: "Panel hiç yanmıyor, makine ölü", tip: "belirti",
      anlam: "Priz, sigorta ve fiş sırasıyla aklanır; panel hâlâ tepkisizse elektronik kart sınırındasın.",
      yazi: "camasir-makinesi-calismiyor" },
    { giris: "Arkadan, hortum bağlantısından su geliyor", tip: "belirti",
      anlam: "Suyun geldiği yön kaynağı söyler: arkadan gelen su çoğu zaman musluk ve hortum bağlantılarıdır.",
      yazi: "camasir-makinesi-su-kaciriyor" },
    { giris: "Tahliye filtresini hiç temizlemedim, nasıl yapılır", tip: "ayar",
      anlam: "Alt kapaktaki filtrenin 6 adımda güvenle çıkarılması, temizlenmesi ve yerine takılması.",
      yazi: "camasir-makinesi-tahliye-filtresi-temizleme" },
    { giris: "Yıkanan çamaşırlar kokulu çıkıyor", tip: "belirti",
      anlam: "Koku kaynağı çoğu zaman makinenin kendisidir: kapı contası, çekmece, filtre ve kireç sırayla ele alınır.",
      yazi: "camasir-makinesi-kokuyor" },
    { giris: "Çamaşırlarda pas izi çıkıyor", tip: "belirti",
      anlam: "Pas izi içeride kalmış bir metali işaret eder; siyah-gri lekenin adresi ise kapak contası ve kirli tamburdur.",
      yazi: "camasir-makinesi-camasirlarda-leke-birakiyor" },
    { giris: "Yıkama bitti, çekmecede deterjan kaldı", tip: "belirti",
      anlam: "Çoğu zaman su basıncı ya da tıkanmış çekmece kanallarıdır; temizliği kendin yaparsın, giriş valfi servis işidir.",
      yazi: "camasir-makinesi-deterjan-almiyor" },
    { giris: "Yumuşatıcı gözü taşıyor", tip: "ayar",
      anlam: "Taşmanın anatomisi: doğru göz, doğru seviye ve sık yapılan üç yanlış.",
      yazi: "camasir-makinesi-deterjan-cekmecesi-hangi-goz" },
    { giris: "Elektrik tüketimi birden arttı", tip: "ayar",
      anlam: "Enerjinin çoğu suyu ısıtmaya gider; aynı programda tüketimin belirgin artması bir sinyal olabilir.",
      yazi: "camasir-makinesi-ne-kadar-elektrik-harcar" },
    // ——— 27 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://statik.vestel.com.tr/webfiles/20264687_k.pdf · md5 7a5f38c8ae4890b1b1e7e691f2de1950
    { giris: "Vestel — E01", tip: "kod",
      anlam: "Vestel'e göre kapı açık kalmış: kapağı kilitlendiğini duyana kadar kapat; sürerse fişi çek, yetkili servis.",
      yazi: "vestel-camasir-makinesi-e01-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20264687_k.pdf · md5 7a5f38c8ae4890b1b1e7e691f2de1950
    { giris: "Vestel — E02", tip: "kod",
      anlam: "Su basıncı ya da kazan su seviyesi düşük: musluğu sonuna kadar aç, su kesik mi bak; sürerse fişi çek, musluğu kapat, servis.",
      yazi: "vestel-camasir-makinesi-e02-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20264687_k.pdf · md5 7a5f38c8ae4890b1b1e7e691f2de1950
    { giris: "Vestel — E04", tip: "kod",
      anlam: "Makinede aşırı miktarda su var: makine suyu kendisi boşaltır; sonra kapat, fişi çek, musluğu kapat, danışma hattını ara.",
      yazi: "vestel-camasir-makinesi-hata-kodlari" },
    // ——— 28 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e16-veya-f16-camasir-makinesi · md5 5795d9056ffddd2465eaad88731efc7a
    { giris: "Bosch — E16 / F16", tip: "kod",
      anlam: "Bosch'a göre kapak açık: kapağı kapat, arada çamaşır kalmış mı bak; düzelmezse servis randevusu.",
      yazi: "bosch-camasir-makinesi-e16-hatasi" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e17-veya-f17-camasir-makinesi · md5 d8552693d09f4df45a60591f84d4cd8b
    { giris: "Bosch — E17 / F17", tip: "kod",
      anlam: "Su besleme süresi aşıldı: musluk, giriş hortumu ve giriş süzgeci kontrolüyle başlanır.",
      yazi: "bosch-camasir-makinesi-e17-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001709506_A.pdf · md5 23d5ed1b30b9787b05f53f1137de1679
    { giris: "Bosch — E:30-10 (musluk sembolü)", tip: "kod",
      anlam: "Yeni nesil modellerde su girişi sorunu: musluk, hortum, basınç ve süzgeç; makine boşaltır, 5 dakika sonra kapat-aç.",
      yazi: "bosch-camasir-makinesi-e30-10-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001709506_A.pdf · md5 23d5ed1b30b9787b05f53f1137de1679
    { giris: "Bosch — E:30-20", tip: "kod",
      anlam: "Yeni nesil modellerde manyetik valf ya da kritik fonksiyon arızası; Bosch musluğu kapatıp müşteri hizmetlerini aramayı istiyor.",
      yazi: "bosch-camasir-makinesi-e30-10-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001709506_A.pdf · md5 23d5ed1b30b9787b05f53f1137de1679
    { giris: "Bosch — E:30-80 / E:36-10", tip: "kod",
      anlam: "Yeni nesil modellerde su tahliye edilemiyor: hortum, 1 metre yükseklik sınırı ve pis su pompası temizliği.",
      yazi: "bosch-camasir-makinesi-e30-80-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001708433_H.pdf · md5 a02d83edad66dc95cd9392b467b767f1
    { giris: "Bosch — E:36-25 / E:38-25", tip: "kod",
      anlam: "Deterjanlı su pompası tıkanmış: pompa temizliği; E:38'de önce tambur temizliği.",
      yazi: "bosch-camasir-makinesi-e30-80-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001006315_I.pdf · md5 ae469964e1edcc11a031b297303113a8
    { giris: "Bosch — E32 / H:32 / E:60-2B", tip: "kod",
      anlam: "Bosch'a göre arıza değil: çamaşırlar eşit dağılmadığı için sıkma durdu; yeniden dağıtıp yeniden sık.",
      yazi: "bosch-camasir-makinesi-e32-hatasi" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e19-veya-f19-camasir-makinesi · md5 d785aec574d9f7542dd4197503e711ae
    { giris: "Bosch — E19 / F19", tip: "kod",
      anlam: "Isıtma süresi aşıldı; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e20-veya-f20-camasir-makinesi · md5 58441d17d072e53212a29d43c2b3e6ae
    { giris: "Bosch — E20 / F20", tip: "kod",
      anlam: "Beklenmeyen ısınma; Bosch önce makineyi açıp kapatarak sıfırlamayı öneriyor, sürerse servis.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e23-veya-f23-camasir-makinesi · md5 30a2705ab6ade4ad766649c8b2dc5947
    { giris: "Bosch — E23 / F23", tip: "kod",
      anlam: "Aquastop etkinleştirildi; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e25-veya-f25-camasir-makinesi · md5 73c8fdca3fe6c6db673e26748d2c59d2
    { giris: "Bosch — E25 / F25", tip: "kod",
      anlam: "Bulanıklık sensörü arızası; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e26-veya-f26-camasir-makinesi · md5 60045540fd2fc0c0f3b9a94407c83519
    { giris: "Bosch — E26 / F26", tip: "kod",
      anlam: "Analog basınç sensörü arızası; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-f27-camasir-makinesi · md5 c607d5230441e5183de6423bf9f4b7bc
    { giris: "Bosch — E27 / F27", tip: "kod",
      anlam: "Basınç sensörü arızası; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e28-veya-f28-camasir-makinesi · md5 76473b475f649260c9310e28e0d9f2ed
    { giris: "Bosch — E28 / F28", tip: "kod",
      anlam: "Akış sensörü arızası; Bosch'a göre kendi kendine düzeltilemez, servis randevusu gerekir.",
      yazi: "bosch-camasir-makinesi-hata-kodlari" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — IE (1E)", tip: "kod",
      anlam: "Su yeterli gelmiyor ya da yavaş giriyor: evde su var mı, musluk tam açık mı, hortum kıvrık mı bak; musluğu kapatıp giriş filtresini temizle.",
      yazi: "lg-camasir-makinesi-ie-hatasi" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — OE", tip: "kod",
      anlam: "Su boşalmıyor ya da yavaş boşalıyor: tahliye hortumunu düzelt ve temizle, tahliye pompası filtresini kontrol edip temizle.",
      yazi: "lg-camasir-makinesi-oe-hatasi" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — UE", tip: "kod",
      anlam: "Dengesizlik algılandı, sıkma durdu: çamaşırı yeniden dağıt; tek ağır eşya varsa 1-2 parça ekle, kapıyı kapatıp Başlat/Durdur.",
      yazi: "lg-camasir-makinesi-ue-hatasi" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — dE, dE1, dE2, dE4", tip: "kod",
      anlam: "Kapı hatası: önce kapağın tam kapandığını kontrol et; kılavuza göre sürerse kapak sensörü arızası, LG servisi.",
      yazi: "lg-camasir-makinesi-de-hatasi" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — LE", tip: "kod",
      anlam: "Motorda aşırı yüklenme: motor soğuyana kadar 30 dakika beklet, sonra programı yeniden başlat; sürerse servis.",
      yazi: "lg-camasir-makinesi-le-hatasi" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — tE", tip: "kod",
      anlam: "Kontrol hatası: LG'nin talimatı fişi çekip servisi aramak.",
      yazi: "lg-camasir-makinesi-hata-kodlari" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — FE", tip: "kod",
      anlam: "Olası arızalı su vanası nedeniyle aşırı su doluyor: su musluğunu kapat, fişi çek, servisi ara.",
      yazi: "lg-camasir-makinesi-hata-kodlari" },
    // kaynak: https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA · md5 2281c4e9b4f42dcd592ca465a4b4c739
    { giris: "LG — PE", tip: "kod",
      anlam: "Su seviyesi sensörü hatalı: su musluğunu kapat, fişi çek, servisi ara.",
      yazi: "lg-camasir-makinesi-hata-kodlari" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/what-is-the-4e-4c-or-e1-info-code-shown-on-the-screen-of-my-samsung-washing-machine/ · md5 815a74d098a0a21806bece697733e5fa
    { giris: "Samsung — 4C (4E, E1)", tip: "kod",
      anlam: "Makine su alamıyor; musluk, su basıncı, giriş hortumu, donma ve tel filtre kontrol edilir.",
      yazi: "samsung-camasir-makinesi-4c-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — 4C2", tip: "kod",
      anlam: "Soğuk su besleme hortumu soğuk su musluğuna sıkıca bağlı olmalı; sıcağa bağlıysa bazı programlarda çamaşır deforme olabilir.",
      yazi: "samsung-camasir-makinesi-4c-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/what-should-i-do-if-my-samsung-washing-machine-fails-5e-5c-or-e2/ · md5 1528149223232c2cdd70e94bab475cda
    { giris: "Samsung — 5C (5E, E2)", tip: "kod",
      anlam: "Makine suyu tahliye edemiyor; tahliye hortumu ve kalıntı filtresi kontrol edilir.",
      yazi: "samsung-camasir-makinesi-5c-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/why-does-the-ue-ub-or-e4-information-code-appear-on-my-samsung-washing-machine/ · md5 21a26adbf9068280efd40d31e820c3e6
    { giris: "Samsung — UE / Ub (E4)", tip: "kod",
      anlam: "Çamaşır yükü dengesiz; yükü yeniden dağıt, tek parçanın yanına küçük havlu ekle, düşük devirle dene.",
      yazi: "samsung-camasir-makinesi-ue-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — dC (dE)", tip: "kod",
      anlam: "Makine kapak açık olarak çalıştırılıyor; kapağı düzgün kapat, kapağa çamaşır sıkışmadığına bak.",
      yazi: "samsung-camasir-makinesi-dc-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf · md5 2a8fa3df96d4d49f5da7294316f4a2ae
    { giris: "Samsung — DDC / ddC", tip: "kod",
      anlam: "AddWash kapağı Başlat/Duraklat'a basılmadan açılmış; AddWash kapağını kapatıp yeniden başlat.",
      yazi: "samsung-camasir-makinesi-dc-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf · md5 2a8fa3df96d4d49f5da7294316f4a2ae
    { giris: "Samsung — DC1 / DC3", tip: "kod",
      anlam: "Ana kapağın (DC1) ya da AddWash kapağının (DC3) kilitleme işlemi düzgün çalışmıyor; yeniden başlat, kalırsa servis.",
      yazi: "samsung-camasir-makinesi-dc-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/camasir-makinesi-oe-veya-oc-hatasi-veriyor-ne-yapabilirim/ · md5 875ce6238370f12ab74175e7daa6dbaf
    { giris: "Samsung — OC (OE)", tip: "kod",
      anlam: "Su seviyesi fazla algılandı; sıkma programıyla ya da acil boşaltma hortumuyla suyu boşalt.",
      yazi: "samsung-camasir-makinesi-oc-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/camasir-makinem-uc-hatasi-veriyor-ne-yapabilirim/ · md5 82cb663b700b3aff18fb2753ee02afb0
    { giris: "Samsung — UC", tip: "kod",
      anlam: "Makineye gelen elektrik voltajı uygun değil; çoklu prizden çıkarıp doğrudan prize takarak dene.",
      yazi: "samsung-camasir-makinesi-uc-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — LC / LC1", tip: "kod",
      anlam: "Samsung boşaltma hortumunun kontrolünü ister: hortum ucu yere konmamış ve tıkalı olmamalı; kod kalırsa servis.",
      yazi: "samsung-camasir-makinesi-hata-kodlari" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — 3C", tip: "kod",
      anlam: "Motorun çalışıp çalışmadığı kontrol edilmeli; programı yeniden başlat, kod kalırsa servis.",
      yazi: "samsung-camasir-makinesi-hata-kodlari" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — HC", tip: "kod",
      anlam: "Yüksek sıcaklıkta ısıtma kontrolü; Samsung'a göre kod kalırsa servis.",
      yazi: "samsung-camasir-makinesi-hata-kodlari" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf · md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
    { giris: "Samsung — ekranda 0 kalıyor", tip: "belirti",
      anlam: "Arıza değil: Temiz Kazan hatırlatması; makine normal çalışır, temizlik için programın çalıştırılması önerilir.",
      yazi: "samsung-camasir-makinesi-hata-kodlari" },
  ],

  // ── KURUTMA MAKİNESİ (21 Ağu 2026: Tolga kararıyla AYRI CİHAZ oldu) ───────────────
  // Bu 5 kayıt "Çamaşır Makinesi" altında duruyordu; kurutma ayrı cihaz olunca kendi
  // /tamir/kurutma-makinesi/ sayfasına taşındı. Kayıtların METNİ ve bağlı YAZISI
  // değişmedi — yalnız hangi cihazın altında durdukları değişti.
  "Kurutma Makinesi": [
    { giris: "Kurutma makinesi — Arçelik ve Beko panel sembolleri", tip: "kod",
      anlam: "İki markanın kılavuzunda da kod değil sembol var; ekransız modellerde ışık dili.",
      yazi: "kurutma-makinesi-hata-kodlari" },
    { giris: "Kurutma makinesi ısıtmıyor / soğuk üflüyor", tip: "belirti",
      anlam: "Sorun çoğu zaman hava akışında başlar: filtre, kondenser, güvenlik termiği sırasıyla izlenir.",
      yazi: "kurutma-makinesi-isitmiyor" },
    { giris: "Kurutma makinesi su tankı dolu uyarısı", tip: "belirti",
      anlam: "Tank boşken de uyarı verebilir; tankın oturuşu, şamandıra ve kondenser tıkanıklığı kontrol edilir.",
      yazi: "kurutma-makinesi-su-tanki-dolu-uyarisi" },
    { giris: "Kurutma makinesi filtre ve kondenser temizliği", tip: "ayar",
      anlam: "Kurutma süresi uzadıysa ilk bakılacak yer: kapak filtresi her kurutmada, kondenser ayda bir temizlenir.",
      yazi: "kurutma-makinesi-filtre-ve-kondenser-temizligi" },
    { giris: "Kurutma makinesi ne kadar elektrik harcar", tip: "ayar",
      anlam: "Isı pompalı ve kondenserli modellerin farkı; tıkalı filtre tüketimi artırır.",
      yazi: "kurutma-makinesi-ne-kadar-elektrik-harcar" },

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Kurutma programı bitti, çamaşır hâlâ nemli", tip: "belirti",
      anlam: "Sebep çoğu zaman hava akışının kısıtlanmasıdır: tiftik filtresi, yoğuşma haznesi ve yoğuşturucu sırayla kontrol edilir.",
      yazi: "kurutma-makinesi-kurutmuyor" },
    { giris: "Kurutma süresi eskisinden çok uzadı", tip: "ayar",
      anlam: "İlk durak kapak filtresi, ikinci durak kondenser; hav birikimi hava akışını düşürür.",
      yazi: "kurutma-makinesi-filtre-ve-kondenser-temizligi" },
    { giris: "Tambur dönüyor, hava geliyor ama çamaşır kurumuyor", tip: "belirti",
      anlam: "Makine ısıtır ama nem dışarı atılamıyorsa çamaşır kurumaz; filtre, hazne, yoğuşturucu ve yükleme miktarı bakılır.",
      yazi: "kurutma-makinesi-kurutmuyor" },
    { giris: "Tankı boşalttım ama uyarı gitmiyor", tip: "belirti",
      anlam: "Tankın yuvasına tam oturması, şamandıra ve kondenser tıkanıklığı sırayla kontrol edilir.",
      yazi: "kurutma-makinesi-su-tanki-dolu-uyarisi" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    { giris: "Arçelik — semboller ve uyarı ışıkları", tip: "kod",
      anlam: "Arçelik'in kendi kılavuzunda E kodu yok; cihaz sembolle konuşuyor — su tankı yanıyor mu yanıp sönüyor mu ayrımı.",
      yazi: "arcelik-kurutma-makinesi-hata-kodlari" },
  ],
  "Bulaşık Makinesi": [
    { giris: "E15 (musluk işareti)", tip: "kod",
      // 🚨 22 Ağu (TARAMA-1): "suyu boşaltmayı kendin yapabilirsin" KALDIRILDI.
      // Bosch'un E15 sayfası: "Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza
      // çözmeyi denememenizi öneririz. Şebeke suyunu kesin ve cihazı kapatın."
      // 📌 `rehber: true` KALDI: yazı hâlâ geçerli bir rehber — ama artık "suyu boşalt"
      // değil, "suyu kes, gözle, not al, servisi ara" adımlarını anlatıyor. Kaldırmak
      // kullanıcıyı rehbersiz bırakırdı; ② katman denetimi de bunu şart koşuyor.
      anlam: "Su koruma sistemi devrede, tabanda su var. Bosch: şebeke suyunu kes, cihazı kapat, servisi ara.",
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
    // 22 Ağu (YK taraması): yazı kendin-çöz rehberi olarak kaydedildi → `rehber: true`.
    // YK #35 ② katman denetimi bunu ŞART koşuyor; olmadan build DURUR.
    { giris: "Su atmıyor / tabanda su kalıyor", tip: "belirti",
      anlam: "En sık sebep tıkalı filtre ya da pompa; kendin bakabileceğin noktalar var.",
      yazi: "bulasik-makinesi-su-atmiyor", rehber: true },
    { giris: "Su almıyor", tip: "belirti",
      anlam: "Musluk, giriş filtresi ve valf sırayla kontrol edilir.",
      yazi: "bulasik-makinesi-su-almiyor", rehber: true },
    { giris: "Kurutmuyor / bulaşıklar ıslak çıkıyor", tip: "belirti",
      anlam: "Parlatıcıdan rezistansa 6 olası neden ve hangisini kendin çözebilirsin.",
      yazi: "bulasik-makinesi-kurutmuyor", rehber: true },
    { giris: "Temiz yıkamıyor", tip: "belirti",
      anlam: "Püskürtme kolu, filtre, kireç ve yerleştirme kaynaklı 6 neden.",
      yazi: "bulasik-makinesi-temiz-yikamiyor", rehber: true },
    { giris: "Kötü koku", tip: "belirti",
      anlam: "Tıkalı filtre, yemek artığı, kireç, kapı contası ve tahliye kaynaklı koku.",
      yazi: "bulasik-makinesi-kokuyor", rehber: true },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    // 22 Ağu (TARAMA-1): Üreticinin bulaşık listesi BEŞ kod — E01 E02 E06 E07 E26.
    // E03 ve E04 aslında Arçelik KOMBİ kodları (baca sigortası · düşük su basıncı);
    // E05, E08, E09 hiçbir üretici yayınında yok. Eski girişler beşini de sayıyordu.
    { giris: "Arçelik — E01, E02, E06, E07, E26", tip: "kod",
      anlam: "Taşma, su kesik, NTC sensörü, sürekli su alma ve kompresör kodlarının karşılığı.",
      yazi: "arcelik-bulasik-makinesi-hata-kodlari" },
    { giris: "Beko — E01, E02, E06, E07, E26", tip: "kod",
      anlam: "Üreticinin yayımladığı beş kodun karşılığı; hangisinde evde ne yapılır.",
      yazi: "beko-bulasik-makinesi-hata-kodlari" },
    { giris: "Samsung — 4C, 5C, LC, HE", tip: "kod",
      anlam: "4C su temini, 5C tahliye, LC kaçak, HE ısıtıcı demek; özellikle 4C için evde yapılacak kontroller.",
      yazi: "samsung-bulasik-makinesi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): Vestel BULAŞIKTA E kodu KULLANMIYOR — 5 resmî kılavuzda E ile
    // başlayan kod sayısı 0. Tablo F serisi. (E01/E02/E03 Vestel ÇAMAŞIR makinesinin
    // kodları; iki cihazın tablosu karışmış.) Eski giriş dört koddan üçünü uyduruyordu.
    { giris: "Vestel — FF, F2, F1, F3 (E kodu yok)", tip: "kod",
      anlam: "Kılavuzdaki on iki F kodunun anlamı; Vestel yalnız FF ve F2'de evde iş tarif ediyor.",
      yazi: "vestel-bulasik-makinesi-hata-kodlari" },
    { giris: "Siemens — E15 (musluk işareti)", tip: "kod",
      // 🚨 22 Ağu (TARAMA-1): "suyu güvenle boşaltma adımları" ifadesi kaldırıldı; BSH
      // bu kodda evde çözüm denenmesini önermiyor (bkz. bosch-…-e15 kaydındaki not).
      anlam: "Su koruma sistemi devrede, tabanda su var. Üretici: şebeke suyunu kes, cihazı kapat, servisi ara.",
      yazi: "siemens-bulasik-makinesi-e15-hatasi" },
    { giris: "Alttan su kaçırıyor", tip: "belirti",
      anlam: "Sebep çoğu zaman kapı contası, hortum bağlantısı ya da taşma emniyetidir; kendin kontrol edeceklerin belli.",
      yazi: "bulasik-makinesi-su-kaciriyor", rehber: true },
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Tabaklarda yemek kalıntısı kalıyor", tip: "belirti",
      anlam: "Püskürtme kolu delikleri tıkalıysa su bulaşıklara ulaşmaz; kollar ve taban filtresi aletsiz temizlenir.",
      yazi: "bulasik-makinesi-temiz-yikamiyor" },
    { giris: "Üst sepet iyi yıkanmıyor", tip: "belirti",
      anlam: "Üst kol dönmüyor ya da uzun saplı bir parça kolu kilitliyor olabilir; kolu elinle çevirip serbest döndüğünü doğrula.",
      yazi: "bulasik-makinesi-temiz-yikamiyor" },
    { giris: "Program bitti ama içinde su kalıyor", tip: "belirti",
      anlam: "İlk bakılacak yer taban filtresi ve altındaki pompa kapağıdır; cam kırığı ya da etiket pervaneyi kilitleyebilir.",
      yazi: "bulasik-makinesi-su-atmiyor" },
    { giris: "Pompadan ses geliyor ama su gitmiyor", tip: "belirti",
      anlam: "Filtre ve pompa kapağı temizken ses gelip su gitmiyorsa işaret tahliye pompasını gösterir; bu servis işidir.",
      yazi: "bulasik-makinesi-su-atmiyor" },
    { giris: "Musluk açık ama makine dolmuyor", tip: "belirti",
      anlam: "Musluk-hortum bağlantısındaki küçük süzgeç kireç ve tortuyla tıkanmış olabilir; temizliğini kendin yaparsın.",
      yazi: "bulasik-makinesi-su-almiyor" },
    { giris: "Kapağı kapattım ama program başlamıyor", tip: "belirti",
      anlam: "Kapak klik sesiyle tam kapanmadıysa program başlamaz; çocuk kilidi de kontrol edilir.",
      yazi: "bulasik-makinesi-su-almiyor" },
    { giris: "Plastik kaplar hiç kurumuyor", tip: "belirti",
      anlam: "Plastik ısı tutmaz, en son o kurur; üst sepete al ve program bitince kapağı arala.",
      yazi: "bulasik-makinesi-kurutmuyor" },
    { giris: "Eko programda bulaşıklar nemli kalıyor", tip: "belirti",
      anlam: "Eco ve hızlı programlar kurutma aşamasını kısar ya da atlar; yoğun veya ekstra kurutma seçeneği gerekir.",
      yazi: "bulasik-makinesi-kurutmuyor" },
    { giris: "Lağım kokusu geliyor", tip: "belirti",
      anlam: "Keskin lağım kokusu genelde tahliye hortumundaki biyofilm ya da tıkanıklıktır; iç temizlik çözmezse servis.",
      yazi: "bulasik-makinesi-kokuyor" },
    { giris: "Kapı contasında küf var", tip: "belirti",
      anlam: "Contanın kıvrımlarında kalan artık ve nem küf yapar; nemli bezle silmek işin ev tarafıdır.",
      yazi: "bulasik-makinesi-kokuyor" },
    { giris: "Süre göstergesi ilerlemiyor", tip: "belirti",
      anlam: "Isıtma yetişmediğinde program bekler ve kalan süre uzayabilir; hangi ses normal, nerede servis başlar.",
      yazi: "bulasik-makinesi-programi-bitirmiyor" },
    { giris: "Deterjan bölmesi açılmıyor", tip: "belirti",
      anlam: "En sık sebep bölmenin önünü kapatan bir tabak ya da uzun saplı parçadır; ıslak bölmede tablet de yapışır.",
      yazi: "bulasik-makinesi-tableti-eritmiyor" },
    { giris: "Bardaklarda su damlası izleri kalıyor", tip: "belirti",
      anlam: "Nokta nokta damla izi düşük parlatıcı dozunu, gökkuşağı renkli yağlımsı iz ise fazla dozu gösterir.",
      yazi: "bulasik-makinesi-bardaklari-bulanik-birakiyor" },
    { giris: "Makinenin altında su birikti", tip: "belirti",
      anlam: "Önce su mu köpük mü ayrımı yapılır; kapı contası, görünür hortum bağlantıları ve taşma emniyeti sırayla bakılır.",
      yazi: "bulasik-makinesi-su-kaciriyor" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    { giris: "Arçelik · Beko — E01", tip: "kod",
      anlam: "Su güvenliği (taşma koruması) devrede; taban suyunu boşaltma ve kaçak arama sırası belli.",
      yazi: "arcelik-bulasik-makinesi-e01-hatasi" },
    { giris: "Beko — E01 (taşma koruması)", tip: "kod",
      anlam: "Şamandıra kalkmış demek; makineyi eğip tabandaki suyu boşaltmak ilk adım.",
      yazi: "beko-bulasik-makinesi-e01-hatasi" },
    { giris: "Samsung — 4C", tip: "kod",
      anlam: "Makine su alamıyor: musluk, giriş hortumu ve filtre elemesi evde yapılıyor.",
      yazi: "samsung-bulasik-makinesi-4c-hatasi" },
    { giris: "Eko program neden uzun sürüyor", tip: "ayar",
      anlam: "Uzun süre arıza değil, tasarımın kendisi; suyu yavaş ısıtıp az enerjiyle yıkıyor.",
      yazi: "bulasik-makinesi-eko-program-neden-uzun" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    { giris: "Siemens — E07…E27", tip: "kod",
      anlam: "Siemens ve Bosch aynı kod dilini konuşuyor, panel farklı; hangi kod evde çözülür belli.",
      yazi: "siemens-bulasik-makinesi-hata-kodlari" },
    // ——— 27 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf · md5 2ad54a56734b93dbaeefbcd4fdc3b385
    { giris: "Samsung — LC (LE)", tip: "kod",
      anlam: "Sızıntı kontrolü: su vanası ve şalter kapatılır; parlatıcı taşması, deterjan ve denge evde kontrol edilir.",
      yazi: "samsung-bulasik-makinesi-lc-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf · md5 2ad54a56734b93dbaeefbcd4fdc3b385
    { giris: "Samsung — HC (HE)", tip: "kod",
      anlam: "Yüksek sıcaklıkta ısıtma kontrolü: boş makinede deterjanla bir program denenir, sürerse şalter ve servis.",
      yazi: "samsung-bulasik-makinesi-hc-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf · md5 2ad54a56734b93dbaeefbcd4fdc3b385
    { giris: "Samsung — bC2 (bE2)", tip: "kod",
      anlam: "Düğme kontrolü: bir tuşa uzun süre basılmış; paneldeki su ve kir kontrol edilip nemli bezle silinir.",
      yazi: "samsung-bulasik-makinesi-bc2-hatasi" },
    // kaynak: https://www.samsung.com/tr/home-appliances/faq-dishwasher/ · md5 800f3dae1021411046adba7cc8ad8cc6
    { giris: "Samsung — 5C (5E)", tip: "kod",
      anlam: "Tahliye sorunu: filtre temizliği ve boşaltma hortumu kontrolü evde yapılıyor.",
      yazi: "samsung-bulasik-makinesi-5c-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf · md5 2ad54a56734b93dbaeefbcd4fdc3b385
    { giris: "Samsung — düğmeler çalışmıyor (kontrol kilidi)", tip: "belirti",
      anlam: "Kapak açıksa GÜÇ dışındaki tuşlar çalışmaz; kontrol kilidi 3 saniye basılı tutarak açılır.",
      yazi: "samsung-bulasik-makinesi-bc2-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20264050_k.pdf · md5 dd6a67c9fefe3c49867c92fa7e66e410
    { giris: "Vestel — F2", tip: "kod",
      anlam: "Su tahliye edilmiyor: programı iptal et, filtre grubunu ve tahliye hortumunu temizle; sürerse servis.",
      yazi: "vestel-bulasik-makinesi-f2-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20264050_k.pdf · md5 dd6a67c9fefe3c49867c92fa7e66e410
    { giris: "Vestel — F1", tip: "kod",
      anlam: "Taşma: Vestel'in talimatı makineyi ve musluğu kapatıp servisle iletişime geçmek; evde tarif edilen adım yok.",
      yazi: "vestel-bulasik-makinesi-hata-kodlari" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20264050_k.pdf · md5 dd6a67c9fefe3c49867c92fa7e66e410
    { giris: "Vestel — F3", tip: "kod",
      anlam: "Sürekli su girişi: Vestel'in talimatı musluğu kapatıp servisle iletişime geçmek.",
      yazi: "vestel-bulasik-makinesi-hata-kodlari" },
    // kaynak: https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf · md5 ebe98e45d57fc21fc293e5c88ab47b8e
    { giris: "Vestel — FE", tip: "kod",
      anlam: "Yeni nesilde arızalı elektronik kart (servis); eski nesilde voltaj düşmesine bağlı parametre hatası, program yeniden çalıştırılır.",
      yazi: "vestel-bulasik-makinesi-hata-kodlari" },
    // ——— 28 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://statik.vestel.com.tr/webfiles/20264050_k.pdf · md5 dd6a67c9fefe3c49867c92fa7e66e410
    { giris: "Vestel — FF", tip: "kod",
      anlam: "Su giriş sistemi arızası: musluk açık mı, su akıyor mu bak; giriş hortumunu ayırıp filtresini temizle; sürerse servis.",
      yazi: "vestel-bulasik-makinesi-ff-hatasi" },
    // kaynak: https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf · md5 ebe98e45d57fc21fc293e5c88ab47b8e
    { giris: "Vestel — F5", tip: "kod",
      anlam: "Nesle göre değişir: eski nesilde su girişi yetersiz (musluk ve hortum filtresi), yeni nesilde basınç sistemi arızası (servis).",
      yazi: "vestel-bulasik-makinesi-f5-hatasi" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e-12 · md5 4a50323b3f8d7e7da92d4fd2c1f48e99
    { giris: "Bosch — E12", tip: "kod",
      anlam: "Isıtma sisteminde kireç birikmiş; boş makinede bulaşık makinesi kireç çözücüsüyle temizlik, ardından tuz ve su sertliği ayarı kontrolü.",
      yazi: "bosch-bulasik-makinesi-e12-hatasi" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e18 · md5 a511e9a65caf6341d7b8aa78e01ae480
    { giris: "Bosch — E18", tip: "kod",
      anlam: "Su girişinde engel: giriş hortumu bükük, musluk tarafındaki filtre ya da AquaStop tıkalı veya musluk basıncı düşük; kontrolü evde yapılır.",
      yazi: "bosch-bulasik-makinesi-e18-hatasi" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e25 · md5 1785df81fc675f558d3b6f01669a1f79
    { giris: "Bosch — E25", tip: "kod",
      anlam: "Pompa yabancı cisimle tıkanmış ya da pompa kapağı yerine oturmamış; Bosch pompa temizliğini adım adım tarif ediyor.",
      yazi: "bosch-bulasik-makinesi-e25-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001626280_A.pdf · md5 8392c0fbccf9c23bb06945067b41989d
    { giris: "Bosch Serie 4 — E:61-02", tip: "kod",
      anlam: "Atık su pompası bloke olmuş ya da pompa kapağı gevşek; pompa temizlenir, kapak duyulur şekilde oturtulur.",
      yazi: "bosch-bulasik-makinesi-e25-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001626280_A.pdf · md5 8392c0fbccf9c23bb06945067b41989d
    { giris: "Bosch Serie 4 — E:61-03", tip: "kod",
      anlam: "Su boşaltılmıyor: tahliye hortumu bükük ya da tıkalı, sifon bağlantısı kapalı veya pompa kapağı gevşek; üçü de evde kontrol edilir.",
      yazi: "bosch-bulasik-makinesi-e61-03-hatasi" },
    // kaynak: https://media3.bosch-home.com/Documents/9001626280_A.pdf · md5 8392c0fbccf9c23bb06945067b41989d
    { giris: "Bosch Serie 4 — E:32-00", tip: "kod",
      anlam: "Su girişi göstergesiyle aynı satır: besleme hortumu bükük, musluk kapalı ya da kireçlenmiş veya giriş süzgeci tıkalı.",
      yazi: "bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari" },
    // kaynak: https://media3.bosch-home.com/Documents/9001626280_A.pdf · md5 8392c0fbccf9c23bb06945067b41989d
    { giris: "Bosch Serie 4 — E:92-40", tip: "kod",
      anlam: "Süzgeçler kirlenmiş ya da tıkanmış; süzgeç sistemi çıkarılıp akan su altında temizlenir.",
      yazi: "bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e23 · md5 9f00e0e3d7a34ec65414d798c5c13362
    { giris: "Bosch — E23", tip: "kod",
      anlam: "Atık su pompasında hata; Bosch yalnız deneyimli bir teknisyenin giderebileceğini söylüyor.",
      yazi: "bosch-bulasik-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-kodu-09 · md5 2b9470f4f0245f5abef7b1713a557291
    { giris: "Bosch — E09", tip: "kod",
      anlam: "Bosch evde çözmeyi denememeyi öneriyor: şebeke suyunu kes, cihazı kapat, teknisyen randevusu al.",
      yazi: "bosch-bulasik-makinesi-hata-kodlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-kodu-19 · md5 14525d86e14a9c796dda907d93c50bec
    { giris: "Bosch — E19", tip: "kod",
      anlam: "Sorun stok kabında ya da iç vanada olabilir; Bosch: evde çözmeyi deneme, şebeke suyunu kes, cihazı kapat, teknisyen çağır." },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/ekranda-su-muslugu-hatasi · md5 ec824c71ef99eb691d60d9ee87136cc0
    { giris: "Bosch — musluk (su girişi) sembolü yanıyor", tip: "belirti",
      anlam: "Bosch'a göre bükülmüş ya da tıkanmış hortum, düşük su basıncı veya giriş filtresi tıkanıklığı; üçü de makinenin dışında kontrol edilir.",
      yazi: "bosch-bulasik-makinesi-sembolleri-ve-anlamlari" },
    // kaynak: https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/az-tuz-isigi-yaniyor · md5 901ed2096039c2537612c0467edf0c99
    { giris: "Bosch — tuz koydum, tuz ışığı sönmüyor", tip: "belirti",
      anlam: "Bosch'a göre sensör tablet tuzları algılamıyor; tablet dışında bir özel tuz kullanılır.",
      yazi: "bosch-bulasik-makinesi-sembolleri-ve-anlamlari" },
  ],

  "Kombi / Termosifon": [
    { giris: "Vaillant — F.22, F.28, F.29, F.75", tip: "kod",
      anlam: "Vaillant panelindeki F kodlarının tam listesi ve karşılıkları.",
      yazi: "vaillant-kombi-ariza-kodlari" },
    // 22 Ağu (TARAMA-1): DemirDöküm'ün İKİ kod ailesi var ve yazı ikisini karıştırmıştı.
    // Nitromix/ademiX → noktalı (Vaillant platformu) · Atron/Nitron → noktasız F04/F05/F10.
    // F.04 ve F.05'in anlamı TERSTİ: F04 ateşleme (fan değil), F05 baca (NTC değil).
    { giris: "DemirDöküm — F.22 · F.28 · F10 · F04 (iki aile)", tip: "kod",
      anlam: "Noktalı ve noktasız iki kod ailesi; hangi seride hangisi geçerli ve karşılıkları.",
      yazi: "demirdokum-kombi-ariza-kodlari" },
    // 22 Ağu 2026 (TARAMA-1): "E04" ÇIKARILDI — Baymak'ta böyle bir kod yok.
    // Gerçek düşük su basıncı kodu F37 (Lunatec/Startec'te H.02.07).
    { giris: "Baymak — E01, E05, F37", tip: "kod",
      anlam: "Ateşleme, fan ve düşük su basıncı kodlarının anlamı.",
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Ekranda düşük su basıncı kodu var", tip: "kod",
      // 22 Ağu 2026 (TARAMA-1) — ÇİFTE TAKAS düzeltildi: F.37 Baymak'ın kodudur,
      // DemirDöküm'e yazılmıştı; Baymak'a ise var olmayan E04 verilmişti.
      // DemirDöküm'ün ikinci platformunda (Atron/Nitron) karşılık F10.
      anlam: "Her markanın en sık kodu budur (Vaillant F.22, DemirDöküm F.22, Baymak F37) ve doldurma musluğuyla güvenle çözülür.",
      yazi: "kombi-ariza-kodlari" },
    { giris: "Sürekli su basmam gerekiyor", tip: "belirti",
      anlam: "Su eklemek geçici çözümdür; kaynak tesisat kaçağı, genleşme tankı ya da emniyet ventili olabilir.",
      yazi: "kombi-basinc-dusuyor" },
    { giris: "Kombinin dış tahliye borusundan su damlıyor", tip: "belirti",
      anlam: "Tahliyeden gelen damlama emniyet ventili ya da genleşme tankı şüphesini gündeme getirir.",
      yazi: "kombi-basinc-dusuyor" },
    { giris: "Isınınca basınç yükseliyor, soğuyunca düşüyor", tip: "belirti",
      anlam: "Isınınca aşırı yükselip ventilden taşan basınç genellikle genleşme tankı arızasına işaret eder.",
      yazi: "kombi-basinc-dusuyor" },
    { giris: "Musluktan ılık su geliyor", tip: "belirti",
      anlam: "İlk iki şüpheli plakalı eşanjörün kireçlenmesi ve musluk ucundaki tıkalı süzgeçtir.",
      yazi: "kombi-sicak-su-vermiyor" },
    { giris: "Petekler ısınıyor ama su ısınmıyor", tip: "belirti",
      anlam: "Isıtma çalışırken sıcak su yoksa sorun sıcak su devresindedir: eşanjör, 3 yollu vana ya da akış sensörü.",
      yazi: "kombi-sicak-su-vermiyor" },
    // 31 Ağu 2026 (FE, Tolga talimatı) — listede en sık vaka EKSİKTİ: yukarıdaki kaydın
    // AYNA HÂLİ. "Isıtma var, sıcak su yok" vardı; "sıcak su var, ısıtma yok" yoktu.
    { giris: "Kombi yanıyor, sıcak su var ama petekler soğuk", tip: "belirti",
      anlam: "Sıcak su üretiliyor ama tesisatta dolaşmıyordur; peteğin neresinin soğuk olduğu sebebi ayırır: üstü soğuksa içinde hava, altı soğuksa dipte tortu, hiçbiri ısınmıyorsa sirkülasyon pompası, vana ya da oda termostatı.",
      yazi: "petekler-isinmiyor" },
    { giris: "Petekler de soğuk, sıcak su da yok", tip: "belirti",
      anlam: "İkisi birden yoksa sorun sıcak su tarafında değil, kombinin yanmasındadır.",
      yazi: "kombi-yanmiyor" },
    { giris: "Reset'e bastım ama kombi yine kilitleniyor", tip: "belirti",
      anlam: "Gaz açık, basınç doğru ve reset tutmuyorsa ateşleme elektrodu ya da gaz valfi şüphesi başlar.",
      yazi: "kombi-yanmiyor" },
    { giris: "Kışın ilk çalıştırmada kombi açılmadı", tip: "belirti",
      anlam: "Aylarca hiç çalışmayan kombide sirkülasyon pompası sıkışabilir, contalar kuruyabilir.",
      yazi: "kombi-yazin-kapatilir-mi" },
    { giris: "Tatile giderken kombi ne yapılmalı", tip: "ayar",
      anlam: "Kısa tatilde yaz modu yeter; uzun tatilde gaz vanası kapatılır ve dönüşte basınç kontrol edilir.",
      yazi: "kombi-yazin-kapatilir-mi" },
    // ——— 27 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/6a-ariza-kodu/ · md5 37b9f9e083b4ed3c4a05a2e8d79e9b77
    { giris: "Buderus — 6A", tip: "kod",
      anlam: "Buderus'a göre ateşleme sorunu: önce gaz vanaları, sonra bir kez reset; sürerse yetkili servis.",
      yazi: "buderus-kombi-6a-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/227-ariza-kodu/ · md5 78fdc8c86fe5f4afb99a1b6860c9dc7b
    { giris: "Buderus — 227", tip: "kod",
      anlam: "GB022i ve GB122i'de alev algılanmıyor; Buderus'un ilk kontrolü kombinin gaz vanasının açık olması.",
      yazi: "buderus-kombi-227-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4c-ariza-kodu/ · md5 8a0b1be67aa3ad1ee8a298e6dffab4e4
    { giris: "Buderus — 4C", tip: "kod",
      anlam: "Logamax U serisinde aşırı ısınma, kombi kendini bloke eder; sıra basınç, kalorifer vanaları, reset.",
      yazi: "buderus-kombi-4c-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4l-ariza-kodu/ · md5 65e0394f91c93fae8616f2df80090f41
    { giris: "Buderus — 4L", tip: "kod",
      anlam: "Tesisat su basıncı düşük; Buderus basıncın 1,2 bar'a yükseltilmesini ve yetkili servise başvurulmasını istiyor.",
      yazi: "buderus-kombi-4l-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/2e-ariza-kodu/ · md5 6c4c0cb755e0225c6a9b3bdb7ef61449
    { giris: "Buderus — 2E", tip: "kod",
      anlam: "Logamax U022/U072'de tesisat su basıncı düşük; 4L ile aynı tanım ve çözüm.",
      yazi: "buderus-kombi-4l-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/1017-ariza-kodu/ · md5 c7cf660b1fd59a2e5889b8ef2bf81954
    { giris: "Buderus — 1017", tip: "kod",
      anlam: "GB022i ve GB122i'de su basıncı çok düşük; basınç kontrol edilir, gerekirse su ilave edilir.",
      yazi: "buderus-kombi-1017-hatasi" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/2971-ariza-kodu/ · md5 f3a5b14293cd51c09d4c1ea8a79ff60e
    { giris: "Buderus — 2971", tip: "kod",
      anlam: "GB022i ve GB122i'de çalışma basıncı çok düşük; önce ısıtma tesisatının havası alınır, sonra basınç kontrol edilir.",
      yazi: "buderus-kombi-1017-hatasi" },
    // kaynak: https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf · md5 e2c3f95692c0e3c1e3a2ea3b59997420
    { giris: "Buderus — LoPr", tip: "kod",
      anlam: "GB172i.2 kılavuzuna göre çalışma basıncı çok düşük; 0,3 bar altında ısıtma bloke olur, tesisat doldurulur.",
      yazi: "buderus-kombi-4l-hatasi" },
    // kaynak: https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721852623.pdf · md5 e2c3f95692c0e3c1e3a2ea3b59997420
    { giris: "Buderus — 2980", tip: "kod",
      anlam: "GB172i.2 kılavuzuna göre tekrarlanan reset denemeleri sonrası güvenlik blokajı; yalnız uzman ya da müşteri hizmetleri kaldırır.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/ep-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/fd-ariza-kodu/ · md5 0f4991fe2a78afb35b78a04b24ae26ec · 8a03ca4fe9343798913b698d8c9b43b6
    { giris: "Buderus — EP · Fd", tip: "kod",
      anlam: "Reset tuşuna uzun süre basılmış; Buderus tuşa 30 saniyeyi aşmayacak şekilde basılmasını istiyor.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/7-c-l-ariza-kodu/ · md5 125b51cb9aeb4aea280311e3a1e9c254
    { giris: "Buderus — 7 C-L", tip: "kod",
      anlam: "Elektrik voltaj düşüklüğü hataları; reset tuşu 30 saniyeyi aşmadan basılır, sürerse yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/356-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/2972-ariza-kodu/ · md5 30a4e31c88ab79c1645cf462c4d1c405 · f4bb5d53bdc13344db6e4b819e11e2ba
    { giris: "Buderus — 356 · 2972", tip: "kod",
      anlam: "GB022i ve GB122i'de besleme ya da şebeke gerilimi çok düşük; elektrik tarafı yetkili servis işi.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/6c-ariza-kodu/ · md5 fa89e59de8fa4faff9197f7d84fe59b1
    { giris: "Buderus — 6C", tip: "kod",
      anlam: "Gaz kesildikten sonra alev algılanıyor; Buderus'un tek çözümü yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/3a-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/3-a-y-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/c7-ariza-kodu/ · md5 ed61b732c0fb91e51c345f9b63936ca4 · 5633fcd81dff92f5244e239352a52371 · a38f38d8e5ebd533f939beddd78c30c3
    { giris: "Buderus — 3A · 3 A-Y · C7", tip: "kod",
      anlam: "Fan devir sayısı düşük ya da fan çalışmıyor; voltaj düşük olabilir, yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/3c-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/3y-ariza-kodu/ · md5 7e99f509d9f181fe8d9a57d0b17362d3 · de734392c9dda9f5b83a75cd4b45d1a2
    { giris: "Buderus — 3C · 3Y", tip: "kod",
      anlam: "Diferansiyel basınç şalteri kapatmıyor ya da açılmıyor; yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/0y-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/4y-ariza-kodu/ · md5 e16fb207d19727838dc0fd32388deeda · 931d05c50b93528ecd459ffcfabd01d7
    { giris: "Buderus — 0Y · 4Y", tip: "kod",
      anlam: "Sensör sıcaklık artışı yüksek (0Y) ya da gidiş suyu sensörü kontrol edilmeli (4Y); yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/cl-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/h11-ariza-kodu/ · md5 3071f702bcb0bfa566a50c971d20d0fe · 1f02213250cb33f760a86b767b598f46
    { giris: "Buderus — CL · H11", tip: "kod",
      anlam: "Kullanım suyu sensörü kontrol edilmeli; yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/cc-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/ec-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/--ariza-kodu/ · md5 174e2af032fcb84f40f8c61c34c0ac24 · a60ef16c99ed9fa7944cbd935c99e02c · 698efdc0b9e5f488674b213c75820d96
    { giris: "Buderus — CC · EC · -", tip: "kod",
      anlam: "Dış hava sensörü algılanmıyor; sensör ve bağlantı kablosu kontrolü yetkili servis işi.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/5l-ariza-kodu/ · md5 8bb72fc82226b66b3a78882966480784
    { giris: "Buderus — 5L", tip: "kod",
      anlam: "BUS iletişiminde kesinti; termostat kablosu kontrolü için yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/2-e-y-ariza-kodu/ · md5 33e2e6b51b0b4fbe5aa95ebb9fcb8e62
    { giris: "Buderus — 2 E-Y", tip: "kod",
      anlam: "Kalorifer tesisatında sirkülasyon problemleri; 2E'den farklı kod, yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/9c-ariza-kodu/ · md5 6788131aa37a74d812e1286d028d2a9b
    { giris: "Buderus — 9C", tip: "kod",
      anlam: "Kod anahtarı algılanmıyor; gaz vanası ve gaz bağlantı basıncı kontrolüyle birlikte yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/9p-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/9-u-l-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/el-ariza-kodu/ · md5 ae958904ca4c56869f452dfe499d5b91 · bdf7b363f68f7812e3316131662b6dbb · 9775f17fbcebabba262eb77a749646c6
    { giris: "Buderus — 9P · 9 U-L · EL", tip: "kod",
      anlam: "KIM algılanmadı (9U-L'de ayrıca gaz armatürü hatası) ya da KIM veya Logamatic BC20 arızalı; yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/b3-ariza-kodu/ · md5 33e13b6e90aa1ab8f39317adcdac8e10
    { giris: "Buderus — B3", tip: "kod",
      anlam: "Yoğuşma eşanjöründe su seviye sensörü hatası; yoğuşma gideri kontrolü için yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/d7-ariza-kodu/ · md5 5f0b31b833f84165ccb66ccf1d5573a6
    { giris: "Buderus — d7", tip: "kod",
      anlam: "Gaz grubu kontrol edilmeli; yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/el-8y-ariza-kodu/ · md5 aed663f1b27f4e1027919bb783fdb686
    { giris: "Buderus — EL-8Y", tip: "kod",
      anlam: "Dahili arıza; yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/p-ariza-kodu/ · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/i-i-ariza-kodu/ · md5 59996932019fe92b7a6ce540ebdd3e18 · cc142b04097640a91a88804c99eab555
    { giris: "Buderus — P · I I", tip: "kod",
      anlam: "Cihaz tipi tanımlanmamış (P) ya da fan devir ayarı seçilmemiş (I I); yetkili servis.",
      yazi: "buderus-kombi-ariza-kodlari" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf · md5 2ad2ae698770f850da164d67e3ac3637
    { giris: "Vaillant — F.28 / F.028", tip: "kod",
      anlam: "Ateşleme başarısız: arka arkaya üç (ecoTEC plus/exclusive'te beş) ateşleme denemesi tutmayınca kombi arıza konumuna geçer; önce gaz kesme vanası, sonra kılavuzdaki sınırla reset.",
      yazi: "vaillant-kombi-f28-hatasi" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf · md5 7019a6c065efd6227ebac697dc91f175
    { giris: "Vaillant — F.281", tip: "kod",
      anlam: "ecoTEC plus/exclusive'te alev stabilizasyon süresi boyunca söndü; adımlar F.028 ile aynı: gaz kesme vanası, reset en fazla 3 kez, olmazsa yetkili servis.",
      yazi: "vaillant-kombi-f28-hatasi" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf · md5 2ad2ae698770f850da164d67e3ac3637
    { giris: "Vaillant — F.22 / F.022", tip: "kod",
      anlam: "Tesisat basıncı çok düşük, ısıtma sistemindeki su yetersiz; dolum basıncı kontrol edilir ve ısıtma sistemi kılavuzdaki değere kadar doldurulur.",
      yazi: "vaillant-kombi-f22-hatasi" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_1367238.pdf · md5 d57d110b8f7b15fd282ce993442d4a77
    { giris: "Vaillant — F.29", tip: "kod",
      anlam: "Çalışma sırasında sönen alev yeniden yakılamadı; kullanma kılavuzu kullanıcıya adım vermiyor, yetkili servis.",
      yazi: "vaillant-kombi-ariza-kodlari" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_1367238.pdf · md5 d57d110b8f7b15fd282ce993442d4a77
    { giris: "Vaillant — F.75", tip: "kod",
      anlam: "Pompa arızası / su eksikliği: pompa çalışırken yeterli basınç artışı algılanmadı; kontrolü yetkili servis işidir.",
      yazi: "vaillant-kombi-ariza-kodlari" },
    // kaynak: https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_1367238.pdf · md5 d57d110b8f7b15fd282ce993442d4a77
    { giris: "Vaillant — F.83", tip: "kod",
      anlam: "Kuru yanma: brülör çalışırken gidiş/dönüş sensöründe beklenen sıcaklık değişimi görülmedi; olası nedenlerden biri üründe az su, kontrolü yetkili servis işidir.",
      yazi: "vaillant-kombi-ariza-kodlari" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf · md5 5513c22c39f416336369c7d3cbe6d0fe
    { giris: "Viessmann — E3", tip: "kod",
      anlam: "Vitodens 100-W/111-W/111-F ve Connect/Trend'de arıza değil: ViCare'de Evde tatil ya da Tatil programı açık; eski Vitotronic'li 200-W/300-W'de anlamı farklı.",
      yazi: "viessmann-kombi-e3-hatasi" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf · md5 5513c22c39f416336369c7d3cbe6d0fe
    { giris: "Viessmann — E10", tip: "kod",
      anlam: "WLAN kurulurken ana ağ bağlantısı kurulamadı; modem bağlantısı, 2,4 GHz ağ ve Wi-Fi şifresi kontrol edilir.",
      yazi: "viessmann-kombi-e10-hatasi" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf · md5 5513c22c39f416336369c7d3cbe6d0fe
    { giris: "Viessmann — E12", tip: "kod",
      anlam: "WLAN kurulurken sunucu bağlantısı kurulamadı; Viessmann bağlantının daha sonra yeniden kurulmasını istiyor.",
      yazi: "viessmann-kombi-e10-hatasi" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf · md5 5c0d0900f6f66d9eb9dc09855ae7cb04
    { giris: "Viessmann — CL", tip: "kod",
      anlam: "Brülör bir arıza nedeniyle kilitlendi; arıza numarası not edilip kilit ön paneldeki ok düğmeleriyle açılır, tekrarlarsa servis.",
      yazi: "viessmann-kombi-cl-hatasi" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf · md5 5513c22c39f416336369c7d3cbe6d0fe
    { giris: "Ekranda uyarı üçgeni var (Viessmann)", tip: "belirti",
      anlam: "Sabit üçgende arıza kodu servise bildirilir; üçgen ve kod yanıp sönüp brülör çalışmıyorsa kilit kullanıcı tarafından açılabilir.",
      yazi: "viessmann-kombi-cl-hatasi" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5791986VBA00002_1.pdf · md5 5806d06b45d167c0b6e7ebe1ce6c0721
    { giris: "Viessmann Vitopend — F02, F03, F04, F05, F07, F08", tip: "kod",
      anlam: "Vitopend 100-W'de resetlenebilen kodlar: MODE ve OK aynı anda; arıza göstergesi geri gelirse servis.",
      yazi: "viessmann-vitopend-kombi-hata-kodlari" },
    // kaynak: https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5791986VBA00002_1.pdf · md5 5806d06b45d167c0b6e7ebe1ce6c0721
    { giris: "Viessmann Vitopend — F10, F30, F98 ve anahtar sembollü kodlar", tip: "kod",
      anlam: "0C, A0, CC, F10–F98 grubunda kilit kullanıcı tarafından açılamaz; Viessmann doğrudan yetkili servis istiyor.",
      yazi: "viessmann-vitopend-kombi-hata-kodlari" },
    // kaynak: https://www.viessmann.com.tr/tr/bilgi/bakim-ve-onarim/vitodens-200-w-300-w-hata-kodlari.html · md5 fe253fad0bb4e49ce18f1a297ef42cab
    { giris: "Viessmann Vitodens 200-W/300-W — F1, F2, b0, b8, E5", tip: "kod",
      anlam: "Vitotronic kontrol üniteli eski serilerde brülörü durduran kodlar; Viessmann önlemleri yetkili yükleniciye bırakıyor.",
      yazi: "viessmann-kombi-ariza-kodlari" },
    // kaynak: https://www.viessmann.com.tr/tr/bilgi/bakim-ve-onarim/vitodens-200-w-300-w-hata-kodlari.html · md5 fe253fad0bb4e49ce18f1a297ef42cab
    { giris: "Viessmann Vitodens 200-W/300-W — C1…CF, d6, d7, d8, E0 (normal çalışma)", tip: "kod",
      anlam: "Bu kodlarda Viessmann sistemin davranışını normal çalışma olarak veriyor; kod iletişim modülü, uzantı ya da harici giriş hatasını gösterir.",
      yazi: "viessmann-kombi-ariza-kodlari" },
    // ——— 28 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E02", tip: "kod",
      anlam: "Duotec ve Eco'da hatalı alev oluşumu; RESET'e basılır, sorun devam ederse yetkili servis.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E03", tip: "kod",
      anlam: "Duotec ve Eco'da aşırı ısınma hatası; RESET'e basılır, sorun devam ederse yetkili servis.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E09", tip: "kod",
      anlam: "Duotec ve Eco'da gaz valfi geri besleme hatası; yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E15", tip: "kod",
      anlam: "Duotec ve Eco'da sensör sıcaklık değişim hatası; yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E18 · E33 · E35", tip: "kod",
      anlam: "Sıcaklık sensörü kodları: E18 NTC sensör test hatası, E33 dönüş, E35 çıkış sıcaklık sensörü arızası; yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — E21", tip: "kod",
      anlam: "Duotec ve Eco'da elektronik kart arızası; yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · md5 df4c42a6604e3ec39b2d152606464cb0
    { giris: "Baymak — F52", tip: "kod",
      anlam: "Duotec ve Eco'da kullanım suyu sensör arızası; yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf · md5 dec11a69fd55c366d613da7ba31d6d98
    { giris: "Baymak Lunatec — H.01.18 · E.01.17", tip: "kod",
      anlam: "Su sirkülasyonu yok (H.01.18 geçici) ya da eksik (E.01.17 kalıcı); sirkülasyon ve pompa kontrolleri yetkili servis işi.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf · https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf · md5 df4c42a6604e3ec39b2d152606464cb0 · dec11a69fd55c366d613da7ba31d6d98
    { giris: "Baymak kombi nasıl resetlenir", tip: "ayar",
      anlam: "Duotec ve Eco'da hata kodunda RESET tuşuna basılır; Lunatec'te E kodlarında RESET'e 1 saniye basılır, H kodları kendiliğinden kaybolur.",
      yazi: "baymak-kombi-ariza-kodlari" },
    // kaynak: https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf · md5 3340a11b923b7332f8eb8685297970b6
    { giris: "DemirDöküm — F.22", tip: "kod",
      anlam: "Nitromix, ademiX, vintomiX'te tesisat basıncı çok düşük, ısıtma sisteminde su yetersiz; kılavuzun tedbiri sistemi doldurmak.",
      yazi: "demirdokum-kombi-f22-hatasi" },
    // kaynak: https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf · md5 3340a11b923b7332f8eb8685297970b6
    { giris: "DemirDöküm — F.28", tip: "kod",
      anlam: "Nitromix, ademiX, vintomiX'te ateşleme başarısız: önce gaz kesme vanası, sonra modele göre sınırlı reset; sürerse yetkili servis.",
      yazi: "demirdokum-kombi-f28-hatasi" },
    // kaynak: https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf · md5 7746b6a9d980072b5109b1b27926bd81
    { giris: "DemirDöküm — F10", tip: "kod",
      anlam: "Atron Condense ve Nitron Plus'ta ısıtma sisteminde yetersiz su; sistem 1,0–2,0 bar aralığına kadar doldurulur.",
      yazi: "demirdokum-kombi-f10-hatasi" },
    // kaynak: https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf · md5 7746b6a9d980072b5109b1b27926bd81
    { giris: "DemirDöküm — F04", tip: "kod",
      anlam: "Atron Condense ve Nitron Plus'ta ateşleme arızası: gaz kesme vanaları ve reset tuşu; üç denemede gitmezse yetkili servis.",
      yazi: "demirdokum-kombi-f04-hatasi" },
    // kaynak: https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf · md5 7746b6a9d980072b5109b1b27926bd81
    { giris: "DemirDöküm — F05", tip: "kod",
      anlam: "Atron Condense ve Nitron Plus'ta atık gaz hattında arıza; kılavuzun tek talimatı yetkili servis tarafından giderilmesi.",
      yazi: "demirdokum-kombi-ariza-kodlari" },
    // kaynak: https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf · md5 bdff16276288ebddd6c6cbf82d47c864
    { giris: "DemirDöküm — F.29", tip: "kod",
      anlam: "Noktalı kod ailesinde işletim sırasında alev sönüyor; kullanma kılavuzunda kullanıcı adımı yok, yetkili servis.",
      yazi: "demirdokum-kombi-ariza-kodlari" },
    // kaynak: https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf · md5 bdff16276288ebddd6c6cbf82d47c864
    { giris: "DemirDöküm — F.77", tip: "kod",
      anlam: "Noktalı kod ailesinde atık gaz klapesi arızalı; kullanma kılavuzunda kullanıcı adımı yok, yetkili servis.",
      yazi: "demirdokum-kombi-ariza-kodlari" },
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
      yazi: "buzdolabi-buzlanma-yapiyor", rehber: true },
    { giris: "Altında ya da sebze gözünde su birikiyor", tip: "belirti",
      anlam: "Tahliye deliği, normal yoğuşma ve su pınarının damlama tepsisi — kendin bakabileceğin 7 adım.",
      yazi: "buzdolabi-altinda-su-birikiyor", rehber: true },
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
      anlam: "No-frost modellerde kod mantığı; Beko E0-E4 kodları ile Vestel SR/LV uyarıları, servis noktası.",
      yazi: "buzdolabi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): 85E ile 86E AYRI kodlar — 85E düşük, 86E yüksek voltaj.
    // Yazı ikisini tek satırda birleştirmişti. 21E dondurucu fanı, 22E soğutucu fanı.
    { giris: "Samsung — 5E, 6E, 21E/22E, 84E, 85E/86E, OF OF", tip: "kod",
      anlam: "Kodların doğrulanmış anlamları, düşük/yüksek voltaj ayrımı ve OF OF demo modu tuzağı.",
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Hiç durmuyor, sürekli çalışıyor", tip: "belirti",
      anlam: "Uzun çalışmayla hiç durmama farkı; havalandırma boşluğu, kapı contası, arka ızgara tozu ve derece ayarı sırayla elenir.",
      yazi: "buzdolabi-hic-durmuyor" },
    { giris: "Derin dondurucu dondurmuyor", tip: "belirti",
      anlam: "Conta, buz tutması, termostat, hava dolaşımı ve fan; ilk üçü evde anlaşılır, kompresör ve gaz tarafı servise kalır.",
      yazi: "derin-dondurucu-dondurmuyor" },
    { giris: "Buzdolabım eski, değiştirsem mi tamir mi ettirsem?", tip: "belirti",
      anlam: "Yıllık kWh farkı üzerinden amorti hesabı, 15 yaş eşiği ve kararın üç soruluk çerçevesi.",
      yazi: "eski-buzdolabini-degistirmek-mantikli-mi" },
    { giris: "Buzluk soğuk ama dolap ılık", tip: "belirti",
      anlam: "No-frost'ta soğuk hava buzluktan fanla dolaba üflenir; fan ya da buz çözme arızalanırsa buzluk soğur, dolap ılık kalır.",
      yazi: "buzdolabi-sogutmuyor-nedenleri" },
    { giris: "Yiyecekler bozuluyor", tip: "belirti",
      anlam: "Cihaz çalışıyor ama soğutamıyorsa 6 olası neden var; ayar, conta ve arka toz kendin elenir.",
      yazi: "buzdolabi-sogutmuyor-nedenleri" },
    { giris: "Yeni taşındık, dolap soğutmuyor", tip: "belirti",
      anlam: "Yatık taşınan dolapta kompresör yağı borulara kaçmış olabilir; fişe takmadan önce birkaç saat dik bekletmek gerekir.",
      yazi: "buzdolabi-sogutmuyor-nedenleri" },
    { giris: "Gece uğulduyor", tip: "belirti",
      anlam: "Uğultudan tiz çığlığa dönen ses no-frost iç fan motorunun yatağını işaret eder; ses arttıkça fan durabilir.",
      yazi: "buzdolabi-ses-yapiyor" },
    { giris: "Fokurdama sesi geliyor", tip: "belirti",
      anlam: "Fokurtu ve şırıltı normaldir: soğutucu gazın borularda dolaşma sesidir, gelir gider.",
      yazi: "buzdolabi-ses-yapiyor" },
    { giris: "Sadece sebzelik donduruyor", tip: "belirti",
      anlam: "Sebzelik soğuk havanın indiği bölgeye yakındır; ayarı bir kademe düşürüp yiyecekleri arka duvardan ayırmak çoğu vakada yeter.",
      yazi: "buzdolabi-cok-sogutuyor" },
    { giris: "Elektrik kesintisinden sonra çalışmadı", tip: "belirti",
      anlam: "Bazı modellerde motor durduktan hemen sonra kalkmaz; basınç dengelenene kadar birkaç dakikalık gecikme normaldir.",
      yazi: "buzdolabi-motoru-calismiyor" },
    { giris: "Kapı kendiliğinden açılıyor", tip: "belirti",
      anlam: "Cihaz öne eğikse bırakılan kapı aralanır; ön denge ayaklarını çevirmek kullanıcının yapabileceği bir iştir.",
      yazi: "buzdolabi-kapisi-tam-kapanmiyor" },
    { giris: "Mutfak zeminine su damlıyor", tip: "belirti",
      anlam: "Önce arka iç duvardaki tahliye deliğine, su pınarlı modelde damlama tepsisine bakılır.",
      yazi: "buzdolabi-altinda-su-birikiyor" },
    { giris: "Soğutma yavaş yavaş zayıfladı", tip: "belirti",
      anlam: "Kademeli soğutma kaybı gaz kaçağının en tutarlı işaretidir — ama önce conta, havalandırma ve ayar elenmelidir.",
      yazi: "buzdolabi-gaz-kacagi-nasil-anlasilir" },
    { giris: "Ekranda OF OF yazıyor", tip: "kod",
      anlam: "Panel çalışıyor ama soğutma yoksa bu çoğu zaman arıza değil mağaza/demo modudur; çıkış da panelden yapılır.",
      yazi: "samsung-buzdolabi-hata-kodlari" },
    { giris: "İçinde kötü koku var", tip: "ayar",
      anlam: "Sirke ve karbonatla kimyasalsız temizliğin adımları; koku sürerse çekmece altı ve tahliye kanalı bakılır.",
      yazi: "buzdolabi-nasil-temizlenir" },
    { giris: "Elektrik kesildi, dondurucudakiler ne kadar dayanır", tip: "ayar",
      anlam: "Kapı hiç açılmazsa dolu dondurucu yaklaşık 48, yarı dolu yaklaşık 24 saat güvenli tutar; kural kapıyı açmamaktır.",
      yazi: "derin-dondurucu-kac-derece-olmali" },
    { giris: "Conta yapış yapış olmuş, kararmış", tip: "ayar",
      anlam: "Kâğıt testiyle kontrol, ılık su-sabunla temizlik ve katlanan bölümü düzeltme 15 dakikalık kullanıcı işidir.",
      yazi: "buzdolabi-kapi-contasi-bakimi" },
    { giris: "Tatile çıkıyorum, fişini çekeyim mi", tip: "ayar",
      anlam: "Kısa tatilde çekilmez, tatil modu ya da ekonomik kademe kullanılır; aylarca boş kalacaksa boşalt, temizle, kapıyı aralık bırak.",
      yazi: "tatile-cikarken-buzdolabi-ve-cihazlar" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    // 22 Ağu (TARAMA-1): "iki ayrı kod şeması" tezi ÇÖKTÜ — üretici YİRMİ kodluk TEK
    // liste yayımlıyor. F, S ve D ile başlayan kod hiç yok; "kodlar toplanır" (E3=E1+E2)
    // mekanizması da hiçbir üretici belgesinde geçmiyor. Hepsi çıkarıldı.
    { giris: "Arçelik — E0'dan E24'e 20 kod", tip: "kod",
      anlam: "Üreticinin yayımladığı tam liste: bölme sensörleri, defrost, fanlar ve buzmatik.",
      yazi: "arcelik-buzdolabi-hata-kodlari" },
    // 22 Ağu (TARAMA-1): E2 ve E3 EKLENDİ — yazı ikisini "doğrulanamıyor" diye
    // atlıyordu, oysa üreticinin resmî listesinde net. Ters yönde bir hataydı:
    // fazla iddia değil, EKSİK YAYIN.
    { giris: "Beko — E0, E1, E2, E3, E4", tip: "kod",
      anlam: "Defrost hattı ve soğutucu bölme sensörleri; evde buz çözdürme adımı dahil.",
      yazi: "beko-buzdolabi-hata-kodlari" },
    { giris: "Bosch — alarm mı, kod mu", tip: "kod",
      anlam: "Bosch buzdolabı çoğu zaman kodla değil alarmla konuşur; tatil modu en sık karışan durum.",
      yazi: "bosch-buzdolabi-hata-kodlari" },
    { giris: "LG — Er FF, rF, CF, IF, dH", tip: "kod",
      anlam: "İki harfli kod doğrudan parçayı söylüyor; fan kodlarının arkasında çoğu zaman buz var.",
      yazi: "lg-buzdolabi-hata-kodlari" },
    { giris: "Buz yapmıyor / buzmatik boş", tip: "belirti",
      anlam: "Su hattı, buzluk sıcaklığı ve buzmatik kolu sırasıyla kontrol ediliyor.",
      yazi: "buzdolabi-buz-yapmiyor" },
    { giris: "Yazın kaç dereceye alınmalı", tip: "ayar",
      anlam: "Sıcak aylarda doğru ayar ve duvar mesafesi; yanlış ayar hem soğutmayı hem tüketimi bozuyor.",
      yazi: "buzdolabi-yaz-ayari" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    { giris: "Gaz bitti mi, kaçak mı", tip: "belirti",
      anlam: "Buzdolabı kapalı devredir, gaz kullanımla azalmaz; azaldıysa kaçak var ve kaçak bulunmadan dolum kalıcı olmaz.",
      yazi: "buzdolabi-gaz-dolumu" },
    // ——— 27 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://statik.vestel.com.tr/webfiles/20263682_k.pdf · md5 686a18210032057be328243bd73f033b
    { giris: "Vestel — E09", tip: "kod",
      anlam: "Dondurucu yeterince soğuk değil, özellikle uzun kesinti sonrası: çözülen gıdayı tekrar dondurma, daha soğuk ayar ya da hızlı dondurma.",
      yazi: "vestel-buzdolabi-e09-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20263704_k.pdf · md5 70b85e8c382ca01b421f743d8117c15a
    { giris: "Vestel — E10", tip: "kod",
      anlam: "Soğutucu yeterince soğuk değil: daha soğuk ayar ya da hızlı soğutma, hava kanalı ve sensör önünü aç, kapıyı sık açma.",
      yazi: "vestel-buzdolabi-e10-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20263682_k.pdf · md5 686a18210032057be328243bd73f033b
    { giris: "Vestel — E11", tip: "kod",
      anlam: "Soğutucu gereğinden soğuk, gıdalar donmaya başlar: hızlı soğutmayı kapat, ayarı normal kullanım derecesine getir.",
      yazi: "vestel-buzdolabi-e11-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20263682_k.pdf · md5 686a18210032057be328243bd73f033b
    { giris: "Vestel — E08", tip: "kod",
      anlam: "Düşük voltaj uyarısı (170 V altı): arıza değil, gerilim düzelince kendiliğinden kalkar; sürerse Vestel iletişim merkezi.",
      yazi: "vestel-buzdolabi-e09-hatasi" },
    // kaynak: https://statik.vestel.com.tr/webfiles/20263682_k.pdf · md5 686a18210032057be328243bd73f033b
    { giris: "Vestel — E01, E02, E03, E06, E07", tip: "kod",
      anlam: "Sensör hatası uyarısı: Vestel'in talimatı en kısa zamanda iletişim merkezini arayıp teknik destek istemek.",
      yazi: "vestel-buzdolabi-e09-hatasi" },
    // ——— 28 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392536506/ · md5 ea2246077e177b4518d4ce48b4c389e6
    { giris: "LG — Er FF", tip: "kod",
      anlam: "Dondurucu fan motoru normal çalışmıyor ya da çevresindeki buzla kilitlenmiş: önce 5 dakikalık enerji sıfırlaması, kod dönerse fiş çekili ve kapaklar açık yazın bir, kışın üç gün buz çözdürme.",
      yazi: "lg-buzdolabi-er-ff-hatasi" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392536506/ · md5 ea2246077e177b4518d4ce48b4c389e6
    { giris: "LG — Er rF", tip: "kod",
      anlam: "Buzdolabı bölmesi fan motoru normal çalışmıyor: fişi çekip ya da sigortayı kapatıp yaklaşık 5 dakika sonra yeniden çalıştır; aynı kod tekrarlarsa LG servisi.",
      yazi: "lg-buzdolabi-er-ff-hatasi" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392527392/ · md5 a27d0f3747455faf9ff2f8e730e6b6ab
    { giris: "LG — Er dH, F dH, r dH", tip: "kod",
      anlam: "Buz çözme arızası: sebep buzla tıkanmış drenaj deliğiyse fişi çek, kapıları ardına kadar aç, buzun erimesi için yazın bir, kışın üç gün bekle; tekrarlarsa LG servisi.",
      yazi: "lg-buzdolabi-er-dh-hatasi" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392410431/ · md5 d360c4dd41be2932ee8c30e9b24d58e7
    { giris: "LG — Ekranda OFF yazıyor, soğutmuyor", tip: "kod",
      anlam: "Arıza değil, mağaza teşhiri için olan özel işlev: ekran çalışır, soğutma çalışmaz; fişi çekip 10 saniye sonra enerjiyi geri verince kalkar.",
      yazi: "lg-buzdolabi-off-hatasi" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392534839/ · md5 4bda47ba0ba3c965563415a8e61a998c
    { giris: "LG — Er CH / Er CL", tip: "kod",
      anlam: "Soğutma gücü düştü: yeni kurulum ya da taşınma sonrasıysa LG servisi; kullanım sırasındaysa kapıyı kontrol edip 5 dakikalık enerji sıfırlaması yap.",
      yazi: "lg-buzdolabi-er-ch-cl-hatasi" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153397197210/ · md5 89ad768ec0df351f408beb3319b251a0
    { giris: "LG — Er CF", tip: "kod",
      anlam: "Arkadaki kompresörün ısısını dağıtan fan motoru çalışmıyor (bazı modellerde ekranda yalnız C); enerji sıfırlamasıyla silinir ama 3 saat sonra dönebilir, tekrarlarsa LG servisi.",
      yazi: "lg-buzdolabi-hata-kodlari" },
    // kaynak: https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153397191231/ · md5 3cdf1f299166477df4cc034caad904ee
    { giris: "LG — Er CO", tip: "kod",
      anlam: "Ana kart ile ekran kartı arasında iletişim yok; kararsız elektrikten geçici olabilir: 5 dakikalık enerji sıfırlaması, aynı kod tekrarlarsa LG servisi.",
      yazi: "lg-buzdolabi-hata-kodlari" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf · md5 edae9a5819b091bc55152ce19142f777
    { giris: "Samsung — E09", tip: "kod",
      anlam: "Dondurucu yeterince soğuk değil, özellikle uzun kesinti sonrası: çözülen gıdayı tekrar dondurma, daha soğuk ayar ya da hızlı dondurma.",
      yazi: "samsung-buzdolabi-e09-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf · md5 edae9a5819b091bc55152ce19142f777
    { giris: "Samsung — E10", tip: "kod",
      anlam: "Soğutucu yeterince soğuk değil: +4 °C'ye gelene kadar hızlı soğutma, kapıyı sık açma, hava dolaşımını kapatma.",
      yazi: "samsung-buzdolabi-e10-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf · md5 edae9a5819b091bc55152ce19142f777
    { giris: "Samsung — E11", tip: "kod",
      anlam: "Soğutucu gereğinden soğuk, yiyecekler donmaya başlar: hızlı soğutmayı kapat, ayarı 4 °C ya da daha sıcağa al.",
      yazi: "samsung-buzdolabi-e11-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/buzdolabim-e08-uyarisi-veriyor-ne-yapabilirim/ · md5 7f8180ba93b2c7ea600acecbfc5bd90d
    { giris: "Samsung — E08", tip: "kod",
      anlam: "Düşük voltaj uyarısı (170 V altı): arıza değil, gerilim düzelince kendiliğinden kalkar; sürerse Samsung desteği.",
      yazi: "samsung-buzdolabi-e09-hatasi" },
    // kaynak: https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf · md5 edae9a5819b091bc55152ce19142f777
    { giris: "Samsung — E01, E02, E03, E06, E07", tip: "kod",
      anlam: "Sensör hatası uyarısı: Samsung'un talimatı en kısa zamanda iletişim merkezini arayıp teknik destek istemek.",
      yazi: "samsung-buzdolabi-e09-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/buzdolabimda-de-on-uyarisi-aliyorum-ne-yapabilirim/ · md5 4350a6055ceea025c5fdf25c5407569b
    { giris: "Samsung — DE ON", tip: "kod",
      anlam: "Demo (bayi) modu: Mod ve Çocuk kilidi tuşlarına 5 saniyeden uzun bas; sürerse fişi çek, 30 saniye bekle, tak.",
      yazi: "samsung-buzdolabi-de-on-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/buzdolabim-ee-uyarisi-veriyor-ne-yapabilirim/ · md5 8f023c97a09dcf85d112af65418dba48
    { giris: "Samsung — EE", tip: "kod",
      anlam: "Ekonomi modu göstergesi: arıza değil; dondurucu ayarı değişince ya da hızlı mod seçilince iptal olur.",
      yazi: "samsung-buzdolabi-de-on-hatasi" },
    // kaynak: https://www.samsung.com/tr/support/home-appliances/what-can-i-do-when-i-get-pc-error-code-on-samsung-refrigerator/ · md5 a22613ab4735b2d149fc8a9fc52e525c
    { giris: "Samsung — PC", tip: "kod",
      anlam: "Bileşenler arası iletişim hatası: fişi çekip 15-30 saniye bekle; kapak raflarını hafiflet, kapıyı tam kapat.",
      yazi: "samsung-buzdolabi-pc-hatasi" },
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
    { giris: "Vestel · Arçelik · Daikin — kod okuma mantığı", tip: "kod",
      anlam: "Split klimalarda kod nasıl okunur; üç markada üreticinin kendi kılavuzuyla doğrulanabilen karşılıklar ve servis sınırı.",
      yazi: "klima-ariza-kodlari" },
    { giris: "Dış ünite temizliği", tip: "ayar",
      anlam: "Sökmeden, dışarıdan temizliğin yolu; hortumla yıkamanın neden yasak olduğu ve yükseklik uyarısı.",
      yazi: "klima-dis-unite-temizligi" },

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Saatte ne kadar elektrik harcar", tip: "ayar",
      anlam: "Kapasiteye göre tipik saatlik tüketim, inverter farkı ve tüketimi şişiren beş etken.",
      yazi: "klima-saatte-ne-kadar-elektrik-harcar" },
    { giris: "Ekran yok, ön paneldeki ışıklar yanıp sönüyor", tip: "kod",
      anlam: "Ekransız modellerde arıza bildirimi ışıkların yanıp sönme düzeniyle yapılır; düzen videoya alınıp kılavuz tablosuyla karşılaştırılır.",
      yazi: "klima-ariza-kodlari" },
    { giris: "Elektrik kesintisinden sonra klima çalışmıyor", tip: "belirti",
      anlam: "Birçok klima kesinti sonrası kendini birkaç dakika koruma modunda bekletir; süre dolduğu hâlde açılmıyorsa şalter, kumanda ve kod sırayla bakılır.",
      yazi: "klima-ariza-kodlari" },
    { giris: "Klima çalışıyor ama oda serinlemiyor", tip: "belirti",
      anlam: "Hava üflediği hâlde serinlik yoksa filtre, ayar, dış ünite ve termostat sırayla değerlendirilir.",
      yazi: "klima-sogutmuyor-nedenleri" },
    { giris: "Dışarısı sıcakken hiç soğutmuyor", tip: "belirti",
      anlam: "Dışarı soğuk hava hiç gelmiyorsa gaz ya da kompresör şüphesi öne çıkar; öncesinde dış ünitenin önü açılır.",
      yazi: "klima-sogutmuyor-nedenleri" },
    { giris: "Filtreyi temizledim, yine soğutmuyor", tip: "belirti",
      anlam: "Filtre temiz ve ayarlar doğruyken soğutma dönmüyorsa iş gaz, kompresör ya da dış ünite tarafına geçer.",
      yazi: "klima-sogutmuyor-nedenleri" },
    { giris: "İç ünite çalışıyor, dış ünite dönmüyor", tip: "belirti",
      anlam: "En sık sebep dış ünitedeki marş kapasitörünün zayıflamasıdır; kompresör mırıldanır ama dönmez.",
      yazi: "klima-calismiyor" },
    { giris: "Kumanda ekranı yanıyor ama klima açılmıyor", tip: "belirti",
      anlam: "Kumanda ve elektrik sağlamken komut alınmıyorsa iç ünitenin elektronik kartı ya da alıcı sensörü şüphelenilir.",
      yazi: "klima-calismiyor" },
    { giris: "Klimanın sigortası tekrar tekrar atıyor", tip: "belirti",
      anlam: "Kaldırdıkça yeniden atan sigorta elektrik tarafında arıza demektir; zorlanmaz, servis işidir.",
      yazi: "klima-calismiyor" },
    { giris: "İç üniteden su akıyor", tip: "belirti",
      anlam: "Yoğuşma suyu dışarı atılamayınca iç üniteden taşar; ilk bakılacak yer tahliye hattı ve hortumun dış ucudur.",
      yazi: "klima-su-damlatiyor" },
    { giris: "İç ünite buz tutuyor", tip: "belirti",
      anlam: "Buzlanmanın arkasında kirli filtre ya da gaz azlığı vardır; eriyen buz tavayı taşırıp damlamaya döner.",
      yazi: "klima-su-damlatiyor" },
    { giris: "Açınca yanık ya da plastik kokusu geliyor", tip: "belirti",
      anlam: "Bu koku küf değil elektrik uyarısıdır: cihaz kapatılır, enerjisi kesilir ve kendin açılmadan servis çağrılır.",
      yazi: "klima-koku-yapiyor" },
    { giris: "Dış ünite ses yapıyor, titriyor", tip: "belirti",
      anlam: "Metalik sürtme, tıkırtı ya da güçlü titreşimde klima kapatılır; ünitenin oturması ve ayakları gözle kontrol edilir.",
      yazi: "klima-dis-unite-temizligi" },
    { giris: "Dış üniteyi hortumla yıkayabilir miyim", tip: "ayar",
      anlam: "Hayır: gövdede elektronik kart ve elektrik bağlantısı var, kullanıcı temizliği fırça-süpürge-nemli bezle sınırlıdır.",
      yazi: "klima-dis-unite-temizligi" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    // 22 Ağu (TARAMA-1): "üç kod dili" çerçevesi uydurma bloklar üzerine kuruluydu.
    // E ve P serisi Arçelik'in hiçbir yayınında yok; tek tablo CH serisi (34 kod).
    { giris: "Arçelik — CH serisi (34 kod)", tip: "kod",
      anlam: "Arçelik'in yayımladığı tek tablo CH'dir; E ve P listeleri markaya ait değil.",
      yazi: "arcelik-klima-hata-kodlari" },
    { giris: "Çalışıyor ama iç ünite üflemiyor", tip: "belirti",
      anlam: "Fan motoru, kanat ayarı ve filtre tıkanması ayrımı; evde bakılacaklar sırayla.",
      yazi: "klima-fan-donmuyor" },
    { giris: "Kumanda çalışmıyor", tip: "belirti",
      anlam: "Telefon kamerasıyla iki dakikada kumanda testi: sorun kumandada mı, iç ünitede mi.",
      yazi: "klima-kumandasi-calismiyor" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    { giris: "Daikin — U, E, A, F, H, J, L kodları", tip: "kod",
      anlam: "İlk harf üniteyi söylüyor: A/C iç ünite, E/F/H/J/L dış ünite, U sistem. Kodu ekranda okuma yolu dahil.",
      yazi: "daikin-klima-hata-kodlari" },
    { giris: "Vestel — Er + iki hane", tip: "kod",
      anlam: "Güncel inverter kılavuzlarında format Er01, Er11, Er13; DF, AE, HL ise arıza değil koruma mesajı.",
      yazi: "vestel-klima-hata-kodlari" },
    { giris: "Samsung — C1, E5, E6, E7 · CF, CL, dF", tip: "kod",
      anlam: "CF, CL ve dF arıza değil hatırlatıcı; C1 yanındaki sayı asıl arızayı söylüyor.",
      yazi: "samsung-klima-hata-kodlari" },
    { giris: "Montaj · söküm-takma nelerden oluşur", tip: "ayar",
      anlam: "Taşınmada söküm ve takma iki ayrı iş; gaz toplanmazsa ne kaybediliyor ve kötü montaj garantiyi nasıl etkiliyor.",
      yazi: "klima-montaj-sokum-takma" },
    // ——— 28 Eyl 2026, Sprint #144 (PAZ tamir föyü; her giriş üreticinin kendi belgesinden, md5'li) ———
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — A5", tip: "kod",
      anlam: "Donma koruması veya yüksek basınç kontrolü (iç ünite); Daikin önce hava filtresinin kirli ya da tozlu olup olmadığını soruyor.",
      yazi: "daikin-klima-a5-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf · md5 55395d5dca925e6c5a3e29a64e180cd5
    { giris: "Daikin — E7", tip: "kod",
      anlam: "Dış ünite fanı: DC fan kilidi / DC fan motoru arızalı; Daikin kesici kapalıyken fana takılan yabancı cismin çıkarılmasını istiyor.",
      yazi: "daikin-klima-e7-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf · md5 55395d5dca925e6c5a3e29a64e180cd5
    { giris: "Daikin — F3", tip: "kod",
      anlam: "Deşarj borusu sıcaklık kontrolü (dış ünite); Daikin dış ünitenin hava çıkışının tıkalı olup olmadığını soruyor.",
      yazi: "daikin-klima-f3-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf · md5 55395d5dca925e6c5a3e29a64e180cd5
    { giris: "Daikin — F6", tip: "kod",
      anlam: "Soğutma modunda yüksek basınç kontrolü (dış ünite); Daikin dış ünitenin hava çıkışının tıkalı olup olmadığını soruyor.",
      yazi: "daikin-klima-f6-hatasi" },
    // kaynak: https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-hata-kodlari-nelerdir-nasil-cozulur · md5 c2a49add61690e63ffe56243ecaf46ba
    { giris: "Daikin — E0", tip: "kod",
      anlam: "Daikin Türkiye'ye göre iç ya da dış ünitede genel arıza; kapatıp fişten çekip 5 dakika sonra yeniden başlatma öneriliyor.",
      yazi: "daikin-klima-e0-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf · md5 55395d5dca925e6c5a3e29a64e180cd5
    { giris: "Daikin — L3", tip: "kod",
      anlam: "Elektrikli parçalar ısı hatası (dış ünite); Daikin F3/F6 ile aynı kontrolü istiyor: dış ünitenin hava çıkışı tıkalı mı.",
      yazi: "daikin-klima-f6-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf · md5 55395d5dca925e6c5a3e29a64e180cd5
    { giris: "Daikin — L4", tip: "kod",
      anlam: "Radyasyon kanadı (inverter soğutma bloğu) sıcaklık yükselmesi; Daikin dış ünitenin hava çıkışının tıkalı olup olmadığını soruyor.",
      yazi: "daikin-klima-f6-hatasi" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — L5", tip: "kod",
      anlam: "İnverter anlık aşırı akımı (DC) / çıkış aşırı akım; Daikin Türkiye cihazın hemen kapatılıp servise başvurulmasını istiyor.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-hata-kodlari-nelerdir-nasil-cozulur · md5 c2a49add61690e63ffe56243ecaf46ba
    { giris: "Daikin — U0", tip: "kod",
      anlam: "Soğutucu eksikliği; Daikin'e göre gaz basıncı kontrolü yalnız yetkili teknik servisin işi.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — U2", tip: "kod",
      anlam: "Aşırı voltaj tespiti / gerilim düşüşü veya ana devre aşırı gerilimi (sistem kodu).",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — U4", tip: "kod",
      anlam: "İç ünite ile dış ünite arasında sinyal iletimi hatası (sistem kodu).",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — A1", tip: "kod",
      anlam: "İç ünite elektronik kartı (PCB) anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — A6", tip: "kod",
      anlam: "İç ünite fan motoru (DC motor) anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — C4", tip: "kod",
      anlam: "İç ünite ısı eşanjörü termistörü (sıcaklık sensörü) anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — C9", tip: "kod",
      anlam: "Oda sıcaklığı (emiş havası) termistörü anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — E1", tip: "kod",
      anlam: "Dış ünite elektronik kartı (PCB) anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — E5", tip: "kod",
      anlam: "Aşırı yük aktivasyonu: kompresör aşırı yüklenmesi (dış ünite).",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — E6", tip: "kod",
      anlam: "Kompresör kilidi / kompresör çalıştırma arızası (dış ünite).",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — H9", tip: "kod",
      anlam: "Dış sıcaklık termistörü (sensörü) anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — J3", tip: "kod",
      anlam: "Deşarj borusu termistörü (sıcaklık sensörü) anormalliği; F3 ile karıştırılmamalı.",
      yazi: "daikin-klima-hata-kodlari" },
    // kaynak: https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf · md5 ab2d928437bec2a3d5f374f3aee85cb1
    { giris: "Daikin — J6", tip: "kod",
      anlam: "Dış ünite ısı eşanjörü termistörü anormalliği.",
      yazi: "daikin-klima-hata-kodlari" },
  ],

  "Fırın / Ocak / Aspiratör": [
    { giris: "Ocak ateşleme yapmıyor / kıvılcım yok", tip: "belirti",
      anlam: "Çakmak çakıyor ama ocak yanmıyorsa önce başlık temizliği, buji ve gaz akışı.",
      yazi: "ocak-atesleme-yapmiyor", rehber: true },
    // 23 Ağu: `rehber: true` eklendi — gövde 6 adıma çevrildi ve `guide:` bloğu kondu.
    // YK #31 kapsamı KONTROL EDİLDİ: altı adımın altısı da kapak/başlık seviyesi, hiçbiri
    // söküm ya da parça değişimi değil; bujinin KENDİ değişimi sayfada zaten servis işi
    // olarak işaretli kalıyor. Yani rehber, değişimi değil değişimden ÖNCEKİ ücretsiz
    // kontrolleri anlatıyor — #31'in yasakladığı şey değil.
    { giris: "Ateşleme bujisi değişmeli mi", tip: "belirti",
      anlam: "Bujiyi değiştirmeden önce denenecek 6 ücretsiz kontrol ve bu işin neden servis işi olduğu.",
      yazi: "ocak-atesleme-bujisi-degisimi", rehber: true },
    { giris: "Fırın ısınmıyor ya da geç ısınıyor", tip: "belirti",
      anlam: "Rezistans, termostat, fan ve kart ayrımı; servis çağırmadan önce kontroller.",
      yazi: "firin-isinmiyor", rehber: true },
    // 29 Ağu 2026: eski metin ("kendin-çöz adımı yayınlamadık") PR #130 ile yanlışlandı —
    // `davlumbaz-cekmiyor` artık 7 adımlık rehber. PAZ föyü (2026-08-29) ile giriş, rehberin
    // kendi §"Filtre değilse: servis işaretleri" bölümüne daraltıldı. `rehber: true` YOK:
    // bu satır kendin-çöz vaadi taşımıyor (emsal: 788. satırdaki koku girişi).
    { giris: "Aspiratör sesi arttı ya da fan hiç dönmüyor", tip: "belirti",
      anlam: "Filtreler temizken süren çekiş kaybı fan kanadını, rulmanı, anahtarı ya da baca klapesini işaret eder; bu taraf servis işidir.",
      yazi: "davlumbaz-cekmiyor" },

  // ——— Boşluk dalgası (20 Ağu 2026, YK — 85-konu taraması) ———
    { giris: "Fırın eşit pişirmiyor (altı çiğ, üstü yanık)", tip: "belirti",
      anlam: "Tepsi konumu, dönmeyen fan ya da alt rezistans olabilir; kızarma testiyle ayrımı kendin yaparsın.",
      yazi: "firin-esit-pisirmiyor", rehber: true },
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    // 26 Ağu 2026: yazı rehbere dönüştü (PAZ föyü, 7 adım) → `rehber: true` eklendi.
    // ZORUNLU, tercih değil: build'in `/tamir/` ② katman kapısı (YK #35) her `kendi: true`
    // rehberin bir giriş satırından erişilebilir olmasını ister, yoksa `process.exit(1)`.
    { giris: "Davlumbaz zayıf çekiyor", tip: "belirti",
      anlam: "En sık sebep doymuş metal yağ filtresidir; ayda bir yıkanır ve çoğu model bulaşık makinesine girer.",
      yazi: "davlumbaz-cekmiyor", rehber: true },
    { giris: "Çekiyor ama mutfakta koku kalıyor", tip: "belirti",
      anlam: "Bu ayrı bir belirtidir ve karbon filtreyi işaret eder; karbon filtre yıkanmaz, 3-6 ayda bir değiştirilir.",
      yazi: "davlumbaz-cekmiyor" },
    { giris: "Cam seramik ocak ısınmıyor", tip: "belirti",
      anlam: "Hiçbir göz çalışmıyorsa önce panel kilidine ve ocağın kendi sigortasına bakılır.",
      yazi: "cam-seramik-ocak-isinmiyor" },
    { giris: "İndüksiyonda tencere ısınmıyor", tip: "belirti",
      anlam: "İndüksiyon yalnız manyetik tabanlı tencereyi ısıtır; mıknatıs tabana sağlam yapışıyorsa tencere uyumludur.",
      yazi: "cam-seramik-ocak-isinmiyor" },
    { giris: "Ocağın tek gözü çalışmıyor", tip: "belirti",
      anlam: "Diğer gözler normalse besleme sağlamdır; o gözün ısıtıcısı ya da onu süren devre servis işidir.",
      yazi: "cam-seramik-ocak-isinmiyor" },
    { giris: "Panelde anahtar simgesi yanıyor", tip: "belirti",
      anlam: "Tuş ya da çocuk kilidi devrededir; ocak bütün komutları yok sayar, kilit simgesinin yanındaki tuşla açılır.",
      yazi: "cam-seramik-ocak-isinmiyor" },
    { giris: "Ocak kendi kendine kapanıyor", tip: "belirti",
      anlam: "Cam altındaki sıcaklık sınırı aşılınca göz kendini kapatır; sık tekrarlıyorsa sınırlayıcı ya da fan tarafı bakılır.",
      yazi: "cam-seramik-ocak-isinmiyor" },
    { giris: "Fırın ısınıyor ama yemek pişmiyor", tip: "belirti",
      anlam: "Geç ısınma da aynı listeye girer: rezistans, termostat, fan ve ısı kaçıran yıpranmış kapı contası.",
      yazi: "firin-isinmiyor" },
    { giris: "Fırın tek taraf ısıtıyor", tip: "belirti",
      anlam: "Alt ya da üst rezistanslardan biri yanmıştır; o ısıtıcının değişmesi gerekir.",
      yazi: "firin-isinmiyor" },
    { giris: "Turbo çalışmıyor, fan dönmüyor", tip: "belirti",
      anlam: "Sıcak havayı dağıtan fan dönmezse fırın düzgün ısınmaz; fan motoru servis tarafındadır.",
      yazi: "firin-isinmiyor" },
    { giris: "Kekin altı çiğ kalıyor", tip: "belirti",
      anlam: "Tepsi konumu, kalabalık fırın ya da alt rezistans olabilir; kızarma testiyle ayrımı kendin yaparsın.",
      yazi: "firin-esit-pisirmiyor" },
    { giris: "Çak çak ediyor ama yanmıyor", tip: "belirti",
      anlam: "Kıvılcım çıkıp alev tutmuyorsa başlık ıslak, kirli ya da yanlış oturmuştur; gaz vanasını da kontrol et.",
      yazi: "ocak-atesleme-yapmiyor" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
    { giris: "Fırın içi temizliği (piroliz · katalitik · buharlı)", tip: "ayar",
      anlam: "Hangi fırında hangi yöntem; katalitik yüzeye deterjan sürülmez, sprey nereye gitmemeli.",
      yazi: "firin-nasil-temizlenir" },
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Açılışta logo geliyor, sonra ekran kararıyor", tip: "belirti",
      anlam: "Karanlık odada telefon feneriyle yapılan test, panelin mi arka aydınlatmanın mı sustuğunu ayırır.",
      yazi: "televizyonda-ses-var-goruntu-yok" },
    { giris: "Kırmızı ışık yanıyor ama açılmıyor", tip: "belirti",
      anlam: "Cihaza güç geliyor demektir; fişten çekip birkaç dakika beklemek geçirmezse anakart ya da güç kartı çıkışı şüphelidir.",
      yazi: "tv-acilmiyor" },
    { giris: "Fişte takılı ama hiç ışık yanmıyor", tip: "belirti",
      anlam: "Hiç gösterge yanmıyorsa önce priz, güç kablosu ve farklı priz denenir; sonrasında güç kaynağı kartı öne çıkar.",
      yazi: "tv-acilmiyor" },
    { giris: "Ekran karıncalanıyor", tip: "belirti",
      anlam: "Önce kaynak ve kablo elenir; bozuk görüntü sürüyorsa panele görüntüyü süren kart tarafı şüphelidir.",
      yazi: "televizyon-goruntu-gelmiyor" },
    { giris: "Isınınca çizgi beliriyor, soğukken kayboluyor", tip: "belirti",
      anlam: "Sıcaklıkla gelip giden çizgi aynı panel bağlantı bölgesini işaret eder ve kalıcılaşma eğilimi taşır; fotoğrafla belgele.",
      yazi: "tv-ekraninda-cizgi-var" },
    { giris: "Odanın ışığı azalınca ekran kısılıyor", tip: "belirti",
      anlam: "Ortam ışığı algılama açıkken televizyon parlaklığı kendisi düşürür; menüden kapatılıp sensörün önü açılır.",
      yazi: "tv-ekrani-karariyor" },
    { giris: "Bağladığım cihaz açık ama sinyal yok yazıyor", tip: "belirti",
      anlam: "Kaynak cihaz bekleme modundaysa ya da kumandadan yanlış giriş seçiliyse bu uyarı çıkar; eleme sırası bu yazıda.",
      yazi: "tv-hdmi-sinyal-yok" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    { giris: "Uygulama açılmıyor / siyah ekranda kalıyor", tip: "belirti",
      anlam: "İnternet, önbellek, saat ve yazılım sırasıyla eleniyor; fabrika ayarı en sonda.",
      yazi: "smart-tv-uygulama-acilmiyor" },
    { giris: "Görüntü var, ses yok", tip: "belirti",
      anlam: "Sessiz mod, ses çıkışı ayarı, harici hoparlör ve panel hoparlörü sırasıyla kontrol ediliyor.",
      yazi: "tv-ses-gelmiyor" },
  // ——— 21 Ağu tur-3: tıklama odaklı kod + karar dalgası (12 yazı) ———
  // ⛔ `firin-tamiri-kac-para` ve `televizyon-tamiri-kac-para` BİLEREK BAĞLANMADI:
  //    başlıklarındaki "para" kelimesi kategori sayfasına sızıyor ve YK #35 şart 1'i
  //    ihlal ediyor (build 21 Ağu'da 3 sayfada yakaladı). Mevcut "…kaç para" yazıları da
  //    aynı sebeple bu ağaçta yok — istisna açılmadı. O yazılar /blog/ tarafında yaşıyor.
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Çalışıyor ama yemek soğuk kalıyor", tip: "belirti",
      anlam: "Işık yanıp tabla dönerken ısıtmama tablosu iç devreyi işaret eder; önce kapı, güç kademesi ve priz elenir.",
      yazi: "mikrodalga-isitmiyor" },
    { giris: "Yemek yalnız yüzeyinden ısınıyor", tip: "belirti",
      anlam: "Şebeke voltajı düşükse mikrodalga zayıf üretilir; yemek yüzeyden ya da çok yavaş ısınır.",
      yazi: "mikrodalga-isitmiyor" },
    { giris: "İçeride çatırtı ve parlama var", tip: "belirti",
      anlam: "Önce cihazı durdur; metal kap, yaldızlı tabak ve mika plakadaki yağ birikmesi en sık sebeplerdir.",
      yazi: "mikrodalga-kivilcim-cikariyor" },
    { giris: "Airfryer'da yemek çiğ kalıyor", tip: "belirti",
      anlam: "Fanın dönmesi yanıltmasın; tam oturmamış sepet güvenlik anahtarı üzerinden ısıtıcıyı kilitler.",
      yazi: "airfryer-isitmiyor" },
  ],

  "Süpürge": [
    // ——— 23 Ağu 2026, YK #31 seçenek (c): yeni rehber ———
    { giris: "Hiç açılmıyor / tuşa basınca tepki yok", tip: "belirti",
      anlam: "Priz, sigorta, kablo ve termik koruma elemesi; anahtar işinin neden servis olduğu.",
      yazi: "supurge-calismiyor", rehber: true },
    // 22 Ağu 2026 (Tolga onayı, konu #3 → b): yazı rehbere yükseltildi → `rehber: true`.
    // YK #35 ② katman denetimi bunu ŞART koşuyor: kendi rehberimiz bir giriş satırından
    // erişilebilir olmalı, yoksa build DURUR (22 Ağu'da fiilen durdurdu).
    // ⛔ YK #31 kapsamı: 6 adımın hepsi ücretsiz/bakım seviyesi — söküm ve parça değişimi yok.
    { giris: "Çekmiyor / emiş zayıf", tip: "belirti",
      anlam: "Dolu hazne, tıkalı filtre, tıkanan hortum, aşınmış fırça ve motor ayrımı.",
      yazi: "supurge-cekmiyor", rehber: true },
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Emiş gücü azaldı", tip: "belirti",
      anlam: "Dolu hazne ve tıkalı filtre en yaygın gizli sebeptir; hortum, başlık fırçası ve hava kaçağı da sırayla elenir.",
      yazi: "supurge-cekmiyor" },
    { giris: "Yerden tozu almıyor, üstünden geçiyor", tip: "belirti",
      anlam: "Başlık fırçasına dolanan saç ve iplik yerden çekişi düşürür; fırça serbest dönene kadar temizlenir.",
      yazi: "supurge-cekmiyor" },
    { giris: "Süpürgeden yanık kokusu geliyor", tip: "belirti",
      anlam: "Yanık kokusu, aşırı ısınma ve anormal ses temizlikle çözülen belirtiler değildir; motor tarafını işaret eder.",
      yazi: "supurge-cekmiyor" },
    { giris: "Şarjlı süpürge çabuk bitiyor", tip: "belirti",
      anlam: "Suçlu her zaman batarya değil: tıkalı filtre motoru zorlayınca çalışma süresi de düşer.",
      yazi: "sarjli-supurge-sarj-tutmuyor" },
    { giris: "Robot dock'ta duruyor ama sabah boş", tip: "belirti",
      anlam: "En yaygın sebep temas pinlerindeki kir ve istasyonun oturmayan konumudur; batarya yaşlanmasının belirtileri ayrı.",
      yazi: "robot-supurge-sarj-olmuyor" },
    { giris: "Robot fırça uyarısı veriyor", tip: "belirti",
      anlam: "Ana fırçaya ve yan fırçaya dolanan saç-ip vakaların çoğunu açıklar; fırça yuvası ve emiş ağzı da kontrol edilir.",
      yazi: "robot-supurge-firca-donmuyor" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    { giris: "Hortum tıkandı / çekiş düştü", tip: "belirti",
      anlam: "Işığa tutma testiyle tıkanıklığın yerini bulup hortumu zarar vermeden açıyorsun.",
      yazi: "supurge-hortumu-tikandi" },
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Su ılık geliyor", tip: "belirti",
      anlam: "Yeni takılan damacananın soğuması birkaç saat sürer; hüküm vermeden önce cihaza bir gece tanınır.",
      yazi: "su-sebili-sogutmuyor" },
    { giris: "Sıcak su geliyor, soğuk gelmiyor", tip: "belirti",
      anlam: "Sebilde sıcak ve soğuk taraflar bağımsız çalışır; birinin çalışması arızanın yalnız diğer tarafta olduğunu gösterir.",
      yazi: "su-sebili-sogutmuyor" },
    { giris: "Damacanayı değiştirdim, altından su akıyor", tip: "belirti",
      anlam: "Değişimde birkaç damla normaldir; dakikalar sonra da akıyorsa damacana tıkaca tam oturmamış ya da ağzı çatlaktır.",
      yazi: "su-sebili-altinda-su-birikiyor" },
    { giris: "Musluktan damla damla akıyor", tip: "belirti",
      anlam: "Kâğıt havlu testiyle hangi musluğun sızdırdığı bulunur; kolun altına oturmuş kireç ya da kırıntı kapanmayı engelliyor olabilir.",
      yazi: "su-sebili-altinda-su-birikiyor" },
    { giris: "Su çok yavaş akıyor", tip: "belirti",
      anlam: "Günler içinde yavaşlayan akış tıkanan tortu filtresinin tipik belirtisidir; ani kesilmede önce vana ve şebeke basıncı bakılır.",
      yazi: "su-aritma-su-gelmiyor" },
    { giris: "Cihaz sürekli çalışıyor ama su vermiyor", tip: "belirti",
      anlam: "Tankı doldurmaya çalışıp dolduramıyor demektir; sürekli çalışma pompaya zarar verdiği için cihaz kapatılıp servise danışılır.",
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

  // ——— Kayıt genişletmesi (21 Ağu 2026, YK #80 · hedef 200+) ———
    { giris: "Yazdır dedim ama çıkmıyor", tip: "belirti",
      anlam: "Belge kuyrukta bekliyorsa yazıcı çevrimdışıdır; kuyruğu boşaltıp cihazı kapatıp açmak çoğu vakayı çözer.",
      yazi: "yazici-cevrimdisi-gorunuyor" },
    { giris: "Tepside kâğıt var ama kâğıt yok diyor", tip: "belirti",
      anlam: "Nemli ya da birbirine yapışmış yapraklar, ayarsız tepsi kılavuzu ve yolda kalan bir yaprak aynı uyarıyı verir.",
      yazi: "yazici-kagit-cekmiyor" },
    { giris: "Açılışta bip sesleri geliyor", tip: "belirti",
      anlam: "Bip dizilimi ve kasa ışıkları BIOS'un arıza bildirimidir; hangi kontrol sana ait, hangisi servise.",
      yazi: "bilgisayar-acilmiyor-ekran-gelmiyor" },
    { giris: "Fan uçak gibi ses yapıyor", tip: "belirti",
      anlam: "Düzgün vınlama fanın değil, onu o devirde çalıştıran ısının işaretidir; zemin, hava kanalı ve arka plan programları elenir.",
      yazi: "laptop-isiniyor-fan-sesi" },
    { giris: "Fandan takırtı ve sürtme sesi geliyor", tip: "belirti",
      anlam: "Takırtı vınlamadan farklıdır: kanadın sürtmesine ya da yatağın yıpranmasına işaret eden mekanik bir bulgudur.",
      yazi: "laptop-isiniyor-fan-sesi" },
    { giris: "Takılı, şarj olmuyor yazıyor", tip: "belirti",
      anlam: "Çoğu vakada arıza değildir; önce priz, kablo ve adaptör elenir, sonra soket gevşekliği belirtilerine bakılır.",
      yazi: "laptop-sarj-olmuyor" },
    { giris: "Yeni kartuş taktım, tanımadı", tip: "belirti",
      anlam: "İlk şüpheli kirli temas noktası ve çiptir; çıkar-tak, kuru bezle temizlik ve sürücü sıfırlama sırayla denenir.",
      yazi: "yazici-kartus-tanimiyor" },
    { giris: "Mürekkep dolu görünüyor ama çıktı soluk", tip: "belirti",
      anlam: "Doluluk göstergesi püskürtme başlığının açık olduğunu göstermez; önce püskürtme denetimi deseni basılır.",
      yazi: "yazici-silik-basiyor" },
    { giris: "Yazıcı Wi-Fi ağını listede görmüyor", tip: "belirti",
      anlam: "En çok atlanan sebep frekans ayrımıdır: çoğu yazıcı yalnız 2.4GHz ağa bağlanır; sıra da önemli, önce modem.",
      yazi: "yazici-wifi-baglanmiyor" },
  // ——— 21 Ağu boşluk dalgası tur-2 (25 yeni yazı) ———
    { giris: "Bilgisayar yavaşladı", tip: "belirti",
      anlam: "Parça değiştirmeden önce yapılacak kontroller: başlangıç programları, disk doluluğu, ısınma.",
      yazi: "bilgisayar-yavas-calisiyor" },
    { giris: "Laptop klavyesi çalışmıyor", tip: "belirti",
      anlam: "Birkaç tuş mu tamamı mı sorusu arıza yerini söylüyor; evde ayrım yapılabiliyor.",
      yazi: "laptop-klavyesi-calismiyor" },
    { giris: "Yazıcıda kâğıt sıkıştı", tip: "belirti",
      anlam: "Doğru çekme yönü ve geride yırtık parça kaldı mı kontrolü; yanlış çekiş merdaneyi bozuyor.",
      yazi: "yazici-kagit-sikisti" },
  ],
};

/**
 * Bir cihazın ① katman kayıtlarını döndürür. Sıra sabittir: önce KOD, sonra BELİRTİ, sonra AYAR
 * (kullanıcı elindeki kodla gelir; kodu yoksa belirtiye, o da yoksa ayara bakar).
 * Kaydı olmayan cihazda boş dizi döner → sayfa basılmaz, hub'da dürüst "yok" kartı kalır.
 */
export const HATA_KODU_SIRA = ["kod", "belirti", "ayar"];

export function hataKoduKayitlari(cihaz) {
  // Alias-duyarlı (bkz. rehberBul): birleşen cihaz adı eski tablo anahtarına düşer.
  const liste = tabloBul(HATA_KODU_KATMANI, cihaz) || [];
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
