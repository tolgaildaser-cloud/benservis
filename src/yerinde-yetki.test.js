// src/yerinde-yetki.test.js — YK #183 PR-1 kilidi: rol yalnız app_metadata, rol bağlama yalnız admin,
// SQL'de kişisel veri ayrı tabloda, RLS'te yazma politikası yok, teknisyen yalnız kendi işini görür.
import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "node:fs";
import { yerindeRolOku, koordinatorMu, teknisyenMi } from "./yerinde-kimlik.js";

const { kayit } = vi.hoisted(() => ({ kayit: { yazma: [], kullanici: null, tekBagli: null, eskiBag: null, authHata: null } }));

vi.mock("../api/_supabase.js", () => {
  const zincir = (tablo) => {
    let islem = "select";
    const z = {
      update: (v) => { islem = "update"; kayit.yazma.push([tablo, "update", v]); return z; },
      eq: () => z, is: () => z, select: () => z,
      // update…select → yeni kod bağlandı mı (tekBagli) · düz select → bu kullanıcının eski bağı (eskiBag)
      maybeSingle: async () => ({ data: islem === "update" ? kayit.tekBagli : kayit.eskiBag, error: null }),
      then: (ok, no) => Promise.resolve({ data: null, error: null }).then(ok, no),
    };
    return z;
  };
  return {
    default: {
      from: zincir,
      auth: { admin: {
        getUserById: async () => ({ data: { user: kayit.kullanici }, error: kayit.kullanici ? null : { message: "yok" } }),
        updateUserById: async (id, v) => { kayit.yazma.push(["auth", id, v]); return { error: kayit.authHata }; },
      } },
    },
  };
});
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {} }));

const UID = "11111111-2222-4333-8444-555555555555";
const res = () => { const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } }; return r; };
const cagir = async (body, auth = "Bearer admin-sir") => {
  const { default: h } = await import("../api/admin/yerinde-rol.js");
  const r = res();
  await h({ method: "PATCH", headers: auth ? { authorization: auth } : {}, body }, r);
  return r;
};

beforeEach(() => {
  kayit.yazma.length = 0;
  kayit.kullanici = { id: UID, app_metadata: { provider: "email" } };
  kayit.tekBagli = { kod: "T1" };
  kayit.eskiBag = null;
  kayit.authHata = null;
  process.env.ADMIN_TOKEN = "admin-sir";
});

describe("yerinde rolü yalnız app_metadata", () => {
  it("app_metadata.rol okunur, user_metadata yok sayılır, bilinmeyen rol null", () => {
    expect(yerindeRolOku({ app_metadata: { rol: "yerinde_koordinator" } })).toBe("yerinde_koordinator");
    expect(yerindeRolOku({ user_metadata: { rol: "yerinde_koordinator" } })).toBe(null);
    expect(yerindeRolOku({ app_metadata: { rol: "admin" } })).toBe(null);
    expect(koordinatorMu({ app_metadata: { rol: "yerinde_teknisyen" } })).toBe(false);
    expect(teknisyenMi({ app_metadata: { rol: "yerinde_teknisyen" } })).toBe(true);
  });
});

