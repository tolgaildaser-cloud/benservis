---
title: "Bosch bulaşık makinesi E12 hatası: kireç"
description: "Bosch bulaşık makinesi E12: ısıtma sisteminde kireç birikmiş. Bosch'un önerdiği kireç çözme, tuz ve su sertliği kontrolü adım adım; servis sınırı."
slug: "bosch-bulasik-makinesi-e12-hatasi"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/
#  (W) Bosch TR "Bulaşık Makinesi Hata Kodu E12" https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e-12
#      HTML md5 4a50323b3f8d7e7da92d4fd2c1f48e99 (sayfa dinamik) · gövde metni md5 0946192a50118c8e7ea9d81440d69fb3 (iki indirmede birebir aynı)
#      "Isıtma sisteminde kireç birikimi - Isıtma sistemine zarar vermemek için cihazınızın kireçlerinin temizlenmesi gerekir. Hızlı kireç temizleyici ürünümüzü (00311506),
#       bulaşık makinesi bakım ürünümüzü (00311565) veya bulaşık makineleri için standart kireç çözücü ürünleri kullanmanızı öneririz. Bu ürünleri ambalajlarındaki kullanım talimatlarına uygun şekilde kullandığınızdan emin olun."
#  (D) Bosch kullanma kılavuzu "Bulaşık makinesi SM... SB..." https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#      s.37 (kod glifi sayfa görüntüsünden okundu): "Hata kodu E:12 yanıyor. | Isıtma ünitesi kireçlenmiş veya pislenmiş. | Makine temizlik maddesi veya kireçten arındırma maddesi ile cihazı temizleyiniz.
#           Bulaşık makinesini su sertliğini giderme sistemi ile çalıştırınız ve ayarı kontrol ediniz. → 'Su sertliğini giderme sistemi/Özel tuz', Sayfa 14"
#      s.14 "7° dH (1,2 mmol/l) değerinden daha yüksek sertliğe sahip şebeke suyunda kireç giderme işlemi yapılmalıdır. Bu işlem, özel tuz (rejenere tuzu) yardımı ile … gerçekleşir.
#           Ayarlama işlemi ve böylelikle gerekli tuz miktarı, musluk suyunuzun sertlik derecesine bağlıdır."
#      s.15 "1. Musluk suyunun su sertlik derecesini yerel su işletmesinden öğreniniz. 2. Gerekli dereceyi, su sertliği tablosundan öğrenebilirsiniz." ·
#           "Özel tuzu her zaman bulaşık makinenizi çalıştırmadan hemen önce doldurun. Böylece taşan tuz çözeltisi hemen yıkanır ve yıkama kabında bir korozyon oluşmaz." ·
#           "Özel tuzu … doldurunuz (yemeklik tuz veya tablet kullanmayınız)." · "Dikkat! Deterjan su sertliğini giderme sistemini tahrip ediyor! Özel tuz kabına kesinlikle deterjan veya temizleyici doldurmayınız."
#      s.33 "Sadece özel olarak bulaşık makineleri için üretilmiş temizleme maddelerini/bulaşık makinesi temizleyicilerini kullanınız." · makine temizlik programı: "piyasada satılan makine temizlik maddeleriyle
#           bağlantılı olarak makinenizin temizliği için uygun olan programdır. Yağ ve kireç gibi birikintiler bulaşık makinenizde arızalara neden olabilir." · "makine temizlik programını makinenin içinde bulaşık olmadan çalıştırınız."
#      s.34 "Makineyi, makine temizlik maddesi için uygun bir programda, içinde bulaşık olmadan çalıştırınız. Özel bir makine temizlik maddesi kullanınız, bulaşık deterjanı kullanmayınız.
#           Makine temizlik maddelerinin ambalajları üzerinde yer alan güvenlik uyarılarını ve kullanım bilgilerini dikkate alınız."
#      s.35 "Onarım çalışmalarını daima uzman kişilere yaptırınız."
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu" https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
#      "Deterjan tipi değiştirme, binanıza arıtma sistemi kurulması gibi su sertliğini değiştirecek durumlarda makinenizin tuz ve parlatıcı ayarlarının gözden geçirilmesini öneririz."
#      "Çamaşır suyu, sirke, tuz ruhu, elde yıkama deterjanı gibi kimyasalları bulaşık makinenizde kesinlikle kullanmayınız."
# BİLEREK YAZILMAYANLAR: ürün kodları ve fiyatları (#46; yazıda "Bosch'un kendi bakım ürünleri ya da standart kireç çözücüler" dendi) · sirkeyle/limon tuzuyla kireç çözme (B sirkeyi açıkça yasaklıyor) ·
#   rezistans/ısıtıcı değişimi (#31) · model bazında tuş kombinasyonuyla sertlik ayarı (modele göre değişiyor; D'deki tuş glifleri okunaksız, kullanıcı kendi kılavuzuna yönlendirildi) ·
#   su sertliği tablo değerleri (D'deki tablo glifleri okunaksız; uydurulmadı) · Siemens/Profilo ortaklığı.
# Alıntı denetim tablosu: bosch-bulasik-makinesi-e12-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (program süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi kireç çözücüsü ya da makine temizlik maddesi", "Bulaşık makinesi özel tuzu"]
steps:
  - "Makinedeki bütün bulaşıkları çıkar; kireç temizliği boş makinede yapılır."
  - "Bulaşık makineleri için üretilmiş bir kireç çözücü ya da makine temizlik maddesi seç; bulaşık deterjanı ya da sirke kullanma."
  - "Ürünün ambalajındaki kullanım talimatını ve güvenlik uyarılarını oku."
  - "Makineyi, ambalajdaki talimata göre temizlik maddesine uygun programda boş olarak çalıştır."
  - "Musluk suyunun sertlik derecesini yerel su idaresinden öğren."
  - "Kendi kılavuzundaki tabloya bakarak makinenin su sertliği ayarını kontrol et."
  - "Tuz göstergesi yanıyorsa programı başlatmadan hemen önce özel tuz kabına bulaşık makinesi tuzu doldur."
