/**
 * Digital Facsimile - Main Entry Point
 * 
 * A single-page application (SPA) island built with Web Components and the History API.
 * Provides SPA-like navigation with clean URLs and browser history support.
 * 
 * Requirements: Web server (does not work with file:// protocol)
 * 
 * Usage:
 *   <script type="module" src="assets/js/vide-facs/index.js"></script>
 */

import { VideFacs } from '../../../vide-component-facsimile/src/vide-facs.js';
import { VideFacsNav } from '../../../vide-component-facsimile/src/vide-facs-nav.js';
import { VideFacsContent } from '../../../vide-component-facsimile/src/vide-facs-content.js';
import { VideFacsRouter } from '../../../vide-component-facsimile/src/vide-facs-router.js';
// CSS is loaded via <link> in HTML, not imported in JS

// Make VideFacsRouter globally accessible for programmatic navigation
window.VideFacsRouter = VideFacsRouter;

// Register Custom Elements
// Only register if not already defined (prevents errors on hot reload)
if (!customElements.get('vide-facs')) {
  customElements.define('vide-facs', VideFacs);
}
if (!customElements.get('vide-facs-nav')) {
  customElements.define('vide-facs-nav', VideFacsNav);
}
if (!customElements.get('vide-facs-content')) {
  customElements.define('vide-facs-content', VideFacsContent);
}
if (!customElements.get('vide-facs-router')) {
  customElements.define('vide-facs-router', VideFacsRouter);
}

console.log('[VideFacs] Components registered successfully');
