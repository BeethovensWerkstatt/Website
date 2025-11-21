---
layout: default
title: Glossar
permalink: /glossar/
---

# {{ page.title }}

Die hier vorgestellten philologischen Begriffe geben den aktuellen Stand der projektspezifischen Terminologie von Beethovens Werkstatt wieder. Die Begriffe sollen für weitere Forschung nutzbar gemacht und zur Diskussion gestellt werden. Oftmals konnte auf bereits vorhandenes philologisches Vokabular zurückgegriffen werden, wobei die Definitionen gegebenenfalls erweitert und modifiziert werden mussten. Mitunter ergab sich die Notwendigkeit, neue Begriffe einzuführen, um Sachverhalte klar benennen zu können.

<div class="glossary-notice">
<strong>Hinweis:</strong> Im Zuge des ständigen Erkenntnisgewinns können sich einzelne Definitionen verändern und neue hinzutreten.
</div>

<!-- Filter Section -->
<div class="glossary-filter-section">
  <div class="filter-label">Filter nach Modulen:</div>
  <div class="filter-controls">
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">Alle Module</button>
      <button class="filter-btn" data-filter="Modul 1">Modul 1</button>
      <button class="filter-btn" data-filter="Modul 2">Modul 2</button>
      <button class="filter-btn" data-filter="Modul 3">Modul 3</button>
      <button class="filter-btn" data-filter="Modul 4">Modul 4</button>
      <button class="filter-btn" data-filter="Modul 5">Modul 5</button>
    </div>
    <div class="term-count">
      <span class="term-count-number">0</span> <span class="term-count-text">Begriffe</span>
    </div>
  </div>
  
  <!-- Search Field -->
  <div class="search-controls">
    <div class="search-label">Textsuche:</div>
    <input type="text" id="glossary-search" class="search-input" placeholder="Begriff suchen...">
    <button class="clear-search" id="clear-search" title="Suche löschen">&times;</button>
  </div>
</div>

{% comment %}
Manuelle Sortierung für deutsche Umlaute:
Ersetzt Ä->AE, Ö->OE, Ü->UE, ß->SS für korrekte alphabetische Reihenfolge
{% endcomment %}
{% assign unsorted_terms = site.glossary %}
{% assign sorted_terms = "" | split: "," %}

{% comment %}Erstelle sortierbare Titel und sammle Terme{% endcomment %}
{% assign term_data = "" | split: "," %}
{% for term in unsorted_terms %}
  {% assign sort_title = term.title | downcase | replace: "ä", "ae" | replace: "ö", "oe" | replace: "ü", "ue" | replace: "ß", "ss" %}
  {% assign term_entry = sort_title | append: "|||" | append: forloop.index0 %}
  {% assign term_data = term_data | push: term_entry %}
{% endfor %}

{% comment %}Sortiere nach dem bearbeiteten Titel{% endcomment %}
{% assign sorted_data = term_data | sort %}

{% comment %}Baue die sortierte Term-Liste auf{% endcomment %}
{% for entry in sorted_data %}
  {% assign parts = entry | split: "|||" %}
  {% assign index = parts[1] | plus: 0 %}
  {% assign sorted_terms = sorted_terms | push: unsorted_terms[index] %}
{% endfor %}

<div class="glossary-list">
{% for term in sorted_terms %}
  <div class="glossary-item" data-modules="{% for category in term.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}">
    <div class="glossary-item-header">
      <h3><a href="{{ term.url | relative_url }}">{{ term.title }}</a></h3>
      {% if term.categories and term.categories.size > 0 %}
        <div class="module-tags">
          {% for category in term.categories %}
            {% assign module_url = category | downcase | replace: ' ', '-' %}
            <a href="/{{ module_url }}/" class="category-tag-link">
              <span class="category-tag">{{ category }}</span>
            </a>{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </div>
      {% endif %}
    </div>
    {% if term.short_definition %}
      <p class="short-definition">{{ term.short_definition }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>

<style>
.glossary-notice {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 1rem;
  margin: 1.5rem 0 2rem 0;
  font-size: 0.95em;
  color: #495057;
}

.glossary-notice strong {
  color: #c93b22;
}

.glossary-list {
  margin-top: 2rem;
}

.glossary-item {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-left: 3px solid #c93b22;
  background-color: #f9f9f9;
}

.glossary-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.glossary-item h3 {
  margin: 0;
  flex: 1;
  padding-right: 1rem;
}

.module-tags {
  flex-shrink: 0;
}

.glossary-item h3 a {
  color: #c93b22;
  text-decoration: none;
}

.glossary-item h3 a:hover {
  text-decoration: underline;
  color: #a12e1a;
}

.short-definition {
  color: #666;
  margin: 0;
  font-style: italic;
}

.category-label {
  font-weight: bold;
  color: #c93b22;
  margin-right: 0.5rem;
}

.category-tag {
  display: inline-block;
  background-color: #c93b22;
  color: white;
  padding: 0.2rem 0.5rem;
  margin: 0.1rem;
  border-radius: 3px;
  font-size: 0.8rem;
}

.category-tag-link {
  text-decoration: none;
}

.category-tag-link:hover .category-tag {
  background-color: #a12e1a;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(201, 59, 34, 0.3);
}

.category-tag:hover {
  background-color: #a12e1a;
}
</style>


