// src/pano.test.js — yönetim panosu kilidi (YK #195): Excel, süzgeç, Teşhis hesapları, PII.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { xlsxYap, zipYap, sutunAdi, sayfaAdlari, csvYap } from "./xlsx-yaz.js";
import { panoHesapla, suz, kaynakTuru, gelisEtiketi, gunTR } from "./teshis-pano.js";
import { suzgecOku, suzgecYaz, aralikHesapla, apiSorgu } from "./pano-suzgec.js";

const metin = (u) => new TextDecoder().decode(u);
const r = (o) => ({ created_at: "2026-10-30T09:00:00Z", cihaz: "Klima", marka: "Arçelik", ariza: "Soğutmuyor", ...o });

describe("Excel", () => {
  it("ZIP imzaları ve dosya listesi", () => {
    const z = xlsxYap([{ ad: "A", basliklar: ["x"], satirlar: [[1]] }]);
    expect([...z.slice(0, 4)]).toEqual([0x50, 0x4b, 3, 4]);
    expect(metin(z)).toContain("xl/worksheets/sheet1.xml");
    expect(metin(z)).toContain("[Content_Types].xml");
  });
  it("sayı sayı, tarih tarih, metin kaçışlı Türkçe", () => {
    const m = metin(xlsxYap([{ ad: "A", basliklar: ["x", "y", "z"], satirlar: [[12.5, new Date("2026-01-01T00:00:00Z"), "Şişli <&>"]] }]));
    expect(m).toContain('<c r="A2"><v>12.5</v></c>');
    expect(m).toContain('<c r="B2" s="1"><v>46023</v></c>');
    expect(m).toContain("Şişli &lt;&amp;&gt;");
  });
  it("boş hücre yazılmaz; kontrol karakteri atılır", () => {
    const m = metin(xlsxYap([{ ad: "A", basliklar: ["x", "y"], satirlar: [[null, "a\u0001b"]] }]));
    expect(m).not.toContain('r="A2"');
    expect(m).toContain(">ab<");
  });
  it("sütun adı ve sayfa adı kuralları", () => {
    expect([sutunAdi(0), sutunAdi(25), sutunAdi(26), sutunAdi(701)]).toEqual(["A", "Z", "AA", "ZZ"]);
    const a = sayfaAdlari(["Cihaz/Marka: uzun uzun uzun uzun uzun uzun", "Cihaz/Marka: uzun uzun uzun uzun uzun uzun"]);
    expect(a[0].length).toBeLessThanOrEqual(31);
    expect(a[0]).not.toMatch(/[/:]/);
    expect(new Set(a).size).toBe(2);
  });
  it("zip boş dosyayla da geçerli uç kaydı yazar", () => {
    expect(zipYap([]).length).toBe(22);
  });
  it("CSV BOM'lu ve kaçışlı", () => {
    const c = csvYap({ basliklar: ["a"], satirlar: [['x,"y"']] });
    expect(c.charCodeAt(0)).toBe(0xfeff);
    expect(c).toContain('"x,""y"""');
  });
});

describe("süzgeç adreste", () => {
  const S = new Date("2026-10-31T10:00:00Z");
  it("gidiş-dönüş aynı; sır adrese yazılmaz", () => {
    const d = suzgecOku("?token=gizli&aralik=7&il=Bursa&marka=Beko", S);
    expect(d).toMatchObject({ aralik: "7", il: "Bursa", marka: "Beko", from: "2026-10-25", to: "2026-10-31" });
    const y = suzgecYaz(d, "teshis");
    expect(y).not.toContain("token");
    expect(suzgecOku(y, S)).toEqual(d);
  });
  it("bozuk değer varsayılana düşer", () => {
    expect(suzgecOku("?aralik=ozel&from=abc", S).aralik).toBe("30");
    expect(aralikHesapla("bugun", S)).toEqual({ from: "2026-10-31", to: "2026-10-31" });
  });
  it("özel aralık korunur, boş süzgeç sorguya girmez", () => {
    const d = suzgecOku("?aralik=ozel&from=2026-10-01&to=2026-10-05", S);
    expect(d).toMatchObject({ from: "2026-10-01", to: "2026-10-05" });
    expect(apiSorgu(d, { sayfa: 2 })).toBe("from=2026-10-01&to=2026-10-05&sayfa=2");
  });
});

