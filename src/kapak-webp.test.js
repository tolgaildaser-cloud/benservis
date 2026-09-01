// src/kapak-webp.test.js — `scripts/kapak-webp.mjs` kapısı.
//
// NE KORUYOR: betiğin işi bir varlığı SİLİP yerine başkasını koymak değil, yanına
// küçük bir kopya yazmak — ama o kopyanın kaynakla PİKSEL PİKSEL aynı olduğu iddiası
// tamamen betiğin kendi çözücüsüne dayanıyor. Çözücü sessizce bozulursa (yanlış filtre,
// yanlış kanal sayısı, kaydırılmış satır) karşılaştırma HER ZAMAN "aynı" der ve
// betik bozuk dosyaları güvenle yazmış gibi raporlar. #110/#112'nin "sessiz düşüş"
// sınıfı: build yeşil, test yeşil, uyarı yok, ama kapı fiilen ölü.
// Bu yüzden test asıl olarak ÇÖZÜCÜYÜ sınar, kodlayıcıyı değil.
//
// ⛔ CI'DA `cwebp` YOK: `.github/workflows/test.yml` ubuntu'da yalnız `npm ci` koşuyor.
//    Bu yüzden gerçek kodlama turu `it.skipIf(!araclarVar())` ile korunuyor — yereldeki
//    koşuda çalışır, CI'da atlanır. Saf fonksiyonlar (çözücüler, kapılar, aday taraması)
//    araç gerektirmez ve HER ZAMAN koşar. Atlanan tur, kapının kendisini geçersiz
//    kılmaz: yazma kararının üç kapısından ikisi burada araçsız sınanıyor.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import { pngCoz, pamCoz, pikselMd5, adaylar, donustur, araclarVar } from "../scripts/kapak-webp.mjs";

