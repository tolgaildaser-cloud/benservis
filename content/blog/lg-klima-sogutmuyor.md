---
title: "LG klima soğutmuyor: evde ne kontrol edilir?"
description: "LG klima soğuk hava üflemiyorsa LG kılavuzunun sırası: mod ve sıcaklık ayarı, önündeki engeller, kirli filtre, açık kapı-pencere, ısı kaynağı."
slug: "lg-klima-sogutmuyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 30 Eyl belirti damarı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. ABD LG kaynağı kullanılmadı; ikisi de LG Türkiye (gscs-b2c.lge.com, Türkçe).
# #88: web araması YALNIZ belgelerin yerini bulmak için. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ · pdftotext -layout, sayfa = PDF sayfası.
#  D) LG "KULLANICI EL KİTABI KLİMA · TİP: DUVAR TİPİ" (5401758648, Türkçe; lg.com/tr S12ETK ürün sayfasının kılavuz listesinden, csSalesCode S12ETK.NSJ)
#     https://gscs-b2c.lge.com/downloadFile?fileId=oWezd6acEM51ZIvWrjKjw  42 s.  md5 370ac02f4f4bcfa0bf866058acdccd8e
#     (Metin katmanında bazı yazı tipleri 29 kod noktası kaymalı; kaynak klasördeki dec.py ile çözülüp okundu, anlam birebir.)
#  K) LG "KULLANICI EL KİTABI KLİMA" gizli tavan tipi kanallı (MFL67522523, Türkçe)
#     https://gscs-b2c.lge.com/open/downloadFile?fileId=RMV9u3J8EsbYsPNl3uhxw  28 s.  md5 88e9d7e61b646813e3b6f4cf868612b7
# "Klima soğuk hava üflemiyor" satırı (D s.36; K s.19-20 aynı içerik):
#   "Hava doğru şekilde dönmüyor. x Klimanın önünü kapatan perde, panjur veya mobilya parçası olmadığından emin olun."
#   "Hava filtresi kirli. x Hava filtresini 2 haftada bir temizleyin."
#   "Oda sıcaklığı çok yüksek. x Yaz mevsiminde, iç mekan havasını tamamen soğutmak biraz zaman alabilir. Bu durumda, iç mekan havasını hızlıca değiştirmek için Jet Modu seçin."
#   "Soğuk hava odadan çıkıyor. x Odadaki havalandırma deliklerinden soğuk havanın çıkmadığından emin olun."
#   "İstenilen sıcaklık mevcut sıcaklıktan daha yüksek. x İstenilen sıcaklığı geçerli sıcaklıktan daha düşük bir seviyeye ayarlayın."
#   "Yakınlarda ısı kaynağı var. x Klima çalışıyorken elektrikli fırın veya gazlı yakıcılar gibi ısı üreticiler kullanmaktan kaçının."
#   "Fan Modu seçildi. x ... iç mekan havasını ısıtmadan veya soğutmadan klima hava üfler. x Kullanım modunu soğutucu kullanımına getirin."
#   "Dış mekan sıcaklığı çok yüksek. x Soğutma etkisi yeterli olmayabilir."
#   K s.19: "Odanın kliması ilk açıldığında oda çok sıcak olabilir. • Odanın serinlemesi için zaman verin."
# D s.9 (kullanım ipuçları): "Klimayı çalıştırırken kapıları ve pencereleri sıkıca kapatın." / "Klimayı çalıştırırken panjur veya perdelerle güneş ışığını engelleyin." / "Hava filtresini 2 haftada bir temizleyin. Hava filtresinde toplanan toz ve kirler hava akışını engelleyebilir veya cihaz performansını düsürebilir."
# D s.32 filtre: "Gücü kapatın ve güç kablosunu prizden çekin." · tutma kollarından kaldırıp çıkar · "Elektrikli süpürgeyle veya nötr deterjanlı ılık su ile filtreleri temizleyin." · "Filtreleri gölgede kurumaya bırakın." · kancaları ön kapağa tak. D s.31 NOT: "en fazla 40 C sıcaklıkta su" · uçucu madde yok. D s.30 UYARI: bakım öncesi güç kes, fanlar durana kadar bekle.
# D s.34: "Hata meydana geldiğinde, iç mekan ünitesindeki lamba 2 saniye aralıkla yanıp söner. Bu durum meydana geldiğinde, yerel satıcınızla veya servis merkezi ile iletişime geçin." · "Sorun devam ederse, yerel servis merkezinizle iletişime geçin."
# D s.31 bakım tablosu: ısı değişim bobini ve fan temizliği "uzman birinden yardım alın" (yılda bir).
# BİLEREK YAZILMAYANLAR: gaz eksikliği/gaz dolumu teşhisi (LG soğutmama satırında yok) · dış ünite temizliği ya da dış üniteye erişim · ısı değişim bobini/fan temizliğini kullanıcıya verme (LG uzmana bırakıyor) · Jet Modu süre/sıcaklık rakamlarını genelleme (modele göre değişiyor) · fiyat.
# Alıntı denetim tablosu: lg-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Nötr deterjan ve ılık su", "Sağlam bir tabure"]
steps:
  - "Kumandada Fan modunun değil Soğutma modunun seçili olduğunu kontrol et."
  - "Ayar sıcaklığını odanın o anki sıcaklığından daha düşük bir değere getir."
  - "İç ünitenin önünü kapatan perde, panjur ya da mobilya varsa kaldır."
  - "Kapıları ve pencereleri kapat, soğuk havanın odadaki havalandırma deliklerinden kaçmadığından emin ol."
  - "Klima çalışırken elektrikli fırın ya da gazlı yakıcı gibi ısı üreten cihazları kullanma."
  - "Klimanın fişini çek, hava filtresini çıkar, süpürgeyle ya da nötr deterjanlı ılık suyla temizle, gölgede kurutup yerine tak."
  - "Oda çok sıcaksa Jet Modu'nu seç ve odanın serinlemesi için zaman ver."
  - "Soğutma yine yetersizse ya da iç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa LG yetkili servisine başvur."
