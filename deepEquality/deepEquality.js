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
// [  ],  [ ]
// var apple = {
//   a: 1,
//   b: {c:3}
// }
//
// var orange = {
//   a: 1,
//   b: {c:6}
// }


deepEquals = function(a, b){
// BASE CASES
  // the one happy path for primitives ===
  if (a === b) { return true; }
  // both things must exist
  if (!a || !b) { return false; }
  // at this point if a and b aren't objects and they didn't pass === they are false
  if (!(a instanceof Object) || !(b instanceof Object)){ return false; }
  // they should have the same # of keys
  if (Object.keys(a).length !== Object.keys(b).length) { return false; }
  // if they are empty objects then true
  if (Object.keys(a).length === 0){ return true; }

// RECURSIVE CASE
  // we've already confirmed they have the same # of keys
  for (var key in a) {
    if ( !deepEquals(a[key], b[key]) ){ return false; }
  }
  // alright all of our recursive cases returned true so ...
  return true;
};
