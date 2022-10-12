const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(PrewArr) {
  let arr = PrewArr;
  let newArr = [];

  if(Array.isArray(arr)){
    for(let i = 0 ; i < arr.length ; i++){
      let elemId = arr[i];
      
      if (elemId === '--discard-next' && arr[i+1]){
        arr.splice(i, 2)
      } else if (elemId === '--double-prev' && arr[i-1]){
        newArr.push(arr[i-1])
      } else if (elemId === '--double-next' && arr[i+1]){
        newArr.push(arr[i+1])
      } else if (elemId === '--discard-prev' && arr[i-1]){
        newArr.pop()
      } else if(elemId != '--discard-next' && elemId != '--discard-prev' && elemId != '--double-next' && elemId != '--double-prev'){
        newArr.push(arr[i])
      }
  }
   } else {
     throw new Error("'arr' parameter must be an instance of the Array!") 
   }

 return newArr
}

module.exports = {
  transform
};
