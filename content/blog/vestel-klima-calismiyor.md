---
title: "Vestel klima çalışmıyor: evde kontrol"
description: "Vestel klima açılmıyorsa kılavuzdaki sıra: elektrik kesintisi, açma düğmesi, kumanda pili, zamanlayıcı, yakındaki ışık kaynağı ve servis sınırı."
slug: "vestel-klima-calismiyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Vestel'in kendi alan adı (statik/static.vestel.com.tr).
# Web araması YALNIZ belgenin yerini bulmak için. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-sprint/ · pdftotext -layout -f N -l N.
#  V1) Vestel "Klima Kullanım Kılavuzu · Nova Inverter 12 A++ GI WIFI R32", 48 s., md5 8814dd2a3ddbfd95d191e6e3b3af5d7e (PDF sayfası = basılı sayfa)
#      https://statik.vestel.com.tr/webfiles/20234421_k.pdf
#      s.34 "Sorun Giderme" giriş: "Klimanızda normal olmayan bir durum tespit ettiğinizde aşağıdaki açıklamalar doğrultusunda sorunu çözmeye çalışabilirsiniz. Klimanız hala normal çalışmasına devam etmiyorsa İletişim Merkezi veya en yakın Yetkili Servis ile irtibata geçiniz."
#      s.34 "Klima Çalışmıyor." → "Elektrik kesintisi. | Elektriklerin gelmesini bekleyin." / "Açma / kapama düğmesi açık değil. | Klimayı açın." / "Sigorta arızalı. | Sigortanın değiştirilmesini sağlayın." / "Kumandanın pili bitmiş. | Pili değiştirin." / "Çalışmanın başlaması için belirlenen zamana ulaşılamamış. | Bekleyin veya ayarlamayı iptal edin." / "Kumanda algılamıyor. | Pili değiştirin." / "Klimaya çok yakın ışık kaynağı. | Klimaya yakın bazı ışık kaynakları manyetik bir etki yaratarak kumandanın çalışmasına engel olabilir. Işık kaynağını devre dışı bırakarak kumandayı yeniden kullanmayı deneyin. Sorun gideriliyorsa ışık kaynağını değiştirmeniz yararınıza olacaktır."
#      s.33 "Enerji kesintisinin ardından enerji yeniden geldiğinde klima kendiliğinden kaldığı yerden çalışmaya devam eder." / "şebeke geriliminde aşırı düşme ya da yükselme meydana gelirse klima durur (ekranda HL kodlu voltaj koruma simgesi görülebilir) ve gerilim normale döndüğünde yeniden çalışmaya başlar."
#      s.36 "Hata mesajları sırayla önce Er simgesi sonra da hatanın kendine özel kodu (01, 02, ..., 20, vb) görüntülenerek belirtilir. Bu durumda klimaya herhangi bir şey yapmayın ve Yetkili Servis ile iletişime geçin. Er11 ve Er13 hata mesajları değildir." / "HL Elektrik geriliminde dalgalanma var, gerilimin düzelmesini bekleyin."
#      s.21 "Kumanda ekranındaki simgesi pillerin tükendiğini gösterir. Bu simgeyi gördüğünüzde pilleri değiştirin. İki adet AAA tip 1,5 V kalem pil kullanın, şarj edilebilir pil kullanmayın." / "(+) ve (-) yönlerinin doğru olduğuna dikkat ederek"
#      s.9 "Klimadan garip bir ses, duman ve koku gelirse. Eğer belirtilen durumlardan birisi tespit edilirse, klimanızı hemen kapatın, güç bağlantısını kesin ve yetkili servisle irtibata geçin." / "Klimanızda herhangi bir arıza meydana gelirse, klimayı kendiniz tamir etmeye çalışmayın, klimayı sökmeyin." / "Klimanın içinde kullanıcı tarafından tamiri yapılabilecek parça yoktur."
#  V2) Vestel "Klima Kullanım Kılavuzu · Plazma Inverter 9/12/18/24 A++", 48 s., md5 b08e2688400ea04682d820016c8e8305 (PDF s.35 = basılı s.34)
#      https://static.vestel.com.tr/kullanimkilavuzlari/52162881.pdf
#      PDF s.35 "Klima Çalışmıyor." satırı aynı (elektrik kesintisi, açma/kapama, "Sigorta yanmış.", pil, zamanlayıcı); ışık kaynağı satırı bu kılavuzda yok.
# BİLEREK YAZILMAYANLAR: sigorta değiştirme (kılavuz "değiştirilmesini sağlayın" diyor; elektrik müdahalesi, #31) · Er11/Er13 için model farkı (Nova "kumandadan tekrar çalıştır", Plazma "sigortadan 30 sn kes" diyor) → hub'a bırakıldı · Reset işlevi (sorun giderme tablosunda yok) · fiyat.
# Alıntı denetim tablosu: vestel-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet AAA 1,5 V pil"]
steps:
  - "Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle."
  - "Klimanın açma/kapama düğmesiyle açık olduğundan emin ol."
  - "Kumanda ekranında pil simgesi varsa iki adet AAA 1,5 V pili artı-eksi yönüne dikkat ederek değiştir."
  - "Açma zamanlayıcısı kuruluysa bekle ya da ayarı iptal et."
  - "Klimaya çok yakın bir ışık kaynağı varsa onu kapatıp kumandayı yeniden dene."
  - "İç ünite ekranında HL görüyorsan gerilimin düzelmesini bekle."
  - "Sorun sürerse, ekranda Er ile başlayan kod varsa ya da sigorta arızalıysa Vestel İletişim Merkezi'ne veya yetkili servise başvur."
