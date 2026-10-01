---
title: "Mitsubishi Electric klima çalışmıyor"
description: "Mitsubishi Electric klima açılmıyorsa kılavuzun sırası: şalter, fiş, ON zamanlayıcı, 3 dakika bekleme, kumanda pili, acil çalıştırma, servis."
slug: "mitsubishi-electric-klima-calismiyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki belirti damarı). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200; md5 30 Eyl yerel kopyasıyla birebir.
# Web araması KULLANILMADI: adres yayındaki mitsubishi-electric-klima-sogutmuyor provenansından. pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı TR-numarası iki eksik: s.16 = TR-14).
#  M) Mitsubishi Electric "Duvar tipi split klimalar iç ünite MSZ-AP25VG/35VG/42VG/50VG · Çalıştırma talimatları" (English/Türkçe)
#     https://klima.mitsubishielectric.com.tr/Guide/20220324182219_msz-ap_25-50vg_kullanma_k_lavuzu.pdf  28 s.  md5 43435dae68b08714f849fb3768360849
# M s.16 "BİR ARIZA OLDUĞUNU DÜŞÜNDÜĞÜNÜZDE": "Bu öğeler kontrol edilse bile, ünitedeki sorun giderilmezse, klimayı kullanmayı bırakın ve satıcınıza danışın."
#   "Ünite çalıştırılamıyor. • Şalter açık mı? • Güç kaynağı fişi takılı mı? • ON zamanlayıcı ayarlı mı?"
#   "Ünite, tekrar başlatıldığında yaklaşık 3 dakika çalıştırılamaz. • Bu, mikroişlemcideki talimatlara göre üniteyi korur. Lütfen bekleyin."
#   "Uzaktan kumanda ekranı boş ya da sönük. İç ünite, uzaktan kumanda sinyaline cevap vermiyor. • Piller bitti mi? • Pillerin kutupları (+, -) doğru mu? • Diğer elektrikli cihazların uzaktan kumanda düğmelerine basılmış mı?"
#   "Ünite kendi kendine çalışıyor/duruyor. • Haftalık zamanlayıcı ayarlandı mı?"
#   "Uzaktan kumandadan sinyal almamasına rağmen, ana güç açıldığında ünite kendiliğinden çalışmaya başlıyor. • Bu modeller otomatik yeniden çalıştırma fonksiyonuna sahiptir."
# M s.17: "Aşağıdaki durumlarda, klimayı kullanmayı bırakın ve bayiinize başvurun. ... • Çalışma gösterge lambası yanıp söndüğünde. • Devre kesici sık sık kapandığında. • Elektronik ON/OFF tipi floresan lambaların (sık frekans yapılı vb.) kullanıldığı odalarda uzaktan kumanda sinyali alınmaz."
# M s.3 UYARI: "Çalıştırma esnasında Şalteri KAPATMAYIN/AÇMAYIN veya güç fişini çıkarmayın/takmayın." / "İç ünite uzaktan kumandayla KAPATILDIKTAN sonra, şalterin KAPATTIĞINIZDAN veya güç fişini çıkardığınızdan emin olun." / "Güç kablosunu orta noktaya takmayın, uzatma kablosu kullanın veya birden fazla cihazları tek bir AC çıkışına takın." / "Güç fişinin kirli olmadığından emin olun ve onu sağlam bir şekilde prize takın."
# M s.6 (TR-4): kumanda "Sinyal uzaklığı : Yaklaşık 6 m" · "Sinyal alındığında iç üniteden bip ses(ler)i duyulur." · "Yalnızca üniteyle birlikte verilen uzaktan kumandayı kullanın." · iç ünitede "Emergency operation (acil çalıştırma) düğmesi Sayfa 11" ve "Uzaktan kumanda emir alma gözü"
# M s.7 (TR-5): "Çalıştırmadan önce: Güç kaynağı fişini güç prizine takın ve/veya şalteri açın." / "1. Ön kapağı çıkarın. 2. Önce AAA alkali pillerin negatif kutbunu takın. 3. Ön kapağı takın." / "Pillerin kutuplarının doğru olduğundan emin olun." / "Manganezli ve sızıntı yapan pilleri kullanmayın." / "Şarj edilebilir tipteki pilleri kullanmayın." / "Pil zayıfladığında ekranda pil değişim göstergesi belirir. Gösterge ekranda belirdikten sonra yaklaşık 7 gün içinde uzaktan kumanda çalışmayı keser." / "Tüm pilleri aynı tipte yenileriyle değiştirin." / "Piller yaklaşık 1 yıl kullanılabililir." / "İnce bir alet kullanarak hafifçe RESET (İPTAL) düğmesine basın. RESET (İPTAL) düğmesine basılmamış ise uzaktan kumanda doğru çalışmayabilir."
# M s.11 (TR-9): "(Açık zamanlayıcı) : Ünite ayarlanan sürede AÇILIR." / "Zamanlayıcıyı iptal etmek için ... düğmesine basın."
# M s.13 (TR-11) ACİL ÇALIŞTIRMA: "Uzaktan kumanda kullanılamadığında... Acil çalıştırma iç ünitedeki acil çalıştırma (E.O. SW) düğmesine basarak etkinleştirilebilir." Sıra: Acil SOĞUTMA → Acil ISITMA → Dur; "Sıcaklığı ayarlayın : 24°C · Fan hızı : Orta" / "Çalıştırmanın ilk 30 dakikası deneme çalıştırmasıdır."
#   OTOMATİK YENİDEN ÇALIŞTIRMA: "Eğer bir güç kesilmesi olursa ya da ana güç çalıştırma sırasında kapatılırsa, ... aynı modda çalıştırmaya başlar. Zamanlayıcı ayarlandığında, zamanlayıcı ayarı iptal edilir"
# M s.4: "Ünite kullanıcı tarafından takılmamalı, yeri değiştirilmemeli, parçalanmamalı, üzerinde değişiklik yapılmamalı ya da tamir edilmemelidir." / "Düğmeleri ıslak ellerle çalıştırmayın." / "Güç bağlantı kablosu zarar görmesi halinde ... imalatçı ya da servis elemanı tarafından değiştirilmelidir."
# BİLEREK YAZILMAYANLAR: kumandanın RESET düğmesi (belge "ince bir alet" istiyor → ALET KURALI; gövdede numarasız anıldı) · devre kesiciyi tekrar tekrar kaldırma (s.17 "sık sık kapandığında" bayi) · sigorta/priz/kablo müdahalesi (#31) · otomatik yeniden çalıştırmayı kapatma (belge servis temsilcisi diyor) · "Diğer elektrikli cihazların uzaktan kumanda düğmelerine basılmış mı?" maddesinin yorumu (belge açıklamıyor; tabloda aynen verildi) · ısıtma/buz çözme beklemeleri (bu yazının konusu değil).
# Alıntı denetim tablosu: mitsubishi-electric-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "AAA alkali pil"]
steps:
  - "Klimanın bağlı olduğu şalterin açık olduğunu kontrol et."
  - "Klimanın fişi varsa prize sağlam takılı olduğunu kontrol et; uzatma kablosu ya da çoklu priz kullanma."
  - "Kumandada ON (Açık) zamanlayıcı kuruluysa iptal et."
  - "Klimayı yeni kapatıp açtıysan yaklaşık 3 dakika bekle."
  - "Kumanda ekranı boş ya da sönükse pilleri aynı tipte yeni AAA alkali pillerle değiştir ve kutuplarını kontrol et."
  - "Klimanın kendi kumandasını iç ünitenin alıcı gözüne yaklaşık 6 metre içinden doğrult ve bip sesini dinle."
  - "Kumanda yine çalışmıyorsa iç ünitedeki acil çalıştırma (E.O. SW) düğmesine bas."
  - "Gösterge lambası yanıp sönüyorsa, devre kesici sık sık kapanıyorsa ya da klima hâlâ çalışmıyorsa kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına ya da servisine başvur."
