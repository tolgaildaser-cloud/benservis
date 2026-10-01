---
title: "Grundig bulaşık makinesi kireç izi bırakıyor"
description: "Grundig bulaşık makinesi bardaklarda kireç izi ve pus bırakıyorsa Grundig kılavuzundaki sebepler: parlatıcı, su sertliği, tuz ve tablet kullanımı."
slug: "grundig-bulasik-makinesi-kirec-izi-birakiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Grundig belirti koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf.
#   download.grundig.com https'te bağlantı kurmadı (curl 000); aynı yol http ile 200. www.grundig.com.tr arşivi Akamai 403. Web araması yalnız PDF adresini bulmak için.
#   Okuma pdftotext -layout; sayfa = PDF sayfası (basılı "NN/TR" ile aynı). Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-grundig-sprint/bl3.pdf
#  (A) GPDF 11853 I  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202209191404641_User%20Manual%20-%20File%20(Long)tr_TR.pdf  44 s.  md5 a1fd74a5334d0f0ebbcb3b054fb0ec15
#   Not: aynı alandaki GDF 5202 (md5 f837c4ff18be723bc3744e0766d9b8a6) ve GDF 5501 (md5 ef1f8bf81f6cf48532c8052e986ac81b) kılavuzlarında bu satır YOK (yalnız "Makine çalışmıyor"); yazı tek belgeye, A'ya dayanıyor.
# Sorun giderme satırı (A s.36): "Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor" → parlatıcı yetersiz (gösterge, ilave, ayarı yükselt) /
#   su sertlik ayarı düşük veya tuz yetersiz (sertliği ölçerek ayarı kontrol et) / tuz kaçağı (dökme, kapağı kapat, ön yıkama, program sonunda kapağı tekrar kontrol).
# Diğer: A s.13 su yumuşatma (7°dH üstü yumuşatılmalı) · A s.14-15 tuz doldurma · A s.16 tablet deterjan (21°dH; kireç lekesinde deterjan üreticisi; tabletten toza geçiş) · A s.17 parlatıcı (doldurma, MAX, ayar fabrikada 3;
#   su izi → artır, mavi iz → azalt; hassas cam/kristal zamanla saydamlığını yitirebilir) · A s.30 tuz ve parlatıcı göstergeleri, P:0–P:4 parlatıcı ayarı.
# BİLEREK YAZILMAYANLAR: tuzu kaşıkla karıştırma (A s.15; ALET KURALI) · su sertliğinin nasıl ölçüleceği (A "hızlı kullanım kartı"na atıf yapıyor, kart elimizde yok) · sirke/kireç çözücü önerisi (A s.37 parlatıcı haznesine sirke/kireç çözücü konmamasını söylüyor) · fiyat.
# Alıntı denetim tablosu: grundig-bulasik-makinesi-kirec-izi-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bulaşık makinesi tuzu", "Bez"]
steps:
  - "Ekrandaki parlatıcı eksikliği göstergesine bak; yanıyorsa parlatıcı bölmesini MAX seviyesine kadar doldur."
  - "Parlatıcı yeterliyse parlatıcı ayarını bir kademe yükselt."
  - "Tuz eksikliği göstergesi yanıyorsa alt sepeti çıkar ve tuz bölmesini yalnız bulaşık makinesi tuzuyla doldur."
  - "Tuzu dolum ağzının etrafına dökmeden koy ve tuz haznesinin kapağını çevirerek tam kapat."
  - "Makine içine tuz döküldüyse Ön Yıkama programını çalıştır ve program sonunda tuz kapağını bir kez daha kontrol et."
  - "Su sertlik ayarının şebeke suyunun sertliğine uygun olduğunu kontrol et."
  - "Tablet deterjan kullanıyorsan suyun sertliği yüksekse tabletin yanında tuz ve parlatıcı da kullan."
