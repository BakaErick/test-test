const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res, next) {
//   res.send('Hi')
  //request and respond
    res.json(
        {
            msg: "This is API",
            data: "hello",
            status: true
        }
    )
})
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
});
