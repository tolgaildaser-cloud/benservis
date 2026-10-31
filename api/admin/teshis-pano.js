// api/admin/teshis-pano.js — Yönetim panosu Teşhis sekmesi (YK #195). ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET ?from&to&il&ilce&cihaz&marka&tur&gelis&sayfa
//   → özet + günlük + ilk 10 + pivotlar + listede olmayan markalar + 50'şerlik ham satır sayfası.
// Tarih aralığının TÜM satırları 1.000'erlik sayfalarla okunur; pivotta satır tavanı yok (YK kuralı).
// teshis_log 50.000 satırı geçerse gruplama Supabase RPC'ye taşınır.
// Canlı veri ilkesi: en çok 60 sn önbellek. PII yok.
import supabase from "../_supabase.js";
import { panoHesapla, suz } from "../../src/teshis-pano.js";

const HAM_BOY = 50;
const GUVENLI_TAVAN = 200000;
const TEMEL = "created_at,cihaz,marka,yas,ariza,il,ilce,maliyet_min,maliyet_max,karar,aciliyet";

function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}

async function tumSatirlar(alanlar, bas, son) {
  const satirlar = [];
  for (let i = 0; i < GUVENLI_TAVAN; i += 1000) {
    const { data, error } = await supabase.from("teshis_log").select(alanlar)
      .gte("created_at", bas).lte("created_at", son)
      .order("created_at", { ascending: false }).range(i, i + 999);
    if (error) throw error;
    satirlar.push(...(data || []));
    if (!data || data.length < 1000) break;
  }
  return satirlar;
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Yalnızca GET" });
  if (!yetkiKontrol(req)) return res.status(401).json({ ok: false, error: "Yetkisiz — ADMIN_TOKEN hatalı" });

  const q = req.query || {};
  const bugun = new Date().toISOString().slice(0, 10);
  const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);
  const from = isDate(q.from) ? q.from : new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  const to = isDate(q.to) ? q.to : bugun;
  const gunSayisi = Math.round((new Date(to) - new Date(from)) / 864e5) + 1;
  const oncekiBas = new Date(new Date(from).getTime() - gunSayisi * 864e5).toISOString().slice(0, 10);
  const oncekiSon = new Date(new Date(from).getTime() - 864e5).toISOString().slice(0, 10);
  const suzgec = { il: q.il, ilce: q.ilce, cihaz: q.cihaz, marka: q.marka, tur: q.tur, gelis: q.gelis };
  // Türkiye günü UTC+3: aralık UTC'ye çevrilir, gün sınırı rapor günüyle aynı olsun.
  const zaman = (g, s) => new Date(new Date(`${g}T${s}Z`).getTime() - 3 * 3600e3).toISOString();

  try {
    const oku = async (alanlar) => [
      await tumSatirlar(alanlar, zaman(from, "00:00:00.000"), zaman(to, "23:59:59.999")),
      await tumSatirlar(alanlar, zaman(oncekiBas, "00:00:00.000"), zaman(oncekiSon, "23:59:59.999")),
    ];
    let tum, onceki;
    // UTM kolonları canlı şemada yoksa pano çökmez, geliş boş kalır (rapor.js ile aynı davranış).
    try { [tum, onceki] = await oku(`${TEMEL},kaynak,cins,kampanya`); } catch { [tum, onceki] = await oku(TEMEL); }

    const sayfa = Math.max(1, parseInt(q.sayfa, 10) || 1);
    const suzulu = suz(tum, suzgec);
    res.setHeader("Cache-Control", "private, max-age=60");
    return res.status(200).json({
      ok: true,
      aralik: { from, to },
      okundu: new Date().toISOString(),
      ...panoHesapla(tum, onceki, suzgec, from, to),
      ham: { sayfa, boy: HAM_BOY, toplam: suzulu.length, satirlar: suzulu.slice((sayfa - 1) * HAM_BOY, sayfa * HAM_BOY) },
      // Excel "tüm sekme" aktarımı için süzülmüş tüm ham satır (tek istekte, ?hepsi=1).
      ...(q.hepsi === "1" ? { hamHepsi: suzulu } : {}),
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
}
