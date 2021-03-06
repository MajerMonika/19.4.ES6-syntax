'use strict';

// Zadanie 1
var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world + '!');

// Zadanie 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(5));

// Zadanie 3
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (previous, current) {
    return previous + current;
  }) / numbers.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Zadanie 5
var names = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = names[2],
    lastName = names[4];


console.log(firstName, lastName);
