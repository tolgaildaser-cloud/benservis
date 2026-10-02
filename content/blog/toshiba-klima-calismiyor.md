---
title: "Toshiba klima çalışmıyor: evde kontrol"
description: "Toshiba klima açılmıyorsa kılavuzun kontrol noktaları: elektrik, ana güç şalteri, sigorta, ON zamanlayıcı, 3 dakikalık koruma ve kumanda pilleri."
slug: "toshiba-klima-calismiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5'ler 1 Eki yerel kopyalarıyla birebir. Toshiba'nın Türkiye alan adı (toshiba-klima.com.tr).
# Web araması KULLANILMADI: adresler yayındaki toshiba-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-2eki/ · pdftotext -layout -f N -l N, sayfa = PDF sayfası.
#  T1) Toshiba "Montaj Kılavuzu ve Kullanıcı Kılavuzu · Klima (Split Tip)" iç ünite RAS-B05/07/10/13/16/18/24B2KV2G-TR (EN+TR), 36 s., md5 72b5236e8570c72bcb2623dd5963f51c
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaSeiya_new.pdf
#      s.32 "23 PRATİK ÇÖZÜMLER (KONTROL NOKTASI)" · "Ünite çalışmıyor." → "• Ana güç şalteri kapalı. • Sigorta elektriği kesmek için etkin durumda. • Elektrik akımı kesik. • ON timer ayarlanmış."
#      s.32 "22 ÇALIŞMA VE PERFORMANS 1. Üç dakikalık koruma özelliği: Ünitenin bir anda yeniden çalıştırılması veya ON konuma getirilmesi onucunda 3 dakika etkin olmasını engellemek için."
#      s.29 "2 KULLANIM ÖNCESİ HAZIRLIK Pili takın 1. Kaydırmalı kapağı çıkarın. 2. 2 yeni pili (AAA boyunda), (+) ve (–) konumlarına göre takın." · "Uzaktan kumandanın sıfırlanması 1. Kalem ucuyla düğmesini itin. 2. Pilleri çıkarın. 3. düğmesine basın. 4. Pilleri takın."
#      s.31 "13 ZAMANLAYICI ÇALIŞMA Zamanlayıcıyı klima çalışırken ayarlayın." / "3 düğmesine basın : Zamanlayıcıyı iptal etme." / "• Uzaktan kumandayı, iç ünite ile iletişim kurabilecek şekilde tutun;" · "12 TEMPORARY ÇALIŞMA Uzaktan kumada cihazının kaybolması veya pilinin bitmesi halinde. • RESET düğmesine basıldığında, ünite uzaktan kumanda cihazı kullanılmadan da çalışıp durabilir. • Çalışma modu OTOMATİK çalışmaya getirilir, sıcaklık ayarı 24°C yapılır ve fan işlemi da otomatik hıza ayarlanır."
#      s.31 "18 OTOMATİK YENİDEN BAŞLAMA İŞLEVİ AYARI Bu ürün, bir elektrik kesintisinden sonra elektrik kesintisinden önceki gibi aynı çalışma modunda otomatik olarak yeniden çalışacak şekilde tasarlanmıştır." / "• Ürün Otomatik Yeniden Başlatma işlevi ON olacak şekilde gönderilmiştir." / "Otomatik Yeniden Çalışma nasıl ON • iç ünitedeki [RESET] düğmesine basın ve 3 saniye basılı tutun (5 saniye boyunca 3 bip sesi duyulur ve OPERATION lambası 5 kez/sn. yanıp söner)." / "NOT • ON veya OFF zamanlayıcısı ayarlanmışsa, AUTO RESTART OPERATION etkinleşmez."
#      s.32 "19 BAKIM ... İç Ünite ve Uzaktan Kumanda • İç üniteyi ve uzaktan kumandayı gerektiğinde nemli bir bezle silin." · "24 UZAKTAN KUMANDA A-B SEÇİMİ Yan yana 2 iç ünitenin kurulu olduğu durumlarda ..." (kalem ucuyla basılan düğme gerekiyor)
#      s.36 "gerektiğinde Alarko Carrier Yetkili Satıcı ve Servislerine ulaşabilmek için ... Müşteri Danışma Hattımıza başvurabilirsiniz."
#  T2) Toshiba "Owner's Manual · Air Conditioner (Split Type)" RAS-18/22/24J2KVSG-TR Shorai Edge (EN+TR), 16 s., md5 a5924a17042788945f05e6297adf4c61
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaShoraiEdge.pdf
#      s.12 "23 PRATİK ÇÖZÜMLER (KONTROL NOKTASI) Ünite çalışmıyor. • Ana güç şalteri kapalI. • Sigorta elektriği kesmek için etkin durumda. • Elektrik akımı kesik. • ON timer ayarlanmış." · "21 ÇALIŞMA VE PERFORMANS 1. Üç dakikalık koruma özelliği" · "19 GEÇİCİ ÇALIŞMASI Uzaktan kumada cihazının kaybolması veya pilinin bitmesi halinde • RESET düğmesine basıldığında, ünite uzaktan kumanda cihazı kullanılmadan da çalışıp durabilir."
#      s.12 "17 OTOMATİK OLARAK YENİDEN ÇALIŞMA İŞLEMİ Klimayı, elektrik arızası sonrasında otomatik olarak yeniden çalıştırmak için (Ünitenin gücü açık konumda olmalıdır)." / "1. Çalışmayı başlatmak için iç ünitedeki RESET düğmesine basın ve 3 saniye basılı tutun" / "• Açma veya kapatma zamanlayıcısı ayarlanmışsa, AUTO RESTART OPERATION (otomatik yeniden çalışma) etkinleşmez."
#      s.11 "14 TIMER / ZAMANLAYICI ÇALIŞMASI ... tuşuna basın : Zamanlayıcıyı iptal etme." / "Not: • Uzaktan kumandayı, iç ünite ile iletişim kurabilecek şekilde tutun; aksi halde, 15 dakikaya kadar zaman farkı oluşabilir."
#      s.10 "Pilleri Takma (kablosuz çalıştırma kullanıldığında.) 1. Pil bölmesi kapağını çıkarın. 2. 2 yeni pili (AAA boyunda), (+) ve (‒) konumlarına göre takın." · "Uzaktan Kumandanın Sıfırlanması Kalem ucuyla düğmesini itin veya 1. Pili çıkarın. 2. tuşuna basın. 3. Pili takın."
# BİLEREK YAZILMAYANLAR: sigortayı kaldırma/değiştirme ya da şalter panosuna müdahale (#31; kılavuz yalnız nedeni sayıyor) · kumanda sıfırlama ve A-B seçimi adım olarak (kalem ucu gerekiyor → ALET KURALI; gövdede numarasız anıldı) · RESET ile geçici çalışma adım olarak (düğmenin iç ünitedeki yeri TR metninde yalnız şekilde; adım yazılmadı, numarasız anıldı) · otomatik yeniden başlatmayı ayarlama (SSS'de bilgi olarak) · telefon numarası · fiyat.
# Alıntı denetim tablosu: toshiba-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet AAA pil"]
steps:
  - "Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle."
  - "Klimanın ana güç şalterinin ve sigortasının açık konumda olduğunu kontrol et."
  - "Kumandada ON zamanlayıcı kuruluysa zamanlayıcıyı iptal et."
  - "Klimayı kapatıp hemen açtıysan 3 dakika bekle."
  - "Kumandanın kapağını çıkar, 2 yeni AAA pili artı-eksi yönüne göre tak ve kumandayı iç üniteye doğrultarak yeniden dene."
  - "Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur."
