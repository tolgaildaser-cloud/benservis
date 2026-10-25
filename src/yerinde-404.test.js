// src/yerinde-404.test.js — YK #183 küçük PR: PATCH /api/yerinde/is/:id ve /api/yerinde/foto uçlarının
// "yalnız kendi işi" kapısı. Teknisyen başkasının işine (ve koda bağlı değilse atanmamış işe) eriştiğinde
// 404 alır; işin varlığı sızmaz, hiçbir yazma, log ve storage çağrısı yapılmaz.
import { describe, it, expect, vi, beforeEach } from "vitest";

const { d } = vi.hoisted(() => ({ d: { isler: {}, baglar: {}, yazma: [], storage: [] } }));

const KULLANICILAR = {
  koord: { id: "u-koord", app_metadata: { rol: "yerinde_koordinator" } },
  "tek-t1": { id: "u-t1", app_metadata: { rol: "yerinde_teknisyen" } },
  "tek-t2": { id: "u-t2", app_metadata: { rol: "yerinde_teknisyen" } },
  "tek-bagsiz": { id: "u-bagsiz", app_metadata: { rol: "yerinde_teknisyen" } },
};

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    const f = {};
    let guncel = null;
    const z = {
      select: () => z, order: () => z, limit: () => z,
      eq: (k, v) => { f[k] = v; return z; },
      update: (v) => { guncel = v; d.yazma.push([tablo, "update", v]); return z; },
      insert: async (v) => { d.yazma.push([tablo, "insert", v]); return { error: null }; },
      maybeSingle: async () => {
        if (tablo === "yerinde_teknisyenler") return { data: d.baglar[f.user_id] ? { kod: d.baglar[f.user_id] } : null, error: null };
        if (tablo === "yerinde_isler") { const satir = d.isler[f.id] || null; return { data: satir && guncel ? { ...satir, ...guncel } : satir, error: null }; }
        return { data: null, error: null };
      },
      then: (ok, no) => Promise.resolve({ data: tablo === "yerinde_teknisyenler" ? [{ kod: "T1" }, { kod: "T2" }] : [], error: null }).then(ok, no),
    };
    return z;
  };
  const bucket = (ad) => ({
    list: async (...a) => { d.storage.push([ad, "list", ...a]); return { data: [], error: null }; },
    createSignedUrls: async (...a) => { d.storage.push([ad, "createSignedUrls", ...a]); return { data: [], error: null }; },
    createSignedUploadUrl: async (yol) => { d.storage.push([ad, "createSignedUploadUrl", yol]); return { data: { path: yol, token: "imza" }, error: null }; },
  });
  return {
    default: {
      from: zincir,
      storage: { from: bucket },
      auth: { getUser: async (token) => (KULLANICILAR[token] ? { data: { user: KULLANICILAR[token] }, error: null } : { data: { user: null }, error: { message: "yok" } }) },
    },
  };
});
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {} }));

const IS_T1 = "11111111-1111-4111-8111-111111111111";
const IS_T2 = "22222222-2222-4222-8222-222222222222";
const IS_ATANMAMIS = "33333333-3333-4333-8333-333333333333";
const IS_YOK = "44444444-4444-4444-8444-444444444444";
const satir = (id, kod) => ({ id, no: "KWS-1", durum: "randevu", garanti: "?", il: "İstanbul", ilce: "Kadıköy", teknisyen_kod: kod, randevu_gun: "2026-10-26", randevu_slot: 10, seri_no: null, updated_at: "u1" });

const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const istek = (token, ek) => ({ headers: { authorization: "Bearer " + token }, ...ek });
const patch = async (token, id, body = { gecis: "yolda" }) => {
  const { default: h } = await import("../api/yerinde/is/[id].js");
  const r = res();
  await h(istek(token, { method: "PATCH", query: { id }, body }), r);
  return r;
};
const foto = async (token, method, isId) => {
  const { default: h } = await import("../api/yerinde/foto.js");
  const r = res();
  await h(istek(token, method === "GET" ? { method, query: { isId } } : { method, body: { isId, tip: "image/jpeg" } }), r);
  return r;
};

beforeEach(() => {
  d.isler = { [IS_T1]: satir(IS_T1, "T1"), [IS_T2]: satir(IS_T2, "T2"), [IS_ATANMAMIS]: satir(IS_ATANMAMIS, null) };
  d.baglar = { "u-t1": "T1", "u-t2": "T2" };
  d.yazma.length = 0;
  d.storage.length = 0;
});

describe("PATCH /api/yerinde/is/:id — yalnız kendi işi", () => {
  it("teknisyen başkasının işinde 404 alır; yazma ve log yok", async () => {
    const r = await patch("tek-t1", IS_T2);
    expect(r.kod).toBe(404);
    expect(r.govde).toEqual({ error: "İş bulunamadı" });
    expect(d.yazma).toEqual([]);
  });
  it("koda bağlı olmayan teknisyen atanmamış işe de erişemez (null === null kapıdan geçmez)", async () => {
    expect((await patch("tek-bagsiz", IS_ATANMAMIS)).kod).toBe(404);
    expect((await patch("tek-bagsiz", IS_T1)).kod).toBe(404);
    expect(d.yazma).toEqual([]);
  });
  it("olmayan iş, başkasının işiyle aynı yanıtı verir (varlık sızmaz)", async () => {
    const yok = await patch("tek-t1", IS_YOK);
    const baska = await patch("tek-t1", IS_T2);
    expect([yok.kod, yok.govde]).toEqual([baska.kod, baska.govde]);
    expect((await patch("koord", IS_YOK)).kod).toBe(404);
  });
  it("teknisyen kendi işini ilerletir; koordinatör her işe erişir", async () => {
    const kendi = await patch("tek-t1", IS_T1);
    expect(kendi.kod).toBe(200);
    expect(d.yazma).toContainEqual(["yerinde_isler", "update", { durum: "yolda" }]);
    expect((await patch("koord", IS_T2)).kod).toBe(200);
  });
});

describe("/api/yerinde/foto — yalnız kendi işi", () => {
  it("teknisyen başkasının işine yükleme adresi alamaz: 404, storage ve log çağrısı yok", async () => {
    const r = await foto("tek-t1", "POST", IS_T2);
    expect(r.kod).toBe(404);
    expect(d.storage).toEqual([]);
    expect(d.yazma).toEqual([]);
  });
  it("teknisyen başkasının işinin fotoğraflarını göremez: 404, listeleme yok", async () => {
    const r = await foto("tek-t2", "GET", IS_T1);
    expect(r.kod).toBe(404);
    expect(d.storage).toEqual([]);
  });
  it("koda bağlı olmayan teknisyen atanmamış işte de 404; olmayan iş aynı yanıt", async () => {
    expect((await foto("tek-bagsiz", "POST", IS_ATANMAMIS)).kod).toBe(404);
    expect((await foto("tek-t1", "GET", IS_YOK)).kod).toBe(404);
    expect(d.storage).toEqual([]);
  });
  it("kendi işinde imzalı yükleme adresi verilir ve foto log'u düşer", async () => {
    const r = await foto("tek-t1", "POST", IS_T1);
    expect(r.kod).toBe(200);
    expect(r.govde).toMatchObject({ token: "imza", bucket: "yerinde-seri" });
    expect(d.storage[0][2]).toMatch(new RegExp("^" + IS_T1 + "/\\d+-[0-9a-f]+\\.jpg$"));
    expect(d.yazma).toContainEqual(["yerinde_is_log", "insert", { is_id: IS_T1, olay: "foto", yazan: "u-t1" }]);
  });
});
