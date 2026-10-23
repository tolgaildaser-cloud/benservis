---
title: "Profilo bulaşık makinesi E15 hatası: su koruma"
description: "Profilo bulaşık makinesinde E:15, su koruma sisteminin devreye girdiğini söyler. Kılavuzun sırası: musluğu kapat, fişi çek, kodu not et, servisi ara."
slug: "profilo-bulasik-makinesi-e15-hatasi"
date: "2026-10-23"
category: "Bulaşık Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork B). Konu seçimi: origin/main'de profilo-bulasik-makinesi-e15-hatasi yok.
#   Yakın slug'lar: profilo-bulasik-makinesi-calismiyor, -su-bosaltmiyor, -kurutmuyor, -leke-birakiyor, -temiz-yikamiyor; Profilo bulaşıkta tek kod sayfası ve E15/su koruma sayfası yok.
#   (Dalga 1 taslağı profilo-bulasik-makinesi-e22-hatasi henüz main'de değil; bağlantı verilmedi.)
# GSC: https___www-3…6 dışa aktarımlarında sorgu yok.
# Arama kanıtı (#164, 23 Eki Google otomatik tamamlama, hl=tr gl=tr): "profilo bulaşık makinesi e1" → 1. "…e15 hatası", 2. "…e15 hatası resetleme",
#   3. "…e15 hatası nasıl giderilir"; "profilo bulaşık makinesi e" → 1. "…e15 hatası"; "profilo bulaşık makinesi e15" → 1. "…e15 hatası".
# Belgeler (#88, yalnız üretici; yerel kopyalar blog-taslaklar/kaynak-profilo-sprint/, md5 -q 23 Eki). Okuma pdftotext -layout, sayfa = PDF sayfası (\f).
#  (E) Profilo BM6380MA bulaşık makinesi kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (A) Profilo BMS623V5 bulaşık makinesi kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# E:14/E:15/E:16 E s.37 · "E:01 ile E:30 arası başka kod" satırı E s.39 · arızalı cihaz/fiş/sigorta/musluk E s.8, A s.7 · hortum ve su hattı E s.10
#   · E:30-00/E:31-00 A s.40 · E:34-00 A s.41 · su beslemesi göstergesi yanıp sönüyor A s.40 · tip plaketi/E-Nr./FD E s.50, A s.47.
# BİLEREK YAZILMAYANLAR: kodu silme/reset "hilesi" (kılavuz E:15 için reset vermiyor; genel reset satırı yalnız tabloda olmayan "başka" kodlar için)
#   · makineyi eğme, taban tavasını boşaltma, şamandıra/sensör/AquaStop teşhisi (belgede yok; #31) · sızıntının nedenine dair tahmin · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-bulasik-makinesi-e15-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Kâğıt ve kalem"]
steps:
  - "Bulaşık makinesine su veren musluğu kapat."
  - "Makineyi kapat, fişini kablodan değil fişin kendisinden tutarak çek ya da sigortayı kapat."
  - "Ekranda yanan kodu tam olarak not et; E:15 mi, E:14 ya da E:16 mı, yoksa yeni modellerdeki E:30-00 ya da E:31-00 mı?"
  - "Kapağın iç tarafındaki tip plaketinden ürün numarasını ve imalat numarasını yaz."
  - "Profilo müşteri hizmetlerini ara, hata kodunu ve plaket bilgilerini bildir; servis gelene kadar musluğu kapalı tut."
