// core module 
const path = require('path');

// external module 
const express = require('express');

// local module
const userRoute = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });
app.use(express.urlencoded());

app.use(userRoute);
app.use( "/host",hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html' ));
})
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});