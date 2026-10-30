-- 30 Eki 2026 · Sayfada kalma süresi + kaydırma derinliği sayacı (Tolga, YK8 iletti: "siteye gelen ne kadar
-- kalıyor, hemen çıkıyor mu, aradığını buluyor mu?").
--   · Yalnız GÜNLÜK TOPLAM: gün × ülke × bölge × şehir × sayfa türü × süre aralığı × kaydırma aralığı → sayı.
--   · Sayfa kapanırken/gizlenirken tek "final" ping; açılış ping'i (sayfa_sehir_sayac) ayrı kalır, çift sayım yok.
--   · IP, UA, çerez, kimlik SAKLANMAZ; istemci ham süre/yüzde değil yalnız ARALIK yollar.
--   · RLS açık, politika yok; fonksiyon yalnız service key ile çağrılır.
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. Tekrar çalıştırılabilir.

create table if not exists public.sayfa_okuma_sayac (
  gun       date not null,
  ulke      text not null default '',
  bolge     text not null default '',
  sehir     text not null default '',
  tur       text not null check (tur in ('blog', 'tamir', 'kilavuz', 'teshis', 'urun', 'diger')),
  sure      text not null check (sure in ('0-10', '10-60', '60+')),   -- saniye aralığı (görünür süre)
  kaydirma  smallint not null check (kaydirma in (0, 25, 50, 75, 100)), -- ulaşılan en derin %, alt sınıra yuvarlı
  sayi      integer not null default 0,
  primary key (gun, ulke, bolge, sehir, tur, sure, kaydirma)
);
alter table public.sayfa_okuma_sayac enable row level security;

create or replace function public.sayfa_okuma_artir(p_gun date, p_ulke text, p_bolge text, p_sehir text, p_tur text, p_sure text, p_kaydirma integer)
returns void language sql as $$
  insert into public.sayfa_okuma_sayac (gun, ulke, bolge, sehir, tur, sure, kaydirma, sayi)
  values (p_gun, coalesce(p_ulke, ''), coalesce(p_bolge, ''), coalesce(p_sehir, ''), p_tur, p_sure, p_kaydirma::smallint, 1)
  on conflict (gun, ulke, bolge, sehir, tur, sure, kaydirma) do update set sayi = public.sayfa_okuma_sayac.sayi + 1;
$$;
revoke all on function public.sayfa_okuma_artir(date, text, text, text, text, text, integer) from public, anon, authenticated;

-- Kontrol: tablo boş başlar (0 beklenir).
select count(*) as okuma_satir from public.sayfa_okuma_sayac;
