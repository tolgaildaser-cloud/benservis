---
title: "Beko bulaşık makinesi su boşaltmıyor"
description: "Beko bulaşık makinesinde program sonunda su kalıyorsa Beko'nun sırası: programı iptal edip tahliye, filtre temizliği, dipteki kir ve tahliye hortumu."
slug: "beko-bulasik-makinesi-su-bosaltmiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (A) BM 5005  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4  (sayfa atıfları bu belgeye göre)
#  (B) BM 4004  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b  (sorun giderme tablosu ve bakım bölümü A ile aynı sayfalarda)
#  (C) 3938 IL  http://download.beko.com/Download.UsageManualsBeko/34758_1728766176_AA_BEKO_3938-IL.pdf  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975  (s.28 aynı "Makinenin içinde su kalmışsa" paragrafı)
# "Program bittikten sonra bulaşık makinesinde su kalıyor." (A s.33, B s.33 — Sorun giderme):
#   "Filtreler tıkanmıştır. >>> Filtre sisteminin temiz olup olmadığını kontrol edin. Filtre sistemini "Temizlik ve bakım" bölümünde gösterildiği şekilde düzenli aralıklarla temizleyin."
#   "Tahliye hortumu tıkanmıştır/bloke olmuştur. >>> Tahliye hortumunu kontrol edin. Gerekirse çıkarıp tıkanıklığı giderin ve montaj talimatında belirtildiği gibi tekrar takın."
# Bakım (A s.26, C s.28): "Makinenin içinde su kalmışsa, "Programın iptal edilmesi" bölümündeki işlemleri uygulayarak makinedeki suyun tahliye edilmesini sağlayın.
#   Su tahliye edilemiyorsa, makinenin dip kısmında birikerek su yolunu tıkamış kir parçalarını temizleyin."
# Diğer: A s.24 program iptali (Başla/Bekle/İptal 3 sn; gösterge yanıp sönünce bırak; makine birkaç dakika iptal işlemlerini yapar) · A s.26 "Makineyi temizlemeden önce fişini çekin ve musluğu kapayın." + filtre 1-6 (A s.26-27)
#   · A s.9 "Montaj ya da temizlik vb. işlemlerinin ardından ürünün yerine yerleştirilmesi sırasında su giriş ve tahliye hortumlarının katlanmaması, sıkışmaması ve kırılmamasına dikkat edin."
#   · A s.9 "Kurulum ve elektrik bağlantıları Yetkili Servis tarafından yapılmalıdır." · A s.10 su boşaltma hortumu atık su giderine ya da lavabo giderine bağlanır, ayrıntı montaj talimatında
#   · A s.25 P1 taşma uyarısı ("P1 ikonu sönmüyorsa hata kalıcıdır ve servis çağırılması gerekir.") · A s.4 kurulum ve tamir yetkili servis.
# BİLEREK YAZILMAYANLAR: pompa/pompa kapağı/çek valf teşhisi ve sökümü (belgede yok; alet kuralı) · tahliye hortumunu kullanıcının söküp temizlemesi numaralı adım olarak (makineyi yerinden çekme/kelepçe gerektirebilir;
#   gövdede Beko'nun cümlesi aynen verildi, kurulum yetkili servise ait notuyla) · bu belirti için bir Beko hata kodu (Beko'nun yayımladığı listede tahliye kodu yok) · sifon/gider tıkanıklığı teşhisi (belgede yok).
# Alıntı denetim tablosu: beko-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Havlu"]
steps:
  - "Başla/Bekle/İptal tuşunu 3 saniye basılı tutarak programı iptal et ve makinenin suyu tahliye etmesini bekle."
  - "Makineyi kapat, fişini çek ve musluğu kapat."
  - "Taban filtre grubunu saat yönünün tersine çevirip çıkar, metal/plastik filtreyi çekerek al."
  - "Su hâlâ duruyorsa makinenin dibinde birikip su yolunu tıkayan kir parçalarını temizle."
  - "Üç filtreyi de musluk altında fırçayla temizle."
  - "Filtreleri doğru yerine tak; kaba filtreyi tık sesi duyana kadar saat yönünde çevir."
  - "Tahliye hortumunu kontrol et; katlanmış, sıkışmış ya da kırılmış olmamalı."
