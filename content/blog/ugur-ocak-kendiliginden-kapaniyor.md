---
title: "Uğur vitroseramik ocak kendiliğinden kapanıyor"
description: "Uğur vitroseramik ocak kendini kapatıyor ya da tuşlara tepki vermiyorsa: 10 saniye kuralı, ıslak panel, zamanlayıcı, çalışma süresi sınırı ve Lo kilidi."
slug: "ugur-ocak-kendiliginden-kapaniyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ocak). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0, application/pdf.
#   Adres ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası.
#  U1) Uğur UAO V604 S MS1 (4 gözlü 60 cm vitroseramik elektrikli ocak)  https://ugur.com.tr/Data/EditorFiles/docs/100838_KK.pdf  28 s.  md5 0ae25d6f4f533e6ccc75542d2a417318
#      ürün: https://ugur.com.tr/uao-v604-s-ms1 · UAO V302 S MS1 (2 gözlü 30 cm, /uao-v302-s-ms1) bağlantısı 100839_KK.pdf aynı md5, birebir aynı dosya.
# Ana satırlar: s.18 "Ocak açıldıktan 10 saniye sonra ısıtıcılara seviye bilgisi girilmemişse, ocak otomatik olarak kapanır." · 4.3.5 ÇOCUK / TUŞ KİLİDİ "...display ünitesinde "Lo" yazısı
#   yazar. Ek olarak çocuk/tuş kilidi ledi yanar." "İlgili işlev etkinleştirildiğinde, açma / kapama işlevi dışındaki butonlar çalışmaz." "Kontrol panelindeki tuşa [simge] belirli bir süre
#   basarak, fonksiyon devre dışı bırakılır." · s.17/19 "Kontrol panelini daima temiz ve kuru tutunuz. Yüzey nemli veya kirliyse işleyişte sorunlara neden olabilir." · s.19 "Ayarlanan sürenin
#   sonunda, ocak otomatik olarak kapanır..." · 4.3.7 DURDURMA VE DEVAM · s.20 4.6 "Tüm seviyelerin belirli bir maksimum çalışma süresi vardır. İlgili periyodun sonunda ocak otomatik
#   olarak kapanacaktır." "Ocak otomatik olarak kapatıldıktan sonra tekrar açılabilir." · 4.8 TAŞMA ALGILAMA "Kullanıcı kontrol panelinde sıvı varsa, sistem otomatik olarak kapanacaktır."
#   · s.16 "Eğer ocağınızın altında bir fırın varsa ve fırın çalışırsa, ocaktaki sensörler pişirme seviyesini düşürebilir veya ocağı devre dışı bırakabilir." · s.21 dört göz 9 notu.
# BİLEREK YAZILMAYANLAR: tuş simgelerinin adı (belgede simge; "çocuk/tuş kilidi tuşu" diye yazıldı) · çalışma süreleri tablosunun değerleri (PDF'te metin değil) · sorun giderme tablosu
#   (bu kılavuzda yok; yazı kılavuzun işlev bölümlerinden kuruldu) · fiyat.
# Alıntı denetim tablosu: ugur-ocak-kendiliginden-kapaniyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Ocağın kullanım kılavuzu"]
steps:
  - "Ocağı açtıktan sonra 10 saniye içinde kullanacağın gözü seçip seviyesini ayarla."
  - "Kontrol panelinde sıvı ya da kir varsa ocak soğukken temizleyip kurula."
  - "Gözün zamanlayıcısı ayarlıysa sürenin bitip bitmediğine bak; gerekirse zamanlayıcıyı iptal et."
  - "Göz uzun süre aynı seviyede çalıştıktan sonra kapandıysa ocağı yeniden aç."
  - "Ekranda Lo yazıyor ve kilit ışığı yanıyorsa çocuk/tuş kilidi tuşuna belirli bir süre basarak kilidi kaldır."
  - "Durdurma-devam fonksiyonu açıksa aynı tuşla kapat."
faq:
  - q: "Uğur ocağım açılıyor ama birkaç saniye sonra kapanıyor."
    a: "Uğur'un vitroseramik ocak kılavuzuna göre ocak açıldıktan 10 saniye sonra ısıtıcılara seviye bilgisi girilmemişse ocak otomatik olarak kapanır. Açma tuşundan sonra gözü seçip seviyeyi 1 ile 9 arasında ayarlaman gerekiyor."
  - q: "Ekranda Lo yazıyor, tuşlar çalışmıyor."
    a: "Lo, çocuk/tuş kilidinin etkin olduğunu gösterir; ayrıca kilit ledi yanar. Kılavuza göre bu işlev açıkken açma/kapama dışındaki tuşlar çalışmaz. Kontrol panelindeki kilit tuşuna belirli bir süre basınca işlev kapanır, Lo silinir ve led söner."
  - q: "Yemek taştı, ocak hemen kapandı."
    a: "Bu Uğur'un taşma algılaması: kontrol panelinde sıvı varsa sistem otomatik olarak kapanır. Kılavuz ayrıca panel yüzeyi yoğun buharla temas ederse kontrol sisteminin devre dışı kalıp hata sinyali verebileceğini yazıyor. Paneli temizleyip kuruladıktan sonra ocağı yeniden kullanabilirsin; temizlikten önce ocağın soğumasını bekle."
  - q: "Dört gözü birden en yüksekte açtım, ikisi ısınmıyor."
    a: "Kılavuza göre dört bölmenin güç kademesi 9 ise aynı anda yalnız ikisi pişirme yapar, belirli bir süre sonra diğer ikisi devreye girer. Uğur bunu normal bir durum olarak, arıza değil diye yazıyor."
