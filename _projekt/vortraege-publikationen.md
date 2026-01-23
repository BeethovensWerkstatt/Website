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
  <h2>Vorträge</h2>
  <p>Hier entsteht die Übersicht über Vorträge und Präsentationen des Projekts.</p>
</div>

<!-- Publikationen Content -->
<div id="publikationen-content" class="module-content">
  <h2>Publikationen</h2>
  <p>Hier entsteht die Übersicht über Publikationen und Forschungsbeiträge des Projekts.</p>
</div>

<!-- Lehre Content -->
<div id="lehre-content" class="module-content">
  <h2>Lehre</h2>
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
});
</script>
