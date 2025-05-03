# PLS_assignment

 
## Memory Allocation in Arrays: C++ vs Python


---

## 🔹 Fixed Stack Dynamic

**C++:**
```cpp
int myArr[5];
```
- Array size is fixed at compile time (`5`).
- Memory is allocated on the stack.

**JS:**
```JS
const myArr = new Array(5).fill(0);
```
- Simulates fixed-size array behavior
- Memory is allocated on the heap (all JS arrays are heap-allocated)
- Technically still resizable (JS arrays are always dynamic)

---

## 🔹 Stack Dynamic

**C++:**
```cpp
void myFunc(int size) {
    int myArr[size];
}
```
- Array size is determined at **run time**.
- Memory is allocated on the **stack**.

**JS:**
```js
function func(size) {
    const myArr = new Array(size).fill(0);
}
```
- C++ size determined at runtime but still on stack
- JavaScript always uses heap allocation
- C++ has potential stack overflow risk

---

## 🔹 Fixed Heap Dynamic

**C++:**
```cpp
int* arr = new int[5];
// use arr...
delete[] arr;
```
- Array of size `5` is allocated on the **heap**.
- Must manually free memory using `delete[]`.

**JS:**
```js
const myArr = Array.from({length: 5}, (_, i) => i * 2);
```
- Both use heap memory
- C++ requires explicit memory management
- JavaScript handles garbage collection automatically

---

## 🔹 Heap Dynamic

**C++:**
```cpp
#include <vector>
#include <iostream>
using namespace std;

vector<int> myArr;
myArr.push_back(5);
myArr.push_back(10);
myArr.push_back(15);
```
- `vector` grows and shrinks dynamically at runtime.
- Memory is allocated on the **heap**.

**JS:**
```js
const myArr = []; // Native dynamic array
myArr.push(10);
```
- Both grow/shrink dynamically
- C++ offers better performance predictability
- JavaScript simpler to work with
