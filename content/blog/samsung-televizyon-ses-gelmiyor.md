---
title: "Samsung televizyonda görüntü var ses yok"
description: "Samsung TV'de ses gelmiyorsa e-Kılavuzun sırası: ses düzeyi, kablo, Ses Çıkışı, kutunun ses ayarı, kulaklık jakı, cihazı yeniden başlatma, eARC ve Ses Testi."
slug: "samsung-televizyon-ses-gelmiyor"
date: "2026-10-03"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2, televizyon). Belge bu koşuda (10:4x) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Samsung'un kendi alan adı: bağlantı samsung.com/tr/support/model/QE65S90CATXTK/ destek sayfasında; downloadcenter.samsung.com.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-tv-3eki/samsung-1.pdf · pdftotext -layout; sayfa = PDF sayfası = basılı "- N -".
#  S1) Samsung TV "Kullanıcı kılavuzu" (e-Manual) Türkçe, BN81-27185C-680, 313 s., md5 03df07cf22f30da3db8dc896307fa67a
#      https://downloadcenter.samsung.com/content/UM/202511/20251118094733324/BN81-27185C-680_EUG_ROPDVBEUF_EU_TUR_251022.0.pdf
#      s.259 "Hiç ses yok veya maksimum ses düzeyinde ses çok düşük. · TV'inizin ses düzeyi kontrolünü yapın ve sonra TV'e bağlı harici cihazın (kablolu yayın kutusu veya uydu kutusu, DVD, Blu-ray vb.) ses düzeyi kontrolünü kontrol edin." / "Harici bir cihaz ve TV arasındaki kablo bağlantısını kontrol edin ve sonra kablo bağlantısını yeniden deneyin."
#      s.259 "Görüntü iyi, ancak ses yok. · Ses Çıkışı ayarını kontrol edin. · TV Hoparlörü seçeneğine ayarlanmışsa ses ayarını kontrol edin." (Ayarlar > Tüm Ayarlar > Ses > Ses Çıkışı) / "Harici bir cihaz kullanıyorsanız, cihazın ses çıkış seçeneğini kontrol edin. · Örneğin, TV'inize bağlı kutu bir HDMI kablosu kullanıyorsa kablolu yayın kutunuzun ses seçeneğini HDMI olarak değiştirmeniz gerekebilir." / "TV'inizde bir kulaklık jakı varsa, jaka hiçbir şey takılı olmadığından emin olun." / "Bağlı cihazın güç kablosunu çekip yeniden takarak cihazı yeniden başlatın." / "Set üstü bir kutusu veya kablo kutusu ile kablo bağlantısını kontrol edin ve harici cihazı yeniden başlatın. Belirti devam ederse Internet servis sağlayıcınıza başvurun."
#      s.260 "HDMI (eARC/ARC) bağlı ve hiç ses yok. · Dijital Çıkış Ses Biçimi ayarının Doğrudan olarak ayarlanıp ayarlanmadığına bakın. · Dolby Digital+ desteği olmayan bir ses çubuğu veya A/V alıcısı kullanılıyorsa ve Doğrudan seçiliyse, bir Dolby Digital+ kaynağı kullanıldığında ses olmaz." / "... Dijital Çıkış Ses Biçimi özelliğinin Otomatik seçeneğine ayarlanması önerilir." (Ayarlar > Tüm Ayarlar > Ses > Uzman Ayarları > Dijital Çıkış Ses Biçimi > Otomatik)
#      s.260 "Hoparlörler garip bir ses çıkarıyor. · Ses Testi öğesini çalıştırın." (Ayarlar > Destek > Cihaz Bakımı > Kendi Kendini Tanılama > Ses Testi) / "Anten veya kablo bağlantıları için, Yayın Sinyali öğesini kontrol edin. Düşük sinyal düzeyi ses bozukluklarına yol açabilir."
#      s.262 "HDMI yoluyla ev sineması gibi harici bir hoparlöre bağlanıldığında, TV'deki HDMI (eARC/ARC) bağlantı noktasına bağlandığından emin olun." / "Anynet+ (HDMI-CEC) öğesinin etkin olduğundan emin olun."
#      s.288 "Ses sıfırlama · Geçerli ses ayarlarını varsayılan ayarlara sıfırlar." (Ayarlar > Tüm Ayarlar > Ses > Uzman Ayarları > Ses Sıfırlama)
# YAKIN KOPYA: Samsung'un yayında televizyon sayfası yok; markasız tv-ses-gelmiyor (sessiz mod, ARC/optik, hoparlör) ile gövde karşılaştırması .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: hoparlör ve ses devresi arızası (belgede yok, servis) · Bluetooth hoparlör eşleme tarifi (ayrı konu) · Dolby/format teknik açıklaması (yalnız kılavuzun cümlesi) · fiyat.
# Alıntı denetim tablosu: samsung-televizyon-ses-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Televizyonun ses düzeyini, ardından bağlı kutu ya da oynatıcının kendi ses düzeyini kontrol et."
  - "Harici cihazla televizyon arasındaki kabloyu çıkarıp yeniden tak."
  - "Ayarlar > Tüm Ayarlar > Ses > Ses Çıkışı'nı aç; TV Hoparlörü seçiliyse ses ayarını kontrol et."
  - "Bağlı kutu HDMI ile bağlıysa kutunun kendi menüsünde ses çıkışını HDMI yap."
  - "Televizyonda kulaklık jakı varsa jaka hiçbir şey takılı olmadığından emin ol."
  - "Bağlı cihazın güç kablosunu çekip yeniden takarak cihazı yeniden başlat."
  - "Ses çubuğu HDMI eARC/ARC ile bağlıysa Uzman Ayarları'nda Dijital Çıkış Ses Biçimi'ni Otomatik yap."
  - "Destek > Cihaz Bakımı > Kendi Kendini Tanılama'dan Ses Testi'ni çalıştır; ses yine yoksa Samsung yetkili servisine başvur."
