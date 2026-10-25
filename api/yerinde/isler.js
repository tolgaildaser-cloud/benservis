// api/yerinde/isler.js — YK #183 PR-2 · yerinde servis iş emirleri
// GET  /api/yerinde/isler  → koordinatör: tüm işler · teknisyen: yalnız kendi kodunun işleri (PR-3 görünümü için)
// POST /api/yerinde/isler  → YALNIZ koordinatör: yeni iş emri (Kiwi e-postasından)
// Header: Authorization: Bearer <supabase-jwt>
// Yazma service key ile; kişisel veri yalnız yerinde_musteri'ye, iş tablosuna ve loga kişisel veri yazılmaz.
// Teknisyen ataması istemciden ALINMAZ: il + ilçeden yaka → teknisyen (src/yerinde-cekirdek.js tekFor).
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { yerindeKimlik, slotCakisti, aralikKontrol } from "../_yerinde.js";
import {
  PILOT_IL, SLOTLAR, URUN_MODEL, arizalarFor, tekFor, cepNormal, calismaGunuMu, kisiselVeriVar, slotEngelMetni,
  isUiya, KAPALI,
} from "../../src/yerinde-cekirdek.js";
import { TR_IL_ILCE } from "../../src/tr-iller.js";

const ALAN_ISLER = "id, no, kanal, kiwi_ref, talep_at, durum, urun, model, seri_no, garanti, belirti, aciklama, il, ilce, istenen_gun, istenen_slot, randevu_gun, randevu_slot, teknisyen_kod, temsilci, temsilci_notu, aramalar, ilk_ziyarette, csat, degisen_parcalar, tutar, updated_at";
const ALAN_MUSTERI = "is_id, ad, telefon, eposta, adres, adres_tarifi";
const kirp = (v, n) => String(v ?? "").trim().slice(0, n);

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!["GET", "POST"].includes(req.method)) return res.status(405).json({ error: "Method not allowed" });
  const kim = await yerindeKimlik(req, res);
  if (!kim) return;
  return req.method === "GET" ? liste(kim, res) : olustur(kim, req, res);
}

async function liste(kim, res) {
  let q = supabase.from("yerinde_isler").select(ALAN_ISLER).order("talep_at", { ascending: false }).limit(500);
  if (kim.rol === "yerinde_teknisyen") {
    if (!kim.teknisyenKod) return res.status(200).json({ isler: [], teknisyenler: [] });
    q = q.eq("teknisyen_kod", kim.teknisyenKod);
  }
  const { data: isler, error } = await q;
  if (error) return res.status(500).json({ error: "İşler okunamadı" });
  const idler = isler.map((i) => i.id);
  const [m, l, t] = await Promise.all([
    idler.length ? supabase.from("yerinde_musteri").select(ALAN_MUSTERI).in("is_id", idler) : { data: [] },
    idler.length ? supabase.from("yerinde_is_log").select("is_id, at, olay").in("is_id", idler).order("at") : { data: [] },
    supabase.from("yerinde_teknisyenler").select("kod, ad, yaka, aktif").order("kod"), // user_id DÖNMEZ
  ]);
  if (m.error || l.error || t.error) return res.status(500).json({ error: "İş ayrıntıları okunamadı" });
  const mus = new Map((m.data || []).map((x) => [x.is_id, x]));
  const log = new Map();
  for (const x of l.data || []) (log.get(x.is_id) || log.set(x.is_id, []).get(x.is_id)).push(x);
  return res.status(200).json({
    rol: kim.rol,
    isler: isler.map((i) => isUiya(i, mus.get(i.id), log.get(i.id) || [])),
    teknisyenler: (t.data || []).filter((x) => x.aktif),
  });
}

