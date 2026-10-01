---
title: "Beko bulaşık makinesi leke bırakıyor"
description: "Beko bulaşık makinesi bardaklarda kireç izi, pus ya da pas bırakıyorsa kılavuzdaki sıra: parlatıcı, tuz, su sertlik ayarı ve program."
slug: "beko-bulasik-makinesi-leke-birakiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Beko belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28/30 Eyl yerel kopyalarıyla birebir. #88: web araması bu belgeler için kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (A) BM 5005  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4  (sayfa atıfları bu belgeye göre)
#  (B) BM 4004  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b  (s.30-33 sorun giderme A ile diff'te birebir)
# Sorun giderme:
#   A s.30-31 "Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor"
#     "• Parlatıcı yetersizdir. >>> Parlatıcı eksikliği uyarı göstergesini kontrol ederek gerekirse parlatıcı ilave edin. Makinede yeterince parlatıcı varsa parlatıcı ayarını yükseltin."
#     "• Su sertlik ayarı düşüktür veya tuz seviyesi yetersizdir. >>> Şebeke suyunun sertliğini doğru şekilde ölçerek su sertlik ayarını kontrol edin."
#     "• Tuz kaçağı vardır. >>> Tuz doldururken dolum ağzının etrafına dökmemeye özen gösterin. Tuz doldurduktan sonra tuz haznesi kapağının kapandığından emin olun. Ön yıkama programını çalıştırarak
#        makine içine dökülen tuzları temizleyin. Kapak altında kalan tuz taneleri ön yıkama adımında çözüneceği ve bu nedenle kapak gevşeyebileceği için, program sonunda kapağı bir kez daha kontrol edin."
#   A s.33 "Cam bardaklarda, elle silindiğinde çıkmayan puslu, süt bulaşığı görünümünde bir leke kalıyor. Işığa tutulduğunda mavimsi / gökkuşağı renkli bir görünüm ortaya çıkıyor."
#     "• Fazla parlatıcı kullanılmıştır. >>> Parlatıcı ayarını düşürün. Parlatıcı doldururken etrafa taşan parlatıcıyı mutlaka temizleyin."
#     "• Yumuşak su nedeniyle camda korozyon meydana gelmiştir. >>> Şebeke suyunun sertliğini doğru şekilde ölçerek su sertlik ayarını kontrol edin. Şebeke suyunuz yumuşaksa (<5 dH) tuz kullanmayın.
#        Daha yüksek sıcaklıkta yıkama yapan programlar kullanın (60-65 derece gibi). Ayrıca piyasada bulunan cam koruyuculu deterjanları da kullanabilirsiniz."
#   A s.31-32 "Bulaşıklarda pas lekesi, kararma, yüzey bozulması": tuz kaçağı · tuzlu yiyecek artıkları (ön yıkama ya da bekletmeden yıka) · topraklama hattı yok ("Makinenizin gerçek toprak hattına bağlı olup olmadığını kontrol edin.")
#     · çamaşır suyu ("Bulaşıklarınızı çamaşır suyuyla yıkamayın.") · bıçakların amacı dışında kullanımı · düşük kaliteli paslanmaz çelik · önceden paslanmış eşyalar ("bulaşık makinelerinde yıkanmamalıdır")
#   A s.30 "Bulaşıklarda çay, kahve veya ruj lekesi kalıyor." → yayındaki beko-bulasik-makinesi-temiz-yikamiyor anlatıyor; burada yalnız iç link.
# Ön hazırlık: A s.11 "Su yumuşatma sisteminin ayarını makinenizle birlikte verilen "Su sertlik ayar talimatına göre yapın"" · "Makinede sadece bulaşık makinesinde kullanılmak amacıyla üretilmiş özel yumuşatma tuzu kullanın."
#   · A s.11 tuz: "1.Yumuşatma tuzunu koymak için önce alt sepeti çıkarın. 2.Tuz bölmesinin kapağını saat yönünün tersine çevirerek açın" · s.12 "5.Bölme dolduktan sonra kapağı yerine takıp çevirerek kapatın."
#     · s.12 "Tuz ilave etme işlemi makineyi çalıştırmadan hemen önce yapılmalıdır." · s.12 tuz çözünmesi birkaç saat; Tuz Eksikliği göstergesi bir süre yanmaya devam eder.
#     · s.11 "Tuzun su içinde erimesini hızlandırmak için kaşık yardımıyla karıştırın." (ALET → yazılmadı)
#   · A s.14 parlatıcı: "...yıkanan parçaların üzerinde su ya da kireç izlerinin kalmasını önlemek amaçlı özel bir bileşimdir." · "1. Parlatıcı bölmesinin kapağını mandalına basarak açın" · "2. Bölmeyi MAX seviyesine kadar doldurun."
#     "3. Bölmenin kapağını hafifçe bastırarak kapayın." · "4. Parlatıcı miktarı ayarlayıcısını elle çevirerek 1 ile 6 arasındaki konumlara ayarlayın. Yıkama sonrasında yemek takımları üzerinde su izi oluşuyorsa
#     ayarlayıcının derecesini artırmak, elle silindiğinde çıkan mavi bir iz kalıyorsa azaltmak gerekir. Bu ayar fabrika çıkışında 4 konumuna getirilmiştir."
#   · A s.14 "Tablet deterjan kullanırken, yıkama programı sona erdiğinde bulaşıklarınız ıslaksa ve / veya özellikle bardaklarınız üzerinde kireç lekesi görürseniz deterjan üreticisiyle bağlantıya geçin."
#   · A s.33 köpük satırı: "Etrafa dökülen parlatıcıyı kağıt peçete / havlu yardımıyla temizleyin." · A s.4 "Kurulum ve tamir işlemlerini her zaman Yetkili Servise yaptırın."
# FİŞ KURALI İSTİSNASI: adımlar ayar/doldurma ve program seçimi; söküm/temizlik yok (arcelik-buzdolabi-sogutmuyor emsali).
# YAKIN KOPYA: yayında Arçelik/Grundig/Altus "leke bırakıyor" sayfası YOK (origin/main f6bc46b ls-tree). Beko'nun kendi temiz-yikamiyor sayfası "temiz yıkanmıyor" satırını anlatıyor; bu sayfa farklı satırlar (kireç izi/pus/cam korozyonu/pas).
# BİLEREK YAZILMAYANLAR: su sertliğinin nasıl ölçüleceği ve sertlik kademeleri (BM 5005/4004 ayrı "Su sertlik ayar talimatı"na yönlendiriyor; o belge elde yok) · tuzu kaşıkla karıştırma (alet)
#   · topraklama kontrolünü kullanıcıya verme (elektrik tesisatı → uzman, #31) · sirke/limon gibi ev yöntemleri (belgede yok) · marka/ürün adı.
# Alıntı denetim tablosu: beko-bulasik-makinesi-leke-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bulaşık makinesi yumuşatma tuzu", "Kâğıt peçete ya da havlu", "Makinenin su sertlik ayar talimatı"]
steps:
  - "Lekenin türüne bak: kireç izi ve puslu cam mı, elle silinince çıkmayan gökkuşağı renkli pus mu, pas lekesi mi?"
  - "Parlatıcı eksikliği göstergesine bak; gerekirse parlatıcı bölmesini MAX seviyesine kadar doldurup kapağını kapat."
  - "Parlatıcı doldururken etrafa taşanı kâğıt peçete ya da havluyla mutlaka temizle."
  - "Su ya da kireç izi kalıyorsa parlatıcı ayarını yükselt; elle silinince çıkan mavi iz ya da gökkuşağı renkli pus varsa düşür."
  - "Tuz bölmesine yalnız bulaşık makinesi yumuşatma tuzu koy; doldururken etrafına dökme ve kapağı çevirerek kapat."
  - "Tuz döküldüyse Ön Yıkama programını çalıştır ve program sonunda tuz kapağını bir kez daha kontrol et."
  - "Su sertlik ayarını makinenle verilen su sertlik ayar talimatına göre kontrol et; şebeke suyun yumuşaksa (5 dH altı) tuz kullanma."
  - "Camlarda pus sürüyorsa 60-65 derece gibi daha yüksek sıcaklıkta yıkayan bir program seç."
