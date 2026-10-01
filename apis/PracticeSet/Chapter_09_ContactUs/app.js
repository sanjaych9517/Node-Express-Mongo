const express = require('express');
const app = express();

app.use((req, res, next) => {
     console.log("first Dummy middleware", req.url, req.method);
     next();
});

app.use((req, res, next) => {
    console.log(`Second Dummy middleware`, req.url, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log(`Third Responce Middleware`, req.url, req.method);
//     res.send('<h1>Welcome To Complete Coding</h1>')
// })

app.get("/", (req, res, next) => {
  console.log(`Handling / for GET`, req.url, req.method);
  res.send(`<h1>Welcome To Complete Coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
    console.log(`Handling / for SET`, req.url, req.method);
    res.send(
        `<h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
        <input type="text" Placeholder="Enter your name" name ="name"/>
        <input type="email" placeholder="Enter Your Email" name="email" />
        <input type="submit" name="submit" />
        <form/>
        ` );
})

app.post("/contact-us",(req, res, next) => {
 console.log(`Handling /contact-us for POST`, req.url, req.method);
  res.send(`you will contact you shortly</h1>`);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on Porthttp://localhost:${PORT}`);
})