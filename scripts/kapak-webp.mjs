// scripts/kapak-webp.mjs — png-only görselleri KAYIPSIZ webp'ye çevirir (kapak + adım kareleri).
//
//   node scripts/kapak-webp.mjs             → kapak adayları, RAPOR, HİÇBİR ŞEY YAZMAZ
//   node scripts/kapak-webp.mjs --yaz       → geçen kapak adaylarını diske yazar
//   node scripts/kapak-webp.mjs --adim      → adım/kontrol kareleri (adim-0N, kontrol-0N)
//   node scripts/kapak-webp.mjs --tumu      → klasörlerdeki TÜM png-only dosyalar
//   node scripts/kapak-webp.mjs --yaz petekler-isinmiyor kombi-yanmiyor   → yalnız bu slug'ların kapağı
//
// ── NEDEN VAR (1 Eyl 2026, Tolga: "betiği repoya al") ────────────────────────────────
// `build-blog.mjs` kapağı DİSKTE arıyor (`GORSEL_UZANTILARI = ["webp","png","svg"]`,
// `fs.existsSync` ile sırayla) — yani png-only bir kapak KIRIK DEĞİL, yalnız 2-3 kat
// büyük servis ediliyor. Bu bir düzeltme değil, ÖLÇÜLMÜŞ BİR İYİLEŞTİRME: 1 Eyl'de
// 7 klasör çevrildi, 210.488 B → 86.744 B (−%59).
// İş elle yapıldığı sürece her yeni GRF teslimi png-only girme riskini taşıyordu;
// betik o riski tek komuta indiriyor.
//
// ── KAPSAM GENİŞLEDİ (2 Eyl 2026, FE koşusu) ────────────────────────────────────────
// `gorselUrl(slug, "adim-0N")` da AYNI webp→png→svg sırasını izliyor (build-blog.mjs
// satır ~1007) — yani adım kareleri de png-only kaldıkları sürece 2-3 kat büyük
// servis ediliyordu. Kapak tarafı 1 Eyl'de kapandı, adım tarafı açık kalmıştı:
// 41 rehber klasöründe **256 png-only adım karesi + 4 kontrol karesi = 15,8 MB**.
// Rehber sayfası 6-8 kare basıyor, yani ağırlık kapak sayfasınınkinden büyük.
// Betiğin çekirdeği (üç kapı) değişmedi; değişen yalnız HANGİ dosyaların taranacağı.
//
// ── ⛔ BU BETİK BUILD'E BAĞLANMADI ───────────────────────────────────────────────────
// #112'nin `site-istatistik.mjs` için verdiği gerekçe burada da geçerli: build'i ikili
// varlık üretimine bağlamak, `test.yml`'nin bilerek dar tuttuğu kapsamı genişletir ve
// `cwebp` kurulu olmayan bir ortamda build'i kırar. Betik ELLE koşulur; `--yaz`'sız
// çağrı hiçbir şey yazmaz.
//
// ── GÜVENLİK KAPISI — "ÜRETTİM, DEMEK Kİ DOĞRU" YASAK (YK #88) ───────────────────────
// Kodlayıcının "lossless" demesi kanıt değildir; ölçüt DOSYANIN KENDİSİDİR. Her aday
// üç kapıdan geçer, biri düşerse dosya YAZILMAZ:
//   ① aday çözülüp kaynakla PİKSEL PİKSEL karşılaştırılır (RGBA md5 birebir mi?)
//   ② kazanç gerçek mi (aday < kaynak)?
//   ③ yazıldıktan SONRA diskten TEKRAR okunup ikinci kez doğrulanır
// ③ ayrı bir kapı çünkü ①'i bellekteki tampon geçiyor; diske yazma ayrı bir olaydır
// (kesik yazma, dolu disk, araya giren başka bir oturum). 1 Eyl koşusunda tam da bu
// oldu: bir dosya index'te dururken çalışma ağacından silinmişti.
//
// 🔒 `-exact`: alfa kanallı kaynaklarda cwebp, TAM SAYDAM piksellerin RGB değerlerini
//    "nasılsa görünmüyor" diye değiştirebilir — bu bizim ① kapımızı düşürür. `-exact`
//    onu kapatır. Alfasız kaynakta etkisi yoktur, o yüzden koşulsuz veriliyor.
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import crypto from "node:crypto";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { pathToFileURL, fileURLToPath } from "node:url";

