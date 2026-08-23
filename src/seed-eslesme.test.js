// src/seed-eslesme.test.js — YK Kararı #38 (4 Ağu 2026) regresyon kilidi.
//
// Bu testler İKİ şeyi birden korur:
//   ① BUGÜNKÜ 45 satırlık SEED'de ölçülen iki gerçek yanlış-fiyat vakası bir daha dönmesin.
//   ② SATIR BÖLÜNDÜKTEN sonra (aynı anahtar kelimeyi taşıyan iki satır) davranış hâlâ
//      belirleyici olsun — sessizce "dizide önce gelen" seçilmesin.
import { describe, it, expect } from "vitest";
import { seedSatirBul, seedEslestir, seedBeklenen, satirBeklenen } from "./seed-eslesme.js";
import { SEED } from "./tarife-seed.js";
import { rehberBul, REHBERLER } from "./onarim-rehberleri.js";

// Bölme SONRASI hipotetik SEED (YK #38 üç bölme). Bantlar temsilîdir — test davranışı
// ölçer, fiyatı değil. Gerçek bölme Supabase'de /tarife onayıyla yapılır.
const SEED_BOLUNMUS = {
  ...SEED,
  "Televizyon / Monitör": [
    ["Backlight LED bar", 200, 1500, 700],
    ["Besleme kartı", 400, 1500, 500],
    ["Anakart tamiri", 500, 3000, 700],
    ["Anakart değişimi", 2000, 6000, 900],
    ["Monitör paneli", 1000, 6000, 900],
    ["TV paneli", 3000, 20000, 1500],
  ],
  "Su Sebili / Arıtma": [
    ["Tekli filtre", 300, 750, 300],
    ["Tam filtre seti", 2100, 3500, 1200],
    ["Pompa/membran", 600, 1800, 600],
  ],
};

describe("① tam eşleşme — doğru satır", () => {
  it("SEED adı birebir verilirse o satır seçilir", () => {
    const r = seedSatirBul(SEED["Buzdolabı"], "Gaz kaçağı/dolum");
    expect(r.durum).toBe("tam");
    expect(r.row[0]).toBe("Gaz kaçağı/dolum");
  });

  it("AI ': parça…' eki ve harf büyüklüğü tam eşleşmeyi bozmaz", () => {
    const r = seedSatirBul(SEED["Klima"], "KOMPRESÖR: parça 2500-6000 TL");
    expect(r.durum).toBe("tam");
    expect(r.row[0]).toBe("Kompresör");
  });

  it("bölme sonrası tam ad doğru ALT satıra gider (ikisi de 'Anakart' taşısa bile)", () => {
    const tamir = seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "Anakart tamiri");
    const degisim = seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "Anakart değişimi");
    expect(tamir.row[0]).toBe("Anakart tamiri");
    expect(degisim.row[0]).toBe("Anakart değişimi");
    expect(seedBeklenen("Televizyon / Monitör", "Anakart değişimi", "orta", SEED_BOLUNMUS))
      .toBeGreaterThan(seedBeklenen("Televizyon / Monitör", "Anakart tamiri", "orta", SEED_BOLUNMUS));
  });
});

