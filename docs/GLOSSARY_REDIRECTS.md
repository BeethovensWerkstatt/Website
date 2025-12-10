# Automatische Weiterleitungen für Glossarartikel

Dieses System sorgt dafür, dass URLs ohne Versionsnummer automatisch zur neuesten Version eines Glossarartikels weiterleiten.

## ✨ Features

- **Automatisch**: Neue Versionen werden automatisch erkannt
- **Zukunftssicher**: Keine manuellen Updates notwendig
- **SEO-freundlich**: Canonical Links und Meta-Refresh
- **Benutzerfreundlich**: 1-Sekunden-Verzögerung mit visueller Rückmeldung

## 🔗 URL-Schema

| URL | Verhalten |
|-----|-----------|
| `/glossar/artikel-name/` | → Weiterleitung zur neuesten Version |
| `/glossar/artikel-name/1.0.1/` | → Direkte Verlinkung zu spezifischer Version |

## 🚀 Verwendung

### Automatisch (empfohlen)
Das Jekyll-Plugin generiert bei jedem Build automatisch Weiterleitungsseiten für alle versionierten Artikel.

### Manuell
```bash
# Alle Weiterleitungen neu generieren
./scripts/update-redirects.sh

# Nur Ruby-Script ausführen
ruby scripts/generate-redirects.rb

# Alle Weiterleitungen testen
./scripts/test-redirects.sh
```

## 📁 Komponenten

### Jekyll Plugin
- **Datei**: `_plugins/glossary_redirects.rb`
- **Funktion**: Automatische Generation bei Jekyll-Build
- **Konfiguration**: Kann über `_config.yml` deaktiviert werden

### Ruby Script
- **Datei**: `scripts/generate-redirects.rb`
- **Funktion**: Manuelle Generation aller Weiterleitungsseiten
- **Ausgabe**: HTML-Dateien in `glossar/[artikel-name]/index.html`

### Shell Scripts
- **update-redirects.sh**: Generiert Weiterleitungen und startet Jekyll neu
- **test-redirects.sh**: Testet alle Weiterleitungen

## 🔧 Funktionsweise

1. **Erkennung**: System findet alle Markdown-Dateien mit `version:` im Frontmatter
2. **Analyse**: Extrahiert Artikel-Titel und URL-Slug
3. **Generation**: Erstellt HTML-Weiterleitungsseiten mit Jekyll Liquid-Templates
4. **Automatik**: Jekyll verarbeitet Templates und findet automatisch neueste Version

## 📋 Voraussetzungen

- Artikel müssen `version:` und `title:` im Frontmatter haben
- Artikel müssen in `_glossary/` liegen oder über Jekyll Collection erreichbar sein
- URL-Struktur: `/glossar/artikel-name/version/`

## 💡 Beispiel

**Artikel**: `_glossary/aehnlichkeit.md`
```yaml
---
title: Ähnlichkeit
version: 1.0.1
permalink: /glossar/aehnlichkeit/1.0.1/
---
```

**Generiert**:
- `glossar/aehnlichkeit/index.html` → Weiterleitung zu `/glossar/aehnlichkeit/1.0.1/`

## 🚨 Troubleshooting

### Weiterleitung funktioniert nicht
1. Prüfe Jekyll-Logs auf Fehler
2. Führe `./scripts/test-redirects.sh` aus
3. Regeneriere mit `./scripts/update-redirects.sh`
4. Stelle sicher, dass Jekyll läuft

### Neue Artikel werden nicht erkannt
1. Prüfe Frontmatter (`version:` und `title:` vorhanden?)
2. Artikel in `_glossary/` Collection?
3. Jekyll-Cache löschen und neu starten

### Plugin läuft nicht
Prüfe `_config.yml`:
```yaml
generate_glossary_redirects: true  # Standard: true
```

## 🔍 Logs

Jekyll zeigt Plugin-Aktivität in der Konsole:
```
Glossary Redirects: Generated 9 redirect pages
```