//console.log("test");

//1. Define a function called sum that takes two numbers as arguments and returns their sum.

function sum (num1, num2) {
  return num1 + num2
}

console.log(sum(2,3));

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

console.log(isEqual(2,2));

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

console.log(discountPercentage(10,25));

//4. Define a function called stringCapitalize that takes a string as an argument
//and returns the same string with the first letter of each word capitalized.
//Assume that each individual work is separated by only one space.

function stringCapitalize(str) {
  //create an array of individual strings for words
  var individual =str.split(" ");
  //for loop to isolate each object
  for (var i = 0; i < individual.length; i++) {
    //variable to isolate first letter or each word
    var firstLetter = individual[i].charAt(0);
    //variable to isolate rest of each words
    var restOfWord = individual[i].slice(1);
    //variable to combine first letter and rest of word
    individual[i] = firstLetter.toUpperCase() + restOfWord;
    // individual[i].charAt(0).toUpperCase() + individual(i).slice(1)
  }
  return individual.join(" ");
}
  // return individual.toUpperCase
  //iterate through each word
  //for loop
  //variable to target the first letter in first word
console.log(stringCapitalize("test this stuff"));

//5. Define a function called evenNumbers that takes a random integer, from 0 to
//100, and outputs all the even integers from 0 to that random number.

function evenNumbers (randomInteger) {
  if ( randomInteger > 100 || randomInteger < 0){
    return "number has to be between 0 and 100";
  }
  var even =[];
  for (var i = 0; i <=randomInteger; i++) {
    if (i%2 === 0) {
      even.push(i);
    }
  }
  return even
}
console.log(evenNumbers(15));

//6. Define a function called isDivisible that takes two arguments and returns a
//boolean. Return true if the first argument is divisible by the second; otherwise,
//return false.

function isDivisible(argument1, argument2) {
  if ((argument1/argument2) % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}

console.log(isDivisible(6,4));

//7. Bonus: Write a function called oddNumbers that takes a random integer, from
//0 to 100. If the number is greater than 40 then output all the odd integers from
//40 to the random number. If the number is less than 40, output all the odd integers
//from 0 to 40.

function oddNumbers(numberRandom) {
  if (numberRandom > 100 || numberRandom < 0) {
    return "number has to be 0<number<100";
  }
  var odd = [];
  if (numberRandom <= 40) {
    for (var i = 0; i <= numberRandom; i++) {
      if (i%2 == 1){
        odd.push(i);
      }
    }
    }  else {
      for (var i = 40; i <= numberRandom; i++) {
        if (i%2 === 1){
          odd.push(i);
        }
      }
    }
  return odd;
}
console.log(oddNumbers(42));
