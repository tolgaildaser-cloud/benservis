// KVKK aydınlatma satırı — KİŞİSEL VERİ TOPLAYAN HER FORMUN GÖNDER BUTONU ALTINA.
//
// Dayanak: YK Kararı #45 (5 Ağu 2026) + teslim belgesi §4-3
// (`~/Desktop/benservis-icerik/2026-08-05-KVKK-GIZLILIK-FE-TESLIM.md`).
// Belgenin kendi uyarısı: *"sayfayı kurmak TEK BAŞINA YETMEZ"* — /gizlilik yayında olsa
// bile veri toplanan NOKTADA bilgilendirme yoksa KVKK md.10 karşılanmış olmaz.
//
// ⛔ RIZA KUTUSU DEĞİL, BİLGİLENDİRME SATIRI. Teslim belgesi §4-5: bugün pazarlama/tanıtım
//    mesajı gönderilmediği için onam kutusu EKLENMEZ (gereksiz onam KVKK'da lehimize değil).
//    Ticari ileti gönderilmeye başlanırsa ayrı, İŞARETSİZ bir kutu eklenir — bu satır değil.
//
// Tek bileşen: dört form (talep/yeni · is/yeni · ilan/yeni · servis/basvuru) aynı metni
// gösterir; metin değişirse tek yerden değişir, formlar arasında kayma olmaz.
export default function KvkkNotu({ amac = "talebinizi ilgili servise iletmek", style }) {
  return (
    <p style={{ margin: "10px 0 0", fontSize: 12, lineHeight: 1.5, color: "#94A3B8", textAlign: "center", ...style }}>
      Bilgileriniz {amac} için işlenir. Ayrıntı:{" "}
      <a href="/gizlilik/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>
        Gizlilik
      </a>
    </p>
  );
}
