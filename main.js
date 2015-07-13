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

//4. Define a function called stringCapitalize that takes a string as an argument
//and returns the same string with the first letter of each word capitalized.
//Assume that each individual work is separated by only one space.

function stringCapitalize(str) {
  var individual =str.split(" ");
  for (var i = 0; i < individual.length; i++) {
    var firstLetter = individual[i].charAt(0);
    var restOfWord = individual[i].slice(1);
    individual[i] = firstLetter.toUpperCase() + restOfWord;
    // individual[i].charAt(0).toUpperCase() + individual(i).slice(1)
  }
  return individual.join(" ");
}
  // return individual.toUpperCase
  //iterate through each word
  //for loop
  //variable to target the first letter in first word
console.log(stringCapitalize);
