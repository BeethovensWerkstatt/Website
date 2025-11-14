# SPA Islands Documentation

## Overview

This Jekyll site supports "SPA Islands" - single-page application sections built with **Web Components** that exist within the static site. These sections provide rich, interactive experiences with client-side routing while maintaining the benefits of static site generation for the rest of the site.

### Web Components

The SPA islands use native **Web Components** (Custom Elements) for:
- ✅ **Encapsulation** - Scoped behavior and styling
- ✅ **Reusability** - Components can be composed and reused
- ✅ **Native browser support** - No framework dependencies
- ✅ **Standard HTML** - Use like `<test1-app>`, `<test1-nav>`, etc.
- ✅ **Future-proof** - Built on web standards

## What is an SPA Island?

An SPA Island is a specific section of the website (e.g., `/test1/`) that:
- Loads as a single HTML page
- Uses JavaScript for client-side routing
- Provides SPA-like navigation without page reloads
- Maintains clean, shareable URLs
- Coexists with traditional static pages

## Example: `/test1/`

Visit [http://localhost:4000/test1/](http://localhost:4000/test1/) to see a working example.

### Features Demonstrated

- **Clean URLs**: `/test1/section1/item2/` (no hashes)
- **Client-side routing**: Navigation without page reloads
- **History API**: Browser back/forward buttons work correctly
- **Deep linking**: Direct URLs to sub-sections work
- **Dynamic content**: Content updates without server requests
- **Programmatic navigation**: JavaScript can trigger navigation

### URL Structure

```
/test1/                    # Home view
/test1/section1/           # Section 1 overview
/test1/section1/item1/     # Section 1, specific item
/test1/section2/alpha/     # Section 2, specific item
/test1/section3/demo/      # Section 3, demo
```

All these URLs:
- Load the same HTML page (`/test1/`)
- Are handled by JavaScript routing
- Support browser history
- Can be bookmarked and shared

## Architecture

### File Structure

```
_pages/
  test1.md                      # SPA page (contains <test1-app>)

assets/
  js/
    test1-router.js             # Web Components + Router

_sass/
  _spa.scss                     # SPA styling (for Web Components)

404.html                        # Handles sub-path redirects
```

### Web Components Defined

The `test1-router.js` file defines these custom elements:

- **`<test1-app>`** - Main application container
- **`<test1-nav>`** - Navigation component
- **`<test1-content>`** - Content display component
- **`<test1-section>`** - Section wrapper component (optional)

### How It Works

1. **Initial Load**:
   - User visits `/test1/section1/item2/`
   - Server returns 404 (path doesn't exist as static file)
   - `404.html` detects `/test1/` prefix
   - Redirects to `/test1/?_path=/section1/item2/`

2. **Router Initialization**:
   - `/test1/` page loads
   - `test1-router.js` initializes
   - Router detects `?_path` parameter
   - Uses `history.replaceState()` to restore clean URL
   - Renders appropriate content

3. **Internal Navigation**:
   - User clicks link or button
   - Router intercepts click
   - Uses `history.pushState()` to update URL
   - Renders new content
   - No page reload occurs

4. **Browser Back/Forward**:
   - User clicks back button
   - `popstate` event fires
   - Router detects URL change
   - Renders appropriate content

## Technical Requirements

### Server Required

**⚠️ SPA islands REQUIRE a web server.** They do not work with `file://` protocol.

**Why?**
- 404 redirect mechanism needs server
- History API has `file://` limitations
- Relative path resolution differs

### Development Servers

**Docker (recommended):**
```bash
./dev.sh
```

**Node.js http-server:**
```bash
npm install -g http-server
./dev.sh build
cd _site
http-server -p 4000
```

**Python:**
```bash
./dev.sh build
cd _site
python3 -m http.server 4000
```

## Creating New SPA Islands

### Step 1: Create Page

`_pages/myapp.md`:
```markdown
---
layout: default
title: "My App"
permalink: /myapp/
---

<myapp-root></myapp-root>

<script src="{{ '/assets/js/myapp-router.js' | relative_url }}"></script>
```

### Step 2: Define Web Components & Router

`assets/js/myapp-router.js`:
```javascript
// Define Web Components
class MyAppRoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="myapp-container">
        <myapp-nav></myapp-nav>
        <myapp-content></myapp-content>
      </div>
    `;
    this.router = new MyAppRouter(this);
    window.myAppRouter = this.router;
  }
}

class MyAppNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="app-nav">
        <a href="/" data-spa-link>Home</a>
        <a href="/page1/" data-spa-link>Page 1</a>
      </nav>
    `;
  }
  
  setActive(section) {
    const links = this.querySelectorAll('a');
    links.forEach(link => {
      link.classList.toggle('active', 
        link.getAttribute('href') === '/' + section + '/');
    });
  }
}

class MyAppContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="content-wrapper"></div>';
  }
  
  setContent(html) {
    this.querySelector('.content-wrapper').innerHTML = html;
  }
}

// Register components
customElements.define('myapp-root', MyAppRoot);
customElements.define('myapp-nav', MyAppNav);
customElements.define('myapp-content', MyAppContent);

// Router
class MyAppRouter {
  constructor(appElement) {
    this.basePath = '/myapp';
    this.app = appElement;
    this.contentEl = appElement.querySelector('myapp-content');
    this.navEl = appElement.querySelector('myapp-nav');
    this.init();
  }

  init() {
    // Check for ?_path parameter (from 404 redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('_path');
    
    if (pathParam) {
      const cleanUrl = this.basePath + pathParam;
      history.replaceState({ path: pathParam }, '', cleanUrl);
      this.route(pathParam);
    } else {
      this.route(this.getCurrentPath());
    }

    // Handle back/forward and clicks
    window.addEventListener('popstate', () => {
      this.route(this.getCurrentPath());
    });
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-spa-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });
  }

  getCurrentPath() {
    const fullPath = window.location.pathname;
    if (fullPath.startsWith(this.basePath)) {
      return fullPath.slice(this.basePath.length) || '/';
    }
    return '/';
  }

  navigate(path) {
    if (!path.startsWith('/')) path = '/' + path;
    const fullUrl = this.basePath + path;
    history.pushState({ path }, '', fullUrl);
    this.route(path);
  }

  route(path) {
    // Your routing logic here
    this.contentEl.setContent(`<h1>Page: ${path}</h1>`);
    this.navEl.setActive(path.split('/')[1] || 'home');
  }
}
```

### Step 3: Update 404.html

Add your island to `404.html`:
```javascript
if (path.startsWith('/myapp/') && path !== '/myapp/') {
  const subPath = path.slice('/myapp'.length);
  window.location.replace('/myapp/?_path=' + encodeURIComponent(subPath));
  return;
}
```

### Step 4: Add Styling (Optional)

Create `_sass/_myapp.scss` and import it in `_sass/custom.scss`.

## Best Practices

### 1. Use Data Attributes for Links

```html
<a href="/section1/" data-spa-link>Go to Section 1</a>
```

Intercept with:
```javascript
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-spa-link]');
  if (link) {
    e.preventDefault();
    this.navigate(link.getAttribute('href'));
  }
});
```

### 2. Add Loading States

```javascript
route(path) {
  this.contentEl.innerHTML = '<div class="loading">Loading...</div>';
  // Then render content
}
```

### 3. Handle Errors Gracefully

```javascript
route(path) {
  try {
    // Routing logic
  } catch (error) {
    console.error('Routing error:', error);
    this.renderError();
  }
}
```

### 4. Update Page Title

```javascript
route(path) {
  document.title = 'My App - ' + this.getPageTitle(path);
  // Render content
}
```

### 5. Add Transition Animations

```scss
.spa-view {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Debugging

### Check Router Initialization
```javascript
console.log('Router initialized:', window.router);
```

### Log Route Changes
```javascript
route(path) {
  console.log('Routing to:', path);
  // Your routing logic
}
```

### Test 404 Redirect
Visit a non-existent sub-path directly:
```
http://localhost:4000/test1/nonexistent/path/
```

Should redirect to:
```
http://localhost:4000/test1/?_path=/nonexistent/path/
```

Then restore clean URL:
```
http://localhost:4000/test1/nonexistent/path/
```

## Limitations

1. **Server required** - Cannot run on `file://` protocol
2. **Initial redirect delay** - Small delay on direct sub-path access (due to 404 → redirect)
3. **SEO considerations** - Sub-paths are not pre-rendered (consider SSG/SSR for SEO-critical content)
4. **Browser compatibility** - Requires History API support (all modern browsers)

## When to Use SPA Islands

**Good use cases:**
- ✅ Interactive tools and applications
- ✅ Data visualization dashboards
- ✅ Multi-step forms or wizards
- ✅ Document viewers with navigation
- ✅ Internal admin interfaces
- ✅ Real-time collaborative features

**Not recommended for:**
- ❌ Primary content pages (use static pages)
- ❌ SEO-critical landing pages
- ❌ Simple content that doesn't need interactivity
- ❌ Content that should work offline/without JavaScript

## Resources

- **Example**: [/test1/](/test1/) - Working SPA island
- **Source**: `_pages/test1.md`, `assets/js/test1-router.js`
- **MDN - History API**: [https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

---

**Created**: November 13, 2025  
**Status**: Implemented and tested
