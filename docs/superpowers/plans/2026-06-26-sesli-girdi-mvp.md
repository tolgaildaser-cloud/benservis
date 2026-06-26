# Sesli Girdi (STT) MVP — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Belirti alanına 🎤 ile sesle girdi ekle — tarayıcı kaydeder → `/api/stt` (OpenAI Whisper, TR) → metin → mevcut `/api/diagnose` akışı. Ses SAKLANMAZ.

**Architecture:** Yeni serverless uç `api/stt.js` ham ses gövdesini alır → OpenAI Whisper'a (`whisper-1`, language=tr) gönderir → `{text}` döner (ses RAM'de, diske/DB'ye yazılmaz, log'lanmaz). `App.jsx` `MediaRecorder` ile kaydedip uca POST'lar, dönen metni belirti textarea'sına ekler. Uç mevcut `withRateLimit` ile korunur.

**Tech Stack:** React+Vite (inline stil), Vercel serverless (ESM), `openai` SDK, mevcut `api/_ratelimit.js` (Upstash). Yeni env: `OPENAI_API_KEY`.

> **NOT — test:** Proje test runner'ı YOK; doğrulama = `node --check` + `vite build` + canlı curl/elle mikrofon (projenin mevcut yöntemi). "Test" adımları bu şekildedir.
> **ÖN KOŞUL:** `OPENAI_API_KEY` (kullanıcı OpenAI'dan alır → Vercel [Production+Preview] + `.env.local`). Uç bu olmadan 500 döner (zarif, app kırılmaz).

---

## File Structure

- **Create `api/stt.js`** — STT ucu (ham ses → Whisper → `{text}`; rate-limit; ses saklanmaz).
- **Modify `package.json`** — `openai` bağımlılığı.
- **Modify `src/App.jsx`** — `sesDurumu` state + kayıt fonksiyonları (`sesBaslat`/`sesDurdur`/`sesGonder`) + 🎤 buton (textarea altında).

Her dosya tek sorumluluk: uç = STT proxy; App.jsx = kayıt UI + textarea besleme.

---

### Task 1: `openai` bağımlılığı

**Files:** Modify `package.json` (+ `package-lock.json`)

- [ ] **Step 1: Paketi kur**

Run:
```bash
cd ~/Downloads/arizam-ne-app && npm install openai
```
Expected: `package.json` dependencies'e `"openai": "^4.x"` eklenir, lock güncellenir.

- [ ] **Step 2: Doğrula**

Run: `grep '"openai"' package.json`
Expected: `"openai": "^4...."` satırı görünür.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: openai bağımlılığı (STT/Whisper için)"
```

---

### Task 2: `api/stt.js` — STT ucu

**Files:** Create `api/stt.js`

- [ ] **Step 1: Ucu yaz**

`api/stt.js`:
```js
// api/stt.js — Ses → metin (OpenAI Whisper). Ses SAKLANMAZ: yalnız RAM buffer → Whisper → çöp.
// Diske/temp dosyaya/DB'ye/log'a ses YAZILMAZ. Ham gövde (browser Blob) okunur.
import OpenAI, { toFile } from "openai";
import { withRateLimit } from "./_ratelimit.js";

export const config = { api: { bodyParser: false } }; // ham binary gövde

const MAX_BYTES = 4 * 1024 * 1024; // Vercel istek limiti ~4.5MB altı; 60sn opus ~<1MB

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BYTES) { req.destroy(); reject(new Error("TOO_LARGE")); return; }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "OPENAI_API_KEY tanımlı değil (Vercel env)" });

  let buf;
  try {
    buf = await readRawBody(req);
  } catch (e) {
    if (e.message === "TOO_LARGE") return res.status(400).json({ error: "Ses çok uzun (max ~60sn)" });
    return res.status(400).json({ error: "Ses okunamadı" });
  }
  if (!buf || buf.length < 1000) return res.status(400).json({ error: "Ses boş/çok kısa" });

  try {
    const openai = new OpenAI({ apiKey });
    const ct = req.headers["content-type"] || "audio/webm";
    const ext = ct.includes("mp4") ? "mp4" : ct.includes("mpeg") ? "mp3" : "webm";
    const file = await toFile(buf, `ses.${ext}`, { type: ct });
    const r = await openai.audio.transcriptions.create({
      file, model: "whisper-1", language: "tr",
    });
    return res.status(200).json({ text: (r.text || "").trim() });
  } catch (e) {
    console.error("[stt] hata:", e?.message || e); // SADECE hata mesajı; ses ASLA log'lanmaz
    return res.status(502).json({ error: "Ses çevrilemedi, tekrar dene" });
  }
}