faq:
  - q: "Profilo bulaşık makinesinde E15 ne demek?"
    a: "Profilo BM6380MA kullanım kılavuzunun arıza tablosuna göre E:15, su koruma sisteminin etkin olduğu anlamına geliyor. Kılavuzun bu kod için verdiği iki adım var: musluğu kapatmak ve müşteri hizmetlerini aramak."
  - q: "Profilo bulaşık makinesi E15 hatası nasıl resetlenir?"
    a: "Kılavuz E:15 için bir sıfırlama yöntemi vermiyor. Arıza tablosunda fişi çekip en az 2 dakika bekleme sırası var, ama o satır tabloda ayrıca yazılmamış başka bir hata kodu belirdiğinde uygulanıyor. E:15 tabloda kendi satırıyla yer alıyor ve çözümü musluğu kapatıp müşteri hizmetlerini aramak."
  - q: "E:14 ve E:16 da aynı şey mi?"
    a: "E:14 için kılavuz aynı açıklamayı veriyor: su koruma sistemi etkin. E:16 ise cihazın içine sürekli su aktığını söylüyor. Üçünde de kılavuzun talimatı aynı: musluğu kapat, müşteri hizmetlerini ara."
  - q: "Yeni Profilo makinemde E15 değil E:31-00 yazıyor."
    a: "Profilo BMS623V5 kılavuzunda kodlar iki parçalı yazılıyor. Bu kılavuzda E:30-00 ve E:31-00 değişimli olarak yandığında açıklama yine su koruma sisteminin etkin olması, E:34-00 ise cihazın içine sürekli su akması. Talimat değişmiyor: musluğu kapat, müşteri hizmetlerini ara."
  - q: "Makineyi kendim açıp bakabilir miyim?"
    a: "Hayır. Profilo kılavuzlarına göre usulüne uygun olmayan onarımlar tehlikeli ve cihazda yalnız eğitimini almış uzman personel onarım yapabilir; onarımda yalnız orijinal yedek parçalar kullanılmalı."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin kapalı kapağı ve üst kenarındaki karanlık bir gösterge paneli"
  steps:
    - "Tezgâh altında duvara bağlı, kolu kapalı konuma çevrilmiş küçük bir köşe musluğu"
    - "Duvardaki prizin yanında sarkan, prizden çekilmiş beyaz bir fiş"
    - "Bulaşık makinesinin panelinde yanan bir hata kodu ve yanında boş bir not kâğıdı"
    - "Açık bir bulaşık makinesi kapağının iç kenarındaki küçük, gümüş renkli tip plaketi"
    - "Mutfak tezgâhında duran bir telefon ve açık bir kullanım kılavuzu"
---

Bulaşık makinesi çalışırken durdu ve ekranda **E:15** yanıyor. Bu kod, Profilo bulaşık makinelerinde evde çözülecek kodlardan biri değil. Profilo BM6380MA kullanım kılavuzunun arıza tablosu E:15'i tek cümleyle açıklıyor: **su koruma sistemi etkin**. Talimatı da kısa: musluğu kapat, müşteri hizmetlerini ara. Bu yazıda kılavuzun bu kodla ilgili söylediklerini, yeni modellerdeki karşılıklarını ve servisi aramadan önce yapman gerekenleri topladık. Kaynaklar iki Profilo modelinin kılavuzu; senin makinende kod yazımı farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:15 = su koruma sistemi devrede. Musluğu kapat, fişi çek, kodu ve tip plaketindeki numaraları not et, Profilo müşteri hizmetlerini ara. Kılavuz bu kod için evde bir onarım ya da sıfırlama adımı vermiyor.

## Ekran ne söylüyor

| Ekrandaki kod | Model | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|---|
| **E:14** | BM6380MA | Su koruma sistemi etkin | Musluğu kapat, servisi ara |
| **E:15** | BM6380MA | Su koruma sistemi etkin | Musluğu kapat, servisi ara |
| **E:16** | BM6380MA | Cihazın içine sürekli su akıyor | Musluğu kapat, servisi ara |
| **E:30-00 / E:31-00** | BMS623V5 | Su koruma sistemi etkin | Musluğu kapat, servisi ara |
| **E:34-00** | BMS623V5 | Cihazın içine sürekli su akıyor | Musluğu kapat, servisi ara |

Su girişiyle ilgili kodlar ayrı satırlarda: BM6380MA'da **E:18**, BMS623V5'te **E:32-00**. Onlarda kılavuz musluğu, hortumu ve süzgeci kontrol etmeni istiyor; E:15'te istemiyor.

## Adım adım: evde denenecekler

**1. Musluğu kapat.** Kılavuzun E:15 satırındaki ilk adım bu. Makineye su veren musluk genellikle tezgâh altındaki dolapta, duvara bağlı küçük bir köşe musluğu. Kolu kapalı konuma getir. Bu adım, sistemin devreye girmesine yol açan durum sürerken makineye yeni su gitmesini engeller.

**2. Fişi çek ya da sigortayı kapat.** Kılavuzun güvenlik bölümü, arızalı bir cihazda fişin derhal çekilmesini ya da sigorta kutusundan sigortanın kapatılmasını ve musluğun kapatılmasını istiyor. Fişi çekerken kablodan değil, **fişin kendisinden** tut; kılavuz bunu ayrıca vurguluyor.

