---
title: "Vestel klima soğutmuyor: evde kontrol"
description: "Vestel klima üflüyor ama soğutmuyorsa kılavuzun sırası: sıcaklık ayarı, 3 dakikalık kompresör koruması, kapı-pencere, hava yolu ve toz filtresi."
slug: "vestel-klima-sogutmuyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki klima belirti partisi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Vestel'in kendi alan adı.
# Web araması YALNIZ belgenin yerini bulmak için. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-sprint/ · pdftotext -layout -f N -l N.
#  V1) Vestel "Klima Kullanım Kılavuzu · Nova Inverter 12 A++ GI WIFI R32", 48 s., md5 8814dd2a3ddbfd95d191e6e3b3af5d7e (PDF sayfası = basılı sayfa)
#      https://statik.vestel.com.tr/webfiles/20234421_k.pdf
#      s.34 "Klima hava üflüyor ama soğutma ve ısıtma performansı kötü." → "Sıcaklık ayarlamasında hata var. | Uygun bir sıcaklık ayarlayın." / "Hava filtresi toz ile tıkanmış. | Toz filtrelerini temizleyin." / "Klimanın hava girişi veya çıkışı tıkanmış. | Tıkanmaya neden olan malzemeleri temizleyin." / "Kapılar veya pencereler açık. | Pencere ve kapıları kapatın."
#      s.35 "Klima hava üflüyor ama soğutma yapmıyor." → "Klimanın hava girişi veya çıkışı tıkanmış. | Tıkanmaya neden olan malzemeleri temizleyin ve klimayı yeniden çalıştırın." / "Kompresör koruması (3dk). | Bekleyin." / "Sıcaklık ayarlaması hatalı. | Uygun bir sıcaklık ayarlayın."
#      s.34 giriş: "Klimanız hala normal çalışmasına devam etmiyorsa İletişim Merkezi veya en yakın Yetkili Servis ile irtibata geçiniz."
#      s.32 "UYARI: Temizleme işlemlerine başlamadan önce mutlaka klimanızı kapatın ve gelen elektriği sigortadan kesin." / "Filtreleri düzenli olarak temizleyiniz. Zamanla kirlenen filtreler ısıtma, soğutma, hava akışı ve nem giderme işlevlerinin verimini düşürecek" / "Serin havayı odada tutmak için kapı ve pencereleri mümkün olduğunca kapalı tutun." / "DİKKAT: ... iç ve dış ünitelere yılda en az bir kez yetkili servisler tarafından kapsamlı bakım yapılmalıdır."
#      s.31 "Klimanız çalışırken güneş ışınlarının doğrudan içeri girmesine engel olun. Güneşlik ve perde varsa kapalı tutun" / "UYARI: ... Temizlik ya da bakım amacıyla ön kapağı açmadan önce klimanızın kapalı olduğundan emin olun." (UV-C'li model)
#      s.33 "Toz filtreleri yaklaşık olarak haftada bir kez temizlenmeli" / "Toz filtrelerini temizlemek için klima ön kapağını sol ve sağ yanlarından tutarak açın." / "Toz filtrelerini alt kenarlarından tutarak kaldırın ve aşağı doğru çekin." / "Elektrikli süpürge ile filtrelerin tozunu alın. Filtreler çok kirli ise ılık su ve yumuşak deterjan ile yıkayın. Filtreleri yerine takmadan önce mutlaka gölgede kurutun. Kurutmayı kesinlikle güneş ve ateş ile yapmayın. Filtreleri 40°C 'den sıcak suda yıkamayın." / "filtrenin üst kısmını yuvasına yerleştirin ve alt kısmından yerine oturana kadar bastırın." / "DİKKAT: Toz filtresi dışındaki filtreleri kesinlikle yıkamayınız." / "DİKKAT: Klimanızı kesinlikle filtresiz çalıştırmayın." / "UYARI: Klimanızdaki filtrelerin temizliğini yetkili servis çağırmadan kendiniz yapabilirsiniz."
#      s.36 "Hata mesajları ... Er ... Bu durumda klimaya herhangi bir şey yapmayın ve Yetkili Servis ile iletişime geçin."
#      s.9 "Klimanızda herhangi bir arıza meydana gelirse, klimayı kendiniz tamir etmeye çalışmayın, klimayı sökmeyin."
#  V2) Vestel "Plazma Inverter 9/12/18/24 A++", 48 s., md5 b08e2688400ea04682d820016c8e8305 · https://static.vestel.com.tr/kullanimkilavuzlari/52162881.pdf · PDF s.35 iki soğutma satırı birebir aynı (çapraz doğrulama).
# BİLEREK YAZILMAYANLAR: gaz/kompresör teşhisi (Vestel tablosunda yok) · dış ünite temizliği · toz filtresi dışındaki filtrelerin değişimi (parça, yetkili servis) · fiyat (kılavuzdaki bakım ücreti cümlesi dahil).
# Alıntı denetim tablosu: vestel-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Yumuşak deterjan"]
steps:
  - "Kumandada soğutma modunda uygun bir sıcaklık ayarlı olduğunu kontrol et."
  - "Klimayı yeni açtıysan ya da kapatıp açtıysan kompresör koruması için 3 dakika bekle."
  - "Kapı ve pencereleri kapat, güneş alan pencerede güneşlik ya da perdeyi çek."
  - "Klimanın hava girişini ya da çıkışını kapatan eşya varsa kaldır ve klimayı yeniden çalıştır."
  - "Klimayı kapat ve gelen elektriği sigortadan kes."
  - "Ön kapağı sol ve sağ yanlarından tutarak aç, toz filtrelerini alt kenarlarından tutup aşağı çekerek çıkar."
  - "Filtrelerin tozunu süpürgeyle al, çok kirliyse ılık su ve yumuşak deterjanla yıka, gölgede kurutup yerine tak."
  - "Sorun sürerse Vestel İletişim Merkezi'ne ya da yetkili servise başvur."
