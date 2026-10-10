// src/AdminPazarPaneli.jsx — /admin "Pazar" sekmesi (YK #166 PR-3, 10 Eki 2026).
// Benservis adına ürün / yedek parça ekle · düzenle · yayından kaldır + sipariş listesi.
// Sır RaporPaneli'nden gelir (aynı ADMIN_TOKEN); uç: /api/admin/pazar.
// Yeni ürün PASİF açılır — vitrinde (PR-4) ve /urun/:id'de görünmesi için "Yayınla" gerekir.
import React, { useState, useEffect } from "react";
import { NAVY as INK, BLUE, SLATE, HAIR as LINE, GREEN_DEEP, RED } from "./theme.js";
import {
  PAZAR_KATEGORILERI, PAZAR_CIHAZLARI, PARCA_TURLERI, PARCA_DURUMLARI,
} from "./pazar-sozluk.js";

const BOS = {
  kategori: "yedek-parca", baslik: "", aciklama: "", fiyat: "", stok: "1", gorsel_url: "",
  cihaz_turu: "", parca_turu: "", uyumlu_modeller: "", parca_durum: "yeni",
};
const DURUM_AD = { aktif: "Yayında", pasif: "Yayında değil", satildi: "Satıldı" };
const adBul = (liste, slug) => liste.find((x) => x.slug === slug)?.ad || slug || "—";
const tl = (n) => `${Number(n || 0).toLocaleString("tr-TR")} TL`;
const trTarih = (iso) => (iso ? new Date(iso).toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" }) : "");

const dosyaOku = (f) => new Promise((ok, no) => {
  const r = new FileReader();
  r.onload = () => ok(String(r.result));
  r.onerror = () => no(new Error("Dosya okunamadı"));
  r.readAsDataURL(f);
});

export default function AdminPazarPaneli({ sir, onYetkisiz }) {
  const [veri, setVeri] = useState(null);
  const [yuk, setYuk] = useState(false);
  const [hata, setHata] = useState("");
  const [form, setForm] = useState(BOS);
  const [duzenlenen, setDuzenlenen] = useState(null); // ürün id | null (yeni)
  const [kaydet, setKaydet] = useState(false);
  const [fotoYuk, setFotoYuk] = useState(false);

  const istek = async (yol, secenek = {}) => {
    const r = await fetch(yol, {
      ...secenek,
      headers: { Authorization: `Bearer ${sir}`, "Content-Type": "application/json", ...(secenek.headers || {}) },
    });
    if (r.status === 401) { onYetkisiz?.(); throw new Error("Şifre hatalı"); }
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(d.error || `Hata ${r.status}`);
    return d;
  };

  const getir = async () => {
    setYuk(true); setHata("");
    try { setVeri(await istek("/api/admin/pazar")); }
    catch (e) { setHata(e.message); }
    finally { setYuk(false); }
  };
  useEffect(() => { getir(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const alan = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const parcaMi = form.kategori === "yedek-parca";

  const fotoSec = async (e) => {
    const f = (e.target.files || [])[0];
    e.target.value = "";
    if (!f) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) { setHata("Yalnız JPG, PNG veya WebP."); return; }
    if (f.size > 3 * 1024 * 1024) { setHata("Görsel 3 MB'tan küçük olmalı."); return; }
    setFotoYuk(true); setHata("");
    try {
      const base64 = await dosyaOku(f);
      const d = await istek("/api/admin/pazar?islem=gorsel", {
        method: "POST", body: JSON.stringify({ dosya_tipi: f.type, base64 }),
      });
      setForm((x) => ({ ...x, gorsel_url: d.url }));
    } catch (err) { setHata("Görsel yüklenemedi: " + err.message); }
    finally { setFotoYuk(false); }
  };

  const formuSifirla = () => { setForm(BOS); setDuzenlenen(null); };

  const gonder = async (e) => {
    e.preventDefault();
    setKaydet(true); setHata("");
    const govde = {
      ...form,
      stok: form.stok === "" ? "" : Number(form.stok),
      parca_turu: parcaMi ? form.parca_turu : "",
      parca_durum: parcaMi ? form.parca_durum : "",
    };
    try {
      if (duzenlenen) {
        await istek(`/api/admin/pazar?id=${encodeURIComponent(duzenlenen)}`, { method: "PATCH", body: JSON.stringify(govde) });
      } else {
        await istek("/api/admin/pazar", { method: "POST", body: JSON.stringify(govde) });
      }
      formuSifirla();
      await getir();
    } catch (err) { setHata(err.message); }
    finally { setKaydet(false); }
  };

  const durumDegistir = async (u, durum) => {
    setHata("");
    try {
      await istek(`/api/admin/pazar?id=${encodeURIComponent(u.id)}`, { method: "PATCH", body: JSON.stringify({ durum }) });
      await getir();
    } catch (err) { setHata(err.message); }
  };

  const duzenle = (u) => {
    setDuzenlenen(u.id);
    setForm({
      kategori: u.kategori, baslik: u.baslik || "", aciklama: u.aciklama || "",
      fiyat: String(u.fiyat ?? ""), stok: String(u.stok ?? 0), gorsel_url: u.gorsel_url || "",
      cihaz_turu: u.cihaz_turu || "", parca_turu: u.parca_turu || "",
      uyumlu_modeller: u.uyumlu_modeller || "", parca_durum: u.parca_durum || "yeni",
    });
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 16, fontFamily: "inherit", marginTop: 3, width: "100%", boxSizing: "border-box", background: "#fff", color: INK };
  const etiketS = { fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const kucukBtn = { background: "none", border: `1px solid ${LINE}`, borderRadius: 7, padding: "5px 10px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit" };
  const kartS = { background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16 };

  const urunler = veri?.urunler || [];
  const siparisler = veri?.siparisler || [];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 16 }}>
      {/* ── FORM ── */}
      <form onSubmit={gonder} style={kartS}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 8 }}>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 18, color: INK, margin: 0 }}>
            {duzenlenen ? "Ürünü düzenle" : "Benservis adına yeni ürün"}
          </h2>
          {duzenlenen && <button type="button" onClick={formuSifirla} style={kucukBtn}>Vazgeç</button>}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: 12 }}>
          <label style={etiketS}>Kategori
            <select value={form.kategori} onChange={alan("kategori")} style={inputS}>
              {PAZAR_KATEGORILERI.map((k) => <option key={k.slug} value={k.slug}>{k.ad}</option>)}
            </select></label>
          <label style={{ ...etiketS, gridColumn: "1 / -1" }}>Başlık
            <input value={form.baslik} onChange={alan("baslik")} required maxLength={160} style={inputS}
              placeholder={parcaMi ? "ör. Çamaşır makinesi kapak contası" : "ör. Ürün adı"} /></label>
          <label style={etiketS}>Fiyat (TL, kargo hariç)
            <input type="number" min="0" step="0.01" inputMode="decimal" value={form.fiyat} onChange={alan("fiyat")} required style={inputS} /></label>
          <label style={etiketS}>Stok
            <input type="number" min="0" step="1" inputMode="numeric" value={form.stok} onChange={alan("stok")} style={inputS} /></label>
          <label style={etiketS}>Cihaz
            <select value={form.cihaz_turu} onChange={alan("cihaz_turu")} style={inputS}>
              <option value="">— seçilmedi —</option>
              {PAZAR_CIHAZLARI.map((c) => <option key={c.slug} value={c.slug}>{c.ad}</option>)}
            </select></label>
          {parcaMi && (
            <>
              <label style={etiketS}>Parça türü
                <select value={form.parca_turu} onChange={alan("parca_turu")} style={inputS}>
                  <option value="">— seçilmedi —</option>
                  {PARCA_TURLERI.map((p) => <option key={p.slug} value={p.slug}>{p.ad}</option>)}
                </select></label>
              <label style={etiketS}>Parça durumu
                <select value={form.parca_durum} onChange={alan("parca_durum")} style={inputS}>
                  {PARCA_DURUMLARI.map((p) => <option key={p.slug} value={p.slug}>{p.ad}</option>)}
                </select></label>
            </>
          )}
          <label style={{ ...etiketS, gridColumn: "1 / -1" }}>Uyumlu modeller
            <input value={form.uyumlu_modeller} onChange={alan("uyumlu_modeller")} maxLength={1000} style={inputS}
              placeholder="Üretici kataloğundaki model kodları, virgülle" /></label>
          <label style={{ ...etiketS, gridColumn: "1 / -1" }}>Açıklama
            <textarea value={form.aciklama} onChange={alan("aciklama")} maxLength={2000} rows={3} style={{ ...inputS, resize: "vertical" }} /></label>
          <div style={{ ...etiketS, gridColumn: "1 / -1" }}>Görsel
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
              {form.gorsel_url && <img src={form.gorsel_url} alt="" style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 8, border: `1px solid ${LINE}` }} />}
              <label style={{ ...kucukBtn, display: "inline-block" }}>
                {fotoYuk ? "Yükleniyor…" : form.gorsel_url ? "Görseli değiştir" : "Görsel yükle"}
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={fotoSec} disabled={fotoYuk} style={{ display: "none" }} />
              </label>
              {form.gorsel_url && <button type="button" onClick={() => setForm((f) => ({ ...f, gorsel_url: "" }))} style={kucukBtn}>Kaldır</button>}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
          <button type="submit" disabled={kaydet || fotoYuk} style={btnS}>
            {kaydet ? "Kaydediliyor…" : duzenlenen ? "Kaydet" : "Ekle (yayında değil)"}
          </button>
          {!duzenlenen && <span style={{ fontSize: 12.5, color: SLATE }}>Yeni ürün yayında olmadan açılır; listeden "Yayınla" ile açılır.</span>}
        </div>
        {hata && <div style={{ color: RED, fontSize: 13, marginTop: 10 }}>{hata}</div>}
      </form>

      {/* ── ÜRÜN LİSTESİ ── */}
      <div style={kartS}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 18, color: INK, margin: 0 }}>Benservis ürünleri <span style={{ color: SLATE, fontSize: 14 }}>({urunler.length})</span></h2>
          <button type="button" onClick={getir} disabled={yuk} style={kucukBtn}>{yuk ? "Yükleniyor…" : "Yenile"}</button>
        </div>
        {urunler.length === 0 ? (
          <div style={{ color: SLATE, fontSize: 14, padding: "12px 0" }}>{yuk ? "Yükleniyor…" : "Henüz Benservis ürünü yok."}</div>
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {urunler.map((u) => (
              <div key={u.id} style={{ display: "flex", gap: 12, alignItems: "flex-start", borderTop: `1px solid ${LINE}`, paddingTop: 10, flexWrap: "wrap" }}>
                {u.gorsel_url
                  ? <img src={u.gorsel_url} alt="" style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8, border: `1px solid ${LINE}`, flexShrink: 0 }} />
                  : <div style={{ width: 56, height: 56, borderRadius: 8, background: "#F1F5F9", flexShrink: 0 }} />}
                <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: INK, fontSize: 14.5 }}>{u.baslik}</div>
                  <div style={{ fontSize: 12.5, color: SLATE, marginTop: 2 }}>
                    {adBul(PAZAR_KATEGORILERI, u.kategori)} · {adBul(PAZAR_CIHAZLARI, u.cihaz_turu)}
                    {u.kategori === "yedek-parca" && ` · ${adBul(PARCA_TURLERI, u.parca_turu)} · ${adBul(PARCA_DURUMLARI, u.parca_durum)}`}
                  </div>
                  <div style={{ fontSize: 13, color: INK, marginTop: 4 }}>
                    <b>{tl(u.fiyat)}</b> <span style={{ color: SLATE }}>kargo hariç · stok {u.stok}</span>
                    {" · "}<span style={{ color: u.durum === "aktif" ? GREEN_DEEP : SLATE, fontWeight: 600 }}>{DURUM_AD[u.durum] || u.durum}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <button type="button" onClick={() => duzenle(u)} style={kucukBtn}>Düzenle</button>
                  {u.durum === "aktif"
                    ? <button type="button" onClick={() => durumDegistir(u, "pasif")} style={kucukBtn}>Yayından kaldır</button>
                    : <button type="button" onClick={() => durumDegistir(u, "aktif")} style={{ ...kucukBtn, color: BLUE, borderColor: BLUE }}>Yayınla</button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── SİPARİŞLER ── */}
      <div style={kartS}>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 18, color: INK, margin: "0 0 10px" }}>Siparişler <span style={{ color: SLATE, fontSize: 14 }}>(son {siparisler.length})</span></h2>
        {veri?.siparis_hata && <div style={{ color: RED, fontSize: 13, marginBottom: 8 }}>Siparişler okunamadı: {veri.siparis_hata}</div>}
        {siparisler.length === 0 ? (
          <div style={{ color: SLATE, fontSize: 14 }}>Henüz sipariş yok.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
              <thead><tr style={{ background: "#F1F5F9" }}>
                {["No", "Tarih", "Alıcı", "Kalemler", "Tutar", "Ödeme"].map((h) => (
                  <th key={h} style={{ padding: "7px 10px", color: SLATE, textAlign: "left", whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}` }}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {siparisler.map((s) => (
                  <tr key={s.id}>
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap", color: INK }}>{s.siparis_no || s.id.slice(0, 8)}</td>
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap", color: INK }}>{trTarih(s.created_at)}</td>
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap", color: INK }}>{s.alici_ad}<br /><span style={{ color: SLATE }}>{s.alici_tel}</span></td>
                    <td style={{ padding: "7px 10px", color: INK }}>
                      {(s.urunler || []).map((k, i) => (
                        <div key={i}>{k.baslik} <span style={{ color: SLATE }}>· {k.satici_tur === "benservis" ? "Benservis" : k.servis_ad || "servis"}</span></div>
                      ))}
                    </td>
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap", color: INK }}>{tl(s.tutar)}</td>
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap", color: SLATE }}>{s.odeme_durumu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
