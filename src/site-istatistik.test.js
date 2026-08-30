// src/site-istatistik.test.js — YK Kararı #112 (30 Ağu 2026) kalıcı kapı.
//
// NEDEN VAR: `src/site-istatistik.json` ÜRETİLMİŞ bir dosyadır (`scripts/site-istatistik.mjs`)
// ama üretimi hiçbir şeye bağlı değildi — `npm run build` script'i çağırmıyor, içerik
// eklenince sayaç kendiliğinden koşmuyordu. Yazı eklendiğinde vitrin sayacı SESSİZCE
// geride kalıyordu: build yeşil, test yeşil, uyarı yok. #110'la birebir aynı
// "sessiz düşüş" sınıfı. Üç kez bayat yakalandı (son ölçüm: blog 210↔216, rehber 126↔127).
//
// KAPI NE YAPAR: sayma ölçütünü YENİDEN KOŞAR ve commit'li json ile karşılaştırır.
// ⚠️ Ölçüt burada YENİDEN YAZILMAZ, script'ten İTHAL EDİLİR (`icerikSayilari`) — iki yerde
//    iki farklı sayım doğarsa kapı yanlış şeyi korur. Script'in kendi yorumu da bunu
//    söylüyor: "build-blog'un rehberDenetimi() sayacıyla AYNI ölçüt".
//
// KAPSAM — yalnız KENDİ ürettiğimiz içerik: `blog` + `rehber`.
// ⛔ DIŞARIDA: servis · puanli · serbis · il · ilce · tarife · marka · tamir · kilavuz · cihaz.
//    Bunlar dış veriden / ayrı tablolardan geliyor; burada dondurmak, veri tazelendiğinde
//    ilgisiz bir testi kırardı. Kapsam kararı YK'nın (#112).
//
// ⛔ BU KAPI BUILD'E BAĞLANMADI: #112 `site-istatistik.mjs`'i `npm run build`'e eklemeyi
//    açıkça reddetti (build'i içerik yazma işine bağlar, `test.yml`'nin bilerek dar
//    tuttuğu kapsamı genişletir). Kapı `.github/workflows/test.yml`in zaten her PR'da ve
//    main'e her girişte koştuğu `npm test` üzerinden çalışır (#67) — yeni iş akışı yok.
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { icerikSayilari } from "../scripts/site-istatistik.mjs";

const NASIL_DUZELTILIR =
  "\n\n→ DÜZELTME: `node scripts/site-istatistik.mjs` koş ve `src/site-istatistik.json`'ı commit'le." +
  "\n  (Sayıyı ELLE düzeltme — dosya üretilmiştir; elle düzeltmek #112'nin kapattığı döngüyü yeniden açar.)";

const kayitli = JSON.parse(readFileSync(new URL("./site-istatistik.json", import.meta.url), "utf8"));
const olculen = icerikSayilari();

describe("vitrin sayacı bayat değil (YK #112)", () => {
  it("ölçüt gerçekten koştu — sayım boş dönmedi", () => {
    // Kapı sessizce "0 = 0" durumuna düşerse hiçbir şeyi korumaz; önce ölçümün
    // kendisinin anlamlı olduğu doğrulanır.
    expect(olculen.blog, "content/blog altında hiç yazı sayılmadı — kapı yanlış yeri ölçüyor").toBeGreaterThan(0);
    expect(olculen.rehber, "hiç rehber sayılmadı — `guide:` frontmatter ölçütü taşınmış olabilir").toBeGreaterThan(0);
  });

  it("blog sayısı commit'li json ile aynı", () => {
    expect(
      kayitli.blog,
      `VİTRİN SAYACI BAYAT: content/blog'da ${olculen.blog} yazı var, json ${kayitli.blog} diyor.${NASIL_DUZELTILIR}`,
    ).toBe(olculen.blog);
  });

  it("rehber sayısı commit'li json ile aynı", () => {
    expect(
      kayitli.rehber,
      `VİTRİN SAYACI BAYAT: ${olculen.rehber} rehber (\`guide:\` frontmatter'lı yazı) var, json ${kayitli.rehber} diyor.${NASIL_DUZELTILIR}`,
    ).toBe(olculen.rehber);
  });

  it("rehber sayısı blog sayısını aşamaz (ölçüt tutarlılığı)", () => {
    // Rehber, blog yazılarının bir ALT KÜMESİ (`guide:` frontmatter'lı olanlar).
    // Aşarsa ölçüt iki farklı kümeyi sayıyor demektir — kapının kendisi bozulmuştur.
    expect(olculen.rehber).toBeLessThanOrEqual(olculen.blog);
  });

  it("kapı yalnız kendi içeriğimizi dondurur — dış veri alanları serbest kalır", () => {
    // #112 kapsamı: dış veriden gelen alanlar bu testte DONDURULMAZ. Bu test o kararı
    // kayıt altına alır; biri kapsamı sessizce genişletirse burada tartışılır.
    for (const alan of ["servis", "puanli", "serbis", "il", "ilce", "tarife", "marka", "tamir", "kilavuz", "cihaz"]) {
      expect(kayitli, `json'da \`${alan}\` alanı kaybolmuş — üretici değişmiş olabilir`).toHaveProperty(alan);
    }
    // Ölçüt fonksiyonu bilerek YALNIZ blog + rehber döndürür.
    expect(Object.keys(olculen).sort()).toEqual(["blog", "rehber"]);
  });

  it("script import edilince json'a YAZMAZ (kapı kendini geçersiz kılmasın)", () => {
    // Bu dosyanın en üstünde script zaten import edildi. Import yazma yapsaydı json
    // her koşuda tazelenir ve kapı HİÇBİR ZAMAN kırılmazdı — sessizce işe yaramaz olurdu.
    const src = readFileSync(new URL("../scripts/site-istatistik.mjs", import.meta.url), "utf8");
    const kod = src.split("\n").filter((s) => !s.trim().startsWith("//")).join("\n");
    const yazmaSayisi = (kod.match(/writeFileSync/g) || []).length;
    expect(yazmaSayisi, "writeFileSync sayısı beklenenden farklı — yazma yolu değişmiş").toBe(1);
    expect(
      /import\.meta\.url === pathToFileURL\(process\.argv\[1\]\)\.href/.test(kod),
      "doğrudan-çalıştırma koruması kalkmış: import yazma tetikliyor, kapı geçersizleşir",
    ).toBe(true);
  });
});
