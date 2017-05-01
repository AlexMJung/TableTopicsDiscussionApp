myApp.controller('AddParticipantsController', ['$scope', 'UserService', function($scope, UserService) {

  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  var participant = {};
  participant.name = '';
  participant.time = '';
  participant.hasSpoke = false;

  //var
  $scope.currentThemeObject = UserService.currentThemeObject;
  $scope.currentSessionObject = UserService.currentSessionObject;

  //needs to save participants / and thereby save session to the database collection sessions

  //add participants
  $scope.addParticipant = addParticipant;

  function addParticipant(newParticipantName){
    if (newParticipantName === ''){
      return;
    }

    var name = angular.copy(newParticipantName);

    participantObject = {};
    participantObject.name = name;
    participantObject.time = 0;
    participantObject.hasSpoke = false;
    $scope.currentSessionObject.participantsArray.push(participantObject);

    $scope.participant.name = '';
  }//ends addParticipant

  //deleteParticipant


}]);//ends addParticipantsController
//
// //bring newParticipant into scope
// $scope.newParticipant = '';
// //bring functions into scope
// $scope.addParticipant = addParticipant;
// $scope.deleteParticipant = deleteParticipant;
//
// var firstParticipant = true;
// console.log("firstParticipant", firstParticipant);
//
// function addParticipant(newParticipant){
//   if (newParticipant === ''){
//     return;
//   }
//   if (firstParticipant === true){
//     console.log("cleaning stuff out");
//     $scope.sessionObject.participantsArray = [];
//     $scope.currentSessionObject.data.participantsArray = [];
//     console.log($scope.currentSessionObject.data.participantsArray);
//     firstParticipant = false;
//   }
//   var participant = angular.copy(newParticipant);
//   $scope.sessionObject.participantsArray.push(participant);
//   $scope.newParticipant = '';
// }//ends addParticipant
//
// function deleteParticipant(index){
//   $scope.sessionObject.participantsArray.splice(index,1);
// }//ends deleteQuestion
