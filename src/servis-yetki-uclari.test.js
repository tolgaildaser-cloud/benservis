// src/servis-yetki-uclari.test.js — YK #176 (15 Eki 2026): servis yetkisi uç davranış kilidi.
//
// NEDEN VAR: kullanıcı kendi user_metadata'sını yazabilir. Bu dosya her servis ucunu GERÇEKTEN çağırır:
// JWT'si geçerli ama servis_id'si yalnız user_metadata'da olan (sahte) kullanıcı hiçbir uçta servis
// yetkisi almamalı ve veritabanına hiçbir şey yazılmamalı. panel-kurulum tokensiz/kullanıcı JWT'siyle 401.
import { describe, it, expect, vi, beforeEach } from "vitest";

const { kayit, sahteKullanici } = vi.hoisted(() => ({
  kayit: { tablolar: [], yazma: [] },
  // Saldırganın kendine yazabildiği alan: user_metadata.servis_id. app_metadata boş.
  sahteKullanici: { id: "u-sahte", user_metadata: { servis_id: "sv-kurban", servis_ilce: "Kadıköy" }, app_metadata: {} },
}));

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    kayit.tablolar.push(tablo);
    const z = new Proxy({}, {
      get(_, ad) {
        if (["insert", "update", "upsert", "delete"].includes(ad)) return (...a) => { kayit.yazma.push([tablo, ad, a]); return z; };
        if (ad === "single" || ad === "maybeSingle") return async () => ({ data: { id: "c1", servis_id: "sv-kurban" }, error: null });
        if (ad === "then") return (ok, no) => Promise.resolve({ data: [{ id: "c1", servis_id: "sv-kurban" }], error: null, count: 1 }).then(ok, no);
        return () => z;
      },
    });
    return z;
  };
  return {
    default: {
      from: zincir,
      auth: {
        getUser: async (tk) => (tk === "sahte-jwt" ? { data: { user: sahteKullanici }, error: null } : { data: { user: null }, error: { message: "x" } }),
        admin: { getUserById: async () => ({ data: { user: { id: "x", app_metadata: {} } }, error: null }), updateUserById: async (...a) => { kayit.yazma.push(["auth", "updateUserById", a]); return { error: null }; } },
      },
    },
  };
});
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {}, sendSMS: async () => {} }));

const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const istek = (method, extra = {}) => ({ method, headers: { authorization: "Bearer sahte-jwt" }, query: {}, body: {}, ...extra });

beforeEach(() => { kayit.tablolar.length = 0; kayit.yazma.length = 0; process.env.ADMIN_TOKEN = "admin-sir"; });

const UCLAR = [
  ["GET /api/is/liste", "../api/is/liste.js", istek("GET")],
  ["PATCH /api/is/[id]", "../api/is/[id].js", istek("PATCH", { query: { id: "is-1" }, body: { action: "kabul" } })],
  ["POST /api/servis/urunler", "../api/servis/urunler.js", istek("POST", { body: { baslik: "x", fiyat: 10, tip: "yedek_parca" } })],
  ["PATCH /api/servis/urunler/[id]", "../api/servis/urunler/[id].js", istek("PATCH", { query: { id: "ur-1" }, body: { durum: "pasif" } })],
  ["DELETE /api/servis/urunler/[id]", "../api/servis/urunler/[id].js", istek("DELETE", { query: { id: "ur-1" } })],
  ["POST /api/dpp/tamir", "../api/dpp/tamir.js", istek("POST", { body: { cihaz_id: "c1", tarih: "2026-10-18", yapilan_islem: "x" } })],
  ["PATCH /api/dpp/tamir/[id]", "../api/dpp/tamir/[id].js", istek("PATCH", { query: { id: "t-1" }, body: { yapilan_islem: "x" } })],
  ["PATCH /api/dpp/cihaz", "../api/dpp/cihaz.js", istek("PATCH", { query: { seri_no: "SN1" }, body: { mevcut_durum: "hurda" } })],
];

describe("sahte user_metadata.servis_id hiçbir uçta yetki vermez", () => {
  for (const [ad, yol, req] of UCLAR) {
    it(`${ad} → 403, yazma yok`, async () => {
      const { default: h } = await import(yol);
      const r = res();
      await h(req, r);
      expect(r.kod, JSON.stringify(r.govde)).toBe(403);
      expect(kayit.yazma).toEqual([]);
    });
  }

  it("GET /api/is/havuz → boş liste, kurbanın verisine sorgu yok", async () => {
    const { default: h } = await import("../api/is/havuz.js");
    const r = res();
    await h(istek("GET"), r);
    expect(r.kod).toBe(200);
    expect(r.govde.isler).toEqual([]);
    expect(kayit.tablolar).toEqual([]);
  });
});

describe("panel-kurulum yalnız ADMIN_TOKEN", () => {
  const govde = { user_id: "11111111-2222-4333-8444-555555555555", servis_id: "sv-kurban", servis_ad: "X" };
  for (const [ad, headers] of [["tokensiz", {}], ["kullanıcı JWT'siyle", { authorization: "Bearer sahte-jwt" }]]) {
    it(`${ad} → 401, yazma yok`, async () => {
      const { default: h } = await import("../api/admin/panel-kurulum.js");
      const r = res();
      await h({ method: "PATCH", headers, body: govde }, r);
      expect(r.kod).toBe(401);
      expect(kayit.yazma).toEqual([]);
    });
  }
});
