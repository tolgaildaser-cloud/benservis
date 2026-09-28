---
title: "Siemens çamaşır makinesi E:30-20 hatası"
description: "Yeni Siemens çamaşır makinelerinde E:30-20: kritik fonksiyon arızası. Musluğu kapatma, 5 dakikalık boşaltma, yeniden başlatma ve servis sınırı adım adım."
slug: "siemens-camasir-makinesi-e30-20-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, sekizi de HTTP 200; pdftotext (düz ve -layout) ile okundu, satır sınırları sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması kullanılmadı: belgeler siemens-home.bsh-group.com/tr ürün sayfalarındaki kılavuz bağlantısından bulundu. Hepsi media3.bsh-group.com.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# E:30-20 satırı sekiz belgede aynı üç sebeple (A s.40-41, B s.40-41, C s.38, D s.38, E s.39, F s.40, G s.35, K s.42-43):
#   "Kritik fonksiyon arızası. ▶ Musluğu kapatınız. Hata mesajı ile cihaz bir su boşaltma işlemini başlatır.
#    1. Pompalama işlemi tamamlanana kadar yaklaşık 5 dakika bekleyiniz. 2. Cihazı yeniden başlatınız.
#    Gerekirse pompalama işlemini yeniden başlatınız. 3. Arıza devam ederse, müşteri hizmetlerini arayınız."
#   "Deterjan dozajı çok fazla. ▶ (Manuel dozajlama yapıyorsanız,) aynı miktarda çamaşır yükü olan bir sonraki yıkama işleminde deterjan miktarını azaltınız."
#   "İlave su ile dolduruldu. ▶ Çalışma sırasında cihaza ilave su eklemeyiniz."
# DİKKAT satır sınırı: "Su basıncı düşük" ve "Su seviyesi ölçüm sistemi arızalı" E:30-10 satırına ait (G s.35 ve A s.40 sayfa görüntüsüyle teyit) — E:30-20'ye YAZILMADI.
# Bilerek YAZILMAYANLAR: valf/kart/sensör teşhisi (Siemens E:30-20'de parça adı vermiyor); "fişi çek-bekle" reseti (E:30-20 satırında yok; o talimat "Diğer tüm hata kodları" satırına ait);
#   "yeniden başlat"ın tuş kombinasyonu (E:30-20 satırı yöntem vermiyor).
# Alıntı denetim tablosu: siemens-camasir-makinesi-e30-20-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Musluğu kapat."
  - "Makinenin başlattığı su boşaltmanın bitmesi için yaklaşık 5 dakika bekle."
  - "Cihazı yeniden başlat."
  - "Gerekirse pompalama işlemini yeniden başlat."
  - "Sonraki yıkamada, aynı miktarda çamaşır için deterjanı azalt."
  - "Program çalışırken cihaza ilave su ekleme."
  - "E:30-20 sürerse müşteri hizmetlerini ara; E-Nr. ve FD numarasını hazır tut."
faq:
  - q: "Siemens çamaşır makinesinde E:30-20 ne demek?"
    a: "Siemens'in yeni nesil çamaşır makinesi kılavuzlarında E:30-20'nin ilk karşılığı kritik fonksiyon arızası. Talimat musluğu kapatmak; makine hata mesajıyla birlikte suyu kendisi boşaltmaya başlar. Aynı satırda iki kullanıcı kaynaklı sebep daha var: deterjan dozajının çok fazla olması ve çalışma sırasında cihaza ilave su eklenmesi."
  - q: "E:30-20 çıkınca kapağı hemen açabilir miyim?"
    a: "Siemens önce pompalama işleminin bitmesini, yani yaklaşık 5 dakika beklemeyi istiyor. Kılavuza göre sıcaklık ya da su seviyesi yüksekken kapak güvenlik nedeniyle kilitli kalır; sıcaklık yüksekse Durulama programı başlatılır ya da sıcaklığın düşmesi beklenir, su seviyesi yüksekse Sıkma ya da uygun bir boşaltma programı başlatılır."
  - q: "E:30-10 ile E:30-20 aynı şey mi?"
    a: "Hayır. Siemens kılavuzlarında E:30-10 su girişiyle ilgili satırdır: musluk kapalı, su giriş hortumu katlanmış, giriş süzgeçleri tıkanmış, su basıncı düşük ya da su seviyesi ölçüm sistemi arızalı. E:30-20 ise kritik fonksiyon arızası, fazla deterjan ve ilave su satırıdır ve ilk talimatı musluğu kapatmaktır."
  - q: "Yeniden başlattım, kod geri geldi. Ne yapmalıyım?"
    a: "Siemens'in E:30-20 talimatındaki son adım: arıza devam ederse müşteri hizmetlerini ara. Kılavuza göre müşteri hizmetlerine başvururken cihazın ürün numarasını (E-Nr.), imalat numarasını (FD) ve sayma numarasını (Z-Nr.) hazır bulundurman gerekir."
images:
  coverAlt: "Çamaşır makinesinin arkasındaki su musluğunu kapatan bir el; arka planda ekranı yanan ön yüklemeli çamaşır makinesi"
---

