---
title: "DemirDöküm termosifon suyu ısıtmıyor"
description: "DemirDöküm DT4-B termosifon ısıtmıyor mu? İki LED'in anlamı, düğmenin don konumu, 4 derece farkı ve eco aralığı: kılavuza göre kontroller ve servis sınırı."
slug: "demirdokum-termosifon-suyu-isitmiyor"
date: "2026-10-03"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile DemirDöküm'ün KENDİ alan adından indirildi, HTTP 200,
#   yönlendirme 0. Web araması yalnız belge yerini bulmak için. Sayfa = PDF sayfası (pdftotext -f N -l N).
#  D1) DemirDöküm DT4-B 50 / DT4-B 65 / DT4-B 80 elektrikli termosifon kullanma kılavuzu, 0020196664_12 - 08.08.2025
#      https://www.demirdokum.com.tr/downloads/dt4-b-kullanma-0020196664-12-3076596.pdf  12 s.  md5 b3e7843ed1f50d761e26f588f3cd0d7b
#  (aynı serinin eski baskısı da indirildi, kullanılmadı: .../products-1/dd-dt4-d-50-65-80-i-kk-0020196664-08-2568353.pdf 16 s. md5 084bc4ccbf368c1ff7b739089cf70020)
# Ana satırlar: s.11 "A Arıza mesajlarına genel bakış" → "Ürün çalışmaz" / "Şebeke bağlantısında şebeke gerilimi yok" / "Devre koruma şalterini devreye alın.
#   Enerji tedarikçisini bilgilendirin." · "Sıcak su yok" / "Termostat arızalı Bağlantı hatası" / "Müşteri hizmetlerini bilgilendirin" · "Çok sıcak su, buhar
#   çıkıyor" / "Termostat arızalı" / "Müşteri hizmetlerini bilgilendirin" · "Isıtma aşaması sırasına ses oluşumu" / "Isıtma elemanında kireçlenme ..." /
#   "Müşteri hizmetlerini bilgilendirin" · "Su çok yavaş ısınıyor" / "Şebeke bağlantısında çok düşük şebeke gerilimi / Isıtma elemanında kireçlenme" /
#   "Müşteri hizmetlerini bilgilendirin"
#   s.8 "4.1 Kumanda paneli 1 Şebeke gerilimi LED'i 2 Isıtma LED'i 3 Ayar düğmesi" · "Şebeke gerilimi söz konusu olduğunda, her iki LED kısa süreliğine yanar.
#   Ardından ısıtma LED'i söner." · "Şebeke gerilimi LED'i, şebeke bağlantısında gerilim olduğu sürece yanar." · "Isıtma LED'i, ürün ısıtma konumunda iken
#   yanar." · "Döner düğmede, hangi fonksiyonun etkin olduğunu okuyabilirsiniz." · "Sıcaklık aralığı: 30 … 80 ℃" · "Ayar düğmesini saat yönünde çevirirseniz,
#   sıcaklığı arttırırsınız." · "Sıcaklık reglerinin ısıtma elemanını etkinleştirmesi için ayarlanan ve yeni seçilen sıcaklık arasında bir sıcaklık farkı
#   olmalıdır. – Sıcaklık farkı: 4 ℃" · "eco işletme modu ... Sıcaklık aralığı: 47 … 53 ℃ Ayar düğmesini eco konumuna getirerek" · "Bu fonksiyonu günlerce evde
#   bulunmamanız durumunda kullanabilirsiniz. Ayar düğmesini don sembollü mavi alana çevirerek fonksiyonu etkinleştirirsiniz." · "Donmaya karşı koruma fonksiyonu,
#   ürün sigortasını kapatırsanız müdahale etmez." · "İşletme sıcaklığı: 6 ℃ – Minimum işletme sıcaklığı: 10 ℃"
#   s.9 "5.2 Arızalı sıcaklık sensörü ... emniyet sıcaklık sınırlayıcısı ... sıcak su boylerine giden gerilim beslemesini keser. ▶ Tamirin müşteri hizmetleri
#   tarafından yapılmasını sağlayın." · "ısıtma elemanı (rezistans) her 2 yılda bir temizlenmelidir." · magnezyum anot / kireç / boşaltma / doldurma → "müşteri
#   hizmetleri tarafından" · s.5 "İşletim sırasında emniyet ventilinden sıcak su damlayabilir." · s.7 "Kapalı sistemlerde bu nedenle emniyet tertibatı gider
#   borusunun sonunda damlalar oluşur." · s.6 "Ürünün tamir ve bakımı DemirDöküm teknik servisi tarafından yapılmalıdır."
# BİLEREK YAZILMAYANLAR: emniyet ventilinden aylık boşaltma (belgede bakım olarak var, s.9; ısıtma adımı değil, sıcak su çıkabilir → yalnız anıldı) ·
#   magnezyum anot, rezistans, boşaltma/doldurma (belge müşteri hizmetlerine veriyor) · şalter/sigorta panosu işlemi (yalnız "devreye al") · başka DT4 modellerine
#   genelleme · fiyat (#46).
# Alıntı denetim tablosu: demirdokum-termosifon-suyu-isitmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Kumanda panelindeki şebeke gerilimi LED'inin yanıp yanmadığına bak."
  - "LED yanmıyorsa termosifonun devre koruma şalterini devreye al; gerilim yine yoksa enerji tedarikçisini bilgilendir."
  - "Ayar düğmesinin don sembollü mavi alanda olup olmadığına bak; oradaysa ürün suyu yalnız donmaya karşı korur."
  - "Düğmeyi saat yönünde çevirerek istediğin sıcaklığa ya da eco konumuna getir."
  - "Ayarı değiştirirken eski ve yeni ayar arasında en az 4 °C fark bırak."
  - "Isıtma LED'inin yandığını izle ve suyun ısınması için bekle."