// ── Sentetik PNG üreteci ─────────────────────────────────────────────────────────────
// Fikstür dosyası COMMIT ETMİYORUZ: ikili fikstür bozulduğunda kimse fark etmez ve
// testin ne iddia ettiği okunamaz hâle gelir. PNG burada baytıyla kuruluyor, yani
// testin beklediği piksel değerleri kodun içinde AÇIKÇA yazılı.
const crcTablo = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (const b of buf) c = crcTablo[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(tip, veri) {
  const uzunluk = Buffer.alloc(4);
  uzunluk.writeUInt32BE(veri.length);
  const govde = Buffer.concat([Buffer.from(tip, "ascii"), veri]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(govde));
  return Buffer.concat([uzunluk, govde, crc]);
}
/** pikseller: her satır için kanal dizisi. filtre: 0..4 (tüm satırlara aynı filtre). */
function pngYap(pikseller, { kanal = 3, filtre = 0, derinlik = 8, renkTipi = null, interlace = 0 } = {}) {
  const yukseklik = pikseller.length;
  const genislik = pikseller[0].length / kanal;
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(genislik, 0);
  ihdr.writeUInt32BE(yukseklik, 4);
  ihdr[8] = derinlik;
  ihdr[9] = renkTipi ?? (kanal === 4 ? 6 : 2);
  ihdr[12] = interlace;

  // Ham satırları verilen filtreyle KODLA (çözücünün geri alması gereken şey bu).
  const satirBayt = genislik * kanal;
  const ham = [];
  for (let y = 0; y < yukseklik; y++) {
    const satir = Buffer.alloc(satirBayt + 1);
    satir[0] = filtre;
    for (let x = 0; x < satirBayt; x++) {
      const ger = pikseller[y][x];
      const a = x >= kanal ? pikseller[y][x - kanal] : 0;
      const b = y > 0 ? pikseller[y - 1][x] : 0;
      const c = y > 0 && x >= kanal ? pikseller[y - 1][x - kanal] : 0;
      let tahmin = 0;
      if (filtre === 1) tahmin = a;
      else if (filtre === 2) tahmin = b;
      else if (filtre === 3) tahmin = (a + b) >> 1;
      else if (filtre === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        tahmin = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      satir[x + 1] = (ger - tahmin) & 0xff;
    }
    ham.push(satir);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(Buffer.concat(ham))),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// 3×2 RGB — komşudan tahmin edilemeyecek kadar düzensiz, filtre hatası gizlenmesin.
const RGB_PIKSEL = [
  [10, 20, 30, 200, 5, 90, 7, 250, 128],
  [255, 0, 0, 0, 255, 0, 0, 0, 255],
];

function pamYap({ genislik, yukseklik, rgba }) {
  return Buffer.concat([
    Buffer.from(`P7\nWIDTH ${genislik}\nHEIGHT ${yukseklik}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n`, "ascii"),
    rgba,
  ]);
}

describe("PNG çözücü — filtreler", () => {
  // Beş filtrenin BEŞİ de aynı pikseli üretmeli. Paeth (4) özellikle kritik: en kolay
  // yanlış yazılan ve en sessiz bozulan filtre odur, çünkü çoğu görselde ortalamaya
  // yakın sonuç verir ve hata ancak keskin kenarlarda görünür.
  for (const filtre of [0, 1, 2, 3, 4]) {
    it(`filtre ${filtre} geri alınıyor`, () => {
      const { genislik, yukseklik, rgba } = pngCoz(pngYap(RGB_PIKSEL, { filtre }));
      expect([genislik, yukseklik]).toEqual([3, 2]);
      // RGB kaynak RGBA'ya normalize edilir; alfa daima 255.
      expect([...rgba.subarray(0, 8)]).toEqual([10, 20, 30, 255, 200, 5, 90, 255]);
      expect([...rgba.subarray(rgba.length - 4)]).toEqual([0, 0, 255, 255]);
      expect(rgba.length).toBe(3 * 2 * 4);
    });
  }

  it("beş filtre de BİREBİR aynı pikseli veriyor", () => {
    // Tek tek doğru görünüp birbirinden farklı sonuç veren iki filtre, betiğin
    // karşılaştırmasını kaynağa göre değil kendine göre doğru yapardı.
    const md5ler = [0, 1, 2, 3, 4].map((filtre) => pikselMd5(pngCoz(pngYap(RGB_PIKSEL, { filtre }))));
    expect(new Set(md5ler).size, `filtreler farklı piksel üretti: ${md5ler.join(" ")}`).toBe(1);
  });

  it("RGBA kaynakta alfa kanalı korunuyor (uydurulmuyor)", () => {
    const rgbaPiksel = [[1, 2, 3, 4, 250, 251, 252, 0]];
    const { rgba } = pngCoz(pngYap(rgbaPiksel, { kanal: 4, filtre: 1 }));
    expect([...rgba]).toEqual([1, 2, 3, 4, 250, 251, 252, 0]);
  });
});

describe("PNG çözücü — kapsam dışını SESSİZCE çözmez", () => {
  // Kapsam dışı bir dosyayı yanlış çözmek, "birebir" diyen bozuk bir webp yazdırırdı.
  // Doğru davranış: anlaşılır hata.
  it("16-bit reddediliyor", () => {
    expect(() => pngCoz(pngYap(RGB_PIKSEL, { derinlik: 16 }))).toThrow(/bit derinliği/);
  });
  it("palet (colorType 3) reddediliyor", () => {
    expect(() => pngCoz(pngYap(RGB_PIKSEL, { renkTipi: 3 }))).toThrow(/renk tipi/);
  });
  it("interlace reddediliyor", () => {
    expect(() => pngCoz(pngYap(RGB_PIKSEL, { interlace: 1 }))).toThrow(/interlace/);
  });
  it("PNG olmayan bayt reddediliyor", () => {
    expect(() => pngCoz(Buffer.from("bu bir png değil"))).toThrow(/imza/);
  });
});

describe("PAM çözücü (dwebp çıktısı)", () => {
  it("başlık ve piksel okunuyor", () => {
    const rgba = Buffer.from([1, 2, 3, 255, 4, 5, 6, 255]);
    expect(pamCoz(pamYap({ genislik: 2, yukseklik: 1, rgba })).rgba.equals(rgba)).toBe(true);
  });
  it("eksik piksel verisi yakalanıyor (kesik dwebp çıktısı sessizce geçmez)", () => {
    const bozuk = pamYap({ genislik: 2, yukseklik: 1, rgba: Buffer.from([1, 2, 3, 255]) });
    expect(() => pamCoz(bozuk)).toThrow(/eksik/);
  });
  it("başlıksız girdi reddediliyor", () => {
    expect(() => pamCoz(Buffer.from("P7 ama ENDHDR yok"))).toThrow(/başlığı bulunamadı/);
  });
});

describe("piksel kimliği", () => {
  it("tek bir piksel değişince md5 değişiyor", () => {
    const a = pngCoz(pngYap(RGB_PIKSEL));
    const degisik = RGB_PIKSEL.map((s) => [...s]);
    degisik[0][0] = 11; // 10 → 11
    const b = pngCoz(pngYap(degisik));
    expect(pikselMd5(a)).not.toBe(pikselMd5(b));
  });

  it("aynı baytlar farklı boyutlandırılınca md5 değişiyor", () => {
    // Boyut hash'e girmezse 3×2 ile 2×3 aynı görünürdü — kaydırılmış bir çözüm
    // "birebir" damgası alırdı.
    const rgba = Buffer.alloc(24, 7);
    expect(pikselMd5({ genislik: 3, yukseklik: 2, rgba })).not.toBe(
      pikselMd5({ genislik: 2, yukseklik: 3, rgba }),
    );
  });
});

describe("aday taraması ve yazma kapıları", () => {
  const kur = () => {
    const kok = fs.mkdtempSync(path.join(os.tmpdir(), "kapak-test-"));
    const yaz = (slug, dosyalar) => {
      fs.mkdirSync(path.join(kok, slug), { recursive: true });
      for (const [ad, veri] of Object.entries(dosyalar)) fs.writeFileSync(path.join(kok, slug, ad), veri);
    };
    yaz("png-only", { "kapak.png": pngYap(RGB_PIKSEL) });
    yaz("ikisi-de", { "kapak.png": pngYap(RGB_PIKSEL), "kapak.webp": Buffer.from("varolan") });
    yaz("webp-only", { "kapak.webp": Buffer.from("varolan") });
    yaz("bos", {});
    return kok;
  };

  it("aday = png VAR, webp YOK", () => {
    expect(adaylar(kur())).toEqual(["png-only"]);
  });

  it("mevcut webp'nin ÜZERİNE YAZILMAZ", () => {
    // Oradaki dosya elle üretilmiş/onaylanmış olabilir; betiğin işi boşluk doldurmak.
    const kok = kur();
    const once = fs.readFileSync(path.join(kok, "ikisi-de", "kapak.webp"));
    const sonuc = donustur(["ikisi-de"], { yaz: true, kok });
    expect(sonuc[0].durum).toBe("ATLANDI");
    expect(fs.readFileSync(path.join(kok, "ikisi-de", "kapak.webp")).equals(once)).toBe(true);
  });

  it("kapak.png yoksa atlanıyor", () => {
    expect(donustur(["webp-only"], { yaz: true, kok: kur() })[0].durum).toBe("ATLANDI");
  });

  it("--yaz olmadan HİÇBİR dosya oluşmuyor", () => {
    // Varlık üreten bir betiğin kazara koşup repoyu değiştirmesi istenmez.
    const kok = kur();
    donustur(adaylar(kok), { yaz: false, kok });
    expect(fs.existsSync(path.join(kok, "png-only", "kapak.webp"))).toBe(false);
  });
});

// GRF kapaklarının deseni: düz zemin + birkaç blok + ince çizgiler (çizgi illüstrasyon).
// WebP lossless bu desende PNG'yi açık ara geçiyor — gerçek kapaklarda ölçülen de bu
// (1 Eyl: 7 kapak, 233.750 B → 95.850 B).
function cizimYap(W = 256, H = 256) {
  const satirlar = [];
  for (let y = 0; y < H; y++) {
    const satir = [];
    for (let x = 0; x < W; x++) {
      let [r, g, b] = [248, 250, 252];                                   // kağıt zemin
      if (y > 60 && y < 200 && x > 40 && x < 216) [r, g, b] = [255, 255, 255]; // kart
      if (y > 90 && y < 170 && x > 70 && x < 186) [r, g, b] = [37, 99, 235];   // marka mavisi
      if (y === 128 || x === 128) [r, g, b] = [30, 41, 59];               // ince ink çizgi
      satir.push(r, g, b);
    }
    satirlar.push(satir);
  }
  return satirlar;
}

describe("gerçek kodlama turu (cwebp gerekir — CI'da atlanır)", () => {
  const varMi = araclarVar();
  const tekKlasor = (png) => {
    const kok = fs.mkdtempSync(path.join(os.tmpdir(), "kapak-gercek-"));
    fs.mkdirSync(path.join(kok, "a"));
    fs.writeFileSync(path.join(kok, "a", "kapak.png"), png);
    return kok;
  };

  it.skipIf(!varMi)("yazılan webp kaynakla piksel-birebir ve daha küçük", () => {
    const png = pngYap(cizimYap(), { filtre: 4 });
    const kok = tekKlasor(png);

    const [sonuc] = donustur(["a"], { yaz: true, kok });
    expect(sonuc.durum, sonuc.not).toBe("YAZILDI");
    expect(sonuc.webpBoyut).toBeLessThan(sonuc.pngBoyut);
    // md5'i betiğin kendi raporundan değil, KAYNAKTAN yeniden hesaplayarak doğrula.
    expect(sonuc.md5).toBe(pikselMd5(pngCoz(png)));
    // Diskteki dosya, raporlanan adayın ta kendisi mi (③ kapısı gerçekten koştu mu)?
    expect(fs.statSync(path.join(kok, "a", "kapak.webp")).size).toBe(sonuc.webpBoyut);
  });

  it.skipIf(!varMi)("kazanç yoksa dosya YAZILMIYOR (② kapısı)", () => {
    // Gürültülü gradyan: PNG deflate'i bu desende webp lossless'ı yeniyor. Betiğin
    // "her PNG webp'de küçülür" varsayımı yok — küçülmüyorsa dosya bırakmıyor.
    // ⚠️ Bu senaryo uydurma değil: ilk fikstürüm tam olarak buydu ve kapı onu reddetti.
    const satirlar = [];
    for (let y = 0; y < 64; y++) {
      const satir = [];
      for (let x = 0; x < 64; x++) satir.push(x * 4, y * 4, (x ^ y) & 0xff);
      satirlar.push(satir);
    }
    const kok = tekKlasor(pngYap(satirlar, { filtre: 4 }));

    const [sonuc] = donustur(["a"], { yaz: true, kok });
    expect(sonuc.durum).toBe("RED");
    expect(sonuc.not).toMatch(/kazanç yok/);
    expect(fs.existsSync(path.join(kok, "a", "kapak.webp")), "reddedilen aday yine de yazılmış").toBe(false);
  });
});
