var mongoose = require('mongoose');

var mongoURI = '';

if(process.env.MONGODB_URI !== undefined) {
    mongoURI = process.env.MONGODB_URI;
} else {
    mongoURI = 'mongodb://localhost:27017/TableTopicsDPG';
}

var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
   res.sendStatus(500);
});

MongoDB.once('open', function(){
   console.log("Mongo and I had coffee. We feel good about each other now.");
});

module.exports = MongoDB;
