export function getWrappedItems(items, start, end) {
    if (start < end) {
        return items.slice(start, end + 1);
    } else {
        return [...items.slice(start, items.length), ...items.slice(0, end + 1)];
    }
}

export function navigateLeft(currentIndex, lastIndex) {
    return currentIndex === 0 ? lastIndex : currentIndex - 1;
}

export function navigateRight(currentIndex, lastIndex) {
    return currentIndex === lastIndex ? 0 : currentIndex + 1;
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
}

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