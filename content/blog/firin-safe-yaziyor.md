---
title: "Fırın ekranında SAFE yazıyor: çocuk kilidi nasıl açılır"
description: "Siemens fırın ekranında SAFE ya da anahtar simgesi çocuk kilidini gösterir. Siemens ve Bosch belgelerine göre kilidin nasıl kapatılacağı ve servis sınırı."
slug: "firin-safe-yaziyor"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P19 #120). origin/main'de SAFE yazısı yok. Yakın: siemens-firin-kapagi-acilmiyor, bosch-firin-sembolleri-ve-anlamlari,
#   simfer-firin-cocuk-kilidi (başka marka), firin-kapagi-acilmiyor.
# Arama kanıtı: BOSLUK.md #120 (OT "fırın çalışmıyor" #4; "fırın safe" tam liste; "bosch fırın hata" #4). Rakip başlık metni kaynak değil, yalnız kanıt.
# Belgeler (bu koşuda indirildi, curl -sL -A "Mozilla/5.0", HTTP 200; _kaynak/firin-safe-yaziyor/):
#  (Si) Siemens destek sayfası "Çocuk kilidi" (fırın)  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/firininiz-hakkinda/cocuk-kilidi  md5 4c5cf0dc16c8d98961a7875796c5655b
#  (Bo) Bosch BO47.1.2 / BO48.1.2 ankastre fırın kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001839632_C.pdf  md5 388cb474b5dc6cb901481b285ac70eda
# Sayfalar: Si tek sayfa · Bo s.15 çocuk kilidi (10, 10.1, 10.2) · Bo s.10 ve s.13 aktif çocuk emniyetinde kapak.
# NOT: "SAFE" kelimesi yalnız Siemens sayfasında geçiyor; Bosch BO47 kılavuzu kilit simgesini anlatıyor, SAFE yazısını anmıyor. Profilo belgesi bulunmadı, yazıda anılmadı.
# BİLEREK YAZILMAYANLAR: Profilo · "SAFE" ile başka bir arıza kodunu ilişkilendirme · kilit tuşunun her modeldeki yeri (modele göre değişir) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Ekrana bak: anahtar ya da kilit simgesi veya SAFE yazısı varsa fırının çocuk kilidi devrede olabilir."
  - "Fonksiyon seçme düğmesini sıfır konumuna getir."
  - "Kilit tuşuna basılı tut; Siemens 4-10 saniye, Bosch BO47 yaklaşık 6 saniye diyor."
  - "Ekrandaki kilit simgesinin ya da SAFE yazısının kaybolduğunu doğrula, sonra fırını normal ayarla."
  - "Elektrik kesintisinden sonra kilidin devre dışı kalıp kalmadığına bak ve gerekirse yeniden ayarla."
  - "Kilit kalkmıyorsa ya da fırın hâlâ çalışmıyorsa model kılavuzuna bak, çözülmezse yetkili servisi çağır."
faq:
  - q: "Fırın ekranında SAFE ne demek?"
    a: "Siemens'in Türkçe destek sayfasına göre dokunmatik ekranda anahtar simgesi ya da SAFE yazısı görünüyorsa fırında çocuk kilidi devrede olabilir. Kilit, çocukların cihazı çalıştırmaması ve ayarları değiştirmemesi için var."
  - q: "SAFE arıza kodu mu?"
    a: "Siemens sayfası SAFE'i hata kodu olarak değil çocuk emniyeti göstergesi olarak anlatıyor. Bosch BO47 kılavuzunda da çocuk kilidi aktifken ekranda kilit simgesi gösteriliyor."
  - q: "Çocuk kilidi açıkken fırın kapağı açılır mı?"
    a: "Modele göre değişir. Bosch BO47 kılavuzu aktif çocuk emniyetinde otomatik kapı açma düzeneğinin çalışmadığını ve kapağın yandaki gömme tutamaktan elle açılabildiğini yazıyor."
  - q: "Bosch ve Profilo için de aynı mı?"
    a: "Bu yazı yalnız Siemens destek sayfasına ve Bosch BO47.1.2 kılavuzuna dayanıyor. Profilo belgesi incelenmedi; kendi modelinin kılavuzu esastır."
