---
title: "Fırın çalışmıyor ne yapmalı: kılavuzlardaki kontroller"
description: "Fırın hiç çalışmıyor, ekran tepki vermiyor ya da çalışırken duruyor mu? Simfer ve Gaggenau kılavuzlarındaki kontrol sırası ve servis sınırı."
slug: "firin-calismiyor-ne-yapmali"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P21 (YK #197 boşluk, BOSLUK.md #203, 2. dalga). Slug origin/main'de yok (ls-tree). Yakın: firin-isinmiyor (ısınma belirtisi), simfer-firin-calismiyor (markalı), vestel-firin-tuslari-calismiyor — "hiç çalışmıyor" için genel yazı yok.
# Kanıt: OT "fırın çalışmıyor" #1–#3.
# Kaynak (#88): iki üretici belgesi. (S) Simfer ankastre fırın kılavuzu, s.27, s.29, s.54, s.55. (G) Gaggenau GO220100 serisi kullanım kılavuzu, s.32, s.33. URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: rezistans, termostat, fan, kart ve kablo işlemleri (servis) · arıza kodu yorumu · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu", "Çalıştığını bildiğin başka bir elektrikli alet"]
steps:
  - "Ekran ya da iç lamba yanıyor mu bak; fişin takılı olduğunu ve odadaki diğer cihazların çalıştığını kontrol et."
  - "Sigorta kutusunda fırının sigortasına bak; atmışsa yeniden aç, tekrar atıyorsa elektrikçi çağır."
  - "Kapağın tam kapalı olduğundan emin ol."
  - "Ekranda çocuk kilidi simgesi ya da yanıp sönen saat simgesi varsa önce onu gider."
  - "Pişirme fonksiyonu ve sıcaklığın birlikte seçildiğini kontrol et."
  - "Çalışırken duruyorsa havalandırma boşluklarını ve aynı prizdeki diğer fişleri kontrol et."
  - "Bu kontroller sonuç vermezse fırını kullanmayı bırak ve yetkili servisi ara."
faq:
  - q: "Fırın hiç çalışmıyor, ilk ne yapmalıyım?"
    a: "İki kılavuz da aynı yerden başlıyor: elektrik. Simfer önce güç beslemesi olup olmadığını kontrol etmeni, Gaggenau ise fişin takılı olduğunu, sigortayı ve odadaki diğer cihazların çalışıp çalışmadığını bakmanı istiyor."
  - q: "Ekranda saat yanıp sönüyor, fırın ısıtmıyor, arıza mı?"
    a: "Simfer'in dijital zamanlayıcısında elektrik ilk geldiğinde fırın devre dışı oluyor ve ekranda saat ile bir simge yanıp sönüyor. Saat ayar tuşuna basılınca fırın devreye giriyor. Bu bir arıza değil."
  - q: "Fırın kendiliğinden kapanıyor, ne olabilir?"
    a: "Gaggenau kılavuzu, 12 saatten fazla işlem yapılmamışsa emniyet kapatmasının devreye girdiğini yazıyor. Simfer ise çalışırken güç kapanmasının nedenleri olarak soğutma fanını, kötü havalandırmayı ve aynı prizde birkaç fiş kullanılmasını sayıyor."
  - q: "Ekran tepki vermiyorsa ne yapmalıyım?"
    a: "Gaggenau kılavuzuna göre ekranda çocuk kilidi sembolü görünüyorsa kilidi devre dışı bırakman yeterli. Kilit yoksa sigorta kutusundan fırının sigortasını kapatıp yaklaşık 60 saniye sonra açman öneriliyor."
images:
  coverAlt: "Ekranı sönük bir ankastre fırın ve yanında sigorta kutusu çizimi"
  steps:
    - "Fırının fişini prize tutan beyaz eldivenli sade siluet el, yanında yanan oda lambası"
    - "Sigorta kutusunda aşağı inmiş bir şalteri yukarı kaldıran beyaz eldivenli sade siluet el"
    - "Fırın kapağını sonuna kadar kapatan beyaz eldivenli sade siluet el"
    - "Fırın ekranında kilit simgesine dokunan beyaz eldivenli sade siluet el"
    - "Fırının fonksiyon ve sıcaklık düğmelerini ayarlayan beyaz eldivenli sade siluet el"
    - "Fırının yan boşluklarının açık olduğunu gösteren çizim, prizde tek fiş"
    - "Fırının önünde duran kapalı bir telefon ve servis çağırma simgesi çizimi"
---

Düğmeyi çevirdin ama fırın ısınmıyor, ışığı yanmıyor ya da ekran hiç tepki vermiyor. Ya da fırın çalışıyor, yemeğin ortasında kendiliğinden duruyor. "Fırın çalışmıyor ne yapmalıyım" diye arayanlar için iki üreticinin kendi kullanım kılavuzunu okuduk: Simfer'in ankastre fırın kılavuzunu ve Gaggenau'nun dokunmatik ekranlı fırın kılavuzunu. İkisinde de kullanıcıya bırakılan kontroller aynı sırayı izliyor: önce elektrik, sonra kapak, sonra ayar. Simfer'in kılavuzu bu kontrolleri teknik servisi aramadan önce yapmanı, Gaggenau'nun kılavuzu ise küçük arızaları kendin gidererek gereksiz masraftan kaçınmanı öneriyor. Aşağıdaki adımlar bu iki belgeden alındı; belgelerde olmayan hiçbir işlem eklemedik.

> ⚡ **Kısa özet:** Elektriği ve sigortayı kontrol et. Kapağı kapat. Ekranda çocuk kilidi ya da yanıp sönen saat simgesi varsa onu gider. Hepsi doğruysa fırını kullanmayı bırak, servisi ara. Fırının içine ya da panelinin arkasına müdahale etme.

## Adım adım: servisten önce kontrol

**1. Elektrik geliyor mu?** Simfer'in sorun tablosunda "fırın çalışmıyor" satırının nedeni ürüne güç beslemesi yapılmıyor olması. Gaggenau üç şeye bakmanı istiyor: şebeke kablosunun fişi takılı mı, sigorta atmış mı, elektrik beslemesi kesilmiş mi. Elektrik kesintisini anlamak için kılavuz, oda aydınlatmasının ve odadaki diğer cihazların çalışıp çalışmadığına bakmanı söylüyor.

**2. Sigortayı kontrol et.** Gaggenau sigorta kutusundaki ilgili sigortaya bakmanı istiyor. Simfer sigortanın değiştirilmesini ya da devrenin sıfırlanmasını, durum sürekli tekrar ediyorsa bir elektrikçi çağırmanı yazıyor. Sorun tekrar ediyorsa kılavuzların ortak çözümü bir elektrikçi.

**3. Kapağı kapat.** Gaggenau "cihaz başlatılamıyor" belirtisinin nedenini kapağın tam kapanmamış olması olarak veriyor. Simfer de "fırın ısıtmıyor" satırında kapağın açık olabileceğini yazıyor ve kapağı kapatıp yeniden başlatmanı istiyor. Kapak ile iç bölüm arasında yemek artığı sıkışmışsa kapak düzgün açılmayabilir; Simfer fırını iyice temizleyip kapağı yeniden açmanı söylüyor. Temizlik için [fırın nasıl temizlenir](/blog/firin-nasil-temizlenir/) yazısına bakabilirsin.

**4. Ekrandaki simgeye bak.** Gaggenau'da ekranda çocuk kilidi sembolü görünüyorsa gösterge tepki vermiyor; çözümü kilidi devre dışı bırakmak. Yöntemi [fırın çocuk kilidi nasıl açılır](/blog/firin-cocuk-kilidi-nasil-acilir/) yazısında anlattık. Simfer'in dijital zamanlayıcısında elektrik ilk geldiğinde fırın devre dışı kalıyor, ekranda saat ve bir simge yanıp sönüyor; saat ayar tuşuna basınca fırın devreye giriyor. Gaggenau'da ekranda demo modu sembolü görünüyorsa cihaz ısınmıyor; kılavuz demo modunu temel ayarlardan kapatmanı istiyor.

**5. Fonksiyon ve sıcaklığı birlikte seç.** Simfer, "fırın ısıtmıyor" satırında kontrollerin doğru ayarlanmamış olabileceğini belirtiyor ve çalıştırma bölümünü okuyup fırını sıfırlamanı istiyor. Saat ayarı gerekiyorsa [Simfer fırın saat ayarı](/blog/simfer-firin-saat-ayari/) yazısındaki adımlara bak.

**6. Çalışırken duruyorsa havalandırmaya bak.** Simfer'in tablosunda çalışma sırasında güç kapanmasının üç nedeni var: soğutma fanı çalışmıyor olabilir, fırın havalandırması iyi olmayan bir yerde olabilir, aynı prizde birkaç fiş kullanılıyor olabilir. Önerisi sırayla fan sesini dinlemek, kurulum kılavuzundaki boşlukları bırakmak ve tek fiş kullanmak. Gaggenau'da ise 12 saatten fazla işlem yapılmamışsa cihaz emniyet kapatmasıyla kapanıyor; mesajı onaylayıp cihazı kapatman yeterli. Gaggenau, "hatalı kullanım" için sigorta kutusundan cihazın sigortasını kapatıp yaklaşık 60 saniye sonra yeniden açmanı da öneriyor.

**7. Kendin çözemiyorsan servis çağır.** Simfer sorun devam ederse servis merkeziyle iletişime geçmeni istiyor. Gaggenau'nun kılavuzu daha net: usulüne aykırı onarım tehlikeli, onarımı yalnız eğitimli uzman personel yapabilir ve elektrik kablosu zarar görmüşse uzman tarafından değiştirilmesi gerekir.

## Arıza sanılan normal durumlar

Simfer'in kılavuzu birkaç durumu arıza saymıyor. Pişirme bittikten sonra soğutma fanı belirli bir süre çalışmaya devam eder; fırının iç bölümünü havalandırdığı için bu sırada elektriğini kesme. Kapaktaki aralıktan buhar çıkması ya da fırının içinde su kalması yiyeceğe bağlı olarak oluşabilir; fırın soğuyunca kuru bir bezle sil. İlk kullanımda ısıtıcıdan duman çıkabilir, fırını iki üç kez çalıştırınca geçer. Yaklaşık 50 saniyeye kadar süren kısa elektrik kesintileri ise zamanlayıcıyı etkilemez; daha uzun kesintide ekranda saat 12:00 görünür ve saati yeniden ayarlaman gerekir.

## Ne zaman servis

- Elektrik, sigorta, kapak ve ayar doğru olduğu hâlde fırın tepki vermiyorsa
- Sigorta fırını her açışında atıyorsa (önce elektrikçi)
- Soğutma fanının sesi hiç gelmiyorsa
- Fırının gövdesine dokununca elektrik çarpıyorsa; Simfer'e göre bunun nedeni güç hattının topraklanmamış olması olabilir, fırını kullanmayı bırak ve topraklamayı bir elektrikçiye baktır

⛔ **Kendin-çöz sınırı burada biter.** Elektrik kontrolü, sigorta, kapak ve ayar sende. Rezistans, termostat, fan, kart ve kablo işleri yetkili servisin; fırının panellerini açma.

Fırın çalışıyor ama ısıtmıyorsa [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısına, markan Simfer ise [Simfer fırın çalışmıyor](/blog/simfer-firin-calismiyor/) yazısına bak.

## Servisi aramadan önce kısa özet

1. Fırının marka ve model numarası ne?
2. Ekran ve lamba yanıyor mu?
3. Fırın hiç mi çalışmıyor, yoksa yarıda mı duruyor?
4. Sigorta attı mı, kaç kez?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