faq:
  - q: "Toshiba klima neden açılmaz?"
    a: "Toshiba'nın Türkçe kılavuzlarındaki kontrol noktası tablosu 'Ünite çalışmıyor' satırında dört neden sayıyor: ana güç şalteri kapalı, sigorta elektriği kesmiş, elektrik akımı kesik ya da ON timer ayarlanmış. Ayrıca klima kapatılıp hemen açıldığında üç dakikalık koruma nedeniyle 3 dakika devreye girmez."
  - q: "Elektrik gidip geldi, klima kendiliğinden açılmadı. Neden?"
    a: "Toshiba'nın RAS-B…B2KV2G-TR kılavuzuna göre ürün otomatik yeniden başlatma işlevi açık olarak gönderilir ve kesintiden sonra aynı modda yeniden çalışır. Ancak ON ya da OFF zamanlayıcısı ayarlanmışsa otomatik yeniden çalışma etkinleşmez. İşlev daha önce kapatıldıysa kılavuz, iç ünitedeki RESET düğmesine 3 saniye basılı tutarak yeniden açılabileceğini yazıyor."
  - q: "Kumanda kayboldu ya da pili bitti. Klimayı çalıştırabilir miyim?"
    a: "Toshiba kılavuzları bunun için geçici (TEMPORARY) çalışmayı anlatıyor: iç ünitedeki RESET düğmesine basıldığında ünite kumanda olmadan da çalışıp durabilir. Bu durumda mod OTOMATİK, sıcaklık 24°C ve fan otomatik hıza ayarlanır."
  - q: "Zamanlayıcı kurdum ama klima geç açıldı. Neden?"
    a: "Shorai Edge kılavuzu, kumanda iç üniteyle iletişim kurabilecek şekilde tutulmazsa zamanlayıcıda 15 dakikaya kadar zaman farkı oluşabileceğini yazıyor."
