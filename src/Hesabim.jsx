// src/Hesabim.jsx — `/hesabim` bireysel üye sayfası (YK #172 ÜY-2, 18 Eki 2026). noindex, menüsüz.
//
// Akış: oturum yoksa /kayit'e döner · servis hesabı (app_metadata.servis_id) /panel'e geçer ·
//   e-posta doğrulama ve şifre sıfırlama bağlantıları buraya döner (supabase-js URL'deki oturumu kendisi alır;
//   PASSWORD_RECOVERY olayında yeni şifre formu açılır).
// Veri: `uyeler` (profil) ve `cihazlar` (sahip_id = üye) anon anahtar + üyenin oturumuyla, RLS üzerinden
//   okunur (supabase/migrations/20261018_172_uy2_uyelik.sql). Üye cihaz EKLEYEMEZ: o ÜY-3 (sunucu ucu).
// Profil yoksa (kayıt tetikleyicisi açamadıysa) rıza kutusu gösterilir; onayla üye profilini kendisi açar.
// ⛔ Yetki user_metadata'dan okunmaz (#176). ⛔ Olaylar PII'siz. ⛔ Satır içi stile `display` yazılmaz.
import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import BenservisLogo from "./BenservisLogo.jsx";
import { supabase } from "./lib/supabase.js";
import { servisIdOku } from "./servis-kimlik.js";
import { UYELIK_RIZA_V, UYELIK_AYDINLATMA_URL, SIFRE_EN_AZ, kalanGun } from "./uyelik.js";
import { NAVY as INK, BLUE, HAIR, SLATE, TINT, GREEN_DEEP, RED } from "./theme.js";

const olc = (ad, p) => { try { track(ad, p); } catch { /* ölçüm akışı bozmaz */ } };

