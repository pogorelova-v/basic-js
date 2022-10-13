const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain( email) {
 
  arr = email.split('');
  let res = [];
  
   for (let i = arr.length - 1; i >= 0; i--) {
      let elem = arr[i];
      if (elem != '@') {
          res.unshift(elem)
      } else {
          break
      }
   }
   res = res.join('')

return res
}

module.exports = {
  getEmailDomain
};
