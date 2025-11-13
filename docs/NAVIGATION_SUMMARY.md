# Navigation Structure - Beethovens Werkstatt Website

## Complete Menu Recreation

Based on the analysis of https://beethovens-werkstatt.de, I have recreated the complete navigation structure with all main pages and content.

### 🧭 **Main Navigation Menu**

#### **HOME** (`/`)
- Homepage with hero carousel (2 auto-advancing slides)
- Research areas overview
- Latest news and announcements
- Project introduction

#### **PROJEKT** (`/projekt/`) **[DROPDOWN]**
Main menu item with submenu:
- **Projektübersicht** (`/projekt/`) - Complete project description
- **Abschlussberichte** (`/abschlussberichte/`) - Module completion reports
- **Dokumentation** (`/documentation/`) - Technical documentation

#### **MODULE** (`/module/`) **[DROPDOWN]**
Main menu item with submenu:
- **Modulübersicht** (`/module/`) - Overview of all modules
- **Modul 1** (`/modul-1/`) - Variantendarstellung in symphonischen, kammermusikalischen und vokalen Werken
- **Modul 2** (`/modul-2/`) - Beethoven als Bearbeiter eigener Werke
- **Modul 3** (`/modul-3/`) - Auf der Suche nach dem Werktext
- **Modul 4** (`/modul-4/`) - Skizzenbuch-Edition
- **Modul 5** (`/modul-5/`) - Kombination von Editionskonzepten

#### **GLOSSAR** (`/glossar/`)
- Comprehensive philological and technical terminology
- Alphabetical listing of all project-specific terms
- Definitions for genetic text criticism concepts
- Digital humanities and MEI-related terminology

#### **NEWS** (`/news/`)
- Chronological listing of events and updates
- Conference presentations and workshops
- Project milestones and publications
- Academic activities and collaborations

### 🎨 **Visual Design & Styling**

**Navigation Typography:**
- Font Size: 12px (compact and professional)
- Font Weight: 600 (semi-bold for emphasis)
- Letter Spacing: 1px (increased readability)
- Text Transform: Uppercase
- Text Color: #4a4a4a (soft dark gray)
- Hover Color: #c93b22 (brand red)
- Item Spacing: 35px between menu items

**Dropdown Menus:**
- Background: White with subtle shadow (0 4px 12px rgba(0,0,0,0.1))
- Border: 1px solid #e0e0e0
- Border Radius: 2px
- Min Width: 180px
- Hover Bridge: 5px invisible area to prevent closing issues
- Link Padding: 10px 16px
- Link Font Size: 11px
- Link Color: #555, Hover: #c93b22
- Hover Background: #f8f8f8

**Header Layout:**
- Height: 70px (compact)
- Logo Height: 45px
- Max Width: 1200px (centered)
- Padding: 10px 0

**Mobile Navigation:**
- Hamburger menu for screens < 768px
- Touch-friendly dropdown expansion
- Background: Brand color (#c93b22)
- Nested dropdown items with darker background

**Layout Elements:**
- Hero section with project description
- Two-column research areas grid
- News section with styled article previews
- Academic content formatting
- Professional footer with contact and funding info

### 📱 **Mobile Responsive**
- Collapsible navigation menu
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

### 🔗 **Content Structure**
All pages contain:
- German language content matching the original site
- Academic writing style appropriate for research project
- Proper internal linking structure
- SEO-optimized metadata
- Accessible markup and navigation

### 🛠 **Technical Implementation**
- Jekyll-based static site
- Multi-architecture Docker support (x86_64 and ARM64/Apple M1)
- Custom SCSS styling system
- Minima theme customization
- MEI and Digital Humanities focus

The website now provides a complete recreation of the original Beethovens Werkstatt navigation and content structure while maintaining modern Jekyll functionality and cross-platform Docker development support.
