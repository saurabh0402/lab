
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat(arr, depth = 1) {
  if (depth === 0) {
    return arr;
  }

  let ans = [];
  for (const e of arr) {
    if (Array.isArray(e)) {
      ans = [...ans, ...flat(e, depth - 1)];    
    } else {
      ans = [...ans, e];
    }
  }

  return ans;
}

if (require.main === module) {
  console.log(flat([1,2,[3,4,[5,6]]]));
  console.log(flat([1,2,[3,4,[5,6]]], 2));
}
