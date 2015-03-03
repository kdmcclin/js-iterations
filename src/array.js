/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {
  return number * 2;
}

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {
  for (i = 0; i < array.length; i ++){
    array[i] = array[i] * 2;
  }
  return array;
}

/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
  return numerator / denominator;
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
  for (i = 0; i < array.length; i ++){
    array[i] = array[i] / denominator;
  }
  return array;
}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {
  return a + b;
}

/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(array) {
  counter = 0
  for (i = 0; i < array.length; i ++){
    counter += array[i]
  }
  return counter;
}

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {
  if (a < b){
    return a;
  }else{
    return b;
  }

}

/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {

  if (array.length === 0){
    return undefined;
  }

  var min = 10;

  for (var i = 0; i < array.length; i++){
    evaluator = minimum(array[i], min);
    min = evaluator;
  }
  return min;
}

/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
  if (string.charAt(string.length-1) === "."){
    return true
  } else {
    return false
  }
}

/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if(endsInPeriod(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray
}

/*
  This function should accept a number as a parameter.
  It should return true if the number is a multiple of 3.
  Otherwise, it should return false.
*/
var multiple3 = function(number) {
  if(number % 3 == 0){
    return true
  } else {
    return false
  }
}

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {
  var threesArray = [];
  for (var i = 0; i < array.length; i++){
    if(multiple3(array[i])){
      threesArray.push(array[i]);
    }
  }
  return threesArray
}