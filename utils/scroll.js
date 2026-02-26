/**
 * Scroll utility functions
 * Centralized scroll helpers for consistency
 */

/**
 * Smooth scroll to an element by ID
 * @param {string} elementId - ID of the element to scroll to
 * @param {ScrollIntoViewOptions} options - Scroll options
 */
export function scrollToElement(elementId, options = { behavior: 'smooth', block: 'start' }) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView(options);
  }
}

/**
 * Scroll to top of page
 * @param {ScrollToOptions} options - Scroll options
 */
export function scrollToTop(options = { behavior: 'smooth', top: 0 }) {
  window.scrollTo(options);
}

