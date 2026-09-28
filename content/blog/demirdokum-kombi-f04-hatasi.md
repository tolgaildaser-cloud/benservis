---
title: "DemirDöküm kombi F04 hatası"
description: "DemirDöküm Atron Condense ve Nitron Plus'ta F04 ateşleme arızası demek. Gaz kesme vanası kontrolü, reset tuşu ve üç deneme sınırı; kılavuzdan."
slug: "demirdokum-kombi-f04-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi HTTP 200); pdftotext ve pdftotext -layout ile okundu.
# Sayfa = PDF sayfası (\f ayracıyla sayıldı). Web araması bu yazı için kullanılmadı; adresler hub'ın 17 Eyl provenansından,
# md5'ler 2/2 BİREBİR. Alıntı denetim tablosu: demirdokum-kombi-f04-hatasi.KAYNAK.md
# A) Atron Condense Kullanma Kılavuzu 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 12 s. · md5 7746b6a9d980072b5109b1b27926bd81
#    "Doğalgazda gerçekleşen üç başarısız ateşleme denemesinden/sıvı gazda gerçekleşen bir başarısız ateşleme denemesinden sonra
#    ürün arıza konumuna geçer (Arıza mesajı: F04)." → "Reset tuşuna basın (Reset tuşu). Ürün yeniden çalışmaya başlar." →
#    "Ateşleme arızasını üç arıza giderme denemesi ile gideremiyorsanız, yetkili servise başvurun." s.10
#    aynı tabloda: gaz kesme vanaları kapalı → her iki gaz kesme vanasını açın s.10 · F05 atık gaz hattı → yetkili servis s.10
#    kapatma vanaları: yerini montajı yapan yetkili servise sor, harici + üründeki gaz kesme vanası s.7 · reset tuşu / "Reset fonksiyonu
#    aktif, ürün kapatıldı" sembolü / FXX yanıp söner s.6 · gaz kokusu s.4 · kendi başına bakım/onarım yok s.4 · tamir DemirDöküm
#    teknik servisi s.5 · "Ürünü sadece kapak tamamen kapalı olduğunda işletime alın." s.7
# B) Nitron Plus Kullanma Kılavuzu 0020193908_03
#    https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 20 s. · md5 51e63dec4da2dcf111d41350fa586e65
#    F04 satırı aynı içerik, son cümle "bir yetkili bayiye başvurun" s.16 · her iki gaz kesme vanası s.15 · F05 "Atık gaz yolunda" s.16
#    kapatma vanaları (uzman tesisatçıya sor) s.10 · reset tuşu + sembol s.8 · gaz kokusu s.4
# BİLEREK yazılmayanlar:
#  - F04'ün arkasındaki parça (elektrot, gaz valfi, kart): kullanma kılavuzlarında yok.
#  - Reset tuşuna basma süresi: iki kılavuz da süre vermiyor ("Reset tuşuna basın"); süre uydurulmadı.
#  - "Ocakla gaz testi" gibi başka markaların adımları: DemirDöküm belgelerinde yok.
#  - Nitromix/ademiX/vintomiX'te ateşleme kodu F.28; ayrı yazı (demirdokum-kombi-f28-hatasi).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil birimini dışarıdan ara."
  - "Gaz kokusu yoksa ekrandaki kodun F04 olduğunu ve kombinin model adını not et."
  - "Kombideki gaz kesme vanasının açık olduğunu kontrol et."
  - "Dışarıya monte edilmiş gaz kesme vanasının da açık olduğunu kontrol et; yerini bilmiyorsan montajı yapan servise sor."
  - "Kontrol panelindeki reset tuşuna bas."
  - "Üç arıza giderme denemesinden sonra F04 sürüyorsa resetlemeyi bırak ve yetkili servise başvur."
