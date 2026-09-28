---
title: "LG buzdolabı ekranda OFF yazıyor"
description: "LG buzdolabı ekranında OFF yazıyor ve soğutmuyor mu? LG'ye göre bu bir mağaza teşhir işlevi. 10 saniyelik sıfırlama ve tekrarını önleme adım adım."
slug: "lg-buzdolabi-off-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr).
# Metin, sayfanın gömülü "support-help-article-schema" JSON-LD'sindeki articleBody alanından çıkarıldı (ext.py). Tek sayfalık HTML makale; PDF değil.
# HTML her istekte değişen dinamik parçalar taşıyor → HTML md5'i indirme başına farklı; tekrar üretilebilir kanıt çıkarılan metnin md5'i.
# Web araması YALNIZ sayfanın YERİNİ bulmak için kullanıldı (allowed_domains lg.com); hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  L1) "[LG buzdolabı - hata kodu] Donma veya soğutma arızalandığında ekranda 'OFF' görünüyor" (datePublished 2025-09-25)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392410431/
#      1 sayfa (HTML) · html md5 d360c4dd41be2932ee8c30e9b24d58e7 · metin md5 e13ec35a2d45def3d296877b44e638f6
# Birebir alıntılar (L1):
#   "KAPALI Ekran, ürünün içindeki diğer parçaları çalıştırmadan yalnızca güç kaynağı ve ekran gibi sınırlı özellikleri çalıştıran, ürünü satıştan önce mağazada görüntülemek için özel bir işlevdir."
#   "Kapağın açılması ve yiyeceklerin çıkarılması sırasında veya ekranın ıslak mendil/havlu ile silinmesi sırasında sıcaklık kontrol düğmesine yanlışlıkla basıldığında ve basılı tutulduğunda KAPALI görüntülenebilir."
#   "Donma ve soğutma arızalandığında ekranda 'OFF' görünür."
#   "Elektrik fişini çekin veya devre kesiciyi kapatın ve gücü tekrar açmadan önce 10 saniye bekleyin. ➔ Ardından sıcaklık göstergesinden 'KAPALI' kaybolacak ve normal bir çalışma sıcaklığı görüntülenecektir."
#   "1. Kuru bir havlu kullanarak suyu veya varsa yabancı cisimleri temizlemek için ön ekranı silin. 2. Kilitleme/kilit açma düğmesini çok sık kullanma olasılığınız düşükse, kilitlemek için düğmeyi en az 2 saniye (yaklaşık 3 saniye) basılı tutun.
#    3. Ekranın karşı tarafındaki sağ taraftaki kapıyı açarak yiyecek çıkarırsanız, ekrana sol elinizle basmamaya dikkat edin."
#   "Sorun devam ederse, daha fazla sorun giderme desteği için lütfen LG Electronics Çağrı Merkezi 444 6 543 ile iletişime geçin"
# NOT: LG sayfası "OFF" ile "KAPALI"yı aynı gösterge için dönüşümlü kullanıyor (Türkçe çeviri); yazıda ikisi birlikte verildi.
# BİLEREK YAZILMAYANLAR: tuş kombinasyonuyla çıkış (L1'de yok; LG TR'nin verdiği yol 10 saniyelik enerji kesme) · "demo modu" adı (L1 "mağazada görüntülemek için özel bir işlev" diyor) ·
#   model bazlı düğme yeri (L1 "tüm modeller için" genel kılavuz) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: lg-buzdolabi-off-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kuru bir havlu"]
steps:
  - "Buzdolabının fişini çek ya da bağlı olduğu sigortayı kapat."
  - "10 saniye bekle, sonra enerjiyi geri ver."
  - "Ekranda OFF yerine normal bir çalışma sıcaklığının göründüğünü kontrol et."
  - "Ön ekranı kuru bir havluyla silerek üzerindeki suyu ve yabancı cisimleri temizle."
  - "Paneli kilitlemek için kilit düğmesini yaklaşık 3 saniye basılı tut."
  - "Ekranın karşısındaki sağ kapıyı açarken ekrana sol elinle basmamaya dikkat et."
  - "OFF yine görünürse LG Electronics Çağrı Merkezi 444 6 543'ü ara."
faq:
  - q: "LG buzdolabında ekranda OFF yazması ne demek?"
    a: "LG Türkiye'nin yardım sayfasına göre ekranda OFF (KAPALI) görünmesi, ürünün içindeki diğer parçaları çalıştırmadan yalnız güç kaynağı ve ekran gibi sınırlı özellikleri çalıştıran özel bir işlevdir. Bu işlev, ürünü satıştan önce mağazada göstermek için tasarlanmıştır. Bu yüzden ekran yanarken dondurma ve soğutma çalışmaz."
  - q: "Ben böyle bir şey açmadım, OFF nasıl çıktı?"
    a: "LG'ye göre OFF, kapak açılıp yiyecekler çıkarılırken ya da ekran ıslak mendil veya havluyla silinirken sıcaklık kontrol düğmesine yanlışlıkla basılıp basılı tutulduğunda görüntülenebilir. Yani bilerek açılması gerekmez."
  - q: "OFF'u nasıl kapatırım?"
    a: "LG'nin verdiği yol: elektrik fişini çek ya da sigortayı kapat ve gücü tekrar açmadan önce 10 saniye bekle. Ardından sıcaklık göstergesindeki OFF kaybolur ve normal bir çalışma sıcaklığı görüntülenir."
  - q: "Tekrar olmaması için ne yapabilirim?"
    a: "LG üç öneri veriyor: ön ekranı kuru bir havluyla silerek su ve yabancı cisimleri temizle; kilit düğmesini pek kullanmıyorsan paneli kilitlemek için düğmeyi en az 2 saniye, yaklaşık 3 saniye basılı tut; ekranın karşısındaki sağ kapıyı açarak yiyecek çıkarırken ekrana sol elinle basmamaya dikkat et."
  - q: "Sıfırlamadan sonra da OFF gitmiyorsa ne yapmalıyım?"
    a: "LG'nin sayfasındaki son cümle: sorun devam ederse daha fazla destek için LG Electronics Çağrı Merkezi 444 6 543 ile iletişime geç."
