// api/admin/pazar.js — YK #166 PR-3 (10 Eki 2026): admin "Pazar" sekmesi.
// Benservis adına ürün / yedek parça ekle · düzenle · yayından kaldır + sipariş listesi.
//
// GET   /api/admin/pazar                    — Benservis ürünleri (tüm durumlar) + son 100 sipariş
// POST  /api/admin/pazar                    — yeni Benservis ürünü (varsayılan durum: pasif)
// POST  /api/admin/pazar?islem=gorsel       — { dosya_tipi, base64 } → "DPP Foto" bucket, public URL
// PATCH /api/admin/pazar?id=<urun_id>       — alan güncelle; yalnız Benservis ürünü
// PATCH /api/admin/pazar?islem=havale        — { siparis_id, sonuc: "geldi" | "iptal" } (YK #174):
//        bekleyen havale siparişi → odendi (ikinci el satıldı) ya da iptal (ayırma kalkar)
// GET   /api/admin/pazar?islem=siparisler&durum=&ara=&sayfa= — "Siparişler" sekmesi (16 Eki 2026):
//        durum süzgeci (bekliyor | odendi | iptal | tumu) + sipariş no / alıcı adı araması, en yeni üstte,
//        sayfa başı SIPARIS_SAYFA, toplam sayı döner
// PATCH /api/admin/pazar?islem=iptal          — { siparis_id }: ödenmemiş her sipariş iptal (ayırma kalkar)
//
// Güvenlik: Authorization: Bearer $ADMIN_TOKEN (ya da ADMIN_PASSWORD — /admin girişiyle aynı).
// Silme YOK: "yayından kaldır" = durum pasif. Servis ürünlerine bu uçtan dokunulmaz
// (onlar servis panelinin, `api/servis/urunler`).
import { randomUUID } from "node:crypto";
import supabase from "../_supabase.js";
import { havaleSonuclandir, siparisIptal } from "../_siparis-odeme.js";
import { URUN_PUBLIC_ALANLAR } from "../_public-alanlar.js";
import {
  kategoriBul, PAZAR_CIHAZLARI, PARCA_TURLERI, PARCA_DURUMLARI, URUN_DURUMLARI,
} from "../../src/pazar-sozluk.js";

const BUCKET = "DPP Foto";
const GORSEL_TIPLERI = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
const GORSEL_TAVAN = 3 * 1024 * 1024; // Vercel gövde sınırı 4,5 MB; base64 ~%33 şişirir.

function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}

async function benservisSaticisi() {
  const { data } = await supabase
    .from("saticilar").select("id").eq("tur", "benservis").maybeSingle();
  return data?.id || null;
}

export const SIPARIS_SAYFA = 50;
const SIPARIS_DURUMLARI = {
  bekliyor: ["odeme_bekleniyor", "odeme_basarisiz"],
  odendi: ["odendi", "teslim_onaylandi"],
  iptal: ["iptal"],
};
const SIPARIS_KOLONLAR = "id, siparis_no, tutar, odeme_durumu, odeme_saglayici, odeme_test, alici_ad, alici_tel, alici_adres, alici_il, alici_ilce, alici_mahalle, urunler, created_at";

// Sipariş listesi sorgusu → { durumlar, ara, sayfa }. Arama metni PostgREST `or` sözdizimini
// bozamasın diye yalnız harf/rakam/boşluk/tire kalır.
export function siparisFiltresi(q = {}) {
  const durumlar = SIPARIS_DURUMLARI[q.durum] || null; // tumu / bilinmeyen → süzgeç yok
  const ara = String(q.ara || "").replace(/[^\p{L}\p{N} -]/gu, "").trim().slice(0, 60);
  const s = Number.parseInt(q.sayfa, 10);
  return { durumlar, ara, sayfa: Number.isInteger(s) && s > 0 ? s : 1 };
}

async function siparisListesi(req, res) {
  const f = siparisFiltresi(req.query);
  const bas = (f.sayfa - 1) * SIPARIS_SAYFA;
  let q = supabase.from("siparisler").select(SIPARIS_KOLONLAR, { count: "exact" })
    .order("created_at", { ascending: false });
  if (f.durumlar) q = q.in("odeme_durumu", f.durumlar);
  if (f.ara) q = q.or(`siparis_no.ilike.%${f.ara}%,alici_ad.ilike.%${f.ara}%`);
  const { data, error, count } = await q.range(bas, bas + SIPARIS_SAYFA - 1);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ ok: true, siparisler: data || [], toplam: count ?? null, sayfa: f.sayfa, sayfa_boyu: SIPARIS_SAYFA });
}

