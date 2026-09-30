---
title: "Bosch buzdolabı soğutmuyor: evde çözüm"
description: "Bosch buzdolabı soğutmuyor ya da sıcaklık ayardan farklı mı? Bosch kılavuzunun sırası: sergileme modu, kapat-aç, hava açıklıkları, kapı ve kapasite."
slug: "bosch-buzdolabi-sogutmuyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgenin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-siemens-buzdolabi-sprint/bosch-8001233803_C.pdf · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzu  https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
# Arıza tablosu (K s.25-27, "14 Arızaları giderme"):
#   s.25 "Cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor." → "Sergileme modu devreye sokulmuştur. 1. Cihazı kapatınız. 2. 2 dakika bekleyiniz. 3. Cihazı tekrar açınız.
#     4. 1 dakika bekleyiniz ve ardından 4 akustik sinyal duyulana kadar (Soğutucu bölmesi) tuşunu basılı tutunuz. 5. Kısa bir süre sonra cihazınızın soğutup soğutmadığını kontrol ediniz."
#   s.25-26 Kapı alarmı: "İkaz sesi duyulur, sıcaklık göstergesi (soğutucu bölmesi) … ve ışıklı çubuk yanıp söner." → "Soğutucu bölmesi kapağını kapatınız." (dondurucu için aynı: "Dondurucu bölmesi kapağını kapatınız.")
#   s.26 Sıcaklık alarmı: "İkaz sesi duyulur, ayarlanan sıcaklık göstergesi (dondurucu bölmesi) … ve ışıklı çubuk yanıp söner." → "[simge] tuşuna basınız. a Alarm kapatılır."
#     · "Dış hava açıklıklarının üzeri kapanmış. ▶ Dış hava açıklıklarının önündeki engelleri gideriniz." · "Cihaza çok fazla miktarda taze besin yerleştirilmiş. ▶ Dondurma kapasitesini aşmayınız."
#   s.27 "Sıcaklık derecesi, yapılmış ayardan çok daha farklı." → "Farklı sebepler söz konusu olabilir. 1. Cihazı kapatınız. 2. Cihazı yakl. 5 saniye sonra yeniden açınız.
#     ‒ Sıcaklık derecesi çok yüksekse sıcaklığı birkaç saat sonra yeniden kontrol ediniz. ‒ Sıcaklık derecesi çok düşükse sıcaklığı sonraki gün yeniden kontrol ediniz."
#   s.27 "Ayarlanan sıcaklığa ulaşılamıyor. Tam otomatik buz çözme artık çalışmıyor." → dondurucu kapağı çok uzun açık kaldı, evaporatör buzlandı → ayrı sayfa: bosch-buzdolabi-buzlanma-yapiyor (kardeş taslak).
# Diğer: K s.16 açma ("sembolüne 3 saniye basılı tutunuz. a Cihaz soğutmaya başlar.") · K s.17 kapatma ("3 saniye süreyle basılı tutunuz.")
#   · K s.17 "Cihazı çalıştırdığınızda ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır." · K s.17 soğutucu önerilen 4 °C, dondurucu önerilen −18 °C
#   · K s.18 "2 kg'dan fazla yiyecek miktarlarını depolamadan 4 ile 6 saat önce Süper dondurma ayarlanmalıdır." · K s.19 sıcaklık alarmı şu durumlarda devreye girebilir (cihaz çalıştırılıyor / çok miktarda taze besin / dondurucu kapağı çok uzun açık)
#   · K s.19 "Sıcaklık alarmının kapatılması ▶ [simge] basınız. a İkaz sesi kapalıdır." · K s.25 onarım yalnız eğitimli uzman personel · K s.30-31 müşteri hizmetleri, E-Nr./FD.
# NOT (simge): açma/kapama ve alarm tuşlarının simgeleri PDF metin katmanında okunmuyor; yazıda bölüm adıyla ("Cihazın kapatılması", alarm kapatma tuşu) anıldı, simge tarif edilmedi.
# NOT (sergileme modu): kılavuz modun ne olduğunu açıklamıyor; yazıda yalnız adı ve çıkış adımları verildi, açıklama uydurulmadı.
# BİLEREK YAZILMAYANLAR: gaz, kompresör, termostat, sensör teşhisi (belgede yok) · tatil/enerji tasarrufu modu (arıza tablosunda soğutmama nedeni olarak geçmiyor) · kapı contası testi (bu belgenin tablosunda yok) · süre/fiyat (#46).
# Alıntı denetim tablosu: bosch-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (birkaç saatlik bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekran ve iç aydınlatma yanıyor ama cihaz soğutmuyorsa cihazı kapat, 2 dakika bekle ve yeniden aç."
  - "1 dakika bekle, sonra Soğutucu bölmesi tuşunu 4 sinyal duyulana kadar basılı tut ve kısa süre sonra soğutmayı kontrol et."
  - "Sıcaklık ayardan çok farklıysa cihazı kapat ve yaklaşık 5 saniye sonra yeniden aç."
  - "Sıcaklık çok yüksekse birkaç saat sonra, çok düşükse ertesi gün yeniden kontrol et."
  - "İkaz sesi duyuluyor ve bölmenin sıcaklık göstergesi yanıp sönüyorsa o bölmenin kapağını kapat."
  - "Dış hava açıklıklarının önündeki engelleri kaldır."
  - "Cihaza bir kerede çok fazla taze besin koyma; dondurma kapasitesini aşma."
