---
title: "Toshiba klima soğutmuyor: evde kontrol"
description: "Toshiba klima soğutmuyorsa kılavuzun kontrol noktaları: mod, fan hızı, Sessiz çalışma, POWER SELECTION, kapı-pencere, dış ünite ve filtre."
slug: "toshiba-klima-sogutmuyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Toshiba'nın Türkiye alan adı (toshiba-klima.com.tr).
# Web araması YALNIZ belgenin yerini bulmak için; hiçbir cümle forum/servis sitesinden alınmadı. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-sprint/ · pdftotext -layout -f N -l N, sayfa = PDF sayfası.
#  T1) Toshiba "Montaj Kılavuzu ve Kullanıcı Kılavuzu · Klima (Split Tip)" iç ünite RAS-B05/07/10/13/16/18/24B2KV2G-TR (EN+TR), 36 s., md5 72b5236e8570c72bcb2623dd5963f51c
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaSeiya_new.pdf
#      s.32 "23 PRATİK ÇÖZÜMLER (KONTROL NOKTASI)" · "Soğutma veya Isıtma anormal derecede düşük seviyede." → "• Filtreler tozla kaplanmış. • Isı düzgün ayarlanmamış. • Pencereler ve kapılar açık. • Cihazın dış ünitesindeki hava giriş ve çıkışları tıkalı. • Fan hızının ayarı çok düşük. • Çalışma modu FAN veya DRY. • POWER SELECTION işlevi %75 veya %50'ye ayarlanır (Bu işlev uzaktan kumandaya bağlıdır)."
#      s.32 "19 BAKIM" "DİKKAT • İlk olarak, sigortayı kapatın." · "Hava Filtresi 2 haftada bir temizleyin. 1. Hava giriş ızgarasını açın. 2. Filtreleri hava filtresinin üzerindeyse çıkarın. 3. Elektrikli süpürgeyle temizleyin veya yıkayın ve ardından kurutun. 4. Filtrelerini tekrar takın ve hava giriş ızgarasını kapatın." · "Benzin, tiner, cila veya kimyasal temizleyiciler kullanmayın."
#      s.32 "22 ÇALIŞMA VE PERFORMANS" "1. Üç dakikalık koruma özelliği: Ünitenin bir anda yeniden çalıştırılması veya ON konuma getirilmesi onucunda 3 dakika etkin olmasını engellemek için." · "7. Ünite çalışırken bazı küçük çatırdama sesleri çıkabilir." · çalışma koşulları tablosu "Soğutma –15°C ~ 46°C [dış] 21°C ~ 32°C [oda]"
#      s.31 "16 SESSİZ ÇALIŞMA" "NOT • Belirli koşullar altında QUIET çalışma düşük ses özellikleri nedeniyle uygun soğutmayı yapmaz." · "17 COMFORT SLEEP" "NOT • Soğutma işleminde, ayarlanan sıcaklık 2 saat boyunca saatte 1 derece artar (azami 2 derece artış)."
#      s.30 "5 SESSİZ ÇALIŞMA" (dış ünite) "Sessiz 2 ... Ses düzeyindense Isıtma (veya Soğutma) kapasitesinden ödün verilir." · "9 Hi POWER ÇALIŞMASI Daha hızlı bir soğutma ya da ısıtma işlemi amacıyla ... (DRY ve FAN ONLY modları hariç)" · "Kurutma modu fan hızı yalnızca Oto olarak ayarlanır."
#      s.29 "2 yeni pili (AAA boyunda), (+) ve (–) konumlarına göre takın."
#  T2) Toshiba "Owner's Manual · Air Conditioner (Split Type)" RAS-18/22/24J2KVSG-TR Shorai Edge (EN+TR), 16 s., md5 a5924a17042788945f05e6297adf4c61
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaShoraiEdge.pdf
#      s.12 "23 PRATİK ÇÖZÜMLER (KONTROL NOKTASI)" aynı liste (FAN/DRY satırı bu kılavuzda yok) · "22 BAKIM İlk olarak, sigortayı kapatın." · "Hava filtreleri 2 haftada bir temizleyin."
#      s.16 "gerektiğinde Alarko Carrier Yetkili Satıcı ve Servislerine ulaşabilmek için ... Müşteri Danışma Hattımıza başvurabilirsiniz."
# BİLEREK YAZILMAYANLAR: gaz/soğutucu teşhisi (Toshiba kullanıcı bölümünde yok) · dış ünite temizliği ya da dış üniteye çıkma · POWER SELECTION'ın tuş sırası (Seiya TR'de anlatılmıyor, "kumandaya bağlı") · telefon numarası · fiyat.
# Alıntı denetim tablosu: toshiba-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge"]
steps:
  - "Kumandada çalışma modunun FAN ya da DRY değil, soğutma olduğunu ve sıcaklığın doğru ayarlandığını kontrol et."
  - "Fan hızını yükselt; Sessiz (QUIET) çalışma açıksa kapat."
  - "Kumandanda POWER SELECTION işlevi varsa %75 ya da %50'de kalıp kalmadığına bak."
  - "Odanın kapı ve pencerelerini kapat."
  - "Dış ünitenin hava giriş ve çıkışının önünde bir şey olup olmadığına güvenle erişebildiğin kadar bak."
  - "Klimayı kapat ve sigortasını kapat."
  - "Hava giriş ızgarasını aç, filtreleri çıkar, süpürgeyle temizle ya da yıka, kurut ve geri tak."
  - "Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur."
