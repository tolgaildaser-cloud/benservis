// src/LandingPage.jsx
// benservis.com ana karşılama sayfası — 3 büyük yönlendirme kartı.
// 1) Arıza Kaydı → /ariza (AI teşhis uygulaması)
// 2) İkinci El Ürün → /ikinci-el (pazaryeri)
// 3) Ben Tamir Ederim → tr.ifixit.com (şimdilik harici)
import React from "react";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

function Kart({ href, harici, baslik, aciklama, etiket, gorsel, renk, gradyan }) {
  return (
    <a
      href={href}
      target={harici ? "_blank" : undefined}
      rel={harici ? "noopener noreferrer" : undefined}
      style={{
        display: "flex", flexDirection: "column",
        background: "#FFFDF8", borderRadius: 22,
        border: "1px solid #E5DCC9", overflow: "hidden",
        textDecoration: "none", color: INK,
        boxShadow: "0 2px 10px rgba(34,48,42,0.06)",
        transition: "transform .18s ease, box-shadow .18s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 14px 30px rgba(34,48,42,0.14)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(34,48,42,0.06)"; }}
    >
      {/* Görsel alan */}
      <div style={{
        height: 170, background: gradyan,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* dekoratif halkalar */}
        <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.35)", top: -70, right: -50 }} />
        <div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.25)", bottom: -50, left: -30 }} />
        <div style={{ fontSize: 64, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.18))", lineHeight: 1 }}>
          {gorsel.ana}
        </div>
        <div style={{ position: "absolute", fontSize: 26, top: 24, right: 34, opacity: 0.9 }}>{gorsel.sag}</div>
        <div style={{ position: "absolute", fontSize: 22, bottom: 22, left: 36, opacity: 0.85 }}>{gorsel.sol}</div>
      </div>

      {/* Metin */}
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700, marginBottom: 8 }}>
          {baslik}
        </div>
        <p style={{ fontSize: 13.5, color: "#5C6660", lineHeight: 1.65, margin: 0, flex: 1 }}>
          {aciklama}
        </p>
        <div style={{
          marginTop: 18, alignSelf: "flex-start",
          padding: "9px 18px", borderRadius: 99,
          background: renk, color: "white",
          fontWeight: 700, fontSize: 13.5,
          display: "flex", alignItems: "center", gap: 7,
        }}>
          {etiket} {harici ? "↗" : "→"}
        </div>
      </div>
    </a>
  );
}

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{FONT}</style>

      {/* Üst bar */}
      <div style={{ background: INK, color: CREAM, padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700 }}>◑ Benservis</span>
        <a href="/servis-kayit" style={{ color: "#B8BEB6", fontSize: 12.5, textDecoration: "none", border: "1px solid #ffffff33", borderRadius: 8, padding: "7px 14px" }}>
          Servis misiniz? Katılın
        </a>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "44px 20px 10px" }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, color: INK, margin: "0 0 12px", lineHeight: 1.2 }}>
          Cihazın için doğru yol
        </h1>
        <p style={{ fontSize: 15, color: "#5C6660", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Teşhisten tamire, ikinci elden kendin yapmaya — tek adres.
        </p>
      </div>

      {/* 3 Kart */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20, maxWidth: 1020, width: "100%",
        margin: "30px auto 0", padding: "0 20px 56px",
        boxSizing: "border-box",
      }}>
        <Kart
          href="/ariza"
          baslik="Arıza Kaydı"
          aciklama="Cihazının belirtisini yaz; yapay zekâ olası arızayı ve tahmini maliyeti söylesin, bölgendeki en uygun servisi çağır."
          etiket="Teşhise Başla"
          renk={AMBER}
          gradyan={`linear-gradient(135deg, ${AMBER} 0%, #E08A4E 100%)`}
          gorsel={{ ana: "🔧", sag: "⚡", sol: "🤖" }}
        />
        <Kart
          href="/ikinci-el"
          baslik="İkinci El Ürün"
          aciklama="Servislerin yenilediği, tamir geçmişi belgeli cihazları güvenle al — ya da kendi cihazını dakikalar içinde satışa çıkar."
          etiket="Ürünlere Bak"
          renk={GREEN}
          gradyan={`linear-gradient(135deg, ${GREEN} 0%, #5C9E66 100%)`}
          gorsel={{ ana: "🛒", sag: "♻️", sol: "📋" }}
        />
        <Kart
          href="https://tr.ifixit.com"
          harici
          baslik="Ben Tamir Ederim"
          aciklama="Elin yatkınsa kendin onar — binlerce cihaz için adım adım, fotoğraflı tamir rehberleri."
          etiket="Rehberlere Git"
          renk={INK}
          gradyan={`linear-gradient(135deg, ${INK} 0%, #3E5248 100%)`}
          gorsel={{ ana: "🛠️", sag: "📖", sol: "💡" }}
        />
      </div>

      {/* Alt bilgi */}
      <div style={{ marginTop: "auto", textAlign: "center", padding: "18px 20px 26px", fontSize: 12, color: "#9A9384" }}>
        Benservis — AI destekli arıza teşhisi · doğrulanmış servisler · DPP'li ikinci el
      </div>
    </div>
  );
}
