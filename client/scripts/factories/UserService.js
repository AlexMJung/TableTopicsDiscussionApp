myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var currentSessionObject = {};

  function createSession(newSessionObject){
    $http.post('/createSession/addSession', newSessionObject).then(function(response){
        console.log("after post response:", response);
        currentSessionObject.data = response.data;
        console.log(currentSessionObject, "currentSessionObject");
        $location.path("/addParticipants");
    });//ends post to addSession
  }//ends createSession

  function saveParticipants(id, newSessionObject){
    console.log("going to save some changes");
    console.log("id and newSessionObject.participantsArray", id, newSessionObject.participantsArray);
    $http.put('/createSession/saveParticipants', putObject).then(function(response){
      console.log("response");
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
    createSession: createSession,
    saveParticipants: saveParticipants,
    getuser : getuser,
    logout : logout
  };//ends return
}]);//ends myApp.factory
