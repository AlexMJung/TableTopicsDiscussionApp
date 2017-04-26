//base modules
var express = require('express');
var app = express();

//david bowies modules
var davidBowie = require( './modules/db.js');
//collection 1 is to the passports collections
//collection 2 is to the sessions collections

//route modules
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');

//app config
app.set('port', (process.env.PORT || 5000));

//middleware
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

//listen
app.listen(app.get("port"), function(){
   console.log("I'm here to listen to you: " + app.get("port"));
});
