// src/yerinde-ara.test.js — YK #183 PR-4 · Verimor tıkla-ara. Uç yalnız koordinatöre açık; telefon istekten değil
// DB'den okunur; deneme modunda Verimor çağrılmaz; anahtar ve telefon yanıta girmez; art arda arama engellenir.
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { verimorNo, dahiliOku, aranabilir, olayMetni, OLAY_DESEN } from "./yerinde-cekirdek.js";

const { d } = vi.hoisted(() => ({ d: { rol: "yerinde_koordinator", is: null, tel: "05321234567", sonArama: [], yazma: [] } }));

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    const z = {
      select: () => z, eq: () => z, in: () => z, gte: () => z, limit: () => z,
      insert: async (v) => { d.yazma.push([tablo, v]); return { error: null }; },
      maybeSingle: async () => {
        if (tablo === "yerinde_isler") return { data: d.is, error: null };
        if (tablo === "yerinde_musteri") return { data: d.tel ? { telefon: d.tel } : null, error: null };
        return { data: null, error: null };
      },
      then: (ok, no) => Promise.resolve({ data: tablo === "yerinde_is_log" ? d.sonArama : [], error: null }).then(ok, no),
    };
    return z;
  };
  return {
    default: {
      from: zincir,
      auth: { getUser: async () => ({ data: { user: { id: "u-1", app_metadata: { rol: d.rol } } }, error: null }) },
    },
  };
});
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {} }));

const ID = "11111111-1111-4111-8111-111111111111";
const ENV = ["VERIMOR_BS_KEY", "VERIMOR_CALLER_ID", "VERIMOR_DEFAULT_EXTENSION", "VERIMOR_DRY_RUN"];
const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const cagir = async (method, body = {}) => {
  const { default: h } = await import("../api/yerinde/ara.js");
  const r = res();
  await h({ method, headers: { authorization: "Bearer t" }, query: {}, body }, r);
  return r;
};
let fetchMock;

