// api/envcheck.js — GEÇİCİ tanı ucu: OPENAI env var'ı Production runtime'a ulaşıyor mu?
// DEĞER/SIR DÖNDÜRMEZ — yalnız eşleşen env İSİMLERİ + var/yok + uzunluk. Doğrulama sonrası silinecek.
export default function handler(req, res) {
  const openaiKeys = Object.keys(process.env).filter((k) => /openai|open[_ ]?ai/i.test(k));
  res.status(200).json({
    openaiKeys,                                      // eşleşen env isimleri (sır değil) → yazım hatası görünür
    present: !!process.env.OPENAI_API_KEY,           // tam isim 'OPENAI_API_KEY' var mı
    len: (process.env.OPENAI_API_KEY || "").length,  // değer uzunluğu (0 = boş)
    hasUpstash: !!process.env.UPSTASH_REDIS_REST_URL, // referans: bilinen-çalışan env görünüyor mu
    node: process.version,
  });
}
