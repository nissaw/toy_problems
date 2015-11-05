/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){

  var leftParen = 0;
  var leftBrack = 0;
  var leftArr = 0;

  for (var i = 0 ; i < input.length; i++){
    var char = input[i];

    if (leftParen < 0 || leftBrack < 0 || leftArr < 0){
      return false;
    };
    
    if (char === '('){
      leftParen++
    } else if ( char === ')'){
      leftParen--
    } 

    if (char === '{'){
      leftBrack++
    } else if ( char === '}'){
      leftBrack--
    }

    if (char === '['){
      leftArr++
    } else if ( char === ']'){
      leftArr--
    } 
  }

if (leftParen === 0 && leftBrack === 0 && leftArr === 0){
  return true;
} else {
  return false;
}

};


