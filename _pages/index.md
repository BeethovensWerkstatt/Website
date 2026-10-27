---
layout: default
permalink: /
---

<div class="wrapper">
  <div class="content-wrapper">
    <h2>Beethovens Werkstatt</h2>
    <div class="hero-image">
      <img src="{{ '/assets/images/hero.jpg' | relative_url }}" alt="Skizzenausschnitt aus Beethovens Werkstatt mit mehrfarbigen Korrekturen und Tilgungen">
    </div>

    <p>Im Grundlagenforschungsprojekt <strong>Beethovens Werkstatt</strong> werden durch die Verknüpfung zweier neuer, wechselseitig aufeinander bezogener Forschungsansätze – der <a href="{% link _glossary/genetische-textkritik.md %}">Genetischen Textkritik</a> und der <a href="{% link _glossary/digitale-musikedition.md %}">Digitalen Edition</a> – die hochkomplexe Dynamik kompositorischer Prozesse im Œuvre Beethovens erforscht, dokumentiert und in exemplarischen digitalen Editionen wiedergegeben.</p>
  </div>

  <div class="news-section">
    <h2>Veranstaltungen & Neuigkeiten</h2>
    
    {%- if site.posts.size > 0 -%}
      <div class="post-list">
        {%- for post in site.posts limit: 5 -%}
        <article class="post-preview">
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          <p class="post-meta">{{ post.date | date: "%d. %B %Y" }}</p>
          {%- if post.excerpt -%}
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            </div>
          {%- endif -%}
          <a href="{{ post.url | relative_url }}" class="read-more">Weiterlesen...</a>
        </article>
        {%- endfor -%}
      </div>
    {%- else -%}
      <p>Keine Beiträge verfügbar. Schauen Sie bald wieder vorbei für Updates zu unserer Forschung!</p>
    {%- endif -%}
  </div>
</div>
