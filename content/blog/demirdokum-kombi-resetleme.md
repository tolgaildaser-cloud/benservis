---
title: "DemirDöküm kombi resetleme: tuş, süre ve deneme sınırı"
description: "DemirDöküm kombi resetleme modele göre değişir: Nitromix'te reset tuşu, ademiX ve vintomiX'te açma/kapatma düğmesi. Süre, deneme sınırı ve servis."
slug: "demirdokum-kombi-resetleme"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan B). origin/main'de demirdokum-kombi-resetleme yok; başlık grep'i boş.
#   Yakın sayfalar: demirdokum-kombi-ariza-kodlari ("Reset nasıl yapılır?" kısa bölüm), demirdokum-kombi-f28-hatasi (F.28 odaklı reset),
#   demirdokum-kombi-f04-hatasi, demirdokum-kombi-calismiyor. Bu yazı kod sorgusunu değil marka düzeyindeki "resetleme" sorgusunu karşılar;
#   kod tablosu kopyalanmadı, hub'a bağlanıldı.
# Arama kanıtı (25 Eki 08:47 +03, suggestqueries hl=tr gl=tr): "demirdöküm kombi r" → 1. "demirdöküm kombi resetleme", 2. "…reset düğmesi nerede";
#   "demirdöküm kombi reset" → 1. "…resetleme", 2. "…reset düğmesi nerede", 3. "…reset atma", 4. "…reset tuşu yok". GSC (www-5 3 ay / www-6 7 gün): resetleme satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile demirdokum.com.tr'den indirildi (HTTP 200 application/pdf); pdftotext -layout, sayfa = PDF sayfası.
#  (N) Nitromix kullanma kılavuzu 0020309468_01  …/downloads/nitromix-kk-0020309468-01-2557203.pdf  md5 3340a11b923b7332f8eb8685297970b6
#  (A) ademiX P24/P28 AS/2 kullanma kılavuzu 8000037599_01  …/downloads/ademix-kullanm-klavuzu-3072082.pdf  md5 49d7b83510651364a8bf6cc1fd7b654b
#  (V) vintomiX kullanma kılavuzu 8000023884_01  …/downloads/vintomix-kullanma-klavuzu-3072079.pdf  md5 44582ead51f15270f17023c715827c61
#  (T) Atron Condense kullanma kılavuzu 0020281171_00  …/downloads/products-1/kullanma-kilavuzu-1772624.pdf  md5 7746b6a9d980072b5109b1b27926bd81
#  (P) Nitron Plus kullanma kılavuzu 0020193908_03  …/products-2/nitronplus/nitronplus-klavuz-466829.pdf  md5 51e63dec4da2dcf111d41350fa586e65
# Gaz kokusu N s.4 · N reset tuşu s.8, F.28 1 sn ≤3 s.15, elektrik gelince otomatik s.15 · A reset tuşu s.6, 5 sn s.11, F.28 s.13
#   · V 3 sn, en fazla beş, rE s.10 · T reset tuşu s.6–7, F04 üç deneme, F05 servis, hava servis s.10 · P reset tuşu s.8/10, F04 s.16.
# BİLEREK YAZILMAYANLAR: ademiX için sayısal deneme sınırı (kılavuzda yok) · Atron/Nitron Plus'ta reset tuşuna kaç saniye basılacağı (yok)
#   · kart/sensör teşhisi · reset sonrası hangi ayarların sıfırlandığı (kılavuz yalnız "ayarları sıfırlar" diyor) · fiyat (#46).
# Alıntı denetim tablosu: demirdokum-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetlemeyi bırak; elektrik şalterine dokunma, kapı ve pencereleri aç, binayı terk et ve gaz şirketini dışarıdan ara."
  - "Kılavuzun kapağından ya da tip etiketinden kombinin modelini öğren; reset yöntemi modele göre değişiyor."
  - "Ekrandaki kodu not al; basınç kodu varsa reset yerine basıncı kontrol et."
  - "Ateşleme kodunda önce gaz kesme vanalarının açık olduğunu kontrol et."
  - "Modelinin kılavuzundaki tuşla ve sürede resetle."
  - "Kılavuzdaki deneme sınırını aşma; sınırda kod hâlâ duruyorsa resetlemeyi bırak."
  - "Kodu, modeli ve kaç kez denediğini not edip yetkili servise bildir."
