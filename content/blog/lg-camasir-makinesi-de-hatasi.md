---
title: "LG çamaşır makinesi dE hatası"
description: "LG çamaşır makinesi dE (dE1, dE2, dE4) kapı hatası: kapak tam kapanmıyor mu? Conta arası, kapı kolu ve sarkan kapı kontrolü ile servis sınırı."
slug: "lg-camasir-makinesi-de-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi; PDF'ler pdftotext ile, destek sayfaları sayfanın kendi JSON-LD "articleBody" alanından okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle forumdan, servis sitesinden ya da kılavuz arşiv sitesinden alınmadı.
# İKİ TÜR LG BELGESİ, İKİSİ DE LG'NİN KENDİ ALAN ADINDA:
#  A) F4V5RGP2T kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
#  D) LG TR destek "[LG çamaşır makinesi hata kodu] dE kodu görünüyor ve makine çalışmıyor." (yayın 2025-09-20)
#     https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153390140282/
#     HTML md5 6c795fcc23eec05ec3371fa9b5ebd87f (koşuya özgü; sayfa her istekte oturum belirteci değiştiriyor) · çıkarılan metin md5 b3d71b800a04af217afcfd1727f78604 (kararlı)
#  E) LG TR destek "[LG Çamaşır Makinesi] Hata Kodları - Kapak kapanmıyor (de, dE1, dE2)" (yayın 2025-09-20)
#     https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153390249257/
#     HTML md5 0479a99b51d78dab9eb8b27be56b00d7 (koşuya özgü) · çıkarılan metin md5 08f71df1dba11f38fecd0923b841d9be
# Kılavuz satırı (A s.52, B s.43, C s.45): "dE dE1 dEz dE4 KAPI HATASI | Kapak sensörü arızalı. • Lütfen LG hizmet merkezini arayın."  ("dEz" PDF'te dE2'nin yazımı olarak okunuyor.)
# D: "Böyle bir durumda [dE] işareti görünecek ve çamaşır makinesi çalışmayacaktır." + sebepler + "kapatmak için sapın orta kısmına sıkıca bastırın" + "kapı contasını kendiniz tamir etmeyin"
# E: "Çamaşır makinesini kapağını tamamen kapatmadan çalıştırırsanız, [de, dE1, dE2] gibi hatalar meydana gelir" + "Kapı sarkarsa, kapıyı yukarı kaldırın ve kapatın."
# İKİ KAYNAK FARKLI VURGU YAPIYOR: kılavuz tablosu dE'yi kapak sensörü arızası olarak verip servisi işaret ediyor; destek sayfaları önce kapının tam kapanmasını engelleyen durumları anlatıyor. Yazı ikisini de söylüyor.
# Bilerek YAZILMAYANLAR: "dE2 / E30 = kilit arızası" ayrımı (TR belgelerinde yok; kılavuz dE, dE1, dE2, dE4'ü tek satırda veriyor), kilit/mandal/conta değişimi, fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-de-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Kapağı aç ve kapak contası ile kapak camı arasına çamaşır girip girmediğine bak."
  - "Çamaşırları tamburun daha derinine it; battaniye gibi hacimli bir eşya kapağı itiyorsa onu da içeri yerleştir."
  - "Kapağı, sağdaki kapı kolunun ortasına bastırarak kapat; üstünden ya da altından itme."
  - "Kapak sarkıyorsa hafifçe yukarı kaldırarak kapat."
  - "Kapı contasında yırtık ya da yerinden çıkma, kapı mandalında bükülme ya da kırık olup olmadığına bak; varsa makineyi kullanma, servise haber ver."
  - "Programı başlat; kapı düzgün kapalıyken dE sürüyorsa LG servisine başvur."
