---
title: "Deebot haritalama nasıl yapılır? Ecovacs'ın sırası"
description: "Ecovacs Deebot ilk haritayı nasıl çıkarır: istasyondan başlat, kapıları aç, robotu taşıma, turu bitirsin. Harita kaybolursa geri yükleme ve sıfırlama."
slug: "ecovacs-deebot-haritalama-nasil-yapilir"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco, YK #185). origin/main 75980e0'da "ecovacs/deebot" geçen yazı/başlık yok. Genel robot-supurge-haritalama-sorunu var
#   (markadan bağımsız sorun yazısı); Ecovacs'ın ilk harita kurulumunu ve uygulama adımlarını karşılamıyor. Bağlantı verildi.
# OT (#164, bu koşu, _kaynak/ot-ecovacs-2.log): "deebot haritalama" 1. **deebot haritalama nasıl yapılır** · "ecovacs haritalama" 1. ecovacs haritalama nasıl yapılır ·
#   "deebot harita" 1. deebot haritalama nasıl yapılır.
# GSC: Ecovacs/Deebot satırı yok; genel www-5 "robot süpürge haritalama olmazsa ne olur" 12 gösterim.
# Belgeler (#88) bu koşuda indirildi. Zincir: https://help.ecovacs.com/tr/support/owners-manuals (200) → site-static.ecovacs.com PDF (200):
#  (E1) N8 TR md5 c7d95850a37a2c9459336a4323994919 · (E3) N10 TR md5 4d3038e4aa426f4b80cfbad1ee4769fe · (E5) X1 OMNI TR md5 51c33e7e296c4437c669ffc1fea782d0
#  (F) https://help.ecovacs.com/tr/support/deebot-n8 (200) → faq-detail id=259, 260, 261, 262, 263, 264, 265 (200)
# Ana kaynak: F id=263 "İlk haritayı oluşturmak için, robot şarj istasyonundan başlayarak hareket etmeli ..." · E1 s.8 · E3 s.7 · E5 s.9 "her odanın kapısının açık olduğundan emin olun".
# Not: SSS'ler N8 sayfasında; diğer modellerde menü adları farklı olabilir, yazıda belirtildi.
# BİLEREK YAZILMAYANLAR: lazer sensör/LDS arızası teşhisi · model başına menü yolu (belgede yok) · fiyat (#46) · pazar.
# Alıntı denetim tablosu: ecovacs-deebot-haritalama-nasil-yapilir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~1 temizlik turu (ev büyüklüğüne göre)"
  totalTime: "PT60M"
  cost: "Ücretsiz"
  tools: ["ECOVACS HOME uygulaması", "Kuru, yumuşak bez"]
steps:
  - "Robotu tam şarj et, üst kapaktaki koruyucu filmleri çıkar."
  - "Yerdeki kabloları, terlikleri ve küçük eşyaları kaldır; sandalyeleri yerleştir, halı püsküllerini altına katla."
  - "Haritası çıkacak bütün odaların kapılarını ardına kadar aç."
  - "Robotu istasyonun üzerinden, ECOVACS HOME uygulamasından ya da AUTO düğmesinden başlat."
  - "Tur boyunca robotu elle taşıma, durdurma ya da istasyona geri götürme."
  - "Robot temizliği bitirip istasyona kendi dönsün; ev büyükse Sürekli Temizlik'i aç."
  - "Harita karışırsa önce geri yükle, olmazsa haritayı sıfırla ve turu istasyondan yeniden başlat."
faq:
  - q: "Deebot ilk haritayı neden çıkaramıyor?"
    a: "Ecovacs'ın N8 destek sayfasına göre ilk harita için robot şarj istasyonundan başlamalı ve tam bir temizlik turunu kendi başına bitirip istasyona dönmeli. Temizlik elle durdurulursa, robot elle şarja gönderilirse ya da istasyona elle taşınırsa tur tamamlanmamış sayılır ve harita oluşmaz."
  - q: "Evim büyük, robot tek turda bitiremiyor. Ne yapmalıyım?"
    a: "Ecovacs iki yol veriyor: uygulamada Sürekli Temizlik'i aç; robot şarj olunca kaldığı noktaya dönüp temizliğe ve haritalamaya devam eder. Ya da bazı odaların kapısını kapatıp önce kısmi bir harita çıkar; robot sonraki temizliklerde haritayı kademeli olarak genişletir."
  - q: "Robotu kapattım, harita kayboldu. Geri gelir mi?"
    a: "Ecovacs'ın destek sayfasına göre DEEBOT'ta Haritayı Geri Yükle işlevi var. Robotu şarj istasyonuna koy ve uygulamadaki talimatları izle. İstasyon yerinden oynamadıysa robot istasyona geri getirildiğinde haritayı kendisi geri yüklemeye çalışır."
  - q: "Harita olmazsa robot temizlik yapmaz mı?"
    a: "Ecovacs'ın belgeleri bunu doğrudan yazmıyor. N8 kılavuzunun sorun giderme tablosu, haritasız ya da düzensiz alanda robotun noktaları kaçırabildiğini ve aynı alanı tekrar temizleyebildiğini gösteriyor; oda seçerek temizlik gibi işlevler için haritaya ihtiyaç var (çıkarım)."
