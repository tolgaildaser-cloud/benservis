---
title: "ASUS laptop açılmıyor: ışığa ve ekrana göre adım adım"
description: "ASUS laptop açılmıyorsa önce güç ışığına bak. Işık yok, ışık var ekran yok, ışık yanıp sönüyor durumları için ASUS destek belgesindeki adımlar."
slug: "asus-laptop-acilmiyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P48 (YK #197 boşluk, BOSLUK.md #200). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: bilgisayar-acilmiyor-ekran-gelmiyor (masaüstü, bip/LED), laptop-sarj-olmuyor, laptop-isiniyor-fan-sesi — laptop açılmıyor için markalı ya da genel yazı yok.
# Kaynak (#88): ASUS Global Support FAQ 1014276 (açılmama/siyah ekran, güç göstergesi durumlarına göre) + FAQ 1050298 (EC reset, bellek eğitimi süresi). Satırdaki diğer markalar (Lenovo, HP, Dell, Casper, Monster, Acer) için erişilebilir üretici belgesi bulunamadı (Dell 403); tek markalı yazı olarak ASUS yazıldı. URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · pil/bellek/CMOS pili söküm ve değişimi (servis) · BIOS kurtarma USB yöntemi adımları (model uyumlu dosya gerekir, yazıda yalnız var olduğu söylenir) · mavi ekran hata kodları (ASUS ayrı makale) · otomatik onarım (ayrı yazı) · diğer markaların adımları.
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Güç düğmesine bas, güç ışığına ve ekrana bak; ışık yok, ışık var ekran yok ya da ışık yanıp sönüyor ayrımını yap."
  - "Işık hiç yanmıyorsa kablonun, adaptörün, uzatmanın ve prizin sıkı takılı olduğunu kontrol et."
  - "Orijinal adaptörü ve kabloyu kullan, farklı bir priz dene; adaptörde ya da kabloda hasar varsa servisten değiştir."
  - "Harici cihazları ve harici ekranları çıkar."
  - "Adaptörü çıkar, güç düğmesine uzun bas, adaptörü takıp yeniden aç."
  - "Işık yanıyor ama ekran siyahsa harici ekran dene ve ekran kısayollarını kullan."
  - "Son zamanlarda BIOS güncellemesi ya da donanım işlemi yapıldıysa ekranın gelmesi için bekle."
  - "Güç ya da pil ışığı yanıp sönüyorsa kapatmadan bekle; hiçbiri işe yaramazsa servise bırak."
faq:
  - q: "Laptop açılmıyor, ışık da yanmıyor. Sorun adaptörde mi?"
    a: "ASUS'a göre güç ışığının hiç yanmaması ya da adaptörün güç verememesinden ya da ana bileşendeki bir arızadan kaynaklanabilir. Bu yüzden önce kabloyu, adaptörü, uzatmayı ve prizi kontrol et, orijinal adaptör ve kabloyu kullan. Hasarlı adaptör ya da kabloyu yetkili serviste değiştirt."
  - q: "Ekran gelmiyor ama ışık yanıyor, laptop bozuldu mu?"
    a: "ASUS'a göre ışığın yanması anakartın güç aldığını gösterir. Sorun çevre birimi, ekran ayarı ya da yakın zamanda yapılan bir işlemin sonucu olabilir. Önce harici ekran dene, ekran kısayollarını kullan, bellek eğitimi için bekle."
  - q: "Ekranın gelmesi için ne kadar beklemeliyim?"
    a: "ASUS'un iki belgesi farklı süre veriyor: bir belge bellek eğitimini yaklaşık beş ila on dakika, ek bir belge ise bir ila üç dakika olarak yazıyor. Cihaz prize takılı kalsın, zorla kapatma. Pil ışığı yanıp sönüyorsa bekleme çok daha uzun sürebilir."
images:
  coverAlt: "Masada duran kapalı dizüstü bilgisayarın yanında prize takılı adaptör ve yanan küçük güç ışığı çizimi"
  steps:
    - "Dizüstü bilgisayarın güç düğmesine basan beyaz eldivenli sade siluet el"
    - "Prize takılı adaptörü kontrol eden beyaz eldivenli sade siluet el"
    - "Adaptör ucunu bilgisayara takan beyaz eldivenli sade siluet el"
    - "Bilgisayardan harici diski çıkaran beyaz eldivenli sade siluet el"
    - "Adaptör fişi çekilmiş bilgisayarın güç düğmesini basılı tutan beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarı harici ekrana bağlayan kablo ve klavyeye basan beyaz eldivenli sade siluet el"
    - "Prize takılı bilgisayar ve yanında bekleme göstergesi olarak sade kum saati"
    - "Bilgisayarın yanında yanıp sönen küçük ışık ve servis simgesi"
---

Güç düğmesine basıyorsun ama ekran siyah. Bazen ışık hiç yanmıyor, bazen ışık yanıyor ama ekran gelmiyor. "Laptop açılmıyor" diye arayanlar için bu iki durumu ayıran bir yazı hazırladık. Dayanak ASUS'un resmi destek belgesi; belge güç göstergesinin ve ekranın durumuna göre ayrı çözümler veriyor. Başka marka kullanıyorsan aynı mantığı izlemek mümkün ama adımları markanın kendi belgesinden doğrula; biz yalnız ASUS belgesinde yazanları aktarıyoruz.

> ⚠️ **Önce şu sınırı bil:** belgeler bataryayı, bellek modüllerini ya da CMOS pilini çıkarıp takmayı da anlatıyor. Bu yazı o işlemleri tarif etmiyor; laptop kasası açılacaksa bu servis işi. Ekranda mavi bir hata mesajı varsa ASUS'un mavi ekran makalesi geçerli, bu yazı onu kapsamıyor.

