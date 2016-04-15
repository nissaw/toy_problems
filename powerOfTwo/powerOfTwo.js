// recurse
function powerOfTwo(number) {
  if (number === 1){
    return true;
  } else if (number < 1) {
    return false;
  }

  return powerOfTwo(number/2);
}


// iterative
function powerOfTwo (number) {
  while(number > 1){
    number = number/2;
  }
  return number === 1;
}
