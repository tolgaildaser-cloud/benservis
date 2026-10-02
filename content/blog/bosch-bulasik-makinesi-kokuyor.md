---
title: "Bosch bulaşık makinesi kokuyor"
description: "Bosch bulaşık makinesi kötü kokuyorsa Bosch kılavuzundaki sıra: süzgeç temizliği, kapı contası, Makine temizlik programı ve aralık bırakılan kapı."
slug: "bosch-bulasik-makinesi-kokuyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Bosch belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, ikisi de HTTP 200.
# #88: web araması YALNIZ N belgesinin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (N) SMS6EKI63T kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038173_A.pdf  52 s.  md5 0582a2049b417ff2449f79ea3574fc40  (yeni indirme; yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-2eki/) (sayfa atıfları esas olarak bu belgeye göre)
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7  (28 Eyl yerel kopyasıyla birebir; ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/)
# Bakım ipuçları tablosu (N s.37-38): "Kapı contalarını, bulaşık makinesinin ön kısmını ve kumanda panelini, nemli bir bez ve bulaşık deterjanı ile düzenli olarak siliniz. — Cihaz parçaları temiz ve hijyenik kalır."
#   · "Makine uzun süre kullanılmadığında cihaz kapısını yarı aralık bırakınız. — Böylece hoş olmayan kokular önlenir."
# N s.38 17.4 Makine temizlik progra.: "Tortular, cihazınızda arızalara neden olabilir, örn. yemek artıkları ve kireç nedeniyle. Arızaları önlemek ve koku oluşumunu azaltmak için, cihazı düzenli aralıklarla temizleyiniz."
#   · iki aşama (1: yağ ve kireç — sıvı makine temizlik maddesi ya da toz makine kireç sökücü, iç bölüme; 2: yemek artıkları ve tortular — makine deterjanı, deterjan bölmesine) · bulaşıksız · yalnız bulaşık makinesine özel maddeler · alüminyum parça yok
#   · hatırlatma yoksa 2 ayda bir · 3 yıkamadan sonra gösterge kendiliğinden söner · N s.39 uygulama: 1. iç bölüm kaba kirleri nemli bezle 2. süzgeçler 3. temizlik maddesi iç bölüme 4. deterjan bölmesine 5-6. program tuşları.
# N s.39-40 17.5 süzgeç sistemi (her durulamadan sonra kontrol; kaba süzgeci saat yönü tersine çevir, çıkar; pompa kabına cisim düşmesin; mikro süzgeci aşağı çek; tırnakları bastır, kaba süzgeci çıkar; musluk suyu altında temizle, kaba-ince süzgeç arasındaki kenarı titizlikle; birleştir; tak, saat yönünde çevir, oklar karşı karşıya).
# K s.32 (programında makine temizlik olmayan eski SM/SB): tortu birikirse "1. Bulaşık deterjanı haznesine … bulaşık deterjanı doldurunuz. 2. En yüksek sıcaklık derecesine sahip programı seçiniz. 3. Makine içinde bulaşık yokken programı başlatınız." · K s.33 kapak contaları + "Makine uzun süre kullanılmadığında kapağını yarı aralık bırakınız. Böylece içerisinde kötü koku oluşmaz."
# BİLEREK YAZILMAYANLAR: sirke/karbonat/limon (belgede yok) · gider/sifon/tahliye hortumu kokusu teşhisi (belgede yok) · pompa kapağı açma (alet ve kesilme riski; bu belirtide belge önermiyor) · püskürtme kolu sökümü (koku satırı değil)
#   · Makine temizlik programının tuş simgeleri (metin katmanında okunmuyor; "kılavuzundaki tuşlar" dendi) · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (program süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Nemli bez", "Bulaşık deterjanı", "Bulaşık makinesine özel makine temizlik maddesi"]
steps:
  - "Makinenin iç bölümündeki kaba kirleri nemli bir bezle al."
  - "Süzgeç sistemini çıkar, parçaları musluk suyunun altında temizle ve okları karşı karşıya gelecek şekilde geri tak."
  - "Kapı contalarını nemli bir bez ve biraz bulaşık deterjanıyla sil."
  - "Bulaşıksız makinede, bulaşık makinesine özel temizlik maddeleriyle Makine temizlik programını çalıştır."
  - "Makinende bu program yoksa deterjan haznesine deterjan koy ve en yüksek sıcaklıklı programı bulaşıksız çalıştır."
  - "Makineyi uzun süre kullanmayacaksan kapısını yarı aralık bırak."
