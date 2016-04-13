'use strict'
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
// check middle value
// if equal return index
// if > check indexes > midpoint
// if < check indexes < midpoint
// var binarySearch1 = function (array, target){
//
//   var checkMidpoint = function(low, high){
//     var midpoint = Math.floor((high - low) / 2) + low ;
//     if ( array[midpoint] === target ){
//       return midpoint;
//     } else if (high === low){
//       return null;
//     } else if (array[midpoint] > target ){
//       return checkMidpoint(low, midpoint);
//     } else if (low === mid){
//       return checkMidpoint(mid+1, high);
//     } else if ( array[midpoint] < target ){
//       return checkMidpoint(midpoint, high);
//   };
//
// return checkMidpoint(0, array.length - 1);
//
// };




// with console.logging for demonstration

function binarySearch (array, target) {
  let checkMiddle = function(low, high){
    console.log(array, array.slice(low, high+1))
    let midpoint = Math.floor((high-low)/2) + low;
    console.log('midpoint index: ', midpoint, 'midpoint val: ', array[midpoint])
    if (array[midpoint] === target){
      return midpoint;
    } else if (high-low === 0){
      return -1;
    } else if (target < array[midpoint]){
      console.log('too big! Looking for: ', target);
      return checkMiddle(low, midpoint);
    } else if (low === midpoint){
      console.log('down to 2 choices! Looking for: ', target);
      return checkMiddle(midpoint+1, high);
    } else if (target > array[midpoint]){
      console.log('too small! Looking for: ', target)
      return checkMiddle(midpoint, high);
    }

  }
  return checkMiddle(0, array.length-1);
};

// console.log( binarySearch([ 11, 12, 13, 14, 15 ], 11) );
console.log(binarySearch([ 11, 12, 13, 14, 15 ], 14));
//
// console.log(binarySearch([ 11, 12, 13, 14, 15 ], 15));
// console.log(binarySearch([ 11, 12, 13, 14, 15 ], 16));