faq:
  - q: "Toshiba klima neden az soğutur?"
    a: "Toshiba kılavuzunun kontrol noktası tablosu soğutma anormal derecede düşükse şunları sayıyor: filtreler tozla kaplanmış, sıcaklık düzgün ayarlanmamış, pencere ve kapılar açık, dış ünitenin hava giriş-çıkışı tıkalı, fan hızı çok düşük, çalışma modu FAN ya da DRY, POWER SELECTION işlevi %75 ya da %50'ye ayarlı."
  - q: "Sessiz modda klima daha az mı soğutur?"
    a: "Toshiba kılavuzuna göre evet olabilir: belirli koşullarda QUIET çalışma düşük ses özellikleri nedeniyle uygun soğutmayı yapmaz. Dış ünite için Sessiz 2 ayarında da ses düzeyine öncelik verilir ve soğutma kapasitesinden ödün verilir."
  - q: "Klimayı kapatıp açtım, hemen çalışmadı. Arıza mı?"
    a: "Hayır. Toshiba kılavuzu üç dakikalık koruma özelliğini anlatıyor: ünite bir anda yeniden çalıştırıldığında ya da açıldığında 3 dakika devreye girmez. Üç dakika bekle."
  - q: "Gece Comfort Sleep açıkken oda ısınıyor gibi. Neden?"
    a: "Toshiba kılavuzuna göre Comfort Sleep soğutmada ayarlanan sıcaklığı 2 saat boyunca saatte 1 derece artırır (en fazla 2 derece). Bu işlevin bilinçli davranışıdır."
images:
  coverAlt: "Yaz öğleden sonrası bir yatak odasında duvardaki beyaz split klimaya doğru tutulan uzaktan kumanda, arkada kapalı pencere"
---

Klima çalışıyor ama oda bir türlü serinlemiyor. Toshiba'nın Türkçe kullanıcı kılavuzu bu durumu "Pratik Çözümler (Kontrol Noktası)" tablosunda **"Soğutma veya Isıtma anormal derecede düşük seviyede."** satırıyla veriyor. Altındaki yedi maddenin çoğu kumandadan ya da odadan düzeltilebilecek ayarlar: mod, fan hızı, POWER SELECTION, açık kapı-pencere, tıkalı hava yolu ve tozlu filtre. Bu yazıda Toshiba'nın listesini, kılavuzun Sessiz çalışma ve bakım notlarıyla birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kumanda: mod soğutma mı (FAN ya da DRY değil), sıcaklık doğru mu, fan hızı düşük mü, Sessiz çalışma ya da POWER SELECTION %75/%50 açık mı? Sonra oda: kapı-pencere kapalı mı, dış ünitenin önü açık mı? Sonra filtre: sigortayı kapat, filtreyi temizle. Hâlâ soğutmuyorsa → Toshiba yetkili satıcı ve servisi.

## Toshiba'nın kontrol noktaları

Toshiba'nın iki Türkçe kılavuzu (RAS-B…B2KV2G-TR ve Shorai Edge RAS-…J2KVSG-TR) aynı tabloyu taşıyor:

| Toshiba'nın saydığı neden | Kimin işi |
|---|---|
| Çalışma modu FAN ya da DRY | Senin, kumandadan soğutmaya al |
| Sıcaklık düzgün ayarlanmamış | Senin, kumandadan |
| Fan hızının ayarı çok düşük | Senin, kumandadan |
| POWER SELECTION %75 ya da %50'ye ayarlı (kumandaya bağlı) | Senin, kumandada varsa |
| Pencereler ve kapılar açık | Senin |
| Dış ünitenin hava giriş ve çıkışı tıkalı | Güvenle erişebiliyorsan senin, değilse servis |
| Filtreler tozla kaplanmış | Senin, filtre temizliği |

