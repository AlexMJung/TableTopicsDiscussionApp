myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var currentSessionObject = {};
  var allSessions = {};
  var randoms = {};

  getAllSessions();

  function getAllSessions(){
    $http.get('/createSession/getAll').then(function(response){
      console.log("getAllSessions response", response);
      allSessions.data = response.data;
    });//ends http.get
  }//ends getAllSessions

  function createSession(newSessionObject){
    $http.post('/createSession/addSession', newSessionObject).then(function(response){
        currentSessionObject.data = response.data;
        $location.path("/addParticipants");
    });//ends post to addSession
  }//ends createSession

  function saveParticipants(id, newSessionObject){
    var putObject = {};
    putObject.id = id;
    putObject.participantsArray = newSessionObject.participantsArray;
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
    console.log("randomQuestions and then randomParticipants", randoms.randomQuestions, randoms.randomParticipants);
    $location.path("/session");

  }//ends startSession

  function getuser(){
    $http.get('/user').then(function(response) {
        if(response.data.username) {
            // user has a curret session on the server
            userObject.userName = response.data.username;
            console.log('User Data: ', userObject.userName);
        } else {
            // user has no session, bounce them back to the login page
            $location.path("/home");
        }
    });//ends $http.get
  }//ends getuser

  function logout(){
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });//ends $http.get
  }//end logout

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
    userObject : userObject,
    currentSessionObject: currentSessionObject,
    allSessions: allSessions,
    getAllSessions: getAllSessions,
    createSession: createSession,
    saveParticipants: saveParticipants,
    startSession: startSession,
    getuser: getuser,
    logout: logout,
    randoms: randoms
  };//ends return
}]);//ends myApp.factory
