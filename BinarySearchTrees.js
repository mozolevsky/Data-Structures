
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }  
  
  let bst1 = new BST(100);
  
  BST.prototype.insert = function(value) {
    let leftNode = this.left;
    let rightNode = this.right;
    let currentNode = this.value;
    
    if (value <= currentNode) {
      // go to left side
      if (!leftNode) {
        leftNode = new BTS(value);
      } else {
        leftNode.insert(value);
      }
    } else {
      //go to right side
      if (!rightNode) {
        rightNode = new BTS(value);
      } else {
        rightNode.insert(value);
      }
    }
  }
  