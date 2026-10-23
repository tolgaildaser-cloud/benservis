---
title: "Indesit çamaşır makinesi resetleme nasıl yapılır"
description: "Indesit çamaşır makinesinde reset: programı iptal etme, beklemeye alma, fişi çekip 1 dakika bekleme. Kılavuzdaki sıra, bekleme modu ve servis sınırı."
slug: "indesit-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, ek küme H). Konu: origin/main'de Indesit adı geçen hiçbir sayfa yok (slug + başlık + gövde grep'i boş).
#   Yakın genel sayfalar: camasir-makinesi-calismiyor, camasir-makinesi-isik-yanip-sonuyor (marka sorgusu değil).
# Arama kanıtı (bu koşu 23 Eki 21:02, Google otomatik tamamlama hl=tr gl=tr): "indesit çamaşır makinesi r" → 1. "…resetleme", 2. "…resetleme nasıl yapılır". GSC: satır yok.
# Belgeler (YK #88, 23 Eki: Whirlpool grubu portalı + Thron CDN = üretici belgesi). Zincir: docs.indesit.eu/?Campo_Ricerca=<model> (200) → portal API (200) → Thron PDF (200).
#  (A) Indesit IWC 71052 C ECO TK Kullanma Kılavuzu, TR (195125790.01, 10/2014), 12 s.  md5 617c68bf918a52e362553d13731ae24d
#  (C) Indesit EWE 71083 W TK Kullanma Kılavuzu, TR (195135285.00, 05/2015), 12 s.  md5 b9161cbf64c50dc160e0333755109d78
# İptal A s.7, C s.8 · beklemeye alma A s.6 · bekleme modu A s.6 · AÇ/KAPA 3 sn, çalışırken kapatma iptal eder C s.6 · arıza ışığı + fiş 1 dk A s.11, C s.11 · servis A s.12.
# BİLEREK YAZILMAYANLAR: gizli servis menüsü / tuş kombinasyonu (belgede yok) · F kodu anlamları (belgede tablo yok) · kart teşhisi · fiyat (#46).
# Alıntı denetim tablosu: indesit-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makine tepki vermiyorsa önce bekleme modunda olup olmadığına bak; AÇ/KAPA tuşuna bir süre bas."
  - "Çalışan programı BAŞLAT/DURDUR ile beklemeye al; turuncu lamba yanıp sönmeye başlar."
  - "Programı iptal etmek için beklemedeyken BAŞLAT/DURDUR'u basılı tutup yeni programı seç."
  - "Dijital ekranlı modelde programı bitirmek için kılavuzdaki tuşu uzun süre basılı tut; makine kapanır."
  - "Arıza ışıkları yanıyorsa makineyi kapat, fişi çek ve 1 dakika sonra yeniden aç."
  - "Programı baştan başlatıp sorunun geçip geçmediğine bak."
  - "Işıklar geri geliyorsa musluğu kapat, fişi çek, model ve seri numarasıyla servisi ara."
faq:
  - q: "Indesit çamaşır makinesinde reset tuşu var mı?"
    a: "IWC 71052 ve EWE 71083 kılavuzlarında Reset adında ayrı bir tuş yok. Kılavuzlar üç işlem anlatıyor: programı beklemeye alıp iptal etmek, makineyi kapatmak ve arıza ışıklarında fişi çekip 1 dakika sonra yeniden açmak."
  - q: "Fişi çekip ne kadar beklemeliyim?"
    a: "Kılavuzların arıza tablosu, arıza ışıkları ya da ekranda F ile başlayan bir kod göründüğünde makineyi kapatıp fişi çekmeyi ve 1 dakika sonra tekrar açmayı söylüyor. Arıza çözülmezse sıradaki adım teknik servis."
  - q: "Makine hiç tepki vermiyor, bozuldu mu?"
    a: "Önce bekleme moduna bak. Kılavuza göre makine 30 dakika içinde hiçbir işlem algılamazsa otomatik bekleme sistemine geçiyor. AÇ/KAPA tuşuna bir süre basıp makinenin yeniden çalışmasını bekle. Kılavuzun arıza tablosunda fişin prize tam takılı olması ve evde elektrik olması da var."
  - q: "Programı yarıda kesersem kapak hemen açılır mı?"
    a: "Hayır. KAPAK KİLİTLİ göstergesi yanarken kapak kilitlidir. Kılavuz, göstergenin sönmesini beklemeyi söylüyor; bu yaklaşık 3 dakika sürüyor. Tamburda su varsa önce suyu boşaltan bir program gerekir."
  - q: "Resetleme hata kodunu siler mi?"
    a: "Kılavuz fişi çekip 1 dakika beklemeyi bir deneme olarak veriyor, kalıcı çözüm olarak değil. Kod ya da ışık deseni yeniden geliyorsa sorun yerinde duruyor demektir; kılavuz bu durumda teknik servise başvurmanı istiyor."
