function myFunc(size) {
    let myArr = new Array(size).fill(0);
    let el = 1;

    for (let i = 0; i < size; i++) {
        myArr[i] = el * 10;
        el += 1;
    }

    console.log(myArr);
}

myFunc(5); // output: [10, 20, 30, 40, 50]
myFunc(8); // output: [10, 20, 30, 40, 50, 60, 70, 80]