import { tabloBul } from "./constants.js";
// onarim-rehberleri.js — teşhis edilen arızaya karşılık gelen adım adım onarım rehberi.
//
// NEDEN STATİK HARİTA (canlı API değil) — 29 Tem 2026 fizibilite araştırmasının sonucu
// (`benservis-icerik/2026-07-29-IFIXIT-ENTEGRASYON-ARASTIRMASI.md`):
//   · Canlı arama denendi: "cihaz + arıza" sorgusunun ~%26'sı YANLIŞ rehbere gidiyordu
//     ("gaz kaçağı" → gasket/conta, "kompresör" → mini buzdolabı rölesi). Yanlış link,
//     teşhisin kendisine olan güveni de sarsar.
//   · Kaynaktaki ev-aleti külliyatı küçük (~124 rehber) ve yavaş değişiyor → canlıya gerek yok.
//   · Statik olması: sıfır gecikme, dış bağımlılık yok, service worker/offline bozulmuyor,
//     ve kullanıcının teşhis metni ÜÇÜNCÜ TARAFA HİÇ GİTMİYOR (KVKK açısından da temiz).
//
// Aşağıdaki dış (iFixit) bağlantıların HEPSİ elle doğrulandı: her biri jenerik (marka-bağımsız) —
// çünkü kaynakta Arçelik'e ait tek rehber bile yok, markaya özel eşleştirme imkânsız.
// Kendi Türkçe rehberlerimizde (B) durum farklı: BSH hata kodu rehberleri gibi markaya bağlı
// olanlar başlıkta markayı açıkça yazar, anahtar kelimeleri de o koda dar tutulur.
// Kapsam bilinçli olarak dar: yalnız gerçekten karşılığı olan cihaz kümeleri. Kombi, TV vb.
// için rehber YOK → o cihazlarda buton hiç çıkmaz. (Klima 3 Ağu'da, BUZDOLABI 21 Ağu'da
// kendi Türkçe rehberimizle girdi; ikisinde de iFixit karşılığı yok.)
//
// ⚠️ GÜVENLİK: Bu harita TEK BAŞINA yeterli değil. Buton yalnız `kendinCozebilirMi.mumkun`
// true iken gösterilmeli (App.jsx'te öyle bağlandı) — klima kapasitörü, magnetron ve gaz
// dolumu gibi işler ölümcül ya da belgeli teknisyen işidir.
//
// Rehberler İNGİLİZCE. Bu kullanıcıya arayüzde açıkça yazılır (tıklamadan önce bilsin).

const G = (id, baslik, zorluk, sure, adim) => ({
  url: `https://www.ifixit.com/Guide/${id}`,
  baslik, zorluk, sure, adim, kendi: false,
});

// B(...) = BİZİM kendi Türkçe rehberimiz (kendi blogumuz, kendi metnimiz, kendi görselimiz).
//
// TELİF NOTU (31 Tem 2026, kaynaktan doğrulandı): iFixit içeriği CC BY-NC-SA 3.0 —
// kendi SSS'lerinde "çevirip sitene koyabilirsin" diyorlar AMA şart "noncommercial".
// Benservis ticari bir site → iFixit rehberlerini ÇEVİRMEK ya da FOTOĞRAFLARINI
// kullanmak YASAK. Telif ifadeyi korur, usulü/olguyu değil: kendi cümlelerimizle
// sıfırdan yazılan Türkçe rehber tamamen serbesttir. Buradaki kayıtlar öyle yazıldı.
//
// KURAL: kendi rehberimiz varsa iFixit'e ASLA gönderilmez (rehberBul içinde önceliklidir) —
// kullanıcı Türkçe okur, sitede kalır, iFixit yalnız bizde karşılığı olmayan konularda yedek.
const B = (slug, baslik, zorluk, sure, adim) => ({
  url: `/blog/${slug}/`,
  baslik, zorluk, sure, adim, kendi: true,
});

// zorluk: kaynaktaki İngilizce değerlerin Türkçesi
export const ZORLUK_TR = {
  "Very easy": "Çok kolay", Easy: "Kolay", Moderate: "Orta",
  Difficult: "Zor", "Very difficult": "Çok zor",
};

