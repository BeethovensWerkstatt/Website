---
layout: default
title: Bibliografie
permalink: /bibliografie/
parent: Projekt
parent_url: /projekt
---

<style>
.bibliografie-page h1 {
	margin-bottom: 1rem;
}

.bibliografie-intro {
	margin-bottom: 1.5rem;
	font-size: 1.05rem;
	color: #666;
	line-height: 1.65;
}

.bibliografie-intro a {
	color: #c93b22;
	text-decoration: none;
	border-bottom: 1px solid transparent;
}

.bibliografie-intro a:hover {
	border-bottom-color: #c93b22;
}

.filter-toggle-header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 1.5rem 0 1rem 0;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid #dee2e6;
}

.bibliografie-filter-toggle-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.4rem 0.75rem;
	background: #f8f9fa;
	color: #495057;
	border: 1px solid #dee2e6;
	border-radius: 4px;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s;
}

.bibliografie-filter-toggle-btn:hover {
	background: #e9ecef;
	border-color: #c93b22;
	color: #c93b22;
}

.bibliografie-filter-toggle-btn .toggle-icon,
.bibliografie-filter-toggle-btn .chevron-icon {
	flex-shrink: 0;
}

.bibliografie-filter-toggle-btn .chevron-icon {
	transition: transform 0.3s;
}

.bibliografie-filter-toggle-btn.collapsed .chevron-icon {
	transform: rotate(-90deg);
}

.bibliografie-filters {
	transition: all 0.3s ease;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1rem;
	margin-bottom: 2rem;
	padding: 1.5rem;
	background: #f9f9f9;
	border-radius: 8px;
	border: 1px solid #e8e8e8;
}

.bibliografie-filters.collapsed {
	max-height: 0;
	padding: 0 1.5rem;
	margin-bottom: 0;
	opacity: 0;
	border: none;
}

@media (min-width: 1200px) {
	.bibliografie-filters {
		grid-template-columns: repeat(4, 1fr);
	}
}

.filter-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.filter-group.search-group {
	grid-column: 1 / -1;
}

.filter-group label {
	font-weight: 600;
	font-size: 0.9rem;
	color: #333;
}

.filter-group select,
.filter-group input {
	padding: 0.5rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 0.95rem;
	background: white;
}

.filter-group select:focus,
.filter-group input:focus {
	outline: none;
	border-color: #c93b22;
}

.search-container {
	position: relative;
	display: flex;
	width: 100%;
}

.search-container input {
	flex: 1;
	padding-right: 2.5rem;
}

.search-clear {
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	font-size: 18px;
	color: #999;
	cursor: pointer;
	padding: 5px;
	border-radius: 50%;
	opacity: 0;
	transition: opacity 0.2s ease, color 0.2s ease;
	z-index: 10;
}

.search-clear:hover {
	color: #c93b22;
}

.search-clear.visible {
	opacity: 1;
}

.bibliografie-count {
	margin: 1rem 0 0.5rem;
	font-size: 0.9rem;
	color: #666;
}

.bibliografie-liste {
	margin-top: 1.5rem;
}

.bibliografie-item {
	padding: 1rem 0 1.3rem;
	border-bottom: 1px solid #f0f0f0;
}

.bibliografie-item.hidden {
	display: none;
}

.bibliografie-item:last-child {
	border-bottom: none;
}

.bib-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 0.5rem;
}

.bib-type-badge {
	display: inline-block;
	background: #f0f0f0;
	color: #555;
	padding: 0.25rem 0.6rem;
	border-radius: 3px;
	font-size: 0.8rem;
	font-weight: 500;
	flex-shrink: 0;
	white-space: nowrap;
}

.bib-titel {
	font-size: 1.1rem;
	font-weight: 600;
	margin: 0;
	color: #333;
	line-height: 1.4;
	flex: 1;
	padding-right: 1rem;
}

.bib-titel a {
	color: #333;
	text-decoration: none;
	border-bottom: 1px dotted #aaa;
	transition: border-color 0.2s, color 0.2s;
}

.bib-titel a:hover {
	color: #c93b22;
	border-bottom-color: #c93b22;
}

.bib-meta {
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	font-size: 0.9rem;
	color: #666;
	line-height: 1.6;
}

.bib-meta-row {
	display: flex;
	flex-wrap: wrap;
	gap: 0.3rem 1rem;
	align-items: baseline;
}

.bib-autoren {
	font-style: italic;
	color: #333;
	font-weight: 500;
}

.bib-citation-line {
	display: block;
	color: #555;
	line-height: 1.55;
}

.bib-citation-line em {
	font-style: italic;
}

.bib-doi-line {
	font-size: 0.85rem;
	color: #666;
}

.bib-doi-line a {
	color: #555;
	text-decoration: none;
	border-bottom: 1px solid #ddd;
	transition: color 0.2s, border-color 0.2s;
}

