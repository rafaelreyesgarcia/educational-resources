const http = require('http');
const PORT = 3000;

// createServer method creates an instance of the http.Server class
// createServer method expects to take a callback function
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})