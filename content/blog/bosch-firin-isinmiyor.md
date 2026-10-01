---
title: "Bosch fırın ısınmıyor: evde kontrol"
description: "Bosch ankastre fırın ısıtmıyor ya da çalışmıyorsa Bosch'un arıza tablosundaki sıra: fiş, sigorta, sıcaklık düğmesi, saat, çocuk kilidi, servis."
slug: "bosch-firin-isinmiyor"
date: "2026-10-01"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-01, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (sayfa no = PDF sayfası).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  B1) Bosch "Ankastre fırın FRMA226. — Kullanım kılavuzu ve kurulum talimatları", 40 s., md5 a86b168874d8778ca41272c5d7166c07
#      https://media3.bsh-group.com/Documents/9001771866_D.pdf
#      s.17 "Cihaz çalışmıyor." → "Şebeke bağlantı kablosunun elektrik fişi takılı değil. ▶ Cihazı elektrik şebekesine bağlayınız." / "Sigorta kutusundaki sigorta atmış. ▶ Sigorta kutusundaki ilgili sigortayı kontrol ediniz." / "Elektrik beslemesi kesildi. ▶ Oda aydınlatmasının veya odadaki diğer cihazların çalışıp çalışmadığını kontrol ediniz."
#      s.17 "Cihaz süre dolduktan sonra tamamen kapanmıyor." → "Bir süre sonra cihaz ısınmayı durduruyor. Fırın lambası ve soğutma fanı kapanmıyor." → "▶ Fonksiyon seçme düğmesi sıfır konumuna çevrilmelidir."
#      s.18 "Ekranda saat yanıp söner." → "Elektrik beslemesi kesildi. ▶ Saati yeniden ayarlayınız." / "... yanıyor ve cihaz ayarlanamıyor." → "Çocuk kilidi etkinleştirildi. ▶ Çocuk kilidini ... tuşuyla devre dışı bırakınız." / "Ekranda ... içeren bir mesaj görüntülenir" → "Elektronik arızası 1. ... tuşuna basınız. ... a Arıza bir defaya mahsus ise hata mesajı kaybolur. 2. Hata mesajı tekrar belirirse müşteri hizmetlerini arayınız. Hata mesajını ve cihazın E numarasını eksiksiz olarak belirtiniz."
#      s.7 Sıcaklık seçme düğmesi: "Sıfır konumu — Cihaz ısıtmıyor." / s.6 "Cihaz tipine bağlı olarak sıcaklık seçme düğmesi aşağı bastırılabilir. İçeri itmek veya dışarı çıkarmak için sıfır konumundayken sıcaklık seçme düğmesine basılmalıdır."
#      s.11 "Not: Bir elektrik kesintisinden sonra çocuk emniyeti artık etkin değildir." / "Çocuk kilidini devre dışı bırakmak için, ekranda ... sönene kadar ... tuşu basılı tutulmalıdır."
#      s.17 "Sadece eğitimini almış uzman personel cihazda onarımlar yapabilir. ▶ Cihazın arızalanması halinde müşteri hizmetlerini arayın."
#      s.19 "Müşteri hizmetlerine başvurduğunuzda cihazınızın ürün numarasını (E-Nr.) ve imalat numarasını (FD) hazır bulundurunuz." / "Numaraların yer aldığı tip plaketini, cihazın kapağını açtığınızda görebilirsiniz."
#  B2) Bosch "Ankastre fırın FRGA103I — Kullanım kılavuzu ve kurulum talimatları", 32 s., md5 1863661017c72bd0385ba56db04e62de
#      https://media3.bsh-group.com/Documents/9001627929_B.pdf
#      s.14 "Cihaz çalışmıyor." → fiş / sigorta / elektrik beslemesi (B1 ile aynı) + "Elektronik hatası 1. Sigortayı kapatarak cihazı kısa süreliğine elektrik şebekesinden ayırınız. 2. Temel ayarları fabrika ayarlarına geri döndürünüz."
#      s.6 "Sıfır konumu — Cihaz ısıtmıyor."
#  B3) Bosch "[tr] Kullanma kılavuzu Ankastre fırın HBB23C...", 20 s., md5 5544858a428c91894c15726616c53729
#      https://media3.bsh-group.com/Documents/9000728669_B.pdf
#      s.11 "Fırın ısınmıyor." → "Bağlantılarda toz var." → "Döner düğmeleri her iki yönde de birkaç defa çeviriniz."
#      s.11 "Gösterge panelinde 0 sembolü ve dört adet sıfır yanıp söner." → "Elektrik akımını kesiniz." → "Saati tekrar ayarlayınız."
#      s.11 "Hata mesajı kaybolmazsa, Teknik Destek Servisine haber veriniz."
#      s.5 Sıcaklık kumandası "Sıfır konumu — Fırın ısınmıyor."
#  Okunup kullanılmayan aynı aileden: 9001944574_A (HBF512B.1T, md5 3fac75fc8fb8bbef288fcc478b030ece) ve 9001930148_F (HBJN10Y, md5 73afa0ad2328c7fe9bcbe06cc6d29177) — tabloları B1 ile aynı.
# BİLEREK YAZILMAYANLAR: sigorta değiştirme / elektrik kablosu (#31; kılavuz kablo değişimini üretici, müşteri hizmetleri ya da kalifiye kişiye veriyor); lamba değişimi (cam kapak ve lamba sökümü); fabrika ayarına dönüşün tuş sırası (modele özgü, yalnız "kılavuzundaki temel ayarlar bölümü" diye anıldı); rezistans, termostat, kart teşhisi (belgede yok); müşteri hizmetleri telefon numarası (güncelliği bu koşuda doğrulanmadı).
# Alıntı denetim tablosu: bosch-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Fırının fişinin takılı olduğunu kontrol et."
  - "Sigorta kutusunda fırının bağlı olduğu sigortanın atıp atmadığına bak."
  - "Odanın lambası ve diğer cihazlar çalışıyor mu bak; çalışmıyorsa elektrik beslemesi kesilmiş olabilir."
  - "Sıcaklık seçme düğmesi sıfır konumundaysa bir sıcaklığa çevir; sıfır konumunda fırın ısıtmaz."
  - "Ekranda saat yanıp sönüyorsa elektrik kesilmiş demektir; saati yeniden ayarla."
  - "Fırın ayar kabul etmiyorsa ve ekranda çocuk kilidi simgesi yanıyorsa çocuk kilidini tuşuyla kapat."
  - "Düğmeli modelde fırın ısınmıyorsa döner düğmeleri her iki yöne birkaç kez çevir."
