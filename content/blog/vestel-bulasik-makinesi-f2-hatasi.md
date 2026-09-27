---
title: "Vestel bulaşık makinesi F2 hatası"
description: "Vestel bulaşık makinesi F2 hatası: Vestel'e göre su tahliye edilmiyor. Programı iptal, filtre grubu, tahliye hortumu kontrolü adım adım."
slug: "vestel-bulasik-makinesi-f2-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext (düz ve -layout, sayfa sayfa) ile okundu.
# Sayfa numaraları PDF sayfasıdır (pdftotext -f/-l), basılı sayfa numarası değil.
# Web araması bu belgeler için KULLANILMADI: üçünün yeri hub'ın (vestel-bulasik-makinesi-hata-kodlari) provenans bloğundan alındı.
#  A) BM 8402 GI Pro WIFI   https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410  (sayfa atıfları bu belgeye göre)
#  B) BM 10502 X GI WIFI    https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff
#  C) BM-401 (eski nesil)   https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# F2 satırı A s.50 ve B s.49'da BİREBİR aynı:
#   "F2 | Su tahliye edilmiyor | Su tahliye hortumu ve filtreler tıkanmış olabilir. Programı iptal edin.
#    Arıza devam ederse servisle iletişime geçin."
# C s.40 (eski nesil) aynı kod, aynı yön: "F2 | Makine atık suları boşaltamıyor. | Su boşaltma hortumu tıkalı olabilir.
#   Makinenizin filtreleri tıkalı olabilir. Makinenizi kapatıp-açın ve program iptal komutunu devreye sokun.
#   Hata devam ediyorsa servise başvurunuz."
# Program iptali: A s.39 / B s.39 "Başlat/Beklet tuşuna 3 saniye basılı tutun ... Makine, içerisinde bulunan suyu yaklaşık
#   30 saniye boyunca tahliye eder." · C s.32 aynı (Başla/Bekle, 30 saniye).
# Filtre grubu: A s.43 (B s.42 aynı) · Tahliye pompası bölgesi temizliği 7 adım + "Kesik riski" uyarısı: A s.44 (B s.43 aynı).
# Tahliye hortumu: A s.13 (gidere/evye bağlantısı, 50-110 cm) · A s.12 (hortumlar sıkışmasın) · C s.12 (4 m'den uzun hortum kullanılmaz).
# Sorun giderme "Program bittikten sonra makine içinde su kalıyor": A s.46 · "Su boşaltma pompası tıkanmış olabilir → Servis çağırınız": A s.47.
# YAZILMAYANLAR: pompa pervanesi/pompa kapağı sökme (belgede kullanıcı adımı değil; #31) · "pompa zayıflamış" teşhisi (belgede yok) ·
#   lavabo giderini açma yöntemi (belgede yok; yalnız "tıkanmaya neden olan malzemeleri temizleyin") · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-f2-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Havlu", "Küçük bir kap"]
steps:
  - "Başlat/Beklet tuşuna 3 saniye basılı tutarak programı iptal et ve makinenin suyu tahliye etmesini bekle."
  - "Makineyi Açma/Kapama tuşuyla kapat ve fişini prizden çek."
  - "Alt sepeti çıkar."
  - "Filtre grubunu saatin aksi yönünde çevirip yukarı kaldırarak çıkar ve filtreleri birbirinden ayır."
  - "Filtreleri, kalıntılardan temizlenene kadar bol suyla durula."
  - "Filtre yuvasında kalan suyu süngerle al ve yuvadaki yabancı cisimleri dikkatle temizle."
  - "Filtreleri birleştir, grubu yerine takıp saat yönünde çevir ve sepeti geri yerleştir."
  - "Tahliye hortumunun bükülmediğini kontrol et, fişi tak ve programı yeniden başlat; F2 sürerse servisle iletişime geç."
