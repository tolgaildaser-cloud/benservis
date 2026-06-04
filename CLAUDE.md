# Benservis — Proje Devir Dokümanı

> Bu dosya Claude Code için bağlam dokümanıdır. Projenin kök dizinine `CLAUDE.md` olarak
> koyarsan Claude Code bunu otomatik okur ve kaldığımız yerden devam edebiliriz.
> Buraya kadar olan tüm çalışma, kararlar, mimari ve sıradaki adımlar aşağıdadır.

---

## 1. Proje Özeti

**Benservis** (eski çalışma adı: "Arızam Ne?"), Türkiye pazarına yönelik, ev/elektronik
cihaz arızaları için **AI destekli teşhis + tahmini maliyet** veren ve kullanıcıyı
**uygun teknik servise yönlendiren** bir platform.

Kullanıcı teknik bilmez; sadece cihazını ve belirtiyi yazar. Sistem olası arızayı,
olasılığını ve tahmini maliyeti söyler; sonra (Faz 2) en yakın, müsait, puanlı servisi
çağırır. **Para teşhiste değil, doğru servise yönlendirme ve güven katmanında** —
tamamlanan işten komisyon.

İki temel domain:
- Yayın domaini: **benservis.com** (İsimtescil'den alındı, nameserver Vercel'e taşındı)
- Geçici Vercel adresi: **project-83ils.vercel.app**

---

## 2. İş Modeli — BiTaksi tarzı iki taraflı pazaryeri

Yemeksepeti değil, **BiTaksi** modeli benimsendi. Sebep: tamir fiyatı (taksimetre gibi)
ancak iş yapılınca belli olur; çekirdek eylem "listeden seç" değil "en yakını çağır".

Akış (Faz 2 hedefi):
1. Kullanıcı semptom yazar → AI teşhis + tahmini maliyet (Faz 1, hazır).
2. "Servis çağır" → talep **iş havuzuna** düşer.
3. Yakın + müsait servisler havuzdaki işi görür; **ilk kabul eden / kullanıcı seçer**.
   - ~60 sn kabul penceresi; kimse almazsa **yarıçap genişler** (5→15 km).
   - Kabul edip gelmeyen servise **ceza** (puan düşer + geçici askı).
4. Canlı takip + zaman penceresi ("bugün 14–16").
5. İş tamamlanır → **standart tarifeyle ödeme** → **komisyon** kesilir.
6. **Puan/yorum** (yalnız tamamlanan işe yazılabilir).

Sıralama mantığı: **puan + mesafe + fiyat** (komisyon sıralamaya GİRMEZ — güven için).

---

## 3. Fazlar

### Faz 1 — AI Teşhis + Tahmini Maliyet  ✅ TAMAMLANDI & CANLI
Tek başına yapılabilen, gelir getirmeyen ama **talep + veri motoru** olan kısım.
Aynı zamanda Faz 2'nin yakıtı: teşhisi alan kullanıcı zaten "tamir lazım" noktasındaki
sıcak taleptir → servisleri ikna ederken soğuk başlangıcı kırar.

### Faz 2 — Uygun Servis Bulma  🔄 BAŞLANDI
İki taraflı pazaryeri. **Zor kısım kod değil, arz tarafı** (servisleri toplamak +
komisyona razı etmek) + ödeme + güven. İlk teknik brick (servis kayıt akışı) yapıldı.
Asıl kapı: saha testi (servisler komisyona razı mı?).

### Faz 3 — Dijital Ürün Pasaportu (DPP)  📋 PLANLANMAKTA
AB DPP Yönetmeliği (2025–2030 arası kademeli yürürlük) tüm ürünler için yaşam döngüsü
kaydını zorunlu kılıyor; Türkiye AB uyum sürecinde bu regülasyonu izliyor.

