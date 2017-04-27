myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.createSession = UserService.createSession;
  $scope.saveParticipants = UserService.saveParticipants;
  $scope.allSessions = UserService.allSessions;
  $scope.getAllSessions = UserService.getAllSessions;

  console.log("allSessions object in controller", $scope.allSessions);


  //define object
  var sessionObject = {};
  var sessionName = '';
  var sessionTheme = '';
  var questionsArray = [];
  var participantsArray = [];

  //assign object
  sessionObject.sessionName = sessionName;
  sessionObject.sessionTheme = sessionTheme;
  sessionObject.questionsArray = questionsArray;
  sessionObject.participantsArray = participantsArray;
  $scope.sessionObject = sessionObject;

  //bring newQuesiton into scope
  $scope.newQuestion = '';
  //bring functions into scope
  $scope.chooseSession = chooseSession;
  $scope.addQuestion = addQuestion;
  $scope.deleteQuestion = deleteQuestion;

  function chooseSession(object){
    console.log("chooseSession object", object);
    $scope.sessionObject = object;
    object = {};
  }//ends chooseSession

  function addQuestion(newQuestion){
    if (newQuestion === ''){
      return;
    }
    var question = angular.copy(newQuestion);
    $scope.sessionObject.questionsArray.push(question);
    $scope.newQuestion = '';
  }//ends addQuestion

  function deleteQuestion(index){
    $scope.sessionObject.questionsArray.splice(index,1);
  }//ends deleteQuestion

  //bring newParticipant into scope
  $scope.newParticipant = '';
  //bring functions into scope
  $scope.addParticipant = addParticipant;
  $scope.deleteParticipant = deleteParticipant;

  function addParticipant(newParticipant){
    if (newParticipant === ''){
      return;
    }
    var participant = angular.copy(newParticipant);
    $scope.sessionObject.participantsArray.push(participant);
    $scope.newParticipant = '';
    console.log("$scope.sessionObject.participantsArray", $scope.sessionObject.participantsArray);
  }//ends addQuestion

  function deleteParticipant(index){
    $scope.sessionObject.participantsArray.splice(index,1);
  }//ends deleteQuestion

  $scope.chooseNext = chooseNext;

  function chooseNext(){
    console.log("choosing a question, then choosing a name");

  }//ends chooseNext

}]);//ends UserController