// Formdan gelen kaydı doğrular; hata metni panelde aynen gösterilir (kişisel veri içermez).
export function yeniIsDogrula(b) {
  const ad = kirp(b.ad, 80), tel = cepNormal(b.tel), il = kirp(b.il, 40), ilce = kirp(b.ilce, 40);
  const adres = kirp(b.adres, 300), urun = kirp(b.urun, 80), belirti = kirp(b.belirti, 200);
  if (ad.length < 2) return { hata: "Ad soyadı yazın." };
  if (!tel) return { hata: "Cep telefonunu 05xx xxx xx xx biçiminde yazın." };
  if (!TR_IL_ILCE[il]) return { hata: "İli seçin." };
  if (!ilce) return { hata: "İlçeyi seçin." };
  if (il === PILOT_IL && !TR_IL_ILCE[il].includes(ilce)) return { hata: "İlçe İstanbul listesinde yok." };
  if (adres.length < 10) return { hata: "Açık adresi yazın." };
  if (!URUN_MODEL[urun]) return { hata: "Cihaz türünü seçin." };
  if (!arizalarFor(urun).includes(belirti)) return { hata: "Arızayı listeden seçin." };
  const eposta = kirp(b.eposta, 120);
  if (eposta && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) return { hata: "E-posta biçimi geçersiz." };
  const serbest = { aciklama: kirp(b.aciklama, 500), temsilci_notu: kirp(b.tnot, 1000), kiwi_ref: kirp(b.kiwiRef, 40), temsilci: kirp(b.temsilci, 60) };
  for (const [k, v] of Object.entries(serbest)) {
    if (kisiselVeriVar(v)) return { hata: `Telefon ya da e-posta yalnız müşteri alanlarına yazılır (${ALAN_AD[k]} alanından çıkarın).` };
  }
  const slot = (v) => (v === "" || v == null ? null : Number(v));
  const istenenSlot = slot(b.istenenSlot), randevuSlot = slot(b.randevuSlot);
  for (const s of [istenenSlot, randevuSlot]) if (s != null && !SLOTLAR.includes(s)) return { hata: "Saat aralığı geçersiz." };
  const istenenGun = b.istenenGun || null, randevuGun = b.randevuGun || null;
  if (istenenGun && !/^\d{4}-\d{2}-\d{2}$/.test(istenenGun)) return { hata: "Tercih günü geçersiz." };
  if (!!randevuGun !== (randevuSlot != null)) return { hata: "Randevu için hem günü hem saat aralığını seçin ya da ikisini de boş bırakın." };
  if (randevuGun && !calismaGunuMu(randevuGun)) return { hata: "Randevu Pazartesi–Cumartesi verilir (Pazar kapalı)." };
  const tek = tekFor(il, ilce);
  if (randevuGun && !tek) return { hata: "Pilot bölge dışındaki kayda randevu verilemez." };
  const garanti = ["E", "H", "?"].includes(b.garanti) ? b.garanti : "?";
  const talep = b.talep && !Number.isNaN(Date.parse(b.talep)) ? new Date(b.talep).toISOString() : new Date().toISOString();
  return {
    is: {
      kanal: "Kiwi e-posta", kiwi_ref: serbest.kiwi_ref || null, talep_at: talep,
      durum: randevuGun ? "randevu" : "yeni", urun, model: kirp(b.model, 80) || null, seri_no: kirp(b.seri, 60) || null,
      garanti, belirti, aciklama: serbest.aciklama || null, il, ilce,
      istenen_gun: istenenGun, istenen_slot: istenenSlot, randevu_gun: randevuGun, randevu_slot: randevuSlot,
      teknisyen_kod: tek || null, temsilci: serbest.temsilci || null, temsilci_notu: serbest.temsilci_notu || null,
    },
    musteri: { ad, telefon: tel, eposta: eposta || null, adres, adres_tarifi: kirp(b.tarif, 300) || null },
  };
}
const ALAN_AD = { aciklama: "arıza açıklaması", temsilci_notu: "temsilci notu", kiwi_ref: "referans no", temsilci: "temsilci", degisen_parcalar: "değişen parçalar" };

async function olustur(kim, req, res) {
  if (kim.rol !== "yerinde_koordinator") return res.status(403).json({ error: "Yeni kaydı yalnız koordinatör girer" });
  const v = yeniIsDogrula(req.body || {});
  if (v.hata) return res.status(400).json({ error: v.hata });

  // Mükerrer uyarısı (prototipteki gibi): aynı Kiwi referansı ya da aynı telefonla açık kayıt varsa önce sorulur.
  if (!req.body?.mukerrerOnay) {
    const acik = (q) => q.not("durum", "in", `(${KAPALI.join(",")})`).limit(1);
    if (v.is.kiwi_ref) {
      const { data } = await acik(supabase.from("yerinde_isler").select("no").eq("kiwi_ref", v.is.kiwi_ref));
      if (data?.length) return res.status(409).json({ error: `Bu referans no ile açık kayıt var: ${data[0].no}.`, mukerrer: data[0].no });
    }
    const { data: ayniTel } = await supabase.from("yerinde_musteri").select("is_id").eq("telefon", v.musteri.telefon);
    if (ayniTel?.length) {
      const { data } = await acik(supabase.from("yerinde_isler").select("no").in("id", ayniTel.map((x) => x.is_id)));
      if (data?.length) return res.status(409).json({ error: `Bu telefon ile açık kayıt var: ${data[0].no}.`, mukerrer: data[0].no });
    }
  }

  const engel = await aralikKontrol({ tek: v.is.teknisyen_kod, gun: v.is.randevu_gun, slot: v.is.randevu_slot, ilce: v.is.ilce });
  if (engel?.sebep === "okunamadi") return res.status(500).json({ error: "Takvim okunamadı" });
  if (engel) return res.status(409).json({ error: slotEngelMetni(v.is.teknisyen_kod, v.is.ilce, engel) });

  const { data: is, error } = await supabase.from("yerinde_isler").insert(v.is).select(ALAN_ISLER).single();
  if (slotCakisti(error)) return res.status(409).json({ error: `${v.is.teknisyen_kod} bu aralıkta dolu. Önerilerden birini seçin.` });
  if (error || !is) return res.status(500).json({ error: "Kayıt eklenemedi" });

  const { error: mErr } = await supabase.from("yerinde_musteri").insert({ is_id: is.id, ...v.musteri });
  if (mErr) {
    await supabase.from("yerinde_isler").delete().eq("id", is.id); // yarım kayıt kalmasın
    return res.status(500).json({ error: "Müşteri bilgisi kaydedilemedi; kayıt eklenmedi" });
  }
  const olaylar = ["eposta_geldi", "kayit", ...(is.randevu_gun ? ["randevu", "durum:randevu"] : [])];
  await supabase.from("yerinde_is_log").insert(olaylar.map((olay) => ({ is_id: is.id, olay, yazan: kim.user.id })));
  const { data: loglar } = await supabase.from("yerinde_is_log").select("at, olay").eq("is_id", is.id).order("at");
  return res.status(201).json({ is: isUiya(is, v.musteri, loglar || []) });
}
