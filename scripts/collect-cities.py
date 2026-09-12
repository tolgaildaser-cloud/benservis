#!/usr/bin/env python3
"""
ÇOK ŞEHİR TAM KAPSAMA — ilçe-bazlı Google Places (İstanbul + İzmir + Ankara).
KILL-DAYANIKLI: her ilçeden sonra services-data.json'a yazar + .collect-progress.json'a
işler → tekrar koşulunca KALDIĞI YERDEN devam eder (biten ilçeyi tekrar sorgulamaz = boşa para yok).
Mevcut veriye ekler, cross-city mislabel düzeltir, çıktı buffer'lanmaz.

Kullanım (proje kökünde):
  GOOGLE_PLACES_API_KEY=xxx DRYRUN=1 python3 -u scripts/collect-cities.py   # plan + maliyet, çağrı YOK
  GOOGLE_PLACES_API_KEY=xxx python3 -u scripts/collect-cities.py            # 3 şehir (resume destekli)
  GOOGLE_PLACES_API_KEY=xxx CITIES=istanbul python3 -u scripts/collect-cities.py
  GOOGLE_PLACES_API_KEY=xxx RESET=1 python3 -u scripts/collect-cities.py    # progress sıfırla, baştan
  (ONLY=Beykoz tek ilçe testi · PAGES=2 daha derin)
"""
import os, re, json, time, shutil, requests

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_PLACES_API_KEY ortam değişkeni eksik")
PAGES = int(os.environ.get("PAGES", "1"))
DRYRUN = os.environ.get("DRYRUN") == "1"
RESET = os.environ.get("RESET") == "1"
ONLY = [x.strip() for x in os.environ.get("ONLY", "").split(",") if x.strip()]
CITIES_SEL = [x.strip().lower() for x in os.environ.get("CITIES", "").split(",") if x.strip()]

PLACES_URL = "https://places.googleapis.com/v1/places:searchText"
FIELD_MASK = (
    "places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,"
    "places.internationalPhoneNumber,places.rating,places.userRatingCount,places.location,"
    "places.googleMapsUri,places.regularOpeningHours,nextPageToken"
)

CITY_DISPLAY = {"istanbul": "İstanbul", "izmir": "İzmir", "ankara": "Ankara",
                "bursa": "Bursa", "adana": "Adana", "eskisehir": "Eskişehir", "trabzon": "Trabzon",
                "gaziantep": "Gaziantep",
                "antalya": "Antalya", "konya": "Konya", "mersin": "Mersin", "kocaeli": "Kocaeli"}
