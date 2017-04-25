//base modules
var express = require('express');
var app = express();

//david bowies modules
//add modules for database connections
//database connections should be very clean and should just establish
//connections to the two databse collections you will have for this project
//collection 1 is to the passports collections
//collection 2 is to the sessions collections

//route modules
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');

// // Route includes <--- this is from the BASE Project.
// var index = require('./routes/index');
// var user = require('./routes/user');
// var register = require('./routes/register');

//app config
app.set('port', (process.env.PORT || 5000));

//middleware
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files <---MOVE THIS TO A Route
app.use(express.static('./server/public'));

//passport configuration
var passport = require('./strategies/userStrategy');
var session = require('express-session');

app.use(session({
   secret: 'secret',
   key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/register', register);
app.use('/user', user);
app.use('/', index);

// Mongo Connection // <----NEEED TO MOVE MONGO CONNECTION TO A module
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI !== undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/passport';
}

// var mongoURI = "mongodb://localhost:27017/passport";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
   res.sendStatus(500);
});

mongoDB.once('open', function(){
   console.log("Mongo and I had coffee. We feel good about each other now.");
});

// // App Set // <---- This is from the BASE Project.
// app.set('port', (process.env.PORT || 5000));

//listen
app.listen(app.get("port"), function(){
   console.log("I'm here to listen to you: " + app.get("port"));
});
