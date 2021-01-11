/**
 * This method wraps around the array when start or end exceeds the 
 * array bounds
 * @param {*} items 
 * @param {*} start 
 * @param {*} end 
 */
export function getWrappedItems(items, start, end) {
    if (start < end) {
        return items.slice(start, end + 1);
    } else {
        return [...items.slice(start, items.length), ...items.slice(0, end + 1)];
    }
}

/**
 * This method is helper for navigating the carousel to the left
 * @param {*} currentIndex 
 * @param {*} lastIndex 
 */
export function navigateLeft(currentIndex, lastIndex) {
    return currentIndex === 0 ? lastIndex : currentIndex - 1;
}

/**
 * This method is helper for navigating the carousel to the right
 * @param {*} currentIndex 
 * @param {*} lastIndex 
 */
export function navigateRight(currentIndex, lastIndex) {
    return currentIndex === lastIndex ? 0 : currentIndex + 1;
}

/**
 * This method is helper for navigating the slider icon to the right
 * @param {*} sliderArr 
 */
export function navigateSliderRight(sliderArr) {
    let curr = sliderArr.findIndex(t => t);
    curr = curr === 2 ? 0 : curr + 1;
    const slider = new Array(3).fill(false);
    slider[curr] = true;
    return slider;
}

/**
 * This method is helper for navigating the carousel to the left
 * @param {*} sliderArr 
 */
export function navigateSliderLeft(sliderArr) {
    let curr = sliderArr.findIndex(t => t);
    curr = curr === 0 ? 2 : curr - 1;
    const slider = new Array(3).fill(false);
    slider[curr] = true;
    return slider;
}

/**
 * This method formats number to appropriate currency
 * @param {*} amount 
 */
export function formatCurrency(amount, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
}

/**
 * This method will debounce user input
 * @param {*} action 
 * @param  {...any} args 
 */
export function debounce(action, ...args) {
    let timeout = null;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        action(...args);
        timeout = null;
      }, 2000);
    };
  }