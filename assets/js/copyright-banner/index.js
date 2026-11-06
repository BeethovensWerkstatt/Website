class 
CopyrightBanner extends HTMLElement {
  static observedAttributes = ["owner", "year", "license", "license-url"];
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get owner() {
    return this.getAttribute("owner") ?? "";
  }

  get year() {
    return this.getAttribute("year") ?? "";
  }

  get license() {
    return this.getAttribute("license") ?? "";
  }

  get licenseUrl() {
    return this.getAttribute("license-url") ?? "";
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font: 14px/1.4 system-ui, sans-serif;
          color: #333;
        }

        .banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: #f4f4f5;
          border-top: 1px solid #ddd;
          user-select: none;
        }

        dialog {
          border: none;
          border-radius: 10px;
          padding: 0;
          max-width: min(680px, 90vw);
          max-height: 80vh;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        dialog::backdrop {
          background: rgba(0, 0, 0, 0.45);
        }

        .modal {
          display: flex;
          flex-direction: column;
          max-height: 80vh;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 18px;
          border-bottom: 1px solid #e5e5e5;
        }

        h2 {
          margin: 0;
          font-size: 18px;
        }

        .close {
          border: none;
          background: transparent;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          color: #555;
        }

        .content {
          padding: 18px;
          overflow: auto;
        }
      </style>

      <div class="banner" part="banner" title="Doppelklick für Details">
        <span class="text"></span>
      </div>

      <dialog>
        <div class="modal">
          <header>
            <h2>Copyright</h2>
            <button class="close" aria-label="Schließen">&times;</button>
          </header>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </dialog>
    `;

    this.banner = this.shadowRoot.querySelector(".banner");
    this.dialog = this.shadowRoot.querySelector("dialog");
    this.closeButton = this.shadowRoot.querySelector(".close");

    this.banner.addEventListener("dblclick", () => this.openModal());
    this.closeButton.addEventListener("click", () => this.closeModal());
    this.dialog.addEventListener("click", (event) => {
      if (event.target === this.dialog) this.closeModal();
    });

    const parts = [
      `© ${this.owner}`,
      this.year,
      this.license
    ].filter(Boolean);

    this.shadowRoot.querySelector(".text").textContent = parts.join(" · ");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get owner() {
    return this.getAttribute("owner") ?? "";
  }

  set owner(value) {
    this.setAttribute("owner", value);
  }

  get year() {
    return this.getAttribute("year") ?? String(new Date().getFullYear());
  }

  set year(value) {
    this.setAttribute("year", value);
  }

  get license() {
    return this.getAttribute("license") ?? "";
  }

  set license(value) {
    this.setAttribute("license", value);
  }

  get licenseUrl() {
    return this.getAttribute("license-url") ?? "";
  }

  set licenseUrl(value) {
    this.setAttribute("license-url", value);
  }

  openModal() {
    if (this.children.length > 0) {
      this.dialog.showModal();
    }
  }

  closeModal() {
    this.dialog.close();
  }
}

customElements.define("copyright-banner", CopyrightBanner);
