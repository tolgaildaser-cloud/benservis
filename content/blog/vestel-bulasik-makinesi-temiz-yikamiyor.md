---
title: "Vestel bulaşık makinesi temiz yıkamıyor"
description: "Vestel bulaşık makinesi temiz yıkamıyorsa Vestel'in sırası: filtreler, püskürtme kolları, yerleştirme, deterjan ve program seçimi; servis sınırı."
slug: "vestel-bulasik-makinesi-temiz-yikamiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Üç belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200;
#   md5'ler 27 Eyl yerel kopyalarıyla birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (-f/-l).
# Web araması KULLANILMADI: adresler yayındaki vestel-bulasik-makinesi-f5-hatasi provenansından alındı.
#  B) BM 10502 X GI WIFI  https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff  (sayfa atıfları bu belgeye göre)
#  A) BM 8402 GI Pro WIFI https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410
#  C) BM-401 (eski nesil) https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# "Sorun Giderme" — "Bulaşıklarda kısmen yemek artıkları kalıyor." satırı üç belgede birebir (B s.46, A s.47, C s.37);
#   satır sınırları B s.46 sayfa görüntüsünden doğrulandı. Sebep | çözüm:
#   "Püskürtülen su ilgili yerlere ulaşmamış. / Bulaşıklar birbirine yaslanmış. | Bulaşıklarınızı birbirlerini engellemeyecek şekilde düzgün yerleştiriniz."
#   "Bulaşık sepeti fazla doldurulmuş. | Bulaşıklarınızı düzgünce yerleştiriniz, fazla olan bulaşıklarınızı cihanızdan boşaltınız."
#   "Fitreler tıkanmış. | Filtreleri temizleyerek açınız." · "Filtreler yanlış takılmış. | Filtreleri doğru takınız."
#   "Su boşaltma pompası tıkanmış olabilir. | Servis çağırınız."
#   "Çok az deterjan konulmuş. | Kılavuzda belirtilen miktarda deterjan koyunuz." · "Uygun olmayan deterjan kullanılmış. | Deterjan markanızı değiştiriniz."
#   "Püskürtme kolu yemek artıkları ile tıkanmış. | Püskürtme kolunu temizleyiniz."
#   "Uygun olmayan zayıf bir yıkama programı seçilmiş. | Kılavuzunuzdaki program dökümü kısmından bulaşıklarınız için uygun olan programı seçiniz."
#   Tablo girişi: "...Cihazınız hala normal çalışmasına devam etmiyorsa İletişim Merkezi ile irtibata geçiniz." (B s.45)
# Filtre temizliği B s.42 (C s.33-34) · püskürtme kolları B s.43 (C s.34) · "fişini çekiniz ve musluğunu kapatınız" C s.33 · yerleştirme B s.28
#   · "Yanlış yükleme, zayıf yıkama ve kurutma performansına yol açabilir." B s.33 · deterjan 25/15 cm3 B s.26 (C s.22) · kısa programlarda toz deterjan B s.35.
# BİLEREK YAZILMAYANLAR: tahliye pompası temizliği (B s.43'te kullanıcıya tarif ediliyor, ama sorun giderme tablosu bu sebep için
#   "Servis çağırınız" diyor → tabloya uyuldu, #31) · rezistans/pompa/kart teşhisi (belgede yok) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makinenin fişini çek ve su musluğunu kapat."
  - "Filtre grubunu saatin aksi yönde çevirip yukarı kaldırarak çıkar ve filtreleri bol suyla durula."
  - "Filtreleri birleştir, filtre grubunu yerine tak ve saat yönünde çevir."
  - "Püskürtme kollarının deliklerini kontrol et; tıkalıysa kolları çıkarıp su altında temizle."
  - "Bulaşıkların kaba kalıntılarını sıyır ve bulaşıkları birbirini engellemeyecek şekilde yerleştir."
  - "Sepeti aşırı doldurma; fazla bulaşığı çıkar ve kolların dönüşünü engelleyen parça bırakma."
  - "Deterjanı kılavuzda belirtilen miktarda koy."
  - "Bulaşığın kirliliğine uygun programı seç; sonuç değişmezse servis çağır."