faq:
  - q: "Grundig bulaşık makinem bardaklarda neden beyaz iz bırakıyor?"
    a: "Grundig GPDF 11853 I kılavuzundaki 'Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor' satırı üç sebep sayıyor: parlatıcının yetersiz olması, su sertlik ayarının düşük ya da tuz seviyesinin yetersiz olması ve tuz kaçağı. Üçü de kullanıcının kontrol edebileceği ayar ve dolum işleri."
  - q: "Parlatıcı ayarını ne kadar yükseltmeliyim?"
    a: "Grundig'in kılavuzuna göre yıkamadan sonra yemek takımlarında su izi oluşuyorsa ayar artırılır, elle silindiğinde mavi bir iz kalıyorsa azaltılır. GPDF 11853 I'de ayar fabrikada 3 konumunda geliyor ve P:0 ile P:4 arasında seçiliyor; P:0'da hiç parlatıcı atılmıyor."
  - q: "Tablet deterjan tuz ve parlatıcının yerini tutar mı?"
    a: "Grundig'e göre tuz ve parlatıcı etkili tabletler belli bir su sertliğine, 21°dH'ye kadar çalışıyor; bunun üzerinde tabletle birlikte tuz ve parlatıcı da kullanılmalı. Kılavuz en iyi sonucun deterjan, parlatıcı ve tuzun ayrı ayrı kullanılmasıyla alındığını yazıyor. Tablet kullanırken bardaklarda kireç lekesi görürsen deterjan üreticisine başvurmanı da öneriyor."
  - q: "Bardaklarımdaki pus hiç geçmiyor, makine mi bozuk?"
    a: "Her pus kireç değil. Grundig'in kılavuzu bazı hassas cam türlerinin ve kristallerin zamanla saydamlığını yitirebileceğini yazıyor ve yeni alınan sofra gereçlerinin bulaşık makinesinde yıkanmaya uygun olmasına dikkat edilmesini öneriyor."
images:
  coverAlt: "Bulaşık makinesinin üst sepetinden çıkarılmış, yüzeyinde beyaz kireç lekeleri ve hafif pus görünen iki cam bardak"
---

Bardaklar temiz ama mat, üzerlerinde beyaz noktalar ya da ince bir pus var. Grundig'in bulaşık makinesi kullanma kılavuzundaki sorun giderme bölümünde bu durum için ayrı bir satır var: **"Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor."** Grundig bu satırda üç sebep sayıyor: **parlatıcı yetersiz**, **su sertlik ayarı düşük veya tuz seviyesi yetersiz**, ve **tuz kaçağı.** Üçü de makinenin ayarı ve dolumuyla ilgili. Bu yazı Grundig'in GPDF 11853 I modeli için yayımladığı kullanma kılavuzuna dayanıyor; tuş adları ve ayar menüsü modeline göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcı göstergesi yanıyorsa parlatıcıyı MAX'a kadar doldur, doluysa ayarı yükselt. Tuz göstergesi yanıyorsa yalnız bulaşık makinesi tuzu koy, dökme, kapağı tam kapat; döktüysen Ön Yıkama çalıştır. Su sertlik ayarını kontrol et; sert suda tabletin yanına tuz ve parlatıcı ekle.

## Adım adım: evde denenecekler

**1. Parlatıcıyı doldur.** Grundig'in tablosundaki ilk sebep: **parlatıcı yetersizdir.** Çözüm: **parlatıcı eksikliği uyarı göstergesini** kontrol et, gerekirse parlatıcı ilave et. Kılavuza göre parlatıcı, kurutma etkinliğini artırmak ve parçaların üzerinde **su ya da kireç izlerinin kalmasını önlemek** için kullanılıyor. Parlatıcı kapağını **mandal yardımıyla** aç, bölmeyi **MAX seviyesine kadar** doldur, kapağı işaretli noktaya **hafifçe bastırarak** kapat. Bölmenin dışına dökülen parlatıcıyı sil; Grundig'e göre dökülen parlatıcı **köpürmeye** neden olur ve yıkama performansını düşürür.

**2. Parlatıcı ayarını yükselt.** Tablonun aynı satırdaki ikinci önerisi: makinede yeterince parlatıcı varsa **parlatıcı ayarını yükselt.** GPDF 11853 I'de ayar **P:0 ile P:4** arasında; fabrika çıkışı **3.** Kılavuzun ölçütü: yıkamadan sonra yemek takımlarında **su izi** oluşuyorsa ayarı **artır**, elle silindiğinde **mavi bir iz** kalıyorsa **azalt.** Bu modelde ayar menüsüne kapı kapalıyken makineyi açıp **Açma Kapama ve P2 tuşlarına aynı anda 3 saniye** basarak giriliyor; ayrıntı kılavuzundaki "Parlatıcı Miktarının Ayarlanması" bölümünde.

**3. Tuzu kontrol et.** Tablodaki ikinci sebep: **tuz seviyesi yetersizdir.** Grundig'e göre ekrandaki **tuz eksikliği uyarı göstergesi** yanmaya başladığında tuz bölmesine yeniden tuz doldurulur. Önce **alt sepeti çıkar**, tuz bölmesinin kapağını **saat yönünün tersine çevirerek** aç ve bölmeyi doldur. Kılavuz yalnız bulaşık makinesi için üretilmiş **özel yumuşatma tuzu** istiyor; **sofra tuzu, kaya tuzu** gibi suda tam çözünmeyen tuzları kullanma. Makinenin **yalnız ilk kullanımında** tuz bölmesine 1 litre su eklenir. Grundig'e göre tuz yeni doldurulduktan sonra çözünmesi birkaç saat sürebildiğinden gösterge **bir süre yanmaya devam edebilir.**