images:
  coverAlt: "Dokunmatik ekranlı ankastre fırın; ekranda anahtar simgesi ve yazı alanı"
  steps:
    - "Fırın ekranında anahtar simgesine bakan beyaz eldivenli sade siluet el"
    - "Fonksiyon seçme düğmesini sıfır konumuna getiren beyaz eldivenli sade siluet el"
    - "Kilit tuşuna basılı tutan beyaz eldivenli sade siluet el"
    - "Ekrandaki kilit simgesinin kaybolduğunu gösteren fırın ekranı çizimi"
    - "Fırın fişini prize takan beyaz eldivenli sade siluet el"
    - "Fırının yanında kılavuz tutan beyaz eldivenli sade siluet el"
---

Fırını açmak istiyorsun, ekranda **SAFE** yazıyor ve düğmeler tepki vermiyor. Panikleme: bu çoğu zaman bir arıza değil, çocuk kilidi. **Siemens**'in Türkçe destek sayfası ve **Bosch** BO47.1.2 kullanım kılavuzu bu kilidi, nasıl devreye girdiğini ve nasıl kapatıldığını anlatıyor. Aşağıda bu iki belgedeki bilgileri topladık. "SAFE" kelimesi yalnız Siemens sayfasında geçiyor; Bosch kılavuzu aynı kilidi simgeyle gösteriyor. Kendi fırınının kılavuzu farklı bir şey diyorsa **kendi kılavuzun esastır.**

## Belgeler ne diyor

Siemens destek sayfası, dokunmatik ekranda anahtar simgesi ya da SAFE yazısı görürsen çocuk kilidinin devrede olabileceğini söylüyor. Çocukların cihazı çalıştırmaması ve ayarları değiştirmemesi için fırın çocuk emniyetiyle donatılmış. Sayfaya göre fonksiyon seçme düğmesi sıfır konumundayken anahtar tuşuna 4-10 saniye basılı tutulduğunda çocuk emniyeti devreye giriyor ve ekranda anahtar simgesi ya da SAFE görünüyor.

Bosch BO47.1.2 kılavuzunda ise "Çocuk kilidi" ayrı bir bölüm. Kilit, çocukların yanlışlıkla cihazı açmaması ya da ayarları değiştirmemesi için etkinleştiriliyor; açma ve kapama işlemi kilit tuşuna yaklaşık 6 saniye basılı tutarak yapılıyor.

## Adım adım: SAFE yazısı nasıl kalkar

**1. Ekranı oku.** Siemens'e göre anahtar simgesi ya da SAFE yazısı çocuk kilidinin devrede olabileceğini gösteriyor. Ekranda ayrıca bir hata mesajı varsa onu kılavuzdaki tabloda ayrıca ara. Hata mesajı ile çocuk kilidi ayrı konulardır.

**2. Fonksiyon düğmesini sıfıra getir.** Siemens sayfası kilidi devreden çıkarmak için fonksiyon seçme düğmesinin sıfır konumuna getirilmesini istiyor. Bosch BO47 kılavuzu da kilidi kapatmanın gereksinimi olarak aynı düğmenin sıfırda olmasını yazıyor.

**3. Kilit tuşuna basılı tut.** Siemens'te kilit simgesi kaybolana kadar anahtar tuşuna basılı tutulur ve süre 4-10 saniye aralığında veriliyor. Bosch BO47'de tuşa yaklaşık 6 saniye basılması isteniyor; sonunda kılavuz "Çocuk emniyeti devre dışıdır" diyor. Tuşun yeri modele göre değişir; kılavuzdaki şemaya bak.

**4. Kilidin kalktığını doğrula.** Ekrandaki kilit simgesinin ya da SAFE yazısının kaybolması gerekiyor. Siemens bunu kilidin kalktığının işareti olarak veriyor. Sonra fırını her zamanki gibi ayarlayabilirsin.

