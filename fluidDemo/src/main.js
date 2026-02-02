/**
 * @fileoverview Main entry point for the Fluid Transcript Viewer
 * @author Beethovens Werkstatt
 */

import { FluidAnimationController } from './FluidAnimationController.js'

/**
 * Edition JSON URL
 * @type {string}
 */
const EDITION_JSON_URL = '/temp/edition.json'

/**
 * Base URL for page SVGs
 * @type {string}
 */
const PAGE_SVG_BASE = 'https://raw.githubusercontent.com/BeethovensWerkstatt/data/refs/heads/dev/data/sources/D-BNba_MH_60_Engelmann/svg'

/**
 * Mapping of page/zone to fluid transcript SVG URLs
 * Key format: "page-zone" (1-indexed)
 * @type {Object.<string, string>}
 */
const FLUID_SVG_MAP = {
  '1-6': 'https://raw.githubusercontent.com/BeethovensWerkstatt/data-cache/refs/heads/main/cache/sources/D-BNba_MH_60_Engelmann/fluidTranscripts/p005/D-BNba_MH_60_Engelmann_p005_wz06_syss289fb17d-10e3-4b27-9b64-8d2d6a560c1d_ft.svg',
  '11-3': 'https://raw.githubusercontent.com/BeethovensWerkstatt/data-cache/refs/heads/main/cache/sources/D-BNba_MH_60_Engelmann/fluidTranscripts/p013/D-BNba_MH_60_Engelmann_p013_wz03_syssa22641f6-8a96-46d6-ab5d-4ace61e4687d_ft.svg',
  '42-1': 'https://raw.githubusercontent.com/BeethovensWerkstatt/data-cache/refs/heads/main/cache/sources/D-BNba_MH_60_Engelmann/fluidTranscripts/p042/D-BNba_MH_60_Engelmann_p042_wz01_syss8bc4f2e3-fa56-44ff-832b-8e4433d63fb5_ft.svg'
}

/**
 * Number of animation steps (8 total: 2 intro + 6 animation)
 * @type {number}
 */
const STEP_COUNT = 8

/**
 * OpenSeadragon viewer instance
 * @type {OpenSeadragon.Viewer|null}
 */
// eslint-disable-next-line no-unused-vars
let viewer = null

/**
 * Initialize the application
 * @returns {Promise<void>}
 */
