// src/blog-video.test.js — `scripts/blog-video.mjs` kapısı (PAZ föyü, 13 Eyl 2026: Shorts gömme).
//
// NE KORUYOR:
//  ① Facade: ilk HTML'de oynatıcı etiketi yok (YK #78 — tıklamadan üçüncü taraf isteği gitmez).
//  ② Yer: blok gövdedeki İLK <h2>'nin hemen üstünde; adım paragrafı kalıbına girmiyor.
//  ③ Her video yalnız kendi sayfasında — kardeş sayfaya ve iki sayfaya birden girmez.
//  ④ Frontmatter'daki gerçek kayıtlar denetimden geçiyor (CI build'den önce yakalar).
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sureMss, videoDenetimi, videoBlok, videoEkle, videoLd, VIDEO_JS } from "../scripts/blog-video.mjs";

const ornek = {
  slug: "ornek-yazi",
  html: "<p>Giriş</p><h2>İlk bölüm</h2><p><strong class=\"lead\">1. Adım</strong></p><h2>İkinci</h2>",
  video: {
    youtubeId: "XdW4u_2MBcQ",
    title: "Siemens bulaşık makinesi E15 hatası",
    description: "Açıklama",
    uploadDate: "2026-09-13T05:16:54Z",
    duration: "PT1M2S",
  },
};

describe("sureMss", () => {
  it("ISO süreyi m:ss yazar", () => {
    expect(sureMss("PT1M2S")).toBe("1:02");
    expect(sureMss("PT1M10S")).toBe("1:10");
    expect(sureMss("PT45S")).toBe("0:45");
    expect(sureMss("PT2M")).toBe("2:00");
  });
  it("bozuk süreyi reddeder", () => {
    expect(sureMss("PT")).toBeNull();
    expect(sureMss("1:02")).toBeNull();
    expect(sureMss("PT1H2M")).toBeNull();
    expect(sureMss("PT1M75S")).toBeNull();
  });
});

describe("videoBlok / videoEkle", () => {
  it("blok ilk <h2>'nin hemen üstüne girer, girişten sonra", () => {
    const html = videoEkle(ornek.html, ornek);
    const blok = html.indexOf('<figure class="yt-video">');
    expect(blok).toBe("<p>Giriş</p>".length);
    expect(html.indexOf("<h2>İlk bölüm</h2>")).toBe(blok + videoBlok(ornek).length);
    expect(html.match(/yt-video/g)).toHaveLength(1);
  });
  it("ilk HTML'de oynatıcı yok, yalnız kapak; betik de etiket dizesi taşımıyor", () => {
    const html = videoEkle(ornek.html, ornek) + VIDEO_JS(ornek.slug);
    expect(html).not.toMatch(/<iframe/i);
    expect(videoBlok(ornek)).toContain("https://i.ytimg.com/vi/XdW4u_2MBcQ/hqdefault.jpg");
    expect(videoBlok(ornek)).toContain('loading="lazy"');
    expect(videoBlok(ornek)).not.toMatch(/youtube(-nocookie)?\.com/);
  });
  it("erişilebilir buton + föydeki alt yazı birebir", () => {
    const b = videoBlok(ornek);
    expect(b).toContain('<button type="button"');
    expect(b).toContain('aria-label="Videoyu oynat: Siemens bulaşık makinesi E15 hatası"');
    expect(b).toContain("<figcaption>Kısa video: Siemens bulaşık makinesi E15 hatası · 1:02 · Oynatınca YouTube'dan yüklenir.</figcaption>");
  });
  it("blok adım paragrafı kalıbına girmez", () => {
    expect(videoBlok(ornek)).not.toMatch(/<p><strong[^>]*>\d+\./);
    expect(videoBlok(ornek)).not.toMatch(/<h2|<ol|<li/);
  });
  it("video alanı yoksa HTML aynen döner", () => {
    const p = { ...ornek, video: undefined };
    expect(videoEkle(p.html, p)).toBe(p.html);
    expect(videoLd(p)).toBeNull();
  });
});

// VIDEO_JS'i gerçekten koşturur: sahte document/window ile tıklama → oynatıcı kurulumu ve
// sayfa gizlenince duraklatma (13 Eyl 18:1x hatası: YouTube'a geçince iki ses üst üste).
function betikOrtami() {
  const dinleyici = { document: {}, window: {} };
  const iframeler = [];
  const olaylar = [];
  const document = {
    hidden: false,
    addEventListener: (ad, fn) => { dinleyici.document[ad] = fn; },
    createElement: (etiket) => {
      const attr = {};
      const el = {
        etiket, attr, title: "", mesajlar: [],
        setAttribute: (k, v) => { attr[k] = v; },
        contentWindow: { postMessage: (veri, hedef) => el.mesajlar.push([veri, hedef]) },
      };
      return el;
    },
    querySelectorAll: (sec) => (sec === "iframe[data-yt-oynatici]" ? iframeler.filter((f) => "data-yt-oynatici" in f.attr) : []),
  };
  const window = {
    addEventListener: (ad, fn) => { dinleyici.window[ad] = fn; },
    va: (...a) => olaylar.push(["va", ...a]),
    gtag: (...a) => olaylar.push(["gtag", ...a]),
  };
  const location = { origin: "https://www.benservis.com" };
  const govde = VIDEO_JS("ornek-yazi").replace(/^<script>/, "").replace(/<\/script>$/, "");
  new Function("document", "window", "location", govde)(document, window, location);
  const buton = (id) => ({
    getAttribute: (k) => ({ "data-yt": id, "data-yt-baslik": "Başlık" })[k],
    parentNode: { replaceChild: (yeni) => iframeler.push(yeni) },
  });
  const tikla = (id) => dinleyici.document.click({ target: { closest: (s) => (s === "button[data-yt]" ? buton(id) : null) } });
  return { document, dinleyici, iframeler, olaylar, tikla };
}
const PAUSE = ['{"event":"command","func":"pauseVideo","args":""}', "https://www.youtube-nocookie.com"];