faq:
  - q: "Bosch fırınım hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Bosch'un arıza tablosundaki 'Cihaz çalışmıyor' satırı üç kontrol veriyor: elektrik fişinin takılı olması, sigorta kutusundaki ilgili sigortanın atmamış olması ve elektrik beslemesinin kesilmemiş olması. Sonuncusu için Bosch, oda aydınlatmasının ya da odadaki diğer cihazların çalışıp çalışmadığına bakmanı söylüyor."
  - q: "Fırının ekranında saat yanıp sönüyor, ısıtmıyor."
    a: "Bosch'a göre ekranda saatin yanıp sönmesi elektrik beslemesinin kesildiğini gösterir; çözüm saati yeniden ayarlamak. HBB23C serisinde aynı durum gösterge panelinde 0 sembolü ve dört sıfırın yanıp sönmesiyle görünür."
  - q: "Ekranda bir hata mesajı var, ne yapmalıyım?"
    a: "Bosch'un FRMA226 kılavuzuna göre önce kılavuzda gösterilen tuşa bas; arıza bir defalıksa mesaj kaybolur, gerekirse saati yeniden ayarla. Hata mesajı tekrar belirirse müşteri hizmetlerini ara ve hata mesajını, cihazın E numarasıyla birlikte eksiksiz bildir. FRGA103I kılavuzu elektronik hatası için sigortayı kapatarak cihazı kısa süreliğine elektrikten ayırmanı ve temel ayarları fabrika ayarlarına döndürmeni öneriyor."
  - q: "Süre bitti, fırın ısıtmayı kesti ama lamba ve fan çalışıyor. Arıza mı?"
    a: "Hayır. Bosch'un tablosuna göre süre dolduktan sonra cihaz bir süre sonra ısınmayı durdurur, fırın lambası ve soğutma fanı ise açık kalır. Fonksiyon seçme düğmesini sıfır konumuna çevirdiğinde cihaz kapanır; soğutma fanı cihaz soğuduktan sonra kendiliğinden kapanır."
