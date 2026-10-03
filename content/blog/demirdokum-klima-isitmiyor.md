---
title: "DemirDöküm klima ısıtmıyor: kış kontrolü"
description: "DemirDöküm klima kışın ısıtmıyorsa kılavuzun notları: geç gelen sıcak hava, buz çözme, lamel konumu, ayar sıcaklığı, uyku modu ve filtre bakımı."
slug: "demirdokum-klima-isitmiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belge bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı demirdokum.com.tr (DemirDöküm'ün kendi alan adı).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/dd-kion.pdf · sayfa = PDF sayfası (basılı numara bir eksik).
#  DK) DemirDöküm "Kion lnverter" Kullanma kılavuzu 8000034092_00 (18.12.2024), DDAl2-090/120/180/240 WNO/WNI, 24 s., md5 19e3967d670a1373896a358349b1a2e5
#      https://www.demirdokum.com.tr/downloads/kion-klima-kullanma-kilavuzu-3005527.pdf
#      s.12 "4.4.3 Isıtma konumu" → "Isıtma devresini seçmek için Isıt tuşuna basın." / "Sıcaklık aralığı: 16 - 30 °C" / "Sıcaklığı oda sıcaklığından daha yüksek bir değere ayarlayın." / "Ürün ısıtma devresindeyken, daha verimli ısıtma için yatay lamel açısını en düşük konuma ayarlayın." / "Isıtma devresinde, oda sıcaklığı istenen sıcaklığa ulaştıktan sonra iç ünitenin fanı bir süre daha çalışmaya devam eder. Bu durumda, ürün tarafından üflenen hava sıcak hissedilebilir" / "Daha sonra oda sıcaklığının çok düşük olduğunu hissederseniz, daha yüksek bir sıcaklık ayarlayın." · "4.4.1 ... Hızlı ısıtma fonksiyonu ile ürün, oda sıcaklığının hızla yükselmesi için çok yüksek bir fan hızı ile ısıtma devresinde 30 dakika boyunca sıcaklığı 30 °C'ye ayarlar."
#      s.13 "4.4.6 Buz çözme ve sıcak başlatma çalışma modu" → "Buz çözme işlemi buzu eritmek veya buz oluşumunu önlemek için gerçekleşir, sıcak başlatma ise soğuk hava akışının oluşmamasını sağlar." / "Her iki fonksiyon için de iç ünitenin ekranında [sembol] görünür." / "Dış ünite ısıtma modunda çalışırken, buzu gidermek için soğutma döngüsüne geri döner." / "Buz çözme kontrolü, ısıtma döngüsü başladıktan 40 dakika sonra etkinleştirilir." / "4.4.6.2 Sıcak başlatma işletme modu Soğutma konumundan ısıtma konumuna geçerken kullanıcıya etki eden güçlü bir soğuk hava akışını önlemek için, ürün sıcak başlatma moduna geçer." · "5.2 ... Yatay lamellerin manuel olarak ayarlanması ürüne zarar verebilir. ▶ Yatay lamellerin yönünü ayarlamak için daima uzaktan kumandayı kullanın." / "1. Lamel açısı ayarını seçmek için Dikey tuşuna basın. ◁ Yatay lamel otomatik olarak yukarı ve aşağı döner. 2. Tuşa tekrar basın. ◁ Yatay lamel geçerli konumda kilitlenir."
#      s.14 "Isıtma devresi: Ayarlanan sıcaklık oda sıcaklığından düşükse, ısıtma devresi başlatılmaz. Ayarlanan sıcaklık değerini artırın."
#      s.15 "Isıtma konumunda Sleep modu etkinleştirildiğinde; oda sıcaklığı talep edilen değeri, 60 dakika sonra ayarlanan sıcaklıktan 1 °C, 2 saat sonra ise ayarlanan sıcaklıktan 2 °C daha düşüktür." · "Sleep modunu iptal etmek için ..." (Uyku tuşu)
#      s.19 "Yetersiz soğutma veya ısıtma" → "Kapılar ve/veya pencereler açık | Kapıları ve/veya pencereleri kapatın." / "Termostat ısıtma devresinde çok düşük bir sıcaklık değerine ayarlanmış | Sıcaklığı optimum seviyeye ayarlayın." / "Hava filtresi kirlenmiş veya tıkanmış | Hava filtrelerini temizleyin." / "Hava girişinin veya çıkışının önünde engel var | ... engeller varsa bunları kaldırın." / "Oda sıcaklığı belirlenen seviyeye ulaşmıyor | Biraz bekleyin." / "Isıtma devresi başlatıldığında hava akımı hemen başlamaz. | Hava akımı sıcaklık yükselmeden önce başlarsa, istenmeyen bir soğutma etkisi olacaktır. Bunu önlemek için, hava akımı yalnızca sıcaklık yeterli bir değere ulaştığında başlatılır. Bu, klimanın yanlış çalışmasından kaynaklanmaz ve bir hatalı işlem değildir."
#      s.20 "Basınçlı hava çıkıyormuş gibi ses çıkarır | Bu sesin nedeni, klima ısınırken sıcak gazın buz çözme işleminin başında ve sonunda zıt yönlerde hareket etmesidir. Bu bir hatalı işlem değildir." / "Buğulanma veya buhar oluşumu | Isıtma konumunda veya düşük sıcaklıklarda dış ünite buz çözme işlemi sırasında buhar üretebilir. | Düzeltici bir önlem alınmasına gerek yoktur"
#      s.17 hava filtresi (bkz. demirdokum-klima-sogutmuyor provenansı): elektrikten ayır, tutamaklardan çek, süpürge ya da maks. 45 °C su + doğal temizleme maddesi, gölgede kurut, kuru tak; filtresiz çalıştırma.
#      s.8 Isıtma dış sıcaklık aralığı: DDAI2-090/120/180/240WNI "−15 - 24 °C" · "İç ünitenin soğutma gücü/ısıtma gücü, dış ünitenin oda sıcaklığına bağlı olarak değişir."
# YAKIN KOPYA: DemirDöküm'ün yayında klima sayfası yok. Kardeş demirdokum-klima-sogutmuyor ile aynı tablo satırını paylaşıyor; bu sayfa ısıtmaya özgü satırları (sıcak başlatma, buz çözme, lamel, uyku) öne alıyor. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: dış ünitedeki buza müdahale · lamelleri elle çevirme (kılavuz zarar verebilir diyor) · buz çözme sembolünün şekli (metin katmanında yok) · fiyat.
# Alıntı denetim tablosu: demirdokum-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge ya da en fazla 45°C su ve doğal bir temizleme maddesi"]
steps:
  - "Kumandada Isıt tuşuna bas ve sıcaklığı 16-30°C aralığında oda sıcaklığından yüksek bir değere ayarla."
  - "Isıtmayı yeni açtıysan sıcak hava gelene kadar bekle."
  - "İç ünite ekranında buz çözme ya da sıcak başlatma sembolü görürsen bitmesini bekle."
  - "Kumandadaki Dikey tuşuyla yatay lamelleri en düşük konuma getir; lamelleri elle çevirme."
  - "Odanın kapı ve pencerelerini kapat."
  - "Uyku modu açıksa Uyku tuşuyla kapat ya da ayar sıcaklığını yükselt."
  - "Klimanın elektriğini kes, hava filtresini tutamaklarından çekip çıkar, elektrikli süpürgeyle ya da en fazla 45°C suyla temizle, gölgede kurutup tak."
  - "Hava giriş ve çıkışının önünü aç ve odanın ısınması için biraz bekle; sürerse DemirDöküm yetkili servisine başvur."
