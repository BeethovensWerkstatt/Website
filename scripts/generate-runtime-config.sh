#!/bin/sh

set -eu

TEMPLATE_PATH="${1:-${RUNTIME_CONFIG_TEMPLATE:-/opt/runtime-config.template.js}}"
OUTPUT_PATH="${2:-${RUNTIME_CONFIG_OUTPUT:-/usr/share/nginx/html/runtime-config.js}}"

: "${VIDE_API_BASE:=}"
: "${VIDE_DOCUMENTS:=}"

if [ -z "${VIDE_DOCUMENTS}" ]; then
  VIDE_DOCUMENTS='{}'
fi

export VIDE_API_BASE
export VIDE_DOCUMENTS

mkdir -p "$(dirname "$OUTPUT_PATH")"

if command -v envsubst >/dev/null 2>&1; then
  envsubst '${VIDE_API_BASE} ${VIDE_DOCUMENTS}' < "$TEMPLATE_PATH" > "$OUTPUT_PATH"
  exit 0
fi

cat > "$OUTPUT_PATH" <<'EOF'
window.__VIDE_RUNTIME_CONFIG__ = {
  apiBase: "",
  documents: {}
}
EOF
