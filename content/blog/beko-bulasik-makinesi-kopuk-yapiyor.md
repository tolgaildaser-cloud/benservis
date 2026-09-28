---
title: "Beko bulaşık makinesi köpük yapıyor"
description: "Beko bulaşık makinesinde köpük varsa kılavuz üç sebep sayıyor: elde deterjanla yıkanmış bulaşık, dökülen parlatıcı, açık kalan kapak."
slug: "beko-bulasik-makinesi-kopuk-yapiyor"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144, ek koşu 08:20). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  (A) BM 5005  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4  (sayfa atıfları bu belgeye göre)
#  (B) BM 4004  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b  (aynı cümleler aynı sayfalarda)
#  (C) 3938 IL  http://download.beko.com/Download.UsageManualsBeko/34758_1728766176_AA_BEKO_3938-IL.pdf  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975
#  (D) 3938 BI  http://download.beko.com/Download.UsageManualsBeko/34757_1728766175_AA_BEKO_3938-BI.pdf  29 s.  md5 360bb8368f0000711f563180cee7081a
#  (E) D3 3001 SY  http://download.beko.com/Download.UsageManualsBeko/d3-3001-sy-3-programli-bulasik-makinesi-kullanim-kilavuzu-29017_tr_TR_1728762603_AN_BEKO_D3_3001_SY.pdf  29 s.  md5 fcfebfdf9fa48f34af026ec3d5739b45
#  (W) Beko TR blog hata kodları https://www.beko.com.tr/blog/bulasik-makinesi-hata-kodlari-rehberi  HTML md5 b68dce2a69b3b62ff835543f98e91c80 (tam tarayıcı başlık setiyle 200; yalın UA'ya Akamai 403) — yalnız E01 cümlesi için.
# "Makinede köpük oluşuyor." (A s.33, B s.33 — Sorun giderme):
#   "Bulaşıklar makineye yerleştirilmeden önce, bulaşık deterjanıyla elde yıkanmış ve ardından durulanmadan makineye koyulmuştur. >>> Elde yıkama bulaşık deterjanlarında köpük kontrolü yoktur. Bulaşıkları makineye koymadan önce deterjanla elde yıkamanıza gerek yoktur. Bulaşık yüzeyindeki kaba kirleri suyla akıtmanız veya kağıt peçete ya da çatal ile sıyırmanız yeterlidir."
#   "Parlatıcı doldururken makinenin içine parlatıcı dökülmüştür. >>> Parlatıcı doldurulurken makinenin içine dökmemeye özen gösterin. Etrafa dökülen parlatıcıyı kağıt peçete / havlu yardımıyla temizleyin."
#   "Parlatıcı bölmesinin kapağı açık unutulmuştur. >>> Parlatıcı doldurduktan sonra parlatıcı bölmesinin kapağını kapattığınızdan emin olun."
# Parlatıcı bölümü (A s.14-15, C s.14, D, E): "Bölmenin dışına dökülen parlatıcıyı silin. Yanlışlıkla dökülen parlatıcı köpürmeye neden olacağından yıkama etkinliğini azaltacaktır." · "Bölmenin kapağını hafifçe bastırarak kapayın." · "sadece bulaşık makinelerinde kullanılmak üzere üretilmiş parlatıcıların kullanılması gerekmektedir."
# Diğer: A s.24 program iptali (Başla/Bekle/İptal 3 sn) · A s.26 "Makineyi temizlemeden önce fişini çekin ve musluğu kapayın." · A s.26 makine içi temizlik "deterjansız Ön Yıkama veya deterjanlı uzun bir yıkama programı" · A s.31 koku satırı "Sirke, elde yıkama deterjanı, kireç çözücü gibi kimyasallar kullanmayın." · A s.25 P1 taşma uyarısı · W E01.
# BİLEREK YAZILMAYANLAR: köpük → E01/P1 nedensellik iddiası (Beko metninde köpük ile taşma kodu arasında bağ kurulmuyor; yalnız "taşma uyarısı çıkarsa" koşullu cümlesi yazıldı) ·
#   deterjan doz aşımı köpük sebebi olarak (Beko'nun köpük satırında yok) · köpük kesici/tuz/sirke gibi ev yöntemleri (belgede yok; sirke parlatıcı haznesine konmaz uyarısı var).
# Alıntı denetim tablosu: beko-bulasik-makinesi-kopuk-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kâğıt peçete ya da havlu"]
steps:
  - "Başla/Bekle/İptal tuşunu 3 saniye basılı tutarak programı iptal et ve makinenin iptal işlemlerini bitirmesini bekle."
  - "Makineyi kapat, fişini çek ve musluğu kapat."
  - "Parlatıcı bölmesinin kapağının kapalı olduğunu kontrol et; açıksa hafifçe bastırarak kapat."
  - "Bölmenin çevresine ve makinenin içine dökülmüş parlatıcıyı kâğıt peçete ya da havluyla sil."
  - "Makinedeki bulaşıklardan elde deterjanla yıkanıp durulanmamış olanları çıkar ve suyla durula."
  - "Fişi tak, musluğu aç ve makineyi boşken deterjansız Ön Yıkama programıyla çalıştır."
  - "Bundan sonra bulaşıkları elde deterjanla yıkamadan, kaba kirlerini suyla akıtarak ya da peçeteyle sıyırarak yerleştir."