images:
  coverAlt: "Kapıları açık bir evin koridorunda ilerleyen yuvarlak robot süpürge"
  steps:
    - "Şarj istasyonunda bekleyen ve üst yüzü temiz bir robot süpürge"
    - "Kabloları ve terlikleri toplanmış, sandalyeleri masaya yanaştırılmış bir oda"
    - "Ardına kadar açılmış iki oda kapısı ve aradaki koridor"
    - "Telefon ekranında robot süpürge uygulamasının başlat sayfası"
    - "Odanın ortasında kendi başına ilerleyen robot süpürge"
    - "Turunu bitirip şarj istasyonuna geri dönen robot süpürge"
    - "Telefon ekranında robot süpürge uygulamasının harita yönetimi sayfası"
---

Yeni bir Deebot aldın; uygulamada oda oda temizlik, sanal sınır ve çizgi çizgi bir ev planı görmek istiyorsun ama harita yarım kaldı ya da hiç çıkmadı. Ecovacs'ın Türkçe destek sayfası ilk haritanın üç koşula bağlı olduğunu yazıyor: robot **istasyondan başlayacak**, turu **kendi başına bitirecek** ve **istasyona kendisi dönecek**. Bu yazı Ecovacs'ın **DEEBOT N8**, **N10** ve **X1 OMNI** Türkçe kılavuzlarına ve Ecovacs Türkiye destek sayfasındaki N8 harita sorularına dayanıyor. Uygulamadaki menü adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tam şarj, filmler sökülü → yeri topla → bütün kapıları aç → istasyondan başlat → robota dokunma → istasyona kendi dönsün → bozulursa önce geri yükle, sonra sıfırla.

## Adım adım: ilk harita

**1. Şarj et, filmleri çıkar.** Destek sayfasına göre robotun haritalamayı tek seferde bitirebilmesi için **yeterli şarjı** olmalı. Kılavuzun hızlı başlangıç sayfasının ilk adımı **koruyucu şeritleri ve filmleri çıkar**; destek sayfası da kapaktaki filmin **lazer sensörlerini** kapatmaması gerektiğini yazıyor. Eksik harita sorununun nedenlerinden biri bu.

**2. Yeri topla.** Kılavuzların **Temizlik Öncesi Öneriler** sayfası: sandalye gibi mobilyaları uygun yerlere koyarak alanı düzenle; **kablo, bez ve terlik** gibi nesneleri yerden kaldır; püsküllü halının **püsküllerini altına gizle**; düşme riski olan kenara fiziksel bariyer koy. X1 OMNI kılavuzu kameranın düzgün çalışması için alanın **iyi aydınlatılmasını** da istiyor.

**3. Kapıları aç.** Aynı sayfanın en önemli maddesi: **ilk kullanım sırasında DEEBOT'un evinizi tamamen keşfetmesine yardımcı olmak için her odanın kapısının açık olduğundan emin olun.** Destek sayfası kapıları **mümkün olduğunca geniş** açmanı istiyor; aksi hâlde bazı odalar haritada eksik kalıyor. Halılı evde ilk haritada su deposunu çıkarmanı da öneriyor; böylece robot halılı alanlara girebiliyor.

**4. İstasyondan başlat.** Ecovacs'ın kuralı açık: **ilk haritayı oluşturmak için robot, şarj istasyonundan başlayarak hareket etmeli.** Robotu istasyona koy, uygulamadan ya da AUTO düğmesinden başlat. Kılavuz ilk temizlikte robotu gözlemlemeni ve sorun olursa yardım etmeni istiyor; destek sayfası da robotu takip edip **engelleri kaldırmanı** öneriyor.

