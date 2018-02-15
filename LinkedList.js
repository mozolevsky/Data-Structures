function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(prev, next, value) {
  this.prev = prev,
  this.next = next,
  this.value = value
}

LinkedList.prototype.addToHead = function(value) {
   let createdNode = new Node(null, this.head, value);

   if (!this.head) {
     this.tail = createdNode;
   }
   
   if (this.head) {
     this.head.prev = createdNode;
   } 
   
   this.head = createdNode;
}

LinkedList.prototype.addToTail = function (value) {
  let createdNode = new Node(this.tail, null, value);
  
  if (!this.tail) {
    this.head = createdNode;
  }
  
  if (this.tail) {
    this.tail.next = createdNode;
  }
  
  this.tail = createdNode;
}

LinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null;
  
  if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
  } else {
      this.tail = null;
  }
  
}


let LL = new LinkedList();

LL.addToTail(10);
LL.addToTail(9);
LL.removeFromHead();

console.log(LL);