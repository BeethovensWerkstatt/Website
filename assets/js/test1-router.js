/**
 * Test1 SPA Router
 * 
 * A client-side router for the /test1/ section using the History API.
 * Provides SPA-like navigation with clean URLs and browser history support.
 * 
 * Requirements: Web server (does not work with file:// protocol)
 */

class Test1Router {
  constructor() {
    this.basePath = '/test1';
    this.contentEl = document.getElementById('spa-content');
    this.navEl = document.getElementById('spa-navigation');
    
    if (!this.contentEl || !this.navEl) {
      console.error('SPA container elements not found');
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
    
    this.renderNavigation();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.route(this.getCurrentPath());
    });

    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
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
   * @param {string} path - Path relative to basePath (e.g., '/section1/item2')
   */
  navigate(path) {
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
    console.log('Routing to:', path);
    
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
   * Render the navigation menu
   */
  renderNavigation() {
    this.navEl.innerHTML = `
      <nav class="spa-nav">
        <a href="/" data-spa-link data-nav="home">Home</a>
        <a href="/section1/" data-spa-link data-nav="section1">Section 1</a>
        <a href="/section2/" data-spa-link data-nav="section2">Section 2</a>
        <a href="/section3/" data-spa-link data-nav="section3">Section 3</a>
      </nav>
    `;
  }

  /**
   * Update active navigation item
   */
  updateActiveNav(section) {
    const navLinks = this.navEl.querySelectorAll('a[data-nav]');
    navLinks.forEach(link => {
      const navSection = link.getAttribute('data-nav');
      if (navSection === section) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Render home view
   */
  renderHome() {
    this.contentEl.innerHTML = `
      <div class="spa-view">
        <h1>Test 1 - SPA Island Home</h1>
        <p>Welcome to the Test 1 section. This is a single-page application (SPA) island within the Jekyll static site.</p>
        
        <h2>Features</h2>
        <ul>
          <li>✅ Clean URLs with History API</li>
          <li>✅ No page reloads on navigation</li>
          <li>✅ Browser back/forward support</li>
          <li>✅ Shareable permalinks</li>
          <li>✅ Dynamic content updates</li>
        </ul>

        <h2>Quick Links</h2>
        <ul>
          <li><a href="/section1/" data-spa-link>Go to Section 1</a></li>
          <li><a href="/section1/item1/" data-spa-link>Section 1 - Item 1</a></li>
          <li><a href="/section2/example/" data-spa-link>Section 2 - Example</a></li>
          <li><a href="/section3/demo/" data-spa-link>Section 3 - Demo</a></li>
        </ul>

        <h2>Try It Out</h2>
        <p>Click any link above and notice:</p>
        <ul>
          <li>The page doesn't reload</li>
          <li>The URL changes in the browser bar</li>
          <li>You can use the back/forward buttons</li>
          <li>You can copy and share the URL</li>
        </ul>
      </div>
    `;
  }

  /**
   * Render Section 1
   */
  renderSection1(segments) {
    const item = segments[0] || null;
    
    this.contentEl.innerHTML = `
      <div class="spa-view">
        <h1>Section 1${item ? ': ' + item : ''}</h1>
        <p>This is Section 1 of the SPA. ${item ? 'You are viewing item: <strong>' + item + '</strong>' : 'Select an item below:'}</p>

        <h2>Items in Section 1</h2>
        <ul>
          <li><a href="/section1/item1/" data-spa-link>Item 1</a></li>
          <li><a href="/section1/item2/" data-spa-link>Item 2</a></li>
          <li><a href="/section1/item3/" data-spa-link>Item 3</a></li>
        </ul>

        <p><a href="/" data-spa-link>← Back to Home</a></p>

        ${item ? `
          <div class="item-details">
            <h3>Item Details: ${item}</h3>
            <p>Here you could display detailed information about "${item}".</p>
            <p>The URL is: <code>${this.basePath}/section1/${item}/</code></p>
            <p>This URL is shareable and will load this exact view when accessed directly.</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render Section 2
   */
  renderSection2(segments) {
    const item = segments[0] || null;
    
    this.contentEl.innerHTML = `
      <div class="spa-view">
        <h1>Section 2${item ? ': ' + item : ''}</h1>
        <p>This is Section 2 of the SPA. ${item ? 'Viewing: <strong>' + item + '</strong>' : 'Choose an option:'}</p>

        <h2>Options in Section 2</h2>
        <ul>
          <li><a href="/section2/alpha/" data-spa-link>Alpha</a></li>
          <li><a href="/section2/beta/" data-spa-link>Beta</a></li>
          <li><a href="/section2/gamma/" data-spa-link>Gamma</a></li>
        </ul>

        <p><a href="/" data-spa-link>← Back to Home</a></p>

        ${item ? `
          <div class="item-details">
            <h3>Viewing: ${item}</h3>
            <p>Dynamic content for "${item}" in Section 2.</p>
            <button onclick="router.navigate('/section3/${item}/')">
              Go to Section 3 with same item →
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render Section 3
   */
  renderSection3(segments) {
    const item = segments[0] || null;
    
    this.contentEl.innerHTML = `
      <div class="spa-view">
        <h1>Section 3${item ? ': ' + item : ''}</h1>
        <p>This is Section 3 - demonstrating programmatic navigation.</p>

        ${item ? `
          <div class="item-details">
            <h3>Item: ${item}</h3>
            <p>This item was passed from another section.</p>
          </div>
        ` : ''}

        <h2>Interactive Demo</h2>
        <div class="demo-controls">
          <button onclick="router.navigate('/section1/')">Navigate to Section 1</button>
          <button onclick="router.navigate('/section2/demo/')">Navigate to Section 2 (demo)</button>
          <button onclick="router.navigate('/')">Navigate to Home</button>
        </div>

        <p style="margin-top: 2em;"><a href="/" data-spa-link>← Back to Home</a></p>
      </div>
    `;
  }

  /**
   * Render 404 page
   */
  renderNotFound(path) {
    this.contentEl.innerHTML = `
      <div class="spa-view">
        <h1>404 - Not Found</h1>
        <p>The path <code>${path}</code> was not found in this SPA.</p>
        <p><a href="/" data-spa-link>← Return to Home</a></p>
      </div>
    `;
  }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.router = new Test1Router();
  });
} else {
  window.router = new Test1Router();
}
