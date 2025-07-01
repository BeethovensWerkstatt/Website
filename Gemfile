source "https://rubygems.org"

# Jekyll - minimal setup
gem "jekyll", "~> 4.2.0"
gem "kramdown-parser-gfm"

# SCSS support
gem "jekyll-sass-converter", "~> 2.0"

# Essential gems only
gem "webrick", "~> 1.7"  # Required for Ruby 3.0+

# Cross-platform compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock bundler version for consistency
gem "bundler", "~> 2.5"
