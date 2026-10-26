---
layout: vide-app
title: "Digital Facsimile"
permalink: /facs/
author: "Beethovens Werkstatt"
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

    const get_citation = function(apiBase) {
      const videAppCitation = document.getElementById('videapp-citation');
      const data_versions_URL = `${apiBase}/data-versions.json`
      console.log(8945, 'videAppCitation:', videAppCitation, data_versions_URL);
      fetch(data_versions_URL).then(r => r.json()).then(j => {
        const repos = j.repositories.repo
        console.log(8945, repos)
        for (repo of repos) {
          console.log(8945, repo)
          if (repo['@name'] === 'data') {
            videAppCitation.setAttribute('titleText', repo['@name'])
            videAppCitation.setAttribute('version', repo.commit)
            videAppCitation.setAttribute('date', repo.date)
          }
        }
      }).catch(e => { console.error(8945, e, `'${data_versions_URL}'`) })
    }

    if (apiBase) {
      el.setAttribute('api-base', apiBase)
    }

    if (documents) {
      const documentsValue = typeof documents === 'string' ? documents : JSON.stringify(documents)
      el.setAttribute('documents', documentsValue)
    }

    get_citation(apiBase || 'http://localhost:8080/exist/apps/api')
})()
</script>

<script type="module" src="{{ '/vide-component-facsimile/dist/index.js' | relative_url }}"></script>