CITY_DISTRICTS = {
    "istanbul": ["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy",
        "Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca",
        "Çekmeköy","Esenler","Esenyurt","Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy",
        "Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Silivri",
        "Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla","Ümraniye","Üsküdar","Zeytinburnu"],
    "izmir": ["Aliağa","Balçova","Bayındır","Bayraklı","Bergama","Beydağ","Bornova","Buca","Çeşme",
        "Çiğli","Dikili","Foça","Gaziemir","Gediz","Güzelbahçe","Karaburun","Karşıyaka","Kemalpaşa",
        "Kınık","Kiraz","Konak","Menderes","Menemen","Narlıdere","Ödemiş","Seferihisar","Selçuk",
        "Tire","Torbalı","Urla"],
    "ankara": ["Akyurt","Altındağ","Ayaş","Bala","Beypazarı","Çamlıdere","Çankaya","Çubuk","Elmadağ",
        "Etimesgut","Evren","Gölbaşı","Güdül","Haymana","Kalecik","Kahramankazan","Keçiören",
        "Kızılcahamam","Mamak","Nallıhan","Polatlı","Pursaklar","Sincan","Şereflikoçhisar","Yenimahalle"],
    # 20 Ağu 2026 (Tolga: "bursa, adana, eskişehir, trabzon da ekleyelim") — 4 yeni il, 64 ilçe.
    "bursa": ["Büyükorhan","Gemlik","Gürsu","Harmancık","İnegöl","İznik","Karacabey","Keles","Kestel",
        "Mudanya","Mustafakemalpaşa","Nilüfer","Orhaneli","Orhangazi","Osmangazi","Yenişehir","Yıldırım"],
    "adana": ["Aladağ","Ceyhan","Çukurova","Feke","İmamoğlu","Karaisalı","Karataş","Kozan","Pozantı",
        "Saimbeyli","Sarıçam","Seyhan","Tufanbeyli","Yumurtalık","Yüreğir"],
    "eskisehir": ["Alpu","Beylikova","Çifteler","Günyüzü","Han","İnönü","Mahmudiye","Mihalgazi",
        "Mihalıççık","Odunpazarı","Sarıcakaya","Seyitgazi","Sivrihisar","Tepebaşı"],
    # 23 Ağu 2026 (Tolga: "ok ekle") — 8. il, 9 ilçe. Google Places Enterprise SKU:
    #   9 ilçe x 10 sorgu x 1 sayfa = 90 çağrı; aylık ilk 1.000 çağrı ücretsiz.
    "gaziantep": ["Araban","İslahiye","Karkamış","Nizip","Nurdağı","Oğuzeli","Şahinbey",
        "Şehitkamil","Yavuzeli"],
    "trabzon": ["Akçaabat","Araklı","Arsin","Beşikdüzü","Çarşıbaşı","Çaykara","Dernekpazarı","Düzköy",
        "Hayrat","Köprübaşı","Maçka","Of","Ortahisar","Sürmene","Şalpazarı","Tonya","Vakfıkebir","Yomra"],
    # 12 Eyl 2026 (YK talimatı: "servis kapsamını 8 ilden 12 ile çıkar") — 4 yeni il, 75 ilçe.
    #   75 ilçe x 10 sorgu x 1 sayfa = 750 çağrı; aylık ilk 1.000 çağrı ücretsiz (PAGES=1 ŞART).
    #   İlçe adları UYDURULMADI: `src/tr-iller.js` (uygulamanın 81 il listesi) ile programatik
    #   karşılaştırıldı — dördünde de sapma 0 (19 · 31 · 13 · 12). Yanlış ad = boş sorgu = kayıp çağrı.
    "antalya": ["Akseki","Aksu","Alanya","Demre","Döşemealtı","Elmalı","Finike","Gazipaşa","Gündoğmuş",
        "İbradı","Kaş","Kemer","Kepez","Konyaaltı","Korkuteli","Kumluca","Manavgat","Muratpaşa","Serik"],
    "konya": ["Ahırlı","Akören","Akşehir","Altınekin","Beyşehir","Bozkır","Cihanbeyli","Çeltik","Çumra",
        "Derbent","Derebucak","Doğanhisar","Emirgazi","Ereğli","Güneysınır","Hadim","Halkapınar","Hüyük",
        "Ilgın","Kadınhanı","Karapınar","Karatay","Kulu","Meram","Sarayönü","Selçuklu","Seydişehir",
        "Taşkent","Tuzlukçu","Yalıhüyük","Yunak"],
    "mersin": ["Akdeniz","Anamur","Aydıncık","Bozyazı","Çamlıyayla","Erdemli","Gülnar","Mezitli","Mut",
        "Silifke","Tarsus","Toroslar","Yenişehir"],
    "kocaeli": ["Başiskele","Çayırova","Darıca","Derince","Dilovası","Gebze","Gölcük","İzmit","Kandıra",
        "Karamürsel","Kartepe","Körfez"],
}
ALL_CITIES = list(CITY_DISTRICTS.keys())
CITIES = [c for c in ALL_CITIES if not CITIES_SEL or c in CITIES_SEL]
# ⚠️ 12 Eyl 2026 — İLÇE ADI TEK BAŞINA KİMLİK DEĞİL (Tolga: "aynı ilçe adı farklı illerde
# olabilir"). Aynı gün iki kanama ölçüldü: ① ilçe→il sözlüğü "Yenişehir"i son gelen ile
# yazıyordu → adresinde Bursa yazan 36 kayıt Mersin'e taşındı ② ilçe, adres metninde ALT DİZE
# aranıyordu → "Kemalpaşa Cd., Bağcılar/İstanbul" kaydı izmir/Kemalpaşa oldu (439 kayıtta
# ilçe, 133 kayıtta il yanlıştı). ÇÖZÜM: il ve ilçe ADRESİN "<İlçe>/<İl>" kuyruğundan okunur
# ve resmî listeyle ÇİFT olarak doğrulanır. Tek kaynak: src/tr-iller.js (81 il · 972 ilçe) —
# aynı kural JS tarafında src/ilce-il.js'te, iki tarafın ayrışmasını
# src/ilce-il-tutarlilik.test.js yakalar. Geriye dönük onarım artık bu betiğin işi DEĞİL:
# scripts/ilce-il-duzelt.mjs (API çağrısı yapmaz, idempotent).
_TR_HARF = str.maketrans({"ı": "i", "İ": "i", "ş": "s", "Ş": "s", "ğ": "g", "Ğ": "g",
                          "ü": "u", "Ü": "u", "ö": "o", "Ö": "o", "ç": "c", "Ç": "c", "̇": ""})