**5. Elektrik kesintisinden sonra.** Bosch BO47 kılavuzu çocuk kilidi açıkken elektrik kesilirse, elektrik geldiğinde kilidin devre dışı kalmış olabileceğini yazıyor. Yani kesintiden sonra kilit durumunu kontrol et; kilidi istiyorsan yeniden etkinleştir.

**6. Kilit kalkmıyorsa.** Bosch BO47 kılavuzu kilidin menüdeki temel ayarlarda "kullanılabilir" olarak ayarlanmasını gerektiriyor. Kilit kalkmıyor ya da fırın hâlâ çalışmıyorsa model kılavuzuna ve ekran mesajına bak; çözülmezse Siemens'in önerdiği gibi yetkili servisten randevu al. Elektrik ve iç kontrol kartı servisin işi; kendin açma.

## Çocuk kilidi neden var, neden kendiliğinden devreye girer?

Çocuk kilidi bir arıza korumasından çok kullanıcı koruması. Kılavuzda amaç açık: çocukların yanlışlıkla cihazı açmaması ya da ayarları değiştirmemesi. Siemens sayfasına göre fonksiyon düğmesi sıfır konumundayken kilit tuşuna belirli bir süre (4-10 saniye) basılı tutulduğunda kilit devreye giriyor; kilidi kapatmak için de aynı tuşa basılı tutuluyor. Yani kilit, kullanıcının bilerek yaptığı bir işlem. Fırının bir gün "kilitlendi" görünmesi, birinin bu tuşa basılı tutmuş olmasından ya da kilidin bilinmeden açık bırakılmasından olabilir.

Kilit açıkken fırın hiç tepki vermezmiş gibi görünür; çünkü düğmeler ve ayarlar kilitlidir. Bu yüzden önce SAFE ya da kilit simgesini görmeden "fırın bozuldu" demek erken. Kilit kalkınca fırın normal çalışıyorsa servise gerek yok. Kilidi bilerek kullandıysan, çocukların fırına ulaşabildiği evde sıfırda bırakmak mantıklıdır. Kalkmadan önce ise fırının tüm düğmeleri ve ayarları kilitli kalır; bu, kilidin tam olarak yapması gereken şey.

## Kılavuzunda nasıl bulursun?

Kendi fırınının kılavuzunun içindekiler bölümünde "Çocuk kilidi" başlığını ara. Bosch BO47.1.2 kılavuzunda bu başlık ayrı bir bölüm olarak yer alıyor ve etkinleştirme ile devre dışı bırakma iki ayrı alt başlıkta anlatılıyor. Kılavuzdaki tuş simgesi modelden modele farklı olabiliyor; bu yüzden tuşun yeri için kendi şemana bak. Kilit etkinleştirilmeden önce Bosch'un istediği ön koşullar, fonksiyon düğmesinin sıfırda olması ve temel ayarlarda çocuk emniyetinin "kullanılabilir" olarak ayarlanması.

## Kilit açıkken kapak

Fırın kapağı açılmıyorsa sebep çocuk kilidi olabilir. Bosch BO47 kılavuzu, aktif çocuk emniyeti ya da elektrik kesintisinde otomatik kapı açma düzeneğinin çalışmadığını ve kapağın yandaki gömme tutamak üzerinden elle açılabildiğini yazıyor. Bu özellik her modelde yok; kapağın açılmama sebepleri için [fırın kapağı açılmıyor](/blog/firin-kapagi-acilmiyor/) ve [Siemens fırın kapağı açılmıyor](/blog/siemens-firin-kapagi-acilmiyor/) yazılarına bak.

## Ne zaman servis

- Kilit simgesi ya da SAFE kalktıktan sonra da fırın çalışmıyorsa
- Ekranda kod ya da başka bir hata mesajı varsa
- Kilit tuşuna basınca hiçbir tepki gelmiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kilit durumunu okumak ve tuşu kılavuzdaki gibi kullanmak sende; kart, ekran ve elektrik bağlantısı yetkili servisin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
