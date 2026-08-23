
// external module
const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    console.log( " came in first middle ware",req.url, req.method);
    // res.send("<p> Came from first middleware:</p>")
    next();
});

app.post("/submit-details", (req, res, next) => {
    console.log( " came in second  middle ware",req.url, req.method);
    res.send("<p> Welcome to complete coding in Node.js series </p>")
});

app.use("/", (req, res, next) => {
    console.log( " came in first middle ware",req.url, req.method);
    res.send("<p> Came from another middleware:</p>")
    next();
});



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is listening on port http://localhost:${PORT}`);
})