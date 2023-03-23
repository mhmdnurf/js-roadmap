// array
// const arr = [1, 2, 3];
// const indexOfTwo = arr.indexOf(2);

// console.log(indexOfTwo);
// console.log(arr[indexOfTwo - 1]);
// console.log(arr[indexOfTwo + 1]);

// arr.push(4);
// console.log(arr[3]);

// multidimensional array
// const multiArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// looping array
// for (let i = 0; i < multiArr.length; i++) {
//   for (let j = 0; j < multiArr[i].length; j++) {
//     console.log(multiArr[i][j]);
//   }
// }

// stack dapat diimplemetasikan pada array menggunakan push dan pop
// implementasi real stack
// const postfixCalc = (expr) => {
//   let stack = [];

//   for (let i = 0; i < expr.length; i++) {
//     if (!isNaN(expr[i])) {
//       stack.push(Number(expr[i]));
//     } else {
//       let a = stack.pop();
//       let b = stack.pop();

//       if (expr[i] === "+") {
//         stack.push(a + b);
//       } else if (expr[i] === "-") {
//         stack.push(b - a);
//       } else if (expr[i] === "*") {
//         stack.push(a * b);
//       } else if (expr[i] === "/") {
//         stack.push(b / a);
//       }
//     }
//   }

//   return stack.pop();
// };

// console.log(postfixCalc("34+5*"));
// console.log(postfixCalc("56+7*"));
// console.log(postfixCalc("33+6*"));

// queue pada array dengan metode push dan shift
// const queue = [];

// Enqueue (menambahkan elemen ke dalam queue)
// queue.push("elemen 1");
// queue.push("elemen 2");
// queue.push("elemen 3");

// Queue sekarang berisi ['elemen 1', 'elemen 2', 'elemen 3']

// Dequeue (menghapus elemen dari depan queue)
// const firstElement = queue.shift(); // firstElement = 'elemen 1'

// Queue sekarang berisi ['elemen 2', 'elemen 3']
// console.log(queue);

// single linked list
// function createNode(value) {
//   return {
//     value: value,
//     next: null,
//   };
// }

// const createLinkedList = () => {
//   return {
//     head: null,
//     tail: null,
//     length: 0,

//     push(value) {
//       const node = createNode(value);

//       if (this.head === null) {
//         this.head = node;
//         this.tail = node;
//         this.length++;
//         return node;
//       }

//       this.tail.next = node;
//       this.tail = node;
//       this.length++;

//       return node;
//     },

//     pop() {
//       if (this.isEmpty()) {
//         return null;
//       }

//       const nodeToRemove = this.tail;

//       if (this.head === this.tail) {
//         this.head = null;
//         this.tail = null;
//         this.length--;
//         return nodeToRemove;
//       }

//       let currentNode = this.head;
//       let secondToLastNode;

//       while (currentNode) {
//         if (currentNode.next === this.tail) {
//           secondToLastNode = currentNode;
//           break;
//         }
//         currentNode = currentNode.next;
//       }

//       secondToLastNode.next = null;
//       this.tail = secondToLastNode;
//       this.length--;

//       return nodeToRemove;
//     },

//     get(index) {
//       if (index < 0 || index > this.length - 1) {
//         return null;
//       }

//       if (index === 0) {
//         return this.head;
//       }

//       let currentNode = this.head;
//       let i = 0;

//       while (i < index) {
//         i++;
//         currentNode = currentNode.next;
//       }

//       return currentNode;
//     },

//     delete(index) {
//       if (index < 0 || index > this.length - 1) {
//         return null;
//       }

//       if (index === 0) {
//         const nodeToRemove = this.head;
//         this.head = this.head.next;
//         this.length--;
//         return nodeToRemove;
//       }

//       let currentNode = this.head;
//       let previousNode;
//       let i = 0;

//       while (i < index) {
//         i++;
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }

//       const nodeToRemove = currentNode;
//       previousNode.next = currentNode.next;
//       this.length--;

//       return nodeToRemove;
//     },

//     isEmpty() {
//       return this.length === 0;
//     },

//     print() {
//       const values = [];
//       let currentNode = this.head;

//       while (currentNode) {
//         values.push(currentNode.value);
//         currentNode = currentNode.next;
//       }

//       return values.join(" => ");
//     },
//   };
// };

// const list = createLinkedList();
// list.push("apple");
// list.push("banana");
// list.push("cherry");
// console.log(list.print());
// list.pop();
// console.log(list.print());
// list.delete(0);
// console.log(list.print());

// double linked list
// var list = new DoublyLinkedList();

// function Node(data) {
//   this.data = data;
//   this.prev = null;
//   this.next = null;
// }

// function DoublyLinkedList() {
//   this.head = null;
//   this.tail = null;
//   this.length = 0;
// }

// DoublyLinkedList.prototype.add = function (data) {
//   var node = new Node(data);
//   if (!this.head) {
//     this.head = node;
//     this.tail = node;
//   } else {
//     node.prev = this.tail;
//     this.tail.next = node;
//     this.tail = node;
//   }
//   this.length++;
// };

// DoublyLinkedList.prototype.remove = function (index) {
//   if (index < 0 || index >= this.length) {
//     return null;
//   }

//   var currentNode = this.head;
//   if (index === 0) {
//     this.head = currentNode.next;
//     if (this.head) {
//       this.head.prev = null;
//     } else {
//       this.tail = null;
//     }
//   } else if (index === this.length - 1) {
//     currentNode = this.tail;
//     this.tail = currentNode.prev;
//     this.tail.next = null;
//   } else {
//     for (var i = 0; i < index; i++) {
//       currentNode = currentNode.next;
//     }
//     currentNode.prev.next = currentNode.next;
//     currentNode.next.prev = currentNode.prev;
//   }
//   this.length--;
//   return currentNode.data;
// };

// list.add("data pertama");
// list.add("data kedua");
// list.add("data ketiga");
// list.add("data keempat");
// list.add("data kelima");

// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);
// console.log(list.tail.data);
// console.log(list.tail.prev.data);
// console.log(list.tail.prev.prev.data);

// let zaka = ["Muhammad", "Nurfatkhur"];

// zaka.push("Rahman");
// zaka.pop(2);
// console.log(zaka);
