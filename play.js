const express = require('express');

const app = express();

app.get('/',(req, res, next)=>{
    res.send({"message" : "test working"});
});

app.get('/testing', (req, res)=>{
    res.send({
        "messahe" : "forwaded to next route"
    });
});

app.listen(3000, (req, res)=>{
    console.log("server started at port");
});