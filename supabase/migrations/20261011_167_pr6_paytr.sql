-- YK #167 PR-6 · 11 Eki 2026 · PayTR ödeme bağlantısı
-- Tolga (11 Eki 07:5x): "ödemeyi bağlayalım" · kargo sabit 150 TL (11 Eki 08:5x).
--
-- Canlı şema (11 Eki 09:0x okundu): `siparisler` 10 kolon — id, siparis_no, urunler, tutar,
-- alici_ad, alici_tel, alici_adres, odeme_durumu (varsayılan odeme_bekleniyor),
-- iyzico_payment_id, created_at. CHECK kısıtı yok. 1 kayıt.
--
-- Yalnız kolon EKLER; mevcut kolon/kayıt değişmez. Merge'den ÖNCE SQL Editor'da çalıştırılır
-- (yeni /api/siparis bu kolonlara yazar).
--
-- tutar          : ödenecek toplam (ürünler + kargo), TL — eskisi gibi tamsayı
-- kargo_tl       : siparişe eklenen kargo (pazar ürünü varsa 150, yoksa 0)
-- alici_email    : PayTR zorunlu alanı; yalnız sipariş kaydında ve PayTR'de
-- odeme_saglayici: 'paytr' | null (ödeme yakında akışı)
-- odeme_oid      : PayTR'ye giden son merchant_oid (ilk 32 karakter = sipariş id'si, tiresiz)
-- odeme_toplam_kurus / odeme_tipi / odeme_test / odeme_tarihi / odeme_hata : bildirimden
-- sozlesme_onay_at / sozlesme_onay_ip : ön bilgilendirme + mesafeli satış onayı (PR #280 notu)

alter table public.siparisler
  add column if not exists kargo_tl            integer not null default 0,
  add column if not exists alici_email         text,
  add column if not exists odeme_saglayici     text,
  add column if not exists odeme_oid           text,
  add column if not exists odeme_toplam_kurus  integer,
  add column if not exists odeme_tipi          text,
  add column if not exists odeme_test          boolean,
  add column if not exists odeme_tarihi        timestamptz,
  add column if not exists odeme_hata          text,
  add column if not exists sozlesme_onay_at    timestamptz,
  add column if not exists sozlesme_onay_ip    text;

-- Doğrulama (çalıştırınca 21 dönmeli):
-- select count(*) from information_schema.columns
--  where table_schema = 'public' and table_name = 'siparisler';
