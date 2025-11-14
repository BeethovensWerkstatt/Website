/**
 * Test1 SPA Island - Main Entry Point
 * 
 * A single-page application (SPA) island built with Web Components and the History API.
 * Provides SPA-like navigation with clean URLs and browser history support.
 * 
 * Requirements: Web server (does not work with file:// protocol)
 * 
 * Usage:
 *   <script type="module" src="assets/js/test1-spa/index.js"></script>
 */

import { Test1App } from './Test1App.js';
import { Test1Nav } from './Test1Nav.js';
import { Test1Content } from './Test1Content.js';
import { Test1Section } from './Test1Section.js';
import { Test1Router } from './Test1Router.js';

// Make Test1Router globally accessible for programmatic navigation
window.Test1Router = Test1Router;

// Register Custom Elements
// Only register if not already defined (prevents errors on hot reload)
if (!customElements.get('test1-app')) {
  customElements.define('test1-app', Test1App);
}
if (!customElements.get('test1-nav')) {
  customElements.define('test1-nav', Test1Nav);
}
if (!customElements.get('test1-content')) {
  customElements.define('test1-content', Test1Content);
}
if (!customElements.get('test1-section')) {
  customElements.define('test1-section', Test1Section);
}

// Router is initialized by Test1App component when it connects
// Make it globally accessible for demo buttons
window.router = null;
