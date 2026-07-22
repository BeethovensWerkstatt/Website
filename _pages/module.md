---
layout: default
title: Module
permalink: /module/
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
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: white;
  border: 1px solid #ddd;
  border-bottom: 2px solid #e8e8e8;
  border-radius: 8px 8px 0 0;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  flex: 1;
  min-width: 0;
}

.module-tab-number {
  font-size: 0.75rem;
  color: #999;
  font-weight: 400;
}

.module-tab-title {
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.3;
}

.module-tab:hover {
  background: #fafafa;
  border-color: #c93b22;
}

.module-tab:hover .module-tab-number,
.module-tab:hover .module-tab-title {
  color: #c93b22;
}

.module-tab.active {
  background: white;
  border: 1px solid #c93b22;
  border-bottom: 3px solid #c93b22;
}

.module-tab.active .module-tab-number {
  color: #c93b22;
  font-weight: 500;
}

.module-tab.active .module-tab-title {
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
    gap: 0;
    border-bottom: none;
    border-left: 2px solid #e8e8e8;
  }
  
  .module-tab {
    text-align: left;
    align-items: flex-start;
    border-left: 3px solid transparent;
    border-bottom: none;
    position: relative;
    left: -2px;
    bottom: 0;
    padding: 0.75rem 1.25rem;
  }
  
  .module-tab.active {
    border-left: 3px solid #c93b22;
    border-bottom: none;
  }
}

