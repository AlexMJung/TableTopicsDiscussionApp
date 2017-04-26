myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var sessionObject = {};
  var sessionName = '';
  var sessionTheme = '';
  var questionsArray = [];

  var currentSessionObject = {};

  sessionObject.sessionName = sessionName;
  sessionObject.sessionTheme = sessionTheme;
  sessionObject.questionsArray = questionsArray;

  $scope.newQuestion = '';

  $scope.addQuestion = addQuestion;
  $scope.deleteQuestion = deleteQuestion;
  $scope.createSession = createSession;

  $scope.sessionObject = sessionObject;

  $scope.currentSessionObject = currentSessionObject;

  function addQuestion(newQuestion){
    if (newQuestion === ''){
      return;
    }
    var question = angular.copy(newQuestion);
    console.log("question copy:", question);
    $scope.sessionObject.questionsArray.push(question);
    $scope.newQuestion = '';
  }//ends addQuestion

  function deleteQuestion(index){
    console.log("I'm trying to delete a Question");
    $scope.sessionObject.questionsArray.splice(index,1);

  }//ends deleteQuestion

  function createSession(newSessionObject){
    console.log("I'm trying to create a newSession");
    console.log("This is the object I have:", newSessionObject);
    console.log("I think I need a sweet alert here");
    console.log("I think I have to make a post from here");
    console.log("Move on to the Enter Participants Screen");

    $http.post('/createSession/addSession', newSessionObject).then(function(response){
        console.log("after post response:", response);
        currentSessionObject = response;
        console.log("after post, after get, currentSessionObject:", currentSessionObject);
        console.log("let's go to the /info (add users) page!");
        $location.path("/info");
    });//ends post to addSession


  }//ends createSession


}]);
