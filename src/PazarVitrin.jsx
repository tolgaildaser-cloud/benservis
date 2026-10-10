// src/PazarVitrin.jsx — YK #166 PR-4 (10 Eki 2026): `/pazar` vitrini.
// Genel pazaryeri; Benservis ilk satıcı. Kategori sekmeleri (Yedek Parça · Ürün · İkinci El),
// cihaz × parça türü filtresi (`?kategori=&cihaz=&parca=`), kart → mevcut `/urun/:id`.
// Boş yedek parça kategorisinde "talep bırak" formu (`/api/pazar/talep` → parca_talepleri).
//
// ⛔ Sayfa `noindex`, menüde ve sitemap'te YOK (Tolga "aç" diyene kadar; "aç" ayrı PR).
// ⛔ Fiyat etiketinin yanında "kargo hariç" zorunlu (Tolga, 10 Eki 09:0x).
// ⛔ Analitiğe kişisel veri / serbest metin yazılmaz: yalnız kategori · cihaz · parça slug'ı.
import React, { useEffect, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { PAZAR_KATEGORILERI, PAZAR_CIHAZLARI, PARCA_TURLERI, kategoriBul } from "./pazar-sozluk.js";
import { TR_IL_ILCE } from "./tr-iller.js";
import { sepetAdet } from "./sepet.js";
import KvkkNotu from "./KvkkNotu.jsx";
import { NAVY as INK, BLUE, GREEN_DEEP, HAIR, SLATE, TINT, RED } from "./theme.js";

const IL_LISTESI = Object.keys(TR_IL_ILCE);
const adBul = (liste, slug) => liste.find((x) => x.slug === slug)?.ad || null;

// URL ↔ filtre. Sözlükte olmayan değer yok sayılır; kategori yoksa Yedek Parça.
export function filtreOku(search) {
  const q = new URLSearchParams(search);
  const kategori = kategoriBul(q.get("kategori"))?.slug || "yedek-parca";
  const cihaz = PAZAR_CIHAZLARI.some((c) => c.slug === q.get("cihaz")) ? q.get("cihaz") : "";
  const parca = kategori === "yedek-parca" && PARCA_TURLERI.some((p) => p.slug === q.get("parca")) ? q.get("parca") : "";
  const k = q.get("k");
  return { kategori, cihaz, parca, kaynak: k && /^[a-z0-9-]{1,80}$/.test(k) ? k : "" };
}

function filtreYaz(f) {
  const q = new URLSearchParams();
  q.set("kategori", f.kategori);
  if (f.cihaz) q.set("cihaz", f.cihaz);
  if (f.parca) q.set("parca", f.parca);
  if (f.kaynak) q.set("k", f.kaynak);
  return `/pazar?${q.toString()}`;
}

export default function PazarVitrin() {
  const [f, setF] = useState(() => filtreOku(window.location.search));
  const [urunler, setUrunler] = useState(null);
  const [hata, setHata] = useState("");
  const [adet, setAdet] = useState(sepetAdet());

  // noindex — sayfa açılana kadar arama motoruna girmez (sunucuda X-Robots-Tag de var).
  useEffect(() => {
    document.title = "Pazar · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, nofollow";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  useEffect(() => {
    const s = (e) => setAdet(e.detail);
    const geri = () => setF(filtreOku(window.location.search));
    window.addEventListener("bs-sepet-degisti", s);
    window.addEventListener("popstate", geri);
    return () => { window.removeEventListener("bs-sepet-degisti", s); window.removeEventListener("popstate", geri); };
  }, []);

  useEffect(() => {
    try { track("pazar_goruntule", { kategori: f.kategori }); } catch { /* ölçüm akışı bozmaz */ }
  }, [f.kategori]);

  useEffect(() => {
    let iptal = false;
    setUrunler(null); setHata("");
    const q = new URLSearchParams({ kategori: f.kategori });
    if (f.cihaz) q.set("cihaz", f.cihaz);
    if (f.parca) q.set("parca", f.parca);
    fetch(`/api/pazar/liste?${q}`)
      .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
      .then(({ ok, d }) => { if (!iptal) ok ? setUrunler(d.urunler || []) : setHata(d.error || "Liste okunamadı."); })
      .catch(() => { if (!iptal) setHata("Bağlantı hatası."); });
    return () => { iptal = true; };
  }, [f.kategori, f.cihaz, f.parca]);

  const degistir = (yeni) => {
    const s = { ...f, ...yeni };
    if (s.kategori !== "yedek-parca") s.parca = "";
    window.history.pushState(null, "", filtreYaz(s));
    setF(s);
  };

  const sel = { padding: "9px 10px", borderRadius: 8, border: `1.5px solid ${HAIR}`, fontSize: 13.5, fontFamily: "inherit", background: "#fff", color: INK, minWidth: 0, flex: "1 1 160px" };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Hanken Grotesk', sans-serif", color: INK }}>
      <header style={{ background: "#fff", borderBottom: `3px solid ${BLUE}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <a href="/pazar" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: INK, textDecoration: "none" }}>
            <span style={{ color: BLUE }}>◑</span> Benservis <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" }}>pazar</span>
          </a>
          <a href="/sepet" aria-label="Sepet" style={{ position: "relative", textDecoration: "none", fontSize: 22 }}>
            🛒
            {adet > 0 && <span style={{ position: "absolute", top: -6, right: -10, background: BLUE, color: "#fff", borderRadius: 99, fontSize: 10.5, fontWeight: 700, padding: "1px 6px" }}>{adet}</span>}
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 16px 50px" }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, margin: "4px 0 14px" }}>Yedek parça ve ürünler</h1>

        <nav role="tablist" style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
          {PAZAR_KATEGORILERI.map((k) => {
            const secili = k.slug === f.kategori;
            return (
              <button key={k.slug} role="tab" aria-selected={secili} onClick={() => degistir({ kategori: k.slug })}
                style={{ padding: "9px 16px", borderRadius: 99, border: `1.5px solid ${secili ? INK : HAIR}`, background: secili ? INK : "#fff", color: secili ? "#fff" : INK, fontWeight: 700, fontSize: 13.5, cursor: "pointer", fontFamily: "inherit" }}>
                {k.ad}
              </button>
            );
          })}
        </nav>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <select aria-label="Cihaz" value={f.cihaz} onChange={(e) => degistir({ cihaz: e.target.value })} style={sel}>
            <option value="">Tüm cihazlar</option>
            {PAZAR_CIHAZLARI.map((c) => <option key={c.slug} value={c.slug}>{c.ad}</option>)}
          </select>
          {f.kategori === "yedek-parca" && (
            <select aria-label="Parça türü" value={f.parca} onChange={(e) => degistir({ parca: e.target.value })} style={sel}>
              <option value="">Tüm parça türleri</option>
              {PARCA_TURLERI.map((p) => <option key={p.slug} value={p.slug}>{p.ad}</option>)}
            </select>
          )}
        </div>

        {hata && <div style={{ color: RED, fontWeight: 600, fontSize: 14 }}>{hata}</div>}
        {!hata && urunler === null && <div style={{ color: SLATE, fontSize: 14 }}>Yükleniyor…</div>}
        {!hata && urunler?.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 14 }}>
            {urunler.map((u) => <UrunKarti key={u.id} urun={u} />)}
          </div>
        )}
        {!hata && urunler?.length === 0 && (
          f.kategori === "yedek-parca"
            ? <TalepFormu filtre={f} />
            : <div style={{ background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, padding: "32px 18px", textAlign: "center", fontSize: 14, color: SLATE }}>
                Bu kategoride şu an ürün yok.{" "}
                <button onClick={() => degistir({ kategori: "yedek-parca" })} style={{ border: "none", background: "none", color: BLUE, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}>
                  Yedek parçalara bak →
                </button>
              </div>
        )}
      </main>
    </div>
  );
}

function UrunKarti({ urun }) {
  const benservis = urun.satici?.tur === "benservis";
  const parcaAd = adBul(PARCA_TURLERI, urun.parca_turu);
  const cihazAd = adBul(PAZAR_CIHAZLARI, urun.cihaz_turu);
  const durum = urun.parca_durum === "cikma" ? "Çıkma" : urun.parca_durum === "yeni" ? "Yeni" : null;
  return (
    <a href={`/urun/${urun.id}`} style={{ display: "flex", flexDirection: "column", background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, overflow: "hidden", textDecoration: "none", color: INK }}>
      {urun.gorsel_url
        ? <img src={urun.gorsel_url} alt={urun.baslik} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
        : <div style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, background: TINT }}>📦</div>}
      <div style={{ padding: "11px 13px 13px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.3 }}>{urun.baslik}</div>
        {(parcaAd || cihazAd) && (
          <div style={{ fontSize: 12, color: SLATE }}>{[cihazAd, parcaAd].filter(Boolean).join(" · ")}</div>
        )}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {benservis && <span style={{ fontSize: 11, fontWeight: 700, background: "#DBEAFE", color: BLUE, borderRadius: 5, padding: "2px 7px" }}>◑ Benservis</span>}
          {!benservis && urun.satici?.ad && <span style={{ fontSize: 11, fontWeight: 600, background: TINT, color: SLATE, borderRadius: 5, padding: "2px 7px" }}>🏪 {urun.satici.ad}</span>}
          {durum && <span style={{ fontSize: 11, fontWeight: 600, background: TINT, color: SLATE, borderRadius: 5, padding: "2px 7px" }}>{durum}</span>}
        </div>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 6, flexWrap: "wrap" }}>
          <span>
            <strong style={{ fontFamily: "'Fraunces', serif", fontSize: 19, color: BLUE }}>{Number(urun.fiyat).toLocaleString("tr-TR")} TL</strong>
            <span style={{ fontSize: 11, color: SLATE, marginLeft: 5 }}>kargo hariç</span>
          </span>
          <span style={{ fontSize: 11.5, color: urun.stok <= 2 ? "#EA580C" : GREEN_DEEP, fontWeight: 600 }}>
            {urun.stok <= 2 ? `Son ${urun.stok} adet` : "Stokta"}
          </span>
        </div>
      </div>
    </a>
  );
}

function TalepFormu({ filtre }) {
  const [form, setForm] = useState({ parca_turu: filtre.parca, cihaz_turu: filtre.cihaz, marka_model: "", il: "", telefon: "" });
  const [durum, setDurum] = useState(""); // "" | gonderiyor | tamam
  const [hata, setHata] = useState("");
  useEffect(() => { setForm((x) => ({ ...x, parca_turu: filtre.parca || x.parca_turu, cihaz_turu: filtre.cihaz || x.cihaz_turu })); }, [filtre.parca, filtre.cihaz]);

  const aciklama = useMemo(() => {
    const p = adBul(PARCA_TURLERI, filtre.parca), c = adBul(PAZAR_CIHAZLARI, filtre.cihaz);
    return [c, p].filter(Boolean).join(" · ");
  }, [filtre.parca, filtre.cihaz]);

  const gonder = async (e) => {
    e.preventDefault();
    setHata("");
    setDurum("gonderiyor");
    try {
      const r = await fetch("/api/pazar/talep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, kaynak: filtre.kaynak || "pazar" }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "Talep gönderilemedi.");
      try { track("parca_talep_gonder", { cihaz: form.cihaz_turu, parca: form.parca_turu }); } catch { /* ölçüm akışı bozmaz */ }
      setDurum("tamam");
    } catch (err) { setHata(err.message); setDurum(""); }
  };

  const inp = { width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${HAIR}`, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box", background: "#fff", color: INK };
  const lbl = { display: "block", fontSize: 12.5, fontWeight: 700, margin: "10px 0 5px" };

  if (durum === "tamam") {
    return (
      <div style={{ background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, padding: "30px 18px", textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>✅</div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Talebiniz alındı</div>
        <div style={{ fontSize: 13.5, color: SLATE }}>Parça bulunduğunda sizi arayacağız.</div>
      </div>
    );
  }

  return (
    <form onSubmit={gonder} style={{ background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 10, padding: "18px 18px 14px", maxWidth: 520 }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>Henüz ürün yok, talep bırakın</div>
      <div style={{ fontSize: 13, color: SLATE, margin: "4px 0 4px" }}>
        {aciklama ? `${aciklama} için` : "Aradığınız parça için"} talep bırakın; bulunduğunda sizi arayalım.
      </div>
      <label style={lbl} htmlFor="pt-cihaz">Cihaz *</label>
      <select id="pt-cihaz" required value={form.cihaz_turu} onChange={(e) => setForm({ ...form, cihaz_turu: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {PAZAR_CIHAZLARI.map((c) => <option key={c.slug} value={c.slug}>{c.ad}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-parca">Parça türü *</label>
      <select id="pt-parca" required value={form.parca_turu} onChange={(e) => setForm({ ...form, parca_turu: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {PARCA_TURLERI.map((p) => <option key={p.slug} value={p.slug}>{p.ad}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-model">Marka / model <span style={{ fontWeight: 400, color: "#94A3B8" }}>(biliyorsanız)</span></label>
      <input id="pt-model" maxLength={120} value={form.marka_model} onChange={(e) => setForm({ ...form, marka_model: e.target.value })} style={inp} />
      <label style={lbl} htmlFor="pt-il">İl *</label>
      <select id="pt-il" required value={form.il} onChange={(e) => setForm({ ...form, il: e.target.value })} style={inp}>
        <option value="">Seçin</option>
        {IL_LISTESI.map((il) => <option key={il} value={il}>{il}</option>)}
      </select>
      <label style={lbl} htmlFor="pt-tel">Telefon *</label>
      <input id="pt-tel" type="tel" required inputMode="tel" placeholder="0555 123 45 67" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} style={inp} />
      {hata && <div style={{ color: RED, fontSize: 13, fontWeight: 600, marginTop: 10 }}>{hata}</div>}
      <button type="submit" disabled={durum === "gonderiyor"}
        style={{ width: "100%", marginTop: 14, padding: 13, borderRadius: 8, border: "none", background: BLUE, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", opacity: durum === "gonderiyor" ? 0.7 : 1 }}>
        {durum === "gonderiyor" ? "Gönderiliyor…" : "Talep bırak"}
      </button>
      <KvkkNotu amac="parça talebinize dönüş yapmak" />
    </form>
  );
}
