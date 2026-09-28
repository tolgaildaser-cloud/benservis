---
title: "ECA kombi F37 hatası"
description: "ECA kombide F37 düşük su basıncı demek. Basıncı okuma, doldurma vanasını yavaş açıp 1,5–2 bar'da kapatma, AP modu ve servis sınırı; ECA kılavuzlarından."
slug: "eca-kombi-f37-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi eca.com.tr, hepsi HTTP 200); pdftotext -layout ile okundu,
# sayfa no = PDF sayfası (pdftotext -f/-l ile tek tek doğrulandı). Proteus s.30 tablosunda metin katmanı eksik: F37 2. adım ve F40 çözümü
# 200 dpi render edilip gözle okundu (tesseract -l tur ile karşılaştırıldı). Web araması kullanılmadı. md5'ler hub'ın 15 Eyl kaydıyla birebir.
# Alıntı denetim tablosu: eca-kombi-f37-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: F37 üç ailede aynı eşik (0,4 bar) ve aynı dört adımlı çözüm.
# A) PROTEUS PREMIX https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf · 48 s. · md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    "F37 Düşük Su basıncı Hatası | Su basınç sensörü cihazınız için sakıncalı düşük su basıncı (0.4 bar) algıladığında meydana gelir. |
#     1- Cihazınızın kalorifer devresi su basıncını kontrol edin. 2- Basınç değeri 1,5-2 Bar'a ulaşıncaya kadar sistemi su ile doldurun.
#     (0,8 bar üzeri basınçlarda cihaz arızadan çıkacaktır.) 3- Vanalarınızı ve tesisatınızı kaçaklara karşı kontrol ediniz.
#     4- Problem devam ediyorsa (veya tekrarlanıyorsa) E.C.A. yetkili servisine haber veriniz." s.30 (render ile okundu)
#    Doldurma: "doldurma vanası yavaşça açılarak su doldurma işlemi başlatılır. LCD ekran üzerinden 1,5 – 2 bar su basınç değeri okunana kadar
#     doldurma işlemine devam edilir ve sonra doldurma vanası kapatılır." · "Su basıncı 0,8 bar üzerine çıktığı zaman LCD ekranda "AP" yazısı görünür
#     ... kesinlikle "RESET" e basmadan 160 sn. süren modu tamamlamasını bekleyiniz." · "sistem soğuk iken 1,5 – 2 bar arası olmasına dikkat edin.
#     Eğer basınç sık sık düşüyorsa sistemde bir su kaçağı söz konusu demektir. Bu durumda bir tesisatçı çağırmak gerekir." ·
#     "DİKKAT: Su doldurma vanasını mutlaka kapatınız, tesisat suyu akarak ortama zarar verebilir." · Şekil 16 (HM/HCH/HST su doldurma vanası) s.25
#    "Sadece F37 (Düşük su basınç hatası) hatası sonrası su dolumu yapılırken, sıcaklık değeri bölümünde basınç değeri gösterilir." s.27
#    AP: "Yüksek su basıncı (F40) veya düşük su basıncı (F37) hatası geçtikten sonra" s.28 · FXX Reset ile silinmez s.26
#    Garanti dışı: "Kullanıcı seviyesine işlem yapılması gereken (Reset İşlemi, Kalorifer Sistemine Kombi Doldurma Musluğu ile Su Doldurma İşlemi,
#     Isıtma Sistemi Hava Alma vb) uygulamalar için kullanım hatası, servis hizmeti talep edilmesi" s.46
# B) CONFEO PREMIX https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf · 44 s. · md5 4ef56163ac14c46f9cb1dcb9ea189681
#    "F37 Düşük Su Basıncı Hatası | Bu durum, su basıncı sensörünün düşük su basıncı (0,4 bar) tespit etmesiyle ortaya çıkar ... | 1- Cihazınızın ısıtma
#     tesisatındaki su basıncını kontrol edin. 2- Basınç 1,5-2 bar'a ulaşana kadar sisteme su basın (basınç 0,8 bar'ın üzerine çıktığında cihaz hatayı
#     giderecektir). 3- Vanalarınızı ve tesisatınızı sızıntılara karşı kontrol edin. 4- Sorun hala devam ediyorsa (veya sürüyorsa), E.C.A. yetkili servisine bildirin." s.29
#    Doldurma metni A ile aynı + Şekil 16 "Doldurma Musluğu" s.22 · AP s.26 · FXX s.23 · E38 "Son su dolumundan 1 hafta sonra su basıncı düşük. | Tesisatta
#     veya kombide su kaçağı" s.27 · garanti s.42
# C) CITIUS PREMIX https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf · 40 s. · md5 023164f7b7cebedc931411900edd72b0
#    F37 satırı A ile aynı metin s.25 · doldurma metni + HM/HCH/HST çizimi s.21 · FXX s.22 · AP s.24 · garanti s.38
# BİLEREK yazılmayanlar:
#  - Doldurma vanasının kombi üzerindeki yeri/rengi/dönüş yönü: kılavuz yalnız çizimde gösteriyor → "kılavuzundaki çizimde".
#  - Citius s.23 basınç göstergesi metninde "C37" yazıyor (baskı hatası olası); "F37 sırasında basınç sıcaklık bölümünde görünür" yalnız Proteus'a atfedildi.
#  - Proteus teknik özellik listesinde 42-45 kW için düşük su basınç emniyeti 0,8 bar (s.6); F37 tablosu 0,4 bar diyor → karışıklık yaratmamak için yazılmadı.
#  - Basıncın neden düştüğüne dair kaçak dışında bir teşhis (genleşme tankı vb.): kılavuzda yok.
#  - Confeo F41/F42/F43 (otomatik su doldurma) bu yazıda anlatılmadı; hub'da var.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kalorifer devresinin su basıncını kombinin ekranından oku."
  - "Su doldurma vanasının yerini kılavuzundaki çizimden bul; bilmiyorsan servisten göstermesini iste."
  - "Doldurma vanasını yavaşça aç."
  - "Ekranda 1,5–2 bar okununca doldurma vanasını mutlaka kapat."
  - "Ekranda AP yazarsa Reset'e basmadan 160 saniyelik hava tahliye modunun bitmesini bekle."
  - "Vanaları ve tesisatı kaçağa karşı kontrol et."
  - "Basınç sık sık düşüyorsa ya da F37 tekrarlıyorsa yetkili servise haber ver."
