---
layout: default
title: Digitale Methoden
permalink: /digitale-methoden/
parent: Projekt
parent_url: /projekt
---

<style>
.methoden-intro { color: #555; margin-bottom: 2rem; text-align: left; }

/* Schema: gemeinsames Zeilenraster, damit die Links in allen Kästen auf derselben Höhe beginnen */
.methoden-ablauf {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto 1fr;
  column-gap: 1.4rem;
  margin: 1.5rem 0 3rem;
  list-style: none;
  padding: 0;
}
.methoden-schritt {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  row-gap: 0;
  position: relative;
  background: #f8f9fa;
  border-top: 3px solid #c93b22;
  padding: 0.75rem 0.75rem 0.9rem;
  font-size: 0.85rem;
}
.methoden-schritt:not(:last-child)::after {
  content: "→";
  position: absolute;
  right: -1.15rem;
  top: 0.6rem;
  color: #c93b22;
  font-size: 1.1rem;
}
.methoden-schritt h3 { font-size: 0.95rem; margin: 0 0 0.3rem; color: #333; }
.methoden-schritt p { color: #666; margin: 0 0 0.6rem; line-height: 1.35; text-align: left; hyphens: auto; }
.methoden-schritt ul { list-style: none; padding: 0; margin: 0; align-self: start; }
.methoden-schritt li { margin: 0.15rem 0; }
@media (max-width: 900px) {
  .methoden-ablauf { display: block; }
  .methoden-schritt { display: block; margin-bottom: 1.4rem; }
  .methoden-schritt:not(:last-child)::after { content: "↓"; right: auto; left: 1rem; top: auto; bottom: -1.35rem; }
}

/* Kurzes Glossar */
.methoden-gruppe { margin-bottom: 2.5rem; }
.methoden-gruppe h2 { margin-bottom: 0.5rem; }
.methoden-liste { display: grid; grid-template-columns: 13rem 1fr; margin: 0; }
.methoden-liste dt, .methoden-liste dd { padding: 0.6rem 0; border-top: 1px solid #e5e5e5; margin: 0; }
.methoden-liste dt { font-weight: 700; padding-right: 1rem; scroll-margin-top: 5rem; }
.methoden-liste dt .methoden-voll { display: block; font-weight: normal; color: #777; font-size: 0.85rem; }
.methoden-liste dd p { margin: 0; text-align: left; }
.methoden-links { font-size: 0.9rem; margin-top: 0.2rem; }
.methoden-links a + a::before { content: "·"; color: #999; margin: 0 0.45rem; display: inline-block; }
.methoden-anker { display: block; position: relative; top: -5rem; visibility: hidden; height: 0; }
@media (max-width: 600px) {
  .methoden-liste { grid-template-columns: 1fr; }
  .methoden-liste dd { border-top: none; padding-top: 0; }
}
</style>

# {{ page.title }}

{% assign M = site.data.methoden %}

{% comment %}Einleitung: Vorschlag zur Diskussion im Team (Issue #17){% endcomment %}
<div class="methoden-intro" markdown="1">

*Beethovens Werkstatt* verbindet genetische Textkritik mit digitalen Methoden. Die untersuchten Schreibprozesse werden nicht nur beschrieben, sondern als Daten erfasst und in eigens entwickelten Anwendungen sichtbar gemacht. Grundlage ist die Codierung der Notentexte im Format der [Music Encoding Initiative](#mei), verknüpft mit den digitalen Faksimiles.

Dafür nutzt das Projekt etablierte Standards und Werkzeuge der digitalen Musikedition, teils in engem Austausch mit deren Entwickler*innen, und hat eigene Anwendungen geschaffen, allen voran die [VideApps](#videapps). Viele der Werkzeuge stammen aus dem Umfeld des [Virtuellen Forschungsverbunds Edirom](https://edirom.de/).

Das Schema zeigt, an welcher Stelle der Arbeit welche Standards und Werkzeuge zum Einsatz kommen. Die Einträge darunter erläutern, worum es sich jeweils handelt, wofür das Projekt es nutzt und wo die Ergebnisse auf dieser Website zu finden sind.

</div>

<ol class="methoden-ablauf">
{% for s in M.ablauf %}
  <li class="methoden-schritt">
    <h3>{{ s.schritt }}</h3>
    <p>{{ s.text }}</p>
    <ul>
    {% for eid in s.eintraege %}
      {% assign e = M.eintraege | where: "id", eid | first %}
      {% if e %}<li><a href="#{{ e.id }}">{{ e.name }}</a></li>{% endif %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ol>

{% assign gruppen = "standard|Standards und Technologien;software|Eingesetzte Software;eigen|Eigene Werkzeuge" | split: ";" %}
{% for g in gruppen %}
{% assign gp = g | split: "|" %}
<section class="methoden-gruppe" id="{{ gp[0] }}">
<h2>{{ gp[1] }}</h2>
<dl class="methoden-liste">
{% assign liste = M.eintraege | where: "gruppe", gp[0] %}
{% for e in liste %}
  <dt id="{{ e.id }}">{% for a in e.anker %}<span class="methoden-anker" id="{{ a }}"></span>{% endfor %}{{ e.name }}{% if e.voll %}<span class="methoden-voll">{{ e.voll }}</span>{% endif %}</dt>
  <dd>{{ e.text | markdownify }}{% if e.links.size > 0 %}<div class="methoden-links">{% for l in e.links %}<a href="{{ l.url }}"{% unless l.url contains "beethovens-werkstatt.de" or l.url.first == "/" %} target="_blank" rel="noopener"{% endunless %}>{{ l.label }}</a>{% endfor %}</div>{% endif %}</dd>
{% endfor %}
</dl>
</section>
{% endfor %}