faq:
  - q: "Mitsubishi Electric klima hiç açılmıyor, ilk neye bakmalıyım?"
    a: "Mitsubishi Electric'in Türkçe kılavuzu \"Ünite çalıştırılamıyor\" durumunda üç soru soruyor: şalter açık mı, güç kaynağı fişi takılı mı ve ON (Açık) zamanlayıcı ayarlı mı? Kumanda ekranı boş ya da sönükse ayrıca pillerin bitip bitmediğine ve kutuplarının doğru takılıp takılmadığına bakılmasını istiyor."
  - q: "Klimayı kapatıp hemen açtım, çalışmıyor. Arıza mı?"
    a: "Hayır. Kılavuza göre ünite tekrar başlatıldığında yaklaşık 3 dakika çalıştırılamaz; bu, mikroişlemcinin üniteyi koruma önlemidir. Beklemen yeterli."
  - q: "Elektrik gidip gelince klima kumandaya basmadan kendiliğinden çalıştı. Normal mi?"
    a: "Evet. Bu modellerde otomatik yeniden çalıştırma fonksiyonu var: güç kesilip geri geldiğinde ünite, kesintiden önce kumandayla ayarlanan modda kendiliğinden çalışmaya başlar. Kılavuza göre zamanlayıcı kuruluysa bu sırada zamanlayıcı ayarı iptal edilir. Fonksiyonu kapatmak için ünite ayarının değiştirilmesi gerektiğinden servis temsilcisine danışılması isteniyor."
  - q: "Kumanda pili ne kadar dayanır?"
    a: "Kılavuza göre piller yaklaşık 1 yıl kullanılabilir. Pil zayıfladığında kumanda ekranında pil değişim göstergesi belirir ve gösterge çıktıktan sonra yaklaşık 7 gün içinde kumanda çalışmayı keser. Tüm pilleri aynı tipte yenileriyle değiştir; manganezli, sızıntı yapan ya da şarj edilebilir pil kullanma."
