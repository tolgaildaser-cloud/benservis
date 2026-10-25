// src/hata-kodlari-cihaz.test.js — /tamir/ ① katmanında her yazı TEK cihazın altında durur.
//
// NEDEN (14 Eyl 2026, PAZ bulgusu, canlıda ölçüldü): 21 Ağu genişletmesinde 22 çamaşır makinesi
// kaydı "Kurutma Makinesi" dizisine girmişti. build-blog'daki TAMIR_GERI haritası yazıyı son
// yazılan cihaza bağladığı için çamaşır yazılarının alt bağı /tamir/kurutma-makinesi/'ne gidiyor,
// kurutma sayfası 22 çamaşır girişi listeliyor, 4 çamaşır yazısı çamaşır sayfasında hiç görünmüyordu.
import fs from "node:fs";
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

// YAZISIZ KAYIT KİLİDİ (25 Eki 2026, YK #182 · Tolga: "Yazısız 39 tamir kaydı için PAZ yazı ve
// GRF görsel açılsın"). /tamir/ kartı `yazi:` yoksa okuru hiçbir sayfaya götürmüyordu; 39 kayıt
// böyleydi. 38'i bağlandı. İstisna yalnız kaynak belgesi olmayan kayıt: belge bulunmadan yazı
// açılmaz (#88). Yeni kayıt yazısız eklenirse ya da istisnaya yazı bağlanırsa bu test kırılır.
const YAZISIZ_ISTISNA = new Set([
  "Mikrodalga / Air Fryer › Hiç çalışmıyor / düğme-ekran tepki vermiyor",
]);

describe("hata kodu katmanı — her kayıt bir yazıya bağlı", () => {
  const kayitlar = Object.entries(HATA_KODU_KATMANI).flatMap(([cihaz, liste]) =>
    liste.map((g) => ({ ad: `${cihaz} › ${g.giris}`, yazi: g.yazi })));

  it("yazısız kayıt yalnız istisna listesinde", () => {
    const yazisiz = kayitlar.filter((k) => !k.yazi).map((k) => k.ad);
    expect(yazisiz.filter((ad) => !YAZISIZ_ISTISNA.has(ad))).toEqual([]);
    expect([...YAZISIZ_ISTISNA].filter((ad) => !yazisiz.includes(ad))).toEqual([]);
  });

  it("bağlı her yazı content/blog'da var", () => {
    const eksik = [...new Set(kayitlar.map((k) => k.yazi).filter(Boolean))]
      .filter((y) => !fs.existsSync(`content/blog/${y}.md`));
    expect(eksik).toEqual([]);
  });
});
