myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var currentSessionObject = {};

  function createSession(newSessionObject){
    $http.post('/createSession/addSession', newSessionObject).then(function(response){
        console.log("after post response:", response);
        currentSessionObject = response.data;
        $scope.currentSessionObject = currentSessionObject;
        console.log("what?", $scope.currentSessionObject);
        $location.path("/info");
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
    logout : logout
  };//ends return
}]);//ends myApp.factory
