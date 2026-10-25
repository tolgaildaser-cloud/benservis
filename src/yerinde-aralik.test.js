// src/yerinde-aralik.test.js — YK #183 çalışma düzeni (25 Eki): bir aralığa yakın adreslerden en fazla
// SLOT_EN_FAZLA iş. DB'de "aralık başına tek iş" index'i kalktığı için kural API'de uygulanır; istemci eski
// listeyle karar verse de PATCH uzak ya da dolu aralığa yazmaz. SQL dosyası yeni CHECK'leri taşır.
import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "node:fs";

const { d } = vi.hoisted(() => ({ d: { is: null, ayniAralik: [], yazma: [], sorgu: [] } }));

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    const f = {};
    let guncel = null;
    const z = {
      select: () => z, order: () => z, limit: () => z,
      eq: (k, v) => { f[k] = v; return z; },
      neq: (k, v) => { f["!" + k] = v; return z; },
      update: (v) => { guncel = v; d.yazma.push([tablo, "update", v]); return z; },
      insert: async (v) => { d.yazma.push([tablo, "insert", v]); return { error: null }; },
      maybeSingle: async () => {
        if (tablo === "yerinde_isler") return { data: d.is && guncel ? { ...d.is, ...guncel } : d.is, error: null };
        return { data: null, error: null };
      },
      then: (ok, no) => {
        let data = [];
        if (tablo === "yerinde_teknisyenler") data = [{ kod: "T1" }, { kod: "T2" }];
        if (tablo === "yerinde_isler" && "randevu_slot" in f) { d.sorgu.push({ ...f }); data = d.ayniAralik; }
        return Promise.resolve({ data, error: null }).then(ok, no);
      },
    };
    return z;
  };
  return {
    default: {
      from: zincir,
      auth: { getUser: async () => ({ data: { user: { id: "u-koord", app_metadata: { rol: "yerinde_koordinator" } } }, error: null }) },
    },
  };
});
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {} }));

const ID = "11111111-1111-4111-8111-111111111111";
const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const randevuVer = async (ilce) => {
  d.is = { id: ID, no: "KWS-9", durum: "yeni", garanti: "?", il: "İstanbul", ilce, teknisyen_kod: "T1", randevu_gun: null, randevu_slot: null, aramalar: 0, updated_at: "u1" };
  const { default: h } = await import("../api/yerinde/is/[id].js");
  const r = res();
  await h({ method: "PATCH", headers: { authorization: "Bearer koord" }, query: { id: ID }, body: { gecis: "randevu", alanlar: { randevuGun: "2026-10-26", randevuSlot: "9" } } }, r);
  return r;
};

beforeEach(() => { d.ayniAralik = []; d.yazma.length = 0; d.sorgu.length = 0; });

describe("PATCH randevu: aralık kuralı sunucuda", () => {
  it("aralıkta uzak bir iş varsa 409, yazma yok; sorgu kendi işini hariç tutar, iptali saymaz", async () => {
    d.ayniAralik = [{ id: "x", no: "KWS-1", ilce: "Kadıköy" }];
    const r = await randevuVer("Pendik");
    expect(r.kod).toBe(409);
    expect(r.govde.error).toMatch(/Kadıköy'de \(KWS-1\); Pendik/);
    expect(d.yazma).toEqual([]);
    expect(d.sorgu[0]).toMatchObject({ teknisyen_kod: "T1", randevu_gun: "2026-10-26", randevu_slot: 9, "!durum": "iptal", "!id": ID });
  });
  it("yakın adres aynı aralığa yazılır", async () => {
    d.ayniAralik = [{ id: "x", no: "KWS-1", ilce: "Kadıköy" }];
    const r = await randevuVer("Üsküdar");
    expect(r.kod).toBe(200);
    expect(d.yazma).toContainEqual(["yerinde_isler", "update", expect.objectContaining({ durum: "randevu", randevu_slot: 9 })]);
  });
  it("aralık 3 işle doluysa yakın adres de 409", async () => {
    d.ayniAralik = ["KWS-1", "KWS-2", "KWS-3"].map((no) => ({ id: no, no, ilce: "Kadıköy" }));
    const r = await randevuVer("Kadıköy");
    expect(r.kod).toBe(409);
    expect(r.govde.error).toMatch(/3 işle dolu/);
    expect(d.yazma).toEqual([]);
  });
});

describe("25 Eki SQL dosyası", () => {
  const kod = fs.readFileSync("supabase/migrations/20261025_183_calisma_saatleri.sql", "utf8").split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");
  it("aralıklar 9,11,13,16; gün Pazartesi–Cumartesi; eski satırlar bozulmaz (NOT VALID)", () => {
    expect(kod.match(/in \(9,11,13,16\)\) not valid/g)).toHaveLength(2);
    expect(kod).toMatch(/extract\(isodow from randevu_gun\) between 1 and 6\) not valid/);
  });
  it("aralık başına tek iş index'i kalkar; yerine düz index, yetki ve politika eklenmez", () => {
    expect(kod).toMatch(/drop index if exists public\.yerinde_isler_slot_tekil/);
    expect(kod).not.toMatch(/create unique index/i);
    expect(kod).not.toMatch(/create policy|grant /i);
  });
});
