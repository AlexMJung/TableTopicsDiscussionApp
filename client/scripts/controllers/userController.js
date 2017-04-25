myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var sessionObject = {};
  var sessionName = '';
  var sessionTheme = '';
  var questionsArray = [];

  function addQuestion(newQuestion){
    console.log("I'm trying to add a newQuestion");
    console.log("This question:", newQuestion);
    var question = angular.copy(newQuestion);
    console.log("question copy:", question);
    $scope.sessionObject.questionsArray.push(question);
    $scope.newQuestion = '';
  }//ends addQuestion

  function deleteQuestion(){
    console.log("I'm trying to delete a Question");
    console.log("I have zero functionality right now");

  }//ends deleteQuestion

  function createSession(newSessionObject){
    console.log("I'm trying to create a newSession");
    console.log("This is the object I have:", newSessionObject);
    console.log("I think I need a sweet alert here");
    console.log("I think I have to make a post from here");
    console.log("Move on to the Enter Participants Screen");

  }//ends createSession

  sessionObject.sessionName = sessionName;
  sessionObject.sessionTheme = sessionTheme;
  sessionObject.questionsArray = questionsArray;

  $scope.newQuestion = '';

  $scope.addQuestion = addQuestion;
  $scope.deleteQuestion = deleteQuestion;
  $scope.createSession = createSession;

  $scope.sessionObject = sessionObject;

}]);
