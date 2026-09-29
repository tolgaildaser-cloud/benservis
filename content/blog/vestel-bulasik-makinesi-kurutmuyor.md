---
title: "Vestel bulaşık makinesi kurutmuyor"
description: "Vestel bulaşık makinesi kurutmuyorsa Vestel'in kılavuzundaki sıra: kurutmalı program, kapağı aralama, parlatıcı, tuz ve yerleştirme kontrolü."
slug: "vestel-bulasik-makinesi-kurutmuyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Üç belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200;
#   md5'ler 27 Eyl yerel kopyalarıyla birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (-f/-l).
# Web araması KULLANILMADI: adresler yayındaki vestel-bulasik-makinesi-f5-hatasi provenansından alındı.
#  B) BM 10502 X GI WIFI  https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff  (sayfa atıfları bu belgeye göre)
#  A) BM 8402 GI Pro WIFI https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410
#  C) BM-401 (eski nesil) https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# "Sorun Giderme" — "Bulaşıklar kurumuyor ." satırı üç belgede birebir (B s.47, A s.48, C s.38); satır sınırları B s.47 görüntüsünden doğrulandı:
#   "Kurutma işlemi olmayan bir program seçilmiş. | Kullanım kılavuzunuzdan program döküm sayfasını inceleyerek kurutma adımı olan bir program seçiniz."
#   "Parlatıcı dozu çok düşük ayarlanmış. | Parlatıcı ayarını yükseltiniz."
# Destekleyen bölümler: "Kısa programlar kurutma adımı içermez." + "Kurutmaya yardımcı olmak için, bir döngü tamamlandıktan sonra kapağı bir miktar
#   açmanızı öneririz." B s.35 (A s.36: "Kısa programlarda kurulama aşaması bulunmamaktadır." + "...kapağını aralık bırakmanızı öneririz.")
#   · Parlatıcı doldurma/ayar + "Parlatıcı dozaj ayarı çok düşükse, bulaşıklarda beyaz lekeler kalır, bulaşıklar kurumaz ve iyi yıkanmaz." +
#   "Bulaşıklar gerektiği gibi kurumuyorsa veya lekeliyse seviyeyi yükseltin. Bulaşıklarınızda mavi lekeler varsa seviyeyi düşürün." B s.27 (A s.27)
#   · su yumuşatma "yıkama, kurutma ve parlatma performansını olumsuz yönde etkiler" B s.22 (A s.22, C s.19) · tuz eksik uyarı lambası B s.23
#   · Ekstra Kurutma opsiyonu B s.37 (modele bağlı; A ve C'de bu opsiyon bulunamadı) · "Kurutma sembolü yanıyorken ... 15 ile 100 dakika arası sessiz kalır" B s.37
#   · yerleştirme (açık ağızlar aşağı, üst üste koyma) B s.28 · "Yanlış yükleme, zayıf yıkama ve kurutma performansına yol açabilir." B s.33
#   · boşaltmaya alt sepetten başla B s.28 · kombine deterjanda "bulaşıklarınız kireçli ve ıslak kalıyorsa" deterjan üreticisine başvur B s.26.
# FİŞ KURALI İSTİSNASI: adımların hiçbiri makinenin içine müdahale ya da elektrik/su riski taşımadığı için ilk adım "fişi çek" değil (E10 emsali gibi).
# BİLEREK YAZILMAYANLAR: rezistans/fan/turbo kurutma ünitesi arızası teşhisi (belgede yok) · parlatıcı tuş sırası yalnız BM 10502 için verildi,
#   diğer modeller için "kendi kılavuzundaki yöntem" dendi · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bulaşık makinesi tuzu", "Makinenin kullanım kılavuzu"]
steps:
  - "Kılavuzundaki program tablosundan seçtiğin programın kurutma adımı olup olmadığına bak."
  - "Kurutma adımı olan bir program seç; modelinde varsa Ekstra Kurutma seçeneğini ekle."
  - "Program bitince kapağı bir miktar aralayarak bulaşıkları beklet."
  - "Parlatıcı bölmesinin kapağını aç, MAX seviyesine kadar parlatıcı doldur ve taşanı sil."
  - "Parlatıcı ayarını kılavuzundaki yöntemle bir kademe yükselt."
  - "Tuz eksik uyarı lambası yanıyorsa tuz bölmesine bulaşık makinesi tuzu ekle."
  - "Kapları açık ağızları aşağı bakacak şekilde, üst üste koymadan yerleştir."
