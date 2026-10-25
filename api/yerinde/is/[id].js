// api/yerinde/is/[id].js — YK #183 PR-2 · tek iş emrinde alan güncelleme + durum geçişi
// PATCH /api/yerinde/is/:id   koordinatör: tüm alanlar + geçişler · teknisyen (PR-3): yalnız KENDİ işinde seri no + saha geçişleri
// Header: Authorization: Bearer <supabase-jwt>
// Body: { guncel (updated_at, eşzamanlı düzenleme kilidi), alanlar?: { garanti, seri, tek, istenenGun, istenenSlot,
//         randevuGun, randevuSlot, tnot, parcalar, tutar }, gecis?: "randevu" | "yolda" | … | "iptal" | "ulasilamadi",
//         kapanis?: { parcalar, tutar } }
// alanlar.parcalar / alanlar.tutar: koordinatörün tamamlanmış işte kapanış bilgisini sonradan düzeltmesi (log: kapanis:duzeltme).
// Geçişler src/yerinde-cekirdek.js GECISLER tablosuyla denetlenir; log'a yalnız sabit olay etiketi yazılır.
import supabase from "../../_supabase.js";
import { setCorsHeaders } from "../../_verimor.js";
import { yerindeKimlik, slotCakisti } from "../../_yerinde.js";
import {
  SLOTLAR, PILOT_IL, gecisGecerli, teknisyenGecisGecerli, haftaIciMi, kisiselVeriVar, garantiEtiket, isUiya, OLAY_DESEN,
} from "../../../src/yerinde-cekirdek.js";

const ALAN_ISLER = "id, no, kanal, kiwi_ref, talep_at, durum, urun, model, seri_no, garanti, belirti, aciklama, il, ilce, istenen_gun, istenen_slot, randevu_gun, randevu_slot, teknisyen_kod, temsilci, temsilci_notu, aramalar, ilk_ziyarette, csat, degisen_parcalar, tutar, updated_at";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const slotSayi = (v) => (v === "" || v == null ? null : Number(v));
const PARCA_HATA = "Telefon ya da e-posta yalnız müşteri alanlarına yazılır (değişen parçalar alanından çıkarın).";
const parcaOku = (v) => String(v ?? "").trim().slice(0, 300) || null;
// Tahsilat: boş → null; geçersizse undefined (çağıran 400 döner).
const tutarOku = (v) => {
  if (v === "" || v == null) return null;
  const t = Number(v);
  return Number.isFinite(t) && t >= 0 && t < 1e8 ? t : undefined;
};

