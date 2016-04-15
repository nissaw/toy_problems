/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

// disregards duplicates
Array.prototype.isSubsetOf = function(array){
  let found = false;

  for(let i = 0; i < array.length; i++){
    for(let k = 0; k < this.length; k++){
      found = false;
      if (array[i] === this[k]){
        found = true;
      }
      if (found === false){
        return false;
      }
    }
  }
  return true;
}


// cares about duplicates but because we're using an object all keys are converted to strings so 2 => '2'
function isSubset (array, sub) {
    let wordObj = {};

  for(let i = 0; i < array.length; i++){
    wordObj[array[i]] = wordObj[array[i]]++ || 1
  }

  for (let k = 0; k < sub.length; k++){
    if(wordObj[sub[k]] > 0){
      wordObj[sub[k]]--;
    } else {
      return false;
    }
  }

  return true;
}

// deals with types without contriving a more complex key value
function isSubset(array, sub){
  let usedIndexes = [];

  for(let i = 0; i < sub.length; i++){
    let foundAt = array.indexOf(sub[i]);
    if (foundAt === -1){
      return false;
    } else if (usedIndexes.indexOf(foundAt) !== -1){
      return false;
    } else {
      usedIndexes.push(foundAt)
    }
  }

  return true;
}