**Çekirdek fikir:** Her cihazın **seri numarası** bir DPP kimliği olur. Faz 2'de yapılan
her tamir, değiştirilen parça ve servise ait kayıt bu pasaporta işlenir. Otomobillerin
servis defteri gibi — ama ev elektroniği için, dijital ve doğrulanmış.

Veri modeli (DPP kaydı):
- `seri_no` · `urun_model` · `uretici` · `uretim_tarihi`
- `islem_gecmisi[]`: `{tarih, servis_id, yapilan_islem, degistirilen_parca[], maliyet, servis_puani}`
- `mevcut_durum`: çalışıyor / arızalı / hurda
- `toplam_tamir_maliyeti` (akümüle)

**Stratejik değer:** Benservis, Faz 2'de zaten bu verinin doğal üretim noktasıdır.
Ekstra maliyet sıfır; sadece her tamamlanan iş DPP'ye yazılır. Veri birikince moat oluşur.

### Faz 4 — DPP Destekli İkinci El Pazaryeri  🛒 PLANLANMAKTA
**"Cihazların Tramer'i"**: Satıcı seri numarasını girer → DPP'den tüm geçmiş otomatik
çekilir → alıcı şeffaf servis kaydıyla ürünü değerlendirir.

Her ikinci el ilanda görünecekler:
- Kaç tamir görmüş, hangi parçalar değiştirilmiş
- Son tamir tarihi ve yapılan işlemler
- Doğrulanmış tamir maliyeti toplamı
- Benservis kayıtlı servisler tarafından yapılan işlemlere **"Doğrulanmış Kayıt"** rozeti

**İş modeli (Faz 4):** İlan başına sabit ücret veya tamamlanan satıştan komisyon.
Doğrulanmış DPP kaydı olan ilanlar daha yüksek fiyata satılır → satıcı için net değer.

**Veri uçurum döngüsü:**
> Teşhis (Faz 1) → Tamir (Faz 2) → DPP kaydı (Faz 3) → İkinci el satış (Faz 4)
> → daha fazla kullanıcı → daha fazla tamir → daha zengin DPP → daha güvenilir pazar

---

## 4. Teknik Mimari

**Faz 1 uygulaması (CANLI):**
- Frontend: **React + Vite** (tek sayfa, inline stil, harici CSS yok).
- AI çağrısı tarayıcıdan DEĞİL: `/api/diagnose` adlı **Vercel serverless fonksiyonu**
  üzerinden gider. Fonksiyon, **Anthropic Claude API**'sine `ANTHROPIC_API_KEY` ile çağrı yapar.
- Model: `claude-sonnet-4-6` (ucuz alternatif: `claude-haiku-4-5-20251001`). `max_tokens: 1000`.
- API anahtarı **yalnız sunucuda** (Vercel ortam değişkeni). Tarayıcıya/koda asla girmez.

Akış: `Kullanıcı (benservis.com) → Vercel /api/diagnose (anahtar burada) → Claude API → cevap`