faq:
  - q: "LG çamaşır makinesinde dE hatası ne demek?"
    a: "dE bir kapı hatasıdır. LG Türkiye destek sayfasına göre çamaşırlar düzgün yerleştirilmezse ya da kapak kapatıldığında sızdırmaz hâle gelemiyorsa dE işareti görünür ve makine çalışmaz. LG'nin Türkçe kullanım kılavuzlarındaki tablo ise dE, dE1, dE2 ve dE4 kodlarını kapak sensörü arızası olarak verip LG hizmet merkezinin aranmasını istiyor."
  - q: "dE, dE1, dE2 ve dE4 arasında fark var mı?"
    a: "LG'nin Türkçe kılavuzları dört kodu tek satırda, aynı başlıkla (kapı hatası) ve aynı açıklamayla veriyor. LG Türkiye destek sayfası da de, dE1 ve dE2'yi kapağı tam kapatmadan çalıştırıldığında görülen hatalar olarak birlikte anıyor. Belgelerde bu kodlar arasında ayrı bir anlam farkı tarif edilmiyor."
  - q: "Kapağı kapattım ama dE gitmiyor, ne yapmalıyım?"
    a: "LG'ye göre kapağı üstünden ya da altından değil, sağdaki kapı kolunun ortasına sıkıca bastırarak kapat; kapı kilidi o kolun yanında durur. Kapak sarkıyorsa yukarı kaldırarak kapat. Conta yırtık ya da mandal bükükse, ya da kapı düzgün kapalıyken kod sürüyorsa LG servisine başvur."
  - q: "Kapı contasını kendim değiştirebilir miyim?"
    a: "LG Türkiye destek sayfası bunu açıkça istemiyor: conta makinenin sızdırmazlığının önemli bir parçası olduğu için kendin tamir etme. Conta yırtık, eksik ya da yerinden çıkmışsa bir servis teknisyenine kontrol ettir."
images:
  coverAlt: "Ön yüklemeli beyaz bir çamaşır makinesinin aralık duran kapağı; gri kauçuk contanın kenarından dışarı taşmış bir havlu ucu"
---

Çamaşırları yerleştirdin, kapağı kapattın, başlat tuşuna bastın; makine çalışmadı ve ekranda **dE** yazıyor (bazı modellerde **dE1**, **dE2** ya da **dE4**). LG'nin kendi belgelerinde bu kod bir **kapı hatası**dır. LG Türkiye destek sayfasının açıklaması şu: ön yüklemeli çamaşır makinesinin kapısı, yıkama ve sıkma sırasında su ya da buhar sızmasın diye **tamamen sızdırmaz** olacak şekilde tasarlanmıştır; kapak kapatıldığında sızdırmaz hâle gelemezse **"[dE] işareti görünecek ve çamaşır makinesi çalışmayacaktır."** Bu yazıda LG'nin kendi sayfalarındaki kontrolleri sırayla ve kodun servis gerektirdiği yeri açıkça anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** dE = LG'ye göre kapı hatası; kapak tam kapanmıyor ya da kapak sensörü sorun bildiriyor. Sıra şu: conta ile cam arasına çamaşır girmiş mi → çamaşırı içeri it → kapağı sağdaki kolun ortasına bastırarak kapat → sarkıyorsa yukarı kaldırarak kapat. Conta yırtık, mandal bükük ya da kapı düzgün kapalıyken kod sürüyor → LG servisi.

## Adım adım: evde denenecekler

**1. Conta ile cam arasına bak.** LG'nin ilk sorusu: çamaşırlar **kapak contası ile kapak camı arasına** mı girmiş? LG'ye göre bu aralığa takılan çamaşır kapağın tam kapanmasını engeller ve dE gösterilebilir. Kapağı aç ve contanın çevresini dolaş.

**2. Çamaşırı içeri it.** LG'nin çözümü: çamaşırları **tamamen makinenin içine** it ki kapıdan dışarı taşmasın. Battaniye gibi hacimli bir eşya kapağı itiyorsa kapak tam kapanmayabilir; kapatmadan önce onu da tamburun derinine yerleştir.

**3. Kapağı kolun ortasından kapat.** LG'nin ikinci sorusu: kapağı üstünden ya da altından mı itiyorsun? LG'nin talimatı: kapıyı **sağdaki kapı kolunun ortasına bastırarak** kapat. Gerekçe de yazılı: kapı kilidi sağdaki kolun yanında durur, kapıyı kolayca kapatıp kilitlemek için o kolun ortasına bastırmak gerekir. Kapak düzgün kapanmadıysa kolu çekip yeniden aç ve kapağın ortasına sıkıca bastırarak tekrar kapat.

**4. Sarkan kapağı kaldırarak kapat.** LG'ye göre kapı **sarkarsa kapanmayabilir**. Çözüm: kapıyı yukarı kaldır ve öyle kapat. LG, kapının üst kısmından itilerek kapatılmasının ya da kapıya uzun süre yorgan veya kıyafet asılmasının sarkmaya yol açabileceğini yazıyor.

**5. Contaya ve mandala gözle bak.** Dokunmadan kontrol et: kapı contası **yırtık, eksik ya da yerinden çıkmış** mı, kapıyı makineye bağlayan **mandal bükülmüş ya da kırık** mı? LG'ye göre bunların her biri dE'ye yol açabilir ve bu noktada talimat nettir: bir servis teknisyenine kontrol ettir. Contayı kendin onarmaya çalışma.

