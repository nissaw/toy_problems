/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.

var lessThan = function(a, b){ // (6, 9)
  sortedTuple = []
  if (a < b) {
    sortedTuple = [a, b]
  } else {
    sortedTuple = [b, a]
  }
  return sortedTuple;
}

var bubbleSort = function(array) { 
  var sorter = function(count) { 
    var madeASwap = false; 
    if ( count === 0 ) {
      return;
    }

    for(i = 0; i < array.length - 1; i++) { 
      var smaller = lessThan(array[i], array[i + 1])[0]; 
      var bigger = lessThan(array[i], array[i + 1])[1];
      array[i] = smaller;
      array[i + 1] = bigger;
    }
    // if (madeASwap) {
    //   sorter(count-1);
    // }
    // if (!madeASwap) {
    //   break;
    // };
  }

  sorter(array.length);
  return array;
};
