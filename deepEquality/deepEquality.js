/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
[  ],  [ ]
var apple = {
  a: 1, 
  b: {c:3}
}

var orange = {
  a: 1, 
  b: {c:6}
}


var deepEquals = function(apple, orange){
  if (apple === orange) { return true; }
  if (!orange || !apple) { return false; }
  if (!(apple instanceOf Object ))|| (!(orange instanceOf Object )){ return false; }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length){ return false; }
  if (appleKeys.length === 0) { return true; }
  for (var key in apple){
    if (!deepEquals(apple[key], orange[key])){ return false; }
  }
  return true;
};


//   var areEqual = true;

 
//   var subroutine = function(obj1, obj2) {
//     keyArr1 = Object.keys(obj1); // [a, b]
//     // keyArr2 = Object.keys(obj2);

//   for (var key in obj1){
//     if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'object'){
//       subroutine(currentKey, obj2[currentKey]) 
//     } else if (obj2.hasOwnProperty(currentKey) && obj1[currentKey] !== obj2[currentKey]){
//       return areEqual = false;
//     }
//   }
//   subroutine(apple, orange)
//   }
// return areEqual;

// };


