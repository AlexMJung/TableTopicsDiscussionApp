// requires
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//schema
var SessionsSchema = mongoose.Schema({
  sessionName: String,
  sessionTheme: String,
  questionsArray: [],
  participantsArray: []
});//ends SessionSchema


//prototype
var Sessions = mongoose.model( "sessions", SessionsSchema, "sessions");

//CRUD
//gets
router.get( '/getAll', function(req,res){
  Sessions.find(function( err, allSessions){
    if( err ){
      console.log(err);
      res.sendStatus(500);
    }//ends error
    res.send(allSessions);
  });
});//ends get all sessions


//posts
  router.post( '/addSession', function(req,res){
    var session = new Sessions();
    session.sessionName = req.body.sessionName;
    session.sessionTheme = req.body.sessionTheme;
    session.questionsArray = req.body.questionsArray;
    console.log("session:", session);
    session.save(function(err, savedSession){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      console.log("right before res.send");
      res.send(savedSession);
    });//end session.save
  });//ends router.post to /addSession


//puts
  router.put('/saveParticipants', function(req,res){
    var objectId = {};
    objectId.id = req.body.id;
    var participantsArray = req.body.participantsArray;

    console.log("objectId.id, then participantsArray", objectId.id, participantsArray);

    Sessions.findOneAndUpdate({'_id': objectId.id}, {$push:{'participantsArray':{$each: participantsArray}}},{new: true}, function(err, updatedObject){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      console.log(updatedObject);
      res.send(updatedObject);
    });//ends updateOne
  });//ends router.put

//deletes

//exports
module.exports = router;