faq:
  - q: "Beko bulaşık makinesi neden köpük yapar?"
    a: "Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosu 'Makinede köpük oluşuyor' başlığında üç sebep sayıyor: bulaşıklar makineye konmadan önce bulaşık deterjanıyla elde yıkanıp durulanmadan yerleştirilmiş; parlatıcı doldurulurken makinenin içine parlatıcı dökülmüş; ya da parlatıcı bölmesinin kapağı açık unutulmuş."
  - q: "Bulaşıkları makineye koymadan önce deterjanla yıkamak gerekir mi?"
    a: "Hayır. Beko'ya göre elde yıkama bulaşık deterjanlarında köpük kontrolü yoktur ve bulaşıkları makineye koymadan önce deterjanla elde yıkamaya gerek yoktur. Bulaşık yüzeyindeki kaba kirleri suyla akıtmak ya da kâğıt peçete veya çatalla sıyırmak yeterlidir."
  - q: "Parlatıcı dökülünce neden köpük oluyor?"
    a: "Beko'nun kılavuzundaki uyarı şöyle: bölmenin dışına dökülen parlatıcıyı silin; yanlışlıkla dökülen parlatıcı köpürmeye neden olacağından yıkama etkinliğini azaltacaktır. Bu yüzden parlatıcıyı doldurduktan sonra etrafa taşanı kâğıt peçete ya da havluyla silmek ve bölmenin kapağını kapatmak gerekiyor."
  - q: "Parlatıcı bölmesine sirke ya da elde yıkama deterjanı koyabilir miyim?"
    a: "Hayır. Beko, parlatıcı bölmesinde yalnız bulaşık makinelerinde kullanılmak üzere üretilmiş parlatıcıların kullanılmasını istiyor. Kılavuzun koku bölümünde de parlatıcı haznesine sirke, elde yıkama deterjanı, kireç çözücü gibi kimyasalların konmaması gerektiği yazıyor."
images:
  coverAlt: "Kapağı açık bulaşık makinesinin tabanında toplanmış beyaz köpük; alt sepette tabaklar, yanda katlanmış kâğıt havlu"
---

Makinenin kapağını açtın ve tabanda beyaz bir köpük tabakası gördün, ya da köpük kapak kenarından dışarı taşmaya başladı. Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosunda bu durumun kendi başlığı var: **"Makinede köpük oluşuyor."** Tabloda sayılan üç sebebin üçü de kullanım kaynaklı: **elde deterjanla yıkanıp durulanmadan makineye konan bulaşıklar**, **makinenin içine dökülen parlatıcı** ve **açık unutulan parlatıcı bölmesi kapağı.** Bu yazıda Beko'nun çözümlerini adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Beko'ya göre köpüğün üç sebebi var: elde yıkama deterjanı, dökülen parlatıcı, açık kalan parlatıcı kapağı. Sıra şu: programı iptal et → fişi çek, musluğu kapat → parlatıcı kapağını kapat, dökülen parlatıcıyı sil → deterjanlı bulaşıkları durula → boş makinede deterjansız Ön Yıkama. Taşma uyarısı yanıp sönmeye devam ederse yetkili servis.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Beko'nun kılavuzundaki yöntem: **Başla/Bekle/İptal** tuşuna **3 saniye** bas, program göstergesi yanıp sönmeye başlayınca tuşu bırak. Makine birkaç dakika boyunca programın iptali için gereken işlemleri yapar; bitmesini bekle. Beko'nun notu: iptal ettiğin programın kaldığı adıma bağlı olarak makinede ya da bulaşıklarda deterjan veya parlatıcı kalabilir.

**2. Güvenliği al.** Beko'nun bakım kuralı: makineyi temizlemeden önce **fişini çek ve musluğu kapa.** Makineyi kapat, sonra fişi prizden çıkar.