faq:
  - q: "Samsung televizyonda görüntü var ama ses yok, ilk neye bakmalıyım?"
    a: "Samsung e-Kılavuzu 'Görüntü iyi, ancak ses yok' başlığında ilk olarak Ses Çıkışı ayarını kontrol etmeni istiyor. Çıkış TV Hoparlörü'ndeyse ses ayarına, harici bir cihaz kullanıyorsan o cihazın ses çıkış seçeneğine bakılıyor; televizyonda kulaklık jakı varsa jaka bir şey takılı olmamalı."
  - q: "Ses çubuğunu HDMI ARC'ye taktım, ses gelmiyor. Neden?"
    a: "e-Kılavuza göre Dijital Çıkış Ses Biçimi Doğrudan'a ayarlıysa ve ses çubuğu ya da A/V alıcısı Dolby Digital+ desteklemiyorsa, Dolby Digital+ bir kaynak oynatılırken ses gelmez. Samsung bu ayarın Otomatik'e alınmasını öneriyor. Ses çubuğunun televizyonun HDMI (eARC/ARC) etiketli girişine takılı olduğundan ve Anynet+ (HDMI-CEC) ayarının açık olduğundan da emin ol."
  - q: "Uydu kanallarında ses yok, televizyonun kendi uygulamalarında var. Ne yapmalıyım?"
    a: "e-Kılavuz harici cihaz kullananlar için, kutu HDMI ile bağlıysa kutunun kendi ses seçeneğinin HDMI'ya alınması gerekebileceğini, kutunun kablo bağlantısının kontrol edilip cihazın yeniden başlatılmasını yazıyor; belirti sürerse yayın hizmetini veren sağlayıcıya başvurmanı öneriyor."
  - q: "Ses cızırtılı ya da garip geliyor. Bu da aynı sorun mu?"
    a: "e-Kılavuz bunu ayrı bir başlıkta veriyor: önce Ses Testi'ni çalıştırmanı, ses kablosunun harici cihazdaki doğru çıkışa takılı olduğundan emin olmanı ve anten ya da kablo yayınında Yayın Sinyali'ni kontrol etmeni istiyor; düşük sinyal düzeyi ses bozukluklarına yol açabiliyor."
  - q: "Ses ayarlarını karıştırdım, eski hâline nasıl getiririm?"
    a: "Ayarlar > Tüm Ayarlar > Ses > Uzman Ayarları altındaki Ses Sıfırlama, e-Kılavuza göre geçerli ses ayarlarını varsayılanlara döndürüyor."
images:
  coverAlt: "Oturma odasında açık bir televizyonda renkli bir film sahnesi, ekranın altındaki ses çubuğu ve önde sehpada ses tuşuna basılan bir kumanda"
---

Ekranda her şey yolunda ama hiç ses yok. Samsung'un Türkçe televizyon e-Kılavuzu bunu sorun giderme bölümünde **"Görüntü iyi, ancak ses yok."** başlığıyla veriyor ve ilk iş olarak tek bir ayarı gösteriyor: **"Ses Çıkışı ayarını kontrol edin."** Sesin televizyon hoparlöründen mi, ses çubuğundan mı, bağlı bir kutudan mı geldiğini bu ayar belirliyor. Hemen üstteki **"Hiç ses yok veya maksimum ses düzeyinde ses çok düşük."** başlığı ise önce televizyonun, sonra bağlı cihazın ses düzeyine bakmanı istiyor. Bu yazıda iki başlığı, ses çubuğu kullananlar için eARC/ARC notuyla ve Ses Testi'yle birlikte sıraya koyuyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce televizyonun, sonra kutunun sesini aç. Kabloyu çıkarıp tak. Ses Çıkışı doğru yerde mi bak. HDMI kutuda ses çıkışını HDMI yap. Kulaklık jakı boş mu? Bağlı cihazı fişten çekip yeniden başlat. Ses çubuğunda Dijital Çıkış Ses Biçimi = Otomatik. Ses Testi'ni çalıştır. Sürerse → Samsung yetkili servisi.

## Samsung'un yazdıkları