faq:
  - q: "DemirDöküm termosifondaki iki ışık ne anlama geliyor?"
    a: "DT4-B kılavuzuna göre paneldeki ilk LED şebeke gerilimi LED'i: şebeke bağlantısında gerilim olduğu sürece yanar. İkincisi ısıtma LED'i: ürün ısıtma konumundayken yanar. Elektrik geldiğinde iki LED kısa süreliğine birlikte yanar, ardından ısıtma LED'i söner."
  - q: "Düğme don sembollü mavi alanda, termosifon bozuk mu?"
    a: "Hayır, bu donmaya karşı koruma konumu. Kılavuz bu fonksiyonu günlerce evde bulunmayacağın durumlar için anlatıyor: suyun sıcaklığı 6 °C'ye düştüğünde ısıtma elemanı devreye girer ve suyu en az 10 °C'ye ısıtır. Yani bu konumda kullanım için sıcak su hazırlanmaz; düğmeyi sıcaklık bölgesine ya da eco konumuna çevirmen gerekir."
  - q: "Eco konumu ne kadar ısıtır?"
    a: "DT4-B kılavuzunda eco işletme modu sıcak su sıcaklığını otomatik olarak 47-53 °C aralığında tutuyor. Normal ayar aralığı ise 30-80 °C; düğmeyi saat yönünde çevirdikçe sıcaklık artıyor."
  - q: "Su çok yavaş ısınıyorsa ne yapmalıyım?"
    a: "Kılavuzun arıza tablosu bu belirtiye iki sebep yazıyor: şebeke bağlantısında çok düşük gerilim ve ısıtma elemanında kireçlenme. İkisinde de çözüm müşteri hizmetlerini bilgilendirmek. Kılavuz ayrıca rezistansın her 2 yılda bir temizlenmesini istiyor; bu iş de müşteri hizmetlerine ait."
images:
  coverAlt: "Banyo duvarında asılı beyaz silindir bir elektrikli termosifonun altındaki döner ayar düğmesi ve yanındaki iki küçük gösterge ışığı"
---

Sıcak su musluğunu açıyorsun ve su soğuk akıyor. DemirDöküm'ün **DT4-B 50 / 65 / 80** elektrikli termosifonunda ekran yok; durumu iki küçük ışık ve bir döner düğme anlatıyor. Kılavuzun arıza tablosu bu belirtiyi **"Ürün çalışmaz"** ve **"Sıcak su yok"** diye iki satıra ayırıyor. İlkinin çözümü kullanıcının elinde; ikincisinden önce de düğmenin konumuna bakmak gerekiyor, çünkü bir konum suyu bilerek ısıtmıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Şebeke gerilimi LED'i yanıyor mu → yanmıyorsa devre koruma şalterini devreye al → düğme don sembollü mavi alanda mı → düğmeyi sıcaklığa ya da eco'ya çevir → en az 4 °C fark bırak → ısıtma LED'i yanıyor mu. LED'ler doğru, ayar doğru ama sıcak su yoksa müşteri hizmetleri.

## İki ışığı okumak

DT4-B'nin kumanda panelinde üç eleman var: **şebeke gerilimi LED'i**, **ısıtma LED'i** ve **ayar düğmesi.**

| Durum | Kılavuza göre anlamı |
|---|---|
| Elektrik gelince **iki LED kısa süre yanar**, sonra ısıtma LED'i söner | Normal açılış |
| **Şebeke gerilimi LED'i** yanıyor | Şebeke bağlantısında gerilim var |
| **Isıtma LED'i** yanıyor | Ürün ısıtma konumunda |
| İkisi de **sönük** | Kılavuzun "ürün çalışmaz" satırı: şebeke geriliminin olmaması |

## Adım adım: evde denenecekler

**1. Şebeke gerilimi LED'ine bak.** Kılavuza göre bu LED **şebeke bağlantısında gerilim olduğu sürece** yanıyor. Yanıyorsa termosifona elektrik geliyor; 3. adıma geç.

