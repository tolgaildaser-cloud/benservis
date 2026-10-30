---
title: "Televizyona uydu nasıl eklenir: Türksat ve LNB ayarı"
description: "Televizyona uydu ekleme ve güncelleme: Grundig ve Vestel kılavuzlarına göre uydu girişi, anten tipi, Türksat seçimi, LNB ayarı ve kanal arama."
slug: "televizyona-uydu-nasil-eklenir"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P39 (YK #197 boşluk, BOSLUK.md #230). Konu: "uydu nasıl" #1-#4 (ayarlanır, kurulur, eklenir, güncellenir). Slug origin/main'de yok (doğrulayıcı). Yakın markalı yazılar: sunny-tv-uydu-kurulumu, skytech-tv-uydu-ayarlama, skytech-kendinden-uydulu-tv-kurulumu, vestel-televizyon-sinyal-yok. Markasız "televizyona uydu ekleme" sayfası yok.
# Kaynak (#88): iki üreticinin kendi kılavuzu, yerel kopya (3 Eki koşusunda indirilmişti; bu koşuda yeni indirme yok).
#  G) Grundig 65 GGU 8960 B Televizyon Kullanma Kılavuzu (DCL000), 124 s., md5 c83f3a52698c0fa73290d0aa44aeeef7. Sayfa = basılı sayfa = PDF sayfası: s.93-95 (otomatik/manuel uydu arama), s.96-97 (DiSEqC, LNB), s.102 (uydu güncellemesi).
#  V) Vestel 43U9540 4K Smart TV Kullanım Kılavuzu, 73 s., md5 5051f2408bc00470c905cab3dfc7b548, PDF sayfası: s.17 (uydu girişi), s.27-28 (uydu kurulumu, TKGS), s.37 (Uydu Ayarları menüsü, Sinyal Bilgileri).
# BİLEREK YAZILMAYANLAR: ücret (#46) · Türksat frekans/sembol oranı/polarizasyon değerleri (kılavuz menü alanlarını anlatıyor, geçerli değer vermiyor) · LNB frekansı için sayı (kılavuzlar vermiyor, "sistemde kullanılan" diyor) · çanak yönlendirme, LNB/kablo değişimi (belgede yok, servis) · harici uydu alıcısı güncellemesi (iki belge de televizyonun dahili alıcısı) · motorlu anten (DiSEqC 1.2) ve SCR ayrıntısı · D-Smart/operatör kurulumu.
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Televizyon kumandası", "Çanaktan gelen uydu kablosu"]
steps:
  - "Çanaktan gelen kabloyu televizyonun arkasındaki uydu girişine sıkıca tak."
  - "Uydu kanal kurulum menüsünü aç: kaynak olarak Uydu'yu, kurulum modu olarak Uydu (Standart)'ı seç."
  - "Anten tipini seç: tek alıcı ve doğrudan kablo için Tek ya da Direkt, birden çok uydu için DiSEqC."
  - "Uydu listesinden çanağın baktığı uyduyu, Türksat için Türksat 3A/4A'yı işaretle."
  - "LNB gücünü Açık yap; LNB frekansına, çanağı kuran kişi söylemedikçe dokunma."
  - "Tarama türünü seçip otomatik kanal aramayı başlat ve televizyonu bitene kadar bırak."
  - "Bazı kanallar eksik kalırsa tarama modunu Ağ yap ve aramayı yinele."
  - "Sonradan yeni kanal eklemek için uydu güncellemesini çalıştır."
faq:
  - q: "Televizyona yeni uydu nasıl eklenir?"
    a: "Vestel'in kılavuzuna göre Ana Ekran tuşuna basıp Ayarlar > Kurulum > Uydu Ayarları yoluna giriyorsun. Uydu listesi seçeneği kullanılabilir uyduları gösteriyor ve bu listeye uydu eklemeye, silmeye ya da düzenlemeye izin veriyor. Anten kurulumu seçeneği ise anten ayarlarını değiştirip yeni bir uydu araması başlatıyor. Grundig'de uyduyu otomatik kanal arama menüsünden Uydu Seçimi ile seçiyorsun."
  - q: "Uydu güncellemesi nasıl yapılır?"
    a: "Grundig'in kılavuzunda Uydu Güncellemesi ayrı bir seçenek ve yalnız yeni eklenen kanalları buluyor, bunları program listesinin sonuna kaydediyor. Vestel'de ise Türksat'ın TKGS sistemi kullanılıyorsa Ayarlar > Kurulum > TKGS Kurulumu menüsünde Güncellemeyi Başlat seçeneği var."
  - q: "LNB frekansı kaç olmalı?"
    a: "İki kılavuz da bir sayı vermiyor. Grundig LNB frekansı için uydu sisteminde kullanılan değerin seçilmesini istiyor ve LNB ayarlarının uydu sistemleri hakkında önemli bir uzmanlık gerektirdiğini, konuyla ilgili bir uzmanla görüşülmesi gerektiğini yazıyor. Değeri çanağı kuran firmadan öğrenmek gerekiyor."
  - q: "Aramadan sonra eski kanallarım gitti mi?"
    a: "Grundig'in kılavuzu otomatik kanal aramayı başlatırken bir uyarı gösterdiğini yazıyor: daha önce yapılmış kanal aramasındaki kanallar silinip yeniden kanal araması yapılacak. Sadece yeni kanalları eklemek istiyorsan uydu güncellemesini kullan."
images:
  coverAlt: "Balkon korkuluğuna monte edilmiş uydu çanağı ve çanaktan içeri giren kablo"
  steps:
    - "Televizyonun arka kenarındaki uydu girişine kabloyu takan beyaz eldivenli sade siluet el"
    - "Televizyon ekranındaki kurulum menüsünde uydu seçeneğini seçen kumandalı beyaz eldivenli sade siluet el"
    - "Ekrandaki anten tipi listesinde seçeneği işaretleyen kumandalı beyaz eldivenli sade siluet el"
    - "Ekrandaki uydu listesinde satırı seçen kumandalı beyaz eldivenli sade siluet el"
    - "Ekrandaki ayar menüsünde LNB gücünü açık konuma getiren kumandalı beyaz eldivenli sade siluet el"
    - "Ekranda kanal listesi açıkken bekleyen beyaz eldivenli sade siluet el"
    - "Ekrandaki tarama modu seçeneğini değiştiren kumandalı beyaz eldivenli sade siluet el"
    - "Ekrandaki uydu güncellemesi seçeneğini onaylayan kumandalı beyaz eldivenli sade siluet el"
---

Televizyonun uydu girişini çanağa bağladın ya da yeni bir uydu eklemek, kanalları güncellemek istiyorsun. Kılavuzlar bu işi menüden yapmanı istiyor ama menü adları markaya göre değişiyor. Bu yazıda Grundig'in ve Vestel'in kendi kullanma kılavuzlarını yan yana okuduk. Farklı söyledikleri yerleri ayrıca yazdık. Menü adları modelden modele değişebilir, kendi kılavuzuna da bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kablo uydu girişine, menüde Uydu kaynağı, anten tipi, uydu (Türksat 3A/4A), LNB ayarı, otomatik arama. Yeni kanallar için uydu güncellemesi. LNB frekansını bilmiyorsan değiştirme.

> ⚠️ **Sınır:** Bu yazı yalnız televizyon menüsünü anlatıyor. Çanağın yönü, LNB'nin kendisi ve kablonun değişimi çanağı kuran firmanın işi; kılavuzların bu bölümleri bunları anlatmıyor.

## İki kılavuzda aynı ve farklı olanlar

| Konu | Grundig | Vestel |
|---|---|---|
| Menü yolu | Kaynak > Uydu, sonra Ayarlar > Kanal > Kanal Kurulum Modu > Uydu (Standart) | Ana Ekran > Ayarlar > Kurulum > Uydu Ayarları |
| Anten tipi | Tek, DiSEqC 1.0, DiSEqC 1.1 ve diğerleri | Direkt, Tekli Uydu Kablosu, DiSEqC anahtarı |
| Uydu ekleme | Uydu Seçimi ile listeden seçilir | Uydu listesinde ekleme, silme, düzenleme |
| Güncelleme | Uydu Güncellemesi | TKGS Kurulumu > Güncellemeyi Başlat |

## Adım adım: televizyona uydu ekleme

**1. Kabloyu uydu girişine tak.** Vestel, uydu kablosunun televizyonun arka sol tarafındaki uydu girişine (LNB) bağlanmasını istiyor. Anten girişi başka bir soket, kabloyu oraya takma. Konektör gevşek kalmasın.

**2. Uydu menüsünü aç.** Grundig'de önce Kaynak listesinden Uydu'yu seçiyorsun. Sonra Ayarlar, Kanal ve Kanal Kurulum Modu'ndan Uydu (Standart) seçeneğine geçiyorsun. Vestel'de Ana Ekran tuşuna basıp Ayarlar > Kurulum > Uydu Ayarları'na giriyor, yeni arama için Anten Kurulumu'nu seçiyorsun.

**3. Anten tipini seç.** Grundig, uydu anteninden televizyona doğrudan kablo geliyorsa ve arada ortak santral yoksa Tek seçilmesini istiyor. Vestel'de aynı durumun adı Direkt. Birden çok uydu için DiSEqC anahtarı varsa DiSEqC seçilir. Grundig'e göre DiSEqC 1.0 ile en fazla dört, 1.1 ile en fazla on altı uydu tanımlanır. Vestel de aynı sayıları veriyor. Apartmanda ortak sistem varsa bina yöneticisine ya da kuran firmaya sor.

**4. Uyduyu seç.** Grundig'de otomatik kanal arama menüsünde Uydu Seçimi'ni açıp çanağın baktığı uyduyu işaretliyorsun. Kılavuzun örnek ekranında Türksat 3A/4A 42.0E satırı görünüyor. Vestel'de uydu listesine uydu ekleyebiliyor, silebiliyor ya da düzenleyebiliyorsun.

**5. LNB ayarına dikkat et.** Grundig'de LNB ayarları altında LNB Gücü'nü Açık yapıyor, LNB Frekansı'nı da uydu sisteminde kullanılan değere göre seçiyorsun. Kılavuz bu bölümün uzmanlık gerektirdiğini, bir uzmanla görüşülmesini yazıyor. Değeri bilmiyorsan değiştirme. Vestel anten tipinden sonra Transponder listesi ve LNB Konfigürasyonu seçeneklerini veriyor.

**6. Aramayı başlat.** Grundig'de tarama türünü seçiyorsun: yalnız şifresiz kanallar, yalnız şifreli kanallar ya da tümü. Hafızaya alma türünü de seçip Sonraki'yi onaylıyorsun. Kılavuz, daha önce yapılmış aramadaki kanalların silinip yeniden arama yapılacağını uyarıyor. Vestel'de Direkt tipte uyduyu seçip servis araması için OK'a basıyorsun.

**7. Bekle, eksik kalırsa Ağ'ı dene.** Grundig'e göre arama, bulunan kanal sayısına bağlı olarak birkaç dakika sürebilir. Yayıncı kaynaklı uydu parametreleri değiştiği için bazı frekanslar eksik kaydedilirse Tarama Modu'nun Ağ seçilmesi öneriliyor.

**8. Sonradan güncelle.** Grundig, yeni uydu kanallarının sık eklendiğini, uydu verilerinin değiştiğini ve otomatik aramanın zaman zaman yapılmasını öneriyor. Yalnız yeni kanallar için Kanallar menüsündeki Uydu Güncellemesi bunları program listesinin sonuna ekliyor. Vestel'de TKGS kullanılıyorsa Ayarlar > Kurulum > TKGS Kurulumu'nda Güncellemeyi Başlat'ı seç.

## Standart mı, operatör kurulumu mu?

İki kılavuz da kurulum başında bir ayrım yapıyor. Grundig'de Uydu (Standart) seçeneğinin yanında bir operatör kullanıyorsan Uydu (Operatör Modu) var. Vestel'de kurulum tipi Operatör ya da Standart olarak ayarlanıyor; Standart seçersen normal uydu kurulumuyla devam edip uydu kanallarını izliyorsun. Abone olduğun bir yayın platformu yoksa Standart seçenek yeterli. Operatör kurulumunda bazı adımlar seçtiğin operatöre göre farklılaşabiliyor veya atlanabiliyor; Vestel bunu kılavuzda açıkça belirtiyor. Çoklu alıcıda tek kablo kullanılıyorsa Vestel'de Tekli Uydu Kablosu, Grundig'de Single Cable anten tipini seçmen gerekir.

## Elle arama ve sinyal bilgisi

Otomatik arama bir kanalı bulamazsa Grundig manuel aramayı öneriyor. Bunun için Frekans, Sembol ve Polarizasyon alanlarını doğru girmen gerekiyor. Kılavuz geçerli transponder bilgisini Teleteks sayfasından, uydu TV dergilerinden ya da internetten öğrenebileceğini söylüyor, ama değer vermiyor. Vestel'in Kurulum menüsündeki Sinyal Bilgileri seçeneği sinyal seviyesini ve kalitesini izlemene yarıyor.

## Kanal yine gelmiyorsa

Menüdeki her adım doğruysa ve sinyal seviyesi düşükse çanağın yönü, LNB ve kablo menüden çözülmez. Bu kılavuzlardaki bölümler bunları anlatmıyor; kurulumu yapan firmaya ya da yetkili servise bırak. Televizyonun kendisi hakkında takılırsan Vestel'in sorun giderme bölümü Vestel İletişim Merkezi'ni ya da yetkili servisi öneriyor.

Aynı konudaki yazılar: [Vestel televizyon sinyal yok](/blog/vestel-televizyon-sinyal-yok/), [Sunny TV uydu kurulumu](/blog/sunny-tv-uydu-kurulumu/), [Skytech TV uydu ayarlama](/blog/skytech-tv-uydu-ayarlama/).
