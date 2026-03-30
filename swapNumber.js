let a = 5;
let b = 10;

console.log("Before swap: a =", a, ", b =", b);

// Swap without third variable
a = a + b; // a becomes 15
b = a - b; // b becomes 5
a = a - b; // a becomes 10

console.log("After swap: a =", a, ", b =", b);