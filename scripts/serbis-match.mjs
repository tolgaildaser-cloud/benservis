// scripts/serbis-match.mjs
// SERBİS (servis.gov.tr) resmî YETKİLİ servis CSV'lerini telefonla src/services-data.json ile
// eşleştirir → eşleşen Google servisine `serbis:true` + `serbis_markalar:[]` (FİRMA→marka) yazar.
// YEREL araç (SERBİS verisi ~/Desktop'ta, repoda değil). Veri güncellenince tekrar çalıştır.
//
// Kullanım:  node scripts/serbis-match.mjs [SERBİS_KLASÖRÜ]
//   varsayılan klasör: ~/Desktop/benservis-icerik/servis-gov-tr-istanbul
//
// KVKK notu: SERBİS verisini YAYINLAMAZ — yalnız zaten public Google girdisine "doğrulanmış"
// bayrağı türetir. E-posta/isim/adres app'e girmez; yalnız telefon (eşleştirme) + marka kullanılır.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { MARKALAR } from "../src/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "src/services-data.json");
const SERBIS_DIR = process.argv[2] || path.join(os.homedir(), "Desktop/benservis-icerik/servis-gov-tr-istanbul");

// Telefon → son 10 hane (+90/0 sıyır). 0850 çağrı-merkezi = geo-eşleşmez → boş dön (elenir).
const telNorm = (t) => {
  let d = String(t || "").replace(/\D/g, "").replace(/^90/, "").replace(/^0/, "");
  if (d.length < 10) return "";
  d = d.slice(-10);
  return d.startsWith("850") ? "" : d; // 0850 çağrı-merkezi ele
};

// Türkçe-duyarsız normalize (marka eşleştirme + kelime sınırı için)
const norm = (s) => String(s || "").toLocaleLowerCase("tr")
  .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o")
  .replace(/[^a-z0-9]+/g, " ").trim();

// Marka evreni — cihaz kategorisi olan girdileri ELE (MARKALAR'a karışmış olabilir)
const CIHAZ_KELIME = new Set(["buzdolabi", "camasir makinesi", "bulasik makinesi", "firin", "ocak", "aspirator", "davlumbaz", "klima", "kombi", "televizyon", "mikrodalga", "air fryer", "supurge", "elektrik supurgesi", "su sebili", "aritma", "bilgisayar", "yazici", "diger"]);
const markaListe = [...new Set(MARKALAR.map(norm))]
  .filter((m) => m.length >= 2 && !CIHAZ_KELIME.has(m))
  .map((m) => ({ n: m, re: new RegExp(`(^|[^a-z0-9])${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`) }));
const orijinal = new Map(MARKALAR.map((m) => [norm(m), m])); // normalize → orijinal yazım

// FİRMA metninden bilinen markaları çıkar (kelime-sınırlı, yüksek isabet)
function markalarBul(firma) {
  const f = " " + norm(firma) + " ";
  const bulunan = new Set();
  for (const { n, re } of markaListe) if (re.test(f)) bulunan.add(orijinal.get(n) || n);
  return [...bulunan];
}

// Basit ama tırnak-duyarlı CSV satır parse (virgüllü adresler tırnaklı)
function parseLine(line) {
  const out = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) { if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
    else if (ch === '"') q = true;
    else if (ch === ",") { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}

// --- SERBİS CSV'lerini oku → tel10 → Set(marka) ---
if (!fs.existsSync(SERBIS_DIR)) { console.error("SERBİS klasörü yok:", SERBIS_DIR); process.exit(1); }
const telMarka = new Map(); // tel10 -> Set(marka)
let satir = 0, telli = 0;
for (const f of fs.readdirSync(SERBIS_DIR).filter((x) => x.endsWith(".csv") && x !== "ISTANBUL_TUM_ILCELER.csv")) {
  const lines = fs.readFileSync(path.join(SERBIS_DIR, f), "utf8").split(/\r?\n/).slice(1);
  for (const ln of lines) {
    if (!ln.trim()) continue;
    satir++;
    const c = parseLine(ln);
    const tel = telNorm(c[4]);       // TELEFON sütunu
    if (!tel) continue;
    telli++;
    const set = telMarka.get(tel) || new Set();
    for (const m of markalarBul(c[1])) set.add(m); // FİRMA sütunu
    telMarka.set(tel, set);
  }
}
console.log(`[serbis] ${satir} satır işlendi · ${telli} telefonlu · ${telMarka.size} benzersiz telefon (0850 hariç)`);

// --- services-data.json'u zenginleştir ---
const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
let esles = 0, markali = 0;
for (const s of data) {
  delete s.serbis; delete s.serbis_markalar;      // idempotent: önce temizle
  const t = telNorm(s.telefon);
  if (t && telMarka.has(t)) {
    s.serbis = true;
    const mk = [...telMarka.get(t)];
    if (mk.length) { s.serbis_markalar = mk; markali++; }
    esles++;
  }
}
fs.writeFileSync(JSON_PATH, JSON.stringify(data));
console.log(`[serbis] ${esles} Google servisi işaretlendi (serbis:true) · ${markali}'inde marka bilgisi · dosya yazıldı`);
