---
title: "DemirDöküm kombi sıcak su veriyor, ısıtmıyor"
description: "DemirDöküm kombi sıcak su verip petekleri ısıtmıyorsa kılavuz önce ayara bakıyor: oda termostatı, yaz konumu, ısıtma tuşu ve S.31 kodu."
slug: "demirdokum-kombi-kalorifer-isitmiyor"
date: "2026-09-29"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 06:4x · Kaynak denetimi: demirdokum-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi (hepsi HTTP 200, application/pdf); md5'ler 28 Eyl yerel
# kopyalarıyla birebir. pdftotext -layout ile okundu; sayfa = PDF sayfası. Web araması KULLANILMADI.
# ÇEKİRDEK SATIR (yalnız Vaillant platformlu üç kılavuzda var):
# N) Nitromix · 0020309468_01 · https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 401.645 B · 16 sf · md5 3340a11b923b7332f8eb8685297970b6
#    Ek D s.15: "Sıcak su hazırlama arızasız; Isıtma çalışmıyor" · "Harici regler doğru ayarlanmamış." → "Harici regleri doğru
#    ayarlayın (→Regler kullanma kılavuzu)." · s.10 4.4 mode: kış konumu / yaz konumu · s.11 4.5 regler bağlıysa "Üründeki sıcaklığı
#    maksimum değere ayarlayın." + "İstenen sıcaklığı regler üzerinden ayarlayın" · kaydetmek için düğmeye 2 kez bas ya da bekle
#    · s.9 ısıtma konumu sembolü · s.10 ayar düğmesi "Durum kodunun / arıza kodunun seçilmesi" · s.14 radyatör 35-68 °C,
#    S.08 "Isıtma modu için bekleme süresi etkinleştirildi.", S.30 "Oda termostatı ısıtma konumunu bloke ediyor.",
#    S.31 "Yaz işletimi etkinleştirildi veya e-Veri yolu regleri ısıtma modunu bloke ediyor." · s.13 6.2 gideremiyorsan yetkili servis
# A) ademiX AS/2 · 8000037599_01 · https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf
#    HTTP 200 · 203.592 B · 16 sf · md5 49d7b83510651364a8bf6cc1fd7b654b
#    Ek B s.13: "Isıtma işletime geçmiyor (Sıcak su hazırlama çalışıyor)" · "Haricî regler doğru parametrelendirilmemiş." → harici
#    regler · s.7 ekran koruyucu regler bağlıysa "on veya oF iletisi", her değer değişikliği onaylanır · s.8 4.2 regler bağlıysa üründe
#    maksimum gidiş suyu + reglerde · s.8 4.4 yaz konumu: gidiş suyu oF, "oF iki kere hızla yanıp söner, ısıtma modu devreden çıkartılır."
#    · s.6 tuş "Durum kodlarını göster" · s.10 6 gideremiyorsan yetkili servis
# V) vintomiX AS/1 · 0020313925_01 · https://www.demirdokum.com.tr/downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf
#    HTTP 200 · 231.344 B · 16 sf · md5 8f95c967c9b46f5954feb833fd596467
#    Ek B s.12: A ile aynı satır · s.7 4.2 regler bağlıysa ekranda on/oF; "Ekranda oF görüntülenmesi halinde, ısıtma konumunu açmak
#    için" tuşa bas + onayla, "on iki kez hızla yanıp söner." · s.8 4.4 yaz konumu oF · s.7 onay kuralı
# DESTEK (bu satır tablolarında YOK; yalnız ısıtma konumu ayarı için):
# AT) Atron Condense · 0020281171_00 · https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 412.097 B · 12 sf · md5 7746b6a9d980072b5109b1b27926bd81
#    s.6 "Oda termostatı bağlı" sembolü · s.7 ısıtma konumunu açma/kapatma (yaz/kış geçişi) · s.8 4.10.1 ısıtma konumu tuşu,
#    4.10.2 gidiş suyu · s.10 kullanıcı seviyesi: ısıtma konumu fabrika ayarı "Isıtma konumu kapalı", radyatör 30-80 °C · s.9 6.1
# NP) Nitron Plus · 0020193908_03 · https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 975.777 B · 20 sf · md5 51e63dec4da2dcf111d41350fa586e65
#    s.8 "Oda termostatı bağlı" sembolü · s.11-12 4.9.1 ısıtma konumu, 4.9.2 gidiş suyu · s.15 fabrika ayarı "Isıtma konumu kapalı"
# ⛔ Bilerek YAZILMAYANLAR: petek hava alma ve doldurma (bu satırın tedbiri değil) · termostatik vana ayarı · 3 yollu vana/pompa gibi
#    parça teşhisi (belgede bu satırda yok) · regler markasına özel tarif (regler kılavuzu ayrı belge, indirilmedi) · durum kodu
#    görüntüleme tuş sırası (kılavuz yalnız "ayar düğmesi / tuş" diyor) · ademiX/vintomiX'te yaz konumundan çıkışın ayrı tarifi
#    (kılavuzda yok; yazıda bu açıkça söylendi) · gaz ile ilgili her şey (29 Eyl görev talimatı) · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu"]
steps:
  - "Ekrana bak; F ile başlayan bir kod görünüyorsa önce o kodun rehberine geç."
  - "Kombiye bir oda termostatı (regler) bağlı olup olmadığını öğren."
  - "Regler bağlıysa ısıtmanın açık olduğunu ve istenen sıcaklığı reglerin kendi kılavuzuna göre kontrol et."
  - "Regler bağlı değilse kombinin yaz konumunda ya da ısıtma konumunun kapalı olup olmadığına bak."
  - "Isıtma kapalıysa ya da gidiş suyu sıcaklığı çok düşükse kılavuzundaki tuşla ısıtmayı aç, gidiş suyu sıcaklığını ayarla ve kaydet."
  - "Nitromix'te durum koduna bak; S.30 oda termostatının, S.31 yaz işletiminin ya da reglerin ısıtmayı bloke ettiğini, S.08 bekleme süresini gösterir."
  - "Ayarlar doğru olduğu hâlde ısıtma çalışmıyorsa yetkili servise başvur."
