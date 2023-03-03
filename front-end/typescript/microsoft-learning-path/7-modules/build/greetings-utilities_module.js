"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
exports.returnGreeting = returnGreeting;
// not needed to export as its only used within the module
function getLength(message) {
    return message.length;
}