**5. Robota dokunma.** Tur boyunca robotu **fiziksel olarak hareket ettirme**. Destek sayfasına göre temizlik elle durdurulursa, robot elle şarja gönderilirse ya da istasyona elle taşınırsa **tur tamamlanmamış sayılır**. Robotu taşımak konum hatasına yol açar ve harita karışır.

**6. İstasyona kendi dönsün.** Robot tam bir temizliği bitirip istasyona kendiliğinden dönünce ilk harita oluşur. Ev tek turda bitmeyecek kadar büyükse Ecovacs iki seçenek veriyor: uygulamada **Sürekli Temizlik** işlevini aç; robot şarj olunca kaldığı yere dönüp haritalamaya devam eder. Ya da bazı odaların kapısını kapatıp önce **kısmi bir harita** çıkar; robot sonraki temizliklerde haritayı kademeli olarak güncelleyip genişletir.

**7. Bozulursa geri yükle, sonra sıfırla.** Harita kaybolursa destek sayfasının ilk önerisi **Haritayı Geri Yükle**: robotu istasyona koy, uygulamadaki talimatları izle. İstasyon yerinden oynamadıysa robot geri getirilince **"Haritayı Geri Yüklüyor"** diyerek kendisi dener. Haritalar üst üste bindiyse uygulamada **Daha Fazla** sayfasından **Haritayı Sıfırla**'yı seç ve yeni harita için robotu yine istasyondan başlat. X1 OMNI kılavuzu da Harita Yönetimi'nde geri yüklenen haritayı bulup **"Bu Haritayı Kullan"**a dokunmanı, olmazsa haritalamayı yeniden başlatmanı yazıyor.

## Harita varken robot aynı yeri tekrar siliyor

Destek sayfasına göre bu her zaman arıza değil. Haritalama bittikten sonra DEEBOT odaları **yakınlık sırasına göre** tek tek temizliyor; bazen temizlenmiş bir odaya hatasını düzeltmek için yeniden giriyor. Robot taşınır ya da takılırsa konumunu kaybedip bir yeri atlayabiliyor. Belli bir alanı temizletmek istiyorsan uygulamadaki **Özel Mod**'u kullan. Uygulamadaki harita eksik görünüyorsa sorun ağdan olabilir; Ecovacs uygulamayı ve yazılımı güncellemeni, uygulamayı yeniden başlatmanı öneriyor.

Kılavuzun sorun giderme tablosu robotun noktaları kaçırması ya da temizlediği yeri tekrar silmesi için üç neden daha sayıyor: zemindeki **küçük nesneler** ve kablolar turu bölüyor; robot **kaygan ya da ıslak zeminde** çalışmış, temizliğe başlamadan önce zeminin kuru olduğundan emin ol; **TrueMapping mesafe sensörü** engellenmiş, önünü kapatan eşyayı kaldır. Kılavuz robotu tur sırasında elle taşımamanı ve önünü kapatmamanı yineliyor.

Kaybolan harita robotun istasyonu bulamamasıyla birlikte geliyorsa [Ecovacs Deebot istasyonu bulamıyor](/blog/ecovacs-deebot-istasyonu-bulamiyor/), uygulama bağlanmıyorsa [Ecovacs Deebot Wi-Fi'ye bağlanmıyor](/blog/ecovacs-deebot-wifi-baglanmiyor/) yazısına bak. Markadan bağımsız liste: [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/).

## Ne zaman servis

- Kapılar açık, filmler sökülü, tur istasyondan başlayıp bittiği hâlde harita hiç oluşmuyorsa.
- Robot sensörünün önü açıkken sürekli konum kaybediyorsa; Ecovacs müşteri hizmetleri.

⛔ **Kendin-çöz sınırı burada biter.** Ev düzeni, uygulama ayarları ve harita yönetimi senin; lazer sensör, kamera ve navigasyon arızası yetkili servisin.

## Servisi aramadan önce iki dakikalık özet

1. Model ne (robotun altındaki etikette)?
2. Tur istasyondan mı başladı, robot istasyona kendi mi döndü?
3. Robot tur sırasında elle taşındı mı?
4. Kapaktaki koruyucu film söküldü mü?
5. Uygulama ve robot yazılımı güncel mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