beforeEach(() => {
  Object.assign(d, { rol: "yerinde_koordinator", is: { id: ID, durum: "yeni" }, tel: "05321234567", sonArama: [], yazma: [] });
  ENV.forEach((k) => delete process.env[k]);
  process.env.VERIMOR_BS_KEY = "gizli-anahtar";
  process.env.VERIMOR_CALLER_ID = "908502422608";
  fetchMock = vi.fn(async () => new Response("uuid-1", { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => { vi.unstubAllGlobals(); ENV.forEach((k) => delete process.env[k]); });

describe("tıkla-ara yardımcıları", () => {
  it("kayıtlı cep Verimor biçimine çevrilir; geçersiz numara null", () => {
    expect(verimorNo("05321234567")).toBe("905321234567");
    expect(verimorNo("+90 532 123 45 67")).toBe("905321234567");
    expect(verimorNo("02121234567")).toBeNull();
    expect(verimorNo("")).toBeNull();
  });
  it("dahili 2–6 rakam; kapanmış iş aranmaz; log etiketleri desene uyar", () => {
    expect(dahiliOku(" 1000 ")).toBe("1000");
    expect(dahiliOku("1")).toBeNull();
    expect(dahiliOku("1234567")).toBeNull();
    expect(aranabilir("yeni")).toBe(true);
    expect(aranabilir("parca")).toBe(true);
    expect(aranabilir("tamam")).toBe(false);
    expect(aranabilir("iptal")).toBe(false);
    for (const o of ["arama", "arama:deneme"]) { expect(o).toMatch(OLAY_DESEN); expect(olayMetni(o)).not.toBe(o); }
  });
});

describe("GET /api/yerinde/ara · hat durumu", () => {
  it("anahtar varsa hazır; anahtar değeri yanıta girmez", async () => {
    process.env.VERIMOR_DEFAULT_EXTENSION = "1000";
    const r = await cagir("GET");
    expect(r.kod).toBe(200);
    expect(r.govde).toEqual({ hazir: true, deneme: false, varsayilanDahili: "1000" });
  });
  it("anahtar yoksa kapalı, deneme modunda hazır", async () => {
    delete process.env.VERIMOR_BS_KEY;
    expect((await cagir("GET")).govde.hazir).toBe(false);
    process.env.VERIMOR_DRY_RUN = "1";
    expect((await cagir("GET")).govde).toMatchObject({ hazir: true, deneme: true });
  });
  it("teknisyen 403", async () => {
    d.rol = "yerinde_teknisyen";
    expect((await cagir("GET")).kod).toBe(403);
  });
});

describe("POST /api/yerinde/ara", () => {
  it("telefon DB'den okunur, istekteki numara yok sayılır; caller_id 0850; log 'arama'; yanıtta telefon/anahtar yok", async () => {
    const r = await cagir("POST", { id: ID, dahili: "1001", tel: "05559999999" });
    expect(r.kod).toBe(200);
    const url = new URL(fetchMock.mock.calls[0][0]);
    expect(url.origin + url.pathname).toBe("https://api.bulutsantralim.com/originate");
    expect(Object.fromEntries(url.searchParams)).toMatchObject({ key: "gizli-anahtar", extension: "1001", destination: "905321234567", caller_id: "908502422608" });
    expect(d.yazma).toEqual([["yerinde_is_log", expect.objectContaining({ is_id: ID, olay: "arama", yazan: "u-1" })]]);
    expect(JSON.stringify(r.govde)).not.toMatch(/gizli|5321234567|5559999999/);
  });
  it("dahili gönderilmezse varsayılan dahili kullanılır; ikisi de yoksa 400", async () => {
    process.env.VERIMOR_DEFAULT_EXTENSION = "1000";
    await cagir("POST", { id: ID });
    expect(new URL(fetchMock.mock.calls[0][0]).searchParams.get("extension")).toBe("1000");
    delete process.env.VERIMOR_DEFAULT_EXTENSION;
    const r = await cagir("POST", { id: ID, dahili: "x" });
    expect(r.kod).toBe(400);
    expect(r.govde.error).toMatch(/Dahilim/);
  });
  it("deneme modu: Verimor çağrılmaz, log 'arama:deneme'", async () => {
    process.env.VERIMOR_DRY_RUN = "1";
    delete process.env.VERIMOR_BS_KEY;
    const r = await cagir("POST", { id: ID, dahili: "1000" });
    expect(r.kod).toBe(200);
    expect(r.govde).toMatchObject({ deneme: true, log: { olay: "arama:deneme" } });
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("anahtar yoksa 503, Verimor çağrılmaz", async () => {
    delete process.env.VERIMOR_BS_KEY;
    expect((await cagir("POST", { id: ID, dahili: "1000" })).kod).toBe(503);
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("teknisyen 403; geçersiz id 400; olmayan iş 404; kapanmış iş 409 — hiçbirinde arama yok", async () => {
    d.rol = "yerinde_teknisyen";
    expect((await cagir("POST", { id: ID, dahili: "1000" })).kod).toBe(403);
    d.rol = "yerinde_koordinator";
    expect((await cagir("POST", { id: "1", dahili: "1000" })).kod).toBe(400);
    d.is = null;
    expect((await cagir("POST", { id: ID, dahili: "1000" })).kod).toBe(404);
    d.is = { id: ID, durum: "iptal" };
    expect((await cagir("POST", { id: ID, dahili: "1000" })).kod).toBe(409);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(d.yazma).toEqual([]);
  });
  it("aynı işte az önce arama varsa 429", async () => {
    d.sonArama = [{ id: 7 }];
    expect((await cagir("POST", { id: ID, dahili: "1000" })).kod).toBe(429);
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("Verimor hatası: ham metin ve anahtar istemciye gitmez, log yazılmaz", async () => {
    fetchMock.mockResolvedValueOnce(new Response("Extension not found key=gizli-anahtar", { status: 404 }));
    const r = await cagir("POST", { id: ID, dahili: "1009" });
    expect(r.kod).toBe(502);
    expect(r.govde.error).toBe("Santralde 1009 dahilisi bulunamadı");
    fetchMock.mockResolvedValueOnce(new Response("internal key=gizli-anahtar", { status: 500 }));
    const r2 = await cagir("POST", { id: ID, dahili: "1009" });
    expect(r2.govde.error).toBe("Verimor aramayı başlatamadı (500)");
    expect(d.yazma).toEqual([]);
  });
});
