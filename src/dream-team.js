const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(ArrOne) {

  if(Array.isArray(ArrOne)){
    
  let arrLatter = [];
  let OkNot = 0;
for( let i = 0 ; i < ArrOne.length; i++ ){
  let nextLatter = ArrOne[i];

  if( typeof nextLatter === 'string'){
      nextLatter = nextLatter.replace(/\s+/g, '');
      let firstLatter = nextLatter[0]
      arrLatter.push(firstLatter.toUpperCase());
      arrLatter.sort();
      OkNot = OkNot +1 ;
  } 
}

if(OkNot > 0){
  arrLatter = arrLatter.join('');
  return arrLatter
} else {
  return false
}
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