const metin = (v) => (typeof v === "string" && v.trim() ? v.trim() : null);
const slugVar = (liste, v) => liste.some((x) => x.slug === v);

// Gövdeyi doğrular → { alanlar } ya da { hata }. `yeni` = POST (zorunlu alanlar şart).
export function urunAlanlari(govde, yeni) {
  const g = govde || {};
  const a = {};
  const has = (k) => Object.prototype.hasOwnProperty.call(g, k);

  if (yeni || has("kategori")) {
    const k = kategoriBul(g.kategori);
    if (!k) return { hata: "kategori: yedek-parca | urun | ikinci-el" };
    Object.assign(a, { kategori: k.slug, tur: k.tur, tip: k.tip });
  }
  if (yeni || has("baslik")) {
    if (!metin(g.baslik)) return { hata: "Başlık zorunlu" };
    a.baslik = g.baslik.trim().slice(0, 160);
  }
  if (yeni || has("fiyat")) {
    const f = Number(g.fiyat);
    if (g.fiyat === "" || g.fiyat == null || !Number.isFinite(f) || f < 0) return { hata: "Geçerli bir fiyat girin" };
    a.fiyat = Math.round(f * 100) / 100;
  }
  if (yeni || has("stok")) {
    const s = g.stok === undefined || g.stok === "" ? 1 : Number(g.stok);
    if (!Number.isInteger(s) || s < 0) return { hata: "Stok 0 ya da pozitif tam sayı olmalı" };
    a.stok = s;
  }
  if (has("aciklama")) a.aciklama = metin(g.aciklama)?.slice(0, 2000) ?? null;
  if (has("uyumlu_modeller")) a.uyumlu_modeller = metin(g.uyumlu_modeller)?.slice(0, 1000) ?? null;
  if (has("gorsel_url")) {
    const u = metin(g.gorsel_url);
    if (u && !/^https:\/\//.test(u)) return { hata: "Görsel adresi https:// ile başlamalı" };
    a.gorsel_url = u;
  }
  if (has("cihaz_turu")) {
    const c = metin(g.cihaz_turu);
    if (c && !slugVar(PAZAR_CIHAZLARI, c)) return { hata: "Bilinmeyen cihaz türü" };
    a.cihaz_turu = c;
  }
  if (has("parca_turu")) {
    const p = metin(g.parca_turu);
    if (p && !slugVar(PARCA_TURLERI, p)) return { hata: "Bilinmeyen parça türü" };
    a.parca_turu = p;
  }
  if (has("parca_durum")) {
    const d = metin(g.parca_durum);
    if (d && !slugVar(PARCA_DURUMLARI, d)) return { hata: "parca_durum: yeni | cikma" };
    a.parca_durum = d;
  }
  if (yeni || has("durum")) {
    const d = g.durum === undefined ? "pasif" : g.durum;
    if (!URUN_DURUMLARI.includes(d)) return { hata: "durum: aktif | pasif | satildi" };
    a.durum = d;
  }
  return { alanlar: a };
}

// Parça alanları yalnız yedek parçada anlamlı; kategori parça değilse temizlenir.
function parcaAlanlariniTemizle(a, kategori) {
  if (kategori && kategori !== "yedek-parca") {
    a.parca_turu = null;
    a.parca_durum = null;
  }
}

async function gorselYukle(req, res) {
  const { dosya_tipi, base64 } = req.body || {};
  const uzanti = GORSEL_TIPLERI[dosya_tipi];
  if (!uzanti) return res.status(400).json({ error: "Görsel türü: jpeg | png | webp" });
  if (typeof base64 !== "string" || !base64) return res.status(400).json({ error: "Görsel verisi yok" });
  const tampon = Buffer.from(base64.replace(/^data:[^,]+,/, ""), "base64");
  if (tampon.length === 0) return res.status(400).json({ error: "Görsel verisi yok" });
  if (tampon.length > GORSEL_TAVAN) return res.status(413).json({ error: "Görsel 3 MB'tan büyük" });

  const yol = `pazar/benservis/${Date.now()}-${randomUUID().slice(0, 8)}.${uzanti}`;
  const { error } = await supabase.storage.from(BUCKET).upload(yol, tampon, { contentType: dosya_tipi });
  if (error) return res.status(500).json({ error: error.message });
  const url = supabase.storage.from(BUCKET).getPublicUrl(yol).data.publicUrl;
  return res.status(201).json({ ok: true, url });
}

export default async function handler(req, res) {
  if (!yetkiKontrol(req)) return res.status(401).json({ error: "Yetkisiz" });

  const satici_id = await benservisSaticisi();
  if (!satici_id) return res.status(500).json({ error: "Benservis satıcı kaydı yok" });

  // ─── GET ─────────────────────────────────────────────────────────────────
  if (req.method === "GET" && req.query?.islem === "siparisler") return siparisListesi(req, res);

  if (req.method === "GET") {
    const { data: urunler, error } = await supabase
      .from("servis_urunler")
      .select(URUN_PUBLIC_ALANLAR)
      .eq("satici_id", satici_id)
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });

    // Sipariş listesi: tüm siparişler (sepet akışı tek; kalemde satici_tur yazıyor).
    // Alıcı adı/telefonu yalnız bu yetkili cevapta; analitiğe yazılmaz.
    const { data: siparisler, error: sErr } = await supabase
      .from("siparisler")
      .select("id, siparis_no, tutar, odeme_durumu, odeme_saglayici, alici_ad, alici_tel, urunler, created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    return res.status(200).json({
      ok: true,
      satici_id,
      urunler: urunler || [],
      siparisler: sErr ? [] : siparisler || [],
      siparis_hata: sErr ? sErr.message : null,
    });
  }

  // ─── POST ────────────────────────────────────────────────────────────────
  if (req.method === "POST") {
    if (req.query?.islem === "gorsel") return gorselYukle(req, res);

    const { alanlar, hata } = urunAlanlari(req.body, true);
    if (hata) return res.status(400).json({ error: hata });
    parcaAlanlariniTemizle(alanlar, alanlar.kategori);

    const { data, error } = await supabase
      .from("servis_urunler")
      .insert({ ...alanlar, satici_id, servis_id: null })
      .select(URUN_PUBLIC_ALANLAR)
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ ok: true, urun: data });
  }

  // ─── PATCH ───────────────────────────────────────────────────────────────
  if (req.method === "PATCH" && req.query?.islem === "havale") {
    const { siparis_id, sonuc } = req.body || {};
    if (typeof siparis_id !== "string" || !siparis_id) return res.status(400).json({ error: "siparis_id gerekli" });
    const r = await havaleSonuclandir(supabase, siparis_id, sonuc);
    if (r.hata) return res.status(r.kod).json({ error: r.hata });
    return res.status(200).json({ ok: true, ...r });
  }

  if (req.method === "PATCH" && req.query?.islem === "iptal") {
    const { siparis_id } = req.body || {};
    if (typeof siparis_id !== "string" || !siparis_id) return res.status(400).json({ error: "siparis_id gerekli" });
    const r = await siparisIptal(supabase, siparis_id);
    if (r.hata) return res.status(r.kod).json({ error: r.hata });
    return res.status(200).json({ ok: true, ...r });
  }

  if (req.method === "PATCH") {
    const id = req.query?.id;
    if (!id) return res.status(400).json({ error: "id gerekli" });

    const { data: mevcut } = await supabase
      .from("servis_urunler").select("id, satici_id, kategori").eq("id", id).maybeSingle();
    if (!mevcut) return res.status(404).json({ error: "Ürün bulunamadı" });
    if (mevcut.satici_id !== satici_id) return res.status(403).json({ error: "Yalnız Benservis ürünleri düzenlenir" });

    const { alanlar, hata } = urunAlanlari(req.body, false);
    if (hata) return res.status(400).json({ error: hata });
    if (Object.keys(alanlar).length === 0) return res.status(400).json({ error: "En az bir alan gerekli" });
    parcaAlanlariniTemizle(alanlar, alanlar.kategori || mevcut.kategori);

    const { data, error } = await supabase
      .from("servis_urunler")
      .update(alanlar)
      .eq("id", id)
      .select(URUN_PUBLIC_ALANLAR)
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true, urun: data });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
