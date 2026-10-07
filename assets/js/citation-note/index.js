

class CitationNote extends HTMLElement {
  static observedAttributes = ["doi-version", "doi-overview", "titleText", "author", "version", "date", "href", "category"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log(8945,"CitationNote constructor called");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get doiVersion() {
    return this.getAttribute("doi-version") ?? "";
  }

  get doiOverview() {
    return this.getAttribute("doi-overview") ?? "";
  }

  get titleText() {
    return this.getAttribute("titleText") ?? "";
  }

  get authorText() {
    return this.getAttribute("author") ?? "";
  }

  get version() {
    return this.getAttribute("version") ?? "";
  }

  get date() {
    return this.getAttribute("date") ?? "";
  }

  get href() {
    return this.getAttribute("href") ?? "";
  }

  get category() {
    return this.getAttribute("category") ?? "";
  }

  doiUrl(doi) {
    if (doi) {
      return `https://doi.org/${doi.replace(/^https?:\/\/doi\.org\//i, "").replace(/^doi:/i, "")}`;
    }
    return "";
  }

  render() {
    const doiUrl = this.doiUrl(this.doi);
    this.shadowRoot.innerHTML = `
<style>
  .citation-box {
    background: #f9f2f1;
    border: 1px solid #e0d6d5;
    border-radius: 5px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .citation-box h3 {
    color: #c93b22;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
  }

  .citation-content p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .citation-content .doi-pending {
    color: #856404;
    background: #fff3cd;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    border-left: 3px solid #ffc107;
    margin-top: 0.75rem;
  }

  .doi-links {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e0d6d5;
  }

  .doi-links p {
    margin-bottom: 0.3rem;
    font-size: 0.9em;
  }

  .doi-links a {
    color: #c93b22;
    text-decoration: none;
    font-family: monospace;
  }

  .doi-links a:hover {
    text-decoration: underline;
    color: #a12e1a;
  }
</style>

<div class="citation-box">
  <h3>Zitierhinweis neu</h3>
  <div class="citation-content">
  <div>Version DOI: ${ this.doiVersion || 'nicht verfügbar' }</div>
  <div>Übersicht DOI: ${ this.doiOverview || 'nicht verfügbar' }</div>
  <div>Artikel DOI: ${ this.doiArticle || 'nicht verfügbar' }</div>
  <div>Title: ${ this.titleText }</div>
  <div>Version: ${ this.version }</div>
  <div>Datum: ${ this.date ? new Date(this.date).toLocaleDateString('de-DE') : '' }</div>
  <div>Author: ${ this.authorText }</div>
  <div>Bereich: ${ this.category || 'nicht verfügbar' }</div>
  <p>
    <strong>${this.escapeHtml(this.authorText || "Beethovens Werkstatt")}:</strong>
    „${this.escapeHtml(this.titleText)}“
    ${this.version ? ` Version ${this.escapeHtml(this.version)}${this.date ? ` (${new Date(this.date).toLocaleDateString('de-DE')})` : ''}` : ''}
    in: Beethovens Werkstatt${this.category ? ` - ${this.escapeHtml(this.category)}` : ''}${this.doiVersion ? `, DOI: <a href="${this.doiUrl(this.doiVersion)}" target="_blank">${this.escapeHtml(this.doiVersion)}</a>` : ''}
  </p>
  ${!this.doiVersion && !this.doiArticle ? `<div class="doi-pending"><em>DOI für diese Version wird noch vergeben</em></div>` : ''}
  ${this.doiOverview
    ? `<div class="doi-links">
        <p>DOI aller Versionen: <a href="${this.doiUrl(this.doiOverview)}" target="_blank">${this.escapeHtml(this.doiOverview)}</a></p>
      </div>`
    : ""}
  </div>
</div>
`;
  }

  escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  escapeAttr(value) {
    return this.escapeHtml(value);
  }
}

console.log(8945, "Defining custom element: citation-note");
customElements.define("citation-note", CitationNote);
