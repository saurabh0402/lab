/**
 * @param {number} num
 */
function sum(num) {
  const foo = function (...args) {
    const s = args.reduce((agg, n) => agg + n, foo.val);
    return sum(s);
  };

  foo.val = num;
  foo[Symbol.toPrimitive] = () => foo.val;

  return foo;
}

console.log(sum(10) == 10);
console.log(sum(1)(2)(3) == 6);