**3. Parlatıcı kapağına bak.** Beko'nun köpük satırındaki sebeplerden biri **parlatıcı bölmesinin kapağının açık unutulması.** Kapak açıksa **hafifçe bastırarak** kapat. Parlatıcı doldurduktan sonra kapağın kapandığından emin olmak Beko'nun önerisi.

**4. Dökülen parlatıcıyı sil.** Beko'nun kılavuzu açık: **yanlışlıkla dökülen parlatıcı köpürmeye neden olur** ve yıkama etkinliğini azaltır. Bölmenin çevresine ya da makinenin içine dökülmüş parlatıcıyı **kâğıt peçete ya da havluyla** temizle.

**5. Deterjanlı bulaşıkları durula.** Köpüğün üçüncü sebebi: bulaşıkların makineye konmadan önce **bulaşık deterjanıyla elde yıkanıp durulanmadan** yerleştirilmesi. Beko'ya göre **elde yıkama bulaşık deterjanlarında köpük kontrolü yoktur.** Makinede böyle bulaşık varsa çıkar ve suyla durula.

**6. Boş makinede Ön Yıkama çalıştır.** Beko, makinenin içini kirlilik durumuna göre **deterjansız Ön Yıkama** ya da deterjanlı uzun bir programla temizlemeyi öneriyor. Fişi tak, musluğu aç ve makine boşken deterjansız Ön Yıkama programını çalıştır.

**7. Yerleştirme alışkanlığını değiştir.** Beko'ya göre bulaşıkları makineye koymadan önce deterjanla elde yıkamaya **gerek yoktur.** Bulaşık yüzeyindeki kaba kirleri **suyla akıtmak** ya da **kâğıt peçete veya çatalla sıyırmak** yeterlidir.

## Parlatıcıyı doğru doldurmak

Köpüğün iki sebebi parlatıcıyla ilgili olduğu için doldurma sırasını bilmek işe yarar. Beko'nun kılavuzundaki sıra şu:

- Parlatıcı bölmesinin kapağını **mandalına basarak** aç.
- Bölmeyi **MAX seviyesine** kadar doldur.
- Kapağı **hafifçe bastırarak** kapat.
- Bölmenin dışına dökülen parlatıcıyı sil.

Beko, parlatıcı bölmesinde yalnız **bulaşık makinelerinde kullanılmak üzere üretilmiş** parlatıcıların kullanılmasını istiyor. Aynı kılavuzun koku bölümüne göre parlatıcı haznesine **sirke, elde yıkama deterjanı, kireç çözücü** gibi kimyasallar konmaz. Parlatıcı kademesinin nasıl ayarlandığı [bulaşık makinesi tuz ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında.

## Taşma uyarısı çıkarsa

Beko'nun hata kodları rehberine göre **E01** taşma hatasıdır: makine aşırı su aldığında ya da bir parçada sızıntı olduğunda oluşur ve makinenin güvenlik sistemi içerideki suyu tahliye etmeye çalışır. Fazla su atılırsa E01 kaybolur; su atılamazsa kod yanıp sönmeye devam eder. Bu durumda Beko'nun talimatı: **elektriği kes, valfi kapat ve yetkili servisle iletişime geç.** BM 4004 ve BM 5005 kılavuzlarında aynı uyarı **P1** ikonuyla gösteriliyor; P1 sönmüyorsa hata kalıcıdır ve servis çağrılması gerekir. Ayrıntısı [Beko bulaşık makinesi E01 hatası](/blog/beko-bulasik-makinesi-e01-hatasi/) yazısında.

## Sınır nerede biter

Parlatıcı kapağı kapalı, dökülen parlatıcı silinmiş, bulaşıklar elde deterjanla yıkanmıyor ve köpük hâlâ oluşuyorsa Beko'nun köpük satırı kullanıcıya başka sebep göstermiyor. Beko'nun kılavuzundaki genel kural geçerli: sorun giderme adımlarına rağmen sorun sürerse **ürünü satın aldığın bayiye ya da yetkili servise başvur**, çalışmayan ürünü kendin onarmayı deneme.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı bölmesi, bulaşık yerleştirme ve makine içi temizlik kullanıcıya; gövdenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Köpük hangi programda, programın hangi anında görüldü?
2. Parlatıcı bölmesinin kapağı kapalı mıydı, etrafa parlatıcı dökülmüş müydü?
3. Bulaşıklar makineye konmadan önce elde deterjanla yıkanmış mıydı?
4. Deterjansız Ön Yıkama sonrasında köpük tekrar oluştu mu?
5. Ekranda E01 ya da P1 yanıp söndü mü?

Bu beşine cevabın varsa servise "makine köpük yapıyor" yerine somut bir tablo anlatabilirsin. Beko'nun yayımladığı diğer kodlar için [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
