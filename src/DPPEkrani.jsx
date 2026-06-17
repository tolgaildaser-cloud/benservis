// src/DPPEkrani.jsx
import React, { useState } from "react";
import BenservisRozet from "./BenservisRozet.jsx";
import { CIHAZLAR } from "./constants.js";
import { supabase } from "./lib/supabase.js";

// TODO (Faz 3+): After cihaz ID is known, move files to cihazlar/{id}/ or tamirler/{id}/
// Auth gelince storage path'ler RLS ile kısıtlanacak.
async function uploadPhoto(file, folder) {
  const ext = file.name.split(".").pop().toLowerCase();
  const allowed = ["jpg", "jpeg", "png", "webp"];
  if (!allowed.includes(ext)) throw new Error("Desteklenmeyen format (jpg, png, webp)");
  if (file.size > 5 * 1024 * 1024) throw new Error("Maksimum dosya boyutu 5 MB");

  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from("DPP Foto")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("DPP Foto").getPublicUrl(path);
  return data.publicUrl;
}

async function uploadFatura(file, cihazId) {
  const ext = file.name.split(".").pop().toLowerCase();
  const allowed = ["jpg", "jpeg", "png", "pdf"];
  const allowedMimes = ["image/jpeg", "image/png", "application/pdf"];
  if (!allowed.includes(ext) || !allowedMimes.includes(file.type)) {
    throw new Error("Desteklenmeyen format (jpg, png, pdf)");
  }
  if (file.size > 10 * 1024 * 1024) throw new Error("Maksimum dosya boyutu 10 MB");

  const fileName = `${crypto.randomUUID()}.${ext}`;
  const path = `${cihazId || "gecici"}/${fileName}`;

  const { error } = await supabase.storage
    .from("DPP Faturalar")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("DPP Faturalar").getPublicUrl(path);
  return data.publicUrl;
}

// Tasarım token'ları (App.jsx ile tutarlı)
const INK = "#1E293B", CREAM = "#F1F5F9", AMBER = "#2563EB", GREEN = "#22C55E";

