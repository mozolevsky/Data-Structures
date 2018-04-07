
  
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

let log = val => console.log(val);

BST.prototype.depthFirstTraversal = function(iterator, order) {
  
  if (order === 'pre-order') {
    iterator(this.value);
  }

  if (this.left) {
    this.left.depthFirstTraversal(iterator, order);
  }
  
  if (order === 'in-order') {
    iterator(this.value);
  }
  
  if (this.right) {
    this.right.depthFirstTraversal(iterator, order);
  }
  
  if (order === 'post-order') {
    iterator(this.value);
  }
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  let queue = [this];

  while (queue.length) {
    let threeNode = queue.shift();
    iteratorFunc(threeNode);

    if (threeNode.left) {
      queue.push(threeNode.left);
    }
    
    if (threeNode.right) {
      queue.push(threeNode.right);
    }
  }
}

BST.prototype.getExtremeValue = function(extremeTitle = 'min') {
  let queue = [this];
  let values = [];

  while(queue.length) {
    let node = queue.shift();
    values.push(node.value);
    
    if (node.left) {
      queue.push(node.left);
    }
    
    if (node.right) {
      queue.push(node.right);
    }
  }
  
  let resultValue = this.value;
  values.forEach(val => {

    if (extremeTitle === 'min') {
      return val < resultValue ? resultValue = val : resultValue;
    }
    
    if (extremeTitle === 'max') {
      return val > resultValue ? resultValue = val : resultValue;
    }
    
  });
  
  return resultValue ;
}


  