describe("② iki aday — belirleyici davranış", () => {
  // ⚠️ AŞAĞIDAKİ İKİ TEST CANLI `SEED`'E BAKAR (dosyanın gerisi `SEED_BOLUNMUS` fikstürünü
  // kullanır). Bu bilinçli: bu testlerin var oluş sebebi, eşleşmenin GERÇEK tarife verisinde
  // doğru davrandığını doğrulamak — fikstüre taşınsalar o güvence kaybolurdu.
  //
  // Ama satır ADINA çakmak pahalıya patladı: `fa0e46b` (9 Ağu, "YK #49 kalem adları") dört
  // adı birden değiştirdi, `f68f87d` (13 Ağu) laptop satırını ikiye böldü → testler
  // 9-15 Ağu arası ALTI GÜN kırık kaldı. Eşleşme mantığı hiç bozulmamıştı; kırık test
  // paketi "normal" hale geldiği için o pencerede GERÇEK bir regresyon da görünmezdi.
  //
  // Çözüm: ada değil DAVRANIŞA çak. İddia iki parçalı — (1) eşleşen satır, açgözlü
  // rakibinden FARKLI olmalı, (2) ayırt edici kelimeyi taşımalı. Tarife paketi satırı
  // yeniden adlandırıp bölebilir; kelime kökü durdukça test yaşar. Satır gerçekten
  // KAYBOLURSA test yine kırılır — istenen de budur (o zaman haber vermesi gerekir).
  const satirAdi = (kategori, sorgu) => {
    const r = seedSatirBul(SEED[kategori], sorgu);
    expect(r.row, `"${sorgu}" hiçbir satıra eşleşmedi (satır SEED'den kalkmış olabilir)`).not.toBe(null);
    return r.row[0];
  };

  // Gerçek hata #1: "Aspiratör …" ile başlayan her ad, dizide önce gelen motor satırına
  // gidiyordu. Korunan davranış: en SPESİFİK satır kazanır, açgözlü ilk satır DEĞİL.
  it("en SPESİFİK satır kazanır: aspiratör lamba/kart → motor satırı DEĞİL", () => {
    const motor = satirAdi("Fırın / Ocak / Aspiratör", "Aspiratör motoru arızası");
    expect(motor).toMatch(/motor/i);
    for (const sorgu of ["Aspiratör lambası yanmıyor", "Aspiratör kartı arızası"]) {
      const bulunan = satirAdi("Fırın / Ocak / Aspiratör", sorgu);
      expect(bulunan, `"${sorgu}" açgözlü motor satırına düştü`).not.toBe(motor);
      expect(bulunan).toMatch(/lamba|anahtar|kart/i);
    }
  });

  // Gerçek hata #2: "Ekran …" adları hep ekran kartı satırına düşüyordu. 13 Ağu bölmesinden
  // sonra ayrışma daha da keskin: menteşe artık kendi satırında.
  it("ekran kartı ile laptop ekranı ayrışır", () => {
    const gpu = satirAdi("Bilgisayar / Yazıcı", "Ekran kartı arızası");
    const mentese = satirAdi("Bilgisayar / Yazıcı", "Menteşe kırılması");
    expect(gpu, "menteşe sorgusu ekran kartı satırına düştü").not.toBe(mentese);
    expect(gpu).toMatch(/ekran kartı|gpu/i);
    expect(mentese).toMatch(/menteşe/i);
  });

  it("GERÇEK beraberlikte sessizce ilk satır SEÇİLMEZ → belirsiz + fiyat yok", () => {
    // "Anakart" tek başına: bölme sonrası iki satır da aynı skoru alır.
    const r = seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "Anakart arızası");
    expect(r.durum).toBe("belirsiz");
    expect(r.row).toBe(null);
    expect(r.adaylar).toEqual(["Anakart tamiri", "Anakart değişimi"]);
    expect(seedEslestir("Televizyon / Monitör", "Anakart arızası", "orta", SEED_BOLUNMUS).beklenen)
      .toBe(null);
  });

  it("beraberlik kararı SIRA-BAĞIMSIZ (satırlar ters çevrilse de aynı sonuç)", () => {
    const ters = [...SEED_BOLUNMUS["Televizyon / Monitör"]].reverse();
    expect(seedSatirBul(ters, "Anakart arızası").durum).toBe("belirsiz");
    expect(seedSatirBul(ters, "Anakart tamiri").row[0]).toBe("Anakart tamiri");
  });

  it("yazıcı kafa temizlik/değişim bölmesi: tam ad ayrışır, çıplak ad belirsiz kalır", () => {
    const rows = [
      ["Yazıcı kafa temizliği", 0, 400, 500],
      ["Yazıcı kafa değişimi", 2000, 5000, 500],
    ];
    expect(seedSatirBul(rows, "Yazıcı kafa temizliği").durum).toBe("tam");
    expect(seedSatirBul(rows, "Yazıcı kafası tıkalı").durum).toBe("belirsiz");
  });

  it("işlem kelimesi parça kimliğini EZMEZ: 'TV paneli değişimi' → anakart satırına gitmez", () => {
    // "değişimi" 8 harf; ham uzunluk skoru kullanılsaydı "Anakart değişimi" ile berabere kalırdı.
    expect(seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "TV paneli değişimi").row[0])
      .toBe("TV paneli");
  });

  it("işlem kelimesi beraberliği BOZAR (ayırt edici gücü sıfır değil)", () => {
    expect(seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "Anakart değişimi gerekiyor").row[0])
      .toBe("Anakart değişimi");
    expect(seedSatirBul(SEED_BOLUNMUS["Televizyon / Monitör"], "Anakart tamiri yeterli").row[0])
      .toBe("Anakart tamiri");
  });

  it("kelime SINIRI: 'Pompa/membran tamiri' → 'Tam filtre seti' satırına TAKILMAZ", () => {
    // Eski `includes` kuralı "tamiri" içindeki "tam" yüzünden yanlış satıra bağlıyordu.
    const r = seedSatirBul(SEED_BOLUNMUS["Su Sebili / Arıtma"], "Pompa/membran tamiri");
    expect(r.row[0]).toBe("Pompa/membran");
  });
});

