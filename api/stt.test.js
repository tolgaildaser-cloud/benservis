// api/stt.test.js — STT halüsinasyon kapıları.
// 28 Ağu 2026 canlı bulgu (Tolga): 🎤'ye basılıp HİÇ konuşulmadığında Whisper
// sessizlikten "Hoşçakalın" uydurdu ve belirti kutusuna yazdı. Kara liste eksikti.
// Bu dosya iki katmanı da kilitler: ① Whisper metrik kapısı ② genişletilmiş kara liste.
import { describe, it, expect } from "vitest";
import { sesTemiz, konusmaYok, NO_SPEECH_ESIK, LOGPROB_ESIK, SIKISMA_ESIK } from "./stt.js";

// Gerçek konuşmaya benzeyen sağlıklı segment (üç kapının da altında/üstünde güvenli tarafta)
const SAGLAM = { no_speech_prob: 0.02, avg_logprob: -0.25, compression_ratio: 1.4 };

describe("sesTemiz — bilinen halüsinasyon cümleleri boş döner", () => {
  const halusinasyonlar = [
    "Hoşçakalın",
    "Hoşça kalın",
    "Hoşça kal",
    "Hoşçakalın.",
    "hoşçakalın",
    "HOŞÇAKALIN",
    "Görüşürüz",
    "Görüşmek üzere",
    "İyi günler",
    "İyi akşamlar",
    "İyi geceler",
    "Kendinize iyi bakın",
    "Hoş geldiniz",
    "Merhaba",
    "Selamlar",
    "Teşekkürler",
    "Teşekkür ederim",
    "İyi seyirler",
    "Abone olmayı unutmayın",
    "İzlediğiniz için teşekkürler",
    "Altyazı M.K.",
    "Thanks for watching!",
    "Kanalıma abone olun",
  ];
  for (const c of halusinasyonlar) {
    it(`"${c}" → ""`, () => expect(sesTemiz(c)).toBe(""));
  }
  it("boş/undefined güvenli", () => {
    expect(sesTemiz("")).toBe("");
    expect(sesTemiz(undefined)).toBe("");
    expect(sesTemiz("   ")).toBe("");
  });
});

describe("sesTemiz — gerçek belirti cümleleri KORUNUR", () => {
  const belirtiler = [
    "buzdolabı soğutmuyor",
    "Kombi E5 hatası veriyor",
    "çamaşır makinesi su almıyor",
    "Bulaşık makinesi tahliye yapmıyor, altında su birikiyor.",
    "Klima çalışıyor ama soğutmuyor, dış ünite ses yapıyor",
    "Fırın ısınmıyor, alt rezistans devreye girmiyor",
    "Televizyon açılıyor ama görüntü gelmiyor, sadece ses var",
    "Kurutma makinesi ısıtmıyor, çamaşırlar nemli çıkıyor",
  ];
  for (const c of belirtiler) {
    it(`"${c}" korunur`, () => expect(sesTemiz(c)).toBe(c));
  }
  it("'merhaba' kelimesi CÜMLE İÇİNDE geçince belirti elenmez", () => {
    const c = "Merhaba, kombim çalışmıyor ve su basıncı düşük";
    expect(sesTemiz(c)).toBe(c);
  });
  it("baştaki/sondaki boşluk kırpılır, gövde bozulmaz", () => {
    expect(sesTemiz("  buzdolabı soğutmuyor  ")).toBe("buzdolabı soğutmuyor");
  });
});

describe("konusmaYok — Whisper metrik kapısı (birincil)", () => {
  it("eşikler OpenAI referans Whisper varsayılanları", () => {
    expect(NO_SPEECH_ESIK).toBe(0.6);
    expect(LOGPROB_ESIK).toBe(-1.0);
    expect(SIKISMA_ESIK).toBe(2.4);
  });

  it("tek segment, no_speech_prob yüksek → konuşma yok", () => {
    expect(konusmaYok([{ ...SAGLAM, no_speech_prob: 0.93 }])).toBe(true);
  });
  it("tek segment, avg_logprob düşük → konuşma yok", () => {
    expect(konusmaYok([{ ...SAGLAM, avg_logprob: -1.4 }])).toBe(true);
  });
  it("tek segment, compression_ratio yüksek (tekrar eden uydurma) → konuşma yok", () => {
    expect(konusmaYok([{ ...SAGLAM, compression_ratio: 3.1 }])).toBe(true);
  });
  it("sağlam segment → konuşma VAR", () => {
    expect(konusmaYok([SAGLAM])).toBe(false);
  });
  it("eşik sınırında (tam eşik değeri) elenmez — yalnız aşınca eler", () => {
    expect(konusmaYok([{ no_speech_prob: 0.6, avg_logprob: -1.0, compression_ratio: 2.4 }])).toBe(false);
  });

  it("TÜM segmentler takılıyorsa → konuşma yok", () => {
    expect(konusmaYok([
      { ...SAGLAM, no_speech_prob: 0.88 },
      { ...SAGLAM, avg_logprob: -2.2 },
      { ...SAGLAM, compression_ratio: 4.0 },
    ])).toBe(true);
  });
  it("BİR segment bile sağlamsa → konuşma VAR (gerçek belirti kesilmez)", () => {
    expect(konusmaYok([{ ...SAGLAM, no_speech_prob: 0.95 }, SAGLAM])).toBe(false);
  });

  it("segment yoksa → karar YOK (null) → kara listeye düşülür", () => {
    expect(konusmaYok(undefined)).toBe(null);
    expect(konusmaYok([])).toBe(null);
    expect(konusmaYok(null)).toBe(null);
    expect(konusmaYok("segments değil")).toBe(null);
  });
  it("metrik alanları eksikse → karar YOK (sessizce kabul etme)", () => {
    expect(konusmaYok([{ text: "Hoşçakalın", start: 0, end: 3 }])).toBe(null);
    expect(konusmaYok([SAGLAM, { text: "alansız" }])).toBe(null);
    expect(konusmaYok([null])).toBe(null);
  });
  it("alanlar sayı değilse (string/NaN) o alan yok sayılır", () => {
    expect(konusmaYok([{ no_speech_prob: 0.9, avg_logprob: null, compression_ratio: undefined }])).toBe(true);
    expect(konusmaYok([{ no_speech_prob: "abc", avg_logprob: "x", compression_ratio: "y" }])).toBe(null);
  });
});

describe("28 Ağu canlı vakası — sessiz mikrofon", () => {
  it("Whisper 'Hoşçakalın' uydursa bile metrik kapısı önce keser", () => {
    const segments = [{ text: " Hoşçakalın.", no_speech_prob: 0.91, avg_logprob: -1.2, compression_ratio: 0.7 }];
    expect(konusmaYok(segments)).toBe(true);
  });
  it("metrikler gelmese bile kara liste yakalar (ikinci katman)", () => {
    expect(konusmaYok(undefined)).toBe(null);
    expect(sesTemiz("Hoşçakalın.")).toBe("");
  });
});