faq:
  - q: "Bosch bulaşık makinesi E12 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfasına göre E12, ısıtma sisteminde kireç birikimi demek. Bosch'un kullanma kılavuzundaki arıza tablosunda ifade 'ısıtma ünitesi kireçlenmiş veya pislenmiş' şeklinde. Bosch, ısıtma sistemine zarar vermemek için cihazın kireçlerinin temizlenmesi gerektiğini söylüyor."
  - q: "E12 hatasında hangi ürünü kullanmalıyım?"
    a: "Bosch kendi kireç temizleyici ve bakım ürünlerini ya da bulaşık makineleri için üretilmiş standart kireç çözücü ürünleri öneriyor ve bunların ambalajlarındaki kullanım talimatlarına uygun şekilde kullanılmasını istiyor. Kılavuz bulaşık deterjanının makine temizliği için kullanılmamasını söylüyor; Bosch'un bilgilendirme kılavuzu da sirke, çamaşır suyu ve tuz ruhu gibi kimyasalların bulaşık makinesinde kesinlikle kullanılmamasını istiyor."
  - q: "Kireç çözdükten sonra E12 tekrar çıkmasın diye ne yapmalıyım?"
    a: "Bosch'un kılavuzu E12 satırında ikinci bir iş veriyor: bulaşık makinesini su sertliğini giderme sistemiyle çalıştırın ve ayarı kontrol edin. Kılavuza göre 7° dH (1,2 mmol/l) üzerindeki sertlikteki şebeke suyunda kireç giderme yapılmalı ve bu iş özel tuzla gerçekleşiyor. Gerekli ayar musluk suyunun sertliğine bağlı; sertlik derecesini yerel su işletmesinden öğrenebilirsin."
  - q: "Tuz kabına ne koymalıyım?"
    a: "Yalnız bulaşık makinesi özel tuzu. Bosch'un kılavuzu yemeklik tuz ya da tablet kullanılmamasını ve tuz kabına kesinlikle deterjan veya temizleyici doldurulmamasını istiyor; deterjan su sertliğini giderme sistemini tahrip ediyor. Tuzu makineyi çalıştırmadan hemen önce doldurmak, taşan tuz çözeltisinin hemen yıkanmasını sağlıyor."
  - q: "Kireç temizliği yaptım, E12 yine çıkıyor. Ne yapmalıyım?"
    a: "Bosch'un E12 için kullanıcıya verdiği iş kireç temizliği ve su sertliği ayarının kontrolüyle sınırlı. Bunlara rağmen kod sürüyorsa Bosch'un kılavuzu onarım çalışmalarının daima uzman kişilere yaptırılmasını söylüyor. Bosch yetkili servisinden randevu al."
images:
  coverAlt: "Boş bir bulaşık makinesinin açık kapağı; alt sepetin yanında bir şişe bulaşık makinesi kireç çözücüsü ve bir paket özel tuz"
---

Bosch bulaşık makinenin ekranında **E12** yazıyor. Bosch'un Türkiye destek sayfasında bu kodun karşılığı: **"Isıtma sisteminde kireç birikimi."** Bosch aynı sayfada gerekçesini de veriyor: ısıtma sistemine zarar vermemek için cihazın kireçlerinin temizlenmesi gerekiyor. Bosch'un bu kod için verdiği çözüm bir parça değişimi değil, **bir bakım işi**: kireç temizliği. Bu yazıda Bosch'un önerdiği kireç temizliğini ve kodun tekrar etmemesi için kılavuzun işaret ettiği tuz ve su sertliği ayarını adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E12 = Bosch'a göre ısıtma sisteminde kireç birikmiş. Sıra şu: makineyi boşalt → bulaşık makinesi kireç çözücüsüyle, ambalajdaki talimata göre boş bir program çalıştır → musluk suyunun sertliğini öğren → sertlik ayarını ve tuzu kontrol et. Sürerse yetkili servis.

