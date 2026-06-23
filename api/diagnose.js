// Sunucu tarafı proxy — Anthropic API'sine SENİN anahtarınla gider.
// Anahtar yalnız sunucuda (Vercel ortam değişkeni) durur, tarayıcıya asla düşmez.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST" });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY tanımlı değil (Vercel ortam değişkeni)" });
  }
  try {
    const { prompt } = req.body || {};
    if (!prompt) return res.status(400).json({ error: "prompt gerekli" });

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        // Varsayılan: kalite/maliyet dengesi. Daha ucuz istersen: "claude-haiku-4-5-20251001"
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        // temperature 0 → aynı girdi TUTARLI sonuç verir (cihazdan/çağrıdan bağımsız aynı fiyat).
        // Önceden varsayılan (~1.0) olduğundan her çağrı biraz farklı fiyat üretiyordu.
        temperature: 0,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await r.json();
    if (data.error) {
      return res.status(502).json({ error: data.error.message || "Anthropic API hatası" });
    }
    const text = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
