
const fs = require('fs');

const userRequestHandler = ((req, res) => {
    console.log(req.url, req.method, req.headers)
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<heas><title>Complete coding</title></head>');
        res.write('<body><h1>Enter Your detail:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Username"> <br><br>');
        res.write('<label for="gender">Gender:</label> &nbsp; &nbsp;')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="female"> &nbsp;')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"> <br><br>')
        res.write('<input type="submit" value="submit">')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
        fs.writeFileSync('user.text', 'Sanjay Kapoor');
        res.statusCode = 302;
        res.setHeader('Location', '/')
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<heas><title>Complete coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe / kg-Coding</h1></body>');
    res.write('</html>');
    return res.end();


})

module.exports = userRequestHandler;