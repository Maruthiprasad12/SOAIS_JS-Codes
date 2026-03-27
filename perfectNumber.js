function isPerfect(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {   // check all numbers less than num
    if (num % i === 0) {            // if i divides num
      sum = sum + i;                // add i to sum
    }
  }

  if (sum === num) {
    console.log(num + " is a perfect number");
  } else {
    console.log(num + " is not a perfect number");
  }
}

isPerfect(6);   // 6 is a perfect number
isPerfect(28);  // 28 is a perfect number
isPerfect(12);  // 12 is not a perfect number