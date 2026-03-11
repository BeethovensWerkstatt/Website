---
layout: default
title: Glossar
permalink: /glossar/
---

# {{ page.title }}

Die hier vorgestellten philologischen Begriffe geben den aktuellen Stand der projektspezifischen Terminologie von Beethovens Werkstatt wieder. 

<!-- Filter Toggle Button -->
<div class="filter-toggle-header">
  <button id="glossary-filter-toggle" class="glossary-filter-toggle-btn">
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
<div class="glossary-filters" id="glossary-filters">
  <div class="filter-group">
    <label for="module-filter">Modul:</label>
    <select id="module-filter">
      <option value="all">Alle Module</option>
      <option value="Modul 1">Modul 1</option>
      <option value="Modul 2">Modul 2</option>
      <option value="Modul 3">Modul 3</option>
      <option value="Modul 4">Modul 4</option>
      <option value="Modul 5">Modul 5</option>
    </select>
  </div>
  
  <div class="filter-group">
    <label for="letter-filter">Anfangsbuchstabe:</label>
    <select id="letter-filter">
      <option value="all">Alle</option>
      <!-- Wird dynamisch befüllt -->
    </select>
  </div>
  
  <div class="filter-group">
    <label for="glossary-search">Textsuche:</label>
    <div class="search-container">
      <input type="text" id="glossary-search" class="search-input" placeholder="Begriff suchen...">
      <button class="search-clear" id="clear-search" title="Suche löschen">&times;</button>
    </div>
  </div>
</div>

<!-- Filter Results Counter -->
<div class="glossary-count">
  <span class="term-count-number">0</span> von <span class="total-count-number">0</span> <span class="term-count-text">Begriffen</span>
</div>

{% comment %}
Manuelle Sortierung für deutsche Umlaute:
Ersetzt Ä->AE, Ö->OE, Ü->UE, ß->SS für korrekte alphabetische Reihenfolge
NEUE LOGIK: Sammle nur die neueste Version jedes Artikels
{% endcomment %}

{% comment %}Schritt 1: Finde die neueste Version jedes Artikels{% endcomment %}
{% assign latest_articles = "" | split: "," %}
{% assign processed_titles = "" | split: "," %}

{% for term in site.glossary %}
  {% if term.title and term.version %}
    {% unless processed_titles contains term.title %}
      {% comment %}Neuer Artikel - finde die neueste Version{% endcomment %}
      {% assign latest_term = term %}
      {% assign latest_version = term.version %}
      
      {% for other_term in site.glossary %}
        {% if other_term.title == term.title and other_term.version > latest_version %}
          {% assign latest_term = other_term %}
          {% assign latest_version = other_term.version %}
        {% endif %}
      {% endfor %}
      
      {% assign latest_articles = latest_articles | push: latest_term %}
      {% assign processed_titles = processed_titles | push: term.title %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% comment %}Schritt 2: Sortiere die neuesten Artikel alphabetisch{% endcomment %}
{% assign sorted_terms = "" | split: "," %}
{% assign term_data = "" | split: "," %}
{% for term in latest_articles %}
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
  {% assign sorted_terms = sorted_terms | push: latest_articles[index] %}
{% endfor %}

<div class="glossary-list">
{% for term in sorted_terms %}
  {% comment %}Extrahiere Artikel-Slug aus URL (z.B. /glossar/aehnlichkeit/1.0.1/ -> aehnlichkeit){% endcomment %}
  {% assign url_parts = term.url | split: "/" %}
  {% assign article_slug = "" %}
  {% for part in url_parts %}
    {% if part != "" and part != "glossar" and part != term.version %}
      {% assign article_slug = part %}
      {% break %}
    {% endif %}
  {% endfor %}
  
  {% comment %}Bestimme Anfangsbuchstabe für Filter{% endcomment %}
  {% assign first_char = term.title | slice: 0 | upcase %}
  {% if first_char == "Ä" %}{% assign first_char = "A" %}{% endif %}
  {% if first_char == "Ö" %}{% assign first_char = "O" %}{% endif %}
  {% if first_char == "Ü" %}{% assign first_char = "U" %}{% endif %}
  
  <div class="glossary-item" data-modules="{% for category in term.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}" data-letter="{{ first_char }}">
    <div class="glossary-item-header">
      {% comment %}Link zur Weiterleitungsseite ohne Versionsnummer{% endcomment %}
      <h3><a href="/glossar/{{ article_slug }}/">{{ term.title }}</a></h3>
      {% if term.categories and term.categories.size > 0 %}
        <div class="module-tags">
          {% for category in term.categories %}
            <span class="category-tag">{{ category }}</span>{% unless forloop.last %}, {% endunless %}
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
/* Filter Toggle Header */
.filter-toggle-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #dee2e6;
}

