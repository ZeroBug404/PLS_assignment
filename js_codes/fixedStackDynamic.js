// Simulating fixed size array in JavaScript
let myArray = new Array(5).fill(0);
let el = 1;

for (let i = 0; i < 5; i++) {
    myArray[i] = el;
    el += 1;
}

console.log(myArray);

// output: [1, 2, 3, 4, 5]