#!/usr/bin/env python3
"""src/services-data.json'daki MEVCUT servislere Google Place Details'tan
çalışma saatleri (calismaSaatleri) ekler. Set DEĞİŞMEZ — yeniden arama yok,
her servis kendi Place ID'siyle sorgulanır, yalnızca saat alanı eklenir.

Kullanım:
  GOOGLE_PLACES_API_KEY=xxx python3 scripts/enrich-hours.py [--limit N] [--out PATH]

Not: ANAHTAR yalnız ortam değişkeninden okunur; dosyaya/gite ASLA yazılmaz.
"""
import os, sys, json, time, urllib.request, urllib.error

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_PLACES_API_KEY ortam değişkeni eksik")

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "src", "services-data.json")

args = sys.argv[1:]
limit, out = None, SRC
for i, a in enumerate(args):
    if a == "--limit":
        limit = int(args[i + 1])
    elif a == "--out":
        out = args[i + 1]

with open(SRC, encoding="utf-8") as f:
    services = json.load(f)


def fetch_hours(pid):
    url = "https://places.googleapis.com/v1/places/%s?languageCode=tr" % pid
    req = urllib.request.Request(url, headers={
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": "regularOpeningHours",
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            d = json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return None, "HTTP %s" % e.code
    except Exception as e:
        return None, str(e)[:60]
    oh = d.get("regularOpeningHours")
    if not oh:
        return None, "saat yok"
    return {"periods": oh.get("periods", []), "gunler": oh.get("weekdayDescriptions", [])}, "ok"


todo = services if limit is None else services[:limit]
ok = nohours = err = 0
for i, s in enumerate(todo):
    pid = s.get("id")
    if not pid:
        continue
    h, status = fetch_hours(pid)
    s["calismaSaatleri"] = h
    if h:
        ok += 1
    elif status == "saat yok":
        nohours += 1
    else:
        err += 1
        print("  ! %s: %s" % (s.get("ad"), status))
    if (i + 1) % 25 == 0:
        print("  %d/%d  (saatli:%d saatsiz:%d hata:%d)" % (i + 1, len(todo), ok, nohours, err))
    time.sleep(0.05)

with open(out, "w", encoding="utf-8") as f:
    json.dump(services, f, ensure_ascii=False, indent=2)
    f.write("\n")
print("BİTTİ -> %s | saatli:%d saatsiz:%d hata:%d / %d islendi" % (out, ok, nohours, err, len(todo)))
