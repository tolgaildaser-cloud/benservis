---
title: "Viessmann kombi CL hatası"
description: "Viessmann kombide CL ve yanıp sönen uyarı üçgeni: brülör bir arıza nedeniyle kilitlenmiş. Arıza numarasını not etme, kilidi açma ve servis sınırı."
slug: "viessmann-kombi-cl-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 · curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi, hepsi HTTP 200; pdftotext -layout ile sayfa sayfa okundu;
# simgeler (CL, uyarı üçgeni, ok düğmeleri) pdftoppm ile sayfa görüntüsünden doğrulandı.
# Yer: Viessmann'ın kendi ViBooks veritabanı. Web araması yalnız yer bulmak için.
# A) Vitodens 100-W/111-W/111-F · 6135864 TR 03/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf
#    44 s. · md5 5513c22c39f416336369c7d3cbe6d0fe
#    "Brülör arızası" bölümü s.30 (görüntüde ekran simgesi CL) · Ne yapmalı tablosu s.33 (Ortam çok soğuk), s.34 (Sıcak su yok,
#    "„ “ ve arıza kodu yanıp sönüyor") · 5 arıza mesajı / ertesi gün 7:00 s.29-30
# B) Vitodens Connect / Trend · 6173992 TR 05/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf
#    36 s. · md5 5c0d0900f6f66d9eb9dc09855ae7cb04
#    "Ekranda „ “ simgesi ve „CL“ yanıp söner. Brülör devreye girmiyor." → "Brülörü açın: Bkz. sayfa 24." (s.27)
#    Brülör arızası adımları s.24 · Lightguide hızlı yanıp sönüyor = arıza s.13
# C) Vitodens Connect / Trend · 6171780 TR 10/2023
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6171780VBA00004_1.pdf
#    36 s. · md5 17765afa670bf200fd39032c21714795 · "„CL“ yanıp söner" s.27-28 · kilit açma adımları s.23-24
# Bilerek YAZILMAYANLAR: CL'nin arkasındaki teknik neden (kılavuz vermiyor; yalnız "bir arıza nedeniyle kilitlenmiştir")
#  · arıza numaralarının anlamı (kullanma kılavuzlarında liste yok) · gaz kapatma vanası / sigorta / şebeke anahtarı adımları
#  (#31: gaz/elektrik müdahalesi yok) · filtre sepeti (kılavuz servise bırakıyor) · Vitodens 200-W 3,5 inç ekranlı ailenin
#  brülör arızası akışı (6172120'de "CL" geçmiyor → bu yazının kapsamı dışında).
# Alıntı denetim tablosu: viessmann-kombi-cl-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kalem ve kâğıt (arıza numarası için)"]
steps:
  - "Ekranda CL ve yanıp sönen uyarı üçgeni olduğunu doğrula; üçgen yanıp sönmeden sabit duruyorsa kodu not edip servise bildir."
  - "Yukarı/aşağı ok düğmelerine dokunarak arıza numarasını ekranda görüntüle."
  - "Arıza numarasını bir kâğıda not et."
  - "Yukarı ve aşağı ok düğmelerine birlikte yaklaşık 4 saniye dokun."
  - "Ekranda dönen çubuğu bekle; arıza gittiyse ana ekran açılır."
  - "Kilidi kısa aralıklarla art arda açmaya çalışma."
  - "CL yeniden gelirse not ettiğin arıza numarasıyla yetkili servisi ara."
