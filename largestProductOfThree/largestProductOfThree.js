/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

  var largest3 = [];

  array.sort(function(a, b){
    return a - b;
  })
// this part could be skipped by directly returning n  = array.length
//    array[n-1] * array[n -2] * array [n - 3];
  while (largest3.length < 3){
    largest3.push(array.pop());
  };

  return _.reduce(largest3, function(acc, current) {
    return acc * current;
  });

};
// if neg numbers are included - Math.max(product of last 3, product of largest and two smallest)

   // find the three largest numbers // this reduce function not looking at the first index
  // var returnLargestIndex = function(array) { 
  //   var largestIndex =  
  //     _.reduce(array, function(acc, current, i) {
  //       if ( acc  > current )
  //         return i;
  //       else {
  //         return i; 
  //       }
  //    });
  //   largest3.push(array[largestIndex]);
  //   array.splice(largestIndex, 1);
  //   return largestIndex;
  // };


  // while (largest3.length < 4) {
  //   console.log(largest3);
  //   returnLargestIndex(array);
  // };

  // return _.reduce(largest3, function(acc, current) {
  //   return acc * current;
  // });

};



