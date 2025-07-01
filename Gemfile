source "https://rubygems.org"

# Jekyll version
gem "jekyll", "~> 4.2.0"

# Default theme
gem "minima", "~> 2.5"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
end

# Use sassc instead of sass-embedded for better compatibility
gem "sassc", "~> 2.4"

# Essential gems for development
gem "webrick", "~> 1.7"  # Required for Ruby 3.0+
gem "rexml", "~> 3.2"    # Required for Jekyll 4.2+

# Cross-platform compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock bundler version for consistency
gem "bundler", "~> 2.5"
