// src/KayitSecim.jsx — `/kayit` ÜYELİK sayfası: TEK GİRİŞ (14 Eki 2026).
// Tolga (14 Eki): "sağ üstte kayıt ol u üyelik olarak değiştir. üyelik girişi ikiye ayrılmasın tek giriş olsun".
// Önceki hâl (YK #172 ÜY-1, 11 Eki): iki kart (Servis / Satıcıyım · Bireyim). Artık tek form:
//   • E-posta + şifre (Supabase Auth, servis paneliyle aynı hesap sistemi). Hesapta servis_id varsa
//     servis paneline (/panel) geçer; yoksa bireysel hesap sayfası henüz yok (ÜY-2) → bilgi mesajı.
//   • "Şifremi unuttum" → Supabase sıfırlama e-postası (servis paneliyle aynı dönüş adresi).
//   • "Hesabın yok mu?" → servis/satıcı kaydı (gelen `kaynak` aynen taşınır) · bireysel "Üye ol" formu (ÜY-2).
// ÜY-2 (18 Eki 2026): "Üye ol" aynı sayfada açılır (/giris yok, /kayit tek giriş): e-posta + şifre + zorunlu
//   aydınlatma/açık rıza + isteğe bağlı garanti hatırlatma onayı → Supabase signUp, doğrulama e-postası
//   /hesabim'e döner. Rıza beyanı user_metadata'ya yalnız sürüm numarası olarak gider; profili veritabanı
//   tetikleyicisi açar (supabase/migrations/20261018_172_uy2_uyelik.sql). Olay `uyelik_kayit` (sonuc).
// Olay `uyelik_giris` (sonuc: servis | birey | hata) — e-posta ya da kişisel veri analitiğe yazılmaz.
// ⛔ Satır içi stile `display` yazılmaz (PR #175 dersi).
import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import BenservisLogo from "./BenservisLogo.jsx";
import { supabase } from "./lib/supabase.js";
import { servisIdOku } from "./servis-kimlik.js";
import { kayitDogrula, kayitParametreleri, kayitSonucu, UYELIK_AYDINLATMA_URL, SIFRE_EN_AZ } from "./uyelik.js";
import { NAVY as INK, BLUE, HAIR, SLATE, TINT, GREEN_DEEP } from "./theme.js";

export const UYELIK_ACIK = true; // ÜY-2 (18 Eki): bireysel hesap + /hesabim

// Kaynak etiketi servis kaydına aynen taşınır; yalnız slug karakterleri ve sunucunun
// sınırı (api/servis/basvuru.js: en fazla 32) — serbest metin URL'ye taşınmaz.
export function kaynakOku(search) {
  const k = new URLSearchParams(search).get("kaynak") || "";
  return /^[a-z0-9-]{1,32}$/.test(k) ? k : "kayit";
}

// Giriş sonrası yön (servis kimliği app_metadata'dan; 15 Eki güvenlik düzeltmesi): servis hesabı panele, diğerleri (bireysel) ÜY-2 açılınca /hesabim'e.
export const girisYonu = (user, uyelikAcik = UYELIK_ACIK) =>
  servisIdOku(user) ? "/panel" : uyelikAcik ? "/hesabim" : null;

const olc = (sonuc) => { try { track("uyelik_giris", { sonuc }); } catch { /* ölçüm akışı bozmaz */ } };

