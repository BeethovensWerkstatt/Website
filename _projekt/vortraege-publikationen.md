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

/* Vorträge Filter */
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
  gap: 1.5rem;
}

.vortrag-item {
  padding: 1.25rem;
  background: white;
  border: 1px solid #e8e8e8;
  border-left: 4px solid #c93b22;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.vortrag-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left-color: #9d1d20;
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
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted #666;
  transition: all 0.2s ease;
}

.vortrag-event a:hover {
  color: #c93b22;
  border-bottom-color: #c93b22;
}

.vortrag-ort {
  color: #666;
}

.vortrag-datum {
  color: #888;
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
  
  <!-- Filter Section -->
  <div class="vortraege-filters">
    <div class="filter-group">
      <label for="filter-jahr">Jahr:</label>
      <select id="filter-jahr" onchange="filterVortraege()">
        <option value="">Alle Jahre</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="filter-genre">Genre:</label>
      <select id="filter-genre" onchange="filterVortraege()">
        <option value="">Alle Genres</option>
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
    {% for vortrag in site.data.vortraege.vortraege.items %}
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
           data-ort="{{ vortrag.event-place | downcase | escape }}"
           data-sortkey="{{ sortkey }}">
        
        <div class="vortrag-header">
          <h3 class="vortrag-titel">{{ vortrag.title }}</h3>
          {% if vortrag.genre %}
            <span class="vortrag-genre">{{ vortrag.genre }}</span>
          {% endif %}
        </div>
        
        <div class="vortrag-meta">
          <div class="vortrag-meta-row">
            <span class="vortrag-autoren">
              {% for author in vortrag.author %}
                {{ author.family }}, {{ author.given }}{% unless forloop.last %}; {% endunless %}
              {% endfor %}
            </span>
            
            {% if vortrag.event %}
              <span class="vortrag-event">
                {% if vortrag.URL %}
                  <a href="{{ vortrag.URL }}" target="_blank" rel="noopener noreferrer">{{ vortrag.event }}</a>
                {% else %}
                  {{ vortrag.event }}
                {% endif %}
              </span>
            {% endif %}
          </div>
          
          <div class="vortrag-meta-row">
            {% if vortrag.event-place %}
              <span class="vortrag-ort">{{ vortrag.event-place }}</span>
            {% endif %}
            
            <span class="vortrag-datum">{{ tag }}.{{ monat }}.{{ jahr }}</span>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<!-- Publikationen Content -->
<div id="publikationen-content" class="module-content">
  <p>Hier entsteht die Übersicht über Publikationen und Forschungsbeiträge des Projekts.</p>
</div>

<!-- Lehre Content -->
<div id="lehre-content" class="module-content">
  <p>Hier entsteht die Übersicht über Lehrveranstaltungen und -aktivitäten des Projekts.</p>
</div>

</div>

<script>
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
  if (visibleCount === totalCount) {
    countEl.textContent = `${totalCount} Vorträge`;
  } else {
    countEl.textContent = `${visibleCount} von ${totalCount} Vorträgen`;
  }
  
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
  
  // Team-Mitglieder (aktuelle und ehemalige) - Nachnamen in Kleinbuchstaben für Matching
  const teamMitglieder = new Set([
    'appel', 'cox', 'greshake', 'herold', 'kepper', 'münzmay', 'rosendahl', 
    'sänger', 'seipelt', 'stremel', 'veit', 'voigt',
    // Ehemalige
    'saccomano', 'novara', 'mo', 'pauls', 'obert', 'markert', 'rovelli', 
    'hartwig', 'schlicht', 'zhang', 'scheffler'
  ]);
  
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
  
  // Hilfsfunktion: Ersten Buchstaben jedes Wortes großschreiben (auch bei Bindestrichen)
  function capitalizeWords(str) {
    return str.split(' ').map(word => 
      word.split('-').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join('-')
    ).join(' ');
  }
  
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
    option.textContent = capitalizeWords(sprache);
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
  
  // Team-Mitglieder (aktuelle und ehemalige)
  const teamMitglieder = new Set([
    'appel', 'cox', 'greshake', 'herold', 'kepper', 'münzmay', 'rosendahl', 
    'sänger', 'seipelt', 'stremel', 'veit', 'voigt',
    'saccomano', 'novara', 'mo', 'pauls', 'obert', 'markert', 'rovelli', 
    'hartwig', 'schlicht', 'zhang', 'scheffler'
  ]);
  
  function capitalizeWords(str) {
    return str.split(' ').map(word => 
      word.split('-').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join('-')
    ).join(' ');
  }
  
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
  genreSelect.innerHTML = '<option value="">Alle Genres</option>';
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
    option.textContent = capitalizeWords(sprache);
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

// Handle page load with hash
window.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1);
  if (hash && ['vortraege', 'publikationen', 'lehre'].includes(hash)) {
    const tabs = document.querySelectorAll('.module-tab');
    const tabIndex = ['vortraege', 'publikationen', 'lehre'].indexOf(hash);
    if (tabs[tabIndex]) {
      tabs[tabIndex].click();
    }
  }
  
  // Populate filter dropdowns and sort
  if (document.getElementById('filter-jahr')) {
    populateFilterOptions();
  }
});
</script>
