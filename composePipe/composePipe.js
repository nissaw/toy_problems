/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 name = exclaim(phillip);
    var greet = function(exclaim(statement)) { return}
    var welcome = exclaim( function(name){return 'hi: ' + name;})


 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

const compose = function(...func){
  let funcArr = [...func]
  return function(){
    return funcArr.reduceRight((acc, func) => {
      return func(acc);
    }, arguments[0])
  }
};

const pipe = function(...funcs){
  let funcArr = [...funcs];
  return function(){
    return funcArr.reduce((acc, func) => {
      return func(acc);
    }, arguments[0])
  }
};
