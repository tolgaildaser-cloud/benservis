---
title: "Xiaomi robot süpürge resetleme nasıl yapılır"
description: "Xiaomi robot süpürge donduysa: güç düğmesiyle zorla kapatma, iğneyle sıfırlama düğmesi ve Wi-Fi sıfırlama. Xiaomi X10 ve S20 Türkçe kılavuzlarındaki sıra."
slug: "xiaomi-robot-supurge-resetleme"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y3). origin/main'de "xiaomi" yalnız robot-supurge-sarj-olmuyor ve homend-robot-supurge-resetleme gövdesinde geçiyor; slug ya da başlık yok. O yazıların sorgusu (şarj olmuyor, Homend reset) açılmadı.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "xiaomi robot süpürge r" → 1. "xiaomi robot süpürge resetleme", 2. "…reset", 3. "…resetleme nasıl yapılır", 4. "…reset tuşu"; "xiaomi robot süpürge" → 9. "…resetleme". GSC: "xiaomi" satırı yok.
# Belge (#88). Zincir: mi.com/tr/support/user-guide/ (200, curl; PDF adresleri sayfa HTML'inde) → Xiaomi'nin mi-img CDN'i (200, application/pdf):
#  (X10) Xiaomi Robot Vacuum X10 kullanım kılavuzu, çok dilli, TR bölümü PDF s.58–64, md5 6844de9fbffdda002a8d1b59fd0be5dd — s.59 düğme/gösterge, s.61 Wi-Fi sıfırlama, s.62 yeniden başlatma/fabrika ayarı/uyku
#  (S20) Xiaomi Robot Vacuum S20 kullanım kılavuzu, çok dilli, TR bölümü PDF s.74–82, md5 c16bc2342081edbc40078e231ff125a1 — s.78 Wi-Fi sıfırlama, s.79 yeniden başlatma/fabrika ayarı, s.81–82 sorun giderme
#  Düğme simgeleri metin katmanında yok; s.61, s.62 (X10) ve s.78 (S20) sayfa görüntüsünden okundu (pdftoppm, `_kaynak/pdf/xiaomi/img/`).
# BİLEREK YAZILMAYANLAR: fabrika ayarının neleri sildiği (kılavuzda yok) · sıfırlama düğmesinin tam yeri için çizim dışı tarif · pil sökümü (kılavuzda geri dönüşüm için var, #31 nedeniyle yazılmadı) · fiyat (#46).
# Alıntı denetimi: xiaomi-robot-supurge-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Robotun kullanım kılavuzu", "İnce bir iğne", "Akıllı telefon ve Xiaomi Home uygulaması"]
steps:
  - "Robotu şarj istasyonuna koyup şarj et; ortam sıcaklığının uygun aralıkta olduğundan emin ol."
  - "Gösterge söndüyse önce herhangi bir düğmeye basarak robotu uyku modundan çıkar."
  - "Robotu güç düğmesini üç saniye basılı tutarak kapat ve yeniden aç."
  - "Robot yanıt vermiyorsa X10'da güç düğmesini on beş saniye, S20'de sıfırlama düğmesini on saniye basılı tutarak zorla kapat; sonra güç düğmesiyle aç."
  - "Yeniden başlatmadan sonra da düzgün çalışmıyorsa sıfırlama düğmesini fabrika ayarlarının geri yüklendiğini söyleyen sesi duyana kadar iğneyle basılı tut."
  - "Bağlantı koptuysa kapağı aç, güç ve ev düğmelerini ses duyana kadar birlikte basılı tutarak Wi-Fi'yi sıfırla."
  - "Robotu Xiaomi Home uygulamasına yeniden ekle; yalnız 2,4 GHz ağ destekleniyor."
