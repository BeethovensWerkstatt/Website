
FROM ruby:3.1
# Install system dependencies
RUN apt-get update && apt-get install -y build-essential git nodejs npm tzdata && rm -rf /var/lib/apt/lists/*
# Create jekyll user and group
RUN groupadd -g 1000 jekyll && useradd -u 1000 -g jekyll -s /bin/bash -m jekyll
# Set up directories with proper permissions
RUN mkdir -p /srv/jekyll && mkdir -p /usr/local/bundle && chown -R jekyll:jekyll /srv/jekyll && chown -R jekyll:jekyll /usr/local/bundle
WORKDIR /srv/jekyll
USER jekyll
ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_BIN=/usr/local/bundle/bin \
    GEM_HOME=/usr/local/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"
RUN gem install bundler:2.5.23
COPY --chown=jekyll:jekyll Gemfile* ./
RUN bundle install --jobs 4 --retry 3
COPY --chown=jekyll:jekyll . .
# Build facsimile component CSS from submodule
RUN cd vide-component-facsimile \
    && npm install \
    && npm run build:css \
    && cp dist/vide-facs.css /srv/jekyll/assets/css/
EXPOSE 4000 35729
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]