---
title: "Beko çamaşır makinesi titriyor"
description: "Beko çamaşır makinesi titriyor ya da ses yapıyorsa Beko kılavuzundaki sıra: dayanma, ayak ayarı, çamaşır miktarı, pompa filtresi ve nakliye cıvataları."
slug: "beko-camasir-makinesi-titriyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Beko çamaşır belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb  (sayfa atıfları esas olarak bu belgeye göre)
#  (B) D4 9122 E  http://download.beko.com/Download.UsageManualsBeko/d4-9122-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820522537.pdf  37 s.  md5 89ab7801f624fc4f2a85f358033baa58
#  (C) D4 8102 E  http://download.beko.com/Download.UsageManualsBeko/32636_2820522712.pdf  37 s.  md5 eea66a69dc2384321a6f7227d0fe81f2
#  (D) D3 5061 B / D3 5062 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f
# Sorun giderme satırı (A s.32, B s.29, C s.29, D s.28), dört belgede aynı:
#   "Makine titreşim veya ses yapıyor. • Makine dengesiz duruyor olabilir. >>> Ayaklarını ayarlayarak makineyi dengeleyin. • Pompa filtresine sert bir cisim kaçmış olabilir. >>> Pompa filtresini temizleyin.
#    • Nakliye emniyet cıvataları çıkarılmamış olabilir. >>> Nakliye emniyet cıvatalarını çıkarın. • Makinedeki çamaşır miktarı az olabilir. >>> Makineye daha çok çamaşır yükleyin.
#    • Makineye aşırı miktarda çamaşır konmuş olabilir. >>> Makinenin içindeki çamaşırların bir kısmını çıkarın ya da çamaşırları elinizle düzelterek makinenin içine eşit bir şekilde dağıtın.
#    • Makine sert bir yüzeye dayanıyor olabilir. >>> Makinenin herhangi bir yere dayanmadığını kontrol edin."
# Kurulum: A s.9 (B/C/D s.8) sert zemin, uzun tüylü halı yok, mobilya kenarlarına en az 1 cm boşluk · A s.9 nakliye emniyet cıvataları "uygun bir anahtarla gevşetin" (ALET → numaralı adım DEĞİL)
#   · A s.11 (B/C/D s.10) 3.6 ayak ayarı: "1 Ayakların üzerindeki kilit somunlarını elle gevşetin. 2 Ürün düz ve dengeli bir şekilde durana kadar ayakları ayarlayın. 3 Tüm kilit somunlarını yeniden elle sıkın."
#     + "UYARI: Kilit somunlarını gevşetmek için herhangi bir alet kullanmayın. Aksi takdirde zarar görürler." + "Ürünün daha sessiz ve titreşimsiz çalışabilmesi için ayakları üzerinde düzgün ve dengede durması gerekir."
#   · A s.15 aşırı yüklemede "ses ve titreşim problemleri oluşabilir"; "Çamaşırın yanlış yerleştirilmesi durumunda makinede ses ve titreşim problemleri oluşabilir."; "Çamaşırları makineye gevşek biçimde yerleştirin."
#   · A s.30 "Pompa filtresinin içinde kalan yabancı cisimler makinenize zarar verebilir ya da ses problemine neden olabilir." · A s.30-31 filtre temizliği (elle) · A s.35 kapanış (bayi / Yetkili Servis).
# BİLEREK YAZILMAYANLAR: nakliye cıvatalarını sökme adımı (anahtar gerekir → numarasız, servise/kılavuza yönlendirildi) · kapak aletle açma · rulman/amortisör/karşı ağırlık teşhisi (belgede yok) · ayak ayarında alet.
# Alıntı denetim tablosu: beko-camasir-makinesi-titriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Geniş, sığ bir kap", "Bez ya da havlu"]
steps:
  - "Programı durdur, makinenin fişini çek."
  - "Makinenin duvara, mobilyaya ya da başka bir yüzeye dayanmadığını kontrol et; sert ve düz bir zeminde durduğuna bak."
  - "Ayakların kilit somunlarını elle gevşet, makine düz ve dengeli durana kadar ayakları ayarla, somunları yeniden elle sık."
  - "Tamburda çok az çamaşır varsa daha çok çamaşır yükle."
  - "Tambur aşırı doluysa bir kısmını çıkar ya da çamaşırları elinle eşit dağıt."
  - "Pompa filtresine sert bir cisim kaçmış olabilir; su soğuduktan sonra filtreyi Beko'nun bakım talimatına göre elle temizle."
  - "Makine yeni kurulduysa nakliye emniyet cıvatalarının çıkarılıp çıkarılmadığını kontrol et; çıkarılmamışsa işi yetkili servise bırak."
