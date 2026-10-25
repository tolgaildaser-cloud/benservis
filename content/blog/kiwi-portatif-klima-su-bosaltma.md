---
title: "Kiwi portatif klima su boşaltma: E7, FL ve tahliye hortumu"
description: "Kiwi portatif klimada E7 ya da FL su dolu uyarısı: kılavuza göre kapat, fişi çek, tahliye tapasıyla suyu boşalt; sürekli tahliye için hortumu bağla."
slug: "kiwi-portatif-klima-su-bosaltma"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme K3, çatal 4). origin/main'de Kiwi yazısı yok; "portatif" geçen slug/başlık yok.
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr) tohum "kiwi portatif klima": 1. "…yorum" · 2. "…a101" · 3. "…9000 btu" · sonra "…14000 btu", "…7911", "…kullanım kılavuzu".
#   Kiwi kapsamı Tolga talimatıyla yeterli; su boşaltma niyeti PAZ brifinden. GSC: https___www-3…6 Sorgular.csv'de "kiwi" ve "portatif" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf. #88: yalnız Kiwi'nin kendi kılavuzları.
#  (A) KAC-7910 kullanım kılavuzu  https://static.kiwi.com.tr/media/media/974/files/media_kac-7910-im_01082025032156_688cb164c5058.pdf  4 s.  md5 b076d60814ddf6f1b0c0f0fae936ec76
#  (B) KAC-7911 kullanım kılavuzu  https://static.kiwi.com.tr/media/media/981/files/media_kac-7911-im_01082025033617_688cb4c1c18a7.pdf  4 s.  md5 b25afa45554983a1872c071754e996f3
#  (C) KAC-7912 kullanım kılavuzu  https://static.kiwi.com.tr/media/media/1999/files/media_kac-7912-im-new_11082026110023_6a7ad69725e65.pdf  3 s.  md5 dd490811b02daff86f0e650dfd101717
#  (D) KAC-7914 kullanım kılavuzu  https://static.kiwi.com.tr/media/media/2004/files/media_kac-7914-im_11082026111205_6a7ad955040b1.pdf  4 s.  md5 be5c0d23890d43d4d999cd352b203ffa
# E7 su dolu A s.3 · B s.3 · D s.3 · FL C s.1 · tahliye tapası A/B/D s.3, C s.1 · hortum orta/alt bağlantı A/B/D s.3, C s.1 · kuru modda egzoz hortumu C s.1
#   · filtre A/B/C/D · söküp onarma yasağı A/B/C/D · düz ve yatay yüzey C s.3 · 50 cm boşluk B s.3.
# BİLEREK YAZILMAYANLAR: gaz (R290) devresi, kasa açma, pompa/şamandıra teşhisi · "E7 neden sık çıkar" açıklaması (belgede yok) · depo hacmi/boşaltma sıklığı (belge vermiyor) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-portatif-klima-su-bosaltma.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Sığ bir kap ya da tepsi", "Kuru bez", "Cihazla gelen tahliye hortumu"]
steps:
  - "Ekranda Dolu simgesi ve E7 ya da FL görürsen klimayı kapat ve fişini çek."
  - "Cihazı düz ve yatay zeminde tut, tahliye tapasının altına sığ bir kap koy."
  - "Alt tepsinin tahliye tapasını çıkar ve birikmiş suyu kaba boşalt."
  - "Su bitince tapayı yerine tak, zemini sil, fişi takıp klimayı yeniden aç."
  - "Sık boşaltmak istemiyorsan tahliye hortumunu arkadaki orta bağlantıya tak, ucunu gidere ya da bir kaba yönlendir."
  - "Nem alma (kuru) modunu kullanacaksan egzoz hortumunu çıkar, drenaj hortumunu bağla."
  - "Sezon sonunda suyu boşalt, fan modunda iç kısmı kurut, filtreyi temizleyip cihazı kuru bir yerde sakla."