faq:
  - q: "Isıtmayı açtım ama bir süre hiç hava gelmiyor. Bozuk mu?"
    a: "Hayır. DemirDöküm kılavuzuna göre ısıtma başlatıldığında hava akımı hemen başlamaz; hava sıcaklık yükselmeden gelseydi odada istenmeyen bir soğutma etkisi olurdu. Bu yüzden fan, sıcaklık yeterli değere ulaşınca devreye girer ve kılavuz bunu hatalı işlem saymıyor."
  - q: "Klima ısıtırken arada sıcak hava kesiliyor, dış üniteden buhar çıkıyor. Normal mi?"
    a: "Evet. Kion kılavuzu, dış ünitenin ısıtmada buzu gidermek için soğutma döngüsüne geri döndüğünü ve buz çözme kontrolünün ısıtma başladıktan 40 dakika sonra etkinleştiğini yazıyor. Bu sırada iç ünite ekranında bir sembol görünür, dış ünite buhar üretebilir ve basınçlı hava çıkıyormuş gibi bir ses duyulabilir; kılavuz bunlar için önlem gerekmediğini söylüyor."
  - q: "Gece uyku modunda oda serinliyor. Neden?"
    a: "Isıtmada uyku modu açıldığında oda sıcaklığı 60 dakika sonra ayardan 1°C, 2 saat sonra 2°C düşük tutulur. Daha sıcak bir oda istiyorsan uyku modunu kapat ya da ayarı yükselt."
  - q: "Dışarısı çok soğukken DemirDöküm klima ısıtır mı?"
    a: "Kion kılavuzu ısıtma için dış sıcaklık aralığını −15 ile 24°C olarak veriyor ve iç ünitenin ısıtma gücünün dış ortam sıcaklığına göre değiştiğini yazıyor."
  - q: "Oda hedef sıcaklığa ulaştı ama fan hâlâ çalışıyor. Neden?"
    a: "Kılavuza göre ısıtmada oda istenen sıcaklığa ulaştıktan sonra iç ünitenin fanı bir süre daha çalışır ve üflenen hava sıcak hissedilebilir. Sonra oda sana serin gelirse daha yüksek bir sıcaklık ayarla."