faq:
  - q: "Bosch buzdolabımın ekranı ve ışığı yanıyor ama hiç soğutmuyor, neden?"
    a: "Bosch'un kullanım kılavuzundaki arıza tablosu bu belirti için tek bir neden yazıyor: sergileme modu devreye sokulmuş. Bosch'un çıkış sırası: cihazı kapat, 2 dakika bekle, yeniden aç, 1 dakika bekle ve Soğutucu bölmesi tuşunu 4 akustik sinyal duyulana kadar basılı tut. Kısa bir süre sonra cihazın soğutup soğutmadığını kontrol et."
  - q: "Buzdolabını yeni çalıştırdım, sıcaklık hâlâ yüksek. Arıza mı?"
    a: "Bosch'a göre cihazı çalıştırdığında ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır ve o zamana kadar yiyecek yerleştirilmemeli. Arıza tablosu da sıcaklık ayardan çok farklıysa cihazı kapatıp yaklaşık 5 saniye sonra yeniden açmayı, sıcaklık çok yüksekse birkaç saat sonra, çok düşükse ertesi gün yeniden kontrol etmeyi söylüyor."
  - q: "Bosch buzdolabım öttü ve dondurucu sıcaklığı yanıp sönüyor, ne yapmalıyım?"
    a: "Bosch'a göre bu sıcaklık alarmı. Önce alarm kapatma tuşuna basarak sesi kapat. Arıza tablosu iki neden sayıyor: dış hava açıklıklarının üzeri kapanmış olabilir, önündeki engelleri kaldır; ya da cihaza çok fazla taze besin konmuş olabilir, dondurma kapasitesini aşma. Kılavuz ayrıca dondurucu kapağı çok uzun açık kaldıysa dondurulmuş yiyeceklerin çözülüp çözülmediğini kontrol etmeni istiyor."
  - q: "Bosch buzdolabı için önerilen sıcaklık kaç derece?"
    a: "Bosch'un KGN76.. kılavuzuna göre soğutucu bölmesi için önerilen sıcaklık 4 °C, derin dondurucu bölüm için −18 °C."
images:
  coverAlt: "Kapısı açık kombi buzdolabının içinde raflara dizilmiş yiyecekler; bir el üst kapıdaki kumanda panelinin tuşuna basıyor"
---

Buzdolabının ışığı yanıyor, ekranı çalışıyor ama içerisi soğumuyor; ya da ekrandaki derece ayarladığın değerden çok farklı. Bosch'un KGN76.. serisi kombi buzdolabı kullanım kılavuzundaki arıza tablosu bu durum için birkaç ayrı satır veriyor. En dikkat çekeni şu: **"Cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor."** Bosch'a göre bunun nedeni **"Sergileme modu devreye sokulmuştur."** Diğer satırlar sıcaklığın ayardan sapması, kapı ve sıcaklık alarmı, kapanmış hava açıklıkları ve bir kerede çok fazla yiyecek. Hepsi evde kontrol edilebiliyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran ve ışık yanıyor ama soğutmuyor → kapat, 2 dk bekle, aç, 1 dk bekle, Soğutucu bölmesi tuşunu 4 sinyale kadar basılı tut. Sıcaklık ayardan farklı → kapat, 5 sn sonra aç, birkaç saat ya da ertesi gün tekrar bak. Ötüyor ve derece yanıp sönüyor → kapağı kapat, hava açıklıklarını aç, fazla yiyecek koyma.

## Adım adım: evde denenecekler

**1. Kapat, 2 dakika bekle, aç.** Göstergeler ve iç aydınlatma yandığı hâlde cihaz soğutmuyorsa Bosch'un tablosuna göre **sergileme modu** açık. Çıkış sırasının ilk yarısı: cihazı kapat (kılavuzun "Cihazın kapatılması" bölümüne göre kapatma tuşunu **3 saniye** basılı tutarak), **2 dakika** bekle, sonra cihazı yeniden aç.