**3. Kodu tam olarak not et.** Servisi aradığında ilk sorulacak şey ekrandaki kod. E:14, E:15 ve E:16 birbirine yakın kodlar; ama E:16 başka bir durumu, cihazın içine sürekli su aktığını anlatıyor. Yeni nesil makinelerde kod E:30-00 ya da E:31-00 gibi iki parçalı ve değişimli olarak yanar. Gördüğünü olduğu gibi yaz.

**4. Tip plaketini oku.** Kılavuza göre ürün numarası (E-Nr.) ve imalat numarası (FD) cihazın tip etiketinde yazıyor; tip plaketi **cihaz kapağının iç tarafında**. Kapağı açıp kenardaki küçük etiketteki iki numarayı not et. Bu bilgiler servisin doğru parçayla gelmesine yardım eder.

**5. Müşteri hizmetlerini ara.** Kılavuzun E:15 için ikinci ve son adımı bu. Kodu ve plaket bilgilerini bildir. Kılavuz bu kod için başka bir ev adımı vermediğinden, servis gelene kadar musluğu kapalı tutmak en güvenli yol.

## Resetleme işe yarar mı

Profilo kılavuzunun arıza tablosunda bir sıfırlama sırası var: açma/kapama tuşuna bas, fişi çek ya da sigortayı kapat, **en az 2 dakika** bekle, yeniden çalıştır; sorun tekrar ederse musluğu kapat ve müşteri hizmetlerine kodu bildir. Ama bu satır, tabloda ayrıca yazılmamış **başka bir hata kodu** belirdiğinde uygulanıyor. E:15'in kendi satırı var ve orada sıfırlama yok. Kodu silmeye çalışmak, su koruma sistemini devreye sokan durumu ortadan kaldırmaz.

Kılavuzun arıza giderme bölümü, müşteri hizmetlerine başvurmadan önce tablodaki bilgilerden yararlanmanı ve böylece gereksiz masraftan kaçınmanı öneriyor. E:15 satırında bu bilgi zaten tek bir yeri gösteriyor: musluğu kapatıp servisi aramak.

## Kılavuzun su bağlantısı uyarıları

Servisi beklerken makinenin çevresine bakıyorsan kılavuzun kurulum uyarılarını bilmek işe yarar. BM6380MA kılavuzuna göre su hortumları asla bükülmemeli, ezilmemeli, değiştirilmemeli ya da kesilmemeli; yalnız ürünle birlikte teslim edilen ya da orijinal yedek hortumlar kullanılmalı, kullanılmış hortumlar tekrar takılmamalı. Su besleme basıncı en az 0,5 bar, en fazla 10 bar olmalı. Cihazla su hatları arasındaki temas korozyona ve sızıntıya yol açabileceği için aralarında en az 5 cm mesafe bırakılmalı. Bunlara aykırı bir durum görürsen servise bildir; kılavuz hortumlara müdahaleyi değil, orijinal parçayı istiyor.

## Ne zaman servis

- E:15, E:14 ya da E:16 göründüğünde, doğrudan
- BMS623V5 gibi yeni modellerde E:30-00, E:31-00 ya da E:34-00 göründüğünde
- Makinenin altında ya da çevresinde su görürsen
- Su hortumlarında hasar görürsen; kılavuza göre değiştirilen ya da hasarlı hortumlar maddi hasara ve cihaz hasarına yol açabilir

⛔ **Kendin-çöz sınırı burada biter.** Musluk, fiş, sigorta ve kodun kaydı sende; makinenin içi ve su koruma sistemi uzmanın. Profilo kılavuzları usulüne uygun olmayan onarımların tehlikeli olduğunu, cihazda yalnız eğitimini almış uzman personelin onarım yapabileceğini yazıyor.

## Servisi aramadan önce kısa özet

1. Ekrandaki kod tam olarak ne?
2. Tip plaketindeki ürün numarası (E-Nr.) ve imalat numarası (FD) ne?
3. Kod hangi aşamada çıktı: program başında mı, ortasında mı?
4. Makinenin çevresinde su var mı?
5. Musluk kapatıldı ve fiş çekildi mi?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç çalışmıyorsa [Profilo bulaşık makinesi çalışmıyor](/blog/profilo-bulasik-makinesi-calismiyor/) rehberine, su boşaltma kodları için [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) yazısına bak. Bil, gör, çağır.
