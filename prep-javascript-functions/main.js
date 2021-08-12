function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(24);
console.log('minutes', minutes);

function getGreeting(name) {
  return name;
}

var greeting = getGreeting('Jack');
console.log('Hello' + ' ' + greeting + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var answer = addAndMultiplyBy5(4, 8);
console.log(answer);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var result = multiplyAndDivideBy5(10, 5);
console.log(result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(38, 26);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var circumference = getCircleCircumference(7);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Frodo', 'Baggins');
console.log(name);

function cube(number) {
  return number * number * number;
}

var response = cube(4);
console.log(response);
