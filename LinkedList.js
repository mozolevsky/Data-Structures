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

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  
  this.head = this.head.next;

  if (this.head) {
      this.head.prev = null;
  } else {
      this.tail = null;
  }
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  
  this.tail = this.tail.prev;
  
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
}

LinkedList.prototype.search = function(value) {
  if (!this.head) return null;
  
  let crawler = this.head;
  
  while (crawler) {
    if (crawler.value === value) {
      return crawler.value;
    }
    
    crawler = crawler.next;
  }
  
  return 'Not found';
}

LinkedList.prototype.indexOf = function(value) {
  if (!this.head) return null;
  
  let crawler = this.head;
  let currentIndex = 0;
  let indexes = [];
  
  while (crawler) {
    if (crawler.value === value) {
      indexes.push(currentIndex);
    }
    
    crawler = crawler.next;
    currentIndex++;
  }
  
  return indexes;
}