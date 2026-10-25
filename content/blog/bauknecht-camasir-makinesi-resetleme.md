---
title: "Bauknecht çamaşır makinesi resetleme: iki panel, iki yol"
description: "Bauknecht çamaşır makinesinde reset: yeni panelde ON/OFF ve bir dakika fiş molası, eski panelde Reset tuşu üç saniye. F kodları, kilit, demo modu."
slug: "bauknecht-camasir-makinesi-resetleme"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "bauknecht" geçen slug, başlık ya da metin yok; whirlpool-/hotpoint-/indesit-camasir-makinesi-resetleme başka marka sorgusu, metin onlardan bağımsız yazıldı.
# Arama kanıtı (bu koşu 12:44, ham _kaynak/ot-kanit.txt): "bauknecht çamaşır makinesi r" → 1. "…resetleme" (tek öneri); "bauknecht çamaşır makinesi" → 4. GSC: satır yok (www-3..6 Sorgular.csv).
# Belge zinciri: docs.bauknecht.eu/?Campo_Ricerca=<model> (200, "Whirlpool Docs", yönlendirme yok) → portalın /js/main.js'indeki API (200) → Thron PDF (200 application/pdf).
#  (Ç1) BPW 914 A QuickGuide EN 11664957, 4 s., md5 77d7ff346bbd535bd9a136fb99c8a2bb (aynı metin: 11631938 md5 779cb86ad3e295e98a3e0ab216b7a700 · 11596168 md5 3c5363a5e4d30520b28d8f73669b828d)
#  (Ç2) Super Eco 7415 Instructions for Use EN 400010756140, 20 s., md5 578e192fb5ec2f5181b6c9ff7a96d2e5
# BİLEREK YAZILMAYANLAR: servis/test modu ve gizli tuş sıraları (belgede yok) · elektrik modülü teşhisi · pompa filtresi sökümünün ayrıntısı · fiyat (#46).
# Alıntı denetimi: bauknecht-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Panelinde Reset ya da Reset/Drain yazan bir tuş var mı bak; yoksa makinen yeni kuşak paneldedir."
  - "Her şeyi silmeden önce START/PAUSE ile programı duraklatmayı dene; program değiştirmek de buradan geçer."
  - "Yeni panelde başlamış programı iptal etmek için ON/OFF düğmesini basılı tut; program durur, makine kapanır."
  - "Yeni panelde ışıklar hızlı yanıp sönüyor ve F-01 gibi bir kod varsa makineyi kapat, fişi çek, yaklaşık bir dakika sonra aç."
  - "Eski panelde F03 ile F43 arasındaki kodlarda Reset tuşuna en az üç saniye bas; F24'ten sonra durulama ve sıkma programını çalıştır."
  - "Düğmeler tepkisizse kilidi aç: yeni panelde KEY LOCK yaklaşık iki saniye, eski panelde anahtar simgeli iki tuş birlikte üç saniye. Demo modundaysan kılavuzdaki sırayla çık."
  - "Kod yine dönüyorsa fişi çek, musluğu kapat ve kapı içindeki etiketteki kodlarla servisi ara."
faq:
  - q: "Bauknecht çamaşır makinemde Reset yazan bir tuş göremiyorum, neden?"
    a: "Kuşağa göre değişiyor. Super Eco 7415 kılavuzu arıza çözümlerinde Reset ve Reset/Drain tuşuna gönderiyor. BPW 914 A'nın panelinde ise böyle bir tuş yok; bu modelde iptal ON/OFF'u basılı tutarak, arıza sıfırlama da fişi bir dakika çekerek yapılıyor."
  - q: "Ekranda F-01 yazıyor ve ışıklar hızlı yanıp sönüyor, ne yapmalıyım?"
    a: "BPW 914 A kılavuzunun İngilizce baskısına göre makineyi kapatıp fişini prizden ayır; bir dakika kadar sonra fişi takıp yeniden çalıştır. Kod geri gelirse Teknik Yardım Servisi'ni ara."
  - q: "F18 ya da Fod ne demek?"
    a: "Super Eco 7415 kılavuzunda bu iki kod aşırı köpük demek. Kılavuz önce durulama ve sıkma programını çalıştırmanı, sonra istediğin programı daha az deterjanla yeniden başlatmanı istiyor."
  - q: "Makine çalışıyor gibi ama su almıyor, ekranda hata da yok. Neden?"
    a: "BPW 914 A kılavuzu bu durumu demo moduna bağlıyor. Önce makineyi kapat. Sonra START/PAUSE'a basılı tutarken beş saniye dolmadan ON/OFF'a da bas; ikisini iki saniye boyunca bırakma."
  - q: "Program bitti ama makine kapanmadı, sorun mu var?"
    a: "Hayır. BPW 914 A kılavuzuna göre ekranda END yazar; ON/OFF'a basmazsan makine yaklaşık on dakika sonra kendiliğinden kapanıyor."
