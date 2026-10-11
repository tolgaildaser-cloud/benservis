-- YK #171 · 11 Eki 2026 · İkinci el sepet kilidi
-- Tolga (11 Eki 12:4x, FE oturumu, birebir): "sepete atan kilitler ve 5 dk içinde check out
-- yapmazsa kilit kalkar, ürün sepette durmaya devam etsin".
--
-- kilit_token : kilitleyen tarayıcının sepet anahtarı (rastgele uuid; kişisel veri değil)
-- kilit_bitis : kilidin bittiği an. Sepete ekleme → şimdi + 5 dk; ödemeye geçiş (sipariş) →
--               şimdi + 30 dk (PayTR ödeme sayfası süresi, api/odeme/paytr.js timeout_limit).
-- İki kolon da hiçbir public cevaba girmez (api/_public-alanlar.js listelerinde yok); detay
-- ucu yalnız "kilitli: true/false" döndürür.
--
-- ⚠️ Bu SQL, kilit PR'ı merge EDİLMEDEN ÖNCE çalıştırılır: yeni kod bu kolonları okur.
alter table public.ilanlar
  add column if not exists kilit_token text,
  add column if not exists kilit_bitis timestamptz;

-- Doğrulama: 35 dönmeli.
-- select count(*) from information_schema.columns where table_schema='public' and table_name='ilanlar';
