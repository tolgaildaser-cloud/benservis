// api/_kilit.js — ikinci el sepet kilidi, sunucu tarafı (YK #171, 11 Eki 2026).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.
//
// Kilit atomik: tek UPDATE, koşul DB'de — ilan aktif ve stoklu VE (kilit yok | süresi dolmuş |
// zaten bu sepetin). Satır dönmezse ilan başka bir sepette (ya da satışta değil).
import { ANAHTAR_RE } from "../src/ikinci-el-kilit.js";

export const anahtarGecerli = (a) => typeof a === "string" && ANAHTAR_RE.test(a);

// PostgREST `or` süzgeci; değerler tırnaklı (zaman damgasındaki ":" ve "." için). Anahtar
// uuid biçiminde doğrulanmış olmalı — serbest metin süzgece girmez.
export function bosVeyaBenimKosulu(simdiIso, anahtar) {
  if (!anahtarGecerli(anahtar)) throw new Error("anahtar geçersiz");
  return `kilit_bitis.is.null,kilit_bitis.lt."${simdiIso}",kilit_token.eq."${anahtar}"`;
}

// İlanları bu sepete kilitle; kilitlenebilen id'leri döndürür.
export async function ilanKilitle(supabase, idler, anahtar, dakika) {
  const simdi = new Date();
  const bitis = new Date(simdi.getTime() + dakika * 60 * 1000).toISOString();
  const { data, error } = await supabase.from("ilanlar")
    .update({ kilit_token: anahtar, kilit_bitis: bitis })
    .in("id", idler)
    .eq("durum", "aktif")
    .gt("stok", 0)
    .or(bosVeyaBenimKosulu(simdi.toISOString(), anahtar))
    .select("id");
  if (error) return { hata: error.message };
  return { kilitlenen: (data || []).map((s) => s.id), bitis };
}

// Bu sepetin kilidini bırak (sepetten çıkarma).
export async function ilanKilidiBirak(supabase, idler, anahtar) {
  return supabase.from("ilanlar").update({ kilit_token: null, kilit_bitis: null })
    .in("id", idler).eq("kilit_token", anahtar);
}

// Detay sayfası için: başka bir sepette süresi dolmamış kilit var mı?
export const baskasindaKilitli = (ilan, anahtar, simdi = Date.now()) =>
  Boolean(ilan?.kilit_bitis && new Date(ilan.kilit_bitis).getTime() > simdi && ilan.kilit_token !== anahtar);
