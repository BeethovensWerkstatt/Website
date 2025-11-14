# Test1 SPA Island

A self-contained single-page application (SPA) island built with native Web Components and the History API. This module provides a complete SPA experience within a specific section of a static site.

## Features

✅ **Native Web Components** - No framework dependencies  
✅ **Clean URLs** - Uses History API for proper URLs  
✅ **No Page Reloads** - Smooth client-side navigation  
✅ **Browser History** - Full back/forward button support  
✅ **Shareable Permalinks** - Direct links work correctly  
✅ **Modular Architecture** - Easy to extract and reuse  

## Architecture

```
test1-spa/
├── index.js           # Main entry point, registers components
├── Test1App.js        # Root container component
├── Test1Nav.js        # Navigation component
├── Test1Content.js    # Content display component
├── Test1Section.js    # Generic section wrapper
├── Test1Router.js     # History API router
├── styles.scss        # Component styles (SCSS)
└── README.md          # This file
```

## Components

### Test1App
Main container component that initializes the SPA and creates the router.

**Usage:**
```html
<test1-app></test1-app>
```

### Test1Nav
Navigation bar component with automatic active state management.

### Test1Content
Content container that displays routed views.

### Test1Section
Generic wrapper for creating standardized sections.

### Test1Router
Handles client-side routing using the History API.

**Methods:**
- `navigate(path)` - Navigate to a new path within the SPA
- `route(path)` - Route to view based on path
- `getCurrentPath()` - Get current path relative to base

## Usage

### In Jekyll/Static Site

1. **Import the styles in your main SCSS:**
```scss
@import '../assets/js/test1-spa/styles';
```

2. **Add the module script to your page:**
```html
<script type="module" src="{{ '/assets/js/test1-spa/index.js' | relative_url }}"></script>
```

3. **Add the component tag:**
```html
<test1-app></test1-app>
```

4. **Configure 404 redirect** (for direct URL access):
```javascript
// In 404.html
if (path.startsWith('/test1/') && path !== '/test1/') {
  const subPath = path.slice('/test1'.length);
  window.location.replace('/test1/?_path=' + encodeURIComponent(subPath));
}
```

### Programmatic Navigation

```javascript
// Navigate to a path
window.router.navigate('/test1/section1/');

// Navigate with button
<button onclick="window.router.navigate('/test1/section2/')">
  Go to Section 2
</button>
```

### Creating Links

Use the `data-spa-link` attribute for links that should be handled by the SPA:

```html
<a href="/test1/section1/" data-spa-link>Section 1</a>
```

## Configuration

### Base Path
The base path is configured in `Test1Router.js`:
```javascript
this.basePath = '/test1';
```

Change this to match your deployment URL structure.

### Routes
Add custom routes in `Test1Router.route()`:
```javascript
route(path) {
  const segments = path.split('/').filter(s => s);
  
  if (segments[0] === 'my-section') {
    this.renderMySection(segments.slice(1));
  }
  // ... more routes
}
```

## Extracting to Separate Repository

This module is designed to be easily extracted:

1. Copy the entire `test1-spa/` folder
2. Update import paths if needed
3. Rename components (Test1 → YourName)
4. Update the base path in the router
5. Add your own routes and views

## Browser Support

- Chrome/Edge 67+
- Firefox 63+
- Safari 10.1+
- All modern browsers with Web Components support

## Requirements

- **Web Server Required** - Does not work with `file://` protocol
- The History API requires a server that can handle the 404 redirect logic

## Example Deployment

### Development
```bash
# Jekyll
bundle exec jekyll serve

# Or any static server
npx http-server
python -m http.server 8000
```

### Production
Deploy to any static hosting service that supports:
- Custom 404 handling
- Serving index.html for non-file routes

Examples: Netlify, Vercel, GitHub Pages, etc.

## License

[Your License Here]

## Credits

Built for the Beethovens Werkstatt project.