images:
  coverAlt: "Sabah ışığında bir çalışma odasında kapalı duran beyaz split klimaya doğrultulmuş kumanda, masada yanında iki kalem pil"
---

Kumandaya basıyorsun, klima hiç tepki vermiyor. Toshiba'nın Türkçe kullanıcı kılavuzları bu durumu "Pratik Çözümler (Kontrol Noktası)" tablosunda **"Ünite çalışmıyor."** satırıyla veriyor ve altına dört kısa madde yazıyor: **"Ana güç şalteri kapalı."**, sigortanın elektriği kesmiş olması, **"Elektrik akımı kesik."** ve **"ON timer ayarlanmış."** Bunlara kılavuzun üç dakikalık koruma notu ve kumanda pili eklenince evde kontrol edilecek liste tamamlanıyor. Bu yazıda Toshiba'nın sırasını ve kumanda olmadan klimayı çalıştırmanın yolunu anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı? Klimanın ana güç şalteri ve sigortası açık mı? Kumandada ON zamanlayıcı kurulu mu? Klimayı kapatıp hemen açtıysan 3 dakika bekle. Kumandaya 2 yeni AAA pil tak. Hâlâ açılmıyorsa → Toshiba yetkili satıcı ve servisi.

## Toshiba'nın dört maddesi

| Kılavuzdaki madde | Ne demek | Kimin işi |
|---|---|---|
| Elektrik akımı kesik | Evde ya da binada elektrik yok | Senin, bekle |
| Ana güç şalteri kapalı | Klimanın elektriği şalterden kesik | Senin, açık olduğunu kontrol et |
| Sigorta elektriği kesmek için etkin durumda | Klimanın sigortası elektriği kesmiş | Kontrol senin; tesisata müdahale servisin |
| ON timer ayarlanmış | Klima ayarlanan saati bekliyor | Senin, zamanlayıcıyı iptal et |

Kılavuz ayrıca klimanın bir anda yeniden çalıştırıldığında ya da açıldığında **3 dakika** devreye girmediğini, bunun bir koruma özelliği olduğunu yazıyor.

## Adım adım: evde denenecekler

**1. Elektrik.** Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle. RAS-B…B2KV2G-TR kılavuzuna göre ürün, kesintiden sonra kesintiden önceki çalışma modunda kendiliğinden yeniden çalışacak şekilde gönderilir.

