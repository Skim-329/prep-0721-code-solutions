// create your loops here.
var counter = 0;
var numbers = [];
for (let i = 0; i < 10; i++) {
  counter =
    numbers.push(counter);
}
console.log(numbers);

var counter = 0;
var numbers = [];
for (let i = 0; i < 10; i++) {
  counter += 2;
  numbers.push(counter);
}
console.log(numbers);

for (let i = 100; i >= 1; i--) {
  console.log('Time till explosion' + ' ' + i);
}
