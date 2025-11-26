---
layout: default
title: Glossar
permalink: /glossar/
---

# {{ page.title }}

Die hier vorgestellten philologischen Begriffe geben den aktuellen Stand der projektspezifischen Terminologie von Beethovens Werkstatt wieder. Die Begriffe sollen für weitere Forschung nutzbar gemacht und zur Diskussion gestellt werden. Oftmals konnte auf bereits vorhandenes philologisches Vokabular zurückgegriffen werden, wobei die Definitionen gegebenenfalls erweitert und modifiziert werden mussten. Mitunter ergab sich die Notwendigkeit, neue Begriffe einzuführen, um Sachverhalte klar benennen zu können.

<div class="notice">
<strong>Hinweis:</strong> Im Zuge des ständigen Erkenntnisgewinns können sich einzelne Definitionen verändern und neue hinzutreten.
</div>

<!-- Filter Section -->
<div class="filter-section">
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
  </div>
  
  <!-- Alphabetical Jump Navigation -->
  <div class="secondary-navigation">
    <div class="secondary-label">Anfangsbuchstabe:</div>
    <div class="secondary-buttons">
      <button class="secondary-btn active" data-letter="all">Alle</button>
      <button class="secondary-btn" data-letter="A">A</button>
      <button class="secondary-btn" data-letter="B">B</button>
      <button class="secondary-btn" data-letter="C">C</button>
      <button class="secondary-btn" data-letter="D">D</button>
      <button class="secondary-btn" data-letter="E">E</button>
      <button class="secondary-btn" data-letter="F">F</button>
      <button class="secondary-btn" data-letter="G">G</button>
      <button class="secondary-btn" data-letter="H">H</button>
      <button class="secondary-btn" data-letter="I">I</button>
      <button class="secondary-btn" data-letter="J">J</button>
      <button class="secondary-btn" data-letter="K">K</button>
      <button class="secondary-btn" data-letter="L">L</button>
      <button class="secondary-btn" data-letter="M">M</button>
      <button class="secondary-btn" data-letter="N">N</button>
      <button class="secondary-btn" data-letter="O">O</button>
      <button class="secondary-btn" data-letter="P">P</button>
      <button class="secondary-btn" data-letter="Q">Q</button>
      <button class="secondary-btn" data-letter="R">R</button>
      <button class="secondary-btn" data-letter="S">S</button>
      <button class="secondary-btn" data-letter="T">T</button>
      <button class="secondary-btn" data-letter="U">U</button>
      <button class="secondary-btn" data-letter="V">V</button>
      <button class="secondary-btn" data-letter="W">W</button>
      <button class="secondary-btn" data-letter="X">X</button>
      <button class="secondary-btn" data-letter="Y">Y</button>
      <button class="secondary-btn" data-letter="Z">Z</button>
    </div>
  </div>
  
  <!-- Search Field -->
  <div class="search-controls">
    <div class="search-label">Textsuche:</div>
    <div class="search-container">
      <input type="text" id="glossary-search" class="search-input" placeholder="Begriff suchen...">
      <button class="clear-search" id="clear-search" title="Suche löschen">&times;</button>
    </div>
  </div>
</div>

<!-- Filter Results Counter -->
<div class="filter-results-section">
  <div class="results-counter-btn">
    <span class="term-count-number">0</span> von <span class="total-count-number">0</span> <span class="term-count-text">Begriffen</span> angezeigt
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
  background-color: #c93b22;
  color: white;
  padding: 0.2rem 0.5rem;
  margin: 0.1rem;
  border-radius: 3px;
  font-size: 0.8rem;
}
</style>

<script>
/**
 * Glossary Filter Functionality
 * Provides module-based filtering, alphabet navigation and text search for glossary terms
 */

