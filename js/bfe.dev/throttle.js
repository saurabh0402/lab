
/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let throttled = false;
  let swalloedArgs = null;

  function afterThrottleHandler() {
    throttled = false;
    if (swalloedArgs) {
      func(...swalloedArgs);
      swalloedArgs = null;

      throttled = true;
      setTimeout(afterThrottleHandler, wait);
    }
  }

  return function(...args) {
    swalloedArgs = args;
    if (!throttled) {
      afterThrottleHandler();
    }
  }
}

if (require.main === module) {
  function print(i) {
    console.log(i);
  }

  const throttledPrint = throttle(print, 5000);

  let i = 0;

  function callThrottle() {
    throttledPrint(i);
    i += 1;
    if (i <= 10) {
      setTimeout(callThrottle, 1000);
    }
  }

  callThrottle();
}
