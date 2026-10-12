// Eski yarım daire logo (◑) yayındaki sayfalardan kalktı; logo koyu zeminde durur.
// Tolga (12 Eki): "şu eski yarım daire logodan kurtul artık" + "zemin beyaz olmamalı,
// beyaz olursa bil gör çağır gözükmez".
import { describe, it, expect } from "vitest";
import fs from "node:fs";

const YAYINDA = [
  "src/UrunDetay.jsx", "src/DPPPublicPage.jsx", "src/MusteriTakip.jsx", "src/ServisAdmin.jsx",
  "api/ilan/og.js", "api/dpp/og.js", "api/odeme/form.js",
];

describe("logo ve zemin", () => {
  it("yayındaki sayfalarda eski ◑ işareti yok", () => {
    for (const d of YAYINDA) expect(fs.readFileSync(d, "utf8"), d).not.toContain("◑");
  });

  it("ürün sayfası başlığı lacivert zeminde, açık renkli logo", () => {
    const k = fs.readFileSync("src/UrunDetay.jsx", "utf8");
    expect(k).toContain("background: KOYU_ZEMIN");
    expect(k).toContain("<BenservisLogoKoyu");
  });

  it("sunucu sayfalarındaki logo koyu blokta, dosya mevcut", () => {
    expect(fs.existsSync("public/logo-koyu.svg")).toBe(true);
    for (const d of ["api/ilan/og.js", "api/dpp/og.js", "api/odeme/form.js"]) {
      expect(fs.readFileSync(d, "utf8"), d).toMatch(/background:#1E293B[^"]*"><img src="[^"]*logo-koyu\.svg"/);
    }
  });
});
