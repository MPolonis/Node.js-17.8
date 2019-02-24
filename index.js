var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            response.write(data);
            response.end();
        });

    } else {
        response.setHeader("Content-Type", "image/jpeg");
        fs.readFile('./404.jpg', (err, jpg) => {
            response.write(jpg);
            response.end();
        });
    }
});

server.listen(8080);