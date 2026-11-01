import { describe, it, expect } from "vitest";
import { kaynakUrlleri, kaynakSatiri } from "../scripts/yazi-kaynak.mjs";

const yazi = (yorum) => `---\ntitle: "x"\n${yorum}\n---\n\nGövde https://govde.example/a\n`;

describe("yazı kaynak satırı", () => {
  it("yorumlardan doğrudan PDF alır, elenen satırı ve ürün sayfasını almaz", () => {
    const u = kaynakUrlleri(yazi("# Kaynak (#88): https://a.com/k.pdf, md5 ab\n# BİLEREK YAZILMAYANLAR: https://b.com/x.pdf\n# https://c.com/y.PDF.\n# Zincir: https://d.com/urun"));
    expect(u).toEqual(["https://a.com/k.pdf", "https://c.com/y.PDF"]);
  });
  it("kendi alan adı ve tekrar elenir, en çok 5", () => {
    expect(kaynakUrlleri(yazi("# https://www.benservis.com/x.pdf https://a.com/1.pdf https://a.com/1.pdf"))).toEqual(["https://a.com/1.pdf"]);
    expect(kaynakUrlleri(yazi("# " + [1, 2, 3, 4, 5, 6, 7].map((i) => `https://a.com/${i}.pdf`).join(" ")))).toHaveLength(5);
  });
  it("kaynak yoksa satır basılmaz", () => {
    expect(kaynakUrlleri(yazi("# Provenans: not"))).toEqual([]);
    expect(kaynakSatiri([])).toBe("");
  });
  it("satır alan adını gösterir, md5 ya da iç not taşımaz", () => {
    const s = kaynakSatiri(["https://www.a.com/1.pdf", "https://a.com/2.pdf"]);
    expect(s).toContain(">a.com</a> · <a");
    expect(s).toContain(">a.com (2)</a>");
    expect(s).toContain('rel="nofollow noopener noreferrer"');
  });
});
