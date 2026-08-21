console.log("kg coding is the best")
const fs = require('fs');
fs.writeFileSync("output.txt", "writting file", (err) => {
    if(err){
        console.log("error occured")
    }else{
        console.log('file written successfully')
    }
})