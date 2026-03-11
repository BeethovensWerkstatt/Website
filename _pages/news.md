---
layout: default
title: News
permalink: /news/
---

# {{ page.title }}

Die hier zusammengestellten Nachrichten dokumentieren ausgewählte Aktivitäten, Veranstaltungen und Arbeitsergebnisse des Projekts. 

<!-- Filter Toggle Button -->
<div class="filter-toggle-header">
  <button id="news-filter-toggle" class="news-filter-toggle-btn">
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
<div class="news-filters" id="news-filters">
  <div class="filter-group">
    <label for="topic-filter">Themenbereich:</label>
    <select id="topic-filter">
      <option value="all">Alle Themen</option>
      <!-- Wird dynamisch befüllt -->
    </select>
  </div>
  
  <div class="filter-group">
    <label for="year-filter">Jahr:</label>
    <select id="year-filter">
      <option value="all">Alle</option>
      <!-- Wird dynamisch befüllt -->
    </select>
  </div>
  
  <div class="filter-group">
    <label for="news-search">Textsuche:</label>
    <div class="search-container">
      <input type="text" id="news-search" class="search-input" placeholder="News durchsuchen...">
      <button class="search-clear" id="clear-news-search" title="Suche löschen">&times;</button>
    </div>
  </div>
</div>

<!-- Filter Results Counter -->
<div class="news-count">
  <span class="news-count-number">0</span> von <span class="total-news-count">0</span> <span class="news-count-text">Beiträgen</span>
</div>

{% comment %}Sammle und sortiere alle Posts{% endcomment %}
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

<div class="news-list">
{% for post in sorted_posts %}
  {% assign post_year = post.date | date: "%Y" %}
  {% assign topic_class = post.topic | default: "Allgemein" %}
  
  <div class="news-item" data-year="{{ post_year }}" data-topic="{{ topic_class }}">
    <div class="news-item-header">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="news-date">{{ post.date | date: "%d.%m.%Y" }}</span>
      </h3>
      <div class="topic-tags">
        <span class="topic-tag">{{ topic_class }}</span>
      </div>
    </div>
    {% if post.excerpt %}
      <p class="news-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
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

