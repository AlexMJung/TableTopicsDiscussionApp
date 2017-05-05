// requires
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//schema
var SessionsSchema = mongoose.Schema({
  theme: {},
  participantsArray: []
});//ends SessionsSchema

//prototype
var Sessions = mongoose.model( "sessions", SessionsSchema, "sessions");

//CRUD
//gets

//posts
  router.post( '/addSession', function(req,res){
    var session = new Sessions();
    session.theme = req.body.theme;
    session.participantsArray = req.body.participantsArray;

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
