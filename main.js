//console.log("test");

//1. Define a function called sum that takes two numbers as arguments and returns their sum.

function sum (num1, num2) {
  return num1 + num2
}

console.log(sum);

//2. Define a function called isEqual that takes two arguments and returns a boolean.
//Return true if the two arguments are equal and return false if they are not.

function isEqual(argument1, argument2) {
  if (argument1 === argument2){
    return true;
  }
  else {
    return false;
  }
}

console.log(isEqual);

//3. Define a function called discountPercentage that returns the total discount ($),
//given the original amount and discount percentage (as arguments).
//Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage(originalAmount, discountAmountPercent) {
  if (discountAmountPercent > 100 || discountAmountPercent < 0){
    return ("Warning: Disount is greater than 100 or less than 0 percent");
  }
  else {
    return (originalAmount*(discountAmountPercent/100));
  }
}

console.log(discountPercentage);
