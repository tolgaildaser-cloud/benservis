-- 29 Eki 2026 · Yakın servis arama kaydı (Tolga, YK8 iletti: "FE yakın servis aramalarını il/ilçe
-- bazında (PII'siz) kaydetsin; 2 hafta sonra kapsam dışı talebi raporla").
--   · Her /api/servis/yakin isteği (konum ya da ilçe modu) = 1 satır. İsimle arama (servis paneli) yazılmaz.
--   · PII YOK: IP, user-agent, kimlik, ham koordinat SAKLANMAZ. Konum modunda il/ilçe, en yakın servisin
--     il/ilçesinden çözülür (25 km içinde değilse boş kalır).
--   · kaynak yalnız sayfa türüdür (teshis · blog · tamir · kilavuz · ana · dogrudan · diger), slug değil.
--   · RLS açık, politika yok → yalnız service key (api/) yazar ve okur.
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. Tekrar çalıştırılabilir.

create table if not exists public.servis_arama_log (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  mod         text not null check (mod in ('konum', 'ilce')),
  il          text,            -- il slug'ı (istanbul, bursa…); çözülemediyse null
  ilce        text,            -- ilçe adı (dizindeki yazımla); çözülemediyse null
  cihaz       text,            -- teşhis cihaz adı; ana sayfadan geldiyse null
  kaynak      text not null default 'diger',
  kapsamda    boolean not null default false,  -- il KAPSAM_ILLER'de VE dizinde o ilçede servis var
  sonuc       integer not null default 0       -- kullanıcıya dönen servis sayısı
);

alter table public.servis_arama_log enable row level security;

create index if not exists servis_arama_log_tarih_idx on public.servis_arama_log (created_at desc);
create index if not exists servis_arama_log_il_ilce_idx on public.servis_arama_log (il, ilce);

-- Kontrol: tablo boş başlar (0 beklenir).
select count(*) as satir from public.servis_arama_log;
