const LocalStrategy     = require('passport-local');
const {mongoose}        = require('./config/mongoose');
const bodyParser        = require('body-parser');
const passport          = require('passport');
const express           = require('express');
const morgan            = require('morgan');


//Routes
const api               = require('./routes/api');
const auth              = require('./routes/auth');

//Mongoose model exports
const CodingResources   = require('./models/coding');
const User              = require('./models/user');

//Middleware
const middleware        = require('./middleware');

// Defining port for server
var port = process.env.PORT || 3001

//Initialise express app
const app = express()

// parser request of content type  - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(morgan('dev'));

//PASSPORT SETUP
app.use(require('express-session')({
    secret: "THIS IS THE BIGGEST SECRET!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Test API 
app.get('/test', middleware.isLoggedIn,(req, res)=>{
    res.json({ "message" : "API is working"});
});
 
app.get('/', (req, res)=>{
    res.json({ "message" : "Welcome to A2Z Resources backend"})
});

//Initialise the routes
app.use('/', api);
app.use('/', auth);

// start the server
app.listen(port, () => {
    console.log("Server is listening on port: " + port)
});