faq:
  - q: "Bosch bulaşık makinesi neden kötü koku yapar?"
    a: "Bosch'un SMS6EKI63T kılavuzu kokuyu tortularla ilişkilendiriyor: yemek artıkları ve kireç gibi tortular cihazda arızalara neden olabiliyor; Bosch arızaları önlemek ve koku oluşumunu azaltmak için cihazın düzenli aralıklarla temizlenmesini istiyor. Bakım tablosu da makine uzun süre kullanılmadığında kapının yarı aralık bırakılmasını, böylece hoş olmayan kokuların önleneceğini yazıyor."
  - q: "Makine temizlik programını ne sıklıkla çalıştırmalıyım?"
    a: "Kumanda panelinde Makine temizlik programı göstergesi yanıyorsa ya da ekran bunu öneriyorsa makineye bulaşık koymadan programı çalıştır; program bitince gösterge söner. Bosch'a göre cihazında hatırlatma fonksiyonu yoksa makine temizliğini 2 ayda bir yapman öneriliyor. Programı 3 yıkama boyunca çalıştırmazsan gösterge kendiliğinden söner."
  - q: "Makine temizliğinde normal bulaşık deterjanı kullanabilir miyim?"
    a: "SMS6EKI63T kılavuzuna göre Makine temizlik programında yalnız bulaşık makinelerine özel makine temizlik maddeleri ve makine deterjanları kullanılmalı. Temizlik iki aşamada yapılıyor: yağ ve kireç için sıvı makine temizlik maddesi ya da toz makine kireç sökücü iç bölüme, yemek artıkları için makine deterjanı deterjan bölmesine konuyor. Eski SM/SB kılavuzunda ise bu programı olmayan makineler için deterjan haznesine bulaşık deterjanı koyup en yüksek sıcaklıklı programı bulaşıksız çalıştırma yolu var."
  - q: "Süzgeci ne sıklıkla kontrol etmeliyim?"
    a: "Bosch'a göre her durulama işleminden sonra süzgeçlerdeki artıklar kontrol edilmeli. Süzgeç sistemi kaba kirleri tutuyor; yıkama suyundaki kirlilikler süzgeçlerin tıkanmasına neden olabiliyor. Süzgeci çıkarırken pompa kabına yabancı cisim düşmemesine dikkat et."
images:
  coverAlt: "Kapısı yarı aralık bırakılmış boş bir bulaşık makinesi, alt sepeti dışarı çekilmiş ve tabanındaki süzgeç görünüyor"
---

Bulaşık makinesinin kapağını açtığında içeriden kötü bir koku geliyor, ya da temiz bulaşıklar bile hafif kokuyor. Bosch'un SMS6EKI63T kullanım kılavuzu bu kokunun kaynağını tortularda gösteriyor: **yemek artıkları ve kireç gibi tortular** arızalara neden olabiliyor, Bosch da **"Arızaları önlemek ve koku oluşumunu azaltmak için, cihazı düzenli aralıklarla temizleyiniz"** diyor. Bosch'un kılavuzunda kokuya karşı dört iş öne çıkıyor: süzgeç, kapı contası, Makine temizlik programı ve aralık bırakılan kapı. Bu yazıda Bosch'un sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** İç bölümdeki kaba kiri bezle al → süzgeci çıkar, musluk altında yıka, okları hizalayıp tak → kapı contasını nemli bez ve bulaşık deterjanıyla sil → Makine temizlik programını bulaşıksız ve özel temizlik maddesiyle çalıştır (programı olmayan eski modellerde en yüksek sıcaklıklı program) → makine boş kalacaksa kapıyı yarı aralık bırak.

## Adım adım: evde denenecekler

**1. İç bölümdeki kaba kirleri al.** Bosch'un Makine temizlik programından önceki ilk adımı: **iç bölümdeki kaba kirleri nemli bir bezle temizle.**

