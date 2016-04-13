function isBalanced (str) {
   var bracketStack = [];
  for (var i = 0; i < str.length; i++){
    var char = str[i];
    if (char === "(" ){
      bracketStack.push(")");
    }
    else if (char === "{" ){
      bracketStack.push("}");
    }
    else if (char === "["){
      bracketStack.push("]");
    }
    else if (char === ")" || char === "}" || char === "]"){
      var returned = bracketStack.pop();

      if (returned !== char){
        return false;

      }
    }
  }
  if (bracketStack.length > 0){
    return false;
  }
  return true;

};
