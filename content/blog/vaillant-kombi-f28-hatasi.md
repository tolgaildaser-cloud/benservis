---
title: "Vaillant kombi F28 hatası"
description: "Vaillant kombide F.28 ateşleme başarısız demek. Gaz kesme vanası kontrolü, modele göre reset ve deneme sınırı; Vaillant kılavuzlarından."
slug: "vaillant-kombi-f28-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 · Kaynak denetimi: vaillant-kombi-f28-hatasi.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, pdftotext -layout ile okundu. Sayfa = PDF sayfası.
# Web araması KULLANILMADI; belge adresleri vaillant.com.tr ürün sayfalarının "Dokümanlar" bölümünden alındı.
# ⚠️ Hub ve F22 yazısının provenansındaki eski adresler (/pdf/ecotecplus5-5-813748.pdf, /pdf/ecotec-pure-kullanm-klavuzu-1099614.pdf)
#    bu koşuda 308 → /urunler/kombiler-kazanlar/ HTML sayfasına dönüyor; PDF değil. Kullanılmadı.
# KULLANMA KILAVUZLARI (kullanıcıya bırakılan adımların tek kaynağı):
# A) ecoTEC intro VUW 24/24 · 28/28 AS/2-1 (H-TR) · doküman 8000037574_02 (25.09.2025)
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf
#    HTTP 200 · 236.350 B · 16 sf · md5 2ad2ae698770f850da164d67e3ac3637
#    Ek A s.12: "F.28 Ateşleme başarısız" · "Arka arkaya üç başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer."
#    · tedbir: gaz kesme vanası açık mı → ürün arızasını gider (6.2) → gideremiyorsan yetkili servis
#    · s.10 6.2 reset: açma/kapatma >3 sn, en fazla beş kez, rE · s.10 5.4 yoğuşma gider hattı/hunisi kontrolü · s.3-4 gaz kokusu
# B) ecoTEC plus / ecoTEC exclusive VU../VUW.. (26-40CS/1-5, 36CF/1-7) · doküman 0020282305_07
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf
#    HTTP 200 · 196.382 B · 20 sf · md5 7019a6c065efd6227ebac697dc91f175
#    Ek C s.17: "F.028 Başlatma evresinde alev sinyali algılanmadı." · "F.281 Alev stabilizasyon süresi boyunca söndü."
#    · ikisi için neden: "Arka arkaya beş başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer."
#    · tedbir: gaz kesme vanası · reset tuşu >3 sn, "Maksimum tekrar sayısı: 3" · gideremiyorsan yetkili servis · s.7 reset tuşu tarifi
# C) ecoTEC pure VUW 236/7-2 · 286/7-2 (H-TR) · doküman 0020250679_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf
#    HTTP 200 · 458.267 B · 20 sf · md5 f48176844c2865cf7cd48c96cd902121
#    C.2 s.17: F.28 "Ateşleme başarısız", üç deneme · reset >3 sn · "üç resetleme denemesi ile gideremiyorsanız, yetkili bir bayiye"
#    · s.10 4.2 kapatma vanalarının yeri tesisatçıya sorulur, harici + ürün altındaki gaz kesme vanası · s.14 6.4 yoğuşma
# D) ecoTEC pro VUW TR 236/5-3 · 286/5-3 · doküman 0020228720_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf
#    HTTP 200 · 297.230 B · 12 sf · md5 5958d4db9b178710d1bf7c4ef3147f2e
#    Ek B s.11: F.28 → "Reset tuşuna bir saniye boyunca basın" · üç deneme → yetkili bayi · s.9 5.1 F.xx tekrar → yetkili bayi
# MONTAJ KILAVUZU (yalnız "servisin bakacağı yerler" cümlesi ve F.29 SSS'si için; kullanıcı adımı buradan ALINMADI):
# E) ecoTEC intro montaj ve bakım · 8000037569_02
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1471323.pdf
#    HTTP 200 · 7.846.166 B · 44 sf · md5 e547f83b3cd62622aaec3f14568a0d1f · F.28 / F.29 nedenleri s.34
# F) ecoTEC pure montaj ve bakım · 0020250678_04
#    https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_1367238.pdf
#    HTTP 200 · 8.028.786 B · 44 sf · md5 d57d110b8f7b15fd282ce993442d4a77 · F.29 "Alev kaybından sonra yeniden ateşleme başarısız" s.34
# ⛔ Bilerek YAZILMAYANLAR: gaz basıncı ölçme/ayar · elektrot, ateşleme trafosu, gaz armatürü kontrolü (montaj kılavuzunda
#    servise yazılı, kullanıcıya değil) · "fişi çek bekle tekrar dene" reseti (belgede yok) · "F.28 = gaz kesintisi" daraltması
#    (belge nedeni "üç/beş başarısız ateşleme denemesi" diye veriyor) · deneme sınırını aşan reset · ecoTEC plus için "1 saniye"
#    (güncel plus kılavuzu >3 sn diyor; 1 saniye yalnız ecoTEC pro kılavuzunda) · fiyat/süre tahmini (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil hattını dışarıdan ara."
  - "Gaz kokusu yoksa ekrandaki kodu ve kombinin model adını not et."
  - "Kombinin altındaki ya da yakınındaki gaz kesme vanasının açık olduğunu kontrol et."
  - "Dışarıya monte edilmiş ikinci bir gaz kesme vanası varsa onun da açık olduğunu kontrol et; yerini bilmiyorsan montajı yapan tesisatçıya sor."
  - "Kombiyi kendi kılavuzundaki yöntemle resetle; tuşa basma süresi modele göre değişir."
  - "Reseti kılavuzdaki deneme sınırını aşmadan tekrarla."
  - "Yoğuşma suyu gider hattında ve gider hunisinde gözle görülen bir tıkanıklık olup olmadığına bak; bir şey görürsen dokunmadan servise bildir."
  - "Kod geri geliyorsa denemeyi bırak ve yetkili servise başvur."