faq:
  - q: "LG klima çalışıyor ama soğuk hava vermiyor, neden?"
    a: "LG'nin Türkçe kullanım kılavuzu 'Klima soğuk hava üflemiyor' satırında şu nedenleri sayıyor: klimanın önünü perde, panjur ya da mobilya kapatıyor; hava filtresi kirli; oda sıcaklığı çok yüksek; soğuk hava odadan kaçıyor; istenen sıcaklık mevcut sıcaklıktan yüksek; yakında ısı kaynağı var; Fan modu seçili ya da dışarıdaki sıcaklık çok yüksek."
  - q: "Fan modunda klima neden soğutmuyor?"
    a: "LG kılavuzuna göre Fan modunda klima iç mekan havasını ısıtmadan ya da soğutmadan yalnızca hava üfler. Çözüm, kullanım modunu soğutmaya getirmek."
  - q: "LG klimanın filtresini ne sıklıkla temizlemeliyim?"
    a: "LG hava filtresinin 2 haftada bir temizlenmesini istiyor. Kılavuza göre filtrede toplanan toz ve kir hava akışını engelleyebilir ya da cihaz performansını düşürebilir. Filtreyi süpürgeyle ya da nötr deterjanlı ılık suyla temizle, en fazla 40 derece su kullan ve gölgede kurut."
  - q: "Çok sıcak günlerde klima odayı yeterince serinletemiyor, arıza mı?"
    a: "Her zaman değil. LG kılavuzu dışarıdaki sıcaklık çok yüksekse soğutma etkisinin yeterli olmayabileceğini, yaz mevsiminde iç mekan havasını tamamen soğutmanın biraz zaman alabileceğini yazıyor ve bu durumda Jet Modu'nu öneriyor. İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa bu bir hata göstergesidir ve servis gerekir."
images:
  coverAlt: "Güneşli bir oturma odasında duvardaki beyaz split klima, perdeleri çekilmiş kapalı pencere ve klimaya doğrultulmuş uzaktan kumanda"
---

Klima çalışıyor, fan dönüyor ama oda serinlemiyor. LG'nin Türkçe kullanım kılavuzu bu durumu **"Klima soğuk hava üflemiyor"** başlığıyla ele alıyor ve arıza aramadan önce bakılacak sekiz nedeni sayıyor: yanlış mod, yüksek ayar sıcaklığı, önü kapalı iç ünite, kirli filtre, kaçan soğuk hava, yakındaki ısı kaynağı, çok sıcak oda ve çok sıcak hava. Bu yazıda LG'nin sırasını evde güvenle yapılabilecek adımlara çeviriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Soğutma modunda mısın, ayar sıcaklığı odadan düşük mü? İç ünitenin önünü aç, kapı ve pencereleri kapat, yakındaki ısı kaynaklarını kapat. Fişi çekip filtreyi temizle. Oda çok sıcaksa Jet Modu'nu seç ve zaman ver. İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa → LG yetkili servisi.

## LG'nin saydığı nedenler