**2. Süzgeçleri temizle.** Bosch'un ikinci adımı süzgeçler. Kılavuzdaki sıra: **kaba süzgeci saat yönünün tersine çevir ve süzgeç sistemini çıkar;** bu sırada **pompa kabına yabancı cisim düşmemesine** dikkat et. **Mikro süzgeci aşağı çekerek** çıkar, **kilit tırnaklarını birbirine bastırıp kaba süzgeci yukarı** al. Parçaları **musluk suyunun altında** temizle; Bosch özellikle **kaba süzgeç ile ince süzgeç arasındaki kirli kenarın titizlikle** temizlenmesini istiyor. Sonra parçaları birleştir, sistemi yerine koy ve kaba süzgeci saat yönünde çevir; **ok işaretleri karşı karşıya** durmalı. Ayrıntılı genel anlatım [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**3. Kapı contalarını sil.** Bosch'un bakım tablosundaki ilk önlem: **kapı contalarını, makinenin ön kısmını ve kumanda panelini nemli bir bez ve bulaşık deterjanı ile düzenli olarak sil.** Bosch'a göre böylece **cihaz parçaları temiz ve hijyenik** kalıyor.

**4. Makine temizlik programını çalıştır.** Bosch'un kokuya yönelik asıl önerisi bu program. Kılavuza göre temizlik **iki aşamada** yapılıyor: önce **yağ ve kireç** için **sıvı makine temizlik maddesi ya da toz makine kireç sökücü** makinenin iç bölümüne (örneğin çatal kaşık sepetine asılan şişe), sonra **yemek artıkları ve tortular** için **makine deterjanı** deterjan bölmesine konuyor. Kurallar: programı **makineye bulaşık koymadan** çalıştır; yalnız **bulaşık makinelerine özel** temizlik maddeleri kullan; iç bölümde **alüminyum parça** (aspiratör yağ filtresi, alüminyum tencere gibi) olmasın. Programı başlatan tuşlar kılavuzunun Makine temizlik bölümünde yazıyor.

**5. Programı olmayan modellerde en yüksek sıcaklık.** Bosch'un eski SM/SB serisi kılavuzunda bu program her modelde yok. O kılavuzun yolu: tortu birikirse **bulaşık deterjanı haznesine deterjan doldur, en yüksek sıcaklık derecesine sahip programı seç ve makine içinde bulaşık yokken başlat.** Aynı kılavuzun uyarısı: **daima klorsuz temizleme maddeleri** kullan.

**6. Kapıyı yarı aralık bırak.** Bosch'un bakım tablosundaki ikinci önlem: **makine uzun süre kullanılmadığında cihaz kapısını yarı aralık bırak.** Bosch'a göre **böylece hoş olmayan kokular önlenir.**

## Ne sıklıkla

Kumanda panelinde **Makine temizlik programı göstergesi** yanıyorsa ya da ekran bunu öneriyorsa Bosch programı bulaşıksız çalıştırmanı istiyor; program bitince gösterge söner. Cihazında hatırlatma fonksiyonu yoksa Bosch'un önerisi makine temizliğini **2 ayda bir** yapmak. Süzgeçler için Bosch'un ölçüsü daha sık: **her durulama işleminden sonra** süzgeçlerdeki artıkları kontrol et.

Markadan bağımsız genel liste için [bulaşık makinesi kokuyor](/blog/bulasik-makinesi-kokuyor/) yazısına bak. Bulaşıklar temiz çıkmıyorsa [Bosch bulaşık makinesi temiz yıkamıyor](/blog/bosch-bulasik-makinesi-temiz-yikamiyor/), makine suyu atmıyorsa [Bosch bulaşık makinesi su boşaltmıyor](/blog/bosch-bulasik-makinesi-su-bosaltmiyor/) yazısıyla devam et.

## Ne zaman servis

Süzgeç temiz, conta silinmiş, Makine temizlik programı çalıştırılmış ve koku sürüyorsa Bosch'un kılavuzu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **cihazda onarımları yalnız bunun eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Süzgeç, conta ve temizlik programı kullanıcıya; pompa ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Koku kapak açılınca mı, bulaşıklarda mı?
2. Süzgeç en son ne zaman temizlendi?
3. Makine temizlik programı ya da en yüksek sıcaklıkta boş yıkama denendi mi?
4. Makinenin dibinde su kalıyor mu?
5. Ekranda bir kod ya da gösterge yanıyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
