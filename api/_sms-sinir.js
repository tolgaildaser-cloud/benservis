// api/_sms-sinir.js — ikinci el mesajlaşmasında SMS bildirimi sınırı (güvenlik incelemesi, 3 Kas 2026).
// Aynı talepte aynı taraf son 10 dakikada zaten mesaj yazdıysa karşı tarafa yeni SMS gitmez;
// mesaj yine kaydedilir, karşı taraf panelde görür. Sınırsız SMS (kredi + taciz) böyle kesilir.
export const SMS_ARALIK_DK = 10;
export const MESAJ_EN_UZUN = 2000;

export async function smsGonderilsinMi(supabase, talepId, gonderen, simdi = Date.now()) {
  const esik = new Date(simdi - SMS_ARALIK_DK * 60 * 1000).toISOString();
  const { count, error } = await supabase.from("mesajlar")
    .select("id", { count: "exact", head: true })
    .eq("talep_id", talepId).eq("gonderen", gonderen).gte("created_at", esik);
  if (error) return false; // emin değilsek SMS atma (kapalı tarafta kal)
  return !count;
}

// Yalnız POST'u sınırlayan sarmalayıcı: GET panel yenilemesi sayılmasın.
export const yalnizPost = (sinirli, acik) => (req, res) => (req.method === "POST" ? sinirli(req, res) : acik(req, res));