.news-filter-toggle-btn {
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

.news-filter-toggle-btn:hover {
  background: #e9ecef;
  border-color: #c93b22;
  color: #c93b22;
}

.news-filter-toggle-btn .toggle-icon {
  flex-shrink: 0;
}

.news-filter-toggle-btn .chevron-icon {
  flex-shrink: 0;
  transition: transform 0.3s;
}

.news-filter-toggle-btn.collapsed .chevron-icon {
  transform: rotate(-90deg);
}

/* News Filters */
.news-filters {
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

.news-filters.collapsed {
  max-height: 0;
  padding: 0 1.5rem;
  margin-bottom: 0;
  opacity: 0;
  border: none;
}

@media (max-width: 768px) {
  .news-filters {
    grid-template-columns: 1fr;
  }
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

.filter-results-section {
  margin-bottom: 2rem;
}

.news-count {
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.875rem;
}

/* Search controls */
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

/* News List Styling */
.news-list {
  margin-top: 2rem;
}

.news-item {
  padding: 1.5rem 0 1rem 0;
  border-bottom: 1px solid #e8e8e8;
  border-left: 3px solid transparent;
  padding-left: 1rem;
}

.news-item:last-child {
  border-bottom: none;
}

.news-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.news-item h3 {
  margin: 0;
  flex: 1;
  padding-right: 1rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.news-item h3 a {
  color: #c93b22;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
}

.news-item h3 a:hover {
  text-decoration: underline;
  color: #a12e1a;
}

.news-date {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.topic-tags {
  flex-shrink: 0;
}

.topic-tag {
  display: inline-block;
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
}

.news-excerpt {
  color: #666;
  margin: 0.5rem 0 0 0;
  padding-right: 150px;
  line-height: 1.5;
  font-style: italic;
}

/* Hidden items */
.news-item.hidden {
  display: none;
}

@media (max-width: 768px) {
  .news-filters {
    grid-template-columns: 1fr;
  }
  
  .news-excerpt {
    padding-right: 0;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Filter toggle functionality
  const toggleBtn = document.getElementById('news-filter-toggle');
  const newsFilters = document.getElementById('news-filters');
  let filtersVisible = true;
  
  if (toggleBtn && newsFilters) {
    toggleBtn.addEventListener('click', function() {
      filtersVisible = !filtersVisible;
      newsFilters.classList.toggle('collapsed', !filtersVisible);
      toggleBtn.classList.toggle('collapsed', !filtersVisible);
    });
  }
  
  // Filter and search functionality
  const topicFilter = document.getElementById('topic-filter');
  const yearFilter = document.getElementById('year-filter');
  const searchInput = document.getElementById('news-search');
  const clearSearchBtn = document.getElementById('clear-news-search');
  const newsItems = document.querySelectorAll('.news-item');
  const countElement = document.querySelector('.news-count-number');
  const totalElement = document.querySelector('.total-news-count');
  const textElement = document.querySelector('.news-count-text');
  
  let currentFilter = 'all';
  let currentYear = 'all';
  let currentSearch = '';
  
  // Collect available topics from news items
  const availableTopics = new Set();
  newsItems.forEach(item => {
    const topic = item.dataset.topic;
    if (topic) {
      availableTopics.add(topic);
    }
  });
  
  // Populate topic dropdown with available topics (sorted alphabetically)
  if (topicFilter) {
    const sortedTopics = Array.from(availableTopics).sort();
    sortedTopics.forEach(topic => {
      const option = document.createElement('option');
      option.value = topic;
      option.textContent = topic;
      topicFilter.appendChild(option);
    });
  }
  
  // Collect available years from news items
  const availableYears = new Set();
  newsItems.forEach(item => {
    const year = item.dataset.year;
    if (year) {
      availableYears.add(year);
    }
  });
  
  // Populate year dropdown with available years (sorted descending)
  if (yearFilter) {
    const sortedYears = Array.from(availableYears).sort((a, b) => b - a);
    sortedYears.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });
  }
  
  // Gesamtanzahl setzen
  if (totalElement) {
    totalElement.textContent = newsItems.length;
  }
  
  // Event Handlers
  function handleTopicChange() {
    currentFilter = topicFilter.value;
    applyFilters();
  }
  
  function handleYearChange() {
    currentYear = yearFilter.value;
    applyFilters();
  }
  
  function handleSearch() {
    currentSearch = searchInput.value.toLowerCase().trim();
    clearSearchBtn.classList.toggle('visible', currentSearch.length > 0);
    applyFilters();
  }
  
  function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.remove('visible');
    applyFilters();
  }
  
  function applyFilters() {
    let visibleCount = 0;
    
    newsItems.forEach(item => {
      const itemTopic = item.dataset.topic;
      const itemYear = item.dataset.year;
      const itemText = item.textContent.toLowerCase();
      
      const topicMatch = currentFilter === 'all' || itemTopic === currentFilter;
      const yearMatch = currentYear === 'all' || itemYear === currentYear;
      const searchMatch = !currentSearch || itemText.includes(currentSearch);
      
      if (topicMatch && yearMatch && searchMatch) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });
    
    // Counter aktualisieren
    if (countElement) {
      countElement.textContent = visibleCount;
    }
    if (textElement) {
      textElement.textContent = visibleCount === 1 ? 'Beitrag' : 'Beiträgen';
    }
  }
  
  // Event Listeners
  if (topicFilter) {
    topicFilter.addEventListener('change', handleTopicChange);
  }
  if (yearFilter) {
    yearFilter.addEventListener('change', handleYearChange);
  }
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }
  
  // Initiale Anzeige
  applyFilters();
});
</script>