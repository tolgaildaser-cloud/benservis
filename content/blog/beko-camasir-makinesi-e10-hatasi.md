---
title: "Beko çamaşır makinesi su alamıyor: E10 diye aradığın kod aslında E8"
description: "Beko'nun resmî listesinde E10 yok; su alamama kodu E8. Musluk, hortum ve giriş süzgeci kontrolüyle çoğu zaman evde çözülür — adım adım yol burada."
slug: "beko-camasir-makinesi-e10-hatasi"
date: "2026-08-20"
category: "Çamaşır makinesi"
# 🔴 22 Ağu 2026 — YAZININ DAYANAĞI DÜZELTİLDİ (kod tablosu denetimi, TARAMA-1).
# Yazı baştan sona "E10 = su alamama" varsayımı üzerine kuruluydu. Beko'nun yayımladığı
# on kodluk listede E10 YOK; su alma kodu E8 ("Makine Su Almıyor").
# Kaynak: beko.com.tr/blog/camasir-makinesi-hata-kodlari-rehberi (Arçelik birebir aynı).
#
# ⚠️ SLUG BİLEREK KORUNDU. "Beko E10" araması gerçek: üçüncü taraf servis siteleri bu
# kodu yıllardır yayıyor ve insanlar onu aratıyor. Yazıyı silmek o okuru 404'e, slug'ı
# değiştirmek ise başka bir uydurma listeye gönderirdi. Doğru hamle: adresi koru, okuru
# karşıla ve doğrusunu söyle. Yazı artık ilk paragrafta E10'un listede olmadığını yazıyor.
#
# ⛔ `guide` ve `steps` DEĞİŞTİRİLMEDİ — altı adımın tamamı su alma hattına ait ve E8 için
#    birebir doğru; gövdedeki **1.–**6. numaralı paragraflar da korundu (rehber denetimi).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Küçük fırça (eski diş fırçası)", "Sığ bir kap"]
steps:
  - "Programı iptal et, makineyi kapat ve fişini çek."
  - "Musluğun tam açık olduğunu ve evde su aktığını kontrol et."
  - "Su giriş hortumunda bükülme veya ezilme var mı bak, varsa düzelt."
  - "Musluğu kapat, hortumu elinle sök ve girişteki süzgeci fırçayla akan suda temizle; altına havlu ser."
  - "Hortumu geri tak, musluğu aç, bağlantıdan sızıntı olmadığını kontrol et."
  - "Fişi tak ve kısa bir programla dene; hata tekrarlıyorsa servis gerekir."
faq:
  - q: "Beko çamaşır makinesinde E10 hatası ne demek?"
    a: "Beko'nun kendi sitesinde yayımladığı on kodluk listede E10 diye bir kod yok. Su alma tarafının kodu E8'dir ve karşılığı 'Makine su almıyor'dur. Ekranındaki kodu bir kez daha kontrol et; ne olursa olsun makinen su almıyorsa bu sayfadaki kontrol listesi senin için geçerlidir."
  - q: "Su alma hatası fişten çekince geçer mi?"
    a: "Kod geçici bir takılmadan geldiyse geçebilir: makineyi kapatıp fişten çek, birkaç dakika bekle ve yeniden dene. Ama suyun gelmesini engelleyen gerçek bir sebep varsa kod aynı noktada tekrar gelir. Bu yüzden resetlemeyi tek başına çözüm değil, kontrollerin sonundaki deneme adımı olarak kullan."
  - q: "Musluk açık, su var ama makine yine su almıyor — neden?"
    a: "En sık atlanan sebep hortum girişindeki küçük süzgecin kireç ve tortuyla tıkanmasıdır; su gelir ama makinenin istediği hızda gelemez. İkinci aday, hortumun mobilya arkasında ezilmiş olmasıdır. Bu ikisi de temizse ve şebeke basıncı normalse şüphe makinenin su giriş valfine kayar — orası servis işidir."
  - q: "Su alma hatası sürekli tekrarlıyorsa hangi parçalar sorumlu olabilir?"
    a: "Dış kontroller temiz olduğu hâlde tekrarlayan su alma hatasında başlıca adaylar su giriş valfi, su seviyesini ölçen sensör ve bunları yöneten elektronik karttır. Bu parçaların hepsi gövdenin içindedir ve teşhisi ölçü aletiyle yapılır; kullanıcı tarafında denenecek bir şey kalmamıştır. Belirtiyi not edip servise aktarmak en hızlı yoldur."
images:
  coverAlt: "Fayans duvardaki krom musluğa bağlı beyaz çamaşır makinesi su giriş hortumu"
---

Programı başlattın, makine birkaç saniye sessiz bekledi, sonra durdu. Tambur kuru, yıkama hiç başlamamış. Kodu arattığında karşına **E10** çıkıyor.

**Beko'nun kendi sitesinde yayımladığı on kodluk listede E10 diye bir kod yok.** Su alma tarafının kodu **E8**'dir ve üreticinin karşılığı "Makine su almıyor"dur.

İyi haber şu ki bu ayrım çözümü değiştirmiyor. Makinen su almıyorsa, en yaygın sebepler makinenin **içinde değil dışındadır**: musluk, hortum ve süzgeç üçgeninde. Bu rehberde evde güvenle yapabileceğin kontrolleri sırayla anlatıyoruz ve işin nerede servise devrolduğunu açıkça söylüyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıra şu: musluk ve su kesintisi → hortumda bükülme → hortum girişindeki süzgecin temizliği → resetleyip kısa programla deneme. Hepsi temizse ve hata tekrarlıyorsa sorun valf/sensör tarafındadır → servis.

## Kod ne anlatıyor?

