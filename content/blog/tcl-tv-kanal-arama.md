---
title: "TCL TV kanal arama: otomatik tarama ve kanal düzenleme"
description: "TCL TV kanal arama nasıl yapılır? Kılavuza göre Kanal taraması menüsü, ülke seçimi, anten, kablo ve uydu seçimi, aramayı başlatma, kanal düzenleme."
slug: "tcl-tv-kanal-arama"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları, paket P34 (#182: satırdaki beş markadan en güçlü tek konu = TCL, belge bulunan tek marka). Slug origin/main'de yok (ls-tree). Main'de TCL televizyon yazısı yok (yalnız tcl-klima-*); en yakın: sharp-tv-kanal-ayarlama, sunny-tv-kanal-frekans-ayarlama.
# Belgeler (#88): TCL Türkiye kullanım kılavuzları, curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf. pdftotext; sayfa = PDF sayfası.
#  (A) 43L5A Kullanım Kılavuzu, 24 s., md5 3ed513d7d3551e9d6a973e837e62bc95 — https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/tv/43L5A_Kullanim_Kilavuzu.pdf (s.7, 11)
#  (B) S65A (43/32) kılavuzu, 32 s., md5 76c2c188265e2a8fce369331d952256b — https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/tv/S65A-43_32.pdf (s.11; çapraz kontrol)
# BİLEREK YAZILMAYANLAR: Onvo, Regal, Hi-Level ve Toshiba (resmî kılavuz 2 aramada bulunamadı) · Türksat frekans/transponder değerleri (belgede yok) · kanallar silindi (kılavuzda tanımlı değil) · CAM/ortak arayüz ayrıntısı · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Anten, kablo ya da uydu alıcısından gelen koaksiyel kablo"]
steps:
  - "Antenin ya da kablo kutusunun koaksiyel kablosunu Anten ve Kablo girişine, uydu alıcısının kablosunu Uydu girişine tak."
  - "Televizyon açıkken kumandanın menü tuşuna basıp Kanal, Kanal taraması yolunu aç."
  - "Ülke ya da bölge satırında şifreni girip ülkeni seçerek onayla."
  - "Otomatik arama satırını seçip OK ile içine gir."
  - "Kanal seçici modu satırından Kablo, Anten ya da Uydu'yu seç."
  - "Diğer seçenekleri ayarla, Ara satırına inip OK ile taramayı başlat ve bitmesini bekle."
  - "Kanal düzenleyiciyi açıp istemediğin kanalları gizle, düzenle ya da sil."
faq:
  - q: "TCL televizyonda kanal arama nereden yapılır?"
    a: "TCL kılavuzuna göre televizyon modundayken kumandanın menü tuşuna basıp Kanal, Kanal taraması yolunu açarsın. Orada ülke ya da bölgeyi seçer, Otomatik arama'ya girer ve aramayı başlatırsın."
  - q: "TCL televizyonda uydu seçeneği neden yok?"
    a: "Kılavuz Uydu seçeneğinin yalnızca seçili modellerde bulunduğunu yazıyor. Modelinde yoksa uydu yayınını televizyonun Uydu giriş soketine bağlanan bir uydu alıcısından izlersin."
  - q: "Ülke seçerken şifre soruyor, ne girmeliyim?"
    a: "Kılavuza göre varsayılan şifre 1234'tür. Şifreyi Sistem menüsündeki TV Kilidi bölümünden değiştirdiysen kendi şifreni girersin."
  - q: "Arama sadece analog kanal buldu, bu arıza mı?"
    a: "Kılavuz, kanal aramasının yalnızca analog kanalları getirmesinin kötü yayın şartlarından kaynaklanabileceğini ve bunun üretici garantisi kapsamına girmediğini yazıyor. Önce anten ve kablonun yerine tam oturduğunu kontrol et."
images:
  coverAlt: "Oturma odasında duvardaki televizyonun ekranında kanal tarama menüsü açık"
  steps:
    - "Televizyonun arkasındaki anten girişine koaksiyel kabloyu takan beyaz eldivenli sade siluet el"
    - "Kumandada menü tuşuna basan beyaz eldivenli sade siluet el, karşıda ekranda ayar menüsü"
    - "Ekrandaki ülke listesinden bir satırı seçen beyaz eldivenli sade siluet el"
    - "Kumandada OK tuşuna basan beyaz eldivenli sade siluet el, ekranda otomatik arama satırı seçili"
    - "Ekrandaki kanal seçici listesinde bir satırı seçen beyaz eldivenli sade siluet el"
    - "Ekranda ilerleme çubuğu dolarken kumandayı tutan beyaz eldivenli sade siluet el"
    - "Kanal listesinde bir kanalı seçip silme tuşuna basan beyaz eldivenli sade siluet el"
---

TCL televizyonu yeni kurdun, taşındın ya da kanallar eksik geliyor. Kanal aramanın yolu TCL'nin kendi kullanım kılavuzunda anlatılıyor. Bu yazı TCL Türkiye'nin 43L5A ve S65A kılavuzlarına dayanıyor; ikisinde de kanal taraması aynı yoldan yapılıyor. Menü adları televizyonun dil ayarına göre Türkçe ya da İngilizce görünebilir, bu yüzden her ikisini de yazdık. Modelinde menü farklıysa kendi kılavuzunu tcl.com adresinden model numarasıyla bul.

> ⚠️ **Önce şunu bil:** Kılavuz, televizyonu yalnız bir AC kaynağına bağlamanı ve fiş kablodan ayrılmışsa hiçbir koşulda prize takmamanı yazıyor. Çanak yönlendirme ve anten tesisatı uzman işidir, bu yazıda anlatılmıyor. Burada yalnız televizyonun menüsü var.

## Adım adım: TCL TV'de kanal arama

**1. Kabloyu doğru girişe tak.** Kılavuza göre televizyonun arkasındaki ANTEN / KABLO GİRİŞ soketine bir dış anten bağlanır. Sinyali kablonuzdan ya da kablo kutunuzdan alacaksan aynı Anten / Kablo girişine koaksiyel kablo takarsın. Sinyali uydu alıcınızdan alacaksan koaksiyel kabloyu Uydu giriş soketine takarsın. Bu soketin yeri modele göre değişir.

**2. Kanal taraması menüsünü aç.** Televizyon modundayken kumandanın menü tuşuna bas ve Channel [Kanal], Channel scan [Kanal taraması] satırını seç. Girmek için OK ya da sağ düğmeye bas. Kılavuz bu işlemi iki durumda öneriyor: TV modunda hiç kanal olmadığı uyarısı geliyorsa ya da kanallarını güncellemek istiyorsan.

**3. Ülke ya da bölgeyi seç.** Televizyon kanalları bulunduğun ülkeye ya da bölgeye göre kurar ve düzenler. Country/Region [Ülke/Bölge] satırına girince şifre sorulur. Varsayılan şifre 1234'tür. System [Sistem] menüsündeki TV Lock [TV Kilidi] bölümünde şifreyi değiştirdiysen kendi şifreni gir. Sonra yukarı ve aşağı düğmeyle ülkeni seçip OK ile onayla.

**4. Otomatik aramayı seç.** Yukarı ve aşağı düğmeyle Automatic search [Otomatik arama] satırına gel, OK ya da sağ düğmeyle içine gir.

**5. Yayın türünü seç.** Tuner mode [Kanal seçici modu] satırına gel. Sol ve sağ düğmeyle Cable [Kablo], Antenna [Anten] ya da Satellite [Uydu] seçeneklerinden birini seç. Kılavuz Satellite [Uydu] seçeneğinin yalnızca seçili modellerde bulunduğunu yazıyor. Seçeneği göremiyorsan modelin bu seçeneği sunmuyor olabilir.

**6. Taramayı başlat.** Gerekirse diğer seçenekleri yukarı ve aşağı düğmeyle seçip sol ve sağ düğmeyle ayarla. Ayarlar bitince aşağı düğmeyle Search [Ara] satırına in ve OK'e bas. Kılavuza göre kanal araması birkaç dakika sürebilir. Otomatik aramadan sonra kanallar önceden belirlenmiş bir sırayla dizilir.

**7. Kanal düzenleyiciyi aç.** Gizlemek, düzenlemek ya da silmek istediğin kanal varsa menü tuşuna bas, Channel [Kanal], Channel organizer [Kanal düzenleyici] satırını seç ve OK'e bas. Kılavuz bu menünün kanalları gizleme, düzenleme ve silme için olduğunu söylüyor.

## İki kılavuz arasındaki küçük fark

İki kılavuzda tarama adımları aynı, yalnız şifrenin yeri farklı yazılmış. 43L5A kılavuzu şifrenin değiştirildiği yeri System [Sistem] menüsündeki TV Lock [TV Kilidi] olarak veriyor. S65A kılavuzu aynı yeri System [Sistem] menüsündeki Lock [Kilit] olarak yazıyor. Şifreyi daha önce değiştirdiysen menüde hangi adı görüyorsan oraya bak.

## Şifreli kanallar için CAM

Şifreli dijital kanallar, Koşullu Erişim Modülü (CAM) ve TV servis operatörünün verdiği kartla çözülür. Kılavuza göre CAM'i takmadan önce televizyonu kapatman gerekiyor; yanlış yerleştirilen CAM hem modüle hem televizyona zarar verebilir. Modülü ortak arayüz yuvasına nazikçe yerleştir, gittiği yere kadar it, televizyonu aç ve ortak arayüzün etkinleşmesini bekle. Bu birkaç dakika sürebilir. Modülü yuvadan çıkarma, çıkarırsan dijital hizmetler devre dışı kalır. Hizmetler ve koşullar için dijital TV hizmet sağlayıcınla görüş. Bu özellik bazı modellerde bulunmuyor.

## Arama yalnız analog kanal buldu

Kılavuz, kanal aramasının yalnızca analog kanalları getirmesinin kötü yayın şartlarından kaynaklanabileceğini yazıyor. Aynı not bunun üretici garantisi kapsamına girmediğini de söylüyor. Önce koaksiyel kablonun hem televizyona hem prize ya da kutuya tam oturduğunu kontrol et, sonra taramayı bir kez daha çalıştır.

## Ne zaman servis

- Kablo sağlam, tarama tekrarlanmış ama hiç kanal bulunmuyorsa
- Aynı kablo başka bir cihazda kanal veriyor ama TCL'de vermiyorsa
- Menü açılmıyor ya da tarama yarıda kesiliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menüdeki tarama, düzenleme ve silme sende; çanak ayarı, anten tesisatı ve televizyonun içi uzman ya da yetkili servistir.

## İlgili yazılar

Kanal ayarını başka bir markada görmek istersen [Sharp TV kanal ayarlama](/blog/sharp-tv-kanal-ayarlama/) yazısına bak. Görüntü hiç gelmiyorsa [televizyon görüntü gelmiyor](/blog/televizyon-goruntu-gelmiyor/), HDMI kaynağında sinyal yoksa [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) sayfasına geç.

## Servisi aramadan önce kısa özet

1. Bağlantı anten mi, kablo mu, uydu alıcısı mı?
2. Tarama sonucunda hangi kanallar geldi, hangileri eksik?
3. Aynı kablo başka cihazda çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