images:
  coverAlt: "Dört gözlü siyah vitroseramik ocağın dokunmatik panelinde parlayan küçük kilit ışığı, gözler kapalı"
---

Uğur vitroseramik ocağı açıyorsun, birkaç saniye sonra kendiliğinden kapanıyor; ya da pişirme ortasında göz sönüyor, tuşlar tepki vermiyor. Uğur'un UAO V604 / V302 vitroseramik ocak kılavuzunda ayrı bir sorun giderme tablosu yok, ama ocağın kendini **neden ve ne zaman** kapattığı işlev bölümlerinde tek tek yazıyor. En sık karşılaşılan kural da ilk sayfalarda: **"Ocak açıldıktan 10 saniye sonra ısıtıcılara seviye bilgisi girilmemişse, ocak otomatik olarak kapanır."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Açınca 10 saniyede seviye gir → panel ıslak ya da kirli mi (taşma algılama) → zamanlayıcı süresi doldu mu → uzun süre aynı seviyede miydi (çalışma süresi sınırı) → ekranda Lo var mı (kilit) → durdurma-devam açık mı. Altta çalışan fırın da ocağın gücünü düşürebilir.

## Adım adım: evde denenecekler

**1. Açtıktan sonra 10 saniye içinde seviye gir.** Açma tuşuna bastıktan sonra kullanacağın gözü seç ve seviyeyi **1 ile 9 arasında** ayarla. Kılavuza göre 10 saniye içinde seviye girilmezse ocak kendini kapatır.

**2. Paneli temiz ve kuru tut.** Uğur'un kılavuzu bunu iki ayrı yerde tekrarlıyor: **"Kontrol panelini daima temiz ve kuru tutunuz. Yüzey nemli veya kirliyse işleyişte sorunlara neden olabilir."** Ocağın bir de **taşma algılaması** var: **kontrol panelinde sıvı varsa sistem otomatik olarak kapanır.** Panel yoğun buharla temas ederse kontrol sistemi devre dışı kalıp hata sinyali verebilir. Temizlikten önce ocağın **soğumasını bekle.**

**3. Zamanlayıcıya bak.** Bir göze zamanlayıcı kurulduysa **ayarlanan sürenin sonunda o göz otomatik olarak kapanır** ve sesli uyarı verilir. Kapanma bu yüzdense istersen yeni süre ayarla ya da zamanlayıcıyı iptal et: kılavuza göre gözü seçip zamanlayıcıyı **0**'a düşürmek ya da gözü seçtikten sonra zamanlayıcı tuşuna kısa süre basılı tutmak yeterli.

**4. Çalışma süresi sınırından sonra yeniden aç.** Kılavuza göre **tüm seviyelerin belirli bir maksimum çalışma süresi** var; süre sonunda ocak kendiliğinden kapanır. Süre seçilen güç seviyesine bağlı. Uğur'un notu: **ocak otomatik olarak kapatıldıktan sonra tekrar açılabilir.**

**5. Lo kilidini kaldır.** Ekranda **Lo** yazıyor ve kilit ledi yanıyorsa **çocuk/tuş kilidi** açık. Bu işlev açıkken **açma/kapama dışındaki tuşlar çalışmaz.** Kontrol panelindeki kilit tuşuna **belirli bir süre** basınca işlev kapanır, **Lo** silinir ve led söner.

**6. Durdurma-devam fonksiyonunu kapat.** Bu tuş ocağın **tüm fonksiyonlarını duraklatır.** Yanlışlıkla açıldıysa ocak çalışmıyor gibi görünür; kılavuza göre fonksiyonu devre dışı bırakmak için **aynı tuş** kullanılır.

## Arıza sayılmayan durumlar

- **Dört göz birden 9'dayken ikisinin beklemesi:** aynı anda yalnız ikisi pişirir, belirli bir süre sonra diğer ikisi devreye girer. Uğur: **"Bu durum normal bir durumdur, arıza değildir."**
- **Altta çalışan fırın:** ocağın altında fırın varsa ve çalışıyorsa ocaktaki sensörler **pişirme seviyesini düşürebilir ya da ocağı devre dışı bırakabilir.**
- **Isıtıcının kendi kendine kesilmesi:** vitroseramik ısıtıcılarda sıcaklık algılama probu var; sıcaklık belirli bir değeri geçince ısıtıcının enerjisi otomatik kesilir. Aşırı ısınma koruması da sıcaklık sensörüyle çalışıyor.
- **Kapattıktan sonra "H":** ocak hâlâ sıcak; cam yüzeye dokunma.

Göz hiç ısınmıyorsa markadan bağımsız kontrol listesi için [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Panel kuru, kilit kapalı, zamanlayıcı yok ve 10 saniye kuralına uyduğun hâlde ocak **sürekli kapanıyorsa.**
- Cam yüzeyde **çatlak** varsa: kılavuz çatlamış ocağı kullanmamanı, yüzey hasar görmüşse ürünü hemen kapatıp elektrik bağlantısını kesmeni istiyor.

Uğur'un yönlendirmesi: ürün arızalıysa **Uğur yetkili servisi** tarafından tamir edilmeli. Kılavuzun iletişim bölümüne göre **444 84 87** numaralı çağrı merkezinden yetkili servise ulaşabilirsin.

⛔ **Kendin-çöz sınırı burada biter.** Seviye ayarı, panel temizliği, zamanlayıcı ve kilit kullanıcıya; sensörler, kumanda kartı ve ısıtıcılar servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
