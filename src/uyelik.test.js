// src/uyelik.test.js — bireysel üyelik (YK #172 ÜY-2) kilitleri.
// Yetki ayrımı app_metadata'da kalır (#176), rıza beyanı yalnız sürüm numarası, SQL dosyası
// "sahibi okur, üye cihaz yazamaz, anon'a yeni yol yok" ilkesini taşır.
import { describe, it, expect, vi } from "vitest";
vi.mock("./lib/supabase.js", () => ({ supabase: { auth: {} }, KURTARMA_BAGLANTISI: false }));
import fs from "node:fs";
import { kayitDogrula, kayitParametreleri, kayitSonucu, kalanGun, UYELIK_RIZA_V } from "./uyelik.js";
import { girisYonu, UYELIK_ACIK } from "./KayitSecim.jsx";

const SQL = fs.readFileSync("supabase/migrations/20261018_172_uy2_uyelik.sql", "utf8");
const sqlKod = SQL.split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");

describe("üye ol formu", () => {
  it("doğrulama: e-posta, en az 8 karakter şifre, zorunlu rıza", () => {
    expect(kayitDogrula({ email: "a@b.co", sifre: "12345678", riza: true })).toBe(null);
    expect(kayitDogrula({ email: "a@b", sifre: "12345678", riza: true })).toMatch(/e-posta/);
    expect(kayitDogrula({ email: "a@b.co", sifre: "1234567", riza: true })).toMatch(/8/);
    expect(kayitDogrula({ email: "a@b.co", sifre: "12345678", riza: false })).toMatch(/aydınlatma/);
  });

  it("signUp verisi yalnız rıza beyanı taşır, dönüş /hesabim", () => {
    const p = kayitParametreleri({ email: " a@b.co ", sifre: "x".repeat(8), hatirlatma: true }, "https://www.benservis.com");
    expect(p.email).toBe("a@b.co");
    expect(p.options.emailRedirectTo).toBe("https://www.benservis.com/hesabim");
    expect(p.options.data).toEqual({ uyelik_riza_v: UYELIK_RIZA_V, hatirlatma: true });
    expect(JSON.stringify(p.options.data)).not.toMatch(/servis/);
  });

  it("signUp sonucu: kapalı kayıt, var olan hesap (boş identities), başarı", () => {
    expect(kayitSonucu({ error: { code: "signup_disabled", message: "Signups not allowed for this instance" } }).tur).toBe("kapali");
    expect(kayitSonucu({ error: { message: "User already registered" } }).tur).toBe("var");
    expect(kayitSonucu({ data: { user: { identities: [] } }, error: null }).tur).toBe("var");
    expect(kayitSonucu({ data: { user: { identities: [{}] } }, error: null }).tur).toBe("gonderildi");
    expect(kayitSonucu({ error: { message: "boom" } }).tur).toBe("hata");
  });

  it("giriş yönü: servis app_metadata ile panele, birey /hesabim'e; user_metadata yok sayılır", () => {
    expect(UYELIK_ACIK).toBe(true);
    expect(girisYonu({ app_metadata: { servis_id: "sv-1" } })).toBe("/panel");
    expect(girisYonu({ user_metadata: { servis_id: "sv-1" } })).toBe("/hesabim");
  });

  it("kalanGun", () => {
    const bugun = new Date(2026, 9, 18);
    expect(kalanGun("2026-11-17", bugun)).toBe(30);
    expect(kalanGun("2026-10-17", bugun)).toBe(-1);
    expect(kalanGun(null, bugun)).toBe(null);
  });
});

