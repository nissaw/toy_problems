/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// what about other characters?
// are Cap and lowercase === if so toLowerCase()

var commonCharacters = function(string1, string2) {
  var common = [];
  for(var i = 0; i < string1.length; i++){
    if (string2.includes(string1[i]) && string1[i] !== ' ' && !common.includes(string1[i])){
      common.push(string1[i])
    }
  }
  return common.join('');
};
