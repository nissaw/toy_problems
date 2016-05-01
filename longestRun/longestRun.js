/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

// v2
 function longestRun (string) {
   let maxStart = 0;
   let maxEnd = 0;
   let maxRun = 0;

   let currentStart = 0;
   let currentRun = 0;

   for (let i = 0; i < string.length; i++){
     if(string[i] === string[i+1]){
       currentRun++;
       if (currentRun > maxRun){
         maxRun = currentRun;
         maxStart = currentStart;
         maxEnd = i+1;
       }
     } else {
       currentRun = 0;
       currentStart = i+1;
     }
   }
   return [maxStart, maxEnd];
 }


// v1
var longestRun = function (string) {
  var longestSoFar = 0;
  var count = 0;
  var endIndex = 0;

  for (var i = 0 ; i < string.length - 1; i++){
    char = string[i];
    next = string[i + 1];

    if (char === next){
      count++;
      if (count > longestSoFar){
        longestSoFar = count;
        endIndex = i + 1;
      }
    } else {
      count = 0;
    }
  }

  return [(endIndex - longestSoFar), endIndex];

};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
