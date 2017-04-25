myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var sessionObject = {};
  var sessionName = "Firsties";
  var theme = "Interview Questions";
  var questionsArray = ["Tell me about a time you went above and beyond.","What is your biggest fear?","How many kittens are too many?"];

  function addQuestion(){


  }//ends addQuestion

  sessionObject.sessionName = sessionName;
  sessionObject.theme = theme;
  sessionObject.questionsArray = questionsArray;

  console.log("sessionObject", sessionObject);

  $scope.newSession;
  $scope.newTheme;
  $scope.newQuestion;
  $scope.addQuestion = addQuestion;

  $scope.sessionObject = sessionObject;

}]);
