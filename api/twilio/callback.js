// api/twilio/callback.js
// POST /api/twilio/callback
// Twilio Voice webhook — müşteri 850 numarasını çevirince tetiklenir.
// TwiML ile servisin gerçek numarasına köprü kurar.
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import supabase from "../_supabase.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SERVISLER = JSON.parse(
  readFileSync(join(__dirname, "../../src/services-data.json"), "utf8")
);

export default async function handler(req, res) {
  const arayanTel = req.body?.From || req.query?.From;
  if (!arayanTel) {
    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(
      '<?xml version="1.0" encoding="UTF-8"?><Response><Say language="tr-TR">Arayan numara bulunamadı.</Say></Response>'
    );
  }

  // Arayan müşteri telefonu ile onaylanan aktif işi bul
  const { data: is } = await supabase
    .from("is_talepleri")
    .select("servis_id")
    .eq("musteri_tel", arayanTel)
    .eq("durum", "onaylandi")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!is) {
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="tr-TR">Aktif bir iş bulunamadı. Lütfen servisinizle iletişime geçin.</Say>
</Response>`;
    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(twiml);
  }

  const servis = SERVISLER.find(s => s.id === is.servis_id);
  if (!servis?.telefon) {
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="tr-TR">Servis telefonu bulunamadı.</Say>
</Response>`;
    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(twiml);
  }

  // Servisin gerçek numarasına köprüle
  // callerId = Twilio sanal numarası → servis müşterinin gerçek numarasını görmez
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER}">
    <Number>${servis.telefon}</Number>
  </Dial>
</Response>`;

  res.setHeader("Content-Type", "text/xml");
  return res.status(200).send(twiml);
}
