---
title: "Roborock ana tekerlek sıkışma hatası (Error 7) çözümü"
description: "Roborock ana tekerlek sıkışma hatası (Error 7): robotu taşıyıp yeniden başlatma, tekerleği elle çevirme, temizlik, ön tekerlek ve sistem sıfırlama."
slug: "roborock-ana-tekerlek-sikismasi"
date: "2026-10-25"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (marka-25eki, küme B). origin/main content/blog/ altında "roborock" yalnız robot-supurge-sarj-olmuyor gövdesinde geçiyor; slug ya da başlık yok.
#   Dalga 6–8 ve marka-25eki A klasörlerinde Roborock yazısı yok. "tekerlek" geçen başlık yok.
# OT (#164, bu koşu 25 Eki, hl=tr gl=tr) tohum "roborock ana tekerlek": 1. "…ana tekerlek sıkışma hatası" · 2. "…ana tekerlek sıkışması" · 3. "…ana tekerlek sorunu".
#   "roborock tekerlek": 1. "…tekerlek hatası". GSC (www-5, www-6): "roborock" satırı yok.
# Belgeler (#88) bu koşuda indirildi; zincir: help.roborock.com/us/product/q7-max (200) → cdn.awsusor0.fds.api.mi-img.com PDF (200 application/pdf).
#  (Q) Roborock Q7 Max kullanım kılavuzu, CE, İngilizce, 13 s.  md5 ad4b8ba1040d276d375ba4b042e48aaa  — Error 7 s.12, bakım s.10, sıfırlama s.9, gürültü SSS s.13
#  (S) Roborock S8 kullanım kılavuzu, CE, İngilizce, 13 s.  md5 b94698992faafa9718a5e9d056c480af  (help.roborock.com/us/product/s8, 200) — bakım/sıfırlama s.10, sorunlar s.12
#  (W) help.roborock.com/us/product/s8-message?category=troubleshooting (200, HTML md5 091698a41f48815e74aab2ef7241061e) — "What should I do when error 7 occurs?"
# Türkçe kılavuz bulunamadı; yazıda "kılavuzun İngilizce baskısı" diye belirtildi, alıntılar çevrildi, orijinaller KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: ana tekerlek modülü sökümü, motor/kart/pil teşhisi (#31) · uygulamadaki Türkçe uyarı metninin birebir hali (belgede yok) · OT'deki 38, 52, 53, 108 kodları (bu kılavuzlarda yok) · fiyat (#46).
# Alıntı denetim tablosu: roborock-ana-tekerlek-sikismasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, kuru bez", "Küçük düz tornavida", "Robotun kullanım kılavuzu"]
steps:
  - "Robotu durdur, istasyondan uzakta kapat ve elle istasyona koymadan önce sorunu çöz."
  - "Robotu düz, engelsiz bir yere taşı ve temizliği yeniden başlat."
  - "Robotu ters çevir, iki ana tekerleği bastırıp elle çevir; takılan bir şey varsa çıkar."
  - "Ana tekerlekleri ve çevresini yumuşak, kuru bir bezle temizle."
  - "Ön tekerleği küçük bir tornavidayla aksından çıkar, tekerleği ve aksı suyla durula, kurutup yerine bastır."
  - "Ana fırçayı ve yan fırçayı kontrol et; dolanan saçları temizle."
  - "Hata sürerse Reset düğmesiyle sistemi sıfırla; yine geçmiyorsa Roborock desteğine başvur."
faq:
  - q: "Roborock Error 7 ne demek?"
    a: "Roborock'un Q7 Max kılavuzunun İngilizce baskısındaki hata tablosunda Error 7, tekerleklerin sıkıştığı anlamına geliyor ve önerilen çözüm robotu başka bir yere taşıyıp yeniden başlatmak. Türkiye'de bu durum çoğunlukla 'ana tekerlek sıkışma hatası' diye aranıyor."
  - q: "Error 3 ile Error 7 arasındaki fark ne?"
    a: "Aynı tabloda Error 3 tekerleklerin havada kalması, Error 7 ise tekerleklerin sıkışması. Error 3'te robot bir eşikte ya da kablonun üstünde asılı kalmış olabilir; ikisinde de çözüm robotu taşıyıp yeniden başlatmakla başlıyor."
  - q: "Ana tekerleği söküp temizleyebilir miyim?"
    a: "Kılavuzlar ana tekerlekler için yalnız yumuşak, kuru bir bezle aylık temizlik tarif ediyor. Söküm talimatı yalnız ön (çok yönlü) tekerlek için var. Ana tekerlek modülünü açmak kılavuzda yer almıyor; bu iş yetkili servisin."
  - q: "Sistem sıfırlama ayarlarımı siler mi?"
    a: "Kılavuza göre Reset düğmesiyle yapılan sistem sıfırlamadan sonra zamanlanmış temizlik ve Wi-Fi gibi ayarlar fabrika ayarına dönüyor. Uygulamadan robotu yeniden bağlaman gerekebilir."