images:
  coverAlt: "Banyoda duran önden yüklemeli beyaz çamaşır makinesi ve program düğmesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda temizleme bezi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Bauknecht çamaşır makinen yıkamanın ortasında durdu, ekranda bir F kodu belirdi ya da düğmelere bastığında hiçbir şey olmuyor. Bauknecht'te "reset" makinenin hangi kuşaktan geldiğine göre değişiyor. Yeni panelli modellerde bu işi ON/OFF düğmesi ve kısa bir elektrik molası görüyor; eski panelli modellerde ise ayrı bir Reset tuşu bulunuyor. Bu yazıda BPW 914 A hızlı başvuru kılavuzunu ve Super Eco 7415 kullanım kılavuzunu yan yana okuduk; ikisi de kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi. Panelde tuş adları İngilizce yazdığı için burada da öyle bıraktık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce panelin hangi kuşak, ona bak. Yeni panelde iptal için ON/OFF'u basılı tut; F-01 gibi bir kod çıkarsa makineyi kapat, fişi çek, bir dakika sonra aç. Eski panelde F kodlarının çoğu Reset tuşuna üç saniye basınca siliniyor. Düğmeler ölü gibiyse kilide bak. Kod tekrar ederse servis.

## İki kuşak panel yan yana

| Ne oldu? | Yeni panel (BPW 914 A) | Eski panel (Super Eco 7415) |
|---|---|---|
| **Programı bitirmek istiyorsun** | ON/OFF basılı: program durur, makine kapanır | Reset/Drain en az üç saniye: su boşalır |
| **Ekranda F kodu** | Kapat, fişi ayır, bir dakika kadar sonra aç | Reset en az üç saniye |
| **Düğmeler tepkisiz** | KEY LOCK yaklaşık iki saniye | Anahtar simgeli iki tuş, üç saniye |
| **Fazla köpük** | Deterjanı azalt | F18 / Fod: durulama ve sıkma |
| **Kod geri geliyor** | 🔧 Servis | 🔧 Servis |

## Adım adım: Bauknecht çamaşır makinesini sıfırlama

**1. Kuşağını belirle.** BPW 914 A'nın panelinde düğmeler ON/OFF, KEY LOCK, EXTRATOUCH, START/PAUSE, OPTION, DELAY START, SPIN ve TEMPERATURE diye sıralanıyor; ayrı bir Reset tuşu yok. Super Eco 7415 kılavuzu ise çözümlerde sürekli **Reset** ya da **Reset/Drain** tuşuna gönderiyor. Panelinde bu yazı varsa eski kuşaktasın, yoksa yeni.

**2. Önce sadece durdur.** Her şeyi silmek gerekmeyebilir. Yeni panelde yıkama sürerken START/PAUSE'a basınca ışık turuncu yanıp sönüyor ve program bekliyor; aynı düğmeye yeniden basmak programı kaldığı yerden sürdürüyor. Kilitli kapı simgesi sönmüşse kapıyı açıp çamaşır ekleyebilirsin. Programı değiştirmek de böyle: önce duraklat, yeni programı seç, START/PAUSE'a tekrar bas.

**3. Yeni panelde programı iptal et.** BPW 914 A kılavuzunun uyarısı kısa: **başlamış bir programı iptal etmek için ON/OFF düğmesini basılı tut; program durur ve makine kapanır.** Sonra makineyi yeniden açıp istediğin programı baştan kurabilirsin.

**4. Yeni panelde F kodu varsa elektriği kes.** Sorun giderme tablosunda tarif şöyle: Options ve START/PAUSE ışıkları hızlı hızlı yanıp sönüyor, ekranda **F-01** gibi bir kod görünüyor. Çözüm: **makineyi kapatıp fişini prizden ayır, bir dakika kadar bekledikten sonra yeniden çalıştır.** Sorun sürerse Teknik Yardım Servisi. Kılavuz bu modelde ayrı bir sıfırlama tuşundan söz etmiyor; işi bu bekleme görüyor.

