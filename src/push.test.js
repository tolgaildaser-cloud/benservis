// src/push.test.js — YK #203 PR-1: abonelik gövdesi PII'siz, uç girdisi denetlenir, SW yalnız iç yola gider.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { aboneGovdesi, base64UrlByte, destek } from "./push-izin.js";
import { gecerliGovde } from "../api/push/abone.js";

const P = "B".repeat(87), A = "a".repeat(22);
describe("push aboneliği", () => {
  it("gövde yalnız endpoint, iki anahtar ve cihaz taşır", () => {
    const g = aboneGovdesi({ toJSON: () => ({ endpoint: "https://x/y", expirationTime: 1, keys: { p256dh: P, auth: A } }) }, "Klima");
    expect(Object.keys(g).sort()).toEqual(["auth", "cihaz", "endpoint", "p256dh"]);
  });
  it("uç geçersiz girdiyi reddeder, bilinmeyen cihazı boşaltır", () => {
    expect(gecerliGovde({ endpoint: "http://x", p256dh: P, auth: A })).toBeNull();
    expect(gecerliGovde({ endpoint: "https://fcm.googleapis.com/x", p256dh: "kısa", auth: A })).toBeNull();
    expect(gecerliGovde({ endpoint: "https://fcm.googleapis.com/x", p256dh: P, auth: A, cihaz: "<script>" }).cihaz).toBeNull();
    expect(gecerliGovde({ endpoint: "https://fcm.googleapis.com/x", p256dh: P, auth: A, cihaz: "Klima", ad: "x" })).toEqual({ endpoint: "https://fcm.googleapis.com/x", p256dh: P, auth: A, cihaz: "Klima" });
  });
  it("base64url çözülür", () => {
    expect([...base64UrlByte("AQID")]).toEqual([1, 2, 3]);
  });
  it("iOS'ta ana ekran dışında sorulmaz", () => {
    const w = { navigator: { serviceWorker: {}, userAgent: "iPhone", standalone: false }, PushManager: {}, Notification: {}, matchMedia: () => ({ matches: false }) };
    expect(destek(w)).toBe(false);
    expect(destek({ ...w, navigator: { ...w.navigator, standalone: true } })).toBe(true);
  });
  it("SW bildirim tıklaması yalnız site içi yola gider, push uçları cache'lenmez", () => {
    const sw = fs.readFileSync("public/sw.js", "utf8");
    expect(sw).toContain('addEventListener("push"');
    expect(sw).toContain('"/api/push",');
    expect(sw).toMatch(/guvenliYol/);
  });
  it("SQL'de kişisel veri sütunu yok, RLS açık", () => {
    const q = fs.readFileSync("supabase/migrations/20261103_203_push_abone.sql", "utf8");
    expect(q).toContain("enable row level security");
    expect(q).not.toMatch(/^\s+(ip|user_agent|email|telefon|ad)\s/m);
  });
});
