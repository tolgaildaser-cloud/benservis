---
title: "LG klima çalışmıyor: ne yapılır?"
description: "LG klima açılmıyor ya da kendi kendine duruyorsa LG kılavuzunun sırası: fiş ve şalter, elektrik kesintisi, zamanlayıcı, kumanda pilleri."
slug: "lg-klima-calismiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 30 Eyl belirti damarı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. ABD LG kaynağı kullanılmadı; ikisi de LG Türkiye (gscs-b2c.lge.com, Türkçe).
# #88: web araması YALNIZ belgelerin yerini bulmak için. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ · pdftotext -layout, sayfa = PDF sayfası.
#  D) LG "KULLANICI EL KİTABI KLİMA · TİP: DUVAR TİPİ" (5401758648, Türkçe; lg.com/tr S12ETK ürün sayfasının kılavuz listesinden, csSalesCode S12ETK.NSJ)
#     https://gscs-b2c.lge.com/downloadFile?fileId=oWezd6acEM51ZIvWrjKjw  42 s.  md5 370ac02f4f4bcfa0bf866058acdccd8e  (metin katmanı kısmen 29 kod noktası kaymalı; dec.py ile çözüldü)
#  K) LG "KULLANICI EL KİTABI KLİMA" gizli tavan tipi kanallı (MFL67522523, Türkçe)
#     https://gscs-b2c.lge.com/open/downloadFile?fileId=RMV9u3J8EsbYsPNl3uhxw  28 s.  md5 88e9d7e61b646813e3b6f4cf868612b7
# "Klima çalışmıyor" satırı (D s.35; K s.18-19 aynı içerik):
#   "Klima prize takılı değil. x Güç kablosunun prize takılı olup olmadığını veya güç yalıtıcılarının açık olup olmadığını kontrol edin."
#   "Sigorta patladı veya güç kaynağı engellendi. x Sigortayı değiştirin veya devre kesicinin atıp atmadığını kontrol edin."
#   "Güç kesintisi meydana geldi. x Güç kesintisi meydana geldiğinde klimayı kapatın. x Güç geldiğinde, 3 dakika bekleyin ve klimayı açın."
#   "Voltaj çok yüksek veya çok düşük. x Devre kesicinin atıp atmadığını kontrol edin."
#   "Ön ayarlanan sürede klima otomatik olarak kapandı. x Klimayı açın."
#   "Uzaktan kumandada pil ayarı yanlış. x Pillerin uzaktan kumandanıza doğru şekilde yerleştirildiğinden emin olun. x Piller doğru şekilde yerleştirildiyse ancak klima hala çalışmıyorsa, pilleri değiştirin ve yeniden deneyin."
#   K s.19: "İç ünitenin hava giriş veya çıkış ızgaraları tıkalı mı? • Engelleyen maddeleri çıkarın."
# D s.37 "Klima, kullanım sırasında duruyor": "Klima aniden durdu. x Üniteyi kapatan Zamanlayıcı İşlevinin süresi dolmuştur. Zamanlayıcı ayarlarını kontrol edin." / "Kullanım sırasında elektrik kesintisi meydana geldi. x Elektriğin gelmesini bekleyin. Otomatik Yeniden Başlatma işlevi etkinse, üniteniz elektrik geldikten bir kaç dakika sonra son işlemine devam eder."
# D s.37 "Güç kapalı bile olsa, iç mekan ünitesi hala çalışıyor. | Otomatik Temizleme işlevi çalışıyor." · D s.25 "Gücü kapattığınızda, fan 30 dakika çalışır ve iç mekan ünitesinin içini temizler."
# "Uzaktan kumanda ekranı silik veya hiç göstermiyor" satırı D'de yok, yalnız K s.21'de: "Piller bitmiş mi? • Pilleri yenileriyle değiştirin." / "Piller ters + ve - yönlerde mi takılı?"
# D s.34 (derhal servis satırları, hepsi "x Klimayı kapatın, güç kablosunu prizden çekin veya güç kaynağı bağlantısını kesin ve servis merkezi ile iletişime geçin."):
#   "Üniteden yanık kokusu ve normal olmayan sesler geliyor." / "Güç kablosu hasar görmüş veya aşırı sıcaklık üretiyor." / "Düğme, devre kesici (güvenlik, topraklı) veya sigorta düzgün çalışmıyor." / "Ünite otomatik tanılamada bir hata kodu üretiyor."
#   D s.34 otomatik tanılama: "Hata meydana geldiğinde, iç mekan ünitesindeki lamba 2 saniye aralıkla yanıp söner."
# D s.5: "Elektrik kesilmesi veya fırtına olması durumunda güç kaynağını hemen kesin." / "Güç kablosunu değiştirmeyin veya uzatmayın." / "Elleriniz ıslakken asla klimaya dokunmayın, çalıştırmayın veya tamir etmeyin."
# BİLEREK YAZILMAYANLAR: "Sigortayı değiştirin" adımı (#31: elektrik müdahalesi; gövdede yalnız "yetkiliye bırak" diye anıldı) · kart/besleme arızası gibi belgede olmayan teşhis · kumanda pil tipi (LG bu belgede tip vermiyor) · fiyat.
# Alıntı denetim tablosu: lg-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Kumanda için yeni piller"]
steps:
  - "Klimanın fişinin prize takılı olduğunu ve güç yalıtıcısının (şalterinin) açık olduğunu kontrol et."
  - "Sigorta kutusunda klimanın devre kesicisinin atıp atmadığını kontrol et."
  - "Elektrik kesintisi olduysa klimayı kapat; elektrik geldikten sonra 3 dakika bekle ve klimayı aç."
  - "Zamanlayıcı ayarlarını kontrol et; klima ayarlı sürede kendiliğinden kapandıysa yeniden aç."
  - "Kumanda pillerinin doğru yönde takılı olduğuna bak; doğruysa pilleri yenileriyle değiştirip yeniden dene."
  - "İç ünitenin hava giriş ve çıkışını engelleyen bir şey varsa kaldır."
  - "Klima yine çalışmıyorsa, devre kesici düzgün çalışmıyorsa ya da iç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa klimayı kapat, fişini çek ve LG yetkili servisine başvur."
