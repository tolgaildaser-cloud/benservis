-- YK #183 PR-2 · 24 Eki 2026 · Yerinde servis paneli: koordinatör paneli + IT bulguları (DB tarafı).
-- Tolga (YK8, 24 Eki): "yerinde servis paneli #183 PR-2'ye BUGÜN başla … IT bulgularını da bu PR'da kapat".
-- PR-1 şeması: 20261023_183_yerinde_servis.sql (çalıştırıldı, YK doğruladı).
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. YK doğrular.
--    Tekrar çalıştırılabilir (if not exists / revoke-grant idempotent).

-- ① Arıza açıklaması (Kiwi e-postasındaki ifade) — prototip formundaki alan. Kişisel veri YOK:
--    API telefon/e-posta desenini bu alanda reddeder (src/yerinde-cekirdek.js kisiselVeriVar).
alter table public.yerinde_isler
  add column if not exists aciklama text check (aciklama is null or char_length(aciklama) <= 500);

-- ② IT bulgusu: yerinde_tek_okur politikası satırı açıyordu ama user_id (auth kimliği) de okunuyordu.
--    Sütun düzeyinde yetki: authenticated user_id'yi OKUYAMAZ; kod/ad/yaka/aktif okunur.
--    yerinde_benim_kodum() security definer olduğu için user_id eşlemesi etkilenmez.
revoke select on public.yerinde_teknisyenler from authenticated;
grant select (kod, ad, yaka, aktif, created_at) on public.yerinde_teknisyenler to authenticated;

-- ③ IT bulgusu: yerinde_rol() varsayılan olarak PUBLIC'e execute veriyordu (anon RPC ile çağırabilirdi).
revoke execute on function public.yerinde_rol() from public, anon;
grant execute on function public.yerinde_rol() to authenticated;

-- ─── Doğrulama (beklenen yorumda) ───────────────────────────────────────────────────────────────
-- select column_name from information_schema.columns where table_name = 'yerinde_isler' and column_name = 'aciklama';   -- 1 satır
-- select column_name, privilege_type from information_schema.column_privileges
--   where table_name = 'yerinde_teknisyenler' and grantee = 'authenticated' order by 1;                              -- user_id YOK
-- select has_function_privilege('anon', 'public.yerinde_rol()', 'execute');                                           -- false
-- select has_function_privilege('authenticated', 'public.yerinde_rol()', 'execute');                                  -- true

-- ─── Geri alma ──────────────────────────────────────────────────────────────────────────────────
-- alter table public.yerinde_isler drop column if exists aciklama;
-- grant select on public.yerinde_teknisyenler to authenticated;
-- grant execute on function public.yerinde_rol() to public;