faq:
  - q: "Beko çamaşır makinesi neden titriyor ve ses yapıyor?"
    a: "Beko'nun kullanma kılavuzlarındaki 'Makine titreşim veya ses yapıyor' satırı altı sebep sayıyor: makine dengesiz duruyor olabilir, pompa filtresine sert bir cisim kaçmış olabilir, nakliye emniyet cıvataları çıkarılmamış olabilir, makinedeki çamaşır miktarı az ya da aşırı olabilir, ya da makine sert bir yüzeye dayanıyor olabilir."
  - q: "Ayakları ayarlarken alet kullanabilir miyim?"
    a: "Hayır. Beko'nun kurulum bölümüne göre ayakların kilit somunları elle gevşetilir, ürün düz ve dengeli durana kadar ayaklar ayarlanır ve somunlar yeniden elle sıkılır. Beko'nun uyarısı: kilit somunlarını gevşetmek için herhangi bir alet kullanmayın, aksi takdirde zarar görürler."
  - q: "Az çamaşırla yıkarken de titreşim olur mu?"
    a: "Olabilir. Beko'nun tablosu 'Makinedeki çamaşır miktarı az olabilir' satırında çözüm olarak makineye daha çok çamaşır yüklenmesini öneriyor. Aşırı yüklemede de ses ve titreşim problemleri oluşabileceğini yazıyor; o durumda çamaşırların bir kısmı çıkarılmalı ya da elle eşit dağıtılmalı."
  - q: "Nakliye cıvatalarını kendim sökebilir miyim?"
    a: "Beko'nun kılavuzunda nakliye emniyet cıvatalarının bir anahtarla gevşetilip söküldüğü yazıyor ve Beko ürünün kurulumu için en yakın Yetkili Servise başvurulmasını istiyor. Alet gerektirdiği için bu işi yetkili servise bırakmanı öneririz. Beko'ya göre cıvatalar sökülmeden çamaşır makinesi çalıştırılmamalı, aksi takdirde ürün hasar görür."
images:
  coverAlt: "Düz bir zeminde duran ön yüklemeli çamaşır makinesinin alt kısmında ayarlanabilir ayağı elle çeviren bir el; makinenin yanında duvarla arasında boşluk bırakılmış"
---

Makine çalışırken sallanıyor, yerinden kayıyor ya da her zamankinden fazla ses çıkarıyor. Beko'nun çamaşır makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bunun satırı: **"Makine titreşim veya ses yapıyor."** Beko bu satırda altı sebep sayıyor; çoğu yerleştirme ve yükleme: **makinenin dengesiz durması**, **bir yere dayanması**, **çamaşırın az ya da aşırı olması**, **pompa filtresine sert bir cisim kaçması** ve yeni kurulan makinede **nakliye emniyet cıvatalarının çıkarılmamış olması.** Bu yazıda Beko'nun kendi kurulum ve bakım talimatıyla sırayı açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Makine bir yere dayanıyor mu bak. Ayakları elle ayarla, alet kullanma. Çamaşır çok azsa ekle, çok fazlaysa çıkar ya da dağıt. Pompa filtresine cisim kaçmış olabilir, elle temizle. Yeni makinede nakliye cıvataları sökülmemişse yetkili servis.

## Adım adım: evde denenecekler

**1. Programı durdur, fişi çek.** Kontrollere başlamadan önce programı durdur ve makinenin fişini çek. Makineyi yerinden oynatacaksan Beko'nun uyarısını hatırla: makine yerine itilirken **su giriş ve tahliye hortumlarıyla elektrik kablosunun** katlanmamasına, sıkışmamasına ve kırılmamasına dikkat et.

**2. Makinenin bir yere dayanmadığını kontrol et.** Tablodaki sebeplerden biri: **makine sert bir yüzeye dayanıyor olabilir.** Beko'nun çözümü: **makinenin herhangi bir yere dayanmadığını kontrol et.** Beko'nun kurulum bölümüne göre makine **mobilyaların kenarlarına en az 1 cm boşluk** kalacak şekilde yerleştirilmeli, **sert bir zemin** üzerinde durmalı; **uzun tüylü halı** ya da benzeri bir yüzeye konmamalı.