images:
  coverAlt: "Banyoda beyaz, önden yüklemeli bir çamaşır makinesi ve kapalı cam kapak"
  steps:
    - "Kumanda paneli sönük duran beyaz bir çamaşır makinesinin önden görünümü"
    - "Çamaşır makinesi kumanda panelinde yanıp sönen turuncu bir gösterge lambası"
    - "Çamaşır makinesinin program seçme düğmesinin yakın planı"
    - "Dijital ekranlı bir çamaşır makinesi kumanda panelinin geniş planı"
    - "Prizden çekilmiş bir çamaşır makinesi fişi ve boş priz"
    - "Cam kapağın ardında dönmeye başlayan çamaşırlarla dolu tambur"
    - "Kapatılmış bir su musluğu ve ona bağlı beyaz su giriş hortumu"
---

Program yanlış seçildi, ışıklar anlamsız bir desende yanıp sönüyor ya da makine hiçbir tuşa tepki vermiyor; akla ilk gelen "resetlemek". Indesit'in çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok.** Kılavuzlar bunun yerine üç ayrı işlem anlatıyor: **programı beklemeye alıp iptal etmek, makineyi kapatmak** ve arıza ışıkları yandığında **fişi çekip 1 dakika sonra yeniden açmak.** Bu yazıdaki sırayı iki Indesit Türkçe kılavuzundan çıkardık: düğmeli IWC 71052 ve dijital ekranlı EWE 71083. Tuş yerleri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tepki yoksa bekleme modunu düşün, AÇ/KAPA'ya bir süre bas. Programı BAŞLAT/DURDUR ile beklemeye al, basılı tutarak iptal et. Arıza ışığında kapat, fişi çek, 1 dakika bekle, aç. Programı yeniden başlat. Geri geliyorsa servis.

## Ne gördüğüne göre ne yaparsın

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Hiçbir ışık yok, tuşlar tepkisiz** | Fiş, elektrik ya da bekleme modu | 🛠️ AÇ/KAPA'ya bir süre bas |
| **BAŞLAT/DURDUR turuncu yanıp sönüyor** | Program beklemede | Devam için yeniden bas ya da iptal et |
| **Bir işlev göstergesi yanıp sönüyor** | Seçilen işlev programla uyumsuz | Başka işlev ya da program seç |
| **Işıklar birlikte yanıp sönüyor, ekranda F-.. kodu** | Arıza uyarısı | 🛠️ Fişi çek, 1 dakika bekle, 🔧 sürerse servis |

## Adım adım: Indesit çamaşır makinesini sıfırlama

**1. Önce bekleme moduna bak.** Makine hiç tepki vermiyorsa bozulduğunu düşünme. Kılavuza göre bu makineler yeni enerji tasarrufu kurallarına uygun olarak **30 dakika içinde hiçbir işlem algılamazsa otomatik bekleme sistemine geçiyor.** Kılavuzun çözümü: **AÇ/KAPA düğmesine bir süre bas ve makinenin tekrar çalışmasını bekle.** Hâlâ ışık yoksa arıza tablosunun ilk satırına bak: fiş prize tam takılı mı, evde elektrik var mı?

**2. Programı beklemeye al.** Çalışan bir programı durdurmanın ilk yolu BAŞLAT/DURDUR tuşu. Kılavuza göre bu tuşa basınca **turuncu uyarı lambası yanıp söner;** program kaldığı yerden devam etsin istersen aynı tuşa yeniden basarsın.

