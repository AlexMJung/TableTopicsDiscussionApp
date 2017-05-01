myApp.controller('UserController', ['$scope', '$http', '$location','$interval', '$animate', 'UserService', function($scope, $http, $location, $interval, $animate, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.createSession = UserService.createSession;
  $scope.saveParticipants = UserService.saveParticipants;
  $scope.allThemes = UserService.allThemes;
  $scope.getAllThemes = UserService.getAllThemes;
  $scope.startSession = UserService.startSession;
  $scope.randoms = UserService.randoms;
  $scope.saveSession = UserService.saveSession;

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
    $scope.sessionObject = object;
    $scope.sessionObject.participantsArray = [];
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

  var firstParticipant = true;
  console.log("firstParticipant", firstParticipant);

  function addParticipant(newParticipant){
    if (newParticipant === ''){
      return;
    }
    if (firstParticipant === true){
      console.log("cleaning stuff out");
      $scope.sessionObject.participantsArray = [];
      $scope.currentSessionObject.data.participantsArray = [];
      console.log($scope.currentSessionObject.data.participantsArray);
      firstParticipant = false;
    }
    var participant = angular.copy(newParticipant);
    $scope.sessionObject.participantsArray.push(participant);
    $scope.newParticipant = '';
  }//ends addParticipant

  function deleteParticipant(index){
    $scope.sessionObject.participantsArray.splice(index,1);
  }//ends deleteQuestion

  $scope.chooseNext = chooseNext;

  function chooseNext(timer, object){
    console.log("choosing a question, then choosing a name");
    console.log("I've got this object to play with",object);
    console.log("This is the person that I think just spoke", object.randomParticipants[object.currentRound]);
    console.log("This is how long I think that they spoke for", $scope.timer);
    $scope.timer = 0;
    object.currentRound += 1;
  }//ends chooseNext

  $scope.timer = 0;
  $scope.timerEnd = 0;
  $scope.enabled = false;

  function theTimer(){
    var interval = $interval(function(){
      if($scope.enabled){
        console.log("plus one");
        $scope.timer += 1;
      }
      else{
        console.log("is this happening");
        $interval.cancel(interval);
      }
    },1000);
  }

  function startTimer(){
    $scope.enabled = true;
    console.log("start timer");
    theTimer();
  }//ends start timer

  $scope.startTimer = startTimer;

  function stopTimer(){
    console.log("stop timer");
    $scope.timerEnd = $scope.timer;
    $scope.enabled = false;

  }

  $scope.stopTimer = stopTimer;

  function endSession(){
    console.log("endSession");
  }

  $scope.endSession = endSession;




}]);//ends UserController
