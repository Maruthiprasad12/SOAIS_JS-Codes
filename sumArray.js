function sumArray(arr) {
    let sum = 0; // initialize sum

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add each element
    }

    return sum;
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15