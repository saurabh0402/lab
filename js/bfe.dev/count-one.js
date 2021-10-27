/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
 function countOne(num) {
  let count = 0;

  while (num) {
    count += (num & 1);
    num >>= 1;
  }

  return count;
}

if (require.main === module) {
  console.log(countOne(0));
  console.log(countOne(1));
  console.log(countOne(257799));
}
