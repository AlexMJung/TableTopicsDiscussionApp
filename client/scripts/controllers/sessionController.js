myApp.controller('SessionController', ['$scope', '$interval', '$location', 'UserService', function($scope, $interval, $location, UserService) {
  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.randoms = UserService.randoms;

  $scope.sessionStatus = 'ready'; //ready, talking, next, done

  $scope.chooseNext = chooseNext;
  function chooseNext(timer, randoms){
    $scope.timer = 0;
    $scope.timerStatus = 0;
    randoms.currentRound += 1;

    var speakers = $scope.currentSessionObject.participantsArray;
    if ((randoms.currentRound) === randoms.numRound){
      var overMin = 0;
      for (i = 0; i < speakers.length; i++){
        if (speakers[i].time >= 60 ){
          overMin += 1;
        }
      }
      $scope.currentSessionObject.percentage = 100 * (overMin/speakers.length);
      $scope.sessionStatus = 'done';
      return;
    }
    var speaker = randoms.randomParticipants[randoms.currentRound].id;

    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].id){
        speakers[i].speakStatus = 'isSpeaking';
      }
    }
    $scope.sessionStatus = 'ready';
  }//ends chooseNext

  $scope.timer = 0;
  $scope.timerEnd = 0;
  $scope.timerStatus = 0;
  $scope.enabled = false;

  function theTimer(){
    var interval = $interval(function(){
      if($scope.enabled){
        $scope.timer += 1;
        if ($scope.timer >= 15){
          $scope.timerStatus = 3;
        }
        else if ($scope.timer >= 10){
          $scope.timerStatus = 2;
        }
        else if ($scope.timer >= 5){
          $scope.timerStatus = 1;
        }
      }
      else{
        $interval.cancel(interval);
      }
    },1000);
  }//end theTimer

  $scope.startTimer = startTimer;
  function startTimer(){
    $scope.enabled = true;
    theTimer();
    $scope.sessionStatus = 'talking';
  }//ends start timer

  $scope.stopTimer = stopTimer;
  function stopTimer(timer, randoms){
    $scope.timerEnd = $scope.timer;
    $scope.enabled = false;
    var speaker = randoms.randomParticipants[randoms.currentRound].id;
    var speakers = $scope.currentSessionObject.participantsArray;
    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].id){
        speakers[i].time = timer;
        speakers[i].speakStatus = 'hasSpoke';
      }
    }

    $scope.sessionStatus = 'next';
  }
  $scope.currentThemeObject = UserService.currentThemeObject;

  $scope.startAnotherSession = startAnotherSession;
  function startAnotherSession(currentSessionObject){
    $scope.currentThemeObject.theme = '';
    $scope.currentThemeObject.questionsArray = [];
    currentSessionObject.participantsArray =[];
    $location.path("/chooseTheme");
    location.reload();
  }//ends logoutAndUpdate

  }]);//ends sessionIntroController
