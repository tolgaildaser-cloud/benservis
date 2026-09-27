---
title: "Buderus kombi 227 hatası"
description: "Buderus GB022i ve GB122i'de 227 alev algılanmıyor demek. Gaz vanasının açık olup olmadığını anlama, reset ve servis sınırı adım adım."
slug: "buderus-kombi-227-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext -layout ile okundu, sayfa no \f ayracına göre.
# Alıntı denetim tablosu: buderus-kombi-227-hatasi.KAYNAK.md
# K1) Buderus TR "227 Arıza Kodu" · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/227-ariza-kodu/
#     HTTP 200 · 128.259 B · md5 78fdc8c86fe5f4afb99a1b6860c9dc7b
#     Birebir: "Alev Algılanmamaktadır." | "Gaz vanasının açık olup olmadığını kontrol ediniz."
# K2) Dizin sayfası md5 ff763f86f479cd5ba6b5c8935ee0960a — 227 yalnız GB122i ve GB022i listesinde
# B1) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf
#     HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     Gaz kokusu listesi s.3 · dış sac / yetkili servis s.4 · "6.1 Gaz vanasının açılması/kapatılması: Kolu bastırın ve sola doğru
#     sonuna kadar çevirin (kol akış yönünde = açık). Kolu bastırın ve sağa doğru sonuna kadar çevirin (kol akış yönünün enine
#     yönünde = kapalı)." + H sembolü + iki reset yolu + servis + Tab.3 cihaz bilgileri + tip etiketi s.11
# B2) Logamax Plus GB122i.2-24 KD H Kullanma Kılavuzu 6721843895 (2023/04)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721843895.pdf
#     HTTP 200 · 974.060 B · 12 s. · md5 14a8d326f557827c9670b4d367e65098 — aynı gaz vanası/reset metni s.8
# B3) Logamax plus GB022i Montaj Kılavuzu 6721835259 (2021/10)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835259.pdf
#     HTTP 200 · 3.298.806 B · 28 s. · md5 b36a3cefaa75cb4d53b97da3bac92b45
#     Tab.29 "Özel ekran göstergeleri": "Örnek 227 — Arıza kodu" s.21 (yalnız 227'nin bu kombide arıza kodu olarak göründüğü teyidi)
# BİLEREK yazılmayanlar:
#  - 6A sayfasındaki "ocakla gaz testi" ve "daire dışı vana" tarifi: Buderus onu 6A için yazmış, 227 sayfası vermiyor → 227'ye taşınmadı.
#  - Alevin neden algılanmadığı (elektrot, iyonizasyon, gaz basıncı vb.): sayfa sebep saymıyor.
#  - Reset'in 227'yi çözdüğü: kılavuz resetin "bazı arızalar" için gerekli olduğunu söylüyor; 227'ye özel reset talimatı yok.
#  - GB122i (.2 olmayan) ile GB122i.2'nin aynı cihaz olduğu iddiası.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin çevresinde gaz kokusu olmadığından emin ol; koku varsa kombiye dokunma, kılavuzdaki gaz kokusu adımlarını uygula."
  - "Ekranda H sembolüyle birlikte 227 yazdığını doğrula."
  - "Kombinin gaz vanasının kolu akış yönünde mi, enine mi bak; akış yönündeyse vana açıktır."
  - "Kol enine duruyorsa kılavuzdaki gibi bastırıp sola, sonuna kadar çevirerek vanayı aç."
  - "Kombiyi kapatıp aç ya da kılavuzdaki iki tuşla H ve ! sembolleri kaybolana kadar resetle."
  - "227 sürüyorsa arıza kodu ve cihaz bilgileriyle Buderus yetkili servisini ara."
faq:
  - q: "Buderus kombide 227 hatası ne demek?"
    a: "Buderus'un 227 sayfasına göre 227, alevin algılanmadığını gösterir. Sayfanın verdiği tek çözüm gaz vanasının açık olup olmadığının kontrol edilmesidir. 227, Buderus'un listesinde Logamax plus GB122i ve GB022i modellerinde geçiyor."
  - q: "Kombinin gaz vanası açık mı, nasıl anlarım?"
    a: "GB022i ve GB122i.2 kullanma kılavuzlarına göre gaz vanasının kolu akış yönündeyse vana açık, akış yönünün enine duruyorsa kapalıdır. Açmak için kol bastırılıp sola doğru sonuna kadar çevrilir; kapatmak için bastırılıp sağa doğru sonuna kadar çevrilir."
  - q: "227 ile 6A aynı kod mu?"
    a: "Hayır, farklı model ailelerinde ve farklı tanımlarla geçiyorlar. 227 rakamlı kod kullanan GB122i ve GB022i'de alevin algılanmadığını gösterir. 6A ise GB172i, GB062, GB012, GB072, GB042 ve Logamax U serisinin listesinde, Buderus'un tanımıyla bir ateşleme sorunudur. İkisinde de ilk kontrol gaz vanasıdır."
  - q: "Gaz vanası açık ama 227 gitmiyor, ne yapmalıyım?"
    a: "Kılavuz bazı arızaların tesisat sıfırlanmadan çalışmadığını söylüyor ve iki yol veriyor: cihazı kapatıp tekrar çalıştırmak ya da iki ok tuşunu H ve ! sembolleri kaybolana kadar aynı anda basılı tutmak. Arıza giderilemezse servisi ya da müşteri hizmetlerini arayıp arıza kodunu ve cihaz bilgilerini bildirmen isteniyor."
