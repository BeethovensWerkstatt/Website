#!/bin/bash
# Update glossary redirects using Jekyll plugin

set -e

echo "🔄 Aktualisiere Glossar-Weiterleitungen..."
echo ""
echo "ℹ️  Die Weiterleitungen werden automatisch vom Jekyll-Plugin generiert."
echo ""

# Restart Jekyll if it's running
if command -v docker-compose &> /dev/null && [ -f "docker-compose.yml" ]; then
    if docker-compose ps | grep -q "jekyll"; then
        echo "♻️  Docker-compose Jekyll neu starten..."
        docker-compose restart
    else
        echo "💡 Docker-compose Jekyll ist nicht aktiv. Starte Jekyll mit 'docker-compose up -d'"
    fi
else
    echo "💡 Führe 'bundle exec jekyll serve' aus um die Änderungen zu sehen"
fi

echo ""
echo "✅ Fertig! Alle versionierten Glossarartikel haben automatische Weiterleitungen."
echo ""
echo "📖 Verwendung:"
echo "   /glossar/artikel-name/           → leitet zur neuesten Version weiter"
echo "   /glossar/artikel-name/1.0.1/     → direkte Verlinkung zu spezifischer Version"
echo ""
echo "💡 Die Weiterleitungen werden automatisch bei jedem Jekyll-Build generiert."