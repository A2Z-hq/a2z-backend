const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Defining port for server
var port = process.env.PORT || 3001

//Initialise express app
const app = express()

// parser request of content type  - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))

//parse request of content-type json
app.use(bodyParser.json())
app.use(morgan('dev'));

//Test API 
app.get('/test', (req, res)=>{
    res.json({ "message" : "API is working"});
});
 
app.get('/', (req, res)=>{
    res.json({ "message" : "Welcome to A2Z Resources backend"})
});

// start the server
app.listen(port, () => {
    console.log("Server is listening on port: " + port)
})

