/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(f, currentArgs = []) {
  const requiredArgs = f.length;

  if (currentArgs.length >= requiredArgs) {
    return f(...currentArgs);
  }

  return function (...args) {
    const allArgs = [...currentArgs, ...args];
    return curry(f, allArgs);
  };
}

if (require.main === module) {
  const curriedSum = curry((a, b, c, d) => a + b + c + d);
  console.log(curriedSum(1, 2, 3, 4));
  console.log(curriedSum(1)(2, 3, 4));
  console.log(curriedSum(1, 2)(3, 4));
}
