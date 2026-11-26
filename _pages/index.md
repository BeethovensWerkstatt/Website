---
layout: default
permalink: /
---

<div class="wrapper">
  <div class="content-wrapper">
    <h2>Beethovens Werkstatt</h2>
    <div class="hero-image">
      <img src="{{ '/assets/images/hero.jpg' | relative_url }}" alt="Variantenbildung in einem Arbeitsmanuskript Beethovens mit Einfärbung von Beethovens Werkstatt">
    </div>

    <p>Im Grundlagenforschungsprojekt <strong>Beethovens Werkstatt</strong> wird durch die Verknüpfung zweier neuer, wechselseitig aufeinander bezogener Forschungsansätze – der <a href="{% link _glossary/genetische-textkritik.md %}">Genetischen Textkritik</a> und der <a href="{% link _glossary/digitale-musikedition.md %}">Digitalen Edition</a> – die hochkomplexe Dynamik kompositorischer Prozesse im Œuvre Beethovens erforscht, dokumentiert und in exemplarischen digitalen Editionen wiedergegeben.</p>

    <div class="home-intro">
      <div class="home-intro-text">
        <p>Die genetische Textkritik widmet sich kompositorischen Schreibprozessen, die sowohl in einzelnen Autographen als auch in der Abfolge aufeinander beziehbarer Werkstattmanuskripte (Skizzen, Arbeitsmanuskripte, Korrekturverzeichnisse etc.) zu beobachten und näherungsweise zu rekonstruieren sind. Schreibprozesse geben Aufschluss über Beethovens kompositorisches Denken, Handeln und Entscheiden. Quellendokumente und textgenetisch erarbeitete Ergebnisse sollen digital präsentiert werden. Die zu erwartenden Erkenntnisse sind für die Beurteilung der gesamten, sich wesentlich auf Beethoven berufenden Kompositionsgeschichte und Ästhetik des 19. und 20. Jahrhunderts von Bedeutung.</p>
      </div>

      <figure class="home-video">
        <div class="video-consent" data-vimeo-id="449199986">
          <button type="button" class="video-consent-button" aria-label="Video „Beethovens Werkstatt“ abspielen (lädt Inhalte von Vimeo)">
            <img src="{{ '/assets/images/video-beethovens-werkstatt.jpg' | relative_url }}" alt="" loading="lazy">
            <span class="video-consent-play" aria-hidden="true"></span>
          </button>
        </div>
        <figcaption>Einführungsfilm, gezeigt am 6. August 2020 an der Akademie der Wissenschaften und der Literatur | Mainz</figcaption>
      </figure>
    </div>

    <p>Das Projekt, das mit den beiden Forschungsansätzen zwei spezialisierte Institutionen – das Beethoven-Haus Bonn und das Musikwissenschaftliche Seminar Detmold/Paderborn – in einer engen Kooperation verbindet, versteht sich als Beitrag zur musikwissenschaftlichen Grundlagenforschung und ist zugleich darauf ausgerichtet, Konzepte und Lösungen im Bereich der Digital Humanities an der Schnittstelle von Musikwissenschaft und Angewandter Informatik zu entwickeln.</p>
  </div>

  <script>
    document.querySelectorAll('.video-consent').forEach(function (container) {
      container.querySelector('.video-consent-button').addEventListener('click', function () {
        var iframe = document.createElement('iframe')
        iframe.src = 'https://player.vimeo.com/video/' + container.dataset.vimeoId + '?dnt=1&autoplay=1'
        iframe.title = 'Beethovens Werkstatt'
        iframe.allow = 'autoplay; fullscreen; picture-in-picture'
        iframe.allowFullscreen = true
        container.replaceChildren(iframe)
      })
    })
  </script>

  <div class="news-section">
    <h2>Veranstaltungen & Neuigkeiten</h2>
    
    {%- if site.posts.size > 0 -%}
      {%- assign months = "Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember" | split: "," -%}
      <div class="post-list">
        {%- for post in site.posts limit: 5 -%}
        <article class="post-preview">
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          {% assign month_index = post.date | date: "%-m" | minus: 1 %}
          <p class="post-meta">{{ post.date | date: "%-d" }}. {{ months[month_index] }} {{ post.date | date: "%Y" }}</p>
          {%- if post.excerpt -%}
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            </div>
          {%- endif -%}
          <a href="{{ post.url | relative_url }}" class="read-more">Weiterlesen...</a>
        </article>
        {%- endfor -%}
      </div>
      <p class="news-more-link"><a href="{{ '/news/' | relative_url }}">Alle Veranstaltungen &amp; Neuigkeiten im News-Bereich →</a></p>
    {%- else -%}
      <p>Keine Beiträge verfügbar. Schauen Sie bald wieder vorbei für Updates zu unserer Forschung!</p>
    {%- endif -%}
  </div>
</div>