faq:
  - q: "Vestel bulaşık makinesi bulaşıkları temiz yıkamıyor, neden?"
    a: "Vestel'in kullanım kılavuzlarındaki sorun giderme tablosu 'Bulaşıklarda kısmen yemek artıkları kalıyor' başlığında şu sebepleri sayıyor: bulaşıkların birbirine yaslanması ya da suyun ilgili yerlere ulaşmaması, sepetin fazla doldurulması, filtrelerin tıkanması ya da yanlış takılması, su boşaltma pompasının tıkanmış olabilmesi, çok az ya da uygun olmayan deterjan, püskürtme kolunun yemek artıklarıyla tıkanması ve zayıf bir program seçilmesi."
  - q: "Filtreleri ne sıklıkla temizlemeliyim?"
    a: "Vestel, filtrelerin ve püskürtme kollarının en az haftada bir temizlenmesini istiyor. Kılavuza göre makine asla filtresiz kullanılmamalı, filtrenin hatalı takılması da yıkama verimini azaltır."
  - q: "Ne kadar deterjan koymalıyım?"
    a: "Vestel'in kılavuzuna göre bulaşıklar çok kirli ve makine tam doluysa deterjan haznesinin büyük kısmına 25 cm3 seviyesine kadar, az kirli ve makine tam dolu değilse 15 cm3 seviyesine kadar deterjan konur. Uygun olmayan deterjan kullanıldığında tablonun önerisi deterjan markasını değiştirmektir."
  - q: "Hepsi bir arada tablet kullanıyorum, sonuç kötü. Ne yapmalıyım?"
    a: "Vestel, ikisi ya da üçü bir arada deterjanlarla iyi yıkama sonucu alınamıyorsa deterjan üreticisine başvurulmasını öneriyor. Kılavuza göre tablet deterjanların çözünürlüğü sıcaklığa ve süreye göre değişir; kısa ve düşük sıcaklıkta çalışan programlarda bu deterjanlar tavsiye edilmez, bu programlarda toz deterjan daha uygundur."
  - q: "Pompa tıkanmış olabilir mi, pompayı ben mi temizlemeliyim?"
    a: "Vestel'in sorun giderme tablosu su boşaltma pompasının tıkanmış olabileceği durum için tek bir çözüm veriyor: servis çağırın. Program bittikten sonra makinede su kalıyorsa önce su boşaltma hortumunun tıkalı ya da katlanmış olmadığına ve filtrelere bak."
images:
  coverAlt: "Kapağı açık bir bulaşık makinesinin alt sepeti ve tabandaki filtre grubu; yanda çıkarılmış filtre parçaları"
---

Program bitti, kapağı açtın ve tabakların üzerinde yemek artıkları duruyor. Vestel'in bulaşık makinesi kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun ayrı bir satırı var: **"Bulaşıklarda kısmen yemek artıkları kalıyor."** Altında sayılan sebeplerin çoğu kullanıcının kontrol edebileceği şeyler: **yerleştirme, sepetin doluluğu, filtreler, püskürtme kolları, deterjan ve program seçimi.** Tabloda tek bir sebep doğrudan servise gidiyor: **su boşaltma pompasının tıkanmış olabilmesi.** Bu yazıda Vestel'in sırasını, aynı kılavuzların bakım ve yerleştirme bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, musluğu kapat → filtreleri çıkar, durula, doğru tak → püskürtme kollarının deliklerini aç → kaba artıkları sıyır, bulaşıkları birbirini engellemeden yerleştir → sepeti aşırı doldurma → deterjanı kılavuzdaki miktarda koy → uygun programı seç. Sonuç değişmezse servis.

## Adım adım: evde denenecekler

**1. Fişi çek, musluğu kapat.** Vestel, makineyi temizlemeden önce **fişin çekilmesini ve musluğun kapatılmasını** istiyor.

**2. Filtreleri çıkar ve durula.** Tablodaki sebeplerden biri: **filtreler tıkanmış**; çözüm **filtreleri temizleyerek açmak.** Vestel'in bakım bölümündeki sıra: filtre grubunu **saatin aksi yönde çevirip yukarı kaldırarak** çıkar, kalın filtreyi çekerek mikro filtreden ayır, ardından metal filtreyi çekip çıkar. Filtreleri **kalıntılardan temizlenene kadar bol suyla** durula. Kalın ve ince filtrelerde yemek artığı ya da yabancı nesne kalmışsa sıyırıp suyla iyice temizle.

**3. Filtreleri doğru tak.** Tablodaki bir sonraki sebep: **filtreler yanlış takılmış.** Filtreleri tekrar birleştir, filtre grubunu yerine tak ve **saat yönünde** çevir. Vestel'in iki notu var: bulaşık makinesi **asla filtresiz kullanılmaz**; filtrenin **hatalı takılması yıkama verimini azaltır.**

**4. Püskürtme kollarına bak.** Tablodaki sebep: **püskürtme kolu yemek artıkları ile tıkanmış**; çözüm **püskürtme kolunu temizlemek.** Vestel, püskürtme deliklerinin tıkalı olmadığından ve kollara yemek artığı ya da yabancı nesne sıkışmadığından emin olunmasını istiyor. Tıkanıklık varsa kolları çıkar ve **su altında** temizle. BM 10502 kılavuzuna göre üst kolu çıkarmak için kolu sabit tutup **somunu saatin aksi yönde** çevirir ve kolu aşağı çekersin; geri takarken somunun uygun şekilde sıkıldığından emin ol.

