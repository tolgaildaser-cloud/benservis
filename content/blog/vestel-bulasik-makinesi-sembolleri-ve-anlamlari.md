---
title: "Vestel bulaşık makinesi sembolleri ve uyarı işaretleri"
description: "Vestel bulaşık makinesi uyarı işaretleri: tuz ve parlatıcı göstergesi, CL, CF, IL1, U1, Wi-Fi ve yıkama adımı sembolleri kılavuzdaki anlamıyla adım adım."
slug: "vestel-bulasik-makinesi-sembolleri-ve-anlamlari"
date: "2026-10-25"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ küme ajanı (YK #182 Dalga 8, küme Z3 büyük markalar GSC). Konu seçimi: GSC www-5 (3 ay) "vestel bulaşık makinesi uyarı işaretleri" 20 gösterim, poz 6.1;
#   origin/main'de vestel-bulasik-makinesi-sembol* yok; başlıklarda "Vestel bulaşık … sembol/işaret" yok. Dalga 6/7/8 klasörlerinde yok.
# Hub: vestel-bulasik-makinesi-hata-kodlari satırları FF, F1-F9, FE, HI, LO → bu kodlar açıklanmadı, bağlantı verildi. CL, CF, IL0/IL1, U0/U1 hub'da yok.
# OT (bu koşu) "vestel bulaşık makinesi sembolleri" → 1. "…sembolleri ve anlamları" 2. "…sembolleri" 3. "…arıza sembolleri"; "…uyarı işaretleri" → 1. aynı sorgu.
# Belge (#88): Vestel BM 8402 GI Pro WIFI kullanım kılavuzu https://statik.vestel.com.tr/webfiles/20264050_k.pdf  HTTP 200  md5 dd6a67c9fefe3c49867c92fa7e66e410 (yerel kaynak-vestel-sprint kopyasıyla aynı).
#   PDF s.37-39 kontrol paneli ve göstergeler (basılı 33-35) · s.40-41 Güç Tasarrufu IL1/IL0, Gün Işığı Pro U1/U0, Wi-Fi CF (basılı 36-37) · s.42 bağlantı kopması · s.46 sorun giderme.
#   Ek kontrol: BM 10502 X GI WIFI https://statik.vestel.com.tr/webfiles/20263192_k.pdf md5 bdbd31789107cc96048ad674595fd6ff (çocuk kilidi tuşu farklı; resetleme yazısında var).
# BİLEREK YAZILMAYANLAR: F/FF/FE/HI/LO kod açıklamaları (hub) · Evin Aklı uygulama kurulum ayrıntısı · kart teşhisi · fiyat.
# Alıntı denetim tablosu: vestel-bulasik-makinesi-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi tuzu", "Bulaşık makinesi parlatıcısı", "Makinenin kullanma kılavuzu"]
steps:
  - "Tuz göstergesi yanıyorsa tuz bölmesini, parlatıcı göstergesi yanıyorsa parlatıcı bölmesini doldur."
  - "Kalan süre ekranında CL görüyorsan Onay tuşuna yaklaşık 3 saniye basarak çocuk kilidini kapat."
  - "Ekranda IL1 ya da IL0 görüyorsan Güç Tasarrufu Modu ayarını okuyorsun; seçimini yapıp makineyi kapatarak kaydet."
  - "U1 ya da U0 görüyorsan Gün Işığı Pro işlevinin açık ya da kapalı olduğunu bil."
  - "CF yazıyor ve Wi-Fi göstergesi yanıp sönüyorsa makine kablosuz ağ kurulumuna hazırdır; kurulumu uygulamadan tamamla."
  - "Wi-Fi ve Uzaktan Kontrol göstergeleri birlikte yanıp sönüyorsa ev ağının geri gelmesini bekle."
  - "Ekranda F ile başlayan bir kod varsa Vestel bulaşık makinesi hata kodları sayfasına bak."
faq:
  - q: "Vestel bulaşık makinesinde CL ne demek?"
    a: "Vestel BM 8402 GI Pro WIFI kılavuzuna göre CL çocuk kilidinin açık olduğunu gösterir. Kilidi açmak ya da kapatmak için Onay tuşuna yaklaşık 3 saniye basılır; kilit etkinleştiğinde tüm LED ışıkları yanıp söner ve Kalan Süre Göstergesinde CL görüntülenir. Başka modellerde tuş farklı olabilir."
  - q: "Vestel bulaşık makinesinde tuz işareti yanıyor, ne yapmalıyım?"
    a: "Kılavuza göre makinede yeterince tuz yoksa tuz eksik göstergesi yanar ve tuz bölmesinin doldurulması gerekir. Parlatıcı göstergesi için de aynı kural geçerli: parlatıcı seviyesi düşük olduğunda gösterge yanar, bölme doldurulur."
  - q: "Ekranda IL1 yazıyor, arıza mı?"
    a: "Hayır. IL1, Güç Tasarrufu Modunun etkin olduğunu gösterir. Kılavuza göre bu modda iç aydınlatma kapı açıldıktan 4 dakika sonra söner ve 15 dakika hiçbir işlem yapılmazsa makine kapanır. IL0 modun kapalı olduğunu gösterir. Fabrika ayarında Güç Tasarrufu Modu etkindir."
  - q: "U1 ve U0 ne anlama geliyor?"
    a: "Kılavuza göre Gün Işığı Pro işlevi, program başlatılmadan önce Opsiyon tuşuna 3 saniye basılarak açılır ya da kapatılır. Açıldığında ekranda U1, kapatıldığında U0 görüntülenir. Makine varsayılan olarak U0 ayarındadır."
  - q: "Kurutma ışığı yanıyor ama makine ses çıkarmıyor, normal mi?"
    a: "Evet. Vestel kılavuzuna göre Kurutma sembolü yanıyorken makine seçtiğin programa göre 15 ile 100 dakika arasında sessiz kalır. Bu bir arıza değildir; program bitince Bitiş sembolü yanar."
images:
  coverAlt: "Mutfakta ankastre yerleştirilmiş beyaz bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda tuz haznesinin vidalı kapağı"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda bulaşık makinesi, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
---

Vestel bulaşık makinenin panelinde bir ışık yanıyor, ekranda **CL**, **CF**, **IL1** ya da **U1** gibi iki üç harflik bir yazı beliriyor ve bunun arıza mı uyarı mı olduğunu bilmiyorsun. Vestel'in **BM 8402 GI Pro WIFI** bulaşık makinesi kullanım kılavuzunda panel göstergeleri numaralarla tek tek sayılıyor; ekrandaki kısa yazıların çoğu da arıza değil, bir ayarın ya da işlevin durumunu gösteriyor. Bu yazıda o listeyi ve ekranda gördüğünde ne yapman gerektiğini kılavuzdan çıkardık. Tuş adları ve yerleri modele göre değişir; kendi kılavuzunla karşılaştır.

Bulaşık makinesindeki soruna özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tuz ve parlatıcı göstergesi bölme boşalınca yanar. **CL** çocuk kilidi, **CF** Wi-Fi kurulum modu, **IL1/IL0** Güç Tasarrufu Modu açık/kapalı, **U1/U0** Gün Işığı Pro açık/kapalı. F ile başlayan kodlar ve FF, FE, HI, LO hata kodudur: [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/).

## Panel göstergeleri

BM 8402 GI Pro WIFI kılavuzundaki kontrol paneli çizimi şu göstergeleri sayıyor:

| No | Gösterge | Ne zaman yanar |
|---|---|---|
| 4 | Kalan Süre Göstergesi | Program süresini ve kalan süreyi gösterir |
| 8 | Parlatıcı Göstergesi | Parlatıcı seviyesi düşükken |
| 9 | Tuz Göstergesi | Makinede yeterince tuz yokken |
| 10 | Tablet Opsiyon Göstergesi | Tablet Deterjan opsiyonu seçiliyken |
| 11 | Ekstra Hijyen Opsiyon Göstergesi | Ekstra Hijyen seçiliyken |
| 12 | Yarım Yük Opsiyon Göstergeleri | Her iki, üst ya da alt sepet seçiliyken |
| 13 | Enerji Tasarrufu Opsiyon Göstergesi | Enerji Tasarrufu seçiliyken |
| 14 | Ekstra Hızlı Opsiyon Göstergesi | Ekstra Hızlı seçiliyken |
| 15 | Ekstra Sessiz Opsiyon Göstergesi | Ekstra Sessiz seçiliyken |
| 16 | Yıkama Adımı İlerleme Göstergeleri | Yıkama, Durulama, Kurutma, Bitiş sırasıyla |
| 17 | Wi-Fi Bağlantı Göstergesi | Ağ aranırken yanıp söner, kurulumda sürekli |
| 18 | Uzaktan Kontrol Göstergesi | Uzaktan kontrol açıkken sürekli |

## Adım adım: Vestel bulaşık makinesinde işaret görünce

**1. Tuz ve parlatıcı göstergesi.** Kılavuza göre makinede **yeterince tuz yoksa tuz eksik göstergesi yanar** ve tuz bölmesinin doldurulması gerekir. **Parlatıcı seviyesi düşük olduğunda** da parlatıcı eksik göstergesi yanar ve parlatıcı bölmesi doldurulur. İkisi de arıza değil, bakım hatırlatması. Bölmeleri doldurmanın genel mantığı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında.

**2. CL: çocuk kilidi.** Kılavuzdaki not: çocuk kilidini etkinleştirmek ya da devreden çıkarmak için **Onay tuşuna yaklaşık 3 saniye** bas. Kilit etkinleştirildiğinde **tüm LED ışıklar yanıp söner** ve Kalan Süre Göstergesinde **"CL"** görüntülenir. Tuşlar tepki vermiyorsa önce bunu kontrol et. Başka Vestel modellerinde kilit başka tuşla açılıyor; örnekler [Vestel bulaşık makinesi resetleme](/blog/vestel-bulasik-makinesi-resetleme/) yazısında.

**3. IL1 ve IL0: Güç Tasarrufu Modu.** Bu ayar Program ve Opsiyon tuşlarına aynı anda 3 saniye basılarak açılır; makine son ayarı **IL1** ya da **IL0** olarak gösterir. Kılavuza göre **IL1** modun etkin olduğunu gösterir: iç aydınlatma kapı açıldıktan **4 dakika** sonra söner, **15 dakika** hiçbir işlem yapılmazsa makine kapanır. **IL0**'da iç aydınlatma kapı açık kaldıkça yanar. Seçilen ayar makine kapatılınca kaydedilir. **Fabrika ayarında** Güç Tasarrufu Modu **etkindir.** Makinenin "kendiliğinden kapanması" bu yüzden olabilir.

**4. U1 ve U0: Gün Işığı Pro.** Kılavuza göre Gün Işığı Pro Teknolojisi ekstra hijyen sağlar ve program başlatılmadan önce **Opsiyon tuşuna 3 saniye** basılarak açılır ya da kapatılır. Açıldığında **"U1"**, kapatıldığında **"U0"** görüntülenir; makine varsayılan olarak U0'dadır. Program sonunda kapatmazsan işlev **makine kapatılana kadar** açık kalır.

**5. CF ve yanıp sönen Wi-Fi ışığı.** Kablosuz kurulum için **Erteleme ve Onay** tuşlarına aynı anda 3 saniye basılır. Kılavuza göre 3 saniye sonunda ekranda **"CF"** yazar ve Wi-Fi Bağlantı göstergesi yanıp sönmeye başlar; bu, makinenin Wi-Fi kurulumuna hazır olduğunu gösterir. Kurulum tamamlanınca gösterge **sürekli yanar.** Kurulumu Evin Aklı uygulamasındaki adımlarla bitir.

**6. Wi-Fi ve Uzaktan Kontrol birlikte yanıp sönüyor.** Kılavuza göre makine ile evdeki ağ arasındaki bağlantı koptuğunda, bağlantı yeniden kurulana kadar bu iki gösterge **yanıp söner;** ağ geri geldiğinde bağlantı otomatik kurulur. Makinenin enerjisi kesildiğinde ya da kapısı açıldığında uzaktan kontrol bağlantısı da kopar; kapı kapalıyken **Program tuşuna 2 saniye** basarak yeniden bağlanırsın.

**7. Hata kodu varsa.** Ekranda F ile başlayan bir kod ya da FF, FE, HI, LO gibi bir ibare görüyorsan bu bir durum işareti değil, otomatik arıza uyarısıdır. Anlamları ve Vestel'in çözüm sütunu [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/) sayfasında.

## Yıkama adımı sembolleri

Kılavuza göre ekranda çalışan programın durumuna göre **Yıkama, Durulama, Kurutma ve Bitiş** sembolleri sırasıyla görüntülenir. **Kurutma sembolü yanıyorken** makine seçtiğin programa göre **15 ile 100 dakika** arası sessiz kalır; bu bir arıza değildir. Program çalışırken kapağı açarsan program süresi duraklar ve Başlat/Beklet ışığı yanıp söner. Programı iptal ettiğinde **Bitiş ışığı yanıp söner** ve makine içindeki suyu yaklaşık 30 saniye boyunca tahliye eder.

## Ne zaman servis

- Tuz ya da parlatıcı bölmesi doluyken gösterge sönmüyorsa
- Çocuk kilidi kapalıyken tuşlar tepki vermiyorsa
- Ekranda bir hata kodu tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Tuz, parlatıcı, filtre ve panel ayarları sende; elektronik kart, pompa ve makinenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne?
2. Ekranda hangi yazı ya da gösterge var, sürekli mi yanıp sönerek mi?
3. Tuz ve parlatıcı bölmeleri dolu mu?
4. Sorun hangi program adımında başladı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bulaşıklar ıslak çıkıyorsa [Vestel bulaşık makinesi kurutmuyor](/blog/vestel-bulasik-makinesi-kurutmuyor/) yazısına bak. Bil, gör, çağır.
