// src/ilce-il-tutarlilik.test.js — VERİ ve İKİ DİLDEKİ KURAL ayrışmasın diye (12 Eyl 2026).
//
// Kural iki yerde yaşıyor: `src/ilce-il.js` (JS: API + onarım betiği) ve
// `scripts/collect-cities.py` (Python: toplama). Ayrı dillerde oldukları için biri
// düzeltilip diğeri unutulabilir — tam olarak bu sınıftan bir hata 36 Bursa kaydını
// Mersin'e taşımıştı. Bu dosya ikisini de VERİ üzerinden ölçer:
//   ① services-data.json'daki her çözülebilir adres, alanlarla birebir tutmalı
//   ② kapsam listesi (vitrin sayacı) toplayıcı betikle aynı illeri saymalı
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { adresIlIlce } from "./ilce-il.js";
import { KAPSAM_ILLER } from "./kapsam-iller.js";

const oku = (yol) => readFileSync(new URL(`../${yol}`, import.meta.url), "utf8");
const SERVISLER = JSON.parse(oku("src/services-data.json"));

describe("veri ↔ adres tutarlılığı", () => {
  it("adresi çözülen HER kaydın il+ilçesi adresle birebir", () => {
    const sapan = [];
    let cozulen = 0;
    for (const s of SERVISLER) {
      const r = adresIlIlce(s.adres);
      if (!r) continue;
      cozulen++;
      if (r.slug !== s.sehir || r.ilce !== s.ilce) {
        if (sapan.length < 5) sapan.push(`${s.sehir}/${s.ilce} ≠ ${r.slug}/${r.ilce} — ${s.adres}`);
      }
    }
    expect(cozulen).toBeGreaterThan(10000); // veri boşalırsa test sessizce "geçmesin"
    expect(sapan, `DÜZELTME: node scripts/ilce-il-duzelt.mjs --yaz\n${sapan.join("\n")}`).toEqual([]);
  });

  it("ilçe adı, kayda yazılan ilin GERÇEK ilçesidir", () => {
    const trIller = oku("src/tr-iller.js");
    const govde = /TR_IL_ILCE = \{([\s\S]*)\n\};/.exec(trIller)[1];
    const tablo = Object.fromEntries(
      [...govde.matchAll(/"([^"]+)":\s*\[([\s\S]*?)\]/g)].map(([, il, ic]) => [il, [...ic.matchAll(/"([^"]+)"/g)].map((m) => m[1])])
    );
    const slugla = (il) => il.replace(/[ıİ]/g, "i").replace(/[şŞ]/g, "s").replace(/[ğĞ]/g, "g")
      .replace(/[üÜ]/g, "u").replace(/[öÖ]/g, "o").replace(/[çÇ]/g, "c").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const ilceler = new Map(Object.entries(tablo).map(([il, ds]) => [slugla(il), new Set(ds)]));
    const hatali = SERVISLER
      .filter((s) => s.ilce && ilceler.has(s.sehir) && !ilceler.get(s.sehir).has(s.ilce))
      .slice(0, 5)
      .map((s) => `${s.sehir}/${s.ilce} — ${s.adres}`);
    expect(hatali).toEqual([]);
  });
});

describe("kapsam listesi ↔ toplayıcı betik", () => {
  it("src/kapsam-iller.js ile collect-cities.py aynı illeri sayar", () => {
    const py = oku("scripts/collect-cities.py");
    const blok = /CITY_DISPLAY = \{([\s\S]*?)\}/.exec(py);
    expect(blok, "collect-cities.py içinde CITY_DISPLAY bulunamadı — kapsam kaynağı taşınmış olabilir").toBeTruthy();
    const pyIller = [...blok[1].matchAll(/"([a-z]+)":\s*"([^"]+)"/g)].map((m) => m[1]).sort();
    expect(pyIller, "Yeni il taranınca kapsam-iller.js DE güncellenmeli").toEqual(Object.keys(KAPSAM_ILLER).sort());
  });

  it("kapsam dışı iller vitrin sayacına girmez ama veride kalır", () => {
    const kapsamDisi = SERVISLER.filter((s) => !Object.hasOwn(KAPSAM_ILLER, s.sehir));
    // Dağınık kayıtlar SİLİNMEZ (gerçek servisler); yalnız kapsam iddiası üretmezler.
    expect(kapsamDisi.length).toBeLessThan(SERVISLER.length * 0.01); // %1'i aşarsa kapsam tanımı yeniden ele alınır
  });
});