faq:
  - q: "Vestel bulaşık makinesi F2 hatası ne demek?"
    a: "Vestel'in kullanım kılavuzlarındaki arıza kodu tablosunda F2'nin karşılığı su tahliye edilmiyor. Tablonun çözüm sütununa göre su tahliye hortumu ve filtreler tıkanmış olabilir; programı iptal et, arıza devam ederse servisle iletişime geç."
  - q: "Programı nasıl iptal ederim?"
    a: "Vestel kılavuzuna göre program çalışırken Başlat/Beklet tuşuna 3 saniye basılı tutulur. İptal sırasında Bitiş ışığı yanıp söner ve makine içindeki suyu yaklaşık 30 saniye boyunca tahliye eder. Eski nesil kılavuzda da aynı işlem Başla/Bekle tuşuyla yapılıyor."
  - q: "Filtreyi temizlerken nelere dikkat etmeliyim?"
    a: "Önce makinenin güç kaynağını kes. Vestel, atık su pompası bölgesini temizlerken kırık cam parçaları ya da sivri uçlu eşyalar nedeniyle yaralanma riskine karşı uyarıyor; elini körlemesine sokma. Filtre grubunu geri takarken saat yönünde çevirerek yerine oturt: Vestel'e göre filtrenin hatalı takılması yıkama verimini düşürür ve makine asla filtresiz kullanılmamalıdır."
  - q: "F2 yoksa ama program bitince makinede su kalıyorsa?"
    a: "Vestel'in sorun giderme tablosunda bu belirtinin sebepleri su boşaltma hortumunun tıkalı ya da katlanmış olması, filtrelerin tıkanması ya da programın henüz bitmemiş olmasıdır. Çözüm tıkanmaya neden olan malzemeleri temizleyip makineyi yeniden çalıştırmak ya da programın bitmesini beklemektir."
  - q: "Filtreler temiz, F2 hâlâ çıkıyor. Ne yapmalıyım?"
    a: "Vestel'in F2 talimatı bu noktada servisle iletişime geçmek. Kılavuza göre filtrelerin yakalayamadığı büyük yemek kalıntıları ve yabancı nesneler atık su pompasını tıkayabilir; filtre yuvasında görünen cisimleri almak kullanıcının işi, pompanın kendisi ise servisin işidir."
images:
  coverAlt: "Alt sepeti çıkarılmış açık bir bulaşık makinesinin tabanında silindirik filtre grubu ve yanında bir sünger"
---

Program bitmedi, makine durdu ve ekranda **F2** yazıyor; kapağı açtığında tabanda su bekliyor olabilir. Vestel'in bulaşık makinesi kullanım kılavuzlarındaki arıza kodu tablosunda bu kodun karşılığı: **"Su tahliye edilmiyor."** Çözüm sütunu iki şüpheli sayıyor ve bir işlem veriyor: **su tahliye hortumu ve filtreler tıkanmış olabilir; programı iptal et.** Arıza devam ederse servis. Bu yazıda o talimatı, aynı kılavuzların bakım ve kurulum bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F2 = Vestel'e göre su tahliye edilmiyor. Sıra şu: Başlat/Beklet 3 saniye → program iptal, makine suyu tahliye eder → fişi çek → alt sepet çıkar → filtre grubunu çıkar, bol suyla durula → yuvadaki suyu süngerle al, cisimleri temizle → filtreyi kilitle → tahliye hortumuna bak → yeniden başlat. F2 sürüyorsa → servis.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Vestel'in F2 talimatındaki işlem bu. Kılavuza göre program çalışırken **Başlat/Beklet tuşuna 3 saniye basılı tut**; iptal sırasında Bitiş ışığı yanıp söner ve makine içindeki suyu **yaklaşık 30 saniye** boyunca tahliye eder.

**2. Makineyi kapat, fişini çek.** Bitiş ışığı yandığında makineyi Açma/Kapama tuşuyla kapat. Vestel, tahliye bölgesini temizlemeden önce **cihazın güç kaynağının her zaman kesilmesini** istiyor.

**3. Alt sepeti çıkar.** Filtre grubu yıkama bölmesinin tabanındadır; alt sepet çıkınca görünür.

**4. Filtre grubunu çıkar.** Kılavuzdaki sıra: filtre kombinasyonunu **saatin aksi yönünde çevirip yukarı kaldırarak** çıkar; kalın filtreyi çekerek mikro filtreden ayır; ardından metal filtreyi çekip çıkar.

**5. Filtreleri durula.** Vestel'in ifadesiyle filtreyi **kalıntılardan temizlenene kadar bol suyla** durula. Kalın ve ince filtrede yiyecek artığı ya da yabancı cisim kalmışsa sıyır ve suyla iyice temizle.

**6. Yuvaya bak.** Kılavuza göre filtrelerin yakalayamadığı büyük yemek kalıntıları ve yabancı nesneler atık su pompasını tıkayabilir; bu durumda su seviyesi filtrenin üzerinde kalır. Vestel'in bu durum için verdiği sıra: suyu dışarı at, **gerekirse sünger kullan**; ilgili alanı kontrol et ve **tüm yabancı nesneleri temizle**.

