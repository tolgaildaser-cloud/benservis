// src/guvenlik-sms-siparis.test.js — güvenlik incelemesi düzeltmeleri (3 Kas 2026).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { smsGonderilsinMi, yalnizPost } from "../api/_sms-sinir.js";

const sahte = (count, error = null) => ({ from: () => ({ select: () => { const z = { eq: () => z, gte: async () => ({ count, error }) }; return z; } }) });

describe("SMS sınırı", () => {
  it("son 10 dakikada mesaj yoksa SMS gider, varsa gitmez, hata varsa gitmez", async () => {
    expect(await smsGonderilsinMi(sahte(0), "t", "alici")).toBe(true);
    expect(await smsGonderilsinMi(sahte(1), "t", "alici")).toBe(false);
    expect(await smsGonderilsinMi(sahte(null, { message: "x" }), "t", "alici")).toBe(false);
  });
  it("yalnız POST sınırlanır", () => {
    const s = yalnizPost(() => "sinirli", () => "acik");
    expect(s({ method: "POST" })).toBe("sinirli");
    expect(s({ method: "GET" })).toBe("acik");
  });
});

describe("uç düzeltmeleri", () => {
  it("sipariş rate-limitli ve açık havale sınırlı", () => {
    const s = fs.readFileSync("api/siparis.js", "utf8");
    expect(s).toMatch(/export default withRateLimit\(handler, \{ prefix: "siparis"/);
    expect(s).toContain('.eq("odeme_durumu", "odeme_bekleniyor")');
  });
  it("token uçları SMS'i sınırla gönderir", () => {
    for (const f of ["api/talep/alici/[token].js", "api/talep/satici/[token].js"]) {
      const s = fs.readFileSync(f, "utf8");
      expect(s, f).toContain("if (smsGitsin) try {");
      expect(s, f).toMatch(/export default yalnizPost\(withRateLimit\(handler/);
    }
  });
  it("Twilio token yoksa reddeder, URL sabit", () => {
    const s = fs.readFileSync("api/twilio/callback.js", "utf8");
    expect(s).toContain("if (!authToken) {");
    expect(s).toContain('const url = "https://www.benservis.com/api/twilio/callback";');
    expect(s).not.toMatch(/req\.headers\["host"\]/);
  });
});
