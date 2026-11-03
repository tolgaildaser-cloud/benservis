// src/origin-kapi.test.js — kimliksiz yazma uçlarında Origin kapısı (3 Kas 2026).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { originIzinli, originKapisi } from "../api/_origin.js";

const istek = (h, method = "POST") => ({ method, headers: h });
const cevap = () => { const r = { kod: 0, status(k) { r.kod = k; return r; }, json() { return r; }, end() { return r; } }; return r; };

describe("Origin kapısı", () => {
  it("başlıksız istek reddedilir", () => expect(originIzinli(istek({}))).toBe(false));
  it("bizim alan adları geçer", () => {
    for (const o of ["https://www.benservis.com", "https://benservis.com", "https://project-83ils-git-fe-x-benservis.vercel.app", "http://localhost:5173"])
      expect(originIzinli(istek({ origin: o }))).toBe(true);
  });
  it("başka vercel.app ve benzer alanlar reddedilir", () => {
    for (const o of ["https://kotu.vercel.app", "https://benservis.com.kotu.net", "https://xbenservis.com", "null"])
      expect(originIzinli(istek({ origin: o }))).toBe(false);
  });
  it("Origin yoksa Referer'a bakılır", () => expect(originIzinli(istek({ referer: "https://www.benservis.com/blog/x/" }))).toBe(true));
  it("sarmalayıcı 403 ya da sessiz 204 döner, izinliyi geçirir", () => {
    const h = (req, res) => res.status(200).end();
    expect(originKapisi(h)(istek({}), cevap()).kod).toBe(403);
    expect(originKapisi(h, { sessiz: true })(istek({}), cevap()).kod).toBe(204);
    expect(originKapisi(h)(istek({ origin: "https://www.benservis.com" }), cevap()).kod).toBe(200);
  });
  it("kimliksiz yazma uçlarının hepsi kapıdan geçer", () => {
    for (const f of ["diagnose", "teshis/log", "sayim/ziyaret", "garanti/hatirlatici", "servis/basvuru", "talep/yeni", "pazar/talep", "is/yeni", "is/puan", "ilan/yeni"])
      expect(fs.readFileSync(`api/${f}.js`, "utf8"), f).toMatch(/_origin\.js/);
  });
});
