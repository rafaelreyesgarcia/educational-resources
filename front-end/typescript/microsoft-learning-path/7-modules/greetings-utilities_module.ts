export function returnGreeting (greeting: string) {
  let greetingLength = getLength(greeting);
  console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
// not needed to export as its only used within the module
function getLength(message: string): number {
  return message.length
}