faq:
  - q: "Xiaomi robot süpürgenin reset tuşu nerede?"
    a: "Xiaomi'nin X10 ve S20 Türkçe kılavuzlarında ayrı bir sıfırlama düğmesi var ve bu düğmeye iğne yardımıyla basılıyor; kılavuz çiziminde düğmeye robotun kapağı açılarak ulaşılıyor. Fabrika ayarına dönmek için bu düğmeyi, fabrika ayarlarının geri yüklendiğini belirten sesi duyana kadar basılı tutuyorsun."
  - q: "Xiaomi robot süpürge resetlenmiyor, ne yapmalıyım?"
    a: "Önce hafif adımları dene: tam şarj, uyku modundan çıkarma, kapat-aç. Robot hiç yanıt vermiyorsa X10'da güç düğmesini on beş saniye, S20'de sıfırlama düğmesini on saniye basılı tutarak zorla kapat. Fabrika ayarı son adım. Bunlardan sonra da düzelmiyorsa yetkili servise başvur."
  - q: "Fabrika ayarından sonra harita silinir mi?"
    a: "Kılavuz fabrika ayarının neleri sildiğini yazmıyor; yalnız robotu orijinal fabrika ayarlarına sıfırladığını söylüyor. İşlemden sonra robotu uygulamaya yeniden eklemen ve haritayı yeniden çıkarman gerekebilir (çıkarım)."
  - q: "Yalnız Wi-Fi'yi sıfırlamak harita ya da ayarları siler mi?"
    a: "Kılavuz Wi-Fi sıfırlamayı yalnız telefonla robot arasındaki bağlantı kaybı için anlatıyor: yönlendirici değiştiğinde ya da parola yanlış olduğunda. Fabrika ayarıyla aynı işlem değil; ne sildiği kılavuzda yazmıyor."
images:
  coverAlt: "Ahşap zeminde şarj istasyonunun önünde duran yuvarlak, beyaz bir robot süpürge"
  steps:
    - "Duvara dayalı şarj istasyonuna yerleşmiş bir robot süpürge"
    - "Göstergesi sönük, zeminde bekleyen bir robot süpürge"
    - "Robot süpürgenin üst yüzündeki güç düğmesinin yakın planı"
    - "Robot süpürgenin üst yüzünde yan yana duran güç ve ev düğmeleri"
    - "Kapağı açık bir robot süpürgenin üst bölmesi ve yanında ince bir iğne"
    - "Kapağı açık robot süpürgenin içindeki Wi-Fi göstergesi"
    - "Şarj istasyonundaki robot süpürgenin yanında uygulaması açık bir akıllı telefon"
---

Xiaomi robot süpürgen ortada donup kaldı, düğmelere tepki vermiyor ya da uygulama robotu çevrimdışı gösteriyor; aklına gelen ilk şey "resetleme". Xiaomi'nin Türkçe kılavuzlarında üç ayrı sıfırlama var ve her biri farklı bir sorunu çözüyor: **yeniden başlatma** (robot donduğunda), **fabrika ayarlarını geri yükleme** (yeniden başlatma yetmediğinde) ve **Wi-Fi sıfırlama** (telefonla bağlantı koptuğunda). Bu yazı Xiaomi'nin Türkiye destek sayfasındaki **Xiaomi Robot Vacuum X10** ve **Xiaomi Robot Vacuum S20** Türkçe kılavuzlarına dayanıyor. Başka bir Xiaomi modelin varsa sıra benzer olabilir, düğme süreleri farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce şarj et ve kapat-aç. Robot donduysa X10'da güç düğmesine 15 saniye, S20'de sıfırlama düğmesine 10 saniye basarak zorla kapat, sonra güç düğmesine 3 saniye basarak aç. Düzelmediyse sıfırlama düğmesine iğneyle, fabrika ayarı sesini duyana kadar bas. Bağlantı sorununda güç ve ev düğmeleriyle Wi-Fi'yi sıfırla.

## Hangi sıfırlama ne işe yarıyor?

| Sorun | X10 | S20 |
|---|---|---|
| Robot donmuş, kapanmıyor | Güç düğmesi 15 sn, sonra güç 3 sn | Sıfırlama düğmesi 10 sn, sonra güç 3 sn |
| Yeniden başlatma yetmedi | Sıfırlama düğmesi, iğneyle, ses gelene kadar | Aynı |
| Uygulama bağlantısı koptu | Güç + ev düğmesi, ses gelene kadar | Aynı |

## Adım adım: hafiften ağıra sıfırlama

**1. Önce şarj et.** S20'nin sorun giderme tablosundaki ilk satır robotun açılmaması: pil düşükse robotu tamamen şarj et. Ortam sıcaklığı 0 °C'nin altında ya da 40 °C'nin üstündeyse robot çalışmıyor; robotun bu aralıkta olduğundan emin ol. Şarj olmuyorsa kablonun hem istasyona hem prize düzgün takıldığına ve şarj temaslarının temiz olduğuna bak.

**2. Uyku moduyla karıştırma.** Kılavuza göre robot duraklatıldıktan on dakika sonra kendiliğinden uyku moduna giriyor ve göstergesi kapanıyor. Uyandırmak için robotun üzerindeki herhangi bir düğmeye basman yeterli. Uyku on iki saati geçerse robot kendiliğinden kapanıyor.

