// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

'abc' // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

'aab' // ['aab', 'aba', 'aab', 'aba', 'baa', 'baa']


function allAnagrams(string){
  let anagrams = {};

  let buildString = function(str, options){
    if (str.length === string.length){
      outcomes[str] = true;
    }
    for (var i = 0; i < options.length; i++){
      let remainingLetters = options.slice(0,i) + options.slice(i+1);
      buildString(str + options[i], remainingLetters);
    }
  }
  buildString('', string);
  return Object.keys(anagrams);
}
