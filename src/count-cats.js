const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let countCatNum = 0;
  for( let i = 0 ; i < matrix.length; i++){
      let newArrCat = matrix[i];
      for( let j = 0 ; j < newArrCat.length ; j++){
          if ( newArrCat[j] == '^^'){
              countCatNum++
          }
      }
  }
  return countCatNum
}

module.exports = {
  countCats
};
