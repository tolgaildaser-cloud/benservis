// src/Sepet.jsx
// Sepet + ödeme akışı — /sepet
// Adım 1: sepet kalemleri · Adım 2: alıcı bilgileri · Adım 3: ödeme/onay
// Ödeme Benservis üzerinden geçer. YK #167 PR-6: pazar (Benservis) siparişi PayTR iFrame
// sayfasına (/odeme/:id) yönlenir; diğer siparişler "odeme_bekleniyor" kaydedilir, onay ekranı çıkar.
import React, { useState, useEffect } from "react";
import { track } from "@vercel/analytics";
import { sepetOku, sepettenCikar, sepetiBosalt } from "./sepet.js";
import BenservisLogo from "./BenservisLogo.jsx";
import { kargoHesapla, UCRETSIZ_KARGO_ESIK_TL } from "./kargo.js";
import { teslimBul } from "./ikinci-el-teslim.js";
import { sepetAnahtari, kalanMs, sureMetni } from "./ikinci-el-kilit.js";
import { KAPI_METNI, talepBaglantisi } from "./odeme-kapisi.js";
import { HAVALE_SURE_SAAT, ibanBicimle } from "./havale.js";
import { NAVY as INK, BLUE as AMBER, GREEN, BLUE as LINK, HAIR as BORDER } from "./theme.js";

// YK #173 şerhi — PayTR test modunda ödeme yalnız admin anahtarıyla açılır. Anahtar RaporPaneli'nin
// localStorage kaydıdır (aynı ADMIN_TOKEN, anahtar adı RaporPaneli LS_KEY ile aynı); yalnız aynı kök
// `/api`ye başlık olarak gider, hiçbir yere yazılmaz/loglanmaz. Kayıt yoksa boş nesne (halk).
const ADMIN_LS_KEY = "benservis_admin";
const adminBasliklari = () => {
  try { const s = localStorage.getItem(ADMIN_LS_KEY); return s ? { Authorization: `Bearer ${s}` } : {}; }
  catch { return {}; }
};


