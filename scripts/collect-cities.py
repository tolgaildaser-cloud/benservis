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
import os, json, time, shutil, requests

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

CITY_DISPLAY = {"istanbul": "İstanbul", "izmir": "İzmir", "ankara": "Ankara"}
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
}
ALL_CITIES = list(CITY_DISTRICTS.keys())
CITIES = [c for c in ALL_CITIES if not CITIES_SEL or c in CITIES_SEL]
DISTRICT2CITY = {d.lower(): c for c, ds in CITY_DISTRICTS.items() for d in ds}

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


def extract_ilce(address, districts):
    a = (address or "").lower()
    for d in sorted(districts, key=len, reverse=True):
        if d.lower() in a:
            return d
    return ""


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
    return {
        "id": p.get("id", ""), "ad": name, "kategoriler": cats, "telefon": norm_phone(p),
        "adres": addr, "ilce": extract_ilce(addr, CITY_DISTRICTS[city]) or district, "sehir": city,
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

# ---- mevcut veri + mislabel temizliği ----
existing = json.load(open(PATH, encoding="utf-8"))
by_id = {s["id"]: s for s in existing if s.get("id")}
fixed = 0
for s in by_id.values():
    real = DISTRICT2CITY.get((s.get("ilce") or "").lower())
    if real and s.get("sehir") != real:
        s["sehir"] = real; fixed += 1
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
log(f"\n✅ BİTTİ · API çağrısı: {total_calls} · yeni servis: {added} · mislabel: {fixed}")
for c in ALL_CITIES:
    log(f"   {CITY_DISPLAY[c]}: {before[c]} → {after[c]}")
log(f"   Toplam: {len(by_id)} · yazıldı (yedek: services-data.json.bak)")
# tüm plan bitti mi → progress temizle
if all((c, d) in done for (c, d) in plan):
    if os.path.exists(PROGRESS):
        os.remove(PROGRESS)
    log("   Tüm plan tamam — progress temizlendi.")
