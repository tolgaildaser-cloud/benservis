-- 3 Kas 2026 · YK #203 PR-1 · Web Push aboneliği (teşhis takibi + aylık mevsimsel hatırlatma).
--   · PII YOK: ad, e-posta, telefon, IP, user-agent SAKLANMAZ. Yalnız tarayıcının verdiği push adresi
--     (endpoint) + şifreleme anahtarları, teşhis yapılan cihaz türü ve tarihler.
--   · RLS açık, politika yok → anon okuyamaz/yazamaz; yalnız service key (api/push/abone.js) yazar.
--   · İzin iptalinde satır silinmez, iptal_at dolar (ölçüm: izin iptali sayısı).
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. Tekrar çalıştırılabilir.

create table if not exists public.push_abone (
  id            bigint generated always as identity primary key,
  endpoint      text not null unique,
  p256dh        text not null,
  auth          text not null,
  cihaz         text,                                   -- teşhis cihaz adı (constants.js CIHAZLAR)
  izin_at       timestamptz not null default now(),
  teshis_at     timestamptz,                            -- son teşhis anı: PR-3'ün 3. gün takibi buradan
  son_gonderim  timestamptz,
  ay_gonderim   smallint not null default 0,            -- içinde bulunulan ayda gönderilen (tavan 2, PR-3)
  iptal_at      timestamptz
);

alter table public.push_abone enable row level security;

create index if not exists push_abone_aktif_idx on public.push_abone (teshis_at) where iptal_at is null;

-- Geri alma (gerekirse): drop table if exists public.push_abone;
