myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var currentSessionObject = {};
  var factoryTest = {test:"Ill n'est pas d'orchestra"};

  function createSession(newSessionObject){
    $http.post('/createSession/addSession', newSessionObject).then(function(response){
        console.log("after post response:", response);
        currentSessionObject = response.data;
        console.log(currentSessionObject, "currentSessionObject");
        $location.path("/addParticipants");
    });//ends post to addSession
  }//ends createSession

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
    getuser : getuser,
    logout : logout,
    factoryTest: factoryTest
  };//ends return
}]);//ends myApp.factory
