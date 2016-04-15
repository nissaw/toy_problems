
// Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class
var Tree = function(){
  this.children = [];
};

Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(a1,a2){
  var path1 = this.getAncestorPath(a1);
  var path2 = this.getAncestorPath(a2);

// path will be null if passed in child was not a descendant of this
  if (!path1 || !path2){
    return null;
  }

// we know for sure that the calling obj is an ancestor to both children
  var closestAncestor = this;

// record where path1 and path2 diverge
  for (var i = 0; path1[i] && path2[i]; i++){
    if (path1[i] === path2[i]){
      closestAncestor = path1[i];
    }
  }
  return closestAncestor;
};


Tree.prototype.getAncestorPath = function(child){
  // if we are on the child we are looking for
  if (this === child){
    return [this]
  }
  // step down recursively into the children
    for (var i = 0; i < this.children.length; i++){
      var path = this.children[i].getAncestorPath(child);
      if (path){
        return [this].concat(path);
      }
  }
  // null is returned when we go down the wrong path
  return null;
}
