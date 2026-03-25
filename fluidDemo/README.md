# Fluid Transcript Viewer

Interactive viewer for SVG-based fluid transcripts with slider-controlled animations.

## Setup

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Usage

### Default SVG

By default, the viewer loads a sample SVG from the BeethovensWerkstatt data cache.

### Custom SVG URL

You can load a different SVG by passing the URL as a query parameter:

```
http://localhost:3000?svg=YOUR_SVG_URL_HERE
```

## Linting

Check code style:

```bash
npm run lint
```

Fix auto-fixable issues:

```bash
npm run lint:fix
```

## Architecture

- `index.html` - Main HTML page with slider UI
- `css/styles.css` - Styling for the viewer
- `src/main.js` - Application entry point and UI logic
- `src/FluidAnimationController.js` - SVG animation parsing and interpolation

## How It Works

1. The SVG is fetched from the specified URL
2. All SMIL `<animate>` and `<animateTransform>` elements are parsed
3. Auto-playing animations are disabled
4. The slider controls the animation progress from 0% to 100%
5. Values are interpolated between the 6 keyframes based on slider position

### Supported Animation Types

- `opacity` - Numeric interpolation
- `transform` (translate) - X/Y coordinate interpolation  
- `d` (path data) - Numeric value interpolation within path commands
