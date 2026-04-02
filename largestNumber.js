function findLargest(arr) {
    let largest = arr[0]; // assume first element is largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example
console.log(findLargest([10, 25, 5, 40, 15])); // 40
