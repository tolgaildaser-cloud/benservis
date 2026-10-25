// src/YerindePanel.jsx — `/yerinde` yerinde servis koordinatör paneli (YK #183 PR-2, 24 Eki 2026). noindex, menüsüz, sitemap dışı.
// Hedef görünüm: ~/Desktop/Yerinde Servis/2-servis-paneli.html — dört sekme (Genel bakış · Kiwi kaydı gir · İş emirleri ·
// Takvim) birebir. Prototipte veri localStorage'daydı; burada GET/POST /api/yerinde/isler ve PATCH /api/yerinde/is/:id.
// Kurallar ve öneri modeli src/yerinde-cekirdek.js'te (API ile ortak). Rol yalnız app_metadata.rol (src/yerinde-kimlik.js).
// Teknisyen mobil görünümü (PR-3, 24 Eki): kendi işleri, saha geçişleri, seri no + fotoğraf (private bucket, imzalı URL).
// Verimor tıkla-ara PR-4: "Ara" düğmesi yok, telefon tel: bağlantısıdır.
// ⛔ Kişisel veri analitiğe/loga gitmez; bu bileşen track() çağırmaz.
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BenservisLogo from "./BenservisLogo.jsx";
import { supabase } from "./lib/supabase.js";
import { yerindeRolOku } from "./yerinde-kimlik.js";
import { TR_IL_ILCE } from "./tr-iller.js";
import {
  PILOT_IL, ILCE_KONUM, TEKNISYENLER, SLOTLAR, CALISMA_GUNLERI, URUNLER, URUN_MODEL, DURUMLAR, durumAd, KAPALI,
  GECISLER, TEKNISYEN_GECISLER, FOTO_TIPLERI, FOTO_EN_FAZLA, GARANTI_SECENEK, arizalarFor, tekFor, pad, slotAd, slotKisa, isoDay, isWorkDay, addWorkDays, monday,
  fmtDT, fmtD, fmtDS, gunAdi, slaAsimi, yolDk, randevuOner, slotIsleri, slotEngeli, slotEngelMetni, planlanabilir, olayMetni, ozet,
  kisiselVeriVar, cepNormal, SIKISIK_DK,
} from "./yerinde-cekirdek.js";

const ILLER = Object.keys(TR_IL_ILCE).sort((a, b) => a.localeCompare(b, "tr"));
const SAYFALAR = {
  genel: ["Genel bakış", "Bugünün durumu", "Açık iş emirleri, aranacak müşteriler ve teknisyen kapasitesinin güncel özeti."],
  yeni: ["Kiwi kaydı", "Yeni iş emri", "Kiwi e-postasındaki bilgileri girin; müşteriyi arayınca tercihini ve randevuyu alt bölüme yazın."],
  isler: ["İş emirleri", "Tüm iş emirleri", "Aranacak kayıtlar en üstte. Bir satıra tıklayınca ayrıntı ve randevu önerileri açılır."],
  takvim: ["Takvim", "Haftalık randevu planı", "Her yakada bir teknisyen · 2 saatlik aralıklar · ilçe merkezleri arası tahmini yol süresi."],
};

// ─── Simgeler (prototipten) ──────────────────────────────────────────────────────────────────────
const P = {
  pano: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /></>,
  tel: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  takvim: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  tamam: <path d="M20 6 9 17l-5-5" />,
  zil: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>,
  ok: <path d="m9 18 6-6-6-6" />,
  genel: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  yeni: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M9 15h6M12 12v6" /></>,
  isler: <><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" /></>,
  yenile: <><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>,
  cikis: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5M21 12H9" /></>,
  bilgi: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></>,
  arti: <path d="M12 5v14M5 12h14" />,
  sag: <path d="M5 12h14M12 5l7 7-7 7" />,
};
const Ic = ({ p, sw = 1.9 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{P[p]}</svg>
);
const basHarf = (ad) => String(ad || "").replace(/\(örnek\)/, "").trim().split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toLocaleUpperCase("tr")).join("") || "?";

// ─── Veri katmanı: canlıda API, `npm run dev` + ?onizleme=1'de bellek içi örnek (yalnız ekran görüntüsü için) ─
const ONIZLEME = import.meta.env.DEV && typeof window !== "undefined" && new URLSearchParams(window.location.search).has("onizleme");
const ONIZLEME_TEKNISYEN = ONIZLEME && new URLSearchParams(window.location.search).get("onizleme") === "teknisyen";

async function apiCagir(yol, secenek = {}) {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  const r = await fetch(yol, {
    ...secenek,
    headers: { "content-type": "application/json", ...(token ? { authorization: "Bearer " + token } : {}) },
  });
  const govde = await r.json().catch(() => ({}));
  return { ok: r.ok, kod: r.status, ...govde };
}

export default function YerindePanel() {
  const [durum, setDurum] = useState(ONIZLEME_TEKNISYEN ? "teknisyen" : ONIZLEME ? "hazir" : "yukleniyor"); // yukleniyor | giris | yetkisiz | teknisyen | hazir
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Yerinde servis paneli · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, nofollow";
    document.head.appendChild(m);
    if (ONIZLEME) return () => m.remove();
    const kontrol = (u) => {
      if (!u) { setDurum("giris"); return; }
      setEmail(u.email || "");
      const rol = yerindeRolOku(u);
      setDurum(rol === "yerinde_koordinator" ? "hazir" : rol === "yerinde_teknisyen" ? "teknisyen" : "yetkisiz");
    };
    supabase.auth.getSession().then(({ data }) => kontrol(data.session?.user));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => kontrol(s?.user));
    return () => { sub?.subscription?.unsubscribe(); m.remove(); };
  }, []);

  const cikis = async () => { await supabase.auth.signOut(); setDurum("giris"); };

  return (
    <div className="yp">
      <style>{CSS}</style>
      {durum === "yukleniyor" && <div className="yp-orta"><p className="hint">Yükleniyor…</p></div>}
      {durum === "giris" && <Giris />}
      {durum === "teknisyen" && <TeknisyenGorunum email={email} onCikis={cikis} />}
      {durum === "yetkisiz" && (
        <div className="yp-orta">
          <div className="yp-kutu">
            <BenservisLogo style={{ height: 34, width: "auto" }} benColor="#1E293B" servisColor="#2563EB" mottoColor="#64748B" />
            <h1>Bu panel için yetkin yok</h1>
            <p className="hint">Yerinde servis paneli yalnız tanımlı koordinatör ve teknisyen hesaplarıyla açılır. Hesap tanımı için info@benservis.com.</p>
            <p className="hint mono">{email}</p>
            <button className="btn" type="button" onClick={cikis}>Çıkış yap</button>
          </div>
        </div>
      )}
      {durum === "hazir" && <Panel email={email} onCikis={cikis} />}
    </div>
  );
}

function Giris() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [yuk, setYuk] = useState(false);
  const gonder = async (e) => {
    e.preventDefault();
    setYuk(true); setHata("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: sifre });
    setYuk(false);
    if (error) setHata("E-posta ya da şifre hatalı.");
  };
  return (
    <div className="yp-orta">
      <form className="yp-kutu" onSubmit={gonder}>
        <BenservisLogo style={{ height: 34, width: "auto" }} benColor="#1E293B" servisColor="#2563EB" mottoColor="#64748B" />
        <h1>Yerinde servis paneli</h1>
        <p className="hint">Koordinatör ve teknisyen hesabıyla giriş yapın.</p>
        <div className="field"><label htmlFor="g-eposta">E-posta</label><input id="g-eposta" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
        <div className="field"><label htmlFor="g-sifre">Şifre</label><input id="g-sifre" type="password" autoComplete="current-password" value={sifre} onChange={(e) => setSifre(e.target.value)} required /></div>
        {hata && <p className="flag" role="alert">{hata}</p>}
        <button className="btn primary" type="submit" disabled={yuk}>{yuk ? "Giriş yapılıyor…" : "Giriş yap"}</button>
      </form>
    </div>
  );
}