def norm_tr(s):
    return re.sub(r"\s+", " ", str(s or "").translate(_TR_HARF).lower().strip())


def _tr_iller_oku():
    """src/tr-iller.js içindeki resmî 81 il · ilçe tablosunu okur (tek kaynak)."""
    yol = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "src", "tr-iller.js"))
    metin = open(yol, encoding="utf-8").read()
    govde = re.search(r"TR_IL_ILCE = \{(.*)\n\};", metin, re.S).group(1)
    tablo = {il: re.findall(r'"([^"]+)"', ic) for il, ic in re.findall(r'"([^"]+)":\s*\[(.*?)\]', govde, re.S)}
    if len(tablo) != 81:
        raise SystemExit(f"tr-iller.js beklenmedik: {len(tablo)} il okundu (81 olmalı)")
    return tablo


TR_IL_ILCE = _tr_iller_oku()
IL_ADI = {norm_tr(il): il for il in TR_IL_ILCE}
ILCE_ADI = {(norm_tr(il), norm_tr(d)): d for il, ds in TR_IL_ILCE.items() for d in ds}
IL_SLUG = lambda il: re.sub(r"[^a-z0-9]+", "-", norm_tr(il)).strip("-")
# Google adresi "… 07100 Muratpaşa/Antalya, Türkiye" ile biter; ilçe/il adlarında rakam yok.
KUYRUK = re.compile(r"([^,/0-9]+?)\s*/\s*([^,/0-9]+?)\s*(?:,\s*t[üu]rkiye)?\s*$", re.I)


def adres_il_ilce(adres):
    """Adres kuyruğundan (il, ilçe, slug) döner; çözemezse None — TAHMİN ETMEZ."""
    m = KUYRUK.search(str(adres or "").strip())
    if not m:
        return None
    il = IL_ADI.get(norm_tr(m.group(2)))
    if not il:
        return None
    ilce = ILCE_ADI.get((norm_tr(il), norm_tr(m.group(1))))
    if not ilce:
        return None
    return il, ilce, IL_SLUG(il)

