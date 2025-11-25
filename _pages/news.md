---
layout: default
title: News
permalink: /news/
---

# {{ page.title }}

Die hier zusammengestellten Nachrichten dokumentieren ausgewählte Aktivitäten, Veranstaltungen und Arbeitsergebnisse des Projekts „Beethovens Werkstatt". Sie geben einen Einblick in die vielfältigen Forschungs- und Entwicklungstätigkeiten sowie die wissenschaftlichen Vernetzungsaktivitäten des Projektteams.

<div class="notice">
<strong>Hinweis:</strong> Diese Übersicht erhebt keinen Anspruch auf Vollständigkeit aller im Projekt durchgeführten Arbeiten und Aktivitäten. Sie soll vielmehr einen repräsentativen Eindruck der kontinuierlichen Forschungs- und Entwicklungsarbeit vermitteln.
</div>

<!-- Filter Section -->
<div class="filter-section">
  <div class="filter-label">Filter nach Themenbereich:</div>
  <div class="filter-controls">
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">Alle Themen</button>
      <button class="filter-btn" data-filter="Aktivitäten">Aktivitäten</button>
      <button class="filter-btn" data-filter="Lehre">Lehre</button>
      <button class="filter-btn" data-filter="Projekt">Projekt</button>
      <button class="filter-btn" data-filter="Release">Release</button>
      <button class="filter-btn" data-filter="Vortrag">Vortrag</button>
    </div>
  </div>
  
  <!-- Year Navigation -->
  <div class="secondary-navigation">
    <div class="secondary-label">Jahr:</div>
    <div class="secondary-buttons">
      <button class="secondary-btn active" data-year="all">Alle</button>
      <button class="secondary-btn" data-year="2025">2025</button>
      <button class="secondary-btn" data-year="2024">2024</button>
      <button class="secondary-btn" data-year="2023">2023</button>
      <button class="secondary-btn" data-year="2022">2022</button>
      <button class="secondary-btn" data-year="2021">2021</button>
      <button class="secondary-btn" data-year="2020">2020</button>
      <button class="secondary-btn" data-year="2019">2019</button>
      <button class="secondary-btn" data-year="2018">2018</button>
      <button class="secondary-btn" data-year="2017">2017</button>
      <button class="secondary-btn" data-year="2016">2016</button>
      <button class="secondary-btn" data-year="2015">2015</button>
      <button class="secondary-btn" data-year="2014">2014</button>
    </div>
  </div>
  
  <!-- Search Field -->
  <div class="search-controls">
    <div class="search-label">Textsuche:</div>
    <div class="search-container">
      <input type="text" id="news-search" class="search-input" placeholder="News durchsuchen...">
      <button class="clear-search" id="clear-news-search" title="Suche löschen">&times;</button>
    </div>
  </div>
</div>

<!-- Filter Results Counter -->
<div class="filter-results-section">
  <div class="results-counter-btn">
    <span class="news-count-number">0</span> von <span class="total-news-count">0</span> <span class="news-count-text">Beiträgen</span> angezeigt
  </div>
</div>

{% comment %}Sammle und sortiere alle Posts{% endcomment %}
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

<div class="news-list">
{% for post in sorted_posts %}
  {% assign post_year = post.date | date: "%Y" %}
  {% assign topic_class = post.topic | default: "Allgemein" %}
  
  <div class="news-item" data-year="{{ post_year }}" data-topic="{{ topic_class }}">
    <div class="news-item-header">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <div class="news-meta">
        <span class="news-date">{{ post.date | date: "%d.%m.%Y" }}</span>
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
/* News Filter Styling */
.news-filter-section {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0 2rem 0;
}

.news-filter-section .filter-label,
.news-filter-section .year-label,
.news-filter-section .search-label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.8rem;
  display: block;
}

.news-filter-section .filter-controls,
.news-filter-section .year-navigation,
.news-filter-section .search-controls {
  margin-bottom: 1.5rem;
}

.news-filter-section .filter-controls:last-child,
.news-filter-section .year-navigation:last-child,
.news-filter-section .search-controls:last-child {
  margin-bottom: 0;
}

.filter-buttons,
.year-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn,
.year-btn {
  @extend %button-base;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
}

.filter-btn.active,
.year-btn.active {
  background-color: #c93b22;
  color: white;
  border-color: #c93b22;
}

/* News List Styling */
.news-list {
  margin-top: 2rem;
}

.news-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-left: 3px solid #c93b22;
  background-color: #f9f9f9;
  border-radius: 0 5px 5px 0;
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
}

.news-item h3 a {
  color: #c93b22;
  text-decoration: none;
}

.news-item h3 a:hover {
  text-decoration: underline;
  color: #a12e1a;
}

.news-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  flex-shrink: 0;
}

.news-date {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
}

.topic-tag {
  display: inline-block;
  background-color: #c93b22;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 500;
}

.news-excerpt {
  color: #666;
  margin: 0.5rem 0 0 0;
  line-height: 1.5;
  font-style: italic;
}

/* Hidden items */
.news-item.hidden {
  display: none;
}

/* Search controls styling */
.search-container {
  position: relative;
  display: inline-block;
}

.search-input {
  padding: 8px 35px 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 250px;
}



@media (max-width: 768px) {
  .news-item-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .news-meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 1rem;
  }
  
  .filter-buttons,
  .year-buttons {
    gap: 0.3rem;
  }
  
  .filter-btn,
  .year-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('news-search');
  const clearSearchBtn = document.getElementById('clear-news-search');
  const newsItems = document.querySelectorAll('.news-item');
  const countElement = document.querySelector('.news-count-number');
  const totalElement = document.querySelector('.total-news-count');
  const textElement = document.querySelector('.news-count-text');
  
  let currentFilter = 'all';
  let currentYear = 'all';
  let currentSearch = '';
  
  // Gesamtanzahl setzen
  totalElement.textContent = newsItems.length;
  
  // Event Handlers
  function handleFilterClick(e) {
    if (!e.target.classList.contains('filter-btn')) return;
    
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    applyFilters();
  }
  
  function handleYearClick(e) {
    if (!e.target.classList.contains('secondary-btn')) return;
    
    document.querySelectorAll('.secondary-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentYear = e.target.dataset.year;
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
    countElement.textContent = visibleCount;
    textElement.textContent = visibleCount === 1 ? 'Beitrag' : 'Beiträgen';
  }
  
  // Event Listeners
  document.querySelector('.filter-buttons').addEventListener('click', handleFilterClick);
  document.querySelector('.secondary-buttons').addEventListener('click', handleYearClick);
  searchInput.addEventListener('input', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);
  
  // Initiale Anzeige
  applyFilters();
});
</script>