## Adım adım: evde denenecekler

**1. Makineyi boşalt.** Bosch'un kılavuzu makine temizliğinin, temizlik maddesine uygun bir programda ve **içinde bulaşık olmadan** yapılmasını istiyor.

**2. Doğru ürünü seç.** Bosch E12 için kendi kireç temizleyici ve bakım ürünlerini ya da **bulaşık makineleri için üretilmiş standart kireç çözücüleri** öneriyor. Kılavuzun iki uyarısı: makine temizliğinde **bulaşık deterjanı kullanma**; Bosch'un bilgilendirme kılavuzuna göre de sirke, çamaşır suyu, tuz ruhu gibi kimyasalları bulaşık makinesinde kesinlikle kullanma.

**3. Ambalajı oku.** Bosch, bu ürünlerin **ambalajlarındaki kullanım talimatlarına** uygun şekilde kullanılmasını ve ambalaj üzerindeki güvenlik uyarılarının dikkate alınmasını istiyor. Dozajı ve programı ambalajda yazana göre belirle.

**4. Boş programı çalıştır.** Makineyi, ambalajdaki talimata göre temizlik maddesine uygun programda boş olarak çalıştır. Makinende **makine temizlik programı** varsa Bosch'un kılavuzu onu, piyasada satılan makine temizlik maddeleriyle birlikte kullanılmak üzere tanımlıyor.

**5. Su sertliğini öğren.** Bosch'un kılavuzu E12 satırında ikinci bir iş veriyor: makineyi su sertliğini giderme sistemiyle çalıştırıp ayarı kontrol etmek. İlk iş, musluk suyunun sertlik derecesini **yerel su idaresinden** öğrenmek.

**6. Sertlik ayarını kontrol et.** Kılavuza göre gerekli ayar, musluk suyunun sertlik derecesine bağlı ve değer kılavuzdaki **su sertliği tablosundan** bulunuyor. Ayarın hangi tuşlarla yapıldığı modele göre değiştiği için kendi modelinin kılavuzuna bak.

**7. Özel tuzu doldur.** Tuz göstergesi yanıyorsa özel tuz kabını doldur. Bosch'un kuralları: yalnız **bulaşık makinesi özel tuzu** kullan, yemeklik tuz ya da tablet kullanma; tuzu **programı başlatmadan hemen önce** koy ki taşan tuz çözeltisi hemen yıkansın; tuz kabına **kesinlikle deterjan ya da temizleyici** koyma.

## E12 neden tekrar eder?

Bosch'un kılavuzundaki açıklamaya göre bulaşık makinesinin iyi yıkaması için **yumuşak, yani az kireçli ya da kireçsiz suya** ihtiyacı var; aksi hâlde bulaşıkların üzerinde ve cihazın iç kısmında kireç tortuları birikir. Kılavuz, **7° dH (1,2 mmol/l)** değerinden sert şebeke suyunda kireç giderme işleminin yapılması gerektiğini ve bu işin **özel tuz** yardımıyla makinenin kireçten arındırma sisteminde gerçekleştiğini yazıyor.

Bosch'un bilgilendirme kılavuzu bir hatırlatma daha yapıyor: deterjan tipini değiştirdiğinde ya da binaya arıtma sistemi kurulduğunda, yani su sertliği değiştiğinde, makinenin **tuz ve parlatıcı ayarlarının gözden geçirilmesi** gerekiyor.

Tuz ve sertlik ayarının genel mantığı için: [Bulaşık makinesi tuz ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/). Tuz göstergesi sönmüyorsa: [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/).

## Ne zaman servis

Kireç temizliği yapıldı, sertlik ayarı ve tuz yerinde ve E12 hâlâ çıkıyorsa Bosch'un kullanıcıya tarif ettiği iş bitmiş demektir. Bosch'un kılavuzundaki genel uyarıya göre gerektiği şekilde yapılmayan onarımlar önemli hasarlara ve ciddi tehlikelere yol açabilir; **onarım çalışmalarını daima uzman kişilere yaptır.**

⛔ **Kendin-çöz sınırı burada biter.** Kireç çözücü, tuz ve ayar senin alanın; ısıtma sisteminin kendisi yetkili servisin.

Diğer Bosch kodlarının karşılıkları: [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/).

Ekrandaki kodu ve cihaz modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
