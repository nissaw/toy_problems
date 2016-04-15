'use strict'
const insertionSort = function(arr){

  for(let i = 1; i < arr.length; i++){
    //if current element is less than prev
    if(arr[i] < arr[i-1]){
      var movingNum = arr.splice(i, 1)[0];
      for(let k = i-1; k >= 0; k--){
        // find an element that arr[i] is greater than and insert it there
        if(movingNum >= arr[k]){
          //insert at k+1 (splice)
          arr.splice(k+1,0,movingNum)
        }
      }
      // otherwise insert it at 0
      arr.unshift(movingNum);
    }
  }
  return arr;
};

// refactored
const insertionSort = (nums) => {
  // start with the second element
  for (let i = 1; i < nums.length; i++) {
    //look back at the first element and keep checking until you've gotten back to your current loc
    for (let j = 0; j < i; j++) {
      // compare current element with each previous element until you find one it is less than
      if (nums[i] < nums[j]) {
        // when you've found a num that current is less than splice out the current element
        let spliced = nums.splice(i, 1);
        // splice in the element you just removed at the index where you found the smaller val
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
};


// removes splicing in favor of a reverse Bubble sort swapping situation
const insertionSort = (nums) => {
  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    for (let j = i - 1; j > -1 && array[j] > currentValue; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = currentValue;
  }

  return array;
};


console.log(insertionSort([2]));
console.log(insertionSort([2,3,1,0,9]));
console.log(insertionSort([2,4,3,1]));
