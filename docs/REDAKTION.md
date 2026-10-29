# Redaktionsleitfaden

Kurze Regeln für alle, die Texte auf der Website anlegen oder bearbeiten (News, Glossar, Publikationen, Seiten). Die Texte sind in Markdown geschrieben. Nach jeder Änderung bitte im Browser prüfen, ob alles so aussieht wie gedacht.

## Kursiv und fett

| Wo | Kursiv | Fett |
|---|---|---|
| Normaler Fließtext | `*kursiv*` | `**fett**` |
| Text innerhalb von HTML-Tags (Zeile beginnt z. B. mit `<p>` oder `<div>`) | `<em>kursiv</em>` | `<strong>fett</strong>` |

- Innerhalb von HTML-Tags werden Sternchen nicht umgewandelt und bleiben sichtbar stehen.
- Kein Leerzeichen direkt innerhalb der Sternchen: `*Text*` funktioniert, `* Text*` nicht.
- `<i>` und Unterstriche (`_kursiv_`) funktionieren auch, sollen aber für neue Texte nicht verwendet werden. Bestehende Texte müssen nicht umgestellt werden.

## Links

**Auf Glossarartikel** immer ohne Versionsnummer, damit der Link auf die jeweils aktuelle Fassung zeigt:
```markdown
[Monitum]({% link _glossary/monitum.md %})
```

Der Dateiname steht in `_glossary/` (Umlaute ausgeschrieben, z. B. `einfuegung.md`). Links bitte immer direkt im Text schreiben wie oben, nicht als Fußnoten-Verweis am Ende (`[Monitum][1]`), weil der PDF-Export nur diese Form umwandelt.

**Auf andere Seiten der Website** mit dem Pfad ab der Domain:

```markdown
[Modul 2](/module/#modul-2)
```

**Auf externe Seiten** mit der vollständigen Adresse:

```markdown
[Beethoven-Haus Bonn](https://www.beethoven.de/)
```

## Veraltete Angaben in übernommenen Texten

Texte von der alten Website werden inhaltlich nicht verändert, auch wenn Angaben inzwischen überholt sind (Bezugsquellen, Termine, tote Links). Stattdessen direkt hinter die betroffene Stelle eine datierte Anmerkung in eckigen Klammern setzen:

```markdown
… im Buchhandel zum Preis von 18.- € zu beziehen. [Anm. 2026: Das Medienbuch ist im Shop des Beethoven-Hauses nicht mehr erhältlich; Nachweis im [Katalog der Deutschen Nationalbibliothek](https://d-nb.info/1202742262).]
```

- Ein toter Link wird entfernt, der Text bleibt wortgleich.
- Die Anmerkung nennt das Jahr und, wenn möglich, einen funktionierenden Ersatz.
- Gibt es dieselbe Angabe an mehreren Stellen (z. B. in einer Publikation und in der zugehörigen News), die Anmerkung überall ergänzen.

## Literaturbelege

Kurzbelege verlinken auf die Bibliografie:

```markdown
([Kepper 2011]({% link _projekt/bibliografie.md %}), S. 167ff.)
```

- Der zitierte Titel muss in der Bibliografie stehen. Die Bibliografie wird aus Zotero erzeugt (`_data/bibliografie.json`). Neue Titel daher in der Zotero-Gruppe ergänzen und neu exportieren, siehe [ZOTERO_WORKFLOW.md](./ZOTERO_WORKFLOW.md).
- Ausnahme: Publikationen des Projektteams verlinken auf die Seite „Vorträge, Publikationen und Lehre“: `[Cox 2022]({% link _projekt/vortraege-publikationen.md %})`

## Abbildungen

Bilder liegen unter `assets/images/` im passenden Unterordner (`glossary/`, `posts/`, `publications/<name>/`, `dokumentation/<name>/`). Dateinamen ohne Leerzeichen und Umlaute.

**Glossar, Dokumentation und Seiten:** Bild, Leerzeile, dann die Bildunterschrift kursiv mit Nummer:

```markdown
![Kurze Beschreibung des Bildes](/assets/images/glossary/beispiel.jpg)

*Abb. 1: Bildunterschrift mit Quellenangabe.*
```

**Publikationen:** Bildunterschrift direkt in der Zeile unter dem Bild und **ohne** „Abb. 1:“, weil die Nummer dort automatisch vergeben wird:

```markdown
![Kurze Beschreibung des Bildes](/assets/images/publications/name/beispiel.png)
*Bildunterschrift*
```

Der Text in eckigen Klammern wird nicht angezeigt, sondern von Screenreadern vorgelesen. Er sollte das Bild kurz beschreiben.

## Überschriften und Sprungmarken

Überschriften mit `##` (die Hauptüberschrift `#` erzeugt die Seite selbst). Soll eine Überschrift verlinkt werden und enthält sie Umlaute, die Sprungmarke selbst festlegen, sonst fehlen die Umlaute in der Adresse:

```markdown
## Ereignisdichte {#ereignisdichte}
## Änderungsmaßnahmen {#aenderungsmassnahmen}
```

## News

Neue Meldungen liegen in `_posts/`. Der Dateiname beginnt mit dem Datum: `2026-11-02-titel-der-meldung.md`. Kopf der Datei:

```yaml
---
layout: post
title: Titel der Meldung
date: 2026-11-02
categories: news
authors:
- Vorname Nachname
topic: Projekt
---
```

Mögliche Themen (`topic`): Vortrag, Lehre, Arbeitstreffen, Aktivitäten, Projekt, Release.

## Berichte und Dokumentationen: Autor*innen und Datum

Berichte und Dokumentationsseiten (Ordner `_pages/module/`) zeigen unter dem Titel eine Zeile mit Autor*innen und Datum, wenn sie im Kopf der Datei eingetragen sind:

```yaml
author: Elisa Novara, Federica Rovelli
date: 2017-07-03
```

- Ist kein Autor eingetragen, wird nur das Datum angezeigt; der Text gilt dann als vom ganzen Projektteam erstellt.
- Kürzel oder Namen am Textende (z. B. „FR“) gehören stattdessen in `author` (ausgeschrieben).
- Als Datum gilt die Veröffentlichung auf der Website.
- Optional `version: 1.0.0`, wenn der Text eine Versionsangabe trägt.

## Glossar: neue Version eines Artikels

Die aktuelle Fassung steht in `_glossary/<name>.md`, ältere Fassungen in `_glossary/versions/<name>/<version>.md`. Für eine neue Version:

1. Die bisherige Datei unverändert nach `_glossary/versions/<name>/<bisherige Version>.md` kopieren.
2. In `_glossary/<name>.md` den Text überarbeiten und im Kopf anpassen: `version`, `date`, `permalink` (mit neuer Versionsnummer), `changes` (kurz, was sich geändert hat) und `doi_version`.

Die Seite zeigt dann automatisch den Hinweis auf ältere Versionen an. Hintergrund: [VERSIONING_STRATEGY.md](./VERSIONING_STRATEGY.md).

## Vor dem Commit prüfen

- Seite lokal oder auf web2 im Browser ansehen: Stehen Sternchen, `{% … %}` oder eckige Klammern sichtbar im Text, stimmt etwas mit der Formatierung nicht.
- Links anklicken, besonders neue Glossar- und Bibliografielinks.
- Bilder werden angezeigt, die Bildunterschrift steht darunter.
