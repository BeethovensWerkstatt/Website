/**
 * @fileoverview Controller for managing SVG SMIL animations via slider
 * @author Beethovens Werkstatt
 */

/**
 * @typedef {Object} AnimationData
 * @property {Element} element - The animate or animateTransform element
 * @property {Element} targetElement - The parent element being animated
 * @property {string} attributeName - Name of the attribute being animated
 * @property {string[]} values - Array of keyframe values
 * @property {string} type - Animation type ('animate' or 'animateTransform')
 * @property {string} [transformType] - Transform type for animateTransform (e.g., 'translate')
 */

/**
 * Controller class for managing SVG animations
 */
export class FluidAnimationController {
  /**
   * Create a new FluidAnimationController
   * @param {SVGElement} svgElement - The SVG element to control
   * @param {number} stepCount - Number of animation steps
   */
  constructor (svgElement, stepCount) {
    /** @type {SVGElement} */
    this.svgElement = svgElement

    /** @type {number} */
    this.stepCount = stepCount

    /** @type {AnimationData[]} */
    this.animations = []

    /** @type {number} */
    this.currentProgress = 0
  }

  /**
   * Initialize the controller by parsing and disabling SMIL animations
   */
  init () {
    this.parseAnimations()
    this.disableAutoAnimation()
    this.setProgress(0)
  }

  /**
   * Parse all SMIL animation elements from the SVG
   */
  parseAnimations () {
    // Find all animate and animateTransform elements
    const animateElements = this.svgElement.querySelectorAll('animate, animateTransform')

    animateElements.forEach((element) => {
      const valuesAttr = element.getAttribute('values')
      const attributeName = element.getAttribute('attributeName')
      const targetElement = element.parentElement

      if (!valuesAttr || !attributeName || !targetElement) {
        return
      }

      // Parse the semicolon-separated values
      const values = valuesAttr.split(';').map(v => v.trim())

      // Validate that we have the expected number of keyframes
      if (values.length !== this.stepCount) {
        console.warn(
          `Animation has ${values.length} keyframes, expected ${this.stepCount}:`,
          element.id || element
        )
      }

      /** @type {AnimationData} */
      const animationData = {
        element,
        targetElement,
        attributeName,
        values,
        type: element.tagName.toLowerCase()
      }

      // For animateTransform, also store the transform type
      if (element.tagName.toLowerCase() === 'animatetransform') {
        animationData.transformType = element.getAttribute('type') || 'translate'
      }

      this.animations.push(animationData)
    })

    console.log(`Parsed ${this.animations.length} animations`)
  }

  /**
   * Disable automatic SMIL animation playback
   */
  disableAutoAnimation () {
    this.animations.forEach(({ element }) => {
      // Set begin to indefinite to prevent auto-start
      element.setAttribute('begin', 'indefinite')
      // Remove repeat to prevent looping
      element.removeAttribute('repeatCount')
      // Pause any running animation
      if (typeof element.endElement === 'function') {
        try {
          element.endElement()
        } catch (_e) {
          // Some browsers may throw if animation isn't active
        }
      }
    })
  }

  /**
   * Set the animation progress
   * @param {number} progress - Progress value from 0 to 1
   */
  setProgress (progress) {
    this.currentProgress = Math.max(0, Math.min(1, progress))

    this.animations.forEach((animation) => {
      const interpolatedValue = this.interpolateValue(animation, this.currentProgress)
      this.applyValue(animation, interpolatedValue)
    })
  }

  /**
   * Interpolate between keyframe values based on progress
   * @param {AnimationData} animation - The animation data
   * @param {number} progress - Progress value from 0 to 1
   * @returns {string} Interpolated value
   */
  interpolateValue (animation, progress) {
    const { values } = animation
    const segmentCount = values.length - 1

    if (segmentCount <= 0) {
      return values[0] || ''
    }

    // Calculate which segment we're in
    const scaledProgress = progress * segmentCount
    const segmentIndex = Math.min(Math.floor(scaledProgress), segmentCount - 1)
    const segmentProgress = scaledProgress - segmentIndex

    const startValue = values[segmentIndex]
    const endValue = values[segmentIndex + 1]

    // Interpolate based on the type of value
    return this.interpolateBetweenValues(startValue, endValue, segmentProgress, animation)
  }

  /**
   * Interpolate between two values
   * @param {string} startValue - Starting value
   * @param {string} endValue - Ending value
   * @param {number} t - Interpolation factor (0-1)
   * @param {AnimationData} animation - Animation context
   * @returns {string} Interpolated value
   */
  interpolateBetweenValues (startValue, endValue, t, animation) {
    const { attributeName } = animation

    // Handle opacity (simple number interpolation)
    if (attributeName === 'opacity') {
      return this.interpolateNumbers(startValue, endValue, t)
    }

    // Handle transform (translate values like "x y")
    if (attributeName === 'transform' && animation.transformType === 'translate') {
      return this.interpolateTranslate(startValue, endValue, t)
    }

    // Handle path data (d attribute)
    if (attributeName === 'd') {
      return this.interpolatePathData(startValue, endValue, t)
    }

    // Handle polygon/polyline points
    if (attributeName === 'points') {
      return this.interpolatePoints(startValue, endValue, t)
    }

    // For unknown types, snap to nearest value
    return t < 0.5 ? startValue : endValue
  }