faq:
  - q: "LG klima hiç açılmıyor, önce neye bakmalıyım?"
    a: "LG'nin Türkçe kullanım kılavuzu 'Klima çalışmıyor' satırında sırayla şunları sayıyor: klima prize takılı mı ve güç yalıtıcısı açık mı, sigorta ya da devre kesici atmış mı, elektrik kesintisi olmuş mu, voltaj çok yüksek ya da düşük mü, klima önceden ayarlanan sürede kendiliğinden mi kapanmış ve kumanda pilleri doğru takılı mı."
  - q: "Elektrik gidip geldi, LG klima çalışmıyor. Ne yapmalıyım?"
    a: "LG kılavuzu güç kesintisinde klimayı kapatmanı, elektrik geldiğinde 3 dakika bekleyip sonra açmanı istiyor. Otomatik Yeniden Başlatma işlevi etkinse klima elektrik geldikten birkaç dakika sonra kaldığı işleme kendiliğinden devam eder."
  - q: "LG klima çalışırken aniden durdu, arıza mı?"
    a: "Önce zamanlayıcıya bak. LG kılavuzuna göre klimayı kapatan zamanlayıcının süresi dolmuş olabilir. Kullanım sırasında elektrik kesildiyse de elektriğin gelmesini beklemen yeterli. İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa bu bir hata göstergesidir ve servis gerekir."
  - q: "Klimayı kapattım ama iç ünite hâlâ çalışıyor, neden?"
    a: "Bu büyük olasılıkla Otomatik Temizleme işlevi. LG kılavuzuna göre bu işlev açıkken klimayı kapattığında fan 30 dakika çalışır ve iç ünitenin içindeki nemi giderir. İstemiyorsan iç üniteyi kapatabilirsin."
images:
  coverAlt: "Oturma odasında duvardaki kapalı beyaz split klimaya doğrultulmuş uzaktan kumanda, yanında yeni piller"
---

Kumandaya basıyorsun, klima tepki vermiyor; ya da çalışırken bir anda duruyor. LG'nin Türkçe kullanım kılavuzu bu durumu **"Klima çalışmıyor"** başlığıyla ele alıyor ve ilk olarak şunu soruyor: **"Klima prize takılı değil."** Ardından sigorta ve devre kesici, elektrik kesintisi, zamanlayıcı ve kumanda pilleri geliyor. Bu yazıda LG'nin sırasını evde güvenle yapılabilecek adımlara çeviriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı, şalter açık mı? Devre kesici atmış mı? Elektrik kesildiyse klimayı kapat, elektrik gelince 3 dakika bekleyip aç. Zamanlayıcıya ve kumanda pillerine bak. İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa, kesici düzgün çalışmıyorsa ya da yanık kokusu varsa → klimayı kapat, fişini çek, LG yetkili servisi.

## Önce durumu ayır