faq:
  - q: "ECA kombide F37 hatası ne demek?"
    a: "ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarında F37 düşük su basıncı hatasıdır. Su basınç sensörü 0,4 bar'lık düşük basınç algıladığında çıkar."
  - q: "F37'de Reset'e basmam gerekir mi?"
    a: "Hayır. F ile başlayan kodlar ECA'da geçici arızadır; Reset tuşuyla ekrandan silinmez, hata durumu düzelince kod kendiliğinden kaybolur. Kılavuza göre basınç 0,8 bar'ın üzerine çıkınca cihaz arızadan çıkar. Hemen ardından gelen AP modunda da Reset'e basılmaz."
  - q: "ECA kombinin basıncı kaç bar olmalı?"
    a: "Üç kılavuz da sistem soğukken 1,5–2 bar arasını istiyor. Doldururken ekranda 1,5–2 bar okununca doldurma vanası kapatılır. Aynı kılavuzlarda F40 yüksek su basıncı eşiği Proteus Premix'te 3±0,3 bar, Citius Premix'te 3,3±0,3 bar, Confeo Premix'te 2,9 bar ve üzeridir."
  - q: "Su ekledim ama bir süre sonra F37 yine çıktı. Ne yapmalıyım?"
    a: "Kılavuzların hükmü net: basınç sık sık düşüyorsa sistemde bir su kaçağı söz konusudur ve bir tesisatçı çağırmak gerekir. F37 çözümünün son adımı da problem devam ediyor ya da tekrarlanıyorsa E.C.A. yetkili servisine haber vermektir. Confeo Premix'te son su dolumundan 1 hafta sonra basınç düşükse ayrıca E38 kodu çıkar."
  - q: "Su doldurmak garanti kapsamında servisin işi mi?"
    a: "ECA'nın garanti bölümü, Reset işlemini, kalorifer sistemine kombi doldurma musluğuyla su doldurmayı ve ısıtma sistemi hava almayı kullanıcı seviyesindeki işlemler arasında sayıyor. Bu işler için servis hizmeti talep edilmesi garanti kapsamı dışındaki durumlar arasında yazılı."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin dijital ekranında düşük basınç değeri; kombinin altındaki borular arasında küçük bir doldurma vanasına uzanan bir el"
---

ECA kombinin ekranında **F37** görüyorsan ECA'nın kullanma kılavuzlarındaki karşılığı **"Düşük Su basıncı Hatası"**: su basınç sensörü, cihaz için sakıncalı **düşük su basıncı (0,4 bar)** algılamış. Basıncı okumak ve doldurma vanasıyla su eklemek, ECA'nın kılavuzlarının kullanıcıya bıraktığı bir iş. Bu yazı o işi Proteus Premix, Confeo Premix ve Citius Premix kılavuzlarına dayanarak adım adım anlatıyor ve nerede durman gerektiğini gösteriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F37 = düşük su basıncı (0,4 bar). Sıra şu: basıncı ekrandan oku → doldurma vanasını yavaşça aç → 1,5–2 bar'da mutlaka kapat → AP yazarsa Reset'e basmadan 160 saniye bekle → vanalarda ve tesisatta kaçak var mı bak. Basınç sık düşüyorsa servis.

## F37 bir geçici arızadır