.bib-doi-line a:hover {
	color: #c93b22;
	border-bottom-color: #c93b22;
}

@media (max-width: 768px) {
	.bibliografie-filters {
		grid-template-columns: 1fr;
	}
}
</style>

<div class="content-wrapper bibliografie-page">

<h1>{{ page.title }}</h1>

<p class="bibliografie-intro">
	In dieser Liste befindet sich eine Auswahl von Literatur zu Beethovens Schaffensweise, zur Genetischen Textkritik sowie zum Datenformat MEI. Diese Liste wird stetig angereichert und erneuert, erhebt aber keinen Anspruch auf Vollständigkeit.
	Eigene <a href="/vortraege-publikationen/#publikationen">Publikationen</a> aus Beethovens Werkstatt befinden sich unter der entsprechenden Rubrik.
</p>

<div class="filter-toggle-header">
	<button id="bibliografie-filter-toggle" class="bibliografie-filter-toggle-btn">
		<svg class="toggle-icon" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
			<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
		</svg>
		<span>Filter</span>
		<svg class="chevron-icon" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
		</svg>
	</button>
</div>

<div class="bibliografie-filters" id="bibliografie-filters">
	<div class="filter-group">
		<label for="bib-filter-jahr">Jahr:</label>
		<select id="bib-filter-jahr" onchange="filterBibliografie()">
			<option value="">Alle Jahre</option>
		</select>
	</div>

	<div class="filter-group">
		<label for="bib-filter-type">Typ:</label>
		<select id="bib-filter-type" onchange="filterBibliografie()">
			<option value="">Alle Typen</option>
		</select>
	</div>

	<div class="filter-group">
		<label for="bib-filter-sprache">Sprache:</label>
		<select id="bib-filter-sprache" onchange="filterBibliografie()">
			<option value="">Alle Sprachen</option>
		</select>
	</div>

	<div class="filter-group">
		<label for="bib-filter-person">Person:</label>
		<select id="bib-filter-person" onchange="filterBibliografie()">
			<option value="">Alle Personen</option>
		</select>
	</div>

	<div class="filter-group search-group">
		<label for="search-bibliografie">Suche:</label>
		<div class="search-container">
			<input type="text" id="search-bibliografie" placeholder="Titel oder Publikationskontext durchsuchen..." oninput="filterBibliografie()">
			<button type="button" class="search-clear" id="bib-search-clear" title="Suche löschen" onclick="clearBibliografieSearch()">&times;</button>
		</div>
	</div>
</div>

<div class="bibliografie-count" id="bibliografie-count"></div>