// cihaz → [ { anahtar kelimeler, rehber } ]  — arıza adı bu kelimelerle eşleştirilir.
// Kelimeler küçük harfe çevrilmiş, Türkçe'ye duyarlı karşılaştırmayla aranır.
export const REHBERLER = {
  "Çamaşır Makinesi": [
    { ara: ["su giriş", "su almıyor", "giriş valf", "inlet"],
      rehber: B("camasir-makinesi-su-almiyor", "Su almayan makinede 5 kontrol", "Kolay", "~15 dakika", 5) },
    // KENDİ REHBERİMİZ — iFixit'in 17 adımlık İngilizce tahliye teşhisi yerine, kullanıcının
    // ilk yapması gereken işi anlatan Türkçe sayfamız açılır (aynı belirti, daha basit ilk adım).
    { ara: ["tahliye", "pompa", "su atmıyor", "boşaltmıyor", "su boşalt"],
      rehber: B("camasir-makinesi-tahliye-filtresi-temizleme", "Tahliye filtresini temizleme", "Kolay", "~10 dakika", 6) },
    // rulman ve amortisör TEK yazıya bağlandı: ikisi de aynı belirtiyle gelir
    // (ses + titreşim) ve yazının işi zaten bu ikisini birbirinden AYIRMAK.
    { ara: ["rulman", "keçe", "bearing", "amortisör", "titreşim", "sarsıl", "zıpl"],
      rehber: B("camasir-makinesi-ses-titresim", "Ses ve titreşimde 5 kontrol", "Kolay", "~20 dakika", 5) },
    { ara: ["kapı contası", "conta", "körük", "seal"],
      rehber: B("camasir-makinesi-su-kaciriyor", "Su kaçağının kaynağını bulma", "Kolay", "~25 dakika", 8) },
    { ara: ["kapı kilidi", "kilit", "kapak kilidi"],
      rehber: B("camasir-makinesi-kapagi-acilmiyor", "Kapağı açılmayan makinede 6 kontrol", "Kolay", "~20 dakika", 6) },
    { ara: ["rezistans", "ısıtıcı", "ısıtmıyor"],
      rehber: B("camasir-makinesi-isitmiyor", "Isıtmayan makinede ücretsiz eleme", "Kolay", "~20 dakika", 8) },
    // KENDİ REHBERİMİZ (3 Ağu 2026, YK #34 Faz 2) — yerini aldığı iFixit kaydı
    // ("How to Remove Mold and Odors…", 8 adım) BİLEREK kaldırıldı: kendi rehberimiz
    // rehberBul içinde daima öncelikli olduğu için o satır artık erişilemez ölü koddu.
    { ara: ["koku", "küf", "kokuyor", "kokuyu"],
      rehber: B("camasir-makinesi-kokuyor", "Çamaşır makinesi kokusunu giderme", "Kolay", "~25 dakika", 6) },
  ],
  // KENDİ REHBERLERİMİZ (2 Ağu 2026, YK Kararı #34 Faz 1) — blogda `steps:` alanı ZATEN olan
  // üç Bosch/BSH yazısı rehber olarak bağlandı; sıfır yeni metin, URL değişmedi.
  // ⚠️ ANAHTAR KELİMELER BİLEREK DAR: hata kodları (e15/e22/e24) + o koda özgü ifadeler.
  // Jenerik bulaşık arızalarını ("tahliye", "su atmıyor", "temiz yıkamıyor") ÇALMAMALI —
  // aksi hâlde kendi rehberimiz DAİMA öncelikli olduğu için doğru iFixit kaydını ezerdi.
  // YK #31 denetimi geçti: üçü de ücretsiz/bakım seviyesi (su boşaltma, filtre temizliği,
  // tahliye yolu kontrolü); hiçbirinde parça değişimi ya da cihaz söküm adımı yok.
  "Bulaşık Makinesi": [
    { ara: ["e15", "aquastop", "taban tavası", "taşma güvenliği"],
      rehber: B("bosch-bulasik-makinesi-e15-hatasi", "Bosch/Siemens E15: taban suyunu boşaltma", "Kolay-Orta", "~20 dakika", 6) },
    { ara: ["e22", "iç filtre", "filtre tıkalı", "filtre tıkanık"],
      rehber: B("bosch-bulasik-makinesi-e22-hatasi", "Bosch/Siemens E22: iç filtreyi temizleme", "Kolay", "~10 dakika", 7) },
    { ara: ["e24", "tahliye tıkanık", "tıkalı tahliye", "tahliye hortumu"],
      rehber: B("bosch-bulasik-makinesi-e24-hatasi", "Bosch/Siemens E24: tahliye yolunu açma", "Kolay-Orta", "~20 dakika", 6) },
    // KENDİ REHBERİMİZ (3 Ağu 2026, YK #34 Faz 2) — anahtar kelimeler yalnız kokuya dar;
    // jenerik bulaşık arızalarını çalmaz.
    { ara: ["koku", "kokuyor", "kokuyu", "lağım"],
      rehber: B("bulasik-makinesi-kokuyor", "Bulaşık makinesi kokusunu giderme", "Kolay", "~20 dakika", 7) },
    // 🔴 22 Ağu (YK taraması) — ASİMETRİ KAPATILDI. Çamaşır makinesinde "su atmıyor"
    //    kendi rehberimize gidiyordu, bulaşıkta AYNI İFADE iFixit'in pompa DEĞİŞİMİ
    //    rehberine düşüyordu (Moderate, 8 adım). Aynı arıza, aynı ürün ailesi, iki sonuç.
    //    Doğrulandı: rehberBul("Bulaşık Makinesi","Tahliye") → iFixit.
    { ara: ["tahliye", "su atmıyor", "boşaltmıyor", "tabanda su"],
      rehber: B("bulasik-makinesi-su-atmiyor", "Tahliye tıkanıklığını açma", "Kolay", "~15 dakika", 6) },
    // 23 Ağu: "Tahliye pompası değişimi" iFixit kaydı KALDIRILDI. Tek anahtarı
    // "tahliye pompa" idi; üstteki kendi kaydımız "tahliye" ile zaten yakalıyor ve
    // `bizim || disari` yüzünden daima kazanıyordu → erişilemez ölü koddu.
    { ara: ["su giriş", "su almıyor", "giriş valf", "inlet"],
      rehber: B("bulasik-makinesi-su-almiyor", "Su almayan makinede 6 kontrol", "Kolay", "~15 dakika", 6) },
    { ara: ["rezistans", "ısıtıcı", "kurutmuyor", "ısıtmıyor"],
      rehber: B("bulasik-makinesi-kurutmuyor", "Kurutmayan makinede 5 kontrol", "Kolay", "~15 dakika", 5) },
    { ara: ["kapı contası", "conta", "sızdır", "seal"],
      rehber: B("bulasik-makinesi-su-kaciriyor", "Su kaçağının kaynağını bulma", "Kolay", "~25 dakika", 8) },
    // KENDİ REHBERİMİZ (21 Ağu 2026, PAZ 17 Ağu dönüşüm teslimi). Bir ÜSTTEKİ iFixit
    // püskürtme-kolu rehberinin ÖNÜNE alındı: aynı işi Türkçe, kendi sayfamızda ve 7
    // adımda anlatıyor (YK #34: önce kendi rehberimiz). iFixit satırı silinmedi —
    // "kollar" gibi bu listede olmayan kelimelerde hâlâ karşılık veriyor.
    // "sirkülasyon / yıkama motoru / devir daim" anahtarları buraya taşındı: belirti
    // aynı (temiz yıkamıyor) ve yazı önce ücretsiz sebepleri eliyor.
    { ara: ["püskürtme", "püskürtme kolu", "temiz yıkamıyor", "kireçli", "filtre tıkalı",
            "sirkülasyon", "yıkama motoru", "devir daim"],
      rehber: B("bulasik-makinesi-temiz-yikamiyor", "Temiz yıkamayan bulaşık makinesi", "Kolay", "~20 dakika", 7) },
    // 23 Ağu: "Püskürtme kolunu sökme ve temizleme" iFixit kaydı KALDIRILDI.
    // Temizlik seviyesindeydi (YK #31 ihlali değildi) ama anahtarları üstteki kendi
    // kaydımızla birebir örtüştüğü için hiç tetiklenemiyordu → ölü kod.
  ],
  // Buzdolabının haritadaki İLK kaydı (21 Ağu 2026). iFixit'te jenerik ev tipi buzdolabı
  // rehberi yok; küme yalnız KENDİ Türkçe rehberimizle açıldı. Anahtar kelimeler bilerek
  // DAR: "soğutmuyor" ve "no-frost" DIŞARIDA — onlar defrost/gaz/kompresör olabilir ve bu
  // rehber onları çözmez (Klima'da "soğutmuyor"un dışarıda bırakılmasıyla aynı mantık).
  "Buzdolabı": [
    { ara: ["kapı contası", "conta", "buzlanma", "buz tutuyor", "kırağı"],
      rehber: B("buzdolabi-buzlanma-yapiyor", "Buzdolabı contası ve buzlanma", "Kolay", "~20 dakika", 7) },
  ],
  "Fırın / Ocak / Aspiratör": [
    // rezistans · termostat/sensör · kapak contası → HEPSİ firin-isinmiyor'a bağlandı;
    // yazı bu üç sebebi zaten yan yana eliyor ve hangisinin servis olduğunu söylüyor.
    { ara: ["rezistans", "ısıtmıyor", "ısıtıcı", "termostat", "sıcaklık sensör", "sensör",
            "fırın kapak conta", "fırın contası"],
      rehber: B("firin-isinmiyor", "Isınmayan fırında 5 kontrol", "Kolay", "~15 dakika", 5) },
    { ara: ["fan motoru", "fan", "turbo"],
      rehber: B("firin-esit-pisirmiyor", "Eşit pişirmeyen fırında 7 kontrol", "Kolay", "~20 dakika", 7) },
    // 🔴 22 Ağu (YK taraması) — "yanmıyor" ÇIKARILDI. Masum bir belirti kelimesiydi ama
    //    kullanıcıyı GAZ YAKICI cihazın alev/karışım ayarını anlatan yabancı rehbere
    //    gönderiyordu. Kendi yazımız (`ocak-alevi-sari-yaniyor`) tam tersini söylüyor:
    //    "İnternetteki 'ayar vidasını çevir' tariflerine girme." Kendimizle çelişiyorduk.
    //    Doğrulandı: rehberBul("Fırın / Ocak / Aspiratör","Ocak yanmıyor") → iFixit.
    // ✅ 23 Ağu: KAPANDI. iFixit'in GAZ ocağı alev ayarı rehberi kaldırıldı ve "yanmıyor"
    //    dahil tüm ateşleme anahtarları kendi yazımıza bağlandı. Not: `ocak-atesleme-yapmiyor`
    //    gövde/gaz devresine hiç girmez — başlık temizliği, gaz vanası ve kıvılcım gözlemi.
    // 🔀 23 Ağu — ANAHTAR BÖLÜNMESİ. Tek kayıt buji sorgularını da geniş yazıya
    //    gönderiyordu; artık iki ayrı hat var: DAR (buji) ve GENİŞ (ateşleme).
    //    ⚠️ Sıra DEĞİL uzunluk karar veriyor: `rehberBul` havuz içinde EN UZUN eşleşen
    //    anahtarı seçiyor (yukarıdaki "İKİ AŞAMALI SEÇİM" notu). O yüzden ayrım
    //    kelimelerin kendisiyle kuruldu — "ateşleme bujisi" (15) ve "buji" (4) dar hatta,
    //    "ateşleme"/"kıvılcım"/"çakmak"/"yanmıyor" (6-8) geniş hatta.
    //    Sonuç: "ateşleme bujisi tamiri" → 15 > 8 → DAR yazı ✓ · "ocak ateşleme yapmıyor"
    //    → yalnız "ateşleme" eşleşir → GENİŞ yazı ✓. (Dar kayıt okunabilirlik için
    //    önce yazıldı; işlevi sıradan gelmiyor.)
    { ara: ["ateşleme bujisi", "buji"],
      rehber: B("ocak-atesleme-bujisi-degisimi", "Buji değişmeden önce 6 ücretsiz kontrol", "Kolay", "~10 dakika", 6) },
    { ara: ["ateşleme", "kıvılcım", "çakmak", "yanmıyor"],
      rehber: B("ocak-atesleme-yapmiyor", "Ateşleme yapmayan ocakta 4 kontrol", "Kolay", "~15 dakika", 4) },
    // NOT: "lamba"/"ampul" anahtar kelimesi BİLEREK yok. Rehber fırın kapağına ait; SEED'deki
    // "Aspiratör anahtar/kart/lamba" arızasına bağlanırsa kullanıcı alakasız sayfaya düşer
    // (test sırasında bu yanlış eşleşme yakalandı ve kapatıldı).
    // "fırın kapak conta" ve "fırın contası" anahtarları yukarıdaki firin-isinmiyor
    // kaydına taşındı: yıpranmış conta ısı kaçırır ve yazı bunu zaten 3. maddede eliyor.
    { ara: ["kapı contası"],
      rehber: B("firin-isinmiyor", "Isınmayan fırında 5 kontrol", "Kolay", "~15 dakika", 5) },
    // 26 Ağu 2026: aspiratör tarafı ilk kez rehberle karşılandı (eskiden "rehber YOK"tu).
    // Anahtarlar DAR (PAZ föyü §4): "koku" BİLEREK dışarıda — tek başına klima/çamaşır/
    // bulaşık koku rehberlerine de çarpar. "lamba"/"ampul" hâlâ dışarıda (üstteki not).
    { ara: ["davlumbaz", "aspiratör", "yağ filtresi", "karbon filtre", "çekiş"],
      rehber: B("davlumbaz-cekmiyor", "Davlumbaz çekişini geri getirme", "Kolay", "~20 dakika", 7) },
  ],
  // Klima kümesinde iFixit'te jenerik ev tipi klima rehberi YOK — bu cihaz haritaya
  // yalnız KENDİ Türkçe rehberimizle girdi. Anahtar kelimeler bilerek DAR tutuldu:
  // "soğutmuyor" gaz/kompresör arızası da olabilir, filtre rehberine bağlanmamalı.
  "Klima": [
    { ara: ["filtre", "kirli filtre", "hava akışı", "hava üflemiyor"],
      rehber: B("klima-filtresi-temizleme", "Klima filtresini temizleme", "Kolay", "~15 dakika", 6) },
  ],
  "Süpürge": [
    // 22 Ağu 2026 (Tolga onayı, konu #3 → seçenek b), 22 Ağu akşam DÜZELTİLDİ (YK taraması).
    //
    // 🔴 SABAHKİ NOTUM YANLIŞTI — "iFixit'in ÖNÜNE alındı" diye yazmıştım. `rehberBul`
    //    koşulsuz `bizim || disari` döndürüyor (bkz. fonksiyon): **dizideki sıra hiç etkili
    //    DEĞİL.** Sabahki düzeltme sıradan değil, ANAHTAR EKLEMEKTEN işe yaramıştı.
    //    Aynı yöntemle kapatılan bir sonraki vaka sessizce açık kalırdı.
    //
    // 🔴 VE DELİK KAPANMAMIŞTI: "motor" anahtarı yalnız iFixit satırındaydı, oysa
    //    `tarife-seed.js` Süpürge'nin BİRİNCİ arıza adı birebir "Motor". Yani teşhis
    //    "Motor" derse kullanıcı Difficult/18 adımlık MOTOR SÖKME rehberini görüyordu —
    //    istisna değil, beklenen yol. Doğrulandı: rehberBul("Süpürge","Motor") → iFixit.
    // ➡️ "motor" kendi rehberimize EKLENDİ. Yazımızın ilk cümlesi zaten doğru cevap:
    //    "çoğu zaman arıza değil, tıkanmış hava akışı."
    // ✅ 23 Ağu (YK #31 seçenek c): iFixit satırları ARTIK YOK — üçü de kendi
    //    yazılarımıza bağlandı. "fırça / brush / rulo" buraya, "anahtar / düğme /
    //    açılmıyor / switch" yeni `supurge-calismiyor` yazısına taşındı.
    { ara: ["motor", "çekmiyor", "emiş", "emmiyor", "tıkalı", "fırça", "brush", "rulo"],
      rehber: B("supurge-cekmiyor", "Emişi geri getiren 6 kontrol", "Kolay", "~15 dakika", 6) },
    { ara: ["anahtar", "düğme", "açılmıyor", "switch"],
      rehber: B("supurge-calismiyor", "Hiç açılmayan süpürgede ücretsiz eleme", "Kolay", "~15 dakika", 8) },
  ],
};

