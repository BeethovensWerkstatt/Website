module Jekyll
  class PublicationRedirectGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      @site = site
      generate_redirects_for_publications
    end

    private

    def generate_redirects_for_publications
      articles = {}

      collection = @site.collections['publications']
      return unless collection

      collection.docs.each do |doc|
        next unless doc.data['version'] && doc.data['title']

        url_parts = doc.url.split('/')
        # Skip archived versions stored under /versions/ subpath
        next if url_parts.include?('versions')

        # URL structure: ["", "publications", "slug", "1.0.0", ""]
        slug = url_parts[2]
        next unless slug && !slug.empty?

        articles[slug] ||= { title: doc.data['title'], docs: [] }
        articles[slug][:docs] << { version: doc.data['version'], url: doc.url }
      end

      articles.each do |slug, data|
        latest = data[:docs].sort_by { |d| d[:version] }.last
        create_redirect_page(slug, data[:title], latest[:url])
      end

      Jekyll.logger.info "Publication Redirects:", "Generated #{articles.length} redirect page(s)"
    end

    def create_redirect_page(slug, title, latest_url)
      page = PublicationRedirectPage.new(@site, slug, title, latest_url)
      @site.pages << page
    end
  end

  class PublicationRedirectPage < Page
    def initialize(site, slug, title, latest_url)
      @site = site
      @base = site.source
      @dir  = "publications/#{slug}"
      @name = "index.html"

      self.process(@name)

      self.data = {
        'layout'               => 'publication-redirect',
        'title'                => "Weiterleitung zu #{title}",
        'sitemap'              => false,
        'publication_redirect' => true,
        'publication_slug'     => slug,
        'article_title'        => title,
        'latest_url'           => latest_url
      }
      
      self.content = ""
    end
  end
end