**2. Soğutucu bölmesi tuşunu basılı tut.** Cihazı açtıktan sonra **1 dakika** bekle, ardından **Soğutucu bölmesi** tuşunu **4 akustik sinyal** duyulana kadar basılı tut. Bosch kısa bir süre sonra cihazın soğutup soğutmadığını kontrol etmeni istiyor.

**3. Sıcaklık sapıyorsa kapatıp aç.** Ekrandaki sıcaklık ayarladığın değerden çok farklıysa Bosch'un tablosu **"Farklı sebepler söz konusu olabilir."** diyor ve önce basit bir yol veriyor: cihazı kapat, **yaklaşık 5 saniye** sonra yeniden aç.

**4. Zaman tanı.** Bosch'a göre sıcaklık **çok yüksekse birkaç saat sonra**, **çok düşükse ertesi gün** yeniden kontrol et. Kılavuzun çalıştırma bilgileri de aynı şeyi söylüyor: cihazı çalıştırdığında ayarlanan sıcaklığa **ancak birkaç saat sonra** ulaşılır ve o zamana kadar yiyecek yerleştirilmemeli. Bosch'un önerdiği değerler soğutucu bölmesi için **4 °C**, derin dondurucu için **−18 °C**. Genel bilgi [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısında.

**5. Kapıyı kapat.** Bir ikaz sesi duyuluyor ve bir bölmenin sıcaklık göstergesi ile ışıklı çubuk yanıp sönüyorsa Bosch'a göre **kapı alarmı** açık: o bölmenin kapağı açık kalmış. Çözüm, **kapağı kapatmak.** Kapı tam kapanmıyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısına bak.

**6. Hava açıklıklarını aç.** Dondurucu bölmesinin ayarlanan sıcaklık göstergesi yanıp sönüyor ve ikaz sesi geliyorsa bu **sıcaklık alarmı.** Önce alarm kapatma tuşuna basarak sesi kapat. Bosch'un tablosundaki ilk neden: **dış hava açıklıklarının üzeri kapanmış.** Önündeki engelleri kaldır. Kılavuzun kurulum yeri bölümü de dış hava açıklıklarının **asla kapatılmamasını ya da örtülmemesini** istiyor.

**7. Dondurma kapasitesini aşma.** Sıcaklık alarmının ikinci nedeni: **cihaza çok fazla miktarda taze besin yerleştirilmiş.** Bosch'un çözümü **dondurma kapasitesini aşmamak.** Kılavuza göre **2 kg'dan fazla** yiyeceği depolamadan **4 ile 6 saat önce Süper dondurma** açılmalı.

## Dondurucu kapağı uzun süre açık kaldıysa

Bosch'un tablosunda bir satır daha var: **"Ayarlanan sıcaklığa ulaşılamıyor. Tam otomatik buz çözme artık çalışmıyor."** Nedeni, derin dondurucu kapağının çok uzun süre açık kalması ve NoFrost sistemindeki evaporatörün çok fazla buzlanması. Bu durumda Bosch elle buz çözme sırası veriyor; adımları [Bosch buzdolabı buzlanma yapıyor](/blog/bosch-buzdolabi-buzlanma-yapiyor/) yazısında anlattık.

Sıcaklık alarmı çaldıysa bir uyarı daha: Bosch'a göre **buzu çözülmeye başlamış ya da çözülmüş yiyecekler tekrar dondurulmamalı;** ancak pişirildikten ya da kızartıldıktan sonra yeniden dondurulabilir.

## Ne zaman servis

Sergileme modundan çıkış, kapat-aç ve bekleme adımlarından sonra da cihaz soğutmuyorsa yetkili servise başvur. Bosch'un kılavuzu **cihazdaki onarımları yalnız bunun eğitimini almış uzman personelin yapabileceğini** yazıyor. Ararken cihazın **tip etiketindeki ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır bulundur.

⛔ **Kendin-çöz sınırı burada biter.** Arka kapağı açmak, gaz ya da elektrik tarafına müdahale etmek kullanıcının işi değil.

Markadan bağımsız nedenler için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına bakabilirsin. Paneldeki alarm ve göstergelerin geniş anlatımı [Bosch buzdolabı hata kodları](/blog/bosch-buzdolabi-hata-kodlari/) sayfasında.

---

**Kaynak künyesi.** Nedenler ve adımlar Bosch'un "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzunun "Arızaları giderme" tablosundan ve aynı kılavuzun kullanım, alarm ve kurulum bölümlerinden alınmıştır. Senin cihazın farklı bir seriyse tuş adları ve sıra farklı olabilir; **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