faq:
  - q: "Beko bulaşık makinesi bardaklarda neden beyaz iz bırakıyor?"
    a: "Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosu 'Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor' başlığında üç sebep sayıyor: yetersiz parlatıcı, düşük su sertlik ayarı ya da yetersiz tuz seviyesi ve tuz kaçağı."
  - q: "Bardaklarda silince çıkmayan, ışıkta gökkuşağı gibi görünen bir pus var. Bu kireç mi?"
    a: "Beko'nun tablosu bunu ayrı bir satırda anlatıyor ve iki sebep sayıyor: fazla parlatıcı ya da yumuşak su nedeniyle camda oluşan korozyon. Fazla parlatıcıda çözüm parlatıcı ayarını düşürmek ve taşan parlatıcıyı temizlemek. Yumuşak suda Beko su sertlik ayarının kontrol edilmesini, şebeke suyu 5 dH'nin altındaysa tuz kullanılmamasını ve 60-65 derece gibi daha yüksek sıcaklıkta yıkayan programlar kullanılmasını öneriyor; piyasadaki cam koruyuculu deterjanlar da kullanılabilir."
  - q: "Tablet deterjan kullanıyorum ve bardaklarda kireç lekesi var. Ne yapmalıyım?"
    a: "Beko'nun kılavuzuna göre tablet deterjan kullanırken program sonunda bulaşıklar ıslaksa ve/veya özellikle bardaklarda kireç lekesi görülüyorsa deterjan üreticisiyle bağlantıya geçmek gerekiyor."
  - q: "Çatal bıçaklarda pas lekesi çıkıyor, makineden mi?"
    a: "Beko'nun tablosu 'pas lekesi, kararma, yüzey bozulması' satırında şunları sayıyor: tuz kaçağı, bulaşıklarda uzun süre kalan tuzlu yiyecek artıkları, topraklama hattının olmaması, çamaşır suyu gibi yoğun temizleyiciler, bıçakların amacı dışında kullanılması, düşük kaliteli paslanmaz çelik ve daha önce paslanmış eşyaların makinede yıkanması."
