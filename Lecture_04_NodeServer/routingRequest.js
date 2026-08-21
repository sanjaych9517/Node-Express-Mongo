const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<heas><title>Complete coding</title></head>');
        res.write('<body><h1>Welcome To Home</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/product') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<heas><title>Complete coding</title></head>');
        res.write('<body><h1>Check our product</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<heas><title>Complete coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe / kg-Coding</h1></body>');
    res.write('</html>');
     return res.end();


})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server is listening on port${PORT}`)
});