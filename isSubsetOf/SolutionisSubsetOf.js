
SolutionisSubsetOf.js
var objectify = function (arr) {
  return arr.reduce(function (out, item) {
  out[item ] = true;
  return out;
  }, {})}
}

var is SubsteOb = function (obj1, obj2) {
  for (var key i obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

Array.prototype.isSubsetOf = function(arr) {
  return isSubsetObjs(obectify(this), objectify(arr));
}


// the calling array doesn't need to turned into an object
//