images:
  coverAlt: "Ankastre fırının ön panelinde sıfır konumunda duran döner sıcaklık düğmesi ve yanında yanıp sönen saat göstergesi"
---

Fırını açtın, fonksiyonu seçtin ama içerisi ısınmıyor; ya da fırın hiç tepki vermiyor. Bosch'un Türkçe ankastre fırın kılavuzlarındaki arıza tablosunda bu iki durum ayrı satırlarda: **"Cihaz çalışmıyor."** ve eski HBB23C serisinde **"Fırın ısınmıyor."** Bosch'un gösterdiği nedenlerin çoğu evde kontrol edilebiliyor: fiş, sigorta, elektrik kesintisi, sıfırda kalan sıcaklık düğmesi, yeniden ayarlanmamış saat ve çocuk kilidi. Bu yazıda Bosch'un FRMA226, FRGA103I ve HBB23C kılavuzlarındaki tabloları tek sırada topluyoruz; düğme ve simge düzeni modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş, sigorta ve evin elektriği → sıcaklık düğmesi sıfırda mı → ekranda saat yanıp sönüyorsa saati ayarla → ayar kabul etmiyorsa çocuk kilidini kapat → düğmeli modelde düğmeleri iki yöne birkaç kez çevir. Ekranda hata mesajı tekrar tekrar geliyorsa → Bosch müşteri hizmetleri, E numarasıyla.

## Bosch'un arıza tablosu ne diyor?

| Belirti | Bosch'un nedeni | Evde yapılacak |
|---|---|---|
| Cihaz çalışmıyor | Elektrik fişi takılı değil | Fişi tak |
| Cihaz çalışmıyor | Sigorta kutusundaki sigorta atmış | İlgili sigortayı kontrol et |
| Cihaz çalışmıyor | Elektrik beslemesi kesildi | Oda lambasına ve diğer cihazlara bak |
| Ekranda saat yanıp sönüyor | Elektrik beslemesi kesildi | Saati yeniden ayarla |
| Ekranda simge yanıyor, cihaz ayarlanamıyor | Çocuk kilidi etkin | Çocuk kilidini tuşuyla kapat |
| Fırın ısınmıyor (HBB23C) | Bağlantılarda toz var | Döner düğmeleri iki yöne birkaç kez çevir |
| Ekranda hata mesajı | Elektronik arızası | Tuşa bas; tekrar gelirse müşteri hizmetleri |

Bosch'un düğme açıklamalarında bir satır daha var: sıcaklık seçme düğmesinin **sıfır konumunda cihaz ısıtmıyor.**

## Adım adım: evde denenecekler

**1. Fiş.** Fırının fişinin takılı olduğunu kontrol et. Bosch'un tablosundaki ilk neden: **şebeke bağlantı kablosunun elektrik fişi takılı değil.**

**2. Sigorta.** Sigorta kutusunda fırının bağlı olduğu sigortanın atıp atmadığına bak. Bosch'un ifadesiyle: **sigorta kutusundaki ilgili sigortayı kontrol ediniz.**

**3. Evin elektriği.** Odanın lambası ve diğer cihazlar çalışıyor mu bak; çalışmıyorsa elektrik beslemesi kesilmiş olabilir. Bosch elektrik beslemesinin kesilip kesilmediğini bu yolla anlamanı öneriyor.

**4. Sıcaklık düğmesi.** Sıcaklık seçme düğmesi sıfır konumundaysa bir sıcaklığa çevir; sıfır konumunda fırın ısıtmaz. Bosch'un FRMA226 ve FRGA103I kılavuzlarındaki ayar tablosunda sıfır konumunun karşılığı tek cümle: **"Cihaz ısıtmıyor."** Bosch'a göre cihaz tipine bağlı olarak düğme içeri bastırılabilir; içeri itmek ya da dışarı çıkarmak için düğmeye **sıfır konumundayken** basılır.

