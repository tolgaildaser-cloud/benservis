---
title: "LG klima koku yapıyor: ne yapılır?"
description: "LG klimadan koku geliyorsa LG kılavuzunun sırası: yanık kokusunda hemen kapat, odadaki kaynağa bak, filtreyi yıka, içini Fan modunda kurut."
slug: "lg-klima-koku-yapiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 30 Eyl belirti damarı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. ABD LG kaynağı kullanılmadı; ikisi de LG Türkiye (gscs-b2c.lge.com, Türkçe).
# #88: web araması YALNIZ belgelerin yerini bulmak için. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ · pdftotext -layout, sayfa = PDF sayfası.
#  D) LG "KULLANICI EL KİTABI KLİMA · TİP: DUVAR TİPİ" (5401758648, Türkçe; lg.com/tr S12ETK ürün sayfasının kılavuz listesinden, csSalesCode S12ETK.NSJ)
#     https://gscs-b2c.lge.com/downloadFile?fileId=oWezd6acEM51ZIvWrjKjw  42 s.  md5 370ac02f4f4bcfa0bf866058acdccd8e  (metin katmanı kısmen 29 kod noktası kaymalı; dec.py ile çözüldü)
#  K) LG "KULLANICI EL KİTABI KLİMA" gizli tavan tipi kanallı (MFL67522523, Türkçe)
#     https://gscs-b2c.lge.com/open/downloadFile?fileId=RMV9u3J8EsbYsPNl3uhxw  28 s.  md5 88e9d7e61b646813e3b6f4cf868612b7
# "İç mekan ünitesinden koku geliyor" satırı:
#   D s.38: "Kokular (sigara dumanı gibi) iç mekan ünitesi tarafından çekilebilir ve hava akışı ile tahliye edilebilir. x Koku kaybolmazsa, filtreyi yıkamanız gereklidir. Bu işe yaramazsa, ısı dönüştürücünüzü temizlemesi için servis merkezi ile iletişime geçin."
#   K s.21 aynı satır + "Bunun odadaki duvar, halı, mobilya veya kumaş ürünlerden yayılan bir nem kokusu olup olmadığını kontrol edin. • Koku duvar, halı, mobilya veya kumaş ürünlerden geliyorsa bunu temizleyin."
# D s.34: "Üniteden yanık kokusu ve normal olmayan sesler geliyor. x Klimayı kapatın, güç kablosunu prizden çekin veya güç kaynağı bağlantısını kesin ve servis merkezi ile iletişime geçin."
# D s.5: "Klimadan ses, koku veya duman gelmesi halinde güç kaynağını kesin."
# D s.30 UYARI: "Temizlemeden veya bakım yapmadan önce, güç kaynağının bağlantısını kesin ve fanlar durana kadar bekleyin."
#   "Klimayı yeniden kullanmadan önce, klimanın iç bileşenlerini 3 ila 4 saat Fan modunda kurutun. Bu işlemin yapılması nem yüzünden meydana gelen kokunun ortadan kalkmasına yardımcı olur."
# D s.32 filtre: "Gücü kapatın ve güç kablosunu prizden çekin." · tutma kollarından yavaşça kaldırıp çıkar · "Elektrikli süpürgeyle veya nötr deterjanlı ılık su ile filtreleri temizleyin." · "Filtreleri gölgede kurumaya bırakın." · kancaları ön kapağa tak · "Hava filtresi büküldüğünde kırılabilir."
# D s.31 NOT: "Filtreleri temizlerken en fazla 40 C sıcaklıkta su kullanın." / "asla uçucu maddeler kullanmayın" / "Mikro toz filtresini su ile yıkamayın" / "Üçlü filtreyi su ile yıkamayın" (isteğe bağlı filtreler).
# D s.31 bakım tablosu: "Isı değişim bobinini ve panel kanatlarını temizlemek için uzman birinden yardım alın." (yılda bir) · fan ve kondensat drenaj tavası/borusu için de uzman.
# D s.8: "Hava filtresini kaldırırken klimanın metal parçalarına asla dokunmayın." / sağlam tabure ya da merdiven / "Klimanın içini temizlemek için yetkili servis merkezi veya bayi ile iletişime geçin."
# D s.25 Otomatik Temizleme: "Soğutma ve Nem Alma modunda, nem iç mekan ünitesinin içinde üretilir. Bu işlev nemi kaldırır." / "Gücü kapattığınızda, fan 30 dakika çalışır ve iç mekan ünitesinin içini temizler." (modele bağlı)
# BİLEREK YAZILMAYANLAR: sprey/dezenfektan/ev karışımı ile iç ünite temizliği (belgede yok, LG iç temizliği servise veriyor) · "küf/bakteri" teşhisi · Otomatik Temizleme'nin kokuyu gidereceği iddiası (LG bunu yalnız nem için söylüyor; SSS'de yalnız işlevin tanımı verildi) · fiyat.
# Alıntı denetim tablosu: lg-klima-koku-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma ve Fan modu süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Elektrikli süpürge", "Nötr deterjan ve ılık su", "Sağlam bir tabure"]
steps:
  - "Yanık kokusu, duman ya da normal olmayan ses varsa klimayı hemen kapat, fişini çek ve LG yetkili servisini ara; sonraki adımlara geçme."
  - "Kokunun odadaki duvar, halı, mobilya ya da kumaşlardan gelen bir nem kokusu olup olmadığını kontrol et; öyleyse kaynağı temizle."
  - "Klimayı kapat, fişini çek ve fan durana kadar bekle."
  - "Hava filtresini tutma kollarından yavaşça kaldırarak çıkar."
  - "Filtreyi süpürgeyle ya da en fazla 40 derece nötr deterjanlı ılık suyla yıka."
  - "Filtreyi gölgede kurut ve kancalarını ön kapağa takarak yerine yerleştir."
  - "Klima uzun süre kullanılmadıysa yeniden kullanmadan önce 3-4 saat Fan modunda çalıştırarak içini kurut."
  - "Koku yine geçmezse ısı dönüştürücünün temizliği için LG yetkili servisine başvur."