export const GORSEL_KOK = new URL("../public/tamir-gorsel/", import.meta.url);

// Kök hem URL hem düz yol olarak verilebilsin (test geçici dizin veriyor).
// ⛔ `url.pathname` KULLANILMAZ: yüzde-kodlu döner, yolunda boşluk olan bir dizinde
//    sessizce yanlış yeri okurdu.
const yolaCevir = (kok) => (kok instanceof URL ? fileURLToPath(kok) : kok);

// cwebp lossless'ta `-z` hazır ayar seti (0=hızlı … 9=en iyi sıkıştırma). Hepsi denenir
// ve piksel-birebir olanların EN KÜÇÜĞÜ seçilir — "z9 daima en küçüktür" varsayımı
// doğru değil, görsele göre değişiyor.
export const Z_AYARLARI = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// ── PNG ÇÖZÜCÜ ───────────────────────────────────────────────────────────────────────
// Neden elle: repoda görüntü bağımlılığı YOK (`sharp` kurulu değil) ve tek bir kapak
// için node_modules'a ikili bağımlılık eklemek istemedik. Kapsam bilerek DAR:
// 8-bit, colorType 2 (RGB) veya 6 (RGBA), interlace yok — GRF'nin ürettiği kapakların
// tamamı bu (1 Eyl'de 216 kapağın hepsi tek tek yoklandı). Kapsam dışı bir PNG gelirse
// SESSİZCE yanlış çözmek yerine anlaşılır bir hata verir.
export function pngCoz(buf) {
  const imza = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (!buf.subarray(0, 8).equals(imza)) throw new Error("PNG imzası yok");

  let genislik = 0, yukseklik = 0, derinlik = 0, renkTipi = 0, interlace = 0;
  const idat = [];
  let ofset = 8;
  while (ofset < buf.length) {
    const uzunluk = buf.readUInt32BE(ofset);
    const tip = buf.toString("ascii", ofset + 4, ofset + 8);
    const veri = buf.subarray(ofset + 8, ofset + 8 + uzunluk);
    if (tip === "IHDR") {
      genislik = veri.readUInt32BE(0);
      yukseklik = veri.readUInt32BE(4);
      derinlik = veri[8];
      renkTipi = veri[9];
      interlace = veri[12];
    } else if (tip === "IDAT") idat.push(veri);
    else if (tip === "IEND") break;
    ofset += 12 + uzunluk; // uzunluk(4) + tip(4) + veri + CRC(4)
  }

  if (derinlik !== 8) throw new Error(`desteklenmeyen bit derinliği: ${derinlik} (yalnız 8)`);
  if (renkTipi !== 2 && renkTipi !== 6) {
    throw new Error(`desteklenmeyen renk tipi: ${renkTipi} (yalnız 2=RGB, 6=RGBA)`);
  }
  if (interlace !== 0) throw new Error("interlace'li PNG desteklenmiyor");

  const kanal = renkTipi === 6 ? 4 : 3;
  const satirBayt = genislik * kanal;
  const ham = zlib.inflateSync(Buffer.concat(idat));
  const beklenen = (satirBayt + 1) * yukseklik;
  if (ham.length !== beklenen) {
    throw new Error(`çözülen veri boyu tutmadı: ${ham.length} ≠ ${beklenen}`);
  }

  // Filtre geri alma (PNG spec 9.2). Her satır bir filtre baytıyla başlar.
  const cikti = Buffer.alloc(satirBayt * yukseklik);
  for (let y = 0; y < yukseklik; y++) {
    const filtre = ham[y * (satirBayt + 1)];
    const satir = ham.subarray(y * (satirBayt + 1) + 1, (y + 1) * (satirBayt + 1));
    const hedef = cikti.subarray(y * satirBayt, (y + 1) * satirBayt);
    const ust = y > 0 ? cikti.subarray((y - 1) * satirBayt, y * satirBayt) : null;
    for (let x = 0; x < satirBayt; x++) {
      const a = x >= kanal ? hedef[x - kanal] : 0;      // sol
      const b = ust ? ust[x] : 0;                        // üst
      const c = ust && x >= kanal ? ust[x - kanal] : 0;  // sol-üst
      let deger = satir[x];
      if (filtre === 1) deger += a;
      else if (filtre === 2) deger += b;
      else if (filtre === 3) deger += (a + b) >> 1;
      else if (filtre === 4) {
        // Paeth
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        deger += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      } else if (filtre !== 0) throw new Error(`bilinmeyen PNG filtresi: ${filtre}`);
      hedef[x] = deger & 0xff;
    }
  }

  return { genislik, yukseklik, rgba: rgbaYap(cikti, kanal) };
}