// Saf karar fonksiyonu (testlenir): mevcut satır + istek → { guncelle, olaylar } ya da { hata, kod }.
export function guncellemeHesapla(is, body, teknisyenKodlari = ["T1", "T2"], rol = "yerinde_koordinator") {
  const teknisyen = rol === "yerinde_teknisyen";
  // Teknisyen yalnız seri no girer; diğer alanlar (randevu, teknisyen, garanti, not) koordinatörün.
  const a = teknisyen ? ("seri" in (body.alanlar || {}) ? { seri: body.alanlar.seri } : {}) : body.alanlar || {};
  const g = {};
  const olaylar = [];
  if ("garanti" in a) {
    if (!["E", "H", "?"].includes(a.garanti)) return { kod: 400, hata: "Garanti değeri geçersiz" };
    if (a.garanti !== is.garanti) { g.garanti = a.garanti; olaylar.push("garanti:" + garantiEtiket(a.garanti)); }
  }
  if ("seri" in a) { const s = String(a.seri ?? "").trim().slice(0, 60) || null; if (s !== is.seri_no) { g.seri_no = s; if (s) olaylar.push("seri"); } }
  if ("tnot" in a) {
    const n = String(a.tnot ?? "").trim().slice(0, 1000) || null;
    if (kisiselVeriVar(n)) return { kod: 400, hata: "Telefon ya da e-posta yalnız müşteri alanlarına yazılır (temsilci notundan çıkarın)." };
    if (n !== is.temsilci_notu) { g.temsilci_notu = n; olaylar.push("not"); }
  }
  if ("istenenGun" in a || "istenenSlot" in a) {
    const gun = a.istenenGun || null, slot = slotSayi(a.istenenSlot);
    if (gun && !/^\d{4}-\d{2}-\d{2}$/.test(gun)) return { kod: 400, hata: "Tercih günü geçersiz" };
    if (slot != null && !SLOTLAR.includes(slot)) return { kod: 400, hata: "Saat aralığı geçersiz" };
    if (gun !== is.istenen_gun || slot !== is.istenen_slot) { g.istenen_gun = gun; g.istenen_slot = slot; olaylar.push("tercih"); }
  }
  if ("tek" in a) {
    const t = a.tek || null;
    if (t && !teknisyenKodlari.includes(t)) return { kod: 400, hata: "Teknisyen geçersiz" };
    if (t && is.il !== PILOT_IL) return { kod: 400, hata: "Pilot bölge dışında teknisyen atanamaz" };
    if (t !== is.teknisyen_kod) { g.teknisyen_kod = t; olaylar.push("teknisyen:" + (t ? t.toLowerCase() : "yok")); }
  }
  if ("randevuGun" in a || "randevuSlot" in a) {
    const gun = a.randevuGun || null, slot = slotSayi(a.randevuSlot);
    if (!!gun !== (slot != null)) return { kod: 400, hata: "Randevu için hem günü hem saat aralığını seçin" };
    if (slot != null && !SLOTLAR.includes(slot)) return { kod: 400, hata: "Saat aralığı geçersiz" };
    if (gun && !haftaIciMi(gun)) return { kod: 400, hata: "Randevu yalnız hafta içine verilir" };
    if (gun !== is.randevu_gun || slot !== is.randevu_slot) { g.randevu_gun = gun; g.randevu_slot = slot; if (gun) olaylar.push("randevu"); }
  }
  // Koordinatör, teknisyenin girdiği kapanış bilgisini iş tamamlandıktan sonra düzeltebilir (teknisyende `a` zaten yalnız seri).
  if ("parcalar" in a || "tutar" in a) {
    if (is.durum !== "tamam") return { kod: 409, hata: "Kapanış bilgisi yalnız tamamlanmış işte düzeltilir" };
    let degisti = false;
    if ("parcalar" in a) {
      const parca = parcaOku(a.parcalar);
      if (kisiselVeriVar(parca)) return { kod: 400, hata: PARCA_HATA };
      if (parca !== (is.degisen_parcalar ?? null)) { g.degisen_parcalar = parca; degisti = true; }
    }
    if ("tutar" in a) {
      const tutar = tutarOku(a.tutar);
      if (tutar === undefined) return { kod: 400, hata: "Tahsilat tutarı geçersiz" };
      if (tutar !== (is.tutar == null ? null : Number(is.tutar))) { g.tutar = tutar; degisti = true; }
    }
    if (degisti) olaylar.push("kapanis:duzeltme");
  }

  const to = body.gecis;
  if (teknisyen && to && !teknisyenGecisGecerli(is.durum, to)) return { kod: 403, hata: "Bu adımı koordinatör yapar" };
  if (to === "ulasilamadi") {
    if (is.durum !== "yeni") return { kod: 409, hata: "Ulaşılamadı yalnız aranacak kayıtta işaretlenir" };
    g.aramalar = Math.min(50, (is.aramalar || 0) + 1);
    olaylar.push("arama_ulasilamadi");
  } else if (to) {
    if (!gecisGecerli(is.durum, to)) return { kod: 409, hata: "Bu durumdan bu adıma geçilemez" };
    const sonTek = "teknisyen_kod" in g ? g.teknisyen_kod : is.teknisyen_kod;
    const sonGun = "randevu_gun" in g ? g.randevu_gun : is.randevu_gun;
    const sonSlot = "randevu_slot" in g ? g.randevu_slot : is.randevu_slot;
    if (["randevu", "yolda", "serviste"].includes(to) && !(sonTek && sonGun && sonSlot != null)) {
      return { kod: 400, hata: "Önce teknisyeni, randevu gününü ve saat aralığını seçin" };
    }
    if (to === "tamam" && is.durum === "serviste") {
      const k = body.kapanis || {};
      const parca = parcaOku(k.parcalar);
      if (kisiselVeriVar(parca)) return { kod: 400, hata: PARCA_HATA };
      const tutar = tutarOku(k.tutar);
      if (tutar === undefined) return { kod: 400, hata: "Tahsilat tutarı geçersiz" };
      g.degisen_parcalar = parca; g.tutar = tutar;
      g.ilk_ziyarette = !(body._parcaGecmisi ?? false);
      // Kapanışı kimin girdiği logda ayrılır: teknisyen sahadan kapattıysa koordinatör sonradan düzeltebilir.
      olaylar.push(teknisyen ? "kapanis:teknisyen" : "kapanis");
    }
    if (to === "atolye" || to === "parca") g.ilk_ziyarette = false;
    g.durum = to;
    olaylar.push("durum:" + to);
  }
  if (olaylar.some((o) => !OLAY_DESEN.test(o))) return { kod: 500, hata: "Log etiketi geçersiz" };
  return { guncelle: g, olaylar };
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });
  const kim = await yerindeKimlik(req, res);
  if (!kim) return;

  const id = String(req.query?.id || "");
  if (!UUID.test(id)) return res.status(400).json({ error: "İş kimliği geçersiz" });
  const body = req.body || {};

  const { data: is, error: okErr } = await supabase.from("yerinde_isler").select(ALAN_ISLER).eq("id", id).maybeSingle();
  if (okErr) return res.status(500).json({ error: "İş okunamadı" });
  // Teknisyen yalnız kendi koduna atanmış işi görür/değiştirir; başkasının işi için varlık bile sızdırılmaz.
  if (!is || (kim.rol === "yerinde_teknisyen" && (!kim.teknisyenKod || is.teknisyen_kod !== kim.teknisyenKod))) return res.status(404).json({ error: "İş bulunamadı" });
  if (body.guncel && body.guncel !== is.updated_at) return res.status(409).json({ error: "Kayıt başka biri tarafından değiştirildi; liste yenilendi, tekrar deneyin", yenile: true });

  const [{ data: tek }, { data: parcaLog }] = await Promise.all([
    supabase.from("yerinde_teknisyenler").select("kod").eq("aktif", true),
    supabase.from("yerinde_is_log").select("id").eq("is_id", id).eq("olay", "durum:parca").limit(1),
  ]);
  const h = guncellemeHesapla(is, { ...body, _parcaGecmisi: !!parcaLog?.length }, (tek || []).map((t) => t.kod), kim.rol);
  if (h.hata) return res.status(h.kod).json({ error: h.hata });
  if (!Object.keys(h.guncelle).length && !h.olaylar.length) return res.status(200).json({ is: null, degisiklik: false });

  // Eşzamanlı düzenleme kilidi: okunduğu andaki updated_at hâlâ aynıysa yaz.
  const { data: yeni, error } = await supabase.from("yerinde_isler").update(h.guncelle)
    .eq("id", id).eq("updated_at", is.updated_at).select(ALAN_ISLER).maybeSingle();
  if (slotCakisti(error)) return res.status(409).json({ error: "Teknisyen bu aralıkta dolu; başka aralık seçin" });
  if (error) return res.status(500).json({ error: "Kaydedilemedi" });
  if (!yeni) return res.status(409).json({ error: "Kayıt başka biri tarafından değiştirildi; liste yenilendi, tekrar deneyin", yenile: true });

  if (h.olaylar.length) await supabase.from("yerinde_is_log").insert(h.olaylar.map((olay) => ({ is_id: id, olay, yazan: kim.user.id })));
  const [{ data: m }, { data: loglar }] = await Promise.all([
    supabase.from("yerinde_musteri").select("ad, telefon, eposta, adres, adres_tarifi").eq("is_id", id).maybeSingle(),
    supabase.from("yerinde_is_log").select("at, olay").eq("is_id", id).order("at"),
  ]);
  return res.status(200).json({ is: isUiya(yeni, m, loglar || []), degisiklik: true });
}
