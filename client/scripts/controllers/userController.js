myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var sessionObject = {};
  var sessionName = '';
  var theme = '';
  var questionsArray = [];

  function addQuestion(newQuestion){
    console.log("I'm trying to add a newQuestion");
    console.log("This question:", newQuestion);
    var question = angular.copy(newQuestion);
    console.log("question copy:", question);
    $scope.sessionObject.questionsArray.push(question);
    $scope.newQuestion = '';

  }//ends addQuestion

  function createSession(newSessionObject){
    console.log("I'm trying to create a newSession");

  }//ends createSession

  sessionObject.sessionName = sessionName;
  sessionObject.theme = theme;
  sessionObject.questionsArray = questionsArray;

  console.log("sessionObject", sessionObject);

  $scope.newSession = '';
  $scope.newTheme = '';
  $scope.newQuestion = '';

  $scope.addQuestion = addQuestion;
  $scope.createSession = createSession;

  $scope.sessionObject = sessionObject;

}]);