images:
  coverAlt: "Buzdolabı kapağındaki dijital ekranın yakın çekimi; sıcaklık yerine OFF yazısı görünüyor, yanında kuru bir havlu duruyor"
---

Buzdolabının ekranı yanıyor ama içerisi soğumuyor ve sıcaklık yerine **OFF** yazıyor. İlk akla gelen büyük bir arıza olur; LG Türkiye'nin yardım sayfası ise başka bir şey söylüyor. LG'ye göre bu gösterge, **"ürünü satıştan önce mağazada görüntülemek için özel bir işlev"**. Bu işlevde yalnız güç kaynağı ve ekran gibi sınırlı özellikler çalışır, ürünün içindeki diğer parçalar çalışmaz. Çözümü de LG'nin kendi sayfasında: 10 saniyelik bir enerji kesintisi.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** OFF = LG'ye göre mağaza teşhiri için olan özel işlev; ekran çalışır, soğutma çalışmaz. Sıra şu: fişi çek ya da sigortayı kapat → 10 saniye bekle → enerjiyi geri ver → OFF kaybolur, sıcaklık görünür. Tekrarını önlemek için ekranı kuru tut, paneli kilitle. OFF gitmezse → LG Çağrı Merkezi 444 6 543.

## Adım adım: evde denenecekler

**1. Enerjiyi kes.** Buzdolabının elektrik fişini çek ya da bağlı olduğu sigortayı kapat.

**2. 10 saniye bekle.** LG'nin talimatı: gücü tekrar açmadan önce **10 saniye** bekle. Sonra enerjiyi geri ver.

**3. Ekranı kontrol et.** LG'ye göre bu adımdan sonra sıcaklık göstergesindeki OFF kaybolur ve **normal bir çalışma sıcaklığı** görüntülenir.

**4. Ekranı kuru tut.** Ön ekranı **kuru bir havluyla** sil; üzerinde su ya da yabancı cisim varsa temizle. LG, OFF'un ekran ıslak mendil ya da havluyla silinirken düğmeye yanlışlıkla basılı kalınmasıyla da açılabileceğini yazıyor.

**5. Paneli kilitle.** Kilit düğmesini pek kullanmıyorsan paneli kilitle: LG'ye göre bunun için düğmeyi **en az 2 saniye (yaklaşık 3 saniye)** basılı tutman yeterli.

**6. Kapıyı açarken ekrana dikkat et.** Ekranın karşı tarafındaki **sağ kapıyı** açarak yiyecek çıkarıyorsan, LG ekrana **sol elinle basmamaya** dikkat etmeni öneriyor.

**7. OFF sürerse ara.** Bu adımlardan sonra da OFF görünüyorsa LG'nin yönlendirmesi LG Electronics Çağrı Merkezi **444 6 543**.

## OFF neden arıza gibi görünür?

LG'nin sayfasının başlığı bu durumu kullanıcının gördüğü gibi anlatıyor: **dondurma ve soğutma arızalandığında ekranda OFF görünür.** Ekran çalıştığı için cihaz açık görünür, ama içerisi soğumaz. LG'nin açıklaması, bu görüntünün bir mağaza teşhir işlevinden geldiğidir: ürünün içindeki diğer parçalar çalıştırılmaz, yalnız güç kaynağı ve ekran gibi sınırlı özellikler çalışır.

İşlevin kendi kendine nasıl açıldığını da LG yazıyor: kapak açılıp yiyecekler çıkarılırken ya da ekran ıslak mendil veya havluyla silinirken **sıcaklık kontrol düğmesine yanlışlıkla basılıp basılı tutulması**. Yani OFF'u bilerek açmış olman gerekmez.

**Kendin kontrol et:** LG'nin sayfası bu durumu "hata kodu" başlığı altında veriyor ama çözümü tamamen kullanıcı tarafında. Ekranda Er ile başlayan bir kod varsa durum farklıdır; kodların listesi için [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Sınır nerede biter

LG'nin OFF sayfası kullanıcıya enerji sıfırlaması ve tekrarını önleyen üç alışkanlık veriyor. Bunlardan sonra OFF hâlâ görünüyorsa sayfanın son cümlesi LG Electronics Çağrı Merkezi'ni işaret ediyor. Buzdolabının panelini ya da ekran kapağını açmak LG'nin önerdiği adımlar arasında yoktur.

## Servisi aramadan önce kısa not

1. OFF ne zaman çıktı: temizlikten ya da yiyecek yerleştirmeden hemen sonra mı?
2. Fişi çekip 10 saniye bekleme denendi mi?
3. Enerji geri gelince ekranda sıcaklık mı, yine OFF mu göründü?
4. Buzdolabının model numarası ne?

Bu dört satır, çağrı merkezine derdini ilk dakikada anlatmanı sağlar.

Buzdolabının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, gerekirse yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