async function init () {
  const osdContainer = document.getElementById('openseadragon-container')
  const loadingElement = document.getElementById('loading')
  const slider = document.getElementById('animation-slider')
  const stopsContainer = document.getElementById('slider-stops')
  const stepDisplay = document.getElementById('current-step')

  // Get page and zone from URL parameters (1-indexed)
  const urlParams = new URLSearchParams(window.location.search)
  const pageNum = parseInt(urlParams.get('page') || '1', 10)
  const zoneNum = parseInt(urlParams.get('zone') || '6', 10)

  // Create stop indicators
  createStopIndicators(stopsContainer, STEP_COUNT)

  try {
    // Load edition data
    const editionData = await loadEditionData()
    const source = editionData.source

    // Find the page (pageNum is 1-indexed, array is 0-indexed)
    const page = source.pages[pageNum - 1]
    if (!page) {
      throw new Error(`Page ${pageNum} not found`)
    }

    // Find the writing zone by label
    const writingZone = page.writingZones.find(wz => wz.label === String(zoneNum))
    if (!writingZone) {
      throw new Error(`Writing zone ${zoneNum} not found on page ${pageNum}`)
    }

    // Build URLs
    const iiifUrl = page.target
    const pageNumPadded = String(pageNum + 4).padStart(3, '0') // p005, p006, etc.
    const pageSvgUrl = `${PAGE_SVG_BASE}/D-BNba_MH_60_Engelmann_p${pageNumPadded}.svg`

    // Look up fluid SVG URL from mapping
    const fluidSvgKey = `${pageNum}-${zoneNum}`
    const fluidSvgUrl = FLUID_SVG_MAP[fluidSvgKey]
    if (!fluidSvgUrl) {
      throw new Error(`No fluid SVG mapping found for page ${pageNum}, zone ${zoneNum}`)
    }

    console.log('Loading:', { pageNum, zoneNum, iiifUrl, pageSvgUrl, fluidSvgUrl })

    // Highlight active example link
    highlightActiveExample(pageNum, zoneNum)

    // Initialize OpenSeadragon viewer
    viewer = initOpenSeadragon(osdContainer, iiifUrl)

    // Fetch both SVGs in parallel
    const [fluidResponse, pageResponse] = await Promise.all([
      fetch(fluidSvgUrl),
      fetch(pageSvgUrl)
    ])

    if (!fluidResponse.ok) {
      throw new Error(`Failed to fetch fluid SVG: ${fluidResponse.status} ${fluidResponse.statusText}`)
    }
    if (!pageResponse.ok) {
      throw new Error(`Failed to fetch page SVG: ${pageResponse.status} ${pageResponse.statusText}`)
    }

    const [fluidSvgText, pageSvgText] = await Promise.all([
      fluidResponse.text(),
      pageResponse.text()
    ])

    // Parse fluid transcript SVG
    const parser = new DOMParser()
    const fluidSvgDoc = parser.parseFromString(fluidSvgText, 'image/svg+xml')
    const fluidSvgElement = fluidSvgDoc.documentElement

    // Check for parsing errors
    const fluidParserError = fluidSvgDoc.querySelector('parsererror')
    if (fluidParserError) {
      throw new Error('Failed to parse fluid SVG: Invalid SVG format')
    }

    // Parse page SVG
    const pageSvgDoc = parser.parseFromString(pageSvgText, 'image/svg+xml')
    const pageSvgElement = pageSvgDoc.documentElement

    const pageParserError = pageSvgDoc.querySelector('parsererror')
    if (pageParserError) {
      throw new Error('Failed to parse page SVG: Invalid SVG format')
    }

    // Remove loading indicator
    loadingElement.remove()

    // Get the zone SVG ID for highlighting
    const zoneId = writingZone.identifier.svgId

    // Initialize animation controller for fluid transcript SVG
    // The fluid animation uses 6 internal steps (positions 3-8)
    const controller = new FluidAnimationController(fluidSvgElement, 6)
    controller.init()

    // Add SVGs as OpenSeadragon overlays
    // Wait for the image to load before adding overlays
    viewer.addHandler('open', () => {
      // Add page SVG first (bottom layer)
      const pageOverlay = addPageSvgOverlay(viewer, pageSvgElement, zoneId)
      // Add fluid transcript SVG on top, positioned by writing zone data
      const fluidOverlay = addFluidSvgOverlay(viewer, fluidSvgElement, page, writingZone)

      // Set up slider interaction with overlay references
      setupSlider(slider, controller, stepDisplay, STEP_COUNT, {
        pageOverlay,
        fluidOverlay,
        viewer,
        zoneId
      })

      // Set initial state - slider at leftmost position
      slider.value = '0'
      updateSliderProgress(slider, 0)
      updateStopIndicators(0, STEP_COUNT)

      // Zoom to fit the fluid transcript overlay bounds
      viewer.viewport.fitBounds(fluidOverlay.bounds, true)
    })
  } catch (error) {
    console.error('Error loading SVG:', error)
    loadingElement.textContent = `Error: ${error.message}`
    loadingElement.classList.add('error')
  }
}

/**
 * Add page SVG as a full-page OpenSeadragon overlay
 * @param {OpenSeadragon.Viewer} osdViewer - The OpenSeadragon viewer
 * @param {SVGElement} svgElement - The page SVG element to add as overlay
 * @param {string} zoneId - The SVG ID of the writing zone to highlight
 * @returns {Object} Object containing overlay elements for animation control
 */
