---
title: "Airfel klima soğutmuyor: evde kontrol"
description: "Airfel klima az soğutuyorsa kılavuzun çözüm tablosu: ayar sıcaklığı, SESSİZ işlevi, kapı-pencere ve güneş, ısı kaynakları, hava yolu, filtre ve servis sınırı."
slug: "airfel-klima-sogutmuyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belge bu koşuda (10:53) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Airfel'in kendi alan adı (airfel.com; adres Airfel'in ürün sayfasındaki doküman bağlantısından, web araması kullanılmadı).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/airfel-klima-kullanim-kilavuzu1.pdf · pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı "◄Sayfa N►" numarası iki eksik). PDF'in ilk 54 sayfası Türkçe (s.41-53 uzaktan kumanda kılavuzu), sonrası İngilizce.
#  AF1) Airfel "Duvar Tipi Split Klima · Kullanım ve Kurulum Kılavuzu" LTXM25/35/50/71NV1B · LRXM25/35/50/71NV1B, 108 s., md5 b4650da08d110b4a7001a401bb303284
#      https://airfel.com/uploads/files/Airfel_Klima_Kullan%C4%B1m_K%C4%B1lavuzu1.pdf (ürün sayfası: https://airfel.com/tr/tr/detail/sezonsal-inverter-split-klima/duvar-tipi-inverter-klima-ltxm25n-9000-btuh-a)
#      s.16 "Sorunlar ortaya çıktığında onarım şirketiyle irtibata geçmeden önce lütfen aşağıdaki hususları kontrol edin." · "Düşük Soğutma Performansı" Olası Nedenler | Çözüm → "Sıcaklık ayarı, ortam sıcaklığından daha yüksek olabilir | Sıcaklık ayarını düşürün" / "İç veya dış ünitedeki ısı eşanjörü kirlenmiştir | Etkilenen ısı eşanjörünü temizleyin" / "Hava filtresi kirlidir | Filtreyi çıkarın ve talimatlara göre temizleyin" / "Her iki ünitenin hava girişi veya çıkışı tıkalı | Üniteyi kapatın, tıkanıklığı giderin ve yeniden çalıştırın" / "Kapılar ve pencereler açık | Ünite çalışırken tüm kapıların ve pencerelerin kapalı olduğundan emin olun" / "Güneş ışığı aşırı ısıya neden olmuştur | Yüksek ısı ya da parlak güneş ışığı varken pencereleri ve perdeleri kapatın" / "Odada çok fazla ısı kaynağı (insan, bilgisayar, elektronik alet vb.) vardır | Isı kaynaklarının miktarını azaltın" / "Sızıntı ya da uzun süreli kullanım nedeniyle soğutucu akışkan miktarında azalma | Sızıntıları kontrol edin, gerekirse yeniden sızdırmazlık sağlayın ve soğutucu akışkanı tamamen doldurun" / "SESSİZ işlevi etkinleştirilmiş (isteğe bağlı işlev) | SESSİZ işlevi çalışma frekansını düşürerek ünitenin performansını düşürebilir. SESSİZ işlevini kapatın."
#      s.15 "Sıkça Meydana Gelen Sorunlar Aşağıda belirtilen sorunlar bir arıza değildir ve çoğu durumda onarım gerektirmez." · "Ünite SOĞUTMA/ISITMA modundan FAN moduna geçiyor" → "Buzlanmayı önlemek için ünite kendi kendine ayar değiştirebilir. Sıcaklık arttığı zaman, ünite önceden seçilen modda yeniden çalışmaya başlayacaktır." / "Ayarlanan sıcaklığa ulaşılmıştır, bu noktada ünite kompresörü kapatır. Sıcaklık değiştiği zaman ünite yeniden çalışmaya başlayacaktır." · "İç üniteden beyaz buğu çıkıyor" → "Nemli bölgelerde, oda sıcaklığı ile klima havası arasında büyük sıcaklık farkı olması beyaz buğu oluşmasına neden olabilir." · "AÇMA/KAPATMA düğmesine basıldığında ünite açılmıyor" → "Ünitede aşırı yüklenmeyi önleyen 3 dakikalık koruma özelliği bulunur. Kapatıldıktan sonraki üç dakika içinde ünite yeniden çalıştırılamaz." · GÜVENLİK TEDBİRLERİ: "Aşağıdakilerden HERHANGİ BİRİ olursa, ünitenizi derhal kapatın!" (güç kablosu hasarlı/anormal ısınma, yanık kokusu, yüksek/anormal ses, sık sigorta atması, ünitenin içine su/nesne dökülmesi) "BU SORUNLARI KENDİ BAŞINIZA DÜZELTMEYE ÇALIŞMAYIN! DERHAL YETKİLİ SERVİS SAĞLAYICISINA HABER VERİN!"
#      s.17 "NOT: Yukarıda anlatılan kontroller ve arıza tespitleri yapıldıktan sonra sorun devam ederse ünitenizi derhal kapatın ve yetkili servis merkeziyle irtibata geçin." · s.16 "Sorun düzelmezse bölgenizdeki bir satıcı veya en yakın müşteri servis merkeziyle irtibata geçin. Ünitedeki arızayı ayrıntılı bir şekilde açıklayın ve cihazınızın model numarasını belirtin."
#      s.13 "TEMİZLİK VEYA BAKIMDAN ÖNCE DAİMA KLİMA SİSTEMİNİZİ KAPATIN VE FİŞİNİ PRİZDEN ÇEKİN." / "Hava Filtresinin Temizlenmesi Tıkanmış bir klima ünitenizin soğutma verimini azaltabilir ve ayrıca sağlığınızı olumsuz etkileyebilir. Filtreyi iki haftada bir temizleyin. 1. İç ünitenin ön panelini kaldırın. 2. Tokayı gevşetmek için filtrenin ucundaki çıkıntıya basın, yukarı doğru kaldırın sonra kendinize doğru çekin. 3. Şimdi filtreyi dışarı çekin. 4. Filtrenizde küçük bir hava temizleme filtresi varsa bunu büyük filtreden ayırın. Bu hava tazeleme filtresini bir el süpürgesiyle temizleyin. 5. Büyük hava filtresini sabunlu ılık suyla temizleyin. Yumuşak bir deterjan kullanın. 6. Üniteyi temiz suyla yıkayın ardından fazla suyu silkeleyin. 7. Soğuk, kuru bir yerde kurumasını bekleyin, doğrudan güneş ışığına maruz bırakmayın. 8. Kuruduğunda hava temizleme filtresini büyük filtreye yeniden takın, ardından iç ünitedeki yerine geri takın. 9. İç ünitenin ön panelini kapatın." (6. maddede "Üniteyi" yazıyor; bağlamı filtre, İngilizce s.67 "Rinse the filter with fresh water") / "Üniteyi kapattıktan sonra en az 10 dakika hava tazeleme (Plazma) filtresine dokunmayın."
#      s.14 "Filtreyi çıkarırken ünitenin içindeki metal parçalara dokunmayın. Keskin metal kenarlar elinizi kesebilir." / "İç ünitenin içini temizlemek için su kullanmayın." / "240 saat kullanımdan sonra, iç ünitenin gösterge ekranında “CL.” ibaresi yanıp sönecektir Bu, filtrenizin temizlenme zamanının geldiğini gösterir." / "Dış ünitenin her türlü bakım ve temizlik işlemi yetkili satıcı veya lisanslı bir servis sağlayıcısı tarafından yapılmalıdır." / şekil: "Tüm hava giriş ve çıkışlarını kontrol ederek engelleyen herhangi bir şey olmadığından emin olun"
#      s.10 "NOT: Odanın bağıl nemi %80'den az. Klima bu değerin üzerinde çalışırsa klimanın yüzeyinde yoğuşma meydana gelebilir. Lütfen dikey hava akış panjurunu maksimum açıya (zemine dikey olarak) getirin ve fan modunu HIGH (YÜKSEK) olarak ayarlayın" / "Ünitenizin performansını daha da fazla optimize etmek için şunları yapın: • Kapıları ve pencereleri kapalı tutun. ... • Hava girişlerini ve çıkışlarını engellemeyin. • Hava filtrelerini düzenli olarak kontrol edip temizleyin." / SOĞUTMA modu oda 16-32°C, dış 0-50°C (düşük sıcaklık soğutma sistemli modeller -15-50°C) · "Klimanız aşağıdaki sıcaklık aralıklarının dışında kullanıldığında belirli güvenlik koruma özellikleri etkinleşebilir ve ünitenin devre dışı kalmasına sebep olabilir."
#      s.42 "TURBO Düğmesi ... Turbo fonksiyonu, soğutma veya ısıtma sırasında ünitenin önceden belirlenen sıcaklığa en kısa sürede ulaşmasını sağlar (iç ünite bu fonksiyonu desteklemiyorsa bu düğmeye basıldığında herhangi bir işlem gerçekleşmez.)" · s.43 "AŞAĞI Düğmesi İç ortam sıcaklığını 1oC'lik aralıklarla 17oC'ye kadar düşürmek için bu düğmeye basın."
# YAKIN KOPYA: Airfel'in yayında klima sayfası yok. Aynı belirtinin yayındaki başka marka sayfalarıyla (samsung/lg/daikin/mitsubishi-electric/toshiba/vestel/arcelik/baymak-klima-sogutmuyor) gövde ölçümü .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ısı eşanjörü temizliği kullanıcıya (kılavuz "temizleyin" diyor ama iç ünitenin içine su yasak, dış ünite bakımı servis → servis) · soğutucu akışkan kontrol/dolum (servis) · dış ünitenin temizliği (servis) · SESSİZ işlevinin hangi tuşla kapatıldığı (kumanda kılavuzunda SESSİZ düğmesi yok; yalnız "kapatın" yazıldı) · fiyat ve "bakım masrafları" cümlesi.
# Alıntı denetim tablosu: airfel-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yumuşak deterjanlı ılık su", "El süpürgesi (varsa)"]
steps:
  - "Ayar sıcaklığı oda sıcaklığından yüksekse kumandanın AŞAĞI düğmesiyle düşür."
  - "SESSİZ işlevi açıksa kapat."
  - "Klima çalışırken kapı ve pencereleri kapat; güneş vuruyorsa perdeleri de kapat."
  - "Odadaki ısı kaynaklarını azalt."
  - "Klimayı kapat, iç ve dış ünitenin hava giriş ve çıkışını tıkayan eşyayı kaldır, sonra yeniden çalıştır."
  - "Klimayı kapatıp fişini çek; ön paneli kaldırıp filtreyi çıkar, sabunlu ılık suyla temizle, durula, gölgede kurutup yerine tak."
  - "Sorun sürerse klimayı kapat ve model numarasını belirterek Airfel yetkili servisine başvur."
