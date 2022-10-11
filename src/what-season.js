const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

  if (date === undefined){ 
    return 'Unable to determine the time of year!' 
} else if (typeof date.getMonth !== 'function' || Object.getOwnPropertySymbols(date).length !== 0){ 
  throw new Error('Invalid date!') 
} 
  let monthCount = date.getMonth();

  if (monthCount === 0 || monthCount === 1 || monthCount === 11){ 
    return 'winter' 
} else if (monthCount === 2 || monthCount === 3 || monthCount === 4){
   return 'spring' 
} else if (monthCount === 5 || monthCount === 6 || monthCount === 7){
   return 'summer' 
} else if (monthCount === 8 || monthCount === 9 || monthCount === 10){
   return 'autumn' 
}
}

module.exports = {
  getSeason
};