describe("Teşhis hesapları", () => {
  const satirlar = [
    r({ il: "İstanbul", ilce: "Kadıköy", karar: "tamir", maliyet_min: 100, maliyet_max: 200 }),
    r({ il: "İstanbul", karar: "tamir", maliyet_min: 300, maliyet_max: 400, kaynak: "blog-ici", cins: "ic" }),
    r({ marka: "Yokmarka", karar: "yenisi", created_at: "2026-10-30T22:00:00Z", kaynak: "google", cins: "cpc" }),
    r({ marka: "Diğer" }),
  ];
  const p = panoHesapla(satirlar, satirlar.slice(0, 1), {}, "2026-10-30", "2026-10-31");
  const pivot = (ad) => p.pivotlar.find((t) => t.ad === ad);

  it("özet, konumlu/konumsuz, tamir oranı, önceki dönem", () => {
    expect(p.ozet).toEqual({ toplam: 4, onceki: 1, konumlu: 2, konumsuz: 2, tamir: 2, yenisi: 1, tamirOran: 67 });
  });
  it("gün Türkiye saatiyle; boş gün de satır", () => {
    expect(gunTR("2026-10-30T22:00:00Z")).toBe("2026-10-31");
    expect(p.gunluk).toEqual([{ gun: "2026-10-30", sayi: 3 }, { gun: "2026-10-31", sayi: 1 }]);
  });
  it("pivotların hepsi var; il × ilçe doğru", () => {
    expect(p.pivotlar.map((t) => t.ad)).toEqual(["İl × İlçe", "Cihaz × Marka", "Marka × Arıza", "Karar × Cihaz", "Cihaz yaşı", "Maliyet × Cihaz", "Maliyet × Marka", "Aciliyet", "Geliş kaynağı"]);
    expect(pivot("İl × İlçe").satirlar).toContainEqual(["İstanbul", "Kadıköy", 1]);
  });
  it("maliyet ort. + medyan; maliyetsiz satır sayılmaz", () => {
    expect(pivot("Maliyet × Cihaz").satirlar[0]).toEqual(["Klima", 2, 200, 200, 300, 300]);
  });
  it("listede olmayan marka: 'Diğer' ve boş hariç", () => {
    expect(p.listedeOlmayan).toEqual([["Yokmarka", 1]]);
  });
  it("süzgeç ve kaynak türü", () => {
    expect(suz(satirlar, { tur: "blog" })).toHaveLength(1);
    expect(suz(satirlar, { il: "İstanbul", ilce: "Kadıköy" })).toHaveLength(1);
    expect(kaynakTuru({})).toBe("dogrudan");
    expect(kaynakTuru({ kaynak: "google" })).toBe("dis");
    expect(gelisEtiketi({ kaynak: "google", cins: "cpc" })).toBe("google / cpc");
    expect(suz(satirlar, { gelis: "google / cpc" })).toHaveLength(1);
  });
  it("ilçe seçenekleri seçili ile daralır, seçenek listesi süzgeçten etkilenmez", () => {
    const x = panoHesapla(satirlar, [], { il: "İstanbul" }, "2026-10-30", "2026-10-30");
    expect(x.secenekler.ilce).toEqual(["Kadıköy"]);
    expect(x.secenekler.marka).toContain("Yokmarka");
  });
});

describe("kapsam kilidi", () => {
  const oku = (y) => fs.readFileSync(new URL(y, import.meta.url), "utf8");
  it("Excel kamu paketine girmez: yalnız admin panelinden, lazy", () => {
    expect(oku("./main.jsx")).not.toContain("xlsx-yaz");
    expect(oku("./App.jsx")).not.toContain("xlsx-yaz");
    expect(oku("./AdminTeshisPaneli.jsx")).toMatch(/await import\("\.\/xlsx-yaz\.js"\)/);
    expect(oku("./AdminTeshisPaneli.jsx")).not.toMatch(/^import .*xlsx-yaz/m);
  });
  it("pano ucu PII kolonu seçmez, satır tavanı yok, en çok 60 sn önbellek", () => {
    const api = oku("../api/admin/teshis-pano.js");
    expect(api).not.toMatch(/telefon|email|e_posta|adres|\bip\b/i);
    expect(api).toContain('"private, max-age=60"');
    expect(api).toContain(".range(i, i + 999)");
  });
  it("veri kaynağı olmayan sekme örnek veri göstermez", () => {
    const p = oku("./RaporPaneli.jsx");
    expect(p).toContain("Henüz veri yok.");
    for (const k of ["genel", "teshis", "servis", "icerik", "pazar", "yerinde", "uyelik", "sosyal"]) expect(p).toContain(`["${k}", "`);
  });
  it("üye sayı ucu yalnız count döner, satır okumaz, 1 saat önbellekli", () => {
    const u = oku("../api/istatistik/uyeler.js");
    expect(u.match(/\.select\("[^"]*"/g)).toEqual(['.select("id"', '.select("id"', '.select("id"']);
    expect(u.match(/head: true/g)).toHaveLength(3);
    expect(u).toContain('"public, max-age=3600"');
    expect(u).toContain("withRateLimit");
  });
});
