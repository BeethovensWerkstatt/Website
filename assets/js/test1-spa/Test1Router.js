/**
 * Test1Router
 * Client-side router using the History API for the Test1 SPA island
 */
export class Test1Router {
  constructor(appElement) {
    this.basePath = '/test1';
    this.app = appElement;
    this.contentEl = appElement.querySelector('test1-content');
    this.navEl = appElement.querySelector('test1-nav');
    
    if (!this.contentEl || !this.navEl) {
      console.error('SPA components not found');
      return;
    }
    
    this.init();
  }

  init() {
    // Check for ?_path parameter (from 404 redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('_path');
    
    if (pathParam) {
      // Restore clean URL and route
      const cleanUrl = this.basePath + pathParam;
      history.replaceState({ path: pathParam }, '', cleanUrl);
      this.route(pathParam);
    } else {
      // Normal initial route
      this.route(this.getCurrentPath());
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.route(this.getCurrentPath());
    });

    // Intercept clicks on SPA links (use delegation on app element)
    this.app.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-spa-link]');
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });
  }

  /**
   * Get the current path relative to basePath
   */
  getCurrentPath() {
    const fullPath = window.location.pathname;
    
    // Remove basePath from the beginning
    if (fullPath.startsWith(this.basePath)) {
      return fullPath.slice(this.basePath.length) || '/';
    }
    
    return '/';
  }

  /**
   * Navigate to a new path within the SPA
   * @param {string} path - Path (can be absolute or relative to basePath)
   */
  navigate(path) {
    // If path includes basePath, extract the relative portion
    if (path.startsWith(this.basePath)) {
      path = path.slice(this.basePath.length) || '/';
    }
    
    // Ensure path starts with /
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    const fullUrl = this.basePath + path;
    
    // Update browser history
    history.pushState({ path }, '', fullUrl);
    
    // Route to new content
    this.route(path);
  }

  /**
   * Route to the appropriate view based on path
   * @param {string} path - Current path
   */
  route(path) {
    // Parse path segments
    const segments = path.split('/').filter(s => s);
    
    // Route to appropriate view
    if (segments.length === 0) {
      this.renderHome();
    } else if (segments[0] === 'section1') {
      this.renderSection1(segments.slice(1));
    } else if (segments[0] === 'section2') {
      this.renderSection2(segments.slice(1));
    } else if (segments[0] === 'section3') {
      this.renderSection3(segments.slice(1));
    } else {
      this.renderNotFound(path);
    }

    // Update active navigation
    this.updateActiveNav(segments[0] || 'home');
  }

  /**
   * Update active navigation item
   */
  updateActiveNav(section) {
    this.navEl.setActive(section);
  }

  /**
   * Render home view
   */
  renderHome() {
    this.contentEl.setContent(`
      <div class="spa-view">
        <h1>Test 1 - SPA Island with Web Components</h1>
        <p>Welcome to the Test 1 section. This is a single-page application (SPA) island built with Web Components.</p>
        
        <h2>Features</h2>
        <ul>
          <li>✅ Native Web Components (no framework)</li>
          <li>✅ Clean URLs with History API</li>
          <li>✅ No page reloads on navigation</li>
          <li>✅ Browser back/forward support</li>
          <li>✅ Shareable permalinks</li>
          <li>✅ Encapsulated, reusable components</li>
        </ul>

        <h2>Quick Links</h2>
        <ul>
          <li><a href="/test1/section1/" data-spa-link>Go to Section 1</a></li>
          <li><a href="/test1/section1/item1/" data-spa-link>Section 1 - Item 1</a></li>
          <li><a href="/test1/section2/example/" data-spa-link>Section 2 - Example</a></li>
          <li><a href="/test1/section3/demo/" data-spa-link>Section 3 - Demo</a></li>
        </ul>

        <h2>Web Components</h2>
        <p>This island uses custom elements:</p>
        <ul>
          <li><code>&lt;test1-app&gt;</code> - Main application container</li>
          <li><code>&lt;test1-nav&gt;</code> - Navigation component</li>
          <li><code>&lt;test1-content&gt;</code> - Content container</li>
          <li><code>&lt;test1-section&gt;</code> - Section wrapper</li>
        </ul>

        <h2>Try It Out</h2>
        <p>Click any link above and notice:</p>
        <ul>
          <li>The page doesn't reload</li>
          <li>The URL changes in the browser bar</li>
          <li>You can use the back/forward buttons</li>
          <li>You can copy and share the URL</li>
          <li>Components update smoothly</li>
        </ul>
      </div>
    `);
  }

  /**
   * Render Section 1
   */
  renderSection1(segments) {
    const item = segments[0] || null;
    
    this.contentEl.setContent(`
      <div class="spa-view">
        <h1>Section 1${item ? ': ' + item : ''}</h1>
        <p>This is Section 1 of the SPA. ${item ? 'You are viewing item: <strong>' + item + '</strong>' : 'Select an item below:'}</p>

        <h2>Items in Section 1</h2>
        <ul>
          <li><a href="/test1/section1/item1/" data-spa-link>Item 1</a></li>
          <li><a href="/test1/section1/item2/" data-spa-link>Item 2</a></li>
          <li><a href="/test1/section1/item3/" data-spa-link>Item 3</a></li>
        </ul>

        <p><a href="/test1/" data-spa-link>← Back to Home</a></p>

        ${item ? `
          <div class="item-details">
            <h3>Item Details: ${item}</h3>
            <p>Here you could display detailed information about "${item}".</p>
            <p>The URL is: <code>${this.basePath}/section1/${item}/</code></p>
            <p>This URL is shareable and will load this exact view when accessed directly.</p>
          </div>
        ` : ''}
      </div>
    `);
  }

  /**
   * Render Section 2
   */
  renderSection2(segments) {
    const item = segments[0] || null;
    
    this.contentEl.setContent(`
      <div class="spa-view">
        <h1>Section 2${item ? ': ' + item : ''}</h1>
        <p>This is Section 2 of the SPA. ${item ? 'Viewing: <strong>' + item + '</strong>' : 'Choose an option:'}</p>

        <h2>Options in Section 2</h2>
        <ul>
          <li><a href="/test1/section2/alpha/" data-spa-link>Alpha</a></li>
          <li><a href="/test1/section2/beta/" data-spa-link>Beta</a></li>
          <li><a href="/test1/section2/gamma/" data-spa-link>Gamma</a></li>
        </ul>

        <p><a href="/test1/" data-spa-link>← Back to Home</a></p>

        ${item ? `
          <div class="item-details">
            <h3>Viewing: ${item}</h3>
            <p>Dynamic content for "${item}" in Section 2.</p>
            <button onclick="window.router.navigate('/test1/section3/${item}/')">
              Go to Section 3 with same item →
            </button>
          </div>
        ` : ''}
      </div>
    `);
  }

  /**
   * Render Section 3
   */
  renderSection3(segments) {
    const item = segments[0] || null;
    
    this.contentEl.setContent(`
      <div class="spa-view">
        <h1>Section 3${item ? ': ' + item : ''}</h1>
        <p>This is Section 3 - demonstrating programmatic navigation and Web Components.</p>

        ${item ? `
          <div class="item-details">
            <h3>Item: ${item}</h3>
            <p>This item was passed from another section.</p>
          </div>
        ` : ''}

        <h2>Interactive Demo</h2>
        <div class="demo-controls">
          <button onclick="window.router.navigate('/test1/section1/')">Navigate to Section 1</button>
          <button onclick="window.router.navigate('/test1/section2/demo/')">Navigate to Section 2 (demo)</button>
          <button onclick="window.router.navigate('/test1/')">Navigate to Home</button>
        </div>

        <h2>Web Components Inspector</h2>
        <p>Open your browser's DevTools and inspect the custom elements:</p>
        <ul>
          <li><code>&lt;test1-app&gt;</code></li>
          <li><code>&lt;test1-nav&gt;</code></li>
          <li><code>&lt;test1-content&gt;</code></li>
        </ul>

        <p style="margin-top: 2em;"><a href="/test1/" data-spa-link>← Back to Home</a></p>
      </div>
    `);
  }

  /**
   * Render 404 page
   */
  renderNotFound(path) {
    this.contentEl.setContent(`
      <div class="spa-view">
        <h1>404 - Not Found</h1>
        <p>The path <code>${path}</code> was not found in this SPA.</p>
        <p><a href="/test1/" data-spa-link>← Return to Home</a></p>
      </div>
    `);
  }
}
