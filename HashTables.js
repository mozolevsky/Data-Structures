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
        } else if (this.table[index].key === node.key) {
            this.table[index].value = node.value;
        } else {
            let currentNode = this.table[index];

            while (currentNode.next) {
                if (currentNode.key === node.key) {
                    currentNode.value = node.value;
                    return;
                }

                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
    }

    get(key) {
        let index = this.hash(key);

        if (!this.table[index]) {
            return null;
        } else {
            let currentNode = this.table[index];

            while(currentNode) {
                if (currentNode.key === key) {
                    return currentNode.value;
                }

                currentNode = currentNode.next;
            }

            return null;
        }
    }

    getAllNodes() {
        let results= [];

        this.table.forEach(node => {
            if (node) {
                let currentNode = node;
                while (currentNode) {
                    results.push(currentNode);
                    currentNode = currentNode.next;
                }
            }
        });

        return results;
    }
}

class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

let ht1 = new HashTable(20); 

let node1 = new Node(`maximilian`, `max@mail.ru`);
let node2 = new Node(`alex`, `alex@mail.ru`);
let node3= new Node(`alex`, `alex@gmail.com`);
let node4= new Node(`max`, `max@rambler.ru`);

ht1.insert(node1);
ht1.insert(node2);
ht1.insert(node3);
ht1.insert(node4);

console.log(ht1.table);
console.log(ht1.getAllNodes());