images:
  coverAlt: "Kış akşamı loş bir yatak odasında buğulu cam, duvarda kanatları aşağıya dönük beyaz split klima ve yatağın üzerinde katlanmış kalın bir yorgan"
---

Kışın klimayı ısıtmaya aldın; ya ilk dakikalarda hiç hava gelmiyor ya da sıcak hava bir süre sonra kesiliyor. DemirDöküm'ün Kion inverter kullanma kılavuzu bu iki durumu arıza saymıyor. Tablodaki satır açık: **"Isıtma devresi başlatıldığında hava akımı hemen başlamaz."** Kılavuz bunun nedenini de veriyor: hava, sıcaklık yeterli değere ulaşınca üflenir, yoksa odaya soğuk hava gelirdi. Ara ara kesilen ısıtmayı ise kılavuz buz çözme işlemiyle açıklıyor. Gerçekten zayıf ısıtmada da aynı tablonun **"Yetersiz soğutma veya ısıtma"** satırı devreye giriyor: kapı-pencere, düşük ayar, kirli filtre, hava yolundaki engel. Aşağıda önce normal olanı, sonra kontrol edilecekleri sıraladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Isıt modu ve odadan yüksek ayar. İlk dakikalarda hava gelmemesi ve buz çözme molası normal; bekle. Lamelleri kumandayla en alta al. Kapı-pencereyi kapat, uyku modunu kapat, filtreyi temizle, ünitenin önünü aç. Sürerse → DemirDöküm yetkili servisi.

## Normal olan ve olmayan

| Ne görüyorsun | DemirDöküm'ün açıklaması | Ne yapmalı |
|---|---|---|
| Isıtmayı açınca hava hemen gelmiyor | Hava, sıcaklık yeterli değere ulaşınca başlar | Bekle |
| Ekranda buz çözme ya da sıcak başlatma sembolü | Buz çözme ya da soğuk hava akışını önleme | Bekle |
| Dış üniteden buhar, basınçlı hava sesi | Buz çözme sırasında normal | Önlem gerekmez |
| Oda ısınınca fan bir süre daha çalışıyor | Isıtmada normal | Gerekirse ayarı yükselt |
| Oda yeterince ısınmıyor | Kapı-pencere açık, ayar düşük, filtre kirli, hava yolunda engel | Aşağıdaki adımlar |