images:
  coverAlt: "Beyaz bir kombinin altındaki borular; sarı kollu gaz vanasının kolu borunun akış yönüne paralel duruyor, vanaya uzanan bir el"
---

Buderus kombinin ekranında **H** sembolü ve **227** var, kombi yanmıyor. Buderus'un 227 sayfasındaki tanım tek cümle: **"Alev algılanmamaktadır."** Çözüm de tek cümle: **gaz vanasının açık olup olmadığını kontrol et.** Bu yazı o kontrolü Buderus'un GB022i ve GB122i.2 kullanma kılavuzlarıyla adım adım anlatıyor ve reset ile servis sınırını gösteriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 227 = Buderus'a göre alev algılanmıyor. Sıra şu: gaz kokusu yok mu → kombinin gaz vanası akış yönünde mi (açık) → kapalıysa kılavuzdaki gibi aç → bir kez reset → kod sürüyorsa yetkili servis.

## Önce: gaz kokusu varsa bu yazıyı bırak

227 bir gaz kaçağı kodu değil. Ama kombinin çevresinde gaz kokusu alıyorsan vanayla uğraşma sırası değil. GB022i kılavuzunun güvenlik bölümü şunu istiyor:

- Sigara içme, çakmak ve kibrit kullanma.
- Herhangi bir elektrikli şalter kullanma, elektrik fişini çekme.
- Telefonu kullanma, kapı zilini çalma.
- Ana kapama tertibatından ya da gaz sayacındaki vanadan **gaz beslemesini kes**.
- Pencere ve kapıları aç.
- Tüm apartman sakinlerini uyar ve binayı terk et; binaya üçüncü şahısların girmesine engel ol.
- **Binanın dışında:** itfaiyeyi, polisi ve gaz dağıtım şirketini ara.

## 227 hangi Buderus kombilerde çıkar

Buderus'un arıza kodları sayfasında 227, rakamlı kod kullanan **Logamax plus GB122i** ve **GB022i** listelerinde geçiyor. Kılavuzlara göre bu kombilerde arızayı ekranda **H sembolü** gösterir, nedeni bir kodla belirtilir. GB022i montaj kılavuzunun ekran göstergeleri tablosu da **227**'yi arıza kodu örneği olarak veriyor.

Kombin GB072, GB172i ya da Logamax U serisindense alev/ateşleme kodu **6A**'dır: [Buderus kombi 6A hatası](/blog/buderus-kombi-6a-hatasi/).

## Adım adım: evde denenecekler

**1. Gaz kokusunu dışla.** Koku yoksa devam et.

**2. Kodu doğrula.** Ekranda **H** sembolüyle birlikte **227** yazdığından emin ol. Aynı listede **356** ve **2972** de var; onlar gerilimle ilgili, bu yazının konusu değil.

**3. Gaz vanasının konumuna bak.** GB022i ve GB122i.2 kılavuzları vananın durumunu kolunun yönüyle tarif ediyor:

- Kol **akış yönündeyse** vana **açık**.
- Kol **akış yönünün enine** duruyorsa vana **kapalı**.

**4. Vana kapalıysa aç.** Kılavuzun tarifi: **kolu bastır ve sola doğru sonuna kadar çevir.** (Kapatmak için tersi: kolu bastırıp sağa doğru sonuna kadar çevirmek.)

**5. Bir kez resetle.** Kılavuza göre bazı arızalar ısıtma tesisatının kapanmasına yol açar ve tesisat sıfırlanmadan tekrar çalışmaz. İki yol var:

- Cihazı **kapat ve tekrar çalıştır**, ya da
- kılavuzda gösterilen **iki ok tuşunu**, ekranda **H** ve **!** sembolleri artık görünmeyene kadar **aynı anda basılı tut.**

Cihaz tekrar çalışınca ekranda gidiş suyu sıcaklığı görünür.

**6. Kod sürüyorsa dur.** Kılavuzun talimatı: arıza giderilemediğinde **servisi ya da müşteri hizmetlerini ara**, gösterilen **arıza kodunu ve cihaz bilgilerini** bildir.

## Ne zaman doğrudan servis

- Gaz vanası açık olduğu hâlde 227 resetten sonra geri geliyorsa.
- Gaz kokusu varsa: önce yukarıdaki liste, sonra gaz dağıtım şirketi.
- Vana kolunun konumundan emin olamıyorsan.

Buderus'un kılavuzları kombinin **dış sacının asla sökülmemesini** ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

Servisi ararken bildireceğin bilgiler kılavuzun tablosunda sayılıyor: **cihaz adı, seri numarası, işletime alma tarihi** ve yetkili servis. Cihaz adı ve seri numarası **kumanda paneli kapağındaki tip etiketinde** yazılıdır.

## Servisi aramadan önce kısa kontrol

1. Gaz kokusu yok mu?
2. Kombinin gaz vanası kolu akış yönünde mi?
3. Reset bir kez denendi mi, kod geri geldi mi?
4. Model adı ve seri numarası tip etiketinden okundu mu?

Aynı ailenin basınç kodları için [Buderus kombi 1017 ve 2971 hatası](/blog/buderus-kombi-1017-hatasi/), tüm modellerin kodları için [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/), markadan bağımsız belirtiler için [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına bakabilirsin.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