faq:
  - q: "Vestel bulaşık makinesi bulaşıkları kurutmuyor, neden?"
    a: "Vestel'in kullanım kılavuzlarındaki sorun giderme tablosu 'Bulaşıklar kurumuyor' başlığında iki sebep sayıyor: kurutma işlemi olmayan bir program seçilmiş olabilir ya da parlatıcı dozu çok düşük ayarlanmış olabilir. Çözümler de iki: program dökümünden kurutma adımı olan bir program seçmek ve parlatıcı ayarını yükseltmek."
  - q: "Hızlı programda bulaşıklar neden ıslak çıkıyor?"
    a: "Vestel kılavuzlarına göre kısa programlar kurutma adımı içermez. Bulaşıkların kuru çıkması isteniyorsa program tablosundan kurutma adımı olan bir program seçilmelidir."
  - q: "Parlatıcı ayarını ne kadar yükseltmeliyim?"
    a: "Vestel'in BM 10502 kılavuzuna göre varsayılan parlatıcı seviyesi 4'tür. Bulaşıklar gerektiği gibi kurumuyorsa ya da lekeliyse seviye yükseltilir; bulaşıklarda mavi lekeler görülüyorsa seviye düşürülür. Kılavuza göre parlatıcı dozu çok yükseğe ayarlanırsa cam eşya ve tabaklarda mavimsi katmanlar görülebilir."
  - q: "Program sonunda makine uzun süre sessiz kalıyor, bozuldu mu?"
    a: "Vestel'in BM 10502 kılavuzuna göre ekranda kurutma sembolü yanarken makine, seçilen programa göre 15 ile 100 dakika arası sessiz kalır. Bu süre kurutma aşamasıdır."
  - q: "Tuzun kurutmayla ne ilgisi var?"
    a: "Vestel'e göre bulaşık makinesi iyi çalışmak için yumuşak, yani az kireçli suya ihtiyaç duyar; su yumuşatma sistemi için bulaşık makinesi tuzu kullanılır. Kılavuz, yumuşak su sağlanmadığında makinede ve bulaşıklarda beyaz kireç artıkları kaldığını ve bunun yıkama, kurutma ve parlatma performansını olumsuz etkilediğini yazıyor."
images:
  coverAlt: "Programı bitmiş, kapağı hafifçe aralanmış bir bulaşık makinesi; üst sepette ağzı aşağı bakan bardaklar ve kapak iç yüzündeki parlatıcı bölmesi"
---

Program bitti, bulaşıklar temiz ama üzerleri ıslak, bardakların dibinde su duruyor. Vestel'in bulaşık makinesi kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun ayrı bir satırı var: **"Bulaşıklar kurumuyor."** Tablo iki sebep sayıyor: **kurutma işlemi olmayan bir program seçilmiş** ya da **parlatıcı dozu çok düşük ayarlanmış.** Aynı kılavuzların program, parlatıcı, tuz ve yerleştirme bölümleri bu iki maddeye birkaç kontrol daha ekliyor. Bu yazıda hepsini Vestel'in cümleleriyle adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program kurutmalı mı (kısa programlar kurutmaz) → kurutmalı program, varsa Ekstra Kurutma → program bitince kapağı arala → parlatıcıyı MAX'a kadar doldur → parlatıcı ayarını yükselt → tuz lambasına bak → kapları ağzı aşağı yerleştir. Sonuç değişmezse İletişim Merkezi.

## Adım adım: evde denenecekler

**1. Programa bak.** Tablodaki ilk sebep: **kurutma işlemi olmayan bir program seçilmiş.** Vestel kılavuzlarının program tablosu notunda açıkça yazıyor: **kısa programlar kurutma adımı içermez.** Hızlı ya da kısa bir programla yıkadıysan bulaşıkların ıslak çıkması bu yüzden olabilir.

**2. Kurutmalı programı seç.** Tablonun çözümü: **kılavuzundaki program döküm sayfasını inceleyerek kurutma adımı olan bir program seç.** Modelinde **Ekstra Kurutma** seçeneği varsa onu da ekleyebilirsin. BM 10502 kılavuzuna göre bu seçenek programa **ekstra kurutma adımları** ekler, son durulamada suyun sıcaklığını artırır ve kurutma aşamasını uzatır.

**3. Program bitince kapağı arala.** Vestel'in program tablosu notu: **kurutmaya yardımcı olmak için, bir döngü tamamlandıktan sonra kapağı bir miktar açmanızı öneririz.** Boşaltırken de **alt sepetten başla**; Vestel bunu üst sepetten alt sepetteki bulaşıklara su damlamasını önlemek için öneriyor.

**4. Parlatıcıyı doldur.** Vestel'e göre parlatıcı, bulaşıkların **çizgi ve leke kalmadan kurutulmasına** yardımcı olur ve sıcak durulama aşamasında otomatik olarak salınır. Parlatıcı bölmesinin kapağını aç, bölmeye **MAX seviyesine kadar** parlatıcı doldur ve kapağı kapat. Taşırmamaya dikkat et; taşan parlatıcıyı bir bezle sil, çünkü Vestel'e göre taşan parlatıcı aşırı köpük yapıp yıkama performansını azaltır.

