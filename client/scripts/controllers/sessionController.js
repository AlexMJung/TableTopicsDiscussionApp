myApp.controller('SessionController', ['$scope', '$interval', 'UserService', function($scope, $interval, UserService) {
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
      console.log("overMin", overMin);
      console.log("numSpeakers", speakers.length);
      $scope.currentSessionObject.percentage = 100 * (overMin/speakers.length);
      $scope.sessionStatus = 'done';
      return;
    }
    var speaker = randoms.randomParticipants[randoms.currentRound].name;

    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].name){
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
        console.log("plus one");
        $scope.timer += 1;
        if ($scope.timer >= 120){
          $scope.timerStatus = 3;
        }
        else if ($scope.timer >= 60){
          $scope.timerStatus = 2;
        }
      }
      else{
        console.log("is this happening");
        $interval.cancel(interval);
      }
    },1000);
  }//end theTimer

  $scope.startTimer = startTimer;
  function startTimer(){
    $scope.enabled = true;
    console.log("start timer");
    theTimer();
    $scope.sessionStatus = 'talking';
  }//ends start timer

  $scope.stopTimer = stopTimer;
  function stopTimer(timer, randoms){
    $scope.timerEnd = $scope.timer;
    $scope.enabled = false;
    var speaker = randoms.randomParticipants[randoms.currentRound].name;
    var speakers = $scope.currentSessionObject.participantsArray;
    console.log(speaker,speakers,"speaker and speakers");
    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].name){
        speakers[i].time = timer;
        speakers[i].speakStatus = 'hasSpoke';
      }
    }

    $scope.sessionStatus = 'next';
  }

  $scope.logoutAndUpdate = logoutAndUpdate;
  function logoutAndUpdate(currentSessionObject){
    console.log("this is the currentThemeObject",$scope.currentThemeObject);
    console.log("I need to make a put here", currentSessionObject);
    $scope.logout();
  }//ends logoutAndUpdate

  }]);//ends sessionIntroController
