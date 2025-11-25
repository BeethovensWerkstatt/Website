#!/bin/sh
#
# Usage: ./copy-facs-assets.sh

chmod +x "$0"
# Copy vide-component-facsimile assets from submodule to Jekyll assets
cp vide-component-facsimile/dist/vide-facs.css assets/css/
