//base modules
var express = require('express');
var app = express();

//david bowies modules
var davidBowie = require( './modules/db.js');


//route modules
var index = require('./routes/index.js');
var user = require('./routes/user.js'); //login
var register = require('./routes/register.js');
var themes = require('./routes/themes.js');
var sessions = require('./routes/sessions.js');

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
app.use('/themes', themes);
app.use('/sessions', sessions);
app.use('/', index);

//listen
app.listen(app.get("port"), function(){
   console.log("I'm here to listen to you: " + app.get("port"));
});