function addPageSvgOverlay (osdViewer, svgElement, zoneId) {
  // Create a container div for the page SVG overlay
  const overlayElement = document.createElement('div')
  overlayElement.className = 'page-svg-overlay-element'
  overlayElement.appendChild(svgElement)

  // Add a unique class to the page SVG to scope CSS rules
  const pageSvgClass = 'page-svg-overlay'
  svgElement.classList.add(pageSvgClass)

  // Style the SVG to fill the overlay container
  svgElement.style.width = '100%'
  svgElement.style.height = '100%'
  svgElement.style.display = 'block'

  // Add style element for path transparency and zone highlight
  // Scope all rules to the page SVG class to avoid affecting other SVGs
  const styleElement = document.createElementNS('http://www.w3.org/2000/svg', 'style')
  styleElement.textContent = `
    .${pageSvgClass} path { fill: transparent !important; }
    .${pageSvgClass} #${zoneId} * { fill: red !important; }
  `
  svgElement.insertBefore(styleElement, svgElement.firstChild)

  // Create a group wrapper for the zone highlight with opacity control
  const zoneHighlightStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style')
  zoneHighlightStyle.id = 'zone-highlight-style'
  zoneHighlightStyle.textContent = `.${pageSvgClass} #${zoneId} { opacity: 0; }`
  svgElement.insertBefore(zoneHighlightStyle, svgElement.firstChild)

  // Initially hide the entire page overlay
  overlayElement.style.opacity = '0'

  // Store the class for later use in animation
  overlayElement.dataset.svgClass = pageSvgClass

  // Get the actual image bounds from OpenSeadragon
  // The image is normalized so width=1, height=aspectRatio
  const tiledImage = osdViewer.world.getItemAt(0)
  const bounds = tiledImage.getBounds()

  osdViewer.addOverlay({
    element: overlayElement,
    location: bounds,
    placement: 'TOP_LEFT'
  })

  return {
    overlayElement,
    zoneHighlightStyle,
    zoneId,
    svgClass: pageSvgClass
  }
}

/**
 * Add fluid transcript SVG as an OpenSeadragon overlay with precise positioning
 * @param {OpenSeadragon.Viewer} osdViewer - The OpenSeadragon viewer
 * @param {SVGElement} svgElement - The SVG element to add as overlay
 * @param {Object} page - Page data from edition.json
 * @param {Object} writingZone - Writing zone data from edition.json
 */
function addFluidSvgOverlay (osdViewer, svgElement, page, writingZone) {
  // Create a container div for the SVG overlay
  const overlayElement = document.createElement('div')
  overlayElement.className = 'svg-overlay-element'
  overlayElement.appendChild(svgElement)

  // Get position data from edition.json
  const px = page.px
  const pos = writingZone.wzProps.pos

  // Apply the exact CSS positioning values for the fluid transcript SVG
  svgElement.style.width = '411%'
  svgElement.style.height = '411%'
  svgElement.style.display = 'block'
  svgElement.style.position = 'relative'
  svgElement.style.left = '-119%'
  svgElement.style.top = '-66%'
  svgElement.style.transform = `rotate(${px.rotation || 0}deg)`

  // Initially hide the fluid overlay
  overlayElement.style.opacity = '0'

  // OpenSeadragon viewport coordinates:
  // - Image width is normalized to 1
  // - Image height is normalized to (height/width) = aspectRatio
  // Position in viewport = pixel position / image width
  const imageWidth = px.width
  const imageHeight = px.height
  const aspectRatio = imageHeight / imageWidth

  // Calculate normalized positions
  const normX = pos.x / imageWidth
  const normY = pos.y / imageWidth // OSD uses width for Y too
  const normW = pos.w / imageWidth
  const normH = pos.h / imageWidth // OSD uses width for height too

  console.log('Fluid overlay positioning:', {
    image: { width: imageWidth, height: imageHeight, aspectRatio },
    pos,
    normalized: { x: normX, y: normY, w: normW, h: normH },
    percentOfImage: {
      x: (pos.x / imageWidth * 100).toFixed(1) + '%',
      y: (pos.y / imageHeight * 100).toFixed(1) + '% of height',
      w: (pos.w / imageWidth * 100).toFixed(1) + '%',
      h: (pos.h / imageHeight * 100).toFixed(1) + '% of height'
    },
    viewportY: (normY / aspectRatio * 100).toFixed(1) + '% down image'
  })

  // eslint-disable-next-line no-undef
  const rect = new OpenSeadragon.Rect(normX, normY, normW, normH)

  osdViewer.addOverlay({
    element: overlayElement,
    location: rect
  })

  return { overlayElement, bounds: rect }
}