ECA'da iki tip arıza var. **E** ile başlayan kodlar kalıcıdır; hata düzeldikten sonra Reset'e basılır. **F** ile başlayan kodlar geçicidir: kılavuza göre **Reset tuşuyla ekrandan silinmez**, hata durumu düzelince **kod kendiliğinden kaybolur.** F37'de de iş Reset'te değil, basınçta: kılavuzun notuna göre basınç **0,8 bar'ın üzerine** çıkınca cihaz arızadan çıkar.

## Adım adım: evde denenecekler

**1. Basıncı oku.** Kılavuzun ilk maddesi: **cihazının kalorifer devresi su basıncını kontrol et.** Basınç kombinin ekranında görünür. Proteus Premix kılavuzuna göre ekrandaki skala 0,5 bar aralıklarla gösterilir; yalnız **F37 sonrası su doldururken** basınç değeri ekranın **sıcaklık bölümünde** gösterilir.

**2. Doldurma vanasını bul.** Su doldurma vanası kılavuzunun ilk çalıştırma bölümündeki çizimde gösterilir; Proteus Premix ve Citius Premix kılavuzları HM, HCH ve HST modeller için ayrı ayrı çiziyor. Yerini bilmiyorsan tahmin yürütme; servisten göstermesini iste.

**3. Vanayı yavaşça aç.** Kılavuzun ifadesiyle doldurma vanası **yavaşça açılarak** su doldurma işlemi başlatılır.

**4. 1,5–2 bar'da kapat.** Ekranda **1,5–2 bar** okunana kadar doldurmaya devam et, sonra **vanayı kapat.** Kılavuzun uyarısı: *"Su doldurma vanasını mutlaka kapatınız, tesisat suyu akarak ortama zarar verebilir."*

**5. AP yazarsa bekle.** Basınç **0,8 bar'ın üzerine** çıkınca ekranda **"AP"** yazar ve kombi otomatik hava boşaltma moduna geçer. Kılavuza göre bu sırada **kesinlikle Reset'e basmadan** 160 saniye süren modun tamamlanmasını bekle.

**6. Kaçak kontrolü yap.** F37 çözümünün üçüncü maddesi: **vanalarını ve tesisatını kaçaklara karşı kontrol et.** Kılavuzlar ilk çalıştırmanın sonunda da radyatör ve tesisat borularında sızıntı olup olmadığına bakılmasını istiyor.

**7. Sık düşüyorsa servise haber ver.** Problem devam ediyor ya da tekrarlanıyorsa kılavuzun son maddesi E.C.A. yetkili servisine haber vermek.

## Basınç neden tekrar düşer

Kılavuzların ilk çalıştırma bölümü kullanıcıdan basınç göstergesini **sık sık kontrol etmesini** ve sistem soğukken **1,5–2 bar** arasında olmasına dikkat etmesini istiyor. Aynı bölümün hükmü: **basınç sık sık düşüyorsa sistemde bir su kaçağı söz konusudur** ve bir tesisatçı çağırmak gerekir.

Confeo Premix'in bunun için ayrı bir kodu var: **E38**, yani son su dolumundan 1 hafta sonra su basıncının düşük olması. Kılavuz muhtemel sebep olarak tesisatta veya kombide su kaçağını gösteriyor; adımı önce Reset, hata sürerse E.C.A. yetkili servisi.

## Fazla doldurduysan: F40

Aynı tabloda ters durumun kodu da var: **F40 yüksek su basıncı.** Eşiği modele göre değişiyor: Proteus Premix'te **3±0,3 bar**, Citius Premix'te **3,3±0,3 bar**, Confeo Premix'te **2,9 bar ve üzeri.** Ne yapılacağı [ECA kombi F40 hatası](/blog/eca-kombi-f40-hatasi/) yazısında.

## Ne zaman doğrudan servis

- Su ekledikten sonra **F37 kısa sürede geri geliyorsa** ya da basınç sık sık düşüyorsa.
- Vanalarda, tesisatta ya da kombinin altında **su izi** görüyorsan.
- Doldurma vanasını bulamıyorsan.

⛔ **Kendin-çöz sınırı burada biter.** ECA'nın garanti bölümü Reset'i, doldurma musluğuyla su doldurmayı ve ısıtma sistemi hava almayı **kullanıcı seviyesindeki işlemler** arasında sayıyor. Kombinin içi, sensörler ve kaçağın kaynağını bulmak servisin işidir.

## Servisi aramadan önce iki dakikalık özet

1. Kombinin modeli ne (Proteus, Confeo, Citius)?
2. Basınç soğukken kaç bar?
3. Su ekledikten sonra F37 gitti mi, AP modu tamamlandı mı?
4. Ne kadar sürede yeniden su eklemen gerekti?
5. Vanalarda ya da tesisatta su izi var mı?

Bu beşine cevabın varsa servise "kombi çalışmıyor" yerine somut bir tablo anlatabilirsin.

ECA'nın diğer kodları için [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) listesine bak. Basınç konusunu marka bağımsız anlattığımız yerler: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) ve [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/). Ekranda F37 değil **E01** varsa [ECA kombi E01 hatası](/blog/eca-kombi-e01-hatasi/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
