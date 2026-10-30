---
title: "Profilo bulaşık makinesi sembolleri ve anlamları"
description: "Profilo bulaşık makinesi göstergesindeki beş sembol, ekran yazıları ve E: kodları. Tuz, parlatıcı, makine bakımı, Wi-Fi ve musluk ne anlatır?"
slug: "profilo-bulasik-makinesi-sembolleri-ve-anlamlari"
date: "2026-10-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ yazı alt ajanı (YK #189, sembol türü, 30 Eki). Konu: SEMBOL-ENVANTERI.md satır 6 (Profilo bulaşık, YAZILABİLİR, OT 3/3).
#   origin/main (b930c112) içinde profilo-bulasik-makinesi-sembolleri* yok; başlık grep'inde Profilo + sembol/simge/işaret başlıklı bulaşık yazısı yok.
# Otomatik tamamlama (bu koşuda, hl=tr gl=tr, HTTP 200): tohum "profilo bulaşık makinesi sembolleri" → 1. "…sembolleri ve anlamları".
# GSC www-9 (7 gün): sembol sorgusu yok; daha eski bir dışa aktarımda "profilo bulaşık makinesi sembolleri ve anlamları" 1 gösterim, poz. 35.
# Belge bu koşuda indirildi (curl, HTTP 200), media3.bsh-group.com; kapakta PROFILO ibaresi (YK #88 SEG: üretici alan adı + kapak ibaresi).
#  (A) Profilo BMS623V5 bulaşık makinesi kullanım kılavuzu  9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# Simge şekilleri sayfa görüntüsünden okundu (s.14, s.17 PNG'leri _kaynak/ altında, md5 KAYNAK.md'de).
# BİLEREK YAZILMAYANLAR: giriş hortumu süzgecini sökme · atık su pompası temizliği · simgelerin Bosch/Siemens'le aynı olduğu iddiası · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi tuzu", "Parlatıcı"]
steps:
  - "Tuz sembolü yanıyorsa programı başlatmadan hemen önce kabı yalnız bulaşık makinesi tuzuyla doldur."
  - "Parlatıcı sembolü yanıyorsa kabı max işaretine kadar doldur, taşanı sil."
  - "Cihaz bakımı sembolü yanıyorsa makine boşken Makine Temizlik programını çalıştır."
  - "Musluk sembolü sabit yanıyorsa musluğun tam açık olduğunu ve giriş hortumunun bükülmediğini kontrol et."
  - "Musluk sembolü yanıp sönüyorsa cihazı kapat, fişini çek, en az 2 dakika bekleyip yeniden çalıştır."
  - "Tüm LED'ler kendiliğinden yanıp sönüyorsa yaklaşık 30 dakika bekle; hazır olmazsa ana şaltere 4 saniye bas."
  - "E:30, E:31 ya da E:34 görürsen musluğu kapat ve müşteri hizmetlerini ara."
faq:
  - q: "Profilo bulaşık makinesinde iki oklu sembol ne demek?"
    a: "Birbirine ters yönde iki ok, özel tuz ilave etme göstergesidir. BMS623V5 kılavuzuna göre bu gösterge yandığında programı başlatmadan hemen önce özel tuz kabına bulaşık makinesi tuzu doldurulur. Tuz tableti ve sofra tuzu kullanılmaz; kılavuz, sensörün tuz tabletlerini algılamadığını yazar."
  - q: "Yıldız gibi duran sembol neyi gösterir?"
    a: "Işınlı yıldız simgesi parlatıcı ilave etme göstergesidir. Yandığında parlatıcı kabı max işaretine kadar doldurulur. Parlatıcılı kombine deterjan kullanıyorsan gösterge temel ayarlardan kapatılabilir; r00 kademesi parlatıcı sistemini kapatır."
  - q: "Musluk sembolü yanıp sönüyor, ne yapmalıyım?"
    a: "Kılavuz musluk sembolünün su girişinde ya da çıkışında arıza olduğunda yandığını veya yanıp söndüğünü yazar. Su beslemesinin kontrolü göstergesi yanıp sönüyorsa teknik arıza vardır: cihazı kapat, fişi çek, en az 2 dakika bekle, yeniden çalıştır. Sorun dönerse musluğu kapatıp müşteri hizmetlerine hata kodunu bildir."
  - q: "Ekranda 0h:00m ya da h:01 ne anlama gelir?"
    a: "0h:00m programın bittiğini gösterir. h:01 ise zaman ön seçimidir; program başlangıcı 24 saate kadar ertelenebilir. Programı iptal ettiğinde yaklaşık 1 dakika tüm LED'ler yanar, ardından ekranda 0h:01m görünür ve kalan su boşaltılır."
  - q: "Semboller bütün Profilo bulaşık makinelerinde aynı mı?"
    a: "Değil. BMS623V5 kılavuzu sembol tablosunun başına bile cihazın donanımına göre değiştiğini yazıyor. Wi-Fi ya da otomatik kapı açılması gibi özellikler her modelde olmayabilir. Kesin karşılık kendi modelinin kullanım kılavuzundadır."