**5. Parlatıcı ayarını yükselt.** Tablodaki ikinci sebep: **parlatıcı dozu çok düşük ayarlanmış**; çözüm **parlatıcı ayarını yükseltmek.** Vestel'in kılavuzu: parlatıcı dozaj ayarı çok düşükse bulaşıklarda beyaz lekeler kalır, **bulaşıklar kurumaz** ve iyi yıkanmaz. Tuş sırası modele göre değişiyor; kendi kılavuzundaki yöntemi izle (BM 10502 örneği aşağıda).

**6. Tuza bak.** Vestel'e göre makinenin iyi çalışması için **yumuşak, az kireçli su** gerekir; yumuşak su sağlanmazsa makinede ve bulaşıklarda beyaz kireç artıkları kalır ve bu **yıkama, kurutma ve parlatma performansını** olumsuz etkiler. Kontrol panelindeki **tuz eksik uyarı lambası** yanıyorsa tuz bölmesine **bulaşık makinesi tuzu** ekle. Vestel sofra tuzu konmamasını istiyor; tuzu makineyi çalıştırmadan önce koy.

**7. Yerleştirmeyi düzelt.** Vestel'in yerleştirme önerisi: fincan, bardak ve tencereler gibi tüm kaplar **açık ağızları aşağı bakacak** şekilde yerleştirilir, aksi hâlde içlerinde su birikir. Bulaşıklar ve çatal bıçaklar **birbirinin üzerine konmaz.** Kılavuza göre **yanlış yükleme, zayıf yıkama ve kurutma performansına** yol açabilir.

## Parlatıcı ayarı: BM 10502 örneği

Vestel'in BM 10502 X GI WIFI kılavuzundaki sıra şu:

- Açma/Kapama tuşuyla makineyi kapat.
- Makineyi açtıktan hemen sonra **Erteleme** tuşuna en az **5 saniye** basılı tut.
- Ekranda **"rA"** görününce tuşu bırak. Parlatıcı ayarı su sertliği ayarından sonra gelir; son ayar seviyesi görüntülenir.
- **Yarım Yük** tuşuyla seviyeyi değiştir (r1-r5).
- Ayarı kaydetmek için makineyi kapat.

Varsayılan seviye **4**'tür. Bulaşıklar kurumuyor ya da lekeliyse seviyeyi yükselt; bulaşıklarda **mavi lekeler** görürsen seviyeyi düşür. Vestel'e göre parlatıcı dozu çok yükseğe ayarlanırsa cam eşya ve tabaklarda **mavimsi katmanlar** oluşabilir.

## Program sonunda makine sessizse

BM 10502 kılavuzuna göre ekranda **kurutma sembolü** yanarken makine, seçilen programa göre **15 ile 100 dakika arası sessiz kalır.** Bu süre kurutma aşamasıdır; makinenin durduğunu düşünüp programı erken kesme.

**Tablet deterjan kullanıyorsan:** Vestel'e göre ikisi ya da üçü bir arada deterjanlarla iyi sonuç alamıyorsan (bulaşıkların **kireçli ve ıslak** kalıyorsa) deterjan üreticisine başvur. Kılavuzun önerisi, kombine deterjanla daha iyi sonuç için makineye **tuz ve parlatıcı ekleyip** su sertliği ve parlatıcı ayarını en düşük (1) konuma getirmek.

Tuz ve parlatıcı ayarının ayrıntısı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında; markadan bağımsız sebepler için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) yazısına bakabilirsin. Bulaşıklarda yemek artığı da kalıyorsa: [Vestel bulaşık makinesi temiz yıkamıyor](/blog/vestel-bulasik-makinesi-temiz-yikamiyor/).

## Sınır nerede biter

Kurutmalı bir program seçtin, parlatıcı dolu ve ayarı yükseltildi, tuz tamam, kaplar doğru yerleştirildi ve bulaşıklar hâlâ ıslak çıkıyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor. Tablonun giriş cümlesi geçerli: cihazın normal çalışmasına devam etmiyorsa **İletişim Merkezi ile irtibata geç.**

⛔ **Kendin-çöz sınırı burada biter.** Program, parlatıcı, tuz ve yerleştirme kullanıcıya; makinenin içindeki ısıtma ve kurutma sistemi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı kullandın, program tablosunda kurutma adımı var mı?
2. Parlatıcı bölmesi dolu mu, parlatıcı ayarı kaç?
3. Tuz eksik lambası yanıyor mu?
4. Tablet mi toz deterjan mı kullanıyorsun?
5. Islaklık bütün bulaşıklarda mı, yalnız bir sepette mi?

Bu beşine cevabın varsa servise "kurutmuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
