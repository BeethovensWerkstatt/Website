---
layout: default
---

<div class="hero-section">
  <div class="wrapper">
    <h1>Beethovens Werkstatt</h1>
    <p>Das Projekt Beethovens Werkstatt kombiniert zwei Forschungsansätze – Genetische Textkritik und Digitale Musikedition – um kompositorische Prozesse im Œuvre Beethovens zu untersuchen.</p>
  </div>
</div>

<div class="wrapper">
  <div class="research-areas">
    <div class="research-area">
      <h3>Genetische Textkritik</h3>
      <p>Untersuchung von Beethovens Arbeitsweisen durch die Erfassung der in den Quellen zu beobachtenden Textbewegungen.</p>
    </div>
    <div class="research-area">
      <h3>Digitale Musikedition</h3>
      <p>Digitale Ausgaben basierend auf MEI (Music Encoding Initiative) zur Dokumentation kompositorischer Prozesse.</p>
    </div>
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

  <div class="content-wrapper">
    <h2>Über das Projekt</h2>
    <p>Durch die Verknüpfung zweier neuer, wechselseitig aufeinander bezogener Forschungsansätze – der Genetischen Textkritik und der Digitalen Edition – soll die hochkomplexe Dynamik kompositorischer Prozesse im Œuvre Beethovens erforscht, dokumentiert und in exemplarischen digitalen Editionen wiedergegeben werden.</p>
    
    <p>Die genetische Textkritik widmet sich kompositorischen Schreibprozessen, die sowohl in einzelnen Autographen als auch in der Abfolge aufeinander beziehbarer Werkstattmanuskripte zu beobachten und näherungsweise zu rekonstruieren sind.</p>
  </div>
</div>
  
</div>