faq:
  - q: "DemirDöküm kombi nasıl resetlenir?"
    a: "Modeline göre değişiyor. Nitromix'te kontrol panelindeki reset tuşuna 1 saniye basılır. ademiX'te ana ekranda açma/kapatma düğmesine 5 saniyeden uzun basılır. vintomiX'te açma/kapatma düğmesine 3 saniyeden uzun basılır ve ekranda rE görünür. Atron Condense ve Nitron Plus'ta panelde ayrı bir reset tuşu var."
  - q: "DemirDöküm kombide reset tuşu yok, ne yapmalıyım?"
    a: "ademiX ve vintomiX kılavuzlarında resetleme ayrı bir tuşla değil, açma/kapatma düğmesine uzun basarak yapılıyor. ademiX'in kumanda şemasında bu yuvarlak düğme reset tuşu olarak da geçiyor. Kombinin modelini kılavuzun kapağından öğren ve o modelin yöntemini uygula."
  - q: "Kaç kez resetleyebilirim?"
    a: "Nitromix kılavuzu en fazla üç resetleme denemesi veriyor. vintomiX'te en fazla beş deneme var; beşinciden sonra rE hızlı yanıp söner. Atron Condense ve Nitron Plus kılavuzları ateşleme arızası üç denemede geçmezse yetkili servise başvurmayı söylüyor. ademiX kılavuzunda sayı yok; arıza giderilemezse yetkili servis."
  - q: "Elektrik gitti geldi, kombiyi resetlemem gerekir mi?"
    a: "Kılavuzların arıza tablosuna göre gerekmez. Binadaki elektrik beslemesi kesildiyse sigortayı kontrol et; ürün elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar."
  - q: "Basınç kodu reset ile gider mi?"
    a: "Kılavuzlar düşük basınç kodlarında reset adımı vermiyor. Nitromix, ademiX ve vintomiX'te F.22, Atron Condense ve Nitron Plus'ta F10 için tedbir ısıtma sistemini doldurmak. Bu iş kılavuzunun tarif ettiği kadarıyla yapılır; emin değilsen yetkili servise bırak."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin ön panelinde yuvarlak bir düğme ve küçük bir ekran"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda kapak"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombi kilitlendi, ekranda bir kod duruyor ve aklına ilk gelen şey reset. DemirDöküm'de bu iş tek bir tuşla anlatılamıyor: Nitromix'te panelde ayrı bir reset tuşu var, ademiX ve vintomiX'te ise resetleme açma/kapatma düğmesine uzun basarak yapılıyor. Süre ve deneme sınırı da modele göre değişiyor. Bu yazıda Nitromix, ademiX, vintomiX, Atron Condense ve Nitron Plus kullanma kılavuzlarından resetlemeyi model model topladık. Kodların anlamı için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) sayfasına bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce modelini öğren. Nitromix: reset tuşuna 1 saniye, en fazla üç deneme. ademiX: açma/kapatma düğmesine 5 saniyeden uzun. vintomiX: açma/kapatma düğmesine 3 saniyeden uzun, en fazla beş kez. Atron Condense ve Nitron Plus: reset tuşu, ateşleme arızasında üç deneme. Basınç kodu reset ile gitmez.

## Model model reset

| Model | Hangi tuş | Kılavuzdaki sınır |
|---|---|---|
| **Nitromix** | Panelde ayrı **reset tuşu**, 1 saniye | En fazla 3 deneme |
| **ademiX (AS/2)** | **Açma/kapatma düğmesi**, 5 saniyeden uzun | Sayı yok; geçmezse servis |
| **vintomiX** | **Açma/kapatma düğmesi**, 3 saniyeden uzun | En fazla 5 kez; ekranda rE |
| **Atron Condense** | Panelde ayrı **reset tuşu** | Ateşleme arızasında 3 deneme |
| **Nitron Plus** | Panelde ayrı **reset tuşu** | Ateşleme arızasında 3 deneme |

## Adım adım: evde denenecekler

**1. Gaz kokusu var mı?** Nitromix kılavuzunun güvenlik bölümü açık: doğal gaz kokusunda gaz kokusu olan mekanlarda bulunma, mümkünse kapı ve pencereleri açıp cereyan yap, açık alevden kaçın, sigara içme. Binadaki elektrik şalterlerini, soketleri, zilleri ve telefonu kullanma. Gaz sayacı kapatma düzeneğini, mümkünse üründeki gaz kesme vanasını kapat, diğer sakinleri uyar ve binayı terk et. Gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara. Böyle bir durumda reset yapılmaz.