**5. Saat.** Ekranda saat yanıp sönüyorsa elektrik kesilmiş demektir; saati yeniden ayarla. HBB23C serisinde bu durum gösterge panelinde **0 sembolü ve dört sıfırın** yanıp sönmesiyle görünür; çözüm yine saati yeniden ayarlamak.

**6. Çocuk kilidi.** Fırın ayar kabul etmiyorsa ve ekranda çocuk kilidi simgesi yanıyorsa çocuk kilidini tuşuyla kapat. FRMA226 kılavuzuna göre kilidi kapatmak için simge sönene kadar ilgili tuşu basılı tutman gerekiyor; kılavuz bir elektrik kesintisinden sonra çocuk emniyetinin artık etkin olmadığını da not ediyor.

**7. Düğmeleri çevir.** Düğmeli modelde fırın ısınmıyorsa döner düğmeleri her iki yöne birkaç kez çevir. Bosch'un HBB23C tablosu "Fırın ısınmıyor" satırının nedeni olarak **bağlantılarda toz** gösteriyor ve çözüm olarak bunu veriyor.

## Ekranda hata mesajı görürsen

Bosch'un FRMA226 kılavuzu elektronik arızası için iki aşama veriyor: önce kılavuzda gösterilen tuşa bas; **arıza bir defaya mahsus ise hata mesajı kaybolur,** gerekirse saati yeniden ayarla. Hata mesajı tekrar belirirse müşteri hizmetlerini ara. FRGA103I kılavuzu ise elektronik hatası için **sigortayı kapatarak cihazı kısa süreliğine elektrikten ayırmanı** ve temel ayarları fabrika ayarlarına döndürmeni öneriyor; fabrika ayarının adımları kendi modelinin kılavuzunda.

## Arıza olmayan bir durum

**Süre bitti, fırın ısıtmayı kesti ama lamba ve fan açık.** Bosch'un tablosuna göre süre dolduktan bir süre sonra cihaz ısınmayı durdurur; fırın lambası, soğutma fanı ve hava dolaşımlı ısıtma türlerinde arka paneldeki fan çalışmaya devam eder. Fonksiyon seçme düğmesini sıfır konumuna çevirdiğinde cihaz kapanır; soğutma fanı cihaz soğuduktan sonra kendiliğinden durur.

## Ne zaman servis?

Bosch'un sınırı net: **cihazda onarımları sadece eğitimini almış uzman personel yapabilir;** cihaz arızalandığında müşteri hizmetlerini ara. Ararken cihazın **ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır tut; Bosch'a göre bu numaraların yazdığı tip plaketi fırın kapağını açtığında görünür.

| Durum | Kimin işi |
|---|---|
| Fiş, sigortaya bakma, evin elektriği, sıcaklık düğmesi, saat, çocuk kilidi | Senin, bu rehberdeki adımlar |
| Hata mesajı tuşla bir kez silindi, geri gelmedi | Senin |
| Hata mesajı tekrar tekrar geliyor | Bosch müşteri hizmetleri, hata mesajı ve E-Nr. ile |
| Tüm kontroller tamam ama fırın ısınmıyor | Bosch müşteri hizmetleri |

⛔ Sigortayı değiştirmeye, elektrik kablosuna ya da fırının panellerini açmaya çalışma. Bosch'a göre zarar görmüş elektrik kablosu yalnız üretici, müşteri hizmetleri ya da benzer yetkinlikte bir kişi tarafından değiştirilmeli.

Pişirirken kapakta ve mobilyada su damlaları görüyorsan kardeş rehberimiz [Bosch fırın buhar yapıyor](/blog/bosch-firin-buhar-yapiyor/) yazısına geç. Markadan bağımsız anlatım için [fırın ısınmıyor](/blog/firin-isinmiyor/) sayfası var.

---

**Kaynak künyesi.** Arıza tablosu ve düğme açıklamaları Bosch'un Türkçe ankastre fırın kılavuzlarından (FRMA226, FRGA103I ve HBB23C serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
