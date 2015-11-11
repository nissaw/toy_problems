/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {   // 37.498 // -45.2222 check if > 1 or less than 0
 // turn into a simple fraction
 var denominator = 1;
  while (number % 1 !== 0){
    number *=10;
    denominator *=10;
  }
  // check for greatest common denominator by dividing by every number starting with den.
  var gcd = 1;
  for (var i = denominator; i > 0; i--){
    if (number % i === 0 && denominator % i === 0){
      gcd = i;
      break;
    }
  }

  return number/gcd + '/' + denominator/gcd;
};


//better attempt


  stringNum = number.toString();      // '37.498' // '-45.222'
  
  var arrayNum = stNum.split('.');   // [ int, decimal] if neg charAt[0]array[0]
  if (arrayNum[0])
  var int = [];
  var decimal = [];
  for (var i = 0; i < stNum.length; i++){
    if (charAt(i))
  }
  if char === '.'
  // if val is > 1 save integer value
  if (number >=1){
    var int = 
  }

  // for val < 1 conver to a fraction by x / 10* number of chars away from decimal 
  //  i.e .1 = 1/10 or .498 = 498 / 100

  // find common denominator 

  // divide numerator and denominator by common

  // add in integer value

  // Your code here
};
