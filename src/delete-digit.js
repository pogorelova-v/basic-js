const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let str = String(n)
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      let arr = str.split('')
      let elem = arr[i];

      arr.splice(i,1)
      num = arr.join('')
      num = Number(num)
      if (num > count) {
          count = num
      }
  }
   return count
  }


module.exports = {
  deleteDigit
};
