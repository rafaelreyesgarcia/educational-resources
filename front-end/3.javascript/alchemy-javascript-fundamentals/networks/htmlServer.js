const http = require('http');

const HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Hello World</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    Hello World
  </body>
</html>
`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(HTML);
});

server.listen({ port: 3000, host: 'localhost' }, () => {
  console.log('Up and Running!');
});

