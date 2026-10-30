---
title: "Davlumbaz karbon filtre değişimi: kılavuzlara göre adımlar"
description: "Davlumbaz karbon filtresi nasıl değiştirilir? Siemens, Bosch, Vestel ve Silverline kılavuzlarına göre süre, çıkarma, takma ve yıkamama kuralı."
slug: "davlumbaz-karbon-filtre-degisimi"
date: "2026-10-30"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P24, satır #118). origin/main'de genel "davlumbaz-karbon-filtre-degisimi" yok; yakın yazılar: davlumbaz-cekmiyor (karbon yıkanmaz bölümü),
#   bosch-davlumbaz-cekmiyor, siemens-davlumbaz-filtre-uyarisi, davlumbaz-yag-filtresi-nasil-temizlenir, davlumbaz-gurultulu-calisiyor.
# Arama kanıtı: BOSLUK.md #118 (OT "davlumbaz filtre değişimi" #1-#10; "davlumbaz" #10).
# Parça ölçüsü (YK 30 Eki): karbon filtre tüketim malzemesi; Siemens ve Bosch kılavuzları değişimi kullanıcıya veriyor → yazıldı.
# Belgeler:
#  (S) Siemens LC.6KPJ.0. davlumbaz kullanım kılavuzu ve kurulum talimatları, 20 s.  https://media3.bsh-group.com/Documents/9001922507_I.pdf  md5 6e8ebcd7c02a1054392bc7be4ff3a262
#  (B) Bosch DWK065G20T / DWK095G20T / DWK065G60T / DWK095G60T kullanma kılavuzu, 38 s.  https://media3.bosch-home.com/Documents/9001132467_A.pdf  md5 2e3561ced6c3e1577e484713adb1df63
#  (V) Vestel AD-63330 B / G / S davlumbaz kullanım kılavuzu, 28 s.  https://statik.vestel.com.tr/webfiles/20267393_k.pdf  md5 32ee39d45cceb692a1d98c25df4e1dde (P24/_kaynak/davlumbaz-calismiyor ile aynı dosya)
#  (L) Silverline 4260 kullanma kılavuzu, 14 s. (yalnız bakım bölümü; 3 Eki PAZ indirmesinin yerel kopyası, URL kayıtlı değil)  md5 11100dc344bda89b726100af9a682166
# Sayfalar (PDF): S s.7 fiş/soğuma, yağ filtresi sökme/takma · S s.8 koku filtresi süresi, sökme, takma · B s.10 karbon filtre değişimi · B s.11 yağ filtresi sökme · B s.23 arıza tablosu · V s.17 karbon filtre değişimi · V s.20 sorun tablosu · L s.6 bakım.
# Belge iç farkı (ikisi de yazıldı): Siemens 6 ay (günde yaklaşık bir saat) ↔ Bosch 3-5 ay (s.10) / 3 ay (s.23).
# BİLEREK YAZILMAYANLAR: Siemens'te aksesuarla havalandırma moduna geçiş (adım belgenin ayrı bölümü) · dolum göstergesi sıfırlama (siemens-davlumbaz-filtre-uyarisi'nda) · filtre kodu/seçimi (belgede yok) · fiyat (#46).
# Alıntı denetim tablosu: davlumbaz-karbon-filtre-degisimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yeni karbon filtre", "Kuru bez"]
steps:
  - "Yedek karbon filtreyi önceden temin et; kılavuzlar orijinal filtreyi, servisten ya da satıcıdan almanı istiyor."
  - "Davlumbazın fişini çek ya da sigortayı kapat; cihaz çalışmış olduysa soğumasını bekle."
  - "Yağ filtresini alttan elle tutarak kilitlerini aç ve tutuculardan çıkar."
  - "Eski karbon filtreyi döndürerek tutucudan çekip çıkar."
  - "Yeni karbon filtreyi yuvasına yerleştir, çevirerek tam oturduğundan emin ol."
  - "Yağ filtresini yerine tak; kilitlerin oturduğunu kontrol et."
  - "Eski filtreyi yıkayıp geri takma; değişim tarihini not et."
