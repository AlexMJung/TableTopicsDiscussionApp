myApp.controller('AddParticipantsController', ['$scope', 'UserService', function($scope, UserService) {

  console.log("loads AddParticipantsController");
  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var participant = {};
  participant.name = '';
  participant.time = '';
  participant.speakStatus = 'hasNot';

  //var
  $scope.currentThemeObject = UserService.currentThemeObject;
  $scope.currentSessionObject = UserService.currentSessionObject;

  //needs to save participants / and thereby save session to the database collection sessions

  //add participants
  $scope.addParticipant = addParticipant;
  var idNum = 0;
  function addParticipant(newParticipantName){
    if (newParticipantName === ''){
      return;
    }
    var name = angular.copy(newParticipantName);

    participantObject = {};
    participantObject.id = idNum;
    participantObject.name = name;
    participantObject.time = 0;
    participantObject.speakStatus = 'hasNot';
    console.log("I made this person!", participantObject);
    $scope.currentSessionObject.participantsArray.push(participantObject);

    $scope.participant.name = '';
    idNum += 1;
    console.log("idnum", idNum);
  }//ends addParticipant

  //deleteParticipant
  $scope.deleteParticipant =deleteParticipant;

  function deleteParticipant(index){
    $scope.currentSessionObject.participantsArray.splice(index,1);
  }//ends deleteparticipant

  //saveParticipants post Session to db
  $scope.saveSession = UserService.saveSession;


}]);//ends addParticipantsController