faq:
  - q: "DemirDöküm kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "DemirDöküm'ün Nitromix, ademiX ve vintomiX kullanma kılavuzlarının arıza giderme tablosunda bu durumun ayrı bir satırı var: sıcak su hazırlama çalışıyor, ısıtma çalışmıyor. Üçünde de verilen olası neden aynı: harici regler, yani kombiye bağlı oda termostatı doğru ayarlanmamış. Tedbir de reglerin kendi kullanma kılavuzuna göre doğru ayarlanması. Regler yoksa kombinin kendi ısıtma ayarına bakılır; ısıtma yaz konumunda ya da kapalı kalmış olabilir."
  - q: "DemirDöküm kombide yaz konumu nasıl anlaşılır ve kapatılır?"
    a: "Modele göre değişiyor. Nitromix'te çalışma konumu mode tuşuyla seçiliyor; ekranda kış konumu gidiş suyu sıcaklığıyla, yaz konumu sıcak su sıcaklığıyla görünür ve kış konumuna yine mode tuşuyla geçilir. ademiX ve vintomiX'te yaz konumu gidiş suyu sıcaklığının oF'ye indirilmesiyle açılıyor; oF iki kez hızla yanıp söner ve ısıtma modu devreden çıkar. Bu iki kılavuz yaz konumundan çıkışı ayrıca anlatmıyor; gidiş suyu sıcaklığını ayar bölümüne göre yeniden bir değere getirip onaylamak gerekir, emin olamazsan yetkili servise sor. Atron Condense ve Nitron Plus'ta ısıtma konumu kendi tuşuyla açılıp kapanıyor."
  - q: "Atron Condense ya da Nitron Plus yeni kuruldu, sıcak su var ama ısıtma yok; normal mi?"
    a: "Olabilir. Atron Condense ve Nitron Plus kılavuzlarının kullanıcı seviyesi tablosunda ısıtma konumunun fabrika ayarı 'ısıtma konumu kapalı' olarak yazıyor. Isıtma konumu kontrol panelindeki ısıtma konumu tuşuyla açılır; açıldığında ekranda ilgili sembol ve gidiş suyu sıcaklığı görünür."
  - q: "Nitromix'te S.31 ya da S.30 ne demek?"
    a: "İkisi de arıza değil, durum kodu. Nitromix kılavuzunda S.30 'Oda termostatı ısıtma konumunu bloke ediyor', S.31 'Yaz işletimi etkinleştirildi veya e-Veri yolu regleri ısıtma modunu bloke ediyor' demek. S.08 ise ısıtma modu için bekleme süresinin etkin olduğunu gösteriyor; bu kodu görüyorsan kombi bilerek bekliyor."