// IP başına 20/saat — gerçek kullanıcıya bol, maliyet bombasını keser.
export default withRateLimit(handler, { prefix: "stt", limits: [{ tokens: 20, window: "1 h" }] });
```

- [ ] **Step 2: Syntax doğrula**

Run: `node --check api/stt.js && echo OK`
Expected: `OK` (hata yoksa).

- [ ] **Step 3: Commit**

```bash
git add api/stt.js
git commit -m "feat: /api/stt — ses→metin (Whisper, TR), rate-limit, ses saklanmaz"
```

---

### Task 3: `App.jsx` — mikrofon UI + kayıt

**Files:** Modify `src/App.jsx`

- [ ] **Step 1: `useRef` import'unu doğrula**

`App.jsx` satır 1 zaten: `import React, { useState, useEffect, useRef } from "react";` — `useRef` var. Değişiklik gerekmez.

- [ ] **Step 2: State + kayıt fonksiyonlarını ekle**

`App.jsx`'te `tesisEt` fonksiyonundan ÖNCE (diğer `useState`'lerin yanına, ~satır 123 civarı `dppInitialSeriNo` state'inden sonra) ekle:

```jsx
  // --- Sesli girdi (STT) — ses SAKLANMAZ: kaydet → /api/stt (Whisper) → belirtiye ekle ---
  const [sesDurumu, setSesDurumu] = useState("bosta"); // "bosta" | "kaydediyor" | "isliyor"
  const mediaRecRef = useRef(null);
  const sesChunksRef = useRef([]);
  const sesStreamRef = useRef(null);
  const sesTimerRef = useRef(null);

  const sesBaslat = async () => {
    if (sesDurumu !== "bosta") return;
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setHataMsg("Bu tarayıcı ses kaydını desteklemiyor — yazarak anlatabilirsin.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sesStreamRef.current = stream;
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm"
        : MediaRecorder.isTypeSupported("audio/mp4") ? "audio/mp4" : "";
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      sesChunksRef.current = [];
      rec.ondataavailable = (e) => { if (e.data && e.data.size) sesChunksRef.current.push(e.data); };
      rec.onstop = () => sesGonder(rec.mimeType);
      mediaRecRef.current = rec;
      rec.start();
      setSesDurumu("kaydediyor");
      setHataMsg("");
      sesTimerRef.current = setTimeout(() => sesDurdur(), 60000); // 60sn otomatik durdur
    } catch (e) {
      setHataMsg("Mikrofon izni gerekli — yazarak da anlatabilirsin.");
      setSesDurumu("bosta");
    }
  };

  const sesDurdur = () => {
    if (mediaRecRef.current && mediaRecRef.current.state === "recording") {
      clearTimeout(sesTimerRef.current);
      setSesDurumu("isliyor");
      try { mediaRecRef.current.stop(); } catch { setSesDurumu("bosta"); }
    }
  };

  const sesGonder = async (mime) => {
    if (sesStreamRef.current) sesStreamRef.current.getTracks().forEach((t) => t.stop()); // mikrofonu kapat
    const blob = new Blob(sesChunksRef.current, { type: mime || "audio/webm" });
    if (blob.size < 1000) { setSesDurumu("bosta"); return; }
    try {
      const res = await fetch("/api/stt", { method: "POST", headers: { "Content-Type": blob.type }, body: blob });
      const data = await res.json();
      if (!res.ok || !data.text) throw new Error(data.error || "bos");
      setBelirti((prev) => (prev.trim() ? prev.trim() + ". " + data.text : data.text));
    } catch (e) {
      setHataMsg("Sesi anlayamadım — tekrar dene ya da yazarak anlat.");
    } finally {
      setSesDurumu("bosta");
    }
  };
