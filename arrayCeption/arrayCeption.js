// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

var arrayception = function(array, curDepth, maxDepth){
  curDepth = curDepth || 0;
  maxDepth = maxDepth || 0;

  array.forEach(function(element){
    if (Array.isArray(element)){
      maxDepth = arrayception(element, curDepth+1, maxDepth);
    } else {
      curDepth++;
      maxDepth = Math.max(curDepth, maxDepth);
      curDepth-- ;
    }
  });

  return maxDepth;
};
