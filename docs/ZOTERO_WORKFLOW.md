# Zotero-Workflow für Vorträge, Publikationen und Lehre

Diese Dokumentation beschreibt den Workflow zur Verwaltung und Aktualisierung der Daten für die Seite [Vorträge, Publikationen und Lehre](/vortraege-publikationen/) mittels Zotero.

## Übersicht

Die Website nutzt **Zotero Collections** als zentrale Datenquelle für drei Bereiche:

1. **Vorträge** – Konferenzbeiträge, Präsentationen, Panels
2. **Publikationen** – Artikel, Bücher, Forschungsbeiträge
3. **Lehre** – Lehrveranstaltungen, Seminare, Workshops

Die Daten werden aus Zotero als **CSL JSON** exportiert und in den `_data/`-Ordner abgelegt. Jekyll liest diese JSON-Dateien beim Build-Prozess ein und generiert daraus die Website-Inhalte.

## Zotero Collections

### Vorträge Collection
- **URL**: [https://www.zotero.org/groups/1157767/beethovens_werkstatt/collections/QUXS9UZ9/collection](https://www.zotero.org/groups/1157767/beethovens_werkstatt/collections/QUXS9UZ9/collection)
- **Typ**: Öffentliche Collection der Zotero-Gruppe "Beethovens Werkstatt"
- **Inhalt**: Alle Vorträge des Projektteams (Stand Jan. 2026: 155 Einträge)
- **Zeitraum**: 2014 – heute

### Publikationen Collection
- **Status**: In Planung
- Analog zur Vorträge-Collection

### Lehre Collection
- **Status**: In Planung
- Analog zur Vorträge-Collection

## Export-Workflow aus Zotero

### Schritt 1: Zotero-Export durchführen

1. Öffne die entsprechende Collection in Zotero (z.B. Vorträge)
2. Rechtsklick auf die Collection → **"Export Collection..."**
3. Export-Einstellungen:
   - **Format**: `CSL JSON`
   - **Optionen**: Keine speziellen Optionen erforderlich
4. Datei speichern (z.B. als `export-data.json`)

### Schritt 2: Daten normalisieren (optional)

Bei größeren Updates können mehrere Exports zusammengeführt werden. Nutze Python für die Normalisierung:

```python
import json

# JSON-Dateien einlesen
with open('export-data.json', 'r', encoding='utf-8') as f1:
    data1 = json.load(f1)
with open('export-data-2.json', 'r', encoding='utf-8') as f2:
    data2 = json.load(f2)

# Zusammenführen
merged = {
    'items': data1['items'] + data2['items']
}

# Jahre als Integer normalisieren (wichtig für Sortierung!)
for item in merged['items']:
    if 'issued' in item and 'date-parts' in item['issued']:
        date_parts = item['issued']['date-parts'][0]
        # Sicherstellen, dass Jahr ein Integer ist
        if isinstance(date_parts[0], str):
            date_parts[0] = int(date_parts[0])

# Speichern
with open('vortraege.json', 'w', encoding='utf-8') as f:
    json.dump(merged, f, ensure_ascii=False, indent=2)
```

### Schritt 3: Datei im Repository ablegen

Kopiere die exportierte (und normalisierte) JSON-Datei in den entsprechenden `_data/`-Ordner:

```bash
cp vortraege.json _data/vortraege/vortraege.json
```

**Ordnerstruktur:**
```
Website/
  _data/
    vortraege/
      vortraege.json          # Aktuelle Daten
      2026-01-28-vortraege.json  # Archiv (optional)
    publikationen/            # Zukünftig
      publikationen.json
    lehre/                    # Zukünftig
      lehre.json
```

### Schritt 4: Änderungen committen

```bash
git add _data/vortraege/vortraege.json
git commit -m "Update: Vorträge-Daten aktualisiert (Stand: $(date +%Y-%m-%d))"
git push
```

## Datenstruktur (CSL JSON)

### Pflichtfelder für Vorträge

```json
{
  "items": [
    {
      "id": "eindeutige-id",
      "type": "speech",
      "title": "Titel des Vortrags",
      "author": [
        {
          "family": "Kepper",
          "given": "Johannes"
        }
      ],
      "issued": {
        "date-parts": [[2025, 6, 23]]  // Jahr, Monat, Tag als Integer!
      },
      "event": "Name der Konferenz/Veranstaltung",
      "event-place": "Stadt, Land",
      "genre": "Vortrag",
      "language": "german",
      "URL": "https://example.org/conference"  // Optional
    }
  ]
}
```

### Wichtige Hinweise zur Datenqualität

#### 1. Datum-Format
- **Wichtig**: Jahre müssen als **Integer** (nicht String!) gespeichert werden
- Format: `[[YYYY, MM, DD]]` – alle Werte als Integer
- Beispiel korrekt: `[[2025, 6, 23]]`
- Beispiel falsch: `[["2025", 6, 23]]` ← String statt Integer!

#### 2. Genre-Kategorien

Die Genres wurden auf **5 Hauptkategorien** konsolidiert:

- `Vortrag` – Standard-Präsentation
- `Panel/Diskussion` – Panel-Teilnahme, Podiumsdiskussion
- `Tool-/Projektvorstellung` – Demos, Projektpräsentationen
- `Poster` – Poster-Präsentationen
- `Workshop/Seminar` – Interaktive Formate

**Konsolidierung in Zotero durchführen:**
Vor dem Export sollten alle Einträge einem dieser 5 Genres zugeordnet werden. Die alte Granularität (28 verschiedene Genres) führte zu unübersichtlichen Filtern.

#### 3. Autoren-Namen

- Format: `{ "family": "Nachname", "given": "Vorname" }`
- Bei mehreren Vornamen: Trennzeichen beachten (z.B. "Bernhard R.")
- Beispiel: `{ "family": "Appel", "given": "Bernhard R." }`

#### 4. Ortsangaben

**Empfohlenes Format:**
- Europäische Städte: nur Stadt (z.B. "Bonn", "Berlin", "Wien")
- Außereuropäische Orte: Stadt, Land (z.B. "Halifax, Kanada", "Charlottesville, Virginia")

#### 5. URLs (optional)

Falls die Veranstaltung eine Website hat, kann diese im `URL`-Feld angegeben werden:
- Der Veranstaltungs-Name wird dann automatisch verlinkt
- Beispiel: `"URL": "https://music-encoding.org/conference/2025/"`

## Website-Integration

### Verfügbare Funktionen

Die Vorträge-Seite bietet folgende Features:

1. **Filter**
   - **Jahr**: Dropdown mit allen verfügbaren Jahren (immer vollständig sichtbar)
   - **Genre**: 5 Kategorien (dynamisch, passt sich an sichtbare Einträge an)
   - **Sprache**: Erkannte Sprachen (dynamisch)
   - **Person**: Nur Team-Mitglieder (whitelist-basiert)

2. **Suche**
   - Durchsucht: Titel, Veranstaltung, Ort
   - Clear-Button zum Zurücksetzen

3. **Sortierung**
   - Chronologisch, neueste zuerst
   - Client-seitig via JavaScript

4. **Anzeige**
   - Titel + Genre-Tag (oben rechts)
   - Autoren + Veranstaltung (verlinkt, falls URL vorhanden)
   - Ort + Datum

### Team-Mitglieder Whitelist

Der **Person-Filter** zeigt nur Projekt-Mitglieder (aktuelle + ehemalige):

**Aktuelle Mitglieder:**
Appel, Bracht, Cox, Herold, Kepper, Münzmay, Rosendahl, Sänger, Seipelt, Stremel, Veit, Voigt

**Ehemalige Mitglieder:**
Saccomano, Novara, Mo, Pauls, Obert, Markert, Rovelli, Hartwig, Schlicht, Zhang, Scheffler

**Aktualisierung der Whitelist:**
Bei neuen Team-Mitgliedern muss die Liste in [`_projekt/vortraege-publikationen.md`](../_projekt/vortraege-publikationen.md) in zwei Funktionen aktualisiert werden:
- `populateFilterOptions()` – Zeile ~553
- `updateFilterOptions()` – Zeile ~650

Suche nach `const teamMitglieder = new Set([` und füge den Nachnamen in Kleinbuchstaben hinzu.

## Aktualisierung: Schritt-für-Schritt

### Neue Einträge hinzufügen

1. **In Zotero**:
   - Neuen Eintrag in der entsprechenden Collection anlegen
   - Alle Pflichtfelder ausfüllen (Titel, Autor, Datum, Veranstaltung, Genre)
   - Bei Bedarf URL zur Veranstaltung ergänzen

2. **Export durchführen**:
   - Collection als CSL JSON exportieren
   - Datei-Check: Sind die Jahre als Integer gespeichert?

3. **Daten normalisieren** (falls mehrere Exports):
   - Python-Skript ausführen (siehe oben)
   - Besonders auf Integer-Jahre achten!

4. **In Repository übertragen**:
   ```bash
   cp export-data.json _data/vortraege/vortraege.json
   ```

5. **Lokal testen**:
   ```bash
   ./dev.sh start
   ```
   Öffne [http://localhost:4000/vortraege-publikationen/](http://localhost:4000/vortraege-publikationen/) und prüfe:
   - Werden neue Einträge angezeigt?
   - Funktionieren alle Filter?
   - Sind URLs korrekt verlinkt?

6. **Committen & Deployen**:
   ```bash
   git add _data/vortraege/vortraege.json
   git commit -m "Update: X neue Vorträge hinzugefügt"
   git push
   ```

### Bestehende Einträge korrigieren

**Workflow:**
1. Korrektur in Zotero durchführen
2. Collection neu exportieren (CSL JSON)
3. Bestehende Datei in `_data/vortraege/` ersetzen
4. Lokal testen → Committen → Pushen

**Häufige Korrekturen:**
- Namens-Schreibweisen (z.B. "Bernhard R. Appel" statt "Bernhard Appel")
- Genre-Konsolidierung (alte Genres → 5 Hauptkategorien)
- Ortsangaben standardisieren
- URLs ergänzen

## Backup & Versionierung

### Archivierung

Bei größeren Updates empfiehlt sich eine Archiv-Kopie:

```bash
# Vor dem Update: Backup erstellen
cp _data/vortraege/vortraege.json _data/vortraege/$(date +%Y-%m-%d)-vortraege.json

# Neue Daten übertragen
cp export-data.json _data/vortraege/vortraege.json
```

**Beispiel:**
```
_data/vortraege/
  vortraege.json              # Aktuelle Daten
  2026-01-28-vortraege.json   # Archiv
```

### Git-Historie

Alle Änderungen an den JSON-Dateien sind über Git nachvollziehbar:

```bash
# Änderungen anzeigen
git log _data/vortraege/vortraege.json

# Diff zur vorherigen Version
git diff HEAD~1 _data/vortraege/vortraege.json

# Alte Version wiederherstellen
git checkout abc1234 -- _data/vortraege/vortraege.json
```

## Troubleshooting

### Problem: Vorträge werden nicht angezeigt

**Mögliche Ursachen:**
1. **JSON-Syntax-Fehler**
   - Prüfen: `cat _data/vortraege/vortraege.json | python3 -m json.tool`
   - Fehler beheben, Datei neu speichern

2. **Fehlende Pflichtfelder**
   - Jeder Eintrag muss mindestens haben: `title`, `author`, `issued`

3. **Falsches Datum-Format**
   - Jahr muss Integer sein, nicht String!
   - Prüfen: `cat _data/vortraege/vortraege.json | python3 -c "import json, sys; data = json.load(sys.stdin); print([(i['title'][:30], type(i['issued']['date-parts'][0][0])) for i in data['items'][:5]])"`

### Problem: Filter zeigen falsche Werte

**Ursache**: Team-Mitglieder-Whitelist veraltet

**Lösung**: Whitelist in [`_projekt/vortraege-publikationen.md`](../_projekt/vortraege-publikationen.md) aktualisieren (siehe oben)

### Problem: Sortierung funktioniert nicht

**Ursache**: Jahre sind als String statt Integer gespeichert

**Lösung**: Daten mit Python-Skript normalisieren (siehe "Schritt 2: Daten normalisieren")

## Zukünftige Erweiterungen

### Publikationen-Tab

Analog zum Vorträge-Workflow:
1. Zotero-Collection für Publikationen anlegen
2. Export als CSL JSON → `_data/publikationen/publikationen.json`
3. Template in `_projekt/vortraege-publikationen.md` erweitern
4. Filter anpassen (z.B. Publikationstyp statt Genre)

### Lehre-Tab

Analog zu Vorträge/Publikationen, möglicherweise mit zusätzlichen Feldern:
- Semester
- Hochschule/Institution
- Lehrformat (Vorlesung, Seminar, Übung)

## Weiterführende Dokumentation

- [Zotero Documentation](https://www.zotero.org/support/)
- [CSL JSON Schema](https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html)
- [Jekyll Data Files](https://jekyllrb.com/docs/datafiles/)

## Kontakt

Bei Fragen zum Workflow oder technischen Problemen:
- Projektteam kontaktieren
- Issue im GitHub-Repository öffnen

---

**Letzte Aktualisierung**: Januar 2026  
**Erstellt von**: GitHub Copilot & Projektteam
