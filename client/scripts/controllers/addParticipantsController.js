myApp.controller('AddParticipantsController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var participant = {};
  participant.name = '';
  participant.time = '';
  participant.speakStatus = 'hasNot';
  $scope.participant = participant;

  //var
  $scope.currentThemeObject = UserService.currentThemeObject;
  $scope.currentSessionObject = UserService.currentSessionObject;

  //needs to save participants / and thereby save session to the database collection sessions

  //add participants
  $scope.addParticipant = addParticipant;
  var idNum = 0;
  function addParticipant(newParticipantName){
    console.log("inside addParticipant with:", newParticipantName);
    if (newParticipantName === ''){
      return;
    }
    var name = angular.copy(newParticipantName);

    participantObject = {};
    participantObject.id = idNum;
    participantObject.name = name;
    participantObject.time = 0;
    participantObject.speakStatus = 'hasNot';
    $scope.currentSessionObject.participantsArray.push(participantObject);
    console.log("$scope.currentSessionObject.participantsArray",$scope.currentSessionObject.participantsArray);
    $scope.participant.name = '';
    idNum += 1;
  }//ends addParticipant

  //deleteParticipant
  $scope.deleteParticipant =deleteParticipant;

  function deleteParticipant(index){
    $scope.currentSessionObject.participantsArray.splice(index,1);
  }//ends deleteparticipant

  //saveParticipants post Session to db
  $scope.saveSession = UserService.saveSession;

  $scope.goBacktoChooseTheme = goBacktoChooseTheme;
  function goBacktoChooseTheme(){
      $location.path("/chooseTheme");
  }

  //sockets
  socketFunction();
  function socketFunction(){
    var socket = io();
    socket.on('emitName', function(name){
        console.log("I've heard from the server that I need to do something");
        $scope.$apply(addParticipant(name));
    });
  }


}]);//ends addParticipantsController
