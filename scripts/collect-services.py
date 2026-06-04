#!/usr/bin/env python3
"""
Teknik servis veri toplama scripti — çok şehir destekli.
Kullanım: GOOGLE_PLACES_API_KEY=xxx python scripts/collect-services.py
"""
import os
import json
import time
import requests

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_PLACES_API_KEY ortam değişkeni eksik")

PLACES_URL = "https://places.googleapis.com/v1/places:searchText"
FIELD_MASK = (
    "places.id,"
    "places.displayName,"
    "places.formattedAddress,"
    "places.nationalPhoneNumber,"
    "places.internationalPhoneNumber,"
    "places.rating,"
    "places.userRatingCount,"
    "places.location,"
    "places.googleMapsUri"
)

# Kapsanan şehirler — yeni şehir eklemek için buraya isim + ilçeler yeter
CITIES = ["istanbul", "izmir"]

ILCELER = {
    "istanbul": [
        "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler",
        "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü",
        "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
        "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane",
        "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
        "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla",
        "Ümraniye", "Üsküdar", "Zeytinburnu",
    ],
    "izmir": [
        "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ",
        "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir",
        "Gediz", "Güzelbahçe", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık",
        "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş",
        "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla",
    ],
}

# Tüm ilçeler düz liste — extract_ilce için
ALL_ILCELER = [ilce for ilceler in ILCELER.values() for ilce in ilceler]

# Kategori → sorgu şablonları (şehir adı sona eklenir)
SEARCHES = [
    {
        "queries": ["beyaz eşya teknik servisi", "beyaz eşya tamiri"],
        "kategoriler": ["Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Fırın / Ocak"],
    },
    {
        "queries": ["klima teknik servisi", "klima tamiri"],
        "kategoriler": ["Klima"],
    },
    {
        "queries": ["kombi servisi", "kombi tamiri"],
        "kategoriler": ["Kombi"],
    },
    {
        "queries": ["televizyon tamiri", "tv teknik servisi"],
        "kategoriler": ["Televizyon"],
    },
    {
        "queries": ["termosifon şofben tamiri"],
        "kategoriler": ["Termosifon / Şofben"],
    },
    {
        "queries": ["telefon tamiri", "gsm teknik servisi"],
        "kategoriler": ["Cep Telefonu"],
    },
    {
        "queries": ["notebook tamiri", "laptop servisi"],
        "kategoriler": ["Notebook"],
    },
    {
        "queries": ["bilgisayar tamiri", "pc teknik servisi"],
        "kategoriler": ["Masaüstü Bilgisayar"],
    },
    {
        "queries": ["yazıcı tamiri", "printer servisi"],
        "kategoriler": ["Yazıcı"],
    },
    {
        "queries": ["elektronik tamir", "küçük ev aletleri tamiri"],
        "kategoriler": [
            "Mikrodalga", "Elektrik Süpürgesi", "Su Sebili / Arıtma",
            "Robot Süpürge", "Air Fryer", "Diğer",
        ],
    },
]


def search_places(query: str) -> list:
    """Tek bir sorgu için Places API'yi çağır, ham result listesi döndür."""
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
    }
    body = {
        "textQuery": query,
        "languageCode": "tr",
        "maxResultCount": 20,
    }
    resp = requests.post(PLACES_URL, json=body, headers=headers, timeout=30)
    resp.raise_for_status()
    return resp.json().get("places", [])


def extract_ilce(address: str) -> str:
    """Adres metninden ilçe adını çıkar; bulunamazsa boş string döndür."""
    address_lower = address.lower()
    for ilce in sorted(ALL_ILCELER, key=len, reverse=True):
        if ilce.lower() in address_lower:
            return ilce
    return ""


def normalize_phone(place: dict):
    """tel: linki için uluslararası formatlı numara döndür."""
    raw = place.get("internationalPhoneNumber") or place.get("nationalPhoneNumber")
    if not raw:
        return None
    return raw.replace(" ", "").replace("-", "")


def parse_place(place: dict, kategoriler: list, sehir: str) -> dict:
    """Places API ham objesini uygulama formatına dönüştür."""
    name = place.get("displayName", {}).get("text", "")
    address = place.get("formattedAddress", "")
    return {
        "id": place.get("id", ""),
        "ad": name,
        "kategoriler": kategoriler,
        "telefon": normalize_phone(place),
        "adres": address,
        "ilce": extract_ilce(address) or sehir.capitalize(),
        "sehir": sehir,
        "lat": place.get("location", {}).get("latitude"),
        "lng": place.get("location", {}).get("longitude"),
        "puan": place.get("rating"),
        "yorumSayisi": place.get("userRatingCount", 0),
        "googleMapsUrl": place.get("googleMapsUri", ""),
        "yetkili": "yetkili" in name.lower() or "authorized" in name.lower(),
    }


def collect_all() -> list:
    """Tüm şehir × kategori sorgularını çalıştır, Place ID'ye göre deduplike et."""
    seen = {}  # place_id → servis kaydı

    for city in CITIES:
        print(f"\n--- {city.upper()} ---")
        for search in SEARCHES:
            for query_base in search["queries"]:
                query = f"{query_base} {city}"
                print(f"  Sorgulanıyor: {query}")
                try:
                    places = search_places(query)
                except requests.RequestException as e:
                    print(f"  HATA: {e}")
                    continue

                for place in places:
                    place_id = place.get("id", "")
                    if not place_id:
                        continue

                    if place_id in seen:
                        existing_cats = seen[place_id]["kategoriler"]
                        new_cats = search["kategoriler"]
                        seen[place_id]["kategoriler"] = list(
                            dict.fromkeys(existing_cats + new_cats)
                        )
                    else:
                        seen[place_id] = parse_place(place, list(search["kategoriler"]), city)

                time.sleep(0.3)

    return list(seen.values())


if __name__ == "__main__":
    print(f"Servis veritabanı oluşturuluyor: {', '.join(CITIES)}")
    results = collect_all()

    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "services-data.json")
    output_path = os.path.normpath(output_path)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\nToplam benzersiz servis: {len(results)}")
    print(f"Dosya: {output_path}")

    cities_count = {}
    for s in results:
        c = s.get("sehir", "?")
        cities_count[c] = cities_count.get(c, 0) + 1
    print("\nŞehir dağılımı:")
    for city, count in sorted(cities_count.items(), key=lambda x: -x[1]):
        print(f"  {city}: {count}")