## Adım adım: evde denenecekler

**1. Isıt modu ve ayar.** Kumandada Isıt tuşuna bas ve sıcaklığı 16-30°C aralığında oda sıcaklığından yüksek bir değere ayarla. Kılavuza göre ayarlanan sıcaklık odadan düşükse ısıtma hiç başlamaz. Hızlı düğmesi ısıtmada 30 dakika boyunca 30°C'ye ve çok yüksek fan hızına geçer.

**2. İlk dakikalar.** Isıtmayı yeni açtıysan sıcak hava gelene kadar bekle. Ünite havayı ancak sıcaklık yeterli değere ulaşınca üfler. Soğutmadan ısıtmaya geçerken de ünite güçlü bir soğuk hava akışını önlemek için sıcak başlatma moduna girer.

**3. Buz çözme.** İç ünite ekranında buz çözme ya da sıcak başlatma sembolü görürsen bitmesini bekle. Dış ünite ısıtmada biriken buzu gidermek için kısa süre soğutma döngüsüne döner; buz çözme kontrolü ısıtma başladıktan 40 dakika sonra devreye girer.

**4. Lamel konumu.** Kumandadaki Dikey tuşuyla yatay lamelleri en düşük konuma getir; lamelleri elle çevirme. Bir kez basınca lamel aşağı yukarı dönmeye başlar, istediğin konumda yeniden basınca orada kalır. Kılavuz daha verimli ısıtma için bu konumu öneriyor ve lamellerin elle ayarlanmasının ürüne zarar verebileceğini yazıyor.

**5. Kapı ve pencere.** Odanın kapı ve pencerelerini kapat. Kılavuzun yetersiz ısıtma satırlarının ilki bu.

**6. Uyku modu.** Uyku modu açıksa Uyku tuşuyla kapat ya da ayar sıcaklığını yükselt. Isıtmada uyku modu odayı 60 dakika sonra ayardan 1°C, 2 saat sonra 2°C aşağıda tutar.

**7. Hava filtresi.** Klimanın elektriğini kes, hava filtresini tutamaklarından çekip çıkar, elektrikli süpürgeyle ya da en fazla 45°C suyla temizle, gölgede kurutup tak. Metal parçalara dokunma, filtreyi tamamen kurumadan takma ve klimayı filtresiz çalıştırma.

**8. Hava yolu, bekleme ve servis.** Hava giriş ve çıkışının önünü aç ve odanın ısınması için biraz bekle; sürerse DemirDöküm yetkili servisine başvur. Kion'un ısıtma için dış sıcaklık aralığı −15 ile 24°C; ısıtma gücü dış sıcaklığa göre değişir.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, bekleme, lamel, kapı-pencere, uyku modu, filtre, hava yolu | Senin, bu rehberdeki adımlar |
| Adımlardan sonra da yetersiz ısıtma | DemirDöküm yetkili servisi |
| Soğutucu madde kaçağı şüphesi | Yetkili bayi ya da servis |

⛔ DemirDöküm kılavuzu üründe kendi başına bakım ya da onarım yapılmamasını istiyor; ürünü su ile durulama.

Klima hiç açılmıyorsa [DemirDöküm klima çalışmıyor](/blog/demirdokum-klima-calismiyor/), yazın serinletmiyorsa [DemirDöküm klima soğutmuyor](/blog/demirdokum-klima-sogutmuyor/) yazısına bak. Markadan bağımsız anlatım [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Isıtma konumu, sıcak başlatma ve buz çözme, lamel ayarı, uyku modu, arıza giderme tablosu, hava filtresi bakımı ve çalışma sıcaklıkları DemirDöküm'ün demirdokum.com.tr'deki "Kion lnverter" kullanma kılavuzundan (8000034092_00) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