Makine su almaya başladığında içerideki seviye ölçümü sürekli izlenir. Belirlenen süre dolduğunda hedef seviyeye ulaşılamamışsa program güvenli şekilde durdurulur ve kod gösterilir. Yani bu kod "bir parça yandı" demek değildir; **"su bana ulaşmıyor"** demektir. Bu ayrım önemli, çünkü suyun ulaşmama sebeplerinin çoğu ücretsiz ve beş dakikalık kontrollerle bulunur.

Ekranındaki kodu bir kez daha kontrol etmekte fayda var: tek haneli bir gösterimi iki haneli okumak yaygın bir yanılgıdır. Kesin karşılığı her zaman kendi makinenin kılavuzundan teyit et.

## Adım adım: evde denenecekler

**1. Güvenliği al.** Programı iptal et, makineyi kapat ve **fişini çek**. Su ve elektrikle aynı anda uğraşma.

**2. Musluğu kontrol et.** Makinenin arkasındaki su musluğu tam açık mı? Temizlik ya da tadilat sonrası kısılmış olabilir. Aynı anda evde su olup olmadığına da bak — mahalle kesintisi, bu hatanın en masum sebebidir.

**3. Hortuma bak.** Su giriş hortumu makinenin arkasında büküldüyse, mobilya altında ezildiyse su geçişi daralır. Hortumu rahatlat, keskin kıvrımları düzelt.

**4. Süzgeci temizle.** En çok atlanan adım. **Musluğu kapat**, hortumu makine tarafından elinle çevirerek sök (altına havlu ser, bir miktar su gelir). Hortum girişinde küçük bir süzgeç göreceksin; kireç ve tortu burada birikir. Süzgeci küçük bir fırçayla akan suyun altında temizle.

**5. Geri tak ve sızdırmazlığı kontrol et.** Hortumu elinle sıkıca tak, musluğu aç, bağlantıdan damlama olmadığından emin ol.

**6. Resetleyip dene.** Fişi tak, kısa bir program başlat. Su sesi geliyorsa ve program ilerliyorsa sorun büyük ihtimalle süzgeç ya da hortumdu.

⚠️ Hortumu sökerken **musluk mutlaka kapalı** olsun; aletle zorlamana gerek yok, bağlantılar el gücüyle çözülüp takılacak şekilde tasarlanmıştır.

## Programın ortasında gelen su alma hatası farklı mı?

Çoğu su alma hatası program başında gelir, çünkü su alma en başta yapılır. Ama kod program ortasında da gelebilir: makine durulama için yeniden su ister ve o anda su ulaşmazsa aynı hata düşer. Bu senaryoda da kontrol listesi değişmez; yalnızca bir ihtimal daha eklenir — **anlık basınç düşmesi**. Evde aynı anda başka bir yoğun su tüketimi varsa (bahçe sulama, dolan bir sıcak su tankı, aynı hatta çalışan ikinci bir makine) şebeke basıncı makinenin beklediği seviyenin altına inebilir. Böyle bir çakışma olduysa makineyi tek başına çalıştırıp tekrar dene; hata gelmiyorsa arıza değil basınç meselesidir.

**Kendin kontrol et:** Kodun geldiği saatlerde evde ya da binada su basıncının düşüp düşmediğini gözle. Üst katlarda ve yoğun saatlerde basınç dalgalanması bilinen bir durumdur; makine bunu "su gelmiyor" olarak okur.

## Tekrarını önlemek için küçük bir alışkanlık

Bu hatanın ev kaynaklı sebepleri kendini tekrar eder: süzgeç aynı hızda yeniden kireçlenir, hortum aynı köşede yeniden bükülür. Kireçli su olan bölgelerde giriş süzgecini **yılda bir-iki kez** temizlemeyi rutine bağlamak, bu hatayı büyük ölçüde tarihe karıştırır. Makineyi yerinden oynattığın her seferde (temizlik, tadilat, taşınma) hortumun arkada sıkışmadığını kontrol etmek de aynı derecede ucuz bir sigortadır.

## Hata tekrarlıyorsa: sınırın burası

Dış hattın tamamı — musluk, hortum, süzgeç — temiz olduğu hâlde kod tekrar geliyorsa, şüphe makinenin içine kayar: **su giriş valfi** açılma komutunu yerine getiremiyor olabilir, **seviye ölçümü** yanlış okuyor olabilir ya da elektronik kart valfi sürmüyor olabilir. Bu üçünün teşhisi ölçü aletiyle, değişimi ise gövde açılarak yapılır.

⛔ **Kendin-çöz sınırı burada biter.** Gövde içi hem elektrik hem su barındırır; valf ve sensör tarafına kullanıcı müdahalesi ne güvenlidir ne de gereklidir. Bu noktada doğru hamle, yaptığın kontrolleri not edip servisle konuşmaktır: "musluk açık, süzgeç temiz, hortum düz, yine su almıyor" cümlesi servise arızayı yarı yarıya teşhis ettirir.

## Servisi aramadan önce iki dakikalık özet

1. Musluk tam açık, evde su var — kontrol edildi mi?
2. Hortum düz, ezilme yok — kontrol edildi mi?
3. Giriş süzgeci temizlendi mi?
4. Fişten çekip birkaç dakika sonra tekrar denendi mi?

Dördüne de "evet" diyorsan elinde artık tek kelimelik bir şikâyet değil, servise anlatabileceğin net bir tablo var. Bu, hem doğru parçayla gelinmesini hem de işin ilk seferde bitmesini kolaylaştırır.

Beko çamaşır makinesi hata kodları yazımızda üreticinin yayımladığı on kodun tamamı ve her birinde ne yapman gerektiği var. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
