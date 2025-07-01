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
    print_status "Starting Jekyll development server..."
    check_docker
    docker-compose up --build jekyll
}

# Build production site
build_site() {
    print_status "Building Jekyll site for production..."
    check_docker
    docker-compose --profile build up --build build
    print_success "Site built to _site/ directory"
}

# Clean up Docker resources
clean_docker() {
    print_status "Cleaning up Docker containers and volumes..."
    check_docker
    
    # Stop and remove containers
    docker-compose down -v --remove-orphans
    
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
    docker-compose build --no-cache
    print_success "Docker image rebuilt"
}

# Open shell in container
open_shell() {
    print_status "Opening shell in Jekyll container..."
    check_docker
    docker-compose run --rm jekyll /bin/sh
}

# Show logs
show_logs() {
    print_status "Showing container logs..."
    check_docker
    docker-compose logs -f jekyll
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
