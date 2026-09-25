---
title: "Samsung bulaşık makinesi 4C hatası: su alamıyor — adım adım çözüm"
description: "Samsung bulaşık makinesinde 4C (4E) su tedariki sorunu demek. Kılavuzdaki musluk, şebeke, giriş hortumu ve donma kontrolleri ile servis sınırı."
slug: "samsung-bulasik-makinesi-4c-hatasi"
date: "2026-08-21"
category: "Bulaşık makinesi"
# 📌 22 Ağu 2026 (TARAMA-1): "eski modellerde 4E" ifadesi düzeltildi. Samsung 4C ile
# 4E arasında eski/yeni ayrımı KURMUYOR; kendi ifadesi "modeline bağlı olarak hata
# NF veya 1 4C olarak da görünebilir" — yani model varyantı. Kod eşleşmesi doğruydu,
# uydurma olan kronoloji atfıydı. (Aynı düzeltme çamaşır yazısında da yapıldı.)
# 📌 25 Eyl 2026 (PAZ, #88 düzeltmesi): sayfa #88 öncesi yazılmıştı. Kaynaklar artık YALNIZ Samsung'un kendi belgeleri:
#   (1) Samsung TR "Bulaşık Makinesi Hakkında SSS" (faq-dishwasher, 200, md5 cbeee153…): "4C/4E: Su tedariki sorunları"
#   (2) Kılavuz DW5500MM, DD81-02615C-11 TR 2024 (md5 2ad54a56…): s.56 bilgi kodları tablosu 4C "Su besleme kontrolü" satırı + NOT ·
#       s.38 "Temizlikten veya bakım gerçekleştirmeden önce, fişi prizden mutlaka çıkarın" · kontrol paneli "Sıfırla: BAŞLAT 3 sn" ·
#       güvenlik bölümü "su besleme hattı 0,04 ve 1 MPa" · "Su kaynağının uygun basınçta açıldığını kontrol edin" ·
#       kurulum s.43-44: giriş hortumu bükülmesin/sıkışmasın, uzatılmaz/kısaltılmaz, su emniyeti sistemi, yeni boru → suyu akıt
# KALDIRILANLAR (Samsung belgesinde yok): giriş hortumu SÜZGECİ (iki kılavuzda da geçmiyor) + hortumu sökme adımları ·
#   "beklenen sürede/miktarda" mekanizması · "akış ölçer yanlış sayıyor / kart valfi sürmüyor" teşhisi · basınç
#   dalgalanması senaryoları · "kireçli bölgede yılda bir-iki kez" · "en sık / en çok işe yarayan" sayım iddiaları ·
#   FAQ'taki "yeni makinede 4C, eskide 4E" kronolojisi (gövdede 22 Ağu'da düzeltilmiş, FAQ'a işlenmemişti).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["El feneri"]
steps:
  - "Programı iptal etmek için BAŞLAT düğmesini üç saniye basılı tut."
  - "Makineyi kapat ve fişini prizden çıkar."
  - "Makineyi besleyen su vanasının (ara musluğun) tam açık olduğunu kontrol et."
  - "Mutfakta başka bir musluğu açıp evde su olup olmadığına bak."
  - "Su giriş hortumunu musluktan makineye kadar izle; bükülme ya da sıkışma varsa düzelt."
  - "Soğuk havada hortumun ya da hattın donmuş olabileceğini değerlendir."
  - "Fişi tak ve programı yeniden başlat; kod sürerse Samsung servisine başvur."
faq:
  - q: "Samsung bulaşık makinesinde 4C hatası ne demek?"
    a: "Samsung, 4C'yi (bazı modellerde 4E) su tedariki sorunu olarak tanımlıyor: makine ihtiyaç duyduğu suyu alamıyor. Kılavuz bu kodda su besleme vanasının kapalı olup olmadığına, suyun kesilip kesilmediğine ve su giriş vanası ya da hattının donup donmadığına veya yabancı maddeyle tıkanıp tıkanmadığına bakılmasını söylüyor."
  - q: "4C ile 4E arasında fark var mı?"
    a: "Samsung'un Türkiye destek sayfasındaki kod listesinde iki kod birlikte, 4C/4E olarak ve aynı anlamla geçiyor. Samsung bunu eski ve yeni makine ayrımı olarak değil, modele göre değişen gösterim olarak veriyor. Ekranda gördüğün kodu kendi modelinin kılavuzuyla teyit etmek yine en sağlamıdır."
  - q: "Musluk açık ve evde su var, 4C neden geçmiyor?"
    a: "Su giriş hortumunun dolap arkasında bükülmüş ya da sıkışmış olmadığına bak; Samsung kılavuzu hortumun bükülmemesini ve sıkışmamasını şart koşuyor. Soğuk havada hattın donmuş olma ihtimali de kılavuzda sayılıyor. Bunlar düzgünse kod makinenin içindeki su giriş tarafını gösterir ve kılavuzun önerisi yetkili Samsung servisine başvurmaktır."
  - q: "Makinede su güvenlik sistemi varsa 4C'yi o mu tetikler?"
    a: "Samsung kılavuzuna göre su besleme hortumunda bir su emniyeti sistemi bulunur (bazı modeller hariç): giriş hortumunda sızıntı olursa emniyet vanası akan suyu keser. Hortum ya da emniyet vanası hasar görmüşse değiştirilmesi gerekir. Zeminde ıslaklık görüyorsan musluğu kapat, fişi çek ve servisle görüş."
images:
  coverAlt: "Bulaşık makinesi çizimi, panelinde yanıp sönen hata göstergesi ve yanında kod listesi"
---