faq:
  - q: "DemirDöküm kombide F04 hatası ne demek?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus kullanma kılavuzlarına göre F04 bir ateşleme arızasıdır: doğalgazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer ve ekranda F04 görünür. Kılavuzun tedbiri reset tuşuna basmak; ürün yeniden çalışmaya başlar."
  - q: "F04'te kaç kez resetleyebilirim?"
    a: "Kılavuzların sınırı üç. Atron Condense kılavuzu ateşleme arızasını üç arıza giderme denemesi ile gideremiyorsan yetkili servise, Nitron Plus kılavuzu yetkili bayiye başvurmanı söylüyor."
  - q: "F04 fan ya da sensör arızası mı?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus kılavuzlarında F04'ün karşılığı ateşleme arızasıdır; fan ya da sensör olarak geçmiyor. Kılavuzlar F04'ün arkasındaki parçayı belirtmiyor; üç denemede gitmiyorsa teşhis yetkili servisin işi."
  - q: "F04 ile F05 arasındaki fark ne?"
    a: "Aynı kılavuzlara göre F04 ateşleme arızası, F05 ise atık gaz hattında (Nitron Plus kılavuzunda atık gaz yolunda) bir arızadır. F04'te kullanıcıya reset tuşu bırakılmış; F05 için kılavuzun tek talimatı arızanın yetkili servis tarafından giderilmesidir."
  - q: "Ekranımda F04 değil F.28 yazıyor, aynı şey mi?"
    a: "DemirDöküm'ün Nitromix, ademiX ve vintomiX gibi noktalı kod kullanan modellerinde ateşleme arızası F.28 koduyla gösteriliyor ve reset yöntemi farklı. O modeller için DemirDöküm kombi F28 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin kontrol paneli; döner düğme, birkaç tuş ve rakamsız, soyut bir dijital ekran; kombinin altında borular arasında sarı kollu bir gaz kesme vanası"
---

DemirDöküm Atron Condense ya da Nitron Plus kombinin ekranında **F04** yanıp sönüyorsa DemirDöküm'ün kullanma kılavuzu bunun karşılığını açıkça veriyor: bir **ateşleme arızası.** Kılavuzdaki satır şöyle: **"Doğalgazda gerçekleşen üç başarısız ateşleme denemesinden/sıvı gazda gerçekleşen bir başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer (Arıza mesajı: F04)."** Tedbiri de kısa: reset tuşuna bas; ürün yeniden çalışmaya başlar. Bu yazıda bu adımı, öncesindeki vana kontrolünü ve servis sınırını iki DemirDöküm kılavuzundan anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F04 = DemirDöküm'e göre ateşleme arızası. Sıra şu: gaz kokusu var mı → iki gaz kesme vanası da açık mı → reset tuşuna bas → üç denemede gitmiyorsa yetkili servis. Gaz kokusu varsa hiçbir düğmeye dokunma.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** DemirDöküm kılavuzlarının güvenlik bölümünde gaz kokusu için ayrı bir talimat var. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevden kaçın, sigara içme; binadaki elektrik şalterlerini, prizleri, zili, telefonu ve diğer iletişim sistemlerini kullanma. Kılavuz gaz sayacı kapatma düzeneğinin ya da ana kapatma düzeneğinin, mümkünse üründeki gaz kesme vanasının kapatılmasını istiyor. Diğer bina sakinlerini uyar, binayı hemen terk et; binadan çıkınca polisi ve itfaiyeyi ara, gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kodu ve modeli not et.** DemirDöküm'de iki ayrı kod ailesi var. F04, Atron Condense ve Nitron Plus gibi **noktasız kod** kullanan modellerin kodudur; kılavuzlara göre arıza mesajı ekranda ana ekran yerine **yanıp sönerek** gösterilir. Kombin Nitromix, ademiX ya da vintomiX ise ateşleme arızası F.28 olarak görünür; o durumda [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) yazısına geç.

**3. Kombideki gaz kesme vanası açık mı?** Aynı arıza tablosunun ilk satırı, "sıcak su yok / ısıtma soğuk" şikâyetinin nedenlerinden birini **üründeki ya da harici gaz kesme vanasının kapalı olması** olarak veriyor; tedbir **her iki gaz kesme vanasını açmak.**

