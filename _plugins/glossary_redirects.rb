require 'fileutils'

module Jekyll
  class GlossaryRedirectGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      return unless site.config['generate_glossary_redirects'] != false
      
      @site = site
      generate_redirects_for_versioned_articles
    end

    private

    def generate_redirects_for_versioned_articles
      versioned_articles = collect_versioned_articles
      
      versioned_articles.each do |slug, title|
        create_redirect_page(slug, title)
      end
      
      Jekyll.logger.info "Glossary Redirects:", "Generated #{versioned_articles.length} redirect pages"
    end

    def collect_versioned_articles
      versioned_articles = {}
      
      @site.collections['glossary'].docs.each do |doc|
        next unless doc.data['version'] && doc.data['title']
        
        # Extract slug from URL path
        url_parts = doc.url.split('/')
        slug = url_parts[-2] if url_parts.length > 2 # Get article name from URL
        
        # Skip if this is a version subdirectory
        next if url_parts.include?('versions')
        
        if slug
          versioned_articles[slug] = doc.data['title']
        end
      end
      
      versioned_articles
    end

    def create_redirect_page(slug, title)
      # Create the redirect page directly in memory
      page = RedirectPage.new(@site, slug, title)
      @site.pages << page
    end
  end

  class RedirectPage < Page
    def initialize(site, slug, title)
      @site = site
      @base = site.source
      @dir = "glossar/#{slug}"
      @name = "index.html"

      self.process(@name)
      
      # Use the layout we created
      self.data = {
        'layout' => 'glossary-redirect',
        'title' => "Weiterleitung zu #{title}",
        'sitemap' => false,
        'glossary_redirect' => true,
        'article_slug' => slug
      }
      
      self.content = ""
    end
  end
end