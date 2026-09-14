// src/hata-kodlari-cihaz.test.js — /tamir/ ① katmanında her yazı TEK cihazın altında durur.
//
// NEDEN (14 Eyl 2026, PAZ bulgusu, canlıda ölçüldü): 21 Ağu genişletmesinde 22 çamaşır makinesi
// kaydı "Kurutma Makinesi" dizisine girmişti. build-blog'daki TAMIR_GERI haritası yazıyı son
// yazılan cihaza bağladığı için çamaşır yazılarının alt bağı /tamir/kurutma-makinesi/'ne gidiyor,
// kurutma sayfası 22 çamaşır girişi listeliyor, 4 çamaşır yazısı çamaşır sayfasında hiç görünmüyordu.
import { describe, it, expect } from "vitest";
import { HATA_KODU_KATMANI } from "./hata-kodlari.js";
import { cihazSlug } from "./constants.js";

describe("hata kodu katmanı — yazı ↔ cihaz tekilliği", () => {
  it("bir blog yazısı yalnız bir cihaz tablosunda geçer", () => {
    const yer = new Map();
    for (const [cihaz, liste] of Object.entries(HATA_KODU_KATMANI)) {
      for (const g of liste) {
        if (!g.yazi) continue;
        if (!yer.has(g.yazi)) yer.set(g.yazi, new Set());
        yer.get(g.yazi).add(cihaz);
      }
    }
    const coklu = [...yer].filter(([, s]) => s.size > 1).map(([y, s]) => `${y} → ${[...s].join(" | ")}`);
    expect(coklu).toEqual([]);
  });

  it("slug'ı başka bir cihazın slug'ıyla başlayan yazı o cihazın altında durmaz", () => {
    const sluglar = Object.keys(HATA_KODU_KATMANI).map((ad) => [ad, cihazSlug(ad)]);
    const yanlis = [];
    for (const [cihaz, liste] of Object.entries(HATA_KODU_KATMANI)) {
      for (const g of liste) {
        if (!g.yazi) continue;
        const sahip = sluglar.find(([, s]) => g.yazi.startsWith(`${s}-`));
        if (sahip && sahip[0] !== cihaz) yanlis.push(`${g.yazi} "${cihaz}" altında, "${sahip[0]}" olmalı`);
      }
    }
    expect(yanlis).toEqual([]);
  });
});
