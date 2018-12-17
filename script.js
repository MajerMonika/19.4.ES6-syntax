// Zadanie 1
const hello = 'Hello';
const world = 'World';	

console.log(`${hello} ${world}!`);



// Zadanie 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(5));



// Zadanie 3
const average = (...numbers) => numbers.reduce((previous, current) => previous + current) / numbers.length;

console.log(average(1))
console.log(average(1, 3)) 
console.log(average(1, 3, 6, 6));

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));



// Zadanie 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = names;

console.log(firstName, lastName);