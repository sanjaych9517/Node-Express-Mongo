// external module 
const express = require('express');

// local module
 const userRoute = require("./routes/userRouter");
 const hostRouter = require("./routes/hostRouter");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRoute);
app.use(hostRouter);


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});