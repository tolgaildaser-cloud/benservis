---
title: "Bosch bulaşık makinesi E25 hatası: pompa tıkalı"
description: "Bosch bulaşık makinesi E25: pompa yabancı cisimle tıkanmış ya da pompa kapağı yerine oturmamış. Bosch'un pompa temizliği adımları ve servis sınırı."
slug: "bosch-bulasik-makinesi-e25-hatasi"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/
#  (W) Bosch TR "Bulaşık Makinesi Hata Kodu E25" https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e25
#      HTML md5 1785df81fc675f558d3b6f01669a1f79 (sayfa dinamik; ikinci indirmede HTML md5 değişti) · gövde metni md5 8f715a83fb992643c7baf61c0f704f19 (iki indirmede birebir aynı)
#      "Pompa yabancı bir madde nedeniyle tıkanmış veya pompa kapağı düzgün şekilde takılmamış."
#      "1. Program seçiciyi OFF konumuna getirin. Makineyi fişten çekin. Dikkat: Pompa, cam parçacıkları nedeniyle tıkanmış olabilir. Bu parçalar yaralanmanıza neden olabilir."
#      "2. Filtreyi çıkarın. 3. Pompa kapağını çıkarın. 4. Tüm yabancı maddeleri temizleyin. 5. Pompa çarkının serbestçe dönüp dönmediğini kontrol edin.
#       6. Pompa kapağını kilitleyerek veya vidaları iyice sıkarak yerine takın. 7. Gerekirse filtreleri de doğru şekilde hizalayarak takın."
#  (D) Bosch kullanma kılavuzu "Bulaşık makinesi SM... SB..." https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#      s.38 arıza tablosu (kod glifleri sayfa görüntüsünden okundu; pdftotext glifleri kaydırıyor): "Hata kodu E:25 yanıyor. | Atık su pompası bloke olmuş veya atık su pompasının
#           kapağı yerine oturmamış. | Pompayı temizleyiniz ve kapağı doğru oturtunuz."
#      s.38 "Hata kodu E:24 yanıyor." satırında da sebeplerden biri: "Atık su pompasının kapağı gevşek." → "Kapağı doğru oturtunuz."
#      s.36 "Atık su pompası": "Süzgeçler tarafından tutulmamış olan kaba yemek artıkları veya yabancı cisimler atık su pompasını bloke edebilir. Bu durumda bulaşık suyu süzgeçten daha yüksek bir seviyede olur."
#           Uyarı "Kesilme tehlikesi! Keskin ve sivri cisimler veya cam parçaları su boşaltma pompasını bloke edebilir. Yabancı cisimleri daima dikkatli çıkarınız."
#           Adımlar 1-9: elektrik şebekesinden ayır · üst ve alt sepeti çıkar · süzgeçleri sök · suyu boşalt, gerekirse sünger · beyaz pompa kapağını bir kaşık yardımıyla kaldır, çıkıntısından tut, eğik şekilde içeri doğru kaldır, tamamen çıkar ·
#           kanatlı çarkta yabancı madde/cisim kontrol et, gerekirse gider · kapağı ilk konumuna al, aşağı bastırarak yerine oturt · süzgeçleri monte et · sepetleri yerine tak
#      s.34 süzgeç: "Süzgeç sistemini, sökme işleminin tersi yönünde yeniden takınız ve kapattıktan sonra ok işaretlerinin karşı karşıya olmasına dikkat ediniz."
#      s.35 "Onarım çalışmalarını daima uzman kişilere yaptırınız."
#  (K) Bosch kısa kılavuz SMS4IKW61T (9001626280) https://media3.bosch-home.com/Documents/9001626280_A.pdf  2 s.  md5 8392c0fbccf9c23bb06945067b41989d
#      s.2 "E:61-02 değişimli olarak yanıyor. | Atık su pompası bloke olmuş. ▶ Atık su pompasını temizleyiniz. | Atık su pompasının kapağı gevşek ▶ Atık su pompasının kapağını doğru şekilde oturtunuz."
#      s.2 "Atık su pompasının temizlenmesi" 1-8: "7. Pompa kapağını yerleştiriniz ve aşağı bastırınız. a Pompa kapağı duyulur şekilde yerine oturur. 8. Süzgeç sistemini takınız."
# BİLEREK YAZILMAYANLAR: "E25 = E:61-02'nin karşılığı" denklemi (Bosch böyle bir eşleme yayımlamıyor; yazı yalnız iki kodun aynı sebepleri taşıdığını söylüyor) ·
#   pompa motoru/kart teşhisi (belgelerde yok) · "fişi çek, bekle, yeniden dene" reseti (E25 sayfasında yok) · Siemens/Profilo ortaklığı (bu koşuda onların belgesi indirilmedi) ·
#   vidalı pompa kapağının sökülmesi (W "vidaları iyice sıkarak" diyor; tornavida gerektiren kapak #31 gereği rehber dışında bırakıldı, servise yönlendirildi).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-e25-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bir çay kaşığı", "Sünger", "Koruyucu eldiven"]
steps:
  - "Program seçiciyi kapalı (OFF) konumuna getir ve makinenin fişini çek."
  - "Üst ve alt sepeti çıkar, tabandaki süzgeç sistemini çevirip dışarı al."
  - "Tabanda kalan suyu bir süngerle boşalt."
  - "Beyaz pompa kapağını bir kaşıkla kaldır, çıkıntısından tutup eğik şekilde içeri doğru kaldırarak çıkar."
  - "Kanatlı çarkın çevresindeki yabancı cisimleri dikkatle çıkar; cam kırığına karşı elini koru."
  - "Pompa çarkının serbestçe dönüp dönmediğini kontrol et."
  - "Pompa kapağını ilk konumuna yerleştir ve duyulur şekilde oturana kadar aşağı bastır."
  - "Süzgeçleri ok işaretleri karşı karşıya gelecek şekilde takıp sepetleri yerleştir."