Makineyi doldurdun, programı seçtin ve başlattın; ama içeriden su sesi gelmedi ve panelde **4C** belirdi. Bazı modellerde aynı durum **4E** olarak görünür (Samsung bunu model varyantı olarak veriyor, eski/yeni ayrımı olarak değil). Samsung bu kodu **su tedariki sorunu** olarak tanımlıyor: makine ihtiyaç duyduğu suyu alamıyor.

Kılavuzun bu kod için saydığı kontrollerin çoğu makinenin dışındadır: su vanası, şebeke, giriş hortumu ve soğuk havada donma.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 4C / 4E = su tedariki sorunu. Sıra şu: programı iptal et → fişi çek → ara musluk tam açık mı → evde su var mı → giriş hortumunda bükülme ya da sıkışma var mı → soğuk havada donma ihtimali → yeniden dene. Kod sürerse servis.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Samsung kılavuzuna göre çalışan bir programı iptal etmek için **BAŞLAT** düğmesini **üç saniye** basılı tutarsın.

**2. Fişi çek.** Kılavuz açık: kontrol ya da bakım yapmadan önce **fişi prizden çıkar.**

**3. Su vanasını kontrol et.** Makineyi besleyen ara musluk (su besleme vanası) **tam açık** mı? Samsung'un 4C için saydığı ilk kontrol budur.

**4. Şebekeyi doğrula.** Mutfakta başka bir musluğu aç. Su gelmiyorsa sorun makinede değil şebekededir; kesinti bitince yeniden dene. Kılavuz, makinenin çalışması için su kaynağının **uygun basınçta** açık olmasını istiyor (su besleme hattı **0,04–1 MPa** arasını desteklemeli).

**5. Giriş hortumunu izle.** Su giriş hortumunu musluktan makineye kadar gözünle takip et. Kılavuz hortumun **bükülmemesini ve sıkışmamasını** şart koşuyor: dolap arkasındaki keskin bir kıvrım ya da bir mobilyanın altında ezilme suyu keser.

**6. Soğuk havayı hesaba kat.** Samsung, 4C için su giriş vanasının ya da hattının **donmuş olabileceğini** de sayıyor. Makine soğuk bir yerde duruyorsa bu ihtimali göz önünde tut; ortam ısınmadan makineyi zorlama.

**7. Yeniden dene.** Fişi tak, programı başlat. Su alma sesi geliyor ve program ilerliyorsa sorun giderilmiştir.

⚠️ Hortumu uzatmaya ya da kısaltmaya çalışma: Samsung kılavuzu giriş hortumunun **uzatılmamasını veya kısaltılmamasını** söylüyor.

## Kılavuz 4C için ne diyor?

Samsung'un DW5500MM serisi kullanım kılavuzundaki bilgi kodu tablosunda 4C satırı şöyle özetlenebilir: **su besleme kontrolü.** Su besleme vanasının kapalı olup olmadığı, suyun kesilip kesilmediği, su giriş vanasının ya da hattının donup donmadığı veya yabancı maddeyle tıkanıp tıkanmadığı kontrol edilir; sorun devam ederse **Samsung servis merkezine** başvurulur.

Bu listede senin evden bakabileceklerin vana, şebeke, hortum ve donmadır. Makinenin içindeki **su giriş vanası** ise kullanıcı bakımına dahil değildir.

Samsung bulaşık makinesi hata kodları yazımızda 4C dışındaki kodların — tahliye, sızıntı ve ısıtma tarafının — Samsung'un kendi listesindeki karşılıkları anlatılıyor.

## Su emniyeti sistemi ve yeni tesisat

Samsung'un su besleme hortumlarında (kılavuzun istisna tuttuğu model dışında) bir **su emniyeti sistemi** bulunur: giriş hortumunda bir sızıntı olursa emniyet vanası akan suyu keser. Hortum ya da emniyet vanası hasar görmüşse kılavuz **değiştirilmesini** söylüyor. Zeminde ıslaklık ya da makinenin altında birikinti görüyorsan musluğu kapat, fişi çek ve servisle görüş.

Tesisat **yeniyse** ya da borular uzun süre kullanılmadıysa kılavuzun bir uyarısı daha var: makineyi bağlamadan önce suyun temiz aktığından emin olmak için suyu bir süre akıtmak gerekir; aksi hâlde **su girişi tıkanabilir** ve cihaz hasar görebilir. Tadilattan sonra 4C görüyorsan bunu kurulumu yapan kişiyle konuş.

## Sınır nerede biter

Vana açık, şebekede su var, hortum düz ve donma ihtimali yok; ama 4C tekrarlıyorsa evde yapılacak iş bitmiştir. Samsung'un kılavuzu, herhangi bir bilgi kodu ekranda görünmeye devam ederse **yetkili bir Samsung servis merkezine** başvurulmasını söylüyor.

⛔ **Kendin-çöz sınırı burada biter.** Makinenin gövdesinin içi hem elektrik hem su barındırır; su giriş vanasına ve iç parçalara kullanıcı müdahalesi ne güvenlidir ne de gereklidir. Doğru hamle fişi çekip musluğu kapatmak ve yaptığın kontrolleri servise aktarmaktır.

## Servisi aramadan önce iki dakikalık özet

1. Ara musluk tam açık mı, evde su var mı?
2. Giriş hortumu düz mü, bükülme ya da sıkışma var mı?
3. Soğuk hava ya da yeni tesisat gibi bir durum var mı?
4. Fişten çekip yeniden denendi mi?

Bu dört cevabı ve ekrandaki kodu (4C ya da 4E) servise söylemek, arızanın makinenin içinde mi dışında mı olduğunu baştan ayırır.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