export default function Hesabim() {
  const [durum, setDurum] = useState("yukleniyor"); // yukleniyor | hazir | yenisifre | hata
  const [user, setUser] = useState(null);
  const [profil, setProfil] = useState(null); // null = yok
  const [cihazlar, setCihazlar] = useState([]);

  useEffect(() => {
    document.title = "Hesabım · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, nofollow";
    document.head.appendChild(m);

    let kurtarma = false;
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") { kurtarma = true; setDurum("yenisifre"); }
    });
    (async () => {
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user;
      if (kurtarma) { setUser(u || null); return; }
      if (!u) { window.location.replace("/kayit"); return; }
      if (servisIdOku(u)) { window.location.replace("/panel"); return; }
      setUser(u);
      await yukle(u.id);
    })();
    return () => { sub?.subscription?.unsubscribe(); m.remove(); };
  }, []);

  async function yukle(id) {
    const [p, c] = await Promise.all([
      supabase.from("uyeler").select("ad, hatirlatma_acik, riza_metin_v").eq("id", id).maybeSingle(),
      supabase.from("cihazlar").select("id, kategori, marka, model, garanti_bitis_tarihi")
        .eq("sahip_id", id).order("created_at", { ascending: false }),
    ]);
    if (p.error || c.error) { setDurum("hata"); return; }
    setProfil(p.data || null);
    setCihazlar(c.data || []);
    setDurum("hazir");
    olc("hesabim_goruntule", { profil: p.data ? "var" : "yok", cihaz: (c.data || []).length ? "var" : "yok" });
  }

  const cikis = async () => { await supabase.auth.signOut(); window.location.assign("/"); };

  return (
    <div className="hs">
      <style>{CSS}</style>
      <header className="hs-ust">
        <div className="hs-kap hs-ust-ic">
          <a href="/" aria-label="Benservis ana sayfası" className="hs-logo">
            <BenservisLogo style={{ height: 40, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </a>
          {user && durum !== "yenisifre" && <button type="button" className="hs-cikis" onClick={cikis}>Çıkış yap</button>}
        </div>
      </header>
      <main className="hs-kap hs-ana">
        {durum === "yukleniyor" && <p className="hs-soluk">Yükleniyor…</p>}
        {durum === "hata" && (
          <div className="hs-kart"><p className="hs-hata" role="alert">Hesap bilgileri şu an yüklenemedi. Sayfayı yenile; sorun sürerse <a href="mailto:info@benservis.com">info@benservis.com</a>.</p></div>
        )}
        {durum === "yenisifre" && <YeniSifre user={user} />}
        {durum === "hazir" && user && (
          <>
            <h1>Hesabım</h1>
            <p className="hs-soluk">{user.email}</p>
            {profil
              ? <Profil uid={user.id} profil={profil} onDegis={setProfil} />
              : <ProfilAc uid={user.id} onAcildi={(p) => setProfil(p)} />}
            <Cihazlarim cihazlar={cihazlar} />
          </>
        )}
      </main>
    </div>
  );
}

function Profil({ uid, profil, onDegis }) {
  const [ad, setAd] = useState(profil.ad || "");
  const [mesaj, setMesaj] = useState("");
  const [yuk, setYuk] = useState(false);

  const kaydet = async (degisim) => {
    setYuk(true); setMesaj("");
    const { data, error } = await supabase.from("uyeler").update(degisim).eq("id", uid)
      .select("ad, hatirlatma_acik, riza_metin_v").single();
    setYuk(false);
    if (error) { setMesaj("Kaydedilemedi, tekrar dene."); return; }
    onDegis(data);
    setMesaj("Kaydedildi.");
    if ("hatirlatma_acik" in degisim) olc("uyelik_hatirlatma", { acik: degisim.hatirlatma_acik ? "evet" : "hayir" });
  };

  return (
    <section className="hs-kart">
      <h2>Bilgilerim</h2>
      <form className="hs-satir" onSubmit={(e) => { e.preventDefault(); kaydet({ ad: ad.trim().slice(0, 80) || null }); }}>
        <label htmlFor="hs-ad">Adın (isteğe bağlı)</label>
        <div className="hs-yan">
          <input id="hs-ad" maxLength={80} autoComplete="name" value={ad} onChange={(e) => setAd(e.target.value)} />
          <button type="submit" className="hs-dugme-k" disabled={yuk}>Kaydet</button>
        </div>
      </form>
      <label className="hs-onay">
        <input type="checkbox" checked={profil.hatirlatma_acik} disabled={yuk}
          onChange={(e) => kaydet({ hatirlatma_acik: e.target.checked })} />
        <span>Garantisi bitmek üzere olan cihazlarım için e-postayla hatırlatma gönderilsin.</span>
      </label>
      {mesaj && <p className="hs-bilgi" role="status">{mesaj}</p>}
    </section>
  );
}

function ProfilAc({ uid, onAcildi }) {
  const [riza, setRiza] = useState(false);
  const [hatirlatma, setHatirlatma] = useState(false);
  const [hata, setHata] = useState("");
  const [yuk, setYuk] = useState(false);

  const ac = async (e) => {
    e.preventDefault();
    if (!riza) { setHata("Devam etmek için aydınlatma metnini onaylaman gerekiyor."); return; }
    setYuk(true); setHata("");
    const { data, error } = await supabase.from("uyeler")
      .insert({ id: uid, riza_metin_v: UYELIK_RIZA_V, hatirlatma_acik: hatirlatma })
      .select("ad, hatirlatma_acik, riza_metin_v").single();
    setYuk(false);
    if (error) { setHata("Profil açılamadı, biraz sonra tekrar dene."); return; }
    olc("uyelik_profil", { yol: "yedek" });
    onAcildi(data);
  };

  return (
    <form className="hs-kart" onSubmit={ac}>
      <h2>Üyeliğini tamamla</h2>
      <label className="hs-onay">
        <input type="checkbox" checked={riza} onChange={(e) => setRiza(e.target.checked)} />
        <span><a href={UYELIK_AYDINLATMA_URL} target="_blank" rel="noopener noreferrer">Üyelik Aydınlatma Metni</a>'ni okudum; hesabımın ve ekleyeceğim cihaz bilgilerinin bu metindeki amaçlarla işlenmesine açık rıza veriyorum.</span>
      </label>
      <label className="hs-onay">
        <input type="checkbox" checked={hatirlatma} onChange={(e) => setHatirlatma(e.target.checked)} />
        <span>Cihazlarımın garantisi bitmeden bana e-postayla hatırlatma gönderilsin. (İsteğe bağlı)</span>
      </label>
      {hata && <p className="hs-hata" role="alert">{hata}</p>}
      <button type="submit" className="hs-dugme" disabled={yuk}>{yuk ? "Kaydediliyor…" : "Devam et"}</button>
    </form>
  );
}

function Cihazlarim({ cihazlar }) {
  return (
    <section className="hs-kart">
      <h2>Cihazlarım</h2>
      {cihazlar.length === 0 ? (
        <div className="hs-bos">
          <p>Henüz cihaz eklemedin.</p>
          <p className="hs-soluk">Cihaz ekleme çok yakında: faturanı ve ürün fotoğrafını yükleyip garanti bitişini buradan takip edebileceksin.</p>
        </div>
      ) : (
        <ul className="hs-liste">
          {cihazlar.map((c) => {
            const g = kalanGun(c.garanti_bitis_tarihi);
            return (
              <li key={c.id}>
                <strong>{[c.marka, c.model].filter(Boolean).join(" ") || c.kategori || "Cihaz"}</strong>
                {c.kategori && <span className="hs-soluk">{c.kategori}</span>}
                {g !== null && <span className={g >= 0 ? "hs-rozet" : "hs-rozet hs-rozet-bitti"}>{g >= 0 ? `Garanti: ${g} gün kaldı` : "Garanti bitti"}</span>}
              </li>
            );
          })}
        </ul>
      )}
      <a className="hs-ikincil" href="/" onClick={() => olc("hesabim_teshis", {})}>Arıza mı var? Ücretsiz teşhis →</a>
    </section>
  );
}

function YeniSifre({ user }) {
  const [s1, setS1] = useState("");
  const [hata, setHata] = useState("");
  const [bitti, setBitti] = useState(false);
  const [yuk, setYuk] = useState(false);

  const kaydet = async (e) => {
    e.preventDefault();
    if (s1.length < SIFRE_EN_AZ) { setHata(`Şifre en az ${SIFRE_EN_AZ} karakter olmalı.`); return; }
    setYuk(true); setHata("");
    const { error } = await supabase.auth.updateUser({ password: s1 });
    setYuk(false);
    if (error) { setHata("Şifre değiştirilemedi; bağlantının süresi dolmuş olabilir, yeniden sıfırlama iste."); return; }
    setBitti(true);
    setTimeout(() => window.location.assign(servisIdOku(user) ? "/panel" : "/hesabim"), 1200);
  };

  return (
    <form className="hs-kart hs-dar" onSubmit={kaydet}>
      <h2>Yeni şifre belirle</h2>
      <label htmlFor="hs-s1">Yeni şifre (en az {SIFRE_EN_AZ} karakter)</label>
      <input id="hs-s1" type="password" autoComplete="new-password" value={s1} onChange={(e) => setS1(e.target.value)} />
      {hata && <p className="hs-hata" role="alert">{hata}</p>}
      {bitti && <p className="hs-bilgi" role="status">Şifren değişti, yönlendiriliyorsun…</p>}
      <button type="submit" className="hs-dugme" disabled={yuk || bitti}>{yuk ? "Kaydediliyor…" : "Şifreyi kaydet"}</button>
    </form>
  );
}

const CSS = `
.hs{min-height:100vh;background:#F5F7FA;color:${INK};font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.hs a{text-decoration:none}
.hs-kap{max-width:720px;margin:0 auto;padding:0 16px}
.hs-ust{background:${INK}}
.hs-ust-ic{display:flex;align-items:center;justify-content:space-between;padding-top:12px;padding-bottom:12px}
.hs-logo{display:inline-flex}
.hs-cikis{background:none;border:1px solid #475569;color:#E2E8F0;border-radius:8px;padding:8px 12px;font-family:inherit;font-weight:700;cursor:pointer}
.hs-ana{padding-top:28px;padding-bottom:48px;display:flex;flex-direction:column;gap:16px}
.hs h1{font-family:'Fraunces',serif;font-size:32px;margin:0}
.hs h2{font-family:'Fraunces',serif;font-size:21px;margin:0}
.hs-soluk{color:${SLATE};margin:0}
.hs-kart{background:#fff;border:1px solid ${HAIR};border-radius:16px;padding:22px;display:flex;flex-direction:column;gap:12px}
.hs-dar{max-width:440px}
.hs-kart label{font-size:13px;font-weight:700;color:${SLATE}}
.hs-kart input:not([type=checkbox]){border:1px solid ${HAIR};border-radius:10px;padding:12px 13px;font-size:16px;font-family:inherit;color:${INK};background:#fff;min-width:0;flex:1}
.hs-kart input:focus{outline:2px solid ${BLUE};outline-offset:1px}
.hs-satir{display:flex;flex-direction:column;gap:6px}
.hs-yan{display:flex;gap:8px}
.hs-onay{display:flex;gap:10px;align-items:flex-start;font-weight:500!important;color:${INK}!important;font-size:14px!important;line-height:1.45}
.hs-onay input{width:18px;height:18px;margin-top:2px;flex:none;accent-color:${BLUE}}
.hs-onay a{color:${BLUE};font-weight:700}
.hs-dugme,.hs-dugme-k{background:${BLUE};color:#fff;border:none;border-radius:10px;font-family:inherit;font-weight:800;cursor:pointer}
.hs-dugme{padding:13px 16px;font-size:15px}
.hs-dugme-k{padding:0 16px;font-size:14px}
.hs-dugme[disabled],.hs-dugme-k[disabled]{opacity:.7}
.hs-ikincil{color:${BLUE}!important;font-weight:700;font-size:14px}
.hs-hata{color:${RED};font-weight:700;font-size:14px;margin:0}
.hs-hata a{color:${BLUE}}
.hs-bilgi{color:${GREEN_DEEP};font-weight:700;font-size:14px;margin:0}
.hs-bos{background:${TINT};border-radius:12px;padding:16px}
.hs-bos p{margin:0 0 6px}
.hs-liste{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.hs-liste li{border:1px solid ${HAIR};border-radius:12px;padding:12px 14px;display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center}
.hs-rozet{background:#F0FDF4;color:${GREEN_DEEP};border-radius:999px;padding:3px 10px;font-size:13px;font-weight:700}
.hs-rozet-bitti{background:#FEF2F2;color:${RED}}
@media (max-width:640px){ .hs h1{font-size:26px} .hs-ana{padding-top:20px} }
`;
