myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var sessionObject = {};
  var sessionName = "Firsties";
  var theme = "Interview Questions";
  var questionsArray = ["Tell me about a time you went above and beyond.","What is your biggest fear?","How many kittens are too many?"];

  function addQuestion(newQuestion){
    console.log("I'm trying to add a newQuestion");
    console.log("This question:", newQuestion);
  }//ends addQuestion

  function createSession(newSessionObject){
    console.log("I'm trying to create a newSession");

  }//ends createSession

  sessionObject.sessionName = sessionName;
  sessionObject.theme = theme;
  sessionObject.questionsArray = questionsArray;

  console.log("sessionObject", sessionObject);

  $scope.newSession;
  $scope.newTheme;
  $scope.newQuestion;

  $scope.addQuestion = addQuestion;
  $scope.createSession = createSession;

  $scope.sessionObject = sessionObject;

}]);