images:
  coverAlt: "Duvara monte beyaz bir kombi ve yanında duvara asılı dijital bir oda termostatı; önde soğuk görünen beyaz bir panel radyatör"
---

Musluktan sıcak su geliyor ama petekler soğuk. Kombi çalışıyor gibi görünüyor, sadece ısıtma yapmıyor. DemirDöküm'ün Nitromix, ademiX ve vintomiX kullanma kılavuzlarında bu durumun kendi satırı var: **"Isıtma işletime geçmiyor (Sıcak su hazırlama çalışıyor)."** Nitromix aynı satırı *"Sıcak su hazırlama arızasız; Isıtma çalışmıyor"* diye yazıyor. Üç kılavuzun bu satır için verdiği neden bir parça değil, bir ayar: **harici regler doğru ayarlanmamış.** Regler, kombiye bağlı oda termostatı demek. Bu yazıda o satırı ve kombinin kendi ısıtma ayarlarını, DemirDöküm kılavuzlarından sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var ama ısıtma yoksa kılavuzun ilk şüphelisi ayar. Regler bağlıysa → reglerde ısıtma açık mı, sıcaklık ne. Regler yoksa → kombi yaz konumunda mı, ısıtma konumu kapalı mı, gidiş suyu sıcaklığı çok mu düşük. Nitromix'te S.30 / S.31 ısıtmanın bir ayar yüzünden durduğunu, S.08 beklediğini gösterir. Ayarlar doğruysa yetkili servis.

## Adım adım: evde denenecekler

**1. Önce ekrana bak.** Ekranda F ile başlayan bir kod varsa o kodun tedbiri önce gelir; DemirDöküm kılavuzları arıza mesajında ekteki arıza kodu tablosuna göre hareket edilmesini istiyor. Kodların listesi ve hangi seride hangisinin geçtiği [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) sayfasında.

**2. Regler bağlı mı?** Doğru yere bakmak için önce bunu bilmek gerekiyor; kılavuzların ayar adımları "regler bağlı" ve "regler bağlı değil" diye ikiye ayrılıyor. Kılavuzlar ekranda ipucu da veriyor: ademiX ve vintomiX'te regler bağlıyken ekran koruyucuda **on** ya da **oF** iletisi görünüyor; Atron Condense ve Nitron Plus'ın sembol listesinde **"Oda termostatı bağlı"** diye ayrı bir sembol var.

**3. Regler bağlıysa: reglere bak.** Üç kılavuzun bu satır için verdiği tedbir aynı: **harici regleri doğru ayarlayın** ve bunun için reglerin kendi kullanma kılavuzuna bakın. Reglerde ısıtmanın kapalı olup olmadığını ve istenen oda sıcaklığını kontrol et. Kılavuzlar kombinin tarafı için de şart koyuyor: Nitromix ve ademiX'te regler bağlıyken kombinin üstünde **mümkün olan en yüksek gidiş suyu sıcaklığı** ayarlı olmalı, istenen sıcaklık reglerden seçilir. vintomiX'te regler bağlıyken ana ekranda kılavuzdaki tuşa bir kez basınca ekranda on ya da oF görünür; **oF** ısıtma konumunun kapalı olduğunu gösterir. Bu durumda kılavuz ısıtma konumunu açmak için tuşa basıp onaylamayı tarif ediyor; ekranda **on** iki kez hızla yanıp söner.

**4. Regler yoksa: yaz konumu mu açık?** Yaz konumu, ısıtmayı kapatıp sıcak suyu çalışır bırakan ayar. Kombinin ekranında bunu ararsın:

- **Nitromix:** çalışma konumu mode tuşuyla seçiliyor; ekranda kış konumu gidiş suyu sıcaklığıyla, yaz konumu sıcak su sıcaklığıyla birlikte görünür. Isıtma konumu etkinse ekrandaki ısıtma sembolü sürekli yanar.
- **ademiX ve vintomiX:** gidiş suyu sıcaklığı **oF**'ye indirilip onaylanınca oF iki kez hızla yanıp söner, ısıtma modu devreden çıkar; ekranda ilgili sembol kaybolur ve sıcak su sıcaklığının itibari değeri görünür. ademiX ve vintomiX kılavuzları bu ayarın başlığını "ısıtma konumunun kapatılması (yaz konumu)" diye koyuyor.
- **Atron Condense ve Nitron Plus:** ısıtma konumu kontrol panelindeki kendi tuşuyla açılıp kapanıyor. Kılavuzların kullanıcı seviyesi tablosuna göre ısıtma konumunun **fabrika ayarı kapalı.**

