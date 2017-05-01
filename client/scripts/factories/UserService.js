myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

// user related functionality
  //variables
  var userObject = {};

  //login user
  function getuser(){
    $http.get('/user').then(function(response) {
        if(response.data.username) {
            userObject.userName = response.data.username;
            console.log('User Data: ', userObject.userName);
        } else {
            $location.path("/login");
        }
    });//ends $http.get/user
  }//ends getuser

  //logout user
  function logout(){
    $http.get('/user/logout').then(function(response) {
      $location.path("/login");
    });//ends $http.get/user/logout
  }//ends logout


//chooseTheme rleated functionality
  //variables
  var themes = {};
  var currentThemeObject;

  function getAllThemes(){
    $http.get('/themes/getAll').then(function(response){
      console.log("getAllThemes response", response);
      themes.data = response.data;
      return themes.data;
    });//ends http.get/themes/getAll
  }//ends getAllThemes

  function createTheme(newThemeObject){
    $http.post('/themes/addTheme', newThemeObject).then(function(response){
        currentThemeObject.data = response.data;
        $location.path("/addParticipants");
    });//ends http.post/themes/addTheme
  }//ends createTheme

  function updateTheme(updateObject){
    $http.put('/themes/updateTheme', updateObject).then(function(response){
      currentThemeObject.data = response.data;
      $location.path("/addParticipants");
    });//ends http.put/themes/updateTheme
  }//ends updateTheme








var currentSessionObject = {};
var randoms = {};

//addParticipants functionality

  // function createSession(newSessionObject){
  //   $http.post('/createSession/addSession', newSessionObject).then(function(response){
  //       currentSessionObject.data = response.data;
  //       $location.path("/addParticipants");
  //   });//ends post to addSession
  // }//ends createSession

  // function saveSession(saveObject){
  //   console.log("another update, save session changes");
  //   console.log("here is the object I have to play with", saveObject);
  //   var putObject = saveObject;
  //   $http.put('/createSession/saveSession', putObject).then(function(response){
  //     console.log("response", response);
  //     currentSessionObject.data = response.data;
  //     currentSessionObject.data.participantsArray = [];
  //     $location.path("/addParticipants");
  //   });//ends put to save changes to theme
  // }//ends saveSession

  function saveParticipants(currentSessionObject, sessionObject){
    if(currentSessionObject.data.questionsArray.length < sessionObject.participantsArray.length){
      console.log("you have fewer questions than participants, that is not going to work.");
    }
    var putObject = {};
    putObject.id = currentSessionObject.data._id;
    putObject.participantsArray = sessionObject.participantsArray;
    console.log("putObject", putObject);
    $http.put('/createSession/saveParticipants', putObject).then(function(response){
      console.log("response", response);
      currentSessionObject.data = response.data;
      console.log("currentSessionObject.data", currentSessionObject.data);
    $location.path("/sessionIntro");
    });//ends put to saveParticipants
  }//ends saveParticipants

  function startSession(questions, participants){
    console.log("I'm going to start a session. I've got to randomize some stuff first.");
    console.log("questions and then participants", questions, participants);
    questions = angular.copy(questions);
    participants = angular.copy(participants);
    randoms.randomQuestions = randomize(questions);
    randoms.randomParticipants = randomize(participants);
    randoms.numRound = participants.length;
    randoms.currentRound = 0;
    console.log("randomQuestions and then randomParticipants then numRound then currentRound", randoms.randomQuestions, randoms.randomParticipants, randoms.numRound, randoms.currentRound);
    $location.path("/session");

  }//ends startSession



  //randomize Quesitons and participantsArray
  function randomize (array){
        console.log("inside randomizePeople");
    var m = array.length,
        t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
  }//ends randomize

  return {

    //user related functionality
    userObject : userObject,
    getuser: getuser,
    logout: logout,

    //chooseTheme related functionality
    //theme variables
    currentThemeObject: currentThemeObject,
    themes: themes,
    //theme functions
    getAllThemes: getAllThemes,
    createTheme: createTheme,
    updateTheme: updateTheme,








    currentSessionObject: currentSessionObject,
    createSession: createSession,
    saveParticipants: saveParticipants,
    startSession: startSession,
    randoms: randoms,
    saveSession: saveSession
  };//ends return
}]);//ends myApp.factory
