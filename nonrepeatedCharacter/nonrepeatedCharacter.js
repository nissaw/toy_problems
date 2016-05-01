/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */


function firstNonRepeatedCharacter (str) {
  var countObject = {};

  for(var i = 0; i < str.length; i++){
    let letter = str[i];
    countObject[letter] = ++countObject[letter] || 1;
  }

  for(var i = 0 ; i < str.length; i++){
    if (countObject[str[i]] === 1){
      return str[i];
    }
  }
  return 'sorry';
};
