# Beethovens Werkstatt – Website

This repository contains the source code for the [https://beethovens-werkstatt.de](https://beethovens-werkstatt.de) website.

**Framework**: Jekyll with Docker  
**Documentation**: See [`docs/`](./docs/) folder for detailed technical documentation

## Quick Start

This project uses Docker for development, which means you don't need to install Ruby or Jekyll locally. The Docker setup works on both Intel (x86_64) and Apple Silicon (ARM64) Macs.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (includes Docker Compose)
- Git

### Setup & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BeethovensWerkstatt/Website.git
   cd Website
   ```

2. **Start the development server**:
   ```bash
   ./dev.sh
   ```
   Or explicitly:
   ```bash
   ./dev.sh start
   ```

3. **View the site**:  
   Open [http://localhost:4000](http://localhost:4000) in your browser

4. **Stop the server**:  
   Press `Ctrl+C` in the terminal

That's it! The site will automatically reload when you make changes to files.

## Development Commands

The `dev.sh` script provides convenient commands for common tasks:

```bash
./dev.sh start     # Start development server (default command)
./dev.sh build     # Build site for production (_site/ folder)
./dev.sh clean     # Clean up Docker containers and volumes
./dev.sh rebuild   # Rebuild Docker image from scratch
./dev.sh shell     # Open shell inside Jekyll container
./dev.sh logs      # Show container logs
./dev.sh help      # Show all available commands
```

### Examples

```bash
# Start development (default - can omit 'start')
./dev.sh

# Build production site
./dev.sh build

# Clean everything and rebuild
./dev.sh clean
./dev.sh rebuild
./dev.sh start
```

## Direct Docker Commands

If you prefer to use Docker Compose directly instead of the helper script:

```bash
# Start development server
docker-compose up jekyll

# Start in background
docker-compose up -d jekyll

# Build for production
docker-compose --profile build up build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f jekyll

# Run one-off commands
docker-compose run --rm jekyll bundle install
docker-compose run --rm jekyll bundle exec jekyll doctor
```

### Features

#### Docker Development
- **Live Reload**: Changes to files are automatically reflected in the browser
- **Consistent Environment**: Same Ruby and Jekyll versions for everyone
- **No Local Dependencies**: No need to install Ruby, Jekyll, or manage versions
- **Multi-Architecture**: Works on ARM64 (Apple Silicon) and x86_64
- **Port Forwarding**: Access the site at `localhost:4000`
- **Volume Mounting**: Changes to your local files are immediately available in the container

#### Website Features
- **Hero Carousel**: Auto-advancing image slider with 2 customizable slides
- **Two-Level Navigation**: Dropdown menus for PROJEKT and MODULE sections
- **Modular SCSS**: 8 organized stylesheets for maintainable CSS
- **Local Fonts**: Open Sans served locally (no external requests)
- **Responsive Design**: Mobile-friendly navigation and layouts
- **Original Design Match**: Faithful recreation of beethovens-werkstatt.de styling

## Without Docker (Alternative)

If you prefer not to use Docker, you can run Jekyll directly:

**Requirements**: Ruby 3.1+, Bundler

```bash
bundle install
bundle exec jekyll serve
```

Site will be available at [http://localhost:4000](http://localhost:4000)

## Deployment

The site can be deployed using various methods:
- **GitHub Pages**: Push to `gh-pages` branch or configure in repository settings
- **Static hosting**: Deploy contents of `_site/` folder after running `./dev.sh build`
- **Custom server**: Any static file server can host the built site

## Project Structure

```
Website/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable page components (header, footer)
├── _layouts/                # Page layouts (default, post)
├── _pages/                  # All content pages (organized)
├── _posts/                  # Blog posts
├── _sass/                   # Modular Sass stylesheets
│   ├── _variables.scss      # Colors, fonts, breakpoints
│   ├── _fonts.scss          # Font-face declarations
│   ├── _base.scss           # Base styles
│   ├── _header.scss         # Header & navigation
│   ├── _footer.scss         # Footer styles
│   ├── _carousel.scss       # Hero carousel
│   ├── _components.scss     # Reusable components
│   ├── _responsive.scss     # Media queries
│   └── custom.scss          # Main SCSS entry point
├── assets/
│   ├── main.scss            # SCSS compiler entry (imports custom.scss)
│   ├── fonts/               # Open Sans fonts (locally hosted)
│   └── images/              # Logo and partner logos
├── docs/                    # Technical documentation
├── Dockerfile               # Docker container definition
├── docker-compose.yml       # Docker Compose configuration
├── dev.sh                   # Development helper script
└── README.md                # This file
```

## Editing Content

- **Site configuration**: Edit `_config.yml`
- **Content pages**: Add/edit Markdown files in `_pages/` directory
- **Blog posts**: Add to `_posts/` with filename format `YYYY-MM-DD-title.md`
- **Styling**: Edit SCSS files in `_sass/` directory
- **Navigation**: Edit `navigation:` section in `_config.yml`

## 📚 Documentation

Comprehensive technical documentation is available in the [`docs/`](./docs/) folder:

- **[Project Status](./docs/CURRENT_STATUS.md)** - Complete feature overview and current state
- **[SCSS Architecture](./docs/SCSS_ARCHITECTURE.md)** - Modular styling system documentation  
- **[Font Setup](./docs/FONTS_SETUP.md)** - Local font serving configuration
- **[Navigation Structure](./docs/NAVIGATION_SUMMARY.md)** - Site navigation setup
- **[Styling Guide](./docs/STYLING_SUMMARY.md)** - Design system and color schemes
- **[File Organization](./docs/REORGANIZATION_SUMMARY.md)** - Recent structural changes

For a complete overview, see the [Documentation Index](./docs/README.md).

## 🛠 Troubleshooting

### Docker Issues

If you encounter Docker-related issues:

```bash
# Rebuild the container
docker-compose build --no-cache

# Remove all containers and volumes
docker-compose down -v
docker system prune -a

# Start fresh
docker-compose up jekyll
```

### Port Already in Use

If port 4000 is already in use:

```bash
# Use a different port
docker-compose run --rm -p 4001:4000 jekyll bundle exec jekyll serve --host 0.0.0.0
```

### File Permission Issues

Docker handles permissions automatically. If you experience issues, ensure Docker Desktop has file access permissions for your project folder (System Settings > Privacy & Security > Files and Folders > Docker).

## Why Docker?

✅ **No local dependencies**: No need to install Ruby, gems, or Jekyll  
✅ **Consistent environment**: Same setup for all developers  
✅ **Works everywhere**: macOS (Intel & Apple Silicon), Windows, Linux  
✅ **Easy setup**: One command to start (`./dev.sh`)  
✅ **No version conflicts**: Isolated from your system's Ruby installation  

---

**Need help?** See the [documentation](./docs/) folder for detailed technical information.  
**Jekyll docs**: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)