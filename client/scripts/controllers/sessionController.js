myApp.controller('SessionController', ['$scope', '$interval', 'UserService', function($scope, $interval, UserService) {
  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.randoms = UserService.randoms;

  $scope.chooseNext = chooseNext;
  function chooseNext(timer, randoms){
    $scope.timer = 0;
    $scope.timerStatus = 0;
    randoms.currentRound += 1;
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
          $scope.timerStatus = 2;
        }
        else if ($scope.timer >= 60){
          $scope.timerStatus = 1;
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
  }//ends start timer

  $scope.stopTimer = stopTimer;
  function stopTimer(timer, randoms){
    console.log("stop timer");
    $scope.timerEnd = $scope.timer;
    $scope.enabled = false;
    var speaker = randoms.randomParticipants[randoms.currentRound].name;
    var speakers = $scope.currentSessionObject.participantsArray;
    for (var i = 0; i < speakers.length; i++){
      if (speaker === speakers[i].name){
        speakers[i].time = timer;
        speakers[i].speakStatus = 'hasSpoke';
      }
    }
    console.log($scope.currentSessionObject,"speakStatus");
  }

  $scope.logoutAndUpdate = logoutAndUpdate;
  function logoutAndUpdate(currentSessionObject){
    console.log("this is the currentThemeObject",$scope.currentThemeObject);
    console.log("I need to make a put here", currentSessionObject);
    $scope.logout();
  }//ends logoutAndUpdate

  }]);//ends sessionIntroController
