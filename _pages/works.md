---
layout: vide-app
title: "Werke"
permalink: /works/
---

<link rel="stylesheet" href="{{ '/vide-component-works/dist/vide-works.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<script src="{{ '/runtime-config.js' | relative_url }}"></script>

<vide-works api-base="http://localhost:8080/exist/apps/api"></vide-works>

<script>
  (function () {
    const el = document.querySelector('vide-works')
    if (!el) return

    const runtimeConfig = window.__VIDE_RUNTIME_CONFIG__ || {}
    if (runtimeConfig.apiBase) {
      el.setAttribute('api-base', runtimeConfig.apiBase)
    }
  })()
</script>

<script type="module" src="{{ '/vide-component-works/dist/index.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>