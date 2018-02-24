
  
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}  

let bst1 = new BST(100);

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    // go to left side
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else {
    //go to right side
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
}

bst1.insert(110);
bst1.insert(100);
bst1.insert(90);
bst1.insert(120);
bst1.insert(80);
bst1.insert(50);

console.log(bst1);

BST.prototype.contains = function(value) {
  if (this.value === value) {
    return value;
  } else if (value < this.value) {
    // go to left side
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    // go to right side
    if (!this.right) {
      return false;
    } else {
       return this.right.contains(value);
    }
  }
}
  
bst1.contains(120);
  