faq:
  - q: "Vestel klima neden hava üflüyor ama soğutmuyor?"
    a: "Vestel kılavuzu iki satır veriyor. 'Soğutma ve ısıtma performansı kötü' satırında sıcaklık ayarındaki hata, tozla tıkanmış hava filtresi, tıkanmış hava girişi ya da çıkışı ve açık kapı-pencere var. 'Soğutma yapmıyor' satırında tıkanmış hava yolu, 3 dakikalık kompresör koruması ve hatalı sıcaklık ayarı var."
  - q: "Vestel klima filtresi ne sıklıkla temizlenir?"
    a: "Nova Inverter kılavuzuna göre toz filtreleri yaklaşık haftada bir temizlenmeli; kullanım sıklığına ve ortama göre değişebilir. Kılavuz bu temizliği yetkili servis çağırmadan kendin yapabileceğini yazıyor; toz filtresi dışındaki filtrelerin yıkanmamasını ve klimanın filtresiz çalıştırılmamasını istiyor."
  - q: "Klimayı açtım, hemen soğuk hava gelmedi. Arıza mı?"
    a: "Vestel tablosunda bunun bir nedeni 'Kompresör koruması (3dk)' ve çözümü 'Bekleyin.' Klimayı yeni açtıysan ya da kapatıp açtıysan birkaç dakika bekle."
  - q: "Filtreyi temizledim, yine soğutmuyor. Ne yapmalıyım?"
    a: "Vestel'e göre tablodaki açıklamaları denedikten sonra klima hâlâ normal çalışmıyorsa İletişim Merkezi'ne ya da en yakın yetkili servise başvurmalısın. Kılavuz ayrıca iç ve dış ünitelere yılda en az bir kez yetkili servis tarafından kapsamlı bakım yapılmasını istiyor."
images:
  coverAlt: "Güneşli bir oturma odasında yarıya kadar çekilmiş perdenin yanında duvarda çalışan beyaz split klima"
---

Klima açık, hava da geliyor, ama oda serinlemiyor. Vestel'in Türkçe kullanım kılavuzu bu belirtiyi iki ayrı satırla ele alıyor: **"Klima hava üflüyor ama soğutma ve ısıtma performansı kötü."** ve **"Klima hava üflüyor ama soğutma yapmıyor."** İkisinin çözüm sütununda da servis yerine önce senin yapabileceğin işler var: **"Uygun bir sıcaklık ayarlayın."**, **"Toz filtrelerini temizleyin."**, **"Pencere ve kapıları kapatın."** Bu yazıda Vestel'in iki satırını tek bir kontrol sırasına çeviriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcaklık ayarı doğru mu? Klimayı yeni açtıysan 3 dakika kompresör korumasını bekle. Kapı-pencere kapalı, güneş perdesi çekili mi? Hava girişinin ya da çıkışının önü açık mı? Sonra klimayı kapat, sigortadan elektriği kes, toz filtresini temizle. Sürerse → Vestel İletişim Merkezi ya da yetkili servis.

## Vestel'in iki satırı

