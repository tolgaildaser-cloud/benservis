// src/maliyet-durumu.js — teşhis sonucunun "Tahmini maliyet" alanında ne yazacağı.
//
// 🔴 5 Eki 2026 — Tolga: belirtiye yalnız "bozuk" yazınca maliyet boş (min == null) dönüyor,
// ekran ise "Tamir gerekmez" diyordu → yanlış hüküm. "Tamir gerekmez" YALNIZ model
// kararOnerisi = "gerek_yok" dediğinde yazılır; maliyet boşsa hüküm verilmez, rakam
// uydurulmaz (#48). Ekran ve paylaşım özeti bu tek fonksiyonu okur.
//
//   "gerek_yok" → Tamir gerekmez
//   "yok"       → maliyet çıkmadı; kullanıcıdan belirtiyi biraz daha anlatması istenir
//   "var"       → min–max TL
export const MALIYET_YOK_METNI = "Maliyet için arızayı biraz daha anlat";

export function maliyetDurumu(sonuc) {
  if (!sonuc) return "yok";
  if (sonuc.kararOnerisi === "gerek_yok") return "gerek_yok";
  const m = sonuc.tahminiMaliyet;
  if (!m || m.min == null || m.max == null) return "yok";
  return "var";
}
