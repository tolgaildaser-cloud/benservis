// src/ic-baglanti.test.js — iç bağlantı nofollow kilidi (21 Eki 2026, Tolga; #179 istisnası).
// Query string taşıyan iç bağlantı rel="nofollow" taşır; parametresiz iç bağlantı taşımaz; dış bağlantıya
// dokunulmaz; href ve mevcut rel aynen kalır. Statik HTML (build son adımı) + React kaynakları.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { nofollowEkle, nofollowSay, etiketeNofollow } from "../scripts/ic-baglanti-nofollow.mjs";
import { icRel } from "./ic-baglanti.js";

describe("statik HTML son işlemi", () => {
  it("parametreli iç bağlantıya nofollow ekler, href değişmez", () => {
    const a = '<a href="/?cihaz=kombi&amp;ariza=su-kacagi&amp;k=blog-x" class="kopru">Teşhis</a>';
    const b = nofollowEkle(a);
    expect(b).toBe('<a rel="nofollow" href="/?cihaz=kombi&amp;ariza=su-kacagi&amp;k=blog-x" class="kopru">Teşhis</a>');
    expect(nofollowEkle('<a href="/pazar?kategori=yedek-parca">x</a>')).toContain('rel="nofollow"');
    expect(nofollowEkle('<a href="https://www.benservis.com/?servis=abc&kaynak=blog">x</a>')).toContain('rel="nofollow"');
  });
  it("mevcut rel korunur, nofollow eklenir; zaten varsa tekrar yazılmaz", () => {
    expect(etiketeNofollow('<a href="/?k=x" rel="noopener" target="_blank">')).toBe('<a href="/?k=x" rel="noopener nofollow" target="_blank">');
    const v = '<a href="/?k=x" rel="nofollow">';
    expect(etiketeNofollow(v)).toBe(v);
  });
  it("parametresiz iç bağlantıya ve dış bağlantıya dokunmaz", () => {
    for (const a of ['<a href="/blog/x/">', '<a href="/pazar">', '<a href="/urun/1">', '<a href="/tamir/kombi/">',
      '<a href="/blog/x/#adim">', '<a href="https://www.youtube.com/watch?v=1">', '<a href="//cdn.x/?a=1">', '<a href="mailto:a@b.c?subject=x">'])
      expect(etiketeNofollow(a)).toBe(a);
  });
  it("sayım: işlemden sonra nofollow'suz parametreli 0, nofollow'lu parametresiz 0", () => {
    const html = '<a href="/?a=1">a</a><a href="/pazar?b=2" rel="noopener">b</a><a href="/blog/x/">c</a><a href="https://x.com/?q=1">d</a>';
    expect(nofollowSay(html)).toEqual({ qsToplam: 2, qsNofollowsuz: 2, duzToplam: 1, duzNofollow: 0 });
    expect(nofollowSay(nofollowEkle(html))).toEqual({ qsToplam: 2, qsNofollowsuz: 0, duzToplam: 1, duzNofollow: 0 });
  });
  it("build-blog son adımda uygular ve kapıyla durdurur", () => {
    const k = fs.readFileSync("scripts/build-blog.mjs", "utf8");
    expect(k).toContain("nofollowEkle(eski)");
    expect(k).toMatch(/NOFOLLOW KAPISI[\s\S]*process\.exit\(1\)/);
  });
});

describe("React", () => {
  it("icRel: parametreli iç → nofollow, mevcut rel korunur, diğerleri dokunulmaz", () => {
    expect(icRel("/pazar?kategori=yedek-parca")).toBe("nofollow");
    expect(icRel("/?k=x", "noopener")).toBe("noopener nofollow");
    expect(icRel("/pazar")).toBe(undefined);
    expect(icRel("/ikinci-el", "noopener")).toBe("noopener");
    expect(icRel("https://x.com/?a=1")).toBe(undefined);
  });
  it("src/*.jsx: literal parametreli iç href taşıyan her <a> rel nofollow taşır, parametresizler taşımaz", () => {
    const ihlal = [];
    for (const f of fs.readdirSync("src").filter((n) => n.endsWith(".jsx"))) {
      const s = fs.readFileSync(path.join("src", f), "utf8");
      for (const m of s.matchAll(/<a\b[\s\S]*?>/g)) {
        const t = m[0];
        const h = t.match(/href=(?:"([^"]*)"|\{`([^`]*)`\})/);
        if (!h) continue;
        const href = h[1] ?? h[2];
        if (!href.startsWith("/") || href.startsWith("//")) continue;
        const nf = /rel="[^"]*nofollow/.test(t);
        if (href.includes("?") && !nf) ihlal.push(`${f}: ${href} nofollow'suz`);
        if (!href.includes("?") && nf) ihlal.push(`${f}: ${href} gereksiz nofollow`);
      }
    }
    expect(ihlal).toEqual([]);
  });
});
