---
layout: default
---

<div class="home">
  <h1 class="page-heading">Welcome to Beethovens Werkstatt</h1>
  
  <p>Exploring Beethoven's creative process through digital humanities research and analysis.</p>
  
  <h2>Latest Updates</h2>
  
  {%- if site.posts.size > 0 -%}
    <ul class="post-list">
      {%- for post in site.posts limit: 5 -%}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
  {%- else -%}
    <p>No posts yet. Check back soon for updates on our research!</p>
  {%- endif -%}
  
</div>