const kucult = (s) => String(s || "").toLocaleLowerCase("tr");

/**
 * Teşhis edilen arızaya karşılık gelen rehberi bulur.
 * Eşleşme yoksa null döner → buton hiç gösterilmez (boş/yanlış link YOK).
 *
 * @param {string} cihaz   Seçilen cihaz (CIHAZLAR listesinden birebir)
 * @param {string} arizaAd En olası arızanın adı (AI çıktısı — serbest metin)
 *
 * ⚠️ SEED BAĞIMLILIĞI (4 Ağu 2026, YK #38 denetimi): burada eşleşme SEED satır ADLARINA
 * DEĞİL, aşağıdaki küratörlü `ara` anahtar listelerine yapılır — tarife satırı bölünse ya da
 * yeniden adlandırılsa bile bu harita kendiliğinden bozulmaz. `seedBeklenen`'deki sessiz
 * yanlış-eşleşme hatası burada YOK: (a) "en uzun anahtar kazanır" kuralı zaten belirleyici,
 * (b) eşleşme yoksa null → buton hiç gösterilmez (güvenli varsayılan), (c) en kötü sonuç
 * yanlış LİNK'tir, yanlış FİYAT değil. Denetim: bugünkü 45 SEED adı × 5 ek ile 0 beraberlik;
 * bölünecek üç kalemin cihazlarında (TV · Bilgisayar/Yazıcı · Su Sebili) zaten rehber yok.
 * Kilit: `src/seed-eslesme.test.js` → "onarim-rehberleri: SEED adlarına bağlılık".
 */
