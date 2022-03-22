//1. Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
  return flag.toString();
}

//2. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
  return lastName.concat(", ", firstName);
}

//3. Create a function that returns the number of arguments it was called with.

function numArgs() {
  total = arguments.length;
  return total;
}

//4. Return first value of an array

function getFirstValue(arr) {
  let firstValue = arr[0];
  return firstValue;
}

//5. Write a function that converts hours into seconds.

function howManySeconds(hours) {
  const toSeconds = hours * 60 * 60;
  return toSeconds;
}

//6. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
  return (result = side1 + side2 - 1);
}
