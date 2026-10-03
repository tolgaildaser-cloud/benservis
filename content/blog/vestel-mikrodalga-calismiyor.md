---
title: "Vestel mikrodalga çalışmıyor"
description: "Vestel mikrodalga çalışmıyorsa: fişi 10 saniye çekip tak, prizi test et, kapağı kapat, Başlat'ı 1 dakika içinde onayla, çocuk kilidini Durdur ile aç."
slug: "vestel-mikrodalga-calismiyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alt alan adından (statik.vestel.com.tr)
#   indirildi, HTTP 200, application/pdf, yönlendirme 0. Web araması yalnız belgelerin yerini bulmak için. Sayfa = PDF sayfası. Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  V1) Vestel MD 20 DB / MD 20 DG mikrodalga fırın kullanım kılavuzu       https://statik.vestel.com.tr/webfiles/20217506_k.pdf  27 s.  md5 0f914099bc91b0a3c8497b7023859672
#  V2) Vestel mikrodalga fırın kullanım kılavuzu (ızgara/kombi modlu; model adı kapakta yok, belge no 20210080)  https://statik.vestel.com.tr/webfiles/20210080_k.pdf  28 s.  md5 34a06552e71ab0954ba02039d64df0e9
# Ana tablo: V1 s.21 · V2 s.20 "Sorun Giderme": "Fırın çalışmıyor." → "Elektrik fişi iyice takılmamış." / "Fişi prizden çıkarın. 10 saniye sonra tekrar takın." · "Sigorta
#   atmış veya devre kesicisi çalışıyor." / V1 "Yetkili servis çağırın." · V2 "Sigortayı değiştirin veya devre kesiciyi sıfırlayın (yetkili servis teknisyeni tarafından tamir
#   edilmelidir)." · "Prizde sorun var." / "Prizi diğer elektrikli cihazlarla test edin." · "Fırın ısınmıyor." → "Kapak düzgün kapatılmamış." / "Kapağı iyice kapatın."
#   · "Mikrodalga fırın çalıştığında cam döner tabla ses çıkarıyor." → "Kirli makara sürgüsü ve fırın tabanı." / ""Temizlik ve Bakım" kısmına bakın."
#   · "Normal": TV yayınını etkiliyor / sönük fırın lambası (düşük güç) / kapakta buharlaşma / "Fırını, içinde yiyecek olmadan çalıştırmak yasaktır. Bu durum çok tehlikelidir."
#   · V1 s.21 giriş: "Cihazınız hala normal çalışmasına devam etmiyorsa Vestel İletişim Merkezi ile irtibata geçiniz."
# Çalıştırma: V1 s.20 "Pişirme sırasında kapak açılırsa mikrodalga fırınınız duracaktır. Pişirme işlemine devam etmek için kapağı kapattıktan sonra "Başlat/+30 Sn./ Onayla"
#   düğmesine basılmalıdır." · "Pişirme programı ayarlandığında, 1 dakika içinde " Başlat/+30 Sn./Onayla" düğmesine basılmazsa, geçerli saat görüntülenecektir. Ayar iptal
#   edilecektir." · "Düğmelere etkili bir şekilde basıldığında sesli uyarı bir kez çalar, etkisiz bir şekilde basılırsa tepki verilmez."
# Çocuk kilidi: V1 s.20 "Kilitleme: Bekleme durumundayken, "Durdur" düğmesine 3 saniye boyunca basın ... uzun bir "bip" sesi duyulacak" · "Kilitlemenin iptal edilmesi: Kilit
#   durumundayken, "Durdur" düğmesine 3 saniye boyunca basın, kilidin açıldığını belirten uzun bir "bip" sesi duyulacaktır." · V2 s.19 aynı işlem "Durdur/İptal" düğmesiyle;
#   "Kilit göstergesi yanacaktır."
# Bakım: V1 s.21 "Temizlik ve Bakım işlemine başlamadan önce cihazınızı kapatın ve fişini prizden çekin." "Kapağın çerçevesi, contası ve yakınındaki parçalar düzenli olarak
#   nemli bir bezle dikkatlice temizlenmelidir." "Cam tepsinin temizlik için arada bir çıkarılması gerekir. Tepsiyi ılık, sabunlu suda veya bulaşık makinesinde yıkayın."
# Bilerek yazılmayanlar: sigorta/devre kesici adımı (iki belge de servis işi diyor) · ekran kodları (belgede yok) · başka Vestel modellerine genelleme · fiyat.
#   Not: Arçelik/Uğur kılavuzlarında aynı tablo var; yakın kopya olmaması için yalnız Vestel yazıldı (bulunamadı listesinde).
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım kılavuzu", "Prizi test etmek için başka bir küçük elektrikli cihaz"]
steps:
  - "Fişi prizden çıkar, 10 saniye bekle ve tekrar tak."
  - "Prizi başka bir elektrikli cihazla test et."
  - "Kapağı iyice kapat; kapak çerçevesini ve contasını nemli bir bezle temizle."
  - "Programı ayarladıktan sonra 1 dakika içinde Başlat/+30 Sn./Onayla düğmesine bas; kapağı açtıysan kapattıktan sonra bu düğmeye yeniden bas."
  - "Düğmeler tepki vermiyorsa çocuk kilidi açık olabilir; Durdur (ya da Durdur/İptal) düğmesine 3 saniye basılı tutarak kilidi aç."
