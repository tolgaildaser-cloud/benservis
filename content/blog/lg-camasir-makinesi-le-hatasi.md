---
title: "LG çamaşır makinesi LE hatası"
description: "LG çamaşır makinesi LE hatası: LG'ye göre motorda aşırı yüklenme var. Soğuma beklemesi, yükü azaltma, yabancı cisim kontrolü ve servis sınırı."
slug: "lg-camasir-makinesi-le-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi; PDF'ler pdftotext ile, destek sayfası sayfanın kendi JSON-LD "articleBody" alanından okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle forumdan, servis sitesinden ya da kılavuz arşiv sitesinden alınmadı.
#  A) F4V5RGP2T kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739  (sayfa atıfları bu belgeye göre)
#  B) F4V3VYW3WE kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
#  D) LG TR destek "[LG Çamaşır Makinesi] LE hata kodu" (yayın 2025-09-20)
#     https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153390015747/
#     HTML md5 33cb499145f6b4b69d03feebcc5893ee (koşuya özgü; sayfa her istekte oturum belirteci değiştiriyor) · çıkarılan metin md5 9f543c6b7d652b653cba5d93dbd88bc0 (kararlı)
# Kılavuz satırı üç belgede birebir aynı (A s.52, B s.43, C s.45):
#   "LE MOTOR KİLİTLİ HATASI | Motorda aşırı yüklenme var. • Motor soğuyuncaya kadar cihazın 30 dakika beklemesini sağlayın ve ardından programı yeniden başlatın."
# D: "Hata, çok fazla çamaşır olduğu için motor hareket edemediğinde veya çamaşır makinesi sürekli çalıştırıldığında veya bozuk para veya başka yabancı cisimler sıkıştığında ortaya çıkar."
#    "Gücü prizden çekin, 5 dakika bekleyin, prize takın ve tekrar deneyin." · "... büyük yük veya boyuta sahip yorganlar için Yatak kursunu seçin."
#    "Gücü kapatın, çamaşırları çıkarın, bozuk para veya yabancı cisim olup olmadığını kontrol edin ve bulunursa uygun aletler (pense, cımbız vb.) kullanarak bunları çıkarın."
#    "※ Bu hatayı görmeye devam ederseniz, lütfen elektrik fişini çekin ve LG Electronics servis merkeziyle iletişime geçin."
# Bekleme süresi: kılavuz 30 dk (motor soğuması), destek sayfası 5 dk (geçici hata). Adımda kılavuzun 30 dakikası esas alındı; 5 dakika gövdede ayrıca anıldı.
# Bilerek YAZILMAYANLAR: motor/kart/kömür teşhisi, tambur boşluğuna el ya da aletle derin müdahale (LG yalnız "görünür" cisimleri anıyor), söküm, fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-le-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~40 dakika (30 dakikası bekleme)"
  totalTime: "PT40M"
  cost: "Ücretsiz"
  tools: ["Pense ya da cımbız (gerekirse)"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Motorun soğuması için makineyi 30 dakika dinlendir."
  - "Tambur çok doluysa bir kısım çamaşırı çıkar."
  - "Makine kapalıyken çamaşırları çıkar ve tamburdaki boşlukta görünen bozuk para ya da yabancı cisim var mı bak; varsa pense ya da cımbızla çıkar."
  - "Yorgan gibi büyük eşyaları yıkayacaksan, modelinde varsa Yatak programını seç."
  - "Fişi tak ve programı yeniden başlat."
  - "LE yeniden çıkarsa fişi çek ve LG servisine başvur."
faq:
  - q: "LG çamaşır makinesinde LE hatası ne demek?"
    a: "LG'nin Türkçe kullanım kılavuzlarında LE'nin başlığı motor kilitli hatasıdır ve karşılığı şudur: motorda aşırı yüklenme var. LG Türkiye destek sayfasına göre kod, tamburun dönüşünde bir anormallik olduğunda görülebilir."
  - q: "LE hatasının sebebi ne olabilir?"
    a: "LG Türkiye destek sayfası üç durum sayıyor: çok fazla çamaşır olduğu için motorun hareket edememesi, makinenin sürekli çalıştırılması ve bozuk para ya da başka yabancı cisimlerin takılması."
  - q: "LE hatasında ne kadar beklemeliyim?"
    a: "LG'nin kullanım kılavuzu, motor soğuyuncaya kadar makinenin 30 dakika beklemesini ve ardından programın yeniden başlatılmasını istiyor. LG Türkiye destek sayfası geçici hatalar için fişi çekip 5 dakika beklemeyi öneriyor; kılavuzun 30 dakikası ikisini de kapsar."
  - q: "LE sürekli tekrarlıyorsa ne yapmalıyım?"
    a: "LG'nin talimatı açık: hatayı görmeye devam ediyorsan elektrik fişini çek ve LG servis merkeziyle iletişime geç."
images:
  coverAlt: "Ön yüklemeli bir çamaşır makinesinin tamamen doldurulmuş tamburu; kapak camına kadar dayanmış kalın bir yorgan"
---

Makine yıkamanın ortasında durdu, tambur dönmüyor ve ekranda **LE** yazıyor. LG'nin Türkçe kullanım kılavuzlarındaki hata tablosunda LE'nin başlığı **motor kilitli hatası**, karşılığı da tek cümle: **"Motorda aşırı yüklenme var."** LG'nin önerdiği ilk iş basit: motor soğuyuncaya kadar makineyi **30 dakika** beklet, ardından programı yeniden başlat. LG Türkiye destek sayfası bu kodun sebeplerini de sayıyor; çoğu, yükle ve tamburda kalmış eşyalarla ilgili.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** LE = LG'ye göre motorda aşırı yüklenme var. Sıra şu: fişi çek → 30 dakika beklet → tambur çok doluysa çamaşır azalt → tamburdaki boşlukta görünen bozuk para ya da cisim varsa çıkar → programı yeniden başlat. LE yine çıkıyorsa fişi çek → LG servisi.

## Adım adım: evde denenecekler

**1. Fişi çek.** LG Türkiye destek sayfasının ilk önerisi: gücü prizden çek. Geçici bir hata nedeniyle çıkan kod bu yolla çözülebilir.

**2. 30 dakika bekle.** LG'nin kullanım kılavuzu, **motor soğuyuncaya kadar** makinenin **30 dakika** beklemesini istiyor. Destek sayfası geçici hatalar için 5 dakikadan söz ediyor; motorun soğuması için kılavuzun süresini esas al.

**3. Yükü azalt.** LG'ye göre çok fazla çamaşır, motorda aşırı kuvvet oluşmasına ve tamburun dönmesinin durmasına neden olabilir. Tambur tıka basa doluysa **bir kısım çamaşırı çıkar**.

**4. Tamburdaki boşluğa bak.** LG'nin sorusu: tamburdaki boşluğa takılmış bir **bozuk para ya da yabancı cisim** görüyor musun? Makine kapalıyken çamaşırları çıkar ve kontrol et. Görünen bir cisim varsa LG, **pense ya da cımbız** gibi uygun aletlerle çıkarılmasını söylüyor. LG'nin talimatı yalnız **görünen** cisimleri anıyor.

**5. Büyük eşyaya uygun program seç.** Yorgan gibi büyük ya da hacimli eşyalar için LG, **Yatak** programının seçilmesini öneriyor. Programın adı ve varlığı modele göre değişir; kendi panelinde ya da kılavuzunda bak.

**6. Programı yeniden başlat.** Fişi tak ve programı yeniden başlat.

**7. Tekrarlıyorsa dur.** LG'nin talimatı bu noktada nettir: bu hatayı görmeye devam ediyorsan **elektrik fişini çek** ve LG servis merkeziyle iletişime geç.

## LE tam olarak neyi söylüyor?

LG Türkiye destek sayfasına göre tamburun dönüşünde bir anormallik olduğunda LE hatası oluşabilir. Sayfa üç durum sayıyor:

| Durum (LG'nin ifadesiyle) | Evde yapılacak |
|---|---|
| Çok fazla çamaşır olduğu için motor hareket edemiyor | Bir kısım çamaşırı çıkar; büyük eşyalar için Yatak programı |
| Çamaşır makinesi sürekli çalıştırılmış | Motorun soğuması için 30 dakika beklet |
| Bozuk para ya da başka yabancı cisimler takılmış | Makine kapalıyken görünen cisimleri pense ya da cımbızla çıkar |

Karıştırılan iki kod: LG'nin tablosunda **UE dengesizlik** hatasıdır ve çoğu zaman **az** yükte, tek bir ağır eşyayla görülür. **LE** ise motorun zorlandığını söyler. İkisinin çözümü farklıdır; UE için sıra [LG çamaşır makinesi UE hatası](/blog/lg-camasir-makinesi-ue-hatasi/) yazısında.

## Kodu önlemek için: cepler ve yük

LG'nin yükleme önerisi yabancı cisim sebebini doğrudan hedef alır: **tüm ceplerin boş** olduğunu kontrol et. Kılavuza göre çivi, saç tokası, kibrit, kalem, bozuk para ve anahtar gibi eşyalar hem makineye hem giysilere zarar verebilir. Yıkama sırasında tıkırtı ya da şıkırtı duyarsan LG'nin sorun giderme tablosu, cihazı durdurup tamburda yabancı nesne olup olmadığını kontrol etmeni istiyor.

Makineye yanlışlıkla bir şey kaçtıysa markadan bağımsız sıra için [çamaşır makinesine cisim kaçtı](/blog/camasir-makinesine-cisim-kacti/) yazısına bakabilirsin.

## Sınır nerede biter

Yük, program ve tamburda görünen cisim kullanıcıya aittir; motor ve tamburun arkası değildir. LG'nin uyarısı açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışmayın**; cihaz tamiri yalnızca yetkili personel tarafından yapılmalı.

⛔ **Kendin-çöz sınırı burada biter.** 30 dakika beklettin, yükü azalttın, tamburda cisim yok ve LE yine çıkıyor: fişi çek ve yetkili LG servisine başvur.

## Servisi aramadan önce iki dakikalık özet

1. Tambur ne kadar doluydu, içinde yorgan gibi büyük bir eşya var mıydı?
2. Makine art arda kaç program çalıştı?
3. Tamburdaki boşlukta bozuk para ya da başka bir cisim gördün mü?
4. 30 dakika bekleyip yeniden başlatınca LE geçti mi?
5. Yıkama sırasında tıkırtı ya da şıkırtı duydun mu?

Bu beşine cevabın varsa servise "tambur dönmüyor" yerine somut bir tablo anlatabilirsin. LG'nin diğer kodları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