/**
 * Load and parse edition.json
 * @returns {Promise<Object>} The edition data object
 */
async function loadEditionData () {
  const response = await fetch(EDITION_JSON_URL)
  if (!response.ok) {
    throw new Error(`Failed to fetch edition data: ${response.status}`)
  }
  const data = await response.json()
  // The actual data is nested: [headers..., [sourceData]]
  // Find the array that contains the source object
  const sourceArray = data.find(item => Array.isArray(item))
  if (!sourceArray || !sourceArray[0] || !sourceArray[0].source) {
    throw new Error('Invalid edition data structure')
  }
  return sourceArray[0]
}

/**
 * Initialize OpenSeadragon viewer with IIIF image
 * @param {HTMLElement} container - Container element for OpenSeadragon
 * @param {string} iiifUrl - IIIF image base URL
 * @returns {OpenSeadragon.Viewer} The OpenSeadragon viewer instance
 */
function initOpenSeadragon (container, iiifUrl) {
  // eslint-disable-next-line no-undef
  const osdViewer = OpenSeadragon({
    element: container,
    prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/',
    tileSources: {
      type: 'image',
      url: `${iiifUrl}/full/full/0/default.jpg`
    },
    showNavigationControl: true,
    navigationControlAnchor: 'TOP_RIGHT',
    showNavigator: false,
    minZoomLevel: 0.5,
    maxZoomLevel: 10,
    visibilityRatio: 0.5,
    constrainDuringPan: false
  })

  // OpenSeadragon sets position:relative on the container, override it
  container.style.position = 'absolute'

  return osdViewer
}

/**
 * Create stop indicator elements
 * @param {HTMLElement} container - Container element for stops
 * @param {number} stepCount - Number of steps
 */
function createStopIndicators (container, stepCount) {
  for (let i = 0; i < stepCount; i++) {
    const stop = document.createElement('div')
    stop.className = 'stop-indicator'
    stop.dataset.step = i.toString()
    if (i === 0) {
      stop.classList.add('active')
    }
    container.appendChild(stop)
  }
}

/**
 * Set up slider event handlers
 * @param {HTMLInputElement} slider - Range input element
 * @param {FluidAnimationController} controller - Animation controller
 * @param {HTMLElement} stepDisplay - Element to display current step
 * @param {number} stepCount - Number of steps
 * @param {Object} overlays - Overlay references for animation control
 */
