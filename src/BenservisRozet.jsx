// src/BenservisRozet.jsx
// Benservis Doğrulanmış Tamir rozeti — SVG tabanlı marka varlığı.
// Props:
//   size    "sm" | "md" | "lg"   (varsayılan: "sm")
//   tarih   string | null         ISO tarih, sm'de gizlenir

const AMBER = "#C8632B";
const GREEN = "#3A7D44";
const CREAM = "#F5EFE2";
const INK   = "#22302A";

const BOYUTLAR = {
  sm: { w: 72,  h: 72,  r: 30, checkSize: 14, titleSize: 7,  subSize: 5.5, tarihSize: 5  },
  md: { w: 96,  h: 96,  r: 40, checkSize: 18, titleSize: 9,  subSize: 7,   tarihSize: 6  },
  lg: { w: 128, h: 128, r: 53, checkSize: 24, titleSize: 12, subSize: 9,   tarihSize: 7.5},
};

export default function BenservisRozet({ size = "sm", tarih = null }) {
  const d = BOYUTLAR[size] || BOYUTLAR.sm;
  const cx = d.w / 2;
  const cy = d.h / 2;

  // Tarih formatla
  const tarihStr = tarih
    ? new Date(tarih).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" })
    : null;

  return (
    <svg
      width={d.w}
      height={d.h}
      viewBox={`0 0 ${d.w} ${d.h}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Benservis Doğrulanmış Tamir"
      role="img"
    >
      {/* Dış daire — amber kenarlık */}
      <circle cx={cx} cy={cy} r={d.r} fill={AMBER} />

      {/* Dış daire — dashed iç çizgi */}
      <circle
        cx={cx} cy={cy}
        r={d.r - 4}
        fill="none"
        stroke={CREAM}
        strokeWidth={1}
        strokeDasharray="3 2"
        opacity={0.7}
      />

      {/* İç alan — cream */}
      <circle cx={cx} cy={cy} r={d.r - 7} fill={CREAM} />

      {/* Checkmark */}
      <text
        x={cx}
        y={cy - (size === "sm" ? 5 : size === "md" ? 7 : 9)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={d.checkSize}
        fill={GREEN}
        fontWeight="bold"
      >
        ✓
      </text>

      {/* "BENSERVİS" */}
      <text
        x={cx}
        y={cy + (size === "sm" ? 6 : size === "md" ? 8 : 11)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={d.titleSize}
        fill={INK}
        fontWeight="800"
        letterSpacing="0.08em"
        fontFamily="'Hanken Grotesk', sans-serif"
      >
        BENSERVİS
      </text>

      {/* "DOĞRULANMIŞ" — md ve lg'de göster */}
      {size !== "sm" && (
        <text
          x={cx}
          y={cy + (size === "md" ? 17 : 22)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={d.subSize}
          fill={AMBER}
          fontWeight="700"
          letterSpacing="0.06em"
          fontFamily="'Hanken Grotesk', sans-serif"
        >
          DOĞRULANMIŞ
        </text>
      )}

      {/* Tarih — sadece md ve lg'de */}
      {tarihStr && size !== "sm" && (
        <text
          x={cx}
          y={cy + (size === "md" ? 26 : 33)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={d.tarihSize}
          fill="#9A9384"
          fontFamily="'Hanken Grotesk', sans-serif"
        >
          {tarihStr}
        </text>
      )}
    </svg>
  );
}