**3. Kapat-aç.** Robotu açmak ya da kapatmak için güç düğmesini üç saniye basılı tut. S20'nin sorun tablosu da "robot beklenildiği gibi çalışmıyor" satırında robotu kapatıp açmanı istiyor.

**4. Zorla kapat.** Düğmeler çalışmıyor ya da robot kapatılamıyorsa zorla kapatma var. X10'da güç düğmesini on beş saniye basılı tutuyorsun. S20'de sıfırlama düğmesini on saniye basılı tutuyorsun. Ardından robotu açmak için güç düğmesini üç saniye basılı tut.

**5. Fabrika ayarlarını geri yükle.** Robot yeniden başlatıldıktan sonra da düzgün çalışmıyorsa son çare fabrika ayarı. Sıfırlama düğmesini, fabrika ayarlarının geri yüklendiğini belirten sesi duyana kadar bir iğne yardımıyla basılı tut. Kılavuz çiziminde bu düğmeye robotun kapağı açılarak ulaşılıyor. Kılavuz işlemin neleri sildiğini yazmıyor; sonrasında robotu uygulamaya yeniden eklemen gerekebilir (çıkarım).

**6. Wi-Fi'yi sıfırla.** Yönlendiriciyi değiştirdiysen ya da parola yanlışsa telefonla robot arasındaki bağlantı kopabilir. Wi-Fi göstergesini görebilmek için robotun kapağını aç. Robotun ağ yapılandırmasını beklediğini söyleyen bir ses duyana kadar güç ve ev düğmelerini aynı anda basılı tut. Wi-Fi göstergesi yanıp sönmeye başladıysa sıfırlama başarılı.

**7. Uygulamaya yeniden ekle.** Xiaomi Home uygulamasını aç, sağ üstteki artı simgesine dokun ve cihaz ekleme adımlarını izle. Robot yalnız 2,4 GHz Wi-Fi ağlarını destekliyor; 5 GHz ağlar ve kurumsal yönlendiriciler desteklenmiyor. Ayrıntılar [Xiaomi robot süpürge wifi değiştirme](/blog/xiaomi-robot-supurge-wifi-degistirme/) yazısında.

## Göstergeyi oku

X10 kılavuzuna göre beyaz ışık temizlik yapıldığını, temizliğin bittiğini ya da şarjın dolduğunu gösteriyor; çok yavaş yanıp sönen beyaz şarj oluyor demek. **Yanıp sönen turuncu hata** demek; sabit turuncu ise Wi-Fi'nin bağlı olmadığını gösteriyor. Yanıp sönen beyaz ışık; robotun şarja döndüğünü, yeniden konumlandığını, yazılım güncellediğini ya da Wi-Fi'ye bağlanmayı beklediğini anlatıyor. Garip ses geliyorsa fırça, yan fırça ya da tekerleğe bir şey takılmış olabilir; robotu durdurup temizle. Fırça sorunlarında [robot süpürgenin fırçası dönmüyor](/blog/robot-supurge-firca-donmuyor/) yazısına bakabilirsin.

## Resetin çözmediği durumlar

Bazı belirtiler sıfırlama gerektirmiyor. S20 kılavuzuna göre robot planlanmış temizliği yapmıyorsa pil düşük olabilir; robot planlı temizliğe yalnız pil yüzde 30'un üzerindeyken başlıyor. Robot şarj olduktan sonra temizliğe devam etmiyorsa Rahatsız Etmeyin (DND) modu açık olabilir; bu modu kapat ya da süresini ayarla. Robot elle taşındıktan sonra istasyona dönmüyorsa kendini yeniden konumlandırıyor ya da haritayı yeniden çıkarıyor olabilir; istasyondan çok uzaktaysa robotu istasyona elle yerleştir. Bu durumlarda fabrika ayarına gitmeden önce ilgili ayarı düzelt.

## Ne zaman servis

- Zorla kapatma ve fabrika ayarından sonra robot hâlâ açılmıyorsa
- Gösterge sürekli turuncu yanıp sönüyor ve temizlikle geçmiyorsa
- Kablo, şarj istasyonu ya da gövde hasarlıysa

⛔ **Kendin-çöz sınırı burada biter.** Şarj, kapat-aç, zorla kapatma, fabrika ayarı ve Wi-Fi senin; pil, kart ve motor Xiaomi yetkili servisinin. Kılavuz pili ya da istasyonu kendin sökmemeni, onarmamanı istiyor.

## Servisi aramadan önce kısa özet

1. Model adı ne (X10, S20, başka)?
2. Tam şarjdan sonra gösterge yanıyor mu, hangi renkte?
3. Hangi sıfırlama denendi?
4. Uygulamada robot görünüyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
