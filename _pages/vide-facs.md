---
layout: default
title: "Digital Facsimile"
permalink: /facs/
---

<link rel="stylesheet" href="{{ '/vide-component-facsimile/dist/vide-facs.css' | relative_url }}">

<script src="{{ '/runtime-config.js' | relative_url }}"></script>

<!-- Web Component SPA Island -->
<vide-facs
  api-base=""
  documents=""
></vide-facs>

<script>
  (function () {
    const el = document.querySelector('vide-facs')
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

<script type="module" src="{{ '/vide-component-facsimile/dist/index.js' | relative_url }}"></script>