Kılavuz ayrıca iki durumu normal sayıyor: klima kapatılıp hemen açıldığında **üç dakikalık koruma** nedeniyle 3 dakika devreye girmez; çalışırken plastiğin genleşip büzülmesinden küçük çatırdama sesleri gelebilir.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada çalışma modunun FAN ya da DRY değil, soğutma olduğunu ve sıcaklığın doğru ayarlandığını kontrol et. Toshiba tablosu "Çalışma modu FAN veya DRY" ve "Isı düzgün ayarlanmamış" satırlarını ayrı ayrı sayıyor. Kurutma (DRY) modunda fan hızı yalnızca Oto'da kalır, soğutma için doğru mod bu değil.

**2. Fan hızı ve Sessiz çalışma.** Fan hızını yükselt; Sessiz (QUIET) çalışma açıksa kapat. Kılavuz fan hızının çok düşük olmasını nedenler arasında sayıyor ve QUIET çalışmanın belirli koşullarda düşük ses özellikleri nedeniyle uygun soğutmayı yapmadığını yazıyor. Daha hızlı soğutma için kılavuzdaki Hi POWER çalışması da kullanılabilir.

**3. POWER SELECTION.** Kumandanda POWER SELECTION işlevi varsa %75 ya da %50'de kalıp kalmadığına bak. Toshiba bu satırı "Bu işlev uzaktan kumandaya bağlıdır" notuyla veriyor; kumandanda yoksa bu adımı geç, varsa kumandanın kılavuzundaki ayar bölümünden %100'e al.

**4. Kapı ve pencere.** Odanın kapı ve pencerelerini kapat. Toshiba tablosunda "Pencereler ve kapılar açık" ayrı bir neden.

**5. Dış ünitenin önü.** Dış ünitenin hava giriş ve çıkışının önünde bir şey olup olmadığına güvenle erişebildiğin kadar bak. Balkondaki bir dış ünitenin önüne konmuş eşya kaldırılabilir; ulaşılamayan bir cephedeyse bu kontrolü servise bırak, dış üniteye çıkma.

**6. Önce sigorta.** Klimayı kapat ve sigortasını kapat. Toshiba kılavuzunun bakım bölümü "İlk olarak, sigortayı kapatın." diye başlıyor.

**7. Filtreyi temizle.** Hava giriş ızgarasını aç, filtreleri çıkar, süpürgeyle temizle ya da yıka, kurut ve geri tak; sonra ızgarayı kapat. Toshiba filtrelerin 2 haftada bir temizlenmesini istiyor. İç üniteyi ve kumandayı gerekirse nemli bezle sil; benzin, tiner, cila ya da kimyasal temizleyici kullanma. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur. Toshiba'nın Türkiye kılavuzu yetkili satıcı ve servislere Alarko Carrier'ın müşteri danışma hattından ulaşılmasını söylüyor.

## Ne zaman servis?

Toshiba'nın kontrol noktası tablosu yalnız ayar, oda ve filtre maddelerinden oluşuyor. Bunların hepsini denediğin hâlde oda serinlemiyorsa sorun kullanıcı seviyesinin dışındadır.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, fan hızı, Sessiz çalışma, POWER SELECTION, kapı-pencere, filtre | Senin, bu rehberdeki adımlar |
| Dış ünite ulaşılamayan bir yerde ve önü kapalı görünüyor | Toshiba yetkili servisi |
| Tüm kontrollerden sonra hâlâ soğutmuyor | Toshiba yetkili satıcı ve servisi |

⛔ İç ünitenin içine, gaz hattına ve elektrik bağlantılarına dokunma; kılavuz kullanıcıya yalnız filtre ve dış yüzey temizliğini veriyor.

Klima hiç açılmıyorsa sebepler farklı: markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) yazısında. Genel sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Kontrol noktası tablosu, bakım ve filtre temizliği, Sessiz çalışma, Comfort Sleep ve üç dakikalık koruma notları Toshiba'nın toshiba-klima.com.tr'deki Türkçe kullanıcı kılavuzlarından (RAS-B05~24B2KV2G-TR ve Shorai Edge RAS-18/22/24J2KVSG-TR) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
