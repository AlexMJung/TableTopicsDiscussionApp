//base modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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

//socket.io
io.on('connection', function(socket){
    console.log( "Nice work buddy! A user connected.");
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

io.on('connection', function(socket){
  socket.on('emitName', function(name){
    console.log('Name: ' + name);
    io.emit('emitName', name);
  });
});

//listen
http.listen(app.get("port"), function(){
   console.log("I'm here to listen to you: " + app.get("port"));
});