faq:
  - q: "LG klimadan neden kötü koku gelir?"
    a: "LG'nin Türkçe kullanım kılavuzuna göre sigara dumanı gibi kokular iç ünite tarafından çekilip hava akışıyla yeniden odaya verilebilir. LG'nin kanallı tip el kitabı ayrıca kokunun odadaki duvar, halı, mobilya ya da kumaşlardan yayılan bir nem kokusu olup olmadığına bakılmasını istiyor. Klima uzun süre kullanılmadıysa içeride kalan nem de kokuya yol açabilir; LG bunun için Fan modunda kurutmayı öneriyor."
  - q: "Filtreyi yıkadım ama koku geçmedi, ne yapmalıyım?"
    a: "LG kılavuzu koku kaybolmazsa önce filtrenin yıkanmasını, bu işe yaramazsa ısı dönüştürücünün temizlenmesi için servis merkezine başvurulmasını istiyor. LG klimanın içini temizlemeyi kullanıcıya değil yetkili servise ya da bayiye bırakıyor."
  - q: "Klimadan yanık kokusu geliyor, ne yapmalıyım?"
    a: "Hemen klimayı kapat, fişini çek ya da güç kaynağını kes ve LG servis merkeziyle iletişime geç. LG kılavuzu yanık kokusu ve normal olmayan ses durumunda bunu istiyor; bu belirtide filtre temizliği gibi adımları deneme."
  - q: "LG klimadaki Otomatik Temizleme işlevi ne yapar?"
    a: "LG kılavuzuna göre soğutma ve nem alma modlarında iç ünitenin içinde nem oluşur; Otomatik Temizleme işlevi bu nemi kaldırır. İşlev açıksa klimayı kapattığında fan 30 dakika daha çalışır. İşlev her modelde bulunmayabilir."
images:
  coverAlt: "Duvardaki beyaz split klimanın ön kapağı açık; çıkarılmış hava filtresi ılık su dolu bir leğenin yanında duruyor"
---

Klimayı açınca odaya hoş olmayan bir koku yayılıyor. LG'nin Türkçe kullanım kılavuzu bu belirtiyi **"İç mekan ünitesinden koku geliyor"** başlığıyla ele alıyor: **"Kokular (sigara dumanı gibi) iç mekan ünitesi tarafından çekilebilir ve hava akışı ile tahliye edilebilir."** LG'nin çözümü sırasıyla filtreyi yıkamak, işe yaramazsa ısı dönüştürücünün temizliği için servisi çağırmak. Yanık kokusu ise ayrı bir konu ve doğrudan servis ister. Bu yazıda LG'nin sırasını evde güvenle yapılabilecek adımlara çeviriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yanık kokusu, duman ya da tuhaf ses varsa klimayı kapat, fişini çek, servisi ara. Değilse kokunun odadan gelip gelmediğine bak. Fişi çekip filtreyi yıka, gölgede kurut. Uzun süre kullanılmadıysa içini 3-4 saat Fan modunda kurut. Koku sürerse ısı dönüştürücü temizliği → LG yetkili servisi.

## Hangi koku?

