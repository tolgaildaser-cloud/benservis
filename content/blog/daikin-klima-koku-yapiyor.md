---
title: "Daikin klima koku yapıyor: ne yapılır?"
description: "Daikin klimadan koku geliyorsa Daikin'in sırası: yanık kokusunda güç kesilir; diğer kokularda havalandırma, filtre ve iç ünite yıkaması."
slug: "daikin-klima-koku-yapiyor"
date: "2026-09-29"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# Belgeler 2026-09-28'de curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200); 2026-09-29'da yeniden indirildi, hepsi HTTP 200; PDF md5'leri birebir aynı.
# PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu. Web araması yalnız belgelerin YERİNİ bulmak için.
#  M) Daikin FTXM-M/CTXM-M kullanım kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1  (sayfa = PDF sayfası; basılı numara bir eksik)
#     s.43 "İç üniteden koku geliyor." → "Ünitenin odadaki mobilyaların veya sigara kokusunu çekmesi ve üflenen havayla birlikte odaya geri vermesi durumunda karşılaşılır. (Böyle bir durumda, iç ünitenin yetkili bir teknisyen tarafından yıkanmasını öneririz. Klimanızı satın aldığınız mağazanın yetkili servisine danışın.)"
#     s.44 UYARI "Anormal bir durum (yanma, koku vb.) meydana geldiğinde, çalışmayı durdurun ve kesiciyi kapalı konuma getirin." / derhal servis listesi: "Bir yanık kokusu varsa." → "Kesiciyi kapalı konuma getirin ve yetkili servisi arayın."
#     s.38 NOT "Kirli filtrelerle çalıştırılırsa: − havadaki koku giderilemez, − hava temizlenemez, − ısıtma veya soğutma performansı düşer ve − koku yapabilir."
#     s.38 titanyum apatit filtre [Temizlik] "3-1 Tozları elektrik süpürgesiyle çekin ve çok kirliyse yaklaşık 10 ila 15 dakika oda sıcaklığında veya ılık suda bekletin." / "3-2 Yıkadıktan sonra, kalan suyu sallayın ve gölgede kurumasını bekleyin." / "Suyunu gidermek için filtreyi sıkmaya çalışmayın."
#     s.35 bakım takvimi: hava filtresi "Her 2 haftada bir"; titanyum apatit filtre "[Temizlik] 6 ayda bir [Değiştirme] 3 yılda bir"; İKAZ temizlik öncesi durdur + kesiciyi kapat
#     s.37 hava filtresi adımları · s.40 "Ünite uzun bir süre kullanılmayacaksa 1. Ünitenin iç kısmını kurutmak için birkaç saat boyunca yalnızca FAN modunda çalıştırın."
#  F) Daikin FTXF50~71 kullanıcı başvuru kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#     s.35 "8.1.8 Belirti: Üniteler koku salabilir · Ünite oda, mobilya, sigara vs. kokusunu emebilir ve ardından onu yeniden yayabilir."
#     s.33 UYARI "İşletimi durdurun ve beklenmedik herhangi bir şey olursa (yanık kokusu, vs.) gücü KAPATIN."
#     s.26 "Sık sık havalandırın. Uzun süreli kullanım havalandırmaya özel önem verilmesini gerektirir." / "Tütsüleme tipi böcek ilacı kullanırken sistemi ÇALIŞTIRMAYIN. Kimyasallar ünite içinde toplanabilir"
#  U) Daikin Ururu Sarara kullanım kılavuzu (TR)  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5  (PDF s.44, basılı 43)
#     "Havada koku var · Klima koku veriyor." → "Klima dışarıdan koku alabilir." / "Ünitede emilen oda kokusu hava akışı ile deşarj edilir. İç üniteyi temizletmenizi öneririz. Yetkili servise başvurunuz."
#  T2) daikin.com.tr "Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 1d34c92f2cffccf7fd7c11edc8844f94 (2026-09-29)
#     "Su sesi, rutubet veya nem kokusu duyuluyorsa, Drenaj hattı tıkanmış ya da hatalı montaj yapılmış olabilir. Servis kontrolü gereklidir."
#  T3) daikin.com.tr "Klima Arızalarında Yapılması Gerekenler Nelerdir?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/klima-arizalarinda-yapilmasi-gerekenler-nelerdir  md5 ff7d78a5a382a1e7f62252239ed94d91 (2026-09-29)
#     "Kirli filtreler hem verim düşürür hem cihazı zorlar hem de iç hava kalitesini kötü etkiler."
# BİLEREK YAZILMAYANLAR: klima içine sprey/dezenfektan sıkma (belgede yok; M s.35 uçucu yağ vb. kullanmayın diyor); serpantin/fan temizliği (iç ünitenin yıkanması kılavuza göre yetkili teknisyen işi);
#   Fan modunda kurutmanın kokuyu gidereceği iddiası (M bunu yalnız uzun süre kullanılmayacak ünite için veriyor → SSS'de o bağlamda anlatıldı); Ururu'ya özel koku önleyici/küf engelleyici işlevler (modele özel, genel adıma çevrilmedi).
# Alıntı denetim tablosu: daikin-klima-koku-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (filtre kuruma hariç)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Elektrikli süpürge", "Nötr deterjan", "Sağlam bir tabure"]
steps:
  - "Kokunun yanık kokusu olmadığından emin ol; yanık kokusu varsa çalışmayı durdur, kesiciyi kapat ve yetkili servisi ara."
  - "Odada sigara, yemek ya da mobilya gibi bir koku kaynağı varsa odayı havalandır."
  - "Klimayı durdur ve kesiciyi kapalı konuma getir."
  - "Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak."
  - "Modelinde titanyum apatit hava temizleme filtresi varsa onu da süpürgeyle temizle; çok kirliyse 10-15 dakika ılık suda beklet, sıkmadan gölgede kurut."
  - "Koku sürüyorsa ya da rutubet kokusu varsa iç ünitenin yıkanması ve drenaj kontrolü için Daikin yetkili servisine başvur."
