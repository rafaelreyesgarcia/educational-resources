# RESTful APIs

REST **representational state transfer**

- web-based architecture that uses HTTP
- servers and clients communicate with resources
- XML or JSON represent resources

front end
resources <-> client <--> network / internet (API interface) <--> server <-> resources

HTTP methods

- GET - read only access to a resource
- PUT - create a new resource
- POST - update an existing resource
- DELETE - remove an existing resource

APIs allow a server and a client process to communicate with preset specifications.

# build a skeleton node.js backend application

initialize npm project

`npm init -y`

create the `server.js` node.js app

- server is event-driven (non-blocking)
- request and response objects are used to communicate
- HTTP method is found on request object
- HTTP response codes are used to communicate whether the request succeeded

# RESTful GET to return a list of items

HTTP methods: GET, POST, PUT, DELETE

url `http://localhost:3000/getlist`

`getlist` is the path name to the api

**CORS**

cross-origin resource sharing

- JSON is the most common way to exchange data with REST
- HTTP header contains control parameters (allowed origins)
- CORS is a mechanism that allows a server to limit access

# knowledge check = RESTful API

- two objects that node.js server callback function expects as parameter from the client process?
**request and response**

url is embedded in the request object

http is a module

- where to fint the REST method in a node.js server callback function?
**in the request object passed as parameter**

response object is used to pass data back to the client process

the URL in the request object doesn't contain the REST method

- where will the HTTP response status code for the client process be set?

**in the statusCode member(method, property) of the response object**

url is not used to pass information back to the client process

# RESTful PUT to add items to a list

HTTP method: PUT

URL: http://localhost:3000/newItem?newItemName=Guitar&newItemPrice=249.50

`newItem` is the path name, endpoint

`?` begin of query

`&` parameters

- path name and parameters are sent in the URL
- parse function parses URL
- POST, PUT, DELETE methods are preceded by a preflight method OPTIONS

# use RESTful POST to update names and prices

HTTP method: POST

URL

`http://localhost:3000/updateName?id:2023-02-26T22:22:22.222Z&newItemName=Ukelele`

`http://localhost:3000/updatePrice?id=2023-02-26T22:23:23.233Z&newPrice=245.55`

find an object in a JSON array by using `findIndex`

- pathnames allow HTTP method to provide more than one function
- pathnames are parsed from the URL