| Koku | LG'nin yönlendirmesi |
|---|---|
| Yanık kokusu, normal olmayan seslerle birlikte | Klimayı kapat, fişini çek, servis merkeziyle iletişime geç |
| Sigara dumanı gibi odadaki kokular | İç ünite bu kokuları çekip havayla geri verebilir; koku geçmezse filtreyi yıka |
| Duvar, halı, mobilya ya da kumaştan yayılan nem kokusu | Kaynağı temizle (LG kanallı tip el kitabı) |
| Uzun süre kullanılmayan klimada nem kokusu | Yeniden kullanmadan önce 3-4 saat Fan modunda kurut |
| Filtre yıkandıktan sonra da süren koku | Isı dönüştürücü temizliği için servis |

## Adım adım: evde denenecekler

**1. Yanık kokusu mu?** Yanık kokusu, duman ya da normal olmayan ses varsa klimayı hemen kapat, fişini çek ve LG yetkili servisini ara; sonraki adımlara geçme. LG kılavuzu klimadan ses, koku ya da duman geldiğinde güç kaynağının kesilmesini istiyor.

**2. Odaya bak.** Kokunun odadaki duvar, halı, mobilya ya da kumaşlardan gelen bir nem kokusu olup olmadığını kontrol et; öyleyse kaynağı temizle. Bu kontrol LG'nin kanallı tip el kitabının koku satırında yer alıyor.

**3. Gücü kes.** Klimayı kapat, fişini çek ve fan durana kadar bekle. LG temizlik ya da bakımdan önce bunu istiyor.

**4. Filtreyi çıkar.** Hava filtresini tutma kollarından yavaşça kaldırarak çıkar. Filtreyi bükme, kırılabilir; filtreyi kaldırırken klimanın metal parçalarına dokunma. Ön panele uzanırken sağlam bir tabure kullan.

**5. Yıka.** Filtreyi süpürgeyle ya da en fazla 40 derece nötr deterjanlı ılık suyla yıka. Uçucu madde kullanma. Klimanda isteğe bağlı mikro toz filtresi ya da üçlü filtre varsa LG bunları suyla yıkamamanı, süpürge ya da fırçayla temizlemeni istiyor.

**6. Kurut ve tak.** Filtreyi gölgede kurut ve kancalarını ön kapağa takarak yerine yerleştir. LG filtre doğru takılmazsa iç üniteye toz girebileceğini yazıyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. İçini kurut.** Klima uzun süre kullanılmadıysa yeniden kullanmadan önce 3-4 saat Fan modunda çalıştırarak içini kurut. LG'ye göre bu, nem yüzünden oluşan kokunun ortadan kalkmasına yardımcı olur.

**8. Sürerse servis.** Koku yine geçmezse ısı dönüştürücünün temizliği için LG yetkili servisine başvur.

## Ne zaman servis?

LG, filtre yıkandıktan sonra da süren kokuda **ısı dönüştürücünün temizlenmesi için servis merkeziyle iletişime geçmeni** istiyor. Kılavuzun bakım tablosu ısı değişim bobini, fan ve kondensat drenaj tavasının temizliğini de uzman işi olarak sayıyor; klimanın içinin temizliği için yetkili servis ya da bayiye başvurulmasını istiyor.

| Durum | Kimin işi |
|---|---|
| Odadaki kaynağı temizlemek, filtreyi yıkamak, Fan modunda kurutmak | Senin, bu rehberdeki adımlar |
| Filtre yıkandıktan sonra süren koku | LG yetkili servisi, ısı dönüştürücü temizliği |
| Klimanın içi, ısı değişim bobini, fan, drenaj tavası | LG yetkili servisi |
| Yanık kokusu, duman ya da normal olmayan ses | Klimayı kapat, fişini çek, LG yetkili servisi |

⛔ İç ünitenin içine sprey sıkmaya, suyla yıkamaya ya da kapağını açmaya çalışma. LG klimanın doğrudan su püskürtülerek ya da güçlü temizlik malzemeleriyle temizlenmemesini istiyor.

Markadan bağımsız anlatım için [klima koku yapıyor](/blog/klima-koku-yapiyor/) yazısına bakabilirsin. İç üniteden su da geliyorsa [LG klima su damlatıyor](/blog/lg-klima-su-damlatiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Koku satırı, yanık kokusu talimatı, filtre temizliği, Fan modunda kurutma, Otomatik Temizleme ve servis sınırı LG'nin Türkçe duvar tipi klima kullanıcı el kitabından; odadaki kaynak kontrolü LG'nin Türkçe kanallı tip klima el kitabından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
