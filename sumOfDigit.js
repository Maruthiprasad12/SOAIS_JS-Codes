function sumOfDigits(num) {
  let sum = 0;

  for (; num > 0; ) {               // loop until num becomes 0
    sum = sum + (num % 10);         // add last digit to sum
    num = (num - (num % 10)) / 10;  // remove last digit
  }

  return sum;
}
console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(567));  // 18