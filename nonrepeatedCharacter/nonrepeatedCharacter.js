/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 
 // var buildUpObj= function(string) {
  var countObj = {};
  for (var i = 0; i < string.length; i++ ) {
    var character = string.charAt(i);
    if (countObj.hasOwnProperty(character)) {
      countObj[character] = 2;  // num doesn't matter only that is is not 1. this does not work countObj[character]++;
    } else {
      countObj[character] = 1;
    }
  }
  // return countObj;
// };


  for ( var k = 0; k < string.length; k++ ) {
    var char = string.charAt(k);
    if ( countObj[char] = 1 ) {
      return char;
    }
  }
};

// add ea element to an obj as element: value = 1
// if find it again increment value
// if 
// split or charAt if it already exists skip othe
  // TODO: your solution here

