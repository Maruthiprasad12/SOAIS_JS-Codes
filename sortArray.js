function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example
console.log(sortArray([5, 2, 9, 1, 5, 6]));
// Output: [1, 2, 5, 5, 6, 9]