SEARCHES = [
    ("beyaz eşya teknik servisi", ["Buzdolabı","Çamaşır Makinesi","Bulaşık Makinesi","Fırın / Ocak"]),
    ("klima teknik servisi", ["Klima"]),
    ("kombi servisi", ["Kombi"]),
    ("televizyon tamiri", ["Televizyon"]),
    ("termosifon şofben tamiri", ["Termosifon / Şofben"]),
    ("telefon tamiri", ["Cep Telefonu"]),
    ("notebook laptop tamiri", ["Notebook"]),
    ("bilgisayar tamiri", ["Masaüstü Bilgisayar"]),
    ("yazıcı tamiri", ["Yazıcı"]),
    ("küçük ev aletleri tamiri", ["Mikrodalga","Elektrik Süpürgesi","Su Sebili / Arıtma","Robot Süpürge","Air Fryer","Diğer"]),
]

ROOT = os.path.dirname(__file__)
PATH = os.path.normpath(os.path.join(ROOT, "..", "src", "services-data.json"))
PROGRESS = os.path.join(ROOT, ".collect-progress.json")


def log(*a):
    print(*a, flush=True)


def yer_coz(addr, city, district):
    """(ilce, sehir) — önce adres kuyruğu (kesin), çözülemezse sorgulanan ilçe/il (zorunlu tahmin).

    ⛔ Eski `extract_ilce` ilçe adını adresin HER YERİNDE arıyordu; sokak adı ilçe sanılıyordu.
    Google sorgusu ilçe dışından işletme döndürebildiği için sorgulanan ilçe de kesin değildir —
    bu yüzden adres varsa DAİMA adres kazanır.
    """
    coz = adres_il_ilce(addr)
    if coz:
        il, ilce, slug = coz
        return ilce, slug
    return district, city


def norm_phone(p):
    raw = p.get("internationalPhoneNumber") or p.get("nationalPhoneNumber")
    return raw.replace(" ", "").replace("-", "") if raw else None


def parse_hours(p):
    oh = p.get("regularOpeningHours") or {}
    return {"periods": oh.get("periods", []), "gunler": oh.get("weekdayDescriptions", [])} if oh else None


def tier_of(rating, count):
    rating = rating or 0; count = count or 0
    if rating >= 4.7 and count >= 80: return "platin"
    if rating >= 4.5 and count >= 30: return "gold"
    return "bronz"


def parse_place(p, cats, city, district):
    name = p.get("displayName", {}).get("text", "")
    addr = p.get("formattedAddress", "")
    rating = p.get("rating"); count = p.get("userRatingCount", 0)
    ilce_adi, sehir_slug = yer_coz(addr, city, district)
    return {
        "id": p.get("id", ""), "ad": name, "kategoriler": cats, "telefon": norm_phone(p),
        "adres": addr, "ilce": ilce_adi, "sehir": sehir_slug,
        "lat": p.get("location", {}).get("latitude"), "lng": p.get("location", {}).get("longitude"),
        "puan": rating, "yorumSayisi": count, "googleMapsUrl": p.get("googleMapsUri", ""),
        "yetkili": "yetkili" in name.lower() or "authorized" in name.lower(),
        "tier": tier_of(rating, count), "yetkili_markalar": [], "calismaSaatleri": parse_hours(p),
    }


def search(query):
    headers = {"Content-Type": "application/json", "X-Goog-Api-Key": API_KEY, "X-Goog-FieldMask": FIELD_MASK}
    out = []; token = None; calls = 0
    for _ in range(PAGES):
        body = {"textQuery": query, "languageCode": "tr", "maxResultCount": 20}
        if token: body["pageToken"] = token
        r = requests.post(PLACES_URL, json=body, headers=headers, timeout=30)
        r.raise_for_status()
        j = r.json(); calls += 1
        out += j.get("places", [])
        token = j.get("nextPageToken")
        if not token: break
        time.sleep(2)
    return out, calls


# ---- plan + maliyet ----
plan = [(c, d) for c in CITIES for d in CITY_DISTRICTS[c] if not ONLY or d in ONLY]
qpd = len(SEARCHES)
log(f"Şehirler: {', '.join(CITIES)} · ilçe: {len(plan)} · sorgu/ilçe: {qpd} · PAGES={PAGES}")
log(f"Planlanan API çağrısı: ~{len(plan)*qpd*PAGES} · kaba maliyet ~${len(plan)*qpd*PAGES*0.04:.2f}")
if DRYRUN:
    raise SystemExit("DRYRUN — API çağrısı yapılmadı.")

