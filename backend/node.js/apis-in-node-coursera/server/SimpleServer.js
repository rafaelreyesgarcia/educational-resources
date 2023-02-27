const http = require('http');

http.createServer((req, res) => {
    console.log('request.method', req.method);

    if (req.method === 'GET') {
        res.statusCode = 200;
        res.write('<h1>This is a node.js app!</h1>');
    }
}).listen(3000, () => {
    console.log('server started at port 3000...');
});