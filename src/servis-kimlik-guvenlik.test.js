// src/servis-kimlik-guvenlik.test.js — servis yetkisi kilidi (15 Eki 2026 güvenlik düzeltmesi).
//
// NEDEN VAR: yetki `user_metadata.servis_id`'den okunuyordu; Supabase'de kullanıcı user_metadata'yı
// kendisi yazabildiği için e-postasını doğrulayan herkes başka servis gibi davranabiliyordu.
// `panel-kurulum` da admin kontrolsüzdü. Bu dosya ikisinin geri gelmesini CI'da kırmızıya çevirir.
import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { servisIdOku } from "./servis-kimlik.js";

const { guncelle } = vi.hoisted(() => ({ guncelle: vi.fn(async () => ({ error: null })) }));

const tumJs = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? tumJs(p) : /\.(m?js|jsx)$/.test(e.name) && !/\.test\./.test(e.name) ? [p] : [];
});

describe("servis kimliği yalnız app_metadata'dan", () => {
  it("servisIdOku: app_metadata okur, user_metadata'yı yok sayar", () => {
    expect(servisIdOku({ app_metadata: { servis_id: "sv-1" } })).toBe("sv-1");
    expect(servisIdOku({ user_metadata: { servis_id: "sv-1" } })).toBe(null);
    expect(servisIdOku({ app_metadata: { servis_id: "" }, user_metadata: { servis_id: "x" } })).toBe(null);
    expect(servisIdOku(null)).toBe(null);
  });

  it("api/ ve src/ içinde user_metadata'dan servis_id/servis_ilce okuması yok", () => {
    const ihlal = [];
    for (const f of [...tumJs("api"), ...tumJs("src")]) {
      const k = fs.readFileSync(f, "utf8");
      if (/user_metadata\??\.(servis_id|servis_ilce)/.test(k)) ihlal.push(f);
    }
    expect(ihlal).toEqual([]);
  });

  it("servis onayı yetkiyi app_metadata'ya yazar", () => {
    const k = fs.readFileSync("api/admin/servis-basvurulari.js", "utf8");
    expect(k).toMatch(/app_metadata:\s*\{\s*\n\s*servis_id:\s*bav\.id/);
    expect(k).not.toMatch(/user_metadata:\s*\{[^}]*servis_id/);
  });

  it("panel 'kendi servisini seç' ekranı yok, panel-kurulum'u kullanıcı JWT'siyle çağırmıyor", () => {
    const k = fs.readFileSync("src/ServisPanel.jsx", "utf8");
    expect(k).not.toContain("function ServisKurulum");
    expect(k).not.toContain("/api/admin/panel-kurulum");
  });
});

describe("panel-kurulum yalnız admin", () => {
  vi.mock("../api/_supabase.js", () => ({
    default: {
      auth: {
        getUser: async () => ({ data: { user: { id: "u-1", app_metadata: {} } }, error: null }),
        admin: {
          getUserById: async () => ({ data: { user: { id: "11111111-2222-4333-8444-555555555555", app_metadata: { provider: "email" } } }, error: null }),
          updateUserById: (...a) => guncelle(...a),
        },
      },
    },
  }));
  const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
  const govde = { user_id: "11111111-2222-4333-8444-555555555555", servis_id: "sv-9", servis_ad: "X" };

  beforeEach(() => { guncelle.mockClear(); process.env.ADMIN_TOKEN = "admin-sir"; });

  it("kullanıcı JWT'siyle 401, hiçbir şey yazılmaz", async () => {
    const { default: h } = await import("../api/admin/panel-kurulum.js");
    const r = res();
    await h({ method: "PATCH", headers: { authorization: "Bearer kullanici-jwt" }, body: govde }, r);
    expect(r.kod).toBe(401);
    expect(guncelle).not.toHaveBeenCalled();
  });

  it("admin anahtarıyla app_metadata'ya yazar (user_metadata'ya değil)", async () => {
    const { default: h } = await import("../api/admin/panel-kurulum.js");
    const r = res();
    await h({ method: "PATCH", headers: { authorization: "Bearer admin-sir" }, body: govde }, r);
    expect(r.kod).toBe(200);
    expect(guncelle).toHaveBeenCalledWith(govde.user_id, { app_metadata: { provider: "email", servis_id: "sv-9", servis_ad: "X" } });
  });
});