```

- [ ] **Step 3: 🎤 butonunu textarea'nın altına ekle**

`App.jsx`'te belirti `<textarea ... />` öğesinden HEMEN SONRA (mevcut `{hataMsg && ...}` satırından önce) ekle:

```jsx
          <button
            type="button"
            onClick={sesDurumu === "kaydediyor" ? sesDurdur : sesBaslat}
            disabled={sesDurumu === "isliyor"}
            style={{
              marginTop: 10, width: "100%", padding: "11px", borderRadius: 12,
              border: `1.5px solid ${sesDurumu === "kaydediyor" ? "#DC2626" : "#2563EB"}`,
              background: sesDurumu === "kaydediyor" ? "rgba(220,38,38,.06)" : "rgba(37,99,235,.06)",
              color: sesDurumu === "kaydediyor" ? "#DC2626" : "#2563EB",
              fontSize: 14.5, fontWeight: 700, cursor: sesDurumu === "isliyor" ? "default" : "pointer",
              fontFamily: "inherit", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            {sesDurumu === "bosta" && "🎤 Sesle anlat"}
            {sesDurumu === "kaydediyor" && "● Dinliyorum… durdurmak için dokun"}
            {sesDurumu === "isliyor" && "Yazıya çevriliyor…"}
          </button>
```

- [ ] **Step 4: Build doğrula**

Run: `cd ~/Downloads/arizam-ne-app && npx vite build 2>&1 | tail -3`
Expected: `✓ built in ...` (hata yok). Client bundle artışı ~minimal (sadece UI mantığı).

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx
git commit -m "feat: belirti alanına 'Sesle anlat' (🎤) — MediaRecorder → /api/stt → metin"
```

---

### Task 4: Doğrulama + deploy

**Files:** yok (doğrulama + deploy)

- [ ] **Step 1: ÖN KOŞUL — OPENAI_API_KEY**

Kullanıcı: OpenAI'dan API anahtarı al → Vercel Settings → Environment Variables → `OPENAI_API_KEY` (Production + Preview) + `.env.local`. (Anahtar olmadan uç 500 döner, app kırılmaz.)

- [ ] **Step 2: Branch'i push et → preview**

```bash
git push -u origin feat-sesli-girdi
```
Expected: Vercel preview deployment oluşur (READY bekle).

- [ ] **Step 3: Uç doğrula (curl, gerçek kısa TR ses)**

Bir kısa TR ses dosyasıyla (ör. telefonda "çamaşır makinem su almıyor" kaydı → `ses.m4a`) preview/production'a POST:
```bash
curl -s -X POST "https://www.benservis.com/api/stt" -H "Content-Type: audio/mp4" --data-binary @ses.m4a
```
Expected (key ekliyse): `{"text":"çamaşır makinem su almıyor"}` benzeri doğru TR transkript. Key yoksa: `{"error":"OPENAI_API_KEY tanımlı değil..."}` (500) — beklenen.

- [ ] **Step 4: Elle mikrofon testi (canlı/preview, gerçek cihaz)**

Tarayıcıda: kök → cihaz seç → "🎤 Sesle anlat" → izin ver → konuş → durdur → textarea'ya metin **eklenir** → "Teşhis et" çalışır. Kontroller: (a) izin reddedilince kibar mesaj + yazıyla devam; (b) mevcut chip/metin korunur (ekleme); (c) ağ izinde yalnız `/api/stt`'ye gider, ses başka yere YAZILMAZ; (d) mobilde (iOS Safari + Android) kayıt+transkript çalışır.

- [ ] **Step 5: Production'a al**

Doğrulama geçtiyse:
```bash
git checkout main && git merge --ff-only feat-sesli-girdi && git push origin main
```
Vercel production deploy → READY → canlı son kontrol (gerçek bir teşhis sesle).

---

## Kabul (spec ile)
- 🎤 kaydeder, TR transkript doğru, textarea'ya eklenir ✓ (Task 3-4)
- İzin yok → yazıyla devam ✓ (Task 3 sesBaslat catch)
- `/api/stt` rate-limit + 500 yerine zarif hata ✓ (Task 2)
- `/api/diagnose` değişmedi ✓ (dokunulmadı)
- Ses hiçbir yere yazılmaz ✓ (Task 2: RAM-only, Task 4 step 4c ağ izi)
- Mobil çalışır ✓ (Task 4 step 4d)