faq:
  - q: "Vestel mikrodalgam hiç çalışmıyor, ne yapmalıyım?"
    a: "Vestel'in sorun giderme tablosunda 'Fırın çalışmıyor' satırının üç nedeni var. Elektrik fişi iyice takılmamışsa fişi prizden çıkarıp 10 saniye sonra tekrar takmak; prizde sorun varsa prizi diğer elektrikli cihazlarla test etmek. Üçüncü neden olan sigorta atması ya da devre kesicinin çalışması için kılavuz yetkili servisi gösteriyor."
  - q: "Programı ayarladım ama ekran saate döndü, neden başlamadı?"
    a: "MD 20 DB / DG kılavuzuna göre pişirme programı ayarlandıktan sonra 1 dakika içinde 'Başlat/+30 Sn./Onayla' düğmesine basılmazsa ekranda geçerli saat görünür ve ayar iptal edilir. Programı yeniden ayarlayıp 1 dakika içinde Başlat düğmesine basman gerekir."
  - q: "Düğmelere basıyorum ama tepki vermiyor, çocuk kilidi mi?"
    a: "Olabilir. Vestel kılavuzuna göre çocuk kilidi bekleme durumundayken Durdur düğmesine 3 saniye basılarak açılıp kapanır; kilit açıldığında uzun bir bip sesi duyulur. Izgara/kombi modlu modelde aynı işlem Durdur/İptal düğmesiyle yapılıyor ve kilitliyken kilit göstergesi yanıyor. Kılavuz ayrıca düğmeye etkili basıldığında bir kez sesli uyarı çaldığını, etkisiz basıldığında tepki verilmediğini yazıyor."
  - q: "Mikrodalga çalışıyor ama ısıtmıyor, neden?"
    a: "Vestel tablosunda 'Fırın ısınmıyor' satırının nedeni kapağın düzgün kapatılmamış olması; çözüm kapağı iyice kapatmak. Bakım bölümü kapağın çerçevesinin, contasının ve yakınındaki parçaların düzenli olarak nemli bir bezle temizlenmesini istiyor."
images:
  coverAlt: "Tezgâhtaki solo bir mikrodalga fırının önünde prizden çekilmiş fiş ve kapağı kapalı fırının dijital ekranı"
---

Mikrodalgayı ayarladın ama başlamıyor; ya da ekran birkaç saniye sonra saate dönüyor. Vestel'in MD 20 DB / MD 20 DG ve ızgara/kombi modlu mikrodalga kılavuzlarındaki sorun giderme tablosunda bu belirti **"Fırın çalışmıyor."** olarak geçiyor ve üç neden sayılıyor: fiş, sigorta ve priz. Tablonun dışında kalan iki ayrıntı ise kılavuzun kullanım bölümünde: **Başlat'a basma süresi** ve **çocuk kilidi.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, 10 saniye bekle, tak → prizi başka cihazla dene → kapağı iyice kapat → programı 1 dakika içinde Başlat ile onayla → tuşlar tepkisizse Durdur'a 3 saniye basıp çocuk kilidini aç. Sigorta atıyorsa ya da sorun sürüyorsa Vestel İletişim Merkezi.

## Adım adım: evde denenecekler