describe("VIDEO_JS davranışı", () => {
  it("tıklama: enablejsapi + origin'li nocookie oynatıcı kurar, olay gönderir", () => {
    const o = betikOrtami();
    o.tikla("XdW4u_2MBcQ");
    expect(o.iframeler).toHaveLength(1);
    const src = new URL(o.iframeler[0].src);
    expect(src.origin + src.pathname).toBe("https://www.youtube-nocookie.com/embed/XdW4u_2MBcQ");
    expect(Object.fromEntries(src.searchParams)).toEqual({
      autoplay: "1", rel: "0", playsinline: "1", enablejsapi: "1", origin: "https://www.benservis.com",
    });
    expect(o.iframeler[0].attr.allow).toBe("autoplay; encrypted-media; picture-in-picture");
    expect("allowfullscreen" in o.iframeler[0].attr).toBe(true);
    expect(o.olaylar.map((x) => x[0])).toEqual(["va", "gtag"]);
  });
  it("geçersiz id ile oynatıcı kurulmaz", () => {
    const o = betikOrtami();
    o.tikla("kisa");
    expect(o.iframeler).toHaveLength(0);
  });
  it("sayfa gizlenince her oynatıcıya pauseVideo gider; görünür olunca komut yok", () => {
    const o = betikOrtami();
    o.tikla("XdW4u_2MBcQ");
    o.tikla("pzY0f0YwcW0");
    o.dinleyici.document.visibilitychange();
    expect(o.iframeler.every((f) => f.mesajlar.length === 0)).toBe(true);
    o.document.hidden = true;
    o.dinleyici.document.visibilitychange();
    for (const f of o.iframeler) expect(f.mesajlar).toEqual([PAUSE]);
  });
  it("pagehide da duraklatır (mobil uygulama geçişi)", () => {
    const o = betikOrtami();
    o.tikla("XdW4u_2MBcQ");
    o.dinleyici.window.pagehide();
    expect(o.iframeler[0].mesajlar).toEqual([PAUSE]);
  });
  it("blur dinlenmez (iframe'e tıklamak blur'lar, video başlarken durmasın)", () => {
    const o = betikOrtami();
    expect(Object.keys(o.dinleyici.window)).toEqual(["pagehide"]);
    expect(VIDEO_JS("x")).not.toMatch(/blur/);
  });
});

describe("videoLd", () => {
  it("VideoObject alanları föy şemasıyla aynı", () => {
    expect(videoLd(ornek)).toEqual({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Siemens bulaşık makinesi E15 hatası",
      description: "Açıklama",
      thumbnailUrl: "https://i.ytimg.com/vi/XdW4u_2MBcQ/hqdefault.jpg",
      uploadDate: "2026-09-13T05:16:54Z",
      duration: "PT1M2S",
      embedUrl: "https://www.youtube-nocookie.com/embed/XdW4u_2MBcQ",
      contentUrl: "https://www.youtube.com/shorts/XdW4u_2MBcQ",
    });
  });
});

describe("videoDenetimi", () => {
  it("geçerli kayıt temiz geçer", () => {
    expect(videoDenetimi([ornek, { slug: "videosuz", html: "<h2>x</h2>" }])).toEqual([]);
  });
  it("aynı video iki sayfaya giremez", () => {
    const s = videoDenetimi([ornek, { ...ornek, slug: "kardes-sayfa" }]);
    expect(s.join("\n")).toMatch(/kardes-sayfa: XdW4u_2MBcQ zaten ornek-yazi/);
  });
  it("bozuk alanları ve <h2>'siz gövdeyi yakalar", () => {
    const s = videoDenetimi([{ slug: "bozuk", html: "<p>h2 yok</p>", video: { youtubeId: "kisa", uploadDate: "2026-09-13", duration: "1:02" } }]);
    expect(s).toHaveLength(6);
  });
});

describe("gerçek içerik (content/blog)", () => {
  const dizin = path.resolve(__dirname, "..", "content", "blog");
  const posts = fs.readdirSync(dizin).filter((f) => f.endsWith(".md")).map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(dizin, f), "utf8"));
    return { ...data, html: content.replace(/^## .*$/gm, "<h2>x</h2>") };
  });
  const videolu = posts.filter((p) => p.video);

  it("föylerdeki 9 eşleme birebir, başka sayfada video yok", () => {
    const esleme = Object.fromEntries(videolu.map((p) => [p.slug, p.video.youtubeId]));
    expect(esleme).toEqual({
      "samsung-klima-cf-hatasi": "5lVkaoLa5DI",
      "siemens-bulasik-makinesi-e15-hatasi": "XdW4u_2MBcQ",
      "bosch-bulasik-makinesi-sembolleri-ve-anlamlari": "pzY0f0YwcW0",
      "arcelik-kurutma-makinesi-sembolleri-ve-anlamlari": "Q_BaXMLz0mE",
      "bosch-camasir-makinesi-hata-kodlari": "0uQV4Y_hjXY",
      "kurutma-makinesi-kurutmuyor": "41pY0h2bfNM",
      "firin-isinmiyor": "9mtHhzREmfI",
      "supurge-calismiyor": "h851xyTv5e8",
      "camasir-makinesi-kokuyor": "lqjEgj488SY",
    });
  });
  it("tüm video kayıtları denetimden geçer", () => {
    expect(videoDenetimi(posts)).toEqual([]);
  });
});
