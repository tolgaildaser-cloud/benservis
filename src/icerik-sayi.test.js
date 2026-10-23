// src/icerik-sayi.test.js — ana sayfa içerik sayaçları 1.000 ve üstünde "1.000+" (Tolga 23 Eki).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { icerikSayi } from "./AnaSayfaVitrin.jsx";

describe("icerikSayi", () => {
  it("1.000 altı tam sayı, 1.000 ve üstü 1.000+", () => {
    expect(icerikSayi(703)).toBe("703");
    expect(icerikSayi(999)).toBe("999");
    expect(icerikSayi(1000)).toBe("1.000+");
    expect(icerikSayi(1261)).toBe("1.000+");
  });
  it("blog, rehber, tamir ve kılavuz bandı icerikSayi'den geçer; servis/il/ilçe/marka tam sayı kalır", () => {
    const s = fs.readFileSync("src/AnaSayfaVitrin.jsx", "utf8");
    for (const k of ["blog", "rehber", "tamir", "kilavuz"]) expect(s).toContain(`icerikSayi(IST.${k})`);
    for (const k of ["servis", "il", "ilce", "marka"]) expect(s).toContain(`trSayi(IST.${k})`);
  });
});
