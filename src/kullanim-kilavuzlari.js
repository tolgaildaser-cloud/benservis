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
// ✅ DOĞRULAMA (2 Ağu 2026): buradaki her adres HTTP ile denendi ve 200 döndü. Yönlendiren
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
import { CIHAZ_MARKALARI, CIHAZLAR } from "./constants.js";

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
    url: "https://www.altus.com.tr/destek/yardim-merkezi",
    ozet: "Altus yardım merkezi: ürün grubunu seçip kullanım kılavuzuna, garanti ve servis bilgisine aynı sayfadan gidiliyor.",
  },
  "Vestel": {
    url: "https://www.vestel.com.tr/content/tanitma-ve-kullanma-kilavuzlari",
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
    url: "https://www.vaillant.com.tr/musterilerimize-ozel/servis-hizmetlerimiz/",
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
    url: "https://eca.com.tr/profesyoneller/montaj-kilavuzlari",
    ozet: "ECA'nın resmî montaj ve kullanım kılavuzu arşivi (teknik/profesyonel bölümde yayımlanıyor).",
  },

  // ── Süpürge / küçük ev aletleri ───────────────────────────────────────────
  "Dyson": {
    url: "https://www.dyson.com.tr/destek",
    ozet: "Dyson destek sayfası: makineyi seçince kullanım kılavuzu, filtre bakımı ve sorun giderme videoları.",
  },
  "Arzum": {
    url: "https://destek.arzum.com.tr/",
    ozet: "Arzum destek portalı: ürün kullanım kılavuzları, garanti ve yetkili servis bilgisi.",
  },
  "Fakir": {
    url: "https://destek.fakir.com.tr/birlikte-cozelim",
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
    url: "https://www.mi.com/tr/support/",
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
    url: "https://support.hp.com/tr-tr",
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
    url: "https://www.canon-europe.com/support/",
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
};

/**
 * `CIHAZ_MARKALARI` × `MARKA_KILAVUZLARI` kesişimi → /kilavuzlar/ kayıtları.
 * Cihaz listesi ayrıca tutulmaz; CIHAZLAR sırası korunur (hub ızgarasıyla aynı sıra).
 * @returns {{cihaz:string, marka:string, url:string, ozet:string}[]}
 */
export function kilavuzKayitlari() {
  const kayitlar = [];
  for (const cihaz of CIHAZLAR) {
    for (const marka of CIHAZ_MARKALARI[cihaz] || []) {
      const k = MARKA_KILAVUZLARI[marka];
      if (!k) continue;
      if (k.haric?.includes(cihaz)) continue;
      kayitlar.push({ cihaz, marka, url: k.url, ozet: k.ozet });
    }
  }
  return kayitlar;
}

// /kilavuzlar/ indekse açılma eşiği (YK #34): kayıt sayısı bunun altındayken sayfa noindex
// kalır ve sitemap'e girmez — ince içeriği indekslemek siteyi aşağı çeker.
export const KILAVUZ_INDEKS_ESIGI = 30;
