//////NEED TO FINISH

/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
var powerSet = function(str){
  str = str || "";
  var letters = {};
//remove dup letters in the string by objectifying
for (var i = 0; i < str.length; i++){
  letters[str[i]] = true;
}
// recreate a string with no duplicate letters
str = Object.keys(letters).join('');

var solutions = [];

var recurse = function(idx, subset){
  //base case: for ea letter made it to the end of the string
  if (idx >= str.length){
    solutions.push(subset);
    return;
  }
  //recursive case
  recurse(idx+1, subset); // don't add element
  recurse(idx+1, subset+str[idx]); // add element
};

recurse(0, ''); 
// this could be an IFFE if written
// (function recurse(idx, subset){...})(0, ''); 

return solutions.sort();

};





var powerSet = function(str){
  // n-queens
  results =[''];
  var sub = function(string, letterPosition){
    currentSt = "";
    if (letterPosition = string.length - 1){
      results.push(string[letterPosition]);
      return results;
    }
    for (var i = 0; i < string.length; i++){
      char = string[i];
      results.push(char);

      sub(str, i)
    }
  }
  sub(str, 0);
};
