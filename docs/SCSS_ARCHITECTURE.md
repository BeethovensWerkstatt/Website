# SCSS Architecture Documentation

## File Structure

The SCSS codebase has been reorganized into a modular architecture for better maintainability and organization:

```
_sass/
├── main.scss            # Main entry point - imports all modules
├── _variables.scss      # Global variables and configuration
├── _fonts.scss          # Font declarations (@font-face)
├── _base.scss           # Base styles, typography, and resets
├── _header.scss         # Header and navigation styles
├── _footer.scss         # Footer styles
├── _carousel.scss       # Hero carousel styles and animations
├── _components.scss     # Homepage components (research areas, news)
└── _responsive.scss     # Responsive design and media queries
```

## Module Descriptions

### 1. `main.scss` - Main Entry Point
- Imports all modular SCSS files in the correct order
- Acts as the central coordination file
- Imported by `assets/main.scss`

### 2. `_variables.scss` - Global Configuration
- **Colors**: Brand colors, text colors, backgrounds
- **Typography**: Font families, sizes, line heights
- **Spacing**: Consistent spacing units
- **Breakpoints**: Responsive design breakpoints
- **Component Variables**: Reusable values for components
- **Z-index**: Layer management

### 3. `_fonts.scss` - Font Declarations
- All `@font-face` declarations for local fonts
- Open Sans font files in different weights
- Font loading optimization with `font-display: swap`

### 4. `_base.scss` - Foundation Styles
- CSS reset and box-sizing
- Base typography (headings, paragraphs, links)
- Wrapper classes and layout foundations
- Content wrapper styles

### 5. `_header.scss` - Navigation
- Site header and title styles
- Desktop navigation menu
- Dropdown menu functionality
- Mobile hamburger menu
- Responsive navigation behavior

### 6. `_footer.scss` - Footer Styles
- Footer layout and typography
- Contact information styling
- Funding and partner information
- Footer-specific responsive adjustments

### 7. `_carousel.scss` - Hero Carousel
- Auto-sliding carousel with smooth transitions
- Navigation buttons and indicators
- Touch/swipe support and responsive scaling
- Textured background gradients and animations
- Mobile-optimized controls and spacing

### 8. `_components.scss` - Page Components
- Research areas grid
- News section and post previews
- Reusable page components

### 9. `_responsive.scss` - Media Queries
- Mobile-first responsive design
- Tablet-specific adjustments
- Large screen optimizations
- Centralized breakpoint management

## Benefits of This Architecture

### ✅ **Maintainability**
- Each file has a single responsibility
- Easy to locate specific styles
- Changes are isolated to relevant modules

### ✅ **Scalability** 
- Easy to add new components
- Variables ensure consistency across modules
- Clear separation of concerns

### ✅ **Collaboration**
- Multiple developers can work on different files
- Reduced merge conflicts
- Clear file naming conventions

### ✅ **Performance**
- Same compiled output as before
- Better organization doesn't affect loading times
- Easier to identify unused styles

### ✅ **Debugging**
- Easier to find specific styles
- Clear file structure matches component hierarchy
- Better source maps in development

## Usage Guidelines

### Adding New Styles
1. **Variables**: Add to `_variables.scss` if reusable
2. **Components**: Add to `_components.scss` or create new module
3. **Layout**: Add to appropriate layout file (`_header.scss`, `_footer.scss`)
4. **Responsive**: Add to `_responsive.scss` for media queries

### Modifying Existing Styles
1. Identify the correct module based on the style's purpose
2. Use existing variables when possible
3. Follow the established naming conventions
4. Test responsive behavior after changes

### Import Order
The current import order in `custom.scss` should be maintained:
1. Variables (configuration)
2. Fonts (font declarations)
3. Base (foundation styles)
4. Layout components (header, footer)
5. Page components (homepage sections)
6. Responsive (media queries)

This modular architecture provides a solid foundation for maintaining and extending the Beethovens Werkstatt website styles.