images:
  coverAlt: "Bulaşık makinesinin açık üst sepetinde yan yana duran, üzerinde beyaz puslu iz kalmış cam bardaklar; kapağın iç yüzünde açık parlatıcı bölmesi"
---

Program bitiyor, bulaşıklar temiz ama bardaklar puslu, üzerlerinde beyaz izler var ya da çatal bıçaklarda pas lekesi çıkıyor. Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosu bu lekeleri türüne göre ayırıyor. Beyaz izlerin kendi satırı var: **"Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor."** Beko silince çıkmayan, ışıkta gökkuşağı gibi görünen pusu ve pas lekesini ise ayrı satırlarda anlatıyor. Üçünde de kullanıcıya düşen işler aynı yerde toplanıyor: **parlatıcı, tuz, su sertlik ayarı ve program seçimi.** Bu yazıda Beko'nun çözümlerini adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Lekenin türünü belirle → parlatıcıyı kontrol et, eksikse MAX'a kadar doldur, taşanı sil → kireç izinde parlatıcı ayarını yükselt, mavi iz ya da gökkuşağı pusunda düşür → tuzu dökmeden doldur, kapağı kapat; döküldüyse Ön Yıkama çalıştır → su sertlik ayarını kontrol et, su çok yumuşaksa tuz kullanma → camda pus sürüyorsa 60-65 derecelik program seç.

