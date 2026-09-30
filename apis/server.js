const express = require('express');
const mongoose = require('mongoose');
const app = express();



try {
    (async () => {
        const connectionInstance = await mongoose.connect("mongodb://127.0.0.1:27017/Learn");
        console.log(connectionInstance.Collection.host)
    })()

} catch (error) {
    console.log(error);
}



app.get("/", (req, res) => {
    res.send("hi I am root");
})

app.listen(5000, () => {
    console.log(`server is listening on http://localhost:5000`)
}) 
