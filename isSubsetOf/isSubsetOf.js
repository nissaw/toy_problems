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


// are the elements in the calling array contained in the paramter?
  var callingArray = ['commit','push']; var paramArray = ['commit','rebase','push','blame'];
    // callingArray.isSubsetOf(paramArray);
      // this.length
        // this[0] = 'commit';
        // this[1] = 'push';

Array.prototype.isSubsetOf = function(array){
  var found = false;
  // var set = {};
  var set = [];

  for (var i = 0; i < this.length; i++ ){
    for (var k = 0; k < array.length; k++ ) {
      if (this[i] === array[k]) {
        // set[this[i]] = this[i]; // this overwrites duplicates to comparing length does not work;
        set.push(this[i]);
      }
    } 
  }

  if (Object.keys(set).length === this.length) {
    found = true;
  }


  return found;
};