faq:
  - q: "Vaillant kombide F28 hatası ne demek?"
    a: "Vaillant'ın ecoTEC intro kullanma kılavuzundaki arıza tablosu F.28'i 'Ateşleme başarısız' diye adlandırıyor ve nedenini 'Arka arkaya üç başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer' diye veriyor. ecoTEC pure kılavuzu da aynı ifadeyi kullanıyor. ecoTEC plus ve ecoTEC exclusive kılavuzunda kod üç haneli yazılıyor: F.028, 'Başlatma evresinde alev sinyali algılanmadı'; bu kılavuzda eşik beş başarısız ateşleme denemesi."
  - q: "Vaillant kombide F28 çıkınca ilk ne yapmalıyım?"
    a: "ecoTEC intro, ecoTEC pure ve ecoTEC plus/exclusive kılavuzlarında F.28 satırının ilk tedbiri aynı: gaz kesme vanasının açık olup olmadığını kontrol et. Dört kılavuzun arıza giderme tablosu da ürün çalışmıyorsa her iki gaz kesme vanasını, yani tesisattaki ve üründeki vanayı açmanı istiyor. ecoTEC pure ve ecoTEC pro kılavuzları kapatma vanalarının yerini ve kullanımını montajı yapan tesisatçıya sormanı söylüyor. Ortamda gaz kokusu varsa bu adımların hiçbiri yapılmaz; kılavuzun gaz kokusu talimatı uygulanır."
  - q: "Vaillant kombi F28'de nasıl resetlenir, kaç kez denenir?"
    a: "Modele göre değişiyor. ecoTEC pure ve ecoTEC plus/exclusive kılavuzları reset tuşunu 3 saniyeden uzun basılı tutmanı, ecoTEC pro kılavuzu reset tuşuna bir saniye basmanı söylüyor. ecoTEC intro'da reset, ana ekranda açma/kapatma düğmesine 3 saniyeden uzun basılarak yapılıyor ve ekranda rE görünüyor. Deneme sınırı ecoTEC plus/exclusive'te 'Maksimum tekrar sayısı: 3'; ecoTEC pure ve pro kılavuzları arızayı üç denemede gideremezsen yetkili bayiye başvurmanı istiyor. ecoTEC intro kılavuzu resetin en fazla beş kez yapılabileceğini yazıyor."
  - q: "Vaillant kombide F.281 ne demek?"
    a: "F.281 ecoTEC plus ve ecoTEC exclusive kullanma kılavuzundaki arıza tablosunda yer alıyor: 'Alev stabilizasyon süresi boyunca söndü.' Nedeni ve tedbiri F.028 ile aynı yazılmış: arka arkaya beş başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer; gaz kesme vanası kontrol edilir, reset tuşu 3 saniyeden uzun basılı tutulur (en fazla 3 kez), arıza giderilemiyorsa yetkili servise başvurulur."
  - q: "F28 ile F29 arasındaki fark ne?"
    a: "F.29 kullanma kılavuzlarındaki arıza tablolarında yer almıyor; kullanıcıya adım verilmemiş. Vaillant'ın yetkili servise yönelik montaj kılavuzları F.29'u ecoTEC intro'da 'İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor', ecoTEC pure'da 'Alev kaybından sonra yeniden ateşleme başarısız' diye tanımlıyor. Yani F.28 ateşlemenin başlangıçta tutmadığını, F.29 ise çalışma sırasında sönen alevin yeniden yakılamadığını anlatıyor. F.29 için yetkili servise başvurulur."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; altındaki borular arasında sarı kollu bir gaz vanası ve ekranında rakam okunmayan soyut bir arıza göstergesi"
