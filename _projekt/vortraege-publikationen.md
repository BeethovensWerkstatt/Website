---
layout: default
title: Vorträge, Publikationen und Lehre
permalink: /vortraege-publikationen/
parent: Projekt
parent_url: /projekt
---

<style>
.module-page h1 {
  margin-bottom: 1rem;
}

.module-intro {
  margin-bottom: 3rem;
  color: #666;
  font-size: 1.05em;
  line-height: 1.6;
}

.module-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.module-tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background: white;
  border: 1px solid #ddd;
  border-bottom: 2px solid #e8e8e8;
  border-radius: 8px 8px 0 0;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #666;
  text-align: center;
  flex: 1;
  min-width: 0;
}

.module-tab:hover {
  background: #fafafa;
  border-color: #c93b22;
  color: #c93b22;
}

.module-tab.active {
  background: white;
  border: 1px solid #c93b22;
  border-bottom: 3px solid #c93b22;
  color: #c93b22;
  font-weight: 600;
}

.module-content {
  display: none;
  animation: fadeIn 0.3s ease-in;
}

.module-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .module-tabs {
    flex-direction: column;
  }
  
  .module-tab {
    padding: 0.75rem 1rem;
  }
}

/* Filter Toggle Button */
.filter-toggle-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #dee2e6;
}

.vortraege-filter-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.vortraege-filter-toggle-btn:hover {
  background: #e9ecef;
  border-color: #c93b22;
  color: #c93b22;
}

.vortraege-filter-toggle-btn .toggle-icon {
  flex-shrink: 0;
}

.vortraege-filter-toggle-btn .chevron-icon {
  flex-shrink: 0;
  transition: transform 0.3s;
}

.vortraege-filter-toggle-btn.collapsed .chevron-icon {
  transform: rotate(-90deg);
}

/* Vorträge Filter */
.vortraege-filters {
  transition: all 0.3s ease;
  overflow: hidden;
}

.vortraege-filters.collapsed {
  max-height: 0;
  padding: 0 1.5rem;
  margin-bottom: 0;
  opacity: 0;
  border: none;
}

.vortraege-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}

@media (min-width: 1200px) {
  .vortraege-filters {
    grid-template-columns: repeat(4, 1fr);
  }
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group.search-group {
  grid-column: 1 / -1;
}

.search-container {
  position: relative;
  display: flex;
  width: 100%;
}

.search-container input {
  flex: 1;
  padding-right: 2.5rem;
}

.search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s ease, color 0.2s ease;
  z-index: 10;
}

.search-clear:hover {
  color: #c93b22;
}

.search-clear.visible {
  opacity: 1;
}

.filter-group label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.filter-group select,
.filter-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  background: white;
}

.filter-group select:focus,
.filter-group input:focus {
  outline: none;
  border-color: #c93b22;
}

.vortraege-count {
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.95rem;
}

/* Vorträge Liste */
.vortraege-liste {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.vortrag-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid #e8e8e8;
  border-left: 3px solid transparent;
  padding-left: 1rem;
}

.vortrag-item:last-child {
  border-bottom: none;
}

.vortrag-item.hidden {
  display: none;
}

.vortrag-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.vortrag-titel {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  line-height: 1.4;
  flex: 1;
  padding-right: 1rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.titel-text {
  color: #333;
}

.vortrag-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

.vortrag-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  align-items: baseline;
}

.vortrag-autoren {
  font-style: italic;
  color: #333;
  font-weight: 500;
}

.vortrag-event {
  color: #555;
}

.vortrag-event a {
  color: #c93b22;
  text-decoration: none;
  transition: color 0.2s ease;
}

.vortrag-event a:hover {
  color: #9d1d20;
}

.vortrag-ort {
  color: #666;
}

.vortrag-ort.with-event::before {
  content: "· ";
  color: #999;
  margin-right: 0.3rem;
}

.vortrag-datum {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.vortrag-genre {
  display: inline-block;
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
}

/* Zotero Hinweis */
.zotero-hinweis {
  margin: 1rem 0 1.5rem 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.zotero-hinweis a {
  color: #c93b22;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease;
}

.zotero-hinweis a:hover {
  border-bottom-color: #c93b22;
}

@media (max-width: 768px) {
  .vortraege-filters {
    grid-template-columns: 1fr;
  }
}

/* Publikationen Liste */
.publikationen-liste {
  margin-top: 1.5rem;
}

.publikation-item {
  padding: 1rem 0 1.3rem;
  border-bottom: 1px solid #f0f0f0;
}

.publikation-item.hidden {
  display: none;
}

.publikation-item:last-child {
  border-bottom: none;
}

.pub-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.pub-type-badge {
  display: inline-block;
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
}

.pub-titel {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  line-height: 1.4;
  flex: 1;
  padding-right: 1rem;
}

.pub-titel a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px dotted #aaa;
  transition: border-color 0.2s, color 0.2s;
}

.pub-titel a:hover {
  color: #c93b22;
  border-bottom-color: #c93b22;
}

.pub-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

.pub-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 1rem;
  align-items: baseline;
}

.pub-autoren {
  font-style: italic;
  color: #333;
  font-weight: 500;
}

.pub-citation-line {
  display: block;
  color: #555;
  line-height: 1.55;
}

.pub-citation-line em {
  font-style: italic;
}

.pub-doi-line {
  font-size: 0.85rem;
  color: #666;
}

.pub-doi-line a {
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  transition: color 0.2s, border-color 0.2s;
}

.pub-doi-line a:hover {
  color: #c93b22;
  border-bottom-color: #c93b22;
}

@media (min-width: 1200px) {
  #publikationen-filters {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.toggle-slider {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #ddd;
  border-radius: 24px;
  border: 1px solid #ccc;
  transition: background 0.3s, border-color 0.3s;
}

.toggle-switch input:checked + .toggle-slider {
  background: #c93b22;
  border-color: #c93b22;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.toggle-switch input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.pub-website-badge {
  color: #c93b22;
  text-decoration: none;
  font-size: 0.85rem;
  border-bottom: 1px solid #f0c9c2;
  transition: border-color 0.2s, color 0.2s;
}
.pub-website-badge:hover {
  color: #a12e1a;
  border-bottom-color: #c93b22;
}

.publikationen-count {
  margin: 1rem 0 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .publikationen-filters {
    grid-template-columns: 1fr;
  }
}

