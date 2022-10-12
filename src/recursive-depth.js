const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr ) {
    let newArr = arr;
    let resArr = [];
    newArr = JSON.stringify(newArr);
    newArr = Array.from(newArr) ;
    newArr = newArr.join()
    newArr = newArr.split(',')
  
    for (let i = 0 ; i < newArr.length ; i++) {
      if(newArr[i] == '['){
        resArr.push(newArr[i])
      } else if (newArr[i] == ']'){
        resArr.push(newArr[i])
      }
    }
  
    let count = 0;
  
  while( resArr.length > 0){
    for (let i = 0 ; i < resArr.length ; i++) {
      if(resArr[i] == '[' && resArr[i+1] == ']'){
        resArr.splice(i,2)
        }
    }
    count++
  }
  
    return count
   }
}

module.exports = {
  DepthCalculator
};
