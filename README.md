# Beethovens Werkstatt - Website

Source repository for https://beethovens-werkstatt.de.

This project is Docker-first: the recommended workflow uses Docker for local development and build tasks, so no local Ruby/Jekyll setup is required.

## Quick Start (Docker)

Prerequisites:
- Docker Desktop (with Docker Compose)
- Git

Start in 3 steps:

```bash
git clone https://github.com/BeethovensWerkstatt/Website.git
cd Website
./dev.sh
```

Then open http://localhost:4000.

Stop with Ctrl+C in the terminal running `./dev.sh`.

## Daily Docker Workflow

Use the helper script for all common operations:

```bash
./dev.sh start     # Start local dev server (default)
./dev.sh build     # Build static site into _site/
./dev.sh shell     # Open shell inside Jekyll container
./dev.sh logs      # Show container logs
./dev.sh clean     # Remove project containers/volumes
./dev.sh rebuild   # Rebuild image from scratch
./dev.sh help      # List all commands
```

## Direct Compose Commands

If you prefer Docker Compose directly:

```bash
docker-compose up jekyll
docker-compose up -d jekyll
docker-compose --profile build up build
docker-compose down
docker-compose logs -f jekyll
```

## What Docker Solves

- Consistent Ruby/Jekyll runtime for all contributors
- No local gem or Ruby version management
- Live-reload while editing files in the repository

## Troubleshooting

Rebuild from scratch:

```bash
./dev.sh clean
./dev.sh rebuild
./dev.sh start
```

If port 4000 is already in use:

```bash
docker-compose run --rm -p 4001:4000 jekyll bundle exec jekyll serve --host 0.0.0.0
```

## Repository Layout

```text
_config.yml             Jekyll configuration
_pages/                 Content pages
_posts/                 Blog posts
_layouts/               Layout templates
_includes/              Shared include templates
_sass/                  Styles and partials
assets/                 Compiled/served assets
docs/                   Project documentation
vide-component-facsimile/
vide-component-transcriptions/
```

## Additional Documentation

See [docs/README.md](docs/README.md) for project-internal technical documentation.
**Jekyll docs**: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)