faq:
  - q: "Viessmann kombide CL ne demek?"
    a: "Viessmann'ın Vitodens 100-W/111-W/111-F ile Vitodens Connect ve Trend kullanma kılavuzlarına göre ekranda CL ve yanıp sönen uyarı üçgeni görünüyorsa brülör bir arıza nedeniyle kilitlenmiştir ve devreye girmez. Kılavuz bu durumda brülörün kilidinin kullanıcı tarafından açılabileceğini yazıyor."
  - q: "Viessmann kombinin kilidi nasıl açılır?"
    a: "Kılavuzdaki sıra şöyle: yukarı/aşağı ok düğmeleriyle arıza numarasını görüntüle, arıza numarasını not et, sonra yukarı ve aşağı ok düğmelerine birlikte yaklaşık 4 saniye dokun. Ekranda dönen bir çubuk kilit açma işleminin başladığını gösterir. Arıza giderildiyse ana ekran açılır. Arıza tekrar meydana gelirse yetkili teknik servise haber verilir."
  - q: "Kilidi birkaç kez açmayı denesem olur mu?"
    a: "Viessmann bunu istemiyor. Kılavuzdaki tehlike uyarısına göre giderilmeyen arızalar hayati tehlike oluşturabilir; brülör kısa aralıklarla birkaç kez açılmamalı, arıza tekrar meydana gelirse yetkili teknik servise haber verilmeli. Servis arızanın nedenini inceleyip giderebilir."
  - q: "Arıza numarasını neden not etmeliyim?"
    a: "Kılavuz bunu ayrı bir adım olarak veriyor ve gerekçesini de yazıyor: bu sayede yetkili servis hazırlıklı olarak gelir. Arıza numaraları kontrol panelinin menüsünden de sorgulanabilir; kılavuza göre en fazla 5 arıza mesajı gösterilir."
  - q: "Ekranda uyarı üçgeni var ama yanıp sönmüyor, CL de yok. Kilidi açabilir miyim?"
    a: "Kılavuzun arıza giderme tablosu bu iki durumu ayırıyor. Uyarı üçgeni sembolü göründüğünde yapılacak iş gösterilen arıza kodunu yetkili teknik servise bildirmektir. Kilidi açma adımı yalnız uyarı üçgeni ve CL (ya da arıza kodu) yanıp sönüp brülör devreye girmediğinde veriliyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin kontrol panelinde küçük siyah-beyaz bir ekran ve iki ok düğmesine uzanan bir el; ekranda okunabilir yazı yok"
---

Viessmann kombin ısıtmayı kesti ve ekranda **CL** ile birlikte yanıp sönen bir **uyarı üçgeni** görüyorsun. Viessmann'ın Vitodens 100-W/111-W/111-F ile Vitodens Connect ve Trend kullanma kılavuzları bu görüntüyü tek cümleyle açıklıyor: **"Brülör, bir arıza nedeniyle kilitlenmiştir."** Aynı kılavuzlar bir sonraki cümlede kilidin senin tarafından açılabileceğini de yazıyor. Bu yazıda o kısa işlemi, kılavuzun koyduğu sınırlarla birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** CL + yanıp sönen üçgen = brülör kilitlendi. Sıra şu: ok düğmeleriyle arıza numarasını gör → not et → iki ok düğmesine birlikte ~4 sn dokun → dönen çubuğu bekle. Kilidi art arda açmaya çalışma; CL geri gelirse arıza numarasıyla yetkili servis.

## Önce iki görüntüyü ayır

Kılavuzun "Ne yapmalı?" tablosu, uyarı üçgenini iki farklı satırda veriyor ve yapılacak iş bunlara göre değişiyor:

| Ekranda gördüğün | Kılavuzun önerisi |
|---|---|
| Uyarı üçgeni **sembolü görünür** | Gösterilen arıza kodunu yetkili teknik servise bildir. |
| Uyarı üçgeni ve **CL / arıza kodu yanıp söner**, brülör devreye girmiyor | Brülörün kilidini aç. Arıza tekrar meydana gelirse yetkili teknik servise haber ver. |

Kilidi açma adımı yalnız ikinci satır için. Kılavuza göre ekrandaki beyaz nokta (Lightguide) **hızlı yanıp sönüyorsa** da sistemde bir arıza mevcuttur.

## Adım adım: evde denenecekler