---

Vaillant kombinin ekranında **F.28** görüyorsan Vaillant'ın kendi arıza tablosu bunu iki kelimeyle adlandırıyor: **"Ateşleme başarısız."** Nedeni de tabloda yazılı: *"Arka arkaya üç başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer."* Yani kombi yanmayı birkaç kez denedi, alevi tutturamadı ve kendini durdurdu. Kullanma kılavuzu sana bu noktada üç iş bırakıyor: gaz kesme vanasına bakmak, resetlemek ve sonuç alamazsan yetkili servisi çağırmak. Bu yazıda bu üç adımı dört Vaillant kullanma kılavuzundan, modelden modele değişen yerleriyle birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F.28 = Vaillant'a göre ateşleme başarısız. Sıra şu: gaz kokusu var mı → gaz kesme vanası (varsa ikisi de) açık mı → kılavuzundaki yöntemle reset → deneme sınırında dur → yetkili servis. Gaz kokusu varsa hiçbir düğmeye dokunma.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Vaillant kullanma kılavuzlarının ilk güvenlik başlığı gaz kokusu. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevle yaklaşma, sigara içme; binadaki elektrik şalterlerini, prizleri, zili, telefonu ve diğer iletişim sistemlerini kullanma. Kılavuz gaz sayacı kapatma düzeneğinin ya da ana kapatma düzeneğinin kapatılmasını, mümkünse üründeki gaz kesme vanasının da kapatılmasını istiyor. Diğer bina sakinlerini uyar, binayı hemen terk et; binadan çıkınca polisi ve itfaiyeyi ara, gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kodu ve modeli not et.** Kılavuzların tedbirleri modele göre farklılaşıyor. Model adı kullanma kılavuzunun kapağında yazar; Vaillant'a göre seri numarasını ön kapağın alt tarafında ve cihaz tip etiketinde bulabilirsin. ecoTEC plus ve ecoTEC exclusive'te kod üç haneli (**F.028**) görünür.