faq:
  - q: "Daikin klimadan neden koku gelir?"
    a: "Daikin kılavuzlarına göre ünite odadaki mobilya, sigara gibi kokuları emebilir ve üflenen havayla odaya geri verebilir; kılavuz bunu arıza saymıyor. Kirli filtre de rol oynar: Daikin, kirli filtrelerle çalışan klimanın havadaki kokuyu gideremediğini ve koku yapabileceğini yazıyor."
  - q: "Filtreyi temizledim, koku geçmedi. Ne yapmalıyım?"
    a: "Daikin'in önerisi, bu durumda iç ünitenin yetkili bir teknisyen tarafından yıkanması. Klimanı aldığın yerin yetkili servisine danışman öneriliyor. İç ünitenin içini kendin açıp yıkamaya çalışma."
  - q: "Klimadan rutubet ya da nem kokusu geliyor, neden?"
    a: "Daikin Türkiye, su sesi, rutubet ya da nem kokusu duyuluyorsa drenaj hattının tıkanmış ya da montajın hatalı yapılmış olabileceğini ve servis kontrolü gerektiğini yazıyor."
  - q: "Klimadan yanık kokusu geliyor, ne yapmalıyım?"
    a: "Bu, rehberdeki adımların kapsamı dışında. Daikin kılavuzu yanık kokusu gibi anormal bir durumda çalışmayı durdurup kesiciyi kapatmanı ve derhal yetkili servisi aramanı istiyor. Klimayı bu durumda çalıştırmaya devam etmek elektrik çarpmasına ya da yangına yol açabilir."
  - q: "Klimayı sezon sonunda kapatırken ne yapmalıyım?"
    a: "Daikin kılavuzu ünite uzun süre kullanılmayacaksa önce iç kısmını kurutmak için birkaç saat yalnız FAN modunda çalıştırmayı, sonra kesiciyi kapatmayı, hava filtrelerini temizleyip yerine takmayı ve kumandanın pillerini çıkarmayı öneriyor."
images:
  coverAlt: "Pencereleri açılmış, havalandırılan bir oturma odasının duvarında beyaz split klima ve masada çıkarılmış hava filtresi"
---

Klimayı açtığında odaya hoş olmayan bir koku yayılıyor. Daikin'in Türkçe kullanım kılavuzu bu durumu sorun giderme bölümünde **"İç üniteden koku geliyor."** başlığıyla ele alıyor ve açıklamasını veriyor: koku, ünitenin **"odadaki mobilyaların veya sigara kokusunu çekmesi ve üflenen havayla birlikte odaya geri vermesi"** durumunda ortaya çıkar. Kılavuz bu durumda iç ünitenin yetkili bir teknisyen tarafından yıkanmasını öneriyor. Aynı kılavuz, kirli filtrelerle çalışan klimanın **"koku yapabilir"** olduğunu da yazıyor. Bu yazıda evde yapılabilecek kısmı ve servis sınırını Daikin'in belgelerinden anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yanık kokusu varsa çalışmayı durdur, kesiciyi kapat → derhal yetkili servis. Diğer kokularda: odayı havalandır, klimayı durdurup kesiciyi kapat, hava filtresini ve varsa titanyum apatit filtreyi temizle. Koku sürüyorsa ya da rutubet kokusu varsa iç ünite yıkaması ve drenaj kontrolü için yetkili servis.

## Önce güvenlik: yanık kokusu başka bir durum