**1. Görüntüyü doğrula.** Ekranda CL ve yanıp sönen uyarı üçgeni olduğundan emin ol. Üçgen yanıp sönmeden sabit duruyorsa kilit açma adımı sana verilmiyor; arıza kodunu not et ve servise bildir.

**2. Arıza numarasını görüntüle.** Yukarı/aşağı ok düğmelerine dokunarak arıza numarasını ekrana getir.

**3. Numarayı not et.** Kılavuz bunu ayrı bir adım olarak istiyor: bu sayede yetkili servis hazırlıklı olarak gelir.

**4. Kilidi aç.** Yukarı ve aşağı ok düğmelerine **birlikte yaklaşık 4 saniye** dokun.

**5. Dönen çubuğu bekle.** Ekranda dönen bir çubuk kilit açma işleminin başladığını gösterir. Arıza artık görünmüyorsa ana ekran açılır.

**6. Art arda deneme.** Kılavuzdaki tehlike uyarısı açık: brülörü **kısa aralıklarla birkaç kez açma**. Giderilmeyen arızalar hayati tehlike oluşturabilir.

**7. Geri gelirse servis.** CL tekrar ekrana gelirse not ettiğin arıza numarasıyla yetkili teknik servise haber ver.

Kılavuzda bir kolaylık notu da var: brülör arızası göstergesi önce menü düğmesine **4 saniye** basılarak kapatılabilir; kilit daha sonra yukarı ve aşağı ok düğmelerine aynı anda dokunularak açılabilir.

## Arıza mesajlarını sonradan sorgulamak

Ekrandaki arıza göstergesini „OK" ile onaylayıp giriş ekranına dönebilirsin. Kılavuza göre arızayı sonradan kontrol panelinin menüsünden sorgulamak da mümkün ve **en fazla 5 arıza mesajı** gösterilebiliyor. Arıza ancak daha sonraki bir tarihte giderilebilecekse mesaj **ertesi gün saat 7:00'de** yeniden gösteriliyor. Servisi aradığında bu listedeki numaraları da okuyabilirsin.

## Ne zaman servis

- **CL kilit açıldıktan sonra yeniden geliyorsa.** Kılavuzun talimatı tek: yetkili teknik servise haber ver. Servis, kılavuzun ifadesiyle, arızanın nedenini inceleyip giderebilir.
- **Uyarı üçgeni sabit görünüyorsa.** Bu durumda kilit açma adımı verilmiyor; gösterilen arıza kodu servise bildiriliyor.
- **Gazla ilgili bir şüphe varsa.** Kılavuz yakıt gelmemesini ayrı bir neden olarak sayıyor ve doğalgazda gaz dağıtım şirketinin aranmasını söylüyor.

⛔ **Kendin-çöz sınırı burada biter.** Bu yazıdaki adımların hepsi kontrol panelinin ön yüzündeki düğmelerle yapılır. Kombinin kapağını açmak, gaz ya da elektrik tarafına müdahale etmek bu rehberin kapsamında değil.

Kilitlenmeye yol açan kodların Vitotronic kontrol üniteli eski Vitodens 200-W ve 300-W serilerindeki karşılıkları için [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) yazısına bak. Ekranında CL değil **E3** varsa [Viessmann kombi E3 hatası](/blog/viessmann-kombi-e3-hatasi/), **E10** varsa [Viessmann kombi E10 hatası](/blog/viessmann-kombi-e10-hatasi/) yazısı seni ilgilendiriyor.

## Servisi aramadan önce kısa özet

1. Ekranda CL ve yanıp sönen uyarı üçgeni mi var, yoksa sabit bir üçgen mi?
2. Arıza numarası ne?
3. Kilit bir kez açıldıktan sonra CL geri geldi mi?
4. Ev soğuk mu, sıcak su da yok mu?

Kod ekranda yokken de ısınma kesilebilir: [kombi yanmıyor](/blog/kombi-yanmiyor/) ve [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazıları koda bağlı olmayan belirtileri anlatıyor.

Ekrandaki kodu, arıza numarasını ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
