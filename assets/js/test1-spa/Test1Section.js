/**
 * Test1Section Component
 * Generic section wrapper component
 */
export class Test1Section extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Section';
    const content = this.innerHTML;
    
    this.innerHTML = `
      <div class="spa-view">
        <h1>${title}</h1>
        ${content}
      </div>
    `;
  }
}