describe("③ eşleşme yok — güvenli davranış", () => {
  it("SEED'de karşılığı olmayan arıza → null (AI tahminine düşülür)", () => {
    expect(seedEslestir("Buzdolabı", "Kapı contası yıpranmış", "orta").beklenen).toBe(null);
    expect(seedSatirBul(SEED["Buzdolabı"], "Kapı contası yıpranmış").durum).toBe("yok");
  });

  it("boş / geçersiz girdi → null, patlamaz", () => {
    for (const v of ["", null, undefined, "   ", ":::"]) {
      expect(seedEslestir("Buzdolabı", v, "orta").beklenen).toBe(null);
    }
    expect(seedEslestir("Olmayan Cihaz", "Anakart", "orta").beklenen).toBe(null);
  });
});

describe("kademe hesabı (davranış değişmedi)", () => {
  const row = ["Test", 1000, 3000, 500];
  it("premium=üst bant, ekonomik=alt bant, orta=orta nokta + işçilik", () => {
    expect(satirBeklenen(row, "premium")).toBe(3500);
    expect(satirBeklenen(row, "ekonomik")).toBe(1500);
    expect(satirBeklenen(row, "orta")).toBe(2500);
  });
});

describe("onarim-rehberleri: SEED adlarına bağlılık", () => {
  // rehberBul() SEED adlarını değil KENDİ `ara` anahtar listesini kullanır ve "en uzun
  // anahtar kazanır" kuralı zaten belirleyicidir; eşleşme yoksa null → buton gizlenir.
  // YK #38'in üç bölme satırı (TV anakart · yazıcı kafa · su arıtma filtre) rehberi OLMAYAN
  // cihazlara ait → bölme rehber eşleşmesini etkilemez. Bu testler o zemini kilitler.
  it("bölünecek üç kalemin cihazlarında rehber yok → yeni adlar da null döner", () => {
    expect(rehberBul("Televizyon / Monitör", "Anakart tamiri")).toBe(null);
    expect(rehberBul("Bilgisayar / Yazıcı", "Yazıcı kafa temizliği")).toBe(null);
    expect(rehberBul("Su Sebili / Arıtma", "Tam filtre seti")).toBe(null);
  });

  // 🔴 22 Ağu 2026 — BU TESTİN BEKLENTİSİ TERSİNE ÇEVRİLDİ (YK #31 taraması).
  // Eskiden `rehberBul("Bulaşık Makinesi","Tahliye pompası tıkalı")` çıktısının
  // iFixit'in "Tahliye pompası değişimi" (Moderate, 8 adım) olmasını ŞART koşuyordu —
  // yani testin kendisi YK #31 ihlalini KİLİTLİYORDU. Testin adı zaten "kendi rehberimiz
  // önceliklidir" diyordu; iddiası adıyla çelişiyordu. Doğrusu: "pompa tıkalı" diyen
  // kullanıcının işi filtre/pompa yuvası temizliğidir, pompa DEĞİŞİMİ değil.
  //
  // ⚠️ Not: "en uzun anahtar kazanır" kuralı yalnız AYNI havuz içinde çalışır.
  // Havuzlar arasında sıralama da uzunluk da etkisiz — `rehberBul` koşulsuz
  // `bizim || disari` döndürür. Test bu ikisini artık ayrı ayrı ölçüyor.
  it("kendi rehberimiz iFixit'i her hâlükârda yener (havuz önceliği)", () => {
    // iFixit'in anahtarı ("tahliye pompa", 13 hane) bizimkinden ("tahliye", 7) UZUN.
    // Buna rağmen bizim kazanmalı — uzunluk havuzlar arasında hükümsüz.
    const r = rehberBul("Bulaşık Makinesi", "Tahliye pompası tıkalı");
    expect(r.kendi).toBe(true);
    expect(r.baslik).toBe("Tahliye tıkanıklığını açma");
    expect(rehberBul("Bulaşık Makinesi", "E22 hatası — iç filtre tıkalı").kendi).toBe(true);
  });

  // 23 Ağu (YK #31 seçenek c): asıl güvence — haritada TEK BİR iFixit kaydı kalmamalı.
  // 20 parça değişimi / söküm kaydı kendi Türkçe yazılarımızla değiştirildi. Bu test,
  // ileride yeniden bir dış söküm rehberi eklenirse build'i kırar.
  it("YK #31: haritada dış söküm rehberi YOK, hepsi kendi yazımız", () => {
    const hepsi = Object.values(REHBERLER).flat();
    const disari = hepsi.filter((k) => !k.rehber.kendi);
    expect(disari).toEqual([]);
    expect(hepsi.length).toBeGreaterThan(20);
  });

  // YK #31 taramasının üç onaylı ihlali — bir daha açılırsa build kırılsın.
  it("YK #31: geniş belirti kelimeleri söküm rehberine düşmez", () => {
    // SEED'de Süpürge'nin BİRİNCİ arıza adı birebir "Motor" → beklenen yol, istisna değil.
    expect(rehberBul("Süpürge", "Motor").kendi).toBe(true);
    expect(rehberBul("Süpürge", "Motor arızası").kendi).toBe(true);
    // Gazlı ocak: "yanmıyor" hiçbir dış alev/karışım ayarı rehberine bağlanamaz.
    // 23 Ağu (YK #31 seçenek c): artık `null` DEĞİL — kendi yazımıza bağlandı.
    // Beklenti yükseltildi: rehber var VE bizim olmak zorunda.
    expect(rehberBul("Fırın / Ocak / Aspiratör", "Ocak yanmıyor").kendi).toBe(true);
    expect(rehberBul("Fırın / Ocak / Aspiratör", "Ateşleme bujisi").kendi).toBe(true);
    // Bulaşık ↔ çamaşır asimetrisi: aynı belirti iki cihazda da BİZE gelmeli.
    expect(rehberBul("Bulaşık Makinesi", "Su atmıyor").kendi).toBe(true);
    expect(rehberBul("Çamaşır Makinesi", "Su atmıyor").kendi).toBe(true);
  });

  it("eşleşme yoksa null (boş/yanlış link üretilmez)", () => {
    expect(rehberBul("Buzdolabı", "Kompresör arızası")).toBe(null); // Buzdolabı haritada yok
    expect(rehberBul("Çamaşır Makinesi", "asdfgh")).toBe(null);
  });
});

describe("SEED bütünlüğü", () => {
  it("hiçbir cihazda aynı normalize ad iki kez geçmiyor (bölme sonrası da geçmemeli)", () => {
    for (const [cihaz, rows] of Object.entries(SEED)) {
      const adlar = rows.map((r) => String(r[0]).toLocaleLowerCase("tr").trim());
      expect(new Set(adlar).size, `${cihaz} içinde yinelenen satır adı`).toBe(adlar.length);
    }
  });
});
