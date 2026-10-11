-- YK #171 İE-1 · 11 Eki 2026 · İkinci el vitrini (DOD tipi) — veri modeli + 2 demo ilan
-- Tolga (11 Eki 11:3x): "satıcı şu an sadece benservis … dod'daki gibi 3 çeşit olacak, marka
-- garantisi devam eden ürünler, benservis garantili ürünler ve garantisiz ürünler … teslimi ayır,
-- depo teslim … nakliye ilave ve montaj ilave, ilk ürünleri demo olarak aç, 1 grundig buzdolabı
-- gri çift kapılı, 1 thomson 75' tv" · (11:4x) "DPP hiç bir zaman gösterilmeyecek önde".
-- Tarif: benservis-icerik/pazar/IKINCI-EL-HEDEF-GORUNUM.md bölüm 7.
--
-- Canlı şema (11 Eki 11:4x okundu): `ilanlar` 20 kolon; satici_tel NOT NULL, seri_no boş
-- olabilir ama CHECK (tur='parca' OR seri_no IS NOT NULL); durum CHECK (aktif|satildi|silindi|demo);
-- 2 kayıt, ikisi de durum='demo' (Haziran). `saticilar`da tek 'benservis' kaydı var.
--
-- ⛔ DPP YALNIZ ARKADA: ikinci el ilan cihaza `cihaz_id` ile bağlanır, `ilanlar.seri_no` BOŞ
--    kalır. Bugünkü `/api/ilan/:id` seri_no doluysa DPP'yi (seri no dahil) döndürüyor; boş
--    kalınca hiçbir şey sızmaz. `cihaz_id` ILAN_PUBLIC_ALANLAR'a GİRMEZ (test kilidi:
--    src/ikinci-el-veri.test.js). Ön yüzde seri no yalnız maskeli (İE-3, API'de hesaplanır).
--
-- ⏸️ Yeni 2 demo ilan `durum='pasif'` açılır: bugünkü /ikinci-el ekranı yeni alanları
--    göstermiyor. İE-2 (DOD tipi vitrin) merge olurken altta yazan tek satırla `aktif` olur.
--
-- Yalnız EKLER + Haziran demolarını `pasif` yapar; kayıt silinmez. Merge'den ÖNCE ya da
-- hemen sonra SQL Editor'da çalıştırılabilir (bu PR'da kod bu kolonları okumuyor).

-- ① durum: 'pasif' ─────────────────────────────────────────────────────
alter table public.ilanlar drop constraint if exists ilanlar_durum_check;
alter table public.ilanlar add constraint ilanlar_durum_check
  check (durum in ('aktif', 'satildi', 'silindi', 'demo', 'pasif'));

-- ② yeni kolonlar ──────────────────────────────────────────────────────
create sequence if not exists public.ilan_dosya_no_seq start 1;

alter table public.ilanlar
  add column if not exists dosya_no            text unique
    default ('BS-2E-' || lpad(nextval('public.ilan_dosya_no_seq')::text, 6, '0')),
  add column if not exists cihaz_id            uuid references public.cihazlar(id) on delete restrict,
  add column if not exists satici_id           uuid references public.saticilar(id) on delete restrict,
  add column if not exists garanti_sinifi      text not null default 'yok',
  add column if not exists garanti_bitis       date,
  add column if not exists garanti_ay          integer,
  add column if not exists uretim_yili         integer,
  add column if not exists kullanim_suresi_ay  integer,
  add column if not exists kontrol_listesi     jsonb not null default '[]'::jsonb,
  add column if not exists ic_fotograflar      text[] not null default '{}',
  add column if not exists teslim_secenekleri  text[] not null default '{depo}',
  add column if not exists stok                integer not null default 1,
  add column if not exists demo                boolean not null default false;

alter table public.ilanlar add constraint ilanlar_dosya_no_bicim_check
  check (dosya_no ~ '^BS-2E-[0-9]{6}$');
alter table public.ilanlar add constraint ilanlar_garanti_sinifi_check
  check (garanti_sinifi in ('marka', 'benservis', 'yok'));
-- marka → bitiş tarihi şart · benservis → ay sayısı şart · yok → ikisi de boş
alter table public.ilanlar add constraint ilanlar_garanti_alanlari_check
  check (
    (garanti_sinifi = 'marka'     and garanti_bitis is not null and garanti_ay is null) or
    (garanti_sinifi = 'benservis' and garanti_ay is not null and garanti_ay > 0 and garanti_bitis is null) or
    (garanti_sinifi = 'yok'       and garanti_bitis is null and garanti_ay is null)
  );
alter table public.ilanlar add constraint ilanlar_teslim_check
  check (teslim_secenekleri <@ array['depo', 'nakliye', 'montaj']::text[]
         and 'depo' = any (teslim_secenekleri));
alter table public.ilanlar add constraint ilanlar_stok_check check (stok >= 0);
alter table public.ilanlar add constraint ilanlar_kontrol_listesi_check
  check (jsonb_typeof(kontrol_listesi) = 'array');

