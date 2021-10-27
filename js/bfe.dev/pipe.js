/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function(x) {
    funcs.forEach(func => {
      x = func(x);
    });

    return x;
  }
}

if (require.main === module) {
  console.log(
    pipe(
      [ (x) => x*2, (x) => x - 1 ]
    )(2)
  )
}