Program ortasında makine durdu ve ekranda **E:30-20** belirdi. Siemens'in yeni nesil çamaşır makinesi kılavuzlarında bu kodun ilk karşılığı **"Kritik fonksiyon arızası."** İlk talimat da net: **musluğu kapat.** Kılavuza göre makine, hata mesajıyla birlikte suyu kendisi boşaltmaya başlar; senden beklenen, bu boşaltmanın bitmesini beklemek ve cihazı yeniden başlatmaktır. Aynı satır iki kullanıcı kaynaklı sebebi de sayıyor: fazla deterjan ve çalışma sırasında eklenen su.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:30-20 = Siemens'e göre kritik fonksiyon arızası (ya da fazla deterjan / ilave su). Sıra şu: musluğu kapat → makine suyu boşaltırken yaklaşık 5 dakika bekle → cihazı yeniden başlat, gerekirse pompalamayı yeniden başlat → sonraki yıkamada deterjanı azalt, çalışırken su ekleme. Kod sürerse → müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Musluğu kapat.** Siemens'in kritik fonksiyon arızası için ilk talimatı budur: **musluğu kapat.** Makineyi besleyen su musluğunu kapattığından emin ol.

**2. Boşaltmanın bitmesini bekle.** Kılavuza göre hata mesajıyla birlikte cihaz bir **su boşaltma** işlemi başlatır. Pompalama işlemi tamamlanana kadar **yaklaşık 5 dakika** bekle; bu sırada kapağı zorlama.

**3. Cihazı yeniden başlat.** Pompalama bittikten sonra Siemens'in ikinci adımı cihazı **yeniden başlatmak.**

**4. Gerekirse pompalamayı yeniden başlat.** Tamburda hâlâ su varsa kılavuzun notu şu: **gerekirse pompalama işlemini yeniden başlat.** Aynı kılavuz, su seviyesi yüksek olduğu için kapak açılmıyorsa ilgili **Sıkma** programının ya da uygun bir **boşaltma** programının başlatılmasını söylüyor.

**5. Deterjanı azalt.** E:30-20 satırındaki ikinci sebep **deterjan dozajının çok fazla** olması. Siemens'in talimatı: aynı miktarda çamaşır yükü olan **bir sonraki yıkamada deterjan miktarını azalt.** Akıllı dozaj sistemli modellerde bu talimat manuel dozajlama için verilmiş.

**6. Çalışırken su ekleme.** Satırdaki üçüncü sebep: cihaz **ilave su ile doldurulmuş.** Siemens'in talimatı kısa: **çalışma sırasında cihaza ilave su ekleme.**

**7. Kod sürerse servis.** Siemens'in E:30-20 talimatındaki son adım: **arıza devam ederse müşteri hizmetlerini ara.** Aramadan önce cihazın ürün numarasını (**E-Nr.**), imalat numarasını (**FD**) ve sayma numarasını (**Z-Nr.**) hazırla; kılavuz bunları istiyor.

## E:30-20 tam olarak neyi söylüyor?

Siemens'in yeni nesil kılavuzlarında **E:30-10** ile **E:30-20** aynı başlangıcı taşısa da tabloda ayrı satırlardır ve farklı durumları anlatır:

| Kod | Siemens'in saydığı sebepler | İlk talimat |
|---|---|---|
| **E:30-10** | Musluk kapalı · su giriş hortumu katlanmış veya sıkışmış · su girişindeki süzgeçler tıkanmış · su basıncı düşük · su seviyesi ölçüm sistemi arızalı | Musluğu aç, hortumu ve süzgeci kontrol et |
| **E:30-20** | Kritik fonksiyon arızası · deterjan dozajı çok fazla · ilave su ile dolduruldu | **Musluğu kapat** |

Farka dikkat: E:30-10'da musluğu **açman**, E:30-20'de ise **kapatman** isteniyor. Ekrandaki kodu tireden sonrasıyla birlikte oku.

## Köpük ve kapak: E:30-20'nin yanındaki iki durum

Fazla deterjan, aynı tablonun köpük satırında da geçiyor. Ekranda köpük sembolü görünüyor ya da tamburda yoğun köpük varsa Siemens'in önerisi: **bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştırıp** manuel dozajlama haznesine dök (outdoor, spor kıyafetleri ve kaz tüyü tekstiller için değil), sonraki yıkamada da deterjanı azalt.

Program durdu ama kapak açılmıyorsa kılavuz iki sebep sayıyor: **sıcaklık çok yüksek** (Durulama programını başlat ya da sıcaklığın düşmesini bekle) veya **su seviyesi çok yüksek** (Sıkma ya da uygun bir boşaltma programı başlat). Markadan bağımsız kontrol sırası için [çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Musluk kapalı, boşaltma bitti, cihaz yeniden başlatıldı, deterjan azaltıldı ve E:30-20 hâlâ geliyorsa Siemens'in talimatı müşteri hizmetlerini aramak. Kılavuzun arıza bölümündeki genel uyarı da aynı yönde: usulüne aykırı onarımlar tehlike yaratır, cihaz ya da özellikleri teknik olarak değiştirilmemeli ve onarımı yalnızca bunun eğitimini almış uzman personel yapmalı.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, bekleme, yeniden başlatma ve deterjan miktarı kullanıcıya; kritik fonksiyon arızasının kaynağını bulmak servise aittir.

Tabloda kendi satırı olmayan kodlar için Siemens'in ayrı bir yeniden başlatma talimatı var; onu [Siemens çamaşır makinesi hata kodu sıfırlama](/blog/siemens-camasir-makinesi-hata-kodu-sifirlama/) rehberinde anlattık. Diğer Siemens kodları için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