// ─── Fotoğraf Yükleme ────────────────────────────────────────────────────────
function FotoYukle({ urls, onUrls, maxAdet = 3 }) {
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");
  const inputRef = React.useRef(null);

  const dosyaSec = async (e) => {
    const dosyalar = Array.from(e.target.files || []);
    if (!dosyalar.length) return;
    if (urls.length + dosyalar.length > maxAdet) {
      setHata(`En fazla ${maxAdet} fotoğraf eklenebilir.`);
      return;
    }
    setHata("");
    setYukleniyor(true);
    try {
      const folder = `gecici/${Date.now()}`;
      const yeniUrls = await Promise.all(dosyalar.map((f) => uploadPhoto(f, folder)));
      onUrls([...urls, ...yeniUrls]);
    } catch (e) {
      setHata(e.message);
    } finally {
      setYukleniyor(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const kaldir = (url) => onUrls(urls.filter((u) => u !== url));

  return (
    <div>
      <div style={s.fotoGaleri}>
        {urls.map((url) => (
          <div key={url} style={{ position: "relative", flexShrink: 0 }}>
            <img src={url} alt="Fotoğraf" style={s.fotoKucuk} />
            <button
              type="button"
              onClick={() => kaldir(url)}
              style={{
                position: "absolute", top: -6, right: -6,
                background: "#DC2626", color: "#fff", border: "none",
                borderRadius: "50%", width: 18, height: 18, fontSize: 10,
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif",
              }}
            >✕</button>
          </div>
        ))}
        {urls.length < maxAdet && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={yukleniyor}
            style={{
              width: 64, height: 64, border: "1.5px dashed #E2E8F0", borderRadius: 8,
              background: "#F8FAFC", color: "#94A3B8", fontSize: 22, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            {yukleniyor ? "⏳" : "+"}
          </button>
        )}
      </div>
      {hata && <p style={{ ...s.hata, marginTop: 4 }}>{hata}</p>}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        style={{ display: "none" }}
        onChange={dosyaSec}
      />
    </div>
  );
}

// ─── Arama Ekranı ────────────────────────────────────────────────────────────
function AramaEkrani({ onBulundu, onYeni, initialSeriNo }) {
  const [seriNo, setSeriNo] = useState(initialSeriNo || "");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const ara = async () => {
    const sn = seriNo.trim().toUpperCase();
    if (!sn) { setHata("Seri numarası girin."); return; }
    setHata("");
    setYukleniyor(true);
    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(sn)}`);
      if (res.status === 404) {
        onYeni(sn);
        return;
      }
      if (!res.ok) throw new Error("Sunucu hatası");
      const data = await res.json();
      onBulundu(data);
    } catch (e) {
      setHata("Bir sorun oluştu, tekrar dene.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={s.ekran}>
      <h2 style={s.baslik}>📋 Cihaz Pasaportu</h2>
      <p style={s.aciklama}>Seri numarasını gir — mevcut pasaportu getir veya yeni oluştur.</p>
      <input
        style={s.input}
        aria-label="Seri numarası"
        value={seriNo}
        onChange={(e) => setSeriNo(e.target.value.toUpperCase())}
        onKeyDown={(e) => e.key === "Enter" && ara()}
        placeholder="örn. SN1234567890"
        autoFocus
      />
      {hata && <p style={s.hata}>{hata}</p>}
      <button style={s.cta} onClick={ara} disabled={yukleniyor}>
        {yukleniyor ? "Aranıyor…" : "Pasaportu Getir →"}
      </button>
    </div>
  );
}

// ─── Yeni Cihaz Formu ────────────────────────────────────────────────────────
function YeniCihazForm({ seriNo, teshisContext, onOlusturuldu }) {
  const [form, setForm] = useState({
    kategori: teshisContext?.cihaz || "",
    marka: teshisContext?.marka || "",
    model: "",
    renk: "",
    uretim_yili: "",
    satin_alma_tarihi: "",
    garanti_baslangic_tarihi: "",
    garanti_bitis_tarihi: "",
    uzatilmis_garanti: false,
    uzatilmis_garanti_bitis: "",
  });
  const [fotograflar, setFotograflar] = useState([]);
  const [faturaUrl, setFaturaUrl] = useState(null);
  const [faturaYukleniyor, setFaturaYukleniyor] = useState(false);
  const [faturaHata, setFaturaHata] = useState("");
  const faturaRef = React.useRef(null);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const faturaYukle = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFaturaHata("");
    setFaturaYukleniyor(true);
    try {
      const url = await uploadFatura(f, null);
      setFaturaUrl(url);
    } catch (err) {
      setFaturaHata(err.message);
    } finally {
      setFaturaYukleniyor(false);
      if (faturaRef.current) faturaRef.current.value = "";
    }
  };

  const olustur = async () => {
    if (!form.kategori) { setHata("Cihaz türü seçin."); return; }
    if (!form.marka.trim()) { setHata("Marka gerekli."); return; }
    setHata("");
    setYukleniyor(true);
    try {
      const body = {
        seri_no: seriNo,
        kategori: form.kategori || null,
        marka: form.marka || null,
        model: form.model || null,
        renk: form.renk || null,
        uretim_yili: form.uretim_yili ? parseInt(form.uretim_yili, 10) : null,
        satin_alma_tarihi: form.satin_alma_tarihi || null,
        garanti_baslangic_tarihi: form.garanti_baslangic_tarihi || null,
        garanti_bitis_tarihi: form.garanti_bitis_tarihi || null,
        uzatilmis_garanti: form.uzatilmis_garanti,
        uzatilmis_garanti_bitis: form.uzatilmis_garanti_bitis || null,
        fatura_url: faturaUrl || null,
        fotograflar,
      };
      const res = await fetch("/api/dpp/cihaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Sunucu hatası");
      const data = await res.json();
      onOlusturuldu(data);
    } catch {
      setHata("Pasaport oluşturulamadı, tekrar dene.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={s.ekran}>
      <h2 style={s.baslik}>Yeni Cihaz</h2>
      <p style={{ ...s.aciklama, marginBottom: 4 }}>
        Seri no: <strong style={{ color: INK, letterSpacing: "0.05em" }}>{seriNo}</strong>
      </p>
      <p style={{ ...s.aciklama, fontSize: 13, color: "#94A3B8" }}>
        Kayıtlı pasaport bulunamadı. Cihaz bilgilerini gir.
      </p>

      <label style={s.label}>Cihaz türü</label>
      <div style={s.chipWrap}>
        {CIHAZLAR.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => set("kategori", c)}
            style={{ ...s.chip, ...(form.kategori === c ? s.chipActive : {}) }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Marka</label>
          <input style={s.input} value={form.marka} onChange={(e) => set("marka", e.target.value)} placeholder="Daikin" />
        </div>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Model</label>
          <input style={s.input} value={form.model} onChange={(e) => set("model", e.target.value)} placeholder="FTXB35C" />
        </div>
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Renk <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} value={form.renk} onChange={(e) => set("renk", e.target.value)} placeholder="Beyaz" />
        </div>
        <div style={{ width: 110 }}>
          <label style={s.label}>Üretim yılı</label>
          <input style={s.input} type="number" min="1980" max="2030" value={form.uretim_yili} onChange={(e) => set("uretim_yili", e.target.value)} placeholder="2021" />
        </div>
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Satın alma tarihi <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} type="date" value={form.satin_alma_tarihi} onChange={(e) => set("satin_alma_tarihi", e.target.value)} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Garanti başlangıç <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} type="date" value={form.garanti_baslangic_tarihi} onChange={(e) => set("garanti_baslangic_tarihi", e.target.value)} />
        </div>
      </div>
      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Garanti bitişi <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} type="date" value={form.garanti_bitis_tarihi} onChange={(e) => set("garanti_bitis_tarihi", e.target.value)} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <label style={{ ...s.label, display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={form.uzatilmis_garanti}
              onChange={e => set("uzatilmis_garanti", e.target.checked)}
              style={{ width: 16, height: 16, cursor: "pointer" }}
            />
            Uzatılmış garanti
          </label>
          {form.uzatilmis_garanti && (
            <input
              style={s.input}
              type="date"
              value={form.uzatilmis_garanti_bitis}
              onChange={(e) => set("uzatilmis_garanti_bitis", e.target.value)}
            />
          )}
        </div>
      </div>

      <label style={s.label}>Fatura <span style={s.opt}>(PDF veya fotoğraf, max 10 MB, opsiyonel)</span></label>
      {faturaUrl ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <a href={faturaUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: AMBER, fontWeight: 600 }}>📄 Fatura Görüntüle</a>
          <button type="button" onClick={() => setFaturaUrl(null)}
            style={{ fontSize: 11, color: "#DC2626", background: "none", border: "none", cursor: "pointer" }}>Kaldır</button>
        </div>
      ) : (
        <div style={{ marginBottom: 14 }}>
          <button type="button" onClick={() => faturaRef.current?.click()} disabled={faturaYukleniyor}
            style={{ padding: "9px 16px", borderRadius: 8, border: "1.5px dashed #E2E8F0", background: "#F8FAFC", color: "#475569", fontSize: 13, cursor: "pointer" }}>
            {faturaYukleniyor ? "⏳ Yükleniyor..." : "📎 Fatura Yükle"}
          </button>
          {faturaHata && <p style={s.hata}>{faturaHata}</p>}
        </div>
      )}
      <input ref={faturaRef} type="file" accept="image/jpeg,image/png,application/pdf" style={{ display: "none" }} onChange={faturaYukle} />

      <label style={s.label}>Fotoğraf <span style={s.opt}>(opsiyonel, max 3)</span></label>
      <FotoYukle urls={fotograflar} onUrls={setFotograflar} maxAdet={3} />
      {hata && <p style={s.hata}>{hata}</p>}
      <button style={{ ...s.cta, marginTop: 18 }} onClick={olustur} disabled={yukleniyor}>
        {yukleniyor ? "Oluşturuluyor…" : "Pasaport Oluştur →"}
      </button>
    </div>
  );
}

// ─── Placeholder ekranlar (sonraki tasklarda doldurulacak) ────────────────────

function PasaportGorunum({ pasaport, onTamirEkle, onYenile }) {
  const { cihaz, tamirler, toplam_maliyet } = pasaport;

  const garantiDurumu = () => {
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    const sonuclar = [];
    if (cihaz.garanti_baslangic_tarihi) {
      sonuclar.push({ tip: "baslangic", tarih: cihaz.garanti_baslangic_tarihi });
    }
    if (cihaz.garanti_bitis_tarihi) {
      const bitis = new Date(cihaz.garanti_bitis_tarihi + "T00:00:00");
      const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
      sonuclar.push({ tip: "bitis", tarih: cihaz.garanti_bitis_tarihi, kalan: fark, aktif: fark > 0 });
    }
    if (cihaz.uzatilmis_garanti && cihaz.uzatilmis_garanti_bitis) {
      const bitis = new Date(cihaz.uzatilmis_garanti_bitis + "T00:00:00");
      const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
      sonuclar.push({ tip: "uzatilmis", tarih: cihaz.uzatilmis_garanti_bitis, kalan: fark, aktif: fark > 0 });
    }
    return sonuclar;
  };

  const garantiBilgileri = garantiDurumu();
  const hasBenservis = tamirler.some(t => t.servis_turu === "benservis");

  return (
    <div style={s.ekran}>
      {/* Cihaz başlığı kartı */}
      <div style={s.pasaportKart}>
        <div style={s.pasaportBaslik}>
          {cihaz.marka && cihaz.model
            ? `${cihaz.marka} ${cihaz.model}`
            : cihaz.marka || cihaz.kategori || "Cihaz"}
        </div>
        <div style={s.pasaportAlt}>
          {cihaz.kategori && <span style={s.rozet}>{cihaz.kategori}</span>}
          {cihaz.uretim_yili && <span style={s.metaBilgi}>{cihaz.uretim_yili}</span>}
          {hasBenservis && (
            <div style={{ marginLeft: "auto" }}>
              <BenservisRozet size="lg" tarih={tamirler.find(t => t.servis_turu === "benservis")?.tarih} />
            </div>
          )}
        </div>
        {garantiBilgileri.length > 0 && (
          <div style={{ marginTop: 10, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "10px 12px", fontSize: 12 }}>
            {garantiBilgileri.map((g, i) => (
              <div key={g.tip} style={{ marginBottom: i < garantiBilgileri.length - 1 ? 4 : 0, color: "#475569" }}>
                {g.tip === "baslangic" && `📅 Alındı: ${new Date(g.tarih).toLocaleDateString("tr-TR")}`}
                {g.tip === "bitis" && (
                  <span style={{ color: g.aktif ? GREEN : "#DC2626", fontWeight: 600 }}>
                    🛡️ Garanti: {new Date(g.tarih).toLocaleDateString("tr-TR")}
                    {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
                  </span>
                )}
                {g.tip === "uzatilmis" && (
                  <span style={{ color: g.aktif ? GREEN : "#DC2626", fontWeight: 600 }}>
                    ➕ Uzatılmış: {new Date(g.tarih).toLocaleDateString("tr-TR")}
                    {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
                  </span>
                )}
              </div>
            ))}
            {cihaz.fatura_url && (
              <div style={{ marginTop: 6 }}>
                <a href={cihaz.fatura_url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: AMBER, fontWeight: 600 }}>📄 Fatura Görüntüle</a>
              </div>
            )}
          </div>
        )}
        <div style={s.seriNo}>SN: {cihaz.seri_no}</div>
        {toplam_maliyet > 0 && (
          <div style={s.toplamMaliyet}>
            Toplam tamir maliyeti:{" "}
            <strong>{toplam_maliyet.toLocaleString("tr-TR")} TL</strong>
          </div>
        )}
        {/* Cihaz fotoğrafları */}
        {cihaz.fotograflar?.length > 0 && (
          <div style={s.fotoGaleri}>
            {cihaz.fotograflar.map((url, i) => (
              <img key={url} src={url} alt={`Cihaz ${i + 1}`} style={s.fotoKucuk} />
            ))}
          </div>
        )}
      </div>

      {/* Tamir zaman çizelgesi */}
      <div style={s.secBaslik}>
        Tamir Geçmişi
        <span style={s.tamirSayisi}>{tamirler.length} kayıt</span>
      </div>

      {tamirler.length === 0 ? (
        <p style={s.bosMetin}>Henüz tamir kaydı yok.</p>
      ) : (
        tamirler.map((t) => (
          <div key={t.id} style={s.tamirKart}>
            <div style={s.tamirUst}>
              <span style={s.tamirTarih}>
                {new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              {t.servis_turu === "benservis" && (
                <BenservisRozet size="sm" tarih={t.tarih} />
              )}
              {t.servis_turu === "harici" && <span style={s.hariciRozet}>Harici Servis</span>}
              {t.servis_turu === "sahip" && <span style={s.sahipRozet}>Kendim Yaptım</span>}
              {t.servis_turu === "yetkili" && <span style={s.hariciRozet}>Yetkili Servis</span>}
            </div>
            <div style={s.tamirIslem}>{t.yapilan_islem}</div>
            {t.servis_adi && <div style={s.tamirServis}>{t.servis_adi}</div>}
            {t.degistirilen_parcalar?.length > 0 && (
              <div style={s.parcalar}>
                {t.degistirilen_parcalar.map((p, i) => (
                  <span key={i} style={s.parcaChip}>{p}</span>
                ))}
              </div>
            )}
            {t.maliyet != null && (
              <div style={s.tamirMaliyet}>{t.maliyet.toLocaleString("tr-TR")} TL</div>
            )}
            {t.fotograflar?.length > 0 && (
              <div style={s.fotoGaleri}>
                {t.fotograflar.map((url, i) => (
                  <img key={url} src={url} alt={`Tamir ${i + 1}`} style={s.fotoKucuk} />
                ))}
              </div>
            )}
          </div>
        ))
      )}

      <button style={{ ...s.cta, marginTop: 16 }} onClick={onTamirEkle}>
        + Tamir Kaydı Ekle
      </button>
    </div>
  );
}

function TamirEkleForm({ cihazId, onEklendi, onIptal }) {
  const [form, setForm] = useState({
    tarih: new Date().toISOString().split("T")[0],
    yapilan_islem: "",
    parcaGiris: "",
    degistirilen_parcalar: [],
    maliyet: "",
    servis_adi: "",
    servis_turu: "harici",
    notlar: "",
  });
  const [fotograflar, setFotograflar] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const parcaEkle = () => {
    const p = form.parcaGiris.trim();
    if (!p || form.degistirilen_parcalar.includes(p)) return;
    setForm((f) => ({
      ...f,
      degistirilen_parcalar: [...f.degistirilen_parcalar, p],
      parcaGiris: "",
    }));
  };

  const parcaKaldir = (p) =>
    set("degistirilen_parcalar", form.degistirilen_parcalar.filter((x) => x !== p));

  const kaydet = async () => {
    if (!form.tarih) { setHata("Tarih gerekli."); return; }
    if (!form.yapilan_islem.trim()) { setHata("Yapılan işlem gerekli."); return; }
    setHata("");
    setYukleniyor(true);
    try {
      const res = await fetch("/api/dpp/tamir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cihaz_id: cihazId,
          tarih: form.tarih,
          yapilan_islem: form.yapilan_islem,
          degistirilen_parcalar: form.degistirilen_parcalar,
          maliyet: form.maliyet !== "" ? parseInt(form.maliyet, 10) : null,
          servis_adi: form.servis_adi || null,
          servis_turu: form.servis_turu,
          notlar: form.notlar || null,
          fotograflar,
        }),
      });
      if (!res.ok) throw new Error("Sunucu hatası");
      onEklendi();
    } catch {
      setHata("Kayıt eklenemedi, tekrar dene.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={s.ekran}>
      <h2 style={s.baslik}>Tamir Kaydı Ekle</h2>

      <label style={s.label}>Servis türü</label>
      <div style={s.chipWrap}>
        {[["harici", "Harici Servis"], ["yetkili", "Yetkili Servis"], ["benservis", "Benservis"], ["sahip", "Kendim Yaptım"]].map(([v, l]) => (
          <button key={v} type="button" onClick={() => set("servis_turu", v)}
            style={{ ...s.chip, ...(form.servis_turu === v ? s.chipActive : {}) }}>
            {l}
          </button>
        ))}
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Tarih</label>
          <input style={s.input} type="date" value={form.tarih} onChange={(e) => set("tarih", e.target.value)} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Servis adı <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} value={form.servis_adi} onChange={(e) => set("servis_adi", e.target.value)} placeholder="Klima Pro" />
        </div>
      </div>

      <label style={s.label}>Yapılan işlem</label>
      <textarea
        style={{ ...s.input, resize: "vertical", lineHeight: 1.5, minHeight: 70 }}
        rows={3}
        value={form.yapilan_islem}
        onChange={(e) => set("yapilan_islem", e.target.value)}
        placeholder="Gaz dolumu yapıldı, filtreler temizlendi"
      />

      <label style={s.label}>Değiştirilen parçalar <span style={s.opt}>(opsiyonel)</span></label>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          style={{ ...s.input, flex: 1 }}
          value={form.parcaGiris}
          onChange={(e) => set("parcaGiris", e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); parcaEkle(); } }}
          placeholder="Parça adı yaz, Enter ile ekle"
        />
        <button type="button" style={s.parcaEkleBtn} onClick={parcaEkle}>+ Ekle</button>
      </div>
      {form.degistirilen_parcalar.length > 0 && (
        <div style={{ ...s.parcalar, marginTop: 8 }}>
          {form.degistirilen_parcalar.map((p) => (
            <button key={p} type="button" onClick={() => parcaKaldir(p)}
              style={{ ...s.parcaChip, cursor: "pointer", background: "#E2E8F0", border: "none" }}>
              {p} ✕
            </button>
          ))}
        </div>
      )}

      <div style={s.row}>
        <div style={{ width: 140 }}>
          <label style={s.label}>Maliyet <span style={s.opt}>(TL)</span></label>
          <input
            style={s.input}
            type="number"
            min="0"
            step="1"
            value={form.maliyet}
            onChange={(e) => {
              const v = e.target.value;
              // Sadece tam sayı kabul et
              if (v === "" || /^\d+$/.test(v)) set("maliyet", v);
            }}
            placeholder="850"
          />
        </div>
      </div>

      <label style={s.label}>Notlar <span style={s.opt}>(opsiyonel)</span></label>
      <textarea
        style={{ ...s.input, resize: "vertical", minHeight: 52 }}
        rows={2}
        value={form.notlar}
        onChange={(e) => set("notlar", e.target.value)}
      />

      <label style={s.label}>Fotoğraf <span style={s.opt}>(öncesi/sonrası, max 5)</span></label>
      <FotoYukle urls={fotograflar} onUrls={setFotograflar} maxAdet={5} />
      {hata && <p style={s.hata}>{hata}</p>}
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button type="button" style={s.iptalBtn} onClick={onIptal} disabled={yukleniyor}>İptal</button>
        <button
          type="button"
          style={{ ...s.cta, flex: 1, marginTop: 0 }}
          onClick={kaydet}
          disabled={yukleniyor}
        >
          {yukleniyor ? "Kaydediliyor…" : "Kaydet →"}
        </button>
      </div>
    </div>
  );
}

// ─── Ana Bileşen ──────────────────────────────────────────────────────────────
export default function DPPEkrani({ initialSeriNo, teshisContext, onKapat }) {
  // ekran: "arama" | "yeni_cihaz" | "pasaport" | "tamir_ekle"
  const [ekran, setEkran] = useState("arama");
  const [bekleyenSeriNo, setBekleyenSeriNo] = useState("");
  const [pasaport, setPasaport] = useState(null); // { cihaz, tamirler, toplam_maliyet }

  const handleBulundu = (data) => { setPasaport(data); setEkran("pasaport"); };
  const handleYeni = (sn) => { setBekleyenSeriNo(sn); setEkran("yeni_cihaz"); };
  const handleOlusturuldu = (data) => { setPasaport(data); setEkran("pasaport"); };
  const handleTamirEklendi = async () => {
    if (!pasaport?.cihaz) { setEkran("pasaport"); return; }
    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(pasaport.cihaz.seri_no)}`);
      if (res.ok) setPasaport(await res.json());
    } catch {
      // Yenileme başarısız — eski pasaport göster, veri kaybolmaz
    } finally {
      setEkran("pasaport");
    }
  };

  return (
    <div style={s.overlay} onKeyDown={(e) => e.key === "Escape" && onKapat()} tabIndex={-1}>
      <div style={s.panel}>
        {/* Sticky header */}
        <div style={s.header}>
          <span style={s.headerTitle}>DPP Pasaport</span>
          <button style={s.kapat} onClick={onKapat}>✕</button>
        </div>
        <div style={s.icerik}>
          {ekran === "arama" && (
            <AramaEkrani
              onBulundu={handleBulundu}
              onYeni={handleYeni}
              initialSeriNo={initialSeriNo}
            />
          )}
          {ekran === "yeni_cihaz" && (
            <YeniCihazForm
              seriNo={bekleyenSeriNo}
              teshisContext={teshisContext}
              onOlusturuldu={handleOlusturuldu}
            />
          )}
          {ekran === "pasaport" && pasaport && (
            <PasaportGorunum
              pasaport={pasaport}
              onTamirEkle={() => setEkran("tamir_ekle")}
              onYenile={handleTamirEklendi}
            />
          )}
          {ekran === "tamir_ekle" && pasaport && (
            <TamirEkleForm
              cihazId={pasaport.cihaz.id}
              onEklendi={handleTamirEklendi}
              onIptal={() => setEkran("pasaport")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Stiller ──────────────────────────────────────────────────────────────────
const s = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(30,41,59,.55)",
    zIndex: 100, display: "flex", alignItems: "flex-end",
    justifyContent: "center",
  },
  panel: {
    width: "100%", maxWidth: 640, maxHeight: "92vh",
    background: CREAM, borderRadius: "20px 20px 0 0",
    display: "flex", flexDirection: "column", overflow: "hidden",
  },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 20px", borderBottom: "1px solid #E2E8F0",
    background: "#F8FAFC", flexShrink: 0,
  },
  headerTitle: { fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: INK },
  kapat: {
    background: "none", border: "none", fontSize: 18, color: "#94A3B8",
    padding: "4px 8px", borderRadius: 6, cursor: "pointer",
  },
  icerik: { overflowY: "auto", flex: 1, padding: "20px" },
  ekran: {},
  baslik: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: INK },
  aciklama: { fontSize: 14, color: "#475569", margin: "0 0 18px", lineHeight: 1.5 },
  input: {
    width: "100%", padding: "12px 14px", borderRadius: 11,
    border: "1.5px solid #E2E8F0", background: "#F8FAFC",
    fontSize: 15, fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
    letterSpacing: "0.05em", boxSizing: "border-box",
  },
  hata: { color: "#DC2626", fontSize: 13, margin: "8px 0 0" },
  cta: {
    marginTop: 14, width: "100%", padding: "13px", borderRadius: 12,
    border: "none", background: AMBER, color: "#fff",
    fontSize: 15, fontWeight: 700, fontFamily: "'Hanken Grotesk', sans-serif",
    cursor: "pointer",
  },
  label: { display: "block", fontSize: 13.5, fontWeight: 700, margin: "14px 0 7px", color: INK },
  opt: { fontWeight: 500, color: "#94A3B8", fontSize: 12 },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 },
  chip: { fontSize: 12.5, padding: "7px 12px", borderRadius: 999, border: "1.5px solid #E2E8F0", background: "#F8FAFC", color: "#475569", fontWeight: 600, cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif" },
  chipActive: { background: INK, color: CREAM, borderColor: INK },
  row: { display: "flex", gap: 12 },
  pasaportKart: {
    background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14,
    padding: "16px 18px", marginBottom: 18,
  },
  pasaportBaslik: { fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK },
  pasaportAlt: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6, alignItems: "center" },
  rozet: { fontSize: 12, fontWeight: 700, background: INK, color: CREAM, padding: "3px 9px", borderRadius: 999 },
  metaBilgi: { fontSize: 12.5, color: "#475569" },
  seriNo: { fontSize: 12, color: "#94A3B8", marginTop: 8, letterSpacing: "0.05em" },
  toplamMaliyet: { fontSize: 13, color: "#475569", marginTop: 6 },
  fotoGaleri: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 },
  fotoKucuk: { width: 64, height: 64, objectFit: "cover", borderRadius: 8, border: "1px solid #E2E8F0" },
  secBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600,
    color: INK, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  tamirSayisi: { fontSize: 12, color: "#94A3B8", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400 },
  bosMetin: { fontSize: 14, color: "#94A3B8", textAlign: "center", padding: "24px 0" },
  tamirKart: {
    background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12,
    padding: "12px 14px", marginBottom: 10,
  },
  tamirUst: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  tamirTarih: { fontSize: 12.5, color: "#94A3B8" },
  dogrulanmisRozet: { fontSize: 11, fontWeight: 700, color: GREEN, background: "rgba(34,197,94,.1)", padding: "2px 8px", borderRadius: 999 },
  hariciRozet: { fontSize: 11, color: "#475569", background: "#F1F5F9", padding: "2px 8px", borderRadius: 999 },
  sahipRozet: { fontSize: 11, color: AMBER, background: "rgba(37,99,235,.1)", padding: "2px 8px", borderRadius: 999 },
  tamirIslem: { fontSize: 14.5, fontWeight: 700, color: INK },
  tamirServis: { fontSize: 12.5, color: "#475569", marginTop: 2 },
  parcalar: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 },
  parcaChip: { fontSize: 11.5, background: "#F1F5F9", color: "#64748B", padding: "3px 8px", borderRadius: 6 },
  tamirMaliyet: { fontSize: 13, fontWeight: 700, color: AMBER, marginTop: 6 },
  parcaEkleBtn: {
    padding: "0 14px", borderRadius: 11, border: `1.5px solid ${AMBER}`,
    background: "rgba(37,99,235,.06)", color: AMBER, fontWeight: 700, fontSize: 13,
    whiteSpace: "nowrap", fontFamily: "'Hanken Grotesk', sans-serif", cursor: "pointer",
    flexShrink: 0,
  },
  iptalBtn: {
    padding: "13px 20px", borderRadius: 12, border: "1.5px solid #E2E8F0",
    background: "transparent", color: INK, fontSize: 14.5, fontWeight: 600,
    fontFamily: "'Hanken Grotesk', sans-serif", cursor: "pointer",
  },
};
