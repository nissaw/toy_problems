/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3] or [7, 0, 1, 2, 3, 4, 5, 6]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // check first, check midpoint, check last
  4 , 7, 3

  var len = rotated.length;
  var high;
  var low;

  var check = function(low, high){

    var mid = rotated[Math.floor(len / 2) + low];

   //base cases 
    if ( target === rotated[mid]){
      return mid;
    } else if ( target === rotated[low] ){
      return low;
    } else if ( target === rotated[high]){
      return high;
    } 

    //everything to the right of mid is either greater than the mid or less than the low
    //everything to the left of the mid is either less than the mid or greater than the low
  
  

    else if (target > rotated[low] && target < rotated[mid] || target < rotated[] ) but not > mid or { // if it is greater than low or less than mid
      high = mid; // check left
      return check(low, high);
    } else if (target > rotated[mid] || target < rotated[high])  {// is is either greater than mid or less than high
      low = mid;
      return check(low, high);
    } else {
      return null;
    }


  }
  check(rotated[0], rotated[len -1]);
  // is is either greater than mid or less than high
};