faq:
  - q: "Bosch bulaşık makinesi E25 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfasındaki tanım şu: pompa yabancı bir madde nedeniyle tıkanmış veya pompa kapağı düzgün şekilde takılmamış. Bosch'un kullanma kılavuzundaki arıza tablosu da E:25 için aynı iki sebebi veriyor: atık su pompası bloke olmuş ya da kapağı yerine oturmamış."
  - q: "E25 hatasında ne yapmalıyım?"
    a: "Bosch'un önerdiği iş pompa temizliği: program seçiciyi OFF konumuna getir, fişi çek, filtreyi ve pompa kapağını çıkar, tüm yabancı maddeleri temizle, pompa çarkının serbestçe dönüp dönmediğini kontrol et, kapağı yerine takıp filtreleri doğru hizalayarak yerleştir."
  - q: "Pompa kapağını açarken nelere dikkat etmeliyim?"
    a: "Bosch iki uyarı yapıyor: pompa cam parçacıkları nedeniyle tıkanmış olabilir ve bu parçalar yaralanmana yol açabilir; yabancı cisimleri daima dikkatli çıkar. Kılavuzdaki tarif, beyaz pompa kapağının bir kaşık yardımıyla kaldırılıp çıkıntısından tutularak çıkarılması."
  - q: "Yeni Bosch modelimde E25 değil E:61-02 yazıyor, aynı şey mi?"
    a: "Bosch'un Serie 4 kısa kılavuzunda E:61-02 satırı iki sebep veriyor: atık su pompası bloke olmuş ve atık su pompasının kapağı gevşek. Çözümler de aynı yönde: pompayı temizle, kapağı doğru oturt. Bosch iki kodu birbirine eşleyen bir tablo yayımlamıyor, ama iki satırın anlattığı sebepler aynı; bu yazıdaki temizlik adımları o kılavuzdaki pompa temizliği bölümüyle de örtüşüyor."
  - q: "Pompayı temizledim, E25 yine çıkıyor. Ne yapmalıyım?"
    a: "Bosch'un kullanıcıya verdiği iş pompa temizliği ve kapağın doğru oturtulmasıyla sınırlı. Kılavuzun genel uyarısı, onarım çalışmalarının daima uzman kişilere yaptırılması yönünde. Bu noktada makineyi kapat ve Bosch yetkili servisinden randevu al."
images:
  coverAlt: "Alt sepeti çıkarılmış bir bulaşık makinesinin tabanında kaldırılmış beyaz pompa kapağı ve bir çay kaşığı"
---

Ekranda **E25** yazıyor ve makinenin tabanında su kalmış olabilir. Bosch'un Türkiye destek sayfasında bu kodun karşılığı tek cümle: **"Pompa yabancı bir madde nedeniyle tıkanmış veya pompa kapağı düzgün şekilde takılmamış."** Bosch bu kod için kullanıcıya bir iş tarif ediyor: pompa temizliği. Bu yazıda o adımları, Bosch'un kullanma kılavuzundaki pompa bölümüyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E25 = Bosch'a göre pompa yabancı cisimle tıkanmış ya da pompa kapağı yerine oturmamış. Sıra şu: OFF + fişi çek → sepetler ve süzgeç dışarı → suyu süngerle al → pompa kapağını kaşıkla kaldır → yabancı cisimleri dikkatle çıkar → kapağı klik sesiyle oturt → süzgeçleri doğru tak. Sürerse yetkili servis.

## Adım adım: evde denenecekler