/* Lehre Liste */
.lehre-liste {
  margin-top: 1.5rem;
}

.lehre-item {
  padding: 1.1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.lehre-item.hidden {
  display: none;
}

.lehre-item:last-child {
  border-bottom: none;
}

.lehre-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.lehre-titel {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  line-height: 1.4;
  flex: 1;
  padding-right: 1rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.lehre-datum {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
}

.lehre-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

.lehre-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  align-items: baseline;
}

.lehre-autoren {
  font-style: italic;
  color: #333;
  font-weight: 500;
}

.lehre-event {
  color: #555;
}

.lehre-event a {
  color: #c93b22;
  text-decoration: none;
  transition: color 0.2s ease;
}

.lehre-event a:hover {
  color: #9d1d20;
}

.lehre-ort {
  color: #666;
}

.lehre-ort.with-event::before {
  content: "· ";
  color: #999;
  margin-right: 0.3rem;
}

.lehre-genre {
  display: inline-block;
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
}

.lehre-count {
  margin: 1rem 0 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .lehre-filters {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="content-wrapper module-page">

<h1>{{ page.title }}</h1>

<div class="module-tabs">
  <div class="module-tab active" onclick="switchToTab('vortraege')">
    Vorträge
  </div>
  <div class="module-tab" onclick="switchToTab('publikationen')">
    Publikationen
  </div>
  <div class="module-tab" onclick="switchToTab('lehre')">
    Lehre
  </div>
</div>

<!-- Vorträge Content -->
<div id="vortraege-content" class="module-content active">
  <div class="zotero-hinweis">
    <strong>Datenquelle:</strong> Die hier aufgelisteten Vorträge werden in unserer <a href="https://www.zotero.org/groups/1157767/beethovens_werkstatt/collections/QUXS9UZ9/collection" target="_blank" rel="noopener noreferrer">öffentlichen Zotero-Collection</a> verwaltet. Dort können Sie die Daten in verschiedenen Formaten (BibTeX, RIS, EndNote, etc.) exportieren und für eigene Zwecke nutzen.
  </div>
  
  <!-- Filter Toggle Button -->
  <div class="filter-toggle-header">
    <button id="vortraege-filter-toggle" class="vortraege-filter-toggle-btn">
      <svg class="toggle-icon" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
      </svg>
      <span>Filter</span>
      <svg class="chevron-icon" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
  
  <!-- Filter Section -->
  <div class="vortraege-filters" id="vortraege-filters">
    <div class="filter-group">
      <label for="filter-jahr">Jahr:</label>
      <select id="filter-jahr" onchange="filterVortraege()">
        <option value="">Alle Jahre</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="filter-genre">Typ:</label>
      <select id="filter-genre" onchange="filterVortraege()">
        <option value="">Alle Typen</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="filter-sprache">Sprache:</label>
      <select id="filter-sprache" onchange="filterVortraege()">
        <option value="">Alle Sprachen</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="filter-person">Person:</label>
      <select id="filter-person" onchange="filterVortraege()">
        <option value="">Alle Personen</option>
      </select>
    </div>
    
    <div class="filter-group search-group">
      <label for="search-vortraege">Suche:</label>
      <div class="search-container">
        <input type="text" id="search-vortraege" placeholder="Titel, Veranstaltung oder Ort durchsuchen..." oninput="filterVortraege()">
        <button type="button" class="search-clear" id="search-clear" title="Suche löschen" onclick="clearSearch()">&times;</button>
      </div>
    </div>
  </div>
  
  <div class="vortraege-count" id="vortraege-count"></div>
  
  <!-- Vorträge Liste -->
  <div class="vortraege-liste">
    {% for vortrag in site.data.vortraege.items %}
      {% assign jahr = vortrag.issued.date-parts[0][0] %}
      {% assign monat = vortrag.issued.date-parts[0][1] | default: 1 %}
      {% assign tag = vortrag.issued.date-parts[0][2] | default: 1 %}
      {% assign sortkey = jahr | times: 10000 | plus: monat | times: 100 | plus: tag %}
      
      {% assign autoren_liste = "" %}
      {% for author in vortrag.author %}
        {% assign autoren_liste = autoren_liste | append: author.family | append: ", " | append: author.given | append: "; " %}
      {% endfor %}
      
      <div class="vortrag-item" 
           data-jahr="{{ jahr }}" 
           data-genre="{{ vortrag.genre | escape }}" 
           data-sprache="{{ vortrag.language | escape }}"
           data-autoren="{{ autoren_liste | downcase | escape }}"
           data-titel="{{ vortrag.title | downcase | escape }}"
           data-event="{{ vortrag.event | downcase | escape }}"
         data-ort="{{ vortrag.place | downcase | escape }}"
           data-sortkey="{{ sortkey }}">
        
        <div class="vortrag-header">
          <h3 class="vortrag-titel">
            <span class="titel-text">{{ vortrag.title }}</span>
            <span class="vortrag-datum">{{ tag }}.{{ monat }}.{{ jahr }}</span>
          </h3>
          {% if vortrag.genre %}
            <span class="vortrag-genre">{{ vortrag.genre }}</span>
          {% endif %}
        </div>
        
        <div class="vortrag-meta">
          <div class="vortrag-meta-row">
            <span class="vortrag-autoren">
              {% for author in vortrag.author %}
                {% if author.given %}{{ author.given }} {{ author.family }}{% else %}{{ author.family }}{% endif %}{% unless forloop.last %}; {% endunless %}
              {% endfor %}
            </span>
          </div>
          
          <div class="vortrag-meta-row">
            {% assign has_event = false %}
            {% if vortrag.event %}
              {% assign has_event = true %}
              <span class="vortrag-event">
                {% if vortrag.URL %}
                  <a href="{{ vortrag.URL }}" target="_blank" rel="noopener noreferrer">{{ vortrag.event }}</a>
                {% else %}
                  {{ vortrag.event }}
                {% endif %}
              </span>
            {% endif %}
            
            {% if vortrag.place %}
              <span class="vortrag-ort{% if has_event %} with-event{% endif %}">{{ vortrag.place }}</span>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<!-- Publikationen Content -->
<div id="publikationen-content" class="module-content">
  <div class="zotero-hinweis">
    <strong>Datenquelle:</strong> Die hier aufgelisteten Publikationen werden in unserer <a href="https://www.zotero.org/groups/1157767/beethovens_werkstatt" target="_blank" rel="noopener noreferrer">öffentlichen Zotero-Collection</a> verwaltet. Dort können Sie die Daten in verschiedenen Formaten (BibTeX, RIS, EndNote, etc.) exportieren und für eigene Zwecke nutzen.
  </div>

  <!-- Filter Toggle Button -->
  <div class="filter-toggle-header">
    <button id="publikationen-filter-toggle" class="vortraege-filter-toggle-btn">
      <svg class="toggle-icon" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
      </svg>
      <span>Filter</span>
      <svg class="chevron-icon" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>

  <!-- Filter Section -->
  <div class="vortraege-filters" id="publikationen-filters">
    <div class="filter-group">
      <label for="pub-filter-jahr">Jahr:</label>
      <select id="pub-filter-jahr" onchange="filterPublikationen()">
        <option value="">Alle Jahre</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="pub-filter-type">Typ:</label>
      <select id="pub-filter-type" onchange="filterPublikationen()">
        <option value="">Alle Typen</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="pub-filter-sprache">Sprache:</label>
      <select id="pub-filter-sprache" onchange="filterPublikationen()">
        <option value="">Alle Sprachen</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="pub-filter-person">Person:</label>
      <select id="pub-filter-person" onchange="filterPublikationen()">
        <option value="">Alle Personen</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Auf dieser Website:</label>
      <label class="toggle-switch" title="Nur Publikationen anzeigen, die auf dieser Website lesbar sind">
        <input type="checkbox" id="pub-website-checkbox" onchange="toggleWebsiteFilter()">
        <span class="toggle-slider"></span>
      </label>
    </div>

    <div class="filter-group search-group">
      <label for="search-publikationen">Suche:</label>
      <div class="search-container">
        <input type="text" id="search-publikationen" placeholder="Titel oder Zeitschrift/Band durchsuchen..." oninput="filterPublikationen()">
        <button type="button" class="search-clear" id="pub-search-clear" title="Suche löschen" onclick="clearPubSearch()">&times;</button>
      </div>
    </div>
  </div>

  <div class="publikationen-count" id="publikationen-count"></div>

  <!-- Publikationen Liste -->
  <div class="publikationen-liste">
    {% if site.data.publikationen.items %}
      {% for pub in site.data.publikationen.items %}
        {% assign pub_jahr = pub.issued.date-parts[0][0] %}

        {% comment %}Type label{% endcomment %}
        {% assign pub_type_label = "" %}
        {% if pub.type == "article-journal" %}{% assign pub_type_label = "Zeitschriftenartikel" %}
        {% elsif pub.type == "chapter" %}{% assign pub_type_label = "Buchbeitrag" %}
        {% elsif pub.type == "book" %}{% assign pub_type_label = "Monografie" %}
        {% elsif pub.type == "paper-conference" %}{% assign pub_type_label = "Konferenzbeitrag" %}
        {% endif %}

        {% comment %}DOI URL normalization{% endcomment %}
        {% assign doi_url = "" %}
        {% if pub.DOI %}
          {% if pub.DOI contains "http" %}{% assign doi_url = pub.DOI %}
          {% elsif pub.DOI contains "DOI: " %}{% assign doi_url = "https://doi.org/" | append: pub.DOI | remove: "DOI: " %}
          {% else %}{% assign doi_url = "https://doi.org/" | append: pub.DOI %}
          {% endif %}
        {% endif %}

        {% comment %}Website URL detection (starts with /){% endcomment %}
        {% assign is_website = false %}
        {% if pub.URL %}{% unless pub.URL contains "http" %}{% assign is_website = true %}{% endunless %}{% endif %}

        {% comment %}Build autoren list for filter (nachname, vorname format; exclude "und weitere"){% endcomment %}
        {% assign pub_autoren_liste = "" %}
        {% for author in pub.author %}
          {% unless author.family == "und weitere" %}
            {% if author.given %}{% assign a_entry = author.family | append: ", " | append: author.given %}{% else %}{% assign a_entry = author.family %}{% endif %}
            {% if pub_autoren_liste != "" %}{% assign pub_autoren_liste = pub_autoren_liste | append: "; " %}{% endif %}
            {% assign pub_autoren_liste = pub_autoren_liste | append: a_entry %}
          {% endunless %}
        {% endfor %}

        <div class="publikation-item"
             data-jahr="{{ pub_jahr }}"
             data-type="{{ pub.type | escape }}"
             data-sprache="{{ pub.language | escape }}"
             data-autoren="{{ pub_autoren_liste | downcase | escape }}"
             data-titel="{{ pub.title | downcase | escape }}"
             data-container="{{ pub["container-title"] | downcase | escape }}"
             data-website="{% if is_website %}true{% else %}false{% endif %}"
             data-doi="{% if doi_url != "" %}true{% else %}false{% endif %}"
             data-sortkey="{{ pub_jahr }}">

          <div class="pub-header">
            <h3 class="pub-titel">{%- if pub.URL and pub.URL contains "http" and doi_url == "" %}<a href="{{ pub.URL }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>{%- elsif is_website %}<a href="{{ pub.URL }}">{{ pub.title }}</a>{%- else %}{{ pub.title }}{%- endif %}</h3>
            {% if pub_type_label != "" %}<span class="pub-type-badge">{{ pub_type_label }}</span>{% endif %}
          </div>

          <div class="pub-meta">
            <div class="pub-meta-row">
              <span class="pub-autoren">
                {% for author in pub.author %}
                  {% if author.family == "und weitere" %}
                    u.a.
                  {% else %}
                    {% unless forloop.first %}, {% endunless %}{% if author.given %}{{ author.given }} {{ author.family }}{% else %}{{ author.family }}{% endif %}
                  {% endif %}
                {% endfor %}
                {% unless pub.author.size > 0 %}{% for ed in pub.editor limit: 3 %}{% unless forloop.first %}, {% endunless %}{% if ed.given %}{{ ed.given }} {{ ed.family }}{% else %}{{ ed.family }}{% endif %}{% endfor %}{% if pub.editor.size > 0 %} (Hg.){% endif %}{% endunless %}
              </span>
            </div>

            <div class="pub-meta-row pub-citation-line">{%- if pub.type == "article-journal" -%}In: {%- if pub["container-title"] %} <em>{{ pub["container-title"] }}</em>{%- elsif pub["collection-title"] %} <em>{{ pub["collection-title"] }}</em>{%- endif %}{%- if pub.volume %}, Jg.&nbsp;{{ pub.volume }}{%- endif %}{%- if pub.issue %}, H.&nbsp;{{ pub.issue }}{%- endif %}{%- if pub.page %}, S.&nbsp;{{ pub.page }}{%- endif %} ({{ pub_jahr }}){%- elsif pub.type == "chapter" -%}In: {%- for ed in pub.editor limit: 3 %}{%- unless forloop.first %}, {%- endunless %}{%- if ed.given %} {{ ed.given }} {{ ed.family }}{%- else %} {{ ed.family }}{%- endif %}{%- endfor %}{%- if pub.editor.size > 3 %} u.a.{%- endif %}{%- if pub.editor.size > 0 %} (Hg.):{%- endif %}{%- if pub["container-title"] %} <em>{{ pub["container-title"] }}</em>{%- elsif pub["collection-title"] %} <em>{{ pub["collection-title"] }}</em>{%- endif %}{%- if pub["publisher-place"] %}. {{ pub["publisher-place"] }}{%- endif %}{%- if pub.page %}, S.&nbsp;{{ pub.page }}{%- endif %} ({{ pub_jahr }}){%- elsif pub.type == "book" -%}{%- if pub["publisher-place"] and pub.publisher %}{{ pub["publisher-place"] }}: {{ pub.publisher }}{%- elsif pub["publisher-place"] %}{{ pub["publisher-place"] }}{%- elsif pub.publisher %}{{ pub.publisher }}{%- endif %} ({{ pub_jahr }}){%- elsif pub.type == "paper-conference" -%}In: {%- if pub["container-title"] %} <em>{{ pub["container-title"] }}</em>{%- elsif pub["event-title"] %} <em>{{ pub["event-title"] }}</em>{%- endif %}{%- if pub["publisher-place"] %}. {{ pub["publisher-place"] }}{%- endif %}{%- if pub.page %}, S.&nbsp;{{ pub.page }}{%- endif %} ({{ pub_jahr }}){%- endif %}</div>

            {% if is_website %}
              <div class="pub-meta-row"><a href="{{ pub.URL }}" class="pub-website-badge">Auf dieser Website lesen &#8599;</a></div>
            {% endif %}
            {% if doi_url != "" %}
              <div class="pub-doi-line">DOI: <a href="{{ doi_url }}" target="_blank" rel="noopener noreferrer">{{ doi_url }}</a></div>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p>Publikationsdaten werden geladen, sobald <code>_data/publikationen.json</code> verfügbar ist.</p>
    {% endif %}
  </div>
</div>

<!-- Lehre Content -->
<div id="lehre-content" class="module-content">
  <div class="zotero-hinweis">
    <strong>Datenquelle:</strong> Die hier aufgelisteten Lehrveranstaltungen werden in unserer <a href="https://www.zotero.org/groups/1157767/beethovens_werkstatt" target="_blank" rel="noopener noreferrer">öffentlichen Zotero-Collection</a> verwaltet. Dort können Sie die Daten in verschiedenen Formaten (BibTeX, RIS, EndNote, etc.) exportieren und für eigene Zwecke nutzen.
  </div>

  <!-- Filter Toggle Button -->
  <div class="filter-toggle-header">
    <button id="lehre-filter-toggle" class="vortraege-filter-toggle-btn">
      <svg class="toggle-icon" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
      </svg>
      <span>Filter</span>
      <svg class="chevron-icon" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>

  <!-- Filter Section -->
  <div class="vortraege-filters" id="lehre-filters">
    <div class="filter-group">
      <label for="lehre-filter-jahr">Jahr:</label>
      <select id="lehre-filter-jahr" onchange="filterLehre()">
        <option value="">Alle Jahre</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="lehre-filter-genre">Typ:</label>
      <select id="lehre-filter-genre" onchange="filterLehre()">
        <option value="">Alle Typen</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="lehre-filter-sprache">Sprache:</label>
      <select id="lehre-filter-sprache" onchange="filterLehre()">
        <option value="">Alle Sprachen</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="lehre-filter-person">Person:</label>
      <select id="lehre-filter-person" onchange="filterLehre()">
        <option value="">Alle Personen</option>
      </select>
    </div>

    <div class="filter-group search-group">
      <label for="search-lehre">Suche:</label>
      <div class="search-container">
        <input type="text" id="search-lehre" placeholder="Titel, Veranstaltung oder Ort durchsuchen..." oninput="filterLehre()">
        <button type="button" class="search-clear" id="lehre-search-clear" title="Suche löschen" onclick="clearLehreSearch()">&times;</button>
      </div>
    </div>
  </div>

  <div class="lehre-count" id="lehre-count"></div>

  <!-- Lehre Liste -->
  <div class="lehre-liste">
    {% for item in site.data.lehre.items %}
      {% comment %}Parse note field for date (single: YYYY-MM-DD or range: YYYY-MM-DD/YYYY-MM-DD){% endcomment %}
      {% assign note_parts = item.note | split: "/" %}
      {% assign note_start = note_parts[0] %}
      {% assign note_start_p = note_start | split: "-" %}
      {% assign note_start_y = note_start_p[0] %}
      {% assign note_start_m = note_start_p[1] %}
      {% assign note_start_d = note_start_p[2] %}
      {% if note_parts.size > 1 %}
        {% assign note_end = note_parts[1] %}
        {% assign note_end_p = note_end | split: "-" %}
        {% assign note_end_y = note_end_p[0] %}
        {% assign note_end_m = note_end_p[1] %}
        {% assign note_end_d = note_end_p[2] %}
      {% else %}
        {% assign note_end_y = note_start_y %}
        {% assign note_end_m = "" %}
        {% assign note_end_d = "" %}
      {% endif %}

      {% comment %}Build authors list for filter{% endcomment %}
      {% assign lehre_autoren_liste = "" %}
      {% for author in item.author %}
        {% if author.given and author.given != "" %}
          {% assign autor_eintrag = author.family | append: ", " | append: author.given %}
        {% else %}
          {% assign autor_eintrag = author.family %}
        {% endif %}
        {% assign lehre_autoren_liste = lehre_autoren_liste | append: autor_eintrag | append: "; " %}
      {% endfor %}

      {% assign has_event_title = false %}
      {% if item.event %}{% assign has_event_title = true %}{% endif %}

      <div class="lehre-item"
           data-startjahr="{{ note_start_y }}"
           data-endjahr="{{ note_end_y }}"
           data-genre="{{ item.genre | escape }}"
           data-sprache="{{ item.language | escape }}"
           data-autoren="{{ lehre_autoren_liste | downcase | escape }}"
           data-titel="{{ item.title | downcase | escape }}"
           data-event="{{ item.event | downcase | escape }}"
           data-ort="{{ item.place | downcase | escape }}"
           data-sortkey="{{ note_start }}">

        <div class="lehre-header">
          <h3 class="lehre-titel">
            <span class="titel-text">{{ item.title }}</span>
            <span class="lehre-datum">
              {% if note_start_d %}{{ note_start_d }}.{{ note_start_m }}.{{ note_start_y }}{% elsif note_start_m %}{{ note_start_m }}/{{ note_start_y }}{% else %}{{ note_start_y }}{% endif %}
              {% if note_parts.size > 1 %} &ndash; {% if note_end_d %}{{ note_end_d }}.{{ note_end_m }}.{{ note_end_y }}{% elsif note_end_m %}{{ note_end_m }}/{{ note_end_y }}{% else %}{{ note_end_y }}{% endif %}{% endif %}
            </span>
          </h3>
          {% if item.genre %}
            <span class="lehre-genre">{{ item.genre }}</span>
          {% endif %}
        </div>

        <div class="lehre-meta">
          <div class="lehre-meta-row">
            <span class="lehre-autoren">
              {% for author in item.author %}
                {% if author.given and author.given != "" %}{{ author.given }} {{ author.family }}{% else %}{{ author.family }}{% endif %}{% unless forloop.last %}; {% endunless %}
              {% endfor %}
            </span>
          </div>

          <div class="lehre-meta-row">
            {% if item.event %}
              <span class="lehre-event">
                {% if item.URL %}
                  <a href="{{ item.URL }}" target="_blank" rel="noopener noreferrer">{{ item.event }}</a>
                {% else %}
                  {{ item.event }}
                {% endif %}
              </span>
            {% endif %}
            {% if item.place %}
              <span class="lehre-ort{% if has_event_title %} with-event{% endif %}">{{ item.place }}</span>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

</div>

<script>
// Gemeinsam genutzte Konstanten
const teamMitglieder = new Set([
  'appel', 'cox', 'greshake', 'herold', 'kepper', 'münzmay', 'rosendahl',
  'sänger', 'seipelt', 'stremel', 'veit', 'voigt',
  'saccomano', 'novara', 'mo', 'pauls', 'obert', 'markert', 'rovelli',
  'hartwig', 'schlicht', 'zhang', 'scheffler'
]);

function capitalizeWords(str) {
  return str.split(' ').map(w =>
    w.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('-')
  ).join(' ');
}

function switchToTab(tabName) {
  // Remove active class from all tabs
  document.querySelectorAll('.module-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all content sections
  document.querySelectorAll('.module-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Add active class to clicked tab
  event.currentTarget.classList.add('active');
  
  // Show corresponding content
  document.getElementById(tabName + '-content').classList.add('active');
  
  // Update URL hash without scrolling
  history.replaceState(null, null, '#' + tabName);
}

// Vorträge Filter Funktionalität
function filterVortraege() {
  const jahrFilter = document.getElementById('filter-jahr').value;
  const genreFilter = document.getElementById('filter-genre').value;
  const spracheFilter = document.getElementById('filter-sprache').value;
  const personFilter = document.getElementById('filter-person').value.toLowerCase();
  const searchTerm = document.getElementById('search-vortraege').value.toLowerCase();
  
  // Clear-Button anzeigen/verstecken
  const clearBtn = document.getElementById('search-clear');
  if (searchTerm) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }
  
  const vortraege = document.querySelectorAll('.vortrag-item');
  let visibleCount = 0;
  
  vortraege.forEach(vortrag => {
    const jahr = vortrag.dataset.jahr;
    const genre = vortrag.dataset.genre;
    const sprache = vortrag.dataset.sprache;
    const autoren = vortrag.dataset.autoren;
    const titel = vortrag.dataset.titel;
    const event = vortrag.dataset.event;
    const ort = vortrag.dataset.ort;
    
    const jahrMatch = !jahrFilter || jahr === jahrFilter;
    const genreMatch = !genreFilter || genre === genreFilter;
    const spracheMatch = !spracheFilter || sprache === spracheFilter;
    const personMatch = !personFilter || autoren.includes(personFilter);
    const searchMatch = !searchTerm || titel.includes(searchTerm) || event.includes(searchTerm) || ort.includes(searchTerm);
    
    if (jahrMatch && genreMatch && spracheMatch && personMatch && searchMatch) {
      vortrag.classList.remove('hidden');
      visibleCount++;
    } else {
      vortrag.classList.add('hidden');
    }
  });
  
  // Update count
  const totalCount = vortraege.length;
  const countEl = document.getElementById('vortraege-count');
  countEl.textContent = `${visibleCount} von ${totalCount} Vorträgen`;
  
  // Update filter options basierend auf sichtbaren Vorträgen
  updateFilterOptions();
}

function clearSearch() {
  document.getElementById('search-vortraege').value = '';
  filterVortraege();
}

function sortVortraege() {
  const container = document.querySelector('.vortraege-liste');
  const vortraege = Array.from(document.querySelectorAll('.vortrag-item'));
  
  // Sort by sortkey (descending - newest first)
  vortraege.sort((a, b) => {
    const keyA = parseInt(a.dataset.sortkey);
    const keyB = parseInt(b.dataset.sortkey);
    return keyB - keyA;
  });
  
  // Re-append in sorted order
  vortraege.forEach(vortrag => container.appendChild(vortrag));
}

function populateFilterOptions() {
  const vortraege = document.querySelectorAll('.vortrag-item');
  const jahre = new Set();
  const genres = new Set();
  const sprachen = new Set();
  const personen = new Set();
  
  vortraege.forEach(vortrag => {
    jahre.add(vortrag.dataset.jahr);
    if (vortrag.dataset.genre) genres.add(vortrag.dataset.genre);
    if (vortrag.dataset.sprache) sprachen.add(vortrag.dataset.sprache);
    
    // Autoren extrahieren (Format: "nachname, vorname; nachname, vorname; ")
    if (vortrag.dataset.autoren) {
      const autorListe = vortrag.dataset.autoren.split('; ');
      autorListe.forEach(autor => {
        if (autor.trim()) {
          // Nachname extrahieren (vor dem Komma)
          const nachname = autor.split(',')[0].trim().toLowerCase();
          // Nur Team-Mitglieder hinzufügen
          if (teamMitglieder.has(nachname)) {
            personen.add(autor.trim());
          }
        }
      });
    }
  });
  
  // Populate Jahr filter (descending)
  const jahrSelect = document.getElementById('filter-jahr');
  jahrSelect.innerHTML = '<option value="">Alle Jahre</option>';
  Array.from(jahre).sort((a, b) => b - a).forEach(jahr => {
    const option = document.createElement('option');
    option.value = jahr;
    option.textContent = jahr;
    jahrSelect.appendChild(option);
  });
  
  // Populate Genre filter (alphabetically)
  const genreSelect = document.getElementById('filter-genre');
  genreSelect.innerHTML = '<option value="">Alle Genres</option>';
  Array.from(genres).sort().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
  
  // Populate Sprache filter (alphabetically)
  const spracheSelect = document.getElementById('filter-sprache');
  spracheSelect.innerHTML = '<option value="">Alle Sprachen</option>';
  Array.from(sprachen).sort().forEach(sprache => {
    const option = document.createElement('option');
    option.value = sprache;
    option.textContent = sprache;
    spracheSelect.appendChild(option);
  });
  
  // Populate Person filter (alphabetically)
  const personSelect = document.getElementById('filter-person');
  personSelect.innerHTML = '<option value="">Alle Personen</option>';
  Array.from(personen).sort().forEach(person => {
    const option = document.createElement('option');
    option.value = person;
    // "nachname, vorname" → "Vorname Nachname" mit Großbuchstaben
    const parts = person.split(', ');
    const vorname = capitalizeWords(parts[1] || '');
    const nachname = capitalizeWords(parts[0] || '');
    option.textContent = `${vorname} ${nachname}`.trim();
    personSelect.appendChild(option);
  });
  
  // Sort vorträge chronologically
  sortVortraege();
  
  // Initial count
  filterVortraege();
}

// Update filter options basierend auf aktuell sichtbaren Vorträgen
function updateFilterOptions() {
  // Aktuelle Auswahl speichern
  const currentJahr = document.getElementById('filter-jahr').value;
  const currentGenre = document.getElementById('filter-genre').value;
  const currentSprache = document.getElementById('filter-sprache').value;
  const currentPerson = document.getElementById('filter-person').value;
  
  // Hilfsfunktion: Sammle Optionen für einen Filter, ignoriere dabei diesen Filter selbst
  function getOptionsForFilter(filterToUpdate) {
    const alleVortraege = document.querySelectorAll('.vortrag-item');
    const jahre = new Set();
    const genres = new Set();
    const sprachen = new Set();
    const personen = new Set();
    
    alleVortraege.forEach(vortrag => {
      // Prüfe ob Vortrag zu den ANDEREN Filtern passt (nicht zum aktuellen Filter!)
      const jahrMatch = filterToUpdate === 'jahr' || !currentJahr || vortrag.dataset.jahr === currentJahr;
      const genreMatch = filterToUpdate === 'genre' || !currentGenre || vortrag.dataset.genre === currentGenre;
      const spracheMatch = filterToUpdate === 'sprache' || !currentSprache || vortrag.dataset.sprache === currentSprache;
      const personMatch = filterToUpdate === 'person' || !currentPerson || vortrag.dataset.autoren.includes(currentPerson);
      
      // Nur wenn alle ANDEREN Filter passen, füge die Option hinzu
      if (jahrMatch && genreMatch && spracheMatch && personMatch) {
        jahre.add(vortrag.dataset.jahr);
        if (vortrag.dataset.genre) genres.add(vortrag.dataset.genre);
        if (vortrag.dataset.sprache) sprachen.add(vortrag.dataset.sprache);
        
        if (vortrag.dataset.autoren) {
          const autorListe = vortrag.dataset.autoren.split('; ');
          autorListe.forEach(autor => {
            if (autor.trim()) {
              const nachname = autor.split(',')[0].trim().toLowerCase();
              if (teamMitglieder.has(nachname)) {
                personen.add(autor.trim());
              }
            }
          });
        }
      }
    });
    
    return { jahre, genres, sprachen, personen };
  }
  
  // Update Jahr filter (basierend auf Genre, Sprache, Person - aber nicht Jahr)
  const jahrOptions = getOptionsForFilter('jahr');
  const jahrSelect = document.getElementById('filter-jahr');
  const jahrWerte = Array.from(jahrOptions.jahre).sort((a, b) => b - a);
  jahrSelect.innerHTML = '<option value="">Alle Jahre</option>';
  jahrWerte.forEach(jahr => {
    const option = document.createElement('option');
    option.value = jahr;
    option.textContent = jahr;
    if (jahr === currentJahr) option.selected = true;
    jahrSelect.appendChild(option);
  });
  
  // Update Genre filter (basierend auf Jahr, Sprache, Person - aber nicht Genre)
  const genreOptions = getOptionsForFilter('genre');
  const genreSelect = document.getElementById('filter-genre');
  const genreWerte = Array.from(genreOptions.genres).sort();
  genreSelect.innerHTML = '<option value="">Alle Typen</option>';
  genreWerte.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    if (genre === currentGenre) option.selected = true;
    genreSelect.appendChild(option);
  });
  
  // Update Sprache filter (basierend auf Jahr, Genre, Person - aber nicht Sprache)
  const spracheOptions = getOptionsForFilter('sprache');
  const spracheSelect = document.getElementById('filter-sprache');
  const spracheWerte = Array.from(spracheOptions.sprachen).sort();
  spracheSelect.innerHTML = '<option value="">Alle Sprachen</option>';
  spracheWerte.forEach(sprache => {
    const option = document.createElement('option');
    option.value = sprache;
    option.textContent = sprache;
    if (sprache === currentSprache) option.selected = true;
    spracheSelect.appendChild(option);
  });
  
  // Update Person filter (basierend auf Jahr, Genre, Sprache - aber nicht Person)
  const personOptions = getOptionsForFilter('person');
  const personSelect = document.getElementById('filter-person');
  const personWerte = Array.from(personOptions.personen).sort();
  personSelect.innerHTML = '<option value="">Alle Personen</option>';
  personWerte.forEach(person => {
    const option = document.createElement('option');
    option.value = person;
    const parts = person.split(', ');
    const vorname = capitalizeWords(parts[1] || '');
    const nachname = capitalizeWords(parts[0] || '');
    option.textContent = `${vorname} ${nachname}`.trim();
    if (person === currentPerson) option.selected = true;
    personSelect.appendChild(option);
  });
}

// Filter Toggle Functionality
let vortraegeFiltersVisible = true;

function toggleVortraegeFilters() {
  const filters = document.getElementById('vortraege-filters');
  const toggleBtn = document.getElementById('vortraege-filter-toggle');
  
  if (filters && toggleBtn) {
    vortraegeFiltersVisible = !vortraegeFiltersVisible;
    filters.classList.toggle('collapsed', !vortraegeFiltersVisible);
    toggleBtn.classList.toggle('collapsed', !vortraegeFiltersVisible);
  }
}

// Publikationen Filter Toggle
let pubFiltersVisible = true;

function togglePublikationenFilters() {
  const filters = document.getElementById('publikationen-filters');
  const toggleBtn = document.getElementById('publikationen-filter-toggle');
  if (filters && toggleBtn) {
    pubFiltersVisible = !pubFiltersVisible;
    filters.classList.toggle('collapsed', !pubFiltersVisible);
    toggleBtn.classList.toggle('collapsed', !pubFiltersVisible);
  }
}

// Handle page load with hash
// Publikationen Filter Funktionalität
let pubWebsiteFilterActive = false;

function toggleWebsiteFilter() {
  const cb = document.getElementById('pub-website-checkbox');
  pubWebsiteFilterActive = cb ? cb.checked : false;
  filterPublikationen();
}

function filterPublikationen() {
  const jahrFilter = document.getElementById('pub-filter-jahr').value;
  const typeFilter = document.getElementById('pub-filter-type').value;
  const spracheFilter = document.getElementById('pub-filter-sprache').value;
  const personFilter = document.getElementById('pub-filter-person').value.toLowerCase();
  const searchTerm = document.getElementById('search-publikationen').value.toLowerCase();

  const clearBtn = document.getElementById('pub-search-clear');
  if (clearBtn) clearBtn.classList.toggle('visible', !!searchTerm);

  const items = document.querySelectorAll('.publikation-item');
  let visibleCount = 0;

  items.forEach(item => {
    const jahrMatch = !jahrFilter || item.dataset.jahr === jahrFilter;
    const typeMatch = !typeFilter || item.dataset.type === typeFilter;
    const spracheMatch = !spracheFilter || item.dataset.sprache === spracheFilter;
    const personMatch = !personFilter || (item.dataset.autoren || '').includes(personFilter);
    const zugangMatch = !pubWebsiteFilterActive || item.dataset.website === 'true';
    const searchMatch = !searchTerm ||
      (item.dataset.titel || '').includes(searchTerm) ||
      (item.dataset.container || '').includes(searchTerm);

    const visible = jahrMatch && typeMatch && spracheMatch && personMatch && zugangMatch && searchMatch;
    item.classList.toggle('hidden', !visible);
    if (visible) visibleCount++;
  });

  const countEl = document.getElementById('publikationen-count');
  if (countEl) countEl.textContent = `${visibleCount} von ${items.length} Publikationen`;

  updatePubFilterOptions();
}

function clearPubSearch() {
  document.getElementById('search-publikationen').value = '';
  filterPublikationen();
}

function sortPublikationen() {
  const container = document.querySelector('.publikationen-liste');
  if (!container) return;
  const items = Array.from(container.querySelectorAll('.publikation-item'));
  items.sort((a, b) => parseInt(b.dataset.sortkey) - parseInt(a.dataset.sortkey));
  items.forEach(item => container.appendChild(item));
}

function populatePubFilterOptions() {
  const items = Array.from(document.querySelectorAll('.publikation-item'));

  const typeLabels = {
    'article': 'Artikel',
    'article-journal': 'Zeitschriftenartikel',
    'book': 'Monografie',
    'chapter': 'Buchbeitrag',
    'paper-conference': 'Konferenzbeitrag'
  };

  const jahre = [...new Set(items.map(i => i.dataset.jahr).filter(Boolean))].sort().reverse();
  const typeKeys = [...new Set(items.map(i => i.dataset.type).filter(Boolean))].sort();
  const sprachen = [...new Set(items.map(i => i.dataset.sprache).filter(Boolean))].sort();

  const personenSet = new Set();
  items.forEach(item => {
    (item.dataset.autoren || '').split(';').forEach(a => {
      const entry = a.trim();
      if (!entry) return;
      const nachname = entry.split(',')[0].trim().toLowerCase();
      if (teamMitglieder.has(nachname)) personenSet.add(entry);
    });
  });
  const personen = [...personenSet].sort();

  function fillSelect(id, options, labelFn) {
    const sel = document.getElementById(id);
    if (!sel) return;
    const first = sel.options[0];
    sel.innerHTML = '';
    sel.appendChild(first);
    options.forEach(val => {
      const opt = document.createElement('option');
      opt.value = String(val);
      opt.textContent = labelFn ? labelFn(String(val)) : String(val);
      sel.appendChild(opt);
    });
  }

  fillSelect('pub-filter-jahr', jahre);
  fillSelect('pub-filter-type', typeKeys, k => typeLabels[k] || k);
  fillSelect('pub-filter-sprache', sprachen);
  fillSelect('pub-filter-person', personen, val => {
    const parts = val.split(', ');
    return `${capitalizeWords(parts[1] || '')} ${capitalizeWords(parts[0] || '')}`.trim();
  });
}

function updatePubFilterOptions() {
  // No-op for now; can be expanded to hide irrelevant filter options
}

// Lehre Filter Funktionalität
let lehreFiltersVisible = true;

function toggleLehreFilters() {
  const filters = document.getElementById('lehre-filters');
  const toggleBtn = document.getElementById('lehre-filter-toggle');
  if (filters && toggleBtn) {
    lehreFiltersVisible = !lehreFiltersVisible;
    filters.classList.toggle('collapsed', !lehreFiltersVisible);
    toggleBtn.classList.toggle('collapsed', !lehreFiltersVisible);
  }
}

function filterLehre() {
  const jahrFilter = parseInt(document.getElementById('lehre-filter-jahr').value) || 0;
  const genreFilter = document.getElementById('lehre-filter-genre').value;
  const spracheFilter = document.getElementById('lehre-filter-sprache').value;
  const personFilter = document.getElementById('lehre-filter-person').value.toLowerCase();
  const searchTerm = document.getElementById('search-lehre').value.toLowerCase();

  const clearBtn = document.getElementById('lehre-search-clear');
  if (clearBtn) clearBtn.classList.toggle('visible', !!searchTerm);

  const items = document.querySelectorAll('.lehre-item');
  let visibleCount = 0;

  items.forEach(item => {
    const startJahr = parseInt(item.dataset.startjahr) || 0;
    const endJahr = parseInt(item.dataset.endjahr) || startJahr;
    const jahrMatch = !jahrFilter || (jahrFilter >= startJahr && jahrFilter <= endJahr);
    const genreMatch = !genreFilter || item.dataset.genre === genreFilter;
    // Multi-language: split by ', ' and check inclusion
    const sprachen = (item.dataset.sprache || '').split(',').map(s => s.trim());
    const spracheMatch = !spracheFilter || sprachen.includes(spracheFilter);
    const personMatch = !personFilter || (item.dataset.autoren || '').includes(personFilter);
    const searchMatch = !searchTerm ||
      (item.dataset.titel || '').includes(searchTerm) ||
      (item.dataset.event || '').includes(searchTerm) ||
      (item.dataset.ort || '').includes(searchTerm);

    const visible = jahrMatch && genreMatch && spracheMatch && personMatch && searchMatch;
    item.classList.toggle('hidden', !visible);
    if (visible) visibleCount++;
  });

  const countEl = document.getElementById('lehre-count');
  if (countEl) countEl.textContent = `${visibleCount} von ${items.length} Lehrveranstaltungen`;
}

function clearLehreSearch() {
  document.getElementById('search-lehre').value = '';
  filterLehre();
}

function sortLehre() {
  const container = document.querySelector('.lehre-liste');
  if (!container) return;
  const items = Array.from(container.querySelectorAll('.lehre-item'));
  // ISO date strings sort lexicographically — descending = newest first
  items.sort((a, b) => (b.dataset.sortkey || '').localeCompare(a.dataset.sortkey || ''));
  items.forEach(item => container.appendChild(item));
}

function populateLehreFilterOptions() {
  const items = Array.from(document.querySelectorAll('.lehre-item'));

  const jahreSet = new Set();
  items.forEach(item => {
    const start = parseInt(item.dataset.startjahr) || 0;
    const end = parseInt(item.dataset.endjahr) || start;
    for (let y = start; y <= end; y++) { if (y) jahreSet.add(y); }
  });
  const jahre = [...jahreSet].sort().reverse();

  const genres = [...new Set(items.map(i => i.dataset.genre).filter(Boolean))].sort();

  // Split multi-language values
  const sprachenSet = new Set();
  items.forEach(item => {
    (item.dataset.sprache || '').split(',').forEach(s => { if (s.trim()) sprachenSet.add(s.trim()); });
  });
  const sprachen = [...sprachenSet].sort();

  // Persons: only team members, display as "Vorname Nachname"
  const personenSet = new Set();
  items.forEach(item => {
    (item.dataset.autoren || '').split(';').forEach(a => {
      const entry = a.trim();
      if (!entry) return;
      const nachname = entry.split(',')[0].trim().toLowerCase();
      if (teamMitglieder.has(nachname)) personenSet.add(entry);
    });
  });
  const personen = [...personenSet].sort();

  function fillSelect(id, options) {
    const sel = document.getElementById(id);
    if (!sel) return;
    const first = sel.options[0];
    sel.innerHTML = '';
    sel.appendChild(first);
    options.forEach(val => {
      const opt = document.createElement('option');
      opt.value = String(val);
      // For person options: "nachname, vorname" → "Vorname Nachname"
      if (id === 'lehre-filter-person') {
        const parts = String(val).split(', ');
        const vorname = capitalizeWords(parts[1] || '');
        const nachname = capitalizeWords(parts[0] || '');
        opt.textContent = `${vorname} ${nachname}`.trim();
      } else {
        opt.textContent = String(val);
      }
      sel.appendChild(opt);
    });
  }

  fillSelect('lehre-filter-jahr', jahre);
  fillSelect('lehre-filter-genre', genres);
  fillSelect('lehre-filter-sprache', sprachen);
  fillSelect('lehre-filter-person', personen);
}

window.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1);
  if (hash && ['vortraege', 'publikationen', 'lehre'].includes(hash)) {
    const tabs = document.querySelectorAll('.module-tab');
    const tabIndex = ['vortraege', 'publikationen', 'lehre'].indexOf(hash);
    if (tabs[tabIndex]) {
      tabs[tabIndex].click();
    }
  }

  // Populate filter dropdowns and sort — Vorträge
  if (document.getElementById('filter-jahr')) {
    populateFilterOptions();
  }

  // Populate filter dropdowns and sort — Publikationen
  if (document.getElementById('pub-filter-jahr')) {
    sortPublikationen();
    populatePubFilterOptions();
    filterPublikationen();
  }

  // Setup filter toggle button — Vorträge
  const toggleBtn = document.getElementById('vortraege-filter-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleVortraegeFilters);
  }

  // Setup filter toggle button — Publikationen
  const pubToggleBtn = document.getElementById('publikationen-filter-toggle');
  if (pubToggleBtn) {
    pubToggleBtn.addEventListener('click', togglePublikationenFilters);
  }

  // Populate filter dropdowns and sort — Lehre
  if (document.getElementById('lehre-filter-jahr')) {
    sortLehre();
    populateLehreFilterOptions();
    filterLehre();
  }

  // Setup filter toggle button — Lehre
  const lehreToggleBtn = document.getElementById('lehre-filter-toggle');
  if (lehreToggleBtn) {
    lehreToggleBtn.addEventListener('click', toggleLehreFilters);
  }
});
</script>