images:
  coverAlt: "Oturma odasında kapalı duran beyaz duvar tipi klima ve önündeki sehpada arka kapağı açık bir uzaktan kumanda ile iki yeni pil"
---

Kumandaya basıyorsun, klima tepki vermiyor. Mitsubishi Electric'in Türkçe çalıştırma talimatlarındaki arıza tablosu bu durumu **"Ünite çalıştırılamıyor"** diye adlandırıyor ve ilk olarak şunu soruyor: **"Şalter açık mı?"** Ardından fiş ve ON zamanlayıcı geliyor; kumanda ekranı boşsa bakılacak yer de piller. Bu yazıda kılavuzun kontrol noktalarını, evde güvenle yapılabilecek sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Şalter açık mı, fiş takılı mı, ON zamanlayıcı kurulu mu? Yeni kapatıp açtıysan 3 dakika bekle. Kumanda ekranı boşsa pilleri değiştir, kutuplara bak. Kumanda yine çalışmıyorsa iç ünitedeki acil çalıştırma düğmesini dene. Gösterge lambası yanıp sönüyorsa ya da devre kesici sık sık kapanıyorsa → Mitsubishi Electric yetkili satıcısı ya da servisi.

## Kılavuzun kontrol noktaları

| Kılavuzdaki belirti | Kılavuzun sorusu ya da açıklaması |
|---|---|
| Ünite çalıştırılamıyor | Şalter açık mı? · Güç kaynağı fişi takılı mı? · ON zamanlayıcı ayarlı mı? |
| Ünite, tekrar başlatıldığında yaklaşık 3 dakika çalıştırılamaz | Mikroişlemci üniteyi koruyor; beklemek gerekiyor |
| Kumanda ekranı boş ya da sönük, iç ünite sinyale cevap vermiyor | Piller bitti mi? · Pillerin kutupları (+, -) doğru mu? · Diğer elektrikli cihazların uzaktan kumanda düğmelerine basılmış mı? |
| Ünite kendi kendine çalışıyor ya da duruyor | Haftalık zamanlayıcı ayarlandı mı? |

Kılavuz, bu maddeler kontrol edildiği hâlde sorun giderilmezse **klimayı kullanmayı bırakıp satıcına danışmanı** istiyor.

## Adım adım: evde denenecekler

**1. Şalter.** Klimanın bağlı olduğu şalterin açık olduğunu kontrol et. Mitsubishi Electric'e göre çalıştırmadan önce güç kaynağı fişi prize takılmalı ve/veya şalter açılmalı. Kılavuz, klima çalışırken şalterin kapatılıp açılmamasını da istiyor: bu kıvılcım çıkarabilir.

