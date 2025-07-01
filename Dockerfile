# Use Ruby 3.1 with Alpine for multi-arch support
FROM ruby:3.1-alpine

# Install system dependencies
RUN apk add --no-cache \
    build-base \
    linux-headers \
    git \
    nodejs \
    yarn \
    tzdata \
    && rm -rf /var/cache/apk/*

# Create jekyll user and group
RUN addgroup -g 1000 jekyll && \
    adduser -u 1000 -G jekyll -s /bin/sh -D jekyll

# Set up directories with proper permissions
RUN mkdir -p /srv/jekyll && \
    mkdir -p /usr/local/bundle && \
    chown -R jekyll:jekyll /srv/jekyll && \
    chown -R jekyll:jekyll /usr/local/bundle

# Set the working directory
WORKDIR /srv/jekyll

# Switch to jekyll user
USER jekyll

# Set up bundle configuration
ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_BIN=/usr/local/bundle/bin \
    GEM_HOME=/usr/local/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"

# Install bundler
RUN gem install bundler:2.5.23

# Copy the Gemfile and Gemfile.lock (if it exists)
COPY --chown=jekyll:jekyll Gemfile* ./

# Install dependencies
RUN bundle install --jobs 4 --retry 3

# Copy the rest of the site
COPY --chown=jekyll:jekyll . .

# Expose port 4000 and 35729 (livereload)
EXPOSE 4000 35729

# Default command to serve the site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
