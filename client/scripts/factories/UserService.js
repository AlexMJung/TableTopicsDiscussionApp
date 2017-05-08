myApp.factory('UserService', ['$http', '$location', function($http, $location){

//users
  //variables
  var userObject = {};

  //functions
  function getuser(){
    $http.get('/user').then(function(response) {
        if(response.data.username) {
            userObject.userName = response.data.username;
        } else {
            $location.path("/login");
        }
    });//ends $http.get/user
  }//ends getuser

  function logout(){
    // currentThemeObject.theme = '';
    // currentThemeObject.questionsArray = [];
    // currentSessionObject.participantsArray =[];
    $http.get('/user/logout').then(function(response) {
      $location.path("/login");
      location.reload();
    });//ends $http.get/user/logout
  }//ends logout


//chooseTheme
  //variables
  var themes = {};
  var currentThemeObject = {};
  currentThemeObject.theme = '';
  currentThemeObject.questionsArray = [];

  //functions
  function getAllThemes(){
    $http.get('/themes/getAll').then(function(response){
      themes.data = response.data;
      return themes.data;
    });//ends http.get/themes/getAll
  }//ends getAllThemes

  function addTheme(newThemeObject){
    $http.post('/themes/addTheme', newThemeObject).then(function(response){
        currentThemeObject.data = response.data;
        currentSessionObject.theme = currentThemeObject.data;
        $location.path("/addParticipants");
    });//ends http.post/themes/addTheme
  }//ends createTheme

  function updateTheme(updateObject){
    console.log("updateObject",updateObject);
    $http.put('/themes/updateTheme', updateObject).then(function(response){
      currentThemeObject.data = response.data;
      currentSessionObject.theme = currentThemeObject.data;
      $location.path("/addParticipants");
    });//ends http.put/themes/updateTheme
  }//ends updateTheme

//addParticipants
  var currentSessionObject = {};
  currentSessionObject.theme = currentThemeObject;
  currentSessionObject.participantsArray = [];

  function saveSession(currentSessionObject){

    if(currentSessionObject.theme.questionsArray.length < currentSessionObject.participantsArray.length){
      console.log("you have fewer questions than participants, that is not going to work.");
    }

    $http.post('/sessions/addSession', currentSessionObject).then(function(response){
      currentSessionObject = {};
      currentSessionObject.data = response.data;
      $location.path("/sessionIntro");
    });//ends http.post/sessions.addSession
  }//ends saveSession

//sessionIntro
  var randoms = {};
  randoms.randomQuestions = [];
  randoms.randomParticipants = [];

  function startSession(currentSessionObject){
    var questions = angular.copy(currentSessionObject.theme.questionsArray);
    var participants = angular.copy(currentSessionObject.participantsArray);
    randoms.randomQuestions = randomize(questions);
    randoms.randomParticipants = randomize(participants);
    randoms.numRound = participants.length;
    randoms.currentRound = 0;
    var speaker = randoms.randomParticipants[randoms.currentRound].id;
    var speakers = currentSessionObject.participantsArray;
    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].id){
        speakers[i].speakStatus = 'isSpeaking';
      }
    }
    $location.path("/session");
  }//ends startSession

  //randomize Quesitons and participantsArray
  function randomize (array){
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

//session




  return {
    userObject : userObject,
    getuser: getuser,
    logout: logout,

    currentThemeObject: currentThemeObject,
    themes: themes,
    getAllThemes: getAllThemes,
    addTheme: addTheme,
    updateTheme: updateTheme,

    currentSessionObject: currentSessionObject,
    saveSession: saveSession,

    //sessionIntro
    startSession: startSession,

    //session
    randoms: randoms


  };//ends return
}]);//ends myApp.factory
