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

 var resultArr = [];
 var letterObject = {};

 for (var i = 0; i < string1.length; i++) {
  var letter = string1[i];
  if (letter === " "){
    continue;
  } else {
    letterObject[letter] = 1;
  }
 }

// var args = Array.slice.call(arguments) 
// for arg[1] and above 
for (var i = 0; i < string2.length; i++ ){
  var newLetter = string2[i];
  if (letterObject[newLetter]) {
    letterObject[newLetter]++
  }
}

for (var key in letterObject) {
  if (letterObject[key] > 1){
    resultArr.push(key);
  }
}

return resultArr.join("");

};


// commonCharacters('yellow', 'say you love me') >>> [y, e, l, o] >>> string >>> "yelo"

// var objectify = function(str) {
//   return str.split('').reduce(fuction(obj, char) {
    
//   }, {})
// }