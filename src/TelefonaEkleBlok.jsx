// TelefonaEkleBlok — PWA duyurusunun SİTE METNİ ayağı (YK Kararı #26 adım 5/5).
// Metin birebir: benservis-icerik/sosyal/2026-07-30-pwa-duyuru-paketi.md, bölüm 1 (PAZ yazdı).
//
// KURAL (duyuru paketi, "FE'ye not"): bu blok AGRESİF BANNER DEĞİLDİR ve `AnaEkranaEkle`
// ipucu şeridinin YERİNE GEÇMEZ, onu tekrarlamaz:
//   - İpucu şeridi yalnız teşhis SONUÇ ekranında çıkar (2. ziyaret + 30 gün susma kuralı).
//   - Bu blok yalnız ANA SAYFA form ekranında, sayfa akışının içinde, pasif durur.
//   → İkisi aynı ekranda üst üste gelmez (farklı adımlar).
//   - Uygulama zaten ana ekrandan açıldıysa (standalone) hiç gösterilmez — kurulu kullanıcıya
//     "kur" demek anlamsız.

import React, { useEffect, useState } from "react";

const INK = "#1E293B", MUTED = "#475569", FAINT = "#94A3B8", HAIR = "#E2E8F0";

const standaloneMi = () => {
  try {
    return window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;
  } catch { return false; }
};

export default function TelefonaEkleBlok() {
  const [gorunur, setGorunur] = useState(false);

  useEffect(() => { if (!standaloneMi()) setGorunur(true); }, []);

  if (!gorunur) return null;

  return (
    <section
      style={{
        marginTop: 18, background: "rgba(37,99,235,.05)", border: `1px solid ${HAIR}`,
        borderRadius: 14, padding: "16px 16px 14px",
      }}
    >
      <h2 style={{ margin: "0 0 7px", fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 16, color: INK }}>
        📱 Benservis'i telefonuna ekle
      </h2>
      <p style={{ margin: "0 0 8px", fontSize: 13.5, lineHeight: 1.6, color: MUTED }}>
        Mağazadan indirmene gerek yok. Tarayıcı menüsünden "Ana ekrana ekle" dediğinde Benservis
        ikondan tam ekran açılır — ve internet çekmediğinde bile yakınındaki servislerin listesi
        elinde kalır.
      </p>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: FAINT }}>
        iPhone: Paylaş → Ana Ekrana Ekle · Android: menü (⋮) → Uygulamayı yükle
      </p>
    </section>
  );
}
