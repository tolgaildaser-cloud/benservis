// src/pazar-sozluk.js — pazaryeri sözlüğü (YK #166 PR-3, 10 Eki 2026).
// Admin "Pazar" sekmesi ve `api/admin/pazar.js` aynı listeyi kullanır; vitrin (PR-4)
// filtreleri de buradan okur. Tek kaynak: ikinci bir liste tutulmaz.
import { CIHAZLAR, cihazSlug } from "./constants.js";

// Kategori → `servis_urunler` kolonları. `tip` eski kolon (CHECK: ikinci_el | yedek_parca),
// servis paneli hâlâ yazıyor; Benservis "urun" kaydında da bir değer taşımak zorunda.
// `tur` ↔ `kategori` eşleşmesi DB kısıtıyla aynı: parca ⇔ yedek-parca.
export const PAZAR_KATEGORILERI = [
  { slug: "yedek-parca", ad: "Yedek Parça", tur: "parca", tip: "yedek_parca" },
  { slug: "urun",        ad: "Ürün",        tur: "urun",  tip: "ikinci_el" },
  { slug: "ikinci-el",   ad: "İkinci El",   tur: "urun",  tip: "ikinci_el" },
];
export const kategoriBul = (slug) => PAZAR_KATEGORILERI.find((k) => k.slug === slug) || null;

// Cihaz: teşhis listesiyle aynı 12 cihaz, slug `cihazSlug` (köprü linkleriyle aynı üretici).
export const PAZAR_CIHAZLARI = CIHAZLAR.map((ad) => ({ slug: cihazSlug(ad), ad }));

// Parça türü: kapsam analizinin sözlüğü (`benservis-icerik/seo/2026-10-09-kapsam-betikler/ek.py`
// PARCA_TURU, 38 tür — sıra aynı, "yedek parça (genel)" sonda). Uydurma tür eklenmez.
const PARCA_ADLARI = [
  "3 yollu vana", "genleşme tankı", "eşanjör", "brülör/ateşleme", "emniyet ventili/presostat",
  "sirkülasyon pompası", "rezistans/ısıtıcı", "termostat/sensör", "kompresör", "elektronik kart/anakart",
  "motor", "fan/pervane", "kayış", "rulman/keçe/kazan/tambur", "kapı kilidi/mandal/menteşe",
  "kapak/kapı/cam", "lastik/conta", "raf/sepet/çekmece", "filtre", "hortum/boru/baca",
  "valf/vana/musluk", "kumanda/düğme/tuş", "kol/kulp/ayak/tekerlek", "batarya/şarj", "kömür/fırça",
  "torba/toz haznesi", "ampul/led/lamba", "panel/ekran/backlight", "magnetron/mika", "tabla/tepsi/ızgara",
  "kablo/fiş/priz", "kondansatör/röle/trafo", "kartuş/toner/drum/merdane", "deterjan kutusu/çekmece",
  "su deposu/tank/sebil haznesi", "gaz/soğutucu akışkan", "aksesuar/montaj seti", "yedek parça (genel)",
];
export const PARCA_TURLERI = PARCA_ADLARI.map((ad) => ({ slug: cihazSlug(ad), ad }));

export const PARCA_DURUMLARI = [
  { slug: "yeni", ad: "Yeni" },
  { slug: "cikma", ad: "Çıkma" },
];

export const URUN_DURUMLARI = ["aktif", "pasif", "satildi"];
