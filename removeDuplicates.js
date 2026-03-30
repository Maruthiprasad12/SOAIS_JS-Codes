function removeDuplicates(arr) {
    let seen = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}

// Example
console.log(removeDuplicates([1, 2, 2, 3, 1]));
// Output: [1, 2, 3]