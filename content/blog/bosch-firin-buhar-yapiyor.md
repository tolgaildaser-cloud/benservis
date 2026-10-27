---
title: "Bosch fırın buhar yapıyor: kapakta ve dolapta su damlaları"
description: "Bosch fırının kapağında, kumanda alanında ya da yan dolapta su damlası mı var? Bosch'a göre yoğuşma normal; ön ısıtma, conta ve kapak kuralları."
slug: "bosch-firin-buhar-yapiyor"
date: "2026-10-01"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-01, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (sayfa no = PDF sayfası).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  KAYNAK DÜZELTMESİ 2026-10-27 (#88): önceki B1/B2 olarak anılan 9001771866_D ve 9001627929_B Profilo kılavuzu çıktı; kaynaktan çıkarıldı.
#  B1) Bosch "Ankastre fırın HBF512B.1T — Kullanım kılavuzu ve kurulum talimatları", 28 s., md5 3fac75fc8fb8bbef288fcc478b030ece (2026-10-27, HTTP 200)
#      https://media3.bsh-group.com/Documents/9001944574_A.pdf
#      s.8 "Yoğuşma suyu — Pişirme sırasında pişirme bölümünde ve cihaz kapağında yoğuşma suyu oluşabilir. Yoğuşma suyu normaldir ve cihazın fonksiyonunu etkilemez. Pişirme işleminden sonra yoğuşma suyu temizlenmelidir."
#      s.8 "Soğutma fanı ... Sıcak hava kapağın üzerinden dışarı çıkar. DİKKAT! Cihaz kapağındaki havalandırma yarıklarının üzerini örtmeyiniz. Cihaz aşırı ısınır. ▶ Havalandırma yarıkları açık bırakılmalıdır."
#      s.3 "Cihaz kapısının açılması sırasında sıcak buhar çıkışı olabilir. Sıcaklık durumuna göre buhar görünmeyebilir. ▶ Cihaz kapağı dikkatlice açılmalıdır. ▶ Çocuklar uzak tutulmalıdır."
#      s.4 "Pişirme bölümünde su bulunması halinde su buharı oluşur. Sıcaklık değişimi nedeniyle hasarlar meydana gelebilir. ▶ Sıcak pişirme bölümüne kesinlikle su dökülmemelidir." / "Pişirme bölümünde uzun süre kalan nem korozyona neden olur. ▶ Kullanım sonrasında pişirme bölümünün kuruması beklenmelidir. ▶ Kapalı pişirme bölümünde uzun süre nemli gıda maddesi muhafaza edilmemelidir." / "Contanın aşırı kirli olması halinde cihaz kapağı artık tam olarak kapanmaz. Yandaki mobilyaların panelleri hasar görebilir. ▶ Contayı daima temiz tutunuz. ▶ Cihazı asla hasarlı bir contayla veya contasız olarak çalıştırmayınız." / "Cihazın kapağı açık şekilde soğutulması zaman içinde yanında bulunan mobilya panellerinin hasar görmesine neden olur."
#      s.12 temizlik tablosu "Kapak contası — Sıcak deterjanlı su — Çıkarılmamalı ve aşındırılmamalıdır."
#      s.19 "Müşteri hizmetlerine başvurduğunuzda cihazınızın ürün numarasını (E-Nr.) ve imalat numarasını (FD) hazır bulundurunuz."
#  B2) Bosch "[tr] Kullanma kılavuzu Ankastre fırın HBB23C...", 20 s., md5 5544858a428c91894c15726616c53729
#      https://media3.bsh-group.com/Documents/9000728669_B.pdf
#      s.6 "Bilgi: Cam üzerinde aşırı yoğuşmayı önlemek için fırının ön ısıtmasını daima yemeği içine koymadan önce gerçekleştirmeniz önerilir."
#      s.3 "Açık cihaz kapağı ile soğutma: Pişirme alanını sadece kapalı soğumaya bırakınız. Cihaz kapağı sadece aralık bırakılsa bile yanındaki mobilya yüzeyleri zamanla zarar görebilir." / "Nemli gıdalar: Kapalı pişirme alanında uzun süre nemli gıdalar saklamayınız." / "Çok kirli kapı contası: Kapı contası aşırı kirlenmiş ise, cihaz çalışırken fırın kapısı doğru bir şekilde kapanmayacaktır. Yandaki mobilya yüzeyleri hasar görebilir."
#      s.14 "Şuruplu pastalar pişirmek su yoğunlaşmasına neden oluyor." → "Pişirme ile su buharı oluşabilir. Bu buharın bir kısmı fırın kapağındaki kelepçeden dışarı çıkar ve kumandaların bulunduğu panel ya da fırının yanında bulunan mobilyaların üzerinde su damlaları olarak yoğunlaşır. Bu fiziksel bir olaydır."
#      s.16 "Kızartma suyu kızartmanın üzerine dökülürken su buharı oluşuyor." → "Bu fiziksel olarak gereklidir ve normaldir. Su buharının büyük bir kısmı buhar çıkışından sızar. Su buharı soğutucu şalterin önüne veya yakındaki mobilyalar üzerine yerleşip yoğunlaşmış su damlaları oluşturabilir."
# BİLEREK YAZILMAYANLAR: conta değişimi ya da sökümü (kılavuz "çıkarılmamalı" diyor; hasarlı conta → servis); kapak camlarının sökülmesi (söküm, #31); "kapaktan buhar kaçıyorsa conta bozuktur" gibi belgede olmayan teşhis; menteşe/kapak ayarı.
# Alıntı denetim tablosu: bosch-firin-buhar-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Sıcak deterjanlı su"]
steps:
  - "Fırın kapağını dikkatlice aç; kapak açılırken sıcak buhar çıkabilir, çocukları uzak tut."
  - "Camda aşırı yoğuşmayı önlemek için ön ısıtmayı yemeği fırına koymadan önce yap."
  - "Pişirme bittikten sonra kapaktaki, kumanda alanındaki ve yan dolaplardaki su damlalarını sil."
  - "Fırını kapağı kapalıyken soğumaya bırak; kapağı aralık bırakma."
  - "Kullanımdan sonra pişirme bölümünün kurumasını bekle; nemli yiyecekleri kapalı fırında uzun süre bekletme."
  - "Kapak contasını sıcak deterjanlı suyla temiz tut; contayı çıkarma ve aşındırıcı kullanma."
  - "Kapaktaki havalandırma yarıklarının üstünü örtme."
faq:
  - q: "Bosch fırınımın kapağında ve dolapta su damlaları oluyor, arıza mı?"
    a: "Bosch'a göre hayır. HBF512B kılavuzu, pişirme sırasında pişirme bölümünde ve cihaz kapağında yoğuşma suyu oluşabileceğini, bunun normal olduğunu ve cihazın fonksiyonunu etkilemediğini yazıyor; pişirmeden sonra suyun temizlenmesini istiyor. HBB23C kılavuzu da buharın bir kısmının kapaktan çıkıp kumanda panelinde ya da yandaki mobilyada su damlası olarak yoğunlaştığını ve bunun fiziksel bir olay olduğunu söylüyor."
  - q: "Yoğuşmayı azaltmak için ne yapabilirim?"
    a: "Bosch'un önerisi ön ısıtma: HBB23C kılavuzu, cam üzerinde aşırı yoğuşmayı önlemek için ön ısıtmayı daima yemeği fırına koymadan önce yapmanı öneriyor."
  - q: "Kapağı açınca yüzüme sıcak buhar geliyor."
    a: "Bosch kılavuzu kapak açılırken sıcak buhar çıkabileceğini ve sıcaklık durumuna göre buharın görünmeyebileceğini yazıyor. Kapağı dikkatlice aç, çocukları uzak tut."
  - q: "Fırın contası kirli, sorun olur mu?"
    a: "Bosch'a göre conta aşırı kirliyse cihaz kapağı tam kapanmaz ve yandaki mobilyaların panelleri hasar görebilir. Contayı sıcak deterjanlı suyla temiz tut; Bosch'un temizlik tablosuna göre conta çıkarılmamalı ve aşındırılmamalı. Bosch, cihazın hasarlı bir contayla ya da contasız çalıştırılmamasını da istiyor; conta hasarlıysa müşteri hizmetlerine başvur."
images:
  coverAlt: "Ankastre fırının cam kapağının iç yüzünde ve üstündeki tezgâh dolabının alt kenarında biriken küçük su damlaları"
  steps:
    - "Çizim: solda ankastre fırın, sağda kapak"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda uzaktan kumanda"
    - "Çizim: solda ankastre fırın, sağda bekleme süresi için saat"
    - "Çizim: solda ankastre fırın, sağda iç bölme ve raflar"
    - "Çizim: solda ankastre fırın, sağda deterjan bölmesi"
    - "Çizim: solda ankastre fırın, sağda hava giriş ve çıkış ızgarası"
---

Fırında börek ya da kızartma pişiyor; kapağın camı buğulanıyor, kumanda panelinin önünde ve yandaki dolabın kenarında su damlaları birikiyor. Bosch'un Türkçe ankastre fırın kılavuzlarında bunun bir başlığı var: **"Yoğuşma suyu."** HBF512B kılavuzuna göre pişirme sırasında pişirme bölümünde ve kapakta **yoğuşma suyu oluşabilir;** bu **normaldir** ve cihazın fonksiyonunu etkilemez. HBB23C kılavuzu kumanda panelindeki ve yan mobilyadaki damlalar için de aynı şeyi söylüyor: **bu fiziksel bir olaydır.** Yine de Bosch iki şey istiyor: suyun silinmesi ve kapak, conta, havalandırma kurallarına uyulması. Bu yazıda Bosch'un HBF512B ve HBB23C kılavuzlarındaki kuralları tek listede topluyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapakta ve dolapta su damlası Bosch'a göre arıza değil, yoğuşma. Ön ısıtma yap, pişirmeden sonra damlaları sil, fırını kapak kapalıyken soğut, contayı temiz tut, kapaktaki havalandırma yarıklarını örtme. Conta hasarlıysa ya da yerinden çıkmışsa fırını çalıştırma → Bosch müşteri hizmetleri.

## Buhar nereden çıkıyor?

Bosch'un kılavuzları buharın görüldüğü yerleri ayrı ayrı anlatıyor:

| Nerede görüyorsun | Bosch'un açıklaması |
|---|---|
| Kapağın camında, pişirme bölümünde | Pişirme sırasında yoğuşma suyu oluşabilir; normaldir, cihazın fonksiyonunu etkilemez |
| Kumanda panelinde, yan dolapta | Buharın bir kısmı kapaktan çıkar, panelde ve mobilyada damla olarak yoğunlaşır; fiziksel bir olaydır |
| Kapağın üstünden sıcak hava | Soğutma fanının sıcak havası kapağın üzerinden çıkar |
| Kapağı açınca yüzüne gelen sıcak buhar | Kapak açılırken sıcak buhar çıkabilir; sıcaklığa göre görünmeyebilir |

HBB23C kılavuzu iki örnek de veriyor: **şuruplu pastalar** pişirirken ve **kızartma suyu** etin üzerine dökülürken su buharı oluşur; Bosch ikisini de normal sayıyor.

## Adım adım: evde denenecekler

**1. Kapağı doğru aç.** Fırın kapağını dikkatlice aç; kapak açılırken sıcak buhar çıkabilir, çocukları uzak tut. Bosch'un uyarısı: **sıcaklık durumuna göre buhar görünmeyebilir.**

**2. Ön ısıtma.** Camda aşırı yoğuşmayı önlemek için ön ısıtmayı yemeği fırına koymadan önce yap. HBB23C kılavuzunun önerisi bu: cam üzerinde aşırı yoğuşmayı önlemek için ön ısıtmayı **daima yemeği içine koymadan önce** yap.

**3. Damlaları sil.** Pişirme bittikten sonra kapaktaki, kumanda alanındaki ve yan dolaplardaki su damlalarını sil. HBF512B kılavuzunun kuralı: **pişirme işleminden sonra yoğuşma suyu temizlenmelidir.** HBB23C kılavuzuna göre panelde ve yan mobilyada biriken damlalar da aynı buhardan geliyor.

**4. Kapak kapalı soğut.** Fırını kapağı kapalıyken soğumaya bırak; kapağı aralık bırakma. HBB23C kılavuzuna göre kapak yalnız aralık bırakılsa bile **yanındaki mobilya yüzeyleri zamanla zarar görebilir.**

**5. Kuru bırak.** Kullanımdan sonra pişirme bölümünün kurumasını bekle; nemli yiyecekleri kapalı fırında uzun süre bekletme. HBF512B kılavuzuna göre pişirme bölümünde uzun süre kalan nem korozyona neden olur. Aynı bölümdeki bir uyarı daha: **sıcak pişirme bölümüne kesinlikle su dökülmemeli;** su buharı oluşur ve sıcaklık değişimi hasara yol açabilir.

**6. Conta.** Kapak contasını sıcak deterjanlı suyla temiz tut; contayı çıkarma ve aşındırıcı kullanma. Bosch'a göre conta aşırı kirliyse **cihaz kapağı tam kapanmaz** ve yandaki mobilyaların panelleri hasar görebilir.

**7. Havalandırma yarıkları.** Kapaktaki havalandırma yarıklarının üstünü örtme. HBF512B kılavuzuna göre soğutma fanının sıcak havası kapağın üzerinden çıkar ve bu yarıklar örtülürse **cihaz aşırı ısınır.**

## Ne zaman servis?

Yoğuşmanın kendisi Bosch'a göre arıza değil; silmek ve ön ısıtma yapmak yeterli. Bosch'un çizdiği sınır contada: **cihazı asla hasarlı bir contayla ya da contasız çalıştırma.** Conta hasarlıysa ya da yerinde değilse fırını kullanmayı bırak ve Bosch müşteri hizmetlerine başvur. Ararken tip plaketindeki **ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır tut.

| Durum | Kimin işi |
|---|---|
| Kapakta, panelde, dolapta su damlaları | Senin: ön ısıtma ve silme |
| Kirli conta | Senin: sıcak deterjanlı suyla temizlik |
| Conta hasarlı ya da yerinde değil | Bosch müşteri hizmetleri |

⛔ Contayı sökmeye, kapak camlarını çıkarmaya ya da kapak menteşesine müdahale etmeye çalışma.

Fırın buhar yapıyor ama ısınmıyorsa kardeş rehberimiz [Bosch fırın ısınmıyor](/blog/bosch-firin-isinmiyor/) yazısına geç. Fırını temizlerken nelere dikkat edeceğin [fırın nasıl temizlenir](/blog/firin-nasil-temizlenir/) yazısında.

---

**Kaynak künyesi.** Yoğuşma, buhar, conta ve havalandırma kuralları Bosch'un Türkçe ankastre fırın kılavuzlarından (HBF512B.1T ve HBB23C serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