| Belirti | Samsung'un önerisi | Kimin işi |
|---|---|---|
| Hiç ses yok ya da en yüksekte bile çok düşük | Televizyonun, sonra harici cihazın ses düzeyi; kablo bağlantısı | Senin |
| Görüntü iyi, ses yok | Ses Çıkışı, harici cihazın ses çıkışı, kulaklık jakı, cihazı yeniden başlatma | Senin |
| HDMI (eARC/ARC) bağlı, ses yok | Dijital Çıkış Ses Biçimi = Otomatik | Senin |
| Hoparlörler garip ses çıkarıyor | Ses Testi, ses kablosu, Yayın Sinyali | Senin |
| Kutu ile ilgili belirti sürüyor | İnternet ya da yayın servis sağlayıcısı | Servis sağlayıcı |

## Adım adım: evde denenecekler

**1. İki ses düzeyi.** Televizyonun ses düzeyini, ardından bağlı kutu ya da oynatıcının kendi ses düzeyini kontrol et. e-Kılavuz kablolu yayın ve uydu kutusu, DVD ve Blu-ray oynatıcıyı örnek veriyor; sıra önce televizyon, sonra bağlı cihaz.

**2. Kablo.** Harici cihazla televizyon arasındaki kabloyu çıkarıp yeniden tak. Samsung bu adımı kablo bağlantısını kontrol edip yeniden denemek olarak veriyor.

**3. Ses Çıkışı.** Ayarlar > Tüm Ayarlar > Ses > Ses Çıkışı'nı aç; TV Hoparlörü seçiliyse ses ayarını kontrol et. Sesin hangi cihazdan verileceği bu ayarda seçiliyor; e-Kılavuz bağlantı yöntemini HDMI (eARC/ARC), optik, Bluetooth ve Wi-Fi olarak sayıyor.

**4. Kutunun ses ayarı.** Bağlı kutu HDMI ile bağlıysa kutunun kendi menüsünde ses çıkışını HDMI yap. e-Kılavuz bunu harici cihaz kullananlar için örnek olarak veriyor: kutunun ses seçeneğinin HDMI'ya değiştirilmesi gerekebilir.

**5. Kulaklık jakı.** Televizyonda kulaklık jakı varsa jaka hiçbir şey takılı olmadığından emin ol. Samsung bu kontrolü "görüntü iyi, ses yok" listesinde ayrıca sayıyor.

**6. Bağlı cihazı yeniden başlatma.** Bağlı cihazın güç kablosunu çekip yeniden takarak cihazı yeniden başlat. Set üstü kutu ya da kablo kutusu kullanıyorsan e-Kılavuz kutunun kablo bağlantısını da kontrol etmeni istiyor; belirti sürerse servis sağlayıcına başvurmanı öneriyor.

**7. eARC/ARC ses çubuğu.** Ses çubuğu HDMI eARC/ARC ile bağlıysa Uzman Ayarları'nda Dijital Çıkış Ses Biçimi'ni Otomatik yap. e-Kılavuza göre ayar Doğrudan'dayken ses çubuğu Dolby Digital+ desteklemiyorsa, Dolby Digital+ kaynakta ses gelmez. Ses çubuğunun televizyonun HDMI (eARC/ARC) girişine takılı olduğundan ve Anynet+ (HDMI-CEC) ayarının açık olduğundan da emin ol.

**8. Ses Testi.** Destek > Cihaz Bakımı > Kendi Kendini Tanılama'dan Ses Testi'ni çalıştır; ses yine yoksa Samsung yetkili servisine başvur. Ayarları karıştırdıysan Ses > Uzman Ayarları altındaki Ses Sıfırlama da ses ayarlarını varsayılana döndürüyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ses düzeyleri, kablo, Ses Çıkışı, kutunun ses ayarı, kulaklık jakı, cihazı yeniden başlatma, Dijital Çıkış Ses Biçimi, Ses Testi | Senin, bu rehberdeki adımlar |
| Ses yalnız bağlı kutudan gelen yayında yok, kutu yeniden başlatılmış | Yayın ya da internet servis sağlayıcın |
| Ses Testi'nde de televizyon hoparlöründen ses yok | Samsung yetkili servisi |

⛔ Hoparlöre ulaşmak için televizyonun arka kapağını açma; ses devresi yetkili servisin işidir.

Markadan bağımsız anlatım [televizyonda görüntü var ses yok](/blog/tv-ses-gelmiyor/) yazısında. Tersine ses gelip ekran karanlıksa [televizyonda ses var görüntü yok](/blog/televizyonda-ses-var-goruntu-yok/), televizyon hiç açılmıyorsa [Samsung televizyon açılmıyor](/blog/samsung-televizyon-acilmiyor/) yazısına bak.

---

**Kaynak künyesi.** "Ses ve Gürültü Sorunları" başlıkları ve "Ses sıfırlama" Samsung'un samsung.com/tr destek sayfasından erişilen Türkçe televizyon e-Kılavuzundan (BN81-27185C) alınmıştır. Menü adları modele göre değişebilir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
