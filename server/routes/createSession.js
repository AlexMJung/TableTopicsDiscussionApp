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
    var id = req.body.id;
    var participantsArray = req.body.participantsArray;
    console.log("id and participants", id, participantsArray);
    res.sendStatus(200);
  });//ends router.put
//deletes

//exports
module.exports = router;