<div class="bibliografie-liste">
  {% for bib in site.data.bibliografie.items %}
		{% assign bib_jahr = bib.issued.date-parts[0][0] %}

		{% assign bib_type_label = "" %}
		{% if bib.type == "article-journal" %}{% assign bib_type_label = "Zeitschriftenartikel" %}
		{% elsif bib.type == "chapter" %}{% assign bib_type_label = "Buchbeitrag" %}
		{% elsif bib.type == "book" %}{% assign bib_type_label = "Monografie" %}
		{% elsif bib.type == "paper-conference" %}{% assign bib_type_label = "Konferenzbeitrag" %}
		{% elsif bib.type == "broadcast" %}{% assign bib_type_label = "Rundfunkbeitrag" %}
		{% elsif bib.type == "document" %}{% assign bib_type_label = "Dokument" %}
		{% elsif bib.type == "entry-dictionary" %}{% assign bib_type_label = "Lexikonartikel" %}
		{% elsif bib.type == "webpage" %}{% assign bib_type_label = "Webseite" %}
		{% else %}{% assign bib_type_label = bib.type %}
		{% endif %}

		{% assign doi_url = "" %}
		{% if bib.DOI %}
			{% if bib.DOI contains "http" %}{% assign doi_url = bib.DOI %}
			{% elsif bib.DOI contains "DOI: " %}{% assign doi_url = "https://doi.org/" | append: bib.DOI | remove: "DOI: " %}
			{% else %}{% assign doi_url = "https://doi.org/" | append: bib.DOI %}
			{% endif %}
		{% endif %}

		{% assign bib_autoren_liste = "" %}
		{% for author in bib.author %}
			{% if author.given %}{% assign a_entry = author.family | append: ", " | append: author.given %}{% else %}{% assign a_entry = author.family %}{% endif %}
			{% if bib_autoren_liste != "" %}{% assign bib_autoren_liste = bib_autoren_liste | append: "; " %}{% endif %}
			{% assign bib_autoren_liste = bib_autoren_liste | append: a_entry %}
		{% endfor %}

		<div class="bibliografie-item"
				 data-jahr="{{ bib_jahr }}"
				 data-type="{{ bib.type | escape }}"
				 data-sprache="{{ bib.language | escape }}"
				 data-autoren="{{ bib_autoren_liste | downcase | escape }}"
				 data-titel="{{ bib.title | downcase | escape }}"
				 data-container="{{ bib["container-title"] | default: bib["collection-title"] | downcase | escape }}"
				 data-sortkey="{{ bib_jahr }}">

			<div class="bib-header">
				<h3 class="bib-titel">{%- if bib.URL and bib.URL contains "http" %}<a href="{{ bib.URL }}" target="_blank" rel="noopener noreferrer">{{ bib.title }}</a>{%- else %}{{ bib.title }}{%- endif %}</h3>
				{% if bib_type_label != "" %}<span class="bib-type-badge">{{ bib_type_label }}</span>{% endif %}
			</div>

			<div class="bib-meta">
				<div class="bib-meta-row">
					<span class="bib-autoren">
						{% for author in bib.author %}
							{% unless forloop.first %}, {% endunless %}{% if author.given %}{{ author.given }} {{ author.family }}{% else %}{{ author.family }}{% endif %}
						{% endfor %}
						{% unless bib.author.size > 0 %}{% for ed in bib.editor limit: 3 %}{% unless forloop.first %}, {% endunless %}{% if ed.given %}{{ ed.given }} {{ ed.family }}{% else %}{{ ed.family }}{% endif %}{% endfor %}{% if bib.editor.size > 0 %} (Hg.){% endif %}{% endunless %}
					</span>
				</div>

				<div class="bib-meta-row bib-citation-line">{%- if bib.type == "article-journal" -%}{%- assign bibct = bib["container-title"] | default: bib["collection-title"] -%}{%- if bibct %}In: <em>{{ bibct }}</em>{%- endif %}{%- if bib.volume %}{%- if bibct %}, {%- endif %}Jg.&nbsp;{{ bib.volume }}{%- endif %}{%- if bib.issue %}, H.&nbsp;{{ bib.issue }}{%- endif %}{%- if bib.page %}, S.&nbsp;{{ bib.page }}{%- endif %} ({{ bib_jahr }}){%- elsif bib.type == "chapter" -%}In: {%- for ed in bib.editor limit: 3 %}{%- unless forloop.first %}, {%- endunless %}{%- if ed.given %} {{ ed.given }} {{ ed.family }}{%- else %} {{ ed.family }}{%- endif %}{%- endfor %}{%- if bib.editor.size > 3 %} u.a.{%- endif %}{%- if bib.editor.size > 0 %} (Hg.):{%- endif %}{%- if bib["container-title"] %} <em>{{ bib["container-title"] }}</em>{%- elsif bib["collection-title"] %} <em>{{ bib["collection-title"] }}</em>{%- endif %}{%- if bib["publisher-place"] %}. {{ bib["publisher-place"] }}{%- endif %}{%- if bib.page %}, S.&nbsp;{{ bib.page }}{%- endif %} ({{ bib_jahr }}){%- elsif bib.type == "book" -%}{%- if bib["publisher-place"] and bib.publisher %}{{ bib["publisher-place"] }}: {{ bib.publisher }}{%- elsif bib["publisher-place"] %}{{ bib["publisher-place"] }}{%- elsif bib.publisher %}{{ bib.publisher }}{%- endif %}{% if bib.volume %}, Bd.&nbsp;{{ bib.volume }}{% endif %} ({{ bib_jahr }}){%- elsif bib.type == "paper-conference" -%}In: {%- if bib["container-title"] %} <em>{{ bib["container-title"] }}</em>{%- elsif bib["event-title"] %} <em>{{ bib["event-title"] }}</em>{%- endif %}{%- if bib["publisher-place"] %}. {{ bib["publisher-place"] }}{%- endif %}{%- if bib.page %}, S.&nbsp;{{ bib.page }}{%- endif %} ({{ bib_jahr }}){%- elsif bib.type == "broadcast" or bib.type == "document" or bib.type == "entry-dictionary" or bib.type == "webpage" -%}{%- assign bibct3 = bib["container-title"] | default: bib["collection-title"] -%}{%- if bibct3 %}In: <em>{{ bibct3 }}</em>{%- if bib["publisher-place"] %}. {{ bib["publisher-place"] }}{%- endif %}{%- elsif bib["publisher-place"] %}{{ bib["publisher-place"] }}{%- endif %} ({{ bib_jahr }}){%- endif %}</div>

				{% if doi_url != "" %}
					<div class="bib-doi-line">DOI: <a href="{{ doi_url }}" target="_blank" rel="noopener noreferrer">{{ doi_url }}</a></div>
				{% endif %}
			</div>
		</div>
	{% endfor %}
</div>

</div>

<script>
function capitalizeWords(str) {
	return str.split(' ').map(word =>
		word.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-')
	).join(' ')
}

