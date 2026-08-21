// kullanim-kilavuzlari.js — /kilavuzlar/ merkezinin TEK VERİ KAYNAĞI (YK Kararı #34, 2 Ağu 2026).
//
// ⛔ TELİF (bağlayıcı, YK #32 + #34): üreticinin kullanım kılavuzu PDF'i BARINDIRILMAZ,
//    kopyalanmaz, yeniden yayımlanmaz. Burada YALNIZ üreticinin KENDİ alan adındaki resmî
//    kılavuz/destek sayfasının adresi durur. Üçüncü taraf "manual" siteleri (manualslib,
//    kullanimkilavuzu.com.tr vb.) KULLANILMAZ — telifsiz kopya barındırıyorlar ve linklemek
//    bizi o kopyanın dağıtım zincirine sokar.
//
// ⛔ MARKA BAZLI, MODEL BAZLI DEĞİL: üreticiler kılavuzu model numarasıyla arattırıyor;
//    model başına link tutmak binlerce ölü linke ve sürekli bakıma dönerdi. Kullanıcıyı
//    markanın resmî arama sayfasına gönderiyoruz, modelini orada aratıyor.
//
// ✅ DOĞRULAMA (21 Ağu 2026, YK link bakımı — 44 adres tek tek HTTP + şüpheliler tarayıcıyla):
//    🔴 BULGU: `destek.fakir.com.tr/birlikte-cozelim` **502 Bad Gateway** — ölü link, canlıda
//    duruyordu. Markanın kendi sitesi kılavuz için `/kullanim-kilavuzlari` adresini işaret
//    ediyor; o adres tarayıcıda "Fakir Kullanım Kılavuzları" arama sayfası olarak AÇILIYOR →
//    düzeltildi. Ayrıca 9 adres daha, kullanıcıyı kılavuz sayfasına DAHA DOĞRUDAN götüren
//    resmî adresle değiştirildi (Arzum, HP, Xiaomi, Canon TR, Altus, Vestel, ECA, Vaillant,
//    Regal). ⚠️ ECA'nın eski adresi PROFESYONEL montaj kılavuzlarıydı — son kullanıcıya
//    yanlış hedefti; Regal, Vestel destek merkezine gidiyordu, artık kendi sitesine gidiyor.
// ✅ ÖNCEKİ DOĞRULAMA (2 Ağu 2026): buradaki her adres HTTP ile denendi ve 200 döndü. Yönlendiren
//    adreslerde YÖNLENDİRMENİN BİTTİĞİ adres yazıldı (kullanıcı zıplamasın, link çürümesin).
//    Doğrulanamayan markalar bilerek listeye ALINMADI — eksik olmak, ölü link vermekten iyidir.
//    Not: Arçelik grubu (Arçelik/Beko/Grundig/Altus), Sony ve Canon uçlarında Akamai kenar
//    koruması komut satırı isteklerini 403'lüyor; bu dördü gerçek tarayıcıyla doğrulandı (200).
//
// ⚠️ BAKIM: link çürümesi bu listenin ana riski. `benservis-kontrolor` koşusunda ya da
//    kılavuz sayısı değiştiğinde adresler yeniden 200 denenmelidir.
//
// TEK KAYNAK KURALI: cihaz→marka eşleşmesi burada TEKRAR YAZILMAZ; `CIHAZ_MARKALARI`'ndan
// türetilir (`kilavuzKayitlari`). Yeni marka constants.js'e eklendiğinde, kılavuz adresi
// buraya girildiği anda /kilavuzlar/ kendiliğinden uyar; ikinci liste tutulmaz.
import { CIHAZ_MARKALARI, CIHAZLAR, tabloBul, eslesenKategoriler } from "./constants.js";

/**
 * marka → { url, ozet, haric? }
 *   url   : üreticinin resmî kılavuz/destek sayfası (200 doğrulandı, yönlendirme sonrası adres)
 *   ozet  : "bu sayfada ne var" — kendi Türkçe katkımız, kılavuzun kopyası DEĞİL
 *   haric : markanın bu adresle KARŞILANMAYAN cihaz grupları (ör. Bosch'un ev aletleri
 *           sitesi kombi/klima kapsamıyor) — o cihazlarda kayıt üretilmez, yanlış yönlendirme olmaz
 */