images:
  coverAlt: "Bulaşık makinesinin kumanda paneli ve göstergesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda tuz haznesinin vidalı kapağı"
    - "Çizim: solda bulaşık makinesi, sağda parlatıcı haznesi"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
---

Profilo bulaşık makinesinin göstergesinde bir sembol yanınca akla ilk gelen "arıza mı?" sorusu oluyor. Profilo'nun kılavuzuna bakınca tablo daha sakin: göstergedeki beş sembolün dördü **tuz, parlatıcı, bakım ya da bağlantı** bildiriyor. Gerçek arıza işareti tek bir sembol ve `E:` ile başlayan kodlar.

Bu yazıda sembolleri Profilo'nun **BMS623V5** bulaşık makinesi Türkçe kullanım kılavuzundaki adlarıyla açıklıyoruz.

Olası arızayı benservis.com'daki ücretsiz teşhisten de öğrenebilirsin.

> ⚠️ **Kılavuz sembol tablosunun başına "cihazın donanımına göre değişir" notunu düşüyor.** Senin modelinde bu beş sembolden biri olmayabilir ya da başka bir gösterge bulunabilir.

## Göstergedeki beş sembol

| Sembol | Kılavuzdaki anlamı |
|---|---|
| Bulaşık makinesi gövdesi ve yıldız | Cihaz bakımı: **Makine Temizlik** programını çalıştır |
| Işınlı yıldız | **Parlatıcı** ilave et |
| Ters yönde iki ok | **Özel tuz** ilave et |
| Wi-Fi dalgaları | Cihaz **ev ağına bağlı** |
| Musluk | **Su girişinde ya da çıkışında arıza** |

### Tuz: iki ok

Gösterge yandığında kılavuz tuzu **programı başlatmadan hemen önce** doldurmanı istiyor; böylece taşan tuz yıkama sırasında temizleniyor. Kaba yalnız bulaşık makinesi tuzu konur. Kılavuz iki şeyi açıkça yasaklıyor: **tuz tableti** ve **sofra tuzu**. Sorun giderme tablosunda tuz göstergesinin sönmemesi için verilen ikinci sebep de bu: sensör, özel tuz tabletlerini algılamıyor.

Tuzlu kombine deterjan kullanıyorsan gösterge seni rahatsız edebilir. Kılavuz sistemi yalnız su sertliği en fazla 21 °dH ise ve tuz katkılı kombine deterjan kullanılıyorsa kapatmana izin veriyor. Temel ayarlardaki **H00** kademesi sistemi kapatıyor; fabrika değeri **H04**.

### Parlatıcı: ışınlı yıldız

Yandığında parlatıcı kabı **max işaretine** kadar doldurulur, taşan parlatıcı silinir. Bardaklarda ve çatal bıçakta silinebilen iz kalıyorsa tablo iki ihtimal veriyor: parlatıcı doldurulmamış ya da miktar çok yüksek ayarlanmış. Miktar temel ayarlarda **r00–r06** arasında; **r00** parlatıcı sistemini kapatıyor.

### Cihaz bakımı: makine ve yıldız

Bu sembol bir arıza değil, temizlik hatırlatması. Kılavuz, gösterge yandığında makineye bulaşık koymadan **Makine Temizlik** programının çalıştırılmasını istiyor. Program iki aşamalı: önce makine temizlik maddesiyle yağ ve kireç, ardından makine deterjanıyla yemek artıkları. Temizlik bitince gösterge sönüyor. Hatırlatma işlevi olmayan cihazlar için öneri **2 ayda bir**.

### Wi-Fi

Cihaz kablosuz ev ağına bağlandığında yanar; Home Connect uygulaması için gerekli. Temel ayarlarda **Cn0** kablosuz bağlantıyı kapatıyor.

### Musluk: asıl uyarı

Musluk sembolü su girişinde ya da çıkışında bir arıza olduğunda **yanar veya yanıp söner**. Kılavuzun sorun giderme tablosu iki durumu ayırıyor:

- **Su girişi göstergesi yanıyor** (ya da `E:32-00` değişimli): giriş hortumu bükülmüş, musluk kapalı ya da sıkışmış veya kireçlenmiş. Musluk açıkken akan su en az **10 l/dk** olmalı.
- **"Su beslemesinin kontrolü" göstergesi yanıp sönüyor:** teknik arıza. Kılavuz yeniden başlatmayı, sorun dönerse musluğu kapatıp müşteri hizmetlerine hata kodunu bildirmeyi yazıyor.

## Ek fonksiyon sembolleri

Kumanda panelinde seçtiğin ek işlevlerin de simgesi var. Seçince tuşu yanıp söner:

- Termometreli simge: **Hijyen Ekstra**, sıcaklık artırılıp daha uzun tutulur
- Kronometreli simge: **Turbo Plus+**, süre programa göre %15–75 kısalır
- Buharlı kap: **Sıcak Ön Yıkama**

## Ekran yazıları

- **0h:00m:** program sona erdi
- **h:01:** zaman ön seçimi; başlangıç 24 saate kadar ertelenebilir
- **0h:01m:** program iptal edildi, kalan su boşaltılıyor. İptalden sonra yaklaşık 1 dakika **tüm LED'lerin yanması** normal.
- **APP:** uygulamadan indirilen program seçili
- **EnG:** Smart Start; ekranda en uygun başlatma zamanı görünür
- **Hxx, rxx, dxx, bxx, oxx:** temel ayar menüsü (su sertliği, parlatıcı, yoğun kurutma, sinyal sesi, otomatik kapı açılması)

Göstergenin hiç tepki vermemesi de arıza olmayabilir: 10 dakika kullanılmayan cihaz kendiliğinden kapanıyor.

## E: ile başlayan kodlar

Kodlar ekranda `-00` gibi bir ekle **değişimli** yanıyor. Kılavuzdaki liste: `E:30-00` ve `E:31-00` su koruma sistemi etkin; `E:34-00` cihaza sürekli su akıyor (üçünde de musluğu kapat, müşteri hizmetlerini ara); `E:61-02` ve `E:61-03` tahliye; `E:92-40` süzgeçler kirlenmiş. Tahliye tarafı için [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) yazısına bakabilirsin.

## Adım adım: sembol yandığında yapılacaklar

**1.** Tuz sembolü yanıyorsa programı başlatmadan hemen önce kabı yalnız bulaşık makinesi tuzuyla doldur.

**2.** Parlatıcı sembolü yanıyorsa kabı max işaretine kadar doldur, taşanı sil.

**3.** Cihaz bakımı sembolü yanıyorsa makine boşken Makine Temizlik programını çalıştır.

**4.** Musluk sembolü sabit yanıyorsa musluğun tam açık olduğunu ve giriş hortumunun bükülmediğini kontrol et.

**5.** Musluk sembolü yanıp sönüyorsa cihazı kapat, fişini çek, en az 2 dakika bekleyip yeniden çalıştır.

**6.** Tüm LED'ler kendiliğinden yanıp sönüyorsa yaklaşık 30 dakika bekle; kılavuz bunun yazılım güncellemesi olabileceğini söylüyor. Hazır olmazsa ana şalter tuşuna yaklaşık 4 saniye bas.

**7.** `E:30`, `E:31` ya da `E:34` görürsen musluğu kapat ve müşteri hizmetlerini ara.

## Ne zaman servis işi

Tuz, parlatıcı, bakım ve Wi-Fi sembolleri bilgilendirme; çözümleri senin elinde. Musluk sembolü yeniden başlatmaya rağmen yanıp sönmeyi sürdürüyorsa ya da su koruma kodu çıkıyorsa iş değişir. Kılavuz usulüne uygun olmayan onarımların tehlikeli olduğunu ve onarımı yalnız eğitimli uzman personelin yapabileceğini yazıyor: kasa açmak, parça sökmek **servis işi**.

Sembol tablosu modelden modele değişiyor. Buradaki liste yön gösterir; kesin karşılık kendi modelinin kılavuzundadır.

Belirtiyi yaz, olası arızayı ücretsiz öğren. Önce öğren, sonra çağır.

İlgili: [Profilo çamaşır makinesi sembolleri ve anlamları](/blog/profilo-camasir-makinesi-sembolleri-ve-anlamlari/) · [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/) · [Siemens bulaşık makinesi sembolleri ve anlamları](/blog/siemens-bulasik-makinesi-sembolleri-ve-anlamlari/) · [Profilo bulaşık makinesi resetleme](/blog/profilo-bulasik-makinesi-resetleme/)
