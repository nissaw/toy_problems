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