| Vestel'in satırı | Neden | Vestel'in çözümü |
|---|---|---|
| Performans kötü | Sıcaklık ayarlamasında hata | Uygun bir sıcaklık ayarlayın |
| Performans kötü | Hava filtresi toz ile tıkanmış | Toz filtrelerini temizleyin |
| Performans kötü | Kapılar veya pencereler açık | Pencere ve kapıları kapatın |
| İkisi de | Klimanın hava girişi veya çıkışı tıkanmış | Tıkanmaya neden olan malzemeleri temizleyin (ve yeniden çalıştırın) |
| Soğutma yapmıyor | Kompresör koruması (3 dk) | Bekleyin |

Vestel kılavuzunun çalıştırma önerileri de aynı yöne bakıyor: kirlenen filtreler soğutma ve hava akışı verimini düşürür; serin havayı odada tutmak için kapı ve pencereler mümkün olduğunca kapalı tutulmalı, güneş ışınlarının doğrudan içeri girmesi engellenmeli.

## Adım adım: evde denenecekler

**1. Sıcaklık ayarı.** Kumandada soğutma modunda uygun bir sıcaklık ayarlı olduğunu kontrol et. Vestel her iki satırda da sıcaklık ayarındaki hatayı ilk nedenlerden biri olarak sayıyor.

**2. Kompresör koruması.** Klimayı yeni açtıysan ya da kapatıp açtıysan kompresör koruması için 3 dakika bekle. Vestel tablosunun çözümü burada tek kelime: "Bekleyin."

**3. Kapı, pencere, güneş.** Kapı ve pencereleri kapat, güneş alan pencerede güneşlik ya da perdeyi çek. Vestel klima çalışırken güneş ışınlarının doğrudan içeri girmesinin engellenmesini istiyor.

**4. Hava yolu.** Klimanın hava girişini ya da çıkışını kapatan eşya varsa kaldır ve klimayı yeniden çalıştır. Bu adım iç ünitenin önündeki ve altındaki eşyalar için; dış üniteye yalnız balkondan güvenle erişebiliyorsan bak, ulaşılamayan bir cepheye çıkma.

**5. Önce elektrik.** Klimayı kapat ve gelen elektriği sigortadan kes. Vestel kılavuzu temizliğe başlamadan önce bunu mutlaka yapmanı istiyor; UV-C temizlik sistemli modellerde ön kapağı açmadan önce klimanın kapalı olduğundan emin olmanı ayrıca hatırlatıyor.

**6. Filtreyi çıkar.** Ön kapağı sol ve sağ yanlarından tutarak aç, toz filtrelerini alt kenarlarından tutup aşağı çekerek çıkar. Vestel bu temizliği yetkili servis çağırmadan kendin yapabileceğini yazıyor.

**7. Temizle ve tak.** Filtrelerin tozunu süpürgeyle al, çok kirliyse ılık su ve yumuşak deterjanla yıka, gölgede kurutup yerine tak. 40°C'den sıcak su kullanma, filtreyi güneşte ya da ateş yanında kurutma. Takarken filtrenin üst kısmını yuvasına yerleştir, alt kısmından yerine oturana kadar bastır. Toz filtresi dışındaki filtreleri yıkama ve klimayı filtresiz çalıştırma. Vestel toz filtrelerinin yaklaşık haftada bir temizlenmesini istiyor; genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse Vestel İletişim Merkezi'ne ya da yetkili servise başvur. Kılavuzun sorun giderme bölümü sınırı tam burada koyuyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Sıcaklık ayarı, 3 dakika bekleme, kapı-pencere-perde, hava yolu, toz filtresi | Senin, bu rehberdeki adımlar |
| Ekranda Er ile başlayan hata mesajı | Klimaya bir şey yapma, yetkili servis |
| Tablodaki kontrollerden sonra hâlâ soğutmuyor | Vestel İletişim Merkezi ya da yetkili servis |
| Toz filtresi dışındaki filtrelerin yenilenmesi, iç ve dış ünitenin yıllık kapsamlı bakımı | Yetkili servis |

⛔ Gaz hattına, dış ünitenin içine ve elektrik bağlantılarına dokunma. Vestel kılavuzu klimada bir arıza olursa kendin tamir etmeye çalışmamanı ve klimayı sökmemeni istiyor.

Ekrandaki kodların anlamı [Vestel klima hata kodları](/blog/vestel-klima-hata-kodlari/) yazısında. Klima hiç açılmıyorsa [Vestel klima çalışmıyor](/blog/vestel-klima-calismiyor/) yazısına, markadan bağımsız sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Sorun giderme satırları, temizlik ve filtre adımları, çalıştırma önerileri ve servis sınırı Vestel'in vestel.com.tr'deki Türkçe kullanım kılavuzlarından (Nova Inverter 12 A++ GI WIFI; soğutma satırları Plazma Inverter 9/12/18/24 A++ kılavuzunda da aynı) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