faq:
  - q: "Vestel klima neden açılmaz?"
    a: "Vestel kılavuzunun sorun giderme tablosu 'Klima Çalışmıyor' satırında şu nedenleri sayıyor: elektrik kesintisi, açma/kapama düğmesinin açık olmaması, sigorta arızası, kumandanın pilinin bitmesi, açma zamanlayıcısının henüz gelmemiş olması, kumandanın algılanmaması ve Nova Inverter kılavuzunda klimaya çok yakın bir ışık kaynağı."
  - q: "Elektrik gidip geldi, klimayı yeniden mi açmam gerekiyor?"
    a: "Vestel Nova Inverter kılavuzuna göre enerji yeniden geldiğinde klima kendiliğinden kaldığı yerden çalışmaya devam eder. Klima hâlâ kapalıysa açma düğmesiyle aç ve kumandanın pilini kontrol et."
  - q: "Lamba klimayı nasıl etkiler?"
    a: "Vestel Nova Inverter kılavuzu klimaya yakın bazı ışık kaynaklarının kumandanın çalışmasına engel olabileceğini yazıyor. Işık kaynağını kapatıp kumandayı yeniden dene; sorun böyle gideriliyorsa kılavuz ışık kaynağını değiştirmeni öneriyor."
  - q: "Sigorta attı, kendim değiştirebilir miyim?"
    a: "Vestel'in çözüm sütunu 'Sigortanın değiştirilmesini sağlayın' diyor ve klimayı kendin tamir etmeye çalışmamanı istiyor. Sigorta değişimi bir elektrik müdahalesidir; bunu kendin yapma, Vestel İletişim Merkezi'nden ya da yetkili servisten destek iste."
images:
  coverAlt: "Akşam saatinde salonda kapalı duran beyaz split klimaya kumanda tutan bir el, yanında yanan bir ayaklı lamba"
---

Kumandaya basıyorsun, klima tepki vermiyor. Vestel'in Türkçe kullanım kılavuzu bu durumu sorun giderme tablosunda **"Klima Çalışmıyor."** satırıyla açıyor ve çözüm sütununun büyük kısmı evde kontrol edilebilecek şeyler: **"Elektriklerin gelmesini bekleyin."**, **"Klimayı açın."**, **"Pili değiştirin."**, **"Bekleyin veya ayarlamayı iptal edin."** Nova Inverter kılavuzu buna az bilinen bir madde ekliyor: klimaya çok yakın bir ışık kaynağı. Bu yazıda Vestel'in sırasını, servis sınırıyla birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı, klima açma düğmesiyle açık mı? Kumanda ekranında pil simgesi var mı? Açma zamanlayıcısı kurulu mu? Klimanın hemen yanında bir lamba yanıyor mu? Ekranda HL varsa gerilimin düzelmesini bekle. Er ile başlayan kod, arızalı sigorta ya da duman ve koku varsa → Vestel yetkili servisi.

## Vestel'in tablosu

Vestel kılavuzlarının "Klima Çalışmıyor" satırı şu nedenleri ve çözümleri veriyor:

| Neden (Vestel'in sözüyle) | Vestel'in çözümü | Kimin işi |
|---|---|---|
| Elektrik kesintisi | Elektriklerin gelmesini bekleyin | Senin |
| Açma / kapama düğmesi açık değil | Klimayı açın | Senin |
| Kumandanın pili bitmiş · kumanda algılamıyor | Pili değiştirin | Senin |
| Çalışmanın başlaması için belirlenen zamana ulaşılamamış | Bekleyin veya ayarlamayı iptal edin | Senin |
| Klimaya çok yakın ışık kaynağı (Nova Inverter) | Işık kaynağını devre dışı bırakıp kumandayı yeniden deneyin | Senin |
| Sigorta arızalı | Sigortanın değiştirilmesini sağlayın | Kendin yapma, servis |

## Adım adım: evde denenecekler

**1. Elektrik.** Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle. Nova Inverter kılavuzuna göre enerji yeniden geldiğinde klima kendiliğinden kaldığı yerden çalışmaya devam eder.

**2. Açma düğmesi.** Klimanın açma/kapama düğmesiyle açık olduğundan emin ol. Vestel tablosunda "Açma / kapama düğmesi açık değil" ayrı bir satır.

**3. Kumanda pili.** Kumanda ekranında pil simgesi varsa iki adet AAA 1,5 V pili artı-eksi yönüne dikkat ederek değiştir. Vestel şarj edilebilir pil kullanılmamasını istiyor; kumanda klimayı algılamıyorsa da çözüm sütunu yine pil değişimi.

**4. Zamanlayıcı.** Açma zamanlayıcısı kuruluysa bekle ya da ayarı iptal et. Kılavuzun sözüyle klima, çalışmanın başlaması için belirlenen zamana ulaşılmadıysa açılmaz.

**5. Işık kaynağı.** Klimaya çok yakın bir ışık kaynağı varsa onu kapatıp kumandayı yeniden dene. Nova Inverter kılavuzuna göre klimaya yakın bazı ışık kaynakları kumandanın çalışmasına engel olabilir; sorun böyle gideriliyorsa kılavuz ışık kaynağını değiştirmeni öneriyor.

**6. HL mesajı.** İç ünite ekranında HL görüyorsan gerilimin düzelmesini bekle. Vestel'e göre şebeke geriliminde aşırı düşme ya da yükselme olursa klima durur ve gerilim normale dönünce yeniden çalışır.

**7. Sürerse servis.** Sorun sürerse, ekranda Er ile başlayan kod varsa ya da sigorta arızalıysa Vestel İletişim Merkezi'ne veya yetkili servise başvur. Kılavuz Er mesajlarında klimaya bir şey yapmamanı istiyor; Er11 ve Er13'ün ayrıntısı [Vestel klima hata kodları](/blog/vestel-klima-hata-kodlari/) yazısında.

## Ne zaman servis?

Vestel tablonun girişinde sınırı koyuyor: açıklamalara göre denedikten sonra klima hâlâ normal çalışmıyorsa İletişim Merkezi ya da en yakın yetkili servis.

| Durum | Kimin işi |
|---|---|
| Elektrik, açma düğmesi, pil, zamanlayıcı, ışık kaynağı, HL için bekleme | Senin, bu rehberdeki adımlar |
| Sigorta arızalı ya da yanmış | Vestel İletişim Merkezi ya da yetkili servis |
| Ekranda Er ile başlayan hata mesajı | Klimaya bir şey yapma, yetkili servis |
| Klimadan garip ses, duman ya da koku | Hemen kapat, güç bağlantısını kes, yetkili servis |

⛔ Sigortayı değiştirmeye, kabloya ya da iç ünitenin içine müdahale etmeye çalışma. Vestel kılavuzu klimayı kendin tamir etmemeni ve sökmemeni istiyor; klimanın içinde kullanıcının onarabileceği parça yok.

Klima açılıyor ama serinletmiyorsa [Vestel klima soğutmuyor](/blog/vestel-klima-sogutmuyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında.

---

**Kaynak künyesi.** Sorun giderme tablosu, pil, enerji kesintisi, HL ve Er mesajları ile güvenlik notları Vestel'in vestel.com.tr'deki Türkçe kullanım kılavuzlarından (Nova Inverter 12 A++ GI WIFI ve Plazma Inverter 9/12/18/24 A++) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
