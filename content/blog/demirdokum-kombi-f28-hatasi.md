---
title: "DemirDöküm kombi F28 hatası"
description: "DemirDöküm kombide F.28 ateşleme başarısız demek. Gaz kesme vanası, modele göre reset yöntemi ve deneme sınırı; DemirDöküm kılavuzlarından."
slug: "demirdokum-kombi-f28-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi HTTP 200); pdftotext ve pdftotext -layout ile okundu.
# Sayfa = PDF sayfası (\f ayracıyla sayıldı). Web araması yalnız ademiX/vintomiX kullanma kılavuzlarının YERİNİ bulmak için
# kullanıldı (allowed_domains: demirdokum.com.tr). Alıntı denetim tablosu: demirdokum-kombi-f28-hatasi.KAYNAK.md
# A) Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 s. · md5 3340a11b923b7332f8eb8685297970b6
#    F.28 "Ateşleme başarısız" · "Arka arkaya iki başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer." ·
#    gaz kesme vanası kontrol · "Reset tuşuna 1 saniye boyunca basın." · "Resetleme denemeleri: ≤ 3" · üçte gitmezse yetkili bayi s.15
#    "Ürün çalışmıyor" satırı: her iki gaz kesme vanasını aç s.15 · kapatma vanalarının yerini montajı yapan servise sor + harici/ürün
#    gaz kesme vanası s.10 · gaz kokusu listesi s.4 · yalnız kılavuzdaki çalışmalar, güvenlik tertibatına dokunma s.4-5 · yoğuşma gider hattı s.12
# B) ademiX (AS/2) Kullanma Kılavuzu 8000037599_01
#    https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf
#    HTTP 200 · 16 s. · md5 49d7b83510651364a8bf6cc1fd7b654b
#    F.28 "Arka arkaya üç başarısız ateşleme denemesinden sonra" · gaz kesme vanası · ürün arızasını gider · gideremezsen servis s.13
#    reset: "Ana ekranda açma/kapatma düğmesine 5 saniyeden uzun basarak üründeki arızaları giderin." s.11 · gaz kokusu s.3 · yoğuşma s.10
# C) vintomiX Kullanma Kılavuzu 0020313925_01
#    https://www.demirdokum.com.tr/downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf
#    HTTP 200 · 16 s. · md5 8f95c967c9b46f5954feb833fd596467
#    F.28 üç deneme s.12 · reset: açma/kapama düğmesine 3 sn'den uzun, en fazla beş kez, rE; 5 denemeden sonra rE hızlı yanıp söner s.10
# D) Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (servise yönelik)
#    https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf
#    HTTP 200 · 40 s. · md5 bdff16276288ebddd6c6cbf82d47c864
#    F.28 olası nedenleri s.31-32 · F.29 "İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor" s.32
# BİLEREK yazılmayanlar:
#  - Tek bir reset süresi: Nitromix reset tuşu 1 sn · ademiX açma/kapatma >5 sn · vintomiX açma/kapama >3 sn; yan yana verildi.
#  - F.28'in arkasındaki parça (elektrot, gaz armatürü, kart): servis kılavuzunda "olası neden"; kullanıcıya teşhis olarak verilmedi.
#  - Gaz giriş basıncı ölçümü, gaz hattının havasını alma: servis işi (#31).
#  - Atron Condense / Nitron Plus'ta ateşleme kodu F04; ayrı yazı (demirdokum-kombi-f04-hatasi).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil birimini dışarıdan ara."
  - "Gaz kokusu yoksa ekrandaki kodu ve kombinin model adını not et."
  - "Kombideki gaz kesme vanasının açık olduğunu kontrol et."
  - "Dışarıya monte edilmiş ikinci bir gaz kesme vanası varsa onun da açık olduğunu kontrol et; yerini bilmiyorsan montajı yapan servise sor."
  - "Kombiyi kendi modelinin kılavuzundaki yöntemle resetle."
  - "Yoğuşma suyu gider hattına ve gider hunisine gözle bak; bir tıkanıklık görürsen dokunmadan yetkili bayiye bildir."
  - "Kılavuzdaki deneme sınırında kod hâlâ duruyorsa resetlemeyi bırak ve yetkili servise başvur."