faq:
  - q: "Airfel klima neden az soğutur?"
    a: "Airfel kılavuzunun 'Düşük Soğutma Performansı' satırında dokuz olası neden var: ayar sıcaklığı ortam sıcaklığından yüksek, ısı eşanjörü kirli, hava filtresi kirli, hava girişi ya da çıkışı tıkalı, kapı ve pencereler açık, güneş ışığı aşırı ısı yapmış, odada çok fazla ısı kaynağı var, soğutucu akışkan azalmış ya da SESSİZ işlevi açık. Isı eşanjörü ve soğutucu akışkan servis işidir."
  - q: "Soğuturken klima fana geçiyor, arıza mı?"
    a: "Kılavuz bunu arıza saymıyor. Ayarlanan sıcaklığa ulaşıldığında ünite kompresörü kapatır, sıcaklık değişince yeniden çalışır. Buzlanmayı önlemek için de kendi ayarını değiştirebilir ve sıcaklık artınca önceki moda döner."
  - q: "Klimadan beyaz buhar çıkıyor, normal mi?"
    a: "Airfel kılavuzuna göre nemli bölgelerde oda sıcaklığı ile klima havası arasındaki büyük fark iç üniteden beyaz buğu çıkmasına neden olabilir; bu, onarım gerektirmeyen durumlar arasında sayılıyor."
  - q: "Filtreyi ne sıklıkla temizlemeliyim?"
    a: "Airfel iki haftada bir temizlemeyi öneriyor. Bazı ünitelerde 240 saat kullanımdan sonra iç ünite ekranında CL ibaresi yanıp söner; bu filtre temizliği zamanının geldiğini gösterir."
