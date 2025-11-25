# Copy facsimile component assets
copy_facsimile_assets() {
    print_status "Copying facsimile component CSS..."
    # Build CSS in submodule if needed
    if [ -d "vide-component-facsimile" ]; then
        (cd vide-component-facsimile && npm install --silent 2>/dev/null || true)
        (cd vide-component-facsimile && npm run build:css 2>/dev/null || true)
        cp vide-component-facsimile/dist/vide-facs.css assets/css/
    fi
}

# Watch facsimile component assets for changes
watch_facsimile_assets() {
    print_status "Watching facsimile component CSS for changes..."
    if ! command -v entr > /dev/null 2>&1; then
        print_error "entr is not installed. Please install it (e.g., 'apk add entr' in Alpine, 'brew install entr' on macOS)."
        return
    fi
    ls vide-component-facsimile/dist/vide-facs.css 2>/dev/null | entr -r ./copy-facs-assets.sh
}
#!/bin/bash

# Jekyll Development Helper Script
# This script provides easy commands for Docker-based Jekyll development

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Detect which docker compose command is available: prefer `docker compose` (plugin), fallback to `docker-compose`
if command -v docker > /dev/null 2>&1 && docker compose version > /dev/null 2>&1; then
    DC_CMD="docker compose"
elif command -v docker-compose > /dev/null 2>&1; then
    DC_CMD="docker-compose"
else
    print_error "Neither 'docker compose' nor 'docker-compose' was found. Please install Docker Desktop or docker-compose."
    exit 1
fi

# Show help
show_help() {
    echo "Jekyll Development Helper"
    echo ""
    echo "Usage: ./dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start     Start the Jekyll development server (default)"
    echo "  build     Build the site for production"
    echo "  clean     Clean up Docker containers and volumes"
    echo "  rebuild   Rebuild the Docker image"
    echo "  shell     Open a shell in the Jekyll container"
    echo "  logs      Show container logs"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./dev.sh start    # Start development server at http://localhost:4000"
    echo "  ./dev.sh build    # Build production site to _site/"
    echo "  ./dev.sh clean    # Clean up all containers and volumes"
}

# Start development server
start_dev() {
    print_status "Building component styles..."
    build_component_styles
    copy_facsimile_assets
    print_status "Ensuring Ruby gems are installed..."
    check_docker
    $DC_CMD run --rm jekyll bundle install
    print_status "Starting Jekyll development server..."
    $DC_CMD up --build jekyll
}

# Build component styles
build_component_styles() {
    # Check if npm is available
    if ! command -v npm > /dev/null 2>&1; then
        print_warning "npm not found - skipping component style builds"
        return
    fi
    
    # Build vide-facs styles
    if [ -f "assets/js/vide-facs/package.json" ]; then
        print_status "Building vide-facs component styles..."
        (cd assets/js/vide-facs && npm install --silent && npm run build:css)
    fi
    
    # Add more component builds here as needed
}

# Build production site
build_site() {
    print_status "Building component styles..."
    build_component_styles
    
    print_status "Building Jekyll site for production..."
    check_docker
    $DC_CMD --profile build up --build build
    print_success "Site built to _site/ directory"
}

# Clean up Docker resources
clean_docker() {
    print_status "Cleaning up Docker containers and volumes..."
    check_docker
    
    # Stop and remove containers
    $DC_CMD down -v --remove-orphans
    
    # Remove dangling images
    if [[ $(docker images -f "dangling=true" -q) ]]; then
        docker rmi $(docker images -f "dangling=true" -q)
    fi
    
    print_success "Docker cleanup completed"
}

# Rebuild Docker image
rebuild_image() {
    print_status "Rebuilding Docker image..."
    check_docker
    $DC_CMD build --no-cache
    print_success "Docker image rebuilt"
}

# Open shell in container
open_shell() {
    print_status "Opening shell in Jekyll container..."
    check_docker
    $DC_CMD run --rm jekyll /bin/sh
}

# Show logs
show_logs() {
    print_status "Showing container logs..."
    check_docker
    $DC_CMD logs -f jekyll
}

# Main script logic
case "${1:-start}" in
    start)
        start_dev
        ;;
    build)
        build_site
        ;;
    clean)
        clean_docker
        ;;
    rebuild)
        rebuild_image
        ;;
    shell)
        open_shell
        ;;
    logs)
        show_logs
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
