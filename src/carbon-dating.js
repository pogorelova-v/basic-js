const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if(typeof sampleActivity === 'string'){
    let sampleActivityNumber = Number(sampleActivity)
  if(sampleActivityNumber > 0){
    let k = 0.693 / HALF_LIFE_PERIOD;
    let NoN = MODERN_ACTIVITY / sampleActivityNumber;
  
    let timeLife = Math.log(NoN) / k;
    timeLife = Math.ceil(timeLife)

    if(timeLife > 0){
      return timeLife
    }else {
      return false
    }
    
  } else {
    return false
  }
  } else {return false}
}

module.exports = {
  dateSample
};