Bosch'un uyarısı baştan: pompa **cam parçacıkları** nedeniyle tıkanmış olabilir ve bu parçalar yaralanmana neden olabilir. Elini körlemesine sokma, önce bak.

**1. Makineyi kapat ve fişini çek.** Bosch'un ilk adımı program seçiciyi **OFF** konumuna getirmek ve makineyi fişten çekmek.

**2. Sepetleri ve süzgeci çıkar.** Üst ve alt sepeti dışarı al. Tabandaki süzgeç silindirini çevirip çöz ve süzgeç sistemini dışarı çıkar.

**3. Tabandaki suyu al.** Kılavuz, pompa bloke olduğunda bulaşık suyunun süzgeçten daha yüksek bir seviyede kaldığını söylüyor. Bu suyu bir süngerle boşalt.

**4. Pompa kapağını çıkar.** Süzgeçler çıkınca görünen **beyaz pompa kapağını** bir kaşık yardımıyla kaldır. Kapağı çıkıntısından tut, eğik şekilde içeri doğru kaldır ve tamamen çıkar.

**5. Yabancı cisimleri temizle.** Kanatlı çarkın çevresinde yemek artığı ya da yabancı cisim var mı bak ve varsa çıkar. Kılavuzun uyarısı: keskin ve sivri cisimler veya cam parçaları pompayı bloke edebilir, bunları **daima dikkatli** çıkar.

**6. Çarkı kontrol et.** Bosch'un E25 sayfasındaki adım: pompa çarkının **serbestçe dönüp dönmediğini** kontrol et.

**7. Kapağı yerine oturt.** Pompa kapağını ilk konumuna yerleştir ve aşağı bastır. Bosch'un Serie 4 kısa kılavuzuna göre kapak **duyulur şekilde** yerine oturur. Bu adım önemli, çünkü E25'in ikinci sebebi kapağın düzgün takılmamış olması.

**8. Süzgeçleri ve sepetleri tak.** Süzgeç sistemini söktüğün yönün tersine takarak yerine koy ve kapattıktan sonra **ok işaretlerinin karşı karşıya** geldiğine dikkat et. Bosch filtrelerin doğru şekilde hizalanarak takılmasını istiyor. Ardından sepetleri yerine tak.

> ⚠️ **Kapsam notu:** Bosch'un E25 sayfası kapağın "kilitlenerek veya vidaları iyice sıkılarak" takılmasından söz ediyor; yani bazı modellerde kapak vidalı. Bu rehber, kılavuzda anlatılan kaşıkla kaldırılan ve bastırınca oturan kapak içindir. Senin makinende kapak vidalıysa açmayı yetkili servise bırak.

## E25 ile E24 ve E:61-02 arasındaki bağ

Bosch'un kullanma kılavuzundaki arıza tablosunda pompa kapağı iki kodda geçiyor. **E:24** satırının sebeplerinden biri "atık su pompasının kapağı gevşek", **E:25** satırı ise "atık su pompası bloke olmuş veya atık su pompasının kapağı yerine oturmamış". Makine suyu atamıyorsa ve ekranda E24 varsa bakılacak ilk yerler için [Bosch bulaşık makinesi E24 hatası](/blog/bosch-bulasik-makinesi-e24-hatasi/) yazısına bakabilirsin.

Yeni nesil Bosch Serie 4 modellerde kodlar **E:61-02** gibi iki parçalı görünür. Serie 4 kısa kılavuzunda E:61-02 için verilen iki sebep, E25'teki sebeplerle aynı: atık su pompası bloke olmuş, atık su pompasının kapağı gevşek. Çözüm de aynı: pompayı temizle, kapağı doğru oturt. Bu modellerin diğer kodları için [Bosch Serie 4 bulaşık makinesi sembolleri ve anlamları](/blog/bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari/) yazısına bakabilirsin.

## Ne zaman servis

Pompa temizlendi, çark serbest, kapak klik sesiyle oturdu ve E25 hâlâ çıkıyorsa Bosch'un kullanıcıya tarif ettiği iş bitmiş demektir. Kılavuzun genel uyarısı açık: gerektiği şekilde yapılmayan onarımlar önemli hasarlara ve ciddi tehlikelere yol açabilir, **onarım çalışmalarını daima uzman kişilere yaptır.**

⛔ **Kendin-çöz sınırı burada biter.** Süzgeç, pompa kapağı ve kapağın altındaki yabancı cisim senin alanın; pompanın kendisi ve makinenin içi yetkili servisin.

Diğer Bosch kodlarının karşılıkları için: [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/). Tabanda su kalıyorsa genel kontrol sırası: [Bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/).

Ekrandaki kodu ve cihaz modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
