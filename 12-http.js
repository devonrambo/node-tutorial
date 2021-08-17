const http = require('http');

const server = http.createServer((req, res) => {
// incoming request req
// outgoing response res

if(req.url === '/'){
    res.write('Welcome to our home page');
res.end();
}

if(req.url === '/about'){
    res.end('Here is our companies short history')
}

res.end(
    `<h1>Oops</h1>`
)

})

server.listen(5000)
// port you want your server to listen to 