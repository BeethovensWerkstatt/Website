---
layout: page
title: "Test Page"
permalink: /test/
---

# Test Page

This is a test page to verify that the Jekyll Docker setup is working correctly.

## Features Verified

- ✅ Docker build works on ARM64 (Apple M1/M2)
- ✅ Jekyll server starts successfully
- ✅ Live reload is enabled
- ✅ Bundle cache is persisted in Docker volume
- ✅ File watching works with force polling
- ✅ Permissions are correctly configured

## Development Commands

```bash
# Start development server
./dev.sh start
# or
docker-compose up jekyll

# Build for production
./dev.sh build
# or
docker-compose --profile build up build

# Clean up
./dev.sh clean
```

The site should be available at [http://localhost:4000](http://localhost:4000).