describe("ÜY-2 SQL dosyası", () => {
  it("uyeler: RLS açık, sahibi okur/açar/günceller, silme politikası yok", () => {
    expect(sqlKod).toMatch(/alter table public\.uyeler enable row level security/);
    expect(sqlKod).toMatch(/create policy uyeler_sahibi_okur on public\.uyeler\s+for select to authenticated/);
    expect(sqlKod).toMatch(/create policy uyeler_sahibi_acar on public\.uyeler\s+for insert to authenticated/);
    expect(sqlKod).toMatch(/create policy uyeler_sahibi_gunceller on public\.uyeler\s+for update to authenticated/);
    expect(sqlKod).not.toMatch(/on public\.uyeler\s+for delete/);
    expect(sqlKod).toMatch(/grant update \(ad, hatirlatma_acik\) on public\.uyeler to authenticated/);
  });

  it("rıza sürümü istemciden alınmaz: tetikleyici sabit yazar, INSERT yetkisinde sürüm yok (IT bulgu 2)", () => {
    expect(sqlKod).toMatch(/new\.riza_metin_v := 1;/);
    expect(sqlKod).toMatch(/check \(riza_metin_v between 1 and 1\)/);
    expect(sqlKod).toMatch(/grant insert \(id, ad, hatirlatma_acik\) on public\.uyeler to authenticated/);
    expect(sqlKod).not.toMatch(/v::smallint/);
    expect(SQL).toMatch(/-- drop trigger if exists uye_profili_olustur on auth\.users;/); // geri alma bloğu
  });

  it("cihazlar: yalnız sahibin OKUMA politikası; üye yazamaz, anon'a politika yok", () => {
    const cihazPol = [...sqlKod.matchAll(/create policy (\w+) on public\.cihazlar\s+for (\w+) to (\w+)/g)];
    expect(cihazPol.map((m) => [m[1], m[2], m[3]])).toEqual([["cihazlar_sahibi_okur", "select", "authenticated"]]);
    expect(sqlKod).not.toMatch(/to anon/);
  });

  it("yetki app_metadata'dan; user_metadata yalnız rıza sürümü için okunur", () => {
    expect(sqlKod).not.toMatch(/user_metadata'?\s*->>?\s*'servis/);
    expect(sqlKod).not.toMatch(/raw_user_meta_data\s*->>?\s*'servis/);
    expect(sqlKod).toMatch(/app_metadata' ->> 'servis_id'/);
  });

  it("bucket cihaz-dosyalari private, klasör = üye kimliği", () => {
    expect(sqlKod).toMatch(/'cihaz-dosyalari', 'cihaz-dosyalari', false/);
    expect(sqlKod).toMatch(/set public = false/);
    expect((sqlKod.match(/\(storage\.foldername\(name\)\)\[1\] = \(select auth\.uid\(\)\)::text/g) || []).length).toBe(3);
  });
});

describe("/hesabim ve /kayit kaynakları", () => {
  const hesabim = fs.readFileSync("src/Hesabim.jsx", "utf8");
  it("/hesabim yetkiyi servisIdOku'dan alır, noindex, cihaz yazmaz", () => {
    expect(hesabim).toContain("servisIdOku(u)");
    expect(hesabim).toContain("noindex");
    expect(hesabim).not.toMatch(/from\("cihazlar"\)\.(insert|update|upsert|delete)/);
    expect(hesabim).not.toMatch(/\.user_metadata/);
  });
  it("kurtarma bağlantısında yönlendirme/yükleme yok (IT bulgu 1)", () => {
    expect(fs.readFileSync("src/lib/supabase.js", "utf8")).toMatch(/export const KURTARMA_BAGLANTISI[\s\S]*createClient\(/);
    expect(hesabim).toContain('useState(KURTARMA_BAGLANTISI ? "yenisifre"');
    expect(hesabim).toContain("if (kurtarma.current) { setUser(u || null); return; }");
    expect(hesabim).toContain("if (kurtarma.current) return;");
    expect(hesabim).not.toMatch(/riza_metin_v: /);
  });
  it("rota mount edildi ve vercel rewrite var", () => {
    expect(fs.readFileSync("src/main.jsx", "utf8")).toMatch(/path === "\/hesabim"/);
    expect(fs.readFileSync("vercel.json", "utf8")).toMatch(/"source": "\/hesabim"/);
  });
});
