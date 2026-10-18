// src/dpp-tamir-yetki.test.js — POST /api/dpp/tamir kimlik kilidi (18 Eki 2026, IT incelemesi PR #333 PR-dışı bulgu).
// Eskiden uçta hiç kimlik kontrolü yoktu: oturumsuz biri var olan her cihaza tamir kaydı ekleyebiliyordu.
// Sahte user_metadata.servis_id → 403 senaryosu src/servis-yetki-uclari.test.js'te; burada tokensiz,
// geçersiz token, servis kimliksiz üye ve gerçek servis hesabı davranışı.
import { describe, it, expect, vi, beforeEach } from "vitest";

const { yazma, kullanicilar } = vi.hoisted(() => ({
  yazma: [],
  kullanicilar: {
    "servis-jwt": { id: "u-s", app_metadata: { servis_id: "sv-1" } },
    "uye-jwt": { id: "u-b", app_metadata: {}, user_metadata: { servis_id: "sv-1" } },
  },
}));

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    let son = null;
    const z = {
      select: () => z, eq: () => z,
      insert: (v) => { yazma.push([tablo, v]); son = v; return z; },
      single: async () => ({ data: son ? { id: "t-1", ...son } : { id: "c1" }, error: null }),
    };
    return z;
  };
  return {
    default: {
      from: zincir,
      auth: {
        getUser: async (tk) => (kullanicilar[tk]
          ? { data: { user: kullanicilar[tk] }, error: null }
          : { data: { user: null }, error: { message: "geçersiz" } }),
      },
    },
  };
});

const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const govde = { cihaz_id: "c1", tarih: "2026-10-18", yapilan_islem: "Pompa değişti", servis_id: "sv-baska" };
const cagir = async (headers) => {
  const { default: h } = await import("../api/dpp/tamir.js");
  const r = res();
  await h({ method: "POST", headers, body: { ...govde } }, r);
  return r;
};

beforeEach(() => { yazma.length = 0; });

describe("POST /api/dpp/tamir yalnız servis hesabı", () => {
  it("tokensiz → 401, yazma yok", async () => {
    const r = await cagir({});
    expect(r.kod).toBe(401);
    expect(yazma).toEqual([]);
  });
  it("geçersiz token → 401, yazma yok", async () => {
    const r = await cagir({ authorization: "Bearer uydurma" });
    expect(r.kod).toBe(401);
    expect(yazma).toEqual([]);
  });
  it("servis kimliği olmayan (bireysel) hesap → 403, yazma yok", async () => {
    const r = await cagir({ authorization: "Bearer uye-jwt" });
    expect(r.kod).toBe(403);
    expect(yazma).toEqual([]);
  });
  it("servis hesabı → 201; servis_id istekten değil oturumdan yazılır", async () => {
    const r = await cagir({ authorization: "Bearer servis-jwt" });
    expect(r.kod).toBe(201);
    expect(yazma).toHaveLength(1);
    expect(yazma[0][0]).toBe("tamir_kayitlari");
    expect(yazma[0][1].servis_id).toBe("sv-1");
  });
});
