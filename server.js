const express = require('express');
const app = express();

app.get('/' , function(req , res){
    res.send("Home page")
})

app.listen((8080) , () => {
    console.log("App running on 8080.")
})