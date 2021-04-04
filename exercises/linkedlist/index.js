// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Something to consider: combine getFirst, getLast with getAt like getAt(0). Or combine insertFirst, insertLast with insertAt(data, 0);
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        // while(node.next) {
        //     node = node.next;
        // }
        // return node;
        while(node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        // let node = this.head;

        // while(node) {
        //     this.head = node.next;
        //     node = node.next;
        // }
        // return this.head;
        this.head = null;
       
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        } 

        if (!this.head.next) {
            return this.head = null;
        }
       
        // let previous = this.head;
        // let node = previous.next;

        // while(node) {
        //     if (!node.next) {
        //         return previous.next = null;
        //     }
        //     previous = node;
        //     node = previous.next;
        // }

        let previous = this.head;
        let node = this.head.next;
        
        while(node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        // if (!this.head) {
        //     this.head = new Node(data);
        // }

        // let node = this.getLast();

        // node.next = new Node(data);

        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // the chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        // if (!node) {
        //     return null;
        // }

        // if (index > this.size()) {
        //     return null;
        // }

        // while(counter < index) {
        //     counter++;
        //     node = node.next;
        // }

        // return node;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;

    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            // this.insertFirst(data);
            this.head = new Node(data, this.head);
            return;
        }

        // if (index >= this.size()) {
        //     this.insertLast(data);
        // }

        // const previous = this.getAt(index - 1);
        // if (!previous || !previous.next) {
        //     return;
        // }
        // previous.next = new Node(data, previous.next);

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
