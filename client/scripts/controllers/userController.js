myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.createSession = UserService.createSession;
  $scope.factoryTest = UserService.factoryTest;

  console.log("building a userController again");
  console.log("this is what I have for UserService.currentSessionObject", UserService.currentSessionObject);

  //define object
  var sessionObject = {};
  var sessionName = '';
  var sessionTheme = '';
  var questionsArray = [];
  //assign object
  sessionObject.sessionName = sessionName;
  sessionObject.sessionTheme = sessionTheme;
  sessionObject.questionsArray = questionsArray;
  $scope.sessionObject = sessionObject;

  //bring newQuesiton into scope
  $scope.newQuestion = '';
  //bring functions into scope
  $scope.addQuestion = addQuestion;
  $scope.deleteQuestion = deleteQuestion;

  $scope.test = "There is no band. No hay banda. It is a recording";


  function addQuestion(newQuestion, $event){
    $event.preventDefault();
    if (newQuestion === ''){
      return;
    }
    var question = angular.copy(newQuestion);
    $scope.sessionObject.questionsArray.push(question);
    $scope.newQuestion = '';
  }//ends addQuestion

  function deleteQuestion(index){
    console.log("I'm trying to delete a Question");
    $scope.sessionObject.questionsArray.splice(index,1);
  }//ends deleteQuestion

}]);//ends UserController