**5. Isıtmayı aç, gidiş suyu sıcaklığını ayarla.** Nitromix'te mode tuşuyla **kış konumunu** seç, ekrandaki ilgili sembol yanıp sönene kadar kılavuzdaki düğmeye bas, gidiş suyu sıcaklığını ayar düğmesiyle değiştir ve kaydetmek için düğmeye iki kez bas ya da birkaç saniye bekle. Atron Condense ve Nitron Plus'ta ısıtma konumu tuşuna bas; ısıtma açıldığında ekranda ilgili sembol ve gidiş suyu sıcaklığı görünür, ardından sıcaklığı döner düğmeyle ayarla. ademiX ve vintomiX'te her değer değişikliği **onaylanmalı**; kılavuzlara göre yeni ayar ancak onaydan sonra devralınır. Bu iki kılavuz yaz konumundan çıkışı ayrıca anlatmıyor; kendi modelinde ısıtmayı nasıl geri açacağını yetkili servise sor. Radyatörlü sistemde gidiş suyu için kılavuzların verdiği aralık Nitromix'te 35–68 °C, Atron Condense ve Nitron Plus'ta 30–80 °C.

**6. Nitromix'te durum koduna bak.** Nitromix kombinin o an ne yaptığını durum koduyla söylüyor; kılavuza göre durum kodu ayar düğmesiyle seçiliyor. Bu konuda işine yarayacak üç kod var: **S.30** *"Oda termostatı ısıtma konumunu bloke ediyor."*, **S.31** *"Yaz işletimi etkinleştirildi veya e-Veri yolu regleri ısıtma modunu bloke ediyor."* ve **S.08** *"Isıtma modu için bekleme süresi etkinleştirildi."* S.30 ya da S.31 görüyorsan önce 3. ve 4. adımdaki ayarlara dön; S.08 görüyorsan kombi bilerek bekliyor. ademiX'te de durum kodlarını gösteren bir tuş var, ancak kodların listesi kullanma kılavuzunda yok.

**7. Ayarlar doğruysa servis.** Regler doğru ayarlı, kombide ısıtma açık, gidiş suyu sıcaklığı makul ve yine de petekler ısınmıyorsa ayar turu bitmiştir. Kılavuzların genel kuralı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## Hangi kılavuzda bu satır var

| Kılavuz | Satır | Olası neden | Tedbir |
|---|---|---|---|
| **Nitromix** | Sıcak su hazırlama arızasız; ısıtma çalışmıyor | Harici regler doğru ayarlanmamış | Harici regleri doğru ayarla (regler kılavuzu) |
| **ademiX** | Isıtma işletime geçmiyor (sıcak su hazırlama çalışıyor) | Harici regler doğru parametrelendirilmemiş | Harici regleri doğru ayarla (regler kılavuzu) |
| **vintomiX** | Isıtma işletime geçmiyor (sıcak su hazırlama çalışıyor) | Harici regler doğru parametrelendirilmemiş | Harici regleri doğru ayarla (regler kılavuzu) |
| **Atron Condense · Nitron Plus** | Tabloda ayrı satır yok | — | Isıtma konumu kendi tuşuyla açılır; fabrika ayarı kapalı |

📌 **S** ile başlayan kodlar arıza değil, **durum** kodudur; arıza kodları **F** ile başlar. S.31 görüyorsan kombi bozuk değil; kılavuza göre yaz işletimi etkin ya da regler ısıtmayı bloke ediyor.

## Ne zaman servis

- Regler ve kombi ayarları doğru olduğu hâlde ısıtma başlamıyorsa.
- Kombi ısıtmaya geçiyor ama petekler hâlâ soğuk kalıyorsa; bu durum kılavuzun bu satırının kapsamı dışında. Genel nedenler aşağıdaki petek yazısında; emin değilsen yetkili servis.
- Ekranda **F** ile başlayan bir arıza kodu varsa; o kodun tedbiri önce gelir.

Kombi hiç çalışmıyorsa (sıcak su da yoksa) [DemirDöküm kombi çalışmıyor](/blog/demirdokum-kombi-calismiyor/) yazısına, kodların tam listesi için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) sayfasına bak. Marka bağımsız olarak peteklerin neden ısınmadığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