**5. Yerleştirmeyi düzelt.** Tablodaki sebepler: **bulaşıklar birbirine yaslanmış**, **püskürtülen su ilgili yerlere ulaşmamış.** Çözüm, bulaşıkları **birbirlerini engellemeyecek şekilde** düzgün yerleştirmek. Vestel'in yerleştirme önerileri: bulaşıkları makineye koymadan önce **kaba kalıntıları sıyır**; bulaşıklar ve çatal bıçaklar **birbirinin üzerine** konmaz; fincan, bardak ve tencereler **açık ağızları aşağı bakacak** şekilde yerleştirilir; büyük ve çok kirli parçalar (tencere, tava, kapak, tabak, kase) **alt rafa** konur.

**6. Sepeti aşırı doldurma.** Tablodaki sebep: **bulaşık sepeti fazla doldurulmuş**; çözüm bulaşıkları düzgünce yerleştirmek ve **fazla olanları makineden çıkarmak.** Vestel ayrıca **püskürtme kollarının dönüşünün engellenmemesini** istiyor ve yanlış yüklemenin **zayıf yıkama ve kurutma performansına** yol açabileceğini yazıyor.

**7. Deterjanı ölç.** Tablodaki sebep: **çok az deterjan konulmuş**; çözüm **kılavuzda belirtilen miktarda** deterjan koymak. Vestel'in kılavuzuna göre bulaşıklar çok kirli ve makine tam doluysa deterjan haznesinin büyük kısmına **25 cm3**, az kirli ve makine tam dolu değilse **15 cm3** seviyesine kadar deterjan konur. **Uygun olmayan deterjan** kullanıldıysa tablonun önerisi deterjan markasını değiştirmek.

**8. Uygun programı seç.** Tablodaki son sebep: **uygun olmayan zayıf bir yıkama programı seçilmiş.** Kılavuzunun program dökümü bölümünden bulaşıklarının kirliliğine uygun programı seç. Bütün bunlara rağmen artık kalıyorsa sıradaki madde tabloda servise gidiyor (aşağıda).

## Pompa: tabloda servisin işi

Vestel'in tablosu aynı başlıkta bir sebebi daha sayıyor: **su boşaltma pompası tıkanmış olabilir.** Karşısındaki çözüm tek cümle: **"Servis çağırınız."** Program bittikten sonra makinede su kalıyorsa tablonun başka bir satırı devreye giriyor: **su boşaltma hortumu tıkalı ya da katlanmış olabilir, filtreler tıkanmış olabilir** ya da **program henüz sona ermemiş** olabilir. Hortumu ve filtreleri kontrol et, programın bitmesini bekle.

## Tablet deterjan kullanıyorsan

Vestel'e göre kombine (2'si 1, 3'ü 1 arada) deterjanlar yalnızca **belirli kullanım şartlarında** yeterli sonuç verir. Bu deterjanlarla iyi yıkama sonucu alamıyorsan (bulaşıklar kireçli ve ıslak kalıyorsa) **deterjan üreticisine başvur.** Tablet deterjanların çözünürlüğü sıcaklığa ve süreye göre değiştiği için **kısa ve düşük sıcaklıkta çalışan programlarda** bu deterjanlar tavsiye edilmez; Vestel bu programlar için **toz deterjanı** daha uygun buluyor. Tabletler daima deterjan kabındaki deterjan bölmesine konur.

Taban filtresi temizliğinin ayrıntılı anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında; markadan bağımsız sebepler için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) yazısına bakabilirsin. Bulaşıklar temiz ama ıslak çıkıyorsa: [Vestel bulaşık makinesi kurutmuyor](/blog/vestel-bulasik-makinesi-kurutmuyor/).

## Sınır nerede biter

Filtreler temiz ve doğru takılı, püskürtme kolları açık, yerleştirme ve deterjan kılavuza uygun, program doğru ve bulaşıklarda hâlâ artık kalıyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor: tablonun girişindeki cümleyle **İletişim Merkezi ile irtibata geç**; pompa tıkanıklığı ihtimali için tablonun çözümü **servis çağırmak.**

⛔ **Kendin-çöz sınırı burada biter.** Filtreler, püskürtme kolları, yerleştirme ve deterjan kullanıcıya; pompa ve makinenin içi servise aittir.

Ekranda bir hata kodu yanıyorsa önce kodun anlamına bak: [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/).

## Servisi aramadan önce iki dakikalık özet

1. Artık hep aynı sepette mi, aynı bölgede mi kalıyor?
2. Filtreler en son ne zaman temizlendi, doğru takıldı mı?
3. Püskürtme kollarının delikleri açık mı, kollar serbestçe dönüyor mu?
4. Hangi program ve ne kadar deterjan (toz mu tablet mi) kullanıldı?
5. Program bitince makinenin tabanında su kalıyor mu?

Bu beşine cevabın varsa servise "temiz yıkamıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
