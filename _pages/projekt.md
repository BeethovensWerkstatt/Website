---
layout: default
title: Projekt
permalink: /projekt/
---

<div class="content-wrapper">

<h1>{{ page.title }}</h1>

<p>Das Projekt „Beethovens Werkstatt" kombiniert Genetische Textkritik<!-- TODO: add link to glossary-->  und <a href="/glossar/digitale-musikedition/">Digitale Musikedition</a>, um kompositorische Prozesse im Œuvre Beethovens zu untersuchen. Die folgenden Bereiche geben einen Überblick über administrative und wissenschaftliche Aspekte des Projekts.</p>

<div class="project-sections">

<div class="project-links">
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/uebersicht.jpg');">
    <div class="project-link-content">
      <h3><a href="/projektueberblick/">Projektübersicht</a></h3>
    </div>
  </div>
  
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/team.jpg');">
    <div class="project-link-content">
      <h3><a href="/team/">Team</a></h3>
    </div>
  </div>
  
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/institutionen.jpg');">
    <div class="project-link-content">
      <h3><a href="/beteiligte-institutionen/">Beteiligte Institutionen</a></h3>
    </div>
  </div>
</div>

<div class="project-divider"></div>

<div class="project-links">
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/digitale-methoden.jpg');">
    <div class="project-link-content">
      <h3><a href="/digitale-methoden/">Digitale Methoden</a></h3>
    </div>
  </div>
  
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/vortraege.jpg');">
    <div class="project-link-content">
      <h3><a href="/vortraege-publikationen/">Vorträge, Publikationen und Lehre</a></h3>
    </div>
  </div>
  
  <div class="project-link-item" style="background-image: url('/assets/images/projekt/bibliographie.jpg');">
    <div class="project-link-content">
      <h3><a href="/bibliografie/">Bibliografie</a></h3>
    </div>
  </div>
</div>

</div>

</div>

<style>
.project-sections {
  margin-top: 40px;
}

.project-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #c93b22 0%, #c93b22 200px, transparent 200px);
  margin: 30px 0;
}

.project-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-link-item {
  position: relative;
  background: white;
  background-size: cover;
  background-position: center;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 0;
  min-height: 200px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-end;
}

.project-link-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 0.1) 0%, 
    rgba(0, 0, 0, 0.4) 50%, 
    rgba(0, 0, 0, 0.75) 100%);
  transition: all 0.3s ease;
  z-index: 1;
}

.project-link-item:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  border-color: #c93b22;
  transform: translateY(-3px);
}

.project-link-item:hover::before {
  background: linear-gradient(to bottom, 
    rgba(201, 59, 34, 0.15) 0%, 
    rgba(201, 59, 34, 0.45) 50%, 
    rgba(136, 40, 23, 0.85) 100%);
}

.project-link-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 25px;
}

.project-link-item h3 {
  margin: 0;
  font-size: 1.4em;
  font-weight: 600;
}

.project-link-item h3 a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  display: block;
}

.project-link-item h3 a:hover {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

@media (max-width: 768px) {
  .project-links {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .project-divider {
    background: linear-gradient(to right, #c93b22 0%, #c93b22 150px, transparent 150px);
  }
  
  .project-link-item {
    padding: 0;
    min-height: 180px;
  }
  
  .project-link-content {
    padding: 20px;
  }
}
</style>
