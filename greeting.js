function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
let age = getName('How old are you?');
console.log(`Hello, ${firstName} ${lastName}, ${age}!`);