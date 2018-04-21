class HashTable {
    constructor(size) {
        this.table = Array(size);
        this.tableLength = this.table.length;
    }

    hash(key) {
        let totalKeysCode = 0;

        for (let char of key) {
            totalKeysCode += char.charCodeAt(0);
        }

        console.log(totalKeysCode % this.tableLength);
        return totalKeysCode % this.tableLength;
    }

    insert(node) {
        let index = this.hash(node.key);

        if (!this.table[index]) {
            this.table[index] = node;
        } else {
            console.log(`collision`);
            let currentNode = this.table[index];

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
    }

}

class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

let ht1 = new HashTable(5); 

let node1 = new Node(`max`, `max@mail.ru`);
let node2 = new Node(`alex`, `alex@mail.ru`);
let node3= new Node(`alexander`, `alex@mail.ru`);

ht1.insert(node1);
ht1.insert(node2);
ht1.insert(node3);

console.log(ht1.table);
