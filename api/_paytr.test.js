// YK #167 PR-6 — PayTR hash/bildirim mantığı (dev.paytr.com iFrame API 1. ve 2. adım formülleri).
import { describe, it, expect } from "vitest";
import crypto from "node:crypto";
import fs from "node:fs";
import { paytrAyarlari, paytrToken, paytrBildirimHash, paytrBildirimGecerli, siparisOid, sepetBase64, kurus, oidSiparisId, bildirimGuncellemesi } from "./_paytr.js";
import { KARGO_TL } from "../src/kargo.js";

const AYAR = { id: "123456", key: "testkey", salt: "testsalt", testMode: "1" };
const elle = (s, key) => crypto.createHmac("sha256", key).update(s).digest("base64");

describe("PayTR token (1. adım)", () => {
  it("belgedeki sırayla birleştirir, sonuna salt ekler, merchant_key ile imzalar", () => {
    const p = { user_ip: "1.2.3.4", merchant_oid: "abcT1", email: "a@b.co", payment_amount: "15900", user_basket: "W10=",
      no_installment: "1", max_installment: "0", currency: "TL", test_mode: "1" };
    const beklenen = elle("1234561.2.3.4abcT1a@b.co15900W10=10TL1" + "testsalt", "testkey");
    expect(paytrToken(AYAR, p)).toBe(beklenen);
  });

  it("env eksikse ayar yok; test modu varsayılan 1, yalnız açık '0' canlı", () => {
    expect(paytrAyarlari({ PAYTR_MERCHANT_ID: "1", PAYTR_MERCHANT_KEY: "k" })).toBeNull();
    expect(paytrAyarlari({ PAYTR_MERCHANT_ID: "1", PAYTR_MERCHANT_KEY: "k", PAYTR_MERCHANT_SALT: "s" }).testMode).toBe("1");
    expect(paytrAyarlari({ PAYTR_MERCHANT_ID: "1", PAYTR_MERCHANT_KEY: "k", PAYTR_MERCHANT_SALT: "s", PAYTR_TEST_MODE: "0" }).testMode).toBe("0");
  });

  it("sepet: [ad, 'fiyat', adet] + kargo satırı, base64 JSON", () => {
    const b = JSON.parse(Buffer.from(sepetBase64([{ baslik: "Kapak menteşesi", fiyat: 249 }], KARGO_TL), "base64").toString());
    expect(b).toEqual([["Kapak menteşesi", "249.00", 1], ["Kargo", "189.00", 1]]);
  });

  it("tutar kuruş, merchant_oid harf/rakam ve ≤64", () => {
    expect(kurus(399)).toBe(39900);
    const oid = `${siparisOid("0f8fad5b-d9cb-469f-a165-70867728950e")}T${Date.now().toString(36)}`;
    expect(oid).toMatch(/^[a-zA-Z0-9]{1,64}$/);
    expect(oidSiparisId(oid)).toBe("0f8fad5b-d9cb-469f-a165-70867728950e");
    expect(oidSiparisId("kisa")).toBeNull();
  });
});

describe("PayTR bildirimi (2. adım)", () => {
  const b = { merchant_oid: "0f8fad5bd9cb469fa16570867728950eTabc", status: "success", total_amount: "54900", payment_amount: "54900", test_mode: "1", payment_type: "card" };

  it("hash = merchant_oid + salt + status + total_amount", () => {
    expect(paytrBildirimHash(AYAR, b)).toBe(elle(b.merchant_oid + "testsalt" + "success" + "54900", "testkey"));
    expect(paytrBildirimGecerli(AYAR, { ...b, hash: paytrBildirimHash(AYAR, b) })).toBe(true);
    expect(paytrBildirimGecerli(AYAR, { ...b, hash: paytrBildirimHash(AYAR, { ...b, total_amount: "1" }) })).toBe(false);
    expect(paytrBildirimGecerli(AYAR, { ...b })).toBe(false);
  });

  it("başarılı → odendi; tutar farklıysa incelemede; başarısız → odeme_basarisiz", () => {
    expect(bildirimGuncellemesi({ tutar: 549, odeme_durumu: "odeme_bekleniyor" }, b).odeme_durumu).toBe("odendi");
    expect(bildirimGuncellemesi({ tutar: 500, odeme_durumu: "odeme_bekleniyor" }, b).odeme_durumu).toBe("odeme_incelemede");
    const f = bildirimGuncellemesi({ tutar: 549, odeme_durumu: "odeme_bekleniyor" }, { ...b, status: "failed", failed_reason_code: "2", failed_reason_msg: "Yetersiz bakiye" });
    expect(f.odeme_durumu).toBe("odeme_basarisiz");
    expect(f.odeme_hata).toBe("2 Yetersiz bakiye");
  });

  it("idempotent: ödenmiş sipariş tekrar yazılmaz (başarısız bildirim de ezmez)", () => {
    expect(bildirimGuncellemesi({ tutar: 549, odeme_durumu: "odendi" }, b)).toBeNull();
    expect(bildirimGuncellemesi({ tutar: 549, odeme_durumu: "odendi" }, { ...b, status: "failed" })).toBeNull();
  });
});

describe("kaynak kuralları", () => {
  const oku = (p) => fs.readFileSync(new URL(p, import.meta.url), "utf8");
  it("anahtar değerleri kodda yok, yalnız env adları; iyzipay kalktı", () => {
    for (const f of ["./_paytr.js", "./odeme/paytr.js", "./odeme/callback.js", "./siparis.js"]) {
      expect(oku(f)).not.toMatch(/console\.(log|error)\([^)]*(key|salt|ayar)\b/i);
    }
    expect(JSON.parse(oku("../package.json")).dependencies.iyzipay).toBeUndefined();
  });
  it("kargo sabiti tek yerde: sepet ve sipariş API'si aynı modülü okur", () => {
    expect(oku("../src/Sepet.jsx")).toContain('from "./kargo.js"');
    expect(oku("./siparis.js")).toContain('from "../src/kargo.js"');
    expect(oku("../src/Sepet.jsx")).not.toMatch(/\b150\b/);
  });
  it("callback yanıtı düz metin OK", () => {
    expect(oku("./odeme/callback.js")).toMatch(/send\("OK"\)/);
  });
});
