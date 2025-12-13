# Versionierungsstrategie für Beethovens Werkstatt Glossar

## Problem
- Versionierte URLs in Links führen zu Maintenance-Problemen
- Neue Artikelversionen erfordern Updates aller verlinkenden Artikel
- Wissenschaftliche Zitierbarkeit vs. Wartbarkeit

## Lösungsansatz: Drei URL-Typen

### 1. Versionslose interne Links (für Querverweise)
```markdown
[Änderungsimperativ]({% link _glossary/aenderungsimperativ.md %})
```
→ Generiert: `/glossar/aenderungsimperativ/` (zeigt aktuelle Version)

### 2. Versionierte URLs (für Zitate/Archive)
```markdown
/glossar/aenderungsimperativ/1.0.0/
```
→ Spezifische Version für wissenschaftliche Zitate

### 3. Kanonische URL (aktuelle Version)
```markdown
/glossar/aenderungsimperativ/
```
→ Redirect zur aktuellen Version

## Implementierungsstrategie

### Phase 1: Link-System anpassen
- Interne Jekyll-Links verwenden keine Versionen
- PDF-Export generiert versionierte URLs für Stabilität
- Website zeigt aktuelle Versionen

### Phase 2: Versionsverwaltung
- Alle Versionen bleiben verfügbar
- Neue Versionen werden zusätzlich gespeichert
- Automatische Redirects für kanonische URLs

### Phase 3: Zitierhinweise
- DOI für spezifische Versionen
- Empfehlung für versionierte URLs in Zitaten
- Kanonische URLs für Querverweise

### Phase 4: Historische Referenz-Integrität (✅ Implementiert)
- **PDF-Export**: Automatische Ermittlung historisch korrekter Versionen
- Links zeigen die Version, die zum Erstellungsdatum des Artikels aktuell war
- Wissenschaftliche Korrektheit: Referenzen bleiben zeitlich nachvollziehbar
- Beispiel: Artikel von 2021-10-20 verlinkt auf Version von 2021-01-25, nicht auf 2021-12-06

## Vorteile
✅ Interne Links bleiben wartbar
✅ Wissenschaftliche Zitierbarkeit erhalten
✅ Alte Links bleiben funktional
✅ Keine Kaskadierung von Versionsupdates
✅ **Historische Referenz-Integrität in PDF-Exporten**