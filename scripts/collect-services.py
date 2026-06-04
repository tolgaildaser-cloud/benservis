#!/usr/bin/env python3
"""
İstanbul teknik servis veri toplama scripti.
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

def search_places(query: str) -> list[dict]:
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


SEARCHES = [
    {
        "queries": [
            "beyaz eşya teknik servisi istanbul",
            "beyaz eşya tamiri istanbul",
        ],
        "kategoriler": ["Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Fırın / Ocak"],
    },
    {
        "queries": ["klima teknik servisi istanbul", "klima tamiri istanbul"],
        "kategoriler": ["Klima"],
    },
    {
        "queries": ["kombi servisi istanbul", "kombi tamiri istanbul"],
        "kategoriler": ["Kombi"],
    },
    {
        "queries": ["televizyon tamiri istanbul", "tv teknik servisi istanbul"],
        "kategoriler": ["Televizyon"],
    },
    {
        "queries": ["termosifon şofben tamiri istanbul"],
        "kategoriler": ["Termosifon / Şofben"],
    },
    {
        "queries": ["telefon tamiri istanbul", "gsm teknik servisi istanbul"],
        "kategoriler": ["Cep Telefonu"],
    },
    {
        "queries": ["notebook tamiri istanbul", "laptop servisi istanbul"],
        "kategoriler": ["Notebook"],
    },
    {
        "queries": ["bilgisayar tamiri istanbul", "pc teknik servisi istanbul"],
        "kategoriler": ["Masaüstü Bilgisayar"],
    },
    {
        "queries": ["yazıcı tamiri istanbul", "printer servisi istanbul"],
        "kategoriler": ["Yazıcı"],
    },
    {
        "queries": [
            "elektronik tamir istanbul",
            "küçük ev aletleri tamiri istanbul",
        ],
        "kategoriler": [
            "Mikrodalga", "Elektrik Süpürgesi", "Su Sebili / Arıtma",
            "Robot Süpürge", "Air Fryer", "Diğer",
        ],
    },
]

ISTANBUL_ILCELERI = [
    "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler",
    "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü",
    "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
    "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane",
    "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
    "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla",
    "Ümraniye", "Üsküdar", "Zeytinburnu",
]

def extract_ilce(address: str) -> str:
    """Adres metninden İstanbul ilçesini çıkar."""
    address_lower = address.lower()
    for ilce in sorted(ISTANBUL_ILCELERI, key=len, reverse=True):
        if ilce.lower() in address_lower:
            return ilce
    return "İstanbul"

def normalize_phone(place: dict):
    """tel: linki için uluslararası formatlı numara döndür."""
    raw = place.get("internationalPhoneNumber") or place.get("nationalPhoneNumber")
    if not raw:
        return None
    return raw.replace(" ", "").replace("-", "")

def parse_place(place: dict, kategoriler: list[str]) -> dict:
    """Places API ham objesini uygulama formatına dönüştür."""
    name = place.get("displayName", {}).get("text", "")
    return {
        "id": place.get("id", ""),
        "ad": name,
        "kategoriler": kategoriler,
        "telefon": normalize_phone(place),
        "adres": place.get("formattedAddress", ""),
        "ilce": extract_ilce(place.get("formattedAddress", "")),
        "lat": place.get("location", {}).get("latitude"),
        "lng": place.get("location", {}).get("longitude"),
        "puan": place.get("rating"),
        "yorumSayisi": place.get("userRatingCount", 0),
        "googleMapsUrl": place.get("googleMapsUri", ""),
        "yetkili": "yetkili" in name.lower() or "authorized" in name.lower(),
    }

def collect_all() -> list[dict]:
    """Tüm sorguları çalıştır, Place ID'ye göre deduplike et, liste döndür."""
    seen: dict[str, dict] = {}  # place_id → servis kaydı

    for search in SEARCHES:
        for query in search["queries"]:
            print(f"  Sorgulaniyor: {query}")
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
                    # Aynı servis farklı kategoriden geldi: kategorileri birleştir
                    existing_cats = seen[place_id]["kategoriler"]
                    new_cats = search["kategoriler"]
                    seen[place_id]["kategoriler"] = list(
                        dict.fromkeys(existing_cats + new_cats)
                    )
                else:
                    seen[place_id] = parse_place(place, list(search["kategoriler"]))

            time.sleep(0.3)  # API rate limit: 10 istek/saniye serbest kota

    return list(seen.values())


if __name__ == "__main__":
    print("İstanbul servis veritabanı oluşturuluyor…")
    results = collect_all()

    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "services-data.json")
    output_path = os.path.normpath(output_path)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\nToplam benzersiz servis: {len(results)}")
    print(f"Dosya: {output_path}")

    cats = {}
    for s in results:
        for k in s["kategoriler"]:
            cats[k] = cats.get(k, 0) + 1
    print("\nKategori dağılımı:")
    for cat, count in sorted(cats.items(), key=lambda x: -x[1]):
        print(f"  {cat}: {count}")
