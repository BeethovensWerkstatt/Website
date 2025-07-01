#!/bin/bash

# Download Open Sans fonts for local serving
# This script downloads Open Sans fonts from Google Fonts

FONTS_DIR="assets/fonts"
mkdir -p "$FONTS_DIR"

echo "Downloading Open Sans fonts for local serving..."

# Download Open Sans Regular (400)
curl -o "$FONTS_DIR/OpenSans-Regular.woff2" "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVQUwaEQbjwN.woff2"

# Download Open Sans Light (300)
curl -o "$FONTS_DIR/OpenSans-Light.woff2" "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4taVQUwaEQbjwN.woff2"

# Download Open Sans SemiBold (600)
curl -o "$FONTS_DIR/OpenSans-SemiBold.woff2" "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4uaVQUwaEQbjwN.woff2"

# Download Open Sans Bold (700)
curl -o "$FONTS_DIR/OpenSans-Bold.woff2" "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1z4uaVQUwaEQbjwN.woff2"

echo "✅ Open Sans fonts downloaded to $FONTS_DIR/"
echo "Note: These URLs are for Latin character sets. Adjust if you need extended character support."

# List downloaded files
ls -la "$FONTS_DIR/"