**2. Modelini öğren.** Model adı kılavuzun kapağında yazıyor. Bu önemli, çünkü DemirDöküm'de iki ayrı kod ailesi var: Nitromix, ademiX ve vintomiX'te noktalı kodlar (F.22, F.28), Atron Condense ve Nitron Plus'ta noktasız kodlar (F04, F05, F10). Reset tuşunun yeri ve süresi de bu ayrıma göre değişiyor.

**3. Kodu oku.** Kılavuzlara göre bir arıza olduğunda ana ekran arıza koduna geçer. Kodu not al. Kod **düşük basınç** gösteriyorsa (noktalı ailede F.22, noktasızda F10) kılavuzların tedbiri reset değil, **ısıtma sistemini doldurmak**. Bu durumda [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) ya da [F10 hatası](/blog/demirdokum-kombi-f10-hatasi/) yazısına geç.

**4. Gaz kesme vanalarına bak.** Ateşleme başarısız kodunda (F.28) Nitromix, ademiX ve vintomiX kılavuzlarının ilk tedbiri aynı: **gaz kesme vanasının açık olup olmadığını kontrol et.** Kılavuzların arıza tablosunda "ürün çalışmıyor" satırının ilk nedeni de harici olarak monte edilen ve üründeki gaz kesme vanasının kapalı olması.

**5. Modelinin yöntemiyle resetle.**
- **Nitromix:** kumanda panelinde **reset** yazan tuşa **1 saniye** bas.
- **ademiX:** ana ekranda **açma/kapatma düğmesine 5 saniyeden uzun** bas. Kılavuzun kumanda şemasında bu yuvarlak düğme "Reset tuşu – Ürünü yeniden başlat" diye geçiyor. "Reset tuşu yok" diye arayanların çoğu bu modeldedir (çıkarım).
- **vintomiX:** ana ekranda **açma/kapatma düğmesine 3 saniyeden uzun** bas. Ekranda **rE** görünür.
- **Atron Condense ve Nitron Plus:** paneldeki **reset tuşuna** bas; kılavuza göre ürün yeniden çalışmaya başlar. Kılavuz bu tuşun işlevini "ürünü resetler (ayarları sıfırlar)" diye tanımlıyor; resetten sonra sıcaklık ayarlarına bir göz at (çıkarım).

**6. Sınırı aşma.** Nitromix'te resetleme denemeleri **en fazla üç**. vintomiX'te en fazla **beş kez**; beş denemeden sonra rE hızlı yanıp söner, yanıp sönmeyi durdurup ürünü yeniden başlatmak için onay düğmesine basılır. Atron Condense ve Nitron Plus'ta ateşleme arızası **üç arıza giderme denemesiyle** gitmiyorsa yetkili servise ya da bayiye başvurulur. ademiX kılavuzu sayı vermiyor; arızayı gideremiyorsan yetkili servis.

**7. Servise doğru bilgiyle git.** Sınıra geldiysen kodu, modelini ve kaç kez denediğini yaz. Kılavuzların genel kuralı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## Reset ne zaman işe yaramaz

- **Elektrik kesintisinden sonra:** reset gerekmez. Kılavuzlara göre binadaki sigortayı kontrol et; ürün elektrik beslemesinin tekrar gelmesiyle otomatik olarak çalışmaya başlar.
- **Basınç kodunda:** tedbir doldurmak; reset adımı yok.
- **Atık gaz kodunda (F05):** Atron Condense ve Nitron Plus kılavuzları arızanın yetkili servis tarafından giderilmesini istiyor.
- **Isıtma sisteminde hava varsa:** Nitromix ve Atron Condense tabloları havanın yetkili servis tarafından alınmasını söylüyor.

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, ekran ve gaz kesme vanasının konumu sende; kombinin kapağının içi, kart, gaz hattı, baca ve yanma bölümü yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Ekranda hangi kod var, noktalı mı noktasız mı?
3. Gaz kesme vanaları açık mı?
4. Kaç kez resetledin?

Ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ateşleme kodları için [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) ve [F04 hatası](/blog/demirdokum-kombi-f04-hatasi/), hiç çalışmıyorsa [DemirDöküm kombi çalışmıyor](/blog/demirdokum-kombi-calismiyor/) yazısına bak. Bil, gör, çağır.
