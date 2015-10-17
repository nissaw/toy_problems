/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 
 
  var countObj = {};
  for (var i = 0; i < string.length; i++ ) {
    var character = string[i]; // not charAt;
    if (!countObj[character]) {
      countObj[character] = 1;
    } else {
      countObj[character]++;  // num doesn't matter only that is is not 1. this does not work countObj[character]++;
    }
  }



  for ( var i = 0; i < string.length; i++ ) {
    var char = string[i];
    if ( countObj[char] === 1 ) {
      return char;
    }
  }
  return null;
};

// add ea element to an obj as element: value = 1
// if find it again increment value
// if 
// split or charAt if it already exists skip othe
  // TODO: your solution here

