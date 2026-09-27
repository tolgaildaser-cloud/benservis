---
title: "Samsung bulaşık makinesi bC2 hatası: düğme"
description: "Samsung bulaşık makinesinde bC2 (bE2) düğme kontrolü demek: bir tuşa uzun süre basılmış. Paneldeki su ve kir kontrolü, doğru dokunma, servis sınırı."
slug: "samsung-bulasik-makinesi-bc2-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 PAZ (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, pdftotext -layout ile okundu.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden; web araması kullanılmadı.
# (S) Samsung TR "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/ md5 800f3dae1021411046adba7cc8ad8cc6 — "bC2, bE2: Düğme kontrolü"
# (A) Kılavuz DW5500MM DD81-02615C-11 TR 2024-11-08, 200 s., md5 2ad54a56734b93dbaeefbcd4fdc3b385
#     s.56 bc2 "Düğme kontrolü • Düğmeye 30 saniye kadar basılmıştır. • Düğme bölümünde su ve yabancı madde olup olmadığını kontrol edin.
#          • Sorun devam ederse yerel bir Samsung servis merkezi ile iletişime geçin."
#     s.16 "Dokunmatik yüzeyin yanıt hassasiyetini yitirmesine engel olmak için: Her bir tuş takımının merkezine bir parmağınız ile dokunun. Bastırmayın.
#          Dokunmatik kontrolün yüzeyini yumuşak ve nemli bir bez ile düzenli olarak temizleyin. … aynı anda birden fazla dokunmatik tuş takımına dokunmamaya dikkat edin."
#     s.36 "Dış yüzey: … Sıçrayan şeyleri ve tozu yavaşça silmek için kontrol panelinde yumuşak, nemli bir bez kullanın." İKAZ: benzen, tiner, klorin, çamaşır suyu, alkol vb. kullanmayın ·
#          "Doğrudan bulaşık makinesinin üstüne su püskürtmeyin. Elektrikli bileşenleri sudan koruyun."
#     s.40 "Temizlikten veya bakım gerçekleştirmeden önce, fişi prizden mutlaka çıkarın."
#     s.55 "Düğmeler güç açık durumunda çalışmıyor": kapak açık → GÜÇ hariç düğmeler çalışmaz · Kontrol kilidi → 3 sn basılı tut; elektrik kablosu yeniden bağlandığında kilit bırakılır
#     s.15 Kontrol kilidi: "düğmeleri kilitlemek ve kilitlerini açmak için üç (3) saniye boyunca Kontrol kilidi düğmesini basılı tutun"
# (B) DW5500MM IB DD81-04448A-00 2024-01-30, md5 cb6d487995a7756fdd098efb6f4986e6 — s.54 bc2 satırı A ile birebir
# ⚠️ C (DW8500AM 2023), D (DW9000H 2018), E (DW5000H 2017) kılavuzlarının kod tablosunda bc2 YOK → yazı "bazı modellerde" diyor.
# BİLEREK YAZILMAYANLAR: "kart/tuş takımı arızası" teşhisi (belgede yok) · "fişi çekip X dakika bekle" reseti (bc2 satırında yok; fiş yalnız temizlik öncesi s.40 gereği) ·
#   paneli söküp kurutma (#31) · saç kurutma makinesi vb. ile kurutma (belgede yok).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-bc2-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, nemli bir bez"]
steps:
  - "Makineyi kapat ve fişini prizden çıkar."
  - "Düğme bölümünde su ya da yabancı madde olup olmadığını kontrol et."
  - "Paneli yumuşak, nemli bir bezle yavaşça sil; üzerine doğrudan su püskürtme."
  - "Fişi tak ve makineyi aç."
  - "Tuşlara parmağınla, tuşun ortasından ve bastırmadan, tek tek dokun."
  - "Kod sürerse Samsung servisine başvur."
faq:
  - q: "Samsung bulaşık makinesinde bC2 hatası ne demek?"
    a: "Samsung, bC2'yi (bazı modellerde bE2) 'Düğme kontrolü' olarak tanımlıyor. Kılavuzdaki açıklamaya göre bir düğmeye 30 saniye kadar basılmış. Kılavuz düğme bölümünde su ve yabancı madde olup olmadığının kontrol edilmesini, sorun sürerse Samsung servisine başvurulmasını söylüyor."
  - q: "bC2 ile bE2 aynı şey mi?"
    a: "Samsung'un Türkiye destek sayfasındaki kod listesinde bC2 ve bE2 birlikte, 'Düğme kontrolü' başlığıyla geçiyor. İncelediğimiz 2024 tarihli iki kılavuzun tablosunda kod 'bc2' olarak yazılıyor; daha eski üç kılavuzun tablosunda bu kod yer almıyor."
  - q: "Paneli neyle temizlemeliyim?"
    a: "Samsung kılavuzu kontrol panelinin yumuşak, nemli bir bezle yavaşça silinmesini söylüyor. Benzen, tiner, klorin, çamaşır suyu, alkol gibi kimyasallar kullanılmamalı ve makinenin üstüne doğrudan su püskürtülmemeli; kılavuz elektrikli bileşenlerin sudan korunmasını istiyor."
  - q: "Ekranda kod yok ama düğmeler çalışmıyor, neden?"
    a: "Samsung kılavuzu iki sebep sayıyor. Kapak açıkken GÜÇ dışındaki düğmeler çalışmaz; kapağı kapatıp tekrar dene. Kontrol kilidi açıksa düğmeler yanıt vermez; kilidi açmak için Kontrol kilidi düğmesini üç saniye basılı tut. Kılavuza göre elektrik kablosu yeniden bağlandığında da kontrol kilidi bırakılır."
