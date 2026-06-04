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
    resp = requests.post(PLACES_URL, json=body, headers=headers, timeout=10)
    resp.raise_for_status()
    return resp.json().get("places", [])


if __name__ == "__main__":
    # Tek sorgu testi
    results = search_places("klima teknik servisi istanbul")
    print(f"Sonuç sayısı: {len(results)}")
    if results:
        print("İlk kayıt:", json.dumps(results[0], ensure_ascii=False, indent=2))
