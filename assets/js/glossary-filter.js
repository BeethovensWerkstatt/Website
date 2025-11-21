/**
 * Glossary Filter Functionality
 * Provides module-based filtering and text search for glossary terms
 */

class GlossaryFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.glossaryItems = document.querySelectorAll('.glossary-item');
    this.termCounter = document.querySelector('.term-count-number');
    this.searchInput = document.querySelector('#glossary-search');
    this.clearButton = document.querySelector('#clear-search');
    this.currentFilter = 'all';
    this.currentSearchTerm = '';
    
    this.init();
  }

  init() {
    // Bind event listeners
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => this.handleFilterClick(e));
    });

    // Search functionality
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.clearSearch();
        }
      });
    }

    if (this.clearButton) {
      this.clearButton.addEventListener('click', () => this.clearSearch());
    }

    // Set initial count based on actual visible items
    this.updateTermCount();

    // Set initial active state
    this.setActiveButton('all');
  }

  handleFilterClick(event) {
    event.preventDefault();
    
    const button = event.target;
    const filterValue = button.dataset.filter;
    
    // Update active button state
    this.setActiveButton(filterValue);
    
    // Apply combined filter (module + search)
    this.applyFilters(filterValue, this.currentSearchTerm);
    
    this.currentFilter = filterValue;
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

    // Apply combined filter (module + search)
    this.applyFilters(this.currentFilter, searchTerm);
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
    this.applyFilters(this.currentFilter, '');
  }

  setActiveButton(filterValue) {
    this.filterButtons.forEach(button => {
      if (button.dataset.filter === filterValue) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  applyFilters(moduleFilter, searchTerm) {
    this.glossaryItems.forEach(item => {
      let shouldShow = true;

      // Module filter check
      if (moduleFilter !== 'all') {
        const itemModules = item.dataset.modules ? item.dataset.modules.split(',') : [];
        const moduleMatch = itemModules.some(module => {
          const cleanModule = module.trim();
          return cleanModule === moduleFilter;
        });
        if (!moduleMatch) {
          shouldShow = false;
        }
      }

      // Search filter check
      if (searchTerm && shouldShow) {
        const itemText = item.textContent.toLowerCase();
        const searchMatch = itemText.includes(searchTerm);
        if (!searchMatch) {
          shouldShow = false;
        }
      }

      // Show or hide item immediately without animation delays
      if (shouldShow) {
        item.classList.remove('filtering-out', 'hidden', 'filtering-in');
      } else {
        item.classList.add('hidden');
        item.classList.remove('filtering-out', 'filtering-in');
      }
    });

    // Update counter after all items have been processed
    this.updateTermCount();
  }

  showItem(item) {
    // Add smooth transition
    item.classList.remove('filtering-out', 'hidden');
    item.classList.add('filtering-in');
    
    // Remove animation class after transition
    setTimeout(() => {
      item.classList.remove('filtering-in');
    }, 300);
  }

  hideItem(item) {
    // Add smooth transition
    item.classList.remove('filtering-in');
    item.classList.add('filtering-out');
    
    // Hide after animation
    setTimeout(() => {
      item.classList.add('hidden');
      item.classList.remove('filtering-out');
    }, 300);
  }

  updateTermCount() {
    if (!this.termCounter) return;
    
    // Count visible items (not hidden)
    const visibleItems = Array.from(this.glossaryItems).filter(item => {
      return !item.classList.contains('hidden');
    });
    
    const count = visibleItems.length;
    this.termCounter.textContent = count;
    
    // Update German pluralization
    const termTextElement = document.querySelector('.term-count-text');
    if (termTextElement) {
      termTextElement.textContent = count === 1 ? 'Begriff' : 'Begriffe';
    }
  }

  // Public method to get current filter state
  getCurrentFilter() {
    return {
      module: this.currentFilter,
      search: this.currentSearchTerm
    };
  }

  // Public method to reset all filters
  resetFilters() {
    this.setActiveButton('all');
    this.clearSearch();
    this.applyFilters('all', '');
    this.currentFilter = 'all';
    this.currentSearchTerm = '';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a glossary page
  if (document.querySelector('.glossary-filter-section')) {
    window.glossaryFilter = new GlossaryFilter();
  }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GlossaryFilter;
}