faq:
  - q: "Kiwi portatif klimada E7 ne demek?"
    a: "KAC-7910, KAC-7911 ve KAC-7914 kılavuzlarına göre su deposu dolduğunda ekranda Dolu simgesi yanıp söner ve E7 kodu görünür. Kılavuzun tarifi: cihazı kapat, fişini çek, su deposunu boşalt; boşalttıktan sonra cihaz yeniden çalışmaya hazırdır."
  - q: "FL uyarısı neden çıkıyor?"
    a: "KAC-7912 kılavuzunda su haznesi dolunca ekranda Dolu / FL uyarısı görünür ve cihaz kendiliğinden durur. Aynı kılavuz nem alma (kuru) modunda egzoz hortumunun çıkarılmasını, aksi hâlde performansın düşeceğini ve FL uyarısının öteceğini yazıyor."
  - q: "Tahliye hortumunu nereye bağlamalıyım?"
    a: "Kiwi kılavuzları iki bağlantı tarif ediyor. Hortum arkadaki orta kısma bağlanırsa su depoda birikmeden doğrudan boşalır. Alt kısma bağlanırsa su deposu dolduğunda güvenlik için boşalır. KAC-7912 kılavuzu hortumun diğer ucunun su tankına ya da gidere yerleştirilmesini söylüyor."
  - q: "Kışın klimayı kaldırmadan önce ne yapmalıyım?"
    a: "Kılavuzun bakım sırası şöyle: alt tepsinin tahliye tapasını çıkarıp suyu boşalt, gövdeyi ve filtreyi temizle, fan modunu seçip iç kısmın kurumasını bekle, cihazı kapatıp kablosunu sar ve serin, kuru bir yere kaldır."
images:
  coverAlt: "Oda köşesinde, pencereye uzanan egzoz hortumu takılı beyaz bir portatif klima"
  steps:
    - "Çizim: solda klima, sağda prizden çekilen fiş"
    - "Çizim: solda klima, sağda yere oturan ayaklar ve su terazisi"
    - "Çizim: solda klima, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda klima, sağda prizden çekilen fiş"
    - "Çizim: solda klima, sağda duvar giderine giden hortum"
    - "Çizim: solda klima, sağda duvar giderine giden hortum"
    - "Çizim: solda klima, sağda ilgili filtre"
---

Kiwi portatif klimanın ekranında **Dolu** simgesi yanıp sönüyor ve **E7** ya da **FL** yazıyorsa klima bozulmadı; su deposu doldu. Kiwi'nin KAC-7910, KAC-7911 ve KAC-7914 kılavuzları bu durumu "su dolu hatırlatıcısı" olarak anlatıyor ve tarifi tek cümleyle veriyor: **cihazı kapatın ve fişini çekin, su deposunu boşalttıktan sonra cihaz tekrar çalışmaya hazır olacaktır.** KAC-7912 kılavuzunda aynı uyarının adı **FL**. Bu yazı suyun nasıl boşaltılacağını, sürekli tahliye için hortumun nereye bağlanacağını ve sezon sonu bakımını Kiwi'nin kendi kılavuzlarından sıralıyor.

> ⚡ **Kısa özet:** E7 ya da FL su deposunun dolduğunu söyler. Klimayı kapat, fişini çek, alt tepsinin tahliye tapasını çıkarıp suyu bir kaba boşalt. Sık boşaltmak istemiyorsan tahliye hortumunu arkadaki orta bağlantıya tak. Nem alma modunda egzoz hortumunu çıkar. Gaz devresine ve cihazın içine dokunma.

## Senin modelinde uyarı nasıl görünüyor

| Model | Kılavuzdaki uyarı | Kılavuzdaki modlar |
|---|---|---|
| KAC-7910 · 9000 BTU | Dolu simgesi yanıp söner, ekranda E7 | Soğutma, nem giderme, fan |
| KAC-7911 · 9000 BTU | Dolu simgesi yanıp söner, ekranda E7 | Soğutma, nem giderme, fan |
| KAC-7912 · 9000 BTU | Dolu / FL, cihaz kendiliğinden durur | Soğutma, fan, kuru (nem alma) |
| KAC-7914 · 14000 BTU | Dolu simgesi yanıp söner, ekranda E7 | Soğutma, akıllı soğutma, fan, nem alma, sıcak |

Kılavuzlar E7'yi bir arıza olarak değil, cihazın kendi kendini denetleme işlevi olarak anlatıyor: depo dolunca klima seni uyarıyor ve suyu boşaltmanı bekliyor. Parça listelerinde de tahliye noktaları ayrı ayrı yazıyor: KAC-7910'da nem giderme tahliyesi ve su dolu tahliye borusu, KAC-7912'de drenaj deliği, KAC-7914'te üst ve alt drenaj portu ile drenaj borusu.

## Adım adım: suyu boşaltma ve sürekli tahliye

**1. Kapat ve fişi çek.** Ekranda Dolu simgesini ve E7 ya da FL'yi gördüğünde klimayı kapat, fişini prizden çek. Kiwi kılavuzları temizlik ve bakımdan önce de aynı şeyi istiyor.

