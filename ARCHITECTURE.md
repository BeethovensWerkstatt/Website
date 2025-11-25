# Website Architecture Documentation

## Overview

This is a Jekyll-based static website with embedded Web Component SPAs for interactive features. The architecture separates concerns between static content (Jekyll) and dynamic components (Web Components).

## Directory Structure

```
Website/
├── _config.yml                    # Jekyll configuration
├── _includes/                     # Reusable HTML partials
├── _layouts/                      # Page templates
├── _pages/                        # Static content pages
│   ├── vide-facs.md              # Digital facsimile viewer page
│   └── test1.md                  # Test SPA example
├── _posts/                        # Blog/news posts
├── _sass/                         # Site-wide SCSS
├── assets/
│   ├── css/                      # Compiled CSS (generated)
│   ├── js/
│   │   ├── test1-spa/           # Example SPA component (keep as reference)
│   │   └── vendor/              # Third-party libraries
│   ├── fonts/                   # Web fonts
│   └── images/                  # Static images
├── vide-component-facsimile/    # Git submodule (separate repo)
│   ├── src/                     # Component source (excluded from Jekyll)
│   ├── dist/                    # Built component (served by Jekyll)
│   │   ├── index.js            # Entry point
│   │   ├── vide-facs*.js       # Component modules
│   │   └── vide-facs.css       # Component styles
│   └── package.json
├── Dockerfile                    # Docker build for Jekyll
├── docker-compose.yml           # Development server config
└── dev.sh                       # Development helper script
```

## Component Architecture

### Static Site (Jekyll)
- **Purpose**: Content management, SEO, static pages
- **Technology**: Jekyll 4.x, Liquid templates, SCSS
- **Build**: Docker-based for consistency

### Web Components (vide-component-facsimile)
- **Purpose**: Interactive facsimile viewer with OpenSeadragon
- **Technology**: Native Web Components (ES6 modules), History API routing
- **Distribution**: Git submodule for reusability
- **Build**: npm scripts (copies src to dist)

## Data Flow

```
User Request
    ↓
Jekyll renders page with <vide-facs> element
    ↓
Browser loads dist/index.js (ES module)
    ↓
Components register and initialize
    ↓
Router handles navigation via History API
    ↓
OpenSeadragon loads IIIF images
```

## Build Process

### Development
```bash
./dev.sh start
```
1. Builds vide-component-facsimile (npm run build)
2. Starts Jekyll in Docker with live reload
3. Watches for file changes

### Production (Docker)
```dockerfile
# In Dockerfile:
1. Install Ruby, Node.js, dependencies
2. Copy all files including submodule
3. Build component: cd vide-component-facsimile && npm run build
4. Jekyll serves from _site with component in vide-component-facsimile/dist/
```

## Key Design Decisions

### ✅ Submodule for Components
**Rationale**: True separation of concerns, reusability across projects
- Component can be developed/tested independently
- Version control independent of website
- Other projects can use same component

### ✅ ES Modules, No Bundler
**Rationale**: Simplicity, native browser support
- No build complexity (webpack, rollup, etc.)
- Fast rebuild (just copy files)
- Modern browsers handle ES modules natively
- HTTP/2 makes multiple requests efficient

### ✅ Jekyll Includes Submodule dist/
**Rationale**: Clean separation of source and distribution
- `src/` excluded (development only)
- `dist/` served (production artifacts)
- Jekyll config controls what's published

### ✅ Docker for Consistency
**Rationale**: Reproducible builds across environments
- Same Ruby/Node versions everywhere
- No "works on my machine" issues
- Easy CI/CD integration

## File Naming Conventions

- **Components**: PascalCase classes (`VideFacs`, `VideFacsRouter`)
- **Files**: kebab-case (`vide-facs-router.js`)
- **SCSS**: Underscore prefix for partials (`_header.scss`)
- **Pages**: Lowercase with hyphens (`vide-facs.md`)

## Configuration Files

### _config.yml (Jekyll)
```yaml
include:
  - vide-component-facsimile    # Serve submodule content

exclude:
  - vide-component-facsimile/src        # Don't serve source
  - vide-component-facsimile/node_modules
  - vide-component-facsimile/.git
```

### vide-component-facsimile/package.json
```json
{
  "scripts": {
    "build": "npm run build:js && npm run build:css",
    "build:js": "cp -r src/* dist/",
    "build:css": "sass src/styles.scss dist/vide-facs.css"
  }
}
```

## Best Practices

### Adding a New Web Component
1. Create in vide-component-facsimile/src/
2. Export class with `export class ComponentName`
3. Import in src/index.js
4. Register with `customElements.define()`
5. Run `npm run build` in submodule
6. Reference in page: `<component-name></component-name>`

### Updating Styles
1. Edit vide-component-facsimile/src/styles.scss
2. Run `npm run build:css` or `npm run watch:css`
3. Changes appear in dist/vide-facs.css

### Managing the Submodule
```bash
# Update submodule to latest
cd vide-component-facsimile
git pull origin main
cd ..
git add vide-component-facsimile
git commit -m "Update component submodule"

# Clone repo with submodules
git clone --recurse-submodules <repo-url>

# Init submodules in existing clone
git submodule update --init --recursive
```

## Dependencies

### Website
- Ruby 3.1
- Jekyll 4.x
- Bundler 2.5.x
- Docker & Docker Compose

### Component
- Node.js (any recent version)
- Sass 1.69.5+
- OpenSeadragon (loaded via CDN in component)

## Testing

### Local Development
1. `./dev.sh start` - Full development server
2. Navigate to http://localhost:4000/facs/
3. LiveReload auto-refreshes on changes

### Component Testing
The test1-spa serves as a reference implementation and can be used to test Web Component patterns.

## Maintenance Notes

### Keep Clean
- ✅ No generated files in git (dist/, _site/, .sass-cache/)
- ✅ No -dep backup files
- ✅ No orphaned scripts (copy-facs-assets.sh removed)
- ✅ Clear separation: Website repo vs. Component repo

### Regular Updates
- Update Ruby gems: `bundle update`
- Update npm packages in submodule: `cd vide-component-facsimile && npm update`
- Check for Jekyll updates in Gemfile

### Code Organization
- Site-wide styles in `_sass/`
- Component styles in `vide-component-facsimile/src/styles.scss`
- Shared layouts in `_layouts/`
- Reusable includes in `_includes/`

## Troubleshooting

### Component not loading
1. Check browser console for ES module errors
2. Verify `vide-component-facsimile/dist/` exists and has files
3. Run `cd vide-component-facsimile && npm run build`
4. Check Jekyll includes submodule in _config.yml

### Styles not applying
1. Check CSS path in page: `<link rel="stylesheet" href="{{ '/vide-component-facsimile/dist/vide-facs.css' | relative_url }}">`
2. Build CSS: `cd vide-component-facsimile && npm run build:css`
3. Clear browser cache

### Submodule issues
```bash
# Reset submodule
git submodule deinit -f vide-component-facsimile
git submodule update --init

# Update submodule reference
git submodule update --remote
```