**5. Eski panelde Reset'e üç saniye bas.** Super Eco 7415'in arıza tablosunda Service ışığıyla birlikte **F03'ten F43'e kadar** görünen kodlar (F18 ve F24 hariç) "elektrik modülü arızası" diye geçiyor ve çözüm tek cümle: **Reset tuşuna en az üç saniye bas.** F24'te de aynı basış programı durduruyor; ardından yarım kalan yıkamayı düzgün bitirmek için Rinse and Spin (durulama ve sıkma) programını seçip başlatıyorsun. Kılavuza göre F24 çok su emen çamaşırda ya da küçük yük programına fazla çamaşır konunca çıkabiliyor. Clean pump ışığı yandıysa ve tıkanıklığı giderdiysen de kılavuz Reset'e üç saniye basıp programı yeniden başlatmanı istiyor; filtre için [tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısına bak.

**6. Kilidi ve demo modunu kontrol et.** Düğmeler hiç tepki vermiyorsa makine bozuk değil, kilitli olabilir. Yeni panelde KEY LOCK düğmesine yaklaşık iki saniye basınca kilit açılıp kapanıyor; kilitliyken bile ON/OFF çalışıyor. Eski panelde Start/Pause'a bastığın hâlde makine başlamıyorsa çocuk kilidi devrede olabilir: **anahtar simgeli iki tuşa aynı anda en az üç saniye bas;** ekrandaki anahtar simgesi kaybolunca program başlar. Yeni panelde tambur dönüp su almıyor ve ekranda hata yoksa makine demo modunda olabilir. Kılavuzun çıkış sırası: makine kapalıyken START/PAUSE'a basılı tut, beş saniye geçmeden ON/OFF'u da ekle ve iki tuşu iki saniye beraber tut.

**7. Kod dönüyorsa servise bırak.** İki kılavuz da aynı yerde duruyor: kontrollerden sonra arıza sürüyorsa fişi çek, musluğu kapat ve servisi ara. Servise kapının iç tarafındaki etikette yazan kodları ver; BPW 914 A kılavuzu bunu açıkça istiyor.

## Eski panelde F18, F02 ve durulamada bekleme

Super Eco 7415'te bazı duruşlar arıza değil. Program ortasında makine dakikalarca hiçbir şey yapmadan duruyorsa kılavuza göre köpüğü azaltmak için bekliyor olabilir; sebep çoğu zaman fazla deterjan. Köpük geçmezse Service ışığı yanıp ekranda **F18** ya da **Fod** çıkıyor. O zaman Rinse & Spin programını çalıştırıp istediğin programı daha az deterjanla yeniden başlatıyorsun.

Rinse hold (durulamada bekletme) seçiliyse makine son durulamada durup Start/Pause ışığını yakıp söndürüyor. Çamaşırı sıkmak için Start/Pause'a basman yetiyor; sıkmadan yalnız suyu boşaltmak istersen Drain programını seç ya da Reset/Drain tuşuna en az üç saniye bas.

**F02** ya da **FA** su durdurma arızası. Kılavuz program düğmesini Off/O konumuna almanı, fişi çekmeni ve musluğu kapatmanı istiyor; altta biriken suyun akması için cihazı ikinci bir kişiyle dikkatle öne eğmeyi tarif ediyor. Sonra fişi takıp musluğu açıyorsun. Makine sen başlatmadan su alıyorsa arıza var: musluğu kapat, servisi ara. Ağır makineyi eğmek sana zor geliyorsa bu kısmı servise bırak.

Suyun hiç boşalmadığı durumlar için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/), kapak açılmıyorsa [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bak. Aynı markanın bulaşık makinesi için [Bauknecht bulaşık makinesi resetleme](/blog/bauknecht-bulasik-makinesi-resetleme/) yazısı var.

## Ne zaman servis

- Bir dakikalık elektrik molasından ya da üç saniyelik Reset'ten sonra aynı kod geri geliyorsa
- Makine sen başlatmadan su alıyorsa
- F02 ya da FA uyarısı tekrar ediyorsa
- Priz sağlam olduğu hâlde panel hiç yanmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Senin payın tuşlar, fiş ve kilit; elektrik modülü, pompa, motor ya da kasanın içi yetkili servisin işi.

## Servisi aramadan önce kısa özet

1. Panelinde Reset tuşu var mı?
2. Ekranda hangi kod yazıyor?
3. Fişi bir dakika çektin mi, ya da Reset'e üç saniye bastın mı?
4. Anahtar simgesi yanıyor mu?
5. Kapının içindeki etiketteki kodları not aldın mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
