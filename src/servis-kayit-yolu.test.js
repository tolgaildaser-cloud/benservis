// src/servis-kayit-yolu.test.js — kayıt sayfasına açılan YOL ve kaynak etiketi (12 Eyl 2026).
//
// NEDEN VAR: `/servis-kayit` üç aydır çalışıyordu ama siteden erişilemiyordu — tek link
// 17 Haz pivotunda rotadan kaldırılan `LandingPage.jsx`'teydi. "Ürün var, yol yok" hatası
// sessizdir: build yeşil, test yeşil, sayfa ayakta, kimse bulamıyor. Bu dosya YOLU kilitler.
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { GELIS_DESENI } from "./gelis.js";

const oku = (yol) => readFileSync(new URL(`../${yol}`, import.meta.url), "utf8");

describe("kayıt sayfasına giden bağlar", () => {
  it("servis profilinde (uygulama içi) bağ var ve kaynağı etiketli", () => {
    const src = oku("src/ServisEkrani.jsx");
    expect(src).toContain('href="/servis-kayit?kaynak=servis-profil"');
    expect(src).toMatch(/Bu işletme sizin mi\?/);
  });

  it("servis listesinin sonunda ikincil bağ var", () => {
    const src = oku("src/ServisEkrani.jsx");
    expect(src).toContain('href="/servis-kayit?kaynak=servis-listesi"');
  });

  it("mağaza sayfasında da bağ var", () => {
    expect(oku("src/ServisMagaza.jsx")).toContain('href="/servis-kayit?kaynak=servis-magaza"');
  });

  it("ANA SAYFA üst barında kayıt düğmesi var (Tolga, 12 Eyl)", () => {
    const src = oku("src/AnaSayfaVitrin.jsx");
    expect(src).toContain('href="/servis-kayit?kaynak=anasayfa-ust"');
    // "Yakın Servisler" dolgulu CTA'nın SAĞINDA durmalı — sırayı kilitle.
    expect(src.indexOf("Yakın Servisler")).toBeLessThan(src.indexOf("kaynak=anasayfa-ust"));
  });

  it("mobilde gizlenen üst bar düğmesinin footer karşılığı var", () => {
    // ≤640px'te `.vitrin-ustmenu a { display:none }` üst bardaki bağları gizliyor;
    // trafiğin %92'si mobil olduğu için footer bağı bu boşluğu kapatır.
    expect(oku("src/App.jsx")).toContain('href="/servis-kayit?kaynak=anasayfa-footer"');
    expect(oku("src/App.jsx")).toContain(".vitrin-ustmenu a { display: none; }");
  });

  it("rota ve rewrite duruyor (yol açık kalsın)", () => {
    expect(oku("src/main.jsx")).toContain('path === "/servis-kayit"');
    expect(oku("vercel.json")).toContain('"/servis-kayit"');
  });

  it("her bağın kaynak değeri desenden geçer", () => {
    for (const k of ["servis-profil", "servis-listesi", "servis-magaza", "dogrudan"]) {
      expect(GELIS_DESENI.test(k), k).toBe(true);
    }
  });
});

describe("kaynak etiketi uçtan uca", () => {
  it("form kaynağı gönderiyor", () => {
    const src = oku("src/ServisKayit.jsx");
    expect(src).toContain("kaynak: KAYNAK");
    expect(src).toContain('from "./gelis.js"'); // desen tek kaynaktan
  });

  it("sunucu serbest metni reddedip dogrudan'a düşürüyor", () => {
    const src = oku("api/servis/basvuru.js");
    expect(src).toMatch(/\/\^\[a-z0-9-\]\{1,32\}\$\//); // desen
    expect(src).toContain('"dogrudan"'); // varsayılan
    expect(src).toMatch(/kaynak:\s+kaynakTemiz/); // insert'e giriyor
  });

  it("desen serbest metni ve fazla uzunu elemeli", () => {
    const gecerli = (v) => /^[a-z0-9-]{1,32}$/.test(v);
    expect(gecerli("servis-profil")).toBe(true);
    expect(gecerli("Serbest Metin")).toBe(false);
    expect(gecerli("ahmet@ornek.com")).toBe(false);
    expect(gecerli("a".repeat(33))).toBe(false);
  });
});