| Gördüğün | LG kılavuzunun açıklaması |
|---|---|
| Klima hiç açılmıyor | Fiş, güç yalıtıcısı, sigorta ya da devre kesici, elektrik kesintisi, voltaj, zamanlayıcı ya da kumanda pilleri; bu rehberdeki adımlar |
| Çalışırken aniden durdu | Klimayı kapatan zamanlayıcının süresi dolmuş olabilir ya da elektrik kesilmiş olabilir |
| Kapattın ama iç ünite hâlâ çalışıyor | Otomatik Temizleme işlevi; fan 30 dakika çalışıp iç ünitedeki nemi giderir |
| İç ünitedeki lamba 2 saniye aralıkla yanıp sönüyor | Otomatik tanılama bir hata buldu; servis |

## Adım adım: evde denenecekler

**1. Fiş ve şalter.** Klimanın fişinin prize takılı olduğunu ve güç yalıtıcısının (şalterinin) açık olduğunu kontrol et. Elin ıslakken klimaya dokunma.

**2. Devre kesici.** Sigorta kutusunda klimanın devre kesicisinin atıp atmadığını kontrol et. LG voltaj çok yüksek ya da çok düşükse de devre kesicinin kontrol edilmesini istiyor. Kılavuzda sigorta değişimi de geçiyor; bu elektrik işi, yetkiliye bırak.

**3. Elektrik kesintisi.** Elektrik kesintisi olduysa klimayı kapat; elektrik geldikten sonra 3 dakika bekle ve klimayı aç. LG ayrıca elektrik kesilmesi ya da fırtına durumunda güç kaynağının hemen kesilmesini istiyor.

**4. Zamanlayıcı.** Zamanlayıcı ayarlarını kontrol et; klima ayarlı sürede kendiliğinden kapandıysa yeniden aç. LG kılavuzuna göre klima çalışırken aniden durduysa üniteyi kapatan zamanlayıcının süresi dolmuş olabilir.

**5. Kumanda pilleri.** Kumanda pillerinin doğru yönde takılı olduğuna bak; doğruysa pilleri yenileriyle değiştirip yeniden dene. LG'nin kanallı tip el kitabı kumanda ekranı silik ya da boşsa da pillerin bitip bitmediğine ve + ile - uçlarının doğru yönde olup olmadığına bakılmasını istiyor. Kumanda tarafının genel anlatımı [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısında.

**6. Hava yolu.** İç ünitenin hava giriş ve çıkışını engelleyen bir şey varsa kaldır. LG'nin kanallı tip el kitabı hava giriş ya da çıkış ızgaraları tıkalıysa engelleyen maddelerin çıkarılmasını istiyor; duvar tipi el kitabı da hava akışının girişinin ya da çıkışının engellenmemesini istiyor.

**7. Sürerse servis.** Klima yine çalışmıyorsa, devre kesici düzgün çalışmıyorsa ya da iç ünitedeki lamba 2 saniye aralıkla yanıp sönüyorsa klimayı kapat, fişini çek ve LG yetkili servisine başvur.

## Ne zaman servis?

LG kılavuzu şu durumlarda kontrol listesini bırakıp **klimayı kapatmanı, güç kablosunu prizden çekmeni ya da güç kaynağını kesmeni ve servis merkeziyle iletişime geçmeni** istiyor:

| Belirti | Ne yapmalı |
|---|---|
| Üniteden yanık kokusu ve normal olmayan sesler geliyor | Klimayı kapat, fişini çek, servisi ara |
| Güç kablosu hasarlı ya da aşırı ısınıyor | Klimayı kapat, fişini çek, servisi ara |
| Düğme, devre kesici ya da sigorta düzgün çalışmıyor | Klimayı kapat, fişini çek, servisi ara |
| Ünite otomatik tanılamada hata kodu üretiyor, lamba 2 saniye aralıkla yanıp sönüyor | Klimayı kapat, fişini çek, servisi ara |
| Kontrollerden sonra hâlâ açılmıyor | LG yetkili servisi |

⛔ Sigortayı değiştirmeye, prizi, kabloyu ya da iç ünitenin kapağını açmaya çalışma. LG kılavuzu güç kablosunun değiştirilmemesini ya da uzatılmamasını istiyor.

Genel sebepler için [klima çalışmıyor](/blog/klima-calismiyor/) yazısına bakabilirsin. Klima açılıyor ama serinletmiyorsa [LG klima soğutmuyor](/blog/lg-klima-sogutmuyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Kontrol maddeleri, 3 dakika kuralı, zamanlayıcı, Otomatik Temizleme ve derhal servis satırları LG'nin Türkçe duvar tipi klima kullanıcı el kitabından; kumanda ekranı ve hava ızgarası notları LG'nin Türkçe kanallı tip klima el kitabından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