export function rehberBul(cihaz, arizaAd) {
  // Alias-duyarlı: cihaz adı birleşince (örn. "Çamaşır Makinesi / Kurutma") tablo anahtarı
  // eski adında kalabilir; `tabloBul` sırayla dener, veri dosyasına dokunmaya gerek kalmaz.
  const liste = tabloBul(REHBERLER, cihaz);
  if (!liste || !arizaAd) return null;
  const a = kucult(arizaAd);
  // İKİ AŞAMALI SEÇİM:
  // 1) Her iki havuzda da (bizim rehberlerimiz / iFixit) en SPESİFİK eşleşme kazanır —
  //    en uzun anahtar kelime ("tahliye pompa" > "tahliye"), böylece genel kelime
  //    spesifik olanı ezmez.
  // 2) Sonuçta KENDİ Türkçe rehberimiz varsa DAİMA o döner; iFixit yalnız bizde
  //    karşılığı olmayan konularda yedektir (Tolga kararı, 31 Tem 2026).
  //    Not: "en uzun anahtar" kuralı havuz İÇİNDE çalışır — bizim kaydımızın anahtarı
  //    daha kısa diye iFixit öne geçemez.
  let bizim = null, bizimUzun = 0, disari = null, disariUzun = 0;
  for (const kayit of liste) {
    for (const k of kayit.ara) {
      if (!a.includes(kucult(k))) continue;
      if (kayit.rehber.kendi) {
        if (k.length > bizimUzun) { bizim = kayit.rehber; bizimUzun = k.length; }
      } else if (k.length > disariUzun) { disari = kayit.rehber; disariUzun = k.length; }
    }
  }
  return bizim || disari;
}