export const MARKA_KILAVUZLARI = {
  // ── Beyaz eşya / çok kategorili Türk markaları ────────────────────────────
  "Arçelik": {
    url: "https://www.arcelik.com.tr/destek/kullanma-kilavuzlari-ve-yazilim",
    ozet: "Model numarasıyla ya da kategoriden arayarak kullanma kılavuzuna ve varsa yazılım güncellemesine ulaşırsın; model etiketinin nerede olduğu da anlatılıyor.",
  },
  "Beko": {
    url: "https://www.beko.com.tr/destek/kullanma-kilavuzlari-ve-yazilim",
    ozet: "Model numarasıyla kullanma kılavuzu ve yazılım araması; kılavuz PDF'i doğrudan Beko'nun sunucusundan açılır.",
  },
  "Grundig": {
    url: "https://www.grundig.com.tr/destek/kullanma-kilavuzlari-ve-yazilim",
    ozet: "Grundig ürünlerinin kullanma kılavuzları ve TV yazılım dosyaları model numarasıyla aranır.",
  },
  "Altus": {
    url: "https://www.altus.com.tr/destek/kullanım-kılavuzları",
    ozet: "Altus yardım merkezi: ürün grubunu seçip kullanım kılavuzuna, garanti ve servis bilgisine aynı sayfadan gidiliyor.",
  },
  "Vestel": {
    url: "https://destekmerkezi.vestel.com.tr/urunum",
    ozet: "Vestel'in tanıtma ve kullanma kılavuzları listesi; ürün grubunu seçip kılavuzu indiriyorsun.",
  },
  "Profilo": {
    url: "https://www.profilo.com/tr/musteri-hizmetleri/kullanim-kilavuzlari",
    ozet: "Model numarasıyla Profilo kullanım kılavuzu araması (BSH grubu ortak kılavuz arşivi).",
  },
  "Bosch": {
    url: "https://www.bosch-home.com.tr/musteri-hizmetleri/kullanim-kilavuzlari",
    ozet: "Bosch ev aletleri kılavuz arşivi: model numarasını yazınca kullanım kılavuzu ve montaj dokümanı birlikte çıkıyor.",
    // Bosch ev aletleri sitesi ısıtma/iklimlendirme ürünlerini kapsamıyor (o taraf ayrı şirket).
    haric: ["Klima", "Kombi / Termosifon"],
  },
  "Siemens": {
    url: "https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/kullanim-kilavuzlari",
    ozet: "Siemens ev aletleri destek merkezi: model numarasıyla kullanım kılavuzu ve ürün belgeleri.",
  },
  "Samsung": {
    url: "https://www.samsung.com/tr/support/user-manuals-and-guide/",
    ozet: "Samsung Türkiye kullanım kılavuzları ve ürün belgeleri sayfası; ürün grubundan ya da model numarasından aranıyor.",
  },
  "LG": {
    url: "https://www.lg.com/tr/destek/product-support/manuals-software/",
    ozet: "LG kılavuz ve yazılım merkezi: model numarasıyla kullanım kılavuzu, sürücü ve yazılım dosyaları.",
  },
  "Miele": {
    url: "https://www.miele.com.tr/domestic/bayiservis-21.htm",
    ozet: "Miele Türkiye bayi ve yetkili servis/destek sayfası; ürün belgeleri ve servis yönlendirmesi buradan.",
  },
  "Philips": {
    url: "https://www.philips.com.tr/c-s/support",
    ozet: "Philips Türkiye destek sayfası: ürünü seçince kullanım kılavuzu, SSS ve sorun giderme adımları çıkıyor.",
  },

  // ── Isıtma / iklimlendirme ────────────────────────────────────────────────
  "Viessmann": {
    url: "https://www.viessmann.com.tr/tr/hizmetler-ve-destek/kilavuzlar.html",
    ozet: "Viessmann kılavuzlar sayfası: kombi ve ısıtma cihazlarının kullanma/montaj dokümanları.",
  },
  "Vaillant": {
    url: "https://www.vaillant.com.tr/musterilerimize-ozel/urunler/urun-kategorileri/kombiler/",
    ozet: "Vaillant müşteri hizmetleri: ürün dokümanları, garanti-bakım bilgisi ve yetkili servis yönlendirmesi.",
  },
  "Daikin": {
    url: "https://www.daikin.com.tr/daikin-kullanim-kilavuzlari",
    ozet: "Daikin Türkiye kullanım kılavuzları arşivi; klima ve ısı pompası modellerinin kılavuzları.",
  },
  "Alarko": {
    url: "https://www.alarko-carrier.com.tr/urun-dokumanlari",
    ozet: "Alarko Carrier ürün dokümanları: kullanım kılavuzu, teknik veri ve ürün fişleri bir arada.",
  },
  "Immergas": {
    url: "https://www.immergas.com.tr/service/bakim-ve-satis-sonrasi-servis/",
    ozet: "Immergas bakım ve satış sonrası servis sayfası; kombi dokümanları ve servis yönlendirmesi.",
  },
  "ECA": {
    url: "https://eca.com.tr/isitma-sogutma/kombiler",
    ozet: "ECA'nın resmî montaj ve kullanım kılavuzu arşivi (teknik/profesyonel bölümde yayımlanıyor).",
  },

  // ── Süpürge / küçük ev aletleri ───────────────────────────────────────────
  "Dyson": {
    url: "https://www.dyson.com.tr/destek",
    ozet: "Dyson destek sayfası: makineyi seçince kullanım kılavuzu, filtre bakımı ve sorun giderme videoları.",
  },
  "Arzum": {
    url: "https://destek.arzum.com.tr/kullanim-kilavuzlari",
    ozet: "Arzum destek portalı: ürün kullanım kılavuzları, garanti ve yetkili servis bilgisi.",
  },
  "Fakir": {
    url: "https://destek.fakir.com.tr/kullanim-kilavuzlari",
    ozet: "Fakir destek portalı: ürün seçip kullanım kılavuzuna ve adım adım sorun giderme başlıklarına ulaşıyorsun.",
  },
  "Tefal": {
    url: "https://www.tefal.com.tr/kullanim-kilavuzlari/",
    ozet: "Tefal kullanım kılavuzları arşivi; ürün grubundan ya da model adından aranıyor.",
  },
  "Karcher": {
    url: "https://www.karcher.com/tr/tr/hizmetler",
    ozet: "Kärcher hizmetler/destek sayfası: cihaz dokümanları, yedek parça listeleri ve servis yönlendirmesi.",
  },
  "Xiaomi": {
    url: "https://www.mi.com/tr/support/user-guide/",
    ozet: "Xiaomi Türkiye destek sayfası: ürün kılavuzları, garanti bilgisi ve sorun giderme.",
  },

  // ── Televizyon / elektronik ───────────────────────────────────────────────
  "Sony": {
    url: "https://www.sony.com.tr/electronics/support",
    ozet: "Sony Türkiye destek sayfası: modeli seçince kullanım kılavuzu, yazılım güncellemesi ve SSS.",
  },
  "TCL": {
    url: "https://www.tcl.com/tr/tr/support",
    ozet: "TCL destek sayfası: TV ve beyaz eşya modellerinin kılavuz ve yazılım dosyaları.",
  },

  // ── Bilgisayar / yazıcı ───────────────────────────────────────────────────
  "Dell": {
    url: "https://www.dell.com/support/home/tr-tr",
    ozet: "Dell destek ana sayfası: servis etiketiyle cihazını tanıtıp kılavuz, sürücü ve garanti bilgisine ulaşıyorsun.",
  },
  "HP": {
    url: "https://support.hp.com/tr-tr/manuals",
    ozet: "HP Türkiye destek: ürün adı/seri numarasıyla kullanım kılavuzu, sürücü ve sorun giderme.",
  },
  "Lenovo": {
    url: "https://pcsupport.lenovo.com/tr/tr",
    ozet: "Lenovo PC destek: seri numarasıyla kullanım kılavuzu, sürücü ve garanti sorgusu.",
  },
  "Asus": {
    url: "https://www.asus.com/tr/support/",
    ozet: "ASUS destek merkezi: model adıyla kılavuz, BIOS/sürücü dosyaları ve SSS.",
  },
  "Apple": {
    url: "https://support.apple.com/tr-tr/docs",
    ozet: "Apple'ın resmî kullanım kılavuzu arşivi (Mac, iPad, iPhone ve aksesuarlar) — Türkçe.",
  },
  "Casper": {
    url: "https://www.casper.com.tr/destek",
    ozet: "Casper destek sayfası: ürün kılavuzları, sürücüler ve yetkili servis yönlendirmesi.",
  },
  "Canon": {
    url: "https://www.canon.com.tr/support/",
    ozet: "Canon'un resmî tüketici ürünleri destek sayfası: yazıcı/kamera kılavuzları, sürücüler ve yazılımlar.",
  },
  "Epson": {
    url: "https://www.epson.com.tr/support",
    ozet: "Epson Türkiye destek sayfası: yazıcı kullanım kılavuzu, sürücü ve sarf malzemesi bilgisi.",
  },
  "Brother": {
    url: "https://support.brother.com/g/b/countrytop.aspx?c=tr&lang=tr",
    ozet: "Brother Türkiye destek merkezi: model seçip kullanım kılavuzu, sürücü ve SSS'lere ulaşıyorsun.",
  },
  // ── 20 Ağu 2026 boşluk dalgası (YK): 8 marka eklendi. URL'ler o gün tek tek doğrulandı
  //    (bot korumalı siteler tarayıcıyla gezilerek teyit edildi); kombi tarafında çoğu markada
  //    merkezî arama kutusu yok, akış "ürün sayfası → Dokümanlar → kılavuz PDF".
  "Regal": {
    url: "https://www.regal-tr.com/content/kullanim-kilavuzlari",
    ozet: "Regal, Vestel çatısındaki markadır; kılavuza cihazın seri numarasıyla Vestel Destek Merkezi üzerinden ulaşılıyor.",
  },
  "Baymak": {
    url: "https://www.baymak.com.tr/kombi",
    ozet: "Kombi modelini listeden seçiyorsun; montaj ve kullanma kılavuzu ürün sayfasının doküman bölümünde PDF olarak duruyor.",
  },
  "Demirdöküm": {
    url: "https://www.demirdokum.com.tr/urunler/kombiler/",
    ozet: "Model sayfasını açtığında kullanım kılavuzu ürün dokümanları arasında listeleniyor; model adı kombinin alt kapağı içindeki etikette yazar.",
  },
  "Ariston": {
    url: "https://www.ariston.com/tr-tr/indirme-alani/",
    ozet: "İndirme alanında önce ürün kategorisini, sonra modelini seçiyorsun; kullanım kılavuzu PDF olarak listeleniyor.",
  },
  "Buderus": {
    url: "https://www.buderus.com/tr/tr/hizmetler/muesteri-kilavuzu/",
    ozet: "Müşteri kılavuzu bölümünden modelini seçerek kullanım ve montaj dokümanlarına ulaşıyorsun.",
  },
  "Ferroli": {
    url: "https://www.ferroli.com.tr/kombiler-F2771",
    ozet: "Kombi modelini seçtiğinde kullanım kılavuzu ürün sayfasında PDF olarak açılıyor.",
  },
  "Mitsubishi": {
    url: "https://klima.mitsubishielectric.com.tr/tr/kullanim-kilavuzlari",
    ozet: "Cihaz tipini (duvar tipi, kaset, salon tipi) filtreleyip model numarana göre kılavuzu seçiyorsun; model etiketi iç ünitenin yanındadır.",
  },
  "Roborock": {
    url: "https://support.roborock.com/hc/en-us",
    ozet: "Robot süpürge modelini seçip kılavuzu indiriyorsun (sayfa İngilizce); model etiketi cihazın alt yüzünde.",
  },
  "Dreame": {
    url: "https://global.dreametech.com/pages/user-manuals-and-faqs",
    ozet: "Modelini listeden seçerek kullanım kılavuzuna ve sık sorulanlara ulaşıyorsun (sayfa İngilizce); model etiketi cihazın altında.",
  },
  // ══════════════════════════════════════════════════════════════════════════
  // 21 AĞU 2026 DALGASI (YK #80 · 200+ kayıt hedefi) — 54 yeni marka.
  // Üç paralel doğrulama koşusu: beyaz eşya (15) · ankastre+küçük ev+süpürge (14) ·
  // klima+kombi+TV/monitör+yazıcı+bilgisayar (25). Her adres o gün denendi; bot
  // korumalı uçlar (Electrolux, Zanussi, Hisense, Acer, MSI, Gigabyte, Iiyama,
  // Panasonic) gerçek tarayıcıyla açılıp içeriği görüldü. Doğrulanamayan 23 marka
  // BİLEREK ALINMADI — gerekçeleri koşu raporlarında (YK #79: eksik olmak, ölü
  // link vermekten iyidir).
  // ══════════════════════════════════════════════════════════════════════════
  // ── Beyaz eşya: Electrolux grubu ──────────────────────────────────────────
  "AEG": {
    url: "https://support.aeg.com.tr/support-articles",
    ozet: "AEG Türkiye destek merkezi: hata kodu, model numarası ya da konu yazıp arıyorsun; soğutma, çamaşır, bulaşık, pişirme ve süpürge başlıkları ayrı ayrı açılıyor.",
  },
  "Electrolux": {
    url: "https://www.electrolux.com.tr/support/user-manuals/",
    ozet: "Electrolux Türkiye kullanma kılavuzu indirme sayfası; model ya da PNC numarasıyla kılavuzu ve ürün bilgi fişini birlikte buluyorsun.",
  },
  "Zanussi": {
    url: "https://www.zanussi.com.tr/support/user-manuals/",
    ozet: "Zanussi Türkiye kullanma kılavuzu arama sayfası: cihazın model numarasını yazıp kılavuzu ve ürün belgelerini indiriyorsun.",
  },

  // ── Beyaz eşya: Whirlpool / Beko Europe grubu ─────────────────────────────
  "Whirlpool": {
    url: "https://docs.emeaappliance-docs.eu/",
    ozet: "Whirlpool'un EMEA belge portalı (docs.whirlpool.eu buraya yönleniyor): ticari kodu yazıp kılavuz, montaj dokümanı ve yasal belgeleri arıyorsun — belge dilini Türkçe seçebiliyorsun, arayüz İngilizce.",
  },
  "Hotpoint": {
    url: "https://docs.hotpoint.eu/",
    ozet: "Hotpoint'in kendi belge arşivi: ürün kodunu yazıp kılavuz, kurulum dokümanı ve ürün fişine ulaşıyorsun; belge dili Türkçe seçilebiliyor, arayüz İngilizce.",
  },
  "Indesit": {
    url: "https://docs.indesit.com/",
    ozet: "Indesit belge merkezi: cihazın ticari kodunu girip kullanma kılavuzu ve kurulum belgelerini indiriyorsun; Türkçe belge seçeneği var, arayüz İngilizce.",
  },
  "Bauknecht": {
    url: "https://docs.bauknecht.eu/",
    ozet: "Bauknecht belge arşivi: ürün kodundan kullanma kılavuzu, montaj ve yasal dokümanlara gidiliyor; belge dili Türkçe seçilebiliyor, arayüz İngilizce.",
  },

  // ── Beyaz eşya: Candy–Hoover–Haier grubu ──────────────────────────────────
  "Hoover": {
    url: "https://www.hoover-home.com/tr_TR/kilavuz-ara/",
    ozet: "Hoover Türkiye kılavuz arama sayfası: ürün grubunu seçiyor ya da ürün kodunu yazıyorsun; buzdolabı, çamaşır-kurutma, bulaşık ve pişirme kılavuzları bir arada.",
  },
  "Candy": {
    url: "https://www.candy-home.com/en_GB/user-manual/",
    ozet: "Candy'nin kullanma kılavuzu indirme sayfası: ürün hattını seçip cihaz kodunu yazıyorsun — fırın, ocak, davlumbaz, buzdolabı, bulaşık ve çamaşır kılavuzları listeleniyor. Sayfa İngilizce (Candy'nin Türkçe sitesi yok).",
  },
  "Haier": {
    url: "https://www.haier-europe.com/tr_TR/teknik-destek/kilavuzu/",
    ozet: "Haier Türkiye kullanma kılavuzu sorgulama sayfası: ürün grubunu, cihaz adını ya da ürün kodunu girip kılavuzu indiriyorsun; kılavuz çıkmazsa talep formu açılıyor.",
    // Haier'in TR kılavuz sayfasında iklimlendirme ürün grubu yok (soğutma/yıkama/bulaşık/pişirme/küçük ev/TV var).
    haric: ["Klima"],
  },

  // ── Beyaz eşya: tekil markalar ────────────────────────────────────────────
  "Hisense": {
    url: "https://tr.hisense.com/kullanim-kilavuzlari",
    ozet: "Hisense Türkiye kullanım kılavuzları sayfası: cihazın bilgi etiketindeki ürün kodunu ya da model adını yazıp kılavuzu buluyorsun.",
  },
  "Smeg": {
    url: "https://www.smeg.com/tr/info/download-manuals",
    ozet: "Smeg'in Türkçe kılavuz indirme sayfası: cihaz etiketindeki ürün kodunu yazıp dilini seçiyorsun; fırın, ocak, buzdolabı, bulaşık ve küçük ev aletleri kılavuzları bir arada.",
  },
  "Liebherr": {
    url: "https://www.liebherr.com/en-tr/fridges-freezers/operating-instructions-3228324",
    ozet: "Liebherr'in Türkiye soğutma servisi sayfası: cihazın içindeki etikette yazan 9 haneli servis ya da seri numarasını girip kullanma kılavuzuna, enerji etiketine ve ürün fişine ulaşıyorsun. Sayfa İngilizce.",
    // Liebherr'in ev tarafı yalnız soğutma (buzdolabı/derin dondurucu/şarap dolabı) üretiyor.
    haric: ["Çamaşır Makinesi", "Kurutma Makinesi", "Bulaşık Makinesi", "Fırın / Ocak / Aspiratör", "Mikrodalga / Air Fryer"],
  },
  "Uğur": {
    url: "https://www.ugur.com.tr/urunler/ev-urunleri",
    ozet: "Uğur Soğutma'nın ev ürünleri kataloğu: ürününü bulup sayfasını açtığında kullanım kılavuzu bağlantısı ürün sayfasının altında duruyor.",
    // Uğur'un ev ürünleri arasında bulaşık makinesi yok.
    haric: ["Bulaşık Makinesi"],
  },
  "Sharp": {
    url: "https://www.sharpconsumer.com/support/",
    ozet: "Sharp'ın ürün destek sayfası: model adı ya da anahtar kelimeyle kullanım kılavuzu, hızlı başlangıç rehberi ve garanti belgesi aranıyor. Sayfa İngilizce.",
    // Sharp'ın tüketici sitesi buzdolabı/çamaşır/kurutma/bulaşık/fırın kapsamıyor;
    // yalnız TV + mikrodalga/air fryer (ve hava ürünleri/süpürge) var.
    haric: ["Buzdolabı", "Çamaşır Makinesi", "Kurutma Makinesi", "Bulaşık Makinesi", "Fırın / Ocak / Aspiratör"],
  },
  // ── Ankastre (fırın / ocak / davlumbaz) ───────────────────────────────────
  "Teka": {
    url: "https://www.teka.com/tr-tr/destek/kilavuzlari-indir/",
    ozet: "Teka Türkiye'nin kılavuz indirme sayfası: model numaranı yazınca kullanım kılavuzu, montaj talimatı ve teknik çizim birlikte listeleniyor.",
  },
  "Franke": {
    url: "https://www.franke.com/tr/tr/home-solutions/destek.html",
    ozet: "Franke Türkiye destek merkezi: 'Kılavuzlar' ve 'Kurulum Kılavuzları' bölümlerinden ürün arama sayfasına geçip modelinin dokümanlarını açıyorsun.",
  },
  "Silverline": {
    url: "https://silverline.com/tr-TR/services/product-information-technical-document",
    ozet: "Silverline 'Ürün Bilgisi / Teknik Belge' sayfası: model numaranı girince cihazına özel teknik bilgi ve kullanım kılavuzu çıkıyor.",
    // ⚠️ Bu adres komut satırından çağrıldığında ülke seçim ekranına düşüyor (silverline.com/market-selection);
    //    gerçek tarayıcıda 21 Ağu 2026'da açıldı ve model arama kutusu göründü. Link bakımında curl 200 döner
    //    ama yönlendirme adresi market-selection'dır — bu ölü link DEĞİLDİR, ülke çerezi kurulmadığı içindir.
  },
  "Kumtel": {
    url: "https://www.kumtel.com/kullanim-kilavuzlari",
    ozet: "Kumtel'in kullanım kılavuzları sayfası: ürünü model koduyla listeden seçip kılavuzunu açıyorsun (ankastre ve küçük ev aletleri aynı listede).",
  },

  // ── Küçük ev aleti (mikrodalga / air fryer tarafı) ────────────────────────
  "Goldmaster": {
    url: "https://urunkilavuz.goldmaster.com.tr/",
    ozet: "Goldmaster'ın kılavuz sorgulama servisi: ürün adı, barkod ya da model numarasıyla arayıp kullanım kılavuzunu getiriyorsun.",
  },
  "Kenwood": {
    url: "https://www.kenwoodworld.com/en-gb/manuals",
    ozet: "Kenwood'un resmî kılavuz arşivi: model numarasıyla arayıp kullanım kılavuzunu açıyorsun (sayfa İngilizce); model etiketi cihazın altındadır.",
  },
  "Cosori": {
    url: "https://cosori.com/pages/user-manuals",
    ozet: "Cosori kullanım kılavuzları sayfası: air fryer modelleri kategori kategori listeleniyor, model adı ya da numarasıyla da aranıyor (sayfa İngilizce).",
  },
  "Russell Hobbs": {
    url: "https://en.russellhobbs.com/user-manuals",
    ozet: "Russell Hobbs Avrupa'nın kılavuz sayfası: ürün adını ya da model numarasını yazıp kullanım kılavuzuna ulaşıyorsun (sayfa İngilizce).",
  },
  "Braun": {
    url: "https://www.braunhousehold.com/en/manuals",
    ozet: "Braun Household kılavuz arşivi: mutfak ve ev aleti modellerinin kullanım kılavuzları model numarasıyla aranıyor (sayfa İngilizce).",
  },
  "Rowenta": {
    url: "https://www.tefal.com.tr/kullanim-kilavuzlari/",
    ozet: "Rowenta Türkiye'de Groupe SEB çatısındadır ve rowenta.com.tr bu sayfaya yönlendiriyor; kılavuz listesinde Tefal, Krups ve Rowenta ürünleri birlikte duruyor.",
    // Listede Rowenta tarafı kişisel bakım ürünleriyle sınırlı — süpürge kılavuzu çıkmıyor, o yüzden Süpürge hariç.
    haric: ["Süpürge"],
  },

  // ── Süpürge ───────────────────────────────────────────────────────────────
  "Fantom": {
    url: "https://www.fantom.com.tr/elektrikli-supurgeler",
    ozet: "Fantom süpürge modelleri listesi; modelini açtığında 'Kullanma Kılavuzu' bağlantısı ürün sayfasında duruyor (Fantom'da merkezî kılavuz arama kutusu yok).",
  },
  "Ecovacs": {
    url: "https://help.ecovacs.com/tr/support",
    ozet: "Ecovacs Türkçe destek merkezi: DEEBOT/WINBOT modelini seçince kullanım kılavuzu, sorun giderme ve yazılım başlıkları açılıyor.",
  },
  "iRobot": {
    url: "https://www.irobot.com.tr/indirmek-icin/",
    ozet: "iRobot Türkiye'nin indirme sayfası: Roomba ve Braava modellerinin kullanım kılavuzları tek listede toplanmış.",
  },
  "Eufy": {
    url: "https://service.eufy.com/",
    ozet: "eufy destek merkezi: 'Manuals and Downloads' bölümünden robot süpürge modelinin kılavuzunu indiriyorsun (sayfa İngilizce).",
  },
  // ── Klima ─────────────────────────────────────────────────────────────────
  "Carrier": {
    url: "https://www.alarko-carrier.com.tr/urun-dokumanlari",
    ozet: "Carrier'ın Türkiye'deki resmî kuruluşu Alarko Carrier'dır; ürün dokümanları sayfasından klima tipini seçip montaj ve kullanım kılavuzuna ulaşıyorsun.",
  },
  "Hitachi": {
    url: "https://www.hitachiaircon.com/tr/kaynaklar/klima",
    ozet: "Hitachi'nin Türkçe doküman merkezi: içerik türünü 'kullanım kılavuzları' olarak filtreleyip ürün tipine (duvar tipi, ticari, ısı pompası) göre daraltıyorsun.",
  },
  "Toshiba": {
    url: "https://www.toshiba-klima.com.tr/kullanim-kilavuzlari",
    ozet: "Toshiba klimanın Türkiye kılavuz arşivi: duvar tipi, konsol, multi, ticari ve ısı pompası başlıkları altında modelini bulup kılavuzu açıyorsun.",
    // Bu adres yalnız klima tarafını karşılıyor (Toshiba TV ve bilgisayar tarafı
    // Türkiye'de ayrı lisans sahiplerinde; onlar için resmî kılavuz sayfası doğrulanamadı).
    haric: ["Televizyon / Monitör", "Bilgisayar / Yazıcı"],
  },
  "Panasonic": {
    url: "https://support-tr.panasonic.eu/",
    ozet: "Panasonic Türkiye destek merkezi: model numaranı yazınca kullanım kılavuzu, yazılım güncellemesi ve servis merkezi bilgisi tek sayfada çıkıyor.",
  },
  "Fujitsu": {
    url: "https://www.generalww.com/global/support/downloads/index.html",
    ozet: "Fujitsu General'in klimalar için resmî doküman arşivi; model numarasıyla kullanım ve montaj kılavuzu aranıyor (sayfa İngilizce, markanın Türkiye'ye özel sitesi yok).",
  },

  // ── Kombi / Termosifon ────────────────────────────────────────────────────
  "Protherm": {
    url: "https://www.protherm.com.tr/yogusmali-kombiler",
    ozet: "Kombi modelini listeden seçiyorsun; kullanım kılavuzu ürün sayfasının 'Doküman' bölümünde PDF olarak duruyor (Protherm, Vaillant Group markasıdır).",
  },
  "Warmhaus": {
    url: "https://www.warmhaus.com/tr/urunler/kombiler/yogusmali-kombiler",
    ozet: "Modeli seçip ürün sayfasını açtığında montaj ve kullanım kılavuzu 'Kılavuz ve Dokümanlar' başlığı altında listeleniyor.",
  },

  // ── Su arıtma / su sebili ─────────────────────────────────────────────────
  "A.O. Smith": {
    url: "https://aosmith.com.tr/dokumanlar/",
    ozet: "A.O. Smith Türkiye doküman merkezi: ters ozmoz, su yumuşatma, UV ve su sebili ürünlerinin kullanım kılavuzları kategori kategori listeleniyor.",
  },

  // ── Televizyon ────────────────────────────────────────────────────────────
  "Sunny": {
    url: "https://www.sunny.com.tr/televizyon-kullanim-kilavuzlari/",
    ozet: "Sunny televizyonların kılavuzları ekran boyutu ve yazılım ailesine (WebOS, Android, Tizen) göre gruplanmış; kendi grubunun ortak kılavuzunu indiriyorsun.",
  },
  "Onvo": {
    url: "https://onvo.com.tr/bilgi-merkezi",
    ozet: "ONVO Bilgi Merkezi: model numaranı arama kutusuna yazınca kullanma kılavuzu, enerji etiketi ve ürün bilgi formu birlikte çıkıyor.",
  },

  // ── Monitör ───────────────────────────────────────────────────────────────
  "AOC": {
    url: "https://www.aoc.com/tr/support",
    ozet: "AOC Türkiye destek sayfası: modelinin ürün sayfasına geçip 'Drivers & Manuals' bölümünden kullanıcı kılavuzunu ve hızlı başlangıç rehberini indiriyorsun.",
  },
  "BenQ": {
    url: "https://www.benq.com/tr-tr/support/downloads-faq.html",
    ozet: "BenQ Türkçe destek: modelini seçip kılavuz, sürücü ve sık sorulan soruları aynı sayfadan alıyorsun.",
  },
  "ViewSonic": {
    url: "https://www.viewsonic.com/tr/support/",
    ozet: "ViewSonic Türkiye destek merkezi: indirme bölümünden modelinin yazılım, sürücü ve kullanım kılavuzu dosyalarına ulaşıyorsun.",
  },
  "Iiyama": {
    url: "https://iiyama.com/tr_tr/support",
    ozet: "iiyama Türkçe destek sayfası: model adını ya da seri numarasını girip dokümanlara, garanti ve enerji etiketi bilgilerine ulaşıyorsun; seri numarasının nerede yazdığı da anlatılıyor.",
  },

  // ── Yazıcı ────────────────────────────────────────────────────────────────
  "Xerox": {
    url: "https://www.support.xerox.com/tr-tr",
    ozet: "Xerox Türkçe ürün desteği: yazıcı modelini seçince kullanım kılavuzu, sürücü ve sorun giderme belgeleri tek sayfada toplanıyor.",
  },
  "Lexmark": {
    url: "https://support.lexmark.com/tr_tr.html",
    ozet: "Lexmark Türkiye destek portalı: model numarasıyla sürücü, yazılım ve ürün dokümanlarına ulaşıyorsun.",
  },
  "Ricoh": {
    url: "https://www.ricoh.com.tr/destek/",
    ozet: "Ricoh Türkiye destek sayfası: 'Sürücüler ve indirmeler' bölümünde kılavuzlar, bilgi tabanında da kurulum ve sorun giderme adımları var.",
  },
  "Pantum": {
    url: "https://global.pantum.com/support/",
    ozet: "Pantum'un resmî destek merkezi: model seçip sürücü ve doküman indiriyorsun (sayfa İngilizce, markanın Türkiye'ye özel sitesi yok).",
  },

  // ── Bilgisayar ────────────────────────────────────────────────────────────
  "Acer": {
    url: "https://www.acer.com/tr-tr/support/drivers-and-manuals",
    ozet: "Acer Türkiye 'Sürücüler ve Kılavuzlar' sayfası: seri numarası, SNID ya da parça numarasıyla cihazını tanıtıp kılavuzuna ulaşıyorsun; seri numarasının yeri de anlatılıyor.",
  },
  "MSI": {
    url: "https://tr.msi.com/support",
    ozet: "MSI Türkiye destek merkezi: ürün tipini (notebook, monitör, anakart) seçip en yeni yazılım, sürücü ve kılavuzları indiriyorsun.",
  },
  "Gigabyte": {
    url: "https://www.gigabyte.com/tr/Support/Consumer",
    ozet: "GIGABYTE tüketici destek sayfası: model adını yazıp indirme merkezinden kılavuz ve sürücü dosyalarına geçiyorsun (sayfa büyük ölçüde İngilizce).",
  },
  "Monster": {
    url: "https://support.monsternotebook.com/tr/documentations/",
    ozet: "Monster Notebook kullanım kılavuzları sayfası: kategori ve model seçerek cihazının kılavuzuna, sürücülerine ve yardımcı programlarına gidiyorsun.",
  },
  "Huawei": {
    url: "https://consumer.huawei.com/tr/support/",
    ozet: "Huawei Türkiye tüketici destek sayfası: ürününü seçince kullanım kılavuzu, yazılım güncellemesi ve sorun giderme başlıkları çıkıyor.",
  },
  "Honor": {
    url: "https://www.honor.com/tr/support/",
    ozet: "HONOR Türkiye destek merkezi: laptop, tablet ve telefon başlıkları altında ürün rehberleri, garanti sorgulama ve servis merkezi bilgisi bir arada.",
  },
  "Microsoft": {
    url: "https://support.microsoft.com/tr-tr/surface",
    ozet: "Microsoft Surface Türkçe destek merkezi: cihaz modelini seçip kurulum, kullanım ve sorun giderme rehberlerine ulaşıyorsun.",
  },
};