Daikin kılavuzunun uyarısı nettir: **yanma, koku gibi anormal bir durumda çalışmayı durdur ve kesiciyi kapalı konuma getir.** Kılavuz "bir yanık kokusu varsa" belirtisini derhal yetkili servisi arama listesinde sayıyor; bu durumda klimayı çalıştırmaya devam etmek elektrik çarpmasına ya da yangına yol açabilir. Aşağıdaki adımlar, olağan çalışma sırasında hissedilen kokular içindir.

## Kokunun kaynağı ne olabilir?

| Koku | Daikin belgelerindeki karşılığı | Kimin işi |
|---|---|---|
| Sigara, yemek, mobilya kokusu | Ünite oda kokularını emip üflenen havayla geri verebilir | Havalandırma, filtre; sürerse iç ünite yıkaması için yetkili servis |
| Genel bayat koku, filtre uzun süredir temizlenmedi | Kirli filtreyle klima havadaki kokuyu gideremez ve koku yapabilir | Senin, filtre temizliği |
| Rutubet ya da nem kokusu, su sesi | Drenaj hattı tıkanmış ya da montaj hatalı olabilir | Yetkili servis |
| Yanık kokusu | Anormal durum | Çalışmayı durdur, kesiciyi kapat, derhal yetkili servis |

## Adım adım: evde denenecekler

**1. Kokuyu ayırt et.** Kokunun yanık kokusu olmadığından emin ol; yanık kokusu varsa çalışmayı durdur, kesiciyi kapat ve yetkili servisi ara.

**2. Odayı havalandır.** Odada sigara, yemek ya da mobilya gibi bir koku kaynağı varsa odayı havalandır. Daikin kılavuzu sık sık havalandırmayı ve uzun süreli kullanımda havalandırmaya özel önem verilmesini istiyor. Tütsüleme tipi böcek ilacı kullanırken klimayı çalıştırma; kılavuza göre kimyasallar ünitenin içinde toplanabilir.

**3. Güvenlik.** Klimayı durdur ve kesiciyi kapalı konuma getir. Daikin kılavuzu temizlikten önce bunu şart koşuyor.

**4. Hava filtresini temizle.** Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak. Toz kolay çıkmıyorsa kılavuz ılık suyla seyreltilmiş nötr deterjanı öneriyor; 40°C'den sıcak su, sert fırça ve tiner gibi uçucu maddeler kullanma, alüminyum kanatlara dokunma. Daikin hava filtresinin yaklaşık 2 haftada bir temizlenmesini istiyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**5. Titanyum apatit filtre.** Modelinde titanyum apatit hava temizleme filtresi varsa onu da süpürgeyle temizle; çok kirliyse 10-15 dakika ılık suda beklet, sıkmadan gölgede kurut. FTXM kılavuzu bu filtrenin 6 ayda bir temizlenmesini, 3 yılda bir değiştirilmesini öneriyor; yenisi için yetkili servise danışılıyor. Bu filtre her modelde yok, kendi kılavuzuna bak.

**6. Sürerse servis.** Koku sürüyorsa ya da rutubet kokusu varsa iç ünitenin yıkanması ve drenaj kontrolü için Daikin yetkili servisine başvur. Daikin, oda kokusu üniteye sindiyse iç ünitenin yetkili bir teknisyen tarafından yıkanmasını öneriyor.

## Ne zaman servis?

| Durum | Ne yapmalı |
|---|---|
| Yanık kokusu | Çalışmayı durdur, kesiciyi kapat, derhal yetkili servisi ara |
| Havalandırma ve filtre temizliğinden sonra koku sürüyor | İç ünitenin yetkili teknisyen tarafından yıkanması |
| Rutubet ya da nem kokusu, su sesi | Drenaj ve montaj kontrolü için yetkili servis |

⛔ İç ünitenin ön panelinin ve filtrelerin ötesine geçme; ısı eşanjörüne, fana ve tahliye hattına müdahale etme, klimanın içine sprey sıkma. Daikin kılavuzu iç ünitenin yıkanmasını yetkili teknisyen işi olarak veriyor.

Markadan bağımsız koku sebepleri için [klima koku yapıyor](/blog/klima-koku-yapiyor/) yazısına bakabilirsin. Koku su damlamasıyla birlikte geliyorsa [Daikin klima su damlatıyor](/blog/daikin-klima-su-damlatiyor/) yazısı daha uygun.

---

**Kaynak künyesi.** Koku satırları, yanık kokusu uyarısı, filtre temizliği ve iç ünite yıkaması önerisi Daikin'in Türkçe kullanım kılavuzlarından (FTXM-M/CTXM-M, FTXF50~71 ve Ururu Sarara); rutubet kokusu ve filtre notu daikin.com.tr'deki "Hangi Durumlarda Servis Çağırmalısınız?" ve "Klima Arızalarında Yapılması Gerekenler Nelerdir?" sayfalarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