**1. Fişi çek, 10 saniye bekle, tak.** Tablonun ilk nedeni **"Elektrik fişi iyice takılmamış."** Vestel'in çözümü: **"Fişi prizden çıkarın. 10 saniye sonra tekrar takın."**

**2. Prizi test et.** Üçüncü neden **"Prizde sorun var."** Çözüm: **prizi diğer elektrikli cihazlarla test et.** Aynı prize bir şarj aleti ya da küçük bir cihaz takıp çalışıp çalışmadığına bak.

**3. Kapağı iyice kapat.** Fırın açılıyor ama ısıtmıyorsa Vestel tablosundaki neden **"Kapak düzgün kapatılmamış."**, çözüm **"Kapağı iyice kapatın."** Bakım bölümü **kapağın çerçevesinin, contasının ve yakınındaki parçaların** düzenli olarak nemli bir bezle dikkatlice temizlenmesini istiyor. Temizlikten önce cihazı kapatıp fişini çek.

**4. Başlat'a zamanında bas.** MD 20 DB / DG kılavuzuna göre pişirme programı ayarlandıktan sonra **1 dakika içinde "Başlat/+30 Sn./Onayla"** düğmesine basılmazsa ekranda saat görünür ve **ayar iptal edilir.** Aynı bölümde ikinci kural: pişirme sırasında **kapak açılırsa fırın durur**; devam etmek için kapağı kapattıktan sonra **Başlat/+30 Sn./Onayla** düğmesine yeniden basman gerekir.

**5. Çocuk kilidini aç.** Düğmeler hiç tepki vermiyorsa kilit açık olabilir. Vestel'de çocuk kilidi bekleme durumundayken **"Durdur" düğmesine 3 saniye** basılarak açılıp kapanıyor; ızgara/kombi modlu modelde düğmenin adı **"Durdur/İptal"** ve kilitliyken **kilit göstergesi** yanıyor. Kilit açıldığında **uzun bir bip** duyarsın. Kılavuz bir ipucu daha veriyor: düğmeye etkili basıldığında **sesli uyarı bir kez çalar,** etkisiz basıldığında tepki verilmez.

## Arıza sanılan normal durumlar

Vestel'in tablosu bunları açıkça **"Normal"** başlığı altında yazıyor:

- **Radyo ya da TV yayını etkileniyor:** mikser, elektrikli süpürge, fan gibi küçük cihazların parazitine benzer; normaldir.
- **Fırın lambası sönük:** düşük güçlü mikrodalga pişirmede lamba sönük görünebilir; normaldir.
- **Kapakta buhar, deliklerden sıcak hava:** yiyecekten çıkan buharın bir kısmı kapak gibi soğuk yerlerde birikir; normaldir.

Aynı tablo bir uyarı da içeriyor: fırını **içinde yiyecek olmadan çalıştırmak yasaktır** ve çok tehlikelidir. Döner tabla çalışırken ses çıkarıyorsa neden **kirli makara sürgüsü ve fırın tabanı;** cam tepsiyi çıkarıp ılık sabunlu suda ya da bulaşık makinesinde yıkayabilirsin.

Fırın çalışıyor ama ısıtmıyorsa markadan bağımsız kontrol listesi: [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/). Tabla dönmüyorsa: [mikrodalgada tabla dönmüyor](/blog/mikrodalga-tabla-donmuyor/).

## Ne zaman servis

- **Sigorta atıyor ya da devre kesici çalışıyorsa:** MD 20 DB / DG tablosu bu satırda doğrudan **yetkili servisi** gösteriyor; diğer kılavuz da işin yetkili servis teknisyenince yapılmasını istiyor.
- Fiş, priz, kapak, Başlat süresi ve çocuk kilidi kontrol edildiği hâlde fırın **çalışmıyorsa:** Vestel'e göre cihaz hâlâ normal çalışmıyorsa **Vestel İletişim Merkezi** ile irtibata geç; yetkili servis listesi Vestel'in web sitesinde.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, priz denemesi, kapak temizliği ve tuş ayarları kullanıcıya; sigorta, elektrik ve fırının içi servise aittir. Mikrodalganın kasası açılmaz.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde, ör. MD 20 DB)?
2. Ekran yanıyor mu, düğmelere basınca bip geliyor mu?
3. Prize başka bir cihaz takınca çalışıyor mu?
4. Fırını açınca sigorta atıyor mu?

Bu dördüne cevabın varsa servise "çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