**2. Düz zemin, sığ kap.** Cihazı düz ve yatay zeminde tut; KAC-7912 kılavuzu su sızıntısını önlemek için cihazın yalnız düz ve yatay bir yüzeyde çalıştırılmasını istiyor. Tahliye tapasının altına sığ bir kap ya da tepsi koy.

**3. Tapayı çıkar, suyu boşalt.** Alt tepsinin tahliye tapasını çıkar ve birikmiş suyu kaba boşalt. Kılavuz E7 satırında boşaltmanın nasıl yapılacağını ayrıca yazmıyor; bu tarif bakım bölümünde geçiyor, burada aynısını uyguluyoruz.

**4. Tapayı tak, yeniden başlat.** Su bitince tapayı yerine tak ve zemine damlayan suyu kuru bezle sil. Tapanın geri takılması kılavuzda ayrı bir cümle olarak yok; KAC-7912 kılavuzu tapanın yalnız drenaj hortumu bağlanırken çıkarıldığını yazdığı için bu bizim çıkarımımız. Ardından fişi tak; kılavuza göre depo boşalınca cihaz yeniden çalışmaya hazır.

**5. Sürekli tahliye için hortum.** Depoyu sık boşaltmak istemiyorsan kutudan çıkan tahliye hortumunu kullan. Kiwi kılavuzlarındaki kural şu: hortum **arkadaki orta kısma** bağlanırsa su depoda birikmeden doğrudan boşalır; **alt kısma** bağlanırsa su deposu dolduğunda güvenlik için boşalır. KAC-7912 kılavuzu hortumun diğer ucunun bir su tankına ya da gidere yerleştirilmesini söylüyor.

**6. Nem alma modunda egzoz hortumu.** KAC-7912 kılavuzuna göre kuru (nem alma) modunda su tıpası çıkarılır, drenaj hortumu bağlanır ve geniş hava egzoz hortumu çıkarılır. Egzoz hortumu takılı kalırsa performans düşer ve FL su dolu uyarısı öter. Aynı kılavuz bu modda fan hızının ve sıcaklığın sabit olduğunu, kompresörün kendini korumak için 3 dakikalık gecikmeyle çalıştığını da yazıyor.

**7. Sezon sonu bakımı.** Klimayı uzun süre kullanmayacaksan kılavuzun sırası şöyle: alt tepsinin tahliye tapasını çıkarıp suyu boşalt, gövdeyi ve filtreyi temizle, fan modunu seçip iç kısmın bir süre kurumasını bekle, cihazı kapatıp kablosunu sar, klimayı serin ve kuru bir yere kaldır.

## Filtre ve yerleşim

Kılavuzlara göre cihazın arkasında **iki filtre** var. Önce egzoz kanalının iç bağlantısını, sonra filtre ekranını çıkar. Filtredeki tozu düşük ayarda bir elektrik süpürgesiyle alabilirsin; çok kirliyse ılık su ve hafif deterjanla silip tamamen kurut, ancak kuruduktan sonra yerine tak. Gövdeyi yumuşak, hafif nemli bir bezle sil; aşındırıcı deterjan kullanma. Hava giriş ve çıkışlarını kapatma, cihazın çevresinde en az 50 cm boşluk bırak. Duvar klimalarındaki su damlatma sorunu ayrı bir konu; onun için [klima su damlatıyor](/blog/klima-su-damlatiyor/) yazısına, filtre bakımının genel mantığı için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| E7, FL, Dolu simgesi | Senin, bu yazıdaki adımlar |
| Filtre kirli, hava zayıf | Senin, filtre temizliği |
| Elektrik kablosu ya da priz hasarlı | Kullanma; yetkili servis |
| Gövdeden düzenli su sızıyor, depo boşken de uyarı sürüyor | Yetkili servis |

⛔ Kiwi kılavuzları cihazı kendin sökmeye ya da onarmaya çalışmamanı açıkça yazıyor. Bu klimalarda R290 soğutucu gaz var; KAC-7912 kılavuzu gaz devresiyle ilgili her işi yetkin kişilere bırakıyor. Kablo hasarlıysa üretici, servis temsilcisi ya da benzer biçimde kalifiye kişiler tarafından değiştirilmeli.

---

**Kaynak künyesi.** Su dolu uyarısı, tahliye tapası ve hortum bağlantısı, nem alma modu notu, filtre ve saklama talimatı Kiwi'nin KAC-7910, KAC-7911, KAC-7912 ve KAC-7914 portatif klima kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