# ---- progress (resume) ----
if RESET and os.path.exists(PROGRESS):
    os.remove(PROGRESS)
done = set()
if os.path.exists(PROGRESS):
    try:
        done = set(tuple(x) for x in json.load(open(PROGRESS)))
    except Exception:
        done = set()
if done:
    log(f"RESUME: {len(done)} ilçe zaten bitmiş, atlanacak.")

# ---- mevcut veri + il/ilçe normalizasyonu ----
# Eski tur ilçe adına bakıp şehir yazıyordu ve çift anlamlı adlarda veriyi BOZUYORDU
# (36 Bursa kaydı Mersin'e taşınmıştı). Artık ölçüt adres: kuyruğu çözülen kayıtta il+ilçe
# resmî listeden yeniden yazılır, çözülemeyene DOKUNULMAZ. Aynı iş ayrıca tek başına
# koşulabilir: scripts/ilce-il-duzelt.mjs
existing = json.load(open(PATH, encoding="utf-8"))
by_id = {s["id"]: s for s in existing if s.get("id")}
fixed = 0
for s in by_id.values():
    coz = adres_il_ilce(s.get("adres"))
    if not coz:
        continue
    il, ilce, slug = coz
    if s.get("sehir") != slug or s.get("ilce") != ilce:
        s["sehir"] = slug; s["ilce"] = ilce; fixed += 1
shutil.copy(PATH, PATH + ".bak")  # koşu öncesi snapshot (tek sefer)
before = {c: sum(1 for s in by_id.values() if s.get("sehir") == c) for c in ALL_CITIES}


def save():
    json.dump(list(by_id.values()), open(PATH, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    json.dump([list(x) for x in done], open(PROGRESS, "w"))


# ---- ilçe-bazlı toplama (her ilçeden sonra kaydet) ----
total_calls = 0; added = 0
todo = [(c, d) for (c, d) in plan if (c, d) not in done]
for i, (city, district) in enumerate(todo, 1):
    log(f"[{i}/{len(todo)}] {CITY_DISPLAY[city]} / {district}")
    da = 0
    for phrase, cats in SEARCHES:
        try:
            places, c = search(f"{phrase} {district} {CITY_DISPLAY[city]}"); total_calls += c
        except requests.RequestException as e:
            log(f"   HATA: {e}"); continue
        for p in places:
            pid = p.get("id", "")
            if not pid: continue
            if pid in by_id:
                by_id[pid]["kategoriler"] = list(dict.fromkeys(by_id[pid].get("kategoriler", []) + cats))
            else:
                by_id[pid] = parse_place(p, list(cats), city, district); added += 1; da += 1
        time.sleep(0.3)
    done.add((city, district))
    save()  # KILL-DAYANIKLI: her ilçeden sonra yaz
    log(f"     +{da} yeni · toplam {len(by_id)} · çağrı {total_calls}")

after = {c: sum(1 for s in by_id.values() if s.get("sehir") == c) for c in ALL_CITIES}
log(f"\n✅ BİTTİ · API çağrısı: {total_calls} · yeni servis: {added} · il/ilçe adresten düzeltilen: {fixed}")
for c in ALL_CITIES:
    log(f"   {CITY_DISPLAY[c]}: {before[c]} → {after[c]}")
log(f"   Toplam: {len(by_id)} · yazıldı (yedek: services-data.json.bak)")
# tüm plan bitti mi → progress temizle
if all((c, d) in done for (c, d) in plan):
    if os.path.exists(PROGRESS):
        os.remove(PROGRESS)
    log("   Tüm plan tamam — progress temizlendi.")