images:
  coverAlt: "Parke zeminde duran yuvarlak bir robot süpürge, yanında küçük bir halı kenarı"
  steps:
    - "Şarj istasyonundan uzakta, zeminde duran kapalı bir robot süpürge"
    - "Odanın ortasında engelsiz, düz bir zeminde duran robot süpürge"
    - "Ters çevrilmiş robot süpürgenin alt yüzü ve iki yandaki büyük tekerlekler"
    - "Robot süpürgenin lastik ana tekerleğinin yanında katlanmış kuru bir bez"
    - "Robot süpürgenin önündeki küçük döner tekerlek ve yanında küçük düz tornavida"
    - "Robot süpürgenin alt yüzünde ana fırça ve köşedeki yan fırça"
    - "Robot süpürgenin üst kapağı açık hâlde, toz haznesi bölmesinin yakın planı"
---

Roborock robot süpürge temizliğin ortasında durup kırmızı ışık yakıyor ve sesli uyarı veriyorsa çoğu zaman sorun tekerleklerde. Türkiye'de bu en çok "Roborock ana tekerlek sıkışma hatası" diye aranıyor. Roborock'un Q7 Max kılavuzundaki hata tablosunda bunun karşılığı **Error 7: tekerlekler sıkıştı**. Bu yazı, Roborock'un resmî destek sitesinden indirilen Q7 Max ve S8 kılavuzlarına ve aynı sitedeki S8 sorun giderme sayfasına dayanıyor. Türkçe kılavuz bulunamadı; alıntılar **kılavuzun İngilizce baskısından** çevrildi. Senin modelinde düğme adları ya da parça yerleri farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Robotu kapat, düz ve boş bir yere taşı, yeniden başlat. Geçmezse robotu ters çevir, ana tekerlekleri bastırıp elle çevir, dolanan saç ya da ipi çıkar, tekerlekleri kuru bezle sil. Ön tekerleği söküp durula. Son çare Reset düğmesi; o da çözmezse Roborock desteği.

## Hata tablosunda tekerlekle ilgili satırlar

| Kılavuzdaki kod | Anlamı | İlk iş |
|---|---|---|
| **Error 7** | Tekerlekler sıkıştı | Robotu taşı, yeniden başlat |
| **Error 3** | Tekerlekler havada kaldı | Robotu taşı, yeniden başlat |
| **Error 8** | Robot sıkıştı, etrafı engelli | Çevredeki engelleri kaldır |
| **Error 5** | Ana fırça sıkıştı | Ana fırçayı ve yataklarını temizle |
| **Error 6** | Yan fırça sıkıştı | Yan fırçayı sök, temizle |

Kılavuz bir kural daha ekliyor: hangi hata olursa olsun, sorunu giderdikten sonra robotu başka bir yere koy ve temizliği yeniden başlat.

## Adım adım: tekerlek sıkışmasını gidermek

**1. Robotu durdur ve kapat.** Hata oluştuğunda güç göstergesi kırmızı yanıp söner ve sesli uyarı gelir. Kılavuza göre arızalı hâlde on dakikadan uzun bekleyen robot kendiliğinden uykuya geçiyor. Hatalı robotu elle istasyona koymak da o anki temizliği bitiriyor. Önce robotu istasyondan uzakta kapat, sorunu çöz, sonra devam et.

**2. Taşı ve yeniden başlat.** Error 7 satırındaki talimat kısa: robotu başka bir yere taşı ve yeniden başlat. Robot kalın bir halı kenarına, eşiğe ya da bir kablonun üstüne çıkmış olabilir. Tekerlekler havada kaldıysa tablo bunu ayrıca Error 3 olarak gösteriyor ve çözüm aynı. Robotu odanın ortasında, düz ve boş bir zemine koy.

