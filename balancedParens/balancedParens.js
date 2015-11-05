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

  var toBeCalled = [];

  for (var i = 0 ; i < input.length; i++){
    var char = input[i];

// IF A CLOSING PAREN/BRACK/ARR APPEARS BEFORE AN OPENING RETURN FALSE
// this could be removed though
    if (leftParen < 0 || leftBrack < 0 || leftArr < 0){
      return false;
    };

  // if char is opening push opposite to ToBeCalled Array   
    if (char === '('){
      leftParen++;
      toBeCalled.push( ')' );
    } else if ( char === '['){
      leftArr++;
      toBeCalled.push( ']' );
    } else if ( char === '{'){
      leftBrack++;
      toBeCalled.push( '}' );
    }

  // if char is closing must be equal to pop from ToBeCalled   
  // and decrement count
    if (char === ')' || char === '}' || char === ']'){
      var pop = toBeCalled.pop();
      if (char !== pop){
        return false;
      } else if ( char === ')'){
        leftParen--;
      } else if ( char === '}'){
        leftBrack--;
      } else if (char === ']'){
        leftArr--;
      }
    }
  };

if (leftParen === 0 && leftBrack === 0 && leftArr === 0){
  return true;
} else {
  return false;
}

};


// could count just be a single number?? I think so


