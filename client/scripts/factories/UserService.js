myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var currentSessionObject = {};
  var allSessions = {};

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
    $location.path("/session");
    });//ends put to saveParticipants
  }//ends saveParticipants

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

  return {
    userObject : userObject,
    currentSessionObject: currentSessionObject,
    allSessions: allSessions,
    getAllSessions: getAllSessions,
    createSession: createSession,
    saveParticipants: saveParticipants,
    getuser : getuser,
    logout : logout
  };//ends return
}]);//ends myApp.factory
