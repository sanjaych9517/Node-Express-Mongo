const http = require('http');

const app = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<heas><title>Complete coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe / kg-Coding</h1></body>');
    res.write('</html>');
    res.end();
    
})

const PORT = 3000;

app.listen(PORT,() =>{
    console.log(`server is listining on address http://localhost:${PORT}`)
})