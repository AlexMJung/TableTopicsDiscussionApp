// requires
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

console.log("congrats Keith, you made it all the way to createSession on the server side!");
//schema
var SessionsSchema = mongoose.Schema({
  name: 'string',
  theme: 'string',
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
    session.name = req.body.name;
    session.theme = req.body.theme;
    session.questionsArray = req.body.questionsArray;

    session.save(function(err, savedSession){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedSession);
    });//end session.save
  });//ends router.post to /addSession


//puts

//deletes

//exports
module.exports = router;