| Kılavuzdaki neden | LG'nin çözümü |
|---|---|
| Fan Modu seçili | Kullanım modunu soğutmaya getir; Fan modunda klima havayı soğutmadan üfler |
| İstenen sıcaklık mevcut sıcaklıktan yüksek | Ayar sıcaklığını oda sıcaklığından düşük bir seviyeye getir |
| Hava doğru şekilde dönmüyor | Klimanın önünü kapatan perde, panjur ya da mobilya olmasın |
| Hava filtresi kirli | Filtreyi 2 haftada bir temizle |
| Soğuk hava odadan kaçıyor | Havalandırma deliklerinden soğuk hava çıkmasın |
| Yakında ısı kaynağı var | Klima çalışırken elektrikli fırın ya da gazlı yakıcı kullanma |
| Oda sıcaklığı çok yüksek | Yazın soğutma zaman alabilir; Jet Modu'nu seç |
| Dışarıdaki sıcaklık çok yüksek | Soğutma etkisi yeterli olmayabilir |

## Adım adım: evde denenecekler

**1. Mod.** Kumandada Fan modunun değil Soğutma modunun seçili olduğunu kontrol et. LG kılavuzuna göre Fan modunda klima iç mekan havasını ısıtmadan ya da soğutmadan yalnızca hava üfler.

**2. Ayar sıcaklığı.** Ayar sıcaklığını odanın o anki sıcaklığından daha düşük bir değere getir. İstenen sıcaklık odadakinden yüksekse klima soğutma yapmaz.

**3. Önünü aç.** İç ünitenin önünü kapatan perde, panjur ya da mobilya varsa kaldır. LG bunu "Hava doğru şekilde dönmüyor" nedeninin çözümü olarak veriyor.

**4. Soğuğu içeride tut.** Kapıları ve pencereleri kapat, soğuk havanın odadaki havalandırma deliklerinden kaçmadığından emin ol. LG kılavuzu klima çalışırken kapı ve pencerelerin sıkıca kapatılmasını, güneş ışığının da panjur ya da perdeyle engellenmesini öneriyor.

**5. Isı kaynağı.** Klima çalışırken elektrikli fırın ya da gazlı yakıcı gibi ısı üreten cihazları kullanma.

**6. Filtre.** Klimanın fişini çek, hava filtresini çıkar, süpürgeyle ya da nötr deterjanlı ılık suyla temizle, gölgede kurutup yerine tak. LG'ye göre filtrede toplanan toz ve kir hava akışını engelleyebilir ya da performansı düşürebilir. En fazla 40 derece su kullan, uçucu madde kullanma, filtreyi bükme; filtreyi çıkarırken iç ünitenin metal parçalarına dokunma. Ön panele uzanırken sağlam bir tabure kullan. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. Jet Modu ve zaman.** Oda çok sıcaksa Jet Modu'nu seç ve odanın serinlemesi için zaman ver. LG yaz mevsiminde iç mekan havasını tamamen soğutmanın biraz zaman alabileceğini yazıyor; Jet Modu'nun ayrıntıları modele göre değiştiği için kendi kumandanın kılavuzuna bak.

**8. Sürerse servis.** Soğutma yine yetersizse ya da iç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa LG yetkili servisine başvur. Model adını ve gördüğün belirtiyi hazır tut.

## Ne zaman servis?

LG kılavuzu kontrol listesinden sonra sorun devam ederse servis merkeziyle iletişime geçmeni istiyor. Otomatik tanılama işlevine göre bir hata oluştuğunda **iç ünitedeki lamba 2 saniye aralıkla yanıp söner**; bu durumda da satıcıya ya da servis merkezine başvurulmalı.

| Durum | Kimin işi |
|---|---|
| Mod, ayar sıcaklığı, önündeki engel, kapı-pencere, ısı kaynağı, filtre | Senin, bu rehberdeki adımlar |
| Dışarısı çok sıcakken soğutmanın biraz zayıf kalması | Kılavuza göre beklenebilir |
| Isı değişim bobini ve fan temizliği | LG bakım tablosuna göre uzman işi |
| İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyor | LG yetkili servisi |
| Yanık kokusu ya da normal olmayan ses | Klimayı kapat, fişini çek, LG yetkili servisi |

⛔ Dış üniteye çıkmaya, iç ya da dış ünitenin kapağını açmaya, ısı değişim bobinini ya da fanı kendin temizlemeye çalışma. LG bakım tablosu bu işler için uzman yardımı istiyor.

Markadan bağımsız anlatım için [klima soğutmuyor: nedenleri](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin. Klima hiç açılmıyorsa [LG klima çalışmıyor](/blog/lg-klima-calismiyor/), içeriden koku geliyorsa [LG klima koku yapıyor](/blog/lg-klima-koku-yapiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Nedenler, çözümler, filtre temizliği, kullanım ipuçları ve servis sınırı LG'nin Türkçe duvar tipi klima kullanıcı el kitabından; "odanın serinlemesi için zaman verin" notu LG'nin Türkçe kanallı tip klima el kitabından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