**2. Şalter ve sigorta.** Klimanın ana güç şalterinin ve sigortasının açık konumda olduğunu kontrol et. Toshiba tablosu "Ana güç şalteri kapalı" ve "Sigorta elektriği kesmek için etkin durumda" maddelerini ayrı ayrı sayıyor. Filtre temizliği için sigortayı sen kapattıysan geri açmayı unutma; kılavuzun bakım bölümü temizliğe "İlk olarak, sigortayı kapatın." diye başlıyor.

**3. ON zamanlayıcı.** Kumandada ON zamanlayıcı kuruluysa zamanlayıcıyı iptal et. Toshiba bunu "Ünite çalışmıyor" satırında ayrı bir neden olarak veriyor; iptal tuşu kılavuzun zamanlayıcı bölümünde gösteriliyor.

**4. Üç dakika.** Klimayı kapatıp hemen açtıysan 3 dakika bekle. Kılavuza göre üç dakikalık koruma, ünitenin bir anda yeniden çalıştırılmasında 3 dakika devreye girmesini engeller.

**5. Kumanda pilleri.** Kumandanın kapağını çıkar, 2 yeni AAA pili artı-eksi yönüne göre tak ve kumandayı iç üniteye doğrultarak yeniden dene. Toshiba kılavuzları pil boyunu AAA olarak veriyor. Pil değişiminden sonra kumanda yine tepki vermiyorsa kılavuzundaki "Uzaktan kumandanın sıfırlanması" bölümüne bak; bu işlemde bir düğmeye kalem ucuyla basılması gerekebiliyor.

**6. Sürerse servis.** Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur. Toshiba'nın Türkiye kılavuzları yetkili satıcı ve servislere Alarko Carrier'ın müşteri danışma hattından ulaşılmasını söylüyor.

Kumanda kayıpsa ya da pili yoksa Toshiba kılavuzlarındaki geçici (TEMPORARY) çalışma işine yarar: iç ünitedeki RESET düğmesine basıldığında ünite kumanda olmadan da çalışıp durabilir; mod OTOMATİK, sıcaklık 24°C olur. Düğmenin yeri kılavuzdaki şekilde gösteriliyor.

## Ne zaman servis?

Toshiba'nın "Ünite çalışmıyor" satırındaki dört madde de elektrik ve ayar kontrolü. Elektrik var, şalter ve sigorta açık, zamanlayıcı kapalı, piller yeni olduğu hâlde klima açılmıyorsa kullanıcının kontrol edebileceği bir şey kalmamış demektir.

| Durum | Kimin işi |
|---|---|
| Elektrik, şalter ve sigorta kontrolü, zamanlayıcı, 3 dakika bekleme, pil | Senin, bu rehberdeki adımlar |
| Sigorta, priz ya da kablo şüphesi | Toshiba yetkili satıcı ve servisi |
| Tüm kontrollerden sonra klima hâlâ açılmıyor | Toshiba yetkili satıcı ve servisi |

⛔ Sigorta kutusunu, prizi ya da klimanın kablolarını açmaya ve iç ünitenin içine müdahale etmeye çalışma. Toshiba kılavuzu kullanıcıya bakım olarak yalnız filtre temizliğini ve iç ünite ile kumandanın nemli bezle silinmesini veriyor.

Klima açılıyor ama ısıtmıyorsa [Toshiba klima ısıtmıyor](/blog/toshiba-klima-isitmiyor/), serinletmiyorsa [Toshiba klima soğutmuyor](/blog/toshiba-klima-sogutmuyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında.

---

**Kaynak künyesi.** Kontrol noktası tablosu, üç dakikalık koruma, pil takma, zamanlayıcı, geçici çalışma ve otomatik yeniden başlatma notları Toshiba'nın toshiba-klima.com.tr'deki Türkçe kullanıcı kılavuzlarından (RAS-B05~24B2KV2G-TR ve Shorai Edge RAS-18/22/24J2KVSG-TR) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
