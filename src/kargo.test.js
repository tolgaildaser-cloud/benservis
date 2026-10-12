// src/kargo.test.js — kargo 189 TL + 3.000 TL üzeri kargo indirimi (Tolga, 11 Eki 2026).
//
// NEDEN VAR: kargo kuralı sepet ekranında, /api/siparis'te ve PayTR ödeme sayfasında aynı
// olmalı. Kırılırsa: ① müşteri sepette bir tutar görür, karttan başka tutar çekilir, ② eşik
// "3.000 dahil" sayılır, ③ PayTR'ye negatif / 0 TL kargo satırı gider (sepet toplamı tutmaz).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { kargoHesapla, KARGO_TL, UCRETSIZ_KARGO_ESIK_TL } from "./kargo.js";
import { sepetBase64 } from "../api/_paytr.js";

describe("kargoHesapla (Tolga: 189 TL, 3.000 TL üzeri indirim satırıyla sıfır)", () => {
  it("sabitler", () => {
    expect(KARGO_TL).toBe(189);
    expect(UCRETSIZ_KARGO_ESIK_TL).toBe(3000);
  });

  it("sınır: 2.999 → 189 · 3.000 → 189 · 3.001 → 0 · 5.229 → 0", () => {
    expect(kargoHesapla(2999).net_kargo_tl).toBe(189);
    expect(kargoHesapla(3000).net_kargo_tl).toBe(189);
    expect(kargoHesapla(3001).net_kargo_tl).toBe(0);
    expect(kargoHesapla(5229).net_kargo_tl).toBe(0);
  });

  it("eşik aşılınca kargo satırı kaybolmaz: +189 / −189", () => {
    expect(kargoHesapla(3001)).toMatchObject({ kargo_tl: 189, kargo_indirim_tl: 189, net_kargo_tl: 0, esige_kalan_tl: 0 });
    expect(kargoHesapla(2999)).toMatchObject({ kargo_tl: 189, kargo_indirim_tl: 0, esige_kalan_tl: 2 });
    expect(kargoHesapla(3000).esige_kalan_tl).toBe(1);
  });

  it("pazar ürünü yoksa kargo da indirim de yok", () => {
    expect(kargoHesapla(0, false)).toMatchObject({ kargo_tl: 0, kargo_indirim_tl: 0, net_kargo_tl: 0 });
  });

  it("PayTR sepeti: indirimde kargo satırı gitmez, satırlar ödenen tutara eşit", () => {
    const kalemler = [{ baslik: "Sepet", fiyat: 5229 }];
    const kh = kargoHesapla(5229);
    const sepet = JSON.parse(Buffer.from(sepetBase64(kalemler, kh.kargo_tl - kh.kargo_indirim_tl), "base64").toString());
    expect(sepet.length).toBe(1);
    const toplam = sepet.reduce((s, r) => s + Number(r[1]) * r[2], 0);
    expect(toplam).toBe(5229 + kh.net_kargo_tl);
    const az = kargoHesapla(199);
    const sepet2 = JSON.parse(Buffer.from(sepetBase64([{ baslik: "Conta", fiyat: 199 }], az.kargo_tl - az.kargo_indirim_tl), "base64").toString());
    expect(sepet2.map((r) => r[0])).toEqual(["Conta", "Kargo"]);
  });

  it("sepet ve sipariş ucu aynı fonksiyonu kullanır; vitrin metni eşiği yazar", () => {
    expect(fs.readFileSync("src/Sepet.jsx", "utf8")).toContain("kargoHesapla(");
    expect(fs.readFileSync("api/siparis.js", "utf8")).toContain("kargoHesapla(");
    expect(fs.readFileSync("api/odeme/paytr.js", "utf8")).toContain("kargo_indirim_tl");
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain("TL üzeri ücretsiz");
  });
});