export default function KayitSecim() {
  const kaynak = kaynakOku(window.location.search);
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [bilgi, setBilgi] = useState("");
  const [yuk, setYuk] = useState(false);
  const [mod, setMod] = useState("giris"); // giris | uye
  const [riza, setRiza] = useState(false);
  const [hatirlatma, setHatirlatma] = useState(false);

  useEffect(() => {
    document.title = "Üyelik · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, follow";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  const giris = async (e) => {
    e.preventDefault();
    setHata(""); setBilgi("");
    if (!email.trim() || !sifre) { setHata("E-posta ve şifreni yaz."); return; }
    setYuk(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: sifre });
    setYuk(false);
    if (error) { olc("hata"); setHata("E-posta ya da şifre hatalı."); return; }
    const yon = girisYonu(data.user);
    if (yon) { olc(yon === "/panel" ? "servis" : "birey"); window.location.assign(yon); return; }
    olc("birey");
    await supabase.auth.signOut();
    setBilgi("Bireysel üyelik sayfası çok yakında açılıyor. Hesabın hazır olduğunda buradan giriş yapabileceksin.");
  };

  const sifremiUnuttum = async () => {
    setHata(""); setBilgi("");
    if (!email.trim()) { setHata("Önce e-posta adresini yaz."); return; }
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin + "/hesabim", // /hesabim yeni şifreyi alır, servis hesabını panele geçirir
    });
    if (error) { setHata("Sıfırlama e-postası gönderilemedi, biraz sonra tekrar dene."); return; }
    setBilgi("Şifre sıfırlama bağlantısı e-posta adresine gönderildi.");
  };

  const uyeOl = async (e) => {
    e.preventDefault();
    setHata(""); setBilgi("");
    const h = kayitDogrula({ email, sifre, riza });
    if (h) { setHata(h); return; }
    setYuk(true);
    const sonuc = kayitSonucu(await supabase.auth.signUp(kayitParametreleri({ email, sifre, hatirlatma }, window.location.origin)));
    setYuk(false);
    try { track("uyelik_kayit", { sonuc: sonuc.tur }); } catch { /* ölçüm akışı bozmaz */ }
    if (sonuc.tur === "gonderildi") { setSifre(""); setBilgi(sonuc.mesaj); return; }
    if (sonuc.tur === "var") setMod("giris");
    setHata(sonuc.mesaj);
  };

  const modDegis = (m) => { setMod(m); setHata(""); setBilgi(""); };

  return (
    <div className="ks">
      <style>{CSS}</style>
      <header className="ks-ust">
        <div className="ks-kap">
          <a href="/" aria-label="Benservis ana sayfası" className="ks-logo">
            <BenservisLogo style={{ height: 40, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </a>
        </div>
      </header>
      <main className="ks-kap ks-ana">
        <h1>Üyelik</h1>
        <p className="ks-alt">Servis, satıcı ya da bireysel üye: herkes buradan giriş yapar.</p>
        {mod === "giris" ? (
        <form className="ks-kart ks-form" onSubmit={giris} noValidate>
          <h2>Giriş yap</h2>
          <label htmlFor="ks-eposta">E-posta</label>
          <input id="ks-eposta" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="ks-sifre">Şifre</label>
          <input id="ks-sifre" type="password" autoComplete="current-password" value={sifre} onChange={(e) => setSifre(e.target.value)} />
          {hata && <p className="ks-hata" role="alert">{hata}</p>}
          {bilgi && <p className="ks-bilgi" role="status">{bilgi}</p>}
          <button type="submit" className="ks-dugme" disabled={yuk}>{yuk ? "Giriş yapılıyor…" : "Giriş yap"}</button>
          <button type="button" className="ks-ikincil ks-link" onClick={sifremiUnuttum}>Şifremi unuttum</button>
        </form>
        ) : (
        <form className="ks-kart ks-form" onSubmit={uyeOl} noValidate>
          <h2>Bireysel üye ol</h2>
          <p>Cihazlarını ekle, garanti bitişini takip et. Üyelik ücretsiz.</p>
          <label htmlFor="ks-eposta">E-posta</label>
          <input id="ks-eposta" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="ks-sifre">Şifre (en az {SIFRE_EN_AZ} karakter)</label>
          <input id="ks-sifre" type="password" autoComplete="new-password" value={sifre} onChange={(e) => setSifre(e.target.value)} />
          <label className="ks-onay">
            <input type="checkbox" checked={riza} onChange={(e) => setRiza(e.target.checked)} />
            <span><a href={UYELIK_AYDINLATMA_URL} target="_blank" rel="noopener noreferrer">Üyelik Aydınlatma Metni</a>'ni okudum; hesabımın ve ekleyeceğim cihaz bilgilerinin bu metindeki amaçlarla işlenmesine açık rıza veriyorum.</span>
          </label>
          <label className="ks-onay">
            <input type="checkbox" checked={hatirlatma} onChange={(e) => setHatirlatma(e.target.checked)} />
            <span>Cihazlarımın garantisi bitmeden bana e-postayla hatırlatma gönderilsin. (İsteğe bağlı, istediğin zaman kapatabilirsin.)</span>
          </label>
          {hata && <p className="ks-hata" role="alert">{hata}</p>}
          {bilgi && <p className="ks-bilgi" role="status">{bilgi}</p>}
          <button type="submit" className="ks-dugme" disabled={yuk}>{yuk ? "Gönderiliyor…" : "Üye ol"}</button>
          <button type="button" className="ks-ikincil ks-link" onClick={() => modDegis("giris")}>Hesabım var, giriş yap</button>
        </form>
        )}
        <section className="ks-yeni">
          <h2>Hesabın yok mu?</h2>
          <div className="ks-yeni-satirlar">
            <div className="ks-yeni-satir">
              <Ikon tur="servis" />
              <div>
                <strong>Servis ya da satıcıysan</strong>
                <a className="ks-ikincil" rel="nofollow" href={`/servis-kayit?kaynak=${kaynak}`} onClick={() => { try { track("kayit_secim", { tur: "servis" }); } catch { /* */ } }}>Servis kaydına başla →</a>
              </div>
            </div>
            <div className="ks-yeni-satir">
              <Ikon tur="birey" />
              <div>
                <strong>Bireysel üye olmak istiyorsan</strong>
                {UYELIK_ACIK
                  ? <button type="button" className="ks-ikincil ks-link" onClick={() => { modDegis("uye"); window.scrollTo(0, 0); }}>Üye ol →</button>
                  : <span className="ks-yakinda">Bireysel üyelik çok yakında açılıyor</span>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Ikon({ tur }) {
  const yol = tur === "servis"
    ? <><path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.4l-4.8 4.8a1.5 1.5 0 0 0 2.1 2.1l4.8-4.8a3.5 3.5 0 0 0 4.4-4.9l-2 2-1.7-1.7Z" /></>
    : <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>;
  return <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{yol}</svg>;
}

const CSS = `
.ks{min-height:100vh;background:#F5F7FA;color:${INK};font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.ks a{text-decoration:none}
.ks-kap{max-width:920px;margin:0 auto;padding:0 16px}
.ks-ust{background:${INK}}
.ks-ust .ks-kap{padding-top:12px;padding-bottom:12px}
.ks-logo{display:inline-flex}
.ks-ana{padding-top:32px;padding-bottom:48px}
.ks h1{font-family:'Fraunces',serif;font-size:32px;margin:0}
.ks-alt{color:${SLATE};font-size:16px;margin:6px 0 22px}
.ks-form{max-width:440px}
.ks-form label{font-size:13px;font-weight:700;color:${SLATE}}
.ks-form input{border:1px solid ${HAIR};border-radius:10px;padding:12px 13px;font-size:16px;font-family:inherit;color:${INK};background:#fff}
.ks-form input:focus{outline:2px solid ${BLUE};outline-offset:1px}
.ks-dugme{border:none;cursor:pointer;font-family:inherit;font-size:15px}
.ks-dugme[disabled]{opacity:.7}
.ks-link{background:none;border:none;cursor:pointer;font-family:inherit;padding:4px}
.ks-form .ks-hata{color:#DC2626;font-weight:700;font-size:14px;margin:0}
.ks-onay{display:flex;flex-direction:row;gap:10px;align-items:flex-start;font-weight:500!important;color:${INK}!important;font-size:14px!important;line-height:1.45}
.ks-onay input{width:18px;height:18px;padding:0;border:none;margin-top:2px;flex:none;accent-color:${BLUE}}
.ks-onay a{color:${BLUE};font-weight:700}
.ks-form .ks-bilgi{color:${GREEN_DEEP};font-weight:700;font-size:14px;margin:0}
.ks-yeni{max-width:440px;margin-top:22px}
.ks-yeni h2{font-family:'Fraunces',serif;font-size:20px;margin:0 0 10px}
.ks-yeni-satirlar{display:flex;flex-direction:column;gap:12px}
.ks-yeni-satir{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:14px 16px}
.ks-yeni-satir div{display:flex;flex-direction:column;gap:4px;align-items:flex-start}
.ks-yeni-satir .ks-ikincil,.ks-yeni-satir .ks-yakinda{text-align:left}
.ks-yeni-satir .ks-yakinda{padding:6px 10px;font-size:13px}
.ks-kart{background:#fff;border:1px solid ${HAIR};border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:10px}
.ks-kart h2{font-family:'Fraunces',serif;font-size:22px;margin:4px 0 0}
.ks-kart p{color:${SLATE};line-height:1.5;margin:0 0 6px;flex:1}
.ks-dugme{background:${BLUE};color:#fff!important;border-radius:10px;padding:13px 16px;font-weight:800;text-align:center}
.ks-ikincil{color:${BLUE}!important;font-weight:700;font-size:14px;text-align:center}
.ks-yakinda{background:${TINT};color:${GREEN_DEEP};border-radius:10px;padding:12px 16px;font-weight:800;text-align:center}
@media (max-width:640px){
  .ks h1{font-size:26px}
  .ks-ana{padding-top:22px}
}
`;