function setupSlider (slider, controller, stepDisplay, stepCount, overlays) {
  const { pageOverlay, fluidOverlay, viewer, zoneId } = overlays
  const svgClass = pageOverlay.svgClass

  /**
   * Handle slider input
   * Animation phases:
   * - Position 1 (0%): Both overlays invisible, IIIF visible
   * - Position 1→2 (0-14.3%): Zone highlight fades in (opacity 0→1)
   * - Position 2→3 (14.3-28.6%): IIIF fades out, fluid overlay fades in
   * - Position 3→8 (28.6-100%): Fluid animation plays (6 steps)
   */
  const handleInput = () => {
    const value = parseFloat(slider.value)
    const progress = value / 100

    // Calculate which step we're on (0-indexed)
    const stepProgress = progress * (stepCount - 1)
    const exactStep = stepProgress // 0 = pos1, 1 = pos2, 2 = pos3, etc.

    // Phase 1: Position 1→2 (step 0→1): Zone highlight fades in
    // Page overlay becomes visible, zone highlight opacity 0→1
    if (exactStep <= 1) {
      const phase1Progress = exactStep // 0 to 1
      pageOverlay.overlayElement.style.opacity = '1'
      pageOverlay.zoneHighlightStyle.textContent = `.${svgClass} #${zoneId} { opacity: ${phase1Progress}; }`
      fluidOverlay.overlayElement.style.opacity = '0'
      // IIIF at full opacity
      const tiledImage = viewer.world.getItemAt(0)
      if (tiledImage) tiledImage.setOpacity(1)
      // Fluid animation at start
      controller.setProgress(0)
    } else if (exactStep <= 2) {
      // Phase 2: Position 2→3 (step 1→2): IIIF fades out, fluid fades in
      const phase2Progress = exactStep - 1 // 0 to 1
      pageOverlay.overlayElement.style.opacity = String(1 - phase2Progress)
      pageOverlay.zoneHighlightStyle.textContent = `.${svgClass} #${zoneId} { opacity: 1; }`
      fluidOverlay.overlayElement.style.opacity = String(phase2Progress)
      // IIIF fades out
      const tiledImage = viewer.world.getItemAt(0)
      if (tiledImage) tiledImage.setOpacity(1 - phase2Progress)
      // Fluid animation still at start
      controller.setProgress(0)
    } else {
      // Phase 3: Position 3→8 (step 2→7): Fluid animation plays
      pageOverlay.overlayElement.style.opacity = '0'
      fluidOverlay.overlayElement.style.opacity = '1'
      // IIIF hidden
      const tiledImage = viewer.world.getItemAt(0)
      if (tiledImage) tiledImage.setOpacity(0)
      // Map step 2→7 to animation progress 0→1
      // step 2 = 0%, step 7 = 100%
      const animProgress = (exactStep - 2) / 5 // 5 intervals for 6 positions
      controller.setProgress(Math.max(0, Math.min(1, animProgress)))
    }

    // Update UI
    updateSliderProgress(slider, value)
    updateStopIndicators(progress, stepCount)

    // Calculate and display current step (1-based for display)
    const currentStep = Math.round(stepProgress) + 1
    stepDisplay.textContent = currentStep.toString()
  }

  slider.addEventListener('input', handleInput)

  // Trigger initial state
  handleInput()
}

/**
 * Update slider progress visual
 * @param {HTMLInputElement} slider - Range input element
 * @param {number} value - Current value (0-100)
 */
function updateSliderProgress (slider, value) {
  slider.style.setProperty('--progress', `${value}%`)
}

/**
 * Update stop indicator active states
 * @param {number} progress - Current progress (0-1)
 * @param {number} stepCount - Number of steps
 */
function updateStopIndicators (progress, stepCount) {
  const stepProgress = progress * (stepCount - 1)
  const nearestStep = Math.round(stepProgress)

  const stops = document.querySelectorAll('.stop-indicator')
  stops.forEach((stop, index) => {
    if (index === nearestStep) {
      stop.classList.add('active')
    } else {
      stop.classList.remove('active')
    }
  })
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init)

/**
 * Highlight the currently active example link
 * @param {number} pageNum - Current page number
 * @param {number} zoneNum - Current zone number
 */
function highlightActiveExample (pageNum, zoneNum) {
  const exampleLinks = document.querySelectorAll('.example-link')

  exampleLinks.forEach((link) => {
    const linkUrl = new URL(link.href)
    const linkPage = parseInt(linkUrl.searchParams.get('page') || '0', 10)
    const linkZone = parseInt(linkUrl.searchParams.get('zone') || '0', 10)

    if (linkPage === pageNum && linkZone === zoneNum) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
