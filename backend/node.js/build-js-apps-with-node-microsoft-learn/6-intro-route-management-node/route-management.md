# intro

node web apis enable applications to be reachable with anyone with a browser or http-capable client software.

learning outcomes
- create API routes with node and express using javascript
- identify pars of URLs, components of a route and how they work
- implement route handling

# understanding URLs and routes

an application will have various resources.

divide the application into sections making sure resources are accessible through dedicated URLs.

## URL

unique resource locator is an address the user enters into a client to locate a specific server and a specific resource.

```sh
http://localhost:8000/products/1?page=1&pageSize=20
```

```
scheme:[//authority]path[?query][#fragment]
```

**scheme** indicates the protocol, there's many
- http
- ftp
- irc
- file

**authority**

optional user unfo (username@passowrd) and a host.

`localhost` is the host that points to a local machine as a web server.

the host is a friendly domain name instead of the IP address of a computer.

IP addresses allow routers to route requests.

**path** consist of zero to many segments

each segment is separated by a slash `/`

**query** is an optional part of the URL that's defined after a question mark `?` consists of query parameter/value pairs delimited by an ampersand `&` or semicolon `;`

can filter data further by asking for a number of records from a specific page

`?page=1&pageSize=20`

**fragment** can be even more specific likes storing the data requested in a particular order.

**route** subsection of a URL that points to a specific resource.

**route parameter** signals that you want to access a specifi resource from a collection.

`/orders/1/items/2` route parameters are `1` and `2`.

`1` specific order with unique key `1`

`2` specific order with unique key `2`

route parameters return specific resources rathern than all resources of a specific type

handlers are code that execute when a certain path is matched


```js
app.get('/products/:id', (req, res) => {
  // handle this request `req.params.id`
})
```

route parameters are written to a `params` property on the `req` object.

**query parameter**

`page` and `pageSize` are common query parameters that help filter down the returned response

```js
app.get('/products', (req, res) => {
  // handle this request `req.query.page` and `req.query.pageSize`
})

// req.query
{
  page: 1,
  pageSize: 20
}
```

`**` is a pattern that means catch-all, that ensures to handle unexpected requests.

# exercisgmae route and query parameters

data usually lives in a database or endpoint.

- use route parameters to ask for specific records
- use query parameters to specify a subset of records

route examples

`http://localhost:3000/products/1`

`http://localhost:3000/products?page=1&pageSize=2`

`http://localhost:3000/products?page=2&pageSize=2`

# read and write

data is sent through the body of the request.

to handle client's data, express has to be configured

convert incoming data into a readable format

```js
let bodyParser = require('body-parser');

// configure express to parse incoming body into intended format
app.use(bodyParser.json({ extended: false }));
```

enables data to become available on the `body` property on the `req` object.

## handle request data

`post` (create a resource) or `put` (update the resource with incoming data) method on the express instance.

```js
app.post('/<path>', (req, res) => {
  console.log('req.body', req.body) // contains incoming data
})
```

# read and write exercise

construct an API with a number of resources

each resource has several operations.

organize by resource and by operations ( create, read, update, delete ) CRUD

create/write (post)

read (get)

update/write (put)

delete/write (delete)

# knowledge check

1. What is a way to set up middleware?
`app.use({} => {})`

2. How would you respond with text content?
`res.send()`