images:
  coverAlt: "Bulaşık makinesinin üst kenarındaki dokunmatik kontrol panelini yumuşak bir bezle silen bir el"
---

Ekranda **bC2** yazıyor. Bazı Samsung modellerinde aynı durum **bE2** olarak görünür. Samsung bu kodu **"Düğme kontrolü"** olarak tanımlıyor. Kılavuzdaki açıklama kısa: **"Düğmeye 30 saniye kadar basılmıştır."**

Yani makine, bir tuşun uzun süre basılı kaldığını algılamış. Samsung'un bu kod için önerdiği kontrol de basit ve evde yapılabilir: düğme bölümünde **su** ya da **yabancı madde** var mı?

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** bC2 / bE2 = düğme kontrolü, bir tuşa uzun süre basılmış. Sıra: fişi çek → paneldeki su ve kiri kontrol et → yumuşak, nemli bezle sil → fişi tak ve tuşlara doğru dokun. Kod sürerse servis.

## bC2'nin anlamı: Samsung ne diyor?

Samsung Türkiye'nin bulaşık makinesi destek sayfasında kod **bC2, bE2: Düğme kontrolü** olarak geçiyor. 2024 tarihli iki Samsung kullanım kılavuzunun bilgi kodu tablosunda ise ayrıntı var:

> "Düğmeye 30 saniye kadar basılmıştır. Düğme bölümünde su ve yabancı madde olup olmadığını kontrol edin. Sorun devam ederse yerel bir Samsung servis merkezi ile iletişime geçin."

Bir not: incelediğimiz daha eski üç Samsung kılavuzunun tablosunda bu kod yer almıyor; kod her modelde bulunmayabilir. Kendi modelinin kılavuzunda farklı bir açıklama varsa o geçerlidir.

Diğer kodların karşılıkları için [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazımıza bakabilirsin.

## Adım adım: evde denenecekler

**1. Fişi çek.** Makineyi kapat ve fişini prizden çıkar. Samsung kılavuzu temizlik ya da bakımdan önce **fişin mutlaka çıkarılmasını** istiyor.

**2. Su ve kir kontrolü.** Kılavuzun bu koddaki asıl talimatı: **düğme bölümünde su ve yabancı madde** olup olmadığına bak.

**3. Paneli sil.** Kontrol panelini **yumuşak, nemli bir bezle** yavaşça sil. Samsung iki şeyi ayrıca yasaklıyor: benzen, tiner, klorin, çamaşır suyu, alkol gibi kimyasallar kullanma ve makinenin üzerine **doğrudan su püskürtme**; kılavuz elektrikli bileşenlerin sudan korunmasını istiyor.

**4. Fişi tak ve makineyi aç.**

**5. Tuşlara doğru dokun.** Samsung'un dokunmatik panel için önerisi: her tuşa **tek parmakla, ortasından** dokun, **bastırma** ve aksi söylenmedikçe **aynı anda birden fazla tuşa** dokunma.

**6. Kod sürerse servise başvur.** Panel temiz ve kuru ama bC2 yine geliyorsa kılavuzun talimatı **Samsung servis merkezine** başvurmak.

⚠️ Kontrol panelini açmak ya da sökmek bu listenin dışındadır; panelin içi kullanıcı bakımına dahil değildir.

## Kod yok ama düğmeler çalışmıyorsa

Ekranda bC2 yok, yine de tuşlar yanıt vermiyorsa Samsung kılavuzu iki sebep sayıyor:

- **Kapak açık.** Kapak açıkken **GÜÇ** dışındaki düğmeler çalışmaz. Kapağı kapat ve düğmeye yeniden bas.
- **Kontrol kilidi açık.** Kontrol kilidi seçiliyken düğmeler yanıt vermez. Kilidi açmak için **Kontrol kilidi** düğmesini **üç saniye** basılı tut. Kılavuza göre elektrik kablosu yeniden bağlandığında da kilit bırakılır.

## Ne zaman servis çağırmalısın?

Panel temiz, üzerinde su ya da kir yok ve kod yine geliyorsa evde yapılacak iş bitmiştir. Samsung'un kılavuzu herhangi bir bilgi kodu ekranda görünmeye devam ederse **yetkili bir Samsung servis merkezine** başvurulmasını söylüyor. Servise ekrandaki kodu (bC2 ya da bE2) ve model adını bildir.

## Kısaca

bC2, Samsung bulaşık makinesinin bir düğmeye uzun süre basıldığını algıladığını söylüyor. Evde yapabileceklerin kılavuzun kendi sınırları içinde: fişi çek, paneldeki su ile kire bak, paneli nemli bezle sil, tuşlara doğru dokun. Sonuç vermezse iş servisin.
