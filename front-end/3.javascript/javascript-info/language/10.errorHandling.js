// error properties
try {
  lalala;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

let error = new Error(message);
let syntaxError = new SyntaxError(Message);
let referenceError = new ReferenceError(message);


let json = '{"age": 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('incomplete data: no name');
  }
  console.log(user.name);
} catch (err) {
  console.log('JSON Error: ' + err.message);
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('no field: age');
  }

  if (!user.name) {
    throw new ValidationError('no field: name');
  }

  return user;
}

try {
  let user = readUser('{"age": 25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log('invalid data: ' + err.message);
  } else if (err instanceof SyntaxError) {
    console.log('JSON SyntaxError: ' + err.message);
  } else {
    throw err; /* unknown error, rethrow it*/
  }
}



