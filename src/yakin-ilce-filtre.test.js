// src/yakin-ilce-filtre.test.js — "aynı ilçe adı farklı illerde olabilir" ürün kilidi (12 Eyl 2026).
//
// NEDEN VAR: `/api/servis/yakin` ilçe modunda YALNIZ ilçe adına bakıyordu (`s.ilce === ilce`).
// Veride ölçüldü: "Yenişehir" Bursa'da da Mersin'de de var → Bursa'nın Yenişehir'ini seçen
// kullanıcıya Mersin'in servisleri de geliyordu. Telefonu çevirene kadar anlaşılmıyordu.
import { describe, it, expect } from "vitest";
import handler from "../api/servis/yakin.js";

const cagir = (query) =>
  new Promise((coz) => {
    const res = { setHeader() {}, status() { return this; }, json(d) { coz(d); } };
    handler({ query }, res);
  });

const iller = (liste) => [...new Set(liste.map((s) => s.sehir))].sort();

describe("ilçe modu — il ile birlikte eşleşir", () => {
  it("aynı adlı ilçede YALNIZ istenen ilin servisleri döner", async () => {
    const bursa = await cagir({ ilce: "Yenişehir", il: "Bursa" });
    expect(iller(bursa.servisler)).toEqual(["bursa"]);
    expect(bursa.servisler.length).toBeGreaterThan(0);

    const mersin = await cagir({ ilce: "Yenişehir", il: "Mersin" });
    expect(iller(mersin.servisler)).toEqual(["mersin"]);
    expect(mersin.servisler.length).toBeGreaterThan(0);
  });

  it("Ereğli (Konya · Zonguldak) karışmaz", async () => {
    const konya = await cagir({ ilce: "Ereğli", il: "Konya" });
    expect(iller(konya.servisler)).toEqual(["konya"]);
  });

  it("il verilmezse eski davranış korunur (geriye uyum) — ama liste karışık olabilir", async () => {
    const karisik = await cagir({ ilce: "Yenişehir" });
    expect(karisik.servisler.length).toBeGreaterThan(0);
    // Bu kasıtlı: eski çağıranları kırmıyoruz. Doğru sonuç için il gönderilir (ServisEkrani gönderiyor).
    expect(iller(karisik.servisler).length).toBeGreaterThanOrEqual(1);
  });

  it("il verildiğinde ilçe adı o ile ait değilse boş döner (uydurma sonuç yok)", async () => {
    const yok = await cagir({ ilce: "Muratpaşa", il: "Bursa" }); // Muratpaşa Antalya'nın
    expect(yok.servisler).toEqual([]);
  });
});
