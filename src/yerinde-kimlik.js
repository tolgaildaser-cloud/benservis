// src/yerinde-kimlik.js — yerinde servis paneli rolü (YK #183, 23 Eki 2026). API ve panel ortak okur.
// Rol YALNIZ app_metadata.rol'den (yalnız service key yazar, #176); user_metadata hiçbir zaman yetki değil.
// Servis hesabı (app_metadata.servis_id) ve bireysel üye bu rolleri taşımaz → panelde "yetkin yok".
export const YERINDE_ROLLER = ["yerinde_koordinator", "yerinde_teknisyen"];

export const yerindeRolOku = (user) => {
  const r = user?.app_metadata?.rol;
  return YERINDE_ROLLER.includes(r) ? r : null;
};
export const koordinatorMu = (user) => yerindeRolOku(user) === "yerinde_koordinator";
export const teknisyenMi = (user) => yerindeRolOku(user) === "yerinde_teknisyen";
