-- 29 Eki 2026 · Yakın servis arama kaydı + sayfa-şehir sayacı.
-- ① Yakın servis arama kaydı (Tolga, YK8 iletti: "FE yakın servis aramalarını il/ilçe
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

-- ── Sayfa-şehir sayacı (29 Eki 2026, Tolga: "FE Vercel şehir başlığıyla PII'siz sayfa-şehir sayacı
--    kursun, yakın servis sayacıyla aynı PR; 12 Kas raporuna şehir kırılımı da girsin").
--   · Yalnız GÜNLÜK TOPLAM: gün × ülke × bölge × şehir × sayfa türü → sayı. Ham istek satırı YOK.
--   · Kaynak: Vercel'in x-vercel-ip-country / -country-region / -city başlıkları. IP, UA, çerez,
--     kimlik SAKLANMAZ. Artırma tek sorguda (yarış yok): public.sayfa_sehir_artir().
create table if not exists public.sayfa_sehir_sayac (
  gun     date not null,
  ulke    text not null default '',   -- ISO kodu (TR…); bilinmiyorsa ''
  bolge   text not null default '',   -- Vercel bölge kodu (TR'de il plaka kodu: 34, 06…)
  sehir   text not null default '',   -- Vercel şehir adı (çözülmüş, ör. "Istanbul")
  tur     text not null check (tur in ('blog', 'tamir', 'kilavuz', 'teshis', 'urun', 'diger')),
  sayi    integer not null default 0,
  primary key (gun, ulke, bolge, sehir, tur)
);
alter table public.sayfa_sehir_sayac enable row level security;

create or replace function public.sayfa_sehir_artir(p_gun date, p_ulke text, p_bolge text, p_sehir text, p_tur text)
returns void language sql as $$
  insert into public.sayfa_sehir_sayac (gun, ulke, bolge, sehir, tur, sayi)
  values (p_gun, coalesce(p_ulke, ''), coalesce(p_bolge, ''), coalesce(p_sehir, ''), p_tur, 1)
  on conflict (gun, ulke, bolge, sehir, tur) do update set sayi = public.sayfa_sehir_sayac.sayi + 1;
$$;
revoke all on function public.sayfa_sehir_artir(date, text, text, text, text) from public, anon, authenticated;

-- Kontrol: iki tablo da boş başlar (0 · 0 beklenir).
select (select count(*) from public.servis_arama_log) as arama_satir,
       (select count(*) from public.sayfa_sehir_sayac) as sayac_satir;
