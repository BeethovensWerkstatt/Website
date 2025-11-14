/**
 * Test1App Component
 * Main container component for the Test1 SPA island
 */
export class Test1App extends HTMLElement {
  constructor() {
    super();
    this.router = null;
  }

  connectedCallback() {
    // Create container
    const container = document.createElement('div');
    container.className = 'test1-container';
    
    // Create and append child components
    const nav = document.createElement('test1-nav');
    const content = document.createElement('test1-content');
    
    container.appendChild(nav);
    container.appendChild(content);
    this.appendChild(container);

    // Wait for child components to connect, then initialize router
    setTimeout(() => {
      // Test1Router is imported globally via index.js
      const Test1Router = window.Test1Router;
      this.router = new Test1Router(this);
      window.router = this.router;
    }, 100);
  }
}
