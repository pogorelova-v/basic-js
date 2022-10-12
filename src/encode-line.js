const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  if( str.length > 0){
    
  arr = str.split('')
  let count = 1;
  let res = [];

  for( let i = 0 ; i < arr.length ; i++){
    
    if(arr[i] === arr [i+1]){
      count++
    } else {
      if( count === 1){
        res.push(arr[i])
      } else {
      res.push(count);
      res.push(arr[i])
      count = 1;
      }
    }
  }
  
  res = res.join('')

  return res
  } else return str
}

module.exports = {
  encodeLine
};