**3. Kombinin gaz kesme vanası açık mı?** ecoTEC intro, ecoTEC pure ve ecoTEC plus/exclusive kılavuzlarında F.28 satırının ilk tedbiri aynı: *"Gaz kesme vanasının açık olup olmadığını kontrol edin."* ecoTEC pure kılavuzu bu vananın **ürünün hemen altında veya yakınında** bulunduğunu söylüyor.

**4. İkinci vana var mı?** Dört kılavuzun arıza giderme tablosu da ürün çalışmıyorsa ve vanalardan biri kapalıysa **her iki gaz kesme vanasını** açmanı istiyor: tesisata (ürünün dışına) monte edilmiş olan ve üründeki. Tatile çıkarken vanayı sen kapattıysan, ecoTEC intro ve ecoTEC plus kılavuzlarının "tekrar devreye alma" bölümü de gaz kesme vanası kapatılmışsa üründeki vananın açılmasını istiyor. Vanaların yerini bilmiyorsan ecoTEC pure ve ecoTEC pro kılavuzlarının tavsiyesi net: kapatma vanalarının konumunu ve kullanımını **montajı yapan tesisatçıya sor.**

**5. Resetle — ama kendi modelinin yöntemiyle.** Süre ve tuş modele göre değişiyor, tablosu aşağıda.

**6. Deneme sınırında dur.** Kılavuzların hepsi resete bir sınır koyuyor. Sınıra gelip kod hâlâ duruyorsa evde denenecek bir şey kalmamıştır.

**7. Yoğuşma suyu gider hattına göz at.** Kullanma kılavuzları yoğuşma suyu gider hattının ve gider hunisinin **daima açık (tıkanmamış)** olmasını, bunların düzenli olarak özellikle tıkanmalara karşı kontrol edilmesini istiyor; görünür ve hissedilebilir bir engel olmamalı. Vaillant'ın servise yönelik ecoTEC intro montaj kılavuzu da F.28'in olası nedenleri arasında **tıkalı yoğuşma suyu gider hattını** sayıyor. Bir sorun görürsen kılavuzun talimatı: yetkili bayiye giderttir. Burada senin işin yalnızca bakmak.

**8. Kod geri geliyorsa servis.** ecoTEC pro kılavuzunun cümlesi: arızayı öngörülen önlemlerle gideremiyorsan **veya arıza mesajları (F.xx) tekrar ortaya çıkıyorsa** yetkili bayiye başvur.

## F.28 tam olarak ne diyor — dört kılavuz yan yana

| Kılavuz | Kodun adı | Olası neden |
|---|---|---|
| **ecoTEC intro** | F.28 — Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **ecoTEC pure** | F.28 — Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **ecoTEC pro** | F.28 (arıza mesajı) | Arka arkaya **üç** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **ecoTEC plus / exclusive** | **F.028** — Başlatma evresinde alev sinyali algılanmadı | Arka arkaya **beş** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |

📌 Kod, kombinin bozulduğunu değil, **ateşlemeyi tutturamadığı için kendini durdurduğunu** söylüyor. Nedenin ne olduğunu kod tek başına söylemiyor; ilk bakılacak yer gaz kesme vanası.

## Reset: modeline göre tuş ve süre

| Kılavuz | Nasıl | Deneme sınırı |
|---|---|---|
| **ecoTEC intro** | Ana ekranda **açma/kapatma düğmesine 3 saniyeden uzun** bas; ekranda **rE** görünür | En fazla **beş** kez; beş denemeden sonra rE hızlı yanıp söner, durdurmak ve ürünü yeniden başlatmak için düğmeye basılır |
| **ecoTEC pure** | **Reset tuşuna 3 saniyeden uzun** basılı tut | Üç resetleme denemesiyle gideremiyorsan yetkili bayi |
| **ecoTEC plus / exclusive** | **Reset tuşunu 3 saniyeden uzun** basılı tut | *"Maksimum tekrar sayısı: 3"* |
| **ecoTEC pro** | **Reset tuşuna bir saniye** boyunca bas; ürün yeniden bir ateşleme denemesi başlatır | Üç arıza giderme denemesiyle gideremiyorsan yetkili bayi |