// ─── Panel ───────────────────────────────────────────────────────────────────────────────────────
function Panel({ email, onCikis }) {
  const [isler, setIsler] = useState(ONIZLEME ? ornekVeri : []);
  const [teknisyenler, setTeknisyenler] = useState(TEKNISYENLER);
  const [yuklendi, setYuklendi] = useState(ONIZLEME);
  const [hata, setHata] = useState("");
  const [view, setView] = useState(() => (ONIZLEME && new URLSearchParams(window.location.search).get("onizleme")) || "genel");
  const [secili, setSecili] = useState(null);
  const [tost, setTost] = useState("");
  const [bilgi, setBilgi] = useState(false);
  const tostZ = useRef(null);

  const toast = useCallback((m) => {
    setTost(m); clearTimeout(tostZ.current); tostZ.current = setTimeout(() => setTost(""), 2600);
  }, []);

  const yukle = useCallback(async () => {
    if (ONIZLEME) return;
    const r = await apiCagir("/api/yerinde/isler");
    if (!r.ok) { setHata(r.error || "Liste yüklenemedi"); return; }
    setIsler(r.isler || []);
    if (r.teknisyenler?.length) setTeknisyenler(r.teknisyenler);
    setHata(""); setYuklendi(true);
  }, []);
  useEffect(() => { yukle(); }, [yukle]);
  useEffect(() => {
    if (ONIZLEME) return undefined;
    const t = setInterval(() => { if (document.visibilityState === "visible") yukle(); }, 60000);
    return () => clearInterval(t);
  }, [yukle]);

  // Tek işi listede yerine koy (API dönüşü ya da önizleme hesaplaması)
  const isGuncelle = (j) => setIsler((l) => (l.some((x) => x.id === j.id) ? l.map((x) => (x.id === j.id ? j : x)) : [j, ...l]));

  const isKaydet = async (j, istek) => {
    if (ONIZLEME) { const y = onizlemeUygula(j, istek); isGuncelle(y); return { ok: true, is: y }; }
    const r = await apiCagir(`/api/yerinde/is/${j.id}`, { method: "PATCH", body: JSON.stringify({ guncel: j.guncel, ...istek }) });
    if (r.ok && r.is) isGuncelle(r.is);
    if (r.yenile) yukle();
    return r;
  };
  const isOlustur = async (govde) => {
    if (ONIZLEME) {
      const no = "KWS-" + (Math.max(1039, ...isler.map((j) => +j.no.split("-")[1] || 0)) + 1);
      const y = { ...govde, id: no, no, tel: cepNormal(govde.tel) || govde.tel, tek: tekFor(govde.il, govde.ilce), durum: govde.randevuGun ? "randevu" : "yeni",
        aramalar: 0, ilkZiyarette: null, randevuSlot: govde.randevuSlot === "" ? null : Number(govde.randevuSlot),
        istenenSlot: govde.istenenSlot === "" ? null : Number(govde.istenenSlot), talep: govde.talep || new Date().toISOString(),
        log: [{ t: new Date().toISOString(), olay: "kayit" }] };
      isGuncelle(y); return { ok: true, is: y };
    }
    const r = await apiCagir("/api/yerinde/isler", { method: "POST", body: JSON.stringify(govde) });
    if (r.ok && r.is) isGuncelle(r.is);
    return r;
  };

  const o = useMemo(() => ozet(isler, teknisyenler.length), [isler, teknisyenler]);
  const goster = (v) => setView(v);
  const ac = (id) => { setSecili(id); setView("isler"); };
  const [ust, baslik, alt] = SAYFALAR[view];
  const bugunD = new Date();

  return (
    <div className="app">
      <aside className="side">
        <div className="brand">
          <BenservisLogo style={{ height: 30, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#94A3B8" />
          <small>Yerinde servis yönetimi</small>
        </div>
        <nav className="side-nav" role="tablist" aria-orientation="vertical" aria-label="Bölümler">
          <span className="nav-h">Çalışma alanı</span>
          {[["genel", "Genel bakış"], ["yeni", "Kiwi kaydı gir"], ["isler", "İş emirleri"], ["takvim", "Takvim"]].map(([v, ad]) => (
            <button key={v} role="tab" type="button" aria-selected={view === v} onClick={() => goster(v)}>
              <Ic p={v} sw={1.8} /><span>{ad}</span>
              {v === "isler" && o.aranacak.length > 0 && <em className="badge" title="Aranacak">{o.aranacak.length}</em>}
              {v === "takvim" && o.bugunRandevu.length > 0 && <em>bugün {o.bugunRandevu.length}</em>}
            </button>
          ))}
          <span className="nav-h">Hesap</span>
          <button type="button" onClick={() => { yukle(); toast("Liste yenilendi"); }}><Ic p="yenile" sw={1.8} /><span>Listeyi yenile</span></button>
          <button type="button" onClick={onCikis}><Ic p="cikis" sw={1.8} /><span>Çıkış yap</span></button>
        </nav>
        <div className="user"><span className="user-av">{basHarf(email.split("@")[0].replace(/[._-]+/g, " "))}</span><div><b>{email || "Koordinatör"}</b><small>Koordinatör</small></div></div>
      </aside>
      <div className="shell">
        <header className="topbar">
          <div className="top-l">
            <span className="top-for">Kiwi ürünleri<br />yerinde servis</span>
            <span className="top-sep" aria-hidden="true" />
            <span className="crumb">Panel / <b>{ust}</b></span>
          </div>
          <div className="top-r">
            <span className="pill yer"><i>TR</i>İstanbul · {teknisyenler.length} teknisyen</span>
            <span className="pill mono gunpill">{gunAdi(isoDay(bugunD))} {pad(bugunD.getDate())}.{pad(bugunD.getMonth() + 1)}.{bugunD.getFullYear()}</span>
            <button className="icon-btn" type="button" aria-label="Panel hakkında" aria-expanded={bilgi} onClick={() => setBilgi(!bilgi)}><Ic p="bilgi" sw={1.8} /></button>
          </div>
        </header>
        <div className="page">
          {bilgi && <Tanitim />}
          {hata && <div className="callout" role="alert"><Ic p="zil" /><div><b>Bağlantı sorunu</b>{hata}</div></div>}
          <div className="page-head">
            <div><span className="eyebrow">{ust}</span><h1>{baslik}</h1><p>{alt}</p></div>
            {view !== "yeni" && <button className="btn primary big" type="button" onClick={() => goster("yeni")}><Ic p="arti" sw={2.2} />Yeni iş emri</button>}
          </div>
          {!yuklendi && !hata && <p className="hint">Yükleniyor…</p>}
          {yuklendi && view === "genel" && <Genel o={o} isler={isler} teknisyenler={teknisyenler} ac={ac} goster={goster} />}
          {yuklendi && view === "isler" && <Isler isler={isler} teknisyenler={teknisyenler} secili={secili} setSecili={setSecili} isKaydet={isKaydet} toast={toast} goster={goster} />}
          {yuklendi && view === "takvim" && <Takvim isler={isler} teknisyenler={teknisyenler} ac={ac} />}
          {view === "yeni" && <YeniKayit isler={isler} teknisyenler={teknisyenler} isOlustur={isOlustur} toast={toast} sonra={(id) => ac(id)} />}
        </div>
      </div>
      {tost && <div className="toast" role="status">{tost}</div>}
    </div>
  );
}

function Tanitim() {
  return (
    <section className="intro">
      <div>
        <h2>Kiwi ürünleri için yerinde servis paneli</h2>
        <p>Kiwi'nin e-postayla ilettiği arıza kayıtlarının girilmesi, müşterinin aranıp randevu verilmesi ve Anadolu ile Avrupa yakasındaki teknisyenlerin günlük planı tek ekranda.</p>
        <p className="contact">Görüş ve sorularınız için: <span className="mono">info@benservis.com</span></p>
      </div>
      <ol className="steps">
        <li><b>Kayıt</b>Kiwi e-postasındaki bilgiler formun üst bölümüne girilir; ürün seçilince o ürüne özgü arıza listesi ve model kodları gelir.</li>
        <li><b>Randevu önerisi</b>Müşteri aranınca tercih ettiği gün ve saat girilir; sistem ilçeye göre teknisyeni atar ve ek yolu en az üç aralığı önerir.</li>
        <li><b>Arama</b>Telefon numarasına dokununca arama başlar; 0850 hattından tek tıkla arama bir sonraki sürümde.</li>
        <li><b>Saha ve takip</b>İş emri yolda → serviste → tamamlandı / parça bekliyor / atölye adımlarıyla ilerler; Takvim teknisyen başına doluluğu ve yol süresini gösterir.</li>
      </ol>
    </section>
  );
}

// ─── Genel bakış ─────────────────────────────────────────────────────────────────────────────────
function Genel({ o, isler, teknisyenler, ac, goster }) {
  const sla = o.aranacak.filter((j) => slaAsimi(j));
  const kartlar = [
    ["Açık iş emirleri", o.acik.length, `${o.acik.filter((j) => j.durum === "atolye").length} tanesi atölyede`, "pano", "var(--fg)", "var(--bg)"],
    ["Aranacak", o.aranacak.length, sla.length ? `${sla.length} kayıt 2 iş gününü aştı` : "Hepsi süresinde", "tel", "var(--warn)", "var(--warn-soft)"],
    ["Bugün randevu", o.bugunRandevu.length, `${o.doluAralik}/${o.kapasite} aralık dolu`, "takvim", "var(--accent)", "var(--accent-soft)"],
    ["İlk ziyarette çözüm", o.ftf === null ? "—" : "%" + o.ftf, "hedef ≥ %80", "tamam", "var(--ok)", "var(--ok-soft)"],
  ];
  const yaklasan = isler.filter((j) => j.randevuGun && j.randevuGun >= o.bugun && ["randevu", "yolda", "serviste"].includes(j.durum))
    .sort((a, b) => (a.randevuGun + pad(a.randevuSlot)).localeCompare(b.randevuGun + pad(b.randevuSlot)));
  const yuzde = o.kapasite ? Math.round((100 * o.doluAralik) / o.kapasite) : 0;
  return (
    <section className="dash">
      <div className="kcards">
        {kartlar.map(([l, v, a, ic, c, cs]) => (
          <div key={l} className="kcard" style={{ "--c": c, "--cs": cs }}><header>{l}<i><Ic p={ic} /></i></header><strong>{v}</strong><small>{a}</small></div>
        ))}
      </div>
      <div className="dash-grid">
        <div className="card">
          <div className="card-h"><div><h3>Yaklaşan randevular</h3><p>Bugün ve sonraki iş günlerinde verilen randevular</p></div>
            <button className="lnk" type="button" onClick={() => goster("isler")}>Tüm iş emirleri <Ic p="sag" sw={2} /></button></div>
          <div className="list"><table className="dtable"><thead><tr><th>İş emri</th><th>Müşteri</th><th>Randevu</th><th>Teknisyen</th><th>Durum</th><th /></tr></thead>
            <tbody>
              {yaklasan.slice(0, 6).map((j) => (
                <tr key={j.id} tabIndex={0} onClick={() => ac(j.id)} onKeyDown={(e) => e.key === "Enter" && ac(j.id)}>
                  <td><b className="mono">{j.no}</b><small>{j.urun}</small></td>
                  <td><b>{j.ad}</b><small>{j.ilce}</small></td>
                  <td className="mono">{j.randevuGun === o.bugun ? "Bugün" : gunAdi(j.randevuGun) + " " + fmtD(j.randevuGun).slice(0, 5)} · {slotKisa(j.randevuSlot)}</td>
                  <td className="mono">{j.tek || "—"}</td>
                  <td><span className={"chip s-" + j.durum}>{durumAd[j.durum]}</span></td>
                  <td><span className="go"><Ic p="ok" sw={2} /></span></td>
                </tr>
              ))}
              {!yaklasan.length && <tr><td colSpan={6} className="hint">Yaklaşan randevu yok.</td></tr>}
            </tbody></table></div>
          {yaklasan.length > 0 && <div className="card-f">{yaklasan.length} randevudan {Math.min(6, yaklasan.length)} tanesi gösteriliyor</div>}
        </div>
        <div className="dash-side">
          <div className="card">
            <div className="card-h"><div><h3>Aranacak müşteriler <span className="count">{o.aranacak.length}</span></h3><p>Kiwi'den gelen, randevu verilmemiş kayıtlar</p></div>
              <button className="lnk" type="button" onClick={() => goster("isler")}>Tümünü gör</button></div>
            {sla.length > 0 && <div className="callout"><Ic p="zil" /><div><b>Geciken aramalar var</b>{sla.length} kayıt 2 iş gününden uzun süredir aranmayı bekliyor. Kiwi'nin hizmet süresi hedefini etkileyebilir.</div></div>}
            <ul className="plist">
              {o.aranacak.slice(0, 5).map((j) => (
                <li key={j.id} tabIndex={0} onClick={() => ac(j.id)} onKeyDown={(e) => e.key === "Enter" && ac(j.id)}>
                  <span className="av">{basHarf(j.ad)}</span>
                  <span className="who"><b>{j.ad}</b><small>{j.ilce} · {j.urun}</small></span>
                  {j.aramalar > 0 && <span className="tag">{j.aramalar} kez ulaşılamadı</span>}
                  <span className="go"><Ic p="ok" sw={2} /></span>
                </li>
              ))}
              {!o.aranacak.length && <li className="empty-li">Aranacak kayıt yok.</li>}
            </ul>
          </div>
          <div className="card cap">
            <div className="cap-top">Bugünkü teknisyen kapasitesi<b>%{yuzde}</b></div>
            <strong>{o.doluAralik} <span>/ {o.kapasite} aralık dolu · {o.bugunRandevu.length} iş</span></strong>
            <div className="bar"><i style={{ width: yuzde + "%" }} /></div>
            <small>{teknisyenler.map((t) => { const b = o.bugunRandevu.filter((j) => j.tek === t.kod); return `${t.kod}: ${b.length} iş, ${new Set(b.map((j) => j.randevuSlot)).size}/${SLOTLAR.length} aralık`; }).join(" · ")} · boş {o.kapasite - o.doluAralik} aralık</small>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── İş emirleri: liste + ayrıntı ────────────────────────────────────────────────────────────────
function Isler({ isler, teknisyenler, secili, setSecili, isKaydet, toast, goster }) {
  const [q, setQ] = useState("");
  const [fDurum, setFDurum] = useState("");
  const [fTek, setFTek] = useState("");
  const liste = useMemo(() => {
    const s = q.trim().toLocaleLowerCase("tr");
    const sira = (j) => (j.randevuGun ? j.randevuGun + pad(j.randevuSlot) : "0" + j.talep);
    return isler.filter((j) => (!fDurum || j.durum === fDurum) && (!fTek || j.tek === fTek) &&
      (!s || [j.ad, j.tel, j.no, j.il, j.ilce, j.kiwiRef, j.urun, j.model].join(" ").toLocaleLowerCase("tr").includes(s)))
      .sort((a, b) => KAPALI.includes(a.durum) - KAPALI.includes(b.durum) || sira(a).localeCompare(sira(b)));
  }, [isler, q, fDurum, fTek]);
  const j = isler.find((x) => x.id === secili);
  return (
    <section className="main">
      <div className="panel">
        <header>
          <h2>İş emirleri</h2>
          <button className="btn primary" type="button" onClick={() => goster("yeni")}>+ Yeni iş emri</button>
          <div className="filters">
            <input type="search" placeholder="Ara: ad, telefon, ürün, ref no" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Ara" />
            <select aria-label="Durum" value={fDurum} onChange={(e) => setFDurum(e.target.value)}><option value="">Tüm durumlar</option>{DURUMLAR.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
            <select aria-label="Teknisyen" value={fTek} onChange={(e) => setFTek(e.target.value)}><option value="">Tüm teknisyenler</option>{teknisyenler.map((t) => <option key={t.kod} value={t.kod}>{t.ad}</option>)}</select>
          </div>
        </header>
        <div className="list"><table>
          <thead><tr><th>No</th><th>Müşteri</th><th>İlçe</th><th>Ürün</th><th>Arıza</th><th>Tercih</th><th>Randevu</th><th>Tek.</th><th>Durum</th></tr></thead>
          <tbody>
            {liste.map((x) => (
              <tr key={x.id} className="row" tabIndex={0} aria-selected={x.id === secili} onClick={() => setSecili(x.id)} onKeyDown={(e) => e.key === "Enter" && setSecili(x.id)}>
                <td className="mono">{x.no}</td>
                <td>{x.ad}{slaAsimi(x) && <> <span className="flag" title="2 iş gününü aştı">!</span></>}</td>
                <td>{x.ilce}{x.il !== PILOT_IL && <> <span className="hint">({x.il})</span></>}</td>
                <td>{x.urun}</td><td>{x.belirti}</td>
                <td className="mono">{fmtDS(x.istenenGun, x.istenenSlot)}</td><td className="mono">{fmtDS(x.randevuGun, x.randevuSlot)}</td>
                <td className="mono">{x.tek || "—"}</td>
                <td><span className={"chip s-" + x.durum}>{durumAd[x.durum]}</span>{x.durum === "yeni" && x.aramalar > 0 && <> <span className="mono" title="Ulaşılamayan arama">☎×{x.aramalar}</span></>}</td>
              </tr>
            ))}
            {!liste.length && <tr><td colSpan={9} className="hint">Filtreye uyan iş yok.</td></tr>}
          </tbody>
        </table></div>
      </div>
      <div className="panel" aria-live="polite">
        {j ? <Ayrinti key={j.id + j.guncel} j={j} isler={isler} teknisyenler={teknisyenler} isKaydet={isKaydet} toast={toast} />
          : <div className="detail"><p className="empty">Ayrıntıları görmek için listeden bir iş seçin.</p></div>}
      </div>
    </section>
  );
}

function Oneriler({ liste, sec }) {
  if (!liste.length) return <span className="hint">Öneri için İstanbul ilçesi ve teknisyen gerekli.</span>;
  return liste.map((o, i) => (
    <button key={o.gun + o.saat} type="button" className={"oneri" + (i === 0 ? " best" : "")} onClick={() => sec(o)}>
      <b>{gunAdi(o.gun)} {fmtD(o.gun)} · {slotKisa(o.saat)}</b><span>{o.neden}</span><em>puan {o.maliyet}</em>
    </button>
  ));
}

const SlotSecenek = ({ bos }) => <>{bos && <option value="">{bos}</option>}{SLOTLAR.map((h) => <option key={h} value={h}>{slotAd(h)}</option>)}</>;

function Ayrinti({ j, isler, teknisyenler, isKaydet, toast }) {
  const [f, setF] = useState({
    garanti: j.garanti, seri: j.seri, tek: j.tek || "", istenenGun: j.istenenGun || "", istenenSlot: j.istenenSlot ?? "",
    randevuGun: j.randevuGun || "", randevuSlot: j.randevuSlot ?? "", tnot: j.tnot,
    // Tamamlanmış işte kapanış bilgisi düzeltilebilir: alanlar mevcut değerle açılır.
    parcalar: j.durum === "tamam" ? j.parcalar : "", tutar: j.durum === "tamam" ? (j.tutar ?? "") : "",
  });
  const [mesgul, setMesgul] = useState(false);
  const d = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const sonraki = GECISLER[j.durum] || [];
  const plan = planlanabilir(j.durum);
  const oneriler = plan ? randevuOner(isler, { tek: f.tek, ilce: j.ilce, istenenGun: f.istenenGun || null, istenenSlot: f.istenenSlot === "" ? null : Number(f.istenenSlot), haricNo: j.no }) : [];
  const tnotUyari = kisiselVeriVar(f.tnot) || kisiselVeriVar(f.parcalar);

  const gonder = async (gecis) => {
    if (tnotUyari) { toast("Telefon ya da e-posta yalnız müşteri alanlarına yazılır"); return; }
    if (gecis === "randevu" && (!f.randevuGun || f.randevuSlot === "")) { toast("Önce randevu gününü ve saat aralığını seçin"); return; }
    const rs = f.randevuSlot === "" ? null : Number(f.randevuSlot);
    if (f.tek && f.randevuGun && rs != null) {
      const e = slotEngeli(isler, f.tek, f.randevuGun, rs, j.ilce, j.no);
      if (e) { toast(slotEngelMetni(f.tek, j.ilce, e)); return; }
    }
    setMesgul(true);
    const istek = { alanlar: { garanti: f.garanti, seri: f.seri, tek: f.tek, istenenGun: f.istenenGun, istenenSlot: f.istenenSlot, randevuGun: f.randevuGun, randevuSlot: f.randevuSlot, tnot: f.tnot } };
    if (gecis) istek.gecis = gecis;
    if (gecis === "tamam" && j.durum === "serviste") istek.kapanis = { parcalar: f.parcalar, tutar: f.tutar };
    if (j.durum === "tamam") Object.assign(istek.alanlar, { parcalar: f.parcalar, tutar: f.tutar });
    const r = await isKaydet(j, istek);
    setMesgul(false);
    if (!r.ok) { toast(r.error || "Kaydedilemedi"); return; }
    toast(gecis === "ulasilamadi" ? "Arama denemesi kaydedildi" : gecis ? durumAd[gecis] : r.degisiklik === false ? "Değişiklik yok" : "Kaydedildi");
  };

  return (
    <div className="detail">
      <div className="d-ust"><h3>{j.no} · {j.ad}</h3><span className={"chip s-" + j.durum}>{durumAd[j.durum]}</span></div>
      <div className="sec">
        <div className="sec-h">Kiwi e-postası <span className="mono">{j.kiwiRef ? j.kiwiRef + " · " : ""}{fmtDT(j.talep)}</span></div>
        <dl>
          <dt>Telefon</dt><dd className="telrow"><a className="mono" href={"tel:" + j.tel}>{j.tel}</a></dd>
          <dt>Adres</dt><dd>{j.adres}, {j.ilce} / {j.il}</dd>
          {j.tarif && <><dt>Adres tarifi</dt><dd>{j.tarif}</dd></>}
          <dt>Ürün</dt><dd>{j.urun}{j.model && <> · <span className="mono">{j.model}</span></>}</dd>
          <dt>Arıza</dt><dd>{j.belirti}</dd>
          {j.aciklama && <><dt>Açıklama</dt><dd>{j.aciklama}</dd></>}
        </dl>
      </div>
      <div className="sec rep">
        <div className="sec-h">Müşteri temsilcisi {j.temsilci && <span>{j.temsilci}</span>}</div>
        {j.il !== PILOT_IL && <p className="warnline">Pilot bölge (İstanbul) dışında. Teknisyen atanamaz; Kiwi'ye bildirin.</p>}
        <div className="grid3">
          <div className="field"><label htmlFor="d-garanti">Garanti</label><select id="d-garanti" value={f.garanti} onChange={d("garanti")}>{GARANTI_SECENEK.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
          <div className="field"><label htmlFor="d-seri">Seri no</label><input id="d-seri" value={f.seri} onChange={d("seri")} maxLength={60} /></div>
          <div className="field"><label htmlFor="d-tek">Teknisyen</label><select id="d-tek" value={f.tek} onChange={d("tek")}><option value="">—</option>{teknisyenler.map((t) => <option key={t.kod} value={t.kod}>{t.ad}</option>)}</select></div>
        </div>
        <div className="field"><label htmlFor="d-istenen">Müşterinin tercih ettiği gün ve saat aralığı</label>
          <div className="pair"><input id="d-istenen" type="date" value={f.istenenGun} onChange={d("istenenGun")} /><select aria-label="Tercih edilen saat aralığı" value={f.istenenSlot} onChange={d("istenenSlot")}><SlotSecenek bos="Fark etmez" /></select></div></div>
        {plan && <div className="field"><span className="hint">Önerilen randevular</span><div className="oneriler">
          <Oneriler liste={oneriler} sec={(o) => { setF((x) => ({ ...x, randevuGun: o.gun, randevuSlot: o.saat })); toast("Randevu alanına yazıldı; onaylamak için butona basın"); }} /></div></div>}
        <div className="field"><label htmlFor="d-gun">Randevu</label>
          <div className="pair"><input id="d-gun" type="date" value={f.randevuGun} onChange={d("randevuGun")} /><select aria-label="Randevu saat aralığı" value={f.randevuSlot} onChange={d("randevuSlot")}><SlotSecenek bos="Saat aralığı" /></select></div></div>
        <div className="field"><label htmlFor="d-tnot">Temsilci notu</label><textarea id="d-tnot" rows={2} value={f.tnot} onChange={d("tnot")} maxLength={1000} /></div>
        {j.durum === "serviste" && <div className="grid2">
          <div className="field"><label htmlFor="d-parca">Değişen parçalar</label><input id="d-parca" placeholder="ör. rezistans, şarj soketi" value={f.parcalar} onChange={d("parcalar")} maxLength={300} /></div>
          <div className="field"><label htmlFor="d-tutar">Tahsilat (TL)</label><input id="d-tutar" type="number" min="0" placeholder="Garanti içi ise 0" value={f.tutar} onChange={d("tutar")} /></div></div>}
        {j.durum === "tamam" && <div className="field"><span className="hint">Kapanış bilgisi (teknisyenin girdiğini düzeltebilirsiniz; “Kaydet” ile yazılır)</span>
          <div className="grid2">
            <div className="field"><label htmlFor="d-parca">Değişen parçalar</label><input id="d-parca" placeholder="ör. rezistans, şarj soketi" value={f.parcalar} onChange={d("parcalar")} maxLength={300} /></div>
            <div className="field"><label htmlFor="d-tutar">Tahsilat (TL)</label><input id="d-tutar" type="number" min="0" placeholder="Garanti içi ise 0" value={f.tutar} onChange={d("tutar")} /></div></div></div>}
        {tnotUyari && <p className="warnline" role="alert">Telefon ya da e-posta yalnız müşteri alanlarına yazılır; nottan çıkarın.</p>}
        <div className="actions">
          {sonraki.map(([s, l], i) => <button key={s} className={"btn" + (i === 0 ? " primary" : "")} type="button" disabled={mesgul} onClick={() => gonder(s)}>{l}</button>)}
          <button className="btn" type="button" disabled={mesgul} onClick={() => gonder(null)}>Kaydet</button>
          {!KAPALI.includes(j.durum) && <button className="btn" type="button" disabled={mesgul} onClick={() => gonder("iptal")}>İptal et</button>}
        </div>
        {j.aramalar > 0 && <span className="hint">Ulaşılamadı: {j.aramalar} kez</span>}
        <Fotolar j={j} />
        <div><div className="hint" style={{ marginBottom: 6 }}>Geçmiş</div>
          <div className="log">{j.log.slice().reverse().map((l, i) => <div key={i}><span>{fmtDT(l.t)}</span>{olayMetni(l.olay)}</div>)}</div></div>
      </div>
    </div>
  );
}

// ─── Takvim: teknisyen × gün × 2 saatlik aralık, ardışık işler arası yol tahmini ────────────────
function Takvim({ isler, teknisyenler, ac }) {
  const [hafta, setHafta] = useState(0);
  // Pazar açılınca geçen hafta değil gelecek hafta gösterilir (randevu Pazartesi–Cumartesi).
  const bugunD = new Date();
  const start = monday(bugunD); start.setDate(start.getDate() + (isWorkDay(bugunD) ? 0 : 7) + hafta * 7);
  const days = CALISMA_GUNLERI.map((g) => { const d = new Date(start); d.setDate(d.getDate() + g - 1); return isoDay(d); });
  const bugun = isoDay(new Date());
  return (
    <section className="panel">
      <header>
        <h2>Hafta</h2>
        <div className="actions">
          <button className="btn" type="button" aria-label="Önceki hafta" onClick={() => setHafta(hafta - 1)}>‹</button>
          <span className="mono">{fmtD(days[0])} – {fmtD(days[days.length - 1])}</span>
          <button className="btn" type="button" aria-label="Sonraki hafta" onClick={() => setHafta(hafta + 1)}>›</button>
        </div>
        <span className="hint">09–18 · 2 saatlik aralıklar · aralığa yakın adreslerden en fazla 3 iş · yol süresi ilçe merkezleri arası tahmindir</span>
      </header>
      <div className="cal-wrap"><div className="cal" style={{ gridTemplateColumns: `96px repeat(${days.length}, minmax(170px, 1fr))` }}>
        <div className="h" />
        {days.map((d) => <div key={d} className={"h" + (d === bugun ? " today" : "")}>{gunAdi(d)} {fmtD(d).slice(0, 5)}</div>)}
        {teknisyenler.map((t) => (
          <React.Fragment key={t.kod}>
            <div className="tech">{t.kod}<small>{t.yaka} yakası</small></div>
            {days.map((d) => {
              let onceki = null, toplamYol = 0, adet = 0, doluAralik = 0;
              const hucre = SLOTLAR.map((h) => {
                const liste = slotIsleri(isler, t.kod, d, h);
                if (!liste.length) return <div key={h} className="slot bos"><b>{slotKisa(h)}</b>boş</div>;
                doluAralik++;
                return <div key={h} className="slot-grup">{liste.map((j, k) => {
                  adet++;
                  let yol = null;
                  if (onceki) {
                    const dk = yolDk(onceki.ilce, j.ilce); toplamYol += dk;
                    const bitisik = h - onceki.randevuSlot === 2; // arka arkaya iki aralık (15–16 payı bitişik değil)
                    yol = <span className={"yol" + (bitisik && dk > SIKISIK_DK ? " uzun" : "")}>← {onceki.ilce}'den ~{dk} dk</span>;
                  }
                  onceki = j;
                  return <div key={j.id} className="slot dolu" tabIndex={0} onClick={() => ac(j.id)} onKeyDown={(e) => e.key === "Enter" && ac(j.id)}><b>{k === 0 ? slotKisa(h) : "+"}</b>{j.ilce} · {j.urun}{yol}</div>;
                })}</div>;
              });
              return <div key={d} className="cell">{hucre}<div className="daysum">{adet} iş · {doluAralik}/{SLOTLAR.length} aralık{toplamYol ? " · ~" + toplamYol + " dk yol" : ""}</div></div>;
            })}
          </React.Fragment>
        ))}
      </div></div>
    </section>
  );
}

// ─── Yeni iş emri (Kiwi kaydı) ───────────────────────────────────────────────────────────────────
const yerelGirdi = (d) => isoDay(d) + "T" + pad(d.getHours()) + ":" + pad(d.getMinutes());
const bosForm = (temsilci = "") => ({
  kiwiRef: "", talep: yerelGirdi(new Date()), ad: "", tel: "", eposta: "", il: PILOT_IL, ilce: "", adres: "", tarif: "",
  urun: "", model: "", belirti: "", aciklama: "", garanti: "?", seri: "", temsilci, istenenGun: "", istenenSlot: "",
  randevuGun: "", randevuSlot: "", tnot: "",
});
const TEMSILCI_KEY = "bs_yerinde_temsilci";

function YeniKayit({ isler, teknisyenler, isOlustur, toast, sonra }) {
  const [f, setF] = useState(() => { let t = ""; try { t = localStorage.getItem(TEMSILCI_KEY) || ""; } catch { /* yok */ } return bosForm(t); });
  const [hata, setHata] = useState("");
  const [mukerrer, setMukerrer] = useState(null);
  const [mesgul, setMesgul] = useState(false);
  const d = (k) => (e) => {
    const v = e.target.value;
    setF((x) => {
      const y = { ...x, [k]: v };
      if (k === "il") y.ilce = "";
      if (k === "urun" && !arizalarFor(v).includes(x.belirti)) y.belirti = arizalarFor(v)[0] || "";
      return y;
    });
    if (k === "temsilci") { try { localStorage.setItem(TEMSILCI_KEY, v); } catch { /* yok */ } }
  };
  const pilot = f.il === PILOT_IL;
  const tek = tekFor(f.il, f.ilce);
  const t = teknisyenler.find((x) => x.kod === tek);
  const oneriler = randevuOner(isler, { tek, ilce: f.ilce, istenenGun: f.istenenGun || null, istenenSlot: f.istenenSlot === "" ? null : Number(f.istenenSlot) });
  const bugun = isoDay(new Date());
  const serbestUyari = ["aciklama", "tnot", "kiwiRef", "temsilci"].some((k) => kisiselVeriVar(f[k]));

  const gonder = async (e) => {
    e.preventDefault();
    const err = (m) => { setHata(m); return null; };
    if (!f.ad.trim()) return err("Ad soyadı yazın.");
    if (!cepNormal(f.tel)) return err("Cep telefonunu 05xx xxx xx xx biçiminde yazın.");
    if (!f.ilce.trim()) return err("İlçeyi seçin.");
    if (f.adres.trim().length < 10) return err("Açık adresi yazın.");
    if (!f.urun) return err("Cihaz türünü seçin.");
    if (serbestUyari) return err("Telefon ya da e-posta yalnız müşteri alanlarına yazılır; açıklama, not, referans ve temsilci alanlarından çıkarın.");
    if (!!f.randevuGun !== (f.randevuSlot !== "")) return err("Randevu için hem günü hem saat aralığını seçin ya da ikisini de boş bırakın.");
    if (f.randevuGun && !tek) return err("Pilot bölge dışındaki kayda randevu verilemez.");
    if (f.randevuGun && !isWorkDay(new Date(f.randevuGun + "T12:00"))) return err("Randevu Pazartesi–Cumartesi verilir (Pazar kapalı).");
    if (f.randevuGun) { const e = slotEngeli(isler, tek, f.randevuGun, Number(f.randevuSlot), f.ilce, null); if (e) return err(slotEngelMetni(tek, f.ilce, e)); }
    setHata(""); setMesgul(true);
    const r = await isOlustur({ ...f, talep: f.talep ? new Date(f.talep).toISOString() : null, belirti: f.belirti || arizalarFor(f.urun)[0], mukerrerOnay: !!mukerrer });
    setMesgul(false);
    if (!r.ok) {
      if (r.mukerrer && !mukerrer) { setMukerrer(r.mukerrer); return err(`${r.error} Yine de eklemek için tekrar “Kaydı ekle”ye basın.`); }
      return err(r.error || "Kayıt eklenemedi.");
    }
    setMukerrer(null);
    setF(bosForm(f.temsilci));
    toast(r.is.no + (r.is.randevuGun ? " eklendi · randevu verildi" : " eklendi · müşteriyi arayın"));
    sonra(r.is.id);
  };

  return (
    <section className="panel">
      <header><h2>Kayıt formu</h2><span className="hint">Üst bölüm Kiwi e-postasından, alt bölüm müşteri temsilcisi tarafından doldurulur.</span></header>
      <form className="detail" noValidate onSubmit={gonder}>
        <div className="sec">
          <div className="sec-h">1 · Kiwi e-postasından gelen bilgiler</div>
          <div className="grid2">
            <div className="field"><label htmlFor="n-ref">Kiwi kayıt / referans no</label><input id="n-ref" autoComplete="off" placeholder="E-postadaki numara" value={f.kiwiRef} onChange={d("kiwiRef")} maxLength={40} /></div>
            <div className="field"><label htmlFor="n-eposta-z">E-posta geliş zamanı</label><input id="n-eposta-z" type="datetime-local" value={f.talep} onChange={d("talep")} /></div>
          </div>
          <div className="grid2">
            <div className="field"><label htmlFor="n-ad">Ad soyad *</label><input id="n-ad" autoComplete="off" value={f.ad} onChange={d("ad")} maxLength={80} /></div>
            <div className="field"><label htmlFor="n-tel">Cep telefonu *</label><input id="n-tel" inputMode="tel" autoComplete="off" placeholder="05xx xxx xx xx" value={f.tel} onChange={d("tel")} /></div>
          </div>
          <div className="grid2">
            <div className="field"><label htmlFor="n-il">İl *</label><select id="n-il" value={f.il} onChange={d("il")}>{ILLER.map((il) => <option key={il}>{il}</option>)}</select></div>
            <div className="field"><label htmlFor="n-ilce">İlçe *</label>
              {pilot
                ? <select id="n-ilce" value={f.ilce} onChange={d("ilce")}><option value="">Seçin</option>
                    {Object.entries(ILCE_KONUM).map(([y, l]) => <optgroup key={y} label={y + " yakası"}>{Object.keys(l).sort((a, b) => a.localeCompare(b, "tr")).map((i) => <option key={i}>{i}</option>)}</optgroup>)}</select>
                : <select id="n-ilce" value={f.ilce} onChange={d("ilce")}><option value="">Seçin</option>{(TR_IL_ILCE[f.il] || []).map((i) => <option key={i}>{i}</option>)}</select>}
            </div>
          </div>
          <div className="field"><label htmlFor="n-musteri-eposta">Müşteri e-postası</label><input id="n-musteri-eposta" type="email" autoComplete="off" placeholder="E-postada varsa" value={f.eposta} onChange={d("eposta")} maxLength={120} /></div>
          <div className="field"><label htmlFor="n-adres">Açık adres *</label><textarea id="n-adres" rows={2} placeholder="Mahalle, cadde/sokak, bina no, daire no" value={f.adres} onChange={d("adres")} maxLength={300} /></div>
          <div className="field"><label htmlFor="n-tarif">Adres tarifi</label><textarea id="n-tarif" rows={2} placeholder="Örn. eczanenin yanındaki mavi bina, 3. kat" value={f.tarif} onChange={d("tarif")} maxLength={300} /></div>
          <div className="grid2">
            <div className="field"><label htmlFor="n-urun">Cihaz türü *</label><select id="n-urun" value={f.urun} onChange={d("urun")}><option value="">Seçin</option>
              {Object.entries(URUNLER).map(([g, l]) => <optgroup key={g} label={g}>{l.map(([u]) => <option key={u}>{u}</option>)}</optgroup>)}</select></div>
            <div className="field"><label htmlFor="n-model">Model / ürün kodu</label><input id="n-model" list="n-modeller" autoComplete="off" placeholder="E-postada varsa" value={f.model} onChange={d("model")} maxLength={80} />
              <datalist id="n-modeller">{(URUN_MODEL[f.urun] || []).map((m) => <option key={m} value={m} />)}</datalist></div>
          </div>
          <div className="field"><label htmlFor="n-belirti">Arıza *</label>
            <select id="n-belirti" value={f.belirti} onChange={d("belirti")} disabled={!f.urun}>
              {f.urun ? arizalarFor(f.urun).map((a) => <option key={a}>{a}</option>) : <option value="">Önce cihaz türünü seçin</option>}</select></div>
          <div className="field"><label htmlFor="n-not">Arıza açıklaması (e-postadaki ifade)</label><textarea id="n-not" rows={2} placeholder="Müşterinin Kiwi'ye bildirdiği şekliyle" value={f.aciklama} onChange={d("aciklama")} maxLength={500} /></div>
        </div>

        <div className="sec rep">
          <div className="sec-h">2 · Müşteri temsilcisi <span>{!pilot ? "Pilot bölge dışında: teknisyen atanamaz" : t ? `Atanacak: ${t.ad}` : "İlçe seçilince teknisyen atanır"}</span></div>
          <div className="grid3">
            <div className="field"><label htmlFor="n-garanti">Garanti durumu</label><select id="n-garanti" value={f.garanti} onChange={d("garanti")}>{GARANTI_SECENEK.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
            <div className="field"><label htmlFor="n-seri">Seri no</label><input id="n-seri" autoComplete="off" value={f.seri} onChange={d("seri")} maxLength={60} /></div>
            <div className="field"><label htmlFor="n-temsilci">Temsilci</label><input id="n-temsilci" autoComplete="off" placeholder="Adınız" value={f.temsilci} onChange={d("temsilci")} maxLength={60} /></div>
          </div>
          <div className="field"><label htmlFor="n-istenen">Müşterinin tercih ettiği gün ve saat aralığı</label>
            <div className="pair"><input id="n-istenen" type="date" min={bugun} value={f.istenenGun} onChange={d("istenenGun")} /><select aria-label="Tercih edilen saat aralığı" value={f.istenenSlot} onChange={d("istenenSlot")}><SlotSecenek bos="Fark etmez" /></select></div>
            <span className="hint">Telefonda müşteriye sorun; öneriler buna göre sıralanır. Boşsa en erken uygun aralıklar önerilir.</span></div>
          <div className="field"><span className="hint">Önerilen randevular (müşteri telefonda onaylarsa seçin)</span>
            <div className="oneriler"><Oneriler liste={oneriler} sec={(o) => setF((x) => ({ ...x, randevuGun: o.gun, randevuSlot: String(o.saat) }))} /></div></div>
          <div className="field"><label htmlFor="n-gun">Verilen randevu</label>
            <div className="pair"><input id="n-gun" type="date" min={bugun} value={f.randevuGun} onChange={d("randevuGun")} /><select aria-label="Randevu saat aralığı" value={f.randevuSlot} onChange={d("randevuSlot")}><SlotSecenek bos="Saat aralığı" /></select></div>
            <span className="hint">Boş bırakılırsa kayıt “Aranacak” listesine düşer.</span></div>
          <div className="field"><label htmlFor="n-tnot">Temsilci notu</label><textarea id="n-tnot" rows={2} placeholder="Görüşme notu, müşteri tercihi…" value={f.tnot} onChange={d("tnot")} maxLength={1000} /></div>
          {serbestUyari && <p className="warnline" role="alert">Telefon ya da e-posta yalnız müşteri alanlarına yazılır; açıklama, not, referans ve temsilci alanlarından çıkarın.</p>}
          <div className="actions"><button className="btn primary" type="submit" disabled={mesgul}>{mesgul ? "Ekleniyor…" : "Kaydı ekle"}</button><span className="hint flag" role="alert">{hata}</span></div>
        </div>
      </form>
    </section>
  );
}

// ─── Seri no fotoğrafları (koordinatör ayrıntısı ve teknisyen kartı ortak) ───────────────────────
function Fotolar({ j, yukleyebilir = false, onYuklendi }) {
  const [fotolar, setFotolar] = useState(null); // null = henüz bakılmadı
  const [mesaj, setMesaj] = useState("");
  const [mesgul, setMesgul] = useState(false);
  const goster = async () => {
    if (ONIZLEME) { setFotolar([]); return; }
    const r = await apiCagir(`/api/yerinde/foto?isId=${encodeURIComponent(j.id)}`);
    if (!r.ok) { setMesaj(r.error || "Fotoğraflar okunamadı"); return; }
    setFotolar(r.fotolar || []);
  };
  const yukle = async (e) => {
    const dosya = e.target.files?.[0];
    e.target.value = "";
    if (!dosya) return;
    if (!FOTO_TIPLERI[dosya.type]) { setMesaj("Yalnız JPEG, PNG, WEBP ya da HEIC fotoğraf yüklenir."); return; }
    if (dosya.size > FOTO_EN_FAZLA) { setMesaj("Fotoğraf 10 MB'tan büyük olamaz."); return; }
    setMesgul(true); setMesaj("");
    if (ONIZLEME) { setMesgul(false); setMesaj("Önizleme: fotoğraf yüklenmiş sayıldı."); onYuklendi?.(); return; }
    const r = await apiCagir("/api/yerinde/foto", { method: "POST", body: JSON.stringify({ isId: j.id, tip: dosya.type }) });
    if (!r.ok) { setMesgul(false); setMesaj(r.error || "Yükleme adresi alınamadı"); return; }
    const { error } = await supabase.storage.from(r.bucket).uploadToSignedUrl(r.yol, r.token, dosya, { contentType: dosya.type });
    setMesgul(false);
    if (error) { setMesaj("Fotoğraf yüklenemedi, tekrar dene."); return; }
    setMesaj("Fotoğraf yüklendi.");
    onYuklendi?.();
    if (fotolar) goster();
  };
  return (
    <div className="foto">
      <div className="hint">Seri no fotoğrafları</div>
      <div className="actions">
        {yukleyebilir && (
          <label className={"btn" + (mesgul ? " mesgul" : "")}>
            {mesgul ? "Yükleniyor…" : "Fotoğraf çek / yükle"}
            <input type="file" accept="image/jpeg,image/png,image/webp,image/heic" capture="environment" onChange={yukle} disabled={mesgul} hidden />
          </label>
        )}
        {fotolar === null && <button className="btn" type="button" onClick={goster}>Fotoğrafları göster</button>}
      </div>
      {fotolar && (fotolar.length
        ? <div className="foto-izgara">{fotolar.map((f) => <a key={f.yol} href={f.url} target="_blank" rel="noreferrer"><img src={f.url} alt="Seri no etiketi fotoğrafı" loading="lazy" /></a>)}</div>
        : <span className="hint">Henüz fotoğraf yok.</span>)}
      {mesaj && <span className="hint" role="status">{mesaj}</span>}
    </div>
  );
}

// ─── Teknisyen mobil görünümü (PR-3) ─────────────────────────────────────────────────────────────
// API teknisyene yalnız kendi koduna atanmış işleri döner; geçişler TEKNISYEN_GECISLER ile sınırlı (sunucu da denetler).
function TeknisyenGorunum({ email, onCikis }) {
  const [isler, setIsler] = useState(ONIZLEME ? ornekVeri.filter((j) => j.tek === "T1") : []);
  const [yuklendi, setYuklendi] = useState(ONIZLEME);
  const [hata, setHata] = useState("");
  const [gun, setGun] = useState(null);
  const [acik, setAcik] = useState(null);
  const [tost, setTost] = useState("");
  const tostZ = useRef(null);
  const toast = (m) => { setTost(m); clearTimeout(tostZ.current); tostZ.current = setTimeout(() => setTost(""), 2600); };

  const yukle = useCallback(async () => {
    if (ONIZLEME) return;
    const r = await apiCagir("/api/yerinde/isler");
    if (!r.ok) { setHata(r.error || "İşler yüklenemedi"); return; }
    setIsler(r.isler || []); setHata(""); setYuklendi(true);
  }, []);
  useEffect(() => { yukle(); }, [yukle]);
  useEffect(() => {
    if (ONIZLEME) return undefined;
    const t = setInterval(() => { if (document.visibilityState === "visible") yukle(); }, 60000);
    return () => clearInterval(t);
  }, [yukle]);

  const bugun = isoDay(new Date());
  const gunler = useMemo(() => [...new Set(isler.filter((j) => j.randevuGun && j.randevuGun >= bugun && !KAPALI.includes(j.durum)).map((j) => j.randevuGun))].sort(), [isler, bugun]);
  const seciliGun = gun || gunler[0] || bugun;
  const gunIsleri = isler.filter((j) => j.randevuGun === seciliGun && j.durum !== "iptal").sort((a, b) => a.randevuSlot - b.randevuSlot);
  const bekleyen = isler.filter((j) => ["parca", "atolye"].includes(j.durum));
  const kod = isler.find((j) => j.tek)?.tek || "";

  const kaydet = async (j, istek) => {
    if (ONIZLEME) { const y = onizlemeUygula(j, istek); setIsler((l) => l.map((x) => (x.id === j.id ? y : x))); return { ok: true }; }
    const r = await apiCagir(`/api/yerinde/is/${j.id}`, { method: "PATCH", body: JSON.stringify({ guncel: j.guncel, ...istek }) });
    if (r.ok && r.is) setIsler((l) => l.map((x) => (x.id === j.id ? r.is : x)));
    if (r.yenile) yukle();
    return r;
  };

  return (
    <div className="tk">
      <header className="tk-ust">
        <BenservisLogo style={{ height: 26, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#94A3B8" />
        <div className="tk-kim"><b>{kod ? kod + " · teknisyen" : "Teknisyen"}</b><small>{email}</small></div>
        <button className="tk-cik" type="button" onClick={onCikis} aria-label="Çıkış yap"><Ic p="cikis" sw={1.8} /></button>
      </header>
      <main className="tk-ana">
        {hata && <div className="callout" role="alert"><Ic p="zil" /><div><b>Bağlantı sorunu</b>{hata}</div></div>}
        {!yuklendi && !hata && <p className="hint">Yükleniyor…</p>}
        {yuklendi && <>
          <div className="tk-gunler" role="tablist" aria-label="Günler">
            {(gunler.length ? gunler : [bugun]).map((d) => (
              <button key={d} role="tab" type="button" aria-selected={d === seciliGun} onClick={() => { setGun(d); setAcik(null); }}>
                {d === bugun ? "Bugün" : gunAdi(d) + " " + fmtD(d).slice(0, 5)}
                <small>{isler.filter((j) => j.randevuGun === d && j.durum !== "iptal").length} iş</small>
              </button>
            ))}
          </div>
          {gunIsleri.map((j) => <TeknisyenKart key={j.id + j.guncel} j={j} acik={acik === j.id} ac={() => setAcik(acik === j.id ? null : j.id)} kaydet={kaydet} toast={toast} />)}
          {!gunIsleri.length && <p className="tk-bos">Bu gün için atanmış iş yok.</p>}
          {bekleyen.length > 0 && <>
            <h2 className="tk-baslik">Parça / atölye bekleyen</h2>
            {bekleyen.map((j) => <TeknisyenKart key={j.id + j.guncel} j={j} acik={acik === j.id} ac={() => setAcik(acik === j.id ? null : j.id)} kaydet={kaydet} toast={toast} />)}
          </>}
          <button className="btn tk-yenile" type="button" onClick={() => { yukle(); toast("Liste yenilendi"); }}><Ic p="yenile" sw={1.8} />Listeyi yenile</button>
        </>}
      </main>
      {tost && <div className="toast" role="status">{tost}</div>}
    </div>
  );
}

function TeknisyenKart({ j, acik, ac, kaydet, toast }) {
  const [seri, setSeri] = useState(j.seri || "");
  const [parcalar, setParcalar] = useState("");
  const [tutar, setTutar] = useState("");
  const [mesgul, setMesgul] = useState(false);
  const adimlar = TEKNISYEN_GECISLER[j.durum] || [];
  const harita = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${j.adres}, ${j.ilce}, ${j.il}`);
  const uyari = kisiselVeriVar(parcalar);

  const gonder = async (gecis) => {
    if (uyari) { toast("Telefon ya da e-posta değişen parçalar alanına yazılmaz"); return; }
    setMesgul(true);
    const istek = { alanlar: { seri } };
    if (gecis) istek.gecis = gecis;
    if (gecis === "tamam") istek.kapanis = { parcalar, tutar };
    const r = await kaydet(j, istek);
    setMesgul(false);
    toast(!r.ok ? r.error || "Kaydedilemedi" : gecis ? durumAd[gecis] : "Seri no kaydedildi");
  };

  return (
    <article className={"tk-kart" + (acik ? " acik" : "")}>
      <button className="tk-kart-ust" type="button" onClick={ac} aria-expanded={acik}>
        <span className="tk-saat mono">{j.randevuSlot != null ? slotKisa(j.randevuSlot) : "—"}</span>
        <span className="tk-ozet"><b>{j.ilce} · {j.urun}</b><small>{j.belirti}</small></span>
        <span className={"chip s-" + j.durum}>{durumAd[j.durum]}</span>
      </button>
      {acik && (
        <div className="tk-detay">
          <dl>
            <dt>Müşteri</dt><dd>{j.ad}</dd>
            <dt>Telefon</dt><dd><a className="mono" href={"tel:" + j.tel}>{j.tel}</a></dd>
            <dt>Adres</dt><dd>{j.adres}, {j.ilce} · <a href={harita} target="_blank" rel="noreferrer">Haritada aç</a></dd>
            {j.tarif && <><dt>Tarif</dt><dd>{j.tarif}</dd></>}
            <dt>Ürün</dt><dd>{j.urun}{j.model && <> · <span className="mono">{j.model}</span></>}</dd>
            <dt>Arıza</dt><dd>{j.belirti}{j.aciklama && <><br /><span className="hint">{j.aciklama}</span></>}</dd>
            <dt>Garanti</dt><dd>{(GARANTI_SECENEK.find(([v]) => v === j.garanti) || [])[1]}</dd>
            {j.tnot && <><dt>Not</dt><dd>{j.tnot}</dd></>}
          </dl>
          <div className="field"><label htmlFor={"tk-seri-" + j.id}>Seri no</label>
            <div className="pair"><input id={"tk-seri-" + j.id} value={seri} onChange={(e) => setSeri(e.target.value)} maxLength={60} autoComplete="off" />
              <button className="btn" type="button" disabled={mesgul || seri === (j.seri || "")} onClick={() => gonder(null)}>Kaydet</button></div></div>
          <Fotolar j={j} yukleyebilir onYuklendi={() => toast("Fotoğraf eklendi")} />
          {j.durum === "serviste" && <div className="grid2">
            <div className="field"><label htmlFor={"tk-parca-" + j.id}>Değişen parçalar</label><input id={"tk-parca-" + j.id} placeholder="ör. rezistans" value={parcalar} onChange={(e) => setParcalar(e.target.value)} maxLength={300} /></div>
            <div className="field"><label htmlFor={"tk-tutar-" + j.id}>Tahsilat (TL)</label><input id={"tk-tutar-" + j.id} type="number" min="0" inputMode="numeric" placeholder="Garanti içi ise 0" value={tutar} onChange={(e) => setTutar(e.target.value)} /></div>
          </div>}
          {uyari && <p className="warnline" role="alert">Telefon ya da e-posta değişen parçalar alanına yazılmaz.</p>}
          {adimlar.length > 0 && <div className="tk-adimlar">
            {adimlar.map(([s, l], i) => <button key={s} className={"btn" + (i === 0 ? " primary" : "")} type="button" disabled={mesgul} onClick={() => gonder(s)}>{l}</button>)}
          </div>}
          {["parca", "atolye"].includes(j.durum) && <p className="hint">Yeni randevuyu koordinatör verir.</p>}
        </div>
      )}
    </article>
  );
}

// ─── Önizleme (yalnız `npm run dev` + ?onizleme=<sekme>): örnek kayıtlar ve bellek içi geçiş ────
function onizlemeUygula(j, { alanlar = {}, gecis, kapanis }) {
  const y = { ...j, log: [...j.log] };
  const t = new Date().toISOString();
  if (alanlar.tek !== undefined && alanlar.tek !== j.tek) { y.tek = alanlar.tek; y.log.push({ t, olay: "teknisyen:" + (alanlar.tek ? alanlar.tek.toLowerCase() : "yok") }); }
  if (alanlar.randevuGun !== undefined) { y.randevuGun = alanlar.randevuGun || null; y.randevuSlot = alanlar.randevuSlot === "" ? null : Number(alanlar.randevuSlot); }
  if (alanlar.istenenGun !== undefined) { y.istenenGun = alanlar.istenenGun || null; y.istenenSlot = alanlar.istenenSlot === "" ? null : Number(alanlar.istenenSlot); }
  for (const k of ["garanti", "seri", "tnot"]) if (alanlar[k] !== undefined) y[k] = alanlar[k];
  if (j.durum === "tamam" && (alanlar.parcalar !== undefined || alanlar.tutar !== undefined)) {
    const tutar = alanlar.tutar === "" || alanlar.tutar == null ? null : Number(alanlar.tutar);
    if ((alanlar.parcalar || "") !== (j.parcalar || "") || tutar !== (j.tutar ?? null)) { y.parcalar = alanlar.parcalar || ""; y.tutar = tutar; y.log.push({ t, olay: "kapanis:duzeltme" }); }
  }
  if (gecis === "ulasilamadi") { y.aramalar = (y.aramalar || 0) + 1; y.log.push({ t, olay: "arama_ulasilamadi" }); }
  else if (gecis) { if (kapanis) y.log.push({ t, olay: "kapanis" }); y.durum = gecis; y.log.push({ t, olay: "durum:" + gecis }); }
  y.guncel = t;
  return y;
}

const ornekVeri = (() => {
  if (!ONIZLEME) return [];
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const wd = (n) => isoDay(n >= 0 ? addWorkDays(today, n) : (() => { const r = new Date(today); let k = -n; while (k > 0) { r.setDate(r.getDate() - 1); if (isWorkDay(r)) k--; } return r; })());
  const bugunIs = isWorkDay(today) ? isoDay(today) : wd(1);
  const raw = [
    ["Ayşe Yılmaz", "Kadıköy", "Su sebili", "Soğutmuyor", "randevu", 0, 11, "E", 11],
    ["Mehmet Demir", "Şişli", "Mini buzdolabı", "Buzlanma / su birikmesi", "tamam", -2, 11, "H", 11],
    ["Zeynep Kaya", "Ataşehir", "Koltuk ve halı yıkama makinesi", "Emiş gücü zayıf", "serviste", 0, 9, "E", 9],
    ["Okan Arslan", "Beşiktaş", "Robot süpürge", "İstasyona dönmüyor / takılıyor", "randevu", 1, 16, "H", 16],
    ["Elif Şahin", "Ümraniye", "Mikrodalga fırın", "Isıtmıyor", "atolye", -3, 13, "E", 13],
    ["Can Öztürk", "Kağıthane", "Yağlı radyatör", "Isıtmıyor", "yeni", null, null, "?", 13],
    ["Deniz Aydın", "Üsküdar", "Havuz temizleme robotu", "Motor dönmüyor", "parca", -1, 13, "E", 13],
    ["Selin Koç", "Beyoğlu", "Dikiş / overlok makinesi", "İplik atıyor / dikiş kaçırıyor", "randevu", 2, 11, "H", 11],
    ["Burak Çelik", "Maltepe", "Kule / ayaklı vantilatör", "Ses / titreşim", "tamam", -1, 16, "E", 16],
    ["Gizem Polat", "Sarıyer", "Su sebili", "Su sızdırıyor", "yeni", null, null, "E", 13],
    ["Hakan Yurt", "Pendik", "Mini buzdolabı", "Soğutmuyor", "randevu", 0, 16, "E", 16],
    ["Merve Tan", "Bakırköy", "Koltuk ve halı yıkama makinesi", "Su sızdırıyor", "randevu", 0, 13, "H", 13],
    // Aynı aralıkta yakın iki iş: Kadıköy ile Üsküdar (~23 dk) bugün 11–13'te birlikte.
    ["Serkan Ak", "Üsküdar", "Su sebili", "Kireçlenme / tıkanma", "randevu", 0, 11, "E", 11],
  ];
  return raw.map(([ad, ilce, urun, belirti, durum, gunFark, saat, garanti, istSlot], i) => {
    const talep = new Date(today); talep.setDate(talep.getDate() - (i % 4) - 1); talep.setHours(9 + (i % 6), 15);
    const randevuGun = gunFark === null ? null : gunFark === 0 ? bugunIs : wd(gunFark);
    const no = "KWS-" + (1040 + i);
    return {
      id: no, no, kanal: "Kiwi e-posta", kiwiRef: "KW-" + (88120 + i * 7), talep: talep.toISOString(),
      ad: ad + " (örnek)", tel: "0532000" + pad(i) + "00", eposta: "", il: PILOT_IL, ilce, adres: "Örnek Mah. " + (i + 3) + ". Sk. No:" + (i + 1),
      tarif: ["Eczanenin üstü, 2. kat", "Site B blok, güvenliğe haber verilecek", "Parkın karşısı"][i % 3],
      urun, model: URUN_MODEL[urun][0] || "", belirti, aciklama: "",
      istenenGun: durum === "yeni" ? null : randevuGun || wd((i % 3) + 1), istenenSlot: durum === "yeni" ? null : istSlot,
      garanti, seri: "", temsilci: "", tnot: "", tek: tekFor(PILOT_IL, ilce), randevuGun, randevuSlot: randevuGun ? saat : null,
      durum, aramalar: i === 9 ? 1 : 0, ilkZiyarette: durum === "tamam" ? true : null, csat: null, guncel: "0",
      log: [{ t: talep.toISOString(), olay: "eposta_geldi" }, { t: talep.toISOString(), olay: "kayit" }],
    };
  });
})();

// ─── Stil (prototipten; kök .yp altında kapsanır, site geri kalanına sızmaz) ─────────────────────
const CSS = `
.yp{--bg:#F8FAFC;--surface:#fff;--fg:#1E293B;--muted:#64748B;--line:#E2E8F0;--accent:#2563EB;--accent-soft:#EFF6FF;--accent-fg:#fff;
--ok:#15803D;--ok-soft:#DCFCE7;--warn:#B45309;--warn-soft:#FEF3C7;--bad:#B91C1C;--bad-soft:#FEE2E2;--info:#1D4ED8;--info-soft:#DBEAFE;
--side:#1E293B;--side-fg:#E2E8F0;--side-muted:#94A3B8;--side-line:#334155;--side-hi:#93C5FD;
--f-body:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;--f-mono:ui-monospace,"SF Mono",Menlo,monospace;
background:var(--bg);color:var(--fg);font:14px/1.5 var(--f-body);min-height:100vh}
.yp *{box-sizing:border-box}
.yp button,.yp input,.yp select,.yp textarea{font:inherit;color:inherit}
.yp a{color:var(--accent)}
.yp .yp-orta{min-height:100vh;display:grid;place-items:center;padding:24px 16px}
.yp .yp-kutu{width:100%;max-width:400px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:28px 24px;display:grid;gap:14px}
.yp .yp-kutu h1{font:600 22px/1.2 'Fraunces',Georgia,serif;margin:6px 0 0}
.yp .btn{border:1px solid var(--line);background:var(--surface);padding:7px 12px;border-radius:6px;cursor:pointer;font-weight:500}
.yp .btn:disabled{opacity:.6;cursor:wait}
.yp .btn.primary{background:var(--accent);color:var(--accent-fg);border-color:var(--accent)}
.yp .btn:focus-visible,.yp input:focus-visible,.yp select:focus-visible,.yp textarea:focus-visible,.yp .row:focus-visible,.yp .oneri:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.yp .main{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;align-items:start}
.yp .panel{background:var(--surface);border:1px solid var(--line);border-radius:8px;min-width:0}
.yp .panel>header{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--line)}
.yp .panel>header h2{font-size:14px;margin:0}
.yp .filters{display:flex;flex-wrap:wrap;gap:6px}
.yp .filters input,.yp .filters select{border:1px solid var(--line);background:var(--bg);border-radius:6px;padding:6px 8px;min-width:0}
.yp .list{overflow-x:auto}
.yp table{width:100%;border-collapse:collapse}
.yp th,.yp td{text-align:left;padding:9px 12px;border-bottom:1px solid var(--line);white-space:nowrap}
.yp th{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);font-weight:500}
.yp tr.row{cursor:pointer}.yp tr.row:hover{background:var(--bg)}.yp tr.row[aria-selected="true"]{background:var(--accent-soft)}
.yp .mono{font-family:var(--f-mono);font-size:12px;font-variant-numeric:tabular-nums}
.yp .chip{display:inline-block;font:500 11px var(--f-mono);padding:2px 8px;border-radius:99px;white-space:nowrap}
.yp .s-yeni{background:var(--info-soft);color:var(--info)}.yp .s-randevu{background:var(--accent-soft);color:var(--accent)}
.yp .s-yolda,.yp .s-serviste{background:var(--accent);color:var(--accent-fg)}.yp .s-parca,.yp .s-atolye{background:var(--warn-soft);color:var(--warn)}
.yp .s-tamam{background:var(--ok-soft);color:var(--ok)}.yp .s-iptal{background:var(--bad-soft);color:var(--bad)}
.yp .flag{color:var(--bad);font-weight:600}
.yp .detail{padding:14px;display:grid;gap:14px}
.yp .detail .empty{color:var(--muted);padding:24px 0;text-align:center}
.yp .d-ust{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center}
.yp .detail h3{margin:0;font-size:16px}
.yp .sec{display:grid;gap:10px}.yp .sec+.sec{border-top:1px solid var(--line);padding-top:14px}
.yp .sec-h{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:600;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}
.yp .sec-h span{text-transform:none;letter-spacing:0;font-weight:400}
.yp .sec.rep{background:var(--bg);margin-inline:-14px;padding-inline:14px;padding-bottom:14px}
.yp dl{display:grid;grid-template-columns:120px minmax(0,1fr);gap:6px 12px;margin:0}
.yp dt{color:var(--muted);font-size:12px}.yp dd{margin:0;overflow-wrap:anywhere}
.yp .actions{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.yp .field{display:grid;gap:4px;min-width:0}.yp .field label{font-size:12px;color:var(--muted)}
.yp .field input,.yp .field select,.yp .field textarea{border:1px solid var(--line);background:var(--surface);border-radius:6px;padding:7px 9px;width:100%}
.yp .sec:not(.rep) .field input,.yp .sec:not(.rep) .field select,.yp .sec:not(.rep) .field textarea{background:var(--bg)}
.yp .grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.yp .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.yp .pair{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:6px}
.yp .log{border-left:2px solid var(--line);padding-left:12px;display:grid;gap:6px;font-size:13px}
.yp .log div span{color:var(--muted);font:11px var(--f-mono);margin-right:6px}
.yp .hint{font-size:12px;color:var(--muted)}.yp .warnline{font-size:12px;color:var(--warn);margin:0}
.yp .oneriler{display:grid;gap:6px}
.yp .oneri{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:10px;align-items:center;text-align:left;border:1px solid var(--line);background:var(--surface);border-radius:6px;padding:7px 10px;cursor:pointer}
.yp .oneri:hover{border-color:var(--accent)}.yp .oneri b{font:500 12px var(--f-mono);white-space:nowrap}
.yp .oneri span{font-size:12px;color:var(--muted)}.yp .oneri em{font:normal 11px var(--f-mono);color:var(--muted)}
.yp .oneri.best{border-color:var(--accent);background:var(--accent-soft)}
.yp .cal-wrap{overflow-x:auto}.yp .cal{display:grid;min-width:960px}
.yp .cal>div{border-bottom:1px solid var(--line);border-right:1px solid var(--line);padding:8px}
.yp .cal .h{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)}.yp .cal .h.today{color:var(--accent);font-weight:600}
.yp .cal .tech{font-weight:600;font-size:13px}.yp .cal .tech small{display:block;font-weight:400;color:var(--muted);font-size:11px}
.yp .cell{display:grid;gap:4px}.yp .slot-grup{display:grid;gap:2px}.yp .slot{border-radius:6px;padding:4px 7px;font-size:12px;min-height:30px}
.yp .slot.dolu{background:var(--accent-soft);cursor:pointer}.yp .slot.bos{border:1px dashed var(--line);color:var(--muted)}
.yp .slot b{font-family:var(--f-mono);font-weight:500;font-size:11px;margin-right:4px}
.yp .slot .yol{display:block;font:10px var(--f-mono);color:var(--muted)}.yp .slot .yol.uzun{color:var(--warn)}
.yp .daysum{font:11px var(--f-mono);color:var(--muted);padding-top:2px}
.yp .app{display:grid;grid-template-columns:252px minmax(0,1fr);min-height:100vh;background:linear-gradient(to right,var(--side) 252px,var(--bg) 252px)}
.yp .side{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;background:var(--side);color:var(--side-fg)}
.yp .brand{display:grid;gap:4px;padding:20px 20px 18px;border-bottom:1px solid var(--side-line)}
.yp .brand small{font-size:11.5px;color:var(--side-muted)}
.yp .side-nav{display:flex;flex-direction:column;gap:2px;padding:8px 12px;flex:1;overflow-y:auto}
.yp .nav-h{font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#64748B;padding:18px 12px 8px}
.yp .side-nav button{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 12px;border-radius:8px;font:500 14px var(--f-body);color:var(--side-fg);background:none;border:0;cursor:pointer;position:relative}
.yp .side-nav button svg{width:18px;height:18px;color:var(--side-muted);flex:none}.yp .side-nav button span{flex:1}
.yp .side-nav button:hover{background:rgba(255,255,255,.06)}
.yp .side-nav button[aria-selected="true"]{background:rgba(37,99,235,.28);color:#fff;font-weight:600}
.yp .side-nav button[aria-selected="true"] svg{color:var(--side-hi)}
.yp .side-nav button[aria-selected="true"]::before{content:"";position:absolute;left:-12px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--accent)}
.yp .side-nav button:focus-visible{outline:2px solid var(--side-hi);outline-offset:1px}
.yp .side-nav em{font:normal 600 11px var(--f-mono);color:var(--side-muted)}
.yp .side-nav em.badge{min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:var(--accent);color:#fff;display:inline-grid;place-items:center}
.yp .user{display:flex;align-items:center;gap:12px;padding:14px 20px;border-top:1px solid var(--side-line);min-width:0}
.yp .user-av{width:36px;height:36px;border-radius:8px;background:#334155;color:#fff;display:grid;place-items:center;font:600 13px var(--f-body);flex:none}
.yp .user div{min-width:0}.yp .user b{display:block;font-size:13px;color:#fff;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.yp .user small{display:block;font-size:11.5px;color:var(--side-muted)}
.yp .shell{min-width:0;display:flex;flex-direction:column}
.yp .topbar{position:sticky;top:0;z-index:5;height:58px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 32px;background:var(--surface);border-bottom:1px solid var(--line)}
.yp .top-l{display:flex;align-items:center;gap:12px;min-width:0}
.yp .top-for{font-size:10.5px;line-height:1.25;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.yp .top-sep{width:1px;height:24px;background:var(--line);flex:none}
.yp .crumb{font-size:13.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.yp .crumb b{color:var(--fg);font-weight:500}
.yp .top-r{display:flex;align-items:center;gap:8px}
.yp .pill{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px;border:1px solid var(--line);border-radius:8px;font-size:12.5px;font-weight:500;background:var(--surface)}
.yp .pill i{font:normal 600 10.5px var(--f-mono);color:var(--accent);background:var(--accent-soft);border-radius:4px;padding:2px 5px}
.yp .icon-btn{width:34px;height:34px;display:grid;place-items:center;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--fg);cursor:pointer}
.yp .icon-btn svg{width:18px;height:18px}
.yp .page{width:100%;max-width:1320px;padding:28px 32px 48px;display:grid;gap:20px}
.yp .page-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px}
.yp .eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}
.yp .page-head h1{font:600 30px/1.15 'Fraunces',Georgia,serif;letter-spacing:-.02em;margin:8px 0 6px}
.yp .page-head p{margin:0;color:var(--muted);font-size:14px}
.yp .btn.big{height:40px;padding:0 18px;display:inline-flex;align-items:center;gap:8px;font-weight:600;border-radius:8px}
.yp .btn svg{width:16px;height:16px}
.yp .dash{display:grid;gap:16px}
.yp .kcards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.yp .kcard{background:var(--surface);border:1px solid var(--line);border-bottom:3px solid var(--c,var(--fg));border-radius:10px;padding:18px 20px 16px;display:grid;gap:10px}
.yp .kcard header{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:13px;font-weight:600}
.yp .kcard header i{width:32px;height:32px;border-radius:8px;display:grid;place-items:center;background:var(--cs,var(--bg));color:var(--c,var(--fg))}
.yp .kcard header i svg{width:17px;height:17px}
.yp .kcard strong{font:700 34px/1 var(--f-body);letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.yp .kcard small{font-size:12px;color:var(--c,var(--muted))}
.yp .dash-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(0,1fr);gap:16px;align-items:start}
.yp .dash-side{display:grid;gap:16px}
.yp .card{background:var(--surface);border:1px solid var(--line);border-radius:10px;min-width:0}
.yp .card-h{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:18px 20px 14px}
.yp .card-h h3{margin:0;font-size:16px;font-weight:600;display:flex;align-items:center;gap:8px}
.yp .card-h p{margin:2px 0 0;font-size:12.5px;color:var(--muted)}
.yp .lnk{border:0;background:none;color:var(--accent);font:600 12.5px var(--f-body);cursor:pointer;display:inline-flex;align-items:center;gap:4px;white-space:nowrap;padding:2px 0}
.yp .lnk svg{width:14px;height:14px}
.yp .count{min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:var(--accent);color:var(--accent-fg);font:600 11px var(--f-mono);display:inline-grid;place-items:center}
.yp .card-f{padding:12px 20px;border-top:1px solid var(--line);font-size:12px;color:var(--muted)}
.yp .dtable th{background:var(--bg)}.yp .dtable td b{display:block;font-weight:600;font-size:13px}.yp .dtable td small{color:var(--muted);font-size:11.5px}
.yp .dtable tbody tr[tabindex]{cursor:pointer}.yp .dtable tbody tr[tabindex]:hover{background:var(--bg)}
.yp .go{width:30px;height:30px;border:1px solid var(--line);border-radius:6px;display:grid;place-items:center;color:var(--muted)}.yp .go svg{width:15px;height:15px}
.yp .callout{margin:0 20px 14px;border:1px solid #F5D38A;background:var(--warn-soft);border-radius:8px;padding:12px 14px;display:flex;gap:12px;font-size:12.5px}
.yp .page>.callout{margin:0}
.yp .callout svg{width:20px;height:20px;color:var(--warn);flex:none}.yp .callout b{display:block;color:var(--warn);font-size:13px}
.yp .plist{list-style:none;margin:0;padding:0}
.yp .plist li{display:flex;align-items:center;gap:12px;padding:12px 20px;border-top:1px solid var(--line);cursor:pointer}.yp .plist li:hover{background:var(--bg)}
.yp .av{width:36px;height:36px;border-radius:8px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font:700 12px var(--f-body);flex:none}
.yp .plist .who{flex:1;min-width:0}.yp .plist .who b{display:block;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.yp .plist .who small{font-size:11.5px;color:var(--muted)}
.yp .tag{font:600 10.5px var(--f-body);padding:3px 8px;border-radius:99px;background:var(--bad-soft);color:var(--bad);white-space:nowrap}
.yp .empty-li{padding:16px 20px;color:var(--muted);font-size:13px;border-top:1px solid var(--line)}
.yp .cap{padding:18px 20px;display:grid;gap:10px}
.yp .cap-top{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--muted)}
.yp .cap-top b{font-size:11.5px;color:var(--ok);background:var(--ok-soft);padding:3px 8px;border-radius:99px}
.yp .cap strong{font:700 24px var(--f-body)}.yp .cap strong span{font-size:13px;font-weight:500;color:var(--muted)}
.yp .bar{height:8px;border-radius:99px;background:var(--bg);border:1px solid var(--line);overflow:hidden}
.yp .bar i{display:block;height:100%;background:var(--accent);border-radius:99px}.yp .cap small{font-size:12px;color:var(--muted)}
.yp .telrow{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.yp .toast{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:var(--fg);color:var(--bg);padding:8px 14px;border-radius:6px;font-size:13px;z-index:20;max-width:calc(100vw - 32px)}
.yp .intro{background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:14px 16px;display:grid;gap:12px}
.yp .intro h2{font-size:15px;margin:0 0 4px}.yp .intro p{margin:0;color:var(--muted);font-size:13px;max-width:95ch}
.yp .intro p.contact{margin-top:6px;color:var(--fg)}
.yp .steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;counter-reset:s}
.yp .steps li{counter-increment:s;background:var(--bg);border-radius:6px;padding:10px 12px;font-size:12.5px;color:var(--muted)}
.yp .steps li b{display:block;color:var(--fg);font-size:13px;margin-bottom:2px}
.yp .steps li b::before{content:counter(s) " · ";font-family:var(--f-mono);color:var(--accent)}
.yp .foto{display:grid;gap:6px}.yp label.btn{display:inline-flex;align-items:center}.yp label.btn.mesgul{opacity:.6;cursor:wait}
.yp .foto-izgara{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:6px}
.yp .foto-izgara img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:6px;border:1px solid var(--line);display:block}
.yp .tk{min-height:100vh;background:var(--bg)}
.yp .tk-ust{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--side);color:#fff}
.yp .tk-kim{flex:1;min-width:0}.yp .tk-kim b{display:block;font-size:14px}.yp .tk-kim small{display:block;font-size:11.5px;color:var(--side-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.yp .tk-cik{width:38px;height:38px;border-radius:8px;border:1px solid var(--side-line);background:none;color:#fff;display:grid;place-items:center;cursor:pointer}.yp .tk-cik svg{width:18px;height:18px}
.yp .tk-ana{max-width:640px;margin:0 auto;padding:14px 16px 40px;display:grid;gap:10px}
.yp .tk-gunler{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px}
.yp .tk-gunler button{flex:none;border:1px solid var(--line);background:var(--surface);border-radius:10px;padding:8px 12px;font-weight:600;cursor:pointer;text-align:left}
.yp .tk-gunler button small{display:block;font-weight:500;font-size:11px;color:var(--muted)}
.yp .tk-gunler button[aria-selected="true"]{background:var(--accent);border-color:var(--accent);color:#fff}.yp .tk-gunler button[aria-selected="true"] small{color:#DBEAFE}
.yp .tk-kart{background:var(--surface);border:1px solid var(--line);border-radius:12px;overflow:hidden}
.yp .tk-kart.acik{border-color:var(--accent)}
.yp .tk-kart-ust{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;width:100%;padding:14px;background:none;border:0;text-align:left;cursor:pointer}
.yp .tk-saat{font-size:13px;font-weight:600;color:var(--accent);background:var(--accent-soft);border-radius:8px;padding:6px 8px}
.yp .tk-ozet b{display:block;font-size:14px}.yp .tk-ozet small{display:block;font-size:12px;color:var(--muted)}
.yp .tk-detay{border-top:1px solid var(--line);padding:14px;display:grid;gap:12px;background:var(--bg)}
.yp .tk-detay dl{grid-template-columns:76px minmax(0,1fr)}
.yp .tk-adimlar{display:grid;gap:8px}.yp .tk-adimlar .btn{min-height:46px;font-size:15px;font-weight:600}
.yp .tk-bos{color:var(--muted);text-align:center;padding:28px 0;margin:0}
.yp .tk-baslik{font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:10px 0 0}
.yp .tk-yenile{display:inline-flex;align-items:center;gap:8px;justify-self:center;margin-top:8px}
@media (max-width:1100px){.yp .kcards{grid-template-columns:repeat(2,minmax(0,1fr))}.yp .dash-grid{grid-template-columns:minmax(0,1fr)}}
@media (max-width:980px){.yp .main{grid-template-columns:minmax(0,1fr)}}
@media (max-width:860px){.yp .app{grid-template-columns:minmax(0,1fr);background:var(--bg)}.yp .side{position:static;height:auto}
.yp .brand{padding:14px 16px}.yp .user,.yp .nav-h,.yp .top-for,.yp .top-sep{display:none}
.yp .side-nav{flex-direction:row;overflow-x:auto;padding:8px 16px}.yp .side-nav button{white-space:nowrap;width:auto}
.yp .side-nav button[aria-selected="true"]::before{display:none}.yp .topbar{padding:0 16px}.yp .page{padding:20px 16px 40px}
.yp .page-head h1{font-size:24px}.yp .steps{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.yp .kcards{grid-template-columns:minmax(0,1fr)}.yp .pill.yer,.yp .gunpill,.yp .crumb{display:none}
.yp .grid2,.yp .grid3{grid-template-columns:minmax(0,1fr)}.yp dl{grid-template-columns:100px minmax(0,1fr)}.yp .steps{grid-template-columns:minmax(0,1fr)}}
@media (prefers-reduced-motion:reduce){.yp *{transition:none!important}}
`;
