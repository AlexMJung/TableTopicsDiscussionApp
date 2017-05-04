// requires
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//schema
var ThemesSchema = mongoose.Schema({
  theme: String,
  questionsArray: []
});//ends ThemesSchema


//prototype
var Themes = mongoose.model( "themes", ThemesSchema, "themes");

//CRUD
//gets
  router.get( '/getAll', function(req,res){
    Themes.find(function( err, allThemes){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }//ends error
      res.send(allThemes);
    });
  });//ends get all themes


//posts
  router.post( '/addTheme', function(req,res){
    var theme = new Themes();
    theme.theme = req.body.theme;
    theme.questionsArray = req.body.questionsArray;

    theme.save(function(err, savedTheme){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedTheme);
    });//end theme.save
  });//ends router.post to /addTheme


//puts
  router.put('/updateTheme', function(req,res){
    var id = req.body._id;
    var questionsArray = req.body.questionsArray;

    Themes.findOneAndUpdate(
        {'_id': id},
        {$addToSet:{'questionsArray':{$each: questionsArray}}},
        {new: true},
        function(err, updatedObject){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      console.log(updatedObject);
      res.send(updatedObject);
    });//ends findOneAndUpdate
  });//ends router.put to /updateTheme

//deletes

//exports
module.exports = router;