let bibliografieFiltersVisible = true

function filterBibliografie () {
	const jahrFilter = document.getElementById('bib-filter-jahr').value
	const typeFilter = document.getElementById('bib-filter-type').value
	const spracheFilter = document.getElementById('bib-filter-sprache').value
	const personFilter = document.getElementById('bib-filter-person').value.toLowerCase()
	const searchTerm = document.getElementById('search-bibliografie').value.toLowerCase()

	const clearBtn = document.getElementById('bib-search-clear')
	if (clearBtn) clearBtn.classList.toggle('visible', !!searchTerm)

	const items = document.querySelectorAll('.bibliografie-item')
	let visibleCount = 0

	items.forEach(item => {
		const jahrMatch = !jahrFilter || item.dataset.jahr === jahrFilter
		const typeMatch = !typeFilter || item.dataset.type === typeFilter
		const spracheMatch = !spracheFilter || item.dataset.sprache === spracheFilter
		const personMatch = !personFilter || (item.dataset.autoren || '').includes(personFilter)
		const searchMatch = !searchTerm ||
			(item.dataset.titel || '').includes(searchTerm) ||
			(item.dataset.container || '').includes(searchTerm)

		const visible = jahrMatch && typeMatch && spracheMatch && personMatch && searchMatch
		item.classList.toggle('hidden', !visible)
		if (visible) visibleCount++
	})

	const countEl = document.getElementById('bibliografie-count')
	if (countEl) countEl.textContent = `${visibleCount} von ${items.length} Einträgen`
}

function clearBibliografieSearch () {
	document.getElementById('search-bibliografie').value = ''
	filterBibliografie()
}

function sortBibliografie () {
	const container = document.querySelector('.bibliografie-liste')
	if (!container) return
	const items = Array.from(container.querySelectorAll('.bibliografie-item'))
	items.sort((a, b) => parseInt(b.dataset.sortkey) - parseInt(a.dataset.sortkey))
	items.forEach(item => container.appendChild(item))
}

function populateBibliografieFilterOptions () {
	const items = Array.from(document.querySelectorAll('.bibliografie-item'))

	const typeLabels = {
		'article-journal': 'Zeitschriftenartikel',
		'book': 'Monografie',
		'broadcast': 'Rundfunkbeitrag',
		'chapter': 'Buchbeitrag',
		'document': 'Dokument',
		'entry-dictionary': 'Lexikonartikel',
		'paper-conference': 'Konferenzbeitrag',
		'webpage': 'Webseite'
	}

	const jahre = [...new Set(items.map(i => i.dataset.jahr).filter(Boolean))].sort().reverse()
	const typeKeys = [...new Set(items.map(i => i.dataset.type).filter(Boolean))].sort()
	const sprachen = [...new Set(items.map(i => i.dataset.sprache).filter(Boolean))].sort()
	const personenSet = new Set()

	items.forEach(item => {
		(item.dataset.autoren || '').split(';').forEach(a => {
			const entry = a.trim()
			if (entry) personenSet.add(entry)
		})
	})

	const personen = [...personenSet].sort()

	function fillSelect (id, options, labelFn) {
		const sel = document.getElementById(id)
		if (!sel) return
		const first = sel.options[0]
		sel.innerHTML = ''
		sel.appendChild(first)
		options.forEach(val => {
			const opt = document.createElement('option')
			opt.value = String(val)
			opt.textContent = labelFn ? labelFn(String(val)) : String(val)
			sel.appendChild(opt)
		})
	}

	fillSelect('bib-filter-jahr', jahre)
	fillSelect('bib-filter-type', typeKeys.sort((a, b) => (typeLabels[a] || a).localeCompare(typeLabels[b] || b, 'de')), k => typeLabels[k] || k)
	fillSelect('bib-filter-sprache', sprachen)
	fillSelect('bib-filter-person', personen, val => {
		const parts = val.split(', ')
		return `${capitalizeWords(parts[1] || '')} ${capitalizeWords(parts[0] || '')}`.trim()
	})
}

function toggleBibliografieFilters () {
	const filters = document.getElementById('bibliografie-filters')
	const toggleBtn = document.getElementById('bibliografie-filter-toggle')
	if (filters && toggleBtn) {
		bibliografieFiltersVisible = !bibliografieFiltersVisible
		filters.classList.toggle('collapsed', !bibliografieFiltersVisible)
		toggleBtn.classList.toggle('collapsed', !bibliografieFiltersVisible)
	}
}

window.addEventListener('DOMContentLoaded', function () {
	sortBibliografie()
	populateBibliografieFilterOptions()
	filterBibliografie()

	const toggleBtn = document.getElementById('bibliografie-filter-toggle')
	if (toggleBtn) {
		toggleBtn.addEventListener('click', toggleBibliografieFilters)
	}
})
</script>