**3. Programı iptal et ve yenisini seç.** Düğmeli IWC 71052'de iptalin yolu kılavuzda tek cümle: **makineyi beklemeye aldıktan sonra BAŞLAT/DURDUR tuşunu basılı tutarak yeni bir program seç.** Program düğmesini çevirmek tek başına iptal sayılmaz; önce beklemeye almak gerekiyor.

**4. Dijital ekranlı modelde programı bitir.** EWE 71083 kılavuzu devrede olan programı iptal etmek için kılavuzda simgesiyle gösterilen **tuşu uzun süre basılı tutmayı** söylüyor; **program bitiriliyor ve makine kapanıyor.** Aynı kılavuza göre AÇ/KAPA tuşu çalışırken yaklaşık **3 saniye** basılı tutulunca makine kapanıyor ve bu da **devredeki programı iptal ediyor;** hafif ya da yanlışlıkla basınca kapanmıyor.

**5. Arıza ışığında 1 dakika güçten ayır.** Asıl "reset" adımı bu. IWC 71052 kılavuzunun arıza tablosunda belirli bir desen var: program safhası göstergesi yanarken **işlev göstergesi yanıyor, BAŞLAT/DURDUR yanıp sönüyor ve kapak kilitli göstergesi sabit yanıyor.** Ekranlı EWE 71083'te benzer durumda ekranda **F-01 gibi bir hata kodu** çıkıyor. İkisinde de çözüm aynı: **makineyi kapat, fişi prizden çek ve 1 dakika sonra tekrar aç.**

**6. Programı yeniden başlat.** Kılavuzun Teknik Servis bölümü, servisi aramadan önce **programı tekrar başlatarak sorunun çözülüp çözülmediğini görmeni** istiyor. Çamaşırı, programı ve deterjanı yerleştirip BAŞLAT/DURDUR ile başlat; ilk dakikalarda ışıkları izle.

**7. Geri geliyorsa servis.** Desen ya da kod yeniden çıkıyorsa ev ayar turu bitmiştir. Kılavuz bu noktada **teknik servise başvurmanı** ve **yetkili olmayan tamircilere gitmemeni** söylüyor. Servise arıza tipini, **modeli (Mod.)** ve **seri numarasını (S/N)** bildir; bu bilgiler makinenin arkasındaki plakada yazıyor.

## Fişi çekmek her şeyi çözer mi

Hayır. Kılavuzda fişi çekip 1 dakika beklemek **belirli bir arıza deseni** için veriliyor; su almama, su boşaltmama ya da titreme gibi sorunların kendi satırları var. Örneğin ilk yıkama safhası lambası hızlıca yanıp sönüyorsa makine su almıyordur; bunun çözümü musluk ve hortumdadır, fişte değil. Ayrıntılar [Indesit çamaşır makinesi ışıkları yanıp sönüyor](/blog/indesit-camasir-makinesi-isiklari-yanip-sonuyor/) yazısında.

Kapak tarafında da sabır gerekiyor. Program iptal edilse bile **KAPAK KİLİTLİ göstergesi sönmeden kapak açılmaz;** kılavuz yaklaşık **3 dakika** beklemeyi söylüyor. Kapağı zorlamak güvenlik mekanizmasını bozabilir.

## Ne zaman servis

- Fişi çekip 1 dakika bekledikten sonra aynı ışık deseni ya da F kodu geri geliyorsa
- AÇ/KAPA tuşuna bir süre bastığın hâlde hiçbir ışık yanmıyorsa ve fiş ile elektrik sağlamsa
- İptal ettiğin hâlde kapak uzun süre kilitli kalıyorsa: [Indesit çamaşır makinesi kapağı açılmıyor](/blog/indesit-camasir-makinesi-kapagi-acilmiyor/)
- Genel kod listesi için: [Çamaşır makinesi hata kodları](/blog/camasir-makinesi-hata-kodlari/)

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, fiş, musluk ve program seçimi sende; makinenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin. Kılavuz da arıza hâlinde iç mekanizmaları kurcalamamanı söylüyor.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ve seri numarası (S/N) ne?
2. Hangi ışıklar yanıyor, hangisi yanıp sönüyor, ekranda kod var mı?
3. Fişi çekip 1 dakika bekledin mi, desen geri geldi mi?
4. Tamburda su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
