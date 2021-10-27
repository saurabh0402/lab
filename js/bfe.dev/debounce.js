
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}
