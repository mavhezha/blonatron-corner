const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello', (req, res) =>{
    res.send("hello")
})

app.listen(8080, () =>{
    console.log("Server started")
})