# intro

node built-in module HTTP supports requests for reading/writing.

is not a fast framework however, authentication and authorization wouldn't be optimal

the express framework helps build websites and HTTP APIs

# express framework

core concepts of building a web application with APIs
- routing - different sections based on URL addresses.
- support of different content types (JSON, HTML, CSV, ETC)
- authentication/authorization - sensitive data only accessible by having a role or permission level.
- read/write data

## HTTP built-in module

classes that manage a request

- `http.Server` represents an instance of an HTTP server. object needs to listen to events on a specific address/port
- `http.IncomingMessage` object is readable stream created by `Server` or `ClientRequest`, grants access to status, headers and data
- `http.ServerResponse` object is a stream created by the `Server`. defines the response headers and content


`createServer()` method creates an instance of `http.Server` class

`createrServer` expects to take a callback function, an arrow function

`http.IncomingMessage` (req) and `http.ServerResponse` (res) classes are supplied to the method.

`req` object investigates which headers and data were sent in the client request.

`res` object holds the data and response headers the server generates

`listen()` method makes the server available to accept client requests.

## streams

streams are an operating system concept.

streams define the way data is transported back and forth.

data is sent chunk by chunk from client to server and viceversa

streams allow the server to handle concurrent requests.

streams are a fundamental data structure in node

streams can
- read/write data
- send/receive messages (or events)

streaming is implemented in the http module in some classes

`req.on` method listens to incoming data from a client request

```js
req.on('data', (chunk) => {
  console.log('You received a chunk of data', chunk)
})

res.end('some data')
```

`res.end` method sends data back to the client in the `res` object stream

## express framework

- good features
- abstracts complexity like streams
- solve common issues (management, caching, redirection)

## route management

```sh
http://localhost:3000/products
```

`localhost` is the URL referencing to the local machine in a development environment

when deployed online in a production environment, the URL would reference a domain name.

> express framework uses URL, route, http verbs for route management.

http verbs `post` `put` `get` describe the action desired by the client.

express register routes and pair them to http verbs.

expres handles requests

```js
app.get('/products', (req, res) => {
  // handle the request
})

app.post('/products', (req, res) => {
  // handle the request
})
```

`get` means read, `post` means write

## serve different content types

express support many content formats.

res object has helper functions to return different types of data.

```js
res.send('plain text')

res.json({ id: 1, name: "Catcher in the Rye" })
```

- initialize a node project and install express as dependency

1. instantiate an app
- define routes and route handlers
- middleware is code that can be run before or after a request for authentication/authorization or an added feature
- startthe app by listening to a port ti receive requests

# exercise - create an express app

- initialize npm and install express

```sh
npm init -y
npm install express
```

`init` creates a default package.json file.

# manage request lifecycle with middleware

lifecycle of loggin in
- pre request - the correct header should be use to send the proper credentials. Credentials get verified and proceeds.
- construct the response - connect with a data source (endpoint, database, etc), return the requested resource, as long as the request asks for the resource correctly.
- post request - run code after request is handled.

a pre or post request is known as middleware

```js
app.use((req, res, next) => {})
```

`req` incoming requests that contains request headers and calling URL. also a body if client sent data with the request.

`res` response stream to use to write information to send back to the calling client

`next` parameter that signals the request is ok, if `next` isn't called, processing the requests stops.

to communicate with the client why the request isn't processed, `req.send` is used.

## request pipeline

```js
app.use((req, res, next) => {
  // Pre request
})
app.get('/protected-resource', () => {
  // Handle the actual request
})
app.use((req, res, next) => {
  // Post request
})

app.get('/login', () => {})
```

run pre request middleware as an argument to request handling

```js
app.get(
  '/<some route>',
 () => {
   // Pre request middleware
 }, () => {
   // Handle the actual request
 })
```

# manage request lifecycle

app should differentiate between registered customers and customers without access.

## add authorization to an express app

the app js contains an express application with 3 routes.

client.js connects to address http://localhost:3000/users

`isAuthorized` is a function that can use middleware to authorize and continue to process the request only if the authentication is valid

`isAuthorized` is added as a second argument to the `get` method requesting the `/users` route

when `isAuthorized` middleware is invoked and looks for an `authorization` header with a specific value, and its not found, the response doesn't continue and it sends back an error.

robust web application authentication/authorization requires of concepts like
- OAuth
- JSON web tokens
- JWT
- `bcrypt` library

# knowledge check

1. What steps do you need to construct a web application with Express?

Instantiate an app, Listen to the server

2. What's the preferred way to send a JSON response from an Express app?

Call the `json()` helper method on the response object, res.json({ content: '' })

3. How would you set up Express to handle a post request with JSON data?

Call `app.use(bodyParser.json())` at the top, Register a route by using the post method as in ~, Read from the `req.body` object

