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
import { NAVY as INK, MUTED, FAINT, HAIR } from "./theme.js";


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
      <h2 style={{ margin: "0 0 7px", fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(16px, 1.7vw, 19px)", color: INK }}>
        📱 Benservis'i telefonuna ekle
      </h2>
      <p style={{ margin: "0 0 8px", fontSize: "clamp(13.5px, 1.4vw, 16px)", lineHeight: 1.6, color: MUTED }}>
        Mağazadan indirmene gerek yok. Tarayıcı menüsünden "Ana ekrana ekle" dediğinde Benservis
        ikondan tam ekran açılır — ve internet çekmediğinde bile yakınındaki servislerin listesi
        elinde kalır.
      </p>
      <p style={{ margin: 0, fontSize: "clamp(12.5px, 1.2vw, 14px)", lineHeight: 1.5, color: FAINT }}>
        iPhone: Paylaş → Ana Ekrana Ekle · Android: sağ üstteki üç nokta → Uygulamayı yükle
      </p>
    </section>
  );
}