**Hosting/repo:**
- Kod: GitHub → `tolgaildaser-cloud/benservis` (public; anahtar koda girmediği için sorun yok)
- Deploy: Vercel projesi `project-83ils` (Pro Trial), repoya bağlı, push'ta otomatik deploy
- Lokal klasör: `~/Downloads/arizam-ne-app`
- Domain: benservis.com → nameserver'lar Vercel'e (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`),
  yayılma bekleniyor; e-posta kullanılmıyor.

**Veri katmanı (HENÜZ BULUTTA DEĞİL — bilinçli ertelendi):**
- Şu an: lokal Excel matrisi + lokal Python scraper.
- Planlanan (Faz 2 / ölçek): **AWS RDS PostgreSQL** (ilişkisel matris; ileride `pgvector`
  ile semptom-eşleştirme embedding'leri), erişim **API Gateway + Lambda** (ya da Vercel
  fonksiyonu), ham veri **S3**. Kural: veri/trafik birikmeden ağır altyapı kurma.

---

## 5. Üretilen Dosyalar

| Dosya | Ne | Durum |
|------|----|------|
| `arizam-ne.jsx` (deploy: `arizam-ne-app/`) | Faz 1 uygulaması (teşhis + maliyet) | Canlı |
| `api/diagnose.js` | Vercel serverless proxy (anahtarı tutar, Claude'a gider) | Canlı |
| `ariza-maliyet-matrisi.xlsx` | Arıza/maliyet matrisi, RDS'e hazır, 18 cihaz, formüllü | Hazır, boş (doldurulacak) |
| `arizam_scraper.py` | Web'den veri çekip matrisi **Taslak** olarak güncelleyen pipeline | Motor test edildi; site selektörleri eksik |
| `benservis-servis-kayit.jsx` | Faz 2 servis kayıt + saha-testi takip aracı (kalıcı depolama) | Hazır |
| Akış şemaları (mermaid/png) | İki taraflı pazaryeri akışı, faz ayrımı | Referans |

**Faz 1 uygulamasının önemli içsel detayları:**
- 18 cihaz kategorisi için gömülü **referans tarife (SEED)** — AI maliyeti bu çıpalara
  göre verir, havadan değil ("AI fiyat uyduruyor" sorunu prototip seviyesinde kapandı).
- Cihaza özel **hızlı belirti butonları** (sürtünmeyi azaltır).
- **Aciliyet ölçütü** prompta gömülü (yüksek/orta/düşük net kriterlerle) + `aciliyetNot`
  ile gerekçe gösterilir.
- Çıktı JSON şeması: `olasiArizalar[{ad,olasilik,aciklama}]`, `tahminiMaliyet{min,max,not}`,
  `kararOnerisi(tamir|yenisi|belirsiz)`, `kararAciklama`, `kendinCozebilirMi{mumkun,ipuclari[]}`,
  `aciliyet`, `aciliyetNot`, `ekSorular[]`.

---

## 6. Veri Modelleri

**Arıza/Maliyet matrisi (→ RDS `ariza_maliyet`):**
`kayit_id · cihaz · marka · model · ariza_parca · belirtiler · hata_kodu · tipik_neden ·
parca_min · parca_max · iscilik · toplam_min · toplam_max · bolge · kaynak(Manuel/Web/Gerçek iş) ·
kaynak_url · tarih · dogrulama(Onaylı/Taslak) · notlar`
- Toplam = parça + işçilik (formül). Uygulama **yalnız "Onaylı"** satırları kullanır.
- Web verisi her zaman **Taslak** girer; Onaylı'nın üzerine ASLA yazılmaz (insan onaylar).

**Servis (→ RDS `servisler`):**
`servis_id · ad · yetkili · telefon · email · cihazlar[] · il · ilce · adres · yaricap_km ·
komisyon_kabul(bool) · komisyon_oran · belge_durumu · gorusme_durumu(İlgileniyor/Kayıt oldu/
Düşünüyor/Reddetti) · notlar · kayit_tarihi`

**İş (→ RDS `isler`, Faz 2'de gelecek):**
`is_id · kullanici · cihaz · teshis · tahmini_maliyet · konum · durum(havuzda/kabul/yolda/
tamamlandi/iptal) · atanan_servis · gercek_tutar · komisyon · puan · yorum · zaman_damgalari`

---

## 7. Alınan Önemli Kararlar (ve gerekçe)

1. **Önce doğrulama, sonra altyapı.** AWS/Emergent gibi ağır yatırımlar, market gerçeği
   test edilmeden yapılmaz. Faz 1 ucuz prototip olarak çıkıp gerçek kullanıcıya verildi.
2. **BiTaksi modeli** (havuz + çağır + taksimetre tarife), Yemeksepeti (sabit fiyat katalog) değil.
3. **Komisyon lead modeli**: teşhis bedava, kullanıcı doğrulanmış servise bağlanır, komisyon servisten.
4. **Sıralama = puan+mesafe+fiyat**, komisyon değil (güven için şeffaf).
5. **Yorum yalnız tamamlanan işe** (sahte yorumu engeller, "doğrulanmış servis" iddiasını gerçek yapar).
6. **Maliyet verisi = moat.** AI fiyatta zayıf; gerçek/yerel/güncel tarife veritabanı asıl değer.
   Arıza tarafını büyük ölçüde AI yapar; matris ona gerçek fiyatı ve doğrulanmış vakaları sağlar.
7. **Web scraper Onaylı veriyi ezmez** — her şey Taslak, insan küratörlüğü şart.
8. **Ödeme** (Faz 2 sonu): iyzico pazaryeri / alt üye işyeri + escrow ("onay" adımında serbest bırak).
   Tamir fiyatı işten sonra belli olduğu için "keşif bedeli + bakiye" ya da iş-sonrası ödeme.
9. **Anahtar güvenliği**: Claude API anahtarı yalnız sunucuda (Vercel env), repoda/kodda/tarayıcıda asla.

---

## 8. Mevcut Durum

- ✅ Faz 1 uygulaması canlı (Vercel), kendi backend'i + Claude API, benservis.com bağlanıyor (DNS yayılıyor).
- ✅ Arıza/maliyet matrisi (boş, doldurulacak) + scraper (motor hazır, selektör eksik).
- ✅ Faz 2 servis kayıt aracı hazır (saha testi için).
- ⏳ Faz 1 kullanıcı testi (5-10 kişi) — bekliyor. Sorular: teşhis mantıklı mı, fiyat gerçekçi mi, "kullanır mıydın?"
- ⏳ Faz 2 saha testi — bekliyor. Soru: servisler komisyona razı mı? (kayıt aracındaki "komisyon kabul" sayacı ölçer)
- ❌ AWS / RDS veritabanı — henüz yok, bilinçli ertelendi.

---

## 9. Sıradaki Adımlar

**Hemen (kod gerektirmeyen, en kritik):**
- Faz 1: uygulamayı gerçek kullanıcılara ver, geri bildirim topla.
- Faz 2: 5-10 teknik servisle görüş, kayıt aracına işle, komisyon kabulünü ölç.

**Saha testi olumluysa (servisler komisyona "evet" diyorsa) — Faz 2 build sırası:**
1. **İş havuzu + eşleştirme** (talep → havuz → yakın+müsait servis kapar; 60 sn pencere; yarıçap genişlemesi; no-show cezası).
2. **Canlı takip + zaman penceresi.**
3. **Ödeme + komisyon** (iyzico escrow) — en ağır, en son.
4. **Puan/yorum** (yalnız tamamlanan iş).
5. **Veri bulutu**: matris + servis + iş verisini AWS RDS'e taşı; scraper'ı Lambda/cron yap.

**Saha testi olumsuzsa:** modeli B2B'ye çevir (servislere ön-teşhis aracı satmak).

---

## 10. Claude Code için kurallar / notlar

- **Marka:** Benservis. **Dil:** Türkçe arayüz.
- **Tasarım token'ları:** cream `#F5EFE2`, ink `#22302A`, amber `#C8632B`, green `#3A7D44`;
  fontlar **Fraunces** (başlık) + **Hanken Grotesk** (gövde).
- **API anahtarı asla** koda/git'e/tarayıcıya girmez — yalnız Vercel/sunucu ortam değişkeni.
- **Model:** `claude-sonnet-4-6` (kalite/maliyet); ucuz gerekirse `claude-haiku-4-5-20251001`.
- Web verisi matrise hep **Taslak** girer; uygulama yalnız **Onaylı** kullanır.
- Repo: `tolgaildaser-cloud/benservis`; lokal: `~/Downloads/arizam-ne-app`; deploy: Vercel `project-83ils`.
- Önce doğrulama, sonra ölçek — gereksiz altyapıdan kaçın.