images:
  coverAlt: "Yaz öğleden sonrası güneşin vurduğu bir salonda yarıya kadar çekilmiş perdeler, duvarda çalışan beyaz split klima ve masada bir dizüstü bilgisayar"
---

Klima çalışıyor, hava da geliyor, ama oda istediğin kadar serinlemiyor. Airfel'in Türkçe kullanım ve kurulum kılavuzu bu belirtiyi sorun giderme tablosunda **"Düşük Soğutma Performansı"** başlığıyla veriyor ve her olası nedenin yanına bir çözüm yazıyor; tablonun girişi de açık: **"Sorunlar ortaya çıktığında onarım şirketiyle irtibata geçmeden önce lütfen aşağıdaki hususları kontrol edin."** Satırların çoğu kumandadan, odadan ya da filtreden çözülüyor; ısı eşanjörü ve soğutucu akışkan ise servisin işi. Bu yazıda Airfel'in tablosunu, kılavuzun "arıza değil" listesiyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ayar oda sıcaklığının üstünde mi? SESSİZ açık mı? Kapı, pencere, perde kapalı mı; odada fazla ısı kaynağı var mı? Ünitelerin önü açık mı? Sonra filtreyi yıka. Sürerse → Airfel yetkili servisi; ısı eşanjörü ve soğutucu akışkan servis işi.

## Airfel'in çözüm tablosu