// Karşılaştırma DAİMA RGBA üstünden yapılır: `dwebp -pam` her zaman RGBA döndürüyor,
// kaynak PNG ise RGB olabilir. İkisini aynı düzleme çekmezsek md5'ler asla tutmaz.
function rgbaYap(veri, kanal) {
  if (kanal === 4) return veri;
  const piksel = veri.length / 3;
  const cikti = Buffer.alloc(piksel * 4);
  for (let i = 0; i < piksel; i++) {
    cikti[i * 4] = veri[i * 3];
    cikti[i * 4 + 1] = veri[i * 3 + 1];
    cikti[i * 4 + 2] = veri[i * 3 + 2];
    cikti[i * 4 + 3] = 255;
  }
  return cikti;
}

// ── PAM ÇÖZÜCÜ (dwebp çıktısı) ───────────────────────────────────────────────────────
// PAM (P7) başlığı satır satır anahtar/değer, `ENDHDR\n` ile biter; gerisi ham RGBA.
export function pamCoz(buf) {
  const bas = buf.indexOf("ENDHDR\n");
  if (bas < 0) throw new Error("PAM başlığı bulunamadı (dwebp çıktısı beklenen biçimde değil)");
  const baslik = buf.toString("ascii", 0, bas);
  const oku = (ad) => {
    const m = baslik.match(new RegExp(`^${ad} (\\d+)$`, "m"));
    if (!m) throw new Error(`PAM başlığında ${ad} yok`);
    return Number(m[1]);
  };
  const genislik = oku("WIDTH"), yukseklik = oku("HEIGHT"), derinlik = oku("DEPTH");
  if (derinlik !== 4) throw new Error(`PAM derinliği 4 değil: ${derinlik}`);
  const rgba = buf.subarray(bas + 7);
  if (rgba.length !== genislik * yukseklik * 4) {
    throw new Error(`PAM piksel verisi eksik: ${rgba.length} ≠ ${genislik * yukseklik * 4}`);
  }
  return { genislik, yukseklik, rgba };
}

// Piksel kimliği: boyut + ham RGBA. Dosya bayt'ı DEĞİL — iki farklı kodlayıcı aynı
// görüntüyü farklı bayt'larla yazar; bizi ilgilendiren görüntünün kendisi.
export function pikselMd5(g) {
  return crypto.createHash("md5")
    .update(`${g.genislik}x${g.yukseklik}:`)
    .update(g.rgba)
    .digest("hex");
}

