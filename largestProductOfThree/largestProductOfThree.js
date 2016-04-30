/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
// refactored
var largestProductOfThree = function(array) {

  array.sort(function(a, b){
    return a - b;
  });

  return Math.max(
    getProduct(array.slice(-3)),
    getProduct([ array[array.length-1], array[0], array[1] ])
  );
  
};



// brute force
var largestProductOfThree = function(array) {
  let negatives = [];
  let positives = [];

  array.sort(function(a, b){
    return Math.abs(a) - Math.abs(b);
  })
  console.log(array);

  for (let i = 0; i < array.length; i++){
    array[i] > 0 ? positives.push(array[i]) : negatives.push(array[i])
  }

  console.log(negatives, positives)

 let negCount = negatives.length;
 let posCount = positives.length;
 let largestPos = positives[posCount-1];

 // if there is are any positive numbers
  if (posCount > 0){
  //if there are also at least 2 negative numbers and at least 3 pos numbers
    if (negCount > 1 && posCount > 2){
      // compare neg product against pos product
     let negProduct = getProduct(negatives.slice(-2)) * largestPos;
     let posProduct = getProduct(positives.slice(-3,-1)) * largestPos;
     return getLargest(negProduct, posProduct);
   } else {
     // smallest 3 nums overall
     return getLargest(getProduct(array.slice(0,3)), getProduct(array.slice(-3)));
   }
  } else {
    // smallest 3 negative numbers
    return getProduct(negatives.slice(0,3))
  }

};

// helpers
function getLargest(a,b){
  return a > b ? a : b
}

function getProduct(arr){
  return arr.reduce((product, num) => product*num)
};