**4. Dıştaki vana da açık mı?** Kılavuzların "kapatma vanalarının açılması" bölümü iki ayrı gaz kesme vanası sayıyor: **harici olarak monte edilen** gaz kesme vanası ve **üründeki** gaz kesme vanası. Yerlerini bilmiyorsan Atron Condense kılavuzu montajı yapan yetkili servise, Nitron Plus kılavuzu uzman tesisatçıya sormanı istiyor.

**5. Reset tuşuna bas.** Kılavuzun F04 tedbiri tek cümle: **reset tuşuna bas; ürün yeniden çalışmaya başlar.** Reset tuşu kontrol panelindedir; kılavuzlarda "reset tuşu (sıfırlama)" diye geçer. Kılavuzlar tuşa ne kadar basılacağına dair bir süre vermiyor.

**6. Üç denemede dur.** Kılavuzun sınırı açık: ateşleme arızasını **üç arıza giderme denemesi** ile gideremiyorsan Atron Condense kılavuzuna göre yetkili servise, Nitron Plus kılavuzuna göre yetkili bayiye başvur.

## F04 tam olarak ne diyor

Atron Condense ve Nitron Plus kılavuzlarının arıza tablosu F04'ü "sıcak su yok / ısıtma soğuk" şikâyetinin nedenlerinden biri olarak veriyor:

| Nedeni | Tedbir |
|---|---|
| Doğalgazda **üç**, sıvı gazda **bir** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer (**Arıza mesajı: F04**) | Reset tuşuna bas; ürün yeniden çalışmaya başlar. Üç arıza giderme denemesiyle gideremiyorsan yetkili servis / bayi |

📌 Kod, kombinin bozulduğunu değil, **ateşlemeyi tutturamadığı için kendini durdurduğunu** söylüyor. Nedenin ne olduğunu kod tek başına söylemiyor; kullanıcıya bırakılan kontrol gaz kesme vanaları ve reset.

## F04, F05 ve F10 karışmasın

Aynı tabloda üç kod yan yana duruyor ve anlamları bambaşka:

| Kod | Kılavuzdaki karşılığı | Sende olan |
|---|---|---|
| **F04** | Ateşleme arızası | Vanalar + reset tuşu (üç deneme) |
| **F05** | Atık gaz hattında (Nitron Plus: atık gaz yolunda) bir arıza | Yok — **yetkili servis** tarafından giderilmeli |
| **F10** | Isıtma sisteminde yetersiz su | Isıtma sistemini doldurmak — [DemirDöküm kombi F10 hatası](/blog/demirdokum-kombi-f10-hatasi/) |

⚠️ F05'te reset denemesi kılavuzda yok; talimat yalnız servis.

## Sınır nerede biter

Atron Condense kılavuzu kullanıcının **hiçbir şekilde kendi başına** üründe bakım çalışması ya da onarım yapmamasını, arızaların ve hasarların hemen yetkili bir teknik servis tarafından giderilmesini istiyor; ürünün tamir ve bakımının **DemirDöküm teknik servisi** tarafından yapılması gerektiğini yazıyor. Ürün yalnız **kapak tamamen kapalıyken** işletime alınır.

⛔ **Kendin-çöz sınırı burada biter:** vanalar ve reset tuşu sende; gaz tarafı ve kombinin kapağının arkası servisin.

## Servisi aramadan önce iki dakikalık özet

- Ortamda gaz kokusu var mı?
- Kombideki ve dıştaki gaz kesme vanası açık mı?
- Kombi doğalgazla mı, sıvı gazla mı çalışıyor?
- Reset tuşuyla kaç kez denendi?
- Kod F04 mü, F05 mi — ve model adı ne?

DemirDöküm'ün diğer kodları ve iki kod ailesi arasındaki farklar için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) yazısına bakabilirsin. Markadan bağımsız sıralama [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