describe("api/admin/yerinde-rol yalnız admin", () => {
  it("tokensiz ve kullanıcı JWT'siyle 401, yazma yok", async () => {
    for (const a of [null, "Bearer kullanici-jwt"]) {
      const r = await cagir({ user_id: UID, rol: "yerinde_koordinator" }, a);
      expect(r.kod).toBe(401);
    }
    expect(kayit.yazma).toEqual([]);
  });
  it("koordinatör rolü app_metadata.rol'e yazılır", async () => {
    const r = await cagir({ user_id: UID, rol: "yerinde_koordinator" });
    expect(r.kod).toBe(200);
    const auth = kayit.yazma.find((y) => y[0] === "auth");
    expect(auth[2]).toEqual({ app_metadata: { provider: "email", rol: "yerinde_koordinator" } });
  });
  it("teknisyen rolü kod ister; kod bağlanır", async () => {
    expect((await cagir({ user_id: UID, rol: "yerinde_teknisyen" })).kod).toBe(400);
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T1" });
    expect(r.kod).toBe(200);
    expect(kayit.yazma.some((y) => y[0] === "yerinde_teknisyenler" && y[2].user_id === UID)).toBe(true);
  });
  it("kod başka hesaba bağlıysa 409, rol yazılmaz", async () => {
    kayit.tekBagli = null;
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T2" });
    expect(r.kod).toBe(409);
    expect(kayit.yazma.some((y) => y[0] === "auth")).toBe(false);
  });
  it("servis hesabına yerinde rolü verilmez", async () => {
    kayit.kullanici = { id: UID, app_metadata: { servis_id: "sv-1" } };
    const r = await cagir({ user_id: UID, rol: "yerinde_koordinator" });
    expect(r.kod).toBe(409);
    expect(kayit.yazma.some((y) => y[0] === "auth")).toBe(false);
  });
  it("geçersiz rol 400; rol: null rolü kaldırır", async () => {
    expect((await cagir({ user_id: UID, rol: "admin" })).kod).toBe(400);
    kayit.kullanici = { id: UID, app_metadata: { rol: "yerinde_koordinator", provider: "email" } };
    const r = await cagir({ user_id: UID, rol: null });
    expect(r.kod).toBe(200);
    expect(kayit.yazma.find((y) => y[0] === "auth")[2]).toEqual({ app_metadata: { provider: "email" } });
  });
});

describe("YK #183 SQL dosyası", () => {
  const SQL = fs.readFileSync("supabase/migrations/20261023_183_yerinde_servis.sql", "utf8");
  const kod = SQL.split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");
  it("4 tabloda RLS açık; yalnız SELECT politikası var, anon'a yetki yok", () => {
    for (const t of ["yerinde_teknisyenler", "yerinde_isler", "yerinde_musteri", "yerinde_is_log"])
      expect(kod).toMatch(new RegExp(`alter table public\\.${t}\\s+enable row level security`));
    const pol = [...kod.matchAll(/create policy \w+ on public\.(\w+) for (\w+) to (\w+)/g)].map((m) => m[2]);
    expect(pol).toEqual(["select", "select", "select", "select"]);
    expect(kod).not.toMatch(/to anon/);
    expect(kod).toMatch(/revoke all on [^;]*from anon/);
  });
  it("rol yalnız app_metadata'dan; teknisyen yalnız kendi kodunun işini görür", () => {
    expect(kod).toMatch(/auth\.jwt\(\)\) -> 'app_metadata' ->> 'rol'/);
    expect(kod).not.toMatch(/user_metadata/);
    expect(kod).toMatch(/teknisyen_kod = public\.yerinde_benim_kodum\(\)/);
  });
  it("kişisel veri yalnız yerinde_musteri'de; iş ve log tablosunda ad/telefon/adres yok", () => {
    const blok = (t) => kod.slice(kod.indexOf(`create table if not exists public.${t}`), kod.indexOf(");", kod.indexOf(`create table if not exists public.${t}`)));
    for (const t of ["yerinde_isler", "yerinde_is_log"]) expect(blok(t)).not.toMatch(/\b(ad|telefon|eposta|adres)\s/);
    expect(blok("yerinde_musteri")).toMatch(/telefon\s+text not null/);
  });
  it("durum, slot ve hafta içi CHECK'leri; tutar opsiyonel; bucket private", () => {
    expect(kod).toContain("durum in ('yeni','randevu','yolda','serviste','parca','atolye','tamam','iptal')");
    expect(kod).toContain("in (8,10,12,14,16)");
    expect(kod).toMatch(/isodow from randevu_gun\) between 1 and 5/);
    expect(kod).toMatch(/tutar\s+numeric\(10,2\) check \(tutar is null or tutar >= 0\)/);
    expect(kod).toMatch(/'yerinde-seri', 'yerinde-seri', false/);
  });
});

