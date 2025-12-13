# PDF Generation für Glossar-Artikel

## Überblick

Das Skript `generate-pdf.sh` konvertiert Glossar-Artikel aus Markdown in PDF-ready HTML-Dateien für die Zenodo-Archivierung.

## Verwendung

### Grundlegende Verwendung
```bash
./scripts/generate-pdf.sh aehnlichkeit
```

### Output öffnen
```bash
# HTML im Browser öffnen und "Als PDF drucken" verwenden
open output/pdf/aehnlichkeit.html
```

## Features

### ✅ Vollständige Markdown-Konvertierung
- Jekyll-Liquid-Syntax: `{{ '/path/image.jpg' | relative_url }}`
- Jekyll-Links: `{% link _glossary/artikel.md %}`
- Markdown-Links: `[Text](URL)`

### ✅ Base64-Image-Embedding
- Alle Bilder werden inline eingebettet
- Keine externen Abhängigkeiten
- Offline-taugliche PDFs

### ✅ Historische Link-Versionierung  
- **Online (Website)**: Links zeigen immer auf aktuelle Versionen
- **PDF-Export**: Links zeigen auf historisch korrekte Versionen
- Automatische Ermittlung der Version, die zum Erstellungsdatum aktuell war
- Wissenschaftliche Integrität: Referenzen bleiben historisch korrekt

### ✅ Metadaten-Integration
- Extraktion aus YAML frontmatter
- Titel, Autor, Version, Datum
- DOI-Links zu Zenodo (`doi_version`, `doi_overview`)

### ✅ Website-konformes Design
- Rotes Corporate Design aus `assets/css/glossary-pdf-print.css`
- Externe CSS für effiziente Bulk-Verarbeitung
- Korrekte Abstände und Typografie
- Zitierhinweis mit DOI-Links
- Optimiert für "Print to PDF"

## Dateienstruktur

```
assets/css/glossary-pdf-print.css  ← Shared CSS für alle PDF-Exports
output/pdf/                        ← HTML-Dateien für PDF-Konvertierung
├── artikel1.html
├── artikel2.html
└── ...
```

## Ausgabe

HTML-Dateien werden in `output/pdf/` gespeichert und enthalten:
- Vollständige Metadaten und DOI-Links  
- Eingebettete Base64-kodierte Bilder
- Korrekte Links zu anderen Glossar-Artikeln
- Professionelles Layout für Zenodo-Archivierung

## Beispiel: Historische Versionierung

```bash
# Artikel "Änderungsimperativ" (2021-10-20) konvertieren
./scripts/generate-pdf.sh aenderungsimperativ

# Ergebnis zeigt historisch korrekte Links:
# - Link zu "aenderungsmassnahmen-klassifizierung/1.0.0/" (von 2021-01-25)
# - NICHT zu "aenderungsmassnahmen-klassifizierung/1.0.1/" (von 2021-12-06)
# - Wissenschaftlich korrekte Referenz zum Zeitpunkt der Artikelerstellung
```

## Standard-Beispiel

```bash
# Artikel "Ähnlichkeit" konvertieren
./scripts/generate-pdf.sh aehnlichkeit

# Ergebnis: 
# - output/pdf/aehnlichkeit.html (12K, mit externer CSS)
# - assets/css/glossary-pdf-print.css (3K, shared)
# - Eingebettetes Notenbeispiel
# - DOI-Links zu Zenodo
# - Klickbare interne Links
```

## Bulk-Verarbeitung für 100+ Artikel

Das System ist optimiert für die effiziente Verarbeitung vieler Artikel:
- **Externe CSS**: `glossary-pdf-print.css` wird nur einmal erstellt
- **50% kleiner**: HTML-Dateien ohne inline CSS (~8K statt 16K)
- **Konsistentes Design**: Alle Artikel nutzen dasselbe Styling