**4. Tuzu dökmeden koy, kapağı kapat.** Tablodaki üçüncü sebep: **tuz kaçağı vardır.** Grundig'in çözümü: tuz doldururken **dolum ağzının etrafına dökmemeye** özen göster, doldurduktan sonra **tuz haznesi kapağının kapandığından** emin ol. Kılavuz tuz ilavesinin **makineyi çalıştırmadan hemen önce** yapılmasını istiyor; böylece taşan tuzlu su hemen temizleniyor.

**5. Dökülen tuz için Ön Yıkama çalıştır.** Aynı satırın devamı: **Ön yıkama programını çalıştırarak** makine içine dökülen tuzları temizle. Grundig'in uyarısı: kapak altında kalan tuz taneleri ön yıkamada çözüneceği için **kapak gevşeyebilir**; **program sonunda kapağı bir kez daha** kontrol et. Hemen yıkama yapmayacaksan kılavuz makineyi **boş ve deterjansız en kısa programda** çalıştırmanı öneriyor.

**6. Su sertlik ayarını kontrol et.** Tablodaki çözüm: **şebeke suyunun sertliğini doğru şekilde ölçerek su sertlik ayarını kontrol et.** Grundig'e göre makinedeki su yumuşatma sistemi suyu yumuşatıyor; şebeke suyu **7°dH üstündeyse** yumuşatılmalı, aksi hâlde **sertlik iyonları yıkanan gereçler üzerinde birikir** ve yıkama, parlatma ve kurutma performansı etkilenebilir. GPDF 11853 I kılavuzu ayarın nasıl yapılacağı için ürünle gelen **hızlı kullanım kartındaki** su yumuşatma bölümüne yönlendiriyor.

**7. Sert suda tableti tek başına bırakma.** Grundig'e göre tuz ve parlatıcı etkili tablet deterjanlar belli bir su sertliğine, **21°dH'ye kadar** çalışıyor; bu seviyenin üzerinde tabletle birlikte **su yumuşatma tuzu ve parlatıcı da** kullanılmalı. Kılavuz en iyi yıkama performansının **deterjan, parlatıcı ve tuzun ayrı ayrı** kullanılmasıyla alındığını yazıyor. Tablet kullanırken bardaklarda **kireç lekesi** görürsen Grundig deterjan üreticisiyle bağlantıya geçmeni öneriyor.

## Pus her zaman kireç değil

Grundig'in kılavuzu "Bulaşık makinesinde yıkanması uygun olmayan parçalar" bölümünde şunu da yazıyor: bazı **hassas cam türleri ve kristaller zamanla saydamlığını yitirebilir.** Kılavuz yeni alınan sofra gereçlerinin **bulaşık makinesinde yıkanmaya uygun** olmasına dikkat edilmesini öneriyor. Sorun giderme tablosuna göre **desenli bardaklar** ve sır üstü desenli porselenler de bulaşık makinesinde yıkanmaya uygun değil. Parlatıcı ve tuz ayarının markadan bağımsız anlatımı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/), genel belirti sayfası için [bulaşık makinesi bardakları bulanık bırakıyor](/blog/bulasik-makinesi-bardaklari-bulanik-birakiyor/) yazılarına bakabilirsin.

## Ne zaman servis

Parlatıcı dolu ve ayarı yükseltilmiş, tuz göstergesi sönmüş, tuz kapağı sıkı, su sertlik ayarı şebekene uygun ve sorun sürüyorsa durumu yetkili servise anlat. Grundig'in güvenlik bölümündeki kural açık: **kurulum ve tamir işlemlerini her zaman yetkili servise yaptır;** kılavuzda açıkça belirtilmediği sürece ürünün **hiçbir parçasını onarma veya değiştirme.**

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, tuz ve ayarlar sana; makinenin içindeki parçalar yetkili servise aittir.

## Servisi aramadan önce kısa özet

1. İz nerede: yalnız camlarda mı, tabaklarda da mı?
2. Parlatıcı ve tuz göstergeleri yanıyor mu?
3. Parlatıcı ayarı kaçta?
4. Tablet mi, toz ya da jel deterjan mı kullanıyorsun?
5. Tuzu en son ne zaman doldurdun, etrafa döküldü mü?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