faq:
  - q: "DemirDöküm kombide F28 hatası ne demek?"
    a: "DemirDöküm'ün kullanma kılavuzlarındaki arıza tablosu F.28'i 'Ateşleme başarısız' diye adlandırıyor. ademiX ve vintomiX kılavuzlarına göre arka arkaya üç, Nitromix kılavuzuna göre arka arkaya iki başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer. Kılavuzların ilk tedbiri gaz kesme vanasının açık olup olmadığını kontrol etmek."
  - q: "DemirDöküm kombi nasıl resetlenir?"
    a: "Modele göre değişiyor. Nitromix kılavuzu reset tuşuna 1 saniye basmayı ve en fazla üç resetleme denemesi yapmayı söylüyor. ademiX (AS/2) kılavuzu ana ekranda açma/kapatma düğmesine 5 saniyeden uzun basmayı söylüyor. vintomiX kılavuzu açma/kapama düğmesine 3 saniyeden uzun basmayı, bunu en fazla beş kez yapmayı söylüyor; ekranda rE görünür."
  - q: "Kaç kez resetleyebilirim?"
    a: "Nitromix kılavuzu üç resetleme denemesi ile ateşleme arızasını gideremiyorsan yetkili bayiye başvurmanı istiyor. vintomiX kılavuzunda sınır beş deneme; beş denemeden sonra rE hızlı yanıp söner, durdurmak ve ürünü yeniden başlatmak için düğmeye basılır. Sınıra gelip kod sürüyorsa sıradaki adım yetkili servistir."
  - q: "F28 ile F29 arasındaki fark ne?"
    a: "DemirDöküm'ün servise yönelik Nitromix montaj kılavuzu F.28'i 'Ateşleme başarısız', F.29'u 'İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor' diye tanımlıyor. F.29 kullanma kılavuzlarının tablosunda yer almıyor, yani kullanıcıya adım verilmemiş; F.29 gördüysen yetkili servise başvur."
  - q: "Ekranımda F28 değil F04 yazıyor, aynı şey mi?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus gibi noktasız kod kullanan modellerinde ateşleme arızası F04 koduyla gösteriliyor. O modeller için DemirDöküm kombi F04 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; borular arasında sarı kollu bir gaz kesme vanası ve kombinin ön panelinde soyut, rakamsız bir ekran"
---

DemirDöküm kombinin ekranında **F.28** görüyorsan DemirDöküm'ün kendi arıza tablosu bunu iki kelimeyle adlandırıyor: **"Ateşleme başarısız."** Nedeni de tabloda yazılı: kombi yanmayı art arda birkaç kez denedi, alevi tutturamadı ve **arıza konumuna geçti.** Kullanma kılavuzu sana bu noktada üç iş bırakıyor: gaz kesme vanasına bakmak, resetlemek ve sonuç alamazsan yetkili servise başvurmak. Bu yazıda bu adımları DemirDöküm'ün Nitromix, ademiX ve vintomiX kullanma kılavuzlarından, modelden modele değişen yerleriyle birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F.28 = DemirDöküm'e göre ateşleme başarısız. Sıra şu: gaz kokusu var mı → gaz kesme vanası (varsa ikisi de) açık mı → modelinin kılavuzundaki yöntemle reset → deneme sınırında dur → yetkili servis. Gaz kokusu varsa hiçbir düğmeye dokunma.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** DemirDöküm kullanma kılavuzlarının güvenlik bölümünde gaz kokusu için ayrı bir talimat var. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevden kaçın, sigara içme; binadaki elektrik şalterlerini, prizleri, zili, telefonu ve diğer iletişim sistemlerini kullanma. Nitromix kılavuzu gaz sayacı kapatma düzeneğinin ya da ana kapatma düzeneğinin, mümkünse üründeki gaz kesme vanasının kapatılmasını istiyor. Diğer bina sakinlerini uyar, binayı hemen terk et; binadan çıkınca polisi ve itfaiyeyi ara, gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kodu ve modeli not et.** Reset yöntemi ve deneme sınırı modele göre değişiyor. Ayrıca DemirDöküm'de iki ayrı kod ailesi var: F.28, Nitromix, ademiX ve vintomiX gibi noktalı kod kullanan modellerin kodudur. Atron Condense ya da Nitron Plus'ta ateşleme arızası F04 olarak görünür; o durumda [DemirDöküm kombi F04 hatası](/blog/demirdokum-kombi-f04-hatasi/) yazısına geç.

**3. Kombinin gaz kesme vanası açık mı?** Üç kılavuzda da F.28 satırının ilk tedbiri aynı: **gaz kesme vanasının açık olup olmadığını kontrol et.**

**4. İkinci vana var mı?** Kılavuzların "ürün çalışmıyor" satırı, harici olarak monte edilen gaz kesme vanası ve/veya üründeki gaz kesme vanası kapalıysa **her iki gaz kesme vanasını** açmanı istiyor. Vanaların yerini bilmiyorsan Nitromix kılavuzunun tavsiyesi net: kapatma vanalarının konumunu ve kullanımını **montajı yapan yetkili servise sor.**

**5. Resetle, kendi modelinin yöntemiyle.** Tuş ve süre modele göre değişiyor; tablosu aşağıda.

