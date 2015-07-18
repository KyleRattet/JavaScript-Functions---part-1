//sum

function sum(a,b) {
  return a + b;
}

console.log(sum(4,6));

//isEqual
function isEqual(a,b) {
  if (a === b) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEqual(5,5));

//discount percentage
function discountPercentage(amount, discount) {
  if (discount > 100 || discount < 0) {
    return "make discount between 0 and 100";
  }
  else {
    return "$" + (amount)*(discount/100);
  }
}

console.log(discountPercentage(5,20));

///string capitalize
function stringCapitalize(string) {
  ///make a copy of the string into a new var
  var newString = string.split(" ");
  ///find length of the each split word
  for (var i = 0; i < newString.length; i++) {
    newString[i]= newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
  return newString.join(" ");
}

console.log(stringCapitalize("test it"));

//evenNumbers
function evenNumbers(num) {
  if (num > 100 || num < 0) {
    return "use num between 0 to 100";
  }
  //return integers from 0 up to num
  var intContainer = [];
  for (var i = 0; i <= num; i++) {
    if(i%2 === 0) {
      intContainer.push(i);
    }
  }
  return intContainer;
}

//isDivisible
function isDivisible(num1,num2) {
  if (num1%num2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

//bonus oddNumbers

function oddNumbers(num) {
  var odd = [];
  if (num > 100 || num < 0) {
    return "give # between 0 and 100";
  }
  ///if num > 40 output all numbers from 40 to num
  if (num<=40) {
    for (var i = 0; i <=40; i++) {
      if(i%2===1) {
      odd.push(i);
      }
    }
  } else {
    for (var i = 40; i < num; i++) {
      if(i%2===1) {
        odd.push(i);
      }
    }
  }
  return odd;
}

console.log(oddNumbers(4));