## Adım adım: laptop açılmıyor

**1. Işığa ve ekrana bak.** ASUS belgesi, cihaz açılmadığında güç göstergesinin ve ekranın durumuna göre çözüm seçmeni istiyor. Güç düğmesine bas ve üç durumdan hangisinde olduğunu not et: ışık hiç yok, ışık var ama ekran yok, ışık yanıp sönüyor. Güç ışığı modele göre farklı olabilir; ASUS tam bilgi için cihazının kullanım kılavuzuna bakmanı istiyor.

**2. Işık yoksa bağlantıları kontrol et.** ASUS'a göre ışığın hiç yanmaması adaptörün güç verememesinden ya da ana bileşendeki bir arızadan kaynaklanabilir. Önce güç kablosunun, adaptörün, uzatmanın ve prizin sıkı takılı olduğuna bak. Uzatma kullanıyorsan anahtarının açık olduğundan emin ol.

**3. Orijinal adaptörü kullan.** ASUS, cihazın orijinal özelliklerine uygun adaptör ve kablonun kullanılmasını istiyor. Güç konnektörünün gevşek olup olmadığına bak, farklı bir uzatma ve priz dene. Adaptörde ya da kabloda hasar görürsen belge yetkili serviste değiştirmeyi öneriyor.

**4. Harici cihazları çıkar.** Klavye, fare, harici disk, yazıcı, hafıza kartı, optik sürücüdeki disk ve kart okuyucudaki kartları çıkar. Harici ekranların hepsini de ayır. ASUS'a göre bunlardan biri cihazın açılmasını engelleyebilir.

**5. EC sıfırlamayı dene.** ASUS adaptörü ve kabloyu çıkarıp Embedded Controller sıfırlaması yapmanı, sonra adaptörü takıp güç düğmesine basmanı istiyor. ASUS'un ayrı belgesi bunun yolunu veriyor: güç düğmesine 40 saniye boyunca uzun bas.

**6. Işık var ekran yoksa harici ekran dene.** ASUS'a göre ışığın yanması anakartın güç aldığını gösterir. Harici ekran takıp Windows logo tuşu ile P'ye bas ve görüntü modunu değiştir. Ayrıca Microsoft'un Windows logo tuşu + Ctrl + Shift + B kısayolunu dene; belge bunun ekranla ilgili ayarları geri getirebildiğini yazıyor.

**7. Bekle: bellek eğitimi olabilir.** Yakın zamanda BIOS güncellemesi, pil bağlantısı ya da bellek değişimi, EC ya da RTC sıfırlama yapıldıysa cihaz sonraki açılışta uzun bir bellek eğitimi yapar ve bu sırada ekran boş kalır. Süreyi ASUS'un iki belgesi farklı yazıyor: biri beş ila on dakika, diğeri bir ila üç dakika. Cihazı prize tak, zorla kapatma ve sabırla bekle.

**8. Işık yanıp sönüyorsa sakin ol.** ASUS'a göre güç ya da pil şarj ışığı yanıp sönüyorsa BIOS kurtarma hazırlanıyor ve ekran siyah kalır. Kurtarma penceresinin gelmesi beş ila sekiz dakika sürer, kurtarmanın kendisi ise yaklaşık iki buçuk ila üç buçuk saat. Bu sürede cihazı güçten ayırma, zorla kapatma. Hiçbir adım işe yaramadıysa servise bırak.

## Hangi durumda hangi adım?

Işık hiç yanmıyorsa ikinci adımdan beşinciye kadar olan güç tarafına odaklan; ASUS bu durumda adaptörü, kabloyu ve prizi ilk şüpheli sayıyor. Işık yanıyor ama ekran gelmiyorsa dördüncü, beşinci, altıncı ve yedinci adım sıraya girer. Işık yanıp sönüyorsa yalnız sekizinci adım geçerli; orada yapılacak tek şey beklemek. Belge bellek eğitimini tetikleyen işlemleri de tek tek sayıyor: BIOS güncellemesi, pil bağlantısını kesmek ya da pili değiştirmek (CMOS pili dahil), farklı kapasitede ya da markada bellek takmak ve EC ya da RTC sıfırlaması. Bunlardan birini yaptıysan ekranın gelmemesi arıza olmayabilir.

## Başka belirtiler

Siyah ekranda beyaz yazı çıkıyorsa ASUS iki ayrım yapıyor. Ekranda "S.M.A.R.T Status Bad" varsa ayrı bir makaleye bakmanı istiyor. Hata mesajı F1'e basıp kuruluma girmeni söylüyorsa BIOS açılışta bir donanım yapılandırma sorunu bulmuş demek; ekrandaki yazı hangi ayarın bozuk olduğunu gösteriyor. Windows karşılama ekranı geliyor ama masaüstünde ekran kararıyorsa belge ekran kartı sürücüsünden şüphelenip Güvenli Mod'a girmeni öneriyor. ASUS, daha önce BIOS güncellemesi yarım kalmışsa USB bellekle BIOS kurtarma yöntemini de anlatıyor. Bunun için modeline uygun doğru dosyayı bulman gerekiyor; emin değilsen servise bırak.

## Servis çağırmadan önce üç not

1. Güç ışığının tam olarak ne yaptığını yaz: yanmıyor, sabit mi, yanıp sönüyor mu?
2. Sorundan hemen önce BIOS güncellemesi, pil ya da bellek işlemi yapılıp yapılmadığını hatırla.
3. Harici ekranda görüntü olup olmadığını not et.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