## Adım adım: evde denenecekler

**1. Lekenin türüne bak.** Beko'nun tablosunda lekeler üç ayrı satırda: **kireç izi ve puslu cam**, **elle silindiğinde çıkmayan, süt bulaşığı görünümünde, ışığa tutulduğunda mavimsi ya da gökkuşağı renkli bir leke** ve **pas lekesi, kararma, yüzey bozulması.** Hangisi olduğunu bilmek, parlatıcı ayarını hangi yöne çevireceğini belirliyor.

**2. Parlatıcıyı kontrol et.** Kireç izi satırındaki ilk sebep: **parlatıcı yetersizdir.** Beko'ya göre parlatıcı, kurutmayı artırmak ve **yıkanan parçaların üzerinde su ya da kireç izi kalmasını önlemek** için kullanılan özel bir bileşim. Paneldeki **parlatıcı eksikliği uyarı göstergesine** bak. Gerekiyorsa parlatıcı bölmesinin kapağını **mandalına basarak aç**, bölmeyi **MAX seviyesine kadar** doldur ve kapağı **hafifçe bastırarak** kapat. Yalnız bulaşık makinelerinde kullanılmak üzere üretilmiş parlatıcı kullan.

**3. Taşanı temizle.** Gökkuşağı pusu satırında Beko'nun bir uyarısı var: parlatıcı doldururken **etrafa taşan parlatıcıyı mutlaka temizle.** Beko etrafa dökülen parlatıcının **kâğıt peçete ya da havluyla** temizlenmesini istiyor.

**4. Parlatıcı ayarını çevir.** BM 4004 ve BM 5005'te parlatıcı miktarı ayarlayıcısı **elle çevrilerek 1 ile 6** arasında ayarlanıyor; fabrika çıkışında **4** konumunda. Yön lekeye göre değişiyor:
- Yemek takımlarında **su ya da kireç izi** kalıyorsa ve makinede yeterince parlatıcı varsa Beko **ayarı yükseltmeni** istiyor.
- **Elle silindiğinde çıkan mavi bir iz** kalıyorsa ya da bardaklarda **gökkuşağı renkli pus** varsa sebep **fazla parlatıcı** olabilir; Beko'nun çözümü **ayarı düşürmek.**

**5. Tuzu doğru doldur.** Kireç izi satırındaki diğer iki sebep: **tuz seviyesi yetersizdir** ve **tuz kaçağı vardır.** Beko makinede yalnız **bulaşık makinesinde kullanılmak amacıyla üretilmiş özel yumuşatma tuzu** kullanılmasını istiyor. Tuz koymak için alt sepeti çıkar ve tuz bölmesinin kapağını **saat yönünün tersine çevirerek** aç. Doldururken **dolum ağzının etrafına dökmemeye** özen göster; bölme dolunca kapağı yerine takıp **çevirerek kapat.** Beko tuzun **makineyi çalıştırmadan hemen önce** eklenmesini istiyor. Tuzun çözünmesi birkaç saat sürebildiği için tuz eksikliği göstergesi bir süre daha yanabilir.

**6. Dökülen tuzu temizle.** Tuz makinenin içine döküldüyse Beko'nun çözümü **Ön Yıkama programını çalıştırarak** dökülen tuzları temizlemek. Kapak altında kalan tuz taneleri ön yıkamada çözünüp kapağı gevşetebileceği için **program sonunda tuz kapağını bir kez daha kontrol et.**

