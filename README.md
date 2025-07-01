# Beethovens Werkstatt – Website Repository

This website is used to generate the https://beethovens-werkstatt.de website.

## Setup and Development

This site uses Jekyll with manual build control via GitHub Actions, providing fine-grained control over when and how the site is built and deployed.

### Local Development

**Important**: If you encounter permission errors during installation, you're likely using the system Ruby. Here are the solutions:

#### Option 1: Use rbenv (Recommended)

1. **Install rbenv**:
   ```bash
   brew install rbenv ruby-build
   ```

2. **Install and use Ruby 3.1.4**:
   ```bash
   rbenv install 3.1.4
   rbenv local 3.1.4
   ```

3. **Add rbenv to your shell** (add to ~/.zshrc):
   ```bash
   echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
   echo 'eval "$(rbenv init -)"' >> ~/.zshrc
   exec zsh
   ```

4. **Install bundler and dependencies**:
   ```bash
   gem install bundler
   bundle install
   ```

#### Option 2: Use local bundle path

If you prefer not to use rbenv:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

#### Running the site

Once installation is complete:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

**Build the site**:
```bash
bundle exec jekyll build
```

### Deployment

This repository uses GitHub Actions for automated building and deployment with manual control:

#### Automatic Deployment
- **Push to main branch**: Automatically builds and deploys to production
- **Pull requests**: Builds the site for testing (no deployment)

#### Manual Deployment
- Go to the **Actions** tab in GitHub
- Select **"Build and Deploy Jekyll Site"**
- Click **"Run workflow"**
- Choose your target environment (production/staging)

### GitHub Pages Configuration

To enable GitHub Pages with this custom workflow:

1. Go to your repository **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **"GitHub Actions"**
4. The workflow will handle the rest automatically

### Project Structure

```
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts
├── _layouts/            # Page layouts (if customizing)
├── _includes/           # Reusable page components
├── _sass/               # Sass stylesheets
├── assets/              # Static assets (images, CSS, JS)
├── index.md             # Homepage
├── about.md             # About page
├── contact.md           # Contact page
└── .github/workflows/   # GitHub Actions workflows
```

### Customization

- **Site configuration**: Edit `_config.yml`
- **Styling**: Customize in `_sass/` or `assets/css/`
- **Content**: Add pages as Markdown files in the root directory
- **Blog posts**: Add to `_posts/` following the naming convention `YYYY-MM-DD-title.md`

### Advanced Features

The setup includes:
- **SEO optimization** with jekyll-seo-tag
- **RSS feed** generation with jekyll-feed
- **Manual deployment control** via GitHub Actions
- **Environment-specific builds** (production/staging)

For more information about Jekyll, visit the [official documentation](https://jekyllrb.com/docs/).eethovens Werkstatt – Website Repository

This website is used to generate the https://beethovens-werkstatt.de website. 