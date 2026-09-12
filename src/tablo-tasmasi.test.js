// src/tablo-tasmasi.test.js — blog tablolarının dar ekranda sayfayı taşırmaması (13 Eyl 2026).
//
// NEDEN VAR: canlıda iframe ile tam sayım → 110 tablolu yazının 28'i 320px'te, 2'si 375px'te
// sayfayı yana taşırıyordu (1-97px). Hata sessizdi: build yeşil, test yeşil, masaüstünde
// kusursuz. Bu dosya düzeltmenin iki ayağını kilitler; biri silinirse taşma geri gelir.
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const kaynak = readFileSync(new URL("../scripts/build-blog.mjs", import.meta.url), "utf8");

describe("blog tablo taşması", () => {
  it("dar ekranda hücre dolgusu küçülüyor ve uzun kelime kırılabiliyor", () => {
    // Bu kural 28 taşan sayfaya canlıda enjekte edildi: 320 ve 375'te taşma 28/28 sıfır.
    expect(kaynak).toContain("@media(max-width:640px){th,td{padding:8px;overflow-wrap:anywhere}}");
    // break-all DEĞİL: kelime her yerden değil, yalnız sığmadığında kırılmalı.
    expect(kaynak).not.toMatch(/th,td\{[^}]*word-break:break-all/);
  });

  it("markdown tabloları kaydırılabilir kapsayıcıya alınıyor (güvenlik ağı)", () => {
    expect(kaynak).toContain(".tablo-kap{overflow-x:auto;max-width:100%;margin:18px 0}");
    expect(kaynak).toContain(`.replace(/<table>/g, '<div class="tablo-kap"><table>')`);
    expect(kaynak).toContain(`.replace(/<\\/table>/g, "</table></div>")`);
  });
});
