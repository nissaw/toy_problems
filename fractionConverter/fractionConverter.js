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
 * Example 2.75 ===  11/4

 * 0 === 0/0
 */

 function fractionConverter (number) {
   let numStr = number.toString().split('.');
   let integer = numStr[0];
   let decimal = numStr[1];
   var isNegative = false;

   // check if we were passed an integer
   if (!decimal){
     return integer + '/1';
   }
   // check if we were passed a negative number
   if (integer < 0){
     isNegative = true;
     integer = Math.abs(integer);
   }

   let tensPosition = decimal.length;
   let denominator = Math.pow(10, tensPosition);
   let numerator = (+integer)*denominator + (+decimal);
   let gcd = getGCD(numerator, denominator);

   let fractionString = (numerator/gcd).toString() + '/' + (denominator/gcd).toString()
   return isNegative ? '-' + fractionString : fractionString;
 }


 function getGCD(a, b){
   // or Math.max and Math.min ...
   let big = a > b ? a : b
   let small = a > b ? b : a

   for (let i = small; i > 0; i--){
     if (big % i === 0 && small % i === 0){
       return i;
     }
   }
 };

// recursive version of gcd
// function getGCD(a, b){
//   if (!b){
//     return a;
//   }
//   return getGCD(b, a%b);
// }