describe("PR-2 IT bulguları: rol değişimi atomik, rol alanı zorunlu", () => {
  it("rol alanı yoksa 400 ve hiçbir yazma yok (boş gövde rolü sessizce silmez)", async () => {
    kayit.kullanici = { id: UID, app_metadata: { rol: "yerinde_koordinator" } };
    const r = await cagir({ user_id: UID });
    expect(r.kod).toBe(400);
    expect(kayit.yazma).toEqual([]);
  });
  it("yeni kod doluysa (409) eski bağ ÇÖZÜLMEZ", async () => {
    kayit.eskiBag = { kod: "T1" };
    kayit.tekBagli = null;
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T2" });
    expect(r.kod).toBe(409);
    expect(kayit.yazma.some((y) => y[0] === "yerinde_teknisyenler" && y[2].user_id === null)).toBe(false);
    expect(kayit.yazma.some((y) => y[0] === "auth")).toBe(false);
  });
  it("T1 → T2: önce yeni bağ, sonra eski çözülür, sonra rol", async () => {
    kayit.eskiBag = { kod: "T1" };
    kayit.tekBagli = { kod: "T2" };
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T2" });
    expect(r.kod).toBe(200);
    const sira = kayit.yazma.map((y) => (y[0] === "auth" ? "rol" : y[2].user_id ? "bagla" : "coz"));
    expect(sira).toEqual(["bagla", "coz", "rol"]);
  });
  it("rol yazımı düşerse bağ geri alınır (eski bağ yerine konur)", async () => {
    kayit.eskiBag = { kod: "T1" };
    kayit.tekBagli = { kod: "T2" };
    kayit.authHata = { message: "düştü" };
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T2" });
    expect(r.kod).toBe(500);
    const sira = kayit.yazma.map((y) => (y[0] === "auth" ? "rol" : y[2].user_id ? "bagla" : "coz"));
    expect(sira).toEqual(["bagla", "coz", "rol", "coz", "bagla"]);
  });
  it("aynı koda yeniden teknisyen rolü: bağ değişmez, yalnız rol yazılır", async () => {
    kayit.eskiBag = { kod: "T1" };
    const r = await cagir({ user_id: UID, rol: "yerinde_teknisyen", teknisyen_kod: "T1" });
    expect(r.kod).toBe(200);
    expect(kayit.yazma.map((y) => y[0])).toEqual(["auth"]);
  });
});

describe("PR-2 IT bulgusu: panel-kurulum ters guard", () => {
  it("yerinde rolü olan hesaba servis_id verilmez (409)", async () => {
    kayit.kullanici = { id: UID, app_metadata: { rol: "yerinde_teknisyen" } };
    const { default: h } = await import("../api/admin/panel-kurulum.js");
    const r = res();
    await h({ method: "PATCH", headers: { authorization: "Bearer admin-sir" }, body: { user_id: UID, servis_id: "sv-1", servis_ad: "X" } }, r);
    expect(r.kod).toBe(409);
    expect(kayit.yazma.some((y) => y[0] === "auth")).toBe(false);
  });
});

describe("YK #183 PR-2 SQL dosyası", () => {
  const SQL = fs.readFileSync("supabase/migrations/20261024_183_pr2_yerinde.sql", "utf8");
  const kod = SQL.split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");
  it("teknisyen tablosunda user_id authenticated'a kapalı; yerinde_rol anon'a kapalı", () => {
    expect(kod).toMatch(/revoke select on public\.yerinde_teknisyenler from authenticated/);
    const grant = kod.match(/grant select \(([^)]*)\) on public\.yerinde_teknisyenler to authenticated/);
    expect(grant).toBeTruthy();
    expect(grant[1]).not.toMatch(/user_id/);
    expect(kod).toMatch(/revoke execute on function public\.yerinde_rol\(\) from public, anon/);
  });
  it("açıklama sütunu sınırlı; yazma politikası eklenmiyor", () => {
    expect(kod).toMatch(/add column if not exists aciklama text check \(aciklama is null or char_length\(aciklama\) <= 500\)/);
    expect(kod).not.toMatch(/create policy/);
  });
});
