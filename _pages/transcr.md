---
layout: default
title: "Transkriptionen"
permalink: /transcription/
---

<link rel="stylesheet" href="{{ '/vide-component-transcriptions/dist/vide-transcr.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<script src="{{ '/runtime-config.js' | relative_url }}"></script>

<!-- Web Component SPA Island -->
<vide-transcr
  api-base=""
  documents=""
></vide-transcr>

<script>
  (function () {
    const el = document.querySelector('vide-transcr')
    if (!el) return

    const runtimeConfig = window.__VIDE_RUNTIME_CONFIG__ || {}
    const apiBase = runtimeConfig.apiBase || ''
    const documents = runtimeConfig.documents || ''

    if (apiBase) {
      el.setAttribute('api-base', apiBase)
    }

    if (documents) {
      const documentsValue = typeof documents === 'string' ? documents : JSON.stringify(documents)
      el.setAttribute('documents', documentsValue)
    }
  })()
</script>

<script type="module" src="{{ '/vide-component-transcriptions/dist/index.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
