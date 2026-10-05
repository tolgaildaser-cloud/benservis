// src/maliyet-durumu.test.js — belirsiz girişte "Tamir gerekmez" yazılmaz (Tolga, 5 Eki 2026).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { maliyetDurumu } from "./maliyet-durumu.js";

describe("maliyetDurumu", () => {
  it('belirsiz giriş ("bozuk"): maliyet boş, karar belirsiz → hüküm yok', () => {
    const sonuc = { kararOnerisi: "belirsiz", tahminiMaliyet: { min: null, max: null }, olasiArizalar: [{ ad: "Genel arıza", olasilik: 50 }] };
    expect(maliyetDurumu(sonuc)).toBe("yok");
  });

  it("maliyet alanı hiç gelmezse de hüküm yok", () => {
    expect(maliyetDurumu({ kararOnerisi: "tamir" })).toBe("yok");
  });

  it('gerçekten tamir gerektirmeyen giriş (kozmetik) → "gerek_yok"', () => {
    expect(maliyetDurumu({ kararOnerisi: "gerek_yok", tahminiMaliyet: { min: 0, max: 0, beklenen: 0 } })).toBe("gerek_yok");
    expect(maliyetDurumu({ kararOnerisi: "gerek_yok", tahminiMaliyet: { min: null, max: null } })).toBe("gerek_yok");
  });

  it("rakam varsa aralık gösterilir", () => {
    expect(maliyetDurumu({ kararOnerisi: "tamir", tahminiMaliyet: { min: 1200, max: 2400 } })).toBe("var");
  });
});

describe("App.jsx kaynak kapısı", () => {
  const app = fs.readFileSync(path.join(__dirname, "App.jsx"), "utf8");
  it('"Tamir gerekmez" maliyet boşluğuna bağlı değil (eski koşul geri gelmez)', () => {
    expect(app).not.toMatch(/gerek_yok"\s*\|\|\s*(m|sonuc\.tahminiMaliyet\??)\.min\s*==\s*null/);
  });
  it("ekran ve paylaşım özeti aynı fonksiyonu okur", () => {
    expect((app.match(/maliyetDurumu\(sonuc\)/g) || []).length).toBeGreaterThanOrEqual(2);
  });
});
