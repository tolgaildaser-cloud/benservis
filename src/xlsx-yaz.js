// src/xlsx-yaz.js — bağımlılıksız .xlsx üreticisi (YK #195 yönetim panosu).
//
// NEDEN KENDİ YAZICIMIZ: pano "her tablo tek tıkla Excel" istiyor. Hazır kütüphaneler yüzlerce KB;
// npm'deki xlsx sürümü de eski. Bize okuma, formül, grafik gerekmiyor — yalnız metin, sayı ve tarih
// hücresi olan sayfalar. .xlsx bir ZIP'tir; sıkıştırmasız (store) ZIP + birkaç XML yetiyor.
// Bu modül yalnız admin parçasından lazy yüklenir, kamu paketine girmez.
//
// Sayı hücresi sayı, tarih hücresi gerçek tarih olarak yazılır (Excel'de süzülür, toplanır);
// metin inlineStr'dir, Türkçe karakterler UTF-8 ile doğru gelir.

const metin = new TextEncoder();
const xmlKac = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  // XML 1.0'da geçersiz kontrol karakterleri dosyayı bozar.
  // eslint-disable-next-line no-control-regex
  .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");

let CRC_TABLO;
function crc32(b) {
  if (!CRC_TABLO) {
    CRC_TABLO = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_TABLO[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < b.length; i++) c = CRC_TABLO[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// Sıkıştırmasız ZIP. Dosya adları ASCII; UTF-8 bayrağı gerekmiyor.
export function zipYap(dosyalar) {
  const parcalar = [], merkez = [];
  let ofset = 0;
  for (const { ad, veri } of dosyalar) {
    const adB = metin.encode(ad), crc = crc32(veri), n = veri.length;
    const yerel = new DataView(new ArrayBuffer(30));
    yerel.setUint32(0, 0x04034b50, true); yerel.setUint16(4, 20, true);
    yerel.setUint32(14, crc, true); yerel.setUint32(18, n, true); yerel.setUint32(22, n, true);
    yerel.setUint16(26, adB.length, true);
    parcalar.push(new Uint8Array(yerel.buffer), adB, veri);
    const m = new DataView(new ArrayBuffer(46));
    m.setUint32(0, 0x02014b50, true); m.setUint16(4, 20, true); m.setUint16(6, 20, true);
    m.setUint32(16, crc, true); m.setUint32(20, n, true); m.setUint32(24, n, true);
    m.setUint16(28, adB.length, true); m.setUint32(42, ofset, true);
    merkez.push(new Uint8Array(m.buffer), adB);
    ofset += 30 + adB.length + n;
  }
  const merkezBoy = merkez.reduce((t, p) => t + p.length, 0);
  const son = new DataView(new ArrayBuffer(22));
  son.setUint32(0, 0x06054b50, true);
  son.setUint16(8, dosyalar.length, true); son.setUint16(10, dosyalar.length, true);
  son.setUint32(12, merkezBoy, true); son.setUint32(16, ofset, true);
  const hepsi = [...parcalar, ...merkez, new Uint8Array(son.buffer)];
  const cikti = new Uint8Array(hepsi.reduce((t, p) => t + p.length, 0));
  let i = 0;
  for (const p of hepsi) { cikti.set(p, i); i += p.length; }
  return cikti;
}

// 0 → A, 26 → AA
export function sutunAdi(n) {
  let s = "";
  for (let x = n + 1; x > 0; x = Math.floor((x - 1) / 26)) s = String.fromCharCode(65 + ((x - 1) % 26)) + s;
  return s;
}

// Excel seri tarihi: 1899-12-30'dan gün sayısı (yerel saat kayması olmasın diye UTC).
const seriTarih = (d) => d.getTime() / 864e5 + 25569;

function hucre(deger, ref) {
  if (deger === null || deger === undefined || deger === "") return "";
  if (typeof deger === "number" && Number.isFinite(deger)) return `<c r="${ref}"><v>${deger}</v></c>`;
  if (deger instanceof Date && !Number.isNaN(deger.getTime())) return `<c r="${ref}" s="1"><v>${seriTarih(deger)}</v></c>`;
  return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${xmlKac(deger)}</t></is></c>`;
}

const sayfaXml = ({ basliklar, satirlar }) => {
  const sat = [basliklar.map((b, c) => `<c r="${sutunAdi(c)}1" s="2" t="inlineStr"><is><t>${xmlKac(b)}</t></is></c>`).join("")];
  satirlar.forEach((r, i) => sat.push(r.map((v, c) => hucre(v, `${sutunAdi(c)}${i + 2}`)).join("")));
  const rows = sat.map((x, i) => `<row r="${i + 1}">${x}</row>`).join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rows}</sheetData></worksheet>`;
};

// Excel sayfa adı: en çok 31 karakter, []:*?/\ yasak, benzersiz olmalı.
export function sayfaAdlari(adlar) {
  const goruldu = new Set();
  return adlar.map((ad, i) => {
    let a = String(ad || `Sayfa ${i + 1}`).replace(/[[\]:*?/\\]/g, " ").trim().slice(0, 31) || `Sayfa ${i + 1}`;
    const kok = a.slice(0, 28);
    for (let k = 2; goruldu.has(a.toLocaleLowerCase("tr")); k++) a = `${kok} ${k}`;
    goruldu.add(a.toLocaleLowerCase("tr"));
    return a;
  });
}

/**
 * @param {{ad:string, basliklar:string[], satirlar:any[][]}[]} sayfalar
 * @returns {Uint8Array} .xlsx dosyasının baytları
 */
export function xlsxYap(sayfalar) {
  const adlar = sayfaAdlari(sayfalar.map((s) => s.ad));
  const bas = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const d = (ad, s) => ({ ad, veri: metin.encode(s) });
  return zipYap([
    d("[Content_Types].xml", `${bas}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${sayfalar.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`),
    d("_rels/.rels", `${bas}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`),
    d("xl/workbook.xml", `${bas}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${adlar.map((a, i) => `<sheet name="${xmlKac(a)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("")}</sheets></workbook>`),
    d("xl/_rels/workbook.xml.rels", `${bas}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sayfalar.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")}<Relationship Id="rId${sayfalar.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`),
    // s=0 düz · s=1 tarih (gg.aa.yyyy ss:dd) · s=2 kalın başlık
    d("xl/styles.xml", `${bas}<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="dd\\.mm\\.yyyy\\ hh:mm"/></numFmts><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`),
    ...sayfalar.map((s, i) => d(`xl/worksheets/sheet${i + 1}.xml`, sayfaXml(s))),
  ]);
}

// CSV: Excel Türkçe karakteri doğru açsın diye BOM'lu; Date → ISO gün + saat.
export function csvYap({ basliklar, satirlar }) {
  const kac = (v) => {
    const s = v instanceof Date ? v.toISOString().slice(0, 16).replace("T", " ") : v == null ? "" : String(v);
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return "﻿" + [basliklar, ...satirlar].map((r) => r.map(kac).join(",")).join("\r\n");
}

export function indir(veri, dosyaAdi, tur) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([veri], { type: tur }));
  a.download = dosyaAdi;
  a.click();
  URL.revokeObjectURL(a.href);
}
export const xlsxIndir = (sayfalar, ad) =>
  indir(xlsxYap(sayfalar), `${ad}.xlsx`, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
export const csvIndir = (tablo, ad) => indir(csvYap(tablo), `${ad}.csv`, "text/csv;charset=utf-8");
