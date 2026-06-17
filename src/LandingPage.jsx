// src/LandingPage.jsx
// benservis.com ana karşılama — minimal & premium.
// 1) Arıza Kaydı → /ariza  2) İkinci El → /ikinci-el  3) Ben Tamir Ederim → tr.ifixit.com
import React from "react";

const INK = "#1E293B", AMBER = "#2563EB", GREEN = "#22C55E";
const BG = "#F8FAFC", SURFACE = "#FFFFFF";
const MUTED = "#475569", FAINT = "#94A3B8", HAIR = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

function Kart({ href, harici, no, baslik, aciklama, etiket, ikon, tint, accent }) {
  return (
    <a
      href={href}
      target={harici ? "_blank" : undefined}
      rel={harici ? "noopener noreferrer" : undefined}
      className="lp-kart"
      style={{
        display: "flex", flexDirection: "column",
        background: SURFACE, borderRadius: 18,
        border: `1px solid ${HAIR}`, padding: "26px 24px 22px",
        textDecoration: "none", color: INK, minHeight: 230,
      }}
    >
      {/* İkon rozeti + numara */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 13, background: tint,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
        }}>{ikon}</div>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 14, color: FAINT, fontWeight: 500 }}>0{no}</span>
      </div>

      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.01em" }}>
        {baslik}
      </div>
      <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, margin: 0, flex: 1 }}>
        {aciklama}
      </p>
      <div className="lp-kart-cta" style={{ marginTop: 20, color: accent, fontWeight: 700, fontSize: 13.5, display: "flex", alignItems: "center", gap: 6 }}>
        {etiket} <span className="lp-arrow" style={{ transition: "transform .2s ease" }}>{harici ? "↗" : "→"}</span>
      </div>
    </a>
  );
}

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Hanken Grotesk', sans-serif", display: "flex", flexDirection: "column", color: INK }}>
      <style>{FONT}</style>
      <style>{`
        .lp-kart { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .lp-kart:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -22px rgba(30,41,59,.30); border-color: #E2E8F0; }
        .lp-kart:hover .lp-arrow { transform: translateX(4px); }
      `}</style>

      {/* Üst bar — sade, hairline */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", borderBottom: `1px solid ${HAIR}`, maxWidth: 1080, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>
          <span style={{ color: AMBER }}>◑</span> Benservis
        </span>
        <a href="/servis-kayit" style={{ color: MUTED, fontSize: 13, textDecoration: "none", fontWeight: 600 }}>
          Servis misiniz? <span style={{ color: INK }}>Katılın →</span>
        </a>
      </header>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "72px 24px 16px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: AMBER, marginBottom: 18 }}>
          AI destekli cihaz servisi
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 600, margin: "0 0 18px", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
          Cihazın için<br />doğru yol
        </h1>
        <p style={{ fontSize: 16.5, color: MUTED, maxWidth: 460, margin: "0 auto", lineHeight: 1.6 }}>
          Teşhisten tamire, ikinci elden kendin yapmaya — hepsi tek adreste.
        </p>
      </div>

      {/* 3 Kart */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))",
        gap: 18, maxWidth: 1000, width: "100%", margin: "40px auto 0",
        padding: "0 24px 64px", boxSizing: "border-box",
      }}>
        <Kart
          href="/ariza" no={1}
          baslik="Arıza Kaydı"
          aciklama="Cihazının belirtisini yaz; yapay zekâ olası arızayı ve tahmini maliyeti söylesin, bölgendeki en uygun servisi çağır."
          etiket="Teşhise başla" ikon="🔧" tint="#F8FAFC" accent={AMBER}
        />
        <Kart
          href="/ikinci-el" no={2}
          baslik="İkinci El Ürün"
          aciklama="Servislerin yenilediği, tamir geçmişi belgeli cihazları güvenle al — ya da kendi cihazını dakikalar içinde satışa çıkar."
          etiket="Ürünlere bak" ikon="🛒" tint="#DCFCE7" accent={GREEN}
        />
        <Kart
          href="https://tr.ifixit.com" harici no={3}
          baslik="Ben Tamir Ederim"
          aciklama="Elin yatkınsa kendin onar — binlerce cihaz için adım adım, fotoğraflı tamir rehberleri."
          etiket="Rehberlere git" ikon="🛠️" tint="#F1F5F9" accent={INK}
        />
      </div>

      {/* Alt bilgi */}
      <div style={{ marginTop: "auto", textAlign: "center", padding: "28px 24px 34px", fontSize: 12.5, color: FAINT, borderTop: `1px solid ${HAIR}` }}>
        Benservis — AI destekli arıza teşhisi · doğrulanmış servisler · DPP'li ikinci el
      </div>
    </div>
  );
}