// ── ARAÇ VARLIĞI ─────────────────────────────────────────────────────────────────────
// `cwebp`/`dwebp` sistem araçları (Homebrew `webp`). Yoksa betik ÇALIŞMAZ ve bunu
// açıkça söyler — sessizce "0 aday" deyip geçmez (boş çıktı kanıt değildir, YK #88 ③).
export function araclarVar() {
  try {
    execFileSync("cwebp", ["-version"], { stdio: "ignore" });
    execFileSync("dwebp", ["-version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// ── ADAY TARAMA ──────────────────────────────────────────────────────────────────────
// Aday = `<ad>.png` VAR, `<ad>.webp` YOK. Mevcut bir webp'nin ÜZERİNE YAZILMAZ:
// oradaki dosya elle üretilmiş/onaylanmış olabilir, betiğin işi boşluğu doldurmak.
//
// Desenler, `build-blog.mjs`'in FİİLEN ÇÖZDÜĞÜ adları karşılar — uydurma değil:
//   kapak      → `kapakUrl()`            (satır ~918)
//   adim-0N    → `adimGorselUrl()`       (satır ~1007)
//   kontrol-0N → `kontrolGorselUrl()`    (satır ~1061)
// Üçü de aynı `gorselUrl` üstünden webp→png→svg sırasını izliyor.
export const DESENLER = {
  kapak: /^kapak\.png$/,
  adim: /^(?:adim|kontrol)-\d{2}\.png$/,
  tumu: /\.png$/,
};

/** Dosya düzeyinde aday listesi: `[{slug, ad}]` (ad = uzantısız dosya adı). */
export function dosyaAdaylari(kok = GORSEL_KOK, desen = DESENLER.kapak) {
  const kokYol = yolaCevir(kok);
  const dizin = fs.existsSync(kokYol) ? fs.readdirSync(kokYol, { withFileTypes: true }) : [];
  const cikti = [];
  for (const d of dizin.filter((d) => d.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const klasor = path.join(kokYol, d.name);
    for (const dosya of fs.readdirSync(klasor).sort()) {
      if (!desen.test(dosya)) continue;
      const ad = dosya.replace(/\.png$/, "");
      if (fs.existsSync(path.join(klasor, `${ad}.webp`))) continue;
      cikti.push({ slug: d.name, ad });
    }
  }
  return cikti;
}

/** Geriye dönük yüzey: yalnız KAPAK adaylarının slug listesi. */
export function adaylar(kok = GORSEL_KOK) {
  return dosyaAdaylari(kok, DESENLER.kapak).map((g) => g.slug);
}

// ── KODLAMA + ① PİKSEL KAPISI ────────────────────────────────────────────────────────
// Tüm `-z` ayarları denenir; her aday ÇÖZÜLÜP kaynakla karşılaştırılır; birebir
// OLMAYAN aday elenir. Geriye kalanların en küçüğü döner. Hiçbiri geçmezse null.
export function enIyiWebp(pngYolu) {
  const kaynak = pngCoz(fs.readFileSync(pngYolu));
  const hedefMd5 = pikselMd5(kaynak);
  const gecici = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "kapak-webp-")), "a.webp");

  let enIyi = null;
  for (const z of Z_AYARLARI) {
    try {
      execFileSync("cwebp", ["-lossless", "-exact", "-z", String(z), "-quiet", pngYolu, "-o", gecici]);
      const veri = fs.readFileSync(gecici);
      const pam = execFileSync("dwebp", ["-quiet", "-pam", gecici, "-o", "-"], { maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] });
      if (pikselMd5(pamCoz(pam)) !== hedefMd5) continue; // ① düştü — aday değil
      if (!enIyi || veri.length < enIyi.veri.length) enIyi = { veri, ayar: `-z ${z}`, md5: hedefMd5 };
    } catch {
      // tek bir ayarın patlaması diğerlerini bitirmez; hepsi düşerse zaten null döner
    }
  }
  fs.rmSync(path.dirname(gecici), { recursive: true, force: true });
  return enIyi;
}

// ── ANA AKIŞ ─────────────────────────────────────────────────────────────────────────
// `yaz=false` (varsayılan) → yalnız ölçer ve raporlar. Yazma AÇIK BİR BAYRAK ister:
// varlık üreten bir betiğin kazara koşup repoyu değiştirmesi istenmez.
// Giriş ya düz slug (→ o klasörün kapağı, eski çağrı biçimi) ya da `{slug, ad}`.
const girisNormalize = (g) => (typeof g === "string" ? { slug: g, ad: "kapak" } : g);

export function donustur(liste, { yaz = false, kok = GORSEL_KOK } = {}) {
  const kokYol = yolaCevir(kok);
  const sonuclar = [];
  for (const giris of liste) {
    const { slug, ad } = girisNormalize(giris);
    const pngYolu = path.join(kokYol, slug, `${ad}.png`);
    const webpYolu = path.join(kokYol, slug, `${ad}.webp`);
    if (!fs.existsSync(pngYolu)) { sonuclar.push({ slug, ad, durum: "ATLANDI", not: `${ad}.png yok` }); continue; }
    if (fs.existsSync(webpYolu)) { sonuclar.push({ slug, ad, durum: "ATLANDI", not: `${ad}.webp zaten var` }); continue; }

    const pngBoyut = fs.statSync(pngYolu).size;
    let aday;
    try {
      aday = enIyiWebp(pngYolu);
    } catch (e) {
      sonuclar.push({ slug, ad, durum: "HATA", not: e.message });
      continue;
    }
    if (!aday) { sonuclar.push({ slug, ad, durum: "RED", not: "hiçbir ayarda piksel-birebir çıkmadı" }); continue; }
    // ② kazanç kapısı
    if (aday.veri.length >= pngBoyut) {
      sonuclar.push({ slug, ad, durum: "RED", not: `kazanç yok (${aday.veri.length} ≥ ${pngBoyut})` });
      continue;
    }
    if (!yaz) {
      sonuclar.push({ slug, ad, durum: "HAZIR", pngBoyut, webpBoyut: aday.veri.length, ayar: aday.ayar });
      continue;
    }

    fs.writeFileSync(webpYolu, aday.veri);
    // ③ DİSKTEN TEKRAR OKU — bellekteki tamponu değil, fiilen yazılanı doğrula.
    const diskten = fs.readFileSync(webpYolu);
    const pam = execFileSync("dwebp", ["-quiet", "-pam", webpYolu, "-o", "-"], { maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] });
    if (diskten.length !== aday.veri.length || pikselMd5(pamCoz(pam)) !== aday.md5) {
      fs.rmSync(webpYolu, { force: true }); // yarım/bozuk dosya BIRAKILMAZ
      sonuclar.push({ slug, ad, durum: "HATA", not: "diske yazılan dosya doğrulamayı geçmedi, silindi" });
      continue;
    }
    sonuclar.push({ slug, ad, durum: "YAZILDI", pngBoyut, webpBoyut: aday.veri.length, ayar: aday.ayar, md5: aday.md5 });
  }
  return sonuclar;
}

