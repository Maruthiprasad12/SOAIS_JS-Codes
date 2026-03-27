function secondLargest(arr) {
  let largest = arr[0];
  let second = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }

  console.log("Second largest number is:", second);
}
secondLargest([10, 5, 20, 8, 15]); // 15