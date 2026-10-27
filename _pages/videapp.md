---
layout: default
title: VideApp
permalink: /videapp/
---

<h1>{{ page.title }}</h1>

<div class="videapp-disclaimer" role="note">
  <strong>Hinweis:</strong> Die Anwendungen auf dieser Seite befinden sich noch in Entwicklung. Da einige Darstellungen aus abweichenden Datenstrukturen automatisch generiert werden, betrifft dies auch die angebotenen Transkriptionen. Das Projekt arbeitet aktiv an der Überprüfung dieser Inhalte. Funktionsumfang, Darstellung und Daten können sich daher jederzeit ändern, und einzelne Funktionen sind möglicherweise noch unvollständig oder fehlerhaft. Über Hinweise per <a href="mailto:info@beethovens-werkstatt.de">Email</a> freuen wir uns dennoch.
</div>

<p>Die VideApp macht Beethovens Schreibprozesse in den Quellen nachvollziehbar. Die neue Version besteht aus mehreren Werkzeugen, die auf denselben Daten aufbauen. Gegenstand ist immer das im <a href="{{ '/module/#modul-4' | relative_url }}">vierten Projektmodul</a> bearbeitete <strong>Notirungsbuch K</strong>. Dabei handelt es sich um ein im Frühjahr 1823 genutzten Skizzenbuch Beethovens, in dem hauptsächlich Skizzen zu den Diabelli-Variationen op.120 sowie der 9. Sinfonie op.125 enthalten sind.</p>

<div class="videapp-entry">
  <div class="videapp-entry-item">
    <h3><a href="{{ '/facs/' | relative_url }}">Digitales Faksimile</a></h3>
    <p>Mit dieser VideApp können Sie das Notirungsbuch K als <strong>Dokument</strong> betrachten und über Filtermöglichkeiten die verschiedenen Schreibzonen erkunden. Dies ist der primäre Zugang.</p>
  </div>
  <div class="videapp-entry-item">
    <h3><a href="{{ '/transcription/NK/wz29.5/' | relative_url }}">Transkriptionen</a></h3>
    <p>Mit diesem Werkzeug lassen sich einzelne <strong>Schreibzonen</strong> ("Skizzen") im Detail betrachten und über verschiedene, miteinander interaktiv verbundene Transkriptionen inhaltlich erschließen.</p>
  </div>
</div>

<p>Alle der obenstehenden Werkzeuge sind untereinander verbunden und und erlauben jederzeit einen Perspektivwechsel. Weitere Werkzeuge, die weitere Perspektiven auf diesen Datenbestand ergänzen, werden an dieser Stelle nach und nach ergänzt.</p>

<h2>Ältere VideApps</h2>

<p>Die in den einzelnen <a href="{{ '/module/' | relative_url }}">Modulen</a> entwickelten Anwendungen sind weiterhin verfügbar:</p>

<ul class="videapp-others">
{%- for modul in site.data.module_content -%}
  {%- for item in modul[1].editionen_software -%}
    {%- if item.title contains "VideApp-" -%}
  <li>
    <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% if item.beschreibung %} – {{ item.beschreibung }}{% endif %}
  </li>
    {%- endif -%}
  {%- endfor -%}
{%- endfor -%}
</ul>

<p>Weitere Editionen und Werkzeuge finden Sie auf der Seite <a href="{{ '/module/' | relative_url }}">Module</a>.</p>