/* ── Einklappbare Sektionen ─────────────────────── */
.modul-collapsible { border: none; margin: 0; padding: 0; }
.modul-collapsible > summary {
  cursor: pointer; list-style: none;
  display: flex; align-items: center; user-select: none;
}
.modul-collapsible > summary::-webkit-details-marker { display: none; }
.modul-collapsible > summary::after {
  content: "\25B6"; font-size: 0.65rem; color: #bbb;
  margin-left: auto; padding-left: 0.5rem;
  transition: transform 0.2s ease; flex-shrink: 0;
}
.modul-collapsible[open] > summary::after { transform: rotate(90deg); }
.modul-collapsible > summary:hover::after { color: #c93b22; }

/* ── Tab-Inhalt allgemein ───────────────────────── */
.modul-intro-text { color: #555; line-height: 1.7; margin-bottom: 2rem; font-size: 1.05rem; }

.modul-section-heading {
  font-size: 0.88rem; font-weight: 700; color: #c93b22;
  border-bottom: 1px solid #e8e8e8; padding-bottom: 0.4rem;
  margin-top: 1.75rem; margin-bottom: 0.75rem;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.modul-section-heading:first-of-type { margin-top: 0; }

.modul-count { font-size: 0.78rem; color: #aaa; font-weight: 400; text-transform: none; letter-spacing: 0; margin-left: 0.3rem; }

.modul-content-card {
  border: 1px solid #e5e5e5;
  padding: 0.7rem 1rem;
  margin-bottom: 0.6rem;
  border-radius: 4px;
  background: transparent;
}
.modul-content-card-layout { display: flex; gap: 0.9rem; align-items: flex-start; }
.modul-content-card-main { flex: 1; min-width: 0; }
.modul-content-card-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.2rem; }
.modul-content-card-title-row { display: flex; align-items: flex-start; gap: 0.5rem; }
.modul-content-card-title a { color: #333; text-decoration: underline; }
.modul-content-card-title a:hover { color: #c93b22; text-decoration: underline; }
.modul-content-card-desc { font-size: 0.83rem; color: #666; margin-bottom: 0.15rem; }
.modul-content-card-works { margin: 0.2rem 0 0.35rem 0; }
.modul-content-card-works-label { font-size: 0.78rem; color: #777; font-weight: 600; display: inline-block; margin-bottom: 0.1rem; }
.modul-content-card-works-list { margin: 0.1rem 0 0 0; padding-left: 1rem; }
.modul-content-card-works-list li { margin: 0.1rem 0; font-size: 0.82rem; color: #555; }
.modul-content-card-works-list a { color: #333; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #8a8a8a; }
.modul-content-card-works-list a:hover { color: #c93b22; text-decoration-color: #c93b22; }
.modul-content-card-doc { font-size: 0.83rem; }
.modul-content-card-doc a { color: #333; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #b0b0b0; }
.modul-content-card-doc a:hover { color: #c93b22; text-decoration-color: #c93b22; }

.modul-content-card-shot {
  display: block;
  flex: 0 0 170px;
  text-decoration: none;
}

.modul-content-card-shot img {
  width: 100%;
  height: auto;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: block;
}

.modul-content-card-shot-cta {
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.78rem;
  color: #555;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  text-decoration-color: #b0b0b0;
}

.modul-content-card-shot:hover .modul-content-card-shot-cta {
  color: #c93b22;
  text-decoration-color: #c93b22;
}

.modul-content-card-primary {
  border-color: #d8d8d8;
  background: #f7f7f7;
}

.modul-content-card-primary .modul-content-card-title {
  font-size: 1.02rem;
}

@media (max-width: 760px) {
  .modul-content-card-layout { display: block; }
  .modul-content-card-shot {
    margin-top: 0.5rem;
    max-width: 220px;
  }
}

.modul-item-list { list-style: none; padding: 0; margin: 0.5rem 0 0.25rem 0; }
.modul-item {
  padding: 0.5rem 0; border-bottom: 1px solid #f4f4f4;
  display: flex; flex-direction: column; gap: 0.1rem;
}
.modul-item:last-child { border-bottom: none; }
.modul-item-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
.modul-item-title { font-size: 0.93rem; font-weight: 600; color: #333; line-height: 1.4; flex: 1; }
.modul-item-title a { color: #333; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #8a8a8a; }
.modul-item-title a:hover { color: #c93b22; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #c93b22; }
.modul-eigene-veranst-title a { font-weight: 600; }
.modul-item-meta { font-size: 0.81rem; color: #777; line-height: 1.4; }
.modul-item-meta a { color: #c93b22; text-decoration: none; }
.modul-item-meta a:hover { text-decoration: underline; }

.modul-pub-list { margin-top: 0.5rem; }
.modul-pub-item { padding: 0.65rem 0; border-bottom: 1px solid #f0f0f0; }
.modul-pub-item:last-child { border-bottom: none; }
.modul-pub-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.2rem; }
.modul-pub-titel { font-size: 0.93rem; font-weight: 600; color: #333; flex: 1; line-height: 1.4; }
.modul-pub-titel a { color: #333; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #8a8a8a; }
.modul-pub-titel a:hover { color: #c93b22; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; text-decoration-color: #c93b22; }
.modul-pub-badges { display: inline-flex; gap: 0.3rem; align-items: flex-start; margin-left: auto; }
.modul-pub-meta { display: flex; flex-direction: column; gap: 0.1rem; font-size: 0.81rem; color: #666; }
.modul-pub-autoren { font-style: italic; color: #555; }
.modul-pub-citation em { font-style: italic; }
.modul-pub-doi a { color: #555; text-decoration: none; border-bottom: 1px solid #ddd; }
.modul-pub-doi a:hover { color: #c93b22; border-bottom-color: #c93b22; }

.modul-website-badge {
  font-size: 0.72rem; color: #c93b22; border: 1px solid #f0c9c2;
  padding: 0.05rem 0.35rem; border-radius: 3px; background: #fdf7f6;
  margin-left: 0; font-weight: 400; vertical-align: middle;
}

.modul-badge {
  display: inline-block; background: #f0f0f0; color: #777;
  padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.72rem;
  font-weight: 500; vertical-align: middle; margin-left: 0.3rem;
}

/* ── Event-Gruppierung für Vorträge/Lehre ────────────── */
.modul-event-vortrag {
  margin-left: 0; padding-left: 0.55rem; border-left: 2px solid #e8e8e8;
}

.modul-event-news {
  margin-left: 0;
  margin-top: -0.05rem;
  margin-bottom: 0.35rem;
  padding-left: 0.55rem;
  border-left: 2px solid #e8e8e8;
  font-size: 0.78rem;
}

.modul-event-news a {
  color: #c93b22;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
}

.modul-event-news a:hover { border-bottom-color: #c93b22; }

/* Einzelner Vortrag mit News-Link */
.modul-vortrag-news {
  font-size: 0.78rem; margin-top: 0.1rem; padding-left: 0.3rem;
}
.modul-vortrag-news a {
  color: #c93b22; text-decoration: none; font-weight: 500;
  border-bottom: 1px solid transparent;
}
.modul-vortrag-news a:hover { border-bottom-color: #c93b22; }

.modul-more-link { font-size: 0.83rem; margin-top: 0.5rem; margin-bottom: 0; }
.modul-more-link a { color: #c93b22; text-decoration: none; }
.modul-more-link a:hover { text-decoration: underline; }
</style>

<div class="module-page">
  <h1>Module</h1>
  
  <p class="module-intro">Das Forschungsprojekt <i>Beethovens Werkstatt</i> ist in fünf aufeinander aufbauende Module gegliedert.
  </p>

  <div class="module-tabs" role="tablist">
    <button class="module-tab" data-module="modul-1" role="tab" aria-selected="true">
      <span class="module-tab-number">Modul 1 (2014–16)</span>
      <span class="module-tab-title">Varianten-</span>
      <span class="module-tab-title">darstellung</span>
    </button>
    <button class="module-tab" data-module="modul-2" role="tab" aria-selected="false">
      <span class="module-tab-number">Modul 2 (2017–19)</span>
      <span class="module-tab-title">Beethoven als</span>
      <span class="module-tab-title">Bearbeiter</span>
    </button>
    <button class="module-tab" data-module="modul-3" role="tab" aria-selected="false">
      <span class="module-tab-number">Modul 3 (2020–21)</span>
      <span class="module-tab-title">Suche nach</span>
      <span class="module-tab-title">dem Werktext</span>
    </button>
    <button class="module-tab active" data-module="modul-4" role="tab" aria-selected="false">
      <span class="module-tab-number">Modul 4 (2022–25)</span>
      <span class="module-tab-title">Skizzenbuch-</span>
      <span class="module-tab-title">Edition</span>
    </button>
    <button class="module-tab" data-module="modul-5" role="tab" aria-selected="false">
      <span class="module-tab-number">Modul 5 (ab 2026)</span>
      <span class="module-tab-title">Diabelli-</span>
      <span class="module-tab-title">Variationen</span>
    </button>
  </div>

  <div id="modul-1" class="module-content" role="tabpanel">
    <h2>Modul 1: Variantendarstellung in symphonischen, kammermusikalischen und vokalen Werken</h2>
    {% include modul-tab-content.html num=1 start=2014 end=2016 modul_key="modul_1" %}
  </div>

  <div id="modul-2" class="module-content" role="tabpanel">
    <h2>Modul 2: Beethoven als Bearbeiter eigener Werke</h2>
    {% include modul-tab-content.html num=2 start=2017 end=2019 modul_key="modul_2" %}
  </div>

  <div id="modul-3" class="module-content" role="tabpanel">
    <h2>Modul 3: Auf der Suche nach dem Werktext: Originalausgaben, variante Drucke und Beethovens Revisionsdokumente</h2>
    {% include modul-tab-content.html num=3 start=2020 end=2021 modul_key="modul_3" %}
  </div>

  <div id="modul-4" class="module-content active" role="tabpanel">
    <h2>Modul 4: Skizzenbuch-Edition</h2>
    {% include modul-tab-content.html num=4 start=2022 end=2025 vortrag_end_year=2026 vortrag_end_month=6 modul_key="modul_4" %}
  </div>

  <div id="modul-5" class="module-content" role="tabpanel">
    <h2>Modul 5: Kombination von Editionskonzepten in einer Edition: Drei Modelleditionen der Diabelli-Variationen op. 120</h2>
    {% include modul-tab-content.html num=5 start=2026 end=2030 vortrag_start_month=7 modul_key="modul_5" %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.module-tab');
  const contents = document.querySelectorAll('.module-content');
  
  // Check URL hash on load
  const hash = window.location.hash.slice(1);
  if (hash) {
    const targetTab = document.querySelector(`[data-module="${hash}"]`);
    if (targetTab) {
      switchToTab(hash);
    }
  }
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const moduleId = this.getAttribute('data-module');
      switchToTab(moduleId);
      
      // Update URL without page reload
      history.pushState(null, null, `#${moduleId}`);
    });
  });
  
  function switchToTab(moduleId) {
    // Remove active class from all tabs and contents
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    contents.forEach(c => c.classList.remove('active'));
    
    // Add active class to selected tab and content
    const activeTab = document.querySelector(`[data-module="${moduleId}"]`);
    const activeContent = document.getElementById(moduleId);
    
    if (activeTab && activeContent) {
      activeTab.classList.add('active');
      activeTab.setAttribute('aria-selected', 'true');
      activeContent.classList.add('active');
    }
  }
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      switchToTab(hash);
    } else {
      switchToTab('modul-4');
    }
  });
});
</script>