/**
 * `CIHAZ_MARKALARI` × `MARKA_KILAVUZLARI` kesişimi → /kilavuzlar/ kayıtları.
 * Cihaz listesi ayrıca tutulmaz; CIHAZLAR sırası korunur (hub ızgarasıyla aynı sıra).
 * @returns {{cihaz:string, marka:string, url:string, ozet:string}[]}
 */
export function kilavuzKayitlari() {
  const kayitlar = [];
  for (const cihaz of CIHAZLAR) {
    // ⚠️ Alias-duyarlı olmak ZORUNDA: cihaz adı birleşince (21 Ağu: "Çamaşır Makinesi /
    // Kurutma") düz `CIHAZ_MARKALARI[cihaz]` boş döner, o cihazın kılavuz sayfası HİÇ
    // ÜRETİLMEZ ve YAYINDAKİ /kilavuzlar/camasir-makinesi/ 404'e düşer. Sessiz kırılır:
    // build hata vermez, yalnız bir dizin eksilir (bu koşuda dist sayımıyla yakalandı).
    for (const marka of tabloBul(CIHAZ_MARKALARI, cihaz) || []) {
      const k = MARKA_KILAVUZLARI[marka];
      if (!k) continue;
      // `haric` eski adla yazılmış olabilir → alias kümesinin herhangi biri eşleşirse hariç tut.
      if (k.haric?.some((h) => eslesenKategoriler(cihaz).includes(h))) continue;
      kayitlar.push({ cihaz, marka, url: k.url, ozet: k.ozet });
    }
  }
  return kayitlar;
}

// /kilavuzlar/ indekse açılma eşiği (YK #34): kayıt sayısı bunun altındayken sayfa noindex
// kalır ve sitemap'e girmez — ince içeriği indekslemek siteyi aşağı çeker.
export const KILAVUZ_INDEKS_ESIGI = 30;