⚠️ **Kesik riski.** Vestel, bu bölgeyi temizlerken **kırık cam parçaları ya da sivri uçlu eşyalar** nedeniyle yaralanmamaya dikkat edilmesini istiyor. Elini körlemesine sokma; önce bak, sonra al.

**7. Filtreyi ve sepeti yerine tak.** Filtreleri birleştir, grubu yerine tak ve **saat yönünde** çevir. Ardından sepeti geri yerleştir.

**8. Tahliye hortumunu kontrol et ve yeniden dene.** Hortumun tezgâh altında bükülmediğine, ezilmediğine bak (aşağıda ayrıntısı var). Fişi tak ve programı yeniden başlat. F2 yine geliyorsa Vestel'in talimatı: **servisle iletişime geç.**

## Filtreyi doğru takmak neden önemli?

Vestel kılavuzları üç kuralı birlikte veriyor:

- Bulaşık makinesini **asla filtresiz** kullanma.
- Filtrenin **hatalı takılması** yıkama verimini azaltır.
- Makinenin düzgün çalışması için **filtrelerin temiz olması** gerekir.

Kılavuzun bakım önerisi de net: filtreleri ve püskürtme kollarını **en az haftada bir** temizle. Markadan bağımsız ayrıntılı anlatım için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısına bakabilirsin.

## Tahliye hortumu: Vestel'in kurulum kuralları

F2 satırında filtrelerin yanında **su tahliye hortumu** da sayılıyor. Kılavuzun kurulum bölümüne göre:

- Tahliye hortumu doğrudan pis su boşaltma deliğine ya da **lavabonun pis su giderine** bağlanabilir; varsa özel bükümlü dirsekle evye kenarına takılıp su doğrudan evyeye verilebilir.
- Bu bağlantı yerden **en az 50 cm, en çok 110 cm** yüksekte olmalıdır.
- Cihaz yerine yerleştirilirken **su giriş ve çıkış hortumları sıkışmamalıdır.**
- Eski nesil kılavuz ayrıca **4 metreden uzun tahliye hortumu** kullanılmamasını istiyor.

Makineyi yerinden oynattıysan, tezgâh altına yeni bir şey yerleştirdiysen ya da hortumun bağlı olduğu gider yavaş akıyorsa kontrol edilecek yer burası.

## Kod yok ama makinede su kalıyorsa

Vestel'in sorun giderme tablosunda "program bittikten sonra makine içinde su kalıyor" şikâyetinin üç sebebi var: **su boşaltma hortumu tıkalı ya da katlanmış**, **filtreler tıkanmış** ya da **program henüz sona ermemiş.** İlk ikisinin çözümü tıkanmaya neden olan malzemeleri temizleyip makineyi yeniden çalıştırmak, üçüncüsünün çözümü programın bitmesini beklemek. Kodsuz belirti için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısı da var.

## Eski nesil Vestel'de F2

Eski nesil kılavuzda F2'nin karşılığı **"Makine atık suları boşaltamıyor."** Yön aynı: su boşaltma hortumu ya da filtreler tıkalı olabilir. Eski nesilde talimat bir adım fazla: **makineyi kapatıp açın ve program iptal komutunu devreye sokun**; hata devam ederse servise başvurun. Vestel'in diğer bulaşık kodları için [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Sınır nerede biter

Filtre grubu temiz ve doğru takılı, yuvada cisim yok, tahliye hortumu düz ve F2 sürüyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor: **servisle iletişime geç.** Kılavuzun sorun giderme tablosu da "su boşaltma pompası tıkanmış olabilir" durumunda **servis çağırılmasını** istiyor ve genel kural olarak onarımların yalnızca teknisyenlerce yapılabileceğini yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Filtre, filtre yuvası ve tahliye hortumu kullanıcıya; tahliye pompası ve tablanın altı servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Program Başlat/Beklet 3 saniye ile iptal edildi mi, makine suyu attı mı?
2. Filtre grubu çıkarılıp bol suyla durulandı mı?
3. Filtre yuvasında görünür bir cisim kaldı mı?
4. Filtre saat yönünde çevrilip yerine oturdu mu?
5. Tahliye hortumu bükülmüş, ezilmiş ya da gider yavaş mı?

Bu beşine cevabın varsa servise "makine suyu atmıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