**2. Fiş.** Klimanın fişi varsa prize sağlam takılı olduğunu kontrol et. Kılavuz fişin kirli olmamasını, uzatma kablosu ya da çoklu priz kullanılmamasını ve birden fazla cihazın tek prize takılmamasını istiyor. Kablo zarar görmüşse değişimi üretici ya da servis elemanının işi.

**3. ON zamanlayıcı.** Kumandada ON (Açık) zamanlayıcı kuruluysa iptal et. Kılavuza göre Açık zamanlayıcı kurulduğunda ünite ayarlanan sürede açılır; iptal adımı kılavuzunun zamanlayıcı bölümünde.

**4. 3 dakika.** Klimayı yeni kapatıp açtıysan yaklaşık 3 dakika bekle. Mitsubishi Electric bunu arıza değil, mikroişlemcinin üniteyi koruması olarak açıklıyor.

**5. Kumanda pilleri.** Kumanda ekranı boş ya da sönükse ön kapağını çıkar, pilleri aynı tipte yeni AAA alkali pillerle değiştir ve kutuplarının doğru olduğunu kontrol et. Kılavuz manganezli, sızıntı yapan ve şarj edilebilir pilleri kullanmamanı istiyor.

**6. Kumanda sinyali.** Klimanın kendi kumandasını iç ünitenin alıcı gözüne yaklaşık 6 metre içinden doğrult. Kılavuza göre sinyal alındığında iç üniteden bip sesi duyulur ve yalnızca üniteyle birlikte verilen kumanda kullanılmalı.

**7. Acil çalıştırma.** Kumanda yine çalışmıyorsa iç ünitedeki acil çalıştırma (E.O. SW) düğmesine bas. Kılavuz bu düğmeyi uzaktan kumanda kullanılamadığında veriyor: her basışta sırasıyla acil soğutma, acil ısıtma ve durdurma seçilir; acil çalıştırmada sıcaklık 24 °C, fan hızı orta. İlk 30 dakika deneme çalıştırmasıdır. Düğmenin yeri kılavuzunun parça adları çiziminde gösteriliyor. Kılavuz düğmelerin ıslak elle çalıştırılmamasını istiyor; ünitenin önüne uzanırken sağlam bir tabure kullan.

**8. Sürerse servis.** Çalışma gösterge lambası yanıp sönüyorsa, devre kesici sık sık kapanıyorsa ya da bu adımlardan sonra klima hâlâ çalışmıyorsa kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına ya da servisine başvur.

Pil notu: Kılavuz, pilleri taktıktan sonra kumandanın RESET (İPTAL) düğmesine ince bir uçla hafifçe basılmasını istiyor; buna basılmazsa kumanda doğru çalışmayabilir. Bunun için kılavuzunun "Çalıştırmadan önce hazırlık" bölümüne bak.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Şalter, fiş, zamanlayıcı, 3 dakika bekleme, kumanda pili, acil çalıştırma | Senin, bu rehberdeki adımlar |
| Çalışma gösterge lambası yanıp sönüyor | Klimayı kullanmayı bırak, yetkili satıcı ya da servis |
| Devre kesici sık sık kapanıyor | Klimayı kullanmayı bırak, yetkili satıcı ya da servis |
| Odada elektronik açma-kapamalı floresan lamba varken kumanda sinyali alınmıyor | Kılavuz bu durumu da bayiye başvurulacaklar arasında sayıyor |
| Güç kablosu zarar görmüş | Üretici ya da servis elemanı |

⛔ Prize, kabloya, sigortaya ya da iç ünitenin içine müdahale etme. Mitsubishi Electric kılavuzu ünitenin kullanıcı tarafından parçalanmamasını, üzerinde değişiklik yapılmamasını ve tamir edilmemesini istiyor.

Kumanda tarafındaki genel kontroller [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısında, markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) yazısında. Klima çalışıyor ama oda serinlemiyorsa [Mitsubishi Electric klima soğutmuyor](/blog/mitsubishi-electric-klima-sogutmuyor/) yazısına geç.

---

**Kaynak künyesi.** Kontrol noktaları, kumanda pili ve acil çalıştırma bilgileri ile servis durumları Mitsubishi Electric'in MSZ-AP25VG/35VG/42VG/50VG duvar tipi split klima Türkçe çalıştırma talimatlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