**6. Yoğuşma suyu gider hattına göz at.** Kullanma kılavuzları yoğuşma suyu gider hattının ve gider hunisinin **daima açık (tıkanmamış)** olmasını, düzenli olarak özellikle tıkanmalara karşı kontrol edilmesini istiyor; görünür ve hissedilebilir bir engel olmamalı. DemirDöküm'ün servise yönelik Nitromix montaj kılavuzu da F.28'in olası nedenleri arasında **tıkalı yoğuşma suyu gider hattını** sayıyor. Bir sorun görürsen kılavuzun talimatı: yetkili bayiye giderttir. Burada senin işin yalnızca bakmak.

**7. Deneme sınırında dur.** Kılavuzların hepsi resete bir sınır koyuyor. Sınıra gelip kod hâlâ duruyorsa evde denenecek bir şey kalmamıştır: **yetkili servise başvur.**

## F.28 tam olarak ne diyor — üç kılavuz yan yana

| Kılavuz | Kodun adı | Olası neden |
|---|---|---|
| **Nitromix** | F.28 — Ateşleme başarısız | Arka arkaya **iki** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **ademiX (AS/2)** | F.28 — Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **vintomiX** | F.28 — Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |

📌 Kod, kombinin bozulduğunu değil, **ateşlemeyi tutturamadığı için kendini durdurduğunu** söylüyor. Nedenin ne olduğunu kod tek başına söylemiyor; ilk bakılacak yer gaz kesme vanası.

## Reset: modeline göre tuş ve süre

| Kılavuz | Nasıl | Deneme sınırı |
|---|---|---|
| **Nitromix** | **Reset tuşuna 1 saniye** boyunca bas | En fazla **3** resetleme denemesi; üçte gitmezse yetkili bayi |
| **ademiX (AS/2)** | Ana ekranda **açma/kapatma düğmesine 5 saniyeden uzun** bas | Ateşleme arızasını gideremiyorsan yetkili servis |
| **vintomiX** | Ana ekranda **açma/kapama düğmesine 3 saniyeden uzun** bas; ekranda **rE** görünür | En fazla **beş** kez; beş denemeden sonra rE hızlı yanıp söner, durdurmak ve ürünü yeniden başlatmak için düğmeye basılır |

➡️ Tek bir süre ezberlemek, modellerin bir kısmında yanlış olur. Kendi kılavuzundaki yöntemi esas al.

⚠️ Sınırı aşan reset bir çözüm değil. Kılavuzlar deneme sayısını bilerek kısıtlıyor; sınıra gelindiyse sıradaki adım servistir.

## Servisin bakacağı yerler

DemirDöküm'ün servise yönelik Nitromix montaj ve bakım kılavuzu F.28'in olası nedenlerini uzun bir listeyle veriyor. Aralarında şunlar var: gaz kesme vanasının kapalı olması, gaz hattında hava bulunması (örneğin ilk çalıştırmada), gaz giriş basıncının çok düşük olması, yoğuşma suyu gider hattının tıkalı olması, ateşleme sisteminin arızalı olması, hatalı topraklama ve elektronik arıza.

Bu liste **servis için yazılmış** bir kontrol listesi; kontrollerin çoğu ölçüm ve parça işi. Kullanıcıya düşen kısım, kullanma kılavuzunun verdiği vana ve reset adımlarıyla sınırlı. Kullanma kılavuzlarının genel uyarısı da aynı yönde: güvenlik tertibatları çıkarılmaz, köprülenmez, bloke edilmez; üründe, gaz, hava, su ve elektrik hatlarında değişiklik yapılmaz.

⛔ **Kendin-çöz sınırı burada biter:** vana ve reset sende; kombinin kapağının arkası servisin.

## F.28 ile F.29 karışmasın

F.29 **kullanma kılavuzlarının arıza tablosunda yer almıyor**; kullanıcıya adım verilmemiş. Servise yönelik Nitromix montaj kılavuzu onu *"İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor"* diye tanımlıyor. Kabaca: F.28'de ateşleme başlangıçta tutmuyor; F.29'da çalışırken alev sönüyor. F.29 gördüysen yetkili servise başvur.

## Servisi aramadan önce iki dakikalık özet

- Ortamda gaz kokusu var mı?
- Kombideki gaz kesme vanası açık mı?
- Dışarıda ikinci bir gaz kesme vanası var mı, açık mı?
- Kılavuzundaki yöntemle kaç kez reset denendi?
- Kod F.28 mi, F.29 mu — ve model adı ne?

DemirDöküm'ün diğer kodları ve iki kod ailesi arasındaki farklar için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) yazısına, düşük basınç kodu için [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) yazısına bakabilirsin. Markadan bağımsız sıralama [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