**6. Programı yeniden başlat.** Çamaşır içeride, kapak kolun ortasından kapatılmış ve dE yine çıkıyorsa kılavuzun satırı devreye girer: LG'nin Türkçe kullanım kılavuzları dE, dE1, dE2 ve dE4 için **"Kapak sensörü arızalı"** diyor ve LG hizmet merkezinin aranmasını istiyor.

## dE tam olarak neyi söylüyor?

LG'nin iki tür belgesi bu koda iki ayrı açıdan bakıyor ve ikisini birlikte okumak işe yarıyor.

**Kullanım kılavuzu tablosu** kısa: "dE dE1 dE2 dE4 · KAPI HATASI · Kapak sensörü arızalı. Lütfen LG hizmet merkezini arayın." Tablo, kodu gördüğünde servisi işaret ediyor.

**LG Türkiye destek sayfaları** daha ayrıntılı ve önce kullanıcının kontrol edebileceği sebepleri sayıyor:

| Sebep (LG'nin ifadesiyle) | Kimin işi |
|---|---|
| Kapağın düzgün kapanması için çok fazla çamaşır var ya da kapak ile conta arasına çamaşır girmiş | 🛠️ Kendin: çamaşırı içeri it |
| Kapak düzgün kapatılmamış | 🛠️ Kendin: kolun ortasına bastırarak kapat |
| Kapı sarkıyor | 🛠️ Kendin: kaldırarak kapat; onarım gerekiyorsa servis |
| Kapak contasında sorun var (yırtık, eksik, yerinden çıkmış) | 🔧 Servis |
| Kapı mandalı bükülmüş ya da kırık | 🔧 Servis |
| Eksik bir mıknatıs ya da arızalı bir sensör | 🔧 Servis |

Aynı sayfalara göre makine kapağı **tamamen kapatılmadan** çalıştırılırsa de, dE1 ve dE2 gibi hatalar görülür ve makine düzgün çalışmaz. LG'nin belgelerinde bu kodlar arasında ayrı bir anlam farkı tarif edilmiyor; dört kod da aynı satırda, aynı başlıkla yer alıyor.

## Kodu önlemek için: yükleme ve kapak alışkanlığı

LG'nin kullanım bölümündeki uyarı bu kodun önlemidir: kapıyı kapatmadan önce **tüm kıyafetlerin kazanın içinde** olduğundan ve kapı kapandığında arada kalacakları şekilde **kapı lastiğinden sarkmadığından** emin ol; aksi hâlde kapı lastiği de kıyafetler de zarar görür. Kılavuza göre makine tamamen doldurulabilir ama tambur çamaşırla tıka basa doldurulmamalı; **kapı kolayca kapanmalı**.

Program bitince LG iki alışkanlık öneriyor: çamaşırları alırken **kapak lastiğini** içine kaçmış küçük nesneler için kontrol et, nemi önlemek için de kapağı ve kapak lastiğini sil. Kapağa yorgan ya da kıyafet asmaktan kaçın; LG bunun kapının sarkmasına yol açabileceğini yazıyor.

Program bittiği hâlde kapak açılmıyorsa bu başka bir durumdur; sırayla denenecekler [çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısında.

## Sınır nerede biter

Çamaşırın yeri, kapağın kapatılışı ve contanın gözle kontrolü kullanıcıya aittir. Conta, mandal, kilit ve sensör değildir. LG Türkiye destek sayfası contayı özellikle anıyor: makinenin sızdırmazlığının önemli bir parçası olduğu için **kapı contasını kendin tamir etme**.

⛔ **Kendin-çöz sınırı burada biter.** Conta yırtık ya da yerinden çıkmış, mandal bükük ya da kapı düzgün kapalıyken dE sürüyor: yetkili LG servisine başvur.

## Servisi aramadan önce iki dakikalık özet

1. Kapak ile conta arasında çamaşır var mıydı?
2. Kapak kolun ortasından bastırılarak kapatıldı mı?
3. Kapak sarkıyor mu, üzerine bir şey asılıyor mu?
4. Contada yırtık, mandalda bükülme görünüyor mu?
5. Ekranda tam olarak hangi kod var: dE, dE1, dE2 ya da dE4?

Bu beşine cevabın varsa servise "kapı kapanmıyor" yerine somut bir tablo anlatabilirsin. LG'nin diğer kodları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