**3. Ayakları elle ayarla.** Tablodaki ilk sebep: **makine dengesiz duruyor olabilir.** Beko'nun çözümü: **ayaklarını ayarlayarak makineyi dengele.** Beko'ya göre makinenin daha sessiz ve titreşimsiz çalışması için ayakları üzerinde **düzgün ve dengede** durması gerekiyor. Beko'nun sırası: ayakların üzerindeki **kilit somunlarını elle gevşet**, ürün **düz ve dengeli** durana kadar ayakları ayarla, sonra **tüm kilit somunlarını yeniden elle sık.** Beko'nun uyarısı: kilit somunlarını gevşetmek için **herhangi bir alet kullanma**, aksi takdirde zarar görürler.

**4. Çamaşır azsa ekle.** Tablodaki bir başka sebep: **makinedeki çamaşır miktarı az olabilir.** Beko'nun çözümü: **makineye daha çok çamaşır yükle.**

**5. Çamaşır fazlaysa çıkar ya da dağıt.** Tablodaki karşı sebep: **makineye aşırı miktarda çamaşır konmuş olabilir.** Beko'nun çözümü: **çamaşırların bir kısmını çıkar ya da çamaşırları elinle düzelterek makinenin içine eşit şekilde dağıt.** Beko'nun yükleme bölümüne göre aşırı yüklemede ve çamaşırın yanlış yerleştirilmesinde **ses ve titreşim problemleri** oluşabiliyor; çamaşırları makineye **gevşek biçimde** yerleştir ve "Program ve tüketim tablosu"ndaki yük bilgisine uy.

**6. Pompa filtresini temizle.** Tablodaki sebeplerden biri: **pompa filtresine sert bir cisim kaçmış olabilir.** Beko'nun çözümü: **pompa filtresini temizle.** Beko'nun bakım bölümünde de aynı uyarı var: pompa filtresinin içinde kalan yabancı cisimler makineye zarar verebilir ya da **ses problemine** neden olabilir. Beko'nun sırası: fişi çek, içerideki su **90 ºC'ye kadar** çıkabildiği için **su soğuduktan sonra** filtre kapağını elle aç, suyu geniş bir kaba boşalt, filtreyi çevirerek çıkar, temizle, zorlamadan yerine tak. Ayrıntılı sıra [Beko çamaşır makinesi su boşaltmıyor](/blog/beko-camasir-makinesi-su-bosaltmiyor/) yazısında.

**7. Nakliye emniyet cıvatalarını kontrol et.** Makine yeni kurulduysa ya da taşındıysa Beko'nun tablosundaki bir sebep daha geçerli: **nakliye emniyet cıvataları çıkarılmamış olabilir.** Beko'nun uyarısı: çamaşır makinesini çalıştırmadan önce nakliye emniyet cıvataları **sökülmeli**, aksi takdirde **ürün hasar görür.** Beko'nun kılavuzunda cıvatalar bir **anahtarla** gevşetilip sökülüyor ve Beko ürünün kurulumu için **en yakın Yetkili Servise** başvurulmasını istiyor. Cıvatalar yerindeyse makineyi çalıştırma ve bu işi yetkili servise bırak.

## Makineyi taşıyacaksan

Beko'ya göre ürün **nakliye emniyet cıvataları takılmadan kesinlikle taşınmamalı**; taşınma gerektiğinde kullanılmak üzere cıvataların **güvenli bir yerde** saklanması isteniyor. Taşımadan önce fişin çekilmesi, su gideri ve şebeke bağlantılarının sökülmesi ve içerideki suyun tamamen boşaltılması gerekiyor.

Markadan bağımsız anlatım için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısına bakabilirsin. Makine sıkmaya hiç geçmiyorsa [Beko çamaşır makinesi santrifüj yapmıyor](/blog/beko-camasir-makinesi-santrifuj-yapmiyor/) yazısına geç. Ekranında bir hata kodu varsa [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) yazısı var.

## Sınır nerede biter

Makine hiçbir yere dayanmıyor, ayakları dengeli, yük uygun, pompa filtresi temiz, nakliye cıvataları sökülmüş ve titreşim ya da ses sürüyorsa Beko'nun tablosu kullanıcıya başka adım vermiyor. Beko'nun uyarısı: talimatları uygulamana rağmen sorun sürüyorsa **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Yerleştirme, ayak ayarı, yük ve filtre kullanıcıya; nakliye cıvataları ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Makine yeni mi kuruldu, yakın zamanda taşındı mı?
2. Titreşim ve ses programın hangi aşamasında başlıyor?
3. Makine hangi zeminde duruyor, yanında boşluk var mı?
4. Tamburda ne kadar çamaşır vardı?
5. Pompa filtresinden bir cisim çıktı mı?

Bu beşine cevabın varsa servise "makine titriyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