// Yalnız DOĞRUDAN çalıştırılınca iş yapar; import edildiğinde hiçbir yan etkisi yoktur
// (test dosyayı import edip saf fonksiyonları ölçebilsin diye — `site-istatistik.mjs`
// ile aynı desen).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (!araclarVar()) {
    console.error("✖ cwebp/dwebp bulunamadı. Kurulum: brew install webp");
    process.exit(1);
  }
  const argv = process.argv.slice(2);
  const yaz = argv.includes("--yaz");
  const desenAdi = argv.includes("--tumu") ? "tumu" : argv.includes("--adim") ? "adim" : "kapak";
  const secilen = argv.filter((a) => !a.startsWith("--"));
  // Slug verildiyse eski davranış: o klasörlerin KAPAĞI. Desen bayrağıyla birlikte
  // verilirse seçim slug'a daraltılır (ör. `--adim kombi-basinc-dusuyor`).
  const liste = secilen.length
    ? (desenAdi === "kapak"
        ? secilen
        : dosyaAdaylari(GORSEL_KOK, DESENLER[desenAdi]).filter((g) => secilen.includes(g.slug)))
    : dosyaAdaylari(GORSEL_KOK, DESENLER[desenAdi]);

  if (!liste.length) {
    console.log(`✓ png-only dosya yok (desen: ${desenAdi}) — çevrilecek bir şey bulunmadı.`);
    process.exit(0);
  }
  console.log(`Desen: ${desenAdi} · aday: ${liste.length} dosya${yaz ? "" : " (kuru koşu)"}\n`);
  const sonuclar = donustur(liste, { yaz });
  let toplamPng = 0, toplamWebp = 0;
  for (const s of sonuclar) {
    const etiket = s.ad && s.ad !== "kapak" ? `${s.slug}/${s.ad}` : s.slug;
    if (s.durum === "YAZILDI" || s.durum === "HAZIR") {
      toplamPng += s.pngBoyut; toplamWebp += s.webpBoyut;
      const kazanc = Math.round((100 * (s.pngBoyut - s.webpBoyut)) / s.pngBoyut);
      console.log(`${s.durum.padEnd(8)} ${etiket}: ${s.pngBoyut} → ${s.webpBoyut} B (−%${kazanc}) ${s.ayar}`);
    } else {
      console.log(`${s.durum.padEnd(8)} ${etiket}: ${s.not}`);
    }
  }
  if (toplamPng) {
    const kazanc = Math.round((100 * (toplamPng - toplamWebp)) / toplamPng);
    console.log(`\nTOPLAM   ${toplamPng} → ${toplamWebp} B (−%${kazanc})`);
  }
  if (!yaz && sonuclar.some((s) => s.durum === "HAZIR")) {
    console.log("\n(kuru koşu — yazmak için: node scripts/kapak-webp.mjs --yaz)");
  }
  if (sonuclar.some((s) => s.durum === "HATA")) process.exit(1);
}