faq:
  - q: "Beko bulaşık makinesinde program bitince neden su kalır?"
    a: "Beko'nun BM 4004 ve BM 5005 kılavuzlarındaki sorun giderme tablosu 'Program bittikten sonra bulaşık makinesinde su kalıyor' başlığında iki sebep sayıyor: filtrelerin tıkanması ve tahliye hortumunun tıkanması ya da bloke olması."
  - q: "Makinenin içinde su kaldı, önce ne yapmalıyım?"
    a: "Beko'nun bakım bölümüne göre makinenin içinde su kalmışsa önce 'Programın iptal edilmesi' bölümündeki işlemler uygulanarak suyun tahliye edilmesi sağlanır: Başla/Bekle/İptal tuşuna 3 saniye basılır ve makine birkaç dakika iptal işlemlerini yapar. Su yine tahliye edilemiyorsa makinenin dip kısmında birikerek su yolunu tıkamış kir parçaları temizlenir."
  - q: "Tahliye hortumunu kendim söküp temizleyebilir miyim?"
    a: "Beko'nun tablosu tahliye hortumu için 'kontrol edin; gerekirse çıkarıp tıkanıklığı giderin ve montaj talimatında belirtildiği gibi tekrar takın' diyor. Aynı kılavuza göre kurulum ve bağlantılar yetkili servis tarafından yapılmalı. Hortumun bağlantısına dokunmak makineyi yerinden çekmeyi gerektiriyorsa ya da montaj talimatın elinde değilse bu işi yetkili servise bırak."
  - q: "Ekranda P1 yanıp sönüyor, su boşaltmayla ilgisi var mı?"
    a: "BM 4004 ve BM 5005 kılavuzlarına göre P1 su taşma uyarısıdır: makine fazla su almışsa ya da bir parçada sızıntı olmuşsa P1 yanıp söner ve makine içerideki suyu atmaya çalışır. Taşma durumu ortadan kalkarsa P1 söner; sönmüyorsa hata kalıcıdır ve Beko'ya göre servis çağırılması gerekir."
images:
  coverAlt: "Kapağı açık bulaşık makinesinin tabanında filtre çevresinde birikmiş bulanık su; alt sepet dışarı çekilmiş, yerde katlanmış bir havlu"
---

Program bitti, kapağı açtın ve makinenin tabanında su duruyor. Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosunda bu durumun kendi başlığı var: **"Program bittikten sonra bulaşık makinesinde su kalıyor."** Beko bu başlık altında iki sebep sayıyor: **tıkanmış filtreler** ve **tıkanmış ya da bloke olmuş tahliye hortumu.** Kılavuzun bakım bölümü de makinede su kaldığında ne yapılacağını sırayla veriyor. Bu yazıda o sırayı adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Programı 3 saniyelik İptal ile sonlandırıp tahliyeyi bekle → fişi çek, musluğu kapat → filtreleri çıkar → dipte su yolunu tıkayan kir varsa temizle → filtreleri fırçala ve doğru tak → tahliye hortumunun katlanmadığına bak. Su yine kalıyorsa ya da P1 sönmüyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Beko'nun bakım bölümüne göre makinenin içinde su kalmışsa önce **"Programın iptal edilmesi"** bölümündeki işlemlerle suyun tahliye edilmesi sağlanır. Yöntem: **Başla/Bekle/İptal** tuşuna **3 saniye** bas, program göstergesi yanıp sönmeye başlayınca bırak. Makine **birkaç dakika** boyunca programın iptali için gereken işlemleri yapar; bitmesini bekle.

**2. Güvenliği al.** Beko'nun bakım kuralı: makineyi temizlemeden önce **fişini çek ve musluğu kapa.** Makineyi kapat, sonra fişi prizden çıkar.

**3. Filtreleri çıkar.** Tablodaki ilk sebep: **filtreler tıkanmıştır.** Makinenin tabanındaki mikro filtre ve kaba filtre grubunu **saat yönünün tersine çevirip çekerek** çıkar, ardından metal/plastik filtreyi çekerek al. Kaba filtreyi, üzerindeki iki dili içeri doğru bastırarak gruptan ayır.