| Airfel'in olası nedeni | Airfel'in çözümü | Kimin işi |
|---|---|---|
| Ayar sıcaklığı ortam sıcaklığından yüksek | Sıcaklık ayarını düşür | Senin |
| SESSİZ işlevi açık | SESSİZ çalışma frekansını düşürür, kapat | Senin |
| Kapılar ve pencereler açık | Ünite çalışırken kapalı tut | Senin |
| Güneş ışığı aşırı ısı yapmış | Pencereleri ve perdeleri kapat | Senin |
| Odada çok fazla ısı kaynağı (insan, bilgisayar, elektronik alet) | Isı kaynaklarını azalt | Senin |
| Hava girişi ya da çıkışı tıkalı | Üniteyi kapat, tıkanıklığı gider, yeniden çalıştır | Önündeki eşya senin; dış ünitenin bakımı servisin |
| Hava filtresi kirli | Filtreyi çıkar, talimata göre temizle | Senin |
| Isı eşanjörü kirli | Isı eşanjörünü temizle | Yetkili servis |
| Soğutucu akışkan azalmış | Sızıntı kontrolü ve dolum | Yetkili servis |

Kılavuzun "arıza değil" listesinde de bir satır bu belirtiyle karışıyor: ünite soğutmadan fana geçebilir. Ayarlanan sıcaklığa ulaşıldığında kompresör durur, ya da ünite buzlanmayı önlemek için ayarını kendisi değiştirir; iki durumda da sıcaklık değişince eski moduna döner.

## Adım adım: evde denenecekler

**1. Ayar sıcaklığı.** Ayar sıcaklığı oda sıcaklığından yüksekse kumandanın AŞAĞI düğmesiyle düşür. Airfel kumandası sıcaklığı 1°C aralıklarla 17°C'ye kadar düşürüyor. Odanın çabuk serinlemesi için kumandadaki TURBO, desteklenen iç ünitelerde ayarlanan sıcaklığa en kısa sürede ulaşılmasını sağlar.

**2. SESSİZ işlevi.** SESSİZ işlevi açıksa kapat. Kılavuza göre bu isteğe bağlı işlev çalışma frekansını düşürerek ünitenin performansını düşürebilir.

**3. Kapı, pencere, perde.** Klima çalışırken kapı ve pencereleri kapat; güneş vuruyorsa perdeleri de kapat. Airfel bunları iki ayrı satırda sayıyor: açık kapı-pencere ve güneşin yarattığı aşırı ısı.

**4. Isı kaynakları.** Odadaki ısı kaynaklarını azalt. Kılavuz ısı kaynağı örneği olarak insanı, bilgisayarı ve elektronik aletleri sayıyor.

**5. Hava yolu.** Klimayı kapat, iç ve dış ünitenin hava giriş ve çıkışını tıkayan eşyayı kaldır, sonra yeniden çalıştır. Airfel'in tarifi bu sırayı veriyor. Dış ünitenin her türlü bakım ve temizliği ise yetkili satıcı ya da servisin işi; ulaşamadığın bir cephedeyse bu kontrolü servise bırak.

**6. Filtre.** Klimayı kapatıp fişini çek; ön paneli kaldırıp filtreyi çıkar, sabunlu ılık suyla temizle, durula, gölgede kurutup yerine tak. Filtre, ucundaki çıkıntıya basıp yukarı kaldırarak ve kendine doğru çekerek çıkar. Varsa küçük hava temizleme filtresini ayır ve el süpürgesiyle temizle; plazma filtresine ünite kapandıktan sonra en az 10 dakika dokunma. Filtreyi çıkarırken içerideki metal kenarlara dokunma, iç ünitenin içine su verme. Airfel filtrenin iki haftada bir temizlenmesini öneriyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. Sürerse servis.** Sorun sürerse klimayı kapat ve model numarasını belirterek Airfel yetkili servisine başvur. Kılavuz arızayı ayrıntılı anlatmanı ve model numarasını vermeni istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ayar, SESSİZ, kapı-pencere-perde, ısı kaynakları, ünitelerin önü, hava filtresi | Senin, bu rehberdeki adımlar |
| Isı eşanjörü kirli | Airfel yetkili servisi |
| Soğutucu akışkan azalmış ya da sızıntı | Airfel yetkili servisi |
| Dış ünitenin bakım ve temizliği | Yetkili satıcı ya da servis |
| Yanık kokusu, anormal ses, hasarlı ya da ısınan güç kablosu, sık atan sigorta, üniteye su dökülmesi | Üniteyi hemen kapat, kendin düzeltmeye çalışma, yetkili servis |

⛔ İç ünitenin içini suyla temizleme ve dış üniteye kendin bakım yapmaya çalışma; Airfel kılavuzu ikisini de yasaklıyor ya da servise bırakıyor.

Klima hiç açılmıyorsa [Airfel klima çalışmıyor](/blog/airfel-klima-calismiyor/), kışın ısıtmıyorsa [Airfel klima ısıtmıyor](/blog/airfel-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısında.

---

**Kaynak künyesi.** Sorun giderme tabloları, filtre bakımı, çalışma sıcaklıkları ve kumanda düğmeleri Airfel'in airfel.com'daki "Duvar Tipi Split Klima Kullanım ve Kurulum Kılavuzu"ndan (LTXM/LRXM 25-71 NV1B) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
