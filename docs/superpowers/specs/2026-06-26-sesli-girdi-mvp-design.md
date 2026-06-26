# Sesli Girdi (STT) MVP — Tasarım (Spec)

- **Tarih:** 2026-06-26
- **Durum:** Onaylandı (tasarım) → spec inceleme bekliyor
- **Kapsam:** Belirti alanına **sesle girdi** (konuş → metin) — mevcut `/api/diagnose` akışını besler
- **Kapsam dışı:** Sohbetli teşhis (katman 2), sesli çıktı/avatar (katman 3), ses saklama/moat (KVKK sonrası)

---

## 1. Bağlam

Benservis kitlesi teknik bilmeyen, mobil ağırlıklı, çoğu yaşça büyük ev kullanıcısı. Belirtiyi **yazmak** sürtünme; **söylemek** doğal ("buzdolabım garip ses çıkarıyor"). Bu MVP, AI-bot vizyonunun ([[project_benservis_aibot]]) en yüksek ROI'li ilk katmanı: yazma sürtünmesini kaldırır + "sesli arıza teşhisi" hikayesini başlatır. Teşhis motoru (`/api/diagnose`, Claude) **değişmez** — ses yalnızca girdi modalitesi.

Mevcut akış (App.jsx): belirti `<textarea>` (+ hızlı belirti chip'leri) → `tesisEt` prompt kurar → `/api/diagnose` → sonuç. Voice bu textarea'yı besler.

## 2. Hedefler / Hedef-olmayanlar

**Hedefler:** (1) yazma sürtünmesini kaldır; (2) tüm cihaz/tarayıcıda (özellikle iOS) tutarlı çalış; (3) yeni KVKK yükü yaratma; (4) hızlı çıkar.
**Hedef-olmayanlar:** sohbetli çok-turlu teşhis, sesli çıktı (TTS)/avatar, arıza-sesi analizi, ses saklama (moat) — hepsi sonraki katmanlar.

## 3. Karar özeti (brainstorming)

- **STT:** OpenAI **Whisper** (`whisper-1`), **sunucu tarafı** (tarayıcı sesi kaydeder → /api/stt → Whisper). Sebep: kitle mobil/iOS; Web Speech iOS'ta zayıf.
- **Ses SAKLANMAZ** (transcribe-and-discard): bellekte → Whisper → at. Kalıcı ses PII yok → KVKK yükü yok (transkript = yazıyla aynı).
- Belirti textarea + `/api/diagnose` dokunulmaz.

## 4. Mimari

### 4a. Endpoint — `api/stt.js`
- **Girdi:** POST, ham ses gövdesi (browser Blob'u doğrudan body; `Content-Type: audio/webm` ya da `audio/mp4`). Vercel Node fonksiyonunda `export const config = { api: { bodyParser: false } }` → ham stream Buffer'a okunur.
- **İşlem:** `openai` SDK → `openai.audio.transcriptions.create({ file: await toFile(buf, "ses.webm"), model: "whisper-1", language: "tr" })`.
- **Çıktı:** `{ text }`. Ses **diske/DB'ye yazılmaz.**
- **Boyut tavanı:** > ~6MB (≈60sn) reddet (`400`) — maliyet/abuse.
- **Koruma:** mevcut `withRateLimit` ile sarılır (ör. **20/saat per-IP** — gerçek kullanıcıya bol, maliyet bombasını keser). Origin kontrolü (diagnose'daki gibi, opsiyonel).
- **Hata:** OpenAI/anahtar hatası → `502/500` + kısa mesaj; istemci yazıya düşer.

### 4b. Frontend — `App.jsx` (belirti alanı)
- Belirti `<textarea>`'sının yanında/altında **🎤 buton**.
- **Durum (`sesDurumu`):** `"bosta" | "kaydediyor" | "isliyor"`.
- **Akış:**
  1. 🎤 (bosta) → `navigator.mediaDevices.getUserMedia({audio:true})` → `MediaRecorder` start. UI: ● kırmızı nabız + "Dinliyorum… durdurmak için dokun". Otomatik durdurma ~60sn.
  2. Tekrar dokun / "Durdur" → `MediaRecorder.stop` → blob. UI: "Yazıya çevriliyor…" (`isliyor`).
  3. Blob → `POST /api/stt` → `{text}` → belirtiye **eklenir** (mevcut metin varsa `". "` ile; üzerine yazmaz) → `bosta`.
- **mimeType:** `MediaRecorder.isTypeSupported` ile seç (Chrome/Android `audio/webm;codecs=opus`, Safari/iOS `audio/mp4`). Whisper ikisini de kabul eder.
- **Güvenli bağlam:** `getUserMedia` HTTPS ister — benservis.com ✓, localhost ✓.

### 4c. Veri akışı
`mic → MediaRecorder → blob → /api/stt → Whisper → text → setBelirti(ekle) → kullanıcı düzenler → "Teşhis et" → /api/diagnose (DEĞİŞMEZ)`

## 5. Hata yönetimi (hepsi yazıya fallback)
- **Mikrofon izni reddedildi / yok:** "Mikrofon izni gerekli — yazarak da anlatabilirsin." + `bosta`; textarea yazılabilir kalır.
- **STT hata / boş transkript:** "Sesi anlayamadım, tekrar dener misin ya da yaz." + `bosta`; mevcut metin korunur.
- **Rate-limit 429:** "Çok fazla deneme, biraz sonra." + yazıya düş.
- Her durumda mevcut chip/metin **korunur**, akış kilitlenmez.

## 6. Maliyet · env · bağımlılık
- **Maliyet:** Whisper $0.006/dk; ~20sn ort. → ~$0.002/kullanım. Rate-limit korumalı.
- **Env:** `OPENAI_API_KEY` (kullanıcı Vercel [Production+Preview] + `.env.local`'e ekler).
- **Bağımlılık:** `openai` (npm).

## 7. KVKK
Ses saklanmadığı için ek yük yok — transkript metni, kullanıcının yazdığı belirtiyle aynı statüde. (İleride **opt-in ses saklama** = moat, ama yalnız KVKK rıza/saklama altyapısı kurulunca — [[project_benservis_security]] KVKK kalemi.)

## 8. Kabul kriterleri
- [ ] 🎤 kaydeder; gerçek bir TR cümlesi ("çamaşır makinem su almıyor, tıkırtı geliyor") doğru transkript olur; textarea'ya eklenir.
- [ ] Mikrofon reddedilince → kibar mesaj + yazıyla devam çalışır.
- [ ] `/api/stt` rate-limit aşımında 429; normal kullanım 200.
- [ ] Mevcut `/api/diagnose` akışı değişmemiş (regresyon yok).
- [ ] Mobil: iOS Safari + Android Chrome'da kayıt + transkript çalışır.
- [ ] Ses hiçbir yere yazılmaz (kod incelemesi + ağ izi: yalnız Whisper'a gider).
- [ ] `vite build` temiz; client bundle ek<~10KB (sadece UI mantığı).

## 9. Test yaklaşımı
- **Endpoint:** örnek bir TR ses dosyası `POST /api/stt` → transkript doğru mu (curl/script). Rate-limit (oversized + burst).
- **Frontend:** preview'da headless mikrofon yok → mic akışı **canlı/gerçek cihazda** elle test (deploy sonrası). Build + izin-yok fallback + UI durumları kontrol edilir.
