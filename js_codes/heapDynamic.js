// JavaScript arrays are dynamic by default - can add/remove elements anytime
let myArr = [];

myArr.push(5);  // equivalent to append()
myArr.push(8);
console.log(myArr);   // output: [5, 8]

myArr.push(100);
console.log(myArr);   // output: [5, 8, 100]

myArr.splice(1, 1);   // remove 1 element at index 1
console.log(myArr);   // output: [5, 100]