**7. Su sertlik ayarını kontrol et.** Kireç izinde de camdaki pusta da Beko'nun önerisi aynı: **şebeke suyunun sertliğini doğru şekilde ölçerek su sertlik ayarını kontrol et.** BM 4004 ve BM 5005'te bu ayar, **makineyle birlikte verilen "Su sertlik ayar talimatına"** göre yapılıyor; o talimata bak. Gökkuşağı pusu satırındaki önemli not: şebeke suyun **yumuşaksa (5 dH'nin altında) tuz kullanma.**

**8. Programı değiştir.** Camdaki pus **yumuşak su nedeniyle oluşan korozyondan** geliyorsa Beko **60-65 derece gibi daha yüksek sıcaklıkta yıkama yapan programlar** kullanmanı öneriyor. Beko'ya göre piyasadaki **cam koruyuculu deterjanlar** da kullanılabilir.

## Pas lekesi, kararma

Beko'nun tablosunda **"Bulaşıklarda pas lekesi, kararma, yüzey bozulması"** satırı ayrı. Kullanıcıya düşenler:

- **Tuz kaçağı:** Beko'ya göre tuz metal yüzeylerde bozulmaya ve paslanmaya neden olabilir; yukarıdaki 5. ve 6. adım burada da geçerli.
- **Tuzlu yiyecek artıkları:** bu tür yiyeceklerle kirlenmiş çatal kaşıklar makinede bekleyecekse **ön yıkama** yap ya da bulaşıkları bekletmeden yıka.
- **Çamaşır suyu:** metal yüzeylerdeki koruyucu tabaka çamaşır suyu gibi temizleyicilerle zarar görür; **bulaşıkları çamaşır suyuyla yıkama.**
- **Bıçaklar:** konserve açma gibi amacı dışında kullanılan bıçakların uçlarındaki koruyucu tabaka zarar görür.
- **Eşyanın kendisi:** Beko'ya göre düşük kaliteli paslanmaz çelikten çatal bıçaklar ve **daha önce paslanmış eşyalar** bulaşık makinesinde yıkanmamalı; paslı bir eşyadaki pas diğer paslanmaz çelik yüzeylere geçebilir.

Aynı satırda Beko **topraklama hattının** olmamasını da sebep olarak sayıyor ve makinenin gerçek toprak hattına bağlı olup olmadığının kontrol edilmesini istiyor. Bu bir elektrik tesisatı işi; kendin müdahale etme, uzmana bırak.

## Tablet deterjan kullanıyorsan

Beko'nun ön hazırlık bölümündeki not: tablet deterjan kullanırken program sonunda bulaşıkların ıslaksa ve/veya özellikle **bardaklarda kireç lekesi** görüyorsan **deterjan üreticisiyle bağlantıya geç.**

Tuz ve parlatıcı ayarının markadan bağımsız anlatımı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bakabilirsin. Lekeler yemek kalıntısı, çay, kahve ya da ruj izi gibiyse Beko'nun o satırları [Beko bulaşık makinesi temiz yıkamıyor](/blog/beko-bulasik-makinesi-temiz-yikamiyor/) yazısında, bulaşıklar ıslak çıkıyorsa [Beko bulaşık makinesi kurutmuyor](/blog/beko-bulasik-makinesi-kurutmuyor/) yazısında.

## Ne zaman servis

Parlatıcı ve tuz doğru dolu, parlatıcı ayarı lekeye göre çevrildi, su sertlik ayarı talimata göre kontrol edildi, program değiştirildi ve lekeler sürüyorsa Beko'nun bu satırları kullanıcıya başka sebep göstermiyor. Beko'nun güvenlik bölümündeki kural geçerli: **kurulum ve tamir işlemlerini her zaman yetkili servise yaptır.** Topraklama kontrolü de uzman işi.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, tuz, sertlik ayarı ve program seçimi kullanıcıya; su yumuşatma sisteminin içi ve elektrik tesisatı uzmana aittir.

## Servisi aramadan önce kısa özet

1. Leke kireç izi mi, silince çıkmayan gökkuşağı pusu mu, pas mı?
2. Parlatıcı göstergesi yanıyor mu, parlatıcı ayarı kaçta?
3. Tuz bölmesi dolu mu, tuz eksikliği göstergesi ne durumda?
4. Su sertlik ayarı talimata göre yapıldı mı?
5. Tablet mi toz deterjan mı kullanıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
