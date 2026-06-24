import React from "react";

// Kurumsal logo (yatay lockup + opsiyonel "Bil, gör, çağır." mottosu) — kaynak:
// ~/Desktop/benservis-marka/logo-yatay.svg (sistem-font wordmark, viewBox 540×158).
// Renkler prop ile override edilebilir → koyu zeminde benColor="#fff" + showMotto={false}
// ile kompakt varyant (ör. ServisEkrani header). Varsayılanlar ana sayfa logosuyla birebir.
export default function BenservisLogo({
  style,
  benColor = "#1E293B",
  servisColor = "#2563EB",
  mottoColor = "#475569",
  showMotto = true,
}) {
  return (
    <svg viewBox={showMotto ? "0 0 547 162" : "0 0 547 150"} style={style} xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="Benservis — Bil, gör, çağır.">
      <g transform="translate(12,14) scale(1.083333)">
        <rect width="120" height="120" rx="28" fill="#2563EB" />
        <path d="M60 22 C42 22 28 36 28 53 C28 75 60 98 60 98 C60 98 92 75 92 53 C92 36 78 22 60 22 Z" fill="#ffffff" />
        <g fill="#2563EB">
          <circle cx="60" cy="51" r="15" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect key={deg} x="55.5" y="27" width="9" height="15" rx="3" transform={`rotate(${deg} 60 51)`} />
          ))}
        </g>
        <circle cx="60" cy="51" r="6" fill="#ffffff" />
      </g>
      <text x="162" y="89" fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="83" fontWeight="600" letterSpacing="-1.8">
        <tspan fill={benColor}>ben</tspan><tspan fill={servisColor}>servis</tspan>
      </text>
      {showMotto && (
        <text x="347" y="122" fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="31.5" fill={mottoColor} textAnchor="middle">Bil, gör, çağır.</text>
      )}
    </svg>
  );
}
