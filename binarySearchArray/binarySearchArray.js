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
var binarySearch = function (array, target){

  var checkMidpoint = function(low, high){
    var midpoint = Math.floor((high - low) / 2) + low ;
    if ( array[midpoint] === target ){
      return midpoint;
    } else if (high === low){
      return null;
    } else if (array[midpoint] > target ){
      return checkMidpoint(low, midpoint);
    } else if (low === mid){
      return checkMidpoint(mid+1, high);
    } else if ( array[midpoint] < target ){
      return checkMidpoint(midpoint, high);
  };

return checkMidpoint(0, array.length - 1);

};

//////my version // failing on the zero index and not in array
var binarySearch = function (array, target){
  var midpoint = Math.floor(array.length/ 2);

  var checkMidpoint =function(midpoint){
    if ( array[midpoint] === target ){
      return midpoint;
    } else if ( array[midpoint] < target ){
      newMidpoint = Math.floor((array.length - midpoint) / 2) + midpoint;
      return checkMidpoint(newMidpoint);
    } else if (array[midpoint] > target ){
      newMidpoint = Math.floor((array.length - midpoint) / 2 );
      return checkMidpoint(newMidpoint);
    } else if ( (midpoint === 0 && array[midpoint] !== target) || midpoint === array.length){
      return null
    }
  };

return checkMidpoint(midpoint);

};