faq:
  - q: "Davlumbaz karbon filtresi ne kadar sürede değişir?"
    a: "Kılavuzlar süreyi kullanıma göre veriyor. Siemens LC.6KPJ.0 normal işletimde, yani günde yaklaşık bir saat kullanımda her 6 ayda bir değiştirmeni istiyor. Bosch DWK kılavuzu kullanıma bağlı olarak her 3-5 ayda bir diyor, arıza tablosunda ise normal şartlarda 3 ayda bir yazıyor. Silverline 4260 süre vermeden belirli aralıklarla değiştirilmesini istiyor."
  - q: "Karbon filtre yıkanır mı?"
    a: "Hayır. Bosch kılavuzu karbon filtrelerin kesinlikle yıkanmaması gerektiğini yazıyor. Siemens koku filtresinin temizlenemeyeceğini ve rejenere edilemeyeceğini, Vestel ve Silverline ise yıkanamayacağını belirtiyor."
  - q: "Her davlumbazda karbon filtre var mı?"
    a: "Hayır. Bosch kılavuzu aktif karbon filtrenin bacası bulunmayan ortamlarda, yani içerideki havanın filtre edilerek tekrar içeriye verildiği kullanımda gerektiğini yazıyor. Bacalı kullanımda bu filtre gerekmez; kendi modelinin kılavuzuna bak."
  - q: "Karbon filtreyi takınca yağ filtresini çıkarabilir miyim?"
    a: "Hayır. Bosch kılavuzu karbon filtre kullanılsın ya da kullanılmasın her durumda yağ filtrelerinin üründe takılı olması gerektiğini ve ürünün yağ filtresiz kullanılmamasını yazıyor."
images:
  coverAlt: "Açık duran davlumbaz filtre kapağı ve yanında yeni bir yuvarlak karbon filtre"
  steps:
    - "Masada yeni bir karbon filtre ve yanında kutusu, bir tarafta alışveriş sepeti simgesi"
    - "Prizden çekilmiş fiş ve davlumbaz çizimi, yanında soğuma simgesi"
    - "Beyaz eldivenli sade siluet el davlumbazın yağ filtresini alttan tutarak çıkarıyor"
    - "Beyaz eldivenli sade siluet el eski karbon filtreyi döndürerek tutucudan çekiyor"
    - "Beyaz eldivenli sade siluet el yeni karbon filtreyi yuvasına yerleştirip döndürüyor"
    - "Yağ filtresi yerine oturmuş davlumbaz ve kilidin yerine geçtiğini gösteren onay işareti"
    - "Eski karbon filtre üzerinde çarpı işareti ve yanında takvim simgesi"
---

Davlumbazın yağ filtresi ayda bir yıkanır ama karbon filtre yıkanmaz, değiştirilir. Çoğu kullanıcı bunu ikisini karıştırıp filtreyi yıkayınca öğrenir. Bu yazıda karbon filtrenin ne zaman ve nasıl değiştirileceğini üreticilerin kendi Türkçe kılavuzlarından topladık: **Siemens** LC.6KPJ.0, **Bosch** DWK serisi ve **Vestel** AD-63330 ve **Silverline** 4260. Kendi davlumbazının kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik:** Bosch kılavuzu karbon filtreyi değiştirmeden önce cihazın enerjisinin kesilmesini istiyor. Siemens, temizlemeden önce fişin çekilmesini ya da sigortanın kapatılmasını ve cihazın soğumasının beklenmesini yazıyor.

## Kılavuzlar ne diyor

| Konu | Siemens LC.6KPJ.0 | Bosch DWK | Vestel AD-63330 | Silverline 4260 |
|---|---|---|---|---|
| **Değişim süresi** | 6 ay, günde yaklaşık bir saat kullanımda (s.8) | 3-5 ay; arıza tablosunda 3 ay (s.10, s.23) | Bacasız kullanımda 6 aydan eski olmamalı (s.20) | Belirli aralıklarla, süre yok (s.6) |
| **Yıkanır mı?** | Temizlenemez, rejenere edilemez (s.8) | Hiçbir zaman yıkanmaz (s.10) | Yıkanamaz (s.17) | Yıkanamaz (s.6) |
| **Nereden alınır?** | Müşteri hizmetleri ya da çevrimiçi satış merkezi (s.8) | Servis ya da satıcı (s.10) | Karbon için yazmıyor; alüminyum filtre için yetkili servis (s.17) | Yetkili servis (s.6) |

## Adım adım: karbon filtre değişimi

**1. Yedek filtreyi önceden temin et.** Siemens yalnızca **orijinal** koku filtrelerinin kullanılmasını istiyor ve filtreyi müşteri hizmetlerinden ya da çevrimiçi satış merkezinden almanı söylüyor. Bosch aktif karbon filtrenin **servisten ya da satıcıdan** temin edilmesini, Silverline yedek filtrenin yetkili servislerden alınmasını yazıyor.

**2. Enerjiyi kes.** Davlumbazın fişini çek ya da sigorta kutusundan ilgili sigortayı kapat. Siemens ayrıca cihazın soğumasını beklemeni istiyor.

**3. Yağ filtresini çıkar.** Karbon filtre yağ filtresinin arkasında duruyor. Siemens'e göre yağ filtresi **alttan elle** tutulmalı, kilitleri açılmalı ve filtre tutuculardan çıkarılmalı; yağ damlamasını önlemek için yere paralel tutulmalı. Düşen filtre altındaki ocağa zarar verebilir. Bosch'ta alüminyum filtrenin tırnağına ok yönünde bastırıp kendine doğru çekiyorsun.

