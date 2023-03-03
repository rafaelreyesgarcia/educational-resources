import { returnGreeting } from './greetings_module.js'; // imports a single function in the module
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
// if there would be multiple exports they can be imported into a single variable
import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
import dotenv from 'dotenv';

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

// access values in each key in process.env
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);

