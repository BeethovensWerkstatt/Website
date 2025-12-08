#!/bin/bash

# PDF generation script for glossary terms
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
GLOSSARY_DIR="$PROJECT_ROOT/_glossary"
OUTPUT_DIR="$PROJECT_ROOT/output/pdf"
TERM="$1"

# Check arguments
if [ $# -eq 0 ]; then
    echo "Usage: $0 <glossary-term>"
    exit 1
fi

INPUT_FILE="$GLOSSARY_DIR/${TERM}.md"
OUTPUT_FILE="$OUTPUT_DIR/${TERM}.html"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: File $INPUT_FILE not found"
    exit 1
fi

# Create output directory and CSS file
mkdir -p "$OUTPUT_DIR"
mkdir -p "$PROJECT_ROOT/assets/css"

# Create CSS file if it doesn't exist
CSS_FILE="$PROJECT_ROOT/assets/css/glossary-pdf-print.css"
if [ ! -f "$CSS_FILE" ]; then
    cat > "$CSS_FILE" << 'CSS_EOF'
/* Beethovens Werkstatt - PDF Generation Styles */

body {
    font-family: "Times New Roman", serif;
    max-width: 21cm;
    margin: 2cm auto;
    line-height: 1.6;
    color: #333;
    font-size: 11pt;
    padding: 1cm;
}

.glossary-header {
    padding-bottom: 1rem;
    margin-bottom: 2rem;
}

.glossary-title {
    color: #c93b22;
    font-size: 2.5em;
    margin-bottom: 0.5rem;
    margin-top: 0;
}

.glossary-meta {
    color: #666;
    font-style: italic;
    margin: 0;
    font-size: 0.9em;
}

.glossary-content {
    line-height: 1.7;
    font-size: 1.1em;
}

.glossary-content p {
    margin-bottom: 1.5rem;
    text-align: justify;
}

h1 {
    color: #c93b22;
    border-bottom: 2px solid #c93b22;
    padding-bottom: 0.5rem;
    font-size: 1.8em;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
}

h2 {
    color: #c93b22;
    font-size: 1.3em;
    margin-top: 2rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
}

a {
    color: #c93b22;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: #a12e1a;
}

.inline-image {
    height: 1.2em !important;
    vertical-align: baseline !important;
    margin: 0 0.2em !important;
    width: auto !important;
    max-width: none !important;
    display: inline !important;
}

.citation-box {
    background: #f9f2f1;
    border: 1px solid #e0d6d5;
    border-radius: 5px;
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.citation-box h3 {
    color: #c93b22;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
}

.doi-links {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e0d6d5;
}

.doi-links p {
    margin-bottom: 0.3rem;
    font-size: 0.9em;
}

.doi-links a {
    color: #c93b22;
    text-decoration: none;
    font-family: monospace;
}

.doi-links a:hover {
    text-decoration: underline;
    color: #a12e1a;
}

@media print {
    body { 
        margin: 1cm; 
        padding: 0; 
    }
    .citation-box { 
        break-inside: avoid; 
    }
}
CSS_EOF
fi

# Extract frontmatter data
TITLE=$(awk '/^title:/ {gsub(/title: */, ""); print}' "$INPUT_FILE" | sed 's/^"//; s/"$//')
AUTHOR=$(awk '/^author:/ {gsub(/author: */, ""); print}' "$INPUT_FILE")
VERSION=$(awk '/^version:/ {gsub(/version: */, ""); print}' "$INPUT_FILE")
DATE=$(awk '/^date:/ {gsub(/date: */, ""); print}' "$INPUT_FILE")
DOI_VERSION=$(awk '/^doi_version:/ {gsub(/doi_version: */, ""); print}' "$INPUT_FILE")
DOI_OVERVIEW=$(awk '/^doi_overview:/ {gsub(/doi_overview: */, ""); print}' "$INPUT_FILE")

echo "Generating HTML for: $TITLE"

# Start HTML output
cat > "$OUTPUT_FILE" << EOF
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>$TITLE</title>
    <link rel="stylesheet" href="../../assets/css/glossary-pdf-print.css">
</head>
<body>
    <article class="glossary-term">
        <header class="glossary-header">
            <h1 class="glossary-title">$TITLE</h1>
            <p class="glossary-meta">
                von $AUTHOR | Version $VERSION | $DATE
            </p>
        </header>

        <div class="glossary-content">
    
EOF

# Process content and convert to HTML
awk '/^---$/{if(++n==2) {getline; while((getline line) > 0) print line; exit}}' "$INPUT_FILE" | \
# Convert Jekyll links to HTML links with correct domain
sed -E 's|\{% link _glossary/([^}]+)\.md %\}|https://beethovens-werkstatt.de/glossary/\1|g' | \
# Process Jekyll images - convert to IMAGE_PLACEHOLDER  
sed "s|{{ '/\([^']*\)' \| relative_url }}|IMAGE_PLACEHOLDER:/\1|g" > /tmp/temp_content.txt

# Process each line and handle image replacements and markdown links
while IFS= read -r line; do
    if [[ "$line" == *"IMAGE_PLACEHOLDER:"* ]]; then
        # Extract image path using a more precise method
        img_path=$(echo "$line" | sed 's/.*IMAGE_PLACEHOLDER:\([^"]*\)".*/\1/')
        full_img_path="$PROJECT_ROOT$img_path"
        
        if [ -f "$full_img_path" ]; then
            base64_img=$(base64 < "$full_img_path" | tr -d '\n')
            echo "$line" | sed "s|IMAGE_PLACEHOLDER:$img_path|data:image/jpeg;base64,$base64_img|g"
        else
            echo "$line" | sed "s|IMAGE_PLACEHOLDER:$img_path|[BILD NICHT GEFUNDEN]|g"
        fi
    else
        echo "$line"
    fi
done < /tmp/temp_content.txt | \
# Convert markdown links to HTML links  
sed 's/\[\([^]]*\)\](\([^)]*\))/<a href="\2">\1<\/a>/g' | \
# Convert markdown headings
sed 's/^## \(.*\)$/<h2>\1<\/h2>/' | \
sed 's/^# \(.*\)$/<h1>\1<\/h1>/' | \
# Convert markdown formatting
sed 's/\*\*\([^*]*\)\*\*/\<strong\>\1\<\/strong\>/g' | \
sed 's/\*\([^*]*\)\*/\<em\>\1\<\/em\>/g' | \
# Convert empty lines to paragraph breaks and wrap non-empty lines in <p> tags
awk '
BEGIN { in_paragraph = 0 }
/^$/ { 
    if (in_paragraph) { print "</p>"; in_paragraph = 0 }
    print ""
    next
}
/^<h[12]>/ {
    if (in_paragraph) { print "</p>"; in_paragraph = 0 }
    print $0
    next
}
{
    if (!in_paragraph) { print "<p>"; in_paragraph = 1 }
    print $0
}
END { if (in_paragraph) print "</p>" }
' >> "$OUTPUT_FILE"

# Close HTML and add citation
cat >> "$OUTPUT_FILE" << EOF
        </div>

        <footer class="glossary-footer">
            <div class="citation-box">
                <h3>Zitierhinweis</h3>
                <div class="citation-content">
                    <p><strong>$AUTHOR:</strong> „$TITLE"${VERSION:+, Version $VERSION}${DATE:+ ($DATE)}, in: Beethovens Werkstatt - Glossar, <a href="https://beethovens-werkstatt.de/glossary/${TERM}${VERSION:+/$VERSION}" target="_blank">https://beethovens-werkstatt.de/glossary/${TERM}${VERSION:+/$VERSION}</a></p>
                    
EOF

# Add DOI links if available
if [[ -n "$DOI_VERSION" || -n "$DOI_OVERVIEW" ]]; then
    cat >> "$OUTPUT_FILE" << EOF
                    <div class="doi-links">
EOF
    
    if [[ -n "$DOI_VERSION" ]]; then
        cat >> "$OUTPUT_FILE" << EOF
                        <p>DOI der Version $VERSION: <a href="https://doi.org/$DOI_VERSION" target="_blank">$DOI_VERSION</a></p>
EOF
    fi
    
    if [[ -n "$DOI_OVERVIEW" ]]; then
        cat >> "$OUTPUT_FILE" << EOF
                        <p>DOI aller Versionen: <a href="https://doi.org/$DOI_OVERVIEW" target="_blank">$DOI_OVERVIEW</a></p>
EOF
    fi
    
    cat >> "$OUTPUT_FILE" << EOF
                    </div>
EOF
fi

cat >> "$OUTPUT_FILE" << EOF
                </div>
            </div>
        </footer>
    </article>
</body>
</html>
EOF

# Clean up
rm -f /tmp/temp_content.txt

echo "✓ HTML generated: $OUTPUT_FILE"
echo "File size: $(du -h "$OUTPUT_FILE" | cut -f1)"
echo ""
echo "You can:"
echo "1. Open in browser and use 'Print to PDF'"
echo "2. View: open '$OUTPUT_FILE'"