  /**
   * Interpolate between two numeric values
   * @param {string} startValue - Starting value
   * @param {string} endValue - Ending value
   * @param {number} t - Interpolation factor (0-1)
   * @returns {string} Interpolated value
   */
  interpolateNumbers (startValue, endValue, t) {
    const start = parseFloat(startValue) || 0
    const end = parseFloat(endValue) || 0
    const result = start + (end - start) * t
    return result.toString()
  }

  /**
   * Interpolate between two translate transform values
   * @param {string} startValue - Starting value (e.g., "10 20")
   * @param {string} endValue - Ending value
   * @param {number} t - Interpolation factor (0-1)
   * @returns {string} Interpolated value
   */
  interpolateTranslate (startValue, endValue, t) {
    const startParts = this.parseTranslateValues(startValue)
    const endParts = this.parseTranslateValues(endValue)

    const x = startParts.x + (endParts.x - startParts.x) * t
    const y = startParts.y + (endParts.y - startParts.y) * t

    return `${x} ${y}`
  }

  /**
   * Parse translate transform values
   * @param {string} value - Translate value string
   * @returns {{x: number, y: number}} Parsed coordinates
   */
  parseTranslateValues (value) {
    const parts = value.trim().split(/\s+/)
    return {
      x: parseFloat(parts[0]) || 0,
      y: parseFloat(parts[1]) || 0
    }
  }

  /**
   * Interpolate between two SVG path data strings
   * @param {string} startPath - Starting path data
   * @param {string} endPath - Ending path data
   * @param {number} t - Interpolation factor (0-1)
   * @returns {string} Interpolated path data
   */
  interpolatePathData (startPath, endPath, t) {
    // Extract all numbers from both paths
    const numberPattern = /-?[\d.]+/g
    const startNumbers = startPath.match(numberPattern) || []
    const endNumbers = endPath.match(numberPattern) || []

    // If the paths have different structures, snap to nearest
    if (startNumbers.length !== endNumbers.length) {
      return t < 0.5 ? startPath : endPath
    }

    // Use the start path as template and replace numbers
    let result = startPath
    let index = 0

    result = result.replace(numberPattern, () => {
      const startNum = parseFloat(startNumbers[index]) || 0
      const endNum = parseFloat(endNumbers[index]) || 0
      index++
      const interpolated = startNum + (endNum - startNum) * t
      // Round to avoid floating point precision issues in path rendering
      return Math.round(interpolated * 100) / 100
    })

    return result
  }

  /**
   * Interpolate between two polygon/polyline points strings
   * @param {string} startPoints - Starting points (e.g., "x1,y1 x2,y2 x3,y3")
   * @param {string} endPoints - Ending points
   * @param {number} t - Interpolation factor (0-1)
   * @returns {string} Interpolated points string
   */
  interpolatePoints (startPoints, endPoints, t) {
    // Parse points - format is "x1,y1 x2,y2 x3,y3 ..."
    const startCoords = this.parsePointsString(startPoints)
    const endCoords = this.parsePointsString(endPoints)

    // If point counts differ, snap to nearest
    if (startCoords.length !== endCoords.length) {
      return t < 0.5 ? startPoints : endPoints
    }

    // Interpolate each coordinate pair
    const interpolatedCoords = startCoords.map((startPt, i) => {
      const endPt = endCoords[i]
      const x = startPt.x + (endPt.x - startPt.x) * t
      const y = startPt.y + (endPt.y - startPt.y) * t
      return `${Math.round(x)},${Math.round(y)}`
    })

    return interpolatedCoords.join(' ')
  }

  /**
   * Parse a points attribute string into coordinate pairs
   * @param {string} pointsStr - Points string (e.g., "x1,y1 x2,y2")
   * @returns {Array<{x: number, y: number}>} Array of coordinate objects
   */
  parsePointsString (pointsStr) {
    const points = []
    // Split by whitespace and parse each "x,y" pair
    const pairs = pointsStr.trim().split(/\s+/)

    for (const pair of pairs) {
      const [xStr, yStr] = pair.split(',')
      const x = parseFloat(xStr) || 0
      const y = parseFloat(yStr) || 0
      points.push({ x, y })
    }

    return points
  }

  /**
   * Apply an interpolated value to the target element
   * @param {AnimationData} animation - The animation data
   * @param {string} value - Value to apply
   */
  applyValue (animation, value) {
    const { targetElement, attributeName, transformType } = animation

    if (attributeName === 'transform' && transformType) {
      // For transform attributes, we need to set the full transform string
      targetElement.setAttribute('transform', `${transformType}(${value})`)
    } else if (attributeName === 'd') {
      // For path data, set directly on the element
      targetElement.setAttribute('d', value)
    } else {
      // For other attributes like opacity
      targetElement.setAttribute(attributeName, value)
    }
  }

  /**
   * Get the current progress value
   * @returns {number} Current progress (0-1)
   */
  getProgress () {
    return this.currentProgress
  }

  /**
   * Get the number of parsed animations
   * @returns {number} Animation count
   */
  getAnimationCount () {
    return this.animations.length
  }
}
