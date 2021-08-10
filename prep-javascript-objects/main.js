const person = {
  firstName: 'Billy',
  lastName: 'Ikea',
  hobby: 'Furniture building'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's first name is:", fullName);

person.job = 'carpenter';
console.log("The person's current job is:", person.job);

person.previousJob = 'librarian';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
