# Beethovens Werkstatt – Website Repository

This website is used to generate the https://beethovens-werkstatt.de website.

## Docker-Based Development (Recommended)

This project uses Docker to provide a consistent development environment that works on both x86_64 and ARM64 (Apple M1/M2) architectures without requiring Ruby or Jekyll installation on your local machine.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop)

### Quick Start

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd Website
   ```

2. **Start the development server**:
   ```bash
   # Using the helper script (recommended)
   ./dev.sh start
   
   # Or using docker-compose directly
   docker-compose up jekyll
   ```

3. **View the site**:
   Open `http://localhost:4000` in your browser

4. **Stop the server**:
   Press `Ctrl+C` or run:
   ```bash
   docker-compose down
   ```

### Quick Start Commands

**🚀 Recommended approach - using the helper script:**

```bash
# Start development server (recommended)
./dev.sh start

# Site will be available at http://localhost:4000
```

**Or using docker-compose directly:**

```bash
docker-compose up jekyll

# Site will be available at http://localhost:4000
```

### Other Available Commands

The `dev.sh` script provides convenient commands for common development tasks:

```bash
./dev.sh start     # Start development server (default)
./dev.sh build     # Build site for production
./dev.sh clean     # Clean up Docker containers and volumes
./dev.sh rebuild   # Rebuild Docker image
./dev.sh shell     # Open shell in Jekyll container
./dev.sh logs      # Show container logs
./dev.sh help      # Show help message
```

### Docker Commands

#### Development Server
```bash
# Start development server with live reload
docker-compose up jekyll

# Start in background
docker-compose up -d jekyll

# View logs
docker-compose logs -f jekyll
```

#### Build for Production
```bash
# Build the site for production
docker-compose run --rm build

# The built site will be in the _site/ directory
```

#### One-off Commands
```bash
# Install/update dependencies
docker-compose run --rm jekyll bundle install

# Add a new post
docker-compose run --rm jekyll bundle exec jekyll post "Your Post Title"

# Check for issues
docker-compose run --rm jekyll bundle exec jekyll doctor
```

### Features

- **Live Reload**: Changes to files are automatically reflected in the browser
- **Consistent Environment**: Same Ruby and Jekyll versions for everyone
- **No Local Dependencies**: No need to install Ruby, Jekyll, or manage versions
- **Port Forwarding**: Access the site at `localhost:4000`
- **Volume Mounting**: Changes to your local files are immediately available in the container

## Alternative: Traditional Setup

If you prefer not to use Docker, you can set up Jekyll traditionally:

### Requirements
- Ruby 3.1+
- Bundler

### Setup
```bash
bundle install
bundle exec jekyll serve
```

## Deployment

This repository uses GitHub Actions for automated building and deployment. The Jekyll site is built in a container environment that matches the Docker setup.

### GitHub Actions Workflow

The deployment workflow:
1. **Triggers**: Push to main branch or manual trigger
2. **Environment**: Uses the same Jekyll Docker image
3. **Build**: Generates static site files
4. **Deploy**: Publishes to GitHub Pages

### Manual Deployment

You can trigger deployments manually through the GitHub Actions interface:
1. Go to the **Actions** tab in GitHub
2. Select **"Build and Deploy Jekyll Site"**
3. Click **"Run workflow"**

## Project Structure

```
├── _config.yml              # Jekyll configuration
├── _posts/                  # Blog posts
├── _layouts/                # Page layouts (if customizing)
├── _includes/               # Reusable page components
├── _sass/                   # Sass stylesheets
├── assets/                  # Static assets (images, CSS, JS)
├── index.md                 # Homepage
├── about.md                 # About page
├── contact.md               # Contact page
├── Dockerfile               # Docker container definition
├── docker-compose.yml       # Docker Compose configuration
└── .github/workflows/       # GitHub Actions workflows
```

## Customization

- **Site configuration**: Edit `_config.yml`
- **Content**: Add pages as Markdown files in the root directory
- **Blog posts**: Add to `_posts/` following the naming convention `YYYY-MM-DD-title.md`
- **Styling**: The default theme is Minima, which can be customized

## Troubleshooting

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

### Permission Issues

Docker handles all permissions internally, so you shouldn't encounter the Ruby permission issues that can occur with local installations.

## Benefits of Docker Approach

1. **No Local Dependencies**: Works regardless of your local Ruby setup
2. **Consistent Environment**: Everyone gets the same Jekyll version
3. **Easy Setup**: One command to get started
4. **No Permission Issues**: All handled within the container
5. **Production Parity**: Local environment matches deployment environment

For more information about Jekyll, visit the [official documentation](https://jekyllrb.com/docs/).eethovens Werkstatt – Website Repository

This website is used to generate the https://beethovens-werkstatt.de website. 