**2. LED sönükse şalteri devreye al.** Arıza tablosunun ilk satırı: **"Ürün çalışmaz"** → sebep **şebeke bağlantısında şebeke gerilimi yok** → çözüm **devre koruma şalterini devreye al.** Gerilim yine gelmiyorsa tablonun ikinci önerisi **enerji tedarikçisini bilgilendirmek.** Şalterin ötesinde bir elektrik işi gerekiyorsa bunu bir elektrik ustasına bırak.

**3. Düğme don konumunda mı?** DT4-B'nin ayar düğmesinde **don sembollü mavi bir alan** var. Kılavuz bu konumu **günlerce evde bulunmayacağın** durumlar için anlatıyor: suyun sıcaklığı **6 °C'ye** düştüğünde ısıtma elemanı devreye giriyor ve suyu **10 °C'lik minimum işletme sıcaklığına** ısıtıyor. Yani düğme bu alandaysa termosifon çalışıyor ama kullanım için sıcak su hazırlamıyor. Kılavuzun hatırlattığı gibi **hangi fonksiyonun etkin olduğunu döner düğmeden okuyabilirsin.**

**4. Düğmeyi sıcaklığa ya da eco'ya getir.** Sıcak su sıcaklığı **30-80 °C** arasında kademesiz ayarlanıyor: düğmeyi **saat yönünde** çevirirsen sıcaklık **artıyor**, tersine çevirirsen azalıyor. Düğmeyi **eco** konumuna getirirsen termosifon suyu otomatik olarak **47-53 °C** aralığında tutuyor.

**5. En az 4 °C fark bırak.** Kılavuzun teknik bir şartı var: sıcaklık reglerinin ısıtma elemanını çalıştırması için **ayarlanan ve yeni seçilen sıcaklık arasında 4 °C fark** olmalı. Düğmeyi çok az oynattıysan biraz daha çevir.

**6. Isıtma LED'ini izle.** Ayar doğruysa ve su ayarın altındaysa **ısıtma LED'i yanmalı**; kılavuza göre bu LED **ürün ısıtma konumundayken** yanıyor. Isınma için suya zaman tanı.

## Tablonun servise bıraktığı satırlar

DT4-B arıza tablosunda geri kalan satırların hepsinde çözüm aynı: **müşteri hizmetlerini bilgilendir.**

| Belirti | Kılavuzdaki olası neden |
|---|---|
| **Sıcak su yok** | Termostat arızalı · bağlantı hatası |
| **Çok sıcak su, buhar çıkıyor** | Termostat arızalı |
| **Isıtma sırasında ses** | Isıtma elemanında kireçlenme · üründe ya da devrede partikül · devrede değişken basınç |
| **Su çok yavaş ısınıyor** | Çok düşük şebeke gerilimi · ısıtma elemanında kireçlenme |

Kılavuz bir güvenlik ayrıntısını da yazıyor: sıcaklık sensörü devre dışı kalırsa **emniyet sıcaklık sınırlayıcısı** suyun aşırı ısınmasını önlemek için boylere giden **gerilimi kesiyor**; bu durumda tamir **müşteri hizmetlerine** ait.

## Damlama ve bakım

**Emniyet ventilinden damla normal.** DT4-B kılavuzuna göre ısınan su genleşir; kapalı sistemlerde bu yüzden emniyet tertibatının gider borusunun ucunda **damlalar oluşur** ve işletim sırasında ventilden **sıcak su damlayabilir.**

**Kireç bakımı servisin işi.** Kılavuz rezistansın **her 2 yılda bir** temizlenmesini, yüksek kireçli bölgelerde **magnezyum anodun her yıl** kontrol edilmesini istiyor ve bu çalışmaların, ürünün **boşaltılıp doldurulması** dahil, **müşteri hizmetleri tarafından** yapılmasını söylüyor.

Markadan bağımsız kontrol listesi için [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısına bakabilirsin. Dijital ekranlı ve hata kodlu bir model için kardeş yazı: [Vestel termosifon suyu ısıtmıyor](/blog/vestel-termosifon-suyu-isitmiyor/).

## Ne zaman servis

- Şebeke gerilimi LED'i yanıyor, düğme doğru konumda, **ısıtma LED'i yanmıyor** ya da **sıcak su yok.**
- **Buhar çıkıyor**, su aşırı sıcak geliyor.
- Isınırken **ses** geliyor ya da su **çok yavaş** ısınıyor.

Kılavuza göre ürünün tamir ve bakımı **DemirDöküm teknik servisi** tarafından yapılmalı.

⛔ **Kendin-çöz sınırı burada biter.** LED'leri okumak, şalter ve düğme ayarı kullanıcıya; termostat, sensör, rezistans, anot ve boşaltma servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