**4. Dipteki kiri temizle.** Beko'nun bakım bölümündeki ikinci adım: iptal sonrası su yine **tahliye edilemiyorsa**, makinenin **dip kısmında birikerek su yolunu tıkamış kir parçalarını** temizle. Fiş çekili ve musluk kapalıyken yap.

**5. Filtreleri temizle.** Üç filtreyi de **musluk altında bir fırça yardımıyla** temizle; aşındırıcı malzeme kullanma. Beko'ya göre filtreler **haftada en az bir kez** temizlenmeli.

**6. Filtreleri doğru tak.** Önce metal/plastik filtreyi yerine tak. Sonra kaba filtreyi mikro filtrenin içine yerleştir, doğru yerleştiğinden emin ol ve **tık sesi duyana kadar saat yönünde** çevir. Beko'nun iki notu var: makine filtresiz kullanılmamalı; filtrelerin doğru takılmaması yıkama etkinliğini azaltır.

**7. Tahliye hortumuna bak.** Tablodaki ikinci sebep: **tahliye hortumu tıkanmıştır/bloke olmuştur.** Beko'nun ilk çözümü **tahliye hortumunu kontrol etmek.** Kılavuzun kurulum bölümüne göre montaj ya da temizlik gibi işlemlerden sonra makine yerine konurken su giriş ve tahliye hortumlarının **katlanmaması, sıkışmaması ve kırılmaması** gerekir. Makine yakın zamanda yerinden oynatıldıysa bunu özellikle kontrol et.

## Hortumun içi tıkalıysa

Beko'nun tablosu tahliye hortumu için şu cümleyi de veriyor: **gerekirse çıkarıp tıkanıklığı giderin ve montaj talimatında belirtildiği gibi tekrar takın.** Aynı kılavuza göre su boşaltma hortumu doğrudan atık su giderine ya da lavabonun giderine bağlanır ve ayrıntısı makineyle verilen **montaj talimatında** yer alır; **kurulum ve bağlantılar yetkili servis** tarafından yapılmalıdır. Hortuma ulaşmak için makineyi yerinden çekmen gerekiyorsa ya da montaj talimatın elinde değilse bu işi yetkili servise bırak.

## Ekranda P1 yanıp sönüyorsa

BM 4004 ve BM 5005 kılavuzlarına göre **P1** su taşma uyarısıdır: makine fazla su almışsa ya da herhangi bir parçada sızıntı olmuşsa P1 yanıp söner, emniyet algoritması çalışır ve makine içerideki suyu atmaya çalışır. Taşma durumu ortadan kalkarsa P1 söner. **P1 sönmüyorsa hata kalıcıdır ve servis çağırılması gerekir.** Beko'nun yayımladığı hata kodları için [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin.

Taban filtresinin ayrıntılı temizliği için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısına, markadan bağımsız anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısına bakabilirsin. Dipte kalan su kokuya da yol açtıysa [Beko bulaşık makinesi kokuyor](/blog/beko-bulasik-makinesi-kokuyor/) yazısı Beko'nun koku satırını anlatıyor.

## Ne zaman servis

Program iptal edildi, filtreler ve dipteki kir temizlendi, tahliye hortumu katlanmamış ve makinede hâlâ su kalıyorsa Beko'nun tablosu kullanıcıya başka sebep göstermiyor. Beko'nun güvenlik bölümündeki kural geçerli: **kurulum ve tamir işlemlerini her zaman yetkili servise yaptır.**

⛔ **Kendin-çöz sınırı burada biter.** İptal, filtre, dipteki kir ve hortumun dışarıdan kontrolü kullanıcıya; hortum bağlantısı ve makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Su her programdan sonra mı kalıyor, yoksa bir kez mi oldu?
2. İptal sonrası makine suyu attı mı?
3. Filtrelerde ve makinenin dibinde kir birikmiş miydi?
4. Makine yakın zamanda yerinden oynatıldı mı, hortum katlanmış mıydı?
5. Ekranda P1 ya da başka bir gösterge yanıp söndü mü?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
