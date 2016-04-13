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
 function isBalanced (string) {
   var toBeCalled = [];

   for (var i = 0 ; i < string.length; i++){
     var char = string[i];

   // if char is opening push opposite to ToBeCalled Array
     if (char === '('){
       toBeCalled.push( ')' );
     }

   // if char is closing must be equal to pop from ToBeCalled
     if (char === ')' ){
       if (char !== toBeCalled.pop()){
         return false;
       }
     }
   }

   if (toBeCalled.length > 0) {
     return false;
   }

   return true; 

 };