**3. Tekerleği elle çevir.** Roborock'un destek sitesindeki S8 sorun giderme sayfası Error 7 için şunu söylüyor: **tekerlekleri bastırıp elle çevir**, sıkışıp sıkışmadıklarını kontrol et; sıkışmışlarsa serbest bırakmaya çalış. Robotu yumuşak bir yüzeye ters çevir. İki büyük ana tekerleği tek tek aşağı bastır ve döndür. Tekerleğin etrafına dolanmış saç, ip, ince kablo ya da halı tüyü varsa çıkar. Tekerlek bastırınca yaylanıp geri gelmeli ve rahat dönmeli.

**4. Ana tekerlekleri temizle.** Q7 Max ve S8 kılavuzları ana tekerleklerin **ayda bir** yumuşak, kuru bir bezle temizlenmesini istiyor. Lastik yüzeydeki toz ve yapışkan kirleri sil, tekerleğin gövdeyle birleştiği aralığa da bak. Kılavuzlar ana tekerlekler için sökme talimatı vermiyor; tekerleği zorla çıkarmaya çalışma.

**5. Ön tekerleği sök, durula.** Robotun önündeki küçük döner tekerlek kılavuzda "çok yönlü tekerlek" diye geçiyor ve sıkışma dönüşleri bozabiliyor. Kılavuzdaki sıra şöyle: küçük bir tornavidayla aksı kaldırıp tekerleği çıkar, tekerleği ve aksı suyla durulayıp saç ve kiri temizle, kurut, sonra yerine sıkıca bastırarak tak. Tekerleğin bağlantı yuvası sökülmüyor. Kılavuzun sorun tablosuna göre temizlik sırasında artan gürültünün bir nedeni de bu tekerleğin sıkışması.

**6. Fırçalara da bak.** Kılavuzun sorun tablosu temizlik sırasındaki gürültü için ana fırçayı, yan fırçayı, ana tekerlekleri ve ön tekerleği birlikte sayıyor: hepsi sıkışmış olabilir, robotu kapatıp temizle. Ana fırçanın iki ucuna dolanan saçları al, yan fırçayı vidasından sökerek temizle. Ayrıntılar [robot süpürgenin fırçası dönmüyor](/blog/robot-supurge-firca-donmuyor/) yazısında.

**7. Sistemi sıfırla.** Robot düğmelere tepki vermiyorsa ya da kapanmıyorsa kılavuz **Reset düğmesine** basmanı söylüyor; robot kendiliğinden sıfırlanıyor. Bu işlemden sonra zamanlanmış temizlik ve Wi-Fi gibi ayarlar fabrika ayarına dönüyor. Sistem sıfırlamadan sonra da düzgün çalışmazsa kılavuzda tam fabrika ayarı için ayrı bir tuş kombinasyonu var. S8 destek sayfasının son cümlesi açık: hata sürüyorsa Roborock müşteri desteğine başvur.

## Ne zaman servis

- Tekerlek elle çevrildiğinde hiç dönmüyor, takılıyor ya da tıkırdıyorsa
- Temizlik ve sıfırlamadan sonra Error 7 her temizlikte geri geliyorsa
- Ana tekerlek bastırınca geri yaylanmıyor ya da gövdeden sarkıyorsa
- Tekerlekten yanık kokusu ya da sert bir sürtünme sesi geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Taşıma, elle çevirme, bezle temizlik, ön tekerleğin sökülüp durulanması, fırçalar ve Reset düğmesi senin; ana tekerlek modülü, motor, elektronik kart ve pil Roborock yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Modelin ne (S8, Q7 Max, Q8 Max, başka)?
2. Uygulamada hangi hata kodu ya da uyarı görünüyor?
3. Ana tekerlekler elle rahat dönüyor mu?
4. Hata hep aynı odada, aynı halı ya da eşikte mi çıkıyor?
5. Sistem sıfırlamayı denedin mi?

Robotun belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Şarj sorunlarında [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/), ayarları baştan kurmak için [Xiaomi robot süpürge resetleme](/blog/xiaomi-robot-supurge-resetleme/) yazısındaki sıra da yol gösterir. Bil, gör, çağır.

---

**Kaynak künyesi.** Hata kodları, bakım aralıkları, ön tekerlek temizliği ve sıfırlama Roborock'un Q7 Max ve S8 kullanım kılavuzlarının İngilizce baskısından, Error 7 için tekerleği elle çevirme önerisi help.roborock.com'daki S8 sorun giderme sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
