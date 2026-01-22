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
    <h2>Modul 1: Variantendarstellung</h2>
    <p>[Hier kommt der Inhalt von modul-1.md]</p>
    <!-- TODO: Inhalt aus _pages/modul-1.md einfügen -->
  </div>

  <div id="modul-2" class="module-content" role="tabpanel">
    <h2>Modul 2: Beethoven als Bearbeiter eigener Werke</h2>
    <p>[Hier kommt der Inhalt von modul-2.md]</p>
    <!-- TODO: Inhalt aus _pages/modul-2.md einfügen -->
  </div>

  <div id="modul-3" class="module-content" role="tabpanel">
    <h2>Modul 3</h2>
    <p>[Hier kommt der Inhalt von modul-3.md]</p>
    <!-- TODO: Inhalt aus _pages/modul-3.md einfügen -->
  </div>

  <div id="modul-4" class="module-content active" role="tabpanel">
    <h2>Modul 4</h2>
    <p>[Hier kommt der Inhalt von modul-4.md]</p>
    <!-- TODO: Inhalt aus _pages/modul-4.md einfügen -->
  </div>

  <div id="modul-5" class="module-content" role="tabpanel">
    <h2>Modul 5</h2>
    <p>[Hier kommt der Inhalt von modul-5.md]</p>
    <!-- TODO: Inhalt aus _pages/modul-5.md einfügen -->
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