➡️ Tek bir süre ezberlemek, modellerin bir kısmında yanlış olur. Kendi kılavuzundaki süreyi esas al.

⚠️ Sınırı aşan reset bir çözüm değil. Kılavuzlar deneme sayısını bilerek kısıtlıyor; sınıra gelindiyse sıradaki adım servistir.

## ecoTEC plus'ta F.281 de var

ecoTEC plus ve ecoTEC exclusive kullanma kılavuzunun arıza tablosunda F.028'in hemen altında ikinci bir ateşleme kodu yer alıyor:

> **F.281** — Alev stabilizasyon süresi boyunca söndü.
> **Olası neden:** Arka arkaya beş başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer.
> **Tedbir:** Gaz kesme vanasının açık olup olmadığını kontrol et → reset tuşunu 3 saniyeden uzun basılı tut (maksimum tekrar sayısı: 3) → ateşleme arızasını gideremiyorsan yetkili servise başvur.

Yani F.281'de de senin adımların F.028 ile aynı: vana, sınırlı reset, servis.

## Servisin bakacağı yerler

Vaillant'ın yetkili servise yönelik ecoTEC intro montaj kılavuzu F.28'in olası nedenlerini uzun bir listeyle veriyor. Aralarında şunlar var: gaz kesme vanasının kapalı olması, gaz giriş basıncının çok düşük olması, gaz hattında hava bulunması (örneğin ilk çalıştırmada), yoğuşma suyu gider hattının tıkalı olması, ateşleme sisteminin arızalı olması, hatalı topraklama ve elektronik arıza.

Bu liste **servis için yazılmış** bir kontrol listesi; kontrollerin çoğu ölçüm ve parça işi. Kullanıcıya düşen kısım, kullanma kılavuzunun verdiği vana ve reset adımlarıyla sınırlı. Kullanma kılavuzlarının genel uyarısı da aynı yönde: güvenlik tertibatları çıkarılmaz, köprülenmez, bloke edilmez; üründe, gaz, hava, su ve elektrik hatlarında değişiklik yapılmaz. ecoTEC intro kılavuzu ayrıca ürünün tamir ve bakımının Vaillant teknik servisi tarafından yapılması gerektiğini yazıyor.

⛔ **Kendin-çöz sınırı burada biter:** vana ve reset sende; kombinin kapağının arkası servisin.

## F.28 ile F.29 karışmasın

F.29 **kullanma kılavuzlarının hiçbirinde yer almıyor**; kullanıcıya adım verilmemiş. Vaillant'ın montaj kılavuzları onu ecoTEC intro'da *"İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor"*, ecoTEC pure'da *"Alev kaybından sonra yeniden ateşleme başarısız"* diye tanımlıyor. Kabaca: F.28 ateşleme başlangıçta tutmuyor; F.29 çalışırken sönen alev yeniden yakılamıyor. F.29 gördüysen yetkili servise başvur.

## Servisi aramadan önce iki dakikalık özet

1. Ortamda gaz kokusu var mı?
2. Kombinin altındaki gaz kesme vanası açık mı?
3. Dışarıda ikinci bir gaz kesme vanası var mı, açık mı?
4. Kılavuzundaki yöntemle kaç kez reset denendi?
5. Kod F.28 mi, F.028 mi, F.281 mi — ve model adı ne?

Bu beşine cevabın varsa servise "kombi yanmıyor" yerine somut bir tablo anlatabilirsin.

Vaillant'ın diğer kodları için [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) listesine, düşük su basıncı kodu için [Vaillant kombi F22 hatası](/blog/vaillant-kombi-f22-hatasi/) yazısına, ekrandaki şey kod değil sembol ise [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasına bak. Marka bağımsız olarak kombinin neden yanmadığını [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
