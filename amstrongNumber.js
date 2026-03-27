function isArmstrong(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;   // get last digit
    sum += digit * digit * digit; // cube of digit
    temp = (temp - (temp % 10)) / 10; // remove last digit without parseInt
  }

  if (sum === num) {
    console.log(num + " is an Armstrong number");
  } else {
    console.log(num + " is not an Armstrong number");
  }
}
isArmstrong(153); // 153 is an Armstrong number
isArmstrong(123); // 123 is not an Armstrong number