.glossary-filter-toggle-btn {
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

.glossary-filter-toggle-btn:hover {
  background: #e9ecef;
  border-color: #c93b22;
  color: #c93b22;
}

.glossary-filter-toggle-btn .toggle-icon {
  flex-shrink: 0;
}

.glossary-filter-toggle-btn .chevron-icon {
  flex-shrink: 0;
  transition: transform 0.3s;
}

.glossary-filter-toggle-btn.collapsed .chevron-icon {
  transform: rotate(-90deg);
}

/* Glossary Filters */
.glossary-filters {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;
  overflow: hidden;
}

.glossary-filters.collapsed {
  max-height: 0;
  padding: 0 1.5rem;
  margin-bottom: 0;
  opacity: 0;
  border: none;
}

@media (max-width: 768px) {
  .glossary-filters {
    grid-template-columns: 1fr;
  }
}

.glossary-count {
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.875rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

.glossary-list {
  margin-top: 2rem;
}

.glossary-item {
  padding: 1.5rem 0 1rem 0;
  border-bottom: 1px solid #e8e8e8;
  border-left: 3px solid transparent;
  padding-left: 1rem;
}

.glossary-item:last-child {
  border-bottom: none;
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
  font-size: 1.1rem;
  font-weight: 600;
}

.glossary-item h3 a:hover {
  text-decoration: underline;
  color: #a12e1a;
}

/* Hidden items */
.glossary-item.hidden {
  display: none;
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
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.6rem;
  margin: 0.1rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
}
</style>

<script>
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a glossary page
  const glossaryFilters = document.getElementById('glossary-filters');
  
  if (glossaryFilters) {
    const toggleBtn = document.getElementById('glossary-filter-toggle');
    const moduleFilter = document.getElementById('module-filter');
    const letterFilter = document.getElementById('letter-filter');
    const searchInput = document.getElementById('glossary-search');
    const searchClear = document.getElementById('clear-search');
    const glossaryItems = document.querySelectorAll('.glossary-item');
    const termCounter = document.querySelector('.term-count-number');
    const totalCounter = document.querySelector('.total-count-number');
    const termTextElement = document.querySelector('.term-count-text');
    
    let currentModule = 'all';
    let currentLetter = 'all';
    let currentSearch = '';
    let filtersVisible = true;
    
    // Toggle filter visibility
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        filtersVisible = !filtersVisible;
        glossaryFilters.classList.toggle('collapsed', !filtersVisible);
        toggleBtn.classList.toggle('collapsed', !filtersVisible);
      });
    }
    
    // Collect available letters from glossary items
    const availableLetters = new Set();
    glossaryItems.forEach(item => {
      const letter = item.dataset.letter;
      if (letter) {
        availableLetters.add(letter);
      }
    });
    
    // Populate letter dropdown with only available letters
    if (letterFilter) {
      const sortedLetters = Array.from(availableLetters).sort();
      sortedLetters.forEach(letter => {
        const option = document.createElement('option');
        option.value = letter;
        option.textContent = letter;
        letterFilter.appendChild(option);
      });
    }
    
    // Set total count
    if (totalCounter) {
      totalCounter.textContent = glossaryItems.length;
    }
    
    // Apply filters
    function applyFilters() {
      let visibleCount = 0;
      
      glossaryItems.forEach(item => {
        const itemModules = item.dataset.modules || '';
        const itemLetter = item.dataset.letter;
        const itemText = item.textContent.toLowerCase();
        
        // Module matching: check if selected module is in the comma-separated list
        let moduleMatch = currentModule === 'all';
        if (!moduleMatch && itemModules) {
          const modulesList = itemModules.split(',').map(m => m.trim());
          moduleMatch = modulesList.includes(currentModule);
        }
        
        const letterMatch = currentLetter === 'all' || itemLetter === currentLetter;
        const searchMatch = !currentSearch || itemText.includes(currentSearch);
        
        const shouldShow = moduleMatch && letterMatch && searchMatch;
        
        item.classList.toggle('hidden', !shouldShow);
        if (shouldShow) visibleCount++;
      });
      
      // Update counter
      if (termCounter) {
        termCounter.textContent = visibleCount;
      }
      if (termTextElement) {
        termTextElement.textContent = visibleCount === 1 ? 'Begriff' : 'Begriffen';
      }
    }
    
    // Module filter change
    if (moduleFilter) {
      moduleFilter.addEventListener('change', function() {
        currentModule = this.value;
        applyFilters();
      });
    }
    
    // Letter filter change
    if (letterFilter) {
      letterFilter.addEventListener('change', function() {
        currentLetter = this.value;
        applyFilters();
      });
    }
    
    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase().trim();
        if (searchClear) {
          searchClear.classList.toggle('visible', currentSearch.length > 0);
        }
        applyFilters();
      });
    }
    
    // Clear search
    if (searchClear) {
      searchClear.addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
        this.classList.remove('visible');
        applyFilters();
      });
    }
    
    // Initial filter application
    applyFilters();
  }
});
</script>
