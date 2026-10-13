// src/havale.js — Havale / EFT ile ödeme, istemci + sunucu ortak sabitler (YK #174, 13 Eki 2026).
// PayTR reddi sonrası geçici yol: alıcı siparişi oluşturur, ekranda hesap adı + IBAN + tutar +
// açıklama (sipariş no) görür; admin "ödeme geldi" deyince sipariş `odendi` olur. Bu dosya tarayıcıya
// gider: IBAN / hesap adı burada YOK (yalnız env'de, api/_havale.js okur).

// Ödeme için süre: bu sürede havale gelmezse cron siparişi iptal eder, ikinci el ayırması kalkar.
export const HAVALE_SURE_SAAT = 24;
export const HAVALE_KILIT_DK = HAVALE_SURE_SAAT * 60;

export const ODEME_YONTEMLERI = ["kart", "havale"];

// Ekranda okunur IBAN: 4'erli gruplar ("TR12 3456 ...").
export const ibanBicimle = (iban) => String(iban || "").replace(/\s+/g, "").replace(/(.{4})/g, "$1 ").trim();

// Son ödeme anı (sipariş anından itibaren HAVALE_SURE_SAAT).
export const havaleSonu = (olusturma) => new Date(new Date(olusturma).getTime() + HAVALE_SURE_SAAT * 3600 * 1000);
