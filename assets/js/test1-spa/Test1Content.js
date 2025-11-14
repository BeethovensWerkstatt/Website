/**
 * Test1Content Component
 * Content display component for the Test1 SPA
 */
export class Test1Content extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '<div class="spa-content-wrapper"></div>';
  }

  setContent(html) {
    const wrapper = this.querySelector('.spa-content-wrapper');
    if (wrapper) {
      wrapper.innerHTML = html;
    }
  }
}
