const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res)=> {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powere-By','Node.js');

    res.end('Hello World');
});
server.listen(PORT, ()=> {
    console.log(`sever running at http://localhost:${PORT}`);
})