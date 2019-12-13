/**
 * @param {string} address
 * @return {string}
 */

 /* De-fanging an IP address
 https://leetcode.com/problems/defanging-an-ip-address/
 */

 
var defangIPaddr = function(address) {
  let result = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      result += '[' + '.' + ']';
    } else {
      result += address[i];
    }
  }
  return result;
};
