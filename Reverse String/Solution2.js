/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
        return (s==='') ? '' : reverseString(s.substr(1))+s.charAt(0);
};