export default function Sepet() {
  const [kalemler, setKalemler] = useState(sepetOku());
  const [adim, setAdim] = useState(
    new URLSearchParams(window.location.search).get("odeme") === "1" && sepetOku().length > 0 ? 2 : 1
  );
  const [form, setForm] = useState({ ad: "", tel: "", eposta: "", adres: "" });
  const [gonderiyor, setGonderiyor] = useState(false);
  const [hata, setHata] = useState("");
  const [sonuc, setSonuc] = useState(null); // { siparis, odeme }

  // İkinci el sepet kilidi geri sayımı (Tolga, 11 Eki 12:4x: 5 dk; süre dolarsa ürün sepette kalır).
  const [simdi, setSimdi] = useState(Date.now());
  useEffect(() => {
    if (!kalemler.some(k => k.tip === "ikinci-el")) return undefined;
    const t = setInterval(() => setSimdi(Date.now()), 1000);
    return () => clearInterval(t);
  }, [kalemler]);
  const cikar = (k) => {
    if (k.tip === "ikinci-el") {
      fetch("/api/ikinci-el/kilit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: k.id, anahtar: sepetAnahtari(), birak: true }),
      }).catch(() => { /* kilit zaten süreyle kalkar */ });
    }
    sepettenCikar(k.id);
  };

  useEffect(() => {
    const f = () => setKalemler(sepetOku());
    window.addEventListener("bs-sepet-degisti", f);
    return () => window.removeEventListener("bs-sepet-degisti", f);
  }, []);

  const urunToplam = kalemler.reduce((s, k) => s + k.fiyat, 0);
  // YK #166 PR-4 (Tolga 10 Eki: fiyat kargo hariç, kargo sepette ayrı satır) + #167 PR-6
  // (Tolga 11 Eki: sabit kargo, KARGO_TL). Yasa gereği onaydan önce kargo dahil toplam gösterilir;
  // sunucu (/api/siparis) aynı sabitle hesaplar, istemcideki tutar kullanılmaz.
  // 12 Eki: kargo 189 TL; kargolu ürünler 3.000 TL'yi aşarsa aynı tutar indirim satırıyla düşülür
  // (Tolga: "kargo bedeli gösterilsin, indirim olarak silinsin"). Hesap src/kargo.js'te, sunucuyla ortak.
  const kargoSatiri = kalemler.some(k => k.kargo_haric);
  const kh = kargoHesapla(kalemler.filter(k => k.kargo_haric).reduce((s, k) => s + k.fiyat, 0), kargoSatiri);
  const kargo = kh.kargo_tl;
  const toplam = urunToplam + kh.net_kargo_tl;
  // YK #171 İE-3: ikinci el kalemi kargo almaz; teslim seçimi kalemde. Nakliye/montaj tutarı
  // yok ("ayrıca hesaplanır"), ödemeye girmez. Benservis satıcısı olduğu için yine mesafeli satış.
  const ikinciEl = kalemler.filter(k => k.tip === "ikinci-el");
  const ekTeslim = ikinciEl.some(k => k.teslim && k.teslim !== "depo");
  const pazarSiparisi = kargoSatiri || ikinciEl.length > 0;
  // Pazaryeri belgeleri (10 Eki 2026): pazar ürünü olan siparişte ön bilgilendirme +
  // mesafeli satış onayı zorunlu (Mesafeli Sözleşmeler Yönetmeliği md.5-6). Kutu işaretsiz başlar.
  const [sozlesmeOnay, setSozlesmeOnay] = useState(false);

  // Ödeme kapısı (YK #173): null = okunuyor · true = halk, test modu → kart · false = form.
  // Sunucu karar verir (/api/odeme/kapi); okuma başarısızsa form açılır, sipariş ucu 403 `kapi` ile yine durdurur.
  // YK #174: aynı uç kart / havale seçeneklerini de döner. İkisi açıksa alıcı seçer; tekse o kullanılır.
  const [kapi, setKapi] = useState(pazarSiparisi ? null : false);
  const [secenek, setSecenek] = useState({ kart: false, havale: false });
  const [yontem, setYontem] = useState("kart");
  useEffect(() => {
    if (!pazarSiparisi) { setKapi(false); return undefined; }
    let iptal = false;
    fetch("/api/odeme/kapi", { headers: adminBasliklari() })
      .then(r => r.json())
      .then(d => {
        if (iptal) return;
        setKapi(d?.kapi === true);
        setSecenek({ kart: d?.kart === true, havale: d?.havale === true });
        setYontem(d?.kart === true ? "kart" : d?.havale === true ? "havale" : "kart");
      })
      .catch(() => { if (!iptal) setKapi(false); });
    return () => { iptal = true; };
  }, [pazarSiparisi]);
  const havaleSecili = pazarSiparisi && yontem === "havale" && secenek.havale;
  const kapiKalemi = kalemler.find(k => k.kargo_haric) || kalemler[0];

  const siparisVer = async (e) => {
    e.preventDefault();
    setHata("");
    if (!form.ad.trim())  { setHata("Ad soyad zorunludur."); return; }
    if (!form.tel.trim() || form.tel.replace(/\D/g, "").length < 10) { setHata("Geçerli bir telefon girin."); return; }
    if (pazarSiparisi && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.eposta.trim())) { setHata("Geçerli bir e-posta adresi girin."); return; }
    if (pazarSiparisi && form.adres.trim().length < 10) { setHata("Teslimat için açık adres girin."); return; }
    if (pazarSiparisi && !sozlesmeOnay) { setHata("Siparişi vermek için Ön Bilgilendirme Formu'nu ve Mesafeli Satış Sözleşmesi'ni onaylayın."); return; }
    setGonderiyor(true);
    try {
      const res = await fetch("/api/siparis", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...adminBasliklari() },
        body: JSON.stringify({
          urun_idler: kalemler.filter(k => k.tip !== "ikinci-el").map(k => k.id),
          ...(ikinciEl.length ? { ilanlar: ikinciEl.map(k => ({ id: k.id, teslim: k.teslim || "depo" })), sepet_anahtari: sepetAnahtari() } : {}),
          alici_ad: form.ad.trim(),
          alici_tel: form.tel.trim(),
          alici_adres: form.adres.trim() || null,
          ...(pazarSiparisi ? { alici_email: form.eposta.trim(), sozlesme_onay: sozlesmeOnay } : {}),
          ...(havaleSecili ? { odeme_yontemi: "havale" } : {}),
        }),
      });
      const d = await res.json();
      if (!res.ok && d?.kapi) { setKapi(true); setGonderiyor(false); return; } // test modu kapısı: sipariş yazılmadı
      if (!res.ok) throw new Error(d.error || "Sipariş oluşturulamadı");
      if (pazarSiparisi) {
        try { track("siparis_olustur", { satici: "benservis", adet: kalemler.length, ikinci_el: ikinciEl.length, odeme: d.odeme || "" }); } catch { /* ölçüm akışı bozmaz */ }
      }
      sepetiBosalt();
      if (d.odeme === "paytr" && d.odeme_url) { window.location.assign(d.odeme_url); return; }
      setSonuc(d);
      setAdim(3);
    } catch (err) { setHata(err.message); }
    setGonderiyor(false);
  };

  const inp = { width: "100%", padding: "11px 13px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box", marginBottom: 13, background: "#fff" };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Hanken Grotesk', sans-serif", color: INK }}>
      

      {/* Header */}
      {/* Dönüş bağlantıları /pazar (Tolga, 11 Eki: "sepet sayfasında yedek parça ürünlerine dönemiyorum"; eskiden /ikinci-el). */}
      {/* Koyu bant + açık renk logo/motto (Tolga, 11 Eki: "bil gör çağır beyaz zeminde gözükmüyor,
          o bandı da koyu yap diğer sayfalardaki gibi") — ana sayfa üst barıyla aynı renkler. */}
      <header style={{ background: INK, borderBottom: `3px solid ${AMBER}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <a href="/" aria-label="Benservis ana sayfa" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <BenservisLogo style={{ height: 42, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </a>
          <a href="/pazar" style={{ fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "none", border: "1.5px solid rgba(255,255,255,.55)", borderRadius: 999, padding: "7px 14px", whiteSpace: "nowrap" }}>← Pazaryeri</a>
        </div>
      </header>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 50px" }}>

        {/* Adım göstergesi */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, fontSize: 12, fontWeight: 700 }}>
          {["Sepet", "Bilgiler", "Ödeme"].map((t, i) => (
            <div key={t} style={{
              flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 7,
              background: adim === i + 1 ? INK : adim > i + 1 ? "#F1F5F9" : "#F1F5F9",
              color: adim === i + 1 ? "#F1F5F9" : adim > i + 1 ? GREEN : "#94A3B8",
            }}>
              {adim > i + 1 ? "✓ " : `${i + 1}. `}{t}
            </div>
          ))}
        </div>

        {/* ── ADIM 1: SEPET ── */}
        {adim === 1 && (
          kalemler.length === 0 ? (
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "54px 16px" }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🛒</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Sepetiniz boş</div>
              <div style={{ fontSize: 13, color: "#64748B", marginBottom: 18 }}>Pazaryerindeki yedek parçalara göz atın, beğendiğinizi sepete ekleyin.</div>
              <a href="/pazar" style={{ display: "inline-block", padding: "11px 22px", borderRadius: 8, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Ürünlere Göz At →
              </a>
            </div>
          ) : (
            <>
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 14 }}>
                {kalemler.map(k => (
                  <div key={k.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderBottom: "1px solid #F1F5F9" }}>
                    {k.gorsel_url
                      ? <img src={k.gorsel_url} alt={k.baslik} style={{ width: 64, height: 50, objectFit: "cover", borderRadius: 5, flexShrink: 0 }} />
                      : <div style={{ width: 64, height: 50, borderRadius: 5, background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>📦</div>}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13.5, color: LINK }}>{k.baslik}</div>
                      {k.servis_ad && <div style={{ fontSize: 11.5, color: "#64748B" }}>🏪 {k.servis_ad}</div>}
                      {k.tip === "ikinci-el" && (
                        <div style={{ fontSize: 11.5, color: "#64748B" }}>
                          İkinci el · {k.dosya_no} · Teslim: {teslimBul(k.teslim)?.ad || "Depodan teslim al"}
                          {k.teslim && k.teslim !== "depo" ? " (ücreti ayrıca hesaplanır)" : ""}
                        </div>
                      )}
                      {k.tip === "ikinci-el" && (kalanMs(k.kilit_bitis, simdi) > 0 ? (
                        <div style={{ fontSize: 11.5, color: "#15803D", fontWeight: 700 }}>
                          Senin için ayrıldı · {sureMetni(kalanMs(k.kilit_bitis, simdi))} içinde ödemeye geç
                        </div>
                      ) : (
                        <div style={{ fontSize: 11.5, color: "#9A3412", fontWeight: 700 }}>
                          Ayırma süresi doldu · ürün sepette, ama başka bir müşteri de satın alabilir
                        </div>
                      ))}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, whiteSpace: "nowrap" }}>{k.fiyat.toLocaleString("tr-TR")} TL</div>
                    <button onClick={() => cikar(k)} aria-label={`${k.baslik} sepetten çıkar`}
                      style={{ border: "none", background: "none", color: "#DC2626", fontSize: 15, cursor: "pointer", padding: 4 }}>✕</button>
                  </div>
                ))}
                {kargoSatiri && (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 16px", fontSize: 13.5, color: "#64748B", borderBottom: "1px solid #F1F5F9" }}>
                    <span>Kargo</span>
                    <span>{kargo.toLocaleString("tr-TR")} TL</span>
                  </div>
                )}
                {kh.kargo_indirim_tl > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 16px", fontSize: 13.5, color: "#15803D", fontWeight: 600, borderBottom: "1px solid #F1F5F9" }}>
                    <span>Kargo indirimi ({UCRETSIZ_KARGO_ESIK_TL.toLocaleString("tr-TR")} TL üzeri)</span>
                    <span>−{kh.kargo_indirim_tl.toLocaleString("tr-TR")} TL</span>
                  </div>
                )}
                {kargoSatiri && kh.esige_kalan_tl > 0 && (
                  <div style={{ padding: "9px 16px", fontSize: 12.5, color: "#64748B", borderBottom: "1px solid #F1F5F9" }}>
                    {kh.esige_kalan_tl.toLocaleString("tr-TR")} TL daha ekleyin, kargo bedava.
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", fontWeight: 700, fontSize: 15 }}>
                  <span>{kargoSatiri ? "Toplam (kargo dahil)" : "Toplam"}</span>
                  <span style={{ color: AMBER }}>{toplam.toLocaleString("tr-TR")} TL</span>
                </div>
                {ekTeslim && (
                  <div style={{ padding: "0 16px 13px", fontSize: 12, color: "#64748B" }}>
                    Nakliye / montaj ücreti ayrıca hesaplanır; bu toplama ve ödenecek tutara dahil değildir.
                  </div>
                )}
              </div>
              <button onClick={() => setAdim(2)}
                style={{ width: "100%", padding: 14, borderRadius: 8, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                Ödemeye Geç →
              </button>
              <a href="/pazar" style={{ display: "block", textAlign: "center", marginTop: 12, fontSize: 13, color: LINK }}>← Alışverişe devam et</a>
            </>
          )
        )}

        {/* ── ADIM 2: ÖDEME KAPISI (YK #173 şerhi) — PayTR test modunda halk için ── */}
        {adim === 2 && kapi === null && (
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "40px 20px", color: "#64748B", fontSize: 14 }}>
            Ödeme adımı hazırlanıyor…
          </div>
        )}
        {adim === 2 && kapi === true && (
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "44px 20px" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>📞</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700, marginBottom: 10 }}>Ödeme çok yakında.</div>
            <div style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 22px" }}>
              {KAPI_METNI.replace(/^Ödeme çok yakında\.\s*/, "")}
              {kapiKalemi?.baslik && <><br />Talebiniz <strong>{kapiKalemi.baslik}</strong> için açılır; numaranızı yazmanız yeter.</>}
            </div>
            <a href={talepBaglantisi(kapiKalemi)} data-kapi-talep
              style={{ display: "inline-block", padding: "13px 26px", borderRadius: 8, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Numaramı bırak →
            </a>
            <button type="button" onClick={() => setAdim(1)}
              style={{ display: "block", margin: "14px auto 0", border: "none", background: "none", fontSize: 13, color: LINK, cursor: "pointer", fontFamily: "inherit" }}>
              ← Sepete dön
            </button>
          </div>
        )}

        {/* ── ADIM 2: ALICI BİLGİLERİ ── */}
        {adim === 2 && kapi === false && (
          <form onSubmit={siparisVer}>
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "18px 18px 6px", marginBottom: 14 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Teslimat Bilgileri</div>
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Ad Soyad *</label>
              <input style={inp} value={form.ad} onChange={e => setForm(f => ({ ...f, ad: e.target.value }))} placeholder="Adınız Soyadınız" />
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Telefon *</label>
              <input style={inp} type="tel" value={form.tel} onChange={e => setForm(f => ({ ...f, tel: e.target.value }))} placeholder="0555 123 45 67" />
              {pazarSiparisi && (<>
                <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>E-posta * <span style={{ fontWeight: 400, color: "#94A3B8" }}>(sipariş ve fatura için)</span></label>
                <input style={inp} type="email" autoComplete="email" value={form.eposta} onChange={e => setForm(f => ({ ...f, eposta: e.target.value }))} placeholder="ornek@eposta.com" />
              </>)}
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Adres{pazarSiparisi ? " *" : ""} <span style={{ fontWeight: 400, color: "#94A3B8" }}>{kargoSatiri ? "(kargo teslimatı için açık adres)" : pazarSiparisi ? "(fatura ve teslimat için açık adres)" : "(teslimat / randevu için)"}</span></label>
              <input style={inp} value={form.adres} onChange={e => setForm(f => ({ ...f, adres: e.target.value }))} placeholder="İlçe, mahalle, sokak…" />
            </div>

            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "13px 16px", marginBottom: 14, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14.5 }}>
              <span>{kalemler.length} ürün{kargoSatiri ? (kh.kargo_indirim_tl > 0 ? " · kargo bedava" : ` + ${kargo.toLocaleString("tr-TR")} TL kargo`) : ""}</span>
              <span style={{ color: AMBER }}>{toplam.toLocaleString("tr-TR")} TL</span>
            </div>

            {/* YK #174: ödeme yöntemi. İki yöntem açıksa seçim; yalnız havale açıksa bilgi notu. */}
            {pazarSiparisi && secenek.havale && (
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "14px 16px", marginBottom: 14 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Ödeme Yöntemi</div>
                {secenek.kart && (
                  <label style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 14, marginBottom: 8, cursor: "pointer" }}>
                    <input type="radio" name="odeme-yontemi" checked={yontem === "kart"} onChange={() => setYontem("kart")} style={{ accentColor: "#2563EB" }} />
                    Kredi / banka kartı
                  </label>
                )}
                <label style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 14, cursor: secenek.kart ? "pointer" : "default" }}>
                  {secenek.kart && <input type="radio" name="odeme-yontemi" checked={yontem === "havale"} onChange={() => setYontem("havale")} style={{ accentColor: "#2563EB" }} />}
                  <span><strong>Havale / EFT</strong></span>
                </label>
                {havaleSecili && (
                  <div style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, marginTop: 8 }}>
                    Siparişi oluşturunca hesap bilgileri ve sipariş numaranız ekranda çıkar. Ödemeyi açıklamaya sipariş
                    numaranızı yazarak <strong>{HAVALE_SURE_SAAT} saat içinde</strong> yapın; ödeme hesabımıza geçince siparişiniz hazırlanır.
                  </div>
                )}
              </div>
            )}

            {pazarSiparisi && (
              <label style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12.5, lineHeight: 1.5, color: "#475569", marginBottom: 14, cursor: "pointer" }}>
                <input type="checkbox" checked={sozlesmeOnay} onChange={e => setSozlesmeOnay(e.target.checked)} style={{ marginTop: 3, accentColor: "#2563EB" }} />
                <span>
                  <a href="/on-bilgilendirme-formu/" target="_blank" rel="noopener noreferrer" style={{ color: LINK, fontWeight: 600 }}>Ön Bilgilendirme Formu</a>'nu ve{" "}
                  <a href="/mesafeli-satis-sozlesmesi/" target="_blank" rel="noopener noreferrer" style={{ color: LINK, fontWeight: 600 }}>Mesafeli Satış Sözleşmesi</a>'ni okudum, onaylıyorum.
                  Kişisel verilerim{" "}
                  <a href="/pazaryeri-aydinlatma-metni/" target="_blank" rel="noopener noreferrer" style={{ color: LINK, fontWeight: 600 }}>Aydınlatma Metni</a>'nde belirtildiği şekilde işlenir.
                </span>
              </label>
            )}
            {hata && <div style={{ color: "#DC2626", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{hata}</div>}

            <button type="submit" disabled={gonderiyor}
              style={{ width: "100%", padding: 14, borderRadius: 8, border: "none", background: GREEN, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", opacity: gonderiyor ? 0.7 : 1 }}>
              {gonderiyor ? "Sipariş oluşturuluyor…" : havaleSecili ? "Siparişi Oluştur, Hesap Bilgilerini Göster" : "🔒 Güvenli Ödemeye Geç"}
            </button>
            {!havaleSecili && (
              <div style={{ fontSize: 11.5, color: "#64748B", textAlign: "center", marginTop: 9 }}>
                Ödemeniz Benservis güvencesiyle platform üzerinden alınır, ürünü teslim aldığınızda satıcıya aktarılır.
              </div>
            )}
            <button type="button" onClick={() => setAdim(1)}
              style={{ display: "block", margin: "12px auto 0", border: "none", background: "none", fontSize: 13, color: LINK, cursor: "pointer", fontFamily: "inherit" }}>
              ← Sepete dön
            </button>
          </form>
        )}

        {/* ── ADIM 3: HAVALE TALİMATI (YK #174) — e-posta altyapısı yok, talimat yalnız ekranda ── */}
        {adim === 3 && sonuc?.odeme === "havale" && sonuc.havale && (
          <HavaleTalimati siparisNo={sonuc.siparis.siparis_no} h={sonuc.havale} />
        )}

        {/* ── ADIM 3: ÖDEME / ONAY ── */}
        {adim === 3 && sonuc && sonuc.odeme !== "havale" && (
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "44px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>✅</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700, marginBottom: 8 }}>
              Siparişiniz Alındı
            </div>
            <div style={{ display: "inline-block", background: "#F1F5F9", borderRadius: 8, padding: "8px 18px", marginBottom: 16 }}>
              <span style={{ fontSize: 11.5, color: "#64748B" }}>Sipariş No</span><br />
              <strong style={{ fontSize: 17 }}>{sonuc.siparis.siparis_no}</strong>
            </div>
            <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 22px" }}>
              {sonuc.odeme === "yakinda" ? (
                <>Kart ile güvenli ödeme <strong>çok yakında</strong> aktif oluyor.
                Siparişiniz kaydedildi — Benservis ekibi ödeme ve teslimat için
                <strong> kısa süre içinde sizi arayacak</strong>.</>
              ) : (
                <>Ödeme sayfasına yönlendiriliyorsunuz…</>
              )}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: AMBER, marginBottom: 22 }}>
              Toplam: {sonuc.siparis.tutar.toLocaleString("tr-TR")} TL
            </div>
            <a href="/pazar" style={{ display: "inline-block", padding: "12px 26px", borderRadius: 8, background: INK, color: "#F1F5F9", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Alışverişe Devam Et
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Havale talimatı: hesap adı, IBAN, tutar, açıklama (sipariş no), son ödeme anı. Kopyala düğmeleri
// panoya yazar; pano erişimi yoksa metin seçilebilir kalır. IBAN tarayıcıda saklanmaz (yalnız bu
// cevapta), bu yüzden sayfa kapanınca talimat tekrar gösterilmez; alıcıya not alması söylenir.
function HavaleTalimati({ siparisNo, h }) {
  const [kopyalanan, setKopyalanan] = useState("");
  const kopyala = (ad, deger) => {
    try { navigator.clipboard.writeText(deger).then(() => setKopyalanan(ad), () => {}); } catch { /* pano yok */ }
  };
  const son = new Date(h.son_odeme);
  const satir = (ad, deger, kopya) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", borderBottom: "1px solid #F1F5F9" }}>
      <div style={{ width: 110, flexShrink: 0, fontSize: 12.5, color: "#64748B" }}>{ad}</div>
      <div style={{ flex: 1, minWidth: 0, fontWeight: 700, fontSize: 14.5, wordBreak: "break-word" }}>{deger}</div>
      {kopya && (
        <button type="button" onClick={() => kopyala(ad, kopya)}
          style={{ border: `1px solid ${BORDER}`, background: "#fff", borderRadius: 6, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: LINK, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
          {kopyalanan === ad ? "Kopyalandı" : "Kopyala"}
        </button>
      )}
    </div>
  );
  return (
    <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "26px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🏦</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700, marginBottom: 6 }}>Siparişiniz alındı, ödemenizi bekliyoruz</div>
        <div style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
          Aşağıdaki hesaba havale / EFT yapın. <strong>Açıklamaya sipariş numaranızı yazın.</strong>
        </div>
      </div>
      {satir("Sipariş No", siparisNo, siparisNo)}
      {satir("Hesap adı", h.hesap_adi, h.hesap_adi)}
      {satir("IBAN", ibanBicimle(h.iban), h.iban)}
      {satir("Tutar", `${Number(h.tutar).toLocaleString("tr-TR")} TL`, String(h.tutar))}
      {satir("Açıklama", h.aciklama, h.aciklama)}
      <div style={{ fontSize: 12.5, color: "#9A3412", fontWeight: 600, lineHeight: 1.6, marginTop: 14 }}>
        Son ödeme: {son.toLocaleString("tr-TR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}.
        Bu süre içinde ödeme hesabımıza geçmezse sipariş iptal olur.
      </div>
      <div style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, marginTop: 8 }}>
        Ödemeniz hesabımıza geçince siparişiniz hazırlanır ve telefonla bilgi verilir. Bu bilgileri not alın;
        sayfayı kapatınca tekrar gösterilmez.
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <a href="/pazar" style={{ display: "inline-block", padding: "12px 26px", borderRadius: 8, background: INK, color: "#F1F5F9", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Alışverişe Devam Et
        </a>
      </div>
    </div>
  );
}