-- Cihaz ilanında DPP bağı: seri_no (eski akış) ya da cihaz_id (ikinci el, #171).
alter table public.ilanlar drop constraint if exists ilanlar_seri_no_cihaz_check;
alter table public.ilanlar add constraint ilanlar_seri_no_cihaz_check
  check (tur = 'parca' or seri_no is not null or cihaz_id is not null);

-- Benservis ilanında telefon satıcı kaydından gelir (public cevaba hiç girmez).
alter table public.ilanlar alter column satici_tel drop not null;
alter table public.ilanlar add constraint ilanlar_satici_iletisim_check
  check (satici_tel is not null or satici_id is not null);

create index if not exists ilanlar_ikinci_el_idx on public.ilanlar (durum, demo, created_at desc)
  where cihaz_id is not null;

-- ③ Haziran demoları → pasif ───────────────────────────────────────────
update public.ilanlar set durum = 'pasif' where durum = 'demo' and created_at < '2026-07-01';

-- ④ 2 demo ürün (Tolga 11:3x) ──────────────────────────────────────────
-- Garanti: ikisi de garantisiz, 'yok' (Tolga 11 Eki 11:3x: "ikisi de garantisiz açılsın").
-- Teslim: nakliye/montaj tutarı yok, "ayrıca hesaplanır" (Tolga 11:4x); tutar kolonu açılmaz.
-- ❓ Fiyat, üretim yılı, kullanım süresi Tolga'dan gelmedi: fiyat yer tutucu (sonu 9).
--    Aktif etmeden önce Tolga düzeltir.
-- Seri no'lar DEMO: gerçek cihaz değil; ön yüzde yalnız son 4 hane görünür.
insert into public.cihazlar (seri_no, kategori, marka, model, renk, mevcut_durum, kaynak)
select v.seri_no, v.kategori, v.marka, v.model, v.renk, 'çalışıyor', 'ikinci-el-demo'
from (values
  ('DEMO2E-GRN-000001', 'Buzdolabı', 'Grundig', 'Çift kapılı No Frost', 'Gri'),
  ('DEMO2E-THM-000002', 'Televizyon', 'Thomson', '75" Smart TV',         'Siyah')
) as v(seri_no, kategori, marka, model, renk)
on conflict (seri_no) do nothing;

-- Örnek değişen parça kaydı (hedef görünüm bölüm 7: "buzdolabı kompresör değişimi tarihli").
insert into public.tamir_kayitlari (cihaz_id, tarih, yapilan_islem, degistirilen_parcalar, servis_adi, servis_turu)
select c.id, date '2026-09-15', 'Kompresör değişimi (demo kayıt)', array['Kompresör'], 'Benservis', 'benservis'
from public.cihazlar c
where c.seri_no = 'DEMO2E-GRN-000001'
  and not exists (select 1 from public.tamir_kayitlari t where t.cihaz_id = c.id);

insert into public.ilanlar (
  tur, kategori, cihaz_turu, baslik, aciklama, fiyat, konum, satici_ad, satici_id, cihaz_id,
  garanti_sinifi, kontrol_listesi, teslim_secenekleri, stok, demo, durum
)
select 'cihaz', v.kategori, v.cihaz_turu, v.baslik, v.aciklama, v.fiyat, 'İstanbul',
       'Benservis', s.id, c.id, 'yok', v.kontrol::jsonb, '{depo,nakliye,montaj}', 1, true, 'pasif'
from (values
  ('DEMO2E-GRN-000001', 'buzdolabi', 'buzdolabi',
   'Grundig çift kapılı buzdolabı, gri',
   'Demo ilan. Benservis kontrolünden geçti; kompresörü değişti.',
   18999,
   '[{"madde":"Soğutma","sonuc":"uygun"},{"madde":"Kompresör sesi","sonuc":"uygun"},{"madde":"Kapı contaları","sonuc":"uygun"},{"madde":"Kapı menteşeleri","sonuc":"uygun"},{"madde":"Raflar ve sebzelik","sonuc":"uygun"},{"madde":"Dış kasa","sonuc":"uygun","not":"hafif çizik"}]'),
  ('DEMO2E-THM-000002', 'televizyon', 'televizyon',
   'Thomson 75" televizyon',
   'Demo ilan. Benservis kontrolünden geçti.',
   24999,
   '[{"madde":"Panel (ölü piksel)","sonuc":"uygun"},{"madde":"Arka aydınlatma","sonuc":"uygun"},{"madde":"Ses","sonuc":"uygun"},{"madde":"Kumanda","sonuc":"uygun"},{"madde":"HDMI ve USB girişleri","sonuc":"uygun"},{"madde":"Wi-Fi","sonuc":"uygun"}]')
) as v(seri_no, kategori, cihaz_turu, baslik, aciklama, fiyat, kontrol)
join public.cihazlar c on c.seri_no = v.seri_no
cross join (select id from public.saticilar where tur = 'benservis') s
where not exists (select 1 from public.ilanlar i where i.cihaz_id = c.id);

-- Doğrulama (çalıştırınca):
-- select count(*) from information_schema.columns where table_schema='public' and table_name='ilanlar';  -- 33
-- select dosya_no, baslik, durum, demo, garanti_sinifi, seri_no from public.ilanlar order by created_at;
--   → 2 Haziran kaydı 'pasif' · 2 yeni demo 'pasif', demo=true, seri_no boş, dosya_no BS-2E-000003/4
--
-- İE-2 merge olurken (yeni vitrin canlıda) demoları açmak için:
-- update public.ilanlar set durum = 'aktif' where demo = true and cihaz_id is not null and durum = 'pasif';
