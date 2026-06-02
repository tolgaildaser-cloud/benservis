# Arızam Ne? — Yayın Paketi (Vercel)

Bu, Faz 1 uygulamasının **kendi başına çalışan** sürümü. Claude hesabı GEREKMEZ —
teşhis senin Anthropic API anahtarınla, sunucu tarafında çalışır. Kullanıcı sadece
normal bir web adresi açar.

## Yapı
```
arizam-ne-app/
├─ api/diagnose.js     → sunucu proxy (anahtar burada, sunucuda kalır)
├─ src/App.jsx         → uygulama (artık /api/diagnose'a soruyor)
├─ src/main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## Adım adım yayın (senin yapacakların)

**1) Anthropic API anahtarı al**
- https://console.anthropic.com → API Keys → yeni anahtar oluştur.
- Faturalama/limit ayarla (test için düşük bir aylık harcama limiti koy, sürpriz olmasın).

**2) Vercel hesabı aç ve projeyi yükle**  
İki yoldan biri:

*Kolay yol (CLI):*
```
npm i -g vercel
cd arizam-ne-app
npm install
vercel            # ilk seferde hesap/proje sorularını yanıtla
```

*Ya da GitHub üzerinden:* Bu klasörü bir GitHub deposuna yükle, vercel.com'da
"New Project" → repoyu seç → Deploy.

**3) API anahtarını ortam değişkeni olarak ekle (KRİTİK)**
- Vercel proje panelinde: **Settings → Environment Variables**
- Ekle:  `ANTHROPIC_API_KEY` = *(senin anahtarın)*
- Kaydet, sonra **Redeploy** et.
- ⚠️ Anahtarı ASLA kodun içine ya da frontend'e yazma. Sadece bu değişkende dursun.

**4) Yayınla ve paylaş**
- Vercel sana `https://...vercel.app` adresi verir.
- Bu linki herkese gönderebilirsin — Claude hesabı gerekmez.

## Yerelde test (isteğe bağlı)
`npm run dev` sadece arayüzü açar; `/api` fonksiyonunu çalıştırmaz.
Fonksiyonu da yerelde denemek için:
```
vercel dev
```
(önce `.env` dosyasına `ANTHROPIC_API_KEY=...` koy — `.gitignore`'da, depoya gitmez.)

## Notlar
- **Model**: `api/diagnose.js` içinde `claude-sonnet-4-6`. Daha ucuz istersen
  `claude-haiku-4-5-20251001` yap.
- **Maliyet**: Her teşhis = 1 API çağrısı, birkaç kuruş. Konsoldan harcama limiti koyabilirsin.
- **Güvenlik**: Anahtar yalnız sunucuda; tarayıcı onu hiç görmez.