// Check if GlossaryFilter is already defined to prevent redeclaration
if (typeof window.GlossaryFilter === 'undefined') {
  
class GlossaryFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.alphabetButtons = document.querySelectorAll('.secondary-btn[data-letter]');
    this.glossaryItems = document.querySelectorAll('.glossary-item');
    this.termCounter = document.querySelector('.term-count-number');
    this.totalCounter = document.querySelector('.total-count-number');
    this.searchInput = document.querySelector('#glossary-search');
    this.clearButton = document.querySelector('#clear-search');
    this.currentFilter = 'all';
    this.currentLetter = 'all';
    this.currentSearchTerm = '';
    
    this.init();
  }

  init() {
    // Bind event listeners with unified handler
    [...this.filterButtons, ...this.alphabetButtons].forEach(button => {
      button.addEventListener('click', (e) => this.handleButtonClick(e));
    });

    // Search functionality
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.clearSearch();
      });
    }

    if (this.clearButton) {
      this.clearButton.addEventListener('click', () => this.clearSearch());
    }

    // Initialize
    this.updateTermCount();
    this.setActiveButton('all');
    this.setActiveAlphabetButton('all');
    this.updateAlphabetButtonStates('all');
  }

  handleButtonClick(event) {
    event.preventDefault();
    const button = event.target;
    
    if (button.classList.contains('filter-btn')) {
      this.handleFilterClick(button);
    } else if (button.classList.contains('secondary-btn')) {
      this.handleAlphabetClick(button);
    }
  }

  handleFilterClick(button) {
    const filterValue = button.dataset.filter;
    this.setActiveButton(filterValue);
    this.applyAllFilters(filterValue, this.currentLetter, this.currentSearchTerm);
    this.currentFilter = filterValue;
    
    // Update alphabet button states based on current module filter
    this.updateAlphabetButtonStates(filterValue);
    
    // Reset letter filter if current letter is now disabled
    if (this.currentLetter !== 'all') {
      const currentLetterButton = document.querySelector(`.secondary-btn[data-letter="${this.currentLetter}"]`);
      if (currentLetterButton?.classList.contains('disabled')) {
        this.setActiveAlphabetButton('all');
        this.currentLetter = 'all';
        this.applyAllFilters(filterValue, 'all', this.currentSearchTerm);
      }
    }
  }

  handleAlphabetClick(button) {
    const letterValue = button.dataset.letter;
    this.setActiveAlphabetButton(letterValue);
    this.applyAllFilters(this.currentFilter, letterValue, this.currentSearchTerm);
    this.currentLetter = letterValue;
  }

  handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    this.currentSearchTerm = searchTerm;

    // Show/hide clear button
    if (this.clearButton) {
      if (searchTerm.length > 0) {
        this.clearButton.classList.add('visible');
      } else {
        this.clearButton.classList.remove('visible');
      }
    }

    // Apply combined filter (module + letter + search)
    this.applyAllFilters(this.currentFilter, this.currentLetter, searchTerm);
  }

  clearSearch() {
    if (this.searchInput) {
      this.searchInput.value = '';
      this.currentSearchTerm = '';
    }
    
    if (this.clearButton) {
      this.clearButton.classList.remove('visible');
    }

    // Apply filter without search term
    this.applyAllFilters(this.currentFilter, this.currentLetter, '');
  }

  setActiveButton(filterValue) {
    this.filterButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.filter === filterValue);
    });
  }

  setActiveAlphabetButton(letterValue) {
    this.alphabetButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.letter === letterValue);
    });
  }

  updateAlphabetButtonStates(moduleFilter = 'all') {
    // Get first letters of terms that match the current module filter
    const umlautMap = { 'Ä': 'A', 'Ö': 'O', 'Ü': 'U', 'ß': 'S' };
    const availableLetters = new Set(['all']);
    
    this.glossaryItems.forEach(item => {
      // Check if item matches current module filter
      let itemMatches = true;
      if (moduleFilter !== 'all') {
        const itemModules = item.dataset.modules?.split(',') || [];
        itemMatches = itemModules.some(module => module.trim() === moduleFilter);
      }
      
      // Only add letter if item matches the module filter
      if (itemMatches) {
        const title = item.querySelector('h3')?.textContent?.trim();
        if (title) {
          let firstLetter = title.charAt(0).toUpperCase();
          firstLetter = umlautMap[firstLetter] || firstLetter;
          availableLetters.add(firstLetter);
        }
      }
    });

    // Update button states
    this.alphabetButtons.forEach(button => {
      const letter = button.dataset.letter;
      button.classList.toggle('disabled', !availableLetters.has(letter));
    });
  }

  applyAllFilters(moduleFilter, letterFilter, searchTerm) {
    const umlautMap = { 'Ä': 'A', 'Ö': 'O', 'Ü': 'U', 'ß': 'S' };
    
    this.glossaryItems.forEach(item => {
      let shouldShow = true;

      // Module filter check
      if (moduleFilter !== 'all') {
        const itemModules = item.dataset.modules?.split(',') || [];
        shouldShow = itemModules.some(module => module.trim() === moduleFilter);
      }

      // Letter filter check
      if (shouldShow && letterFilter !== 'all') {
        const title = item.querySelector('h3')?.textContent?.trim();
        if (title) {
          let firstLetter = title.charAt(0).toUpperCase();
          firstLetter = umlautMap[firstLetter] || firstLetter;
          shouldShow = firstLetter === letterFilter;
        } else {
          shouldShow = false;
        }
      }

      // Search filter check
      if (shouldShow && searchTerm) {
        shouldShow = item.textContent.toLowerCase().includes(searchTerm);
      }

      // Toggle visibility
      item.classList.toggle('hidden', !shouldShow);
    });

    this.updateTermCount();
  }

  updateTermCount() {
    if (!this.termCounter) return;
    
    // Count visible items (not hidden)
    const visibleItems = Array.from(this.glossaryItems).filter(item => {
      return !item.classList.contains('hidden');
    });
    
    const count = visibleItems.length;
    const totalCount = this.glossaryItems.length;
    
    this.termCounter.textContent = count;
    
    // Set total count (only needs to be done once, but doing it each time is fine)
    if (this.totalCounter) {
      this.totalCounter.textContent = totalCount;
    }
    
    // Update German pluralization based on TOTAL count, not filtered count
    const termTextElement = document.querySelector('.term-count-text');
    if (termTextElement) {
      termTextElement.textContent = totalCount === 1 ? 'Begriff' : 'Begriffen';
    }
  }

  // Public method to get current filter state
  getCurrentFilter() {
    return {
      module: this.currentFilter,
      letter: this.currentLetter,
      search: this.currentSearchTerm
    };
  }

  // Public method to reset all filters
  resetFilters() {
    this.setActiveButton('all');
    this.setActiveAlphabetButton('all');
    this.clearSearch();
    this.applyAllFilters('all', 'all', '');
    this.currentFilter = 'all';
    this.currentLetter = 'all';
    this.currentSearchTerm = '';
  }
}

// Store GlossaryFilter globally to prevent redeclaration
window.GlossaryFilter = GlossaryFilter;

} // End of GlossaryFilter definition check

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a glossary page
  const filterSection = document.querySelector('.filter-section');
  
  if (filterSection) {
    window.glossaryFilter = new window.GlossaryFilter();
  }
});
</script>