**4. Eski karbon filtreyi çıkar.** Siemens kılavuzu eski koku filtresinin **döndürülüp tutucudan çekerek** çıkarılmasını söylüyor. Vestel'de filtre **saat yönünün tersine çevrilerek** çıkıyor; kılavuz bu modelde iki karbon filtre kullanılması gerektiğini de yazıyor.

**5. Yeni filtreyi tak.** Siemens'te yeni filtre tutucuya **bastırılıp döndürülüyor.** Vestel'de motor kapağındaki kanallarla filtredeki tırnaklar aynı hizaya getirilip **saat yönünde yarım tur** çevriliyor. Bosch'ta filtre yuvasına yerleştirilip **saat yönünde çevrilerek** tamamen takıldığından emin olunuyor. Kılavuz uyarısı net: karbon filtre tam takılmazsa **düşebilir** ve ürüne zarar verebilir.

**6. Yağ filtresini yerine tak.** Siemens'e göre filtre alttan tutulup yukarı kaldırılır, kilitler yerine oturtulur ve oturduklarından emin olunur. Bosch karbon filtre kullanılsın ya da kullanılmasın yağ filtrelerinin **her durumda** üründe takılı olmasını istiyor; ürünü yağ filtresiz çalıştırma.

**7. Eskiyi yıkama, tarihi not et.** Eski karbon filtreyi yıkayıp geri takma. Bosch karbon filtrenin hiçbir zaman yıkanmamasını, Siemens temizlenememesini, Vestel ve Silverline yıkanamamasını yazıyor. Bir sonraki değişimi unutmamak için tarihi bir yere yaz.

## Karbon filtre hangi davlumbazda var?

Bosch kılavuzuna göre aktif karbon filtre **bacası bulunmayan** ortamlarda, yani havanın filtre edilip tekrar mutfağa verildiği kullanımda gerekiyor. Bacayla dışarı atan kullanımda bu adımlar sana düşmez. Hangi kullanımda olduğunu anlamak için [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/) yazısındaki bacalı-bacasız ayrımına bak.

## Yağ filtresi ayrı bir bakım

Karbon filtre değişirken yağ filtresine de el değdiği için ikisinin aralığını karıştırmak kolay. Siemens yağ filtresini **en az 2 ayda bir** temizlemeni öneriyor ve yağ birikintilerinin alev alabildiği için yangın tehlikesine karşı düzenli temizliği şart koşuyor. Bosch arıza tablosunda alüminyum kaset filtrenin normal şartlarda **ayda 1 kez** yıkanmasını yazıyor. Silverline metal filtrelerin **2-3 haftada bir** temizlenmesini istiyor. Yani yağ filtresi sık yıkanır, karbon filtre seyrek değiştirilir. Süreler markaya ve kullanıma göre değiştiği için kendi kılavuzundaki aralığı esas al.

## Süreler neden farklı?

Kılavuzların sayıları aynı değil ve bu normal. Siemens süreyi günde yaklaşık bir saatlik kullanıma bağlıyor, Bosch ise kullanıma göre 3-5 ay veriyor; Bosch'un kendi arıza tablosunda ise normal şartlar için 3 ay yazıyor. Vestel bacasız kullanımda filtrelerin 6 aydan eski olmamasını istiyor, Silverline sayı vermiyor. Kılavuzların ortak noktası, süreyi kullanıma bağlamaları: Siemens "normal işletim" tanımını günde yaklaşık bir saatle yapıyor, Bosch "kullanıma bağlı" diyor. Kendi mutfağındaki kullanımı bu tanımlarla karşılaştır ve süre kısa tarafa yakınsa filtreyi erken değiştirmekten çekinme.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Karbon filtre değişimi, yağ filtresini çıkarıp takma | Senin, bu yazıdaki adımlar |
| Yedek filtre bulunamıyor | Servis ya da satıcı, kılavuza göre |
| Değiştirdin ama sorun sürüyor | Müşteri hizmetleri ya da yetkili servis |

⛔ Davlumbazın gövdesini açma, motora ya da karta dokunma.

Yağ filtresinin temizliği için [davlumbaz yağ filtresi nasıl temizlenir](/blog/davlumbaz-yag-filtresi-nasil-temizlenir/), çekiş şikâyeti için [Bosch davlumbaz çekmiyor](/blog/bosch-davlumbaz-cekmiyor/) yazısına, filtre simgesi yanıyorsa [Siemens davlumbaz filtre uyarısı](/blog/siemens-davlumbaz-filtre-uyarisi/) yazısına bak.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
